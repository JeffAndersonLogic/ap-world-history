// Student response sync: backs a student's work up to Cloud Firestore and puts
// it back on a device that lost it.
//
// This is Phase 2 of the persistence plan in AndersonLogic-OS at
// 04_PRODUCTS/BeHistorical/Student-Response-Persistence-Architecture-2026-09-08.md.
//
// THIS FILE IS INERT UNTIL SOMEONE TURNS IT ON. `enabled` is false in
// scripts/lib/sync-config.js, and mount() returns before it builds a single
// element or makes a single request. Nothing here may run for students until
// ZCS has answered which Google sign-in setting applies to under-18 accounts.
//
// ONE IMPLEMENTATION. The engine, the decision rule, the save states and the
// on-page controls live here and nowhere else. scripts/build-sync.js inlines
// this file into both lesson renderers between sentinels, for the same reason
// the coach prompt builder and the save-health counter are inlined. The part
// that talks to Google is assets/js/behistorical-sync-transport.js, which is
// loaded only when sync is on and is injected into the engine, so everything
// below is testable with no network and no browser.
//
// IT IS A SEPARATE LAYER OVER THE THREE SAVE PATHS, NEVER A HOOK ON THEM.
//
// The renderers save 600ms after a keystroke, the readings 500ms, and
// BeInTheRoom on every keystroke. All of that is correct for localStorage,
// where a write is free, and indefensible against a billed database. So nothing
// here is called from a writer. The engine reads a snapshot of the lesson's
// slots (the same collectLessonWork() Gather All My Work reads) on a timer, and
// compares it with what it last confirmed. A runaway loop in one of the writers
// therefore moves the snapshot, which is read a few times a minute, and cannot
// move the write rate.
//
// WHO BOUNDS WHAT
//   The rules bound how many documents can exist (the id is derived).
//   This file bounds how often a document is written.
//   The free plan's daily quota is the backstop for everything else.
// A rules-level rate limit was declined in firestore/README.md, and the reason
// is the reason this file queues in the student's own storage: a rejected write
// is reverted by the client, which is a student losing what they wrote on the
// bus. Nothing here relies on a write that can be dropped on the floor.
//
// THE RULE FOR TWO COPIES THAT DISAGREE, from the architecture record, binding:
//   1. Newer wins in the ordinary case.
//   2. A non-empty answer is never silently replaced by a different answer.
//      When both sides are non-empty and differ and neither is simply an older
//      copy of the other, the student is shown both and chooses.
//   3. The copy that loses is kept, so a bad overwrite is recoverable.
//
// "Older copy of the other" is decided with a third value, the baseline: a hash
// of what this device last confirmed with the server. It is a hash and not the
// text on purpose, so this record never holds a second copy of anything a
// student wrote. It lives under behistorical-sync-*, outside the
// behistorical-draft-<topic>- prefix that collectLessonWork() sweeps: a key
// inside that prefix would be pasted into Canvas as though it were an answer.
//
// WHAT THE BASELINE BUYS, which is the whole point of the design:
//   Local empty, nothing recorded here, something in the cloud: this device is
//     new or was wiped. Restore it. This is the case the project exists for.
//   Local empty, something recorded here: the student cleared it on this device.
//     Leave it alone. An empty box is never resurrected and is never pushed.
//   Local changed, cloud unchanged since the baseline: push.
//   Local unchanged, cloud changed since the baseline: another device wrote
//     later. Take it.
//   Both changed, or no baseline and both non-empty and different: ask.
//
// AN EMPTY ANSWER IS NEVER WRITTEN. A cleared box, a wiped store and a bug that
// blanks a textarea all look identical to a sync layer, and one of them is
// exactly the failure this system was built to survive. The cost is that
// clearing an answer here does not clear it in the cloud, which is the safe
// direction to be wrong in.
//
// FOUR SAVE STATES, and "Saved" means safe off this device:
//   saving   in flight, or waiting for its turn.
//   saved    confirmed by the server.
//   device   only on this device: offline, or not signed in to the backup.
//   problem  something is wrong and a person has to know: a choice is waiting,
//            the school account is refused, the daily limit is reached, the
//            brake below has tripped.
//
// THE BRAKE. At most one write is in flight. A slot is written at most once per
// window, and never twice inside minGapMs even when the page is closing. Past
// sessionCap writes in one page load, or dayCap in one day on this device, the
// engine stops and says so rather than carrying on. Failures back off
// exponentially and never retry in a tight loop. None of this is cleverness; it
// is the answer to the district's one real question, which was what happens if
// something loops.
(function (global) {
  'use strict';

  var META_PREFIX = 'behistorical-sync-meta-';
  var RECOVER_PREFIX = 'behistorical-sync-recover-';
  var CLIENT_KEY = 'behistorical-sync-client';
  var WRITES_KEY = 'behistorical-sync-writes';
  var PILOT_KEY = 'behistorical-sync-pilot';

  // The same shapes firestore/firestore.rules accepts. They are repeated here so
  // a slot the rules would refuse is reported as a problem on the page instead
  // of being retried forever against a database that will never take it.
  var TOPIC_RE = /^[a-z0-9]{1,4}-?[0-9]{0,2}$/;
  var SLOT_RE = /^[a-z0-9-]{1,64}$/;
  var MAX_TEXT = 20000;

  var DEFAULTS = {
    windowMs: 30000,
    minGapMs: 5000,
    sessionCap: 400,
    dayCap: 600,
    tickMs: 3000,
    backoffBaseMs: 5000,
    backoffMaxMs: 120000,
    recoverKeep: 3
  };

  // ── Small pure helpers ────────────────────────────────────────────────────

  // cyrb53. Not for security: it only has to make two different answers very
  // unlikely to look the same, and to keep the baseline from being a copy.
  function hash(str) {
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57, i, ch;
    for (i = 0; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }

  function cleanConfidence(value) {
    var s = String(value == null ? '' : value).trim();
    return /^[1-5]$/.test(s) ? s : '';
  }

  // text and confidence together, because a changed confidence is a change.
  function valueHash(text, confidence) {
    return hash(String(text || '') + '␟' + cleanConfidence(confidence));
  }

  // '1.4' and 'Topic 1.4' and '5.10' to the rules' shape. 'f3' is already one.
  function normaliseTopic(raw) {
    var s = String(raw == null ? '' : raw).trim().toLowerCase()
      .replace(/^topic\s+/, '').replace(/\./g, '-');
    return TOPIC_RE.test(s) ? s : '';
  }

  function normaliseSlot(raw) {
    var s = String(raw == null ? '' : raw).trim().toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
    return SLOT_RE.test(s) ? s : '';
  }

  // The whole decision rule, as a pure function so it can be tested exhaustively
  // and so nothing about timing or the network can change what it answers.
  //   local  {text, confidence} or null
  //   remote {text, confidence} or null (null: no document)
  //   base   hash of the last confirmed value on this device, or undefined
  // Returns one of: noop, restore, base, adopt, adopt-confidence,
  //   push-create, push-update, conflict.
  function decide(local, remote, base) {
    var lText = local ? String(local.text || '') : '';
    var rText = remote ? String(remote.text || '') : '';
    if (!lText) {
      if (!rText) return 'noop';
      // A device that has never confirmed this slot and has nothing for it is
      // new or wiped. One that has confirmed it and now shows nothing was
      // cleared by the student.
      return base === undefined ? 'restore' : 'noop';
    }
    if (!remote) return 'push-create';
    if (!rText) return 'push-update';
    var lConf = cleanConfidence(local.confidence);
    var rConf = cleanConfidence(remote.confidence);
    if (lText === rText) {
      if (lConf === rConf) return 'base';
      if (!lConf) return 'adopt-confidence';
      // Confidence is a rating, not an answer. The device the student is using
      // right now wins, and nobody is asked to choose between a 3 and a 4.
      return 'push-update';
    }
    var rHash = valueHash(rText, rConf);
    if (base === rHash) return 'push-update';
    if (base === valueHash(lText, lConf)) return 'adopt';
    return 'conflict';
  }

  function normaliseError(error) {
    if (error && typeof error === 'object' && error.code) return error;
    var e = new Error(error && error.message ? error.message : 'sync failed');
    e.code = 'other';
    return e;
  }

  function dayKey(at) {
    var d = new Date(at);
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }

  function readJson(storage, key) {
    try {
      var raw = storage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function writeJson(storage, key, value) {
    try { storage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }

  function randomId() {
    var out = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var bytes = null;
    try {
      if (global.crypto && global.crypto.getRandomValues) bytes = global.crypto.getRandomValues(new Uint8Array(16));
    } catch (e) { bytes = null; }
    for (var i = 0; i < 16; i++) {
      var n = bytes ? bytes[i] : Math.floor(Math.random() * 256);
      out += alphabet.charAt(n % alphabet.length);
    }
    return out;
  }

  // ── The engine ────────────────────────────────────────────────────────────
  //
  // opts.topicKey   the topic, in any spelling normaliseTopic accepts
  // opts.slots()    [{ id, text, confidence }], non-empty answers only
  // opts.apply(id, { text, confidence })
  //                 put a value back where the page keeps that slot
  // opts.transport  see assets/js/behistorical-sync-transport.js for the contract
  // opts.storage    a localStorage; opts.now, opts.setTimeout and friends are
  //                 injectable so a test can run a school day in a millisecond
  function create(opts) {
    var cfg = {};
    var key;
    for (key in DEFAULTS) cfg[key] = (opts && opts[key] != null) ? opts[key] : DEFAULTS[key];

    var topic = normaliseTopic(opts && opts.topicKey);
    var storage = opts.storage;
    var transport = opts.transport;
    var now = opts.now || function () { return Date.now(); };
    var setT = opts.setTimeout || function (fn, ms) { return global.setTimeout(fn, ms); };
    var clearT = opts.clearTimeout || function (id) { global.clearTimeout(id); };
    var onState = opts.onState || function () {};
    var isOnline = opts.isOnline || function () {
      return !(global.navigator && global.navigator.onLine === false);
    };

    var meta = null;            // { v, base: { slot: hash } }
    var remote = {};            // slot -> { text, confidence, rev }, documents that exist
    var conflicts = {};         // slot -> { mine, saved }
    var info = {};              // slot -> { lastWriteAt, failures, nextTryAt }
    var started = false, stopped = false;
    var user = null;
    var reconciled = false;
    var reconciling = false;
    var inflight = {};          // slot -> true, while a write is out
    var timer = null, tickTimer = null;
    var fatal = null;           // { code, message } once something needs a person
    var offlineSince = 0;
    var sessionWrites = 0;
    var tripped = '';
    var invalid = {};           // slot -> message, for slots the rules would refuse
    var lastEmitted = '';
    var clientId = '';
    var flushing = false;

    function loadMeta() {
      var saved = readJson(storage, META_PREFIX + topic);
      meta = (saved && saved.v === 1 && saved.base && typeof saved.base === 'object')
        ? saved : { v: 1, base: {} };
    }
    function saveMeta() { writeJson(storage, META_PREFIX + topic, meta); }

    function getClientId() {
      if (clientId) return clientId;
      try { clientId = storage.getItem(CLIENT_KEY) || ''; } catch (e) { clientId = ''; }
      if (!clientId) {
        clientId = randomId();
        try { storage.setItem(CLIENT_KEY, clientId); } catch (e) { /* a new id each load is harmless */ }
      }
      return clientId;
    }

    function writesToday() {
      var saved = readJson(storage, WRITES_KEY);
      var today = dayKey(now());
      return (saved && saved.day === today && typeof saved.n === 'number') ? saved.n : 0;
    }
    function countWrite() {
      sessionWrites += 1;
      writeJson(storage, WRITES_KEY, { day: dayKey(now()), n: writesToday() + 1 });
    }

    // The page's slots, checked against what the rules will accept. A slot the
    // rules would refuse is recorded as invalid and left out, so it can neither
    // spin against the server nor take the others down with it.
    function snapshot() {
      var out = {};
      var seen = {};
      var list;
      invalid = {};
      try { list = opts.slots() || []; } catch (e) { list = []; }
      list.forEach(function (item) {
        if (!item) return;
        var text = String(item.text == null ? '' : item.text).trim();
        if (!text) return;
        var id = normaliseSlot(item.id);
        if (!id) { invalid[String(item.id)] = 'a lesson item has a name the backup cannot store'; return; }
        if (seen[id]) { invalid[id] = 'two lesson items share the name ' + id; delete out[id]; return; }
        seen[id] = true;
        if (text.length > MAX_TEXT) { invalid[id] = 'one answer is longer than the backup allows'; return; }
        out[id] = { text: text, confidence: cleanConfidence(item.confidence) };
      });
      return out;
    }

    function isDirty(id, local) {
      return meta.base[id] !== valueHash(local.text, local.confidence);
    }

    function dirtyIds(snap) {
      if (!reconciled || !user) return [];
      return Object.keys(snap).filter(function (id) {
        return !conflicts[id] && isDirty(id, snap[id]);
      });
    }

    function recoverKeepCopy(id, value) {
      var all = readJson(storage, RECOVER_PREFIX + topic) || {};
      var list = all[id] || [];
      list.push({ at: now(), text: value.text, confidence: value.confidence });
      all[id] = list.slice(-cfg.recoverKeep);
      writeJson(storage, RECOVER_PREFIX + topic, all);
    }

    // ── State ──────────────────────────────────────────────────────────────
    function computeState() {
      var snap = snapshot();
      var problems = [];
      var ids;
      if (!topic) problems.push('this lesson has a name the backup cannot store');
      ids = Object.keys(conflicts);
      if (ids.length) problems.push('two versions of an answer disagree and you need to choose one');
      Object.keys(invalid).forEach(function (k) { problems.push(invalid[k]); });
      if (tripped) problems.push(tripped);
      if (fatal) problems.push(fatal.message);
      if (problems.length) {
        return {
          code: 'problem',
          message: problems[0],
          conflicts: ids.slice(),
          needsSignIn: false,
          fatal: !!fatal
        };
      }
      var dirty = dirtyIds(snap);
      if (!user) {
        return { code: 'device', message: 'Saved on this device only. Back up your work to keep it safe.', conflicts: [], needsSignIn: true };
      }
      var offline = !isOnline() || offlineSince > 0;
      var busy = Object.keys(inflight).length > 0;
      if (offline && (!reconciled || dirty.length || busy)) {
        return { code: 'device', message: 'Saved on this device only. You are offline, and your work will back up when you reconnect.', conflicts: [], needsSignIn: false };
      }
      if (!reconciled) {
        return { code: 'saving', message: 'Checking your saved work.', conflicts: [], needsSignIn: false };
      }
      if (busy || dirty.length) {
        return { code: 'saving', message: 'Saving.', conflicts: [], needsSignIn: false };
      }
      return { code: 'saved', message: 'Saved. Your work is backed up.', conflicts: [], needsSignIn: false };
    }

    function emit() {
      var s = computeState();
      var sig = JSON.stringify(s);
      if (sig === lastEmitted) return s;
      lastEmitted = sig;
      try { onState(s); } catch (e) { /* a broken listener must not stop a save */ }
      return s;
    }

    // ── Reconcile: the decision rule, applied to every slot ─────────────────
    function applyDecision(id, action, local, saved) {
      if (action === 'restore' || action === 'adopt') {
        if (action === 'adopt') recoverKeepCopy(id, local);
        opts.apply(id, { text: saved.text, confidence: cleanConfidence(saved.confidence) });
        meta.base[id] = valueHash(saved.text, saved.confidence);
      } else if (action === 'adopt-confidence') {
        opts.apply(id, { text: local.text, confidence: cleanConfidence(saved.confidence) });
        meta.base[id] = valueHash(local.text, saved.confidence);
      } else if (action === 'base') {
        meta.base[id] = valueHash(local.text, local.confidence);
      } else if (action === 'conflict') {
        conflicts[id] = { mine: local, saved: { text: saved.text, confidence: cleanConfidence(saved.confidence) } };
      }
      // noop, push-create and push-update change nothing here: the write path
      // finds the slot dirty (or has nothing to write) on its own.
    }

    function reconcileSlots(snap, docs) {
      var ids = {};
      Object.keys(snap).forEach(function (id) { ids[id] = true; });
      Object.keys(docs).forEach(function (id) {
        var normal = normaliseSlot(id);
        if (normal === id) ids[id] = true;
      });
      Object.keys(ids).forEach(function (id) {
        var local = snap[id] || null;
        var doc = docs[id] || null;
        if (doc) remote[id] = { text: doc.text, confidence: cleanConfidence(doc.confidence), rev: doc.rev };
        else delete remote[id];
        var action = decide(local, doc, meta.base[id]);
        applyDecision(id, action, local, doc);
      });
      saveMeta();
    }

    function reconcile() {
      if (reconciling || reconciled || stopped || !user) return Promise.resolve();
      reconciling = true;
      emit();
      return Promise.resolve()
        .then(function () { return transport.fetch(topic); })
        .then(function (docs) {
          reconcileSlots(snapshot(), docs || {});
          reconciled = true;
          offlineSince = 0;
        })
        .catch(function (error) { handleFailure(null, normaliseError(error), true); })
        .then(function () {
          reconciling = false;
          emit();
          schedule();
        });
    }

    // ── Failure handling ────────────────────────────────────────────────────
    function backoff(failures) {
      return Math.min(cfg.backoffMaxMs, cfg.backoffBaseMs * Math.pow(2, Math.max(0, failures - 1)));
    }

    function handleFailure(id, error, duringReconcile) {
      var rec = id ? (info[id] = info[id] || { lastWriteAt: 0, failures: 0, nextTryAt: 0 }) : null;
      var code = error.code;
      if (code === 'offline') {
        offlineSince = offlineSince || now();
        if (rec) { rec.failures += 1; rec.nextTryAt = now() + backoff(rec.failures); }
        if (duringReconcile) retryReconcileLater();
        return;
      }
      if (code === 'auth') {
        // The sign-in expired. That is a prompt to sign in again, not a fault.
        user = null;
        reconciled = false;
        return;
      }
      if (code === 'denied') {
        fatal = { code: code, message: 'The backup is not working for this account. Your work is still saved on this device. Tell your teacher.' };
        return;
      }
      if (code === 'quota') {
        fatal = { code: code, message: 'The backup is paused until tomorrow morning. Your work is still saved on this device.' };
        return;
      }
      if (code === 'conflict' || code === 'exists') {
        // Someone else wrote since we last looked. Look again, then decide with
        // the rule rather than overwriting.
        if (id) refetchSlot(id);
        return;
      }
      if (rec) { rec.failures += 1; rec.nextTryAt = now() + backoff(rec.failures); }
      if (duringReconcile) retryReconcileLater();
    }

    var reconcileRetry = null;
    function retryReconcileLater() {
      if (reconcileRetry || stopped) return;
      reconcileRetry = setT(function () { reconcileRetry = null; reconcile(); }, backoff(2));
    }

    function refetchSlot(id) {
      return Promise.resolve()
        .then(function () { return transport.fetch(topic); })
        .then(function (docs) {
          var snap = snapshot();
          var local = snap[id] || null;
          var doc = (docs || {})[id] || null;
          if (doc) remote[id] = { text: doc.text, confidence: cleanConfidence(doc.confidence), rev: doc.rev };
          else delete remote[id];
          applyDecision(id, decide(local, doc, meta.base[id]), local, doc);
          saveMeta();
        })
        .catch(function (error) { handleFailure(null, normaliseError(error), false); })
        .then(function () { emit(); schedule(); });
    }

    // ── Writing ─────────────────────────────────────────────────────────────
    function dueAt(id) {
      var rec = info[id] || { lastWriteAt: 0, nextTryAt: 0 };
      var gap = flushing ? cfg.minGapMs : cfg.windowMs;
      var earliest = rec.lastWriteAt ? rec.lastWriteAt + gap : 0;
      return Math.max(earliest, rec.nextTryAt || 0);
    }

    function braked() {
      if (tripped) return true;
      if (sessionWrites >= cfg.sessionCap) {
        tripped = 'The backup paused itself to stay inside the school\'s limit. Your work is still saved on this device.';
        return true;
      }
      if (writesToday() >= cfg.dayCap) {
        tripped = 'The backup paused itself for today to stay inside the school\'s limit. Your work is still saved on this device.';
        return true;
      }
      return false;
    }

    function schedule() {
      if (timer) { clearT(timer); timer = null; }
      if (stopped || Object.keys(inflight).length || fatal || !user || !reconciled) return;
      if (braked()) { emit(); return; }
      var ids = dirtyIds(snapshot());
      if (!ids.length) return;
      var t = now();
      var soonest = Infinity;
      ids.forEach(function (id) { soonest = Math.min(soonest, dueAt(id)); });
      var delay = Math.max(0, soonest - t);
      timer = setT(runNext, delay);
    }

    function runNext() {
      timer = null;
      if (stopped || Object.keys(inflight).length || fatal || !user || !reconciled || braked()) { emit(); return; }
      var snap = snapshot();
      var t = now();
      var due = dirtyIds(snap).filter(function (id) { return dueAt(id) <= t; });
      if (!due.length) { schedule(); return; }
      due.sort(function (a, b) { return dueAt(a) - dueAt(b); });
      send(due[0], snap[due[0]]);
    }

    // One slot, one write. Everything that can go wrong lands in handleFailure,
    // and nothing here retries on its own: the next attempt is whatever
    // schedule() decides, which includes the backoff.
    function send(id, local) {
      // snapshot() already drops empty answers. This is the second lock on the
      // same door, because it is the one that must never be wrong.
      if (!local || !String(local.text || '').trim()) return Promise.resolve();
      var rec = (info[id] = info[id] || { lastWriteAt: 0, failures: 0, nextTryAt: 0 });
      var existing = remote[id];
      var callOpts = { keepalive: flushing };
      var call = existing
        ? function () { return transport.update(topic, id, local, getClientId(), existing.rev, callOpts); }
        : function () { return transport.create(topic, id, local, getClientId(), callOpts); };

      inflight[id] = true;
      emit();
      return Promise.resolve()
        .then(call)
        .then(function (result) {
          remote[id] = { text: local.text, confidence: local.confidence, rev: result && result.rev };
          // The baseline is what was WRITTEN, not whatever the box says now: if
          // the student kept typing while this was in flight, the slot is still
          // dirty and goes out in the next window.
          meta.base[id] = valueHash(local.text, local.confidence);
          rec.lastWriteAt = now();
          rec.failures = 0;
          rec.nextTryAt = 0;
          offlineSince = 0;
          saveMeta();
          countWrite();
        })
        .catch(function (error) { handleFailure(id, normaliseError(error), false); })
        .then(function () {
          delete inflight[id];
          emit();
          schedule();
        });
    }

    // ── Conflicts the student settles ───────────────────────────────────────
    function resolve(id, choice) {
      var c = conflicts[id];
      if (!c) return;
      if (choice === 'saved') {
        recoverKeepCopy(id, c.mine);
        opts.apply(id, c.saved);
        meta.base[id] = valueHash(c.saved.text, c.saved.confidence);
      } else {
        // Keep this device's version. The saved one is kept, recoverable, and
        // the baseline is set to it so that the next write is a plain update
        // against the revision we hold, and succeeds only if nobody has written
        // since.
        recoverKeepCopy(id, c.saved);
        meta.base[id] = valueHash(c.saved.text, c.saved.confidence);
      }
      delete conflicts[id];
      saveMeta();
      emit();
      schedule();
    }

    // ── Lifecycle ───────────────────────────────────────────────────────────
    function onAuth(next) {
      user = next || null;
      if (!user) { reconciled = false; emit(); return; }
      reconcile();
    }

    function refresh() {
      if (stopped) return;
      emit();
      schedule();
    }

    function tick() {
      tickTimer = null;
      if (stopped) return;
      refresh();
      tickTimer = setT(tick, cfg.tickMs);
    }

    var bootRetry = null;
    var booted = false;
    function bootstrap() {
      if (booted || stopped) return Promise.resolve();
      return Promise.resolve()
        .then(function () { return transport.ready(); })
        .then(function () {
          booted = true;
          offlineSince = 0;
          user = transport.user();
          if (transport.onAuthChange) transport.onAuthChange(onAuth);
          if (!tickTimer) tickTimer = setT(tick, cfg.tickMs);
          if (user) return reconcile();
          emit();
        })
        .catch(function () {
          // The transport could not load at all: offline, or a school network
          // refusing the host. The work is on the device and nothing is wrong
          // that the student can fix. Try again later; never in a tight loop.
          offlineSince = offlineSince || now();
          emit();
          if (!bootRetry && !stopped) {
            bootRetry = setT(function () { bootRetry = null; bootstrap(); }, backoff(3));
          }
        });
    }

    function start() {
      if (started || stopped) return Promise.resolve();
      started = true;
      if (!topic) { emit(); return Promise.resolve(); }
      loadMeta();
      getClientId();
      emit();
      return bootstrap();
    }

    function signIn() {
      return Promise.resolve()
        .then(function () { return transport.signIn(); })
        .then(function () {
          user = transport.user();
          if (user) return reconcile();
        })
        .catch(function (error) {
          var e = normaliseError(error);
          if (e.code === 'denied') {
            fatal = { code: 'denied', message: 'Your school account could not sign in to the backup. Your work is still saved on this device. Tell your teacher.' };
          }
          emit();
        });
    }

    // The page is going away: send what is dirty, still bounded by minGapMs per
    // slot and by the brake. Up to three slots go at once because there is no
    // later turn to send them in; a page that had more than three changed
    // answers inside one window is not a case worth a loop.
    function flush() {
      if (stopped || !user || !reconciled || fatal || braked()) return;
      var snap = snapshot();
      flushing = true;
      try {
        var t = now();
        dirtyIds(snap)
          .filter(function (id) { return !inflight[id] && dueAt(id) <= t; })
          .slice(0, 3)
          .forEach(function (id) { send(id, snap[id]); });
      } finally { flushing = false; }
    }

    function stop() {
      stopped = true;
      if (timer) clearT(timer);
      if (tickTimer) clearT(tickTimer);
      if (reconcileRetry) clearT(reconcileRetry);
      if (bootRetry) clearT(bootRetry);
    }

    function online() {
      offlineSince = 0;
      Object.keys(info).forEach(function (id) { info[id].nextTryAt = 0; });
      if (!booted) bootstrap();
      else if (user && !reconciled) reconcile();
      else schedule();
      emit();
    }

    return {
      start: start,
      stop: stop,
      signIn: signIn,
      resolve: resolve,
      refresh: refresh,
      flush: flush,
      online: online,
      state: computeState,
      conflict: function (id) { return conflicts[id] || null; },
      recovered: function () { return readJson(storage, RECOVER_PREFIX + topic) || {}; },
      // Test hooks. Nothing in the product reads these.
      _meta: function () { return meta; },
      _sessionWrites: function () { return sessionWrites; }
    };
  }

  // ── Turning it on ─────────────────────────────────────────────────────────
  //
  // `enabled` is the switch for everyone. `pilot` is the switch for one browser:
  // with pilot true and enabled false, opening a lesson with ?sync=on turns the
  // backup on for that browser and ?sync=off turns it off again. That is how a
  // pretend student tests this against the real project before any real class
  // has it, without publishing a change that affects anybody else.
  function pilotOn(cfg, storage, search) {
    if (!cfg || cfg.pilot !== true) return false;
    try {
      var m = /[?&]sync=(on|off)\b/.exec(search || '');
      if (m && m[1] === 'on') storage.setItem(PILOT_KEY, '1');
      if (m && m[1] === 'off') storage.removeItem(PILOT_KEY);
      return storage.getItem(PILOT_KEY) === '1';
    } catch (e) { return false; }
  }

  function isOn(cfg, storage, search) {
    if (!cfg) return false;
    var f = cfg.firebase;
    // No project details means nothing can connect, whatever else is set.
    if (!f || !f.apiKey || !f.projectId || !f.authDomain) return false;
    if (cfg.enabled === true) return true;
    return pilotOn(cfg, storage, search);
  }

  // ── On-page controls ──────────────────────────────────────────────────────
  var STYLE_ID = 'bh-sync-style';
  var ROOT_ID = 'bh-sync';

  function el(tag, attrs, text) {
    var node = global.document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    if (text != null) node.textContent = text;
    return node;
  }

  // Student writing goes through textContent only, never innerHTML.
  function buildUi(engine, labelFor) {
    var doc = global.document;
    if (doc.getElementById(ROOT_ID)) return null;

    if (!doc.getElementById(STYLE_ID)) {
      var style = el('style', { id: STYLE_ID });
      style.textContent =
        '#bh-sync{position:fixed;left:12px;bottom:12px;z-index:60;max-width:min(92vw,26rem);' +
        'background:#1A1C1D;color:#F5F0E7;border:1px solid #C9A46A;border-radius:4px;' +
        'padding:.5rem .7rem;font:600 .78rem/1.35 Montserrat,Arial,sans-serif;display:flex;' +
        'gap:.6rem;align-items:center;flex-wrap:wrap}' +
        '#bh-sync [data-glyph]{font-weight:800;color:#C9A46A}' +
        '#bh-sync button{font:700 .74rem Montserrat,Arial,sans-serif;background:#C9A46A;color:#1A1C1D;' +
        'border:0;border-radius:3px;padding:.3rem .6rem;cursor:pointer}' +
        '#bh-sync button:focus-visible,#bh-sync-dialog button:focus-visible{outline:3px solid #F5F0E7;outline-offset:2px}' +
        '#bh-sync-dialog{max-width:min(94vw,44rem);border:2px solid #1A1C1D;border-radius:4px;' +
        'padding:1rem 1.1rem;background:#F5F0E7;color:#1A1C1D;font:400 .95rem/1.5 "Libre Baskerville",Georgia,serif}' +
        '#bh-sync-dialog h2{margin:0 0 .4rem;font:700 1.05rem Montserrat,Arial,sans-serif}' +
        '#bh-sync-dialog .bh-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr));gap:.7rem;margin:.6rem 0}' +
        '#bh-sync-dialog .bh-col{border:1px solid #1A1C1D;border-radius:3px;padding:.5rem;background:#fff}' +
        '#bh-sync-dialog .bh-col b{display:block;font:700 .78rem Montserrat,Arial,sans-serif;margin-bottom:.3rem}' +
        '#bh-sync-dialog .bh-text{white-space:pre-wrap;max-height:11rem;overflow:auto}' +
        '#bh-sync-dialog .bh-row{display:flex;gap:.6rem;flex-wrap:wrap}' +
        '#bh-sync-dialog button{font:700 .85rem Montserrat,Arial,sans-serif;background:#1A1C1D;color:#F5F0E7;' +
        'border:0;border-radius:3px;padding:.5rem .8rem;cursor:pointer}';
      doc.head.appendChild(style);
    }

    var root = el('div', { id: ROOT_ID, role: 'status', 'aria-live': 'polite' });
    var glyph = el('span', { 'data-glyph': '', 'aria-hidden': 'true' });
    var text = el('span', { 'data-text': '' });
    var action = el('button', { type: 'button', hidden: '' });
    root.appendChild(glyph);
    root.appendChild(text);
    root.appendChild(action);
    doc.body.appendChild(root);

    var dialog = null;
    if (typeof global.HTMLDialogElement === 'function') {
      dialog = el('dialog', { id: 'bh-sync-dialog', 'aria-labelledby': 'bh-sync-dialog-title' });
      doc.body.appendChild(dialog);
    }

    var GLYPHS = { saving: '…', saved: '✓', device: '○', problem: '!' };
    var actionMode = '';

    function showConflict() {
      if (!dialog) return;
      var id = engine.state().conflicts[0];
      var c = id && engine.conflict(id);
      if (!c) { if (dialog.open) dialog.close(); return; }
      while (dialog.firstChild) dialog.removeChild(dialog.firstChild);
      dialog.appendChild(el('h2', { id: 'bh-sync-dialog-title' }, 'Two versions of your answer'));
      dialog.appendChild(el('p', null,
        'Your work for "' + labelFor(id) + '" is different on this device and in your backup. ' +
        'Pick the one to keep. The other is kept so it can be recovered.'));
      var cols = el('div', { 'class': 'bh-cols' });
      var mine = el('div', { 'class': 'bh-col' });
      mine.appendChild(el('b', null, 'On this device'));
      mine.appendChild(el('div', { 'class': 'bh-text' }, c.mine.text));
      var saved = el('div', { 'class': 'bh-col' });
      saved.appendChild(el('b', null, 'In your backup'));
      saved.appendChild(el('div', { 'class': 'bh-text' }, c.saved.text));
      cols.appendChild(mine);
      cols.appendChild(saved);
      dialog.appendChild(cols);
      var row = el('div', { 'class': 'bh-row' });
      var keepMine = el('button', { type: 'button' }, 'Keep the version on this device');
      var useSaved = el('button', { type: 'button' }, 'Use the version in my backup');
      keepMine.addEventListener('click', function () { engine.resolve(id, 'mine'); });
      useSaved.addEventListener('click', function () { engine.resolve(id, 'saved'); });
      row.appendChild(keepMine);
      row.appendChild(useSaved);
      dialog.appendChild(row);
      if (!dialog.open) dialog.showModal();
      keepMine.focus();
    }

    action.addEventListener('click', function () {
      if (actionMode === 'signin') engine.signIn();
      else if (actionMode === 'choose') showConflict();
    });

    return function render(state) {
      glyph.textContent = GLYPHS[state.code] || '';
      text.textContent = state.message;
      root.setAttribute('data-state', state.code);
      if (state.needsSignIn) {
        actionMode = 'signin'; action.textContent = 'Back up my work'; action.hidden = false;
      } else if (state.conflicts && state.conflicts.length) {
        actionMode = 'choose'; action.textContent = 'Choose a version'; action.hidden = false;
        showConflict();
      } else {
        actionMode = ''; action.hidden = true;
        if (dialog && dialog.open) dialog.close();
      }
    };
  }

  // ── Lazy transport ────────────────────────────────────────────────────────
  // A student whose backup is off, or who never opens a lesson with it on, never
  // downloads the transport and never contacts Google.
  function lazyTransport(url, cfg) {
    var real = null, loading = null;
    function load() {
      if (real) return Promise.resolve(real);
      if (loading) return loading;
      loading = new Promise(function (resolve, reject) {
        var s = global.document.createElement('script');
        s.src = url;
        s.onload = function () {
          try { real = global.BHSyncTransport.create(cfg); resolve(real); }
          catch (e) { loading = null; reject(e); }
        };
        s.onerror = function () {
          loading = null;
          var e = new Error('the backup could not load');
          e.code = 'offline';
          reject(e);
        };
        global.document.head.appendChild(s);
      });
      return loading;
    }
    function through(method) {
      return function () {
        var args = arguments;
        return load().then(function (t) { return t[method].apply(t, args); });
      };
    }
    return {
      ready: function () { return load().then(function () {}); },
      user: function () { return real ? real.user() : null; },
      onAuthChange: function (cb) { if (real) real.onAuthChange(cb); },
      signIn: through('signIn'),
      fetch: through('fetch'),
      create: through('create'),
      update: through('update')
    };
  }

  // The one call a renderer makes. Returns null, having done nothing at all,
  // unless the backup is on.
  //   topicKey, slots, apply, labelFor   as for create()
  //   transportUrl                       where behistorical-sync-transport.js is
  function mount(options) {
    var cfg = global.BH_SYNC_CONFIG;
    var storage;
    try { storage = global.localStorage; } catch (e) { return null; }
    if (!storage || !isOn(cfg, storage, global.location && global.location.search)) return null;

    var render = null;
    var engine = create({
      topicKey: options.topicKey,
      slots: options.slots,
      apply: options.apply,
      storage: storage,
      windowMs: cfg.windowMs,
      sessionCap: cfg.sessionCap,
      dayCap: cfg.dayCap,
      transport: lazyTransport(options.transportUrl, cfg),
      onState: function (s) { if (render) render(s); }
    });
    render = buildUi(engine, options.labelFor || function (id) { return id; });
    engine.start();
    if (render) render(engine.state());

    // Typing, another tab's save, coming back online and leaving the page are
    // the moments the snapshot is worth reading early. None of them writes: they
    // only make the engine look, and the engine's own window decides.
    var nudge = null;
    function soon() {
      if (nudge) return;
      nudge = global.setTimeout(function () { nudge = null; engine.refresh(); }, 500);
    }
    global.document.addEventListener('input', soon, true);
    global.addEventListener('storage', soon);
    global.addEventListener('online', function () { engine.online(); });
    global.document.addEventListener('visibilitychange', function () {
      if (global.document.visibilityState === 'hidden') engine.flush(); else engine.refresh();
    });
    global.addEventListener('pagehide', function () { engine.flush(); });
    return engine;
  }

  var api = {
    create: create,
    mount: mount,
    decide: decide,
    hash: hash,
    valueHash: valueHash,
    normaliseTopic: normaliseTopic,
    normaliseSlot: normaliseSlot,
    isOn: isOn,
    DEFAULTS: DEFAULTS,
    MAX_TEXT: MAX_TEXT
  };
  global.BHSync = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
