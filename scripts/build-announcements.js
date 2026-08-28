#!/usr/bin/env node
/* =========================================================
   BUILD THE ANNOUNCEMENTS BOARD FROM THE COURSE ITSELF

   You write a schedule of dates and topic numbers in
   assets/data/announcements-schedule.js. This script reads the
   learning targets and success criteria already stored in each
   lesson data file and writes assets/data/announcements.js.

     node scripts/build-announcements.js

   Nothing is invented here. Every target and criterion printed on
   the classroom screen is the same text the lesson page shows, so
   the board can never drift from the curriculum.

   GREEN AND SILVER. Every day belongs to one cohort and they
   alternate. A due date is NOT typed in the schedule: it is the
   next date in the schedule carrying the same cohort, so a
   holiday or a cancelled day moves every affected due date by
   deleting one row. Hand-typed due dates were how Silver ended up
   with a reading due on a Friday it is never in the building for.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const { COHORTS, cohort: lookupCohort, nextCohortKey } = require('./lib/cohorts.js');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'data', 'announcements.js');
const SCHEDULE = path.join(ROOT, 'assets', 'data', 'announcements-schedule.js');

// A lesson data file decorates the page as a side effect. This stub answers
// anything so those calls run harmlessly while we read the data it declares.
const anyObject = new Proxy(function () {}, {
  get: (t, prop) => (prop === 'then' ? undefined : anyObject),
  set: () => true,
  apply: () => anyObject,
  construct: () => anyObject
});

function loadGlobals(file) {
  global.document = anyObject;
  global.location = anyObject;
  global.navigator = anyObject;
  global.window = {};
  try {
    delete require.cache[require.resolve(file)];
    require(file);
  } catch (err) {
    return null;
  }
  return global.window;
}

/* ---------------------------------------------------------
   Text normalizing

   Some lesson entries hold several "I can" statements inside one
   string. Splitting them makes each its own line on the board,
   which is what a projected list needs.
   --------------------------------------------------------- */
function splitStatements(text) {
  return String(text || '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(/(?<=\.)\s+(?=I can\b)/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function collect(list, key) {
  const out = [];
  for (const raw of list || []) {
    const text = typeof raw === 'string' ? raw : (raw && raw[key]);
    const label = (raw && typeof raw === 'object' && raw.theme) ? raw.theme : '';
    for (const statement of splitStatements(text)) {
      out.push({ text: statement, label });
    }
  }
  return out;
}

/* ---------------------------------------------------------
   Dates

   Parsed at noon so a timezone offset can never roll a date onto
   the day before, which is the classic way a board shows Thursday
   to a room sitting in it on Friday.
   --------------------------------------------------------- */
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

function parseDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || '').trim());
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
}

/* 'Wednesday, September 2'. The weekday alone is what the old schedule
   typed by hand, and a weekday with no date is ambiguous the moment an
   assignment spans a weekend or a holiday. */
function longDate(iso) {
  const d = parseDate(iso);
  if (!d) return '';
  return WEEKDAYS[d.getDay()] + ', ' + MONTHS[d.getMonth()] + ' ' + d.getDate();
}

/* ---------------------------------------------------------
   Reading assignments

   Written in the schedule as structure, not as one long sentence,
   so the board and the Canvas event both print real bullets and
   neither has to split a string on a colon to find them.
   --------------------------------------------------------- */
function readingItem(reading, index) {
  if (!reading || !Array.isArray(reading.required) || !reading.required.length) return null;

  const forKey = String(reading.for || '').trim();
  const found = forKey ? index.get(forKey.toLowerCase()) : null;
  const name = found
    ? `Topic ${found.key}, ${found.title}`
    : (forKey ? `Topic ${forKey}` : 'the next block');

  const where = String(reading.where || '').trim();
  const lead = `Required eBook reading for ${name}` + (where ? ` (${where})` : '') + '.';

  const bullets = reading.required.map((t) => ({ text: String(t).trim(), tone: 'required' }));
  for (const t of reading.recommended || []) {
    bullets.push({ text: String(t).trim(), tone: 'recommended' });
  }

  return {
    text: lead,
    kind: 'reading',
    items: bullets,
    note: String(reading.note || '').trim()
  };
}

/* ---------------------------------------------------------
   Index every topic in the course
   --------------------------------------------------------- */
function buildIndex() {
  const index = new Map();
  const warnings = [];

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
      learningTargets: collect(data.learningTargets, 'target'),
      successCriteria: collect(data.successCriteria, 'criteria'),
      source: name
    });
  }

  const foundationsDir = path.join(ROOT, 'foundations');
  for (const name of fs.readdirSync(foundationsDir)) {
    if (!/-data\.js$/.test(name)) continue;

    const win = loadGlobals(path.join(foundationsDir, name));
    const data = win && win.FOUNDATION_TOPIC;
    if (!data) continue;

    // 'FOUNDATIONS 2' becomes 'F2', which is what you type in the schedule.
    const code = String(data.code || data.id || '').toUpperCase();
    const num = (code.match(/(\d+)/) || [, ''])[1];
    if (!num) continue;

    index.set(('f' + num), {
      key: 'F' + num,
      unit: 'Foundations',
      title: data.title || '',
      subtitle: data.subtitle || '',
      learningTargets: collect(data.learningTargets, 'target'),
      successCriteria: collect(data.successCriteria, 'criteria'),
      source: name
    });
  }

  return { index, warnings };
}

/* ---------------------------------------------------------
   Emit
   --------------------------------------------------------- */
const MAX_ITEMS = 3;      // more than three does not read from the back row
const LONG_TEXT = 200;    // a single statement past this gets flagged

function quote(value) {
  return "'" + String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

function emitHomework(items, indent) {
  const pad = ' '.repeat(indent);
  const inner = ' '.repeat(indent + 2);
  return items.map((h) => {
    let block = pad + '{ text: ' + quote(h.text);
    if (h.kind) block += ', kind: ' + quote(h.kind);
    if (h.due) block += ', due: ' + quote(h.due);
    if (h.note) block += ', note: ' + quote(h.note);
    if (h.items && h.items.length) {
      block += ',\n' + inner + 'items: [\n' +
        h.items.map((b) => inner + '  { text: ' + quote(b.text) +
          (b.tone && b.tone !== 'required' ? ', tone: ' + quote(b.tone) : '') + ' }'
        ).join(',\n') +
        '\n' + inner + ']\n' + pad;
    }
    block += ' }';
    return block;
  }).join(',\n');
}

function emitEntries(entries, indent) {
  const pad = ' '.repeat(indent);
  return entries.map((e) => {
    const label = e.label ? ', label: ' + quote(e.label) : '';
    return pad + '{ text: ' + quote(e.text) + label + ' }';
  }).join(',\n');
}

function main() {
  if (!fs.existsSync(SCHEDULE)) {
    console.error('No schedule found at assets/data/announcements-schedule.js');
    process.exit(1);
  }

  const { index } = buildIndex();
  const win = loadGlobals(SCHEDULE);
  const schedule = win && win.BEHISTORICAL_SCHEDULE;
  if (!schedule) {
    console.error('The schedule file did not set window.BEHISTORICAL_SCHEDULE');
    process.exit(1);
  }

  const problems = [];
  const notes = [];
  const days = [];

  /* Every day belongs to a cohort, and the next meeting of that cohort is
     what a due date means. Build that lookup once, from the schedule itself,
     so a holiday is a deleted row rather than an edit to every date after it. */
  const calendar = (schedule.days || [])
    .filter((e) => e && e.date)
    .slice()
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));

  for (const entry of calendar) {
    if (!entry.cohort) {
      problems.push(`${entry.date}: no cohort. Every day is 'green' or 'silver'.`);
    } else if (!lookupCohort(entry.cohort)) {
      problems.push(`${entry.date}: cohort "${entry.cohort}" is not green or silver.`);
    }
  }

  /* School days alternate. Two of the same in a row is a typo, and it is the
     kind that reads fine on the page and puts a whole block in front of the
     wrong room. */
  for (let i = 1; i < calendar.length; i++) {
    const prev = calendar[i - 1];
    const here = calendar[i];
    if (prev.cohort && here.cohort && here.cohort === prev.cohort) {
      notes.push(`${prev.date} and ${here.date} are both ${here.cohort}. School days alternate, so check these two.`);
    }
  }

  function nextMeeting(date, cohortKey) {
    for (const day of calendar) {
      if (day.cohort === cohortKey && String(day.date) > String(date)) return day.date;
    }
    return '';
  }

  for (const entry of calendar) {
    if (!entry || !entry.date) continue;

    const wanted = String(entry.topic || '').trim();
    const found = index.get(wanted.toLowerCase());

    if (wanted && !found) {
      problems.push(`${entry.date}: no lesson data for topic "${wanted}"`);
      continue;
    }

    // Anything written in the schedule wins over the generated text, so a
    // day can always be overridden by hand without leaving this workflow.
    let targets = entry.learningTargets
      ? entry.learningTargets.map((t) => ({ text: t, label: '' }))
      : (found ? found.learningTargets : []);
    let criteria = entry.successCriteria
      ? entry.successCriteria.map((t) => ({ text: t, label: '' }))
      : (found ? found.successCriteria : []);

    if (targets.length > MAX_ITEMS) {
      notes.push(`${entry.date} (${wanted}): showing ${MAX_ITEMS} of ${targets.length} targets`);
      targets = targets.slice(0, MAX_ITEMS);
    }
    if (criteria.length > MAX_ITEMS) {
      notes.push(`${entry.date} (${wanted}): showing ${MAX_ITEMS} of ${criteria.length} criteria`);
      criteria = criteria.slice(0, MAX_ITEMS);
    }

    for (const item of targets.concat(criteria)) {
      if (item.text.length > LONG_TEXT) {
        notes.push(`${entry.date} (${wanted}): a ${item.text.length} character line will project small`);
        break;
      }
    }

    /* Plain tasks first, then the structured reading, so the thing with
       bullets under it sits at the bottom of the list where it reads. */
    const homework = [];
    const plain = Array.isArray(entry.homework) ? entry.homework : [entry.homework];
    for (const h of plain) {
      if (typeof h === 'string' && h.trim()) homework.push({ text: h.trim() });
    }
    const reading = readingItem(entry.reading, index);
    if (reading) homework.push(reading);

    /* One due date for the night, derived from this cohort's next meeting.
       An explicit homeworkDue in the schedule still wins. */
    const nextDate = nextMeeting(entry.date, entry.cohort);
    const due = entry.homeworkDue || (nextDate ? longDate(nextDate) : '');
    if (homework.length && !due) {
      notes.push(`${entry.date}: homework assigned with no later ${entry.cohort} meeting in the schedule, so it prints with no due date.`);
    }
    for (const h of homework) {
      if (!h.due) h.due = due;
    }

    days.push({
      date: entry.date,
      cohort: entry.cohort || '',
      unit: entry.unit || (found ? found.unit : ''),
      topic: entry.topicTitle || (found ? found.title : ''),
      targets,
      criteria,
      homework,
      // A day with nothing assigned carries no due date. Emitting one anyway
      // is invisible on the board, because the homework slide does not build,
      // and it is exactly the kind of quiet disagreement between two surfaces
      // that ends with the projector and Canvas showing different dates.
      homeworkDue: homework.length ? due : '',
      dueDate: homework.length ? nextDate : '',
      note: entry.note || '',
      source: found ? found.source : 'written by hand in the schedule'
    });
  }

  days.sort((a, b) => a.date.localeCompare(b.date));

  const settings = Object.assign({
    courseName: 'AP World History',
    teacherName: '',
    roomName: '',
    slideSeconds: 15,
    apExamDate: ''
  }, schedule.settings || {});

  let out = '';
  out += '/* =========================================================\n';
  out += '   GENERATED FILE, DO NOT EDIT BY HAND\n\n';
  out += '   Written by scripts/build-announcements.js from\n';
  out += '   assets/data/announcements-schedule.js. Every learning target\n';
  out += '   and success criterion below is copied from the lesson data\n';
  out += '   file named above it, so the board matches the lesson page.\n\n';
  out += '   To change what the classroom screen shows, edit the schedule\n';
  out += '   and run:  node scripts/build-announcements.js\n';
  out += '   ========================================================= */\n\n';
  out += 'window.BEHISTORICAL_ANNOUNCEMENTS = {\n\n';

  out += '  settings: {\n';
  out += `    courseName: ${quote(settings.courseName)},\n`;
  out += `    teacherName: ${quote(settings.teacherName)},\n`;
  out += `    roomName: ${quote(settings.roomName)},\n`;
  out += `    slideSeconds: ${Number(settings.slideSeconds) || 15},\n`;
  out += `    apExamDate: ${quote(settings.apExamDate)}\n`;
  out += '  },\n\n';

  // Straight out of scripts/lib/cohorts.js, so the board, the Canvas events
  // and the schedule cannot disagree about what Green looks like.
  out += '  cohorts: {\n';
  out += Object.values(COHORTS).map((c) => (
    `    ${c.key}: { label: ${quote(c.label)}, short: ${quote(c.short)}, ` +
    `letter: ${quote(c.letter)}, metal: ${quote(c.metal)}, mark: ${quote(c.mark)}, ` +
    `ink: ${quote(c.ink)}, tint: ${quote(c.tint)}, onDark: ${quote(c.onDark)}, ` +
    `filled: ${c.filled} }`
  )).join(',\n');
  out += '\n  },\n\n';

  out += '  days: [\n';
  out += days.map((day) => {
    let block = `    /* ${day.date}  <-  ${day.source} */\n`;
    block += '    {\n';
    block += `      date: ${quote(day.date)},\n`;
    block += `      cohort: ${quote(day.cohort)},\n`;
    block += `      unit: ${quote(day.unit)},\n`;
    block += `      topic: ${quote(day.topic)},\n`;
    if (day.targets.length) {
      block += '      learningTargets: [\n' + emitEntries(day.targets, 8) + '\n      ],\n';
    }
    if (day.criteria.length) {
      block += '      successCriteria: [\n' + emitEntries(day.criteria, 8) + '\n      ],\n';
    }
    if (day.homework.length) {
      block += '      homework: [\n' + emitHomework(day.homework, 8) + '\n      ]';
    } else {
      block += '      homework: []';
    }
    if (day.homeworkDue) block += `,\n      homeworkDue: ${quote(day.homeworkDue)}`;
    if (day.dueDate) block += `,\n      dueDate: ${quote(day.dueDate)}`;
    if (day.note) block += `,\n      note: ${quote(day.note)}`;
    block += '\n    }';
    return block;
  }).join(',\n');
  out += '\n  ],\n\n';

  // An assessment with no date, or date: 'TBD', still reaches the board and
  // projects as Date TBD. Announced but not scheduled is a real state.
  out += '  assessments: [\n';
  out += (schedule.assessments || []).map((a) => (
    '    { date: ' + quote(/^\d{4}-\d{2}-\d{2}$/.test(String(a.date || '').trim()) ? a.date : '') +
    ', title: ' + quote(a.title || '') +
    ', detail: ' + quote(a.detail || '') +
    ', type: ' + quote(a.type || 'Quiz') + ' }'
  )).join(',\n');
  out += '\n  ],\n\n';

  out += '  reminders: [\n';
  out += (schedule.reminders || []).map((r) => (
    '    { title: ' + quote(r.title || '') + ', detail: ' + quote(r.detail || '') + ' }'
  )).join(',\n');
  out += '\n  ]\n};\n';

  if (process.argv.includes('--check')) {
    const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
    if (current !== out) {
      console.error('FAIL  assets/data/announcements.js is out of date.');
      console.error('      Run: node scripts/build-announcements.js');
      process.exit(1);
    }
    console.log('OK  announcements.js matches the schedule and the lesson data.');
    if (problems.length) {
      problems.forEach((p) => console.error('  ! ' + p));
      process.exit(1);
    }
    return;
  }

  fs.writeFileSync(OUT, out);

  console.log(`Indexed ${index.size} topics from the course.`);
  const green = days.filter((d) => d.cohort === 'green').length;
  const silver = days.filter((d) => d.cohort === 'silver').length;
  console.log(`Wrote ${days.length} class days to assets/data/announcements.js (${green} green, ${silver} silver).`);
  if (notes.length) {
    console.log('\nWorth a look:');
    [...new Set(notes)].forEach((n) => console.log('  - ' + n));
    console.log('  Override any of these with learningTargets or successCriteria');
    console.log('  in the schedule entry, and the board will use your wording.');
  }
  if (problems.length) {
    console.log('\nNot built:');
    problems.forEach((p) => console.log('  ! ' + p));
    console.log('\nValid topics: ' + [...index.values()].map((t) => t.key).sort(
      (a, b) => a.localeCompare(b, undefined, { numeric: true })).join(' '));
    process.exitCode = 1;
  }
}

main();
