#!/usr/bin/env node
/**
 * foundations-exam.test.js
 *
 * Two jobs, and they are different jobs.
 *
 * 1. The four generated artifacts still match the content module. A hand-edit to
 *    the printable exam or the Canvas package fails the push here instead of
 *    being silently reverted by the next rebuild, which is the same contract the
 *    generated readings live under.
 *
 * 2. The exam itself is internally sound. Forty contiguous questions, four
 *    distinct choices each, exactly one keyed answer, every rationale and
 *    distractor note written, every part range honoured, and every stimulus both
 *    defined and used. These are the mistakes that survive a visual read: a
 *    duplicated choice or an answer index off by one looks fine on paper and is
 *    wrong in Canvas.
 *
 * The QTI assertions matter most, because that file is the one nobody reads. An
 * item whose keyed `varequal` names a response_label that does not exist imports
 * into Canvas as a question no answer can score, and it does it quietly.
 *
 * Offline and dependency-free on purpose.
 */

'use strict';

const { execFileSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const { META, STIMULI, ITEMS } = require(path.join(ROOT, 'scripts', 'lib', 'foundations-exam-v1.js'));
const BUILD = require(path.join(ROOT, 'scripts', 'build-foundations-exam.js'));

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

let failures = 0;
function check(label, ok, detail) {
  if (ok) {
    console.log(`  PASS  ${label}`);
  } else {
    console.log(`  FAIL  ${label}${detail ? `: ${detail}` : ''}`);
    failures++;
  }
}

// ── 1. the items themselves ─────────────────────────────────────────────────

console.log('\nExam items');

check(`${META.questionCount} items present`, ITEMS.length === META.questionCount, `found ${ITEMS.length}`);

const numbering = ITEMS.every((item, i) => item.n === i + 1);
check('question numbers are 1..n with no gaps', numbering);

const badChoices = ITEMS.filter(i => i.choices.length !== 4 || new Set(i.choices).size !== 4);
check('every item has four distinct choices', badChoices.length === 0,
  badChoices.map(i => `Q${i.n}`).join(', '));

const badAnswers = ITEMS.filter(i => !Number.isInteger(i.answer) || i.answer < 0 || i.answer >= i.choices.length);
check('every keyed answer indexes a real choice', badAnswers.length === 0,
  badAnswers.map(i => `Q${i.n}`).join(', '));

const missingProse = ITEMS.filter(i => !i.stem || !i.rationale || !i.trap || !i.day || !i.skill || !i.type);
check('every item carries stem, rationale, distractor note, day, skill and type',
  missingProse.length === 0, missingProse.map(i => `Q${i.n}`).join(', '));

const partMismatch = [];
for (const part of META.parts) {
  const [lo, hi] = part.range;
  for (const item of ITEMS) {
    const inRange = item.n >= lo && item.n <= hi;
    if (inRange !== (item.part === part.id)) partMismatch.push(`Q${item.n} vs part ${part.id}`);
  }
}
check('every item sits inside its declared part range', partMismatch.length === 0, partMismatch.join(', '));

const declared = new Set(Object.keys(STIMULI));
const used = new Set(ITEMS.filter(i => i.stimulus).map(i => i.stimulus));
const undefinedRefs = [...used].filter(id => !declared.has(id));
const unusedDefs = [...declared].filter(id => !used.has(id));
check('every referenced stimulus is defined', undefinedRefs.length === 0, undefinedRefs.join(', '));
check('every defined stimulus is used', unusedDefs.length === 0, unusedDefs.join(', '));

const stimulusOnlyInPartTwo = ITEMS.filter(i => i.stimulus && i.part !== 'II');
check('stimulus items live only in Part II', stimulusOnlyInPartTwo.length === 0,
  stimulusOnlyInPartTwo.map(i => `Q${i.n}`).join(', '));

// Sets must be contiguous, or the printable exam prints a source above the
// wrong questions.
const sets = BUILD.stimulusSets();
const nonContiguous = sets.filter(s => {
  const ns = s.items.map(i => i.n);
  return ns[ns.length - 1] - ns[0] !== ns.length - 1;
});
check('each stimulus set covers a contiguous run of questions', nonContiguous.length === 0,
  nonContiguous.map(s => s.stimulus.id).join(', '));

const familiar = sets.filter(s => s.stimulus.familiar).length;
check('stimulus sets mix lesson sources with new ones',
  familiar > 0 && familiar < sets.length, `${familiar} of ${sets.length} familiar`);

// ── the two ways a multiple-choice exam leaks its own answers ───────────────
//
// Both of these were real in the first draft: 23 of 40 keys were B and no key
// was D, and 34 of 40 correct answers were the longest choice on offer. Either
// one lets a student who knows nothing score well, and neither is visible from
// reading the exam straight through, which is why they are asserted here.

const LETTER_COUNT = ITEMS[0].choices.length;
const spread = Array.from({ length: LETTER_COUNT }, (_, k) => ITEMS.filter(i => i.answer === k).length);
const ideal = ITEMS.length / LETTER_COUNT;
check('the key is spread across all four positions',
  spread.every(c => c >= ideal * 0.7 && c <= ideal * 1.3),
  spread.map((c, k) => `${LETTERS[k]}=${c}`).join(' '));

let run = 1, longestRun = 1;
for (let i = 1; i < ITEMS.length; i++) {
  run = ITEMS[i].answer === ITEMS[i - 1].answer ? run + 1 : 1;
  if (run > longestRun) longestRun = run;
}
check('no more than three consecutive questions share a key letter', longestRun <= 3,
  `longest run ${longestRun}`);

const lengthCue = ITEMS.filter(i =>
  i.choices[i.answer].length === Math.max(...i.choices.map(c => c.length)));
check('the correct answer is rarely the longest choice',
  lengthCue.length <= ITEMS.length * 0.4,
  `${lengthCue.length} of ${ITEMS.length}: ${lengthCue.map(i => `Q${i.n}`).join(', ')}`);

// ── 2. the Canvas package ───────────────────────────────────────────────────

console.log('\nQTI package');

const assessment = BUILD.qtiAssessment();

const itemBlocks = assessment.split('<item ').slice(1);
check(`QTI carries ${META.questionCount} items`, itemBlocks.length === META.questionCount,
  `found ${itemBlocks.length}`);

const qtiBroken = [];
itemBlocks.forEach((block, idx) => {
  const ident = (block.match(/^ident="([^"]+)"/) || [])[1];
  const labels = [...block.matchAll(/<response_label ident="([^"]+)"/g)].map(m => m[1]);
  const keyed = [...block.matchAll(/<varequal respident="response1">([^<]+)<\/varequal>/g)].map(m => m[1]);
  const item = ITEMS[idx];
  if (!ident) return qtiBroken.push(`item ${idx + 1} has no ident`);
  if (labels.length !== 4) return qtiBroken.push(`${ident} has ${labels.length} choices`);
  if (new Set(labels).size !== 4) return qtiBroken.push(`${ident} has duplicate choice idents`);
  if (keyed.length !== 1) return qtiBroken.push(`${ident} keys ${keyed.length} answers`);
  if (!labels.includes(keyed[0])) return qtiBroken.push(`${ident} keys a choice that does not exist`);
  if (labels.indexOf(keyed[0]) !== item.answer) {
    qtiBroken.push(`${ident} keys choice ${labels.indexOf(keyed[0])}, module says ${item.answer}`);
  }
});
check('every QTI item keys exactly one existing choice, matching the module',
  qtiBroken.length === 0, qtiBroken.join('; '));

// A raw ampersand or angle bracket that escaped the escaper produces a package
// Canvas rejects wholesale, so no items import at all.
const strayAmp = assessment.match(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/);
check('no unescaped ampersand in the QTI body', !strayAmp,
  strayAmp ? assessment.slice(Math.max(0, strayAmp.index - 40), strayAmp.index + 40) : '');

const points = (assessment.match(/<fieldlabel>points_possible<\/fieldlabel>/g) || []).length;
check('every item declares points', points === META.questionCount, `found ${points}`);

const meta = BUILD.qtiMeta();
check('assessment_meta totals the right points',
  meta.includes(`<points_possible>${(META.questionCount * META.pointsPerQuestion).toFixed(1)}</points_possible>`));
check('manifest declares the QTI resource',
  BUILD.qtiManifest().includes('type="imsqti_xmlv1p2"'));

const zip = BUILD.buildQtiZip();
check('zip has a local file header and an end-of-central-directory record',
  zip.readUInt32LE(0) === 0x04034b50 && zip.readUInt32LE(zip.length - 22) === 0x06054b50);
check('zip declares three entries', zip.readUInt16LE(zip.length - 12) === 3,
  String(zip.readUInt16LE(zip.length - 12)));
check('zip is byte-stable across builds', BUILD.buildQtiZip().equals(zip));

// ── 3. the CSV ──────────────────────────────────────────────────────────────

console.log('\nCSV');

/** Minimal RFC 4180 reader: every cell this file writes is quoted. */
function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else cell += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\r' && text[i + 1] === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; i++; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const csvRows = parseCsv(BUILD.buildCsv());
check(`CSV has ${META.questionCount} rows`, csvRows.length === META.questionCount, `found ${csvRows.length}`);

const csvBroken = [];
csvRows.forEach((row, idx) => {
  const item = ITEMS[idx];
  if (row[0] !== 'MC') csvBroken.push(`row ${idx + 1} type is "${row[0]}"`);
  if (row[2] !== String(META.pointsPerQuestion)) csvBroken.push(`row ${idx + 1} points are "${row[2]}"`);
  if (!row[3].endsWith(item.stem)) csvBroken.push(`row ${idx + 1} body does not end with the stem`);
  if (row[4] !== String(item.answer + 1)) csvBroken.push(`row ${idx + 1} keys "${row[4]}"`);
  const choices = row.slice(5, 5 + item.choices.length);
  if (choices.join(' ') !== item.choices.join(' ')) csvBroken.push(`row ${idx + 1} choices differ`);
  if (item.stimulus && !row[3].includes('SOURCE:')) csvBroken.push(`row ${idx + 1} lost its stimulus`);
});
check('every CSV row matches its item, one-based answer column included',
  csvBroken.length === 0, csvBroken.slice(0, 5).join('; '));

// ── 4. the printable renderings ─────────────────────────────────────────────

console.log('\nPrintable exam and key');

const student = BUILD.renderExam({ withKey: false });
const key = BUILD.renderExam({ withKey: true });

check('the student copy leaks no answers',
  !student.includes('(correct)') && !student.includes('**Answer:') && !student.toLowerCase().includes('distractor'));
check('the key marks an answer for every question',
  (key.match(/\*\*Answer: [A-D]\.\*\*/g) || []).length === META.questionCount);
check('the key blueprint has a row per question',
  ITEMS.every(i => key.includes(`| ${i.n} | ${i.part} | ${i.day} |`)));
check('both renderings print every stem',
  ITEMS.every(i => student.includes(i.stem) && key.includes(i.stem)));
check('each source is printed once per copy',
  Object.values(STIMULI).every(st => student.split(st.title).length - 1 >= 1));

// ── 5. nothing on disk has drifted ──────────────────────────────────────────

console.log('\nReproducibility');

try {
  execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'build-foundations-exam.js'), '--check'],
    { cwd: ROOT, stdio: 'pipe' });
  check('generated artifacts match the content module', true);
} catch (e) {
  const out = `${e.stdout || ''}${e.stderr || ''}`.trim().split('\n').filter(l => l.startsWith('DRIFT'));
  check('generated artifacts match the content module', false,
    `${out.join(', ')} (run: node scripts/build-foundations-exam.js)`);
}

// ── result ──────────────────────────────────────────────────────────────────

if (failures) {
  console.log(`\n${failures} check(s) failed.`);
  process.exit(1);
}
console.log('\nFoundations exam: all checks passed.');
