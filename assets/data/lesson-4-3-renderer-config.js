(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 4: Learning Objective D",
      "theme": "Learning Objective",
      "text": "Explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V",
      "theme": "Humans and the Environment",
      "text": "The new connections between the Eastern and Western Hemispheres resulted in the exchange of new plants, animals, and diseases, known as the Columbian Exchange.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V.A",
      "theme": "Humans and the Environment",
      "text": "European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria. Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V.B",
      "theme": "Humans and the Environment",
      "text": "American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-4.1.V.C",
      "theme": "Humans and the Environment",
      "text": "Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons.",
      "illustrativeExamples": [
        "Horses",
        "Pigs",
        "Cattle",
        "Okra",
        "Rice"
      ]
    },
    {
      "code": "KC-4.1.V.D",
      "theme": "Humans and the Environment",
      "text": "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: What the Ships Carried',
    embedUrl: 'first-and-10-topic-4-3-columbian-exchange-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 4.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: '1. West: animals, crops, germs', detail: 'Europeans carried horses, cattle, pigs, wheat, fruit trees, and sugarcane on purpose. Smallpox, measles, and rats came with them by accident.' },
      { label: '2. West by force: enslaved Africans', detail: 'Africans carried across the Atlantic against their will brought foods such as rice and okra.' },
      { label: '3. East: maize, potatoes', detail: 'American crops reached Europe and became main foods in places where the old crops struggled.' },
      { label: '4. Cassava to Central Africa', detail: 'Portuguese traders carried cassava from Brazil to the mouth of the Congo River, where farmers took it up because it survived drought.' },
      { label: 'Black dots', detail: 'Tenochtitlan (smallpox, 1520), Santo Domingo (sugar and cattle), Ireland (potatoes), the mouth of the Congo (cassava), and Fujian in China (sweet potatoes, 1594).' },
      { label: 'Not drawn as an arrow', detail: 'Sweet potatoes reached southern China by sea from the Philippines, a route this Atlantic-centered map does not draw.' }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-4-3.svg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Guam%C3%A1n%20Poma%201615%201150%20julio.png?width=1200',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frumentum%20turcicum%20Gerard%201597%2075.png?width=1200',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Healer%20%28ticitl%29%20tending%20to%20people%20suffering%20from%20smallpox%20in%201520%20in%20Book%2012%20of%20the%20Florentine%20Codex%2C%201577.jpg?width=1200',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Acosta2.jpg?width=1200',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Healer%20%28ticitl%29%20tending%20to%20people%20suffering%20from%20smallpox%20in%201520%20in%20Book%2012%20of%20the%20Florentine%20Codex%2C%201577.jpg?width=1200',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Frans%20Post%20-%20Engenho%20de%20A%C3%A7%C3%BAcar%20%28Dublin%29.jpg?width=1200',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Healer%20%28ticitl%29%20tending%20to%20people%20suffering%20from%20smallpox%20in%201520%20in%20Book%2012%20of%20the%20Florentine%20Codex%2C%201577.jpg?width=1200',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Guam%C3%A1n%20Poma%201615%201150%20julio.png?width=1200',
    checkpoint2:     '../assets/images/instructional-maps/topic-4-3.svg'
  };

  lesson.classPresentation = {
    title: 'Class Slides: What the Ships Carried',
    desc: 'Follow the story: what crossed the Atlantic after 1492, on purpose, by accident, and by force, and what it did on each side of the ocean.',
    url: 'presentation-topic-4-3-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-4/the-replanting-council.html',
    desc: 'Sit on a town council in the Valley of Mexico in 1531, eleven years after smallpox: decide what to plant, what to do about the settlers\' animals, and how to care for the sick when a new sickness arrives.'
  };

  lesson.skillBuilder = {
    label: 'Claims and Evidence in Sources practice',
    title: 'Claims and Evidence: What Did the Writer Use to Prove It?',
    intro: 'Claims and Evidence in Sources means finding the argument a source makes and the evidence it uses to support that argument. The claim is what the writer wants you to believe. The evidence is what the writer gives you so that you will believe it. Practice first with José de Acosta, a Spanish priest who had lived in Peru and Mexico, writing in 1590 about the animals Spain had carried to the Americas.',
    steps: [
      { label: 'Read the source', text: '<blockquote>"These wild cattle have so multiplied in Santo Domingo and thereabouts that they troop together in the fields and woods by thousands, having no master to whom they belong. They hunt these beasts only for their hides. ... The hides they bring into Spain are one of the best revenues of the islands and of New Spain. In the fleet, the year 1587, there came from Santo Domingo 35,444 hides, and from New Spain 64,350."</blockquote><small>José de Acosta, <em>Natural and Moral History of the Indies</em> (Seville, 1590), Book 4, chapter 33, in the English translation of 1604, spelling modernized. New Spain is Spanish Mexico.</small>' },
      { label: 'Find the claim', text: 'Acosta\'s claim: cattle brought from Spain have multiplied so much in the Caribbean and Mexico that they run wild, and their hides have become a source of wealth.' },
      { label: 'Find the evidence', text: 'Acosta gives two kinds of evidence. First, what he describes: wild herds "by thousands" with no owner. Second, numbers from a real record: one fleet in 1587 carried 35,444 hides from Santo Domingo and 64,350 from New Spain, almost a hundred thousand in all.' },
      { label: 'Ask how strong it is', text: 'Acosta did not count the cattle. He counted hides that reached Spain. That still supports his claim, because a few cattle could never have filled one fleet with almost a hundred thousand hides. A number from a record is harder to argue with than a description.' }
    ],
    prompt: 'Now do it yourself with a different source. In the 1740s, an album made for a Qing official in Taiwan said this about the sweet potato, a plant first grown in the Americas (translated for this lesson): "It can be eaten raw or cooked, and also ground into flour. ... It is planted very widely in Taiwan; settlers and Indigenous people rely on it for food. It is truly a help in years of bad harvest." In 2 to 3 sentences, state the claim this source makes, identify TWO pieces of evidence it uses to support that claim, and explain how one of them supports it.',
    criteria: [
      'I stated the claim in my own words: what the writer wants me to believe.',
      'I named TWO pieces of evidence the source itself gives, not facts from somewhere else.',
      'I explained how one piece of evidence supports the claim.'
    ]
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Cargo Nobody Chose',
      subtitle: 'Checks Learning Target 2 and Success Criteria 2.',
      cardDesc: 'Why diseases from the Eastern Hemisphere were so deadly in the Americas.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Name ONE disease and ONE disease vector (an animal that carries disease) that crossed the Atlantic from the Eastern Hemisphere. Then explain TWO reasons these diseases had catastrophic effects in many parts of the Americas: one about whether people had had the disease before, and one about the conditions people were living in.',
      responseType: 'Checkpoint 1',
      terms: ['smallpox', 'measles', 'malaria', 'disease vector', 'rats', 'mosquitoes', 'epidemic', 'immunity', 'Tenochtitlan', 'war', 'forced labor', 'hunger'],
      focus: ['Name one disease and one disease vector.', 'Give one reason about exposure: nobody had had these diseases before, so nobody was immune.', 'Give one reason about conditions: war, forced labor, or hunger.']
    },
    {
      title: 'Checkpoint 2: What Crossed, and What It Did',
      subtitle: 'Checks Learning Targets 1 and 3 and Success Criteria 1 and 3.',
      cardDesc: 'The cause of the Columbian Exchange, and one effect on each side of the Atlantic.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Explain what caused the Columbian Exchange, and name ONE thing that crossed on purpose and ONE that crossed by accident. Then explain TWO effects. ONE effect in the Americas, from an animal or crop Europeans brought (such as horses, pigs, cattle, or sugarcane) or a food enslaved Africans brought (such as rice or okra). ONE effect in Afro-Eurasia, from an American crop (such as maize, potatoes, cassava, or sweet potatoes). For each effect, say which people it affected and how.',
      responseType: 'Checkpoint 2',
      skill: 'Causation',
      terms: ['Columbian Exchange', 'on purpose', 'by accident', 'horses', 'pigs', 'cattle', 'sugarcane', 'cash crop', 'plantation', 'coerced labor', 'rice', 'okra', 'maize', 'potatoes', 'cassava', 'sweet potatoes', 'staple crop', 'nutrition'],
      focus: ['State the cause: ships crossing the Atlantic and coming back, carrying living things on purpose and by accident.', 'Give one effect in the Americas, with a specific animal, crop, or food and the people it affected.', 'Give one effect in Afro-Eurasia, with a specific American crop and what it did for nutrition or population.']
    }
  ];

  lesson.evidenceLab = {
    title: 'Evidence Lab: What Crossed, and What It Did',
    task: 'Choose TWO cards: one about something that crossed to the Americas (the Florentine Codex or the sugar mill) and one about American crops in Afro-Eurasia (the English herbal or the Qing album). The Andes harvest shows those crops at home before they traveled; use it as background.',
    prompt: 'Make one claim about the effects of the Columbian Exchange on the two hemispheres. Then, for EACH of your two cards: (1) say what kind of source it is and when it was made, (2) give one detail you can see and explain how it supports your claim, and (3) name one thing the source cannot tell you.'
  };

  lesson.images = [
    {
      title: 'A Nahua Healer and Smallpox Patients, Florentine Codex',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Healer%20%28ticitl%29%20tending%20to%20people%20suffering%20from%20smallpox%20in%201520%20in%20Book%2012%20of%20the%20Florentine%20Codex%2C%201577.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Healer_(ticitl)_tending_to_people_suffering_from_smallpox_in_1520_in_Book_12_of_the_Florentine_Codex%2C_1577.jpg',
      caption: 'Painted by Nahua artists for Book 12 of the Florentine Codex, completed about 1577, more than fifty years after the 1520 smallpox epidemic in Tenochtitlan. A Spanish friar, Bernardino de Sahagún, directed the project; Nahua elders supplied the account.',
      prompt: 'NOTICE what covers the skin of the people on the right, and what the healer on the left is doing. INFER what this picture suggests about how the disease affected a whole household or city. What can a picture made fifty years later not tell you?'
    },
    {
      title: 'A Sugar Mill in Dutch Brazil, Frans Post, 1660s',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frans%20Post%20-%20Engenho%20de%20A%C3%A7%C3%BAcar%20%28Dublin%29.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Frans_Post_-_Engenho_de_A%C3%A7%C3%BAcar_(Dublin).jpg',
      caption: 'Oil painting by Frans Post, a Dutch artist who went to Dutch-ruled northeastern Brazil in 1637, stayed several years, and painted its sugar plantations for buyers in Europe for decades after he went home. National Gallery of Ireland.',
      prompt: 'NOTICE the mill on the right, the ox cart, and the people working beside them, then NOTICE the house on the hill. INFER who did the work on this plantation and who owned it. What might a painting made to sell in Europe leave out?'
    },
    {
      title: 'The July Harvest in the Andes, Guamán Poma, 1615',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guam%C3%A1n%20Poma%201615%201150%20julio.png?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Guam%C3%A1n_Poma_1615_1150_julio.png',
      caption: 'Drawing by Felipe Guamán Poma de Ayala, an Andean nobleman, from the illustrated chronicle he addressed to the King of Spain about 1615. The Quechua heading names July as the month for carrying the harvested maize (sara) and potatoes (papa) to storage.',
      prompt: 'NOTICE what the people are carrying and where they are taking it. INFER how important these two crops were to the people who drew and lived this scene. Which of these crops would later travel to Afro-Eurasia, and why might it have been welcome there?'
    },
    {
      title: '"Turkie Corne" in an English Herbal, 1597',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frumentum%20turcicum%20Gerard%201597%2075.png?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Frumentum_turcicum_Gerard_1597_75.png',
      caption: 'A page of John Gerard\'s The Herball or Generall Historie of Plantes, printed in London in 1597. It pictures maize, a plant first grown in the Americas, under the names "Turkie Corne" and "Turkie Wheate."',
      prompt: 'NOTICE the different names printed on this page for the same plant. INFER what the mixed names suggest about how English readers understood a new plant and where it came from. What does a book about plants show, and what can it not show about who was eating maize?'
    },
    {
      title: 'Sweet Potatoes in a Qing Album of Taiwan, 1740s',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/%E7%95%AA%E8%96%AF%E3%80%81%E9%A6%99%E5%93%A1%E3%80%81%E7%95%AA%E6%9F%BF%E3%80%81%E8%91%AB%E8%98%86%E3%80%81%E7%81%A3%E8%B1%86.jpg?width=1200',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E7%95%AA%E8%96%AF%E3%80%81%E9%A6%99%E5%93%A1%E3%80%81%E7%95%AA%E6%9F%BF%E3%80%81%E8%91%AB%E8%98%86%E3%80%81%E7%81%A3%E8%B1%86.jpg',
      caption: 'From an album of Taiwan\'s plants and customs painted for 六十七 (Liushiqi), a Qing official sent to inspect Taiwan in the 1740s. The note beside the red tubers labeled 番薯 (fanshu, "foreign tuber") says, in a translation made for this lesson: "Its seed came from the country of Wenlai [Brunei]. It is planted very widely in Taiwan; settlers and Indigenous people rely on it for food. It is truly a help in years of bad harvest."',
      prompt: 'NOTICE what the label calls this plant and what the note says people use it for. INFER what the name "foreign tuber" suggests. The note says the plant came from Brunei, but sweet potatoes first grew in the Americas: what does that tell you about what this source could and could not know? How could it still support a claim about nutrition in Asia?'
    }
  ];
})();
