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
    topic: "Topic 3.2",
    title: "Empires: Administration",
    subtitle: "How land-based empires organized power, collected revenue, and governed diverse peoples, c. 1450–c. 1750",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how rulers recruited bureaucratic elites and developed military professionals to maintain centralized control over their populations and resources.",
      kc: 'KC-4.3.I.C',
      theme: "Governance"
    },
    {
      target: "I can explain how rulers used religious ideas, art, and monumental architecture to legitimize their rule.",
      kc: 'KC-4.3.I.A',
      theme: "Governance"
    },
    {
      target: "I can explain how rulers used tribute collection, tax farming, and innovative tax-collection systems to generate revenue and forward state power and expansion.",
      kc: 'KC-4.3.I.D',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe at least two ways rulers recruited bureaucratic elites or military professionals (e.g., the Ottoman devshirme, salaried samurai) and explain how they served centralized control.",
      kc: 'KC-4.3.I.C',
      theme: "Governance"
    },
    {
      criteria: "I can give specific examples of religious ideas, art, or monumental architecture used to legitimize rule (e.g., European notions of divine right, Mughal mausolea and mosques, the palace at Versailles).",
      kc: 'KC-4.3.I.A',
      theme: "Governance"
    },
    {
      criteria: "I can describe at least two tax-collection systems (e.g., Mughal zamindar tax collection, Ottoman tax farming, Mexica tribute lists, Ming collection of taxes in hard currency) and explain how they funded state power and expansion.",
      kc: 'KC-4.3.I.D',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 3: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Explain how rulers used a variety of methods to legitimize and consolidate their power in land-based empires from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.I.C',
      theme: 'Governance',
      text: 'Recruitment and use of bureaucratic elites, as well as the development of military professionals, became more common among rulers who wanted to maintain centralized control over their populations and resources.',
      illustrativeExamples: ['Ottoman devshirme', 'Salaried samurai']
    },
    {
      code: 'KC-4.3.I.A',
      theme: 'Governance',
      text: 'Rulers continued to use religious ideas, art, and monumental architecture to legitimize their rule.',
      illustrativeExamples: ['Mexica practice of human sacrifice', 'European notions of divine right', 'Songhai promotion of Islam', 'Qing imperial portraits', 'Incan sun temple of Cuzco', 'Mughal mausolea and mosques', 'European palaces, such as Versailles']
    },
    {
      code: 'KC-4.3.I.D',
      theme: 'Governance',
      text: 'Rulers used tribute collection, tax farming, and innovative tax-collection systems to generate revenue in order to forward state power and expansion.',
      illustrativeExamples: ['Mughal zamindar tax collection', 'Ottoman tax farming', 'Mexica tribute lists', 'Ming practice of collecting taxes in hard currency']
    }
  ],

  lecture: {
    title: "Holding What You Won: People, Symbols and Money",
    intro: "Use these cards to deepen the First & 10. Each card is one of the three jobs every ruler had to do, and each one compares two rulers who did the same job in different ways. Ask of every example: what situation was this ruler in, and how did this tool help him keep control?",
    videos: [],
    segments: [
      {
        title: "The Problem: Three Jobs After the Conquest",
        bullets: [
          "Gunpowder let a few rulers conquer enormous lands fast (Topic 3.1). The conquest left each ruler with **millions of people** who spoke other languages, followed other religions, and never asked to be ruled by him, plus powerful local men with lands and followers of their own.",
          "To hold on, every ruler had **three jobs**: find people who would serve him and not turn on him; convince everyone else that he deserved to rule; and collect enough money to pay for armies, salaries and palaces.",
          "Every ruler did all three jobs, but not in the same way. The question for every example is **why**: what situation was that ruler in?"
        ],
        image: {
          title: "The Mughal Empire, c. 1700 (a modern map)",
          caption: "A modern map of the Mughal Empire near its greatest size. Ruling land this large and this varied is the problem every tool in this topic tries to solve.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Mughal_Empire_(1700).png"
        }
      },
      {
        title: "People Who Serve: Devshirme, Salaried Samurai and Mansabdars",
        bullets: [
          "The day after Constantinople fell in 1453, Mehmed II had his **grand vizier**, Çandarlı Halil, arrested and soon executed. Halil came from a powerful Turkish family, and a servant with family power of his own can say no.",
          "The Ottoman **devshirme** took Christian boys, mostly from the Balkans, from their families, converted them to Islam and trained them. The strongest became **Janissaries**; the ablest could rise to govern provinces or become grand vizier. Japan's rulers did the same job differently: from the late 1500s most **samurai** were moved off their lands into castle towns and paid a yearly stipend in rice.",
          "The Mughal **mansabdar** system was a third answer: a numbered rank, often paid with a **jagir** (the right to collect the land tax from one area) that was moved every few years and could not be inherited. All three made the people with weapons and offices depend on the ruler."
        ],
        image: {
          title: "Topkapı Palace from the water (modern photograph)",
          caption: "The Ottoman sultans' palace in Istanbul after 1453, photographed in 2007. Its palace school trained the most promising devshirme recruits for high office.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Bosphorus.JPG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Topkapi_Palace_Bosphorus.JPG"
        }
      },
      {
        title: "Symbols That Justify: Religion, Art and Monumental Architecture",
        bullets: [
          "**Religious ideas.** Louis XIV of France claimed **divine right**: God chose the king, so disobeying the king meant disobeying God. Askia Muhammad, who took the Songhai throne by force in 1493, could not claim it by birth, so he made the pilgrimage to Mecca, returned with the title of caliph, and supported Islamic scholars and judges.",
          "**Art.** The Qing emperors were Manchus ruling a mostly Han Chinese empire. Their **imperial portraits** showed them in the robes of a traditional Chinese emperor, and the Qianlong Emperor was also painted as a Buddhist holy figure for his Tibetan and Mongol subjects.",
          "**Monumental architecture.** Mughal **mausolea and mosques**, such as the Taj Mahal, showed a dynasty that was rich, faithful to Islam and permanent. Louis XIV's palace at **Versailles**, his court's home from 1682, did that and a second job: it kept the great nobles at court, where the king could watch them."
        ],
        image: {
          title: "The Qianlong Emperor, by Giuseppe Castiglione",
          caption: "Part of a Qing court painting of the Qianlong Emperor and his consorts. A Manchu ruler shown in the robes of a Chinese emperor.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Qianlong_Emperor.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Qianlong_Emperor.jpg"
        }
      },
      {
        title: "Systems That Pay: Tribute, Tax Farming and New Taxes",
        bullets: [
          "Armies, salaries and palaces, and the guns of Topic 3.1, cost enormous sums. Rulers needed **revenue** and raised it through **tribute**, **tax farming**, and new ways of collecting taxes.",
          "The Ottomans used **tax farming**: the state sold the right to collect a tax to a bidder, who paid first and kept the extra. It grew in the late 1500s, when the sultans needed cash fast for salaried soldiers. The Mughals relied on **zamindars**, local landholders who knew the fields, to collect the land tax and keep a share.",
          "The Mexica kept painted **tribute lists** of what each conquered province owed the capital, such as cotton cloaks, cacao and feathers. Ming China combined many taxes and labor duties into payments in **silver**. The three jobs held each other up: money paid the people who served, the people who served collected the money, and symbols made serving and paying feel right."
        ],
        image: {
          title: "The Taj Mahal, Agra (modern photograph)",
          caption: "Photographed in 2004. Shah Jahan's mausoleum for his wife took enormous revenue to build: the money job and the symbols job in one building.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal_in_March_2004.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Taj_Mahal_in_March_2004.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Mughal Empire and Its Administrative Provinces",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mughal_Empire_%281700%29.png",
    caption: "The Mughal Empire at its greatest extent c. 1700, showing the provincial structure administered through the mansabdar system.",
    intro: "Use the map to understand how the Mughal Empire organized vast territories through administrative provinces, each governed by mansabdars who owed military service and revenue to the emperor.",
    prompt: "How did the geographic scale of the Mughal Empire make centralized administration difficult, and how did the mansabdar system address that challenge?",
    notes: [
      "The Mughal Empire at its height covered most of the Indian subcontinent, a territory too large to govern from a single center without delegated authority.",
      "Each province (subah) was administered by a governor (subadar) who was typically a mansabdar of high rank, appointed by the emperor and subject to reassignment.",
      "The jagir system meant that provincial revenue rights belonged to the emperor, who distributed them as rewards, preventing provincial governors from accumulating independent power."
    ]
  },

  deepReading: {
    title: 'Who Collects, and Who Serves',
    desc: 'A textbook-depth companion to the three jobs: the servants built to have no alternative, the symbols and buildings that made rule look rightful, the tax systems that delivered the money, and the bargains with local power that made empire affordable and then fragile. Optional.',
    url: 'deep-reading-topic-3-2-empires-administration.html'
  },

  first10: {
    title: 'First & 10: Holding What You Won',
    embedUrl: 'first-and-10-topic-3-2-empires-administration-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: "Evidence Lab: Administrative Systems Across Empires",
    intro: "Use the evidence below to connect specific administrative systems to broader arguments about how land-based empires maintained control, extracted revenue, and managed diverse populations.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about one Topic 3.2 method: creating loyal personnel, legitimizing authority, or generating revenue for state power.",
    items: [
      {
        title: "The Devshirme System",
        detail: "Ottoman recruitment of Christian boys from the Balkans for training as imperial administrators and janissary soldiers. Because devshirme recruits had no independent family connections within the empire, they depended entirely on the sultan, making them more reliably loyal than hereditary nobles."
      },
      {
        title: "The Mansabdar System",
        detail: "Mughal ranked administration linking military duty to non-hereditary revenue rights (jagir). Every official received a rank (mansab) determining his obligations and rewards. Because jagirs reverted to the emperor on death or reassignment, mansabdars could not accumulate independent power across generations."
      },
      {
        title: "The Millet System",
        detail: "Ottoman semi-autonomous religious community governance. Greek Orthodox, Armenian Christian, and Jewish communities maintained their own courts, schools, and religious institutions under community leaders who collected taxes and maintained order in exchange for imperial protection. The Ottomans gained stability without direct administration of millions of non-Muslim subjects."
      }
    ]
  },

  primarySource: {
    title: "Primary Source: Two Visitors Describe How Rulers Held Power (1520s and 1550s)",
    intro: "Two outsiders described rulers in this unit. Leo Africanus, a traveler born in Granada and raised in Morocco, visited Timbuktu in the Songhai Empire early in the 1500s; his description of Africa was finished in 1526. Ogier Ghiselin de Busbecq was the Habsburg ambassador to Süleyman the Magnificent and described the Ottoman court in letters from the 1550s. The College Board suggests this pair for comparing how rulers legitimized and consolidated power.",
    attribution: "Leo Africanus, The History and Description of Africa, translated by John Pory (1600), edited by Robert Brown (Hakluyt Society, 1896), vol. 3, pp. 824 to 825; Ogier Ghiselin de Busbecq, The Life and Letters of Ogier Ghiselin de Busbecq, translated by C. T. Forster and F. H. B. Daniell (London, 1881), vol. 1, p. 154",
    text: "<strong>Leo Africanus, on the king of Timbuktu (Songhai):</strong> The rich king of Tombuto hath many plates and scepters of gold, some whereof weigh 1300 pounds: and he keeps a magnificent and well furnished court. [...] Whosoever will speak unto this king must first fall down before his feet, and then taking up earth must sprinkle it upon his own head and shoulders [...]. Here are great store of doctors, judges, priests, and other learned men, that are bountifully maintained at the king's cost and charges.<br><br><strong>Busbecq, on the Ottoman sultan:</strong> In making his appointments the Sultan pays no regard to any pretensions on the score of wealth or rank, nor does he take into consideration recommendations or popularity; he considers each case on its own merits, and examines carefully into the character, ability, and disposition of the man whose promotion is in question. It is by merit that men rise in the service, a system which ensures that posts should only be assigned to the competent. [...] Those who receive the highest offices from the Sultan are for the most part the sons of shepherds or herdsmen, and so far from being ashamed of their parentage, they actually glory in it.",
    sourceNote: "Both passages are quoted from the printed English translations; [...] marks where words were left out, and the spelling of the 1600 translation is modernized (\"hath\" means \"has\"). Leo's king of Tombuto was the Songhai ruler of his day, Askia Muhammad, whose capital was Gao. The 1300 pounds of gold is Leo's claim, not a measured fact. Busbecq praised the Ottoman system partly to criticize Europe, where, he wrote, birth decided everything; the \"sons of shepherds\" were probably men raised through the devshirme, though he does not use that word.",
    sourceLinks: [
      { label: "Leo Africanus, Pory translation, 1896 edition (archive.org)", url: "https://archive.org/details/historyanddescr02porygoog" },
      { label: "Busbecq, Forster and Daniell translation, 1881 (archive.org)", url: "https://archive.org/details/lifelettbusbecq01forsuoft" }
    ],
    questions: [
      "Which job does each passage show a ruler doing: finding people who serve him, or making his power look rightful? Use one detail from each passage.",
      "Leo describes scholars and judges paid by the king, and Busbecq describes officials who rise by merit. Explain one way these two methods were alike and one way they were different.",
      "Both writers were outsiders. How might Busbecq's purpose, praising the Ottomans to criticize his own Europe, affect how much you trust his description?"
    ]
  }

};
