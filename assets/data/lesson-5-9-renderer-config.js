(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  // ── CED key concepts, VERBATIM (config wins over data file) ──
  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.1.VI.A',
      theme: 'Social Interactions and Organization',
      text: 'New social classes, including the middle class and the industrial working class, developed.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.B',
      theme: 'Social Interactions and Organization',
      text: 'While women and often children in working-class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.C',
      theme: 'Social Interactions and Organization',
      text: 'The rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: A New Kind of Society',
    embedUrl: 'first-and-10-topic-5-9-society-and-the-industrial-age-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.9 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Where industrial cities grew', detail: 'Industrial cities clustered where the factory system was possible, near coal, water power, rivers, and ports. Britain industrialized first (Manchester, Birmingham, Leeds, Glasgow), followed by continental Europe (the Ruhr, northern France, Belgium) and the United States (the Northeast and Great Lakes). The geography of industry, not population alone, determined where the new urban society took shape.' },
      { label: 'Class geography within the city', detail: 'The new class structure was written into the urban map. Working-class families lived in dense housing packed close to the factories and mills where they worked. The growing middle class, able to afford it, increasingly moved to cleaner neighborhoods and, later, suburbs at the edges, separated from the smoke and crowding. The same city contained sharply different standards of living within a short walk of each other.' },
      { label: 'Rural-to-urban migration', detail: 'The demand for factory labor pulled a massive migration from the countryside into the cities. This migration is what made urbanization "rapid", and rapid growth, more than urban life itself, is what overwhelmed cities. Housing, water, and sanitation were built (when they were built at all) for far smaller populations.' },
      { label: 'The geography of public health', detail: 'The challenges the CED names were concentrated in the overcrowded, poorly drained working-class districts: contaminated water and absent sewers turned dense neighborhoods into corridors for cholera and typhoid. Reform, sewers, clean water, housing codes, arrived unevenly and usually late, so the gap in life expectancy between rich and poor districts could be stark.' }
    ]
  };

  // ── Module-card images. INDUSTRIAL-THEMED CANDIDATES; verified/falled-back in Step 8. ──
  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-sanitary-board.html',
    desc: "Join Manchester’s 1842 sanitary board and decide how public infrastructure, housing protections, taxes, and industrial interests should respond to urban disease."
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: How Industrialization Reshaped Society',
    intro: 'Learning Objective J is a causation objective: "Explain how industrialization caused change in existing social hierarchies and standards of living." The most common AP error is listing effects without explaining the mechanism that connects cause to effect. This builder walks the chain from the single cause, industrialization, to its distinct social effects.',
    steps: [
      { label: 'Name the cause and a first-order effect', text: 'Cause: industrialization, the factory system, wage labor, and the concentration of capital. First-order effect: a new class structure. The middle class formed from those whose wealth came from business, skill, and salaries (owners, merchants, professionals); the industrial working class formed from those who sold their labor for wages. The mechanism: factory production rewarded capital and management on one side and created mass wage employment on the other, splitting society along a new economic line rather than the old line of land and birth.' },
      { label: 'Trace a divergent effect by class', text: 'Same cause, different effect depending on class. In working-class families, low wages meant the family needed every earner, so women and children entered wage labor. In middle-class families, a single salary was enough, and that economic fact hardened into the ideology of "separate spheres," confining middle-class women to the household. The mechanism is economic: the family\'s need (or lack of need) for additional income drove women in opposite directions across the class line.' },
      { label: 'Write the synthesis', text: 'Synthesis: industrialization caused change in BOTH social hierarchies (a new middle class and working class) AND standards of living (improved for some, degraded for others), and it did so through identifiable mechanisms. Rapid urbanization, itself caused by the migration of workers to factory cities, then produced the cluster of urban challenges (pollution, poverty, crime, public health crises, housing shortages, weak infrastructure) because city growth outpaced the capacity to plan, house, and sanitize. A strong causation answer names the mechanism at each link, not just the outcome.' }
    ],
    prompt: 'In 3–4 sentences, explain how industrialization caused change in social hierarchies AND standards of living. Name the cause, trace it to at least two distinct effects (one on social class, and one on either gender/family roles or urban conditions), and explain the MECHANISM that connects cause to effect at each step.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: New Social Classes — Causes',
      subtitle: 'Checks Learning Target 1 — the development of the middle class and the industrial working class.',
      cardDesc: 'How industrialization created a new middle class and a new industrial working class, and what made each new.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Industrialization reorganized society into new classes. In a well-developed paragraph, explain how industrialization caused the development of a new middle class AND a new industrial working class. Be specific about what made each class new, that is, how it differed from the older social order based on land and birth. Identify at least one defining characteristic of each class and explain where its members got their status or income.',
      responseType: 'Checkpoint 1',
      terms: ['middle class', 'industrial working class', 'bourgeoisie', 'proletariat', 'wage labor', 'factory system', 'social hierarchy', 'standard of living'],
      focus: ['Explain how industrialization created two new classes, and what made them new vs. the old land-and-birth order.', 'Identify a defining characteristic of the middle class and of the industrial working class.', 'Be specific about where each class\'s status or income came from.']
    },
    {
      title: 'Checkpoint 2: Urban Challenges and Gender Roles — Effects',
      subtitle: 'Checks Learning Targets 2 & 3 — gender/family roles and the challenges of rapid urbanization.',
      cardDesc: 'How industrialization changed women\'s roles across classes and produced the challenges of the industrial city.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Industrialization changed how and where people lived. In a developed response, explain how industrialization changed standards of living and social roles in this period. Address BOTH: (1) at least two challenges that rapid urbanization created for city populations, explaining WHY rapid growth produced each one; and (2) how the household and economic roles of women differed between working-class and middle-class families, and what economic difference caused that divergence. Use specific evidence to support each point.',
      responseType: 'Checkpoint 2',
      terms: ['urbanization', 'tenement', 'cholera', 'typhoid', 'public health', 'infrastructure', 'separate spheres', 'domesticity', 'wage-earning', 'standard of living'],
      focus: ['Explain two challenges of rapid urbanization AND why rapid growth caused each.', 'Contrast working-class and middle-class women\'s roles and the economic reason behind the difference.', 'Support both parts with specific evidence.']
    }
  ];
})();
