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
// of 1, on a student who has been in this course for weeks, means this storage
// was cleared. It does not say by what. Browser eviction, a district cleanup
// policy, a different Chromebook profile, a cleared-site-data event and a first
// load after a deploy all produce the same fresh record. Read a reset record as
// a question worth chasing, not as an answer and not as the absence of one.
//
// It also cannot tell you which of the four candidate causes fired. What it
// narrows is which ones are still candidates: `storageLive` false points at a
// blocked or guest profile, a `QuotaExceededError` points at quota, and a reset
// record with storage healthy points at something clearing site data.
//
// A SECOND COUNTER, ADDED 2026-09-21, MEASURING A DATABASE THAT DOES NOT EXIST
//
// ZCS finance will not approve a per-write bill it cannot bound. The question
// Dan Layton asked on 2026-09-21 was how many writes a day this would be, and
// arithmetic off the lesson data is an estimate somebody can argue with. So the
// module also projects what a Firestore sync layer *would* have written, on the
// devices, in the room, and counts it. Still no vendor, still no network, and
// still nothing but counts: the projection is arithmetic over the timestamps of
// saves that were already happening. See the sync projection section below for
// the policy it assumes and the direction it errs in.
(function (global) {
  'use strict';

  var KEY = 'behistorical-save-health';
  var SCHEMA = 1;

  // Counting every autosave to disk would double this subsystem's own writes,
  // which is the opposite of helpful on a device already short of quota. The
  // record is kept in memory and flushed on a change worth keeping: any
  // failure, the first load, and at most once per interval otherwise.
  //
  // The cost, stated because it bounds one of the two counters: a hard kill
  // (a crash, a power loss, a tab killed without firing pagehide) can lose up
  // to one interval of *successful* writes, so `ok` is a slight undercount.
  // Failures flush immediately and are not affected, which is the half that
  // matters here. Do not compute a failure *rate* from ok and failed without
  // accounting for that.
  var FLUSH_INTERVAL_MS = 5000;

  // ── The sync projection ─────────────────────────────────────────────────────
  //
  // THE POLICY IS PART OF THE NUMBER, so it is recorded beside it.
  //
  // A cloud write is not a local write. BHDraftStore autosaves 600ms after a
  // student stops typing, which across one checkpoint answer is dozens of
  // writes, and mirroring that to Firestore one for one is precisely the
  // runaway shape the district has been billed for before. The proposed sync
  // layer coalesces per response slot: the first save after a quiet period goes
  // out, and every save inside the window that follows folds into it. That
  // window is SYNC_COALESCE_MS, and it is written into the record itself,
  // because a write count read against the wrong policy is worse than no write
  // count at all.
  //
  // WHICH WAY THIS MODEL ERRS, stated because a floor and a ceiling are
  // different arguments to make to a finance office.
  //
  // It is a leading edge throttle: one write per window per slot, plus one tail
  // write per slot still carrying edits when the page goes away. A trailing
  // edge implementation lands within one write per slot of the same count. It
  // does not model retries, an offline queue draining after a bus ride home, or
  // the reads a student's own records cost on page load. Read it as a floor on
  // writes, never as a ceiling on cost.
  var SYNC_COALESCE_MS = 10000;

  // TWO DATA MODELS ARE PROJECTED, NOT ONE, because the write count is a fact
  // about the schema as much as about the students.
  //
  // Firestore bills per *document* write. The architecture record proposes one
  // record per response slot, which makes the conflict rule easy to state and
  // costs one write per slot per window. A second reader of the same problem
  // proposed one consolidated document per student and topic, which folds every
  // field changed in a window into a single billable write and is roughly eight
  // times cheaper on a normal lesson.
  //
  // Neither is obviously right. Per slot keeps "a non-empty answer is never
  // silently replaced" a per-answer question; consolidated makes two devices
  // editing two different boxes collide at the document. That is a design
  // decision with a privacy and data-loss dimension, not an optimization, and
  // it is not settled here.
  //
  // What is settled is that nobody should have to pick it from arithmetic. Both
  // are counted from the same student behaviour, against the same window, so the
  // only thing separating the two figures is the schema. `slotWrites` is the
  // per-slot model; `docWrites` is the consolidated one. A lesson page serves one
  // topic, so every key written from it belongs to that topic's document, which
  // is why the consolidated model needs no key parsing and never has to learn
  // how a draft key is spelled.

  // The record lives in the storage it is measuring, so it may not grow without
  // bound. Roughly a grading period of class days, oldest dropped first.
  var SYNC_DAY_CAP = 45;

  var state = null;
  var lastFlush = 0;

  // In memory only, and deliberately. `syncSlots` is keyed by draft key, and a
  // draft key carries a topic and a slot. This record stores counts, and
  // section 4 of scripts/test/save-health.test.js is what holds that line.
  var syncSlots = {};
  var syncMinute = { bucket: 0, count: 0 };
  // The consolidated model's single bucket: one document for the whole page.
  var syncDoc = { sentAt: 0, dirty: false, open: false };

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

  function blankSync() {
    return {
      // The policy the counts below were taken against. Never drop this field:
      // a write count with no window attached cannot be read.
      coalesceMs: SYNC_COALESCE_MS,
      // Projected cloud writes, which is the figure the district asked for.
      writes: 0,
      // How many of those were the tail flush as a page went away, rather than
      // a window opening. A high share means students leave mid-answer, which
      // is a teaching fact as much as a billing one.
      tailWrites: 0,
      // Local autosaves seen. writes divided into this is how much traffic the
      // coalescing window absorbs, and it is the answer to "what stops a loop
      // from becoming a bill".
      localWrites: 0,
      // The most projected writes in any single clock minute on this device.
      // A maximum rather than an average on purpose: a write loop barely moves
      // a daily average on the day it starts and pins one minute immediately.
      busiestMinute: 0,
      // The consolidated model: one document per student and topic. Counted
      // from the same saves, against the same window, so slotWrites divided by
      // docWrites is the schema's own multiplier and nothing else.
      docWrites: 0,
      docTailWrites: 0,
      // dayKey -> { w: per-slot writes, d: consolidated writes, l: local autosaves }
      days: {}
    };
  }

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
      persisted: null,
      sync: blankSync()
    };
  }

  // Local date getters, never toISOString. toISOString is UTC, which rolls the
  // day over during the school evening in Indiana and would file a student
  // working after practice under tomorrow. BeCurrent's Desk refuses the same
  // call for the same reason.
  function dayKey(at) {
    var d = new Date(at);
    var m = d.getMonth() + 1;
    var day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }

  function load() {
    if (state) return state;
    state = readRaw() || blank();
    // A record written before the projection existed is still the baseline this
    // subsystem was installed for, so the field is filled in rather than the
    // record discarded. Bumping SCHEMA would have reset firstSeen on every
    // device at once, which would make every record in the course look freshly
    // cleared and destroy the one signal this file can give about storage being
    // wiped. Read the note at the top of this file for why that signal matters.
    if (!state.sync) state.sync = blankSync();
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

  // navigator.storage is the only part of this that reports a browser state
  // directly rather than counting events. `persisted` false means this site's
  // storage is best-effort and may be evicted by the browser under storage
  // pressure, which is the normal state for a plain website. That keeps browser
  // eviction a live candidate. It does not by itself establish the cause of any
  // work a student has already lost, and must not be quoted as though it did.
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

  function syncDay(record, at) {
    var key = dayKey(at);
    if (!record.sync.days[key]) {
      record.sync.days[key] = { w: 0, d: 0, l: 0 };
      var keys = Object.keys(record.sync.days).sort();
      while (keys.length > SYNC_DAY_CAP) delete record.sync.days[keys.shift()];
    }
    return record.sync.days[key];
  }

  function countMinute(record, at) {
    var bucket = Math.floor(at / 60000);
    if (syncMinute.bucket !== bucket) { syncMinute.bucket = bucket; syncMinute.count = 0; }
    syncMinute.count += 1;
    if (syncMinute.count > record.sync.busiestMinute) record.sync.busiestMinute = syncMinute.count;
  }

  // Called on every *successful* local save, with the key that was written. A
  // save that failed on this device would never have reached a cloud either, so
  // it is counted as a failure above and not projected here.
  //
  // `key` is used as a map key and is never stored. A caller that has no key to
  // give simply projects nothing, which is the honest answer: without a slot
  // there is nothing to coalesce against and a guess would be worse than a gap.
  function projectSync(key, at) {
    if (!key) return;
    var record = load();
    var day = syncDay(record, at);
    day.l += 1;
    record.sync.localWrites += 1;

    // The consolidated model first, because it does not care which slot this
    // was: any field changing inside the window rides the one document write.
    if (syncDoc.open && (at - syncDoc.sentAt) < SYNC_COALESCE_MS) {
      syncDoc.dirty = true;
    } else {
      syncDoc = { sentAt: at, dirty: false, open: true };
      record.sync.docWrites += 1;
      day.d += 1;
    }

    var slot = syncSlots[key];
    if (slot && (at - slot.sentAt) < SYNC_COALESCE_MS) {
      // Inside a window a previous save already opened. The sync layer folds
      // this edit into that write rather than sending a second one, which is
      // the whole mechanism keeping a 600ms autosave off a per-write bill.
      slot.dirty = true;
      return;
    }
    syncSlots[key] = { sentAt: at, dirty: false };
    record.sync.writes += 1;
    day.w += 1;
    countMinute(record, at);
  }

  // The tail. Every slot still carrying edits made inside its last window would
  // be flushed as the page goes away, and a student closing the tab at the bell
  // is the ordinary case here rather than the edge one.
  function projectTail() {
    var record = load();
    var at = now();
    var day = syncDay(record, at);
    for (var key in syncSlots) {
      if (!Object.prototype.hasOwnProperty.call(syncSlots, key)) continue;
      if (!syncSlots[key].dirty) continue;
      syncSlots[key].dirty = false;
      record.sync.writes += 1;
      record.sync.tailWrites += 1;
      day.w += 1;
    }
    // One tail write for the whole document, however many of its fields were
    // still dirty. That is the consolidated model's entire point, and the tail
    // is where it shows most.
    if (syncDoc.dirty) {
      syncDoc.dirty = false;
      record.sync.docWrites += 1;
      record.sync.docTailWrites += 1;
      day.d += 1;
    }
  }

  // Called on every draft write, successful or not. `error` is the caught
  // exception when there was one. Its *name* is kept, never its message: a
  // message can carry a key, and a key carries a topic and a slot.
  function recordWrite(ok, error, key) {
    var s = load();
    if (ok) {
      s.ok += 1;
      projectSync(key, now());
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
      persisted: s.persisted,
      sync: {
        coalesceMs: s.sync.coalesceMs,
        writes: s.sync.writes,
        tailWrites: s.sync.tailWrites,
        docWrites: s.sync.docWrites,
        docTailWrites: s.sync.docTailWrites,
        localWrites: s.sync.localWrites,
        busiestMinute: s.sync.busiestMinute,
        days: JSON.parse(JSON.stringify(s.sync.days))
      }
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

  // The projection, as a person standing at a Chromebook wants to read it. One
  // row per day the student had this course, because "writes per student per
  // class day" is the figure the district asked for and a day is where it
  // lives. Days with no class produce no row rather than a zero, so a mean
  // taken over these rows is a mean over class days and not over the calendar.
  //
  // `absorbed` is the share of local autosaves the coalescing window swallowed.
  // It is the number to quote at anyone worried about an unbounded bill: it
  // says how much of the typing traffic never becomes a billable write.
  function syncReport() {
    var s = summary().sync;
    var keys = Object.keys(s.days).sort();
    var lines = [
      'Projected Firestore writes, this device only.',
      'Coalescing window: ' + s.coalesceMs + 'ms per response slot.',
      ''
    ];
    if (!keys.length) {
      lines.push('No class days recorded yet.');
      return lines.join('\n');
    }
    lines.push('day           per-slot   one-doc   local autosaves');
    var total = 0, docTotal = 0, max = 0, docMax = 0;
    for (var i = 0; i < keys.length; i++) {
      var d = s.days[keys[i]];
      total += d.w;
      docTotal += d.d;
      if (d.w > max) max = d.w;
      if (d.d > docMax) docMax = d.d;
      lines.push(keys[i] + '    ' + String(d.w) + '          ' + String(d.d) + '         ' + String(d.l));
    }
    var absorbed = s.localWrites ? (1 - (s.writes / s.localWrites)) * 100 : 0;
    lines.push('');
    lines.push('class days recorded: ' + keys.length);
    lines.push('mean per class day, one record per response slot: ' + (total / keys.length).toFixed(1));
    lines.push('mean per class day, one document per topic:       ' + (docTotal / keys.length).toFixed(1));
    lines.push('busiest class day: ' + max + ' per-slot, ' + docMax + ' one-doc');
    lines.push('busiest single minute: ' + s.busiestMinute);
    lines.push('tail flushes: ' + s.tailWrites + ' per-slot, ' + s.docTailWrites + ' one-doc');
    lines.push('local autosaves absorbed by coalescing: ' + absorbed.toFixed(1) + '%');
    // The schema's own multiplier, which is the figure that decides whether the
    // data model is worth arguing about. Anything near 1 means it is not.
    if (s.docWrites) {
      lines.push('per-slot costs ' + (s.writes / s.docWrites).toFixed(1) + 'x the consolidated model');
    }
    return lines.join('\n');
  }

  // A tab closing is the last chance to keep counts the interval has not
  // flushed yet. `pagehide` rather than `unload`, which does not fire reliably
  // on a phone or a restored tab.
  try {
    global.addEventListener('pagehide', function () { projectTail(); flush(true); });
  } catch (error) {
    // No event target in a test harness. The interval flush still covers it.
  }

  global.BHSaveHealth = {
    startSession: startSession,
    recordWrite: recordWrite,
    summary: summary,
    line: line,
    report: report,
    syncReport: syncReport,
    // Exposed so the offline test can drive the tail without a browser, and so
    // a teacher can take a reading mid-class without closing the tab.
    projectTail: projectTail,
    SYNC_COALESCE_MS: SYNC_COALESCE_MS,
    STORAGE_KEY: KEY
  };
})(typeof window !== 'undefined' ? window : globalThis);
