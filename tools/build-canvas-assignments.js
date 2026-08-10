#!/usr/bin/env node
'use strict';

// Regenerate docs/canvas/foundations-assignment-instructions.md from the
// Foundations data files.
//
// Same contract as tools/build-canvas-events.js: SUCCESS CRITERIA are lifted
// verbatim out of `successCriteria` and nothing here rewrites them, so a change
// to a data file cannot silently leave the Canvas assignment body describing a
// criterion that no longer exists.
//
// The student-facing framing (the module bullet list, the checkpoint wording,
// the F5 reflection questions) is hand-written in the DAYS table below, because
// the data file's prompts are addressed to the teacher or carry markup students
// should not see. Edit it there, then rerun.
//
// F0 is deliberately absent. Its assignment instructions have not been authored,
// and inventing them here would put words in the teacher's mouth. See the gap
// note the generator emits at the end of the document.
//
// Node built-ins only. `--check` fails on drift without writing.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'canvas', 'foundations-assignment-instructions.md');
const BASE_URL = 'https://jeffandersonlogic.github.io/ap-world-history/foundations';

// The nine module rows every Foundations day renders. Taken from the `modules`
// array in foundations/foundations-topic-renderer.js. Module 09, BeInTheRoom, is
// absent on purpose: no Foundations data file sets `beInTheRoom.url`, so the
// renderer draws a coming-soon placeholder there on all six days and there is
// nothing for a student to do in it. See Section 10 of CANVAS-BUILD-GUIDE.md.
//
// `map` and `first10` are per-day and supplied in DAYS. `skill` is read out of
// the data file's `skill.title` so a skill rename cannot leave this list stale.
const FIXED_MODULES = {
  contentdelivery: '<strong>Content Delivery</strong> &mdash; all lecture cards.',
  besurreal: '<strong>BeSurreal</strong>',
  checkpoint1: '<strong>Checkpoint 1</strong>',
  evidence: '<strong>Evidence Lab</strong>',
  coach: '<strong>Socrates AI Coach</strong>',
  checkpoint2: '<strong>Checkpoint 2</strong>'
};

// One entry per authored day.
//
// F1 is the confirmed reference implementation: its body is already live in
// Canvas and its markup is verified. Its text is reproduced byte for byte,
// including the `&mdash;` entities, and must not be "cleaned up". F2 through F5
// are built to the identical shape.
//
// `map` and `first10` restate that day's Map Check and First & 10 rows from the
// data file's `blockPlan`, in student voice. `checkpoint` condenses that file's
// `checkpoint.prompt` into an instruction a student can act on.
const DAYS = [
  {
    code: 'F1',
    n: 1,
    data: 'foundations-1-geography-data.js',
    shell: 'foundations-1-geography.html',
    title: 'Geography Shapes Civilization',
    subtitle: 'How did geography drive the shift from hunter-gatherer bands to the first civilizations?',
    map: '<strong>Map &amp; Geography Check</strong> &mdash; locate the four great river valleys, the Fertile Crescent, and the grasslands. Predict where agriculture begins and why.',
    first10: '<strong>First &amp; 10</strong> &mdash; the Neolithic Revolution. Mark one geographic advantage, one consequence of surplus, and one cost of switching to farming.',
    checkpoint: 'Explain how geography made the shift from hunting and gathering to civilization possible. Identify a specific geographic condition, connect it to the beginning of agriculture, and explain how the resulting surplus produced at least one characteristic of civilization. Use cause-and-effect reasoning.'
  },
  {
    code: 'F2',
    n: 2,
    data: 'foundations-2-belief-systems-data.js',
    shell: 'foundations-2-belief-systems.html',
    title: 'Belief Systems and Cultural Exchange',
    subtitle: 'How did six major belief systems, Confucianism, Daoism, Hinduism, Buddhism, Christianity, and Islam, shape societies and spread across the world?',
    map: '<strong>Map &amp; Geography Check</strong> &mdash; trace how Buddhism spread from India across Asia. Identify the routes it followed and the mechanism behind each, trade, state adoption, or missionaries, and treat it as the model for how all six systems moved.',
    first10: '<strong>First &amp; 10</strong> &mdash; six belief systems in one survey. Mark the core idea of each, and one example of syncretism, a belief system changing as it entered a new region.',
    checkpoint: 'Choose ONE of the six belief systems and explain how it functioned as a social institution in a specific region before c.1200. Name the belief system, identify a specific institutional function it performed, and support the claim with historical evidence.'
  },
  {
    code: 'F3',
    n: 3,
    data: 'foundations-3-states-power-data.js',
    shell: 'foundations-3-states-power.html',
    title: 'States, Power and Social Organization',
    subtitle: 'How did classical states, Persia, Han China, Greece, and Rome, organize power, hierarchy, and legitimacy in different ways?',
    map: '<strong>Map &amp; Geography Check</strong> &mdash; locate Rome, Han China, and Parthian Persia at c.200 CE. For each, name one tool of rule and the governance problem that tool was solving.',
    first10: '<strong>First &amp; 10</strong> &mdash; four ways to hold power. Mark how Persia, Han China, Greece, and Rome each organized power, and one limit or form of resistance each of them faced.',
    checkpoint: 'Choose ONE of the four classical states, Persia, Han China, Greece, or Rome, and explain how it organized power. Identify a specific tool of rule, explain the governance problem it solved, give specific historical evidence, and explain one limit or consequence of that tool.'
  },
  {
    code: 'F4',
    n: 4,
    data: 'foundations-4-trade-networks-data.js',
    shell: 'foundations-4-trade-networks.html',
    title: 'Trade Networks and Innovation',
    subtitle: 'How do trade networks transform societies?',
    map: '<strong>Map &amp; Geography Check</strong> &mdash; identify the three major Afro-Eurasian trade systems, the Silk Roads, the Indian Ocean, and the trans-Saharan network, and one port city or oasis on each. Explain why its position made it powerful.',
    first10: '<strong>First &amp; 10</strong> &mdash; the Battle of Talas and three networks that moved the world. Mark one technology transfer, one mechanism of diffusion, and one unintended consequence.',
    checkpoint: 'Explain how one specific trade network before c.1200 moved more than goods. Name the network, identify at least two non-goods that moved through it, explain how each traveled, and describe one historical consequence of that movement.'
  },
  {
    code: 'F5',
    n: 5,
    data: 'foundations-5-world-at-1200-data.js',
    shell: 'foundations-5-world-at-1200.html',
    title: 'The World at c.1200',
    subtitle: 'What does the world look like at c.1200, and how do historians explain it?',
    map: '<strong>Map &amp; Geography Check</strong> &mdash; place the six AP World regions on the map, attach one fact from Foundations 1 through 4 to each, and locate the trade networks connecting them.',
    first10: '<strong>First &amp; 10</strong> &mdash; six windows on c.1200. For each regional snapshot, mark which Foundations theme, geography, belief systems, states and power, or trade networks, best explains it.',
    checkpoint: 'This is your first complete AP-style SAQ. Respond to this prompt using everything from the Foundations unit: <em>Explain how the historical conditions that developed before c.1200 shaped the world that AP World History begins studying.</em> Your response needs a defensible claim, specific evidence from at least two Foundations days, and explicit reasoning that connects your evidence to your claim.',
    // F5 is the only day carrying SAQ framing and a reflection block, because it
    // is the first graded AP-style writing of the course and the handoff into
    // Unit 1. The draft-it-yourself language is deliberate: Socrates is a
    // revision tool here, not a drafting tool.
    saqFraming: [
      '<h3>What an SAQ is</h3>',
      '<p>A Short Answer Question is not an essay. It is one tight paragraph that does three things and stops: it makes a <strong>claim</strong> that answers the prompt directly, it supplies <strong>specific evidence</strong>, a named institution, person, place, date, or practice, and it supplies <strong>reasoning</strong> that explains why that evidence proves the claim. No introduction. No conclusion. No restating the prompt.</p>',
      '<p><strong>Draft it yourself first.</strong> Write your full response before you open the Socrates AI Coach. The Coach is a revision tool, not a drafting tool, and a paragraph it wrote for you tells me nothing about what you can do in May, when you will be writing this by hand with no coach in the room. Write it badly if you have to. Then use Socrates to make it sharper.</p>'
    ].join('\n'),
    reflection: [
      'Which of the five AP historical thinking skills do you feel most ready to use in Unit 1, and what in the Foundations unit made you feel ready?',
      'Which part of your SAQ still feels weakest, the claim, the evidence, or the reasoning, and what would you need in order to fix it?',
      'Which Foundations theme, geography, belief systems, states and power, or trade networks, does your argument depend on most? Name it. That is your contextualization.'
    ]
  }
];

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

// Escaped for HTML, not rewritten. The criterion text itself is never edited: a
// literal & would be invalid markup, and &amp; renders as the same character.
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function requireCriteria(day, topic) {
  const list = topic.successCriteria;
  if (!Array.isArray(list) || list.length === 0) {
    warn(`${day.code}: \`successCriteria\` is missing or empty. Section left blank; do not paste this assignment.`);
    return [];
  }
  if (list.length !== 3) {
    warn(`${day.code}: \`successCriteria\` has ${list.length} items, expected 3.`);
  }
  list.forEach((item, i) => {
    if (typeof item !== 'string' || !item.trim()) {
      warn(`${day.code}: \`successCriteria\`[${i}] is empty or not a string.`);
    }
  });
  return list;
}

// The AP Skill Builder row is the one module whose label changes per day, so it
// is read from the data file rather than restated here.
function skillModule(day, topic) {
  const title = topic.skill && topic.skill.title;
  if (!title) {
    warn(`${day.code}: \`skill.title\` is missing. Module list will name the module generically.`);
    return '<strong>AP Skill Builder</strong>';
  }
  return `<strong>${esc(title)}</strong>`;
}

function moduleList(day, topic) {
  const items = [
    day.map,
    day.first10,
    FIXED_MODULES.contentdelivery,
    FIXED_MODULES.besurreal,
    skillModule(day, topic),
    FIXED_MODULES.checkpoint1,
    FIXED_MODULES.evidence,
    FIXED_MODULES.coach,
    FIXED_MODULES.checkpoint2
  ];
  return ['<ul>', ...items.map(i => `<li>${i}</li>`), '</ul>'].join('\n');
}

function orderedList(items) {
  if (!items.length) return '<ol></ol>';
  return ['<ol>', ...items.map(t => `<li>${esc(t)}</li>`), '</ol>'].join('\n');
}

function buildBody(day, topic) {
  const shellPath = path.join(ROOT, 'foundations', day.shell);
  if (!fs.existsSync(shellPath)) {
    warn(`${day.code}: shell file foundations/${day.shell} does not exist.`);
  }

  const criteria = requireCriteria(day, topic);
  const href = `${BASE_URL}/${day.shell}`;
  const linkText = `Foundations ${day.n} - ${day.title}`;

  const out = [];
  out.push(`<h2>Foundations ${day.n}: ${day.title}</h2>`);
  out.push(`<p><em>${day.subtitle}</em></p>`);

  out.push('<h3>Step 1 &mdash; Open the lesson</h3>');
  out.push(`<p><a href="${href}" target="_blank" rel="noopener">${linkText}</a></p>`);
  out.push('<p>Everything happens on the website. There is nothing to download.</p>');

  out.push('<h3>Step 2 &mdash; Complete every module</h3>');
  out.push('<p>Work top to bottom and complete all of them. Read the three Learning Targets and the Success Criteria before you start.</p>');
  out.push(moduleList(day, topic));
  out.push('<p><strong>Type a real response in every box.</strong> Gather All My Work collects exactly what you typed and nothing else. An empty box is an empty box in your submission, and it is the only record I see.</p>');

  if (day.saqFraming) out.push(day.saqFraming);

  out.push('<h3>Step 3 &mdash; The Checkpoint</h3>');
  out.push(`<p>${day.checkpoint}</p>`);

  if (day.reflection) {
    out.push('<h3>Step 4 &mdash; Reflect before you submit</h3>');
    out.push('<p>Answer these three in the Checkpoint 2 box, under your SAQ. They close out the Foundations unit.</p>');
    out.push(orderedList(day.reflection));
    out.push('<h3>Step 5 &mdash; Submit in Canvas</h3>');
  } else {
    out.push('<h3>Step 4 &mdash; Submit in Canvas</h3>');
  }

  out.push('<ol>');
  out.push('<li>Scroll to the <strong>Save Your Work</strong> panel below the module cards.</li>');
  out.push('<li>Click <strong>Gather All My Work</strong>. This pulls every response you typed today into one block.</li>');
  out.push('<li>Click <strong>Copy to Clipboard</strong>.</li>');
  out.push('<li>Paste everything into the submission box below and click Submit.</li>');
  out.push('</ol>');
  out.push('<p><strong>This is the only way your work reaches me.</strong> BeHistorical saves your typing in the browser on the device you used, but that is not a submission and it does not follow you to another Chromebook. If you do not submit in Canvas, I have no record that you did the work.</p>');

  out.push('<h3>Due</h3>');
  out.push('<p>The beginning of our next AP World History class period.</p>');

  out.push('<h3>Success criteria</h3>');
  out.push(orderedList(criteria));

  return out.join('\n');
}

// Assignment names are ASCII-only and short, because they must match PowerSchool
// character for character and PowerSchool caps the length.
const SHORT_TITLES = {
  F1: 'Geo Shapes Civilization',
  F2: 'Belief Systems',
  F3: 'States and Power',
  F4: 'Trade Networks',
  F5: 'World at c.1200 SAQ'
};
const POINTS = { F1: 20, F2: 20, F3: 20, F4: 20, F5: 30 };

function assignmentName(day) {
  const t = SHORT_TITLES[day.code];
  if (!t) {
    warn(`${day.code}: no short assignment title.`);
    return `${day.code} - ${day.title}`;
  }
  const name = `${day.code} - ${t}`;
  if (!/^[\x20-\x7E]+$/.test(name)) {
    warn(`${day.code}: assignment name "${name}" contains non-ASCII characters.`);
  }
  return name;
}

function build() {
  const out = [];

  out.push('# Foundations Assignment Instructions, Paste-Ready');
  out.push('');
  out.push('**Generated by `tools/build-canvas-assignments.js`. Do not hand-edit.**');
  out.push('The `Success criteria` list at the bottom of every body is lifted verbatim from');
  out.push('that day\'s `successCriteria` array in `foundations/foundations-*-data.js`.');
  out.push('Change a criterion in the data file and rerun the generator; never edit one in');
  out.push('Canvas, and never edit one here.');
  out.push('');
  out.push('The student-facing framing, the module bullets, the checkpoint wording, and the');
  out.push('F5 reflection questions, is hand-written in the `DAYS` table inside the');
  out.push('generator, because the data file\'s prompts are addressed to the teacher. Edit it');
  out.push('there, then rerun.');
  out.push('');
  out.push('```bash');
  out.push('node tools/build-canvas-assignments.js          # write');
  out.push('node tools/build-canvas-assignments.js --check  # fail on drift, write nothing');
  out.push('```');
  out.push('');
  out.push('## How to paste one of these');
  out.push('');
  out.push('1. Canvas, **Assignments**, then the assignment named in the heading below, or');
  out.push('   **+ Assignment** if it does not exist yet.');
  out.push('2. Name it exactly as given. That name has to match PowerSchool character for');
  out.push('   character; see Section 2 of `CANVAS-BUILD-GUIDE.md`.');
  out.push('3. In the Rich Content Editor, click the **`</>`** icon to open the HTML editor.');
  out.push('   **Never paste this into the visual editor.** Pasting rendered HTML there');
  out.push('   injects wrapper `<div>`s and inline font declarations.');
  out.push('4. Paste the whole block.');
  out.push('5. Set the assignment options from the table under each heading, and set due');
  out.push('   dates **per section** using the **+Add** row in *Assign To*. ZCHS runs an');
  out.push('   alternating Green/Silver block schedule, so "the beginning of our next class');
  out.push('   period" is a different calendar date for each section. One blanket due date');
  out.push('   marks two or three sections late through no fault of their own.');
  out.push('6. Save, then build the calendar event for that day from');
  out.push('   `foundations-calendar-events.md` and insert this assignment into its');
  out.push('   ASSIGNMENT row through the course-links panel.');
  out.push('');
  out.push('Every link points at the live GitHub Pages build:');
  out.push('`https://jeffandersonlogic.github.io/ap-world-history/foundations/`');
  out.push('');
  out.push('## The submission path these bodies describe');
  out.push('');
  out.push('Verified against `foundations/foundations-topic-renderer.js`. Students complete');
  out.push('every module on the live site, then use the **Save Your Work** panel below the');
  out.push('module cards: **Gather All My Work**, then **Copy to Clipboard**, then paste into');
  out.push('the Canvas Text Entry box. There is nothing to download and no second capture');
  out.push('channel: no draft box on any Foundations page carries any other submit control.');
  out.push('See `FORM-REMOVAL-FINDINGS.md` for the audit behind that statement.');
  out.push('');
  out.push('---');
  out.push('');

  DAYS.forEach(day => {
    const topic = loadTopic(day.data);

    out.push(`## ${assignmentName(day)}`);
    out.push('');
    out.push(`**Assignment name (Canvas and PowerSchool, identical):** \`${assignmentName(day)}\`  `);
    out.push(`**Points:** ${POINTS[day.code]}  |  **Submission type:** Online, Text Entry  |  **Attempts:** Unlimited  |  **Assignment group:** Foundations  `);
    out.push(`**Source data file:** \`foundations/${day.data}\`  `);
    out.push(`**Lesson page:** \`foundations/${day.shell}\``);
    out.push('');
    out.push('```html');
    out.push(buildBody(day, topic));
    out.push('```');
    out.push('');
    out.push('---');
    out.push('');
  });

  out.push('## F0 has no assignment body');
  out.push('');
  out.push('`F0 - Intro to BeHistorical` is a real assignment in the module structure and it');
  out.push('appears in `foundations-calendar-events.md`, but its Canvas description has not');
  out.push('been authored. Nothing in this file covers it, and nothing here should be adapted');
  out.push('into it by hand: F0 is the only Foundations day whose checkpoint is a Historian\'s');
  out.push('Pledge rather than a content response, and its module bullets, framing, and');
  out.push('grading weight, 10 points against the 20 that F1 through F4 carry, all differ.');
  out.push('');
  out.push('When it is written, add an `F0` entry to the `DAYS` table in');
  out.push('`tools/build-canvas-assignments.js` and rerun, so its success criteria stay');
  out.push('bound to `foundations/foundations-0-intro-to-behistorical-data.js` the same way');
  out.push('the other five are.');
  out.push('');
  out.push('---');
  out.push('');
  out.push('*Regenerate with `node tools/build-canvas-assignments.js` after any change to a*');
  out.push('*`successCriteria` array or a `skill.title`.*');
  out.push('');

  return out.join('\n');
}

function main() {
  const check = process.argv.includes('--check');
  let text;
  try {
    text = build();
  } catch (err) {
    console.error(`build-canvas-assignments: ${err.message}`);
    process.exit(1);
  }

  warnings.forEach(w => console.error(`WARNING  ${w}`));

  if (check) {
    const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
    if (current !== text) {
      console.error('FAIL  docs/canvas/foundations-assignment-instructions.md is out of date.');
      console.error('      Run: node tools/build-canvas-assignments.js');
      process.exit(1);
    }
    console.log('OK  foundations-assignment-instructions.md matches the data files.');
    return;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, text);
  console.log(`Wrote docs/canvas/foundations-assignment-instructions.md (${text.split('\n').length} lines)`);
  if (warnings.length) process.exit(1);
}

main();
