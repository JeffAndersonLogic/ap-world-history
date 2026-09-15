#!/usr/bin/env node
'use strict';

/*
 * Generate the student-facing companions for the data-driven Teaching OS.
 *
 * The teacher base + presentation-assets files are the source of truth. This
 * builder evaluates those data-only files, removes every teacher-only note,
 * applies the small student-view normalization rules below, and writes the
 * public student data file. No student slide content should be hand-maintained.
 *
 * This is intentionally separate from build-student-decks.js, which owns the
 * older hand-authored Teach Mode HTML decks. Both builders are enforced by the
 * generated-content reproducibility gate.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

const DECKS = [
  {
    key: '2.1',
    sources: [
      'teacher/data/topic-2-1-teaching-base.js',
      'teacher/data/topic-2-1-presentation-assets.js'
    ],
    student: 'assets/data/presentations/topic-2-1-student.js',
    backUrl: 'lesson-2-1-silk-roads.html#lecture'
  },
  {
    key: '2.2',
    sources: [
      'teacher/data/topic-2-2-teaching-base.js',
      'teacher/data/topic-2-2-presentation-assets.js'
    ],
    student: 'assets/data/presentations/topic-2-2-student.js',
    backUrl: 'lesson-2-2-mongol-empire.html#lecture'
  }
];

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function loadTeaching(deck) {
  const sandbox = { window: {}, console, encodeURIComponent, decodeURIComponent };
  vm.createContext(sandbox);
  for (const rel of deck.sources) {
    const file = path.join(ROOT, rel);
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: rel });
  }
  const teaching = sandbox.window.BEHISTORICAL_TEACHING;
  if (!teaching || !Array.isArray(teaching.slides)) {
    throw new Error(`${deck.key}: canonical Teaching OS data did not produce slides`);
  }
  return teaching;
}

function publicUrl(url) {
  if (!url) return url;
  return url.startsWith('../unit-2/') ? url.slice('../unit-2/'.length) : url;
}

function publicVisual(v) {
  if (!v || !v.url) return undefined;
  const out = { url: v.url };
  if (v.alt) out.alt = v.alt;
  if (v.credit) out.credit = v.credit;
  return out;
}

function baseStudentSlide(s) {
  const out = {
    kind: s.kind,
    eyebrow: s.eyebrow || '',
    title: s.title || ''
  };
  if (s.subtitle) out.subtitle = s.subtitle;
  if (s.position) out.position = s.position;
  if (s.visual && s.visual.url) out.visual = publicVisual(s.visual);
  if (s.footer) out.footer = s.footer;
  if (Array.isArray(s.steps)) out.steps = clone(s.steps);
  if (Array.isArray(s.cards)) out.cards = clone(s.cards);
  if (Array.isArray(s.nodes)) out.nodes = clone(s.nodes);
  if (s.video) out.video = clone(s.video);
  if (s.action) out.action = { ...clone(s.action), url: publicUrl(s.action.url) };
  return out;
}

function ensureWhy(slide, text) {
  if (slide.kind !== 'process' || !Array.isArray(slide.steps) || slide.steps.length !== 3) return;
  slide.steps.push({ label: 'WHY', text });
}

function topic21Mechanism(title) {
  const t = String(title || '').toLowerCase();
  if (t.includes('merchants work')) {
    return [
      { label: 'REGIONAL MERCHANT', text: 'Knows one part of the route' },
      { label: 'EXCHANGE MARKET', text: 'Goods change hands' },
      { label: 'NEW MERCHANT', text: 'Local language + contacts' },
      { label: 'GREATER REACH', text: 'Product travels farther than the person' }
    ];
  }
  if (t.includes('who owns the middle')) {
    return [
      { label: 'MOBILITY', text: 'Pastoral peoples move through the steppe' },
      { label: 'LOCAL KNOWLEDGE', text: 'Routes, water, animals, seasons' },
      { label: 'INTERMEDIARY', text: 'Guide, guard, trader, translator' },
      { label: 'NETWORK EFFECT', text: 'Distant markets become easier to connect' }
    ];
  }
  return null;
}

function topic21Slides(teaching) {
  const slides = teaching.slides.map(src => {
    const s = baseStudentSlide(src);
    if (src.kind === 'reconstruction') s.kind = 'hero';
    if (src.kind === 'image') s.kind = 'map';
    if (src.kind === 'prompt' || src.kind === 'question') s.kind = 'prompt';

    const mechanism = src.phase === 'causes' ? topic21Mechanism(src.title) : null;
    if (mechanism) {
      s.kind = 'process';
      s.steps = mechanism;
      delete s.subtitle;
    }

    ensureWhy(s, 'State why the mechanism changes exchange');
    return s;
  });

  // The teacher OS inserts this network-node visual immediately before the
  // Buddhism clip. Keep the student deck in the exact same instructional order.
  const citySlide = {
    kind: 'nodes',
    eyebrow: 'Network Nodes',
    title: 'Connection changes cities.',
    subtitle: 'Samarkand and Kashgar become wealthy because routes converge there.',
    nodes: [
      {
        title: 'SAMARKAND',
        text: 'Crossroads city where merchants, languages, beliefs, and services concentrate.',
        visual: { url: '../assets/images/topics/2-1/2.1%20-%20Samarkand.webp' }
      },
      {
        title: 'KASHGAR',
        text: 'Oasis node connecting routes through Central Asia and turning geography into wealth.',
        visual: { url: '../assets/images/topics/2-1/2.1%20-%20Kashgar.jpg' }
      }
    ]
  };
  const insertAt = slides.findIndex(s => s.eyebrow === 'Watch · ~1 Minute' && s.title === 'Trade routes move beliefs.');
  slides.splice(insertAt < 0 ? Math.max(0, slides.length - 1) : insertAt, 0, citySlide);
  return slides;
}

function topic22Slides(teaching) {
  return teaching.slides.map(src => {
    const s = baseStudentSlide(src);
    if (src.kind === 'reconstruction') s.kind = 'hero';
    if (src.kind === 'prompt' || src.kind === 'question') s.kind = 'prompt';

    // Student pages are intentionally local-asset-first. Historical visuals that
    // exist only as remote teacher references become clean text-led slides.
    if ((s.kind === 'hero' || s.kind === 'map') && s.visual && /^https?:/.test(s.visual.url)) {
      s.kind = 'prompt';
      delete s.visual;
      delete s.position;
    }

    // The teacher uses a two-map CCOT compare. The student companion keeps the
    // same historical reasoning without depending on two remote image hosts.
    if (src.kind === 'mapCompare') {
      s.kind = 'process';
      delete s.visual;
      s.steps = [
        { label: 'BASELINE', text: 'Long-distance Silk Road exchange already existed' },
        { label: 'CONTINUITY', text: 'Older routes + luxury exchange persisted' },
        { label: 'CHANGE', text: 'Political control + protection increased connectivity' },
        { label: 'WHY', text: 'Shared systems lowered some barriers to movement' }
      ];
    }

    ensureWhy(s, 'Explain why the pattern changed or persisted');
    return s;
  });
}

function buildDeck(deck) {
  const teaching = loadTeaching(deck);
  return {
    meta: {
      topic: `Topic ${deck.key}`,
      title: teaching.meta.title,
      backUrl: deck.backUrl
    },
    slides: deck.key === '2.1' ? topic21Slides(teaching) : topic22Slides(teaching)
  };
}

function readExisting(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  return sandbox.window.BEHISTORICAL_STUDENT_DECK;
}

function stable(value) {
  return JSON.stringify(value);
}

function serialize(deck) {
  return `/* GENERATED by scripts/build-teaching-os-student-decks.js. Do not hand-edit. */\nwindow.BEHISTORICAL_STUDENT_DECK = ${JSON.stringify(deck, null, 2)};\n`;
}

function buildOne(deck, check) {
  const expected = buildDeck(deck);
  const out = path.join(ROOT, deck.student);
  if (check) {
    if (!fs.existsSync(out)) {
      console.log(`  DRIFT  ${deck.student} is missing`);
      return false;
    }
    const actual = readExisting(out);
    if (stable(actual) !== stable(expected)) {
      console.log(`  DRIFT  ${deck.student} does not match canonical Teaching OS data`);
      return false;
    }
    console.log(`  ok     ${deck.student} matches canonical Teaching OS data`);
    return true;
  }
  fs.writeFileSync(out, serialize(expected));
  console.log(`  wrote  ${deck.student}`);
  return true;
}

function main() {
  const check = process.argv.includes('--check');
  let ok = true;
  for (const deck of DECKS) {
    try { if (!buildOne(deck, check)) ok = false; }
    catch (err) { console.error(`  FAIL   ${deck.key}: ${err.message}`); ok = false; }
  }
  console.log(ok
    ? `\n${DECKS.length} Teaching OS student deck(s) ${check ? 'match canonical data' : 'built'}.`
    : `\nSome Teaching OS student decks ${check ? 'have drifted' : 'failed to build'}.`);
  if (!ok) process.exit(1);
}

if (require.main === module) main();
module.exports = { DECKS, buildDeck };
