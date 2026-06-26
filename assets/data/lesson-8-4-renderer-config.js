// lesson-8-4-renderer-config.js
// Topic 8.4 — Spread of Communism After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// Dual-LO topic: ECN/LO D (China) + SIO/LO E (redistribution movements).
// The renderer's normalizedKeyConcepts() iterates the full collegeBoardKeyConcepts
// array with no entry-count limit — both pairs and all four illustrative examples
// are rendered via standard cb-card elements. No renderer modification required.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus — Economic Systems (ECN)',
      theme: 'Economic Systems',
      text: 'Economic Systems',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective D',
      theme: 'Learning Objective',
      text: "Explain the causes and consequences of China's adoption of communism.",
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.I.i',
      theme: 'Economic Systems',
      text: 'As a result of internal tension and Japanese aggression, Chinese communists seized power. These changes in China eventually led to communist revolution.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.3.I.A.ii',
      theme: 'Economic Systems',
      text: 'In communist China, the government controlled the national economy through the Great Leap Forward, often implementing repressive policies, with negative repercussions for the population.',
      illustrativeExamples: []
    },
    {
      code: 'Thematic Focus — Social Interactions and Organization (SIO)',
      theme: 'Social Interactions and Organization',
      text: 'Social Interactions and Organization',
      illustrativeExamples: []
    },
    {
      code: 'Unit 8: Learning Objective E',
      theme: 'Learning Objective',
      text: 'Explain the causes and effects of movements to redistribute economic resources.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.II.D.i',
      theme: 'Social Interactions and Organization',
      text: 'Movements to redistribute land and resources developed within states in Africa, Asia, and Latin America, sometimes advocating communism or socialism.',
      illustrativeExamples: [
        'Land and resource redistribution: Communist Revolution for Vietnamese independence',
        'Land and resource redistribution: Mengistu Haile Mariam in Ethiopia',
        'Land and resource redistribution: Land reform in Kerala and other states within India',
        'Land and resource redistribution: White Revolution in Iran'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Spread of Communism After 1900',
    embedUrl: 'first-and-10-topic-8-4-spread-of-communism-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'China (1949)', detail: 'Internal tension (warlordism, KMT failure, peasant land hunger) combined with Japanese aggression to produce communist revolution. Mao proclaimed the People\'s Republic of China on October 1, 1949 — the world\'s most populous country turned communist.' },
      { label: 'Vietnam (1954/1975)', detail: 'Communist Revolution for Vietnamese independence: Ho Chi Minh\'s Viet Minh combined anti-colonial nationalism with land redistribution promises, defeating France at Dien Bien Phu and dividing Vietnam at the 17th parallel.' },
      { label: 'Ethiopia (1974)', detail: 'Mengistu Haile Mariam and the Derg: Marxist military junta overthrew Haile Selassie, nationalized land and industry, and implemented redistribution that produced civil war and the Red Terror (1977–1978).' },
      { label: 'India / Kerala (1957)', detail: 'Communist Party of India won state elections in Kerala — the first democratically elected communist government in the world — and implemented land reform legislation redistributing holdings from large landlords to tenant farmers.' },
      { label: 'Iran (1963)', detail: 'White Revolution: Shah Mohammad Reza Pahlavi launched top-down land redistribution to preempt communist organizing and satisfy U.S. pressure for modernization. Disruption contributed to conditions for the 1979 Iranian Revolution.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_world_1983.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_world_1983.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_world_1983.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/GLF_poster.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ho_Chi_Minh_1946.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_PRC.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/GLF_poster.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_PRC.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_PRC.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Communist_world_1983.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-8/harvest-report.html',
    desc: 'Henan Province, China, autumn 1959. You are the county party secretary. The harvest is failing — but the central government\'s requisition quotas are set against the inflated figures your province reported to demonstrate commitment to the Great Leap Forward. If you report honest numbers, you face purge. If you submit to quota, your villages will starve. The Harvest Report puts you inside the machine that produced the Great Chinese Famine.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Redistribution Movements — Causes and Effects',
      subtitle: 'Checks Learning Target 3 and Success Criterion 3.',
      cardDesc: 'Causes and effects of land and resource redistribution movements across Africa, Asia, and Latin America.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain the causes and effects of movements to redistribute land and resources in the post-1900 world. In your response, use at least two of the four CED examples — Communist Revolution for Vietnamese independence, Mengistu Haile Mariam in Ethiopia, land reform in Kerala and other states within India, or the White Revolution in Iran — to explain both the causes that drove each redistribution movement and at least one effect it produced on political or social order.',
      responseType: 'Checkpoint 1',
      terms: ['redistribution', 'land reform', 'communism', 'socialism', 'Viet Minh', 'Ho Chi Minh', 'Vietnam', 'Mengistu', 'Derg', 'Ethiopia', 'Kerala', 'India', 'White Revolution', 'Iran', 'Shah', 'peasant', 'nationalization', 'colonial', 'tenant farmer', 'revolution'],
      focus: ['Identify the specific cause(s) for each redistribution movement you discuss — colonial occupation, military coup, electoral mobilization, or fear of communist organizing.', 'Explain at least one concrete effect each movement produced — independence, famine, political stability, or social disruption.', 'Compare: note whether the movements you chose were similar or different in their causes or effects.']
    },
    {
      title: "Checkpoint 2: China's Adoption of Communism — Causes and Consequences",
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: "AP-style causation: causes of China's communist revolution and consequences of Great Leap Forward economic control.",
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: "Explain the causes and consequences of China's adoption of communism. In your response: (1) explain how internal tension AND Japanese aggression each contributed to the Chinese communists' seizure of power in 1949; and (2) explain how the Great Leap Forward represented the communist government's control of the national economy, and explain at least two specific repressive policies and their negative repercussions for the population — including the Great Chinese Famine.",
      responseType: 'Checkpoint 2',
      terms: ['Chinese Communist Party', 'CCP', 'Kuomintang', 'KMT', 'Mao Zedong', 'People\'s Republic of China', 'Long March', 'Japanese aggression', 'warlordism', 'internal tension', 'Great Leap Forward', 'collectivization', 'people\'s commune', 'backyard steel furnace', 'production quota', 'Great Chinese Famine', 'Peng Dehuai', 'repressive policies', 'communist revolution', 'causation'],
      focus: ['Name both causes explicitly — internal tension (warlordism, KMT failure, land hunger) AND Japanese aggression — and explain how each contributed to communist victory.', 'Explain the Great Leap Forward as state control of the national economy: collectivization, backyard steel campaign, inflated reporting.', 'Explain the famine as the consequence of repressive policies: extracted grain quotas based on falsified harvest figures left villages without food.']
    }
  ];

  // Capture points — static hardcoded anchor tags only. Never JS-generated.
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.4+-+Spread+of+Communism+After+1900&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.4+-+Spread+of+Communism+After+1900&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
