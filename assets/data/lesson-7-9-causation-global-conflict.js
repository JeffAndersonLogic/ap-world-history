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
    topic: "Topic 7.9",
    title: "Causation in Global Conflict",
    subtitle: "The unit's synthesis and skill capstone: historians don't just list causes of global conflict, they weigh them, and 'relative significance' means arguing that some causes mattered more than others. Build, rank, and defend your own causal argument across all of Unit 7.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can identify the major causes of global conflict in the period from 1900 to the present, including technological, political, economic, and social factors.",
      kc: "Unit 7: Learning Objective I",
      theme: "Causation"
    },
    {
      target: "I can evaluate the relative significance of the causes of World War I and World War II using evidence from across Unit 7.",
      kc: "Unit 7: Learning Objective I",
      theme: "Causation"
    },
    {
      target: "I can construct and defend a historical argument that ranks causes by significance, distinguishing underlying causes from immediate triggers.",
      kc: "Unit 7: Learning Objective I",
      theme: "Causation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name at least three major causes of global conflict, technological, political, economic, and social, and connect each to specific evidence from Unit 7 topics.",
      kc: "Unit 7: Learning Objective I",
      theme: "Causation"
    },
    {
      criteria: "I can compare the causes of World War I and World War II, explain what they shared, and identify what was distinct about each conflict's causal chain.",
      kc: "Unit 7: Learning Objective I",
      theme: "Causation"
    },
    {
      criteria: "I can write a defensible claim that ranks causes by relative significance, using weighing language (most significant because, underlying cause, immediate trigger, necessary condition, more significant than) and specific evidence from at least three Unit 7 topics.",
      kc: "Unit 7: Learning Objective I",
      theme: "Causation"
    }
  ],

  collegeBoardKeyConcepts: [],

  lecture: {
    title: "Causation in Global Conflict: Weighing What Mattered Most",
    intro: "These cards are a synthesis of Unit 7, not new content. Each card names the topics it draws from, recaps the key evidence, and frames the causation question you will argue in the Causation Matrix. The goal is not to decide what caused global conflict, the CED already gave you thirteen Key Concepts for that. The goal is to argue which causes mattered most.",
    videos: [
      {
        title: "Heimler's History, AP World Topic 7.9 / Unit 7 Causation",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.9+causation+global+conflict",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
        prompt: "Watch for how Heimler frames 'relative significance', the AP skill that asks you to rank causes, not just list them. Look for how he distinguishes underlying causes (long-term structural factors) from immediate triggers, and how he connects evidence from different topics into a single causal argument."
      }
    ],
    segments: [
      {
        title: "The Capstone Question",
        bullets: [
          "You have studied seven topics in Unit 7, from the collapse of empires in **Topic 7.1** to conducting World War II in **Topic 7.7.** This lesson asks a different question: not **what** caused global conflict, but **which causes mattered most.**",
          "The Learning Objective is **Unit 7 LO I**: 'Explain the **relative significance** of the causes of global conflict in the period 1900 to the present.' Relative significance means making an **argument**, historians don't just list causes, they rank them.",
          "The CED itself modeled this once. Look at the **WWII Key Concept** (Topic 7.6 callback): 'the causes of World War II included… and **especially** the rise to power of fascist and totalitarian regimes.' The word **especially** is a significance claim. Your job in this capstone is to build your own.",
          "Two vocabulary moves: **underlying causes**, long-term structural factors that created conditions for conflict, versus **immediate triggers**, the specific events that set conflict in motion. Both appear in the evidence, but they don't carry equal weight in a strong argument."
        ],
        image: {
          title: "World War II, montage of the global conflict",
          caption: "Unit 7 synthesis: from empire collapse to total war, six topics of evidence now become the raw material for a single causal argument about relative significance.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png"
        }
      },
      {
        title: "Technology as a Cause",
        bullets: [
          "The **KC-6.1 family** names technology first: 'rapid advances in science and technology… led to advances in communication, transportation, industry, agriculture, and medicine', and critically, to **new military capability.** (Topics 7.3 and 7.7)",
          "Recall **Topic 7.3**: **machine guns**, **chemical weapons**, **tanks**, and **aircraft** transformed World War I from a cavalry war into a trenches-and-attrition war. Technology didn't cause WWI, but it determined the war's scale and killing power.",
          "Recall **Topic 7.7**: the **atomic bomb** and **fire-bombing** drove WWII casualties beyond even WWI. **Radio and telegraph** enabled propaganda to reach mass populations and coordinated military operations across continents.",
          "The analytical question: does technology **cause** conflict, or does it **escalate** it? Most historians argue technology is an escalating force more than an originating cause, but escalation can be decisive. Carry that question into the Causation Matrix."
        ],
        image: {
          title: "Atomic bombing of Nagasaki, 1945",
          caption: "The atomic bomb, new military technology that drove wartime casualties to unprecedented levels, asking whether technology causes conflict or simply escalates it.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagasakibomb.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Nagasakibomb.jpg"
        }
      },
      {
        title: "Challenges to the Political and Social Order",
        bullets: [
          "**KC-6.2** frames the broadest claim: 'peoples and states around the world challenged the existing political and social order in varying ways, leading to **unprecedented worldwide conflicts.**' (Topics 7.1 and 7.6)",
          "Recall **Topic 7.1**: the **Russian Revolution of 1917**, communist revolution replacing tsarist autocracy, and the **Mexican Revolution** as challenges that produced or fueled regional and global conflict. Both are named explicitly in the Key Concepts.",
          "Recall **Topic 7.6**: the **rise of fascist and totalitarian regimes**, Hitler's Nazi Germany, Mussolini's Italy, militarist Japan, challenges to the liberal international order that the CED describes as **'especially'** significant for WWII.",
          "These political disruptions weren't just internal, they **destabilized international relations**, drew in other powers, and reordered global alignments. They are both causes of conflict and contexts that made other causes more dangerous."
        ],
        image: {
          title: "Adolf Hitler, c. 1933",
          caption: "The rise of fascist and totalitarian regimes, the CED's own significance claim ('especially') marks this as the weightiest cause of WWII in the Key Concept.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg"
        }
      },
      {
        title: "The Collapse of Empires",
        bullets: [
          "**KC-6.2.I** names the structural shift: 'land-based and maritime empires gave way to new states by the century's end.' Empire collapse was a **cause of conflict**, not just a consequence. (Topics 7.1, 7.2, and 7.5)",
          "Recall **Topics 7.1 and 7.2**: the collapse of the **Ottoman**, **Russian**, and **Qing** empires created power vacuums and border disputes. The **Balkans**, Ottoman collapse territory, became the powder keg that the Sarajevo assassination ignited.",
          "Recall **Topic 7.5**: the **mandate system** after WWI redistributed imperial territory, left promises unkept (Arab independence), drew borders badly, and left new states without the resources or recognition to succeed. These unresolved tensions were **direct causes of WWII**.",
          "Underlying cause or immediate trigger? Empire collapse is deeply **underlying**, decades-long processes of imperial overextension and nationalist resistance. That makes it one of the strongest candidates for 'most significant cause' in a long-arc argument."
        ],
        image: {
          title: "World empires and territories, c. 1936",
          caption: "The world in 1936, imperial competition still covering much of the globe while the Ottoman, Russian, and Qing empires had already collapsed, leaving power vacuums and unresolved tensions.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG"
        }
      },
      {
        title: "Economic, Political, and Social Factors",
        bullets: [
          "**KC-6.2.IV** provides the umbrella claim: 'global conflicts were influenced by **economic, political, and social factors.**' The WWII Key Concept elaborates: 'the **unsustainable peace settlement** after World War I, the **global economic crisis** engendered by the Great Depression, **continued imperialist aspirations**, and especially the rise of fascist and totalitarian regimes.' (Topics 7.4, 7.5, and 7.6)",
          "Recall **Topics 7.4 and 7.5**: the **Versailles settlement** imposed reparations and humiliation on Germany. The **Great Depression** (Topic 7.4) collapsed economies, destabilized governments, and created the conditions in which extremist parties rose to power.",
          "Recall **Topic 7.2**: **imperialist expansion and competition for resources**, a **flawed alliance system** that turned a regional conflict global, and **intense nationalism**, the WWI Key Concept names all three. These factors didn't disappear between wars.",
          "Notice the **braiding**: the Depression fueled the rise of fascism → fascist regimes pursued imperialist aspirations → those aspirations caused WWII. A strong significance argument traces the braid and explains which link in the chain carried the most weight."
        ],
        image: {
          title: "Treaty of Versailles, English version",
          caption: "The Versailles settlement, an 'unsustainable peace' the CED names as one cause of WWII, braided together with the Depression, imperialist ambitions, and the rise of fascist regimes.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Treaty_of_Versailles,_English_version.jpg"
        }
      },
      {
        title: "How to Argue Significance",
        bullets: [
          "A **defensible claim** on relative significance doesn't just name causes, it **ranks them and explains the ranking.** Model claim: 'The rise of fascist and totalitarian regimes was the most significant cause of global conflict in this period because it transformed underlying economic and political instability into active, militaristic aggression.'",
          "Then **weigh** with precision: distinguish **underlying causes** (long-term structural factors, imperial competition, nationalism, empire collapse, economic crisis) from **immediate triggers** (the Sarajevo assassination, the German invasion of Poland). Underlying causes typically carry more weight in a long-arc historical argument.",
          "Use **weighing language**: 'more significant than,' 'enabled by,' 'necessary condition,' 'contributing factor,' 'most significant because.' Avoid 'equally important', that is not an argument. Strong arguments take a position and defend it.",
          "You will disagree with each other here, and that is the point. The **Causation Matrix** in Module 09 will ask you to rank and justify. There is no single correct ranking, **argument quality** is what is assessed, not the ranking itself. Support your claim with specific evidence from at least three topics in this unit."
        ],
        image: {
          title: "World War II, montage of the global conflict",
          caption: "Six topics of evidence, one capstone argument, relative significance asks which causes mattered most and why, not which ones existed.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png"
        }
      }
    ]
  },

  map: {
    title: "Map: The World on the Eve of Global Conflict, c. 1936",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
    caption: "The world in 1936, imperial territories, alliance pressures, and fascist states. Use this map as a synthesis tool: locate the key actors, empires, and regions that appear across all seven Unit 7 topics.",
    intro: "This capstone uses the map as a synthesis tool, not a content delivery tool. Locate the actors and regions across all seven Unit 7 topics: where did empires collapse? Where did nationalist movements rise? Where did the Depression hit hardest? Where did fascist regimes come to power and expand?",
    prompt: "Using evidence from at least three Unit 7 topics, identify two regions on this map and explain what causal factors visible in the geography contributed most to the global conflicts of the 20th century. Then rank the two causes you identified by relative significance.",
    notes: [
      "**Empire collapse** (Topic 7.1): The Ottoman, Russian, and Qing empires are gone from this map. Their absence created power vacuums that filled with nationalist movements, new states, and competing imperial claims, all contributing causes of global conflict.",
      "**Imperialist competition** (Topics 7.2, 7.5): European empires still cover much of Africa and Asia. That competition for resources drove alliances, rivalries, and the escalation of regional crises into world wars.",
      "**Fascist expansion** (Topics 7.6, 7.7): By 1936, Nazi Germany was rearming, Mussolini had invaded Ethiopia, and Japan had seized Manchuria. The map's borders are about to shift violently.",
      "**The League of Nations** (Topic 7.5): Every state on this map was nominally covered by an international order meant to prevent global conflict. Its failure to do so is itself a cause worth ranking."
    ]
  },

  first10: {
    title: "First & 10: Weighing What Mattered Most",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.9 lesson path."
  },

  images: [
    {
      title: "Atomic bombing of Nagasaki, 1945",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagasakibomb.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nagasakibomb.jpg",
      caption: "New military technology, the atomic bomb and fire-bombing put civilians in the target zone and drove wartime casualties to unprecedented levels.",
      prompt: "Does military technology CAUSE global conflict, or does it ESCALATE conflicts that are already happening for other reasons? Use evidence from Topics 7.3 and 7.7 to support your answer, and then rank: is technology an underlying cause or an immediate trigger?"
    },
    {
      title: "Adolf Hitler, c. 1933",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
      caption: "The rise of fascist and totalitarian regimes, the CED calls this 'especially' the cause of WWII, marking it with a significance claim built into the Key Concept itself.",
      prompt: "The CED uses 'especially' to rank the rise of fascist regimes above other WWII causes. What does this word reveal about how historians weigh relative significance? Do you agree with the CED's implicit ranking, and what evidence from Topic 7.6 or 7.7 would you use to defend or challenge it?"
    },
    {
      title: "Dorothea Lange, 'Migrant Mother,' 1936",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg",
      caption: "The Great Depression, the global economic crisis that discredited democracies, enabled extremism, and braided with other causes into the pathway toward WWII.",
      prompt: "Is economic crisis an underlying cause or an immediate trigger of global conflict? How does the Depression (Topic 7.4) connect to the rise of fascist regimes (Topic 7.6), and what does that connection reveal about how causes braid together rather than operate separately?"
    },
    {
      title: "World empires and territories, c. 1936",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
      caption: "Imperial competition and empire collapse, the Ottoman, Russian, and Qing empires have fallen; European and Japanese imperial ambitions still drive competition for resources and territory.",
      prompt: "How does imperial competition and the collapse of older empires appear as a cause of global conflict on this map? Connect evidence from Topics 7.1, 7.2, and 7.5 to explain why this is an underlying cause, and rank it: is it more or less significant than the rise of fascist regimes?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Rank the Causes",
    task: "Choose two images and write a significance argument: which of the two causes represented in these images was more significant in producing global conflict, and why? Use specific evidence from Unit 7 topics to support your ranking.",
    prompt: "The cause shown in Image A is [name the cause]. The cause shown in Image B is [name the cause]. I argue that [Image A / Image B] represents the more significant cause because... Evidence from Unit 7 topics [name them] supports this ranking because..."
  },

  primarySource: {
    title: "Primary Source: Article 231, Treaty of Versailles (June 28, 1919)",
    intro: "The 'War Guilt Clause' forced Germany to accept sole responsibility for causing World War I. Historians have debated this ever since, the WWI Key Concept lists multiple causes (imperialist expansion, territorial conflicts, flawed alliance systems, intense nationalism), not just German aggression. Read Article 231 as itself a historical argument about relative significance: the Allies made a causal claim, embedded it in a treaty, and imposed consequences based on it. The 7.9 capstone asks you to evaluate that claim using the Key Concepts as evidence.",
    text: "Germany accepts the responsibility of Germany and her allies for causing all the loss and damage to which the Allied and Associated Governments and their nationals have been subjected as a consequence of the war imposed upon them by the aggression of Germany and her allies.",
    questions: [
      "What claim about causation does Article 231 make? Is this claim about an underlying cause or an immediate trigger, or both? What does the phrase 'aggression of Germany and her allies' reveal about how the Allies assigned relative significance?",
      "The WWI Key Concept (Topic 7.2) names 'imperialist expansion and competition for resources,' 'territorial and regional conflicts,' 'a flawed alliance system,' and 'intense nationalism' as causes. How does Article 231 compare to this multivariate explanation? Which causes does the War Guilt Clause ignore, and why might the Allies have chosen to ignore them?",
      "If you were a historian evaluating Article 231, would you agree with its causal claim, that Germany's 'aggression' was the primary cause of WWI? Use at least two pieces of evidence from Topics 7.1 or 7.2 to defend a position. What does your answer reveal about how the same evidence can be used to support different significance arguments?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Wrong Turn That Started a World War",
    text: "The assassination of Archduke Franz Ferdinand on June 28, 1914, the spark that historians often call the trigger of World War I, almost did not happen. On the morning of the assassination, one of the conspirators threw a bomb at the Archduke's motorcade. It bounced off the car and exploded under the vehicle behind it, injuring two officers but leaving the Archduke unharmed. Rattled but unhurt, Franz Ferdinand continued to his schedule, and the would-be assassins thought they had failed. Hours later, the Archduke decided to visit the injured officers at the hospital. His motorcade set off again, and the driver, not told of the route change, took a wrong turn. He realized his mistake, hit the brakes, and the car stalled directly in front of the delicatessen where Gavrilo Princip was standing, eating a sandwich, certain his chance had passed. From point-blank range, Princip fired twice. The world went to war.",
    prompt: "Historians who study causation distinguish between underlying causes and immediate triggers. The underlying causes of WWI, imperial competition, intense nationalism, a hair-trigger alliance system, were in place for decades before 1914. The assassination was the trigger. What does this story suggest about the relationship between the two? If the driver had not taken a wrong turn, would the war still have happened, and what does your answer reveal about the relative significance of underlying causes versus immediate triggers?"
  }

};
