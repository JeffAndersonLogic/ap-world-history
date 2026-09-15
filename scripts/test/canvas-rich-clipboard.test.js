#!/usr/bin/env node
'use strict';

/**
 * Canvas submission formatting contract.
 *
 * BeHistorical has exactly two final browser -> clipboard -> Canvas emitters:
 * the unit-topic renderer and the Foundations renderer. Upstream surfaces such
 * as First & 10 and BeInTheRoom only feed these gatherers through localStorage.
 * This check keeps both final emitters on the same rich-copy contract.
 *
 * Runs offline: it checks the literal clipboard HTML and fallback wiring, not
 * browser CSS. The browser companion test proves the ClipboardItem payload and
 * parser round trip on a real Topic 1.1 page.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const FILES = [
  ['unit topics', 'assets/js/behistorical-topic-renderer-v1.js'],
  ['Foundations', 'foundations/foundations-topic-renderer.js']
];

const required = [
  ['10 pt course/topic metadata', /font-size:10pt;font-weight:700;margin:0 0 4pt/],
  ['24 pt document/topic title', /<h1 style="font-size:24pt;line-height:1\.15;margin:0 0 8pt;">/],
  ['16 pt activity/module heading', /<h2 style="font-size:16pt;line-height:1\.2;margin:16pt 0 6pt;">/],
  ['11 pt bold prompt', /font-size:11pt;line-height:1\.4;margin:0 0 6pt;[^\n]*<strong>Question:/],
  ['10.5 pt response label', /font-size:10\.5pt;margin:0 0 4pt;[^\n]*<strong>My response:<\/strong>/],
  ['11 pt student response wrapper', /font-size:11pt;line-height:1\.45;margin:0 0 8pt/],
  ['ClipboardItem rich path', /ClipboardItem/],
  ['text/html clipboard flavor', /['"]text\/html['"]/],
  ['text/plain clipboard flavor', /['"]text\/plain['"]/],
  ['temporary rich fallback node', /document\.createElement\(['"]div['"]\)/],
  ['temporary node receives rich HTML', /host\.innerHTML\s*=\s*html/],
  ['rich selection fallback', /range\.selectNodeContents\(host\)/],
  ['execCommand rich copy fallback', /document\.execCommand\(['"]copy['"]\)/],
  ['plain text last fallback', /navigator\.clipboard\.writeText\(plain/],
  ['record open sentinel preserved', /--- BEHISTORICAL RECORD, do not edit ---/],
  ['record close sentinel preserved', /--- END BEHISTORICAL RECORD ---/],
  ['record schema version preserved', /BH_RECORD_VERSION\s*=\s*1/]
];

const results = [];
function check(name, pass, detail) {
  results.push(pass);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

console.log('\n  BeHistorical rich Canvas clipboard contract\n');

for (const [label, rel] of FILES) {
  const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  console.log(`  ${label}: ${rel}`);
  for (const [name, re] of required) {
    check(`${label}: ${name}`, re.test(src));
  }

  const fallback = src.indexOf('function copyWorkRichFallback');
  const exec = src.indexOf("document.execCommand('copy')", fallback);
  const plain = src.indexOf('navigator.clipboard.writeText(plain', fallback);
  check(`${label}: rich execCommand fallback occurs before plain writeText`,
    fallback !== -1 && exec > fallback && plain > exec,
    `fallback=${fallback} exec=${exec} plain=${plain}`);

  const build = src.indexOf('function buildWorkDocument');
  const h1 = src.indexOf('font-size:24pt', build);
  const h2 = src.indexOf('font-size:16pt', build);
  const manifest = src.indexOf('recordManifestHtml(manifest)', build);
  check(`${label}: hierarchy is inside buildWorkDocument clipboard HTML`,
    build !== -1 && h1 > build && h2 > h1 && manifest > h2,
    `build=${build} h1=${h1} h2=${h2} manifest=${manifest}`);
}

const failed = results.filter(Boolean).length !== results.length;
console.log(`\n  ${results.filter(Boolean).length}/${results.length} passed\n`);
process.exit(failed ? 1 : 0);
