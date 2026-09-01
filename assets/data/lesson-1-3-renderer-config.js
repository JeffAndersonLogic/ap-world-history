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

  const religionSpreadMap = 'https://raw.githubusercontent.com/JeffAndersonLogic/ap-world-history/main/assets/images/lecture/unit-1/topic-1-3/religions-spread-map.jpg';

  if (lesson.lecture && Array.isArray(lesson.lecture.segments) && lesson.lecture.segments[0]) {
    lesson.lecture.segments[0].image = {
      title: 'Spread of Buddhism, Hinduism, and Islam',
      url: religionSpreadMap,
      sourceUrl: religionSpreadMap,
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
})();
