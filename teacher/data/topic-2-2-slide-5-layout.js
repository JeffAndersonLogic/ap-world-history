(function(){
'use strict';
const css=document.createElement('style');
css.id='topic22-slide5-layout';
css.textContent=`
/* Slide 5: keep the Chinggis Museum as the focal point by moving the teaching copy right. */
.hero-slide:has(img[src*="Chinggis%20Museum.jpg"]) .copy{
  left:auto!important;
  right:4%!important;
  top:auto!important;
  bottom:10%!important;
  width:min(41%,700px)!important;
  border-left:0!important;
  border-right:3px solid var(--gold)!important;
}
.hero-slide:has(img[src*="Chinggis%20Museum.jpg"]) .veil{
  background:linear-gradient(270deg,rgba(3,5,6,.94) 0%,rgba(3,5,6,.74) 31%,rgba(3,5,6,.23) 57%,rgba(3,5,6,.03) 78%)!important;
}
.project-mode .hero-slide:has(img[src*="Chinggis%20Museum.jpg"]) .copy{
  left:auto!important;
  right:4%!important;
  top:auto!important;
  bottom:9%!important;
  width:min(40%,780px)!important;
  padding:1.5rem 1.7rem!important;
}
`;
document.head.appendChild(css);
})();
