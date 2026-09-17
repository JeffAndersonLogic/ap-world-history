(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const ROOT='../assets/images/topics/2-2/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
const visual=(name,alt,credit)=>({url:assetPath(name),alt,credit:credit||'',localAsset:true});
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));

// Topic 2.2 now follows the same instructional architecture as 2.1:
// teacher preflight -> topic argument -> three big rocks -> evidence/mechanisms -> AP synthesis.
T.meta=T.meta||{};
T.meta.subtitle='State change + connection + transfer explain Mongol significance.';
T.meta.endTarget='Students can answer the Topic 2.2 theme in three moves: explain Mongol state change, explain how Mongol rule changed conditions on existing exchange networks, and explain how intensified contact transferred knowledge across Eurasia.';

if(!T.slides.some(s=>s.phase==='preflight')){
  T.slides.unshift({
    phase:'preflight',
    kind:'question',
    eyebrow:'Teacher Preflight · 2 Minutes',
    title:'Do not teach the Mongols as a conquest story.',
    subtitle:'Teach what happens when a vast empire changes the political conditions connecting Eurasia.',
    notes:{
      minutes:2,
      land:[
        'The story today is not: the Mongols were excellent conquerors.',
        'The story is: Mongol expansion changed states, altered the political conditions on older trade networks, and intensified cross-cultural transfer.',
        'Use conquest only long enough to explain how the empire was built. Then pivot to the larger AP significance: state change, connection, and transfer.',
        'Everything today must serve three Big Rocks: STATE CHANGE, CONNECTION, TRANSFER.'
      ],
      ask:'What is the single historical significance argument I am proving today?',
      listenFor:'Mongol expansion changed states and the conditions of Eurasian connection, which increased movement and transfer.',
      avoid:'Do not let cavalry, violence, or Genghis Khan become the whole lesson.'
    }
  });

  if(Array.isArray(T.flow)){
    T.flow=T.flow.map(item=>({...item,slide:Number.isFinite(item.slide)?item.slide+1:item.slide}));
    T.flow.unshift({
      id:'preflight',
      label:'Teacher Preflight',
      range:'Before class',
      minutes:2,
      teacher:'Read the brief and lock onto the three-part significance argument.',
      students:'Not projected.',
      slide:0
    });
  }
}

const open=T.slides.find(s=>s.phase==='open'&&s.kind==='hero');
if(open){
  open.position='upper-left';
  open.subtitle='How did Mongol expansion change states, exchange, and the movement of knowledge across Eurasia?';
  open.visual=visual('2.2 - Steppes of Asia.jpg','Wide view of the Asian steppe used to frame Mongol mobility and scale','Topic 2.2 classroom visual · Steppes of Asia');
  open.notes=open.notes||{};
  open.notes.land=[
    'Give students the answer frame before the details: STATE CHANGE, CONNECTION, TRANSFER.',
    'Topic 2.1 showed why Silk Road exchange could grow. Topic 2.2 asks how Mongol expansion changed political conditions across much of Eurasia.',
    'Use conquest as the beginning of the explanation, not the destination.'
  ];
  open.notes.ask='What could one enormous empire change besides borders?';
  open.notes.listenFor='Government, communication, trade, travel, and movement of knowledge.';
}

const whole=byTitle('Four moves. One connected story');
if(whole){
  whole.kind='grid';
  whole.eyebrow='What Students Must Know';
  whole.title='Three Big Rocks';
  whole.subtitle='Every example in Topic 2.2 belongs to one of these ideas.';
  delete whole.steps;
  whole.cards=[
    {title:'1 · STATE CHANGE',text:'Mongols build a vast empire, then unified political control fragments into regional khanates.'},
    {title:'2 · CONNECTION',text:'Mongol rule changes political conditions on exchange networks that already existed.'},
    {title:'3 · TRANSFER',text:'Greater contact moves knowledge and cultural practices across regions.'},
    {title:'AP SKILL',text:'Explain the mechanism and significance, not just the Mongol fact.'}
  ];
  whole.footer='State change -> connection -> transfer = the Topic 2.2 significance argument.';
  whole.notes=whole.notes||{};
  whole.notes.land=[
    'These are the three required dimensions of the lesson.',
    'Return to this slide mentally after each section: what changed in states, what changed in connection, and what moved because of that connection?'
  ];
  whole.notes.ask='Which Big Rock is easiest to lose if we tell only the conquest story?';
  whole.notes.listenFor='Connection or transfer.';
}

const geo=byTitle('One empire becomes four Mongol states');
if(geo){
  geo.kind='map';
  geo.eyebrow='Big Rock 1 · State Change';
  geo.mapLabel='SUCCESSOR KHANATES · c. 1300';
  geo.visual=visual('2.2 - Map of the Khanates.png','Map of the four major Mongol successor khanates','Topic 2.2 classroom map · successor khanates');
}

const organization=byTitle('Temüjin turns steppe warriors into a system');
if(organization){
  organization.kind='hero';
  organization.eyebrow='Big Rock 1 · State Change · Build';
  organization.visual=visual('2.2 - Chinggis Museum.jpg','Chinggis Khan museum visual used to frame Mongol military organization','Topic 2.2 classroom visual · Chinggis Museum');
  organization.footer='Mechanism: organization makes conquest scalable.';
  organization.position='right';
}

const mobility=byTitle('Mobility is a weapon');
if(mobility){
  mobility.kind='hero';
  mobility.eyebrow='Big Rock 1 · State Change · Build';
  mobility.visual=visual('2.2 - Cinematic Mongol Archers.png','Historical reconstruction of coordinated Mongol mounted archers on the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  mobility.footer='Mechanism: mobility increases speed, surprise, and operational range.';
  mobility.position='right';
}

const siege=byTitle('The Mongols borrowed what worked');
if(siege){
  siege.kind='hero';
  siege.eyebrow='Big Rock 1 · State Change · Build';
  siege.position='top';
  siege.visual=visual('2.2 - Cinematic Mongol city gate.png','Historical reconstruction of Mongol forces confronting a fortified city','HISTORICAL RECONSTRUCTION — AI GENERATED');
  siege.footer='Mechanism: adaptation lets a steppe army conquer fortified cities.';
  siege.notes=siege.notes||{};
  siege.notes.land=[
    'This is an interpretive historical reconstruction, not primary-source evidence.',
    'Steppe cavalry alone could not reliably take fortified cities.',
    'The Mongols incorporated siege specialists and techniques from conquered or recruited peoples. Use the visual to make adaptation visible: mobility got them to the city; borrowed expertise helped them break the walls.',
    'Move quickly here. Students need the mechanism of conquest, not a catalog of battles.'
  ];
}

const regionalRule=byTitle('Regional rule solves distance');
if(regionalRule){
  regionalRule.eyebrow='Big Rock 1 · State Change · Fragment';
  regionalRule.visual=visual('2.2 - Map of the Khanates.png','Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty','Topic 2.2 classroom map · successor khanates');
}

const yam=byTitle('Information moves at horse speed');
if(yam){
  yam.kind='hero';
  yam.eyebrow='Bridge · State Power Becomes Connection';
  yam.visual=visual('2.2 - Mongol Yam Relay Across the Steppe.png','Historical reconstruction of the Mongol Yam relay system across the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  yam.footer='The same infrastructure that helps rule an empire also helps connect it.';
}

const checkpoint1=byTitle('How did the Mongols build power');
if(checkpoint1){
  checkpoint1.eyebrow='Big Rock 1 · Checkpoint';
  checkpoint1.title='Explain state change in two mechanisms.';
  checkpoint1.subtitle='How was the empire built, and why did unified control weaken?';
}

const routes=byTitle('The routes were older. The political conditions changed');
if(routes){
  routes.eyebrow='Big Rock 2 · Connection · CCOT';
  routes.footer='Continuity: routes existed · Change: political integration + communication + protection';
}

const pax=byTitle('Protection changes movement');
if(pax){
  pax.kind='hero';
  pax.eyebrow='Big Rock 2 · Connection · Mechanism';
  pax.position='bottom';
  pax.visual=visual('2.2 - Cinematic Mongol Caravan.png','Historical reconstruction of a protected caravan moving through Mongol-controlled territory','HISTORICAL RECONSTRUCTION — AI GENERATED');
}

const transfer=byTitle('Connection moves knowledge');
if(transfer){
  transfer.eyebrow='Big Rock 3 · Transfer · CED Must-Know';
  transfer.footer='Medicine · numbering systems · Uyghur script = evidence that connection moved knowledge.';
}

const transferMechanism=byTitle('Contact -> Borrowing -> Adaptation -> Wider Reach');
if(transferMechanism){
  transferMechanism.eyebrow='Big Rock 3 · Transfer · Mechanism';
}

const skill=byTitle('Baseline -> Change -> Evidence -> Significance');
if(skill){
  skill.eyebrow='AP Synthesis · Answer the Topic Theme';
  skill.title='State Change -> Connection -> Transfer -> Significance';
  skill.steps=[
    {label:'STATE CHANGE',text:'Build a vast empire; unified rule fragments'},
    {label:'CONNECTION',text:'Political conditions on older routes change'},
    {label:'TRANSFER',text:'Knowledge crosses cultural boundaries'},
    {label:'SIGNIFICANCE',text:'Eurasia becomes more politically and culturally interconnected'}
  ];
}

const finalCheck=byTitle('Explain Mongol significance in three moves');
if(finalCheck){
  finalCheck.eyebrow='Final Checkpoint · Topic Theme';
  finalCheck.title='Answer Topic 2.2 in three moves.';
  finalCheck.subtitle='State change · connection · transfer';
}

const landing=byTitle('Empire changed the conditions of connection');
if(landing){
  landing.eyebrow='Topic 2.2 · Answer';
  landing.title='Mongol significance was bigger than conquest.';
  landing.subtitle='Mongol expansion changed states, altered political conditions on older exchange networks, and intensified cross-cultural transfer across Eurasia.';
}

const paradox=byTitle('The same empire can destroy cities and connect continents');
if(paradox){
  paradox.kind='hero';
  paradox.position='lower-left';
  paradox.visual=visual('2.2 - Chinggis Museum Donoho.jpg','Chinggis Khan museum image used as the background for the Mongol paradox','Topic 2.2 classroom visual · Chinggis Museum Donoho');
}

if(Array.isArray(T.flow)){
  const patchFlow=(id,patch)=>{
    const item=T.flow.find(x=>x.id===id);
    if(item)Object.assign(item,patch);
  };
  patchFlow('open',{label:'Launch Theme + Big Rocks',range:'0–8',minutes:8,teacher:'Give the topic answer frame first: state change, connection, transfer.',students:'Write the three-part significance frame.'});
  patchFlow('map',{label:'Big Rock 1: State Change',range:'8–13',minutes:5,teacher:'Use scale and successor khanates to frame build + fragmentation.',students:'Identify the state-change problem.'});
  patchFlow('first10',{range:'13–23',minutes:10,teacher:'Read only for evidence that fits the three Big Rocks.',students:'Sort evidence into state change, connection, or transfer.'});
  patchFlow('conquest',{label:'State Change: Build',range:'23–34',minutes:11,teacher:'Compress conquest into three mechanisms: organization, mobility, adaptation.',students:'Explain how each mechanism solved a conquest problem.'});
  patchFlow('govern',{label:'State Change: Govern + Fragment',range:'34–45',minutes:11,teacher:'Explain governance, regionalization, and why unified control weakened.',students:'Connect scale and succession to fragmentation.'});
  patchFlow('check1',{label:'Big Rock 1 Check',range:'45–50',minutes:5,teacher:'Require one build mechanism and one fragmentation mechanism.',students:'Explain state change in two mechanisms.'});
  patchFlow('exchange',{label:'Big Rock 2: Connection',range:'50–63',minutes:13,teacher:'Teach continuity of routes and change in political conditions.',students:'Explain how communication and protection affected movement.'});
  patchFlow('transfer',{label:'Big Rock 3: Transfer',range:'63–75',minutes:12,teacher:'Teach all three required CED transfer examples and the contact mechanism.',students:'Explain how connection moves knowledge.'});
  patchFlow('skill',{label:'AP Synthesis',range:'75–84',minutes:9,teacher:'Build the full state change -> connection -> transfer argument.',students:'Write the topic significance chain.'});
  patchFlow('check2',{label:'Answer the Topic Theme',range:'84–88',minutes:4,teacher:'Require all three Big Rocks in a concise response.',students:'Answer Topic 2.2 in three moves.'});
  patchFlow('close',{label:'Landing + Bridge',range:'88–90',minutes:2,teacher:'Land the significance sentence, then bridge to Indian Ocean environmental systems.',students:'Say the Topic 2.2 answer in one sentence.'});
}
})();
