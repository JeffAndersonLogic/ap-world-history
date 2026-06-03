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
    topic: "Topic 3.1",
    title: "Empires Expand",
    subtitle: "Gunpowder weapons, military conquest, and the rise of land-based empires c. 1450–c. 1750",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how gunpowder technology enabled land-based empires to expand their territories between c. 1450 and c. 1750.",
      kc: "KC-3.1.I.A",
      theme: "Governance"
    },
    {
      target: "I can identify the major land-based empires and describe the geography and methods of their expansion.",
      kc: "KC-3.1.I.B",
      theme: "Governance"
    },
    {
      target: "I can explain the historical significance of the Ottoman conquest of Constantinople (1453) and its effects on Eurasian trade and politics.",
      kc: "KC-3.1.I.B",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name specific gunpowder weapons (cannons, firearms) and explain how they gave empires military advantages over rivals and fortified opponents.",
      kc: "KC-3.1.I.A",
      theme: "Governance"
    },
    {
      criteria: "I can describe the expansion of at least two empires with specific geographic and chronological evidence (e.g., Ottomans into Anatolia, Balkans, North Africa; Mughals across the Indian subcontinent).",
      kc: "KC-3.1.I.B",
      theme: "Governance"
    },
    {
      criteria: "I can explain why 1453 mattered — for trade routes, for Christian Europe, for Ottoman legitimacy, and for the post-Mongol reorganization of Eurasian power.",
      kc: "KC-3.1.I.B",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-3.1.I.A",
      theme: "Governance",
      text: "Empires gained and consolidated power by using new military technologies including gunpowder weapons such as cannons and matchlock firearms. Land-based empires — the Ottoman, Safavid, Mughal, Qing, and Russian — used these tools to conquer territory and suppress internal opposition.",
      illustrativeExamples: ["Ottoman Empire", "Safavid Empire", "Mughal Empire", "Qing Dynasty", "Cannon", "Janissaries"]
    },
    {
      code: "KC-3.1.I.B",
      theme: "Governance",
      text: "The Ottoman conquest of Constantinople in 1453 ended the Byzantine Empire and dramatically reshaped Eurasian trade and political power. Ottoman expansion continued into the Balkans, North Africa, and Southwest Asia, making the empire one of the most powerful states in the world by c. 1500.",
      illustrativeExamples: ["Conquest of Constantinople 1453", "Fall of Byzantine Empire", "Ottoman expansion into Balkans and North Africa"]
    },
    {
      code: "KC-3.1.I.C",
      theme: "Governance",
      text: "Empires recruited military forces from conquered or enslaved populations, incorporating diverse peoples into their armies. The Ottoman devshirme system conscripted Christian boys from the Balkans and trained them as elite soldiers (Janissaries) and administrators, creating loyalty to the sultan rather than to ethnic or regional identities.",
      illustrativeExamples: ["Devshirme system", "Janissaries", "Enslaved soldiers", "Military recruitment from conquered peoples"]
    }
  ],

  lecture: {
    title: "Empires Expand: Gunpowder, Conquest, and the New Imperial Age",
    intro: "Use these cards to explain how gunpowder transformed military conquest after c. 1450, identify the major land-based empires and their geographic reach, and analyze why the Ottoman conquest of Constantinople in 1453 mattered for Eurasian history.",
    videos: [
      {
        title: "Heimler's History — Topic 3.1",
        url: "https://youtu.be/placeholder-3-1",
        youtubeId: "placeholder-3-1",
        prompt: "Use this clip to review how gunpowder technology enabled imperial expansion and why the Ottoman Empire's growth matters for AP World History."
      }
    ],
    segments: [
      {
        title: "Gunpowder and the New Empires",
        bullets: [
          "**Gunpowder weapons** — especially large-caliber **cannons** and **matchlock firearms** — transformed warfare after c. 1450 by making traditional fortifications vulnerable and giving states with access to gunpowder technology decisive military advantages.",
          "Before gunpowder artillery, fortified walls and castles could withstand sieges for months or years. Ottoman **bombards** (massive siege cannons) could breach stone walls in days, fundamentally shifting the military balance toward offensive power and against defensive fortification.",
          "States that controlled gunpowder technology and the iron foundries to produce cannons were not just militarily stronger — they were structurally different from earlier empires. Maintaining and deploying gunpowder armies required **centralized state resources**, bureaucratic organization, and sustained revenue extraction."
        ],
        image: {
          title: "Ottoman Empire expansion, 1359–1839",
          caption: "Ottoman territorial expansion over nearly five centuries, beginning in Anatolia and expanding across three continents.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Ottoman_empire_1359_to_1839.gif"
        }
      },
      {
        title: "The Major Land-Based Empires",
        bullets: [
          "The **Ottoman Empire** (est. c. 1299) expanded from a small Anatolian principality to control the Balkans, Anatolia, the Arab Middle East, and North Africa by c. 1550. Under Suleiman the Magnificent (r. 1520–1566), the Ottomans controlled one of the largest empires in the world.",
          "The **Safavid Empire** (est. 1501) unified Persia under Shia Islam and served as the Ottoman Empire's eastern rival. The **Mughal Empire** (est. 1526) under Babur and his successors conquered most of the Indian subcontinent. The **Qing Dynasty** (est. 1644) expanded China's borders into Central Asia, Tibet, and Mongolia.",
          "The **Russian Empire** expanded eastward across Siberia and southward toward Central Asia during the same period — a land-based imperial expansion as significant as those of the more commonly studied 'Gunpowder Empires.' All of these states used gunpowder weapons and recruited military forces from conquered or enslaved populations."
        ],
        image: {
          title: "Ottoman Empire territorial expansion",
          caption: "The Ottoman Empire at its height controlled territory across three continents, from Hungary to Yemen and from Morocco to Mesopotamia.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Ottoman_empire_1359_to_1839.gif"
        }
      },
      {
        title: "Why Constantinople Mattered: 1453",
        bullets: [
          "On May 29, 1453, Ottoman forces under Sultan **Mehmed II** breached the walls of Constantinople using massive bombard cannons. The city fell after a seven-week siege, ending the **Byzantine Empire** — the eastern successor of Rome — which had survived for over a thousand years.",
          "For Christian Europe, the fall of Constantinople was a profound shock. It closed a major overland trade route and accelerated European interest in finding **maritime routes** to Asia — directly contributing to the Age of Exploration. For the Ottomans, controlling Constantinople (renamed Istanbul) gave them control over the **Bosphorus strait**, the gateway between the Black Sea and the Mediterranean.",
          "Sultan Mehmed II claimed the title of **Caesar (Kayser-i Rum)** — Emperor of Rome — asserting Ottoman legitimacy as the successors of both the Roman Empire and the Islamic caliphate. The conquest demonstrated what gunpowder artillery could accomplish and announced that a new era of imperial power had arrived in Eurasia."
        ],
        image: {
          title: "Ottoman Empire expansion",
          caption: "The conquest of Constantinople in 1453 was the pivotal moment that transformed the Ottomans from a regional power into a world empire.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Ottoman_empire_1359_to_1839.gif"
        }
      }
    ]
  },

  map: {
    title: "Ottoman Empire Expansion: A Land-Based Empire in Action",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ottoman_empire_1359_to_1839.gif",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ottoman_empire_1359_to_1839.gif",
    caption: "Ottoman territorial expansion from c. 1359 to 1839, showing the empire's growth from Anatolia across three continents.",
    intro: "Use this map to trace how the Ottoman Empire expanded from a small Anatolian principality into one of the largest land-based empires in history, connecting Europe, Asia, and Africa.",
    prompt: "Where did Ottoman expansion begin, and in which directions did it spread? What geographic factors — seas, straits, mountain passes — shaped the routes of Ottoman conquest?",
    notes: [
      "The Ottoman Empire began as a small principality (beylik) in northwestern Anatolia and expanded in multiple directions simultaneously — into the Balkans to the northwest and deeper into Anatolia to the east.",
      "Control of the Bosphorus and Dardanelles straits, achieved with the conquest of Constantinople in 1453, gave the Ottomans dominance over trade between the Black Sea and the Mediterranean.",
      "By the early 16th century, Ottoman expansion into the Arab world (Egypt 1517, Syria 1516) made the sultan the guardian of the holy cities of Mecca and Medina, adding enormous religious legitimacy to military power."
    ]
  },

  first10: {
    title: 'First & 10: The Gunpowder Empires',
    embedUrl: 'first-and-10-topic-3-1-empires-expand-capture.html'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Imperial Expansion Through Evidence",
    intro: "Use the evidence below to connect the rise of land-based empires to broader historical arguments about gunpowder technology, military recruitment, and the reorganization of Eurasian power after c. 1450.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about how land-based empires expanded, what made their military power distinctive, or why the conquest of Constantinople mattered.",
    items: [
      {
        title: "The Janissary Corps",
        detail: "The Janissaries were an elite Ottoman infantry force recruited through the devshirme system — the conscription of Christian boys from the Balkans who were converted to Islam and trained as soldiers and administrators. They were armed with matchlock firearms and organized into disciplined infantry units unlike anything most of the Ottoman Empire's opponents could field. By the mid-15th century, the Janissary corps numbered in the tens of thousands and formed the backbone of Ottoman offensive power. Their loyalty was to the sultan personally, not to any ethnic or regional group — making them both militarily effective and politically useful as a counterweight to Turkish aristocratic power."
      },
      {
        title: "Ottoman Bombards at Constantinople, 1453",
        detail: "Sultan Mehmed II commissioned a Hungarian engineer named Urban to build massive bronze cannons — bombards — capable of breaching Constantinople's famous triple walls. The largest of these guns, sometimes called the 'Basilica,' was reportedly over 27 feet long and could hurl stone balls weighing over 1,000 pounds. It took 60 oxen and 200 men to move. When Mehmed arrayed these cannons against the Theodosian Walls on April 6, 1453, the result was military revolution in action: walls that had resisted sieges for centuries began to crumble within days. The artillery barrage ran continuously, and by May 29 the walls were breached. Constantinople fell in hours. The message to every ruler in Eurasia was clear: traditional fortifications were no longer reliable defenses against a well-equipped gunpowder army."
      },
      {
        title: "The Devshirme System",
        detail: "The devshirme ('collection') was an Ottoman practice of periodically recruiting boys — typically aged 8–18 — from Christian families in the Balkans. These boys were taken to Istanbul, converted to Islam, and given intensive training in Ottoman language, culture, and military skills. The most capable became Janissaries or entered the palace service as administrators, sometimes rising to positions of enormous power. Several Ottoman grand viziers — the empire's chief ministers — were devshirme recruits. The system was designed to create a loyal elite without local ties, noble birth claims, or competing family loyalties. It was both an instrument of imperial administration and a mechanism of social control over conquered populations, and it became a model studied by rulers across Eurasia."
      }
    ]
  },

  primarySource: {
    title: "Primary Source: An Ottoman Account of the Fall of Constantinople",
    intro: "The following is an adapted passage from the account of the Ottoman historian Tursun Beg, who wrote about Mehmed II's conquest of Constantinople. This account, written shortly after the conquest, reflects both pride in Ottoman military achievement and the ideological significance the Ottomans attached to the victory.",
    text: "When the Sultan Mehmed, son of Murad, had brought together from every corner of his lands the cannons and bombardiers, the soldiers and engineers, and the provisions and equipment needed for so great a siege, he moved his forces to the walls of Constantinople. The great bombard shook the walls day and night, and where the great towers had stood for a thousand years, there were now heaps of stone. On the twenty-ninth day of May, in the year 857 of the Hijra, the soldiers of Islam crossed through the breaches in the walls and took possession of the great city. The Sultan entered the Church of the Hagia Sofia and gave thanks to God for this victory over the infidels. He then proclaimed himself Caesar of Rome and Sovereign of the Two Seas and the Two Continents. All the world knew that a new age had begun.",
    questions: [
      "What specific military technologies does this account highlight, and how does it portray their role in the conquest?",
      "How does Tursun Beg frame the conquest in religious and political terms? What claims does Mehmed II make through his titles after the victory?",
      "What might this source leave out about the experience of the conquest — from the perspective of Constantinople's defenders, its civilian population, or the Byzantine emperor?"
    ]
  }

};
