/* Topic 4.1 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture here is repo-local, so the student deck never depends on an
 * outside host being reachable from a school network.
 *
 * All five are AI-generated Historical Reconstructions Jeff made on 2026-10-12
 * from the prompts in docs/TOPIC-4-1-IMAGE-PROMPTS.md, labeled by the template
 * library from `ai: true`. Each carries C2PA metadata and no printed label or
 * generator mark, so nothing is cropped. None is evidence, and none appears in
 * the Evidence Lab. Reviewed 2026-10-12 against each prompt's "check before use"
 * list; the small faults found are named in the slide notes:
 *
 * - coast (frame-subtitle): a lateen-rigged caravel off the desert coast of
 *   northwest Africa, against the wind. Passes its check.
 * - toledo (frame-letterbox): translators with an Arabic manuscript and a flat
 *   astronomer's astrolabe, Mudéjar arches. Manuscripts, not printed books.
 *   The Arabic script is invented by the generator; the note says so.
 * - astrolabe (frame-letterbox): a pilot with an open-ring mariner's astrolabe
 *   hung from the thumb. Faults named in the note: the sail behind him reads as
 *   square, and the young sailor's writing tool looks like a pencil.
 * - volta (frame-subtitle): one caravel alone in open ocean, no land. It shows
 *   the Order of Christ cross on the sail, which the prompt excluded; the note
 *   says its use this early is uncertain.
 * - calicut (frame-letterbox): two carracks at anchor off Calicut among many
 *   dhows and local boats, Kerala-style roofs, no Chinese junks. Passes.
 *
 * Added 2026-10-29 at Jeff's request, each on the slide and template he chose:
 *
 * - ships (slide 11, annotated): "4.1 - Caravel, Carruck, and Fluyt.jpg", AI
 *   (C2PA, generator mark bottom right). The three ships side by side off a
 *   walled port. Its printed captions misspell "Portuguese" ("Portuguesa
 *   Caravel"), so cropBottom hides them with the generator mark and the pins
 *   name the ships instead. Fault named in the note: the caravel and carrack
 *   fly today's green and red Portuguese flag, adopted in 1911. The Dutch
 *   fluyt's orange, white and blue flag is right for about 1600.
 * - payoff (slide 14, frame-route): "4.1 - Columbus Dias da Gama.png", a
 *   BeHistorical instructional map (not AI) with the three outward routes
 *   already drawn. The view crops off its header, which says "Topic 4.2", and
 *   its footer; path:false keeps the template from drawing a fourth line. The
 *   pins sit on the map's own numbered circles, so the numbers follow the map
 *   (Dias, da Gama, Columbus), not the calendar.
 * - close (slide 23, frame-question): "4.1 - Landing Slide.jpg", AI (C2PA,
 *   generator mark bottom right, outside the crop). A pilot holds up a ring
 *   instrument on a caravel's deck, a compass box and chart beside him.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const IMG='../assets/images/';
const AI=(name,alt,extra)=>Object.assign({url:IMG+'topics/4-1/'+encodeURIComponent(name),alt,ai:true},extra||{});
const by=id=>T.slides.find(s=>s.phase===id);
const set=(id,visual)=>{const s=by(id);if(s)s.template=Object.assign({},s.template,{visual});};

set('coast',AI('4.1 - Fighting the Wind Home.jpg','Reconstruction seen from above of a small caravel with two triangular sails off a desert coast of sand dunes, whitecaps across the water'));
set('toledo',AI('4.1 - Translators of Toledo.jpg','Reconstruction of two scholars at a wooden table under horseshoe arches, one reading an Arabic manuscript with a star diagram, the other writing in Latin, a flat brass astrolabe between them'));
set('astrolabe',AI('4.1 - Mariners Astrolabe at Noon.jpg','Reconstruction of a Portuguese pilot on a ship\'s deck holding up an open brass ring with spokes, hung from his thumb, while a younger sailor writes in a small book of tables',{position:'50% 40%'}));
set('volta',AI('4.1 - Volta do Mar.jpg','Reconstruction of a single small sailing ship alone on a wide blue ocean under rows of white clouds, no land in sight'));
set('calicut',AI('4.1 - Arriving at Calicut 1498.jpg','Reconstruction of two large European ships at anchor off a palm-lined shore, surrounded by many dhows with triangular sails and small rowing boats, under heavy gray clouds'));
const note=(s,lines)=>{if(s&&s.notes)s.notes.land=(s.notes.land||[]).concat(lines);};

// Slide 11: the three ships, each pinned and named, on Jeff's picture.
const ships=by('ships');
if(ships){
  ships.kind='annotated';
  delete ships.cards;
  ships.footer='Because each design solved a different problem: exploring, surviving long voyages, or carrying goods cheaply.';
  ships.template={
    imageWidth:.52,ratio:1408/(768*.87),
    visual:AI('4.1 - Caravel, Carruck, and Fluyt.jpg','Reconstruction of three sailing ships side by side off a walled port town: a small caravel with three triangular sails, a tall carrack with square sails marked with red crosses, and a Dutch fluyt flying orange, white and blue flags',{cropBottom:.13}),
    pins:[
      {x:.19,y:.6,label:'Caravel · Explore',text:'Small and light with lateen sails. Works against the wind and slips along unknown coasts.'},
      {x:.52,y:.53,label:'Carrack · Haul',text:'Large, square sails and a lateen at the back. Room for months of food, water, cargo and guns.'},
      {x:.82,y:.58,label:'Fluyt · Make It Pay',text:'Dutch, around 1600. A big cargo with a small, cheap crew.'}
    ]
  };
  note(ships,[
    'Historical Reconstruction, AI generated. It sets the three ships side by side so students can compare their shapes; it is not evidence, and the three never sailed together (the fluyt is about a century later).',
    'One thing it gets wrong, if a sharp student notices: the caravel and the carrack fly the green and red flag of Portugal today, adopted in 1911. The Dutch flag on the fluyt is right for about 1600.'
  ]);
}

// Slide 14: the three voyages on the BeHistorical routes map.
const payoff=by('payoff');
if(payoff){
  payoff.kind='frame-route';
  delete payoff.cards;
  payoff.footer='New patterns: goods and people move by sea between Europe and Asia, and across the Atlantic. Why they sailed is Topic 4.2.';
  payoff.template={
    visual:{url:IMG+'topics/4-1/'+encodeURIComponent('4.1 - Columbus Dias da Gama.png'),alt:'Map of the Atlantic and Indian Oceans with three dashed routes: Dias from Portugal down the African coast to the Cape of Good Hope and back, da Gama out into the Atlantic, around Africa, past Malindi to Calicut, and Columbus from Spain west to Guanahani in the Bahamas',credit:'BeHistorical instructional map',tagPos:'tr'},
    ratio:1600/1000,view:{x:.02,y:.122,w:.84,h:.826},maxWidth:720,path:false,
    stops:[
      {name:'Dias · 1488',text:'Reaches the southern tip of Africa.',x:.499,y:.521},
      {name:'Da Gama · 1497 to 1498',text:'About three months out of sight of land, then around Africa to India.',x:.516,y:.723},
      {name:'Columbus · 1492',text:'Rides the trade winds west and the westerlies home.',x:.416,y:.351}
    ]
  };
  note(payoff,[
    'The numbers follow the map\'s own key, not the calendar: Columbus (3) sailed in 1492, before da Gama (2). Read them in date order: Dias, Columbus, da Gama.',
    'The map draws outward routes only, schematically. All three fleets came home: Dias in 1488, Columbus in 1493, da Gama in 1499.'
  ]);
}

// Slide 23: the landing sentence beside a pilot at work.
const close=by('close');
if(close){
  close.kind='frame-question';
  close.template=Object.assign({},close.template,{visual:AI('4.1 - Landing Slide.jpg','Reconstruction of an older pilot on the deck of a sailing ship holding up a brass ring instrument to the sky, a young sailor beside him, a compass box and a chart on the table in front of them, mountains on the horizon',{position:'84% 50%'})});
  note(close,['Historical Reconstruction, AI generated: borrowed tools in use at sea. It sets the scene; it is not evidence.']);
}
})();
