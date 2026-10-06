#!/usr/bin/env node
'use strict';

/*
 * The story starts from the CED, and nothing downstream may drift from it.
 *
 * scripts/lib/ced-source/unit-N.js is the College Board's own wording for a
 * unit, transcribed from the CED PDF. Every other place this repository states
 * what the CED says is a copy, and this test fails the push when a copy
 * disagrees with the source:
 *
 *   1. the lesson data (collegeBoardKeyConcepts, read through the same loader
 *      the Key Concept band and the Socrates Kit use): the learning objective,
 *      every Key Concept code and sentence, and the illustrative examples;
 *   2. the unit's CED contract (scripts/lib/ced-unitN-contract.js);
 *   3. the unit story map (docs/UNIT-N-STORY-MAP.md): each topic's reasoning
 *      move must be the CED's reasoning process;
 *   4. every topic story draft (docs/TOPIC-N-*-STORY-DRAFT.md): it must quote
 *      the learning objective verbatim, name every Key Concept code, give the
 *      CED's reasoning process as its reasoning move, and cite the source file.
 *
 * Why this exists: on 2026-10-06 the 3.2 story was drafted from the repo's
 * copies instead of the CED. The story map had given 3.2 the reasoning move
 * "causation" where the CED says "Comparison", and the contract and story map
 * had both dropped a named example. Every check was green. A story built from
 * a copy inherits the copy's mistakes.
 *
 * Only units with a source file are checked. Adding scripts/lib/ced-source/
 * unit-N.js is how a unit comes under this rule, and it must exist before
 * that unit's first story is drafted.
 */

const fs = require('fs');
const path = require('path');
const { loadCourse } = require('../lib/socrates-course');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE_DIR = path.join(ROOT, 'scripts', 'lib', 'ced-source');
const SOURCE_REL = unit => `scripts/lib/ced-source/unit-${unit}.js`;
// The day the CED rule was made iron-clad. See checkDraft.
const RULE_DATE = '2026-10-06';

const norm = s => String(s == null ? '' : s)
  .replace(/<[^>]+>/g, ' ')
  .replace(/[‘’]/g, "'")
  .replace(/[–—]/g, '-')
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim();
const low = s => norm(s).toLowerCase();
const sameSet = (a, b) => a.length === b.length && a.every(x => b.includes(x));

// A code's CED wording. The CED itself prints one Key Concept slightly
// differently on two pages (KC-4.3.II.B with and without "the" on pp. 69 and
// 72), so a copy matches if it matches the wording on any page of the source.
function cedTexts(source) {
  const byCode = {};
  for (const t of Object.values(source.topics)) {
    for (const k of t.keyConcepts) (byCode[k.code] = byCode[k.code] || new Set()).add(norm(k.text));
  }
  return byCode;
}

function examplesOf(topic) {
  return Object.values(topic.illustrativeExamples || {}).flat().map(norm);
}

function checkLesson(id, ced, lesson, texts) {
  const fails = [];
  if (!lesson) return [`${id}: no lesson data found`];
  const kcs = lesson.kcs || [];
  const lo = kcs.find(k => /Learning Objective/i.test(k.code));
  if (!lo) fails.push(`${id} lesson: no learning objective in collegeBoardKeyConcepts`);
  else {
    if (norm(lo.code) !== norm(ced.learningObjective.code)) fails.push(`${id} lesson: learning objective code "${lo.code}", CED says "${ced.learningObjective.code}"`);
    if (norm(lo.text) !== norm(ced.learningObjective.text)) fails.push(`${id} lesson: learning objective wording differs from the CED`);
  }
  const lessonKcs = kcs.filter(k => !/Learning Objective/i.test(k.code));
  const want = ced.keyConcepts.map(k => k.code);
  const have = lessonKcs.map(k => norm(k.code));
  for (const c of want) if (!have.includes(c)) fails.push(`${id} lesson: Key Concept ${c} is in the CED and missing from the lesson`);
  for (const c of have) if (!want.includes(c)) fails.push(`${id} lesson: Key Concept ${c} is not on this topic's CED page`);
  for (const k of lessonKcs) {
    const ok = texts[norm(k.code)];
    if (ok && !ok.has(norm(k.text))) fails.push(`${id} lesson: ${k.code} wording differs from the CED`);
  }
  const lessonEx = lessonKcs.flatMap(k => k.examples || []).map(norm);
  const cedEx = examplesOf(ced);
  for (const e of cedEx) if (!lessonEx.includes(e)) fails.push(`${id} lesson: CED illustrative example "${e}" is missing from collegeBoardKeyConcepts`);
  for (const e of lessonEx) if (!cedEx.includes(e)) fails.push(`${id} lesson: "${e}" is listed as a CED illustrative example and the CED does not list it`);
  return fails;
}

function checkContract(id, ced, entry) {
  const fails = [];
  if (!entry) return fails;
  const los = (entry.learningObjectives || []).map(norm);
  if (!sameSet(los, [norm(ced.learningObjective.text)])) fails.push(`${id} contract: learningObjectives differ from the CED`);
  if (!sameSet((entry.keyConcepts || []).map(norm), ced.keyConcepts.map(k => k.code))) fails.push(`${id} contract: keyConcepts differ from the CED (${(entry.keyConcepts || []).join(', ')})`);
  const cedEx = examplesOf(ced);
  const have = (entry.illustrativeExamples || []).map(norm);
  for (const e of cedEx) if (!have.includes(e)) fails.push(`${id} contract: CED illustrative example "${e}" is missing`);
  for (const e of have) if (!cedEx.includes(e)) fails.push(`${id} contract: "${e}" is not a CED illustrative example for this topic`);
  return fails;
}

// The block of a story map under "### 3.2 ...", up to the next heading.
function mapSection(md, id) {
  const re = new RegExp(`^###\\s+${id.replace('.', '\\.')}\\b[\\s\\S]*?(?=^#{2,3}\\s)`, 'm');
  const m = md.match(re);
  return m ? m[0] : null;
}

function reasoningMove(text) {
  const m = text.match(/\*\*Reasoning move:\*\*\s*([^\n]+)/i);
  return m ? m[1].trim() : null;
}

function checkMap(id, ced, md) {
  if (md == null) return [];
  const sec = mapSection(md, id);
  if (!sec) return [`${id} story map: no "### ${id}" section`];
  const move = reasoningMove(sec);
  if (!move) return [`${id} story map: no "**Reasoning move:**" line`];
  if (!low(move).startsWith(low(ced.reasoningProcess))) {
    return [`${id} story map: reasoning move "${move.slice(0, 40)}", the CED's reasoning process is ${ced.reasoningProcess}`];
  }
  return [];
}

function checkDraft(id, unit, ced, md, file) {
  const fails = [];
  const text = norm(md);
  if (!text.includes(norm(ced.learningObjective.text))) fails.push(`${file}: does not quote the CED learning objective verbatim`);
  for (const k of ced.keyConcepts) if (!text.includes(k.code)) fails.push(`${file}: does not name ${k.code}`);
  const move = reasoningMove(md);
  if (!move) fails.push(`${file}: no "**Reasoning move:**" line`);
  else if (!low(move).startsWith(low(ced.reasoningProcess))) fails.push(`${file}: reasoning move "${move.slice(0, 40)}", the CED's reasoning process is ${ced.reasoningProcess}`);
  // A draft Jeff approved before this rule existed (2026-10-06) is a record of
  // what he approved and is not edited after the fact: editing it would also mark
  // the topic stale in the audit index. Its content is still checked above.
  const approved = md.match(/\*\*Status: Approved by Jeff, (\d{4}-\d{2}-\d{2})/);
  const grandfathered = approved && approved[1] < RULE_DATE;
  if (!grandfathered && !md.includes(SOURCE_REL(unit))) fails.push(`${file}: does not cite ${SOURCE_REL(unit)} as its CED source`);
  return fails;
}

function run(inputs) {
  const fails = [];
  for (const { unit, source, lessons, contract, storyMap, drafts } of inputs) {
    const texts = cedTexts(source);
    for (const [id, ced] of Object.entries(source.topics)) {
      fails.push(...checkLesson(id, ced, lessons[id], texts));
      fails.push(...checkContract(id, ced, contract && contract.topics && contract.topics[id]));
      fails.push(...checkMap(id, ced, storyMap));
      const d = drafts[id];
      if (d) fails.push(...checkDraft(id, unit, ced, d.md, d.file));
    }
  }
  return fails;
}

function gather() {
  const course = loadCourse();
  const topics = course.topics || course;
  const units = fs.existsSync(SOURCE_DIR)
    ? fs.readdirSync(SOURCE_DIR).map(f => (f.match(/^unit-(\d+)\.js$/) || [])[1]).filter(Boolean)
    : [];
  return units.map(unit => {
    const source = require(path.join(SOURCE_DIR, `unit-${unit}.js`));
    const lessons = {};
    for (const id of Object.keys(source.topics)) lessons[id] = topics.find(t => t.id === id);
    const contractPath = path.join(ROOT, 'scripts', 'lib', `ced-unit${unit}-contract.js`);
    const contract = fs.existsSync(contractPath) ? require(contractPath) : null;
    const mapPath = path.join(ROOT, 'docs', `UNIT-${unit}-STORY-MAP.md`);
    const storyMap = fs.existsSync(mapPath) ? fs.readFileSync(mapPath, 'utf8') : null;
    const drafts = {};
    for (const f of fs.readdirSync(path.join(ROOT, 'docs'))) {
      const m = f.match(new RegExp(`^TOPIC-(${unit})-(\\d+)-STORY-DRAFT\\.md$`));
      if (m) drafts[`${m[1]}.${m[2]}`] = { file: `docs/${f}`, md: fs.readFileSync(path.join(ROOT, 'docs', f), 'utf8') };
    }
    return { unit, source, lessons, contract, storyMap, drafts };
  });
}

const clone = x => JSON.parse(JSON.stringify(x));

function negativeControls(inputs) {
  // Each mutation is a real way a copy has drifted, or could. Each must turn
  // the check red, or the green above proves nothing.
  const base = inputs.find(i => i.source.topics['3.2']) || inputs[0];
  if (!base) return ['no CED source file found, so nothing was checked'];
  const id = base.source.topics['3.2'] ? '3.2' : Object.keys(base.source.topics)[0];
  const controls = [
    ['story map gives the wrong reasoning move', b => { b.storyMap = b.storyMap.replace(mapSection(b.storyMap, id), mapSection(b.storyMap, id).replace(/\*\*Reasoning move:\*\*\s*\S+/, '**Reasoning move:** narration')); }],
    ['lesson drops a Key Concept', b => { b.lessons[id].kcs = b.lessons[id].kcs.filter(k => k.code !== b.source.topics[id].keyConcepts[0].code); }],
    ['lesson rewords a Key Concept', b => { const k = b.lessons[id].kcs.find(x => x.code === b.source.topics[id].keyConcepts[0].code); k.text += ' Mostly.'; }],
    ['lesson rewords the learning objective', b => { b.lessons[id].kcs[0].text = 'Explain how empires were run.'; }],
    ['contract drops an illustrative example', b => { const c = b.contract.topics[id]; c.illustrativeExamples = c.illustrativeExamples.slice(1); }],
    ['contract adds an example the CED does not list', b => { b.contract.topics[id].illustrativeExamples.push('Ottoman millet system'); }],
    ['draft paraphrases the learning objective', b => {
      const d = b.drafts[id];
      const words = b.source.topics[id].learningObjective.text.split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const before = d.md;
      d.md = d.md.replace(new RegExp(words.join('\\s+'), 'g'), 'Explain how rulers ran empires.');
      if (d.md === before) throw new Error('learning objective not found in the draft');
    }],
    ['draft gives a reasoning move the CED does not', b => { const d = b.drafts[id]; d.md = d.md.replace(/\*\*Reasoning move:\*\*\s*\S+/, '**Reasoning move:** narration'); }],
    ['draft cites a copy instead of the CED source', b => { const d = b.drafts[id]; d.md = d.md.split(SOURCE_REL(b.unit)).join('scripts/lib/ced-unit3-contract.js'); }]
  ];
  const fails = [];
  for (const [name, mutate] of controls) {
    const b = Object.assign({}, base, { lessons: clone(base.lessons), contract: clone(base.contract), drafts: clone(base.drafts) });
    try { mutate(b); } catch (e) { fails.push(`negative control "${name}" could not be applied: ${e.message}`); continue; }
    if (run([b]).length === 0) fails.push(`negative control "${name}" stayed green, so the check cannot see that failure`);
  }
  return { fails, count: controls.length };
}

const inputs = gather();
const fails = run(inputs);
const neg = negativeControls(inputs);
const all = fails.concat(neg.fails || neg);

const units = inputs.map(i => i.unit).join(', ') || 'none';
if (all.length) {
  console.error(`FAIL  CED source check (units ${units}): ${all.length} problem(s)`);
  for (const f of all) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`PASS  units ${units}: lesson data, contract, story map and story drafts match the CED; ${neg.count} negative controls all failed as they should`);
