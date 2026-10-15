/* Topic 4.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object or scene, verified on
 * Wikimedia Commons on 2026-10-14 (each file page read against what Commons
 * says it is) and saved under assets/images/topics/4-4/ so the student deck
 * never depends on an outside host from a school network:
 *
 * - nanban-screen-kano-naizen-c1600.jpg: Kano Naizen, Arrival of the Southern
 *   Barbarians, right screen, about 1600, Kobe City Museum (public domain)
 * - elmina-dapper-c1668.jpg: View of the fort of El Mina, in Olfert Dapper's
 *   description of Africa, about 1668, Atlas of Mutual Heritage (public domain)
 * - nagasaki-dejima-1735-44.jpg: View of Nagasaki, Johann Wolfgang Heydt, 1744 (dated 1735 to
 *   1744 by the Atlas of Mutual Heritage), public domain
 * - kongo-crucifix-met.jpg: Crucifix, Kongo peoples, 17th to 18th century,
 *   Metropolitan Museum of Art 1999.295.5 (CC0)
 * - potosi-cieza-1553.jpg: Cerro de Potosí, woodcut in Cieza de León, Crónica
 *   del Perú, 1553 (public domain)
 * - codex-kingsborough-1550s.jpg: Codex Kingsborough, about 1550s, a Nahua
 *   complaint against an encomendero (public domain)
 * - canoes-elmina-manfroe-1732.jpg: Fishing canoes at Elmina and slaves going
 *   on board ship at Manfroe, 1732, Atlas of Mutual Heritage (public domain)
 * - sugar-works-du-tertre-1667.jpg: Habitation sucrerie, Sébastien Leclerc for
 *   Du Tertre, Histoire générale des Antilles, 1667, BnF (public domain)
 * - dejima-kawahara-keiga-c1836.jpg: Kawahara Keiga, View of Dejima in
 *   Nagasaki Bay, folding screen, about 1836, Museum Volkenkunde; photograph
 *   René Gerritsen, CC BY-SA 4.0
 *
 * No AI-generated picture is used (no generator key was set, and a real object
 * existed for every beat that needed one). The question and landing slides open
 * and close on real historical scenes, under Jeff's standard of 2026-10-14.
 * Most visuals are set in the teaching base beside the slide they belong to; the
 * two bookends are set here. The landing screen is shown whole (fit:'contain')
 * and pinned to the top, so the words sit under Dejima instead of over it.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-4/';
const NANBAN={url:IMG+'nanban-screen-kano-naizen-c1600.jpg',alt:'Japanese folding screen painted in gold and color: a large Portuguese ship at anchor on the left, and Portuguese merchants, officers and servants in wide trousers walking up the shore toward Jesuit priests in black and a Japanese house',credit:'Kano Naizen, Arrival of the Southern Barbarians, about 1600 · Kobe City Museum · Public domain',position:'40% 50%'};
const DEJIMA={url:IMG+'dejima-kawahara-keiga-c1836.jpg',alt:'Japanese folding screen of Nagasaki harbor between green hills, with the small fan-shaped island of Dejima and its Dutch buildings in the foreground and ships at anchor in the bay',credit:'Kawahara Keiga, View of Dejima in Nagasaki Bay, painted about 1836, after this period · Museum Volkenkunde · Photo René Gerritsen, CC BY-SA 4.0',position:'50% 0%',fit:'contain'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:NANBAN});
setTemplate('close',{visual:DEJIMA});
})();
