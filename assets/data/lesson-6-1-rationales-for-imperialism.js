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
    unit: "Unit 6: Consequences of Industrialization",
    topic: "Topic 6.1",
    title: "Rationales for Imperialism",
    subtitle: "How cultural, religious, and racial ideologies — Social Darwinism, nationalism, the civilizing mission, and missionary conversion — were used to justify imperial expansion from 1750 to 1900",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how racial ideologies like Social Darwinism were used to justify imperial expansion.",
      kc: "KC-5.2.III, Cultural, religious, and racial ideologies of imperialism"
    },
    {
      target: "I can explain how nationalism and the concept of the civilizing mission functioned as rationales for imperialism.",
      kc: "KC-5.2.III, Nationalism and the civilizing mission"
    },
    {
      target: "I can explain how the desire to religiously convert indigenous populations contributed to imperial ideology.",
      kc: "KC-5.2.III, Religious conversion as imperial justification"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe what Social Darwinism argued about race and civilization, and explain how that argument was used to rationalize European control over other peoples.",
      kc: "Social Darwinism"
    },
    {
      criteria: "I can distinguish between nationalism and the civilizing mission as separate but reinforcing ideologies, and explain how each made imperialism seem necessary or beneficial to those promoting it.",
      kc: "Nationalism & Civilizing Mission"
    },
    {
      criteria: "I can explain the role of missionary movements in imperial expansion and analyze how religious conversion was framed as justification rather than pure conquest.",
      kc: "Religious Conversion"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-5.2.III",
      theme: "Cultural Developments and Interactions",
      text: "A range of cultural, religious, and racial ideologies were used to justify imperialism, including Social Darwinism, nationalism, the concept of the civilizing mission, and the desire to religiously convert indigenous populations.",
      illustrativeExamples: []
    }
  ],

  stableImages: {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World.svg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/The_Rhodes_Colossus.png',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/The_Rhodes_Colossus.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Herbert_Spencer.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/The_Rhodes_Colossus.png',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World.svg'
  },

  map: {
    title: "Map: Where the Ideologies of Empire Landed, c. 1750–1900",
    intro: "This topic is about ideas, but those ideas produced a map. Use this sourced world map to ground the four rationales in the geographic scale of what they actually justified: by 1900, European powers controlled roughly 80% of the world's land surface.",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BlankMap-World.svg",
    caption: "Wikimedia Commons blank world map, used as a sourced geographic reference for locating the regions reshaped by imperial ideology.",
    notes: [
      "Locate the major targets of late-19th-century imperialism: Sub-Saharan Africa, South Asia (India), Southeast Asia, and the Pacific islands.",
      "Locate the originating states whose citizens debated these rationales: Britain, France, Germany, and Belgium.",
      "The ideologies in this topic, Social Darwinism, nationalism, the civilizing mission, religious conversion, were the vocabulary used to justify control over these regions.",
      "Keep the scale in mind: the abstract arguments translated into control of roughly 80% of the world's land surface by 1900.",
      "Geography is not the content here, it is the evidence of what the content produced."
    ],
    key: [
      { label: "Targets of empire", detail: "Sub-Saharan Africa, South Asia (India), Southeast Asia, and Pacific islands became the regions where imperial ideologies were enacted (KC-5.2.III)." },
      { label: "Originating states", detail: "Britain, France, Germany, and Belgium competed for territory and generated the nationalist and racial rationales that justified it." },
      { label: "The ideological vocabulary", detail: "Social Darwinism, nationalism, the civilizing mission, and missionary conversion supplied the moral and scientific language of conquest." },
      { label: "The scale", detail: "By 1900 European powers controlled roughly 80% of the world's land surface, the measure of what these ideologies made thinkable." }
    ],
    prompt: "Looking at the regions imperial powers targeted and the states that competed for them, why would European publics need a 'story', an ideology, to feel that this expansion was right and not just profitable?"
  },

  first10: {
    title: "First & 10: The Language of Conquest",
    embedUrl: "first-and-10-topic-6-1-rationales-for-imperialism-capture.html",
    note: "Read the First & 10 narrative on the four ideologies of empire, answer the three questions, build your Google Form response and your AI Coach prompt, then return to the 6.1 lesson path."
  },

  lecture: {
    title: "Lecture: The Four Stories That Justified Empire",
    intro: "Industrial powers needed raw materials and markets, and steamships, railroads, and the telegraph made global expansion possible. But power alone rarely satisfies a nation, people want to believe what their country is doing is not just profitable but right. The 19th century supplied four ideologies that made conquest feel like science, patriotism, duty, and salvation. These cards work through each one and how they reinforced each other.",
    segments: [
      {
        title: "Social Darwinism and Racial Hierarchy",
        bullets: [
          "Thinkers applied Darwin's biological idea of **'survival of the fittest'** to human societies, arguing that some races were naturally superior to others (KC-5.2.III).",
          "This ideology framed European dominance as **natural law rather than political choice**, making conquest feel inevitable rather than deliberate.",
          "Social Darwinism reinforced racial hierarchies that shaped colonial policy, legal systems, and the treatment of colonized peoples for generations."
        ],
        image: {
          title: "Herbert Spencer",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Herbert_Spencer.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbert_Spencer.jpg",
          caption: "Herbert Spencer applied evolutionary logic to human societies, arguing stronger civilizations were right to dominate weaker ones (KC-5.2.III)."
        }
      },
      {
        title: "Nationalism and the Civilizing Mission",
        bullets: [
          "As European states competed for global prestige, **colonies became symbols of national power**; not acquiring territory felt like national failure.",
          "The **civilizing mission** reframed extraction as benevolence, the idea that European powers had a duty to bring education, governance, and culture to peoples deemed less advanced.",
          "These two ideologies worked in tandem: nationalism provided the **competitive drive**, and the civilizing mission provided the **moral vocabulary**."
        ],
        image: {
          title: "The Rhodes Colossus (Punch, 1892)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Rhodes_Colossus.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Rhodes_Colossus.png",
          caption: "Cecil Rhodes striding across Africa, national prestige and imperial ambition fused into a single image."
        }
      },
      {
        title: "Missionary Movements and Religious Conversion",
        bullets: [
          "Protestant and Catholic missionaries moved into Africa, Asia, and the Pacific throughout the 19th century, framing their work as **bringing salvation** to indigenous peoples.",
          "Mission stations often **preceded formal colonial control**, and the disruption of local religious practices weakened existing social structures.",
          "The desire to convert indigenous populations gave imperialism a **spiritual justification**, colonized peoples were framed not just as racially or culturally inferior, but as spiritually incomplete."
        ],
        image: {
          title: "The Berlin Conference, 1884",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg",
          caption: "European powers met in Berlin to partition Africa, the political machinery that missionary and civilizing rhetoric helped justify."
        }
      }
    ],
    videos: [
      {
        title: "Heimler's History — AP World Unit 6 imperialism rationales (search)",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+6.1+rationales+for+imperialism",
        prompt: "Watch for how a single ideology (e.g., Social Darwinism or the civilizing mission) gets turned into a justification for conquest."
      }
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Missionary's Map",
    text: "You are a missionary in central Africa in 1880. You have spent three years building a school and learning the local language. Today, a colonial administrator arrived from the capital. He wants to use your mission station as a base of operations, your maps, your local contacts, your relationships with village elders. You did not come here for empire. You came to bring what you believed was salvation. But looking at the administrator's request, you feel the weight of something you hadn't fully considered: every road you built, every trust you earned, every map you drew, all of it has made this moment possible.",
    prompt: "Do you cooperate, refuse, or negotiate? And whatever you decide, can you still claim your work here has been only for God? Use your answer to explain how the desire to religiously convert indigenous populations could serve imperial expansion even when the missionary never intended it to."
  },

  skillBuilder: {
    label: "Argumentation",
    title: "AP Skill Builder: Cause vs. Justification",
    intro: "Historians debate whether the ideologies in this topic were causes of imperialism or justifications for decisions already made for economic and political reasons. Telling the difference is a core argumentation move, and it changes how you read every source in this unit.",
    steps: [
      {
        label: "Define the difference",
        text: "A cause helps make something happen; a justification explains or excuses a decision after the fact. Social Darwinism could be either, a belief that actually drove expansion, or a story told to make profitable conquest feel moral. The same idea can play both roles for different people."
      },
      {
        label: "Test with evidence",
        text: "Ask what evidence would distinguish the two. If an ideology was widely argued before expansion and shaped who got conquered, that points to cause. If it appears mainly in speeches and editorials defending conquest already underway, that points to justification."
      },
      {
        label: "Take a defensible position",
        text: "A strong answer commits: 'These ideologies functioned primarily as justifications for economic motives', or 'as genuine causes', or 'as both, reinforcing each other.' Whatever you choose, it must be arguable and supported."
      }
    ],
    prompt: "What's the difference between a cause and a justification? Write one sentence that takes a position on whether the ideologies in this topic were causes of imperialism or justifications for decisions already made, then identify one piece of evidence that would support your position. (Write it yourself, your AI Coach will push on it, not write it for you.)"
  },

  checkpoints: [
    {
      title: "Checkpoint 1: How the Ideologies Justified Empire",
      subtitle: "Checks Learning Targets 1 & 2 — explaining how the rationales worked and reinforced each other.",
      cardDesc: "Pick two ideologies, explain how each justified expansion, then show how they reinforced each other.",
      learningTargets: [
        "I can explain how racial ideologies like Social Darwinism were used to justify imperial expansion.",
        "I can explain how nationalism and the concept of the civilizing mission functioned as rationales for imperialism."
      ],
      successCriteria: [
        "I can describe what Social Darwinism argued about race and civilization, and explain how that argument was used to rationalize European control over other peoples.",
        "I can distinguish between nationalism and the civilizing mission as separate but reinforcing ideologies, and explain how each made imperialism seem necessary or beneficial to those promoting it."
      ],
      prompt: "Choose two of the four ideologies covered in this topic (Social Darwinism, nationalism, the civilizing mission, religious conversion). For each one, explain how it justified imperial expansion. Then explain how these two ideologies reinforced each other.",
      responseType: "Checkpoint 1",
      terms: ["Social Darwinism", "survival of the fittest", "racial hierarchy", "nationalism", "national prestige", "civilizing mission", "religious conversion", "missionary", "rationale", "ideology"],
      focus: ["Explain how each chosen ideology justified expansion.", "Show how the two ideologies reinforced each other.", "Use specific reasoning, not just definitions."]
    },
    {
      title: "Checkpoint 2: Ideology and the Morality of Conquest",
      subtitle: "Checks Learning Target 3 and the unit's argumentation focus — AP Writing Touchpoint.",
      cardDesc: "Evaluate a claim about ideology and conquest, building an argument with evidence.",
      learningTargets: [
        "I can explain how the desire to religiously convert indigenous populations contributed to imperial ideology.",
        "I can explain how ideologies contributed to the development of imperialism from 1750 to 1900."
      ],
      successCriteria: [
        "I can explain the role of missionary movements in imperial expansion and analyze how religious conversion was framed as justification rather than pure conquest.",
        "I can state a defensible position and support it with specific evidence from the four rationales for imperialism."
      ],
      prompt: "Evaluate this claim: 'Imperial powers used ideology to make conquest feel moral.' Using evidence from this topic, construct an argument that either supports, modifies, or refutes this claim.",
      responseType: "Checkpoint 2",
      terms: ["ideology", "morality", "civilizing mission", "Social Darwinism", "religious conversion", "justification", "cause", "evidence", "thesis", "imperialism"],
      focus: ["State a defensible position on the claim.", "Support it with specific evidence from the topic.", "Explain your reasoning and consider the other side."]
    }
  ],

  images: [
    {
      title: "The Rhodes Colossus (Punch, 1892)",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Rhodes_Colossus.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Rhodes_Colossus.png",
      caption: "Cecil Rhodes bestrides Africa, imperial ambition rendered as heroic national achievement.",
      prompt: "Which ideology does this image promote most directly, nationalism, the civilizing mission, or racial hierarchy? Defend your reading."
    },
    {
      title: "The Berlin Conference, 1884",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg",
      caption: "European powers partition Africa around a conference table, no African representatives present.",
      prompt: "How might the civilizing mission and religious conversion have been used to justify what this image actually shows?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Sincere Belief or Calculated Justification?",
    task: "Weigh three kinds of evidence about the ideologies of empire. (1) Rudyard Kipling, 'The White Man's Burden' (1899), a poem urging colonial powers to take up the 'burden' of ruling 'sullen peoples, half devil and half child.' (2) Herbert Spencer's writings (1850s–1880s) applying evolutionary logic to argue stronger civilizations were right to dominate weaker ones. (3) Mid-19th-century British missionary society reports framing conversion as moral rescue and documenting the 'civilizing' effects of Christian schooling. [Sources are summarized from their historical content; verify exact excerpts against public-domain primary sources before classroom use.]",
    prompt: "Using at least two of these sources as evidence, construct an argument answering this question: Were the ideologies that justified imperialism sincere beliefs or calculated justifications, or both? My position is ___ because ___, and the strongest evidence for it is ___."
  },

  primarySource: {
    title: "Primary Source: Kipling, 'The White Man's Burden' (1899)",
    intro: "Published in response to U.S. annexation of the Philippines, Kipling's poem urged colonial powers to bear the cost of ruling other peoples, framing imperial domination as a duty rather than a choice. This is the widely reproduced opening stanza; the full text is in the public domain.",
    text: "Take up the White Man's burden,  / Send forth the best ye breed,  / Go bind your sons to exile / To serve your captives' need; / To wait in heavy harness, / On fluttered folk and wild,  / Your new-caught, sullen peoples, / Half devil and half child., Rudyard Kipling, 'The White Man's Burden,' 1899. [Verify the stanza verbatim against a reliable public-domain edition before final publication.]",
    questions: [
      "What ideology does Kipling's poem reflect, and how can you tell?",
      "What assumptions does the poem make about the people being colonized?",
      "What does the poem leave out, what does it not say about the actual experience of those peoples?"
    ]
  },

  beInTheRoom: {
    url: "",
    desc: "Step into West Africa in 1885 as a British colonial administrator negotiating a 'protectorate agreement' with a local chief, an agreement the chief does not fully understand will cede sovereignty. The scenario forces you to reason from inside imperial ideology, weighing the civilizing mission, nationalist framing, and claims of racial authority against what is actually being taken. [Scenario blueprint, HTML build pending; not assigned in this build.]"
  }

};
