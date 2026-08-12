#!/usr/bin/env node
/* =========================================================
   BUILD THE COURSE CALENDAR

   Reads two hand-written files:

     assets/data/school-calendar.js   the district calendar
     assets/data/pacing.js            an ordered list, no dates

   Writes one generated file:

     assets/data/course-calendar.js   one entry per class day

   That output is the source of truth every other surface reads: the
   classroom board, the Canvas calendar events, the module blueprint,
   and the homework. Nothing downstream should ever be told a date
   again.

       node scripts/build-course-calendar.js
       node scripts/build-course-calendar.js --check   fail on drift, write nothing

   WHAT THIS REFUSES TO DO QUIETLY. If the pacing does not fit the
   year, or a stated target is missed, it says so and exits non-zero.
   A calendar that silently runs past the last day of school is the
   failure this exists to prevent, and it is one you would otherwise
   discover in April.

   Node built-ins only.
   ========================================================= */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'data', 'course-calendar.js');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', C = '\x1b[36m', W = '\x1b[1m', X = '\x1b[0m';

const check = process.argv.includes('--check');
let problems = 0;
function fail(msg) { problems++; console.log(`  ${R}✗${X} ${msg}`); }
function note(msg) { console.log(`  ${G}✓${X} ${msg}`); }
function warn(msg) { console.log(`  ${Y}⚠${X} ${msg}`); }

/* ── Loading a browser-shaped data file in Node ─────────────────────────────
   The lesson data files decorate the page as a side effect. This stub answers
   anything, so those calls run harmlessly while we read the data they declare.
   Same approach build-announcements.js uses. */
const anyObject = new Proxy(function () {}, {
  get: (t, prop) => (prop === 'then' ? undefined : anyObject),
  set: () => true,
  apply: () => anyObject,
  construct: () => anyObject
});

// Node 22 makes `globalThis.navigator` a getter-only property, so a plain
// assignment throws. Defining it works, and the fallback keeps this runnable
// on the older Node versions where assignment was fine.
function setGlobal(name, value) {
  try {
    global[name] = value;
  } catch {
    Object.defineProperty(global, name, { value, configurable: true, writable: true });
  }
}

function loadGlobals(file) {
  setGlobal('document', anyObject);
  setGlobal('location', anyObject);
  setGlobal('navigator', anyObject);
  setGlobal('window', {});
  try {
    delete require.cache[require.resolve(file)];
    require(file);
  } catch (err) {
    return null;
  }
  return global.window;
}

/* ── Dates. UTC noon throughout, so no timezone can shift a day. ─────────── */
function iso(d) { return d.toISOString().slice(0, 10); }
function parse(s) { return new Date(s + 'T12:00:00Z'); }
function addDays(d, n) { return new Date(d.getTime() + n * 86400000); }
const DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Expand { date } or { from, to } into a Map of iso -> reason.
function expandRanges(list) {
  const out = new Map();
  for (const item of list || []) {
    if (item.date) { out.set(item.date, item.reason || ''); continue; }
    let x = parse(item.from);
    const end = parse(item.to);
    while (x <= end) { out.set(iso(x), item.reason || ''); x = addDays(x, 1); }
  }
  return out;
}

function longDate(isoStr) {
  const d = parse(isoStr);
  const months = ['January','February','March','April','May','June','July',
                  'August','September','October','November','December'];
  return `${DOW[d.getUTCDay()]}, ${months[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

/* ── Index the course, so a topic number resolves to real content ────────── */
function buildTopicIndex() {
  const index = new Map();

  const lessonDir = path.join(ROOT, 'assets', 'data');
  for (const name of fs.readdirSync(lessonDir)) {
    if (!/^lesson-\d+-\d+-/.test(name)) continue;
    if (/renderer-config|standards-addon/.test(name)) continue;
    const win = loadGlobals(path.join(lessonDir, name));
    const data = win && win.BEHISTORICAL_LESSON;
    if (!data || !data.meta) continue;
    const key = String(data.meta.topic || '').replace(/^Topic\s*/i, '').trim();
    if (!key) continue;
    index.set(key.toLowerCase(), {
      key,
      unit: data.meta.unit || '',
      title: data.meta.title || '',
      subtitle: data.meta.subtitle || '',
      shell: name.replace(/^lesson-(\d+)-(\d+)-/, 'topic-$1-$2-').replace(/\.js$/, '.html'),
      unitDir: 'unit-' + (key.split('.')[0])
    });
  }

  const foundationsDir = path.join(ROOT, 'foundations');
  for (const name of fs.readdirSync(foundationsDir)) {
    if (!/-data\.js$/.test(name)) continue;
    const win = loadGlobals(path.join(foundationsDir, name));
    const data = win && win.FOUNDATION_TOPIC;
    if (!data) continue;
    const code = String(data.code || data.id || '').toUpperCase();
    const num = (code.match(/(\d+)/) || [, ''])[1];
    if (num === '') continue;
    index.set('f' + num, {
      key: 'F' + num,
      unit: 'Foundations',
      title: data.title || '',
      subtitle: data.subtitle || '',
      shell: name.replace(/-data\.js$/, '.html'),
      unitDir: 'foundations'
    });
  }

  return index;
}

/* ── Main ────────────────────────────────────────────────────────────────── */
console.log(`\n${C}${W}── Course calendar ${X}`);

const calWin = loadGlobals(path.join(ROOT, 'assets', 'data', 'school-calendar.js'));
const school = calWin && calWin.BEHISTORICAL_SCHOOL_CALENDAR;
const paceWin = loadGlobals(path.join(ROOT, 'assets', 'data', 'pacing.js'));
const pacing = paceWin && paceWin.BEHISTORICAL_PACING;

if (!school) { fail('assets/data/school-calendar.js did not load'); process.exit(1); }
if (!pacing) { fail('assets/data/pacing.js did not load'); process.exit(1); }

const noSchool = expandRanges(school.noSchool);
const noClass  = expandRanges(school.noClass);
const finals   = expandRanges(school.finals);

/* Every school day in the year, in order, each tagged Green or Silver.
   The rotation alternates across school days and carries across breaks,
   which is the usual convention; rotationFixes overrides any date where
   the printed calendar disagrees. */
const fixes = new Map((school.rotationFixes || []).map(f => [f.date, f.colour]));
const schoolDays = [];
{
  let colour = school.rotation.firstDayColour === 'Silver' ? 'Silver' : 'Green';
  let x = parse(school.firstDay);
  const end = parse(school.lastDay);
  while (x <= end) {
    const key = iso(x);
    const dow = x.getUTCDay();
    if (dow !== 0 && dow !== 6 && !noSchool.has(key)) {
      const assigned = fixes.get(key) || colour;
      schoolDays.push({
        date: key,
        colour: assigned,
        isFinals: finals.has(key),
        isNoClass: noClass.has(key),
        noClassReason: noClass.get(key) || ''
      });
      colour = assigned === 'Green' ? 'Silver' : 'Green';
    }
    x = addDays(x, 1);
  }
}

/* Day counts, checked against the calendar's own footer. This is the
   transcription check: if a no-school range was mistyped, the count moves. */
for (const sem of school.semesters || []) {
  const n = schoolDays.filter(d => d.date >= sem.from && d.date <= sem.to).length;
  if (sem.expectedDays && n !== sem.expectedDays) {
    fail(`${sem.name} has ${n} school days, the district calendar says ${sem.expectedDays}. A no-school date in school-calendar.js is wrong.`);
  } else {
    note(`${sem.name}, ${n} school days, matches the district calendar`);
  }
}

/* Instructional days: school is in session, this class meets, not finals. */
const teachable = schoolDays.filter(d => !d.isFinals && !d.isNoClass);

// One block is one period per student. On the Green/Silver rotation the same
// lesson is delivered to the Green sections and then the Silver sections, so a
// block occupies two consecutive days on the classroom board.
const perBlock = school.rotation.topicSpansBothColours ? 2 : 1;

const topics = buildTopicIndex();
note(`${topics.size} topics indexed from the course data files`);

/* ── Walk the pacing list onto the teachable days ────────────────────────── */
const days = [];
const unscheduled = [];
let cursor = 0;

for (const entry of pacing.sequence) {
  const key = entry.topic ? String(entry.topic).toLowerCase() : null;
  const found = key ? topics.get(key) : null;

  if (key && !found) {
    fail(`pacing.js lists topic ${entry.topic}, which no data file declares`);
    continue;
  }

  const label   = found ? found.key   : (entry.title || '');
  const title   = found ? found.title : (entry.title || '');
  const unit    = found ? found.unit  : (entry.unit || '');
  const kind    = entry.kind || 'topic';

  // `covers` folds a topic into this entry instead of giving it its own days.
  // The end-of-unit reasoning topics (Comparison, Continuity and Change,
  // Causation) are unit synthesis by design, so they are taught as the review
  // rather than as a separate lesson. The topic keeps its lesson page and is
  // still named on the board and in Canvas; it just shares this entry's block.
  const covers = [];
  for (const ck of entry.covers || []) {
    const sub = topics.get(String(ck).toLowerCase());
    if (!sub) {
      fail(`pacing.js folds topic ${ck} into "${entry.title}", but no data file declares it`);
      continue;
    }
    covers.push({ topic: sub.key, title: sub.title, lessonPath: `${sub.unitDir}/${sub.shell}` });
  }
  const blocks  = entry.blocks || 1;
  // One block is one period per student. On the Green/Silver rotation that
  // is two consecutive school days on the board, one per colour.
  const span    = blocks * perBlock;

  const slots = [];
  for (let i = 0; i < span; i++) {
    if (cursor >= teachable.length) break;
    slots.push(teachable[cursor++]);
  }

  if (slots.length < span) {
    unscheduled.push({ label, title, kind, wanted: span, got: slots.length });
    continue;
  }

  slots.forEach((slot, i) => {
    days.push({
      date: slot.date,
      weekday: DOW[parse(slot.date).getUTCDay()],
      colour: slot.colour,
      topic: found ? found.key : '',
      topicTitle: title,
      unit,
      kind,
      dayOfEntry: i + 1,
      daysInEntry: span,
      lessonPath: found ? `${found.unitDir}/${found.shell}` : '',
      covers,
      // The last day of an entry is when the work is due for the students
      // who met on the first day, which is the sane default for a block.
      isLastDay: i === span - 1
    });
  });
}

/* ── Targets ─────────────────────────────────────────────────────────────── */
console.log(`\n${C}${W}── Targets ${X}`);
// When did a topic last appear, whether on its own days or folded into a
// review entry? A folded topic is still taught, so a target that names one
// must find it.
function lastDayOf(key) {
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].topic === key) return days[i];
    if (days[i].covers.some(c => c.topic === key)) return days[i];
  }
  return null;
}

// "Every topic is finished by this date." The deadline that matters is not
// the last day of school; it is the last day content can still be new.
for (const deadline of pacing.allTopicsBy ? [pacing.allTopicsBy] : []) {
  const taught = days.filter(d => d.topic || d.covers.length);
  const last = taught[taught.length - 1];
  const late = taught.filter(d => d.date > deadline.onDate);
  if (!last) {
    fail('no topics were scheduled at all');
  } else if (late.length === 0) {
    const runway = teachable.filter(d => d.date > last.date).length;
    note(`all topics finish ${longDate(last.date)}, on or before ${deadline.label}, leaving ${runway} class days after`);
  } else {
    // Capacity, not a list of casualties. Which entries happen to fall off the
    // end is an artifact of ordering; how many entries the calendar can hold is
    // the number that tells you what to change.
    const room = teachable.filter(d => d.date <= deadline.onDate).length;
    const content = (pacing.sequence || []).filter(e => (e.kind || 'topic') !== 'review');
    const wanted = content.reduce((a, e) => a + (e.blocks || 1) * perBlock, 0);
    const names = [...new Set(late.map(d => d.topic || d.topicTitle))];
    fail(`content does not fit before ${deadline.label} (${deadline.onDate}).`);
    console.log(`      room for ${room} school days, or ${Math.floor(room / perBlock)} entries at one block each`);
    console.log(`      pacing asks for ${wanted} school days across ${content.length} entries`);
    console.log(`      short by ${wanted - room} school days, about ${Math.ceil((wanted - room) / perBlock)} entries`);
    console.log(`      first to fall past the date: ${names.slice(0, 4).join(', ')}`);
  }
}

for (const target of pacing.targets || []) {
  const hit = lastDayOf(target.through);
  if (!hit) {
    fail(`target "${target.through} by ${target.by}" cannot be checked, ${target.through} was never scheduled`);
    continue;
  }
  if (hit.date <= target.onDate) {
    const slack = teachable.filter(d => d.date > hit.date && d.date <= target.onDate).length;
    note(`${target.through} finishes ${longDate(hit.date)}, ${slack} class days before ${target.by}`);
  } else {
    fail(`${target.through} finishes ${longDate(hit.date)}, which is AFTER ${target.by} (${target.onDate}). Reduce blocks in pacing.js.`);
  }
}

if (unscheduled.length) {
  fail(`${unscheduled.length} pacing entries ran past the last day of school:`);
  for (const u of unscheduled.slice(0, 8)) {
    console.log(`      ${u.label || u.title} needed ${u.wanted} days, got ${u.got}`);
  }
}

/* ── Write ───────────────────────────────────────────────────────────────── */
function quote(s) { return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"; }

const lines = [];
lines.push('/* =========================================================');
lines.push('   THE COURSE CALENDAR, GENERATED. DO NOT EDIT.');
lines.push('');
lines.push('   Written by scripts/build-course-calendar.js from');
lines.push('   assets/data/school-calendar.js and assets/data/pacing.js.');
lines.push('   Edit one of those and rebuild:');
lines.push('');
lines.push('       node scripts/build-course-calendar.js');
lines.push('');
lines.push('   A hand edit here is reverted by the next rebuild.');
lines.push('   ========================================================= */');
lines.push('');
lines.push('window.BEHISTORICAL_CALENDAR = {');
lines.push(`  year: ${quote(school.year || '')},`);
lines.push(`  classDays: ${days.length},`);
lines.push('  days: [');
days.forEach((d, i) => {
  const parts = [
    `      date: ${quote(d.date)}`,
    `      weekday: ${quote(d.weekday)}`,
    `      colour: ${quote(d.colour)}`,
    `      topic: ${quote(d.topic)}`,
    `      topicTitle: ${quote(d.topicTitle)}`,
    `      unit: ${quote(d.unit)}`,
    `      kind: ${quote(d.kind)}`,
    `      dayOfEntry: ${d.dayOfEntry}`,
    `      daysInEntry: ${d.daysInEntry}`,
    `      lessonPath: ${quote(d.lessonPath)}`,
    `      covers: [${d.covers.map(c => `{ topic: ${quote(c.topic)}, title: ${quote(c.title)}, lessonPath: ${quote(c.lessonPath)} }`).join(', ')}]`,
    `      isLastDay: ${d.isLastDay}`
  ];
  lines.push('    {');
  lines.push(parts.join(',\n'));
  lines.push('    }' + (i === days.length - 1 ? '' : ','));
});
lines.push('  ],');
lines.push('  unscheduled: [');
unscheduled.forEach((u, i) => {
  lines.push(`    { label: ${quote(u.label)}, wanted: ${u.wanted}, got: ${u.got} }` + (i === unscheduled.length - 1 ? '' : ','));
});
lines.push('  ]');
lines.push('};');
lines.push('');

const output = lines.join('\n');
const existing = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;

console.log(`\n${C}${W}── Output ${X}`);
if (check) {
  if (existing !== output) {
    fail('assets/data/course-calendar.js has drifted, run node scripts/build-course-calendar.js');
  } else {
    note(`${days.length} class days, up to date`);
  }
} else if (existing === output) {
  note(`${days.length} class days, no change`);
} else {
  fs.writeFileSync(OUT, output);
  note(`${days.length} class days written to assets/data/course-calendar.js`);
}

console.log('');
process.exit(problems > 0 ? 1 : 0);
