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
    topic: "Topic 8.2",
    title: "The Cold War",
    subtitle: "How rival ideologies, military alliances, and superpower competition divided the world, and why some nations refused to choose a side",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the shift in the global balance of economic and political power during and after World War II produced ideological conflict between the capitalist United States and the communist Soviet Union.",
      kc: "KC-6.2.IV.C.ii",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain the effects of the power struggle between capitalism and communism on international relations, including military alliances, the arms race, and proxy conflicts.",
      kc: "KC-6.2.IV.C.ii",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain how groups and individuals, including the Non-Aligned Movement, opposed and promoted alternatives to the existing economic, political, and social orders.",
      kc: "KC-6.2.V.B",
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use evidence such as the Truman Doctrine (1947) and Marshall Plan (1948) to explain how the United States and Soviet Union developed opposing ideologies and competed for global influence after World War II.",
      kc: "KC-6.2.IV.C.ii",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain how the formation of NATO (1949) and the Warsaw Pact (1955), the nuclear arms race, and proxy conflicts such as the Korean War (1950–1953) and Vietnam War (1955–1975) were effects of the capitalist-communist power struggle.",
      kc: "KC-6.2.IV.C.ii",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain how Sukarno (Indonesia) and Kwame Nkrumah (Ghana), through the Non-Aligned Movement and the 1955 Bandung Conference, offered an alternative to the binary Cold War order rooted in anti-colonialism, sovereignty, and self-determination.",
      kc: "KC-6.2.V.B",
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Cultural Developments and Interactions (CDI)",
      theme: "Cultural Developments and Interactions",
      text: "The development of ideas, beliefs, and religions illustrates how groups in society view themselves, and the interactions of societies and their beliefs often have political, social, and cultural implications.",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective B",
      theme: "Learning Objective",
      text: "Explain the causes and effects of the ideological struggle of the Cold War.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.C.ii",
      theme: "Cultural Developments and Interactions",
      text: "The global balance of economic and political power shifted during and after World War II and rapidly evolved into the Cold War. The democracy of the United States and the authoritarian communist Soviet Union emerged as superpowers, which led to ideological conflict and a power struggle between capitalism and communism across the globe.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.V.B",
      theme: "Cultural Developments and Interactions",
      text: "Groups and individuals, including the Non-Aligned Movement, opposed and promoted alternatives to the existing economic, political, and social orders.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "The Cold War: Two Worldviews, One Divided World",
    intro: "Use these cards to trace how WWII's shift in global power produced ideological conflict between the U.S. and Soviet Union, how that conflict shaped international relations through alliances and proxy wars, and why newly independent nations sought a third way.",
    videos: [
      {
        title: "Heimler's History, Topic 8.2: The Cold War",
        url: "https://youtu.be/wE18YnW6mME",
        youtubeId: "wE18YnW6mME",
        prompt: "Use this clip to review the causes and effects of the Cold War ideological struggle, listen especially for how the conflict spread globally through alliances and proxy wars."
      }
    ],
    segments: [
      {
        title: "Two Worldviews Collide",
        bullets: [
          "WWII left the **United States** and the **Soviet Union** as the world's only great powers, and revealed they had fundamentally different visions for the post-war world.",
          "The United States promoted **liberal capitalism**: open markets, multiparty democracy, and individual rights, backed by its dominant industrial economy, roughly half of global industrial output in 1945.",
          "The Soviet Union promoted **Marxism-Leninism**: state control of the economy, one-party communist rule, and collective ownership, arguing that communism represented true liberation from capitalist exploitation.",
          "The **Truman Doctrine (1947)** announced U.S. commitment to 'contain' communist expansion, beginning with $400 million in aid to Greece and Turkey to prevent Soviet-aligned governments from gaining power.",
          "The **Marshall Plan (1948)** committed $13 billion in U.S. aid to rebuild Western Europe, explicitly designed to prevent communist parties from winning power in economically devastated countries.",
          "Soviet control over Eastern Europe, Poland, Czechoslovakia, Hungary, Romania, Bulgaria, and East Germany, behind what Churchill called the **Iron Curtain** established the rival bloc."
        ],
        image: {
          title: "The Marshall Plan, 1948",
          caption: "The Marshall Plan committed $13 billion in U.S. economic aid to rebuild Western Europe, and to anchor it within the American sphere of influence against communist expansion.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Marshall_Plan.png"
        }
      },
      {
        title: "A Divided World: Alliances, Arms Race, and Proxy Wars",
        bullets: [
          "**NATO (1949)** formalized the Western military alliance, 12 nations committed to collective defense under American leadership. The **Warsaw Pact (1955)** established the Soviet-aligned military bloc in Eastern Europe, institutionalizing the Cold War division.",
          "The **nuclear arms race** defined the Cold War's existential stakes: the U.S. developed the atomic bomb in 1945; the USSR tested its first in 1949. By the 1960s, both possessed enough warheads for **Mutually Assured Destruction (MAD)**.",
          "The Cold War turned violent through **proxy conflicts**, wars where the U.S. and USSR backed opposing sides without direct confrontation, making the ideological struggle into armed conflict across the developing world.",
          "**Korea (1950–1953)**: Soviet and Chinese-backed North Korea invaded U.S.-backed South Korea. After three years and over 3 million deaths, the peninsula remained divided at the 38th parallel, exactly where it started.",
          "**Vietnam (1955–1975)**: Communist North Vietnam (Soviet and Chinese-backed) fought South Vietnam (U.S.-backed) in a conflict that killed over 2 million Vietnamese and ultimately reunified the country under communism in 1975."
        ],
        image: {
          title: "The Berlin Wall, built 1961",
          caption: "The Berlin Wall became the most visible symbol of the Iron Curtain, a physical barrier between communist East Germany and capitalist West Berlin.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Berlinermauer.jpg"
        }
      },
      {
        title: "A Third Way: The Non-Aligned Movement",
        bullets: [
          "Many newly independent nations rejected the Cold War's binary choice. The **1955 Bandung Conference** in Indonesia brought together 29 Asian and African states to chart an independent path between the two superpowers.",
          "**Sukarno of Indonesia** (CED illustrative example) positioned Bandung as the moment when the newly decolonized world would speak with its own voice, not as an extension of either superpower's agenda.",
          "**Kwame Nkrumah of Ghana** (CED illustrative example) argued that the Cold War was a new form of foreign domination: accepting aid from either superpower risked reproducing the dependency of colonial rule.",
          "India's **Jawaharlal Nehru** argued that the Cold War bloc system reproduced the imperial pattern, great powers dictating terms to smaller nations. **Non-alignment was an active ideology** rooted in anti-colonialism, sovereignty, and self-determination.",
          "The Non-Aligned Movement asserted that newly independent nations had the right to define their own beliefs about the world order, not simply choose between two versions of foreign control imposed by others."
        ],
        image: {
          title: "Kwame Nkrumah, Ghana, 1957",
          caption: "Kwame Nkrumah of Ghana argued that true independence meant refusing economic and military dependency on either Cold War bloc, a core principle of the Non-Aligned Movement.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah.jpg"
        }
      }
    ]
  },

  map: {
    title: "Cold War Military Alliances, 1955",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_war_europe_military_alliances_map_en.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cold_war_europe_military_alliances_map_en.png",
    caption: "NATO and Warsaw Pact members, 1955, the Cold War division of Europe and its military alliance systems.",
    intro: "Use the map to identify the extent of U.S. and Soviet military alliance systems by 1955. The map shows a world divided into rival blocs, but notice what is absent: most of Asia, Africa, and Latin America are not formally on either side.",
    prompt: "What does the map reveal about the geographic limits of the Cold War alliance system? Where would you look on this map for evidence of the Non-Aligned Movement?",
    notes: [
      "NATO (1949) included the United States, United Kingdom, France, West Germany, and other Western European democracies committed to collective defense.",
      "The Warsaw Pact (1955) brought together the Soviet Union and its Eastern European satellite states under Soviet military command.",
      "Most of Asia, Africa, and the Middle East fell outside both formal alliance systems, the space where the Non-Aligned Movement would claim its place.",
      "The gap between the two alliance systems shows that the Cold War was a superpower conflict that much of the world refused to join."
    ]
  },

  first10: {
    title: "First & 10: The Cold War",
    embedUrl: "first-and-10-topic-8-2-cold-war-capture.html?v=20260610"
  },

  images: [
    {
      title: "The Marshall Plan, 1948",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marshall_Plan.png",
      caption: "The Marshall Plan (1948) committed $13 billion in U.S. aid to rebuild Western Europe, and to anchor it within the American sphere of influence.",
      prompt: "Is the Marshall Plan best understood as American generosity, American strategy, or both? What does this source reveal about how the U.S. used economic power as an instrument of Cold War competition?"
    },
    {
      title: "The Berlin Wall, 1961",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlinermauer.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Berlinermauer.jpg",
      caption: "The Berlin Wall, built in 1961, became the most visible symbol of the Iron Curtain, dividing communist East Germany from capitalist West Berlin.",
      prompt: "What does the Berlin Wall reveal about the nature of the Cold War divide? How does a physical wall embody the ideological conflict between capitalism and communism?"
    },
    {
      title: "Kwame Nkrumah, Ghana, 1957",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah.jpg",
      caption: "Kwame Nkrumah led Ghana to independence in 1957 and became one of the founding voices of the Non-Aligned Movement.",
      prompt: "How does Nkrumah's background, colonial subject, pan-Africanist, leader of the first sub-Saharan African independent state, shape his position on Cold War superpower rivalry?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Interpreting the Cold War",
    task: "Choose one image and explain what it reveals about the ideological conflict between the United States and Soviet Union, the effects of the Cold War on international relations, or the Non-Aligned Movement's response to superpower rivalry.",
    prompt: "This image shows... It is evidence of [choose: superpower rivalry / military alliance / proxy conflict / Non-Aligned Movement] because... It supports a claim about the Cold War because..."
  },

  primarySource: {
    title: "Primary Source: President Truman's Address to Congress (March 12, 1947)",
    intro: "On March 12, 1947, President Harry Truman addressed a joint session of Congress to request $400 million in aid for Greece and Turkey, both facing communist insurgencies. His speech went beyond the immediate request. Truman framed the Cold War in explicitly ideological terms: two 'ways of life' in competition, one free and one totalitarian. The speech became the foundation of the Truman Doctrine, the U.S. policy of 'containing' communist expansion by supporting governments threatened by Soviet-backed movements. For nationalist leaders watching from Asia and Africa, Truman's speech raised a pointed question: was the 'free world' he described actually free for everyone?",
    text: "At the present moment in world history nearly every nation must choose between alternative ways of life. The choice is too often not a free one. One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression. The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms. I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.",
    questions: [
      "How does Truman frame the Cold War? What two 'ways of life' does he describe, and what assumptions does this binary framing make about the rest of the world?",
      "How might a nationalist leader in Indonesia, Ghana, or India interpret this speech, especially the phrase 'support free peoples'? Would they see themselves as included in Truman's definition of 'free'?",
      "How does this source help explain why the Non-Aligned Movement emerged? What about Truman's binary framing might have made non-alignment an attractive alternative for newly independent nations?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Duck and Cover",
    desc: "American schoolchildren in the 1950s were taught to crouch under their desks to survive a nuclear attack.",
    intro: "In 1951, the U.S. Federal Civil Defense Administration released a film featuring Bert the Turtle, who duck-and-covered when danger struck.",
    detail: "Throughout the 1950s and 1960s, American children practiced 'duck and cover' drills, crouching under school desks with hands over the backs of their necks, as preparation for a Soviet nuclear strike. Physicists privately acknowledged that a wooden desk would provide no meaningful protection from a nuclear weapon capable of vaporizing a city. The drills continued for over a decade.",
    text: "In 1951, the U.S. Federal Civil Defense Administration released a short film featuring Bert the Turtle, who ducked into his shell when danger struck. Schoolchildren across the country watched the film, then practiced the 'duck and cover' drill, dropping to the floor and hiding under their desks with hands clasped over the backs of their necks. The drills were conducted with the same routine as fire drills, school year after school year, through the 1950s and into the 1960s. Physicists quietly noted that a wooden desk would provide no measurable protection from a nuclear weapon capable of vaporizing an entire city. The drills continued anyway, because the alternative, telling American children that their government could not protect them from nuclear annihilation, was unacceptable.",
    prompt: "What does 'duck and cover' reveal about how governments managed public psychology during the nuclear arms race? Why would a government promote a civil defense drill it knew was scientifically inadequate?"
  },

  skillBuilder: {
    label: "Causation practice",
    title: "Explain the Causes and Effects of the Cold War",
    intro: "AP Learning Objective B asks you to 'explain the causes and effects of the ideological struggle of the Cold War.' Causation means identifying what produced the Cold War and what the Cold War then produced. For 8.2: causes include the WWII shift in global power that left two rival superpowers with opposing ideologies. Effects include military alliances (NATO/Warsaw Pact), the arms race, proxy conflicts, and the Non-Aligned Movement's emergence as a response.",
    steps: [
      { label: "Cause", text: "WWII destroyed European power and produced two rival superpowers with incompatible ideologies: American liberal capitalism vs. Soviet Marxism-Leninism. The shift in the balance of power was the underlying cause of the Cold War's ideological struggle." },
      { label: "Effect (institutions)", text: "The Truman Doctrine (1947) and Marshall Plan (1948) formalized U.S. containment. NATO (1949) and the Warsaw Pact (1955) institutionalized the military divide. The nuclear arms race made the conflict existential." },
      { label: "Effect (response)", text: "Proxy conflicts, Korea and Vietnam, made the ideological struggle violent across the globe. The Non-Aligned Movement emerged as a direct response, asserting that newly independent nations could refuse the Cold War's binary choice." }
    ],
    prompt: "Write a causation argument in two or three sentences: identify at least one cause of the Cold War ideological struggle, and explain at least two of its effects, one from the alliance or arms race dimension, and one from the Non-Aligned Movement or proxy conflict dimension."
  }

};
