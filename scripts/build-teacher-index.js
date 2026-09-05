#!/usr/bin/env node
/*
 * Build the teacher command center: one page linking every teacher-only
 * tool BeHistorical has (Run of Show, Skills Lens), plus a Today panel
 * that surfaces the Run of Show for whatever topic is being taught right
 * now, when one exists.
 *
 *   node scripts/build-teacher-index.js            write teacher/index.html
 *   node scripts/build-teacher-index.js --check    fail on drift, write nothing
 *
 * TOOLS is a declared list, the same shape as VOLUMES in build-ebook.js:
 * which teacher tools exist is an editorial fact, not something to
 * discover by globbing teacher/. A router, not a dashboard: nothing here
 * stores its own state. The Today panel is inert HTML at build time and
 * reads the schedule and the Run of Show topic list live in the browser
 * (see scripts/lib/teacher-index-page.js), so a schedule change or a
 * newly authored Run of Show topic reaches it on the next page load, not
 * the next rebuild.
 *
 * Exports TOOLS before running, and guards the run with
 * `if (require.main !== module) return`, the same reason
 * build-run-of-show.js and build-ebook.js do: validate.js requires this
 * file purely to read the list, and a require that silently rebuilt the
 * thing being validated could never fail.
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
  { label: 'Skills Lens', desc: 'Drop a Canvas submissions zip to see completion, response quality, and AP skill trends across the year.', href: 'skills-lens.html' },
];

module.exports = { TOOLS };
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

// The bare topic key ('1.4') the schedule uses, derived from meta.topic
// ('Topic 1.4') rather than declared a second time.
const rosTopics = ROS_TOPICS.map(topic => {
  const L = loadLesson(topic.dataFile);
  const key = (L.meta.topic || '').replace(/^Topic\s+/i, '').trim();
  return { key, out: topic.out };
});

const outPath = path.join(ROOT, 'teacher', 'index.html');
const html = renderTeacherIndex(TOOLS, rosTopics, COHORTS);
if (CHECK) {
  const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : null;
  if (existing !== html) {
    console.error('DRIFT: teacher/index.html does not match TOOLS or the Run of Show topic list. Run: node scripts/build-teacher-index.js');
    process.exit(1);
  }
  console.log('OK: teacher/index.html');
} else {
  fs.writeFileSync(outPath, html);
  console.log('Wrote teacher/index.html');
}
