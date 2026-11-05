/* Topic 4.6 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * The original source pictures in this deck were checked on
 * 2026-10-16 (each file downloaded from the holding museum's own image
 * server, looked at, and read against the museum's catalogue record) and
 * saved under assets/images/topics/4-6/ so the student deck never depends on
 * an outside host from a school network. All five are Rijksmuseum objects,
 * public domain:
 *
 * - razin-moscow-luyken-1700.jpg: Jan Luyken, "Stenko Radzin wordt met zijn
 *   broer Froika op een kar Moskou binnengebracht, 1671", etching for J. L.
 *   Gottfried, Historische kronyck (Leiden: Pieter van der Aa, 1700), vol. 2,
 *   p. 667, RP-P-1896-A-19368-1482. Cropped to the plate. Luyken never went
 *   to Russia; it is an imagined scene made about thirty years later.
 * - broussel-paris-1648.jpg: anonymous, portrait of Pierre Broussel, Paris,
 *   1648, "avec privilège", RP-P-1908-4807. Cropped above the museum's
 *   handwritten number.
 * - parlement-arrest-luyken-1699.jpg: Caspar Luyken, "Parlaments Heeren
 *   gevangen genomen" (arrest of a member of the Parlement of Paris, 1648),
 *   for Het leven en bedryf van ... Julius Mazaryn (Leiden: Boudewijn van der
 *   Aa, 1699), RP-P-1896-A-19368-1694. Cropped to the plate.
 * - shivaji-golconda-c1680.jpg: anonymous, Golconda, portrait of Shivaji,
 *   about 1680, gouache, with a Dutch caption on the mount, RP-T-1972-25.
 * - aurangzeb-golconda-c1686.jpg: anonymous, Golconda, portrait of
 *   Aurangzeb, about 1686, leaf 6 of the Witsen Album, RP-T-00-3186-6.
 *
 * Reviewed uploads added 2026-11-04. The inventory above describes the
 * historical sources; the labeled reconstructions are assigned below.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-6/';
const RAZIN={url:IMG+'razin-moscow-luyken-1700.jpg',alt:'An etching of a crowd outside a walled city gate with towers: a man in chains sits in a wooden cart under a tall wooden frame, surrounded by guards with pikes and long guns, a rider on horseback and a dog',credit:'Jan Luyken, Razin brought into Moscow, 1671, for a book published in Leiden, 1700 · Rijksmuseum · Public domain',position:'50% 55%'};
const ARREST={url:IMG+'parlement-arrest-luyken-1699.jpg',alt:'An etching of soldiers, one holding a halberd, seizing a man in a long robe at his doorway, with a city street, a cathedral with two towers, and a line of marching soldiers behind',credit:'Caspar Luyken, the arrest of a judge of the Parlement of Paris, 1648, for a book published in Leiden, 1699 · Rijksmuseum · Public domain',position:'50% 52%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:RAZIN});
setTemplate('close',{visual:ARREST});
})();

/* Reviewed reconstruction assignments, 2026-11-04, placed on the big-rocks
   slides of 2026-11-05: all five reconstructions are kept. */
(function(){
'use strict';const T=window.BEHISTORICAL_TEACHING;if(!T)return;
const by=p=>T.slides.find(s=>s.phase===p), ai=(name,alt,extra)=>Object.assign({ai:true,url:'../assets/images/topics/4-6/'+encodeURIComponent(name),alt},extra||{});
const RAZIN={url:'../assets/images/topics/4-6/razin-moscow-luyken-1700.jpg',alt:'An etching of a crowd outside a walled city gate with towers: a man in chains sits in a wooden cart under a tall wooden frame, surrounded by guards with pikes and long guns, a rider on horseback and a dog',credit:'Jan Luyken, Razin brought into Moscow, 1671, for a book published in Leiden, 1700 · Rijksmuseum · Public domain',position:'50% 55%'};
let s=by('inside');
s.template.left.visual=ai('4.6 - The Fronde.JPG','Reconstruction of townspeople building a barricade across a French city street while armed soldiers approach');
s.template.right.visual=RAZIN;
s=by('edges');
s.template.pictures=[
  {visual:ai('4.6 - Marathas.JPG','Reconstruction of Maratha riders leaving a hill fort above a distant army camp in the Deccan'),caption:'Maratha hill fort'},
  {visual:ai('4.6 - Queen Njinga.JPG','Reconstruction of an African queen negotiating with seated Portuguese officials in a colonial room at Luanda'),caption:'Njinga negotiates'}
];
by('pueblo').template.visual=ai('4.6 - Pueblo Revolts.JPG','Reconstruction of Pueblo people passing a knotted cord between towns, with adobe buildings and ladders behind them',{fit:'contain'});
by('enslaved').template.visual=ai('4.6 - Maroon Resistance.JPG','Reconstruction of a fortified maroon settlement with houses, planted fields, watchtowers and a palisade in forested hills',{fit:'contain'});
by('preflight').notes.land.push('Visual update, 2026-11-05: five labeled reconstructions (a Paris barricade, a Maratha hill fort, Njinga negotiating, the knotted cord, a maroon settlement) set scenes on the big-idea slides. The real prints of Razin (slides 3 and 6) and of a judge\'s arrest (slide 16) are historical sources; the real Golconda portraits and the Broussel print are in the Evidence Lab.');
})();

(function(){const p=window.BEHISTORICAL_TEACHING.slides.find(s=>s.phase==='preflight');p.notes.land=p.notes.land.filter(x=>!x.includes('None is AI-generated.'));})();
