#!/usr/bin/env node
'use strict';

/**
 * report-skill-alignment.js
 *
 * Lists each topic's AP reasoning skill beside what its Checkpoint 2 actually
 * asks for, and flags where the two do not look like the same task.
 *
 * WHY THIS EXISTS
 *
 * Checkpoint 2's paste carries a `Reasoning skill:` line so Socrates can coach
 * the reasoning move in front of the student instead of inferring one from the
 * prompt's wording.
 *
 * Which skill that is turned out to be two questions, not one. `skillBuilder.label`
 * answers "what does module 05 teach". The paste needs "what does module 10
 * assess". On about a sixth of the course those are different skills: Topic 7.3
 * teaches students to HIPP a propaganda poster and then asks a Checkpoint 2
 * about how military technology caused casualties. Deriving the paste from the
 * label alone named the wrong skill on all of them.
 *
 * So a checkpoint may state its own `skill`, and falls back to the Skill Builder
 * label when it does not. An explicit empty string means "this checkpoint has no
 * clean AP skill", which is a decision rather than a gap, and sends no line.
 * This script is what finds the next divergence.
 *
 * **Deliberately not in any suite, and it exits 0 always.** Whether a checkpoint
 * is really doing causation is a judgement about teaching, not something a regex
 * decides, and a gate that failed a push over it would teach one behaviour: edit
 * prompts until the grep goes quiet. Expect false positives by design, and leave
 * them. Topic F2 is the standing one: "why should historians treat the six
 * belief systems as institutions" is argumentation asked as a question, and the
 * pattern that would catch it would flag half the course.
 *
 * THREE OUTCOMES FOR A HIT
 *
 *   KEEP     the prompt does the named skill, the verbs just do not say so.
 *   RETAG    the checkpoint assesses a different skill from the one it inherits.
 *            Give that checkpoint its own `skill`. Do not edit skillBuilder.label
 *            to fix this: that label describes module 05, which is usually right.
 *   REWORD   the label is right and the checkpoint drifted off it. Fix the
 *            prompt. This is the finding worth having, because a checkpoint that
 *            does not assess what the lesson taught is a gap in the lesson.
 *
 * Usage:
 *   node scripts/report-skill-alignment.js            every topic
 *   node scripts/report-skill-alignment.js 5.1        one topic
 *   node scripts/report-skill-alignment.js --flagged  only the ones that differ
 */

const path = require('path');
const { loadCourse } = require(path.join(__dirname, 'lib', 'socrates-course.js'));
const { normalizeSkills } = require(path.join(__dirname, '..', 'assets', 'js', 'behistorical-coach-prompt.js'));

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', C = '\x1b[36m';
const W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

const args = process.argv.slice(2);
const FLAGGED_ONLY = args.includes('--flagged');
const only = args.find(a => !a.startsWith('--'));

// What each reasoning skill looks like in the language a prompt uses. These are
// the words a teacher writes when they mean that move, not a definition of it.
const SKILL_MARKERS = {
  // Widened after reading the real prompts: "contributed to", "drove", "the role
  // of", "escalated into", "affect" and "reasons" are all how a teacher writes a
  // causal question, and every one of them was a false flag before.
  'Causation': [/\bcause[ds]?\b/i, /\bcausal\b/i, /\bled to\b/i, /\bresult(?:ed|ing)?\b/i,
    /\bwhy\b/i, /\beffects?\b/i, /\baffect/i, /\bconsequences?\b/i, /\bbecause\b/i,
    /\bmechanism\b/i, /\bcontribut/i, /\bcreated\b/i, /\brole of\b/i, /\bescalat/i,
    /\binfluenc/i, /\bshaped\b/i, /\bhelped\b/i, /\breasons?\b/i, /\bdr[oi]ve[sn]?\b/i],
  'Comparison': [/\bcompare\b/i, /\bcontrast\b/i, /\bsimilar/i, /\bdiffer/i, /\bboth\b/i,
    /\bwhereas\b/i, /\bthan (?:in|the)\b/i],
  'Continuity and Change': [/\bcontinuit/i, /\bchange[ds]?\b/i, /\bstayed the same\b/i,
    /\bremained\b/i, /\bover time\b/i, /\bpersist/i, /\btransform/i],
  'Contextualization': [/\bcontext\b/i, /\bbroader\b/i, /\bsituate\b/i, /\bat the time\b/i,
    /\bsetting\b/i, /\bbackground\b/i],
  // "argument" and "extent" belong here. Leaving them out is what made the
  // first run of this script flag 40 of 74 topics, most of them for prompts
  // that open "Develop and qualify an argument ... explain the extent to
  // which", which is argumentation stated about as plainly as it can be. A
  // report with a 54% false-positive rate gets closed and never reopened.
  'Argumentation': [/\bargum/i, /\bargue\b/i, /\bthesis\b/i, /\bdefend\b/i, /\bclaim\b/i,
    /\bposition\b/i, /\bevaluate\b/i, /\bextent\b/i, /\bjustify\b/i, /\bqualif/i],
  'Sourcing': [/\bsource\b/i, /\bauthor\b/i, /\baudience\b/i, /\bpurpose\b/i,
    /\bpoint of view\b/i, /\bperspective\b/i, /\blimitation/i],
  // Deliberately narrow. Nearly every AP prompt says "evidence" or "specific",
  // so widening this category makes it outscore everything and drown the report.
  'Claims and Evidence': [/\bevidence\b/i, /\bcite\b/i],
  'Developments and Processes': [/\bprocess\b/i, /\bdevelopment\b/i, /\bidentify\b/i]
};

function markersHit(skill, text) {
  const markers = SKILL_MARKERS[skill] || [];
  return markers.filter(re => re.test(text)).length;
}

// Which skills does this prompt's own language suggest, strongest first?
function skillsPromptSuggests(text) {
  return Object.keys(SKILL_MARKERS)
    .map(skill => ({ skill, hits: markersHit(skill, text) }))
    .filter(row => row.hits > 0)
    .sort((a, b) => b.hits - a.hits);
}

const { topics, problems } = loadCourse();
if (problems.length) {
  console.error(`Course did not load cleanly (${problems.length} problem(s)).`);
  problems.slice(0, 5).forEach(p => console.error('  ' + p));
}

console.log(`${C}${W}AP skill vs what Checkpoint 2 actually asks for${X}`);
console.log(`${D}A judgement call per row. KEEP, RETAG or REWORD; see the header of this file.${X}\n`);

let flagged = 0;
let settled = 0;
let noSkill = 0;
let checked = 0;

for (const topic of topics) {
  if (only && topic.id !== only) continue;
  const cp = topic.checkpoints[topic.checkpoints.length - 1];
  if (!cp || !cp.prompt) continue;

  // The checkpoint's own skill when it states one, else the Skill Builder's
  // label. An explicit '' means the author decided this checkpoint has no clean
  // AP skill, which is a settled answer rather than a gap, so it is not flagged.
  const declared = cp.skill != null ? cp.skill : topic.skill;
  if (cp.skill === '') {
    settled++;
    if (!FLAGGED_ONLY) console.log(`${D}- Topic ${topic.id}  no AP skill by decision, no skill line sent${X}`);
    continue;
  }
  const names = normalizeSkills(declared);
  const named = names[0] || '';
  if (!named) {
    noSkill++;
    if (!FLAGGED_ONLY) {
      console.log(`${Y}?${X} ${W}Topic ${topic.id}${X}  no AP skill could be read from "${topic.skill || '(none)'}"`);
      console.log(`${D}    Socrates gets no Reasoning skill line for this topic.${X}\n`);
    }
    continue;
  }

  checked++;
  const prompt = String(cp.prompt);
  // Any of the skills the label names, since a compound label sends them all.
  const own = Math.max(...names.map(n => markersHit(n, prompt)));
  const suggested = skillsPromptSuggests(prompt);
  const top = suggested[0];

  // Flagged only when the named skill's language is entirely absent from the
  // prompt. An earlier version also flagged when some other skill outscored the
  // named one, which flagged Topic 9.2, whose prompt opens "Write a causation
  // argument", because "evidence" and "specific" appear more often than
  // "causation" does. If the named skill is present at all, the prompt does it,
  // and how much it does it is not something word counts can settle.
  const disagrees = own === 0;
  if (!disagrees) {
    if (!FLAGGED_ONLY) {
      console.log(`${G}✓${X} Topic ${topic.id}  ${W}${names.join(', ')}${X} ${D}(${own} marker${own === 1 ? '' : 's'} in the prompt)${X}`);
    }
    continue;
  }

  flagged++;
  console.log(`${R}!${X} ${W}Topic ${topic.id}${X}  named ${W}${names.join(', ')}${X}, prompt reads as `
    + `${W}${top ? top.skill : 'none of the eight'}${X}`);
  console.log(`${D}    label:  ${topic.skill}${X}`);
  console.log(`${D}    prompt: ${prompt.slice(0, 190)}${prompt.length > 190 ? '...' : ''}${X}`);
  console.log(`${D}    markers: ${named} ${own}, ${suggested.slice(0, 3).map(s => `${s.skill} ${s.hits}`).join(', ') || 'none'}${X}\n`);
}

console.log(`\n${W}${flagged} of ${checked} checkpoints read as a different skill than their label.${X}`);
if (noSkill) console.log(`${Y}${noSkill} topics have no readable AP skill, so their paste carries no skill line.${X}`);
if (settled) console.log(`${D}${settled} checkpoints declare no AP skill on purpose.${X}`);
console.log(`${D}Nothing here fails a build. Triage by hand: KEEP, RETAG or REWORD.${X}\n`);
