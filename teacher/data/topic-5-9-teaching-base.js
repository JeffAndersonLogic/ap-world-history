/*
 * Topic 5.9 canonical Teaching OS source.
 * CED: Fall 2026 p. 108 (scripts/lib/ced-source/unit-5.js). Learning objective
 * J: explain how industrialization caused change in existing social
 * hierarchies and standards of living. Reasoning process: Continuity and
 * Change. Suggested skill: 4.B Contextualization.
 * Story: docs/TOPIC-5-9-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "A New
 * Ladder" is written from the same story, and this deck retells it.
 * Spine: industry did not end the old ladder of rank; it rebuilt it.
 * Wall version: New classes. Split homes. Crowded cities. A new ladder, still
 * a ladder.
 * Retelling slide: the four-row continuity-and-change table (phase 'retell').
 *
 * Built new in the lesson shape (Jeff, 2026-11-08; docs/PRESENTATION-AUTHORING.md
 * section 7), with Topic 4.4 as the model: `outline` below is the teaching
 * outline the briefing opens on; a road map before the First & 10 shows the
 * same five section headers; every story slide's eyebrow names its section;
 * no projected slide carries a minute count; the myths live in `outline.watch`
 * and the retelling notes; and one Work Time launch pad follows the retelling
 * slide.
 *
 * Class dates: none yet (Jeff has named no Unit 5 dates after 5.3). Required
 * modules, chosen in the build (reported for Jeff to overrule): 02 First & 10,
 * 05 Skill Builder (the CED's suggested skill, 4.B, on Riis's New York), 06
 * Checkpoint 1 and 10 Checkpoint 2. When the schedule lists 5.9, its modules
 * must match outline.required and the Work Time pad (the architecture test
 * checks it).
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.9',
    minutes: 90,
    title: 'Society and the Industrial Age',
    subtitle: 'Industry did not end the old ladder of rank; it rebuilt it.',
    essentialQuestion: 'How did industrialization change who was on top, who did the work, and how people lived between 1750 and 1900, and what kept going?',
    apFocus: 'Continuity and Change, with Contextualization 4.B',
    endTarget: 'Students can explain one change and one continuity in each part of industrial society: a middle class that rose by money and education beside landed families who kept power (KC-5.1.VI.A); a working class that lived on wages; working-class women and children earning to support the family while middle-class women were increasingly kept to the home, and why (KC-5.1.VI.B); and cities that grew faster than they could house, clean or protect people, with at least three of the six challenges the CED names (KC-5.1.VI.C); and can place one specific scene, Riis\'s crowded New York room, inside that broader story (4.B).'
  },

  priorities: {
    must: [
      'Answer the objective as Continuity and Change: the ladder was there before ("existing"), industry rebuilt it, and landed families kept much of their power.',
      'Teach the CED\'s reason for the split in women\'s lives: money. Working-class women and children earned to supplement the family\'s income; middle-class women\'s families did not need their wages.',
      'Name the six urban challenges the CED lists, caused by the speed of growth, in Britain and beyond it (New York).',
      'Land the spine with the four-row table: new classes, split homes, crowded cities, a new ladder, still a ladder.'
    ],
    should: [
      'Model 4.B Contextualization once on a Manchester cellar of the 1840s, then let students do Riis\'s Bayard Street room in the Skill Builder.',
      'Read life expectancy with care: the low city averages are pulled down by babies who died.',
      'Correct three myths on the retelling slide: "industry created social classes," "in the 1800s women stopped working," and "city workers died at 25."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "A New Ladder."',
      'Offer the BeInTheRoom, the 1884 Housing Commission, as an early-finisher option.'
    ]
  },

  // The teaching outline, shown first in the Briefing (teacher/teaching-os-shared.js).
  // Section headers match the road-map slide. Every point is from this deck's
  // own slides and notes or the First & 10 "A New Ladder"; nothing is new.
  outline: {
    required: ['02 First & 10', '05 Skill Builder', '06 Checkpoint 1', '10 Checkpoint 2'],
    sections: [
      { label: 'I', title: 'Before: a ladder of land and birth', kc: 'Unit 5: Learning Objective J', points: [
        'Social hierarchy = a ladder of rank',
        '1750: most people in the countryside',
        'Top: landed families, aristocracy and gentry, by inheritance',
        'Below: farmers, craftsmen, laborers',
        'Families worked together, on the farm or at home',
        'Industry rebuilt the ladder; it did not throw it away'
      ] },
      { label: 'II', title: 'New classes, old families', kc: 'KC-5.1.VI.A', points: [
        'Middle class: owners, merchants, bankers, professionals, clerks',
        'Rank from money and education, not land or titles',
        '1832 Reform Act: most middle-class men in towns get the vote',
        'Industrial working class: no land, no tools, lives on wages, employer\'s hours',
        'Kept going: landed families keep land, titles, power',
        'Lord Salisbury, a marquess, prime minister in 1900'
      ] },
      { label: 'III', title: 'Work and home, split by class', kc: 'KC-5.1.VI.B', groups: [
        { name: 'Working-class families', points: [
          'One wage rarely enough, so women and often children earn',
          'Britain, 1830s: women and girls a majority of textile factory workers',
          'Domestic service: the largest job for women',
          'Sewing at home, paid by the piece (Riis, New York)',
          'Japan, 1900: about 62 percent of private factory workers women'
        ] },
        { name: 'Middle-class families', points: [
          'One earner enough, so the wife increasingly kept home',
          'Separate spheres: men at work and politics, women at home',
          'Beeton, 1861: the mistress of a house as a commander',
          'Her "domestics" were working-class women',
          'Kept going: women paid less, fewer rights (property laws 1870, 1882)'
        ] }
      ] },
      { label: 'IV', title: 'Cities that could not keep up', kc: 'KC-5.1.VI.C', points: [
        'Manchester: about 23,000 (1773), 70,000 (1801), 300,000+ (1851)',
        '1851 census: more than half of England and Wales in towns',
        'Six challenges: pollution, poverty, crime, public health, housing, infrastructure',
        'Cholera from 1831; about 53,000 dead, 1848 to 1849',
        'Snow, 1854: deaths traced to one pump',
        'Manchester baby, 1840s: about 25 to 28 years; nation about 40 to 42',
        'Averages pulled down by babies who died'
      ] },
      { label: 'V', title: 'Not only Britain: New York and 1900', kc: 'KC-5.1.VI.C', points: [
        'Manhattan: about 515,000 (1850) to 1.4 million (1890)',
        'Riis, 1890: "three-fourths of its people live in the tenements"',
        'Twelve people, one room "not thirteen feet either way," five cents a spot',
        'By 1900: sewers, water, police catching up (reforms are 5.8\'s)',
        'Death rates fall; wages rise faster after about 1860; many still poor'
      ], skill: 'You model contextualization (4.B) out loud on a Manchester cellar of the 1840s: one specific thing, then the bigger story it sits inside, then the link between them. Students do Riis\'s room themselves in the Skill Builder.' }
    ],
    wrap: { title: 'Put it together', columns: ['Changed', 'Kept going'], rows: [
      { label: 'Who was on top', cells: ['A middle class rose by money and education; won votes in 1832', 'Landed families kept land, titles and power'] },
      { label: 'Who did the work', cells: ['A working class lived on wages, at the employer\'s hours', 'Most people still worked hard for little'] },
      { label: 'Women and children', cells: ['Working-class women and children earned wages; middle-class women increasingly kept home', 'Women paid less, with fewer rights'] },
      { label: 'Where people lived', cells: ['Fast-growing cities: smoke, crowding, cholera, crime', 'Poverty and disease, old problems made worse'] }
    ] },
    vocabulary: [
      { term: 'Social hierarchy', def: 'A ladder of rank: who is on top and who is below.' },
      { term: 'Middle class', def: 'Owners, merchants, bankers, professionals and clerks, whose rank came from money and education.' },
      { term: 'Industrial working class', def: 'People with no land or tools who lived on wages from mills, mines, docks and workshops.' },
      { term: 'Wages', def: 'Pay for work, by the hour, day, week or piece.' },
      { term: 'Domestic service', def: 'Work as a maid, cook or other servant in someone else\'s house. The largest job for women in Britain.' },
      { term: 'Separate spheres', def: 'The idea that men belonged in work and politics and women in the home.' },
      { term: 'Urbanization', def: 'The growth of cities, as people move from the countryside to towns.' },
      { term: 'Public health', def: 'The health of a whole population, and what a community does to protect it.' },
      { term: 'Infrastructure', def: 'The shared systems a city needs: sewers, clean water, streets, rubbish collection.' },
      { term: 'Tenement', def: 'A crowded apartment building for poor renters.' },
      { term: 'Standard of living', def: 'How well people live: food, home, health and how long they live.' }
    ],
    watch: [
      { myth: '"Industry created social classes."', fix: 'There was a ladder before; landed families stayed near the top.' },
      { myth: '"In the 1800s women stopped working."', fix: 'Working-class women and children earned wages; middle-class women ran households.' },
      { myth: '"City workers died at 25."', fix: 'An average pulled down by the many babies who died.' }
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective\'s word "existing," the CED\'s reason for the split in women\'s lives, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 5.8, 5.3 and 5.7. Bridge to what kind of society industry made.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Wyld\'s Manchester.', students: 'Predict one change and one continuity.', slide: 3 },
    { id: 'roadmap', label: 'Road Map', range: '5-6', minutes: 1, teacher: 'Show the five sections before the reading.', students: 'See where the story is going.', slide: 4 },
    { id: 'first10', label: 'First & 10', range: '6-18', minutes: 12, teacher: 'Module 02: students read "A New Ladder" in class.', students: 'Four rows: what changed, what kept going.', slide: 5 },
    { id: 'ladder', label: 'The Old Ladder', range: '18-20', minutes: 2, teacher: 'What was already true in 1750.', students: 'Name the top of the old ladder.', slide: 6 },
    { id: 'classes', label: 'Two New Classes', range: '20-22', minutes: 2, teacher: 'Middle class and working class, side by side.', students: 'Say where each class\'s place came from.', slide: 7 },
    { id: 'top', label: 'Who Stayed on Top', range: '22-24', minutes: 2, teacher: 'Change (1832) and continuity (Salisbury).', students: 'One change, one continuity.', slide: 8 },
    { id: 'earners', label: 'Working-Class Earners', range: '24-27', minutes: 3, teacher: 'Women and children earn, in mills, service and at home; Japan.', students: 'Say why they earned.', slide: 9 },
    { id: 'beeton', label: 'Mrs Beeton, 1861', range: '27-29', minutes: 2, teacher: 'The middle-class ideal in its own words.', students: 'Who were the "domestics"?', slide: 10 },
    { id: 'twohomes', label: 'Two Homes', range: '29-31', minutes: 2, teacher: 'One industry, two women\'s lives, and what both shared.', students: 'Name the CED\'s reason.', slide: 11 },
    { id: 'growth', label: 'How Fast', range: '31-33', minutes: 2, teacher: 'Manchester, 1773 to 1851; the 1851 census.', students: 'Say why speed mattered.', slide: 12 },
    { id: 'challenges', label: 'Six Challenges', range: '33-36', minutes: 3, teacher: 'The CED\'s six, in three pairs.', students: 'Name three.', slide: 13 },
    { id: 'health', label: 'What It Did to Life', range: '36-39', minutes: 3, teacher: 'Cholera, Snow\'s map, life expectancy read with care.', students: 'Why are the averages so low?', slide: 14 },
    { id: 'newyork', label: 'New York, 1890', range: '39-41', minutes: 2, teacher: 'The same pattern under global capitalism.', students: 'Describe the room.', slide: 15 },
    { id: 'context', label: 'Contextualize It', range: '41-44', minutes: 3, teacher: 'Model 4.B on a Manchester cellar.', students: 'Say the bigger story.', slide: 16 },
    { id: 'by1900', label: 'By 1900', range: '44-46', minutes: 2, teacher: 'What caught up, and who was still poor.', students: 'One change, one continuity.', slide: 17 },
    { id: 'retell', label: 'A New Ladder, Still a Ladder', range: '46-51', minutes: 5, teacher: 'Students redraw the table from memory; correct the three myths here.', students: 'Retell the whole topic.', slide: 18 },
    { id: 'worktime', label: 'Work Time', range: '51-86', minutes: 35, teacher: 'Modules 05, 06 and 10, in that order: the Skill Builder (Riis), Checkpoint 1 with no coach, then Checkpoint 2. Give feedback in the room; Checkpoint 2 finishes at home if needed.', students: 'Skill Builder, Checkpoint 1, Checkpoint 2.', slide: 19 },
    { id: 'close', label: 'Landing Sentence', range: '86-88', minutes: 2, teacher: 'Land the answer and leave the 5.10 question open.', students: 'Say the topic in one sentence.', slide: 20 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.9', url: '../unit-5/lesson-5-9-society-and-the-industrial-age.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-9-society-and-the-industrial-age-capture.html' },
    { label: 'BeInTheRoom: The Housing Commission', url: '../beintheroom/unit-5/the-housing-commission.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-9-society-and-the-industrial-age.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-9-slide',
    title: 'Topic 5.9 Presentation',
    file: 'present-topic-5-9.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight',
      title: 'New classes. Split homes. Crowded cities. A new ladder, still a ladder.',
      subtitle: 'Continuity and Change, with Contextualization 4.B. One objective: how industry changed existing social hierarchies and standards of living. For each part of society, one change and one continuity.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: industry rebuilt the ladder',
          '"Existing" hierarchies: the continuity is in the objective',
          'CED reason for split homes: money',
          'Six urban challenges, caused by speed',
          'Model contextualization on a Manchester cellar',
          'Reforms are 5.8\'s: bridge only'
        ],
        land: [
          'CED p. 108. Learning objective J (Social Interactions and Organization): explain how industrialization caused change in existing social hierarchies and standards of living. KC-5.1.VI.A: new social classes, including the middle class and the industrial working class, developed. KC-5.1.VI.B: while women and often children in working class families typically held wage-earning jobs to supplement their families\' income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development. KC-5.1.VI.C: the rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth.',
          'The CED prints no illustrative examples and no sample activity for 5.9. Every example in this deck is the build\'s choice and is in the claim ledger.',
          'The reasoning process is Continuity and Change, and the objective\'s word "existing" carries the continuity: there was a ladder of rank before industry, and landed families kept much of their wealth and power through the century.',
          'Owns: the new classes, women\'s and children\'s roles by class, the six urban challenges. Bridge only: the factory system (5.3); "for some" and real wages (5.7); reforms such as sewers, factory laws and police (5.8, named as what "began to catch up"); Meiji Japan (5.6, one figure about women\'s wage work); immigration (Unit 6).',
          'Three myths, corrected on the retelling slide: "industry created social classes"; "in the 1800s women stopped working"; "city workers died at 25."',
          'Every picture in this deck is a real historical object or scene. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Industry rebuilt the ladder: a middle class rose beside landed families who kept power, a working class lived on wages, work left the home and split women\'s lives by class, and cities grew faster than they could house, clean or protect people.',
        avoid: 'Avoid teaching the reforms (factory laws, sewers, police, the later Reform Acts). They are 5.8\'s, and the old 5.9 pages ended on them.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · No Notes',
      title: 'Pull the last topics back from memory.',
      template: {
        questions: [
          { label: 'Topic 5.8', text: 'What did workers organize to get?' },
          { label: 'Topic 5.3', text: 'What changed for workers when spinning moved into the factory?' },
          { label: 'Topic 5.7', text: 'Why does the College Board say living standards rose "for some"?' }
        ],
        turn: 'Workers called for change because industry had changed their lives. Today: **what kind of society did industry make, and how much of the old one kept going?**'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          '5.8: conditions, hours, wages, the vote',
          '5.3: one building, the mill\'s hours',
          '5.7: many city workers stayed poor',
          'Bridge: what society did industry make?'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: better conditions, shorter hours, higher wages, the vote (5.8); everyone came to one building, at the hours the mill set, under an overseer (5.3); many city workers stayed poor, and growers far away did not share the gains (5.7).',
          'The bridge is 5.8\'s hand-off: industry had changed who worked, where people lived and how families got by. What kind of society did it make?',
          'Prompt 3 sets up "standards of living," the second half of today\'s objective.'
        ],
        ask: 'If many city workers stayed poor, who did gain?',
        listenFor: 'Owners, merchants, the people who ran the factories: today\'s middle class.',
        ap: 'Retrieval plus bridge: 5.8 asked who called for change; 5.9 asks what society the change made.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle',
      title: 'How did industry change who was on top, who did the work, and how people lived? What kept going?',
      subtitle: 'Manchester in 1852, its chimneys behind a country scene, as a watercolor painter showed it.',
      notes: {
        minutes: 1,
        keys: [
          'Wyld\'s Manchester, 1852, Royal Collection',
          'Old countryside in front, new chimneys behind',
          'A pretty view: not how workers lived',
          'Predict one change, one continuity'
        ],
        land: [
          'The picture is William Wyld\'s watercolor Manchester from Kersal Moor, signed and dated 1852, now in the Royal Collection (RCIN 920223). Queen Victoria had visited Manchester in October 1851. In front: a hillside with country people and goats. Behind: the town\'s church spires and factory chimneys under smoke.',
          'It sets the question because it holds both halves of the topic in one view: the old countryside and its people in front, the new industrial town behind.',
          'Sourcing caution: this is a romantic view painted for a royal collection, at a distance where no one can see a cellar or a cholera court. Ask what it leaves out.'
        ],
        ask: 'Predict one thing industry changed in people\'s lives, and one thing it did not.',
        listenFor: 'Changed: where people lived and worked. Kept going: some people were rich and most were not.'
      }
    },
    {
      phase: 'roadmap', kind: 'road-map', eyebrow: 'Today\'s Road Map',
      title: 'Where we are going today.',
      template: {
        question: 'How did industry change who was on top, who did the work, and how people lived? What kept going?',
        stops: [
          { label: 'I', text: 'Before: a ladder of land and birth' },
          { label: 'II', text: 'New classes, old families' },
          { label: 'III', text: 'Work and home, split by class' },
          { label: 'IV', text: 'Cities that could not keep up' },
          { label: 'V', text: 'Not only Britain: New York and 1900' },
          { label: '✓', text: 'Put it together: a new ladder, still a ladder', key: true }
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
          'Read the five headers aloud before the First & 10, so students know the story\'s shape before they meet its details. The headers are the briefing outline\'s, and every story slide\'s eyebrow names its section (I to V).',
          'The question at the top is the topic question: for each section, students watch for what changed and what kept going.'
        ],
        ask: 'Which section do you expect the biggest change in?',
        listenFor: 'Any reasoned guess; return to it at the retelling table.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10',
      title: 'Read with two questions in mind.',
      subtitle: 'For each part of society: what changed, and what kept going?',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-9-society-and-the-industrial-age-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read "A New Ladder" in class',
          'Four rows: top, work, women, cities',
          'Each row: changed and kept going',
          'Q3 is contextualization: Riis\'s room',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "A New Ladder" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who draw the four rows (who was on top, who did the work, women and children, where people lived) and fill both columns.',
          'Question 03 is the topic\'s 4.B practice: it asks students to place Riis\'s room inside the bigger story. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which row has the clearest continuity?',
        listenFor: 'Who was on top: landed families kept power. Or women: paid less, fewer rights.'
      }
    },
    {
      phase: 'ladder', kind: 'period-window', eyebrow: 'I · Before: A Ladder of Land and Birth',
      kc: 'Unit 5: Learning Objective J', title: 'The ladder was there before the factories.',
      footer: 'The College Board\'s question is about change to existing social hierarchies.',
      template: {
        periods: [
          { label: 'Before', when: '1750', text: 'Most people live in the countryside. Landed families are on top, by birth.', note: 'Families work together, on the farm or at home.' },
          { label: 'Turning point', when: '1750 to 1850', text: 'Factories, mines and towns pull people into wage work.', note: 'Work moves out of the home (Topic 5.3).' },
          { label: 'After', when: '1900', text: 'New rungs on the ladder, and people moved up and down it.', note: 'Still a ladder: rank did not disappear.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Social hierarchy = a ladder of rank',
          '1750: most people in the countryside',
          'Top: landed families, by inheritance',
          'Families worked together at home',
          'Industry rebuilt the ladder, did not end it'
        ],
        land: [
          'A social hierarchy is a ladder of rank: who is on top and who is below. The objective\'s word "existing" is the continuity: there was a ladder before industry.',
          'In 1750 most people in Britain, as almost everywhere, lived in the countryside (the 1851 census was the first to find a majority in towns). At the top were landowning families, the aristocracy and gentry, whose wealth and rank came from land they inherited. Below them were farmers, craftsmen and laborers.',
          'Most families worked together: women spun thread and children helped on the farm or at home. Topic 5.3 showed spinning moving into the factory.'
        ],
        ask: 'In 1750, how did a family get to the top of the ladder?',
        listenFor: 'Mostly by being born into it: land and titles were inherited.',
        ap: 'Continuity and Change starts with what was already true.'
      }
    },
    {
      phase: 'classes', kind: 'split-mirror', eyebrow: 'II · New Classes, Old Families · 1',
      kc: 'KC-5.1.VI.A', title: 'Two classes grew with industry.',
      footer: 'Both grew with industry. One rose by money and education; the other lived on wages.',
      template: {
        left: { name: 'Middle class' },
        right: { name: 'Industrial working class' },
        rows: [
          { label: 'Who', left: 'Factory owners, merchants, bankers, doctors, lawyers, managers, clerks', right: 'Mill, mine, dock and workshop workers' },
          { label: 'Their place came from', left: 'Money they made, education they paid for', right: 'Wages, with no land and no tools' },
          { label: 'A gain', left: 'Most men in the towns win the vote, 1832', right: 'Unions and parties (Topic 5.8)' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Middle class: owners to clerks',
          'Rank from money and education, not birth',
          'Working class: no land, no tools, wages',
          'Hours set by the employer',
          '1832: most middle-class men in towns vote'
        ],
        land: [
          'KC-5.1.VI.A names two new classes. The middle class: factory owners, merchants and bankers, and the people who ran things for them, from engineers, doctors and lawyers to managers and clerks. Their place came from money they made and the education they paid for, not from land or titles.',
          'The industrial working class: people who owned no land and no tools and lived on the wages they earned in mills, mines, docks and workshops, at the hours the employer set.',
          'The Reform Act of 1832 gave the vote, in the boroughs, to men occupying property worth £10 a year: in the National Archives\' words, "in effect most middle-class men gained the vote and some skilled craftsmen." Women were excluded by the act\'s own wording, and most working men stayed out until 1867 and 1884 (5.8\'s Reform Acts).',
          'The working class\'s own gains (unions, the Charter, parties) are 5.8\'s: name them, do not reteach them.'
        ],
        ask: 'What could a clerk have that a mill worker could not?',
        listenFor: 'Education, a salary, often the vote after 1832, hours not set by a machine.',
        ap: 'A change: new rungs on the ladder, defined by money and wages rather than land.'
      }
    },
    {
      phase: 'top', kind: 'continuity-change', eyebrow: 'II · New Classes, Old Families · 2',
      kc: 'KC-5.1.VI.A', title: 'New money rose. Old families stayed on top.',
      footer: 'The ladder had new rungs. It was still a ladder.',
      template: {
        date: '1750 to 1900',
        before: { tag: 'Before', items: ['Landed families rule, by birth', 'Wealth mostly comes from land'] },
        after: { tag: 'Changed', items: ['A middle class grows rich from business and professions', 'Most middle-class men in towns win the vote, 1832'] },
        continued: { tag: 'Kept going', items: ['Landed families keep land, titles and power', 'Prime minister in 1900: Lord Salisbury, a marquess', 'New money buys country houses and marries into the gentry'] }
      },
      notes: {
        minutes: 2,
        keys: [
          'Changed: middle class rich and voting',
          'Kept going: landed families keep power',
          'Salisbury, a marquess, PM 1895 to 1902',
          'New money copied the old',
          'Answer Checkpoint 1 part 2 here'
        ],
        land: [
          'The change: a middle class grew rich from business and the professions, and from 1832 most of its men in the towns could vote.',
          'The continuity: the landed families kept their land, their titles and much of their power. Robert Gascoyne-Cecil, the 3rd Marquess of Salisbury, was prime minister from 1895 to 1902, so in 1900. Historians of the landed class (Cannadine; F. M. L. Thompson) describe it as still dominant in wealth and politics until the 1880s.',
          'Rich middle-class families often bought country houses and married into the gentry: they climbed the old ladder rather than breaking it.',
          'This is the topic\'s first row: who was on top, what changed, what kept going.'
        ],
        ask: 'Did industry destroy the old top of society?',
        listenFor: 'No: it added a rich middle class beside the landed families, who kept much of their power.',
        ap: 'Continuity and Change: say both halves, and which was bigger for whom.'
      }
    },
    {
      phase: 'earners', kind: 'story-scene', eyebrow: 'III · Work and Home, Split by Class · 1',
      kc: 'KC-5.1.VI.B', title: 'Working-class families needed every wage.',
      footer: 'The College Board\'s words: they earned "to supplement their families\' income."',
      template: {
        caption: 'Sewing for pay at home, New York, about 1890',
        steps: [
          { label: 'Always', text: 'Women and children had always worked, at home and on the farm.' },
          { label: 'The need', key: true, text: 'One wage rarely paid the rent, so women and children **earned**.' },
          { label: 'Where', text: 'Textile mills, **domestic service**, sewing at home.' },
          { label: 'Pay', text: 'Usually less than men, mostly in lower-paid jobs.' },
          { label: 'Japan, 1900', text: 'About 62 percent of private factory workers were women.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Women always worked; now for wages, outside home',
          'The reason: the family needed the money',
          'Mills, domestic service, piecework at home',
          'Women paid less, mostly different jobs',
          'Japan 1900: about 62 percent women',
          'Picture: Riis, New York, about 1890'
        ],
        land: [
          'KC-5.1.VI.B, first half: women and often children in working class families typically held wage-earning jobs to supplement their families\' income. The cause is in the sentence: the family needed the money.',
          'Britain: an 1833 survey of factories (Mitchell\'s) found that females were a majority of the factory labor force (Burnette, EH.net). Domestic service was the largest single job for women; the 1851 figures suggest about 40 percent of women with a recorded occupation were in it.',
          'Pay: women were usually paid less than men. The evidence is that the gap came mostly from being given different, lower-paid jobs; whether women were paid less for the same job is disputed, so do not say "half pay for the same work."',
          'Japan: Tsurumi (Factory Girls, 1990): in 1900 women were 62 percent of the labor force in private factories, most of them young women in textile mills. Industry spread the pattern; Meiji policy itself is 5.6\'s.',
          'The picture: Jacob Riis, "Sewing pants for the trade in a Gotham Court \'flat\'," New York, about 1890 (Library of Congress). A woman and two girls sewing piecework at home: paid by the piece, inside a tenement. Riis posed and chose his scenes.'
        ],
        ask: 'Why did a working-class girl of twelve earn wages?',
        listenFor: 'Because her family could not pay rent and buy food on one wage.',
        ap: 'Change and continuity in one sentence: they kept working (continuity), but for wages, outside the family, at an employer\'s hours (change).'
      }
    },
    {
      phase: 'beeton', kind: 'source-quote', eyebrow: 'III · Work and Home, Split by Class · 2',
      kc: 'KC-5.1.VI.B', title: 'The middle-class wife, in a best-seller of 1861.',
      footer: 'Her "domestics" were servants: most of them working-class women.',
      template: {
        quote: 'As with the commander of an army, or the leader of any enterprise, so is it with the mistress of a house. ... so will her domestics follow in her path.',
        attribution: { author: 'Isabella Beeton', work: 'The Book of Household Management', year: '1861' },
        notice: 'Who gives the orders in this house, and who follows them?'
      },
      notes: {
        minutes: 2,
        keys: [
          'Beeton, 1861: guide for middle-class wives',
          'The home as her command, not idleness',
          'Her "domestics" = servants, working-class women',
          'One class\'s home ran on another\'s wages',
          'Separate spheres: an ideal that grew'
        ],
        land: [
          'Isabella Beeton, The Book of Household Management (London: S. O. Beeton, 1861; first published in monthly parts, 1859 to 1861), chapter I, paragraph 1, word for word. It was written for the wives of middle-class households.',
          'KC-5.1.VI.B, second half: middle-class women, whose families did not have the same economic demands, were increasingly limited to roles in the household or roles focused on child development. Beeton shows the ideal: the home as the wife\'s command.',
          'Running such a house was real work. Do not let students conclude that middle-class women did nothing.',
          'Her "domestics" were servants, most of them working-class women: the two halves of the Key Concept meet in one house.',
          'Historians call the idea "separate spheres" (Davidoff and Hall, Family Fortunes, 1987). Others (Vickery, 1993) warn that many women\'s lives never fit it; the CED\'s word "increasingly" makes the same point.'
        ],
        ask: 'Who gives the orders in this house, and who follows them?',
        listenFor: 'The mistress gives orders; servants, working-class women, follow them.',
        ap: 'A source for an ideal, not proof of how every family lived.'
      }
    },
    {
      phase: 'twohomes', kind: 'split-scenes', eyebrow: 'III · Work and Home, Split by Class · 3',
      kc: 'KC-5.1.VI.B', title: 'One industry, two women\'s lives.',
      footer: 'The College Board gives the reason for the split: money.',
      template: {
        left: { name: 'Working-class women', items: ['Earn wages for the family', 'Mills, service, piecework', 'Children often earn too'] },
        right: { name: 'Middle-class women', items: ['Family can live on one earner', 'Increasingly kept to the home', 'Run the house, raise the children'] },
        bothLabel: 'Kept going in both',
        both: ['Paid less than men', 'Fewer rights: a wife\'s property her husband\'s until 1870 and 1882']
      },
      notes: {
        minutes: 2,
        keys: [
          'Same industry, opposite effects by class',
          'Reason: money, in the CED\'s own words',
          'Both: paid less, fewer rights',
          'Property laws 1870 and 1882',
          '"Increasingly": an ideal that grew'
        ],
        land: [
          'The CED gives the cause: working-class families needed the wages ("to supplement their families\' income"), and middle-class families "did not have the same economic demands to satisfy."',
          'Continuity in both classes: women were paid less and had fewer rights than men. In England and Wales, under the old common law a married woman\'s property passed to her husband\'s control; the Married Women\'s Property Act of 1870 let her keep her earnings, and the Act of 1882 let women married from 1883 hold all their property as their own (UK Parliament, "Marriage: property and children"). Scotland had its own laws.',
          'Left picture: power-loom weaving in a cotton mill, an engraving after Thomas Allom, published in 1835 in Edward Baines\'s History of the Cotton Manufacture. Right picture: Currier & Ives, The Four Seasons of Life: Middle Age, a New York lithograph of about 1868 (Library of Congress): a father home from work, a mother with the children. Both are pictures made to show an industry or an ideal, not photographs.'
        ],
        ask: 'Why did the same industry push one group of women into wage work and keep another at home?',
        listenFor: 'Money: one family needed her wages, the other did not.',
        ap: 'Continuity and Change: a change that split by class, and a continuity they shared.'
      }
    },
    {
      phase: 'growth', kind: 'story-scene', eyebrow: 'IV · Cities That Could Not Keep Up · 1',
      kc: 'KC-5.1.VI.C', title: 'Manchester grew faster than anyone could build.',
      footer: 'The College Board\'s word is "rapid." Speed, not size, outran the town.',
      template: {
        caption: 'Manchester from Kersal Moor, 1852',
        steps: [
          { label: '1773', text: 'About **23,000** people, in a local count.' },
          { label: '1801', text: 'About **70,000**, at the first national census.' },
          { label: '1851', key: true, text: 'More than **300,000**.' },
          { label: '1851', text: 'For the first time, more than half the people of England and Wales live in towns.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Manchester: about 23,000 in 1773',
          'About 70,000 at the 1801 census',
          'More than 300,000 by 1851',
          '1851: towns pass half the population',
          'The problem is speed: "rapid" urbanization'
        ],
        land: [
          'Manchester: about 23,000 people in a local count of 1773 to 1774 (organized by John Whitaker\'s group); about 70,000 in the township at the first national census in 1801 (Manchester City Council\'s table: 70,409); more than 300,000 by 1851 (counting the borough; the township alone was under 200,000). The figures depend on the boundary, so the deck says "about" and "more than."',
          'The 1851 census was the first to record more than half the people of England and Wales living in towns (Davenport, Economic History Review 2020: "by 1851 over half the population lived in settlements of 2,500 or more"). A writer of the time called it "ten millions against ten millions": a narrow majority.',
          'The CED\'s word is "rapid." Growth this fast outran every system a town had.',
          'The picture is Wyld\'s 1852 watercolor again: the town\'s chimneys, a year after the census.'
        ],
        ask: 'Why does the speed of growth matter more than the size?',
        listenFor: 'Nobody could build houses, sewers and water pipes as fast as people arrived.',
        ap: 'Contextualization starts here: every challenge on the next slide sits inside this growth.'
      }
    },
    {
      phase: 'challenges', kind: 'branch-tree', eyebrow: 'IV · Cities That Could Not Keep Up · 2',
      kc: 'KC-5.1.VI.C', title: 'Six challenges, one cause: growth too fast.',
      footer: 'The College Board names all six. "At times": not every town, not every year.',
      template: {
        claimLabel: 'The cause',
        claim: '**Rapid urbanization** outran the cities\' homes, pipes and police.',
        branches: [
          { label: 'The environment', note: 'Smoke in the air, waste in the water', items: ['Pollution', 'Insufficient infrastructure'] },
          { label: 'Homes and money', note: 'Wages that barely paid the rent', items: ['Poverty', 'Housing shortages'] },
          { label: 'Health and safety', note: 'Disease and disorder in crowded streets', items: ['Public health crises', 'Increased crime'] }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'All six are the CED\'s list',
          'Pollution: coal smoke, rivers of waste',
          'Infrastructure: no sewers, water, rubbish collection',
          'Housing: families in one room or cellar',
          'Crime charges rose to early 1840s',
          'More police also meant more charges'
        ],
        land: [
          'KC-5.1.VI.C lists six: pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth. The three branches are a teaching sort, not the CED\'s.',
          'Pollution: coal smoke over the towns and waste in the rivers (Engels on the Irk, 1845, from 5.8). Infrastructure: new streets with no sewers, clean water or rubbish collection. Housing: whole families in one room or a damp cellar.',
          'Crime, with care: the number of people charged with serious crimes in England and Wales rose to peaks in 1842 and 1848 and then fell (Gatrell and Hadden, 1972). Historians warn these numbers measure prosecutions, which grew as towns set up police forces (the Digital Panopticon). Never say "crime exploded."',
          '"At times" is the CED\'s qualifier: not every town, not every year.'
        ],
        ask: 'Which two challenges feed each other most?',
        listenFor: 'Housing shortages and public health: crowded rooms with no clean water spread disease. Or poverty and housing.',
        ap: 'Name the cause of all six: the speed of growth.'
      }
    },
    {
      phase: 'health', kind: 'story-scene', eyebrow: 'IV · Cities That Could Not Keep Up · 3',
      kc: 'KC-5.1.VI.C', title: 'What crowded cities did to health and life.',
      footer: 'Low averages are pulled down by the many babies who died. Adults lived much longer.',
      template: {
        caption: 'Deaths around one pump, London, 1854',
        steps: [
          { label: '1831', text: 'Cholera, spread by dirty water, reaches Britain.' },
          { label: '1848 to 1849', text: 'It kills about 53,000 people in England and Wales.' },
          { label: '1854', text: 'John Snow maps London\'s deaths around **one water pump**.' },
          { label: '1840s', key: true, text: 'A Manchester baby could expect about **25 to 28 years**; England and Wales, about 40 to 42.' }
        ]
      },
      notes: {
        minutes: 3,
        keys: [
          'Cholera arrives 1831',
          'About 53,000 dead, 1848 to 1849',
          'Snow 1854: deaths cluster at one pump',
          'Manchester 1840s: about 25 to 28 years',
          'Nation: about 40 to 42',
          'Low averages: babies who died, not adults'
        ],
        land: [
          'Cholera reached Britain in 1831 (first cases at Sunderland). In 1848 and 1849 about 53,000 cholera deaths were registered in England and Wales (Science Museum; Proceedings of the Royal Society of Medicine, 1948).',
          'In 1854 the physician John Snow mapped cholera deaths around Broad Street, Soho, and traced them to one public water pump; the map here is from the Cholera Inquiry Committee\'s report of 1855 (Wellcome Collection, public domain). Each black bar is a death. Death counts for the outbreak vary by source (about 500 to 600 in ten days), so the deck gives none.',
          'Life expectancy at birth: Manchester about 25 (Szreter and Mooney, from the Registrar-General\'s life table for about 1841) to 28 (Davenport, 2020, for 1838 to 1844, the whole district); England and Wales in 1841, 40 for males and 42 for females (ONS).',
          'Read it with care: these averages are pulled down by the many babies and young children who died. A Manchester worker who reached twenty could expect to live decades more. The gap between city and nation is the point, not "workers died at 25." (Chadwick\'s 1842 average age at death, the famous "17" for Manchester laborers, is a different and more misleading measure; do not use it.)'
        ],
        ask: 'If the average was 25, did most Manchester adults die at 25?',
        listenFor: 'No: many babies died, which pulls the average down. But city lives were shorter than country lives.',
        ap: 'Standards of living, the objective\'s second half: health and length of life fell for many in the fastest-growing cities.'
      }
    },
    {
      phase: 'newyork', kind: 'story-scene', eyebrow: 'V · Not Only Britain · New York, 1890',
      kc: 'KC-5.1.VI.C', title: 'The same story in New York.',
      footer: 'The College Board ties these challenges to "global capitalism," not to one country.',
      template: {
        caption: 'Lodgers in a Bayard Street tenement, about 1890',
        steps: [
          { label: '1850 to 1890', text: 'Manhattan grows from about 515,000 people to about **1.4 million**.' },
          { label: 'Who came', text: 'Workers from the countryside and from abroad, for jobs.' },
          { label: '1890', key: true, text: 'Riis: "three-fourths of its people live in the **tenements**."' },
          { label: 'One room', text: '"Not thirteen feet either way": twelve people, at "five cents a spot."' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Manhattan: 515,000 (1850) to 1.4 million (1890)',
          'Riis, How the Other Half Lives, 1890',
          '"Three-fourths ... live in the tenements"',
          'Twelve people, under thirteen feet square',
          'Flash photo on a midnight police visit',
          'Riis wrote prejudiced lines about immigrants'
        ],
        land: [
          'Manhattan: 515,547 people in 1850 and 1,441,216 in 1890 (U.S. census, as tabled by Demographia). Greater New York, with Brooklyn, was formed only in 1898.',
          'Jacob Riis, How the Other Half Lives (New York: Scribner\'s, 1890), chapter 1: "To-day three-fourths of its people live in the tenements, and the nineteenth century drift of the population to the cities is sending ever-increasing multitudes to crowd them."',
          'Chapter 6: "In a room not thirteen feet either way slept twelve men and women, two or three in bunks set in a sort of alcove, the rest on the floor ... Most of the men were lodgers, who slept there for five cents a spot." It was photographed "by flash-light" on a police visit after midnight; the book captions it "Lodgers in a crowded Bayard Street tenement—\'Five cents a spot.\'" (Library of Congress copy, about 1889 to 1890.)',
          'Sourcing caution: Riis was a reformer writing to shock middle-class readers, and his book carries prejudiced lines about immigrant groups. His numbers and scenes are evidence of crowding; his judgments of people are evidence of his own point of view.',
          'Immigration is Unit 6\'s; name it as who filled the tenements, do not teach it.'
        ],
        ask: 'What does this room have in common with a Manchester cellar of the 1840s?',
        listenFor: 'Too many people, too little space, rent they could barely pay, in a city growing faster than housing.',
        ap: 'KC-5.1.VI.C says "global capitalism": the pattern is not British, it is industrial.'
      }
    },
    {
      phase: 'context', kind: 'sentence-frame', eyebrow: 'V · Not Only Britain · Contextualize It',
      kc: 'KC-5.1.VI.C', title: 'Contextualize: put one scene inside the bigger story.',
      footer: 'The skill is 4.B: one specific thing, the bigger story it sits in, and how they connect.',
      template: {
        frame: '{{A specific thing}} happened inside {{a bigger historical story}}: {{how the bigger story explains it}}.',
        exampleLabel: 'Filled in',
        example: '**A Manchester family living in one damp cellar room in the 1840s** happened inside **the rapid growth of industrial towns**: **Manchester grew from about 70,000 people in 1801 to more than 300,000 by 1851, faster than anyone built houses, so every room and cellar was rented out**.'
      },
      notes: {
        minutes: 3,
        keys: [
          'Model 4.B out loud',
          'Modeled on a Manchester cellar, 1840s',
          'Bigger story: towns outgrowing housing',
          'Link: arrivals faster than building',
          'Students do Riis\'s room themselves',
          'Skill Builder practices it next'
        ],
        land: [
          'This is the topic\'s suggested skill, 4.B Contextualization: "Explain how a specific historical development or process is situated within a broader historical context." Model it out loud with the frame.',
          'Three moves: name the specific thing (a family in one Manchester cellar room in the 1840s); name the bigger story (industrial towns growing faster than they could house people); explain the link (arrivals outran building, so every room and cellar was rented). The model is deliberately not Riis\'s room: students contextualize that themselves in the Skill Builder, the First & 10\'s Question 3 and Checkpoint 2, so do not fill in the frame for Riis aloud.',
          'A context is not just "before this." It has to explain why the specific thing happened.',
          'The Skill Builder (Module 05) practices the same move on Riis\'s Bayard Street room, with a short model on an everyday example first.'
        ],
        ask: 'Which part of this sentence would change if the specific thing were a New York tenement in 1890, and which would stay?',
        listenFor: 'The specific thing and its numbers change; the bigger story, cities growing faster than housing, stays. (Do not finish the Riis sentence for them.)',
        ap: 'Contextualization 4.B, modeled once before students do it alone.'
      }
    },
    {
      phase: 'by1900', kind: 'story-scene', eyebrow: 'V · Not Only Britain · By 1900',
      kc: 'KC-5.1.VI.C', title: 'By 1900, cities were catching up, slowly.',
      footer: 'Standards of living rose for some, and fell, for a time, for many.',
      template: {
        caption: 'East Fifth Street, New York, about 1890',
        steps: [
          { label: 'Catching up', text: 'Sewers, clean water and police reach more streets (Topic 5.8).' },
          { label: 'Health', text: 'Death rates begin to fall later in the century.' },
          { label: 'Wages', text: 'Wages rise faster after about 1860.' },
          { label: 'Kept going', key: true, text: 'In 1900 many city workers were still poor.' }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Reforms are 5.8\'s: name, don\'t teach',
          'Death rates fall later in the century',
          'Wages faster after about 1860 (5.7)',
          'Many still poor in 1900',
          'Picture: rubbish no one collected'
        ],
        land: [
          'Later in the century cities built sewers and water systems and set up police forces (5.8 has London\'s sewers after 1858). Life expectancy in England and Wales began a lasting rise from the 1870s (ONS life tables). 5.7 taught that working families\' standard of living rose by under 15 percent from the 1780s to the 1850s in one careful estimate, and much faster from about 1860 to 1900.',
          'Continuity: in 1900 many city workers were still poor. The objective\'s "standards of living" moved differently for different classes and at different times.',
          'The picture: Jacob Riis, "Garbage in the streets, East Fifth Street, N.Y.C. tenement area," about 1890 (Library of Congress): infrastructure that had not caught up.'
        ],
        ask: 'By 1900, what had changed in the city, and what kept going?',
        listenFor: 'Changed: sewers, water, falling death rates, rising wages. Kept going: poverty for many.',
        ap: 'Continuity and Change ends with a judgment: real change, unevenly shared.'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'split-matrix', eyebrow: 'Put It Together · The Whole Topic',
      title: 'A new ladder, still a ladder.',
      template: {
        columns: [{ name: 'Before industry' }, { name: 'What changed' }, { name: 'What kept going' }],
        rows: [
          { label: 'Who was on top', cells: ['Landed families, by birth', 'A middle class rose by money and education', 'Landed families kept land and power'] },
          { label: 'Who did the work', cells: ['Farm and craft families', 'A working class lived on wages', 'Most worked hard for little'] },
          { label: 'Women and children', cells: ['Worked in the family household', 'Working-class women earned; middle-class women kept home', 'Women paid less, fewer rights'] },
          { label: 'Where people lived', cells: ['Mostly the countryside', 'Fast cities: smoke, crowding, disease', 'Poverty and disease, made worse'] }
        ],
        result: { label: 'So', text: 'New classes. Split homes. Crowded cities. A new ladder, still a ladder.' }
      },
      notes: {
        minutes: 5,
        keys: [
          'Show it, hide it, redraw from memory',
          'Rows = parts of society; columns = the move',
          '"Changed" column = the three Key Concepts',
          '"Kept going" = the objective\'s "existing"',
          'Correct the three myths from these rows'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the twelve cells from memory.',
          'Reading down "What changed" gives the three Key Concepts (VI.A in rows 1 and 2, VI.B in row 3, VI.C in row 4). Reading down "What kept going" gives the objective\'s "existing" hierarchies.',
          'The three myths, corrected from these rows. "Industry created social classes": row 1, the ladder was there before and landed families stayed near the top; the opposite mistake is "nothing changed," and row 1\'s middle column answers it. "In the 1800s women stopped working": row 3, working-class women and children earned wages, and middle-class women ran households; the opposite mistake is "all women worked in factories." "City workers died at 25": the averages are pulled down by the many babies who died; the opposite mistake is "cities were as healthy as the countryside."'
        ],
        ask: 'Which row has the biggest change, and which the biggest continuity?',
        listenFor: 'Biggest change: where people lived. Biggest continuity: who was on top, or women\'s lower place.'
      }
    },
    {
      phase: 'worktime', kind: 'launch-pad', eyebrow: 'Work Time · Modules 05, 06, 10',
      title: 'Now you do the history.',
      footer: 'In this order. Checkpoint 2 not finished in class? It is homework.',
      template: {
        modules: [
          { code: 'Module 05', name: 'Skill Builder', note: 'Contextualize Riis\'s New York room.', url: '../unit-5/lesson-5-9-society-and-the-industrial-age.html#modules' },
          { code: 'Module 06', name: 'Checkpoint 1', note: 'On your own, no coach.', url: '../unit-5/lesson-5-9-society-and-the-industrial-age.html#modules' },
          { code: 'Module 10', name: 'Checkpoint 2', note: 'Draft, work with Socrates, revise.', url: '../unit-5/lesson-5-9-society-and-the-industrial-age.html#modules' }
        ]
      },
      notes: {
        minutes: 35,
        keys: [
          'All three required today, in order',
          'Skill Builder: contextualize Riis\'s room',
          'Checkpoint 1: no coach',
          'Checkpoint 2 unfinished = homework',
          'Early finishers: the Housing Commission room',
          'Give feedback in the room'
        ],
        land: [
          'Modules 05, 06 and 10 are required today, with the First & 10 (chosen in the build; Jeff can overrule). Each button opens its module.',
          'The Skill Builder (Module 05) practices 4.B Contextualization: a short model on an everyday example, then Riis\'s Bayard Street room and his 1890 words. Students name the specific scene, the bigger story and the link.',
          'Checkpoint 1 (Module 06), with no coach, asks for one change and one continuity in who was on top, what the two new classes were, and why working-class and middle-class women\'s lives split. Give feedback in the room.',
          'Checkpoint 2 (Module 10) asks for three of the six urban challenges, why rapid growth caused them, one effect on standards of living, and one change and one continuity in industrial society. Socrates is told the skill is Continuity and Change, so it will push for both halves. The revised answer in the box is what goes to Canvas.',
          'If a student needs the claim shape, give it aloud: "Industry changed ___ because ___, but ___ kept going." It is a frame, not a model answer.',
          'Early finishers: the BeInTheRoom (Module 09), the 1884 Housing Commission, or the Evidence Lab (Module 07).'
        ],
        ask: 'Does your answer say what changed, what kept going, and why?',
        listenFor: 'Checkpoint 1: the middle class and 1832, Salisbury, and money as the reason for the split. Checkpoint 2: three challenges tied to speed, life expectancy, and a change and a continuity.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'Industry did not end the old ladder. It rebuilt it.',
      subtitle: 'Next: industry changed almost everything in a hundred and fifty years. Or did it? How much did it really change the world?',
      notes: {
        minutes: 2,
        keys: [
          'Riis\'s lodgers, 1890: the spine in one room',
          'A rebuilt ladder, not a new world',
          'The sentence answers objective J',
          'Hand off to 5.10: how much changed?'
        ],
        land: [
          'The picture returns to Riis\'s Bayard Street lodgers (about 1890): a city that grew faster than it could house people, forty years after Manchester and an ocean away.',
          'This sentence answers learning objective J: industry changed social hierarchies (new classes, women\'s lives split by class) and standards of living (crowded, unhealthy cities for many), but it rebuilt a ladder that already existed.',
          'Leave the 5.10 question open; do not answer it. Topic 5.10 asks students to weigh the whole unit: the extent to which industrialization brought change from 1750 to 1900.'
        ],
        ask: 'What is the one-sentence answer to Topic 5.9?',
        listenFor: 'Industry rebuilt the ladder: a middle class rose beside landed families who kept power, a working class lived on wages, women\'s lives split by class, and cities grew faster than they could cope.'
      }
    }
  ]
};
