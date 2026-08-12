#!/usr/bin/env node
/**
 * The course calendar and the classroom board are generated. This proves a
 * hand-edit to either fails the push instead of being silently reverted by the
 * next rebuild.
 *
 * It also re-runs the calendar builder's own assertions, which are the ones
 * that matter most: every topic scheduled exactly once, and the year still
 * meeting its stated targets. A pacing edit that drops a topic or pushes Unit 9
 * past spring break fails here, not in March.
 *
 * Node built-ins only, so this runs in the offline suite on a bare checkout.
 */

'use strict';

const { spawnSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
let failed = 0;

for (const [script, what] of [
  ['scripts/build-course-calendar.js', 'the course calendar'],
  ['scripts/build-announcements.js', 'the classroom board']
]) {
  const run = spawnSync(process.execPath, [path.join(ROOT, script), '--check'], {
    cwd: ROOT,
    encoding: 'utf8'
  });
  const output = (run.stdout || '') + (run.stderr || '');
  if (run.status !== 0) {
    failed++;
    console.log(`FAIL  ${what} is out of date or does not fit the year`);
    console.log(output.split('\n').filter(Boolean).map(l => '      ' + l).join('\n'));
  } else {
    console.log(`ok    ${what} is reproducible and meets its targets`);
  }
}

process.exit(failed ? 1 : 0);
