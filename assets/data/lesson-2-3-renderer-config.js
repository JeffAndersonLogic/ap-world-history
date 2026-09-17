(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: How an Ocean Became a Trade System',
    embedUrl: 'first-and-10-topic-2-3-indian-ocean-capture.html',
    note: 'Read for the system: monsoon knowledge + maritime technology -> larger exchange -> state growth, diasporic communities, and wider cultural transfer.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Monsoon wind system', detail: 'Predictable seasonal winds made round-trip voyages across the Indian Ocean practical.' },
      { label: 'Maritime technology', detail: 'The compass, astrolabe, and larger ship designs increased navigational reliability and carrying capacity.' },
      { label: 'Growing states', detail: 'Trade helped strengthen states and port centers including the Swahili Coast, Gujarat, and the Sultanate of Malacca.' },
      { label: 'Diasporic communities', detail: 'Arab, Persian, Chinese, and Malay merchants established communities that blended imported and local cultural traditions.' },
      { label: 'Zheng He', detail: 'Ming-sponsored voyages under Zheng He demonstrate the scale of state-backed maritime activity and interregional contact.' }
    ]
  };

  lesson.stableImages = {
    map: '../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg',
    first10: '../assets/images/module-art/unit-2/topic-2-3/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-3/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-3/besurreal.svg',
    skill: '../assets/images/module-art/unit-2/topic-2-3/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-3/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-2/topic-2-3/evidence.svg',
    source: '../assets/images/module-art/unit-2/topic-2-3/source.svg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-3/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-3/checkpoint2.svg'
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
    task: 'Choose TWO cards that address different parts of the system: environmental knowledge, maritime technology, state growth, or long-distance exchange.',
    prompt: 'Make one claim explaining how Indian Ocean trade intensified or what changed because it did. Use two specific pieces of evidence and explain the causal connection.'
  };
})();