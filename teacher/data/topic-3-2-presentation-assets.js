/* Topic 3.2 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Ten pictures are placed: the two Qianlong pictures on the portraits slide,
 * two AI-generated figures on the people Venn, two modern photographs on the
 * buildings comparison, Louis XIV and the Tomb of Askia on the belief slide, and
 * a Codex Mendoza tribute page and a Ming silver ingot on the paid slide (all
 * below). The others wait, on purpose. Jeff's 3.2 uploads have not arrived
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

// portraits (frame-pair): the two pictures the slide is about, shown whole.
// Picture one is the Qianlong Emperor in court dress, 1736, attributed to
// Giuseppe Castiglione, Palace Museum, Beijing: Wikimedia Commons, "清高宗乾隆帝朝服像.jpg"
// (public domain, 3644x4996; this copy 948x1300, saved 2026-10-06). It replaces
// the head-and-shoulders crop from the handscroll of the emperor and his
// consorts, which was a detail of a larger painting and not the whole portrait.
// Picture two is the thangka of the Qianlong Emperor as Manjushri, Freer Gallery
// of Art F2000.4, mid-18th century: Commons "Portrait of the Qianlong emperor as
// the bodhisattva Manjushri.jpg" (public domain), whose Wikidata item Q110917158
// records the Freer inventory number F2000.4 and depicts the Qianlong Emperor.
// The file is a scan from a book page, so its white page margin was cropped off
// (this copy 675x1300) and its colors are a little flat. `ratio` is each
// picture's width over its height, which the template needs to draw both at one
// shared height without cropping either.
const courtDress={url:IMG+'topics/3-2/qianlong-court-dress-1736.jpg',alt:'Full-length portrait of the Qianlong Emperor seated on a carved dragon throne, in a yellow robe embroidered with dragons and a black fur-trimmed cape, a red-crowned hat with a pearl finial, on a patterned carpet',credit:'Court-dress portrait, 1736 · Public domain',ratio:0.729};
const manjushri={url:IMG+'topics/3-2/qianlong-manjushri-thangka.jpg',alt:'A Tibetan Buddhist thangka: the Qianlong Emperor in the yellow hat and orange robes of a Buddhist teacher, seated on a throne in the center of a green landscape ringed with small Buddhist figures and circles of deities',credit:'Qianlong as Manjushri, thangka, mid-1700s · Freer Gallery · Public domain',ratio:0.519};
const portraits=by('portraits');
if(portraits&&portraits.template&&Array.isArray(portraits.template.panels)){
  const pics=[courtDress,manjushri];
  portraits.template=Object.assign({},portraits.template,{panels:portraits.template.panels.map((p,n)=>Object.assign({},p,{visual:Object.assign({},pics[n])}))});
}

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

// belief (frame-pair): two pictures from Wikimedia Commons, described by Commons on
// 2026-10-06 and saved here at 1300px tall or 1280 wide so the student deck never
// depends on Wikimedia.
// - Rigaud, Louis XIV in coronation robes, 1701, the Louvre: "Portrait of Louis XIV
//   of France in Coronation Robes (by Hyacinthe Rigaud) - Louvre Museum.jpg", public
//   domain, 2883x4018.
// - Tomb of Askia, Gao: "Tombeau askia.jpg", CC BY-SA 4.0, photograph by Gio53. Chosen
//   over the other Commons photographs because the tomb fills the frame and the sign in
//   front of it (in French) states the 1495 date, Askia Mohamed I's pilgrimage and his
//   naming as caliph in 1497. Commons' own description of the file is wrong ("from
//   1400"); the sign and UNESCO say 1495. Caption it as a modern photograph.
const louis={url:IMG+'topics/3-2/louis-xiv-rigaud-1701.jpg',alt:'Full-length portrait of Louis XIV in a white ermine cloak over a blue robe covered in gold fleurs-de-lis, one hand on a scepter, his crown on a cushion beside him, under red curtains',credit:'Louis XIV in coronation robes, Rigaud, 1701 · Louvre · Public domain',ratio:0.7175};
const askia={url:IMG+'topics/3-2/tomb-of-askia-gao.jpg',alt:'The Tomb of Askia at Gao, a mud-brick pyramid with wooden beams sticking out of its sides, behind a mud wall, with a painted sign in French in front of it',credit:'Tomb of Askia, Gao · Modern photograph: Gio53 · CC BY-SA 4.0',ratio:1.3333};
const belief=by('belief');
if(belief&&belief.template&&Array.isArray(belief.template.panels)){
  const pics=[louis,askia];
  belief.template=Object.assign({},belief.template,{panels:belief.template.panels.map((p,n)=>Object.assign({},p,{visual:Object.assign({},pics[n])}))});
}

// paid (frame-pair): Codex Mendoza folio 46r (Commons "Codex Mendoza folio 46r.jpg",
// public domain, 2581x3673), a tribute page: province glyphs and the goods owed. The
// codex was made about 1541 for the Spanish viceroy, probably copied from earlier Mexica
// records, so the credit says it was made after the conquest. Beside it, "Ming Silver
// Ingot 01.jpg" (CC0, Gary Lee Todd, Shanghai Museum Coin Gallery, 2010), whose museum
// label reads "Jiajing year 31 silver ingot, Ming": 1552, before the Single Whip reform
// (empire-wide about 1580), so it shows silver as money and not the reform.
const codex={url:IMG+'topics/3-2/codex-mendoza-tribute-46r.jpg',alt:'A page of the Codex Mendoza listing tribute: place-name glyphs down the left, and beside them painted cloaks, a warrior costume, a shield, feathers, green jade beads and vessels of cacao, with Spanish notes',credit:'Codex Mendoza, folio 46r, c. 1541, made after the conquest · Public domain',ratio:0.7028};
const ingot={url:IMG+'topics/3-2/ming-silver-ingot-jiajing-31.jpg',alt:'A dark silver ingot shaped like a shallow bowl, stamped with inscriptions, on a museum stand with a label reading Jiajing year 31 silver ingot, Ming',credit:'Silver ingot, Jiajing year 31 (1552) · Shanghai Museum · Photo: Gary Lee Todd · CC0',ratio:1.5};
const paid=by('paid');
if(paid&&paid.template&&Array.isArray(paid.template.panels)){
  const pics=[codex,ingot];
  paid.template=Object.assign({},paid.template,{panels:paid.template.panels.map((p,n)=>Object.assign({},p,{visual:Object.assign({},pics[n])}))});
}
})();
