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

  var API = {
    buildCoachPrompt: buildCoachPrompt,
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

  global.BHClassroom = { resolveMagicSchoolUrl: resolveMagicSchoolUrl };
})(window);
// ── END INLINED CLASSROOM CONFIG ────────────────────────────────────────────

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
  const segments = (L.lecture && L.lecture.segments) || [];
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
  byId('lecture-title').textContent = L.lecture.title || 'Lecture Cards';
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

// ── Lecture cards ─────────────────────────────────────────────────────────────

function renderLectureCards() {
  byId('main-lecture-grid').innerHTML = (L.lecture.segments || []).map((seg, i) => `
    <article class="card dark-card lecture-topic-card" role="button" tabindex="0"
      onclick="openLectureModal(${i})"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLectureModal(${i})}">
      <h3>${seg.title}</h3>
      <ul class="lecture-list">${seg.bullets.map(b => `<li>${md(b)}</li>`).join('')}</ul>
    </article>`).join('');
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
// It sits AFTER the lecture cards on purpose. The cards are the path everyone
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
// container used to leave a gap under the lecture cards on every topic without a
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
    { id: 'contentdelivery', label: 'Module 03', title: 'Content Delivery', desc: 'Jump down to the main lecture-card section.', img: moduleCardImg('contentdelivery', L.map.url), jump: '#lecture' },
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
  const total = (L.lecture.segments || []).length;
  const prev = byId('lecture-prev');
  const next = byId('lecture-next');
  const status = byId('lecture-nav-status');
  if (prev) prev.disabled = currentLectureIndex <= 0;
  if (next) next.disabled = currentLectureIndex >= total - 1;
  if (status) status.textContent = `Card ${currentLectureIndex + 1} of ${total}`;
}

function lectureStep(delta) {
  const n = currentLectureIndex + delta;
  if (n >= 0 && n < (L.lecture.segments || []).length) openLectureModal(n);
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
  const seg = L.lecture.segments[i];
  currentLectureIndex = i;
  byId('lecture-modal-title').textContent = seg.title;
  byId('lecture-modal-bullets').innerHTML = seg.bullets.map(b => `<li>${md(b)}</li>`).join('');
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
      <p>${s.intro}</p>
      <div class="skill-steps">
        ${(s.steps || []).map(step => `<div class="skill-step"><strong>${step.label}</strong>${step.text}</div>`).join('')}
      </div>
      <div class="question"><strong>Skill Practice</strong><br>${s.prompt}</div>
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

function renderEvidence() {
  return `
    <div class="component-note"><strong>${L.evidenceLab.title}</strong><br>${L.evidenceLab.task}</div>
    <div class="pop-grid">
      ${(L.images || []).map((img, i) => `
        <article class="card image-card pop-half">
          <img src="${evidenceImageUrl(i)}" alt="${img.title}" role="button" tabindex="0"
               aria-label="Enlarge image: ${img.title}"
               onclick="openLightbox(${i})"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(${i})}" ${mediaFallbackAttrs(`evidence-${String(i + 1).padStart(2, '0')}`)}>
          <div class="image-caption">
            <strong>${img.title}</strong><br>${img.caption}<br><em>${img.prompt}</em><br>
            <a class="source-link" href="${img.sourceUrl || img.url}" target="_blank" rel="noopener">Open source/image</a>
          </div>
        </article>`).join('')}
    </div>
    ${draftBlock('evidence-response', L.evidenceLab.prompt, 'Evidence Lab')}`;
}

// ── Primary Source ────────────────────────────────────────────────────────────

function renderPrimarySource() {
  return `
    <div class="pop-grid">
      <article class="card pop-two-third">
        <h3>${L.primarySource.title}</h3>
        <p>${L.primarySource.intro}</p>
        <blockquote>${L.primarySource.text}</blockquote>
      </article>
      <aside class="card pop-third">
        <h3>Discussion Questions</h3>
        ${L.primarySource.questions.map((q, i) => `<div class="question"><strong>${i + 1}</strong><br>${q}</div>`).join('')}
      </aside>
    </div>
    ${draftBlock('primary-source-response', L.primarySource.questions.join(' '), 'Primary Source')}`;
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

  return {
    get available() { return live; },
    get(key) {
      if (live) { try { return localStorage.getItem(key); } catch (e) { live = false; } }
      return Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : null;
    },
    set(key, value) {
      memory[key] = value;
      if (!live) return false;
      try { localStorage.setItem(key, value); return true; } catch (e) { live = false; return false; }
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

  const html = ['<div>',
    '<p><strong>' + escapeWorkHtml(head.line1) + '</strong>',
    head.line2 ? '<br><strong>' + escapeWorkHtml(head.line2) + '</strong>' : '',
    '</p>',
    '<p><em>Student work, copied ' + escapeWorkHtml(stamp) + '</em></p>',
    '<hr>'
  ].join('');

  const body = work.map(w => {
    const prompt = plainPrompt(w.prompt);
    return '<p><strong>' + escapeWorkHtml(w.label) + '</strong></p>'
      + (prompt ? '<p><strong>Question:</strong> <em>' + escapeWorkHtml(prompt) + '</em></p>' : '')
      + '<p><strong>My response:</strong></p>'
      + paragraphsHtml(w.text);
  }).join('<hr>');

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

// Selecting the rendered block first means that even when the clipboard API is
// blocked, a manual Ctrl-C copies the formatted version rather than nothing.
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
  selectWorkOutput(out);

  // Write both flavours so Canvas keeps the bold and plain-text targets still work.
  if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
    navigator.clipboard.write([new ClipboardItem({
      'text/html': new Blob([doc.html], { type: 'text/html' }),
      'text/plain': new Blob([doc.plain], { type: 'text/plain' })
    })])
      .then(() => say('Copied with formatting. Paste it into the Canvas assignment.'))
      .catch(() => copyWorkFallback(say));
  } else {
    copyWorkFallback(say);
  }
}

// execCommand is deprecated but still the only way to put formatted text on the
// clipboard when ClipboardItem is unavailable, and it copies the live selection,
// which is the rendered block, so the bolding survives.
function copyWorkFallback(say) {
  let copied = false;
  try { copied = document.execCommand('copy'); } catch (e) { copied = false; }
  if (copied) { say('Copied with formatting. Paste it into the Canvas assignment.'); return; }

  const out = byId(WORK_EXPORT_ID);
  if (navigator.clipboard && navigator.clipboard.writeText && out) {
    navigator.clipboard.writeText(out.dataset.plain || out.textContent || '')
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
