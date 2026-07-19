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
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how technology and environmental knowledge, including dhow ships, the magnetic compass, and monsoon wind patterns, enabled Indian Ocean trade.",
      kc: 'KC-3.1.I.C.ii; KC-3.1.II.A.i',
      theme: "Technology"
    },
    {
      target: "I can describe the goods and peoples exchanged across the Indian Ocean, including spices, textiles, gold, ivory, and merchants from Arabia, India, China, and the Swahili coast.",
      kc: 'KC-3.1.III.B',
      theme: "Economics"
    },
    {
      target: "I can explain the effects of Indian Ocean trade, including the growth of port cities, the formation of diasporic merchant communities, and the spread of Islam.",
      kc: 'KC-3.1.I.A.ii; KC-3.1.I.A.iii',
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence, monsoon winds, dhow construction, or the magnetic compass, to explain how environmental knowledge and technology made Indian Ocean maritime trade possible.",
      kc: 'KC-3.1.I.C.ii; KC-3.1.II.A.i',
      theme: "Technology"
    },
    {
      criteria: "I can identify the major goods (spices, textiles, gold, ivory) and merchant communities (Arab, Indian, Chinese, Swahili, Persian) that participated in Indian Ocean exchange and explain what made their participation significant.",
      kc: 'KC-3.1.III.B',
      theme: "Economics"
    },
    {
      criteria: "I can connect Indian Ocean trade to specific effects: cosmopolitan port cities like Kilwa, Calicut, Quanzhou, and Malacca; diasporic merchant communities; and the spread of Islam along maritime routes.",
      kc: 'KC-3.1.I.A.ii; KC-3.1.I.A.iii',
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1.I.A.ii',
      theme: 'Economic Systems',
      text: 'Improved transportation technologies and commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the Indian Ocean, promoting the growth of powerful new trading cities.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.C.ii',
      theme: 'Economic Systems',
      text: 'The growth of interregional trade in luxury goods was encouraged by significant innovations in previously existing transportation and commercial technologies, including the use of the compass, the astrolabe, and larger ship designs.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.A.iii',
      theme: 'Economic Systems',
      text: 'The Indian Ocean trading network fostered the growth of states.',
      illustrativeExamples: ['City-states of the Swahili Coast', 'Gujarat', 'Sultanate of Malacca']
    },
    {
      code: 'KC-3.1.III.B',
      theme: 'Cultural Developments and Interactions',
      text: 'In key places along important trade routes, merchants set up diasporic communities where they introduced their own cultural traditions into the indigenous cultures and, in turn, indigenous cultures influenced merchant cultures.',
      illustrativeExamples: ['Arab and Persian communities in East Africa', 'Chinese merchant communities in Southeast Asia', 'Malay communities in the Indian Ocean basin']
    },
    {
      code: 'KC-3.2.II.A.iii',
      theme: 'Cultural Developments and Interactions',
      text: 'Interregional contacts and conflicts between states and empires encouraged significant technological and cultural transfers, including during Chinese maritime activity led by Ming admiral Zheng He.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.II.A.i',
      theme: 'Humans and the Environment',
      text: 'The expansion and intensification of long-distance trade routes often depended on environmental knowledge, including advanced knowledge of the monsoon winds.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Indian Ocean Trade: Technology, Exchange, and Cultural Connection",
    intro: "Use these cards to explain how technology and environmental knowledge made Indian Ocean maritime trade possible, who participated and what they exchanged, and how this network transformed the port cities and cultures it connected from c. 1200 to c. 1450.",
    videos: [
      {
        title: 'The INDIAN OCEAN TRADE Network, Explained [AP World History Review—Unit 2 Topic 3]',
        url: 'https://youtu.be/r-D9F2TiirY',
        youtubeId: 'r-D9F2TiirY',
        prompt: 'Track the causes of expansion, diaspora communities, and cultural and technological transfers around the Indian Ocean.'
      }
    ],
    segments: [
      {
        title: "Technology and wind patterns",
        bullets: [
          "**Monsoon winds**, seasonal winds that reverse direction twice a year, functioned as a reliable calendar for Indian Ocean mariners: sail northeast in winter, sail southwest in summer, making predictable round-trip voyages across thousands of miles of open ocean.",
          "**Dhow ships**, built with planks stitched together with coconut fiber rather than nailed, were flexible enough to survive open-ocean conditions; combined with **lateen (triangular) sails** that could catch wind from multiple angles, they were ideally suited to Indian Ocean conditions.",
          "The **magnetic compass**, diffused from China, gave navigators the ability to maintain course far from land, while accumulated knowledge of stars, currents, and coastlines, passed down through generations of Arab, Indian, and Malay sailors, made the ocean a navigable highway rather than a barrier."
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
          "**Enslaved people** were also among the commodities exchanged, East African enslaved individuals were transported to the Arabian Peninsula and Persian Gulf, while enslaved people moved across many nodes of the Indian Ocean system, reflecting the brutal dimension of this commercial network."
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
          "**Diasporic merchant communities**, Arab merchants in India, Indian merchants in Southeast Asia, Chinese merchants in the Malay world, settled permanently in port cities, creating neighborhoods governed by their own legal customs and maintaining long-distance commercial networks through family and religious ties.",
          "Islam spread powerfully along Indian Ocean routes: **Muslim merchants** from Arabia and the Persian Gulf carried their faith to port cities across East Africa and Southeast Asia, where rulers often converted to gain commercial advantages and access to Islamic legal and scholarly networks, the Swahili coast and the sultanates of Southeast Asia reflect this maritime spread of Islam."
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
    prompt: "How did the geography of the Indian Ocean, its size, its seasonal winds, and the coastlines that bordered it, shape who participated in trade and which cities became wealthy?",
    notes: [
      "The Indian Ocean is not one body of water but a system of interconnected seas, the Arabian Sea, the Bay of Bengal, and the South China Sea, each with its own wind patterns and commercial character.",
      "The monsoon system created a rhythmic calendar of departure and arrival that structured the entire commercial year for Indian Ocean merchants.",
      "Port cities grew at natural geographic nodes, straits, river mouths, and coastal plains, where merchants were forced to stop, unload, and resupply, creating opportunities for exchange and cultural interaction."
    ]
  },

  first10: {
    title: 'First & 10: The Ocean That Connected the World',
    embedUrl: 'first-and-10-topic-2-3-indian-ocean-capture.html'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Indian Ocean Trade Through Evidence",
    intro: "Use the evidence below to connect Indian Ocean exchange to broader historical arguments about technology, commercial networks, and cultural transformation.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about what made Indian Ocean trade possible, who participated, or how it changed the societies it connected.",
    items: [
      { title: "Monsoon wind patterns", detail: "Evidence of how environmental knowledge transformed the Indian Ocean from a barrier into a highway, merchants who understood the monsoon could plan predictable, profitable voyages." },
      { title: "Kilwa and the East African gold trade", detail: "Evidence of how Indian Ocean trade created wealthy, cosmopolitan port cities on the Swahili coast, Kilwa's wealth from gold transit made it one of the richest cities in the world by the 14th century." },
      { title: "Spread of Islam to Southeast Asia", detail: "Evidence of how commercial networks carried cultural and religious change: Muslim merchants from Arabia and India brought Islam to port cities across the Malay world, where rulers converted to access Islamic commercial and legal networks." }
    ]
  },

  primarySource: {
    title: "Primary Source: Ibn Battuta on the Port Cities of the Indian Ocean",
    intro: "Ibn Battuta, the Moroccan scholar and traveler, visited Indian Ocean port cities during his journeys of 1325–1354. His account, the Rihla, is one of the most detailed descriptions of Indian Ocean commercial society in this period. This adapted passage reflects his observations of Kilwa on the East African coast.",
    text: "We arrived at Kilwa, one of the most beautiful and well-constructed towns in the world. The whole of it is elegantly built. The roofs are built with mangrove poles. There is very much rain there. The people are engaged in a holy war, for their country lies next to the pagan Zanj. The sultan at this time was Abu al-Mawahib al-Hasan ibn Sulaiman, who was noted for his gifts and generosity. He used to give the clothes off his back as gifts. The country of Kilwa is one of the finest and most fertile in the world. Bananas and coconuts are abundant, and the people eat qadid meat, dried meat and millet, mixed with butter. It is reached by sea from Aden in twenty-three days.",
    questions: [
      "What evidence in Ibn Battuta's description suggests that Kilwa was a cosmopolitan city connected to wider Indian Ocean networks?",
      "How does the reference to travel time from Aden help explain the structure of Indian Ocean trade routes and the role of port cities?",
      "What does Ibn Battuta's emphasis on the sultan's generosity and piety reveal about the relationship between Islam and political authority in Indian Ocean port cities?"
    ]
  }

};
