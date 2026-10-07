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
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how gunpowder technology enabled land-based empires to expand their territories between c. 1450 and c. 1750.",
      kc: 'KC-4.3.II',
      theme: "Governance"
    },
    {
      target: "I can identify the major land-based empires and describe the geography and methods of their expansion.",
      kc: 'KC-4.3.II.B',
      theme: "Governance"
    },
    {
      target: "I can explain how political and religious disputes led to rivalries and conflict between land-based empires, such as the Safavid–Mughal conflict and the Songhai Empire's conflict with Morocco.",
      kc: 'KC-4.3.III.i',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name specific gunpowder weapons (cannons, firearms) and explain how they gave empires military advantages over rivals and fortified opponents.",
      kc: 'KC-4.3.II',
      theme: "Governance"
    },
    {
      criteria: "I can describe the expansion of at least two empires with specific geographic and chronological evidence (e.g., Ottomans into Anatolia, Balkans, North Africa; Mughals across the Indian subcontinent).",
      kc: 'KC-4.3.II.B',
      theme: "Governance"
    },
    {
      criteria: "I can identify a specific imperial rivalry (e.g., the Safavid–Mughal conflict or the Songhai Empire's conflict with Morocco) and explain how political and religious disputes fueled conflict between states.",
      kc: 'KC-4.3.III.i',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 3: Learning Objective A',
      theme: 'Learning Objective',
      text: 'Explain how and why various land-based empires developed and expanded from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II',
      theme: 'Governance',
      text: 'Imperial expansion relied on the increased use of gunpowder, cannons, and armed trade to establish large empires in both hemispheres.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II.B',
      theme: 'Governance',
      text: 'Land empires included the Manchu in Central and East Asia; the Mughal in South and Central Asia; the Ottoman in Southern Europe, the Middle East, and North Africa; and the Safavids in the Middle East.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.i',
      theme: 'Governance',
      text: 'Political and religious disputes led to rivalries and conflict between states.',
      illustrativeExamples: ['Safavid–Mughal conflict', 'Songhai Empire’s conflict with Morocco']
    }
  ],

  lecture: {
    title: "Empires Expand: Gunpowder, Conquest, and the New Imperial Age",
    intro: "Use these cards to explain how gunpowder transformed military conquest after c. 1450, identify the major land-based empires and their geographic reach, and explain how political and religious disputes produced interstate rivalries.",
    videos: [
      {
        title: "Empires Expand [AP World History Review] Unit 3, Topic 1",
        url: "https://youtu.be/kG_A3ET3foc",
        youtubeId: "kG_A3ET3foc",
        prompt: "Use this clip to review how gunpowder technology enabled imperial expansion and why the Ottoman Empire's growth matters for AP World History."
      }
    ],
    segments: [
      {
        title: "Gunpowder and the New Empires",
        bullets: [
          "**Gunpowder weapons**, especially large-caliber **cannons** and **matchlock firearms**, transformed warfare after c. 1450 by making traditional fortifications vulnerable and giving states with access to gunpowder technology decisive military advantages.",
          "Before gunpowder artillery, fortified walls and castles could withstand sieges for months or years. Ottoman **bombards** (massive siege cannons) could breach stone walls in days, fundamentally shifting the military balance toward offensive power and against defensive fortification.",
          "States that controlled gunpowder technology and the iron foundries to produce cannons were not just militarily stronger, they were structurally different from earlier empires. Maintaining and deploying gunpowder armies required **centralized state resources**, bureaucratic organization, and sustained revenue extraction."
        ],
        image: {
          title: "Ottoman Empire expansion, 1359–1839",
          caption: "Ottoman territorial expansion over nearly five centuries, beginning in Anatolia and expanding across three continents.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif"
        }
      },
      {
        title: "The Major Land-Based Empires",
        bullets: [
          "The **Ottoman Empire** (est. c. 1299) expanded from a small Anatolian principality to control the Balkans, Anatolia, the Arab Middle East, and North Africa by c. 1550. Under Suleiman the Magnificent (r. 1520–1566), the Ottomans controlled one of the largest empires in the world.",
          "The **Safavid Empire** (est. 1501) unified Persia under Shia Islam and served as the Ottoman Empire's eastern rival. The **Mughal Empire** (est. 1526) under Babur and his successors conquered most of the Indian subcontinent. The **Qing Dynasty** (est. 1644) expanded China's borders into Central Asia, Tibet, and Mongolia.",
          "The **Russian Empire** expanded eastward across Siberia and southward toward Central Asia during the same period, a land-based imperial expansion as significant as those of the more commonly studied 'Gunpowder Empires.' All of these states used gunpowder weapons, and some, such as the Ottomans and the Safavids, built part of their armies from conquered or captive peoples."
        ],
        image: {
          title: "Topkapi Palace, Istanbul",
          caption: "The Ottoman palace complex was a seat of government as much as a residence: expansion had to be administered from somewhere.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg"
        }
      },
      {
        title: "Why Constantinople Mattered: 1453",
        bullets: [
          "On May 29, 1453, Ottoman forces under Sultan **Mehmed II** breached the walls of Constantinople using massive bombard cannons. The city fell after a seven-week siege, ending the **Byzantine Empire**, the eastern successor of Rome, which had survived for over a thousand years.",
          "For the Ottomans, taking Constantinople gave Mehmed II control of the **Bosphorus strait**, a strategic gateway between the Black Sea and the Mediterranean, and provided a powerful new imperial capital. European maritime expansion had multiple causes; the 1453 conquest is best treated as part of a wider shift in Eurasian political and commercial conditions, not as a single direct cause of oceanic exploration.",
          "Sultan Mehmed II claimed the title of **Caesar (Kayser-i Rum)**, Emperor of Rome, asserting Ottoman legitimacy as the successors of both the Roman Empire and the Islamic caliphate. The conquest demonstrated what gunpowder artillery could accomplish and announced that a new era of imperial power had arrived in Eurasia."
        ],
        image: {
          title: "The Dardanelles Gun, Ottoman Empire, 1464",
          caption: "A surviving Ottoman bronze bombard, cast in 1464 and now at Fort Nelson in England. It is the kind of gun that broke the walls of Constantinople in 1453, though it is not the gun from that siege.",
          url: "../assets/images/topics/3-1/dardanelles-gun.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Turkish_Bombard_at_Fort_Nelson.JPG"
        }
      }
    ]
  },

  map: {
    title: "Ottoman Empire Expansion: A Land-Based Empire in Action",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif",
    caption: "Ottoman territorial expansion from c. 1359 to 1839, showing the empire's growth from Anatolia across three continents.",
    intro: "Use this map to trace how the Ottoman Empire expanded from a small Anatolian principality into one of the largest land-based empires in history, connecting Europe, Asia, and Africa.",
    prompt: "Where did Ottoman expansion begin, and in which directions did it spread? What geographic factors, seas, straits, mountain passes, shaped the routes of Ottoman conquest?",
    notes: [
      "The Ottoman Empire began as a small principality (beylik) in northwestern Anatolia and expanded in multiple directions simultaneously, into the Balkans to the northwest and deeper into Anatolia to the east.",
      "Control of the Bosphorus and Dardanelles straits, achieved with the conquest of Constantinople in 1453, gave the Ottomans dominance over trade between the Black Sea and the Mediterranean.",
      "By the early 16th century, Ottoman expansion into the Arab world (Egypt 1517, Syria 1516) made the sultan the guardian of the holy cities of Mecca and Medina, adding enormous religious legitimacy to military power."
    ]
  },

  deepReading: {
    title: 'The Wall That Stopped Working',
    desc: 'A textbook-depth companion on what artillery actually changed, why it favored states that could tax, and how the Ottomans, Safavids, Mughals, Qing and Russians used it, finishing with Tondibi, Kandahar and Vienna, where the limits of gunpowder are clearest. Optional, and useful when a checkpoint asks how a tool of rule actually worked.',
    url: 'deep-reading-topic-3-1-empires-expand.html'
  },

  first10: {
    title: 'First & 10: Guns Broke the Walls',
    embedUrl: 'first-and-10-topic-3-1-empires-expand-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Imperial Expansion Through Evidence",
    intro: "Use the evidence below to connect the rise of land-based empires to broader historical arguments about gunpowder technology, military recruitment, and the reorganization of Eurasian power after c. 1450.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about how land-based empires expanded, what made their military power distinctive, or how expansion and competing claims produced interstate rivalry.",
    items: [
      {
        title: "The Janissary Corps",
        detail: "The Janissaries were an elite Ottoman infantry force recruited through the devshirme system, the conscription of Christian boys from the Balkans who were converted to Islam and trained as soldiers and administrators. They were armed with matchlock firearms and organized into disciplined infantry units unlike anything most of the Ottoman Empire's opponents could field. By the mid-15th century, the Janissary corps numbered in the tens of thousands and formed the backbone of Ottoman offensive power. Their loyalty was to the sultan personally, not to any ethnic or regional group, making them both militarily effective and politically useful as a counterweight to Turkish aristocratic power."
      },
      {
        title: "Ottoman Bombards at Constantinople, 1453",
        detail: "Sultan Mehmed II commissioned a Hungarian engineer named Urban to build massive bronze cannons, bombards, capable of breaching Constantinople's famous triple walls. The largest of these guns, sometimes called the 'Basilica,' was reportedly over 27 feet long and could hurl stone balls weighing over 1,000 pounds. It took 60 oxen and 200 men to move. When Mehmed arrayed these cannons against the Theodosian Walls on April 6, 1453, the result was military revolution in action: walls that had resisted sieges for centuries began to crumble within days. The artillery barrage ran continuously, and by May 29 the walls were breached. Constantinople fell in hours. The message to every ruler in Eurasia was clear: traditional fortifications were no longer reliable defenses against a well-equipped gunpowder army."
      },
      {
        title: "The Devshirme System",
        detail: "The devshirme ('collection') was an Ottoman practice of periodically recruiting boys, typically aged 8–18, from Christian families in the Balkans. These boys were taken to Istanbul, converted to Islam, and given intensive training in Ottoman language, culture, and military skills. The most capable became Janissaries or entered the palace service as administrators, sometimes rising to positions of enormous power. Several Ottoman grand viziers, the empire's chief ministers, were devshirme recruits. The system was designed to create a loyal elite without local ties, noble birth claims, or competing family loyalties. It was both an instrument of imperial administration and a mechanism of social control over conquered populations, and it became a model studied by rulers across Eurasia."
      }
    ]
  },

  primarySource: {
    title: "Primary Source: Nicolò Barbaro Watches the Siege of Constantinople (1453)",
    intro: "Nicolò Barbaro was a Venetian surgeon inside Constantinople during the Ottoman siege. He kept a day-by-day diary of the fighting. Read this classroom rendering for what an eyewitness defender noticed about artillery, repairs, and the final assault, then consider what his position inside the city allowed him to see and what it may have shaped.",
    attribution: "Nicolò Barbaro, Diary of the Siege of Constantinople, 1453; classroom rendering based on the eyewitness diary and the English translation by John Melville-Jones (New York, 1969).",
    text: "On the landward side, the Ottoman army brought its great guns close to the walls and fired against them day after day. Where the masonry was broken, the defenders worked to rebuild the gaps with earth, timber, barrels, and other materials. Ottoman forces also filled parts of the ditch and kept troops ready for assaults. During the final attack, soldiers came against the damaged defenses in repeated waves while the defenders fought from the walls and the improvised barriers behind them. The pressure continued until Ottoman troops entered the city and the defense collapsed.",
    sourceNote: "This is a classroom rendering of a continuous portion of Barbaro's eyewitness diary, not a verbatim quotation from the 1969 English translation. The wording is paraphrased and modernized while preserving the reported sequence: repeated artillery fire, repair of breaches, preparation of the ditch, and the final infantry assault. Barbaro was a Venetian defender inside the city, so his account is especially useful for the defenders' experience but is not neutral about the Ottoman attackers or the other forces involved in the siege.",
    sourceLinks: [
      { label: "De Re Militari: Barbaro, Diary of the Siege of Constantinople", url: "https://www.deremilitari.org/RESOURCES/SOURCES/constantinople3.htm" },
      { label: "Fordham Medieval Sourcebook: Fall of Constantinople source index", url: "https://sourcebooks.web.fordham.edu/sbook1c.asp" }
    ],
    questions: [
      "What details in Barbaro's account show how Ottoman artillery changed the problem faced by Constantinople's defenders?",
      "What details show that cannon fire alone did not capture the city? Explain what else had to happen before Ottoman forces could enter.",
      "How might Barbaro's position as a Venetian defender inside Constantinople shape what he noticed, emphasized, or blamed?"
    ]
  }

};
