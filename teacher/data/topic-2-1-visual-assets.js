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

const css=document.createElement('style');
css.id='topic21-visual-assets';
css.textContent=`
.hero-slide:has(img[src*="assets/images/topics/2-1/"]) .media{background:#030404}
.hero-slide:has(img[src*="assets/images/topics/2-1/"]) img{object-fit:contain!important;object-position:center center!important;background:#030404}
.hero-slide:has(img[src*="assets/images/topics/2-1/"]) .veil{background:linear-gradient(90deg,rgba(3,5,6,.90) 0%,rgba(3,5,6,.66) 38%,rgba(3,5,6,.26) 62%,rgba(3,5,6,.10) 100%),linear-gradient(0deg,rgba(3,5,6,.72),transparent 42%)}
.hero-slide:has(img[src*="assets/images/topics/2-1/"]) .copy{width:min(54%,820px);padding:1.2rem 1.35rem;background:rgba(4,6,7,.38);border-left:3px solid var(--gold);backdrop-filter:blur(3px);text-shadow:0 2px 18px rgba(0,0,0,.72)}
.hero-slide:has(img[src*="Caravanserai"])::before{content:'HISTORICAL RECONSTRUCTION — AI GENERATED';position:absolute;z-index:5;right:2.2%;top:2.3%;padding:.48rem .65rem;border:1px solid rgba(201,164,106,.78);background:rgba(4,6,7,.82);font:800 clamp(.5rem,.66vw,.72rem) var(--ui);letter-spacing:.09em;color:var(--gold)}
.image-canvas{overflow:hidden!important}
.image-canvas img[src*="assets/images/topics/2-1/"]{width:auto!important;height:auto!important;max-width:100%!important;max-height:100%!important;min-width:0!important;min-height:0!important;object-fit:contain!important;object-position:center center!important;display:block!important}
.node-field .city-node{overflow:hidden!important;background-color:#060808!important;background-repeat:no-repeat!important;background-position:center center!important;background-size:cover!important}
.node-field .city-node:first-child{background-image:linear-gradient(180deg,rgba(5,7,8,.16),rgba(5,7,8,.78)),url('${assetPath('2.1 - Samarkand.webp')}')!important}
.node-field .city-node:nth-child(2){background-image:linear-gradient(180deg,rgba(5,7,8,.16),rgba(5,7,8,.78)),url('${assetPath('2.1 - Kashgar.jpg')}')!important}
.node-field .city-node h3,.node-field .city-node p{position:relative;z-index:2;text-shadow:0 2px 16px rgba(0,0,0,.95)}
.node-field .city-node .dot{position:relative;z-index:2}
.hero-slide:has(img[src*="Kashgar"]) .copy{width:min(40%,620px);padding:1rem 1.15rem}
.hero-slide:has(img[src*="Kashgar"]) h2{font-size:clamp(1.75rem,3vw,3.4rem)}
.hero-slide:has(img[src*="Kashgar"]) .sub{font-size:clamp(.8rem,1.1vw,1.1rem)}
.project-mode .hero-slide:has(img[src*="assets/images/topics/2-1/"]) .copy{width:min(50%,900px);padding:1.5rem 1.7rem}
.project-mode .hero-slide:has(img[src*="assets/images/topics/2-1/"]) h2{font-size:clamp(4rem,5.4vw,6.4rem)}
.project-mode .hero-slide:has(img[src*="Kashgar"]) .copy{width:min(42%,800px);padding:1.3rem 1.5rem}
.project-mode .hero-slide:has(img[src*="Kashgar"]) h2{font-size:clamp(3.2rem,4.4vw,5.2rem)}
.project-mode .hero-slide:has(img[src*="Kashgar"]) .sub{font-size:clamp(1.3rem,1.7vw,2rem)}
`;
document.head.appendChild(css);
})();
