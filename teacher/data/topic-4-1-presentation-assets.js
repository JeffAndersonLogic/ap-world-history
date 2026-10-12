/* Topic 4.1 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture here is repo-local, so the student deck never depends on an
 * outside host being reachable from a school network.
 *
 * All five are AI-generated Historical Reconstructions Jeff made on 2026-10-12
 * from the prompts in docs/TOPIC-4-1-IMAGE-PROMPTS.md, labeled by the template
 * library from `ai: true`. Each carries C2PA metadata and no printed label or
 * generator mark, so nothing is cropped. None is evidence, and none appears in
 * the Evidence Lab. Reviewed 2026-10-12 against each prompt's "check before use"
 * list; the small faults found are named in the slide notes:
 *
 * - coast (frame-subtitle): a lateen-rigged caravel off the desert coast of
 *   northwest Africa, against the wind. Passes its check.
 * - toledo (frame-letterbox): translators with an Arabic manuscript and a flat
 *   astronomer's astrolabe, Mudéjar arches. Manuscripts, not printed books.
 *   The Arabic script is invented by the generator; the note says so.
 * - astrolabe (frame-letterbox): a pilot with an open-ring mariner's astrolabe
 *   hung from the thumb. Faults named in the note: the sail behind him reads as
 *   square, and the young sailor's writing tool looks like a pencil.
 * - volta (frame-subtitle): one caravel alone in open ocean, no land. It shows
 *   the Order of Christ cross on the sail, which the prompt excluded; the note
 *   says its use this early is uncertain.
 * - calicut (frame-letterbox): two carracks at anchor off Calicut among many
 *   dhows and local boats, Kerala-style roofs, no Chinese junks. Passes.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const AI=(name,alt,extra)=>Object.assign({url:IMG+'topics/4-1/'+encodeURIComponent(name),alt,ai:true},extra||{});
const by=id=>T.slides.find(s=>s.phase===id);
const set=(id,visual)=>{const s=by(id);if(s)s.template=Object.assign({},s.template,{visual});};

set('coast',AI('4.1 - Fighting the Wind Home.jpg','Reconstruction seen from above of a small caravel with two triangular sails off a desert coast of sand dunes, whitecaps across the water'));
set('toledo',AI('4.1 - Translators of Toledo.jpg','Reconstruction of two scholars at a wooden table under horseshoe arches, one reading an Arabic manuscript with a star diagram, the other writing in Latin, a flat brass astrolabe between them'));
set('astrolabe',AI('4.1 - Mariners Astrolabe at Noon.jpg','Reconstruction of a Portuguese pilot on a ship\'s deck holding up an open brass ring with spokes, hung from his thumb, while a younger sailor writes in a small book of tables',{position:'50% 40%'}));
set('volta',AI('4.1 - Volta do Mar.jpg','Reconstruction of a single small sailing ship alone on a wide blue ocean under rows of white clouds, no land in sight'));
set('calicut',AI('4.1 - Arriving at Calicut 1498.jpg','Reconstruction of two large European ships at anchor off a palm-lined shore, surrounded by many dhows with triangular sails and small rowing boats, under heavy gray clouds'));
})();
