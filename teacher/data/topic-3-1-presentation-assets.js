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
 * - siege and haul (frame-letterbox): two AI-generated Historical Reconstructions
 *   Jeff made on 2026-10-05, labeled by the template from `ai: true`. Both had the
 *   Gemini sparkle in the corner: the siege picture is cropped to the siege lines
 *   (900x470), which also removes an anachronistic skyline of Ottoman mosques and a
 *   minareted Hagia Sophia; the haul picture has its bottom 88px trimmed (1408x680).
 *   The haul picture is modeled on the Akbarnama's bullocks dragging siege guns at
 *   Ranthambhor, 1568, and the teacher note says so.
 *
 * - wall (frame-letterbox): theodosian-walls-cross-section.svg, an original
 *   BeHistorical diagram drawn roughly to scale from published measurements.
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
const AI=(name,alt,extra)=>Object.assign({url:IMG+'topics/3-1/'+encodeURIComponent(name),alt,ai:true},extra||{});
const siegeAI=AI('3.1 - Bombards at the Walls.jpg','Reconstruction of Ottoman guns firing from behind earth banks at the broken walls of Constantinople, with soldiers and ladders at the breach');
const haulAI=AI('3.1 - Hauling the Great Gun.jpg','Reconstruction of oxen and many men dragging a huge bronze siege gun up a rocky road toward a hilltop fortress, with an elephant and more guns behind');
const by=id=>T.slides.find(s=>s.phase===id);

// The wall beat: an original cross-section drawn from published measurements of
// the Theodosian Land Walls (not traced from any copyrighted reconstruction).
const wall=by('wall');
if(wall)wall.template=Object.assign({},wall.template,{visual:{url:IMG+'topics/3-1/theodosian-walls-cross-section.svg',alt:'Cross-section of the Land Walls of Constantinople, roughly to scale: a moat about 20 meters wide, a low moat wall, an open terrace, the outer wall about 8.5 meters high, a second terrace, and the inner wall about 12 meters high with towers up to about 20 meters, with a person drawn for scale',credit:'BeHistorical diagram · approximate measurements',fit:'contain'}});

const siege=by('siege');
if(siege)siege.template=Object.assign({},siege.template,{visual:Object.assign({},siegeAI)});
const haul=by('haul');
if(haul)haul.template=Object.assign({},haul.template,{visual:Object.assign({},haulAI)});

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
