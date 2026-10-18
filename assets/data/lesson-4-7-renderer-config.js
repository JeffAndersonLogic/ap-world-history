(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 4: Learning Objective M",
      "theme": "Learning Objective",
      "text": "Explain how social categories, roles, and practices have been maintained or have changed over time.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.I.B",
      "theme": "Social Interactions and Organization",
      "text": "Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.",
      "illustrativeExamples": [
        "Expulsion of Jews from Spain and Portugal; the acceptance of Jews in the Ottoman Empire",
        "Restrictive policies against Han Chinese in Qing China",
        "Varying status of different classes of women within the Ottoman Empire"
      ]
    },
    {
      "code": "KC-4.2.III.A",
      "theme": "Social Interactions and Organization",
      "text": "Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.III.B",
      "theme": "Social Interactions and Organization",
      "text": "The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.",
      "illustrativeExamples": [
        "Ottoman timars",
        "Russian boyars",
        "European nobility"
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Who Belongs, Who Rises',
    embedUrl: 'first-and-10-topic-4-7-changing-social-hierarchies-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Who could belong', detail: 'Spain and Portugal (Jews pushed out or forced to convert, 1492 to 1497), Salonica in the Ottoman Empire (Jewish refugees settle, 1490s), and Mughal India (Akbar ends the jizya in 1564; Aurangzeb brings it back in 1679).' },
      { label: 'New elites made by conquest and trade', detail: 'Beijing (the Manchu conquest of 1644 and the banners) and Mexico City (the casta ranking, with Spanish-born officials and rich creoles at the top).' },
      { label: 'Old elites squeezed, or winning', detail: 'Anatolia (Ottoman timars turned into tax farms, sold for life from 1695), Russia (Peter the Great\'s Table of Ranks, 1722), Versailles (Louis XIV\'s court from 1682), and England (nobles and Parliament limit the crown, 1688).' },
      { label: 'What the map cannot show', detail: 'The shaded areas and dots mark regions, not borders. The map shows where the ladder changed. It does not show what stayed the same.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-4-7.svg',
    first10:         '../assets/images/topics/3-2/qianlong-court-dress-1736.jpg',
    contentDelivery: '../assets/images/topics/4-7/surjan-hada-akbarnama-c1590.jpg',
    beSurreal:       '',
    skill:           '../assets/images/topics/4-7/busbecq-lorck-1557.jpg',
    checkpoint1:     '../assets/images/topics/4-7/armenian-wedding-vanmour-c1720.jpg',
    evidence:        '../assets/images/topics/4-7/banner-horsemanship-1662.jpg',
    source:          '../assets/images/topics/4-7/lying-in-room-vanmour-c1720.jpg',
    beInTheRoom:     '../assets/images/topics/4-7/casta-rodriguez-juarez-c1715.jpg',
    checkpoint2:     '../assets/images/topics/4-7/peter-the-great-russia-c1700.jpg'
  };

  lesson.classPresentation = {
    title: 'Class Slides: Who Belongs, Who Rises',
    desc: 'Follow the story: how empires welcomed some groups and pushed out others, how conquest and trade made new elites in China and Spanish America, how stronger rulers squeezed old nobles, and what stayed the same.',
    url: 'presentation-topic-4-7-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-identity-dossier.html',
    desc: 'Join a court hearing in Mexico City around 1715 and decide how much a widow\'s ancestry, wealth, family, and reputation should count when the colony sorts people into ranks.'
  };

  lesson.skillBuilder = {
    label: 'Claims and evidence practice',
    title: 'Test a Source\'s Argument',
    intro: 'A source often makes an argument. Your job is to test it with evidence. A piece of evidence can support the argument (it fits), modify it (it is true, but only for some people, places, or times), or refute it (it shows the argument is wrong). Watch the move on an argument made in the 1550s by Ogier Ghiselin de Busbecq, a European ambassador to the Ottoman sultan.',
    steps: [
      { label: 'The source\'s argument', text: 'Busbecq wrote home that among the Ottomans "no distinction is attached to birth" and "it is by merit that men rise in the service." In other words: Ottoman officials got their jobs because of their ability, not their families.' },
      { label: 'Evidence that supports it', text: 'Boys taken from Christian villages by the devshirme were trained for the sultan\'s service, and some rose to be generals and grand viziers, the highest office below the sultan. That fits Busbecq\'s argument.' },
      { label: 'Evidence that modifies it', text: 'To reach those top jobs, a Christian had to become Muslim, and the throne itself stayed in one family: Suleiman had inherited it from his father. So merit opened the sultan\'s service, but not to everyone, and not the throne.' },
      { label: 'Put it in one sentence', text: 'Use this frame for your own answer: "[My evidence] supports / modifies / refutes Busbecq\'s argument because ..." Name the evidence, choose one of the three words, and explain why.' }
    ],
    prompt: 'Now test the second half of Busbecq\'s argument. He wrote that in Europe "birth is the standard for everything." Here are three pieces of evidence: (1) The great nobles who spent their days at Louis XIV\'s palace at Versailles were nobles because they were born into noble families. (2) Russia\'s Table of Ranks of 1722 let a commoner who rose high enough in the army or the government become a noble. (3) In France, families could buy certain high offices, such as a judge\'s seat in the Parlement of Paris, and some of those offices brought noble rank to the family. In 2 to 3 sentences, say whether each piece of evidence supports, modifies, or refutes Busbecq\'s argument about Europe. Then give your verdict: how true was his claim?',
    criteria: [
      'I said whether each piece of evidence supports, modifies, or refutes Busbecq\'s argument.',
      'I explained why, not just labeled it.',
      'I gave a verdict on how true his claim about Europe was.'
    ]
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Who Could Belong',
      subtitle: 'Checks Learning Target 1 and Success Criterion 1.',
      cardDesc: 'How states made room for or used some religious and ethnic groups, and pushed out or limited others.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Choose ONE state that made room for or made use of a religious or ethnic group (the Ottoman Empire or Akbar\'s Mughal Empire) and ONE state that pushed out or limited a group (Spain and Portugal, or Qing China). For EACH, explain what the state did and what the state gained from it. Then, for ONE of your cases, explain one thing about the group\'s place in society that changed and one thing that stayed the same.',
      responseType: 'Checkpoint 1',
      terms: ['accommodation', 'accommodate', 'Ottoman', 'Bayezid', 'Jews', 'Salonica', 'protected subjects', 'jizya', 'Mughal', 'Akbar', 'Rajputs', 'Aurangzeb', 'Spain', 'Portugal', 'expelled', 'pushed out', 'Qing', 'Han', 'queue', 'suppress', 'restrict', 'limit'],
      focus: ['Name one state that made room for or used a group, and one that pushed out or limited a group.', 'For each, say what the state did and what it gained.', 'For one case, say what changed for the group and what stayed the same.']
    },
    {
      title: 'Checkpoint 2: The Top of Society',
      subtitle: 'Checks Learning Targets 2 and 3 and Success Criteria 2 and 3.',
      cardDesc: 'One new elite made by conquest or trade, one old elite squeezed by a stronger ruler, and what stayed the same.',
      learningTargets: [lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain how the top of society changed between 1450 and 1750, and what stayed the same. Use ONE new elite (the Qing banners, or the peninsulares and creoles at the top of the casta system) and explain how conquest or new trade made it. Use ONE old elite (Ottoman sipahis who held timars, Russian boyars, or French nobles) and explain how its power changed as rulers grew stronger, including one thing it lost and one thing it kept. Then explain one thing about the top of society that stayed the same.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change',
      terms: ['new elites', 'Qing', 'Manchu', 'banners', 'conquest', 'casta', 'peninsulares', 'creoles', 'silver', 'old elites', 'sipahi', 'timar', 'tax farm', 'boyars', 'Peter the Great', 'Table of Ranks', 'nobility', 'Versailles', 'Louis XIV', 'centralize', 'continuity', 'change'],
      focus: ['Explain how one new elite was made by conquest or new trade.', 'Explain how one old elite\'s power changed, with one thing it lost and one thing it kept.', 'Explain one thing about the top of society that stayed the same.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: Who Belongs, Who Rises',
    task: 'Choose TWO cards. For each, decide what it shows about who could belong in an empire, who could rise to the top, or who was squeezed.',
    prompt: 'Make one claim about who could belong, who could rise, or who was squeezed in an empire between 1450 and 1750. Then, for EACH of your two cards: (1) say what kind of source it is, who made it, and when, (2) give one detail you can see and explain how it supports your claim, and (3) name one thing the source cannot tell you.'
  };

  lesson.images = [
    {
      title: 'A Rajput Ruler Submits to Akbar, 1569',
      alt: 'A Mughal painting: the emperor sits on a throne under a red and yellow canopy while a man bows low before him, nobles stand around the throne, a crowd with trays and weapons gathers below, and a fortress stands on the rocky hill behind.',
      url: '../assets/images/topics/4-7/surjan-hada-akbarnama-c1590.jpg',
      sourceUrl: 'https://collections.vam.ac.uk/item/O9608/',
      caption: 'A painting from the Akbarnama, the official history of the emperor Akbar\'s reign, which Akbar ordered made. Designed by Mukund and painted by Shankar about 1590 to 1595, it shows Rai Surjan Hada, the Rajput ruler of the fortress of Ranthambhor, bowing to Akbar in 1569 after a hard-fought siege. Victoria and Albert Museum.',
      prompt: 'NOTICE where Akbar sits, what the Rajput ruler is doing, and what is on the hill behind them. INFER how Akbar brought Rajput rulers into his empire: by force, by welcome, or both. Akbar ordered this book made. What might a book made for the emperor leave out?'
    },
    {
      title: 'An Armenian Wedding in the Ottoman Empire',
      alt: 'A painting of a wedding procession outdoors by the water: musicians and men in long robes and fur hats lead the way, with a crowd of veiled women in colored robes on the right beside a domed building.',
      url: '../assets/images/topics/4-7/armenian-wedding-vanmour-c1720.jpg',
      sourceUrl: 'https://id.rijksmuseum.nl/200108069',
      caption: 'Jean Baptiste Vanmour, a Flemish-born painter who lived in Istanbul, painted this Armenian Christian wedding procession on its way to church about 1720 to 1737. He painted the peoples of the Ottoman capital for European buyers. Rijksmuseum.',
      prompt: 'NOTICE where the procession is and how many people take part. INFER what this suggests about how the Ottoman Empire treated Christian communities. What can a painting like this not tell you about the taxes or limits those communities lived with?'
    },
    {
      title: 'A Wealthy Woman\'s Room, Istanbul',
      alt: 'A painting of a richly decorated room: a woman sits up in a red bed under green curtains on the right, women in colored robes sit and stand around her, one carries a tray, coffee brews on a brass brazier in the middle, and a woman at the lower left prepares drinks.',
      url: '../assets/images/topics/4-7/lying-in-room-vanmour-c1720.jpg',
      sourceUrl: 'https://id.rijksmuseum.nl/200108034',
      caption: 'Jean Baptiste Vanmour, "Lying-in Room of a Distinguished Turkish Woman," about 1720 to 1737: a wealthy mother receives visitors after giving birth. The museum describes the woman at the lower left, making sherbet for the guests, as enslaved. A European man could not have entered this room, so Vanmour painted it from what he was told and saw elsewhere. Rijksmuseum.',
      prompt: 'NOTICE the different women in the room: what each is doing, and where. INFER what this shows about how a woman\'s class shaped her life in the Ottoman Empire. Vanmour could not enter this room. How might that limit what the painting can tell you?'
    },
    {
      title: 'The Banners Celebrate the Conquest',
      alt: 'A section of a painted handscroll: a man stands on a galloping horse playing a flute, while rows of men in blue and yellow carry triangular flame-edged banners and others ride horses; a yellow label on the right carries Chinese characters.',
      url: '../assets/images/topics/4-7/banner-horsemanship-1662.jpg',
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/65013',
      caption: 'Part of a handscroll by Nardunbu, a Manchu artist, dated 1662. It records one of the celebrations held when the Shunzhi emperor, the first Qing emperor to rule from Beijing, entered the city after the conquest of 1644: riders from the highest-ranking banners perform stunts on horseback. The yellow label names the commander of the Plain Yellow Banner. Metropolitan Museum of Art.',
      prompt: 'NOTICE what skills the men are showing, and what they carry. INFER why a Manchu painter would record the banners showing off these skills to celebrate the conquest. What can this painting not tell you about how the banners treated the Han Chinese majority?'
    },
    {
      title: 'A Casta Painting, About 1715',
      alt: 'A painting of a family of three: a man in a white shirt and brown cloak on the right, a woman in a white embroidered dress and head cloth in the middle, and a boy holding a basket on the left, with an inscription at the top right.',
      url: '../assets/images/topics/4-7/casta-rodriguez-juarez-c1715.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Juan_Rodr%C3%ADguez_Ju%C3%A1rez_-_De_Mestizo,_y_de_India_Produce_Coyote_(Castas)_-_LA2122_-_Hispanic_Society_of_America.jpg',
      caption: 'Juan Rodríguez Juárez, a painter in Mexico City, made one of the earliest known sets of casta paintings, about 1715 to 1720. The label at the top right reads "From a mestizo and an Indian woman comes a coyote." Hispanic Society of America.',
      prompt: 'NOTICE the label and how each person is dressed and posed. INFER what the painting wants viewers to believe about colonial society. Most of the labels in casta paintings never appear in official records. What does that suggest about using this painting as evidence of how people actually lived?'
    },
    {
      title: 'Versailles in 1722',
      alt: 'A painting of a huge palace seen from above, with long wings around a courtyard, a town of stone buildings around it, and riders and carriages arriving in the foreground among blocks of stone.',
      url: '../assets/images/topics/4-7/versailles-martin-1722.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vue_du_ch%C3%A2teau_de_Versailles_du_c%C3%B4t%C3%A9_de_la_place_d%27armes,_1722.jpg',
      caption: 'Pierre-Denis Martin, the palace of Versailles from the Place d\'Armes, 1722, the year the young Louis XV brought the court back. Louis XIV had moved his court and government here in 1682. Château de Versailles; photograph CC BY-SA 4.0.',
      prompt: 'NOTICE the size of the palace and who is arriving. INFER what a palace like this did to the lives of France\'s great nobles. What can a painting of a building not tell you about how much power those nobles kept or lost?'
    }
  ];
})();
