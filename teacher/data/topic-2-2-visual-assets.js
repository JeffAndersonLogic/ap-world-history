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
}

const mobility=byTitle('Mobility is a weapon');
if(mobility){
  mobility.kind='hero';
  mobility.visual=visual('2.2 - Cinematic Mongol Archers.png','Historical reconstruction of coordinated Mongol mounted archers on the steppe','HISTORICAL RECONSTRUCTION — AI GENERATED');
  mobility.footer='';
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

const paradox=byTitle('The same empire can destroy cities and connect continents');
if(paradox){
  paradox.kind='hero';
  paradox.visual=visual('2.2 - Chinggis Museum Donoho.jpg','Chinggis Khan museum image used as the background for the Mongol paradox','Topic 2.2 classroom visual · Chinggis Museum Donoho');
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

/* Slide 1: keep the title in the upper-left of the image. */
.hero-slide:has(img[src*="Steppes%20of%20Asia"]) .copy{left:4.2%!important;top:5.2%!important;bottom:auto!important;width:min(52%,780px)!important}
.hero-slide:has(img[src*="Steppes%20of%20Asia"]) .veil{background:linear-gradient(135deg,rgba(3,5,6,.90) 0%,rgba(3,5,6,.63) 35%,rgba(3,5,6,.14) 66%,rgba(3,5,6,.06) 100%)!important}

/* Slide 6: the archers belong to mobility. Put the text on the right so the far-left archer stays visible. */
.hero-slide:has(img[src*="Cinematic%20Mongol%20Archers"]) .copy{left:auto!important;right:4%!important;bottom:11%!important;width:min(41%,690px)!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Archers"]) .veil{background:linear-gradient(270deg,rgba(3,5,6,.94) 0%,rgba(3,5,6,.76) 31%,rgba(3,5,6,.24) 58%,rgba(3,5,6,.03) 78%)!important}

/* Slide 7: title band above the full visual rather than covering the scene. */
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .media{top:30%!important;bottom:0!important;left:0!important;right:0!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy{left:0!important;right:0!important;top:0!important;bottom:auto!important;width:auto!important;min-height:30%!important;box-sizing:border-box!important;padding:3% 4.2% 2.2%!important;background:#07090a!important;border-left:0!important;border-bottom:1px solid rgba(201,164,106,.55)!important;backdrop-filter:none!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy h2{font-size:clamp(2.2rem,4vw,4.8rem)!important;max-width:none!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy .sub{margin-top:.55rem!important;max-width:66rem!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .veil{display:none!important}

/* Slide 16: reserve the bottom quarter for the teaching text and leave the upper 75% visual-first. */
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy{left:0!important;right:0!important;bottom:0!important;top:auto!important;width:auto!important;height:25%!important;box-sizing:border-box!important;padding:1.25% 4%!important;display:grid!important;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)!important;grid-template-rows:auto 1fr!important;column-gap:3%!important;align-content:center!important;background:rgba(4,6,7,.84)!important;border-left:0!important;border-top:2px solid rgba(201,164,106,.75)!important;backdrop-filter:blur(3px)!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy .slide-kicker{grid-column:1 / -1!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy h2{font-size:clamp(1.55rem,2.65vw,3.3rem)!important;line-height:1!important;margin:.2rem 0 0!important;align-self:center!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy .sub{font-size:clamp(.9rem,1.3vw,1.35rem)!important;line-height:1.25!important;margin:.2rem 0 0!important;align-self:center!important;max-width:none!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .veil{background:linear-gradient(0deg,rgba(3,5,6,.22),rgba(3,5,6,.04) 60%,transparent)!important}

/* Slide 17: use the Donoho museum image as the paradox background. */
.hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy{width:min(52%,860px)!important}
.hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .veil{background:linear-gradient(90deg,rgba(3,5,6,.90) 0%,rgba(3,5,6,.68) 39%,rgba(3,5,6,.20) 68%,rgba(3,5,6,.06) 100%)!important}

.project-mode .hero-slide:has(img[src*="assets/images/topics/2-2/"]) .copy{width:min(50%,900px);padding:1.5rem 1.7rem}
.project-mode .hero-slide:has(img[src*="assets/images/topics/2-2/"]) h2{font-size:clamp(4rem,5.4vw,6.4rem)}
.project-mode .hero-slide:has(img[src*="Steppes%20of%20Asia"]) .copy{left:4%!important;top:4.5%!important;bottom:auto!important;width:min(48%,900px)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Archers"]) .copy{left:auto!important;right:4%!important;bottom:10%!important;width:min(40%,760px)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy{left:0!important;right:0!important;top:0!important;bottom:auto!important;width:auto!important;padding:2.5vh 4vw 2vh!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy h2{font-size:clamp(3.2rem,4.8vw,5.8rem)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy{left:0!important;right:0!important;bottom:0!important;top:auto!important;width:auto!important;height:25%!important;padding:1.4vh 4vw!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy h2{font-size:clamp(2.6rem,3.5vw,4.2rem)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy .sub{font-size:clamp(1.3rem,1.65vw,1.9rem)!important}
`;
document.head.appendChild(css);
})();
