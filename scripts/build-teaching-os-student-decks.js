#!/usr/bin/env node
'use strict';

/*
 * Generate the student-facing companions for the data-driven Teaching OS.
 * Teacher base + presentation-assets files are the source of truth.
 * Teacher-only notes and preflight slides are stripped; authored projected content is preserved.
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

function projectedSlides(teaching) {
  return teaching.slides.filter(src => src.phase !== 'preflight');
}

function ensureWhy(slide, text) {
  if (slide.kind !== 'process' || !Array.isArray(slide.steps) || slide.steps.length !== 3) return;
  slide.steps.push({ label: 'WHY', text });
}

function topic21Slides(teaching) {
  return projectedSlides(teaching).map(src => {
    const s = baseStudentSlide(src);
    if (src.kind === 'reconstruction') s.kind = 'hero';
    if (src.kind === 'image') s.kind = 'map';
    if (src.kind === 'prompt' || src.kind === 'question') s.kind = 'prompt';
    ensureWhy(s, 'State why the mechanism changes exchange');
    return s;
  });
}

function topic22Slides(teaching) {
  return projectedSlides(teaching).map(src => {
    const s = baseStudentSlide(src);
    if (src.kind === 'reconstruction') s.kind = 'hero';
    if (src.kind === 'prompt' || src.kind === 'question') s.kind = 'prompt';

    // Remote imagery is intentionally omitted from the public student companion.
    // Local, audited classroom assets remain available.
    if ((s.kind === 'hero' || s.kind === 'map') && s.visual && /^https?:/.test(s.visual.url)) {
      s.kind = 'prompt';
      delete s.visual;
      delete s.position;
    }

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

function diffValues(actual, expected, at = '$', out = []) {
  if (out.length >= 80) return out;
  if (Object.is(actual, expected)) return out;
  const aObj = actual && typeof actual === 'object';
  const eObj = expected && typeof expected === 'object';
  if (!aObj || !eObj || Array.isArray(actual) !== Array.isArray(expected)) {
    out.push(`${at}: actual=${JSON.stringify(actual)} expected=${JSON.stringify(expected)}`);
    return out;
  }
  const keys = new Set([...Object.keys(actual), ...Object.keys(expected)]);
  for (const key of keys) {
    if (out.length >= 80) break;
    const child = Array.isArray(expected) || Array.isArray(actual) ? `${at}[${key}]` : `${at}.${key}`;
    if (!(key in actual)) out.push(`${child}: missing in actual; expected=${JSON.stringify(expected[key])}`);
    else if (!(key in expected)) out.push(`${child}: extra in actual=${JSON.stringify(actual[key])}`);
    else diffValues(actual[key], expected[key], child, out);
  }
  return out;
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
    const diffs = diffValues(actual, expected);
    if (diffs.length) {
      console.log(`  DRIFT  ${deck.student} does not match canonical Teaching OS data`);
      for (const line of diffs) console.log(`         ${line}`);
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
