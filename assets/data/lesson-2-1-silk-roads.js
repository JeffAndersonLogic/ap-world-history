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
    topic: 'Topic 2.1',
    title: 'The Silk Roads',
    subtitle: 'Why overland exchange expanded after 1200, and what changed because it did',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain why Silk Roads trade expanded after 1200 by connecting demand, commercial practices, transportation infrastructure, and supporting political stability.',
      kc: 'KC-3.1.I.A.i + KC-3.1.I.C.i',
      theme: 'Economic Systems'
    },
    {
      target: 'I can explain how caravanserai, credit, banking houses, and paper money reduced the risk and difficulty of long-distance trade.',
      kc: 'KC-3.1.I.C.i',
      theme: 'Economic Systems'
    },
    {
      target: 'I can explain how demand for luxury goods increased production and helped trading cities such as Kashgar and Samarkand grow.',
      kc: 'KC-3.1.I.A.i + KC-3.3.I.B',
      theme: 'Economic Systems'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can build a cause-and-effect chain: demand plus improved trade systems and lower political risk increased trade volume and geographic reach.',
      kc: 'KC-3.1.I.A.i',
      theme: 'Economic Systems'
    },
    {
      criteria: 'I can explain what caravanserai, bills of exchange, banking houses, and paper money actually did for merchants instead of only defining the terms.',
      kc: 'KC-3.1.I.C.i',
      theme: 'Economic Systems'
    },
    {
      criteria: 'I can use Kashgar, Samarkand, Chinese porcelain, Persian and Indian textiles, and Chinese iron and steel as evidence of economic change.',
      kc: 'KC-3.1.I.A.i + KC-3.3.I.B',
      theme: 'Economic Systems'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1.I.A.i',
      theme: 'Economic Systems',
      text: 'Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the Silk Roads, promoting the growth of powerful new trading cities.',
      illustrativeExamples: ['Kashgar', 'Samarkand']
    },
    {
      code: 'KC-3.1.I.C.i',
      theme: 'Economic Systems',
      text: 'The growth of interregional trade in luxury goods was encouraged by innovations in previously existing transportation and commercial technologies, including the caravanserai, forms of credit, and the development of money economies.',
      illustrativeExamples: ['Bills of exchange', 'Banking houses', 'Use of paper money']
    },
    {
      code: 'KC-3.3.I.B',
      theme: 'Economic Systems',
      text: 'Demand for luxury goods increased in Afro-Eurasia. Chinese, Persian, and Indian artisans and merchants expanded their production of textiles and porcelains for export; manufacture of iron and steel expanded in China.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: 'The Silk Roads: Demand, Infrastructure, and Urban Growth',
    intro: 'This lesson is an economic causation lesson. Students should leave able to explain why Silk Roads trade expanded after 1200 and how that expansion changed production and trading cities.',
    videos: [
      {
        title: 'The SILK ROADS [AP World Review - Unit 2 Topic 1]',
        url: 'https://youtu.be/daiQ6aChKfk',
        youtubeId: 'daiQ6aChKfk',
        prompt: 'Watch for demand, commercial innovations, trading cities, production for export, and political conditions that reduced merchant risk.'
      }
    ],
    segments: [
      {
        title: 'The Big Argument',
        bullets: [
          '**Silk Roads trade expanded after 1200 because demand for luxury goods increased and merchants had better systems for moving goods and money.**',
          'The important AP move is not memorizing terms. Students must explain the mechanism: how each system lowered risk, cost, or distance problems.',
          'Relative **political stability and state protection** could further reduce merchant risk; under Mongol rule this supporting condition became especially important across large stretches of Eurasia.',
          'The result was greater trade volume, wider geographic reach, growth of trading cities, and expanded production for export.'
        ],
        image: {
          title: 'Silk Road routes across Afro-Eurasia',
          caption: 'The Silk Roads were a network of routes, nodes, markets, and stopping points, not one continuous road.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      },
      {
        title: 'Cause: Demand for Luxury Goods',
        bullets: [
          '**Luxury goods** were high-value products that were worth moving across long distances because elites were willing to pay for them.',
          'Chinese artisans and merchants expanded production of **porcelain** and textiles for export; Persian and Indian merchants expanded textile production; Chinese iron and steel production also expanded.',
          'Demand gave merchants the incentive to solve the problem of distance. Without demand, the network would not intensify.'
        ],
        image: {
          title: 'Chinese porcelain for export',
          caption: 'A blue-and-white plate made at the Jingdezhen kilns in the mid-1300s, under the Yuan. Porcelain like this shows both demand and expanded production for long-distance trade.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jingdezhen%20blue%20and%20white%20plate%20Yuan%20period%20mid%2014th%20century.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jingdezhen_blue_and_white_plate_Yuan_period_mid_14th_century.jpg'
        }
      },
      {
        title: 'Cause: Transportation and Commercial Systems',
        bullets: [
          '**Caravanserai** made overland trade more practical by providing rest, water, food, animal care, storage, protection, markets, and information.',
          '**Bills of exchange** and **banking houses** reduced the danger of carrying large amounts of money overland.',
          '**Paper money** and money economies made transactions easier, allowing trade to move through multiple cities and merchants.',
          'Political stability did not replace these systems, but it could make them work across wider areas by lowering the risk of conflict, banditry, and repeated political barriers.'
        ],
        image: {
          title: 'Caravanserai courtyard',
          caption: 'The Sa\'d al-Saltaneh caravanserai in Qazvin, Iran. This building dates from the 1800s, but it keeps the plan caravanserai had used along trade routes for centuries: they turned long journeys into manageable stages.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravanserai%20of%20Sa%27d%20al-Saltaneh%20in%20Qazvin.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravanserai_of_Sa%27d_al-Saltaneh_in_Qazvin.jpg'
        }
      },
      {
        title: 'Effect: Cities and Production Grew',
        bullets: [
          'Improved commercial practices increased trade volume and expanded the geographic range of the Silk Roads.',
          '**Kashgar** and **Samarkand** grew because they sat at strategic network nodes where merchants exchanged goods, money, languages, and information.',
          'The demand for luxury goods pushed producers in China, Persia, and India to expand production for export markets.'
        ],
        image: {
          title: 'Samarkand as a Silk Roads hub',
          caption: 'Samarkand matters because it is evidence that trade networks create powerful urban nodes.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Registan%20square%20Samarkand.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Registan_square_Samarkand.jpg'
        }
      }
    ]
  },

  map: {
    title: 'Silk Road Routes Across Afro-Eurasia',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg',
    caption: 'The overland Silk Roads connected East Asia, Central Asia, Southwest Asia, and the Mediterranean through a network of routes and cities.',
    intro: 'Use the map to show why Central Asian nodes mattered. Do not teach the map as a line to memorize. Teach it as a system of routes, stopping points, cities, commercial practices, and political jurisdictions.',
    prompt: 'Why would cities located at crossroads, oases, and route junctions become wealthy and powerful, especially when political conditions made movement safer?',
    notes: [
      'Kashgar and Samarkand were not random names; they were trade nodes where routes, merchants, services, and information converged.',
      'Geography shaped the network by forcing merchants through usable corridors across deserts, mountains, and steppe.',
      'The map helps students see why commercial infrastructure and credit systems mattered: distance created risk, and trade systems reduced that risk.',
      'Relative political stability could lower a different kind of risk. Topic 2.2 develops the Mongol example in depth.'
    ]
  },

  deepReading: {
    title: 'The Business of the Road',
    desc: 'A textbook-depth companion on how overland trade actually worked: caravanserai, commercial partnerships, credit, money, political conditions, production, and the cities that grew from exchange.',
    url: 'deep-reading-topic-2-1-silk-roads.html'
  },

  first10: {
    title: 'First & 10: Roads of Silk and Exchange',
    embedUrl: 'first-and-10-topic-2-1-silk-roads-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Proving the Silk Roads Argument',
    intro: 'Every piece of evidence should support the same claim: after 1200, demand and improved trade systems expanded overland exchange and changed cities and production.',
    prompt: 'Choose one piece of evidence and explain how it supports the claim that Silk Roads trade expanded after 1200.',
    items: [
      { title: 'Caravanserai', detail: 'Evidence that transportation infrastructure reduced the cost and risk of overland trade.' },
      { title: 'Bills of exchange and banking houses', detail: 'Evidence that commercial practices made long-distance transactions safer and easier.' },
      { title: 'Political stability and state protection', detail: 'Supporting evidence that lower political risk could help merchants move more predictably across larger stretches of the network.' },
      { title: 'Kashgar and Samarkand', detail: 'Evidence that increased trade promoted the growth of powerful trading cities.' },
      { title: 'Porcelain, textiles, iron, and steel', detail: 'Evidence that demand for luxury goods encouraged expanded production for export.' }
    ]
  },

  primarySource: {
    title: 'Primary Source: Marco Polo on Money and Exchange',
    intro: 'Marco Polo described paper money in the Yuan Dynasty. Use this as evidence of the commercial systems that helped large economies support exchange.',
    text: 'The Khan causes the bark of mulberry trees to be made into something like paper, but black. These pieces are issued with great solemnity, and merchants accept them throughout the Khan\'s dominions. With this paper money, people buy and sell all kinds of goods.',
    attribution: 'Adapted from Marco Polo, The Travels of Marco Polo, dictated c. 1298',
    questions: [
      'What commercial practice is described in this passage?',
      'How would paper money make trade easier than relying only on metal coins?',
      'How does this source support the claim that commercial practices helped trade expand?'
    ]
  }
};
