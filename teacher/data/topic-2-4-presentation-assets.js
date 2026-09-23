/* Topic 2.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 * Every picture here is a historical source or a BeHistorical instructional map;
 * none is AI-generated. The Djinguereber Mosque photo this deck used returned
 * 404 on Commons (nightly, 2026-09-20) and was replaced by the Djenné photo the
 * lesson's own Evidence Lab already uses.
 *
 * VISUALS go on a slide's own `visual` (hero and map slides). TEMPLATE_VISUALS
 * go on `template.visual`, which is where a slide template reads its picture.
 * Both are URLs the lesson already serves, so nothing here is new to Commons.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const MAP='../assets/images/instructional-maps/topic-2-4.svg';
const ATLAS={url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',alt:'Mansa Musa holding gold on the Catalan Atlas',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',credit:'Catalan Atlas, 1375 · Bibliothèque nationale de France · public domain'};
const VISUALS={
  'hook':ATLAS,
  'basin':{url:MAP,alt:'Instructional map of trans-Saharan routes and West African states',credit:'BeHistorical instructional map · Topic 2.4'},
  'trade-cities':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg',alt:'The Great Mosque of Djenné, a 1907 building on the site of earlier mosques',sourceUrl:'https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Djenn%C3%A9_2.jpg',credit:'Great Mosque of Djenné · present building 1907, on the site of earlier mosques · Wikimedia Commons'},
  'landing':{url:MAP,alt:'Trans-Saharan trade routes',credit:'BeHistorical instructional map · Topic 2.4'}
};
const TEMPLATE_VISUALS={
  'mansa-musa':{url:ATLAS.url,alt:ATLAS.alt,credit:'Catalan Atlas, 1375 · BnF · public domain'}
};
for(const slide of T.slides){
  if(VISUALS[slide.id])slide.visual=VISUALS[slide.id];
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)slide.template.visual=TEMPLATE_VISUALS[slide.id];
}
})();
