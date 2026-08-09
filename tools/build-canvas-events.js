#!/usr/bin/env node
'use strict';

// Regenerate docs/canvas/foundations-calendar-events.md from the six Foundations
// data files.
//
// The whole point of this script is that a Learning Target edit cannot silently
// leave Canvas stale. LEARNING TARGETS and SUCCESS CRITERIA are lifted verbatim
// out of `learningTargets` and `successCriteria`; nothing here rewrites them.
//
// OVERVIEW is the one cell that is not machine-derived, because `commandCopy` is
// written to the teacher and must not be pasted at students raw. That prose
// lives in the OVERVIEWS table below so a regeneration never overwrites it.
//
// Node built-ins only. `--check` fails on drift without writing.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'canvas', 'foundations-calendar-events.md');
const BASE_URL = 'https://jeffandersonlogic.github.io/ap-world-history/foundations';

// One row per Foundations day. `title` is the Canvas object name, which spells
// out the ampersand the data file's `title` carries; see Section 2 of
// docs/canvas/CANVAS-BUILD-GUIDE.md.
const DAYS = [
  {
    code: 'F0',
    n: 0,
    data: 'foundations-0-intro-to-behistorical-data.js',
    shell: 'foundations-0-intro-to-behistorical.html',
    title: 'Intro to BeHistorical'
  },
  {
    code: 'F1',
    n: 1,
    data: 'foundations-1-geography-data.js',
    shell: 'foundations-1-geography.html',
    title: 'Geography Shapes Civilization'
  },
  {
    code: 'F2',
    n: 2,
    data: 'foundations-2-belief-systems-data.js',
    shell: 'foundations-2-belief-systems.html',
    title: 'Belief Systems and Cultural Exchange'
  },
  {
    code: 'F3',
    n: 3,
    data: 'foundations-3-states-power-data.js',
    shell: 'foundations-3-states-power.html',
    title: 'States, Power and Social Organization'
  },
  {
    code: 'F4',
    n: 4,
    data: 'foundations-4-trade-networks-data.js',
    shell: 'foundations-4-trade-networks.html',
    title: 'Trade Networks and Innovation'
  },
  {
    code: 'F5',
    n: 5,
    data: 'foundations-5-world-at-1200-data.js',
    shell: 'foundations-5-world-at-1200.html',
    title: 'The World at c.1200'
  }
];

// Hand-written, student-facing. Derived from each file's `commandCopy`, which is
// addressed to the teacher. Edit here, not in the generated markdown.
//
// F1 is the confirmed reference implementation: it is already live in Canvas and
// its markup is verified correct. Its text is reproduced byte for byte, including
// the `&mdash;` entities, and must not be "cleaned up".
const OVERVIEWS = {
  F0: 'Day 0 is the frame for the whole year. Before you learn a single date, you need to know what this course is asking you to become: a historian, with six specific habits of mind. Today you meet the six AP historical thinking skills in plain language, walk through the 10-module rhythm you will see in every class, and write a baseline snapshot of yourself as a historian on Day 1. That baseline becomes the first entry in the Historian\'s Portfolio you receive in May.',

  F1: 'Geography is the first layer of the AP World operating system. Before you can explain any state, empire, or trade network, you need the event that made all of them possible: the Neolithic Agricultural Revolution, the shift from hunting and gathering to farming. Today you build one causal chain &mdash; geography made farming possible, farming produced surplus, surplus produced civilization &mdash; and you learn to treat geography as an argument, not a backdrop.',

  F2: 'Confucianism, Daoism, Hinduism, Buddhism, Christianity, and Islam were never only private spiritual matters. They were public institutions that organized labor, legitimated authority, structured family life, funded education, and connected communities across enormous distances. Today you learn the core idea of each system, how each one spread, and how each one changed when it entered a new region. Seeing belief systems as institutions rather than only theologies is what lets you analyze them with real historical depth.',

  F3: 'States are not natural. They are constructed solutions to specific problems: every state has to extract resources, defend territory, administer distant populations, and make its rule feel legitimate rather than merely forced. Persia, Han China, Greece, and Rome answered those same four problems in strikingly different ways, through tolerance and delegated satrapies, through centralized bureaucracy and the Mandate of Heaven, through citizen self-rule in the polis, and through law and expanding citizenship. If you can compare those four answers, you can analyze any state you meet in Units 1 through 9.',

  F4: 'Trade routes do not simply move goods. They are systems of human interaction that transform everything they touch. A Sogdian merchant carrying silk from Chang\'an to Samarkand is also carrying Tang court aesthetics, Buddhist monastery patronage networks, diseases bred in crowded Chinese cities, and their own religious practice. The goods are the most visible layer, and the invisible layers are often the more consequential ones. Today you learn to see all of them at once.',

  F5: 'Day 5 does two jobs at once. You build the baseline snapshot of the world at c.1200 CE that every later unit refers back to, and you name the AP historical thinking skills out loud for the first time. Those skills were embedded in everything you did on Days 1 through 4 without being called by name. You leave Foundations holding both the content, what the world looked like at c.1200, and the toolkit, how historians explain it.'
};

// ---------------------------------------------------------------------------

const warnings = [];
function warn(msg) {
  warnings.push(msg);
}

// The data files are plain assignments to `window.FOUNDATION_TOPIC`. Running one
// in a bare vm context is exact, where a regex over the source would quietly
// mis-handle the apostrophes and commas these arrays are full of.
function loadTopic(file) {
  const src = fs.readFileSync(path.join(ROOT, 'foundations', file), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: file });
  const topic = sandbox.window.FOUNDATION_TOPIC;
  if (!topic) throw new Error(`${file} did not set window.FOUNDATION_TOPIC`);
  return topic;
}

// Escaped for HTML, not rewritten. The target text itself is never edited: a
// literal & would be invalid markup, and &amp; renders as the same character.
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function requireList(day, topic, field) {
  const list = topic[field];
  if (!Array.isArray(list) || list.length === 0) {
    warn(`${day.code}: \`${field}\` is missing or empty. Row left blank; do not paste this event.`);
    return [];
  }
  if (list.length !== 3) {
    warn(`${day.code}: \`${field}\` has ${list.length} items, expected 3.`);
  }
  list.forEach((item, i) => {
    if (typeof item !== 'string' || !item.trim()) {
      warn(`${day.code}: \`${field}\`[${i}] is empty or not a string.`);
    }
  });
  return list;
}

const LABEL_CELL = '            <td style="width: 20%; vertical-align: top; background-color: #f0f0f0;">';

function row(label, content) {
  return [
    '        <tr>',
    LABEL_CELL,
    `                <h3>${label}</h3>`,
    '            </td>',
    '            <td style="vertical-align: top;">',
    content,
    '            </td>',
    '        </tr>'
  ].join('\n');
}

function orderedList(items) {
  if (!items.length) return '                <ol></ol>';
  return [
    '                <ol>',
    ...items.map(t => `                    <li>${esc(t)}</li>`),
    '                </ol>'
  ].join('\n');
}

function buildTable(day, topic) {
  const overview = OVERVIEWS[day.code];
  if (!overview) warn(`${day.code}: no OVERVIEW prose in the OVERVIEWS table.`);

  const targets = requireList(day, topic, 'learningTargets');
  const criteria = requireList(day, topic, 'successCriteria');

  const shellPath = path.join(ROOT, 'foundations', day.shell);
  if (!fs.existsSync(shellPath)) {
    warn(`${day.code}: shell file foundations/${day.shell} does not exist.`);
  }

  const linkText = `Foundations ${day.n} - ${day.title}`;
  const href = `${BASE_URL}/${day.shell}`;

  return [
    '<table style="border-collapse: collapse; width: 100%; border-color: #000000; border-style: solid;" border="3" cellpadding="8">',
    '    <tbody>',
    row('OVERVIEW', `                <p>${overview || ''}</p>`),
    row('LEARNING TARGETS', orderedList(targets)),
    row('SUCCESS CRITERIA', orderedList(criteria)),
    row(
      'BeHistorical Link',
      `                <p><a class="inline_disabled" href="${href}" target="_blank" rel="noopener">${linkText}</a></p>`
    ),
    row('ASSIGNMENT', '                <p>[INSERT ASSIGNMENT LINK]</p>'),
    '    </tbody>',
    '</table>'
  ].join('\n');
}

function build() {
  const out = [];

  out.push('# Foundations Calendar Events, Paste-Ready');
  out.push('');
  out.push('**Generated by `tools/build-canvas-events.js`. Do not hand-edit.**');
  out.push('LEARNING TARGETS and SUCCESS CRITERIA are lifted verbatim from the six');
  out.push('`foundations/foundations-*-data.js` files. Change a target in the data file and');
  out.push('rerun the generator; never edit a target in Canvas, and never edit it here.');
  out.push('');
  out.push('OVERVIEW prose is hand-written in the `OVERVIEWS` table inside the generator,');
  out.push('because each data file\'s `commandCopy` is addressed to the teacher and must not');
  out.push('be pasted at students raw. Edit it there, then rerun.');
  out.push('');
  out.push('```bash');
  out.push('node tools/build-canvas-events.js          # write');
  out.push('node tools/build-canvas-events.js --check  # fail on drift, write nothing');
  out.push('```');
  out.push('');
  out.push('## How to paste one of these');
  out.push('');
  out.push('1. Canvas Calendar, click the day, **Edit**, then **More Options**.');
  out.push('2. Title the event exactly as given below.');
  out.push('3. In the Rich Content Editor, click the **`</>`** icon to open the HTML editor.');
  out.push('   **Never paste this into the visual editor.** Pasting rendered HTML there');
  out.push('   injects wrapper `<div>`s and inline font declarations that collapse the table.');
  out.push('4. Paste the whole `<table>` block.');
  out.push('5. Switch back to the visual editor, delete the `[INSERT ASSIGNMENT LINK]`');
  out.push('   placeholder text, and insert the real assignment from the right-hand');
  out.push('   course-links panel, **Assignments**, click the assignment. Do not hand-type');
  out.push('   that link; see Section 5 of `CANVAS-BUILD-GUIDE.md` for why.');
  out.push('6. Save.');
  out.push('');
  out.push('All six links point at the live GitHub Pages build:');
  out.push('`https://jeffandersonlogic.github.io/ap-world-history/foundations/`');
  out.push('');
  out.push('---');
  out.push('');

  DAYS.forEach(day => {
    const topic = loadTopic(day.data);
    const eventTitle = `APW - ${day.code} - ${day.title}`;

    out.push(`## ${eventTitle}`);
    out.push('');
    out.push(`**Event title:** \`${eventTitle}\`  `);
    out.push(`**Assignment to link:** \`${day.code} - ${assignmentShortTitle(day)}\`  `);
    out.push(`**Source data file:** \`foundations/${day.data}\`  `);
    out.push(`**Lesson page:** \`foundations/${day.shell}\``);
    out.push('');
    out.push('```html');
    out.push(buildTable(day, topic));
    out.push('```');
    out.push('');
    out.push('---');
    out.push('');
  });

  out.push('*Regenerate with `node tools/build-canvas-events.js` after any change to a*');
  out.push('*`learningTargets` or `successCriteria` array.*');
  out.push('');

  return out.join('\n');
}

// Assignment names are ASCII-only and short, because they must match PowerSchool
// character for character and PowerSchool caps the length.
const SHORT_TITLES = {
  F0: 'Intro to BeHistorical',
  F1: 'Geo Shapes Civilization',
  F2: 'Belief Systems',
  F3: 'States and Power',
  F4: 'Trade Networks',
  F5: 'World at c.1200 SAQ'
};
function assignmentShortTitle(day) {
  const t = SHORT_TITLES[day.code];
  if (!t) {
    warn(`${day.code}: no short assignment title.`);
    return day.title;
  }
  if (!/^[\x20-\x7E]+$/.test(t)) {
    warn(`${day.code}: assignment short title "${t}" contains non-ASCII characters.`);
  }
  return t;
}

function main() {
  const check = process.argv.includes('--check');
  let text;
  try {
    text = build();
  } catch (err) {
    console.error(`build-canvas-events: ${err.message}`);
    process.exit(1);
  }

  warnings.forEach(w => console.error(`WARNING  ${w}`));

  if (check) {
    const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
    if (current !== text) {
      console.error('FAIL  docs/canvas/foundations-calendar-events.md is out of date.');
      console.error('      Run: node tools/build-canvas-events.js');
      process.exit(1);
    }
    console.log('OK  foundations-calendar-events.md matches the data files.');
    return;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, text);
  console.log(`Wrote docs/canvas/foundations-calendar-events.md (${text.split('\n').length} lines)`);
  if (warnings.length) process.exit(1);
}

main();
