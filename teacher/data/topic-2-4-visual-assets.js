(function(){
'use strict';
/* Topic 2.4 slide composition.
 * Framing is declared per slide (position) in topic-2-4-teaching-base.js and
 * read by the teacher page's own renderer. This file holds only composition
 * that cannot be said per slide.
 */
const css=document.createElement('style');
css.id='topic24-visual-assets';
css.textContent=`
.hold-slide{display:grid;place-items:center;text-align:center;background:radial-gradient(circle at 50% 40%,rgba(201,164,106,.1),transparent 38%),#060808}
.hold-slide .slide-kicker{margin-bottom:.8rem}
`;
document.head.appendChild(css);
})();
