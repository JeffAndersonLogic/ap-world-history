(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  const topic23 = '../assets/images/topics/2-3/';
  const img = {
    dhow: topic23 + '2.3 - Dhow Ship.jpeg',
    tradeMap: topic23 + '2.3 - Indian Ocean Trade Map Detailed.png',
    orgChart: topic23 + '2.3 - Indian Ocean Trade Org Chart.png',
    monsoonMap: topic23 + '2.3 - Monsoons map.jpg',
    swahili: topic23 + '2.3 - Swahili Merchants.jpg',
    zhengHe: topic23 + '2.3 - Zheng He Fleet.jpg'
  };

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: How an Ocean Became a Trade System',
    embedUrl: 'first-and-10-topic-2-3-indian-ocean-capture.html',
    note: 'Read for the system: monsoon knowledge + maritime technology -> larger exchange -> state growth, diasporic communities, and wider cultural transfer.'
  };

  lesson.map = {
    ...lesson.map,
    image: img.tradeMap,
    key: [
      { label: 'Monsoon wind system', detail: 'Predictable seasonal winds made round-trip voyages across the Indian Ocean practical.' },
      { label: 'Maritime technology', detail: 'The compass, astrolabe, and larger ship designs increased navigational reliability and carrying capacity.' },
      { label: 'Growing states', detail: 'Trade helped strengthen states and port centers including the Swahili Coast, Gujarat, and the Sultanate of Malacca.' },
      { label: 'Diasporic communities', detail: 'Arab, Persian, Chinese, and Malay merchants established communities that blended imported and local cultural traditions.' },
      { label: 'Zheng He', detail: 'Ming-sponsored voyages under Zheng He demonstrate the scale of state-backed maritime activity and interregional contact.' }
    ]
  };

  lesson.stableImages = {
    map: img.tradeMap,
    first10: img.dhow,
    contentDelivery: img.orgChart,
    beSurreal: img.monsoonMap,
    skill: img.orgChart,
    checkpoint1: img.monsoonMap,
    evidence: img.swahili,
    source: img.zhengHe,
    beInTheRoom: img.swahili,
    checkpoint2: img.zhengHe
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/indian-ocean-port.html',
    desc: 'Enter an Indian Ocean port and make decisions shaped by monsoon timing, merchant diasporas, port-state politics, and long-distance exchange.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: A Schedule Written by the Wind',
    text: 'A merchant could not simply sail whenever business looked promising. Monsoon winds reversed direction seasonally. Successful voyages depended on knowing when to depart, where to wait, and when the winds would carry ships home. Technology mattered, but environmental knowledge made the network predictable.',
    prompt: 'How can environmental knowledge function like a technology by changing what merchants are able to do?'
  };

  lesson.skillBuilder = {
    label: 'Causation and contextualization practice',
    title: 'AP Skill Builder: Explain Why Indian Ocean Trade Intensified',
    intro: 'Build a causal explanation that separates environmental knowledge, maritime technology, and the effects that followed from increased exchange.',
    steps: [
      { label: '1. Start with the environment', text: 'Explain how knowledge of <strong>monsoon winds</strong> made seasonal round-trip travel predictable.' },
      { label: '2. Add transportation technology', text: 'Use the <strong>compass</strong>, <strong>astrolabe</strong>, and <strong>larger ship designs</strong> as evidence of greater navigational reliability and carrying capacity.' },
      { label: '3. Identify a political/economic effect', text: 'Connect trade growth to the <strong>Swahili Coast</strong>, <strong>Gujarat</strong>, or the <strong>Sultanate of Malacca</strong>.' },
      { label: '4. Identify a social/cultural effect', text: 'Explain how <strong>diasporic merchant communities</strong> blended imported and indigenous cultural traditions.' },
      { label: '5. Extend the pattern', text: 'Use <strong>Zheng He</strong> to show how state-backed maritime activity intensified interregional contact.' },
      { label: 'Response frame', text: 'Because merchants understood ___ and used ___, they could ___. <strong>As a result</strong>, ___ grew/changed, illustrated by ___.' }
    ],
    prompt: 'Write 3–4 sentences explaining one cause and one effect of Indian Ocean trade growth. Use at least two specific CED-aligned examples.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Environment and Maritime Technology',
      subtitle: 'Checks why the network could expand.',
      cardDesc: 'Monsoons, compass, astrolabe, and larger ships.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how knowledge of monsoon winds and TWO maritime technologies helped expand Indian Ocean trade after 1200.',
      responseType: 'Checkpoint 1',
      terms: ['monsoon winds', 'compass', 'astrolabe', 'larger ship designs'],
      focus: ['Explain the environmental factor.', 'Use two technologies.', 'Connect both to increased volume or geographic range of exchange.']
    },
    {
      title: 'Checkpoint 2: States, Diasporas, and Zheng He',
      subtitle: 'Checks the effects of expanded Indian Ocean exchange.',
      cardDesc: 'State growth, merchant communities, and interregional contact.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Explain TWO effects of expanded Indian Ocean trade. Your response must use one state-growth example and either a diasporic-community example or Zheng He.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['Swahili Coast', 'Gujarat', 'Malacca', 'Arab and Persian merchants', 'Chinese merchants', 'Malay communities', 'Zheng He'],
      focus: ['Use one state-growth example.', 'Use one diaspora or Zheng He example.', 'Explain how trade growth produced the effect.']
    }
  ];

  lesson.evidenceLab = {
    ...lesson.evidenceLab,
    title: 'Evidence Lab: Environment, Technology, and a Maritime Network',
    task: 'Use TWO evidence cards from different parts of the Indian Ocean trade system—for example, monsoon winds or maritime technology, port states, merchant communities, or Zheng He.',
    prompt: 'After 1200, how much did knowledge of the environment—especially monsoon winds—help Indian Ocean trade grow compared with the power of states? Make a clear claim. Use at least two pieces of evidence from different parts of the trade system, explain how each one helped trade grow, and include one example showing that political power or another factor also mattered.'
  };

  lesson.images = [
    { title: 'Indian Ocean Trade Network', url: '../assets/images/topics/2-3/2.3 - Indian Ocean Trade Map Detailed.png', sourceUrl: '../assets/images/topics/2-3/2.3 - Indian Ocean Trade Map Detailed.png', caption: 'Secondary visual evidence. A detailed classroom map shows maritime routes linking East Africa, Arabia, South Asia, Southeast Asia, and China.', prompt: 'NOTICE the connected regions and chokepoints. What can you INFER about why port cities became powerful? What can the map not prove by itself?' },
    { title: 'Monsoon Wind System', url: '../assets/images/topics/2-3/2.3 - Monsoons map.jpg', sourceUrl: '../assets/images/topics/2-3/2.3 - Monsoons map.jpg', caption: 'Environmental evidence. The monsoon map shows seasonal wind patterns that made round-trip voyage planning possible.', prompt: 'NOTICE the seasonal reversal. What can you INFER about how merchants planned travel, waiting, and return voyages?' },
    { title: 'Dhow Ship and Maritime Technology', url: '../assets/images/topics/2-3/2.3 - Dhow Ship.jpeg', sourceUrl: '../assets/images/topics/2-3/2.3 - Dhow Ship.jpeg', caption: 'Technology evidence. Maritime vessels and sailing knowledge helped transform wind into cargo-moving power.', prompt: 'NOTICE the ship design and sail. How could maritime technology increase the volume or distance of trade compared with overland routes?' },
    { title: 'State-Growth Evidence — Port States', label: 'CED historical development · Topic 2.3', sourceText: ['Indian Ocean exchange fostered the growth of states and commercial centers around the basin.', 'Illustrative examples include Swahili Coast city-states, Gujarat, and the Sultanate of Malacca.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What common economic opportunity links these otherwise different states? What additional evidence would you need to explain why one port grew faster than another?' },
    { title: 'Diaspora Evidence — Merchant Communities', url: '../assets/images/topics/2-3/2.3 - Swahili Merchants.jpg', sourceUrl: '../assets/images/topics/2-3/2.3 - Swahili Merchants.jpg', caption: 'Diasporic-community visual. Merchant communities lowered risk by building trust, translation, credit, religious familiarity, and local connections.', prompt: 'How could a permanent merchant community lower the cost or risk of long-distance exchange? What kinds of cultural evidence would demonstrate reciprocal influence?' },
    { title: 'Zheng He — State-Backed Maritime Contact', url: '../assets/images/topics/2-3/2.3 - Zheng He Fleet.jpg', sourceUrl: '../assets/images/topics/2-3/2.3 - Zheng He Fleet.jpg', caption: 'State-backed contact evidence. Zheng He shows how a mature Indian Ocean system could support diplomacy, prestige, tribute, and cultural exchange.', prompt: 'What does state sponsorship add to the story of a network usually driven by merchants? Why should Zheng He be treated as evidence of intensified contact rather than as the origin of Indian Ocean trade?' }
  ];
})();
