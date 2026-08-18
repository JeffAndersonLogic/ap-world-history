#!/usr/bin/env node
'use strict';

/**
 * The generated exam package must match the content model that produces it.
 *
 *   node scripts/test/exam-reproducible.test.js
 *
 * Same reasoning as scripts/test/readings-reproducible.test.js. A hand-edit to
 * the generated QTI looks like it worked and is silently reverted by the next
 * build, which for an exam means a question a teacher believes they fixed going
 * out to students in its original form.
 *
 * Offline and dependency-free, so it runs in the push gate.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const G = '\x1b[32m', R = '\x1b[31m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

console.log(`\n${W}Generated exam packages match their content model${X}\n`);

const run = spawnSync(process.execPath, ['scripts/build-exam.js', '--check'], { cwd: ROOT, encoding: 'utf8' });

if (run.status === 0) {
  console.log(`  ${G}✓${X} exam packages vs scripts/lib/exam-content/  ${D}${(run.stdout || '').trim()}${X}`);
  console.log(`\n${G}${W}Exam packages match the content model.${X}`);
  process.exit(0);
}

console.log(`  ${R}✗${X} ${W}exam packages drifted from the content model${X}`);
for (const line of `${run.stdout || ''}${run.stderr || ''}`.trim().split('\n')) console.log(`      ${line}`);
process.exit(1);
