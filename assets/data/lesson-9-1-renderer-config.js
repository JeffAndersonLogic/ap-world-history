// lesson-9-1-renderer-config.js
// Topic 9.1, Advances in Technology and Exchange After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// Topic 9.1 has NO illustrative examples in the CED.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Technology and Innovation (TEC)',
      theme: 'Technology and Innovation',
      text: 'Human adaptation and innovation have resulted in increased efficiency, comfort, and security, and technological advances have shaped human development and interactions with both intended and unintended consequences.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 9: Learning Objective A',
      theme: 'Learning Objective',
      text: 'Explain how the development of new technologies changed the world from 1900 to the present.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.I.A',
      theme: 'Technology and Innovation',
      text: 'New modes of communication, including radio communication, cellular communication, and the internet, as well as transportation, including air travel and shipping containers, reduced the problem of geographic distance.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.I.D',
      theme: 'Technology and Innovation',
      text: 'Energy technologies, including the use of petroleum and nuclear power, raised productivity and increased the production of material goods.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.III.B',
      theme: 'Technology and Innovation',
      text: 'More effective forms of birth control gave women greater control over fertility, transformed reproductive practices, and contributed to declining rates of fertility in much of the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.I.B',
      theme: 'Technology and Innovation',
      text: 'The Green Revolution and commercial agriculture increased productivity and sustained the earth’s growing population as it spread chemically and genetically modified forms of agriculture.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.I.C',
      theme: 'Technology and Innovation',
      text: 'Medical innovations, including vaccines and antibiotics, increased the ability of humans to survive and live longer lives.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Advances in Technology and Exchange',
    embedUrl: 'first-and-10-topic-9-1-technology-exchange-capture.html?v=20260628',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 9.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Communication technologies', detail: 'Radio, cellular communication, and the internet connected people across continents, collapsing the distance between governments, markets, and households.' },
      { label: 'Transportation technologies', detail: 'Air travel and shipping containers made the movement of people and goods faster, cheaper, and more routine than at any previous point in history.' },
      { label: 'Agricultural technologies', detail: 'The Green Revolution spread high-yield crops from Mexico and the Philippines to India and beyond, sustaining a growing population but creating chemical dependence and displacing small farmers.' },
      { label: 'Geographic takeaway', detail: 'The map reveals a world in which geographic distance itself became less significant, but the benefits and costs of new technologies were distributed unevenly across regions.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atwater_Kent_radio.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Norman_Borlaug.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oil_Refinery.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Norman_Borlaug.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Norman_Borlaug.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Norman_Borlaug.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chernobyl_nuclear_power_plant.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-9/green-revolution-india.html',
    desc: 'New Delhi, 1966. Two failed monsoons. India depends on American grain shipments to survive. You are an advisor in the Ministry of Food and Agriculture. Should India adopt imported high-yield wheat seed, and accept the dependence that comes with it?'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Box That Changed Everything',
    desc: 'A metal box, 20 feet long, that no one noticed, until it reshaped the entire world economy.',
    intro: 'In 1956, a former trucking company owner named Malcom McLean loaded 58 aluminum containers onto a converted oil tanker in Newark, New Jersey.',
    detail: 'Before standardized shipping containers, loading a single cargo ship could take a week. Longshoremen moved goods piece by piece, barrels, crates, sacks, boxes of different sizes, by hand. McLean\'s containers could be loaded by crane in minutes.',
    text: 'In 1956, a former trucking company owner named Malcom McLean loaded 58 aluminum containers onto a converted oil tanker in Newark, New Jersey. Before standardized shipping containers, loading a single cargo ship could take a week. Longshoremen moved goods piece by piece, barrels, crates, sacks, boxes of different sizes, by hand and hand truck. McLean\'s insight was brutally simple: make every box the same size. His containers could be loaded by crane in minutes and transferred directly to trucks or trains without unpacking. By the 1970s, containerization had cut shipping costs by over 90% and destroyed the old dockworker economy overnight. A technology no one celebrated at the time quietly made globalized manufacturing possible.',
    prompt: 'McLean\'s container is a technology that no one protested, no one celebrated, and no government debated, yet it reshaped the global economy more than most political decisions of the 20th century. What does this reveal about how technological change actually happens?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Trace Intended and Unintended Consequences of Technology',
    intro: 'The TEC thematic focus states that technological advances have shaped human development “with both intended and unintended consequences.” This skill practice asks you to trace the causal chain from a technology’s introduction to its intended effect and then to at least one unintended consequence that followed.',
    steps: [
      { label: 'Technology', text: 'Choose one technology from this topic: radio, the internet, shipping containers, petroleum, nuclear power, Green Revolution crops, vaccines, antibiotics, or birth control.' },
      { label: 'Intended Consequence', text: 'Explain what the technology was designed to do and how it succeeded. Be specific: who benefited, and how did productivity, connectivity, or survival change?' },
      { label: 'Unintended Consequence', text: 'Explain one consequence that the technology’s designers did not anticipate or intend. How did this consequence emerge from the same features that made the technology successful?' }
    ],
    prompt: 'Write a causation paragraph that traces one technology from this topic through its intended consequence to at least one unintended consequence. Your paragraph should use specific evidence and explain the causal mechanism, not just list outcomes.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Communication, Transportation, and Energy',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'New technologies that reduced distance and raised productivity after 1900.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how at least TWO new technologies changed the world after 1900. In your response, explain how each technology achieved its intended purpose AND identify at least one unintended consequence. Use specific historical evidence. Your technologies may come from communication, transportation, or energy.',
      responseType: 'Checkpoint 1',
      terms: ['radio', 'cellular', 'internet', 'air travel', 'shipping container', 'petroleum', 'nuclear power', 'Chernobyl', 'Fukushima', 'geographic distance', 'productivity', 'material goods', 'intended', 'unintended'],
      focus: ['Name at least two specific technologies and explain what each was designed to do.', 'Explain how each technology changed the world, use evidence (dates, places, measurable effects).', 'Identify at least one unintended consequence and explain why it was unintended.']
    },
    {
      title: 'Checkpoint 2: Change Over Time — Technology’s Intended and Unintended Consequences',
      subtitle: 'Checks all three Learning Targets and all three Success Criteria.',
      cardDesc: 'Argue change-over-time using intended and unintended consequences as evidence.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Write a change-over-time argument explaining how new technologies changed the world from 1900 to the present. Your argument must use at least one intended consequence and at least one unintended consequence as evidence. Draw from at least TWO of the following categories: communication/transportation, energy/agriculture, or medicine/birth control.',
      responseType: 'Checkpoint 2',
      terms: ['change over time', 'intended', 'unintended', 'Green Revolution', 'birth control', 'fertility', 'vaccine', 'antibiotic', 'population growth', 'life expectancy', 'geographic distance', 'productivity', 'consequences', 'technology'],
      focus: ['Open with a clear claim about how technology changed the world after 1900.', 'Use at least one intended consequence and one unintended consequence as evidence.', 'Draw from at least two categories of technology (communication/transport, energy/agriculture, medicine/birth control).', 'Explain the causal mechanism, how and why the change happened, not just what changed.']
    }
  ];

  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+9+-+Globalization&entry.187055090=9.1+-+Advances+in+Technology+and+Exchange&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+9+-+Globalization&entry.187055090=9.1+-+Advances+in+Technology+and+Exchange&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
