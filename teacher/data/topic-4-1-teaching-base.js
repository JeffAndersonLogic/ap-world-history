/*
 * Topic 4.1 canonical Teaching OS source.
 * CED: Fall 2026 p. 78 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Causation. Suggested skill: 4.A Contextualization.
 * Story approved by Jeff 2026-10-11 (docs/TOPIC-4-1-STORY-DRAFT.md); First & 10
 * "Getting Home" approved 2026-10-12. The deck tells the same story in the same
 * words, including the 2026-10-12 CED alignment (astronomical charts, currents,
 * and the people who carried the knowledge).
 * Spine: Europe borrowed its sea tools from older worlds, built new ships around
 * them, and learned the Atlantic's winds, and that turned the ocean into a road
 * that ran both ways.
 * Wall version: Borrowed tools. New ships. Learn the wind. Now the ocean goes both ways.
 * Retelling slide: the cause chain (phase 'chain').
 *
 * Class dates: Green Wednesday 2026-10-28, Silver Thursday 2026-10-29.
 * Required modules, from the schedule (Jeff, 2026-10-12; kept at four in his
 * Unit 4 module review of 2026-10-23): 02 First & 10, 06 Checkpoint 1, 07
 * Evidence Lab and 10 Checkpoint 2. The Skill Builder is optional, so it has no
 * slide; it is an early-finisher option in the Work Time notes.
 *
 * Outline format, 2026-11-21 (Jeff, 2026-11-08: the 4.4 outline is the
 * standard for every topic; slides that only point to a module are cut; the
 * lecture tells the story. Jeff asked for 4.1 in that shape on 2026-11-21).
 * The briefing opens on the outline below, a road map before the First & 10
 * shows students the same five section headers (the wall version's four beats,
 * with the problem first), every story slide's eyebrow names its section,
 * minute counts are off the projected slides, the myths moved to the outline's
 * Watch for list and the retelling slide's notes, and one Work Time slide
 * replaced The Twist (Myth and Evidence), Sharpen the Claim and the four module
 * launch slides. Sharpen the Claim did not stay: 4.1 has no CED sample activity
 * and only one learning objective, which the question slide already carries,
 * so its weak claim and its four moves are given aloud from the Work Time
 * notes. No story slide changed. 23 slides to 19.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.1',
    minutes: 90,
    title: 'Technological Innovations',
    subtitle: 'Borrowed tools. New ships. Learn the wind. Now the ocean goes both ways.',
    essentialQuestion: 'How did cross-cultural interactions spread technology and change patterns of trade and travel from 1450 to 1750?',
    apFocus: 'Causation, with Contextualization 4.A',
    endTarget: 'Students can name tools Europe borrowed and the older worlds they came from, explain how new ships and knowledge of the Atlantic\'s winds and currents solved the problem of getting home, and name a new sea route that changed where people traded and traveled.'
  },

  priorities: {
    must: [
      'Tell it as one problem and its answer: in the Atlantic, getting there was easy and getting home was hard.',
      'Name the world each tool came from, as the CED does: Classical, Islamic, Asian. Compass from China; astrolabe and astronomical charts from Greek and Islamic astronomy; lateen sail from the Mediterranean and the Islamic seas.',
      'Show the interaction, not just the origin: knowledge moved with merchants and with translators, as in Toledo.',
      'Finish at the learning objective\'s second half: new patterns of trade and travel. The voyages are proof the tools worked; why they sailed is 4.2.'
    ],
    should: [
      'Use the cause chain as the retelling slide and have students redraw it from memory.',
      'Say "Historical Reconstruction" every time an AI picture is on screen, and point to the real objects in the Evidence Lab.',
      'Correct two myths when they come up (the outline\'s Watch for list; the retelling slide\'s notes): the lateen sail was not an Arab invention, and there was no navigation school at Sagres.'
    ],
    could: [
      'Use the BeInTheRoom Cape Route brief as an extension for students who finish Work Time early.',
      'Point students who want more depth to the eBook chapter, "Sailing Away to Get Home."'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10 "Getting Home"; nothing is new.
  // Required modules are the schedule's (assets/data/announcements-schedule.js).
  outline: {
    required: ['02 First & 10', '06 Checkpoint 1', '07 Evidence Lab', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'Getting home was the hard part', kc: 'KC-4.1.II.A', points: [
        'Indian Ocean: the monsoon turns around each season',
        'Atlantic off Africa: the trade wind blows from the northeast nearly all year',
        'The Canary Current also runs south: wind and water at once',
        'Going out was easy; coming home was the problem',
        'Far from the coast: a few islands at most, no landmarks',
        'The trade winds are reliable; they just never turn around'
      ] },
      { label: 'II', title: 'Borrowed tools', kc: 'KC-4.1.II', points: [
        'Compass: China (Asian), at sea by about 1100, in Europe by about 1190; the route west is debated',
        'Astrolabe: a Greek idea, made precise in the Islamic world, reached Europe through Muslim Spain',
        'Astronomical charts (the CED\'s term): sun and star tables; Zacuto\'s almanac, printed in Portugal, 1496',
        'Lateen sail: on the Mediterranean since Roman times, common across the Islamic seas',
        'Knowledge moved with people: Ptolemy (about 150 CE), Arabic in Baghdad (800s), Latin in Toledo (1175)',
        'Mariner\'s astrolabe, 1480s: Portugal\'s adaptation; the noon sun gives latitude, not longitude'
      ], skill: 'You model contextualization (4.A) out loud: pair each tool with the world it came from (Classical, Islamic, Asian), and name the older networks (the Indian Ocean, the Islamic world, China, the Mediterranean) before any European voyage. Section I is the setting; the chain\'s first box is the context.' },
      { label: 'III', title: 'New ships', kc: 'KC-4.1.II.A', points: [
        'Europe\'s own contribution: putting the tools together in new ships',
        'Caravel: small, light, lateen sails; works against the wind along unknown coasts',
        'Carrack (the Portuguese nau): square sails, a lateen at the back; months of supplies',
        'Fluyt: Dutch, about 1600; a big cargo with a small, cheap crew',
        'Each design solved a different problem: explore, survive, carry cheaply'
      ] },
      { label: 'IV', title: 'Learn the wind', kc: 'KC-4.1.II.A', points: [
        'The one thing nobody could borrow: learned over decades of Portuguese voyages in the 1400s',
        'The winds turn in a wheel: trade winds south, westerlies home',
        'Volta do mar: sail away from land, west and north, then ride the westerlies home',
        'A wind route, not latitude sailing; latitude readings made the turn far surer',
        'Columbus used the same wheel in 1492, turned west'
      ] },
      { label: 'V', title: 'The ocean goes both ways', kc: 'Learning Objective A', points: [
        'Proof the tools worked: Dias 1488, Columbus 1492, da Gama 1497 to 1498',
        'Da Gama: about three months out of sight of land',
        'New patterns: goods and people by sea between Europe and Asia, and across the Atlantic',
        'Calicut, 1498: newcomers to a busy ocean',
        'The twist: a combination, not a European invention; the biggest ships of the early 1400s were in China and the Indian Ocean',
        'Why they sailed, and who paid, is 4.2'
      ] }
    ],
    wrap: { title: 'Put it together', columns: ['The cause', 'Which made it possible to', 'So'], rows: [
      { label: 'Borrowed tools', cells: ['Compass (China); astrolabe and astronomical charts (Greek and Islamic); lateen sail (Roman Mediterranean, Islamic seas)', 'Steer under clouds, find latitude, sail against the wind', 'Pilots knew where they were with no coast in sight'] },
      { label: 'New ships', cells: ['Caravel, carrack, fluyt', 'Explore unknown coasts, survive long voyages, carry goods cheaply', 'Voyages that lasted, and trade that paid'] },
      { label: 'The wind', cells: ['The volta do mar, learned over decades of voyages', 'Sail away from land and catch the westerlies home', 'Getting home, the hard part, was solved'] },
      { label: 'All together', cells: ['A road both ways', 'Go out and come home: Dias 1488, Columbus 1492, da Gama 1498', 'New patterns of trade and travel: around Africa to Asia, and across the Atlantic'] }
    ] },
    vocabulary: [
      { term: 'Monsoon', def: 'Winds that blow from the northeast in winter and turn around to blow from the southwest in summer.' },
      { term: 'Trade Winds', def: 'Winds off northwest Africa that blow from the northeast nearly all year and never turn around.' },
      { term: 'Magnetic Compass', def: 'A magnetized needle that gives sailors a direction to steer when clouds hide the sun and stars. From China.' },
      { term: 'Astrolabe', def: 'An instrument for measuring how high the sun or a star stands. Portuguese pilots made a heavy sea version to read the noon sun.' },
      { term: 'Latitude', def: 'How far north or south of the equator you are.' },
      { term: 'Astronomical Charts', def: 'Tables showing where the sun and stars will be on each day of the year.' },
      { term: 'Lateen Sail', def: 'A triangular sail that lets a ship use wind from the side and work forward at an angle against it.' },
      { term: 'Caravel', def: 'The explorer: a small, light ship with lateen sails that could work against the wind along unknown coasts.' },
      { term: 'Carrack', def: 'The long-haul ship: large, with square sails and a lateen at the back, and room for months of food, water, cargo and guns.' },
      { term: 'Fluyt', def: 'A Dutch ship of about 1600 built to carry a large cargo with a small, cheap crew.' },
      { term: 'Westerlies', def: 'Winds farther north in the Atlantic that blow back toward Europe.' },
      { term: 'Volta do Mar', def: 'Roughly "the turn of the sea": sail away from land, out west and north, until you reach the westerlies, then ride them home.' }
    ],
    watch: [
      { myth: '"Europeans invented the tools of ocean travel."', fix: 'Compass from China; astrolabe and charts from Greek and Islamic astronomy; lateen sail from the Roman Mediterranean. But do not swing to "Europe did nothing": its part was the combination, the new ships and the wind.' },
      { myth: '"Europe got the lateen sail from Arab sailors."', fix: 'It sailed the Mediterranean in Roman times, before Islam. Sailors across the Islamic world used it too, which is why the CED lists it under all three worlds.' },
      { myth: '"In the early 1400s, Europe had the biggest ships."', fix: 'The biggest ships and longest voyages were in China and the Indian Ocean: Zheng He\'s fleets reached East Africa (2.3). Give no ship sizes.' },
      { myth: '"Prince Henry ran a navigation school at Sagres."', fix: 'Historians find no such school. He paid for voyages and employed some mapmakers; who paid is 4.2.' },
      { myth: '"The Atlantic had no reliable winds."', fix: 'Its trade winds were very reliable. They just never turned around like the monsoon.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the owns and bridge-only split, and the two myths to correct.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 3.4 and 2.3. Bridge to the getting-home problem.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-6', minutes: 2, teacher: 'Pose the topic question and hold it.', students: 'Predict an answer.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '6-7', minutes: 1, teacher: 'Show the five sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '7-19', minutes: 12, teacher: 'Module 02: students read the whole story in class.', students: 'Read for the chain; mark where each tool came from.', slide: 5 },
    { id: 'problem', label: 'Two Oceans', range: '19-22', minutes: 3, teacher: 'The monsoon turns around; the Atlantic wind does not.', students: 'Say why getting home was hard.', slide: 6 },
    { id: 'coast', label: 'Fighting the Wind', range: '22-23', minutes: 1, teacher: 'Reconstruction: a caravel beating north off the desert coast.', students: 'Say what the ship is up against.', slide: 7 },
    { id: 'borrowed', label: 'Borrowed Tools', range: '23-26', minutes: 3, teacher: 'Four tools and the worlds they came from.', students: 'Match each tool to its world.', slide: 8 },
    { id: 'path', label: 'How Knowledge Traveled', range: '26-29', minutes: 3, teacher: 'Greek astronomy, through Arabic, into Latin, to Portugal.', students: 'Name who carried it at each stop.', slide: 9 },
    { id: 'toledo', label: 'Toledo', range: '29-30', minutes: 1, teacher: 'Reconstruction: translators at work.', students: 'Say what is being passed from one person to the other.', slide: 10 },
    { id: 'astrolabe', label: 'A New Tool', range: '30-32', minutes: 2, teacher: 'Reconstruction: the mariner\'s astrolabe at noon.', students: 'Explain what a noon reading tells a pilot.', slide: 11 },
    { id: 'ships', label: 'Three Ships, Three Jobs', range: '32-35', minutes: 3, teacher: 'Caravel, carrack, fluyt.', students: 'Tie each ship to its problem.', slide: 12 },
    { id: 'wind', label: 'The Wind Wheel', range: '35-38', minutes: 3, teacher: 'The one thing nobody could borrow.', students: 'Trace the loop home.', slide: 13 },
    { id: 'volta', label: 'Sailing Away to Get Home', range: '38-39', minutes: 1, teacher: 'Reconstruction: a caravel alone in open ocean.', students: 'Say why there is no land in the picture.', slide: 14 },
    { id: 'payoff', label: 'A Road Both Ways', range: '39-42', minutes: 3, teacher: 'Dias, Columbus, da Gama as proof. New patterns of trade and travel.', students: 'Name a new route and what moved on it.', slide: 15 },
    { id: 'calicut', label: 'Calicut, 1498', range: '42-43', minutes: 1, teacher: 'Reconstruction: arriving in a busy ocean. Tell the twist: a combination, not an invention.', students: 'Say what the busy water tells you about this ocean.', slide: 16 },
    { id: 'chain', label: 'The Chain', range: '43-49', minutes: 6, teacher: 'Students redraw the cause chain from memory; correct the myths here.', students: 'Retell the whole topic.', slide: 17 },
    { id: 'worktime', label: 'Work Time', range: '49-83', minutes: 34, teacher: 'Modules 06, 07 and 10, in that order: Checkpoint 1 with no coach, the Evidence Lab, then Checkpoint 2. Give the claim frame aloud if needed; give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Checkpoint 1, Evidence Lab, Checkpoint 2.', slide: 18 },
    { id: 'close', label: 'Landing Sentence', range: '83-85', minutes: 2, teacher: 'Land the answer and hand off to 4.2.', students: 'Say the topic in one sentence.', slide: 19 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.1', url: '../unit-4/lesson-4-1-technological-innovations.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-1-technological-innovations-capture.html' },
    { label: 'BeInTheRoom: The Cape Route Brief', url: '../beintheroom/unit-4/the-cape-route-brief.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-1-technological-innovations.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-1-slide',
    title: 'Topic 4.1 Presentation',
    file: 'present-topic-4-1.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Borrowed tools. New ships. Learn the wind. Now the ocean goes both ways.',
      subtitle: 'Causation, with Contextualization 4.A. One problem, getting home, and the borrowed answer to it.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: borrowed tools, new ships, learn the wind',
          'One problem: getting home',
          'Name each tool’s world: Classical, Islamic, Asian',
          'Knowledge moved with people',
          'End on new trade and travel routes',
          'Motives and sponsors are 4.2',
          'Two myths: Arab lateen sail, Sagres school'
        ],
        land: [
          'CED p. 78, Learning Objective A: explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750. The story answers both halves: where the tools came from, and what they changed.',
          'KC-4.1.II: knowledge from the Classical, Islamic and Asian worlds spread and helped European technology develop. KC-4.1.II.A: new tools, new ship designs and a better understanding of regional wind and current patterns made transoceanic travel and trade possible.',
          'Owns: the borrowed tools and where they came from; the mariner\'s astrolabe and astronomical charts; caravel, carrack and fluyt; the volta do mar; the claim that together they opened new routes.',
          'Bridge only: who paid for the voyages and why (4.2, including Prince Henry and João II); the Columbian Exchange (4.3); trading-post empires (4.4); the fluyt\'s role in Dutch trade (4.5). Dias, Columbus and da Gama appear once, as proof.',
          'Two myths students may bring in: that Europe got the lateen sail from Arab sailors (it was on the Roman Mediterranean before Islam), and that Prince Henry ran a navigation school at Sagres (historians find no such school). The old 4.1 pages taught both. They are in the outline\'s Watch for list, and the retelling slide (17) corrects them if they come up.',
          'Seven pictures in this deck are AI reconstructions Jeff made: five on 2026-10-12 and two more (the three ships, and the landing slide) added on 2026-10-29. Each is labeled on screen. None is evidence; the Evidence Lab uses real objects.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Europe borrowed its sea tools from older worlds, built new ships, and learned the Atlantic\'s winds, so ships could go out and come home and new routes opened.',
        avoid: 'Avoid teaching motives for exploration, state sponsorship, or the 1453 fall of Constantinople as a cause. All of that is 4.2, and the 1453 link is qualified there.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull two earlier topics back from memory.',
      template: {
        questions: [
          { label: 'Topic 3.4', text: 'Name one method a land empire used to expand or hold power.' },
          { label: 'Topic 2.3', text: 'What made Indian Ocean trade "run on a schedule"?' },
          { label: 'Topic 2.3', text: 'Name one tool Indian Ocean sailors used to find their way.' }
        ],
        turn: 'Unit 3\'s empires grew over land. The Atlantic has no wind that turns around. **So how do you get home?**'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          '3.4: those empires grew over land',
          '2.3: monsoon winds reverse with seasons',
          'Do not answer the turn yet'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: gunpowder, devshirme or mansabdars, tax systems, monumental architecture; the monsoon winds reverse with the seasons; the compass, or a tool for measuring the height of the stars. Topic 2.3 named the astrolabe; Indian Ocean pilots mostly used simpler tools such as the kamal and wooden quadrants, so accept the idea and do not dwell on the name.',
          'This is 3.4\'s hand-off: "These empires grew over land. The next states learn to project influence across oceans." Topic 2.3 is the context the whole lesson sits in.',
          'The turn is the lesson\'s problem in disguise. Do not answer it yet.'
        ],
        ask: 'If the wind only ever blows one way, how do you get back?',
        listenFor: 'You cannot just turn around; you need another way home.',
        ap: 'Retrieval plus bridge: the Indian Ocean schedule becomes the contrast that makes the Atlantic problem visible.'
      }
    },
    {
      phase: 'question', kind: 'question', eyebrow: 'The Question',
      kc: 'Unit 4: Learning Objective A',
      title: 'How did knowledge from older worlds let European ships cross the ocean and come back?',
      subtitle: 'And what changed when they could? Hold that question.',
      notes: {
        minutes: 2,
        keys: [
          'The objective in ninth-grade words',
          'Good prediction: a tool and a consequence',
          'Weak prediction lists explorers'
        ],
        land: [
          'This is the learning objective in a ninth grader\'s words. Leave it up long enough for a prediction.',
          'A good prediction names a tool and a consequence. A weak one lists explorers.'
        ],
        ask: 'Predict: what did a ship need to cross an ocean and get back?',
        listenFor: 'A way to know where you are, a ship that can handle the ocean, and a way home.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'How did knowledge from older worlds let European ships cross the ocean and come back?',
        stops: [
          { label: 'I', text: 'Getting home was the hard part' },
          { label: 'II', text: 'Borrowed tools' },
          { label: 'III', text: 'New ships' },
          { label: 'IV', text: 'Learn the wind' },
          { label: 'V', text: 'The ocean goes both ways' },
          { label: '✓', text: 'Put it together: the whole chain', key: true }
        ],
        thenLabel: 'Then',
        then: 'Checkpoint 1 · Evidence Lab · Checkpoint 2'
      },
      notes: {
        minutes: 1,
        keys: [
          'The whole day before the reading',
          'Five sections, then put it together',
          'Same headers as your outline',
          'Each story slide names its section'
        ],
        land: [
          'Read the five headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to V), so the class can see where it is all period.',
          'Sections II to V are the wall version in order: borrowed tools, new ships, learn the wind, now the ocean goes both ways. Section I is the problem they answer.'
        ],
        ask: 'Which section do you think Europe could not borrow from anyone?',
        listenFor: 'Learn the wind. Return to the guess at section IV.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read for the chain.',
      subtitle: 'Borrowed tools, new ships, learn the wind, the ocean goes both ways. Mark where each tool came from.',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-1-technological-innovations-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Mark each tool’s world of origin',
          'Getting home was the hard part',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "Getting Home" in class. The slides that follow retell it with pictures and evidence, so they are retrieval, not a first telling.',
          'Circulate for students who note where each tool came from (Classical, Islamic, Asian), not just its name.',
          'The three questions at the bottom are the First & 10 capture and reach Canvas through Gather All My Work.'
        ],
        ask: 'Which sentence explains why getting home was the hard part?',
        listenFor: 'The trade winds blow from the northeast nearly all year and never turn around.'
      }
    },
    {
      phase: 'problem', kind: 'split-mirror', eyebrow: 'I · Getting Home Was the Hard Part',
      kc: 'KC-4.1.II.A', title: 'One ocean ran on a schedule. The other did not.',
      footer: 'Getting there was never the hard part. Getting home was.',
      template: {
        left: { name: 'Indian Ocean' },
        right: { name: 'Atlantic, off Africa' },
        rows: [
          { label: 'Wind', left: 'The monsoon turns around each season', right: 'The trade wind blows from the northeast nearly all year' },
          { label: 'Going out', left: 'Ride one season\'s wind', right: 'Easy: sail south with the wind' },
          { label: 'Coming home', left: 'Wait, then ride the reversed wind', right: 'Hard: the wind never turns around' },
          { label: 'Landmarks', left: 'Coasts and ports along the way', right: 'Far from the coast, a few islands at most' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Indian Ocean: monsoon reverses on schedule',
          'Atlantic trade winds: reliable, never reverse',
          'Canary Current also runs south',
          'The real problem: coming home',
          'Never say "no reliable winds"'
        ],
        land: [
          'KC-4.1.II.A names "regional wind and currents patterns." This slide sets up why that knowledge mattered.',
          'The Atlantic\'s trade winds are very reliable. What they do not do is reverse like the monsoon. Correct any student who says the Atlantic "had no reliable winds": the old 4.1 reading said that, and it is wrong.',
          'The Canary Current also runs south along northwest Africa all year, so a ship heading home faced wind and water at once. That comes back on the wind slide.'
        ],
        ask: 'Which row is the real problem?',
        listenFor: 'Coming home.',
        ap: 'Contextualization: describe the setting before the change. The Indian Ocean is the older world Europe sat at the edge of.'
      }
    },
    {
      phase: 'coast', kind: 'frame-subtitle', eyebrow: 'I · Getting Home · Off the Coast of Northwest Africa, 1400s',
      kc: 'KC-4.1.II.A',
      template: {
        line: 'Going south was easy. Sailing home meant fighting the wind and the current the whole way.'
      },
      notes: {
        minutes: 1,
        keys: [
          'AI scene, not evidence',
          'Small caravel, lateen sails, against the wind',
          'Let the picture pose the problem'
        ],
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence.',
          'What it gets right: a small caravel with two lateen sails off a desert coast, whitecaps running against it.',
          'Let the picture do the work. The question is the whole lesson in one line.'
        ],
        ask: 'What is this little ship up against?',
        listenFor: 'The wind and the waves, coming straight at it.'
      }
    },
    {
      phase: 'borrowed', kind: 'grid', eyebrow: 'II · Borrowed Tools',
      kc: 'KC-4.1.II', title: 'Most of Europe\'s sea tools came from older worlds.',
      cards: [
        { title: 'COMPASS · ASIAN', text: 'From China, used at sea by about 1100. In Europe by about 1190; how it got there is debated.' },
        { title: 'ASTROLABE · CLASSICAL AND ISLAMIC', text: 'A Greek idea, made precise in the Islamic world, reached Europe through Muslim Spain.' },
        { title: 'ASTRONOMICAL CHARTS · CLASSICAL AND ISLAMIC', text: 'Tables of where the sun and stars would be each day. Built by Muslim and Jewish astronomers; Zacuto\'s almanac printed in Portugal in 1496.' },
        { title: 'LATEEN SAIL · CLASSICAL AND ISLAMIC', text: 'On the Mediterranean since Roman times; common across the seas of the Islamic world.' }
      ],
      footer: 'Classical, Islamic, Asian: the three worlds the College Board names.',
      notes: {
        minutes: 3,
        keys: [
          'Every tool has a world of origin',
          'Compass: China (Asian)',
          'Astrolabe, charts: Greek and Islamic astronomy',
          'Lateen sail: Roman Mediterranean, used across Islam',
          'Say "astronomical charts" (CED term)',
          'Compass route west is debated'
        ],
        land: [
          'KC-4.1.II: knowledge, scientific learning and technology from the Classical, Islamic and Asian worlds spread, facilitating European developments. Every card names its world on purpose.',
          'Compass: Zhu Yu\'s Pingzhou Table Talks (written c. 1111 to 1117) is the earliest record of a compass used at sea; Alexander Neckam mentions it in Europe c. 1190. Historians still debate the route west, so do not teach "via Arab traders" as fact.',
          'Lateen sail: scholarship (Campbell 1995; Whitewright 2009) dates it to the Roman-era Mediterranean, before Islam, and rejects the idea that Arabs invented it. The CED lists it under "Classical, Islamic, and Asian worlds," which this wording fits.',
          'Astronomical charts is the CED\'s own term. Use it, so students recognize it on an exam.'
        ],
        ask: 'Which world gave Europe the compass, and which gave it the astrolabe?',
        listenFor: 'The compass from China (Asian); the astrolabe from Greek and Islamic astronomy.',
        ap: 'Contextualization: a tool and its world. That pairing is the suggested skill for this topic.'
      }
    },
    {
      phase: 'path', kind: 'diffusion-path', eyebrow: 'II · Borrowed Tools · How Knowledge Traveled',
      kc: 'KC-4.1.II', title: 'Greek astronomy took the long way to Portugal.',
      footer: 'Knowledge moved with **people**: translators, scholars and merchants.',
      template: {
        stops: [
          { place: 'Alexandria', date: 'c. 150 CE', text: 'Ptolemy writes a great book of Greek astronomy' },
          { place: 'Baghdad', date: '800s', text: 'Translated into Arabic; astronomers in the Islamic world study and correct it' },
          { place: 'Toledo', date: '1100s', text: 'Translators turn the Arabic version into Latin' },
          { place: 'Portugal', date: '1480s to 1496', text: 'Pilots use sun tables at sea; Zacuto\'s almanac is printed in 1496' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'One body of knowledge, many carriers',
          'Ptolemy, about 150 → Arabic in Baghdad',
          'Arabic → Latin in Toledo, 1175',
          'Zacuto: same tradition, not same book'
        ],
        land: [
          'This is the "cross-cultural interactions" in the learning objective made visible: one body of knowledge, carried by different people at each stop.',
          'Ptolemy\'s Almagest (c. 150 CE) was translated into Arabic in Baghdad in the 800s; Gerard of Cremona translated it from Arabic into Latin in Toledo, finished 1175.',
          'Be careful with the last stop. Zacuto\'s tables are not Ptolemy\'s book; they belong to the same family of astronomy, through the Toledan Tables (Muslim and Jewish astronomers, c. 1080) and the tables of Alfonso X of Castile. Say "the same tradition," not "the same book."',
          'The reading says "Christian and Jewish translators," which is what the sources support for Toledo as a whole.'
        ],
        ask: 'Who carried this knowledge at each stop?',
        listenFor: 'Greek scholars, then Islamic astronomers, then translators in Toledo, then Portuguese pilots.',
        ap: 'Diffusion is how it traveled; adaptation is what each place made of it. The Portuguese turned astronomy into a tool for finding latitude at sea.'
      }
    },
    {
      phase: 'toledo', kind: 'frame-letterbox', eyebrow: 'II · Borrowed Tools · Toledo, Spain, 1100s and 1200s',
      kc: 'KC-4.1.II',
      title: 'Knowledge moved with people.',
      subtitle: 'Christian and Jewish translators turned Arabic books, many by Muslim scholars, into Latin.',
      notes: {
        minutes: 1,
        keys: [
          'AI scene, not evidence',
          'Christian and Jewish translators',
          'Arabic books into Latin',
          'The Arabic writing is invented'
        ],
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence.',
          'What it gets right: handwritten manuscripts, not printed books (printing in Europe begins c. 1450); a flat astronomer\'s astrolabe on the table; Mudéjar arches and tilework.',
          'The Arabic writing in the picture is not real text. If a student asks, say so: AI invents letters.',
          'The tonsured man wears a habit like a Franciscan friar\'s. That order was founded in 1209, so the picture fits the 1200s translators (under Alfonso X, many worked into Castilian as well as Latin), not Gerard of Cremona in 1175. The slide\'s claim, translators turning Arabic books into Latin, holds for both centuries.'
        ],
        ask: 'What is being passed from one person to the other?',
        listenFor: 'Knowledge, out of an Arabic book and into a Latin one.'
      }
    },
    {
      phase: 'astrolabe', kind: 'frame-letterbox', eyebrow: 'II · Borrowed Tools · Off West Africa, 1480s',
      kc: 'KC-4.1.II.A',
      title: 'A borrowed instrument becomes a new tool.',
      subtitle: 'The mariner\'s astrolabe: measure the noon sun, check the chart, know your latitude.',
      notes: {
        minutes: 2,
        keys: [
          'AI scene, not evidence',
          'Mariner’s astrolabe: a Portuguese adaptation',
          'Noon sun → latitude',
          'Latitude only; no longitude at sea',
          'Picture errors: no sighting vanes, pencil'
        ],
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence.',
          'What it gets right: the mariner\'s astrolabe is a heavy, open ring with spokes, hung from the thumb so it stays upright. That is the Portuguese adaptation of the flat instrument on the Toledo slide. Many early sea astrolabes were wood or bronze; da Gama\'s fleet carried a large wooden one and smaller metal ones.',
          'Three things it gets wrong, if a sharp student notices: the pointer arm has no sighting vanes, though a real one had two small plates with holes so the pilot could catch the sun\'s ray without looking at the sun; the big sail behind the pilot looks square, when many caravels of the 1480s still carried lateen sails; and the young sailor writes with what looks like a wooden pencil, which is later.',
          'Latitude is how far north or south you are. Longitude, east and west, could not be measured at sea in this period; dead reckoning filled the gap.',
          'The Evidence Lab\'s astrolabe is the astronomer\'s kind (Oxford, 1500 to 1550), the instrument the sea version grew out of. The oldest surviving mariner\'s astrolabe, the Sodré astrolabe, dates from c. 1496 to 1501.'
        ],
        ask: 'What does one noon reading tell this pilot?',
        listenFor: 'How far north or south the ship is: its latitude.'
      }
    },
    {
      phase: 'ships', kind: 'grid', eyebrow: 'III · New Ships',
      kc: 'KC-4.1.II.A', title: 'Three ships, three jobs.',
      cards: [
        { title: 'CARAVEL · EXPLORE', text: 'Small and light with lateen sails. Works against the wind and slips along unknown coasts.' },
        { title: 'CARRACK · HAUL', text: 'Large, square sails and a lateen at the back. Room for months of food, water, cargo and guns.' },
        { title: 'FLUYT · MAKE IT PAY', text: 'Dutch, around 1600. A big cargo with a small, cheap crew.' },
        { title: 'BECAUSE', text: 'Each design solved a different problem: exploring, surviving long voyages, or carrying goods cheaply.' }
      ],
      notes: {
        minutes: 3,
        keys: [
          'Caravel: small, light, explores coasts',
          'Carrack (nau): survives long voyages',
          'Fluyt, 1595: carries goods cheaply',
          'AI scene: they never sailed together',
          'Modern Portuguese flags: a picture error'
        ],
        land: [
          'These are the CED\'s three illustrative examples of ship design. They are optional, but they are the three students will meet.',
          'Caravel: typically two or three lateen-rigged masts (Britannica). Square-rigged caravels came at the end of the 1400s; the old 4.1 lecture said the 1440s caravel "combined" both, which is wrong for that date.',
          'Carrack: usually square sails on the fore and main masts and a lateen on the mizzen. The Portuguese called it a nau.',
          'Fluyt: first built at Hoorn, usually dated 1595. It is here as a ship design: cheap to build and sail. Fluyts did most of their work in European bulk trades such as the Baltic; how the Dutch used shipping to compete in global trade belongs to 4.5.'
        ],
        ask: 'Which ship would you send to explore a coast nobody has mapped, and why?',
        listenFor: 'The caravel: small, light, and able to work against the wind.',
        ap: 'Causation: tie each ship to the problem it solved, not just its name.'
      }
    },
    {
      phase: 'wind', kind: 'story-steps', eyebrow: 'IV · Learn the Wind · The One Thing Nobody Could Borrow',
      kc: 'KC-4.1.II.A', title: 'The Atlantic\'s winds turn in a wheel.',
      template: {
        steps: [
          { label: 'Out', text: 'Ride the trade winds south along Africa.' },
          { label: 'Turn away', key: true, text: 'To come home, sail away from land, west and north into open ocean.' },
          { label: 'Catch', text: 'Reach the westerlies, which blow back toward Europe.' },
          { label: 'Home', text: 'Ride them home. Historians call this loop the volta do mar.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Wind knowledge could not be borrowed',
          'Learned over decades of Portuguese voyages',
          'Volta do mar: sail away from land',
          'Reach the westerlies, ride home',
          'Columbus used the same wheel, 1492',
          'Not the same as latitude sailing'
        ],
        land: [
          'This is the third item in KC-4.1.II.A: "an improved understanding of regional wind and currents patterns." Unlike the tools, it could not be borrowed. Portuguese sailors learned it over decades of voyages in the 1400s.',
          'The currents turn the same way. The Canary Current runs south along northwest Africa all year (Britannica); that is why the coast route home fought both wind and water.',
          'Volta do mar means roughly "the turn of the sea." It is a wind route. It is not the same as latitude sailing, which the old reading confused it with.',
          'Columbus used the same pattern in 1492, turned west: south to the Canaries for the trade winds out, a more northerly track for the westerlies home. Nobody had yet ridden the trade winds all the way across; he was betting the pattern held.'
        ],
        ask: 'Why does sailing away from land get you home?',
        listenFor: 'Out at sea you reach the westerlies, which blow toward Europe.',
        ap: 'Causation: the combination is the mechanism. The wind carries you home, the ship lasts the weeks, and latitude readings made the turn far surer.'
      }
    },
    {
      phase: 'volta', kind: 'frame-subtitle', eyebrow: 'IV · Learn the Wind · The Volta do Mar',
      kc: 'KC-4.1.II.A',
      template: {
        place: 'top',
        line: 'To get home, sail away from land. With no coast in sight, pilots trusted the compass, the wind and, more and more, their latitude readings.'
      },
      notes: {
        minutes: 1,
        keys: [
          'AI scene, not evidence',
          'What is missing: land',
          'Cross on the sail: uncertain for this date'
        ],
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence.',
          'The point of the picture is what is missing: land.',
          'The red cross on the sail is the cross of the Order of Christ, which Portuguese ships carry in 16th-century pictures. Whether ships of the late 1400s carried it is less certain, so do not teach it as a fact about this voyage.'
        ],
        ask: 'Why is there no land in this picture?',
        listenFor: 'Because the ship sailed away from land on purpose, to find the wind home.'
      }
    },
    {
      phase: 'payoff', kind: 'grid', eyebrow: 'V · The Ocean Goes Both Ways',
      kc: 'Unit 4: Learning Objective A', title: 'The ocean became a road both ways.',
      cards: [
        { title: '1488 · DIAS', text: 'Reaches the southern tip of Africa.' },
        { title: '1492 · COLUMBUS', text: 'Rides the trade winds west and the westerlies home.' },
        { title: '1497 TO 1498 · DA GAMA', text: 'About three months out of sight of land, then around Africa to India.' },
        { title: 'NEW PATTERNS', text: 'Goods and people move by sea between Europe and Asia, and across the Atlantic.' }
      ],
      footer: 'Why they sailed, and who paid, is Topic 4.2.',
      notes: {
        minutes: 3,
        keys: [
          'Objective’s second half: new trade and travel',
          'Voyages prove the tools worked',
          'Map: 1 Dias, 2 da Gama, 3 Columbus',
          'Date order: Dias, Columbus, da Gama',
          'Da Gama: about 3 months out of sight of land',
          'Avoid "first" claims'
        ],
        land: [
          'This is the second half of the learning objective: the tools "facilitated changes in patterns of trade and travel." End here, not at the tools.',
          'One line each. The voyages are proof the tools worked. Motives, sponsors and results belong to 4.2.',
          'Da Gama: sources give 90 to 95 days out of sight of land before landfall at St Helena Bay in November 1497; he reached Calicut in May 1498. The slide says "about three months" on purpose.',
          'Avoid "first" claims here. The Eastern and Western Hemispheres had been almost entirely cut off from each other; "almost" covers the Norse.'
        ],
        ask: 'Name one new route and one thing that could now travel along it by sea.',
        listenFor: 'Around Africa to India, carrying spices or other Asian goods to Europe; or across the Atlantic.',
        ap: 'Causation: finish the chain. Tools, then routes, then a change in where people traded and traveled.'
      }
    },
    {
      phase: 'calicut', kind: 'frame-letterbox', eyebrow: 'V · Both Ways · Calicut, India, May 1498',
      kc: 'Unit 4: Learning Objective A',
      title: 'A new route into a busy ocean.',
      subtitle: 'Da Gama\'s ships anchored among traders who had sailed these waters for centuries.',
      notes: {
        minutes: 1,
        keys: [
          'AI scene, not evidence',
          'Portuguese were newcomers to a busy ocean',
          'Ships anchor offshore: no deep harbor',
          'Do not count Portuguese ships',
          'What they did there is 4.4'
        ],
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence.',
          'What it gets right: the big ships anchor offshore, because Calicut had no deep harbor; local ships far outnumber them; no Chinese junks, because the Ming voyages had ended in 1433; Kerala-style sloping roofs. What it muddles: some of the lateen-sailed ships have European-style hulls, so do not ask students to count Portuguese ships. Da Gama arrived with three: two naus and a caravel.',
          'Use it to set up the twist: the Portuguese arrived as newcomers to an ocean that already had its own ships, routes and merchants. What they did there is 4.4.',
          'Tell the twist here, in the First & 10\'s words (it was its own slide until 2026-11-21): in the early 1400s the biggest ships and the longest voyages were in the Indian Ocean and China, not Europe. Europe faced a harder ocean and solved it by combining knowledge from older worlds. The breakthrough was a combination, not a European invention.'
        ],
        ask: 'What does this busy harbor tell you about this ocean before the Portuguese arrived?',
        listenFor: 'It was already full of ships, traders and routes. The Portuguese were newcomers.'
      }
    },
    {
      retelling: true, phase: 'chain', kind: 'cause-chain', eyebrow: 'Put It Together · The Whole Topic',
      kc: 'Unit 4: Learning Objective A',
      title: 'How older knowledge opened the oceans.',
      footer: 'Borrowed tools. New ships. Learn the wind. Now the ocean goes both ways.',
      template: {
        steps: [
          { label: 'Older worlds', text: 'China, the Islamic world and the Classical Mediterranean already had the knowledge.' },
          { label: 'Borrowed tools', text: 'Compass, astrolabe and astronomical charts, lateen sail.' },
          { label: 'New ships and the wind', text: 'Caravel, carrack, fluyt, and the volta do mar.', key: true },
          { label: 'A two-way road', text: 'Ships can go out and come home.' },
          { label: 'New patterns', text: 'Sea routes around Africa to Asia and across the Atlantic.' }
        ],
        links: ['spread', 'plus', 'so', 'so']
      },
      notes: {
        minutes: 6,
        keys: [
          'Show it, hide it, redraw five links',
          'First box = context (4.A)',
          'Key link: Europe’s assembly, ships, wind',
          'Every link is needed',
          'Correct the myths here; name the opposite mistake'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the five links from memory.',
          'The first box is the context (the suggested skill, 4.A); the rest is the causal chain (the reasoning process, causation).',
          'The key link is the third: Europe\'s own contribution was the assembly, new ships and the wind wheel. It is the link students most often skip, going straight from "borrowed tools" to "explorers."',
          'Correct the myths here if they come up (they were the Myth and Evidence slide, The Twist, until 2026-11-21, and are in the outline\'s Watch for list), naming the opposite mistake each time. "Europeans invented the tools of ocean travel": compass from China, astrolabe from Greek and Islamic astronomy, lateen sail from the Roman Mediterranean; but do not swing to "Europe did nothing," because the third link is Europe\'s own. "Europe got the lateen sail from Arab sailors": it sailed the Mediterranean in Roman times, before Islam (Campbell, "The Lateen Sail in World History," 1995: in Mediterranean use by the 2nd century AD; Whitewright 2009: fully established by the late 5th century; both doubt Arab invention). Sailors across the Islamic world used it too, which is why the CED lists it under "Classical, Islamic, and Asian."',
          '"In the early 1400s, Europe had the biggest ships": the biggest ships and longest voyages were in China and the Indian Ocean. This is the approved wording (Jeff, 2026-10-11), the concrete comparison, not "Europe did not have the best ships." The proof students know is Zheng He\'s fleets, which reached East Africa (Topic 2.3). No ship sizes are given, on purpose. If a student raises Prince Henry\'s "school of Sagres," it is a myth too: historians find no such school. Henry paid for voyages and employed some mapmakers. Who paid is 4.2.'
        ],
        ask: 'Which link would you remove if the story had to stop making sense?',
        listenFor: 'Any link; each one is needed. Without the wind wheel, the ships could not get home.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 06, 07, 10',
      title: 'Now you trace the chain.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 06', name: 'Checkpoint 1', note: 'Three tools, three problems. On your own, no coach.', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' },
          { code: 'Module 07', name: 'Evidence Lab', note: 'One claim from two real objects.', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Draft, work with Socrates, revise.', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' }
        ]
      },
      notes: {
        minutes: 34,
        keys: [
          'All three required today, in order',
          'Checkpoint 1: no coach; every tool needs its problem',
          'Evidence Lab: real objects only, never the AI scenes',
          'Observe, infer, name a limit',
          'Checkpoint 2: end on a route, not a tool',
          'Unfinished Checkpoint 2 = homework',
          'Early finishers: Skill Builder or Cape Route Brief'
        ],
        land: [
          'This one slide replaces six (The Twist, Sharpen the Claim, and the Skill Builder, Checkpoint 1, Evidence Lab and Checkpoint 2 launch slides, 2026-11-21). Modules 06, 07 and 10 are all required today, from the schedule (Jeff, 2026-10-12; kept in his Unit 4 module review of 2026-10-23). Each button opens its module.',
          'Checkpoint 1 (Module 06), with no coach, is the diagnostic: three tools, three problems solved. Watch for answers that name a tool with no problem attached. Listen for direction (compass), latitude (astrolabe and charts), sailing against the wind (lateen sail, caravel). Give feedback in the room: on an alternating block nothing carries over.',
          'The Evidence Lab (Module 07): build one claim from two real objects. What does each show, and what problem did it help solve? Name one limit. Observation before inference: what the object shows, then what it suggests. It uses real objects only; none of today\'s reconstructions appears there, and students should not cite them as evidence. Its astrolabe is the astronomer\'s kind (Oxford, 1500 to 1550), the instrument the sea version grew out of.',
          'Checkpoint 2 (Module 10) asks for two earlier traditions, one ship design and one wind or current pattern, built into a chain. That is KC-4.1.II plus KC-4.1.II.A. Push students to end on a route or a change in trade, not on the tool. The revised answer in the box is what goes to Canvas.',
          'If a student needs the claim shape, give it aloud (it was the Sharpen slide). The weak claim "Technology caused European exploration" is true and scores nothing: no tool, no origin, no mechanism, no effect. Have them replace "technology" with one named tool and the world it came from (context), add the ships and the wind (mechanism), and end on a new route (effect). It is a frame, not a model answer; do not write a finished claim on the board.',
          'Early finishers: the Skill Builder (Module 05, optional today), which practices the suggested skill, 4.A Contextualization (a strong answer names the older networks, the Indian Ocean, the Islamic world, China and the Mediterranean, before it names a European voyage); or the BeInTheRoom Cape Route Brief as an extension.'
        ],
        ask: 'Does your chain end with a change in where people traded or traveled?',
        listenFor: 'A named route, and what could now move along it.'
      }
    },
    {
      phase: 'close', kind: 'question', eyebrow: 'Topic 4.1 · Landing Sentence',
      kc: 'Unit 4: Learning Objective A',
      title: 'Borrowed tools. New ships. Learn the wind. Now the ocean goes both ways.',
      subtitle: 'Knowledge from the Classical, Islamic and Asian worlds, new ships and the Atlantic\'s wind wheel let European ships cross oceans and come home, and new routes for trade and travel opened. Next: who paid for the voyages, and what did they want?',
      notes: {
        minutes: 2,
        keys: [
          'The sentence answers the objective',
          'AI scene, not evidence',
          'Hand off to 4.2: who paid, and why?'
        ],
        land: [
          'This sentence answers the 4.1 learning objective: how cross-cultural interactions spread technology and changed patterns of trade and travel.',
          'Hand off to 4.2: ships could now go and come back, but every voyage cost a fortune.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.1?',
        listenFor: 'Borrowed tools, new ships and wind knowledge let ships go and come back, so new routes opened.'
      }
    }
  ]
};
