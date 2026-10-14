(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 4: Learning Objective E",
      "theme": "Learning Objective",
      "text": "Explain the process of state building and expansion among various empires and states in the period from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 4: Learning Objective F",
      "theme": "Learning Objective",
      "text": "Explain the continuities and changes in economic systems and labor systems from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 4: Learning Objective G",
      "theme": "Learning Objective",
      "text": "Explain changes and continuities in systems of slavery in the period from 1450 to 1750.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II.A.i",
      "theme": "Governance",
      "text": "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks. Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies.",
      "illustrativeExamples": [
        "Ming China",
        "Tokugawa Japan"
      ]
    },
    {
      "code": "KC-4.3.II.C",
      "theme": "Governance",
      "text": "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II.A.ii",
      "theme": "Governance",
      "text": "The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo, whose participation in trading networks led to an increase in their influence.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.3.II.A.iii",
      "theme": "Economic Systems",
      "text": "Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants.",
      "illustrativeExamples": [
        "Swahili Arabs",
        "Omanis",
        "Gujaratis",
        "Javanese"
      ]
    },
    {
      "code": "KC-4.2.II.D",
      "theme": "Economic Systems",
      "text": "Newly developed colonial economies in the Americas largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.II.B",
      "theme": "Social Interactions and Organization",
      "text": "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.2.II.C",
      "theme": "Social Interactions and Organization",
      "text": "The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Empires from the Sea',
    embedUrl: 'first-and-10-topic-4-4-maritime-empires-established-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Gold Coast', detail: 'Portugal built the fort of São Jorge da Mina (Elmina) here in 1482 to buy gold; the Dutch took it in 1637. Around 1700 the Asante kingdom rose inland, buying guns from Dutch and English traders on this coast.' },
      { label: 'Kongo', detail: 'The Kingdom of Kongo, near the mouth of the Congo River, traded with Portugal from the 1480s. Its kings became Christians and grew stronger through the trade.' },
      { label: 'Swahili coast', detail: 'Swahili Arab traders kept trading on the East African coast after the Portuguese arrived. In 1698 Oman took the Portuguese fortress at Mombasa (see the black dot).' },
      { label: 'Japan', detail: 'The Tokugawa shoguns limited European trade. From 1641 the only Europeans allowed to trade were the Dutch, on the small island of Dejima at Nagasaki.' },
      { label: 'Caribbean', detail: 'Sugar plantations here were worked by enslaved Africans, carried west across the Atlantic (arrows 2 and 3).' },
      { label: '1. Forts on the coast', detail: 'European states built trading posts on the coasts of Africa and Asia rather than conquering whole countries there.' },
      { label: '2 and 3. Enslaved Africans west', detail: 'Enslaved Africans were carried across the Atlantic to the Caribbean and to Brazil, in far larger numbers after 1700.' },
      { label: '4. Intra-Asian trade', detail: 'Gujarati, Javanese and other Asian merchants kept trading between Asian ports, from India to Malacca and beyond.' },
      { label: 'Black dots', detail: 'Goa (taken by Portugal, 1510), Malacca (Portugal 1511, the Dutch 1641), Macau (Portuguese under Ming rules, from 1557), Mombasa (taken by Oman, 1698), and Potosí (the silver mine the mit’a sent workers to).' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-4-4.svg',
    first10:         '../assets/images/topics/4-4/nanban-screen-kano-naizen-c1600.jpg',
    contentDelivery: '../assets/images/topics/4-4/elmina-dapper-c1668.jpg',
    beSurreal:       '../assets/images/topics/4-4/mombasa-braun-hogenberg-1572.jpg',
    skill:           '../assets/images/topics/4-4/nagasaki-dejima-1735-44.jpg',
    checkpoint1:     '../assets/images/topics/4-4/dejima-kawahara-keiga-c1836.jpg',
    evidence:        '../assets/images/topics/4-4/codex-kingsborough-1550s.jpg',
    source:          '../assets/images/topics/4-4/kongo-crucifix-met.jpg',
    beInTheRoom:     '../assets/images/topics/4-4/elmina-dapper-c1668.jpg',
    checkpoint2:     '../assets/images/topics/4-4/sugar-works-du-tertre-1667.jpg'
  };

  lesson.classPresentation = {
    title: 'Class Slides: Empires from the Sea',
    desc: 'Follow the story: why rival European states built empires from the sea, where much of the world kept its own rules, and what changed and what kept going in work and in slavery.',
    url: 'presentation-topic-4-4-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-goa-fort-council.html',
    desc: 'Sit on Portugal\'s council at Goa in 1515 and decide what kind of empire to build in an Indian Ocean whose rulers, merchants and trade networks were there long before you.'
  };

  lesson.skillBuilder = {
    label: 'Sourcing and Situation practice',
    title: 'Sourcing: Who Wrote It, for Whom, and Why?',
    intro: 'Sourcing and Situation means asking four questions about a source before you use it: who wrote it (their point of view), who it was written for (the audience), why it was written (the purpose), and what was happening at the time (the situation). The answers change what a source can tell you. Practice first with orders that Japan\'s government sent to its officials at Nagasaki in 1635.',
    steps: [
      { label: 'Read the source', text: '<blockquote>"1. It is strictly prohibited for Japanese ships to leave for foreign countries. ... 3. If any Japanese returns home after residing abroad, he must be put to death. 4. If there is any place where the teachings of the padres (Christianity) is practiced, the two of you must order a thorough investigation. ... 8. All incoming ships must be carefully searched for the followers of padres."</blockquote><small>Memorandum addressed to the Nagasaki magistrates, 1635, articles 1, 3, 4 and 8 of 17, translated in Constantine Vaporis, <em>Voices of Early Modern Japan</em> (2012). Padres were Catholic priests.</small>' },
      { label: 'Point of view', text: 'Written by the senior councilors of the shogun, the top officials of Japan\'s government. They saw foreign trade and Christianity as matters the government had to control.' },
      { label: 'Audience and purpose', text: 'The audience was "the two of you," the government\'s two officials at Nagasaki, the port where foreign ships traded. The purpose was to tell them what to enforce: keep Japanese at home, keep Christianity out, and search every ship.' },
      { label: 'Situation', text: 'Portuguese and Spanish missionaries had made many Christian converts in Japan, and the shogunate saw them as a danger to its power. Knowing that, the orders read as a government protecting its control, not as fear of all foreigners: Dutch and Chinese ships kept trading at Nagasaki.' }
    ],
    prompt: 'Now do it yourself with a different source. In 1639, the same councilors sent the Nagasaki officials this order (translated in Vaporis, 2012): "The proscription [ban] of Christianity is known [to the Portuguese], but heretofore they have secretly transported those who are going to propagate that religion. ... In view of the above, hereafter entry by the Portuguese galeota [ship] is forbidden." In 2 to 3 sentences, identify the order\'s audience and its purpose, and explain how its situation helps explain why Japan limited trade with the Portuguese but not with everyone.',
    criteria: [
      'I named the audience: who the order was written for.',
      'I stated the purpose in my own words, using words from the source.',
      'I explained how the situation (missionaries and Christian converts) shaped the order.'
    ]
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Who Ruled, and Who Set the Terms',
      subtitle: 'Checks Learning Targets 1 and 2 and Success Criteria 1 and 2.',
      cardDesc: 'Why rival European states built maritime empires, and where Asian and African states and merchants kept their own power.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain ONE reason European states built maritime empires (a political, religious, or economic rivalry). Then explain ONE change in who held power, using a European trading post or Kongo or Asante. Then explain ONE continuity: how Ming China or Tokugawa Japan limited European trade, OR how Asian merchants such as Gujaratis, Swahili Arabs, Omanis, or Javanese kept the Indian Ocean trading.',
      responseType: 'Checkpoint 1',
      terms: ['rivalry', 'maritime empire', 'trading post', 'Elmina', 'Goa', 'Kongo', 'Asante', 'Ming China', 'Macau', 'Tokugawa Japan', 'Dejima', 'Indian Ocean', 'cartaz', 'intra-Asian trade', 'Gujaratis', 'Swahili Arabs', 'Omanis', 'Javanese'],
      focus: ['Name one rivalry (political, religious, or economic) as the reason for the empires.', 'Give one change in who held power: a European trading post, or Kongo or Asante growing stronger.', 'Give one continuity: China or Japan setting the terms of trade, or Asian merchants trading on in the Indian Ocean.']
    },
    {
      title: 'Checkpoint 2: Labor and Slavery, What Changed and What Kept Going',
      subtitle: 'Checks Learning Targets 3 and 4 and Success Criteria 3 and 4.',
      cardDesc: 'Old and new labor systems in the colonial Americas, and slavery old and new.',
      learningTargets: [lesson.learningTargets[2].target, lesson.learningTargets[3].target],
      successCriteria: [lesson.successCriteria[2].criteria, lesson.successCriteria[3].criteria],
      prompt: 'Explain ONE continuity and ONE change in labor systems in the colonial Americas (for example, the mit’a, encomienda, hacienda, indentured servitude, or chattel slavery). Then explain ONE continuity and ONE change in slavery from 1450 to 1750: one older form of slavery in Africa that continued, and one way the plantation economy changed slavery in the Americas. For each change, explain why it happened.',
      responseType: 'Checkpoint 2',
      skill: 'Continuity and Change',
      terms: ['mit’a', 'mita', 'Potosí', 'encomienda', 'hacienda', 'indentured servitude', 'chattel slavery', 'plantation', 'plantation economy', 'sugar', 'households', 'Sahara', 'Indian Ocean', 'Mediterranean', 'enslaved Africans', 'inherited', 'race'],
      focus: ['Give one labor continuity (such as the mit’a reused for Potosí) and one labor change (such as encomienda or indentured servitude).', 'Give one older form of slavery in Africa that continued, such as enslaved people in households or captives sent across the Sahara or the Indian Ocean.', 'Give one change the plantations made to slavery in the Americas (its size, being for life and inherited, or being tied to race), and say why it happened.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: What Changed, and What Kept Going',
    task: 'Choose TWO cards: one that shows something that CHANGED when Europeans built empires from the sea, and one that shows something that KEPT GOING. The Codex Kingsborough and the sugar works show changes in labor in the Americas. The Nagasaki harbor and the Kongo crucifix show Asian and African states keeping their own power. The Nanban screen can support either, so say which.',
    prompt: 'Make one continuity-and-change claim about maritime empires from 1450 to 1750. Then, for EACH of your two cards: (1) say what kind of source it is, who made it, and when, (2) give one detail you can see and explain how it supports your claim, and (3) name one thing the source cannot tell you.'
  };

  lesson.images = [
    {
      title: 'Portuguese Traders Arrive in Japan, Kano Naizen, about 1600',
      url: '../assets/images/topics/4-4/nanban-screen-kano-naizen-c1600.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nanban-Screens-by-Kano-Naizen-c1600.png',
      caption: 'Right-hand panels of a Japanese folding screen, "Arrival of the Southern Barbarians," painted in gold and color by Kano Naizen about 1600 for Japanese buyers. "Southern barbarians" was the Japanese name for the Portuguese and Spanish. Kobe City Museum.',
      prompt: 'NOTICE the ship, the clothes of the people walking up the shore, and the men in black at the right. INFER what a Japanese painter found strange or interesting about these visitors. Who is doing the watching in this picture? What can a painting made for Japanese buyers not tell you about the Portuguese?'
    },
    {
      title: 'Nagasaki Harbor and Dejima, about 1740',
      url: '../assets/images/topics/4-4/nagasaki-dejima-1735-44.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:AMH-7112-KB_View_of_Nagasaki.jpg',
      caption: 'A German engraving by J. C. Tetschner, made between 1735 and 1744. Its legend names the city of Nagasaki, the small island "where the Dutch live" (Dejima), a Chinese island, a Dutch company ship, Japanese ships, and Chinese junks. From 1641 Japan allowed only the Dutch, of all Europeans, to trade, and only on Dejima.',
      prompt: 'NOTICE how big Dejima is compared with the city, and which ships are in the harbor. INFER who controlled trade in this harbor. What does the picture show about Japan\'s rules that a list of Dutch trade goods would not?'
    },
    {
      title: 'A Brass Crucifix from the Kingdom of Kongo',
      url: '../assets/images/topics/4-4/kongo-crucifix-met.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Crucifix_MET_hz1999_295_5.jpg',
      caption: 'A brass crucifix made by Kongo artists in the 1600s or 1700s, with small kneeling figures on its arms and below the cross. Kongo\'s king was baptized in 1491, and under his son Afonso I Christianity became the religion of the royal court. The Metropolitan Museum of Art.',
      prompt: 'NOTICE how the figure of Christ and the small figures are made and dressed. INFER what this object suggests about how the people of Kongo made Christianity their own. What can one religious object not tell you about who in Kongo was Christian, or about Kongo\'s trade?'
    },
    {
      title: 'A Nahua Complaint Against an Encomendero, Codex Kingsborough, 1550s',
      url: '../assets/images/topics/4-4/codex-kingsborough-1550s.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kingsborough.jpg',
      caption: 'A page from the Codex Kingsborough, painted by Nahua artists in central Mexico about the 1550s as part of a complaint to the Spanish crown against an encomendero, a Spanish colonist granted the labor and tribute of an Indigenous town. British Museum.',
      prompt: 'NOTICE what the Spaniard is doing to the Indigenous man. INFER what the people who made this page wanted the Spanish crown to know about encomienda. Why did they make it in pictures and send it to Spain? What would the encomendero have said?'
    },
    {
      title: 'A Sugar Works in the French Caribbean, 1667',
      url: '../assets/images/topics/4-4/sugar-works-du-tertre-1667.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Habitation_sucrerie_aux_Antilles,_1667.jpg',
      caption: 'An engraving by Sébastien Leclerc for Jean-Baptiste Du Tertre, a French missionary, in his history of the French Caribbean islands, printed in 1667. Its numbered key names the mill, the furnaces and kettles, and the other buildings of a sugar works. Bibliothèque nationale de France.',
      prompt: 'NOTICE how many different jobs and buildings it took to make sugar. INFER why sugar plantations needed so many workers. This picture was made for French readers. What does it show about the work, and what does it leave out about the enslaved people who did it?'
    }
  ];
})();
