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
    topic: "Topic 7.2",
    title: "Causes of World War I",
    subtitle: "How imperialist competition, territorial and regional conflicts, a flawed alliance system, and intense nationalism escalated one assassination into global war",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how imperialist expansion and competition for resources increased tensions among European powers.",
      kc: "KC-6.2.IV.B.i",
      theme: "Governance"
    },
    {
      target: "I can explain how territorial and regional conflicts combined with a flawed alliance system to escalate a regional crisis into a global war.",
      kc: "KC-6.2.IV.B.i",
      theme: "Governance"
    },
    {
      target: "I can explain how intense nationalism contributed to the outbreak of World War I.",
      kc: "KC-6.2.IV.B.i",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence such as the Scramble for Africa, the Berlin Conference, and Anglo-German rivalry to explain how competition for resources, markets, and strategic territory raised tensions among the great powers.",
      kc: "KC-6.2.IV.B.i",
      theme: "Governance"
    },
    {
      criteria: "I can trace the escalation chain from the Balkan crises and the assassination of Archduke Franz Ferdinand through the alliance commitments, Triple Alliance and Triple Entente, that turned a regional conflict into a global war.",
      kc: "KC-6.2.IV.B.i",
      theme: "Governance"
    },
    {
      criteria: "I can explain how intense nationalism, great-power pride, militarism, demonization of rivals, and self-determination movements in the Balkans, made war more likely and harder to stop.",
      kc: "KC-6.2.IV.B.i",
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
      code: "Unit 7: Learning Objective B",
      theme: "Learning Objective",
      text: "Explain the causes and consequences of World War I.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.B.i",
      theme: "Governance",
      text: "The causes of World War I included imperialist expansion and competition for resources. In addition, territorial and regional conflicts combined with a flawed alliance system and intense nationalism to escalate the tensions into global conflict.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Causes of World War I: The Powder Keg and the Spark",
    intro: "Use these cards to answer the question that drives this topic: why did one assassination in Sarajevo become a world war? Track the four causes the CED names, imperialist competition, territorial and regional conflicts, a flawed alliance system, and intense nationalism, and how they combined.",
    videos: [
      {
        title: "Heimler's History, AP World Topic 7.2",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.2+Causes+of+World+War+I",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
        prompt: "Watch for how imperialist competition, regional conflicts, the alliance system, and nationalism combined to escalate a regional crisis into global war."
      }
    ],
    segments: [
      {
        title: "Europe, 1914: The Powder Keg",
        bullets: [
          "The driving question of this topic: **why did one assassination become a world war?** A murder in Sarajevo killed two people; the war it triggered killed millions.",
          "Connect back to Topic 7.1: the **Ottoman collapse** you just studied left a power vacuum in the Balkans, the exact region where this lesson's crisis ignites.",
          "By 1914 Europe was primed: **imperial rivalry**, unresolved **territorial conflicts**, binding **alliances**, and **intense nationalism** had stacked the powder; the assassination was only the spark."
        ],
        image: {
          title: "European alliances, 1914",
          caption: "The European alliance blocs on the eve of war, a continent wired to explode.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_Europe_alliances_1914-en.svg"
        }
      },
      {
        title: "Imperialist Expansion & Competition for Resources",
        bullets: [
          "The **Scramble for Africa** set the great powers racing for colonies; the **Berlin Conference** (1884–1885) divided the continent on paper without a single African voice present.",
          "**Britain, France, and Germany** collided repeatedly over **raw materials, markets, and strategic territory**, Morocco twice nearly brought France and Germany to war (1905, 1911).",
          "Imperial competition taught a dangerous lesson: great-power status meant expansion, and a rival's gain was your loss, tension became the normal condition of European politics."
        ],
        image: {
          title: "The Rhodes Colossus",
          caption: "Punch's 1892 cartoon of Cecil Rhodes astride Africa, imperial ambition as the great powers' shared obsession.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png"
        }
      },
      {
        title: "Territorial & Regional Conflicts: The Balkans",
        bullets: [
          "Europeans called the Balkans the **'powder keg of Europe'**, the most dangerous square mileage on the continent.",
          "**Ottoman decline** (Topic 7.1) opened the region, and rising **Serb, Bulgarian, and Romanian nationalism** competed to fill it, with Austria-Hungary and Russia maneuvering behind the new states.",
          "The **Balkan Wars** (1912–1913) redrew the map twice in two years, leaving Serbia emboldened, Austria-Hungary alarmed, and every border contested, the regional conflict that would go global."
        ],
        image: {
          title: "European alliances, 1914",
          caption: "Southeastern Europe on the alliance map, small Balkan states wedged between Austria-Hungary, Russia, and the retreating Ottomans.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_Europe_alliances_1914-en.svg"
        }
      },
      {
        title: "The Spark: Sarajevo, June 1914",
        bullets: [
          "On 28 June 1914, **Gavrilo Princip**, a Bosnian Serb nationalist, assassinated **Archduke Franz Ferdinand**, heir to the Austro-Hungarian throne, in Sarajevo.",
          "Austria-Hungary blamed Serbia, issued an ultimatum designed to be refused, and **declared war on Serbia** on 28 July.",
          "On its own, this was a regional crisis, the third Balkan crisis in three years. What turned it into a world war was everything already in place around it."
        ],
        image: {
          title: "The assassination at Sarajevo",
          caption: "Achille Beltrame's contemporary illustration of the assassination of Archduke Franz Ferdinand, 28 June 1914, the spark in the powder keg.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/DC-1914-27-d-Sarajevo.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:DC-1914-27-d-Sarajevo.jpg"
        }
      },
      {
        title: "The Flawed Alliance System",
        bullets: [
          "Europe was split into two armed blocs: the **Triple Alliance** (Germany, Austria-Hungary, Italy) and the **Triple Entente** (France, Russia, Britain).",
          "**Secret commitments and mutual suspicion** meant no government knew exactly what its rivals, or its own allies, had promised.",
          "The alliances created a **mobilization chain reaction**: Russia backed Serbia, Germany backed Austria-Hungary and declared war on Russia and France, and Germany's invasion of Belgium brought in Britain, a regional conflict made **global** in one week of August 1914."
        ],
        image: {
          title: "European alliances, 1914",
          caption: "Triple Alliance vs. Triple Entente, the chain of commitments that turned a Balkan quarrel into a general European war.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_Europe_alliances_1914-en.svg"
        }
      },
      {
        title: "Intense Nationalism",
        bullets: [
          "**National pride fueled militarism**: Germany's naval buildup challenged Britain; France burned to avenge the loss of Alsace-Lorraine; armies and arms budgets swelled everywhere.",
          "Popular newspapers and politicians **demonized rival nations**, making compromise look like betrayal and war look like glory.",
          "In the Balkans, nationalism meant **self-determination movements**, South Slav nationalists like Princip wanted Bosnia out of Austria-Hungary and inside a greater Serbia; the empire saw that demand as an existential threat.",
          "Nationalism was the accelerant on every other cause: it made imperial rivalry prouder, regional conflicts fiercer, and alliances feel like sacred honor."
        ],
        image: {
          title: "The Rhodes Colossus",
          caption: "Imperial swagger in cartoon form, the same national pride that drove the Scramble for Africa drove the arms race of 1914.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png"
        }
      },
      {
        title: "Weighing the Causes: Powder vs. Spark",
        bullets: [
          "This topic is an exercise in **relative significance**: which cause was the powder and which was the spark?",
          "The assassination was the **immediate cause**, but a third Balkan crisis only became a world war because **imperial rivalry, regional conflict, alliances, and nationalism** had loaded the continent first.",
          "Practice ranking: was the **flawed alliance system** the decisive escalator, or could no alliance have survived that much nationalism and rivalry? Defend a position with evidence.",
          "Keep this frame, like 7.1's internal/external sort, it returns in **Topic 7.9**, the causation capstone for Unit 7."
        ],
        image: {
          title: "The assassination at Sarajevo",
          caption: "The spark, read against the powder: two deaths in Sarajevo, and a continent already primed to turn them into millions.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/DC-1914-27-d-Sarajevo.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:DC-1914-27-d-Sarajevo.jpg"
        }
      }
    ]
  },

  map: {
    title: "Map: The European Alliance System, 1914",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_Europe_alliances_1914-en.svg",
    caption: "Europe's rival alliance blocs on the eve of World War I, the Triple Alliance and the Triple Entente, with the Balkans wedged between empires.",
    intro: "Use the map to see why a regional crisis could not stay regional: two armed blocs faced each other across the continent, and the Balkan states sat in the most contested space in Europe.",
    prompt: "Find Serbia, Austria-Hungary, Russia, Germany, France, and Britain on the map. Using the alliance blocs shown, trace how a war between Austria-Hungary and Serbia could pull in every great power in Europe.",
    notes: [
      "The **Triple Alliance** bound Germany, Austria-Hungary, and Italy; the **Triple Entente** linked France, Russia, and Britain.",
      "The **Balkans** sat between Austria-Hungary, Russia, and the shrinking Ottoman Empire, small new states, big patron rivalries.",
      "Geography made Germany's war plans hinge on speed and Belgium, which is what ultimately brought **Britain** into the war.",
      "Alliances meant to deter war instead guaranteed that any war would be **general**, the 'flawed alliance system' of the CED."
    ]
  },

  first10: {
    title: "First & 10: The Powder Keg",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.2 lesson path."
  },

  images: [
    {
      title: "European alliances, 1914",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_Europe_alliances_1914-en.svg",
      caption: "The Triple Alliance and Triple Entente blocs on the eve of war.",
      prompt: "What does this map reveal about why a conflict between Austria-Hungary and Serbia could not stay a regional conflict?"
    },
    {
      title: "The Rhodes Colossus",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png",
      caption: "Punch cartoon (1892) of Cecil Rhodes spanning Africa, imperial ambition made visible.",
      prompt: "How does this cartoon serve as evidence that imperialist expansion and competition for resources raised tensions among European powers?"
    },
    {
      title: "The assassination at Sarajevo",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/DC-1914-27-d-Sarajevo.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:DC-1914-27-d-Sarajevo.jpg",
      caption: "Contemporary illustration of Gavrilo Princip's assassination of Archduke Franz Ferdinand, 28 June 1914.",
      prompt: "Why is this event best described as the spark rather than the cause of World War I? What evidence would you pair with this image to make that argument?"
    },
    {
      title: "Empires and colonies of the world, 1898",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1898_empires_colonies_territory.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1898_empires_colonies_territory.png",
      caption: "The colonial world the great powers were competing over at the turn of the century.",
      prompt: "Using this map, explain what European powers were actually competing FOR, and why that competition followed them home to Europe."
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Reading the Causes of War Through Evidence",
    task: "Choose one image and explain which cause of World War I it best documents, imperialist competition, territorial and regional conflict, the flawed alliance system, or intense nationalism, and how it escalated tensions toward global conflict.",
    prompt: "This image shows... It is evidence of [imperialist competition / regional conflict / the alliance system / nationalism] because... It helps explain the escalation to global war because..."
  },

  primarySource: {
    title: "Primary Source: The 'Blank Check' Telegram (July 1914)",
    intro: "Days after the assassination at Sarajevo, Austria-Hungary asked Berlin whether Germany would stand behind whatever action it took against Serbia. This adapted excerpt from the German reply of 6 July 1914, known ever since as the 'blank check', shows the alliance system doing exactly what made it so dangerous.",
    text: "His Majesty the Kaiser desires me to say that Austria-Hungary may rely upon Germany's full support. His Majesty will stand faithfully by Austria-Hungary, as is required by the obligations of his alliance and of his ancient friendship, whatever Austria-Hungary may decide regarding Serbia. The Kaiser does, however, believe that action should not be delayed: the present moment is more favorable than a later one.",
    questions: [
      "What exactly does Germany promise Austria-Hungary in this telegram, and what conditions, if any, are attached to that promise?",
      "How does this source illustrate the CED's phrase 'a flawed alliance system'? What incentive did the blank check give Austria-Hungary during the July Crisis?",
      "Consider purpose and situation: why might Germany's leaders have urged that 'action should not be delayed,' and how should that shape your reading of the document?"
    ]
  }
};
