#!/usr/bin/env node
'use strict';

/*
 * The regional chapters retell the CED; they do not add to it.
 *
 * Part Two of an eBook volume (Unit 4 first, 2026-11-13) tells the unit one
 * region at a time, the way a survey textbook does, because the College Board's
 * topic order slices the world by theme and no student ever sees one region's
 * whole story in one place. A regional chapter is therefore one more copy of
 * the CED, and the CED rule in CLAUDE.md applies to copies: when one disagrees
 * with scripts/lib/ced-source/unit-N.js, the copy is wrong.
 *
 * What this proves, per regional chapter in scripts/lib/region-content/:
 *
 *   1. it has the shape the renderer reads, and its slug, topicKey and file
 *      name agree, because the slug is how ebook-page.js tells a region from
 *      a topic and the topicKey is the anchor every link to it uses;
 *   2. every Key Concept code it claims to teach (`ced`) is a real code in the
 *      CED source for its unit, so a mistyped or invented code fails here;
 *   3. every topic it says it draws on (`topics`) is a topic in the CED and a
 *      chapter in the same volume, so "Read alongside" never links nowhere;
 *   4. every in-chapter link of the form #chapter-<key> lands on a chapter in
 *      the same volume, and every topic it links is one it declares;
 *   5. its closing cards cover all six sides of a region's story: political,
 *      religious, social, intellectual, technological and economic (two may
 *      share a card, but none may be missing);
 *   6. no em or en dash appears anywhere in it (the house writing rule).
 *
 * And per unit: **every Key Concept in the CED unit is taught by at least one
 * regional chapter**, so the regional retelling cannot quietly drop the part
 * of the unit that does not fit neatly into a region. Every module in the
 * directory must also be named by a volume, or it is a chapter nobody can
 * reach.
 *
 * Each check is run first against deliberately broken fixtures (the negative
 * controls below) and must fail on each of them before the real chapters are
 * checked. A check that has never been seen to fail proves nothing.
 *
 * Only volumes with region entries are checked. Adding a region entry to a
 * volume in scripts/build-ebook.js is how a unit comes under this rule.
 */

const fs = require('fs');
const path = require('path');
const { VOLUMES, chapterFile, REGION_DIR } = require('../build-ebook');

const ROOT = path.resolve(__dirname, '..', '..');
const SIX = ['political', 'religious', 'social', 'intellectual', 'technological', 'economic'];
const DASH = /[–—]/;

function cedSource(unit) {
  const file = path.join(ROOT, 'scripts', 'lib', 'ced-source', `unit-${unit}.js`);
  if (!fs.existsSync(file)) return null;
  return require(file);
}

function cedCodes(ced) {
  const codes = new Set();
  for (const topic of Object.values(ced.topics)) {
    for (const kc of topic.keyConcepts || []) codes.add(kc.code);
  }
  return codes;
}

/** Every string anywhere inside a value, for the dash and link sweeps. */
function strings(value, out = []) {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach(v => strings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach(v => strings(v, out));
  return out;
}

/**
 * Problems with one regional chapter. Pure: everything it needs is passed in,
 * so the negative controls can call it on fixtures.
 *
 * @param {object} mod        the regional chapter module
 * @param {string} fileBase   its file name without .js, e.g. unit-4-east-asia
 * @param {object} ced        the CED source module for its unit
 * @param {Map} volumeKeys    topicKey -> slug, for every chapter in its volume
 */
function checkRegion(mod, fileBase, ced, volumeKeys) {
  const problems = [];
  const id = fileBase.replace(/^unit-\d+-/, '');
  const unit = String(mod.unit || '');

  for (const field of ['topicKey', 'slug', 'unit', 'region', 'titleHtml', 'deck']) {
    if (!mod[field]) problems.push(`missing ${field}`);
  }
  if (fileBase !== `unit-${unit}-${id}`) problems.push(`file ${fileBase}.js does not match unit ${unit}`);
  if (mod.slug !== `region-${unit}-${id}`) problems.push(`slug "${mod.slug}" should be "region-${unit}-${id}"`);
  if (mod.topicKey !== `r${unit}-${id}`) problems.push(`topicKey "${mod.topicKey}" should be "r${unit}-${id}"`);
  if (!Array.isArray(mod.empires) || !mod.empires.length) problems.push('no story sections (empires)');
  if (!Array.isArray(mod.ced) || !mod.ced.length) problems.push('no ced codes: a regional chapter must say which Key Concepts it teaches');
  if (!Array.isArray(mod.topics) || !mod.topics.length) problems.push('no topics: a regional chapter must say which topics it draws on');

  const codes = cedCodes(ced);
  for (const code of mod.ced || []) {
    if (!codes.has(code)) problems.push(`ced names ${code}, which is not a Key Concept in the CED source for Unit ${unit}`);
  }

  const topicKeyOf = code => `t${code.replace('.', '-')}`;
  for (const code of mod.topics || []) {
    if (!ced.topics[code]) problems.push(`topics names ${code}, which is not a topic in the CED source`);
    else if (!volumeKeys.has(topicKeyOf(code))) problems.push(`topics names ${code}, which has no chapter in this volume`);
  }

  for (const text of strings(mod)) {
    for (const m of text.matchAll(/href="#chapter-([a-z0-9-]+)"/g)) {
      const key = m[1];
      if (!volumeKeys.has(key)) problems.push(`links #chapter-${key}, which is not a chapter in this volume`);
      const t = /^t(\d+)-(\d+)$/.exec(key);
      if (t && !(mod.topics || []).includes(`${t[1]}.${t[2]}`)) {
        problems.push(`links Topic ${t[1]}.${t[2]} but does not list it in topics`);
      }
    }
    if (DASH.test(text)) {
      const at = text.search(DASH);
      problems.push(`em or en dash in prose: "...${text.slice(Math.max(0, at - 30), at + 10)}..."`);
    }
  }

  const cats = ((mod.closing && mod.closing.pairs) || []).map(p => String(p.category || '').toLowerCase()).join(' | ');
  for (const side of SIX) {
    if (!cats.includes(side)) problems.push(`closing cards have no ${side} card`);
  }

  return problems;
}

/** KC codes in the unit that no regional chapter teaches. */
function uncovered(ced, mods) {
  const taught = new Set(mods.flatMap(m => m.ced || []));
  return [...cedCodes(ced)].filter(code => !taught.has(code));
}

// ── negative controls ───────────────────────────────────────────────────────
//
// A tiny fake CED and a fixture chapter that passes, then one mutation per
// check. Each mutation must produce the problem it is aimed at.

let failures = 0;
const fail = msg => { failures++; console.error(`  FAIL ${msg}`); };

{
  const fakeCed = {
    topics: {
      '9.1': { keyConcepts: [{ code: 'KC-A' }, { code: 'KC-B' }] },
      '9.2': { keyConcepts: [{ code: 'KC-C' }] }
    }
  };
  const keys = new Map([['t9-1', 'topic-9-1-x'], ['t9-2', 'topic-9-2-y'], ['r9-north', 'region-9-north']]);
  const good = () => ({
    topicKey: 'r9-north', slug: 'region-9-north', unit: '9', region: 'North',
    titleHtml: 'The <em>North</em>', deck: 'A deck.',
    topics: ['9.1'], ced: ['KC-A', 'KC-B', 'KC-C'],
    empires: [{ id: 'a', parts: [{ heading: 'h', blocks: [{ p: 'See <a href="#chapter-t9-1">Topic 9.1</a>.' }] }] }],
    closing: { pairs: SIX.map(c => ({ category: c[0].toUpperCase() + c.slice(1), title: 't', body: 'b' })) }
  });

  const baseline = checkRegion(good(), 'unit-9-north', fakeCed, keys);
  if (baseline.length) fail(`negative-control fixture should pass and did not: ${baseline.join('; ')}`);

  const controls = [
    ['an invented Key Concept code', m => { m.ced.push('KC-Z'); }, /not a Key Concept/],
    ['a topic the CED does not have', m => { m.topics.push('9.7'); }, /not a topic in the CED/],
    ['a topic with no chapter in the volume', m => { fakeCed.topics['9.3'] = { keyConcepts: [] }; m.topics.push('9.3'); }, /no chapter in this volume/],
    ['a link to a chapter that does not exist', m => { m.deck = '<a href="#chapter-t9-8">x</a>'; }, /not a chapter in this volume/],
    ['a linked topic it does not declare', m => { m.deck = '<a href="#chapter-t9-2">x</a>'; }, /does not list it in topics/],
    ['an em dash in prose', m => { m.deck = 'one — two'; }, /em or en dash/],
    ['a missing closing category', m => { m.closing.pairs.pop(); }, /no economic card/],
    ['a slug that does not match its file', m => { m.slug = 'region-9-south'; }, /slug/],
    ['no ced codes at all', m => { m.ced = []; }, /no ced codes/]
  ];
  for (const [name, mutate, expect] of controls) {
    const m = good();
    mutate(m);
    const problems = checkRegion(m, 'unit-9-north', fakeCed, keys);
    if (!problems.some(p => expect.test(p))) fail(`negative control did not fail on ${name}`);
  }
  delete fakeCed.topics['9.3'];

  if (uncovered(fakeCed, [good()]).length) fail('coverage control: a full fixture reported a gap');
  const partial = good(); partial.ced = ['KC-A', 'KC-C'];
  if (uncovered(fakeCed, [partial]).join() !== 'KC-B') fail('coverage control: a dropped Key Concept was not reported');

  console.log(`  negative controls: ${controls.length + 2} broken fixtures, each caught`);
}

// ── the real chapters ───────────────────────────────────────────────────────

const named = new Set();
let checked = 0;

for (const volume of VOLUMES) {
  const regionEntries = (volume.contents || []).filter(e => e.region);
  if (!regionEntries.length) continue;

  const volumeKeys = new Map();
  const mods = [];
  for (const entry of volume.contents) {
    const file = chapterFile(entry);
    if (!file) continue;
    if (!fs.existsSync(file)) { fail(`${volume.id}: ${path.relative(ROOT, file)} does not exist`); continue; }
    const mod = require(file);
    volumeKeys.set(mod.topicKey, mod.slug);
    if (entry.region) { named.add(path.resolve(file)); mods.push([entry.region, mod]); }
  }

  const units = new Set(mods.map(([, m]) => String(m.unit)));
  for (const unit of units) {
    const ced = cedSource(unit);
    if (!ced) { fail(`${volume.id}: no scripts/lib/ced-source/unit-${unit}.js to check regional chapters against`); continue; }
    const unitMods = mods.filter(([, m]) => String(m.unit) === unit);
    for (const [base, mod] of unitMods) {
      checked++;
      for (const p of checkRegion(mod, base, ced, volumeKeys)) fail(`${base}.js: ${p}`);
    }
    const gaps = uncovered(ced, unitMods.map(([, m]) => m));
    if (gaps.length) {
      fail(`Unit ${unit}: no regional chapter teaches ${gaps.join(', ')}. Every Key Concept in the CED unit must be in at least one region's story.`);
    }
  }
}

if (fs.existsSync(REGION_DIR)) {
  for (const f of fs.readdirSync(REGION_DIR).filter(f => f.endsWith('.js'))) {
    if (!named.has(path.resolve(REGION_DIR, f))) {
      fail(`scripts/lib/region-content/${f} is not named by any volume in scripts/build-ebook.js, so no student can reach it`);
    }
  }
}

if (failures) {
  console.error(`\nregion-chapters: ${failures} problem${failures === 1 ? '' : 's'}`);
  process.exit(1);
}
console.log(`  ${checked} regional chapter${checked === 1 ? '' : 's'} match the CED source, and together cover every Key Concept in their unit`);
