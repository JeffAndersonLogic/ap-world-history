#!/usr/bin/env node
'use strict';
/* =========================================================
   THE ALTERNATING BLOCK CONTRACT

   Green and Silver are different students. A topic is taught
   twice, to two rooms, and homework assigned to one cohort is
   due at THAT cohort's next meeting, which is two school days
   later, not tomorrow.

   Every failure this file checks for is silent. The old schedule
   posted one homework entry per topic pair on the last day of the
   pair, which reads perfectly on the page and meant Green went
   into Topic 1.2 with no reading assigned while Silver's said due
   Friday, a day Silver is never in the building. Nothing was red.
   The board rendered, the events pasted, and one room in two had
   the wrong date.

   So: the generated files must still match their sources, every
   day must name a cohort, cohorts must alternate, and every due
   date must be the assigning cohort's own next meeting.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
let failures = 0;
let checks = 0;

function ok(msg) { checks++; console.log('  ok   ' + msg); }
function fail(msg) { checks++; failures++; console.log('  FAIL ' + msg); }

function load(file, globalName) {
  const sandbox = { window: {} };
  const any = new Proxy(function () {}, {
    get: (t, p) => (p === 'then' ? undefined : any),
    set: () => true, apply: () => any, construct: () => any
  });
  sandbox.document = any; sandbox.location = any; sandbox.navigator = any;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: path.basename(file) });
  return sandbox.window[globalName];
}

/* ---- 1. the generated files still match their sources ---- */
for (const [script, label] of [
  ['scripts/build-announcements.js', 'assets/data/announcements.js'],
  ['scripts/build-canvas-events.js', 'docs/canvas/calendar-events.md']
]) {
  try {
    execFileSync('node', [path.join(ROOT, script), '--check'], { cwd: ROOT, stdio: 'pipe' });
    ok(`${label} matches its sources`);
  } catch (err) {
    fail(`${label} is out of date. Run: node ${script}`);
  }
}

/* ---- 2. the schedule itself ---- */
const schedule = load(path.join(ROOT, 'assets', 'data', 'announcements-schedule.js'),
  'BEHISTORICAL_SCHEDULE');
const days = (schedule.days || []).filter((d) => d && d.date)
  .slice().sort((a, b) => String(a.date).localeCompare(String(b.date)));

const VALID = ['green', 'silver'];
const missing = days.filter((d) => !VALID.includes(String(d.cohort || '').toLowerCase()));
if (missing.length) {
  fail(`${missing.length} day(s) with no valid cohort: ` +
    missing.map((d) => d.date).join(', '));
} else {
  ok(`all ${days.length} class days name a cohort`);
}

// School days alternate. Two of the same in a row puts a whole block in front
// of the wrong room, and the page it renders looks completely normal.
const runs = [];
for (let i = 1; i < days.length; i++) {
  if (days[i].cohort && days[i].cohort === days[i - 1].cohort) {
    runs.push(`${days[i - 1].date} and ${days[i].date} are both ${days[i].cohort}`);
  }
}
if (runs.length) fail('cohorts do not alternate: ' + runs.join('; '));
else ok('cohorts alternate across every consecutive pair of school days');

// Every topic is taught to both cohorts, or it is taught to half the course.
const byTopic = new Map();
for (const d of days) {
  const key = d.topic || d.topicTitle;
  if (!key) continue;
  if (!byTopic.has(key)) byTopic.set(key, new Set());
  byTopic.get(key).add(d.cohort);
}
const halfTaught = [...byTopic.entries()].filter(([, set]) => set.size < 2);
if (halfTaught.length) {
  fail('taught to one cohort only: ' + halfTaught.map(([k]) => k).join(', '));
} else {
  ok(`all ${byTopic.size} topics are scheduled for both cohorts`);
}

/* ---- 3. every due date is the assigning cohort's next meeting ---- */
const announcements = load(path.join(ROOT, 'assets', 'data', 'announcements.js'),
  'BEHISTORICAL_ANNOUNCEMENTS');

function nextMeeting(date, cohort) {
  for (const d of days) {
    if (d.cohort === cohort && String(d.date) > String(date)) return d.date;
  }
  return '';
}

const wrong = [];
const undated = [];
for (const day of announcements.days || []) {
  if (!day.homework || !day.homework.length) continue;
  const expected = nextMeeting(day.date, day.cohort);
  const scheduled = (schedule.days || []).find((d) => d.date === day.date);
  if (scheduled && scheduled.homeworkDue) continue;   // an explicit override
  if (!expected) { undated.push(day.date); continue; }
  if (day.dueDate !== expected) {
    wrong.push(`${day.date} (${day.cohort}) due ${day.dueDate || 'nothing'}, expected ${expected}`);
  }
}
if (wrong.length) fail('homework due on a day its cohort is not in the building: ' + wrong.join('; '));
else ok('every derived due date is that cohort\'s own next meeting');

if (undated.length) {
  console.log('  note homework with no later meeting in the schedule: ' + undated.join(', '));
}

/* ---- 4. readings are structured, not packed into a sentence ---- */
// A reading written as one long string still renders, and still reads as one
// line a student skims. The bullets are the point.
const packed = [];
for (const day of announcements.days || []) {
  for (const h of day.homework || []) {
    if (h.kind === 'reading' && !(h.items && h.items.length)) {
      packed.push(day.date);
    }
  }
}
if (packed.length) fail('reading assignments with no sections to bullet: ' + packed.join(', '));
else ok('every reading assignment carries its sections as separate items');

/* ---- 5. the board and the Canvas events agree ---- */
const events = fs.readFileSync(path.join(ROOT, 'docs', 'canvas', 'calendar-events.md'), 'utf8');
const mismatched = [];
for (const day of announcements.days || []) {
  if (!day.homeworkDue) continue;
  if (!events.includes(`Due ${day.homeworkDue}`)) {
    mismatched.push(`${day.date}: "${day.homeworkDue}" is on the board but in no Canvas event`);
  }
}
if (mismatched.length) fail(mismatched.join('; '));
else ok('every due date on the board also appears in a Canvas event');

console.log('');
if (failures) {
  console.log(`Alternating block: ${failures} of ${checks} checks failed.`);
  process.exit(1);
}
console.log(`Alternating block: all ${checks} checks passed.`);
