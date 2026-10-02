(function(){
'use strict';
const css=document.createElement('style');
css.id='topic27-visual-assets';
css.textContent=`
.hero-slide .media{background:#030404}
.hero-slide img{object-fit:contain!important;object-position:center center!important;background:#030404}
.hero-slide .copy{padding:1.2rem 1.35rem;background:rgba(4,6,7,.46);border-left:3px solid var(--gold);backdrop-filter:blur(3px);text-shadow:0 2px 18px rgba(0,0,0,.78)}
.hero-slide.right .copy{left:auto!important;right:4.5%!important;width:min(44%,780px)!important}
.hero-slide.right .veil{background:linear-gradient(270deg,rgba(3,5,6,.94) 0%,rgba(3,5,6,.72) 34%,rgba(3,5,6,.16) 64%,rgba(3,5,6,.04) 82%)!important}
/* The picture is pinned to the canvas box and contained inside it. A percentage
   max-height on an in-flow image never resolved here (the canvas's own grid row
   is content-sized), so the map grew to full width and the footer cut off its key. */
.image-canvas{overflow:hidden!important;position:relative!important}
.image-canvas img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;box-sizing:border-box!important;padding:1% 2%!important;object-fit:contain!important;object-position:center center!important;display:block!important}
.grid-card h3{font-size:clamp(.76rem,1vw,1.05rem)!important}
.grid-card p{font-size:clamp(.96rem,1.28vw,1.38rem)!important}
.process-node p{font-size:clamp(.78rem,1.05vw,1.12rem)!important}
.project-mode .hero-slide .copy{padding:1.5rem 1.7rem}
.project-mode .hero-slide h2{font-size:clamp(3.4rem,4.8vw,5.8rem)}
.project-mode .hero-slide.right .copy{width:min(44%,880px)!important}
`;
document.head.appendChild(css);
})();
