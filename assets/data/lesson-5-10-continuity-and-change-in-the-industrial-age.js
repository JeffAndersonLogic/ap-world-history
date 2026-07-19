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
    unit: "Unit 5: Revolutions",
    topic: "Topic 5.10",
    title: "Continuity and Change in the Industrial Age",
    subtitle: "Arguing the extent to which industrialization transformed economic, technological, and political life between 1750 and 1900, and what stayed the same",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: "I can use specific developments from across Unit 5 as evidence of the changes industrialization brought between 1750 and 1900, in economic life, technology, and global connectivity.",
      kc: "Unit 5 Learning Objective K"
    },
    {
      target: "I can identify the continuities that persisted alongside industrialization, enduring social hierarchies, the ongoing struggle for rights and representation, and the Enlightenment and nationalist currents that kept shaping the era.",
      kc: "Continuity and Change"
    },
    {
      target: "I can write a defensible 'extent to which' argument that weighs change against continuity and supports a clear thesis with specific evidence.",
      kc: "AP Historical Thinking Skill: Argumentation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name at least two specific changes industrialization brought, for example, the rise of industrial capitalism and mass-produced consumer goods, or the railroad, steamship, and telegraph, and tie each to a Unit 5 key concept.",
      kc: "Evidence of Change"
    },
    {
      criteria: "I can name at least one meaningful continuity, such as the persistence of steep hierarchies between owners and workers, or the continued push for rights through labor and reform movements, and explain why it counts as continuity rather than change.",
      kc: "Evidence of Continuity"
    },
    {
      criteria: "I can state a defensible thesis that takes a position on the extent of change, support both sides with specific evidence, and explain my reasoning instead of only listing facts.",
      kc: "Argumentation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-5.1",
      theme: "Economic Systems",
      text: "The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.",
      illustrativeExamples: []
    },
    {
      code: "KC-5.1.IV",
      theme: "Technology and Innovation",
      text: "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.",
      illustrativeExamples: []
    },
    {
      code: "KC-5.3",
      theme: "Governance",
      text: "The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.",
      illustrativeExamples: []
    },
    {
      code: "KC-5.3.I.A",
      theme: "Cultural Developments and Interactions",
      text: "Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.",
      illustrativeExamples: []
    },
    {
      code: "KC-5.3.I",
      theme: "Cultural Developments and Interactions",
      text: "The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.",
      illustrativeExamples: []
    },
    {
      code: "KC-5.3.II.i",
      theme: "Governance",
      text: "Nationalism also became a major force shaping the historical development of states and empires.",
      illustrativeExamples: []
    }
  ],

  stableImages: {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World.svg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png'
  },

  map: {
    title: "Map: Where and How Industrialization Reshaped the World, c. 1750–1900",
    intro: "Use this sourced world map as a clean geographic reference while you build your argument. The work of 5.10 is not learning a new place, it is deciding, across the whole world of Unit 5, how much industrialization changed and how much stayed the same.",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BlankMap-World.svg",
    caption: "Wikimedia Commons blank world map, used as a sourced geographic reference for arguing the extent of change in the industrial age.",
    notes: [
      "Start by separating change from continuity, they are the two halves of your argument.",
      "Change is easiest to see in economy and technology: industrial capitalism, factories, railroads, steamships, the telegraph.",
      "Continuity is easiest to miss: steep social hierarchies survived, and the fight for rights and representation kept going.",
      "Enlightenment ideas and nationalism did not stop in 1800, they kept driving revolutions and new nation-states across this whole period.",
      "A strong answer doesn't just list both, it takes a position on how much changed."
    ],
    key: [
      { label: "Change", detail: "Industrial capitalism, mass-produced goods, and the railroad/steamship/telegraph reorganized economic and global life (KC-5.1, KC-5.1.IV)." },
      { label: "Continuity", detail: "Hierarchies between owners and workers persisted, and movements for rights and representation continued the unfinished work of earlier revolutions." },
      { label: "Persistent ideas", detail: "Enlightenment thought and nationalism kept shaping revolutions and state-building throughout 1750–1900 (KC-5.3, KC-5.3.I, KC-5.3.I.A, KC-5.3.II.i)." },
      { label: "The argument move", detail: "Weigh the two against each other and commit to an extent claim, far-reaching, limited, or uneven." }
    ],
    prompt: "Across the world of Unit 5, where do you see the deepest change industrialization caused, and where do you see the strongest evidence that things stayed the same?"
  },

  first10: {
    title: "First & 10: How Much Really Changed?",
    embedUrl: "first-and-10-topic-5-10-continuity-and-change-in-the-industrial-age-capture.html",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.10 lesson path."
  },

  lecture: {
    title: "Lecture: How Much Did Industrialization Change the World?",
    intro: "Topic 5.10 is not new content, it is the unit's argument. The Learning Objective asks you to explain the extent to which industrialization brought change from 1750 to 1900. That word, extent, means you must weigh two things against each other: what genuinely transformed, and what carried on. These cards organize the evidence into change, continuity, and the argument that ties them together.",
    segments: [
      {
        title: "Change, A New Economic Order",
        bullets: [
          "The biggest economic change was the rise of **industrial capitalism**: wealth now came from factories, machines, and invested capital, not only from land (KC-5.1).",
          "Mass production made goods cheaper and more plentiful. The textile industry, driven by inventions like the spinning jenny and the power loom, put manufactured cloth within reach of ordinary people for the first time.",
          "Standards of living rose **for some**, the growing middle class especially, while factory and mine workers often saw little of the new wealth. That uneven benefit is itself part of the argument."
        ],
        image: {
          title: "Power-loom weaving, 1835",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg",
          caption: "Mechanized textile production is core evidence for economic change (KC-5.1)."
        }
      },
      {
        title: "Change, Shrinking the Globe",
        bullets: [
          "**Railroads, steamships, and the telegraph** collapsed distance, opening interior regions and accelerating trade and migration worldwide (KC-5.1.IV).",
          "Rail projects such as the Transcontinental Railroad moved people and goods across continents at speeds impossible a generation earlier.",
          "The telegraph let information travel almost instantly, a genuine break from every earlier era of human communication."
        ],
        image: {
          title: "Manchester from Kersal Moor (William Wyld)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
          caption: "Industrial cities and networks remade where and how people lived and connected (KC-5.1.IV)."
        }
      },
      {
        title: "Continuity, Old Hierarchies, New Names",
        bullets: [
          "Industrialization created new classes, but **steep hierarchy itself persisted**: a small group held the wealth and power while the majority labored, the long-standing pattern, in industrial clothing.",
          "The **struggle for rights and representation continued**, not started. Labor unions organized workers to demand better wages and hours, extending older fights over who counts politically.",
          "**Feminist movements** pressed for suffrage and education, thinkers like Mary Wollstonecraft and the 1848 Seneca Falls Convention carried forward the rights language of the earlier revolutionary era."
        ],
        image: {
          title: "A Court for King Cholera (Punch, 1852)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png",
          caption: "Sharp inequality between classes was a continuity industrialization intensified rather than erased."
        }
      },
      {
        title: "Continuity, Ideas That Outlasted the 18th Century",
        bullets: [
          "The **Enlightenment** did not end with the 1700s. Its ideas about reason, natural rights, and the social contract kept circulating and kept preceding revolutions across the period (KC-5.3.I, KC-5.3.I.A).",
          "The era of **revolution and the building of new nation-states** that began in the 18th century continued throughout the 1800s (KC-5.3).",
          "**Nationalism** remained a major force shaping states and empires (KC-5.3.II.i), visible in the unifications of Germany and Italy and in independence movements in Latin America."
        ],
        image: {
          title: "Manchester from Kersal Moor (William Wyld)",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
          caption: "Political and ideological currents from the 1700s continued to drive change long into the industrial age."
        }
      },
      {
        title: "Write the 'Extent' Argument",
        bullets: [
          "Take a position on how much changed, far-reaching, limited, or uneven across regions and classes.",
          "Marshal evidence on **both** sides: at least one strong change and one strong continuity.",
          "Explain the reasoning that connects your evidence to your position. Naming facts is not arguing.",
          "End with a thesis a reasonable person could disagree with, that is what makes it defensible."
        ],
        image: {
          title: "Blank world map",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:BlankMap-World.svg",
          caption: "A world-scale prompt: your job is to judge the extent of change, not just describe it."
        }
      }
    ],
    videos: [
      {
        title: "Heimler's History, AP World Unit 5 review (search)",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+Unit+5+continuity+and+change+industrialization",
        prompt: "Watch for how to weigh change against continuity when arguing the extent of transformation."
      }
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Same Year, Two Verdicts",
    text: "It is 1900. A factory owner's son boards a train, sends a telegram ahead, and marvels that the world his grandparents knew is gone, everything has changed. The same afternoon, a mill worker finishes a twelve-hour shift, hands her wages to her mother for rent, and would tell you that nothing has changed: the powerful still hold the power, and people like her are still fighting to be heard. Both are looking at the same century. Both are right about part of it.",
    prompt: "Why does the extent of change look so different depending on who is asked? Use both viewpoints to explain why a strong argument about this period has to weigh change against continuity rather than choose only one."
  },

  skillBuilder: {
    label: "Argumentation",
    title: "AP Skill Builder: The 'Extent of Change' Argument",
    intro: "Learning Objective K asks you to explain the extent to which industrialization brought change. 'Extent' is an argument word, it means you must take a defensible position on how much changed, not just list changes. This builder walks the four moves of that argument.",
    steps: [
      {
        label: "Take a position on extent",
        text: "Commit to a claim about how much changed: far-reaching, limited, or uneven. 'Industrialization transformed economic and global life more than it changed who held social and political power' is a defensible position, it can be argued and it can be challenged."
      },
      {
        label: "Marshal evidence of change",
        text: "Support the 'change' side with specifics tied to key concepts: industrial capitalism and mass-produced goods (KC-5.1); the railroad, steamship, and telegraph reshaping trade and migration (KC-5.1.IV)."
      },
      {
        label: "Marshal evidence of continuity",
        text: "Support the 'continuity' side: steep hierarchy between owners and workers persisted; the struggle for rights and representation continued through labor and reform movements; Enlightenment ideas and nationalism kept driving revolutions and new states (KC-5.3, KC-5.3.I, KC-5.3.I.A, KC-5.3.II.i)."
      },
      {
        label: "Weigh and qualify",
        text: "Explain why the balance tips the way your thesis says. A strong answer concedes the other side, 'although hierarchies persisted, the economic and technological break was so deep that…', and that qualification is what earns the complexity point."
      }
    ],
    prompt: "Write ONE defensible 'extent to which' thesis about industrialization between 1750 and 1900. Take a clear position on how much changed, and signal in the same sentence that you will weigh both change and continuity. (Write it yourself, your AI Coach will push on it, not write it for you.)"
  },

  checkpoints: [
    {
      title: "Checkpoint 1: Marshal the Evidence",
      subtitle: "Checks Learning Targets 1 & 2, gathering evidence of change and of continuity.",
      cardDesc: "Build two evidence lists, what changed and what stayed the same, before you argue.",
      learningTargets: [
        "I can use specific developments from across Unit 5 as evidence of the changes industrialization brought between 1750 and 1900, in economic life, technology, and global connectivity.",
        "I can identify the continuities that persisted alongside industrialization, enduring social hierarchies, the ongoing struggle for rights and representation, and the Enlightenment and nationalist currents that kept shaping the era."
      ],
      successCriteria: [
        "I can name at least two specific changes industrialization brought, for example, the rise of industrial capitalism and mass-produced consumer goods, or the railroad, steamship, and telegraph, and tie each to a Unit 5 key concept.",
        "I can name at least one meaningful continuity, such as the persistence of steep hierarchies between owners and workers, or the continued push for rights through labor and reform movements, and explain why it counts as continuity rather than change."
      ],
      prompt: "Before you argue extent, gather your evidence. (1) Name at least two specific changes industrialization brought between 1750 and 1900 and tie each to a key concept. (2) Name at least one meaningful continuity and explain why it counts as continuity rather than change. Be specific, this is the raw material your argument will stand on.",
      responseType: "Checkpoint 1",
      terms: ["industrial capitalism", "consumer goods", "railroad", "steamship", "telegraph", "social hierarchy", "rights and representation", "Enlightenment", "nationalism", "continuity", "change"],
      focus: ["Name two specific changes and tie each to a KC.", "Name one continuity and explain why it is continuity.", "Use specific evidence, not general statements."]
    },
    {
      title: "Checkpoint 2: Write the Argument",
      subtitle: "Checks Learning Target 3, the full 'extent to which' argument.",
      cardDesc: "Turn your evidence into a defensible argument about the extent of change.",
      learningTargets: [
        "I can write a defensible 'extent to which' argument that weighs change against continuity and supports a clear thesis with specific evidence."
      ],
      successCriteria: [
        "I can state a defensible thesis that takes a position on the extent of change, support both sides with specific evidence, and explain my reasoning instead of only listing facts."
      ],
      prompt: "Write a developed response that explains the extent to which industrialization brought change from 1750 to 1900. State a defensible thesis that takes a position on how much changed; support BOTH sides with specific evidence (at least one change and one continuity); and explain the reasoning that makes your position stronger than the alternative. Concede the other side at least once.",
      responseType: "Checkpoint 2",
      terms: ["extent", "thesis", "transformation", "continuity", "industrial capitalism", "technology", "social hierarchy", "reform movements", "nationalism", "evidence", "reasoning"],
      focus: ["State a defensible thesis on the extent of change.", "Support both change and continuity with specific evidence.", "Explain reasoning and concede the other side."]
    }
  ],

  images: [
    {
      title: "Mechanized textile mill, 1835",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg",
      caption: "Evidence of economic and technological change (KC-5.1).",
      prompt: "Is this stronger evidence for change or continuity? Defend your choice."
    },
    {
      title: "Industrial Manchester (William Wyld)",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
      caption: "The reshaped industrial landscape (KC-5.1.IV).",
      prompt: "What part of your extent argument could this image support?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Sort Change from Continuity",
    task: "Take the images and key concepts from this lesson and sort them into two columns, Change and Continuity. Then pick the single strongest item in each column to anchor your argument.",
    prompt: "My strongest evidence of CHANGE is ___ because ___. My strongest evidence of CONTINUITY is ___ because ___. Weighing them, industrialization brought change to a ___ (great / limited / uneven) extent because ___."
  },

  primarySource: {
    title: "Primary Source: Thinking Like a Historian of Change",
    intro: "This adapted skill passage models how historians judge the extent of change rather than simply cataloguing events.",
    text: "To judge how much an age really changed, do not only count what was new. Ask three questions. First, what genuinely broke with the past, a tool, a system, a way of living that had no real precedent? Second, what carried on beneath the surface, even while everything seemed to be in motion, who still held power, whose voices were still ignored, which old ideas were still doing their work? Third, weigh the two. An era can be transformed in its machines and markets while remaining stubbornly familiar in its hierarchies. The historian's task is not to declare 'everything changed' or 'nothing changed,' but to argue, with evidence, how much, and for whom.",
    questions: [
      "According to this passage, why is counting new inventions not enough to judge the extent of change?",
      "What does the passage mean by change on the surface but continuity underneath? Give one example from the industrial age.",
      "Apply the three questions to industrialization from 1750 to 1900: what is your defensible verdict on the extent of change, and for whom?"
    ]
  },

  beInTheRoom: {
    url: "",
    desc: "Step into a debate at the close of the industrial century and argue before a panel how much industrialization actually changed the world, marshalling evidence of transformation against evidence of continuity. [Scenario blueprint, HTML build pending; not assigned in this build.]"
  }

};
