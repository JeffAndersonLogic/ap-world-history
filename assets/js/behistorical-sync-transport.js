// The part of the student response backup that talks to Google.
//
// assets/js/behistorical-sync.js is the engine and knows nothing about Google.
// This file is what it is handed. It is loaded only when the backup is on, so a
// student whose backup is off never downloads it and never contacts Google.
//
// TWO HALVES, AND THE SPLIT IS ON PURPOSE
//
//   Sign-in uses the Firebase Authentication SDK, loaded from Google's own
//   host at a pinned version. Doing Google sign-in by hand is a lot of security
//   code to get wrong for no benefit.
//
//   Reading and writing responses uses Firestore's REST API directly, with the
//   student's ID token, and NOT the Firestore SDK. The SDK keeps its own queue
//   of unsent writes and applies them whenever it reconnects. That queue would
//   sit underneath this engine's queue, invisible to it, and could apply a
//   stale write after a newer one, or after the student had chosen a version in
//   the conflict dialog. REST has no hidden queue: a write is acknowledged by
//   the server or it failed, and the engine, which keeps its queue in the
//   student's own storage, is the only thing that ever retries. REST also gives
//   the conflict rule its precondition for free: an update that names the
//   revision (updateTime) it was based on is refused if the document has moved,
//   with no extra read.
//
// THE RULES STILL DECIDE EVERYTHING. A request carries the student's token, so
// firestore/firestore.rules is what answers it, exactly as it would answer the
// SDK. Nothing here widens what a student can do; the shapes below are the ones
// those rules accept, and sync-transport.test.js runs them against the rules in
// the emulator.
//
// ERRORS ARE NORMALISED to codes the engine understands:
//   offline   the network is down, the host is blocked, or the server is down
//   auth      the sign-in has expired
//   denied    the rules refused: wrong account, or sign-in not approved
//   quota     the free plan's daily quota is spent
//   conflict  the document has moved since the engine last looked
//   exists    a create found a document already there
//   other     anything else; the engine backs off and tries again later
(function (global) {
  'use strict';

  var SCHEMA_VERSION = 1;

  function fail(code, message) {
    var e = new Error(message || code);
    e.code = code;
    return e;
  }

  // ── Firestore REST ────────────────────────────────────────────────────────
  //
  // o.projectId, o.tenantId, o.courseId
  // o.getUser()      { uid }
  // o.getToken()     Promise<string>, a Firebase ID token
  // o.fetchImpl      fetch, injectable for tests
  // o.apiBase        https://firestore.googleapis.com/v1, or the emulator
  function createRest(o) {
    var base = (o.apiBase || 'https://firestore.googleapis.com/v1').replace(/\/$/, '');
    var dbPath = 'projects/' + o.projectId + '/databases/(default)/documents';
    var tenantPath = dbPath + '/tenants/' + o.tenantId;
    var doFetch = o.fetchImpl || function () { return global.fetch.apply(global, arguments); };

    function docName(uid, topic, slot) {
      return tenantPath + '/responses/' + uid + '__' + topic + '__' + slot;
    }

    function str(v) { return { stringValue: String(v) }; }
    function confidenceField(c) {
      var s = String(c == null ? '' : c);
      return /^[1-5]$/.test(s) ? { integerValue: s } : { stringValue: '' };
    }

    function readConfidence(field) {
      if (!field) return '';
      if (field.integerValue != null) return String(field.integerValue);
      return '';
    }

    function readDoc(document) {
      var f = document.fields || {};
      var name = String(document.name || '');
      return {
        slot: name.slice(name.lastIndexOf('/') + 1).split('__')[2] || '',
        text: f.text && f.text.stringValue != null ? f.text.stringValue : '',
        confidence: readConfidence(f.confidence),
        rev: document.updateTime
      };
    }

    function classify(status, body) {
      var message = (body && body.error && body.error.message) || '';
      var state = (body && body.error && body.error.status) || '';
      if (status === 401) return 'auth';
      if (status === 403 || state === 'PERMISSION_DENIED') return 'denied';
      if (status === 409 && state === 'ALREADY_EXISTS') return 'exists';
      if (status === 409 || state === 'ABORTED') return 'conflict';
      if (status === 404 || status === 412 || state === 'FAILED_PRECONDITION' || state === 'NOT_FOUND') return 'conflict';
      // A 429 is both the daily quota and an ordinary rate limit. Only the first
      // is a reason to stop for the day; the second is a reason to wait.
      if (status === 429 || state === 'RESOURCE_EXHAUSTED') return /quota/i.test(message) ? 'quota' : 'other';
      return 'other';
    }

    function call(path, body, opts) {
      return Promise.resolve()
        .then(function () { return o.getToken(); })
        .then(function (token) {
          var init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
            body: JSON.stringify(body)
          };
          // A page that is closing still gets its last write out.
          if (opts && opts.keepalive) init.keepalive = true;
          return doFetch(base + '/' + path, init);
        }, function (error) {
          // No token: the sign-in is gone or could not refresh.
          throw fail(error && error.code === 'offline' ? 'offline' : 'auth', 'no sign-in token');
        })
        .then(function (response) {
          return response.text().then(function (text) {
            var json = null;
            try { json = text ? JSON.parse(text) : null; } catch (e) { json = null; }
            if (response.ok) return json;
            var first = Array.isArray(json) ? json[0] : json;
            throw fail(classify(response.status, first), (first && first.error && first.error.message) || ('HTTP ' + response.status));
          });
        }, function (error) {
          if (error && error.code) throw error;
          // fetch itself rejected: no route to the host.
          throw fail('offline', 'network unreachable');
        });
    }

    function exists(uid, topic, slot) {
      // GET, so a create that was refused can be told apart: refused because the
      // document is already there (a race, so the engine should look again) or
      // refused by the rules (a real refusal).
      return Promise.resolve()
        .then(function () { return o.getToken(); })
        .then(function (token) {
          return doFetch(base + '/' + docName(uid, topic, slot), { headers: { Authorization: 'Bearer ' + token } });
        })
        .then(function (response) { return response.status === 200; })
        .catch(function () { return false; });
    }

    var api = {
      // Every response this student has for one topic, keyed by slot.
      fetch: function (topic) {
        var uid = o.getUser().uid;
        return call(tenantPath + ':runQuery', {
          structuredQuery: {
            from: [{ collectionId: 'responses' }],
            where: {
              compositeFilter: {
                op: 'AND',
                filters: [
                  { fieldFilter: { field: { fieldPath: 'studentId' }, op: 'EQUAL', value: str(uid) } },
                  { fieldFilter: { field: { fieldPath: 'topicKey' }, op: 'EQUAL', value: str(topic) } }
                ]
              }
            }
          }
        }).then(function (rows) {
          var out = {};
          (rows || []).forEach(function (row) {
            if (!row || !row.document) return;
            var d = readDoc(row.document);
            if (d.slot) out[d.slot] = { text: d.text, confidence: d.confidence, rev: d.rev };
          });
          return out;
        });
      },

      create: function (topic, slot, value, clientId, opts) {
        var uid = o.getUser().uid;
        var name = docName(uid, topic, slot);
        return call(dbPath + ':commit', {
          writes: [{
            update: {
              name: name,
              fields: {
                tenantId: str(o.tenantId),
                studentId: str(uid),
                courseId: str(o.courseId),
                topicKey: str(topic),
                slotId: str(slot),
                text: str(value.text),
                confidence: confidenceField(value.confidence),
                clientId: str(clientId),
                schemaVersion: { integerValue: String(SCHEMA_VERSION) }
              }
            },
            // Refused if it is already there, so a second device cannot create
            // over the first one's document.
            currentDocument: { exists: false },
            // The server's clock, never ours: the rules require
            // updatedAt == request.time, and createdAt on a create.
            updateTransforms: [
              { fieldPath: 'createdAt', setToServerValue: 'REQUEST_TIME' },
              { fieldPath: 'updatedAt', setToServerValue: 'REQUEST_TIME' }
            ]
          }]
        }, opts).then(function (json) {
          var result = json && json.writeResults && json.writeResults[0];
          return { rev: result && result.updateTime };
        }, function (error) {
          if (error.code !== 'denied') throw error;
          return exists(uid, topic, slot).then(function (there) {
            throw there ? fail('exists', 'document already exists') : error;
          });
        });
      },

      // Names the revision the engine believes is current. The server refuses it
      // if the document has changed since, which is the conflict rule's
      // precondition.
      update: function (topic, slot, value, clientId, rev, opts) {
        var uid = o.getUser().uid;
        return call(dbPath + ':commit', {
          writes: [{
            update: {
              name: docName(uid, topic, slot),
              fields: {
                text: str(value.text),
                confidence: confidenceField(value.confidence),
                clientId: str(clientId)
              }
            },
            updateMask: { fieldPaths: ['text', 'confidence', 'clientId'] },
            currentDocument: { updateTime: rev },
            updateTransforms: [{ fieldPath: 'updatedAt', setToServerValue: 'REQUEST_TIME' }]
          }]
        }, opts).then(function (json) {
          var result = json && json.writeResults && json.writeResults[0];
          return { rev: result && result.updateTime };
        }, function (error) {
          if (error.code !== 'denied') throw error;
          // The rules answer an update to a document that is not there the same
          // way they answer a refusal, because there is no stored record to
          // check ownership against. An administrator deleting a record (district
          // retention is done with admin credentials, which the rules cannot stop)
          // must not turn the student's account into "not allowed". Look: if the
          // record is gone this is a conflict, and the engine will look again and
          // write it afresh; if it is there, the refusal is real.
          return api.fetch(topic).then(function (docs) {
            throw docs[slot] ? error : fail('conflict', 'the saved copy is gone');
          });
        });
      }
    };
    return api;
  }

  // ── Sign-in ───────────────────────────────────────────────────────────────
  //
  // Firebase Authentication, Google provider, steered to the school domain and
  // checked again afterwards. The SDK is imported from Google at a pinned
  // version rather than bundled, because this repository has no build step and
  // is served as plain files.
  function createAuth(cfg, deps) {
    var sdk = null;
    var auth = null;
    var current = null;
    var listeners = [];
    var base = 'https://www.gstatic.com/firebasejs/' + cfg.sdkVersion;

    function notify() { listeners.forEach(function (cb) { try { cb(current); } catch (e) { /* a listener must not break auth */ } }); }

    function load() {
      if (sdk) return Promise.resolve(sdk);
      var importer = (deps && deps.importModule) || function (url) { return import(url); };
      return Promise.all([importer(base + '/firebase-app.js'), importer(base + '/firebase-auth.js')])
        .then(function (mods) {
          sdk = { app: mods[0], auth: mods[1] };
          var app = sdk.app.initializeApp({
            apiKey: cfg.firebase.apiKey,
            authDomain: cfg.firebase.authDomain,
            projectId: cfg.firebase.projectId,
            appId: cfg.firebase.appId
          });
          auth = sdk.auth.getAuth(app);
          sdk.auth.onAuthStateChanged(auth, function (u) {
            current = u ? { uid: u.uid, email: u.email || '' } : null;
            notify();
          });
          return auth.authStateReady ? auth.authStateReady() : null;
        })
        .then(function () { return sdk; }, function () {
          sdk = null;
          throw fail('offline', 'the sign-in library could not load');
        });
    }

    function authError(error) {
      var code = String((error && error.code) || '');
      if (code === 'auth/network-request-failed') return fail('offline', code);
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return null;
      if (code === 'auth/popup-blocked') return fail('other', code);
      return fail('denied', code || 'sign-in refused');
    }

    return {
      ready: function () { return load().then(function () {}); },
      user: function () { return current; },
      onAuthChange: function (cb) { listeners.push(cb); },
      getToken: function () {
        if (!auth || !auth.currentUser) return Promise.reject(fail('auth', 'not signed in'));
        return auth.currentUser.getIdToken().catch(function (e) {
          var code = String((e && e.code) || '');
          throw fail(code === 'auth/network-request-failed' ? 'offline' : 'auth', code);
        });
      },
      signIn: function () {
        return load().then(function (s) {
          var provider = new s.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: 'select_account' });
          return s.auth.signInWithPopup(auth, provider);
        }).then(function (result) {
          var email = String((result && result.user && result.user.email) || '').toLowerCase();
          // The whole domain after the @, never a suffix: evilzcs.k12.in.us ends
          // in a district name and is not one.
          var domain = email.slice(email.lastIndexOf('@') + 1);
          var allowed = cfg.allowedDomains || [];
          if (allowed.length && allowed.indexOf(domain) === -1) {
            return sdk.auth.signOut(auth).then(function () { throw fail('denied', 'not a school account'); });
          }
          // The state listener fires too, a moment later. The engine asks for the
          // user as soon as this resolves, so it must already be there.
          current = { uid: result.user.uid, email: email };
        }, function (error) {
          var e = authError(error);
          if (e) throw e;
        });
      }
    };
  }

  // What the engine is handed.
  function create(cfg, deps) {
    var authSide = (deps && deps.auth) || createAuth(cfg, deps);
    var rest = createRest({
      projectId: cfg.firebase.projectId,
      tenantId: cfg.tenantId,
      courseId: cfg.courseId,
      getUser: function () { return authSide.user(); },
      getToken: function () { return authSide.getToken(); },
      fetchImpl: deps && deps.fetchImpl,
      apiBase: deps && deps.apiBase
    });
    return {
      ready: authSide.ready,
      user: authSide.user,
      onAuthChange: authSide.onAuthChange,
      signIn: authSide.signIn,
      fetch: rest.fetch,
      create: rest.create,
      update: rest.update
    };
  }

  var api = { create: create, createRest: createRest, createAuth: createAuth };
  global.BHSyncTransport = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
