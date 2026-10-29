/* Topic 4.2 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture here is repo-local, so the student deck never depends on an
 * outside host being reachable from a school network. Commons rate-limited this
 * build (HTTP 429) and no image generator key was set, so the deck reuses one
 * reviewed reconstruction from Topic 4.1 and otherwise carries its story in
 * slide templates and the generated routes map.
 *
 * - calicut (frame-letterbox): the 4.1 AI Historical Reconstruction of two
 *   carracks at anchor off Calicut among dhows and local boats, reviewed
 *   2026-10-12 against its prompt (docs/TOPIC-4-1-IMAGE-PROMPTS.md). Labeled by
 *   the template library from `ai: true`. Not evidence, and not in the
 *   Evidence Lab.
 *
 * Added 2026-10-29 at Jeff's request, each on the slide and template he chose.
 * Both are AI Historical Reconstructions he uploaded (C2PA, generator mark
 * bottom right), labeled from `ai: true`, never evidence:
 *
 * - posts (slide 9, frame-letterbox): "4.2 - Trading Post Empire.jpg", a
 *   fortified port with a Portuguese fort, a busy quay and carracks at anchor
 *   among local boats. The grid's four facts move to the subtitle and the
 *   note. Fault named in the note: the fort flies today's green and red flag,
 *   adopted in 1911.
 * - close (slide 23, frame-stepin): "4.2 - Landing Slide.jpg", a Lisbon-style
 *   quay where clerks weigh pepper and write it into a ledger. The ship's name
 *   and the "India - Pimenta" sacks are invented by the generator; the note
 *   says so. The step-in panel covers the right of the picture, where the
 *   weighing happens.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const AI=(path,alt,extra)=>Object.assign({url:IMG+path,alt,ai:true},extra||{});
const by=id=>T.slides.find(s=>s.phase===id);
const set=(id,visual)=>{const s=by(id);if(s)s.template=Object.assign({},s.template,{visual});};

set('calicut',AI('topics/4-1/'+encodeURIComponent('4.1 - Arriving at Calicut 1498.jpg'),'Reconstruction of two large European ships at anchor off a palm-lined shore, surrounded by many dhows with triangular sails and small rowing boats, under heavy gray clouds'));

const note=(s,lines)=>{if(s&&s.notes)s.notes.land=(s.notes.land||[]).concat(lines);};

// Teacher slide 9: the trading-post empire as a scene.
const posts=by('posts');
if(posts){
  posts.kind='frame-letterbox';
  delete posts.cards;
  delete posts.footer;
  posts.subtitle='Portugal held ports, not lands: forts from Elmina to Goa and Malacca, and a pepper trade the crown ran from Lisbon.';
  posts.template=Object.assign({},posts.template,{visual:AI('topics/4-2/'+encodeURIComponent('4.2 - Trading Post Empire.jpg'),'Reconstruction of a busy tropical harbor town seen from a hillside: a stone fort with cannon on a rocky point, a stone quay stacked with sacks and barrels, two large European ships at anchor among many small sailing boats',{position:'50% 58%'})});
  note(posts,[
    'Historical Reconstruction, AI generated. It sets the scene; it is not evidence. Use it to show the idea: one fort, one quay, and the sea trade around it.',
    'The four facts the slide used to list: a royal gold trade from Elmina, the fort built on the Gold Coast in 1482; Lisbon a major pepper market, with the crown running the pepper trade itself; fortified ports seized at Goa in 1510 and Malacca in 1511; ports, not lands, to control the sea trade between them.',
    'One thing it gets wrong, if a sharp student notices: the fort flies the green and red flag of Portugal today, adopted in 1911.',
    'How the posts worked, and how Asian and African rulers answered them, is Topic 4.4.'
  ]);
}

// Teacher slide 23: the landing sentence, stepped into on the quay.
const close=by('close');
if(close){
  close.kind='frame-stepin';
  close.template={
    visual:AI('topics/4-2/'+encodeURIComponent('4.2 - Landing Slide.jpg'),'Reconstruction of a busy stone quay beside a river harbor: porters carry sacks and barrels off a ship, and at a table in front a clerk writes in a ledger while men weigh dark peppercorns on a brass scale',{cropBottom:.02}),
    lines:['You are on the quay at Lisbon. Pepper from India is weighed and written into the books.','Rulers wanted the trade of Asia, and every voyage that paid made the next one easier to fund.'],
    question:'Rulers backed the voyages. Voyages paid back. More ships sailed.',
    note:'Next: Columbus was looking for a route to Asia. What he started was an exchange of living things nobody planned.'
  };
  note(close,['Historical Reconstruction, AI generated. It sets the scene; it is not evidence. The ship\'s name and the "India - Pimenta" (pepper) labels on the sacks are invented by the generator.']);
}

// Teacher slide 12: show the treaty's geography without changing its story or notes.
const treaty=by('line');
if(treaty){
  treaty.kind='map';
  treaty.visual={
    url:IMG+'topics/4-2/treaty-of-tordesillas.png',
    alt:'BeHistorical map of Treaty of Tordesillas claims: Spain west of the approximate 1494 line, Portugal east including eastern Brazil; 370 leagues west of Cape Verde. Shading shows claimed spheres, not actual control in 1494.'
  };
  delete treaty.template;
}
})();
