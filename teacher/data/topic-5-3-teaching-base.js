/*
 * Topic 5.3 canonical Teaching OS source.
 * CED: Fall 2026 p. 102 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Causation. Suggested skill: 1.B Developments and Processes (explain a
 * historical concept, development, or process). Learning objective D: explain
 * how environmental factors contributed to industrialization from 1750 to
 * 1900. Key Concepts: KC-5.1.I.A (the seven factors), KC-5.1.I.C (the factory
 * system). The CED prints no illustrative examples for 5.3.
 * Story: docs/TOPIC-5-3-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Coal, Water,
 * and One Roof" is written from the same story, and this deck retells it.
 * Spine: nature put coal, iron and water close together in Britain, and its
 * shortage of wood pushed it to coal. People built the rest: better farms,
 * growing towns, laws that protected property, cotton from abroad and money to
 * invest. Together they made factories pay, and the factory put the work in
 * one place and split it into small jobs.
 * Wall version: Nature gave the fuel and the water. People built the rest. The
 * factory put the work under one roof.
 * Retelling slide: the equation (phase 'retell').
 *
 * Class dates: Green Friday 2026-12-04, Silver Monday 2026-12-07.
 * Required modules, from the schedule (Jeff, 2026-11-08, under his rule of
 * 2026-10-23: 02, 06 and 10 on every topic, plus at least one chosen): 02 First
 * & 10, 05 Skill Builder, 06 Checkpoint 1 and 10 Checkpoint 2. The deck
 * predated that rule and launched 07 Evidence Lab with Checkpoint 1 optional;
 * the Evidence Lab is now the early-finisher option.
 *
 * Outline format, 2026-11-08 (Jeff: the 4.4 outline is the standard for every
 * topic; slides that only point to a module are cut; the lecture tells the
 * story). The briefing opens on the outline below, a road map before the
 * First & 10 shows students the same five section headers, every story slide's
 * eyebrow names its section, minute counts are off the projected slides, the
 * myths moved to the outline's Watch for list and the retelling slide's notes,
 * and one Work Time slide replaced Myth and Evidence and the four module launch
 * slides (Skill Builder, Checkpoint 1, Evidence Lab, Checkpoint 2). No story
 * slide changed. 25 slides to 22. The deck had no Sharpen slide. The topic has
 * one learning objective (D): the Key Concept band on the two-kinds slide
 * carries it, and the synthesis slide answers it. The synthesis slide
 * (close-retell) stays, after the retelling slide and before Work Time.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.3',
    minutes: 90,
    title: 'The Industrial Revolution Begins',
    subtitle: 'Nature put coal, iron and water close together in Britain, and its shortage of wood pushed it to coal. People built the rest: better farms, growing towns, laws that protected property, cotton from abroad and money to invest. Together they made factories pay, and the factory put the work in one place and split it into small jobs.',
    essentialQuestion: 'Why did a new way of making things begin in Britain, and what did the factory change?',
    apFocus: 'Causation, with Developments and Processes 1.B',
    endTarget: 'Students can explain how Britain\'s environment contributed to industrialization (coal and iron close together and close to water, a shortage of wood that pushed Britain to coal, rivers, coast and canals that made heavy goods cheap to move and turned water wheels); explain how better farming, growing towns, laws that protected property, cotton from abroad and saved-up capital made it worth building factories; show how the factors worked together, using the Bridgewater Canal; and explain the factory system\'s two changes, production gathered in one place and work split into specialized jobs, using Cromford and Adam Smith\'s pin workshop.'
  },

  priorities: {
    must: [
      'Answer the objective as written: how ENVIRONMENTAL factors contributed. Every nature slide ends on what the factor made cheaper or possible, never only "Britain had it."',
      'Teach all seven of KC-5.1.I.A\'s factors, sorted into two kinds: what nature gave (waterways; coal, iron and timber) and what people built (towns, better farming, laws that protected property, foreign resources, capital).',
      'Show the factors working together, on one case: the Bridgewater Canal (slide 12). No single factor is the cause.',
      'Teach both halves of KC-5.1.I.C: the factory concentrated production in one place (Cromford, slide 15) and split the work into specialized jobs (slides 16 and 17).',
      'Model 1.B: explain a process step by step, with "which meant" and "so" (slide 13).'
    ],
    should: [
      'Say plainly where the cotton came from: plantations worked by enslaved people in the Caribbean, South America and, after the 1790s, the United States.',
      'Keep timber in the story: the shortage of wood is an environmental factor too.',
      'Correct three myths when they come up (the outline\'s Watch for list; the retelling slide\'s notes): "Britain had coal, so it industrialized," "Cromford was the first factory," and "the steam engine started it."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Coal, Water, and One Roof."',
      'Send students who finish Work Time early to the Evidence Lab (Module 07), or to the Primary Source (Smith\'s pin workshop and Ure\'s definition of a factory) as an extension.',
      'For a class that is ahead: Kenneth Pomeranz\'s argument about why China, which also had coal, did not industrialize first (slide 19 notes).'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes, the First & 10 "Coal, Water, and One Roof" or
  // docs/TOPIC-5-3-STORY-DRAFT.md; nothing is new. Required modules are the
  // schedule's (assets/data/announcements-schedule.js).
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'Before factories', kc: 'Learning Objective D', points: [
        'Putting-out: a merchant brings wool or cotton to country homes',
        'Families spin and weave on their own wheels and looms; paid by the piece',
        'Power: muscles, horses, wind, water wheels',
        'Much of the world\'s cotton cloth came from India (one line; 5.4)',
        'Seven causes (KC-5.1.I.A), two kinds: what nature gave, what people built',
        'Canals are both: nature\'s water, dug by people',
        'The two kinds are the course\'s sort, not the CED\'s'
      ] },
      { label: 'II', title: 'What nature gave', kc: 'KC-5.1.I.A', groups: [
        { name: 'Coal, iron, timber', points: [
          'By the 1600s most old forests cut; wood dear',
          'Charcoal iron costly; iron bought from Sweden, later Russia',
          'By 1700 coal gives England about half its energy',
          '1709: Darby makes iron with coke at Coalbrookdale',
          'Coal and iron close together, often near rivers or the sea',
          'A shortage can be a cause'
        ] },
        { name: 'Water', points: [
          'Floating is the cheapest way to move heavy things',
          'Coal by ship from Newcastle to London; fast streams turn wheels',
          'Bridgewater Canal, 1761: coal in Manchester about half the price',
          'Always add the "so": what it made cheaper or possible'
        ] }
      ] },
      { label: 'III', title: 'What people built', kc: 'KC-5.1.I.A', groups: [
        { name: 'Food and towns', points: [
          'Turnips and clover instead of an empty field; more food from the same land',
          'Enclosure: shared village fields made into private farms',
          'About 8 million people (1761), about 10.5 million (1801)',
          'A smaller share farming (estimates differ: never one number)',
          'Manchester: about 23,000 (1773), 70,409 (1801)',
          'An effect (more people) becomes a cause'
        ] },
        { name: 'Laws, cotton, money', points: [
          'Patents: a 1624 law, the sole right for up to fourteen years; Arkwright\'s, 1769',
          'Parliament passed the enclosure and canal acts',
          'Cotton grown by enslaved people in the Caribbean and South America; the United States after the 1790s',
          'Capital: money from trade, including the slave trade (say "some," never "all")',
          'Need and Strutt: money risked on mills before they paid'
        ] }
      ] },
      { label: 'IV', title: 'How the factors combined', kc: 'KC-5.1.I.A', points: [
        'Bridgewater Canal: coal, water, a law, capital, a town',
        'Acts of 1759 and 1760; the duke borrowed to pay his workmen',
        'Cheap coal drew mills to Manchester; the mills grew the town',
        'No single factor is the cause',
        'Take one away: what fails without it?'
      ], skill: 'You model 1.B Developments and Processes out loud with the frame "the factor, which meant ___, so ___" on an everyday example, a new bus line (slide 13). Then pairs practice it on the five factors people built: take one away (slide 14).' },
      { label: 'V', title: 'The factory: one place, one job each', kc: 'KC-5.1.I.C', points: [
        'Cromford, 1771: Arkwright, Need and Strutt; a water wheel',
        'Workers come to the machines, at the mill\'s hours, under an overseer',
        'Arkwright built houses; mostly women and children, some as young as seven',
        'Not "the first factory": UNESCO, "the birth of the factory system"',
        'Inside: card, draw, rove, spin; each step its own machine and workers',
        'Smith, 1776: ten men, about eighteen steps, 48,000 pins a day (a hand workshop)',
        'Two changes: one place (concentration), one job each (specialization)'
      ] }
    ],
    wrap: { title: 'Put it together', columns: ['The factor', 'Which meant', 'So'], rows: [
      { label: 'Coal, iron, little wood', cells: ['Coal and iron close together; forests cut', 'Fuel and metal cheap; coal in place of wood', 'Iron made with coke, from 1709'] },
      { label: 'Water', cells: ['Rivers, coast, canals, fast streams', 'Heavy coal cheap to move; wheels turn machines', 'Coal in Manchester about half the price'] },
      { label: 'Food and towns', cells: ['Turnips, clover, enclosure', 'More food, more people, fewer farming', 'Workers and buyers close together in towns'] },
      { label: 'Laws, cotton, money', cells: ['Patents; cotton from abroad; saved-up capital', 'Less risk: no copier, something to spin, money before profit', 'Mills worth building'] },
      { label: 'The factory', cells: ['All of them together', 'Factories pay', 'Work in one place, split into one job each'] }
    ] },
    vocabulary: [
      { term: 'Putting-out system', def: 'A merchant brought raw wool or cotton to families in the countryside, who spun and wove it at home on their own wheels and looms; he came back to collect the work and paid for each piece.' },
      { term: 'Coke', def: 'A fuel made by baking coal. From 1709 Darby made iron with it instead of charcoal, made from scarce wood.' },
      { term: 'Canals', def: 'Waterways dug by hand: people improving on nature to float heavy goods.' },
      { term: 'Enclosure', def: 'Fencing the old shared village fields into private farms, often with permission from Parliament, so they could be farmed the new way.' },
      { term: 'Urbanization', def: 'The growth of towns and cities. It put many workers close together and gave them neighbors to sell to.' },
      { term: 'Patent', def: 'The sole right to use a new invention for up to fourteen years, granted to the true and first inventor under a law of 1624.' },
      { term: 'Capital', def: 'Money used to build something that makes more money.' },
      { term: 'Factory system', def: 'Production gathered in a single place, around one source of power.' },
      { term: 'Specialization of labor', def: 'Work split into steps, each with its own machine, tended by workers who do that job and no other.' }
    ],
    watch: [
      { myth: '"Britain had coal, so it industrialized."', fix: 'Coal was one of seven causes, and China had coal too. Farms, towns, laws, cotton and capital mattered as well, and they worked together (the Bridgewater Canal). But do not swing to "coal did not matter": nature gave the fuel and the water.' },
      { myth: '"Cromford was the first factory."', fix: 'Earlier mills, such as Lombe\'s Derby silk mill of the 1720s, had some of its features. But do not swing to "Cromford was nothing new": UNESCO calls the valley the birth of the factory system.' },
      { myth: '"The steam engine started it."', fix: 'Cromford ran on water. Steam engines that drove factory machines came later, in Topic 5.5. But do not swing to "steam did not matter": it is the next chapter.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.2 and Unit 4. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Coalbrookdale by night.', students: 'Predict what Britain had.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the five sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "Coal, Water, and One Roof" in class.', students: 'Sort each cause: nature or people.', slide: 5 },
    { id: 'before', label: 'Before Factories', range: '18-20', minutes: 2, teacher: 'The putting-out system.', students: 'Say where the work happened.', slide: 6 },
    { id: 'kinds', label: 'Two Kinds of Causes', range: '20-21', minutes: 1, teacher: 'Seven factors, two kinds.', students: 'Sort them.', slide: 7 },
    { id: 'wood', label: 'Coal, Iron, and Not Enough Wood', range: '21-23', minutes: 2, teacher: 'A shortage as a cause.', students: 'Trace the chain.', slide: 8 },
    { id: 'water', label: 'Water', range: '23-25', minutes: 2, teacher: 'Moving heavy things, turning wheels.', students: 'Say what water made cheaper.', slide: 9 },
    { id: 'food', label: 'Food, People, Towns', range: '25-27', minutes: 2, teacher: 'Better farming to bigger towns.', students: 'Read the staircase.', slide: 10 },
    { id: 'risk', label: 'Worth the Risk', range: '27-29', minutes: 2, teacher: 'Laws, cotton from abroad, capital.', students: 'Say why each lowers the risk.', slide: 11 },
    { id: 'canal', label: 'The Factors Combine', range: '29-31', minutes: 2, teacher: 'Five factors in one canal.', students: 'Name the five.', slide: 12 },
    { id: 'model', label: 'Explain a Process', range: '31-33', minutes: 2, teacher: 'Model 1.B with the frame, on an everyday example.', students: 'Fill the frame aloud.', slide: 13 },
    { id: 'takeaway', label: 'Take One Away', range: '33-35', minutes: 2, teacher: 'What fails without each factor.', students: 'Explain one with "so."', slide: 14 },
    { id: 'cromford', label: 'Cromford, 1771', range: '35-37', minutes: 2, teacher: 'The factory: one place.', students: 'Say what moved.', slide: 15 },
    { id: 'steps', label: 'One Job Each', range: '37-39', minutes: 2, teacher: 'Specialization, in two mill rooms.', students: 'Name a step and its machine.', slide: 16 },
    { id: 'pins', label: 'Smith\'s Pins, 1776', range: '39-41', minutes: 2, teacher: 'Why specialization makes more.', students: 'Say the numbers.', slide: 17 },
    { id: 'homemill', label: 'Home and Mill', range: '41-43', minutes: 2, teacher: 'The two changes, compared.', students: 'Pick the biggest change.', slide: 18 },
    { id: 'retell', label: 'Coal, Water, and One Roof', range: '43-46', minutes: 3, teacher: 'Students redraw the equation from memory; correct the three myths here.', students: 'Retell the whole topic.', slide: 19 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '46-47', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 20 },
    { id: 'worktime', label: 'Work Time', range: '47-83', minutes: 36, teacher: 'Modules 05, 06 and 10, in that order: the Skill Builder, Checkpoint 1 with no coach, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, Checkpoint 2.', slide: 21 },
    { id: 'close', label: 'Landing Sentence', range: '83-85', minutes: 2, teacher: 'Land the answer and hand off to 5.4.', students: 'Say the topic in one sentence.', slide: 22 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.3', url: '../unit-5/lesson-5-3-industrial-revolution-begins.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-3-industrial-revolution-begins-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-3-industrial-revolution-begins.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-3-slide',
    title: 'Topic 5.3 Presentation',
    file: 'present-topic-5-3.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Nature gave the fuel and the water. People built the rest. The factory put the work under one roof.',
      subtitle: 'Causation, with Developments and Processes 1.B. Why did a new way of making things begin in Britain, and what did the factory change?',
      notes: {
        minutes: 2,
        keys: [
          'Objective D: how environmental factors contributed',
          'Seven factors, two kinds; the factory\'s two changes',
          'Every factor ends on its "so"',
          'Owns factors and factory; steam is 5.5',
          'Three myths: outline Watch for list',
          'Every picture real; none AI-generated'
        ],
        land: [
          'CED p. 102. One learning objective, D (Humans and the Environments): explain how environmental factors contributed to industrialization from 1750 to 1900. The reasoning process is Causation (p. 95); the suggested skill is 1.B, explain a historical concept, development, or process.',
          'Key Concepts: KC-5.1.I.A (a variety of factors contributed to the growth of industrial production: proximity to waterways and access to rivers and canals; the geographical distribution of coal, iron and timber; urbanization; improved agricultural productivity; legal protection of private property; access to foreign resources; accumulation of capital); KC-5.1.I.C (the factory system concentrated production in a single location and led to an increasing degree of specialization of labor).',
          'The CED prints no illustrative examples and no sample activity for 5.3. Every case in this deck is the build\'s choice: Coalbrookdale (coal, iron, timber), the Bridgewater Canal (water, and the factors combined), Manchester (towns), Arkwright\'s mill at Cromford (the factory), Adam Smith\'s pin workshop (specialization).',
          'Owns: the seven factors and the factory system. Bridge only: the steam engine and fossil fuels (5.5), the spread of industry beyond Britain (5.4, the hand-off), Adam Smith\'s free-trade argument (5.7; his pins are used here only for specialization), workers\' lives and the new classes (5.9), Luddites, unions and the Factory Acts (5.8).',
          'Three myths, in the outline\'s Watch for list and corrected on the retelling slide (19) if they come up: "Britain had coal, so it industrialized"; "Cromford was the first factory"; "the steam engine started it."',
          'Every picture is a real object of the period, public domain: Philip James de Loutherbourg\'s Coalbrookdale by Night (1801, Science Museum, London); two engravings of cotton-mill rooms after drawings by Thomas Allom, c. 1834 (Wellcome Collection); a cotton plant etched by J. Pass after Maria Sibylla Merian (London, 1807, Wellcome Collection); William Wyld\'s Manchester from Kersal Moor (1852, Royal Collection). None is AI-generated. No period picture of Cromford Mill could be sourced in this build; slide 15 carries it in words.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Britain\'s coal, iron and water made fuel, metal and transport cheap in the same places, and its shortage of wood pushed it to coal; better farming, growing towns, property laws, foreign cotton and capital made it worth building factories; and the factory put the work in one place and split it into small, specialized jobs.',
        avoid: 'Avoid a list of seven facts. Every factor ends on what it made cheaper or possible, and the deck shows them working together. And avoid steam: Cromford ran on water, and steam is Topic 5.5.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.2', text: 'What three things did a revolution need?' },
          { label: 'Topic 5.2', text: 'What did those revolutions change about a country?' },
          { label: 'Unit 4', text: 'Name one crop enslaved people were forced to grow on Atlantic plantations.' }
        ],
        turn: 'Those revolutions changed **who had the right to rule**. Even before Paris argued about rights, a different revolution had begun in British workshops: a change in **how things were made**. Why there?'
      },
      notes: {
        minutes: 4,
        keys: [
          'No notes; fast answers, no reteaching',
          '5.2: a grievance, words, a chance',
          'Those revolutions changed who ruled',
          'Bridge: a revolution in how things were made',
          'Prompt 3 returns on slide 11: cotton'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: a grievance, the words to name it, and a chance; who ruled and how (new states, republics, constitutions); sugar, tobacco, cotton, coffee, rice or indigo.',
          'The bridge is 5.2\'s hand-off line. Prompt 3 returns on slide 11: by the 1780s most of the cotton spun in Manchester was grown by enslaved people.'
        ],
        ask: 'If a revolution in ruling needed a grievance, words and a chance, what might a revolution in making things need?',
        listenFor: 'Something to make things from, a way to power the work, people to do it, and someone willing to pay for it. That is today.',
        ap: 'Retrieval plus bridge: 5.2 changed who rules; 5.3 asks what caused a change in how things were made.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'Why did a new way of making things begin in Britain?',
      subtitle: 'And what did the factory change about work?',
      notes: {
        minutes: 1,
        keys: [
          'Coalbrookdale by Night: a real painting, 1801',
          'Madeley Wood furnaces, not Darby\'s 1709 furnace',
          'Coal into fire and iron, beside a river',
          'Predict what Britain had; check at slide 12'
        ],
        land: [
          'The picture is a real painting: Philip James de Loutherbourg, Coalbrookdale by Night, oil, 1801, Science Museum, London, public domain. It shows the Madeley Wood (Bedlam) furnaces in the Severn gorge, near Coalbrookdale, lit up at night, with carts hauling iron in the foreground. The Science Museum\'s blog ("Art at the Coalface") calls them open coke hearths for smelting iron; they belonged to the Coalbrookdale Company from 1776 to 1796.',
          'Why open here: the picture shows what the deck explains: coal turned into fire, iron, and work that went on after dark, beside a river. It is not Darby\'s 1709 furnace, which stood in Coalbrookdale itself, a side valley of the gorge.',
          'Loutherbourg also designed scenery for the theater. That makes a good Evidence Lab question: how literally should we take the fire and smoke?'
        ],
        ask: 'Predict: what did Britain have that made this possible?',
        listenFor: 'Coal, iron, a river, people to work, someone to pay for it. Write the guesses down and check them by slide 12.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'Why did a new way of making things begin in Britain, and what did the factory change?',
        stops: [
          { label: 'I', text: 'Before factories' },
          { label: 'II', text: 'What nature gave' },
          { label: 'III', text: 'What people built' },
          { label: 'IV', text: 'How the factors combined' },
          { label: 'V', text: 'The factory: one place, one job each' },
          { label: '✓', text: 'Put it together: coal, water, and one roof', key: true }
        ],
        thenLabel: 'Then',
        then: 'Skill Builder · Checkpoint 1 · Checkpoint 2'
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
          'The question at the top is the topic question: for each cause, students watch for whether nature gave it or people built it, and what it made cheaper or possible; then for the two things the factory changed.'
        ],
        ask: 'Which kind of cause do you expect to matter more: what nature gave, or what people built?',
        listenFor: 'Any reasoned guess; return to it at the equation.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read and sort the causes.',
      subtitle: 'For each cause, decide: did nature give it, or did people build it? Then find the two things the factory changed.',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-3-industrial-revolution-begins-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Sort each cause: nature or people',
          'Find the "so" in each section',
          'Q3: the factory\'s two changes',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "Coal, Water, and One Roof" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who sort each factor (nature or people) and who find the "so" in each section: what the factor made cheaper or possible.',
          'Question 01 is one environmental factor explained as a cause; question 02 is one factor people built; question 03 is the factory system\'s two changes. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which cause surprised you, and was it from nature or from people?',
        listenFor: 'The shortage of wood (nature); the cotton grown by enslaved people far away (people); Parliament\'s laws (people).'
      }
    },
    {
      phase: 'before', kind: 'story-steps', eyebrow: 'I · Before Factories · 1750',
      title: 'The work came to people\'s homes.',
      footer: 'Power came from muscles, horses, wind and water wheels.',
      template: {
        steps: [
          { label: 'Brings', text: 'A merchant brings raw wool or cotton to families in the countryside.' },
          { label: 'At home', text: 'The family spins it and weaves it, on its own wheel and loom.' },
          { label: 'Collects', text: 'The merchant collects the cloth and pays for each piece.' },
          { label: 'The result', key: true, text: 'Making cloth is spread across many homes.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Putting-out: the work came to homes',
          'Families owned their own wheels and looms',
          'The merchant paid for each piece',
          'Power: muscles, horses, wind, water wheels',
          'The "before" for the factory\'s change',
          'India: one line only (5.4)'
        ],
        land: [
          'The putting-out (domestic) system. Britannica: merchants gave materials to rural workers, usually at home; "finished products were returned to the employers for payment on a piecework or wage basis." Workers typically owned their own wheels and looms.',
          'This is the "before" that makes KC-5.1.I.C\'s change visible: the factory "concentrated production in a single location." Under putting-out, production was spread across many cottages.',
          'Power (the footer): Gregory Clark (UC Davis), "The only sources were animals, water-wheels, and wind-mills." Heat came from wood and, in Britain, more and more from coal (slide 8).',
          'Much of the world\'s cotton cloth in 1750 came from India; Lancashire\'s cotton industry grew up copying Indian cloth (Clark). Keep India to one line: its falling share of manufacturing is Topic 5.4.'
        ],
        ask: 'In this system, where does the work happen, and who decides how fast it goes?',
        listenFor: 'In many homes; the family sets its own pace, though the merchant sets the price.',
        ap: 'The before for KC-5.1.I.C.'
      }
    },
    {
      phase: 'kinds', kind: 'branch-tree', eyebrow: 'I · Before Factories · The Causes',
      kc: 'Unit 5: Learning Objective D', title: 'Seven causes, two kinds.',
      footer: 'Sort every cause today into one of these two branches.',
      template: {
        claimLabel: 'The College Board lists',
        claim: '**Seven factors** behind industrial production',
        branches: [
          { label: 'What nature gave', note: 'In Britain\'s ground and water', items: ['Rivers, coast, canals', 'Coal, iron, too little timber'] },
          { label: 'What people built', note: 'On top of what nature gave', items: ['Towns and better farming', 'Property laws', 'Foreign resources and capital'] }
        ]
      },
      notes: {
        minutes: 1,
        keys: [
          'Objective D: how environmental factors contributed',
          'KC-5.1.I.A lists seven factors',
          'Nature gave two; people built five',
          'The two kinds: our sort, not the CED\'s',
          'Canals are both'
        ],
        land: [
          'Learning objective D asks how environmental factors contributed. KC-5.1.I.A lists seven: "Proximity to waterways; access to rivers and canals ▪ Geographical distribution of coal, iron, and timber ▪ Urbanization ▪ Improved agricultural productivity ▪ Legal protection of private property ▪ Access to foreign resources ▪ Accumulation of capital."',
          'The sort into two kinds is a teaching device, not the CED\'s. It is how the deck answers "environmental": two of the seven are the environment itself; the other five are what people built, and canals are both (nature\'s water, improved by people). Say so when a student asks.',
          'Better farming is people working with the environment: it sits in the people branch because the change was in how people farmed.'
        ],
        ask: 'Canals: nature or people?',
        listenFor: 'Both: the water is nature\'s, the canal is dug by people. Good: the factors overlap.',
        ap: 'Learning objective D; KC-5.1.I.A.'
      }
    },
    {
      phase: 'wood', kind: 'cause-chain', eyebrow: 'II · What Nature Gave · Coal, Iron, Timber',
      kc: 'KC-5.1.I.A', title: 'Not enough wood. Plenty of coal.',
      footer: 'A shortage of wood helped push Britain toward coal, which it had in plenty.',
      template: {
        steps: [
          { label: 'By the 1600s', text: 'Most of Britain\'s old forests are cut down' },
          { label: 'Wood is dear', text: 'Charcoal for iron is costly; iron is bought from Sweden, later Russia' },
          { label: 'By 1700', text: 'Coal gives England about half its energy' },
          { label: '1709', text: 'Darby makes iron with coke, baked from coal', key: true }
        ],
        links: ['so', 'so Britons burn more', 'and then']
      },
      notes: {
        minutes: 2,
        keys: [
          'Timber is on the list for its shortage',
          'Forests cut; wood and charcoal iron dear',
          'Iron bought from Sweden, later Russia',
          'By 1700 coal: about half England\'s energy',
          '1709: Darby makes iron with coke',
          'Say "made iron with coke," not "solved iron"',
          'A shortage can be a cause'
        ],
        land: [
          'KC-5.1.I.A: "Geographical distribution of coal, iron, and timber." Timber is on the list for its shortage.',
          'Clark (UC Davis): "Britain in the seventeenth century was very poorly endowed with woodland. Population pressure on the land had led to the destruction of most of the original forest. Thus wood was relatively expensive ... much of the iron used in Britain was imported from Sweden and Russia." Sweden came first; large Russian bar-iron imports came from the 1730s (Peter King, Economic History Review, 2011). Iron had been smelted with charcoal, made from wood.',
          'E. A. Wrigley, Energy and the English Industrial Revolution (2010): "By 1700 about half of the total energy consumption of England came from coal." Much of it was burned at home for heating and cooking.',
          'Coalbrookdale, on the Severn in Shropshire: Historic England and English Heritage date Abraham Darby\'s coke smelting at the Old Furnace to 1709, "using coke made from local coal ... rather than charcoal." Coke is coal baked to drive off its impurities. At first Darby\'s coke iron went into cast pots; King (2011, the Coalbrookdale accounts) finds new Shropshire furnaces making coke pig iron for forges only from 1754, after Swedish iron prices rose in 1747. Say "made iron with coke," not "solved iron."',
          'Coal and iron ore lay close together in places like Coalbrookdale and the Black Country, and much coal lay near rivers or the sea. Robert Allen (2009) argues that cheap British coal made energy-using machines pay in Britain, as high wages made labor dear: an argument for the class that wants one.',
          'A caution: some historians argue the old forests were cut partly because of growing demand, and that coal use grew mainly with demand. The slide says the order of events, not that the shortage alone caused the switch.'
        ],
        ask: 'Why is a shortage on a list of things that caused industry?',
        listenFor: 'Because wood ran short, people had to find a substitute, and the substitute, coal, was right there.',
        ap: 'KC-5.1.I.A. Causation: a shortage can be a cause.'
      }
    },
    {
      phase: 'water', kind: 'story-steps', eyebrow: 'II · What Nature Gave · Water',
      kc: 'KC-5.1.I.A', title: 'Water moved coal and turned wheels.',
      footer: 'Before railways, the cheapest way to move something heavy was to float it.',
      template: {
        steps: [
          { label: 'Coast', text: 'Coal from the mines near Newcastle goes by ship to London.' },
          { label: 'Streams', text: 'Fast water turns water wheels, and wheels turn machines.' },
          { label: 'Canals', text: 'People improve on nature: waterways dug by hand.' },
          { label: '1761', key: true, text: 'The Bridgewater Canal opens toward Manchester, and coal there soon costs about half.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Floating is the cheapest way to move heavy things',
          'Coal by ship, Newcastle to London',
          'Fast streams turn water wheels',
          'Bridgewater Canal, 1761: Manchester coal about half price',
          'Add the "so": a fact becomes an explanation'
        ],
        land: [
          'KC-5.1.I.A: "Proximity to waterways; access to rivers and canals."',
          'Coast: Clark notes the Newcastle mines used horse tramlines from the pits "down to the wharves where the coal was loaded onto ships for carriage to London and other markets."',
          'Water power: the first factories, Cromford among them, were built beside fast streams to turn their wheels (slide 15).',
          'The Bridgewater Canal (Bridgewater Canal Company history): an act of 23 March 1759, and a second act of March 1760 for the changed route over the Barton aqueduct; opened 17 July 1761 from the duke\'s mines at Worsley to Stretford, on Manchester\'s edge; "completed through to Stretford and to Castlefield Wharf, Manchester by 1765." Britannica: it cut the cost of coal in Manchester in half. Local accounts give about 7d a hundredweight before and under 4d after, within a year; Graces Guide credits the greater supply as well as the cheaper carriage. Canal building took off after its success.',
          'Make the causal step explicit: "Britain had rivers" is a fact; "water made heavy coal cheap to move, so mills near a canal paid less for fuel" is an explanation.'
        ],
        ask: 'Water did two different jobs. What were they?',
        listenFor: 'It carried heavy goods cheaply, and it turned water wheels that drove machines.',
        ap: 'KC-5.1.I.A.'
      }
    },
    {
      phase: 'food', kind: 'compounding-stairs', eyebrow: 'III · What People Built · Food and Towns',
      kc: 'KC-5.1.I.A', title: 'Food, then people, then towns.',
      template: {
        steps: [
          { label: 'New crops', text: 'Turnips and clover' },
          { label: 'More food', text: 'From the same land, with a smaller share of people farming' },
          { label: 'More people', text: 'About 8 million in 1761, about 10.5 million in 1801' },
          { label: 'Bigger towns', text: 'Manchester: about 23,000 (1773), 70,409 (1801)' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Turnips and clover: more food, same land',
          'Enclosure let farms run the new way',
          'How much more food is disputed',
          'About 8 million (1761), 10.5 million (1801)',
          'A smaller share farming: never one number',
          'Manchester: about 23,000 (1773), 70,409 (1801)',
          'An effect becomes a cause'
        ],
        land: [
          'KC-5.1.I.A: "Improved agricultural productivity" and "Urbanization."',
          'Farming: Britannica, "Norfolk four-course system": wheat, turnips, barley, then clover and ryegrass, in place of a fallow year. Turnips fed animals through the winter; clover enriched the soil; more animals meant more manure and more grain. The rotation was older in Flanders; British farmers spread it.',
          'Enclosure (the First & 10, section 4): UK Parliament counts 5,265 enclosure acts from 1604 to 1914, 3,828 of them from 1750 to 1819, turning shared fields into private farms. Historians dispute how far enclosure pushed people off the land; say only that enclosed farms could be run the new way.',
          'Productivity is disputed. Clark\'s textbook chapter reports estimates that agricultural productivity "more than doubled between 1700 and 1850," built indirectly; his own research ("The Agricultural Revolution and the Industrial Revolution," 2002) finds only about 50 percent growth from 1500 to 1860, with imports and a shift toward food feeding the larger population. The slide says only "more food from the same land."',
          'People: Clark estimates Britain at 7.8 million in 1761; the 1801 census counted 10,472,048 in England, Wales and Scotland (Hansard, 1812). Fewer farming: estimates differ. CAMPOP (Shaw-Taylor) puts adult men in farming at about 43 percent in 1761, nearly flat for half a century, and 42 percent in 1813 to 1820; Clark\'s census-based figure is 36 percent in 1801 and Allen\'s 35 percent by 1800. Say "a smaller share than in 1700, when it was almost half," never a single number.',
          'Manchester: about 23,000 in a local count of 1773, 70,409 in the census of 1801 (Manchester City Council). Urbanization is a cause here (workers and buyers close together) and an effect in 5.9.'
        ],
        ask: 'How does a turnip help build a factory?',
        listenFor: 'It feeds animals, which means more manure and more grain; more food feeds more people, and fewer of them are needed on farms, so towns grow with workers and buyers.',
        ap: 'KC-5.1.I.A. Causation: an effect (more people) becomes a cause.'
      }
    },
    {
      phase: 'risk', kind: 'story-scene', eyebrow: 'III · What People Built · Laws, Resources, Money',
      kc: 'KC-5.1.I.A', title: 'Three things made the risk worth taking.',
      template: {
        caption: 'Cotton, engraved after Maria Sibylla Merian, London, 1807',
        steps: [
          { label: 'Laws', text: 'A 1624 law kept patents: an inventor\'s sole right for up to fourteen years. Arkwright\'s came in 1769.' },
          { label: 'Cotton', text: 'It will not grow in Britain. By the 1780s most was grown by enslaved people in the Caribbean and South America.' },
          { label: 'Capital', key: true, text: 'Money saved from trade, including the slave trade, risked on mills before they paid.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Patents: a 1624 law, up to fourteen years',
          'Arkwright\'s patent, 1769',
          'Cotton grown by enslaved people far away',
          'United States cotton only after the 1790s',
          'Capital: money risked before the mill paid',
          'Slave-trade money: say "some," never "all"',
          'The print shows cotton, not a plantation'
        ],
        land: [
          'KC-5.1.I.A: "Legal protection of private property," "Access to foreign resources," "Accumulation of capital."',
          'The picture is a real print: a hand-colored etching of a cotton plant by J. Pass after a drawing by Maria Sibylla Merian, published by J. Wilkes in London on 20 June 1807, Wellcome Collection, public domain. The plate itself names the plant Gossypium religiosum, an old name now filed under upland cotton (Gossypium hirsutum), a New World species; the Wellcome catalogue calls it tree cotton (Gossypium arboreum). Either way, use it to show what cotton is, not where Britain\'s came from. Merian drew the plants and insects of Suriname, a Dutch plantation colony in South America, where she worked from 1699 to 1701; her 1705 book has a cotton plant with a caterpillar like this one. It shows the raw material, not a plantation.',
          'Laws: the Statute of Monopolies (1624), section 6, banned most monopolies but kept patents: the crown could grant "the true and first inventor" of "new manufactures" the sole right for "the term of fourteen years or under." Patents were older than 1624; the statute limited and protected them. Parliament, where landowners and merchants sat, passed the enclosure and canal acts. Arkwright patented his water frame in 1769 (Clark). A twist for the "first factory" myth (the outline\'s Watch for list): his 1769 spinning patent ran out in 1783, and in 1785 a court (R v Arkwright) canceled his 1775 patent on carding and preparing machines: the specification was found unclear, and the court heard claims that others (Highs, Kay, Hargreaves) had invented them.',
          'Foreign resources: Science and Industry Museum, Manchester: "By the 1780s, most of the cotton spun and woven in Manchester was grown by enslaved people on plantations in the Caribbean and South America"; "By 1860, plantations in the United States supplied almost 90 percent of the cotton spun and woven in Lancashire\'s mills." The United States sent Britain almost no cotton before the 1790s. Clark: raw cotton used in Britain rose from 2.6 million pounds in 1760 to 51.6 million in 1800.',
          'Capital: Arkwright\'s partners Samuel Need, "a wealthy Nottingham hosier," and Jedediah Strutt, co-inventor of the Derby rib stocking frame, joined him by 1770 (Belper Research; Derwent Valley Mills). Clark: the partnership spent about £12,000 before it made a profit in 1774, when a carpenter earned no more than £36 a year; other accounts attach the £12,000 to Arkwright\'s carding machine, so the slide says only that money was risked before profit. How much British capital came from slavery and the slave trade is still argued (Eric Williams, Capitalism and Slavery, 1944, and his critics): say "including" and "some," never "paid for it all."'
        ],
        ask: 'Pick one of the three. How does it make an investor more willing to risk money?',
        listenFor: 'A patent means a copier cannot take your idea; cotton from abroad means there is something to spin; capital means someone can pay before the profits come.',
        ap: 'KC-5.1.I.A.'
      }
    },
    {
      phase: 'canal', kind: 'equation', eyebrow: 'IV · How the Factors Combined',
      kc: 'KC-5.1.I.A', title: 'Five factors, one canal.',
      footer: 'Cheap coal made Manchester a better place for mills, and the mills made the town grow faster still.',
      template: {
        terms: [
          { word: 'Coal', note: 'under the ground at Worsley' },
          { word: 'Water', note: 'to fill the canal and float the coal' },
          { word: 'A law', note: 'acts of Parliament, 1759 and 1760' },
          { word: 'Capital', note: 'the duke\'s money, and loans' },
          { word: 'A town', note: 'Manchester, to buy the coal' }
        ],
        result: { word: 'Bridgewater Canal', note: 'opened 1761: coal at about half the price' },
        groups: [
          { from: 0, to: 1, label: 'What nature gave' },
          { from: 2, to: 4, label: 'What people built' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Five of the seven factors, one project',
          'Coal, water, a law, capital, a town',
          'Acts of Parliament, 1759 and 1760',
          'The duke borrowed to pay his workmen',
          'Coal in Manchester cut in half',
          'The answer to "coal caused it"',
          'Check the question slide\'s predictions'
        ],
        land: [
          'KC-5.1.I.A says the factors "contributed" together. This slide shows five of the seven in one project. It is the deck\'s answer to "coal caused it."',
          'Coal: the duke\'s mines at Worsley. Water: the canal itself, and drainage water from the mines. Law: the acts of 1759 and 1760 (Bridgewater Canal Company; Archives Hub). Capital: the duke paid for it himself; the Bridgewater Canal Company says the costs were "a great strain on the Duke\'s finances and he had to borrow money to pay his workmen." Town: Manchester, a growing market for coal. Result: Britannica, the cost of coal in Manchester cut in half.',
          'Point back to the question slide\'s predictions: how many did the class have?'
        ],
        ask: 'Take one term away. Is there still a canal?',
        listenFor: 'No: no coal, nothing to carry; no act, no right to build; no money, no workers; no town, no one to sell to.',
        ap: 'KC-5.1.I.A. Causation: factors working together.'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'IV · How the Factors Combined · Explain a Process, Model',
      title: 'Explain a process: the factor, the “which meant,” the “so.”',
      footer: 'Every arrow in a process needs words: which meant, so, and then.',
      template: {
        frame: '{{The factor}}, which meant {{what it made cheaper or possible}}, so {{what that led to}}.',
        exampleLabel: 'From everyday life',
        example: '**A new bus line opened near the school**, which meant **students who lived farther away could get there easily**, so **more students signed up for the after-school club**.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Skill 1.B: explain a process',
          'The factor, which meant, so',
          'Everyday model on purpose: nothing to copy',
          '"Which meant" is the mechanism; "so" the effect',
          'A weak answer names the factor and stops'
        ],
        land: [
          'The CED\'s suggested skill, 1.B: "Explain a historical concept, development, or process." A process is a set of steps, and the explanation is in the connecting words.',
          'The model is from everyday life, on purpose: First & 10 question 01, Checkpoint 1 and the Skill Builder all ask for a factor from this topic, so a modeled history answer would be an answer to copy. The reading\'s section 6 callout uses the same bus-line example.',
          'A weaker version stops at the factor ("Britain had coal and canals"). The "which meant" is the mechanism; the "so" is the effect.'
        ],
        ask: 'What would a weaker answer leave out?',
        listenFor: 'The "which meant" and the "so": it would name the factor and stop.',
        ap: 'Developments and Processes 1.B, inside Causation.'
      }
    },
    {
      phase: 'takeaway', kind: 'equation-remove', eyebrow: 'IV · How the Factors Combined · Explain a Process, Practice',
      kc: 'KC-5.1.I.A', title: 'Take one away.',
      footer: 'Pick one. Say it as a process: the factor, which meant, so.',
      template: {
        terms: [
          { word: 'Farms', without: 'Without better farming: who feeds the people in the towns?' },
          { word: 'Towns', without: 'Without them: where do the workers and buyers come from?' },
          { word: 'Laws', without: 'Without patents: what stops a copier?' },
          { word: 'Cotton', without: 'Without cotton from abroad: what does a cotton mill spin?' },
          { word: 'Capital', without: 'Without it: who pays before the mill earns?' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Practice on the five factors people built',
          'Each "without" is a question, not an answer',
          'Answer one in the slide 13 frame',
          'One factor mattered most? Fine, if defended'
        ],
        land: [
          'Practice on the five factors people built (KC-5.1.I.A). Each "without" is a question, not an answer: students answer one and turn it into the frame from slide 13.',
          'A strong answer, on capital: "Merchants and hosiers had saved money from trade, which meant they could pay for machines and a building before any thread was sold, so Arkwright\'s partners could build at Cromford and wait for the profits."',
          'If a student argues that one factor mattered most, take it: that is a defensible argument, as long as they say what it did and do not drop the others.'
        ],
        ask: 'Which factor would you take away to stop the whole thing? Why?',
        listenFor: 'Any answer that names what the factor made possible and what fails without it.',
        ap: 'KC-5.1.I.A; Developments and Processes 1.B.'
      }
    },
    {
      phase: 'cromford', kind: 'case-file', eyebrow: 'V · The Factory · One Place',
      kc: 'KC-5.1.I.C', title: 'The work moved from homes to one building.',
      template: {
        tag: 'Mill',
        place: 'Cromford, Derbyshire',
        date: '1771',
        rows: [
          { label: 'Power', text: 'A **water wheel**, fed by a brook and a drain from the lead mines' },
          { label: 'Workers', text: 'Came **to the machines**, at the hours the mill set, under an overseer' },
          { label: 'Houses', text: 'The village was too small, so Arkwright **built houses** for workers' },
          { label: 'Who', text: 'Mostly **women and children**, some as young as seven' }
        ],
        proves: 'The factory concentrated production in a single place, around one source of power.'
      },
      notes: {
        minutes: 2,
        keys: [
          'KC-5.1.I.C: production in a single location',
          'Cromford, 1771: Arkwright, Need and Strutt',
          'Water wheel: a brook and a lead-mine drain',
          'Workers came to the machines, at mill hours',
          'Mostly women and children, the youngest about seven',
          'Not "the first factory": the birth of the system',
          'No picture of Cromford on this slide'
        ],
        land: [
          'KC-5.1.I.C: "The development of the factory system concentrated production in a single location."',
          'Cromford Mill, built 1771 by Richard Arkwright with his partners Need and Strutt, in Derbyshire\'s Derwent valley. UNESCO, inscribing the Derwent Valley Mills in 2001: "The Derwent Valley saw the birth of the factory system, when new types of building were erected to house the new technology for spinning cotton developed by Richard Arkwright in the late 18th century."',
          'Power: the Derwent Valley Mills partnership and Cromford Mill histories: the first mill drew water from Bonsall Brook and the Cromford Sough, a tunnel draining the lead mines, whose underground water was warm and said never to freeze.',
          'Workers and houses: Cromford Mills (the Arkwright Society): Arkwright needed more workers than the village had and built houses for them, North Street among them; most early workers were women and children, the youngest about seven. Andrew Ure (1835) praised Arkwright\'s "code of factory discipline" and wrote of "overlookers."',
          'This slide has no picture of Cromford itself. Joseph Wright of Derby painted Arkwright\'s mills by night, if a copy is added later.',
          'Do not call Cromford "the first factory": Lombe\'s silk mill at Derby (patent 1718) and Lewis Paul\'s cotton mills of the 1740s had factory features (Ure; Clark). The UNESCO wording, "the birth of the factory system," is safe.'
        ],
        ask: 'Under putting-out, the cotton went to the workers. What moved at Cromford?',
        listenFor: 'The workers: they came to the machines, in one building, at the mill\'s hours.',
        ap: 'KC-5.1.I.C (concentration).'
      }
    },
    {
      phase: 'steps', kind: 'story-scene', eyebrow: 'V · The Factory · One Job Each',
      kc: 'KC-5.1.I.C', title: 'Each step had its own machine and its own workers.',
      footer: 'One power source turns every machine, through shafts and belts overhead.',
      template: {
        steps: [
          { label: 'Card', text: 'Raw cotton, cleaned, is combed so its fibers lie straight.' },
          { label: 'Draw and rove', text: 'It is drawn out and twisted into a loose rope.' },
          { label: 'Spin', text: 'The rope is spun into thread.' },
          { label: 'Each worker', key: true, text: 'Tends one step, all day: specialization of labor.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'KC-5.1.I.C: specialization of labor',
          'Card, draw, rove, spin',
          'One central power: shafts and belts overhead',
          'Prints of mature mills, 1834, shown clean and calm',
          'Simple jobs: untrained workers, many of them children',
          'Workers\' lives are 5.9: one line'
        ],
        land: [
          'KC-5.1.I.C: the factory system "led to an increasing degree of specialization of labor."',
          'The pictures are real prints, public domain in the Wellcome Collection: "Mule Spinning," drawn by Thomas Allom, engraved by J. W. Lowry, published by Fisher, Son and Co., London, 1834; and "Carding, Drawing, and Roving," a later printing (headed "Economic Botany: The Cotton Manufacture") of the plate made from Thomas Allom\'s drawing, c. 1834, of the carding room at Swainson, Birley & Co.\'s mill near Preston; the Science Museum Group holds the drawing (co8003673), "Original for a plate from Baines\' History of cotton manufacture." Both show mature mills, decades after Cromford, with iron frames and belts; say so. Both were made to show mills to the public, and they show the rooms clean and calm.',
          'Andrew Ure, The Philosophy of Manufactures (1835), names these steps: "the carding, drawing, roving, and spinning processes of a cotton-mill." His definition of a factory: "the combined operation of many orders of work-people, adult and young, in tending with assiduous skill a system of productive machines continuously impelled by a central power." The overhead shafts and belts are the "central power" made visible.',
          'Why it mattered for workers: a small, simple job could be learned quickly, so mills could hire workers with no training, many of them children (Clark: "a constant search for means by which to reduce the skill content of labor"). How workers lived is Topic 5.9; leave it at one line.'
        ],
        ask: 'Find the overhead shafts and belts. What do they tell you about where the power comes from?',
        listenFor: 'From one source, turning every machine in the room at once.',
        ap: 'KC-5.1.I.C (specialization).'
      }
    },
    {
      phase: 'pins', kind: 'source-quote', eyebrow: 'V · The Factory · Why One Job Each',
      kc: 'KC-5.1.I.C', title: 'Ten men, eighteen steps, forty-eight thousand pins.',
      template: {
        quote: 'Those ten persons, therefore, could make among them upwards of forty-eight thousand pins in a day. ... But if they had all wrought separately and independently ... they certainly could not each of them have made twenty, perhaps not one pin in a day',
        attribution: 'Adam Smith, The Wealth of Nations, Book I, chapter 1, 1776',
        notice: 'Smith says he saw this: ten men shared about **eighteen steps**, so each did only one, two or three of them.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Ten men, about eighteen steps',
          'Forty-eight thousand pins a day',
          'Alone: perhaps not twenty each',
          'A hand workshop, not a mill',
          'Smith only for specialization; free trade is 5.7'
        ],
        land: [
          'Smith, The Wealth of Nations (1776), Book I, chapter 1, word for word from the Project Gutenberg text: "One man draws out the wire; another straights it; a third cuts it; a fourth points it; a fifth grinds it at the top for receiving the head ... the important business of making a pin is, in this manner, divided into about eighteen distinct operations ... I have seen a small manufactory of this kind, where ten men only were employed."',
          'Be exact: Smith describes a hand workshop (a "manufactory"), not a water-powered mill. He shows why splitting work makes more goods; the factory added one building and one source of power. Cromford was five years old when he published.',
          'Smith is also the author of the free-trade argument that is Topic 5.7. Here he is used only for specialization.'
        ],
        ask: 'Ten men alone: maybe ten pins a day. Ten men in Smith\'s workshop: forty-eight thousand. What changed?',
        listenFor: 'Not the men: the way the work was divided, each doing one, two or three steps over and over.',
        ap: 'KC-5.1.I.C; a primary source for the process.'
      }
    },
    {
      phase: 'homemill', kind: 'split-mirror', eyebrow: 'V · The Factory · Home and Mill',
      kc: 'KC-5.1.I.C', title: 'What the factory changed.',
      footer: 'Two changes: one place, and one job each.',
      template: {
        left: { name: 'Putting-out, at home' },
        right: { name: 'The factory' },
        rows: [
          { label: 'Where', left: 'Spread across many cottages', right: 'One building' },
          { label: 'Power', left: 'Human muscle, at a spinning wheel and loom', right: 'A water wheel turning every machine' },
          { label: 'Hours', left: 'Set by the family', right: 'Set by the mill' },
          { label: 'The work', left: 'A family spins thread and weaves cloth', right: 'Each worker tends one step of spinning' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Both halves of KC-5.1.I.C',
          'Where, power, hours: concentration',
          'The work: specialization',
          'How work was organized, not which life was better',
          'Checkpoint 2 asks for these two changes'
        ],
        land: [
          'KC-5.1.I.C, both halves: concentration ("Where," "Power," "Hours") and specialization ("The work").',
          'Keep it fair: work at home was hard and poorly paid too, and the merchant set the price. The comparison is about how production was organized, not about which life was better; that question is Topic 5.9.',
          'Checkpoint 2 asks students to explain these two changes with evidence.'
        ],
        ask: 'Which row is the biggest change, and why?',
        listenFor: 'Any row defended with what it changed: for example, "Where," because once everyone was in one building the mill could set the hours and split the work.',
        ap: 'KC-5.1.I.C.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'equation', eyebrow: 'Put It Together · The Whole Topic',
      title: 'Coal, water, and one roof.',
      footer: 'Nature gave the fuel and the water. People built the rest. The factory put the work under one roof.',
      template: {
        terms: [
          { word: 'Coal and iron', note: 'close together; too little wood' },
          { word: 'Water', note: 'rivers, coast, canals' },
          { word: 'Food and towns', note: 'more people, fewer farming' },
          { word: 'Laws, cotton, money', note: 'worth the risk' }
        ],
        result: { word: 'The factory', note: 'one place, one job each' },
        groups: [
          { from: 0, to: 1, label: 'What nature gave' },
          { from: 2, to: 3, label: 'What people built' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Redraw the equation from memory',
          'Four terms, two braces, one result',
          'Nature: coal, iron, water',
          'People: food, towns, laws, cotton, money',
          'The factory: one place, one job each',
          'Myths: fix them, without the opposite mistake'
        ],
        land: [
          'The retelling slide: the equation the whole deck has built. Ask students to close their notes and redraw it, four terms, two braces and the result, then compare with the slide.',
          'Point to the result: the factors made factories pay, and the factory then changed work itself in two ways, which are KC-5.1.I.C\'s two halves.',
          'Correct the three myths here if they come up (they were the Myth and Evidence slide until 2026-11-08, and are in the outline\'s Watch for list). The one that most hurts an essay is the first: a single cause is a weak causation argument.',
          '"Britain had coal, so it industrialized": coal was one of seven causes, and slides 7 to 12 show the rest working with it. China had coal too: Kenneth Pomeranz, The Great Divergence (2000), argues that China\'s main coal lay in the north and northwest, far from its richest region, the Yangzi delta, and that Britain also had the Americas\' land and resources. Teach it as his argument, for a class that is ahead. Do not swing to the opposite mistake, that coal did not matter: nature gave the fuel and the water.',
          '"Cromford was the first factory": Andrew Ure (1835) gave Thomas Lombe\'s Derby silk mill (Lombe\'s patent, 1718; the mill working in the early 1720s) "certain elements of a factory"; Clark lists cotton mills of the 1740s. And in 1785 a court canceled Arkwright\'s 1775 patent, finding its description unclear and hearing claims that others had invented the machines. Do not swing to the opposite mistake, that Cromford was nothing new: UNESCO says the Derwent Valley "saw the birth of the factory system."',
          '"The steam engine started it": Cromford and the early Derwent mills were water-powered (UNESCO). The steam engine began as a pump for flooded mines (Newcomen\'s, 1712, near Dudley); its use to drive machines, and the fossil-fuel revolution, are KC-5.1.I.B, Topic 5.5. Do not swing to the opposite mistake, that steam did not matter: it is the next chapter, and the closing slide\'s Manchester chimneys are steam-era.'
        ],
        ask: 'Redraw it from memory. Which term is the environment, and which did people build?',
        listenFor: 'Coal, iron and water are nature; food and towns, laws, cotton and money are people. The factory is what they produced.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'Put It Together · AP Synthesis',
      title: 'Say it in one sentence.',
      template: {
        frame: 'Britain\'s ___ and ___ made fuel and transport cheap; a shortage of ___ pushed it to coal. Farms, towns, laws, ___ and money made mills pay. The factory put work in one ___, one ___ each.',
        words: ['coal', 'water', 'wood', 'cotton', 'place', 'job'],
        prompt: 'Fill it in from memory. Then say it with one example for each blank.'
      },
      notes: {
        minutes: 1,
        keys: [
          'Objective D, answered in one sentence',
          'Fill it from memory',
          'One example per blank makes it AP'
        ],
        land: [
          'Learning objective D: "Explain how environmental factors contributed to industrialization from 1750 to 1900." The sentence is the whole answer; the examples make it an AP answer.',
          'A strong version: Britain\'s coal and iron lay close together and close to water, which made fuel and metal cheap where they could be shipped, and the Bridgewater Canal halved the price of coal in Manchester; its shortage of wood pushed it to coal and, from 1709, to iron made with coke; better farming, growing towns like Manchester, patents, cotton grown by enslaved people abroad and saved-up capital made mills worth building; and the factory, like Cromford in 1771, gathered production in one place and split it into specialized jobs.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can name one example per blank have the objective.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 10',
      title: 'Now you explain the process.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Explain a factor as a process: which meant, so.', url: '../unit-5/lesson-5-3-industrial-revolution-begins.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-5/lesson-5-3-industrial-revolution-begins.html#modules' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'What the factory changed, with Socrates.', url: '../unit-5/lesson-5-3-industrial-revolution-begins.html#modules' }
        ]
      },
      notes: {
        minutes: 36,
        keys: [
          'All three required today, in order',
          'Skill Builder: "which meant" and "so"',
          'Checkpoint 1: no coach',
          'Checkpoint 2: the factory\'s two changes',
          'Checkpoint 2 unfinished = homework',
          'Early finishers: Evidence Lab'
        ],
        land: [
          'This one slide replaces five (Myth and Evidence, and the Skill Builder, Checkpoint 1, Evidence Lab and Checkpoint 2 launch slides, 2026-11-08). Modules 05, 06 and 10 are all required today, from the schedule (Jeff, 2026-11-08, under his rule of 2026-10-23: 02, 06 and 10 on every topic, plus at least one chosen). Each button opens its module.',
          'The Skill Builder (Module 05) practices the CED\'s suggested skill, 1.B Developments and Processes. It models the frame on an everyday example, a new bus line, and asks students to explain one factor people built as a process, then to explain the factory system the same way. Circulate for the connecting words, "which meant" and "so": ask "Read me your which meant," and listen for a mechanism, not a repeat of the factor. If a student needs the frame, give it aloud (slide 13): "The factor, which meant ___, so ___."',
          'Checkpoint 1 (Module 06), with no coach, is the diagnostic. It assesses Target 1: two environmental factors and two factors people built, each with what it made cheaper or possible, and one way two of them worked together. Give feedback in the room. Ask which factor was hardest to explain as a process; listen for a factor, a "which meant" and a "so."',
          'Checkpoint 2 (Module 10) asks students to describe the putting-out system; explain how Cromford gathered production in one place, how a mill split the work into steps, and why Smith\'s pin workshop shows that splitting work made more goods; and connect the factory to one environmental factor. It assesses Target 2 (KC-5.1.I.C) and declares Causation: draft, Socrates, revise. If it is not finished in class, it is homework.',
          'A strong Checkpoint 2 answer: before, under putting-out, work was spread across many homes; Cromford (1771) brought workers to water-powered machines in one building, at the mill\'s hours; inside, the work was split into steps (carding, drawing, roving, spinning), each with its own machine and workers; Smith\'s ten men made about forty-eight thousand pins a day by splitting the work, where Smith thought ten men working separately, without training, might not make twenty each; so the factory made more goods with less skilled, cheaper labor.',
          'Early finishers: the Evidence Lab (Module 07, required when the deck was built, now the early-finisher option). Its cards are four real objects (de Loutherbourg\'s Coalbrookdale by Night, 1801; the cotton plant engraved after Merian, 1807; Allom\'s mule-spinning room, 1834; the power-loom weaving shed, 1835) and two verified excerpts (Smith\'s pin workshop, 1776; the patent clause of the Statute of Monopolies, 1624). Students choose two cards and say what kind of source each is, what it shows about a cause or about the factory system, and what it cannot tell them: the mill engravings were made to show the industry at its best, so they leave out noise, heat and danger. Or the Primary Source (Smith\'s pin workshop and Ure\'s definition of a factory) as an extension.'
        ],
        ask: 'What is the cause in your answer, and what is the effect?',
        listenFor: 'Checkpoint 2: the factory system (one place, one job each) as the cause; more goods, made faster by workers with less training, as the effect.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'Nature gave the fuel and the water. People built the rest. The factory put the work under one roof.',
      subtitle: 'Manchester from Kersal Moor, painted in 1852, eighty years after Cromford. Next, Topic 5.4: the new way of making things did not stay in Britain.',
      notes: {
        minutes: 2,
        keys: [
          'Wyld, 1852: a romantic view; say so',
          'Land the spine',
          'Hand-off to 5.4: industry spreads beyond Britain',
          'Chimneys are steam-era (5.5); Cromford ran on water'
        ],
        land: [
          'The picture is a real painting: William Wyld, Manchester from Kersal Moor, watercolor, 1852, Royal Collection (RCIN 920223), public domain. Queen Victoria commissioned it after visiting Manchester in October 1851. It is a romantic view: the smoking chimneys sit in golden light, far from the crowded streets the queen described in her journal. Say so.',
          'Land the spine, then the hand-off to 5.4: the new way of making things did not stay in Britain. It spread to other parts of Europe, the United States, Russia and Japan, while the share of the world\'s manufacturing made in the Middle East and Asia fell.',
          'The chimneys are steam-era (Topic 5.5): Manchester\'s mills ran on steam by then. Cromford ran on water.'
        ],
        ask: 'Say the topic in one sentence, with one example.',
        listenFor: 'The spine with a real case: coal near water, cheap through the Bridgewater Canal; or Cromford\'s workers brought to one building and given one job each.'
      }
    }
  ]
};
