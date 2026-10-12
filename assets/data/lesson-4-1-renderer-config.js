(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.classPresentation = {
    title: 'Class Slides: Getting Home',
    desc: 'Follow the story: Europe borrowed its sea tools from older worlds, built new ships around them, and learned the Atlantic\'s winds, and that turned the ocean into a road that ran both ways.',
    url: 'presentation-topic-4-1-student.html'
  };

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 4: Learning Objective A",
      "theme": "Learning Objective",
      "text": "Explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.II",
      "theme": "Technology and Innovation",
      "text": "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.II.A",
      "theme": "Technology and Innovation",
      "text": "The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible.",
      "illustrativeExamples": [
        "Caravel",
        "Carrack",
        "Fluyt",
        "Lateen sail",
        "Compass",
        "Astronomical charts"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Getting Home',
    embedUrl: 'first-and-10-topic-4-1-technological-innovations-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 4.1 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'China', detail: 'The magnetic compass, used at sea by about 1100. Europeans were writing about it by about 1190; historians debate how it traveled west.' },
      { label: 'The Islamic world', detail: 'Astronomers who made the astrolabe precise and built tables of the sky. Greek astronomy, including Ptolemy\'s great book, was studied and corrected in Arabic.' },
      { label: 'The Mediterranean', detail: 'The lateen sail, used since Roman times, and the Greek astronomy the Islamic world inherited.' },
      { label: 'Iberia', detail: 'Portuguese and Spanish pilots and shipbuilders combined the borrowed tools with new ships, and learned the Atlantic\'s winds and currents by sailing them.' },
      { label: 'The Indian Ocean', detail: 'An older ocean world that already ran on the monsoon. It is context for the story, not a tool Europe borrowed.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-4-1.svg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravela_de_armada_of_Joao_Serrao.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Caravela_de_armada_of_Joao_Serrao.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/15th_century_Portolan_chart_by_Petrus_Roselli_-_Carte_marine_de_la_mer_M%C3%A9diterran%C3%A9e_et_de_la_mer_Noire.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/MHS_52528_Astrolabe.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/15th_century_Portolan_chart_by_Petrus_Roselli_-_Carte_marine_de_la_mer_M%C3%A9diterran%C3%A9e_et_de_la_mer_Noire.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-cape-route-brief.html',
    desc: 'Advise João II before the Dias expedition: combine instruments, ship design, Atlantic wind knowledge, African intelligence, and state finance to find and return from a route around southern Africa.'
  };

  lesson.skillBuilder = {
    label: 'Contextualization practice',
    title: 'Contextualization: Where the Tools Came From',
    intro: 'Contextualization means describing the bigger situation a development happened in. For Topic 4.1, the development is European ships crossing oceans and coming back. The context is an older world of ocean travel and learning that Europe sat at the edge of: Chinese sailors with the compass, astronomers in the Islamic world, the Mediterranean with its lateen sails, and an Indian Ocean that ran on the monsoon. A strong answer describes that context first, then shows how it made the European development possible.',
    steps: [
      { label: 'Name the development', text: 'By the late 1400s, Portuguese ships could sail far out into the Atlantic and come home again.' },
      { label: 'Describe the context', text: 'Long before that, other peoples had the tools. Chinese sailors used the compass at sea by about 1100. Astronomers in the Islamic world had made the astrolabe precise and built tables of the sky. The lateen sail had sailed the Mediterranean since Roman times. Indian Ocean sailors already ran their trade on the monsoon.' },
      { label: 'Connect the context to the development', text: 'This knowledge reached Europe with merchants and with translators in places like Toledo, so Portuguese pilots could combine it with new ships and their own knowledge of the Atlantic\'s winds. The context explains why the breakthrough was a combination, not a European invention.' }
    ],
    prompt: 'In 2 to 3 sentences, describe the context for European ocean voyages after 1450. Name ONE older world (Classical, Islamic, or Asian) and one tool or kind of knowledge from it, then explain how that context made European ocean travel possible.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Maritime Technologies and Navigation',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Compass, astrolabe, lateen sail, caravel: the tools that let ships go out and come home.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify at least THREE specific maritime technologies European sailors used after c. 1450. For each one, explain what problem it solved at sea. Then name ONE new sea route these technologies made possible.',
      responseType: 'Checkpoint 1',
      terms: ['compass', 'astrolabe', 'astronomical charts', 'lateen sail', 'caravel', 'carrack', 'latitude', 'dead reckoning', 'volta do mar', 'trade winds'],
      focus: ['Name at least three specific technologies.', 'For each, explain the problem it solved at sea.', 'Name one new sea route the technologies made possible.']
    },
    {
      title: 'Checkpoint 2: Borrowed Knowledge, Ship Design, Winds, and Currents',
      subtitle: 'Checks Learning Targets 2–3 and Success Criteria 2–3.',
      cardDesc: 'Cross-cultural diffusion plus practical technologies and environmental knowledge.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how European navigators drew on knowledge or technology from TWO earlier traditions (Classical, Islamic, or Asian), and then explain how ONE ship-design innovation and ONE piece of wind or current knowledge made transoceanic travel more reliable. Build the causal chain from adopted knowledge to a ship that could go out and come home, and end with one new route for trade or travel.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['magnetic compass', 'China', 'astrolabe', 'Islamic astronomy', 'lateen sail', 'caravel', 'carrack', 'volta do mar', 'trade winds', 'currents', 'cross-cultural diffusion'],
      focus: ['Use two specific examples of cross-cultural knowledge or technology transfer.', 'Explain one ship-design innovation and the problem it solved.', 'Explain one wind/current pattern and how sailors used it to complete long voyages.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Solving the Problems of Oceanic Navigation',
    task: 'Choose TWO cards that solve different navigation problems: ship design, measuring position, charting coastlines, or organizing new geographic knowledge. Identify what each object directly shows, then infer what practical problem it helped solve. Do not treat a later model or map as direct eyewitness evidence without saying what kind of source it is.',
    prompt: 'Using two evidence cards, make one claim about why sustained transoceanic voyaging became more feasible after c. 1450. Cite one concrete detail from each source, explain the mechanism each technology or knowledge tool addressed, and identify one source limitation.'
  };

  lesson.images = [
    {
      title: 'Portuguese Caravela in the Livro das Armadas, c. 1566',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravela_de_armada_of_Joao_Serrao.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravela_de_armada_of_Joao_Serrao.jpg',
      caption: 'Ship-design evidence. A 16th-century Portuguese illustration depicts a caravela de armada associated with the early Portuguese Indian Ocean voyages.',
      prompt: 'NOTICE hull shape, sails, or rigging. What can you INFER about maneuverability and oceanic travel? What would you need engineering or voyage records to prove about actual performance at sea?'
    },
    {
      title: 'European Astronomer\'s Astrolabe, 1500 to 1550',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MHS_52528_Astrolabe.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:MHS_52528_Astrolabe.jpg',
      caption: 'Knowledge-transfer evidence. A European brass astrolabe made between 1500 and 1550, with Latin star names on its pierced star map. It is an astronomer\'s instrument, not the heavy open-ring mariner\'s astrolabe used at sea, but it carries the Greek and Islamic astronomy that Portuguese pilots turned into a sea tool. History of Science Museum, Oxford.',
      prompt: 'NOTICE the pierced star map and the Latin star names. What can you INFER about where the knowledge in this instrument came from and how it reached Europe? What would a pilot have to change to use an instrument like this on a rolling deck?'
    },
    {
      title: 'Petrus Roselli Portolan Chart, 15th Century',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/15th_century_Portolan_chart_by_Petrus_Roselli_-_Carte_marine_de_la_mer_M%C3%A9diterran%C3%A9e_et_de_la_mer_Noire.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:15th_century_Portolan_chart_by_Petrus_Roselli_-_Carte_marine_de_la_mer_M%C3%A9diterran%C3%A9e_et_de_la_mer_Noire.jpg',
      caption: 'Cartographic baseline evidence. A 15th-century portolan chart represents detailed coastlines and sailing directions developed before and during the opening of Atlantic exploration.',
      prompt: 'NOTICE coastline detail and navigation lines. What can you INFER about cumulative maritime knowledge before c. 1500? How does this support continuity as well as innovation in European navigation?'
    },
    {
      title: 'Waldseemüller World Map, 1507',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Waldseemuller_map_2.jpg',
      caption: 'Knowledge-infrastructure evidence. The 1507 Waldseemüller map incorporated information from recent Atlantic voyages into a printed representation of the world.',
      prompt: 'NOTICE how newly encountered lands are represented alongside older geographic knowledge. What can you INFER about how exploration changed mapmaking? Why does a printed map show knowledge circulation better than it shows how accurate every voyage report was?'
    }
  ];
})();
