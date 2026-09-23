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
    title: 'Cultural Consequences of Connectivity',
    subtitle: 'How exchange networks moved beliefs and technologies, reshaped cities, and produced new travel accounts c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how expanding exchange networks spread cultural traditions and technological innovations across Afro-Eurasia.',
      kc: 'KC-3.1.III.D',
      theme: 'Cultural Developments and Interactions'
    },
    {
      target: 'I can explain why expanding trade networks produced both increased urbanization and periods of decline in connected cities.',
      kc: 'KC-3.3.II',
      theme: 'Cultural Developments and Interactions'
    },
    {
      target: 'I can explain why intensified exchange produced more written travel accounts and use Ibn Battuta, Margery Kempe, and Marco Polo as evidence.',
      kc: 'KC-3.1.III.C',
      theme: 'Cultural Developments and Interactions'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can use Buddhism, Hinduism, Islam, gunpowder, or paper to explain how a cultural tradition or technological innovation moved through an exchange network.',
      kc: 'KC-3.1.III.D',
      theme: 'Cultural Developments and Interactions'
    },
    {
      criteria: 'I can connect rising productivity and expanding trade to urban growth while recognizing that warfare, political change, or disrupted routes could also cause urban decline.',
      kc: 'KC-3.3.II',
      theme: 'Cultural Developments and Interactions'
    },
    {
      criteria: 'I can use Ibn Battuta, Margery Kempe, and Marco Polo to show how intensified connectivity increased travel and the written record of cross-cultural encounters.',
      kc: 'KC-3.1.III.C',
      theme: 'Cultural Developments and Interactions'
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
    title: 'Cultural Consequences: What Connectivity Changed',
    intro: 'This lesson is about consequences. As exchange networks intensified, beliefs and technologies crossed regions, connected cities grew or declined with changing trade conditions, and travelers left written accounts of a more interconnected Afro-Eurasian world.',
    videos: [
      {
        title: 'CULTURAL Effects of Connectivity [AP World Review—Unit 2 Topic 5]',
        url: 'https://youtu.be/buccc2fFw4U',
        youtubeId: 'buccc2fFw4U',
        prompt: 'Track three consequences of connectivity: diffusion, changing cities, and travel accounts.'
      }
    ],
    segments: [
      {
        title: 'Big Rock 1: Cultural Traditions Moved',
        bullets: [
          '**Buddhism** continued to shape East Asia and spread into Southeast Asia through merchant, pilgrim, and monastic networks connected to long-distance exchange.',
          '**Hinduism and Buddhism** influenced Southeast Asian societies, while **Islam** spread through merchant and scholarly networks into sub-Saharan Africa and across Asia.',
          'The AP reasoning move is diffusion: repeated contact through trade networks allowed beliefs and cultural practices to move far beyond their places of origin.'
        ],
        image: {
          title: 'Afro-Eurasian exchange routes',
          caption: 'Trade routes carried cultural traditions as well as commodities.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_Trade_%28c.1200_CE%29.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_Trade_%28c.1200_CE%29.jpg'
        }
      },
      {
        title: 'Big Rock 2: Technologies Moved',
        bullets: [
          '**Paper**, originating in China, moved west through exchange networks and made recordkeeping, administration, scholarship, and the circulation of written knowledge easier.',
          '**Gunpowder**, also developed in China, diffused across Afro-Eurasia and eventually transformed military technology far from its place of origin.',
          'The key idea is not a list of inventions. Connectivity accelerated the transfer and adaptation of scientific and technological knowledge between societies.'
        ],
        image: {
          title: 'Mongol-era Eurasian connectivity',
          caption: 'Political and commercial connections across Eurasia accelerated technological transfer.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg'
        }
      },
      {
        title: 'Big Rock 3: Connected Cities Rose and Fell',
        bullets: [
          'Expanding trade and rising productivity supported **urbanization** because merchants, artisans, services, and tax revenue concentrated at important network nodes.',
          'Cities tied to major routes could grow rapidly when trade intensified, but cities could also **decline** when warfare, political fragmentation, or changing routes disrupted the traffic that supported them.',
          'The CED point is variation: connectivity did not make every city grow forever. A city\'s fortunes depended on the strength and location of the networks around it.'
        ],
        image: {
          title: 'Indian Ocean port networks',
          caption: 'Ports and inland trading cities rose when expanding networks concentrated people, goods, and services.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      },
      {
        title: 'Big Rock 4: Travelers Documented the Connected World',
        bullets: [
          '**Ibn Battuta** traveled across North Africa, West Africa, the Indian Ocean world, South Asia, and China and recorded observations about the societies he encountered.',
          '**Marco Polo** described travel across Mongol-ruled Eurasia, while **Margery Kempe** recorded pilgrimage and travel across parts of Europe and the Mediterranean world.',
          'Their accounts are themselves evidence of intensified exchange: more people could move through long-distance networks, and some of those travelers created written records of cross-cultural contact.'
        ],
        image: {
          title: 'Travel through connected Afro-Eurasia',
          caption: 'Travel accounts turned movement through exchange networks into historical evidence.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      }
    ]
  },

  map: {
    title: 'Map: Networks of Cultural Diffusion, c. 1200–1450',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_Trade_%28c.1200_CE%29.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_Trade_%28c.1200_CE%29.jpg',
    caption: 'Overland and maritime exchange networks created corridors for cultural traditions, technologies, and travelers to move across Afro-Eurasia.',
    intro: 'Use the map as a network map rather than a route-memorization exercise. Trace how a belief, a technology, or a traveler could move through connected cities and regions.',
    prompt: 'Choose one cultural tradition, one technology, and one traveler. Which network made each movement possible, and what does that reveal about the consequences of connectivity?',
    notes: [
      'The **Silk Roads** linked East Asia, Central Asia, Southwest Asia, and the Mediterranean, enabling the movement of Buddhism, paper, gunpowder, and travelers such as Marco Polo.',
      'The **Indian Ocean network** connected East Africa, Arabia, South Asia, Southeast Asia, and China, helping Islam and other cultural traditions move with merchants and travelers such as Ibn Battuta.',
      'The **trans-Saharan routes** connected West Africa to North Africa and the wider Islamic world, helping Islam, scholarship, and travelers move across the desert.',
      'Cities located at network nodes could gain population and wealth, while cities bypassed or damaged by changing political and commercial conditions could decline.'
    ]
  },

  deepReading: {
    title: 'What Traveled Without Paying Freight',
    desc: 'A textbook-depth companion on cultural and technological diffusion, changing urban fortunes, and the travel accounts that reveal how connected Afro-Eurasia had become. Optional.',
    url: 'deep-reading-topic-2-5-cultural-consequences.html'
  },

  first10: {
    title: 'First & 10: Goods Were Never the Only Cargo',
    embedUrl: 'first-and-10-topic-2-5-cultural-consequences-capture.html?v=cargo-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Proving the Cultural Consequences of Connectivity',
    intro: 'Use evidence from the three required developments: diffusion, changing cities, and written travel accounts.',
    prompt: 'Choose one piece of evidence and explain how it demonstrates an intellectual or cultural consequence of expanding Afro-Eurasian exchange networks from c. 1200 to c. 1450.',
    items: [
      {
        title: 'Buddhism, Hinduism, and Islam',
        detail: 'Evidence that repeated movement through trade networks diffused cultural and religious traditions across East Asia, Southeast Asia, sub-Saharan Africa, and Asia.'
      },
      {
        title: 'Paper and Gunpowder from China',
        detail: 'Evidence that exchange networks transferred technologies and scientific knowledge across regional boundaries.'
      },
      {
        title: 'Urban Growth and Decline',
        detail: 'Evidence that the fate of cities depended on expanding productivity and trade but could reverse when political or commercial conditions changed.'
      },
      {
        title: 'Ibn Battuta, Margery Kempe, and Marco Polo',
        detail: 'Evidence that intensified exchange networks supported long-distance travel and produced more written accounts of cross-cultural encounters.'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: Ibn Battuta Describes the Port of Zaytun (Quanzhou)',
    intro: 'Ibn Battuta was one of the travelers whose writing survives because Afro-Eurasian exchange networks made long-distance movement increasingly possible. His description of Zaytun provides evidence both of urban connectivity and of the growing travel literature of the period.',
    text: '"The port of Zaytun is one of the largest in the world, or perhaps the very largest. I saw in it about a hundred large junks; as for small junks, they could not be counted for multitude. It is one of the greatest havens in the world for commerce."',
    attribution: 'Ibn Battuta, Rihla (translated as The Travels of Ibn Battuta, 1325–1354), describing the port of Zaytun (Quanzhou), 1345–1346',
    questions: [
      'What evidence in the passage shows that Zaytun was a major urban node in an expanding exchange network?',
      'How does Ibn Battuta\'s presence in China support the CED claim that intensified exchange produced more long-distance travelers?',
      'What can a travel account reveal about cross-cultural interaction, and what are its limitations as historical evidence?'
    ]
  }
};
