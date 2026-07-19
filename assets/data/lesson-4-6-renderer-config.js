(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.3.III.iii',
      theme: 'Governance',
      text: 'State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level.',
      illustrativeExamples: ['Pueblo Revolts', 'Fronde', 'Cossack revolts', 'Maratha conflict with Mughals', 'Ana Nzinga’s resistance (as ruler of Ndongo and Matamba)', 'Metacom’s War (King Philip’s War)']
    },
    {
      code: 'KC-5.3.III.C',
      theme: 'Governance',
      text: 'Enslaved persons challenged existing authorities in the Americas through organized resistance.',
      illustrativeExamples: ['Establishment of Maroon societies in the Caribbean and Brazil', 'Resistance of enslaved persons in North America']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Resistance Within',
    embedUrl: 'first-and-10-topic-4-6-internal-external-challenges-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Pueblo Revolt zone (New Mexico, 1680)', detail: 'Forty-six Pueblo communities in the Rio Grande valley rose simultaneously under Popé\'s leadership, killing 400 colonists and 21 missionaries and expelling the Spanish for twelve years. The geographic key: Pueblo communities were concentrated in a frontier zone far from the centers of Spanish colonial power in Mexico City and Lima, giving them both the grievances and the relative isolation to organize.' },
      { label: 'Palmares (Brazilian interior, c. 1605–1694)', detail: 'Palmares, the largest and most durable maroon community in the Americas, thrived in the remote interior of Portuguese Brazil for nearly a century, with a population of up to 30,000. Its survival demonstrates both the capacity of escaped enslaved people to build autonomous institutions and the difficulty colonial powers had projecting military force into interior terrain.' },
      { label: 'Indian Ocean, Dutch displacement of Portuguese (c. 1600–1650)', detail: 'The Dutch VOC systematically displaced the Portuguese Estado da India from the Indian Ocean by offering lower toll rates, maintaining better-capitalized fleets, and seizing key ports (Batavia, 1619; Malacca, 1641). The geographic lesson: the chokepoint-based Estado da India model was vulnerable to a rival that could out-compete it at every chokepoint simultaneously.' },
      { label: 'Geographic takeaway', detail: 'Resistance was most effective in frontier or interior regions, where colonial authority was weakest and terrain was most favorable to defenders. The Pueblo Revolt succeeded in a frontier zone; Palmares survived in the Brazilian interior. The Dutch challenge succeeded because it operated at the same geographic level as the Portuguese, controlling the same Indian Ocean chokepoints with superior resources.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-knotted-cord.html',
    desc: 'Coordinate the Pueblo Revolt of 1680: balance secrecy, alliance, military sequence, community survival, and the political order that should follow colonial expulsion.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Why Did Colonized Peoples Resist? Analyzing Root Causes',
    intro: 'Causation practice for Topic 4.6 requires explaining why colonized and enslaved peoples resisted European rule at specific times and in specific ways. A strong causation argument moves beyond "they were oppressed" to identify specific grievances, specific organizational factors, and specific moments that triggered action. The Pueblo Revolt and maroon communities offer two different causal stories, both are worth understanding in detail.',
    steps: [
      { label: 'Identify specific grievances', text: 'The Pueblo Revolt was caused by a specific combination of factors: decades of religious suppression (Spanish missionaries destroyed kivas, confiscated sacred objects, publicly flogged religious leaders including Popé in 1675); increasing labor and tribute demands; a prolonged drought that worsened food insecurity; and broken colonial promises. Any one of these alone might not have triggered revolt, the combination, accumulated over nearly a century, did.' },
      { label: 'Identify the organizational factor', text: 'Grievances alone do not cause revolts, organization does. Popé\'s achievement was building a coordinated multi-community network across peoples who spoke different languages and had different political traditions. The kiva system, which gave religious leaders a communication network across Pueblo communities, provided the organizational infrastructure. Understanding why 1680 specifically (not 1650 or 1700) requires explaining Popé\'s organizational success.' },
      { label: 'Explain the outcome and its limits', text: 'The Pueblo Revolt succeeded in the short term (twelve years of self-governance) and forced genuine concessions (no reimposition of the encomienda, reduced religious suppression after reconquest). Its limits: the Spanish did eventually reconquer New Mexico in 1692. The revolt demonstrates both the capacity of indigenous resistance to force change AND the structural limits on how far that change could go.' }
    ],
    prompt: 'In 3–4 sentences, write a causation argument: explain what caused the Pueblo Revolt of 1680. Identify at least two specific grievances (religious suppression, labor demands, drought), explain how Popé built the organizational capacity for a coordinated revolt, and describe the short-term outcome. Use specific evidence: Popé, Tewa, kiva, 1675 flogging, August 10, 1680.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Indigenous and African Resistance',
      subtitle: 'Checks Learning Targets 1 and 2, Pueblo Revolt and maroon communities.',
      cardDesc: 'Pueblo Revolt, Popé, maroon communities, Palmares, and forms of African resistance.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain the causes and outcome of the Pueblo Revolt of 1680. Then describe maroon communities as a form of African resistance, using Palmares as a specific example. Finally, compare these two forms of resistance: identify one meaningful similarity and one meaningful difference, and explain what the difference reveals about the strategies available to different groups resisting colonial rule.',
      responseType: 'Checkpoint 1',
      terms: ['Pueblo Revolt', 'Popé', 'Tewa', 'kiva', 'religious suppression', 'maroon communities', 'Palmares', 'Zumbi', 'quilombo', 'resistance'],
      focus: ['Explain Pueblo Revolt causes: religious suppression, labor demands, drought, Popé\'s organization.', 'Describe maroon communities: definition, Palmares as example, why they represent a different resistance strategy.', 'Compare the two: one similarity (both were responses to colonial coercion), one difference (military expulsion vs. autonomous exit), explain what the difference reveals.']
    },
    {
      title: 'Checkpoint 2: European Rivalries and External Challenges',
      subtitle: 'Checks Learning Target 3, European competition and external challenges.',
      cardDesc: 'Dutch displacement of the Portuguese, piracy, privateering, and the Seven Years War.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how competition between European powers created external challenges to maritime empires. Use one specific example (Dutch displacement of Portuguese in the Indian Ocean, OR privateering in the Atlantic, OR the Seven Years War) to explain how European rivalry tested the stability of colonial empires. Then connect to Topic 4.4: how does European rivalry reveal a weakness in the specific model of empire that was being challenged?',
      responseType: 'Checkpoint 2',
      terms: ['VOC', 'Estado da India', 'piracy', 'privateering', 'Sir Francis Drake', 'Seven Years War', 'Dutch competition', 'external challenge'],
      focus: ['Choose one specific example of European rivalry and explain it with specific evidence.', 'Explain how this rivalry tested the stability of the empire being challenged.', 'Connect to Topic 4.4: what weakness in the Portuguese, Spanish, or Dutch model did rival European powers exploit?']
    }
  ];
})();
