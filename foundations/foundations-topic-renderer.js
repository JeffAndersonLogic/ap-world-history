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
const _targets=byId('inline-targets')||byId('targets');if(_targets)_targets.innerHTML=`<div class="target-strip"><article class="foundation-card"><h3>Learning Targets</h3><ul>${T.learningTargets.map(x=>`<li>${x}</li>`).join('')}</ul></article><article class="foundation-card"><h3>Success Criteria</h3><ul>${T.successCriteria.map(x=>`<li>${x}</li>`).join('')}</ul></article></div>`;
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
function renderCheckpoint1(){return `<article class="dark-callout"><h3>${T.checkpoint.title}</h3><p>${T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Exit Ticket</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Strong Response Checklist</h3><ul>${T.checkpoint.checklist.map(x=>`<li>${x}</li>`).join('')}</ul></article>${draft(`${T.id}-checkpoint`,T.checkpoint.prompt)}`}
function renderCheckpoint2(){return `<article class="dark-callout"><h3>Synthesis Checkpoint</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Build Your Synthesis</h3><p>Use evidence from at least two modules to answer the synthesis prompt above. Connect the themes you studied today to the bigger picture of AP World History.</p></article>${draft(`${T.id}-checkpoint2`,T.exitTicket||T.checkpoint.prompt)}`}
function renderBeInTheRoomPlaceholder(){return `<article class="foundation-card"><h3>BeInTheRoom</h3><p>This immersive experience for ${T.title} is coming soon.</p></article>`;}
function draft(id,prompt){return `<div class="prompt-box"><h3>Draft Your Thinking</h3><p>${prompt}</p><textarea class="response-area" id="${id}" placeholder="Type your response here..."></textarea><div class="tool-row"><button class="btn" onclick="saveDraft('${id}')">Save Draft</button><button class="btn secondary" onclick="copyResponse('${id}')">Copy Response</button></div><div id="${id}-result" class="check-result"></div></div>`}
function saveDraft(id){const t=byId(id);localStorage.setItem(`foundations-topic-${id}`,t.value||'');byId(id+'-result').textContent='Draft saved on this device.'}
function copyResponse(id){const t=byId(id);navigator.clipboard.writeText(t.value||'').then(()=>byId(id+'-result').textContent='Response copied.').catch(()=>byId(id+'-result').textContent='Copy failed. Select and copy manually.')}
function loadDrafts(){document.querySelectorAll('textarea.response-area').forEach(t=>{const saved=localStorage.getItem(`foundations-topic-${t.id}`);if(saved)t.value=saved})}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModule();closeLectureModal();}if(byId('lecture-modal').classList.contains('show')){if(e.key==='ArrowRight'){e.preventDefault();lectureStep(1);}else if(e.key==='ArrowLeft'){e.preventDefault();lectureStep(-1);}}});
