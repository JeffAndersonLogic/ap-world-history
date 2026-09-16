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
    topic: 'Topic 2.6',
    title: 'Environmental Consequences of Connectivity',
    subtitle: 'How exchange networks spread crops and pathogens across Afro-Eurasia c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how exchange networks diffused crops across Afro-Eurasia and changed food supplies, farming, and population patterns.',
      kc: 'KC-3.1.IV',
      theme: 'Humans and the Environment'
    },
    {
      target: 'I can explain how exchange networks spread epidemic disease, especially the bubonic plague, across connected regions.',
      kc: 'KC-3.1.IV',
      theme: 'Humans and the Environment'
    },
    {
      target: 'I can compare the environmental effects of crop diffusion and pathogen diffusion as two consequences of increased connectivity.',
      kc: 'KC-3.1.IV',
      theme: 'Humans and the Environment'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can use bananas in Africa, new rice varieties in East Asia, and citrus in the Mediterranean as evidence of crop diffusion through exchange networks.',
      kc: 'KC-3.1.IV',
      theme: 'Humans and the Environment'
    },
    {
      criteria: 'I can explain how the bubonic plague moved through trade routes and why increased connectivity accelerated its spread.',
      kc: 'KC-3.1.IV',
      theme: 'Humans and the Environment'
    },
    {
      criteria: 'I can explain one beneficial environmental effect of connectivity through crop diffusion and one destructive effect through pathogen diffusion.',
      kc: 'KC-3.1.IV',
      theme: 'Humans and the Environment'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1.IV',
      theme: 'Humans and the Environment',
      text: 'There was continued diffusion of crops and pathogens, with epidemic diseases, including the bubonic plague, along trade routes.',
      illustrativeExamples: ['Bananas in Africa', 'New rice varieties in East Asia', 'Spread of citrus in the Mediterranean']
    }
  ],

  lecture: {
    title: 'Connectivity Moves Living Things',
    intro: 'The environmental story of Topic 2.6 is simple: the same networks that moved merchants and goods also moved plants and pathogens. Crop diffusion could increase food supplies and support populations; pathogen diffusion could produce catastrophic demographic loss.',
    videos: [
      {
        title: 'ENVIRONMENTAL Effects of Connectivity [AP World History Review—Unit 2 Topic 6]',
        url: 'https://youtu.be/PKQzXPAAFBA',
        youtubeId: 'PKQzXPAAFBA',
        prompt: 'Track the two required categories: crop diffusion and pathogen diffusion.'
      }
    ],
    segments: [
      {
        title: 'The Big Argument: Networks Moved Biology',
        bullets: [
          'Expanding exchange networks connected ecosystems that had previously been separated by distance, allowing **crops and pathogens** to move with people, animals, and goods.',
          'The environmental effects were not all the same: new crops could raise agricultural productivity and diversify diets, while epidemic disease could sharply reduce populations.',
          'For AP World, the mechanism matters: greater movement and denser connections increased the speed and geographic range of biological diffusion.'
        ],
        image: {
          title: 'Afro-Eurasian exchange networks',
          caption: 'The same networks that moved goods also carried crops and pathogens.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      },
      {
        title: 'Big Rock 1: Crops Diffused',
        bullets: [
          '**Bananas in Africa** are evidence of crop diffusion through Indian Ocean connections; their spread supported agriculture in tropical regions of Africa.',
          '**New rice varieties in East Asia** increased agricultural productivity by allowing more dependable or expanded cultivation, supporting population growth and urbanization.',
          '**Citrus in the Mediterranean** shows how exchange networks moved useful food crops into new environments, changing diets and agricultural production.'
        ],
        image: {
          title: 'Indian Ocean connections',
          caption: 'Maritime exchange linked crop-producing regions across the Indian Ocean basin.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      },
      {
        title: 'Big Rock 2: Pathogens Diffused',
        bullets: [
          '**Bubonic plague** moved along interconnected overland and maritime trade routes in the 14th century, reaching cities across Eurasia and North Africa.',
          'Merchants, ships, caravans, rodents, and fleas all moved through the same connected commercial world; denser trade links helped disease spread across long distances.',
          'The Black Death caused enormous population loss and labor disruption, showing that stronger connectivity could transmit catastrophe as efficiently as commerce.'
        ],
        image: {
          title: 'Trade routes and plague transmission',
          caption: 'Pathogens moved through the same connected corridors used by merchants and goods.',
          url: '../assets/images/instructional-maps/topic-2-6.svg',
          sourceUrl: '../assets/images/instructional-maps/topic-2-6.svg'
        }
      },
      {
        title: 'The AP Comparison: Same Network, Opposite Effects',
        bullets: [
          'Crop diffusion could **increase productive capacity**, diversify diets, and support population growth in receiving regions.',
          'Pathogen diffusion could **reduce populations**, disrupt labor systems, and destabilize communities on a massive scale.',
          'Both outcomes came from the same underlying cause: intensified networks of exchange connected environments and populations more closely than before.'
        ],
        image: {
          title: 'Connectivity creates environmental consequences',
          caption: 'The environmental effect depended on what moved through the network.',
          url: '../assets/images/instructional-maps/topic-2-6.svg',
          sourceUrl: '../assets/images/instructional-maps/topic-2-6.svg'
        }
      }
    ]
  },

  map: {
    title: 'Map: Environmental Diffusion Through Afro-Eurasian Networks',
    url: '../assets/images/instructional-maps/topic-2-6.svg',
    sourceUrl: '../assets/images/instructional-maps/topic-2-6.svg',
    caption: 'Trade corridors connected regions closely enough for both useful crops and epidemic disease to move across Afro-Eurasia.',
    intro: 'Use the map to connect geography to biological diffusion. The routes that linked cities, ports, and caravan networks moved living organisms as well as manufactured goods.',
    prompt: 'Why would the same exchange network be able to spread both a useful crop and a deadly pathogen? What determines the environmental consequence?',
    notes: [
      'Indian Ocean connections helped move crops such as **bananas** into Africa and **citrus** around the Mediterranean and adjoining exchange zones.',
      'Agricultural diffusion, including **new rice varieties in East Asia**, could increase productive capacity and support population growth.',
      'The **bubonic plague** moved across connected trade corridors in the 14th century, showing how mobility accelerated pathogen diffusion.',
      'Do not reduce Topic 2.6 to the Black Death. The CED requires both **crop diffusion and pathogen diffusion**.'
    ]
  },

  deepReading: {
    title: 'The Cargo Nobody Ordered',
    desc: 'A textbook-depth companion on how crops and pathogens moved through exchange networks, why new foods could increase productive capacity, and why plague turned connectivity into demographic catastrophe. Optional.',
    url: 'deep-reading-topic-2-6-environmental-consequences.html'
  },

  first10: {
    title: 'First & 10: Crops, Pathogens, and Connected Environments',
    embedUrl: 'first-and-10-topic-2-6-environmental-consequences-capture.html?v=response-id-fix-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Environmental Consequences of Connectivity',
    intro: 'Every item belongs to one of the two CED categories for Topic 2.6: crop diffusion or pathogen diffusion.',
    prompt: 'Choose one crop example and one pathogen example. Explain how exchange networks moved each one and compare their environmental or demographic effects.',
    items: [
      {
        title: 'Bananas in Africa',
        detail: 'Evidence of crop diffusion through long-distance exchange. Bananas became an important food crop in tropical African regions and supported agricultural productivity.'
      },
      {
        title: 'New Rice Varieties in East Asia',
        detail: 'Evidence that crop transfer could increase productive capacity, food supply, and the ability of societies to support larger populations.'
      },
      {
        title: 'Citrus in the Mediterranean',
        detail: 'Evidence that trade networks moved food crops into new ecological zones and diversified regional agriculture and diets.'
      },
      {
        title: 'Bubonic Plague',
        detail: 'Evidence that intensified networks also spread pathogens, with 14th-century trade connections accelerating epidemic disease across Eurasia and North Africa.'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: Giovanni Boccaccio Describes the Black Death in Florence, 1348',
    intro: 'Boccaccio survived the Black Death in Florence. His account shows the human consequences of pathogen diffusion after plague moved through the connected trade networks of Afro-Eurasia.',
    text: '"In the year of Our Lord 1348, there came to the noble city of Florence, the fairest of all the cities of Italy, a mortal pestilence. Whether it descended from the heavens or arose from our own actions, I cannot say. It began in the East and moved westward through every land it touched, sparing no city and no class of people. The signs of the disease were strange swellings, the size of an apple or an egg, which appeared under the armpits or in the groin. These were called gavocciolos. From these, the illness spread through the body and within three days the afflicted were dead. The mortality was so great in the city that the living could not bury the dead. Men who had been healthy in the morning were dead before nightfall. Neighbor fled from neighbor. Fathers abandoned their own children. The gravediggers, paid enormous sums, could barely keep pace. In the surrounding countryside, the poor and the peasants died like animals with no physician and no aid. Many villages stood entirely empty. I estimate that more than a hundred thousand souls died in the city of Florence alone from the month of March to the month of July in that terrible year."',
    attribution: 'Giovanni Boccaccio, preface to the Decameron, describing the Black Death in Florence, 1348',
    questions: [
      'What details in Boccaccio\'s account demonstrate the demographic effects of epidemic disease?',
      'How does this source help explain the destructive environmental consequences of increased connectivity?',
      'Why must historians combine this source with evidence about crop diffusion to explain the full CED scope of Topic 2.6?'
    ]
  }
};
