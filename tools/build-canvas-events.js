#!/usr/bin/env node
'use strict';

// Regenerate the paste-ready Canvas calendar events under docs/canvas/ from the
// lesson data files:
//
//   docs/canvas/foundations-calendar-events.md   the six Foundations days
//   docs/canvas/unit-1-calendar-events.md        Topics 1.1 to 1.7
//   docs/canvas/unit-2-calendar-events.md        Topics 2.1 to 2.7
//
// The whole point of this script is that a Learning Target edit cannot silently
// leave Canvas stale. LEARNING TARGETS and SUCCESS CRITERIA are lifted verbatim
// out of `learningTargets` and `successCriteria`; nothing here rewrites them.
//
// OVERVIEW is the one cell that is not machine-derived, because the teacher-facing
// prose it is written from must not be pasted at students raw. That prose lives in
// the OVERVIEWS tables below so a regeneration never overwrites it.
//
// Node built-ins only. `--check` fails on drift without writing.

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const consolePage = require('./canvas-console-page.js');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'docs', 'canvas');
const SITE_URL = 'https://jeffandersonlogic.github.io/ap-world-history';
const BASE_URL = `${SITE_URL}/foundations`;

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
// Units 1 and 2.
//
// A unit topic is not one data file. The lesson shell loads a topic data file and
// then a renderer-config file, and the config is what students see where the two
// disagree; see Section 11 of CANVAS-BUILD-GUIDE.md. So the scripts are read out
// of the shell in the order the shell loads them and run in that order, rather
// than named here. A future addon file is then picked up by existing, and picked
// up in the right position.
//
// `title` is the Canvas object name. Unit titles in the data files carry a colon
// and a second half written for the lesson page's hero, which is longer than a
// calendar chip shows; the Canvas name is the first half. Spell out any ampersand
// and drop any forward slash, per Section 2.
const UNITS = [
  {
    unit: 1,
    dir: 'unit-1',
    name: 'The Global Tapestry',
    hub: `${SITE_URL}/unit-1/index.html`,
    topics: [
      { code: '1.1', shell: 'lesson-1-1-song-china.html',            title: 'Song China' },
      { code: '1.2', shell: 'lesson-1-2-dar-al-islam.html',          title: 'Developments in Dar al-Islam' },
      { code: '1.3', shell: 'lesson-1-3-south-southeast-asia.html',  title: 'Developments in South and Southeast Asia' },
      { code: '1.4', shell: 'lesson-1-4-americas.html',              title: 'State Building in the Americas' },
      { code: '1.5', shell: 'lesson-1-5-africa.html',                title: 'State Building in Africa' },
      { code: '1.6', shell: 'lesson-1-6-europe.html',                title: 'Developments in Europe' },
      { code: '1.7', shell: 'lesson-1-7-comparison.html',            title: 'Comparison in the Period from c. 1200 to c. 1450' }
    ]
  },
  {
    unit: 2,
    dir: 'unit-2',
    name: 'Networks of Exchange',
    hub: `${SITE_URL}/unit-2/index.html`,
    topics: [
      { code: '2.1', shell: 'lesson-2-1-silk-roads.html',                  title: 'The Silk Roads' },
      { code: '2.2', shell: 'lesson-2-2-mongol-empire.html',               title: 'The Mongol Empire' },
      { code: '2.3', shell: 'lesson-2-3-indian-ocean.html',                title: 'Exchange in the Indian Ocean' },
      { code: '2.4', shell: 'lesson-2-4-trans-saharan.html',               title: 'Trans-Saharan Trade Routes' },
      { code: '2.5', shell: 'lesson-2-5-cultural-consequences.html',       title: 'Cultural Consequences of Connectivity' },
      { code: '2.6', shell: 'lesson-2-6-environmental-consequences.html',  title: 'Environmental Consequences of Connectivity' },
      { code: '2.7', shell: 'lesson-2-7-comparison.html',                  title: 'Comparison of Economic Exchange' }
    ]
  }
];

// Hand-written, student-facing, second person, two to four sentences. Unit data
// files carry no `commandCopy`, so these are written from the topic's own
// `lecture.intro`, learning targets, and success criteria. They name only what the
// lesson teaches; nothing here introduces content the lesson does not carry.
const UNIT_OVERVIEWS = {
  '1.1': 'Song China ran on a system rather than on one strong ruler, and today you take that system apart. You trace how Confucianism, the imperial bureaucracy, and the civil service exam decided who governed and made that rule feel legitimate; how Chinese cultural traditions and Buddhism kept shaping East Asia and its neighbors; and how Champa rice, the Grand Canal, paper money, and expanding trade built one of the most commercialized economies of the postclassical world. The work is connecting each piece of evidence to a specific effect, not listing the pieces.',

  '1.2': 'By c. 1200 the Abbasid Caliphate no longer held political control of the Islamic world, and Dar al-Islam kept expanding anyway. Today you work out how both things are true at once: political fragmentation into states such as the Seljuk Empire, the Mamluk Sultanate, and the Delhi Sultanate, alongside continued expansion carried by merchants, missionaries, and Sufi networks rather than only by armies. You also examine what scholars in those states did with translation, paper-making, mathematics, medicine, astronomy, and geography, and why that scholarship traveled as far as it did.',

  '1.3': 'South and Southeast Asia is where you watch belief systems work as political tools. Hinduism, Buddhism, and Islam each shaped the societies here, and the states used them: Vijayanagara and the Khmer Empire built power on land, while Srivijaya and Majapahit built it on straits and ports. Today you compare a land-based route to power with a maritime one, and connect trade routes, ports, monsoon winds, and merchant communities to the political and cultural change that followed.',

  '1.4': 'State building in the Americas happened without contact with Afro-Eurasia, which makes it the cleanest test in Unit 1 of what states have in common. Today you examine Maya city-states, the Mexica, the Inca, and the North American societies at Chaco, Mesa Verde, and Cahokia, asking the same questions of each: how power was organized, what stayed continuous, what was genuinely new, and how far the system reached. You also practice naming the evidence a source uses to support its argument, which is a skill the exam tests directly.',

  '1.5': 'Great Zimbabwe, Ethiopia, and the Hausa city-states each built power out of what their position gave them. Today you connect Great Zimbabwe\'s stone enclosures and gold to Indian Ocean trade, Ethiopia\'s Solomonic dynasty and Christianity to control of Red Sea routes, and Hausa Islamic administration to the trans-Saharan network. The move worth practicing is treating religion as a tool of governance and not only as belief: ask what work Christianity or Islam actually did for the ruler using it.',

  '1.6': 'Europe is the outlier of Unit 1, and that is exactly what makes it useful. Where Song China centralized, Europe fragmented: monarchs shared power with nobles and with the Church, feudalism and manorialism organized land and labor, and towns, guilds, and reviving trade began to loosen both. Today you build the European arrangement as a system, then set it beside Song China, Dar al-Islam, Africa, the Americas, and South and Southeast Asia to say what that fragmentation cost and what it made possible.',

  '1.7': 'Comparison is a skill rather than a list, and today you practice it on everything Unit 1 has given you. You take two regions, name one meaningful similarity and one meaningful difference, and support each with specific evidence such as Song bureaucracy, Dar al-Islam scholarship, Mali trade, Inca roads, or European feudalism. Then you do the part most students skip: explain why that similarity or difference existed. A comparison that only names earns little; a comparison that explains is the essay.',

  '2.1': 'The Silk Roads were not a road. They were a maintained system: relay stations, caravanserais, pastoral nomads who knew the steppe, and states willing to protect merchants because taxing them paid. Today you explain what made overland trade across Afro-Eurasia possible, what moved along it, silk, spices, porcelain, paper, gunpowder, Buddhism, Islam, and eventually plague, and what it did to the societies on its length. Wealth, urban growth, and the Black Death all traveled the same infrastructure.',

  '2.2': 'The Mongols built the largest contiguous land empire in world history, and the exam wants both halves of what that meant. Today you explain how they did it, through cavalry tactics, siege warfare, Genghis Khan\'s unification of the steppe, and the khanate system that governed afterward, and then what followed: the Pax Mongolica, the Yam postal relay, protected merchants, and travelers such as Marco Polo and Ibn Battuta. Hold the destruction and the connection together, because an answer that gives only one side is incomplete.',

  '2.3': 'Indian Ocean trade ran on knowledge of the environment. The monsoon winds reverse with the season, and a merchant who knew the schedule could sail out and come back, which is why this network carried bulk goods the overland routes never could. Today you connect dhow construction, the magnetic compass, and monsoon timing to what crossed, spices, textiles, gold, and ivory, and to who crossed with it, Arab, Persian, Indian, Chinese, and Swahili merchants. Then you explain the cosmopolitan port cities and diasporic communities that grew at Kilwa, Calicut, Quanzhou, and Malacca.',

  '2.4': 'The Sahara is the hostile environment on this list, and the camel is the reason it became commercially crossable. Today you explain the technology, the camel\'s physiology, the redesigned saddle, caravan organization, and the oases that made the route survivable, then the exchange itself: West African gold for Saharan salt, each side holding what the other could not get. From there you follow the consequences, the rise of Mali, Mansa Musa\'s 1324 hajj, Timbuktu as a center of Islamic learning, and Islam spreading through merchant and scholarly networks.',

  '2.5': 'Trade routes moved more than goods, and the cargo that lasted longest was usually the least visible. Today you follow what diffused: Buddhism, Islam, Christianity, and Hinduism along named routes; paper, printing, gunpowder, the compass, and the stirrup across Afro-Eurasia; and the crops, architectural styles, artistic motifs, and literary traditions that arrived with the merchants carrying them. For each one, be ready to say where it started, where it went, and what changed when it got there.',

  '2.6': 'The same networks that moved silk moved rats, fleas, and bacteria. Today you trace the bubonic plague out of Central Asia across Eurasia and North Africa, naming a mechanism of transmission rather than only a route, and then work through what it did: population loss, labor shortages, and a challenge to traditional authority that outlasted the outbreak. You also examine the slower environmental cost of connectivity, including deforestation, agricultural intensification, and species carried to places they had never reached.',

  '2.7': 'Unit 2 ends on the comparison the exam asks for most often. Today you state what the Silk Roads, the Indian Ocean, and the trans-Saharan routes shared, long-distance exchange, the movement of ideas alongside goods, and cultural diffusion, and then what separated them in geography, transport technology, and dominant goods. Every claim needs a concrete example under it, and the strongest answers use the comparison to say something about Afro-Eurasian connectivity as a whole.'
};

// ---------------------------------------------------------------------------

const warnings = [];
function warn(msg) {
  warnings.push(msg);
}

// Every event the markdown describes, collected as it is built, so the paste
// console renders from the same tables rather than from a second derivation.
// A console that could disagree with the markdown would be the drift this whole
// generator exists to refuse, one layer up.
const VOLUMES_OUT = [];

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

// Unit data files open with an IIFE that rewrites the page's logo links, so the
// sandbox needs a document that answers without doing anything. Nothing in that
// IIFE touches the fields read here; stubbing it is cheaper and more honest than
// stripping it with a regex.
function stubDocument() {
  const node = {
    setAttribute() {}, appendChild() {}, insertBefore() {},
    closest() { return null; }, style: {}, classList: { add() {}, remove() {} }
  };
  node.parentNode = node;
  return {
    querySelector() { return null; },
    querySelectorAll() { return []; },
    createElement() { return Object.assign({}, node); },
    head: node,
    body: node
  };
}

// Read the shell for the data scripts it loads, in order, and run them in one
// context. That is what the browser does, and it is why the renderer-config wins
// over the topic data file wherever the two set the same field.
function loadUnitTopic(unit, topic) {
  const shellPath = path.join(ROOT, unit.dir, topic.shell);
  const html = fs.readFileSync(shellPath, 'utf8');
  const scripts = [...html.matchAll(/assets\/data\/([A-Za-z0-9._-]+\.js)/g)].map(m => m[1]);
  if (!scripts.length) {
    throw new Error(`${unit.dir}/${topic.shell} loads no assets/data script`);
  }

  const sandbox = { window: {}, document: stubDocument() };
  sandbox.window.document = sandbox.document;
  vm.createContext(sandbox);
  for (const file of scripts) {
    const full = path.join(ROOT, 'assets', 'data', file);
    if (!fs.existsSync(full)) {
      throw new Error(`${unit.dir}/${topic.shell} loads assets/data/${file}, which does not exist`);
    }
    vm.runInContext(fs.readFileSync(full, 'utf8'), sandbox, { filename: file });
  }

  const lesson = sandbox.window.BEHISTORICAL_LESSON;
  if (!lesson) throw new Error(`${topic.shell} did not set window.BEHISTORICAL_LESSON`);
  return { lesson, scripts };
}

// Escaped for HTML, not rewritten. The target text itself is never edited: a
// literal & would be invalid markup, and &amp; renders as the same character.
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Foundations stores targets as strings. Unit topics store them as objects that
// also carry the Key Concept code and the AP theme, which belong on the lesson
// page and not in a calendar event. Either way what comes back is the sentence,
// unedited.
function textOf(item, key) {
  if (typeof item === 'string') return item;
  if (item && typeof item === 'object' && typeof item[key] === 'string') return item[key];
  return null;
}

function requireList(code, topic, field, key) {
  const list = topic[field];
  if (!Array.isArray(list) || list.length === 0) {
    warn(`${code}: \`${field}\` is missing or empty. Row left blank; do not paste this event.`);
    return [];
  }
  if (list.length !== 3) {
    warn(`${code}: \`${field}\` has ${list.length} items, expected 3.`);
  }
  const out = [];
  list.forEach((item, i) => {
    const text = textOf(item, key);
    if (!text || !text.trim()) {
      warn(`${code}: \`${field}\`[${i}] is empty or not a string.`);
      out.push('');
      return;
    }
    out.push(text);
  });
  return out;
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

// The five rows of Section 3, in order, with the markup that section pins.
function eventTable({ overview, targets, criteria, href, linkText }) {
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

function buildTable(day, topic) {
  const overview = OVERVIEWS[day.code];
  if (!overview) warn(`${day.code}: no OVERVIEW prose in the OVERVIEWS table.`);

  const targets = requireList(day.code, topic, 'learningTargets', 'target');
  const criteria = requireList(day.code, topic, 'successCriteria', 'criteria');

  const shellPath = path.join(ROOT, 'foundations', day.shell);
  if (!fs.existsSync(shellPath)) {
    warn(`${day.code}: shell file foundations/${day.shell} does not exist.`);
  }

  return eventTable({
    overview,
    targets,
    criteria,
    href: `${BASE_URL}/${day.shell}`,
    linkText: `Foundations ${day.n} - ${day.title}`
  });
}

// Section 2's rules on a Canvas object name, checked rather than trusted. The
// ampersand and the forward slash are the two that have already bitten once.
function checkCanvasTitle(code, title) {
  if (title.includes('&')) {
    warn(`${code}: Canvas title "${title}" contains an ampersand. Spell it out, see Section 2.`);
  }
  if (title.includes('/')) {
    warn(`${code}: Canvas title "${title}" contains a forward slash, which several Canvas exports read as a path separator.`);
  }
}

function buildUnitTable(unit, topic, lesson) {
  const overview = UNIT_OVERVIEWS[topic.code];
  if (!overview) warn(`${topic.code}: no OVERVIEW prose in the UNIT_OVERVIEWS table.`);

  const targets = requireList(topic.code, lesson, 'learningTargets', 'target');
  const criteria = requireList(topic.code, lesson, 'successCriteria', 'criteria');

  checkCanvasTitle(topic.code, topic.title);

  return eventTable({
    overview,
    targets,
    criteria,
    href: `${SITE_URL}/${unit.dir}/${topic.shell}`,
    linkText: `Topic ${topic.code} - ${topic.title}`
  });
}

// ---------------------------------------------------------------------------

// Shared by all three documents so a student meets the same instructions
// whichever one the teacher is pasting from.
function pasteInstructions() {
  return [
    '## How to paste one of these',
    '',
    '1. Canvas Calendar, click the day, **Edit**, then **More Options**.',
    '2. Title the event exactly as given below.',
    '3. In the Rich Content Editor, click the **`</>`** icon to open the HTML editor.',
    '   **Never paste this into the visual editor.** Pasting rendered HTML there',
    '   injects wrapper `<div>`s and inline font declarations that collapse the table.',
    '4. Paste the whole `<table>` block.',
    '5. Switch back to the visual editor, delete the `[INSERT ASSIGNMENT LINK]`',
    '   placeholder text, and insert the real assignment from the right-hand',
    '   course-links panel, **Assignments**, click the assignment. Do not hand-type',
    '   that link; see Section 5 of `CANVAS-BUILD-GUIDE.md` for why.',
    '6. Save.',
    ''
  ];
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
  out.push(...pasteInstructions());
  out.push('All six links point at the live GitHub Pages build:');
  out.push('`https://jeffandersonlogic.github.io/ap-world-history/foundations/`');
  out.push('');
  out.push('---');
  out.push('');

  const collected = { id: 'foundations', short: 'Foundations', heading: 'Foundations, How World History Works', items: [] };
  VOLUMES_OUT.push(collected);

  DAYS.forEach(day => {
    const topic = loadTopic(day.data);
    const eventTitle = `APW - ${day.code} - ${day.title}`;
    const table = buildTable(day, topic);

    collected.items.push({
      vol: 'foundations',
      code: day.code,
      title: day.title,
      eventTitle,
      assignmentName: `${day.code} - ${assignmentShortTitle(day.code)}`,
      table,
      href: `${BASE_URL}/${day.shell}`,
      linkText: `Foundations ${day.n} - ${day.title}`,
      shellLabel: `foundations/${day.shell}`,
      sources: `foundations/${day.data}`
    });

    out.push(`## ${eventTitle}`);
    out.push('');
    out.push(`**Event title:** \`${eventTitle}\`  `);
    out.push(`**Assignment to link:** \`${day.code} - ${assignmentShortTitle(day.code)}\`  `);
    out.push(`**Source data file:** \`foundations/${day.data}\`  `);
    out.push(`**Lesson page:** \`foundations/${day.shell}\``);
    out.push('');
    out.push('```html');
    out.push(table);
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

function buildUnit(unit) {
  const out = [];

  out.push(`# Unit ${unit.unit} Calendar Events, Paste-Ready`);
  out.push('');
  out.push(`**Unit ${unit.unit}: ${unit.name}**, Topics ${unit.topics[0].code} to ` +
    `${unit.topics[unit.topics.length - 1].code}, one calendar event per topic.`);
  out.push('');
  out.push('**Generated by `tools/build-canvas-events.js`. Do not hand-edit.**');
  out.push('LEARNING TARGETS and SUCCESS CRITERIA are lifted verbatim from each topic\'s');
  out.push('data file and renderer-config, run in the order the lesson shell loads them, so');
  out.push('the config wins wherever the two disagree, exactly as it does for a student.');
  out.push('Change a target in the source file and rerun the generator; never edit a target');
  out.push('in Canvas, and never edit it here.');
  out.push('');
  out.push('OVERVIEW prose is hand-written in the `UNIT_OVERVIEWS` table inside the');
  out.push('generator. Unit data files carry no `commandCopy`, so each one is written from');
  out.push('that topic\'s own `lecture.intro`, targets, and criteria, in student-facing');
  out.push('voice. Edit it there, then rerun.');
  out.push('');
  out.push('```bash');
  out.push('node tools/build-canvas-events.js          # write');
  out.push('node tools/build-canvas-events.js --check  # fail on drift, write nothing');
  out.push('```');
  out.push('');
  out.push(...pasteInstructions());
  out.push('Build the seven Canvas assignments before the seven events. The course-links');
  out.push('panel in step 5 can only insert an assignment that already exists; see Section 11');
  out.push('of `CANVAS-BUILD-GUIDE.md` for the full per-topic procedure and Section 7 for the');
  out.push('assignment settings.');
  out.push('');
  out.push(`All seven links point at the live GitHub Pages build:`);
  out.push(`\`${SITE_URL}/${unit.dir}/\``);
  out.push('');
  out.push('Module hub, for the module\'s `[External]` item:');
  out.push(`\`${unit.hub}\``);
  out.push('');
  out.push('---');
  out.push('');

  const volId = `unit-${unit.unit}`;
  const collected = {
    id: volId,
    short: `Unit ${unit.unit}`,
    heading: `Unit ${unit.unit}, ${unit.name}`,
    items: []
  };
  VOLUMES_OUT.push(collected);

  unit.topics.forEach(topic => {
    const { lesson, scripts } = loadUnitTopic(unit, topic);
    const eventTitle = `APW - ${topic.code} - ${topic.title}`;
    const table = buildUnitTable(unit, topic, lesson);

    collected.items.push({
      vol: volId,
      code: topic.code,
      title: topic.title,
      eventTitle,
      assignmentName: `${topic.code} - ${assignmentShortTitle(topic.code)}`,
      table,
      href: `${SITE_URL}/${unit.dir}/${topic.shell}`,
      linkText: `Topic ${topic.code} - ${topic.title}`,
      shellLabel: `${unit.dir}/${topic.shell}`,
      sources: scripts.map(sc => `assets/data/${sc}`).join(', ')
    });

    out.push(`## ${eventTitle}`);
    out.push('');
    out.push(`**Event title:** \`${eventTitle}\`  `);
    out.push(`**Assignment to link:** \`${topic.code} - ${assignmentShortTitle(topic.code)}\`  `);
    out.push(`**Source data files:** ${scripts.map(s => `\`assets/data/${s}\``).join(', ')}  `);
    out.push(`**Lesson page:** \`${unit.dir}/${topic.shell}\``);
    out.push('');
    out.push('```html');
    out.push(table);
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
  F5: 'World at c.1200 SAQ',

  '1.1': 'Song China',
  '1.2': 'Dar al-Islam',
  '1.3': 'South and SE Asia',
  '1.4': 'States in the Americas',
  '1.5': 'States in Africa',
  '1.6': 'Developments in Europe',
  '1.7': 'Unit 1 Comparison',

  '2.1': 'Silk Roads',
  '2.2': 'Mongol Empire',
  '2.3': 'Indian Ocean Trade',
  '2.4': 'Trans-Saharan Trade',
  '2.5': 'Cultural Diffusion',
  '2.6': 'Disease and Ecology',
  '2.7': 'Unit 2 Comparison'
};

// The longest name Foundations ships is 23 characters. 30 is the ceiling here
// because a PowerSchool sync that truncates or refuses a long name fails quietly:
// the assignment exists in both systems and simply stops syncing.
const SHORT_TITLE_MAX = 30;

function assignmentShortTitle(code) {
  const t = SHORT_TITLES[code];
  if (!t) {
    warn(`${code}: no short assignment title.`);
    return code;
  }
  if (!/^[\x20-\x7E]+$/.test(t)) {
    warn(`${code}: assignment short title "${t}" contains non-ASCII characters.`);
  }
  if (`${code} - ${t}`.length > SHORT_TITLE_MAX) {
    warn(`${code}: assignment name "${code} - ${t}" is ${`${code} - ${t}`.length} characters, over the ${SHORT_TITLE_MAX} the sync is trusted for.`);
  }
  return t;
}

function main() {
  const check = process.argv.includes('--check');

  const docs = [];
  try {
    docs.push({ file: 'foundations-calendar-events.md', text: build() });
    UNITS.forEach(unit => {
      docs.push({ file: `unit-${unit.unit}-calendar-events.md`, text: buildUnit(unit) });
    });
    docs.push({ file: 'canvas-events.html', text: consolePage.render(VOLUMES_OUT) });
  } catch (err) {
    console.error(`build-canvas-events: ${err.message}`);
    process.exit(1);
  }

  warnings.forEach(w => console.error(`WARNING  ${w}`));

  if (check) {
    let stale = 0;
    docs.forEach(doc => {
      const full = path.join(OUT_DIR, doc.file);
      const current = fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null;
      if (current !== doc.text) {
        console.error(`FAIL  docs/canvas/${doc.file} is out of date.`);
        stale += 1;
      } else {
        console.log(`OK  ${doc.file} matches the data files.`);
      }
    });
    if (stale) {
      console.error('      Run: node tools/build-canvas-events.js');
      process.exit(1);
    }
    if (warnings.length) process.exit(1);
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  docs.forEach(doc => {
    fs.writeFileSync(path.join(OUT_DIR, doc.file), doc.text);
    console.log(`Wrote docs/canvas/${doc.file} (${doc.text.split('\n').length} lines)`);
  });
  if (warnings.length) process.exit(1);
}

main();
