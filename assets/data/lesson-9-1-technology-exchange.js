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
    unit: "Unit 9: Globalization",
    topic: "Topic 9.1",
    title: "Advances in Technology and Exchange After 1900",
    subtitle: "How new technologies in communication, transportation, energy, agriculture, and medicine transformed the world — with both intended and unintended consequences",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how new communication and transportation technologies, radio, cellular communication, the internet, air travel, and shipping containers, reduced the problem of geographic distance after 1900.",
      kc: "KC-6.1.I.A",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how energy technologies and the Green Revolution raised productivity and sustained a growing global population, and identify their unintended consequences.",
      kc: "KC-6.1.I.D; KC-6.1.I.B",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how medical innovations and more effective forms of birth control changed survival, lifespan, and fertility patterns around the world.",
      kc: "KC-6.1.I.C; KC-6.1.III.B",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific examples, radio, cellular communication, the internet, air travel, and shipping containers, to explain how new technologies reduced the problem of geographic distance after 1900.",
      kc: "KC-6.1.I.A",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can explain how petroleum, nuclear power, high-yield crops, and chemical fertilizers raised productivity and sustained a growing global population, and I can identify at least one unintended consequence of each.",
      kc: "KC-6.1.I.D; KC-6.1.I.B",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can explain how vaccines, antibiotics, and more effective birth control changed survival rates, life expectancy, and fertility patterns, and connect these changes to global population trends.",
      kc: "KC-6.1.I.C; KC-6.1.III.B",
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Technology and Innovation (TEC)",
      theme: "Technology and Innovation",
      text: "Human adaptation and innovation have resulted in increased efficiency, comfort, and security, and technological advances have shaped human development and interactions with both intended and unintended consequences.",
      illustrativeExamples: []
    },
    {
      code: "Unit 9: Learning Objective A",
      theme: "Learning Objective",
      text: "Explain how the development of new technologies changed the world from 1900 to the present.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.I.A",
      theme: "Technology and Innovation",
      text: "New modes of communication, including radio communication, cellular communication, and the internet, as well as transportation, including air travel and shipping containers, reduced the problem of geographic distance.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.I.D",
      theme: "Technology and Innovation",
      text: "Energy technologies, including the use of petroleum and nuclear power, raised productivity and increased the production of material goods.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.III.B",
      theme: "Technology and Innovation",
      text: "More effective forms of birth control gave women greater control over fertility, transformed reproductive practices, and contributed to declining rates of fertility in much of the world.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.I.B",
      theme: "Technology and Innovation",
      text: "The Green Revolution and commercial agriculture increased productivity and sustained the earth’s growing population as it spread chemically and genetically modified forms of agriculture.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.I.C",
      theme: "Technology and Innovation",
      text: "Medical innovations, including vaccines and antibiotics, increased the ability of humans to survive and live longer lives.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Technology and Exchange: Distance Collapsed, Productivity Unleashed, Lives Transformed",
    intro: "Use these cards to trace how technologies in communication, transportation, energy, agriculture, and medicine reshaped the world after 1900, and how each carried both intended and unintended consequences.",
    videos: [
      {
        title: "Heimler's History — Topic 9.1: Advances in Technology and Exchange",
        url: "https://youtu.be/KNgRCS9LUDY",
        youtubeId: "KNgRCS9LUDY",
        prompt: "Use this clip to review how new technologies changed global connections after 1900, listen for examples of both intended benefits and unintended consequences."
      }
    ],
    segments: [
      {
        title: "Distance Collapsed: Communication and Transportation After 1900",
        bullets: [
          "By the 1920s, **radio communication** had connected audiences across entire nations for the first time, collapsing the distance between governments, markets, and ordinary households.",
          "**Cellular communication** and smartphones extended personal connectivity across borders by the late 20th century. The **internet** created a global information network by the 1990s, enabling instantaneous communication, commerce, and political organizing.",
          "**Commercial air travel** made international movement routine after the 1950s, turning journeys that once took weeks into hours.",
          "The **shipping container** (standardized in the 1960s) cut transportation costs and transit times dramatically, enabling the globalized supply chains that define modern trade.",
          "Together these technologies reduced the problem of geographic distance, connecting people, goods, and information across the world at speeds and scales never before possible."
        ],
        image: {
          title: "A container ship in port",
          caption: "The standardized shipping container, introduced in the 1960s, made global trade cheaper and faster, a quiet revolution that reshaped the world economy.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Container_ship_Hanjin_Taipei.jpg"
        }
      },
      {
        title: "Energy Technologies: Petroleum and Nuclear Power",
        bullets: [
          "The **internal combustion engine**, powered by **petroleum**, reshaped transportation, industry, and urban form across the 20th century. Oil became the world's most strategically important commodity.",
          "**Nuclear power** emerged as a mid-century alternative energy source, promising abundant electricity without carbon emissions, but carrying significant safety risks.",
          "The **Chernobyl disaster (1986)** in the Soviet Union exposed catastrophic safety failures and contaminated large areas of Ukraine and Belarus. **Fukushima (2011)** in Japan demonstrated that even technologically advanced nations faced nuclear risks.",
          "Energy technologies raised productivity and increased the production of material goods, but created dependence on finite resources and environmental consequences that continue to shape global politics."
        ],
        image: {
          title: "Oil refinery, 20th century",
          caption: "Petroleum powered the industrial economies of the 20th century, but created strategic dependencies and environmental consequences.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Oil_Refinery.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Oil_Refinery.jpg"
        }
      },
      {
        title: "The Green Revolution: Feeding a Growing World",
        bullets: [
          "The **Green Revolution** introduced **high-yield crop varieties**, chemical fertilizers, pesticides, and expanded irrigation to agriculture across the developing world from the 1960s onward.",
          "In **India**, the mass adoption of **Mexican dwarf wheat** (developed by Norman Borlaug) helped avert predicted famines. In **Mexico**, similar programs had already demonstrated dramatic yield gains.",
          "**Commercial agriculture** increased productivity and sustained the earth's growing population, global food production outpaced population growth for the first time in history.",
          "**Unintended consequences**: chemical dependence degraded soil and water; small farmers who could not afford new inputs were squeezed out by commercial agriculture; genetically modified monocultures reduced crop diversity and increased vulnerability to blight.",
          "The Green Revolution demonstrated the TEC thematic focus in miniature: a technology that achieved its intended purpose (feeding people) while generating unintended consequences that reshaped agriculture permanently."
        ],
        image: {
          title: "Norman Borlaug in a wheat field",
          caption: "Norman Borlaug's high-yield wheat varieties helped avert famine in India and Mexico, but the Green Revolution also concentrated agricultural power and increased chemical dependence.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Norman_Borlaug.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Norman_Borlaug.jpg"
        }
      },
      {
        title: "Medical Innovations: Vaccines, Antibiotics, and Longer Lives",
        bullets: [
          "**Vaccines** against polio, measles, smallpox, and other diseases dramatically reduced childhood mortality across the 20th century. The **WHO declared smallpox eradicated in 1980**, the first human disease eliminated by deliberate effort.",
          "**Antibiotics** (beginning with penicillin in the 1940s) transformed the treatment of bacterial infections, saving millions of lives and making modern surgery possible.",
          "Falling infant mortality and rising life expectancy contributed to **rapid population growth**, particularly in Asia and Africa, creating new pressures on resources, infrastructure, and governance.",
          "**Persistent global disparities**: medical innovations spread unevenly. Wealthier nations achieved near-universal vaccination and antibiotic access decades before many developing nations, producing stark inequalities in life expectancy."
        ],
        image: {
          title: "Polio vaccination campaign",
          caption: "Mass vaccination campaigns against polio and other diseases saved millions of lives, but access remained deeply unequal across regions.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polio_vaccine_poster.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Polio_vaccine_poster.jpg"
        }
      },
      {
        title: "Reproductive Technology and Demographic Change",
        bullets: [
          "**More effective forms of birth control**, including the oral contraceptive pill (approved in the U.S. in 1960), gave women **greater control over fertility** for the first time in history.",
          "Birth control **transformed reproductive practices**: women could delay childbearing, pursue education and employment, and plan family size, reshaping household economics and gender roles.",
          "The result was **declining rates of fertility in much of the world**, particularly in industrialized nations and urban areas. Total fertility rates fell below replacement level in much of Europe and East Asia by the late 20th century.",
          "Demographic implications were profound: aging populations in wealthy nations, continued growth in regions with less access to contraception, and shifts in the global distribution of working-age populations."
        ],
        image: {
          title: "Global fertility rate trends",
          caption: "More effective birth control contributed to declining fertility rates across much of the world, transforming demographic patterns and family structures.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_population_growth_rate_1950-2050.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_population_growth_rate_1950-2050.svg"
        }
      }
    ]
  },

  map: {
    title: "Global Technology and Exchange After 1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Container_ship_Hanjin_Taipei.jpg",
    caption: "Technologies in communication, transportation, energy, agriculture, and medicine connected and transformed the world after 1900.",
    intro: "Use the map to identify how new technologies reduced the problem of geographic distance and reshaped global connections. Consider which regions were connected first, which were connected last, and what technologies made each connection possible.",
    prompt: "Identify two regions on the map and explain how a specific technology from this topic changed the relationship between them after 1900.",
    notes: [
      "Radio, cellular communication, and the internet connected people across continents at increasing speeds throughout the 20th century.",
      "Air travel and shipping containers made the movement of people and goods faster and cheaper than at any previous point in history.",
      "The Green Revolution spread high-yield agriculture from Mexico and the Philippines to India and beyond, but unevenly.",
      "Medical innovations spread unevenly: wealthier nations achieved near-universal access decades before many developing nations."
    ]
  },

  first10: {
    title: "First & 10: Advances in Technology and Exchange",
    embedUrl: "first-and-10-topic-9-1-technology-exchange-capture.html?v=20260628"
  },

  images: [
    {
      title: "Early Radio Broadcast, 1920s",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Atwater_Kent_radio.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Atwater_Kent_radio.jpg",
      caption: "Radio brought news, entertainment, and government messages into millions of homes for the first time, collapsing the distance between states and citizens.",
      prompt: "How did radio change the relationship between governments and the people they governed? What new possibilities, and risks, did instant mass communication create?"
    },
    {
      title: "Green Revolution Wheat Field, India",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Norman_Borlaug.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Norman_Borlaug.jpg",
      caption: "Norman Borlaug's high-yield wheat varieties transformed Indian agriculture, but at the cost of chemical dependence and the displacement of smallholder farmers.",
      prompt: "What is the strongest evidence that the Green Revolution succeeded? What is the strongest evidence that it created problems it did not intend to create?"
    },
    {
      title: "Chernobyl Nuclear Power Plant",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chernobyl_nuclear_power_plant.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chernobyl_nuclear_power_plant.jpg",
      caption: "The Chernobyl disaster (1986) exposed the catastrophic risks of nuclear power, an energy technology that had promised abundant, clean electricity.",
      prompt: "How does Chernobyl illustrate the TEC thematic focus, that technological advances shape human development with both intended and unintended consequences?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Technology's Intended and Unintended Consequences",
    task: "Choose one image and explain what it reveals about how a specific technology changed the world after 1900, identifying both an intended benefit and an unintended consequence.",
    prompt: "This image shows... It is evidence of [choose: reduced geographic distance / raised productivity / changed survival patterns / transformed fertility] because... The intended benefit was... but the unintended consequence was..."
  },

  primarySource: {
    title: "Primary Source: Norman Borlaug's Nobel Prize Acceptance Speech (1970)",
    intro: "In 1970, Norman Borlaug received the Nobel Peace Prize for his work developing high-yield wheat varieties that helped avert predicted famines in India and Pakistan. In his acceptance speech, Borlaug acknowledged both the achievement and the challenges that remained, including population growth, environmental strain, and the risk that the Green Revolution's gains would be temporary if underlying problems were not addressed.",
    text: "We may be at the threshold of a new era in human history... But the 'Green Revolution' has won a temporary success in man's war against hunger and deprivation; it has given man a breathing space. If fully implemented, the revolution can provide sufficient food for sustenance during the next three decades. But the frightening power of human reproduction must also be curbed; otherwise the success of the Green Revolution will be ephemeral only.",
    questions: [
      "Borlaug calls the Green Revolution a 'temporary success' and a 'breathing space.' What does he mean, and what threat does he see beyond the immediate famine crisis?",
      "How does this source connect KC-6.1.I.B (the Green Revolution) to KC-6.1.III.B (birth control and declining fertility)? What relationship does Borlaug see between food production and population growth?",
      "A historian reading this source in 2025 would note that Borlaug's warning about 'the frightening power of human reproduction' has been partially answered by declining fertility rates. Does that make his warning wrong, or does it confirm his argument? Explain."
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Box That Changed Everything",
    desc: "A metal box, 20 feet long, that no one noticed, until it reshaped the entire world economy.",
    intro: "In 1956, a former trucking company owner named Malcom McLean loaded 58 aluminum containers onto a converted oil tanker in Newark, New Jersey.",
    detail: "Before standardized shipping containers, loading a single cargo ship could take a week. Longshoremen moved goods piece by piece, barrels, crates, sacks, boxes of different sizes, by hand. McLean's containers could be loaded by crane in minutes.",
    text: "In 1956, a former trucking company owner named Malcom McLean loaded 58 aluminum containers onto a converted oil tanker in Newark, New Jersey. Before standardized shipping containers, loading a single cargo ship could take a week. Longshoremen moved goods piece by piece, barrels, crates, sacks, boxes of different sizes, by hand and hand truck. McLean's insight was brutally simple: make every box the same size. His containers could be loaded by crane in minutes and transferred directly to trucks or trains without unpacking. By the 1970s, containerization had cut shipping costs by over 90% and destroyed the old dockworker economy overnight. A technology no one celebrated at the time quietly made globalized manufacturing possible.",
    prompt: "McLean's container is a technology that no one protested, no one celebrated, and no government debated, yet it reshaped the global economy more than most political decisions of the 20th century. What does this reveal about how technological change actually happens?"
  },

  skillBuilder: {
    label: "Causation practice",
    title: "Trace Intended and Unintended Consequences of Technology",
    intro: "The TEC thematic focus states that technological advances have shaped human development 'with both intended and unintended consequences.' This skill practice asks you to trace the causal chain from a technology's introduction to its intended effect and then to at least one unintended consequence that followed.",
    steps: [
      { label: "Technology", text: "Choose one technology from this topic: radio, the internet, shipping containers, petroleum, nuclear power, Green Revolution crops, vaccines, antibiotics, or birth control." },
      { label: "Intended Consequence", text: "Explain what the technology was designed to do and how it succeeded. Be specific: who benefited, and how did productivity, connectivity, or survival change?" },
      { label: "Unintended Consequence", text: "Explain one consequence that the technology's designers did not anticipate or intend. How did this consequence emerge from the same features that made the technology successful?" }
    ],
    prompt: "Write a causation paragraph that traces one technology from this topic through its intended consequence to at least one unintended consequence. Your paragraph should use specific evidence and explain the causal mechanism, not just list outcomes."
  }
};
