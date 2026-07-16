(() => {
  // brand lock IIFE — copy this block exactly:
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
    title: 'Environmental Consequences of Connectivity: Disease, Death, and Ecological Change',
    subtitle: 'How trade routes spread the Black Death and transformed ecosystems c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here — submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how trade routes spread epidemic disease across Afro-Eurasia, with a focus on the bubonic plague and the role of the Mongol trade network.',
      kc: 'KC-3.1.IV',
      theme: 'Environment and Geography'
    },
    {
      target: 'I can describe the demographic and social consequences of the Black Death in Eurasia and North Africa, including population loss, labor shortages, and challenges to traditional authority.',
      kc: 'KC-3.1.IV',
      theme: 'Social Structures'
    },
    {
      target: 'I can explain the ecological consequences of increased connectivity, including deforestation, agricultural intensification, and the movement of invasive species along trade routes.',
      kc: 'KC-3.1.IV',
      theme: 'Environment and Geography'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can trace the path of the bubonic plague from its origins in Central Asia to its spread across Eurasia and North Africa, naming at least one specific mechanism of transmission.',
      kc: 'KC-3.1.IV',
      theme: 'Environment and Geography'
    },
    {
      criteria: 'I can use specific evidence — population statistics, labor shortages, or social upheaval — to explain how the Black Death transformed societies across Eurasia.',
      kc: 'KC-3.1.IV',
      theme: 'Social Structures'
    },
    {
      criteria: 'I can identify at least two ecological changes associated with expanding trade networks and explain their long-term environmental significance.',
      kc: 'KC-3.1.IV',
      theme: 'Environment and Geography'
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
    title: 'Lecture: Disease, Death, and Ecological Transformation Along Trade Routes',
    intro: 'Connectivity had a dark side. The same networks that moved silk and spices also moved rats, fleas, and bacteria. Use these segments to understand how the Black Death traveled, what it destroyed, and how expanding trade permanently altered the ecology of Afro-Eurasia.',
    videos: [
      {
        title: 'ENVIRONMENTAL Effects of Connectivity [AP World History Review—Unit 2 Topic 6]',
        url: 'https://youtu.be/PKQzXPAAFBA',
        youtubeId: 'PKQzXPAAFBA',
        prompt: 'Track how crops and disease pathogens moved through exchange networks and transformed environments and populations.'
      }
    ],
    segments: [
      {
        title: 'How Disease Traveled Trade Routes',
        bullets: [
          '**Yersinia pestis**, the bacterium causing bubonic plague, was endemic in the rodent populations of the Central Asian steppe; the expansion of Mongol trade networks — the **Pax Mongolica** — brought human populations into closer contact with these disease reservoirs than ever before.',
          'Plague spread westward along overland routes by the 1340s, transmitted primarily by **fleas living on rats** that traveled with caravans and aboard merchant ships; once the disease reached the Black Sea ports of Caffa and Tana, Genoese trading ships carried it into the Mediterranean world.',
          'The speed of spread directly reflected the density of trade connections — regions most deeply integrated into the **Mongol trade network** were struck earliest and hardest, demonstrating that the same infrastructure enabling commercial prosperity could rapidly transmit catastrophe.'
        ],
        image: {
          title: 'Nile River from Space — NASA Composite',
          caption: 'Rivers and coastlines were the highways of medieval trade — and the corridors along which epidemic disease spread with terrifying speed into densely populated agricultural zones.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nile_composite_NASA.jpg'
        }
      },
      {
        title: "The Black Death's Devastating Impact",
        bullets: [
          'The **Black Death** (c. 1347–1353) killed an estimated **30–60% of the European population** and caused similar catastrophic mortality across the Middle East and parts of Central and East Asia — in some cities, more than half the population died within months.',
          '**Labor shortages** following the plague empowered surviving peasants and workers to demand higher wages and greater freedoms, accelerating the decline of serfdom in Western Europe and contributing to social upheaval — including the English Peasants\' Revolt of 1381.',
          'The plague **challenged traditional religious and political authority**: when the Church could neither explain nor stop the dying, popular faith in clerical institutions eroded; flagellant movements, anti-Jewish pogroms, and millennialist religious movements proliferated across a traumatized Europe.'
        ],
        image: {
          title: 'Silk Road Routes Across Afro-Eurasia',
          caption: 'The overland Silk Roads, invigorated by Mongol rule, served as the primary corridor through which bubonic plague traveled from its Central Asian reservoirs into the settled civilizations of Southwest Asia and Europe.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      },
      {
        title: 'Ecological Changes Along Trade Routes',
        bullets: [
          '**Deforestation** accelerated along trade routes as growing populations and expanding commerce demanded agricultural land and ship-building timber; coastlines from the Mediterranean to the Bay of Bengal were stripped of forest cover over the 12th–14th centuries.',
          'Agricultural **intensification** near trade hubs — especially in river valleys and coastal plains — depleted soils, altered local water cycles, and made agricultural communities more vulnerable to drought, flooding, and crop failure.',
          'Trade routes served as corridors for the movement of **invasive species**: plants, animals, and pathogens crossed ecological boundaries they could never have crossed naturally, permanently altering the biodiversity of regions from sub-Saharan Africa to East Asia — a process that would accelerate dramatically after 1492.'
        ],
        image: {
          title: 'World Map — Blue Sea Edition',
          caption: 'By c. 1350, the ecological footprint of Afro-Eurasian trade networks extended from the Atlantic coast of Morocco to the South China Sea, reshaping landscapes and species distributions across the entire connected world.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_Map_Blank_-_with_blue_sea.svg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_Map_Blank_-_with_blue_sea.svg'
        }
      }
    ]
  },

  map: {
    title: 'Map: The Spread of the Black Death from Central Asia, c. 1340–1353',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_composite_NASA.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nile_composite_NASA.jpg',
    caption: 'River valleys, coastlines, and overland trade corridors served as the pathways along which the Black Death spread from its Central Asian origins across Eurasia and into North Africa.',
    intro: 'The Black Death did not spread randomly — it followed the trade routes. Plague traveled from the steppes of Central Asia westward along Mongol roads, then jumped onto ships at Black Sea ports and moved through the Mediterranean with terrifying speed. Use this map to trace how geography shaped both the path and the pace of the epidemic.',
    prompt: 'Looking at the geography of river valleys and coastlines, where would you expect the Black Death to spread most quickly? What geographic features would have slowed or stopped its spread? How does the map evidence support the claim that trade routes were the primary mechanism of plague transmission?',
    notes: [
      'Plague originated in the **Central Asian steppe**, where Yersinia pestis was endemic in wild rodent populations; Mongol trade routes brought human travelers into sustained contact with these reservoirs.',
      'The disease reached the **Black Sea** ports of Caffa and Tana by c. 1346, likely transmitted during Mongol siege warfare; Genoese merchants then carried it into Sicily and the Mediterranean by 1347.',
      'The plague spread rapidly through **densely populated river valleys** — the Nile Delta, the Po Plain, the Rhine Valley — where urban populations had little prior exposure and no immunity.',
      'Sub-Saharan Africa and the Americas were largely spared in this outbreak, reflecting the limits of connectivity in c. 1350 — a stark contrast to the post-1492 world.'
    ]
  },

  first10: {
    title: 'First & 10: The World the Plague Remade',
    embedUrl: 'first-and-10-topic-2-6-environmental-consequences-capture.html'
  },

  evidenceLab: {
    title: 'Evidence Lab: Tracing the Environmental and Demographic Consequences of Connectivity',
    intro: 'The Black Death and other environmental consequences of trade connectivity left traces in chronicles, mortality statistics, economic records, and ecological data. Each piece of evidence below illuminates a different dimension of how expanded trade networks reshaped the natural and human world.',
    prompt: 'Choose one item from the evidence list. Explain: (1) what the evidence shows about the consequences of trade connectivity, (2) how it connects to one of the KC codes for Topic 2.6, and (3) what broader historical argument it supports.',
    items: [
      {
        title: 'The Siege of Caffa, 1346',
        detail: 'The Genoese chronicler Gabriele de\' Mussi describes how Mongol forces besieging the Black Sea port of Caffa catapulted plague-infected corpses over the city walls. Survivors fled by ship to Mediterranean ports, carrying the disease into the densely connected world of European trade. This event illustrates how military conflict along trade routes could accelerate the spread of epidemic disease.'
      },
      {
        title: 'European Population Loss, 1347–1353',
        detail: 'Modern demographic estimates suggest that Europe\'s population fell from approximately 75 million in 1340 to roughly 50 million by 1400 — a loss of one-third or more. Some regions fared worse: Florence lost perhaps half its population; some rural areas of southern France lost 60–70%. The plague\'s demographic impact created acute labor shortages that empowered surviving workers and accelerated the decline of feudal obligations across Western Europe.'
      },
      {
        title: 'Ibn Khaldun on the Plague in North Africa and the Middle East',
        detail: 'The North African historian Ibn Khaldun (1332–1406), who lost both parents to the plague, wrote: "Civilization both in the East and the West was visited by a destructive plague which devastated nations and caused populations to vanish. It swallowed up many of the good things of civilization and wiped them out." Egypt lost an estimated one-third of its population; Damascus and other major Syrian cities were devastated. Ibn Khaldun saw the plague as a civilizational rupture, not merely a medical event.'
      },
      {
        title: 'Deforestation in Mediterranean Trade Zones',
        detail: 'By c. 1300, the forests of the Mediterranean basin had been dramatically reduced by centuries of agricultural expansion and ship-building timber demand driven by trade. Coastal Lebanon, once famous for its cedars, was largely deforested. Italian merchant city-states sourced timber from increasingly distant regions. Deforestation contributed to soil erosion, altered local climates, and increased the vulnerability of agricultural communities to flooding and crop failure.'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: Giovanni Boccaccio Describes the Black Death in Florence, 1348',
    intro: 'Giovanni Boccaccio (1313–1375) was an Italian writer who survived the Black Death in Florence and described its effects in the preface to his famous work the Decameron. This adapted passage is one of the most vivid eyewitness accounts of the plague\'s social and demographic impact.',
    text: 'In the year of Our Lord 1348, there came to the noble city of Florence — the fairest of all the cities of Italy — a mortal pestilence. Whether it descended from the heavens or arose from our own actions, I cannot say. It began in the East and moved westward through every land it touched, sparing no city and no class of people. The signs of the disease were strange swellings, the size of an apple or an egg, which appeared under the armpits or in the groin. These were called gavocciolos. From these, the illness spread through the body and within three days the afflicted were dead. The mortality was so great in the city that the living could not bury the dead. Men who had been healthy in the morning were dead before nightfall. Neighbor fled from neighbor. Fathers abandoned their own children. The gravediggers, paid enormous sums, could barely keep pace. In the surrounding countryside, the poor and the peasants died like animals with no physician and no aid. Many villages stood entirely empty. I estimate that more than a hundred thousand souls died in the city of Florence alone from the month of March to the month of July in that terrible year.',
    questions: [
      'What specific details does Boccaccio provide about the physical symptoms of the plague and its speed of death? How do these details help explain why the disease caused such rapid social breakdown?',
      'What social behaviors does Boccaccio describe that suggest the plague challenged community bonds and traditional obligations? What does this reveal about the social consequences of the Black Death?',
      'What are the limitations of Boccaccio\'s account as a source for understanding the Black Death across all of Afro-Eurasia? What would a historian need to compare it against to get a complete picture?'
    ]
  }

};
