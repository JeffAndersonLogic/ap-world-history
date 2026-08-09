#!/usr/bin/env node
'use strict';

/**
 * One command that runs the checks, so nobody has to remember eleven of them.
 *
 *   node scripts/run-tests.js offline    validate.js + the dependency-free tests
 *   node scripts/run-tests.js browser    the seven Chromium tests
 *   node scripts/run-tests.js all        both suites
 *
 * The exit codes here are the point. Every browser test in this repo exits 2
 * when playwright-core is absent, which is a deliberate "skipped", not a
 * failure: validate.js has to stay runnable on a bare checkout, so the browser
 * dependency is never installed by default. This runner honours that. A skip
 * prints as SKIP and does not fail the run.
 *
 * That tolerance is exactly wrong in CI, where playwright IS installed and a
 * skip means the install broke. `--strict` turns every skip into a failure, so
 * a browser job cannot pass by quietly running nothing. Use it wherever the
 * dependency is supposed to be present.
 *
 *   node scripts/run-tests.js browser --strict
 */

const { spawnSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', C = '\x1b[36m';
const W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

// Two suites, because they have different dependency stories. Offline runs on a
// bare checkout; browser needs playwright-core and a Chromium binary.
const SUITES = {
  offline: [
    ['scripts/validate.js', 'structure, capture wiring, image integrity'],
    ['scripts/test/canvas-paragraphs.test.js', 'Canvas blank-line round trip'],
    ['scripts/test/canvas-zip.test.js', 'zip reader + CLI/browser CSV parity']
  ],
  browser: [
    ['scripts/test/modal-focus.unit.js', 'unit lesson modal focus contract'],
    ['scripts/test/modal-focus.foundations.js', 'foundations modal focus contract'],
    ['scripts/test/lightbox-sweep.js', 'enlargeable images operable on all 77'],
    ['scripts/test/confidence.test.js', 'confidence scale'],
    ['scripts/test/skills-lens.test.js', 'Skills Lens panels'],
    ['scripts/test/skills-lens-zip.test.js', 'Skills Lens zip drop + CSP lock'],
    ['scripts/test/topic-1-7-five-questions.test.js', 'Topic 1.7 five-question path']
  ]
};

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const which = args.find(a => !a.startsWith('-')) || 'offline';

const names = which === 'all' ? ['offline', 'browser'] : [which];
if (names.some(n => !SUITES[n])) {
  console.error(`Unknown suite "${which}". Expected: offline, browser, all.`);
  process.exit(2);
}

const results = [];

for (const suite of names) {
  console.log(`\n${C}${W}── ${suite} ${X}${D}(${SUITES[suite].length} checks)${X}`);

  for (const [rel, blurb] of SUITES[suite]) {
    const started = Date.now();
    // stdio inherit: a failing check's own output is the useful part, and these
    // scripts already print well. Swallowing it to re-print a summary would
    // lose the file and line every one of them reports.
    const run = spawnSync(process.execPath, [rel], { cwd: ROOT, stdio: 'inherit' });
    const secs = ((Date.now() - started) / 1000).toFixed(1);

    // spawnSync reports a failure to launch through .error, and a signal kill
    // through .signal, in both of which cases status is null. Neither is a pass.
    let code;
    if (run.error) code = 1;
    else if (run.status === null) code = 1;
    else code = run.status;

    const skipped = code === 2 && !strict;
    const state = code === 0 ? 'PASS' : skipped ? 'SKIP' : 'FAIL';
    results.push({ rel, blurb, state, code, secs });

    const tint = state === 'PASS' ? G : state === 'SKIP' ? Y : R;
    console.log(`${tint}${W}${state}${X} ${rel} ${D}${secs}s, ${blurb}${X}`);
  }
}

// ── summary ───────────────────────────────────────────────────────────────────
const failed = results.filter(r => r.state === 'FAIL');
const skipped = results.filter(r => r.state === 'SKIP');
const passed = results.filter(r => r.state === 'PASS');

console.log(`\n${'─'.repeat(60)}`);
console.log(
  `${W}Summary${X}  |  ${G}${passed.length} passed${X}` +
  (skipped.length ? `, ${Y}${skipped.length} skipped${X}` : '') +
  (failed.length ? `, ${R}${failed.length} failed${X}` : '')
);

if (skipped.length) {
  console.log(`${Y}Skipped checks needed a browser: npm i playwright-core${X}`);
  console.log(`${D}Run with --strict to make a missing browser a failure.${X}`);
}

if (failed.length) {
  for (const f of failed) console.log(`${R}  ✗ ${f.rel} (exit ${f.code})${X}`);
  process.exit(1);
}

console.log(`${G}${W}All checks passed.${X}`);
