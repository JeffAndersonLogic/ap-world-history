/* Topic 2.5 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Rebuilt 2026-09-25 with the template deck. Every picture is one the course
 * already ships and the nightly image check resolved on 2026-09-25; nothing here
 * is new to Commons, because Commons could not be reached from the build session
 * to verify a new file.
 *
 * - hook: the Silk Roads trade map the lesson's Map module already uses.
 * - beliefs: the Mogao Cave 96 Buddha (carved 695, the 2.5 Evidence Lab card),
 *   Angkor Wat (Topics 1.3 and 1.7) and the Great Mosque of Djenné (Topic 2.4).
 *   Each credit dates the object, since two of the three are older than the
 *   period and one is a 1907 building on an older site.
 * - city-growth: the AI-generated Samarkand scene (Google C2PA credentials in the
 *   file). ai:true, so the template library prints the house label. cropBottom
 *   hides the generator's sparkle mark in the lower corner. The notes name its
 *   faults (Timurid domes, an ox cart on a camel route) so it is read as a
 *   reconstruction.
 * - baghdad: the 1258 siege painting from a Persian history of about 1430 (the
 *   2.5 Evidence Lab card).
 * - atlas: the Catalan Atlas caravan, 1375 (the 2.5 Evidence Lab card).
 * - landing: al-Idrisi's world map of 1154, which the old deck closed on.
 *
 * Left out: Song paper money (the paper/gunpowder slide is a comparison, and the
 * note is already an Evidence Lab card); the older Silk_route.jpg map, which the
 * Silk Roads trade map replaces on the question slide.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const FP='https://commons.wikimedia.org/wiki/Special:FilePath/';
const FILE='https://commons.wikimedia.org/wiki/File:';
const MAP={fit:'contain',url:FP+'Silk_Road_Trade_%28c.1200_CE%29.jpg',sourceUrl:FILE+'Silk_Road_Trade_%28c.1200_CE%29.jpg',alt:'Map of overland and maritime trade routes across Afro-Eurasia around 1200',credit:'Map · Afro-Eurasian trade routes, c. 1200'};
const MOGAO={url:FP+'Great_Buddha,_Cave_96,_Mogao_Caves.jpg',sourceUrl:FILE+'Great_Buddha,_Cave_96,_Mogao_Caves.jpg',alt:'The great seated Buddha in Cave 96 at the Mogao Caves, Dunhuang',credit:'Mogao Caves, Dunhuang · carved 695',position:'50% 30%'};
const ANGKOR={url:FP+'Angkor%20Wat.jpg',sourceUrl:FILE+'Angkor_Wat.jpg',alt:'The towers of Angkor Wat in Cambodia',credit:'Angkor Wat · built early 1100s'};
const DJENNE={url:FP+'Great_Mosque_of_Djenn%C3%A9_2.jpg',sourceUrl:FILE+'Great_Mosque_of_Djenn%C3%A9_2.jpg',alt:'The mud-brick Great Mosque of Djenné in Mali',credit:'Great Mosque of Djenné · rebuilt 1907'};
const SAMARKAND_AI={ai:true,url:'../assets/images/topics/2-1/'+encodeURIComponent('2.1 - Samarkand.jpg'),alt:'An imagined scene of Samarkand: camel caravans and an ox cart loaded with goods approach a walled city of blue-domed buildings below mountains',cropBottom:.06,position:'50% 40%'};
const BAGHDAD={fit:'contain',url:FP+'Bagdad1258.jpg',sourceUrl:FILE+'Bagdad1258.jpg',alt:'A Persian manuscript painting of Mongol forces besieging Baghdad, with walls, a river and siege engines',credit:'Persian manuscript painting, c. 1430 · public domain'};
const ATLAS={fit:'contain',url:FP+'Caravane_Marco_Polo.jpg',sourceUrl:FILE+'Caravane_Marco_Polo.jpg',alt:'Detail of the Catalan Atlas showing a caravan of riders and camels crossing Asia',credit:'Catalan Atlas, 1375 · public domain'};
const IDRISI={fit:'contain',url:FP+'TabulaRogeriana.jpg',sourceUrl:FILE+'TabulaRogeriana.jpg',alt:'Al-Idrisi\'s world map, drawn with south at the top, showing Afro-Eurasia and the Indian Ocean',credit:'Tabula Rogeriana · al-Idrisi, 1154'};
const TEMPLATE_VISUALS={
  'hook':{visual:MAP},
  'city-growth':{visual:SAMARKAND_AI},
  'baghdad':{visual:BAGHDAD},
  'atlas':{visual:ATLAS},
  'landing':{visual:IDRISI}
};
const PANELS={'beliefs':[MOGAO,ANGKOR,DJENNE]};
for(const slide of T.slides){
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
  if(PANELS[slide.id]&&slide.template&&Array.isArray(slide.template.panels)){
    slide.template.panels.forEach((p,i)=>{if(PANELS[slide.id][i])p.visual=PANELS[slide.id][i];});
  }
}
})();
