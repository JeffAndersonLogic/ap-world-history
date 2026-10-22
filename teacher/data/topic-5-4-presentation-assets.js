/* Topic 5.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. No AI-generated picture is
 * used (no generator key was set).
 *
 * Already in the repository (assets/images/commons, credits in its manifest):
 * - the-opening-of-the-great-exhibition-by-queen-victoria-on-1-may-1851-5fa547.jpg:
 *   Henry Courtney Selous, The Opening of the Great Exhibition by Queen
 *   Victoria on 1 May 1851, oil, Victoria and Albert Museum.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const COMMONS='../assets/images/commons/';
const OPENING={url:COMMONS+'the-opening-of-the-great-exhibition-by-queen-victoria-on-1-may-1851-5fa547.jpg',alt:'A painting of a vast hall of iron and glass with a tall tree growing inside it; Queen Victoria, Prince Albert and their children stand on a carpeted platform in the center, while crowds of officials in uniforms and dark coats, and men in Chinese and Ottoman dress, stand on either side and spectators fill the galleries above',credit:'Henry Courtney Selous, The Opening of the Great Exhibition by Queen Victoria on 1 May 1851, oil · Victoria and Albert Museum · Public domain',ratio:1.43,position:'50% 40%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:Object.assign({},OPENING,{tagPos:'bl'})});
})();
