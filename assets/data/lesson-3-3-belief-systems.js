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
    unit: "Unit 3: Land-Based Empires",
    topic: "Topic 3.3",
    title: "Empires: Belief Systems",
    subtitle: "Continuity and change in Christianity, Islam, and South Asian belief systems, c. 1450–c. 1750",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the Protestant Reformation marked a break with existing Christian traditions, and how both the Protestant and Catholic reformations contributed to the growth of Christianity.",
      kc: 'KC-4.1.VI.i',
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can describe the Sunni-Shia divide between the Ottoman and Safavid empires and explain how religious difference drove political conflict.",
      kc: 'KC-4.1.VI.ii',
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain how Sikhism developed in South Asia in a context of interactions between Hinduism and Islam.",
      kc: 'KC-4.1.VI.iii',
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe a major change introduced by the Protestant Reformation (e.g., Luther's challenge to Church authority and the rise of new Protestant denominations) and explain how the Protestant and Catholic reformations both expanded Christianity.",
      kc: 'KC-4.1.VI.i',
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain the Battle of Chaldiran (1514) as both a religious and political conflict between rival empires.",
      kc: 'KC-4.1.VI.ii',
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain how Sikhism, founded by Guru Nanak, emerged from interactions between Hindu and Islamic traditions in South Asia.",
      kc: 'KC-4.1.VI.iii',
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 3: Learning Objective C',
      theme: 'Learning Objective',
      text: 'Explain continuity and change within the various belief systems during the period from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.VI.i',
      theme: 'Cultural Developments and Interactions',
      text: 'The Protestant Reformation marked a break with existing Christian traditions, and both the Protestant and Catholic reformations contributed to the growth of Christianity.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.VI.ii',
      theme: 'Cultural Developments and Interactions',
      text: 'Political rivalries between the Ottoman and Safavid empires intensified the split within Islam between Sunni and Shi’a.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.VI.iii',
      theme: 'Cultural Developments and Interactions',
      text: 'Sikhism developed in South Asia in a context of interactions between Hinduism and Islam.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Belief Systems in Motion: Reformation, Rivalry, and New Traditions",
    intro: "Use these cards to explain continuity and change within belief systems from c. 1450 to c. 1750: Christianity changed through Protestant and Catholic reform, Ottoman-Safavid rivalry intensified the Sunni-Shia divide, and Sikhism developed in South Asia amid sustained interaction between Hinduism and Islam.",
    videos: [],
    segments: [
      {
        title: "Christianity Changes: Protestant and Catholic Reformations",
        bullets: [
          "In 1517, **Martin Luther** challenged practices and claims of authority within the Catholic Church. The Protestant Reformation broke the institutional unity of western Christianity and helped produce new Protestant churches and confessional communities.",
          "The Reformation represented **change**, but Christianity itself remained a major belief system. Protestant communities retained core Christian beliefs even as they rejected or reinterpreted Catholic institutions and practices.",
          "The **Catholic Reformation** responded through renewed discipline, education, missionary activity, and reforms associated with the Council of Trent and religious orders such as the Jesuits.",
          "The CED's key point is not simply that Christianity divided. Both Protestant and Catholic reform movements contributed to Christianity's continued growth and wider reach."
        ],
        image: {
          title: "Martin Luther, c. 1530",
          caption: "A reform leader whose challenge to Church authority became part of a major break within western Christianity.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lucas_Cranach_-_Portrait_of_Martin_Luther%2C_circa_1530.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Lucas_Cranach_-_Portrait_of_Martin_Luther,_circa_1530.jpg"
        }
      },
      {
        title: "Islamic Continuity and Change: Ottoman-Safavid Rivalry",
        bullets: [
          "The **Sunni-Shia division** within Islam long predated the Ottoman and Safavid empires. What changed in the early modern period was the way a political rivalry between two powerful states intensified that religious divide.",
          "The Ottoman Empire identified strongly with **Sunni Islam**, while the Safavid state established **Twelver Shia Islam** as the dominant state tradition in Iran. Religious identity became intertwined with imperial competition and border politics.",
          "At the **Battle of Chaldiran (1514)**, Ottoman and Safavid forces fought over political power and territory in a conflict also shaped by sectarian identity. The rivalry did not create the Sunni-Shia split, but it hardened and intensified it.",
          "This is the continuity-and-change mechanism to remember: an existing religious division continued, while imperial rivalry increased its political significance."
        ],
        image: {
          title: "Battle of Chaldiran, 1514",
          caption: "Ottoman-Safavid rivalry made an existing Sunni-Shia division more politically consequential.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Chaldiran_miniature._Sel%C4%ABm-n%C4%81ma%2C_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB%2C_1524_%28National_Library_of_Israel%2C_Ms._Yah._Ar._1116%29.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Battle_of_Chaldiran_miniature._Sel%C4%ABm-n%C4%81ma,_by_%C5%9E%C5%ABkr%C4%AB-i_Bitlis%C4%AB,_1524_(National_Library_of_Israel,_Ms._Yah._Ar._1116).jpg"
        }
      },
      {
        title: "Sikhism Develops in South Asia",
        bullets: [
          "**Guru Nanak** (1469–1539) taught in Punjab, a region where Hindu and Muslim communities had interacted for centuries through trade, migration, political rule, and devotional traditions.",
          "Sikhism developed in that context of **Hindu-Muslim interaction**, but it became a distinct religious tradition with its own teachings, gurus, community practices, and institutions.",
          "Nanak emphasized devotion to one God, ethical living, service, and the spiritual equality of people while rejecting rigid social and ritual boundaries.",
          "Avoid reducing Sikhism to a simple 'blend' of Hinduism and Islam. The historical point is contextual: interaction helped shape the environment in which a new, distinct tradition developed."
        ],
        image: {
          title: "Guru Nanak, later devotional portrait",
          caption: "A later devotional image of Guru Nanak, whose teachings helped form a distinct Sikh tradition in Punjab.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Guru_Nanak.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Portrait_of_Guru_Nanak.png"
        }
      }
    ]
  },

  map: {
    title: "The Ottoman-Safavid Frontier: A Sunni-Shia Divide",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Safavid_Empire%2C_circa_1630.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Safavid_Empire%2C_circa_1630.png",
    caption: "The Safavid Empire at its height, showing the Ottoman Empire to the west and the Mughal Empire to the east, each a land-based empire with distinct religious identities and policies.",
    intro: "Use the map to locate the key empires and trace the geographic and religious boundaries between them. Notice how the Safavid Empire's position between two Sunni empires shaped the urgency of its Shia identity.",
    prompt: "How does the geographic position of the Safavid Empire between the Ottoman and Mughal empires help explain why religious identity became such a powerful political tool for Safavid rulers?",
    notes: [
      "The Safavid Empire controlled modern-day Iran and parts of Iraq, Afghanistan, and the Caucasus, geographically wedged between Ottoman Sunni power to the west and Mughal Sunni power to the east.",
      "Forced conversion to Shia Islam gave the Safavid state a distinctive identity that made it impossible to confuse with its neighbors, a religious identity that was also a political boundary.",
      "The Ottoman-Safavid border shifted repeatedly across the 16th and 17th centuries as military campaigns won and lost territory, but the Sunni-Shia divide remained a constant feature of their relationship."
    ]
  },

  deepReading: {
    title: 'Faith, and the Uses of It',
    desc: 'A textbook-depth companion on the Reformation as a political event, the Catholic response that carried the church across the world, the sectarian border Chaldiran drew and left behind, the arithmetic of ruling people who believe otherwise, and Sikhism. Optional.',
    url: 'deep-reading-topic-3-3-belief-systems.html'
  },

  first10: {
    title: 'First & 10: God, Power, and Empire',
    embedUrl: 'first-and-10-topic-3-3-belief-systems-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Empires and Belief Systems Through Evidence",
    intro: "Use the evidence below to connect rulers' religious policies to broader historical arguments about how land-based empires maintained power, managed diversity, and came into conflict.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about how rulers used religion to legitimize authority, manage diverse populations, or wage political conflict.",
    items: [
      { title: "Din-i-Ilahi — Akbar's syncretic religious movement", detail: "Evidence of a ruler deliberately constructing a new religious synthesis to signal tolerance and draw diverse subjects into a shared imperial identity, and of the limits of that strategy when it attracted few genuine adherents." },
      { title: "Ottoman Sultan as Caliph — using Sunni leadership for legitimacy", detail: "Evidence that religious titles and roles were political tools: controlling Mecca and Medina and claiming the caliphate gave Ottoman rulers authority that extended beyond military power alone, projecting influence across the Muslim world." },
      { title: "Battle of Chaldiran (1514) — Sunni-Shia conflict as imperial warfare", detail: "Evidence that religious difference was not merely a backdrop to political rivalry but could be the direct cause of military conflict, with the Ottoman sultan framing the invasion of Safavid Persia explicitly as a war against heresy." }
    ]
  },

  primarySource: {
    title: "Primary Source: Abu'l Fazl on Akbar's Religious Policy",
    intro: "Abu'l Fazl was Akbar's court historian and closest intellectual advisor. His Ain-i-Akbari (Institutes of Akbar) described the emperor's religious approach in detail. This adapted passage reflects his account of Akbar's governing philosophy at Fatehpur Sikri.",
    text: "His Majesty has always been devoted to seeking truth. He has inquired of men of every creed and faith, listening carefully to arguments advanced by the wise of every sect. He has assembled scholars of Islam, of Hinduism, of Zoroastrianism, and of Christianity, and caused them to debate in his presence. From each he has learned what is excellent in their tradition. It is His Majesty's conviction that no single creed has a monopoly on truth, and that rulers who impose one faith upon all do injury both to their subjects and to God, who has placed different illuminations in different traditions. He has therefore removed the poll tax upon those who follow other faiths and has opened the highest offices of the empire to men of every religion who prove themselves worthy by service and ability.",
    questions: [
      "What does Abu'l Fazl's account reveal about Akbar's justification for religious tolerance? How does he frame it as both a religious principle and a practical governing strategy?",
      "What specific policies does the source describe, and how do they connect to Akbar's broader approach to managing a diverse empire?",
      "Abu'l Fazl was Akbar's loyal court historian. How might his perspective shape this account, and what might a conservative Muslim scholar or a Hindu subject have written about the same policies?"
    ]
  },

  beSurreal: {
    title: "You Are at Akbar's Court, Fatehpur Sikri, c. 1580",
    desc: "The emperor has invited scholars from Islam, Hinduism, Jainism, Zoroastrianism, and Christianity to debate at his court. As a court scribe, you're recording a debate between a Sufi mystic and a Jesuit priest. Akbar himself has announced his Din-i-Ilahi, and most people at court are unsure whether to follow it or just pretend to.",
    intro: "You have been summoned to the emperor's ibadat khana, his House of Worship, where debates among religious scholars have been held every Thursday evening for years. Tonight the atmosphere is tense. A Sufi mystic from Persia and a Jesuit priest from Goa are arguing about the nature of God. Akbar sits on a raised platform, listening carefully, asking sharp questions that no one quite knows how to answer.",
    detail: "You are a court scribe, your job is to record the debate accurately. But you are also a Muslim who studied at a madrasa, and some of what the emperor has proposed in his Din-i-Ilahi makes you uneasy. He has asked nobles to prostrate themselves before him at dawn as a gesture of loyalty, something that looks like worship to some. He has abolished the jizya. He has placed Hindus and Rajputs in the highest military commands. You believe in the emperor's justice, but you are not sure what to make of his religion. Most of your colleagues, you suspect, feel the same, publicly supportive, privately uncertain. The Jesuit is now arguing that Christ is uniquely divine. The Sufi responds that all rivers flow to the same ocean. The emperor is smiling.",
    prompt: "Write two sentences recording the debate: one for the Sufi's argument, one for the Jesuit's. Then write one sentence, your private reaction as a Muslim scribe, something you will never show the emperor. What do you write?"
  },

  beInTheRoom: {
    url: '../beintheroom/unit-3/after-chaldiran.html',
    desc: 'Enter Shah Ismail’s council after Chaldiran. Rebuild Safavid authority while institutionalizing Twelver Shiism, managing religious diversity, and responding to Ottoman Sunni rivalry.'
  }

};
