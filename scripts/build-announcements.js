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
   ========================================================= */

const fs = require('fs');
const path = require('path');

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

  for (const entry of schedule.days || []) {
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

    days.push({
      date: entry.date,
      unit: entry.unit || (found ? found.unit : ''),
      topic: entry.topicTitle || (found ? found.title : ''),
      targets,
      criteria,
      // One string or a list of them. A list becomes a numbered slide.
      homework: Array.isArray(entry.homework)
        ? entry.homework.filter((h) => typeof h === 'string' && h.trim()).map((h) => h.trim())
        : (entry.homework || ''),
      homeworkDue: entry.homeworkDue || '',
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

  out += '  days: [\n';
  out += days.map((day) => {
    let block = `    /* ${day.date}  <-  ${day.source} */\n`;
    block += '    {\n';
    block += `      date: ${quote(day.date)},\n`;
    block += `      unit: ${quote(day.unit)},\n`;
    block += `      topic: ${quote(day.topic)},\n`;
    if (day.targets.length) {
      block += '      learningTargets: [\n' + emitEntries(day.targets, 8) + '\n      ],\n';
    }
    if (day.criteria.length) {
      block += '      successCriteria: [\n' + emitEntries(day.criteria, 8) + '\n      ],\n';
    }
    if (Array.isArray(day.homework)) {
      block += '      homework: [\n' +
        day.homework.map((h) => '        ' + quote(h)).join(',\n') + '\n      ]';
    } else {
      block += `      homework: ${quote(day.homework)}`;
    }
    if (day.homeworkDue) block += `,\n      homeworkDue: ${quote(day.homeworkDue)}`;
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

  fs.writeFileSync(OUT, out);

  console.log(`Indexed ${index.size} topics from the course.`);
  console.log(`Wrote ${days.length} class days to assets/data/announcements.js.`);
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
