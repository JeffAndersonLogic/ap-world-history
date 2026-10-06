(function(){
'use strict';
const css=document.createElement('style');
css.id='topic32-visual-assets';
css.textContent=`
.hero-slide .media{background:#030404}
.hero-slide img{object-fit:contain!important;object-position:center center!important;background:#030404}
.hero-slide .copy{padding:1.2rem 1.35rem;background:rgba(4,6,7,.46);border-left:3px solid var(--gold);backdrop-filter:blur(3px);text-shadow:0 2px 18px rgba(0,0,0,.78)}
/* The map is pinned to the canvas box and contained inside it, so the key at
   the foot of the picture is never cut off (same fix as Topic 2.7). */
.image-canvas{overflow:hidden!important;position:relative!important}
.image-canvas img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;box-sizing:border-box!important;padding:1% 2%!important;object-fit:contain!important;object-position:center center!important;display:block!important}
.grid-card h3{font-size:clamp(.76rem,1vw,1.05rem)!important}
.grid-card p{font-size:clamp(.96rem,1.28vw,1.38rem)!important}
`;
document.head.appendChild(css);
})();
