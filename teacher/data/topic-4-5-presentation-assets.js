/* Topic 4.5 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object or scene, checked on
 * 2026-10-15 (each file downloaded and looked at, and read against what its
 * holding institution or Wikimedia Commons says it is) and saved under
 * assets/images/topics/4-5/ so the student deck never depends on an outside
 * host from a school network:
 *
 * - voc-shipyard-bakhuysen-1696.jpg: Ludolf Bakhuysen, The Shipyard of the
 *   Dutch East India Company at Amsterdam, 1696, Mauritshuis inv. 8 (public
 *   domain; the Commons filename says Rijksmuseum, which is wrong)
 * - voc-share-enkhuizen-1606.jpg: receipt for a share in the VOC, Enkhuizen
 *   chamber, 9 September 1606, Westfries Archief, Hoorn (public domain)
 * - manila-vingboons-c1665.jpg: Johannes Vingboons, bird's-eye view of
 *   Manila, about 1665, Nationaal Archief, Atlas of Mutual Heritage (public
 *   domain); Vingboons never visited
 * - spinner-maes-c1655.jpg: Nicolaes Maes, The Spinner, about 1650 to 1660,
 *   Rijksmuseum SK-A-246 (CC0)
 * - palampore-india-early-1700s.jpg: bed cover (palampore), India, early
 *   18th century, Metropolitan Museum of Art 15.101 (CC0)
 * - gengzhitu-1696-drawloom.jpg: "Weaving" from the Yuzhi Gengzhi tu
 *   (Pictures of Tilling and Weaving), designs by Jiao Bingzhen, printed 1696,
 *   Metropolitan Museum of Art CIB19 (CC0)
 * - virgen-del-cerro-potosi.jpg: La Virgen del Cerro, anonymous, Potosí,
 *   1700s, Casa Nacional de Moneda, Potosí; photograph by Dan Lundberg, 2017,
 *   CC BY-SA 2.0, cropped to the canvas
 * - batavia-beeckman-c1662.jpg: Andries Beeckman, The Castle of Batavia,
 *   about 1662, Rijksmuseum SK-A-19 (public domain)
 *
 * No AI-generated picture is used (no generator key was set, and a real object
 * existed for every beat that needed one). The question and landing slides open
 * and close on real historical scenes, under Jeff's standard of 2026-10-14.
 * Most visuals are set in the teaching base beside the slide they belong to;
 * the four full-board pictures are set here.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-5/';
const SHIPYARD={url:IMG+'voc-shipyard-bakhuysen-1696.jpg',alt:'Oil painting of a busy harbor: a long brick warehouse and shipyard behind the water, a large ship\'s hull on the slip, and tall Dutch sailing ships and small boats in front, flying flags and firing a salute',credit:'Ludolf Bakhuysen, The Shipyard of the Dutch East India Company at Amsterdam, 1696 · Mauritshuis · Public domain',position:'50% 55%'};
const MANILA={url:IMG+'manila-vingboons-c1665.jpg',alt:'Hand-colored bird\'s-eye view of a walled city on a wide bay, green hills behind, and sailing ships at anchor in the water',credit:'Johannes Vingboons, view of Manila, about 1665, painted in the Netherlands · Nationaal Archief · Public domain',position:'50% 60%'};
const VIRGEN={url:IMG+'virgen-del-cerro-potosi.jpg',alt:'Painting of a great red mountain with the face, hands and crown of the Virgin Mary at its top and tiny people and animals on its slopes; two crowned figures and a dove above, and a pope, churchmen and a king kneeling below around a blue globe',credit:'La Virgen del Cerro, unknown painter, Potosí, 1700s · Casa Nacional de Moneda, Potosí · Photo Dan Lundberg, CC BY-SA 2.0',position:'50% 30%',fit:'contain'};
const BATAVIA={url:IMG+'batavia-beeckman-c1662.jpg',alt:'Oil painting of tall palm trees in front of the long white walls of a fortress, with a crowd of Javanese, Chinese and Dutch people along the bottom edge',credit:'Andries Beeckman, The Castle of Batavia, about 1662 · Rijksmuseum · Public domain',position:'50% 88%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:SHIPYARD});
setTemplate('manila',{visual:MANILA});
setTemplate('virgin',{visual:VIRGEN});
setTemplate('close',{visual:BATAVIA});
})();
