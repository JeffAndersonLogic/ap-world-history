#!/usr/bin/env node
'use strict';

/*
 * Prove the deploy-time version stamp is safe to run on the real site.
 *
 * scripts/stamp-asset-versions.js rewrites hundreds of files in the Pages
 * workflow, and nothing downstream of it is tested: the browser suite runs on
 * the source, not on what was deployed. So this test holds the stamp to the
 * only promises that make that acceptable, against the real repository, in
 * memory, without writing anything:
 *
 *   1. It changes nothing but ?v= values and the self-redirect key.
 *   2. Every stamped tag equals the version of the file it points at.
 *   3. It is idempotent: stamping stamped output changes nothing.
 *   4. A change to a leaf reaches every file above it (the whole point).
 *
 * Each assertion is run once against a deliberately broken input first, so its
 * green is evidence rather than an assumption.
 */

const path = require('path');
const { plan, normalize, TAG } = require('../stamp-asset-versions.js');
const ROOT = path.resolve(__dirname, '..', '..');

let failed = 0;
function check(name, pass, detail = '') {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
  if (!pass) failed++;
}

function onlyTagsMoved(changed) {
  const bad = [];
  for (const [f, { before, after }] of changed) if (normalize(before) !== normalize(after)) bad.push(f);
  return bad;
}

console.log('\nDeploy-time asset version stamp\n');
const base = plan(ROOT);
check('the stamp finds tags to own', base.changed.size > 100, `${base.changed.size} files`);

// 1, with its negative control.
check('it changes nothing but tag values', onlyTagsMoved(base.changed).length === 0, onlyTagsMoved(base.changed).slice(0, 3).join(', ') || 'clean');
{
  const [f, entry] = [...base.changed][0];
  const damaged = new Map([[f, { before: entry.before, after: entry.after.replace(/<\/head>|;/, m => m + ' ') }]]);
  check('control: the guard catches a character moved outside a tag', onlyTagsMoved(damaged).length === 1);
}

// 2.
const mismatches = [];
for (const [f, { after }] of base.changed) {
  for (const m of after.matchAll(TAG)) {
    if (/^[a-f0-9]{10}$/.test(m[3])) continue;
    if (m[2].includes('://') || m[2].startsWith('//')) continue;
    mismatches.push(`${f}: ${m[2]}?v=${m[3]}`);
  }
}
check('every local tag in the output is a content version', mismatches.length === 0, mismatches.slice(0, 3).join(' | ') || 'all stamped');

// 3.
const overrides = Object.fromEntries([...base.changed].map(([f, { after }]) => [f, after]));
const again = plan(ROOT, overrides);
check('stamping stamped output changes nothing', again.changed.size === 0, `${again.changed.size} file(s) moved`);

// 4, with its negative control.
const leaf = 'assets/data/lesson-2-3-indian-ocean.js';
const shell = 'unit-2/lesson-2-3-indian-ocean.html';
const hub = 'unit-2/index.html';
const fs = require('fs');
const edited = plan(ROOT, { [leaf]: fs.readFileSync(path.join(ROOT, leaf), 'utf8') + '\n// edit\n' });
check('a data edit changes the data file version', edited.version.get(leaf) !== base.version.get(leaf));
check('a data edit changes the lesson shell that loads it', edited.version.get(shell) !== base.version.get(shell));
check('a data edit changes the hub link to that shell', edited.version.get(hub) !== base.version.get(hub));
const tagOnly = plan(ROOT, { [leaf]: fs.readFileSync(path.join(ROOT, leaf), 'utf8').replace(/(capture\.html)\?v=[A-Za-z0-9._-]+/, '$1?v=anything-else') });
check('control: rewording only a tag value does not count as a content change', tagOnly.version.get(leaf) === base.version.get(leaf));

const shellText = base.changed.get(shell) && base.changed.get(shell).after;
const key = shellText && (shellText.match(/var k='([^']*)'/) || [])[1];
check('the self-redirect key equals the version links use', key === base.version.get(shell), `${key} vs ${base.version.get(shell)}`);

console.log(`\n  ${failed ? 'FAIL' : 'PASS'}  ${failed ? `${failed} check(s) failed` : 'the stamp is safe to run at deploy'}`);
process.exit(failed ? 1 : 0);
