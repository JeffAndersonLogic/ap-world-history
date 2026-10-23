/* Topic 5.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. Wikimedia Commons was rate
 * limited (HTTP 429) for the session, so the new pictures come from the
 * holders' own image servers (downloaded 2026-10-22), each found through the
 * holder's catalogue or API. No AI-generated picture is used (no generator key
 * was set). The question and landing slides open and close on real historical
 * scenes, under Jeff's standard of 2026-10-14.
 *
 * Stored under assets/images/topics/5-4 (new):
 * - palampore-coromandel-coast-early-1700s.jpg: Palampore, cotton, painted
 *   resist and mordant, dyed, India (Coromandel Coast), for the Sri Lankan
 *   market, first quarter of the 18th century. The Metropolitan Museum of
 *   Art 2010.337 (Open Access, public domain).
 * - weaver-at-his-loom-tanjore-c1840.jpg: "Indian weaver at his loom,"
 *   gouache, attributed to a painter from Tanjore (Thanjavur), c. 1840.
 *   Wellcome Collection 28867i, public domain mark. A "types and trades"
 *   painting made by an Indian artist for European buyers.
 * - slater-mill-pawtucket-c1869.jpg: Slater Mill from across the dam, one
 *   frame of a stereo card of about 1869, when N. P. Hicks and Co. rented the
 *   building (its sign is on the gable). Library of Congress, HAER RI-1-49, a
 *   copy photograph made by the Historic American Engineering Record from the
 *   Slater Mill Historic Site's card.
 * - great-exhibition-1851-india-ship-models.jpg: "Naval Models, &c. India,"
 *   photograph by Hugh Owen, 1851, printed by Henneman and Bingham for the
 *   Reports by the Juries (1852). Rijksmuseum RP-F-F25213-W, CC0.
 * - lowell-mills-merrimack-river-1900s.jpg: mills on the Merrimack River,
 *   Lowell, Massachusetts, Detroit Publishing Co. glass plate, between 1900
 *   and 1910. Library of Congress LC-DIG-det-4a18323. Plate border trimmed.
 *
 * Already in the repository (assets/images/commons, credits in its manifest):
 * - the-opening-of-the-great-exhibition-by-queen-victoria-on-1-may-1851-5fa547.jpg:
 *   Henry Courtney Selous, The Opening of the Great Exhibition by Queen
 *   Victoria on 1 May 1851, oil, 1851 to 1852, Victoria and Albert Museum.
 *
 * No period picture of the Bombay Dockyard, the Osaka Spinning Company or
 * Hughes's works at Yuzovka could be sourced in this build.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-4/';
const COMMONS='../assets/images/commons/';
const OPENING={url:COMMONS+'the-opening-of-the-great-exhibition-by-queen-victoria-on-1-may-1851-5fa547.jpg',alt:'A painting of a vast hall of iron and glass with a tall tree growing inside it; Queen Victoria, Prince Albert and their children stand on a carpeted platform in the center, while crowds of officials in uniforms and dark coats, and men in Chinese and Ottoman dress, stand on either side and spectators fill the galleries above',credit:'Henry Courtney Selous, The Opening of the Great Exhibition by Queen Victoria on 1 May 1851, oil, 1851 to 1852 · Victoria and Albert Museum · Public domain',ratio:1.43,position:'50% 40%'};
const PALAMPORE={url:IMG+'palampore-coromandel-coast-early-1700s.jpg',alt:'A hand-painted Indian cotton hanging: a flowering tree with large red, blue and purple blossoms grows from stylized rocks on a cream ground, inside a wide red floral border',credit:'Palampore, painted and dyed cotton, Coromandel Coast, India, early 1700s · The Metropolitan Museum of Art · Public domain',ratio:0.699,fit:'contain'};
// Slater Mill (c. 1869) is on the lecture card; it is too small to read inside the case file.
const SLATER_UNUSED={url:IMG+'slater-mill-pawtucket-c1869.jpg',alt:'An old photograph of a wooden mill with a bell tower and a sign on its gable, standing beside a dam where water pours over into the river',credit:'Slater Mill, Pawtucket, about 1869, stereo photograph · Library of Congress, HAER copy · Public domain',ratio:0.947,position:'50% 45%'};
const WEAVER={url:IMG+'weaver-at-his-loom-tanjore-c1840.jpg',alt:'An Indian painting of a man in a white turban and white cloth sitting at a hand loom, weaving a long red patterned cloth, with his feet on the treadles and cords hanging from above',credit:'Weaver at his loom, gouache, attributed to a Tanjore painter, about 1840 · Wellcome Collection · Public domain',ratio:0.735,fit:'cover',position:'50% 45%'};
const SHIPS={url:IMG+'great-exhibition-1851-india-ship-models.jpg',alt:'A faded photograph inside the Crystal Palace: a hanging sign reads INDIA above model sailing ships with triangular sails and ceremonial parasols, under an iron and glass roof',credit:'Hugh Owen, Naval Models, India, Great Exhibition, photograph, 1851 · Rijksmuseum · Public domain',ratio:1.323,fit:'cover',position:'45% 60%'};
const LOWELL={url:IMG+'lowell-mills-merrimack-river-1900s.jpg',alt:'A photograph looking down a calm river at a long row of brick mill buildings along the left bank, with several tall smokestacks, some smoking, stretching into the distance',credit:'Mills on the Merrimack River, Lowell, Massachusetts, photograph, 1900 to 1910 · Library of Congress · Public domain',ratio:1.255,position:'50% 50%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:Object.assign({},OPENING,{tagPos:'bl'})});
setTemplate('before',{visual:PALAMPORE,caption:'Painted cotton from India, early 1700s'});
setTemplate('continued',{pictures:[
  {visual:WEAVER,caption:'A weaver, painted in Tanjore style, about 1840'},
  {visual:SHIPS,caption:'Model Indian sailing craft, London, 1851, not the dockyard'}
]});
setTemplate('close',{visual:Object.assign({},LOWELL,{tagPos:'bl'})});
})();
