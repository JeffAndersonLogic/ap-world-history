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
    desc: 'Follow one chain four times: bigger networks brought more contact, which spread and reshaped beliefs and technologies, built and broke cities, and sent travelers home to write about what they saw.',
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
      prompt: 'Explain how ONE belief system or technology spread through Afro-Eurasian trade networks between about 1200 and 1450. Name a specific example (Buddhism, Hinduism, Islam, paper, or gunpowder), say where it moved, and explain how the network helped it spread.',
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
    {
      title: 'The Diamond Sutra, Printed 868, Found at Dunhuang',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diamond%20Sutra%20of%20868%20AD%20-%20The%20Diamond%20Sutra%20%28868%29%2C%20frontispiece%20and%20text%20-%20BL%20Or.%208210-P.2.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Diamond_Sutra_of_868_AD_-_The_Diamond_Sutra_%28868%29%2C_frontispiece_and_text_-_BL_Or._8210-P.2.jpg',
      caption: 'A Buddhist scripture first written in India, here in the Chinese translation made around 400 by Kumarajiva, a monk from the Silk Road oasis of Kucha. This copy was printed from carved wooden blocks in 868 and found sealed in a cave at the Mogao Caves, Dunhuang, in 1900. It is the earliest dated printed book known, made more than three centuries before this period.',
      prompt: 'NOTICE the writing, the picture, and how the page was made. What can you INFER about how Buddhism, a religion that began in India, took root in China? Because this book is older than 1200, what can it show about the period 1200 to 1450, and what can it not?'
    },
    {
      title: 'Yuan Paper Money and Its Printing Plate, 1287',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yuan%20dynasty%20banknote%20with%20its%20printing%20plate%201287.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yuan_dynasty_banknote_with_its_printing_plate_1287.jpg',
      caption: 'A paper banknote issued in 1287 by the Yuan dynasty, the Mongol rulers of China, shown with its wooden printing plate. Its text, in Chinese and in the Mongols\' new \'Phags-pa script, sets its value at two strings of coins and threatens counterfeiters with death. Paper money had first come into use in China under the Song dynasty in the 1000s.',
      prompt: 'NOTICE the plate, the two kinds of writing, and the warning to counterfeiters. What can you INFER about how the Mongols used a Chinese technology to run their empire? When the Mongol ruler of Persia tried paper money in 1294, merchants refused it within months: what does that suggest about moving a technology to a new place?'
    },
  { title: 'The Mongol Siege of Baghdad, 1258', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bagdad1258.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bagdad1258.jpg', caption: 'Painting from a Persian history manuscript made about 1430 to 1434, nearly two centuries after the event, showing Mongol forces besieging Baghdad. Baghdad had been the capital of the Abbasid Caliphate and one of the great centers of learning in the Islamic world.', prompt: 'NOTICE the walls, the river, and the siege weapons. What can you INFER about how a rich, connected city could be exposed to conquest? Because the artist worked long after 1258, what can this picture prove, and what can it not?' },
  { title: 'A Caravan on the Catalan Atlas, 1375', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_Marco_Polo.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravane_Marco_Polo.jpg', caption: 'Detail of the Catalan Atlas, a world map made in Majorca in 1375 and attributed to the mapmaker Abraham Cresques. It shows a caravan of riders and camels crossing Asia, a scene often connected with the Polo family\'s journey.', prompt: 'NOTICE who is traveling and how they are moving. What can you INFER about how European mapmakers learned about Asia by 1375? What does a map made in Majorca suggest about how far travel accounts had spread?' }
];
})();
