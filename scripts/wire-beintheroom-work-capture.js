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
 * small wiring snippet that watches this scenario's reflection textarea(s) and
 * writes behistorical-beintheroom-<TOPIC_KEY> on every keystroke, the same
 * shape scripts/lib/room-v2-page.js and build-unit6.js/build-unit9.js already
 * write for their own scenarios.
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
 * Idempotent. Running it twice changes nothing the second time, and it skips
 * any file already wired, which is what lets it run again safely for a newly
 * written v1 scenario.
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

const targets = topicKeyByTarget();

let wired = 0;
let skippedGenerated = 0;
let skippedWired = 0;
let skippedNoTopic = 0;
let skippedNoIds = 0;

for (const filePath of scenarioFiles()) {
  const rel = path.relative(ROOT, filePath);
  const src = fs.readFileSync(filePath, 'utf8');

  // v2 (behistorical-room-v2.js) and the unit-6/unit-9 generated template both
  // write this bridge from their own generator, not this sweep.
  if (src.includes('window.BH_ROOM_SCENARIO')) { skippedGenerated++; continue; }
  if (src.includes('behistorical-beintheroom-capture.js')) { skippedWired++; continue; }

  // A file with no lesson data file linking it is unreachable from any lesson
  // page (a superseded or never-linked scenario draft, e.g. an early version
  // kept alongside the one a topic actually points at). No student ever opens
  // it through the module path, so there is no topic to attribute a reflection
  // to and nothing to wire.
  const topicKey = targets.get(filePath);
  if (!topicKey) { skippedNoTopic++; console.log(`skipping ${rel}, not linked from any lesson data file`); continue; }

  const ids = reflectionIds(src);
  if (!ids) { skippedNoIds++; console.error(`${rel} does not match any known reflection textarea shape`); continue; }

  const scriptOpen = src.indexOf('<script>');
  const scriptClose = src.lastIndexOf('</script>');
  if (scriptOpen === -1 || scriptClose === -1) { skippedNoIds++; console.error(`${rel} has no inline <script> block to wire into`); continue; }

  let next = src.slice(0, scriptOpen) + CAPTURE_SCRIPT_TAG + src.slice(scriptOpen);
  const newClose = next.lastIndexOf('</script>');

  const idsLiteral = JSON.stringify(ids);
  const wireSnippet = '(function(){'
    + `var ids=${idsLiteral};`
    + 'function sync(){'
    + 'var text=ids.map(function(id){var t=document.getElementById(id);return t?t.value:"";}).filter(Boolean).join("\\n\\n");'
    + `if(window.BHBeInTheRoomCapture)window.BHBeInTheRoomCapture.save(${JSON.stringify(topicKey)},${JSON.stringify(FALLBACK_PROMPT)},text);`
    + '}'
    + 'ids.forEach(function(id){var t=document.getElementById(id);if(t)t.addEventListener("input",sync);});'
    + 'sync();'
    + '})();';

  next = next.slice(0, newClose) + wireSnippet + next.slice(newClose);

  if (DRY) {
    console.log(`would wire ${rel} (topic ${topicKey}, ids ${ids.join(', ')})`);
  } else {
    fs.writeFileSync(filePath, next);
    console.log(`wired ${rel} (topic ${topicKey}, ids ${ids.join(', ')})`);
  }
  wired++;
}

console.log(`\n${wired} file(s) ${DRY ? 'would be ' : ''}wired, `
  + `${skippedWired} already wired, ${skippedGenerated} generated scenarios (wired via their own generator), `
  + `${skippedNoTopic} not linked from any lesson data file (unreachable, nothing to wire), `
  + `${skippedNoIds} did not match the expected shape.`);

if (skippedNoIds) {
  console.error('Some scenario files did not match the expected reflection shape; check them by hand.');
  process.exit(1);
}
