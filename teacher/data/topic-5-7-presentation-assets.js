/* Topic 5.7 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. Wikimedia Commons answered
 * HTTP 429 to the session's API calls, so the pictures come from the Library
 * of Congress's own image server (downloaded 2026-10-29), each found through
 * its catalogue. No AI-generated picture is used (no generator key was set).
 * The question and landing slides open and close on real historical scenes,
 * under Jeff's standard of 2026-10-14.
 *
 * Stored under assets/images/topics/5-7 (new):
 * - royal-exchange-london-photochrom-1890s.jpg: [Royal Exchange, London,
 *   England], photochrom, between about 1890 and 1900, Detroit Publishing Co.
 *   print no. 1504. Library of Congress 2002696923 (no known restrictions).
 *   Paper margins trimmed.
 * - adam-smith-mackenzie-after-tassie-1805.jpg: Adam Smith, stipple engraving
 *   by MacKenzie after James Tassie, "Engraved for Chapman's Edition of Wealth
 *   of Nations 1805." Library of Congress 2004672780. Mount trimmed.
 * - worlds-exchanges-root-tinker-1886.jpg: The World's Exchanges, Root &
 *   Tinker, New York, 1886. Library of Congress 98516796. Margins trimmed.
 * - lever-sunlight-self-washer-trademark-1886.jpg: trademark registration
 *   no. 13,624, Lever Bros., Warrington, registered 31 August 1886. Library
 *   of Congress 2020707577.
 * - lever-sunlight-soap-trademark-1891.jpg: trademark registration no. 19,423,
 *   Lever Brothers, Limited, Port Sunlight, registered 5 May 1891. Library of
 *   Congress 2020713351.
 * - liverpool-dock-fruit-stands-1893.jpg: Fruit Stands on the Dock,
 *   Liverpool, England, William H. Rau, sold by Griffith & Griffith,
 *   Philadelphia, about 1893, left half of a stereograph. Library of Congress
 *   2019637949. Card mount trimmed.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-7/';
const EXCHANGE={url:IMG+'royal-exchange-london-photochrom-1890s.jpg',alt:'A colored photograph of a large stone building with tall columns and a carved triangular top, a statue of a man on horseback in front, and horse-drawn buses, carriages and crowds in hats filling the street, with tall office buildings along the right',credit:'The Royal Exchange, London, photochrom, about 1890 to 1900 · Library of Congress · Public domain',ratio:1.372,position:'50% 70%'};
const SMITH={url:IMG+'adam-smith-mackenzie-after-tassie-1805.jpg',alt:'A black-and-white engraving of Adam Smith in profile facing right, with a curled white wig, a dark coat and a high collar, inside a dotted oval',credit:'Adam Smith, engraving by MacKenzie after James Tassie, 1805 · Library of Congress · Public domain',ratio:0.712,position:'50% 38%'};
const WORLD={url:IMG+'worlds-exchanges-root-tinker-1886.jpg',alt:'A printed sheet of eight drawings of large stone buildings, each labeled with its city: the stock exchanges of New York, Paris, London, Chicago, Hamburg, Frankfurt, Berlin and Brussels',credit:'The World\'s Exchanges, Root & Tinker, New York, 1886 · Library of Congress · Public domain',ratio:1.092,position:'50% 45%'};
const SOAP1886={url:IMG+'lever-sunlight-self-washer-trademark-1886.jpg',alt:'A yellowed United States trademark form headed Trade-Mark, Lever Bros., Soap for household and all other purposes, registered August 31, 1886, with a small printed label pasted in the middle reading Sunlight, the Self-Washer Tablet',credit:'Lever Bros., U.S. trademark registration, 1886 · Library of Congress · Public domain',ratio:0.673};
const SOAP1891={url:IMG+'lever-sunlight-soap-trademark-1891.jpg',alt:'A yellowed United States trademark form for Lever Brothers, Limited, registered May 5, 1891, with a printed advertisement pasted in: Sunlight Soap in large letters, a drawing of two hands, a sign-language alphabet with a slogan for each letter, and instructions for washing clothes',credit:'Lever Brothers, U.S. trademark registration, 1891 · Library of Congress · Public domain',ratio:0.674};
const DOCK={url:IMG+'liverpool-dock-fruit-stands-1893.jpg',alt:'An old brown-toned photograph of a cobbled dock: a woman in a striped shawl sits beside a wooden stand piled with fruit, more stands line the quay, well-dressed women and a child walk along the pavement, and brick warehouses and a church spire stand behind',credit:'William H. Rau, Fruit Stands on the Dock, Liverpool, stereograph, about 1893 · Library of Congress · Public domain',ratio:1.147,position:'40% 55%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{place:'top',visual:EXCHANGE});
setTemplate('smith',{visual:SMITH,caption:'Adam Smith, engraved in 1805'});
setTemplate('stock',{visual:Object.assign({},WORLD,{fit:'contain'}),caption:'The World\'s Exchanges, New York, 1886'});
const lever=by('lever');
if(lever&&lever.template&&Array.isArray(lever.template.panels)){
  lever.template.panels[0]=Object.assign({},lever.template.panels[0],{visual:SOAP1886});
  lever.template.panels[1]=Object.assign({},lever.template.panels[1],{visual:SOAP1891});
}
setTemplate('close',{visual:Object.assign({},DOCK,{position:'50% 45%'})});
})();
