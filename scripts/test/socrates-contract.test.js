#!/usr/bin/env node
/**
 * socrates-contract.test.js
 *
 * Offline, dependency-free. Guards the three things about the course-wide AI
 * coach that can break while every other check stays green.
 *
 * WHY THIS TEST EXISTS
 *
 * Socrates lives in a vendor web UI. Nothing here can log into MagicSchool, so
 * no test can prove the bot is configured correctly. What a test *can* do is
 * prove that the documents Jeff pastes into that UI are reproducible from the
 * lesson data, and that every topic can actually produce a complete context
 * block. Those are the two failures that are silent:
 *
 *   1. Someone hand-edits `docs/socrates/socrates-instructions.md`, the next
 *      rebuild reverts it, and the change is gone with no diff to show for it.
 *      Check 1 fails the push instead.
 *
 *   2. A new topic lands with no checkpoint terms or no key concept, so its
 *      paste goes out missing the fields the coach relies on. The page still
 *      renders, the button still works, and the coaching quietly degrades to
 *      generic writing advice on that one topic. Check 3 fails the push.
 *
 * And one that is not silent but is worse: the persona drifting back toward a
 * single unit. It went out scoped to Unit 1 once. Check 2 makes putting Song
 * China back into the persona a test failure rather than a judgement call.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { PERSONA } = require('../lib/socrates-persona');

const ROOT = path.join(__dirname, '..', '..');
const DOCS = path.join(ROOT, 'docs', 'socrates');

let failures = 0;
const fail = m => { failures++; console.error(`  FAIL ${m}`); };
const ok = m => console.log(`  ok   ${m}`);

// ── 1. The kit is reproducible ───────────────────────────────────────────────

console.log('\nSocrates kit reproducibility');
try {
  execFileSync('node', [path.join(ROOT, 'scripts', 'build-socrates.js'), '--check'],
    { cwd: ROOT, stdio: 'pipe' });
  ok('docs/socrates/ matches what build-socrates.js generates');
} catch (e) {
  const out = [e.stdout, e.stderr].filter(Boolean).map(b => b.toString()).join('');
  fail('docs/socrates/ has drifted from the generator. Run: node scripts/build-socrates.js');
  out.split('\n').filter(l => l.trim()).forEach(l => console.error(`       ${l}`));
}

// ── 2. The persona stays unit-agnostic ───────────────────────────────────────
//
// One bot serves all 77 topics, so any content word in the persona is content
// the other 76 topics get coached with. These are the names that were in the
// Unit 1 version, plus the shape of a date range, which is the subtler leak: a
// persona that says "c. 1200 to c. 1450" quietly tells a Unit 8 student their
// twentieth-century evidence is out of period.

console.log('\nPersona scope');

// The persona is hard-wrapped at 80 columns, so every pattern below has to be
// matched against a single-line version of it. Matching the wrapped text
// directly reports a rule as missing whenever the line break happens to land
// inside the phrase being searched for, which is a failing test that says
// nothing about the persona.
const FLAT = PERSONA.replace(/\s+/g, ' ');

// Naming the span of the course is not a leak, so the one legitimate mention of
// a unit number is removed before the unit-number pattern runs.
const SCOPED = FLAT.replace(/Foundations through Unit 9/g, 'the whole course');

const LEAKS = [
  /\bSong China\b/i, /\bNeo-Confucian/i, /\bDar al-Islam\b/i, /\bAbbasid\b/i,
  /\bDelhi Sultanate\b/i, /\bMexica\b/i, /\bInca\b/i, /\bMansa Musa\b/i,
  /\bGreat Zimbabwe\b/i, /\bmanorialism\b/i, /\bColumbian Exchange\b/i,
  /\bMongol/i, /\bSilk Road/i, /\bChampa rice\b/i, /\bGrand Canal\b/i,
  /\bquipu\b/i, /\bmit'a\b/i, /\bUnit\s+[1-9]\b/, /\bc\.\s*\d{3,4}\b/
];
const leaked = LEAKS.filter(r => r.test(SCOPED));
if (leaked.length) {
  fail(`the persona names unit-specific content: ${leaked.map(String).join(', ')}`);
  console.error('       Topic content belongs in the paste or the spine, never the persona.');
} else {
  ok('no unit-specific content, date range, or unit number in the persona');
}

// The rules the eval measures. If one of these sentences is deleted the graded
// stress test drops, and that is a slow thing to discover.
const REQUIRED = [
  [/exactly one question per turn/i, 'the one-question-per-turn rule'],
  [/[Nn]ever write, rewrite, or dictate/, 'the refusal to write the student\'s answer'],
  [/the block wins/i, 'the paste-beats-memory precedence rule'],
  [/[Nn]ever affirm a claim you believe is factually or chronologically wrong/, 'the no-sycophancy rule'],
  [/different unit or a different century/i, 'the cross-unit evidence guard'],
  [/[Nn]ever invent a fact/, 'the no-fabrication rule'],
  // Socrates serves BeInTheRoom as well as the checkpoints and the readings. Those
  // scenario pastes carry a different shape and often their own numbered coaching
  // sequence. The AP reflection box is the one piece of Module 09 that reaches
  // Canvas, through Gather All My Work on the lesson page like every other
  // module; the roleplay choices along the way are not collected. A persona that
  // knows only the checkpoint path tells a simulation student their reflection is
  // going somewhere it is not.
  [/BeInTheRoom/, 'the BeInTheRoom simulation path'],
  [/follow those\s+stages rather than the order below/, 'deference to a scenario\'s own coaching stages'],
  [/reaches Canvas the same\s+way every other module does/, 'the note that a BeInTheRoom reflection reaches Canvas through Gather All My Work'],
  // Jeff's call, 2026-08-12: the coach should supply true AP World knowledge the
  // course does not carry, because the course cannot be a catch-all. An earlier
  // persona forbade supplying a correction, which produced a reply that stated a
  // date and then asked the student what the date was.
  [/Your knowledge is AP World History, not only this course/, 'the permission to use AP World knowledge beyond the course'],
  [/Never invent/, 'the never-invent limit on that permission'],
  [/Outside knowledge never overrides the assignment/, 'the limit that the paste still defines the task'],
  [/count the question\s+marks/, 'the mechanical one-question check'],
  [/Exactly one, not zero/, 'the floor that a turn must actually ask something'],
  // Socrates serves exactly four assignments. Naming them is what lets him orient
  // from the student's own words, and it is also the boundary: a fifth surface
  // appearing here means someone wired up a coach button the persona does not know
  // about.
  [/First & 10 Reflection/, 'the First & 10 Reflection surface by name'],
  [/Exactly four assignments reach you/, 'the four-surface boundary']
];
REQUIRED.forEach(([re, what]) => {
  if (re.test(FLAT)) ok(`persona still carries ${what}`);
  else fail(`persona is missing ${what}`);
});

// ── 3. Every topic can produce a complete context block ──────────────────────
//
// The spine is the generator's own output, so reading the fields back off it is
// how this test sees all 77 topics without re-evaluating 148 data files. A topic
// whose entry is missing a field would send a paste missing that field too.

console.log('\nPer-topic context block completeness');
const spine = fs.readFileSync(path.join(DOCS, 'socrates-course-spine.md'), 'utf8');
const entries = spine.split(/^## /m).slice(1);

if (entries.length !== 77) fail(`spine has ${entries.length} topic entries, expected 77`);
else ok('spine covers all 77 topics');

let incomplete = 0;
for (const e of entries) {
  const id = e.split(/\s/)[0];
  const isFoundations = /^F\d/.test(id);
  const missing = [];
  if (!/\*\*Where this sits\.\*\*/.test(e)) missing.push('where it sits');
  if (!isFoundations && !/\*\*College Board key concepts\.\*\*/.test(e)) missing.push('key concepts');
  if (!/\*\*Expected evidence terms\.\*\*/.test(e)) missing.push('evidence terms');
  if (!/\*\*Checkpoint[^*]*prompt\.\*\*/.test(e)) missing.push('a checkpoint prompt');
  if (missing.length) { incomplete++; fail(`${id} is missing ${missing.join(', ')}`); }
}
if (!incomplete) ok('every topic carries where-it-sits, terms, a checkpoint prompt, and key concepts');

// A paste has to fit in a chat box a fifteen-year-old will actually send. The
// bound is generous, but an unbounded one is how a 40 KB block ships unnoticed.
const OVERSIZE = 6000;
const big = entries
  .map(e => ({ id: e.split(/\s/)[0], n: e.length }))
  .filter(x => x.n > OVERSIZE);
if (big.length) fail(`spine entries over ${OVERSIZE} chars, so their pastes will be unwieldy: `
  + big.map(x => `${x.id} (${x.n})`).join(', '));
else ok(`no topic entry exceeds ${OVERSIZE} chars`);

// ── 4. The paste contract names the files that must agree ────────────────────

console.log('\nPaste contract');
const contract = fs.readFileSync(path.join(DOCS, 'socrates-paste-contract.md'), 'utf8');
[
  'scripts/lib/socrates-persona.js',
  'assets/js/behistorical-topic-renderer-v1.js',
  'scripts/lib/first10-page.js'
].forEach(f => {
  if (contract.includes(f)) ok(`contract names ${f}`);
  else fail(`contract does not name ${f}, so a change there has nothing pointing at it`);
});

// ── Report ───────────────────────────────────────────────────────────────────

if (failures) {
  console.error(`\n${failures} failure(s).`);
  process.exit(1);
}
console.log('\nSocrates contract: all checks passed.');
