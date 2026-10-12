(function(){
'use strict';
const css=document.createElement('style');
css.id='topic42-visual-assets';
css.textContent=`
.grid-card h3{font-size:clamp(.76rem,1vw,1.05rem)!important}
.grid-card p{font-size:clamp(.96rem,1.28vw,1.38rem)!important}
/* The routes map is taller than the slide's image row; pin it inside the row so
   the whole map, key and note included, stays on the board. */
.image-canvas{position:relative;overflow:hidden}
.image-canvas img{position:absolute;inset:1.3% 2.2%;width:auto;height:auto;max-width:95.6%;max-height:97.4%;margin:auto}
`;
document.head.appendChild(css);
})();
