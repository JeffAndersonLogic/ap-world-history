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
 * Required modules and class dates: not set yet. Jeff decides both at Phase 8;
 * the action slides below follow the 3.1 pattern until then.
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
      'Correct two myths on the way: the lateen sail was not an Arab invention, and there was no navigation school at Sagres.'
    ],
    could: [
      'Use the BeInTheRoom Cape Route brief as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Sailing Away to Get Home."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the owns and bridge-only split, and the two myths to correct.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 3.4 and 2.3. Bridge to the getting-home problem.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-6', minutes: 2, teacher: 'Pose the topic question and hold it.', students: 'Predict an answer.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read the whole story in class.', students: 'Read for the chain; mark where each tool came from.', slide: 4 },
    { id: 'problem', label: 'Two Oceans', range: '18-21', minutes: 3, teacher: 'The monsoon turns around; the Atlantic wind does not.', students: 'Say why getting home was hard.', slide: 5 },
    { id: 'coast', label: 'Fighting the Wind', range: '21-22', minutes: 1, teacher: 'Reconstruction: a caravel beating north off the desert coast.', students: 'Say what the ship is up against.', slide: 6 },
    { id: 'borrowed', label: 'Borrowed Tools', range: '22-25', minutes: 3, teacher: 'Four tools and the worlds they came from.', students: 'Match each tool to its world.', slide: 7 },
    { id: 'path', label: 'How Knowledge Traveled', range: '25-28', minutes: 3, teacher: 'Greek astronomy, through Arabic, into Latin, to Portugal.', students: 'Name who carried it at each stop.', slide: 8 },
    { id: 'toledo', label: 'Toledo', range: '28-29', minutes: 1, teacher: 'Reconstruction: translators at work.', students: 'Say what is being passed from one person to the other.', slide: 9 },
    { id: 'astrolabe', label: 'A New Tool', range: '29-31', minutes: 2, teacher: 'Reconstruction: the mariner\'s astrolabe at noon.', students: 'Explain what a noon reading tells a pilot.', slide: 10 },
    { id: 'ships', label: 'Three Ships, Three Jobs', range: '31-34', minutes: 3, teacher: 'Caravel, carrack, fluyt.', students: 'Tie each ship to its problem.', slide: 11 },
    { id: 'wind', label: 'The Wind Wheel', range: '34-37', minutes: 3, teacher: 'The one thing nobody could borrow.', students: 'Trace the loop home.', slide: 12 },
    { id: 'volta', label: 'Sailing Away to Get Home', range: '37-38', minutes: 1, teacher: 'Reconstruction: a caravel alone in open ocean.', students: 'Say why there is no land in the picture.', slide: 13 },
    { id: 'payoff', label: 'A Road Both Ways', range: '38-41', minutes: 3, teacher: 'Dias, Columbus, da Gama as proof. New patterns of trade and travel.', students: 'Name a new route and what moved on it.', slide: 14 },
    { id: 'calicut', label: 'Calicut, 1498', range: '41-42', minutes: 1, teacher: 'Reconstruction: arriving in a busy ocean.', students: 'Say what the busy water tells you about this ocean.', slide: 15 },
    { id: 'twist', label: 'The Twist', range: '42-45', minutes: 3, teacher: 'Myth and evidence: a combination, not an invention.', students: 'Correct each myth.', slide: 16 },
    { id: 'chain', label: 'The Chain', range: '45-51', minutes: 6, teacher: 'Students redraw the cause chain from memory.', students: 'Retell the whole topic.', slide: 17 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '51-55', minutes: 4, teacher: 'Model one causal sentence.', students: 'Upgrade a weak claim.', slide: 18 },
    { id: 'skill', label: 'Skill Builder', range: '55-61', minutes: 6, teacher: 'Module 05: contextualization.', students: 'Describe the context the tools came from.', slide: 19 },
    { id: 'cp1', label: 'Checkpoint 1', range: '61-66', minutes: 5, teacher: 'Independent: three tools, three problems.', students: 'Work without the coach.', slide: 20 },
    { id: 'evidence', label: 'Evidence Lab', range: '66-74', minutes: 8, teacher: 'Module 07: a claim from two real objects.', students: 'Observe, then infer, then name a limit.', slide: 21 },
    { id: 'cp2', label: 'Checkpoint 2', range: '74-83', minutes: 9, teacher: 'Module 10: borrowed knowledge to a two-way ocean. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 22 },
    { id: 'close', label: 'Landing Sentence', range: '83-85', minutes: 2, teacher: 'Land the answer and hand off to 4.2.', students: 'Say the topic in one sentence.', slide: 23 }
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
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Borrowed tools. New ships. Learn the wind. Now the ocean goes both ways.',
      subtitle: 'Causation, with Contextualization 4.A. One problem, getting home, and the borrowed answer to it.',
      notes: {
        minutes: 2,
        land: [
          'CED p. 78, Learning Objective A: explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750. The story answers both halves: where the tools came from, and what they changed.',
          'KC-4.1.II: knowledge from the Classical, Islamic and Asian worlds spread and helped European technology develop. KC-4.1.II.A: new tools, new ship designs and a better understanding of regional wind and current patterns made transoceanic travel and trade possible.',
          'Owns: the borrowed tools and where they came from; the mariner\'s astrolabe and astronomical charts; caravel, carrack and fluyt; the volta do mar; the claim that together they opened new routes.',
          'Bridge only: who paid for the voyages and why (4.2, including Prince Henry and João II); the Columbian Exchange (4.3); trading-post empires (4.4); the fluyt\'s role in Dutch trade (4.5). Dias, Columbus and da Gama appear once, as proof.',
          'Two myths students may bring in: that Europe got the lateen sail from Arab sailors (it was on the Roman Mediterranean before Islam), and that Prince Henry ran a navigation school at Sagres (historians find no such school). The old 4.1 pages taught both; this deck corrects them.',
          'Five pictures in this deck are AI reconstructions Jeff made on 2026-10-12. Each is labeled on screen. None is evidence; the Evidence Lab uses real objects.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Europe borrowed its sea tools from older worlds, built new ships, and learned the Atlantic\'s winds, so ships could go out and come home and new routes opened.',
        avoid: 'Avoid teaching motives for exploration, state sponsorship, or the 1453 fall of Constantinople as a cause. All of that is 4.2, and the 1453 link is qualified there.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
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
        land: [
          'This is the learning objective in a ninth grader\'s words. Leave it up long enough for a prediction.',
          'A good prediction names a tool and a consequence. A weak one lists explorers.'
        ],
        ask: 'Predict: what did a ship need to cross an ocean and get back?',
        listenFor: 'A way to know where you are, a ship that can handle the ocean, and a way home.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read for the chain.',
      subtitle: 'Borrowed tools, new ships, learn the wind, the ocean goes both ways. Mark where each tool came from.',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-1-technological-innovations-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
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
      phase: 'problem', kind: 'split-mirror', eyebrow: 'What Was Already True',
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
      phase: 'coast', kind: 'frame-subtitle', eyebrow: 'Off the Coast of Northwest Africa, 1400s',
      kc: 'KC-4.1.II.A',
      template: {
        line: 'Going south was easy. Sailing home meant fighting the wind and the current the whole way.'
      },
      notes: {
        minutes: 1,
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
      phase: 'borrowed', kind: 'grid', eyebrow: 'Borrowed Tools',
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
      phase: 'path', kind: 'diffusion-path', eyebrow: 'How Knowledge Traveled',
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
      phase: 'toledo', kind: 'frame-letterbox', eyebrow: 'Toledo, Spain, 1100s and 1200s',
      kc: 'KC-4.1.II',
      title: 'Knowledge moved with people.',
      subtitle: 'Christian and Jewish translators turned Arabic books, many by Muslim scholars, into Latin.',
      notes: {
        minutes: 1,
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
      phase: 'astrolabe', kind: 'frame-letterbox', eyebrow: 'Off West Africa, 1480s',
      kc: 'KC-4.1.II.A',
      title: 'A borrowed instrument becomes a new tool.',
      subtitle: 'The mariner\'s astrolabe: measure the noon sun, check the chart, know your latitude.',
      notes: {
        minutes: 2,
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
      phase: 'ships', kind: 'grid', eyebrow: 'New Ships',
      kc: 'KC-4.1.II.A', title: 'Three ships, three jobs.',
      cards: [
        { title: 'CARAVEL · EXPLORE', text: 'Small and light with lateen sails. Works against the wind and slips along unknown coasts.' },
        { title: 'CARRACK · HAUL', text: 'Large, square sails and a lateen at the back. Room for months of food, water, cargo and guns.' },
        { title: 'FLUYT · MAKE IT PAY', text: 'Dutch, around 1600. A big cargo with a small, cheap crew.' },
        { title: 'BECAUSE', text: 'Each design solved a different problem: exploring, surviving long voyages, or carrying goods cheaply.' }
      ],
      notes: {
        minutes: 3,
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
      phase: 'wind', kind: 'story-steps', eyebrow: 'The One Thing Nobody Could Borrow',
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
      phase: 'volta', kind: 'frame-subtitle', eyebrow: 'The Volta do Mar',
      kc: 'KC-4.1.II.A',
      template: {
        place: 'top',
        line: 'To get home, sail away from land. With no coast in sight, pilots trusted the compass, the wind and, more and more, their latitude readings.'
      },
      notes: {
        minutes: 1,
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
      phase: 'payoff', kind: 'grid', eyebrow: 'The Payoff',
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
      phase: 'calicut', kind: 'frame-letterbox', eyebrow: 'Calicut, India, May 1498',
      kc: 'Unit 4: Learning Objective A',
      title: 'A new route into a busy ocean.',
      subtitle: 'Da Gama\'s ships anchored among traders who had sailed these waters for centuries.',
      notes: {
        minutes: 1,
        land: [
          'Historical Reconstruction, AI generated. It sets the scene; it is not evidence.',
          'What it gets right: the big ships anchor offshore, because Calicut had no deep harbor; local ships far outnumber them; no Chinese junks, because the Ming voyages had ended in 1433; Kerala-style sloping roofs. What it muddles: some of the lateen-sailed ships have European-style hulls, so do not ask students to count Portuguese ships. Da Gama arrived with three: two naus and a caravel.',
          'Use it to set up the twist: the Portuguese arrived as newcomers to an ocean that already had its own ships, routes and merchants. What they did there is 4.4.'
        ],
        ask: 'What does this busy harbor tell you about this ocean before the Portuguese arrived?',
        listenFor: 'It was already full of ships, traders and routes. The Portuguese were newcomers.'
      }
    },
    {
      phase: 'twist', kind: 'myth-evidence', eyebrow: 'The Twist',
      kc: 'KC-4.1.II', title: 'A combination, not a European invention.',
      footer: 'Europe faced a harder ocean and solved it by combining knowledge from older worlds.',
      template: {
        rows: [
          { myth: 'Europeans invented the tools of ocean travel.', evidence: 'Compass from China; astrolabe from Greek and Islamic astronomy; lateen sail from the Roman Mediterranean.', source: 'Topic 4.1' },
          { myth: 'Europe got the lateen sail from Arab sailors.', evidence: 'It sailed the Mediterranean in Roman times, before Islam.', source: 'Nautical archaeology' },
          { myth: 'In the early 1400s, Europe had the biggest ships.', evidence: 'The biggest ships and longest voyages were in China and the Indian Ocean.', source: 'Topic 2.3' }
        ]
      },
      notes: {
        minutes: 3,
        land: [
          'Row 2 corrects what the old 4.1 pages taught. Sources: Campbell, "The Lateen Sail in World History" (1995): in Mediterranean use by the 2nd century AD; Whitewright (2009): fully established by the late 5th century. Both doubt Arab invention.',
          'Row 2: sailors across the Islamic world used the lateen sail too, which is why the CED lists it under "Classical, Islamic, and Asian." The myth is that Arabs invented it and handed it to Europe.',
          'Row 3 is the approved wording (Jeff, 2026-10-11): the concrete comparison, not "Europe did not have the best ships." The proof students know is Zheng He\'s fleets, which reached East Africa (Topic 2.3). No ship sizes are given, on purpose.',
          'If a student raises Prince Henry\'s "school of Sagres," it is a myth too: historians find no such school. Henry paid for voyages and employed some mapmakers. Who paid is 4.2.'
        ],
        ask: 'If Europe did not invent the tools, what did Europe do?',
        listenFor: 'Put them together, built new ships around them, and learned the Atlantic\'s winds.'
      }
    },
    {
      retelling: true, phase: 'chain', kind: 'cause-chain', eyebrow: 'The Whole Topic',
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
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the five links from memory.',
          'The first box is the context (the suggested skill, 4.A); the rest is the causal chain (the reasoning process, causation).',
          'The key link is the third: Europe\'s own contribution was the assembly, new ships and the wind wheel. It is the link students most often skip, going straight from "borrowed tools" to "explorers."'
        ],
        ask: 'Which link would you remove if the story had to stop making sense?',
        listenFor: 'Any link; each one is needed. Without the wind wheel, the ships could not get home.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      footer: 'Context, cause, mechanism, effect.',
      template: {
        weak: 'Technology caused European exploration.',
        strong: '**Borrowed tools** like the compass and astrolabe, **new ships** like the caravel, and **knowledge of the Atlantic\'s winds** let ships sail out and come home, **so** new sea routes linked Europe with Africa, Asia and the Americas.'
      },
      notes: {
        minutes: 4,
        land: [
          'The weak claim is true and scores nothing: no tool, no origin, no mechanism, no effect.',
          'The strong claim names borrowed tools (context), the ships and the wind (mechanism), and new routes (effect).',
          'Have students replace "technology" with one named tool and the world it came from.'
        ],
        ask: 'Where in the strong claim is the change in patterns of trade and travel?',
        listenFor: 'New sea routes linked Europe with Africa, Asia and the Americas.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Describe the context first.',
      subtitle: 'Where did the tools come from, and what older world were they part of?',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' },
      notes: {
        minutes: 6,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 4.A Contextualization: identify and describe the context for a development.',
          'A strong answer names the older networks (the Indian Ocean, the Islamic world, China, the Mediterranean) before it names a European voyage.'
        ],
        ask: 'What was already true before the first caravel left Portugal?',
        listenFor: 'Other peoples already had the compass, the astrolabe, astronomy and the lateen sail.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'Three tools, three problems solved.',
      subtitle: 'On your own. Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' },
      notes: {
        minutes: 5,
        land: [
          'Independent. Watch for answers that name a tool with no problem attached.',
          'Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'For each tool, what problem did it solve at sea?',
        listenFor: 'Direction (compass), latitude (astrolabe and charts), sailing against the wind (lateen sail, caravel).'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two real objects.',
      subtitle: 'What does each object show, and what problem did it help solve? Name one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Observation before inference: what the object shows, then what it suggests.',
          'The Evidence Lab uses real objects only. None of the reconstructions from today\'s slides appears there, and students should not cite them as evidence.'
        ],
        ask: 'What does the object show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'From borrowed knowledge to a two-way ocean.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-1-technological-innovations.html#modules' },
      notes: {
        minutes: 9,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for two earlier traditions, one ship design and one wind or current pattern, built into a chain. That is KC-4.1.II plus KC-4.1.II.A.',
          'Push students to end on a route or a change in trade, not on the tool.'
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
