(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const ROOT='../assets/images/topics/2-2/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
const visual=(name,alt,credit)=>({url:assetPath(name),alt,credit:credit||'',localAsset:true});
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));

const open=T.slides.find(s=>s.phase==='open'&&s.kind==='hero');
if(open){
  open.visual=visual('2.2 - Steppes of Asia.jpg','Wide view of the Asian steppe used to frame Mongol mobility and scale','Topic 2.2 classroom visual · Steppes of Asia');
  open.notes=open.notes||{};
  open.notes.land=[
    'Topic 2.1 showed why Silk Road exchange could grow. Topic 2.2 asks what happens when Mongol rulers control enormous portions of those overland routes.',
    'Use the steppe landscape to establish the environmental scale of mobility before introducing the political and military systems that made conquest possible.'
  ];
}

const geo=byTitle('One empire becomes four Mongol states');
if(geo){
  geo.kind='map';
  geo.mapLabel='SUCCESSOR KHANATES · c. 1300';
  geo.visual=visual('2.2 - Map of the Khanates.png','Map of the four major Mongol successor khanates','Topic 2.2 classroom map · successor khanates');
}

const organization=byTitle('Temüjin turns steppe warriors into a system');
if(organization){
  organization.kind='hero';
  organization.visual=visual('2.2 - Chinggis Museum.jpg','Chinggis Khan museum visual used to frame Mongol military organization','Topic 2.2 classroom visual · Chinggis Museum');
  organization.footer='';
  organization.position='right';
}

const mobility=byTitle('Mobility is a weapon');
if(mobility){
  mobility.kind='hero';
  mobility.visual=visual('2.2 - Cinematic Mongol Archers.png','Historical reconstruction of coordinated Mongol mounted archers on the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  mobility.footer='';
  mobility.position='right';
}

const siege=byTitle('The Mongols borrowed what worked');
if(siege){
  siege.kind='hero';
  siege.position='top';
  siege.visual=visual('2.2 - Cinematic Mongol city gate.png','Historical reconstruction of Mongol forces confronting a fortified city','HISTORICAL RECONSTRUCTION — AI GENERATED');
  siege.notes=siege.notes||{};
  siege.notes.land=[
    'This is an interpretive historical reconstruction, not primary-source evidence.',
    'Steppe cavalry alone could not reliably take fortified cities.',
    'The Mongols incorporated siege specialists and techniques from conquered or recruited peoples. Use the visual to make adaptation visible: mobility got them to the city; borrowed expertise helped them break the walls.'
  ];
}

const regionalRule=byTitle('Regional rule solves distance');
if(regionalRule){
  regionalRule.visual=visual('2.2 - Map of the Khanates.png','Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty','Topic 2.2 classroom map · successor khanates');
}

const yam=byTitle('Information moves at horse speed');
if(yam){
  yam.kind='hero';
  yam.visual=visual('2.2 - Mongol Yam Relay Across the Steppe.png','Historical reconstruction of the Mongol Yam relay system across the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  yam.footer='';
}

const pax=byTitle('Protection changes movement');
if(pax){
  pax.kind='hero';
  pax.position='bottom';
  pax.visual=visual('2.2 - Cinematic Mongol Caravan.png','Historical reconstruction of a protected caravan moving through Mongol-controlled territory','HISTORICAL RECONSTRUCTION — AI GENERATED');
}

const paradox=byTitle('The same empire can destroy cities and connect continents');
if(paradox){
  paradox.kind='hero';
  paradox.position='lower-left';
  paradox.visual=visual('2.2 - Chinggis Museum Donoho.jpg','Chinggis Khan museum image used as the background for the Mongol paradox','Topic 2.2 classroom visual · Chinggis Museum Donoho');
}
})();
