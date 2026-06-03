(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.8.I.A',
      theme: 'Economic Systems',
      text: 'American silver created the first genuinely global trade network, connecting the Americas to Europe and Asia through the Manila Galleon trade and the Atlantic system. The resulting silver influx caused a global price revolution across Europe and Asia.',
      illustrativeExamples: ['Manila Galleon trade (1565–1815)', 'Potosí silver', 'Global price revolution', 'Chinese demand for silver (Single Whip Tax Reform)', 'Casa de Contratación (Seville)']
    },
    {
      code: 'KC-4.8.I.B',
      theme: 'Demography and Environment',
      text: 'The Columbian Exchange caused the largest demographic catastrophe in human history in the Americas, while spreading new crops globally that eventually contributed to population growth in the Eastern Hemisphere.',
      illustrativeExamples: ['Population collapse in the Americas (50–90%)', 'Smallpox and epidemic disease', 'Potato, maize, cassava, tomato', 'Atlantic slave trade as demographic response', 'Ecological transformation of the Americas']
    },
    {
      code: 'KC-4.8.I.C',
      theme: 'Economic Systems',
      text: 'Despite European maritime expansion, the Indian Ocean trade continued and grew; Chinese manufacturing dominance persisted; and Islamic commercial networks remained important intermediaries. Asian demand drove much of the global trade transformation.',
      illustrativeExamples: ['Indian Ocean trade (continuity)', 'Chinese manufacturing dominance', 'Islamic commercial networks', 'Single Whip Tax Reform (China, 1581)', 'Sangleys (Chinese merchants in Manila)']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Connected World',
    embedUrl: 'first-and-10-topic-4-8-continuity-and-change-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Silver routes (the change)', detail: 'Two routes define the global trade transformation: the Manila Galleon (Acapulco → Manila → Acapulco, annually 1565–1815), carrying Mexican silver west for Chinese goods; and the Atlantic system (Potosí → Portobelo/Veracruz → Seville), carrying Andean silver east into European money markets. Both routes were genuinely new — nothing like them existed before c. 1565.' },
      { label: 'Indian Ocean trade (the continuity)', detail: 'The Indian Ocean trade system had operated for over a millennium before any European ship arrived. By c. 1700, it was larger in volume than in c. 1450 — European demand had added to it. Arab, Indian, Chinese, Malay, and Swahili merchants continued to operate throughout the Indian Ocean alongside European trading companies. The VOC displaced the Portuguese at key chokepoints but could not replace the dense network of Asian merchants.' },
      { label: 'China as economic engine', detail: 'China was the world\'s largest economy throughout c. 1450–1750 — producing the most silk, porcelain, and cotton textiles, and demanding the most silver. Chinese demand for silver (driven by the Single Whip Tax Reform of 1581) was the engine that made the Manila Galleon trade profitable. Without Chinese demand, Mexican silver would not have crossed the Pacific. This makes Chinese fiscal policy a key cause of global economic transformation.' },
      { label: 'Geographic takeaway', detail: 'The most important CCOT insight: the Americas were connected to an existing global economy, not the other way around. European ships were the connective tissue; Asian demand was the engine; American silver was the commodity. Understanding this geography prevents the common error of treating European expansion as the sole driver of global economic change in c. 1450–1750.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
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
    url: '../beintheroom/unit-4/continuity-and-change.html',
    desc: "Trade silk for silver as a Chinese Sangleys merchant in Manila, debate the global price revolution with a Spanish royal treasurer in Seville, or trace the long-term effects of the Columbian Exchange across three continents."
  };

  lesson.skillBuilder = {
    label: 'CCOT practice',
    title: 'Continuity and Change in Global Trade, c. 1450–c. 1750',
    intro: 'CCOT (Continuity and Change Over Time) for Topic 4.8 requires identifying BOTH what changed AND what persisted across the period, and explaining the mechanisms that drove each. The most common error is focusing only on change — or using "it continued" without explaining why. This practice walks through a model CCOT argument for global trade from c. 1450 to c. 1750.',
    steps: [
      { label: 'Identify a specific change (with mechanism)', text: 'Change: American silver created the first genuinely global trade network connecting the Americas to Europe and Asia. The mechanism: Chinese demand for silver (Single Whip Tax Reform, 1581) created a pull that made the Manila Galleon trade profitable; Spanish colonial demand for revenue created the push that forced mita labor at Potosí. The combination of Asian demand and colonial labor extraction drove a genuinely new global circuit that had not existed before c. 1565.' },
      { label: 'Identify a specific continuity (with mechanism)', text: 'Continuity: The Indian Ocean trade persisted and grew throughout the period. The mechanism: the dense network of Arab, Indian, Chinese, Malay, and Swahili merchants who dominated Indian Ocean trade had established relationships, credit networks, and local knowledge that European companies could not quickly replicate. The Portuguese and Dutch could control chokepoints, but they could not replace the underlying commercial network — which was too large, too distributed, and too locally embedded to be displaced.' },
      { label: 'Write the synthesis statement', text: 'A strong CCOT argument ends with synthesis: what does the balance of change and continuity reveal? The period c. 1450–1750 connected the Americas to existing global networks rather than replacing those networks. European maritime expansion was transformative — it created the silver economy, caused demographic catastrophe in the Americas, and established new colonial hierarchies — but it did not displace Asian economic dominance, replace the Indian Ocean trade, or fundamentally restructure the underlying logic of long-distance commerce.' }
    ],
    prompt: 'In 3–4 sentences, write a CCOT argument about global trade networks from c. 1450 to c. 1750. Identify one specific change (with evidence and mechanism) and one specific continuity (with evidence and mechanism). End with a synthesis statement: overall, did this period represent more change or more continuity in global trade — and what does your answer reveal about the nature of European maritime expansion?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: What Changed — Silver, Demography, and Environment',
      subtitle: 'Checks Learning Targets 1 and 2 — economic and demographic changes.',
      cardDesc: 'Silver economy, global price revolution, Columbian Exchange, and demographic collapse.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how American silver from Potosí created a genuinely global trade network. Describe at least two routes (Manila Galleon and Atlantic) and explain the role of Chinese demand. Then explain ONE demographic or environmental change caused by the Columbian Exchange — be specific about what changed, what caused it, and what its long-term consequences were.',
      responseType: 'Checkpoint 1',
      terms: ['Potosí', 'Manila Galleon', 'global price revolution', 'Chinese demand', 'Single Whip Tax Reform', 'demographic collapse', 'Columbian Exchange', 'smallpox', 'potato', 'maize'],
      focus: ['Explain the Manila Galleon trade: route, commodities, and why Chinese demand drove it.', 'Explain the global price revolution: cause (silver influx), effects (inflation, economic disruption).', 'Choose one demographic or environmental change: explain what changed, what caused it, and its long-term consequences.']
    },
    {
      title: 'Checkpoint 2: What Continued — and the Overall Takeaway',
      subtitle: 'Checks Learning Target 3 — continuities and CCOT synthesis.',
      cardDesc: 'Indian Ocean trade, Chinese economic dominance, Islamic networks, and CCOT synthesis.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Identify two specific continuities from c. 1450 that persisted through c. 1750. For each, explain what structural factors sustained it despite European maritime expansion. Then write a synthesis statement: overall, did c. 1450–1750 represent more change than continuity in global trade, or more continuity than change? Defend your position with specific evidence from both sides.',
      responseType: 'Checkpoint 2',
      terms: ['Indian Ocean trade', 'Chinese manufacturing', 'Islamic commercial networks', 'continuity', 'CCOT synthesis', 'Sangleys', 'Asian demand', 'hawala'],
      focus: ['Name two specific continuities (Indian Ocean trade, Chinese dominance, Islamic networks) with specific evidence.', 'Explain the structural factors that sustained each continuity despite European expansion.', 'Write a synthesis statement: more change or more continuity? Defend with evidence from BOTH sides.']
    }
  ];
})();
