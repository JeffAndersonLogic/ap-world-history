/* Topic 3.3 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * - rivalry-map: the BeHistorical instructional map built from
 *   scripts/lib/instructional-map-specs.js (id topic-3-1), verified repo-local.
 *
 * - protestant, catholic, chaldiran, sikh-emerge (story-scene): five pictures
 *   Jeff uploaded to assets/images/topics/3-3/ on 2026-10-13. All five are
 *   AI-generated: each is Gemini's 1376x768, carries C2PA content credentials,
 *   and had the Gemini sparkle in its bottom-right corner. The bottom 84px
 *   of each file were trimmed on 2026-10-13 to remove it (now 1376x684), as
 *   Topic 3.1 did, rather than hidden with `cropBottom`: these frames reach the
 *   board's edge, and an image drawn taller than its frame there reads as
 *   painted off the board to teaching-os-deck-overflow.test.js. The trim also
 *   dropped the C2PA metadata; the untrimmed originals are in commit aa8d835. The template prints the house
 *   label from `ai: true`, and each slide's notes say what the picture gets right
 *   and what it gets wrong, so the room reads it as a reconstruction:
 *   - Catholic Reformation: the Council of Trent. The crowd is far too big.
 *   - Mateo Ricci: Ricci with a Chinese scholar. The world maps on the table and
 *     the wall are modern color maps with invented characters.
 *   - German Printing Shop: screw press, ink balls, type case, all right; the
 *     hanging pages are invented letters.
 *   - Chaldiran: Ottoman gunners behind chained carts against red-capped Safavid
 *     cavalry, the right shape of the battle.
 *   - Sikh: a langar, rows of people eating together in a Punjab village.
 *   Each stands beside the story steps of its own beat, so no slide was added and
 *   no beat moved. None of them is evidence, and none goes in the Evidence Lab.
 *
 * - source-luther (source-hipp): the one real source in the deck, added on Jeff's
 *   ask of 2026-10-13. Lucas Cranach the Elder, Portrait of Martin Luther, 1528,
 *   Veste Coburg: Wikimedia Commons "Lucas Cranach d.Ä. - Martin Luther, 1528
 *   (Veste Coburg).jpg", public domain, 2148x3400. Commons' own description,
 *   read on 2026-10-13: "Portrait of Martin Luther", Lucas Cranach the Elder,
 *   1528. Saved here at 830x1314 from the thumbnail the Commons API returned,
 *   so the student deck never depends on Wikimedia.
 *
 * Still wanted, from the story draft's visual list (section 9): a near-contemporary
 * Chaldiran manuscript painting and a later devotional image of Guru Nanak. Stage
 * and verify any Commons candidate first; never type a filename from memory.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const LOCAL='../assets/images/topics/3-3/';
const AI=(name,alt,extra)=>Object.assign({url:LOCAL+encodeURIComponent(name),alt,ai:true},extra||{});

const map=by('rivalry-map');
if(map)map.visual={
  url:'../assets/images/instructional-maps/topic-3-1.svg',
  alt:'Instructional map showing the Ottoman, Safavid, Mughal and Qing land empires, including the Ottoman-Safavid frontier',
  credit:'BeHistorical instructional map · Unit 3'
};

const luther=by('source-luther');
if(luther&&luther.template)luther.template=Object.assign({},luther.template,{visual:{url:LOCAL+'luther-cranach-1528.jpg',alt:'Painted portrait of Martin Luther from the chest up, in a black scholar\'s cap and black robe against a blue-green background, looking to the side',credit:'Veste Coburg · Public domain',tagPos:'bl'}});

const SCENES={
  protestant:{pictures:[{caption:'A German print shop',visual:AI('3.3 - German Printing Shop.jpg','Reconstruction of a German print shop: a pressman pulls the bar of a wooden screw press, a boy holds two leather ink balls, a compositor sets type from a slanted case, and printed sheets hang drying on lines overhead',{position:'38% 50%'})}]},
  catholic:{side:'left',pictures:[
    {caption:'Council of Trent, 1545 to 1563',visual:AI('3.3 - Catholic Reformation.jpg','Reconstruction of the Council of Trent: rows of bishops in white miters and cardinals in red facing each other across a church nave while clerks write at a table in the center',{position:'50% 55%'})},
    {caption:'A Jesuit in China: Matteo Ricci',visual:AI('3.3 - Mateo Ricci.jpg','Reconstruction of Matteo Ricci, a bearded European in a black Chinese scholar\'s robe and hat, writing Chinese characters with a brush beside a Chinese scholar, with a world map and an astrolabe on the desk',{position:'45% 45%'})}
  ]},
  chaldiran:{pictures:[{caption:'Chaldiran, 1514',visual:AI('3.3 - Chaldiran.jpg','Reconstruction of the Battle of Chaldiran: Ottoman infantry in tall white felt hats fire muskets from behind cannons and carts chained together, while Safavid horsemen in red-topped caps charge across a dusty plain',{position:'45% 50%'})}]},
  'sikh-emerge':{side:'left',pictures:[{caption:'The langar, a shared kitchen',visual:AI('3.3 - Sikh.jpg','Reconstruction of a langar in a Punjab village: long rows of men and women in turbans and head scarves sit on the ground eating from brass plates while servers carry pots of food, with wheat fields and a river behind',{position:'50% 55%'})}]}
};
for(const [phase,add] of Object.entries(SCENES)){
  const s=by(phase);
  if(s&&s.template)s.template=Object.assign({},s.template,add);
}
})();
