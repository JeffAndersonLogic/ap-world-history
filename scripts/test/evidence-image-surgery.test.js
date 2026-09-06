#!/usr/bin/env node
'use strict';
// The splice inside scripts/source-evidence-images.js, driven against real
// renderer-config shapes. Offline and in the push gate.
//
// This is here because the failure is silent and has already happened. While
// converting Module 07 to authored pools, a matcher that looked for a card by
// title found `stableImages` first and replaced a map-key entry on Topics 3.1
// and 3.4. The files still parsed, the pages still rendered, and every
// structural check stayed green; the only signal was reading the diff. Anything
// that edits a config by text has to prove it edits the right bytes.

const assert = require('assert');
const { imagesRegion, cardSpan, renderCard, applyCandidate, verdict } = require('../source-evidence-images');
const fs = require('fs');
const os = require('os');
const path = require('path');

let passed = 0;
let failed = 0;
const G = '\x1b[32m', R = '\x1b[31m', D = '\x1b[2m', X = '\x1b[0m';
function ok(name, fn) {
  try { fn(); passed += 1; console.log(`  ${G}PASS${X}  ${name}`); }
  catch (error) { failed += 1; console.log(`  ${R}FAIL${X}  ${name}\n        ${D}${error.message}${X}`); }
}

// A config with the two traps in it: a stableImages array holding a card title
// that also appears in lesson.images, and a card body containing a bracket and
// an apostrophe.
const FIXTURE = `(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.stableImages = {
    map: { title: 'Coal and iron near transport routes', src: '../a.svg' }
  };
  lesson.images = [
    {
      title: 'Powerloom weaving, 1835',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Powerloom_weaving_in_1835.jpg',
      caption: 'An engraving [plate 4] of a weaving shed.',
      prompt: 'NOTICE the machines. INFER what changed.'
    },
    {
      title: 'Coal and iron near transport routes',
      label: 'Secondary map reconstruction \\u00b7 Britain, late 1700s',
      sourceText: ['Coalfields sat near navigable water.', 'Canals came first, rail after.'],
      caption: 'Reconstruction of Britain\\'s coal and iron geography.',
      prompt: 'NOTICE where the coalfields are. INFER why that mattered.'
    }
  ];

})();
`;

const CANDIDATE = {
  topic: '5.3',
  replaces: 'Coal and iron near transport routes',
  file: 'Coalbrookdale_by_Night.jpg',
  title: 'Coalbrookdale by Night, 1801',
  caption: 'Philip James de Loutherbourg, 1801.',
  prompt: 'NOTICE what is producing the light. INFER what changed about working hours.'
};

console.log('\nModule 07 image candidate surgery\n');

ok('the images region starts after stableImages, not at the first array', () => {
  const region = imagesRegion(FIXTURE);
  assert(region, 'no region found');
  assert(FIXTURE.slice(0, region.open).includes('lesson.images'), 'region did not start at lesson.images');
  assert(FIXTURE.slice(region.open, region.close).includes('Powerloom weaving'), 'region missed the first card');
});

ok('the region closes on its own bracket, not on one inside a caption', () => {
  const region = imagesRegion(FIXTURE);
  assert.strictEqual(FIXTURE[region.close], ']');
  assert(FIXTURE.slice(region.close).trim().startsWith('];'), 'closed in the wrong place');
});

ok('a title that also exists in stableImages is found in lesson.images only', () => {
  const region = imagesRegion(FIXTURE);
  const span = cardSpan(FIXTURE, region, 'Coal and iron near transport routes');
  assert(span && !span.ambiguous, 'no span');
  assert(span.start > region.open, 'span landed before lesson.images, which is the 3.1/3.4 bug');
  const body = FIXTURE.slice(span.start, span.end);
  assert(body.includes('sourceText'), 'span is not the evidence card');
  assert(!body.includes('stableImages'), 'span swallowed stableImages');
});

ok('an unknown title yields no span rather than a wrong one', () => {
  const region = imagesRegion(FIXTURE);
  assert.strictEqual(cardSpan(FIXTURE, region, 'A card that is not there'), null);
});

ok('a rendered card is valid JavaScript with the house shape', () => {
  const card = renderCard(CANDIDATE);
  const parsed = eval(`(${card})`); // eslint-disable-line no-eval
  assert.strictEqual(parsed.title, CANDIDATE.title);
  assert(parsed.url.includes('Special:FilePath/Coalbrookdale_by_Night.jpg'));
  assert(parsed.sourceUrl.includes('/wiki/File:Coalbrookdale_by_Night.jpg'));
  assert(/^ {4}\{$/m.test(card.split('\n')[0]), 'first line is not a 4-space indented brace');
});

ok('an apostrophe in a caption is escaped, not left to break the file', () => {
  const card = renderCard({ ...CANDIDATE, caption: "Britain's coal, and a backslash \\ too" });
  const parsed = eval(`(${card})`); // eslint-disable-line no-eval
  assert.strictEqual(parsed.caption, "Britain's coal, and a backslash \\ too");
});

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bh-surgery-'));
const file = path.join(dir, 'lesson-5-3-renderer-config.js');

ok('replacing a card leaves a file that still parses and holds the same count', () => {
  fs.writeFileSync(file, FIXTURE);
  applyCandidate(file, CANDIDATE);
  const after = fs.readFileSync(file, 'utf8');
  const images = eval(`(() => { const lesson = {}; ${after.replace(/^\(\(\) => \{|\}\)\(\);\s*$/g, '').replace('const lesson = window.BEHISTORICAL_LESSON;', '').replace('if (!lesson) return;', '')} return lesson.images; })()`); // eslint-disable-line no-eval
  assert.strictEqual(images.length, 2, `expected 2 cards, got ${images.length}`);
  assert.strictEqual(images[1].title, CANDIDATE.title);
  assert(images[1].url.includes('Coalbrookdale'), 'the new url did not land');
  assert(!after.includes('sourceText'), 'the replaced text card is still there');
  assert(after.includes("map: { title: 'Coal and iron near transport routes'"), 'stableImages was damaged');
});

ok('the replaced card keeps the array indentation of its neighbours', () => {
  const after = fs.readFileSync(file, 'utf8');
  const lines = after.split('\n').filter(l => /^\s*\{$/.test(l) && after.indexOf(l) > after.indexOf('lesson.images'));
  assert(lines.every(l => l === '    {'), `card braces are misaligned: ${JSON.stringify(lines)}`);
});

ok('appending adds a card without disturbing the existing ones', () => {
  fs.writeFileSync(file, FIXTURE);
  applyCandidate(file, { ...CANDIDATE, replaces: null, title: 'An appended card' });
  const after = fs.readFileSync(file, 'utf8');
  assert(after.includes("title: 'An appended card'"), 'append did not land');
  assert(after.includes("title: 'Powerloom weaving, 1835'"), 'append lost the first card');
  assert(after.includes('sourceText'), 'append removed the text card');
  assert(/\}\n  \];/.test(after), `the array did not close cleanly:\n${after.slice(-200)}`);
});

ok('replacing a title that is not in the pool throws rather than writing', () => {
  fs.writeFileSync(file, FIXTURE);
  assert.throws(() => applyCandidate(file, { ...CANDIDATE, replaces: 'Nope' }), /no card titled/);
  assert.strictEqual(fs.readFileSync(file, 'utf8'), FIXTURE, 'the file was written despite the throw');
});

fs.rmSync(dir, { recursive: true, force: true });

// ── What may reach a lesson page ─────────────────────────────────────────────
// The other half of the tool, and the half that protects a student: a candidate
// is applied only on a live answer. A decline reported as "missing" would mean a
// blocked network reads as twelve pictures that do not exist, which is the same
// defect that made the nightly image report worthless before it was split.
console.log('');
ok('a file the host answered for and served is verified', () => {
  assert.strictEqual(verdict(true, { ok: true, status: 200 }, true).state, 'verified');
});

ok('a file Commons says it does not have is missing', () => {
  assert.strictEqual(verdict(false, null, true).state, 'missing');
});

ok('a 404 on a file the API vouched for is missing', () => {
  assert.strictEqual(verdict(true, { ok: false, status: 404 }, true).state, 'missing');
});

ok('a proxy 403 is unverified, never missing', () => {
  assert.strictEqual(verdict(true, { ok: false, status: 403, declined: true }, true).state, 'unverified');
});

ok('a 429 is unverified, never missing', () => {
  assert.strictEqual(verdict(true, { ok: false, status: 429 }, true).state, 'unverified');
});

ok('when the API never answered, a failed fetch is unverified rather than missing', () => {
  assert.strictEqual(verdict(undefined, { ok: false, status: 500 }, false).state, 'unverified');
});

ok('only a verified candidate is ever eligible to be applied', () => {
  const states = [
    verdict(false, null, true),
    verdict(true, { ok: false, status: 403, declined: true }, true),
    verdict(undefined, { ok: false, status: 'ENOTFOUND' }, false)
  ];
  assert(states.every(s => s.state !== 'verified'), 'a candidate nobody confirmed came back verified');
});

console.log(`\n${failed ? R : G}${passed} passed, ${failed} failed.${X}\n`);
process.exit(failed ? 1 : 0);
