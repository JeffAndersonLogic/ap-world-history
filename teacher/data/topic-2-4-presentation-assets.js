/* Topic 2.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 * Every picture here is a historical source, a BeHistorical instructional map,
 * or a modern photograph, map or painting from assets/images/topics/2-4/, each
 * credited as what it is. One is AI-generated: the trans-Saharan caravan
 * illustration on the closing slide, chosen by Jeff on 2026-09-23 for mood. It
 * carries the house AI label, and the slide's notes name its two faults (garbled
 * place names, a wheeled cart) as a check for the room, so it is never read as a
 * source. The Ghana, Mali and Songhay map it replaced is unused for now.
 * On 2026-09-24 Jeff moved the Mali routes-and-goods map onto the Map &
 * Geography slide, replacing the BeHistorical instructional map there, and
 * removed the separate goods-map slide as a repeat of the gold-and-salt slide.
 * The folder's Timbuktu photo is 300x200, too small to project. The Djinguereber Mosque photo this deck used returned
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
const LOCAL='../assets/images/topics/2-4/';
const local=name=>LOCAL+encodeURIComponent(name);
const DESERT={url:local('2.4 - Camel Caravan.jpg'),alt:'A line of camels and riders crossing high Saharan dunes',credit:'Modern photograph · the Sahara',position:'50% 60%'};
const GOODS_MAP={fit:'contain',url:local('2.4 - Mali.png'),alt:'Map of the Mali Empire and trans-Saharan routes, with salt moving south from Taghaza and gold moving north',credit:'Map · Mali Empire trade routes and goods'};
const CARAVAN_AI={ai:true,url:local('2.4 - Trans Saharan Trade Routes illustration.png'),alt:'An illustrated caravan of camels crossing Saharan dunes past an oasis fortress, with a route map in the sky',position:'50% 96%'};
const EMPIRES_MAP={url:local('2.4 - Ghana Mali Songhay Map.jpg'),alt:'Map of Africa showing the kingdom of Ghana and the Mali and Songhay empires, with trans-Saharan and Indian Ocean routes',credit:'Map · Ghana, Mali and Songhay, with trans-Saharan and maritime routes'};
const SALT={url:local('2.4 - Salt Slabs.jpg'),alt:'Rows of large rock-salt slabs stacked at a market',credit:'Modern photograph · Saharan rock salt'};
const HAJJ={url:local('2.4 - Mansa Musa Hajj.jpg'),alt:'A modern painting of Mansa Musa holding a gold scepter, with his caravan crossing the desert toward Cairo and Mecca',credit:'Modern painting · Higgins Bond',position:'30% 40%'};
const ATLAS={url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',alt:'Mansa Musa holding gold on the Catalan Atlas',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',credit:'Catalan Atlas, 1375 · Bibliothèque nationale de France · public domain'};
const VISUALS={
  'hook':DESERT,
  'basin':GOODS_MAP,
  'trade-cities':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg',alt:'The Great Mosque of Djenné, a 1907 building on the site of earlier mosques',sourceUrl:'https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Djenn%C3%A9_2.jpg',credit:'Great Mosque of Djenné · present building 1907, on the site of earlier mosques · Wikimedia Commons'}
};
const TEMPLATE_VISUALS={
  'taghaza':{visual:SALT},
  'landing':{visual:CARAVAN_AI},
  'mansa-musa':{scene:HAJJ,evidence:{url:ATLAS.url,alt:ATLAS.alt,credit:'Catalan Atlas, 1375 · BnF · public domain'}}
};
for(const slide of T.slides){
  if(VISUALS[slide.id])slide.visual=VISUALS[slide.id];
  if(TEMPLATE_VISUALS[slide.id]&&slide.template)Object.assign(slide.template,TEMPLATE_VISUALS[slide.id]);
}
})();
