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
    title: "Empires and Belief Systems",
    subtitle: "How rulers of land-based empires used religion to legitimize authority, manage diversity, and wage sectarian conflict c. 1450–c. 1750",
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
    title: "God and Empire: Religion as a Tool of Rule",
    intro: "Use these cards to explain how the Ottoman, Safavid, Mughal, Qing, and European rulers of c. 1450–c. 1750 used religion to claim legitimacy, manage diversity, and wage religious conflict, and why some approaches succeeded while others provoked resistance.",
    videos: [],
    segments: [
      {
        title: "God and the Emperor: Using Religion to Rule",
        bullets: [
          "**Ottoman sultans** claimed the title of **Caliph**, protector of Sunni Islam worldwide, giving their authority a religious dimension that extended beyond the empire's borders. The sultans also controlled Mecca and Medina, the two holiest sites in Islam, strengthening their claim to Islamic leadership and drawing pilgrims and scholars to their capital.",
          "**Shah Ismail I** of the Safavid Empire forcibly converted Persia from Sunni to **Shia Islam** beginning in 1501, creating a state religion that distinguished the Safavid realm from Ottoman Sunni Islam and demanded loyalty through shared sectarian identity. The Shah positioned himself as both political and religious leader, divinely guided by the Shia Imams.",
          "**Akbar** (r. 1556–1605) of the Mughal Empire pursued a policy of **religious tolerance**, incorporating Hindu Rajput nobles into the imperial administration, abolishing the jizya (poll tax on non-Muslims), and developing the **Din-i-Ilahi**, a syncretic spiritual movement drawing on Islam, Hinduism, Zoroastrianism, and Christianity to create an inclusive imperial identity.",
          "The **Qing Dynasty** adopted **Confucian** ceremonial roles to satisfy Han Chinese subjects while simultaneously patronizing **Tibetan Buddhism** and its lamas, performing rituals from multiple traditions to signal legitimacy across their ethnically and religiously diverse empire."
        ],
        image: {
          title: "The Safavid Empire and the Ottoman-Safavid frontier",
          caption: "The Safavid Empire at its height. The western frontier with the Ottoman Empire was both a military and a religious boundary, Sunni and Shia state power facing each other across contested terrain.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png"
        }
      },
      {
        title: "The Sunni-Shia Divide: Ottoman vs. Safavid",
        bullets: [
          "The **Sunni-Shia split** dates to the death of the Prophet Muhammad in 632 CE and the question of succession. Sunnis accepted elected caliphs from the broader Muslim community; Shias believed authority should pass through the Prophet's family, specifically to Ali. By the 16th century, this theological divide had become a geopolitical fault line between two empires.",
          "When **Shah Ismail I** conquered Persia and forced conversion to **Shia Islam**, he created a Shia state on the Ottoman empire's eastern border. The Ottomans saw Safavid Shiism as heresy, a direct challenge to their claim as defenders of Sunni Islam and the natural leaders of the Muslim world.",
          "The **Battle of Chaldiran (1514)** was the defining military confrontation. Ottoman Sultan **Selim I** framed the invasion as a campaign against heresy as much as a war for territory. Ottoman artillery and infantry devastated the Safavid cavalry. Though the Ottomans won decisively, they could not hold Safavid territory, the Safavid state survived, and the rivalry defined the Ottoman-Safavid border for two centuries.",
          "The **cuius regio, eius religio** principle, whose realm, his religion, applied not only to European states after the **Peace of Augsburg (1555)** but reflected the same logic used by both Ottoman and Safavid rulers: the ruler's faith defined the state's identity and the loyalty demanded of its subjects."
        ],
        image: {
          title: "Safavid Empire Map",
          caption: "The Safavid Empire at its greatest extent, bordered by the Ottoman Empire to the west and the Mughal Empire to the east, a Shia state surrounded by Sunni powers.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png"
        }
      },
      {
        title: "Accommodation vs. Enforcement: Akbar and Aurangzeb",
        bullets: [
          "**Akbar** (r. 1556–1605) governed an empire where Muslims were a ruling minority over a Hindu majority. His response was systematic **accommodation**: he incorporated Hindu Rajput rulers through marriage alliances, abolished the jizya, opened the highest offices to men of every faith, and at his court at **Fatehpur Sikri** hosted weekly debates among Muslim, Hindu, Jain, Zoroastrian, and Christian scholars.",
          "The **Din-i-Ilahi**, Akbar's 'Divine Faith', was a personal spiritual synthesis that drew on the best of every tradition he had studied. It never attracted more than a few dozen followers, but it signaled Akbar's rejection of religious exclusivism as a governing principle. In an empire of extraordinary diversity, tolerance was not weakness, it was strategy.",
          "**Aurangzeb** (r. 1658–1707) reversed course. He reimposed the **jizya** on non-Muslims, ordered the destruction of Hindu temples and Sikh shrines, and enforced strict Sunni orthodoxy. His campaigns in the Deccan and against Sikh and Rajput leaders provoked rebellions across the subcontinent that drained imperial resources and weakened the empire's administrative coherence.",
          "The comparison of Akbar and Aurangzeb is one of the most productive in AP World History: both were capable rulers of the same empire, a century apart. **Akbar's tolerance expanded the empire by drawing diverse elites into a shared imperial project. Aurangzeb's enforcement narrowed the empire's base of loyalty and fueled the rebellions that accelerated Mughal decline.**"
        ],
        image: {
          title: "Mughal Empire and Akbar's court",
          caption: "Akbar's court at Fatehpur Sikri drew scholars from every religious tradition in the empire. The Din-i-Ilahi represented an ambitious attempt to synthesize those traditions into a single imperial identity.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png"
        }
      }
    ]
  },

  map: {
    title: "The Ottoman-Safavid Frontier: A Sunni-Shia Divide",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Safavid_Empire_Map.png",
    caption: "The Safavid Empire at its height, showing the Ottoman Empire to the west and the Mughal Empire to the east, each a land-based empire with distinct religious identities and policies.",
    intro: "Use the map to locate the key empires and trace the geographic and religious boundaries between them. Notice how the Safavid Empire's position between two Sunni empires shaped the urgency of its Shia identity.",
    prompt: "How does the geographic position of the Safavid Empire between the Ottoman and Mughal empires help explain why religious identity became such a powerful political tool for Safavid rulers?",
    notes: [
      "The Safavid Empire controlled modern-day Iran and parts of Iraq, Afghanistan, and the Caucasus, geographically wedged between Ottoman Sunni power to the west and Mughal Sunni power to the east.",
      "Forced conversion to Shia Islam gave the Safavid state a distinctive identity that made it impossible to confuse with its neighbors, a religious identity that was also a political boundary.",
      "The Ottoman-Safavid border shifted repeatedly across the 16th and 17th centuries as military campaigns won and lost territory, but the Sunni-Shia divide remained a constant feature of their relationship."
    ]
  },

  first10: {
    title: 'First & 10: God, Power, and Empire',
    embedUrl: 'first-and-10-topic-3-3-belief-systems-capture.html'
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
