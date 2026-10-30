/* Topic 4.8 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Topic 4.8 argues from the unit's own evidence, so every picture in this deck
 * is a real historical object already downloaded, looked at, read against its
 * catalogue record and verified for an earlier Unit 4 topic, and stored under
 * assets/images/topics/4-*. Each carries the caption and credit its own
 * topic's claim ledger checked (docs/TOPIC-4-3, 4-4 and 4-5-CLAIM-LEDGER.md).
 * All are public domain:
 *
 * - 4-4/sugar-works-du-tertre-1667.jpg: a sugar works in the French Antilles,
 *   engraved by Sébastien Leclerc for Jean-Baptiste Du Tertre (Paris, 1667).
 * - 4-4/canoes-elmina-manfroe-1732.jpg: fishing canoes at Elmina, and canoes
 *   carrying enslaved people to ships at Manfroe, engraving in Churchill's
 *   Collection of Voyages, vol. 5 (London, 1732).
 * - 4-5/battle-texel-van-de-velde-1687.jpg: the Gouden Leeuw at the Battle of
 *   Texel, 1673; Het Scheepvaartmuseum's studio copy of Willem van de Velde the
 *   Younger's painting of 1687.
 * - 4-5/gengzhitu-1696-drawloom.jpg: weaving on a draw loom, Yuzhi Gengzhi tu,
 *   printed 1696, Metropolitan Museum of Art.
 * - 4-5/palampore-india-early-1700s.jpg: painted cotton bed cover, India
 *   (Chennai), early 1700s, Metropolitan Museum of Art 15.101.
 * - 4-5/spinner-maes-c1655.jpg: Nicolaes Maes, The Spinner, about 1655,
 *   Rijksmuseum SK-A-246.
 * - 4-7/casta-rodriguez-juarez-c1715.jpg: Juan Rodríguez Juárez, From a Mestizo
 *   and an Indian Woman, a Coyote, about 1715 to 1720, Hispanic Society of
 *   America LA2122.
 *
 * One AI-generated picture, added 2026-10-29 at Jeff's request: the landing
 * slide (26, frame-letterbox) shows "4-4/4.8 - Potosi.jpg", a Historical
 * Reconstruction he uploaded (C2PA, generator mark bottom right, outside the
 * crop) of the Cerro Rico with workers carrying ore, a llama train, smelting
 * fires and a church below. It replaced the 1553 Cieza woodcut, which stays the
 * real Potosí evidence in the 4.4 deck. Labeled from `ai: true`, never evidence.
 *
 * Otherwise no AI-generated picture is used (no generator key was set). No picture of a
 * Barbados sugar works from the 1600s was found, so the Barbados case file has
 * none. The question and landing slides open and close on real historical
 * objects, under Jeff's standard of 2026-10-14.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/';
const SUGAR={url:IMG+'4-4/sugar-works-du-tertre-1667.jpg',alt:'Engraving of a Caribbean sugar works: a mill turned by animals under an open timber frame, a roofed boiling house where workers tend kettles over furnaces, workers carrying cane, domed huts of the enslaved workers, and palms',credit:'Sugar works in the French Antilles, engraved by Sébastien Leclerc for Jean-Baptiste Du Tertre, Paris, 1667 · Public domain',ratio:1.588,fit:'contain'};
const POTOSI={ai:true,url:IMG+'4-4/'+encodeURIComponent('4.8 - Potosi.jpg'),alt:'Reconstruction of a huge bare mountain under storm clouds, its slopes cut with mine openings and lines of people climbing paths; in front, workers in ponchos carry heavy sacks down a trail, and below them a town of stone houses with a church tower, smoke from furnaces and a llama train',position:'50% 40%'};
const CANOES={url:IMG+'4-4/canoes-elmina-manfroe-1732.jpg',alt:'Two engraved views of the Gold Coast: fishing canoes off Elmina, and canoes carrying enslaved people out to European ships at anchor',credit:'Fishing canoes at Elmina, and canoes carrying enslaved people to ships at Manfroe, engraving printed in London, 1732 · Public domain',ratio:1.178,position:'50% 80%'};
const TEXEL={url:IMG+'4-5/battle-texel-van-de-velde-1687.jpg',alt:'Oil painting of a sea battle: a large Dutch warship with a gilded stern and torn sails in the middle, firing its cannons in clouds of white smoke, more warships on both sides, an English flag on the right, and a wrecked boat with men in the water at the lower right',credit:'The Gouden Leeuw at the Battle of Texel, 1673; a studio copy of Willem van de Velde the Younger\'s painting of 1687 · Het Scheepvaartmuseum · Public domain',ratio:2.053,position:'50% 50%'};
const LOOM={url:IMG+'4-5/gengzhitu-1696-drawloom.jpg',alt:'Black-and-white print of a tall Chinese silk draw loom inside a house, with one weaver seated at the front and a second worker high on the frame working the pattern cords, a poem in Chinese above',credit:'Weaving on a draw loom, Pictures of Tilling and Weaving, China, printed 1696 · Metropolitan Museum of Art · Public domain',ratio:0.86,position:'50% 62%'};
const PALAMPORE={url:IMG+'4-5/palampore-india-early-1700s.jpg',alt:'A large painted cotton bed cover from India: a flowering tree rising from a small hill, with a patterned border of flowers',credit:'Painted cotton bed cover (palampore), India, early 1700s · Metropolitan Museum of Art · Public domain',ratio:0.726,position:'50% 40%'};
const SPINNER={url:IMG+'4-5/spinner-maes-c1655.jpg',alt:'Oil painting of an old woman in a Dutch house, seated at a spinning wheel beside a table with a red cloth, a reel hanging on the wall behind her',credit:'Nicolaes Maes, The Spinner, about 1655 · Rijksmuseum · Public domain',ratio:0.883,position:'55% 50%'};
const CASTA={url:IMG+'4-7/casta-rodriguez-juarez-c1715.jpg',alt:'A painting of a family of three: a man in a white shirt and brown cloak on the right, a woman in a white embroidered dress and head cloth in the middle, and a boy holding a basket on the left, with an inscription at the top right',credit:'Juan Rodríguez Juárez, From a Mestizo and an Indian Woman, a Coyote, about 1715 to 1720 · Hispanic Society of America · Public domain',ratio:1.424};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:Object.assign({},SUGAR,{tagPos:'bl'})});
setTemplate('rivals',{visual:TEXEL,caption:'The Battle of Texel, 1673, in the third Anglo-Dutch War'});
setTemplate('casta',{visual:Object.assign({},CASTA,{fit:'contain',tagPos:'bl'})});
setTemplate('africa',{visual:CANOES,caption:'Canoes at Elmina and Manfroe, Gold Coast, printed 1732'});
const same=by('samework');
if(same&&same.template&&Array.isArray(same.template.panels)){
  [LOOM,PALAMPORE,SPINNER].forEach((v,i)=>{if(same.template.panels[i])same.template.panels[i].visual=v;});
}
setTemplate('close',{visual:POTOSI});
})();
