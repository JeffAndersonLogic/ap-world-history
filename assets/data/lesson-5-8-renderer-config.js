(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.1.V.D",
      "theme": "Social Interactions and Organization",
      "text": "In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.V.A",
      "theme": "Social Interactions and Organization",
      "text": "In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3.IV.A.ii",
      "theme": "Social Interactions and Organization",
      "text": "Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.V.B",
      "theme": "Social Interactions and Organization",
      "text": "In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Four Reactions',
    embedUrl: 'first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Industrial worker organization', detail: 'Trade unions, strikes, and worker parties developed where factory labor concentrated workers with shared grievances. Their effectiveness depended on legal recognition, collective discipline, and the willingness of governments or employers to negotiate rather than repress.' },
      { label: 'Reform inside industrial states', detail: 'Factory laws, public education, sanitation, housing reform, and urban infrastructure were attempts to reduce industrial social costs without abandoning capitalism. Reform often combined humanitarian motives with fear of unrest and demand for healthier, more disciplined workers.' },
      { label: 'Socialist and communist alternatives', detail: 'Marxist and socialist movements argued that class inequality was produced by ownership of the means of production. They differed from liberal reformers by questioning whether private industrial capitalism could be fixed at all.' },
      { label: 'Ottoman and Qing modernization', detail: 'Industrial military pressure pushed Ottoman and Qing leaders toward military, administrative, technological, and educational reform. Tanzimat and Self-Strengthening efforts show both the urgency of modernization and the limits imposed by elite resistance, fiscal weakness, and foreign pressure.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-pullman-strike-hearing.html',
    desc: "Join the 1894 Pullman Strike hearing and weigh collective action, company-town power, federal injunctions, and labor reform."
  };

  lesson.skillBuilder = {
    label: 'Comparison and causation practice',
    title: 'Four Ways to React to Industrial Disruption',
    intro: 'Topic 5.8 makes more sense when responses are sorted by what they were trying to change: workplace bargaining power, social conditions, the capitalist system itself, or the economic-military weakness of a state.',
    steps: [
      { label: 'Workers organize', text: 'Explain how unions, strikes, or political movements converted individual grievances into collective leverage. Use a named labor event or organization.' },
      { label: 'Reformers regulate', text: 'Connect one industrial problem—child labor, disease, illiteracy, overcrowding—to a specific political, educational, public-health, or urban reform.' },
      { label: 'Socialists challenge capitalism', text: 'Explain the Marxist diagnosis of class conflict and distinguish revolutionary socialism/communism from reforms that leave private capitalism in place.' },
      { label: 'States modernize', text: 'Compare Ottoman and Qing responses to industrial powers. Identify what each tried to modernize and explain how elite resistance or foreign pressure limited reform.' }
    ],
    prompt: 'Choose TWO different reactions to industrialization from worker organization, social reform, socialist/communist ideology, or Ottoman/Qing modernization. Explain the problem each response addressed, the mechanism it used, and one result or limit.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Organize and Reform',
      subtitle: 'Checks Learning Targets 1–2 — worker organization and reform inside industrial societies.',
      cardDesc: 'Unions, strikes, labor parties, factory law, education, sanitation, and urban reform.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how industrial workers used collective organization to improve their position. Use at least ONE specific union, strike, or political movement and explain how employers or governments responded. Then explain ONE political, social, educational, public-health, or urban reform and connect it to the specific industrial problem it was designed to address.',
      responseType: 'Checkpoint 1',
      terms: ['trade union', 'collective bargaining', 'strike', 'Chartism', 'Great Railroad Strike', 'Haymarket', 'Pullman', 'Factory Act', 'public education', 'sanitation', 'public health', 'urban reform'],
      focus: ['Use a specific worker organization or labor conflict.', 'Explain how collective action changed bargaining or political pressure.', 'Connect one named reform to a specific industrial problem.']
    },
    {
      title: 'Checkpoint 2: Replace or Modernize?',
      subtitle: 'Checks Learning Targets 3–4 — socialism/communism and Ottoman/Qing modernization.',
      cardDesc: 'Marx, class conflict, socialism, communism, Tanzimat, Self-Strengthening, and elite resistance.',
      learningTargets: [lesson.learningTargets[2].target, lesson.learningTargets[3].target],
      successCriteria: [lesson.successCriteria[2].criteria, lesson.successCriteria[3].criteria],
      prompt: 'First explain why Marx and other socialists believed industrial capitalism produced structural class conflict, and distinguish a socialist/communist alternative from reforming capitalism. Then compare ONE Ottoman modernization effort with ONE Qing modernization effort. Explain the industrial or military pressure each state faced and one reason reform was limited or resisted.',
      responseType: 'Checkpoint 2',
      skill: 'Comparison and causation',
      terms: ['Karl Marx', 'socialism', 'communism', 'class conflict', 'means of production', 'Tanzimat', 'Ottoman Empire', 'Self-Strengthening Movement', 'Qing China', 'modernization', 'elite resistance'],
      focus: ['Explain the Marxist/socialist critique, not just define socialism.', 'Use one specific Ottoman and one specific Qing reform effort.', 'Explain a concrete source of resistance or limitation in each modernization effort.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.',
    prompt: 'Evaluate reactions to industrial capitalism. Use at least two cards representing different responses—revolutionary, union, reformist, or state welfare—and explain what problem each response identified.'
  };

  lesson.images = [
    {
      title: 'Responses to industrial capitalism',
      url: '../assets/images/instructional-maps/topic-5-8.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-5-8.svg',
      caption: 'BeHistorical reference map. Secondary geographic reconstruction of labor movements, reform legislation and socialist organization.',
      prompt: 'NOTICE which responses appear where. INFER what conditions a reform response needs that a revolutionary one does not. What does the map not show about which response workers preferred?'
    },
    {
      title: 'Communist Manifesto',
      label: 'Primary-source excerpt · Marx and Engels, 1848',
      sourceText: [
        '“Workers of the world, unite!”',
        'Class conflict is presented as the engine of history.'
      ],
      caption: 'Published in 1848, the year revolutions broke out across Europe, by two men in their twenties and thirties.',
      prompt: 'What diagnosis of industrial society is embedded in this language? What would you need to show that workers actually accepted it?'
    },
    {
      title: 'Factory Act of 1833',
      label: 'Legal record · Britain',
      sourceText: [
        'Restricted factory work by young children.',
        'Created inspectors to enforce parts of the law.'
      ],
      caption: 'The law, and the inspectors: a state taking responsibility for conditions inside private workplaces.',
      prompt: 'What does regulation suggest about changing ideas of state responsibility? What labor problems remained outside the law?'
    },
    {
      title: 'The Chartist meeting at Kennington Common, 1848',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg',
      caption: 'A daguerreotype of the Chartist gathering of 10 April 1848, one of the earliest photographs of a crowd. The Chartists were demanding the vote for working men.',
      prompt: 'NOTICE how many people are present and how they are dressed. INFER what kind of movement this was and who was in it. The photographer was working for the Crown: how does knowing that change how you read the picture?'
    },
    {
      title: '“Capital and Labour”, Punch, 1843',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punch_1843_-_Reichtum_und_Armut.png?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Punch_1843_-_Reichtum_und_Armut.png',
      caption: 'R. J. Hamerton in Punch, July to December 1843, page 49, contrasting a wealthy household above ground with the mine workings beneath it. Published the year after the Mines Act barred women and young children underground.',
      prompt: 'NOTICE what is happening in the upper half and the lower half, and how the two are joined. INFER the argument the cartoonist is making about where wealth comes from. What does a satirical magazine tell you about its readers as well as its subject?'
    }
  ];

})();
