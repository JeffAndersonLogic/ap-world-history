(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Same Problems, Different Trade Systems',
    embedUrl: 'first-and-10-topic-2-7-comparison-capture.html',
    note: 'Compare the networks using the same categories: environment, transportation, commercial practices, demand, states/cities, productive capacity, and diffusion.'
  };

  lesson.classPresentation = {
    title: 'Class Slides: Comparison of Economic Exchange',
    desc: 'Follow the comparison story: three networks solved the same problem, distance, with the tools their geography allowed, and all three grew trading cities, production and diffusion.',
    url: 'presentation-topic-2-7-student.html'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Silk Roads', detail: 'Overland exchange relied on caravan infrastructure, credit/money economies, trading cities, and political protection.' },
      { label: 'Indian Ocean', detail: 'Maritime exchange relied on monsoon knowledge, navigation technology, larger ships, port states, and merchant diasporas.' },
      { label: 'Trans-Saharan', detail: 'Desert exchange relied on camel technology, caravan organization, oasis routes, and states such as Mali.' },
      { label: 'Shared economic pattern', detail: 'All three networks responded to demand, lowered the cost or risk of exchange, stimulated cities/states, and linked producers to distant consumers.' },
      { label: 'Different solutions', detail: 'Geography created different transportation and institutional problems, so each network developed different solutions.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    first10: '../assets/images/module-art/unit-2/topic-2-7/first10.svg',
    contentDelivery: '../assets/images/module-art/unit-2/topic-2-7/contentdelivery.svg',
    beSurreal: '../assets/images/module-art/unit-2/topic-2-7/besurreal.svg',
    skill: '../assets/images/module-art/unit-2/topic-2-7/skill.svg',
    checkpoint1: '../assets/images/module-art/unit-2/topic-2-7/checkpoint1.svg',
    evidence: '../assets/images/module-art/unit-2/topic-2-7/evidence.svg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    beInTheRoom: '../assets/images/module-art/unit-2/topic-2-7/beintheroom.svg',
    checkpoint2: '../assets/images/module-art/unit-2/topic-2-7/checkpoint2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-2/trade-network-comparison.html',
    desc: 'Act as a historian advising a ruler. Compare two exchange networks using balanced evidence and decide which difference or similarity mattered most.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: Three Networks, One Economic Problem',
    text: 'Silk Roads merchants faced long overland distances. Indian Ocean merchants faced winds and open water. Trans-Saharan merchants faced a vast desert. Each network had to solve the same basic problem: how do you move valuable goods far enough, safely enough, and cheaply enough to make exchange worthwhile?',
    prompt: 'How can different technologies and institutions produce a similar economic result?'
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'AP Skill Builder: Compare the Networks with One Shared Matrix',
    intro: 'Comparison works only when you compare the same category on both sides. Use the matrix to avoid writing separate mini-essays about each network.',
    steps: [
      { label: '1. Choose two networks', text: '<strong>Silk Roads | Indian Ocean | Trans-Saharan</strong>' },
      { label: '2. Choose one shared category', text: '<strong>Environment</strong> · <strong>Transportation</strong> · <strong>Commercial practices/finance</strong> · <strong>Demand</strong> · <strong>States/cities</strong> · <strong>Productive capacity</strong> · <strong>Cultural/environmental diffusion</strong>' },
      { label: '3. Gather balanced evidence', text: 'Use one specific piece of evidence from each network in the SAME category.' },
      { label: '4. State the similarity or difference', text: 'Example: both networks lowered merchant risk, but the Silk Roads emphasized caravanserais and credit while Indian Ocean trade depended more heavily on monsoon timing and maritime technology.' },
      { label: '5. Explain why it existed', text: 'Connect the pattern to geography, technology, commercial institutions, demand, or state support.' },
      { label: 'Response frame', text: 'Both ___ and ___ ___. <strong>However</strong>, ___ while ___ because ___.' }
    ],
    prompt: 'Compare TWO trade networks using ONE shared category. Use specific evidence from both and explain why the similarity or difference existed.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: A Meaningful Similarity',
      subtitle: 'Checks balanced comparison.',
      cardDesc: 'Compare the same economic or environmental category across two networks.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify ONE meaningful similarity between two exchange networks. Use balanced evidence from both. Your comparison must address transportation, commercial practices, demand/productive capacity, states/cities, or diffusion.',
      responseType: 'Checkpoint 1',
      terms: ['similarity', 'commercial practices', 'transportation', 'demand', 'production', 'states', 'cities', 'diffusion'],
      focus: ['Use the same category on both sides.', 'Provide evidence from both networks.', 'Explain why the similarity existed.']
    },
    {
      title: 'Checkpoint 2: A Meaningful Difference',
      subtitle: 'Checks explanation of difference.',
      cardDesc: 'Different geography produced different solutions to long-distance exchange.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify ONE meaningful difference between two exchange networks. Use balanced evidence and explain why geography, technology, commercial systems, state support, or demand produced the difference.',
      responseType: 'Checkpoint 2',
      skill: 'Comparison',
      terms: ['difference', 'caravanserai', 'credit', 'monsoon', 'compass', 'astrolabe', 'camel saddle', 'caravan', 'productive capacity'],
      focus: ['Use the same category on both sides.', 'Use specific evidence from both networks.', 'Explain the cause of the difference.']
    }
  ];

  lesson.evidenceLab = {
    ...lesson.evidenceLab,
    title: 'Evidence Lab: Compare Like with Like',
    task: 'Choose TWO cards from different networks that address the SAME category. Balance the evidence before writing the comparison.',
    prompt: 'Write one comparison claim using two networks and one shared category. Cite one concrete detail from each source and explain why the similarity or difference existed.'
  };

  lesson.images=[
    {title:'Silk Roads — Overland Route Map',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',caption:'Silk Roads / geography. A modern reconstruction of major overland corridors and trading nodes.',prompt:'NOTICE the land distances and oasis corridors. What does this suggest about transport and relay infrastructure? Compare with another network on geography or transportation.'},
    {title:'Silk Roads — Jiaozi Paper Money',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Jiao_zi.jpg',caption:'Silk Roads / commercial systems. Song paper currency represents the sophisticated money economy at one major eastern production center.',prompt:'NOTICE the use of portable paper currency. What can you infer about commercial complexity? Compare with another network on commercial tools, goods, or state support.'},
    {title:'Indian Ocean — Monsoon Trade Map',url:'../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg',sourceUrl:'../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg',caption:'Indian Ocean / geography and environmental knowledge. A secondary map shows seasonal wind reversals and maritime routes.',prompt:'NOTICE the directional wind cycle. How did this create a different transportation problem from an overland or desert network? Compare on geography or technology.'},
    {title:'Indian Ocean — Song Celadon at Kilwa',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG',sourceUrl:'https://commons.wikimedia.org/wiki/File:Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG',caption:'Indian Ocean / goods and connectivity. Chinese celadon of this type has been excavated at Kilwa on the East African coast.',prompt:'NOTICE the distance between manufacture and discovery. What can you infer about maritime exchange of goods? Compare with another network on what moved and how far.'},
    {title:'Trans-Saharan — Mansa Musa, Catalan Atlas',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',sourceUrl:'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',caption:'Trans-Saharan / goods, state power, and cultural connection. The 1375 atlas depicts Mali\'s ruler with gold and a camel-mounted traveler.',prompt:'NOTICE the gold and camel imagery. What can you infer about goods, transportation, and political wealth? Compare with another network on state power or transport.'},
    {title:'Trans-Saharan — Desert Route Map',url:'../assets/images/instructional-maps/topic-2-4.svg',sourceUrl:'../assets/images/instructional-maps/topic-2-4.svg',caption:'Trans-Saharan / geography. A secondary map reconstructs desert routes, oases, salt sources, gold regions, and Sahelian cities.',prompt:'NOTICE where routes depend on oases and desert-edge cities. What does this suggest about geography and infrastructure? Compare with another network on nodes or transportation.'}
  ];
})();
