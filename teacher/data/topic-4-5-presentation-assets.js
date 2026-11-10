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
 * - potosi-8-reales-1651.jpg: eight-reales silver coin (the peso de ocho),
 *   Potosí mint, 1651, reverse, Münzkabinett der Staatlichen Museen zu Berlin
 *   object 18214111; photograph Reinhard Saczewski, CC0 (Commons file
 *   8_reales_de_1651_(Potosí)_-_reverso.jpg, licence read 2026-11-08). Already
 *   Evidence Lab card 2 on the lesson page; added to the deck 2026-11-08 as
 *   its own slide. Chop-marked coins on Commons were looked at and left out:
 *   every one found is dated 1798 or later (after this unit), is a
 *   collector's own photograph, or sits in a fake-countermark category.
 * - batavia-beeckman-c1662.jpg: Andries Beeckman, The Castle of Batavia,
 *   about 1662, Rijksmuseum SK-A-19 (public domain)
 *
 * Slide 14 revised 2026-11-10: Jeff’s upload 4.5 - Peso De Ocho.jpg
 * shows both sides of an 1821 coin, not the Potosí object above. Matching
 * original: Commons File:Ferdinand_VII_Coin.jpg, Coinman62, public domain,
 * 1016 x 532 pixels (checked 2026-11-10). Use the full original upload,
 * fit whole in a compact letterbox. The 1651 coin stays in Evidence Lab.
 *
 * Reviewed uploads added 2026-11-04. The inventory above describes the
 * historical sources; the labeled reconstructions are assigned below.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-5/';
const SHIPYARD={url:IMG+'voc-shipyard-bakhuysen-1696.jpg',alt:'Oil painting of a busy harbor: a long brick warehouse and shipyard behind the water, a large ship\'s hull on the slip, and tall Dutch sailing ships and small boats in front, flying flags and firing a salute',credit:'Ludolf Bakhuysen, The Shipyard of the Dutch East India Company at Amsterdam, 1696 · Mauritshuis · Public domain',position:'50% 100%'};
const MANILA={url:IMG+'manila-vingboons-c1665.jpg',alt:'Hand-colored bird\'s-eye view of a walled city on a wide bay, green hills behind, and sailing ships at anchor in the water',credit:'Johannes Vingboons, view of Manila, about 1665, painted in the Netherlands · Nationaal Archief · Public domain',position:'50% 60%'};
const VIRGEN={url:IMG+'virgen-del-cerro-potosi.jpg',alt:'Painting of a great red mountain with the face, hands and crown of the Virgin Mary at its top and tiny people and animals on its slopes; two crowned figures and a dove above, and a pope, churchmen and a king kneeling below around a blue globe',credit:'La Virgen del Cerro, unknown painter, Potosí, 1700s · Casa Nacional de Moneda, Potosí · Photo Dan Lundberg, CC BY-SA 2.0',position:'50% 30%',fit:'contain'};
const COIN={url:IMG+encodeURIComponent('4.5 - Peso De Ocho.jpg'),alt:'Both sides of an 1821 eight-reales silver coin: Ferdinand VII in profile on the left; a crowned shield with castles and lions between two pillars on the right. This is a later example, outside 1450 to 1750.',credit:'1821 · Later example · Photo Coinman62 · Public domain',fit:'contain',tagPos:'bl'};
const BATAVIA={url:IMG+'batavia-beeckman-c1662.jpg',alt:'Oil painting of tall palm trees in front of the long white walls of a fortress, with a crowd of Javanese, Chinese and Dutch people along the bottom edge',credit:'Andries Beeckman, The Castle of Batavia, about 1662 · Rijksmuseum · Public domain',position:'50% 88%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
/* Slide 3: the caption sits in the sky and the painting is anchored to its
   bottom edge, so the hulls and boats along the bottom stay visible (Jeff,
   2026-11-08). The painting is nearly square, so a 16:9 board shows about
   two-thirds of its height; the sky is what gives way. */
setTemplate('question',{visual:SHIPYARD,place:'top'});
setTemplate('manila',{visual:MANILA});
setTemplate('coin',{visual:COIN});
setTemplate('virgin',{visual:VIRGEN});
setTemplate('close',{visual:BATAVIA});
})();

/* Reviewed reconstruction assignments, 2026-11-04. */
(function(){
'use strict';const T=window.BEHISTORICAL_TEACHING;if(!T)return;
const by=p=>T.slides.find(s=>s.phase===p), ai=(name,alt)=>({ai:true,url:'../assets/images/topics/4-5/'+encodeURIComponent(name),alt,fit:'contain'}), note=(s,x)=>s.notes.land.push(x);
let s=by('company'), source=s.template.visual;s.kind='scene-case';s.template={visual:ai('4.5 - The VOC.JPG','Reconstruction of workers building a Dutch company ship at a large shipyard while merchants review papers'),sources:[{visual:source,caption:'VOC share receipt, Enkhuizen, 1606'}],steps:s.template.rows,proves:s.template.proves};
note(s,'The shipyard is a reconstruction of the scale of a trading company. The receipt is real evidence of investment. The charter, not a pictured cannon or official, establishes the company\'s legal powers.');
s=by('manila');s.template={visual:ai('4.5 - Silver for Silk.JPG','Reconstruction of Chinese and other merchants inspecting silk, porcelain and silver at a busy Manila waterfront'),place:'top'};s.subtitle='Chinese merchants supplied silk and porcelain; American silver paid for them.';s.notes.land=s.notes.land.filter(x=>!x.includes('Vingboons'));note(s,'Historical Reconstruction - AI Generated. The scene illustrates exchange, not an observed bargain. Do not count the pictured coins or infer national identities from invented cargo marks.');
s=by('work');s.template.panels[1].visual=ai('4.5 - Indian Cotton Textiles.JPG','Reconstruction of Indian artisans spinning, weaving and dyeing cotton cloth in a workshop');note(s,'The India workshop is reconstructed; the European painting and Chinese print are historical sources. Use the scene to imagine labor and the real objects to observe period evidence. The palampore remains a real source in the course.');
s=by('mixing');const rows=s.template.rows;s.kind='story-scene';s.template={visual:ai('4.5 - Brazil Cultural Interactions.JPG','Reconstruction of a Brazilian colonial market with African, Indigenous and European people trading food and goods'),steps:rows.map(r=>({label:r.name,text:r.result})),caption:'An imagined market; the contributions come from the history'};
note(s,'The market reconstructs cultural interaction under colonial inequality, not an equal or voluntary meeting. Appearance cannot identify a person\'s ancestry or legal status. Name contributions from the reading rather than treating generated clothing as proof.');
s=by('virgin');source=Object.assign({},s.template.visual,{credit:'La Virgen del Cerro, Potosí, 1700s · Photo Dan Lundberg · CC BY-SA 2.0'});s.kind='frame-evidence';s.template={scene:ai('4.5 - Potosi.JPG','Reconstruction of an artist painting Mary as the mountain of Potosí, with Cerro Rico visible outside his workshop'),evidence:source,sceneLabel:'Reconstruction: imagine the workshop',evidenceLabel:'Historical painting: reason from this'};
note(s,'The upload called Potosi shows an imagined artist making the Virgin of the Mountain. It belongs here, with religious blending, not on the mine or labor slide. The right-hand historical painting is the evidence; the left-hand reconstruction cannot establish who painted it or how.');
by('preflight').notes.land.push('Visual update, 2026-11-04: five labeled reconstructions support company finance, Manila trade, Indian labor, Atlantic cultural interaction and religious blending. Historical source objects remain available; none of the reconstructions enters Evidence Lab.');
})();

(function(){const p=window.BEHISTORICAL_TEACHING.slides.find(s=>s.phase==='preflight');p.notes.land=p.notes.land.filter(x=>!x.includes('None is AI-generated.'));})();
