/* Topic 5.6 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object, public domain,
 * looked at and read against its holder's record. Wikimedia Commons answered
 * HTTP 429 to the session's API calls, so the new pictures come from the
 * Library of Congress's own image server (downloaded 2026-10-24), each found
 * through its catalogue. No AI-generated picture is used (no generator key was
 * set). The question and landing slides open and close on real historical
 * scenes, under Jeff's standard of 2026-10-14.
 *
 * Stored under assets/images/topics/5-6 (new):
 * - kunisada-first-train-leaving-yokohama-1872.jpg: Yokohama tetsudō jōki
 *   shussha no zu (First steam train leaving Yokohama), color woodblock
 *   triptych, about 1872, signed Baidō Kunimasa (Utagawa Kunimasa III, later
 *   Kunisada III), publisher Iseya Kenkichi. Library of Congress 2002700197,
 *   Chadbourne collection (no known restrictions). The three sheets joined,
 *   paper margins trimmed.
 * - ikkei-takanawa-railway-1872.jpg: Takanawa tetsudō jōkisha no zenzu (Steam
 *   engine of the iron railroad at Takanawa), Ikkei, 1872, center sheet of a
 *   triptych. Library of Congress 2008660440. The whole triptych, as the
 *   Library photographed it, is ikkei-takanawa-railway-triptych-1872.jpg
 *   (lesson page only).
 * - perry-arrives-uraga-broadsheet-1853.jpg: [Kita-Amerika gasshūkoku: Peruri
 *   to yū mono Sōshū Uraga ni torai su] (United States of North America:
 *   Perry arrives in Uraga, Sōshū Province), woodblock broadsheet, right sheet
 *   of a diptych. Library of Congress 2002700114, dated "between 1850 and
 *   1900"; a pencil note on the mount gives 8 July 1853. Mount and color bar
 *   trimmed.
 * - kokunimasa-pyongyang-victory-1894.jpg: Pyonyan rakujō shi wagahei daishōri
 *   (Our army's great victory at Pyongyang Castle), Utagawa Kokunimasa, 1894,
 *   right sheet of a triptych. Library of Congress 2008660405.
 * - kiyochika-rats-in-a-bag-1895.jpg: Fukuro no nezumi (Rats in a bag),
 *   Kobayashi Kiyochika, 1895, from the series Long Live Japan: One Hundred
 *   Victories, One Hundred Laughs. Library of Congress 2009615024 (lesson page
 *   only).
 * - cairo-citadel-photochrom-c1900.jpg: Kairo, la Citadelle, photochrom,
 *   Photoglob Co., Zurich, about 1890 to 1910. Library of Congress
 *   2017657143. Black border trimmed.
 * Already mirrored in assets/images/commons (credits in its manifest.json):
 * Auguste Couder's portrait of Muhammad Ali (about 1840 to 1841) and the
 * Iwakura Mission photograph (1872).
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-6/';
const COMMONS='../assets/images/commons/';
const TRAIN={url:IMG+'kunisada-first-train-leaving-yokohama-1872.jpg',alt:'A Japanese color woodblock print in three sheets: a black steam locomotive pulls a line of red passenger cars along a stone embankment beside a blue bay full of sailing ships, with cherry trees in pink blossom, houses on a cliff and a mountain behind',credit:'Utagawa Kunimasa III, First Steam Train Leaving Yokohama, woodblock print, about 1872 · Library of Congress · Public domain',ratio:2.042,position:'40% 60%'};
const COUDER={url:COMMONS+'modernegypt-muhammad-ali-by-auguste-couder-bap-17996-d37493.jpg',alt:'A painted portrait of Muhammad Ali, an older man with a long white beard, wearing a white turban and a dark fur-trimmed robe, seated with a sword',credit:'Auguste Couder, Muhammad Ali, oil on canvas, about 1840 to 1841 · Versailles · Public domain',ratio:0.791,position:'50% 30%'};
const PERRY={url:IMG+'perry-arrives-uraga-broadsheet-1853.jpg',alt:'A black-and-white Japanese woodblock broadsheet: rows of feudal lords\' crests and spears across the top, an American sailor on the left, and a large steamship with paddle wheel, masts, smoke and a striped flag across the bottom',credit:'Perry Arrives in Uraga, Japanese woodblock broadsheet, after July 1853 · Library of Congress · Public domain',ratio:0.765,position:'50% 80%'};
const IWAKURA={url:COMMONS+'iwakura-mission-1f7f61.jpg',alt:'An old black-and-white photograph of five Japanese men posed in a studio: the man seated in the center wears a Japanese robe and topknot, and the four standing and seated around him wear Western suits',credit:'The Iwakura Mission, photograph, 1872 · Public domain',ratio:1.27,position:'50% 40%'};
const TAKANAWA={url:IMG+'ikkei-takanawa-railway-1872.jpg',alt:'A Japanese color woodblock print: a gold and black steam locomotive with a tall funnel stands by the track while Western men and women in top hats and crinolines watch, and a crowd of Japanese people looks down from a bridge',credit:'Ikkei, Steam Engine of the Iron Railroad at Takanawa, woodblock print, 1872 · Library of Congress · Public domain',ratio:0.752,position:'50% 50%'};
const PYONGYANG={url:IMG+'kokunimasa-pyongyang-victory-1894.jpg',alt:'A Japanese color woodblock print of Japanese officers in black Western uniforms on horseback and on foot, studying a map spread on the ground beneath a Rising Sun flag, in a winter forest',credit:'Utagawa Kokunimasa, Our Army\'s Great Victory at Pyongyang Castle, woodblock print, 1894 · Library of Congress · Public domain',ratio:0.683,position:'50% 40%'};
const CITADEL={url:IMG+'cairo-citadel-photochrom-c1900.jpg',alt:'A colored photograph of the Citadel of Cairo on its hill: long stone walls and white buildings below a large domed mosque with two tall, thin minarets, under a pale sky',credit:'Photoglob Co., Cairo, the Citadel, photochrom, about 1890 to 1910 · Library of Congress · Public domain',ratio:1.298,position:'50% 45%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{place:'top',visual:Object.assign({},TRAIN,{tagPos:'bl'})});
setTemplate('egypt-ruler',{visual:COUDER});
setTemplate('japan-threat',{visual:PERRY});
setTemplate('japan-reform',{visual:IWAKURA,caption:'The Iwakura Mission, 1872'});
setTemplate('japan-build',{visual:TAKANAWA,caption:'The railway at Takanawa, a print of 1872'});
setTemplate('japan-power',{visual:PYONGYANG,caption:'War news for Japanese buyers, 1894'});
const retell=by('retell');
if(retell&&retell.template){
  retell.template.left=Object.assign({},retell.template.left,{visual:Object.assign({},CITADEL,{position:'50% 30%'})});
  retell.template.right=Object.assign({},retell.template.right,{visual:Object.assign({},TRAIN,{position:'30% 60%'})});
}
setTemplate('close',{place:'top',visual:Object.assign({},CITADEL,{tagPos:'bl'})});
})();
