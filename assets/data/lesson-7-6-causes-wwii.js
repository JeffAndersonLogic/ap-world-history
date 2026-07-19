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
    topic: "Topic 7.6",
    title: "Causes of World War II",
    subtitle: "The unresolved tensions of Topic 7.5 resolve violently: how a failed peace, a global economic collapse, continued imperialist ambition, and, especially, the rise of fascist and totalitarian regimes drove the world into a second total war",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the unsustainable peace settlement after World War I contributed to the outbreak of World War II.",
      kc: "KC-6.2.IV.B.ii",
      theme: "Governance"
    },
    {
      target: "I can explain how the Great Depression and continued imperialist aspirations escalated global tensions in the 1930s.",
      kc: "KC-6.2.IV.B.ii",
      theme: "Governance"
    },
    {
      target: "I can explain how the rise of fascist and totalitarian regimes, especially Nazi Germany under Adolf Hitler, led to aggressive militarism and war.",
      kc: "KC-6.2.IV.B.ii",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence, the Treaty of Versailles' reparations and territorial losses, the resulting humiliation and economic burden, to explain how the unsustainable peace created fertile ground for radical movements.",
      kc: "KC-6.2.IV.B.ii",
      theme: "Governance"
    },
    {
      criteria: "I can explain how the Great Depression discredited democratic governments and made extremist promises attractive, and connect continued imperialist aspirations to the aggressive militarism of Germany, Italy, and Japan in the 1930s.",
      kc: "KC-6.2.IV.B.ii",
      theme: "Governance"
    },
    {
      criteria: "I can explain how Hitler and the Nazi Party turned nationalist resentment into expansionist policy, and evaluate the CED's claim that the rise of fascist and totalitarian regimes was 'especially' the cause of the war.",
      kc: "KC-6.2.IV.B.ii",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Governance (GOV)",
      theme: "Governance",
      text: "A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes."
    },
    {
      code: "Unit 7: Learning Objective F",
      theme: "Learning Objective",
      text: "Explain the causes and consequences of World War II."
    },
    {
      code: "KC-6.2.IV.B.ii",
      theme: "Governance",
      text: "The causes of World War II included the unsustainable peace settlement after World War I, the global economic crisis engendered by the Great Depression, continued imperialist aspirations, and especially the rise to power of fascist and totalitarian regimes that resulted in the aggressive militarism of Nazi Germany under Adolf Hitler."
    }
  ],

  lecture: {
    title: "Causes of World War II: Four Roads to the Same War",
    intro: "Use these cards to follow the Key Concept's own four-cause structure, a failed peace, a global economic collapse, continued imperialist ambition, and the rise of fascist and totalitarian regimes, and to weigh the CED's verdict that the last of these was 'especially' to blame.",
    videos: [
      {
        title: "Heimler's History, AP World Topic 7.6",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.6+Causes+of+World+War+II",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
        prompt: "Watch for the four causes the CED names, the unsustainable peace after WWI, the Great Depression, continued imperialist aspirations, and especially the rise of fascist and totalitarian regimes, and how aggressive militarism, above all Nazi Germany under Hitler, turned those tensions into war."
      }
    ],
    segments: [
      {
        title: "The Twenty Years' Crisis",
        bullets: [
          "Pick up directly from Topic 7.5: the **unresolved tensions** you just studied, arbitrary borders, conquered peoples, colonized populations demanding freedom, are now **resolving violently**.",
          "The Key Concept lays out the causes in a single sentence. Read it as a **four-part structure**: a **failed peace**, an **economic collapse**, **continued imperialist aspirations**, and, **especially**, the **rise of fascist and totalitarian regimes**.",
          "That last clause matters: the CED itself says the war resulted in the **aggressive militarism of Nazi Germany under Adolf Hitler**. The framework does its own ranking, and so will you.",
          "Core claim: World War II had **many causes**, but the CED weights one above the rest. Hold that weighting as a question to test, not a fact to memorize."
        ],
        image: {
          title: "World War II, montage of the global conflict",
          caption: "The war the interwar tensions produced, the CED asks you to explain its causes, and names four of them in a single sentence.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png"
        }
      },
      {
        title: "The Unsustainable Peace",
        bullets: [
          "Cause one: the **unsustainable peace settlement** after World War I. The **Treaty of Versailles (1919)** imposed harsh **reparations** and **territorial losses** on Germany, along with the war-guilt clause that pinned sole blame on it.",
          "The result was widespread **humiliation, resentment, and economic burden**, a sense among Germans that the peace was a betrayal to be overturned, not a settlement to be honored.",
          "That bitterness created **fertile ground for radical political movements** promising to tear up the treaty and restore national greatness.",
          "Connect back to Topic 7.5: this is the same 'peace that settled nothing', and forward: the treaty's resentment is the soil the next cause grows in."
        ],
        image: {
          title: "Treaty of Versailles, English version (1919)",
          caption: "The peace that humiliated Germany, reparations, territorial losses, and a war-guilt clause that bred the resentment radical movements would exploit.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Treaty_of_Versailles,_English_version.jpg"
        }
      },
      {
        title: "The Great Depression Goes Global",
        bullets: [
          "Cause two: the **global economic crisis engendered by the Great Depression** (a direct callback to Topic 7.4).",
          "Mass **unemployment** and **desperation** discredited **democratic governments** that seemed unable to fix the collapse.",
          "Into that vacuum stepped extremists, whose promises of **order, revival, and national renewal** suddenly looked attractive to people with nothing left to lose.",
          "The Depression did not start the war by itself, but it **weakened the democracies and strengthened the radicals**, converting economic pain into political extremism."
        ],
        image: {
          title: "Migrant Mother, 1936",
          caption: "The human face of the Depression, economic desperation that discredited democracies and made extremist promises of revival attractive worldwide.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lange-MigrantMother02.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg"
        }
      },
      {
        title: "The Rise of Fascist & Totalitarian Regimes",
        bullets: [
          "Cause three, the one the CED calls **'especially'** decisive: the **rise to power of fascist and totalitarian regimes**.",
          "In Germany, **Hitler and the Nazi Party** capitalized on **nationalist resentment** and the **desire for revenge**, promising to **restore Germany's glory**, **rebuild its military**, and **reclaim lost territories**.",
          "Those promises were not rhetoric only, they became **aggressive expansionist policy**: rearmament in defiance of Versailles, remilitarization, and the annexation of neighbors.",
          "This is where the other causes converge: Versailles supplied the grievance, the Depression supplied the desperation, and the Nazi regime supplied the **militarized will to act on both**."
        ],
        image: {
          title: "Adolf Hitler",
          caption: "Hitler, whose Nazi regime turned the resentment of Versailles and the desperation of the Depression into aggressive militarism, the cause the CED weights above the rest.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg"
        }
      },
      {
        title: "Continued Imperialist Aspirations",
        bullets: [
          "Cause four: **continued imperialist aspirations**, the broader pattern of **aggressive militarism** that defined the 1930s.",
          "**German expansionism** pushed into central Europe; **Italian ambitions** under Mussolini sought a new Roman empire; and **Japanese expansion** drove deeper into Asia.",
          "Callback to Topic 7.5: **Manchukuo** and the Greater East Asia Co-Prosperity Sphere were the leading edge of Japan's drive, imperial appetite that the interwar order could not satisfy or contain.",
          "Three expansionist powers, three regions, one pattern: the **militarized pursuit of empire** that turned local aggressions into a global war."
        ],
        image: {
          title: "Flag of Manchukuo",
          caption: "Manchukuo, the Japanese puppet state from Topic 7.5, the leading edge of the continued imperialist aspirations that drove aggressive militarism in Asia.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Manchukuo.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Flag_of_Manchukuo.svg"
        }
      },
      {
        title: "The League Fails",
        bullets: [
          "The causes had a multiplier: the **League of Nations' inability to respond effectively** to aggression.",
          "When Japan took Manchuria and Italy invaded Ethiopia, the League issued condemnations but imposed **no real consequences**, and the expansionist powers noticed.",
          "Seeing aggression go **unpunished emboldened** them. Diplomacy curdled into **appeasement**, most infamously at Munich in 1938, where concession only fed the appetite.",
          "The road from appeasement ran straight to **1939**: a weak collective-security system that taught aggressors there was no price to pay."
        ],
        image: {
          title: "Neville Chamberlain",
          caption: "Chamberlain, face of appeasement, the policy that, with a powerless League, taught expansionist powers that aggression carried no consequences.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Neville_Chamberlain.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Neville_Chamberlain.jpg"
        }
      },
      {
        title: "\"Especially\"",
        bullets: [
          "Close on the CED's own word. The Key Concept lists four causes but ranks one: it was **especially** the rise of fascist and totalitarian regimes, the **aggressive militarism of Nazi Germany under Hitler**.",
          "That is the framework making a **causation argument** for you. Your job is to **evaluate** it: do you agree the Nazi regime was the most significant cause, or were Versailles, the Depression, or imperial ambition the deeper roots?",
          "Build the case both ways: without Hitler's regime, do the other three causes still produce a world war? Without the failed peace and the Depression, does Hitler ever rise?",
          "This is direct rehearsal for the **7.9 causation capstone**, and a parallel to the weighing-the-causes work you did in **Topic 7.2.**"
        ],
        image: {
          title: "Adolf Hitler",
          caption: "The CED's 'especially' made visible, weigh the rise of the Nazi regime against the failed peace, the Depression, and imperial ambition, and decide which cause carried the most weight.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg"
        }
      }
    ]
  },

  map: {
    title: "Map: Aggression in the 1930s",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
    caption: "The world of the 1930s, a humiliated Germany, a depression-struck globe, and three expansionist powers whose continued imperialist aspirations the League could not contain.",
    intro: "Use the map to locate the four causes in space: the territory Versailles stripped from Germany, the global reach of the Depression, and the three regions where fascist and totalitarian regimes pursued aggressive militarism, Germany in Europe, Italy in the Mediterranean and Africa, and Japan in Asia.",
    prompt: "Locate Germany, Italy, and Japan, and trace their expansion in the 1930s. Which causes named in the Key Concept are geographic (territorial losses, imperialist aspirations) and which are not (the Depression, the rise of regimes)? Where on this map would you mark the League of Nations' failures to respond?",
    notes: [
      "**Germany** under Hitler rearmed and expanded into central Europe, overturning the Versailles settlement piece by piece.",
      "**Italy** under Mussolini pursued imperial ambitions in the Mediterranean and Africa, invading Ethiopia in 1935.",
      "**Japan** expanded in Asia, Manchukuo and beyond, the continued imperialist aspirations of Topic 7.5 driving aggressive militarism.",
      "The **League of Nations** could not respond effectively to any of it; unpunished aggression emboldened the expansionist powers on the road to 1939."
    ]
  },

  first10: {
    title: "First & 10: Four Roads to One War",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.6 lesson path."
  },

  images: [
    {
      title: "World War II, montage of the global conflict",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png",
      caption: "The second total war, the conflict the CED asks you to explain the causes of.",
      prompt: "The CED names four causes of this war in one sentence. Which of them do you think mattered most, and why does the framework single out 'the rise of fascist and totalitarian regimes'?"
    },
    {
      title: "Treaty of Versailles, English version (1919)",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Treaty_of_Versailles,_English_version.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Treaty_of_Versailles,_English_version.jpg",
      caption: "The unsustainable peace, reparations, territorial losses, and a war-guilt clause that bred lasting German resentment.",
      prompt: "How does this document help explain the FIRST cause the CED names? Trace the line from the treaty's terms to 'fertile ground for radical political movements.'"
    },
    {
      title: "Adolf Hitler",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
      caption: "Hitler, the CED's 'especially': the rise of the Nazi regime and its aggressive militarism.",
      prompt: "The other three causes set the stage; the CED says this one was 'especially' decisive. What did the Nazi regime add that the failed peace and the Depression could not produce on their own?"
    },
    {
      title: "Neville Chamberlain",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Neville_Chamberlain.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Neville_Chamberlain.jpg",
      caption: "Chamberlain and appeasement, the powerless League and the policy that emboldened aggression.",
      prompt: "The League's failure is not in the Key Concept's list of causes, but it multiplied them. How did unpunished aggression and appeasement turn the four causes into an actual war?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Weighing the Causes",
    task: "Choose one image and explain which of the CED's four causes of World War II it best illustrates, the unsustainable peace, the Great Depression, continued imperialist aspirations, or the rise of fascist and totalitarian regimes, and how important that cause was.",
    prompt: "This image shows... It is evidence of [the unsustainable peace / the Great Depression / imperialist aspirations / the rise of fascist regimes] because... I would rank this cause as [more / less] significant than the others because..."
  },

  primarySource: {
    title: "Primary Source: Treaty of Versailles, Article 231, the War Guilt Clause (1919)",
    intro: "Article 231 is one sentence, but it did enormous political work. By forcing Germany to accept sole responsibility for the war, it became the legal basis for reparations and the emotional core of German resentment, the single clause radical movements pointed to as proof the peace was a humiliation to be overturned. Read it as the seed of the CED's first cause.",
    text: "The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage to which the Allied and Associated Governments and their nationals have been subjected as a consequence of the war imposed upon them by the aggression of Germany and her allies.",
    questions: [
      "What exactly does Article 231 force Germany to accept, and why would 'sole responsibility' for the war feel like a humiliation rather than a fact to many Germans?",
      "The Key Concept names 'the unsustainable peace settlement after World War I' as a cause of World War II. How does this clause, and the reparations it justified, illustrate why the peace was 'unsustainable'?",
      "The CED says the war was 'especially' caused by the rise of fascist and totalitarian regimes. How might a leader like Hitler have USED a document like this to build the nationalist resentment that brought him to power? Connect cause one to cause four."
    ]
  }
};
