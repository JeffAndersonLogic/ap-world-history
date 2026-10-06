/* Topic 3.4 verified repo-local visual assignment. */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const s=T.slides.find(x=>x.phase==='expand-proof');
if(s)s.visual={
  url:'../assets/images/topics/3-1/panipat-1526.jpg',
  alt:'Historical illustration representing the First Battle of Panipat in 1526',
  credit:'Panipat, 1526 · verified Unit 3 asset',
  fit:'contain'
};
})();
