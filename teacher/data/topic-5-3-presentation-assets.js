/* Topic 5.3 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain, looked
 * at and read against its holder's record. Wikimedia Commons was rate limited
 * (HTTP 429) for the whole session, so the new pictures come from the Wellcome
 * Collection's open IIIF image service (downloaded 2026-10-22) and the rest are
 * copies already mirrored in this repository from Commons.
 *
 * Stored under assets/images/topics/5-3 (new):
 * - mule-spinning-allom-1834.jpg: "Mule Spinning," engraving, drawn by Thomas
 *   Allom, engraved by J. W. Lowry, published by Fisher, Son and Co., London,
 *   1834 (the plates of Edward Baines's History of the Cotton Manufacture in
 *   Great Britain, 1835). Wellcome Collection V0024077, public domain mark.
 * - carding-drawing-roving-allom-engraving.jpg: "Carding, Drawing, and
 *   Roving," engraving of the same series, here from a later reprint headed
 *   "Economic Botany: The Cotton Manufacture, Plate II." Wellcome Collection
 *   V0039844 (catalogue title "Textiles: women and children working at large
 *   cotton manufacturing machines"), public domain mark.
 * - cotton-plant-pass-after-merian-1807.jpg: "Gossypium religiosum; or Cotton
 *   Tree," hand-colored engraving by J. Pass after Maria Sibylla Merian,
 *   published in London by J. Wilkes, 20 June 1807. Wellcome Collection
 *   V0044339, public domain mark.
 *
 * Already in the repository (assets/images/commons, credits in its manifest):
 * - philipp-jakob-loutherbourg-d-j-002-23c595.jpg: Philip James de
 *   Loutherbourg, Coalbrookdale by Night, oil, 1801, Science Museum, London.
 * - wyld-william-manchester-from-kersal-moor-...jpg: William Wyld, Manchester
 *   from Kersal Moor, watercolor, 1852, Royal Collection RCIN 920223.
 *
 * No AI-generated picture is used (no generator key was set). The question and
 * landing slides open and close on real historical scenes, under Jeff's
 * standard of 2026-10-14. No period picture of Cromford Mill could be sourced.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-3/';
const COMMONS='../assets/images/commons/';
const NIGHT={url:COMMONS+'philipp-jakob-loutherbourg-d-j-002-23c595.jpg',alt:'A painting of an ironworks at night in a river valley: furnaces send up great clouds of orange fire and smoke behind dark buildings with tall chimneys, while in the foreground a horse pulls a cart along a road strewn with iron cylinders and a few people walk by',credit:'Philip James de Loutherbourg, Coalbrookdale by Night, oil, 1801 · Science Museum, London · Public domain',ratio:1.565,position:'50% 45%'};
const COTTON={url:IMG+'cotton-plant-pass-after-merian-1807.jpg',alt:'A hand-colored botanical print of a cotton plant: broad green leaves, two large yellow flowers, green seed pods, one brown pod split open to show white cotton fiber, and a spiny caterpillar climbing the stem; the title above reads Gossypium',credit:'J. Pass after Maria Sibylla Merian, Cotton Tree, hand-colored etching, London, 1807 · Wellcome Collection · Public domain',ratio:0.759,fit:'contain'};
const CARDING={url:IMG+'carding-drawing-roving-allom-engraving.jpg',alt:'An engraving of a long mill room: on the left a row of big drum-shaped carding machines driven by belts from wheels on the ceiling; a girl crouches by tall cans of cotton and a young woman lifts another can; on the right, rows of upright drawing frames; more women work down the aisle',credit:'Carding, Drawing, and Roving, engraving, 19th century · Wellcome Collection · Public domain',ratio:1.329,fit:'contain'};
const MULE={url:IMG+'mule-spinning-allom-1834.jpg',alt:'An engraving of a long spinning room under an iron roof with skylights: two long spinning machines run down each side, with hundreds of spindles; a man leans on one machine, a woman reaches across the threads of another, and a boy crawls underneath it sweeping',credit:'Thomas Allom, engraved by J. W. Lowry, Mule Spinning, London, 1834 · Wellcome Collection · Public domain',ratio:1.291,fit:'contain'};
const MANCHESTER={url:COMMONS+'wyld-william-manchester-from-kersal-moor-with-rustic-figures-and-goats-98dd3c.jpg',alt:'A watercolor view across green fields and a winding river to a distant city on the horizon, its many tall factory chimneys and church spires sending up smoke into a pale golden sky; two women sit under trees on a hill in the foreground with two goats',credit:'William Wyld, Manchester from Kersal Moor, watercolor, 1852 · Royal Collection · Public domain',ratio:1.561,position:'50% 55%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:Object.assign({},NIGHT,{tagPos:'bl'})});
setTemplate('risk',{visual:COTTON});
setTemplate('steps',{pictures:[
  {visual:Object.assign({},CARDING,{fit:'cover',position:'30% 60%'}),caption:'Carding, drawing and roving'},
  {visual:Object.assign({},MULE,{fit:'cover',position:'55% 62%'}),caption:'Mule spinning, 1834'}
]});
setTemplate('close',{visual:Object.assign({},MANCHESTER,{tagPos:'bl'})});
})();
