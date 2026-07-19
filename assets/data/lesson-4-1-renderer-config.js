(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-4.1.II',
      theme: 'Technology and Innovation',
      text: 'Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.II.A',
      theme: 'Technology and Innovation',
      text: 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns, all of which made transoceanic travel and trade possible.',
      illustrativeExamples: ['Caravel', 'Carrack', 'Fluyt', 'Lateen sail', 'Compass', 'Astronomical charts']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Navigational Revolution',
    embedUrl: 'first-and-10-topic-4-1-technological-innovations-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Atlantic Ocean', detail: 'The primary geographic challenge for European explorers, an open ocean with no landmarks, unpredictable currents, and no reliable way to determine position without navigational instruments.' },
      { label: 'African coast', detail: 'Portuguese explorers systematically extended their knowledge of the African coast southward from 1415, producing portolan charts that documented coastlines, harbors, and wind patterns.' },
      { label: 'Cape of Good Hope', detail: 'The southern tip of Africa, rounded by Bartolomeu Dias in 1488, the critical geographic point that proved a sea route to the Indian Ocean was accessible from the Atlantic.' },
      { label: 'Geographic takeaway', detail: 'Oceanic exploration required three overlapping technologies working together: instruments for navigation (compass, astrolabe), a ship design that could work against the wind (caravel with lateen sails), and a knowledge infrastructure to record and share discoveries (portolan charts, printing press).' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Abbas_I.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-cape-route-brief.html',
    desc: 'Advise João II before the Dias expedition: combine instruments, ship design, Atlantic wind knowledge, African intelligence, and state finance to find and return from a route around southern Africa.'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Causation: How Technology Enabled Exploration',
    intro: 'Causation means explaining WHY something happened, identifying causes and explaining the MECHANISM by which they produced a historical outcome. For Topic 4.1, you need to explain how specific maritime technologies caused European oceanic exploration to become possible after c. 1450. A strong causal argument names a specific technology, explains what problem it solved, and connects the solution to a specific exploratory outcome that would not have been possible without it.',
    steps: [
      { label: 'Identify the cause', text: 'The caravel combined lateen sails (for maneuvering against the wind) with square sails (for downwind speed) in a small, shallow-draft hull. This solved the specific problem of returning north from West Africa against the prevailing southward winds, a problem that had made extended Atlantic exploration nearly impossible with traditional square-rigged ships.' },
      { label: 'Explain the mechanism', text: 'Because the caravel could sail against the wind, Portuguese navigators could probe further south along the African coast without fearing they could not get home. Each voyage extended the known coastline by a measured distance. The geographic knowledge from each voyage was systematically incorporated into updated portolan charts, which served as the foundation for the next expedition.' },
      { label: 'Connect to the effect', text: 'The caravel, combined with latitude-measuring instruments (astrolabe, cross-staff) and the knowledge infrastructure of portolan charts and later printed maps, allowed Portugal to achieve sustained, systematic, state-sponsored oceanic exploration. Without the caravel\'s design, the instruments for measuring position, or the knowledge infrastructure for recording and sharing discoveries, the Portuguese model of exploration would not have worked.' }
    ],
    prompt: 'In 2–3 sentences, explain how ONE specific maritime technology caused a specific change in European navigators\' ability to explore. Name the technology, explain the mechanism (what problem it solved), and connect it to a specific voyaging outcome that would not have been possible without it.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Maritime Technologies and Navigation',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Compass, astrolabe, lateen sail, caravel, the tools that made oceanic voyaging possible.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify at least THREE specific maritime technologies that enabled European oceanic exploration after c. 1450. For each technology, explain what specific navigation problem it solved and how it contributed to making extended oceanic voyaging possible.',
      responseType: 'Checkpoint 1',
      terms: ['compass', 'astrolabe', 'lateen sail', 'caravel', 'dead reckoning', 'latitude', 'portolan chart', 'cross-staff', 'quadrant', 'square sail'],
      focus: ['Name at least three specific technologies.', 'For each, explain the specific navigation problem it solved.', 'Connect the technologies to the capability for extended oceanic voyaging.']
    },
    {
      title: 'Checkpoint 2: Maps, Printing, and State Sponsorship',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Portolan charts, Waldseemüller map, printing press, and the Portuguese model of systematic exploration.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how cartographic innovations (portolan charts, Waldseemüller map) and the printing press contributed to European exploration. Then explain how state sponsorship, especially the Portuguese model pioneered by Prince Henry, connected technology to organized, sustained exploration. Use specific evidence.',
      responseType: 'Checkpoint 2',
      terms: ['portolan chart', 'Waldseemüller map', 'printing press', 'Prince Henry', 'Sagres', 'cartography', 'latitude', 'geographic knowledge', 'state sponsorship', 'cosmographer'],
      focus: ['Explain how the printing press changed the distribution of geographic knowledge.', 'Give one specific example of a cartographic innovation and explain its significance.', 'Explain the Portuguese model: how state sponsorship connected technology to systematic, cumulative exploration.']
    }
  ];
})();
