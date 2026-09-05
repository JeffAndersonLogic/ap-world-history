#!/usr/bin/env node
/*
 * Build the Run of Show teacher-cockpit view for the topics that have
 * authored one. A teacher tool, like teacher/skills-lens.html: never linked
 * from a student page, but a permanent surface with its own validate.js
 * reachability check and a place in the offline suite (see
 * scripts/test/readings-reproducible.test.js). See scripts/lib/run-of-show-page.js
 * for why the content lives in each topic's lesson data file rather than here.
 *
 * TOPICS below is the one declared list, the same shape as VOLUMES in
 * build-ebook.js and DECKS in build-student-decks.js: which topics have a
 * Run of Show is an editorial fact, not something to discover by globbing
 * every lesson data file for a runOfShow key that most don't have yet.
 * Coverage grows the same way the eBook's does, one authored topic at a
 * time, not all 71 at once.
 *
 * Exports TOPICS before running, and guards the run with
 * `if (require.main !== module) return`, the same reason build-ebook.js
 * does: validate.js requires this file purely to read the list, and a
 * require that silently rebuilt the thing being validated could never fail.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { renderRunOfShow, renderRunOfShowIndex } = require('./lib/run-of-show-page');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

const TOPICS = [
  { dataFile: 'lesson-1-4-americas.js', lessonFile: 'lesson-1-4-americas.html', unitDir: 'unit-1', out: 'run-of-show-topic-1-4.html' },
  { dataFile: 'lesson-1-5-africa.js', lessonFile: 'lesson-1-5-africa.html', unitDir: 'unit-1', out: 'run-of-show-topic-1-5.html' },
  { dataFile: 'lesson-1-6-europe.js', lessonFile: 'lesson-1-6-europe.html', unitDir: 'unit-1', out: 'run-of-show-topic-1-6.html' },
];

const INDEX_OUT = 'run-of-show-index.html';
module.exports = { TOPICS, INDEX_OUT };
if (require.main !== module) return;

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
const indexEntries = [];
for (const topic of TOPICS) {
  const L = loadLesson(topic.dataFile);
  L.__lessonFile = topic.lessonFile;
  indexEntries.push({
    topic: L.meta.topic, title: L.meta.title, unit: L.meta.unit,
    question: L.runOfShow.question, totalMinutes: L.runOfShow.totalMinutes, out: topic.out,
  });
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

// The index: the one stable URL a teacher bookmarks instead of one per
// topic. See renderRunOfShowIndex for why it carries no placeholder rows for
// topics that don't have a Run of Show yet.
const indexPath = path.join(ROOT, 'teacher', INDEX_OUT);
const indexHtml = renderRunOfShowIndex(indexEntries);
if (CHECK) {
  const existing = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : null;
  if (existing !== indexHtml) {
    console.error(`DRIFT: teacher/${INDEX_OUT} does not match TOPICS. Run: node scripts/build-run-of-show.js`);
    drift = true;
  } else {
    console.log(`OK: teacher/${INDEX_OUT}`);
  }
} else {
  fs.writeFileSync(indexPath, indexHtml);
  console.log(`Wrote teacher/${INDEX_OUT}`);
}

if (CHECK && drift) process.exit(1);
