(() => {
  // brand lock IIFE, copy this block exactly:
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
    course: 'AP WORLD HISTORY',
    unit: 'Unit 2: Networks of Exchange',
    topic: 'Topic 2.5',
    title: 'Cultural Consequences of Connectivity: Religion, Technology, and Ideas on the Move',
    subtitle: 'How trade networks spread religion, technology, crops, and artistic traditions c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how major religions, Buddhism, Islam, Christianity, and Hinduism, spread along trade routes from c. 1200 to c. 1450.',
      kc: 'KC-3.1.III.D',
      theme: 'Culture and Society'
    },
    {
      target: 'I can describe how key technologies, paper, printing, gunpowder, the compass, and the stirrup, diffused across Afro-Eurasia through trade networks.',
      kc: 'KC-3.1.III.D',
      theme: 'Science and Technology'
    },
    {
      target: 'I can explain how crops, architectural styles, artistic motifs, and literary traditions diffused across Afro-Eurasia as a consequence of trade connectivity.',
      kc: 'KC-3.1.III.D',
      theme: 'Culture and Society'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can identify at least two specific religions and explain how each spread along a named trade route, Silk Roads, Indian Ocean, or trans-Saharan.',
      kc: 'KC-3.1.III.D',
      theme: 'Culture and Society'
    },
    {
      criteria: 'I can name at least two technologies that diffused through trade networks and explain where they originated and where they spread.',
      kc: 'KC-3.1.III.D',
      theme: 'Science and Technology'
    },
    {
      criteria: 'I can use specific evidence, a crop, an architectural style, or a cultural tradition, to explain how trade produced cultural exchange and transformation.',
      kc: 'KC-3.1.III.D',
      theme: 'Culture and Society'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1.III.D',
      theme: 'Cultural Developments and Interactions',
      text: 'Increased cross-cultural interactions resulted in the diffusion of literary, artistic, and cultural traditions, as well as scientific and technological innovations.',
      illustrativeExamples: ['Influence of Buddhism in East Asia', 'Spread of Hinduism and Buddhism into Southeast Asia', 'Spread of Islam in sub-Saharan Africa and Asia', 'Gunpowder from China', 'Paper from China']
    },
    {
      code: 'KC-3.3.II',
      theme: 'Cultural Developments and Interactions',
      text: 'The fate of cities varied greatly, with periods of significant decline and periods of increased urbanization, buoyed by rising productivity and expanding trade networks.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.III.C',
      theme: 'Cultural Developments and Interactions',
      text: 'As exchange networks intensified, an increasing number of travelers within Afro-Eurasia wrote about their travels.',
      illustrativeExamples: ['Ibn Battuta', 'Margery Kempe', 'Marco Polo']
    }
  ],

  lecture: {
    title: 'Lecture: Religion, Technology, and Culture on the Move',
    intro: 'Trade routes did not only move goods, they moved ideas, beliefs, technologies, and agricultural practices. Use these segments to understand what diffused, where it went, and why it mattered for AP World History.',
    videos: [
      {
        title: 'CULTURAL Effects of Connectivity [AP World Review—Unit 2 Topic 5]',
        url: 'https://youtu.be/buccc2fFw4U',
        youtubeId: 'buccc2fFw4U',
        prompt: 'Track how long-distance exchange spread belief systems, technologies, languages, and cultural practices.'
      }
    ],
    segments: [
      {
        title: 'Religion on the Move',
        bullets: [
          '**Islam** spread most rapidly through the Indian Ocean and trans-Saharan networks, Muslim merchants established diaspora communities in coastal trading cities from East Africa to Southeast Asia, and local rulers converted to gain access to wider commercial networks.',
          '**Buddhism** traveled the overland Silk Roads into Central Asia, China, Korea, and Southeast Asia; rulers adopted it as a legitimating force, and monasteries became centers of literacy, scholarship, and trade-route hospitality.',
          '**Christianity** expanded through European trade networks and missionary activity into Central Asia, while **Hinduism** spread through Indian Ocean merchant communities into South and Southeast Asia, shaping the religious architecture and court culture of kingdoms such as the Khmer Empire.'
        ],
        image: {
          title: 'Silk Road Trade Route Map, 7th Century AD',
          caption: 'The overland and maritime routes of the Silk Roads served as the primary corridors for the spread of Buddhism, Islam, and other cultural traditions across Afro-Eurasia.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_in_7th_century_AD.png'
        }
      },
      {
        title: 'Technology Diffusion',
        bullets: [
          'Chinese **paper and printing** technology diffused westward through the Islamic world by the 8th–9th centuries and eventually reached Europe, transforming literacy, scholarship, and the preservation of knowledge.',
          'The **magnetic compass** and **gunpowder**, both Chinese inventions, spread through trade contacts into the Islamic world and then Europe, revolutionizing navigation and warfare across Afro-Eurasia.',
          'The **stirrup** spread across Eurasia, enabling cavalry-based military power and reshaping warfare; agricultural technologies including irrigation methods and new crop varieties diffused along the same routes that carried merchants and missionaries.'
        ],
        image: {
          title: 'Yuan Emperor Genghis Khan Portrait',
          caption: 'Mongol rulers presided over a vast network, the Pax Mongolica, that accelerated the movement of people, goods, and technologies across Eurasia in the 13th and 14th centuries.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg'
        }
      },
      {
        title: 'Crops, Art, and Ideas',
        bullets: [
          '**Sugar, citrus, and cotton** diffused across Afro-Eurasia through Indian Ocean and trans-Saharan trade, sugar cultivation spread from South Asia to the Mediterranean world, transforming agricultural economies and later fueling demand in European markets.',
          'Trade port cities like Kilwa, Calicut, and Quanzhou became sites of **architectural blending**, where mosques, Hindu temples, and Buddhist structures stood alongside each other, reflecting the cultural diversity of diaspora merchant communities.',
          'Mathematical and scientific knowledge, including **Arabic numerals**, **algebra**, and advances in astronomy, moved from the Islamic world into Europe through Mediterranean trade networks, fueling the intellectual developments of the later medieval period.'
        ],
        image: {
          title: 'Indian Ocean CIA World Factbook Map',
          caption: 'The Indian Ocean trade network connected East Africa, Arabia, South Asia, and Southeast Asia into a single commercial zone that carried not only goods but crops, artistic traditions, and religious practices.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      }
    ]
  },

  map: {
    title: 'Map: Silk Road Routes and Cultural Diffusion, c. 1200–1450',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_7th_century_AD.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_in_7th_century_AD.png',
    caption: 'The Silk Road network, overland and maritime, served as the primary corridor for the spread of religion, technology, and cultural practices across Afro-Eurasia from c. 1200 to c. 1450.',
    intro: 'Trade routes were cultural highways. Every caravan that carried silk and spices also carried merchants who prayed differently, wrote in different scripts, and ate different foods. Use this map to trace which routes carried which cultural traditions, and why geography determined what spread where.',
    prompt: 'Choose one religion and one technology. Using the map, trace the most likely route each one traveled between c. 1200 and c. 1450. What geographic features or human settlements made that route possible?',
    notes: [
      'The **overland Silk Roads** connected China to Central Asia, Persia, and the Mediterranean, the primary corridor for Buddhism, paper, printing, and gunpowder moving westward.',
      'The **Indian Ocean network** linked East Africa, Arabia, South Asia, and Southeast Asia, Islam and Hinduism traveled primarily through this maritime system carried by merchant diaspora communities.',
      'The **trans-Saharan routes** connected sub-Saharan Africa to North Africa and the Mediterranean, Islam spread southward while gold, salt, and enslaved people moved northward.',
      'The **Pax Mongolica** (c. 1250–1350) temporarily unified much of Eurasia under Mongol rule, dramatically accelerating the movement of people, technology, and disease across the overland network.'
    ]
  },

  first10: {
    title: 'First & 10: Ideas on the Move',
    embedUrl: 'first-and-10-topic-2-5-cultural-consequences-capture.html'
  },

  evidenceLab: {
    title: 'Evidence Lab: Tracing Cultural Diffusion',
    intro: 'Cultural diffusion leaves traces, in architectural styles, in religious practices, in the foods people eat, in the mathematics they use. Each piece of evidence below comes from a different trade network and a different type of exchange.',
    prompt: 'Choose one item from the evidence list. Explain: (1) where it originated, (2) how it spread along trade networks, and (3) what its spread reveals about the consequences of connectivity for AP World History Topic 2.5.',
    items: [
      {
        title: 'The Spread of Islam to Southeast Asia',
        detail: 'By c. 1300, Muslim merchant communities had established mosques and trading networks in coastal cities across Southeast Asia, Malacca, Ternate, Sulu. Local rulers converted not through conquest but through commercial relationships with Muslim merchants from the Indian Ocean world. Within 200 years, Islam had become the dominant religion across the Malay Peninsula and Indonesian archipelago.'
      },
      {
        title: 'Paper and Printing Moving West',
        detail: 'Chinese papermaking technology was captured when Arab armies defeated a Chinese force at the Battle of Talas (751 CE). By the 9th century, paper mills operated in Baghdad, Cairo, and eventually across the Islamic world. European papermaking began in the 13th century. The spread of paper transformed literacy, scholarship, and governance across Afro-Eurasia.'
      },
      {
        title: 'Sugar Across the Islamic World and into Europe',
        detail: 'Sugar cane originated in New Guinea and spread to South Asia, then to Persia and the Mediterranean through the expansion of the Islamic world. By c. 1200, sugar was cultivated across North Africa and the Middle East. Crusaders encountered it in the Levant and brought a taste for it back to Europe, where demand eventually drove the plantation economies of the Atlantic world.'
      },
      {
        title: 'Buddhist Architecture in Southeast Asia',
        detail: 'Angkor Wat in Cambodia (completed c. 1150) was originally a Hindu temple built for the Khmer king Suryavarman II, representing Mount Meru, the home of the gods. Within two centuries it had been converted to Buddhist use, reflecting the broader spread of Buddhism through Indian Ocean merchant networks and court patronage across mainland and island Southeast Asia.'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: Ibn Battuta Describes Cultural Mixing in the Indian Ocean World',
    intro: 'Ibn Battuta (1304–c.1368) was a Moroccan scholar who traveled more than 75,000 miles across the known world, visiting trade cities from West Africa to China. This adapted passage describes what he observed in Calicut, one of the great Indian Ocean port cities, and in Quanzhou, China\'s southern trade port.',
    text: 'The city of Calicut is one of the great ports of the Indian Ocean. Ships come to it from China, Java, Ceylon, the Maldives, Yemen, and Persia. The merchants of every nation are found here, Hindus from the interior, Arab traders from Aden and Hormuz, and Malays from the eastern islands. Each nation has its own quarter, its own customs house, its own place of worship. The Sultan of Calicut is a Hindu, but he extends hospitality to merchants of all faiths, for trade brings greater wealth than any single religion. In Quanzhou, I found a city of remarkable size and commerce. There were four separate districts for Muslim merchants alone, each with its own Friday mosque. The Chinese merchants bowed to the great ships with a reverence that reminded me of prayer. In the harbor, the great junks of China sat beside the dhows of Arabia as if they had always been neighbors. I thought: here is where the world touches itself.',
    questions: [
      'What evidence does Ibn Battuta provide that Calicut and Quanzhou were sites of cultural mixing and exchange? List at least three specific details.',
      'What does the Sultan of Calicut\'s behavior reveal about the relationship between trade and religion in Indian Ocean port cities? What does this suggest about how Islam spread through the region?',
      'How does Ibn Battuta\'s account support the claim that trade routes were "cultural highways"? What are the limitations of this source for understanding cultural diffusion across all three Afro-Eurasian trade networks?'
    ]
  }
};
