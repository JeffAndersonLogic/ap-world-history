(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-3.3.I.A',
      theme: 'Governance',
      text: 'Rulers used religious ideas, symbols, and institutions to legitimize their power. When rulers conquered or unified diverse populations, religion could both unify and divide.',
      illustrativeExamples: ['Ottoman Sultan as Caliph', 'Safavid Shia state', 'Akbar\'s Din-i-Ilahi', 'Qing patronage of Tibetan Buddhism']
    },
    {
      code: 'KC-3.3.I.B',
      theme: 'Governance',
      text: 'The Ottoman-Safavid conflict demonstrates how sectarian religious difference drove imperial rivalry and warfare. The Battle of Chaldiran (1514) was framed as a war against heresy as much as a territorial contest.',
      illustrativeExamples: ['Battle of Chaldiran (1514)', 'Sunni-Shia divide', 'Shah Ismail I', 'Sultan Selim I']
    },
    {
      code: 'KC-3.3.I.C',
      theme: 'Governance',
      text: 'Some rulers adopted syncretic or tolerant religious policies to maintain loyalty among diverse populations; others used religious enforcement to consolidate an identity-based empire.',
      illustrativeExamples: ['Akbar\'s Din-i-Ilahi', 'Aurangzeb\'s reimposition of jizya', 'Peace of Augsburg (1555)', 'Cuius regio, eius religio']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: God, Power, and Empire',
    embedUrl: 'first-and-10-topic-3-3-belief-systems-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 3.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Ottoman Empire (Sunni)', detail: 'The Ottomans controlled Anatolia, the Arab world, and the Balkans. Their sultan claimed the title of Caliph — protector of Sunni Islam worldwide.' },
      { label: 'Safavid Empire (Shia)', detail: 'The Safavids controlled modern-day Iran. Shah Ismail I forced conversion to Shia Islam, creating a religiously distinct state on the Ottoman border.' },
      { label: 'Mughal Empire', detail: 'The Mughals ruled most of the Indian subcontinent. Under Akbar, they pursued religious tolerance; under Aurangzeb, strict Sunni enforcement.' },
      { label: 'Geographic takeaway', detail: 'The Safavid state was geographically surrounded by Sunni powers, making Shia identity an essential distinguishing mark of political loyalty.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png'
  };

  lesson.skillBuilder = {
    label: 'Argumentation practice',
    title: 'Was Religious Tolerance or Enforcement a More Effective Tool for Empire?',
    intro: 'Argumentation means making a claim and supporting it with specific evidence. AP World History regularly asks you to evaluate historical strategies — not just describe what rulers did, but assess whether it worked and why.',
    steps: [
      { label: 'Identify the strategies', text: 'Akbar used tolerance — abolishing jizya, including Hindu elites, developing Din-i-Ilahi. Aurangzeb used enforcement — reimposing jizya, destroying temples, enforcing Sunni law. Shah Ismail used coercive conversion — creating a Shia identity state.' },
      { label: 'Evaluate the outcomes', text: 'Akbar expanded Mughal power by drawing diverse elites into the imperial project. Aurangzeb\'s enforcement provoked rebellions that weakened Mughal authority. Shah Ismail\'s Shia identity strengthened internal loyalty but intensified Ottoman-Safavid conflict.' },
      { label: 'Build your argument', text: 'A strong argument acknowledges complexity: neither tolerance nor enforcement was universally effective. The key is explaining which conditions made each approach more or less viable — empire size, religious composition of the population, and external threats all mattered.' }
    ],
    prompt: 'Write a claim (one sentence) that evaluates whether religious tolerance or religious enforcement was more effective as an imperial governing strategy. Then support your claim with at least two pieces of specific evidence from c. 1450–c. 1750.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Religion, Legitimacy, and Conflict',
      subtitle: 'Checks Learning Targets 1 and 2 — religion as legitimacy tool and Ottoman-Safavid conflict.',
      cardDesc: 'Divine authority, caliphate, Sunni-Shia divide, Chaldiran.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how the Ottoman and Safavid empires used religion to legitimize their authority, and how religious difference drove conflict between them. Use specific evidence such as the Ottoman claim to the caliphate, Shah Ismail\'s forced conversions, and the Battle of Chaldiran (1514).',
      responseType: 'Checkpoint 1',
      terms: ['Caliph', 'Sultan', 'Shah', 'Sunni', 'Shia', 'Chaldiran', 'legitimacy', 'Selim I', 'Shah Ismail'],
      focus: ['Explain at least one specific religious claim or role used by Ottoman or Safavid rulers.', 'Explain how the Sunni-Shia divide made the Ottoman-Safavid rivalry both religious and political.', 'Connect the Battle of Chaldiran (1514) to the broader pattern of religion driving imperial conflict.']
    },
    {
      title: 'Checkpoint 2: Accommodation vs. Enforcement — Mughal Approaches',
      subtitle: 'Checks Learning Target 3 — Mughal religious approaches and their consequences.',
      cardDesc: 'Akbar, Aurangzeb, Din-i-Ilahi, jizya, tolerance vs. enforcement.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Compare Akbar\'s approach to religious diversity with Aurangzeb\'s. What specific policies did each ruler adopt? What were the political consequences of each approach? Use evidence to explain what the contrast reveals about how rulers used religion as a governing tool.',
      responseType: 'Checkpoint 2',
      terms: ['Akbar', 'Aurangzeb', 'Din-i-Ilahi', 'jizya', 'Fatehpur Sikri', 'tolerance', 'enforcement', 'Rajput', 'syncretic'],
      focus: ['Name at least two specific policies Akbar used to manage religious diversity.', 'Name at least one policy Aurangzeb used to enforce religious conformity.', 'Explain the political consequences — what did each approach produce in terms of loyalty or rebellion?']
    }
  ];
})();
