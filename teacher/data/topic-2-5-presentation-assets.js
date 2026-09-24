/* Topic 2.5 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Rebuilt 2026-09-24. Every picture is a real source the course already ships and
 * nightly already checks (scripts/check-image-urls.js); none is AI-generated, and
 * none is new to Commons, because commons.wikimedia.org could not be reached from
 * the session that did the rebuild, so nothing new could be verified.
 *
 * Left out on purpose:
 * - Great Buddha, Mogao Cave 96: Jeff rejected it on 2026-09-24 as a poor picture.
 *   The Buddhism panel uses the Mogao mural Foundations 4 already ships until a
 *   better, verified East Asian Buddha replaces it (the Kamakura Great Buddha,
 *   cast 1252, would sit inside the period).
 * - 2.1 Chinese Paper Money: 500x301, too small to project.
 * - 2.1 Samarkand: AI-generated, and the cities slide now carries its evidence in
 *   words rather than a reconstruction.
 * - 2.1 Silk Road Map: shows the late 700s and the Silk Roads only.
 * - Silk_route.jpg and Bagdad1258.jpg: the slides that used them are gone. The
 *   Baghdad manuscript stays in the Evidence Lab.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const FP=name=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+name;

const CARAVAN={fit:'contain',url:FP('Caravane_Marco_Polo.jpg'),alt:'A caravan of riders and camels crossing Asia, painted on the Catalan Atlas of 1375',credit:'Catalan Atlas, 1375 · BnF · public domain'};
const BUDDHA={url:FP('Mural_of_Buddha_in_Mogao_Caves,_Dunhuang.jpg'),alt:'A painted mural of the Buddha in the Mogao Caves at Dunhuang, a Silk Road oasis in western China',credit:'Mogao Caves, Dunhuang · mural'};
const ANGKOR={url:FP('Angkor%20Wat.jpg'),alt:'The towers of Angkor Wat in Cambodia, a temple built for Vishnu that later became a Buddhist site',credit:'Angkor Wat · built 1100s',position:'50% 45%'};
const DJENNE={url:FP('Great_Mosque_of_Djenn%C3%A9_2.jpg'),alt:'The Great Mosque of Djenné in Mali, a mud-brick building on the site of earlier mosques',credit:'Great Mosque of Djenné · 1907, on an older site'};
const IDRISI={fit:'contain',url:FP('TabulaRogeriana.jpg'),alt:'Al-Idrisi’s world map, made in 1154 from the reports of travelers and merchants',credit:'Tabula Rogeriana · al-Idrisi, 1154'};

const TEMPLATE_VISUALS={
  hook:{visual:CARAVAN},
  landing:{visual:IDRISI}
};
const PANELS={beliefs:[BUDDHA,ANGKOR,DJENNE]};

for(const slide of T.slides){
  if(!slide.template)continue;
  if(TEMPLATE_VISUALS[slide.id])Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
  if(PANELS[slide.id])slide.template.panels=slide.template.panels.map((p,i)=>Object.assign({},p,{visual:PANELS[slide.id][i]}));
}
})();
