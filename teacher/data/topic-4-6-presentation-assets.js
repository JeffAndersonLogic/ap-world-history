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

/* Reviewed reconstruction assignments, 2026-11-04. */
(function(){
'use strict';const T=window.BEHISTORICAL_TEACHING;if(!T)return;
const by=p=>T.slides.find(s=>s.phase===p), ai=(name,alt)=>({ai:true,url:'../assets/images/topics/4-6/'+encodeURIComponent(name),alt,fit:'contain'}), note=(s,x)=>s.notes.land.push(x);
let s=by('fronde'), old=s.template;s.kind='scene-case';s.template={visual:ai('4.6 - The Fronde.JPG','Reconstruction of townspeople building a barricade across a French city street while armed soldiers approach'),sources:old.panels.map(p=>({visual:p.visual,caption:p.tag})),steps:old.rows,proves:old.proves};
note(s,'The large barricade is reconstructed; the two small prints are historical sources. The invented shop lettering, street details and generic clothing are not evidence of Paris in 1648. Use the case to explain taxes, the groups resisting, and the outcome.');
s=by('deccan');old=s.template;s.kind='scene-case';s.template={visual:ai('4.6 - Marathas.JPG','Reconstruction of Maratha riders leaving a hill fort above a distant army camp in the Deccan'),sources:old.panels.map(p=>({visual:p.visual,caption:p.tag})),steps:[{label:'Mughal expansion',text:old.panels[0].text},{label:'Maratha power',text:old.panels[1].text},...old.rows],proves:old.proves};
note(s,'The fort and riders are reconstructed, not a verified named fortress or a portrait of Shivaji. The portraits below remain the real objects. Connect terrain and fast raids to the cost of the Mughal campaign.');
s=by('njinga');old=s.template;s.kind='scene-case';s.template={visual:ai('4.6 - Queen Njinga.JPG','Reconstruction of an African queen negotiating with seated Portuguese officials in a colonial room at Luanda'),steps:old.rows,proves:old.proves};note(s,'This is an imagined negotiation, not a portrait or an eyewitness record of the 1622 meeting. Do not use it to teach the disputed chair anecdote. Njinga\'s bargaining, warfare and changing alliances are established by the case.');
s=by('revolt');s.kind='story-scene';s.template=Object.assign({},s.template,{visual:ai('4.6 - Pueblo Revolts.JPG','Reconstruction of Pueblo people passing a knotted cord between towns, with adobe buildings and ladders behind them'),caption:'Knotted cords: coordination across towns'});note(s,'The cord scene is reconstructed. Naranjo\'s testimony on the preceding source slide supplies evidence of coordination; the generated scene cannot verify a particular runner or town.');
s=by('palmares');old=s.template;s.kind='scene-case';s.template={visual:ai('4.6 - Maroon Resistance.JPG','Reconstruction of a fortified maroon settlement with houses, planted fields, watchtowers and a palisade in forested hills'),steps:old.rows,proves:old.proves};note(s,'The settlement is a reconstruction, not a surveyed plan of Palmares. Houses, food production and defenses help students imagine organized resistance; the case\'s historical evidence establishes the actual community.');
by('preflight').notes.land.push('Visual update, 2026-11-04: five labeled reconstructions accompany the Fronde, Marathas, Njinga, Pueblo coordination and Palmares. The new scene-case layout keeps source objects beside the explanation when they are part of the existing case.');
})();

(function(){const p=window.BEHISTORICAL_TEACHING.slides.find(s=>s.phase==='preflight');p.notes.land=p.notes.land.filter(x=>!x.includes('None is AI-generated.'));})();
