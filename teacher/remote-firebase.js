/* The iPad remote's connection through BeHistorical's own Firebase project.
 *
 * WHY THIS EXISTS (2026-11-04). remote-relay.js passes every button press
 * through the public ntfy.sh relay, which allows 250 messages a day per internet
 * address. A whole school reaches the internet through one address, one tap is
 * two messages, and a lesson is about a hundred, so the remote stopped working
 * every afternoon. Firestore's free plan counts 20,000 writes a day for the
 * whole project instead, and firestore.googleapis.com is already reachable on
 * the school network because the student backup uses it.
 *
 * WHAT TRAVELS. One document, tenants/zcs/remoteSessions/<36 hex characters>.
 * It holds who started the session, when, the last slide number and deck title
 * the laptop reported, and the last button the iPad pressed. Never teacher
 * notes, never student work. firestore/firestore.rules accepts nothing else.
 *
 * WHO MAY WRITE. The laptop signs in with a ZCS staff Google account and is the
 * only side that can start a session. The iPad does not sign in, because Google
 * sign-in does not work in iPad Safari; the 144-bit id in the QR code is its
 * permission, sessions die sixteen hours after they start, and the server caps
 * the iPad at 3,000 writes per session.
 *
 * ONE DOCUMENT, SO MESSAGES CAN MERGE. A listener can skip straight from one
 * state of the document to a later one, so two quick presses may arrive as only
 * the second. ipad-remote.html therefore sends where to go (goto slide 7) rather
 * than what to do (next), so the latest message is always enough on its own.
 *
 * The interface matches remote-relay.js, so the two pages can use either:
 *   connect({ session, sender: 'host'|'ipad', onmessage, onready, onstatus,
 *             onsession })  ->  { publish(payload), retry(), signIn(), close() }
 * onstatus(kind, message) kinds: connecting, ready, signin, waiting, limited,
 * unreachable, offline, ended.
 */
(function (global) {
  'use strict';

  // Must match scripts/lib/sync-config.js. remote-firebase-config.test.js, in
  // the offline suite, fails the push if the two disagree.
  var CONFIG = {
    sdkVersion: '12.19.0',
    tenantId: 'zcs',
    staffDomain: 'zcs.k12.in.us',
    firebase: {
      apiKey: 'AIzaSyDq4oEqKf_tjZJPmC1iyZ9hbrfz0E07Prs',
      authDomain: 'behistoric.firebaseapp.com',
      projectId: 'behistoric',
      appId: '1:20943260001:web:d639c8b9f833701a62dd20'
    }
  };
  var SESSION_ID = /^[a-f0-9]{36}$/;
  var IPAD_TYPES = ['hello', 'ping', 'next', 'prev', 'start', 'goto', 'timer-toggle', 'timer-reset'];
  var WRITE_TIMEOUT = 8000;
  var STALE_MS = 90000;

  var sdk = null;
  function load(withAuth) {
    var base = 'https://www.gstatic.com/firebasejs/' + CONFIG.sdkVersion;
    if (!sdk) {
      sdk = Promise.all([import(base + '/firebase-app.js'), import(base + '/firebase-firestore.js')])
        .then(function (m) {
          var app = m[0].getApps().length ? m[0].getApp() : m[0].initializeApp(CONFIG.firebase);
          return { app: app, fs: m[1], db: m[1].getFirestore(app) };
        });
      sdk.catch(function () { sdk = null; });
    }
    if (!withAuth) return sdk;
    return sdk.then(function (s) {
      if (s.auth) return s;
      return import(base + '/firebase-auth.js').then(function (a) {
        s.authMod = a;
        s.auth = a.getAuth(s.app);
        return (s.auth.authStateReady ? s.auth.authStateReady() : null);
      }).then(function () { return s; });
    });
  }

  function makeSessionId() {
    var a = new Uint8Array(18);
    crypto.getRandomValues(a);
    return Array.from(a, function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  function makeId() {
    return crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(16).slice(2);
  }

  function emailDomain(user) {
    var email = String((user && user.email) || '').toLowerCase();
    return email.slice(email.lastIndexOf('@') + 1);
  }

  function withTimeout(promise) {
    return new Promise(function (resolve, reject) {
      var t = setTimeout(function () { var e = new Error('timeout'); e.code = 'deadline-exceeded'; reject(e); }, WRITE_TIMEOUT);
      promise.then(function (v) { clearTimeout(t); resolve(v); }, function (e) { clearTimeout(t); reject(e); });
    });
  }

  function connect(options) {
    var side = options.sender === 'host' ? 'host' : 'ipad';
    var other = side === 'host' ? 'ipad' : 'host';
    var session = String(options.session || '');
    var seen = {};
    var unsubscribe = null, retryTimer = null, closed = false, ready = false, generation = 0, uid = '';

    function report(kind, message) { if (options.onstatus) options.onstatus(kind, message); }
    function ref(s) { return s.fs.doc(s.db, 'tenants/' + CONFIG.tenantId + '/remoteSessions/' + session); }

    function stop() {
      clearTimeout(retryTimer); retryTimer = null;
      if (unsubscribe) { try { unsubscribe(); } catch (e) { /* already gone */ } unsubscribe = null; }
      ready = false;
    }

    function later(ms) {
      clearTimeout(retryTimer);
      var current = generation;
      retryTimer = setTimeout(function () { if (current === generation) restart(); }, ms);
    }

    function failed(error) {
      if (closed) return;
      var code = String((error && error.code) || '');
      stop();
      if (code === 'resource-exhausted') {
        report('limited', 'The free daily allowance on BeHistorical’s Firebase project is used up. It resets overnight; use the laptop for now.');
        return;
      }
      if (code === 'permission-denied') {
        if (side === 'ipad') {
          // Usually the laptop has not finished signing in and starting the
          // session yet. Keep looking, quietly, while the iPad is awake.
          report('waiting', 'Waiting for the laptop to start this session. If it has been more than a minute, scan the laptop’s QR code again.');
          later(5000);
          return;
        }
        report('signin', 'This account cannot start a remote session. Sign in with your zcs.k12.in.us staff account.');
        return;
      }
      if (!navigator.onLine) { report('offline', 'This device is offline. Reconnect to the internet, then Retry.'); return; }
      report('unreachable', 'Cannot reach BeHistorical’s Firebase connection. Check the Wi-Fi, then Retry.');
      later(10000);
    }

    function receive(snapshot) {
      if (closed) return;
      if (!ready) { ready = true; report('ready', 'Connected'); if (options.onready) options.onready(); }
      var data = snapshot.exists() ? snapshot.data() : null;
      var m = data && data[other];
      if (!m || !m.id || seen[m.id]) return;
      seen[m.id] = true;
      // A message the other device left long ago is history, not a command:
      // an iPad joining must not be told it is connected to a laptop that has
      // since been closed, and a laptop must not replay an old button press.
      var at = data[other + 'At'];
      var when = at && at.toMillis ? at.toMillis() : 0;
      if (when && Date.now() - when > STALE_MS) return;
      if (options.onmessage) {
        options.onmessage({ sender: other, type: m.type, index: m.index, count: m.count || '', title: m.title || '', messageId: m.id });
      }
    }

    function listen(s, current) {
      if (current !== generation || closed) return;
      unsubscribe = s.fs.onSnapshot(ref(s), receive, function (error) { if (current === generation) failed(error); });
    }

    // The laptop's side: signed in as staff, with a live session of its own.
    function ensureSession(s, current) {
      var user = s.auth.currentUser;
      if (!user || emailDomain(user) !== CONFIG.staffDomain) {
        report('signin', 'Sign in with your zcs.k12.in.us Google account to start the iPad remote.');
        return Promise.resolve(false);
      }
      uid = user.uid;
      var fresh = function () {
        session = makeSessionId();
        if (options.onsession) options.onsession(session);
        return withTimeout(s.fs.setDoc(ref(s), {
          tenantId: CONFIG.tenantId, ownerUid: uid, createdAt: s.fs.serverTimestamp(), ipadWrites: 0
        })).then(function () { return true; });
      };
      if (!SESSION_ID.test(session)) return fresh();
      // A stored session survives a reload. An expired one, or one started by
      // another account, reads as refused, and the answer is a new one.
      return withTimeout(s.fs.getDoc(ref(s))).then(function (snap) {
        if (current !== generation) return false;
        if (snap.exists() && snap.data().ownerUid === uid) return true;
        return fresh();
      }, function (error) {
        if (String(error && error.code) === 'permission-denied') return fresh();
        throw error;
      });
    }

    function restart() {
      if (closed) return;
      generation++;
      var current = generation;
      stop();
      if (!navigator.onLine) { report('offline', 'This device is offline. Reconnect to the internet, then Retry.'); return; }
      if (side === 'ipad' && !SESSION_ID.test(session)) { report('ended', 'This link has no session. Scan the QR code on the laptop.'); return; }
      report('connecting', 'Connecting through BeHistorical’s Firebase…');
      load(side === 'host').then(function (s) {
        if (current !== generation || closed) return;
        if (side === 'ipad') { listen(s, current); return; }
        return ensureSession(s, current).then(function (ok) { if (ok) listen(s, current); });
      }).catch(function (error) {
        if (current !== generation) return;
        if (error && error.code) { failed(error); return; }
        stop();
        report('unreachable', 'The Firebase library could not load. Check the Wi-Fi, then Retry.');
        later(10000);
      });
    }

    function publish(payload) {
      if (closed || !ready || !sdk) return Promise.resolve(false);
      var type = String(payload.type || '');
      if (side === 'host' ? type !== 'state' : IPAD_TYPES.indexOf(type) === -1) return Promise.resolve(false);
      var m = { type: type, index: Math.max(0, Math.min(500, Math.floor(Number(payload.index) || 0))), id: makeId() };
      if (side === 'host') {
        m.count = String(payload.count || '').slice(0, 24);
        m.title = String(payload.title || '').slice(0, 200);
      }
      seen[m.id] = true;
      return sdk.then(function (s) {
        var change = {};
        change[side] = m;
        change[side + 'At'] = s.fs.serverTimestamp();
        if (side === 'ipad') change.ipadWrites = s.fs.increment(1);
        return withTimeout(s.fs.updateDoc(ref(s), change));
      }).then(function () { return true; }, function (error) { failed(error); return false; });
    }

    function signIn() {
      return load(true).then(function (s) {
        var provider = new s.authMod.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account', hd: CONFIG.staffDomain });
        return s.authMod.signInWithPopup(s.auth, provider).then(function (result) {
          // The whole domain after the @, never a suffix. A student account
          // stays signed in for the student backup; it just cannot start this.
          if (emailDomain(result && result.user) !== CONFIG.staffDomain) {
            report('signin', 'That is not a zcs.k12.in.us staff account. Sign in with your staff account to start the remote.');
            return false;
          }
          restart();
          return true;
        });
      }).catch(function (error) {
        var code = String((error && error.code) || '');
        if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return false;
        report('signin', code === 'auth/popup-blocked'
          ? 'The browser blocked the sign-in window. Allow pop-ups for this site, then press Sign In again.'
          : 'Sign-in did not finish. Press Sign In to try again.');
        return false;
      });
    }

    var recover = function () { if (document.visibilityState === 'visible' && !ready && !closed) restart(); };
    global.addEventListener('online', recover);
    document.addEventListener('visibilitychange', recover);
    restart();

    return {
      publish: publish,
      retry: restart,
      signIn: signIn,
      session: function () { return session; },
      close: function () {
        closed = true; generation++; stop();
        global.removeEventListener('online', recover);
        document.removeEventListener('visibilitychange', recover);
      }
    };
  }

  global.BHRemoteFirebase = { connect: connect, config: CONFIG };
})(window);
