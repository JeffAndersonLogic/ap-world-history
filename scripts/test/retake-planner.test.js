#!/usr/bin/env node
'use strict';
// The Retake Planner engine (teacher/retake-planner-engine.js). Offline and in the
// push gate.
//
// What it proves, on invented questions and invented students only (a real test's
// questions are its answer key and never live in this public repository):
//   - both layouts Canvas might give (one row per student, one row per answer) read
//     to the same results, with Canvas's question order shuffled;
//   - questions are told apart by the answers students chose, even when every
//     question has the same wording;
//   - Canvas's score wins over the key when they disagree, and the count is reported;
//   - a blank answer counts as missed, a question a student never saw does not count;
//   - the latest attempt is the one used;
//   - "missed most" is never looser than "missed any";
//   - a broken map is refused with a reason, and an unknown file is not guessed at;
//   - negative controls show each check can fail.

const assert = require('assert');
const path = require('path');
const E = require(path.join(__dirname, '..', '..', 'teacher', 'retake-planner-engine.js'));

let failed = 0;
function ok(name, fn) {
  try { fn(); console.log(`  PASS  ${name}`); }
  catch (e) { failed += 1; console.log(`  FAIL  ${name}\n        ${String(e.message).split('\n').join('\n        ')}`); }
}

// Six invented questions on three targets. Every stem is the same on purpose.
function inventedMap(overrides) {
  const targets = { 'Z.1 LT1': 'I can explain one.', 'Z.1 LT2': 'I can explain two.', 'Z.2 LT1': 'I can compare three.' };
  const lts = Object.keys(targets);
  const questions = [];
  for (let n = 1; n <= 6; n += 1) {
    questions.push({ n, lt: lts[Math.floor((n - 1) / 2)], stem: 'The source best illustrates which development?',
      options: [1, 2, 3, 4].map(k => `Invented question ${n}, choice ${k}, a sentence long enough to read`), answer: (n + 1) % 4, points: 2 });
  }
  return Object.assign({ format: E.MAP_FORMAT, title: 'Invented', targets, questions }, overrides || {});
}
const MAP = E.parseMap(JSON.stringify(inventedMap())).map;
// who missed what: student index -> question numbers missed
const MISSES = { 0: [1], 1: [1, 2, 5], 2: [], 3: [3, 4, 6] };
const NAMES = ['Ann Invented', 'Ben Invented', 'Cat Invented', 'Dan Invented'];
const ORDER = [4, 1, 5, 0, 3, 2]; // Canvas shuffled the questions

function choiceFor(q, s) { return MISSES[s].includes(q.n) ? (q.answer + 1) % 4 : q.answer; }
function wide(opts) {
  const o = opts || {};
  const head = ['name', 'id', 'sis_id', 'section', 'section_id', 'section_sis_id', 'submitted', 'attempt'];
  ORDER.forEach(i => { head.push(`${500 + i}: <p>${MAP.questions[i].stem}</p>`); head.push('2.0'); });
  head.push('n correct', 'n incorrect', 'score');
  const rows = [head];
  NAMES.forEach((name, s) => {
    const r = [name, String(s + 1), '', s < 2 ? 'Green' : 'Silver', '', '', '2026-10-28', '1'];
    ORDER.forEach(i => {
      const q = MAP.questions[i];
      const c = choiceFor(q, s);
      r.push(q.options[c]);
      r.push(c === q.answer ? '2.0' : '0.0');
    });
    r.push('', '', '');
    rows.push(r);
  });
  if (o.mutate) o.mutate(rows);
  return rows.map(r => r.map(E.csvCell).join(',')).join('\n');
}
function long(opts) {
  const o = opts || {};
  const rows = [['Student Name', 'Student ID', 'Section', 'Attempt', 'Item Position', 'Item ID', 'Question Text', 'Answer', 'Points Received', 'Points Possible', 'Status']];
  NAMES.forEach((name, s) => ORDER.forEach((i, pos) => {
    const q = MAP.questions[i];
    const c = choiceFor(q, s);
    rows.push([name, String(s + 1), s < 2 ? 'Green' : 'Silver', '1', String(pos + 1), 'item-' + i, q.stem, q.options[c], c === q.answer ? '2' : '0', '2', 'Graded']);
  }));
  if (o.mutate) o.mutate(rows);
  return rows.map(r => r.map(E.csvCell).join(',')).join('\r\n');
}
function run(csv, options, map) {
  const m = map || MAP;
  const exp = E.readExport(csv);
  const matched = E.match(m, exp);
  return { exp, matched, a: E.analyze(m, exp, matched, options || {}) };
}
function summary(a) {
  return a.students.filter(s => s.took).map(s => `${s.name}:${s.earned}/${s.possible}:${s.targetsMissed.map(e => e.lt + '=' + e.questions.join('.')).join(',')}`).join(' | ');
}

const EXPECTED = 'Ann Invented:10/12:Z.1 LT1=1 | Ben Invented:6/12:Z.1 LT1=1.2,Z.2 LT1=5 | Cat Invented:12/12: | Dan Invented:6/12:Z.1 LT2=3.4,Z.2 LT1=6';

ok('CSV: quotes, doubled quotes, line breaks inside a cell, a byte-order mark', () => {
  const rows = E.parseCsv('﻿a,"b, c","say ""hi""","two\nlines"\r\n1,2,3,4\n');
  assert.deepStrictEqual(rows, [['a', 'b, c', 'say "hi"', 'two\nlines'], ['1', '2', '3', '4']]);
  assert.deepStrictEqual(E.parseCsv('x;y\n1;2'), [['x', 'y'], ['1', '2']], 'semicolon files from Excel');
});

ok('one row per student, Canvas order shuffled: every question placed by its answers', () => {
  const { exp, matched, a } = run(wide());
  assert.strictEqual(exp.layout, 'wide');
  assert.strictEqual(matched.pairs.length, 6);
  assert.strictEqual(matched.unmatchedQuestions.length, 0);
  matched.pairs.forEach(p => assert.ok(p.item.label.includes('source best illustrates'), 'the question wording is the label'));
  assert.strictEqual(summary(a), EXPECTED);
});

ok('one row per answer gives exactly the same results', () => {
  const { exp, a } = run(long());
  assert.strictEqual(exp.layout, 'long');
  assert.strictEqual(summary(a), EXPECTED);
});

ok('negative control: a different student\'s misses change the result', () => {
  const { a } = run(wide({ mutate: rows => { const q = MAP.questions[ORDER[0]]; rows[3][8] = q.options[(q.answer + 2) % 4]; rows[3][9] = '0.0'; } }));
  assert.notStrictEqual(summary(a), EXPECTED);
});

ok('a blank answer counts as missed; a question never shown does not count', () => {
  const { a } = run(long({ mutate: rows => {
    rows.forEach(r => {
      if (r[0] === 'Cat Invented' && r[5] === 'item-0') { r[7] = ''; r[8] = '0'; r[10] = 'No Answer'; }
      if (r[0] === 'Cat Invented' && r[5] === 'item-5') { r[7] = ''; r[8] = ''; r[10] = 'Not Attempted'; }
    });
  } }));
  const cat = a.students.find(s => s.name === 'Cat Invented');
  assert.strictEqual(cat.possible, 10, 'the unseen question leaves the denominator');
  assert.strictEqual(cat.earned, 8);
  assert.deepStrictEqual(cat.targetsMissed.map(e => e.lt), ['Z.1 LT1']);
  assert.strictEqual(cat.results.find(r => r.q.n === 1).status, 'blank');
});

ok('Canvas\'s score wins over the key, and the disagreement is reported', () => {
  // Canvas gave Ann full marks on question 1 (a regrade), though she chose a wrong choice.
  const col = 8 + ORDER.indexOf(0) * 2 + 1;
  const { a } = run(wide({ mutate: rows => { rows[1][col] = '2.0'; } }));
  const ann = a.students.find(s => s.name === 'Ann Invented');
  assert.strictEqual(ann.earned, 12);
  assert.strictEqual(ann.targetsMissed.length, 0);
  assert.ok(a.notes.some(n => /scored differently by Canvas than by the key/.test(n)), a.notes.join(' / '));
});

ok('with no score columns, the key decides', () => {
  const { a } = run(wide({ mutate: rows => rows.forEach(r => { for (let c = 9; c < 8 + 12; c += 2) r[c] = ''; }) }));
  assert.strictEqual(summary(a), EXPECTED);
});

ok('the latest attempt is used', () => {
  const { exp, a } = run(wide({ mutate: rows => {
    const retry = rows[2].slice(); // Ben again, attempt 2, everything right
    retry[7] = '2';
    ORDER.forEach((i, k) => { retry[8 + k * 2] = MAP.questions[i].options[MAP.questions[i].answer]; retry[9 + k * 2] = '2.0'; });
    rows.splice(1, 0, retry); // earlier in the file than attempt 1
  } }));
  assert.ok(exp.notes.some(n => /latest attempt/.test(n)));
  assert.strictEqual(a.students.find(s => s.name === 'Ben Invented').earned, 12);
});

ok('"missed most" never lists more than "missed any", and differs when it should', () => {
  const any = run(wide(), { rule: 'any' }).a;
  const most = run(wide(), { rule: 'most' }).a;
  const count = x => x.students.reduce((t, s) => t + s.targetsMissed.length, 0);
  assert.ok(count(most) <= count(any));
  // Dan missed both Z.1 LT2 questions (kept) and one of two Z.2 LT1 (dropped: half is not most).
  assert.deepStrictEqual(most.students.find(s => s.name === 'Dan Invented').targetsMissed.map(e => e.lt), ['Z.1 LT2']);
});

ok('a class filter keeps only that class', () => {
  const { a } = run(wide(), { section: 'Silver' });
  assert.deepStrictEqual(a.students.map(s => s.name), ['Cat Invented', 'Dan Invented']);
});

ok('the plan text and CSV carry every student, and projector safe carries no name', () => {
  const { a } = run(wide());
  const text = E.planText(a, {});
  NAMES.forEach(n => assert.ok(text.includes(n), n));
  assert.ok(/Cat Invented.*\n  Nothing to retake/.test(text));
  const anon = E.planText(a, { anon: true }) + E.planCsv(a, { anon: true });
  NAMES.forEach(n => assert.ok(!anon.includes(n), n + ' leaked'));
  assert.ok(anon.includes('Student 4'));
  const rows = E.parseCsv(E.planCsv(a, {}));
  assert.strictEqual(rows.length, 1 + 1 + 2 + 1 + 2, 'one row per student per target, one for a student with none');
});

ok('per question: percent correct and the most-chosen wrong answer', () => {
  const { a } = run(wide());
  const q1 = a.questions.find(x => x.q.n === 1);
  assert.strictEqual(q1.correct, 2);
  assert.strictEqual(q1.answered, 4);
  assert.strictEqual(q1.topWrong.count, 2);
  assert.strictEqual(q1.topWrong.choice, (MAP.questions[0].answer + 1) % 4);
});

ok('a broken map is refused with a reason', () => {
  assert.ok(/not a Retake Planner question map/.test(E.parseMap('{"hello":1}').problems[0]));
  assert.ok(/could not be read as JSON/.test(E.parseMap('name,id\n1,2').problems[0]));
  const bad = inventedMap();
  bad.questions[2].answer = 9;
  assert.ok(E.parseMap(JSON.stringify(bad)).problems.some(p => /Question 3 has no valid correct answer/.test(p)));
  const letter = inventedMap();
  letter.questions[0].answer = 'C';
  assert.strictEqual(E.parseMap(JSON.stringify(letter)).map.questions[0].answer, 2, 'a letter answer is read');
});

ok('a Canvas file from a different test matches nothing', () => {
  const other = inventedMap();
  other.questions.forEach(q => { q.options = q.options.map(o => o.replace('Invented', 'Unrelated')); q.stem = 'Something else entirely, question ' + q.n; });
  const { matched } = run(wide(), {}, E.parseMap(JSON.stringify(other)).map);
  assert.strictEqual(matched.pairs.length, 0);
});

ok('a file with no student column is not guessed at', () => {
  const exp = E.readExport('colour,size\nred,2\nblue,3');
  assert.strictEqual(exp.layout, 'unknown');
  assert.ok(/No student column/.test(exp.notes[0]));
});

ok('per-question columns named "... - Response" and "... - Points" are read too', () => {
  const head = ['Student Name', 'Student ID'];
  ORDER.forEach(i => { head.push(`Item ${i}: ${MAP.questions[i].stem} - Response`, `Item ${i}: ${MAP.questions[i].stem} - Points`); });
  const rows = [head];
  NAMES.forEach((name, s) => {
    const r = [name, String(s + 1)];
    ORDER.forEach(i => { const q = MAP.questions[i]; const c = choiceFor(q, s); r.push(q.options[c], c === q.answer ? '2' : '0'); });
    rows.push(r);
  });
  const { matched, a } = run(rows.map(r => r.map(E.csvCell).join(',')).join('\n'));
  assert.strictEqual(matched.pairs.length, 6);
  assert.strictEqual(summary(a), EXPECTED);
});

console.log(failed ? `\n${failed} failed` : '\nAll checks passed.');
process.exit(failed ? 1 : 0);
