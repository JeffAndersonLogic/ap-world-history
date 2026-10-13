/* Topic 3.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * - expand-proof: the Baburnama illustration of Panipat, 1526, a verified 3.1 asset.
 *
 * Five pictures Jeff uploaded to assets/images/topics/3-4/ on 2026-10-13. All
 * five are AI-generated: each is Gemini's 1376x768, carries C2PA content
 * credentials and has the Gemini sparkle in its bottom-right corner, which
 * `cropBottom` hides (the Manchu picture also has a thin black strip there).
 * The templates print the house label from `ai: true`, and each slide's notes
 * say what the picture shows and what it gets wrong:
 * - question (frame-subtitle): Isfahan, Naqsh-e Jahan Square. Polo goals drawn
 *   like modern soccer goals.
 * - hold (split-scenes): Mughal Mansabdar, a muster with horses branded and the
 *   roll written up, on the Mughal side.
 * - pay (split-scenes): Ottoman Tax Farm (an auction of collection rights) beside
 *   Mughal Land Survey (fields measured with a jointed bamboo rod). The Ottoman
 *   room's calligraphy is invented script.
 * - close (frame-subtitle): Manchu enter China, Shanhai Pass, 1644.
 *
 * Reused from earlier topics, all already in the repo and already labeled:
 * - hold: the AI Janissary cut-out from Topic 3.2 on the devshirme side, shown
 *   whole (fit:'contain'), so both sides of the job have a picture.
 * - justify (split-scenes): the Taj Mahal photograph and the 1736 Qianlong
 *   court-dress portrait, both verified for Topic 3.2 (credits and licences in
 *   topic-3-2-presentation-assets.js). Real sources, so this slide carries
 *   evidence and the others carry scenes.
 * - qualify (frame-letterbox): the 3.3 Chaldiran reconstruction, on purpose, as
 *   the picture students last saw the rivalry in.
 *
 * Every picture is repo-local, so the student deck never depends on Wikimedia.
 * None of the AI pictures is evidence, and none goes in the Evidence Lab.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/';
const AI=(folder,name,alt,extra)=>Object.assign({url:IMG+folder+'/'+encodeURIComponent(name),alt,ai:true,cropBottom:.11},extra||{});

const panipat=by('expand-proof');
if(panipat)panipat.visual={
  url:IMG+'3-1/panipat-1526.jpg',
  alt:'Historical illustration representing the First Battle of Panipat in 1526',
  credit:'Panipat, 1526 · verified Unit 3 asset',
  fit:'contain'
};

const ISFAHAN=AI('3-4','3.4 - Isfahan.jpg','Reconstruction of Naqsh-e Jahan Square in Isfahan: a long open square with camels, riders and a polo game, a tiled dome on the left, a great mosque under scaffolding at the far end and a tall palace on the right, with shops under arcades on both sides',{position:'50% 40%'});
const MANCHU=AI('3-4','3.4 - Manchu enter China.jpg','Reconstruction of Manchu horsemen in yellow, white, red and blue armor riding through a gate in the Great Wall under a plaque reading First Pass Under Heaven, past Ming soldiers in red, with the wall running down the mountains to the sea',{position:'50% 45%'});
const CHALDIRAN=AI('3-3','3.3 - Chaldiran.jpg','Reconstruction of the Battle of Chaldiran: Ottoman infantry in tall white felt hats fire muskets from behind chained cannons and carts at charging Safavid horsemen in red-topped caps',{position:'50% 62%'});
const JANISSARY={url:IMG+'3-2/'+encodeURIComponent('3.2 - Janissary.png'),alt:'Reconstruction of a Janissary in a tall white felt hat with a brass plume holder, a red brocade coat, a green sash and red boots, holding a long musket and a curved sword',ai:true,fit:'contain'};
const MUSTER=AI('3-4','3.4 - Mughal Mansabdar.jpg','Reconstruction of a Mughal muster in a red sandstone courtyard: a groom brands a horse while an officer and a line of armored troopers wait, and two scribes write in ledgers at a low table',{position:'45% 50%'});
const TAX_FARM=AI('3-4','3.4 - Ottoman Tax Farm.jpg','Reconstruction of an Ottoman tax-farm auction: turbaned officials and bidders sit on carpets in a blue-tiled room, one pointing as he bids, with ledgers open and bags of coins on a cushion',{position:'50% 45%'});
const SURVEY=AI('3-4','3.4 - Mughal Land Survey.jpg','Reconstruction of a Mughal revenue survey: two men stretch a jointed bamboo measuring rod across a wheat field while a scribe writes at a low desk and an official sits under a parasol',{position:'40% 50%'});
const TAJ={url:IMG+'3-2/taj-mahal.jpg',alt:'The Taj Mahal, a white marble tomb with a large central dome and four tall minarets, seen down a long reflecting pool lined with cypress trees',credit:'Taj Mahal · Modern photograph: Yann, edited by Jim Carter · CC BY-SA 4.0'};
const QIANLONG={url:IMG+'3-2/qianlong-court-dress-1736.jpg',alt:'Full-length portrait of the Qianlong Emperor seated on a carved dragon throne, in a yellow robe embroidered with dragons and a black fur-trimmed cape',credit:'Qianlong in court dress, 1736 · Public domain',fit:'contain'};

const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
const side=(s,key,visual)=>{if(s&&s.template&&s.template[key])s.template[key]=Object.assign({},s.template[key],{visual});};

setTemplate('question',{visual:ISFAHAN});
setTemplate('qualify',{visual:CHALDIRAN});
setTemplate('close',{visual:MANCHU});
const hold=by('hold');side(hold,'left',JANISSARY);side(hold,'right',MUSTER);
const pay=by('pay');side(pay,'left',TAX_FARM);side(pay,'right',SURVEY);
const justify=by('justify');side(justify,'left',TAJ);side(justify,'right',QIANLONG);
})();
