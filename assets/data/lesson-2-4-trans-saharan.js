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
    topic: 'Topic 2.4',
    title: 'Trans-Saharan Trade Routes',
    subtitle: 'Camel technology, expanding exchange, and Mali\'s role in Afro-Eurasian trade c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how the camel saddle and caravan organization made sustained trans-Saharan exchange possible.',
      kc: 'KC-3.1.II.A.ii',
      theme: 'Technology and Innovation'
    },
    {
      target: 'I can explain why improved transportation increased the volume and geographic range of trans-Saharan trade, using gold and salt as evidence of the exchange system.',
      kc: 'KC-3.1.I.A.iv',
      theme: 'Economic Systems'
    },
    {
      target: 'I can explain how the expansion of Mali facilitated trade and communication by drawing more people into West African and Afro-Eurasian exchange networks.',
      kc: 'KC-3.1.I.E.ii',
      theme: 'Governance'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can explain how the camel saddle, caravans, desert guides, and oases solved the transportation problems of crossing the Sahara.',
      kc: 'KC-3.1.II.A.ii',
      theme: 'Technology and Innovation'
    },
    {
      criteria: 'I can connect transportation improvements and complementary demand for gold and salt to increased trade volume and longer-distance exchange.',
      kc: 'KC-3.1.I.A.iv',
      theme: 'Economic Systems'
    },
    {
      criteria: 'I can use Mali and Mansa Musa as evidence that imperial expansion could facilitate commerce, communication, and connections to the wider Islamic world.',
      kc: 'KC-3.1.I.E.ii',
      theme: 'Governance'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1.II.A.ii',
      theme: 'Technology and Innovation',
      text: 'The growth of interregional trade was encouraged by innovations in existing transportation technologies.',
      illustrativeExamples: ['Camel saddle', 'Caravans']
    },
    {
      code: 'KC-3.1.I.A.iv',
      theme: 'Economic Systems',
      text: 'Improved transportation technologies and commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the trans-Saharan trade network.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.E.ii',
      theme: 'Governance',
      text: 'The expansion of empires, including Mali in West Africa, facilitated Afro-Eurasian trade and communication as new people were drawn into the economies and trade networks.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: 'Trans-Saharan Trade: Technology, Demand, and Empire',
    intro: 'This lesson follows one causal chain: transportation innovations made the Sahara more commercially crossable; valuable exchange increased in volume and range; and Mali grew powerful by participating in and facilitating that expanding network.',
    videos: [
      {
        title: 'The TRANS-SAHARAN TRADE Network, Explained [AP World History Review—Unit 2 Topic 4]',
        url: 'https://youtu.be/fUYUx-0ISW4',
        youtubeId: 'fUYUx-0ISW4',
        prompt: 'Track transportation technology, trade expansion, and Mali\'s role in facilitating exchange.'
      }
    ],
    segments: [
      {
        title: 'Big Rock 1: Technology Made the Sahara Crossable',
        bullets: [
          'The **camel saddle** made camels more useful for riders, guides, and pack transport in desert conditions.',
          '**Caravans** pooled animals, supplies, labor, knowledge, and security, reducing the risk faced by individual merchants.',
          '**Oases and experienced desert guides** turned an enormous environmental barrier into a sequence of manageable stages for long-distance commerce.'
        ],
        image: {
          title: 'Mansa Musa on the Catalan Atlas, 1375',
          caption: 'The image reflects the wealth generated by the exchange network that camel transport made possible.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg'
        }
      },
      {
        title: 'Big Rock 2: Better Transportation Expanded Trade',
        bullets: [
          'Improved transportation allowed merchants to move more goods across a larger geographic range, intensifying the **trans-Saharan trade network**.',
          '**Gold** from West Africa and **salt** from Saharan deposits were especially important because strong demand existed on opposite sides of the desert.',
          'The important AP relationship is not simply “gold traded for salt.” It is **technology + demand -> increased trade volume and reach**.'
        ],
        image: {
          title: 'Trans-Saharan trade routes',
          caption: 'Routes linked West African production zones to North Africa and the Mediterranean.',
          url: '../assets/images/instructional-maps/topic-2-4.svg',
          sourceUrl: '../assets/images/instructional-maps/topic-2-4.svg'
        }
      },
      {
        title: 'Big Rock 3: Mali Facilitated Trade and Communication',
        bullets: [
          'The **Mali Empire** controlled important territory and commercial routes, drawing merchants and communities into a larger political and economic network.',
          'Mali\'s rulers could tax commerce and support cities and institutions tied to trade; **Mansa Musa\'s 1324 hajj** made Mali\'s wealth and Islamic connections visible across a much wider world.',
          'Trade also supported cultural connections, including the spread of **Islam, Arabic literacy, and scholarship**, but the core CED mechanism is that imperial expansion facilitated trade and communication.'
        ],
        image: {
          title: 'Mansa Musa and Mali\'s wider connections',
          caption: 'Mali\'s wealth and Islamic connections demonstrate how empire and exchange reinforced one another.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg'
        }
      }
    ]
  },

  map: {
    title: 'Trans-Saharan Routes and West African States',
    url: '../assets/images/instructional-maps/topic-2-4.svg',
    sourceUrl: '../assets/images/instructional-maps/topic-2-4.svg',
    caption: 'Trans-Saharan routes connected West Africa to North Africa and the Mediterranean through a network made commercially viable by camel transport, caravans, and oasis stopping points.',
    intro: 'Use the map to connect environment, transportation technology, trade expansion, and Mali\'s political power.',
    prompt: 'How did solving the transportation problem of the Sahara allow both trade and state power to expand?',
    notes: [
      'The Sahara remained difficult; technology did not remove the environment, but it reduced the transportation problem enough to make regular commerce viable.',
      'Gold and salt were important evidence of complementary demand across the network.',
      'Mali benefited from controlling and taxing exchange while also helping connect West Africa to wider Afro-Eurasian commercial and Islamic networks.'
    ]
  },

  deepReading: {
    title: 'Two Months Without Water',
    desc: 'A textbook-depth companion on camel technology, caravan organization, gold-salt demand, Mali\'s political role in commerce, and the wider Islamic connections supported by trans-Saharan exchange. Optional.',
    url: 'deep-reading-topic-2-4-trans-saharan.html'
  },

  first10: {
    title: 'First & 10: The Sahara Did Not Shrink',
    embedUrl: 'first-and-10-topic-2-4-trans-saharan-capture.html?v=desert-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Proving Trans-Saharan Trade Growth',
    intro: 'Use evidence to connect transportation technology, expanding commerce, and Mali\'s political power.',
    prompt: 'Choose one piece of evidence and explain the mechanism connecting it to the growth or effects of trans-Saharan trade.',
    items: [
      { title: 'Camel Saddle', detail: 'Evidence that transportation innovation made camels more useful for sustained desert travel.' },
      { title: 'Caravans', detail: 'Evidence that merchants organized people, animals, supplies, and security to reduce the risks of long-distance desert exchange.' },
      { title: 'Gold and Salt', detail: 'Evidence that strong complementary demand gave merchants a reason to expand exchange across the Sahara.' },
      { title: 'Mali and Mansa Musa', detail: 'Evidence that imperial expansion could facilitate trade and communication while rulers gained wealth and wider connections from commerce.' }
    ]
  },

  primarySource: {
    title: 'Primary Source: Ibn Battuta on Mali and the Trans-Saharan World',
    intro: 'Ibn Battuta visited Mali in the 14th century after crossing the Sahara. His account provides evidence of Mali\'s political authority, Islamic connections, and participation in a larger interregional world.',
    text: '"I arrived at the town of Mali, the capital of the king of the blacks, and met the sultan Sulayman. He is a miserly king, and great gifts are not to be expected from him. I witnessed on his part a deed of generosity toward the pilgrims and those who came to him. He gave food, bread, and milk and gold to the pilgrims. His court is held in a great open place. He has with him his governors and the commanders of his soldiers, and a crowd of people. His interpreter stands before him, and the jurists, doctors of law, and preachers sit to his right. He receives men seated, and all about him bow down. He is surrounded by more than three hundred armed slaves."',
    attribution: 'Ibn Battuta, Rihla (translated as The Travels of Ibn Battuta, 1325–1354), describing the court of Mansa Sulayman of Mali, 1352–1353',
    questions: [
      'What details suggest that Mali was connected to the wider Islamic world?',
      'How could Mali\'s political authority help facilitate trade and communication?',
      'How does Ibn Battuta\'s presence in Mali itself demonstrate the reach of Afro-Eurasian exchange networks?'
    ]
  }
};
