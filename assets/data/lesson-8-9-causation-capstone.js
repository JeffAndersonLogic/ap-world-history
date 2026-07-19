// lesson-8-9-causation-capstone.js
// Topic 8.9, Causation in the Age of the Cold War and Decolonization
// Base lesson data. Runtime-authoritative overrides in lesson-8-9-renderer-config.js.
// Capstone topic: NO BeInTheRoom, NO Map module, NO BeSurreal, NO Evidence Lab,
// NO Primary Source, NO Checkpoint 1. Custom 6-module variant per capstone rule.

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
    unit: "Unit 8: Cold War and Decolonization",
    topic: "Topic 8.9",
    title: "Causation in the Age of the Cold War and Decolonization",
    subtitle: "Evaluating the Extent to Which the Effects of the Cold War Were Similar in the Eastern and Western Hemispheres",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the Cold War conflict extended beyond its ideological origins to have profound effects on economic, political, social, and cultural aspects of global events.",
      kc: "KC-6.2.IV.C",
      theme: "Historical Developments"
    },
    {
      target: "I can explain how peoples and states around the world challenged the existing political and social order in varying ways, including through anti-imperialist movements and the restructuring of states.",
      kc: "KC-6.2.II",
      theme: "Historical Developments"
    },
    {
      target: "I can evaluate the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres, using evidence of varied state responses to economic challenges and new institutions of global association.",
      kc: "Unit 8: Learning Objective K; KC-6.3.I",
      theme: "Historical Developments"
    }
  ],

  successCriteria: [
    {
      criteria: "I can identify economic, political, social, and cultural effects of the Cold War and categorize them by hemisphere, using specific evidence from Topics 8.1–8.8.",
      kc: "KC-6.2.IV.C",
      theme: "Historical Developments"
    },
    {
      criteria: "I can use specific evidence from at least two regions, one per hemisphere, to support or complicate a claim about the similarity of Cold War effects.",
      kc: "Evidence; Comparison",
      theme: "Historical Developments"
    },
    {
      criteria: "I can write an 'evaluate the extent' thesis that makes a defensible degree claim about Cold War effects and defends it with at least two specific pieces of historical evidence from both hemispheres.",
      kc: "Argumentation; LO K",
      theme: "Historical Developments"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Unit 8: Learning Objective K",
      theme: "Learning Objective",
      text: "Explain the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2",
      theme: "Historical Developments",
      text: "Peoples and states around the world challenged the existing political and social order in varying ways, leading to unprecedented worldwide conflicts.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.II",
      theme: "Historical Developments",
      text: "Hopes for greater self-government were largely unfulfilled following World War I; however, in the years following World War II, increasing anti-imperialist sentiment contributed to the dissolution of empires and the restructuring of states.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.C",
      theme: "Historical Developments",
      text: "The Cold War conflict extended beyond its basic ideological origins to have profound effects on economic, political, social, and cultural aspects of global events.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.3",
      theme: "Historical Developments",
      text: "The role of the state in the domestic economy varied, and new institutions of global association emerged and continued to develop throughout the century.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.3.I",
      theme: "Historical Developments",
      text: "States responded in a variety of ways to the economic challenges of the 20th century.",
      illustrativeExamples: []
    }
  ],

  stableImages: {
    map:             "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    contentDelivery: "https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG",
    first10:         "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    unitreview:      "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    matrix:          "https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG",
    skill:           "https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg",
    beSurreal:       "https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG",
    checkpoint1:     "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    evidence:        "https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg",
    source:          "https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG",
    beInTheRoom:     "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    checkpoint2:     "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png"
  },

  first10: {
    title: "First & 10: The Cold War's Global Reach",
    embedUrl: "first-and-10-topic-8-9-causation-capstone-capture.html?v=20260610",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.9 lesson path."
  },

  map: {
    title: "Mapping Cold War Effects Across Hemispheres",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_map_blank_without_borders.png",
    caption: "Use geography to test whether economic, political, social, and cultural effects followed similar patterns in the Eastern and Western Hemispheres.",
    intro: "Place every example from Topics 8.1–8.8 before evaluating similarity. A hemispheric argument fails if its evidence is not geographically accurate.",
    prompt: "Which Cold War effect appears most geographically widespread, and which is most regionally uneven? Defend both judgments with evidence.",
    key: [
      { label: "Eastern Hemisphere", detail: "Korea, Vietnam, Angola, Afghanistan, India, China, Eastern Europe, and African decolonization." },
      { label: "Western Hemisphere", detail: "The United States, Cuba, Guatemala, Chile, Nicaragua, and transatlantic alliance relationships." }
    ]
  },

  beSurreal: {
    title: "BeSurreal: A World Pulled by Two Magnets",
    desc: "Model how bipolar competition produced similar pressures but unequal outcomes.",
    intro: "An analogy is useful only when its limits are explained.",
    detail: "Imagine two magnets pulling on a map whose regions are made from different materials. Some align, some resist, and some try to remain nonaligned.",
    text: "Imagine two magnets pulling on a map whose regions are made from different materials. Some align, some resist, and some try to remain nonaligned.",
    prompt: "Explain what the magnets represent, why regions respond differently, and where the analogy breaks down historically."
  },

  evidenceLab: {
    title: "Evidence Lab: Hemispheric Cold War Effects",
    intro: "Sort evidence by hemisphere and effect category before deciding how similar the outcomes were.",
    task: "Select one evidence category, compare examples from both hemispheres, and explain what the comparison proves.",
    prompt: "Choose two examples from different hemispheres. Explain one structural similarity and one consequential difference.",
    items: [
      { title: "Proxy war", detail: "Compare Korea, Vietnam, or Angola with U.S. intervention in Guatemala, Chile, or Nicaragua." },
      { title: "State economic policy", detail: "Compare socialist planning, military spending, development projects, and aid leverage across the two hemispheres." },
      { title: "Social and cultural conflict", detail: "Compare censorship, propaganda, civil-rights activism, antiwar movements, and national cultural projects." }
    ]
  },

  primarySource: {
    title: "Primary-Source Workshop: Competing Cold War Claims",
    intro: "These short classroom adaptations capture recurring claims in superpower speeches and nonaligned critiques.",
    text: "Adapted U.S. claim: economic aid and collective security protected free peoples from coercion.<br><br>Adapted Soviet claim: socialist solidarity protected revolutionary states from imperial aggression.<br><br>Adapted nonaligned critique: both blocs treated newly independent states as arenas for competition rather than equal partners.",
    questions: [
      "What audience and purpose shaped each claim?",
      "Which historical example corroborates and which complicates each position?",
      "How can the three perspectives support an evaluate-the-extent thesis?"
    ],
    prompt: "Use two source claims and two specific events to evaluate the similarity of Cold War effects across hemispheres."
  },

  beInTheRoom: {
    url: "",
    desc: "The capstone synthesizes Unit 8 evidence instead of adding a separate simulation."
  },

  images: [
    { title: "Proxy-war geography", url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png", sourceUrl: "https://commons.wikimedia.org/wiki/File:World_map_blank_without_borders.png", caption: "Map Korea, Vietnam, Angola, Afghanistan, Guatemala, Chile, and Nicaragua before comparing intervention patterns.", prompt: "Which geographic pattern best supports a hemispheric comparison?" },
    { title: "Superpower diplomacy", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:Reagan_and_Gorbachev_1985.jpg", caption: "Superpower meetings shaped relationships and consequences far beyond the two states represented.", prompt: "How can diplomacy be both a bilateral event and evidence of global effects?" },
    { title: "The Berlin Wall falls", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG", sourceUrl: "https://commons.wikimedia.org/wiki/File:Thefalloftheberlinwall1989.JPG", caption: "The fall of the Berlin Wall carried political, social, and cultural meaning across hemispheres.", prompt: "Which effect category does this image support most strongly, and why?" }
  ],

  lecture: {
    title: "Unit 8 Synthesis: Cold War Effects Across Two Hemispheres",
    intro: "Use these lecture cards to frame the four effect categories of KC-6.2.IV.C before completing the Hemispheric Effects Matrix and your LEQ thesis.",
    segments: [
      {
        title: "The Four Effect Categories: Economic, Political, Social, Cultural",
        bullets: [
          "KC-6.2.IV.C identifies four categories of Cold War effect, economic, political, social, and cultural. These are not separate causes; they are dimensions of one rivalry's global impact.",
          "Economic: arms spending diverted resources from civilian economies; superpowers used aid as leverage over client states.",
          "Political: competing alliance systems (NATO vs. Warsaw Pact), sponsored governments, and decolonization accelerated by Cold War pressure on European empires.",
          "Social: refugee crises from proxy wars, propaganda and censorship, gender mobilization for war production, and anti-war movements.",
          "Cultural: the space race as ideological competition; American consumer culture as soft power; socialist realism as a Soviet counter-model."
        ],
        image: {
          title: "Fall of the Berlin Wall, 1989",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Thefalloftheberlinwall1989.JPG",
          caption: "The fall of the Berlin Wall was a political AND cultural effect of the Cold War, and it occurred in the Eastern Hemisphere. A strong LEQ uses specific moments like this to anchor hemisphere comparisons."
        }
      },
      {
        title: "Eastern Hemisphere Patterns (8.1–8.8 Evidence)",
        bullets: [
          "Decolonization (8.5): anti-imperialism in Asia and Africa accelerated by Cold War pressure on British and French empires.",
          "New states (8.6): boundary redrawing created displacement, state-led development (India's five-year plans, Egypt's Aswan Dam), and migration to metropoles.",
          "Proxy wars (8.3): Korea (1950–53), Vietnam (1955–75), Angola (1975), all Eastern Hemisphere theaters.",
          "Communism (8.4): Great Leap Forward in China; socialist redistribution in India, Egypt, and newly independent Africa.",
          "Soviet sphere (8.2, 8.8): Warsaw Pact states under Brezhnev Doctrine; Eastern European public discontent and 1989 revolutions leading to Soviet dissolution."
        ],
        image: {
          title: "Soviet withdrawal from Afghanistan, 1989",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Soviet_withdrawal_Afghanistan_1989.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Soviet_withdrawal_Afghanistan_1989.jpg",
          caption: "The Soviet withdrawal from Afghanistan was an Eastern Hemisphere event with global Cold War significance, one of three causal strands in KC-6.2.IV.E that ended the superpower rivalry."
        }
      },
      {
        title: "Western Hemisphere Patterns (8.1–8.8 Evidence)",
        bullets: [
          "Marshall Plan (8.1): U.S. economic reconstruction embedded American influence in Western Europe.",
          "NATO and U.S.-backed governments (8.2, 8.7): Chile (Pinochet coup, 1973), Guatemala (CIA coup, 1954), Nicaragua (Contra funding).",
          "Cuba (8.4): Cuban Revolution (1959), Bay of Pigs, Cuban Missile Crisis, the Cold War in the Western Hemisphere at its most acute.",
          "Social movements (8.7): civil rights and anti-war movements in the U.S., the Cold War's social effects on the Western superpower itself.",
          "Non-alignment (8.2): some Latin American states sought Bandung-era alternatives; the Western Hemisphere was not monolithically pro-U.S."
        ],
        image: {
          title: "Reagan and Gorbachev, Geneva, 1985",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Reagan_and_Gorbachev_1985.jpg",
          caption: "Reagan-Gorbachev summits, Western and Eastern Hemisphere superpowers in direct diplomatic engagement, are also evidence of new global institutions (KC-6.3) emerging from Cold War competition."
        }
      },
      {
        title: "Evaluating the Extent: Writing the LEQ Thesis",
        bullets: [
          "'Evaluate the extent' requires a degree claim: to a great extent, a moderate extent, a limited extent. A degree claim IS your thesis.",
          "Do NOT say 'partly similar and partly different', that is a non-claim. Name the dominant pattern and acknowledge where it breaks.",
          "Your thesis should name the categories or patterns that most strongly support your degree claim.",
          "Complexity move: acknowledge the strongest counterargument. If you argued 'largely similar,' what evidence would a historian who argued 'largely different' cite? Why does your claim still hold?",
          "Contextualization: ground your argument in the postwar order (c. 1945) that made Cold War effects global, imperial exhaustion, superpower rivalry, nuclear deterrence, and the vacuum decolonization created."
        ],
        image: {
          title: "World map (geographic reference)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_map_blank_without_borders.png",
          caption: "A world map anchors hemisphere claims. Before writing your thesis, place your evidence geographically, Eastern or Western? Does the pattern hold in both?"
        }
      }
    ],
    videos: []
  },

  skillBuilder: {
    title: "AP Skill Builder: Build the LEQ, Evaluate the Extent",
    label: "LEQ construction, evaluate the extent (LO K)",
    intro: "Use your completed Hemispheric Effects Matrix to plan each component of the AP 'evaluate the extent' LEQ before writing your full response in Checkpoint 2.",
    steps: [
      {
        label: "Contextualization",
        text: ", Describe the postwar world order (c. 1945) that explains WHY Cold War competition had effects beyond Europe: imperial exhaustion, superpower rivalry, nuclear deterrence, and the vacuum that decolonization created. Contextualization must precede your argument, not repeat it."
      },
      {
        label: "Thesis, degree claim",
        text: ", 'To a [great/moderate/limited] extent, the effects of the Cold War were [similar/different] in the Eastern and Western Hemispheres because [name the dominant patterns].' A vague 'partly similar, partly different' earns no AP credit. Your thesis must commit to a degree."
      },
      {
        label: "Evidence Paragraph 1, Eastern Hemisphere",
        text: ", Use at least two specific pieces of evidence from Topics 8.2–8.8 (proxy wars, decolonization, new states, communism, Soviet dissolution). Explain HOW each piece supports your thesis, mechanism, not just naming."
      },
      {
        label: "Evidence Paragraph 2, Western Hemisphere",
        text: ", Use at least two specific pieces of evidence from Topics 8.1–8.8 (Marshall Plan, NATO, CIA-backed regimes, Cuba, civil rights/anti-war movements). Explain HOW each piece supports your thesis."
      },
      {
        label: "Complexity move",
        text: ", Acknowledge the strongest counterargument: if you argued 'largely similar,' what would a 'largely different' historian cite? Explain why your original claim still holds more explanatory power despite that evidence."
      }
    ],
    prompt: "Using your Hemispheric Effects Matrix, plan each of the five LEQ components above. You do not need to write full paragraphs yet, name your specific evidence for each paragraph, draft your thesis sentence, and identify your complexity move before writing the full response in Checkpoint 2."
  },

  checkpoints: [
    {
      title: "Checkpoint 1: Sort and Explain the Evidence",
      subtitle: "Checks evidence selection before the full LEQ.",
      cardDesc: "Classify Cold War effects by hemisphere and explain one comparison.",
      learningTargets: ["I can categorize economic, political, social, and cultural effects by hemisphere."],
      successCriteria: ["I use accurate examples from both hemispheres and explain a similarity or difference."],
      prompt: "Select one Cold War effect category. Compare one Eastern Hemisphere example with one Western Hemisphere example, explaining the mechanism that makes them similar or different.",
      responseType: "Checkpoint 1",
      terms: ["Eastern Hemisphere", "Western Hemisphere", "economic", "political", "social", "cultural"],
      focus: ["Geographic accuracy", "Specific evidence", "Explained comparison"]
    },
    {
      title: "Checkpoint 2: Evaluate the Extent, Full LEQ",
      subtitle: "Checks all three Learning Targets (LO K, full 'evaluate the extent' synthesis).",
      cardDesc: "AP-style LEQ: evaluate the extent to which Cold War effects were similar in the Eastern and Western Hemispheres, using evidence from at least two effect categories and both hemispheres.",
      learningTargets: [
        "I can explain how the Cold War extended beyond ideology to have economic, political, social, and cultural effects globally.",
        "I can explain how peoples and states challenged the existing order through anti-imperialist movements and the restructuring of states.",
        "I can evaluate the extent to which Cold War effects were similar in the Eastern and Western Hemispheres."
      ],
      successCriteria: [
        "I can categorize Cold War effects by hemisphere and effect type (economic, political, social, cultural).",
        "I can use specific evidence from at least two regions, one per hemisphere, to support my thesis.",
        "I can write an 'evaluate the extent' thesis with a defensible degree claim and acknowledge a counterargument."
      ],
      prompt: "Evaluate the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres. In your response: (1) provide meaningful contextualization that explains why Cold War competition produced global effects beyond its origins in postwar Europe; (2) state a defensible thesis with a degree qualifier, whether the effects were largely similar, largely different, or mixed, and name the specific patterns that support your claim; (3) use specific historical evidence from at least two of the four effect categories in KC-6.2.IV.C (economic, political, social, cultural) and from both hemispheres; (4) explain the mechanism for each piece of evidence, not just what happened but HOW it demonstrates similarity or difference; (5) acknowledge the strongest counterargument to your thesis and explain why your degree claim remains more persuasive despite that evidence.",
      responseType: "Checkpoint 2",
      terms: ["economic", "political", "social", "cultural", "eastern hemisphere", "western hemisphere", "extent", "similar", "different", "marshall plan", "nato", "warsaw pact", "decolonization", "proxy war", "korea", "vietnam", "cuba", "angola", "chile", "great leap forward", "nonalignment", "civil rights", "gorbachev", "contextualization", "thesis", "mechanism", "because", "caused", "degree", "to a"],
      focus: [
        "Contextualization must describe a condition that PRECEDED Cold War effects, the postwar order, not World War II itself. Explain why the postwar configuration (superpower rivalry, imperial exhaustion, nuclear deterrence) made Cold War competition global.",
        "Thesis degree claim: 'To a great/moderate/limited extent' must be explicit. Avoid 'partly similar and partly different', that is not a defensible historical claim.",
        "Evidence mechanism: A Warsaw Pact state and a NATO state both had political sovereignty constrained by a superpower, that structural parallel IS the similarity you are arguing. Naming evidence is not enough; explain what it proves.",
        "Counterargument: if you argue similarity, what evidence points toward difference (e.g., decolonization was an Eastern Hemisphere phenomenon with no Western Hemisphere parallel)? Engage it directly, then explain why your claim still holds."
      ]
    }
  ]

};
