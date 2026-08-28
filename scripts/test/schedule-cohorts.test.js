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
// Canvas creates one event per topic and splits the dates with its own
// Assign to feature, so the generator prints one row per section under each
// event. That row is the join between what the projector says tonight and
// what a student sees in Canvas, and the two disagreeing is silent on both.
const events = fs.readFileSync(path.join(ROOT, 'docs', 'canvas', 'calendar-events.md'), 'utf8');

const COHORT_LABEL = { green: 'Green Day', silver: 'Silver Day' };
const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
function longDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  if (!m) return '';
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
  return `${WEEKDAY[d.getDay()]}, ${MONTH[d.getMonth()]} ${d.getDate()}`;
}

const mismatched = [];
for (const day of announcements.days || []) {
  if (!day.homework || !day.homework.length) continue;
  const label = COHORT_LABEL[day.cohort];
  const taught = longDate(day.date);
  const wanted = `| ${label} | ${taught} | ${day.homeworkDue} |`;
  if (!events.includes(wanted)) {
    mismatched.push(`${day.date}: no Canvas Assign to row "${wanted.trim()}"`);
  }
}
if (mismatched.length) fail(mismatched.join('; '));
else ok('every board due date has a matching Canvas Assign to row for its section');

/* ---- 6. one Canvas event per topic, not one per cohort ---- */
// Canvas has one event and one assignment for the whole course. Two events
// for one topic would be two objects where the course has one, two places
// for the text to drift, and a student in the wrong one reading the wrong
// date. A per-cohort heading is what that regression would look like.
const headings = events.match(/^## .*$/gm) || [];
const perCohort = headings.filter((h) => /Green Day|Silver Day/.test(h));
if (perCohort.length) {
  fail('Canvas events are split per cohort: ' + perCohort.join(', '));
} else {
  ok(`${headings.length - 2} Canvas events, one per topic, none split by cohort`);
}

// Every topic's event must carry a row for both sections, or one room is
// pasting an event that never names its own date.
const topicHeadings = headings.filter((h) => !/^## (Green and Silver|How to paste)/.test(h));
const missingRows = [];
for (const h of topicHeadings) {
  const block = events.slice(events.indexOf(h), events.indexOf('```html', events.indexOf(h)));
  for (const label of Object.values(COHORT_LABEL)) {
    if (!block.includes(`| ${label} |`)) missingRows.push(`${h.slice(3)} has no ${label} row`);
  }
}
if (missingRows.length) fail(missingRows.join('; '));
else ok('every event names both sections in its Assign to table');

console.log('');
if (failures) {
  console.log(`Alternating block: ${failures} of ${checks} checks failed.`);
  process.exit(1);
}
console.log(`Alternating block: all ${checks} checks passed.`);
