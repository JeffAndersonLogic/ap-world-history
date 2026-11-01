#!/usr/bin/env node
'use strict';
// No exam, quiz or answer key is ever committed to this repository. Offline and
// in the push gate.
//
// Everything in this repository is published: GitHub Pages serves every
// tracked file at behistorical.com, linked or not, and the repository itself
// is public. On 2026-10-18 the Era 2 exam's Canvas package and its readable QTI
// source, all 50 questions with their scoring keys, were committed under
// assessments/era-2/. The next day Jeff set the rule that anything holding
// answers lives only in the private AndersonLogic-OS repository, and nobody
// went back for the Era 2 files. They were downloadable at
// behistorical.com/assessments/era-2/ until 2026-10-30. A rule that depends on
// someone remembering it held for one day, so this makes it structural.
//
// Assessments belong in AndersonLogic-OS, 04_PRODUCTS/BeHistorical/Assessments/.
// Study guides are student material and stay here.

const assert = require('assert');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

// What a student may see, by design, though its name says "exam".
const ALLOWED = [/^study-guides\/era-\d+-exam-study-guide\.html$/];

// Archives can hold anything, and a Canvas export is one.
const ARCHIVE = /\.(zip|imscc|7z|rar)$/i;

// Words in a file or folder name that mark an assessment or its key.
const NAME_WORDS = new Set(['quiz', 'quizzes', 'exam', 'exams', 'qti', 'imsmanifest', 'answerkey', 'teacherkey']);
const KEY_PREFIX = new Set(['answer', 'answers', 'teacher', 'scoring', 'grading']);

// Markers inside a file that only a quiz export carries. Written in two parts
// so this file does not match itself.
const CONTENT_MARKERS = [
  '<' + 'questestinterop',                    // QTI 1.2, the Canvas classic quiz export
  '<' + 'varequal',                           // QTI 1.2, the correct choice
  '<' + 'assessmentItem',                     // QTI 2.x item
  '<' + 'correctResponse',                    // QTI 2.x, the correct choice
  'canvas.instructure.com/xsd/' + 'cccv1p0'   // Canvas quiz settings (assessment_meta.xml)
];

const BINARY = /\.(jpe?g|png|gif|webp|avif|ico|pdf|woff2?|ttf|otf|mp3|mp4|m4a|wav)$/i;

function nameProblem(file) {
  if (ALLOWED.some((re) => re.test(file))) return null;
  if (ARCHIVE.test(file)) return 'an archive file';
  if (file.startsWith('scripts/')) return null; // code, named for what it builds
  const words = file.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  for (let i = 0; i < words.length; i += 1) {
    if (NAME_WORDS.has(words[i])) return `"${words[i]}" in its name`;
    if (KEY_PREFIX.has(words[i]) && words[i + 1] === 'key') return `"${words[i]} key" in its name`;
  }
  return null;
}

function contentProblem(text) {
  const hit = CONTENT_MARKERS.find((m) => text.includes(m));
  return hit ? `quiz export markup (${hit})` : null;
}

function trackedFiles() {
  return execFileSync('git', ['ls-files', '-z'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    .split('\0').filter(Boolean);
}

let failed = 0;
function ok(name, fn) {
  try { fn(); console.log(`  PASS  ${name}`); }
  catch (e) { failed += 1; console.log(`  FAIL  ${name}\n        ${e.message.split('\n').join('\n        ')}`); }
}

ok('negative control: every name the Era 2 and Unit 3 assessments used is caught', () => {
  for (const file of [
    'assessments/era-2/BeHistorical_Era_2_Exam_V2_1_Canvas_QTI.zip',
    'assessments/era-2/qti/imsmanifest.xml',
    'assessments/era-2/qti/behistorical_era2_v2/behistorical_era2_v2.xml',
    'Assessments/Unit-3/Version-3-1/BeHistorical_Unit_3_Quiz_V3_1_Teacher_Key.html',
    'Assessments/Unit-3/Version-3-1/BeHistorical_Unit_3_Quiz_V3_1_Student.html',
    'teacher/unit-4-answer-key.pdf',
    'docs/era3_exam.md'
  ]) {
    assert.ok(nameProblem(file), `not caught: ${file}`);
  }
});

ok('negative control: the Era 2 exam\'s own markup is caught by content alone', () => {
  // Lines as they stood in the committed QTI file, under a harmless name. Split
  // like the markers, or the scan below finds them in this file.
  const qti12 = '<' + 'questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2">\n'
    + '  <' + 'varequal respident="response_q01">q01_c2</varequal>';
  assert.ok(contentProblem(qti12), 'QTI 1.2 not caught');
  assert.ok(contentProblem('<' + 'assessmentItem identifier="q1"><responseDeclaration>'), 'QTI 2.x item not caught');
  assert.ok(contentProblem('<' + 'correctResponse><value>B</value>'), 'QTI 2.x answer not caught');
  assert.ok(contentProblem('<quiz xmlns="http://canvas.instructure.com/xsd/' + 'cccv1p0">'), 'Canvas quiz settings not caught');
  assert.strictEqual(nameProblem('unit-2/notes.xml'), null, 'the harmless name should not be what catches it');
});

ok('the student study guides and look-alike names pass', () => {
  for (const file of [
    'study-guides/era-2-exam-study-guide.html',
    'study-guides/era-3-exam-study-guide.html',
    'assets/images/commons/song-imperial-examination-c3124e.jpg',
    'assets/images/commons/palastexamen-songdynastie-d17b56.jpg',
    'assets/data/key-concepts.js',
    'scripts/test/fixtures/canvas-check-answers.txt'
  ]) assert.strictEqual(nameProblem(file), null, `wrongly caught: ${file}`);
});

ok('no exam, quiz or answer key is committed', () => {
  const offenders = [];
  for (const file of trackedFiles()) {
    let why = nameProblem(file);
    if (!why && !BINARY.test(file)) {
      const full = path.join(ROOT, file);
      if (fs.existsSync(full) && fs.statSync(full).isFile()) why = contentProblem(fs.readFileSync(full, 'utf8'));
    }
    if (why) offenders.push(`${file}  (${why})`);
  }
  assert.strictEqual(offenders.length, 0,
    `${offenders.length} file(s) look like an assessment. Everything here is public on behistorical.com.\n`
    + 'Move it to AndersonLogic-OS, 04_PRODUCTS/BeHistorical/Assessments/, and remove it here:\n'
    + offenders.join('\n'));
});

console.log(failed ? `\n${failed} failed` : '\nAll checks passed.');
process.exit(failed ? 1 : 0);
