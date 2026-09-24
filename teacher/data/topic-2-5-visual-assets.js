(function(){
'use strict';
/* Topic 2.5 slide composition.
 * Every slide is a template from assets/js/behistorical-slide-templates.js, which
 * owns its own layout, so this file holds only the hold screen the projector shows
 * in place of Teacher Preflight.
 */
const css=document.createElement('style');
css.id='topic25-visual-assets';
css.textContent=`
.hold-slide{display:grid;place-items:center;text-align:center;background:radial-gradient(circle at 50% 40%,rgba(201,164,106,.1),transparent 38%),#060808}
.hold-slide .slide-kicker{margin-bottom:.8rem}
`;
document.head.appendChild(css);
})();
