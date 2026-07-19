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
    topic: "Topic 7.7",
    title: "Conducting World War II",
    subtitle: "Total war, round two: how Western democracies and totalitarian states alike mobilized propaganda, art, media, nationalism, and every resource for war — and how new technology and tactics, including the atomic bomb and fire-bombing, drove wartime casualties to new heights",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how governments used propaganda, media, and intensified nationalism to mobilize home and colonial populations for total war.",
      kc: "KC-6.2.IV.A.ii",
      theme: "Governance"
    },
    {
      target: "I can compare how Western democracies and totalitarian states mobilized their societies and resources for World War II.",
      kc: "KC-6.2.IV.A.ii",
      theme: "Governance"
    },
    {
      target: "I can explain how new military technology and tactics, including the atomic bomb and fire-bombing, led to increased levels of wartime casualties.",
      kc: "KC-6.1.III.C.ii",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence, Churchill's wartime speeches, Roosevelt's Fireside Chats and Lend-Lease, Goebbels's Ministry of Propaganda, and Stalin's Great Patriotic War narrative, to explain how governments mobilized both home and colonial populations for war.",
      kc: "KC-6.2.IV.A.ii",
      theme: "Governance"
    },
    {
      criteria: "I can name the similarities (all four states used propaganda, art, media, intensified nationalism, and full resource mobilization) and the key difference (totalitarian states used ideology to repress basic freedoms and dominate daily life) between Western democracies and totalitarian states.",
      kc: "KC-6.2.IV.A.ii",
      theme: "Governance"
    },
    {
      criteria: "I can use the atomic bomb, fire-bombing, and the waging of total war as evidence that new military technology and tactics put civilians inside the target zone and drove wartime casualties beyond even World War I.",
      kc: "KC-6.1.III.C.ii",
      theme: "Technology and Innovation"
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
      code: "Unit 7: Learning Objective G",
      theme: "Learning Objective",
      text: "Explain similarities and differences in how governments used a variety of methods to conduct war.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.A.ii",
      theme: "Governance",
      text: "World War II was a total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies or former colonies) for the purpose of waging war. Governments used ideologies, including fascism and communism, to mobilize all of their state's resources for war and, in the case of totalitarian states, to repress basic freedoms and dominate many aspects of daily life during the course of the conflicts and beyond.",
      illustrativeExamples: [
        "Western democracies mobilizing for war:",
        "Great Britain under Winston Churchill",
        "United States under Franklin Roosevelt",
        "Totalitarian states mobilizing for war:",
        "Germany under Adolf Hitler",
        "USSR under Joseph Stalin"
      ]
    },
    {
      code: "KC-6.1.III.C.ii",
      theme: "Technology and Innovation",
      text: "New military technology and new tactics, including the atomic bomb, fire-bombing, and the waging of \"total war\" led to increased levels of wartime casualties.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Conducting World War II: Mobilizing Everything",
    intro: "Use these cards to compare how four great powers, two democracies and two totalitarian states, mobilized propaganda, media, nationalism, and every resource for total war, then trace how new technology and tactics drove casualties to new heights. The Learning Objective is comparative: not just that they mobilized, but how mobilization differed by ideology.",
    videos: [
      {
        title: "Heimler's History — AP World Topic 7.7",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.7+Conducting+World+War+II",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
        prompt: "Watch for how Britain, the United States, Germany, and the USSR each used propaganda, media, and nationalism to mobilize populations and resources, the difference between democratic and totalitarian mobilization, and how the atomic bomb and fire-bombing increased wartime casualties."
      }
    ],
    segments: [
      {
        title: "Total War, Round Two",
        bullets: [
          "You already know the **total-war playbook** from Topic 7.3, whole societies mobilized for the front, and from Topic 7.6 you know **how this war started.** Now watch the playbook run again, bigger.",
          "The Key Concept states it flatly: **World War II was a total war.** Every major power mobilized **everything**, propaganda, art, media, intensified **nationalism**, and the full weight of the economy.",
          "The Learning Objective is **comparative**: explain the **similarities and differences** in how governments conducted the war. The similarity is that they ALL mobilized; the difference is **how**, and ideology is the dividing line.",
          "Core claim: democracies and totalitarian states used **many of the same tools**, but totalitarian states pushed mobilization into **repressing basic freedoms and dominating daily life.**"
        ],
        image: {
          title: "World War II — montage of the global conflict",
          caption: "The second total war, every major power mobilized propaganda, media, nationalism, and its whole economy, but democracies and dictatorships mobilized differently.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png"
        }
      },
      {
        title: "Britain Under Churchill",
        bullets: [
          "**Great Britain under Winston Churchill** mobilized through words first. His wartime **speeches**, *\"We shall fight on the beaches\"*, turned national peril into national **resilience.**",
          "**Film and radio messaging** carried the war effort into every home, the BBC and newsreels keeping morale and purpose high through the Blitz.",
          "Material mobilization matched the rhetoric: **rationing** and **war-production measures** redirected food, fuel, and factory output to **military needs.**",
          "This is a **democracy** mobilizing: total in its demands on the economy, but persuading a free public rather than silencing it."
        ],
        image: {
          title: "Winston Churchill, 1941",
          caption: "Churchill, whose wartime speeches mobilized British resilience, a democracy waging total war through persuasion, film, and radio.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Winston_Churchill_-_19086236948.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Sir_Winston_Churchill_-_19086236948.jpg"
        }
      },
      {
        title: "The United States Under Roosevelt",
        bullets: [
          "**The United States under Franklin Roosevelt** became the \"arsenal of democracy.\" The **Lend-Lease Act (1941)** supplied Allied nations with weapons and materiel before America even entered the fighting.",
          "Roosevelt's **Fireside Chats** built public support over the radio, explaining the war directly to citizens in their living rooms.",
          "**War bonds** and **volunteer mobilization** pulled the public into the effort, while the **War Production Board** converted the civilian economy to **wartime output**, cars to tanks, almost overnight.",
          "Like Britain, the U.S. mobilized totally **within a democracy**, leaning on consent, advertising, and voluntary participation rather than coercion."
        ],
        image: {
          title: "Franklin D. Roosevelt signs the Social Security Act (1935)",
          caption: "Roosevelt, Lend-Lease, Fireside Chats, war bonds, and the War Production Board mobilized the United States as the 'arsenal of democracy.'",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Signing_Of_The_Social_Security_Act.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Signing_Of_The_Social_Security_Act.jpg"
        }
      },
      {
        title: "Germany Under Hitler",
        bullets: [
          "**Germany under Adolf Hitler** mobilized through total control of information. The **Ministry of Propaganda** under **Joseph Goebbels** controlled **all media**, press, radio, film, saturating the public with the regime's message.",
          "The war was framed as **national survival and expansion**, fusing fascist ideology with intensified nationalism.",
          "Mobilization here was **coercive**: **forced labor** and **conscription** fed the war machine, and dissent was not permitted.",
          "This is a **totalitarian** state mobilizing, the **militarization of society at the cost of individual freedoms**, exactly the repression the Key Concept names."
        ],
        image: {
          title: "Adolf Hitler",
          caption: "Hitler's Germany, Goebbels's Ministry of Propaganda controlled all media, while forced labor and conscription mobilized society at the cost of individual freedom.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg"
        }
      },
      {
        title: "The USSR Under Stalin",
        bullets: [
          "**The USSR under Joseph Stalin** framed the conflict as the **Great Patriotic War**, a battle against fascism that summoned deep national feeling beyond communist ideology alone.",
          "**Propaganda for unity and resilience** rallied a population to staggering sacrifice, while **political repression of dissent** crushed any wavering.",
          "**Collectivized agriculture** and **prioritized industrial production** were bent entirely to **military needs**, the whole command economy retooled for war.",
          "Like Germany, the Soviet Union mobilized as a **totalitarian** state: ideology plus repression, dominating daily life to feed the war effort."
        ],
        image: {
          title: "Joseph Stalin",
          caption: "Stalin's USSR, the Great Patriotic War narrative, propaganda, political repression, and a command economy bent entirely to military production.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/JStalin_Secretary_general_CCCP_1942.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:JStalin_Secretary_general_CCCP_1942.jpg"
        }
      },
      {
        title: "New Technology, New Tactics",
        bullets: [
          "Total war reached new extremes through technology. The second Key Concept names them: the **atomic bomb**, **fire-bombing**, and the waging of **\"total war\"** drove **increased levels of wartime casualties.**",
          "**Fire-bombing** raids, Dresden, Tokyo, and the **atomic bombs** dropped on Hiroshima and Nagasaki put **civilians squarely inside the target zone.**",
          "The line between soldier and civilian, already blurred in WWI, **collapsed**: cities themselves became the battlefield.",
          "Callback to Topic 7.3: the machine-gun-and-gas escalation of WWI **continued its trajectory**, each war's technology made the next one deadlier."
        ],
        image: {
          title: "Atomic bombing of Nagasaki, 1945",
          caption: "The mushroom cloud over Nagasaki, the atomic bomb, fire-bombing, and total war put civilians inside the target zone and drove casualties beyond even WWI.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagasakibomb.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Nagasakibomb.jpg"
        }
      },
      {
        title: "Comparing Mobilization",
        bullets: [
          "Now answer the Learning Objective as a comparison. The **similarities** are striking: **all four** states used **propaganda, art, media, intensified nationalism**, and **full resource mobilization** to wage total war.",
          "The **key difference** is ideological and political: the **totalitarian states** (Germany, the USSR) used ideology to **repress basic freedoms and dominate many aspects of daily life**, the democracies (Britain, the U.S.) did not.",
          "Frame it precisely: same **methods**, different **limits.** Democracies mobilized by persuading a free public; totalitarian states mobilized by controlling it.",
          "Bridge to Topic 7.8: when total state power over populations reaches its **extreme**, the result is the **mass atrocity** that the next topic examines. Keep the thread for the **7.9 causation capstone.**"
        ],
        image: {
          title: "World War II — montage of the global conflict",
          caption: "Same toolkit, different limits, all four powers mobilized propaganda, media, and nationalism, but only the totalitarian states repressed basic freedoms to do it.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png"
        }
      }
    ]
  },

  map: {
    title: "Map: The World at War, c. 1942",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
    caption: "A truly global war, Allied democracies and the Soviet Union against the Axis, each state mobilizing its home population and its colonies for total war.",
    intro: "Use the map to see why mobilization reached the colonies, not just the home countries: Britain, France, and Japan drew troops, labor, and resources from empires that spanned the globe. The Key Concept's phrase 'both in the home countries and the colonies or former colonies' is written across this map.",
    prompt: "Locate Britain, the United States, Germany, and the USSR, and trace the empires the Allied powers could draw on. How did the global reach of empire let governments mobilize 'both in the home countries and the colonies or former colonies'? Where would you mark the cities that fire-bombing and the atomic bomb turned into battlefields?",
    notes: [
      "**Britain and the United States** mobilized as democracies, Churchill's speeches, Roosevelt's Fireside Chats, Lend-Lease, rationing, and war-production boards.",
      "**Germany and the USSR** mobilized as totalitarian states, Goebbels's controlled media and Stalin's Great Patriotic War, with ideology and repression dominating daily life.",
      "Mobilization reached **the colonies or former colonies**, drawing troops, labor, and resources from empires that spanned the globe.",
      "**New technology and tactics**, the atomic bomb and fire-bombing, turned cities into targets and drove wartime casualties beyond even World War I."
    ]
  },

  first10: {
    title: "First & 10: Mobilizing Everything",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.7 lesson path."
  },

  images: [
    {
      title: "World War II — montage of the global conflict",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Infobox_collage_for_WWII.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Infobox_collage_for_WWII.png",
      caption: "The second total war, fought by societies fully mobilized for the front.",
      prompt: "The CED says 'World War II was a total war.' What does it mean for a war to be 'total,' and how is that visible in the scale of this conflict?"
    },
    {
      title: "Winston Churchill, 1941",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Winston_Churchill_-_19086236948.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sir_Winston_Churchill_-_19086236948.jpg",
      caption: "Churchill, a democracy mobilizing through speeches, film, and radio rather than coercion.",
      prompt: "Churchill and Roosevelt mobilized free publics; Hitler and Stalin controlled theirs. What can a democracy do to mobilize that a dictatorship cannot, and vice versa?"
    },
    {
      title: "Adolf Hitler",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_retouched.jpg",
      caption: "Hitler's Germany, Goebbels's Ministry of Propaganda and the repression that defines totalitarian mobilization.",
      prompt: "The CED says totalitarian states used ideology 'to repress basic freedoms and dominate many aspects of daily life.' How does that distinguish German and Soviet mobilization from British and American?"
    },
    {
      title: "Atomic bombing of Nagasaki, 1945",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagasakibomb.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nagasakibomb.jpg",
      caption: "The atomic bomb, new military technology that drove wartime casualties to unprecedented levels.",
      prompt: "How do the atomic bomb and fire-bombing illustrate the second Key Concept, that new technology and tactics 'led to increased levels of wartime casualties' by putting civilians inside the target zone?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Methods of Mobilization",
    task: "Choose one image and explain what method of conducting total war it illustrates, democratic mobilization, totalitarian mobilization, or the new technology and tactics that increased casualties, and how it fits the Key Concepts.",
    prompt: "This image shows... It is evidence of [democratic mobilization / totalitarian mobilization / new military technology] because... It helps explain how governments conducted total war because..."
  },

  primarySource: {
    title: "Primary Source: Winston Churchill, \"We Shall Fight on the Beaches\" (June 4, 1940)",
    intro: "With France collapsing and a German invasion of Britain looking imminent, Churchill rose in the House of Commons to mobilize a nation through words alone. This is democratic total war in its purest form: no censorship of bad news, no coercion, just a leader persuading a free people to fight on. Read it as the Key Concept's 'political propaganda' and 'intensified forms of nationalism' in a democratic key.",
    text: "We shall go on to the end... we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our Island, whatever the cost may be. We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender, and even if, which I do not for a moment believe, this Island or a large part of it were subjugated and starving, then our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle.",
    questions: [
      "How does Churchill use repetition and rhythm ('we shall fight...') to mobilize his audience? What emotions is the speech designed to produce?",
      "The Key Concept says governments mobilized 'both in the home countries and the colonies or former colonies.' Where in this passage does Churchill reach beyond Britain to 'our Empire beyond the seas', and why?",
      "Compare this speech with how Goebbels or Stalin mobilized their populations. What makes Churchill's appeal a DEMOCRATIC form of mobilization, and where is the line between persuasion and the 'repression of basic freedoms' the CED attributes to totalitarian states?"
    ]
  }
};
