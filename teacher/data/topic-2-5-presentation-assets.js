/* Topic 2.5 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Rebuilt 2026-09-25 with the template deck. The Commons pictures here are ones
 * the course already ships and the nightly image check resolved on 2026-09-25.
 *
 * 2026-09-28: Jeff uploaded three pictures to assets/images/topics/2-5/ for
 * slides 3, 10 and 19 and chose the placement. All three are AI-generated
 * (Google C2PA credentials in each file, Gemini sparkle in the lower right
 * corner), so each is ai:true and the template library prints the house label.
 * Each position keeps the sparkle outside the crop. The notes name each one's
 * faults so it is read as a reconstruction.
 * - hook: "2.5 - Cultural Highway.jpg", a Silk Road market with a scholar, a
 *   Buddhist monk, books and maps. Replaced the Silk Roads trade map (still the
 *   lesson's Map module picture). Registan-style skyline, built from 1417.
 * - city-growth: "2.5 - Technology Moves.jpg", a city market of papermakers,
 *   scribes and a gun. Replaced the 2.1 Samarkand AI scene. Faults: a late-1400s
 *   style long gun, feather quills instead of reed pens.
 * - landing: "2.5 - Travelers see connected world.jpg", a traveler writing above
 *   a trading city. Replaced al-Idrisi's world map of 1154. Fault: he writes as
 *   he goes; the three CED travelers dictated their accounts afterward.
 * - beliefs: the Great Buddha of Kamakura, cast from 1252 (Commons Quality
 *   image, 4870x6493, DXR, CC BY-SA 4.0, credited on the slide), which replaced
 *   the Cave 96 Buddha on 2026-09-27 after Jeff judged that photo too poor to
 *   project. A Mogao mural stood in for a day and was dropped: it is a scan of a
 *   printed book, page number included, and does not read as the Buddha.
 *   Angkor Wat (Topics 1.3 and 1.7) and the Great Mosque of Djenné (Topic 2.4).
 *   Each credit dates the object: Angkor Wat is older than the period, the Djenné
 *   building is a 1907 one on an older site, and the Kamakura Buddha is inside it.
 * - baghdad: the 1258 siege painting from a Persian history of about 1430 (the
 *   2.5 Evidence Lab card).
 * - atlas: the Catalan Atlas caravan, 1375 (the 2.5 Evidence Lab card).
 *
 * Left out: paper money (the paper/gunpowder slide is a comparison, and the
 * Yuan note of 1287 is already an Evidence Lab card); the older Silk_route.jpg
 * map; the Silk Roads trade map and al-Idrisi's map, replaced above.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const FP='https://commons.wikimedia.org/wiki/Special:FilePath/';
const FILE='https://commons.wikimedia.org/wiki/File:';
const LOCAL='../assets/images/topics/2-5/';
const local=name=>LOCAL+encodeURIComponent(name);
const MARKET_AI={ai:true,url:local('2.5 - Cultural Highway.jpg'),alt:'An imagined Silk Road market below blue-domed buildings: a turbaned scholar reads from a book in Arabic script, a Buddhist monk in red robes talks with a merchant, and books, maps and pottery cover the tables while camels pass behind',position:'62% 50%'};
const WORKSHOP_AI={ai:true,url:local('2.5 - Technology Moves.jpg'),alt:'An imagined city market under brick arches: scribes write on stacks of paper, workers pack crates of paper and blue-and-white porcelain, and three men inspect a long gun',position:'50% 62%'};
const TRAVELER_AI={ai:true,url:local('2.5 - Travelers see connected world.jpg'),alt:'An imagined traveler with a staff and satchel stands on a hill above a walled trading city full of caravans, writing in a book while a local man points and explains',position:'72% 50%'};
const KAMAKURA={url:FP+'Great_Buddha_at_K%C5%8Dtoku-in,_Close-up_20190421_1.jpg?width=1600',sourceUrl:FILE+'Great_Buddha_at_K%C5%8Dtoku-in,_Close-up_20190421_1.jpg',alt:'The Great Buddha of Kamakura, a giant seated bronze Buddha, green with age, against a blue sky',credit:'Kamakura Buddha · cast from 1252 · DXR, CC BY-SA 4.0',position:'50% 30%'};
const ANGKOR={url:FP+'Angkor%20Wat.jpg',sourceUrl:FILE+'Angkor_Wat.jpg',alt:'The towers of Angkor Wat in Cambodia',credit:'Angkor Wat · built early 1100s'};
const DJENNE={url:FP+'Great_Mosque_of_Djenn%C3%A9_2.jpg',sourceUrl:FILE+'Great_Mosque_of_Djenn%C3%A9_2.jpg',alt:'The mud-brick Great Mosque of Djenné in Mali',credit:'Great Mosque of Djenné · rebuilt 1907'};
const BAGHDAD={fit:'contain',url:FP+'Bagdad1258.jpg',sourceUrl:FILE+'Bagdad1258.jpg',alt:'A Persian manuscript painting of Mongol forces besieging Baghdad, with walls, a river and siege engines',credit:'Persian manuscript painting, c. 1430 · public domain'};
const ATLAS={fit:'contain',url:FP+'Caravane_Marco_Polo.jpg',sourceUrl:FILE+'Caravane_Marco_Polo.jpg',alt:'Detail of the Catalan Atlas showing a caravan of riders and camels crossing Asia',credit:'Catalan Atlas, 1375 · public domain'};
const TEMPLATE_VISUALS={
  'hook':{visual:MARKET_AI},
  'city-growth':{visual:WORKSHOP_AI},
  'baghdad':{visual:BAGHDAD},
  'atlas':{visual:ATLAS},
  'landing':{visual:TRAVELER_AI}
};
const PANELS={'beliefs':[KAMAKURA,ANGKOR,DJENNE]};
for(const slide of T.slides){
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
  if(PANELS[slide.id]&&slide.template&&Array.isArray(slide.template.panels)){
    slide.template.panels.forEach((p,i)=>{if(PANELS[slide.id][i])p.visual=PANELS[slide.id][i];});
  }
}
})();
