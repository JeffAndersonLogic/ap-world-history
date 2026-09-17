(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Ideas, Cities, and Travelers',
    embedUrl: 'first-and-10-topic-2-5-cultural-consequences-capture.html',
    note: 'Read for three consequences of intensified exchange: cultural/technological diffusion, changing urban fortunes, and more travelers recording what they encountered.'
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
    text: 'Ibn Battuta, Marco Polo, and Margery Kempe traveled for very different reasons, but each left written accounts that exposed readers to places, peoples, institutions, and customs far from home. Intensified networks did not just move people; they generated new written evidence about a connected world.',
    prompt: 'How does the growth of travel writing itself serve as evidence that Afro-Eurasian networks were intensifying?'
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

  lesson.evidenceLab={title:'Evidence Lab: Traces of Diffusion',task:'Choose a PAIR of cards that traces the movement of one idea, religion, or technology across regions. The strongest evidence of diffusion comes from a pattern across places, not from one object alone. Record what each source directly shows, then explain the connection without assuming that trade was the only possible cause.',prompt:'Using two evidence cards, make one claim about cultural or technological diffusion across Afro-Eurasia. Cite one concrete detail from each card, explain how the pair supports your claim, and identify one alternative explanation or limitation you would need to rule out.'};
  lesson.images=[
    {title:'Great Buddha at the Mogao Caves, Dunhuang',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Buddha,_Cave_96,_Mogao_Caves.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Great_Buddha,_Cave_96,_Mogao_Caves.jpg',caption:'Religious-diffusion evidence. The Mogao cave complex at the Silk Road oasis of Dunhuang preserves centuries of Buddhist patronage along an overland exchange corridor.',prompt:'NOTICE the scale and religious imagery. What can you INFER about Buddhism\'s presence at a trade-route oasis? What evidence would you need to prove that merchants, rather than rulers or monks alone, caused its spread?'},
    {title:'Great Mosque of Djenné',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Djenn%C3%A9_2.jpg',caption:'Religious-continuity evidence. The present mosque is a later reconstruction on a long-standing Islamic site in a West African trading city tied to trans-Saharan exchange.',prompt:'NOTICE the public scale of the religious site. What can you cautiously INFER about Islam\'s durable place in a trade city? Why is the current structure not direct evidence for its exact medieval form?'},
    {title:'Jiaozi Paper Money in Song China',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Jiao_zi.jpg',caption:'Technology-origin evidence. Paper and printing were established technologies in China before their wider diffusion westward.',prompt:'NOTICE the use of paper for a complex economic purpose. What does this establish about the technology at its eastern origin? What does it NOT prove about the route by which papermaking later spread?'},
    {title:'Maqamat Manuscript, Baghdad, 1237',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Maqamat_al-Hariri%2C_folio_86r_%28detail%29.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Maqamat_al-Hariri%2C_folio_86r_%28detail%29.jpg',caption:'Technology-reception evidence. A richly illustrated paper manuscript produced in Baghdad in 1237 demonstrates the mature use of paper in the Islamic world centuries after papermaking spread west from China.',prompt:'NOTICE the sophisticated manuscript culture. Paired with Chinese paper evidence, what diffusion claim becomes possible? What additional dating or workshop evidence would strengthen the chain between the two regions?'}
  ];
})();
