(function(global){
'use strict';
const PREFIX='behistorical-atlas-v1-topic-';
const FIELDS=['prediction','sourceResponse','explanation','transfer','evidenceNote'];
function cleanRecord(raw){
 const r={};if(!raw||typeof raw!=='object'||Array.isArray(raw))return r;
 for(const field of FIELDS)if(typeof raw[field]==='string')r[field]=raw[field];
 r.cards=Array.isArray(raw.cards)?raw.cards.filter(c=>c&&typeof c.note==='string'&&typeof c.place==='string'&&typeof c.view==='string').map(c=>({note:c.note,place:c.place,view:c.view,topic:String(c.topic||'')})):[];
 if(typeof raw.importedText==='string')r.importedText=raw.importedText;
 r.evidenceDrafts={};if(raw.evidenceDrafts&&typeof raw.evidenceDrafts==='object')for(const [key,value] of Object.entries(raw.evidenceDrafts))if(typeof value==='string')r.evidenceDrafts[key]=value;
 return r;
}
function createStore(storage,onFailure,health){
 const memory={};let available=true;
 function fail(){available=false;if(onFailure)onFailure();}
 return{
  get available(){return available;},
  read(topic){
   if(available)try{const text=storage.getItem(PREFIX+topic);if(text){const parsed=JSON.parse(text);if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw Error('Invalid record');memory[topic]=cleanRecord(parsed);}}catch(e){fail();}
   return cleanRecord(memory[topic]||{});
  },
  update(topic,changes){
   const r={...this.read(topic),...changes};memory[topic]=cleanRecord(r);
   if(!available){if(health)health.recordWrite(false,{name:'StorageUnavailable'});return false;}
   try{storage.setItem(PREFIX+topic,JSON.stringify(memory[topic]));if(health)health.recordWrite(true,null,PREFIX+topic);return true;}catch(e){if(health)health.recordWrite(false,e);fail();return false;}
  },
  writeMap(topic,text){
   if(!available)return false;
   const key=`behistorical-draft-topic-${topic}-map-check-response`;
   try{storage.setItem(key,text);if(health)health.recordWrite(true,null,key);return true;}catch(e){if(health)health.recordWrite(false,e);fail();return false;}
  },
  readMap(topic){if(!available)return null;try{return storage.getItem(`behistorical-draft-topic-${topic}-map-check-response`)||'';}catch(e){fail();return null;}}
 };
}
function responseText(topic,data,record){
 const pieces=[];
 for(const [field,label,prompt] of [['prediction','Initial prediction',data.prediction],['sourceResponse','Source reasoning',data.sourceQuestion],['explanation','Historical explanation',data.explanation],['transfer','Later recall / transfer',data.transfer]]){
  const value=String(record[field]||'').trim();if(value)pieces.push(`${label}\nQuestion: ${prompt}\n${value}`);
 }
 if(!pieces.length)return '';
 const cards=(record.cards||[]).map(c=>`${c.place} (${c.view}): ${c.note}`);
 if(cards.length)pieces.push('Selected map observations\n'+cards.join('\n'));
 return `UNIT 2 NETWORK ATLAS, TOPIC ${topic}\n${data.title}\n\n`+pieces.join('\n\n');
}
function mergeMap(existing,text,previous){
 if(previous&&existing.includes(previous))return existing.replace(previous,text);
 if(existing.includes(text))return existing;
 return [existing.trimEnd(),text].filter(Boolean).join('\n\n');
}
const core={PREFIX,FIELDS,createStore,responseText,mergeMap,cleanRecord};
if(typeof module==='object'&&module.exports){module.exports=core;return;}
global.BHAtlasCore=core;
const root=document.getElementById('network-atlas');if(!root)return;
const data=global.BH_UNIT2_ATLAS;
const $=id=>document.getElementById(id);
if(!data||!global.d3||!global.topojson||!global.BH_ATLAS_WORLD){$('save-status').textContent='The atlas could not load. Return to the lesson’s Map Check and use its map while the atlas is unavailable.';return;}
const failure=()=>{$('save-status').textContent='This browser cannot save atlas work. Your typing remains in this tab. Copy your atlas work before closing it; paste it into Map Check or Canvas.';};
let storage;try{storage=global.localStorage;}catch(e){storage={getItem(){throw e;},setItem(){throw e;}};}
const store=createStore(storage,failure,global.BHSaveHealth);
const params=new URLSearchParams(global.location.search);
let topic=data.topics[params.get('topic')]?params.get('topic'):'2.1',view=0,selected=0,revealed=false,mode='explore',relay=-1;
const svg=global.d3.select($('atlas-map')),land=global.topojson.feature(global.BH_ATLAS_WORLD,global.BH_ATLAS_WORLD.objects.land);
const t=()=>data.topics[topic];
const currentView=()=>t().views[view];
const escapeHtml=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function button(label,pressed,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-pressed',String(pressed));b.addEventListener('click',fn);return b;}
function preview(){$('submission-preview').textContent=responseText(topic,t(),store.read(topic))||'Write a prediction, source response, explanation, or recall response to prepare your atlas work.';}
function notebook(){
 const bank=$('evidence-bank'),earlier=$('earlier-work');bank.replaceChildren();earlier.replaceChildren();let count=0;
 for(const [id,detail] of Object.entries(data.topics)){
  const record=store.read(id);
  for(const card of record.cards||[]){count++;const a=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p'),small=document.createElement('p');h.textContent=`${id} · ${card.place}`;p.textContent=card.note;small.className='source-note';small.textContent=`Map view: ${card.view}. Student observation of the BeHistorical instructional map; ${detail.period}`;a.append(h,p,small);bank.append(a);}
  if(record.explanation){const a=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p');h.textContent=`${id} · ${detail.title}`;p.textContent=record.explanation;a.append(h,p);earlier.append(a);}
 }
 if(!count)bank.textContent='No observations kept yet. Explore a place, write your observation, and choose Keep this evidence.';
 if(!earlier.children.length)earlier.textContent='Your explanations will appear here as you work through Unit 2.';
}
function mapText(){
 const v=currentView(),box=$('map-text');box.replaceChildren();const p=document.createElement('p');p.textContent='Displayed connections: '+(v.sets.map(s=>s.key).join('; ')||'Regional crop examples, with no precise journey implied.')+(topic==='2.3'?`; Arabian Sea winds ${view===0?'toward the northeast in summer':'toward the southwest in winter'}.`:'');box.append(p);const ul=document.createElement('ul');for(const place of v.places){const li=document.createElement('li');li.textContent=place.name+': '+place.detail;ul.append(li);}box.append(ul);
}
function place(){
 const p=currentView().places[selected],record=store.read(topic),key=currentView().name+'::'+p.name;$('place-title').textContent=p.name;$('place-detail').textContent=p.detail;$('atlas-place').value=selected;$('evidence-note').value=(record.evidenceDrafts||{})[key]||'';mapText();
}
function controls(){
 $('view-controls').replaceChildren(...t().views.map((v,i)=>button(v.name,i===view,()=>{view=i;selected=0;relay=-1;controls();place();draw();})));
 $('atlas-place').replaceChildren(...currentView().places.map((p,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${i+1} · ${p.name}`;return o;}));
 $('relay-panel').hidden=topic!=='2.3';$('relay-controls').replaceChildren(...['Production: China','Exchange: Southeast Asia','Exchange: India','Markets: East Africa'].map((name,i)=>button(name,relay===i,()=>{relay=i;draw();$('relay-controls').querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));$('relay-detail').textContent=['Chinese producers made porcelain for markets at home and abroad.','A product could change hands in a Southeast Asian port.','Merchants and brokers in Indian ports linked eastern and western markets.','East African ports connected maritime imports with coastal and inland buyers.'][i];})));
}
function draw(){
 const w=$('atlas-map').clientWidth;if(!w)return;const h=Math.max(240,w*.53),small=w<550,v=currentView();
 svg.attr('viewBox',`0 0 ${w} ${h}`).attr('height',h);svg.selectAll('*').remove();
 svg.append('title').text(`${t().title}: ${v.name}`);svg.append('desc').text(revealed?'Selected approximate connections and numbered places. Use the place selector and Read the map as text for the equivalent information.':'Geographic context. Reveal connections after your prediction.');
 const proj=global.d3.geoEquirectangular().center([59,21]).scale((w-24)/(160*Math.PI/180)).translate([w/2,h/2]),path=global.d3.geoPath(proj);
 const defs=svg.append('defs');defs.append('clipPath').attr('id','atlas-map-clip').append('rect').attr('width',w).attr('height',h);
 defs.append('marker').attr('id','atlas-wind-arrow').attr('viewBox','0 0 10 10').attr('refX',9).attr('refY',5).attr('markerWidth',5).attr('markerHeight',5).attr('orient','auto').append('path').attr('d','M0 0L10 5L0 10Z').attr('fill','var(--atlas-highlight)');
 const g=svg.append('g').attr('clip-path','url(#atlas-map-clip)');g.append('path').datum(land).attr('class','atlas-land').attr('d',path).attr('fill','var(--atlas-land)').attr('stroke','var(--atlas-border)').attr('stroke-width',.6);
 const labels=small?[[[11,3],'AFRICA'],[[103,56],'ASIA'],[[76,-18],'INDIAN OCEAN']]:[[[12,3],'AFRICA'],[[15,54],'EUROPE'],[[63,52],'CENTRAL ASIA'],[[114,29],'CHINA'],[[83,21],'INDIA'],[[76,-18],'INDIAN OCEAN']];
 labels.forEach(([ll,label])=>{const xy=proj(ll);g.append('text').attr('x',xy[0]).attr('y',xy[1]).attr('text-anchor','middle').text(label);});
 if(revealed){
  for(const set of v.sets)for(const coordinates of set.paths)g.append('path').datum({type:'LineString',coordinates}).attr('class','atlas-route').attr('d',path).attr('fill','none').attr('stroke',`var(--atlas-${set.color})`).attr('stroke-width',2.5).attr('stroke-dasharray',set.dash||null);
  if(topic==='2.3')g.append('path').datum({type:'LineString',coordinates:view===0?[[53,0],[67,17]]:[[67,17],[53,0]]}).attr('class','atlas-wind').attr('d',path).attr('fill','none').attr('stroke','var(--atlas-highlight)').attr('stroke-width',2.5).attr('stroke-dasharray','7 4').attr('marker-end','url(#atlas-wind-arrow)');
  v.places.forEach((p,i)=>{const xy=proj(p.ll);g.append('circle').attr('cx',xy[0]).attr('cy',xy[1]).attr('r',i===selected?7:5).attr('fill',i===selected?'var(--atlas-ink)':'var(--atlas-highlight)').attr('stroke','var(--atlas-clean)').attr('stroke-width',1.5);g.append('text').attr('x',xy[0]+10).attr('y',xy[1]-8).text(i+1);g.append('circle').attr('cx',xy[0]).attr('cy',xy[1]).attr('r',20).attr('fill','transparent').on('click',()=>{selected=i;place();draw();});});
  if(topic==='2.3'&&relay>=0){const ll=[[118.68,24.87],[102.24,2.2],[75.78,11.25],[39.52,-8.97]][relay],xy=proj(ll);g.append('circle').attr('class','relay-highlight').attr('cx',xy[0]).attr('cy',xy[1]).attr('r',12).attr('fill','none').attr('stroke','var(--atlas-highlight)').attr('stroke-width',3);}
 }
 const legend=$('map-legend');legend.replaceChildren();if(revealed)for(const set of v.sets){const span=document.createElement('span'),mark=document.createElement('span');span.className='map-key';mark.className='map-swatch';mark.style.borderColor=`var(--atlas-${set.color})`;if(set.dash)mark.style.borderTopStyle='dashed';span.append(mark,document.createTextNode(set.key));legend.append(span);}if(revealed&&topic==='2.3'){const p=document.createElement('span');p.textContent='Dashed arrow: seasonal wind in the Arabian Sea';legend.append(p);}
}
function reveal(){revealed=true;$('map-exploration').hidden=false;$('source-section').hidden=false;$('reveal-note').textContent=mode==='recall'?'Details revealed. Compare your recall with the evidence and revise your explanation.':'Explore a place, inspect the source, and explain a connection.';draw();}
function render(){
 const detail=t();view=0;selected=0;relay=-1;revealed=false;$('atlas-topic').value=topic;$('unit-question').textContent=data.unitQuestion;$('investigation-title').textContent=`${topic} · ${detail.title}`;$('skill-label').textContent=detail.skill;$('focus').textContent=detail.focus;$('period').textContent=detail.period;$('carry').textContent=detail.carry;
 $('prediction-label').textContent=detail.prediction;$('explanation-label').textContent=detail.explanation;$('transfer-label').textContent=detail.transfer;$('source-question').textContent=detail.sourceQuestion;
 $('lesson-link').href=detail.lesson;$('map-exploration').hidden=true;$('source-section').hidden=true;$('reveal-note').textContent=mode==='recall'?'Recall the connection before revealing the details again.':'Make a prediction, then reveal the connections. You may explore even if you are unsure.';
 const record=store.read(topic);root.querySelectorAll('[data-draft]').forEach(el=>{el.value=record[el.dataset.draft]||'';});
 $('source-title').textContent=detail.source.title;$('source-intro').textContent=detail.source.intro;$('source-text').innerHTML=detail.source.text;$('source-attribution').textContent=detail.source.attribution||'';$('source-note').textContent=detail.source.sourceNote||'';
 $('source-links').replaceChildren(...(detail.source.sourceLinks||[]).map(link=>{const a=document.createElement('a');a.href=link.url;a.textContent=link.label;a.target='_blank';a.rel='noopener';return a;}));
 $('self-check').replaceChildren(...detail.checks.map(c=>{const li=document.createElement('li');li.textContent=c;return li;}));
 $('submission-status').textContent='';$('evidence-status').textContent='';$('copy-fallback').hidden=true;controls();place();draw();notebook();preview();
 if(store.available)$('save-status').textContent='Writing saves automatically in this browser. Use Map Check and Gather All My Work to submit through Canvas.';
 const u=new URL(global.location.href);u.searchParams.set('topic',topic);global.history.replaceState(null,'',u);
}
root.querySelectorAll('[data-draft]').forEach(el=>el.addEventListener('input',()=>{
 if(el.dataset.draft==='evidenceNote'){const record=store.read(topic),drafts=record.evidenceDrafts||{};drafts[currentView().name+'::'+currentView().places[selected].name]=el.value;store.update(topic,{evidenceDrafts:drafts});}
 else store.update(topic,{[el.dataset.draft]:el.value});preview();
}));
for(const [id,d] of Object.entries(data.topics)){const o=document.createElement('option');o.value=id;o.textContent=`${id} · ${d.title}`;$('atlas-topic').append(o);}
 $('atlas-topic').addEventListener('change',e=>{topic=e.target.value;render();});
 root.querySelectorAll('[name="atlas-mode"]').forEach(el=>el.addEventListener('change',()=>{mode=el.value;render();}));
 $('reveal-map').addEventListener('click',reveal);
 $('atlas-place').addEventListener('change',e=>{selected=Number(e.target.value);place();draw();});
 $('keep-evidence').addEventListener('click',()=>{
  const note=$('evidence-note').value.trim();if(!note){$('evidence-status').textContent='Write your observation before keeping it.';return;}
  const p=currentView().places[selected],r=store.read(topic),cards=r.cards||[],entry={topic,place:p.name,view:currentView().name,note};const i=cards.findIndex(c=>c.place===entry.place&&c.view===entry.view);if(i>=0)cards[i]=entry;else cards.push(entry);const ok=store.update(topic,{cards});$('evidence-status').textContent=ok?'Observation kept in your notebook.':'Observation kept for this tab. Copy or print your work before closing.';notebook();preview();
 });
 $('send-to-map').addEventListener('click',()=>{
  const r=store.read(topic),text=responseText(topic,t(),r);if(!text){$('submission-status').textContent='Write an atlas response before adding it to Map Check.';return;}
  const existing=store.readMap(topic);if(existing===null||!store.writeMap(topic,mergeMap(existing,text,r.importedText))){$('submission-status').textContent='Map Check could not be saved. Copy your atlas work and paste it into the lesson’s Map Check box.';manualCopy(text);return;}
  store.update(topic,{importedText:text});$('submission-status').replaceChildren(document.createTextNode('Your atlas response is in Map Check. '));const link=document.createElement('a');link.href=t().lesson+'#modules';link.textContent='Return to the lesson and Gather All My Work';$('submission-status').append(link);
 });
 function manualCopy(text){$('copy-fallback').value=text;$('copy-fallback').hidden=false;$('copy-fallback').focus();$('copy-fallback').select();}
 $('copy-work').addEventListener('click',async()=>{const text=responseText(topic,t(),store.read(topic));if(!text){$('submission-status').textContent='Write a response first.';return;}try{await global.navigator.clipboard.writeText(text);$('submission-status').textContent='Atlas work copied. Paste it into Map Check if you have not added it there.';}catch(e){manualCopy(text);$('submission-status').textContent='Select and copy the atlas work shown below.';}});
 let printDetails=[];
 global.addEventListener('beforeprint',()=>{printDetails=Array.from(root.querySelectorAll('details')).filter(d=>!d.open);printDetails.forEach(d=>d.open=true);notebook();});
 global.addEventListener('afterprint',()=>{printDetails.forEach(d=>d.open=false);});
 $('print-work').addEventListener('click',()=>global.print());
 global.addEventListener('storage',e=>{if(e.key&&e.key.startsWith(PREFIX))notebook();});
 new ResizeObserver(draw).observe($('atlas-map'));render();
})(typeof window!=='undefined'?window:globalThis);
