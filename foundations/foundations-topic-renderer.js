const byId=id=>document.getElementById(id);

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

// Bold first, then italics: once **strong** is consumed the only asterisks left
// are single ones, so [^*]+ cannot reach across a bold marker and swallow it.
const md=s=>String(s||'').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
function sanitizeImageUrl(url){
  const raw=String(url||'').trim();
  if(!raw)return '';
  if(raw.includes('commons.wikimedia.org/wiki/Special:FilePath/'))return raw;
  const thumbMatch=raw.match(/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^/]+\/[^/]+\/([^/?#]+)/i);
  if(thumbMatch){return `https://commons.wikimedia.org/wiki/Special:FilePath/${thumbMatch[1]}`;}
  const fileMatch=raw.match(/commons\.wikimedia\.org\/wiki\/File:([^?#]+)/i);
  if(fileMatch){return `https://commons.wikimedia.org/wiki/Special:FilePath/${fileMatch[1]}`;}
  return raw;
}
function bg(url){return `url('${sanitizeImageUrl(url)}')`;}
const T=window.FOUNDATION_TOPIC;
const WORK_EXPORT_ID='all-work-output';
// Prompt text as each card actually displayed it, keyed by the draft() slot.
const WORK_PROMPTS={};
function rememberPrompt(id,prompt){if(!id||!prompt)return;const slot=String(id).indexOf(`${T.id}-`)===0?String(id).slice(String(T.id).length+1):String(id);WORK_PROMPTS[slot]=String(prompt);}
// Data files use id 'foundations-N'. The short 'fN' form is what the First & 10
// answer-capture key and the Canvas record manifest's topic field both use, so a
// parsed response joins back to the right topic. See docs/CANVAS-CAPTURE.md.
const FOUNDATION_TOPIC_KEY=String(T.id||'').replace(/^foundations-(\d+)$/,'f$1');
function foundationArtworkPath(id){const match=String(T.id||'').match(/(\d+)$/);return `../assets/images/module-art/foundations/topic-f${match?match[1]:'1'}/${id}.svg`;}
function useFoundationFallback(image,fallback){if(!fallback||image.src.endsWith(fallback))return;image.onerror=null;image.src=fallback;image.classList.add('media-fallback');}
function foundationImageUrl(url,fallbackId){return sanitizeImageUrl(url)||foundationArtworkPath(fallbackId);}
function foundationFallbackAttrs(fallbackId){const fallback=foundationArtworkPath(fallbackId);return `data-fallback="${fallback}" onerror="useFoundationFallback(this,'${fallback}')"`;}
function foundationLectureImageUrl(i){const current=sanitizeImageUrl(T.lecture[i]&&T.lecture[i].image&&T.lecture[i].image.url),repeated=current&&T.lecture.slice(0,i).some(seg=>sanitizeImageUrl(seg.image&&seg.image.url)===current);return current&&!repeated?current:foundationArtworkPath(`lecture-${String(i+1).padStart(2,'0')}`);}
function foundationEvidenceImageUrl(i){const items=evidence.items||[],current=sanitizeImageUrl(items[i]&&items[i].url),repeated=current&&items.slice(0,i).some(item=>sanitizeImageUrl(item.url)===current);return current&&!repeated?current:foundationArtworkPath(`evidence-${String(i+1).padStart(2,'0')}`);}
const _tc=byId('topic-code');if(_tc)_tc.textContent=T.code;
const _tt=byId('topic-title');if(_tt)_tt.textContent=T.title;
const _ts=byId('topic-subtitle');if(_ts)_ts.textContent=T.subtitle;
const _cc=byId('command-copy');if(_cc)_cc.textContent=T.commandCopy;
byId('lesson-title').textContent=T.title;
byId('lesson-subtitle').textContent=T.subtitle;
document.title=`BeHistorical | ${T.code} ${T.title}`;
const first10=T.first10||T.reading;
const evidence=T.evidence||{title:'Evidence Lab',task:'Use visual and textual evidence from this topic to support a historical claim.',prompt:'What evidence from this topic best supports the main idea?',items:[{title:T.map.title,url:T.map.url,sourceUrl:T.map.sourceUrl,caption:T.map.caption,prompt:T.map.prompt}]};
const mapKey=T.map.key||[];
// Module 01 leads with one map, the one the questions and the map key are
// written against. `map.gallery` is the optional row of close-ups underneath it,
// for a topic whose lesson compares several states and where one world map
// cannot show any of them in detail. Like the video block and the deep reading,
// it introduces itself when entries exist and leaves no trace when they do not,
// so the topics without a gallery show no empty frame.
//
// An entry with no `url` is dropped rather than rendered against the map
// fallback artwork: a caption promising the Roman Empire over a generic map is
// worse than no card, and this is the shape a mistyped path takes.
const mapGallery=(Array.isArray(T.map.gallery)?T.map.gallery:[]).filter(m=>m&&m.url);
const aiCoach=T.aiCoach||{title:'AI Historical Coach',intro:'Use these questions to deepen your historical reasoning before submitting your response.',prompts:['What pattern do you notice?','How did geography influence this development?','What changed, and what stayed the same?']};
const beSurreal=T.beSurreal||null;
const beInTheRoom=T.beInTheRoom||null;
const blockPlan=T.blockPlan||[
  ['0-10','Launch Question','Students answer the essential question in one sentence, then revise after the lesson.'],
  ['10-25','Map & Context','Use the map module to build geographic or regional context.'],
  ['25-45','First & 10','Read the narrative foundation and mark one claim, one evidence detail, and one confusion.'],
  ['45-65','Lecture Cards','Use projection-friendly lecture cards for direct instruction and discussion.'],
  ['65-80','AP Skill Builder','Practice the day\'s AP thinking skill with a short written response.'],
  ['80-90','Checkpoint','Complete the exit ticket and confidence reflection.']
];
const _targets=byId('inline-targets')||byId('targets');if(_targets)_targets.innerHTML=`<div class="target-strip"><article class="foundation-card"><h3>Learning Targets</h3><ol class="target-list">${T.learningTargets.map(x=>`<li>${x}</li>`).join('')}</ol></article><article class="foundation-card"><h3>Success Criteria</h3><ol class="target-list">${T.successCriteria.map(x=>`<li>${x}</li>`).join('')}</ol></article></div>`;
const _roadmap=byId('block-plan-roadmap');if(_roadmap)_roadmap.innerHTML=`<div class="roadmap-step"><strong>1. Build Context</strong>Review the targets, examine the map, and read the First &amp; 10 narrative.</div><div class="roadmap-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main lecture-card section.</div><div class="roadmap-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>`;
const command=document.querySelector('#command .foundations-grid');
if(command){command.insertAdjacentHTML('afterend',`<article class="foundation-card block-plan-card"><h3>90-Minute Block Plan</h3><table class="mini-table"><tr><th>Time</th><th>Move</th><th>Purpose</th></tr>${blockPlan.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table></article>`);}
const modules=[
  {id:'map',label:'Module 01',title:'Map & Geography Check',desc:T.map.desc||'Connect geography to the historical development of this topic.',img:T.map.url,render:renderMap},
  {id:'first10',label:'Module 02',title:'First & 10 Reading',desc:'Narrative foundation for today\'s Foundations topic.',img:T.heroImage,render:renderFirst10},
  {id:'contentdelivery',label:'Module 03',title:'Content Delivery',desc:'Jump down to the main lecture-card section.',img:T.heroImage,jump:'#lecture'},
  {id:'besurreal',label:'Module 04',title:'BeSurreal',desc:(beSurreal&&beSurreal.desc)||'A memorable everyday-life detail from this historical moment.',img:T.heroImage,render:renderBeSurreal},
  {id:'skill',label:'Module 05',title:T.skill.title,desc:T.skill.desc,img:T.heroImage,render:renderSkill},
  {id:'checkpoint1',label:'Module 06',title:'Checkpoint 1',desc:T.checkpoint.title||'First checkpoint for this Foundations topic.',img:T.heroImage,render:renderCheckpoint1},
  {id:'evidence',label:'Module 07',title:'Evidence Lab',desc:evidence.task,img:(evidence.items&&evidence.items[0]?evidence.items[0].url:T.heroImage),render:renderEvidence},
  // Titled "Socrates AI Coach" until 2026-08-31, which it never was: it renders
  // three static prompts and a draft box, and has never had a button to him.
  // Socrates now appears at Checkpoint 2 and in BeInTheRoom only, so a module
  // carrying his name while offering none of him is the kind of quiet
  // disagreement between two surfaces this repo keeps paying for. The id stays
  // `coach` on purpose: it is in CANONICAL_IDS and it names this module's
  // capture slot, so changing it would move a storage key to relabel a card.
  {id:'coach',label:'Module 08',title:'Reasoning Prompts',desc:'Prompts that help students notice patterns and improve their own reasoning.',img:T.heroImage,render:renderCoach},
  {id:'beintheroom',label:'Module 09',title:'BeInTheRoom',...(beInTheRoom&&beInTheRoom.url?{desc:beInTheRoom.desc||'An immersive experience from this historical moment.',img:T.heroImage,link:beInTheRoom.url}:{desc:'An immersive experience, coming soon for this topic.',img:T.heroImage,render:renderBeInTheRoomPlaceholder})},
  {id:'checkpoint2',label:'Module 10',title:'Checkpoint 2',desc:'Synthesis checkpoint, bring it all together.',img:T.heroImage,render:renderCheckpoint2}
];
byId('module-grid').innerHTML=modules.map(m=>{const a=m.link?`window.open('${m.link}','_blank','noopener')`:m.jump?`jumpToSection('${m.jump}')`:`openModule('${m.id}')`;return `<article class="module-card" tabindex="0" role="button" onclick="${a}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${a}}" style="--module-img:url('${foundationArtworkPath(m.id)}')"><div class="module-label">${m.label}</div><h3>${m.title}</h3><p>${m.desc}</p></article>`;}).join('');
const _lectureGrid=byId('main-lecture-grid')||byId('lecture-grid');if(_lectureGrid)_lectureGrid.innerHTML=T.lecture.map((seg,i)=>`<article class="card dark-card lecture-topic-card" tabindex="0" role="button" onclick="openLecture(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLecture(${i})}"><h3>${seg.title}</h3><ul class="lecture-list">${seg.bullets.map(b=>`<li>${md(b)}</li>`).join('')}</ul></article>`).join('');
const _lectureModal=byId('lecture-modal');
if(_lectureModal&&!byId('lecture-prev')){_lectureModal.insertAdjacentHTML('beforeend',`<button class="lecture-arrow lecture-arrow-prev" id="lecture-prev" type="button" aria-label="Previous lecture card" onclick="lectureStep(-1)">&#8249;</button><button class="lecture-arrow lecture-arrow-next" id="lecture-next" type="button" aria-label="Next lecture card" onclick="lectureStep(1)">&#8250;</button><div class="lecture-nav-status" id="lecture-nav-status" aria-live="polite"></div>`);}
// Close stays put, returning the student to the card they opened. Back to
// Modules is the explicit way out of the deck, because "I am done lecturing" and
// "show me the next card" are different intentions. Injected rather than added to
// the six shells, so this renderer stays the only place that knows the shape.
const _lectureClose=_lectureModal&&_lectureModal.querySelector('.lecture-close');
if(_lectureClose&&!byId('lecture-to-modules')){
  const _row=document.createElement('div');
  _row.className='lecture-modal-actions';
  _lectureClose.parentNode.insertBefore(_row,_lectureClose);
  _row.insertAdjacentHTML('afterbegin',`<button class="btn secondary lecture-to-modules" id="lecture-to-modules" type="button" onclick="closeLectureToModules()">&#8593; Back to Modules</button>`);
  _row.appendChild(_lectureClose);
}
// The deep reading is the optional push-further layer, for a topic whose
// modules assume more background than its First & 10 has room to carry. Like
// the video block it introduces itself when one exists and leaves no trace when
// one does not, so the 5 topics without one show no empty frame.
//
// Injected rather than added to the six shells, so this renderer stays the only
// place that knows the shape, and guarded on its own id the way the lecture
// controls are, or a re-render doubles the card.
//
// It sits AFTER the lecture cards on purpose. The cards are the path everyone
// walks; this is depth on top of them. Given the IEP and 504 load in this room,
// a 1,200-words-per-empire reading placed above the cards reads as required
// work, and the wording below says optional twice for the same reason.
const _deep=T.deepReading||null;
const _lectureSection=byId('lecture');
if(_deep&&_deep.url&&_lectureSection&&_lectureGrid&&!byId('deep-reading-banner')){
  _lectureGrid.insertAdjacentHTML('afterend',`<article class="foundation-card deep-reading-banner" id="deep-reading-banner" style="margin-top:1.5rem"><div class="eyebrow">Optional, go deeper</div><h3>${_deep.title||'Deep Reading'}</h3><p>${_deep.desc||'A textbook-depth companion to this topic, for when you want more detail than the First &amp; 10 has room for.'}</p><a class="btn" href="${_deep.url}">Open the Deep Reading</a></article>`);
}
// Video clips are an optional resource, not part of the ten-module path and not
// part of the lecture deck. The block introduces itself when clips exist and
// disappears entirely when they do not, so a topic with none shows no gap.
const _videoGrid=byId('content-video-clips')||byId('video-grid');
const _videos=T.videos||[];
if(_videoGrid&&!_videos.length){_videoGrid.innerHTML='';_videoGrid.hidden=true;}
else if(_videoGrid){_videoGrid.hidden=false;_videoGrid.innerHTML=`<article class="foundation-card video-intro" style="grid-column:1/-1"><h3>Video Clips</h3><p>Optional reinforcement for this topic. Your teacher may play one of these in class, and you can watch them on your own any time you want another pass at the material. Watch for the guiding question under each clip rather than taking down everything.</p></article>`+_videos.map(v=>`<article class="video-card"><div class="video-thumb" ${v.youtubeId?`style="background-image:linear-gradient(rgba(26,28,29,.25),rgba(26,28,29,.55)),url('https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg');background-size:cover;background-position:center"`:''}><span>Video Clip</span></div><h3>${v.title}</h3><p>${v.prompt}</p><a class="btn" href="${v.url}" target="_blank" rel="noopener">Open Video</a></article>`).join('');}
function jumpToSection(selector){const el=document.querySelector(selector);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
// ── Modal focus management ────────────────────────────────────────────────────
//
// Mirrors assets/js/behistorical-topic-renderer-v1.js. Adding .show made a
// dialog visible and did nothing else, so a keyboard or screen-reader user was
// left behind the overlay: the reading cursor stayed on the module card, Tab
// walked the page underneath, and closing dropped focus at the top of the
// document. The modals hold the map, the reading and the evidence, which is most
// of the lesson. A stack because a dialog can open above another one.
const BHModalStack=[];
const BH_FOCUSABLE='a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),iframe,[tabindex]:not([tabindex="-1"])';
// getClientRects() is the cheap "is it actually rendered" test, so a control in
// a hidden branch is not a tab stop.
function bhFocusable(root){return Array.prototype.slice.call(root.querySelectorAll(BH_FOCUSABLE)).filter(el=>el.getClientRects().length>0);}
function bhTrapTab(event){
  if(event.key!=='Tab'||!BHModalStack.length)return;
  const top=BHModalStack[BHModalStack.length-1].el,items=bhFocusable(top);
  if(!items.length){event.preventDefault();top.focus();return;}
  const first=items[0],last=items[items.length-1],active=document.activeElement,outside=!top.contains(active);
  if(event.shiftKey&&(active===first||outside)){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&(active===last||outside)){event.preventDefault();first.focus();}
}
function bhOpenModal(modalId,labelId){
  const el=byId(modalId);
  if(!el)return;
  // Re-opening a dialog that is already open must not push a second entry, and
  // must keep the original launcher. The lecture modal does exactly this: the
  // prev/next arrows swap the card in place by calling openLecture again. A
  // five-card deck used to push five entries, one Close popped one, and the
  // stack stayed non-empty, so the scroll lock never lifted and the student was
  // stranded on the lecture section until they reloaded the page.
  if(!BHModalStack.some(item=>item.el===el))BHModalStack.push({el:el,launcher:document.activeElement});
  el.setAttribute('aria-modal','true');
  if(labelId&&byId(labelId))el.setAttribute('aria-labelledby',labelId);
  if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','-1');
  if(BHModalStack.length===1){document.addEventListener('keydown',bhTrapTab,true);document.body.style.overflow='hidden';}
  // Focus the dialog, not its first control, so the label is announced before a
  // button. A tick late because the body was just replaced.
  setTimeout(()=>{if(el.classList.contains('show'))el.focus();},0);
}
function bhCloseModal(modalId){
  const el=byId(modalId);
  if(!el)return;
  let entry=null;
  for(let i=BHModalStack.length-1;i>=0;i--){
    const item=BHModalStack[i];
    BHModalStack.splice(i,1);
    item.el.classList.remove('show');
    item.el.removeAttribute('aria-modal');
    if(item.el===el){entry=item;break;}
  }
  // Purge any duplicate entry for this element, then release the lock whenever
  // nothing on the stack is actually visible. Keying the release off "no visible
  // dialog" rather than "empty stack" is what makes a stranded student
  // impossible: a stale entry can no longer hold the page hostage.
  for(let i=BHModalStack.length-1;i>=0;i--){if(BHModalStack[i].el===el)BHModalStack.splice(i,1);}
  if(!BHModalStack.some(item=>item.el.classList.contains('show'))){BHModalStack.length=0;document.removeEventListener('keydown',bhTrapTab,true);document.body.style.overflow='';}
  // Back to the card that opened it, not the top of the document.
  const launcher=entry&&entry.launcher;
  if(launcher&&launcher.focus&&launcher.getClientRects().length)launcher.focus();
}
function openModule(id){const m=modules.find(x=>x.id===id);if(!m||m.jump||m.link)return;byId('pop-eyebrow').textContent=m.label;byId('pop-title').textContent=m.title;byId('pop-body').innerHTML=m.render();byId('pop-modal').classList.add('show');loadDrafts();bhOpenModal('pop-modal','pop-title');}
function closeModule(){bhCloseModal('pop-modal');}
let currentLectureIndex=0;
function openLecture(i){currentLectureIndex=i;const seg=T.lecture[i],image=byId('lecture-modal-img'),fallbackId=`lecture-${String(i+1).padStart(2,'0')}`,fallback=foundationArtworkPath(fallbackId),source=seg.image&&(seg.image.sourceUrl||seg.image.url);byId('lecture-modal-title').textContent=seg.title;byId('lecture-modal-bullets').innerHTML=seg.bullets.map(b=>`<li>${md(b)}</li>`).join('');image.onerror=function(){useFoundationFallback(this,fallback)};image.dataset.fallback=fallback;image.src=foundationLectureImageUrl(i);image.alt=(seg.image&&seg.image.title)||`${seg.title} visual`;byId('lecture-modal-caption').innerHTML=`<strong>${(seg.image&&seg.image.title)||seg.title}</strong><br>${(seg.image&&seg.image.caption)||'Topic-specific instructional artwork.'}${source?`<br><a class="source-link" href="${source}" target="_blank" rel="noopener">Open image source</a>`:''}`;updateLectureNav();byId('lecture-modal').classList.add('show');bhOpenModal('lecture-modal','lecture-modal-title');}
function updateLectureNav(){const total=T.lecture.length,prev=byId('lecture-prev'),next=byId('lecture-next'),status=byId('lecture-nav-status');if(prev)prev.disabled=currentLectureIndex<=0;if(next)next.disabled=currentLectureIndex>=total-1;if(status)status.textContent=`Card ${currentLectureIndex+1} of ${total}`;}
function lectureStep(delta){const n=currentLectureIndex+delta;if(n>=0&&n<T.lecture.length)openLecture(n);}
function closeLectureModal(){bhCloseModal('lecture-modal');}
// Back to the module grid, with focus on the first card so a keyboard user lands
// where the page just scrolled. preventScroll because the smooth scroll to the
// section heading below is the one that should be visible.
function closeLectureToModules(){closeLectureModal();const first=document.querySelector('#module-grid .module-card');if(first)first.focus({preventScroll:true});jumpToSection('#modules');}
// ── Lightbox ──────────────────────────────────────────────────────────────────
//
// Every Foundations shell already carried the #lightbox markup, including a
// Close button calling closeLightbox(), but this renderer never defined it and
// no image opened it. So the element was dead and that Close button would have
// thrown. Mirrors the unit renderer, including the focus handling: the lightbox
// opens from inside the module modal, which is what BHModalStack is for.
function openImageUrl(url,caption,fallbackId){
  const image=byId('lightbox-img');
  if(!image)return;
  const fallback=foundationArtworkPath(fallbackId||'map');
  image.onerror=function(){useFoundationFallback(this,fallback);};
  image.dataset.fallback=fallback;
  image.src=sanitizeImageUrl(url)||fallback;
  image.alt=caption;
  byId('lightbox-caption').textContent=caption;
  byId('lightbox').classList.add('show');
  bhOpenModal('lightbox','lightbox-caption');
}
function openMapLightbox(){openImageUrl(foundationImageUrl(T.map.url,'map'),`${T.map.title}, ${T.map.caption}`,'map');}
// The close-ups are where the small place names live, and a student reads those
// by enlarging the picture and zooming, so every gallery entry opens the
// lightbox exactly the way the lead map and the Evidence Lab pictures do.
function openMapGalleryLightbox(i){
  const item=mapGallery[i];
  if(!item)return;
  openImageUrl(foundationImageUrl(item.url,'map'),`${item.title}, ${item.caption}`,'map');
}
function openEvidenceLightbox(i){
  const item=(evidence.items||[])[i];
  if(!item)return;
  openImageUrl(foundationEvidenceImageUrl(i),`${item.title}, ${item.caption}`,`evidence-${String(i+1).padStart(2,'0')}`);
}
function closeLightbox(){bhCloseModal('lightbox');}
function renderMap(){
  const lead=`<figure class="foundation-card map-figure pop-half"><img src="${foundationImageUrl(T.map.url,'map')}" alt="${T.map.title}" role="button" tabindex="0" aria-label="Enlarge map: ${T.map.title}" onclick="openMapLightbox()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openMapLightbox()}" ${foundationFallbackAttrs('map')}><figcaption><strong>${T.map.title}</strong><br>${T.map.caption}<br><a class="source-link" href="${T.map.sourceUrl}" target="_blank" rel="noopener">Open map source</a></figcaption></figure><article class="foundation-card pop-half"><h3>Map Questions</h3><ul>${T.map.questions.map(q=>`<li>${q}</li>`).join('')}</ul>${mapKey.length?`<div class="map-key"><h4>Map Key</h4>${mapKey.map(k=>`<div class="map-key-item"><strong>${k.label}</strong><span>${k.detail}</span></div>`).join('')}</div>`:''}${draft(`${T.id}-map`,T.map.prompt)}</article>`;
  // The gallery sits after the questions and the draft box on purpose. The lead
  // map plus the questions is the work; these are the reference a student comes
  // back to while answering, and putting them above the prompt would read as
  // five maps to get through before writing anything.
  const gallery=mapGallery.length?`<article class="foundation-card" style="grid-column:1/-1"><h3>${T.map.galleryTitle||'Close-Ups: One State at a Time'}</h3><p>${T.map.galleryIntro||'The map above puts every state on one frame, which is what the questions ask about. These zoom in on one at a time. Click any map to enlarge it, and zoom in to read the small place names.'}</p></article>`+mapGallery.map((m,i)=>`<figure class="foundation-card map-figure pop-half"><img src="${foundationImageUrl(m.url,'map')}" alt="${m.title}" role="button" tabindex="0" aria-label="Enlarge map: ${m.title}" onclick="openMapGalleryLightbox(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openMapGalleryLightbox(${i})}" ${foundationFallbackAttrs('map')}><figcaption><strong>${m.title}</strong><br>${m.caption}${m.prompt?`<br><em>${m.prompt}</em>`:''}${m.sourceUrl?`<br><a class="source-link" href="${m.sourceUrl}" target="_blank" rel="noopener">Open map source</a>`:''}</figcaption></figure>`).join(''):'';
  return `<div class="pop-grid">${lead}${gallery}</div>`;
}
function renderFirst10(){if(first10.embedUrl){return `<div style="margin:-1.5rem"><iframe src="${first10.embedUrl}" title="First &amp; 10 Reading" style="width:100%;min-height:85vh;border:0;display:block;" loading="lazy"></iframe></div>`;}return `<article class="foundation-card reading"><h3>${first10.title}</h3>${first10.paragraphs.map(p=>`<p>${p}</p>`).join('')}</article><article class="foundation-card"><h3>First &amp; 10 Response</h3><p>${first10.prompt}</p></article>${draft(`${T.id}-first10`,first10.prompt)}`}
function renderBeSurreal(){if(!beSurreal)return `<article class="foundation-card"><h3>BeSurreal</h3><p>This module is coming soon for ${T.title}.</p></article>`;return `<article class="foundation-card besurreal-card"><h3>${beSurreal.title}</h3><p>${beSurreal.intro}</p><blockquote class="besurreal-detail"><p>${beSurreal.detail}</p></blockquote></article>${draft(`${T.id}-besurreal`,beSurreal.prompt)}`}
function renderEvidence(){return `<article class="foundation-card"><h3>${evidence.title}</h3><p>${evidence.task}</p></article><div class="pop-grid">${evidence.items.map((item,i)=>{const fallbackId=`evidence-${String(i+1).padStart(2,'0')}`;return `<article class="foundation-card map-figure pop-half"><img src="${foundationEvidenceImageUrl(i)}" alt="${item.title}" role="button" tabindex="0" aria-label="Enlarge image: ${item.title}" onclick="openEvidenceLightbox(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openEvidenceLightbox(${i})}" ${foundationFallbackAttrs(fallbackId)}><figcaption><strong>${item.title}</strong><br>${item.caption}<br><em>${item.prompt}</em><br><a class="source-link" href="${item.sourceUrl||item.url}" target="_blank" rel="noopener">Open source</a></figcaption></article>`}).join('')}</div>${draft(`${T.id}-evidence`,evidence.prompt)}`}
function renderCoach(){return `<article class="foundation-card"><h3>${aiCoach.title}</h3><p>${aiCoach.intro}</p><div class="coach-list">${aiCoach.prompts.map((p,i)=>`<div class="coach-prompt"><strong>Prompt ${i+1}</strong><span>${p}</span></div>`).join('')}</div></article>${draft(`${T.id}-coach`,aiCoach.responsePrompt||'Use one AI coach prompt to improve your historical explanation.')}`}
function renderSkill(){return `<article class="foundation-card"><h3>${T.skill.title}</h3><p>${T.skill.intro}</p><table class="mini-table"><tr><th>Step</th><th>What to Do</th></tr>${T.skill.steps.map((s,i)=>`<tr><td>${i+1}</td><td>${s}</td></tr>`).join('')}</table></article>${draft(`${T.id}-skill`,T.skill.prompt)}`}
function renderCheckpoint1(){return `<article class="dark-callout"><h3>${T.checkpoint.title}</h3><p>${T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Exit Ticket</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Strong Response Checklist</h3><ul>${T.checkpoint.checklist.map(x=>`<li>${x}</li>`).join('')}</ul></article>${draft(`${T.id}-checkpoint`,T.checkpoint.prompt)}${independentCheckpointNote()}`}
function renderCheckpoint2(){return `<article class="dark-callout"><h3>Synthesis Checkpoint</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Build Your Synthesis</h3><p>Use evidence from at least two modules to answer the synthesis prompt above. Connect the themes you studied today to the bigger picture of AP World History.</p></article>${draft(`${T.id}-checkpoint2`,T.exitTicket||T.checkpoint.prompt)}${coachBridge(`${T.id}-checkpoint2`,'Checkpoint 2')}`}

// ── The AI Coach bridge, Foundations side ────────────────────────────────────
//
// Foundations had no way to reach Socrates from either checkpoint. Both
// checkpoints rendered a draft box and stopped, so on these six topics two of
// the four assignments that are supposed to reach the coach were dead ends,
// while Module 08 was titled "Socrates AI Coach" and offered three static
// prompts with no button.
//
// Deliberately the same markup and the same shared builder as the unit
// renderer's bridge, so the two cannot drift into giving Socrates different
// context for the same kind of assignment. The bridge classes live in
// behistorical-topic-template-v1.css, which the Foundations pages already load.
const DEFAULT_COACH_URL='https://student.magicschool.ai/s/login?joinCode=czwb9Q';
const COACH_MS={};

function coachMagicSchoolUrl(){
  return (typeof window!=='undefined'&&window.BHClassroom)
    ? window.BHClassroom.resolveMagicSchoolUrl(DEFAULT_COACH_URL)
    : DEFAULT_COACH_URL;
}

// Checkpoint 1 is deliberately independent as of 2026-08-31, the same as the
// unit renderer. It is the lesson's formative diagnostic, and coaching it before
// it is captured measures the coaching rather than the student. The card says so
// rather than simply losing its button, which would read as something broken.
function independentCheckpointNote(){
  return `<div class="component-note">
      <strong>Do this one on your own.</strong> Checkpoint 1 is where you and your
      teacher find out what has landed so far, so there is no AI coaching here.
      Write what you actually think, including the parts you are unsure about.
      Socrates is waiting at Checkpoint 2, once you have more to work with.
    </div>`;
}

function coachBridge(id,mode){
  COACH_MS[id]={mode};
  const COACH_URL=coachMagicSchoolUrl();
  return `<div class="magicschool-bridge">
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
        <button class="btn" type="button" onclick="generateFoundationsCoachPrompt('${id}')">Build My AI Coach Prompt</button>
        <button class="btn secondary" type="button" onclick="copyFoundationsCoachPrompt('${id}')">Copy Prompt</button>
        <a class="btn secondary" href="${COACH_URL}" target="_blank" rel="noopener">Open AI Coach</a>
      </div>
      <div id="${id}-ms-result" class="check-result"></div>
      <p class="bridge-return"><strong>Your revised answer in the box above is what goes to Canvas.</strong> Nothing from the AI Coach conversation is collected, so improve your own writing before you gather your work.</p>
    </div>`;
}

// Foundations topic ids are `foundations-3`; the course spine and the paste
// contract call the same topic F3. Socrates is told F3, because that is what his
// attachment is keyed on.
function foundationsTopicId(){
  const m=String(T.id||'').match(/(\d+)/);
  return m?`F${m[1]}`:String(T.id||'');
}

function generateFoundationsCoachPrompt(id){
  const previewEl=byId(id+'-ms-preview'),resultEl=byId(id+'-ms-result'),responseEl=byId(id);
  const mode=(COACH_MS[id]||{}).mode||'Checkpoint';
  const responseText=(responseEl&&responseEl.value&&responseEl.value.trim())?responseEl.value.trim():'';
  if(!responseText){
    if(resultEl)resultEl.textContent='Draft your response above before building your prompt.';
    return;
  }
  // Checkpoint 2 is the exit ticket and has no checklist of its own, so it sends
  // the topic's checklist rather than nothing: it is still what a strong answer
  // has to do. Foundations carries no College Board key concepts, so kcs is empty
  // and the builder simply omits that line.
  const prompt=BH_COACH.buildCoachPrompt({
    topic:foundationsTopicId(),
    module:mode,
    title:T.title,
    span:BH_COACH.unitPeriod('F'),
    focus:T.subtitle,
    targets:T.learningTargets||[],
    criteria:T.successCriteria||[],
    kcs:[],
    terms:T.terms||[],
    checklist:(T.checkpoint&&T.checkpoint.checklist)||[],
    assigned:mode==='Checkpoint 2'?(T.exitTicket||T.checkpoint.prompt):T.checkpoint.prompt,
    draft:responseText
  });
  if(previewEl)previewEl.textContent=prompt;
  if(resultEl)resultEl.textContent='Prompt ready, click Copy Prompt, then paste it into the BeHistorical AI Coach.';
}

function copyFoundationsCoachPrompt(id){
  const previewEl=byId(id+'-ms-preview'),resultEl=byId(id+'-ms-result');
  if(!previewEl||previewEl.textContent.indexOf('will appear here')>-1){
    generateFoundationsCoachPrompt(id);
    return;
  }
  navigator.clipboard.writeText(previewEl.textContent)
    .then(()=>{if(resultEl)resultEl.textContent='Prompt copied, paste it into the BeHistorical AI Coach.';})
    .catch(()=>{if(resultEl)resultEl.textContent='Copy failed. Select and copy the prompt text above manually.';});
}
function renderBeInTheRoomPlaceholder(){return `<article class="foundation-card"><h3>BeInTheRoom</h3><p>This immersive experience for ${T.title} is coming soon.</p></article>`;}
// ── Confidence ────────────────────────────────────────────────────────────────
//
// Mirrors the unit renderer. A separate key prefix, not a suffix on the draft
// key, because collectLessonWork() sweeps everything under
// `foundations-topic-<id>-` and would export a confidence value as if it were
// the student's writing. Optional by design: a blank is a real answer.
const BH_CONFIDENCE_LABELS={1:'Lost',2:'Shaky',3:'Getting there',4:'Solid',5:'Could teach it'};
const WORK_CONFIDENCE={};
function confidenceKey(id){return `foundations-conf-${id}`;}
// Real radios in a fieldset: a radiogroup announces "1 of 5" and arrow keys work
// without a keyboard handler of our own.
function confidenceBlock(id){
  const saved=BHDraftStore.get(confidenceKey(id))||'';
  const options=[1,2,3,4,5].map(n=>`<label class="confidence-option"><input type="radio" name="conf-${id}" value="${n}"${String(saved)===String(n)?' checked':''} onchange="setConfidence('${id}',${n})"><span aria-hidden="true">${n}</span><span class="confidence-option-text">${BH_CONFIDENCE_LABELS[n]}</span></label>`).join('');
  return `<fieldset class="confidence-row" id="${id}-confidence"><legend>How confident are you in this answer?</legend><div class="confidence-scale">${options}</div><button class="confidence-clear" type="button" onclick="clearConfidence('${id}')">Clear</button></fieldset>`;
}
function setConfidence(id,value){BHDraftStore.set(confidenceKey(id),String(value));}
function clearConfidence(id){
  BHDraftStore.set(confidenceKey(id),'');
  const group=byId(id+'-confidence');
  if(group)group.querySelectorAll('input[type="radio"]').forEach(r=>{r.checked=false;});
}
// The slot key, not the full textarea id: collectLessonWork strips the topic
// prefix before it builds the manifest, so the two must agree.
function confidenceForSlot(slot){
  if(WORK_CONFIDENCE[slot])return WORK_CONFIDENCE[slot];
  const raw=String(BHDraftStore.get(confidenceKey(`${T.id}-${slot}`))||'').trim();
  return /^[1-5]$/.test(raw)?raw:'';
}
// draft(id, prompt)
// The response box and nothing else. Typing autosaves, and Gather All My Work
// carries every box to Canvas in one action, so a per-box Save Draft button
// implied work was only kept when clicked and a per-box Copy Response button
// was a slower path to a worse result.
function draft(id,prompt){rememberPrompt(id,prompt);return `<div class="prompt-box"><h3>Draft Your Thinking</h3><p>${prompt}</p><textarea class="response-area" id="${id}" placeholder="Type your response here..."></textarea>${confidenceBlock(id)}<div id="${id}-result" class="check-result"></div></div>`}
// Draft storage that cannot throw.
//
// Touching localStorage raises a SecurityError, not a null, when the browser
// refuses it: a sandboxed frame (which is one of the ways Canvas serves
// uploaded HTML), Safari private browsing, or a device policy that disables
// site data. Unguarded, that one throw took out autosave, took out loadDrafts
// and therefore openModule for any module with a textarea, and took out Copy
// All My Work, with nothing on screen to tell the student their typing was not
// being kept.
//
// Every write also lands in a memory copy, so a lesson still gathers a full
// Copy All My Work within the session even when nothing can be persisted. What
// is lost in that case is surviving a reload, and the student is told so
// plainly rather than finding out afterwards.
const BHDraftStore=(function(){
  const memory={};
  let live=false;
  try{const probe='__bh_probe__';localStorage.setItem(probe,'1');localStorage.removeItem(probe);live=true;}catch(e){live=false;}
  return {
    get available(){return live;},
    get(key){
      if(live){try{return localStorage.getItem(key);}catch(e){live=false;}}
      return Object.prototype.hasOwnProperty.call(memory,key)?memory[key]:null;
    },
    set(key,value){
      memory[key]=value;
      if(!live)return false;
      try{localStorage.setItem(key,value);return true;}catch(e){live=false;return false;}
    },
    keys(){
      if(live){
        try{const out=[];for(let i=0;i<localStorage.length;i++)out.push(localStorage.key(i));return out;}catch(e){live=false;}
      }
      return Object.keys(memory);
    }
  };
})();
// Shown wherever a save would otherwise claim success it cannot deliver.
const BH_NO_STORAGE_NOTE='This browser will not let the page save drafts. Your typing stays until you close the tab, so gather and copy your work into Canvas before you leave.';
function loadDrafts(){document.querySelectorAll('textarea.response-area').forEach(t=>{if(t.id===WORK_EXPORT_ID)return;const saved=BHDraftStore.get(`foundations-topic-${t.id}`);if(saved)t.value=saved})}

// ── Autosave and Copy All My Work ─────────────────────────────────────────────
//
// Mirrors the same block in assets/js/behistorical-topic-renderer-v1.js. The two
// renderers cannot share it without adding a script tag to every shell, and the
// localStorage key schemes differ: unit lessons use
// behistorical-draft-{topic}-{id}, Foundations uses foundations-topic-{id}.
//
// Draft boxes are localStorage-only by design. Autosave removes the old failure
// where closing a tab lost everything typed since the last Save Draft press.
// Copy All My Work assembles the lesson for the Canvas assignment, which is
// where graded work goes; nothing here sends work to Canvas automatically.

// Module order for the assembled output, keyed by the draft() id suffix, with
// where each prompt lives. Anything not listed still exports, appended with a
// prettified label. prompt() is wrapped in a try: a missing field must degrade
// to "no prompt", never throw and lose the student's work.
const FOUNDATION_WORK_ITEMS=[
  {slot:'map',        label:'Module 01, Map & Geography Check', prompt:()=>T.map.prompt},
  // The First & 10's three check questions. Their text is stored with the
  // answers by the reading itself, so promptForSlot resolves them from
  // WORK_PROMPTS and these fallbacks stay empty.
  {slot:'first10-q1', label:'Module 02, First & 10, Question 1',prompt:()=>''},
  {slot:'first10-q2', label:'Module 02, First & 10, Question 2',prompt:()=>''},
  {slot:'first10-q3', label:'Module 02, First & 10, Question 3',prompt:()=>''},
  {slot:'first10',    label:'Module 02, First & 10 Reading',    prompt:()=>first10.prompt},
  {slot:'besurreal',  label:'Module 04, BeSurreal',             prompt:()=>beSurreal.prompt},
  {slot:'skill',      label:'Module 05, AP Skill Builder',      prompt:()=>T.skill.prompt},
  {slot:'checkpoint', label:'Module 06, Checkpoint 1',          prompt:()=>T.checkpoint.prompt},
  {slot:'evidence',   label:'Module 07, Evidence Lab',          prompt:()=>evidence.prompt},
  {slot:'coach',      label:'Module 08, Reasoning Prompts',    prompt:()=>aiCoach.responsePrompt},
  // Only a real slot once a Foundations topic has a scenario to reflect on;
  // every Foundations topic currently shows the "coming soon" placeholder.
  {slot:'beintheroom-response',label:'Module 09, BeInTheRoom Reflection',prompt:()=>(beInTheRoom&&beInTheRoom.url)?BEINTHEROOM_REFLECTION_PROMPT:''},
  {slot:'checkpoint2',label:'Module 10, Checkpoint 2',          prompt:()=>T.exitTicket||T.checkpoint.prompt}
];

// BeInTheRoom always opens as its own page, so nothing here can read its
// textarea directly. See assets/js/behistorical-beintheroom-capture.js and
// injectBeInTheRoomAnswer() in assets/js/behistorical-topic-renderer-v1.js,
// which this mirrors.
const BEINTHEROOM_REFLECTION_PROMPT='Step out of character and explain what this BeInTheRoom scenario reveals about the topic, using specific historical evidence.';
function injectBeInTheRoomAnswer(stored){
  if(!FOUNDATION_TOPIC_KEY)return;
  const raw=BHDraftStore.get(`behistorical-beintheroom-${FOUNDATION_TOPIC_KEY}`);
  if(!raw)return;
  let saved;
  try{saved=JSON.parse(raw);}catch(e){return;}
  if(!saved)return;
  const answer=String(saved.a||'').trim();
  if(!answer)return;
  stored['beintheroom-response']=answer;
  if(saved.q)WORK_PROMPTS['beintheroom-response']=String(saved.q);
}

// The First & 10 renders in an iframe, so its three answers cannot be read off
// this page: the modal is gone the moment another module opens. The reading
// writes them to behistorical-first10-<TOPIC_KEY> instead, with the question
// text attached, and this pulls them back in. See scripts/add-first10-capture.js.
function injectFirst10Answers(stored){
  if(!FOUNDATION_TOPIC_KEY)return;
  const raw=BHDraftStore.get(`behistorical-first10-${FOUNDATION_TOPIC_KEY}`);
  if(!raw)return;
  let saved;
  try{saved=JSON.parse(raw);}catch(e){return;}
  if(!Array.isArray(saved))return;
  saved.forEach((item,i)=>{
    if(!item)return;
    const slot=`first10-q${i+1}`,answer=String(item.a||'').trim();
    if(!answer)return;
    stored[slot]=answer;
    if(item.q)WORK_PROMPTS[slot]=String(item.q);
    if(/^[1-5]$/.test(String(item.c||'')))WORK_CONFIDENCE[slot]=String(item.c);
  });
}
function promptForSlot(slot){
  if(WORK_PROMPTS[slot])return WORK_PROMPTS[slot];
  const item=FOUNDATION_WORK_ITEMS.find(w=>w.slot===slot);
  if(!item)return '';
  try{return String(item.prompt()||'').trim();}catch(e){return '';}
}
function prettyWorkLabel(slot){const w=String(slot).replace(/-/g,' ').trim();return w.charAt(0).toUpperCase()+w.slice(1);}
function escapeWorkHtml(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
// Strips the bold markers the data files use, so "**Compare** the two" reads plain.
function plainPrompt(v){return String(v||'').replace(/\*\*(.*?)\*\*/g,'$1').trim();}
function paragraphsHtml(t){return String(t).split(/\n{2,}/).map(b=>'<p>'+escapeWorkHtml(b.trim()).replace(/\n/g,'<br>')+'</p>').join('');}

// ── Record manifest ───────────────────────────────────────────────────────────
//
// Mirrors the unit renderer's footer so one parser reads both. See the long
// comment in assets/js/behistorical-topic-renderer-v1.js for why the format is
// line-oriented and self-delimiting rather than structured HTML: Canvas rewrites
// the paste, so nothing may depend on a tag surviving.
const BH_RECORD_VERSION=1;
const BH_RECORD_OPEN='--- BEHISTORICAL RECORD, do not edit ---';
const BH_RECORD_CLOSE='--- END BEHISTORICAL RECORD ---';

// Whitespace is collapsed before hashing because Canvas rewrites line breaks on
// the way in and again on the way out.
function bhNormalizeForHash(v){return String(v==null?'':v).replace(/\s+/g,' ').trim();}
// FNV-1a 32-bit, identical to the unit renderer and to the Node parser. Detects
// accident and drift; it is not a tamper-proof signature.
function bhHash(v){
  const s=bhNormalizeForHash(v);
  let h=0x811c9dc5;
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=(h+((h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24)))>>>0;}
  return ('0000000'+h.toString(16)).slice(-8);
}
function bhWordCount(v){const s=bhNormalizeForHash(v);return s?s.split(' ').length:0;}
function bhField(v){return String(v==null?'':v).replace(/[|\r\n]+/g,' ').trim();}
function bhOrdinal(label){const m=String(label||'').match(/Module\s+(\d+)/i);return m?m[1]:'xx';}

// The denominator the parser needs, and it has to be exactly right: an inflated
// expected count reports every complete submission as INCOMPLETE, and an
// exception report that cries wolf is one nobody reads.
//
// Two slots need care. The First & 10's three questions live in the reading, not
// in the data file, so their prompts resolve empty here but the slots are real
// whenever the topic has a reading. The bare `first10` slot is the opposite:
// renderFirst10() only draws that textarea when there is no embedUrl, and every
// Foundations topic embeds, so counting it would overstate the denominator by one.
function expectedCaptureCount(){
  const embedded=typeof first10!=='undefined'&&first10&&Boolean(first10.embedUrl);
  let n=0;
  FOUNDATION_WORK_ITEMS.forEach(item=>{
    if(item.slot==='first10'&&embedded)return;
    if(/^first10-q\d$/.test(item.slot)){
      if(typeof first10!=='undefined'&&first10)n++;
      return;
    }
    let p='';
    try{p=String(item.prompt()||'').trim();}catch(e){p='';}
    if(p)n++;
  });
  return n;
}

function buildRecordManifest(work,topicId,isoStamp){
  const rows=work.map(w=>({
    ord:bhOrdinal(w.label),
    slot:bhField(w.slot||''),
    label:bhField(w.label),
    words:bhWordCount(w.text),
    chars:bhNormalizeForHash(w.text).length,
    promptHash:bhHash(plainPrompt(w.prompt)),
    responseHash:bhHash(w.text),
    confidence:w.confidence||''
  }));
  // Summing slot:hash pairs means deleting a whole record line breaks the sum
  // too, not just editing the writing inside one.
  const sum=bhHash(rows.map(r=>r.slot+':'+r.responseHash).join('|'));
  const header='#BHV|v='+BH_RECORD_VERSION+'|topic='+bhField(topicId)+'|copied='+isoStamp
    +'|items='+rows.length+'|expected='+expectedCaptureCount()+'|sum='+sum+'|#';
  const lines=rows.map(r=>'#BHR|i='+r.ord+'|slot='+r.slot+'|lab='+r.label
    +'|w='+r.words+'|c='+r.chars+'|ph='+r.promptHash+'|rh='+r.responseHash+'|cf='+r.confidence+'|#');
  return [BH_RECORD_OPEN,header].concat(lines).concat([BH_RECORD_CLOSE]);
}

function recordManifestHtml(lines){
  return '<hr>'+lines.map(l=>'<p style="font-family:monospace;font-size:.68rem;opacity:.6;margin:.15rem 0;">'+escapeWorkHtml(l)+'</p>').join('');
}

// Reads localStorage, not the DOM: openModule() replaces the modal body, so a
// textarea for a module the student is not looking at does not exist. Anything
// on screen right now overrides the stored copy.
function collectLessonWork(){
  const prefix=`foundations-topic-${T.id}-`;
  const stored={};
  BHDraftStore.keys().forEach(key=>{
    if(!key||key.indexOf(prefix)!==0)return;
    const value=(BHDraftStore.get(key)||'').trim();
    if(value)stored[key.slice(prefix.length)]=value;
  });
  document.querySelectorAll('textarea.response-area').forEach(t=>{
    if(!t.id||t.id===WORK_EXPORT_ID)return;
    const value=(t.value||'').trim();
    if(!value)return;
    stored[t.id.indexOf(`${T.id}-`)===0?t.id.slice(`${T.id}-`.length):t.id]=value;
  });
  injectFirst10Answers(stored);
  injectBeInTheRoomAnswer(stored);
  const ordered=[],listed=new Set();
  FOUNDATION_WORK_ITEMS.forEach(item=>{
    listed.add(item.slot);
    if(stored[item.slot])ordered.push({slot:item.slot,label:item.label,prompt:promptForSlot(item.slot),text:stored[item.slot],confidence:confidenceForSlot(item.slot)});
  });
  Object.keys(stored).sort().forEach(slot=>{
    if(!listed.has(slot))ordered.push({slot:slot,label:prettyWorkLabel(slot),prompt:promptForSlot(slot),text:stored[slot],confidence:confidenceForSlot(slot)});
  });
  return ordered;
}

// Builds both clipboard flavours. text/html is what Canvas keeps the bolding
// from; text/plain is the fallback for anywhere that refuses HTML.
function buildWorkDocument(){
  const work=collectLessonWork();
  if(!work.length)return null;
  const line1='AP World History'+(T.code?', '+T.code:'');
  const line2=T.title||'';
  const now=new Date();
  const stamp=now.toLocaleString();
  const manifest=buildRecordManifest(work,FOUNDATION_TOPIC_KEY||T.id||'',now.toISOString());

  const head='<div><p><strong>'+escapeWorkHtml(line1)+'</strong>'
    +(line2?'<br><strong>'+escapeWorkHtml(line2)+'</strong>':'')+'</p>'
    +'<p><em>Student work, copied '+escapeWorkHtml(stamp)+'</em></p><hr>';

  const body=work.map(w=>{
    const prompt=plainPrompt(w.prompt);
    return '<p><strong>'+escapeWorkHtml(w.label)+'</strong></p>'
      +(prompt?'<p><strong>Question:</strong> <em>'+escapeWorkHtml(prompt)+'</em></p>':'')
      +'<p><strong>My response:</strong></p>'+paragraphsHtml(w.text);
  }).join('<hr>');

  const plain=[line1.toUpperCase(),line2,'Student work, copied '+stamp,''].filter(Boolean)
    .concat(work.map(w=>{
      const prompt=plainPrompt(w.prompt);
      return [w.label.toUpperCase(),prompt?'Question: '+prompt:'','My response:',w.text,''].filter(Boolean).join('\n');
    })).concat(manifest).join('\n');

  return {html:head+body+recordManifestHtml(manifest)+'</div>',plain:plain,count:work.length};
}

function gatherAllWork(){
  const out=byId(WORK_EXPORT_ID),result=byId('all-work-result');
  if(!out)return null;
  const doc=buildWorkDocument();
  if(!doc){
    out.innerHTML='';out.dataset.plain='';
    if(result)result.textContent='Nothing typed yet. Work through the module cards, then gather your work.';
    return null;
  }
  out.innerHTML=doc.html;
  out.dataset.plain=doc.plain;
  // A short gather is the failure this panel used to hide: a wiped localStorage
  // produces a well-formed paste with nothing in it. Say the number out loud.
  if(result){
    const expected=expectedCaptureCount(),short=expected-doc.count;
    result.textContent=`Gathered ${doc.count} of ${expected} response${expected===1?'':'s'}.`
      +(short>0
        ?` ${short} ${short===1?'is':'are'} still empty. Check those module cards before you submit, then copy and paste this into Canvas.`
        :' Copy this, then paste it into Canvas.');
  }
  return doc;
}

// Selecting the rendered block first means a manual Ctrl-C still copies the
// formatted version when the clipboard API is blocked.
function selectWorkOutput(out){
  try{
    const range=document.createRange();range.selectNodeContents(out);
    const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);
    return true;
  }catch(e){return false;}
}

function copyAllWork(){
  const out=byId(WORK_EXPORT_ID),result=byId('all-work-result');
  if(!out)return;
  let doc=(out.innerHTML||'').trim()?{html:out.innerHTML,plain:out.dataset.plain||''}:null;
  if(!doc)doc=gatherAllWork();
  if(!doc)return;
  const say=m=>{if(result)result.textContent=m;};
  selectWorkOutput(out);
  if(window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write){
    navigator.clipboard.write([new ClipboardItem({
      'text/html':new Blob([doc.html],{type:'text/html'}),
      'text/plain':new Blob([doc.plain],{type:'text/plain'})
    })]).then(()=>say('Copied with formatting. Paste it into the Canvas assignment.'))
        .catch(()=>copyWorkFallback(say));
  }else{copyWorkFallback(say);}
}

// execCommand is deprecated but still the only way to put formatted text on the
// clipboard without ClipboardItem, and it copies the live selection.
function copyWorkFallback(say){
  let copied=false;
  try{copied=document.execCommand('copy');}catch(e){copied=false;}
  if(copied){say('Copied with formatting. Paste it into the Canvas assignment.');return;}
  const out=byId(WORK_EXPORT_ID);
  if(navigator.clipboard&&navigator.clipboard.writeText&&out){
    navigator.clipboard.writeText(out.dataset.plain||out.textContent||'')
      .then(()=>say('Copied as plain text. Paste it into the Canvas assignment.'))
      .catch(()=>say('Copy is blocked on this device. Your work is selected, press Ctrl-C or Cmd-C.'));
  }else{say('Your work is selected, press Ctrl-C or Cmd-C to copy.');}
}

// One timer per textarea, so switching boxes quickly cannot cancel a pending
// save for the box just left.
document.addEventListener('input',function(event){
  const t=event.target;
  if(!t||!t.id||t.id===WORK_EXPORT_ID)return;
  if(!t.classList||!t.classList.contains('response-area'))return;
  clearTimeout(t._draftTimer);
  t._draftTimer=setTimeout(function(){
    const ok=BHDraftStore.set(`foundations-topic-${t.id}`,t.value||'');
    const r=byId(t.id+'-result');
    if(r)r.textContent=ok?'Saved automatically in this browser on this device.':BH_NO_STORAGE_NOTE;
  },600);
});

function renderWorkExportPanel(){
  const grid=byId('module-grid');
  if(!grid||byId(WORK_EXPORT_ID))return;
  grid.insertAdjacentHTML('afterend',`<article class="foundation-card work-export"><h3>Save Your Work</h3><p>Your typing saves automatically, but only in this browser on this device. Before you leave class, gather everything here and paste it into the Canvas assignment. Canvas is where your graded work goes.</p><div class="tool-row"><button class="btn" type="button" onclick="gatherAllWork()">Gather All My Work</button><button class="btn secondary" type="button" onclick="copyAllWork()">Copy to Clipboard</button></div><div id="${WORK_EXPORT_ID}" class="work-output" tabindex="0" style="background:#F5F0E7;color:#1A1C1D;border:1px solid #C9A46A;border-radius:3px;padding:1rem 1.15rem;margin-top:.75rem;max-height:22rem;overflow-y:auto;font-family:'Libre Baskerville',Georgia,serif;font-size:.9rem;line-height:1.55;"><p style="opacity:.7;margin:0;">Click <strong>Gather All My Work</strong>, then Copy to Clipboard and paste into Canvas.</p></div><div id="all-work-result" class="check-result"></div></article>`);
}
renderWorkExportPanel();
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&BHModalStack.length){bhCloseModal(BHModalStack[BHModalStack.length-1].el.id);}if(byId('lecture-modal').classList.contains('show')){if(e.key==='ArrowRight'){e.preventDefault();lectureStep(1);}else if(e.key==='ArrowLeft'){e.preventDefault();lectureStep(-1);}}});
