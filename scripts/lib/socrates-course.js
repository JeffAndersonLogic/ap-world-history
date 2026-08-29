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
const { buildCoachPrompt, unitPeriod } = require('../../assets/js/behistorical-coach-prompt');

const ROOT = path.join(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');
const FOUND = path.join(ROOT, 'foundations');

const problems = [];
const problem = m => problems.push(m);

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
      span: unitPeriod(m[1]),
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
      span: unitPeriod('F'),
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
// The block itself is assembled by assets/js/behistorical-coach-prompt.js, which
// is the same file the renderer and the 77 readings use. This function's only job
// is choosing which checkpoint and mapping the loaded topic onto its fields.
function contextBlock(topic, opts) {
  const o = opts || {};
  const cp = topic.checkpoints[o.checkpoint == null ? topic.checkpoints.length - 1 : o.checkpoint];
  if (!cp) return null;
  return buildCoachPrompt({
    topic: topic.id,
    // Optional override, defaulting to the checkpoint's own label so nothing that
    // does not pass it moves a byte. socrates-turns.js needs it to build a First &
    // 10 Reflection paste, which is a real surface with no checkpoint of its own,
    // and the assignment name is what selects Socrates' threshold under version 2
    // of the persona.
    module: o.module || cp.label || 'Checkpoint',
    title: topic.title,
    span: topic.span,
    focus: topic.period,
    targets: topic.targets,
    criteria: topic.criteria,
    kcs: topic.kcs,
    terms: cp.terms,
    checklist: cp.focus,
    assigned: cp.prompt,
    draft: o.draft
  });
}

function loadCourse() {
  problems.length = 0;
  const topics = [...foundationsTopics(), ...unitTopics()]
    .sort((a, b) => a.sort[0] - b.sort[0] || a.sort[1] - b.sort[1]);
  return { topics, problems: problems.slice() };
}

module.exports = { loadCourse, contextBlock };
