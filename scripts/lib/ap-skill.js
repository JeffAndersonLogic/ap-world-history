'use strict';

/**
 * ap-skill.js
 *
 * Shared AP-reasoning-skill helpers for the deterministic unit builders.
 * Centralizing the checkpoint pedagogy here means a fix flows to every
 * generated topic on the next rebuild instead of being hand-applied file by
 * file — the "fix at the source" principle behind the eval loop.
 */

/** Derive the AP reasoning skill a topic must exercise from its title + LO. */
function apReasoningSkill(title, lo) {
  const hay = `${title || ''} ${lo || ''}`.toLowerCase();
  if (hay.includes('continuity and change') || hay.includes('ccot')) return 'ccot';
  if (hay.includes('compar')) return 'comparison';
  return 'causation';
}

const SKILL_BUILDER_LABEL = {
  comparison: 'Comparison practice',
  causation: 'Causation practice',
  ccot: 'Continuity and change practice',
};

/**
 * Skill-aware Checkpoint 1.
 *
 * The old template asked students to "explain how [A] and [B] illustrate the
 * learning objective" for every topic — which (a) never states the objective
 * a student is reading, and (b) applies a causation-flavored "explain the
 * process" frame even to Comparison and CCOT topics, so the first checkpoint
 * did not actually exercise the topic's own skill. This returns a first check
 * that uses the topic's real reasoning move and names the objective outright.
 *
 * Returns the full checkpoint object; callers may override fields as needed.
 */
function checkpoint1(topic) {
  const skill = apReasoningSkill(topic.title, topic.lo);
  const [a, b] = topic.cases;
  const base = { responseType: 'Checkpoint 1', terms: topic.cases };

  if (skill === 'comparison') {
    return {
      ...base,
      title: 'Checkpoint 1: Compare the Cases',
      subtitle: 'Reason across two cases instead of describing each alone.',
      cardDesc: `Compare ${a} and ${b}.`,
      learningTargets: [`Compare ${a} and ${b} rather than describing each in isolation.`],
      successCriteria: ['Name one similarity and one difference, then explain what accounts for the difference.'],
      prompt: `Compare ${a} and ${b}. Identify at least one similarity and one difference, then explain what accounts for the difference, in service of this objective: ${topic.lo}`,
      focus: ['Reason across both cases', 'One similarity and one difference', 'Explain the difference'],
    };
  }

  if (skill === 'ccot') {
    return {
      ...base,
      title: 'Checkpoint 1: Change and Continuity',
      subtitle: 'Track what changed and what persisted over time.',
      cardDesc: `Trace change and continuity in ${a} and ${b}.`,
      learningTargets: [`Explain both change and continuity using ${a} and ${b}.`],
      successCriteria: ['Identify one change and one continuity, then account for the continuity.'],
      prompt: `Using ${a} and ${b}, explain both what changed and what stayed the same over time, and account for why the continuity persisted, in service of this objective: ${topic.lo}`,
      focus: ['Identify a change', 'Identify a continuity', 'Account for what persisted'],
    };
  }

  // causation (default)
  return {
    ...base,
    title: 'Checkpoint 1: Trace the Causes',
    subtitle: 'Connect cause and effect, then weigh significance.',
    cardDesc: `Link ${a} and ${b} as cause and effect.`,
    learningTargets: [`Explain how ${a} and ${b} are connected as cause and effect.`],
    successCriteria: ['Explain each example as a cause or an effect, then judge which mattered more.'],
    prompt: `Explain how ${a} and ${b} function as causes or effects in this topic, then judge which had the greater significance and why, in answering this objective: ${topic.lo}`,
    focus: ['Establish cause and effect', 'Use specific evidence', 'Weigh relative significance'],
  };
}

/** Skill-derived Skill Builder label (replaces the stray "Comparison and causation"). */
function skillBuilderLabel(topic) {
  return SKILL_BUILDER_LABEL[apReasoningSkill(topic.title, topic.lo)];
}

module.exports = { apReasoningSkill, checkpoint1, skillBuilderLabel, SKILL_BUILDER_LABEL };
