#!/usr/bin/env node
/*
 * Build the Class Presentation for each topic that has one declared: the
 * projector surface for Content Delivery, and the same URL a student reopens
 * to review. See scripts/lib/presentation-page.js for why one file serves
 * both and why it can never carry presenter notes.
 *
 * TOPICS below is the one declared list, the same shape as VOLUMES in
 * build-ebook.js, DECKS in build-student-decks.js and TOPICS in
 * build-run-of-show.js. Which topics have a presentation is an editorial
 * fact, not something to discover by globbing every lesson data file for a
 * lecture.segments array, which all 71 have.
 *
 * Exports TOPICS before running and guards the run with
 * `if (require.main !== module) return`, the same reason build-ebook.js and
 * build-run-of-show.js do: validate.js requires this file purely to read the
 * list, and a require that silently rebuilt the thing being validated could
 * never fail.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { renderPresentation } = require('./lib/presentation-page');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

const TOPICS = [
  {
    dataFile: 'lesson-2-3-indian-ocean.js',
    lessonFile: 'lesson-2-3-indian-ocean.html',
    unitDir: 'unit-2',
    out: 'present-topic-2-3-indian-ocean.html'
  },
];

module.exports = { TOPICS };
if (require.main !== module) return;

/* The data files touch `document` at load to inject a stylesheet link, so the
 * sandbox needs enough of one to get through it. Nothing here reads the DOM
 * back; only window.BEHISTORICAL_LESSON is used. */
function loadLesson(dataFile) {
  const file = path.join(ROOT, 'assets', 'data', dataFile);
  const box = {
    window: {},
    document: {
      querySelector: () => null,
      createElement: () => ({ setAttribute() {}, style: {} }),
      head: { appendChild() {} }
    },
    console: { log() {}, warn() {}, error() {} }
  };
  vm.createContext(box);
  vm.runInContext(fs.readFileSync(file, 'utf8'), box, { filename: dataFile });
  const L = box.window.BEHISTORICAL_LESSON;
  if (!L) throw new Error(`${dataFile}: did not set window.BEHISTORICAL_LESSON`);

  if (!((L.lecture && L.lecture.slides) || []).length) {
    throw new Error(`${dataFile}: has no lecture.slides, so there is nothing to project. Slide text is authored, never derived from lecture.segments.`);
  }
  return L;
}

let drift = false;
for (const topic of TOPICS) {
  const L = loadLesson(topic.dataFile);
  const html = renderPresentation(L, { lessonFile: topic.lessonFile });
  const outPath = path.join(ROOT, topic.unitDir, topic.out);
  const rel = `${topic.unitDir}/${topic.out}`;
  if (CHECK) {
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : null;
    if (existing !== html) {
      console.error(`DRIFT: ${rel} does not match ${topic.dataFile}'s lecture segments. Run: node scripts/build-presentations.js`);
      drift = true;
    } else {
      console.log(`OK: ${rel}`);
    }
  } else {
    fs.writeFileSync(outPath, html);
    console.log(`Wrote ${rel}`);
  }
}

if (CHECK && drift) process.exit(1);
if (CHECK) console.log(`Class Presentations: ${TOPICS.length} up to date.`);
