(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const ROOT='../assets/images/topics/2-1/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
const visual=(name,alt,credit)=>({url:assetPath(name),alt,credit:credit||'',localAsset:true});
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));

const open=T.slides.find(s=>s.phase==='launch'&&s.kind==='hero');
if(open){
  open.visual=visual('2.1 - Silk Road Map 2.jpg','Silk Road network map used as a cinematic opening visual','Topic 2.1 classroom visual');
  open.notes=open.notes||{};
  open.notes.land=[
    'Unit 1 focused on regional states. Unit 2 changes the scale to connections among those regions.',
    'Use the map as atmosphere first, not as a detail-reading exercise. The Silk Roads were a network of routes, cities, stopping points, commercial systems, and political jurisdictions.',
    'Today’s job is to explain why exchange expanded after 1200, not to inventory everything that ever moved along the routes.'
  ];
}

const demand=byTitle('Luxury goods made distance worth it');
if(demand){
  demand.visual=visual('2.1 - Porcelain silk luxury goods.jpeg','Porcelain and silk representing high-value luxury goods traded across Afro-Eurasia','Topic 2.1 classroom visual · Luxury goods');
}

const caravanserai=byTitle('Caravanserai made distance manageable');
if(caravanserai){
  caravanserai.kind='hero';
  caravanserai.position='right';
  caravanserai.visual=visual('2.1 - Caravanserai Reconstruction.png','Historical reconstruction of a caravanserai serving long-distance merchants','Historical Reconstruction - AI Generated');
  caravanserai.footer='Infrastructure reduced the cost and risk of distance.';
  caravanserai.notes=caravanserai.notes||{};
  caravanserai.notes.land=[
    'This is an interpretive historical reconstruction, not a primary-source image.',
    'Use the visual to identify the problems caravanserais solved: food, water, shelter, security, animal care, storage, markets, and information exchange.',
    'The historical significance is not simply “roadside hotel.” Infrastructure lowers travel risk and transaction costs so long journeys become manageable stages.',
    'States and local rulers had an incentive to support trade infrastructure because commerce could be taxed.'
  ];
  caravanserai.notes.avoid='Do not present the reconstruction as a surviving photograph or primary source.';
}

const finance=byTitle('Merchants also needed financial systems');
if(finance){
  finance.footer='Commercial tools reduced financial risk; political stability could reduce route risk.';
}

const causal=byTitle('Demand alone is not enough');
if(causal&&Array.isArray(causal.steps)){
  const solution=causal.steps.find(step=>step.label==='SOLUTION');
  if(solution) solution.text='Infrastructure + credit + political stability';
  causal.notes=causal.notes||{};
  causal.notes.land=[
    'This is the moment to restate the big picture before moving into effects.',
    'Students should understand that growth required demand and practical trade systems.',
    'Add one supporting condition without turning 2.1 into the Mongol lesson: relative political stability and state protection could lower merchant risk. Topic 2.2 will show how Mongol rule intensified that condition across large stretches of Eurasia.'
  ];
}

const cities=byTitle('Trade networks create powerful nodes');
if(cities){
  cities.visual=visual('2.1 - Samarkand.jpg','Samarkand as a major Silk Road trading city','Topic 2.1 classroom visual · Samarkand');
}

const close=T.slides.find(s=>s.phase==='close');
if(close){
  close.visual=visual('2.1 - Kashgar.jpg','Kashgar as a Silk Road network city','Topic 2.1 classroom visual · Kashgar');
}
})();