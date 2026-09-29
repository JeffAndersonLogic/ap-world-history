/* Topic 2.6 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Rebuilt 2026-09-26 with the template deck. Later that day Jeff uploaded
 * pictures to assets/images/topics/2-6/ and placed them himself:
 *
 * - hook, slide 3 (frame-cover): "2.6 - Cargo hold.jpg", AI-generated (Google
 *   content credentials and SynthID in the file): a 1300s ship's hold where
 *   citrus, plants and grain sacks sit together and rats crawl over the
 *   sacks. Both cargoes, one hold. The slide loads "- cover.jpg", a copy with
 *   the bottom 80px trimmed to remove the Gemini sparkle; trimming with
 *   `cropBottom` instead draws the image past the board, which
 *   teaching-os-deck-overflow.test.js rejects. Jeff swapped it in on
 *   2026-09-26 for "2.6 - Cargo bay.jpg", the dock scene from the same set of
 *   prompts, which stays in the folder (with its trimmed copy) unused. The
 *   hold picture is also the Unit 2 hub card for 2.6. The Bruegel that was
 *   first on this slide moved to the memory slide.
 * - memory, slide 13 (frame-triptych, two panels): Michael Wolgemut's Dance of
 *   Death woodcut, printed 1493, beside Pieter Bruegel the Elder's The Triumph
 *   of Death, c. 1562, Museo del Prado, public domain. Both are how Europe
 *   remembered the plague generations later, not pictures of 1348, and the
 *   panel titles and the notes date them.
 * - plague-map, slide 11 (frame-placard): Simeon Netchev's map of the plague
 *   in Europe, 1346 to 1353, for World History Encyclopedia (his signature is
 *   bottom left, the publisher's mark bottom right). It replaces the
 *   BeHistorical instructional map, which stays in the Evidence Lab. The slide
 *   loads "- web.jpg", a 2560px copy made from Jeff's 4961px, 7.3 MB PNG,
 *   because thirty Chromebooks loading the student deck on school wifi should
 *   not each pull 7 MB for one slide. The PNG stays in the folder as the source.
 *   Its license could not be checked from the build session (the site refused
 *   the connection), so the credit names the maker and publisher and claims no
 *   license. The legend misspells "Principal" as "Principl". The credit sits
 *   top left, over the publisher's logo it repeats, because the default top
 *   right covers the map's own title.
 * - landing, slide 17 (frame-letterbox): "2.6 - Rice in East Asia.jpg" is
 *   AI-generated. The file carries Google content credentials
 *   (trainedAlgorithmicMedia) and a SynthID mark, and a Gemini sparkle sits in
 *   its bottom-right corner, cropped off by `position`. It carries the house AI
 *   label, and the slide notes name its most visible fault (a worker holding a
 *   harvest sickle while others transplant seedlings) as a check for the room,
 *   the way 2.4's closing slide does. It closes the deck on the crop branch,
 *   so the lesson does not end on plague. It is never Evidence Lab evidence.
 *
 * Unchanged: crops-map (the local crop-diffusion instructional map).
 *
 * Deliberately without a picture: `turn` and `power` are single-claim question
 * slides.
 *
 * Still wanted, and specified in assets/images/topics/2-6/README.md: a crop
 * triptych and period plague-mortality art.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const FP='https://commons.wikimedia.org/wiki/Special:FilePath/';
const FILE='https://commons.wikimedia.org/wiki/File:';
const MAPS='../assets/images/instructional-maps/';
const LOCAL='../assets/images/topics/2-6/';
const local=name=>LOCAL+encodeURIComponent(name);

const TRIUMPH={url:local('2.6 - The-Triumph-of-Death-1024x730.webp'),alt:'Pieter Bruegel the Elder\'s painting The Triumph of Death: an army of skeletons sweeps across a burning, barren landscape, driving crowds of people of every rank into a trap, with a cart of skulls on the left',credit:'Pieter Bruegel the Elder, c. 1562 · Museo del Prado · public domain'};
const CROPS={fit:'contain',url:MAPS+'topic-2-6-crops.svg',alt:'Instructional map tracing bananas into Africa, new rice varieties into East Asia and citrus around the Mediterranean',credit:'BeHistorical instructional map · secondary reconstruction'};
const PLAGUE_MAP={fit:'contain',url:local('2.6 - Map of the Bubonic Plague - web.jpg'),alt:'Map titled The Spread of the Plague in Europe, 1346 to 1353. Shading from dark red for 1346 to pale lilac for 1352 and 1353 shows the plague arriving from the east at the Black Sea, crossing the Mediterranean to Italy, Egypt and the Levant, and spreading north across Europe to Scandinavia and Russia, with arrows along sea lanes and roads and dots marking cities with known death rates',credit:'Map · Simeon Netchev · World History Encyclopedia',tagPos:'tl'};
const DANCE={fit:'contain',url:FP+'Danse_macabre_by_Michael_Wolgemut.png',sourceUrl:FILE+'Danse_macabre_by_Michael_Wolgemut.png',alt:'Woodcut of skeletons dancing, from the Dance of Death tradition',credit:'Michael Wolgemut, 1493 · public domain'};
const CARGO_HOLD_AI={ai:true,url:local('2.6 - Cargo hold - cover.jpg'),alt:'An illustrated dim ship\'s cargo hold lit by a shaft of light from a hatch: crates of citrus fruit, bundles of plants and stacked grain sacks, with several rats crawling over the sacks'};
const RICE_AI={ai:true,url:local('2.6 - Rice in East Asia.jpg'),alt:'An illustrated scene of farmers in straw hats planting rice seedlings in flooded terraced paddies below a hillside village',position:'50% 60%'};

const TEMPLATE_VISUALS={
  'hook':{visual:CARGO_HOLD_AI},
  'crops-map':{visual:CROPS},
  'plague-map':{visual:PLAGUE_MAP},
  'landing':{visual:RICE_AI}
};
// Panel titles live in the teaching base; only the pictures are assigned here.
const PANEL_VISUALS={'memory':[DANCE,TRIUMPH]};
for(const slide of T.slides){
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
  if(PANEL_VISUALS[slide.id]&&slide.template&&Array.isArray(slide.template.panels)){
    slide.template.panels=slide.template.panels.map((p,i)=>Object.assign({},p,{visual:PANEL_VISUALS[slide.id][i]}));
  }
}
})();
