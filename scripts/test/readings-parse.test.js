#!/usr/bin/env node
/**
 * readings-parse.test.js
 *
 * Parses the trailing <script> block of all 77 First & 10 readings and fails if
 * any of them is not valid JavaScript.
 *
 * WHY THIS EXISTS
 *
 * On 2026-08-12 ten readings, all nine Unit 7 topics plus Topic 6.1, shipped with
 * a stray `});` at the top of that script. It threw a SyntaxError, which in a
 * browser discards the *entire* script element. Everything in it stopped working
 * at once:
 *
 *   - Build AI Prompt and Copy Prompt were undefined, so both buttons were dead;
 *   - the confidence scale never rendered, 0 radio inputs instead of 15;
 *   - the answer-capture block never ran, so the three reading answers were never
 *     written to localStorage and therefore never reached Canvas.
 *
 * Every structural check stayed green through all of it. `validate.js` asserts the
 * capture block is present and byte-identical to the lib, and it was: the bytes
 * were perfect and the code was unreachable. That is the third time the First & 10
 * capture has been silently lost, and the first time presence was not the problem.
 *
 * Offline and dependency-free. `new Function` compiles without executing, which is
 * all that is needed: the failure was a parse error, not a runtime one, and a
 * parse error is the version of this bug that takes the whole block down.
 *
 * A browser test would also catch it, but this belongs in the offline suite: it
 * costs milliseconds, needs no Chromium, and this is a bug that must never again
 * depend on someone remembering to run the optional suite.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');

function readingFiles() {
  const dirs = fs.readdirSync(ROOT).filter(d => /^unit-\d$/.test(d)).sort();
  dirs.push('foundations');
  const out = [];
  for (const d of dirs) {
    const full = path.join(ROOT, d);
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full).sort()) {
      // The capture wrappers are thin iframe shells with their own tiny script,
      // checked separately by validate.js. The readings are what carry the
      // builder, the confidence scale, and the capture block.
      if (!/^first-and-10-.*\.html$/.test(f) || /-capture\.html$/.test(f)) continue;
      out.push(path.join(d, f));
    }
  }
  return out;
}

const files = readingFiles();
let failures = 0;
let blocks = 0;

if (files.length !== 77) {
  console.error(`  FAIL expected 77 readings, found ${files.length}`);
  failures++;
} else {
  console.log(`  ok   found all 77 readings`);
}

for (const rel of files) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');

  // Every reading ends with one <script> holding TOPIC_KEY, the prompt builder,
  // and the capture block. If that shape ever changes this test should fail loudly
  // rather than quietly check nothing.
  const m = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
  if (!m) {
    console.error(`  FAIL ${rel}: no trailing <script> block found, so nothing was parsed`);
    failures++;
    continue;
  }
  blocks++;
  try {
    new Function(m[1]);
  } catch (e) {
    console.error(`  FAIL ${rel}: ${e.message}`);
    console.error('       The whole script element is discarded by the browser, which takes'
      + ' buildAiPrompt,\n       the confidence scale, and the answer capture down with it.');
    failures++;
  }
}

if (blocks !== files.length) {
  console.error(`  FAIL only ${blocks} of ${files.length} readings had a parseable script block to check`);
  failures++;
} else if (!failures) {
  console.log(`  ok   all ${blocks} reading script blocks are valid JavaScript`);
}

// What has to live in that block, asserted by name on every reading, so a future
// edit that parses but drops one of them still fails here.
//
// buildAiPrompt and copyAiPrompt were here until 2026-08-31, when the reading
// stopped being a coached surface. What is left is the part that always
// mattered: the storage key the capture block writes under, and the write
// itself. Those three answers reaching Canvas is the reading's whole job, and
// the original bug this test exists for, a stray `});` that silently discarded
// the entire script element, would still take them down.
const REQUIRED = [
  [/var TOPIC_KEY\s*=/, 'TOPIC_KEY, which the capture block keys storage on'],
  [/behistorical-first10-/, 'the capture block storage key, so answers reach Canvas'],
  [/localStorage\.setItem/, 'the capture block write, so answers are saved at all']
];
for (const rel of files) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  for (const [re, what] of REQUIRED) {
    if (!re.test(html)) {
      console.error(`  FAIL ${rel} is missing ${what}`);
      failures++;
    }
  }
}
if (!failures) console.log('  ok   every reading defines TOPIC_KEY and writes its answers to storage');

if (failures) {
  console.error(`\n${failures} failure(s).`);
  process.exit(1);
}
console.log('\nReading script blocks: all checks passed.');
