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
      "illustrativeExamples": [
        "Lateen sail",
        "Compass",
        "Astronomical charts"
      ]
    },
    {
      "code": "KC-4.1.II.A",
      "theme": "Technology and Innovation",
      "text": "The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns, all of which made transoceanic travel and trade possible.",
      "illustrativeExamples": [
        "Caravel",
        "Carrack",
        "Fluyt"
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
    first10:         '../assets/images/commons/astrolabe-persian-18c-8ebe5d.jpg',
    contentDelivery: '../assets/images/commons/caravela-de-armada-of-joao-serrao-f5f35c.jpg',
    beSurreal:       '../assets/images/commons/caravela-de-armada-of-joao-serrao-f5f35c.jpg',
    skill:           '../assets/images/commons/15th-century-portolan-chart-by-petrus-roselli-carte-marine-de-la-mer-m-cf7006.jpg',
    checkpoint1:     '../assets/images/commons/mhs-52528-astrolabe-711dd5.jpg',
    evidence:        '../assets/images/commons/15th-century-portolan-chart-by-petrus-roselli-carte-marine-de-la-mer-m-cf7006.jpg',
    source:          '../assets/images/commons/vasco-da-gama-2ab6b1.jpg',
    beInTheRoom:     '../assets/images/commons/caravela-de-armada-of-joao-serrao-f5f35c.jpg',
    checkpoint2:     '../assets/images/commons/waldseemuller-map-2-f5c64b.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-cape-route-brief.html',
    desc: 'Advise the pilots of the Dias expedition, 1487: combine instruments, ship design, Atlantic wind knowledge, and what African coastal peoples knew about harbors, water and food to find a route around southern Africa and get home.'
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
      cardDesc: 'Borrowed tools, new ships, and what sailors learned about the wind.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Name TWO tools or ideas Europe borrowed, and the older world each came from (Classical, Islamic, or Asian), and say how ONE of them reached Europe, for example through translators in Toledo or sailors on the Mediterranean. Then explain how ONE new ship and ONE thing sailors learned about the winds or currents led to ships that could cross the ocean and come back. End with the result: one new sea route and what could now travel on it.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['magnetic compass', 'China', 'astrolabe', 'Islamic astronomy', 'lateen sail', 'caravel', 'carrack', 'volta do mar', 'trade winds', 'currents', 'cross-cultural diffusion'],
      focus: ['Use two specific examples of cross-cultural knowledge or technology transfer.', 'Explain one ship-design innovation and the problem it solved.', 'Explain one wind/current pattern and how sailors used it to complete long voyages.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Solving the Problems of Oceanic Navigation',
    task: 'Choose TWO cards. For each, say what the object directly shows, then what it tells you about how ocean travel became possible or what it changed. Do not treat a later picture or map as an eyewitness record without saying what kind of source it is.',
    prompt: 'Using two cards, make one claim about how it became possible to make long ocean voyages after 1450, or what those voyages changed. For each card, give one detail you can see, explain what it shows about tools, ships, or knowledge, and name one thing the source cannot tell you.'
  };

  lesson.images = [
    {
      title: 'Portuguese Caravela in the Livro das Armadas, c. 1566',
      url: '../assets/images/commons/caravela-de-armada-of-joao-serrao-f5f35c.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravela_de_armada_of_Joao_Serrao.jpg',
      caption: 'A Portuguese caravel, the ship of João Serrão in the 1502 fleet to India, painted in the Livro das Armadas about 1566. It is a later picture of the ship, not a drawing made at sea. It shows a later, larger caravel with a square sail on the foremast and lateen sails behind it; the early exploring caravels carried lateen sails only.',
      prompt: 'NOTICE the shape of the hull and the sails. What can you INFER about how this ship handled the wind? What would you need besides a picture to know how well it really sailed?'
    },
    {
      title: 'European Astronomer\'s Astrolabe, 1500 to 1550',
      url: '../assets/images/commons/mhs-52528-astrolabe-711dd5.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:MHS_52528_Astrolabe.jpg',
      caption: 'A European brass astrolabe made between 1500 and 1550, with star names on its pierced star map. Most names are Latin, but some, like Alramech (the star Arcturus), are Arabic words written in Latin letters. It is an astronomer\'s instrument, not the heavy open-ring mariner\'s astrolabe used at sea. History of Science Museum, Oxford.',
      prompt: 'NOTICE the star names. Find one that does not look Latin. What does that tell you about where this knowledge came from? What would a pilot have to change to use an instrument like this on a rolling deck?'
    },
    {
      title: 'Petrus Roselli Portolan Chart, 15th Century',
      url: '../assets/images/commons/15th-century-portolan-chart-by-petrus-roselli-carte-marine-de-la-mer-m-cf7006.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:15th_century_Portolan_chart_by_Petrus_Roselli_-_Carte_marine_de_la_mer_M%C3%A9diterran%C3%A9e_et_de_la_mer_Noire.jpg',
      caption: 'A 15th-century portolan chart by Petrus Roselli: a sea chart of the Mediterranean and Black Sea, with detailed coastlines and lines for compass directions. Charts like this were made for sailors before and during the early Atlantic voyages.',
      prompt: 'NOTICE the coastlines and the lines crossing the sea. What can you INFER about what sailors already knew before c. 1500? Why would a chart like this be less help far out in the open Atlantic?'
    },
    {
      title: 'Waldseemüller World Map, 1507',
      url: '../assets/images/commons/waldseemuller-map-2-f5c64b.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Waldseemuller_map_2.jpg',
      caption: 'The 1507 world map by Martin Waldseemüller, printed at Saint-Dié (today in France). It used reports from recent Atlantic voyages and was the first map to name America and draw it as a land separate from Asia.',
      prompt: 'NOTICE the lands on the far left, across the Atlantic. What can you INFER about how the voyages changed what Europeans knew about the world? What can a map made in Europe, by people who never sailed, not tell you about the voyages themselves?'
    }
  ];
})();
