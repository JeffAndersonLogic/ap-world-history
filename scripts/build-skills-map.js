#!/usr/bin/env node
/**
 * build-skills-map.js
 *
 * Writes assets/data/skills-map.js , a plain window.BEHISTORICAL_SKILLS_MAP
 * global that answers one question for every capture point in the course:
 * which AP historical thinking skill does this response practise, and which
 * evidence terms does the teacher expect to see in it?
 *
 * WHY THIS FILE EXISTS
 *
 * The teacher-facing Skills Lens dashboard ships as a single self-contained
 * HTML file with no network access, so it cannot read the 77 lesson data
 * files, the 77 renderer configs, or the 77 First & 10 reading pages at
 * runtime. Today that metadata is spread across all three:
 *
 *   - the AP skill for each First & 10 question lives only in the reading's
 *     three <span class="q-skill"> badges, nowhere in any data file;
 *   - the skill focus for the AP Skill Builder lives in skillBuilder.label,
 *     which the renderer config adds on top of the data file;
 *   - the expected evidence terms live in checkpoints[n].terms, the same
 *     array the on-page Self-Check button scores against.
 *
 * Without this map the dashboard can count responses but cannot say anything
 * about what they were supposed to contain, which is the only reason a
 * teacher would open it.
 *
 * WHAT IT READS
 *
 * Each unit topic needs BOTH assets/data/lesson-N-M-<slug>.js AND
 * assets/data/lesson-N-M-renderer-config.js evaluated, in that order: the
 * data file alone carries no skillBuilder and no checkpoints. Foundations
 * topics need only foundations/foundations-N-<slug>-data.js. Both are
 * evaluated in a vm sandbox with a stub document, because the data files
 * touch the DOM at load time.
 *
 * The slot ids and module labels are read from the two renderers rather than
 * restated here, so a change to WORK_ITEMS or FOUNDATION_WORK_ITEMS cannot
 * leave this map describing capture points that no longer exist.
 *
 * Usage: node scripts/build-skills-map.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'assets/data');
const FOUNDATIONS = path.join(ROOT, 'foundations');
const UNIT_RENDERER = path.join(ROOT, 'assets/js/behistorical-topic-renderer-v1.js');
const FOUNDATION_RENDERER = path.join(FOUNDATIONS, 'foundations-topic-renderer.js');
const OUT_PATH = path.join(DATA, 'skills-map.js');
const SCHEMA = 1;

const problems = [];
function problem(msg) { problems.push(msg); }

// ── Sandbox ──────────────────────────────────────────────────────────────────

// The data files call document.addEventListener and friends at load. A stub is
// enough: nothing here renders, it only wants the object literals.
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

// ── Slot tables, read from the renderers ─────────────────────────────────────

// Both renderers declare their capture table as a top-level const holding an
// array of literals. Pulling the ids and labels out by regex keeps this script
// honest about the real slot list without evaluating a whole renderer, which
// would need a real DOM. The id key differs between the two files: the unit
// renderer calls it `id`, the Foundations one calls it `slot`.
function readSlotTable(file, constName, idKey) {
  const src = fs.readFileSync(file, 'utf8');
  const start = src.indexOf(`const ${constName}`);
  if (start === -1) {
    throw new Error(`${constName} not found in ${path.relative(ROOT, file)}`);
  }
  const end = src.indexOf('\n];', start);
  if (end === -1) {
    throw new Error(`${constName} in ${path.relative(ROOT, file)} is not the array literal this expects`);
  }
  const body = src.slice(start, end);
  const rowRe = new RegExp(`${idKey}\\s*:\\s*'([^']+)'[\\s\\S]*?label\\s*:\\s*'([^']+)'`, 'g');
  const rows = [];
  let m;
  while ((m = rowRe.exec(body)) !== null) rows.push({ slot: m[1], label: m[2] });
  if (!rows.length) throw new Error(`${constName} parsed to zero slots`);
  return rows;
}

// 'Module 07, Evidence Lab' -> ord '07', module 'Evidence Lab'. Mirrors
// bhOrdinal() in the renderers, which is what the Canvas record manifest and
// the submission parser both key off.
function splitLabel(label) {
  const m = String(label).match(/^Module\s+(\d+),\s*(.+)$/i);
  return m ? { ord: m[1], module: m[2].trim() } : { ord: 'xx', module: String(label).trim() };
}

// ── AP skill normalization ───────────────────────────────────────────────────

// The badges and the skillBuilder labels are hand-authored prose, so the same
// skill arrives as 'CCOT', 'Continuity & Change', 'Continuity and Change Over
// Time' and 'Continuity and Change practice'. The dashboard needs to group
// them, so each raw string is scanned for known skill words and the canonical
// names come back in the order they appear in the text. First match wins as
// the primary skill, which makes 'Causation / Comparison' primarily causation
// and 'Comparison and causation practice' primarily comparison, matching how a
// teacher reads the label.
const SKILL_PATTERNS = [
  [/contextualization/i, 'Contextualization'],
  [/causation/i, 'Causation'],
  [/comparison/i, 'Comparison'],
  [/ccot|continuity/i, 'Continuity and Change'],
  [/argument|\bleq\b/i, 'Argumentation'],
  [/sourcing/i, 'Sourcing'],
  [/claims|evidence/i, 'Claims and Evidence'],
  [/developments and processes/i, 'Developments and Processes']
];

const unmatchedSkillText = new Set();

function normalizeSkills(raw) {
  const text = String(raw || '').trim();
  if (!text) return [];
  const hits = [];
  SKILL_PATTERNS.forEach(([re, name]) => {
    const found = text.search(re);
    if (found !== -1 && !hits.some(h => h.name === name)) hits.push({ at: found, name });
  });
  if (!hits.length) {
    unmatchedSkillText.add(text);
    return [];
  }
  hits.sort((a, b) => (a.at - b.at) || a.name.localeCompare(b.name));
  return hits.map(h => h.name);
}

// ── HTML helpers ─────────────────────────────────────────────────────────────

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: ', ', ndash: ', ', hellip: '...', rsquo: "'", lsquo: "'",
  rdquo: '"', ldquo: '"'
};

// Runs twice on purpose: some readings carry a double-escaped '&amp;amp;'.
function decodeEntities(value) {
  let out = String(value == null ? '' : value);
  for (let pass = 0; pass < 2; pass++) {
    out = out.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
      .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
      .replace(/&([a-z]+);/gi, (whole, name) => {
        const key = name.toLowerCase();
        return Object.prototype.hasOwnProperty.call(ENTITIES, key) ? ENTITIES[key] : whole;
      });
  }
  return out;
}

function stripTags(value) {
  return decodeEntities(String(value || '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

// Bold markers are authoring syntax, not content. plainPrompt() in both
// renderers strips them the same way before the prompt reaches Canvas.
function plainPrompt(value) {
  return stripTags(String(value || '').replace(/\*\*(.*?)\*\*/g, '$1'));
}

// ── First & 10 readings ──────────────────────────────────────────────────────

// A topic's reading is reached through first10.embedUrl. The documented
// pattern is embedUrl -> capture wrapper -> iframe -> standalone reading, but
// eight unit topics point embedUrl straight at the reading, so both shapes are
// followed rather than assumed.
function resolveReading(dir, embedUrl) {
  const first = String(embedUrl || '').split(/[?#]/)[0].trim();
  if (!first) return '';
  const firstPath = path.join(dir, first);
  if (!fs.existsSync(firstPath)) return '';
  if (!/-capture\.html$/i.test(first)) return firstPath;
  const m = fs.readFileSync(firstPath, 'utf8').match(/<iframe[^>]*\bsrc="([^"]+)"/i);
  if (!m) return '';
  const inner = path.join(dir, m[1].split(/[?#]/)[0]);
  return fs.existsSync(inner) ? inner : '';
}

// The three check questions, in document order, as the reading presents them.
// The badge and the question text are the two signals the map needs; the
// stored answer carries the question text at runtime, so what is captured here
// is the same string the record manifest hashes.
//
// The readings are not consistent about the wrapper element: 107 questions use
// <p class="q-text"> and 126 use <span class="q-text">. The back-reference on
// the tag name matches either without letting a span run on to the next </p>
// somewhere further down the page.
function readQuestions(file) {
  const html = fs.readFileSync(file, 'utf8');
  const skills = [];
  const texts = [];
  let m;
  const skillRe = /<([a-z]+)[^>]*class="q-skill"[^>]*>([\s\S]*?)<\/\1>/gi;
  while ((m = skillRe.exec(html)) !== null) skills.push(stripTags(m[2]));
  const textRe = /<([a-z]+)[^>]*class="q-text"[^>]*>([\s\S]*?)<\/\1>/gi;
  while ((m = textRe.exec(html)) !== null) texts.push(stripTags(m[2]));
  const count = Math.max(skills.length, texts.length);
  const rows = [];
  for (let i = 0; i < count; i++) rows.push({ skill: skills[i] || '', text: texts[i] || '' });
  return rows;
}

// ── Slot assembly ────────────────────────────────────────────────────────────

function makeSlot(row, fields) {
  const parts = splitLabel(row.label);
  const skillRaw = String(fields.skillRaw || '').trim();
  const skills = normalizeSkills(skillRaw);
  return {
    ord: parts.ord,
    module: parts.module,
    label: row.label,
    prompt: plainPrompt(fields.prompt),
    skill: skills[0] || '',
    skills,
    skillRaw,
    skillFrom: skills.length ? String(fields.skillFrom || '') : '',
    terms: (fields.terms || []).map(t => stripTags(t)).filter(Boolean),
    criteria: (fields.criteria || []).map(t => stripTags(t)).filter(Boolean),
    learningTargets: (fields.learningTargets || []).map(t => stripTags(t)).filter(Boolean),
    successCriteria: (fields.successCriteria || []).map(t => stripTags(t)).filter(Boolean)
  };
}

// Slot keys are sorted so the serialized file is stable; `order` preserves the
// module sequence a human reads, which alphabetical order destroys. The order
// list is settled by module ordinal with a stable sort, which keeps the extra
// First & 10 questions next to the first three instead of stranded at the end.
function packTopic(base, ordered) {
  const byModule = ordered.slice().sort((a, b) => Number(a.slot.ord) - Number(b.slot.ord));
  const slots = {};
  ordered.slice().sort((a, b) => a.key.localeCompare(b.key)).forEach(e => { slots[e.key] = e.slot; });
  return Object.assign({}, base, { order: byModule.map(e => e.key), slots });
}

// ── Unit topics ──────────────────────────────────────────────────────────────

function buildUnitTopic(dataFile, workRows) {
  const base = path.basename(dataFile);
  const cfgName = base.replace(/^lesson-(\d+)-(\d+)-.*$/, 'lesson-$1-$2-renderer-config.js');
  const cfgFile = path.join(DATA, cfgName);
  const box = sandbox();
  const ctx = vm.createContext(box);
  try {
    runFile(ctx, dataFile);
    if (fs.existsSync(cfgFile)) runFile(ctx, cfgFile);
    else problem(`${base}: no renderer config ${cfgName}, so skillBuilder and checkpoints are missing`);
  } catch (e) {
    problem(`${base}: failed to evaluate, ${e.message}`);
    return null;
  }

  const L = box.window.BEHISTORICAL_LESSON;
  if (!L) return null;

  const topicId = String((L.meta && L.meta.topic) || '').replace(/^Topic\s+/i, '').trim();
  if (!topicId) {
    problem(`${base}: meta.topic is empty, so this topic has no id the Canvas record can join on`);
    return null;
  }
  const unitNum = Number(topicId.split('.')[0]);
  const unitDir = path.join(ROOT, `unit-${unitNum}`);

  // The reading is the only place the per-question AP skills exist.
  let questions = [];
  const readingFile = resolveReading(unitDir, L.first10 && L.first10.embedUrl);
  if (L.first10 && !readingFile) {
    problem(`Topic ${topicId}: could not resolve a First & 10 reading from embedUrl ${JSON.stringify((L.first10 && L.first10.embedUrl) || '')}, so its three question skills are missing`);
  } else if (readingFile) {
    questions = readQuestions(readingFile);
    if (!questions.length) problem(`Topic ${topicId}: ${path.relative(ROOT, readingFile)} has no q-skill or q-text markup`);
  }

  const cp = Array.isArray(L.checkpoints) ? L.checkpoints : [];
  if (cp.length < 2) problem(`Topic ${topicId}: only ${cp.length} checkpoint(s), expected 2`);
  if (!(L.skillBuilder && L.skillBuilder.label)) problem(`Topic ${topicId}: skillBuilder.label is missing`);

  // Everything the WORK_ITEMS table cannot express: the extra signal each slot
  // carries beyond its prompt. Keyed by slot id so the loop below stays a
  // straight table walk.
  const extras = {
    'skill-builder-response': {
      prompt: L.skillBuilder && L.skillBuilder.prompt,
      skillRaw: L.skillBuilder && L.skillBuilder.label,
      skillFrom: 'skillBuilder.label'
    },
    'map-check-response': { prompt: L.map && L.map.prompt },
    'evidence-response': { prompt: L.evidenceLab && L.evidenceLab.prompt },
    'primary-source-response': {
      prompt: L.primarySource && Array.isArray(L.primarySource.questions)
        ? L.primarySource.questions.join(' ') : ''
    },
    'checkpoint-one-response': {
      prompt: cp[0] && cp[0].prompt, terms: cp[0] && cp[0].terms, criteria: cp[0] && cp[0].focus,
      learningTargets: cp[0] && cp[0].learningTargets, successCriteria: cp[0] && cp[0].successCriteria
    },
    'checkpoint-two-response': {
      prompt: cp[1] && cp[1].prompt, terms: cp[1] && cp[1].terms, criteria: cp[1] && cp[1].focus,
      learningTargets: cp[1] && cp[1].learningTargets, successCriteria: cp[1] && cp[1].successCriteria
    }
  };

  const ordered = [];
  workRows.forEach(row => {
    const qm = row.slot.match(/^first10-q(\d)$/);
    if (qm) {
      // The renderer counts a First & 10 slot whenever the topic has a reading,
      // even though the question text lives in the reading rather than the data
      // file. Same rule here, so this map and expectedCaptureCount() agree.
      if (!L.first10) return;
      const q = questions[Number(qm[1]) - 1] || { skill: '', text: '' };
      ordered.push({
        key: row.slot,
        slot: makeSlot(row, { prompt: q.text, skillRaw: q.skill, skillFrom: 'reading q-skill badge' })
      });
      return;
    }
    const extra = extras[row.slot] || {};
    const prompt = plainPrompt(extra.prompt);
    if (!prompt) return; // Matches expectedCaptureCount(): no prompt, no slot.
    ordered.push({ key: row.slot, slot: makeSlot(row, extra) });
  });

  // Topic 1.7's reading asks five questions, not three. WORK_ITEMS declares
  // only q1 to q3, but injectFirst10Answers() writes first10-q4 and q5 into the
  // gathered work anyway, so the dashboard will see those slot ids in real
  // Canvas records. Emitting them is what keeps the lookup from coming up
  // empty on a response that genuinely exists.
  const declaredQ = workRows.filter(r => /^first10-q\d$/.test(r.slot)).length;
  if (L.first10 && questions.length > declaredQ) {
    for (let i = declaredQ; i < questions.length; i++) {
      const n = i + 1;
      ordered.push({
        key: `first10-q${n}`,
        slot: makeSlot(
          { slot: `first10-q${n}`, label: `Module 02, First & 10, Question ${n}` },
          { prompt: questions[i].text, skillRaw: questions[i].skill, skillFrom: 'reading q-skill badge' }
        )
      });
    }
  }

  return {
    id: topicId,
    topic: packTopic({
      id: topicId,
      kind: 'unit',
      unit: unitNum,
      unitTitle: String((L.meta && L.meta.unit) || '').replace(/^Unit\s+\d+:\s*/i, '').trim(),
      title: String((L.meta && L.meta.title) || '').trim(),
      reading: readingFile ? path.relative(ROOT, readingFile) : '',
      terms: []
    }, ordered)
  };
}

// ── Foundations topics ───────────────────────────────────────────────────────

function buildFoundationTopic(dataFile, workRows) {
  const base = path.basename(dataFile);
  const box = sandbox();
  const ctx = vm.createContext(box);
  try {
    runFile(ctx, dataFile);
  } catch (e) {
    problem(`${base}: failed to evaluate, ${e.message}`);
    return null;
  }
  const T = box.window.FOUNDATION_TOPIC;
  if (!T) return null;

  // The renderer's short form. 'foundations-1' on disk, 'f1' in the First & 10
  // storage key and in the Canvas record manifest, which is what a parsed
  // response joins back on.
  const topicId = String(T.id || '').replace(/^foundations-(\d+)$/, 'f$1');
  if (!/^f\d+$/.test(topicId)) {
    problem(`${base}: id ${JSON.stringify(T.id)} does not reduce to the fN form the Canvas record uses`);
    return null;
  }

  // Mirrors the renderer's own fallbacks, so a slot's prompt here is the prompt
  // the student actually saw.
  const first10 = T.first10 || T.reading || null;
  const evidence = T.evidence || null;
  const aiCoach = T.aiCoach || null;
  const beSurreal = T.beSurreal || null;
  const checkpoint = T.checkpoint || null;
  if (!checkpoint) problem(`Topic ${topicId}: no checkpoint block`);
  if (!(T.skill && T.skill.title)) problem(`Topic ${topicId}: skill.title is missing, so the AP Skill Builder slot has no skill`);

  let questions = [];
  const readingFile = resolveReading(FOUNDATIONS, first10 && first10.embedUrl);
  if (first10 && !readingFile) {
    problem(`Topic ${topicId}: could not resolve a First & 10 reading from embedUrl ${JSON.stringify((first10 && first10.embedUrl) || '')}`);
  } else if (readingFile) {
    questions = readQuestions(readingFile);
    if (!questions.length) problem(`Topic ${topicId}: ${path.relative(ROOT, readingFile)} has no q-skill or q-text markup`);
  }

  // Foundations stores no per-checkpoint term list. Its equivalent is
  // checkpoint.checklist, a set of expectation sentences rather than evidence
  // words, so it lands in `criteria` and `terms` stays empty rather than
  // pretending a sentence is a term. The topic's vocabulary list, T.terms,
  // is real but topic-wide, so it hangs off the topic, not off a slot.
  const extras = {
    map: { prompt: T.map && T.map.prompt },
    first10: { prompt: first10 && first10.prompt },
    besurreal: { prompt: beSurreal && beSurreal.prompt },
    skill: {
      prompt: T.skill && T.skill.prompt,
      skillRaw: T.skill && T.skill.title,
      skillFrom: 'skill.title'
    },
    checkpoint: {
      prompt: checkpoint && checkpoint.prompt,
      criteria: (checkpoint && checkpoint.checklist) || []
    },
    evidence: { prompt: evidence && evidence.prompt },
    coach: { prompt: aiCoach && aiCoach.responsePrompt },
    checkpoint2: { prompt: (T.exitTicket || (checkpoint && checkpoint.prompt)) }
  };

  const embedded = Boolean(first10 && first10.embedUrl);
  const ordered = [];
  workRows.forEach(row => {
    // The renderer drops the single first10 slot when the reading is embedded,
    // because the three question slots replace it.
    if (row.slot === 'first10' && embedded) return;
    const qm = row.slot.match(/^first10-q(\d)$/);
    if (qm) {
      if (!first10) return;
      const q = questions[Number(qm[1]) - 1] || { skill: '', text: '' };
      ordered.push({
        key: row.slot,
        slot: makeSlot(row, { prompt: q.text, skillRaw: q.skill, skillFrom: 'reading q-skill badge' })
      });
      return;
    }
    const extra = extras[row.slot] || {};
    const prompt = plainPrompt(extra.prompt);
    if (!prompt) return;
    ordered.push({ key: row.slot, slot: makeSlot(row, extra) });
  });

  return {
    id: topicId,
    topic: packTopic({
      id: topicId,
      kind: 'foundations',
      unit: 0,
      unitTitle: 'Foundations',
      title: String(T.title || '').trim(),
      reading: readingFile ? path.relative(ROOT, readingFile) : '',
      terms: Array.isArray(T.terms) ? T.terms.map(t => stripTags(t)).filter(Boolean) : []
    }, ordered)
  };
}

// ── Build ────────────────────────────────────────────────────────────────────

// '5.10' must sort after '5.9', which a plain string compare gets wrong.
function topicSortKey(id) {
  const f = id.match(/^f(\d+)$/);
  if (f) return [0, Number(f[1]), 0];
  const u = id.match(/^(\d+)\.(\d+)$/);
  return u ? [1, Number(u[1]), Number(u[2])] : [2, 0, 0];
}

function compareTopicIds(a, b) {
  const ka = topicSortKey(a);
  const kb = topicSortKey(b);
  for (let i = 0; i < ka.length; i++) if (ka[i] !== kb[i]) return ka[i] - kb[i];
  return a.localeCompare(b);
}

const unitWorkRows = readSlotTable(UNIT_RENDERER, 'WORK_ITEMS', 'id');
const foundationWorkRows = readSlotTable(FOUNDATION_RENDERER, 'FOUNDATION_WORK_ITEMS', 'slot');

const built = [];

fs.readdirSync(DATA)
  .filter(f => /^lesson-\d+-\d+-.*\.js$/.test(f) && !/renderer-config/.test(f))
  .sort()
  .forEach(f => {
    // lesson-1-1-standards-addon.js and anything like it is not a lesson: it
    // never sets window.BEHISTORICAL_LESSON, so buildUnitTopic returns null.
    const t = buildUnitTopic(path.join(DATA, f), unitWorkRows);
    if (t) built.push(t);
  });

fs.readdirSync(FOUNDATIONS)
  .filter(f => /^foundations-\d+-.*-data\.js$/.test(f))
  .sort()
  .forEach(f => {
    const t = buildFoundationTopic(path.join(FOUNDATIONS, f), foundationWorkRows);
    if (t) built.push(t);
  });

built.sort((a, b) => compareTopicIds(a.id, b.id));

const topics = {};
built.forEach(t => {
  if (topics[t.id]) problem(`Duplicate topic id ${t.id}, the later data file wins`);
  topics[t.id] = t.topic;
});

const payload = { schema: SCHEMA, topics };

// ── Coverage ─────────────────────────────────────────────────────────────────

let slotCount = 0;
let withSkill = 0;
let withTerms = 0;
let withCriteria = 0;
let withTargets = 0;
let withPrompt = 0;
const bySkill = {};
const bySlotId = {};
built.forEach(t => {
  t.topic.order.forEach(key => {
    const s = t.topic.slots[key];
    slotCount++;
    bySlotId[key] = (bySlotId[key] || 0) + 1;
    if (s.skill) { withSkill++; bySkill[s.skill] = (bySkill[s.skill] || 0) + 1; }
    if (s.terms.length) withTerms++;
    if (s.criteria.length) withCriteria++;
    if (s.learningTargets.length || s.successCriteria.length) withTargets++;
    if (s.prompt) withPrompt++;
  });
});

// A silent zero anywhere here means a selector drifted and the map is a shell.
// Failing loudly beats writing an empty file and reporting success.
const fatals = [];
if (!built.length) fatals.push('no topics loaded at all');
if (!slotCount) fatals.push('no capture slots resolved');
if (!withSkill) fatals.push('not one slot resolved an AP skill, the q-skill and skillBuilder.label reads are both broken');
if (!withTerms) fatals.push('not one slot resolved evidence terms, the checkpoints[n].terms read is broken');
if (!withTargets) fatals.push('not one slot resolved a learning target or success criterion, the checkpoints[n].learningTargets/successCriteria read is broken');

// ── Write ────────────────────────────────────────────────────────────────────

const HEADER = '// AUTO-GENERATED by scripts/build-skills-map.js, do not hand-edit.\n'
  + '// Regenerate: node scripts/build-skills-map.js\n';

function render(generated) {
  const doc = Object.assign({ generated }, payload);
  return HEADER + `window.BEHISTORICAL_SKILLS_MAP = ${JSON.stringify(doc, null, 2)};\n`;
}

// Idempotence beats a fresh timestamp. The stamp is re-used when nothing else
// changed, so a second run on a later day is still a no-op and the file does
// not churn in git for no reason.
const today = new Date().toISOString().slice(0, 10);
let stamp = today;
if (fs.existsSync(OUT_PATH)) {
  const previous = fs.readFileSync(OUT_PATH, 'utf8');
  const priorStamp = (previous.match(/"generated":\s*"([^"]+)"/) || [])[1];
  if (priorStamp && render(priorStamp) === previous) stamp = priorStamp;
}

const out = render(stamp);
const unchanged = fs.existsSync(OUT_PATH) && fs.readFileSync(OUT_PATH, 'utf8') === out;
if (!unchanged) fs.writeFileSync(OUT_PATH, out);

// ── Inline into the Skills Lens ─────────────────────────────────────────────
//
// teacher/skills-lens.html has no network access and no build step of its
// own, so the map has to be physically inside it. This used to be a hand-paste
// step, with a comment asking a human to remember to do it after every run of
// this script. That is the exact shape of promise this repository has already
// watched fail: the Lens carried a stale map while assets/data/skills-map.js
// on disk had moved on, and nothing caught it. This script now owns both
// copies, so they cannot drift apart between runs.
const LENS_PATH = path.join(ROOT, 'teacher', 'skills-lens.html');
const LENS_OPEN = '<!-- BEGIN INLINED SKILLS MAP, generated by scripts/build-skills-map.js -->';
const LENS_CLOSE = '<!-- END INLINED SKILLS MAP -->';

let lensUnchanged = true;
if (fs.existsSync(LENS_PATH)) {
  const lensHtml = fs.readFileSync(LENS_PATH, 'utf8');
  const start = lensHtml.indexOf(LENS_OPEN);
  const end = lensHtml.indexOf(LENS_CLOSE);
  if (start === -1 || end === -1) {
    problem('teacher/skills-lens.html has no inline-skills-map sentinels, so the map was written to assets/data/skills-map.js only');
  } else {
    const wanted = LENS_OPEN + '\n<script>\n' + out + '</script>\n' + LENS_CLOSE;
    const current = lensHtml.slice(start, end + LENS_CLOSE.length);
    lensUnchanged = current === wanted;
    if (!lensUnchanged) {
      fs.writeFileSync(LENS_PATH, lensHtml.slice(0, start) + wanted + lensHtml.slice(end + LENS_CLOSE.length), 'utf8');
    }
  }
} else {
  problem('teacher/skills-lens.html not found, so its inlined skills map was not refreshed');
}

// ── Report ───────────────────────────────────────────────────────────────────

const unitTopics = built.filter(t => t.topic.kind === 'unit').length;
const foundationTopics = built.filter(t => t.topic.kind === 'foundations').length;

console.log(`${unchanged ? 'Unchanged' : 'Wrote'} ${path.relative(ROOT, OUT_PATH)} (generated ${stamp}, schema ${SCHEMA})`);
console.log(`${lensUnchanged ? 'Unchanged' : 'Wrote'} inlined skills map in ${path.relative(ROOT, LENS_PATH)}`);
console.log(`Topics: ${built.length} (${unitTopics} unit, ${foundationTopics} foundations)`);
console.log(`Slots: ${slotCount}`);
console.log(`  with a prompt:          ${withPrompt}`);
console.log(`  with an AP skill:       ${withSkill}`);
console.log(`  with evidence terms:    ${withTerms}`);
console.log(`  with response criteria: ${withCriteria}`);
console.log(`  with a learning target: ${withTargets}`);

console.log('Slots by id:');
Object.keys(bySlotId).sort().forEach(k => console.log(`  ${k.padEnd(26)} ${bySlotId[k]}`));

console.log('Slots by AP skill:');
Object.keys(bySkill).sort().forEach(k => console.log(`  ${k.padEnd(26)} ${bySkill[k]}`));

if (unmatchedSkillText.size) {
  console.log('Skill text that matched no canonical AP skill (left blank on purpose):');
  Array.from(unmatchedSkillText).sort().forEach(t => console.log(`  ${JSON.stringify(t)}`));
}

if (problems.length) {
  console.log(`Problems (${problems.length}):`);
  problems.forEach(p => console.log(`  ${p}`));
}

if (fatals.length) {
  console.error('FAILED, the map would be a shell:');
  fatals.forEach(f => console.error(`  ${f}`));
  process.exit(1);
}
