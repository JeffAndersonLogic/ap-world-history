/* Topic 4.7 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, checked on
 * 2026-10-18 (each file downloaded from the holding museum's own image
 * server, or from Wikimedia Commons where the museum's own server could not
 * be reached, looked at, and read against the catalogue record) and saved
 * under assets/images/topics/4-7/ so the student deck never depends on an
 * outside host from a school network. All are public domain:
 *
 * - surjan-hada-akbarnama-c1590.jpg: "Rai Surjan Hada making submission
 *   to Akbar" (1569), Akbarnama, designed by Mukund and painted by Shankar,
 *   about 1590 to 1595, Victoria and Albert Museum IS.2:75-1896 (record O9608;
 *   image from the museum's IIIF server). Cropped inside the page border.
 *   Replaced O9420 in review pass 1: that page's summary says Rajput rulers,
 *   but its catalogue description says ambassadors of Mirza Shahrukh.
 * - armenian-wedding-vanmour-c1720.jpg: Jean Baptiste Vanmour, "Armenian
 *   Wedding," about 1720 to 1737, Rijksmuseum SK-A-2001.
 * - lying-in-room-vanmour-c1720.jpg: Jean Baptiste Vanmour, "Lying-in Room of
 *   a Distinguished Turkish Woman," about 1720 to 1737, Rijksmuseum SK-A-2003.
 *   The museum's description names the enslaved woman making sherbet.
 * - banner-horsemanship-1662.jpg: Nardunbu (Manchu), "Horsemanship
 *   Competition for the Shunzhi Emperor," handscroll dated 1662, Metropolitan
 *   Museum of Art 2002.328 (the Met's own image of one section). Cropped
 *   inside the blue mounting.
 * - casta-rodriguez-juarez-c1715.jpg: Juan Rodríguez Juárez, "De Mestizo, y de
 *   India Produce Coyote," about 1715 to 1720, Hispanic Society of America LA2122,
 *   as recorded on Wikimedia Commons (the Hispanic Society's own catalogue did
 *   not answer from this network). Commons holds it at 1,000 pixels wide, so
 *   it is used where a small picture is enough.
 * - peter-the-great-russia-c1700.jpg: anonymous Russian painter, Peter the
 *   Great in armor, 1700 to 1749, Rijksmuseum SK-A-116.
 * - busbecq-lorck-1557.jpg: Melchior Lorck, portrait of Busbecq, engraved in
 *   Constantinople, 1557 (dated on the plate), Rijksmuseum RP-P-OB-49.753.
 *   Cropped above the museum's handwritten number. Used on the Skill Builder
 *   card.
 * - versailles-martin-1722.jpg: Pierre-Denis Martin, Versailles from the Place
 *   d'Armes, 1722, Château de Versailles, from Wikimedia Commons (CC BY-SA 4.0
 *   for the photograph). Cropped inside the frame. Evidence Lab only.
 *
 * No AI-generated picture is used (no generator key was set). The question and
 * landing slides open and close on real historical objects, under Jeff's
 * standard of 2026-10-14.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-7/';
const AKBAR={url:IMG+'surjan-hada-akbarnama-c1590.jpg',alt:'A Mughal painting: the emperor sits on a throne under a red and yellow canopy while a man bows low before him, nobles stand around the throne, a crowd with trays and weapons gathers below, and a fortress stands on the rocky hill behind',credit:'A Rajput ruler submits to Akbar, 1569, Akbarnama, about 1590 to 1595 · Victoria and Albert Museum · Public domain',ratio:0.624,position:'50% 45%'};
const WEDDING={url:IMG+'armenian-wedding-vanmour-c1720.jpg',alt:'A painting of a wedding procession outdoors by the water: musicians and men in long robes and fur hats lead the way, with a crowd of veiled women in colored robes on the right beside a domed building',credit:'Jean Baptiste Vanmour, Armenian Wedding, about 1720 to 1737 · Rijksmuseum · Public domain',ratio:1.325,position:'38% 60%'};
const LYINGIN={url:IMG+'lying-in-room-vanmour-c1720.jpg',alt:'A painting of a richly decorated room: a woman sits up in a red bed under green curtains on the right, women in colored robes sit and stand around her, one carries a tray, coffee brews on a brass brazier in the middle, and a woman at the lower left prepares drinks',credit:'Jean Baptiste Vanmour, Lying-in Room of a Distinguished Turkish Woman, about 1720 to 1737 · Rijksmuseum · Public domain',ratio:1.626};
const BANNERS={url:IMG+'banner-horsemanship-1662.jpg',alt:'A section of a painted handscroll: a man stands on a galloping horse playing a flute, while rows of men in blue and yellow carry triangular flame-edged banners and others ride horses; a yellow label on the right carries Chinese characters',credit:'Nardunbu, Horsemanship Competition for the Shunzhi Emperor, dated 1662 · Metropolitan Museum of Art · Public domain',ratio:1.716,position:'50% 50%'};
const CASTA={url:IMG+'casta-rodriguez-juarez-c1715.jpg',alt:'A painting of a family of three: a man in a white shirt and brown cloak on the right, a woman in a white embroidered dress and head cloth in the middle, and a boy holding a basket on the left, with an inscription at the top right',credit:'Juan Rodríguez Juárez, From a Mestizo and an Indian Woman, a Coyote, about 1715 to 1720 · Hispanic Society of America · Public domain',ratio:1.424};
const PETER={url:IMG+'peter-the-great-russia-c1700.jpg',alt:'A painted half-length portrait of a man with dark curly hair and a small mustache, in a steel breastplate over a yellow coat, with a blue sash, one hand on a staff and the other on his hip',credit:'Peter the Great, probably by a Russian painter, first half of the 1700s · Rijksmuseum · Public domain',ratio:0.822,position:'50% 30%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:AKBAR});
setTemplate('room',{visual:WEDDING,caption:'An Armenian wedding in the Ottoman Empire, painted about 1720 to 1737'});
setTemplate('mughal',{visual:AKBAR,caption:'Rai Surjan Hada bows to Akbar, 1569'});
setTemplate('women',{visual:Object.assign({},LYINGIN,{fit:'contain'})});
setTemplate('banners',{visual:BANNERS});
setTemplate('castapainting',{visual:Object.assign({},CASTA,{fit:'contain',tagPos:'bl'})});
setTemplate('boyars',{visual:PETER,caption:'Peter the Great, first half of the 1700s'});
setTemplate('close',{visual:CASTA});
})();
