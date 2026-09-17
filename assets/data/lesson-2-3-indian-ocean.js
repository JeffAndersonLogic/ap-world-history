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
    course: 'AP WORLD HISTORY',
    unit: 'Unit 2: Networks of Exchange',
    topic: 'Topic 2.3',
    title: 'Exchange in the Indian Ocean',
    subtitle: 'Monsoons, maritime technology, trading states, diasporas, and Zheng He c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how monsoon knowledge, the compass, astrolabe, and larger ship designs helped Indian Ocean trade expand after 1200.',
      kc: 'KC-3.1.I.C.ii + KC-3.1.II.A.i',
      theme: 'Economic Systems / Humans and the Environment'
    },
    {
      target: 'I can explain how expanded Indian Ocean trade promoted powerful trading cities and states such as the Swahili Coast city-states, Gujarat, and the Sultanate of Malacca.',
      kc: 'KC-3.1.I.A.ii + KC-3.1.I.A.iii',
      theme: 'Economic Systems'
    },
    {
      target: 'I can explain how diasporic merchant communities and Zheng He\'s voyages demonstrate the cultural and technological effects of intensified Indian Ocean exchange.',
      kc: 'KC-3.1.III.B + KC-3.2.II.A.iii',
      theme: 'Cultural Developments and Interactions'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can explain how predictable monsoon winds and navigational or shipbuilding innovations lowered the risk and increased the range of maritime trade.',
      kc: 'KC-3.1.I.C.ii + KC-3.1.II.A.i',
      theme: 'Economic Systems / Humans and the Environment'
    },
    {
      criteria: 'I can use the Swahili Coast, Gujarat, and Malacca to explain how trade fostered state growth and powerful commercial centers.',
      kc: 'KC-3.1.I.A.ii + KC-3.1.I.A.iii',
      theme: 'Economic Systems'
    },
    {
      criteria: 'I can use Arab and Persian communities in East Africa, Chinese merchant communities in Southeast Asia, Malay communities in the Indian Ocean basin, and Zheng He as evidence of cross-cultural interaction.',
      kc: 'KC-3.1.III.B + KC-3.2.II.A.iii',
      theme: 'Cultural Developments and Interactions'
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
    title: 'Indian Ocean Trade: Wind, Technology, States, and Communities',
    intro: 'The Indian Ocean network expanded because sailors combined environmental knowledge with better maritime technology. That growth strengthened trading cities and states, created diasporic merchant communities, and enabled major voyages such as those led by Zheng He.',
    videos: [
      {
        title: 'The INDIAN OCEAN TRADE Network, Explained [AP World History Review—Unit 2 Topic 3]',
        url: 'https://youtu.be/r-D9F2TiirY',
        youtubeId: 'r-D9F2TiirY',
        prompt: 'Track the CED chain: monsoon knowledge + maritime technology -> more trade -> stronger states and diaspora communities -> wider cultural transfer.'
      }
    ],
    segments: [
      {
        title: 'Big Rock 1: Winds and Technology Made Trade Expand',
        bullets: [
          '**Monsoon winds** reverse direction seasonally, giving sailors a predictable calendar for round-trip voyages across the Indian Ocean.',
          'The **magnetic compass** and **astrolabe** improved navigation, while **larger ship designs** allowed merchants to carry more cargo across longer distances.',
          'Environmental knowledge and maritime technology worked together: they lowered risk, increased carrying capacity, and expanded the volume and geographic range of trade.'
        ],
        image: {
          title: 'Indian Ocean basin',
          caption: 'Seasonal winds and maritime technologies turned the ocean into a predictable exchange system.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      },
      {
        title: 'Big Rock 2: Trade Built Cities and States',
        bullets: [
          'As trade volume increased, ports became powerful commercial nodes where rulers could tax exchange, provide services, and attract merchants and artisans.',
          'The **city-states of the Swahili Coast**, **Gujarat**, and the **Sultanate of Malacca** are CED examples of political power strengthened by Indian Ocean commerce.',
          'Goods such as spices, textiles, gold, ivory, and porcelain mattered because the flow of valuable products generated revenue and political leverage for states controlling strategic ports and routes.'
        ],
        image: {
          title: 'Indian Ocean trade routes',
          caption: 'Commercial nodes became political nodes because states could tax and protect exchange.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      },
      {
        title: 'Big Rock 3: Diasporic Communities Changed Port Cultures',
        bullets: [
          '**Arab and Persian communities in East Africa** established long-term merchant settlements that blended commercial and cultural practices with local societies.',
          '**Chinese merchant communities in Southeast Asia** and **Malay communities in the Indian Ocean basin** likewise maintained connections to home regions while adapting to local environments.',
          'Diasporic communities were more than temporary visitors: they created durable networks of trust, family, religion, language, and commercial knowledge across the ocean.'
        ],
        image: {
          title: 'Port-city cultural interaction',
          caption: 'Diasporic communities made Indian Ocean ports centers of sustained cross-cultural interaction.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      },
      {
        title: 'Big Rock 4: Zheng He Shows the Scale of Maritime Contact',
        bullets: [
          'During the early 15th century, Ming admiral **Zheng He** led large Chinese fleets through Southeast Asia and across the Indian Ocean to South Asia, Arabia, and East Africa.',
          'The voyages projected Ming prestige and participated in existing commercial and diplomatic networks rather than creating Indian Ocean trade from scratch.',
          'Zheng He\'s expeditions demonstrate how intensified interregional contact encouraged **technological and cultural transfers** across a maritime world already tied together by trade.'
        ],
        image: {
          title: 'Indian Ocean maritime reach',
          caption: 'Zheng He\'s voyages operated within an already mature Indian Ocean exchange system.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      }
    ]
  },

  map: {
    title: 'Indian Ocean Trade Routes',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png',
    caption: 'The Indian Ocean basin connected East Africa, Arabia, South Asia, Southeast Asia, and China through maritime routes shaped by seasonal monsoon winds.',
    intro: 'Use the map to connect environment, technology, state growth, diaspora communities, and Zheng He to one maritime system.',
    prompt: 'Why would predictable winds and strategic port locations create both commercial wealth and cultural diversity?',
    notes: [
      'Monsoon knowledge made long-distance sailing predictable enough to plan departures and returns.',
      'The Swahili Coast, Gujarat, and Malacca gained political and economic power because they sat at major commercial nodes.',
      'Diasporic merchant communities formed where sailors and merchants stayed for extended periods while waiting for winds, building durable cross-cultural relationships.',
      'Zheng He\'s voyages demonstrate the geographic reach and political importance of the Indian Ocean network by the early 1400s.'
    ]
  },

  deepReading: {
    title: 'The Ocean That Carried Everything',
    desc: 'A textbook-depth companion on monsoon knowledge, navigation and ship design, trading states, merchant diasporas, and what Zheng He\'s voyages reveal about the mature Indian Ocean system. Optional.',
    url: 'deep-reading-topic-2-3-indian-ocean.html'
  },

  first10: {
    title: 'First & 10: The Ocean That Connected the World',
    embedUrl: 'first-and-10-topic-2-3-indian-ocean-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Proving Indian Ocean Expansion and Effects',
    intro: 'Each piece of evidence belongs to one part of the CED story: causes of expansion, state growth, diasporic communities, or wider transfer.',
    prompt: 'Choose one piece of evidence and explain the mechanism connecting it to the growth or effects of Indian Ocean exchange after 1200.',
    items: [
      { title: 'Monsoon Winds + Compass + Astrolabe + Larger Ships', detail: 'Evidence that environmental knowledge and maritime technologies increased predictability, range, and carrying capacity.' },
      { title: 'Swahili Coast, Gujarat, and Malacca', detail: 'Evidence that expanding maritime exchange fostered the growth of states and powerful commercial centers.' },
      { title: 'Arab, Persian, Chinese, and Malay Diasporas', detail: 'Evidence that long-distance merchants established communities that blended local and foreign cultural traditions.' },
      { title: 'Zheng He', detail: 'Evidence that intensified maritime contact supported large-scale diplomatic voyages and cultural and technological transfer.' }
    ]
  },

  primarySource: {
    title: 'Primary Source: Ibn Battuta on Kilwa',
    intro: 'Ibn Battuta visited Indian Ocean port cities during his travels. His description of Kilwa can be used as evidence of the wealth, political authority, Islamic culture, and interregional connections of a Swahili Coast city-state.',
    text: '"We arrived at Kilwa, one of the most beautiful and well-constructed towns in the world. The whole of it is elegantly built. The roofs are built with mangrove poles. There is very much rain there. The people are engaged in a holy war, for their country lies next to the pagan Zanj. The sultan at this time was Abu al-Mawahib al-Hasan ibn Sulaiman, who was noted for his gifts and generosity. He used to give the clothes off his back as gifts. The country of Kilwa is one of the finest and most fertile in the world. Bananas and coconuts are abundant, and the people eat qadid meat, dried meat and millet, mixed with butter. It is reached by sea from Aden in twenty-three days."',
    attribution: 'Ibn Battuta, Rihla (translated as The Travels of Ibn Battuta, 1325–1354), describing Kilwa on the East African coast',
    questions: [
      'What evidence suggests that Kilwa was a prosperous Indian Ocean trading state?',
      'How does Ibn Battuta\'s presence in Kilwa demonstrate the connectivity of the Indian Ocean network?',
      'What does the source reveal about the relationship between trade, Islam, and political authority on the Swahili Coast?'
    ]
  }
};
