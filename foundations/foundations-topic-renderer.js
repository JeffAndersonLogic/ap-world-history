const byId=id=>document.getElementById(id);
const md=s=>String(s||'').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
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
// Foundations data files use id 'foundations-N'; BH_FORM.topics is keyed 'fN'.
// Passing the raw id would fail buildFormURL's /^f(\d+)$/ test and silently drop the Unit parameter.
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
  {id:'coach',label:'Module 08',title:'Socrates AI Coach',desc:'Socratic prompts that help students notice patterns and improve reasoning.',img:T.heroImage,render:renderCoach},
  {id:'beintheroom',label:'Module 09',title:'BeInTheRoom',...(beInTheRoom&&beInTheRoom.url?{desc:beInTheRoom.desc||'An immersive experience from this historical moment.',img:T.heroImage,link:beInTheRoom.url}:{desc:'An immersive experience, coming soon for this topic.',img:T.heroImage,render:renderBeInTheRoomPlaceholder})},
  {id:'checkpoint2',label:'Module 10',title:'Checkpoint 2',desc:'Synthesis checkpoint, bring it all together.',img:T.heroImage,render:renderCheckpoint2}
];
byId('module-grid').innerHTML=modules.map(m=>{const a=m.link?`window.open('${m.link}','_blank','noopener')`:m.jump?`jumpToSection('${m.jump}')`:`openModule('${m.id}')`;return `<article class="module-card" tabindex="0" role="button" onclick="${a}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${a}}" style="--module-img:url('${foundationArtworkPath(m.id)}')"><div class="module-label">${m.label}</div><h3>${m.title}</h3><p>${m.desc}</p></article>`;}).join('');
const _lectureGrid=byId('main-lecture-grid')||byId('lecture-grid');if(_lectureGrid)_lectureGrid.innerHTML=T.lecture.map((seg,i)=>`<article class="card dark-card lecture-topic-card" tabindex="0" role="button" onclick="openLecture(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLecture(${i})}"><h3>${seg.title}</h3><ul class="lecture-list">${seg.bullets.map(b=>`<li>${md(b)}</li>`).join('')}</ul></article>`).join('');
const _lectureModal=byId('lecture-modal');if(_lectureModal&&!byId('lecture-prev')){_lectureModal.insertAdjacentHTML('beforeend',`<button class="lecture-arrow lecture-arrow-prev" id="lecture-prev" type="button" aria-label="Previous lecture card" onclick="lectureStep(-1)">&#8249;</button><button class="lecture-arrow lecture-arrow-next" id="lecture-next" type="button" aria-label="Next lecture card" onclick="lectureStep(1)">&#8250;</button><div class="lecture-nav-status" id="lecture-nav-status"></div>`);}
const _videoGrid=byId('content-video-clips')||byId('video-grid');if(_videoGrid)_videoGrid.innerHTML=`<article class="foundation-card" style="grid-column:1/-1"><h3>Video Clips</h3><p>Use these clips as quick reinforcement for this Foundations topic. Students should watch for the guiding prompt, not simply take random notes.</p></article>`+T.videos.map(v=>`<article class="video-card"><div class="video-thumb" ${v.youtubeId?`style="background-image:linear-gradient(rgba(26,28,29,.25),rgba(26,28,29,.55)),url('https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg');background-size:cover;background-position:center"`:''}><span>Video Clip</span></div><h3>${v.title}</h3><p>${v.prompt}</p><a class="btn" href="${v.url}" target="_blank" rel="noopener">Open Video</a></article>`).join('');
function jumpToSection(selector){const el=document.querySelector(selector);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function openModule(id){const m=modules.find(x=>x.id===id);if(!m||m.jump||m.link)return;byId('pop-eyebrow').textContent=m.label;byId('pop-title').textContent=m.title;byId('pop-body').innerHTML=m.render();byId('pop-modal').classList.add('show');loadDrafts();}
function closeModule(){byId('pop-modal').classList.remove('show')}
let currentLectureIndex=0;
function openLecture(i){currentLectureIndex=i;const seg=T.lecture[i],image=byId('lecture-modal-img'),fallbackId=`lecture-${String(i+1).padStart(2,'0')}`,fallback=foundationArtworkPath(fallbackId),source=seg.image&&(seg.image.sourceUrl||seg.image.url);byId('lecture-modal-title').textContent=seg.title;byId('lecture-modal-bullets').innerHTML=seg.bullets.map(b=>`<li>${md(b)}</li>`).join('');image.onerror=function(){useFoundationFallback(this,fallback)};image.dataset.fallback=fallback;image.src=foundationLectureImageUrl(i);image.alt=(seg.image&&seg.image.title)||`${seg.title} visual`;byId('lecture-modal-caption').innerHTML=`<strong>${(seg.image&&seg.image.title)||seg.title}</strong><br>${(seg.image&&seg.image.caption)||'Topic-specific instructional artwork.'}${source?`<br><a class="source-link" href="${source}" target="_blank" rel="noopener">Open image source</a>`:''}`;updateLectureNav();byId('lecture-modal').classList.add('show')}
function updateLectureNav(){const total=T.lecture.length,prev=byId('lecture-prev'),next=byId('lecture-next'),status=byId('lecture-nav-status');if(prev)prev.disabled=currentLectureIndex<=0;if(next)next.disabled=currentLectureIndex>=total-1;if(status)status.textContent=`Card ${currentLectureIndex+1} of ${total}`;}
function lectureStep(delta){const n=currentLectureIndex+delta;if(n>=0&&n<T.lecture.length)openLecture(n);}
function closeLectureModal(){byId('lecture-modal').classList.remove('show')}
function renderMap(){return `<div class="pop-grid"><figure class="foundation-card map-figure pop-half"><img src="${foundationImageUrl(T.map.url,'map')}" alt="${T.map.title}" ${foundationFallbackAttrs('map')}><figcaption><strong>${T.map.title}</strong><br>${T.map.caption}<br><a class="source-link" href="${T.map.sourceUrl}" target="_blank" rel="noopener">Open map source</a></figcaption></figure><article class="foundation-card pop-half"><h3>Map Questions</h3><ul>${T.map.questions.map(q=>`<li>${q}</li>`).join('')}</ul>${mapKey.length?`<div class="map-key"><h4>Map Key</h4>${mapKey.map(k=>`<div class="map-key-item"><strong>${k.label}</strong><span>${k.detail}</span></div>`).join('')}</div>`:''}${draft(`${T.id}-map`,T.map.prompt)}</article></div>`}
function renderFirst10(){if(first10.embedUrl){return `<div style="margin:-1.5rem"><iframe src="${first10.embedUrl}" title="First &amp; 10 Reading" style="width:100%;min-height:85vh;border:0;display:block;" loading="lazy"></iframe></div>`;}return `<article class="foundation-card reading"><h3>${first10.title}</h3>${first10.paragraphs.map(p=>`<p>${p}</p>`).join('')}</article><article class="foundation-card"><h3>First &amp; 10 Response</h3><p>${first10.prompt}</p></article>${draft(`${T.id}-first10`,first10.prompt)}`}
function renderBeSurreal(){if(!beSurreal)return `<article class="foundation-card"><h3>BeSurreal</h3><p>This module is coming soon for ${T.title}.</p></article>`;return `<article class="foundation-card besurreal-card"><h3>${beSurreal.title}</h3><p>${beSurreal.intro}</p><blockquote class="besurreal-detail"><p>${beSurreal.detail}</p></blockquote></article>${draft(`${T.id}-besurreal`,beSurreal.prompt)}`}
function renderEvidence(){return `<article class="foundation-card"><h3>${evidence.title}</h3><p>${evidence.task}</p></article><div class="pop-grid">${evidence.items.map((item,i)=>{const fallbackId=`evidence-${String(i+1).padStart(2,'0')}`;return `<article class="foundation-card map-figure pop-half"><img src="${foundationEvidenceImageUrl(i)}" alt="${item.title}" ${foundationFallbackAttrs(fallbackId)}><figcaption><strong>${item.title}</strong><br>${item.caption}<br><em>${item.prompt}</em><br><a class="source-link" href="${item.sourceUrl||item.url}" target="_blank" rel="noopener">Open source</a></figcaption></article>`}).join('')}</div>${draft(`${T.id}-evidence`,evidence.prompt)}`}
function renderCoach(){return `<article class="foundation-card"><h3>${aiCoach.title}</h3><p>${aiCoach.intro}</p><div class="coach-list">${aiCoach.prompts.map((p,i)=>`<div class="coach-prompt"><strong>Prompt ${i+1}</strong><span>${p}</span></div>`).join('')}</div></article>${draft(`${T.id}-coach`,aiCoach.responsePrompt||'Use one AI coach prompt to improve your historical explanation.')}`}
function renderSkill(){return `<article class="foundation-card"><h3>${T.skill.title}</h3><p>${T.skill.intro}</p><table class="mini-table"><tr><th>Step</th><th>What to Do</th></tr>${T.skill.steps.map((s,i)=>`<tr><td>${i+1}</td><td>${s}</td></tr>`).join('')}</table></article>${draft(`${T.id}-skill`,T.skill.prompt)}`}
function renderCheckpoint1(){return `<article class="dark-callout"><h3>${T.checkpoint.title}</h3><p>${T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Exit Ticket</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Strong Response Checklist</h3><ul>${T.checkpoint.checklist.map(x=>`<li>${x}</li>`).join('')}</ul></article>${draft(`${T.id}-checkpoint`,T.checkpoint.prompt,'checkpoint1')}`}
function renderCheckpoint2(){return `<article class="dark-callout"><h3>Synthesis Checkpoint</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Build Your Synthesis</h3><p>Use evidence from at least two modules to answer the synthesis prompt above. Connect the themes you studied today to the bigger picture of AP World History.</p></article>${draft(`${T.id}-checkpoint2`,T.exitTicket||T.checkpoint.prompt,'checkpoint2')}`}
function renderBeInTheRoomPlaceholder(){return `<article class="foundation-card"><h3>BeInTheRoom</h3><p>This immersive experience for ${T.title} is coming soon.</p></article>`;}
// draft(id, prompt, captureKey)
// captureKey is a key into BH_FORM.responseTypes. When present the card stamps
// its own metadata onto the textarea and grows a Submit to Form button inside
// the same .tool-row as Save Draft and Copy Response, never outside it.
function draft(id,prompt,captureKey){rememberPrompt(id,prompt);return `<div class="prompt-box"><h3>Draft Your Thinking</h3><p>${prompt}</p><textarea class="response-area" id="${id}" ${captureKey?foundationCaptureAttrs(captureKey):''} placeholder="Type your response here..."></textarea><div class="tool-row"><button class="btn" onclick="saveDraft('${id}')">Save Draft</button><button class="btn secondary" onclick="copyResponse('${id}')">Copy Response</button>${captureKey?foundationSubmitBtn(id,captureKey):''}</div><div id="${id}-result" class="check-result"></div></div>`}
// submitResponseToGoogleForm lives in assets/js/behistorical-form-config.js so
// this renderer and assets/js/behistorical-topic-renderer-v1.js share one
// implementation. Do not redefine it here, the config file loads first and a
// local copy would shadow it.

// Returns '' when capture is unavailable. A button that opens a bare form is worse than no button.
function foundationSubmitBtn(elemId,responseTypeKey){
  if(!window.BH_FORM||typeof buildCaptureButton!=='function')return '';
  if(!FOUNDATION_TOPIC_KEY)return '';
  return buildCaptureButton(elemId,FOUNDATION_TOPIC_KEY,responseTypeKey);
}
// Attribute string stamping a card's own metadata onto its textarea.
function foundationCaptureAttrs(responseTypeKey){
  if(!window.BH_FORM||typeof captureDataAttrs!=='function'||!FOUNDATION_TOPIC_KEY)return '';
  return captureDataAttrs(FOUNDATION_TOPIC_KEY,responseTypeKey);
}
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
function saveDraft(id){const t=byId(id);if(!t)return;const ok=BHDraftStore.set(`foundations-topic-${id}`,t.value||'');const r=byId(id+'-result');if(r)r.textContent=ok?'Draft saved in this browser on this device.':BH_NO_STORAGE_NOTE;}
function copyResponse(id){const t=byId(id);navigator.clipboard.writeText(t.value||'').then(()=>byId(id+'-result').textContent='Response copied.').catch(()=>byId(id+'-result').textContent='Copy failed. Select and copy manually.')}
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
  {slot:'coach',      label:'Module 08, Socrates AI Coach',     prompt:()=>aiCoach.responsePrompt},
  {slot:'checkpoint2',label:'Module 10, Checkpoint 2',          prompt:()=>T.exitTicket||T.checkpoint.prompt}
];

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
    responseHash:bhHash(w.text)
  }));
  // Summing slot:hash pairs means deleting a whole record line breaks the sum
  // too, not just editing the writing inside one.
  const sum=bhHash(rows.map(r=>r.slot+':'+r.responseHash).join('|'));
  const header='#BHV|v='+BH_RECORD_VERSION+'|topic='+bhField(topicId)+'|copied='+isoStamp
    +'|items='+rows.length+'|expected='+expectedCaptureCount()+'|sum='+sum+'|#';
  const lines=rows.map(r=>'#BHR|i='+r.ord+'|slot='+r.slot+'|lab='+r.label
    +'|w='+r.words+'|c='+r.chars+'|ph='+r.promptHash+'|rh='+r.responseHash+'|#');
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
  const ordered=[],listed=new Set();
  FOUNDATION_WORK_ITEMS.forEach(item=>{
    listed.add(item.slot);
    if(stored[item.slot])ordered.push({slot:item.slot,label:item.label,prompt:promptForSlot(item.slot),text:stored[item.slot]});
  });
  Object.keys(stored).sort().forEach(slot=>{
    if(!listed.has(slot))ordered.push({slot:slot,label:prettyWorkLabel(slot),prompt:promptForSlot(slot),text:stored[slot]});
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
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModule();closeLectureModal();}if(byId('lecture-modal').classList.contains('show')){if(e.key==='ArrowRight'){e.preventDefault();lectureStep(1);}else if(e.key==='ArrowLeft'){e.preventDefault();lectureStep(-1);}}});
