// lesson-8-4-renderer-config.js
// Topic 8.4, Spread of Communism After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// Dual-LO topic: ECN/LO D (China) + SIO/LO E (redistribution movements).
// The renderer's normalizedKeyConcepts() iterates the full collegeBoardKeyConcepts
// array with no entry-count limit, both pairs and all four illustrative examples
// are rendered via standard cb-card elements. No renderer modification required.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Economic Systems (ECN)",
      "theme": "Economic Systems",
      "text": "Economic Systems",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 8: Learning Objective D",
      "theme": "Learning Objective",
      "text": "Explain the causes and consequences of China's adoption of communism.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.I.i",
      "theme": "Economic Systems",
      "text": "As a result of internal tension and Japanese aggression, Chinese communists seized power. These changes in China eventually led to communist revolution.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.I.A.ii",
      "theme": "Economic Systems",
      "text": "In communist China, the government controlled the national economy through the Great Leap Forward, often implementing repressive policies, with negative repercussions for the population.",
      "illustrativeExamples": []
    },
    {
      "code": "Thematic Focus, Social Interactions and Organization (SIO)",
      "theme": "Social Interactions and Organization",
      "text": "Social Interactions and Organization",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 8: Learning Objective E",
      "theme": "Learning Objective",
      "text": "Explain the causes and effects of movements to redistribute economic resources.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.2.II.D.i",
      "theme": "Social Interactions and Organization",
      "text": "Movements to redistribute land and resources developed within states in Africa, Asia, and Latin America, sometimes advocating communism or socialism.",
      "illustrativeExamples": [
        "Communist Revolution for Vietnamese independence",
        "Mengistu Haile Mariam in Ethiopia",
        "Land reform in Kerala and other states within India",
        "White Revolution in Iran"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Spread of Communism After 1900',
    embedUrl: 'first-and-10-topic-8-4-spread-of-communism-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'China (1949)', detail: 'Internal tension (warlordism, KMT failure, peasant land hunger) combined with Japanese aggression to produce communist revolution. Mao proclaimed the People\'s Republic of China on October 1, 1949, the world\'s most populous country turned communist.' },
      { label: 'Vietnam (1954/1975)', detail: 'Communist Revolution for Vietnamese independence: Ho Chi Minh\'s Viet Minh combined anti-colonial nationalism with land redistribution promises, defeating France at Dien Bien Phu and dividing Vietnam at the 17th parallel.' },
      { label: 'Ethiopia (1974)', detail: 'Mengistu Haile Mariam and the Derg: Marxist military junta overthrew Haile Selassie, nationalized land and industry, and implemented redistribution that produced civil war and the Red Terror (1977–1978).' },
      { label: 'India / Kerala (1957)', detail: 'Communist Party of India won state elections in Kerala, the first democratically elected communist government in the world, and implemented land reform legislation redistributing holdings from large landlords to tenant farmers.' },
      { label: 'Iran (1963)', detail: 'White Revolution: Shah Mohammad Reza Pahlavi launched top-down land redistribution to preempt communist organizing and satisfy U.S. pressure for modernization. Disruption contributed to conditions for the 1979 Iranian Revolution.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_countries_1979-1983.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_countries_1979-1983.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_countries_1979-1983.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brave_the_wind_and_the_waves.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ho_Chi_Minh_1946.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_establishment_of_PRC.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brave_the_wind_and_the_waves.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_establishment_of_PRC.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_establishment_of_PRC.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_countries_1979-1983.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/harvest-report.html',
    desc: 'Henan Province, China, autumn 1959. You are the county party secretary. The harvest is failing, but the central government\'s requisition quotas are set against the inflated figures your province reported to demonstrate commitment to the Great Leap Forward. If you report honest numbers, you face purge. If you submit to quota, your villages will starve. The Harvest Report puts you inside the machine that produced the Great Chinese Famine.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Redistribution Movements — Causes and Effects',
      subtitle: 'Checks Learning Target 3 and Success Criterion 3.',
      cardDesc: 'Causes and effects of land and resource redistribution movements across Africa, Asia, and Latin America.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the causes and effects of movements to redistribute land and resources in the post-1900 world. In your response, use at least two of the four CED examples, Communist Revolution for Vietnamese independence, Mengistu Haile Mariam in Ethiopia, land reform in Kerala and other states within India, or the White Revolution in Iran, to explain both the causes that drove each redistribution movement and at least one effect it produced on political or social order.',
      responseType: 'Checkpoint 1',
      terms: ['redistribution', 'land reform', 'communism', 'socialism', 'Viet Minh', 'Ho Chi Minh', 'Vietnam', 'Mengistu', 'Derg', 'Ethiopia', 'Kerala', 'India', 'White Revolution', 'Iran', 'Shah', 'peasant', 'nationalization', 'colonial', 'tenant farmer', 'revolution'],
      focus: ['Identify the specific cause(s) for each redistribution movement you discuss, colonial occupation, military coup, electoral mobilization, or fear of communist organizing.', 'Explain at least one concrete effect each movement produced, independence, famine, political stability, or social disruption.', 'Compare: note whether the movements you chose were similar or different in their causes or effects.']
    },
    {
      title: "Checkpoint 2: China's Adoption of Communism — Causes and Consequences",
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: "AP-style causation: causes of China's communist revolution and consequences of Great Leap Forward economic control.",
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: "Explain the causes and consequences of China's adoption of communism. In your response: (1) explain how internal tension AND Japanese aggression each contributed to the Chinese communists' seizure of power in 1949; and (2) explain how the Great Leap Forward represented the communist government's control of the national economy, and explain at least two specific repressive policies and their negative repercussions for the population, including the Great Chinese Famine.",
      responseType: 'Checkpoint 2',
      terms: ['Chinese Communist Party', 'CCP', 'Kuomintang', 'KMT', 'Mao Zedong', 'People\'s Republic of China', 'Long March', 'Japanese aggression', 'warlordism', 'internal tension', 'Great Leap Forward', 'collectivization', 'people\'s commune', 'backyard steel furnace', 'production quota', 'Great Chinese Famine', 'Peng Dehuai', 'repressive policies', 'communist revolution', 'causation'],
      focus: ['Name both causes explicitly, internal tension (warlordism, KMT failure, land hunger) AND Japanese aggression, and explain how each contributed to communist victory.', 'Explain the Great Leap Forward as state control of the national economy: collectivization, backyard steel campaign, inflated reporting.', 'Explain the famine as the consequence of repressive policies: extracted grain quotas based on falsified harvest figures left villages without food.']
    }
  ];


  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.',
    prompt: 'Explain either the causes and consequences of China\'s adoption of communism or the causes and effects of post-1900 resource redistribution movements. Use at least two cards, and test whether the same causal explanation works across cases.'
  };

  lesson.images = [
    {
      title: 'Great Leap Forward propaganda poster, 1958',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brave_the_wind_and_the_waves.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Brave_the_wind_and_the_waves.jpg',
      caption: 'A Great Leap Forward propaganda poster (1958) celebrates the simultaneous drive for agricultural and industrial production, imagery that contrasted sharply with the famine unfolding in Chinese villages.',
      prompt: 'What does this propaganda poster reveal about how the CCP government exercised control of the national economy during the Great Leap Forward? How does the imagery relate to the CED\'s description of \'repressive policies with negative repercussions for the population\'?'
    },
    {
      title: 'Ho Chi Minh and Viet Minh forces, 1950s',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ho_Chi_Minh_1946.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_1946.jpg',
      caption: 'Ho Chi Minh led the Viet Minh in combining anti-colonial nationalism with communist land redistribution promises, mobilizing Vietnamese peasants against French colonial rule.',
      prompt: 'How does the Vietnamese case illustrate the relationship between communist revolution and land redistribution? What made redistribution promises an effective tool for building rural support for the Viet Minh?'
    },
    {
      title: 'Shah Mohammad Reza Pahlavi announces White Revolution, 1963',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iranian_women_voting_during_White_Revolution.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Iranian_women_voting_during_White_Revolution.jpg',
      caption: 'Shah Mohammad Reza Pahlavi launched the White Revolution in 1963, a top-down land reform program that redistributed holdings from large landlords, partly to preempt communist organizing and satisfy American pressure for modernization.',
      prompt: 'How does the White Revolution in Iran differ from redistribution in Vietnam or Kerala? What does a monarchical, top-down path to land reform reveal about the range of motivations and methods behind resource redistribution movements?'
    },
    {
      title: 'People\'s Republic of China proclaimed',
      label: 'Political record · Chinese Communist victory, 1949',
      sourceText: [
        'The Chinese Communist Party defeated the Nationalist government after years of civil war and Japanese invasion.',
        'Mao Zedong proclaimed the People\'s Republic of China on October 1, 1949.'
      ],
      caption: 'The end of the Chinese civil war, dated.',
      prompt: 'Which cause of communist victory is visible here and which is only implied? What additional evidence would separate the effects of civil war from Japanese aggression?'
    },
    {
      title: 'Ethiopia nationalizes rural land',
      label: 'Legal record · Derg land proclamation, Ethiopia, 1975',
      sourceText: [
        'The military government abolished private ownership of rural land and transferred land to state control.',
        'The policy attacked the landlord system under the slogan \'land to the tiller.\''
      ],
      caption: 'Land redistribution imposed by a military government that had taken power the year before.',
      prompt: 'What cause of redistribution is suggested by this legal change? How would you test whether redistribution improved rural living conditions?'
    },
    {
      title: 'Kerala limits landlord power',
      label: 'Legislative record · Kerala land reform laws, India, 1960s-1970',
      sourceText: [
        'Kerala legislation imposed ceilings on landholdings and strengthened the position of many tenants.',
        'The reforms were pursued through elected state institutions rather than a communist revolution.'
      ],
      caption: 'Land redistribution legislated by an elected state government inside a parliamentary democracy.',
      prompt: 'How does Kerala complicate a claim that redistribution after 1900 required violent revolution? What evidence would you need about who gained land?'
    }
  ];

})();
