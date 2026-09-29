(function(){
'use strict';
/* Topic 2.5 slide composition.
 * Since the 2026-09-25 rebuild every projected slide is a slide template,
 * which carries its own layout, so this file holds only the projector hold
 * screen shown in place of the teacher preflight.
 */
const css=document.createElement('style');
css.id='topic25-visual-assets';
css.textContent=`
.hold-slide{display:grid;place-items:center;text-align:center;background:radial-gradient(circle at 50% 40%,rgba(201,164,106,.1),transparent 38%),#060808}
.hold-slide .slide-kicker{margin-bottom:.8rem}
`;
document.head.appendChild(css);
})();
