(function(){
'use strict';
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

/* Slide 5: museum stays exposed; teaching copy lives on the right. */
.hero-slide:has(img[src$="Chinggis%20Museum.jpg"]) .copy{left:auto!important;right:4%!important;bottom:10%!important;width:min(42%,700px)!important}
.hero-slide:has(img[src$="Chinggis%20Museum.jpg"]) .veil{background:linear-gradient(270deg,rgba(3,5,6,.94) 0%,rgba(3,5,6,.73) 33%,rgba(3,5,6,.16) 59%,rgba(3,5,6,.02) 78%)!important}

/* Slide 6: mounted archers remain unobstructed on the left. */
.hero-slide:has(img[src*="Cinematic%20Mongol%20Archers"]) .copy{left:auto!important;right:4%!important;bottom:11%!important;width:min(41%,690px)!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Archers"]) .veil{background:linear-gradient(270deg,rgba(3,5,6,.94) 0%,rgba(3,5,6,.76) 31%,rgba(3,5,6,.24) 58%,rgba(3,5,6,.03) 78%)!important}

/* Slide 7: compact title band above the full city-gate image. */
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .media{top:30%!important;bottom:0!important;left:0!important;right:0!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy{left:0!important;right:0!important;top:0!important;bottom:auto!important;width:auto!important;height:30%!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:1.35% 4.2%!important;display:flex!important;flex-direction:column!important;justify-content:center!important;background:#07090a!important;border-left:0!important;border-bottom:1px solid rgba(201,164,106,.55)!important;backdrop-filter:none!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy h2{font-size:clamp(1.55rem,2.5vw,3rem)!important;line-height:.95!important;max-width:none!important;margin:.15rem 0 0!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy .sub{font-size:clamp(.76rem,1.05vw,1.1rem)!important;line-height:1.15!important;margin:.4rem 0 0!important;max-width:70rem!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .veil{display:none!important}

/* Slide 16: teaching copy occupies only the bottom quarter. */
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy{left:0!important;right:0!important;bottom:0!important;top:auto!important;width:auto!important;height:25%!important;box-sizing:border-box!important;padding:1.25% 4%!important;display:grid!important;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)!important;grid-template-rows:auto 1fr!important;column-gap:3%!important;align-content:center!important;background:rgba(4,6,7,.84)!important;border-left:0!important;border-top:2px solid rgba(201,164,106,.75)!important;backdrop-filter:blur(3px)!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy .slide-kicker{grid-column:1 / -1!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy h2{font-size:clamp(1.55rem,2.65vw,3.3rem)!important;line-height:1!important;margin:.2rem 0 0!important;align-self:center!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy .sub{font-size:clamp(.9rem,1.3vw,1.35rem)!important;line-height:1.25!important;margin:.2rem 0 0!important;align-self:center!important;max-width:none!important}
.hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .veil{background:linear-gradient(0deg,rgba(3,5,6,.22),rgba(3,5,6,.04) 60%,transparent)!important}

/* Slide 17: Donoho museum image with restrained lower-left copy. */
.hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy{left:4%!important;right:auto!important;top:auto!important;bottom:6%!important;width:min(43%,680px)!important;padding:1rem 1.1rem!important}
.hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy h2{font-size:clamp(1.7rem,3.05vw,3.7rem)!important;line-height:.97!important}
.hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy .sub{font-size:clamp(.8rem,1.15vw,1.2rem)!important;margin-top:.55rem!important}
.hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .veil{background:linear-gradient(90deg,rgba(3,5,6,.87) 0%,rgba(3,5,6,.56) 36%,rgba(3,5,6,.14) 66%,rgba(3,5,6,.04) 100%)!important}

.project-mode .hero-slide:has(img[src*="assets/images/topics/2-2/"]) .copy{width:min(50%,900px);padding:1.5rem 1.7rem}
.project-mode .hero-slide:has(img[src*="assets/images/topics/2-2/"]) h2{font-size:clamp(4rem,5.4vw,6.4rem)}
.project-mode .hero-slide:has(img[src*="Steppes%20of%20Asia"]) .copy{left:4%!important;top:4.5%!important;bottom:auto!important;width:min(48%,900px)!important}
.project-mode .hero-slide:has(img[src$="Chinggis%20Museum.jpg"]) .copy{left:auto!important;right:4%!important;bottom:9%!important;width:min(40%,780px)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Archers"]) .copy{left:auto!important;right:4%!important;bottom:10%!important;width:min(40%,760px)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy{left:0!important;right:0!important;top:0!important;bottom:auto!important;width:auto!important;height:30%!important;min-height:0!important;padding:1.4vh 4vw!important;display:flex!important;flex-direction:column!important;justify-content:center!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy h2{font-size:clamp(3rem,4.15vw,5rem)!important;line-height:.95!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20city%20gate"]) .copy .sub{font-size:clamp(1.2rem,1.55vw,1.75rem)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy{left:0!important;right:0!important;bottom:0!important;top:auto!important;width:auto!important;height:25%!important;padding:1.4vh 4vw!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy h2{font-size:clamp(2.6rem,3.5vw,4.2rem)!important}
.project-mode .hero-slide:has(img[src*="Cinematic%20Mongol%20Caravan"]) .copy .sub{font-size:clamp(1.3rem,1.65vw,1.9rem)!important}
.project-mode .hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy{left:4%!important;right:auto!important;top:auto!important;bottom:7%!important;width:min(44%,840px)!important;padding:1.2rem 1.35rem!important}
.project-mode .hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy h2{font-size:clamp(3rem,4.15vw,5rem)!important;line-height:.96!important}
.project-mode .hero-slide:has(img[src*="Chinggis%20Museum%20Donoho"]) .copy .sub{font-size:clamp(1.3rem,1.65vw,1.9rem)!important}

/* Requested bottom-caption treatment: teacher slides 9, 10, and 14 match slide 17. */
.hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy{
  left:0!important;right:0!important;bottom:0!important;top:auto!important;
  width:auto!important;height:25%!important;min-height:0!important;box-sizing:border-box!important;
  padding:1.25% 4%!important;display:grid!important;
  grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)!important;
  grid-template-rows:auto 1fr!important;column-gap:3%!important;align-content:center!important;
  background:rgba(4,6,7,.84)!important;border-left:0!important;
  border-top:2px solid rgba(201,164,106,.75)!important;backdrop-filter:blur(3px)!important
}
.hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy .slide-kicker{grid-column:1 / -1!important}
.hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy h2{
  font-size:clamp(1.55rem,2.65vw,3.3rem)!important;line-height:1!important;
  margin:.2rem 0 0!important;align-self:center!important
}
.hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy .sub{
  font-size:clamp(.9rem,1.3vw,1.35rem)!important;line-height:1.25!important;
  margin:.2rem 0 0!important;align-self:center!important;max-width:none!important
}
.hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .veil{
  background:linear-gradient(0deg,rgba(3,5,6,.22),rgba(3,5,6,.04) 60%,transparent)!important
}
.project-mode .hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy{
  left:0!important;right:0!important;bottom:0!important;top:auto!important;
  width:auto!important;height:25%!important;padding:1.4vh 4vw!important
}
.project-mode .hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy h2{font-size:clamp(2.6rem,3.5vw,4.2rem)!important}
.project-mode .hero-slide.bottom:has(img[src*="assets/images/topics/2-2/"]) .copy .sub{font-size:clamp(1.3rem,1.65vw,1.9rem)!important}
`;
document.head.appendChild(css);
})();
