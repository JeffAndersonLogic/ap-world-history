(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Goods Were Never the Only Cargo',
    embedUrl: 'first-and-10-topic-2-5-cultural-consequences-capture.html?v=cargo-v1',
    note: 'Read for the chain: bigger networks, then more contact, then diffusion and adaptation, then cultural and intellectual change. Watch it happen to beliefs, technologies, cities, and travelers.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Cultural diffusion', detail: 'Buddhism, Hinduism, and Islam spread or deepened their influence through exchange networks.' },
      { label: 'Technology diffusion', detail: 'Paper and gunpowder moved across Afro-Eurasia as merchants, scholars, states, and travelers connected regions.' },
      { label: 'Changing cities', detail: 'Expanding trade could strengthen commercial cities, while shifts in routes, warfare, or political power could contribute to urban decline.' },
      { label: 'Travel accounts', detail: 'Ibn Battuta, Marco Polo, Margery Kempe, and other travelers recorded observations from an increasingly connected Afro-Eurasian world.' },
      { label: 'Geographic takeaway', detail: 'The same networks that moved goods also changed culture, urban life, and what people knew about distant societies.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_Trade_%28c.1200_CE%29.jpg',
    first10: '../assets/images/module-art/unit-2/topic-2-5/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-5/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-5/besurreal.svg',
    skill: '../assets/images/module-art/unit-2/topic-2-5/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-5/checkpoint1.svg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    source: '../assets/images/module-art/unit-2/topic-2-5/source.svg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-5/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-5/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/silk-road-scholar.html',
    desc: 'Travel through a connected intellectual world and decide what knowledge to preserve, translate, carry, and record for audiences far from where you encountered it.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Medieval World Through Travelers\' Eyes',
    text: 'Ibn Battuta, Marco Polo, and Margery Kempe traveled for very different reasons, but each left an account (all three dictated theirs to someone else, who wrote it down) that exposed readers to places, peoples, institutions, and customs far from home. Intensified networks did not just move people; they generated new written evidence about a connected world.',
    prompt: 'How does the growth of travel writing itself serve as evidence that Afro-Eurasian networks were intensifying?'
  };

  lesson.classPresentation = {
    title: 'Class Slides: Cultural Consequences of Connectivity',
    desc: 'Follow the three-part consequence story: diffusion, changing city fortunes, and travelers documenting an increasingly connected Afro-Eurasian world.',
    url: 'presentation-topic-2-5-student.html'
  };

  lesson.skillBuilder = {
    label: 'Continuity and Change practice',
    title: 'AP Skill Builder: Track a Cultural Consequence of Connectivity',
    intro: 'Choose one of the topic\'s three CED lenses and explain both what changed and why intensified exchange mattered.',
    steps: [
      { label: 'Lens 1: Ideas and technologies', text: '<strong>Examples:</strong> Buddhism in East Asia; Hinduism and Buddhism in Southeast Asia; Islam in sub-Saharan Africa and Asia; paper; gunpowder.' },
      { label: 'Lens 2: Cities', text: 'Explain how rising productivity and expanding trade networks could support urbanization, while route shifts, political disruption, or conflict could contribute to decline.' },
      { label: 'Lens 3: Travelers', text: '<strong>Examples:</strong> Ibn Battuta, Marco Polo, and Margery Kempe. Ask what their written accounts reveal about intensified movement and contact.' },
      { label: 'Explain the mechanism', text: 'Do not merely state that something spread or a traveler moved. Show how exchange networks made the cultural consequence possible.' },
      { label: 'Response frame', text: 'As exchange networks intensified, ___. This occurred because ___. One example is ___, which demonstrates ___.' }
    ],
    prompt: 'Write 3–4 sentences explaining one intellectual or cultural consequence of intensified exchange. Use a specific CED example and explain the mechanism.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Cultural and Technological Diffusion',
      subtitle: 'Checks how ideas and innovations moved.',
      cardDesc: 'Religion, paper, and gunpowder across Afro-Eurasia.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how ONE cultural tradition or technology diffused through Afro-Eurasian exchange networks from c. 1200 to c. 1450. Use a specific CED example and explain how the network enabled movement.',
      responseType: 'Checkpoint 1',
      terms: ['Buddhism', 'Hinduism', 'Islam', 'paper', 'gunpowder', 'diffusion'],
      focus: ['Name a specific tradition or innovation.', 'Identify where it moved.', 'Explain how intensified exchange enabled the diffusion.']
    },
    {
      title: 'Checkpoint 2: Cities and Travelers',
      subtitle: 'Checks the other two cultural consequences of connectivity.',
      cardDesc: 'Urban fortunes and written travel accounts.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain ONE way intensified exchange affected cities and ONE way it increased written knowledge about distant societies. Use a traveler such as Ibn Battuta, Marco Polo, or Margery Kempe as evidence.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['urbanization', 'city decline', 'trade networks', 'Ibn Battuta', 'Marco Polo', 'Margery Kempe', 'travel account'],
      focus: ['Explain a change in urban fortunes.', 'Use a named traveler.', 'Connect both developments to intensified exchange.']
    }
  ];

  lesson.evidenceLab = {
    ...lesson.evidenceLab,
    title: 'Evidence Lab: Traces of a More Connected World',
    task: 'Choose TWO cards that illuminate different consequences of connectivity: cultural/technological diffusion, urban change, or travel writing.',
    prompt: 'Make one claim about how intensified exchange changed Afro-Eurasian culture or knowledge. Use two pieces of evidence and explain what each can and cannot establish.'
  };

  lesson.images = [
  { title: 'Great Buddha at the Mogao Caves, Dunhuang', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Buddha,_Cave_96,_Mogao_Caves.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great_Buddha,_Cave_96,_Mogao_Caves.jpg', caption: 'Religious-diffusion evidence. The Mogao cave complex at the Silk Road oasis of Dunhuang preserves centuries of Buddhist patronage along an overland exchange corridor.', prompt: 'NOTICE the scale and religious imagery. What can you INFER about Buddhism’s presence at a trade-route oasis? What evidence would you need to prove how merchants, rulers, and monks each contributed to diffusion?' },
  { title: 'Jiaozi Paper Money in Song China', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jiao_zi.jpg', caption: 'Technology-origin evidence. Paper and printing were established technologies in China before their wider diffusion westward.', prompt: 'NOTICE the sophisticated use of paper. What does this establish about paper technology in China? Papermaking had already spread west to the Islamic world by the 700s, centuries before this note: what can this picture not tell you about how that happened?' },
  { title: 'The Mongol Siege of Baghdad, 1258', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bagdad1258.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bagdad1258.jpg', caption: 'Painting from a Persian history manuscript made about 1430 to 1434, nearly two centuries after the event, showing Mongol forces besieging Baghdad. Baghdad had been the capital of the Abbasid Caliphate and one of the great centers of learning in the Islamic world.', prompt: 'NOTICE the walls, the river, and the siege weapons. What can you INFER about how a rich, connected city could be exposed to conquest? Because the artist worked long after 1258, what can this picture prove, and what can it not?' },
  { title: 'A Caravan on the Catalan Atlas, 1375', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_Marco_Polo.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravane_Marco_Polo.jpg', caption: 'Detail of the Catalan Atlas, a world map made in Majorca in 1375 and attributed to the mapmaker Abraham Cresques. It shows a caravan of riders and camels crossing Asia, a scene often connected with the Polo family\'s journey.', prompt: 'NOTICE who is traveling and how they are moving. What can you INFER about how European mapmakers learned about Asia by 1375? What does a map made in Majorca suggest about how far travel accounts had spread?' }
];
})();
