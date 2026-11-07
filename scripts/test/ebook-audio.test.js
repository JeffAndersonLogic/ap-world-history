#!/usr/bin/env node
'use strict';
// The recorded-narration list is valid, reproduces from its source, and can
// only ever point at audio made from the text a student is reading. Offline and
// in the push gate.
//
// What is enforced and what is not, on purpose:
//
//   - Enforced: the list is well formed, assets/data/ebook-audio.js is exactly
//     what scripts/audio/recordings.json produces, and a recording's file is
//     named for the fingerprint it is filed under. Each of those fails silently
//     in a browser: a malformed entry is skipped and the section quietly falls
//     back to the browser voice.
//   - Not enforced: how many sections are recorded, or whether a recording is
//     current. A recording of text that has since changed is harmless by
//     construction, because the player matches on the fingerprint the page
//     carries, so editing a chapter can never be blocked waiting for audio.
//     That is reported by `npm run build:ebook-audio`, never failed.

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { problems, render, currentSections } = require('../build-ebook-audio');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'scripts', 'audio', 'recordings.json');
const OUTPUT = path.join(ROOT, 'assets', 'data', 'ebook-audio.js');

let passed = 0;
function check(name, fn) {
  try { fn(); passed++; } catch (e) {
    console.error(`FAIL ${name}\n  ${e.message}`);
    process.exitCode = 1;
  }
}

const data = JSON.parse(fs.readFileSync(SOURCE, 'utf8'));
const GOOD = { base: 'https://example.org/audio/', recordings: {
  '0123456789abcdef': { file: 'ebook/unit-3/0123456789abcdef.mp3', seconds: 12.5, section: 't3-1-x' } } };
const clone = o => JSON.parse(JSON.stringify(o));

check('the recordings list is valid', () => {
  assert.deepStrictEqual(problems(data), []);
});

check('negative controls: each malformation is caught', () => {
  assert.deepStrictEqual(problems(GOOD), []);
  const cases = [
    [d => { d.base = 'http://example.org/audio/'; }, /https/],
    [d => { d.base = 'https://example.org/audio'; }, /slash/],
    [d => { d.recordings.nothex = d.recordings['0123456789abcdef']; }, /not a section fingerprint/],
    [d => { d.recordings['0123456789abcdef'].file = 'https://evil.example/x.mp3'; }, /file must look like/],
    [d => { d.recordings['0123456789abcdef'].file = 'ebook/unit-3/fedcba9876543210.mp3'; }, /different fingerprint/],
    [d => { d.recordings['0123456789abcdef'].seconds = 0; }, /seconds/],
    [d => { delete d.recordings['0123456789abcdef'].section; }, /section id/]
  ];
  for (const [mutate, want] of cases) {
    const d = clone(GOOD); mutate(d);
    const found = problems(d);
    assert.ok(found.some(p => want.test(p)), `expected ${want} in ${JSON.stringify(found)}`);
  }
});

check('assets/data/ebook-audio.js reproduces from scripts/audio/recordings.json', () => {
  assert.strictEqual(fs.readFileSync(OUTPUT, 'utf8'), render(data),
    'run: node scripts/build-ebook-audio.js');
});

check('negative control: a hand edit to the generated list is drift', () => {
  const edited = clone(data);
  edited.recordings['0123456789abcdef'] = GOOD.recordings['0123456789abcdef'];
  assert.notStrictEqual(render(edited), fs.readFileSync(OUTPUT, 'utf8'));
});

check('the generated list sets the global the player reads, and nothing else', () => {
  const sandbox = { window: {} };
  require('vm').runInNewContext(fs.readFileSync(OUTPUT, 'utf8'), sandbox);
  assert.deepStrictEqual(Object.keys(sandbox.window), ['BH_EBOOK_AUDIO']);
  assert.strictEqual(sandbox.window.BH_EBOOK_AUDIO.base, data.base);
});

check('every current recording is filed under the volume its section is in', () => {
  const sections = currentSections();
  assert.ok(sections.size > 400, `only ${sections.size} section fingerprints found on the eBook pages`);
  for (const [hash, rec] of Object.entries(data.recordings)) {
    const where = sections.get(hash);
    if (!where) continue;                                    // stale: reported, not failed
    assert.strictEqual(rec.file.split('/')[1], where.volume, `${hash} is filed under the wrong volume`);
    assert.strictEqual(rec.section, where.section, `${hash} names the wrong section`);
  }
});

if (!process.exitCode) console.log(`ebook-audio: ${passed} checks passed`);
