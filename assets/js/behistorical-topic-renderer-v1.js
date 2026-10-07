// behistorical-topic-renderer-v1.js
// BeHistorical AP World History, Shared Topic Renderer
// Updated: Capture reduced to 3 built touchpoints (First & 10, Checkpoint 1, Checkpoint 2), June 2026,
//          restored August 2026 after a brief expansion. BeInTheRoom's AP reflection joined the capture
//          set later that month: every BeInTheRoom scenario page writes its reflection to
//          behistorical-beintheroom-<TOPIC_KEY> and injectBeInTheRoomAnswer() below pulls it back in,
//          the same bridge injectFirst10Answers() uses for the First & 10 iframe.
//          Every other module card keeps a draft box; "Copy All My Work" carries those to Canvas.

const L = window.BEHISTORICAL_LESSON;
const byId = id => document.getElementById(id);
// Bold first, then italics: once **strong** is consumed the only asterisks left
// are single ones, so [^*]+ cannot reach across a bold marker and swallow it.
const md = s => String(s || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
const kcPills = kc => kc.split(';').map(s => s.trim()).filter(Boolean).map(s => `<span class="inline-target-kc">${s}</span>`).join(' ');
// Id of the Copy All My Work textarea. Declared up here because the boot block
// calls loadAllDrafts(), which must skip it, and a const declared further down
// would still be in its temporal dead zone at that point.
const WORK_EXPORT_ID = 'all-work-output';
// Prompt text as each module card actually displayed it, keyed by textarea id.
const WORK_PROMPTS = {};
// Confidence for slots whose control lives somewhere this page cannot reach,
// which today means the three First & 10 questions inside the reading iframe.
const WORK_CONFIDENCE = {};
// Canonical labels for First & 10 questions past the three WORK_ITEMS declares.
// Without these, Topic 1.7's fourth and fifth answers exported as "First10 q4".
const WORK_FIRST10_LABELS = {};
// What each checkpoint's AI Coach prompt needs, keyed by its response textarea
// id. The bridge buttons only carry that id, so the mode and the focus terms
// have to be stashed here at render time for generateCheckpointPrompt to read.
const CHECKPOINT_MS = {};

// ── BEGIN INLINED COACH PROMPT BUILDER ──────────────────────────────────────
//
// Derived from assets/js/behistorical-coach-prompt.js by
// scripts/build-coach-prompt.js. Do not hand-edit: validate.js re-derives
// this block and fails the push on drift. Change the source file and rebuild.
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
 * FIVE CONSUMERS, ONE IMPLEMENTATION
 *
 * This file runs in a browser and in Node, the same way
 * scripts/lib/canvas-parse-core.js does, because five things need the same
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
 *   5. study-guides/era-2-exam-study-guide.html, which builds the separate
 *      Teach Me chatbot paste from the visible guide cards.
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
    // "qualification" is argumentation language: qualifying a claim is the move.
    // Without it, "Evidence, causation, and qualification" reported as Claims and
    // Evidence alone, against checkpoints that say "Develop and qualify an
    // argument".
    [/argument|qualif|\bleq\b/i, 'Argumentation'],
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
   *   skill     which AP skill THIS assignment assesses, normalized before use.
   *             Callers pass the checkpoint's own `skill` when it has one and
   *             fall back to the topic's skillBuilder label. Those are two
   *             different facts: what module 05 teaches, and what module 10
   *             assesses. On about a sixth of the course they differ, so the
   *             fallback alone named the wrong skill. An explicit empty string
   *             means "this checkpoint has no clean AP skill", and no line is
   *             emitted, which is honest rather than forcing a label onto a
   *             descriptive prompt.
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
    // Every skill the label names, not just the first.
    //
    // Many labels are compound: "Comparison and causation practice", "Evidence,
    // causation, and qualification". Collapsing those to a single primary picked
    // by position told Socrates to coach comparison on five Unit 6 checkpoints
    // that do causation and argumentation, and Claims and Evidence on five Unit
    // 9 checkpoints that say "Develop and qualify an argument". Naming all of
    // them is both more honest and less work than deciding which one wins.
    var skills = normalizeSkills(c.skill);
    if (skills.length) lines.push('Reasoning skill: ' + skills.join(', ') + '.');

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

  /**
   * Builds the student-visible paste for the separate Teach Me chatbot. It
   * identifies the selected activity but carries no checker content. The
   * chatbot receives that content through its teacher-configured private
   * knowledge file instead.
   *
   * ctx fields:
   *   title  the topic or comparison title
   *   focus  the visible teaching target the student chose
   *   scope  topic numbers the private knowledge file should consult
   */
  function buildTeachMePrompt(ctx) {
    var c = ctx || {};
    var title = clean(c.title);
    var focus = clean(c.focus);
    var openingFocus = focus.replace(/\?/g, '.');
    if (openingFocus && !/[.!]$/.test(openingFocus)) openingFocus += '.';
    var scope = joinList(c.scope);
    var lines = [
      'TEACH ME',
      'Topic title: ' + title,
      'Teaching focus I chose: ' + focus,
      'Opening focus: ' + openingFocus,
      'Evidence scope: ' + (scope.length === 1 ? 'Topic ' : 'Topics ') + scope.join(', '),
      '',
      'I am ready to teach.'
    ];
    return lines.join('\n');
  }

  var API = {
    buildCoachPrompt: buildCoachPrompt,
    buildTeachMePrompt: buildTeachMePrompt,
    normalizeSkills: normalizeSkills,
    unitPeriod: unitPeriod,
    UNIT_PERIODS: UNIT_PERIODS
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (typeof window !== 'undefined') window.BH_COACH = API;
})();
// ── END INLINED COACH PROMPT BUILDER ────────────────────────────────────────

// ── BEGIN INLINED CLASSROOM CONFIG ──────────────────────────────────────────
//
// Derived from assets/js/behistorical-classroom.js by
// scripts/build-classroom-config.js. Do not hand-edit: the offline suite
// re-derives this block and fails the push on drift. Change the source data
// and rebuild.
// BeHistorical serves two AP World History sections through one shared site,
// each running its own MagicSchool Socrates classroom. This resolves which
// MagicSchool join link a student's AI Coach / Open MagicSchool buttons
// should use, so the two sections never land in each other's classroom.
//
// A student's classroom is chosen once, by the link their own teacher gives
// them (?classroom=<key>), and stays remembered on that device from then on.
// A student who never sees that link resolves to whatever default the caller
// passes in, unchanged.
//
// Generated by scripts/build-classroom-config.js from
// scripts/lib/classroom-config.js. Do not hand-edit: the offline suite
// re-derives this file and fails the push on drift. Change the source data
// and rebuild.
(function (global) {
  'use strict';

  var STORAGE_KEY = 'behistorical-classroom';
  var CLASSROOMS = {"kelly":"https://student.magicschool.ai/s/login?joinCode=a4fGJw"};
  var TEACH_ME_URL = "https://student.magicschool.ai/s/login?joinCode=KbZuaA";

  function currentClassroomUrl() {
    try {
      var params = new URLSearchParams(global.location.search);
      var fromLink = params.get('classroom');
      if (fromLink && CLASSROOMS[fromLink]) {
        global.localStorage.setItem(STORAGE_KEY, fromLink);
        return CLASSROOMS[fromLink];
      }
      var remembered = global.localStorage.getItem(STORAGE_KEY);
      if (remembered && CLASSROOMS[remembered]) return CLASSROOMS[remembered];
    } catch (error) {
      // Private browsing, or localStorage blocked: fall through to the default.
    }
    return null;
  }

  function resolveMagicSchoolUrl(defaultUrl) {
    return currentClassroomUrl() || defaultUrl;
  }

  function resolveTeachMeUrl() {
    return TEACH_ME_URL || null;
  }

  global.BHClassroom = {
    resolveMagicSchoolUrl: resolveMagicSchoolUrl,
    resolveTeachMeUrl: resolveTeachMeUrl
  };
})(window);
// ── END INLINED CLASSROOM CONFIG ────────────────────────────────────────────

// ── BEGIN INLINED SAVE HEALTH ───────────────────────────────────────────────
//
// Derived from assets/js/behistorical-save-health.js by
// scripts/build-save-health.js. Do not hand-edit: validate.js re-derives
// this block and fails the push on drift. Change the source file and rebuild.
// Save health: makes a failed save countable instead of silent.
//
// This is Phase 1 of the student response persistence plan recorded in
// AndersonLogic-OS at 04_PRODUCTS/BeHistorical/
// Student-Response-Persistence-Architecture-2026-09-08.md. No vendor, no
// network, no authentication, and no student writing leaves the device. This
// file records *whether* saves worked. It never records what was written.
//
// WHY A NUMBER RATHER THAN AN ANECDOTE
//
// Roughly two students a day lose work and nobody can say why. Chrome evicting
// site data under quota pressure, a district policy clearing site data on exit,
// a student working in a guest or secondary profile, and BHDraftStore's own
// in-memory fallback all look identical to the student, and identical to every
// check in this repository. Every structural check stays green through all of
// them, which is the failure shape this repo already knows well.
//
// The baseline is the point. Once cloud persistence ships, a loss reported by a
// student cannot be told apart from this same failure still running unless
// there is a number from before.
//
// WHAT THIS CANNOT DO, stated because the limit decides how to read the output
//
// The record lives in the same storage it is measuring, so a wipe takes the
// evidence with it. It cannot report its own erasure. What it can report is a
// record that has come back *new*: a `firstSeen` of today, and a `loads` count
// of 1, on a student who has been in this course for weeks, means this storage
// was cleared. It does not say by what. Browser eviction, a district cleanup
// policy, a different Chromebook profile, a cleared-site-data event and a first
// load after a deploy all produce the same fresh record. Read a reset record as
// a question worth chasing, not as an answer and not as the absence of one.
//
// It also cannot tell you which of the four candidate causes fired. What it
// narrows is which ones are still candidates: `storageLive` false points at a
// blocked or guest profile, a `QuotaExceededError` points at quota, and a reset
// record with storage healthy points at something clearing site data.
//
// A SECOND COUNTER, ADDED 2026-09-21, MEASURING A DATABASE THAT DOES NOT EXIST
//
// ZCS finance will not approve a per-write bill it cannot bound. The question
// Dan Layton asked on 2026-09-21 was how many writes a day this would be, and
// arithmetic off the lesson data is an estimate somebody can argue with. So the
// module also projects what a Firestore sync layer *would* have written, on the
// devices, in the room, and counts it. Still no vendor, still no network, and
// still nothing but counts: the projection is arithmetic over the timestamps of
// saves that were already happening. See the sync projection section below for
// the policy it assumes and the direction it errs in.
(function (global) {
  'use strict';

  var KEY = 'behistorical-save-health';
  var SCHEMA = 1;

  // Counting every autosave to disk would double this subsystem's own writes,
  // which is the opposite of helpful on a device already short of quota. The
  // record is kept in memory and flushed on a change worth keeping: any
  // failure, the first load, and at most once per interval otherwise.
  //
  // The cost, stated because it bounds one of the two counters: a hard kill
  // (a crash, a power loss, a tab killed without firing pagehide) can lose up
  // to one interval of *successful* writes, so `ok` is a slight undercount.
  // Failures flush immediately and are not affected, which is the half that
  // matters here. Do not compute a failure *rate* from ok and failed without
  // accounting for that.
  var FLUSH_INTERVAL_MS = 5000;

  // ── The sync projection ─────────────────────────────────────────────────────
  //
  // THE POLICY IS PART OF THE NUMBER, so it is recorded beside it.
  //
  // A cloud write is not a local write. BHDraftStore autosaves 600ms after a
  // student stops typing, which across one checkpoint answer is dozens of
  // writes, and mirroring that to Firestore one for one is precisely the
  // runaway shape the district has been billed for before. The proposed sync
  // layer coalesces per response slot: the first save after a quiet period goes
  // out, and every save inside the window that follows folds into it. That
  // window is SYNC_COALESCE_MS, and it is written into the record itself,
  // because a write count read against the wrong policy is worse than no write
  // count at all.
  //
  // WHICH WAY THIS MODEL ERRS, stated because a floor and a ceiling are
  // different arguments to make to a finance office.
  //
  // It is a leading edge throttle: one write per window per slot, plus one tail
  // write per slot still carrying edits when the page goes away. A trailing
  // edge implementation lands within one write per slot of the same count. It
  // does not model retries, an offline queue draining after a bus ride home, or
  // the reads a student's own records cost on page load. Read it as a floor on
  // writes, never as a ceiling on cost.
  var SYNC_COALESCE_MS = 10000;

  // TWO DATA MODELS ARE PROJECTED, NOT ONE, because the write count is a fact
  // about the schema as much as about the students.
  //
  // Firestore bills per *document* write. The architecture record proposes one
  // record per response slot, which makes the conflict rule easy to state and
  // costs one write per slot per window. A second reader of the same problem
  // proposed one consolidated document per student and topic, which folds every
  // field changed in a window into a single billable write and is roughly eight
  // times cheaper on a normal lesson.
  //
  // Neither is obviously right. Per slot keeps "a non-empty answer is never
  // silently replaced" a per-answer question; consolidated makes two devices
  // editing two different boxes collide at the document. That is a design
  // decision with a privacy and data-loss dimension, not an optimization, and
  // it is not settled here.
  //
  // What is settled is that nobody should have to pick it from arithmetic. Both
  // are counted from the same student behaviour, against the same window, so the
  // only thing separating the two figures is the schema. `slotWrites` is the
  // per-slot model; `docWrites` is the consolidated one. A lesson page serves one
  // topic, so every key written from it belongs to that topic's document, which
  // is why the consolidated model needs no key parsing and never has to learn
  // how a draft key is spelled.

  // The record lives in the storage it is measuring, so it may not grow without
  // bound. Roughly a grading period of class days, oldest dropped first.
  var SYNC_DAY_CAP = 45;

  var state = null;
  var lastFlush = 0;

  // In memory only, and deliberately. `syncSlots` is keyed by draft key, and a
  // draft key carries a topic and a slot. This record stores counts, and
  // section 4 of scripts/test/save-health.test.js is what holds that line.
  var syncSlots = {};
  var syncMinute = { bucket: 0, count: 0 };
  // The consolidated model's single bucket: one document for the whole page.
  var syncDoc = { sentAt: 0, dirty: false, open: false };

  // Deliberately raw localStorage rather than BHDraftStore. A telemetry write
  // that went through the store being measured would recurse on failure, and
  // would also land in the key sweep that collectLessonWork() treats as
  // student writing.
  function readRaw() {
    try {
      var raw = global.localStorage.getItem(KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.schema !== SCHEMA) return null;
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function writeRaw(record) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(record));
      return true;
    } catch (error) {
      // A telemetry write that cannot land is itself the condition being
      // measured. Losing the record is acceptable; throwing out of an autosave
      // handler is not.
      return false;
    }
  }

  function now() { return Date.now(); }

  function blankSync() {
    return {
      // The policy the counts below were taken against. Never drop this field:
      // a write count with no window attached cannot be read.
      coalesceMs: SYNC_COALESCE_MS,
      // Projected cloud writes, which is the figure the district asked for.
      writes: 0,
      // How many of those were the tail flush as a page went away, rather than
      // a window opening. A high share means students leave mid-answer, which
      // is a teaching fact as much as a billing one.
      tailWrites: 0,
      // Local autosaves seen. writes divided into this is how much traffic the
      // coalescing window absorbs, and it is the answer to "what stops a loop
      // from becoming a bill".
      localWrites: 0,
      // The most projected writes in any single clock minute on this device.
      // A maximum rather than an average on purpose: a write loop barely moves
      // a daily average on the day it starts and pins one minute immediately.
      busiestMinute: 0,
      // The consolidated model: one document per student and topic. Counted
      // from the same saves, against the same window, so slotWrites divided by
      // docWrites is the schema's own multiplier and nothing else.
      docWrites: 0,
      docTailWrites: 0,
      // dayKey -> { w: per-slot writes, d: consolidated writes, l: local autosaves }
      days: {}
    };
  }

  function blank() {
    return {
      schema: SCHEMA,
      firstSeen: now(),
      lastSeen: now(),
      loads: 0,
      ok: 0,
      failed: 0,
      // Loads that began with localStorage already refusing to serve, which is
      // BHDraftStore running entirely on its in-memory fallback. Work survives
      // the session and vanishes on reload, which is one of the four candidate
      // causes and the one most easily mistaken for the others.
      memoryOnlyLoads: 0,
      lastError: null,
      // Filled in asynchronously; see measureQuota below.
      usage: null,
      quota: null,
      persisted: null,
      sync: blankSync()
    };
  }

  // Local date getters, never toISOString. toISOString is UTC, which rolls the
  // day over during the school evening in Indiana and would file a student
  // working after practice under tomorrow. BeCurrent's Desk refuses the same
  // call for the same reason.
  function dayKey(at) {
    var d = new Date(at);
    var m = d.getMonth() + 1;
    var day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }

  function load() {
    if (state) return state;
    state = readRaw() || blank();
    // A record written before the projection existed is still the baseline this
    // subsystem was installed for, so the field is filled in rather than the
    // record discarded. Bumping SCHEMA would have reset firstSeen on every
    // device at once, which would make every record in the course look freshly
    // cleared and destroy the one signal this file can give about storage being
    // wiped. Read the note at the top of this file for why that signal matters.
    if (!state.sync) state.sync = blankSync();
    return state;
  }

  function flush(force) {
    if (!state) return;
    var at = now();
    if (!force && at - lastFlush < FLUSH_INTERVAL_MS) return;
    lastFlush = at;
    state.lastSeen = at;
    writeRaw(state);
  }

  // navigator.storage is the only part of this that reports a browser state
  // directly rather than counting events. `persisted` false means this site's
  // storage is best-effort and may be evicted by the browser under storage
  // pressure, which is the normal state for a plain website. That keeps browser
  // eviction a live candidate. It does not by itself establish the cause of any
  // work a student has already lost, and must not be quoted as though it did.
  function measureQuota() {
    var storage = global.navigator && global.navigator.storage;
    if (!storage) return;
    try {
      if (typeof storage.estimate === 'function') {
        storage.estimate().then(function (estimate) {
          var s = load();
          s.usage = typeof estimate.usage === 'number' ? estimate.usage : null;
          s.quota = typeof estimate.quota === 'number' ? estimate.quota : null;
          flush(true);
        }).catch(function () { /* diagnostics are best effort */ });
      }
      if (typeof storage.persisted === 'function') {
        storage.persisted().then(function (isPersisted) {
          var s = load();
          s.persisted = !!isPersisted;
          flush(true);
        }).catch(function () { /* diagnostics are best effort */ });
      }
    } catch (error) {
      // An older browser, or one that exposes the object and not the methods.
    }
  }

  // Called once by each renderer as it sets up its draft store, with whether
  // localStorage answered the probe.
  function startSession(storageLive) {
    var s = load();
    s.loads += 1;
    if (!storageLive) s.memoryOnlyLoads += 1;
    s.storageLive = !!storageLive;
    flush(true);
    measureQuota();
  }

  function syncDay(record, at) {
    var key = dayKey(at);
    if (!record.sync.days[key]) {
      record.sync.days[key] = { w: 0, d: 0, l: 0 };
      var keys = Object.keys(record.sync.days).sort();
      while (keys.length > SYNC_DAY_CAP) delete record.sync.days[keys.shift()];
    }
    return record.sync.days[key];
  }

  function countMinute(record, at) {
    var bucket = Math.floor(at / 60000);
    if (syncMinute.bucket !== bucket) { syncMinute.bucket = bucket; syncMinute.count = 0; }
    syncMinute.count += 1;
    if (syncMinute.count > record.sync.busiestMinute) record.sync.busiestMinute = syncMinute.count;
  }

  // Called on every *successful* local save, with the key that was written. A
  // save that failed on this device would never have reached a cloud either, so
  // it is counted as a failure above and not projected here.
  //
  // `key` is used as a map key and is never stored. A caller that has no key to
  // give simply projects nothing, which is the honest answer: without a slot
  // there is nothing to coalesce against and a guess would be worse than a gap.
  function projectSync(key, at) {
    if (!key) return;
    var record = load();
    var day = syncDay(record, at);
    day.l += 1;
    record.sync.localWrites += 1;

    // The consolidated model first, because it does not care which slot this
    // was: any field changing inside the window rides the one document write.
    if (syncDoc.open && (at - syncDoc.sentAt) < SYNC_COALESCE_MS) {
      syncDoc.dirty = true;
    } else {
      syncDoc = { sentAt: at, dirty: false, open: true };
      record.sync.docWrites += 1;
      day.d += 1;
    }

    var slot = syncSlots[key];
    if (slot && (at - slot.sentAt) < SYNC_COALESCE_MS) {
      // Inside a window a previous save already opened. The sync layer folds
      // this edit into that write rather than sending a second one, which is
      // the whole mechanism keeping a 600ms autosave off a per-write bill.
      slot.dirty = true;
      return;
    }
    syncSlots[key] = { sentAt: at, dirty: false };
    record.sync.writes += 1;
    day.w += 1;
    countMinute(record, at);
  }

  // The tail. Every slot still carrying edits made inside its last window would
  // be flushed as the page goes away, and a student closing the tab at the bell
  // is the ordinary case here rather than the edge one.
  function projectTail() {
    var record = load();
    var at = now();
    var day = syncDay(record, at);
    for (var key in syncSlots) {
      if (!Object.prototype.hasOwnProperty.call(syncSlots, key)) continue;
      if (!syncSlots[key].dirty) continue;
      syncSlots[key].dirty = false;
      record.sync.writes += 1;
      record.sync.tailWrites += 1;
      day.w += 1;
    }
    // One tail write for the whole document, however many of its fields were
    // still dirty. That is the consolidated model's entire point, and the tail
    // is where it shows most.
    if (syncDoc.dirty) {
      syncDoc.dirty = false;
      record.sync.docWrites += 1;
      record.sync.docTailWrites += 1;
      day.d += 1;
    }
  }

  // Called on every draft write, successful or not. `error` is the caught
  // exception when there was one. Its *name* is kept, never its message: a
  // message can carry a key, and a key carries a topic and a slot.
  function recordWrite(ok, error, key) {
    var s = load();
    if (ok) {
      s.ok += 1;
      projectSync(key, now());
      flush(false);
      return;
    }
    s.failed += 1;
    s.lastError = {
      name: (error && error.name) ? String(error.name) : 'UnknownError',
      at: now()
    };
    // A failure is flushed immediately. The interval exists to keep successful
    // saves cheap, and a failure is the whole reason this file exists.
    flush(true);
  }

  function summary() {
    var s = load();
    return {
      schema: s.schema,
      firstSeen: s.firstSeen,
      lastSeen: s.lastSeen,
      loads: s.loads,
      ok: s.ok,
      failed: s.failed,
      memoryOnlyLoads: s.memoryOnlyLoads,
      lastError: s.lastError ? { name: s.lastError.name, at: s.lastError.at } : null,
      storageLive: !!s.storageLive,
      usage: s.usage,
      quota: s.quota,
      persisted: s.persisted,
      sync: {
        coalesceMs: s.sync.coalesceMs,
        writes: s.sync.writes,
        tailWrites: s.sync.tailWrites,
        docWrites: s.sync.docWrites,
        docTailWrites: s.sync.docTailWrites,
        localWrites: s.sync.localWrites,
        busiestMinute: s.sync.busiestMinute,
        days: JSON.parse(JSON.stringify(s.sync.days))
      }
    };
  }

  // One plain sentence, for a surface a person reads rather than parses. It
  // says "this device" throughout, because that is the true scope of every
  // claim this file can make.
  function line() {
    var s = summary();
    if (!s.storageLive) {
      return 'This browser is not saving your work. Nothing is stored on this device, '
        + 'so gather and copy your work into Canvas before you leave.';
    }
    if (s.failed > 0) {
      return 'Saving on this device has failed ' + s.failed + ' time'
        + (s.failed === 1 ? '' : 's') + ' (' + s.lastError.name + '). '
        + 'Gather and copy your work into Canvas now.';
    }
    return 'Saved on this device only. Copy your work into Canvas before you leave.';
  }

  // Exposed for a teacher looking at one student's Chromebook, and for the
  // Phase 1 write-up. It is not sent anywhere; reading it means standing at
  // the device, which is the honest scope of a browser-local diagnostic.
  function report() {
    return JSON.stringify(summary(), null, 2);
  }

  // The projection, as a person standing at a Chromebook wants to read it. One
  // row per day the student had this course, because "writes per student per
  // class day" is the figure the district asked for and a day is where it
  // lives. Days with no class produce no row rather than a zero, so a mean
  // taken over these rows is a mean over class days and not over the calendar.
  //
  // `absorbed` is the share of local autosaves the coalescing window swallowed.
  // It is the number to quote at anyone worried about an unbounded bill: it
  // says how much of the typing traffic never becomes a billable write.
  function syncReport() {
    var s = summary().sync;
    var keys = Object.keys(s.days).sort();
    var lines = [
      'Projected Firestore writes, this device only.',
      'Coalescing window: ' + s.coalesceMs + 'ms per response slot.',
      ''
    ];
    if (!keys.length) {
      lines.push('No class days recorded yet.');
      return lines.join('\n');
    }
    lines.push('day           per-slot   one-doc   local autosaves');
    var total = 0, docTotal = 0, max = 0, docMax = 0;
    for (var i = 0; i < keys.length; i++) {
      var d = s.days[keys[i]];
      total += d.w;
      docTotal += d.d;
      if (d.w > max) max = d.w;
      if (d.d > docMax) docMax = d.d;
      lines.push(keys[i] + '    ' + String(d.w) + '          ' + String(d.d) + '         ' + String(d.l));
    }
    var absorbed = s.localWrites ? (1 - (s.writes / s.localWrites)) * 100 : 0;
    lines.push('');
    lines.push('class days recorded: ' + keys.length);
    lines.push('mean per class day, one record per response slot: ' + (total / keys.length).toFixed(1));
    lines.push('mean per class day, one document per topic:       ' + (docTotal / keys.length).toFixed(1));
    lines.push('busiest class day: ' + max + ' per-slot, ' + docMax + ' one-doc');
    lines.push('busiest single minute: ' + s.busiestMinute);
    lines.push('tail flushes: ' + s.tailWrites + ' per-slot, ' + s.docTailWrites + ' one-doc');
    lines.push('local autosaves absorbed by coalescing: ' + absorbed.toFixed(1) + '%');
    // The schema's own multiplier, which is the figure that decides whether the
    // data model is worth arguing about. Anything near 1 means it is not.
    if (s.docWrites) {
      lines.push('per-slot costs ' + (s.writes / s.docWrites).toFixed(1) + 'x the consolidated model');
    }
    return lines.join('\n');
  }

  // A tab closing is the last chance to keep counts the interval has not
  // flushed yet. `pagehide` rather than `unload`, which does not fire reliably
  // on a phone or a restored tab.
  try {
    global.addEventListener('pagehide', function () { projectTail(); flush(true); });
  } catch (error) {
    // No event target in a test harness. The interval flush still covers it.
  }

  global.BHSaveHealth = {
    startSession: startSession,
    recordWrite: recordWrite,
    summary: summary,
    line: line,
    report: report,
    syncReport: syncReport,
    // Exposed so the offline test can drive the tail without a browser, and so
    // a teacher can take a reading mid-class without closing the tab.
    projectTail: projectTail,
    SYNC_COALESCE_MS: SYNC_COALESCE_MS,
    STORAGE_KEY: KEY
  };
})(typeof window !== 'undefined' ? window : globalThis);
// ── END INLINED SAVE HEALTH ─────────────────────────────────────────────────

// ── BEGIN INLINED SYNC ──────────────────────────────────────────────────────
//
// Derived from scripts/lib/sync-config.js and assets/js/behistorical-sync.js by
// scripts/build-sync.js. Do not hand-edit: the offline suite re-derives this
// block and fails the push on drift. Change the source and rebuild.
//
// The backup is OFF unless `enabled` (or, for one browser, `pilot`) says
// otherwise in scripts/lib/sync-config.js.
window.BH_SYNC_CONFIG = Object.freeze({
  "enabled": true,
  "pilot": false,
  "tenantId": "zcs",
  "courseId": "apwh",
  "allowedDomains": [
    "zcs.k12.in.us",
    "stumail.zcs.k12.in.us"
  ],
  "windowMs": 30000,
  "sessionCap": 400,
  "dayCap": 600,
  "sdkVersion": "12.19.0",
  "firebase": {
    "apiKey": "AIzaSyDq4oEqKf_tjZJPmC1iyZ9hbrfz0E07Prs",
    "authDomain": "behistoric.firebaseapp.com",
    "projectId": "behistoric",
    "appId": "1:20943260001:web:d639c8b9f833701a62dd20"
  }
});
// Student response sync: backs a student's work up to Cloud Firestore and puts
// it back on a device that lost it.
//
// This is Phase 2 of the persistence plan in AndersonLogic-OS at
// 04_PRODUCTS/BeHistorical/Student-Response-Persistence-Architecture-2026-09-08.md.
//
// THIS FILE IS INERT UNTIL SOMEONE TURNS IT ON. `enabled` is false in
// scripts/lib/sync-config.js, and mount() returns before it builds a single
// element or makes a single request. Nothing here may run for students until
// ZCS has answered which Google sign-in setting applies to under-18 accounts.
//
// ONE IMPLEMENTATION. The engine, the decision rule, the save states and the
// on-page controls live here and nowhere else. scripts/build-sync.js inlines
// this file into both lesson renderers between sentinels, for the same reason
// the coach prompt builder and the save-health counter are inlined. The part
// that talks to Google is assets/js/behistorical-sync-transport.js, which is
// loaded only when sync is on and is injected into the engine, so everything
// below is testable with no network and no browser.
//
// IT IS A SEPARATE LAYER OVER THE THREE SAVE PATHS, NEVER A HOOK ON THEM.
//
// The renderers save 600ms after a keystroke, the readings 500ms, and
// BeInTheRoom on every keystroke. All of that is correct for localStorage,
// where a write is free, and indefensible against a billed database. So nothing
// here is called from a writer. The engine reads a snapshot of the lesson's
// slots (the same collectLessonWork() Gather All My Work reads) on a timer, and
// compares it with what it last confirmed. A runaway loop in one of the writers
// therefore moves the snapshot, which is read a few times a minute, and cannot
// move the write rate.
//
// WHO BOUNDS WHAT
//   The rules bound how many documents can exist (the id is derived).
//   This file bounds how often a document is written.
//   The free plan's daily quota is the backstop for everything else.
// A rules-level rate limit was declined in firestore/README.md, and the reason
// is the reason this file queues in the student's own storage: a rejected write
// is reverted by the client, which is a student losing what they wrote on the
// bus. Nothing here relies on a write that can be dropped on the floor.
//
// THE RULE FOR TWO COPIES THAT DISAGREE, from the architecture record, binding:
//   1. Newer wins in the ordinary case.
//   2. A non-empty answer is never silently replaced by a different answer.
//      When both sides are non-empty and differ and neither is simply an older
//      copy of the other, the student is shown both and chooses.
//   3. The copy that loses is kept, so a bad overwrite is recoverable.
//
// "Older copy of the other" is decided with a third value, the baseline: a hash
// of what this device last confirmed with the server. It is a hash and not the
// text on purpose, so this record never holds a second copy of anything a
// student wrote. It lives under behistorical-sync-*, outside the
// behistorical-draft-<topic>- prefix that collectLessonWork() sweeps: a key
// inside that prefix would be pasted into Canvas as though it were an answer.
//
// WHAT THE BASELINE BUYS, which is the whole point of the design:
//   Local empty, nothing recorded here, something in the cloud: this device is
//     new or was wiped. Restore it. This is the case the project exists for.
//   Local empty, something recorded here: the student cleared it on this device.
//     Leave it alone. An empty box is never resurrected and is never pushed.
//   Local changed, cloud unchanged since the baseline: push.
//   Local unchanged, cloud changed since the baseline: another device wrote
//     later. Take it.
//   Both changed, or no baseline and both non-empty and different: ask.
//
// AN EMPTY ANSWER IS NEVER WRITTEN. A cleared box, a wiped store and a bug that
// blanks a textarea all look identical to a sync layer, and one of them is
// exactly the failure this system was built to survive. The cost is that
// clearing an answer here does not clear it in the cloud, which is the safe
// direction to be wrong in.
//
// FOUR SAVE STATES, and "Saved" means safe off this device:
//   saving   in flight, or waiting for its turn.
//   saved    confirmed by the server.
//   device   only on this device: offline, or not signed in to the backup.
//   problem  something is wrong and a person has to know: a choice is waiting,
//            the school account is refused, the daily limit is reached, the
//            brake below has tripped.
//
// THE BRAKE. At most one write is in flight. A slot is written at most once per
// window, and never twice inside minGapMs even when the page is closing. Past
// sessionCap writes in one page load, or dayCap in one day on this device, the
// engine stops and says so rather than carrying on. Failures back off
// exponentially and never retry in a tight loop. None of this is cleverness; it
// is the answer to the district's one real question, which was what happens if
// something loops.
(function (global) {
  'use strict';

  var META_PREFIX = 'behistorical-sync-meta-';
  var RECOVER_PREFIX = 'behistorical-sync-recover-';
  var CLIENT_KEY = 'behistorical-sync-client';
  var WRITES_KEY = 'behistorical-sync-writes';
  // The one account this device backs up. Written at the first sign-in and
  // never changed by the engine, so a second account on the same Chromebook is
  // refused rather than handed the first student's answers. It holds a Firebase
  // user id, never a name or an email, and sits outside the
  // `behistorical-draft-<topic>-` prefix the Gather panel sweeps.
  var OWNER_KEY = 'behistorical-sync-owner';
  var FOREIGN_MESSAGE = 'This Chromebook already backs up a different account, so the backup is paused here to keep two students\' work apart. Your work is still saved on this device. Tell your teacher.';
  var PILOT_KEY = 'behistorical-sync-pilot';

  // The same shapes firestore/firestore.rules accepts. They are repeated here so
  // a slot the rules would refuse is reported as a problem on the page instead
  // of being retried forever against a database that will never take it.
  var TOPIC_RE = /^[a-z0-9]{1,4}-?[0-9]{0,2}$/;
  var SLOT_RE = /^[a-z0-9-]{1,64}$/;
  var MAX_TEXT = 20000;

  var DEFAULTS = {
    windowMs: 30000,
    minGapMs: 5000,
    sessionCap: 400,
    dayCap: 600,
    tickMs: 3000,
    backoffBaseMs: 5000,
    backoffMaxMs: 120000,
    recoverKeep: 3
  };

  // ── Small pure helpers ────────────────────────────────────────────────────

  // cyrb53. Not for security: it only has to make two different answers very
  // unlikely to look the same, and to keep the baseline from being a copy.
  function hash(str) {
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57, i, ch;
    for (i = 0; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }

  function cleanConfidence(value) {
    var s = String(value == null ? '' : value).trim();
    return /^[1-5]$/.test(s) ? s : '';
  }

  // text and confidence together, because a changed confidence is a change.
  function valueHash(text, confidence) {
    return hash(String(text || '') + '␟' + cleanConfidence(confidence));
  }

  // '1.4' and 'Topic 1.4' and '5.10' to the rules' shape. 'f3' is already one.
  function normaliseTopic(raw) {
    var s = String(raw == null ? '' : raw).trim().toLowerCase()
      .replace(/^topic\s+/, '').replace(/\./g, '-');
    return TOPIC_RE.test(s) ? s : '';
  }

  function normaliseSlot(raw) {
    var s = String(raw == null ? '' : raw).trim().toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
    return SLOT_RE.test(s) ? s : '';
  }

  // The whole decision rule, as a pure function so it can be tested exhaustively
  // and so nothing about timing or the network can change what it answers.
  //   local  {text, confidence} or null
  //   remote {text, confidence} or null (null: no document)
  //   base   hash of the last confirmed value on this device, or undefined
  // Returns one of: noop, restore, base, adopt, adopt-confidence,
  //   push-create, push-update, conflict.
  function decide(local, remote, base) {
    var lText = local ? String(local.text || '') : '';
    var rText = remote ? String(remote.text || '') : '';
    if (!lText) {
      if (!rText) return 'noop';
      // A device that has never confirmed this slot and has nothing for it is
      // new or wiped. One that has confirmed it and now shows nothing was
      // cleared by the student.
      return base === undefined ? 'restore' : 'noop';
    }
    if (!remote) return 'push-create';
    if (!rText) return 'push-update';
    var lConf = cleanConfidence(local.confidence);
    var rConf = cleanConfidence(remote.confidence);
    if (lText === rText) {
      if (lConf === rConf) return 'base';
      if (!lConf) return 'adopt-confidence';
      // Confidence is a rating, not an answer. The device the student is using
      // right now wins, and nobody is asked to choose between a 3 and a 4.
      return 'push-update';
    }
    var rHash = valueHash(rText, rConf);
    if (base === rHash) return 'push-update';
    if (base === valueHash(lText, lConf)) return 'adopt';
    return 'conflict';
  }

  function normaliseError(error) {
    if (error && typeof error === 'object' && error.code) return error;
    var e = new Error(error && error.message ? error.message : 'sync failed');
    e.code = 'other';
    return e;
  }

  function dayKey(at) {
    var d = new Date(at);
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }

  function readJson(storage, key) {
    try {
      var raw = storage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function writeJson(storage, key, value) {
    try { storage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }

  function randomId() {
    var out = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var bytes = null;
    try {
      if (global.crypto && global.crypto.getRandomValues) bytes = global.crypto.getRandomValues(new Uint8Array(16));
    } catch (e) { bytes = null; }
    for (var i = 0; i < 16; i++) {
      var n = bytes ? bytes[i] : Math.floor(Math.random() * 256);
      out += alphabet.charAt(n % alphabet.length);
    }
    return out;
  }

  // ── The engine ────────────────────────────────────────────────────────────
  //
  // opts.topicKey   the topic, in any spelling normaliseTopic accepts
  // opts.slots()    [{ id, text, confidence }], non-empty answers only
  // opts.apply(id, { text, confidence })
  //                 put a value back where the page keeps that slot
  // opts.transport  see assets/js/behistorical-sync-transport.js for the contract
  // opts.storage    a localStorage; opts.now, opts.setTimeout and friends are
  //                 injectable so a test can run a school day in a millisecond
  function create(opts) {
    var cfg = {};
    var key;
    for (key in DEFAULTS) cfg[key] = (opts && opts[key] != null) ? opts[key] : DEFAULTS[key];

    var topic = normaliseTopic(opts && opts.topicKey);
    var storage = opts.storage;
    var transport = opts.transport;
    var now = opts.now || function () { return Date.now(); };
    var setT = opts.setTimeout || function (fn, ms) { return global.setTimeout(fn, ms); };
    var clearT = opts.clearTimeout || function (id) { global.clearTimeout(id); };
    var onState = opts.onState || function () {};
    var isOnline = opts.isOnline || function () {
      return !(global.navigator && global.navigator.onLine === false);
    };

    var meta = null;            // { v, base: { slot: hash } }
    var remote = {};            // slot -> { text, confidence, rev }, documents that exist
    var conflicts = {};         // slot -> { mine, saved }
    var info = {};              // slot -> { lastWriteAt, failures, nextTryAt }
    var started = false, stopped = false;
    var user = null;
    var reconciled = false;
    var reconciling = false;
    var inflight = {};          // slot -> true, while a write is out
    var timer = null, tickTimer = null;
    var fatal = null;           // { code, message } once something needs a person
    var offlineSince = 0;
    var sessionWrites = 0;
    var tripped = '';
    var invalid = {};           // slot -> message, for slots the rules would refuse
    var lastEmitted = '';
    var foreign = '';           // set when another account owns this device
    var clientId = '';
    var flushing = false;

    function loadMeta() {
      var saved = readJson(storage, META_PREFIX + topic);
      meta = (saved && saved.v === 1 && saved.base && typeof saved.base === 'object')
        ? saved : { v: 1, base: {} };
    }
    function saveMeta() { writeJson(storage, META_PREFIX + topic, meta); }

    function getClientId() {
      if (clientId) return clientId;
      try { clientId = storage.getItem(CLIENT_KEY) || ''; } catch (e) { clientId = ''; }
      if (!clientId) {
        clientId = randomId();
        try { storage.setItem(CLIENT_KEY, clientId); } catch (e) { /* a new id each load is harmless */ }
      }
      return clientId;
    }

    // The device belongs to the first account that signs in. Everything the
    // student typed here before then is theirs by assumption, which is the one
    // thing a page cannot check, and the reason a swapped or inherited device
    // needs its site data cleared by a person.
    function mayUseDevice() {
      var uid = user && user.uid ? String(user.uid) : '';
      if (!uid) return false;
      var owner = '';
      try { owner = storage.getItem(OWNER_KEY) || ''; } catch (e) { owner = ''; }
      if (owner && owner !== uid) return false;
      if (!owner) { try { storage.setItem(OWNER_KEY, uid); } catch (e) { /* no storage, no guard, and no baseline either */ } }
      return true;
    }

    function setUser(next) {
      var prev = user;
      user = next || null;
      foreign = '';
      if (!user) { reconciled = false; return; }
      if (prev && prev.uid !== user.uid) {
        // A different account in the same page: nothing learned for the last
        // one carries over.
        reconciled = false;
        remote = {};
        conflicts = {};
      }
    }

    function writesToday() {
      var saved = readJson(storage, WRITES_KEY);
      var today = dayKey(now());
      return (saved && saved.day === today && typeof saved.n === 'number') ? saved.n : 0;
    }
    function countWrite() {
      sessionWrites += 1;
      writeJson(storage, WRITES_KEY, { day: dayKey(now()), n: writesToday() + 1 });
    }

    // The page's slots, checked against what the rules will accept. A slot the
    // rules would refuse is recorded as invalid and left out, so it can neither
    // spin against the server nor take the others down with it.
    function snapshot() {
      var out = {};
      var seen = {};
      var list;
      invalid = {};
      try { list = opts.slots() || []; } catch (e) { list = []; }
      list.forEach(function (item) {
        if (!item) return;
        var text = String(item.text == null ? '' : item.text).trim();
        if (!text) return;
        var id = normaliseSlot(item.id);
        if (!id) { invalid[String(item.id)] = 'a lesson item has a name the backup cannot store'; return; }
        if (seen[id]) { invalid[id] = 'two lesson items share the name ' + id; delete out[id]; return; }
        seen[id] = true;
        if (text.length > MAX_TEXT) { invalid[id] = 'one answer is longer than the backup allows'; return; }
        out[id] = { text: text, confidence: cleanConfidence(item.confidence) };
      });
      return out;
    }

    function isDirty(id, local) {
      return meta.base[id] !== valueHash(local.text, local.confidence);
    }

    function dirtyIds(snap) {
      if (!reconciled || !user) return [];
      return Object.keys(snap).filter(function (id) {
        return !conflicts[id] && isDirty(id, snap[id]);
      });
    }

    function recoverKeepCopy(id, value) {
      var all = readJson(storage, RECOVER_PREFIX + topic) || {};
      var list = all[id] || [];
      list.push({ at: now(), text: value.text, confidence: value.confidence });
      all[id] = list.slice(-cfg.recoverKeep);
      writeJson(storage, RECOVER_PREFIX + topic, all);
    }

    // ── State ──────────────────────────────────────────────────────────────
    function computeState() {
      var snap = snapshot();
      var problems = [];
      var ids;
      if (!topic) problems.push('this lesson has a name the backup cannot store');
      ids = Object.keys(conflicts);
      if (ids.length) problems.push('two versions of an answer disagree and you need to choose one');
      Object.keys(invalid).forEach(function (k) { problems.push(invalid[k]); });
      if (tripped) problems.push(tripped);
      if (foreign) problems.push(foreign);
      if (fatal) problems.push(fatal.message);
      if (problems.length) {
        return {
          code: 'problem',
          message: problems[0],
          conflicts: ids.slice(),
          needsSignIn: false,
          fatal: !!fatal
        };
      }
      var dirty = dirtyIds(snap);
      if (!user) {
        return { code: 'device', message: 'Saved on this device only. Back up your work to keep it safe.', conflicts: [], needsSignIn: true };
      }
      var offline = !isOnline() || offlineSince > 0;
      var busy = Object.keys(inflight).length > 0;
      if (offline && (!reconciled || dirty.length || busy)) {
        return { code: 'device', message: 'Saved on this device only. You are offline, and your work will back up when you reconnect.', conflicts: [], needsSignIn: false };
      }
      if (!reconciled) {
        return { code: 'saving', message: 'Checking your saved work.', conflicts: [], needsSignIn: false };
      }
      if (busy || dirty.length) {
        return { code: 'saving', message: 'Saving.', conflicts: [], needsSignIn: false };
      }
      return { code: 'saved', message: 'Saved. Your work is backed up.', conflicts: [], needsSignIn: false };
    }

    function emit() {
      var s = computeState();
      var sig = JSON.stringify(s);
      if (sig === lastEmitted) return s;
      lastEmitted = sig;
      try { onState(s); } catch (e) { /* a broken listener must not stop a save */ }
      return s;
    }

    // ── Reconcile: the decision rule, applied to every slot ─────────────────
    function applyDecision(id, action, local, saved) {
      if (action === 'restore' || action === 'adopt') {
        if (action === 'adopt') recoverKeepCopy(id, local);
        opts.apply(id, { text: saved.text, confidence: cleanConfidence(saved.confidence) });
        meta.base[id] = valueHash(saved.text, saved.confidence);
      } else if (action === 'adopt-confidence') {
        opts.apply(id, { text: local.text, confidence: cleanConfidence(saved.confidence) });
        meta.base[id] = valueHash(local.text, saved.confidence);
      } else if (action === 'base') {
        meta.base[id] = valueHash(local.text, local.confidence);
      } else if (action === 'conflict') {
        conflicts[id] = { mine: local, saved: { text: saved.text, confidence: cleanConfidence(saved.confidence) } };
      }
      // noop, push-create and push-update change nothing here: the write path
      // finds the slot dirty (or has nothing to write) on its own.
    }

    function reconcileSlots(snap, docs) {
      var ids = {};
      Object.keys(snap).forEach(function (id) { ids[id] = true; });
      Object.keys(docs).forEach(function (id) {
        var normal = normaliseSlot(id);
        if (normal === id) ids[id] = true;
      });
      Object.keys(ids).forEach(function (id) {
        var local = snap[id] || null;
        var doc = docs[id] || null;
        if (doc) remote[id] = { text: doc.text, confidence: cleanConfidence(doc.confidence), rev: doc.rev };
        else delete remote[id];
        var action = decide(local, doc, meta.base[id]);
        applyDecision(id, action, local, doc);
      });
      saveMeta();
    }

    function reconcile() {
      if (reconciling || reconciled || stopped || !user) return Promise.resolve();
      if (!mayUseDevice()) { foreign = FOREIGN_MESSAGE; emit(); return Promise.resolve(); }
      foreign = '';
      var forUid = user.uid;
      var again = false;
      reconciling = true;
      emit();
      return Promise.resolve()
        .then(function () { return transport.fetch(topic); })
        .then(function (docs) {
          // The account changed while the request was out: what came back
          // belongs to the last one.
          if (!user || user.uid !== forUid) { again = !!user; return; }
          reconcileSlots(snapshot(), docs || {});
          reconciled = true;
          offlineSince = 0;
        })
        .catch(function (error) { handleFailure(null, normaliseError(error), true); })
        .then(function () {
          reconciling = false;
          emit();
          schedule();
          if (again) reconcile();
        });
    }

    // ── Failure handling ────────────────────────────────────────────────────
    function backoff(failures) {
      return Math.min(cfg.backoffMaxMs, cfg.backoffBaseMs * Math.pow(2, Math.max(0, failures - 1)));
    }

    function handleFailure(id, error, duringReconcile) {
      var rec = id ? (info[id] = info[id] || { lastWriteAt: 0, failures: 0, nextTryAt: 0 }) : null;
      var code = error.code;
      if (code === 'offline') {
        offlineSince = offlineSince || now();
        if (rec) { rec.failures += 1; rec.nextTryAt = now() + backoff(rec.failures); }
        if (duringReconcile) retryReconcileLater();
        return;
      }
      if (code === 'auth') {
        // The sign-in expired. That is a prompt to sign in again, not a fault.
        user = null;
        reconciled = false;
        return;
      }
      if (code === 'denied') {
        fatal = { code: code, message: 'The backup is not working for this account. Your work is still saved on this device. Tell your teacher.' };
        return;
      }
      if (code === 'quota') {
        fatal = { code: code, message: 'The backup is paused until tomorrow morning. Your work is still saved on this device.' };
        return;
      }
      if (code === 'conflict' || code === 'exists') {
        // Someone else wrote since we last looked. Look again, then decide with
        // the rule rather than overwriting.
        if (id) refetchSlot(id);
        return;
      }
      if (rec) { rec.failures += 1; rec.nextTryAt = now() + backoff(rec.failures); }
      if (duringReconcile) retryReconcileLater();
    }

    var reconcileRetry = null;
    function retryReconcileLater() {
      if (reconcileRetry || stopped) return;
      reconcileRetry = setT(function () { reconcileRetry = null; reconcile(); }, backoff(2));
    }

    function refetchSlot(id) {
      return Promise.resolve()
        .then(function () { return transport.fetch(topic); })
        .then(function (docs) {
          var snap = snapshot();
          var local = snap[id] || null;
          var doc = (docs || {})[id] || null;
          if (doc) remote[id] = { text: doc.text, confidence: cleanConfidence(doc.confidence), rev: doc.rev };
          else delete remote[id];
          applyDecision(id, decide(local, doc, meta.base[id]), local, doc);
          saveMeta();
        })
        .catch(function (error) { handleFailure(null, normaliseError(error), false); })
        .then(function () { emit(); schedule(); });
    }

    // ── Writing ─────────────────────────────────────────────────────────────
    function dueAt(id) {
      var rec = info[id] || { lastWriteAt: 0, nextTryAt: 0 };
      var gap = flushing ? cfg.minGapMs : cfg.windowMs;
      var earliest = rec.lastWriteAt ? rec.lastWriteAt + gap : 0;
      return Math.max(earliest, rec.nextTryAt || 0);
    }

    function braked() {
      if (tripped) return true;
      if (sessionWrites >= cfg.sessionCap) {
        tripped = 'The backup paused itself to stay inside the school\'s limit. Your work is still saved on this device.';
        return true;
      }
      if (writesToday() >= cfg.dayCap) {
        tripped = 'The backup paused itself for today to stay inside the school\'s limit. Your work is still saved on this device.';
        return true;
      }
      return false;
    }

    function schedule() {
      if (timer) { clearT(timer); timer = null; }
      if (stopped || Object.keys(inflight).length || fatal || !user || !reconciled) return;
      if (braked()) { emit(); return; }
      var ids = dirtyIds(snapshot());
      if (!ids.length) return;
      var t = now();
      var soonest = Infinity;
      ids.forEach(function (id) { soonest = Math.min(soonest, dueAt(id)); });
      var delay = Math.max(0, soonest - t);
      timer = setT(runNext, delay);
    }

    function runNext() {
      timer = null;
      if (stopped || Object.keys(inflight).length || fatal || !user || !reconciled || braked()) { emit(); return; }
      var snap = snapshot();
      var t = now();
      var due = dirtyIds(snap).filter(function (id) { return dueAt(id) <= t; });
      if (!due.length) { schedule(); return; }
      due.sort(function (a, b) { return dueAt(a) - dueAt(b); });
      send(due[0], snap[due[0]]);
    }

    // One slot, one write. Everything that can go wrong lands in handleFailure,
    // and nothing here retries on its own: the next attempt is whatever
    // schedule() decides, which includes the backoff.
    function send(id, local) {
      // snapshot() already drops empty answers. This is the second lock on the
      // same door, because it is the one that must never be wrong.
      if (!local || !String(local.text || '').trim()) return Promise.resolve();
      var rec = (info[id] = info[id] || { lastWriteAt: 0, failures: 0, nextTryAt: 0 });
      var existing = remote[id];
      var callOpts = { keepalive: flushing };
      var call = existing
        ? function () { return transport.update(topic, id, local, getClientId(), existing.rev, callOpts); }
        : function () { return transport.create(topic, id, local, getClientId(), callOpts); };

      inflight[id] = true;
      emit();
      return Promise.resolve()
        .then(call)
        .then(function (result) {
          remote[id] = { text: local.text, confidence: local.confidence, rev: result && result.rev };
          // The baseline is what was WRITTEN, not whatever the box says now: if
          // the student kept typing while this was in flight, the slot is still
          // dirty and goes out in the next window.
          meta.base[id] = valueHash(local.text, local.confidence);
          rec.lastWriteAt = now();
          rec.failures = 0;
          rec.nextTryAt = 0;
          offlineSince = 0;
          saveMeta();
          countWrite();
        })
        .catch(function (error) { handleFailure(id, normaliseError(error), false); })
        .then(function () {
          delete inflight[id];
          emit();
          schedule();
        });
    }

    // ── Conflicts the student settles ───────────────────────────────────────
    function resolve(id, choice) {
      var c = conflicts[id];
      if (!c) return;
      if (choice === 'saved') {
        recoverKeepCopy(id, c.mine);
        opts.apply(id, c.saved);
        meta.base[id] = valueHash(c.saved.text, c.saved.confidence);
      } else {
        // Keep this device's version. The saved one is kept, recoverable, and
        // the baseline is set to it so that the next write is a plain update
        // against the revision we hold, and succeeds only if nobody has written
        // since.
        recoverKeepCopy(id, c.saved);
        meta.base[id] = valueHash(c.saved.text, c.saved.confidence);
      }
      delete conflicts[id];
      saveMeta();
      emit();
      schedule();
    }

    // ── Lifecycle ───────────────────────────────────────────────────────────
    function onAuth(next) {
      setUser(next);
      if (!user) { emit(); return; }
      reconcile();
    }

    function refresh() {
      if (stopped) return;
      emit();
      schedule();
    }

    function tick() {
      tickTimer = null;
      if (stopped) return;
      refresh();
      tickTimer = setT(tick, cfg.tickMs);
    }

    var bootRetry = null;
    var booted = false;
    function bootstrap() {
      if (booted || stopped) return Promise.resolve();
      return Promise.resolve()
        .then(function () { return transport.ready(); })
        .then(function () {
          booted = true;
          offlineSince = 0;
          setUser(transport.user());
          if (transport.onAuthChange) transport.onAuthChange(onAuth);
          if (!tickTimer) tickTimer = setT(tick, cfg.tickMs);
          if (user) return reconcile();
          emit();
        })
        .catch(function () {
          // The transport could not load at all: offline, or a school network
          // refusing the host. The work is on the device and nothing is wrong
          // that the student can fix. Try again later; never in a tight loop.
          offlineSince = offlineSince || now();
          emit();
          if (!bootRetry && !stopped) {
            bootRetry = setT(function () { bootRetry = null; bootstrap(); }, backoff(3));
          }
        });
    }

    function start() {
      if (started || stopped) return Promise.resolve();
      started = true;
      if (!topic) { emit(); return Promise.resolve(); }
      loadMeta();
      getClientId();
      emit();
      return bootstrap();
    }

    function signIn() {
      return Promise.resolve()
        .then(function () { return transport.signIn(); })
        .then(function () {
          setUser(transport.user());
          if (user) return reconcile();
        })
        .catch(function (error) {
          var e = normaliseError(error);
          if (e.code === 'denied') {
            fatal = { code: 'denied', message: 'Your school account could not sign in to the backup. Your work is still saved on this device. Tell your teacher.' };
          }
          emit();
        });
    }

    // The page is going away: send what is dirty, still bounded by minGapMs per
    // slot and by the brake. Up to three slots go at once because there is no
    // later turn to send them in; a page that had more than three changed
    // answers inside one window is not a case worth a loop.
    function flush() {
      if (stopped || !user || !reconciled || fatal || braked()) return;
      var snap = snapshot();
      flushing = true;
      try {
        var t = now();
        dirtyIds(snap)
          .filter(function (id) { return !inflight[id] && dueAt(id) <= t; })
          .slice(0, 3)
          .forEach(function (id) { send(id, snap[id]); });
      } finally { flushing = false; }
    }

    function stop() {
      stopped = true;
      if (timer) clearT(timer);
      if (tickTimer) clearT(tickTimer);
      if (reconcileRetry) clearT(reconcileRetry);
      if (bootRetry) clearT(bootRetry);
    }

    function online() {
      offlineSince = 0;
      Object.keys(info).forEach(function (id) { info[id].nextTryAt = 0; });
      if (!booted) bootstrap();
      else if (user && !reconciled) reconcile();
      else schedule();
      emit();
    }

    return {
      start: start,
      stop: stop,
      signIn: signIn,
      resolve: resolve,
      refresh: refresh,
      flush: flush,
      online: online,
      state: computeState,
      conflict: function (id) { return conflicts[id] || null; },
      recovered: function () { return readJson(storage, RECOVER_PREFIX + topic) || {}; },
      // Test hooks. Nothing in the product reads these.
      _meta: function () { return meta; },
      _sessionWrites: function () { return sessionWrites; }
    };
  }

  // ── Turning it on ─────────────────────────────────────────────────────────
  //
  // `enabled` is the switch for everyone. `pilot` is the switch for one browser:
  // with pilot true and enabled false, opening a lesson with ?sync=on turns the
  // backup on for that browser and ?sync=off turns it off again. That is how a
  // pretend student tests this against the real project before any real class
  // has it, without publishing a change that affects anybody else.
  function pilotOn(cfg, storage, search) {
    if (!cfg || cfg.pilot !== true) return false;
    try {
      var m = /[?&]sync=(on|off)\b/.exec(search || '');
      if (m && m[1] === 'on') storage.setItem(PILOT_KEY, '1');
      if (m && m[1] === 'off') storage.removeItem(PILOT_KEY);
      return storage.getItem(PILOT_KEY) === '1';
    } catch (e) { return false; }
  }

  function isOn(cfg, storage, search) {
    if (!cfg) return false;
    var f = cfg.firebase;
    // No project details means nothing can connect, whatever else is set.
    if (!f || !f.apiKey || !f.projectId || !f.authDomain) return false;
    if (cfg.enabled === true) return true;
    return pilotOn(cfg, storage, search);
  }

  // ── On-page controls ──────────────────────────────────────────────────────
  var STYLE_ID = 'bh-sync-style';
  var ROOT_ID = 'bh-sync';

  function el(tag, attrs, text) {
    var node = global.document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    if (text != null) node.textContent = text;
    return node;
  }

  // Student writing goes through textContent only, never innerHTML.
  function buildUi(engine, labelFor) {
    var doc = global.document;
    if (doc.getElementById(ROOT_ID)) return null;

    if (!doc.getElementById(STYLE_ID)) {
      var style = el('style', { id: STYLE_ID });
      style.textContent =
        '#bh-sync{position:fixed;left:12px;bottom:12px;z-index:60;max-width:min(92vw,26rem);' +
        'background:#1A1C1D;color:#F5F0E7;border:1px solid #C9A46A;border-radius:4px;' +
        'padding:.5rem .7rem;font:600 .78rem/1.35 Montserrat,Arial,sans-serif;display:flex;' +
        'gap:.6rem;align-items:center;flex-wrap:wrap}' +
        '#bh-sync [data-glyph]{font-weight:800;color:#C9A46A}' +
        '#bh-sync button{font:700 .74rem Montserrat,Arial,sans-serif;background:#C9A46A;color:#1A1C1D;' +
        'border:0;border-radius:3px;padding:.3rem .6rem;cursor:pointer}' +
        '#bh-sync button:focus-visible,#bh-sync-dialog button:focus-visible{outline:3px solid #F5F0E7;outline-offset:2px}' +
        '#bh-sync-dialog{max-width:min(94vw,44rem);border:2px solid #1A1C1D;border-radius:4px;' +
        'padding:1rem 1.1rem;background:#F5F0E7;color:#1A1C1D;font:400 .95rem/1.5 "Libre Baskerville",Georgia,serif}' +
        '#bh-sync-dialog h2{margin:0 0 .4rem;font:700 1.05rem Montserrat,Arial,sans-serif}' +
        '#bh-sync-dialog .bh-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr));gap:.7rem;margin:.6rem 0}' +
        '#bh-sync-dialog .bh-col{border:1px solid #1A1C1D;border-radius:3px;padding:.5rem;background:#fff}' +
        '#bh-sync-dialog .bh-col b{display:block;font:700 .78rem Montserrat,Arial,sans-serif;margin-bottom:.3rem}' +
        '#bh-sync-dialog .bh-text{white-space:pre-wrap;max-height:11rem;overflow:auto}' +
        '#bh-sync-dialog .bh-row{display:flex;gap:.6rem;flex-wrap:wrap}' +
        '#bh-sync-dialog button{font:700 .85rem Montserrat,Arial,sans-serif;background:#1A1C1D;color:#F5F0E7;' +
        'border:0;border-radius:3px;padding:.5rem .8rem;cursor:pointer}';
      doc.head.appendChild(style);
    }

    var root = el('div', { id: ROOT_ID, role: 'status', 'aria-live': 'polite' });
    var glyph = el('span', { 'data-glyph': '', 'aria-hidden': 'true' });
    var text = el('span', { 'data-text': '' });
    var action = el('button', { type: 'button', hidden: '' });
    root.appendChild(glyph);
    root.appendChild(text);
    root.appendChild(action);
    doc.body.appendChild(root);

    var dialog = null;
    if (typeof global.HTMLDialogElement === 'function') {
      dialog = el('dialog', { id: 'bh-sync-dialog', 'aria-labelledby': 'bh-sync-dialog-title' });
      doc.body.appendChild(dialog);
    }

    var GLYPHS = { saving: '…', saved: '✓', device: '○', problem: '!' };
    var actionMode = '';

    function showConflict() {
      if (!dialog) return;
      var id = engine.state().conflicts[0];
      var c = id && engine.conflict(id);
      if (!c) { if (dialog.open) dialog.close(); return; }
      while (dialog.firstChild) dialog.removeChild(dialog.firstChild);
      dialog.appendChild(el('h2', { id: 'bh-sync-dialog-title' }, 'Two versions of your answer'));
      dialog.appendChild(el('p', null,
        'Your work for "' + labelFor(id) + '" is different on this device and in your backup. ' +
        'Pick the one to keep. The other is kept so it can be recovered.'));
      var cols = el('div', { 'class': 'bh-cols' });
      var mine = el('div', { 'class': 'bh-col' });
      mine.appendChild(el('b', null, 'On this device'));
      mine.appendChild(el('div', { 'class': 'bh-text' }, c.mine.text));
      var saved = el('div', { 'class': 'bh-col' });
      saved.appendChild(el('b', null, 'In your backup'));
      saved.appendChild(el('div', { 'class': 'bh-text' }, c.saved.text));
      cols.appendChild(mine);
      cols.appendChild(saved);
      dialog.appendChild(cols);
      var row = el('div', { 'class': 'bh-row' });
      var keepMine = el('button', { type: 'button' }, 'Keep the version on this device');
      var useSaved = el('button', { type: 'button' }, 'Use the version in my backup');
      keepMine.addEventListener('click', function () { engine.resolve(id, 'mine'); });
      useSaved.addEventListener('click', function () { engine.resolve(id, 'saved'); });
      row.appendChild(keepMine);
      row.appendChild(useSaved);
      dialog.appendChild(row);
      if (!dialog.open) dialog.showModal();
      keepMine.focus();
    }

    action.addEventListener('click', function () {
      if (actionMode === 'signin') engine.signIn();
      else if (actionMode === 'choose') showConflict();
    });

    return function render(state) {
      glyph.textContent = GLYPHS[state.code] || '';
      text.textContent = state.message;
      root.setAttribute('data-state', state.code);
      if (state.needsSignIn) {
        actionMode = 'signin'; action.textContent = 'Back up my work'; action.hidden = false;
      } else if (state.conflicts && state.conflicts.length) {
        actionMode = 'choose'; action.textContent = 'Choose a version'; action.hidden = false;
        showConflict();
      } else {
        actionMode = ''; action.hidden = true;
        if (dialog && dialog.open) dialog.close();
      }
    };
  }

  // ── Lazy transport ────────────────────────────────────────────────────────
  // A student whose backup is off, or who never opens a lesson with it on, never
  // downloads the transport and never contacts Google.
  function lazyTransport(url, cfg) {
    var real = null, loading = null;
    function load() {
      if (real) return Promise.resolve(real);
      if (loading) return loading;
      loading = new Promise(function (resolve, reject) {
        var s = global.document.createElement('script');
        s.src = url;
        s.onload = function () {
          try { real = global.BHSyncTransport.create(cfg); resolve(real); }
          catch (e) { loading = null; reject(e); }
        };
        s.onerror = function () {
          loading = null;
          var e = new Error('the backup could not load');
          e.code = 'offline';
          reject(e);
        };
        global.document.head.appendChild(s);
      });
      return loading;
    }
    function through(method) {
      return function () {
        var args = arguments;
        return load().then(function (t) { return t[method].apply(t, args); });
      };
    }
    return {
      ready: function () { return load().then(function () {}); },
      user: function () { return real ? real.user() : null; },
      onAuthChange: function (cb) { if (real) real.onAuthChange(cb); },
      signIn: through('signIn'),
      fetch: through('fetch'),
      create: through('create'),
      update: through('update')
    };
  }

  // The one call a renderer makes. Returns null, having done nothing at all,
  // unless the backup is on.
  //   topicKey, slots, apply, labelFor   as for create()
  //   transportUrl                       where behistorical-sync-transport.js is
  function mount(options) {
    var cfg = global.BH_SYNC_CONFIG;
    var storage;
    try { storage = global.localStorage; } catch (e) { return null; }
    if (!storage || !isOn(cfg, storage, global.location && global.location.search)) return null;

    var render = null;
    var engine = create({
      topicKey: options.topicKey,
      slots: options.slots,
      apply: options.apply,
      storage: storage,
      windowMs: cfg.windowMs,
      sessionCap: cfg.sessionCap,
      dayCap: cfg.dayCap,
      transport: lazyTransport(options.transportUrl, cfg),
      onState: function (s) { if (render) render(s); }
    });
    render = buildUi(engine, options.labelFor || function (id) { return id; });
    engine.start();
    if (render) render(engine.state());

    // Typing, another tab's save, coming back online and leaving the page are
    // the moments the snapshot is worth reading early. None of them writes: they
    // only make the engine look, and the engine's own window decides.
    var nudge = null;
    function soon() {
      if (nudge) return;
      nudge = global.setTimeout(function () { nudge = null; engine.refresh(); }, 500);
    }
    global.document.addEventListener('input', soon, true);
    global.addEventListener('storage', soon);
    global.addEventListener('online', function () { engine.online(); });
    global.document.addEventListener('visibilitychange', function () {
      if (global.document.visibilityState === 'hidden') engine.flush(); else engine.refresh();
    });
    global.addEventListener('pagehide', function () { engine.flush(); });
    return engine;
  }

  var api = {
    create: create,
    mount: mount,
    decide: decide,
    hash: hash,
    valueHash: valueHash,
    normaliseTopic: normaliseTopic,
    normaliseSlot: normaliseSlot,
    isOn: isOn,
    DEFAULTS: DEFAULTS,
    MAX_TEXT: MAX_TEXT
  };
  global.BHSync = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
// ── END INLINED SYNC ────────────────────────────────────────────────────────

function sanitizeImageUrl(url) {
  const value = String(url || '').trim();
  if (!value) return '';
  return value;
}

function topicArtworkPath(id) {
  const topic = String((L && L.meta && L.meta.topic) || '');
  const match = topic.match(/(\d+)\.(\d+)/);
  if (!match) return '../assets/images/media-fallback.svg';
  return `../assets/images/module-art/unit-${match[1]}/topic-${match[1]}-${match[2]}/${id}.svg`;
}

function topicArtworkCssPath(id) {
  const topic = String((L && L.meta && L.meta.topic) || '');
  const match = topic.match(/(\d+)\.(\d+)/);
  if (!match) return '../images/media-fallback.svg';
  return `../images/module-art/unit-${match[1]}/topic-${match[1]}-${match[2]}/${id}.svg`;
}

// Optional topic-specific resources that belong at the end of a lecture deck.
// Keeping the registry here lets a lesson gain a printable summary card without
// changing the shared shell or making every lesson carry an empty data block.
const LECTURE_SUMMARY_RESOURCES = {
  'Topic 1.2': {
    title: 'Topic 1.2 Summary Organizer',
    bullets: [
      'Review the three connected layers: **power**, **belief**, and **knowledge**.',
      'Compare the **Seljuk**, **Mamluk**, and **Delhi** states in one phrase each.',
      'Keep Muslim political rule separate from conversion through merchants, missionaries, and **Sufis**.',
      'Use the organizer as a one-page visual review of the topic.'
    ],
    resourceUrl: 'summary-organizer-topic-1-2-dar-al-islam.html?v=20260828-visual-only',
    resourceLabel: 'Open the Summary Organizer',
    image: {
      title: 'One Civilization, Many States',
      url: '../assets/images/unit-1/topic-1-2/module-05-continuity-change.svg',
      caption: 'Use the organizer to connect political fragmentation with the religious, commercial, and intellectual networks that held Dar al-Islam together.'
    }
  }
};

function lectureSegments() {
  const core = (L.lecture && L.lecture.segments) || [];
  const summary = LECTURE_SUMMARY_RESOURCES[String((L.meta && L.meta.topic) || '')];
  return summary ? core.concat(summary) : core;
}

function useMediaFallback(image, fallback) {
  const replacement = sanitizeImageUrl(fallback || image.dataset.fallback || '../assets/images/media-fallback.svg');
  if (!replacement || image.src.endsWith(replacement)) return;
  image.onerror = null;
  image.src = replacement;
  image.classList.add('media-fallback');
}

function mediaImageUrl(url, fallbackId) {
  return sanitizeImageUrl(url) || topicArtworkPath(fallbackId);
}

function mediaFallbackAttrs(fallbackId) {
  const fallback = topicArtworkPath(fallbackId);
  return `data-fallback="${fallback}" onerror="useMediaFallback(this,'${fallback}')"`;
}

function lectureImageUrl(index) {
  const segments = lectureSegments();
  const current = sanitizeImageUrl(segments[index] && segments[index].image && segments[index].image.url);
  const repeated = current && segments.slice(0, index).some(seg => sanitizeImageUrl(seg.image && seg.image.url) === current);
  return current && !repeated ? current : topicArtworkPath(`lecture-${String(index + 1).padStart(2, '0')}`);
}

function evidenceImageUrl(index) {
  const images = L.images || [];
  const current = sanitizeImageUrl(images[index] && images[index].url);
  const repeated = current && images.slice(0, index).some(image => sanitizeImageUrl(image.url) === current);
  return current && !repeated ? current : topicArtworkPath(`evidence-${String(index + 1).padStart(2, '0')}`);
}

function stableImageKey(id) {
  return {
    contentdelivery: 'contentDelivery',
    checkpoint1: 'checkpoint1',
    checkpoint2: 'checkpoint2',
    beintheroom: 'beInTheRoom',
    besurreal: 'beSurreal'
  }[id] || id;
}

function moduleCardImg(id, fallback) {
  return topicArtworkCssPath(id) || sanitizeImageUrl(fallback || ((L.map && L.map.url) ? L.map.url : ''));
}

function videoPreviewImg(video) {
  if (video && video.youtubeId) return `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  return sanitizeImageUrl((video && video.previewImage) || topicArtworkPath('contentdelivery'));
}

function applyKeyConceptLabels() {
  if (!L || !L.meta) return;
  const labels = {
    'Topic 1.2': { lt: ['KC-3.1.III.D.iii', 'KC-3.2.I.B', 'KC-3.1.I.D; KC-3.1.III.D.iii'], sc: ['KC-3.2.I.B', 'KC-3.1.III.D.iii', 'KC-3.1.I.D; KC-3.1.III.D.iii'] },
    'Topic 1.3': { lt: ['KC-3.1.III.D.ii; KC-3.1.III.D.iii', 'KC-3.2.I; KC-3.1.I.D', 'KC-3.1.I.D'], sc: ['KC-3.1.III.D.ii; KC-3.1.III.D.iii', 'KC-3.2.I', 'KC-3.1.I.D'] },
    'Topic 1.4': { lt: ['KC-3.2.I.D.i', 'KC-3.2.I.D.i', 'Suggested Skill 3.B, Claims and Evidence in Sources'], sc: ['KC-3.2.I.D.i, State systems in the Americas', 'KC-3.2.I.D.i, State systems in the Americas', 'Suggested Skill 3.B, Evidence used to support an argument'] },
    'Topic 1.5': { lt: ['KC-3.2.I', 'KC-3.1.I.D; KC-3.1.III.D.iii', 'Comparison'], sc: ['KC-3.1.I.D', 'KC-3.1.I.D; KC-3.1.III.D.iii', 'KC-3.2.I'] },
    'Topic 1.6': { lt: ['KC-3.2.I', 'KC-3.1.III.D; KC-3.3', 'Comparison'], sc: ['KC-3.2.I', 'KC-3.3', 'Comparison'] },
    'Topic 1.7': { lt: ['Topic 1.7; Comparison', 'KC-3.1.III.D; Comparison', 'AP Historical Thinking Skill: Comparison'], sc: ['Comparison', 'Evidence', 'Reasoning'] }
  };
  const match = labels[L.meta.topic];
  if (!match) return;
  (L.learningTargets || []).forEach((item, i) => { if (match.lt[i]) item.kc = match.lt[i]; });
  (L.successCriteria || []).forEach((item, i) => { if (match.sc[i]) item.kc = match.sc[i]; });
}

// ── Boot ──────────────────────────────────────────────────────────────────────

if (L) {
  applyKeyConceptLabels();
  document.title = `BeHistorical | AP World ${L.meta.topic} ${L.meta.title}`;
  byId('lesson-title').textContent = `${L.meta.topic}, ${L.meta.title}`;
  byId('lesson-subtitle').textContent = L.meta.subtitle;
  byId('footer-topic-label').textContent = `${L.meta.topic}, ${L.meta.title} · Think Like a Historian.`;
  byId('lecture-title').textContent = L.lecture.title || 'Concept Cards';
  byId('lecture-intro').textContent = L.lecture.intro || 'Use these cards from the main page. Each card opens a projection-friendly pop-up with enlarged content and a related visual.';

  byId('inline-targets').innerHTML = `
    <div class="inline-targets">
      <article class="inline-target-card">
        <h3>Learning Targets</h3>
        ${(L.learningTargets || []).map((t, i) => `
          <div class="inline-target-item">
            <span class="inline-target-number">${i + 1}</span>
            <div class="inline-target-text">
              <p>${t.target}</p>
              ${t.kc ? `<div class="inline-target-kc-row">${kcPills(t.kc)}</div>` : ''}
            </div>
          </div>`).join('')}
      </article>
      <article class="inline-target-card">
        <h3>Success Criteria</h3>
        ${(L.successCriteria || []).map((c, i) => `
          <div class="inline-target-item">
            <span class="inline-target-number">${i + 1}</span>
            <div class="inline-target-text">
              <p>${c.criteria}</p>
              ${c.kc ? `<div class="inline-target-kc-row">${kcPills(c.kc)}</div>` : ''}
            </div>
          </div>`).join('')}
      </article>
    </div>`;

  renderCollegeBoardFramework();
  renderLectureCards();
  renderClassPresentation();
  wireLectureControls();
  renderDeepReading();
  renderVideoClips();
  renderModuleGrid();
  loadAllDrafts();
}

// ── College Board Framework ───────────────────────────────────────────────────

function normalizedKeyConcepts() {
  return (L.collegeBoardKeyConcepts || []).reduce((cards, kc) => {
    const code = String(kc.code || '').trim().toLowerCase();
    const examples = Array.isArray(kc.illustrativeExamples) ? kc.illustrativeExamples : [];
    if (code === 'illustrative examples') {
      const target = [...cards].reverse().find(card => String(card.code || '').trim().toLowerCase() !== 'illustrative examples');
      if (target) {
        target.illustrativeExamples = [...(target.illustrativeExamples || []), ...examples];
        if (!examples.length && kc.text) target.illustrativeExamples.push(kc.text);
      }
      return cards;
    }
    cards.push({ ...kc, illustrativeExamples: [...examples] });
    return cards;
  }, []);
}

function renderCollegeBoardFramework() {
  const section = byId('college-board-key-concepts');
  if (!section) return;
  const keyConcepts = normalizedKeyConcepts();
  section.innerHTML = `
    <div class="section-header">
      <div class="eyebrow">College Board Framework</div>
      <h2>Key Concepts &amp; Illustrative Examples</h2>
      <p>These are the AP World framework anchors for this topic, verbatim from the College Board CED. Connect your lesson work directly to these key concepts.</p>
    </div>
    <div class="cb-framework-grid">
      ${keyConcepts.map(kc => `
        <article class="cb-card">
          <span class="cb-code">${kc.theme || kc.code}</span>
          <h3>${kc.code}</h3>
          <p>${kc.text}</p>
          ${kc.illustrativeExamples && kc.illustrativeExamples.length ? `
            <div class="cb-examples">
              <strong>Illustrative examples</strong>
              <ul>${kc.illustrativeExamples.map(ex => `<li>${ex}</li>`).join('')}</ul>
            </div>` : ''}
        </article>`).join('')}
    </div>`;
}

// ── Concept cards ─────────────────────────────────────────────────────────────

function renderLectureCards() {
  byId('main-lecture-grid').innerHTML = lectureSegments().map((seg, i) => `
    <article class="card dark-card lecture-topic-card" role="button" tabindex="0"
      onclick="openLectureModal(${i})"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLectureModal(${i})}">
      <h3>${seg.title}</h3>
      <ul class="lecture-list">${seg.bullets.map(b => `<li>${md(b)}</li>`).join('')}</ul>
    </article>`).join('');
}

// ── Class Presentation ──────────────────────────────────────────────────────────

// The slide deck actually taught in class, distinct from a video clip: this is
// not outside supplementary media, it is the primary artifact for a student who
// sat in the room. It sits ABOVE the concept cards, not beside the video block,
// because burying it among "extra resources" would misdescribe what it is.
//
// Injected rather than added to the 71 unit shells, the same reason
// renderDeepReading() is, and guarded on its own id so a re-render never
// doubles the card.
//
// A topic with no classPresentation field shows no trace of this, the same way
// the video block and the deep-reading banner hide themselves.
//
// The URL here must always point at a generated "-student.html" deck (see
// scripts/build-student-decks.js), never at the teacher deck directly: the
// teacher file's presenter notes are plain text in the page, readable by
// anyone who opens the Notes button, so pointing a student here at that file
// would hand every student the same coaching language written for the teacher.
function renderClassPresentation() {
  const cp = L.classPresentation;
  const grid = byId('main-lecture-grid');
  if (!cp || !cp.url || !grid || byId('class-presentation-banner')) return;

  grid.insertAdjacentHTML('beforebegin', `
    <article class="card class-presentation-banner" id="class-presentation-banner" style="margin-bottom:1.5rem">
      <div class="eyebrow">In-Class Presentation</div>
      <h3>${cp.title || 'Follow Along or Review'}</h3>
      <p>${cp.desc || 'Follow along during class on your own device, or reopen these slides anytime to review what was taught.'}</p>
      <a class="btn" href="${cp.url}">Open Presentation</a>
    </article>`);
}

// ── Deep reading ──────────────────────────────────────────────────────────────

// The optional push-further layer under Content Delivery, for a topic whose
// modules assume more background than its First & 10 has room to carry. Mirrors
// foundations/foundations-topic-renderer.js, including where the card sits and
// why.
//
// Injected rather than added to the 71 unit shells, so this renderer stays the
// only place that knows the card's shape, and guarded on its own id the way the
// lecture controls are, or a re-render doubles the card.
//
// It sits AFTER the concept cards on purpose. The cards are the path everyone
// walks; this is depth on top of them. Given the IEP and 504 load in this room,
// a reading this long placed above the cards reads as required work, and the
// wording below says optional twice for the same reason.
//
// A topic with no deepReading block shows no trace of the feature, the same way
// the video block hides itself, so the 64 topics without a chapter show no empty
// frame where one would go.
function renderDeepReading() {
  const deep = L.deepReading;
  const grid = byId('main-lecture-grid');
  if (!deep || !deep.url || !grid || byId('deep-reading-banner')) return;

  grid.insertAdjacentHTML('afterend', `
    <article class="card deep-reading-banner" id="deep-reading-banner" style="margin-top:1.5rem">
      <div class="eyebrow">Optional, go deeper</div>
      <h3>${deep.title || 'Deep Reading'}</h3>
      <p>${deep.desc || 'A textbook-depth companion to this topic, for when you want more detail than the First &amp; 10 has room for.'}</p>
      <a class="btn" href="${deep.url}">Open the Deep Reading</a>
    </article>`);
}

// ── Video clips ───────────────────────────────────────────────────────────────

// Video clips are an optional resource, not part of the ten-module path and not
// part of the lecture deck. Only some topics have one, so the block introduces
// itself when it is there and disappears entirely when it is not: an empty
// container used to leave a gap under the concept cards on every topic without a
// clip, which reads as something failing to load.
function renderVideoClips() {
  const host = byId('content-video-clips');
  if (!host) return;
  const videos = L.lecture.videos || [];
  if (!videos.length) { host.innerHTML = ''; host.hidden = true; return; }
  host.hidden = false;

  host.innerHTML = `
    <article class="card video-intro">
      <h3>Video Clips</h3>
      <p>Optional reinforcement for this topic. Your teacher may play one of these in class, and you can watch them on your own any time you want another pass at the material. Watch for the guiding question under each clip rather than taking down everything.</p>
    </article>` + videos.map(v => {
    const preview = videoPreviewImg(v);
    return `
      <article class="card video-card">
        <h3>${v.title}</h3>
        <div class="media-card">
          <div class="thumb video-thumb" style="${preview ? `background-image:linear-gradient(rgba(26,28,29,.25),rgba(26,28,29,.55)),url('${preview}')` : ''}">
            <span>Video Clip</span>
          </div>
          <p>${v.prompt}</p>
          <a class="btn" href="${v.url}" target="_blank" rel="noopener">Open Video</a>
        </div>
      </article>`;
  }).join('');
}

// ── Module grid ───────────────────────────────────────────────────────────────

function defaultModules() {
  return [
    { id: 'map', label: 'Module 01', title: 'Map & Geography Check', desc: 'Connect geography to historical development.', img: moduleCardImg('map', L.map.url), render: renderMap },
    { id: 'first10', label: 'Module 02', title: 'First & 10 Reading', desc: 'Narrative foundation for the topic.', img: moduleCardImg('first10', L.map.url), render: renderFirst10 },
    { id: 'contentdelivery', label: 'Module 03', title: 'Content Delivery', desc: 'Jump down to the main concept-card section.', img: moduleCardImg('contentdelivery', L.map.url), jump: '#lecture' },
    { id: 'besurreal', label: 'Module 04', title: 'BeSurreal', desc: 'A memorable everyday-life detail.', img: moduleCardImg('besurreal', L.map.url), render: renderBeSurreal },
    { id: 'skill', label: 'Module 05', title: 'AP Skill Builder', desc: (L.skillBuilder && L.skillBuilder.label) || 'Historical thinking practice.', img: moduleCardImg('skill', L.map.url), render: renderSkill },
    { id: 'checkpoint1', label: 'Module 06', title: 'Checkpoint 1', desc: (L.checkpoints && L.checkpoints[0] && L.checkpoints[0].cardDesc) || 'First checkpoint.', img: moduleCardImg('checkpoint1', L.map.url), render: () => renderCheckpoint(L.checkpoints[0], 'checkpoint-one-response') },
    { id: 'evidence', label: 'Module 07', title: 'Evidence Lab', desc: 'Analyze images and source evidence.', img: moduleCardImg('evidence', L.map.url), render: renderEvidence },
    { id: 'source', label: 'Module 08', title: 'Primary Source', desc: 'Read and interpret a source.', img: moduleCardImg('source', L.map.url), render: renderPrimarySource },
    ...(L.beInTheRoom && L.beInTheRoom.url ? [{ id: 'beintheroom', label: 'Module 09', title: 'BeInTheRoom', desc: L.beInTheRoom.desc, img: moduleCardImg('beintheroom', L.map.url), link: L.beInTheRoom.url }] : []),
    { id: 'checkpoint2', label: L.beInTheRoom ? 'Module 10' : 'Module 09', title: 'Checkpoint 2', desc: (L.checkpoints && L.checkpoints[1] && L.checkpoints[1].cardDesc) || 'Final checkpoint.', img: moduleCardImg('checkpoint2', L.map.url), render: () => renderCheckpoint(L.checkpoints[1], 'checkpoint-two-response') }
  ];
}

function renderModuleGrid() {
  window.BEHISTORICAL_MODULES = L.modules || defaultModules();
  byId('module-grid').innerHTML = window.BEHISTORICAL_MODULES.map(m => `
    <article class="module-card" role="button" tabindex="0"
      onclick="${m.link ? `openLinkedModule('${m.link}')` : m.jump ? `jumpToSection('${m.jump}')` : `openModule('${m.id}')`}"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${m.link ? `openLinkedModule('${m.link}')` : m.jump ? `jumpToSection('${m.jump}')` : `openModule('${m.id}')`}}"
      style="--module-img:url('${moduleCardImg(m.id, m.img)}')">
      <div class="module-label">${m.label}</div>
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
    </article>`).join('');
}

// ── Modal focus management ────────────────────────────────────────────────────
//
// Adding .show made a dialog visible and did nothing else, so a keyboard or
// screen-reader user was left behind the overlay: the reading cursor stayed on
// the module card, Tab walked the page underneath, and closing the dialog
// dropped focus at the top of the document. The modals hold the map, the
// reading and the primary source, which is most of the lesson.
//
// A stack, not a single slot, because the lightbox opens from inside the module
// modal when a student enlarges an Evidence Lab image. Escape closes the topmost
// dialog only, and each dialog returns focus to whatever opened it.
const BHModalStack = [];

const BH_FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])', 'textarea:not([disabled])', 'iframe',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

// getClientRects() is the cheap "is it actually rendered" test. A control inside
// a collapsed or hidden branch must not be a tab stop.
function bhFocusable(root) {
  return Array.prototype.slice.call(root.querySelectorAll(BH_FOCUSABLE))
    .filter(el => el.getClientRects().length > 0);
}

function bhTrapTab(event) {
  if (event.key !== 'Tab' || !BHModalStack.length) return;
  const top = BHModalStack[BHModalStack.length - 1].el;
  const items = bhFocusable(top);
  if (!items.length) { event.preventDefault(); top.focus(); return; }

  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;
  const outside = !top.contains(active);

  if (event.shiftKey && (active === first || outside)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || outside)) {
    event.preventDefault();
    first.focus();
  }
}

function bhOpenModal(modalId, labelId) {
  const el = byId(modalId);
  if (!el) return;

  // Re-opening a dialog that is already open must not push a second entry, and
  // must keep the original launcher. The lecture modal does exactly this: the
  // prev/next arrows swap the card in place by calling openLectureModal again.
  // A five-card deck used to push five entries, one Close popped one, and the
  // stack stayed non-empty, so the scroll lock never lifted and the student was
  // stranded on the lecture section until they reloaded the page.
  if (!BHModalStack.some(item => item.el === el)) {
    BHModalStack.push({ el: el, launcher: document.activeElement });
  }
  el.setAttribute('aria-modal', 'true');
  if (labelId && byId(labelId)) el.setAttribute('aria-labelledby', labelId);
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  if (BHModalStack.length === 1) {
    document.addEventListener('keydown', bhTrapTab, true);
    document.body.style.overflow = 'hidden';
  }

  // Focus the dialog itself rather than its first control, so the label is
  // announced and the student hears what opened before hearing a button. A tick
  // late because the body was just replaced and Safari will not focus a node
  // that was not in the tree when the click handler ran.
  setTimeout(() => { if (el.classList.contains('show')) el.focus(); }, 0);
}

function bhCloseModal(modalId) {
  const el = byId(modalId);
  if (!el) return;

  // Close anything stacked above this one too, so a stale entry cannot leave the
  // trap pointing at a hidden dialog.
  let entry = null;
  for (let i = BHModalStack.length - 1; i >= 0; i--) {
    const item = BHModalStack[i];
    BHModalStack.splice(i, 1);
    item.el.classList.remove('show');
    item.el.removeAttribute('aria-modal');
    if (item.el === el) { entry = item; break; }
  }

  // Purge any duplicate entry for this element, then release the lock whenever
  // nothing on the stack is actually visible. Keying the release off "no visible
  // dialog" rather than "empty stack" is what makes a stranded student
  // impossible: a stale entry can no longer hold the page hostage.
  for (let i = BHModalStack.length - 1; i >= 0; i--) {
    if (BHModalStack[i].el === el) BHModalStack.splice(i, 1);
  }
  if (!BHModalStack.some(item => item.el.classList.contains('show'))) {
    BHModalStack.length = 0;
    document.removeEventListener('keydown', bhTrapTab, true);
    document.body.style.overflow = '';
  }

  // Back to the card that opened it. Landing at the top of the document instead
  // means re-tabbing through the whole page to reach the next module.
  const launcher = entry && entry.launcher;
  if (launcher && launcher.focus && launcher.getClientRects().length) launcher.focus();
}

// ── Modal controls ────────────────────────────────────────────────────────────

function openLinkedModule(url) { window.open(url, '_blank'); }
function jumpToSection(selector) { const el = document.querySelector(selector); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

function openModule(id) {
  const mod = window.BEHISTORICAL_MODULES.find(m => m.id === id);
  if (!mod || mod.jump || mod.link) return;
  byId('pop-eyebrow').textContent = mod.label;
  byId('pop-title').textContent = mod.title;
  byId('pop-body').innerHTML = mod.render();
  byId('pop-modal').classList.add('show');
  loadAllDrafts();
  bhOpenModal('pop-modal', 'pop-title');
}

function closeModule() { bhCloseModal('pop-modal'); }

// ── Lecture deck navigation ───────────────────────────────────────────────────
//
// The deck is a sequence, so it gets sequence controls: prev/next arrows, a
// "Card 3 of 8" counter, and the left/right arrow keys. Without them a teacher
// projecting an eight-card deck had to close the dialog and hunt for the next
// card in the grid eight times.
//
// The controls and the Back to Modules button are injected rather than added to
// the 71 lesson shells, so the shared renderer stays the only place that knows
// the lecture modal's shape.
let currentLectureIndex = 0;

function wireLectureControls() {
  const modal = byId('lecture-modal');
  if (!modal) return;

  if (!byId('lecture-prev')) {
    modal.insertAdjacentHTML('beforeend',
      `<button class="lecture-arrow lecture-arrow-prev" id="lecture-prev" type="button" aria-label="Previous lecture card" onclick="lectureStep(-1)">&#8249;</button>` +
      `<button class="lecture-arrow lecture-arrow-next" id="lecture-next" type="button" aria-label="Next lecture card" onclick="lectureStep(1)">&#8250;</button>` +
      `<div class="lecture-nav-status" id="lecture-nav-status" aria-live="polite"></div>`);
  }

  // Close stays put, returning the student to the card they opened. Back to
  // Modules is the explicit way out of the deck, because "I am done lecturing"
  // and "show me the next card" are different intentions.
  const closeBtn = modal.querySelector('.lecture-close');
  if (closeBtn && !byId('lecture-to-modules')) {
    const row = document.createElement('div');
    row.className = 'lecture-modal-actions';
    closeBtn.parentNode.insertBefore(row, closeBtn);
    row.insertAdjacentHTML('afterbegin',
      `<button class="btn secondary lecture-to-modules" id="lecture-to-modules" type="button" onclick="closeLectureToModules()">&#8593; Back to Modules</button>`);
    row.appendChild(closeBtn);
  }
}

function updateLectureNav() {
  const total = lectureSegments().length;
  const prev = byId('lecture-prev');
  const next = byId('lecture-next');
  const status = byId('lecture-nav-status');
  if (prev) prev.disabled = currentLectureIndex <= 0;
  if (next) next.disabled = currentLectureIndex >= total - 1;
  if (status) status.textContent = `Card ${currentLectureIndex + 1} of ${total}`;
}

function lectureStep(delta) {
  const n = currentLectureIndex + delta;
  if (n >= 0 && n < lectureSegments().length) openLectureModal(n);
}

// Back to the module grid, with focus on the first card so a keyboard user lands
// where the page just scrolled. preventScroll because the smooth scroll to the
// section heading below is the one that should be visible.
function closeLectureToModules() {
  closeLectureModal();
  const first = document.querySelector('#module-grid .module-card');
  if (first) first.focus({ preventScroll: true });
  jumpToSection('#modules');
}

function openLectureModal(i) {
  const seg = lectureSegments()[i];
  currentLectureIndex = i;
  byId('lecture-modal-title').textContent = seg.title;
  byId('lecture-modal-bullets').innerHTML = seg.bullets.map(b => `<li>${md(b)}</li>`).join('');
  let resource = byId('lecture-modal-resource');
  if (!resource) {
    resource = document.createElement('div');
    resource.id = 'lecture-modal-resource';
    resource.className = 'lecture-modal-resource';
    byId('lecture-modal-bullets').insertAdjacentElement('afterend', resource);
  }
  const resourceUrl = String(seg.resourceUrl || '').trim();
  const safeResourceUrl = /^(?:javascript|data):/i.test(resourceUrl) ? '' : resourceUrl;
  resource.innerHTML = safeResourceUrl
    ? `<a class="btn" href="${safeResourceUrl}" target="_blank" rel="noopener">${seg.resourceLabel || 'Open the Resource'}</a>`
    : '';
  const image = byId('lecture-modal-img');
  const fallbackId = `lecture-${String(i + 1).padStart(2, '0')}`;
  const fallback = topicArtworkPath(fallbackId);
  image.onerror = function() { useMediaFallback(this, fallback); };
  image.dataset.fallback = fallback;
  image.src = lectureImageUrl(i);
  image.alt = (seg.image && seg.image.title) || `${seg.title} visual`;
  const sourceLink = seg.image && (seg.image.sourceUrl || seg.image.url);
  byId('lecture-modal-caption').innerHTML = `<strong>${(seg.image && seg.image.title) || seg.title}</strong><br>${(seg.image && seg.image.caption) || 'Topic-specific instructional artwork.'}${sourceLink ? `<br><a href="${sourceLink}" target="_blank" rel="noopener">Open image source</a>` : ''}`;
  updateLectureNav();
  byId('lecture-modal').classList.add('show');
  bhOpenModal('lecture-modal', 'lecture-modal-title');
}

function closeLectureModal() { bhCloseModal('lecture-modal'); }

// ── Module render functions ───────────────────────────────────────────────────

function renderMap() {
  // Embedded map path (topic 1.3 only). The embedded page has its own scratch
  // textareas but no capture path, so the standard Map Check draft box goes
  // below the frame; without it this one topic would be the only lesson whose
  // Map module cannot submit.
  if (L.map && L.map.embedUrl) {
    return `<div class="first10-note"><strong>${L.map.title}</strong><br>${L.map.note || 'Use the embedded map window below, then close this pop-out to return to the lesson path.'}</div><div class="first10-frame-wrap"><iframe class="first10-frame" src="${L.map.embedUrl}" title="${L.map.title}"></iframe></div>
    ${draftBlock('map-check-response', L.map.prompt || 'Summarize what the map shows about this topic.', 'Map Check')}`;
  }
  return `
    <article class="card map-card">
      <div class="map-grid">
        <figure class="map-figure">
          <img src="${mediaImageUrl(L.map.url, 'map')}" alt="${L.map.title}" role="button" tabindex="0"
               aria-label="Enlarge map: ${L.map.title}"
               onclick="openMapLightbox()"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openMapLightbox()}" ${mediaFallbackAttrs('map')}>
          <figcaption><strong>${L.map.caption}</strong><br><a class="source-link" href="${L.map.sourceUrl}" target="_blank" rel="noopener">Open map source</a></figcaption>
        </figure>
        <div class="map-notes">
          <h3>${L.map.title}</h3>
          <p>${L.map.intro}</p>
          <ul>${(L.map.notes || []).map(n => `<li>${md(n)}</li>`).join('')}</ul>
          ${renderMapKey()}
          <div class="question"><strong>Map Question</strong><br>${L.map.prompt}</div>
          ${draftBlock('map-check-response', L.map.prompt, 'Map Check')}
        </div>
      </div>
    </article>`;
}

function renderMapKey() {
  return L.map.key && L.map.key.length ? `
    <div class="map-key">
      <h4>Map Key</h4>
      ${L.map.key.map(k => `<div class="map-key-item"><div class="map-key-label">${k.label}</div><div>${k.detail}</div></div>`).join('')}
    </div>` : '';
}

// ── First & 10, questions feed the MagicSchool bridge ───────────────────────
//
// Student flow:
//   1. Read the First & 10 narrative
//   2. Answer the three historical thinking questions (each gets its own textarea)
//   3. Click "Build My AI Coach Prompt", answers package into one MagicSchool prompt
//   4. Copy prompt → Open AI Coach → coaching conversation → move to lecture
//
// The old "one thing I noticed / one question I still have" fields are removed.
// The three First & 10 questions ARE the bridge. Nothing sits separately.

function renderFirst10() {
  const msDefault = (L.first10 && L.first10.magicSchoolBridge && L.first10.magicSchoolBridge.magicSchoolUrl)
    || (L.meta && L.meta.feedbackToolUrl)
    || 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  const msUrl = (typeof window !== 'undefined' && window.BHClassroom)
    ? window.BHClassroom.resolveMagicSchoolUrl(msDefault)
    : msDefault;
  const canvasNote = (L.meta && L.meta.canvasSubmissionNote)
    || 'Organize your thinking here, submit your final work in Canvas.';
  const topic = (L.meta && L.meta.topic) ? L.meta.topic : 'this topic';
  const topicTitle = (L.meta && L.meta.title) ? L.meta.title : '';
  const questions = (L.first10 && L.first10.questions) ? L.first10.questions : [];

  // Build question blocks, each question gets label + textarea
  const questionBlocks = questions.map((q, i) => `
    <div class="first10-q-block">
      <div class="question">
        <strong>Question ${i + 1}</strong><br>${q}
      </div>
      <textarea
        class="response-area"
        id="first10-q${i + 1}"
        data-response-type="First and 10 Q${i + 1}"
        placeholder="Write your answer here..."
      ></textarea>
      <div id="first10-q${i + 1}-result" class="check-result"></div>
    </div>`).join('');

  // Embedded reading path, questions and AI coaching live inside the iframe page
  if (L.first10.embedUrl) {
    return `
      <div class="first10-note">
        <strong>${L.first10.title}</strong><br>
        ${L.first10.note || 'Use the embedded reading window below, then answer the questions and build your AI Coach prompt.'}
      </div>
      <div class="first10-frame-wrap">
        <iframe class="first10-frame" src="${L.first10.embedUrl}" title="${L.first10.title}"></iframe>
      </div>`;

  }

  // Inline reading path
  return `
    <div class="card reading">
      <h3>${L.first10.title}</h3>
      ${L.first10.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="card" style="margin-top:1.25rem;">
      <h3>First &amp; 10 Response Questions</h3>
      <p style="font-size:.85rem;opacity:.8;margin-bottom:1rem;">Answer all three questions in your own words, then move on to the lecture.</p>
      ${questionBlocks}
    </div>
    `;
}

// ── BeSurreal ─────────────────────────────────────────────────────────────────

function renderBeSurreal() {
  const s = L.beSurreal || {};
  return `
    <article class="card">
      <h3>${s.title}</h3>
      <p>${s.text}</p>
      <div class="question"><strong>BeSurreal Question</strong><br>${s.prompt}</div>
    </article>`;
}

// ── Skill Builder ─────────────────────────────────────────────────────────────

function renderSkill() {
  const s = L.skillBuilder || {};
  return `
    <article class="card">
      <h3>${s.title}</h3>
      ${s.label ? `<div class="ap-alignment"><strong>AP alignment</strong>${s.label}</div>` : ''}
      <p>${s.intro}</p>
      <div class="skill-steps">
        ${(s.steps || []).map(step => `<div class="skill-step"><strong>${step.label}</strong>${step.text}</div>`).join('')}
      </div>
      <div class="question"><strong>Skill Practice</strong><br>${s.prompt}</div>
      ${(s.criteria || []).length ? `
        <div class="ap-quality-check">
          <h4>Before You Submit</h4>
          <ul>${s.criteria.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>` : ''}
    </article>
    ${draftBlock('skill-builder-response', s.prompt, 'AP Skill Builder')}`;
}

// ── Checkpoints, with MagicSchool bridge ────────────────────────────────────

function renderCheckpoint(cp, id) {
  if (!cp) return '<p>Checkpoint data not found.</p>';
  const msMode = cp.magicSchoolMode || (id === 'checkpoint-one-response' ? 'Checkpoint 1' : 'Checkpoint 2');
  const topic = (L && L.meta && L.meta.topic) ? L.meta.topic : 'Topic';
  const cpMsDefault = (L && L.meta && L.meta.feedbackToolUrl) || 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  const msUrl = (typeof window !== 'undefined' && window.BHClassroom)
    ? window.BHClassroom.resolveMagicSchoolUrl(cpMsDefault)
    : cpMsDefault;
  const canvasNote = (L && L.meta && L.meta.canvasSubmissionNote) || 'Organize your thinking here, submit your final work in Canvas.';

  // Everything the coach prompt needs that is per-checkpoint rather than
  // per-lesson. The bridge buttons only carry the response id, so the rest has to
  // be stashed at render time. The lesson-wide fields are read off L at build
  // time instead, since they cannot differ between the two checkpoints.
  CHECKPOINT_MS[id] = {
    msMode,
    topic,
    terms: cp.terms || [],
    checklist: cp.focus || [],
    assigned: cp.prompt || '',
    // The checkpoint's own skill when it states one, otherwise the topic's AP
    // Skill Builder label. Those answer different questions, "what does module
    // 10 assess" and "what does module 05 teach", and on about a sixth of the
    // course they are different skills. An explicit '' means this checkpoint has
    // no clean AP skill and should carry no skill line at all.
    skill: cp.skill != null ? cp.skill : ((L && L.skillBuilder && L.skillBuilder.label) || '')
  };

  return `
    <div class="component-note"><strong>${cp.subtitle}</strong></div>
    <div class="pop-grid">
      <article class="card pop-half">
        <h3>Learning Target Checked</h3>
        <ul>${(cp.learningTargets || []).map(t => `<li>${t}</li>`).join('')}</ul>
      </article>
      <article class="card pop-half">
        <h3>Success Criteria Checked</h3>
        <ul>${(cp.successCriteria || []).map(c => `<li>${c}</li>`).join('')}</ul>
      </article>
    </div>
    <div class="checkpoint-grid">
      <article class="checkpoint-focus">
        <h4>Focus Terms</h4>
        <p>${(cp.terms || []).map(t => `<strong>${t}</strong>`).join(', ')}</p>
      </article>
      <article class="checkpoint-focus">
        <h4>Strong Answer Checklist</h4>
        <ul>${(cp.focus || []).map(f => `<li>${f}</li>`).join('')}</ul>
      </article>
    </div>
    ${responseBlock(id, cp.prompt, cp.responseType, cp.terms || [])}
    ${msMode === 'Checkpoint 1' ? independentCheckpointNote() : coachedCheckpointBridge(id, msUrl, canvasNote)}`;
}

// Checkpoint 1 is deliberately independent as of 2026-08-31.
//
// It is the lesson's formative diagnostic, and its question is whether the
// student can show the learning target at this point without help. Coaching it
// before it is captured measures the coaching. Saying so on the card matters:
// students had a coach here all year, and a button that simply vanishes reads
// as something broken rather than as a decision.
//
// The feedback loop this used to provide does not disappear, it moves to the
// teacher, in the room, in the same block. On an alternating block nothing
// carries over, so that is a commitment rather than a thing that happens by
// itself.
function independentCheckpointNote() {
  return `
    <div class="component-note">
      <strong>Do this one on your own.</strong> Checkpoint 1 is where you and your
      teacher find out what has landed so far, so there is no AI coaching here.
      Write what you actually think, including the parts you are unsure about.
      Socrates is waiting at Checkpoint 2, once you have more to work with.
    </div>`;
}

function coachedCheckpointBridge(id, msUrl, canvasNote) {
  return `
    <div class="magicschool-bridge">
      <h3>Take Your Thinking to the AI Coach</h3>
      <p>Coaching happens between your first draft and what you hand in. Socrates gives you one thing to work on at a time; he will not write your answer for you.</p>
      <ol class="bridge-steps">
        <li><strong>Draft</strong> your response in the box above.</li>
        <li><strong>Build</strong> and copy your prompt, then paste it into the AI Coach.</li>
        <li><strong>Come back and revise the box above</strong> using what the coaching surfaced.</li>
      </ol>
      <div class="copy-template">
        <p class="copy-template-text" id="${id}-ms-preview">Your AI Coach prompt will appear here after you click Build My AI Coach Prompt.</p>
      </div>
      <div class="tool-row">
        <button class="btn" type="button" onclick="generateCheckpointPrompt('${id}')">Build My AI Coach Prompt</button>
        <button class="btn secondary" type="button" onclick="copyCheckpointPrompt('${id}')">Copy Prompt</button>
        <a class="btn secondary" href="${msUrl}" target="_blank" rel="noopener">Open AI Coach</a>
      </div>
      <div id="${id}-ms-result" class="check-result"></div>
      <p class="bridge-return"><strong>Your revised answer in the box above is what goes to Canvas.</strong> Nothing from the AI Coach conversation is collected, so improve your own writing before you gather your work.</p>
      <p class="bridge-homework">If you do not finish the draft, the coaching, and the revision in class, complete all three for homework.</p>
      <p class="canvas-note">${canvasNote}</p>
    </div>`;
}


// ── Checkpoint prompt build and copy ──────────────────────────────────────────
//
// Mirrors the First & 10 bridge: Build packages the drafted response into a
// coaching prompt and shows it in the preview, Copy sends what the preview
// shows. The preview used to be a fixed string ending in "[paste your response
// here]" that nothing ever rewrote, so the student had no way to see that a
// prompt could be produced at all.

const CHECKPOINT_PROMPT_PLACEHOLDER = 'will appear here';

function generateCheckpointPrompt(responseId) {
  const previewEl = byId(responseId + '-ms-preview');
  const resultEl  = byId(responseId + '-ms-result');
  const responseEl = byId(responseId);
  const meta = CHECKPOINT_MS[responseId] || {};
  const topic = meta.topic || ((L && L.meta && L.meta.topic) ? L.meta.topic : 'this topic');
  const msMode = meta.msMode || 'Checkpoint';
  const topicTitle = (L && L.meta && L.meta.title) ? L.meta.title : '';
  const terms = meta.terms || [];

  const responseText = (responseEl && responseEl.value && responseEl.value.trim())
    ? responseEl.value.trim()
    : '';
  if (!responseText) {
    if (resultEl) resultEl.textContent = 'Draft your response above before building your prompt.';
    return;
  }

  // The full paste contract, built by the shared builder inlined above. This used
  // to be five hand-built lines carrying the topic, the draft, and the focus
  // terms. Socrates' own instructions name no unit content, so everything else he
  // needs about this assignment has to arrive here: the period, the targets, the
  // success criteria, the CED key concept, and the assigned prompt. Adding those
  // is what took the graded eval from 75% to 89% on the rubric and from 81% to
  // 100% on the mechanical checks. See docs/socrates/socrates-paste-contract.md.
  const prompt = BH_COACH.buildCoachPrompt({
    topic: String(topic).replace(/^Topic\s+/i, ''),
    module: msMode,
    title: topicTitle,
    span: BH_COACH.unitPeriod(topic),
    focus: (L && L.meta && L.meta.subtitle) ? L.meta.subtitle : '',
    targets: ((L && L.learningTargets) || []).map(t => (t && t.target) || t),
    criteria: ((L && L.successCriteria) || []).map(c => (c && c.criteria) || c),
    kcs: (L && L.collegeBoardKeyConcepts) || [],
    terms,
    // Derived from the topic's own AP Skill Builder label rather than typed onto
    // each checkpoint, so the skill the lesson practises and the skill Socrates
    // coaches cannot fall out of step. buildCoachPrompt normalizes the prose.
    skill: meta.skill || '',
    checklist: meta.checklist || [],
    assigned: meta.assigned || '',
    draft: responseText
  });

  if (previewEl) previewEl.textContent = prompt;
  if (resultEl)  resultEl.textContent  = 'Prompt ready, click Copy Prompt, then paste it into the BeHistorical AI Coach.';
}

function copyCheckpointPrompt(responseId) {
  const previewEl = byId(responseId + '-ms-preview');
  const resultEl  = byId(responseId + '-ms-result');
  if (!previewEl || previewEl.textContent.includes(CHECKPOINT_PROMPT_PLACEHOLDER)) {
    generateCheckpointPrompt(responseId);
    return;
  }
  navigator.clipboard.writeText(previewEl.textContent)
    .then(() => { if (resultEl) resultEl.textContent = 'Prompt copied, paste it into the BeHistorical AI Coach.'; })
    .catch(() => { if (resultEl) resultEl.textContent = 'Copy failed. Select and copy the prompt text above manually.'; });
}

// ── Evidence Lab ──────────────────────────────────────────────────────────────

// An evidence card only gets an "Open source/image" link when there is somewhere
// real to send the student. Two cards have nowhere: one with an empty `url`,
// which the Image Contract explicitly allows and which was rendering
// `href=""`, so clicking it reloaded the lesson; and a text-evidence plate,
// whose `url` is a data URI this repo drew itself and is not a source.
function evidenceSourceLink(img) {
  const href = img.sourceUrl || (/^https?:/i.test(String(img.url || '')) ? img.url : '');
  return href
    ? `<a class="source-link" href="${href}" target="_blank" rel="noopener">Open source/image</a>`
    : '';
}

function renderEvidence() {
  const lab = L.evidenceLab || {};
  const images = L.images || [];
  const entries = lab.items || [];
  return `
    <div class="component-note"><strong>${lab.title}</strong><br>${lab.task || lab.intro || ''}</div>
    ${lab.skill ? `<div class="ap-alignment"><strong>AP alignment</strong>${lab.skill}</div>` : ''}
    ${images.length ? `<div class="pop-grid">
      ${images.map((img, i) => `
        <article class="card image-card pop-half">
          <img src="${evidenceImageUrl(i)}" alt="${img.title}" role="button" tabindex="0"
               aria-label="Enlarge image: ${img.title}"
               onclick="openLightbox(${i})"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(${i})}" ${mediaFallbackAttrs(`evidence-${String(i + 1).padStart(2, '0')}`)}>
          <div class="image-caption">
            <strong>${img.title}</strong><br>${img.caption}<br><em>${img.prompt}</em><br>
            ${evidenceSourceLink(img)}
          </div>
        </article>`).join('')}
    </div>` : ''}
    ${entries.length ? `<div class="evidence-entry-grid">
      ${entries.map((entry, i) => `
        <article class="card evidence-entry">
          <div class="eyebrow">Evidence ${String.fromCharCode(65 + i)}</div>
          <h3>${entry.title}</h3>
          <p>${entry.detail}</p>
        </article>`).join('')}
    </div>` : ''}
    ${(lab.criteria || []).length ? `
      <div class="ap-quality-check">
        <h4>Evidence Standard</h4>
        <ul>${lab.criteria.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>` : ''}
    ${draftBlock('evidence-response', lab.prompt, 'Evidence Lab')}`;
}

// ── Primary Source ────────────────────────────────────────────────────────────

function renderPrimarySource() {
  const s = L.primarySource || {};
  const responsePrompt = s.responsePrompt || (s.questions || []).join(' ');
  const attribution = s.attribution;
  return `
    ${s.skill ? `<div class="ap-alignment"><strong>AP alignment</strong>${s.skill}</div>` : ''}
    <div class="pop-grid">
      <article class="card pop-two-third">
        <h3>${s.title}</h3>
        <p>${s.intro}</p>
        <p class="pq-doc-label">Document</p>
        ${attribution ? `<p class="pq-source-line"><em>Source: ${attribution}.</em></p>` : ''}
        <blockquote>${s.text}</blockquote>
        ${(s.sourceLinks || []).length ? `<div class="source-links">
          <strong>Trace the source</strong>
          ${(s.sourceLinks || []).map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join('')}
        </div>` : ''}
        ${s.sourceNote ? `<div class="source-integrity"><strong>How to read this source</strong>${s.sourceNote}</div>` : ''}
      </article>
      <aside class="card pop-third">
        <h3>AP Source Task</h3>
        ${(s.questions || []).map(q => `<div class="question">${q}</div>`).join('')}
      </aside>
    </div>
    ${draftBlock('primary-source-response', responsePrompt, 'Primary Source')}`;
}

// ── Shared response/draft blocks ──────────────────────────────────────────────

function draftBlock(id, prompt, responseType) {
  rememberPrompt(id, prompt);
  return `
    <div class="prompt-box">
      <h3>Draft Your Thinking</h3>
      <p>${prompt}</p>
      <textarea class="response-area" id="${id}" data-response-type="${responseType}" placeholder="Type your response here..."></textarea>
      ${confidenceBlock(id)}
      <div id="${id}-result" class="check-result"></div>
    </div>`;
}

function responseBlock(id, prompt, responseType, terms = []) {
  rememberPrompt(id, prompt);
  return `
    <div class="prompt-box">
      <h3>Write Your Response</h3>
      <p>${prompt}</p>
      <textarea class="response-area" id="${id}" data-response-type="${responseType}" data-terms="${terms.join('|')}" placeholder="Type your checkpoint response here..."></textarea>
      ${confidenceBlock(id)}
      <div class="tool-row">
        <button class="btn secondary" type="button" onclick="selfCheck('${id}')">Run Self-Check</button>
      </div>
      <div id="${id}-result" class="check-result"></div>
    </div>`;
}

// ── Draft / save / copy / self-check ─────────────────────────────────────────

// Draft storage that cannot throw.
//
// Touching localStorage raises a SecurityError, not a null, when the browser
// refuses it: a sandboxed frame (which is one of the ways Canvas serves
// uploaded HTML), Safari private browsing, or a device policy that disables
// site data. Unguarded, that one throw took out autosave, took out loadDraft
// and therefore openModule for any module with a textarea, and took out Copy
// All My Work, with nothing on screen to tell the student their typing was not
// being kept.
//
// Every write also lands in a memory copy, so a lesson still gathers a full
// Copy All My Work within the session even when nothing can be persisted. What
// is lost in that case is surviving a reload, and the student is told so
// plainly rather than finding out afterwards.
const BHDraftStore = (function () {
  const memory = {};
  let live = false;
  try {
    const probe = '__bh_probe__';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
    live = true;
  } catch (e) { live = false; }

  // Phase 1 instrumentation. A save that failed here has always failed
  // silently, which is why "about two students a day" is an anecdote rather
  // than a number. Counting is all this does, on this device, and no student
  // writing is recorded: see assets/js/behistorical-save-health.js.
  if (window.BHSaveHealth) window.BHSaveHealth.startSession(live);

  return {
    get available() { return live; },
    get(key) {
      if (live) { try { return localStorage.getItem(key); } catch (e) { live = false; } }
      return Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : null;
    },
    set(key, value) {
      memory[key] = value;
      if (!live) {
        if (window.BHSaveHealth) window.BHSaveHealth.recordWrite(false, { name: 'StorageUnavailable' });
        return false;
      }
      try {
        localStorage.setItem(key, value);
        if (window.BHSaveHealth) window.BHSaveHealth.recordWrite(true, null, key);
        return true;
      } catch (e) {
        live = false;
        if (window.BHSaveHealth) window.BHSaveHealth.recordWrite(false, e);
        return false;
      }
    },
    keys() {
      if (live) {
        try {
          const out = [];
          for (let i = 0; i < localStorage.length; i++) out.push(localStorage.key(i));
          return out;
        } catch (e) { live = false; }
      }
      return Object.keys(memory);
    }
  };
})();

// Shown wherever a save would otherwise claim success it cannot deliver.
const BH_NO_STORAGE_NOTE = 'This browser will not let the page save drafts. Your typing stays until you close the tab, so gather and copy your work into Canvas before you leave.';

// Namespace localStorage keys by topic so drafts never bleed across lessons.
function draftKey(id) {
  const topic = (L && L.meta && L.meta.topic) ? L.meta.topic.replace(/\s+/g, '-').toLowerCase() : 'shared';
  return `behistorical-draft-${topic}-${id}`;
}

// ── Confidence ────────────────────────────────────────────────────────────────
//
// A separate key prefix, not a suffix on the draft key, because
// collectLessonWork() sweeps every key beginning `behistorical-draft-<topic>-`
// and treats what it finds as a student response. A confidence value stored
// under that prefix would be exported as if it were writing.
//
// The Teacher Hub has always computed an average confidence off a column that
// had no source, so it rendered empty forever. This is that source. It is
// deliberately optional: a blank is a real answer, and a student who skips it
// should not be nagged.
function confidenceKey(id) {
  const topic = (L && L.meta && L.meta.topic) ? L.meta.topic.replace(/\s+/g, '-').toLowerCase() : 'shared';
  return `behistorical-conf-${topic}-${id}`;
}

const BH_CONFIDENCE_LABELS = {
  1: 'Lost',
  2: 'Shaky',
  3: 'Getting there',
  4: 'Solid',
  5: 'Could teach it'
};

// Real radio inputs in a real fieldset. Buttons with aria-pressed would need
// arrow-key handling written by hand and would still announce as five unrelated
// controls; a radiogroup announces "1 of 5" and works with a screen reader for
// free.
function confidenceBlock(id) {
  const saved = BHDraftStore.get(confidenceKey(id)) || '';
  const options = [1, 2, 3, 4, 5].map(n => `
        <label class="confidence-option">
          <input type="radio" name="conf-${id}" value="${n}"${String(saved) === String(n) ? ' checked' : ''}
                 onchange="setConfidence('${id}', ${n})">
          <span aria-hidden="true">${n}</span>
          <span class="confidence-option-text">${BH_CONFIDENCE_LABELS[n]}</span>
        </label>`).join('');
  return `
      <fieldset class="confidence-row" id="${id}-confidence">
        <legend>How confident are you in this answer?</legend>
        <div class="confidence-scale">${options}</div>
        <button class="confidence-clear" type="button" onclick="clearConfidence('${id}')">Clear</button>
      </fieldset>`;
}

function setConfidence(id, value) {
  BHDraftStore.set(confidenceKey(id), String(value));
}

function clearConfidence(id) {
  BHDraftStore.set(confidenceKey(id), '');
  const group = byId(id + '-confidence');
  if (group) group.querySelectorAll('input[type="radio"]').forEach(r => { r.checked = false; });
}

// 1 to 5, or '' when the student did not answer. Anything else is discarded
// rather than trusted, so a stale or hand-edited key cannot reach the manifest.
function confidenceFor(id) {
  if (WORK_CONFIDENCE[id]) return WORK_CONFIDENCE[id];
  const raw = String(BHDraftStore.get(confidenceKey(id)) || '').trim();
  return /^[1-5]$/.test(raw) ? raw : '';
}

function loadDraft(id) {
  const t = byId(id);
  if (!t) return;
  const saved = BHDraftStore.get(draftKey(id));
  if (saved) t.value = saved;
}

function loadAllDrafts() {
  document.querySelectorAll('textarea.response-area').forEach(t => {
    if (t.id !== WORK_EXPORT_ID) loadDraft(t.id);
  });
}

// ── Autosave and Copy All My Work ─────────────────────────────────────────────
//
// Draft boxes are localStorage-only by design, which is right for scratch
// thinking. What was wrong is that persistence depended on the student pressing
// Save Draft, so closing a tab lost everything typed since the last press.
//
// Autosave removes that failure. Copy All My Work assembles the whole lesson
// into one block for the Canvas assignment, which is where graded work actually
// goes; nothing in this repository sends work to Canvas automatically.

// Module order for the assembled output, with where each prompt lives in L.
// Ids not listed here still get exported, appended alphabetically with a
// prettified label, so a topic with a bespoke textarea (7.9 and 8.9 have matrix
// boxes) never silently loses work.
//
// prompt() is wrapped in a try at call time: data shapes vary across 71 topics
// and a missing field must degrade to "no prompt", never throw and lose the work.
const WORK_ITEMS = [
  { id: 'map-check-response',      label: 'Module 01, Map & Geography Check',
    prompt: () => L.map.prompt },
  { id: 'first10-q1',              label: 'Module 02, First & 10, Question 1',
    prompt: () => L.first10.questions[0] },
  { id: 'first10-q2',              label: 'Module 02, First & 10, Question 2',
    prompt: () => L.first10.questions[1] },
  { id: 'first10-q3',              label: 'Module 02, First & 10, Question 3',
    prompt: () => L.first10.questions[2] },
  { id: 'skill-builder-response',  label: 'Module 05, AP Skill Builder',
    prompt: () => L.skillBuilder.prompt },
  { id: 'checkpoint-one-response', label: 'Module 06, Checkpoint 1',
    prompt: () => L.checkpoints[0].prompt },
  { id: 'evidence-response',       label: 'Module 07, Evidence Lab',
    prompt: () => L.evidenceLab.prompt },
  { id: 'primary-source-response', label: 'Module 08, Primary Source',
    prompt: () => L.primarySource.questions.join(' ') },
  { id: 'beintheroom-response',    label: 'Module 09, BeInTheRoom Reflection',
    // Only a real slot when this topic has a scenario to reflect on; a topic
    // still showing the "coming soon" placeholder has nothing to capture.
    prompt: () => (L.beInTheRoom && L.beInTheRoom.url) ? BEINTHEROOM_REFLECTION_PROMPT : '' },
  { id: 'checkpoint-two-response', label: 'Module 10, Checkpoint 2',
    prompt: () => L.checkpoints[1].prompt }
];

// Prompts seen at render time win over the table above. draftBlock and
// responseBlock record what they actually displayed, which covers bespoke
// textareas the table does not know about. WORK_PROMPTS is declared at the top
// of the file: draftBlock is defined above this point and a const declared here
// would be in its temporal dead zone if anything ever rendered during boot.
function rememberPrompt(id, prompt) {
  if (id && prompt) WORK_PROMPTS[id] = String(prompt);
}

// The First & 10 renders in an iframe, so its three answers cannot be read off
// this page: the modal is destroyed the moment another module opens. The reading
// writes them to behistorical-first10-<TOPIC_KEY> instead, with the question text
// attached, and this pulls them back in under the first10-q1..q3 ids WORK_ITEMS
// already declares. See scripts/add-first10-capture.js.
//
// The stored question is what the student actually read, so it wins over
// L.first10.questions, which can drift from the reading's wording.
// How many questions the reading actually asks. The payload has one entry per
// question box, answered or not, so its length is the reading's own count.
// Topic 1.7 asks five; every other topic asks three, which is why WORK_ITEMS
// lists three. Reading the payload rather than trusting the table keeps the
// denominator honest on that topic instead of reporting 11 of 9.
function first10QuestionCount() {
  const topicKey = ((L.meta && L.meta.topic) || '').replace('Topic ', '').trim();
  if (!topicKey) return 3;
  let saved;
  try { saved = JSON.parse(BHDraftStore.get(`behistorical-first10-${topicKey}`) || 'null'); }
  catch (e) { return 3; }
  return Array.isArray(saved) && saved.length ? saved.length : 3;
}

function injectFirst10Answers(stored) {
  const topicKey = ((L.meta && L.meta.topic) || '').replace('Topic ', '').trim();
  if (!topicKey) return;
  const raw = BHDraftStore.get(`behistorical-first10-${topicKey}`);
  if (!raw) return;
  let saved;
  try { saved = JSON.parse(raw); } catch (e) { return; }
  if (!Array.isArray(saved)) return;
  saved.forEach((item, i) => {
    if (!item) return;
    const id = `first10-q${i + 1}`;
    const answer = String(item.a || '').trim();
    if (!answer) return;
    stored[id] = answer;
    WORK_FIRST10_LABELS[id] = `Module 02, First & 10, Question ${i + 1}`;
    if (item.q) rememberPrompt(id, item.q);
    // Older payloads predate the confidence field and simply have no `c`.
    if (/^[1-5]$/.test(String(item.c || ''))) WORK_CONFIDENCE[id] = String(item.c);
  });
}

// BeInTheRoom's default prompt text for the manifest, used whenever the
// scenario page never captured a more specific one for this topic (v1
// scenarios use this fallback outright; v2 scenarios capture their own
// scenario.reflectionPrompt instead, which wins because rememberPrompt()
// records it in WORK_PROMPTS).
const BEINTHEROOM_REFLECTION_PROMPT = 'Step out of character and explain what this BeInTheRoom scenario reveals about the topic, using specific historical evidence.';

// BeInTheRoom always opens as its own page, a new tab via window.open, so
// nothing on this page can read its textarea directly. The scenario page
// writes its reflection to behistorical-beintheroom-<TOPIC_KEY> instead, with
// whatever prompt text it actually showed, and this pulls it back in under the
// beintheroom-response id WORK_ITEMS already declares. See
// assets/js/behistorical-beintheroom-capture.js.
function injectBeInTheRoomAnswer(stored) {
  const topicKey = workTopicId();
  if (!topicKey) return;
  const raw = BHDraftStore.get(`behistorical-beintheroom-${topicKey}`);
  if (!raw) return;
  let saved;
  try { saved = JSON.parse(raw); } catch (e) { return; }
  if (!saved) return;
  const answer = String(saved.a || '').trim();
  if (!answer) return;
  stored['beintheroom-response'] = answer;
  if (saved.q) rememberPrompt('beintheroom-response', saved.q);
}

function promptForId(id) {
  if (WORK_PROMPTS[id]) return WORK_PROMPTS[id];
  const item = WORK_ITEMS.find(w => w.id === id);
  if (!item) return '';
  try { return String(item.prompt() || '').trim(); } catch (e) { return ''; }
}

function prettyWorkLabel(id) {
  const words = id.replace(/-response$/, '').replace(/-/g, ' ').trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function escapeWorkHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Strips the emphasis markers the data files use, so a prompt written as
// "**Compare** the two" reads as plain text in the worksheet. Italics are
// stripped for the same reason: a stray asterisk in a Canvas paste is noise.
function plainPrompt(value) {
  return String(value || '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1').trim();
}

// Turns a response into paragraphs, so a student's line breaks survive the paste.
function paragraphsHtml(text) {
  return String(text).split(/\n{2,}/).map(block =>
    '<p>' + escapeWorkHtml(block.trim()).replace(/\n/g, '<br>') + '</p>'
  ).join('');
}

// ── Record manifest ───────────────────────────────────────────────────────────
//
// The paste is the only evidence that reaches the teacher, and until now a
// truncated, half-empty or hand-edited one was indistinguishable from a good
// one. A blank paste that still carries all nine prompt headings reads as
// "student wrote nothing", when the real cause is a wiped localStorage.
//
// The footer below makes that difference detectable. It declares how many
// capture slots the lesson defines, how many were actually gathered, and a hash
// per response, so scripts/parse-canvas-submissions.js can raise an exception
// instead of silently recording a blank.
//
// Format is deliberately dumb. Canvas's editor rewrites HTML, so nothing may
// depend on a tag, an attribute or a class surviving. Every record is one
// self-delimiting line, `#BHR|k=v|...|#`, which a regex recovers from the
// submission's text content even if every newline collapses.
const BH_RECORD_VERSION = 1;
const BH_RECORD_OPEN = '--- BEHISTORICAL RECORD, do not edit ---';
const BH_RECORD_CLOSE = '--- END BEHISTORICAL RECORD ---';

// Canvas rewrites line breaks on the way in and again on the way out, so a hash
// over raw text would not survive its own round trip. Whitespace is collapsed
// before hashing: the check is "is this the same writing", not "are the newlines
// byte-identical".
function bhNormalizeForHash(value) {
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
}

// FNV-1a, 32-bit. Small, dependency-free, and identical here and in the Node
// parser. This detects accident and drift, it is not a tamper-proof signature,
// and nothing downstream should treat it as one.
function bhHash(value) {
  const s = bhNormalizeForHash(value);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return ('0000000' + h.toString(16)).slice(-8);
}

function bhWordCount(value) {
  const s = bhNormalizeForHash(value);
  return s ? s.split(' ').length : 0;
}

// `|` and newlines are the record format's only reserved characters.
function bhField(value) {
  return String(value == null ? '' : value).replace(/[|\r\n]+/g, ' ').trim();
}

// Module ordinal off the front of a label, e.g. 'Module 07, Evidence Lab' -> '07'.
// A bespoke textarea the WORK_ITEMS table does not know about has no ordinal and
// reports 'xx', which the parser buckets rather than drops.
function bhOrdinal(label) {
  const m = String(label || '').match(/Module\s+(\d+)/i);
  return m ? m[1] : 'xx';
}

// How many capture slots this lesson actually defines, which is the denominator
// the parser needs. Not every topic carries every module, so this counts the
// WORK_ITEMS whose backing data resolves rather than assuming all nine.
function expectedCaptureCount() {
  let n = 0;
  WORK_ITEMS.forEach(item => {
    // Skip the First & 10 questions before anything else. They are counted once
    // below, from the reading's own question total, and a data file that also
    // happens to carry `first10.questions` would otherwise count them twice.
    if (/^first10-q\d$/.test(item.id)) return;
    let prompt = '';
    try { prompt = String(item.prompt() || '').trim(); } catch (e) { prompt = ''; }
    if (prompt) n++;
  });
  if (L.first10) n += first10QuestionCount();
  return n;
}

// One header line, then one line per gathered response.
function buildRecordManifest(work, topicId, isoStamp) {
  const rows = work.map(w => ({
    ord: bhOrdinal(w.label),
    slot: bhField(w.id || ''),
    label: bhField(w.label),
    words: bhWordCount(w.text),
    chars: bhNormalizeForHash(w.text).length,
    promptHash: bhHash(plainPrompt(w.prompt)),
    responseHash: bhHash(w.text),
    confidence: w.confidence || ''
  }));

  // Sum over the per-response hashes, so deleting a whole record line breaks it
  // too, not just editing the writing inside one.
  const sum = bhHash(rows.map(r => r.slot + ':' + r.responseHash).join('|'));

  const header = '#BHV|v=' + BH_RECORD_VERSION
    + '|topic=' + bhField(topicId)
    + '|copied=' + isoStamp
    + '|items=' + rows.length
    + '|expected=' + expectedCaptureCount()
    + '|sum=' + sum + '|#';

  const lines = rows.map(r => '#BHR|i=' + r.ord
    + '|slot=' + r.slot
    + '|lab=' + r.label
    + '|w=' + r.words
    + '|c=' + r.chars
    + '|ph=' + r.promptHash
    + '|rh=' + r.responseHash
    + '|cf=' + r.confidence + '|#');

  return [BH_RECORD_OPEN, header].concat(lines).concat([BH_RECORD_CLOSE]);
}

// Each line gets its own <p>. Canvas may drop the styling, and that is fine,
// nothing parses the presentation.
function recordManifestHtml(lines) {
  return '<hr>' + lines.map(line =>
    '<p style="font-family:monospace;font-size:.68rem;opacity:.6;margin:.15rem 0;">'
    + escapeWorkHtml(line) + '</p>'
  ).join('');
}

// Reads from localStorage, not the DOM, because openModule() replaces the modal
// body: a textarea for a module the student is not currently looking at does not
// exist on the page. Anything on screen right now overrides the stored copy.
function collectLessonWork() {
  const prefix = draftKey('');
  const stored = {};

  BHDraftStore.keys().forEach(key => {
    if (!key || key.indexOf(prefix) !== 0) return;
    const value = (BHDraftStore.get(key) || '').trim();
    if (value) stored[key.slice(prefix.length)] = value;
  });

  document.querySelectorAll('textarea.response-area').forEach(t => {
    if (!t.id || t.id === WORK_EXPORT_ID) return;
    const value = (t.value || '').trim();
    if (value) stored[t.id] = value;
  });

  injectFirst10Answers(stored);
  injectBeInTheRoomAnswer(stored);

  const ordered = [];
  const listed = new Set();
  WORK_ITEMS.forEach(item => {
    listed.add(item.id);
    if (stored[item.id]) ordered.push({ id: item.id, label: item.label, prompt: promptForId(item.id), text: stored[item.id], confidence: confidenceFor(item.id) });
  });
  Object.keys(stored).sort().forEach(id => {
    if (!listed.has(id)) ordered.push({ id: id, label: WORK_FIRST10_LABELS[id] || prettyWorkLabel(id), prompt: promptForId(id), text: stored[id], confidence: confidenceFor(id) });
  });
  return ordered;
}

// Topic ID on its own, e.g. '1.1'. L.meta.topic reads 'Topic 1.1'.
function workTopicId() {
  return String((L.meta && L.meta.topic) || '').replace(/^Topic\s+/i, '').trim();
}

// The heading a student sees at the top of the paste, and the teacher sees first
// in Canvas: topic number, then topic title.
function workHeading() {
  const id = workTopicId();
  const title = (L.meta && L.meta.title) || '';
  return {
    line1: 'AP World History' + (id ? ', Topic ' + id : ''),
    line2: title
  };
}

// Builds both clipboard flavours at once. text/html is what Canvas keeps the
// bolding from; text/plain is the fallback for anywhere that refuses HTML.
function buildWorkDocument() {
  const work = collectLessonWork();
  if (!work.length) return null;

  const head = workHeading();
  const now = new Date();
  const stamp = now.toLocaleString();
  const isoStamp = now.toISOString();
  const manifest = buildRecordManifest(work, workTopicId(), isoStamp);

  // Clipboard formatting is deliberately inline. Browser CSS does not reliably
  // survive a paste into Canvas or Word; these sizes are part of the submission
  // document itself so assignment structure, prompts and student writing remain
  // visually distinct after the browser is gone.
  const html = ['<div>',
    '<p style="font-size:10pt;font-weight:700;margin:0 0 4pt;">' + escapeWorkHtml(head.line1) + '</p>',
    head.line2 ? '<h1 style="font-size:24pt;line-height:1.15;margin:0 0 8pt;">' + escapeWorkHtml(head.line2) + '</h1>' : '',
    '<p style="font-size:10pt;margin:0 0 12pt;"><em>Student work, copied ' + escapeWorkHtml(stamp) + '</em></p>',
    '<hr>'
  ].join('');

  const body = work.map(w => {
    const prompt = plainPrompt(w.prompt);
    return '<h2 style="font-size:16pt;line-height:1.2;margin:16pt 0 6pt;">' + escapeWorkHtml(w.label) + '</h2>'
      + (prompt ? '<p style="font-size:11pt;line-height:1.4;margin:0 0 6pt;"><strong>Question: ' + escapeWorkHtml(prompt) + '</strong></p>' : '')
      + '<p style="font-size:10.5pt;margin:0 0 4pt;"><strong>My response:</strong></p>'
      + '<div style="font-size:11pt;line-height:1.45;margin:0 0 8pt;">' + paragraphsHtml(w.text) + '</div>';
  }).join('<hr>');

  // Plain text is intentionally unchanged. The Canvas parser grammar, labels,
  // hashes and manifest are a data contract independent of presentation.
  const plain = [head.line1.toUpperCase(), head.line2, 'Student work, copied ' + stamp, '']
    .filter(Boolean)
    .concat(work.map(w => {
      const prompt = plainPrompt(w.prompt);
      return [w.label.toUpperCase(),
              prompt ? 'Question: ' + prompt : '',
              'My response:',
              w.text, ''].filter(Boolean).join('\n');
    }))
    .concat(manifest)
    .join('\n');

  return {
    html: html + body + recordManifestHtml(manifest) + '</div>',
    plain: plain,
    count: work.length
  };
}

function gatherAllWork() {
  const out = byId(WORK_EXPORT_ID);
  const result = byId('all-work-result');
  if (!out) return null;

  const doc = buildWorkDocument();
  if (!doc) {
    out.innerHTML = '';
    out.dataset.plain = '';
    if (result) result.textContent = 'Nothing typed yet. Work through the module cards, then gather your work.';
    return null;
  }

  out.innerHTML = doc.html;
  out.dataset.plain = doc.plain;
  // A short gather is the failure this panel used to hide: a wiped localStorage
  // produces a well-formed paste with nothing in it, and the student has no way
  // to tell. Say the number out loud before they submit it.
  if (result) {
    const expected = expectedCaptureCount();
    const short = expected - doc.count;
    result.textContent = `Gathered ${doc.count} of ${expected} response${expected === 1 ? '' : 's'}.`
      + (short > 0
        ? ` ${short} ${short === 1 ? 'is' : 'are'} still empty. Check those module cards before you submit, then copy and paste this into Canvas.`
        : ' Copy this, then paste it into Canvas.');
  }
  return doc;
}

// Selecting the rendered block is the manual last resort when every clipboard
// API is blocked. The automatic rich fallback below selects a temporary HTML
// node first so execCommand copies formatting rather than flattened text.
function selectWorkOutput(out) {
  try {
    const range = document.createRange();
    range.selectNodeContents(out);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return true;
  } catch (e) { return false; }
}

function copyAllWork() {
  const out = byId(WORK_EXPORT_ID);
  const result = byId('all-work-result');
  if (!out) return;

  let doc = (out.innerHTML || '').trim() ? { html: out.innerHTML, plain: out.dataset.plain || '' } : null;
  if (!doc) doc = gatherAllWork();
  if (!doc) return;

  const say = m => { if (result) result.textContent = m; };

  // Preferred path: one clipboard write with both MIME flavors. Canvas and Word
  // take text/html; plain-text targets still receive the parser-safe transcript.
  if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
    try {
      const item = new ClipboardItem({
        'text/html': new Blob([doc.html], { type: 'text/html' }),
        'text/plain': new Blob([doc.plain], { type: 'text/plain' })
      });
      navigator.clipboard.write([item])
        .then(() => say('Copied with formatting. Paste it into the Canvas assignment.'))
        .catch(() => copyWorkRichFallback(doc.html, doc.plain, say));
    } catch (e) {
      copyWorkRichFallback(doc.html, doc.plain, say);
    }
  } else {
    copyWorkRichFallback(doc.html, doc.plain, say);
  }
}

// ClipboardItem can be unavailable or blocked on managed student devices. The
// next-best path is an off-screen rich DOM selection copied with execCommand.
// Only after that fails do we fall all the way back to writeText(plain).
function copyWorkRichFallback(html, plain, say) {
  const host = document.createElement('div');
  host.setAttribute('contenteditable', 'true');
  host.setAttribute('aria-hidden', 'true');
  host.style.position = 'fixed';
  host.style.left = '-10000px';
  host.style.top = '0';
  host.innerHTML = html;
  document.body.appendChild(host);

  const sel = window.getSelection();
  let copied = false;
  try {
    const range = document.createRange();
    range.selectNodeContents(host);
    sel.removeAllRanges();
    sel.addRange(range);
    copied = document.execCommand('copy');
  } catch (e) { copied = false; }
  try { sel.removeAllRanges(); } catch (e) { /* selection cleanup is best effort */ }
  host.remove();

  if (copied) {
    say('Copied with formatting. Paste it into the Canvas assignment.');
    return;
  }

  const out = byId(WORK_EXPORT_ID);
  if (out) selectWorkOutput(out);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(plain || (out ? out.textContent || '' : ''))
      .then(() => say('Copied as plain text. Paste it into the Canvas assignment.'))
      .catch(() => say('Copy is blocked on this device. Your work is selected, press Ctrl-C or Cmd-C.'));
  } else {
    say('Your work is selected, press Ctrl-C or Cmd-C to copy.');
  }
}

// One timer per textarea, so switching boxes quickly cannot cancel a pending
// save for the box just left.
document.addEventListener('input', function (event) {
  const t = event.target;
  if (!t || !t.id || t.id === WORK_EXPORT_ID) return;
  if (!t.classList || !t.classList.contains('response-area')) return;
  clearTimeout(t._draftTimer);
  t._draftTimer = setTimeout(function () {
    const saved = BHDraftStore.set(draftKey(t.id), t.value || '');
    const r = byId(t.id + '-result');
    if (r) r.textContent = saved ? 'Saved automatically in this browser on this device.' : BH_NO_STORAGE_NOTE;
  }, 600);
});

// The output is a div, not a textarea, so the student sees the same bolding the
// clipboard carries. A textarea can only ever show plain text.
function renderWorkExportPanel() {
  const grid = byId('module-grid');
  if (!grid || byId(WORK_EXPORT_ID)) return;
  grid.insertAdjacentHTML('afterend', `
    <article class="card work-export">
      <h3>Save Your Work</h3>
      <p>Your typing saves automatically, but only in this browser on this device. Before you leave class, gather everything here and paste it into the Canvas assignment. Canvas is where your graded work goes.</p>
      <div class="tool-row">
        <button class="btn" type="button" onclick="gatherAllWork()">Gather All My Work</button>
        <button class="btn secondary" type="button" onclick="copyAllWork()">Copy to Clipboard</button>
      </div>
      <div id="${WORK_EXPORT_ID}" class="work-output" tabindex="0"
           style="background:#F5F0E7;color:#1A1C1D;border:1px solid #C9A46A;border-radius:3px;padding:1rem 1.15rem;margin-top:.75rem;max-height:22rem;overflow-y:auto;font-family:'Libre Baskerville',Georgia,serif;font-size:.9rem;line-height:1.55;">
        <p style="opacity:.7;margin:0;">Click <strong>Gather All My Work</strong>, then Copy to Clipboard and paste into Canvas.</p>
      </div>
      <div id="all-work-result" class="check-result"></div>
    </article>`);
}

function selfCheck(id) {
  const t = byId(id);
  if (!t) return;
  const text = (t.value || '').toLowerCase();
  const terms = (t.dataset.terms || '').split('|').filter(Boolean);
  const found = terms.filter(term => text.includes(term.toLowerCase()));
  byId(id + '-result').textContent = `Self-check: ${text.split(/\s+/).filter(Boolean).length} words; evidence terms found: ${found.length ? found.join(', ') : 'none yet'}.`;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function openLightbox(i) { const img = L.images[i]; openImageUrl(evidenceImageUrl(i), `${img.title}, ${img.caption}`, `evidence-${String(i + 1).padStart(2, '0')}`); }
function openMapLightbox() { openImageUrl(mediaImageUrl(L.map.url, 'map'), `${L.map.title}, ${L.map.caption}`, 'map'); }
function openImageUrl(url, caption, fallbackId) {
  const image = byId('lightbox-img');
  const fallback = topicArtworkPath(fallbackId || 'map');
  image.onerror = function() { useMediaFallback(this, fallback); };
  image.dataset.fallback = fallback;
  image.src = sanitizeImageUrl(url) || fallback;
  image.alt = caption;
  byId('lightbox-caption').textContent = caption;
  byId('lightbox').classList.add('show');
  bhOpenModal('lightbox', 'lightbox-caption');
}
function closeLightbox() { bhCloseModal('lightbox'); }

// ── Keyboard escape and lecture deck keys ─────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && BHModalStack.length) {
    bhCloseModal(BHModalStack[BHModalStack.length - 1].el.id);
    return;
  }
  // Left/right walk the deck, but only while the lecture modal is the visible
  // dialog: inside the module modal those keys belong to the textareas.
  const lecture = byId('lecture-modal');
  if (!lecture || !lecture.classList.contains('show')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); lectureStep(1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); lectureStep(-1); }
});

// ── Save Your Work panel ──────────────────────────────────────────────────────
// Injected after the module grid so all 77 lesson shells get it without editing
// any of them. Runs last, once every function above is defined.

if (L) renderWorkExportPanel();

// ── Student response backup (off unless switched on) ──────────────────────────
// The engine, its states and its on-page controls are in the inlined sync block
// above. This is the part only the renderer can supply: which slots the lesson
// has (the same list Gather All My Work reads, so every save path is covered
// without being hooked), and where each slot lives on this device when the
// backup puts one back. mount() does nothing at all unless the backup is on, see
// scripts/lib/sync-config.js.
const BH_SYNC_SELF = document.currentScript && document.currentScript.src;

function syncApplyLocal(id, value) {
  const text = String(value.text || '');
  const conf = /^[1-5]$/.test(String(value.confidence || '')) ? String(value.confidence) : '';
  const topicKey = ((L.meta && L.meta.topic) || '').replace('Topic ', '').trim();
  const first10 = /^first10-q(\d+)$/.exec(id);

  if (first10) {
    // The reading rebuilds this whole payload from its boxes whenever a student
    // types, so a restored answer has to land in the same array the reading
    // reads. Holes are filled with blanks, which the reading ignores.
    const key = `behistorical-first10-${topicKey}`;
    let list = [];
    try { list = JSON.parse(BHDraftStore.get(key) || '[]'); } catch (e) { list = []; }
    if (!Array.isArray(list)) list = [];
    const at = Number(first10[1]) - 1;
    while (list.length <= at) list.push({ q: '', a: '', c: '' });
    const cur = list[at] || {};
    list[at] = { q: cur.q || '', a: text, c: conf };
    BHDraftStore.set(key, JSON.stringify(list));
    // A reading that is already open has its boxes loaded and would write the
    // old, empty ones back over this on the next keystroke.
    document.querySelectorAll('iframe').forEach(f => {
      if (/first-and-10/.test(f.getAttribute('src') || '')) f.src = f.src;
    });
    return;
  }

  if (id === 'beintheroom-response') {
    const key = `behistorical-beintheroom-${workTopicId()}`;
    let cur = {};
    try { cur = JSON.parse(BHDraftStore.get(key) || '{}') || {}; } catch (e) { cur = {}; }
    // `parts` would put the old words back in their separate boxes.
    BHDraftStore.set(key, JSON.stringify({ q: cur.q || '', a: text }));
    return;
  }

  BHDraftStore.set(draftKey(id), text);
  BHDraftStore.set(confidenceKey(id), conf);
  const box = byId(id);
  if (box) box.value = text;
  document.querySelectorAll(`input[name="conf-${id}"]`).forEach(r => { r.checked = (r.value === conf); });
}

if (L && window.BHSync) {
  window.BHSync.mount({
    topicKey: workTopicId(),
    slots: () => collectLessonWork().map(w => ({ id: w.id, text: w.text, confidence: w.confidence })),
    apply: syncApplyLocal,
    labelFor: id => { const w = WORK_ITEMS.find(i => i.id === id); return w ? w.label : id; },
    transportUrl: BH_SYNC_SELF ? new URL('behistorical-sync-transport.js', BH_SYNC_SELF).href : ''
  });
}
