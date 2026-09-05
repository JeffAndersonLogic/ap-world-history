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
})();
