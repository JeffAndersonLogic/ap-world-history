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
// 2026-08-29, the version 2 retune. Three of these patterns changed when the
// one-question rule loosened, and they are called out here because a future
// reader finding "exactly one question per turn" gone will otherwise assume
// drift. The rule did not disappear, it became one *ask* per turn, where an ask
// is a question or a single revision instruction. The reason is in the header
// comment of socrates-persona.js: version 1 forbade Socrates from ever stating
// a diagnosis he already held, and it contradicted the Closing section, which
// left him no way to end a conversation. What is pinned now is the pair that
// has to hold together: one ask per turn, and a release turn that asks nothing.
const REQUIRED = [
  [/Every coaching turn ends with exactly one ask/, 'the one-ask-per-turn rule'],
  [/The release turn is the one exception and\s+asks nothing/, 'the carve-out that lets Socrates actually end a conversation'],
  [/A question is not owed/, 'the permission to state a diagnosis instead of asking about it'],
  [/[Nn]ame what is missing, never the words that would fill it/, 'the boundary that keeps direct coaching from becoming dictation'],
  [/Do not walk this list one rung per turn/, 'the ban on the serial one-weakness-per-turn diagnostic'],
  [/finished within two student revisions/, 'the conversation budget'],
  [/[Dd]o not prolong a conversation because more improvement is possible/, 'the rule against coaching past the bar'],
  [/## How much is enough/, 'the per-assignment thresholds'],
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
  [/[Cc]ount the question\s+marks/, 'the mechanical one-question check'],
  // No pin here for counting instructions. That sentence existed for one day and
  // was reverted: measured on answer-begging at 5 reps it tripled the pastable
  // content leak and fixed nothing. See the header of socrates-persona.js. If it
  // comes back, it needs a measurement, not a pin.
  // Version 1 pinned "Exactly one, not zero" here as the floor that a turn must
  // actually ask something. That floor is still wanted, but zero questions is now
  // legitimate on a release turn and on a turn that states a diagnosis, so the
  // floor moved from "a question mark exists" to "exactly one ask exists", pinned
  // above. Do not restore the old sentence: it is what stopped him releasing.
  [/never more than one/, 'the ceiling of one ask per turn'],
  // Socrates serves exactly two assignments as of 2026-08-31, Checkpoint 2 and
  // BeInTheRoom. Naming them is what lets him orient from the student's own
  // words, and it is also the boundary: a third surface appearing here means
  // someone wired up a coach button, and a surface missing here means a student
  // can reach a coach who has never heard of what they are working on.
  //
  // The First & 10 Reflection and Checkpoint 1 are asserted absent rather than
  // deleted from this list, because a persona that still names them would send
  // students looking for buttons the pages no longer have.
  [/Checkpoint 2/, 'the Checkpoint 2 surface by name'],
  [/BeInTheRoom/, 'the BeInTheRoom surface by name'],
  [/Exactly two assignments reach you/, 'the two-surface boundary'],
  [/Reasoning skill/, 'the instruction to use the pasted reasoning skill']
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
