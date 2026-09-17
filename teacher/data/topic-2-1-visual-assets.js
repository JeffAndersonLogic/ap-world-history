(function(){
'use strict';
const ROOT='../assets/images/topics/2-1/';
const assetPath=name=>ROOT+name.split('/').map(encodeURIComponent).join('/');
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
.node-field .city-node:first-child{background-image:linear-gradient(180deg,rgba(5,7,8,.16),rgba(5,7,8,.78)),url('${assetPath('2.1 - Samarkand.jpg')}')!important}
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
