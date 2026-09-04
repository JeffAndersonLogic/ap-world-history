#!/usr/bin/env node
/*
 * Build the Run of Show teacher-cockpit prototype for the topics that have
 * authored one. PROTOTYPE ONLY: not linked from any student page, not part
 * of validate.js or any npm test. See scripts/lib/run-of-show-page.js for
 * why the content lives in each topic's lesson data file rather than here.
 *
 * TOPICS below is the one declared list, the same shape as VOLUMES in
 * build-ebook.js and DECKS in build-student-decks.js: which topics have a
 * Run of Show is an editorial fact, not something to discover by globbing
 * every lesson data file for a runOfShow key that most don't have yet.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { renderRunOfShow } = require('./lib/run-of-show-page');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

const TOPICS = [
  { dataFile: 'lesson-1-4-americas.js', lessonFile: 'lesson-1-4-americas.html', unitDir: 'unit-1', out: 'run-of-show-topic-1-4.html' },
  { dataFile: 'lesson-1-5-africa.js', lessonFile: 'lesson-1-5-africa.html', unitDir: 'unit-1', out: 'run-of-show-topic-1-5.html' },
];

function sandbox() {
  return {
    window: {},
    console: { log() {}, warn() {}, error() {} },
  };
}

function loadLesson(dataFile) {
  const file = path.join(ROOT, 'assets', 'data', dataFile);
  const box = sandbox();
  const ctx = vm.createContext(box);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: dataFile });
  const L = box.window.BEHISTORICAL_LESSON;
  if (!L) throw new Error(`${dataFile}: did not set window.BEHISTORICAL_LESSON`);
  if (!L.runOfShow) throw new Error(`${dataFile}: has no runOfShow block`);
  return L;
}

let drift = false;
for (const topic of TOPICS) {
  const L = loadLesson(topic.dataFile);
  L.__lessonFile = topic.lessonFile;
  const html = renderRunOfShow(L, { unitDir: topic.unitDir });
  const outPath = path.join(ROOT, 'teacher', topic.out);
  if (CHECK) {
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : null;
    if (existing !== html) {
      console.error(`DRIFT: teacher/${topic.out} does not match ${topic.dataFile}'s runOfShow block. Run: node scripts/build-run-of-show.js`);
      drift = true;
    } else {
      console.log(`OK: teacher/${topic.out}`);
    }
  } else {
    fs.writeFileSync(outPath, html);
    console.log(`Wrote teacher/${topic.out}`);
  }
}

if (CHECK && drift) process.exit(1);
