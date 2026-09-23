(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Sahara Did Not Shrink',
    embedUrl: 'first-and-10-topic-2-4-trans-saharan-capture.html?v=desert-v1',
    note: 'Read for the story: a desert in the middle, then saddles and caravans, then gold and salt, then more trade, then Mali.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Trans-Saharan routes', detail: 'Caravan routes connected North Africa and the Mediterranean world to the Sahel and West African states.' },
      { label: 'Camel technology', detail: 'Camel saddles and organized caravans made heavy-load transport across long desert distances practical.' },
      { label: 'Complementary demand', detail: 'West African gold and Saharan salt created profitable two-way exchange.' },
      { label: 'Mali', detail: 'Mali benefited from, protected, and taxed trade, helping draw more people into trans-Saharan commercial networks.' },
      { label: 'Geographic takeaway', detail: 'Transportation technology did not remove the Sahara; it made the desert economically crossable at larger scale.' }
    ]
  };

  lesson.stableImages = {
    map: '../assets/images/topics/2-4/2.4 - Mali.png',
    first10: '../assets/images/module-art/unit-2/topic-2-4/first10.svg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
    skill: '../assets/images/module-art/unit-2/topic-2-4/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-4/checkpoint1.svg',
    evidence: '../assets/images/topics/2-4/2.4 - Mali.png',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-4/beintheroom.svg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg'
  };

  lesson.classPresentation = {
    title: 'Class Slides: The Desert Road',
    desc: 'Follow the causal chain: camel saddles and caravans made regular desert crossings practical, gold and salt made them worth the risk, and Mali grew by protecting and taxing the trade.',
    url: 'presentation-topic-2-4-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/mali-court.html',
    desc: 'Enter Mali as a merchant and make decisions shaped by caravan routes, state protection, taxation, and the gold trade.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: When One Hajj Moved the Gold Market',
    text: 'Mansa Musa\'s pilgrimage projected Mali\'s wealth far beyond West Africa. Contemporary and later accounts emphasize the extraordinary quantities of gold associated with his journey, revealing how deeply Mali was tied into wider Afro-Eurasian exchange.',
    prompt: 'What does Mansa Musa\'s ability to move wealth across North Africa reveal about Mali\'s place in the trans-Saharan trade system?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'AP Skill Builder: Explain Why Trans-Saharan Trade Grew',
    intro: 'Explain how transportation technology and state power changed the scale and geographic reach of an older exchange network.',
    steps: [
      { label: '1. Start with transportation', text: '<strong>Camel saddles and caravans</strong> made long desert crossings more practical and increased carrying capacity.' },
      { label: '2. Add economic incentive', text: '<strong>Gold and salt</strong> created strong complementary demand across the Sahara.' },
      { label: '3. Explain the state role', text: '<strong>Mali</strong> protected, taxed, and benefited from exchange, helping trade and communication intensify.' },
      { label: '4. State the effect', text: 'Connect those causes to increased trade volume, expanded geographic range, and stronger commercial cities and states.' },
      { label: 'Response frame', text: 'Because ___ made desert exchange ___ and ___ made it profitable, trade ___. Mali then ___, which further ___.' }
    ],
    prompt: 'Write 3–4 sentences explaining how transportation technology and state power together expanded trans-Saharan trade.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Technology and Trade Growth',
      subtitle: 'Checks why trans-Saharan exchange intensified.',
      cardDesc: 'Camel saddle, caravans, gold, and salt.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how camel technology and caravan organization increased the volume and geographic range of trans-Saharan trade. Use gold and/or salt as supporting evidence.',
      responseType: 'Checkpoint 1',
      terms: ['camel saddle', 'caravan', 'gold', 'salt', 'trade volume', 'geographic range'],
      focus: ['Explain the transportation innovation.', 'Explain why exchange was profitable.', 'Connect both to increased trade.']
    },
    {
      title: 'Checkpoint 2: Mali and the Trade Network',
      subtitle: 'Checks how empire expansion influenced trade and communication.',
      cardDesc: 'Mali, Mansa Musa, taxation, protection, and commercial connections.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how Mali both benefited from and facilitated trans-Saharan trade and communication. Use at least two specific pieces of evidence.',
      responseType: 'Checkpoint 2',
      terms: ['Mali', 'Mansa Musa', 'Timbuktu', 'taxation', 'protection', 'trade', 'communication'],
      focus: ['Explain how Mali gained from trade.', 'Explain how Mali helped sustain the network.', 'Connect state power to wider exchange.']
    }
  ];

  lesson.evidenceLab = {
    ...lesson.evidenceLab,
    title: 'Evidence Lab: Crossing the Sahara, Building Mali',
    task: 'Choose TWO cards that illuminate different parts of the same causal system: transportation, commodity demand, or state power.',
    prompt: 'Make one claim explaining why trans-Saharan trade expanded or how Mali facilitated that expansion. Use two pieces of evidence and explain the mechanism.'
  };

  lesson.images = [
    {title:'Mansa Musa on the Catalan Atlas, 1375',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',caption:'Outside evidence from 1375, about fifty years after the hajj. A European map depicts Mali\'s Muslim ruler Mansa Musa holding gold while a camel-mounted Saharan traveler approaches.',prompt:'NOTICE the gold, ruler, and camel imagery. What can you INFER about Mali\'s reputation, trans-Saharan transport, and gold? What should you be cautious about because the image was made by European mapmakers?'},
    {title:'Trans-Saharan Routes and West African States',url:'../assets/images/topics/2-4/2.4 - Mali.png',sourceUrl:'../assets/images/topics/2-4/2.4 - Mali.png',caption:'Secondary geographic evidence. A classroom reference map reconstructs major routes, desert crossings, gold-producing regions, salt sources, and West African cities.',prompt:'NOTICE where routes follow oases and meet the Sahel. What can you INFER about chokepoints and the value of caravan knowledge? What does a modern map not prove about the experience of crossing the desert?'},
    {title:'Great Mosque of Djenné',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_2.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Djenn%C3%A9_2.jpg',caption:'Cultural-continuity evidence. The current Great Mosque is a later reconstruction on the site of earlier mosques in Djenné, a major trading city tied to trans-Saharan commerce and Islamic learning.',prompt:'NOTICE the monumental religious architecture. What can you cautiously INFER about the long-term importance of Islam in a trade city? Why can the present building not serve as direct visual evidence for its exact 14th-century form?'},
    {title:'The Reach of the Mali Empire',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Mali_Empire.png',sourceUrl:'https://commons.wikimedia.org/wiki/File:Map_of_the_Mali_Empire.png',caption:'Secondary political evidence. A modern map reconstructs the extent of the Mali Empire relative to major West African trade corridors.',prompt:'NOTICE the empire\'s geographic reach. What can you INFER about why rulers benefited from taxing or protecting trade? What additional evidence would you need to prove how taxes were collected?'}
  ];
})();
