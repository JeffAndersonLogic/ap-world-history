(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.classPresentation = {
    title: 'Class Slides: Who Paid?',
    desc: 'Follow the story: rulers paid for voyages because they wanted the trade, and every voyage that paid made the next one easier to fund.',
    url: 'presentation-topic-4-2-student.html'
  };

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 4: Learning Objective B",
      "theme": "Learning Objective",
      "text": "Describe the role of states in the expansion of maritime exploration from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 4: Learning Objective C",
      "theme": "Learning Objective",
      "text": "Explain the economic causes and effects of maritime exploration by the various European states.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III",
      "theme": "Governance",
      "text": "New state-supported transoceanic maritime exploration occurred in this period.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III.A",
      "theme": "Economic Systems",
      "text": "Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III.B",
      "theme": "Economic Systems",
      "text": "Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.III.C",
      "theme": "Economic Systems",
      "text": "Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Who Paid?',
    embedUrl: 'first-and-10-topic-4-2-exploration-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 4.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: '1. Portugal, around Africa', detail: 'Paid for by Prince Henry and then the kings. Step by step down the West African coast, around the southern tip of Africa with Dias in 1488, and on to Calicut in India with da Gama in 1498.' },
      { label: '2. Spain, west across the Atlantic', detail: 'Paid for by Isabella and Ferdinand. Columbus reached the Caribbean in 1492. Magellan\'s fleet later sailed on across the Pacific (1519 to 1522); that voyage is not drawn on this map, and the note at the bottom of the map describes it.' },
      { label: '3, 4 and 5. England, France, and the Dutch, north', detail: 'Route 3 is Cabot for England in 1497, route 4 Cartier for France in the 1530s, route 5 Barentsz for the Dutch in the 1590s. Each looked for another route to Asia; none found one.' },
      { label: 'Black dots: Elmina, Calicut, Malacca', detail: 'A Portuguese fort for the gold trade (1482), the Indian port da Gama reached (1498), and a port Portugal seized (1511): three links in a trading-post empire.' },
      { label: 'Shaded oval: North Atlantic coast', detail: 'Where the northern voyages found cod, furs, and land to claim instead of a route to Asia.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-4-2.svg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg?width=1200',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg?width=1200',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg?width=1200',
    skill:           '../assets/images/instructional-maps/topic-4-2.svg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg?width=1200',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg?width=1200',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg?width=1200',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg?width=1200',
    checkpoint2:     '../assets/images/instructional-maps/topic-4-2.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-santa-fe-bargain.html',
    desc: 'Advise Isabella and Ferdinand at Santa Fe in 1492: decide whether to pay for Columbus\'s voyage west, what to promise him, and what to do about Portugal\'s claims.'
  };

  lesson.skillBuilder = {
    label: 'Making Connections practice',
    title: 'Making Connections: How One State\'s Voyage Led to Another\'s',
    intro: 'Making Connections means explaining how one historical development relates to another. For Topic 4.2, the connection runs between states: what one ruler paid for changed what the next ruler decided to pay for. A strong answer names the first development, names the second, and explains the link with because or so.',
    steps: [
      { label: 'Name the first development', text: 'Portugal paid for voyages down the coast of Africa for decades, and by the 1480s it held that route to the south.' },
      { label: 'Name the second development', text: 'In 1492 Isabella and Ferdinand of Spain paid for Columbus to sail west across the Atlantic to reach Asia.' },
      { label: 'Explain the link', text: 'Because Portugal already held the route around Africa, and had turned Columbus down, Spain\'s only way to reach Asia\'s trade was west. One state\'s voyages shaped another state\'s choice.' }
    ],
    prompt: 'In 2 to 3 sentences, explain how ONE state\'s voyages connected to ANOTHER state\'s decision to back voyages of its own. Name both states and both developments, and use because or so to show the link. (Example pairs: Portugal\'s African route and Spain\'s voyage west; the Treaty of Tordesillas and the English, French, or Dutch crossings.)'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Role of States',
      subtitle: 'Checks Learning Target 1 and Success Criteria 1.',
      cardDesc: 'Why rulers backed ocean voyages, and how: by paying, or by granting rights.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain ONE economic reason European rulers backed ocean voyages after c. 1450. Then name ONE ruler or royal sponsor (such as Prince Henry, or Isabella and Ferdinand) and explain how they backed a voyage: what they gave (money, ships, permission, titles, or a share) and what they wanted back.',
      responseType: 'Checkpoint 1',
      terms: ['state sponsorship', 'spice trade', 'middlemen', 'royal monopoly', 'Prince Henry', 'Isabella and Ferdinand', 'titles', 'share of profits', 'risk'],
      focus: ['Name one economic reason, explained as a mechanism, not a label.', 'Name one ruler and how that ruler backed a voyage.', 'Say what the ruler gave and what the ruler wanted back.']
    },
    {
      title: 'Checkpoint 2: Two Voyages, Two Sponsors, Cause and Effect',
      subtitle: 'Checks Learning Targets 1–3 and Success Criteria 1–3.',
      cardDesc: 'One Portuguese or Spanish voyage, one English, French, or Dutch voyage: who paid, why, and what it produced.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Pick ONE Portuguese or Spanish voyage (such as da Gama\'s or Columbus\'s) and ONE English, French, or Dutch voyage (such as Cabot\'s, Cartier\'s, or Hudson\'s). For EACH voyage, explain: (1) which state backed it and what it gave the explorer (money, ships, permission, titles, or a share), (2) one economic reason the state backed it, and (3) one economic effect it had. Last, explain how the first voyage, or the route it opened, helped lead the second state to explore.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['Vasco da Gama', 'Columbus', 'Magellan', 'Elcano', 'John Cabot', 'Jacques Cartier', 'Henry Hudson', 'state sponsorship', 'trading-post empire', 'Treaty of Tordesillas', 'route to Asia', 'cod fishing', 'fur trade', 'economic effect'],
      focus: ['Use one Iberian voyage and one northern voyage, each with the state that backed it and what it gave.', 'Give one economic cause and one economic effect for each.', 'Connect the two: how one state\'s voyages shaped another state\'s choice.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Who Paid, and What For',
    task: 'Choose TWO cards. For each, say what kind of source it is (a monument, a later picture, a map made at the time, or a modern map), what it directly shows, and what it suggests about who paid for exploration or what the voyages produced.',
    prompt: 'Using two cards, make one claim about the role of states or the economic causes or effects of exploration after c. 1450. For each card, give one detail you can see, explain how it supports your claim, and name one thing the source cannot tell you.'
  };

  lesson.images = [
    {
      title: 'Vasco da Gama Pillar, Malindi',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pillar_of_Vasco_da_Gama.jpg',
      caption: 'A monument, in a modern photograph. Da Gama\'s fleet set up a stone marker at Malindi, on the coast of Kenya, in 1498, on the way to India; the pillar has been rebuilt and repaired since. Portuguese captains carried markers like this to claim routes for their king.',
      prompt: 'Open the picture full size. NOTICE the cross on top and where the pillar stands, on the shore. What can you INFER about who the voyage was working for, and what it was claiming? What can this monument not tell you about how the ruler of Malindi saw the Portuguese?'
    },
    {
      title: 'Columbus Taking Possession, a Later Picture',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Columbus_Taking_Possession.jpg',
      caption: 'A picture made in the 1800s, more than three centuries after 1492, imagining Columbus claiming land in the Caribbean for the Spanish crown. It is a later memory of the event, not an eyewitness record.',
      prompt: 'NOTICE the flags and who stands at the center. Whose authority is the artist showing? What can you INFER about who the voyage was for? Why can a picture made centuries later not tell you what really happened that morning?'
    },
    {
      title: 'Waldseemüller World Map, 1507',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Waldseemuller_map_2.jpg',
      caption: 'A world map printed at Saint-Dié (today in France) in 1507, fifteen years after Columbus\'s first voyage. It used reports of the Spanish and Portuguese voyages and was the first map to name America.',
      prompt: 'NOTICE the new lands on the far left. What can you INFER about how quickly news of the voyages spread, and how it increased European interest in ocean travel? What can a map printed in Europe not tell you about the people who lived in those lands?'
    },
    {
      title: 'Three Ways to Asia, and Who Paid',
      url: '../assets/images/instructional-maps/topic-4-2.svg',
      sourceUrl: '../assets/images/instructional-maps/topic-4-2.svg',
      caption: 'A modern BeHistorical map, not a source from the time. It shows the three directions European states paid for: Portugal around Africa, Spain west, and England, France, and the Dutch in the north.',
      prompt: 'NOTICE the northern routes and where they end. What can you INFER about why England, France, and the Dutch sailed north? What does a modern map leave out about what each voyage actually found?'
    }
  ];
})();
