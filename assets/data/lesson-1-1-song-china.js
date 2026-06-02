(() => {
  const brandCss = '../assets/css/behistorical-brand-lock.css';
  if (!document.querySelector(`link[href="${brandCss}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = brandCss;
    document.head.appendChild(link);
  }
  const topLogo = document.querySelector('.brand-mini');
  if (topLogo) {
    topLogo.href = '../index.html';
    topLogo.setAttribute('aria-label', 'Return to BeHistorical landing page');
  }
  const heroLogoFrame = document.querySelector('.hero .logo-frame');
  if (heroLogoFrame && !heroLogoFrame.closest('a')) {
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.className = 'logo-home-link';
    homeLink.setAttribute('aria-label', 'Return to BeHistorical landing page');
    homeLink.style.display = 'inline-block';
    heroLogoFrame.parentNode.insertBefore(homeLink, heroLogoFrame);
    homeLink.appendChild(heroLogoFrame);
  }
})();

window.BEHISTORICAL_LESSON = {

  meta: {
    course: "AP WORLD HISTORY",
    unit: "Unit 1: The Global Tapestry",
    topic: "Topic 1.1",
    title: "Song China: Power, Prosperity, and the Scholar's World",
    subtitle: "Developments in East Asia, c. 1200 to c. 1450",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how Song China used Confucianism, imperial bureaucracy, and civil service exams to maintain and justify rule.",
      kc: "KC-3.2.I.A",
      theme: "Governance"
    },
    {
      target: "I can describe how Chinese cultural traditions and Buddhism continued to shape East Asia and influence neighboring regions.",
      kc: "KC-3.1.III.D.i · KC-3.1.III.D.ii",
      theme: "Culture"
    },
    {
      target: "I can explain how agricultural innovation, infrastructure, and commercialization strengthened Song China's economy and connections to wider trade networks.",
      kc: "KC-3.3.III.A.i · KC-3.1.I.D",
      theme: "Economics"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence such as bureaucracy, civil service exams, Confucianism, or Neo-Confucianism to explain how Song rulers organized power.",
      kc: "KC-3.2.I.A",
      theme: "Governance"
    },
    {
      criteria: "I can explain how Confucianism, Buddhism, and Chinese cultural traditions continued or changed as they shaped societies in East Asia.",
      kc: "KC-3.1.III.D.i · KC-3.1.III.D.ii",
      theme: "Culture"
    },
    {
      criteria: "I can connect Champa rice, the Grand Canal, paper money, trade, and production to population growth, urbanization, and commercial expansion.",
      kc: "KC-3.3.III.A.i · KC-3.1.I.D",
      theme: "Economics"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-3.2.I.A",
      theme: "Governance",
      text: "Empires and states in Afro-Eurasia and the Americas demonstrated continuity, innovation, and diversity in the 13th century. This included the Song Dynasty of China, which utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.",
      illustrativeExamples: []
    },
    {
      code: "KC-3.1.III.D.i",
      theme: "Cultural Developments and Interactions",
      text: "Chinese cultural traditions continued, and they influenced neighboring regions.",
      illustrativeExamples: ["Filial piety", "Neo-Confucianism"]
    },
    {
      code: "KC-3.1.III.D.ii",
      theme: "Cultural Developments and Interactions",
      text: "Buddhism and its core beliefs continued to shape societies in Asia and included a variety of branches, schools, and practices.",
      illustrativeExamples: ["Theravada", "Mahayana", "Tibetan"]
    },
    {
      code: "KC-3.3.III.A.i",
      theme: "Economic Systems",
      text: "The economy of Song China became increasingly commercialized while continuing to depend on free peasant and artisan labor.",
      illustrativeExamples: ["Champa rice", "Grand Canal", "Flying cash"]
    },
    {
      code: "KC-3.1.I.D",
      theme: "Economic Systems",
      text: "The expansion of empires—including the Song Dynasty—facilitated Afro-Eurasian trade and communication as new people were drawn into their conquerors' economies and trade networks.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Song China: Governance, Culture, and Economy",
    intro: "Use these cards to explain how Song China organized political authority, extended Chinese cultural influence, and developed one of the most commercialized economies of the postclassical world.",
    videos: [
      { title: "Heimler's History — Topic 1.1 Part 1", url: "https://youtu.be/QO7NHZJ-eE4", youtubeId: "QO7NHZJ-eE4", prompt: "Use this clip to review Song governance, Confucianism, and cultural influence." },
      { title: "Heimler's History — Topic 1.1 Part 2", url: "https://youtu.be/HfIWZhXt7fY", youtubeId: "HfIWZhXt7fY", prompt: "Use this clip to review Song commercial growth, technology, and economic innovation." }
    ],
    segments: [
      { title: "How Song rulers organized government", bullets: ["Song rulers expanded **imperial bureaucracy** to govern a large, complex state.", "The **civil service exam system** selected scholar-officials trained in Confucian texts.", "Confucianism helped justify hierarchy, obedience, education, and moral government."], image: { title: "Song imperial examination", caption: "Civil service exams became a major path into the scholar-official class.", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Song%20Imperial%20Examination.JPG", sourceUrl: "https://commons.wikimedia.org/wiki/File:Song_Imperial_Examination.JPG" } },
      { title: "Chinese traditions and East Asian influence", bullets: ["Chinese cultural traditions influenced Korea, Japan, and Vietnam through elite culture, writing, government models, and belief systems.", "**Neo-Confucianism** blended Confucian social ethics with Buddhist and Daoist ideas.", "Buddhism continued to shape societies across Asia in several branches, including Mahayana, Theravada, and Tibetan Buddhism."], image: { title: "Confucius portrait", caption: "Confucian learning remained central to elite culture and state ideology.", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Confucius_Tang_Dynasty.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:Confucius_Tang_Dynasty.jpg" } },
      { title: "Why the Song economy expanded", bullets: ["Champa rice increased agricultural productivity and supported population growth.", "The **Grand Canal** connected northern and southern China and helped move grain, goods, and tax revenue.", "Paper money, iron and steel production, porcelain, textiles, and urban markets reveal a highly commercialized economy."], image: { title: "Jiaozi paper money", caption: "Paper money reflected the needs of a growing commercial economy.", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jiao_zi.jpg" } }
    ]
  },

  map: {
    title: "Song China and East Asia",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/China_-_Song_Dynasty-en.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:China_-_Song_Dynasty-en.svg",
    caption: "Song China and neighboring states in East Asia.",
    intro: "Use the map to connect political borders, neighboring states, and the need for strong government systems.",
    prompt: "How did geography and neighboring states shape the problems Song rulers needed to solve?",
    notes: ["Song China governed a dense, productive region with major cities, canals, and farms.", "Neighboring states placed pressure on Song rulers, especially along the northern frontier.", "Economic strength did not remove military vulnerability."
    ]
  },

  first10: {
    title: "First & 10: The World That Song Built",
    embedUrl: 'first-and-10-topic-1-1-song-china-capture.html'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Song China Through Evidence",
    intro: "Use the evidence to connect Song institutions and innovations to broader historical developments.",
    prompt: "Choose one piece of evidence from Song China and explain how it supports a claim about political order, cultural influence, or economic commercialization.",
    items: [
      { title: "Civil service exams", detail: "Evidence of bureaucratic government and Confucian education." },
      { title: "Champa rice", detail: "Evidence of agricultural innovation, population growth, and productivity." },
      { title: "Paper money", detail: "Evidence of commercialization and large-scale exchange." }
    ]
  },

  primarySource: {
    title: "Primary Source: Confucian Governance",
    intro: "Read the source excerpt as evidence of the ideas that shaped elite government service.",
    text: "A ruler should cultivate virtue, appoint capable officials, and govern through moral example.",
    questions: ["What political values does the source emphasize?", "How could these values support bureaucracy or civil service exams?", "What limitation or bias might this elite perspective have?"]
  }
};
