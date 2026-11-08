/*
 * Topic 5.5 canonical Teaching OS source.
 * CED: Fall 2026 p. 104 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Causation. Suggested skill: 1.B Developments and Processes (explain a
 * historical concept, development, or process). Learning objective F: explain
 * how technology shaped economic production over time. Key Concepts:
 * KC-5.1.I.B (machines, including steam engines and the internal combustion
 * engine, let people use the energy stored in coal and oil; the fossil fuels
 * revolution greatly increased the energy available), KC-5.1.I.E (the second
 * industrial revolution: new methods in steel, chemicals, electricity and
 * precision machinery after 1850), KC-5.1.IV (railroads, steamships and the
 * telegraph made exploration, development and communication possible in
 * interior regions, which led to more trade and migration). No illustrative
 * examples. Sample activity (p. 97, optional): rank five technologies, used on
 * slide 17 (section VI) and in the BeInTheRoom scenario.
 * Story: docs/TOPIC-5-5-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "More Power,
 * Longer Reach" is written from the same story, and this deck retells it.
 * Spine: machines unlocked the energy stored in coal and then oil. That energy,
 * with new ways of making steel, chemicals, electricity and precise machines,
 * let the world make far more than ever before. Railroads, steamships and the
 * telegraph carried goods, people and news into the interiors of continents,
 * and trade and migration grew.
 * Wall version: More power. New methods. Longer reach.
 * Retelling slide: the cause chain (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 06 Checkpoint 1 and
 * 10 Checkpoint 2 (Jeff's rule of 2026-10-23: 02, 06 and 10 on every topic,
 * plus at least one chosen; 05 practises the CED's suggested skill, 1.B). The
 * topic is not on the schedule yet, so the architecture test cannot compare
 * the Work Time slide with it: keep outline.required and the launch pad equal
 * by hand, and match the schedule when the class dates are set. The deck
 * launched 07 Evidence Lab as optional; it is now the early-finisher option.
 *
 * Outline format, 2026-11-08 (Jeff: the 4.4 outline is the standard for every
 * topic; slides that only point to a module are cut; the lecture tells the
 * story). The briefing opens on the outline below, a road map before the
 * First & 10 shows students the same six section headers, every story slide's
 * eyebrow names its section, minute counts are off the projected slides, the
 * myths moved to the outline's Watch for list and the retelling slide's notes,
 * and one Work Time slide replaced Myth and Evidence and the four module launch
 * slides (Skill Builder, Checkpoint 1, Evidence Lab, Checkpoint 2). No story
 * slide changed. 24 slides to 21. The deck had no Sharpen slide: Explain a
 * Process (slide 11) and the Bessemer practice (slide 13) model 1.B inside the
 * story, and Rank the Five (slide 17) is the CED's sample activity, so all
 * three stay. The topic has one learning objective (F): the synthesis slide
 * (close-retell, slide 19) carries its band and answers it; it stays, after
 * the retelling slide and before Work Time. All three Key Concepts keep their
 * bands on the story slides.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.5',
    minutes: 90,
    title: 'Technology of the Industrial Age',
    subtitle: 'Machines unlocked the energy stored in coal and then oil. That energy, with new ways of making steel, chemicals, electricity and precise machines, let the world make far more than ever before. Railroads, steamships and the telegraph carried goods, people and news into the interiors of continents, and trade and migration grew.',
    essentialQuestion: 'How did new technology change how much the world could make, and how far its goods and people could go?',
    apFocus: 'Causation, with Developments and Processes 1.B',
    endTarget: 'Students can explain, as a chain of causes, how technology shaped economic production from 1750 to 1900: steam engines, and later the internal combustion engine, let people use the energy stored in coal and oil, which greatly increased the energy available; new methods for making steel, chemicals, electricity and precision machinery after 1850 let factories make more goods and new kinds of goods; and railroads, steamships and the telegraph reached the interiors of continents, which led to more trade and more migration.'
  },

  priorities: {
    must: [
      'Teach the chain, not a list: each link made the next possible (the retelling slide, 18).',
      'Teach all of KC-5.1.I.B: steam engines AND the internal combustion engine; coal AND oil; and the amount of energy (slides 7 to 10).',
      'Teach all four methods of KC-5.1.I.E: steel, chemicals, electricity and precision machinery (slide 12).',
      'Teach both ends of KC-5.1.IV: the reach into interior regions (slides 14 and 15) and the two effects, trade and migration (slide 16).',
      'Model 1.B: explain a process step by step (slides 11 and 13).'
    ],
    should: [
      'Say when each effect came. Steam took decades to spread, electricity was under 5 percent of US factory power in 1899, and the US had about 8,000 cars in 1900.',
      'Use the CED\'s own sample activity: rank the five technologies and defend the number one (slide 17; the full version is the BeInTheRoom).',
      'Correct three myths when they come up (the outline\'s Watch for list; the retelling slide\'s notes): "Watt invented the steam engine," "one invention changed everything," and "by 1900 the world ran on electricity and cars."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "More Power, Longer Reach."',
      'Send students who finish Work Time early to the Evidence Lab (Module 07), or to the Primary Source (Jevons on coal, 1865) as an extension.',
      'For a class that is ahead: why did electricity take so long to change factories? (slide 12 notes).'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes, the First & 10 "More Power, Longer Reach" or
  // docs/TOPIC-5-5-STORY-DRAFT.md; nothing is new. Required modules follow
  // Jeff's rule of 2026-10-23 (the topic is not on the schedule yet).
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'Before: energy in 1750', kc: 'KC-5.1.I.B', points: [
        'Energy from what grows, blows and flows',
        'Muscles: a horse gets tired',
        'Wood: a forest takes decades to grow back',
        'Wind: no wind, no work; water: only by a strong stream',
        'Wood and other things that grow still the largest source until about 1900',
        'Britain the exception: coal for heat, about half of England\'s energy by 1700'
      ] },
      { label: 'II', title: 'More power', kc: 'KC-5.1.I.B', groups: [
        { name: 'Steam and coal', points: [
          'First useful steam engines were pumps: Newcomen, 1712, a coal mine',
          'Watt, 1765: a separate chamber; less than a third of the coal',
          '1780s, Boulton and Watt: engines turn wheels; mills move into towns',
          'Engines drained deeper mines; more coal fed more engines',
          'Britain\'s coal: about 65 million tons (1854), about 225 million (1900)',
          'By about 1900, coal about half the world\'s energy, about equal to biomass',
          'Jevons, 1865: "With coal almost any feat is possible or easy"'
        ] },
        { name: 'Oil and a new engine', points: [
          'Drake strikes oil at Titusville, 1859; most becomes kerosene for lamps',
          'Internal combustion: the fuel burns inside the engine',
          'Otto, 1876; Benz\'s car, 1886',
          'US: only about 8,000 cars in 1900; big effects after 1900'
        ] }
      ] },
      { label: 'III', title: 'New methods', kc: 'KC-5.1.I.E', points: [
        'Second industrial revolution, after 1850: four new methods',
        'Steel: Bessemer, 1856, air through melted iron; US 69,000 tons (1870), 10 million (1900)',
        'Chemicals: Perkin\'s mauve from coal tar, 1856; BASF factory indigo, 1897; Germany most of the world\'s dyes by 1914',
        'Electricity: Pearl Street, 1882; under 5 percent of US factory power in 1899',
        'Precision machinery: machine tools, interchangeable parts; standard threads 1841, 1864',
        'Coal ran the steel furnaces; coal tar gave the dyes'
      ], skill: 'You model 1.B Developments and Processes out loud with the frame "Before, ___. Then ___ ___, which made it possible to ___. As a result, ___" (the problem, the new technology, what it made possible, what followed) on an everyday example, phone maps (slide 11). Then the room explains the Bessemer process step by step (slide 13). Students practice it on two technologies in the Skill Builder.' },
      { label: 'IV', title: 'Longer reach', kc: 'KC-5.1.IV', points: [
        'Before: heavy goods cheap only by water; interiors hard to reach',
        'Railroads: Liverpool and Manchester 1830; India 1853; across the US 1869; Trans-Siberian 1891 to 1904',
        'Russia: 27 km of railway (1840), over 53,000 km (1900)',
        'Steamships: about 53 days under sail from Norway; about 12 by steam (1860s)',
        'Suez Canal, 1869: mostly steamships; steamboats up the Niger and Benue, 1854',
        'Telegraph: Morse, 1844; across the Atlantic, 1866; Bombay, 1870; news in minutes'
      ] },
      { label: 'V', title: 'More trade, more migration', kc: 'KC-5.1.IV', points: [
        'Wheat price gap, Liverpool and Chicago: 57.6 percent (1870), 15.6 percent (1913)',
        'Wheat from the middle of North America fed workers in Britain',
        'About 55 million Europeans to the Americas and Australia, 1850 to 1914',
        'Over 29 million Indians, over 19 million Chinese to Southeast Asia and the Indian Ocean rim, 1846 to 1940',
        'Steam lowered the cost of travel; why people moved is Unit 6'
      ] },
      { label: 'VI', title: 'Rank the five', points: [
        'The CED\'s sample activity, quick version: steam engine, railroad, combustion engine, steamship, telegraph',
        'Rank 1 to 5 by 1900; defend number one with evidence',
        'No single right answer: the evidence is what is graded',
        'Combustion engine first? Ask: by 1900? (8,000 US cars)',
        'Check the predictions from the question slide'
      ] }
    ],
    wrap: { title: 'Put it together', columns: ['The cause', 'Which made it possible to', 'So'], rows: [
      { label: 'More power', cells: ['Steam engines, later internal combustion engines', 'Use the energy stored in coal and oil', 'Far more energy: coal about half the world\'s by about 1900'] },
      { label: 'New methods', cells: ['Steel, chemicals, electricity, precision machinery', 'Make far more goods, and new kinds of goods', 'Rails, bridges, ships; dyes; light and motors; interchangeable parts'] },
      { label: 'Longer reach', cells: ['Railroads, steamships, the telegraph', 'Reach the interiors of continents', 'Goods, people and news moved farther, faster, cheaper'] },
      { label: 'The effects', cells: ['Cheaper, faster transport and fast news', 'Join distant markets; make long journeys cheaper', 'More trade (the wheat gap closed); more migration (tens of millions)'] }
    ] },
    vocabulary: [
      { term: 'Fossil Fuel', def: 'Coal or oil: the remains of plants and tiny sea creatures, buried for millions of years, with energy stored inside them.' },
      { term: 'Steam Engine', def: 'A machine that burns coal to boil water into steam, and the steam moves its parts; the first useful ones were pumps.' },
      { term: 'Internal Combustion Engine', def: 'An engine that burns its fuel inside the engine itself, instead of boiling water in a separate boiler.' },
      { term: 'Second Industrial Revolution', def: 'New methods in making steel, chemicals, electricity and precision machinery, after 1850.' },
      { term: 'Steel', def: 'Iron with a small, carefully measured amount of carbon: stronger and tougher than ordinary iron.' },
      { term: 'Interchangeable Parts', def: 'Metal parts cut so exactly that one part fits any copy of the same machine.' },
      { term: 'Telegraph', def: 'A machine that sends messages as pulses of electricity along a wire.' },
      { term: 'Migration', def: 'People moving to live in a new place.' }
    ],
    watch: [
      { myth: '"Watt invented the steam engine."', fix: 'Newcomen\'s engine pumped mines from 1712; Watt made it use less than a third of the coal and, in the 1780s, turn wheels. But do not swing to "Watt changed nothing": turning wheels freed mills from rivers.' },
      { myth: '"One invention changed everything."', fix: 'Each needed the others: railroads needed steam, coal, then steel; steam and steel built the ships too. But do not swing to "none mattered more than another": Rank the Five asks students to defend a number one with evidence.' },
      { myth: '"By 1900 the world ran on electricity and cars."', fix: 'Motors gave under 5 percent of US factory power in 1899; the US had about 8,000 cars in 1900. But do not swing to "they do not belong in this topic": the causes came before 1900, the big effects after.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.3 and 5.4. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the 1874 railroad print.', students: 'Predict which machine mattered most.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the six sections of today\'s story before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "More Power, Longer Reach" in class.', students: 'Build the chain as they read.', slide: 5 },
    { id: 'before', label: 'Energy in 1750', range: '18-20', minutes: 2, teacher: 'Muscles, wood, wind, water, and their limits.', students: 'Name each limit.', slide: 6 },
    { id: 'steam', label: 'The Steam Engine', range: '20-23', minutes: 3, teacher: 'A pump, then an engine that turns wheels.', students: 'Say what Watt changed.', slide: 7 },
    { id: 'fossil', label: 'The Fossil Fuels Revolution', range: '23-25', minutes: 2, teacher: 'How much more energy: machines plus fossil fuels.', students: 'Read the numbers.', slide: 8 },
    { id: 'jevons', label: 'A Voice from 1865', range: '25-26', minutes: 1, teacher: 'Jevons on coal.', students: 'Say what he claims.', slide: 9 },
    { id: 'oil', label: 'Oil and a New Engine', range: '26-28', minutes: 2, teacher: 'Drake, Otto, Benz, and 8,000 cars.', students: 'Say when its effects came.', slide: 10 },
    { id: 'model', label: 'Explain a Process', range: '28-30', minutes: 2, teacher: 'Model 1.B on an everyday case.', students: 'Say the four steps aloud.', slide: 11 },
    { id: 'methods', label: 'The Second Industrial Revolution', range: '30-33', minutes: 3, teacher: 'Steel, chemicals, electricity, precision machinery.', students: 'Match each to what it made.', slide: 12 },
    { id: 'practice', label: 'Explain the Bessemer Process', range: '33-35', minutes: 2, teacher: 'Students fill the four steps.', students: 'Explain it step by step.', slide: 13 },
    { id: 'rail', label: 'Railroads Reach the Interior', range: '35-37', minutes: 2, teacher: 'From 1830 to 1904.', students: 'Say where rail reached.', slide: 14 },
    { id: 'ships', label: 'Steamships and the Telegraph', range: '37-39', minutes: 2, teacher: 'Goods and people by sea; news by wire.', students: 'Say what each made possible.', slide: 15 },
    { id: 'effects', label: 'More Trade, More Migration', range: '39-42', minutes: 3, teacher: 'The two effects, with numbers.', students: 'Trace a cause to an effect.', slide: 16 },
    { id: 'rank', label: 'Rank the Five', range: '42-45', minutes: 3, teacher: 'The CED\'s ranking, quick version.', students: 'Rank and defend number one.', slide: 17 },
    { id: 'retell', label: 'More Power, Longer Reach', range: '45-49', minutes: 4, teacher: 'Students redraw the chain; correct the three myths here if they come up.', students: 'Retell the whole topic.', slide: 18 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '49-50', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 19 },
    { id: 'worktime', label: 'Work Time', range: '50-80', minutes: 30, teacher: 'Modules 05, 06 and 10, in that order: the Skill Builder on two technologies, Checkpoint 1 with no coach, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, Checkpoint 2.', slide: 20 },
    { id: 'close', label: 'Landing Sentence', range: '80-82', minutes: 2, teacher: 'Land the answer and hand off to 5.6.', students: 'Say the topic in one sentence.', slide: 21 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.5', url: '../unit-5/lesson-5-5-technology-of-industrialization.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-5-technology-of-industrialization-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-5-technology-of-industrialization.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-5-slide',
    title: 'Topic 5.5 Presentation',
    file: 'present-topic-5-5.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'More power. New methods. Longer reach.',
      subtitle: 'Causation, with Developments and Processes 1.B. How did new technology change how much the world could make, and how far its goods and people could go?',
      notes: {
        minutes: 2,
        keys: [
          'Spine: more power, new methods, longer reach',
          'One objective, F: technology shaped production over time',
          'Three Key Concepts: energy, new methods, reach',
          'Every machine is a link: say what it made possible',
          'Colonial extraction and migrants\' lives belong to Unit 6',
          'Three myths: outline Watch for list'
        ],
        land: [
          'CED p. 104. One learning objective, F (Technology and Innovation): explain how technology shaped economic production over time. The reasoning process is Causation (p. 95); the suggested skill is 1.B, explain a historical concept, development, or process.',
          'Key Concepts: KC-5.1.I.B (the development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil; the fossil fuels revolution greatly increased the energy available to human societies); KC-5.1.I.E (the "second industrial revolution" led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century); KC-5.1.IV (railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration).',
          'The CED prints no illustrative examples for 5.5, so every example here was chosen in the build and checked in the claim ledger. Its sample activity (p. 97) has groups rank five technologies, the steam engine, the railroad, the internal combustion engine, the steamship and the telegraph, as the staff of Scientific American writing "Five Technologies that Changed the World." Slide 17 (section VI) is the quick version; the BeInTheRoom scenario is the full one.',
          'Owns: KC-5.1.I.B, KC-5.1.I.E, KC-5.1.IV, and the steam engine itself, which 5.3 handed on ("Steam power, which began as a pump for flooded coal mines, is Topic 5.5"). Bridge only: why Britain industrialized and the factory (5.3); the spread (5.4); states building industry (5.6, so the Trans-Siberian is a railroad here, not a policy); big business and finance (5.7); workers and reformers (5.8); cities, classes and coal smoke (5.9); empire, and migration\'s causes and migrants\' lives (Unit 6).',
          'The old 5.5 taught rubber, guano and coercive labor in colonized regions as half the topic. That is Unit 6\'s, and KC-5.1.I.B is about energy, not extraction. If a student raises it, say so and park it.',
          'Three myths, in the outline\'s Watch for list and corrected on the retelling slide (18) if they come up: "Watt invented the steam engine"; "one invention changed everything"; "by 1900 the world ran on electricity and cars."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Machines let people use the energy in coal and oil; that energy and new methods made far more goods; railroads, steamships and the telegraph carried goods, people and news into the interiors of continents, so trade and migration grew.',
        avoid: 'Avoid a parade of inventors and dates. The CED asks how technology shaped production: every machine on a slide is a link in the chain, and students should say what it made possible. And avoid "the steam engine started the Industrial Revolution": Cromford ran on water (5.3).'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.3', text: 'What turned the machines at Arkwright\'s mill at Cromford?' },
          { label: 'Topic 5.3', text: 'In 1700, what did people in England mostly use coal for?' },
          { label: 'Topic 5.4', text: 'Name two places the factory methods spread to.' }
        ],
        turn: 'Factories needed **power**, and most coal was still burned for heat. What happened when machines learned to turn coal into **motion**? **How far could the world reach then?**'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          'Recall: water wheel, coal for heat, where factories spread',
          'Bridge: machines turn coal into motion',
          'Prompt 1 returns on slide 7'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: a water wheel (fed by a brook and a mine drain, 5.3); heat, fires for warmth and cooking; any two of other parts of Europe (Belgium, the German states), the United States, Russia, Japan.',
          'The bridge is 5.4\'s hand-off line: factories needed coal, and steam engines turned it into power on a scale nobody had seen. Prompt 1 returns on slide 7: a mill no longer had to sit by a river.'
        ],
        ask: 'If a mill runs on a river, where can it be built? If it runs on coal?',
        listenFor: 'Only beside a fast river; anywhere coal can be brought. That is today.',
        ap: 'Retrieval plus bridge: 5.3 explained why the factory began in Britain, 5.4 where it went; 5.5 is the machines themselves.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'How did new machines change how much the world could make?',
      subtitle: 'And how far could its goods and people go?',
      notes: {
        minutes: 1,
        keys: [
          'Real print: Currier and Ives, 1874',
          'Freight cars: "From Ocean to Ocean," "U.S. Mail"',
          'Goods, people and news across a continent',
          'Made to sell: idealized, not a photograph',
          'Predict which machine mattered most; check on slide 17'
        ],
        land: [
          'The picture is a real print: Currier and Ives, American Railroad Scene: Lightning Express Trains Leaving the Junction, color lithograph, New York, 1874, drawn by Parsons and Atwater (Library of Congress, no known restrictions). Margins trimmed.',
          'Look at the freight cars on the right: "From Ocean to Ocean," "Through to the Pacific," and a car marked "U.S. Mail." The print sells the railroad as goods, people and news moving across a continent: the topic in one picture.',
          'A print made to sell, not a photograph: Currier and Ives sold cheap, cheerful prints of American life. The scene is idealized.'
        ],
        ask: 'Predict: which machine in this picture changed the world most? Why?',
        listenFor: 'The locomotive; the rails; the mail car. Write the guesses down and check them on slide 17.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'How did new technology change how much the world could make, and how far its goods and people could go?',
        stops: [
          { label: 'I', text: 'Before: energy in 1750' },
          { label: 'II', text: 'More power' },
          { label: 'III', text: 'New methods' },
          { label: 'IV', text: 'Longer reach' },
          { label: 'V', text: 'More trade, more migration' },
          { label: 'VI', text: 'Rank the five' },
          { label: '✓', text: 'Put it together: more power, new methods, longer reach', key: true }
        ],
        thenLabel: 'Then',
        then: 'Skill Builder · Checkpoint 1 · Checkpoint 2'
      },
      notes: {
        minutes: 1,
        keys: [
          'The whole day before the reading',
          'Six sections, then put it together',
          'Same headers as your outline',
          'Each story slide names its section'
        ],
        land: [
          'Read the six headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to VI), so the class can see where it is all period.',
          'The headers are the chain in order: section I is the before; II is KC-5.1.I.B (machines and fossil fuels); III is KC-5.1.I.E (the four new methods); IV and V are KC-5.1.IV (the reach, then its two effects); VI is the CED\'s sample activity, weighing the five technologies.'
        ],
        ask: 'Which machine do you expect to matter most, and why?',
        listenFor: 'Any reasoned guess; return to it at section VI, Rank the Five.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read, and build the chain.',
      subtitle: 'Each link is a cause that made the next link possible. Watch for "so," "let" and "made it possible."',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-5-technology-of-industrialization-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Write links, not lists',
          'Q1: Watt step by step; Q2: one new method',
          'Q3: reach to trade or migration',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "More Power, Longer Reach" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who write links, not lists: "the steam engine let mills move away from rivers," not "the steam engine, 1769."',
          'Question 01 explains Watt\'s engine step by step; question 02 explains one method of the second industrial revolution; question 03 traces railroads, steamships or the telegraph to trade or migration. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which link in the chain surprised you most?',
        listenFor: 'That Newcomen\'s engine came before Watt; that dyes came from coal; that there were only 8,000 cars in the US in 1900; that tens of millions of people moved.'
      }
    },
    {
      phase: 'before', kind: 'story-steps', eyebrow: 'I · Before · About 1750',
      kc: 'KC-5.1.I.B', title: 'Energy came from things that grow, blow and flow.',
      footer: 'Until about 1900, wood and other things that grow were still the world\'s largest source of energy.',
      template: {
        steps: [
          { label: 'Muscles', text: 'People and animals, fed by crops. **A horse gets tired.**' },
          { label: 'Wood', text: 'Fire for heat and cooking. **A forest takes decades to grow back.**' },
          { label: 'Wind', text: 'Sails and windmills. **No wind, no work.**' },
          { label: 'Water', text: 'Water wheels, like Cromford\'s. **Only where a stream flows strongly.**' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'The before: every energy source had a limit',
          '1850: biomass about 93 percent of world energy',
          '1900: still about half; coal passed it after',
          'Britain the exception: coal for heat',
          'The limit was the energy, not the engineering'
        ],
        land: [
          'KC-5.1.I.B begins here: the fossil fuels revolution "greatly increased the energy available," so students need the before. Every source of energy in 1750 had a limit you could see.',
          'Our World in Data\'s figures (from Vaclav Smil): in 1850, wood, crop waste and other traditional biomass gave about 93 percent of the world\'s energy; in 1900 still about half (6,111 terawatt-hours against coal\'s 5,728); coal passed it only between 1900 and 1910. Britain was the exception: it already burned a lot of coal for heat (5.3: about half of England\'s energy by 1700).',
          'The point is not that people were poor at engineering. Water wheels and windmills were advanced machines. The limit was the energy itself.'
        ],
        ask: 'Which of these four limits would a factory owner hate most?',
        listenFor: 'Water: a mill has to sit by a fast river, and the river runs low in a dry summer. Slide 7 is the way out.',
        ap: 'KC-5.1.I.B (the before).'
      }
    },
    {
      phase: 'steam', kind: 'story-scene', eyebrow: 'II · More Power · The Steam Engine',
      kc: 'KC-5.1.I.B', title: 'A pump, then an engine that turns wheels.',
      footer: 'A mill no longer had to sit by a river. It could run on coal.',
      template: {
        steps: [
          { label: '1712', text: 'Newcomen\'s engine **pumps water** out of a coal mine. It burns a lot of coal.' },
          { label: '1765', text: 'Watt cools the steam in a **separate chamber**, so the cylinder stays hot.' },
          { label: 'Result', text: 'Watt\'s engines use **less than a third** of the coal.' },
          { label: '1780s', key: true, text: 'Boulton and Watt engines **turn wheels**: mills move into towns.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'First useful steam engines were pumps',
          'Newcomen, 1712: pumps a coal mine, wastes coal',
          'Watt, 1765: separate condenser, patented 1769',
          'Less than a third of the coal',
          'Key step: 1780s engines turn wheels',
          'Mills no longer tied to rivers',
          'Real engraving, 1740s: find boiler, cylinder, beam'
        ],
        land: [
          'KC-5.1.I.B: "the development of machines, including steam engines." This slide is the first machine, and the key step is the last one: rotary motion.',
          'Newcomen: the Black Country Living Museum dates his engine to 1712, near Dudley Castle (at Coneygree, Tipton), "used in the Black Country to pump water out of ever deeper coal mines." Its cylinder was cooled with a spray of water on every stroke and heated again with steam, which wasted fuel. Do not say Newcomen\'s was the first steam device of any kind: Savery\'s pump of 1698 came before it; say "the first useful steam engines were pumps."',
          'Watt: an instrument maker at the University of Glasgow, repairing a model Newcomen engine, found the separate condenser in May 1765 and patented it in January 1769 (Britannica; the 1911 Britannica). The Science Museum Group: "Specific fuel consumption was reduced to less than one third that of a Newcomen type engine." (A popular "one quarter" is not used.)',
          'Rotary motion: Matthew Boulton "wished to apply the steam engine to driving mill machinery" (Science Museum Group); Watt\'s patent of 25 October 1781 included the sun and planet gear (The National Archives). An early cotton mill driven directly by a Boulton and Watt engine was at Papplewick, near Nottingham, in 1785 (sources differ on which was first, so say "early"). In Manchester, Peter Drinkwater\'s Piccadilly Mill ran a Boulton and Watt engine from 1790.',
          'The picture is a real engraving: "Engineering: a Newcomen steam-engine," engraving, 1740s (Wellcome Collection, public domain mark). Find the fire under the boiler (bottom), the cylinder above it, the rocking beam, and the pump rods going down into the mine on the left.'
        ],
        ask: 'Why did turning a wheel matter more than pumping water?',
        listenFor: 'A wheel can drive machines: spinning machines, looms, hammers. So any mill can use steam, not only a mine.',
        ap: 'KC-5.1.I.B (steam engines); 1.B, a process explained step by step.'
      }
    },
    {
      phase: 'fossil', kind: 'equation', eyebrow: 'II · More Power · The Fossil Fuels Revolution',
      kc: 'KC-5.1.I.B', title: 'Machines plus fossil fuels: far more energy.',
      footer: 'Each made the other grow: engines drained deeper mines, and more coal fed more engines.',
      template: {
        terms: [
          { word: 'Machines', note: 'steam engines; later, internal combustion engines' },
          { word: 'Fossil fuels', note: 'Britain\'s coal: about 65 million tons (1854), about 225 million (1900)' }
        ],
        result: { word: 'Far more energy', note: 'by about 1900, coal gave about half of all the energy used in the world' }
      },
      notes: {
        minutes: 2,
        keys: [
          'This slide is the "greatly increased"',
          'The loop: engines drained mines, coal fed engines',
          'Britain: about 65 (1854) to 225 million tons (1900)',
          'By 1900, coal about half the world\'s energy',
          'Coal about equal to biomass, not replacing it',
          'Coal took no land to grow this year'
        ],
        land: [
          'KC-5.1.I.B: "The fossil fuels revolution greatly increased the energy available to human societies." This slide is the "greatly increased."',
          'The loop: steam engines drained coal mines, so miners could dig deeper; more coal fed more engines. Each made the other grow.',
          'Britain\'s coal: NBER Macrohistory Database, in millions of long tons: 64.7 (1854, the first year of the series), 84.0 (1860), 110.4 (1870), 147.0 (1880), 181.6 (1890), 225.2 (1900). Say "tons"; the unit is the long ton, 2,240 pounds.',
          'The world: Our World in Data, "By the turn of the 20th century, around half of the world\'s energy came from coal; and half still came from biomass." Its figures for 1900 give coal about 47 percent and biomass about 50 percent; coal passed biomass between 1900 and 1910. So do not say coal "replaced" wood by 1900: they were about equal.',
          'Why it matters for production: a horse or a worker eats food grown on land; coal is energy that took no land to grow this year. E. A. Wrigley calls this the escape from the "organic economy."'
        ],
        ask: 'Coal and oil were stored underground for millions of years. Why does that matter for how much energy people could use?',
        listenFor: 'You do not have to wait for it to grow back, the way you wait for a forest. So you can use far more, far faster. (And as mines went deeper, it would cost more: Jevons, slide 9.)',
        ap: 'KC-5.1.I.B (the amount of energy).'
      }
    },
    {
      phase: 'jevons', kind: 'source-quote', eyebrow: 'II · More Power · A Voice from 1865',
      kc: 'KC-5.1.I.B', title: 'What did coal mean to the people who used it?',
      footer: 'Jevons, a British economist, feared that Britain\'s cheap coal would not last.',
      template: {
        quote: 'With coal almost any feat is possible or easy; without it we are thrown back into the laborious poverty of early times.',
        attribution: { author: 'W. Stanley Jevons', work: 'The Coal Question', year: '1865' },
        notice: 'Why would an economist who feared the end of cheap coal write this sentence?'
      },
      notes: {
        minutes: 1,
        keys: [
          'Jevons, British economist, The Coal Question, 1865',
          'Feared cheap coal would not last, not run out',
          '"Laborious poverty": the before on slide 6',
          'Sourcing: a worried economist, writing to persuade'
        ],
        land: [
          'KC-5.1.I.B in a source from the time. William Stanley Jevons was a British economist; The Coal Question (1865) warned that Britain\'s cheap coal would not last forever. Not that coal would run out: his preface calls the mines "literally inexhaustible" and warns only that "we may some day have to pay dear for fuel." This line is from the opening of his introduction, word for word from the second edition (1866), as reprinted by the Library of Economics and Liberty; the first edition prints the same sentence.',
          'Read the line twice. "Laborious poverty of early times" is the before on slide 6: life on muscles, wood, wind and water.',
          'The Primary Source module has a longer passage, with his point that coal yields dyes with "beautiful colours" (slide 12) and that steam and iron depend on coal.'
        ],
        ask: 'What does Jevons think would happen without coal?',
        listenFor: 'Britain would go back to hard work and poverty: coal is what makes the new way of life possible.',
        ap: 'KC-5.1.I.B; sourcing: a worried economist, writing to persuade.'
      }
    },
    {
      phase: 'oil', kind: 'story-scene', eyebrow: 'II · More Power · Oil and a New Engine',
      kc: 'KC-5.1.I.B', title: 'Then oil, and an engine that burns fuel inside itself.',
      footer: 'The internal combustion engine\'s big changes, to cars, trucks, tractors and airplanes, came after 1900.',
      template: {
        steps: [
          { label: '1859', text: 'Drake strikes **oil** at Titusville, Pennsylvania.' },
          { label: 'At first', text: 'Most oil becomes **kerosene**, a fuel for lamps.' },
          { label: '1876, 1886', text: 'Otto\'s gas engine; Benz\'s **car**, burning a fuel made from oil.' },
          { label: '1900', key: true, text: 'The United States has only about **8,000 cars**.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'The second machine and the second fuel',
          'Drake, Titusville, 1859: oil becomes lamp kerosene',
          'Internal combustion: fuel burns inside the cylinder',
          'Otto, 1876; Benz\'s patent, 1886',
          'About 8,000 US cars in 1900',
          'Cause before 1900, big effects after',
          'Real photo: steam helping to drill for oil'
        ],
        land: [
          'KC-5.1.I.B names the second machine and the second fuel: "the internal combustion engine" and "oil." This slide is both, and when their effects came.',
          'Drake: the American Oil and Gas Historical Society dates the strike at Titusville to August 1859 (sources give the 27th or 28th); refiners turned the oil into kerosene, "the popular lamp fuel." Oil was a lamp fuel for the rest of the century.',
          'The engine: Nikolaus Otto\'s four-stroke engine, Deutz, 1876, patented 1877 (Deutz AG history); Carl Benz\'s patent application of 29 January 1886, DRP 37435, a "vehicle powered by a gas engine" (Mercedes-Benz), running on a light petroleum spirit. Internal combustion means the fuel burns inside the cylinder; a steam engine burns its fuel outside, under a boiler.',
          '8,000: the Federal Highway Administration and Historical Statistics of the United States both give about 8,000 automobiles for 1900, the first year of their tables (no state required registration until New York in 1901, so the figure is an estimate). So the internal combustion engine is in this topic because of where it led, not because it had changed production by 1900.',
          'The picture is a real photograph: an oil rig at Titusville, about 1900, by the oil-region photographer Mather (Library of Congress, no known restrictions). The Library\'s print is labeled hand-colored; the copy shown is black and white. The boiler on the right raised steam for an engine beside the derrick (see the puff of steam), which drove the drilling: steam power, burning fuel, helping to get oil.'
        ],
        ask: 'If there were only 8,000 cars in 1900, why does the College Board put this engine in a topic that ends in 1900?',
        listenFor: 'Because it was developed then, and the fuel, oil, was being drilled: the cause came before 1900, the big effects after. Causes and effects do not always happen at once.',
        ap: 'KC-5.1.I.B (the internal combustion engine; oil).'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'III · New Methods · Explain a Process, Model',
      title: 'Explain a process: the problem, the new thing, what it made possible, what followed.',
      footer: 'A process has steps. Say each one, in order.',
      template: {
        frame: 'Before, {{the problem}}. Then {{the new technology}} {{what it did}}, which made it possible to {{what it made possible}}. As a result, {{what followed}}.',
        exampleLabel: 'From everyday life',
        example: 'Before, **people used paper maps and asked strangers for directions**. Then **phone maps** **showed each person where they were, live**, which made it possible to **find any address without knowing the city**. As a result, **a delivery driver can work in a city she has never seen**.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Suggested skill 1.B: explain a process',
          'Four steps: problem, new thing, made possible, followed',
          '"Which made it possible" is the causation',
          'Everyday model on purpose: no answer to copy',
          'Weaker answers stop at the name and date'
        ],
        land: [
          'The CED\'s suggested skill, 1.B: "Explain a historical concept, development, or process." A process answer has steps in order; the "which made it possible" step is the causation.',
          'The model is from everyday life, on purpose: First & 10 question 01, Checkpoint 1 and the Skill Builder all ask students to explain a technology step by step, so a modeled history answer would be an answer to copy.',
          'A weaker answer names the technology and its date and stops. The process is the steps after it.'
        ],
        ask: 'Which step does a weaker answer leave out?',
        listenFor: '"Which made it possible to": it says what the thing was, not what it did.',
        ap: 'Developments and Processes 1.B, inside Causation.'
      }
    },
    {
      phase: 'methods', kind: 'split-matrix', eyebrow: 'III · New Methods · After 1850',
      kc: 'KC-5.1.I.E', title: 'The second industrial revolution: four new methods.',
      footer: 'Coal ran the furnaces that made steel, and coal tar gave the first synthetic dyes to sell well.',
      template: {
        columns: [{ name: 'Steel' }, { name: 'Chemicals' }, { name: 'Electricity' }, { name: 'Machine tools' }],
        rows: [
          { label: 'New method', cells: ['Bessemer, 1856: air through melted iron', 'Perkin, 1856: dye from coal tar', 'Pearl Street, 1882: power for lamps', 'Tools cut parts to exact sizes'] },
          { label: 'It made', cells: ['Rails, bridges, ships', 'Dyes; factory indigo, 1897', 'Light; motors for machines', 'Interchangeable parts'] },
          { label: 'How far', cells: ['US: 69,000 tons (1870), 10 million (1900)', 'Germany: most of the world\'s dyes, 1914', 'Under 5% of US factory power, 1899', 'Standard threads, 1841, 1864'] }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'All four: steel, chemicals, electricity, precision machinery',
          'Bessemer, 1856: air burns out carbon and impurities',
          'Perkin\'s mauve from coal tar; Germany\'s dyes by 1914',
          'Pearl Street, 1882; motors under 5 percent, 1899',
          'Machine tools: exact sizes, interchangeable parts',
          'No "80 percent cheaper" steel figure'
        ],
        land: [
          'KC-5.1.I.E names four: "new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century." All four are on the slide.',
          'Steel: Henry Bessemer announced his process at the British Association, Cheltenham, in August 1856 (Philip Bishop, The Beginnings of Cheap Steel, Smithsonian). Air blown through melted pig iron burns out carbon and impurities, and the burning keeps the metal hot. Output (NBER): the United States, 69,000 long tons in 1870 and 10.2 million in 1900; Great Britain, 215,000 and 4.9 million. Do not use the popular "80 percent cheaper" figure; no source was found for it.',
          'Chemicals: William Perkin, 18, a student at the Royal College of Chemistry in London, made mauve in 1856, "the first commercially successful synthetic dye" (Britannica), from aniline, a coal-tar chemical. BASF was founded on 6 April 1865 and sold synthetic indigo from 1897 (BASF). Britannica: by 1914 about 90 percent of the world\'s dyes were made in Germany. Bridge only: factory indigo hit indigo growers in India; that story is Unit 6\'s.',
          'Electricity: Edison\'s Pearl Street Station began supplying power on 4 September 1882, lighting about 400 lamps on the first day (IEEE Milestone). Paul David (American Economic Review, 1990): in 1899, electric motors gave "less than 5 percent of factory mechanical drive" in the United States; it took about two decades more to reach half. Factories had to be rebuilt around motors, one per machine, instead of one big engine and belts.',
          'Precision machinery (the slide\'s column is headed Machine tools, to fit): machine tools (lathes, milling machines) cut metal to exact sizes, so parts are interchangeable. Joseph Whitworth\'s standard screw threads (Britain, 1841) and William Sellers\'s (United States, April 1864) helped "machines with interchangeable parts, from typewriters to locomotives," spread (ASME Landmark 234).'
        ],
        ask: 'Which of the four depended most on coal?',
        listenFor: 'Steel (coal and coke for the furnaces) and chemicals (coal tar); electricity too, since most power stations burned coal to make steam.',
        ap: 'KC-5.1.I.E.'
      }
    },
    {
      phase: 'practice', kind: 'story-steps', eyebrow: 'III · New Methods · Explain a Process, Practice',
      kc: 'KC-5.1.I.E', title: 'Your turn: explain the Bessemer process step by step.',
      footer: 'Say each step out loud, then write it as one sentence.',
      template: {
        steps: [
          { label: 'The problem', text: 'Before 1856, steel was ___ and ___ to make.' },
          { label: 'The new method', text: 'Bessemer blew ___ through ___.' },
          { label: 'Made possible', text: 'Steel could now be made ___ and in large ___.' },
          { label: 'What followed', key: true, text: '?' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Practice 1.B on the Bessemer process',
          'Take three answers before giving one',
          'Slow and costly, then air through melted iron',
          'Push for "what followed": rails, bridges, ships',
          'US steel: 69,000 tons (1870), 10 million (1900)'
        ],
        land: [
          'Practice on KC-5.1.I.E with the frame from slide 11. The slide gives the steps, not the answers; take three answers before giving one.',
          'A strong answer: "Before 1856, steel was slow and costly to make, so it was used for small things like tools. Then Bessemer blew air through melted iron, which burned out the impurities and made steel quickly and in large amounts. As a result, steel became cheap enough for rails, bridges and ships: the United States went from about 69,000 tons in 1870 to about 10 million in 1900."',
          'If a student stops at "it made steel," push for "what followed": what was built with it?'
        ],
        ask: 'What did steel make possible that the next slide needs?',
        listenFor: 'Rails, locomotives, steamships, bridges: the reach.',
        ap: 'KC-5.1.I.E; Developments and Processes 1.B.'
      }
    },
    {
      phase: 'rail', kind: 'timeline', eyebrow: 'IV · Longer Reach · Railroads',
      kc: 'KC-5.1.IV', title: 'Railroads reached the middle of continents.',
      footer: 'Russia: 27 km of railway in 1840, over 53,000 km in 1900. Germany: 469 km in 1840, over 51,000 km in 1900.',
      template: {
        range: [1825, 1905],
        tick: 20,
        events: [
          { year: 1830, label: '1830', text: 'Liverpool and Manchester: the first railway between two cities' },
          { year: 1853, label: '1853', text: 'India\'s first passenger train: Bombay to Thane' },
          { year: 1869, label: '1869', text: 'Across the United States, at Promontory Summit, Utah' },
          { year: 1891, label: '1891', text: 'Russia begins the Trans-Siberian Railway' },
          { year: 1904, label: '1904', text: 'Trains can cross to the Pacific' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Before rail: heavy goods cheap only by water',
          '1830: first inter-city railway, not first locomotive',
          'India 1853; across the US 1869',
          'Trans-Siberian: begun 1891, through route 1904',
          'Russia 27 km (1840), over 53,000 km (1900)',
          'Chinese workers, India\'s railways: Unit 6'
        ],
        land: [
          'KC-5.1.IV: railroads "made exploration, development, and communication possible in interior regions globally." Before rail, heavy goods moved cheaply only by water, so the interiors of continents, far from rivers and the sea, were hard to reach.',
          '1830: the Liverpool and Manchester Railway, opened 15 September 1830, "the world\'s first inter-city railway" (Science and Industry Museum, Manchester), with steam locomotives. Not the first railway with steam locomotives: the Stockton and Darlington had used them since 1825, and Trevithick\'s ran in 1804. Do not call Stephenson\'s Rocket "the first locomotive."',
          '1853: Bori Bunder (Bombay) to Thane, 16 April 1853, 34 km, with three locomotives. India had railways built under British rule; who paid and who gained is Unit 6\'s question.',
          '1869: the Central Pacific and Union Pacific met at Promontory Summit, Utah, on 10 May 1869, "completing the nation\'s first transcontinental railroad" (National Park Service). Thousands of Chinese workers built much of the Central Pacific; their story is Unit 6 (migration and labor).',
          '1891 to 1904: the Trans-Siberian, begun in 1891; its through route was finished on 21 July 1904, running across Manchuria; the all-Russian Amur line came in 1916 (History Today). How the Russian state paid for industry is Topic 5.6.',
          'The footer: Mitchell\'s figures, as reprinted in the Fordham Modern History Sourcebook (from The Spread of the Industrial Revolution, Table 6): Russia 27 km (1840) to 53,234 km (1900); Germany 469 to 51,678.'
        ],
        ask: 'What could a wheat farmer in the middle of a continent do after the railroad came that he could not do before?',
        listenFor: 'Sell his wheat far away, cheaply: in a city, at a port, across an ocean. That is slide 16.',
        ap: 'KC-5.1.IV (railroads; interior regions).'
      }
    },
    {
      phase: 'ships', kind: 'split-mirror', eyebrow: 'IV · Longer Reach · Ships and Wires',
      kc: 'KC-5.1.IV', title: 'Goods and people by steamship. News by wire.',
      footer: 'Before, news traveled only as fast as a horse or a ship.',
      template: {
        left: { name: 'Steamships' },
        right: { name: 'The telegraph' },
        rows: [
          { label: 'Before', left: 'Sail, Norway to America: about 53 days (whole trip)', right: 'A letter: as fast as the ship carrying it' },
          { label: 'After', left: 'Steam, England to America: about 12 days (crossing only, 1860s)', right: 'A message along a wire: minutes' },
          { label: 'Reach', left: 'Suez Canal, 1869: mostly steamships; steamboats up rivers', right: 'Morse, 1844; across the Atlantic, 1866; to Bombay, 1870' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Left: exploration and development; right: communication',
          'Sail from Norway about 53 days; steam about 12',
          'Not an exact comparison: whole trip vs crossing',
          'Suez, 1869: mostly steamships',
          'Pleiad up the Niger, 1854: quinine against malaria',
          'Morse 1844; Atlantic cable 1866; Bombay 1870',
          '"Minutes," not "seconds"'
        ],
        land: [
          'KC-5.1.IV: steamships and the telegraph made "exploration, development, and communication possible in interior regions globally." The left side is exploration and development; the right side is communication.',
          'Crossings: Norway Heritage, "The average crossing time on a sailing ship from Norway to America was 53 days"; on the Allan Line, Liverpool to Quebec took about 12 days in 1865; White Star Line steamships could cross "in 7 to 8 days" in the 1870s; by 1900 the record holder, the Deutschland, crossed in under six days. The comparison is not exact: the 53 days is the whole voyage from Norway, and Norwegians who went by steam first crossed to England. In 1867 a steamship ticket cost about three times a sailing passage, but by 1874 the last sailing ships carried Norwegian emigrants to Quebec.',
          'Suez: opened 17 November 1869. Sailing ships rarely used it, because the Red Sea\'s winds were hard to sail against, so it mostly served steamships and hastened the decline of sail (Max Fletcher, Journal of Economic History, 1958); Daudin, Morys and O\'Rourke (2008) put it more absolutely, "could only be used by steamships," which the slide narrows to "mostly."',
          'Up rivers, into the interior: in 1854 the steamer Pleiad went up the Niger and far up the Benue, about 250 miles beyond earlier explorers, with no deaths among its crew, who took quinine every day against malaria (William Balfour Baikie\'s expedition; British Society for the History of Medicine). What European empires did with that reach is Unit 6.',
          'Telegraph: Samuel Morse sent "What hath God wrought?" from the Capitol in Washington to Baltimore on 24 May 1844 (Library of Congress). The 1858 Atlantic cable worked only a few weeks; the Great Eastern landed a working cable at Heart\'s Content, Newfoundland, on 27 July 1866 (IET Archives). That cable failed in 1872, but from 1866 there was always at least one cable working, so say "cables carried messages without a lasting break," not "one cable lasted." The Red Sea cable reached Bombay in 1870. "Minutes," not "seconds": early cables were slow (Queen Victoria\'s 1858 message took about 16 hours to send).'
        ],
        ask: 'Which one changes trade more: faster ships, or faster news?',
        listenFor: 'Either can be argued: ships move the goods, but news lets a merchant know the price before he ships. The best answers say they worked together.',
        ap: 'KC-5.1.IV (steamships; the telegraph).'
      }
    },
    {
      phase: 'effects', kind: 'story-scene', eyebrow: 'V · More Trade, More Migration · The Effects',
      kc: 'KC-5.1.IV', title: 'More trade. More migration.',
      footer: 'Why people moved, and what they found, is Unit 6.',
      template: {
        steps: [
          { label: 'Trade', text: 'Wheat cost **57.6 percent** more in Liverpool than in Chicago in 1870; **15.6 percent** more in 1913.' },
          { label: 'So', text: 'Wheat from the middle of North America, by **rail and steamship**, fed workers in Britain.' },
          { label: 'Europe', text: 'About **55 million** Europeans moved to the Americas and Australia, 1850 to 1914.' },
          { label: 'Asia', key: true, text: '**29 million** Indians, **19 million** Chinese: to Southeast Asia and the Indian Ocean rim, 1846 to 1940.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'The two effects, each with a number',
          'Wheat gap: 57.6 percent (1870), 15.6 (1913)',
          'Smaller gap: two markets become one',
          'About 55 million Europeans, 1850 to 1914',
          'Asian migration as large as the Atlantic one',
          'Steam lowered the cost of travel',
          'Why people moved is Unit 6'
        ],
        land: [
          'KC-5.1.IV ends "which led to increased trade and migration." These are the two effects, each with a number.',
          'Trade: Daudin, Morys and O\'Rourke, "Globalization, 1870-1914" (2008): "Between 1870 and 1913, the wheat price gap between Liverpool and Chicago fell from 57.6% to 15.6%" (O\'Rourke and Williamson, 1994). The cost of shipping wheat from Chicago to New York fell from 17.2 to 5.5 percent of the Chicago price. A smaller price gap means the two markets have become one market.',
          'Europe: Hatton and Williamson, The Age of Mass Migration (1998): about 55 million Europeans to the Americas and Australia, 1850 to 1914. More than a million a year left Europe for the Americas after 1900.',
          'Asia: Adam McKeown, "Global Migration, 1846-1940" (Journal of World History, 2004): Southeast Asia and the Indian Ocean rim received "over 29 million Indians and over 19 million Chinese"; "between 28 and 33 million Chinese migrated into Manchuria and Siberia"; "at least 13 million Russians moved into central Asia and Siberia." McKeown\'s point is that Asian migration was as large as the Atlantic one. His dates run to 1940, past this topic; the slide gives them.',
          'Steam "lowered the cost of travel" (Daudin, Morys and O\'Rourke). That is the technology\'s part. Why people chose to go, wages and land at home and abroad, contracts and debt, and what they met when they arrived, is Unit 6 (6.6 and 6.7). Do not teach it here.',
          'The picture is a real print: Currier and Ives, Across the Continent: "Westward the Course of Empire Takes Its Way," lithograph drawn by Fanny Palmer from a design by James M. Ives ("J. M. Ives, del." on the print), 1868 (Library of Congress, no known restrictions). It shows a train and telegraph poles running west past a new settlement, while two Native American riders watch from the right: a print that celebrates the reach, and says nothing about whose land it was.'
        ],
        ask: 'Pick one link: how did a railroad or a steamship lead to more trade, or to more migration?',
        listenFor: 'Rail and steam made moving wheat, or people, cheaper and faster, so more of it moved: prices came closer together, and tens of millions of people made long journeys.',
        ap: 'KC-5.1.IV (trade; migration).'
      }
    },
    {
      phase: 'rank', kind: 'ledger', eyebrow: 'VI · Rank the Five · In No Particular Order',
      title: 'Which changed the world most by 1900?',
      template: {
        rows: [
          { name: 'Steam engine', tool: 'Coal into motion', result: 'mines, mills, trains and ships.' },
          { name: 'Railroad', tool: 'Rails inland', result: 'farms and mines reached.' },
          { name: 'Combustion engine', tool: 'Fuel burned inside', result: 'about 8,000 US cars in 1900.' },
          { name: 'Steamship', tool: 'Oceans in days', result: 'wheat and migrants carried.' },
          { name: 'Telegraph', tool: 'News in minutes', result: 'prices known within a day.' }
        ],
        payoffLabel: 'Your turn',
        payoff: 'Rank them 1 to 5, and defend your number one'
      },
      notes: {
        minutes: 3,
        keys: [
          'The CED\'s sample activity, quick version',
          'In the CED\'s order, not ranked',
          'Rank 1 to 5; defend number one with evidence',
          'No single right answer; evidence is graded',
          'Combustion engine first? By 1900? 8,000 cars',
          'Check the question-slide predictions'
        ],
        land: [
          'This is the CED\'s own sample activity for 5.5 (p. 97), quick version: the same five technologies, in no particular order (the CED\'s), each marked with its first letter, not a number, so nothing looks ranked. Say the task aloud: rank them 1 to 5 and defend your number one with one piece of evidence. The full debate, as the writers of a New York science magazine in 1900, is the BeInTheRoom scenario.',
          'There is no single right answer; the evidence is what is graded. Strong number ones: the steam engine, because the railroad and the steamship are steam engines on wheels and hulls; the railroad, because it reached interiors that ships could not.',
          'Watch for students who put the internal combustion engine first. Ask: by 1900? (8,000 US cars.) It belongs on the list because of what came after; the question says "by 1900."',
          'Check the question-slide predictions.'
        ],
        ask: 'Who put the steam engine first? Defend it. Who put it last? Defend that.',
        listenFor: 'A ranking with a reason that names what the technology made possible, not only what it was.',
        ap: 'Causation: weighing causes (the CED sample activity).'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'cause-chain', eyebrow: 'Put It Together · The Whole Topic',
      title: 'More power. New methods. Longer reach.',
      footer: 'Each link made the next one possible.',
      template: {
        steps: [
          { label: 'Machines', text: 'Steam engines, later internal combustion engines, unlock coal and oil' },
          { label: 'More energy', text: 'By about 1900, coal is about half the world\'s energy' },
          { label: 'New methods', text: 'Steel, chemicals, electricity, precision machinery' },
          { label: 'Longer reach', text: 'Railroads, steamships and the telegraph reach the interiors of continents', key: true },
          { label: 'Effects', text: 'More trade, more migration' }
        ],
        links: ['so', 'so', 'so', 'which led to']
      },
      notes: {
        minutes: 4,
        keys: [
          'Close notes; redraw five boxes and the arrows',
          'Boxes 1-2: I.B; box 3: I.E; boxes 4-5: IV',
          'Arrows are the CED\'s words: "led to"',
          'Key link: reach, built of steel and steam',
          'Myths: correct each, name the opposite mistake'
        ],
        land: [
          'The retelling slide: the whole topic as one chain of causes. Ask students to close their notes and redraw it, five boxes and the arrows, then compare with the slide.',
          'Point to the three Key Concepts: the first two links are KC-5.1.I.B, the third is KC-5.1.I.E, the last two are KC-5.1.IV. The arrows are the CED\'s own words: "made it possible," "led to," "which led to."',
          'The key link is reach: steel and steam built the railroads and ships, and they carried the goods and the people.',
          'Correct the three myths here if they come up (they were the Myth and Evidence slide until 2026-11-08, and are in the outline\'s Watch for list), naming the opposite mistake each time. The one that most hurts an essay is the second: a causation essay that names one invention as "the" cause loses the chain, which is the whole answer.',
          '"Watt invented the steam engine": Newcomen\'s engine pumped mines from 1712 (slide 7), and before him came Savery\'s steam pump (1698); Watt added the separate condenser (1765, patented 1769), so his engines used less than a third of the coal, and from the 1780s his engines turned wheels. Do not swing to the opposite mistake, that Watt changed nothing: engines that turned wheels let mills leave the rivers and move into towns.',
          '"One invention changed everything": each technology needed the others. Railroads needed steam, coal and then steel; steam and steel built the ships too; and some of the first telegraph lines were built along railways, which were among the first to use them (the Great Western Railway, 1839), so in the 1868 print in the Evidence Lab the poles run beside the track. Do not swing to the opposite mistake, that no technology mattered more than another: Rank the Five (slide 17) asks students to weigh them and defend a number one with evidence.',
          '"By 1900 the world ran on electricity and cars": electric motors gave under 5 percent of US factory power in 1899 (David, 1990), and the United States had about 8,000 cars in 1900 (FHWA). Their effects came mostly after 1900, which is why the CED names them as developments, not as results. Do not swing to the opposite mistake, that they do not belong in this topic: they were developed before 1900, and the fuel, oil, was being drilled; the cause came before 1900, the big effects after (slide 10).'
        ],
        ask: 'Redraw it from memory. Which arrow is hardest to explain?',
        listenFor: 'Students who can say what each arrow means ("steel made rails and ships possible") have the topic.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'Put It Together · AP Synthesis',
      kc: 'Unit 5: Learning Objective F', title: 'Say it in one sentence.',
      template: {
        frame: 'Steam engines unlocked ___; later engines burned fuel from ___. New methods made ___. Railroads, ___ and the telegraph reached the ___ of continents, so trade and ___ grew.',
        words: ['coal', 'oil', 'steel', 'steamships', 'interiors', 'migration'],
        prompt: 'Fill it in from memory, then add one example.'
      },
      notes: {
        minutes: 1,
        keys: [
          'Objective F, answered in one sentence',
          'Fill it from memory',
          'One example per link makes it AP'
        ],
        land: [
          'Learning objective F: "Explain how technology shaped economic production over time." The sentence is the whole answer; one example per link makes it an AP answer.',
          'A strong version: between 1750 and 1900, steam engines, which Watt made efficient and able to turn wheels, let factories run on coal instead of rivers, and coal grew to about half of the world\'s energy by 1900; after 1850 new methods such as the Bessemer process made steel cheap enough for rails and ships, while chemical dyes, electricity and precision machine tools made new goods; railroads such as the transcontinental line of 1869, steamships through the Suez Canal and the telegraph reached the interiors of continents, so the wheat price gap between Chicago and Liverpool shrank and tens of millions of Europeans and Asians migrated.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can give one example for one link and say what it made possible have the objective.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 10',
      title: 'Now you explain the process.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Explain two technologies, step by step.', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Reach to trade and migration, with Socrates.', url: '../unit-5/lesson-5-5-technology-of-industrialization.html#modules' }
        ]
      },
      notes: {
        minutes: 30,
        keys: [
          'All three required today, in order',
          'Skill Builder: "which made it possible to"',
          'Checkpoint 1: no coach, feedback in the room',
          'Checkpoint 2: reach to trade or migration, with a number',
          'Checkpoint 2 unfinished = homework',
          'Early finishers: Evidence Lab'
        ],
        land: [
          'This one slide replaces five (Myth and Evidence, and the Skill Builder, Checkpoint 1, Evidence Lab and Checkpoint 2 launch slides, 2026-11-08). Modules 05, 06 and 10 are all required today (Jeff\'s rule of 2026-10-23: 02, 06 and 10 on every topic, plus at least one chosen; 05 practises the CED\'s suggested skill, 1.B). The topic is not on the schedule yet: when it is, match these buttons to the day\'s required modules. Each button opens its module.',
          'The Skill Builder (Module 05) practices the CED\'s suggested skill, 1.B Developments and Processes. It models the frame on an everyday example and asks students to explain two technologies step by step: one that unlocked energy or was a new method, and one that reached the interior. Circulate for the "which made it possible to": a real effect, not a second name or date. Ask "Read me your which made it possible to step," and listen for a change in what people could make or where they could reach, not another invention. If a student needs the frame, give it aloud (slide 11): "Before, ___. Then ___ ___, which made it possible to ___. As a result, ___." (the problem, the new technology and what it did, what it made possible, what followed). It is a frame, not a model answer; do not write a finished history answer on the board.',
          'Checkpoint 1 (Module 06), with no coach, is the diagnostic. It assesses Target 1: how a machine unlocked fossil-fuel energy, and how one method of the second industrial revolution changed what could be made. Give feedback in the room. Ask which machine they explained and what it made possible; listen for a machine, a fuel, a new method, and what each made possible.',
          'Checkpoint 2 (Module 10) asks students to choose one of railroads, steamships or the telegraph: explain what it did that older ways could not, how it reached an interior region, and how that led to more trade or more migration, with a number; then name the other effect, and connect railroads or steamships back to coal, steam or steel. It assesses Target 2 (KC-5.1.IV) and the learning objective, as a chain of causes, and declares Causation: draft, Socrates, revise. If it is not finished in class, it is homework. Ask where in the answer the cause is and where the effect is; listen for the technology and its power as the cause, trade or migration as the effect, with the link between them explained.',
          'A strong Checkpoint 2 answer: before steam, heavy goods moved cheaply only by water, and news moved as fast as a ship; railroads, built of iron and later steel and pulled by coal-burning steam engines, reached the interiors of continents, like the line across the United States finished in 1869; steamships crossed the Atlantic in under two weeks, where emigrants from Norway had taken about 53 days under sail; the telegraph sent news in minutes; so farmers in the middle of North America could sell wheat in Britain, and the price gap between Chicago and Liverpool fell from 57.6 percent in 1870 to 15.6 percent in 1913; cheaper, faster journeys also helped about 55 million Europeans move to the Americas and Australia between 1850 and 1914.',
          'Early finishers: the Evidence Lab (Module 07, optional when the deck was built, now the early-finisher option), or the Primary Source (Jevons on coal, 1865) as an extension. The Evidence Lab cards pair real objects (an engraving of a Newcomen engine, a diagram of a Bessemer converter, an oil rig, the Great Eastern with the Atlantic cable, the 1868 Across the Continent print) with scholars\' figures on energy and migration. Students choose at least two cards and say what kind of source each is (an engraving for a book, a print made to sell, a photograph, a newspaper picture), which link in the chain it shows, and one thing it cannot tell them: how common the thing was, since one engine, one rig or one ship is a case, not a measure of how much changed.'
        ],
        ask: 'Where in your answer is the cause, and where is the effect?',
        listenFor: 'Skill Builder: a real "which made it possible to," such as Watt\'s engine letting mills leave the rivers. Checkpoint 1: a machine, a fuel, a new method, and what each made possible. Checkpoint 2: the technology and its power as the cause; trade or migration as the effect, with the link between them explained.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'More power. New methods. Longer reach.',
      subtitle: 'Locomotives, rail cars and telegraph wires, 1876. Next, Topic 5.6: governments that decided to build industry themselves.',
      notes: {
        minutes: 2,
        keys: [
          'Land the spine',
          'Hand-off to 5.6: states that built industry',
          'Real print: Currier and Ives, 1876',
          'Point to locomotives and telegraph wires',
          'Made to sell: on time, everywhere at once'
        ],
        land: [
          'Land the spine, then the hand-off to 5.6: states that built industry on purpose.',
          'The picture is a real print: Currier and Ives, Night Scene at an American Railway Junction: Lightning Express, Flying Mail and Owl Trains, "On Time," chromolithograph, 1876, drawn by Parsons and Atwater (Library of Congress, no known restrictions). Margins trimmed. On the projector the words cover the harbor, so point to the locomotives and to the telegraph wires on the pole at the upper right; the full print (Library of Congress) also shows steamboats in the harbor behind them.',
          'Like the question slide, it is a print made to sell, and it shows the railroad as its makers wanted it seen: on time, at night, everywhere at once.'
        ],
        ask: 'Say the topic in one sentence, with one example.',
        listenFor: 'The spine with a real case: Watt\'s engine freeing mills from rivers; the Bessemer process making rails; the wheat price gap closing.'
      }
    }
  ]
};
