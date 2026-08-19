'use strict';
/**
 * Checks the exam against the constraints it was written to. Run before every build.
 * The length check is the one that earns its keep: a key that is reliably the longest
 * option is answerable without reading the chapter, which would make the exam measure
 * test-taking rather than history.
 */
const questions = require('./questions.js');
const stimuli   = require('./stimuli.js');

const LETTERS = ['A', 'B', 'C', 'D'];
const fails = [];
const warns = [];
const fail = (n, msg) => fails.push(`Q${n}: ${msg}`);
const warn = (n, msg) => warns.push(`Q${n}: ${msg}`);

if (questions.length !== 40) fails.push(`expected 40 questions, found ${questions.length}`);

const banned = [/\ball of the above\b/i, /\bnone of the above\b/i, /\bboth a and b\b/i];
const keyCounts = { A: 0, B: 0, C: 0, D: 0 };
const chapterCounts = {};
const partCounts = {};

questions.forEach((q, i) => {
  if (q.n !== i + 1) fail(q.n, `out of order, index ${i}`);
  if (!Array.isArray(q.options) || q.options.length !== 4) fail(q.n, 'must have exactly 4 options');
  if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) fail(q.n, 'answer must be 0-3');
  if (!q.why || q.why.length < 40) fail(q.n, 'missing or thin rationale');
  if (!q.source) fail(q.n, 'missing source citation');

  keyCounts[LETTERS[q.answer]]++;
  chapterCounts[q.ch] = (chapterCounts[q.ch] || 0) + 1;
  partCounts[q.part] = (partCounts[q.part] || 0) + 1;

  // Stimulus-based questions must point at a stimulus that exists.
  if (q.part === 'B' && !stimuli[q.stim]) fail(q.n, `stimulus ${q.stim} not found`);
  if (q.part !== 'B' && q.stim) fail(q.n, 'only Part B questions carry a stimulus');

  // No negatively worded stems. A student who misses one "NOT" loses a point for
  // reading speed rather than for history, which is the opposite of what this measures.
  if (/\b(NOT|EXCEPT|LEAST)\b/.test(q.stem)) fail(q.n, 'negatively worded stem');

  q.options.forEach((o, j) => {
    banned.forEach(re => { if (re.test(o)) fail(q.n, `option ${LETTERS[j]} uses a banned construction`); });
    if (/\s$/.test(o) || /^\s/.test(o)) fail(q.n, `option ${LETTERS[j]} has stray whitespace`);
  });

  const uniq = new Set(q.options.map(o => o.toLowerCase()));
  if (uniq.size !== 4) fail(q.n, 'duplicate options');

  // Length balance. Options within 25% of the longest, and the key must not be the
  // single longest option by a visible margin.
  const lens = q.options.map(o => o.length);
  const max = Math.max(...lens), min = Math.min(...lens);
  const spread = (max - min) / max;
  if (spread > 0.25) fail(q.n, `option length spread ${(spread * 100).toFixed(0)}% (max 25%) -> ${lens.join('/')}`);
  const keyLen = lens[q.answer];
  const others = lens.filter((_, j) => j !== q.answer);
  if (keyLen > Math.max(...others) + 8) warn(q.n, `key is longest by ${keyLen - Math.max(...others)} chars -> ${lens.join('/')}`);
});

// Keys should not clump. With 40 questions, 10 each is even; allow 7-13.
Object.entries(keyCounts).forEach(([l, c]) => {
  if (c < 7 || c > 13) fails.push(`answer key imbalance: ${l} used ${c} times (want 7-13)`);
});

// Never more than 3 of the same letter in a row.
let run = 1;
for (let i = 1; i < questions.length; i++) {
  run = questions[i].answer === questions[i - 1].answer ? run + 1 : 1;
  if (run > 3) fails.push(`Q${questions[i].n}: ${run} identical answer letters in a row`);
}

console.log('Questions:      ', questions.length);
console.log('By part:        ', JSON.stringify(partCounts));
console.log('By chapter:     ', JSON.stringify(chapterCounts));
console.log('Answer spread:  ', JSON.stringify(keyCounts));
console.log('');
warns.forEach(w => console.log('WARN  ' + w));
if (fails.length) {
  console.log('');
  fails.forEach(f => console.log('FAIL  ' + f));
  console.log(`\n${fails.length} failure(s).`);
  process.exit(1);
}
console.log(`OK. ${warns.length} warning(s), 0 failures.`);
