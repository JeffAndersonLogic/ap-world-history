(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Same Network Could Feed You and Kill You',
    embedUrl: 'first-and-10-topic-2-6-environmental-consequences-capture.html?v=feed-kill-v1',
    note: 'Read for the story: busier routes, living things ride along, they land somewhere new, and the result is more food or mass death.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: '1. Along the Silk Roads', detail: 'The map starts in Central Asia, where plague lived among wild rodents, and follows the disease west along the caravan routes.' },
      { label: '2. Black Sea to Italian ports', detail: 'By 1346 the plague had reached Caffa, a Black Sea trading port run by merchants from Genoa. In 1347 ships carried it to Italian ports.' },
      { label: '3. Inland from the ports', detail: 'From the ports it spread inland. In Europe roughly a third to half of the people died.' },
      { label: '4. Into North Africa', detail: 'The same sea lanes carried it into North Africa.' },
      { label: 'Geographic takeaway', detail: 'Exchange networks moved living things as well as goods: some increased food production while others produced demographic catastrophe.' }
    ]
  };

  lesson.stableImages = {
    map: '../assets/images/instructional-maps/topic-2-6.svg',
    first10: '../assets/images/module-art/unit-2/topic-2-6/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-6/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-6/besurreal.svg',
    skill: '../assets/images/module-art/unit-2/topic-2-6/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-6/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-2/topic-2-6/evidence.svg',
    source: '../assets/images/module-art/unit-2/topic-2-6/source.svg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-6/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-6/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/the-plague-ships.html',
    desc: 'Enter a plague-struck port city as one case study in the pathogen side of a larger ecological story about living things moving through trade networks.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Same Network Can Feed and Kill',
    text: 'Connectivity does not assign moral categories to what moves through it. A crop can enter a new environment and increase food supply. A pathogen can enter a new population and cause mass mortality. The mechanism is the same: repeated movement among connected regions.',
    prompt: 'Why should historians analyze crop diffusion and plague transmission as two environmental consequences of the same exchange system?'
  };

  lesson.classPresentation = {
    title: 'Class Slides: Environmental Consequences of Connectivity',
    desc: 'Follow the biological-consequences story: trade accidentally connected ecosystems, moving crops that could feed people and pathogens that could devastate populations.',
    url: 'presentation-topic-2-6-student.html'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'AP Skill Builder: Trace an Environmental Consequence',
    intro: 'Build a causal chain from exchange network to biological movement to an environmental or demographic effect. Keep crop diffusion and pathogen diffusion distinct.',
    steps: [
      { label: '1. Choose a branch', text: '<strong>Crops:</strong> bananas in Africa, new rice varieties in East Asia, or citrus in the Mediterranean.<br><strong>Pathogen:</strong> bubonic plague.' },
      { label: '2. Identify the network mechanism', text: 'Explain how merchants, travelers, ships, caravans, or connected markets moved the crop or pathogen beyond its earlier range.' },
      { label: '3. State the immediate effect', text: 'For crops, focus on agricultural production, diet, or population-supporting capacity. For plague, focus on epidemic spread and mortality.' },
      { label: '4. Explain the larger consequence', text: 'Connect the biological movement to population, labor, settlement, or environmental change.' },
      { label: 'Response frame', text: 'Because exchange networks connected ___ and ___, ___ spread to ___. This changed ___ by ___.' }
    ],
    prompt: 'Write 3–4 sentences tracing one crop OR bubonic plague from exchange-network movement to a specific environmental or demographic consequence.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Crop Diffusion',
      subtitle: 'Checks beneficial and productive environmental change.',
      cardDesc: 'Bananas, new rice varieties, and citrus.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Choose ONE required crop example: bananas in Africa, new rice varieties in East Asia, or citrus in the Mediterranean. Explain how exchange networks spread it and what environmental or demographic effect followed.',
      responseType: 'Checkpoint 1',
      terms: ['bananas', 'new rice varieties', 'citrus', 'crop diffusion', 'agricultural productivity', 'population'],
      focus: ['Name the crop and destination.', 'Explain how connectivity enabled diffusion.', 'Explain the resulting environmental or demographic effect.']
    },
    {
      title: 'Checkpoint 2: Pathogen Diffusion',
      subtitle: 'Checks the destructive biological side of connectivity.',
      cardDesc: 'Bubonic plague, trade routes, and demographic consequences.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Explain how trade networks contributed to the spread of bubonic plague and identify one demographic or social consequence of that spread.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['bubonic plague', 'Black Death', 'trade routes', 'mortality', 'population decline', 'labor shortage'],
      focus: ['Explain the network mechanism.', 'Identify the demographic effect.', 'Connect greater connectivity to greater vulnerability.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Crops and Pathogens on the Move',
    task: 'Use the evidence to compare two environmental consequences of connectivity. Choose at least one crop-diffusion card and one pathogen/connectivity card. Observe first, infer second, and keep the two causal branches distinct.',
    prompt: 'Using evidence from both crop diffusion and pathogen diffusion, explain how expanding exchange networks changed environments or populations. Cite one concrete detail from each card and explain one limitation of either source.'
  };

  lesson.images = [
    { title: 'Crop Diffusion Across Afro-Eurasia', url: '../assets/images/instructional-maps/topic-2-6-crops.svg', sourceUrl: '../assets/images/instructional-maps/topic-2-6-crops.svg', caption: 'Secondary geographic reconstruction. The map traces the CED examples of bananas into Africa, new rice varieties into East Asia, and citrus around the Mediterranean.', prompt: 'NOTICE the three different crop movements. What can you INFER about how trade networks changed food production in receiving regions? What can a modern reconstruction not prove about exactly when, or by what route, each crop moved?' },
    { title: 'Spread of the Black Death, c. 1340–1353', url: '../assets/images/instructional-maps/topic-2-6.svg', sourceUrl: '../assets/images/instructional-maps/topic-2-6.svg', caption: 'Secondary geographic reconstruction. The map plots the plague’s movement across trade corridors, coastlines, and densely connected regions.', prompt: 'NOTICE the sequence and direction of spread. What can you INFER about connectivity? What can this map show about the overall pattern, and what can it not tell you about how any one person caught the disease?' },
    { title: 'Silk Roads Across Afro-Eurasia', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg', caption: 'Secondary network evidence. A modern route map shows the exchange corridors that connected Central Asia with Southwest Asia and Europe.', prompt: 'NOTICE how exchange corridors linked regions. How could the same infrastructure move useful crops and dangerous pathogens? Why does a route map alone not prove what moved on a particular journey?' },
    { title: 'Danse Macabre, Michael Wolgemut, 1493', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Danse_macabre_by_Michael_Wolgemut.png', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Danse_macabre_by_Michael_Wolgemut.png', caption: 'Later cultural-memory evidence. This 1493 print belongs to the post-Black Death European tradition of the “dance of death,” in which death reaches people across social ranks.', prompt: 'NOTICE who is represented alongside death. What can you INFER about the cultural memory of mass mortality? Why is a 1493 image evidence of memory rather than a direct eyewitness image of 1348?' }
  ];
})();