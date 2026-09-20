// Save health: makes a failed save countable instead of silent.
//
// This is Phase 1 of the student response persistence plan recorded in
// AndersonLogic-OS at 04_PRODUCTS/BeHistorical/
// Student-Response-Persistence-Architecture-2026-09-08.md. No vendor, no
// network, no authentication, and no student writing leaves the device. This
// file records *whether* saves worked. It never records what was written.
//
// WHY A NUMBER RATHER THAN AN ANECDOTE
//
// Roughly two students a day lose work and nobody can say why. Chrome evicting
// site data under quota pressure, a district policy clearing site data on exit,
// a student working in a guest or secondary profile, and BHDraftStore's own
// in-memory fallback all look identical to the student, and identical to every
// check in this repository. Every structural check stays green through all of
// them, which is the failure shape this repo already knows well.
//
// The baseline is the point. Once cloud persistence ships, a loss reported by a
// student cannot be told apart from this same failure still running unless
// there is a number from before.
//
// WHAT THIS CANNOT DO, stated because the limit decides how to read the output
//
// The record lives in the same storage it is measuring, so a wipe takes the
// evidence with it. It cannot report its own erasure. What it can report is a
// record that has come back *new*: a `firstSeen` of today, and a `loads` count
// of 1, on a student who has been in this course for weeks, is the eviction.
// Read a reset record as the finding, not as the absence of one.
//
// It also cannot tell you which of the four candidate causes fired. What it
// narrows is which ones are still candidates: `storageLive` false points at a
// blocked or guest profile, a `QuotaExceededError` points at quota, and a reset
// record with storage healthy points at something clearing site data.
(function (global) {
  'use strict';

  var KEY = 'behistorical-save-health';
  var SCHEMA = 1;

  // Counting every autosave to disk would double this subsystem's own writes,
  // which is the opposite of helpful on a device already short of quota. The
  // record is kept in memory and flushed on a change worth keeping: any
  // failure, the first load, and at most once per interval otherwise.
  var FLUSH_INTERVAL_MS = 5000;

  var state = null;
  var lastFlush = 0;

  // Deliberately raw localStorage rather than BHDraftStore. A telemetry write
  // that went through the store being measured would recurse on failure, and
  // would also land in the key sweep that collectLessonWork() treats as
  // student writing.
  function readRaw() {
    try {
      var raw = global.localStorage.getItem(KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.schema !== SCHEMA) return null;
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function writeRaw(record) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(record));
      return true;
    } catch (error) {
      // A telemetry write that cannot land is itself the condition being
      // measured. Losing the record is acceptable; throwing out of an autosave
      // handler is not.
      return false;
    }
  }

  function now() { return Date.now(); }

  function blank() {
    return {
      schema: SCHEMA,
      firstSeen: now(),
      lastSeen: now(),
      loads: 0,
      ok: 0,
      failed: 0,
      // Loads that began with localStorage already refusing to serve, which is
      // BHDraftStore running entirely on its in-memory fallback. Work survives
      // the session and vanishes on reload, which is one of the four candidate
      // causes and the one most easily mistaken for the others.
      memoryOnlyLoads: 0,
      lastError: null,
      // Filled in asynchronously; see measureQuota below.
      usage: null,
      quota: null,
      persisted: null
    };
  }

  function load() {
    if (state) return state;
    state = readRaw() || blank();
    return state;
  }

  function flush(force) {
    if (!state) return;
    var at = now();
    if (!force && at - lastFlush < FLUSH_INTERVAL_MS) return;
    lastFlush = at;
    state.lastSeen = at;
    writeRaw(state);
  }

  // navigator.storage answers the quota question directly, and it is the one
  // candidate cause that can be confirmed rather than inferred. `persisted`
  // false means this site's storage is best-effort and the browser may delete
  // it without asking, which is the normal state for a plain website and is
  // exactly the thing students have been losing work to.
  function measureQuota() {
    var storage = global.navigator && global.navigator.storage;
    if (!storage) return;
    try {
      if (typeof storage.estimate === 'function') {
        storage.estimate().then(function (estimate) {
          var s = load();
          s.usage = typeof estimate.usage === 'number' ? estimate.usage : null;
          s.quota = typeof estimate.quota === 'number' ? estimate.quota : null;
          flush(true);
        }).catch(function () { /* diagnostics are best effort */ });
      }
      if (typeof storage.persisted === 'function') {
        storage.persisted().then(function (isPersisted) {
          var s = load();
          s.persisted = !!isPersisted;
          flush(true);
        }).catch(function () { /* diagnostics are best effort */ });
      }
    } catch (error) {
      // An older browser, or one that exposes the object and not the methods.
    }
  }

  // Called once by each renderer as it sets up its draft store, with whether
  // localStorage answered the probe.
  function startSession(storageLive) {
    var s = load();
    s.loads += 1;
    if (!storageLive) s.memoryOnlyLoads += 1;
    s.storageLive = !!storageLive;
    flush(true);
    measureQuota();
  }

  // Called on every draft write, successful or not. `error` is the caught
  // exception when there was one. Its *name* is kept, never its message: a
  // message can carry a key, and a key carries a topic and a slot.
  function recordWrite(ok, error) {
    var s = load();
    if (ok) {
      s.ok += 1;
      flush(false);
      return;
    }
    s.failed += 1;
    s.lastError = {
      name: (error && error.name) ? String(error.name) : 'UnknownError',
      at: now()
    };
    // A failure is flushed immediately. The interval exists to keep successful
    // saves cheap, and a failure is the whole reason this file exists.
    flush(true);
  }

  function summary() {
    var s = load();
    return {
      schema: s.schema,
      firstSeen: s.firstSeen,
      lastSeen: s.lastSeen,
      loads: s.loads,
      ok: s.ok,
      failed: s.failed,
      memoryOnlyLoads: s.memoryOnlyLoads,
      lastError: s.lastError ? { name: s.lastError.name, at: s.lastError.at } : null,
      storageLive: !!s.storageLive,
      usage: s.usage,
      quota: s.quota,
      persisted: s.persisted
    };
  }

  // One plain sentence, for a surface a person reads rather than parses. It
  // says "this device" throughout, because that is the true scope of every
  // claim this file can make.
  function line() {
    var s = summary();
    if (!s.storageLive) {
      return 'This browser is not saving your work. Nothing is stored on this device, '
        + 'so gather and copy your work into Canvas before you leave.';
    }
    if (s.failed > 0) {
      return 'Saving on this device has failed ' + s.failed + ' time'
        + (s.failed === 1 ? '' : 's') + ' (' + s.lastError.name + '). '
        + 'Gather and copy your work into Canvas now.';
    }
    return 'Saved on this device only. Copy your work into Canvas before you leave.';
  }

  // Exposed for a teacher looking at one student's Chromebook, and for the
  // Phase 1 write-up. It is not sent anywhere; reading it means standing at
  // the device, which is the honest scope of a browser-local diagnostic.
  function report() {
    return JSON.stringify(summary(), null, 2);
  }

  // A tab closing is the last chance to keep counts the interval has not
  // flushed yet. `pagehide` rather than `unload`, which does not fire reliably
  // on a phone or a restored tab.
  try {
    global.addEventListener('pagehide', function () { flush(true); });
  } catch (error) {
    // No event target in a test harness. The interval flush still covers it.
  }

  global.BHSaveHealth = {
    startSession: startSession,
    recordWrite: recordWrite,
    summary: summary,
    line: line,
    report: report,
    STORAGE_KEY: KEY
  };
})(typeof window !== 'undefined' ? window : globalThis);
