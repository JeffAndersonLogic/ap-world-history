#!/usr/bin/env node
/*
 * Build the teacher command center: one page linking every teacher-only
 * tool BeHistorical has, plus a Today panel that surfaces the best available
 * teacher surface for whatever topic is being taught right now.
 *
 *   node scripts/build-teacher-index.js            write teacher/index.html
 *   node scripts/build-teacher-index.js --check    fail on drift, write nothing
 *
 * TOOLS is the one declared registry for the teacher landing page. Lesson
 * entries drive both the visible Teaching OS library and the Today router, so
 * those two surfaces cannot drift apart. The Today panel reads the schedule
 * live in the browser and falls back to a standalone Run of Show only when a
 * topic does not yet have an integrated Teaching OS.
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
  { kind: 'lesson', unit: '1', key: '1.7', title: 'Comparison in the Period c. 1200 to c. 1450', href: 'command-center-topic-1-7.html' },
  { kind: 'lesson', unit: '2', key: '2.1', title: 'The Silk Roads', href: 'topic-2-1-os.html', aliases: ['command-center-topic-2-1.html'] },
  { kind: 'lesson', unit: '2', key: '2.2', title: 'The Mongol Empire', href: 'topic-2-2-os.html' },
  { kind: 'lesson', unit: '2', key: '2.3', title: 'Exchange in the Indian Ocean', href: 'topic-2-3-os.html' },
  { kind: 'lesson', unit: '2', key: '2.4', title: 'Trans-Saharan Trade Routes', href: 'topic-2-4-os.html' },
  { kind: 'lesson', unit: '2', key: '2.5', title: 'Cultural Consequences of Connectivity', href: 'topic-2-5-os.html', aliases: ['command-center-topic-2-5.html'] },
  { kind: 'lesson', unit: '2', key: '2.6', title: 'Environmental Consequences of Connectivity', href: 'topic-2-6-os.html', aliases: ['command-center-topic-2-6.html'] },
  { kind: 'lesson', unit: '2', key: '2.7', title: 'Comparison of Economic Exchange', href: 'topic-2-7-os.html', aliases: ['command-center-topic-2-7.html'] },
  { kind: 'primary', label: 'Skills Lens', desc: 'Analyze Canvas submissions for completion, response quality, and AP skill trends across the year.', href: 'skills-lens.html' },
  { kind: 'authoring', label: 'Slide Templates', desc: 'Reference every Teaching OS slide template with real Unit 2 examples and copy-ready slide data.', href: 'slide-templates.html' },
  { kind: 'legacy', label: 'Run of Show', desc: 'Standalone pacing pages for Topics 1.4–1.6, before those lessons move into the integrated Teaching OS.', href: ROS_INDEX_OUT },
];

/* The Today router is derived from the same lesson registry the page renders.
   One registry means a lesson cannot appear in the library but disappear from
   Today, or vice versa. */
const INTERACTIVE_TOPICS = TOOLS
  .filter(tool => tool.kind === 'lesson')
  .map(({ key, href }) => ({ key, out: href }));

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
