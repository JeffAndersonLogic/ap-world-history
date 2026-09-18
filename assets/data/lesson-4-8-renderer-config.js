(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Unit 4: Learning Objective N',
      theme: 'Learning Objective',
      text: 'Explain how economic developments from 1450 to 1750 affected social structures over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV',
      theme: 'Economic Systems',
      text: 'Global circulation of goods and silver expanded while regional Afro-Eurasian markets continued.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II',
      theme: 'Economic Systems',
      text: 'Growing global demand intensified labor, expanded plantations, and contributed to the Atlantic slave trade.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.A',
      theme: 'Economic Systems',
      text: 'Peasant and artisan labor continued and intensified in many regions.',
      illustrativeExamples: ['Western Europe wool and linen', 'India cotton', 'China silk']
    },
    {
      code: 'KC-4.2.II.C',
      theme: 'Social Interactions and Organization',
      text: 'Plantation growth increased demand for enslaved labor and produced demographic, social, and cultural change.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.D',
      theme: 'Economic Systems',
      text: 'Colonial American economies used existing labor systems and introduced new forms including chattel slavery, indentured servitude, encomienda, and hacienda.',
      illustrativeExamples: ['Incan mit’a']
    },
    {
      code: 'KC-4.2.III.A',
      theme: 'Social Interactions and Organization',
      text: 'Imperial conquest and widening economic opportunity contributed to new political and economic elites.',
      illustrativeExamples: ['Casta system']
    },
    {
      code: 'KC-4.2.III.B',
      theme: 'Social Interactions and Organization',
      text: 'The power of existing political and economic elites fluctuated as rulers centralized power.',
      illustrativeExamples: ['Ottoman timars', 'Russian boyars', 'European nobility']
    },
    {
      code: 'KC-4.2.III.C',
      theme: 'Social Interactions and Organization',
      text: 'Gender and family structures changed in some regions, including demographic changes in Africa associated with the trade of enslaved persons.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Connected World',
    embedUrl: 'first-and-10-topic-4-8-continuity-and-change-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Silver and state revenue', detail: 'American silver linked coerced mining labor to imperial finance and global exchange. Track how extraction concentrated wealth while increasing pressure on indigenous labor communities.' },
      { label: 'Plantation zones', detail: 'Sugar and other plantation commodities tied Atlantic demand to expanding chattel slavery. The economic geography of plantations became a social geography of racialized status and forced migration.' },
      { label: 'Manufacturing regions', detail: 'Indian cotton, Chinese silk, and European wool and linen show a major continuity: peasant and artisan labor often intensified rather than disappearing as global demand grew.' },
      { label: 'Social-structure takeaway', detail: 'Economic integration did not produce one universal social outcome. It expanded some old labor systems, created or intensified others, shifted elite power, and altered demographic and family patterns differently by region.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: "Trade silk for silver as a Chinese Sangleys merchant in Manila, debate the global price revolution with a Spanish royal treasurer in Seville, or trace the long-term effects of the Columbian Exchange across three continents."
  };

  lesson.skillBuilder = {
    label: 'CCOT and causation practice',
    title: 'From Economic Change to Social Structure',
    intro: 'Topic 4.8 asks a specific synthesis question: how did economic developments affect social structures over time? A strong answer connects an economic development to a social mechanism, then weighs that change against a meaningful continuity.',
    steps: [
      { label: 'Start with the economic development', text: 'Choose a development such as plantation expansion, silver extraction, mercantilism, chartered companies, or intensified textile production. State what changed economically before describing the social effect.' },
      { label: 'Explain the social mechanism', text: 'Show how the development changed labor demand, legal status, wealth, family patterns, or elite power. Example: plantation demand increased the scale of Atlantic chattel slavery, which made ancestry and enslaved status more tightly connected in colonial societies.' },
      { label: 'Add a continuity', text: 'Identify something that persisted, such as peasant/artisan production, older forms of coerced labor, or existing elites who adapted to new states. Explain why the economic system still depended on that continuity.' },
      { label: 'Make the degree claim', text: 'Finish with a defensible CCOT judgment about social structures: substantial change in some regions and categories, alongside persistent labor and elite structures elsewhere.' }
    ],
    prompt: 'Explain how one economic development from 1450 to 1750 affected a social structure. Then identify one meaningful continuity in social structure and explain why it persisted. Use specific Unit 4 evidence for both.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Economic Development -> Social Consequence',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Connect economic change to labor, hierarchy, elite power, or family structure.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Choose TWO economic developments from c. 1450–c. 1750, such as plantation growth, silver extraction, mercantilism, or intensified textile production. For each, explain one specific effect on social structure. Your two effects must come from different categories such as labor status, racial/casta hierarchy, elite power, or gender/family patterns.',
      responseType: 'Checkpoint 1',
      terms: ['plantation economy', 'chattel slavery', 'mit’a', 'encomienda', 'hacienda', 'Potosí', 'mercantilism', 'artisan labor', 'casta', 'elites', 'gender', 'family'],
      focus: ['Name two specific economic developments.', 'Explain the mechanism connecting each economic development to a social consequence.', 'Use social evidence from at least two different categories.']
    },
    {
      title: 'Checkpoint 2: Unit 4 CCOT — Social Structures Over Time',
      subtitle: 'Checks Learning Target 3 and the governing Topic 4.8 learning objective.',
      cardDesc: 'A supported continuity-and-change argument about economic effects on social structure.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how economic developments from 1450 to 1750 affected social structures over time. Write a short CCOT argument that includes one meaningful social change, one meaningful social continuity, specific evidence from at least THREE earlier Unit 4 topics, and an explanation of why the change and continuity occurred.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change Over Time',
      terms: ['economic developments', 'social structures', 'continuity', 'change', 'plantation', 'slavery', 'casta', 'peasant labor', 'artisan labor', 'elites', 'gender', 'family'],
      focus: ['Answer the exact economic-developments -> social-structures question.', 'Use at least three specific pieces of Unit 4 evidence.', 'Explain why one social structure changed and why another persisted.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Prove Both Change and Continuity',
    task: 'Choose evidence that connects an economic development to a social consequence, then pair it with evidence for a meaningful continuity. Your claim must be about social structure — labor, hierarchy, family, or elite power — rather than trade alone.',
    prompt: 'Using one change card and one continuity card, write a CCOT claim about how economic developments affected social structures from c. 1450 to c. 1750. Cite concrete evidence, explain the economic-to-social mechanism, and explain why the continuity persisted.'
  };

  lesson.images = [
    {
      title: 'CONTINUITY — Indian Ocean Monsoon Trade',
      url: '../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg',
      sourceUrl: '../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg',
      caption: 'Secondary baseline evidence. The Indian Ocean trade system and monsoon knowledge predated European arrival and continued to structure Asian, African, and Middle Eastern commerce after c. 1450.',
      prompt: 'NOTICE the seasonal routes and dense regional connections. What structural features could make this network persist despite Portuguese and Dutch intrusion? What additional merchant records would strengthen a continuity claim?'
    },
    {
      title: 'CONTINUITY — Silk Roads and Established Afro-Eurasian Corridors',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',
      caption: 'Secondary baseline evidence. Long-distance Afro-Eurasian exchange corridors existed before Atlantic integration and remained part of a wider commercial world after 1450.',
      prompt: 'NOTICE how overland corridors connect major production and consumption regions. What can persist even when the relative importance of routes changes? What does a route map not tell you about changing trade volume?'
    },
    {
      title: 'CHANGE — Waldseemüller World Map, 1507',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Waldseemuller_map_2.jpg',
      caption: 'New-hemispheric-connection evidence. The printed map incorporated recent Atlantic voyages and represented lands unknown to most European mapmakers before 1492.',
      prompt: 'NOTICE the addition of Atlantic lands to an older Afro-Eurasian geographic framework. What kind of change in knowledge and connectivity does this document? What does it not prove about economic integration by itself?'
    },
    {
      title: 'CHANGE — Global Silver and Manila Galleon Routes',
      url: '../assets/images/instructional-maps/topic-4-5.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-4-5.svg',
      caption: 'Secondary systems evidence. The map traces new Atlantic and Pacific silver circuits that linked American mines, European markets, Manila, and Chinese demand.',
      prompt: 'NOTICE the trans-Pacific and trans-Atlantic connections. What mechanism made this circuit genuinely new? How did it build on older Asian markets rather than replace them?'
    },
    {
      title: 'CHANGE — Dutch East India Company charter, 1602',
      label: 'Charter record · Dutch Republic, 20 March 1602',
      sourceText: [
        'The States General chartered the VOC with a 21-year monopoly',
        'on Dutch trade east of the Cape of Good Hope.',
        'The charter granted powers to build forts, keep troops,',
        'and make treaties with local rulers.'
      ],
      caption: 'The chartered joint-stock company set out in a legal document: a genuinely new way to organize long-distance trade.',
      prompt: 'NOTICE what is new here compared with a merchant family or a royal fleet. INFER what changed in how European long-distance trade was organized. Which older Asian commercial practices continued underneath this institution rather than being replaced by it?'
    }
  ];
})();
