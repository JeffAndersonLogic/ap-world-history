/*
 * Topic 5.10 canonical Teaching OS source.
 * CED: Fall 2026 pp. 109 to 110 (scripts/lib/ced-source/unit-5.js). Learning
 * objective K: explain the extent to which industrialization brought change
 * from 1750 to 1900. Six review Key Concepts: KC-5.1, KC-5.1.IV, KC-5.3,
 * KC-5.3.I.A, KC-5.3.I, KC-5.3.II.i. Reasoning process: Continuity and Change.
 * Suggested skill: 6.C Argumentation.
 * Story: docs/TOPIC-5-10-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "How Much
 * Changed?" is written from the same story, and this deck retells it.
 * Spine: industrialization changed how the world made and moved goods, people
 * and news, but it reached some places and people far more than others, and
 * much of the old world, from farming to kings, kept going beside it.
 * Wall version: Deep change, uneven reach.
 * Retelling slide: the four-row extent table (phase 'retell').
 *
 * Built new in the lesson shape (Jeff, 2026-11-08; docs/PRESENTATION-AUTHORING.md
 * section 7), with Topic 4.4 as the model and Topic 4.8, the other argument
 * topic, as the model for the argument slides: `outline` is the teaching
 * outline the briefing opens on; a road map before the First & 10 shows the
 * same six section headers; every story slide's eyebrow names its section; no
 * projected slide carries a minute count; the myths live in `outline.watch`
 * and the retelling notes; the Build a Thesis slide stays because it carries
 * the thesis move Checkpoint 2 asks for (section 7, rule 7); and one Work Time
 * launch pad follows it.
 *
 * Class dates: none yet (Jeff has named no Unit 5 dates after 5.3). Required
 * modules, chosen in the build (reported for Jeff to overrule): 02 First & 10,
 * 05 Skill Builder (the CED's suggested skill, 6.C, which Checkpoint 2's
 * argument needs), 06 Checkpoint 1 and 10 Checkpoint 2. When the schedule lists
 * 5.10, its modules must match outline.required and the Work Time pad (the
 * architecture test checks it).
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.10',
    minutes: 90,
    title: 'Continuity and Change in the Industrial Age',
    subtitle: 'Industry changed how the world made and moved things. How far did the change reach?',
    essentialQuestion: 'To what extent did industrialization bring change to the world from 1750 to 1900?',
    apFocus: 'Continuity and Change, with Argumentation 6.C',
    endTarget: 'Students can measure the change industrialization brought from a 1750 starting line: what it changed in making (coal, factories, cheaper and more varied goods, standards of living for some, KC-5.1) and in moving (railroads, steamships and the telegraph reaching the interiors of continents, with more trade and migration, KC-5.1.IV); how far it reached (the old makers kept making, most people still farmed, the gains were unequal); and why the revolutions in ideas and governments (KC-5.3.I.A, KC-5.3.I, KC-5.3, KC-5.3.II.i) were a different change with other causes; and can write a thesis that takes a side on extent and explain how two pieces of evidence relate (6.C).'
  },

  priorities: {
    must: [
      'Answer the objective as a measurement: how big, how far it reached, and what kept going. "To what extent" is never a list.',
      'Use the unit\'s own evidence, with the numbers 5.1 to 5.9 taught. Nothing new is required content.',
      'Separate the two revolutions: the political one came first, from ideas and grievances, not from machines.',
      'Land the spine with the four-row table: deep change, uneven reach.'
    ],
    should: [
      'Model 6.C once: led to, the same pattern, a contrast. Then let students practice it in the Skill Builder.',
      'Test Wallace\'s 1898 claim against the evidence: partly right, partly too far.',
      'Correct three myths on the retelling slide: "everything changed," "nothing really changed," and "industry caused the revolutions."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "How Much Changed?"',
      'Offer the Evidence Lab or the Primary Source (more of Wallace) to early finishers.'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10 "How Much Changed?"; nothing is new.
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'The starting line, 1750', kc: 'Unit 5: Learning Objective K', points: [
        '"To what extent" = how much: how big, how far, what kept going',
        'Made by hand; China about a third, India about a quarter, Britain under 2 percent (Bairoch, estimates)',
        'Energy from muscles, wood, wind, water',
        'News as fast as a horse or a ship',
        'Most people farmed; kings by God and birth'
      ] },
      { label: 'II', title: 'Making: factories and coal', kc: 'KC-5.1', points: [
        '1780s: Watt and Boulton engines turn wheels; mills go where coal goes',
        'About 1900: coal about half the world\'s energy',
        'Cheaper, more varied goods: yarn a third of its 1780s price by 1815; Sunlight soap 1884',
        'Britain under 2 percent (1750) to about a fifth (1860); Europe and US over four-fifths by 1900',
        'Living standards "for some": under 15 percent, 1780s to 1850s; faster after about 1860'
      ] },
      { label: 'III', title: 'Moving: rails, steam and wire', kc: 'KC-5.1.IV', points: [
        'Russia: 27 km of railway (1840), more than 53,000 (1900)',
        'India\'s first train 1853; US coast to coast 1869',
        'Liverpool to New York: 40+ days (1853, mostly sail), about 16 (1869, steam)',
        'Telegraph by the 1840s (Morse 1844); Atlantic cable 1866; Bombay 1870',
        'Wheat gap Liverpool-Chicago: 57.6 percent (1870) to 15.6 percent (1913)',
        '55 million Europeans out (1850 to 1914); 29 million Indians, 19 million Chinese (1846 to 1940)'
      ] },
      { label: 'IV', title: 'How far it reached', kc: 'Unit 5: Learning Objective K', points: [
        'Wallace, 1898: the century equal to "the whole preceding historical period"; "only one side of the shield"',
        'Old makers kept making: China\'s share to about 6 percent; a million handloom weavers in one Indian province, 1908',
        'Most still farmed: India 1901 about two-thirds; US 1900 about two in five',
        'Egypt\'s factories mostly closed by the mid-1840s; Japan\'s lasted',
        'Gains for some: Salisbury, a marquess; Manchester babies, about 25 to 28 years',
        'Wallace\'s "without any corresponding increase": partly right, partly too far'
      ] },
      { label: 'V', title: 'The other revolution: ideas and nations', kc: 'KC-5.3.I.A · KC-5.3.I · KC-5.3 · KC-5.3.II.i', points: [
        'Enlightenment: reason, evidence; religion\'s role in government questioned',
        'Locke, 1689: natural rights, a social contract resting on consent',
        'Ideas came first: revolutions 1775, 1789, 1791, 1810',
        'New nation-states: the US, Haiti, Spanish America',
        'Nationalism: Italy 1861, Germany 1871, the Balkans',
        'They met: Meiji Japan; the Chartists. Kept going: kings; women\'s votes almost nowhere (New Zealand 1893)'
      ] },
      { label: 'VI', title: 'Make the argument', kc: 'Unit 5: Learning Objective K', points: [
        'Led to: coal and steam, railroads and steamships, cheap wheat for British workers',
        'Same pattern: railways into the interior of Russia and of India',
        'A contrast: Lancashire\'s power looms beside India\'s handloom weavers',
        'Thesis: take a side, name a change and a continuity, say for whom and why'
      ], skill: 'You model 6.C Argumentation out loud: name the relationship (led to, the same pattern, a contrast) and say why. Students practice it in the Skill Builder, then write the thesis in Checkpoint 2.' }
    ],
    wrap: { title: 'Put it together', columns: ['By 1900', 'Kept going'], rows: [
      { label: 'Making goods', cells: ['Coal and factories; Europe and the US make over four-fifths', 'Old makers kept making by hand, a shrinking share'] },
      { label: 'Moving goods, people, news', cells: ['Railroads, steamships, telegraph; more trade and migration', 'Most people still farmed'] },
      { label: 'How people lived', cells: ['Cheaper goods; living standards rose for some', 'Landed families near the top; many still poor'] },
      { label: 'Who ruled', cells: ['Revolutions, new nation-states, nationalism (from ideas, first)', 'Kings and emperors in most of Europe; women\'s votes almost nowhere'] }
    ] },
    vocabulary: [
      { term: 'Extent', def: 'How much. "To what extent" asks you to measure a change, not list it.' },
      { term: 'Continuity', def: 'What stays the same over time.' },
      { term: 'Industrial capitalism', def: 'An economy where owners and investors run factories and businesses for profit.' },
      { term: 'Consumer goods', def: 'Things people buy for themselves, such as cloth, soap and food.' },
      { term: 'Standard of living', def: 'How well people live: food, home, health and how long they live.' },
      { term: 'Interior', def: 'The land of a continent far from the sea or a big river.' },
      { term: 'Migration', def: 'People moving to live in a new place.' },
      { term: 'Enlightenment', def: 'A movement of thinkers who used reason and evidence to question old authorities.' },
      { term: 'Nation-state', def: 'A state that claims to belong to one people, its nation.' },
      { term: 'Nationalism', def: 'Loyalty to your nation above a king or an empire.' },
      { term: 'Thesis', def: 'The claim that answers the question, which you can defend with evidence.' }
    ],
    watch: [
      { myth: '"Everything changed."', fix: 'Most people still farmed; the old makers kept making; kings still ruled most of Europe.' },
      { myth: '"Nothing really changed."', fix: 'Railroads, the telegraph, coal, cheap cloth: the change in making and moving was enormous.' },
      { myth: '"Industry caused the revolutions."', fix: 'The ideas and the revolutions came first, while factories were still almost all in Britain.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective\'s "extent," the two revolutions, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.9, 5.5 and 5.2. Bridge to 5.9\'s "Or did it?"', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Across the Continent.', students: 'Guess: a great or a limited extent?', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the six sections before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "How Much Changed?" in class.', students: 'Two columns: changed, kept going.', slide: 5 },
    { id: 'start', label: 'The Starting Line', range: '18-20', minutes: 2, teacher: 'What was true in 1750.', students: 'Name the starting line.', slide: 6 },
    { id: 'making', label: 'Factories and Coal', range: '20-22', minutes: 2, teacher: 'Steam, coal and factories.', students: 'How big was the change?', slide: 7 },
    { id: 'goods', label: 'Cheaper Goods, for Some', range: '22-24', minutes: 2, teacher: 'Goods, shares and living standards.', students: 'For whom?', slide: 8 },
    { id: 'moving', label: 'Rails, Steam and Wire', range: '24-26', minutes: 2, teacher: 'Railways, steamships, the telegraph.', students: 'Which reached furthest?', slide: 9 },
    { id: 'trade', label: 'Trade and Migration', range: '26-28', minutes: 2, teacher: 'Wheat prices and tens of millions moving.', students: 'One number for each.', slide: 10 },
    { id: 'wallace', label: 'A Witness, 1898', range: '28-30', minutes: 2, teacher: 'Wallace\'s claim of enormous change.', students: 'Is he right?', slide: 11 },
    { id: 'reach', label: 'How Far It Reached', range: '30-33', minutes: 3, teacher: 'The old makers; the farmers.', students: 'One limit.', slide: 12 },
    { id: 'gains', label: 'Gains for Some', range: '33-35', minutes: 2, teacher: 'Egypt and Japan; the ladder; Wallace tested.', students: 'Which part of Wallace holds up?', slide: 13 },
    { id: 'ideas', label: 'The Ideas', range: '35-37', minutes: 2, teacher: 'The Enlightenment, retrieved.', students: 'Name two ideas.', slide: 14 },
    { id: 'order', label: 'Ideas Came First', range: '37-39', minutes: 2, teacher: 'The order of events.', students: 'Which came first?', slide: 15 },
    { id: 'nations', label: 'New Nation-States', range: '39-41', minutes: 2, teacher: 'The revolutions and what they built.', students: 'Name one new country.', slide: 16 },
    { id: 'nationalism', label: 'Nationalism, and Where They Met', range: '41-43', minutes: 2, teacher: 'Italy, Germany, Japan; what kept going.', students: 'Where did the two revolutions meet?', slide: 17 },
    { id: 'relate', label: 'Connect the Evidence', range: '43-46', minutes: 3, teacher: 'Model 6.C: led to, same pattern, contrast.', students: 'Say the relationship.', slide: 18 },
    { id: 'retell', label: 'Deep Change, Uneven Reach', range: '46-51', minutes: 5, teacher: 'Students redraw the table from memory; correct the three myths here.', students: 'Retell the whole topic.', slide: 19 },
    { id: 'sharpen', label: 'Build a Thesis', range: '51-54', minutes: 3, teacher: 'Weak thesis, then the frame; pairs fill it aloud.', students: 'Fill the frame.', slide: 20 },
    { id: 'worktime', label: 'Work Time', range: '54-87', minutes: 33, teacher: 'Modules 05, 06 and 10, in that order: the Skill Builder, Checkpoint 1 with no coach, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, Checkpoint 2.', slide: 21 },
    { id: 'close', label: 'The Hand-off', range: '87-89', minutes: 2, teacher: 'Land the answer and hand off to Unit 6 in one line.', students: 'Say the topic in one sentence.', slide: 22 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.10', url: '../unit-5/lesson-5-10-continuity-and-change-in-the-industrial-age.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-10-continuity-and-change-in-the-industrial-age-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-10-continuity-and-change-in-the-industrial-age.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-10-slide',
    title: 'Topic 5.10 Presentation',
    file: 'present-topic-5-10.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'Deep change, uneven reach.',
      subtitle: 'Continuity and Change, with Argumentation 6.C. One objective: the extent to which industrialization brought change from 1750 to 1900. Measure it: how big, how far it reached, and what kept going.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: deep change, uneven reach',
          '"Extent" = a measurement, not a list',
          'Six review Key Concepts, no new content',
          'Two revolutions: ideas came first',
          'Model 6.C: led to, same pattern, contrast',
          'Unit 6 is a one-line hand-off only'
        ],
        land: [
          'CED pp. 109 to 110. Learning objective K: explain the extent to which industrialization brought change from 1750 to 1900. The CED lists six "Review: Unit 5 Key Concepts" under it: KC-5.1 (industrial capitalism, standards of living for some, more available, affordable and varied goods); KC-5.1.IV (railroads, steamships and the telegraph in interior regions globally, with increased trade and migration); KC-5.3 (an intense period of revolution from the 18th century, leading to new nation-states); KC-5.3.I.A (Enlightenment philosophies: reason, empiricism, religion\'s role in public life, natural rights and the social contract); KC-5.3.I (Enlightenment thought often preceded revolutions); KC-5.3.II.i (nationalism a major force shaping states and empires).',
          'The CED prints no thematic focus, no illustrative examples and no sample activity for 5.10. It lists one resource, the Classroom Resources "Review Essay: Teaching the Great Divergence," which this deck does not use: its subject is 5.4\'s shares, used here as evidence.',
          'Every case in this deck was taught in 5.1 to 5.9, with the numbers those topics teach. The one new source is Alfred Russel Wallace\'s The Wonderful Century (1898), and two new figures for farming in 1900 (India\'s 1901 census; the United States).',
          'Three myths, corrected on the retelling slide: "everything changed"; "nothing really changed"; "industry caused the revolutions."',
          'Every picture in this deck is a real historical object, verified for an earlier Unit 5 topic. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Industrialization changed how the world made and moved goods, people and news, but it reached some places and people far more than others, and much of the old world, from farming to kings, kept going beside it.',
        avoid: 'Avoid teaching Unit 6 (imperialism, why people migrated). It is a one-line hand-off at the end.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull the unit back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.9', text: 'Name one thing industry changed in society, and one thing that kept going.' },
          { label: 'Topic 5.5', text: 'Name one of the three technologies that reached the interiors of continents.' },
          { label: 'Topic 5.2', text: 'Name one country that a revolution created.' }
        ],
        turn: '5.9 ended: industry changed almost everything in a hundred and fifty years. **Or did it?** Today you answer, with an argument.'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          '5.9: new classes; landed families kept power',
          '5.5: railroads, steamships, telegraph',
          '5.2: the US, Haiti, Mexico, Gran Colombia',
          'Bridge: 5.9\'s "Or did it?"'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: a middle class rose, a working class lived on wages, women\'s lives split by class, cities grew too fast; landed families kept power, women were paid less (5.9). Railroads, steamships, the telegraph (5.5). The United States, Haiti, Mexico, Gran Colombia, Peru, Chile (5.2).',
          'The three prompts are the three kinds of evidence today needs: a change and a continuity in society, the technology of moving, and the political revolution.',
          'The bridge is 5.9\'s hand-off, word for word.'
        ],
        ask: 'If you had to answer 5.9\'s question in one word now, what would it be: yes, no, or partly?',
        listenFor: 'Any answer; return to it at the retelling table.',
        ap: 'Retrieval plus bridge: the whole unit is the evidence.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle',
      title: 'To what extent did industrialization change the world from 1750 to 1900?',
      subtitle: 'A railroad crossing a continent, as a New York print shop imagined it in 1868.',
      notes: {
        minutes: 1,
        keys: [
          'Currier & Ives, Across the Continent, 1868',
          'Railroad, telegraph poles, wagons: the change',
          'Two Native American riders: who is left out?',
          'Guess: great or limited extent?'
        ],
        land: [
          'The picture is Currier & Ives\'s print Across the Continent: "Westward the Course of Empire Takes Its Way," drawn by Fanny Palmer from a design by James M. Ives and published in New York in 1868, a year before the first railroad across the United States was finished (Library of Congress). It was verified for Topic 5.5.',
          'It sets the question because it shows the change and its limits in one frame: a train and a line of telegraph poles reaching the interior, settlers building a new town, and two Native American riders at the edge, watching the change arrive.',
          'Sourcing caution: a print made to sell, celebrating the railroad. Ask whose view it leaves out.'
        ],
        ask: 'Before we start: a great extent, or a limited extent? Guess, and hold on to it.',
        listenFor: 'Any reasoned guess; students test it against the evidence.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'To what extent did industrialization change the world from 1750 to 1900?',
        stops: [
          { label: 'I', text: 'The starting line, 1750' },
          { label: 'II', text: 'Making: factories and coal' },
          { label: 'III', text: 'Moving: rails, steam and wire' },
          { label: 'IV', text: 'How far it reached' },
          { label: 'V', text: 'The other revolution: ideas and nations' },
          { label: 'VI', text: 'Make the argument' },
          { label: '✓', text: 'Put it together: deep change, uneven reach', key: true }
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
          'Read the six headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to VI).',
          'Sections II and III are the change; IV is how far it reached; V is the other big change of the unit, which industry did not cause; VI turns the evidence into an argument.'
        ],
        ask: 'Which section do you expect to be the biggest change?',
        listenFor: 'Any reasoned guess; return to it at the retelling table.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read with two columns.',
      subtitle: 'What changed, and what kept going? Next to each change: where, or for whom, was it biggest?',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-10-continuity-and-change-in-the-industrial-age-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read "How Much Changed?" in class',
          'Two columns: changed, kept going',
          'Q3 is the 6.C move: a contrast',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "How Much Changed?" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who keep both columns and write "for whom?" next to each change.',
          'Question 03 is the topic\'s 6.C practice: one change and one limit, explained as a contrast. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which change in your first column reached the most people?',
        listenFor: 'Railroads, steamships and the telegraph reached the interiors of continents around the world.'
      }
    },
    {
      phase: 'start', kind: 'story-steps', eyebrow: 'I · The Starting Line · 1750',
      kc: 'Unit 5: Learning Objective K', title: 'Measure every change from 1750.',
      template: {
        steps: [
          { label: 'Making', text: 'By hand. China made about a third of the world\'s goods, India about a quarter, Britain under 2 percent.' },
          { label: 'Energy', text: 'Muscles, wood, wind and water.' },
          { label: 'Moving', text: 'News as fast as a horse or a ship.' },
          { label: 'Ruling', key: true, text: 'Most people farm. Kings rule by God and birth.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          '"Extent" needs a starting line',
          'Made by hand, mostly in Asia',
          'Bairoch\'s shares are estimates',
          'Energy from things that grow',
          'Kings by divine right (5.1)'
        ],
        land: [
          'To measure a change you need a starting line. Every row of the retelling table starts here.',
          'Making: Paul Bairoch\'s estimates put China at about a third and India at about a quarter of world manufacturing around 1750, Europe together at about a quarter, Britain under 2 percent (5.4). Say "estimated": the numbers show the size of the change, not exact amounts.',
          'Energy: almost all of it came from things that grow: food for muscles, wood, wind and water (5.5). Moving: a message traveled only as fast as a horse or a ship.',
          'Ruling: most rulers said their power came from God and birth, as Louis XIV did (5.1, 3.2). Most people farmed.'
        ],
        ask: 'Which of these four rows do you think changed most by 1900?',
        listenFor: 'Making or moving; some will say ruling. Hold the answers for the retelling table.',
        ap: 'Continuity and Change starts with what was already true.'
      }
    },
    {
      phase: 'making', kind: 'story-scene', eyebrow: 'II · Making: Factories and Coal · 1',
      kc: 'KC-5.1', title: 'Coal and steam put the work in factories.',
      footer: 'Energy that had been stored underground for millions of years.',
      template: {
        caption: 'Power-loom weaving, engraving, 1835',
        steps: [
          { label: '1780s', text: 'Watt and Boulton\'s engines turn wheels: a mill can run wherever coal can be brought.' },
          { label: 'Factories', text: 'Machines in one building, at the hours the mill sets (Topic 5.3).' },
          { label: 'About 1900', key: true, text: 'Coal supplies about **half** of all the energy used in the world.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Watt and Boulton engines turn wheels, 1780s',
          'Mills no longer need a fast river',
          'Coal: about half of world energy by about 1900',
          'How big: a new source of energy',
          'Picture: Allom engraving, 1835'
        ],
        land: [
          'KC-5.1: the development of industrial capitalism, and continued improvement in manufacturing methods. In the 1780s Watt and his partner Matthew Boulton built engines that turned a wheel, so an engine could drive machines, and a mill could run on coal wherever coal could be brought (5.5).',
          'By about 1900 coal supplied about half of all the energy used in the whole world (5.5). That is the size of the change in making: a new source of energy, not just new machines.',
          'The picture: power-loom weaving in a cotton mill, drawn by Thomas Allom and engraved by J. Tingle for Edward Baines\'s History of the Cotton Manufacture in Great Britain (1835). An illustration for a book about the industry.'
        ],
        ask: 'How big was this change: a new tool, or a new kind of energy?',
        listenFor: 'A new kind of energy: coal, through steam engines, ran the machines.',
        ap: 'Measure the size of the change, not just its existence.'
      }
    },
    {
      phase: 'goods', kind: 'continuity-change', eyebrow: 'II · Making: Factories and Coal · 2',
      kc: 'KC-5.1', title: 'Cheaper goods, more of them, for some.',
      footer: 'The College Board\'s words: standards of living rose "for some."',
      template: {
        date: '1750 to 1900',
        before: { tag: '1750', items: ['Goods made by hand', 'Britain: under 2% of world goods'] },
        after: { tag: 'Changed', items: ['Yarn a third of its 1780s price, 1815', 'Branded goods: Sunlight soap, 1884', 'Europe and US: over four-fifths, 1900'] },
        continued: { tag: 'For whom?', items: ['Working families: under 15% better, 1780s to 1850s', 'Faster after 1860, and unequal'] }
      },
      notes: {
        minutes: 2,
        keys: [
          'More available, affordable, varied (KC-5.1)',
          'Yarn about a third of its 1780s price by 1815',
          'Sunlight soap: wrapped and branded, 1884',
          'Europe and US: over four-fifths by 1900',
          'Living standards: slow, then faster after 1860'
        ],
        land: [
          'KC-5.1 names three things: availability, affordability and variety of consumer goods. By 1815 even the coarsest cotton yarn cost about a third of what it had in the early 1780s, after rising prices are taken into account (5.7, from Harley). Soap that grocers had cut from long bars came in wrapped, branded bars like Sunlight, sold from 1884 (5.7).',
          'The places that made things moved: Britain from under 2 percent of world manufacturing in 1750 to about a fifth by 1860; Europe and the United States together more than four-fifths by 1900 (5.4, Bairoch\'s estimates).',
          'Standards of living rose "for some." One careful estimate finds British working families\' standard of living rose by less than 15 percent from the 1780s to the 1850s; most historians agree it grew much faster from about 1860 to 1900 (5.7). Many city workers stayed poor (5.9).'
        ],
        ask: 'Who gained most from cheaper goods, and when?',
        listenFor: 'Owners and the middle class first; working families slowly, and faster after about 1860.',
        ap: 'The CED\'s "for some" is itself a measure of extent.'
      }
    },
    {
      phase: 'moving', kind: 'story-scene', eyebrow: 'III · Moving: Rails, Steam and Wire · 1',
      kc: 'KC-5.1.IV', title: 'Rails, steam and wire reached the interiors.',
      footer: 'A continent\'s interior: far from the sea or a big river.',
      template: {
        caption: 'The Great Eastern carries the Atlantic cable, 1866',
        steps: [
          { label: 'Rails', text: 'Russia: **27 km** in 1840, more than **53,000** in 1900. India\'s first train, 1853. Across the US, 1869.' },
          { label: 'Steam', text: 'Liverpool to New York: **40+ days** in 1853, mostly by sail; about **16** by 1869, by steam.' },
          { label: 'Wire', key: true, text: 'Morse\'s telegraph, 1844. Across the Atlantic 1866. To Bombay 1870.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Interiors reached on every continent',
          'Russia: 27 km to 53,000+',
          'India 1853; US coast to coast 1869',
          'Liverpool-New York: 40+ days to 16',
          'Telegraph: messages in minutes, not weeks'
        ],
        land: [
          'KC-5.1.IV: railroads, steamships and the telegraph made exploration, development and communication possible in interior regions globally. Before them, heavy goods moved cheaply only by water.',
          'Rails: Russia had 27 kilometers of railway in 1840 and more than 53,000 in 1900; India\'s first passenger train ran from Bombay to Thane in 1853; the first railroad across the United States was finished at Promontory Summit in 1869 (5.5).',
          'Steam: on the busiest emigrant route, Liverpool to New York, the average voyage fell from more than 40 days in 1853, most of them under sail, to about 16 by 1869, as steamships took over (Hatton, "Time on the Crossing," 2023). 5.5 gives other figures for other routes (Norwegian emigrants\' whole trip under sail; an 1860s steamer from England): do not set those two side by side as one measurement.',
          'Wire: the electric telegraph was already in commercial use on an English railway from 1839; Morse\'s line, Washington to Baltimore, 1844; cables under the Atlantic without a lasting break from 1866; a cable through the Red Sea to Bombay in 1870 (5.5).',
          'The picture: the steamship Great Eastern leaving Sheerness with the Atlantic cable, an engraving in the Illustrated London News of 14 July 1866 (Library of Congress). A newspaper picture made to celebrate.'
        ],
        ask: 'Compare this with Section II: which change reached more of the world, making or moving?',
        listenFor: 'Moving: railways and cables reached Russia, India and the Americas, while factories stayed concentrated in a few regions.',
        ap: 'How far a change reached is part of its extent.'
      }
    },
    {
      phase: 'trade', kind: 'split-mirror', eyebrow: 'III · Moving: Rails, Steam and Wire · 2',
      kc: 'KC-5.1.IV', title: 'More trade, more migration.',
      footer: 'Why people moved, and what they found, is Unit 6.',
      template: {
        left: { name: 'Trade' },
        right: { name: 'Migration' },
        rows: [
          { label: 'What moved', left: 'Wheat from the middle of North America to British workers', right: 'People, by train and steamship' },
          { label: 'How much', left: 'Liverpool\'s wheat cost 57.6% more than Chicago\'s in 1870; 15.6% more in 1913', right: 'About 55 million Europeans, 1850 to 1914; more than 29 million Indians and 19 million Chinese, 1846 to 1940' },
          { label: 'Where to', left: 'Across the Atlantic', right: 'The Americas and Australia; Southeast Asia and the Indian Ocean' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Wheat gap: 57.6% (1870) to 15.6% (1913)',
          'Prices came closer because moving got cheaper',
          '55 million Europeans out, 1850 to 1914',
          '29 million Indians, 19 million Chinese, 1846 to 1940',
          'Why they moved: Unit 6, not today'
        ],
        land: [
          'KC-5.1.IV ends "which led to increased trade and migration." Trade: in 1870 wheat cost 57.6 percent more in Liverpool than in Chicago; by 1913 the gap was 15.6 percent (5.5, from Daudin, Morys and O\'Rourke, citing O\'Rourke and Williamson). Prices came together because moving grain got cheaper and faster. Note 1913 is after the period; say so.',
          'Migration: about 55 million Europeans moved to the Americas and Australia between 1850 and 1914; between 1846 and 1940 more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around the Indian Ocean (5.5).',
          'Why people moved, and what they found, is Unit 6: name it, do not teach it.'
        ],
        ask: 'What does the wheat price gap closing tell you about how the world changed?',
        listenFor: 'Markets far apart became one market, because moving goods got cheaper and faster.',
        ap: 'A number that changes over time is strong evidence of change.'
      }
    },
    {
      phase: 'wallace', kind: 'source-quote', eyebrow: 'IV · How Far It Reached · A Witness, 1898',
      kc: 'Unit 5: Learning Objective K', title: 'A witness weighs his century.',
      footer: 'He went on: "this is only one side of the shield."',
      template: {
        quote: '... not only is our century superior to any that have gone before it, but that it may be best compared with the whole preceding historical period.',
        attribution: { author: 'Alfred Russel Wallace', work: 'The Wonderful Century', year: '1898' },
        notice: 'What is he claiming about how much changed? Is he right?'
      },
      notes: {
        minutes: 2,
        keys: [
          'Wallace: natural selection, separately from Darwin',
          'Claim: one century equal to all history before',
          'A witness at the end of the period',
          '"Only one side of the shield"',
          'Not right about everything: phrenology, vaccination'
        ],
        land: [
          'Alfred Russel Wallace, The Wonderful Century: Its Successes and Its Failures (New York: Dodd, Mead and Company, 1898), Preface, word for word. Wallace was a naturalist who worked out the theory of evolution by natural selection on his own, separately from Charles Darwin, who had developed it twenty years earlier without publishing; their papers were read together at the Linnean Society in 1858.',
          'His claim is the "great extent" side at its strongest: the nineteenth century compares with the whole of history before it. His evidence in Part I is railways, steamships, the telegraph, and new science.',
          'The next paragraph of his preface turns: "But this is only one side of the shield. Along with these marvellous Successes — perhaps in consequence of them — there have been equally striking Failures, some intellectual, but for the most part moral and social." More than half the book is the failures.',
          'Point of view: Wallace favored nationalizing land, and his "Failures" chapters also defend phrenology and attack vaccination. A famous witness, not always a reliable one: test his claims against the evidence.'
        ],
        ask: 'What evidence from Sections II and III would Wallace use? What would you say back?',
        listenFor: 'Railroads, steamships, the telegraph, coal. Back: most people still farmed; the gains were unequal.',
        ap: 'A primary source is a claim to test, not an answer.'
      }
    },
    {
      phase: 'reach', kind: 'split-mirror', eyebrow: 'IV · How Far It Reached · 2',
      kc: 'Unit 5: Learning Objective K', title: 'The change did not reach everyone.',
      footer: 'Wood was still the world\'s largest energy source until about 1900.',
      template: {
        left: { name: 'The old makers kept making' },
        right: { name: 'Most people still farmed' },
        rows: [
          { label: 'Where', left: 'China and India', right: 'India and the United States' },
          { label: 'The change', left: 'China\'s share of the world\'s goods: about a third (1750) to about 6% (1900)', right: 'Factories and railways spread' },
          { label: 'Kept going', left: '1908: about a million people in one Indian province still live from the handloom', right: 'India, 1901: about two-thirds farm. US, 1900: about two in five workers farm' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'China\'s share: a third to about 6 percent',
          'A million handloom weavers, one province, 1908',
          'India 1901: about two-thirds farming',
          'US 1900: about two in five farming',
          'Shrinking share is not "stopped working"'
        ],
        land: [
          'The old makers: India, China and the Middle East kept making goods, much of it by hand, but a shrinking share. China\'s share fell from about a third in 1750 to about 6 percent in 1900 (5.4, Bairoch). In 1908, in one province of northern India (the United Provinces), about a million people still lived from handloom weaving (5.4).',
          'Most people still farmed: the Census of India, 1901 (Risley and Gait\'s report) found agriculture the livelihood of nearly two-thirds of the population; in the United States in 1900, about two in five workers were in farming (Lebergott\'s estimates). Until about 1900, wood and other things that grow were still the world\'s largest source of energy (5.5).',
        ],
        ask: 'Does a shrinking share mean the old makers stopped working?',
        listenFor: 'No: they kept making, but the rest of the world\'s production grew much faster.',
        ap: 'Continuity: what kept going beside the change.'
      }
    },
    {
      phase: 'gains', kind: 'story-scene', eyebrow: 'IV · How Far It Reached · 3',
      kc: 'Unit 5: Learning Objective K', title: 'The gains went to some.',
      footer: 'Wallace in 1898: wealth grew "without any corresponding increase in the well-being of the whole people."',
      template: {
        caption: 'Still poor in 1890: lodgers in a New York tenement',
        steps: [
          { label: 'States', text: 'Egypt\'s army factories mostly closed by the mid-1840s; Japan\'s railways and mills lasted.' },
          { label: 'The top', text: 'Landed families kept power: Lord Salisbury, a marquess, prime minister in 1900.' },
          { label: 'Health', text: 'Manchester, 1840s: a baby could expect about **25 to 28** years; England and Wales, about **40 to 42**.' },
          { label: 'Wallace tested', key: true, text: 'Living standards did rise, slowly, then faster after about 1860. Unequal, but not nothing.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Industry reached only some states (5.6)',
          'The ladder rebuilt, not ended (5.9)',
          'Manchester averages pulled down by babies who died',
          'Wallace: partly right, partly too far',
          'Picture: Riis, about 1890'
        ],
        land: [
          'States: Muhammad Ali\'s Egypt built factories for its army, and most had closed by the mid-1840s; Meiji Japan built railways and mills that lasted (5.6).',
          'The top: industry rebuilt the ladder of rank rather than ending it. Landed families kept much of their power; Robert Gascoyne-Cecil, 3rd Marquess of Salisbury, was prime minister from 1895 to 1902 (5.9).',
          'Health: in the 1840s a baby born in Manchester could expect to live about 25 to 28 years, against about 40 to 42 for England and Wales; the averages are pulled down by the many babies and young children who died (5.9).',
          'Wallace, The Wonderful Century, chapter XX, "The Demon of Greed," p. 343: "One of the most prominent features of our century has been the enormous and continuous growth of wealth, without any corresponding increase in the well-being of the whole people." Test it: historians find working families\' living standards rose by less than 15 percent from the 1780s to the 1850s and much faster from about 1860 to 1900 (5.7). Unequal, as he says; but not "without any" increase.',
          'The picture: Jacob Riis, lodgers in a Bayard Street tenement, New York, about 1890, a flash photograph taken on a police visit after midnight (Library of Congress; verified for 5.9).'
        ],
        ask: 'Which part of Wallace\'s claim holds up, and which goes too far?',
        listenFor: 'Holds up: the gains were unequal and many stayed poor. Too far: living standards did rise, faster after about 1860.',
        ap: 'Argumentation: a source\'s claim, tested against other evidence.'
      }
    },
    {
      phase: 'ideas', kind: 'story-steps', eyebrow: 'V · The Other Revolution · 1',
      kc: 'KC-5.3.I.A', title: 'A revolution in ideas: by what right?',
      template: {
        steps: [
          { label: 'Reason', text: 'Use reason and evidence to explain nature, then people (Newton, Locke).' },
          { label: 'Religion', text: 'Question religion used as a power of government (Voltaire, 1763).' },
          { label: 'Natural rights', text: 'People are born with rights to "lives, liberties and estates" (Locke, 1689).' },
          { label: 'Social contract', key: true, text: 'Government is an agreement that rests on the people\'s consent.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Retrieval from 5.1, not reteaching',
          'Reason and evidence (empiricism)',
          'Religion\'s role in public life questioned',
          'Natural rights; social contract; consent',
          'This change was not industry\'s'
        ],
        land: [
          'KC-5.3.I.A: Enlightenment philosophies applied new ways of understanding and empiricist approaches to the natural world and human relationships, reexamined the role of religion in public life and emphasized reason, and developed new political ideas about the individual, natural rights and the social contract.',
          'Retrieve, do not reteach (5.1): Newton (1687) and Locke\'s empiricism; Voltaire\'s Treatise on Tolerance (1763) after the Calas case; Locke\'s natural rights to "lives, liberties and estates" and government by consent (1689); Rousseau\'s Social Contract (1762); Montesquieu\'s separation of powers (1748).',
          'This is the unit\'s other big change. It came from books, salons and arguments, not machines.'
        ],
        ask: 'Which of these four ideas would a king who ruled by God\'s will find most dangerous?',
        listenFor: 'The social contract: a government that rests on consent can lose it.',
        ap: 'Sorting changes by cause is part of measuring industry\'s extent.'
      }
    },
    {
      phase: 'order', kind: 'period-window', eyebrow: 'V · The Other Revolution · 2',
      kc: 'KC-5.3.I', title: 'The ideas came first.',
      footer: 'Check the date and the cause before you credit industry with a change.',
      template: {
        periods: [
          { label: 'Ideas', when: '1687 to 1780s', text: 'Newton, Locke, Voltaire, Rousseau, Montesquieu, the Encyclopédie.', note: 'Read in coffeehouses and salons, across Europe and the Atlantic.' },
          { label: 'Revolutions', when: '1775 to 1826', text: 'America 1775, France 1789, Haiti 1791, Spanish America 1810.', note: 'Factories still almost all in Britain.' },
          { label: 'Factories spread', when: '1790s to 1900', text: 'To the US and Belgium first; Russia and Japan mostly after 1870.', note: 'Topic 5.4.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'KC-5.3.I: ideas "often preceded" revolutions',
          'Revolutions 1775, 1789, 1791, 1810',
          'Factories: Slater 1790s, Belgium 1817, Russia and Japan after 1870',
          'So the political revolution was not industry\'s',
          'Ideas gave words, not the only cause (5.2)'
        ],
        land: [
          'KC-5.3.I: the rise and diffusion of Enlightenment thought that questioned established traditions often preceded revolutions and rebellions against existing governments.',
          'The order: the ideas (Newton 1687, Locke 1689, Montesquieu 1748, the Encyclopédie 1751 to 1772, Rousseau 1762); the revolutions (American 1775, French 1789, Haitian 1791, Spanish American 1810) (5.1, 5.2); and factory methods leaving Britain (Slater\'s mill in Rhode Island from 1793, Cockerill at Seraing from 1817, Russia and Japan mostly after 1870) (5.4).',
          'So the political revolution began while factories were still almost all in Britain. Its causes, 5.2 taught, were a grievance, the words to name it, and a chance to act. The ideas gave revolutionaries their words; they did not cause the revolutions by themselves.'
        ],
        ask: 'Can industry be the cause of the French Revolution? Use the dates.',
        listenFor: 'No: France\'s revolution began in 1789, before factories spread beyond Britain, from debt, grievances and ideas.',
        ap: 'Chronology is evidence in a causation claim.'
      }
    },
    {
      phase: 'nations', kind: 'story-scene', eyebrow: 'V · The Other Revolution · 3',
      kc: 'KC-5.3', title: 'Revolutions built new nation-states.',
      footer: 'A state that claims to belong to its people, its nation.',
      template: {
        caption: 'The Storming of the Bastille, etching, 1790',
        steps: [
          { label: '1783', text: 'The United States wins independence: a republic with no king.' },
          { label: '1789 to 1799', text: 'France: "sovereignty resides essentially in the nation."' },
          { label: '1804', text: 'Haiti, founded by people who freed themselves from slavery.' },
          { label: 'By 1826', key: true, text: 'Spain loses its mainland empire: Mexico, Gran Colombia, Peru, Chile and more.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'KC-5.3: revolution leads to new nation-states',
          'US 1783; Haiti 1804; Spanish America by 1826',
          'France: sovereignty in the nation, 1789',
          'Much kept going: slavery, property votes',
          'Picture: Thévenin, 1790'
        ],
        land: [
          'KC-5.3: the 18th century began an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.',
          'Retrieve from 5.2: the United States (independence 1783, a republic under the 1787 constitution); France\'s Declaration of 1789, "the principle of all sovereignty resides essentially in the nation"; Haiti (1 January 1804), the first country founded by people who had freed themselves from slavery; Spanish America, where by 1826 Spain had lost every colony in the Americas except Cuba and Puerto Rico.',
          'Continuity inside the change (5.2): the United States kept slavery and most states let only men with property vote; most of the new Spanish American countries kept a sharp social hierarchy.',
          'The picture: Charles Thévenin\'s etching The Storming of the Bastille, made in 1790, a year after the event (Cleveland Museum of Art; verified for 5.2).'
        ],
        ask: 'What was new about these states compared with a kingdom in 1750?',
        listenFor: 'They claimed to belong to their people or nation, not to a king by God\'s will.',
        ap: 'A change with its own causes, beside industry\'s.'
      }
    },
    {
      phase: 'nationalism', kind: 'story-scene', eyebrow: 'V · The Other Revolution · 4',
      kc: 'KC-5.3.II.i', title: 'Nationalism redrew the map, and met industry.',
      footer: 'Kept going in 1900: kings and emperors ruled most of Europe; women could vote almost nowhere.',
      template: {
        caption: 'First steam train leaving Yokohama, woodblock print, about 1872',
        steps: [
          { label: 'Joined', text: 'Italy, 1861. The German Empire, 1871.' },
          { label: 'Pulled away', text: 'Greece, 1830; Serbia, Montenegro and Romania, 1878.' },
          { label: 'They met', key: true, text: 'Meiji Japan built railways and mills to make the nation strong.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'KC-5.3.II.i: nationalism a major force',
          'Unification: Italy 1861, Germany 1871',
          'Breaking away: the Balkans from the Ottomans',
          'Where the revolutions met: Japan; the Chartists',
          'Kept going: kings; women\'s votes (NZ 1893)'
        ],
        land: [
          'KC-5.3.II.i: nationalism also became a major force shaping the historical development of states and empires. From 5.2: Italian nationalists joined most of Italy into one kingdom in 1861 (Rome in 1870); the German Empire was proclaimed on 18 January 1871 at Versailles; Greece was declared independent in 1830, and Serbia, Montenegro and Romania were recognized in 1878.',
          'Where the two revolutions met: nationalism and fear of stronger powers pushed Meiji Japan to build railways and mills to make the nation strong (5.6); and in Britain the Chartists, workers in industrial towns, used the language of rights to demand the vote (5.8).',
          'What kept going (5.1): in 1900 kings and emperors still ruled most of Europe, and women could vote in national elections almost nowhere; New Zealand, in 1893, was the first self-governing country where all adult women could.',
          'The picture: First Steam Train Leaving Yokohama, a woodblock print in three sheets signed Baidō Kunimasa, about 1872 (the Library of Congress catalogs it under Utagawa Kunisada); Japan\'s first railway opened in 1872. A print made to sell (verified for 5.6).'
        ],
        ask: 'Where in the unit did the political revolution and the industrial one meet?',
        listenFor: 'Japan built industry to make the nation strong; workers in industrial towns demanded the vote.',
        ap: 'A relationship between two kinds of evidence: the 6.C move, next.'
      }
    },
    {
      phase: 'relate', kind: 'story-steps', eyebrow: 'VI · Make the Argument · Model',
      title: 'Three ways evidence connects.',
      template: {
        steps: [
          { label: 'Led to', text: 'Coal and steam led to railroads and steamships, which led to cheap wheat for British workers.' },
          { label: 'Same pattern', text: 'Railways reached the interior of Russia and the interior of India.' },
          { label: 'A contrast', key: true, text: 'Lancashire\'s power looms made cloth cheaper, yet a million Indians in one province still lived from the handloom in 1908.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Skill 6.C: relationships, not lists',
          'Led to: a chain of causes',
          'Same pattern: two places, one change',
          'Contrast: change beside continuity = extent',
          'Say the relationship word aloud'
        ],
        land: [
          'The suggested skill, 6.C: use historical reasoning to explain relationships among pieces of historical evidence. A list of evidence is not an argument; the relationships are.',
          'Led to: a chain of causes (5.5: coal and steam engines, then railroads and steamships, then the Liverpool-Chicago wheat gap closing). Same pattern: two places showing one development (railways into the interiors of Russia and India). A contrast: a change set beside a continuity, which is what lets an answer say how much changed (5.4: Lancashire cloth beside India\'s handloom weavers).',
          'The Skill Builder (Module 05) practices the same three moves on new pairs, so the slide\'s three are models, not answers to copy.',
          'Push students to say the relationship word aloud: "This led to that because ..."; "These show the same pattern, because both ..."; "This changed, but that kept going, because ..."'
        ],
        ask: 'Which relationship is most useful for saying how much changed?',
        listenFor: 'A contrast: a change set beside a continuity.',
        ap: 'Argumentation 6.C, modeled.'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'split-matrix', eyebrow: 'Put It Together · The Whole Topic',
      title: 'Deep change, uneven reach.',
      template: {
        columns: [{ name: 'In 1750' }, { name: 'By 1900' }, { name: 'Kept going' }],
        rows: [
          { label: 'Making', cells: ['By hand, mostly in Asia', 'Coal, factories; Europe and US over four-fifths', 'Old makers kept making by hand'] },
          { label: 'Moving', cells: ['Horse and sail', 'Rails, steam, telegraph; trade, migration', 'Most people still farmed'] },
          { label: 'Living', cells: ['Rank by birth and land', 'Cheaper goods; better, for some', 'Landed families on top; many poor'] },
          { label: 'Ruling', cells: ['Kings by God\'s will', 'New nations, nationalism (ideas first)', 'Kings in most of Europe; few women vote'] }
        ],
        result: { label: 'So', text: 'Deep change, uneven reach.' }
      },
      notes: {
        minutes: 5,
        keys: [
          'Show it, hide it, redraw from memory',
          'Middle column = how big; last = the limit',
          'Row 4 = the other revolution, other causes',
          'Read across a row = one argument',
          'Correct the three myths from these rows'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the twelve cells from memory, with one number or name under each.',
          'Rows 1 and 2 are KC-5.1 and KC-5.1.IV; row 3 is KC-5.1\'s "for some" and 5.9\'s ladder; row 4 is KC-5.3, KC-5.3.I.A, KC-5.3.I and KC-5.3.II.i, a change with its own causes. The slide carries no single Key Concept band because it spans all of them.',
          'The three myths, corrected from these rows, naming the opposite mistake each time. "Everything changed": the last column answers it (the handloom weavers, India\'s farmers, the kings); but the opposite mistake, "nothing really changed," is answered by the middle column (railways, the telegraph, coal, the price of cloth). "Industry caused the revolutions": row 4, the ideas and the revolutions came first, from grievances and ideas, while factories were still almost all in Britain; the opposite mistake is "the two revolutions had nothing to do with each other," answered by Meiji Japan and the Chartists.'
        ],
        ask: 'Which row changed most? Which changed least? Why?',
        listenFor: 'Most: moving, because it reached the interiors of continents everywhere. Least: how most people lived, since most still farmed. Any reasoned answer with evidence.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Put It Together · Build a Thesis',
      kc: 'Unit 5: Learning Objective K',
      footer: 'Take a side. Name a change, a continuity, for whom, and why.',
      template: {
        weak: 'Industrialization changed the world a lot between 1750 and 1900.',
        strong: 'Between 1750 and 1900 industrialization changed ______ to a **great** extent, **especially for** ______, **because** ______, **but** ______ **kept going**.'
      },
      notes: {
        minutes: 3,
        keys: [
          'Weak: no side, no evidence, no limit, no reason',
          'Frame: great extent, for whom, because, but',
          'Students may flip "great" to "limited"',
          'Pairs fill it aloud, then trade and sharpen',
          'No finished thesis on the board'
        ],
        land: [
          'This slide stays in the lesson shape because it carries the thesis move Checkpoint 2 asks for, as 4.8\'s does (PRESENTATION-AUTHORING section 7, rule 7).',
          'The weak thesis takes no measurable side, names no change, no place or people, no continuity and no reason. It fits any century, which is why it earns no credit.',
          'The frame is not a model answer. A student may write "a limited extent" and swap the halves; both are defensible with evidence. Have pairs fill it aloud with cases they choose, then trade and say what would make the partner\'s stronger. The First & 10 gives the criteria for a strong thesis and prints no finished one.'
        ],
        ask: 'Why is "changed the world a lot" not a thesis?',
        listenFor: 'It does not say how much, what changed, for whom, what kept going, or why.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 10',
      title: 'Now you make the argument.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Say how two pieces of evidence connect.', url: '../unit-5/lesson-5-10-continuity-and-change-in-the-industrial-age.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-5/lesson-5-10-continuity-and-change-in-the-industrial-age.html#modules' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Your thesis and argument, with Socrates.', url: '../unit-5/lesson-5-10-continuity-and-change-in-the-industrial-age.html#modules' }
        ]
      },
      notes: {
        minutes: 33,
        keys: [
          'All three required today, in order',
          'Skill Builder: led to, same pattern, contrast',
          'Checkpoint 1: no coach',
          'Checkpoint 2: thesis, three topics, one connection',
          'Early finishers: Evidence Lab or Wallace',
          'Give feedback in the room'
        ],
        land: [
          'Modules 05, 06 and 10 are required today, with the First & 10 (chosen in the build; Jeff can overrule). Each button opens its module.',
          'The Skill Builder (Module 05) practices 6.C Argumentation: a model on new Unit 5 evidence, then students choose two pieces from a set and explain how they relate, naming the relationship.',
          'Checkpoint 1 (Module 06), with no coach, asks for one change in making and one in moving with a detail each (KC-5.1, KC-5.1.IV), and how Enlightenment ideas came before the revolutions and new nation-states, and why that change was not industry\'s (KC-5.3 family). Give feedback in the room.',
          'Checkpoint 2 (Module 10) asks for a thesis on the extent of change that names a change and a continuity, evidence from at least three Unit 5 topics, and one sentence that explains how two pieces relate. Socrates is told the skill is Continuity and Change, so it will push for what kept going as well as what changed. The revised answer in the box is what goes to Canvas.',
          'If a student needs the claim shape, give it aloud: the thesis frame on the previous slide. It is a frame, not a model answer.',
          'Early finishers: the Evidence Lab (Module 07), six real objects from the unit, or the Primary Source (Module 08), more of Wallace.'
        ],
        ask: 'Does your answer take a side, use three topics\' evidence, and connect two pieces?',
        listenFor: 'Railways in Russia (5.5), India\'s handloom weavers (5.4), and the French Revolution\'s date (5.2), with "led to," "the same pattern" or "a contrast."'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'Industry changed how the world made and moved things. It did not reach everyone.',
      subtitle: 'Next: industrial states now needed raw materials and markets, and had new tools to take them. That is Unit 6.',
      notes: {
        minutes: 2,
        keys: [
          'Across the Continent again: the change and who watched it',
          'Deep change, uneven reach',
          'The sentence answers objective K',
          'Unit 6 in one line: do not teach it'
        ],
        land: [
          'The picture returns to Across the Continent (1868): the railroad and the telegraph reaching the interior, and the two riders at the edge of the change. Unit 6 begins with what industrial states did with that reach.',
          'This sentence answers learning objective K: industrialization brought change to a great extent in how goods were made and moved, but unevenly, and much of the old world kept going.',
          'Hand off in one line; do not teach imperialism today.'
        ],
        ask: 'What is the one-sentence answer to Topic 5.10?',
        listenFor: 'Industrialization changed how the world made and moved goods, people and news, but it reached some places and people far more than others, and much of the old world kept going.'
      }
    }
  ]
};
