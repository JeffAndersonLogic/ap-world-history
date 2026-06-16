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
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how land-based empires used bureaucracies, taxation systems, and military recruitment to consolidate power over diverse populations.",
      kc: 'KC-4.3.I.C; KC-4.3.I.D',
      theme: "Governance"
    },
    {
      target: "I can describe at least two specific administrative systems (e.g., devshirme, mansabdar, civil service examination) and explain how they served imperial control.",
      kc: 'KC-4.3.I.C',
      theme: "Governance"
    },
    {
      target: "I can explain how rulers accommodated local elites and existing power structures to maintain stability in their empires.",
      kc: 'KC-4.3.I.C',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe how tribute systems, tax collection, and military conscription connected the imperial center to the periphery.",
      kc: 'KC-4.3.I.C; KC-4.3.I.D',
      theme: "Governance"
    },
    {
      criteria: "I can identify specific administrative innovations in at least two empires and explain how they maintained loyalty and extracted resources.",
      kc: 'KC-4.3.I.C',
      theme: "Governance"
    },
    {
      criteria: "I can explain the trade-off between centralization and accommodation — why rulers sometimes gave local elites autonomy rather than imposing direct control.",
      kc: 'KC-4.3.I.C',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-3.2.I.A",
      theme: "Governance",
      text: "Empires used bureaucracies and administrative systems to maintain power, extract revenue, and maintain order over large territories.",
      illustrativeExamples: ["Ottoman timar system", "Qing civil service examination", "Tax farming", "Tribute networks"]
    },
    {
      code: "KC-3.2.I.B",
      theme: "Governance",
      text: "Rulers recruited administrators from enslaved, conquered, or foreign populations to limit the power of existing noble classes.",
      illustrativeExamples: ["Devshirme system", "Mansabdar system", "Ottoman janissaries", "Mughal jagir assignments"]
    },
    {
      code: "KC-3.2.I.C",
      theme: "Governance",
      text: "Empires accommodated local elites and customs to maintain stability, creating hybrid administrative systems that mixed coercion and co-optation.",
      illustrativeExamples: ["Akbar and Rajput nobles", "Ottoman millet system", "Qing Banner system", "Russian boyar accommodation"]
    }
  ],

  lecture: {
    title: "Governing Land-Based Empires: Systems of Control and Accommodation",
    intro: "Use these cards to understand the central problem of imperial governance — how to rule vast, diverse territories without enough trusted officials — and the distinctive solutions each empire developed.",
    videos: [],
    segments: [
      {
        title: "The Problem of Running an Empire",
        bullets: [
          "Every land-based empire c. 1450–1750 faced the same fundamental challenge: how do you govern millions of diverse subjects — speaking different languages, following different religions, owing loyalty to local lords — when you lack modern communications, a professional bureaucracy, or reliable enforcement?",
          "**Revenue extraction** was the core function of imperial administration. Without taxes, tribute, and military service, empires could not pay armies, build infrastructure, or fund imperial courts. The question was not whether to extract resources but how to do so without triggering revolt.",
          "**Loyalty** was the second problem. Every emperor needed administrators and soldiers who were loyal to him personally — not to local lords, tribal leaders, or rival nobles who might challenge imperial authority. Administrative innovation was largely about solving the loyalty problem."
        ],
        image: {
          title: "Topkapi Palace, Istanbul — seat of Ottoman power",
          caption: "The Ottoman imperial court at Topkapi was the administrative heart of an empire spanning three continents. The palace trained and housed the devshirme recruits who staffed the imperial bureaucracy.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace_Istanbul.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Topkapi_Palace_Istanbul.jpg"
        }
      },
      {
        title: "Administrative Innovation: Devshirme, Mansabdar, and the Examination System",
        bullets: [
          "The **Ottoman devshirme** system recruited Christian boys from the Balkans, converted them to Islam, educated them in Ottoman language and culture, and assigned them as administrators or janissary soldiers. Because they had no family connections inside the empire, these recruits depended entirely on the sultan — creating a class of administrators loyal to imperial authority rather than to local noble networks.",
          "The **Mughal mansabdar system** assigned every official a numbered rank (mansab) that determined his military obligations and revenue rights. Mansabdars received a **jagir** — the right to collect revenue from a designated territory — in exchange for maintaining a quota of cavalry soldiers. Crucially, jagirs were not hereditary: when a mansabdar died or was reassigned, the jagir reverted to the emperor, preventing the accumulation of independent noble power.",
          "The **Qing civil service examination** system required officials to master Confucian texts and demonstrate literary skill through written exams. This created a bureaucracy whose members shared a common education, shared values (loyalty to the emperor and hierarchical order), and owed their positions to imperial appointment rather than to birth or military service. The Banner system maintained a separate Manchu military force that preserved Qing ethnic identity alongside the Chinese examination bureaucracy."
        ],
        image: {
          title: "Mughal Empire at its greatest extent, c. 1700",
          caption: "The Mughal Empire administered hundreds of provinces through the mansabdar system, linking military obligation to revenue rights across a subcontinent.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Mughal_Empire_1700_map.png"
        }
      },
      {
        title: "Accommodation: Working With Local Elites",
        bullets: [
          "**Direct control was often impossible.** Empires lacked the administrative capacity to replace every local lord, religious leader, or tribal chief with a loyal imperial official. The practical solution was accommodation — incorporating local elites into the imperial system rather than eliminating them.",
          "**Akbar's incorporation of Rajput nobles** is the clearest example. The Mughals were Muslim rulers governing a majority-Hindu population. Rather than imposing Islamic governance on Hindu nobles, Akbar recruited Rajput kings and princes into the mansabdar system, gave them high ranks, and married into their families. Rajputs became some of the most loyal and effective Mughal commanders — not because they were coerced but because the system gave them status, revenue, and a stake in imperial success.",
          "The **Ottoman millet system** granted semi-autonomous governance to recognized religious communities (Greek Orthodox, Armenian Christian, Jewish). Each millet maintained its own courts, schools, and religious institutions. In exchange, millet leaders collected taxes and maintained order within their communities. The Ottomans gained stability without having to directly administer millions of non-Muslim subjects; the communities gained protection and self-governance."
        ],
        image: {
          title: "Akbar's multicultural Mughal court",
          caption: "Akbar deliberately incorporated Hindu Rajput nobles, Muslim commanders, and Persian scholars into a single imperial service. Accommodation was a calculated strategy, not generosity.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Akbar_receiving_nobles.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Akbar_receiving_nobles.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Mughal Empire and Its Administrative Provinces",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_1700_map.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mughal_Empire_1700_map.png",
    caption: "The Mughal Empire at its greatest extent c. 1700, showing the provincial structure administered through the mansabdar system.",
    intro: "Use the map to understand how the Mughal Empire organized vast territories through administrative provinces — each governed by mansabdars who owed military service and revenue to the emperor.",
    prompt: "How did the geographic scale of the Mughal Empire make centralized administration difficult, and how did the mansabdar system address that challenge?",
    notes: [
      "The Mughal Empire at its height covered most of the Indian subcontinent — a territory too large to govern from a single center without delegated authority.",
      "Each province (subah) was administered by a governor (subadar) who was typically a mansabdar of high rank, appointed by the emperor and subject to reassignment.",
      "The jagir system meant that provincial revenue rights belonged to the emperor, who distributed them as rewards — preventing provincial governors from accumulating independent power."
    ]
  },

  first10: {
    title: 'First & 10: Running an Empire',
    embedUrl: 'first-and-10-topic-3-2-empires-administration-capture.html'
  },

  evidenceLab: {
    title: "Evidence Lab: Administrative Systems Across Empires",
    intro: "Use the evidence below to connect specific administrative systems to broader arguments about how land-based empires maintained control, extracted revenue, and managed diverse populations.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about how empires solved the problem of governing large, diverse territories.",
    items: [
      {
        title: "The Devshirme System",
        detail: "Ottoman recruitment of Christian boys from the Balkans for training as imperial administrators and janissary soldiers. Because devshirme recruits had no independent family connections within the empire, they depended entirely on the sultan — making them more reliably loyal than hereditary nobles."
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
    title: "Primary Source: Akbar and the Mansabdar System (adapted from the Ain-i-Akbari, c. 1590)",
    intro: "The Ain-i-Akbari ('Institutes of Akbar') was a detailed administrative record compiled by Akbar's court historian Abu'l-Fazl ibn Mubarak. This adapted passage describes how Akbar organized his imperial administration through the mansabdar system of ranked officials.",
    text: "His Majesty has established ranks for the commanders of his armies and the governors of his provinces, numbering from ten to ten thousand. Each commander holds a rank (mansab) that determines the number of horsemen he must maintain and present for inspection. In return, he receives from the imperial treasury the right to collect revenue from an assigned territory (jagir) sufficient to support his establishment. No rank is inherited by a son, nor does any territory belong permanently to a commander — all assignments return to the emperor upon death or reassignment. In this way His Majesty ensures that the wealth of the empire flows to those who serve him faithfully, and that no commander may accumulate power sufficient to challenge imperial authority.",
    questions: [
      "According to this source, how did the mansabdar system prevent the rise of independent noble power that might threaten the emperor?",
      "What does the non-hereditary nature of jagir assignments reveal about Akbar's strategy for maintaining imperial control?",
      "What might this source leave out about the actual experience of mansabdars — particularly those of Hindu Rajput background — within the Mughal system?"
    ]
  }

};
