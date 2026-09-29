(function(){
'use strict';
/* Topic 2.3 slide composition.
 * Framing for each picture is declared per slide (fit and position) in
 * topic-2-3-presentation-assets.js, which the teacher page's own renderer reads.
 * This file holds only composition that cannot be said per slide.
 */
const css=document.createElement('style');
css.id='topic23-visual-assets';
css.textContent=`
.hold-slide{display:grid;place-items:center;text-align:center;background:radial-gradient(circle at 50% 40%,rgba(201,164,106,.1),transparent 38%),#060808}
.hold-slide .slide-kicker{margin-bottom:.8rem}
`;
document.head.appendChild(css);
})();
