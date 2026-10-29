/* Topic 4.3 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, verified on Wikimedia
 * Commons on 2026-10-14 (scripts/source-evidence-images.js, read against what
 * Commons says each file is) and saved under assets/images/topics/4-3/ so the
 * student deck never depends on an outside host from a school network:
 *
 * - florentine-codex-smallpox-healer.jpg: Florentine Codex, Book 12, about 1577
 * - frans-post-sugar-mill-1660s.jpg: Frans Post, National Gallery of Ireland
 * - gerard-herball-turkie-corne-1597.jpg: Gerard's Herball, London, 1597, p. 75
 * - qing-taiwan-album-sweet-potato-1740s.jpg: album made for Liushiqi, 1740s
 *
 * The build used no AI-generated picture (no generator key was set, and a real
 * object existed for every beat that needed one); those visuals are set in the
 * teaching base itself, beside the slide they belong to.
 *
 * Added 2026-10-29 at Jeff's request, the one AI picture in the deck:
 *
 * - close (slide 24, frame-stepin): "4.3 - Landing Slide.jpg", an AI
 *   Historical Reconstruction he uploaded (C2PA, generator mark bottom
 *   right), labeled from `ai: true`. A Caribbean shore just after contact:
 *   a sick elder nursed beside maize, a horse led off a ship, pigs, a rat on
 *   a crate, sugarcane on the dock. It sets the landing; it is not evidence.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const close=T.slides.find(s=>s.phase==='close');
if(close){
  close.kind='frame-stepin';
  close.template={
    visual:{ai:true,url:'../assets/images/topics/4-3/'+encodeURIComponent('4.3 - Landing Slide.jpg'),alt:'Reconstruction of a Caribbean shore under storm clouds: a European ship at anchor, a horse led down a gangplank, pigs and a rat near crates and bundled sugarcane, and under a palm-leaf shelter beside a field of young maize, a woman tending a sick elder'},
    lines:['You are on a Caribbean shore, a few years after the ships first came. Horses, pigs and a rat have come off the boats. Beside the maize, someone nurses a sick elder.','What the ships carried remade populations on both sides of the ocean.'],
    question:'The ships carried more than anyone meant them to.',
    note:'Next: disease emptied the land of workers, and the new crops needed them. Who would do the work, and who would rule?'
  };
  if(close.notes)close.notes.land=(close.notes.land||[]).concat(['Historical Reconstruction, AI generated, the one AI picture in this deck. It squeezes years of change into one moment, so it sets the scene; it is not evidence. Ask the room to find one thing that crossed on purpose and one that crossed by accident.']);
}
})();
