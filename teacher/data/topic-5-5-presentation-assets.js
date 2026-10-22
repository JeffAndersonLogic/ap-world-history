/* Topic 5.5 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. Wikimedia Commons was rate
 * limited (HTTP 429) for the session, so the pictures come from the holders'
 * own image servers (downloaded 2026-10-22), each found through the holder's
 * catalogue or API. No AI-generated picture is used (no generator key was
 * set). The question and landing slides open and close on real historical
 * scenes, under Jeff's standard of 2026-10-14.
 *
 * Stored under assets/images/topics/5-5 (new):
 * - currier-ives-lightning-express-1874.jpg: American Railroad Scene:
 *   Lightning Express Trains Leaving the Junction, color lithograph, New
 *   York, Currier & Ives, 1874, Parsons & Atwater del. Library of Congress
 *   90708612 (no known restrictions). Paper margins and title trimmed.
 * - currier-ives-night-railway-junction-1876.jpg: Night Scene at an American
 *   Railway Junction: Lightning Express, Flying Mail, and Owl Trains, "On
 *   Time," chromolithograph, Currier & Ives, c1876, Parsons & Atwater del.
 *   Library of Congress 97507615. Margins and title trimmed.
 * - newcomen-engine-engraving-1740s.jpg: "Engineering: a Newcomen
 *   steam-engine. Engraving, 174-." Wellcome Collection 45364i (V0024483),
 *   public domain mark.
 * - oil-rig-titusville-c1900.jpg: "Oil rig at Titusville, Pa.," photographic
 *   print, ca. 1900, "Photo by Mather," labeled hand-colored; the copy
 *   served is black and white. Library of Congress 2012647896.
 * - Also on the lesson page only: Across the Continent (1868), the Great
 *   Eastern with the Atlantic cable (Illustrated London News, 14 July 1866),
 *   and the Promontory Summit ceremony photograph (10 May 1869), all Library
 *   of Congress.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-5/';
const LIGHTNING={url:IMG+'currier-ives-lightning-express-1874.jpg',alt:'A color print of two black steam locomotives with red cowcatchers pulling out side by side from a busy station, smoke pouring from their stacks; behind them red and yellow freight and mail cars marked From Ocean to Ocean, Through to the Pacific and U.S. Mail, and a river and bridge in the distance',credit:'Currier & Ives, American Railroad Scene: Lightning Express Trains Leaving the Junction, color lithograph, 1874 · Library of Congress · Public domain',ratio:1.678,position:'50% 55%'};
const NIGHT={url:IMG+'currier-ives-night-railway-junction-1876.jpg',alt:'A color print of a railway junction at night under a full moon: locomotives with bright headlamps pull red and yellow passenger cars, workers carry lanterns and baggage, steamboats sit in the harbor behind, and telegraph wires run on tall poles at the upper right',credit:'Currier & Ives, Night Scene at an American Railway Junction, chromolithograph, 1876 · Library of Congress · Public domain',ratio:1.646,position:'50% 50%'};
const NEWCOMEN={url:IMG+'newcomen-engine-engraving-1740s.jpg',alt:'An engraving of a Newcomen steam engine in a brick engine house: a fire under a round boiler at the bottom, a tall cylinder above it, a great wooden beam rocking on the wall, and chains and pump rods hanging down on the left into the mine',credit:'Engineering: a Newcomen steam-engine, engraving, 1740s · Wellcome Collection · Public domain',ratio:0.633,fit:'contain'};
const RIG={url:IMG+'oil-rig-titusville-c1900.jpg',alt:'An old black-and-white photograph of a tall wooden oil derrick on a hillside, with a group of workmen standing beside a steam boiler and a tall smokestack on the right',credit:'Oil rig at Titusville, Pennsylvania, photograph by Mather, about 1900 · Library of Congress · Public domain',ratio:1.466,fit:'cover',position:'40% 50%'};
const ACROSS={url:IMG+'currier-ives-across-the-continent-1868.jpg',alt:'A black-and-white print looking down on a new log-cabin town beside a railroad; a train puffs west past the town and a line of telegraph poles, covered wagons move along a road, and two Native American riders watch from the right',credit:'Currier & Ives, Across the Continent, lithograph drawn by Fanny Palmer from a design by J. M. Ives, 1868 · Library of Congress · Public domain',ratio:1.27,fit:'cover',position:'55% 60%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{place:'top',visual:Object.assign({},LIGHTNING,{tagPos:'bl'})});
setTemplate('steam',{visual:NEWCOMEN,caption:'A Newcomen engine, engraved in the 1740s'});
setTemplate('oil',{visual:RIG,caption:'An oil rig at Titusville, about 1900'});
setTemplate('effects',{visual:ACROSS,caption:'Across the Continent, a print of 1868'});
setTemplate('close',{place:'top',visual:Object.assign({},NIGHT,{tagPos:'bl'})});
})();
