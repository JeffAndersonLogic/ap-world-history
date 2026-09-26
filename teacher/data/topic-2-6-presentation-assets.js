/* Topic 2.6 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Rebuilt 2026-09-26 with the template deck. Every picture here is one this
 * topic already shipped and the course already verified; nothing is new to
 * Commons, because the direct image fetch answered 429 from the build session
 * and an unverified filename must never reach a slide.
 *
 * - hook (frame-cover): the Afro-Eurasian route map, the network the whole
 *   topic rides on.
 * - crops-map (frame-placard): the local crop-diffusion instructional map.
 * - plague-map (frame-placard): the local Black Death reconstruction.
 * - memory (frame-placard): Wolgemut's Dance of Death, printed 1493. The
 *   credit dates it, because it is 145 years after the outbreak and its own
 *   placard on the slide says so. It is cultural-memory evidence, not a
 *   picture of 1348.
 *
 * Deliberately without a picture: `turn` and `power` are single-claim question
 * slides, and `landing` is the 25-word thesis students copy. `landing` used to
 * reuse the hook's map, which meant the deck opened and closed on the same
 * image; see the note on that slide.
 *
 * Still wanted, and specified in assets/images/topics/2-6/README.md: a
 * photographic network hero, a crop triptych, and period plague-mortality art.
 * None can be generated from this session, so none is faked here.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const FP='https://commons.wikimedia.org/wiki/Special:FilePath/';
const FILE='https://commons.wikimedia.org/wiki/File:';
const MAPS='../assets/images/instructional-maps/';

const ROUTES={url:FP+'Silk_route.jpg',sourceUrl:FILE+'Silk_route.jpg',alt:'Map of the overland and maritime exchange routes linking Afro-Eurasia',credit:'Map · Afro-Eurasian exchange routes'};
const CROPS={fit:'contain',url:MAPS+'topic-2-6-crops.svg',alt:'Instructional map tracing bananas into Africa, new rice varieties into East Asia and citrus around the Mediterranean',credit:'BeHistorical instructional map · secondary reconstruction'};
const PLAGUE={fit:'contain',url:MAPS+'topic-2-6.svg',alt:'Instructional map of the spread of the Black Death across Afro-Eurasian trade corridors',credit:'BeHistorical instructional map · secondary reconstruction'};
const DANCE={fit:'contain',url:FP+'Danse_macabre_by_Michael_Wolgemut.png',sourceUrl:FILE+'Danse_macabre_by_Michael_Wolgemut.png',alt:'Woodcut of skeletons dancing, from the Dance of Death tradition',credit:'Michael Wolgemut, 1493 · public domain'};

const TEMPLATE_VISUALS={
  'hook':{visual:ROUTES},
  'crops-map':{visual:CROPS},
  'plague-map':{visual:PLAGUE},
  'memory':{visual:DANCE}
};
for(const slide of T.slides){
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
}
})();
