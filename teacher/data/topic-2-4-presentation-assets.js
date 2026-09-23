/* Topic 2.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 * Every picture here is a historical source, a BeHistorical instructional map,
 * or a modern photograph, map or painting from assets/images/topics/2-4/, each
 * credited as what it is; none is AI-generated. The folder's AI illustration of
 * the routes is deliberately unused: its place names are garbled (MARKESH,
 * MALTCTA, GAO three times) and it shows a wheeled cart crossing the Sahara.
 * Its Timbuktu photo is 300x200, too small to project. The Djinguereber Mosque photo this deck used returned
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
const LOCAL='../assets/images/topics/2-4/';
const local=name=>LOCAL+encodeURIComponent(name);
const DESERT={url:local('2.4 - Camel Caravan.jpg'),alt:'A line of camels and riders crossing high Saharan dunes',credit:'Modern photograph · the Sahara',position:'50% 60%'};
const GOODS_MAP={url:local('2.4 - Mali.png'),alt:'Map of the Mali Empire and trans-Saharan routes, with salt moving south from Taghaza and gold moving north',credit:'Map · Mali Empire trade routes and goods'};
const EMPIRES_MAP={url:local('2.4 - Ghana Mali Songhay Map.jpg'),alt:'Map of Africa showing the kingdom of Ghana and the Mali and Songhay empires, with trans-Saharan and Indian Ocean routes',credit:'Map · Ghana, Mali and Songhay, with trans-Saharan and maritime routes'};
const SALT={url:local('2.4 - Salt Slabs.jpg'),alt:'Rows of large rock-salt slabs stacked at a market',credit:'Modern photograph · Saharan rock salt'};
const HAJJ={url:local('2.4 - Mansa Musa Hajj.jpg'),alt:'A modern painting of Mansa Musa holding a gold scepter, with his caravan crossing the desert toward Cairo and Mecca',credit:'Modern painting · Higgins Bond',position:'30% 40%'};
const ATLAS={url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',alt:'Mansa Musa holding gold on the Catalan Atlas',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',credit:'Catalan Atlas, 1375 · Bibliothèque nationale de France · public domain'};
const VISUALS={
  'hook':DESERT,
  'goods-map':GOODS_MAP,
  'basin':{url:MAP,alt:'Instructional map of trans-Saharan routes and West African states',credit:'BeHistorical instructional map · Topic 2.4'},
  'trade-cities':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg',alt:'The Great Mosque of Djenné, a 1907 building on the site of earlier mosques',sourceUrl:'https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Djenn%C3%A9_2.jpg',credit:'Great Mosque of Djenné · present building 1907, on the site of earlier mosques · Wikimedia Commons'},
  'landing':EMPIRES_MAP
};
const TEMPLATE_VISUALS={
  'taghaza':{visual:SALT},
  'mansa-musa':{scene:HAJJ,evidence:{url:ATLAS.url,alt:ATLAS.alt,credit:'Catalan Atlas, 1375 · BnF · public domain'}}
};
for(const slide of T.slides){
  if(VISUALS[slide.id])slide.visual=VISUALS[slide.id];
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
}
})();
