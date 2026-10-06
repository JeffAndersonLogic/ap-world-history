/* Topic 3.3 verified repo-local visual assignment. */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const s=T.slides.find(x=>x.phase==='rivalry-map');
if(s)s.visual={
  url:'../assets/images/instructional-maps/topic-3-1.svg',
  alt:'Instructional map showing the Ottoman, Safavid, Mughal and Qing land empires, including the Ottoman-Safavid frontier',
  credit:'BeHistorical instructional map · Unit 3'
};
})();
