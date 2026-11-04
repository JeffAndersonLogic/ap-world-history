/*
 * Topics 4.1 and 4.2, a 14-minute teacher overview. Teacher-only, standalone.
 *
 * Why it exists: Jeff could not teach 4.1 or 4.2 to the class (2026-11-03) and
 * asked for one short teacher presentation that touches the must-haves of both
 * before Topic 4.3, built from the two full decks' own pictures and templates.
 *
 * What it is not: a third telling of either topic. Every claim, number and
 * picture here is lifted from the two reviewed decks
 * (teacher/data/topic-4-1-*.js and topic-4-2-*.js), which were built from the
 * CED source file, scripts/lib/ced-source/unit-4.js, pp. 78 to 80. Where this
 * deck condenses, it condenses their wording; it adds no new history.
 *
 * CED, read from the source file:
 *   4.1  LO A: Explain how cross-cultural interactions resulted in the diffusion
 *        of technology and facilitated changes in patterns of trade and travel
 *        from 1450 to 1750. KC-4.1.II, KC-4.1.II.A. Reasoning: Causation.
 *   4.2  LO B: Describe the role of states in the expansion of maritime
 *        exploration from 1450 to 1750. LO C: Explain the economic causes and
 *        effects of maritime exploration by the various European states.
 *        KC-4.1.III, III.A, III.B, III.C. Reasoning: Causation.
 *   Every one of those six Key Concepts is banded on at least one slide.
 *
 * Not in DECKS and no student deck, on purpose: this is a teacher catch-up,
 * not a lesson. Students already have both full lessons and both generated
 * class presentations. It is linked from the command center under Unit 4.
 *
 * Tordesillas (slide 13) was added on 2026-11-04 at Jeff's request: the full
 * 4.2 deck's 'line' slide, its map, keys and notes copied unchanged, with a
 * STORY line condensed from those notes.
 *
 * Retelling slide: the five-link cause chain (phase 'retell'), which joins the
 * 4.1 chain to the 4.2 pattern.
 *
 * Every picture is repo-local. The AI Historical Reconstructions are labeled by
 * the template library from `ai: true`, and the faults each one carries are
 * named in its slide note, as in the source decks.
 */
(function(){
'use strict';
const IMG='../assets/images/';
const P41=IMG+'topics/4-1/',P42=IMG+'topics/4-2/';
const AI=(dir,name,alt,extra)=>Object.assign({url:dir+encodeURIComponent(name),alt,ai:true},extra||{});

window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.1 + 4.2',
    minutes: 14,
    title: 'Overview: Technology and Exploration',
    subtitle: 'Borrowed tools got the ships home. Rulers paid because the voyages paid back.',
    essentialQuestion: 'How did knowledge from older worlds let European ships cross the ocean and come home, and why did rulers pay for the voyages?',
    apFocus: 'Causation, both topics',
    endTarget: 'Students can name a tool Europe borrowed and the older world it came from, explain how new ships and the Atlantic\'s winds let ships come home, and explain why rulers backed ocean voyages and what Portugal, Spain, and England, France and the Dutch got from them.'
  },

  priorities: {
    must: [
      '4.1: Europe\'s ocean tools came from the Classical, Islamic and Asian worlds. With new ships and the Atlantic\'s wind wheel, they turned the ocean into a road that ran both ways.',
      '4.2: rulers backed voyages, by paying for them or by granting rights, because a sea route to Asia skipped every middleman in the spice trade.',
      'Name all three outcomes the CED names: Portugal\'s trading-post empire; Spain\'s voyages, which made all of Europe interested; and the English, French and Dutch crossings that went looking for another way to Asia.',
      'Land the retelling chain: borrowed tools, plus ships and wind, so rulers back voyages, so voyages pay, so rivals join.'
    ],
    should: [
      'Say "Historical Reconstruction" when an AI picture is on screen. Eight of the ten pictures are.',
      'Correct the one big misconception on the way: Europe did not invent these tools. It combined them.'
    ],
    could: [
      'Point students to the 4.1 and 4.2 First & 10 readings and class presentations on their lesson pages for the full story.',
      'Open the full 4.2 deck for the myths slide (slide 16) if 4.3 needs it.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 1, teacher: 'The two objectives, the timing, what is left out.', students: 'Not projected.', slide: 1 },
    { id: 'question', label: 'The Question', range: '0:00-0:30', minutes: 0.5, teacher: 'Two questions, one story.', students: 'Hold the question.', slide: 2 },
    { id: 'problem', label: '4.1 The Problem', range: '0:30-1:15', minutes: 0.75, teacher: 'Getting home was the hard part.', students: 'Say why.', slide: 3 },
    { id: 'borrowed', label: '4.1 Borrowed Tools', range: '1:15-2:30', minutes: 1.25, teacher: 'Three older worlds.', students: 'Match a tool to its world.', slide: 4 },
    { id: 'people', label: '4.1 Knowledge Moved', range: '2:30-3:30', minutes: 1, teacher: 'Alexandria to Portugal.', students: 'Say who carried it.', slide: 5 },
    { id: 'ships', label: '4.1 Three Ships', range: '3:30-4:30', minutes: 1, teacher: 'Three ships, three jobs.', students: 'Name each job.', slide: 6 },
    { id: 'wind', label: '4.1 The Wind Wheel', range: '4:30-5:45', minutes: 1.25, teacher: 'Sail away from land to get home.', students: 'Explain the turn.', slide: 7 },
    { id: 'route', label: '4.1 A Two-Way Ocean', range: '5:45-6:30', minutes: 0.75, teacher: 'Dias, Columbus, da Gama. Bridge to 4.2.', students: 'Trace one route.', slide: 8 },
    { id: 'spice', label: '4.2 The Spice Chain', range: '6:30-7:30', minutes: 1, teacher: 'Every middleman took a cut.', students: 'Say why a sea route pays.', slide: 9 },
    { id: 'state', label: '4.2 The Role of States', range: '7:30-8:30', minutes: 1, teacher: 'Paid for it, or gave permission.', students: 'Say what the ruler got.', slide: 10 },
    { id: 'portugal', label: '4.2 Portugal', range: '8:30-9:15', minutes: 0.75, teacher: 'A trading-post empire.', students: 'Ports, not lands.', slide: 11 },
    { id: 'spain', label: '4.2 Spain', range: '9:15-10:15', minutes: 1, teacher: 'Three ships, then seventeen, then the Pacific.', students: 'Name the effect.', slide: 12 },
    { id: 'line', label: '4.2 Tordesillas', range: '10:15-11:15', minutes: 1, teacher: 'Two crowns split the claims.', students: 'Say what England would do.', slide: 13 },
    { id: 'north', label: '4.2 The Northern Crossings', range: '11:15-12:15', minutes: 1, teacher: 'England, France, the Dutch.', students: 'Looked for, found instead.', slide: 14 },
    { id: 'retell', label: 'Retell Both Topics', range: '12:15-13:45', minutes: 1.5, teacher: 'Show the chain, hide it, students rebuild it.', students: 'Retell from memory.', slide: 15 },
    { id: 'close', label: 'Landing', range: '13:45-14:15', minutes: 0.5, teacher: 'Land it and hand off to 4.3.', students: 'Say it in one sentence.', slide: 16 }
  ],

  quickLaunch: [
    { label: 'Full 4.1 deck', url: 'topic-4-1-os.html' },
    { label: 'Full 4.2 deck', url: 'topic-4-2-os.html' },
    { label: 'Student Lesson 4.1', url: '../unit-4/lesson-4-1-technological-innovations.html' },
    { label: 'Student Lesson 4.2', url: '../unit-4/lesson-4-2-exploration.html' },
    { label: 'First & 10, 4.1', url: '../unit-4/first-and-10-topic-4-1-technological-innovations-capture.html' },
    { label: 'First & 10, 4.2', url: '../unit-4/first-and-10-topic-4-2-exploration-capture.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-1-4-2-overview-slide',
    title: 'Topics 4.1 and 4.2 Overview',
    file: 'topic-4-1-4-2-os.html?mode=project'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · Read Before Class',
      title: 'Borrowed tools got the ships home. Rulers paid because the voyages paid back.',
      subtitle: 'Two topics in about 14 minutes. 4.1 is how the ships got there and back; 4.2 is who paid, and why. One reasoning move for both: causation.',
      notes: {
        minutes: 1,
        keys: [
          'Spine: borrowed tools got ships home; rulers paid',
          'Slides 3 to 8: 4.1. Slides 9 to 14: 4.2',
          'Gold bands are CED wording: read aloud',
          'About a minute a slide',
          'Short on time: one line each for 5 and 9',
          'Left out: BeReady, myths, contract, modules',
          'Eight of ten pictures are AI'
        ],
        land: [
          '4.1, CED p. 78, Learning Objective A: explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750. Slides 3 to 8.',
          '4.2, CED pp. 79 and 80, Learning Objective B: describe the role of states in the expansion of maritime exploration. Learning Objective C: explain the economic causes and effects of maritime exploration by the various European states. Slides 9 to 14.',
          'Every Key Concept of both topics is in a gold band at the top of the slide that teaches it: KC-4.1.II and II.A for 4.1; KC-4.1.III and III.A, B and C for 4.2. The band is the CED\'s own wording, so you can read it aloud.',
          'About a minute a slide. If you are short, slide 5 (knowledge moved) and slide 9 (the spice chain) are the two to say in one sentence each, not skip.',
          'Left out on purpose, all still in the full decks: BeReady, the myths slides, the Columbus contract, and every module. Ships are illustrative examples, optional in the CED; the Key Concept sentences are what is required.',
          'Eight of the ten pictures are AI Historical Reconstructions, labeled on screen. None is evidence. The other two are BeHistorical maps: the three voyages (slide 8) and Tordesillas (slide 13).'
        ]
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'Topics 4.1 and 4.2 · The Question',
      template: {
        place: 'top',
        line: 'How did European ships learn to cross an ocean and come home, and why did rulers pay for the voyages?',
        visual: AI(P41,'4.1 - Volta do Mar.jpg','Reconstruction of a single small sailing ship alone on a wide blue ocean under rows of white clouds, no land in sight')
      },
      notes: {
        minutes: 0.5,
        story: 'We missed two topics, so here they are as one story. The first half is how: how ships learned to go out across an ocean and get back. The second half is why: who paid for it, and what they wanted.',
        ask: 'Before we start: what would you need to sail somewhere with no land in sight, and get back?',
        listenFor: 'A way to find your direction and position, a ship that can last, and a wind that will carry you home.',
        keys: [
          'Two missed topics, one story',
          'First half: how ships went and came back',
          'Second half: who paid, and why',
          'AI scene, not evidence'
        ],
        land: ['Historical Reconstruction, AI generated: one caravel alone in open ocean. It shows the Order of Christ cross on the sail; its use this early is uncertain.']
      }
    },
    {
      phase: 'problem', kind: 'frame-subtitle', eyebrow: '4.1 · The Problem', kc: 'KC-4.1.II.A',
      template: {
        line: 'Going south along Africa was easy. Sailing home meant fighting the wind and the current the whole way.',
        visual: AI(P41,'4.1 - Fighting the Wind Home.jpg','Reconstruction seen from above of a small caravel with two triangular sails off a desert coast of sand dunes, whitecaps across the water')
      },
      notes: {
        minutes: 0.75,
        story: 'In the Indian Ocean, which we studied in 2.3, the monsoon turns around each season: ride one wind out, wait, ride it back. Off West Africa the trade wind blows from the northeast nearly all year, and the Canary Current runs south. Going out was easy. Getting home was the problem.',
        ask: 'Why is getting home harder than getting there?',
        listenFor: 'The wind and the current both push the ship south, and they never turn around.',
        keys: [
          'Indian Ocean: the monsoon turns each season',
          'Off Africa: the trade wind never turns',
          'Canary Current also pushes south',
          'Getting home was the problem',
          'AI scene, not evidence'
        ],
        land: ['Historical Reconstruction, AI generated. It sets the scene; it is not evidence.']
      }
    },
    {
      phase: 'borrowed', kind: 'branch-tree', eyebrow: '4.1 · Borrowed Tools', kc: 'KC-4.1.II',
      title: 'Europe\'s sea tools came from older worlds.',
      footer: 'Europe did not invent these tools. It combined them.',
      template: {
        claimLabel: 'The claim',
        claim: 'Knowledge from **three older worlds** made Europe\'s ocean voyages possible.',
        branches: [
          { label: 'Asian', note: 'China used the compass at sea by about 1100', items: ['Compass'] },
          { label: 'Islamic', note: 'Astronomers made Greek ideas precise and built tables of the sun and stars', items: ['Astrolabe', 'Astronomical charts'] },
          { label: 'Classical', note: 'Greek astronomy, and the sail of the Roman Mediterranean', items: ['Ptolemy\'s astronomy', 'Lateen sail'] }
        ]
      },
      notes: {
        minutes: 1.25,
        story: 'Most of the tools European sailors used were not European. The compass came from China. The astrolabe was a Greek idea made precise in the Islamic world, and Islamic astronomers built the tables of where the sun and stars would be. The triangular lateen sail sailed the Mediterranean in Roman times.',
        keys: [
          'Europe combined the tools; it did not invent them',
          'Asian: compass, China, about 1100',
          'Islamic: astrolabe, astronomical charts',
          'Classical: Ptolemy, the lateen sail',
          'Say all three worlds',
          'Lateen sail: Roman, not Arab-invented'
        ],
        land: [
          'KC-4.1.II names exactly these three worlds: Classical, Islamic and Asian. Say all three.',
          'Compass: the earliest record of one used at sea is Chinese, c. 1111 to 1117; it is mentioned in Europe c. 1190. How it traveled west is debated, so do not teach "via Arab traders" as fact.',
          'Lateen sail: it sailed the Mediterranean in Roman times, before Islam. Sailors across the Islamic world used it too, which is why the CED lists it under all three worlds. The myth is that Arabs invented it.'
        ],
        ask: 'Which world gave Europe the compass, and which gave it the astrolabe?',
        listenFor: 'The compass from China; the astrolabe from Greek and Islamic astronomy.',
        avoid: 'Do not say Europe invented the tools of ocean travel. Europe\'s contribution was the combination, and the next slides show it.'
      }
    },
    {
      phase: 'people', kind: 'story-scene', eyebrow: '4.1 · Cross-Cultural Interaction', kc: 'KC-4.1.II',
      title: 'Knowledge moved with people.',
      footer: 'Translators, scholars and sailors carried it, one language to the next.',
      template: {
        pictures: [
          { visual: AI(P41,'4.1 - Translators of Toledo.jpg','Reconstruction of two scholars at a wooden table under horseshoe arches, one reading an Arabic manuscript with a star diagram, the other writing in Latin, a flat brass astrolabe between them',{position:'50% 55%'}), caption: 'Toledo: Arabic into Latin' },
          { visual: AI(P41,'4.1 - Mariners Astrolabe at Noon.jpg','Reconstruction of a Portuguese pilot on a ship\'s deck holding up an open brass ring with spokes, hung from his thumb, while a younger sailor writes in a small book of tables',{position:'55% 35%'}), caption: 'At sea: the noon sun gives latitude' }
        ],
        steps: [
          { label: 'Alexandria', text: 'c. 150 CE. Ptolemy writes a great book of Greek astronomy.' },
          { label: 'Baghdad', text: '800s. It is translated into Arabic, and Islamic astronomers correct it.' },
          { label: 'Toledo', text: '1100s. Translators turn the Arabic into Latin.' },
          { label: 'Portugal', key: true, text: '1480s. Pilots measure the noon sun and read their latitude from tables.' }
        ]
      },
      notes: {
        minutes: 1,
        story: 'Here is how one piece of knowledge traveled. A Greek astronomer writes it down in Egypt. Scholars in Baghdad translate it into Arabic and improve it. In Spain, Christian and Jewish translators turn the Arabic books, many by Muslim scholars, into Latin. Three centuries later Portuguese pilots use it at sea: measure the noon sun, check the table, know how far north or south you are.',
        keys: [
          'Knowledge moved with people',
          'Alexandria → Baghdad → Toledo → Portugal',
          'Greek, then Arabic, then Latin, then sailors',
          'Noon sun plus tables = latitude',
          'Both AI scenes; their errors are in full notes'
        ],
        land: [
          'This is the cross-cultural interaction in Learning Objective A: the knowledge crossed languages and religions before it reached the ship.',
          'Both pictures are AI Historical Reconstructions. Toledo: the Arabic writing is invented by the generator, and the friar\'s habit fits the 1200s translators better than the 1100s. The pilot: the sail behind him reads as square, and the young sailor\'s writing tool looks like a pencil.'
        ],
        ask: 'How many languages did this knowledge pass through before it reached a Portuguese ship?',
        listenFor: 'Greek, then Arabic, then Latin, then into the sailors\' own use.'
      }
    },
    {
      phase: 'ships', kind: 'annotated', eyebrow: '4.1 · New Ships', kc: 'KC-4.1.II.A',
      title: 'Three ships, three jobs.',
      footer: 'Each design solved a different problem: exploring, surviving long voyages, or carrying goods cheaply.',
      template: {
        imageWidth: .52, ratio: 1408/(768*.87),
        visual: AI(P41,'4.1 - Caravel, Carruck, and Fluyt.jpg','Reconstruction of three sailing ships side by side off a walled port town: a small caravel with three triangular sails, a tall carrack with square sails marked with red crosses, and a Dutch fluyt flying orange, white and blue flags',{cropBottom:.13}),
        pins: [
          { x: .19, y: .6, label: 'Caravel · Explore', text: 'Small and light with lateen sails. Works against the wind and slips along unknown coasts.' },
          { x: .52, y: .53, label: 'Carrack · Haul', text: 'Large, square sails and a lateen at the back. Room for months of food, water, cargo and guns.' },
          { x: .82, y: .58, label: 'Fluyt · Make It Pay', text: 'Dutch, around 1600. A big cargo with a small, cheap crew.' }
        ]
      },
      notes: {
        minutes: 1,
        story: 'Europe\'s own contribution was building ships around the borrowed tools. The caravel explores. The carrack hauls months of supplies. A century later the Dutch fluyt makes ocean trade cheap.',
        keys: [
          'Europe’s part: ships built around the tools',
          'Caravel explores',
          'Carrack hauls months of supplies',
          'Fluyt (Dutch, about 1600) carries cargo cheaply',
          'AI scene: never together; modern flags'
        ],
        land: [
          'KC-4.1.II.A: "innovations in ship designs." The three ships are the CED\'s illustrative examples, optional, but they make the idea concrete.',
          'Historical Reconstruction, AI generated. The three never sailed together: the fluyt is about a century later. The caravel and carrack fly today\'s Portuguese flag, adopted in 1911; the Dutch flag is right for about 1600.'
        ],
        ask: 'Which ship would you pick to find a new coast, and which to carry a cargo home cheaply?',
        listenFor: 'The caravel to explore; the fluyt to carry cargo cheaply.'
      }
    },
    {
      phase: 'wind', kind: 'story-steps', eyebrow: '4.1 · Learn the Wind', kc: 'KC-4.1.II.A',
      title: 'The Atlantic\'s winds turn in a wheel.',
      footer: 'Not borrowed: Portuguese sailors learned it over decades of voyages in the 1400s.',
      template: {
        steps: [
          { label: 'Out', text: 'Ride the trade winds south along Africa.' },
          { label: 'Turn away', key: true, text: 'To come home, sail away from land, west and north into open ocean.' },
          { label: 'Catch', text: 'Reach the westerlies, which blow back toward Europe.' },
          { label: 'Home', text: 'Ride them home. Historians call this loop the volta do mar.' }
        ]
      },
      notes: {
        minutes: 1.25,
        story: 'This is the answer to the problem on slide 3. To get home, do not fight the wind along the coast. Sail away from land, out into the open ocean, until you reach the westerlies, and ride them home. With no coast in sight, pilots trusted the compass and their latitude readings. Columbus used the same wheel in 1492: trade winds out, westerlies home.',
        keys: [
          'The one thing not borrowed',
          'Sail away from land to get home',
          'Catch the westerlies back to Europe',
          'Volta do mar: "turn of the sea"',
          'Columbus: trade winds out, westerlies home'
        ],
        land: [
          'KC-4.1.II.A: "an improved understanding of regional wind and currents patterns." This is the one item that could not be borrowed.',
          'Volta do mar means roughly "the turn of the sea." It is a wind route, not the same as latitude sailing.'
        ],
        ask: 'Why does sailing away from land get you home?',
        listenFor: 'Out at sea you reach the westerlies, which blow toward Europe.',
        ap: 'Causation: the combination is the mechanism. The tools find the way, the ship lasts the weeks, and the wind carries you home.'
      }
    },
    {
      phase: 'route', kind: 'frame-route', eyebrow: '4.1 · The Payoff', kc: 'Unit 4: Learning Objective A',
      title: 'The ocean became a road both ways.',
      footer: 'New patterns of trade and travel: by sea around Africa to Asia, and across the Atlantic. Next question: who paid?',
      template: {
        visual: { url: P41+encodeURIComponent('4.1 - Columbus Dias da Gama.png'), alt: 'Map of the Atlantic and Indian Oceans with three dashed routes: Dias from Portugal down the African coast to the Cape of Good Hope and back, da Gama out into the Atlantic, around Africa, past Malindi to Calicut, and Columbus from Spain west to Guanahani in the Bahamas', credit: 'BeHistorical instructional map', tagPos: 'tr' },
        ratio: 1600/1000, view: { x: .02, y: .122, w: .84, h: .826 }, maxWidth: 720, path: false,
        stops: [
          { name: 'Dias · 1488', text: 'Reaches the southern tip of Africa.', x: .499, y: .521 },
          { name: 'Da Gama · 1497 to 1498', text: 'About three months out of sight of land, then around Africa to India.', x: .516, y: .723 },
          { name: 'Columbus · 1492', text: 'Rides the trade winds west and the westerlies home.', x: .416, y: .351 }
        ]
      },
      notes: {
        minutes: 0.75,
        story: 'Put it together and the ocean becomes a road both ways. Dias reaches the tip of Africa in 1488. Columbus crosses the Atlantic in 1492. Da Gama reaches India in 1498. That is the "changes in patterns of trade and travel" the College Board asks about. But voyages cost a fortune. Who paid for them, and why? That is 4.2.',
        keys: [
          'The ocean became a road both ways',
          'Dias 1488; Columbus 1492; da Gama 1498',
          'Map numbers follow the key, not dates',
          'All three fleets came home',
          'Bridge: voyages cost a fortune. Who paid?'
        ],
        land: [
          'The numbers follow the map\'s own key, not the calendar: Columbus (3) sailed in 1492, before da Gama (2). Read them in date order.',
          'The map draws outward routes only. All three fleets came home: Dias in 1488, Columbus in 1493, da Gama in 1499.'
        ],
        ask: 'Which of these three voyages used the wind wheel from the last slide?',
        listenFor: 'All of them in some form; Columbus most plainly, trade winds out and westerlies home.'
      }
    },
    {
      phase: 'spice', kind: 'story-scene', eyebrow: '4.2 · The Economic Cause', kc: 'Unit 4: Learning Objective C',
      title: 'Every middleman took a cut.',
      footer: 'A sea route straight to India meant buying at the India price and selling at the Europe price.',
      template: {
        visual: AI(P41,'4.1 - Arriving at Calicut 1498.jpg','Reconstruction of two large European ships at anchor off a palm-lined shore, surrounded by many dhows with triangular sails and small rowing boats, under heavy gray clouds',{position:'22% 50%'}),
        caption: 'Calicut, 1498: da Gama came for pepper',
        steps: [
          { label: 'India', text: 'Pepper grows on the southwest coast and costs little.' },
          { label: 'The ocean', text: 'Indian Ocean merchants carry it to the Red Sea or the Persian Gulf.' },
          { label: 'Egypt or Syria', text: 'It crosses by land and is sold again in ports such as Alexandria.' },
          { label: 'Venice', key: true, text: 'Venetian merchants ship it to Europe, where it costs many times more.' }
        ]
      },
      notes: {
        minutes: 1,
        story: 'Why would a ruler pay for a dangerous voyage? Follow the pepper. It is cheap where it grows in India. Every merchant who carries it on toward Europe adds a cut. By the time it reaches a European table it costs many times more. Sail straight to India yourself and you skip every one of them.',
        keys: [
          'Economic cause: every middleman’s cut',
          'Pepper cheap in India, costly in Europe',
          'Sail straight there: skip them all',
          '"They wanted spices" is only a label',
          'AI scene (Calicut), not evidence'
        ],
        land: [
          'Learning Objective C, the economic cause, stated as a mechanism rather than a label. If a student wants a number: a kilo of pepper cost about 1 to 2 grams of silver where it grew and 20 to 30 elsewhere in Europe (M. N. Pearson).',
          'The picture is the 4.1 AI Historical Reconstruction of Calicut: da Gama\'s ships arriving among traders who had sailed these waters for centuries.'
        ],
        ask: 'If you could sail straight to India, which of these steps would you skip?',
        listenFor: 'All the middle ones: you buy in India and sell in Europe yourself.',
        avoid: '"They wanted spices" is a label. The cause is the price gap and the middlemen.'
      }
    },
    {
      phase: 'state', kind: 'split-mirror', eyebrow: '4.2 · The Role of States', kc: 'KC-4.1.III',
      title: 'Two ways a ruler backed a voyage.',
      footer: 'Either way, the ruler set the terms and claimed the results.',
      template: {
        left: { name: 'Paid for it' }, right: { name: 'Gave permission' },
        rows: [
          { label: 'Example', left: 'Isabella and Ferdinand, for Columbus, 1492', right: 'Henry VII of England, for Cabot, 1496' },
          { label: 'Who paid', left: 'The crown, with help from backers', right: 'Cabot and his backers' },
          { label: 'Ruler gave', left: 'Ships, money, titles, a share', right: 'Permission to sail and claim land' },
          { label: 'Ruler got', left: 'Most of the profit and the new lands', right: 'A fifth of the profit, and the claims' }
        ]
      },
      notes: {
        minutes: 1,
        story: 'This is the role of states. A ruler could pay for the voyage, the way Spain\'s rulers paid for Columbus. Or a ruler could give permission and let the sailor and his backers pay, the way England\'s Henry VII did for Cabot. Either way the ruler set the terms and claimed what was found.',
        keys: [
          'Role of states: paid, or gave permission',
          'Paid: Spain for Columbus, 1492',
          'Permission: Henry VII for Cabot, 1496',
          'Either way the ruler set terms, claimed results',
          'Skip "God, Glory, Gold"'
        ],
        land: [
          'Learning Objective B and KC-4.1.III: "state-supported" exploration. The CED says supported and sponsored, not paid for by rulers alone, and the sources show both kinds.',
          'Rulers had other motives too, spreading Christianity and beating rival kingdoms among them. Do not teach "God, Glory, and Gold" as the answer; it names three categories and explains nothing.'
        ],
        ask: 'Why would a king give permission instead of paying?',
        listenFor: 'He risks nothing, and still gets a share and a claim if it works.'
      }
    },
    {
      phase: 'portugal', kind: 'frame-letterbox', eyebrow: '4.2 · Portugal', kc: 'KC-4.1.III.A',
      title: 'Portugal built a trading-post empire.',
      subtitle: 'Portugal held ports, not lands: forts from Elmina to Goa and Malacca, and a pepper trade the crown ran from Lisbon.',
      template: {
        visual: AI(P42,'4.2 - Trading Post Empire.jpg','Reconstruction of a busy tropical harbor town seen from a hillside: a stone fort with cannon on a rocky point, a stone quay stacked with sacks and barrels, two large European ships at anchor among many small sailing boats',{position:'50% 58%'})
      },
      notes: {
        minutes: 0.75,
        story: 'Portugal went first, step by step down the coast of Africa from 1415, each return paying for the next voyage, until da Gama reached India in 1498. Portugal did not conquer big territories. It took ports and built forts, Elmina in West Africa in 1482, Goa in 1510, Malacca in 1511, to control the sea trade between them.',
        keys: [
          'Went first, step by step from 1415',
          'Each return paid for the next voyage',
          'Ports, not lands: Elmina, Goa, Malacca',
          'CED: "global trading-post empire"',
          'AI scene; its modern flag is an error'
        ],
        land: [
          'KC-4.1.III.A: Portugal\'s maritime technology and navigation led to more travel and trade with Africa and Asia and "resulted in the construction of a global trading-post empire."',
          'Historical Reconstruction, AI generated. One fault, if a sharp student notices: the fort flies today\'s Portuguese flag, adopted in 1911. How the posts worked, and how Asian and African rulers answered them, is 4.4.'
        ],
        ask: 'Why hold ports instead of whole countries?',
        listenFor: 'A few forts can control a sea trade; you do not need to rule the land behind them.'
      }
    },
    {
      phase: 'spain', kind: 'timeline', eyebrow: '4.2 · Spain', kc: 'KC-4.1.III.B',
      title: 'Spain went west, and Europe wanted in.',
      footer: 'Three ships in 1492, at least seventeen in 1493.',
      template: {
        range: [1490, 1525], tick: 5,
        events: [
          { year: 1492, label: '1492', text: 'Three ships reach the Caribbean.' },
          { year: 1493, label: '1493', text: 'Letter printed across Europe; at least 17 ships sail.' },
          { year: 1494, label: '1494', text: 'Tordesillas splits the claims.' },
          { year: 1519, label: '1519', text: 'Magellan\'s fleet sails west.' },
          { year: 1522, label: '1522', text: 'Elcano brings one ship home.' }
        ]
      },
      notes: {
        minutes: 1,
        story: 'Portugal already held the route around Africa, so Spain\'s rulers paid Columbus to try sailing west. He found little gold, but his letter about new lands was printed across Europe, and the next year at least seventeen ships sailed. In 1519 Spain sent Magellan across the Pacific; Elcano brought one ship home in 1522.',
        keys: [
          'Portugal held Africa, so Spain went west',
          'Little gold, but the news spread',
          'Three ships 1492; at least 17 in 1493',
          'Magellan died 1521; Elcano finished 1522',
          'Reached the Caribbean, not Asia'
        ],
        land: [
          'KC-4.1.III.B: Spanish sponsorship of Columbus and later voyages across the Atlantic and Pacific "dramatically increased European interest in transoceanic travel and trade." The ship count is that effect.',
          'Magellan was killed in the Philippines in 1521; Elcano finished the voyage. The 1492 fleet reached the Caribbean, not Asia.'
        ],
        ask: 'Columbus found little gold. Why did Spain send a much bigger fleet the next year?',
        listenFor: 'The news of new lands made the rulers and investors want more.',
        ap: 'Making Connections: Portugal held the African route, so Spain had to go west.'
      }
    },
    {
      phase: 'line', kind: 'map', eyebrow: '4.2 · Rivals · 1494', kc: 'KC-4.1.III',
      title: 'Two crowns split the claims.',
      footer: 'Nobody asked the people who lived in those lands, and the northern states ignored the line.',
      visual: { url: P42+'treaty-of-tordesillas.png', alt: 'BeHistorical map of Treaty of Tordesillas claims: Spain west of the approximate 1494 line, Portugal east including eastern Brazil; 370 leagues west of Cape Verde. Shading shows claimed spheres, not actual control in 1494.' },
      notes: {
        minutes: 1,
        story: 'Spain and Portugal now wanted the same ocean. In 1494, at Tordesillas, their ambassadors agreed on a line: Spain could claim the lands west of it, Portugal the lands east. The line later put Brazil on Portugal\'s side. Nobody asked the people who lived in those lands, and everyone else, England, France and the Dutch, had to look somewhere else.',
        keys: [
          'Tordesillas 1494: ambassadors, not the pope',
          'The line put Brazil on Portugal’s side',
          'Nobody asked the people living there',
          'Everyone else had to look north'
        ],
        land: [
          'Tordesillas, 7 June 1494, was negotiated by ambassadors of the two crowns (UNESCO Memory of the World). It moved a line the pope had drawn in 1493 to 370 leagues west of the Cape Verde Islands. Do not say the pope drew the Tordesillas line; the old 4.2 reading did.',
          'The line later put Brazil on Portugal\'s side: Cabral reached it in 1500 on his way to India and claimed it.',
          'Set up the northern crossings: two states had split the southern routes between them. Everyone else had to look elsewhere.',
          'Copied from the full 4.2 deck, slide 12. The map is a BeHistorical map, not an AI picture; its shading shows claimed spheres, not control.'
        ],
        ask: 'If you were the king of England, what would this treaty make you do?',
        listenFor: 'Look for a different route, one Spain and Portugal did not hold.'
      }
    },
    {
      phase: 'north', kind: 'split-matrix', eyebrow: '4.2 · The Northern Crossings', kc: 'KC-4.1.III.C',
      title: 'Looking for another way to Asia.',
      footer: 'None found a route to Asia. North America and Arctic ice blocked every way through.',
      template: {
        columns: [{ name: 'England' }, { name: 'France' }, { name: 'The Dutch' }],
        rows: [
          { label: 'Sailed', cells: ['Cabot, 1497', 'Verrazzano, 1524; Cartier, 1530s', 'Barentsz, 1590s; Hudson, 1609'] },
          { label: 'Looking for', cells: ['A route to Asia across the North Atlantic', 'A passage to Asia; gold', 'A route north of Russia'] },
          { label: 'Found instead', cells: ['Cod off Newfoundland', 'Furs on the St. Lawrence', 'The Hudson River and its fur trade'] }
        ],
        result: { label: 'Result', text: 'No route to Asia, but fish, furs, and claims to North American coasts.' }
      },
      notes: {
        minutes: 1,
        story: 'Spain and Portugal had the southern routes, so England, France and the Dutch looked north for another way to Asia. Nobody found one. What they found instead was cod, furs, and coasts they could claim, and those paid too.',
        keys: [
          'Shut out of the south, they looked north',
          'England: Cabot 1497, cod',
          'France: Verrazzano, Cartier, furs',
          'Dutch: Barentsz, Hudson, river furs',
          'No route to Asia; fish, furs, claims paid',
          'Same weight as Portugal and Spain'
        ],
        land: [
          'KC-4.1.III.C: northern Atlantic crossings under English, French and Dutch sponsorship, "often with the goal of finding alternative sailing routes to Asia." Give it the same weight as Portugal and Spain.',
          'No ship sailed through the Northwest Passage until 1903 to 1906.'
        ],
        ask: 'They all failed to reach Asia. Were the voyages a waste?',
        listenFor: 'No: they found fish, furs and land, and those paid.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'cause-chain', eyebrow: 'Both Topics · Retell It',
      title: 'From borrowed tools to rival fleets.',
      footer: 'Borrowed tools got the ships home. Rulers paid because the voyages paid back.',
      template: {
        steps: [
          { label: 'Borrowed tools', text: 'Compass, astrolabe, astronomical charts and lateen sail, from older worlds.' },
          { label: 'Ships and wind', key: true, text: 'Caravel, carrack and the volta do mar: out and home.' },
          { label: 'Rulers back it', text: 'They pay or grant rights, for the trade of Asia.' },
          { label: 'Voyages pay', text: 'Portugal\'s posts, Spain\'s new lands, the news that spreads.' },
          { label: 'Rivals join', text: 'England, France and the Dutch sail north.' }
        ],
        links: ['plus', 'so', 'so', 'so']
      },
      notes: {
        minutes: 1.5,
        story: 'Here are both topics in five links. Show it, then hide it and have students rebuild the five links from memory, out loud or on paper.',
        keys: [
          'Show it, hide it, rebuild five links',
          'Links 1 and 2: 4.1. Links 3 to 5: 4.2',
          'Key link: ships and wind',
          'Every link is needed'
        ],
        land: [
          'The first two links are 4.1 (Learning Objective A). The last three are 4.2 (Learning Objectives B and C). No Key Concept band here because the slide spans all of them.',
          'The key link is the second: Europe\'s own contribution was the assembly, new ships and the wind wheel. It is the link students most often skip.'
        ],
        ask: 'Which link would you remove if the story had to stop making sense?',
        listenFor: 'Any link; each one is needed. Without the wind wheel, the ships could not get home, and no voyage could pay.'
      }
    },
    {
      phase: 'close', kind: 'frame-stepin', eyebrow: 'Landing',
      title: 'Borrowed tools got the ships home. Rulers paid because the voyages paid back.',
      template: {
        visual: AI(P42,'4.2 - Landing Slide.jpg','Reconstruction of a busy stone quay beside a river harbor: porters carry sacks and barrels off a ship, and at a table in front a clerk writes in a ledger while men weigh dark peppercorns on a brass scale'),
        lines: [
          'You are on the quay at Lisbon. Pepper from India is weighed and written into the books.',
          'Tools from older worlds got these ships to India and back. The pepper on the scale is why a king paid for the trip.'
        ],
        question: 'Borrowed tools got the ships home. Rulers paid because the voyages paid back.',
        note: 'Next, Topic 4.3: Columbus was looking for a route to Asia. What he started was an exchange of living things nobody planned.'
      },
      notes: {
        minutes: 0.5,
        story: 'One sentence for both topics: borrowed tools got the ships home, and rulers paid because the voyages paid back.',
        ask: 'Say both topics in one sentence, to the person next to you.',
        listenFor: 'A tool or ship or the wind, plus who paid and why.',
        keys: [
          'One sentence for both topics',
          'Tool, ship or wind, plus who paid and why',
          'AI scene: ship name, sack labels invented',
          'Next: 4.3, an exchange nobody planned'
        ],
        land: ['Historical Reconstruction, AI generated. It sets the scene; it is not evidence. The ship\'s name and the "India - Pimenta" (pepper) labels on the sacks are invented by the generator.']
      }
    }
  ]
};
})();
