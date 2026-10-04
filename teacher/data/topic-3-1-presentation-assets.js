/* Topic 3.1 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture here is repo-local, so the student deck never depends on
 * Wikimedia being reachable from a school network.
 *
 * - empires and close: the BeHistorical instructional map built from
 *   scripts/lib/instructional-map-specs.js (id topic-3-1). Schematic empire
 *   cores, with Kandahar and Tondibi marked.
 * - proof (frame-number): the Dardanelles Gun, a Great Turkish Bombard cast in
 *   1464 and held at the Royal Armouries, Fort Nelson. Public domain,
 *   photograph by Gaius Cornelius (Wikimedia Commons, "Great Turkish Bombard
 *   at Fort Nelson.JPG", 1600x1200; this copy 1280x960). It is a surviving gun
 *   of the kind used in 1453, not the 1453 gun, and the teacher note says so.
 * - panipat (frame-placard): a Baburnama illustration of the 1526 battle,
 *   public domain (Wikimedia Commons, "1526-First Battle of Panipat-Ibrahim
 *   Lodhi and Babur.jpg"; this copy resized to 800px wide for classroom
 *   wifi). A later court painting, not a photograph; the placard says so.
 *
 * Not yet placed, and why: the Theodosian Walls (wall beat) and a period
 * depiction of the 1453 siege. The wall and siege slides are text-led until
 * those are sourced and verified. Candidates are listed in
 * docs/TOPIC-3-1-STORY-DRAFT.md.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const map={url:IMG+'instructional-maps/topic-3-1.svg',alt:'Instructional map of the Ottoman, Safavid, Mughal and Qing empires, with Kandahar, Constantinople and Tondibi marked',credit:'BeHistorical instructional map · Topic 3.1'};
const gun={url:IMG+'topics/3-1/dardanelles-gun.jpg',alt:'The Dardanelles Gun, a huge Ottoman bronze bombard cast in 1464, shown in two pieces on display at Fort Nelson',credit:'The Dardanelles Gun, cast 1464 · Royal Armouries, Fort Nelson · Photo: Gaius Cornelius, public domain',position:'50% 55%'};
const panipat={url:IMG+'topics/3-1/panipat-1526.jpg',alt:'Mughal illustration of the Battle of Panipat, 1526, with bronze cannons on wheeled carriages at the left',credit:'Battle of Panipat, 1526 · Baburnama illustration, late 16th century · Public domain',fit:'contain'};
const by=id=>T.slides.find(s=>s.phase===id);

const empires=by('empires');
if(empires)empires.visual=Object.assign({},map);

const proof=by('proof');
if(proof)proof.template=Object.assign({},proof.template,{visual:Object.assign({},gun)});

const pan=by('panipat');
if(pan)pan.template=Object.assign({},pan.template,{visual:Object.assign({},panipat)});

// The map sits beside the landing sentence, never under it, so no text panel
// covers a label (the Topic 2.7 close does the same).
const close=by('close');
if(close)close.template=Object.assign({},close.template,{visual:Object.assign({},map)});
})();
