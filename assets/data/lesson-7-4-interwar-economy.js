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
    unit: "Unit 7: Global Conflict",
    topic: "Topic 7.4",
    title: "Economy in the Interwar Period",
    subtitle: "Four answers to one collapse: how democratic, fascist, communist, and popular-nationalist governments took a more active role in economic life after World War I and the Great Depression",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why governments took a more active role in economic life after World War I and the onset of the Great Depression.",
      kc: "KC-6.3.I.B",
      theme: "Economic Systems"
    },
    {
      target: "I can explain how the Soviet Union controlled its national economy through the Five-Year Plans and describe the repercussions for its population.",
      kc: "KC-6.3.I.A.i",
      theme: "Economic Systems"
    },
    {
      target: "I can compare government intervention in the economy across the New Deal, the fascist corporatist economy, and governments with strong popular support in Brazil and Mexico.",
      kc: "KC-6.3.I.B",
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can connect the exhaustion of total war and the 1929 stock market crash, unemployment, business failures, and collapsing global trade, to the end of hands-off government and the turn toward state intervention in economic life.",
      kc: "KC-6.3.I.B",
      theme: "Economic Systems"
    },
    {
      criteria: "I can use specific evidence, the first Five-Year Plan, rapid industrialization, forced collectivization, forced labor, and the famine in Ukraine, to explain how Soviet state control of the economy produced negative repercussions for the population.",
      kc: "KC-6.3.I.A.i",
      theme: "Economic Systems"
    },
    {
      criteria: "I can compare the New Deal, the fascist corporatist economy, and the state-led economies of Brazil and Mexico as ideologically distinct forms of government intervention responding to the same economic crisis.",
      kc: "KC-6.3.I.B",
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Economic Systems (ECN)",
      theme: "Economic Systems",
      text: "As societies develop, they affect and are affected by the ways that they produce, exchange, and consume goods and services.",
      illustrativeExamples: []
    },
    {
      code: "Unit 7: Learning Objective D",
      theme: "Learning Objective",
      text: "Explain how different governments responded to economic crisis after 1900.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.3.I.B",
      theme: "Economic Systems",
      text: "Following World War I and the onset of the Great Depression, governments began to take a more active role in economic life.",
      illustrativeExamples: [
        "Government intervention in the economy:",
        "The New Deal",
        "The fascist corporatist economy",
        "Governments with strong popular support in Brazil and Mexico"
      ]
    },
    {
      code: "KC-6.3.I.A.i",
      theme: "Economic Systems",
      text: "In the Soviet Union, the government controlled the national economy through the Five-Year Plans, often implementing repressive policies, with negative repercussions for the population.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Economy in the Interwar Period: Four Answers to One Crisis",
    intro: "Use these cards to track how the Great Depression ended the era of hands-off government, and how democratic, fascist, communist, and popular-nationalist states each answered the same collapse with a different kind of intervention.",
    videos: [
      {
        title: "Heimler's History, AP World Topic 7.4",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.4+Economy+in+the+Interwar+Period",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Crowd_outside_nyse.jpg",
        prompt: "Watch for why governments took a more active economic role after WWI and the Depression, the Soviet Five-Year Plans and their human cost, and the New Deal, fascist corporatist, and Brazilian/Mexican responses."
      }
    ],
    segments: [
      {
        title: "The Bill Comes Due",
        bullets: [
          "Topic 7.3's total war did not end when the guns stopped: it left Europe's economies **exhausted**, indebted, inflated, and dependent on American loans.",
          "In October 1929 the **stock market crash** triggered the **Great Depression**: mass **unemployment**, **business failures**, and **collapsing global trade** spread the disaster worldwide.",
          "The crisis killed the old answer. The era of **hands-off government** was over, after 1929 the question was no longer **whether** governments would intervene in economic life, but **how**."
        ],
        image: {
          title: "Crowd outside the New York Stock Exchange, October 1929",
          caption: "The crash that went global, solemn crowds gather on Wall Street as the market collapses in October 1929.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Crowd_outside_nyse.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Crowd_outside_nyse.jpg"
        }
      },
      {
        title: "The New Deal",
        bullets: [
          "**Franklin D. Roosevelt's New Deal** was the democratic answer in the United States: **relief, recovery, reform**.",
          "The **Social Security Act** built a permanent safety net; the **Works Progress Administration (WPA)** put millions directly on the government payroll building roads, schools, and public art.",
          "The New Deal did not end capitalism or democracy, it **permanently expanded government's role within them**, a lasting shift toward intervention inside a constitutional system."
        ],
        image: {
          title: "Signing of the Social Security Act, 1935",
          caption: "President Roosevelt signs the Social Security Act, the democratic state taking permanent responsibility for economic security.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Signing_Of_The_Social_Security_Act.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Signing_Of_The_Social_Security_Act.jpg"
        }
      },
      {
        title: "The Fascist Corporatist Economy",
        bullets: [
          "**Mussolini's Italy** built the **fascist corporatist economy**: the state organized **corporations** that partnered government with major industries, sector by sector.",
          "**Labor unions were curtailed** and absorbed into state-run syndicates, workers lost independent bargaining power in exchange for promised national unity.",
          "Fascist economics chased **self-sufficiency (autarky)** and **nationalist economic goals**, prestige projects and rearmament, at the cost of **individual rights**.",
          "Intervention here served the state, not the citizen: the corporatist economy was mobilization economics wearing a peacetime uniform."
        ],
        image: {
          title: "Benito Mussolini",
          caption: "Mussolini, architect of the fascist corporatist economy, state-organized industry in service of nationalist goals.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mussolini_biografia.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Mussolini_biografia.jpg"
        }
      },
      {
        title: "The Soviet Five-Year Plans",
        bullets: [
          "**Stalin's first Five-Year Plan (1928–1932)** put the entire national economy under state control, targeting **rapid industrialization** at any cost.",
          "**Forced collectivization** seized peasant land into state farms; **peasant resistance** was answered with deportation and **forced labor**.",
          "The result in Ukraine was catastrophic **famine**, the **Holodomor**, with millions dead while the state exported grain.",
          "The Plans built steel mills and dams on a staggering scale, but the pattern is the Key Concept's: **state control prioritizing output over human well-being**, with repressive policies and negative repercussions for the population."
        ],
        image: {
          title: "Joseph Stalin",
          caption: "Stalin, who placed the Soviet economy under total state control through the Five-Year Plans, industrialization purchased with repression and famine.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/JStalin_Secretary_general_CCCP_1942.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:JStalin_Secretary_general_CCCP_1942.jpg"
        }
      },
      {
        title: "Brazil & Mexico: State-Led Nationalism",
        bullets: [
          "The illustrative examples include **governments with strong popular support in Brazil and Mexico**, state-led intervention with a nationalist face.",
          "In Brazil, **Getúlio Vargas** built **state-owned enterprises** and pushed **import substitution industrialization (ISI)**, manufacturing at home what the country had imported.",
          "Mexico delivered the promises of its Revolution (Topic 7.1): sweeping **land reform** under Cárdenas, then the 1938 **oil nationalization** and the founding of **Pemex**, foreign companies out, national ownership in.",
          "Both governments tied economic intervention to **national pride and popular legitimacy**, a third path that was neither Washington's, Rome's, nor Moscow's."
        ],
        image: {
          title: "Emiliano Zapata, 1914",
          caption: "Zapata's demand, land to those who work it, from Topic 7.1's revolution, finally delivered at scale by Mexico's interventionist state in the 1930s.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Emiliano_Zapata,_1914.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Emiliano_Zapata,_1914.jpg"
        }
      },
      {
        title: "Four Answers to One Crisis",
        bullets: [
          "Line them up: **democratic** intervention (New Deal), **fascist** intervention (corporatist economy), **communist** intervention (Five-Year Plans), and **popular-nationalist** intervention (Brazil and Mexico).",
          "The similarity is the Key Concept: after WWI and the Depression, **every** government took a more active role in economic life.",
          "The differences are ideological: who controls the economy, who benefits, and what happens to rights, a ready-made **comparison** frame for essays.",
          "Foreshadow Topic 7.6: the Depression is not just an episode, it is itself a **cause of the next war**, the economic despair that extremism fed on. Keep the thread for the **7.9** causation capstone."
        ],
        image: {
          title: "Migrant Mother, 1936",
          caption: "Dorothea Lange's 'Migrant Mother', the human face of the crisis that forced every kind of government to answer the same question.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg"
        }
      }
    ]
  },

  map: {
    title: "Map: The Interwar World, c. 1936",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
    caption: "The world of the mid-1930s, empires, new states, and rival economic systems, all working through the same global depression.",
    intro: "Use the map to see why the Depression was global and the answers were national: a worldwide trading system collapsed together, but each state, the United States, Italy, the Soviet Union, Brazil, Mexico, answered inside its own borders and ideology.",
    prompt: "Locate the United States, Italy, the Soviet Union, Brazil, and Mexico. Each answered the same global depression with a different form of state intervention. What about each country's situation, political system, resources, recent history, helps explain why its answer took the form it did?",
    notes: [
      "**Global trade collapsed** after 1929, economies connected by exports, loans, and empire dragged each other down.",
      "The **United States** answered within democracy (New Deal); **Italy** within fascism (corporatist economy); the **Soviet Union** within communism (Five-Year Plans).",
      "**Brazil and Mexico** built state-led national economies with strong popular support, ISI, land reform, and oil nationalization.",
      "One crisis, four ideological answers, and everywhere, government took a **more active role in economic life**."
    ]
  },

  first10: {
    title: "First & 10: When the Money Stopped",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.4 lesson path."
  },

  images: [
    {
      title: "Crowd outside the New York Stock Exchange, October 1929",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Crowd_outside_nyse.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Crowd_outside_nyse.jpg",
      caption: "Wall Street, October 1929, the crash that triggered the global Depression.",
      prompt: "What does this photograph capture about the onset of the crisis, and why did a crash in New York become a worldwide depression?"
    },
    {
      title: "Migrant Mother, 1936",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg",
      caption: "Dorothea Lange's photograph of Florence Owens Thompson, commissioned by a New Deal agency to document the Depression.",
      prompt: "This image was made FOR the government (a New Deal documentary project). How does that sourcing shape what it shows, and what does it reveal about why governments felt compelled to act?"
    },
    {
      title: "Signing of the Social Security Act, 1935",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Signing_Of_The_Social_Security_Act.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Signing_Of_The_Social_Security_Act.jpg",
      caption: "FDR signs Social Security into law, democratic government taking a permanent role in economic life.",
      prompt: "How does this image document KC-6.3.I.B, governments taking 'a more active role in economic life', within a democracy rather than a dictatorship?"
    },
    {
      title: "Joseph Stalin",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/JStalin_Secretary_general_CCCP_1942.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:JStalin_Secretary_general_CCCP_1942.jpg",
      caption: "Stalin, the Five-Year Plans put the whole Soviet economy under state command.",
      prompt: "Pair this portrait with what you know of collectivization and the Holodomor: what did total state control of an economy cost the population it claimed to serve?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Reading the Crisis and the Responses",
    task: "Choose one image and explain what it reveals about the economic crisis after 1929 or about one government's response to it, and which ideology that response served.",
    prompt: "This image shows... It is evidence of [the crisis / democratic intervention / fascist intervention / communist intervention] because... It helps explain how governments responded to economic crisis because..."
  },

  primarySource: {
    title: "Primary Source: Franklin D. Roosevelt, First Inaugural Address (1933)",
    intro: "Roosevelt took office in March 1933 at the bottom of the Depression, a quarter of American workers unemployed, banks failing by the thousand. His first inaugural address announced that the federal government would now act in the economy on a scale never seen in peacetime. Notice the language he reaches for: the vocabulary of the total war you studied in Topic 7.3.",
    text: "This great Nation will endure as it has endured, will revive and will prosper... the only thing we have to fear is fear itself. This Nation asks for action, and action now. Our greatest primary task is to put people to work... It can be accomplished in part by direct recruiting by the Government itself, treating the task as we would treat the emergency of a war. I shall ask the Congress for the one remaining instrument to meet the crisis, broad Executive power to wage a war against the emergency, as great as the power that would be given to me if we were in fact invaded by a foreign foe.",
    questions: [
      "What new role does Roosevelt claim for the federal government in economic life, and what specific actions does he promise?",
      "Roosevelt repeatedly borrows the language of war, 'direct recruiting,' 'wage a war against the emergency.' How does this echo the total-war mobilization of Topic 7.3, and why would that vocabulary persuade his audience in 1933?",
      "Compare the power Roosevelt requests with the power Stalin or Mussolini simply took. What does that difference reveal about democratic versus authoritarian responses to the same crisis?"
    ]
  }
};
