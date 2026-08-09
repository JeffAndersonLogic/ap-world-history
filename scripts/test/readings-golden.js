#!/usr/bin/env node
'use strict';

/**
 * Content preserved across the unit readings migration.
 *
 *   node scripts/test/readings-golden.js              against the frozen fixture
 *   node scripts/test/readings-golden.js --from-disk  against the files as they are now
 *
 * --from-disk is the migration run, used while the hand-authored pages are still
 * on disk. After they are replaced it would compare the generated page against
 * itself, so the committed fixture is the baseline from then on.
 */

const fs = require('fs');
const path = require('path');
const { extractReading, diffReadings } = require('../lib/reading-extract');
const { build, allTopics } = require('../build-unit-readings');

const ROOT = path.resolve(__dirname, '..', '..');
const FIXTURE = path.join(__dirname, 'fixtures', 'readings-before.json');
const fromDisk = process.argv.includes('--from-disk');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

let baseline = null;
if (!fromDisk) {
  if (!fs.existsSync(FIXTURE)) {
    console.error('No baseline fixture. Run with --from-disk while the originals are still present.');
    process.exit(1);
  }
  baseline = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
}

/**
 * Changes made deliberately after the migration, each pinned to the exact value
 * it produces.
 *
 * The fixture is the historical record of what the hand-authored pages said, and
 * it stays that way: editing it to match a new decision would erase the evidence
 * the check exists to hold. Divergences are declared here instead, with the
 * value they must produce, so this list can only ever accept the specific edit
 * it describes. Any other change to the same field still fails.
 */
const INTENTIONAL = [
  { field: 'footerNote',
    after: 'Organize your thinking here, submit your final work in Canvas.',
    why: 'the Google Form was retired 2026-08-07; 28 readings still pointed students at it. This is the wording the other 30 already used.' },
  { field: 'support[].body', contains: 'submit it in Canvas',
    why: 'same retirement, in the support card of 5.9, 5.10 and 6.1' },
  { field: 'header.badge', after: 'Module 02',
    why: 'the First & 10 is module 02 in the ten-module standard. 5.9, 5.10 and 6.1 badged themselves "First & 10"; 1.1, 2.1, 3.1, 3.2 and 8.9 carried "Module 01", which is the Map module\'s number.' },
  { field: 'header.name', after: 'First & 10 Reading',
    why: 'those three put the topic title here instead; 55 others use the module name' },
  { field: 'support[].heading', after: 'Before You Read',
    why: 'those three said "What to do"; 55 others say Before You Read' },
  { field: 'support[].heading', after: 'Reading Target',
    why: 'those three said "Why it matters"; 55 others say Reading Target' }
];

/** Parse one diff line back into field, before, after. */
function parseDiff(d) {
  const m = d.match(/^(.+?):\n\s+before: ([\s\S]*)\n\s+after:  ([\s\S]*)$/);
  if (!m) return null;
  const val = (raw) => { try { return JSON.parse(raw); } catch (_) { return raw; } };
  return { field: m[1].replace(/\[\d+\]/g, '[]'), before: val(m[2]), after: val(m[3]) };
}

function intentional(d) {
  const p = parseDiff(d);
  if (!p) return null;
  return INTENTIONAL.find(rule => rule.field === p.field
    && (rule.after !== undefined
      ? p.after === rule.after
      : String(p.after).includes(rule.contains))) || null;
}

let failed = 0, checked = 0;
const accepted = new Set();
const failures = [];
console.log(`\n${W}Unit readings, content preserved${X} ${D}(${fromDisk ? 'baseline: files on disk' : 'baseline: committed fixture'})${X}\n`);

for (const topic of allTopics()) {
  const rel = `${topic.unitDir}/${topic.sourceFile}`;
  let before;
  if (fromDisk) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) { console.log(`  ${R}✗${X} ${topic.topicKey}  missing ${rel}`); failed++; continue; }
    before = extractReading(fs.readFileSync(p, 'utf8'));
  } else {
    const rec = baseline.topics[topic.topicKey];
    if (!rec) { console.log(`  ${R}✗${X} ${topic.topicKey}  no recorded baseline`); failed++; continue; }
    before = rec.extraction;
  }

  const all = diffReadings(before, extractReading(build(topic)));
  checked++;
  const diffs = [];
  for (const d of all) {
    const rule = intentional(d);
    if (rule) accepted.add(rule.why); else diffs.push(d);
  }
  if (diffs.length === 0) continue;
  failed++;
  failures.push({ key: topic.topicKey, rel, diffs });
}

for (const f of failures) {
  console.log(`  ${R}✗${X} ${W}${f.key}${X}  ${f.diffs.length} difference(s)  ${D}${f.rel}${X}`);
  for (const d of f.diffs.slice(0, 6)) console.log(`      ${Y}${d}${X}`);
  if (f.diffs.length > 6) console.log(`      ${D}...and ${f.diffs.length - 6} more${X}`);
}

console.log(`\n${'─'.repeat(60)}`);
if (accepted.size) {
  console.log(`${Y}Deliberate changes since the originals:${X}`);
  for (const why of accepted) console.log(`  ${D}${why}${X}`);
  console.log('');
}
if (failed) {
  console.log(`${R}${W}${failed} of ${checked} readings differ.${X}  ${G}${checked - failures.length} identical.${X}`);
  process.exit(1);
}
console.log(`${G}${W}${checked} readings match the hand-authored originals, allowing for the declared changes above.${X}`);
