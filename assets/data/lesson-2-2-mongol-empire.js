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
    topic: "Topic 2.2",
    title: "The Mongol Empire: Conquest, Connection, and the Pax Mongolica",
    subtitle: "Expansion, administration, and transregional exchange c. 1200–1450",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here — submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the Mongols conquered and administered a vast empire spanning from China to Eastern Europe.",
      kc: 'KC-3.2.I.B.iii',
      theme: "Governance"
    },
    {
      target: "I can explain how the Pax Mongolica facilitated trade, travel, and exchange across Eurasia.",
      kc: 'KC-3.1.I.E.i',
      theme: "Economics"
    },
    {
      target: "I can describe the effects of Mongol rule — both destructive consequences and the connective networks it created.",
      kc: 'KC-3.2.II.A.ii',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence — cavalry tactics, siege warfare, Genghis Khan's unification of the steppe, or the khanate system — to explain how the Mongols built and governed their empire.",
      kc: 'KC-3.2.I.B.iii',
      theme: "Governance"
    },
    {
      criteria: "I can explain how the Pax Mongolica created conditions for expanded trade and cultural exchange, using evidence such as the Yam postal system, protection of merchants, and the travels of Marco Polo or Ibn Battuta.",
      kc: 'KC-3.1.I.E.i',
      theme: "Economics"
    },
    {
      criteria: "I can identify both destructive effects (massacre, depopulation, destruction of Baghdad) and connective effects (trade, plague transmission, cultural exchange) of Mongol conquest and rule.",
      kc: 'KC-3.2.II.A.ii',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.2.I.B.iii',
      theme: 'Governance',
      text: 'Empires collapsed in different regions of the world and in some areas were replaced by new imperial states, including the Mongol khanates.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.E.i',
      theme: 'Economic Systems',
      text: 'The expansion of empires—including the Mongols—facilitated Afro-Eurasian trade and communication as new people were drawn into their conquerors’ economies and trade networks.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.2.II.A.ii',
      theme: 'Cultural Developments and Interactions',
      text: 'Interregional contacts and conflicts between states and empires, including the Mongols, encouraged significant technological and cultural transfers.',
      illustrativeExamples: ['Transfer of Greco-Islamic medical knowledge to western Europe', 'Transfer of numbering systems to Europe', 'Adoption of Uyghur script']
    }
  ],

  lecture: {
    title: "The Mongol Empire: Conquest, Administration, and the Pax Mongolica",
    intro: "Use these cards to explain how the Mongols built the largest contiguous land empire in world history, how they governed it, and how Mongol rule transformed Eurasian networks of trade and exchange from c. 1200 to c. 1450.",
    videos: [
      {
        title: "Heimler's History — Topic 2.2 Part 1",
        url: "https://youtu.be/YT_22_1",
        youtubeId: "YT_22_1",
        prompt: "Use this clip to review Mongol military power, conquest, and the expansion under Genghis Khan and his successors."
      },
      {
        title: "Heimler's History — Topic 2.2 Part 2",
        url: "https://youtu.be/YT_22_2",
        youtubeId: "YT_22_2",
        prompt: "Use this clip to review the Pax Mongolica, the khanate system, and the effects of Mongol rule on Eurasian trade and exchange."
      }
    ],
    segments: [
      {
        title: "How the Mongols built their empire",
        bullets: [
          "**Genghis Khan** (Temüjin) unified the fractured Mongolian steppe tribes by 1206 through a combination of military victories, strategic marriages, and a new merit-based army structure that broke traditional clan loyalties.",
          "Mongol armies combined devastating **cavalry tactics** — speed, feigned retreats, and mounted archery — with advanced **siege warfare** techniques learned from conquered peoples, making them effective against both nomadic and settled opponents.",
          "Expansion under Genghis Khan and his successors swept across Central Asia, northern China, Persia, and into Eastern Europe, creating the largest **contiguous land empire** in world history by the mid-13th century."
        ],
        image: {
          title: "Portrait of Genghis Khan",
          caption: "A Yuan dynasty portrait of Genghis Khan, founder of the Mongol Empire, from the National Palace Museum, Taiwan.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg"
        }
      },
      {
        title: "Governing a vast empire",
        bullets: [
          "After Genghis Khan's death, the empire was divided among his sons into four regional **khanates** — the Yuan (China), Ilkhanate (Persia), Chagatai (Central Asia), and Golden Horde (Russia/Eastern Europe) — each with distinct character but shared Mongol identity.",
          "The Mongols practiced **religious tolerance**, allowing Islam, Buddhism, Christianity, and other faiths to coexist within their domains, which helped them govern diverse conquered populations and attract skilled administrators from many backgrounds.",
          "The **Yam postal relay system** — a network of horse stations spaced a day's ride apart — allowed rapid communication across thousands of miles, enabling the Khan to administer distant territories and supporting the movement of merchants and diplomats."
        ],
        image: {
          title: "Silk Road routes across Afro-Eurasia",
          caption: "Under the Pax Mongolica, the overland routes of the Silk Roads experienced a period of relative safety and expanded trade.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Silk_route.jpg"
        }
      },
      {
        title: "The Pax Mongolica and its effects",
        bullets: [
          "The **Pax Mongolica** (Mongol Peace) — roughly 1250–1350 — created conditions for unprecedented long-distance travel: merchants, missionaries, and diplomats like Marco Polo crossed Eurasia under Mongol protection, generating new records of cross-cultural encounter.",
          "Mongol rule had **devastating consequences** as well: the sack of Baghdad in 1258 ended the Abbasid Caliphate and killed hundreds of thousands, while the destruction of Central Asian cities like Merv and Samarkand reduced some populations by a majority.",
          "The same trade routes that enabled the Pax Mongolica also transmitted the **Black Death** — bubonic plague spread westward along Silk Road routes from Central Asia in the 1340s, killing an estimated one-third of Europe's population and millions more across Afro-Eurasia."
        ],
        image: {
          title: "Geographic overview",
          caption: "The vast geographic reach of the Mongol Empire connected previously separated regions of Eurasia into a single — if contested — exchange network.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Nile_composite_NASA.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Mongol Empire and Its Khanates",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg",
    caption: "The Mongol Empire at its height spanned from the Pacific coast of China to Eastern Europe — the largest contiguous land empire in history.",
    intro: "Use the map context to trace the geographic scope of Mongol expansion and identify the four khanates that governed different regions after Genghis Khan's death.",
    prompt: "How did the geography of the Eurasian steppe make Mongol expansion possible, and how did the sheer size of the empire create challenges for unified governance?",
    notes: [
      "The Mongol Empire stretched across steppe, desert, forest, and farmland — a diversity of environments that required flexible strategies for conquest and administration.",
      "The four khanates that emerged after 1260 maintained Mongol identity while adapting to local conditions: the Yuan adopted Chinese administrative traditions, while the Ilkhanate eventually converted to Islam.",
      "Key trade cities — Samarkand, Beijing, Tabriz, and Caffa on the Black Sea — became nodes in the Pax Mongolica exchange network and later transmission points for the Black Death."
    ]
  },

  first10: {
    title: 'First & 10: The World the Mongols Made',
    embedUrl: 'first-and-10-topic-2-2-mongol-empire-capture.html'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading the Mongol Empire Through Evidence",
    intro: "Use the evidence below to connect Mongol conquest and administration to broader historical arguments about power, exchange, and the consequences of empire.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about how the Mongols built their empire, governed it, or shaped the world through the Pax Mongolica.",
    items: [
      { title: "The Yam postal system", detail: "Evidence of sophisticated imperial administration — the relay network enabled both military communication and the commercial travel that defined the Pax Mongolica." },
      { title: "The sack of Baghdad, 1258", detail: "Evidence of the destructive power of Mongol conquest — the end of the Abbasid Caliphate reshaped the Islamic world and demonstrated the costs of resistance." },
      { title: "Marco Polo's travels, 1271–1295", detail: "Evidence of the connectivity the Pax Mongolica enabled — a Venetian merchant could cross Eurasia under Mongol protection and produce the most detailed European account of Asia to that point." }
    ]
  },

  primarySource: {
    title: "Primary Source: William of Rubruck on Mongol Administration",
    intro: "William of Rubruck was a Flemish Franciscan friar who traveled to the court of the Mongol Khan Möngke in 1253–1255. His account, written for King Louis IX of France, is one of the most detailed European descriptions of the Mongol Empire. This adapted passage reflects his observations of Mongol governance and religious tolerance.",
    text: "The Khan's court was a place of many nations and many tongues. I saw there men of Russia, of Armenia, of Georgia, of Hungary, and of the Latin church, as well as followers of Muhammad and of the Buddha. The Khan himself questioned me about the faith of the Franks, and I answered him as best I could. He told me that he respected all who prayed to God sincerely, whatever their manner. His scribes kept records in several languages, and his messengers could travel the length of his empire with fresh horses waiting at every station. No merchant traveled without the Khan's seal of permission, but those who carried it moved freely and in safety.",
    questions: [
      "What does William of Rubruck's account reveal about how the Mongols governed a multiethnic, multireligious empire?",
      "How does the Yam postal system described in this source help explain the functioning of the Pax Mongolica?",
      "What is William's perspective as a European Christian friar, and how might that shape what he notices and what he leaves out?"
    ]
  }

};
