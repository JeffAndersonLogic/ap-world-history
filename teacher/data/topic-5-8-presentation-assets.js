/* Topic 5.8 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. Wikimedia Commons answered
 * HTTP 429 to the session's API calls, so the new pictures come from the
 * Library of Congress's own image server (downloaded 2026-11-01), each found
 * through its catalogue; the Kilburn daguerreotype was already mirrored in
 * the repo. No AI-generated picture is used (no generator key was set). The
 * question and landing slides open and close on real historical scenes, under
 * Jeff's standard of 2026-10-14.
 *
 * - assets/images/commons/william-edward-kilburn-view-of-the-great-chartist-
 *   meeting-on-kenningto-cf2162.jpg: William Edward Kilburn, daguerreotype of
 *   the Chartist meeting on Kennington Common, 10 April 1848, one of a pair
 *   bought by Prince Albert in 1848 (Royal Collection, RCIN 2932482 is the
 *   pair's record). Mirrored from Wikimedia Commons (Google Art Project).
 * Stored under assets/images/topics/5-8 (new):
 * - chartist-national-convention-1839.jpg: "The National Convention. As it met
 *   on Monday the 4th of February, 1839, at the British Coffee House," etching,
 *   inscribed "Chartist meeting." Library of Congress 2004669356 (no known
 *   restrictions). Paper margins trimmed.
 * - ottoman-imperial-fez-factory-interior-1880s.jpg: [Interior of the Imperial
 *   Fez Factory], Abdullah Frères, between 1880 and 1893, Abdul-Hamid II
 *   Collection. Library of Congress 2003675899. Album mount trimmed.
 * - ottoman-military-engineering-students-1880s.jpg: [Group photograph of the
 *   students of the Imperial School of Military Engineering], Abdullah Frères,
 *   between 1880 and 1893, Abdul-Hamid II Collection. Library of Congress
 *   2002712221. Album mount trimmed.
 * - grant-and-li-hongzhang-tianjin-1879.jpg: "Gen. Grant and Li Hung Chang,
 *   Viceroy of China, taken at Tientsin," Liang Shitai (See Tay), 1879.
 *   Library of Congress 2016647812. The print's title says January 1879; the
 *   course says only 1879 (ledger).
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-8/';
const KENNINGTON={url:'../assets/images/commons/william-edward-kilburn-view-of-the-great-chartist-meeting-on-kenningto-cf2162.jpg',alt:'An early photograph, pale and slightly blurred, of a huge crowd of men in top hats and caps filling an open field, with a small flag on a pole near the middle, a tall factory chimney and long low buildings behind, and a large pale building on the right',credit:'William Edward Kilburn, daguerreotype, 10 April 1848 · Royal Collection · Public domain',ratio:1.405,position:'50% 60%'};
const CONVENTION={url:IMG+'chartist-national-convention-1839.jpg',alt:'An etching of a long, high-ceilinged room with chandeliers and tall windows, where dozens of men in dark coats sit and stand around a long table covered with papers',credit:'The National Convention, 1839, etching · Library of Congress · Public domain',ratio:1.431,position:'50% 55%'};
const FEZ={url:IMG+'ottoman-imperial-fez-factory-interior-1880s.jpg',alt:'An old black-and-white photograph of a long factory hall, with leather belts running at angles from wheels on the ceiling down to rows of machines, and finished brimless hats on the workbenches in front',credit:'Abdullah Frères, Imperial Fez Factory, Istanbul, 1880 to 1893 · Library of Congress · Public domain',ratio:1.228,position:'50% 50%'};
const STUDENTS={url:IMG+'ottoman-military-engineering-students-1880s.jpg',alt:'An old black-and-white photograph of about forty young men in dark military coats and fezzes standing in rows on a bare parade ground in front of a long two-story building with many windows',credit:'Abdullah Frères, students of the Imperial School of Military Engineering, Istanbul, 1880 to 1893 · Library of Congress · Public domain',ratio:1.236,position:'50% 55%'};
const GRANTLI={url:IMG+'grant-and-li-hongzhang-tianjin-1879.jpg',alt:'An old photograph of two men seated on either side of a small table with a vase of flowers: on the left a bearded American in a dark suit, on the right a Chinese official in a round hat and long robes',credit:'Liang Shitai, Ulysses S. Grant and Li Hongzhang, 1879 · Library of Congress · Public domain',ratio:1.266,position:'50% 40%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{place:'top',visual:KENNINGTON});
setTemplate('charter',{visual:CONVENTION});
setTemplate('ottoman',{visual:FEZ});
setTemplate('qing',{visual:GRANTLI});
setTemplate('close',{place:'top',visual:STUDENTS});
})();
