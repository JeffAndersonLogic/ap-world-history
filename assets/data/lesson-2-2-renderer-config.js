(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Build, Connect, Transfer, Fragment',
    embedUrl: 'first-and-10-topic-2-2-mongol-empire-capture.html',
    note: 'Read for four moves: how the Mongols built power, how the empire fragmented, how imperial expansion increased exchange, and what knowledge moved through those connections.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Imperial expansion', detail: 'Mongol conquest created the largest contiguous land empire in history and drew conquered peoples into new political and economic relationships.' },
      { label: 'Khanates', detail: 'The empire divided into regional khanates, showing both the reach of Mongol state building and the difficulty of governing enormous distances.' },
      { label: 'Pax Mongolica', detail: 'Relative stability and protection across much of Eurasia facilitated trade, diplomacy, and communication.' },
      { label: 'Transfer corridors', detail: 'People and ideas moved across the empire, including medical knowledge, numbering systems, and writing practices.' }
    ]
  };

  lesson.stableImages = {
    map: '../assets/images/instructional-maps/topic-2-2.svg',
    first10: '../assets/images/module-art/unit-2/topic-2-2/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-2/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-2/besurreal.svg',
    skill: '../assets/images/module-art/unit-2/topic-2-2/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-2/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-2/topic-2-2/evidence.svg',
    source: '../assets/images/module-art/unit-2/topic-2-2/source.svg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-2/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-2/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/mongol-court.html',
    desc: 'Enter a Mongol court and weigh the administrative, commercial, and cultural consequences of ruling a connected Eurasian empire.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: An Empire That Borrowed to Rule',
    text: 'Mongol rulers did not impose a single cultural toolkit everywhere. They recruited specialists, borrowed administrative methods, and adopted useful practices from conquered peoples. One striking example was the adoption of the Uyghur script for Mongolian administration.',
    prompt: 'Why might conquering rulers preserve or adopt the knowledge systems of conquered peoples instead of replacing them?'
  };

  lesson.classPresentation = {
    title: 'Class Slides: The Mongol Empire',
    desc: 'Review the Mongol story through state building and fragmentation, expanded Eurasian exchange, and the cultural and technological transfers made possible by intensified contact.',
    url: 'presentation-topic-2-2-student.html'
  };

  lesson.skillBuilder = {
    label: 'Continuity and Change practice',
    title: 'AP Skill Builder: What Changed Under Mongol Rule?',
    intro: 'Track one category across time. Establish the pre-Mongol baseline, identify a change produced by imperial expansion, and explain what continued even after the empire fragmented.',
    steps: [
      { label: '1. Choose a category', text: '<strong>Strong choices:</strong> political organization, overland trade, communication, or cultural/technological transfer.' },
      { label: '2. Establish the baseline', text: 'Long-distance exchange and regional states already existed before Mongol conquest.' },
      { label: '3. Identify a change', text: 'Mongol political control lowered some barriers to movement and linked distant populations more directly.' },
      { label: '4. Use transfer evidence', text: '<strong>Required evidence options:</strong> Greco-Islamic medical knowledge reaching western Europe, numbering systems reaching Europe, or Mongol adoption of the Uyghur script.' },
      { label: '5. Explain continuity or decline', text: 'Regional cultures and older trade routes persisted, while political unity weakened as the empire divided into khanates.' },
      { label: 'Response frame', text: '<strong>Although</strong> ___ continued, Mongol expansion changed ___ because ___. One example was ___, which shows ___.' }
    ],
    prompt: 'Write 3–4 sentences explaining one important change and one continuity associated with the Mongol Empire. Use at least one specific transfer example.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Build and Fragment',
      subtitle: 'Checks Mongol state building and decline.',
      cardDesc: 'Conquest, administration, khanates, and fragmentation.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how the Mongols built a vast Eurasian empire and why that empire later fragmented into regional khanates. Use specific evidence for both parts.',
      responseType: 'Checkpoint 1',
      terms: ['Chinggis Khan', 'khanates', 'Yuan Dynasty', 'Ilkhanate', 'Golden Horde', 'administration'],
      focus: ['Explain one method of state building.', 'Identify the khanate pattern.', 'Explain why governing distance contributed to fragmentation.']
    },
    {
      title: 'Checkpoint 2: Connect and Transfer',
      subtitle: 'Checks exchange and Mongol-era transfers.',
      cardDesc: 'Pax Mongolica, communication, and cultural/technological transfer.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how Mongol expansion affected Eurasian trade and communication, then use ONE specific example of cultural or technological transfer to show why that connectivity mattered.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change',
      terms: ['Pax Mongolica', 'trade', 'communication', 'Greco-Islamic medical knowledge', 'numbering systems', 'Uyghur script'],
      focus: ['Explain how imperial expansion facilitated exchange.', 'Use one required transfer example.', 'Connect the example to a larger pattern of Eurasian interaction.']
    }
  ];

  lesson.evidenceLab = {
    ...lesson.evidenceLab,
    title: 'Evidence Lab: Empire, Connection, and Transfer',
    task: 'Use TWO evidence cards to test what Mongol rule changed. Distinguish political control from the movement of merchants, specialists, knowledge, and technologies.',
    prompt: 'Make one claim about how Mongol expansion changed Eurasian exchange or cultural/technological transfer. Cite two pieces of evidence and explain how they support the claim.'
  };

  lesson.images = [
  { title: 'Mongol Empire and Khanates', url: '../assets/images/instructional-maps/topic-2-2.svg', sourceUrl: '../assets/images/instructional-maps/topic-2-2.svg', caption: 'Secondary geographic evidence. The map reconstructs the enormous territorial reach of Mongol rule and the later division into regional khanates.', prompt: 'NOTICE the scale and later political divisions. What can you INFER about state building, governing distance, and fragmentation? What can a map not establish about how Mongol rule worked locally?' },
  { title: 'Chinggis Khan, Yuan-Era Portrait', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg', caption: 'Political-memory evidence. A later Yuan portrait represents Chinggis Khan as founder of the Mongol imperial tradition.', prompt: 'NOTICE how the founder is represented. What can you INFER about later Mongol political memory or legitimacy? Why is this weak evidence for his actual appearance or battlefield methods?' },
  { title: 'Silk Roads Under Continental Empire', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg', caption: 'Secondary network evidence. A modern map reconstructs overland routes that crossed territories brought under Mongol control.', prompt: 'NOTICE how many routes crossed Mongol-ruled Eurasia. What can you INFER about why political protection and relay systems mattered? What does the map not prove about actual trade volume?' },
  { title: 'Transfer Evidence — Greco-Islamic Medical Knowledge', label: 'CED illustrative example · Topic 2.2', sourceText: ['Mongol-era contacts and conflicts helped connect scholarly traditions across Eurasia.', 'Greco-Islamic medical knowledge reached western Europe through wider patterns of interregional contact and transfer.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What does this example show about the relationship between political contact and knowledge transfer? What additional primary evidence would you want before making a claim about the exact route or people responsible?' },
  { title: 'Transfer Evidence — Numbering Systems', label: 'CED illustrative example · Topic 2.2', sourceText: ['Interregional contacts helped numerical knowledge circulate across Afro-Eurasia.', 'Numbering systems used in the Islamic world spread into Europe as part of broader mathematical and commercial exchange.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'How could a shared or more efficient numbering system affect scholarship or commerce? Why should you avoid claiming that Mongol rule alone caused this transfer?' },
  { title: 'Transfer Evidence — Uyghur Script', label: 'CED illustrative example · Topic 2.2', sourceText: ['Mongol rulers borrowed administrative practices from peoples they conquered or incorporated.', 'The Mongols adopted the Uyghur script for writing Mongolian, illustrating cultural borrowing within the empire.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What does adoption of the Uyghur script reveal about how conquerors governed? How does this complicate a story of conquest as one-way cultural imposition?' }
];
})();
