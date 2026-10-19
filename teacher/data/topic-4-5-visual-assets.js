(function(){
'use strict';
const css=document.createElement('style');
css.id='topic45-visual-assets';
css.textContent=`
/* The map is taller than the slide's image row; pin it inside the row so the
   whole map, key and note included, stays on the board. */
.image-canvas{position:relative;overflow:hidden}
.image-canvas img{position:absolute;inset:1.3% 2.2%;width:auto;height:auto;max-width:95.6%;max-height:97.4%;margin:auto}
`;
document.head.appendChild(css);
})();
