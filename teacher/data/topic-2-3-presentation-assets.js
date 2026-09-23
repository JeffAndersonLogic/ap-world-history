/* Topic 2.3 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Most of these images are AI-generated illustrations (Google, marked in their
 * C2PA metadata). They are used on slides as illustrations and are labeled that
 * way on screen. They are never used as Evidence Lab evidence: Module 07 asks
 * students to observe a real historical object, and an illustration is not one.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const BH23_ASSETS = '../assets/images/topics/2-3/';
const BH23 = {
  dhow: BH23_ASSETS + '2.3%20-%20Dhow%20Ship.jpeg',
  diaspora: BH23_ASSETS + '2.3%20-%20Diasporic%20Communities.jpg',
  tradeMap: BH23_ASSETS + '2.3%20-%20Indian%20Ocean%20Trade%20Map%20Detailed.jpg',
  trade: BH23_ASSETS + '2.3%20-%20Indian%20Ocean%20Trade.jpg',
  orgChart: BH23_ASSETS + '2.3%20-%20Indian%20Ocean%20Trade%20Org%20Chart.png',
  malayMarket: BH23_ASSETS + '2.3%20-%20Malay%20market.jpg',
  monsoonMap: BH23_ASSETS + '2.3%20-%20Monsoons%20map.jpg',
  maritimeTech: BH23_ASSETS + '2.3%20-%20Maritime%20technologies.jpg',
  swahili: BH23_ASSETS + '2.3%20-%20Swahili%20Merchants.jpg',
  zhengHe: BH23_ASSETS + '2.3%20-%20Zheng%20He%20Fleet.jpg'
};
// AI-generated per their C2PA metadata. Everything else in this folder is a
// map or diagram with no generator mark.
const AI='Historical Reconstruction - AI Generated';

const VISUALS={
  'hook':{url:BH23.dhow,alt:'Illustration of a dhow-style sailing ship crossing the Indian Ocean',credit:AI},
  'basin':{url:BH23.tradeMap,alt:'Detailed Indian Ocean trade map showing major routes and connected regions',credit:'Simeon Netchev · World History Encyclopedia · Indian Ocean trade map'},
  'monsoon-map':{url:BH23.monsoonMap,alt:'Monsoon map showing seasonal wind patterns across the Indian Ocean',credit:'BeHistorical visual · Monsoon wind map',fit:'cover',position:'50% 100%'},
  'navigation':{url:BH23.maritimeTech,alt:'Illustration of a compass and astrolabe representing maritime navigation technology',credit:AI},
  'markets':{url:BH23.malayMarket,alt:'Illustration of a Malay market scene representing a cosmopolitan Indian Ocean port economy',credit:AI,fit:'cover',position:'50% 100%'},
  'system-view':{url:BH23.orgChart,alt:'Indian Ocean trade organization chart connecting technologies, routes, states, and communities',credit:'BeHistorical visual · Indian Ocean trade system'},
  'diaspora':{url:BH23.diaspora,alt:'Illustration of diasporic merchant communities in an Indian Ocean port',credit:AI,fit:'cover',position:'50% 100%'},
  'zheng-he':{url:BH23.zhengHe,alt:'Illustration of the Zheng He fleet sailing through the Indian Ocean',credit:AI,fit:'contain',position:'50% 100%'},
  'beintheroom':{url:BH23.swahili,alt:'Swahili merchants in an Indian Ocean port city',credit:'BeHistorical visual · Swahili merchants',fit:'cover',position:'50% 72%'},
  'landing':{url:BH23.trade,alt:'Illustration of an Indian Ocean trade scene with ships and exchange across the maritime network',credit:AI}
};
for(const slide of T.slides){
  if(VISUALS[slide.id])slide.visual=VISUALS[slide.id];
}
})();
