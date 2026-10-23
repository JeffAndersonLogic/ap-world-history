/* Topic 5.2 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain (CC0),
 * downloaded through the museum's open-access API on 2026-10-21, looked at, and
 * read against the museum's catalogue record. Wikimedia Commons was rate limited
 * (HTTP 429) for the session, so nothing here comes from Commons. Stored under
 * assets/images/topics/5-2:
 *
 * - storming-of-the-bastille-thevenin-1790.jpg: Charles Thévenin, The Storming
 *   of the Bastille, July 14, 1789, etching, 1790. Cleveland Museum of Art
 *   2015.21.
 * - no-stamp-act-teapot-1766-75.jpg: earthenware teapot painted "No Stamp Act,"
 *   made in England for the American market, 1766 to 1775. Metropolitan Museum
 *   of Art 27.232a, b.
 * - toussaint-louverture-on-horseback-1802.jpg: anonymous French hand-colored
 *   etching, Toussaint Louverture, Chef des Noirs Insurgés de Saint Domingue,
 *   1802. Met 83.2.934.
 * - hall-of-mirrors-leclerc-1684.jpg: Sébastien Leclerc I, Galerie des Glaces
 *   at Versailles, etching, 1684. Met 53.600.2784.
 * - declaration-of-independence-durand-1823.jpg: Asher B. Durand, engraving
 *   after John Trumbull's Declaration of Independence, 1820 to 1823, fifth
 *   state. Met 2022.29.
 *
 * No AI-generated picture is used (no generator key was set). The question and
 * landing slides open and close on real historical scenes, under Jeff's
 * standard of 2026-10-14.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-2/';
const BASTILLE={url:IMG+'storming-of-the-bastille-thevenin-1790.jpg',alt:'Black-and-white etching of a fight at the gate of a stone fortress: a crowd of men, some in uniform, push forward with muskets and pikes through smoke, a cannon tipped over on the left, wounded men lying on the paving stones, and a man on the right raising a flag on a pole beneath the fortress\'s round tower',credit:'Charles Thévenin, The Storming of the Bastille, July 14, 1789, etching, 1790 · Cleveland Museum of Art · Public domain',ratio:1.384,position:'50% 45%'};
const TEAPOT={url:IMG+'no-stamp-act-teapot-1766-75.jpg',alt:'A cream-colored pottery teapot with a twisted handle and spout; on its side, inside a wreath of red and black painted leaves, the words No Stamp Act',credit:'Teapot, made in England for the American market, 1766 to 1775 · Metropolitan Museum of Art · Public domain',ratio:1.178,fit:'contain'};
const TOUSSAINT={url:IMG+'toussaint-louverture-on-horseback-1802.jpg',alt:'A hand-colored print of a Black general in a blue coat with gold braid, a red sash and a plumed hat, raising a curved sword as his brown horse rears; a lighthouse and the sea behind him; below, the words Toussaint Louverture, Chef des Noirs Insurgés de Saint Domingue',credit:'Toussaint Louverture on Horseback, hand-colored etching, France, 1802 · Metropolitan Museum of Art · Public domain',ratio:0.663,fit:'contain'};
const MIRRORS={url:IMG+'hall-of-mirrors-leclerc-1684.jpg',alt:'A small black-and-white etching of a long palace hall with a curved painted ceiling, chandeliers, tall arched windows on the right and statues between them; courtiers in long coats and gowns stroll and talk along the polished floor; at the bottom, the words La Grande Gallerie de Versailles',credit:'Sébastien Leclerc I, Galerie des Glaces at Versailles, etching, 1684 · Metropolitan Museum of Art · Public domain',ratio:0.672,fit:'contain'};
const DURAND={url:IMG+'declaration-of-independence-durand-1823.jpg',alt:'A black-and-white engraving of a large room in which some fifty men in eighteenth-century coats stand and sit facing a table, where five men hand their written draft to a seated man; flags and drums hang on the back wall',credit:'Asher B. Durand, after John Trumbull, The Declaration of Independence, engraving, 1820 to 1823 · Metropolitan Museum of Art · Public domain',ratio:1.498,position:'50% 50%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:Object.assign({},BASTILLE,{tagPos:'bl'})});
setTemplate('america',{visual:TEAPOT});
setTemplate('haiti',{visual:TOUSSAINT});
setTemplate('versailles',{visual:MIRRORS});
setTemplate('close',{visual:Object.assign({},DURAND,{tagPos:'bl'})});
})();
