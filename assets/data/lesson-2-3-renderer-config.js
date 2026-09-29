(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  const topic23 = '../assets/images/topics/2-3/';
  const img = {
    dhow: topic23 + '2.3 - Dhow Ship.jpeg',
    tradeMap: topic23 + '2.3 - Indian Ocean Trade Map Detailed.jpg',
    orgChart: topic23 + '2.3 - Indian Ocean Trade Org Chart.png',
    monsoonMap: topic23 + '2.3 - Monsoons map.jpg',
    swahili: topic23 + '2.3 - Swahili Merchants.jpg',
    zhengHe: topic23 + '2.3 - Zheng He Fleet.jpg'
  };

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Ocean That Ran on a Schedule',
    embedUrl: 'first-and-10-topic-2-3-indian-ocean-capture.html?v=schedule-v1',
    note: 'Read for the story: old routes, then predictable winds and better tools, then more trade, then ports, diasporas, and Zheng He.'
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

  lesson.classPresentation = {
    title: 'Class Slides: The Ocean That Ran on a Schedule',
    desc: 'Follow the system story: predictable monsoon winds, better ships and navigation, and the ports and merchant communities that grew because trade ran on a calendar.',
    url: 'presentation-topic-2-3-student.html'
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
    task: 'Question: After 1200, how much did knowledge of the environment, especially monsoon winds, help Indian Ocean trade grow compared with the power of states?',
    prompt: 'After 1200, how much did knowledge of the environment, especially monsoon winds, help Indian Ocean trade grow compared with the power of states? Make a clear claim. Use at least two pieces of evidence from different parts of the trade system, explain how each one helped trade grow, and include one example showing that political power or another factor also mattered.'
  };

  // Module 07 is observation of real historical objects. The topic's slide
  // illustrations are AI-generated and are deliberately not in this pool; see
  // teacher/data/topic-2-3-presentation-assets.js.
  lesson.images = [
    { title: 'Monsoon Wind System', url: '../assets/images/topics/2-3/2.3 - Monsoons map.jpg', sourceUrl: '../assets/images/topics/2-3/2.3 - Monsoons map.jpg', caption: 'Secondary environmental evidence. A modern classroom map shows the seasonal wind patterns that made round-trip voyage planning possible.', prompt: 'NOTICE the seasonal reversal. What can you INFER about how merchants planned travel, waiting, and return voyages? What can the arrows explain about timing that they cannot prove about trade volume?' },
    { title: 'Borobudur Ship Relief', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur%20ship.JPG', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Borobudur_ship.JPG', caption: 'Maritime-technology baseline. This ship relief from Java predates c. 1200 and documents an established seafaring tradition in the Indian Ocean world.', prompt: 'NOTICE the hull, rigging, steering, or outrigger features. What can you INFER about maritime capability before c. 1200? How does that contextualize later intensification without proving it by itself?' },
    { title: 'Song Dynasty Celadon Bowl', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG', caption: 'Material evidence. A Song dynasty celadon bowl, now in the Honolulu Museum of Art. Chinese celadon of this type has been excavated at Kilwa on the East African coast, thousands of kilometers from where it was made.', prompt: 'NOTICE where this kind of object was made and where pieces like it were found. What can you INFER about exchange across the Indian Ocean? What can one imported object not prove about how many merchants traveled the entire route?' },
    { title: 'State-Growth Evidence — Port States', label: 'CED historical development · Topic 2.3', sourceText: ['Indian Ocean exchange fostered the growth of states and commercial centers around the basin.', 'Illustrative examples include Swahili Coast city-states, Gujarat, and the Sultanate of Malacca.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What common economic opportunity links these otherwise different states? What additional evidence would you need to explain why one port grew faster than another?' },
    { title: 'Diaspora Evidence — Merchant Communities', label: 'CED illustrative examples · Topic 2.3', sourceText: ['Arab and Persian merchant communities developed in East Africa.', 'Chinese merchants settled in Southeast Asia, while Malay communities operated across the Indian Ocean basin.'], caption: 'CED-aligned evidence of diasporic communities and reciprocal cultural influence.', prompt: 'How could a permanent merchant community lower the cost or risk of long-distance exchange? What kinds of cultural evidence would demonstrate reciprocal influence rather than simple settlement?' },
    { title: 'Zheng He — State-Backed Maritime Contact', label: 'CED illustrative example · Topic 2.3', sourceText: ['The Ming state sponsored the large maritime expeditions associated with Zheng He in the early fifteenth century.', 'The voyages linked China to ports across Southeast Asia, South Asia, the Persian Gulf, Arabia, and East Africa.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What does state sponsorship add to the story of a network usually driven by merchants? Why should Zheng He be treated as evidence of intensified contact rather than as the origin of Indian Ocean trade?' }
  ];
})();
