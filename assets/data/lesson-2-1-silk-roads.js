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
    unit: "Unit 2: Networks of Exchange",
    topic: "Topic 2.1",
    title: "The Silk Roads: Exchange Across Afro-Eurasia",
    subtitle: "Overland trade, luxury goods, and the spread of goods, ideas, and disease c. 1200–1450",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain the causes of Silk Road growth, including state-building, pastoral nomads, and merchant networks that created and maintained overland routes.",
      kc: "KC-2.3.I.B",
      theme: "Economics"
    },
    {
      target: "I can describe the goods and ideas exchanged along the Silk Roads, including silk, spices, paper, gunpowder, Buddhism, Islam, and plague.",
      kc: "KC-2.3.I.C",
      theme: "Economics"
    },
    {
      target: "I can explain the effects of Silk Road trade on societies along the routes, including wealth accumulation, urbanization, and the spread of disease.",
      kc: "KC-2.3.I.D",
      theme: "Economics"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence — relay stations, pastoral nomads, caravanserais, or state protection — to explain what made overland trade across Afro-Eurasia possible.",
      kc: "KC-2.3.I.B",
      theme: "Economics"
    },
    {
      criteria: "I can identify both goods (silk, spices, porcelain, paper, gunpowder) and ideas (Buddhism, Islam, Christianity, plague) that moved along the Silk Roads and explain their significance.",
      kc: "KC-2.3.I.C",
      theme: "Economics"
    },
    {
      criteria: "I can connect Silk Road exchange to specific effects on societies — including wealth, urban growth along routes, and the devastating spread of the Black Death.",
      kc: "KC-2.3.I.D",
      theme: "Economics"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-2.3.I.B",
      theme: "Economic Systems",
      text: "The Silk Roads facilitated the exchange of goods, ideas, and people across Afro-Eurasia. State-building, pastoral nomads acting as intermediaries, and networks of merchants and caravanserais made this overland exchange system possible.",
      illustrativeExamples: ["Caravanserais", "Pastoral nomads as intermediaries", "Chinese silk and porcelain"]
    },
    {
      code: "KC-2.3.I.C",
      theme: "Economic Systems",
      text: "Goods, ideas, and technologies moved across the Silk Roads, including luxury goods, agricultural products, and technologies such as paper, printing, and gunpowder.",
      illustrativeExamples: ["Silk", "Spices", "Paper", "Gunpowder", "Compass", "Buddhism", "Islam"]
    },
    {
      code: "KC-2.3.I.D",
      theme: "Economic Systems",
      text: "The Silk Roads had significant effects on the societies they connected, including the accumulation of wealth, urbanization along the routes, and the spread of epidemic disease.",
      illustrativeExamples: ["Black Death", "Urban growth at trade hubs", "Wealth of Central Asian oasis cities"]
    }
  ],

  lecture: {
    title: "The Silk Roads: Infrastructure, Exchange, and Impact",
    intro: "Use these cards to explain what made the Silk Roads function, what moved along them, and how overland trade transformed the societies it connected from c. 1200 to c. 1450.",
    videos: [
      {
        title: "Heimler's History — Topic 2.1 Part 1",
        url: "https://youtu.be/YT_21_1",
        youtubeId: "YT_21_1",
        prompt: "Use this clip to review the infrastructure and agents that made the Silk Roads possible."
      },
      {
        title: "Heimler's History — Topic 2.1 Part 2",
        url: "https://youtu.be/YT_21_2",
        youtubeId: "YT_21_2",
        prompt: "Use this clip to review what moved along the Silk Roads and the effects of that exchange on Afro-Eurasian societies."
      }
    ],
    segments: [
      {
        title: "What made the Silk Roads possible",
        bullets: [
          "**Caravanserais** — government-sponsored rest stops spaced roughly a day's travel apart — provided water, food, lodging, and security for merchants and their animals.",
          "**Pastoral nomads**, especially Turkic and Mongol peoples of Central Asia, served as intermediaries and guides, profiting from fees and tolls while connecting settled civilizations.",
          "State protection and political stability were essential: when empires like the Mongol khanates guaranteed safe passage, trade volumes surged along the routes."
        ],
        image: {
          title: "Silk Road routes across Afro-Eurasia",
          caption: "A map of the overland Silk Roads connecting China, Central Asia, Southwest Asia, and the Mediterranean world.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Silk_route.jpg"
        }
      },
      {
        title: "What moved along the Silk Roads",
        bullets: [
          "Luxury goods such as **silk**, spices, porcelain, and glassware moved from East to West, while horses, wool, gold, and silver moved in return — trade was rarely balanced but always mutually beneficial.",
          "Technologies including **paper**, printing, gunpowder, and the magnetic compass spread westward from China, reshaping warfare, communication, and navigation across Afro-Eurasia.",
          "Religions and ideas also traveled: **Buddhism** spread from India into Central and East Asia, **Islam** reached Central Asian merchants and communities, and epidemic disease — including the **Black Death** — moved along the same routes as goods."
        ],
        image: {
          title: "Silk Road routes in the 7th century",
          caption: "Overland and maritime routes connecting Afro-Eurasian civilizations. By c. 1200 these routes were well established.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Silk_Road_in_7th_century_AD.png"
        }
      },
      {
        title: "How the Silk Roads changed societies",
        bullets: [
          "Oasis cities along the routes — Samarkand, Kashgar, Dunhuang — grew wealthy and cosmopolitan as **trade hubs**, attracting merchants, scholars, and craftspeople from across Afro-Eurasia.",
          "Societies that controlled key nodes accumulated enormous **wealth** through taxes, tolls, and direct commerce, fueling state power and cultural patronage.",
          "The **Black Death** (bubonic plague), carried by fleas on rodents transported along trade routes, devastated populations across Eurasia in the mid-14th century — demonstrating that connectivity accelerated both prosperity and catastrophe."
        ],
        image: {
          title: "Jiaozi paper money — Song China",
          caption: "Paper money reflects the commercialized economy that powered demand for Silk Road luxury goods.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Jiao_zi.jpg"
        }
      }
    ]
  },

  map: {
    title: "Silk Road Routes Across Afro-Eurasia",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Silk_route.jpg",
    caption: "The overland Silk Roads connected China to the Mediterranean through Central Asia and Southwest Asia.",
    intro: "Use the map to trace how goods, people, and ideas moved across thousands of miles of steppe, desert, and mountain terrain.",
    prompt: "How did geography — deserts, mountains, and steppe — shape which routes merchants used and which communities became wealthy trade hubs?",
    notes: [
      "The routes were not a single road but a network of paths across multiple environments, requiring local knowledge and intermediaries.",
      "Central Asian pastoral peoples occupied the geographic middle of the system and profited as guides, guards, and traders.",
      "Cities on the routes — Samarkand, Kashgar, Dunhuang — reflected the cosmopolitan wealth generated by centuries of exchange."
    ]
  },

  first10: {
    title: 'First & 10: Roads of Silk and Exchange',
    embedUrl: 'first-and-10-topic-2-1-silk-roads-capture.html'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading the Silk Roads Through Evidence",
    intro: "Use the evidence below to connect Silk Road exchange to broader historical arguments about trade, technology, and the consequences of connectivity.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about what made the Silk Roads possible, what moved along them, or how they changed societies.",
    items: [
      { title: "Caravanserais", detail: "Evidence of state investment in trade infrastructure and the conditions that made long-distance commerce practical." },
      { title: "Paper and gunpowder moving westward", detail: "Evidence of technology transfer along the Silk Roads and its transformative effects on societies far from China." },
      { title: "The Black Death, 1340s–1350s", detail: "Evidence that the same networks enabling commercial exchange also accelerated the spread of epidemic disease across Afro-Eurasia." }
    ]
  },

  primarySource: {
    title: "Primary Source: Marco Polo on the Silk Roads",
    intro: "Marco Polo traveled the Silk Roads in the late 13th century and recorded observations about trade, cities, and commerce across Central Asia and China. This adapted passage reflects his account of Kublai Khan's domains.",
    text: "The Great Khan has established a system of posts throughout his lands. At every twenty-five miles there stands a station where fresh horses await any messenger who carries the Khan's seal. In this way the Khan receives news from the most distant places in only a few days. Along the roads between the great cities, travelers find rest houses called caravanserais, where merchants may sleep and feed their animals. The roads are safe under the Khan's protection, and merchants carry great quantities of silk, spices, and gems from one end of the empire to the other.",
    questions: [
      "What specific infrastructure does Marco Polo describe, and how does it help explain why Silk Road trade expanded under Mongol rule?",
      "What does this source reveal about the relationship between political power and commercial exchange?",
      "What might this source leave out or misrepresent about the experience of ordinary merchants or peoples along the routes?"
    ]
  }

};
