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
    topic: 'Topic 2.7',
    title: 'Comparison of Economic Exchange',
    subtitle: 'Comparing how the Silk Roads, Indian Ocean, and trans-Saharan networks solved similar exchange problems in different ways c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain similarities among the Silk Roads, Indian Ocean, and trans-Saharan networks in why trade expanded and what expanding exchange changed.',
      kc: 'KC-3.1 + KC-3.3',
      theme: 'Networks of Exchange'
    },
    {
      target: 'I can explain differences among the three networks in geography, transportation, commercial practices, and political support.',
      kc: 'KC-3.1.I.A.i + KC-3.1.I.C.i',
      theme: 'Networks of Exchange'
    },
    {
      target: 'I can compare how luxury demand and expanding exchange stimulated productive capacity and broader cultural, technological, and biological diffusion.',
      kc: 'KC-3.3.I.B + KC-3.1',
      theme: 'Networks of Exchange'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can state a meaningful similarity shared by all three networks and support it with specific evidence from at least two networks.',
      kc: 'KC-3.1',
      theme: 'Networks of Exchange'
    },
    {
      criteria: 'I can explain how different environments required different transportation or commercial solutions, such as caravanserai and credit on the Silk Roads, monsoon knowledge and maritime technology in the Indian Ocean, and camel saddles and caravans across the Sahara.',
      kc: 'KC-3.1.I.A.i + KC-3.1.I.C.i',
      theme: 'Networks of Exchange'
    },
    {
      criteria: 'I can connect demand and expanding trade to greater production, stronger trading cities or states, and wider diffusion across Afro-Eurasia.',
      kc: 'KC-3.3 + KC-3.3.I.B',
      theme: 'Networks of Exchange'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1',
      theme: 'Networks of Exchange',
      text: 'A deepening and widening of networks of human interaction within and across regions contributed to cultural, technological, and biological diffusion within and between various societies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.A.i',
      theme: 'Networks of Exchange',
      text: 'Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes, including the Silk Roads, promoting the growth of powerful new trading cities.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.C.i',
      theme: 'Networks of Exchange',
      text: 'The growth of interregional trade in luxury goods was encouraged by innovations in previously existing transportation and commercial technologies, including the caravanserai, forms of credit, and the development of money economies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.3',
      theme: 'Networks of Exchange',
      text: 'Changes in trade networks resulted from and stimulated increasing productive capacity, with important implications for social and gender structures and environmental processes.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.3.I.B',
      theme: 'Networks of Exchange',
      text: 'Demand for luxury goods increased in Afro-Eurasia. Chinese, Persian, and Indian artisans and merchants expanded their production of textiles and porcelains for export; manufacture of iron and steel expanded in China.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: 'One Exchange Problem, Three Different Systems',
    intro: 'Topic 2.7 should synthesize the unit rather than add a new pile of facts. All three networks expanded because demand made exchange profitable and people developed systems that reduced the cost and risk of distance. Geography determined which solutions worked best.',
    videos: [
      {
        title: 'AP World UNIT 2 REVIEW (Everything You NEED to KNOW!)',
        url: 'https://youtu.be/TPQQnXFsUmU',
        youtubeId: 'TPQQnXFsUmU',
        prompt: 'Compare each network using the same categories: environment, transportation, commercial practices, goods and demand, political support, and effects.'
      }
    ],
    segments: [
      {
        title: 'Big Similarity: All Three Reduced the Cost of Distance',
        bullets: [
          'The **Silk Roads, Indian Ocean, and trans-Saharan networks** all connected distant regions because merchants could earn profits from goods that were valuable enough to justify long-distance exchange.',
          'Each system depended on specialized knowledge, infrastructure, technology, and political or commercial arrangements that made movement safer, more predictable, or more efficient.',
          'As exchange intensified, all three networks helped deepen Afro-Eurasian cultural, technological, and biological diffusion.'
        ],
        image: {
          title: 'Three connected exchange systems',
          caption: 'Different surfaces, similar economic problem: make long-distance exchange possible and profitable.',
          url: '../assets/images/instructional-maps/topic-2-7.svg',
          sourceUrl: '../assets/images/instructional-maps/topic-2-7.svg'
        }
      },
      {
        title: 'Big Difference: Geography Changed the Solution',
        bullets: [
          'The **Silk Roads** crossed steppe, desert, and mountain terrain, so merchants relied on caravanserai, relay exchange, pack animals, and commercial practices such as credit and money economies.',
          'The **Indian Ocean** depended on knowledge of monsoon winds plus the compass, astrolabe, and larger ship designs, making maritime bulk transport more efficient over long distances.',
          'The **trans-Saharan network** depended on camel saddles, caravans, oases, and desert knowledge to make movement across the Sahara commercially viable.'
        ],
        image: {
          title: 'Environment shapes exchange',
          caption: 'Transportation technologies differed because each network faced a different physical environment.',
          url: '../assets/images/instructional-maps/topic-2-7.svg',
          sourceUrl: '../assets/images/instructional-maps/topic-2-7.svg'
        }
      },
      {
        title: 'Big Similarity: Trade Built Powerful Nodes and States',
        bullets: [
          'Silk Roads cities such as **Kashgar and Samarkand** grew where merchants, services, and routes converged.',
          'Indian Ocean commerce strengthened port cities and states such as the **Swahili Coast city-states, Gujarat, and Malacca**, while trans-Saharan trade strengthened **Mali** and important commercial centers in West Africa.',
          'Across all three networks, political authorities had incentives to protect, tax, and participate in trade because exchange generated wealth and connected rulers to wider economies.'
        ],
        image: {
          title: 'Networks create nodes',
          caption: 'Trade concentrated wealth where routes, ports, and political authority intersected.',
          url: '../assets/images/instructional-maps/topic-2-7.svg',
          sourceUrl: '../assets/images/instructional-maps/topic-2-7.svg'
        }
      },
      {
        title: 'Big Effect: Demand and Trade Increased Productive Capacity',
        bullets: [
          'Growing **luxury demand** encouraged Chinese, Persian, and Indian artisans and merchants to expand textile and porcelain production for export; Chinese iron and steel production also expanded.',
          'Trade networks did not simply redistribute existing goods. Expanding markets could stimulate producers to make more goods specifically for distant consumers.',
          'This is the unit-level economic chain: **demand + better exchange systems -> more trade -> stronger commercial nodes + greater productive capacity -> wider diffusion and environmental effects**.'
        ],
        image: {
          title: 'Demand changes production',
          caption: 'Expanding exchange networks stimulated production as well as movement.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      }
    ]
  },

  map: {
    title: 'Map: Comparing the Three Afro-Eurasian Exchange Networks',
    url: '../assets/images/instructional-maps/topic-2-7.svg',
    sourceUrl: '../assets/images/instructional-maps/topic-2-7.svg',
    caption: 'The Silk Roads, Indian Ocean, and trans-Saharan networks used different environments and technologies but together formed an increasingly connected Afro-Eurasian exchange system.',
    intro: 'Use the same questions for every network: What environment did merchants face? What technology or commercial practice reduced risk? What goods justified the trip? Which cities or states benefited? What cultural or environmental effects followed?',
    prompt: 'Choose two networks. Explain one meaningful similarity in how they expanded and one meaningful difference caused by geography or technology.',
    notes: [
      'Silk Roads: overland routes, caravanserai, credit and money economies, Kashgar and Samarkand.',
      'Indian Ocean: monsoon winds, maritime navigation and larger ships, port states and merchant diasporas.',
      'Trans-Saharan: camel saddle, caravans and oases, Mali and gold-salt exchange.',
      'All three: increased long-distance exchange, stronger commercial nodes, wider diffusion, and connections between demand and productive capacity.'
    ]
  },

  deepReading: {
    title: 'One System, Three Surfaces',
    desc: 'A textbook-depth companion that compares the three networks using one consistent framework: environment, transportation, commercial practice, demand, political support, productive capacity, and effects. Optional.',
    url: 'deep-reading-topic-2-7-comparison.html'
  },

  first10: {
    title: 'First & 10: Comparing the Networks',
    embedUrl: 'first-and-10-topic-2-7-comparison-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Build a CED-Level Comparison',
    intro: 'A strong comparison uses the same analytical categories across networks rather than listing unrelated facts.',
    prompt: 'Choose two networks. Explain one similarity and one difference using evidence about transportation, commercial practices, demand, state or city growth, productive capacity, or diffusion.',
    items: [
      { title: 'Silk Roads', detail: 'Caravanserai, credit, money economies, Kashgar and Samarkand, luxury demand, textiles, porcelain, iron, and steel.' },
      { title: 'Indian Ocean', detail: 'Monsoon knowledge, compass, astrolabe, larger ships, Swahili Coast states, Gujarat, Malacca, and diasporic merchant communities.' },
      { title: 'Trans-Saharan', detail: 'Camel saddle, caravans, oases, Mali, and long-distance gold-salt exchange.' },
      { title: 'Shared Consequences', detail: 'Expanded trade volume and range, growth of commercial nodes, cultural and technological diffusion, crop and pathogen movement, and increased productive capacity.' }
    ]
  },

  primarySource: {
    title: 'Primary Source: Pegolotti\'s Merchant Handbook on the Road to Cathay',
    intro: 'Francesco Balducci Pegolotti was a Florentine merchant-banker who compiled practical advice for merchants trading across Eurasia. His handbook is useful evidence for the commercial conditions that supported long-distance exchange.',
    text: '"The road you travel from Tana to Cathay is perfectly safe, whether by day or by night, according to what the merchants say who have used it."',
    attribution: 'Francesco Balducci Pegolotti, La Pratica della Mercatura, c. 1340',
    questions: [
      'What commercial condition does Pegolotti identify as important for long-distance trade?',
      'How would this condition compare with the environmental and technological conditions that supported Indian Ocean or trans-Saharan exchange?',
      'How could this source support a comparison argument about similarities and differences among Unit 2 trade networks?'
    ]
  }
};
