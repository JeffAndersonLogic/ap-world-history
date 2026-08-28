#!/usr/bin/env node
'use strict';
/* =========================================================
   BUILD THE CANVAS CALENDAR EVENTS FROM THE SCHEDULE

     node scripts/build-canvas-events.js
     node scripts/build-canvas-events.js --check

   Writes docs/canvas/calendar-events.md, one paste-ready event
   per class day in assets/data/announcements-schedule.js.

   ---------------------------------------------------------
   ONE EVENT PER TOPIC, TWO DATES INSIDE IT

   The unit of generation is the TOPIC, not the class day, because
   that is how Canvas works. A calendar event and an assignment are
   created once for all AP students, and Canvas's own Assign to
   feature splits the dates by section. Emitting one event per
   cohort would mean two Canvas objects where the course has one,
   two places for the text to drift, and a student in the wrong
   one seeing the wrong date.

   So the pasted HTML is shared and the dates are per cohort
   INSIDE it: the masthead names both meeting days and Tonight's
   Work carries a due chip per cohort. Each event is printed with
   the Assign to rows to type into Canvas underneath it, since
   those dates are the half this repo can compute and Canvas
   cannot.

   The schedule is still the one place the calendar lives, and the
   dates are still derived from it: a cohort's due date is that
   cohort's next meeting. Add days there and the topic's event
   appears here.

   There used to be a second generator, at tools/build-canvas-events.js,
   deleted on 2026-08-28. It emitted six events keyed to the six
   Foundations topics and knew nothing about cohorts at all, so it
   could not compute either date.

   ---------------------------------------------------------
   WHAT CANVAS DOES TO THIS

   Canvas strips <style> blocks and most class attributes, so
   every rule below is inline on the element. Do not refactor
   this into a stylesheet: it will look right in your editor and
   arrive at the student as an unstyled table.

   Webfonts cannot be loaded either, so the display face is
   requested and allowed to fall back. Cinzel renders for anyone
   who has it and Georgia for everyone else, which is a change of
   face rather than a broken layout.

   The one class that survives is `inline_disabled` on the
   BeHistorical link. Canvas puts it there. Leave it.

   See docs/canvas/CANVAS-BUILD-GUIDE.md for the paste procedure.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { cohort: lookupCohort } = require('./lib/cohorts.js');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'canvas', 'calendar-events.md');
const SCHEDULE = path.join(ROOT, 'assets', 'data', 'announcements-schedule.js');
const BASE_URL = 'https://jeffandersonlogic.github.io/ap-world-history';

const warnings = [];
function warn(msg) { warnings.push(msg); }

/* ---------------------------------------------------------
   Brand
   ---------------------------------------------------------
   Straight out of assets/css/behistorical-deep-reading.css. Antique
   gold is a DARK-SURFACE colour: 7.3:1 on steel and 2.1:1 on paper,
   under the 3:1 that even large text is allowed. It is used here for
   the band and for rules, never for text on a light row. Oxidized
   bronze is the light-surface equivalent at 7.9:1.
   --------------------------------------------------------- */
const STEEL = '#1a1c1d';
const INK = '#151718';
const PAPER = '#f5f0e7';
const CLEAN = '#fffdf7';
const GOLD = '#c9a46a';
const OXIDIZED = '#6b3e1f';
const RULE = '#ddd2be';
const MUTED = '#57544c';

const DISPLAY = "Cinzel, 'Trajan Pro', Georgia, serif";

/* The wordmark is an image, not text, and it has to be.
   The globe O is built from CSS gradients and a ::before pseudo-element in
   assets/css/behistorical-brand-lock.css, and Canvas strips <style> blocks and
   cannot express a pseudo-element inline at all. Cinzel is a webfont, which
   Canvas will not load either, so typed text falls back to Georgia and the
   wordmark stops being the wordmark.
   assets/logos/behistorical-wordmark-light.png is rendered from that same
   stylesheet with the real font, so what a student sees in Canvas is the same
   mark the site draws. Light on the steel band; a dark version sits beside it
   for any light surface. Regenerate with scripts/build-wordmark.js. */
const WORDMARK = `${BASE_URL}/assets/logos/behistorical-wordmark-light.png`;
const BODY = "'Libre Baskerville', Georgia, 'Times New Roman', serif";
const UI = "Montserrat, Arial, Helvetica, sans-serif";

/* ---------------------------------------------------------
   OVERVIEW prose

   Hand-written and student-facing. The Foundations entries are
   reproduced byte for byte from the generator this replaced,
   including the &mdash; entities, because F1 is already live in
   Canvas and verified correct. Do not "clean them up".

   A topic with no entry here falls back to its own subtitle from
   the lesson data, and the run warns. The fallback is true and
   authored; it is just thin. Nothing is invented to fill the row,
   because an overview nobody wrote is exactly the kind of second
   copy of the content that can drift from the lesson without
   anything failing.
   --------------------------------------------------------- */
const OVERVIEWS = {
  F0: 'Day 0 is the frame for the whole year. Before you learn a single date, you need to know what this course is asking you to become: a historian, with six specific habits of mind. Today you meet the six AP historical thinking skills in plain language, walk through the 10-module rhythm you will see in every class, and write a baseline snapshot of yourself as a historian on Day 1. That baseline becomes the first entry in the Historian\'s Portfolio you receive in May.',

  F1: 'Geography is the first layer of the AP World operating system. Before you can explain any state, empire, or trade network, you need the event that made all of them possible: the Neolithic Agricultural Revolution, the shift from hunting and gathering to farming. Today you build one causal chain &mdash; geography made farming possible, farming produced surplus, surplus produced civilization &mdash; and you learn to treat geography as an argument, not a backdrop.',

  F2: 'Confucianism, Daoism, Hinduism, Buddhism, Christianity, and Islam were never only private spiritual matters. They were public institutions that organized labor, legitimated authority, structured family life, funded education, and connected communities across enormous distances. Today you learn the core idea of each system, how each one spread, and how each one changed when it entered a new region. Seeing belief systems as institutions rather than only theologies is what lets you analyze them with real historical depth.',

  F3: 'States are not natural. They are constructed solutions to specific problems: every state has to extract resources, defend territory, administer distant populations, and make its rule feel legitimate rather than merely forced. Persia, Han China, Greece, and Rome answered those same four problems in strikingly different ways, through tolerance and delegated satrapies, through centralized bureaucracy and the Mandate of Heaven, through citizen self-rule in the polis, and through law and expanding citizenship. If you can compare those four answers, you can analyze any state you meet in Units 1 through 9.',

  F4: 'Trade routes do not simply move goods. They are systems of human interaction that transform everything they touch. A Sogdian merchant carrying silk from Chang\'an to Samarkand is also carrying Tang court aesthetics, Buddhist monastery patronage networks, diseases bred in crowded Chinese cities, and their own religious practice. The goods are the most visible layer, and the invisible layers are often the more consequential ones. Today you learn to see all of them at once.',

  'Foundations Assessment': 'The Foundations Assessment covers Foundations 0 through 5: the six AP historical thinking skills, geography and the Neolithic Revolution, belief systems as institutions, how states solve the four problems every state faces, what trade routes actually move, and the snapshot of the world at c. 1200. Everything after this builds on that snapshot, so treat it as the baseline you will keep referring back to rather than as a unit you are finished with.',

  F5: 'Day 5 does two jobs at once. You build the baseline snapshot of the world at c.1200 CE that every later unit refers back to, and you name the AP historical thinking skills out loud for the first time. Those skills were embedded in everything you did on Days 1 through 4 without being called by name. You leave Foundations holding both the content, what the world looked like at c.1200, and the toolkit, how historians explain it.',

  /* Unit 1. Each of these is built from that topic's own lecture intro, its
     learning targets, and its deep reading, all of which are already
     published to students on the lesson page. Nothing here is a new claim
     about the past; it is the same argument the lesson makes, addressed to a
     student reading Canvas the night before. */

  '1.1': 'Song China ran an empire through paperwork. Where other states of the period rewarded noble families or bought soldiers, the Song recruited officials through a written examination, sealed the candidates\' names so the graders could not know whose paper they held, and rotated the winners between posts so that none of them could build a base. Today you follow that machinery, the Neo-Confucian revival that gave it a moral language, the commercial revolution that paid for it, and the northern frontier where the whole arrangement finally cracked. Hold onto the exam in particular: it is one half of a comparison Topic 1.2 will ask you to make.',

  '1.2': 'The Abbasid caliph did not fall in 1258. He had been powerless for three hundred years already, kept on his throne by the very soldiers who had taken his power, because the legitimacy attached to him was worth more to them intact than removed. Today you follow what grew in that gap: the Turkic states that formed inside a fragmenting caliphate, the merchants and Sufi teachers who carried Islam into regions no army ever reached, and the cheap paper, shared language, and endowed institutions that let scholarship survive the loss of its own capital. Dar al-Islam is this course\'s clearest case of cultural coherence outlasting political unity.',

  '1.3': 'South and Southeast Asia in this period is two problems side by side. Vijayanagara and the Delhi Sultanate were land states, built on rice, water control, and the revenue of farmed territory. Srivijaya, Majapahit, and Melaka were sea states, built on a strait, a monsoon, and the ability to tax whatever passed through. Today you learn what each kind of state needed in order to survive, and what Hinduism, Buddhism, and Islam each did for the rulers who adopted them. The comparison between the two kinds is the thing this topic is actually testing.',

  '1.4': 'The Maya, the Mexica, and the Inca built three of the largest states of the period without a shared writing system between them, without the wheel in practical use, and, in the Inca case, without money. Today you follow how each one answered the same problems every state faces, extracting resources, holding distant territory, and making rule feel legitimate rather than merely forced: the Mexica through tribute, the Inca through labor owed to the state, the Maya through cities that competed rather than combined. The topic closes on the question the evidence forces, which is who wrote these societies down, and what that does to every claim you make about them.',

  '1.5': 'African states in this period were built on connection, not isolation. Mali and the Hausa city-states sat on the trans-Saharan routes, the Swahili coast on the Indian Ocean monsoon, Great Zimbabwe on gold moving toward that coast, and Ethiopia on a Christianity older than most of Europe\'s. Today you learn how each used trade, religion, and architecture to build authority, and you meet a case where the archaeology itself was pressured to produce a politically convenient answer about who built Great Zimbabwe. That last one is a lesson about evidence as much as about Africa.',

  '1.6': 'Europe is this period\'s case of a region that did not centralize, and the useful question is what grew in the space where a large state did not. A Church with its own courts, its own revenue, and the power to excommunicate a king. Chartered towns that bought their independence. Guilds. Assemblies that traded money for a say in how it was spent. Today you follow all four, and then the plague, which did more to end serfdom than any monarch managed. Europe earns its place in this unit mostly as a contrast, so keep asking how each of these looks next to Song China or Dar al-Islam.',

  '1.7': 'This topic adds no new content and one new skill. You already have six regions; today you lay them side by side under one question at a time, how each extracted resources, how each justified its rule, how each ordered its society. Then you learn what a comparison sentence has to contain before it earns anything. Two facts about two places is not a comparison. A claim, the specific evidence underneath it, and the reason the difference existed is.'
};

/* ---------------------------------------------------------
   Loading
   --------------------------------------------------------- */
function runFile(file, globalName) {
  const src = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  const any = new Proxy(function () {}, {
    get: (t, p) => (p === 'then' ? undefined : any),
    set: () => true, apply: () => any, construct: () => any
  });
  sandbox.document = any;
  sandbox.location = any;
  sandbox.navigator = any;
  vm.createContext(sandbox);
  try {
    vm.runInContext(src, sandbox, { filename: path.basename(file) });
  } catch (err) {
    return null;
  }
  return globalName ? sandbox.window[globalName] : sandbox.window;
}

function buildIndex() {
  const index = new Map();

  const lessonDir = path.join(ROOT, 'assets', 'data');
  for (const name of fs.readdirSync(lessonDir)) {
    if (!/^lesson-\d+-\d+-/.test(name)) continue;
    if (/renderer-config|standards-addon/.test(name)) continue;
    const data = runFile(path.join(lessonDir, name), 'BEHISTORICAL_LESSON');
    if (!data || !data.meta) continue;
    const key = String(data.meta.topic || '').replace(/^Topic\s*/i, '').trim();
    if (!key) continue;
    const unitNum = (key.match(/^(\d+)/) || [, ''])[1];
    index.set(key.toLowerCase(), {
      key,
      unit: data.meta.unit || '',
      title: data.meta.title || '',
      subtitle: data.meta.subtitle || '',
      learningTargets: (data.learningTargets || []).map((t) => t.target || t).filter(Boolean),
      successCriteria: (data.successCriteria || []).map((c) => c.criteria || c).filter(Boolean),
      href: `${BASE_URL}/unit-${unitNum}/${name.replace(/^lesson-/, 'lesson-').replace(/\.js$/, '.html')}`,
      linkText: `Topic ${key} - ${data.meta.title || ''}`
    });
  }

  const foundationsDir = path.join(ROOT, 'foundations');
  for (const name of fs.readdirSync(foundationsDir)) {
    if (!/-data\.js$/.test(name)) continue;
    const data = runFile(path.join(foundationsDir, name), 'FOUNDATION_TOPIC');
    if (!data) continue;
    const code = String(data.code || data.id || '').toUpperCase();
    const num = (code.match(/(\d+)/) || [, ''])[1];
    if (!num) continue;
    const shell = name.replace(/-data\.js$/, '.html');
    index.set('f' + num, {
      key: 'F' + num,
      unit: 'Foundations',
      title: data.title || '',
      subtitle: data.subtitle || '',
      learningTargets: (data.learningTargets || []).map((t) => t.target || t).filter(Boolean),
      successCriteria: (data.successCriteria || []).map((c) => c.criteria || c).filter(Boolean),
      href: `${BASE_URL}/foundations/${shell}`,
      linkText: `Foundations ${num} - ${data.title || ''}`
    });
  }

  return index;
}

/* ---------------------------------------------------------
   Dates
   --------------------------------------------------------- */
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

function parseDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || '').trim());
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0) : null;
}
function longDate(iso) {
  const d = parseDate(iso);
  return d ? `${WEEKDAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}` : '';
}
function shortDate(iso) {
  const d = parseDate(iso);
  return d ? `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}` : '';
}

function esc(s) {
  return String(s).replace(/&(?!(amp|lt|gt|mdash|nbsp|rsquo|#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------------------------------------------------------
   The event markup
   --------------------------------------------------------- */
function seal(c) {
  // Filled disc for Green, open ring for Silver. Shape carries the cohort
  // when colour cannot: a grayscale print, a washed-out projector, a reader
  // who cannot separate the hues.
  const fill = c.filled ? c.mark : 'transparent';
  const letterColor = c.filled ? STEEL : c.mark;
  return (
    `<span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; ` +
    `text-align: center; border: 2px solid ${c.mark}; border-radius: 50%; ` +
    `background-color: ${fill}; color: ${letterColor}; font-family: ${UI}; ` +
    `font-weight: bold; font-size: 12px; vertical-align: middle;">${c.letter}</span>`
  );
}

/* The masthead names both meetings, because one event is read by both
   rooms and "which day is mine" is the first question a student has. */
function band(topic) {
  const lines = [
    `<div style="background-color: ${STEEL}; border-top: 4px solid ${GOLD}; padding: 14px 18px; color: ${PAPER};">`,
    `    <img src="${WORDMARK}" alt="BeHistorical" style="display: block; height: 30px; width: auto; max-width: 100%; border: 0;">`,
    `    <div style="font-family: ${UI}; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: ${GOLD}; padding-top: 4px;">${esc(topic.courseName)} &middot; ${esc(topic.unit || '')}</div>`,
    `    <div style="font-family: ${DISPLAY}; font-size: 17px; font-weight: bold; color: ${PAPER}; padding-top: 6px;">${esc(topic.heading)}</div>`,
    `    <div style="padding-top: 10px; font-family: ${UI}; font-size: 13px; color: ${PAPER};">`
  ];
  topic.meetings.forEach((m, i) => {
    const c = m.cohort;
    lines.push(
      `        <span style="display: inline-block; padding-right: 22px;">${seal(c)}` +
      `<span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: ${c.onDark};">${esc(c.label)}</span>` +
      `<span style="padding-left: 8px; color: ${PAPER};">${esc(longDate(m.date))}</span></span>`
    );
  });
  lines.push('    </div>', '</div>');
  return lines.join('\n');
}

function labelCell(text) {
  return [
    `            <td style="width: 22%; vertical-align: top; background-color: ${PAPER}; border-left: 5px solid ${OXIDIZED};">`,
    `                <h3 style="font-family: ${UI}; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: ${OXIDIZED}; margin: 0;">${text}</h3>`,
    '            </td>'
  ].join('\n');
}

function row(label, content) {
  return [
    '        <tr>',
    labelCell(label),
    `            <td style="vertical-align: top; background-color: ${CLEAN};">`,
    content,
    '            </td>',
    '        </tr>'
  ].join('\n');
}

function bulletList(items, emptyMessage) {
  if (!items.length) {
    return `                <p style="font-family: ${BODY}; font-size: 15px; color: ${MUTED}; margin: 0;">` +
      `${esc(emptyMessage || 'None listed.')}</p>`;
  }
  return [
    `                <ul style="margin: 0 0 0 18px; padding: 0; font-family: ${BODY}; font-size: 15px; line-height: 1.5; color: ${INK};">`,
    ...items.map((t) => `                    <li style="margin: 0 0 6px 0;">${esc(t)}</li>`),
    '                </ul>'
  ].join('\n');
}

/* One chip per cohort. Canvas will show each student only their own date on
   the assignment itself, but the event body is shared, so both belong here
   and each has to say whose it is. The seal does that, and the letter and the
   shape carry it when the colour does not. */
function dueRow(meetings) {
  const out = ['                <p style="margin: 12px 0 0 0;">'];
  meetings.forEach((m) => {
    const c = m.cohort;
    if (!m.due) return;
    out.push(
      `                    <span style="display: inline-block; margin: 0 10px 6px 0; font-family: ${UI}; ` +
      `font-size: 12px; font-weight: bold; letter-spacing: 0.06em; color: ${c.ink}; ` +
      `border: 1px solid ${c.mark}; border-radius: 2px; padding: 4px 9px;">` +
      `${seal(c)}<span style="padding-left: 7px; text-transform: uppercase;">${esc(c.short)} due ${esc(m.due)}</span></span>`
    );
  });
  out.push('                </p>');
  return out.join('\n');
}

/* Tonight's work. Plain tasks are bullets; a reading is a bullet with its
   sections nested under it, because the sections ARE the assignment and
   five of them inside one sentence is how a student reads three.

   The list itself is shared: both rooms get the same work. Only the date
   differs, and that is what the per-cohort chips underneath are for. If the
   two cohorts are ever assigned different work, the caller has already
   warned and the Green list is what prints, because a silently merged list
   would be wrong for one room with nothing to show it. */
function homeworkCell(topic) {
  const out = [];
  if (!topic.homework.length) {
    out.push(`                <p style="font-family: ${BODY}; font-size: 15px; color: ${MUTED}; margin: 0;">Nothing tonight.</p>`);
    return out.join('\n');
  }

  out.push(`                <ul style="margin: 0 0 0 18px; padding: 0; font-family: ${BODY}; font-size: 15px; line-height: 1.5; color: ${INK};">`);
  for (const h of topic.homework) {
    out.push(`                    <li style="margin: 0 0 8px 0;">${esc(h.text)}`);
    if (h.items && h.items.length) {
      out.push(`                        <ul style="margin: 6px 0 0 18px; padding: 0;">`);
      for (const b of h.items) {
        const rec = b.tone === 'recommended';
        const style = rec ? `margin: 0 0 4px 0; color: ${MUTED};` : `margin: 0 0 4px 0;`;
        const tag = rec
          ? ` <span style="font-family: ${UI}; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: ${MUTED};">recommended</span>`
          : '';
        out.push(`                            <li style="${style}">${esc(b.text)}${tag}</li>`);
      }
      out.push('                        </ul>');
    }
    if (h.note) {
      out.push(`                        <p style="font-family: ${UI}; font-size: 12px; font-style: italic; color: ${MUTED}; margin: 6px 0 0 0;">${esc(h.note)}</p>`);
    }
    out.push('                    </li>');
  }
  out.push('                </ul>');
  out.push(dueRow(topic.meetings));
  return out.join('\n');
}

function buildEvent(topic) {
  return [
    band(topic),
    `<table style="border-collapse: collapse; width: 100%; border-color: ${RULE}; border-style: solid;" border="1" cellpadding="10">`,
    '    <tbody>',
    row('OVERVIEW', `                <p style="font-family: ${BODY}; font-size: 15px; line-height: 1.55; color: ${INK}; margin: 0;">${topic.overview}</p>`),
    row('LEARNING TARGETS', bulletList(topic.targets, topic.noTargetsMessage)),
    row('SUCCESS CRITERIA', bulletList(topic.criteria, topic.noCriteriaMessage)),
    row("TONIGHT'S WORK", homeworkCell(topic)),
    row('BeHistorical Link',
      `                <p style="font-family: ${UI}; font-size: 14px; margin: 0;"><a class="inline_disabled" href="${topic.href}" target="_blank" rel="noopener" style="color: ${OXIDIZED}; font-weight: bold;">${esc(topic.linkText)}</a></p>`),
    row('ASSIGNMENT', `                <p style="font-family: ${UI}; font-size: 14px; color: ${MUTED}; margin: 0;">[INSERT ASSIGNMENT LINK]</p>`),
    '    </tbody>',
    '</table>'
  ].join('\n');
}

/* ---------------------------------------------------------
   Assemble
   --------------------------------------------------------- */
function build() {
  const index = buildIndex();
  const win = runFile(SCHEDULE, null);
  const schedule = win && win.BEHISTORICAL_SCHEDULE;
  if (!schedule) throw new Error('The schedule did not set window.BEHISTORICAL_SCHEDULE');

  const courseName = (schedule.settings && schedule.settings.courseName) || 'AP World History';

  const calendar = (schedule.days || [])
    .filter((e) => e && e.date)
    .slice()
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));

  function nextMeeting(date, cohortKey) {
    for (const d of calendar) {
      if (d.cohort === cohortKey && String(d.date) > String(date)) return d.date;
    }
    return '';
  }

  /* One record per class day first, then folded into one record per topic.
     The day is what the schedule knows; the topic is what Canvas wants. */
  const days = [];
  for (const entry of calendar) {
    const c = lookupCohort(entry.cohort);
    if (!c) {
      warn(`${entry.date}: no valid cohort, day skipped.`);
      continue;
    }

    const wanted = String(entry.topic || '').trim();
    const found = wanted ? index.get(wanted.toLowerCase()) : null;
    if (wanted && !found) {
      warn(`${entry.date}: no lesson data for topic "${wanted}", day skipped.`);
      continue;
    }

    const code = found ? found.key : (entry.topicTitle || entry.date);
    const targets = found ? found.learningTargets : (entry.learningTargets || []);
    const criteria = found ? found.successCriteria : (entry.successCriteria || []);

    // A day with no `topic` is an assessment or a flex day. It has no targets
    // of its own by design, so it gets a sentence rather than a warning and an
    // empty row. Only a day that names a topic and still has none is a defect.
    const isTopicDay = Boolean(found);
    if (isTopicDay && !targets.length) warn(`${entry.date} (${code}): no learning targets.`);
    if (isTopicDay && !criteria.length) warn(`${entry.date} (${code}): no success criteria.`);

    // Homework, built the same way the announcements builder builds it, so a
    // student reading Canvas and a student reading the projector see the
    // same assignment with the same due date.
    const homework = [];
    const plain = Array.isArray(entry.homework) ? entry.homework : [entry.homework];
    for (const h of plain) {
      if (typeof h === 'string' && h.trim()) homework.push({ text: h.trim(), items: [] });
    }
    const r = entry.reading;
    if (r && Array.isArray(r.required) && r.required.length) {
      const forKey = String(r.for || '').trim();
      const forTopic = forKey ? index.get(forKey.toLowerCase()) : null;
      const name = forTopic ? `Topic ${forTopic.key}, ${forTopic.title}`
        : (forKey ? `Topic ${forKey}` : 'the next block');
      const where = String(r.where || '').trim();
      homework.push({
        text: `Required eBook reading for ${name}` + (where ? ` (${where})` : '') + '.',
        items: r.required.map((t) => ({ text: t, tone: 'required' }))
          .concat((r.recommended || []).map((t) => ({ text: t, tone: 'recommended' }))),
        note: String(r.note || '').trim()
      });
    }

    const nextDate = nextMeeting(entry.date, entry.cohort);
    const due = entry.homeworkDue || (nextDate ? longDate(nextDate) : '');
    if (homework.length && !due) {
      warn(`${entry.date}: homework with no later ${entry.cohort} meeting, so it carries no due date.`);
    }

    days.push({
      date: entry.date,
      cohort: c,
      courseName,
      code,
      isTopicDay,
      unit: entry.unit || (found ? found.unit : ''),
      title: entry.topicTitle || (found ? found.title : ''),
      targets,
      criteria,
      homework,
      due: homework.length ? due : '',
      href: found ? found.href : `${BASE_URL}/`,
      linkText: found ? found.linkText : 'BeHistorical'
    });
  }

  /* Fold the days into topics. Canvas creates one event and one assignment
     for the whole course and splits the dates by section, so two events for
     one topic would be two Canvas objects where the course has one, two
     places for the text to drift, and a student in the wrong one reading the
     wrong date. */
  const topics = [];
  const byCode = new Map();
  for (const day of days) {
    let topic = byCode.get(day.code);
    if (!topic) {
      let overview = OVERVIEWS[day.code];
      if (!overview) {
        overview = day.title || day.code ? esc((index.get(String(day.code).toLowerCase()) || {}).subtitle || '') : '';
        warn(`${day.code}: no OVERVIEW prose written. Falling back to the lesson subtitle; add an entry to OVERVIEWS in scripts/build-canvas-events.js.`);
      }
      topic = {
        code: day.code,
        courseName: day.courseName,
        unit: day.unit,
        title: day.title,
        heading: day.isTopicDay
          ? `Topic ${day.code}${day.title ? ': ' + day.title : ''}`
          : (day.title || day.code),
        overview,
        targets: day.targets,
        criteria: day.criteria,
        homework: day.homework,
        href: day.href,
        linkText: day.linkText,
        noTargetsMessage: day.isTopicDay
          ? 'None listed. Do not paste this event.'
          : 'This day assesses the targets from the block it closes.',
        noCriteriaMessage: day.isTopicDay
          ? 'None listed. Do not paste this event.'
          : 'See the targets for the topics this assessment covers.',
        meetings: []
      };
      byCode.set(day.code, topic);
      topics.push(topic);
    }

    // Both rooms get the same work; only the date differs. If they ever do
    // not, say so rather than merging two lists into one that is wrong for
    // somebody, and keep the first cohort's, which is Green's.
    const a = JSON.stringify(topic.homework);
    const b = JSON.stringify(day.homework);
    if (topic.meetings.length && a !== b) {
      warn(`${topic.code}: ${day.cohort.label} is assigned different homework from ` +
        `${topic.meetings[0].cohort.label}. The event prints ${topic.meetings[0].cohort.label}'s. ` +
        `Split them into two Canvas assignments, or make the schedule agree.`);
    }

    topic.meetings.push({ date: day.date, cohort: day.cohort, due: day.due });
  }

  for (const topic of topics) {
    if (topic.meetings.length < 2) {
      warn(`${topic.code}: only ${topic.meetings.length} meeting in the schedule. ` +
        `A topic is normally taught to both cohorts.`);
    }
  }

  /* ---- the document ---- */
  const out = [];
  out.push('# Canvas Calendar Events, Paste-Ready');
  out.push('');
  out.push('**Generated by `scripts/build-canvas-events.js`. Do not hand-edit.**');
  out.push('');
  out.push('One event per class day, built from `assets/data/announcements-schedule.js`.');
  out.push('LEARNING TARGETS and SUCCESS CRITERIA are lifted verbatim from each topic\'s own');
  out.push('data file, so an event can never disagree with the lesson page. Change a target');
  out.push('in the data file and rerun; never edit one in Canvas, and never edit one here.');
  out.push('');
  out.push('```bash');
  out.push('node scripts/build-canvas-events.js          # write');
  out.push('node scripts/build-canvas-events.js --check  # fail on drift, write nothing');
  out.push('```');
  out.push('');
  out.push('## Green and Silver');
  out.push('');
  out.push('**One event per topic, not one per cohort.** Canvas creates a calendar');
  out.push('event and an assignment once for the whole course and splits the dates with');
  out.push('its own **Assign to** feature, so the HTML below is shared by both rooms and');
  out.push('the dates live per section. Each event is printed with the Assign to rows to');
  out.push('type in, since those dates are the half this repo can compute and Canvas');
  out.push('cannot.');
  out.push('');
  out.push('School days alternate and each topic is taught twice, so the masthead names');
  out.push("both meetings and Tonight's Work carries a due chip per cohort. Each cohort");
  out.push('is marked three ways: the colour, the letter, and the shape, a filled disc');
  out.push('for Green against an open ring for Silver. Colour alone fails on a');
  out.push('washed-out projector, in a grayscale print, and for a reader who cannot');
  out.push('separate the hues.');
  out.push('');
  out.push('Due dates are derived from the schedule, never typed: a cohort\'s work is due');
  out.push('at that cohort\'s own next meeting. A holiday or a cancelled day is one');
  out.push('deleted row in the schedule and every affected date moves with it.');
  out.push('');
  out.push('## How to paste one of these');
  out.push('');
  out.push('1. Canvas Calendar, click the day, **Edit**, then **More Options**.');
  out.push('2. Title the event exactly as given below.');
  out.push('3. In the Rich Content Editor, click the **`</>`** icon to open the HTML editor.');
  out.push('   **Never paste this into the visual editor.** Pasting rendered HTML there');
  out.push('   injects wrapper `<div>`s and inline font declarations that collapse the table.');
  out.push('4. Paste the whole block, the masthead `<div>` and the `<table>` together.');
  out.push('5. Switch back to the visual editor, delete the `[INSERT ASSIGNMENT LINK]`');
  out.push('   placeholder, and insert the real assignment from the right-hand course-links');
  out.push('   panel. Do not hand-type that link; see Section 5 of `CANVAS-BUILD-GUIDE.md`.');
  out.push('6. In **Assign to**, add one row per section using the table printed with the');
  out.push('   event, and remove the Everyone row so no student inherits the wrong date.');
  out.push('7. Save.');
  out.push('');
  out.push('---');
  out.push('');

  for (const topic of topics) {
    out.push(`## ${topic.heading}`);
    out.push('');
    out.push(`**Event title:** \`APW - ${topic.code}${topic.title ? ' - ' + topic.title : ''}\``);
    out.push('');
    out.push('**Assign to, one row per section:**');
    out.push('');
    out.push('| Section | Taught | Work due |');
    out.push('| --- | --- | --- |');
    for (const m of topic.meetings) {
      out.push(`| ${m.cohort.label} | ${longDate(m.date)} | ${m.due || 'nothing assigned'} |`);
    }
    out.push('');
    out.push('```html');
    out.push(buildEvent(topic));
    out.push('```');
    out.push('');
  }

  out.push('---');
  out.push('');
  out.push(`${topics.length} events, built from ${days.length} class days ` +
    `(${days.filter((d) => d.cohort.key === 'green').length} green, ` +
    `${days.filter((d) => d.cohort.key === 'silver').length} silver).`);
  out.push('');

  return out.join('\n');
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

  warnings.forEach((w) => console.error(`WARNING  ${w}`));

  if (check) {
    const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
    if (current !== text) {
      console.error('FAIL  docs/canvas/calendar-events.md is out of date.');
      console.error('      Run: node scripts/build-canvas-events.js');
      process.exit(1);
    }
    console.log('OK  calendar-events.md matches the schedule and the lesson data.');
    return;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, text);
  console.log(`Wrote docs/canvas/calendar-events.md (${text.split('\n').length} lines)`);
}

main();
