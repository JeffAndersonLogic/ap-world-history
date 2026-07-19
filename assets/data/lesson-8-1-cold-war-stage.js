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
    topic: "Topic 8.1",
    title: "Setting the Stage for the Cold War and Decolonization",
    subtitle: "How unfulfilled promises, exhausted empires, and two rising superpowers set the terms for the world after 1945",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how unfulfilled hopes for self-government after World War I fueled anti-imperialist sentiment in the years following World War II.",
      kc: "KC-6.2.II",
      theme: "Governance"
    },
    {
      target: "I can explain how World War II weakened European colonial powers, contributing to the dissolution of empires and the restructuring of states.",
      kc: "KC-6.2.II",
      theme: "Governance"
    },
    {
      target: "I can explain how technological and economic gains by the victorious nations of World War II shifted the global balance of power and set the conditions for the Cold War.",
      kc: "KC-6.2.IV.C.i",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use the post-WWI mandate system and suppressed interwar nationalist movements to explain why anti-imperialist sentiment intensified after 1945.",
      kc: "KC-6.2.II",
      theme: "Governance"
    },
    {
      criteria: "I can use evidence such as British war debt, Indian independence (1947), and Ghana's independence (1957) to explain how WWII weakened European colonial powers and contributed to decolonization.",
      kc: "KC-6.2.II",
      theme: "Governance"
    },
    {
      criteria: "I can explain how the U.S. and Soviet Union emerged from WWII as rival superpowers, and how developments such as the Marshall Plan (1948) and the formation of NATO set the conditions for the Cold War.",
      kc: "KC-6.2.IV.C.i",
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
      code: "Unit 8: Learning Objective A",
      theme: "Learning Objective",
      text: "Explain the historical context of the Cold War after 1945.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.II",
      theme: "Governance",
      text: "Hopes for greater self-government were largely unfulfilled following World War I; however, in the years following World War II, increasing anti-imperialist sentiment contributed to the dissolution of empires and the restructuring of states.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.C.i",
      theme: "Governance",
      text: "Technological and economic gains experienced during World War II by the victorious nations shifted the global balance of power.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Setting the Stage: Promises, Exhaustion, and Two Powers Standing",
    intro: "Use these cards to trace how unfulfilled post-WWI promises, WWII's devastating cost for European empires, and the rise of the United States and Soviet Union created the conditions for both decolonization and Cold War rivalry after 1945.",
    videos: [
      {
        title: "Heimler's History, Topic 8.1: Setting the Stage",
        url: "https://youtu.be/XfEK_BsTf0E",
        youtubeId: "XfEK_BsTf0E",
        prompt: "Use this clip to review how WWII set the stage for both the Cold War and decolonization, listen for what changed in the global balance of power."
      }
    ],
    segments: [
      {
        title: "Promises Deferred: Self-Determination After WWI",
        bullets: [
          "Wilson's **Fourteen Points** (1918) raised hopes for national self-determination, the idea that peoples should govern themselves.",
          "The **Paris Peace Conference (1919)** instead created the League of Nations **Mandate System**, placing Germany's former colonies under British and French administration.",
          "Interwar nationalist movements, the **Indian National Congress**, pan-African congresses, Vietnamese independence movements, were suppressed or co-opted.",
          "By 1945 the grievances had not disappeared. They had intensified: colonial subjects who had fought for the Allies expected their sacrifices to be rewarded with self-government."
        ],
        image: {
          title: "Indian National Congress session, 1920s",
          caption: "The Indian National Congress became the largest organized anti-colonial movement of the interwar period.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi1918.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Gandhi1918.jpg"
        }
      },
      {
        title: "Empires Exhausted: WWII and the Cost of Empire",
        bullets: [
          "World War II left Britain and France economically devastated. Britain ended the war with **massive debt to the United States** and a treasury that could not sustain global imperial commitments.",
          "The United States **terminated Lend-Lease** aid in September 1945, forcing Britain to negotiate a painful loan that came with conditions undermining imperial trade preferences.",
          "**India (1947)**: The Indian National Congress, led by Gandhi and Nehru, combined mass civil disobedience with political pressure that the exhausted British state could no longer resist.",
          "**Ghana (1957)**: Kwame Nkrumah's pan-Africanist movement achieved independence for the Gold Coast, the first sub-Saharan African colony to win independence, inspiring liberation movements across the continent.",
          "The dissolution of European empires and the restructuring of states across Asia and Africa accelerated through the 1950s and 1960s."
        ],
        image: {
          title: "Kwame Nkrumah, Ghana independence, 1957",
          caption: "Kwame Nkrumah led Ghana to independence in 1957, making it the first sub-Saharan African colony to achieve self-government.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah.jpg"
        }
      },
      {
        title: "Two Powers Standing: The Superpower Rivalry Emerges",
        bullets: [
          "The United States emerged from WWII with its industrial capacity intact and dramatically expanded: U.S. GDP **nearly doubled** during the war, and the country held roughly half the world's industrial output by 1945.",
          "The **Soviet Union**, despite suffering 27 million deaths, had industrialized rapidly and emerged with the largest land army in the world and nuclear capability by 1949.",
          "The two powers held **rival ideologies**: American liberal capitalism and democracy versus Soviet Marxism-Leninism and one-party communist rule.",
          "The **Marshall Plan (1948)** committed $13 billion in U.S. economic aid to rebuild Western Europe, and to keep it within the American sphere of influence.",
          "Soviet **sphere-building in Eastern Europe** and the formation of **NATO (1949)** and the **Warsaw Pact (1955)** formalized the division of the world into rival blocs, setting the structural conditions for the Cold War."
        ],
        image: {
          title: "The Yalta Conference, February 1945",
          caption: "Churchill, Roosevelt, and Stalin at Yalta, the moment when the post-war division of Europe began to take shape.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yalta_Conference_1945_CC.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Yalta_Conference_1945_CC.jpg"
        }
      }
    ]
  },

  map: {
    title: "The World in 1945: Colonial Empires and Rising Superpowers",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1945_empires_colonies_territory.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1945_empires_colonies_territory.png",
    caption: "The global political order in 1945, colonial empires at their peak extent, with two new superpowers emerging.",
    intro: "Use the map to identify where colonial empires still extended, and where the U.S. and Soviet Union held power. The map shows the world at a turning point: the old imperial order intact on the map, but already under pressure from exhaustion, nationalist movements, and superpower rivalry.",
    prompt: "What does the map suggest about the tension between the old colonial order and the new superpower world? Identify two areas where you would predict major change in the next two decades.",
    notes: [
      "Britain and France still controlled vast colonial territories across Africa, Asia, and the Pacific in 1945.",
      "The United States and Soviet Union controlled or influenced large parts of Europe, Asia, and the Pacific after WWII.",
      "Nationalist independence movements were already organized in India, Southeast Asia, and parts of Africa.",
      "The map reveals a world whose political structure was about to be fundamentally restructured."
    ]
  },

  first10: {
    title: "First & 10: Setting the Stage",
    embedUrl: "first-and-10-topic-8-1-cold-war-stage-capture.html?v=20260610"
  },

  images: [
    {
      title: "League of Nations Mandate Map",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/League_of_Nations_Mandates.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:League_of_Nations_Mandates.png",
      caption: "The League of Nations Mandate System divided Germany's former colonies among the victorious Allied powers, principally Britain and France.",
      prompt: "How does this map challenge Wilson's promise of self-determination? What does it reveal about the difference between the rhetoric of 1918 and the reality of 1919?"
    },
    {
      title: "Clement Attlee's Cabinet, 1945",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Clement_Attlee.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Clement_Attlee.jpg",
      caption: "Britain's Labour government under Clement Attlee inherited a bankrupted empire in 1945 and faced simultaneous independence crises across Asia and the Middle East.",
      prompt: "What does a government's financial situation reveal about its ability to maintain imperial commitments? How does treasury exhaustion act as an internal factor in imperial decline?"
    },
    {
      title: "The Marshall Plan, 1948",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marshall_Plan.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marshall_Plan.png",
      caption: "The Marshall Plan (1948) committed $13 billion in U.S. aid to rebuild Western Europe, and to anchor it within the American sphere of influence.",
      prompt: "Is the Marshall Plan better evidence of American generosity or American strategic interest? Can it be both?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Reading the Post-War World Through Evidence",
    task: "Choose one image and explain what it reveals about the conditions that produced the Cold War, decolonization, or both after 1945.",
    prompt: "This image shows... It is evidence of [choose: unfulfilled self-determination / imperial exhaustion / superpower rivalry] because... It supports a claim about setting the stage for the Cold War or decolonization because..."
  },

  primarySource: {
    title: "Primary Source: The Atlantic Charter (1941)",
    intro: "In August 1941, Franklin Roosevelt and Winston Churchill signed a joint declaration of Allied war aims, before the United States had officially entered the war. Point Three declared that 'all peoples' had the right to choose their own form of government. Colonial subjects across Asia and Africa read this statement carefully. Churchill later insisted it applied only to European nations under Nazi occupation, not to British colonies. The gap between the text and that interpretation became a weapon in the hands of independence movements.",
    text: "Their countries seek no aggrandizement, territorial or other; They desire to see no territorial changes that do not accord with the freely expressed wishes of the peoples concerned; They respect the right of all peoples to choose the form of government under which they will live; and they wish to see sovereign rights and self-government restored to those who have been forcibly deprived of them.",
    questions: [
      "Which phrase in this document would colonial subjects in India, West Africa, or Southeast Asia find most relevant to their own situation, and why?",
      "Churchill later argued this applied only to people under Nazi occupation. What does that contradiction reveal about how Allied leaders understood the term 'all peoples'?",
      "How does this source help explain why anti-imperialist sentiment intensified after WWII rather than subsiding with Allied victory?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Five Weeks to Draw a Border",
    desc: "Five weeks to partition a subcontinent, by someone who had never visited India.",
    intro: "When Britain announced Indian independence in June 1947, the boundary commission was given just five weeks to divide the subcontinent.",
    detail: "Cyril Radcliffe, an English barrister who had never visited India, drew the line separating India and Pakistan. He delivered his maps on August 17, 1947, two days after independence was declared. The new border cut through farms, villages, and railway lines. Within months, roughly 14 million people had crossed the boundary as refugees.",
    text: "When Britain announced Indian independence in June 1947, the boundary commission that would divide the subcontinent into India and Pakistan was given just five weeks to draw a new national border through territories that had never been divided. Cyril Radcliffe, an English barrister who had never visited India, drew the line. He delivered his maps on August 17, 1947, two days after independence. Within months, an estimated 10–14 million people had crossed the boundary, making the Partition of India one of the largest forced migrations in human history.",
    prompt: "What does it reveal about the nature of British power in 1947 that the empire which had governed India for nearly two centuries entrusted its partition to a lawyer who had never visited the country, with five weeks to finish the job?"
  },

  skillBuilder: {
    label: "Contextualization practice",
    title: "Place the Cold War in Its Historical Context",
    intro: "Contextualization means explaining the broader historical setting that made an event or development possible. For the Cold War, that means connecting the rivalry to what came before: the unfulfilled promises of WWI self-determination, the exhaustion of European empires after WWII, and the technological and economic gains that made the U.S. and Soviet Union into superpowers. The Cold War did not emerge from nothing, it emerged from a specific historical context.",
    steps: [
      { label: "Before", text: "Wilson's Fourteen Points (1918) promised self-determination; the Mandate System (1919) instead extended British and French colonial control. Interwar nationalist movements were suppressed but not destroyed." },
      { label: "During WWII", text: "Britain and France were economically devastated. The U.S. expanded its industrial and technological capacity. The Soviet Union industrialized rapidly and built the world's largest land army. Colonial subjects who fought for the Allies expected self-government as a reward." },
      { label: "After 1945", text: "The old colonial powers were too exhausted to maintain their empires. The U.S. and USSR emerged with rival ideologies and global ambitions. The structural conditions for both decolonization and Cold War rivalry were in place simultaneously." }
    ],
    prompt: "Write two contextualization sentences that explain the broader historical setting that made the Cold War possible after 1945. Your sentences should connect at least one development from before WWII and at least one change that WWII produced."
  }
};
