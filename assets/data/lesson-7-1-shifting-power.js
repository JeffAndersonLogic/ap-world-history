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
    topic: "Topic 7.1",
    title: "Shifting Power After 1900",
    subtitle: "How internal and external factors brought down the Ottoman, Russian, and Qing empires, and how Mexico's revolution challenged the existing political and social order",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain the internal and external factors that caused the collapse of the Ottoman, Russian, and Qing empires.",
      kc: "KC-6.2.I.A",
      theme: "Governance"
    },
    {
      target: "I can explain how political crisis in Russia led to communist revolution in 1917.",
      kc: "KC-6.2.I.A",
      theme: "Governance"
    },
    {
      target: "I can explain how the Mexican Revolution challenged the existing political and social order.",
      kc: "KC-6.2.II.D",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can identify at least one internal factor and one external factor for each collapsing empire (Ottoman, Russian, Qing) and explain how the factors reinforced each other to bring the empire down.",
      kc: "KC-6.2.I.A",
      theme: "Governance"
    },
    {
      criteria: "I can trace the chain of political crisis in Russia, the Revolution of 1905, the February Revolution, the failure of the Provisional Government, and the October Revolution that brought Lenin and the Bolsheviks to power.",
      kc: "KC-6.2.I.A",
      theme: "Governance"
    },
    {
      criteria: "I can use specific evidence such as Porfirio Díaz's regime, Zapata and Villa, and the Constitution of 1917 to explain how the Mexican Revolution challenged the existing political and social order.",
      kc: "KC-6.2.II.D",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Governance (GOV)",
      theme: "Governance",
      text: "A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.",
      illustrativeExamples: []
    },
    {
      code: "Unit 7: Learning Objective A",
      theme: "Learning Objective",
      text: "Explain how internal and external factors contributed to change in various states after 1900.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.I",
      theme: "Governance",
      text: "The West dominated the global political order at the beginning of the 20th century, but both land-based and maritime empires gave way to new states by the century's end.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.I.A",
      theme: "Governance",
      text: "The older, land-based Ottoman, Russian, and Qing empires collapsed due to a combination of internal and external factors. These changes in Russia eventually led to communist revolution.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.II.D",
      theme: "Governance",
      text: "States around the world challenged the existing political and social order, including the Mexican Revolution that arose as a result of political crisis.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Shifting Power After 1900: When Empires Fall",
    intro: "Use these cards to track how the Western-dominated world order of 1900 began to crack, three land-based empires collapsing under combined internal and external pressure, and a revolution in Mexico challenging the existing political and social order.",
    videos: [
      {
        title: "Heimler's History, AP World Topic 7.1",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.1+Shifting+Power+After+1900",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png",
        prompt: "Watch for the internal and external factors behind the Ottoman, Russian, and Qing collapses, and for how the Mexican Revolution challenged the existing order."
      }
    ],
    segments: [
      {
        title: "The World in 1900",
        bullets: [
          "At the beginning of the 20th century, **the West dominated the global political order**, industrialized Western states controlled colonies, capital, and sea lanes on every continent.",
          "Three older **land-based empires**, the Ottoman, the Russian, and the Qing, were struggling to industrialize, reform, and hold restless populations together.",
          "Each empire faced the same dangerous combination: **internal factors** (ethnic tension, weak institutions, peasant misery, demands for reform) and **external factors** (foreign imperialism, military defeat, global war)."
        ],
        image: {
          title: "Empires and colonies of the world, 1898",
          caption: "A world map of empires and colonies on the eve of the 20th century, Western dominance of the global political order at its height.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1898_empires_colonies_territory.png"
        }
      },
      {
        title: "The Ottoman Collapse",
        bullets: [
          "**Ethnic tensions** strained the multiethnic empire as nationalist movements in the Balkans and Arab lands pulled away from Istanbul.",
          "The **Young Turks** seized power in 1908, demanding constitutional government and modernization, reform from within that came too late.",
          "**Defeat in World War I** shattered the empire; the victors carved up its Arab provinces.",
          "**Mustafa Kemal Atatürk** led a national resistance movement and proclaimed the **Republic of Turkey** in 1923, a new, secularizing nation-state on the ruins of a 600-year-old empire."
        ],
        image: {
          title: "Mustafa Kemal Atatürk",
          caption: "Atatürk, founder and first president of the Republic of Turkey (1923), the new state that replaced the Ottoman Empire.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/MustafaKemalAtaturk.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:MustafaKemalAtaturk.jpg"
        }
      },
      {
        title: "The Russian Collapse",
        bullets: [
          "The **Revolution of 1905**, sparked by defeat against Japan and the Bloody Sunday massacre, forced Tsar Nicholas II to accept a Duma, but real autocratic power never moved.",
          "World War I broke the regime: catastrophic casualties, food shortages, and collapsing morale produced the **February Revolution** of 1917, and Nicholas II abdicated.",
          "The **Provisional Government** failed, it stayed in the war and delayed land reform, losing the peasants, workers, and soldiers it needed.",
          "In the **October Revolution**, **Lenin** and the **Bolsheviks** seized power, promising 'Peace, Land, and Bread', political crisis had led to communist revolution."
        ],
        image: {
          title: "Demonstrators on Nevsky Prospekt, Petrograd, 1917",
          caption: "Street demonstrations in revolutionary Petrograd, 1917, the year political crisis brought down the Romanovs and brought the Bolsheviks to power.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:19170704_Riot_on_Nevsky_prosp_Petrograd.jpg"
        }
      },
      {
        title: "The Qing Collapse",
        bullets: [
          "**Foreign imperialism**, unequal treaties, spheres of influence, and military humiliation, drained Qing sovereignty from the outside.",
          "The **Boxer Rebellion** (1899–1901) tried to expel foreign influence; its defeat brought a crushing indemnity and deeper foreign control.",
          "The **Xinhai Revolution** of 1911 toppled the dynasty; the boy emperor Puyi abdicated in 1912.",
          "The collapse ended **two millennia of imperial rule** in China and opened a contested republican era shaped by **Sun Yat-sen** and his successors."
        ],
        image: {
          title: "The Boxer Rebellion",
          caption: "The Boxer Rebellion (1899–1901), internal upheaval and external intervention combining to weaken the Qing state in its final decade.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boxer_Rebellion.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Boxer_Rebellion.jpg"
        }
      },
      {
        title: "The Mexican Revolution (1910–1920)",
        bullets: [
          "**Porfirio Díaz** ruled Mexico for over three decades, delivering railroads and foreign investment while concentrating land and power in very few hands, a **political crisis** waiting to break.",
          "When Díaz rigged the 1910 election, revolution erupted; **Emiliano Zapata** ('Tierra y Libertad') fought for the landless peasants of the south while **Pancho Villa** led popular armies in the north.",
          "The **Constitution of 1917** challenged the existing political and social order: **land reform**, limits on the Church and foreign ownership, and labor rights stronger than almost anywhere in the world.",
          "Mexico shows the global pattern of KC-6.2.II.D, states around the world challenging the existing political and social order."
        ],
        image: {
          title: "Emiliano Zapata, 1914",
          caption: "Emiliano Zapata, leader of the agrarian revolution in southern Mexico, 'the land belongs to those who work it.'",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Emiliano_Zapata,_1914.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Emiliano_Zapata,_1914.jpg"
        }
      },
      {
        title: "Pattern Recognition: Internal vs. External Factors",
        bullets: [
          "Every collapse in this topic is a **causation** problem: no empire fell from a single blow, **internal factors** and **external factors** reinforced each other.",
          "Internal: ethnic tension, autocratic misrule, peasant land hunger, failed reform. External: foreign imperialism, military defeat, world war.",
          "Build the habit now of sorting causes into internal and external and explaining how they interact, this exact frame returns in **Topic 7.9**, the causation capstone for Unit 7."
        ],
        image: {
          title: "The imperial world order, 1898",
          caption: "The same map, read differently: by 1923 the Ottoman, Russian, and Qing empires on it were gone, replaced by new states.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1898_empires_colonies_territory.png"
        }
      }
    ]
  },

  map: {
    title: "Map: The Imperial World Order, c. 1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1898_empires_colonies_territory.png",
    caption: "Empires and colonies of the world at the close of the 19th century, the Western-dominated order that began to crack after 1900.",
    intro: "Use the map to see the world the 20th century inherited: Western maritime empires dominating the globe, with the older land-based Ottoman, Russian, and Qing empires stretched across Eurasia between them.",
    prompt: "Locate the Ottoman, Russian, and Qing empires on the map. What geographic pressures, neighbors, coastlines, foreign spheres of influence, help explain why these land-based empires were vulnerable to both internal unrest and external attack?",
    notes: [
      "Western industrial powers dominated the **global political order** in 1900, politically, militarily, and economically.",
      "The **Ottoman**, **Russian**, and **Qing** empires were enormous, multiethnic, land-based states wedged against ambitious rivals.",
      "Size was not strength: long borders, restless nationalities, and foreign spheres of influence made these empires hard to defend and harder to reform.",
      "Mexico sat in the shadow of United States economic power, foreign investment shaped the crisis that produced the **Mexican Revolution**."
    ]
  },

  first10: {
    title: "First & 10: When Empires Fall",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.1 lesson path."
  },

  images: [
    {
      title: "Empires and colonies of the world, 1898",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1898_empires_colonies_territory.png",
      caption: "The Western-dominated imperial order at the start of the 20th century.",
      prompt: "What does this map reveal about who held power in the global political order of 1900, and which empires were most exposed to pressure?"
    },
    {
      title: "The Boxer Rebellion",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boxer_Rebellion.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boxer_Rebellion.jpg",
      caption: "The Boxer Rebellion (1899–1901), an anti-foreign uprising whose defeat deepened foreign control over Qing China.",
      prompt: "Is this image better evidence of internal weakness or external pressure on the Qing empire? Can it be both?"
    },
    {
      title: "Demonstrators on Nevsky Prospekt, Petrograd, 1917",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:19170704_Riot_on_Nevsky_prosp_Petrograd.jpg",
      caption: "Crowds scatter under fire on Nevsky Prospekt, Petrograd, 1917, revolutionary Russia between the February and October revolutions.",
      prompt: "What does this street-level photograph reveal about the collapse of state authority in Russia during 1917?"
    },
    {
      title: "Emiliano Zapata, 1914",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Emiliano_Zapata,_1914.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Emiliano_Zapata,_1914.jpg",
      caption: "Emiliano Zapata, agrarian revolutionary, the demand for land reform at the heart of the Mexican Revolution.",
      prompt: "How does this image help explain what 'challenging the existing political and social order' meant in revolutionary Mexico?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Reading Collapse Through Evidence",
    task: "Choose one image and explain what it reveals about internal factors, external factors, or revolutionary challenges to the existing political and social order after 1900.",
    prompt: "This image shows... It is evidence of an [internal/external] factor because... It supports a claim about shifting power after 1900 because..."
  },

  primarySource: {
    title: "Primary Source: Lenin's April Theses (1917)",
    intro: "Lenin returned to Petrograd in April 1917, weeks after the February Revolution had toppled the tsar. While most revolutionaries accepted the new Provisional Government, Lenin demanded a second revolution. This adapted excerpt shows the argument that carried the Bolsheviks to power in October.",
    text: "The country is passing from the first stage of the revolution, which placed power in the hands of the bourgeoisie, to its second stage, which must place power in the hands of the proletariat and the poorest sections of the peasants. No support for the Provisional Government: the utter falsity of all its promises should be made clear. All power to the Soviets. The land must be transferred to the peasants, and the war, a predatory imperialist war, must be ended.",
    questions: [
      "What specific failures of the Provisional Government does Lenin target, and why would they resonate with peasants, workers, and soldiers in 1917?",
      "How does this source help explain why political crisis in Russia led to communist revolution rather than to stable constitutional government?",
      "What is Lenin's purpose and audience, and how should that shape how far we trust this source as a description of conditions in Russia?"
    ]
  }
};
