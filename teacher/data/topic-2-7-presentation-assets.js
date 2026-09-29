(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const networksMap='../assets/images/instructional-maps/topic-2-7.svg';

// One map of all three networks opens and closes the lesson: the comparison
// starts and ends with the three cases side by side.
for(const phase of ['recap','close']){
  const s=T.slides.find(x=>x.phase===phase);
  if(s)s.visual={url:networksMap,alt:'Instructional map of the Silk Roads, Indian Ocean and trans-Saharan networks, c. 1200 to 1450',credit:'BeHistorical instructional map · Topic 2.7'};
}

})();
