(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.1.III.D.iv",
      "theme": "Culture",
      "text": "Hinduism, Islam, and Buddhism, and their core beliefs and practices, continued to shape societies in South and Southeast Asia.",
      "illustrativeExamples": [
        "Bhakti movement",
        "Sufism",
        "Buddhist monasticism"
      ]
    },
    {
      "code": "KC-3.2.I.B.i",
      "theme": "Governance",
      "text": "State formation and development demonstrated continuity, innovation, and diversity, including the new Hindu and Buddhist states that emerged in South and Southeast Asia.",
      "illustrativeExamples": [
        "Vijayanagara Empire",
        "Srivijaya Empire",
        "Rajput kingdoms",
        "Khmer Empire",
        "Majapahit",
        "Sukhothai kingdom",
        "Sinhala dynasties"
      ]
    }
  ];

  const religionSpreadMap = 'https://image1.slideserve.com/2074734/slide10-l.jpg';
  const religionSpreadSource = 'https://www.slideserve.com/mead/ch-9-the-expansion-of-trade-religion-in-south-and-southeast-asia-part-1';

  if (lesson.lecture && Array.isArray(lesson.lecture.segments) && lesson.lecture.segments[0]) {
    lesson.lecture.segments[0].image = {
      title: 'Spread of Buddhism, Hinduism, and Islam',
      url: religionSpreadMap,
      sourceUrl: religionSpreadSource,
      caption: 'The spread of Buddhism, Hinduism, and Islam across South and Southeast Asia shows how belief systems moved through trade routes, states, and cultural exchange.'
    };
  }

  if (lesson.lecture) {
    lesson.lecture.videos = Array.isArray(lesson.lecture.videos) ? lesson.lecture.videos : [];
    if (!lesson.lecture.videos.some((video) => video.youtubeId === 'V6q2HFGpDu4')) {
      lesson.lecture.videos.push({
        title: 'Srivijaya: Maritime Trade and Power',
        url: 'https://youtu.be/V6q2HFGpDu4',
        youtubeId: 'V6q2HFGpDu4',
        previewImage: religionSpreadMap,
        prompt: 'Watch for how Srivijaya used its maritime location, control of trade routes, and Buddhist connections to build regional power.'
      });
    }
  }

  lesson.skillBuilder = {
    label: 'CCOT practice, belief systems and state power',
    title: 'AP Skill Builder: Build a Continuity-and-Change Argument',
    intro: 'Continuity and Change Over Time asks you to track the SAME historical category across a period: what stayed important, what changed, and why. Do not write about one belief system for the continuity and an unrelated state for the change. Choose one process and follow it across c. 1200–1450.',
    steps: [
      { label: '1. Choose one process to track', text: 'Good choices: how a belief system shaped society, how rulers used religion to legitimize power, or how trade helped states grow.' },
      { label: '2. Establish the starting point', text: 'What was already true around c. 1200? This gives you a baseline so that you can actually identify continuity or change.' },
      { label: '3. Find continuity evidence', text: '<strong>Possible evidence:</strong> Hindu traditions remained influential; Buddhist monasticism continued; rulers continued using temples and sacred authority; Indian Ocean trade continued linking the region.' },
      { label: '4. Find change evidence', text: '<strong>Possible evidence:</strong> Bhakti widened devotional practice; Sufi networks helped Islam spread; Vijayanagara and Khmer rulers adapted religion to state-building; Srivijaya and Majapahit used maritime trade to project power.' },
      { label: '5. Explain why the pattern matters', text: 'Do not stop at “this stayed the same” or “this changed.” Explain what caused the change or why the continuity remained useful.' },
      { label: 'Response frame', text: '<strong>Although</strong> ___ continued from c. 1200 to c. 1450, ___ changed as/because ___. This mattered because ___.' }
    ],
    prompt: 'Write 2–3 sentences explaining one continuity AND one change in how a single belief system, state-building strategy, or trade process shaped South or Southeast Asia from c. 1200 to c. 1450. Use specific evidence and explain why the change occurred or why the continuity persisted.'
  };

  lesson.evidenceLab = {
    title: 'Evidence Lab: Religion, Trade, and State Power',
    task: 'Choose TWO cards that let you compare the same historical category: religious legitimacy, maritime trade, or state power. Start with a visible detail, make an inference, then connect the inference to a claim. Do not treat the caption as the answer.',
    prompt: 'Use two evidence cards to make one claim about how religion OR trade helped rulers build power in South or Southeast Asia. Include one specific observed detail from each card and explain why the evidence supports your claim.'
  };

  lesson.images = [
    {
      title: 'Angkor Wat',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Angkor%20Wat.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Angkor_Wat.jpg',
      caption: 'Monumental-architecture evidence. Angkor Wat was built by the Khmer state in the 12th century and remained an important sacred and political landscape into the period c. 1200–1450.',
      prompt: 'NOTICE one feature of scale, design, or setting. What can you INFER about the labor and authority required to create and maintain a monument like this? What claim about religion and kingship could it support?'
    },
    {
      title: 'Borobudur Ship Relief',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur%20ship.JPG',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Borobudur_ship.JPG',
      caption: 'Maritime evidence. A ship carved into the Buddhist monument at Borobudur in Java, reflecting seafaring in a region tied to Indian Ocean and Southeast Asian exchange.',
      prompt: 'NOTICE details of the vessel. What can you INFER about the importance of maritime movement in island Southeast Asia? How might this evidence support a claim about trade and cultural exchange?'
    },
    {
      title: 'Qutb Minar, Delhi',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qutb_Minar_2022.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qutb_Minar_2022.jpg',
      caption: 'Political-religious evidence. Construction of the Qutb Minar complex began under rulers of the Delhi Sultanate, an Islamic state governing a religiously diverse South Asian population.',
      prompt: 'NOTICE one feature of the monument or complex. What can you INFER about how a new ruling dynasty projected authority? What can this building show about political power that it cannot show about ordinary religious practice?'
    },
    {
      title: 'Srivijaya Empire Reference Map',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Srivijaya_Empire.svg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Srivijaya_Empire.svg',
      caption: 'Geographic evidence. A modern reference map locating Srivijaya around the Strait of Malacca, a major maritime chokepoint linking the Indian Ocean and South China Sea.',
      prompt: 'NOTICE the state\'s position relative to sea lanes and straits. What can you INFER about how geography could create political and commercial power? What additional evidence would you need to prove how rulers used that advantage?'
    }
  ];
})();
