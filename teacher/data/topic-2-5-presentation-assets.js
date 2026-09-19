(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const byTitle=needle=>T.slides.find(s=>String(s.title||'').toLowerCase().includes(String(needle).toLowerCase()));
const map='https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg';

const open=T.slides.find(s=>s.phase==='launch'&&s.kind==='hero');
if(open){
  open.visual={url:map,alt:'Map of major Afro-Eurasian exchange routes',credit:'Wikimedia Commons · exchange-route reference map'};
  open.position='left';
}

const belief=byTitle('Beliefs crossed regions');
if(belief) belief.visual={
  url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Buddha,_Cave_96,_Mogao_Caves.jpg',
  alt:'Great Buddha in Cave 96 at the Mogao Caves in Dunhuang',
  credit:'Mogao Caves, Dunhuang · cultural-diffusion evidence'
};

const tech=byTitle('Technology traveled too');
if(tech) tech.visual={
  url:'../assets/images/topics/2-1/2.1 - Chinese Paper Money.jpg',
  alt:'Chinese paper money showing established paper and printing technology',
  credit:'BeHistorical classroom visual · paper technology'
};

const growth=byTitle('Networks can make cities boom');
if(growth) growth.visual={
  url:'../assets/images/topics/2-1/2.1 - Samarkand.jpg',
  alt:'Samarkand as a major Afro-Eurasian trading city',
  credit:'BeHistorical classroom visual · Samarkand'
};

const decline=byTitle('connectivity never guarantees');
if(decline) decline.visual={
  url:'https://commons.wikimedia.org/wiki/Special:FilePath/Bagdad1258.jpg',
  alt:'Later medieval manuscript depiction of the Mongol siege of Baghdad',
  credit:'Later medieval manuscript image · supporting evidence for urban disruption'
};

const travelers=byTitle('More movement created more observers');
if(travelers){
  travelers.visual={
    url:'https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_Marco_Polo.jpg',
    alt:'Marco Polo caravan depicted in the Catalan Atlas of 1375',
    credit:'Catalan Atlas, 1375 · public domain'
  };
  travelers.position='right';
}

const mapCheck=T.slides.find(s=>s.phase==='map');
if(mapCheck) mapCheck.visual={url:map,alt:'Map of major Afro-Eurasian exchange routes',credit:'Wikimedia Commons · exchange-route reference map'};

const close=T.slides.find(s=>s.phase==='close');
if(close){
  close.visual={
    url:'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    alt:'Al-Idrisi world map representing accumulated geographic knowledge',
    credit:'Tabula Rogeriana · al-Idrisi, 1154'
  };
  close.position='right';
}
})();
