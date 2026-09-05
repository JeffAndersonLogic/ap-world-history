#!/usr/bin/env node
'use strict';

/**
 * Generated readings must match the content model that produces them.
 *
 *   node scripts/test/readings-reproducible.test.js
 *
 * A generated file that someone hand-edited is the worst of both worlds: the
 * edit looks like it worked, and the next rebuild silently reverts it. This is
 * what makes the content model actually the source of truth rather than merely
 * the intended one.
 *
 * Offline and dependency-free, so it runs in the push gate.
 *
 * Covers every generated reading: Foundations, the 58 unit readings, and Units 6
 * and 9. For Units 6 and 9 it also covers the lesson data, shells and BeInTheRoom
 * scenarios those scripts produce, because intercepting their write helper
 * catches every file they touch, not just the readings.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const G = '\x1b[32m', R = '\x1b[31m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

const SUITES = [
  ['scripts/build-classroom-config.js', 'classroom config vs scripts/lib/classroom-config.js'],
  ['scripts/build-foundations-readings.js', 'Foundations readings vs foundations-f10-content.js'],
  ['scripts/build-unit-readings.js', 'unit readings vs scripts/lib/reading-content/*'],
  ['scripts/build-unit6.js', 'Unit 6 readings, data, shells and rooms'],
  ['scripts/build-unit9.js', 'Unit 9 readings, data, shells and rooms'],
  ['scripts/build-deep-readings.js', 'deep readings vs scripts/lib/deep-reading-content/*'],
  ['scripts/build-ebook.js', 'eBook volumes vs the same chapter modules'],
  ['scripts/build-student-decks.js', 'student decks vs their teacher decks, notes stripped'],
  ['scripts/build-run-of-show.js', 'Run of Show pacing pages vs each topic\'s runOfShow block'],
  ['scripts/build-teacher-index.js', 'teacher command center vs its declared tools and Run of Show topics']
];

let failed = 0;
console.log(`\n${W}Generated readings match their content model${X}\n`);

for (const [script, label] of SUITES) {
  const run = spawnSync(process.execPath, [script, '--check'], { cwd: ROOT, encoding: 'utf8' });
  const ok = run.status === 0;
  if (ok) {
    console.log(`  ${G}✓${X} ${label}  ${D}${(run.stdout || '').trim()}${X}`);
  } else {
    failed++;
    console.log(`  ${R}✗${X} ${W}${label}${X}`);
    for (const line of `${run.stdout || ''}${run.stderr || ''}`.trim().split('\n')) {
      console.log(`      ${line}`);
    }
  }
}

console.log(`\n${'─'.repeat(60)}`);
if (failed) {
  console.log(`${R}${W}${failed} generated set(s) drifted from the content model.${X}`);
  process.exit(1);
}
console.log(`${G}${W}All generated readings match the content model.${X}`);
