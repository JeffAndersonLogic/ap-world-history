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
 * Checkpoint 2's paste now carries a `Reasoning skill:` line, derived from the
 * topic's AP Skill Builder label, so Socrates can coach the reasoning move the
 * lesson is practising instead of inferring one from the prompt's wording.
 *
 * That wiring is only an improvement where the label and the checkpoint are
 * about the same thing, and they are not always. Topic 5.1 is the case that
 * produced this script: its Skill Builder is "Causation practice", while its
 * Checkpoint 2 asks for two mechanisms of spread, two excluded groups, and a
 * defended judgement about whether Enlightenment universalism was genuine. That
 * is argumentation and contextualization work. Telling Socrates to coach
 * causation there makes the coaching worse than it was before, in a way nothing
 * else in the repo would notice.
 *
 * **Deliberately not in any suite, and it exits 0 always.** Whether a checkpoint
 * is really doing causation is a judgement about teaching, not something a
 * regex decides, and a gate that failed a push over it would teach one
 * behaviour: edit prompts until the grep goes quiet. Expect false positives by
 * design. This is a worklist, not a verdict, the same shape as
 * report-absolutes.js and report-checkpoint-congruence.js.
 *
 * THREE OUTCOMES FOR A HIT
 *
 *   KEEP     the prompt does the named skill, the verbs just do not say so.
 *            Most hits. Nothing to do.
 *   RETAG    the Skill Builder label names the wrong skill for what this topic
 *            actually practises. Fix the label; the paste follows.
 *   REWORD   the label is right and the checkpoint drifted off it. Fix the
 *            checkpoint prompt, which is the more common real finding, because
 *            a checkpoint that does not exercise the topic's skill is a gap in
 *            the lesson rather than a labelling error.
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
  'Causation': [/\bcause[ds]?\b/i, /\bcausal\b/i, /\bled to\b/i, /\bresult(?:ed|ing)?\b/i,
    /\bwhy did\b/i, /\beffects?\b/i, /\bconsequences?\b/i, /\bbecause\b/i, /\bmechanism\b/i],
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
let noSkill = 0;
let checked = 0;

for (const topic of topics) {
  if (only && topic.id !== only) continue;
  const cp = topic.checkpoints[topic.checkpoints.length - 1];
  if (!cp || !cp.prompt) continue;

  const named = normalizeSkills(topic.skill)[0] || '';
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
  const own = markersHit(named, prompt);
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
      console.log(`${G}✓${X} Topic ${topic.id}  ${W}${named}${X} ${D}(${own} marker${own === 1 ? '' : 's'} in the prompt)${X}`);
    }
    continue;
  }

  flagged++;
  console.log(`${R}!${X} ${W}Topic ${topic.id}${X}  named ${W}${named}${X}, prompt reads as `
    + `${W}${top ? top.skill : 'none of the eight'}${X}`);
  console.log(`${D}    label:  ${topic.skill}${X}`);
  console.log(`${D}    prompt: ${prompt.slice(0, 190)}${prompt.length > 190 ? '...' : ''}${X}`);
  console.log(`${D}    markers: ${named} ${own}, ${suggested.slice(0, 3).map(s => `${s.skill} ${s.hits}`).join(', ') || 'none'}${X}\n`);
}

console.log(`\n${W}${flagged} of ${checked} checkpoints read as a different skill than their label.${X}`);
if (noSkill) console.log(`${Y}${noSkill} topics have no readable AP skill, so their paste carries no skill line.${X}`);
console.log(`${D}Nothing here fails a build. Triage by hand: KEEP, RETAG or REWORD.${X}\n`);
