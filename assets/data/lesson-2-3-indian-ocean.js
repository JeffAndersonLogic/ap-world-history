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
    topic: "Topic 2.3",
    title: "Exchange in the Indian Ocean: Maritime Commerce and Cultural Connection",
    subtitle: "Monsoon winds, merchant communities, and Afro-Eurasian maritime exchange c. 1200–1450",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how technology and environmental knowledge — including dhow ships, the magnetic compass, and monsoon wind patterns — enabled Indian Ocean trade.",
      kc: "KC-2.3.III.A",
      theme: "Technology"
    },
    {
      target: "I can describe the goods and peoples exchanged across the Indian Ocean, including spices, textiles, gold, ivory, and merchants from Arabia, India, China, and the Swahili coast.",
      kc: "KC-2.3.III.B",
      theme: "Economics"
    },
    {
      target: "I can explain the effects of Indian Ocean trade — including the growth of port cities, the formation of diasporic merchant communities, and the spread of Islam.",
      kc: "KC-2.3.III.C",
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence — monsoon winds, dhow construction, or the magnetic compass — to explain how environmental knowledge and technology made Indian Ocean maritime trade possible.",
      kc: "KC-2.3.III.A",
      theme: "Technology"
    },
    {
      criteria: "I can identify the major goods (spices, textiles, gold, ivory) and merchant communities (Arab, Indian, Chinese, Swahili, Persian) that participated in Indian Ocean exchange and explain what made their participation significant.",
      kc: "KC-2.3.III.B",
      theme: "Economics"
    },
    {
      criteria: "I can connect Indian Ocean trade to specific effects: cosmopolitan port cities like Kilwa, Calicut, Quanzhou, and Malacca; diasporic merchant communities; and the spread of Islam along maritime routes.",
      kc: "KC-2.3.III.C",
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-2.3.III.A",
      theme: "Technology",
      text: "Indian Ocean trade was made possible by knowledge of monsoon wind patterns, advances in ship design such as the dhow, and navigational technology including the magnetic compass. These tools allowed merchants to make predictable seasonal voyages across the ocean.",
      illustrativeExamples: ["Monsoon winds", "Dhow ships", "Magnetic compass", "Lateen sails"]
    },
    {
      code: "KC-2.3.III.B",
      theme: "Economic Systems",
      text: "The Indian Ocean trade network connected East Africa, the Arabian Peninsula, the Indian subcontinent, Southeast Asia, and China. Merchants exchanged spices, textiles, gold, ivory, and enslaved people. Arab, Indian, Persian, Swahili, and Chinese merchants all participated in this system.",
      illustrativeExamples: ["Spices from Southeast Asia", "Gold from East Africa", "Textiles from India", "Chinese porcelain", "Arab and Indian merchant networks"]
    },
    {
      code: "KC-2.3.III.C",
      theme: "Cultural Developments and Interactions",
      text: "Indian Ocean trade produced lasting cultural effects: cosmopolitan port cities developed at major nodes of exchange, diasporic merchant communities settled far from their homelands, and Islam spread along maritime routes through the activities of Muslim merchants.",
      illustrativeExamples: ["Kilwa", "Calicut", "Quanzhou", "Malacca", "Swahili culture", "Spread of Islam to Southeast Asia and East Africa"]
    }
  ],

  lecture: {
    title: "Indian Ocean Trade: Technology, Exchange, and Cultural Connection",
    intro: "Use these cards to explain how technology and environmental knowledge made Indian Ocean maritime trade possible, who participated and what they exchanged, and how this network transformed the port cities and cultures it connected from c. 1200 to c. 1450.",
    videos: [
      {
        title: "Heimler's History — Topic 2.3 Part 1",
        url: "https://youtu.be/YT_23_1",
        youtubeId: "YT_23_1",
        prompt: "Use this clip to review the technology and wind knowledge that enabled Indian Ocean maritime trade."
      },
      {
        title: "Heimler's History — Topic 2.3 Part 2",
        url: "https://youtu.be/YT_23_2",
        youtubeId: "YT_23_2",
        prompt: "Use this clip to review the goods, peoples, and cultural effects of Indian Ocean exchange on port cities and merchant communities."
      }
    ],
    segments: [
      {
        title: "Technology and wind patterns",
        bullets: [
          "**Monsoon winds** — seasonal winds that reverse direction twice a year — functioned as a reliable calendar for Indian Ocean mariners: sail northeast in winter, sail southwest in summer, making predictable round-trip voyages across thousands of miles of open ocean.",
          "**Dhow ships**, built with planks stitched together with coconut fiber rather than nailed, were flexible enough to survive open-ocean conditions; combined with **lateen (triangular) sails** that could catch wind from multiple angles, they were ideally suited to Indian Ocean conditions.",
          "The **magnetic compass**, diffused from China, gave navigators the ability to maintain course far from land, while accumulated knowledge of stars, currents, and coastlines — passed down through generations of Arab, Indian, and Malay sailors — made the ocean a navigable highway rather than a barrier."
        ],
        image: {
          title: "Indian Ocean — CIA World Factbook map",
          caption: "The Indian Ocean basin connected East Africa, Arabia, India, Southeast Asia, and China through seasonal monsoon wind patterns.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png"
        }
      },
      {
        title: "Who traded and what they exchanged",
        bullets: [
          "**Arab and Persian merchants** dominated the western Indian Ocean, trading between East Africa, Arabia, and India; **Indian merchants** from Gujarat and the Malabar Coast linked the western and eastern halves of the network; **Chinese merchants** and junks connected Southeast Asia and South China Sea ports to the broader system.",
          "Goods flowed in multiple directions: **spices** (pepper, cloves, nutmeg) from Southeast Asia commanded enormous prices in Europe and the Middle East; **textiles** from India served as currency across the network; **gold and ivory** from East Africa moved northward and eastward in exchange for porcelain, cloth, and manufactured goods.",
          "**Enslaved people** were also among the commodities exchanged — East African enslaved individuals were transported to the Arabian Peninsula and Persian Gulf, while enslaved people moved across many nodes of the Indian Ocean system, reflecting the brutal dimension of this commercial network."
        ],
        image: {
          title: "Silk Road routes across Afro-Eurasia",
          caption: "Overland and maritime routes worked together: Indian Ocean ports connected to overland networks moving goods into the interior of Afro-Eurasia.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Silk_route.jpg"
        }
      },
      {
        title: "Port cities and diasporic communities",
        bullets: [
          "Major port cities became cosmopolitan centers: **Kilwa** (East Africa) grew wealthy from gold and ivory transit; **Calicut** (India) served as a hub for spice trade; **Quanzhou** (China) was one of the world's largest ports; **Malacca** (Southeast Asia) became a strategic chokepoint where merchants from a dozen cultures mingled.",
          "**Diasporic merchant communities** — Arab merchants in India, Indian merchants in Southeast Asia, Chinese merchants in the Malay world — settled permanently in port cities, creating neighborhoods governed by their own legal customs and maintaining long-distance commercial networks through family and religious ties.",
          "Islam spread powerfully along Indian Ocean routes: **Muslim merchants** from Arabia and the Persian Gulf carried their faith to port cities across East Africa and Southeast Asia, where rulers often converted to gain commercial advantages and access to Islamic legal and scholarly networks — the Swahili coast and the sultanates of Southeast Asia reflect this maritime spread of Islam."
        ],
        image: {
          title: "Geographic overview of Afro-Eurasian connections",
          caption: "Port cities at the nodes of Indian Ocean exchange grew into some of the most cosmopolitan and culturally diverse urban centers of the medieval world.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Nile_composite_NASA.jpg"
        }
      }
    ]
  },

  map: {
    title: "Indian Ocean Trade Routes",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png",
    caption: "The Indian Ocean basin connected East Africa, the Arabian Peninsula, South Asia, Southeast Asia, and China through maritime trade routes guided by monsoon winds.",
    intro: "Use the map to trace the major routes of Indian Ocean exchange and identify the port cities that served as commercial and cultural hubs.",
    prompt: "How did the geography of the Indian Ocean — its size, its seasonal winds, and the coastlines that bordered it — shape who participated in trade and which cities became wealthy?",
    notes: [
      "The Indian Ocean is not one body of water but a system of interconnected seas — the Arabian Sea, the Bay of Bengal, and the South China Sea — each with its own wind patterns and commercial character.",
      "The monsoon system created a rhythmic calendar of departure and arrival that structured the entire commercial year for Indian Ocean merchants.",
      "Port cities grew at natural geographic nodes — straits, river mouths, and coastal plains — where merchants were forced to stop, unload, and resupply, creating opportunities for exchange and cultural interaction."
    ]
  },

  first10: {
    title: "First & 10: The Ocean That Connected the World",
    paragraphs: [
      "Long before European sailors entered the Indian Ocean in the late 15th century, Arab, Indian, Chinese, Persian, and Swahili merchants had turned it into the most active maritime trade zone in the world. The key was knowledge — specifically, knowledge of the monsoon winds.",
      "Twice a year, the winds over the Indian Ocean reversed direction, carrying ships reliably from Arabia to India, from India to Southeast Asia, and back again. This environmental pattern made the Indian Ocean predictable in a way that the Atlantic and Pacific were not, and it allowed merchants to plan round-trip voyages with confidence.",
      "The results transformed the societies around the ocean's rim: port cities grew wealthy, diasporic communities of merchants settled across the coastlines, and Islam spread along maritime routes to become a major presence from East Africa to the Indonesian archipelago."
    ],
    questions: [
      "Explain how monsoon winds and ship technology — especially the dhow and the magnetic compass — made Indian Ocean trade possible. Use at least two specific pieces of evidence.",
      "Indian Ocean trade involved multiple merchant communities — Arab, Indian, Chinese, Swahili, and Persian. Choose two and explain what they contributed to the network and what they gained from it.",
      "Evaluate this claim: 'Indian Ocean trade did more to spread Islam than any military conquest.' Use evidence from c. 1200–1450 to support or challenge the claim."
    ],
    magicSchoolBridge: {
      magicSchoolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q"
    }
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Indian Ocean Trade Through Evidence",
    intro: "Use the evidence below to connect Indian Ocean exchange to broader historical arguments about technology, commercial networks, and cultural transformation.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about what made Indian Ocean trade possible, who participated, or how it changed the societies it connected.",
    items: [
      { title: "Monsoon wind patterns", detail: "Evidence of how environmental knowledge transformed the Indian Ocean from a barrier into a highway — merchants who understood the monsoon could plan predictable, profitable voyages." },
      { title: "Kilwa and the East African gold trade", detail: "Evidence of how Indian Ocean trade created wealthy, cosmopolitan port cities on the Swahili coast — Kilwa's wealth from gold transit made it one of the richest cities in the world by the 14th century." },
      { title: "Spread of Islam to Southeast Asia", detail: "Evidence of how commercial networks carried cultural and religious change: Muslim merchants from Arabia and India brought Islam to port cities across the Malay world, where rulers converted to access Islamic commercial and legal networks." }
    ]
  },

  primarySource: {
    title: "Primary Source: Ibn Battuta on the Port Cities of the Indian Ocean",
    intro: "Ibn Battuta, the Moroccan scholar and traveler, visited Indian Ocean port cities during his journeys of 1325–1354. His account, the Rihla, is one of the most detailed descriptions of Indian Ocean commercial society in this period. This adapted passage reflects his observations of Kilwa on the East African coast.",
    text: "We arrived at Kilwa, one of the most beautiful and well-constructed towns in the world. The whole of it is elegantly built. The roofs are built with mangrove poles. There is very much rain there. The people are engaged in a holy war, for their country lies next to the pagan Zanj. The sultan at this time was Abu al-Mawahib al-Hasan ibn Sulaiman, who was noted for his gifts and generosity. He used to give the clothes off his back as gifts. The country of Kilwa is one of the finest and most fertile in the world. Bananas and coconuts are abundant, and the people eat qadid meat — dried meat and millet — mixed with butter. It is reached by sea from Aden in twenty-three days.",
    questions: [
      "What evidence in Ibn Battuta's description suggests that Kilwa was a cosmopolitan city connected to wider Indian Ocean networks?",
      "How does the reference to travel time from Aden help explain the structure of Indian Ocean trade routes and the role of port cities?",
      "What does Ibn Battuta's emphasis on the sultan's generosity and piety reveal about the relationship between Islam and political authority in Indian Ocean port cities?"
    ]
  }

};
