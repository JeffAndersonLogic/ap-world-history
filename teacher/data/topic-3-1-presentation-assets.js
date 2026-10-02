(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const empiresMap='../assets/images/instructional-maps/topic-3-1.svg';

// One map of the four land empires, with Constantinople, Kandahar and Tondibi
// marked, introduces the empires and closes the lesson.
for(const phase of ['map','close']){
  const s=T.slides.find(x=>x.phase===phase);
  if(s)s.visual={url:empiresMap,alt:'Instructional map of the Ottoman, Safavid, Mughal and Qing empires, with Constantinople, Kandahar and Tondibi marked and the Moroccan army\'s route across the Sahara',credit:'BeHistorical instructional map · Topic 3.1'};
}

})();
