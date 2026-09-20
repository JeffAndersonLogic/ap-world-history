#!/usr/bin/env node
'use strict';

/**
 * save-health.test.js
 *
 * Proves that a failed draft save is counted rather than lost, against the
 * *real* BHDraftStore lifted out of each renderer rather than a copy of it
 * written for the test. A test that reimplements the thing it is testing can
 * only ever say that the test is self-consistent, which is the failure this
 * repository keeps paying for: the First & 10 capture block was present and
 * byte-identical in every file on both occasions it stopped working.
 *
 * Offline and dependency-free, so it sits in the push gate. What it cannot see
 * is a real browser evicting real site data; that is what the instrumentation
 * itself is for, in a classroom, over weeks.
 *
 * The last section mutates the wiring and asserts these checks go red, because
 * a green result from a check never shown capable of failing is not evidence.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'assets', 'js', 'behistorical-save-health.js');

const RENDERERS = [
  ['assets/js/behistorical-topic-renderer-v1.js', 'unit renderer'],
  ['foundations/foundations-topic-renderer.js', 'Foundations renderer']
];

const R = '\x1b[31m', G = '\x1b[32m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

let failures = 0;
function check(label, condition, detail) {
  if (condition) {
    console.log(`  ${G}PASS${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  } else {
    console.log(`  ${R}FAIL${X} ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
    failures++;
  }
  return !!condition;
}

// ── The sandbox ──────────────────────────────────────────────────────────────
//
// A localStorage that can be told to refuse, which is the condition the whole
// subsystem exists to observe and the one a real browser will not produce on
// demand.
function makeStorage(options) {
  const opts = options || {};
  const data = new Map();
  return {
    // 'ok', 'quota' (setItem throws QuotaExceededError), 'dead' (everything throws)
    mode: opts.mode || 'ok',
    getItem(key) {
      if (this.mode === 'dead') throw new Error('SecurityError');
      return data.has(key) ? data.get(key) : null;
    },
    setItem(key, value) {
      if (this.mode === 'dead') throw new Error('SecurityError');
      if (this.mode === 'quota') {
        const error = new Error('exceeded the quota');
        error.name = 'QuotaExceededError';
        throw error;
      }
      data.set(key, String(value));
    },
    removeItem(key) {
      if (this.mode === 'dead') throw new Error('SecurityError');
      data.delete(key);
    },
    get length() { return data.size; },
    key(i) { return Array.from(data.keys())[i]; },
    _raw: data
  };
}

// Lifts the real BHDraftStore out of a renderer. Taking the bytes that ship
// is the whole point: a hand-revert of the wiring has to fail here.
function liftDraftStore(source, rel) {
  const start = source.indexOf('const BHDraftStore');
  if (start === -1) throw new Error(`${rel}: no BHDraftStore found`);
  const endMarker = '\n})();';
  const end = source.indexOf(endMarker, start);
  if (end === -1) throw new Error(`${rel}: BHDraftStore has no recognizable end`);
  return source.slice(start, end + endMarker.length);
}

function buildSandbox(healthSource, draftStoreSource, storage) {
  const win = { localStorage: storage };
  // No navigator and no addEventListener on purpose: both are optional in the
  // module and a harness without them must not throw. That is also what proves
  // the diagnostics are best effort rather than load-bearing.
  const body = `${healthSource}\n${draftStoreSource}\nreturn { BHDraftStore: BHDraftStore, BHSaveHealth: window.BHSaveHealth };`;
  // eslint-disable-next-line no-new-func
  const run = new Function('window', 'localStorage', body);
  return run(win, storage);
}

// ── The assertions, run against one renderer ─────────────────────────────────
function assertRenderer(healthSource, rel, label, report) {
  const source = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const draftStore = liftDraftStore(source, rel);

  // 1. A healthy device counts successful writes.
  {
    const storage = makeStorage({ mode: 'ok' });
    const env = buildSandbox(healthSource, draftStore, storage);
    env.BHDraftStore.set('behistorical-draft-1-4-checkpoint-two', 'Song China centralized power through the examination system.');
    const s = env.BHSaveHealth.summary();
    report('a successful save is counted', s.ok === 1 && s.failed === 0, `ok=${s.ok} failed=${s.failed}`);
    report('the session is counted as storage-live', s.storageLive === true && s.memoryOnlyLoads === 0, `loads=${s.loads}`);
  }

  // 2. A quota failure is counted and named. This is the case that has been
  //    silent: the student sees the same page and loses the work.
  {
    const storage = makeStorage({ mode: 'ok' });
    const env = buildSandbox(healthSource, draftStore, storage);
    storage.mode = 'quota';
    const ok = env.BHDraftStore.set('behistorical-draft-1-4-checkpoint-two', 'a real answer');
    const s = env.BHSaveHealth.summary();
    report('a failed save returns false to the caller', ok === false);
    report('a failed save is counted', s.failed === 1, `failed=${s.failed}`);
    report('the failure carries the browser\'s own error name', s.lastError && s.lastError.name === 'QuotaExceededError',
      s.lastError ? s.lastError.name : 'no error recorded');
  }

  // 3. A device where storage never answered at all. BHDraftStore falls back to
  //    memory, work survives the session and vanishes on reload, and until now
  //    nothing counted it.
  {
    const storage = makeStorage({ mode: 'dead' });
    const env = buildSandbox(healthSource, draftStore, storage);
    const s = env.BHSaveHealth.summary();
    report('a memory-only load is counted', s.memoryOnlyLoads === 1 && s.storageLive === false,
      `memoryOnlyLoads=${s.memoryOnlyLoads}`);
    env.BHDraftStore.set('behistorical-draft-1-4-checkpoint-two', 'a real answer');
    report('a write with no storage at all is counted as failed', env.BHSaveHealth.summary().failed === 1);
  }

  // 4. Privacy. The record is a count, and a count is all it may ever be.
  {
    const storage = makeStorage({ mode: 'ok' });
    const env = buildSandbox(healthSource, draftStore, storage);
    const secret = 'Kublai Khan reorganized the Yuan bureaucracy';
    env.BHDraftStore.set('behistorical-draft-1-4-checkpoint-two', secret);
    const stored = JSON.stringify(Array.from(storage._raw.entries()));
    const record = storage.getItem(env.BHSaveHealth.STORAGE_KEY) || '';
    report('the health record stores no student writing', !record.includes(secret) && !record.includes('Kublai'));
    report('the health record stores no response key', !record.includes('checkpoint-two'));
    report('the student\'s own draft is still saved normally', stored.includes(secret));
  }

  // 5. The record must never land in the sweep that becomes the Canvas paste.
  //    collectLessonWork() walks every key beginning `behistorical-draft-`, and
  //    a telemetry key under that prefix would be pasted into Canvas as if it
  //    were a student response. This is the same shape as the confidence-key
  //    note already in the renderer.
  {
    const storage = makeStorage({ mode: 'ok' });
    const env = buildSandbox(healthSource, draftStore, storage);
    report('the health key is outside the draft sweep prefix',
      !env.BHSaveHealth.STORAGE_KEY.startsWith('behistorical-draft-'), env.BHSaveHealth.STORAGE_KEY);
  }

  // 6. Nothing leaves the device. The repository's standing rule, checked here
  //    rather than trusted, because this is the first subsystem in the course
  //    whose whole job is to observe students.
  {
    for (const forbidden of ['fetch(', 'XMLHttpRequest', 'sendBeacon', 'WebSocket', 'import(']) {
      report(`the module makes no ${forbidden.replace(/\($/, '')} call`, !healthSource.includes(forbidden));
    }
  }
}

console.log(`${W}Save health: a failed save is counted, not lost${X}\n`);

const healthSource = fs.readFileSync(SOURCE, 'utf8');

for (const [rel, label] of RENDERERS) {
  console.log(`${W}${label}${X}  ${D}${rel}${X}`);
  assertRenderer(healthSource, rel, label, check);
  console.log('');
}

// ── Proving the check can fail ───────────────────────────────────────────────
//
// Required by CLAUDE.md: a check used as evidence of completion must be shown
// capable of failing before its green result is trusted. Each mutation below is
// a real way this wiring could be reverted or written wrong, and every one of
// them has to turn the assertions above red.
console.log(`${W}Negative controls${X}  ${D}each mutation must turn the checks above red${X}`);

const MUTATIONS = [
  ['the recordWrite call is stripped from the draft store',
    src => src.replace(/if\s*\(window\.BHSaveHealth\)\s*window\.BHSaveHealth\.recordWrite\([^;]*;/g, '')],
  ['the startSession call is stripped from the draft store',
    src => src.replace(/if\s*\(window\.BHSaveHealth\)\s*window\.BHSaveHealth\.startSession\([^;]*;/g, '')],
  ['failures are counted as successes',
    src => src.replace(/recordWrite\(false,/g, 'recordWrite(true,')]
];

for (const [rel, label] of RENDERERS) {
  const source = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const original = liftDraftStore(source, rel);

  for (const [name, mutate] of MUTATIONS) {
    const broken = mutate(original);
    if (broken === original) {
      console.log(`  ${R}FAIL${X} ${label}: mutation "${name}" changed nothing, so it proves nothing`);
      failures++;
      continue;
    }
    let sawFailure = false;
    const swallow = (label2, condition) => { if (!condition) sawFailure = true; return condition; };
    try {
      assertRendererQuiet(healthSource, broken, swallow);
    } catch (error) {
      sawFailure = true;
    }
    if (sawFailure) {
      console.log(`  ${G}PASS${X} ${label}: ${name} ${D}(caught)${X}`);
    } else {
      console.log(`  ${R}FAIL${X} ${label}: ${name} ${D}(NOT caught, these checks cannot fail)${X}`);
      failures++;
    }
  }
}

// The same assertions as assertRenderer, against a supplied (mutated) draft
// store and without printing. Kept beside it deliberately: if a new assertion
// is added above and not here, the negative control silently stops covering it,
// which is the "a list checked only against itself" failure this repo names.
function assertRendererQuiet(healthSource, draftStore, report) {
  {
    const storage = makeStorage({ mode: 'ok' });
    const env = buildSandbox(healthSource, draftStore, storage);
    env.BHDraftStore.set('behistorical-draft-1-4-checkpoint-two', 'an answer');
    const s = env.BHSaveHealth.summary();
    report('ok counted', s.ok === 1 && s.failed === 0);
    report('storage live', s.storageLive === true && s.memoryOnlyLoads === 0);
  }
  {
    const storage = makeStorage({ mode: 'ok' });
    const env = buildSandbox(healthSource, draftStore, storage);
    storage.mode = 'quota';
    const ok = env.BHDraftStore.set('behistorical-draft-1-4-checkpoint-two', 'an answer');
    const s = env.BHSaveHealth.summary();
    report('returns false', ok === false);
    report('failure counted', s.failed === 1);
    report('error named', !!s.lastError && s.lastError.name === 'QuotaExceededError');
  }
  {
    const storage = makeStorage({ mode: 'dead' });
    const env = buildSandbox(healthSource, draftStore, storage);
    const s = env.BHSaveHealth.summary();
    report('memory-only counted', s.memoryOnlyLoads === 1 && s.storageLive === false);
  }
}

console.log('');
if (failures) {
  console.log(`${R}${W}Save health: ${failures} check(s) failed.${X}`);
  process.exit(1);
}
console.log(`${G}${W}Save health: all checks passed.${X}`);
