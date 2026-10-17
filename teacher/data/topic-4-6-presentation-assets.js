/* Topic 4.6 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, checked on
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
 * No AI-generated picture is used (no generator key was set). Wikimedia
 * Commons answered HTTP 429 (rate limited) for the whole of Phase 6, so the
 * beats with no verified picture (Njinga, Palmares, the Pueblo Revolt,
 * Jamaica, Stono, Metacom) are text-led slides; the Phase 10 report lists
 * them as a shopping list. The question and landing slides open and close on
 * real historical scenes, under Jeff's standard of 2026-10-14.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-6/';
const RAZIN={url:IMG+'razin-moscow-luyken-1700.jpg',alt:'An etching of a crowd outside a walled city gate with towers: a man in chains sits in a wooden cart under a tall wooden frame, surrounded by guards with pikes and long guns, a rider on horseback and a dog',credit:'Jan Luyken, Razin brought into Moscow, 1671, etched in Amsterdam, 1700 · Rijksmuseum · Public domain',position:'50% 55%'};
const ARREST={url:IMG+'parlement-arrest-luyken-1699.jpg',alt:'An etching of soldiers, one holding a halberd, seizing a man in a long robe at his doorway, with a city street, a cathedral with two towers, and a line of marching soldiers behind',credit:'Caspar Luyken, the arrest of a judge of the Parlement of Paris, 1648, etched in Amsterdam, 1699 · Rijksmuseum · Public domain',position:'50% 52%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:RAZIN});
setTemplate('close',{visual:ARREST});
})();
