/* Topic 4.2 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture here is repo-local, so the student deck never depends on an
 * outside host being reachable from a school network. Commons rate-limited this
 * build (HTTP 429) and no image generator key was set, so the deck reuses one
 * reviewed reconstruction from Topic 4.1 and otherwise carries its story in
 * slide templates and the generated routes map.
 *
 * - calicut (frame-letterbox): the 4.1 AI Historical Reconstruction of two
 *   carracks at anchor off Calicut among dhows and local boats, reviewed
 *   2026-10-12 against its prompt (docs/TOPIC-4-1-IMAGE-PROMPTS.md). Labeled by
 *   the template library from `ai: true`. Not evidence, and not in the
 *   Evidence Lab.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const AI=(path,alt,extra)=>Object.assign({url:IMG+path,alt,ai:true},extra||{});
const by=id=>T.slides.find(s=>s.phase===id);
const set=(id,visual)=>{const s=by(id);if(s)s.template=Object.assign({},s.template,{visual});};

set('calicut',AI('topics/4-1/'+encodeURIComponent('4.1 - Arriving at Calicut 1498.jpg'),'Reconstruction of two large European ships at anchor off a palm-lined shore, surrounded by many dhows with triangular sails and small rowing boats, under heavy gray clouds'));
})();
