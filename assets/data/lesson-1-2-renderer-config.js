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
})();
