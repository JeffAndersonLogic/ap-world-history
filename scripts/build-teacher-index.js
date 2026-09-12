#!/usr/bin/env node
/*
 * Build the teacher command center: one page linking every teacher-only
 * tool BeHistorical has, plus a Today panel that surfaces the best available
 * teacher surface for whatever topic is being taught right now.
 *
 *   node scripts/build-teacher-index.js            write teacher/index.html
 *   node scripts/build-teacher-index.js --check    fail on drift, write nothing
 *
 * TOOLS and INTERACTIVE_TOPICS are declared editorial lists, the same shape
 * as VOLUMES in build-ebook.js. The Today panel reads the schedule live in
 * the browser and prefers an integrated Interactive Lesson when a topic has
 * one; otherwise it falls back to that topic's Run of Show when available.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { renderTeacherIndex } = require('./lib/teacher-index-page');
const { TOPICS: ROS_TOPICS, INDEX_OUT: ROS_INDEX_OUT } = require('./build-run-of-show.js');
const { COHORTS } = require('./lib/cohorts.js');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

const TOOLS = [
  { label: 'Run of Show', desc: 'A minute-by-minute pacing cockpit for a class period: retrieval prompts, teacher moves, a class timer, and a Must-Haves reference.', href: ROS_INDEX_OUT },
  { label: 'Topic 1.7 Interactive Lesson', desc: 'The Unit 1 synthesis pilot: Teacher Command Center + integrated Presentation Mode for comparison and argumentation.', href: 'command-center-topic-1-7.html' },
  { label: 'Skills Lens', desc: 'Drop a Canvas submissions zip to see completion, response quality, and AP skill trends across the year.', href: 'skills-lens.html' },
];

const INTERACTIVE_TOPICS = [
  { key: '1.7', out: 'command-center-topic-1-7.html' },
];

module.exports = { TOOLS, INTERACTIVE_TOPICS };
if (require.main !== module) return;

function sandbox() {
  return { window: {}, console: { log() {}, warn() {}, error() {} } };
}
function loadLesson(dataFile) {
  const file = path.join(ROOT, 'assets', 'data', dataFile);
  const box = sandbox();
  vm.runInContext(fs.readFileSync(file, 'utf8'), vm.createContext(box), { filename: dataFile });
  return box.window.BEHISTORICAL_LESSON;
}

const rosTopics = ROS_TOPICS.map(topic => {
  const L = loadLesson(topic.dataFile);
  const key = (L.meta.topic || '').replace(/^Topic\s+/i, '').trim();
  return { key, out: topic.out };
});

const outPath = path.join(ROOT, 'teacher', 'index.html');
const html = renderTeacherIndex(TOOLS, rosTopics, COHORTS, INTERACTIVE_TOPICS);
if (CHECK) {
  const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : null;
  if (existing !== html) {
    console.error('DRIFT: teacher/index.html does not match declared teacher tools/topic surfaces. Run: node scripts/build-teacher-index.js');
    process.exit(1);
  }
  console.log('OK: teacher/index.html');
} else {
  fs.writeFileSync(outPath, html);
  console.log('Wrote teacher/index.html');
}
