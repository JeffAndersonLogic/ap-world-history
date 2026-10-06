/* Topic 3.2 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * One picture is placed: the Qianlong court portrait (below). The others wait, on purpose. Jeff's 3.2 uploads have not arrived
 * (docs/UNIT-3-PICTURE-LIST.md is the shopping list), and the build-topic rule is
 * to build with pictures already verified in the repo or none, never a filename
 * from memory. No repo-local picture fits a 3.2 beat: the only Unit 3 map,
 * topic-3-1.svg, is 3.1's empires-and-rivalries map and would teach the wrong
 * topic here. So every slide is text-led or a template diagram, and the beats
 * that want a picture name it in their teacher notes.
 *
 * When the uploads arrive, wire them in here with the presentation-images skill,
 * one `by(phase)` assignment per slide, exactly as topic-3-1-presentation-assets.js
 * does, and keep every visual repo-local so the student deck never depends on
 * Wikimedia being reachable from a school network.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const by=id=>T.slides.find(s=>s.phase===id);

// portraits (case-file): the Qianlong Emperor's court portrait in a yellow dragon
// robe, from the handscroll of inauguration portraits of the emperor and his
// consorts; its inscription reads the eighth month of the first year of
// Qianlong, 1736. Attributed to Giuseppe Castiglione. Public domain (Wikimedia
// Commons, "Qianlong Emperor.jpg"; this copy 1280x1140, saved 2026-10-06 so the
// student deck never depends on Wikimedia). It is the same painting the 3.2
// Evidence Lab already uses.
const qianlong={url:IMG+'topics/3-2/qianlong-emperor.jpg',alt:'Court portrait of the young Qianlong Emperor in a fur-trimmed hat and a yellow robe embroidered with dragons, with Chinese inscriptions and seals',credit:'Castiglione, 1736 · Public domain',fit:'contain'};
const portraits=by('portraits');
if(portraits)portraits.template=Object.assign({},portraits.template,{visual:Object.assign({},qianlong)});
})();
