(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_06_the_Governor_of_Maraghah.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qadi_Abbasid_-_Maqamat_Harir_1237.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/A_Library_in_Golden_Islamic_Age.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_43_Abu_Zayd_and_al-Harith_travelling.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Ahmed_Mosque_Istanbul_Turkey_retouched.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Maqamat_al-Hariri%2C_folio_86r_(detail).jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Aqsa_mosque_%288682155875%29.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ruler_in_Turkic_dress_(long_braids%2C_fur_hat%2C_boots%2C_fitting_coat)%2C_in_the_Maqamat_of_al-Hariri%2C_1237_CE%2C_probably_Baghdad.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Possible_depiction_of_al-Hariri%2C_in_the_Maqamat_of_al-Hariri%2C_1237_CE%2C_probably_Baghdad.jpg'
  };
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.1.III.D.iii",
      "theme": "Culture",
      "text": "Islam, Judaism, Christianity, and the core beliefs and practices of these religions continued to shape societies in Africa and Asia.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I",
      "theme": "Governance",
      "text": "As the Abbasid Caliphate fragmented, new Islamic political entities emerged, most of which were dominated by Turkic peoples. These states demonstrated continuity, innovation, and diversity.",
      "illustrativeExamples": [
        "Seljuk Empire",
        "Mamluk sultanate of Egypt",
        "Delhi sultanates"
      ]
    },
    {
      "code": "KC-3.1.III.A",
      "theme": "Culture",
      "text": "Muslim rule continued to expand to many parts of Afro-Eurasia due to military expansion, and Islam subsequently expanded through the activities of merchants, missionaries, and Sufis.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.II.A.i",
      "theme": "Technology",
      "text": "Muslim states and empires encouraged significant intellectual innovations and transfers.",
      "illustrativeExamples": [
        "Advances in mathematics (Nasir al-Din al-Tusi)",
        "Advances in literature ('A'ishah al-Ba'uniyyah)",
        "Advances in medicine",
        "Preservation and commentaries on Greek moral and natural philosophy",
        "House of Wisdom in Abbasid Bagdad",
        "Scholarly and cultural transfers in Muslim and Christian Spain"
      ]
    }
  ];

  if (lesson.lecture && Array.isArray(lesson.lecture.videos) && !lesson.lecture.videos.some(video => video.youtubeId === 'yD4vvlPMQrw')) {
    lesson.lecture.videos.push({
      title: 'Sufism and the Spread of Islam',
      url: 'https://youtu.be/yD4vvlPMQrw',
      youtubeId: 'yD4vvlPMQrw',
      previewImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_43_Abu_Zayd_and_al-Harith_travelling.jpg',
      prompt: 'Watch for how Sufi beliefs, practices, and personal religious networks helped Islam spread across diverse societies.'
    });
  }

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'AP Skill Builder: Build a Causal Explanation',
    intro: 'Causation means more than naming what happened first. A strong AP response identifies a specific cause, explains the mechanism that connects it to an outcome, and supports that connection with historical evidence. For Topic 1.2, start with Abbasid fragmentation and then show what that political change produced.',
    steps: [
      { label: '1. Choose a cause', text: 'Start with one precise cause, such as weakening Abbasid political authority, the rise of Turkic military power, or the growth of merchant and Sufi networks.' },
      { label: '2. Explain the mechanism', text: 'Ask HOW the cause produced change. Example: weakened Abbasid authority created space for regional military leaders to build independent states.' },
      { label: '3. Add specific evidence', text: '<strong>Political evidence:</strong> Seljuk Empire, Mamluk Sultanate, Delhi Sultanate.<br><strong>Cultural evidence:</strong> merchants, missionaries, Sufis, Islamic law and shared religious institutions.<br><strong>Intellectual evidence:</strong> paper-making, translation, mathematics, medicine, astronomy, scholarly networks.' },
      { label: '4. State the effect and why it matters', text: 'Name what changed, then explain its significance. Political fragmentation created multiple centers of power without ending the wider religious and intellectual connections of Dar al-Islam.' },
      { label: 'Response frame', text: '<strong>Because</strong> ___, ___. <strong>This led to</strong> ___ <strong>because</strong> ___. This mattered because ___.' }
    ],
    prompt: 'Write 2–3 sentences explaining one cause of the rise of new Islamic states and one effect on Dar al-Islam. Use at least one specific state or network as evidence, and explain the mechanism connecting the cause to the effect.'
  };

  lesson.evidenceLab = {
    title: 'Evidence Lab: Fragmented States, Connected World',
    task: 'Use TWO evidence cards to test the idea that Dar al-Islam could be politically fragmented while remaining culturally and intellectually connected. For each card, separate what you can directly observe from what you infer. The card context identifies the object; it does not supply the historical conclusion.',
    prompt: 'Make one claim about continuity and change in Dar al-Islam after Abbasid political fragmentation. Use a specific detail from two evidence cards, explain what each detail suggests, and state one thing the evidence cannot prove by itself.'
  };

  lesson.images = [
    {
      title: "Al-Idrisi's Tabula Rogeriana, 1154",
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:TabulaRogeriana.jpg',
      caption: 'Intellectual-network evidence. Al-Idrisi, a Muslim geographer, produced this world map in Sicily in 1154 for the Norman king Roger II, shortly before the period studied in Topic 1.2.',
      prompt: 'NOTICE one feature showing the geographic range of knowledge represented here. What can you INFER about scholarly exchange across political and religious boundaries? How could this establish continuity into c. 1200–1450?'
    },
    {
      title: 'Governor of Maragha, Maqamat Manuscript',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maqama_06_the_Governor_of_Maraghah.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maqama_06_the_Governor_of_Maraghah.jpg',
      caption: 'Political and social evidence. An illustration from a 13th-century Maqamat manuscript depicting a governor and courtly setting in the Islamic world.',
      prompt: 'NOTICE a detail about the ruler, attendants, or court setting. What can you INFER about regional political authority after Abbasid fragmentation? What claim would require additional evidence about the Seljuks, Mamluks, or Delhi Sultanate?'
    },
    {
      title: 'Maqamat of al-Hariri, Baghdad, 1237',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maqamat_al-Hariri%2C_folio_86r_%28detail%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maqamat_al-Hariri%2C_folio_86r_%28detail%29.jpg',
      caption: 'Literary and urban evidence. A manuscript illustration produced in Baghdad in 1237, during a period of political fragmentation in the wider Islamic world.',
      prompt: 'NOTICE one detail that suggests literacy, artistic production, travel, or urban life. What does that allow you to INFER about cultural vitality despite political fragmentation?'
    },
    {
      title: 'Mansa Musa in the Catalan Atlas, 1375',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
      caption: 'Network evidence. A European-produced map from 1375 depicts the Muslim ruler Mansa Musa of Mali holding gold, showing how information about Islamic West Africa circulated far beyond Mali.',
      prompt: 'NOTICE how Mansa Musa is represented. What can you INFER about the reach of trade, Islam, and reputation networks? What does the European origin of the map mean you should be cautious about claiming?'
    }
  ];
})();
