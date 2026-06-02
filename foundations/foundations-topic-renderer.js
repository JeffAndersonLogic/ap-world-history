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
const timeline=T.timeline||[];
const aiCoach=T.aiCoach||{title:'AI Historical Coach',intro:'Use these questions to deepen your historical reasoning before submitting your response.',prompts:['What pattern do you notice?','How did geography influence this development?','What changed, and what stayed the same?']};
const blockPlan=T.blockPlan||[
  ['0-10','Launch Question','Students answer the essential question in one sentence, then revise after the lesson.'],
  ['10-25','Map & Context','Use the map module to build geographic or regional context.'],
  ['25-45','First & 10','Read the narrative foundation and mark one claim, one evidence detail, and one confusion.'],
  ['45-65','Lecture Cards','Use projection-friendly lecture cards for direct instruction and discussion.'],
  ['65-80','AP Skill Builder','Practice the day\'s AP thinking skill with a short written response.'],
  ['80-90','Checkpoint','Complete the exit ticket and confidence reflection.']
];
byId('targets').innerHTML=`<div class="target-strip"><article class="foundation-card"><h3>Learning Targets</h3><ul>${T.learningTargets.map(x=>`<li>${x}</li>`).join('')}</ul></article><article class="foundation-card"><h3>Success Criteria</h3><ul>${T.successCriteria.map(x=>`<li>${x}</li>`).join('')}</ul></article></div>`;
const command=document.querySelector('#command .foundations-grid');
if(command){command.insertAdjacentHTML('afterend',`<article class="foundation-card block-plan-card"><h3>90-Minute Block Plan</h3><table class="mini-table"><tr><th>Time</th><th>Move</th><th>Purpose</th></tr>${blockPlan.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table></article>`);}
const modules=[
  {id:'map',label:'Module 01',title:'Map & Geography Check',desc:T.map.desc,img:T.map.url,render:renderMap},
  {id:'first10',label:'Module 02',title:'First & 10 Reading',desc:'Narrative foundation for today\'s Foundations topic.',img:T.heroImage,render:renderFirst10},
  {id:'contentdelivery',label:'Module 03',title:'Content Delivery',desc:'Jump down to the main lecture-card section.',img:T.heroImage,jump:'#content'},
  {id:'timeline',label:'Module 04',title:'Road to 1200 Timeline',desc:'A visual progression that keeps the five-day bridge anchored in time.',img:T.heroImage,render:renderTimeline},
  {id:'terms',label:'Module 05',title:'Foundation Terms',desc:'Key vocabulary students need before AP World begins.',img:T.heroImage,render:renderTerms},
  {id:'evidence',label:'Module 06',title:'Evidence Lab',desc:evidence.task,img:(evidence.items&&evidence.items[0]?evidence.items[0].url:T.heroImage),render:renderEvidence},
  {id:'coach',label:'Module 07',title:'Socrates AI Coach',desc:'Socratic prompts that help students notice patterns and improve reasoning.',img:T.heroImage,render:renderCoach},
  {id:'skill',label:'Module 08',title:T.skill.title,desc:T.skill.desc,img:T.heroImage,render:renderSkill},
  {id:'checkpoint',label:'Module 09',title:T.checkpoint.title,desc:'Exit ticket and checkpoint for this Foundations topic.',img:T.heroImage,render:renderCheckpoint}
];
byId('module-grid').innerHTML=modules.map(m=>`<article class="module-card" tabindex="0" role="button" onclick="${m.jump?`jumpToSection('${m.jump}')`:`openModule('${m.id}')`}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${m.jump?`jumpToSection('${m.jump}')`:`openModule('${m.id}')`}}" style="--module-img:${bg(m.img)}"><div class="module-label">${m.label}</div><h3>${m.title}</h3><p>${m.desc}</p></article>`).join('');
byId('lecture-grid').innerHTML=T.lecture.map((seg,i)=>`<article class="card dark-card lecture-topic-card" tabindex="0" role="button" onclick="openLecture(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLecture(${i})}"><h3>${seg.title}</h3><ul class="lecture-list">${seg.bullets.map(b=>`<li>${md(b)}</li>`).join('')}</ul></article>`).join('');
byId('video-grid').innerHTML=`<article class="foundation-card" style="grid-column:1/-1"><h3>Video Clips</h3><p>Use these clips as quick reinforcement for this Foundations topic. Students should watch for the guiding prompt, not simply take random notes.</p></article>`+T.videos.map(v=>`<article class="video-card"><div class="video-thumb" ${v.youtubeId?`style="background-image:linear-gradient(rgba(26,28,29,.25),rgba(26,28,29,.55)),url('https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg');background-size:cover;background-position:center"`:''}><span>Video Clip</span></div><h3>${v.title}</h3><p>${v.prompt}</p><a class="btn" href="${v.url}" target="_blank" rel="noopener">Open Video</a></article>`).join('');
function jumpToSection(selector){const el=document.querySelector(selector);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function openModule(id){const m=modules.find(x=>x.id===id);if(!m||m.jump)return;byId('pop-eyebrow').textContent=m.label;byId('pop-title').textContent=m.title;byId('pop-body').innerHTML=m.render();byId('pop-modal').classList.add('show');loadDrafts();}
function closeModule(){byId('pop-modal').classList.remove('show')}
function openLecture(i){const seg=T.lecture[i];byId('lecture-modal-title').textContent=seg.title;byId('lecture-modal-bullets').innerHTML=seg.bullets.map(b=>`<li>${md(b)}</li>`).join('');byId('lecture-modal-img').src=sanitizeImageUrl(seg.image.url);byId('lecture-modal-img').alt=seg.image.title;byId('lecture-modal-caption').innerHTML=`<strong>${seg.image.title}</strong><br>${seg.image.caption}<br><a class="source-link" href="${seg.image.sourceUrl||seg.image.url}" target="_blank" rel="noopener">Open image source</a>`;byId('lecture-modal').classList.add('show')}
function closeLectureModal(){byId('lecture-modal').classList.remove('show')}
function renderMap(){return `<div class="pop-grid"><figure class="foundation-card map-figure pop-half"><img src="${sanitizeImageUrl(T.map.url)}" alt="${T.map.title}"><figcaption><strong>${T.map.title}</strong><br>${T.map.caption}<br><a class="source-link" href="${T.map.sourceUrl}" target="_blank" rel="noopener">Open map source</a></figcaption></figure><article class="foundation-card pop-half"><h3>Map Questions</h3><ul>${T.map.questions.map(q=>`<li>${q}</li>`).join('')}</ul>${mapKey.length?`<div class="map-key"><h4>Map Key</h4>${mapKey.map(k=>`<div class="map-key-item"><strong>${k.label}</strong><span>${k.detail}</span></div>`).join('')}</div>`:''}${draft(`${T.id}-map`,T.map.prompt)}</article></div>`}
function renderFirst10(){if(first10.embedUrl){return `<div style="margin:-1.5rem"><iframe src="${first10.embedUrl}" title="First &amp; 10 Reading" style="width:100%;min-height:85vh;border:0;display:block;" loading="lazy"></iframe></div>`;}return `<article class="foundation-card reading"><h3>${first10.title}</h3>${first10.paragraphs.map(p=>`<p>${p}</p>`).join('')}</article><article class="foundation-card"><h3>First &amp; 10 Response</h3><p>${first10.prompt}</p></article>${draft(`${T.id}-first10`,first10.prompt)}`}
function renderTimeline(){return `<article class="foundation-card"><h3>Visual Timeline Strip</h3><p>This strip places today\'s topic on the road to c.1200.</p><div class="timeline-strip">${timeline.map(t=>`<div class="timeline-node"><strong>${t.date}</strong><span>${t.event}</span></div>`).join('')}</div></article>${draft(`${T.id}-timeline`,T.timelinePrompt||'Which timeline moment best explains why the world of c.1200 did not emerge out of nowhere?')}`}
function renderTerms(){return `<article class="foundation-card"><h3>Terms to Know</h3><p>${T.terms.map(x=>`<span class="term-chip">${x}</span>`).join('')}</p><table class="mini-table"><tr><th>Term</th><th>Why it matters</th></tr>${T.termTable.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></article>`}
function renderEvidence(){return `<article class="foundation-card"><h3>${evidence.title}</h3><p>${evidence.task}</p></article><div class="pop-grid">${evidence.items.map((item,i)=>`<article class="foundation-card map-figure pop-half"><img src="${sanitizeImageUrl(item.url)}" alt="${item.title}"><figcaption><strong>${item.title}</strong><br>${item.caption}<br><em>${item.prompt}</em><br><a class="source-link" href="${item.sourceUrl||item.url}" target="_blank" rel="noopener">Open source</a></figcaption></article>`).join('')}</div>${draft(`${T.id}-evidence`,evidence.prompt)}`}
function renderCoach(){return `<article class="foundation-card"><h3>${aiCoach.title}</h3><p>${aiCoach.intro}</p><div class="coach-list">${aiCoach.prompts.map((p,i)=>`<div class="coach-prompt"><strong>Prompt ${i+1}</strong><span>${p}</span></div>`).join('')}</div></article>${draft(`${T.id}-coach`,aiCoach.responsePrompt||'Use one AI coach prompt to improve your historical explanation.')}`}
function renderSkill(){return `<article class="foundation-card"><h3>${T.skill.title}</h3><p>${T.skill.intro}</p><table class="mini-table"><tr><th>Step</th><th>What to Do</th></tr>${T.skill.steps.map((s,i)=>`<tr><td>${i+1}</td><td>${s}</td></tr>`).join('')}</table></article>${draft(`${T.id}-skill`,T.skill.prompt)}`}
function renderCheckpoint(){return `<article class="dark-callout"><h3>${T.checkpoint.title}</h3><p>${T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Exit Ticket</h3><p>${T.exitTicket||T.checkpoint.prompt}</p></article><article class="foundation-card"><h3>Strong Response Checklist</h3><ul>${T.checkpoint.checklist.map(x=>`<li>${x}</li>`).join('')}</ul></article>${draft(`${T.id}-checkpoint`,T.checkpoint.prompt)}`}
function draft(id,prompt){return `<div class="prompt-box"><h3>Draft Your Thinking</h3><p>${prompt}</p><textarea class="response-area" id="${id}" placeholder="Type your response here..."></textarea><div class="tool-row"><button class="btn" onclick="saveDraft('${id}')">Save Draft</button><button class="btn secondary" onclick="copyResponse('${id}')">Copy Response</button></div><div id="${id}-result" class="check-result"></div></div>`}
function saveDraft(id){const t=byId(id);localStorage.setItem(`foundations-topic-${id}`,t.value||'');byId(id+'-result').textContent='Draft saved on this device.'}
function copyResponse(id){const t=byId(id);navigator.clipboard.writeText(t.value||'').then(()=>byId(id+'-result').textContent='Response copied.').catch(()=>byId(id+'-result').textContent='Copy failed. Select and copy manually.')}
function loadDrafts(){document.querySelectorAll('textarea.response-area').forEach(t=>{const saved=localStorage.getItem(`foundations-topic-${t.id}`);if(saved)t.value=saved})}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModule();closeLectureModal();}});