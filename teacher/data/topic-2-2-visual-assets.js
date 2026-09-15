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
if(geo&&Array.isArray(geo.maps)&&geo.maps[1]){
  geo.maps[1].visual=visual('2.2 - Map of the Khanates.png','Map of the four major Mongol successor khanates','Topic 2.2 classroom map · successor khanates');
}

const organization=byTitle('Temüjin turns steppe warriors into a system');
if(organization){
  organization.kind='hero';
  organization.visual=visual('2.2 - Cinematic Mongol Archers.png','Historical reconstruction of coordinated Mongol mounted archers on the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  organization.footer='';
}

const siege=byTitle('The Mongols borrowed what worked');
if(siege){
  siege.kind='hero';
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
  pax.visual=visual('2.2 - Cinematic Mongol Caravan.png','Historical reconstruction of a protected caravan moving through Mongol-controlled territory','HISTORICAL RECONSTRUCTION — AI GENERATED');
}

const css=document.createElement('style');
css.id='topic22-visual-assets';
css.textContent=`
.hero-slide:has(img[src*="assets/images/topics/2-2/"]) .media{background:#030404}
.hero-slide:has(img[src*="assets/images/topics/2-2/"]) img{object-fit:contain!important;object-position:center center!important;background:#030404}
.hero-slide:has(img[src*="assets/images/topics/2-2/"]) .veil{background:linear-gradient(90deg,rgba(3,5,6,.90) 0%,rgba(3,5,6,.66) 38%,rgba(3,5,6,.25) 62%,rgba(3,5,6,.08) 100%),linear-gradient(0deg,rgba(3,5,6,.72),transparent 42%)}
.hero-slide:has(img[src*="assets/images/topics/2-2/"]) .copy{width:min(54%,820px);padding:1.2rem 1.35rem;background:rgba(4,6,7,.38);border-left:3px solid var(--gold);backdrop-filter:blur(3px);text-shadow:0 2px 18px rgba(0,0,0,.72)}
.hero-slide:has(img[src*="assets/images/topics/2-2/"]) .credit-row{max-width:52%;padding:.5rem .7rem;border:1px solid rgba(201,164,106,.45);background:rgba(4,6,7,.78);backdrop-filter:blur(3px)}
.hero-slide:has(img[src*="assets/images/topics/2-2/"]) .credit-row .slide-credit{color:#efe4d0;font-size:clamp(.52rem,.64vw,.7rem);letter-spacing:.06em}
.map-canvas,.compare-image{overflow:hidden!important}
.map-canvas img[src*="Map%20of%20the%20Khanates"],.compare-image img[src*="Map%20of%20the%20Khanates"]{width:auto!important;height:auto!important;max-width:100%!important;max-height:100%!important;min-width:0!important;min-height:0!important;object-fit:contain!important;object-position:center center!important;display:block!important}
.project-mode .hero-slide:has(img[src*="assets/images/topics/2-2/"]) .copy{width:min(50%,900px);padding:1.5rem 1.7rem}
.project-mode .hero-slide:has(img[src*="assets/images/topics/2-2/"]) h2{font-size:clamp(4rem,5.4vw,6.4rem)}
`;
document.head.appendChild(css);
})();
