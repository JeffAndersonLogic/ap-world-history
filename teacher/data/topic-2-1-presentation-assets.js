(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const ROOT='../assets/images/topics/2-1/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
const visual=(name,alt,credit)=>({url:assetPath(name),alt,credit:credit||'',localAsset:true});
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));

const open=T.slides.find(s=>s.phase==='open');
if(open){
  open.visual=visual('2.1 - Silk Road Map 2.jpg','Silk Road network map used as a cinematic opening visual','Topic 2.1 classroom visual');
  open.notes=open.notes||{};
  open.notes.land=[
    'Unit 1 focused on regional states. Unit 2 changes the scale to connections among those regions.',
    'Use the map as atmosphere first, not as a detail-reading exercise. The Silk Roads were a network of routes, markets, stopping points, states, and intermediaries.'
  ];
}

const networkMap=byTitle('East Asia');
if(networkMap){
  networkMap.visual=visual('2.1 - Silk Road Map.png','Detailed map of the Silk Road network across Afro-Eurasia','Topic 2.1 classroom map');
}

const caravanserai=byTitle('Distance needs infrastructure');
if(caravanserai){
  caravanserai.kind='hero';
  caravanserai.visual=visual('2.1 - Caravanserai Reconstruction.png','Historical reconstruction of a caravanserai serving long-distance merchants','HISTORICAL RECONSTRUCTION — AI GENERATED');
  caravanserai.footer='';
  caravanserai.notes=caravanserai.notes||{};
  caravanserai.notes.land=[
    'This is an interpretive historical reconstruction, not a primary-source image.',
    'Use the visual to identify the problems caravanserais solved: food, water, shelter, security, animal care, storage, and information exchange.',
    'The historical significance is not simply “roadside hotel.” Infrastructure lowers travel risk and transaction costs so long journeys become manageable stages.',
    'States and local rulers had an incentive to support trade infrastructure because commerce could be taxed.'
  ];
  caravanserai.notes.avoid='Do not present the reconstruction as a surviving photograph or primary source.';
}

const safeTrade=byTitle('Safe trade is profitable');
if(safeTrade){
  safeTrade.kind='image';
  safeTrade.visual=visual('2.1 - Chinese Paper Money.jpg','Chinese paper money used as material evidence of commercial practices that supported exchange','Topic 2.1 classroom artifact visual');
  safeTrade.footer='Commercial tools reduce friction; political protection reduces risk.';
}

const close=T.slides.find(s=>s.phase==='close');
if(close){
  close.visual=visual('2.1 - Kashgar.jpg','Kashgar as a Silk Road network city','Topic 2.1 classroom visual · Kashgar');
}
})();
