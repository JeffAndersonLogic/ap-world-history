#!/usr/bin/env node
/**
 * wire-beintheroom-work-capture.js
 *
 * The 26 hand-authored BeInTheRoom v1 scenarios (units 1, 2, 8, and three
 * pre-generator files in unit 9) each write their own draft state under a
 * scenario-specific localStorage key, with no shared generator. None of them
 * write the topic-keyed payload the lesson renderer's Gather All My Work panel
 * reads back (see injectBeInTheRoomAnswer() in
 * assets/js/behistorical-topic-renderer-v1.js), so a student's BeInTheRoom
 * reflection has never reached the Canvas paste.
 *
 * This sweep gives each file the one `<script src>` that loads the shared
 * capture bridge (assets/js/behistorical-beintheroom-capture.js) and appends a
 * one-line call handing that bridge this scenario's reflection textarea(s), so
 * it writes behistorical-beintheroom-<TOPIC_KEY> on every keystroke and puts a
 * stored reflection back in the box on the next visit, the same record
 * scripts/lib/room-v2-page.js and build-unit6.js/build-unit9.js already keep
 * for their own scenarios.
 *
 * The call is one line on purpose. This sweep wrote the logic itself until
 * 2026-09-11, which meant 22 copies of it, and the copy it wrote synced the
 * reflection box to storage at page load. A v1 page only saves its own draft
 * when a student clicks Save Draft, so reopening a scenario meant an empty box
 * overwriting a real answer: the student lost the reflection and Gather All My
 * Work showed every module but BeInTheRoom. Fixing that meant re-sweeping all
 * 22 files, which is exactly the maintenance debt CLAUDE.md warns about, so
 * the behaviour now lives in the bridge and these files carry a call to it.
 *
 * Every file in the 26 uses one of three shapes for its terminal reflection:
 *   - a single #reflection-response textarea (23 files, the common case;
 *     #comparison-response, where present, is explicitly optional extended
 *     analysis and is not the graded artifact)
 *   - #reflection1-response / #reflection2-response / #reflection3-response
 *     (green-revolution-india.html, influenza-1918.html)
 *   - #reflect1 / #reflect2 / #reflect3 (climate-summit.html)
 * REFLECTION_ID_SHAPES tries each in order and captures every id the first
 * matching shape finds, joined with a blank line between parts.
 *
 * The topic key comes from the same beInTheRoom.url wiring the lesson data
 * files declare, not from parsing "Topic X.X" out of each page's own prose,
 * so it cannot drift from what the renderer resolves for the same topic.
 *
 * Idempotent. Running it twice changes nothing the second time. A file already
 * carrying the current call is left alone; one still carrying the pre-2026-09-11
 * inline snippet is upgraded in place, matched as an exact literal rather than
 * by a loose regex, so a shape this script does not recognise is reported
 * rather than half-rewritten.
 *
 * Usage:
 *   node scripts/wire-beintheroom-work-capture.js [--dry-run]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry-run');
const CAPTURE_SCRIPT_TAG = '<script src="../../assets/js/behistorical-beintheroom-capture.js"></script>';
const FALLBACK_PROMPT = 'Step out of character and explain what this BeInTheRoom scenario reveals about the topic, using specific historical evidence.';

const REFLECTION_ID_SHAPES = [
  ['reflection-response'],
  ['reflection1-response', 'reflection2-response', 'reflection3-response'],
  ['reflect1', 'reflect2', 'reflect3']
];

function dataFiles() {
  const dir = path.join(ROOT, 'assets/data');
  return fs.readdirSync(dir)
    .filter(f => /^lesson-\d+-\d+-.*\.js$/.test(f) && !f.includes('renderer-config'))
    .map(f => path.join(dir, f));
}

// Same map validate.js builds: scenario file path -> topic key ("1.1"), read
// from every lesson data/renderer-config file's beInTheRoom.url.
function topicKeyByTarget() {
  const map = new Map();
  for (const dataFile of dataFiles()) {
    const nameMatch = path.basename(dataFile).match(/^lesson-(\d+)-(\d+)-/);
    if (!nameMatch) continue;
    const [, unit, topic] = nameMatch;
    const rendererPath = path.join(path.dirname(dataFile), `lesson-${unit}-${topic}-renderer-config.js`);
    const combined = fs.readFileSync(dataFile, 'utf8')
      + (fs.existsSync(rendererPath) ? fs.readFileSync(rendererPath, 'utf8') : '');
    const urls = [...combined.matchAll(/beInTheRoom\s*[:=]\s*\{\s*url:\s*(['"])(.*?)\1/g)]
      .map((match) => match[2]).filter(Boolean);
    if (!urls.length) continue;
    const target = path.resolve(ROOT, `unit-${unit}`, urls[urls.length - 1]);
    map.set(target, `${unit}.${topic}`);
  }
  return map;
}

function scenarioFiles() {
  const out = [];
  for (let unit = 1; unit <= 9; unit++) {
    const dir = path.join(ROOT, 'beintheroom', `unit-${unit}`);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.html')) out.push(path.join(dir, f));
    }
  }
  return out.sort();
}

function reflectionIds(src) {
  for (const shape of REFLECTION_ID_SHAPES) {
    if (shape.every(id => src.includes(`id="${id}"`))) return shape;
  }
  return null;
}

// What this sweep writes today: one call, so the behaviour behind it can be
// fixed in the bridge without touching 22 files again.
function wireCall(topicKey, ids) {
  return '(function(){if(window.BHBeInTheRoomCapture)'
    + `window.BHBeInTheRoomCapture.wire(${JSON.stringify(topicKey)},${JSON.stringify(FALLBACK_PROMPT)},${JSON.stringify(ids)});`
    + '})();';
}

// What it wrote before 2026-09-11, reproduced exactly so an upgrade replaces
// the whole of it or reports that it could not. See the header for what this
// snippet did to a student's reflection on the second visit to a scenario.
function legacySnippet(topicKey, ids) {
  return '(function(){'
    + `var ids=${JSON.stringify(ids)};`
    + 'function sync(){'
    + 'var text=ids.map(function(id){var t=document.getElementById(id);return t?t.value:"";}).filter(Boolean).join("\\n\\n");'
    + `if(window.BHBeInTheRoomCapture)window.BHBeInTheRoomCapture.save(${JSON.stringify(topicKey)},${JSON.stringify(FALLBACK_PROMPT)},text);`
    + '}'
    + 'ids.forEach(function(id){var t=document.getElementById(id);if(t)t.addEventListener("input",sync);});'
    + 'sync();'
    + '})();';
}

const targets = topicKeyByTarget();

let wired = 0;
let upgraded = 0;
let skippedGenerated = 0;
let skippedCurrent = 0;
let skippedNoTopic = 0;
let skippedNoIds = 0;
let unrecognised = 0;

for (const filePath of scenarioFiles()) {
  const rel = path.relative(ROOT, filePath);
  const src = fs.readFileSync(filePath, 'utf8');

  // v2 (behistorical-room-v2.js) and the unit-6/unit-9 generated template both
  // write this bridge from their own generator, not this sweep. Neither keeps
  // its reflection only in the box: both restore it from their own saved state
  // at load, so neither carries the snippet this sweep now replaces.
  if (src.includes('window.BH_ROOM_SCENARIO') || src.includes("var KEY='behistorical-room-'")) {
    skippedGenerated++;
    continue;
  }

  // A file with no lesson data file linking it is unreachable from any lesson
  // page (a superseded or never-linked scenario draft, e.g. an early version
  // kept alongside the one a topic actually points at). No student ever opens
  // it through the module path, so there is no topic to attribute a reflection
  // to and nothing to wire.
  const topicKey = targets.get(filePath);
  if (!topicKey) { skippedNoTopic++; console.log(`skipping ${rel}, not linked from any lesson data file`); continue; }

  const ids = reflectionIds(src);
  if (!ids) { skippedNoIds++; console.error(`${rel} does not match any known reflection textarea shape`); continue; }

  const call = wireCall(topicKey, ids);
  if (src.includes(call)) { skippedCurrent++; continue; }

  // Already wired, but with something this script did not write. Upgrading the
  // known legacy shape is safe; anything else is reported rather than guessed
  // at, because a half-rewritten scenario would still look wired to every
  // check while capturing nothing.
  if (src.includes('behistorical-beintheroom-capture.js')) {
    const legacy = legacySnippet(topicKey, ids);
    if (!src.includes(legacy)) {
      unrecognised++;
      console.error(`${rel} loads the capture bridge but carries wiring this script did not write; check it by hand`);
      continue;
    }
    const next = src.replace(legacy, call);
    if (DRY) console.log(`would upgrade ${rel} (topic ${topicKey}, ids ${ids.join(', ')})`);
    else { fs.writeFileSync(filePath, next); console.log(`upgraded ${rel} (topic ${topicKey}, ids ${ids.join(', ')})`); }
    upgraded++;
    continue;
  }

  const scriptOpen = src.indexOf('<script>');
  const scriptClose = src.lastIndexOf('</script>');
  if (scriptOpen === -1 || scriptClose === -1) { skippedNoIds++; console.error(`${rel} has no inline <script> block to wire into`); continue; }

  let next = src.slice(0, scriptOpen) + CAPTURE_SCRIPT_TAG + src.slice(scriptOpen);
  const newClose = next.lastIndexOf('</script>');
  next = next.slice(0, newClose) + call + next.slice(newClose);

  if (DRY) {
    console.log(`would wire ${rel} (topic ${topicKey}, ids ${ids.join(', ')})`);
  } else {
    fs.writeFileSync(filePath, next);
    console.log(`wired ${rel} (topic ${topicKey}, ids ${ids.join(', ')})`);
  }
  wired++;
}

console.log(`\n${wired} file(s) ${DRY ? 'would be ' : ''}wired, ${upgraded} upgraded from the legacy snippet, `
  + `${skippedCurrent} already current, ${skippedGenerated} generated scenarios (wired via their own generator), `
  + `${skippedNoTopic} not linked from any lesson data file (unreachable, nothing to wire), `
  + `${skippedNoIds} did not match the expected shape.`);

if (skippedNoIds || unrecognised) {
  console.error('Some scenario files did not match the expected shape; check them by hand.');
  process.exit(1);
}
