(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 4: Learning Objective L",
      "theme": "Learning Objective",
      "text": "Explain the effects of the development of state power from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.III.iii",
      "theme": "Governance",
      "text": "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level.",
      "illustrativeExamples": [
        "Pueblo Revolts",
        "Fronde",
        "Cossack revolts",
        "Maratha conflict with Mughals",
        "Ana Nzinga’s resistance (as ruler of Ndongo and Matamba)",
        "Metacom’s War (King Philip’s War)"
      ]
    },
    {
      "code": "KC-5.3.III.C",
      "theme": "Governance",
      "text": "Enslaved persons challenged existing authorities in the Americas through organized resistance.",
      "illustrativeExamples": [
        "The establishment of Maroon societies in the Caribbean and Brazil",
        "Resistance of enslaved persons in North America"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Push and Pushback',
    embedUrl: 'first-and-10-topic-4-6-internal-external-challenges-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Inside a state', detail: 'Paris (the Fronde, 1648 to 1653: judges, Parisians, and nobles against the crown\'s war taxes) and the Volga (Stenka Razin\'s revolt, 1670 to 1671: peasants and Cossacks against the tsar who had bound peasants to the land in 1649). These groups pushed back against their own rulers.' },
      { label: 'At the edge of an expanding state', detail: 'The Deccan (the Marathas against the Mughal emperor Aurangzeb, 1681 to 1707), Ndongo and Matamba (Njinga against Portugal, 1622 to 1663), New Mexico (the Pueblo Revolt against Spain, 1680), and New England (Metacom\'s War against the English colonies, 1675 to 1676). These peoples pushed back against a state trying to rule them.' },
      { label: 'Organized resistance by enslaved people', detail: 'Palmares in Brazil (maroon towns that lasted most of the 1600s), Jamaica (the Maroons, who forced the colony to sign treaties in 1739), and the Stono River in South Carolina (the Stono Rebellion, 1739).' },
      { label: 'What the map cannot show', detail: 'The shaded areas and dots mark regions, not borders or exact battlefields. They show where people pushed back, not how many took part or how each case ended.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-4-6.svg',
    first10:         '../assets/images/topics/4-6/razin-moscow-luyken-1700.jpg',
    contentDelivery: '../assets/images/topics/4-6/parlement-arrest-luyken-1699.jpg',
    beSurreal:       '',
    skill:           '../assets/images/topics/4-6/broussel-paris-1648.jpg',
    checkpoint1:     '../assets/images/topics/4-6/aurangzeb-golconda-c1686.jpg',
    evidence:        '../assets/images/topics/4-6/shivaji-golconda-c1680.jpg',
    source:          '',
    beInTheRoom:     '',
    checkpoint2:     ''
  };

  lesson.classPresentation = {
    title: 'Class Slides: Push and Pushback',
    desc: 'Follow the story: how states pushed to expand and centralize, who pushed back across Europe, Asia, Africa, and the Americas, how enslaved people organized, and what the pushback changed.',
    url: 'presentation-topic-4-6-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-knotted-cord.html',
    desc: 'Meet with the leaders of the Pueblo alliance in August 1680 and decide how to keep many towns, languages, and communities rising on the same day, and what should hold them together if the Spanish are driven out.'
  };

  lesson.skillBuilder = {
    label: 'Contextualization practice',
    title: 'Put a Revolt in Its Bigger Story',
    intro: 'Contextualization means explaining how an event fits into a bigger development of its time, and how that bigger development helps explain it. It takes two moves: name the bigger development, then say how it helps explain the event. Naming the context without saying how it explains the event is only half the job. Watch the two moves on the Fronde first.',
    steps: [
      { label: 'The event', text: 'The Fronde: from 1648 to 1653, judges of the Parlement of Paris, the people of Paris, and then great nobles rose against the French crown.' },
      { label: 'Move 1: Name the bigger development', text: 'Across Europe in these years, rulers were pulling power into their own hands, and they paid for long wars with new taxes. France had been at war with Spain for years, and the crown kept demanding more money.' },
      { label: 'Move 2: Say how it helps explain the event', text: 'The judges, the city, and the nobles were the people who lost money and power when the crown centralized and taxed. So the Fronde was not just a quarrel in Paris: it was one result of a centralizing state pushing on the people who used to share its power.' },
      { label: 'Put it in one sentence', text: 'The Fronde happened as part of European rulers pulling power into their own hands and paying for wars with new taxes, which helps explain it because the judges, the city, and the nobles were the ones who lost money and power when the crown did that.' }
    ],
    prompt: 'Now do it yourself with a different event. On September 9, 1739, about twenty enslaved people near the Stono River in South Carolina seized guns and marched south toward Spanish Florida. Others joined them, but the colony\'s militia caught them the same day. Here are three pieces of context: (1) South Carolina was a plantation colony growing rice, and enslaved Africans were the majority of its people. (2) Since 1693 the Spanish king had promised freedom in Spanish Florida to enslaved people who escaped from the English colonies and became Catholic, and in 1738 Florida built a fort near St. Augustine for them. (3) In 1739 Britain and Spain were about to go to war. In 2 to 3 sentences, put the Stono Rebellion in its broader context: name the bigger development it was part of, and explain how at least TWO of these pieces of context help explain why the rebels did what they did.',
    criteria: [
      'I named a bigger development of the period that the Stono Rebellion was part of.',
      'I used at least two of the three pieces of context.',
      'I explained how the context helps explain what the rebels did, not just listed it.'
    ]
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Pushback Against Growing States',
      subtitle: 'Checks Learning Target 1 and Success Criterion 1.',
      cardDesc: 'How expansion and centralization led different local groups to resist, in Afro-Eurasia and the Americas.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Choose TWO cases of local resistance: ONE from Africa, Asia, or Europe (the Fronde, Razin\'s revolt, the Marathas, or Njinga) and ONE from the Americas (the Pueblo Revolt or Metacom\'s War). For EACH case, explain what the state was pushing for (to expand, or to centralize), which group pushed back and how, and what happened next. Then explain one way the two cases were alike.',
      responseType: 'Checkpoint 1',
      terms: ['expansion', 'expand', 'centralization', 'centralize', 'Fronde', 'Parlement', 'nobles', 'Razin', 'Cossacks', 'serfs', 'Law Code', 'Marathas', 'Shivaji', 'Aurangzeb', 'Mughal', 'Deccan', 'Njinga', 'Ndongo', 'Matamba', 'Portugal', 'Pueblo Revolt', 'Popé', 'encomienda', 'religious suppression', 'Metacom', 'Wampanoag', 'resistance'],
      focus: ['Name one case from Africa, Asia, or Europe and one from the Americas.', 'For each, say what the state pushed for, which group pushed back and how, and what happened next.', 'Say one way the two cases were alike.']
    },
    {
      title: 'Checkpoint 2: Organized Resistance by Enslaved People',
      subtitle: 'Checks Learning Target 2 and Success Criterion 2.',
      cardDesc: 'How enslaved people challenged the authorities through organized resistance, and how the authorities responded.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Explain how enslaved people in the Americas challenged the authorities through organized resistance. Use ONE maroon community (Palmares or the Jamaica Maroons) and the Stono Rebellion of 1739. For EACH, explain how the resistance was organized and how the authorities responded. Then explain one reason the authorities responded differently in the two cases.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['organized resistance', 'maroon', 'maroon communities', 'quilombo', 'Palmares', 'Ganga Zumba', 'Zumbi', 'treaty', 'Jamaica', 'Maroons', 'Cudjoe', 'Stono', 'South Carolina', 'Spanish Florida', 'militia', 'Negro Act', 'enslaved', 'authorities'],
      focus: ['Explain how the maroon community you chose was organized, and how the authorities responded.', 'Explain how the Stono Rebellion was organized, and how the authorities responded.', 'Give one reason the authorities responded differently in the two cases.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Push and Pushback',
    task: 'Choose TWO cards. For each, decide what it shows about why people pushed back against a growing state, or how they did it.',
    prompt: 'Make one claim about what made people push back against a growing state, or how they did it, from 1450 to 1750. Then, for EACH of your two cards: (1) say what kind of source it is, who made it, and when, (2) give one detail you can see or read and explain how it supports your claim, and (3) name one thing the source cannot tell you.'
  };

  lesson.images = [
    {
      title: 'A Paris Judge, Printed in 1648',
      alt: 'An engraved portrait of an older man with long hair and a small beard, in a dark robe and white collar, inside an oval frame, with a coat of arms below and a printed caption.',
      url: '../assets/images/topics/4-6/broussel-paris-1648.jpg',
      sourceUrl: 'https://id.rijksmuseum.nl/200435769',
      caption: 'A portrait print of Pierre Broussel, published in Paris in 1648 with the king\'s license to print. The caption reads "Pierre de Broussel, counselor of the King in his court of Parlement of Paris." In August 1648 the government arrested him, and Paris put up barricades until he was freed. Rijksmuseum.',
      prompt: 'NOTICE how the print presents Broussel and what the caption calls him. INFER why someone would print and sell a portrait of this judge in 1648, the year of his arrest. What can a portrait not tell you about what Broussel did or why the city backed him?'
    },
    {
      title: 'Razin Brought into Moscow, as a Dutch Artist Imagined It',
      alt: 'An etching of a crowd outside a walled city gate with towers: a man in chains sits in a wooden cart under a tall wooden frame, surrounded by guards with pikes and long guns.',
      url: '../assets/images/topics/4-6/razin-moscow-luyken-1700.jpg',
      sourceUrl: 'https://id.rijksmuseum.nl/200224386',
      caption: 'Jan Luyken\'s etching of the captured rebel Stenka Razin being brought into Moscow on a cart in 1671, made in Amsterdam for a Dutch history book printed in 1700, about thirty years later. Luyken never went to Russia. Rijksmuseum.',
      prompt: 'NOTICE how the rebel is shown and who surrounds him. INFER what a state wanted people to learn from the way it treated a captured rebel. What can this picture not tell you about what happened in Moscow in 1671, and why?'
    },
    {
      title: 'Shivaji, Painted in the Deccan, About 1680',
      alt: 'A painted portrait of a bearded man in profile in a gold turban with a black plume and a patterned white robe, holding a sword, inside an oval frame, with a gold flower border and a handwritten caption below.',
      url: '../assets/images/topics/4-6/shivaji-golconda-c1680.jpg',
      sourceUrl: 'https://id.rijksmuseum.nl/200383520',
      caption: 'A portrait of the Maratha king Shivaji, painted at Golconda, in the Deccan, about 1680, around the time of his death. A Dutch owner later added a long Dutch caption below it. Rijksmuseum.',
      prompt: 'NOTICE how the painter presents Shivaji: his clothes, his pose, his sword. INFER how a ruler who fought the Mughal Empire wanted to be seen. What can a portrait not tell you about how the Marathas actually fought?'
    },
    {
      title: 'Aurangzeb, Painted in the Deccan, About 1686',
      alt: 'A painted portrait of an elderly man with a white beard in a white robe and turban, in profile, holding a flower and resting one hand on a sword, with a golden halo, against a green background.',
      url: '../assets/images/topics/4-6/aurangzeb-golconda-c1686.jpg',
      sourceUrl: 'https://id.rijksmuseum.nl/200495648',
      caption: 'A portrait of the Mughal emperor Aurangzeb, painted at Golconda, in the Deccan, about 1686, while he was fighting to conquer the region. It comes from an album of portraits of Indian rulers collected by a Dutch owner. Rijksmuseum.',
      prompt: 'NOTICE the halo, the sword, and the flower. INFER what the painter wanted viewers to think about this emperor\'s power. Aurangzeb spent his last twenty-six years fighting in the Deccan. What can this portrait not tell you about that war?'
    },
    {
      title: 'A Pueblo Man Testifies, 1681',
      label: 'Written source · Spanish record of a Pueblo man\'s testimony',
      sourceText: [
        '"[S]ince the government of Señor General Hernando Ugarte y la Concha',
        'they have planned to rebel on various occasions ... but they always kept in their hearts',
        'the desire to carry it out, so as to live as they are living today."'
      ],
      caption: 'From the declaration of Pedro Naranjo, a Keres man from San Felipe Pueblo, questioned by Spanish officials on December 19, 1681, and written down in Spanish. English translation by Charmion Clair Shelby, 1942. Words in brackets are added.',
      prompt: 'NOTICE how long, according to Naranjo, the Pueblos had wanted to rebel. INFER what that suggests about the causes of the revolt of 1680. Naranjo was a prisoner answering Spanish questions. What might he have left out?'
    },
    {
      title: 'The Treaty with Jamaica\'s Maroons, 1739',
      label: 'Written source · Treaty between the colony of Jamaica and the Maroons of Trelawny Town',
      sourceText: [
        '"[They] shall for ever hereafter [be] in a perfect state of freedom and liberty ...',
        'if any negroes shall hereafter run away from their masters or owners,',
        'and shall fall into Captain Cudjoe\'s hands, they shall immediately be sent back."'
      ],
      caption: 'From the second and ninth articles of the treaty between the British colony of Jamaica and the Maroons led by Cudjoe, dated March 1, 1739, as printed in the records of Jamaica\'s Assembly. Words in brackets are added.',
      prompt: 'NOTICE what the Maroons gained and what they had to promise. INFER why a colony that could not defeat the Maroons would make this deal. What can a treaty not tell you about how the Maroons themselves saw it?'
    }
  ];
})();
