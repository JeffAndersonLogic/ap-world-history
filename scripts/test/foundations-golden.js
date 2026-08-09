#!/usr/bin/env node
'use strict';

/**
 * The migration gate for the Foundations readings.
 *
 *   node scripts/test/foundations-golden.js
 *
 * Renders each Foundations reading from the content model and compares it, as
 * content, against the hand-authored page recorded in git. Every heading,
 * paragraph, key term, callout, vocabulary chip, question, answer placeholder
 * and footer link has to survive. If it does, the migration provably lost
 * nothing a student could see.
 *
 * The comparison is deliberately not a byte diff of the HTML. The generated page
 * uses <section> and <main> where the hand-authored one used <div>, and links
 * the shared stylesheet instead of carrying its own copy. Those differences are
 * the point of the migration, so the check has to see past them, which is what
 * scripts/lib/reading-extract.js is for.
 *
 * The baseline is read from git, not from disk, so this keeps working after the
 * generated files replace the originals in the working tree. Run it against any
 * commit with BASE=<ref>.
 */

const { execFileSync } = require('child_process');
const path = require('path');
const { extractReading, diffReadings } = require('../lib/reading-extract');
const CONTENT = require('../lib/foundations-f10-content');

const ROOT = path.resolve(__dirname, '..', '..');
/**
 * The last commit that still had the hand-authored Foundations readings.
 *
 * Pinned, not HEAD. Once the generated files are committed, a HEAD baseline
 * would compare the generated page against itself and pass no matter what was
 * lost, which is a check that can only ever say yes. Pinning keeps the question
 * the real one: does the reading a student sees today still say what the
 * hand-authored page said before the migration?
 *
 * Override with BASE=<ref> to diff against some other point.
 */
const PRE_MIGRATION = '4bcd126e898a77841d2b706c2b2fe1ed9f546b8c';
const BASE = process.env.BASE || PRE_MIGRATION;

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

function fromGit(rel) {
  try {
    return execFileSync('git', ['show', `${BASE}:${rel}`], { cwd: ROOT, maxBuffer: 32 * 1024 * 1024 }).toString('utf8');
  } catch (e) {
    return null;
  }
}

// The build script guards its main behind require.main, so requiring it here
// gets the renderer without writing any files.
const { build } = require('../build-foundations-readings');

let failed = 0;
let checked = 0;

console.log(`\n${W}Foundations readings, content preserved${X} ${D}(baseline: ${BASE})${X}\n`);

for (const key of Object.keys(CONTENT)) {
  const topic = CONTENT[key];
  const rel = `foundations/${topic.sourceFile}`;
  const original = fromGit(rel);

  if (original === null) {
    console.log(`  ${R}✗${X} ${key}  no baseline for ${rel} at ${BASE}`);
    failed++;
    continue;
  }

  const before = extractReading(original);
  const after = extractReading(build(topic));
  const diffs = diffReadings(before, after);
  checked++;

  if (diffs.length === 0) {
    const words = before.sections.reduce((n, s) => n + s.paragraphs.reduce((m, p) => m + p.text.split(' ').length, 0), 0);
    console.log(`  ${G}✓${X} ${key}  ${D}${before.sections.length} sections, ${before.check.questions.length} questions, ~${words} words, identical${X}`);
  } else {
    failed++;
    console.log(`  ${R}✗${X} ${W}${key}${X}  ${diffs.length} difference(s) in ${rel}`);
    for (const d of diffs.slice(0, 12)) console.log(`      ${Y}${d}${X}`);
    if (diffs.length > 12) console.log(`      ${D}...and ${diffs.length - 12} more${X}`);
  }
}

console.log(`\n${'─'.repeat(60)}`);
if (failed) {
  console.log(`${R}${W}${failed} reading(s) lost or changed content.${X}`);
  process.exit(1);
}
console.log(`${G}${W}${checked} readings carry identical content to the hand-authored originals.${X}`);
