#!/usr/bin/env node
'use strict';

/**
 * report-checkpoint-congruence.js, a review tool for the eBook publishing a
 * graded checkpoint's own answer.
 *
 * WHY THIS EXISTS. The eBook and the standalone deep readings are one source
 * (see CLAUDE.md, "The eBook"): every chapter's closing "Use this in your
 * answer" boxes and comparison cards are published on a public GitHub Pages
 * site. Every topic's checkpoints, meanwhile, are graded and captured to
 * Canvas, and several ask the exact analytical question a chapter's closing
 * card already answers. Topic 5.3 is the case that found this: Checkpoint 2
 * asks why calling the Luddites "anti-technology" mischaracterizes them, and
 * the chapter's own card, "The Luddites chose their targets, and the state's
 * own files prove it," gives that answer with its evidence. Nobody did
 * anything wrong; the content model working as designed produced it.
 *
 * WHY THIS IS NOT IN THE GATE, AND MUST NOT BE PUT THERE.
 *
 * `npm test` is hard on plumbing and silent on pedagogy, the same split
 * `report-absolutes.js` draws for overclaims. Whether a matched card is a real
 * leak or legitimate shared evidence about the same events is a judgment
 * about teaching, not a fact a machine can settle, and a gate that failed a
 * push over word overlap would teach one behavior: rephrase a card until the
 * matcher goes quiet, which makes the prose worse without making a single
 * answer less available to a student who wants to skip the reasoning. So this
 * prints a list, ranked by how closely each match reads, and exits 0 no
 * matter what it finds. A person reads it and decides per topic.
 *
 * WHAT A HIT MEANS, AND WHAT TO DO WITH IT. A high score is not automatically
 * a problem: the eBook and a checkpoint on the same topic are SUPPOSED to
 * cover the same events, and two sentences about the Berlin Conference will
 * always share vocabulary. What is worth a look is a card whose CONCLUSION is
 * the checkpoint's conclusion, not just its evidence base. Three outcomes:
 *
 *   FINE      Shared evidence, different question. The checkpoint asks for a
 *             causal argument, the card runs a comparison; overlap is the
 *             topic, not the answer.
 *   REWORD    The card states the specific claim the prompt asks for. Keep
 *             the history, change what the card leads with: replace a
 *             conclusion sentence with the method that gets there, so a
 *             student still has to do the analytical step the checkpoint
 *             grades. This is the repair used for Topic 5.3's own case.
 *   PROMOTE   The checkpoint and the card are so aligned that the prompt
 *             itself should probably change to ask a different question of
 *             the same evidence, because the current pairing has nothing left
 *             for a student to contribute once they have read the chapter.
 *
 * Usage:
 *   node scripts/report-checkpoint-congruence.js              every topic, ranked
 *   node scripts/report-checkpoint-congruence.js t6            one unit (topicKey prefix)
 *   node scripts/report-checkpoint-congruence.js --counts      totals per topic only
 *   node scripts/report-checkpoint-congruence.js --min=55      raise the score floor (default 45)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'scripts', 'lib', 'deep-reading-content');
const DATA_DIR = path.join(ROOT, 'assets', 'data');
const FOUNDATIONS_DIR = path.join(ROOT, 'foundations');

const TARGET = process.argv.slice(2).find(a => !a.startsWith('--'));
const COUNTS_ONLY = process.argv.includes('--counts');
const MIN_ARG = process.argv.find(a => a.startsWith('--min='));
const MIN_SCORE = MIN_ARG ? Number(MIN_ARG.slice('--min='.length)) : 45;

// Words too generic to count as a match, drawn from the prompt-writing
// vocabulary itself (explain, argument, evidence...) rather than a general
// stopword list, since a generic English stopword list still leaves "explain"
// and "specific" inflating every score in this specific corpus.
const STOP = new Set((
  'the a an and or of in on at to for from with without by as is was were are ' +
  'be been being that this these those it its their his her they them not no ' +
  'than then so such other more most into over under between during after ' +
  'before against about through across which one you your think why what how ' +
  'two three four each also both use using used explain identify describe ' +
  'develop argument response evidence specific then end objective support ' +
  'answer complicate qualify claim'
).split(' '));

const strip = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ');
const norm = s => strip(s).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
const contentWords = s => [...new Set(norm(s).split(' ').filter(w => w.length > 3 && !STOP.has(w)))];

// A prompt with under 6 distinct content words ("What is a strong comparison
// claim using this evidence?" -> strong, comparison, claim, evidence) scores
// as a near-total match against almost ANY topic's comparison box, because
// the whole prompt is instructional boilerplate rather than content specific
// to this topic. That is not congruence, it is two short generic sentences
// about the same genre of task. Below the floor, don't score at all, the same
// way report-absolutes.js declines to flag a bare "only" that is doing
// honest work: a report that fires on noise stops getting read.
const MIN_PROMPT_WORDS = 6;

/** Content-word overlap of `prompt` found inside `text`, 0-100, or null if
 *  the prompt is too generic/short to score meaningfully. */
function overlapScore(prompt, text) {
  const words = contentWords(prompt);
  if (words.length < MIN_PROMPT_WORDS) return null;
  const hits = words.filter(w => text.includes(w)).length;
  return Math.round(100 * hits / words.length);
}

// ── every chapter's answer-shaped units: closing cards and useThis boxes ─────
const chaptersByTopic = {};
for (const f of fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.js'))) {
  let mod;
  try { mod = require(path.join(CONTENT_DIR, f)); } catch { continue; }
  const t = mod.topic || mod;
  if (!t || !t.topicKey) continue;

  const units = [];
  for (const pair of (t.closing && t.closing.pairs) || []) {
    units.push({ kind: 'closing card', label: strip(pair.title), text: norm(`${pair.title} ${pair.body}`) });
  }
  for (const empire of t.empires || []) {
    if (!empire.useThis) continue;
    units.push({
      kind: 'use-this box', label: `${empire.navLabel || empire.name}: use this in your answer`,
      text: norm(`${empire.useThis.tool || ''} ${empire.useThis.limit || ''} ${empire.useThis.comparison || ''}`),
    });
  }
  chaptersByTopic[t.topicKey] = { file: f, units };
}

// ── every checkpoint prompt, across all three conventions this repo uses ────
// A checkpoint block is marked by responseType/title/checkpoint1/checkpoint2,
// in a unit's renderer-config, a unit's own lesson data file, or a
// Foundations *-data.js file. Slicing a window from each marker to the next
// is convention-independent, which matters because those three shapes do not
// agree with each other about where `terms` and `prompt` live.
const promptsByTopic = {};
function addPrompt(topicKey, prompt, file) {
  (promptsByTopic[topicKey] ||= []).push({ prompt, file });
}
function harvest(src, topicKey, file) {
  const marks = [...src.matchAll(/(?:responseType:\s*['"]Checkpoint|title:\s*['"]Checkpoint|checkpoint[12]?\s*[:=])/gi)]
    .map(m => m.index);
  if (!marks.length) return;
  marks.push(src.length);
  for (let i = 0; i < marks.length - 1; i++) {
    const win = src.slice(Math.max(0, marks[i] - 500), marks[i + 1]);
    const prompts = [...win.matchAll(/prompt:\s*(['"])((?:(?!\1)[^\\]|\\.){40,}?)\1/g)].map(m => m[2]);
    prompts.forEach(p => addPrompt(topicKey, p, file));
  }
}
for (const f of fs.readdirSync(DATA_DIR)) {
  const m = /^lesson-(\d+)-(\d+)-.+\.js$/.exec(f);
  if (!m) continue;
  harvest(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'), `t${m[1]}-${m[2]}`, f);
}
for (const f of fs.readdirSync(FOUNDATIONS_DIR).filter(x => /^foundations-\d+.*-data\.js$/.test(x))) {
  const n = /^foundations-(\d+)/.exec(f)[1];
  harvest(fs.readFileSync(path.join(FOUNDATIONS_DIR, f), 'utf8'), `f${n}`, f);
}

// ── score every prompt against its own topic's answer-shaped units ──────────
const findings = [];
for (const [topicKey, prompts] of Object.entries(promptsByTopic)) {
  const chapter = chaptersByTopic[topicKey];
  if (!chapter || !chapter.units.length) continue;
  if (TARGET && !topicKey.startsWith(TARGET)) continue;

  const seen = new Set(); // a topic sometimes repeats a prompt verbatim across checkpoint variants
  for (const { prompt } of prompts) {
    if (seen.has(prompt)) continue;
    seen.add(prompt);
    let best = null;
    for (const unit of chapter.units) {
      const score = overlapScore(prompt, unit.text);
      if (score === null) continue;
      if (!best || score > best.score) best = { score, unit };
    }
    if (best && best.score >= MIN_SCORE) {
      findings.push({ topicKey, file: chapter.file, prompt, score: best.score, unit: best.unit });
    }
  }
}
findings.sort((a, b) => b.score - a.score);

const BOLD = '\x1b[1m', DIM = '\x1b[2m', RESET = '\x1b[0m', CYAN = '\x1b[36m';

if (COUNTS_ONLY) {
  const byTopic = new Map();
  findings.forEach(f => byTopic.set(f.topicKey, (byTopic.get(f.topicKey) || 0) + 1));
  console.log(`\n${BOLD}Checkpoint/eBook congruence, by topic (score >= ${MIN_SCORE})${RESET}\n`);
  [...byTopic.entries()].sort((a, b) => b[1] - a[1])
    .forEach(([topicKey, n]) => console.log(`  ${String(n).padStart(2)}  ${topicKey}`));
  console.log(`\n  ${findings.length} total across ${byTopic.size} topics.\n`);
  process.exit(0);
}

console.log(`\n${BOLD}Checkpoint / eBook congruence review${RESET}  ${DIM}${findings.length} to look at, score >= ${MIN_SCORE}${RESET}`);
console.log(`${DIM}Nothing here is a failure. Shared evidence is expected; a matched CONCLUSION is what to read for.${RESET}`);
console.log(`${DIM}See the header for FINE / REWORD / PROMOTE.${RESET}`);

const bands = [
  { lo: 65, label: 'closely matches — read first', },
  { lo: 50, label: 'shares the specific claim' },
  { lo: MIN_SCORE, label: 'shares mostly evidence' },
];

for (const band of bands) {
  const hits = findings.filter(f => f.score >= band.lo && (band.hi === undefined || f.score < band.hi));
  const upper = bands[bands.indexOf(band) - 1];
  const rangeHits = upper ? hits.filter(f => f.score < upper.lo) : hits;
  if (!rangeHits.length) continue;
  console.log(`\n${BOLD}${CYAN}── score >= ${band.lo}${RESET}  ${DIM}${rangeHits.length} hits, ${band.label}${RESET}`);
  for (const h of rangeHits) {
    console.log(`  ${DIM}${h.topicKey}  ${h.file}  score ${h.score}%${RESET}`);
    console.log(`    ${BOLD}prompt${RESET}  ${strip(h.prompt).replace(/\s+/g, ' ').slice(0, 150)}`);
    console.log(`    ${BOLD}card  ${RESET}  [${h.unit.kind}] ${h.unit.label}`);
  }
}

console.log(`\n${DIM}Report only. Exit 0 regardless, by design.${RESET}\n`);
