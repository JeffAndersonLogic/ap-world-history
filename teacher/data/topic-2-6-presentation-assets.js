(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const find=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));
const routeMap='https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg';
const cropMap='../assets/images/instructional-maps/topic-2-6-crops.svg';
const plagueMap='../assets/images/instructional-maps/topic-2-6.svg';

const hero=T.slides.find(s=>s.phase==='recap');
if(hero){
  hero.visual={url:routeMap,alt:'Map of major Afro-Eurasian exchange routes',credit:'Wikimedia Commons · exchange-route reference map'};
  hero.position='left';
}

const crops=find('The road brings food');
if(crops)crops.visual={url:cropMap,alt:'Instructional map of crop diffusion across Afro-Eurasia',credit:'BeHistorical instructional map · Topic 2.6 crop diffusion'};

const plague=find('The same road brings death');
if(plague)plague.visual={url:plagueMap,alt:'Instructional map of the spread of the Black Death',credit:'BeHistorical instructional map · Topic 2.6 plague diffusion'};

const human=find('Connection can become catastrophe');
if(human){
  human.visual={url:'https://commons.wikimedia.org/wiki/Special:FilePath/Danse_macabre_by_Michael_Wolgemut.png',alt:'Michael Wolgemut print of the Dance of Death, 1493',credit:'Michael Wolgemut, 1493 · later cultural-memory evidence'};
  human.position='right';
}

const close=T.slides.find(s=>s.phase==='close');
if(close){
  close.visual={url:routeMap,alt:'Map of major Afro-Eurasian exchange routes',credit:'Wikimedia Commons · exchange-route reference map'};
  close.position='right';
}
})();
