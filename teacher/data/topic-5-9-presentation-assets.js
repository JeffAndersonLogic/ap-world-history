/* Topic 5.9 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. Wikimedia Commons answered
 * HTTP 429 to the session's API calls, so the new pictures come from the
 * Library of Congress's own image server (master TIFFs, downloaded and saved
 * as JPEG on 2026-11-08) and the Wellcome Collection's IIIF server, each found
 * through its catalogue. Wyld, Leech and the 1835 power-loom engraving were
 * already mirrored in the repo. No AI-generated picture is used (no generator
 * key was set). The question and landing slides open and close on real
 * historical scenes, under Jeff's standard of 2026-10-14.
 *
 * Already in the repo (assets/images/commons/, credits in its manifest.json):
 * - wyld-william-manchester-from-kersal-moor-...-98dd3c.jpg: William Wyld,
 *   Manchester from Kersal Moor, watercolor, signed and dated 1852, Royal
 *   Collection RCIN 920223 (Google Art Project).
 * - powerloom-weaving-in-1835-f81451.jpg: power-loom weaving, drawn by
 *   T. Allom, engraved by J. Tingle, in Edward Baines, History of the Cotton
 *   Manufacture in Great Britain (1835).
 * Stored under assets/images/topics/5-9 (new):
 * - currier-ives-four-seasons-middle-age-1868.jpg: Currier & Ives, The Four
 *   Seasons of Life: Middle Age, "The Season of Strength," lithograph, c1868.
 *   Library of Congress 92500887 (no known restrictions).
 * - riis-bayard-street-lodgers-five-cents-a-spot-1890.jpg: Jacob A. Riis,
 *   "Five cents a spot - unauthorized immigration lodgings in a Bayard Street
 *   tenement," ca. 1890. Library of Congress 2002710259.
 * - riis-sewing-pants-gotham-court-1890.jpg: Jacob A. Riis, "Sewing pants for
 *   the trade in a Gotham Court 'flat,' about 1890." Library of Congress
 *   2002710299.
 * - riis-garbage-east-fifth-street-1890.jpg: Jacob A. Riis, "Garbage in the
 *   streets, East Fifth Street, N.Y.C. tenement area," ca. 1890. Library of
 *   Congress 2002710278.
 * - snow-cholera-map-broad-street-1854.jpg: John Snow's map of cholera deaths
 *   around Broad Street, 1854, from the Cholera Inquiry Committee's report
 *   (1855). Wellcome Collection, work uxgfjt62, Public Domain Mark.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-9/';
const WYLD={url:'../assets/images/commons/wyld-william-manchester-from-kersal-moor-with-rustic-figures-and-goats-98dd3c.jpg',alt:'A watercolor of a green hillside with trees, where two women sit and two goats graze, looking across a river valley to a town of church spires and dozens of tall factory chimneys trailing smoke into a hazy golden sky',credit:'William Wyld, Manchester from Kersal Moor, 1852 · Royal Collection · Public domain',ratio:1.561,position:'50% 50%'};
const LOOM={url:'../assets/images/commons/powerloom-weaving-in-1835-f81451.jpg',alt:'An engraving of a long mill hall where young women tend rows of power looms driven by belts from shafts along the ceiling, while a man in a cap stands in the aisle and a woman kneels to adjust a loom',credit:'Power-loom weaving, engraving after T. Allom, 1835 · Public domain',ratio:1.548,position:'50% 50%'};
const FOUR={url:IMG+'currier-ives-four-seasons-middle-age-1868.jpg',alt:'A lithograph of a comfortable house: a father in a straw hat comes in from the porch and lifts a baby from its mother\'s arms, while a boy plays with a dog, a little girl runs toward them, and an older girl comes down the stairs with a doll',credit:'Currier & Ives, The Four Seasons of Life: Middle Age, about 1868 · Library of Congress · Public domain',ratio:1.246,position:'50% 50%'};
const LODGERS={url:IMG+'riis-bayard-street-lodgers-five-cents-a-spot-1890.jpg',alt:'An old flash photograph of a small, cluttered room at night: a man sits on a high bunk, and men and women lie under blankets on the floor and in a lower bunk beside a stove, with pots on shelves and bundles hanging from the wall',credit:'Jacob Riis, lodgers in a Bayard Street tenement, about 1890 · Library of Congress · Public domain',ratio:1.255,position:'50% 50%'};
const SEWING={url:IMG+'riis-sewing-pants-gotham-court-1890.jpg',alt:'An old photograph of an older woman in a headscarf and two girls sitting by a window in a bare room, each sewing a pair of dark trousers on her lap',credit:'Jacob Riis, sewing pants in a Gotham Court flat, about 1890 · Library of Congress · Public domain',ratio:1.263,position:'50% 40%'};
const GARBAGE={url:IMG+'riis-garbage-east-fifth-street-1890.jpg',alt:'An old photograph of a New York street of four- and five-story buildings with fire escapes, its roadway buried in a long heap of rubbish and ash, with carts parked along it',credit:'Jacob Riis, garbage in the streets, East Fifth Street, about 1890 · Library of Congress · Public domain',ratio:1.227,position:'50% 60%'};
const SNOW={url:IMG+'snow-cholera-map-broad-street-1854.jpg',alt:'A street map of part of Soho, London, with small black bars stacked along the streets, thickest around a pump marked on Broad Street',credit:'John Snow, cholera deaths around Broad Street, 1854 · Wellcome Collection · Public domain',ratio:1.078,position:'50% 50%',fit:'contain'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:WYLD});
setTemplate('earners',{visual:SEWING});
setTemplate('twohomes',{left:Object.assign({},by('twohomes').template.left,{visual:LOOM}),right:Object.assign({},by('twohomes').template.right,{visual:FOUR})});
setTemplate('growth',{visual:WYLD});
setTemplate('health',{visual:SNOW});
setTemplate('newyork',{visual:LODGERS});
setTemplate('by1900',{visual:GARBAGE});
setTemplate('close',{visual:LODGERS});
})();
