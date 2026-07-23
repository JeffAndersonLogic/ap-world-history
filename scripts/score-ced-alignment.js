#!/usr/bin/env node
'use strict';

/**
 * score-ced-alignment.js  —  PROTOTYPE (eval-loop step 1)
 *
 * The deterministic half of a CED-alignment verifier. It loads a topic,
 * extracts the ground truth the topic declares for itself (its College Board
 * Key Concepts, learning targets, and the AP reasoning skill implied by the
 * topic), plus the artifacts to be judged (the checkpoints and the skill
 * builder), and assembles a rigorous, rubric-grounded prompt for a model to
 * score. Generation is cheap; the value is in a trustworthy judge, so the
 * rubric — not the model call — is the important part of this file.
 *
 * SCOPE / HONEST LIMITATION: this checks INTERNAL alignment — do the
 * checkpoints and skill builder actually assess the KCs and learning objective
 * the topic claims? It does NOT verify that the topic's transcribed KC text
 * matches the real College Board CED. That is a separate, retrieval-grounded
 * check (the "accuracy needs external grounding" problem). Do not read a high
 * score here as "CED-accurate," only as "internally consistent."
 *
 * Usage:
 *   node scripts/score-ced-alignment.js 6.2            # print judge prompt for one topic
 *   node scripts/score-ced-alignment.js 6.2 --out DIR  # also write prompt to DIR/ced-alignment-6.2.prompt.txt
 *   node scripts/score-ced-alignment.js 6.2 6.8        # multiple topics
 *
 * If ANTHROPIC_API_KEY is set and @anthropic-ai/sdk is installed, pass --run
 * to call the model and print the JSON verdict directly. Otherwise the prompt
 * is emitted for you to run through any Claude / MagicSchool session — the
 * same build-a-prompt pattern the rest of BeHistorical already uses.
 */

const fs = require('fs');
const path = require('path');
const { loadLesson } = require('./lib/load-lesson-data');

// ── Which AP reasoning skill should this topic exercise? ──────────────────────
// Mirrors the heuristic in validate.js so the judge holds the topic to the
// right skill (Comparison / Causation / CCOT).
function primarySkill(topicTitle, subtitle) {
  const hay = `${topicTitle} ${subtitle}`.toLowerCase();
  if (hay.includes('continuity and change') || hay.includes('ccot')) return 'Continuity and Change Over Time (CCOT)';
  if (hay.includes('compar')) return 'Comparison';
  if (hay.includes('caus')) return 'Causation';
  return 'Causation'; // CED default for narrative topics
}

// ── Rubric ────────────────────────────────────────────────────────────────────
// Five dimensions, each 1–5. This is the contract the loop optimizes against,
// so it is spelled out in full rather than left to the model's taste.
const RUBRIC = `Score each artifact on FIVE dimensions, 1–5 (5 = best). Be a demanding
AP reader, not a cheerleader. Reserve 5 for genuinely exemplary; use 2–3 freely.

1. LO_FIDELITY — Does the task's command verb match the learning objective's
   verb? If the objective says COMPARE, a prompt that only asks students to
   EXPLAIN or DESCRIBE one case is a fidelity miss, however good otherwise.
2. SKILL_FIDELITY — Does the task actually exercise the topic's AP reasoning
   skill ({{SKILL}})? Comparison requires reasoning across cases; Causation
   requires cause/effect links; CCOT requires change AND continuity over time.
   Naming examples is not the same as reasoning with the skill.
3. KC_COVERAGE — Do the task and its required evidence map onto the declared
   Key Concepts, or does it drift to content the topic doesn't claim?
4. COGNITIVE_RIGOR — Is this AP-level analysis/argument, or recall/summary
   dressed up? A defensible-claim-with-reasoning task outranks "list two facts."
5. EVIDENCE_SPECIFICITY — Does it require the CED illustrative examples by name
   and force students to connect evidence to claim, or accept vague generalities?`;

const OUTPUT_CONTRACT = `Return ONLY valid JSON, no prose outside it, in this exact shape:
{
  "topic": "<topic id>",
  "skillExpected": "<skill>",
  "checkpoints": [
    {
      "title": "<checkpoint title>",
      "scores": { "lo_fidelity": n, "skill_fidelity": n, "kc_coverage": n, "cognitive_rigor": n, "evidence_specificity": n },
      "weakestDimension": "<dimension key>",
      "critique": "<2–3 sentences, concrete, quoting the prompt where relevant>",
      "suggestedRewrite": "<a stronger version of the prompt, or null if already strong>"
    }
  ],
  "skillBuilder": {
    "scores": { "lo_fidelity": n, "skill_fidelity": n, "kc_coverage": n, "cognitive_rigor": n, "evidence_specificity": n },
    "critique": "<2–3 sentences>",
    "suggestedRewrite": "<stronger prompt or null>"
  },
  "topicAlignmentScore": <0–100 overall>,
  "verdict": "<one sentence: is this topic's assessment aligned to its CED claims?>",
  "topFixes": ["<highest-leverage fix>", "..."]
}`;

function buildJudgePrompt(topicId, lesson) {
  const meta = lesson.meta || {};
  const skill = primarySkill(meta.title || '', meta.subtitle || '');
  const kcs = (lesson.collegeBoardKeyConcepts || []).map((k) =>
    `- ${k.code} (${k.theme}): ${k.text}\n    Illustrative examples: ${(k.illustrativeExamples || []).join('; ')}`
  ).join('\n');
  const targets = (lesson.learningTargets || []).map((t) =>
    `- [${t.kc}] ${t.target}`).join('\n');

  const checkpoints = (lesson.checkpoints || []).map((c, i) => {
    return `CHECKPOINT ${i + 1}: ${c.title}
  Stated learning targets: ${(c.learningTargets || []).join(' | ')}
  Stated success criteria: ${(c.successCriteria || []).join(' | ')}
  Required terms/evidence: ${(c.terms || []).join('; ')}
  PROMPT (the artifact to judge): "${c.prompt}"`;
  }).join('\n\n');

  const sb = lesson.skillBuilder || {};
  const skillBuilderBlock = `SKILL BUILDER: ${sb.title || '(none)'}
  Label: ${sb.label || ''}
  Steps: ${(sb.steps || []).map((s) => `${s.label} — ${s.text}`).join(' || ')}
  PROMPT (the artifact to judge): "${sb.prompt || ''}"`;

  return `You are an expert AP World History: Modern reader auditing whether a
lesson's assessments are aligned to the College Board content the lesson itself
claims to teach. Judge ONLY internal alignment against the ground truth below;
do not import outside facts about the CED.

TOPIC: ${meta.topic || topicId} — ${meta.title || ''}
LEARNING OBJECTIVE (subtitle): ${meta.subtitle || ''}
AP REASONING SKILL this topic must exercise: ${skill}

=== GROUND TRUTH: College Board Key Concepts declared by this topic ===
${kcs || '(none declared)'}

=== GROUND TRUTH: Learning targets declared by this topic ===
${targets || '(none declared)'}

=== ARTIFACTS TO JUDGE ===
${checkpoints || '(no checkpoints)'}

${skillBuilderBlock}

=== RUBRIC ===
${RUBRIC.replace('{{SKILL}}', skill)}

=== OUTPUT ===
${OUTPUT_CONTRACT}`;
}

// ── CLI ───────────────────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf('--out');
  const outDir = outIdx !== -1 ? args[outIdx + 1] : null;
  const topics = args.filter((a, i) => !a.startsWith('--') && i !== outIdx + 1);
  if (topics.length === 0) {
    console.error('Usage: node scripts/score-ced-alignment.js <topic-id> [<topic-id>...] [--out DIR]');
    process.exit(1);
  }
  if (outDir) fs.mkdirSync(outDir, { recursive: true });

  for (const topicId of topics) {
    const { lesson } = loadLesson(topicId);
    const prompt = buildJudgePrompt(topicId, lesson);
    if (outDir) {
      const file = path.join(outDir, `ced-alignment-${topicId}.prompt.txt`);
      fs.writeFileSync(file, prompt);
      console.error(`  wrote ${file}`);
    }
    console.log(`\n${'═'.repeat(78)}\nCED-ALIGNMENT JUDGE PROMPT — Topic ${topicId}\n${'═'.repeat(78)}`);
    console.log(prompt);
  }
}

if (require.main === module) main();

module.exports = { buildJudgePrompt, primarySkill };
