#!/usr/bin/env node
'use strict';
// Every picture a student sees is served from this site, never hotlinked from
// Wikimedia Commons. Offline and in the push gate.
//
// On 2026-10-21 the Evidence Labs of 3.1, 3.2 and 3.3 showed fallback art on
// every card in class. Every file existed on Commons; browsers on the school
// network were refused it, because Commons rate-limits by address and a whole
// classroom is one address. Nothing offline could see that, and the nightly
// check, running from a GitHub runner, saw every picture resolve. So the rule is
// structural: a Commons picture link in a page or data file fails the push. Add
// a picture by linking it, running the Mirror Commons images workflow on the
// branch, then `node scripts/mirror-commons-images.js --rewrite`.
//
// /wiki/File: links are credit pages and are allowed.

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { plan, findLinks, titleOf } = require('../mirror-commons-images');

// Files that no longer exist on Commons under these names (Commons API,
// 2026-10-21), so there is nothing to copy. Their cards already show local
// fallback art. Each needs a new picture chosen through
// scripts/source-evidence-images.js; delete the entry when it lands.
const KNOWN_DEAD = new Set([
  'Les_Tres_Riches_Heures_du_duc_de_Berry_janvier.jpg',
  'Bayeux_Tapestry.jpg',
  'Truman_signing_bills.jpg',
  'Decolonization_of_the_Americas.png',
  'Sirimavo_Bandaranaike.jpg',
  'Jawaharlal_Nehru_1947.jpg',
  'World_map_blank_without_borders.png'
]);

let failed = 0;
function ok(name, fn) {
  try { fn(); console.log(`  PASS  ${name}`); }
  catch (e) { failed += 1; console.log(`  FAIL  ${name}\n        ${e.message.split('\n').join('\n        ')}`); }
}

ok('negative control: the scanner finds a hotlink in each form the course has used', () => {
  const sample = [
    "url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png',",
    'src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Qianlong_Emperor.jpg/960px-Qianlong_Emperor.jpg"',
    "background:url('https://commons.wikimedia.org/wiki/Special:FilePath/Templo_Mayor_(reconstruction).png') center",
    'url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Holiday_in_Chinatown,_San_Francisco_%28P._Frenzeny,_Harper\'s,_1880-03-20%29.jpg",'
  ].join('\n');
  const titles = findLinks(sample).map(titleOf);
  assert.deepStrictEqual(titles, [
    'Mughal_Empire_(1700).png',
    'Qianlong_Emperor.jpg',
    'Templo_Mayor_(reconstruction).png',
    "A_Holiday_in_Chinatown,_San_Francisco_(P._Frenzeny,_Harper's,_1880-03-20).jpg"
  ]);
  assert.strictEqual(findLinks("sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qianlong_Emperor.jpg'").length, 0,
    'a credit page is not a picture link');
});

ok('no page or data file hotlinks a Commons picture', () => {
  const { titles } = plan();
  const offenders = [...titles].filter(([t]) => !KNOWN_DEAD.has(t))
    .map(([t, files]) => `${t}  (${[...files].join(', ')})`);
  assert.strictEqual(offenders.length, 0,
    `${offenders.length} Commons picture(s) hotlinked. Run the Mirror Commons images workflow on this branch, then node scripts/mirror-commons-images.js --rewrite:\n${offenders.join('\n')}`);
});

ok('every local copy a page names is on disk', () => {
  const root = path.resolve(__dirname, '..', '..');
  const missing = new Set();
  const { sourceFiles } = require('../mirror-commons-images');
  for (const file of sourceFiles()) {
    const src = fs.readFileSync(path.join(root, file), 'utf8');
    for (const m of src.matchAll(/assets\/images\/commons\/([A-Za-z0-9._-]+\.(?:jpg|png|gif|svg|webp))/g)) {
      if (!fs.existsSync(path.join(root, 'assets/images/commons', m[1]))) missing.add(`${m[1]} (${file})`);
    }
  }
  assert.strictEqual(missing.size, 0, `copies named but not on disk:\n${[...missing].join('\n')}`);
});

console.log(failed ? `\n${failed} failed` : '\nAll checks passed.');
process.exit(failed ? 1 : 0);
