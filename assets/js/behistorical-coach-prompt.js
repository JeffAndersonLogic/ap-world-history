/**
 * behistorical-coach-prompt.js
 *
 * The one implementation of the Socrates paste contract: the message a student
 * copies out of a checkpoint bridge or a First & 10 reading and pastes into the
 * AI coach.
 *
 * WHY THIS FILE EXISTS
 *
 * Socrates is one MagicSchool chatbot serving all 77 topics, and his own
 * instructions carry no unit content on purpose. Everything he knows about the
 * assignment in front of the student arrives in this block. If a field goes
 * missing here, the coaching degrades to generic writing advice and every
 * structural check stays green, which is why the shape is asserted rather than
 * remembered. See docs/socrates/README.md.
 *
 * FOUR CONSUMERS, ONE IMPLEMENTATION
 *
 * This file runs in a browser and in Node, the same way
 * scripts/lib/canvas-parse-core.js does, because four things need the same
 * answer to "what does a paste for Topic 7.2 look like":
 *
 *   1. the checkpoint bridge in assets/js/behistorical-topic-renderer-v1.js,
 *      where the text is inlined between sentinels by
 *      scripts/build-coach-prompt.js;
 *   2. the 77 generated First & 10 readings, where scripts/lib/first10-page.js
 *      emits this file's source into the page;
 *   3. scripts/lib/socrates-course.js, which builds the same block from the
 *      lesson data for the documented contract and for the graded eval;
 *   4. scripts/test/socrates-contract.test.js, which asserts all 77 topics can
 *      produce a complete one.
 *
 * Two implementations would mean two answers depending on which door the student
 * came through, and the one that shipped would be the one nothing tested.
 *
 * DO NOT hand-edit the inlined copy inside the renderer. Change this file and run
 * `node scripts/build-coach-prompt.js`.
 */

(function () {
  'use strict';

  // The College Board's own unit spans from the AP World History Modern CED.
  //
  // This table is here rather than derived from the lesson data because
  // `meta.subtitle` carries a date range on only 38 of the 77 topics. On the
  // other 39 it is a thematic sentence, so labelling it "Period" would tell a
  // Unit 7 student their period is "How imperialist competition [...] escalated
  // one assassination into global war." Without a real period line the coach has
  // nothing to check an anachronism against, and catching anachronisms is one of
  // the eight things the graded eval measures.
  //
  // It lives in this file so the renderer, the readings, and the Node side all
  // read one table. Foundations is Jeff's own pre-course unit and has no CED span.
  var UNIT_PERIODS = {
    0: 'before c. 1200',
    1: 'c. 1200 to c. 1450',
    2: 'c. 1200 to c. 1450',
    3: 'c. 1450 to c. 1750',
    4: 'c. 1450 to c. 1750',
    5: 'c. 1750 to c. 1900',
    6: 'c. 1750 to c. 1900',
    7: 'c. 1900 to the present',
    8: 'c. 1900 to the present',
    9: 'c. 1900 to the present'
  };

  // Accepts '7.2', 'Topic 7.2', 7, or 'F3'.
  function unitPeriod(topicOrUnit) {
    var s = String(topicOrUnit == null ? '' : topicOrUnit);
    if (/^F/i.test(s.trim())) return UNIT_PERIODS[0];
    var m = s.match(/(\d+)/);
    return m ? (UNIT_PERIODS[Number(m[1])] || '') : '';
  }

  // ── AP skill normalization ─────────────────────────────────────────────────
  //
  // The skillBuilder labels and the reading badges are hand-authored prose, so
  // the same skill arrives as 'CCOT', 'Continuity & Change', 'Continuity and
  // Change practice' and 'Comparison and causation practice'. First match by
  // position wins as the primary skill, which makes 'Causation / Comparison'
  // primarily causation, matching how a teacher reads the label.
  //
  // This lives here rather than in scripts/build-skills-map.js, which is where
  // it was written, because two things now need the same answer to "which AP
  // skill is this topic practising": the Skills Lens dashboard, and the
  // Checkpoint 2 paste that asks Socrates to coach that skill. Two copies would
  // eventually give two answers, and the paste's copy is the one nothing would
  // notice was wrong.
  var SKILL_PATTERNS = [
    [/contextualization/i, 'Contextualization'],
    [/causation/i, 'Causation'],
    [/comparison/i, 'Comparison'],
    [/ccot|continuity/i, 'Continuity and Change'],
    [/argument|\bleq\b/i, 'Argumentation'],
    [/sourcing/i, 'Sourcing'],
    [/claims|evidence/i, 'Claims and Evidence'],
    [/developments and processes/i, 'Developments and Processes']
  ];

  function normalizeSkills(raw) {
    var text = String(raw == null ? '' : raw).trim();
    if (!text) return [];
    var hits = [];
    SKILL_PATTERNS.forEach(function (pair) {
      var at = text.search(pair[0]);
      var already = hits.some(function (h) { return h.name === pair[1]; });
      if (at !== -1 && !already) hits.push({ at: at, name: pair[1] });
    });
    hits.sort(function (a, b) { return (a.at - b.at) || a.name.localeCompare(b.name); });
    return hits.map(function (h) { return h.name; });
  }

  function clean(value) {
    return String(value == null ? '' : value).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  }

  function joinList(value) {
    return (Array.isArray(value) ? value : []).map(clean).filter(Boolean);
  }

  /**
   * ctx fields, all optional except topic and title:
   *   topic     '7.2'
   *   module    'Checkpoint 2' or 'First & 10 Reading'
   *   title     the topic title
   *   span      the CED unit period, e.g. 'c. 1900 to the present'
   *   focus     the lesson subtitle, a thematic sentence
   *   targets   learning target sentences
   *   criteria  success criteria sentences
   *   kcs       [{code, text}]
   *   terms     expected evidence terms
   *   skill     the topic's AP skillBuilder label, normalized before use
   *   checklist strong-answer checklist sentences
   *   assigned  the assigned prompt
   *   draft     the student's single response  (checkpoint shape)
   *   answers   [{question, response}]         (reading shape)
   *
   * The order is deliberate. The topic line is first because it is what lets one
   * bot serve 77 topics, and the student's own writing is last because a model
   * reads what bounds the task before what it is being asked to judge.
   */
  function buildCoachPrompt(ctx) {
    var c = ctx || {};
    var lines = [];

    lines.push('Topic ' + clean(c.topic) + ', ' + (clean(c.module) || 'Checkpoint')
      + ', ' + clean(c.title) + '.');
    if (clean(c.span)) lines.push('Period: ' + clean(c.span) + '.');
    if (clean(c.focus)) lines.push('Lesson focus: ' + clean(c.focus));

    var targets = joinList(c.targets);
    if (targets.length) lines.push('Learning target: ' + targets.join(' '));

    var criteria = joinList(c.criteria);
    if (criteria.length) lines.push('Success criteria: ' + criteria.join(' '));

    var kcs = (Array.isArray(c.kcs) ? c.kcs : [])
      .map(function (k) { return clean(k && k.code) + ' ' + clean(k && k.text); })
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
    if (kcs.length) lines.push('Key concept: ' + kcs.join(' '));

    var terms = joinList(c.terms);
    if (terms.length) lines.push('Focus terms: ' + terms.join(', ') + '.');

    // The AP reasoning skill this topic is practising.
    //
    // The persona's diagnostic list already ends on "if the prompt calls for
    // causation, comparison, or continuity and change, does the draft actually
    // do that reasoning?" It has always had that rung and never been told which
    // skill applies, so it had to infer one from the prompt's wording.
    //
    // Derived from the topic's own skillBuilder label rather than typed onto 77
    // checkpoints, for the same reason a due date is derived from the schedule:
    // a second place to state it is a second place for the two to disagree.
    var skill = normalizeSkills(c.skill)[0] || '';
    if (skill) lines.push('Reasoning skill: ' + skill + '.');

    var checklist = joinList(c.checklist);
    if (checklist.length) lines.push('Strong answer checklist: ' + checklist.join(' '));

    if (clean(c.assigned)) lines.push('Assigned prompt: ' + clean(c.assigned));

    // A reading carries three question-and-answer pairs; a checkpoint carries one
    // draft. Both keep the student's own words verbatim rather than cleaned, since
    // the coach is being asked to judge exactly what the student wrote.
    var answers = Array.isArray(c.answers) ? c.answers : null;
    if (answers && answers.length) {
      lines.push('', 'Here are my responses:', '');
      answers.forEach(function (a, i) {
        var q = clean(a && a.question);
        lines.push('Question ' + (i + 1) + (q ? ': ' + q : ''));
        lines.push('My response: ' + String((a && a.response) || '').trim());
        if (i < answers.length - 1) lines.push('');
      });
      lines.push('');
    } else {
      lines.push('', 'Here is my response:', '',
        c.draft == null ? '{{DRAFT}}' : String(c.draft).trim(), '');
    }

    // 2026-08-29: this line used to read "Coach me by asking one question at a
    // time", which was version 1 of the persona restated inside the student's own
    // message. That made it the one instruction Socrates could not retune around:
    // the persona tells him the pasted block is authoritative, so every paste
    // reinstated the rule the version 2 retune exists to relax, in the place the
    // persona says wins. A second copy of a rule is a second place for it to fall
    // out of step, which is the same reason there is only one prompt builder.
    // The paste now asks for one thing at a time without dictating the form, and
    // the persona alone decides whether that thing is a question.
    lines.push('Give me one thing to work on at a time. Do not write my final answer for me.');
    return lines.join('\n');
  }

  var API = {
    buildCoachPrompt: buildCoachPrompt,
    normalizeSkills: normalizeSkills,
    unitPeriod: unitPeriod,
    UNIT_PERIODS: UNIT_PERIODS
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (typeof window !== 'undefined') window.BH_COACH = API;
})();
