/**
 * socrates-course.js
 *
 * Reads the whole course out of the lesson data, and builds the context block a
 * student's pasted prompt carries to Socrates.
 *
 * WHY THIS IS A LIB AND NOT PART OF THE BUILD SCRIPT
 *
 * Three callers need the same answer to "what does a paste for Topic 7.2 look
 * like": `scripts/build-socrates.js` writes it into the documented contract,
 * `scripts/test/socrates-eval.js` sends it to a model to score the coaching, and
 * `scripts/test/socrates-contract.test.js` asserts every topic can produce a
 * complete one. Two implementations would mean two answers depending on which
 * door you came through, and the one that ships to students would be the one
 * nothing tested.
 *
 * `contextBlock()` is the executable form of docs/socrates/socrates-paste-contract.md.
 * The renderers cannot require this file, because they run in a browser from a
 * static host with no build step. Until that gap is closed, the contract doc is
 * what keeps them aligned, and closing it is item 2 in the README's open
 * questions.
 *
 * WHAT IT READS
 *
 * Each unit topic needs BOTH assets/data/lesson-N-M-<slug>.js AND
 * assets/data/lesson-N-M-renderer-config.js evaluated in that order: the data
 * file alone carries no checkpoints and no skillBuilder. Foundations topics read
 * window.FOUNDATION_TOPIC from foundations/foundations-N-<slug>-data.js, whose
 * shape differs: no key concepts, terms at the top level rather than per
 * checkpoint, and one checkpoint plus a separate exitTicket string.
 *
 * Both are evaluated in a vm sandbox with a stub document, because the data
 * files touch the DOM at load time.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');
const FOUND = path.join(ROOT, 'foundations');

const problems = [];
const problem = m => problems.push(m);

// The one hand-entered table in this file, and the reason it exists: `meta.subtitle`
// carries a date range on only 38 of the 77 topics. On the other 39 it is a
// thematic sentence, so labelling it "Period" in the paste would tell a Unit 7
// student their period is "How imperialist competition [...] escalated one
// assassination into global war." Without a real period line the coach has
// nothing to check an anachronism against, which is one of the eight things the
// stress test measures.
//
// These are the College Board's own unit spans from the AP World History Modern
// CED, not a judgement call, so they change only when the CED does. Foundations
// is Jeff's own pre-course unit and has no CED span.
const UNIT_PERIODS = {
  0: 'before c. 1200',
  1: 'c. 1200 to c. 1450',
  2: 'c. 1200 to c. 1450',
  3: 'c. 1450 to c. 1750',
  4: 'c. 1450 to c. 1750',
  5: 'c. 1750 to c. 1900',
  6: 'c. 1750 to c. 1900',
  7: 'c. 1900 to the present',
  8: 'c. 1900 to the present',
  9: 'c. 1900 to the present'
};

function sandbox() {
  const box = {
    window: {},
    console: { log() {}, warn() {}, error() {} },
    document: {
      addEventListener() {},
      getElementById: () => null,
      querySelectorAll: () => [],
      querySelector: () => null,
      createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }),
      head: { appendChild() {} },
      body: { appendChild() {} }
    }
  };
  box.globalThis = box;
  return box;
}

function runFile(ctx, file) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: path.basename(file) });
}

const clean = s => String(s == null ? '' : s).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const list = a => (Array.isArray(a) ? a : []).map(clean).filter(Boolean);

// ── Read the course ──────────────────────────────────────────────────────────

// One topic reduced to what a coach needs and nothing more. Deliberately no
// lecture bullets and no reading prose: those are what the student is supposed
// to have read, and putting them in the coach's attachment is how a coach ends
// up reciting the lesson back instead of asking about the draft.
function unitTopics() {
  const files = fs.readdirSync(DATA)
    .filter(f => /^lesson-\d-\d+-[a-z][\w-]*\.js$/.test(f) && !/renderer-config|standards-addon/.test(f))
    .sort();
  const out = [];
  for (const base of files) {
    const m = base.match(/^lesson-(\d)-(\d+)-/);
    const box = sandbox();
    const ctx = vm.createContext(box);
    try {
      runFile(ctx, path.join(DATA, base));
      const cfg = path.join(DATA, `lesson-${m[1]}-${m[2]}-renderer-config.js`);
      if (fs.existsSync(cfg)) runFile(ctx, cfg);
      else problem(`${base}: no renderer config, so its checkpoints are missing`);
      const addon = path.join(DATA, `lesson-${m[1]}-${m[2]}-standards-addon.js`);
      if (fs.existsSync(addon)) runFile(ctx, addon);
    } catch (e) {
      problem(`${base}: failed to evaluate, ${e.message}`);
      continue;
    }
    const L = box.window.BEHISTORICAL_LESSON;
    if (!L || !L.meta) { problem(`${base}: no BEHISTORICAL_LESSON.meta`); continue; }
    const id = clean(L.meta.topic).replace(/^Topic\s+/i, '');
    if (!id) { problem(`${base}: meta.topic is empty`); continue; }

    const cps = Array.isArray(L.checkpoints) ? L.checkpoints : [];
    if (cps.length < 2) problem(`Topic ${id}: ${cps.length} checkpoint(s), expected 2`);
    const kcs = Array.isArray(L.collegeBoardKeyConcepts) ? L.collegeBoardKeyConcepts : [];
    if (!kcs.length) problem(`Topic ${id}: no collegeBoardKeyConcepts, so the coach has no CED language to hold the student to`);

    const terms = [];
    cps.forEach(c => list(c.terms).forEach(t => { if (!terms.includes(t)) terms.push(t); }));
    if (!terms.length) problem(`Topic ${id}: no checkpoint terms, so the coach cannot name expected evidence`);

    out.push({
      id,
      sort: [Number(m[1]), Number(m[2])],
      kind: 'unit',
      unit: clean(L.meta.unit),
      title: clean(L.meta.title),
      period: clean(L.meta.subtitle),
      span: UNIT_PERIODS[Number(m[1])] || '',
      targets: list((L.learningTargets || []).map(t => t.target || t)),
      criteria: list((L.successCriteria || []).map(c => c.criteria || c)),
      kcs: kcs.map(k => ({
        code: clean(k.code),
        theme: clean(k.theme),
        text: clean(k.text),
        examples: list(k.illustrativeExamples)
      })),
      terms,
      checkpoints: cps.map(c => ({
        label: clean(c.responseType) || clean(c.title),
        prompt: clean(c.prompt),
        terms: list(c.terms),
        focus: list(c.focus)
      })),
      skill: L.skillBuilder ? clean(L.skillBuilder.label || L.skillBuilder.title) : ''
    });
  }
  return out;
}

function foundationsTopics() {
  const files = fs.readdirSync(FOUND).filter(f => /^foundations-\d-.*-data\.js$/.test(f)).sort();
  const out = [];
  for (const base of files) {
    const box = sandbox();
    const ctx = vm.createContext(box);
    try { runFile(ctx, path.join(FOUND, base)); }
    catch (e) { problem(`${base}: failed to evaluate, ${e.message}`); continue; }
    // The Foundations renderer reads window.FOUNDATION_TOPIC, not the unit
    // renderer's window.BEHISTORICAL_LESSON, and its shape differs: no
    // collegeBoardKeyConcepts, terms at the top level rather than per
    // checkpoint, one checkpoint plus a separate exitTicket string.
    const T = box.window.FOUNDATION_TOPIC;
    if (!T) { problem(`${base}: no window.FOUNDATION_TOPIC`); continue; }
    const n = Number(base.match(/^foundations-(\d)-/)[1]);
    const cp = T.checkpoint || {};
    if (!cp.prompt) problem(`Foundations ${n}: no checkpoint.prompt`);
    const terms = list(T.terms);
    if (!terms.length) problem(`Foundations ${n}: no terms, so the coach cannot name expected evidence`);
    const checkpoints = [];
    if (cp.prompt) {
      checkpoints.push({
        label: 'Checkpoint 1',
        prompt: clean(cp.prompt),
        terms,
        focus: list(cp.checklist)
      });
    }
    if (T.exitTicket) {
      checkpoints.push({ label: 'Checkpoint 2', prompt: clean(T.exitTicket), terms, focus: [] });
    }
    out.push({
      id: `F${n}`,
      sort: [0, n],
      kind: 'foundations',
      unit: 'Foundations',
      title: clean(T.title),
      period: clean(T.subtitle),
      span: UNIT_PERIODS[0],
      targets: list((T.learningTargets || []).map(t => t.target || t)),
      criteria: list((T.successCriteria || []).map(c => c.criteria || c)),
      kcs: [],
      terms,
      checkpoints,
      skill: T.skill ? clean(T.skill.title) : ''
    });
  }
  return out;
}


// ── The paste contract, in executable form ───────────────────────────────────
//
// One block per module being coached. Every line is read off the lesson data, so
// a teacher who edits a checkpoint prompt changes what the coach is told with no
// second copy to remember to update.
//
// The order is deliberate: the topic line first, because it is what lets one bot
// serve 77 topics, and the student's draft last, because a model reads what
// bounds the task before what it is being asked to judge.
function contextBlock(topic, opts) {
  const o = opts || {};
  const cp = topic.checkpoints[o.checkpoint == null ? topic.checkpoints.length - 1 : o.checkpoint];
  if (!cp) return null;
  const lines = [
    `Topic ${topic.id}, ${cp.label || 'Checkpoint'}, ${topic.title}.`
  ];
  if (topic.span) lines.push(`Period: ${topic.span}.`);
  if (topic.period) lines.push(`Lesson focus: ${topic.period}`);
  if (topic.targets.length) lines.push(`Learning target: ${topic.targets.join(' ')}`);
  if (topic.criteria.length) lines.push(`Success criteria: ${topic.criteria.join(' ')}`);
  if (topic.kcs.length) {
    lines.push(`Key concept: ${topic.kcs.map(k => `${k.code} ${k.text}`).join(' ')}`);
  }
  if (cp.terms.length) lines.push(`Focus terms: ${cp.terms.join(', ')}.`);
  if (cp.focus.length) lines.push(`Strong answer checklist: ${cp.focus.join(' ')}`);
  lines.push(`Assigned prompt: ${cp.prompt}`);
  lines.push('', 'Here is my response:', '', o.draft == null ? '{{DRAFT}}' : o.draft, '');
  lines.push('Coach me by asking one question at a time. Do not write my final answer for me.');
  return lines.join('\n');
}

function loadCourse() {
  problems.length = 0;
  const topics = [...foundationsTopics(), ...unitTopics()]
    .sort((a, b) => a.sort[0] - b.sort[0] || a.sort[1] - b.sort[1]);
  return { topics, problems: problems.slice() };
}

module.exports = { loadCourse, contextBlock };
