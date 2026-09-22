(function(){
'use strict';

const css=document.createElement('style');
css.id='behistorical-teaching-os-shared';
css.textContent=`
/* Shared Teaching OS cockpit contract. Topic files own slide composition; this file owns teacher-surface readability and systemwide presentation accessibility. */
body:not(.project-mode) .cockpit{max-width:1860px!important;grid-template-columns:minmax(0,1fr) 430px!important;gap:16px!important}
body:not(.project-mode) .timeline{display:none!important}
body.ros-open:not(.project-mode) .cockpit{grid-template-columns:240px minmax(0,1fr) 430px!important}
body.ros-open:not(.project-mode) .timeline{display:flex!important}
body:not(.project-mode) .intel-top{padding:16px 17px!important}
body:not(.project-mode) .intel-top .phase{font-size:.62rem!important}
body:not(.project-mode) .intel-top h2{font-size:1.18rem!important;line-height:1.18!important}
body:not(.project-mode) .intel-scroll{padding:13px 15px 17px!important}
body:not(.project-mode) .cue{padding:13px 14px!important;margin-bottom:10px!important}
body:not(.project-mode) .cue b{font-size:.62rem!important;margin-bottom:7px!important}
body:not(.project-mode) .cue p,body:not(.project-mode) .cue li{font-size:.89rem!important;line-height:1.52!important}
body:not(.project-mode) .cue.source a{font-size:.76rem!important}
body:not(.project-mode) .mission .question{font-size:.9rem!important;line-height:1.4!important}
body:not(.project-mode) .flow-card .name{font-size:.75rem!important}
body:not(.project-mode) .flow-card .range{font-size:.55rem!important}
.project-mode #runOfShowToggle{display:none!important}

/* Projector readability standard: box/chain slides must stay legible from the back of the room. */
.project-mode .process-track{gap:1.45vw!important;padding:3.2% 4.2%!important;align-items:stretch!important}
.project-mode .process-track::before{top:52%!important;opacity:.45!important}
.project-mode .process-node{min-height:185px!important;padding:clamp(1rem,1.45vw,1.35rem)!important;border-width:2px!important;box-shadow:0 16px 44px rgba(0,0,0,.32)!important}
.project-mode .process-node .circle{width:52px!important;height:52px!important;margin-bottom:.95rem!important;font-size:.9rem!important}
.project-mode .process-node h3{font-size:clamp(.82rem,1.08vw,1.08rem)!important;line-height:1.12!important;letter-spacing:.12em!important}
.project-mode .process-node p{font-size:clamp(1.03rem,1.42vw,1.42rem)!important;line-height:1.34!important}
.project-mode .grid-card{padding:clamp(1rem,1.45vw,1.4rem)!important}
.project-mode .grid-card h3{font-size:clamp(.96rem,1.18vw,1.2rem)!important;line-height:1.14!important}
.project-mode .grid-card p,.project-mode .grid-card li{font-size:clamp(1.02rem,1.36vw,1.38rem)!important;line-height:1.36!important}
.project-mode .card p,.project-mode .card li,.project-mode .evidence-card p,.project-mode .evidence-card li{font-size:clamp(1rem,1.32vw,1.35rem)!important;line-height:1.38!important}
.project-mode .slide .sub{font-size:clamp(1.05rem,1.7vw,1.72rem)!important;line-height:1.36!important}
@media(max-width:1320px){
  body:not(.project-mode) .cockpit{grid-template-columns:minmax(0,1fr) 390px!important}
  body.ros-open:not(.project-mode) .cockpit{grid-template-columns:215px minmax(0,1fr) 390px!important}
  body:not(.project-mode) .cue p,body:not(.project-mode) .cue li{font-size:.84rem!important}
}
`;
document.head.appendChild(css);

const UNIVERSAL_BEREADY={
  '1.1':{from:'What makes a state powerful?',a:'Name one way a government can keep order.',b:'Name one way a belief system can shape behavior.',c:'Name one kind of evidence a historian could use.',bridge:'Today we begin by asking how Song China used government, belief, and economic change to hold a complex society together.'},
  '1.2':{from:'Bring Topic 1.1 forward.',a:'How did Song China use bureaucracy to maintain power?',b:'How did belief or education support authority in East Asia?',c:'What changed when trade and production expanded?',bridge:'Now move from East Asia to Dar al-Islam: another region where belief, state power, and knowledge systems shaped society.'},
  '1.3':{from:'Bring Topic 1.2 forward.',a:'How did Islam shape society in Dar al-Islam?',b:'What happened when the Abbasid Caliphate fragmented?',c:'Why did scholars and merchants matter?',bridge:'Use that pattern to examine South and Southeast Asia, where Hinduism, Buddhism, and Islam interacted with state building.'},
  '1.4':{from:'Bring Topic 1.3 forward.',a:'How did belief systems shape South or Southeast Asian societies?',b:'Name one state-building method from South or Southeast Asia.',c:'What role did trade or geography play?',bridge:'Now shift to the Americas and ask how states developed without copying Afro-Eurasian patterns.'},
  '1.5':{from:'Bring Topic 1.4 forward.',a:'Name one American state system and how it held power.',b:'What role did tribute, labor, roads, or cities play?',c:'How did environment shape state development?',bridge:'Use those same questions in Africa, where trade, religion, and geography shaped different state systems.'},
  '1.6':{from:'Bring Topic 1.5 forward.',a:'How did trade support an African state?',b:'How did religion strengthen political authority?',c:'How did geography shape state power?',bridge:'Now compare that with Europe, where Christianity, agriculture, and decentralization shaped a very different political world.'},
  '1.7':{from:'Unit 1 retrieval.',a:'Song China: one method of maintaining state power.',b:'Americas or Africa: one method used by a state.',c:'Europe: one feature that limited centralization.',bridge:'Today the work is comparison: explain similarities and differences in state formation rather than reciting regions separately.'},
  '2.1':{from:'Bring Unit 1 into Unit 2.',a:'Name one powerful state or city from Unit 1.',b:'Name one good, technology, or idea that could travel across regions.',c:'What makes long-distance exchange difficult?',bridge:'Unit 2 asks how older regional worlds became more connected through trade networks.'},
  '2.2':{from:'Bring Topic 2.1 forward.',a:'What helped the Silk Roads grow after 1200?',b:'Name one commercial or transportation practice that supported trade.',c:'Why did merchants need protection and predictable routes?',bridge:'Now ask how Mongol conquest changed the conditions for trade and communication across Eurasia.'},
  '2.3':{from:'Bring Topic 2.2 forward.',a:'How did empire expansion affect trade and communication?',b:'What does Pax Mongolica show about security and exchange?',c:'What kinds of knowledge or technology moved across networks?',bridge:'Now shift from overland empire routes to a maritime system shaped by ships, port cities, and monsoon winds.'},
  '2.4':{from:'Bring Topic 2.3 forward.',a:'How did environmental knowledge make Indian Ocean trade possible?',b:'What technologies helped merchants move across water?',c:'How did trade support port cities or states?',bridge:'Now move from monsoon water routes to desert land routes: different environment, same need to solve movement and profit.'},
  '2.5':{from:'Bring Topics 2.1-2.4 forward.',a:'Name one trade network that expanded after 1200.',b:'What moved besides goods?',c:'How could merchants or travelers change local cultures?',bridge:'Today we focus on the cultural consequences of connectivity: what societies learned, adopted, adapted, and remembered.'},
  '2.6':{from:'Bring Topic 2.5 forward.',a:'Name one cultural or technological transfer from trade networks.',b:'Why do networks move more than merchants intend?',c:'What living things can move through the same routes as goods?',bridge:'Today the same connectivity becomes environmental: networks can move crops that feed people and pathogens that kill them.'},
  '2.7':{from:'Bring all Unit 2 networks forward.',a:'Silk Roads: what made the overland network grow?',b:'Indian Ocean: what made the maritime network grow?',c:'Trans-Saharan: what made the desert network grow?',bridge:'Now compare the networks: same broad process of exchange, different environments, technologies, goods, and consequences.'}
};

function topicKey(T){
  const raw=(T&&T.meta&&(T.meta.topic||T.meta.title))||'';
  const m=String(raw).match(/\b(\d+\.\d+)\b/);
  return m?m[1]:'';
}
function hasBeReady(T){
  return Array.isArray(T&&T.slides)&&T.slides.some(s=>{
    const text=((s.phase||'')+' '+(s.eyebrow||'')+' '+(s.title||'')).toLowerCase();
    return text.includes('beready')||s.phase==='ready'||s.id==='beready'||s.id==='ready';
  });
}
function beReadySlide(key){
  const b=UNIVERSAL_BEREADY[key];
  if(!b)return null;
  return {
    id:'beready',phase:'ready',kind:'process',eyebrow:'BeReady · 4 Minutes',title:'Retrieve, then bridge.',subtitle:b.from,
    steps:[
      {label:'1',text:b.a},
      {label:'2',text:b.b},
      {label:'3',text:b.c},
      {label:'BRIDGE',text:b.bridge}
    ],
    footer:'No notes for the first 60 seconds. Use the bridge to enter today’s problem.',
    notes:{minutes:4,land:['Keep this fast. Students retrieve first, then the bridge connects prior learning to today’s historical problem.','Do not turn BeReady into a preview lecture.'],story:b.bridge,ask:'Which prior idea helps us understand today’s topic?',listenFor:'Accurate retrieval plus one usable bridge into the new problem.',ap:'Retrieval + contextualization before new instruction.'}
  };
}
function installUniversalBeReady(){
  const T=window.BEHISTORICAL_TEACHING;
  if(!T||!Array.isArray(T.slides)||hasBeReady(T))return;
  const key=topicKey(T);
  const slide=beReadySlide(key);
  if(!slide)return;
  const insertAt=T.slides.findIndex(s=>s.phase!=='preflight')+1;
  const idx=insertAt>0?insertAt:0;
  T.slides.splice(idx,0,slide);
  if(Array.isArray(T.flow)){
    T.flow.forEach(item=>{if(typeof item.slide==='number'&&item.slide>=idx)item.slide+=1;});
    const flowIndex=T.flow.findIndex(item=>typeof item.slide==='number'&&item.slide>=idx);
    const entry={id:'beready',label:'BeReady',range:'4 min',slide:idx};
    if(flowIndex>=0)T.flow.splice(flowIndex,0,entry);else T.flow.unshift(entry);
  }
}

function installRunOfShowToggle(){
  const bar=document.querySelector('.appbar');
  if(!bar||document.getElementById('runOfShowToggle'))return;
  const btn=document.createElement('button');
  btn.className='btn';
  btn.id='runOfShowToggle';
  btn.type='button';
  btn.textContent='Run of Show';
  btn.setAttribute('aria-pressed','false');
  const anchor=document.getElementById('briefingBtn');
  if(anchor)bar.insertBefore(btn,anchor);else bar.appendChild(btn);
  btn.addEventListener('click',()=>{
    const open=document.body.classList.toggle('ros-open');
    btn.textContent=open?'Hide Run of Show':'Run of Show';
    btn.setAttribute('aria-pressed',String(open));
  });
}

installUniversalBeReady();
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installRunOfShowToggle);
else installRunOfShowToggle();
})();
