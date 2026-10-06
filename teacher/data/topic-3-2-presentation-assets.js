/* Topic 3.2 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Five pictures are placed: the Qianlong court portrait, two AI-generated
 * figures on the people Venn, and two modern photographs on the buildings
 * comparison (all below). The others wait, on purpose. Jeff's 3.2 uploads have not arrived
 * (docs/UNIT-3-PICTURE-LIST.md is the shopping list), and the build-topic rule is
 * to build with pictures already verified in the repo or none, never a filename
 * from memory. No repo-local picture fits a 3.2 beat: the only Unit 3 map,
 * topic-3-1.svg, is 3.1's empires-and-rivalries map and would teach the wrong
 * topic here. So every slide is text-led or a template diagram, and the beats
 * that want a picture name it in their teacher notes.
 *
 * When the uploads arrive, wire them in here with the presentation-images skill,
 * one `by(phase)` assignment per slide, exactly as topic-3-1-presentation-assets.js
 * does, and keep every visual repo-local so the student deck never depends on
 * Wikimedia being reachable from a school network.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const by=id=>T.slides.find(s=>s.phase===id);

// portraits (case-file): the Qianlong Emperor's court portrait in a yellow dragon
// robe, from the handscroll of inauguration portraits of the emperor and his
// consorts; its inscription reads the eighth month of the first year of
// Qianlong, 1736. Attributed to Giuseppe Castiglione. Public domain (Wikimedia
// Commons, "Qianlong Emperor.jpg"; this copy 1280x1140, saved 2026-10-06 so the
// student deck never depends on Wikimedia). It is the same painting the 3.2
// Evidence Lab already uses.
const qianlong={url:IMG+'topics/3-2/qianlong-emperor.jpg',alt:'Court portrait of the young Qianlong Emperor in a fur-trimmed hat and a yellow robe embroidered with dragons, with Chinese inscriptions and seals',credit:'Court portrait, 1736 · Public domain',fit:'contain'};
const portraits=by('portraits');
if(portraits)portraits.template=Object.assign({},portraits.template,{pictureSize:'large',visual:Object.assign({},qianlong)});

// people (split-venn): a Janissary beside the devshirme circle and a salaried
// samurai beside the samurai circle. Both are cut from one AI-generated picture
// Jeff supplied on 2026-10-06 (the two men standing in a castle-town street and
// an Ottoman arcade, 1408x768, with the Gemini sparkle in its corner). The
// backgrounds were removed with rembg's BiRefNet model, which also removed the
// sparkle, and both canvases are 731px tall with the feet on the bottom edge,
// so the two men keep the heights they had in the source. Labeled by the
// template from `ai: true`; they set a scene and are never evidence.
const AI=(name,alt)=>({url:IMG+'topics/3-2/'+encodeURIComponent(name),alt,ai:true});
const people=by('people');
if(people){
  const t=people.template||{};
  people.template=Object.assign({},t,{
    left:Object.assign({},t.left,{visual:AI('3.2 - Janissary.png','Reconstruction of a Janissary in a tall white felt hat with a brass plume holder, a red brocade coat, a green sash and red boots, holding a long musket and a curved sword')}),
    right:Object.assign({},t.right,{visual:AI('3.2 - Salaried Samurai.png','Reconstruction of a samurai official in a dark blue robe with stiff winged shoulders and wide trousers, two swords at his belt and a ledger in his hand')})
  });
}

// buildings (frame-compare): two modern photographs, both from Wikimedia
// Commons, checked against Commons' own description on 2026-10-06 and saved
// here at 1280px wide so the student deck never depends on Wikimedia.
// - "Taj Mahal (Edited).jpeg", CC BY-SA 4.0, photograph by Yann, edited by
//   Jim Carter, 2010; a featured picture on the English Wikipedia.
// - "Facade principale du château de Versailles, côté jardins - DSC 0600.jpg",
//   CC BY-SA 3.0, photograph by Trizek, 2011: the garden front, the whole
//   building rather than a detail, because the slide is about scale.
// Both licences require the author's name, so each credit carries it.
const taj={url:IMG+'topics/3-2/taj-mahal.jpg',alt:'The Taj Mahal, a white marble tomb with a large central dome and four tall minarets, seen down a long reflecting pool lined with cypress trees',credit:'Taj Mahal, Agra · Modern photograph: Yann, edited by Jim Carter · CC BY-SA 4.0'};
const versailles={url:IMG+'topics/3-2/versailles-garden-facade.jpg',alt:'The long stone garden front of the Palace of Versailles, three stories of arched windows and columns with statues along the roofline, above a pool and a wide gravel terrace',credit:'Versailles, garden front · Modern photograph: Trizek · CC BY-SA 3.0'};
const buildings=by('buildings');
if(buildings&&buildings.template&&Array.isArray(buildings.template.panels)){
  const pics=[taj,versailles];
  buildings.template=Object.assign({},buildings.template,{panels:buildings.template.panels.map((p,i)=>Object.assign({},p,{visual:Object.assign({},pics[i])}))});
}
})();
