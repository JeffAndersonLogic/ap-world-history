/* Topic 5.10 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * 5.10 argues from the whole unit's evidence, so every picture is a real
 * historical object already verified for an earlier Unit 5 topic, carried with
 * the caption and credit that topic's build checked against its holder's
 * record. No new picture was sourced and none is AI-generated (no generator
 * key was set). The question and landing slides open and close on a real
 * historical object, under Jeff's standard of 2026-10-14.
 *
 * - currier-ives-across-the-continent-1868.jpg (5.5): Currier & Ives, Across
 *   the Continent, lithograph drawn by Fanny Palmer from a design by J. M.
 *   Ives, 1868. Library of Congress 90708413.
 * - powerloom-weaving-in-1835-f81451.jpg (commons): power-loom weaving, drawn
 *   by T. Allom, engraved by J. Tingle, in Edward Baines, History of the
 *   Cotton Manufacture in Great Britain (1835).
 * - great-eastern-atlantic-cable-1866.jpg (5.5): the Great Eastern leaving
 *   Sheerness with the Atlantic cable, Illustrated London News, 14 July 1866.
 *   Library of Congress 2022637951.
 * - weaver-at-his-loom-tanjore-c1840.jpg (5.4): a weaver at his loom,
 *   gouache attributed to a Tanjore painter, about 1840. Wellcome Collection
 *   pjnujb7j.
 * - riis-bayard-street-lodgers-five-cents-a-spot-1890.jpg (5.9): Jacob Riis,
 *   lodgers in a Bayard Street tenement, about 1890. Library of Congress
 *   2002710259.
 * - storming-of-the-bastille-thevenin-1790.jpg (5.2): Charles Thévenin, The
 *   Storming of the Bastille, July 14, 1789, etching, 1790. Cleveland Museum
 *   of Art 2015.21.
 * - kunisada-first-train-leaving-yokohama-1872.jpg (5.6): First Steam Train
 *   Leaving Yokohama, woodblock print signed Baidō Kunimasa, about 1872.
 *   Library of Congress 2002700197.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const ACROSS={url:'../assets/images/topics/5-5/currier-ives-across-the-continent-1868.jpg',alt:'A black-and-white print looking down on a new log-cabin town beside a railroad; a train puffs west past the town and a line of telegraph poles, covered wagons move along a road, and two Native American riders watch from the right',credit:'Currier & Ives, Across the Continent, lithograph drawn by Fanny Palmer from a design by J. M. Ives, 1868 · Library of Congress · Public domain',ratio:1.27,fit:'cover',position:'55% 60%'};
const LOOM={url:'../assets/images/commons/powerloom-weaving-in-1835-f81451.jpg',alt:'An engraving of a long mill hall where young women tend rows of power looms driven by belts from shafts along the ceiling, while a man in a cap stands in the aisle and a woman kneels to adjust a loom',credit:'Power-loom weaving, engraving after T. Allom, 1835 · Public domain',ratio:1.548,position:'50% 50%'};
const CABLE={url:'../assets/images/topics/5-5/great-eastern-atlantic-cable-1866.jpg',alt:'An engraving of a huge iron steamship with six masts, smokestacks and American and British flags, beside a smaller ship with three masts at the left, while men in rowing boats wave in the foreground',credit:'The Great Eastern with the Atlantic cable, Illustrated London News, 14 July 1866 · Library of Congress · Public domain',ratio:1.357,position:'50% 50%'};
const WEAVER={url:'../assets/images/topics/5-4/weaver-at-his-loom-tanjore-c1840.jpg',alt:'An Indian painting of a man in a white turban and white cloth sitting at a hand loom, weaving a long red patterned cloth, with his feet on the treadles and cords hanging from above',credit:'Weaver at his loom, gouache, attributed to a Tanjore painter, about 1840 · Wellcome Collection · Public domain',ratio:0.735,fit:'cover',position:'50% 45%'};
const LODGERS={url:'../assets/images/topics/5-9/riis-bayard-street-lodgers-five-cents-a-spot-1890.jpg',alt:'An old flash photograph of a small, cluttered room at night: a man sits on a high bunk, and men and women lie under blankets on the floor and in a lower bunk beside a stove, with pots on shelves and bundles hanging from the wall',credit:'Jacob Riis, lodgers in a Bayard Street tenement, about 1890 · Library of Congress · Public domain',ratio:1.255,position:'50% 50%'};
const BASTILLE={url:'../assets/images/topics/5-2/storming-of-the-bastille-thevenin-1790.jpg',alt:'Black-and-white etching of a fight at the gate of a stone fortress: a crowd of men, some in uniform, push forward with muskets and pikes through smoke, a cannon tipped over on the left, wounded men lying on the paving stones, and a man on the right raising a flag on a pole beneath the fortress\'s round tower',credit:'Charles Thévenin, The Storming of the Bastille, July 14, 1789, etching, 1790 · Cleveland Museum of Art · Public domain',ratio:1.384,position:'50% 45%'};
const TRAIN={url:'../assets/images/topics/5-6/kunisada-first-train-leaving-yokohama-1872.jpg',alt:'A Japanese color woodblock print in three sheets: a black steam locomotive pulls a line of red passenger cars along a stone embankment beside a blue bay full of sailing ships, with cherry trees in pink blossom, houses on a cliff and a mountain behind',credit:'Baidō Kunimasa, First Steam Train Leaving Yokohama, woodblock print, about 1872 · Library of Congress · Public domain',ratio:2.042,position:'40% 60%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:ACROSS});
setTemplate('making',{visual:LOOM});
setTemplate('moving',{visual:CABLE});
setTemplate('reach',{left:Object.assign({},by('reach').template.left,{visual:WEAVER})});
setTemplate('gains',{visual:LODGERS});
setTemplate('nations',{visual:BASTILLE});
setTemplate('nationalism',{visual:TRAIN});
setTemplate('close',{visual:ACROSS});
})();
