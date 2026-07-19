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
    topic: "Topic 8.6",
    title: "Newly Independent States",
    subtitle: "How the redrawing of colonial boundaries created new states, produced conflict and mass displacement, and shaped the economic choices newly independent governments made in building their nations",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the redrawing of political boundaries after the withdrawal of former colonial authorities led to the creation of new states.",
      kc: "KC-6.2.III.A.i",
      theme: "Governance"
    },
    {
      target: "I can explain how the redrawing of political boundaries led to conflict, population displacement, and resettlement, including those related to the Partition of India and the creation of the state of Israel.",
      kc: "KC-6.2.III.A.ii",
      theme: "Governance"
    },
    {
      target: "I can explain the economic changes and continuities resulting from decolonization, including governments guiding economic life to promote development and the migration of former colonial subjects to imperial metropoles.",
      kc: "KC-6.3.I.C / KC-6.2.III.B",
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how the redrawing of colonial boundaries created at least two of the three CED new-state examples, Israel, Cambodia, or Pakistan, describing the specific colonial withdrawal process that produced each new state and what boundary decisions were involved.",
      kc: "KC-6.2.III.A.i",
      theme: "Governance"
    },
    {
      criteria: "I can explain how boundary redrawing led to conflict and mass displacement in both the Partition of India and the creation of the state of Israel, identifying the specific populations displaced in each case and connecting the displacement to the boundary decisions made at independence.",
      kc: "KC-6.2.III.A.ii",
      theme: "Governance"
    },
    {
      criteria: "I can explain at least two of the four CED examples of governments guiding economic life (Nasser in Egypt, Indira Gandhi in India, Nyerere in Tanzania, Bandaranaike in Sri Lanka) and at least one of the three CED migration examples (South Asians to Britain, Algerians to France, Filipinos to the United States), connecting the migration pattern to continued ties between former colonies and metropoles.",
      kc: "KC-6.3.I.C / KC-6.2.III.B",
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Governance (GOV)",
      theme: "Governance",
      text: "Governance",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective G",
      theme: "Learning Objective",
      text: "Explain how political changes in the period from c. 1900 to the present led to territorial, demographic, and nationalist developments.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.III.A.i",
      theme: "Governance",
      text: "The redrawing of political boundaries after the withdrawal of former colonial authorities led to the creation of new states.",
      illustrativeExamples: [
        "Israel",
        "Cambodia",
        "Pakistan"
      ]
    },
    {
      code: "KC-6.2.III.A.ii",
      theme: "Governance",
      text: "The redrawing of political boundaries in some cases led to conflict as well as population displacement and/or resettlements, including those related to the Partition of India and the creation of the state of Israel.",
      illustrativeExamples: []
    },
    {
      code: "Thematic Focus, Economic Systems (ECN)",
      theme: "Economic Systems",
      text: "Economic Systems",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective H",
      theme: "Learning Objective",
      text: "Explain the economic changes and continuities resulting from the process of decolonization.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.3.I.C",
      theme: "Economic Systems",
      text: "In newly independent states after World War II, governments often took on a strong role in guiding economic life to promote development.",
      illustrativeExamples: [
        "Gamal Abdel Nasser's promotion of economic development in Egypt",
        "Indira Gandhi's economic policies in India",
        "Julius Nyerere's modernization in Tanzania",
        "Sirimavo Bandaranaike's economic policies in Sri Lanka"
      ]
    },
    {
      code: "KC-6.2.III.B",
      theme: "Economic Systems",
      text: "The migration of former colonial subjects to imperial metropoles (the former colonizing country), usually in the major cities, maintained cultural and economic ties between the colony and the metropole even after the dissolution of empires.",
      illustrativeExamples: [
        "South Asians to Britain",
        "Algerians to France",
        "Filipinos to the United States"
      ]
    }
  ],

  lecture: {
    title: "Newly Independent States: Boundaries, Displacement, and Economic Choices",
    intro: "Use these cards to trace how colonial withdrawal produced new states, how the lines drawn at independence generated conflict and displacement, and how newly independent governments faced the challenge of building economies, while the migration of former colonial subjects to metropoles maintained connections across the end of empire.",
    videos: [
      {
        title: "Heimler's History — Topic 8.6: Newly Independent States",
        url: "https://youtu.be/placeholder-8-6",
        youtubeId: "placeholder-8-6",
        prompt: "Use this clip to review how boundary redrawing created new states, the specific cases of Partition and Israeli independence, and the economic choices made by newly independent governments. Pay attention to the continuity question: what changed with independence, and what stayed the same?"
      }
    ],
    segments: [
      {
        title: "New Lines, New States",
        bullets: [
          "When European colonial powers withdrew, whether through negotiation or military defeat, they left behind political boundaries. In most cases, those boundaries were inherited directly from colonial administrative divisions, often drawn for administrative convenience rather than to reflect the ethnic, religious, linguistic, or cultural communities that lived within them. The CED's KC-6.2.III.A.i identifies three illustrative examples of new states created through boundary redrawing: **Israel**, **Cambodia**, and **Pakistan**.",
          "**Pakistan** was created through the Partition of British India in 1947. The Indian Independence Act created two dominions simultaneously, India and Pakistan, dividing the subcontinent along religious lines. Pakistan was itself divided into two non-contiguous territories: West Pakistan and East Pakistan (later Bangladesh, 1971). The boundary was drawn by **Cyril Radcliffe**, a British lawyer who had never visited India and completed the task in six weeks. The **Radcliffe Line** cut through Punjab in the west and Bengal in the east, bisecting communities, irrigation systems, and trade networks that had functioned for generations.",
          "**Israel** was created through the end of the **British Mandate for Palestine**. Britain had promised both Jewish immigration and Arab political rights through competing wartime commitments (the Balfour Declaration of 1917 and the Hussein-McMahon Correspondence). As Jewish immigration accelerated during and after the Holocaust, intercommunal violence between Jewish and Arab communities escalated. Britain turned the question over to the newly formed United Nations in 1947. The **UN Partition Plan (UN Resolution 181)** proposed dividing Mandatory Palestine into separate Jewish and Arab states. The State of Israel declared independence on May 14, 1948; the following day, the first Arab-Israeli War began.",
          "**Cambodia** achieved independence from **French Indochina** in 1953, under King Norodom Sihanouk, through a combination of diplomacy and political maneuvering against the French colonial administration. The French Empire in Southeast Asia was already crumbling under Viet Minh military pressure in Vietnam; Cambodia's independence came through negotiation rather than armed struggle. Cambodia's boundaries reflected French colonial administrative divisions of mainland Southeast Asia, borders drawn by France for administrative purposes in the 19th and early 20th centuries, not by Cambodians.",
          "Across all three cases, the mechanism is the same: **colonial withdrawal produced new states whose sovereignty rested on boundaries that had been drawn by someone else, at an earlier time, for different purposes.** The question of whether those boundaries would work, whether the communities inside them would cohere as national political units, was answered differently in each case, with consequences that echoed for decades."
        ],
        image: {
          title: "Partition of India, August 1947",
          caption: "The Radcliffe Line dividing British India into India and Pakistan, drawn in six weeks by a British lawyer who had never visited India, cut through Punjab and Bengal, displacing an estimated 10–20 million people.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Partition_of_India.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Partition_of_India.svg"
        }
      },
      {
        title: "When the Lines Cut Through People",
        bullets: [
          "KC-6.2.III.A.ii identifies the human cost of boundary redrawing directly: 'The redrawing of political boundaries in some cases led to conflict as well as population displacement and/or resettlements, including those related to the Partition of India and the creation of the state of Israel.' Both cases produced mass population movements at a scale that shocked even those who planned them.",
          "**The Partition of India (1947)** was one of the largest forced migrations in history. When the **Radcliffe Line** was published on August 17, two days after independence, it set off a catastrophic population exchange. Muslim families in India moved toward Pakistan; Hindu and Sikh families in Pakistan moved toward India. The movement happened along routes that were simultaneously used by both communities going in opposite directions, through territory where communal violence was erupting simultaneously. An estimated **10–20 million people were displaced** across the Punjab and Bengal partition lines. An estimated **200,000 to 2 million people died** in the intercommunal violence accompanying the transfer, in massacres, on trains, in refugee columns. The violence was worst in Punjab, where armed Sikh jathas (armed bands) and Muslim mobs attacked columns of refugees moving in opposite directions. Trains arrived at their destinations carrying massacred passengers instead of live refugees.",
          "The human geography of what followed is staggering: overnight, the cities of Lahore and Karachi became majority Muslim; Amritsar and Delhi received millions of Hindu and Sikh refugees. The new governments of India and Pakistan each inherited a refugee crisis that overwhelmed their administrative capacity within weeks of independence. The economic and social effects of Partition, the disruption of industries, the loss of skilled workers, the destruction of trade networks, shaped both countries for decades.",
          "**The creation of the state of Israel (1948)** was accompanied by the **1948 Arab-Israeli War**, in which the Arab League members (Egypt, Jordan, Syria, Iraq, and others) attacked the newly declared state. In the course of the war, approximately **700,000 Palestinian Arabs fled or were expelled** from their homes, an event Palestinians call the **Nakba** (Arabic: 'catastrophe'). These refugees and their descendants, numbering in the millions today, remain displaced, the majority in refugee camps in Jordan, Lebanon, Syria, the West Bank, and Gaza. The 1948 war also produced a smaller counter-movement: Jewish communities in Arab countries faced increasing persecution after 1948, and approximately **850,000 Jews emigrated from Arab countries** to Israel between 1948 and 1972.",
          "Both cases illustrate the CED's key framing: boundary decisions are demographic events, not just map events. **When borders are drawn without adequate planning for the communities that straddle them, the consequences are measured in human displacement, intercommunal violence, and refugee crises that persist for generations.** The Partition of India and the creation of Israel were both products of colonial withdrawal, and both produced humanitarian emergencies that the colonial power did not fully anticipate or plan for before departing."
        ],
        image: {
          title: "1948 Arab-Israeli War and Palestinian displacement",
          caption: "Palestinian Arab refugees displaced during the 1948 Arab-Israeli War, approximately 700,000 people fled or were expelled from their homes. The displacement, known as the Nakba, remains unresolved.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Palestinian_refugees_1948.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Palestinian_refugees_1948.jpg"
        }
      },
      {
        title: "Building Economies, Keeping Ties",
        bullets: [
          "Political independence did not automatically produce economic independence. The economies of newly independent states had been structured to serve colonial interests, extracting raw materials, supplying the metropole's industries, importing finished goods from European manufacturers. When independence came, newly independent governments faced a fundamental choice: continue in the economic structures inherited from colonialism, or reshape the economy through state direction. The CED identifies a clear pattern: **'In newly independent states after World War II, governments often took on a strong role in guiding economic life to promote development.'** (KC-6.3.I.C)",
          "**Gamal Abdel Nasser** in Egypt pursued economic development through nationalization and state investment. The **nationalization of the Suez Canal in 1956** was not just a political act, it was an economic one, bringing the canal's revenues under Egyptian state control and funding the **Aswan High Dam** (built with Soviet assistance after the United States withdrew financing). Nasser nationalized banks, insurance companies, and major industries. His model of **Arab socialism** combined state-led economic development with pan-Arab political ideology.",
          "**Indira Gandhi** in India built on the state-led development model established by her father Nehru, which had prioritized heavy industry and import substitution through five-year plans. During her tenure as Prime Minister (1966–1977, 1980–1984), Gandhi nationalized India's major banks (1969) and pursued **garibi hatao** ('eliminate poverty') as a political program. Her **Emergency period (1975–1977)** also included compulsory sterilization programs, an example of how state-directed development could become coercive. India's mixed economy combined state-owned enterprises with private industry under heavy regulation.",
          "**Julius Nyerere** in Tanzania pursued **ujamaa**, 'familyhood', a distinctly African socialist model. Nyerere's 1967 **Arusha Declaration** nationalized banks and industry and committed Tanzania to rural socialist development through communal villages (vijiji). Nyerere positioned Tanzania as non-aligned and explicitly African, rejecting both Cold War blocs. The ujamaa village program was ultimately coercive and economically unsuccessful, but it reflected a genuine attempt to build a development model rooted in African communal values rather than either Western capitalism or Soviet communism.",
          "**Sirimavo Bandaranaike** in Ceylon (Sri Lanka) pursued economic nationalism through nationalization of key industries, import substitution, and Sinhala cultural policies. Bandaranaike became the **world's first elected female head of government** in 1960, a landmark in itself for a newly independent state. Her economic policies continued the state-led development approach of her husband, Solomon Bandaranaike, including nationalization of oil companies and insurance.",
          "**The migration connection (KC-6.2.III.B):** Even as new states worked to reshape their economies, the connection to former colonizers persisted through migration. **South Asians moved to Britain**, Commonwealth citizenship rights allowed Pakistanis, Indians, and Bangladeshis to settle in Britain's industrial cities (Birmingham, Bradford, Leicester) through the 1950s–1970s, sending remittances home and maintaining family networks across thousands of miles. **Algerians moved to France**, Algerian laborers had been recruited into French industry since the 1920s; after independence, the migration continued, with large Algerian communities establishing themselves in Paris, Lyon, and Marseille. **Filipinos moved to the United States**, the Philippines, a former American colony, had migration connections to the U.S. going back to the early 20th century; Filipino nurses, domestic workers, and agricultural laborers became significant communities in California and Hawaii. In every case, migration maintained cultural and economic ties between former colony and former colonizer, remittances, cultural influence, and labor flows that continued long after formal empire ended."
        ],
        image: {
          title: "Aswan High Dam, Egypt",
          caption: "The Aswan High Dam, funded in part by revenues from Nasser's nationalization of the Suez Canal, is the most visible symbol of state-led economic development in Nasser's Egypt. Built with Soviet technical assistance, it was completed in 1970.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aswan_High_Dam.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Aswan_High_Dam.jpg"
        }
      }
    ]
  },

  map: {
    title: "Newly Independent States, 1947–1965",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Decolonization_of_the_Americas.png",
    caption: "The wave of new state creation following colonial withdrawal, showing the geographic range of new states and the boundaries drawn at independence.",
    intro: "Use the map to trace where new states were created through boundary redrawing. Note the geographic clustering: South Asia (1947), the Middle East (1948), Southeast Asia (early 1950s), and sub-Saharan Africa (1957–1965). What patterns do you see in how colonial withdrawal created new states?",
    prompt: "Compare the three CED new-state examples, Pakistan, Israel, Cambodia. What do they share? How do their creation processes differ? What does each reveal about the relationship between colonial withdrawal, boundary redrawing, and new state formation?",
    notes: [
      "Pakistan (1947): created through the Partition of British India, the Radcliffe Line divided the subcontinent into two dominions simultaneously, cutting through Punjab and Bengal communities.",
      "Israel (1948): created through the end of the British Mandate for Palestine, the UN Partition Plan proposed separate states; Israel declared independence May 14, 1948; the first Arab-Israeli War began immediately.",
      "Cambodia (1953): independence from French Indochina through diplomacy under King Sihanouk, colonial administrative boundaries inherited directly from French administration.",
      "India (1947): created simultaneously with Pakistan through Partition, accompanied by one of the largest forced migrations in history.",
      "Tanzania (1961/1964): Tanganyika independent 1961; merged with Zanzibar to form Tanzania 1964; site of Nyerere's ujamaa socialist development experiment."
    ]
  },

  first10: {
    title: "First & 10: Newly Independent States",
    embedUrl: "first-and-10-topic-8-6-newly-independent-states-capture.html?v=20260610"
  },

  images: [
    {
      title: "Jawaharlal Nehru and Lord Mountbatten, August 1947",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nehru_Mountbatten.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nehru_Mountbatten.jpg",
      caption: "India's first Prime Minister Jawaharlal Nehru with Lord Mountbatten, the last British Viceroy of India, at independence. The handoff of power was negotiated, but the Partition it accompanied produced one of the largest humanitarian crises of the 20th century.",
      prompt: "What does this image reveal about the relationship between negotiated independence and the human costs of boundary redrawing? How does Nehru's presence here connect to his role in managing the Partition crisis as head of a weeks-old government?"
    },
    {
      title: "Julius Nyerere signs the Arusha Declaration, 1967",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Julius_Nyerere.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Julius_Nyerere.jpg",
      caption: "Julius Nyerere, President of Tanzania, at the time of the 1967 Arusha Declaration, which committed Tanzania to African socialism (ujamaa) and nationalization of banks and major industries as the path to postcolonial development.",
      prompt: "What does Nyerere's African socialist development model reveal about the economic choices newly independent states faced? How does ujamaa compare to Nasser's model in Egypt or Indira Gandhi's in India, what do they share as an approach to postcolonial development?"
    },
    {
      title: "South Asian immigrants arriving in Britain, 1960s",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Commonwealth_immigrants_britain.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Commonwealth_immigrants_britain.jpg",
      caption: "South Asian Commonwealth citizens arriving in Britain during the 1960s, one of the three CED migration examples illustrating how former colonial subjects moved to imperial metropoles, maintaining cultural and economic ties after independence.",
      prompt: "How does the migration of South Asians to Britain illustrate KC-6.2.III.B? What does it reveal about the economic relationship between former colonies and former colonizers that persisted after formal independence? What 'continuities' does this migration represent?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: New States, New Problems",
    task: "Choose one image and explain what it reveals about the political and economic changes resulting from decolonization. Your response should connect the image to at least one CED key concept (KC-6.2.III.A.i, KC-6.2.III.A.ii, KC-6.3.I.C, or KC-6.2.III.B) and explain what the image reveals about either territorial/demographic change or economic change/continuity after independence.",
    prompt: "This image shows... It is evidence of [choose: new state creation / population displacement / state-led economic development / migration continuity] because... This connects to the CED because..."
  },

  primarySource: {
    title: "Primary Source: Jawaharlal Nehru, 'Tryst with Destiny' Speech (August 14, 1947)",
    intro: "At midnight between August 14 and 15, 1947, as India officially became independent, Prime Minister Jawaharlal Nehru delivered this speech to the Constituent Assembly. For AP sourcing analysis: who is the audience (the Assembly, but also the Indian people and the world)? What is the purpose (marking a historical transition, defining what independence means)? What does the choice of language, 'tryst with destiny,' 'the soul of a nation', reveal about how Nehru sought to frame Indian independence? And what does the timing, delivered just as the Partition and its violence were already beginning, reveal about the gap between the promise of independence and its immediate consequences?",
    text: "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom. A moment comes, which comes but rarely in history, when we step out from the old to the new, when an age ends, and when the soul of a nation, long suppressed, finds utterance. It is fitting that at this solemn moment we take the pledge of dedication to the service of India and her people and to the still larger cause of humanity. At the dawn of history India started on her unending quest, and trackless centuries are filled with her striving and the grandeur of her successes and her failures. Through good and ill fortune alike she has never lost sight of that quest or forgotten the ideals which gave her strength. We end today a period of ill fortune and India discovers herself again. The achievement we celebrate today is but a step, an opening of opportunity, to the greater triumphs and achievements that await us. Are we brave enough and wise enough to grasp this opportunity and accept the challenge of the future?",
    questions: [
      "Nehru uses the phrase 'tryst with destiny' to describe Indian independence. What does this language reveal about how he is framing the moment, and who is his intended audience beyond the Constituent Assembly? How does the speech's language connect the moment of independence to a longer historical narrative about India?",
      "Nehru says India's independence is 'not wholly or in full measure, but very substantially.' What does this qualification reveal about the context in which the speech was delivered, specifically, what was already happening as he spoke? How does this phrase connect to KC-6.2.III.A.ii?",
      "This speech was delivered at midnight, August 14/15, 1947. The Partition was simultaneously producing one of the largest forced migrations in history. How does the gap between Nehru's language of 'freedom' and 'destiny' and the human reality of the Partition crisis illustrate the AP concept of a turning point: what changed with independence, and what did not, or could not, change overnight?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: The World's First Elected Female Head of Government",
    desc: "On July 21, 1960, Sirimavo Bandaranaike became Prime Minister of Ceylon, the first elected female head of government in history. She had never held elected office before. She became PM because her husband was assassinated.",
    intro: "Solomon Bandaranaike, Prime Minister of Ceylon, was shot by a Buddhist monk in September 1959 and died the following day. His Sri Lanka Freedom Party had built its power on Sinhala Buddhist nationalism and state-led economic development. In the 1960 elections, the SLFP ran Sirimavo, Solomon's widow, who had been active in party social work but had never run for office, as its candidate.",
    detail: "The SLFP won. Sirimavo Bandaranaike became Prime Minister of Ceylon on July 21, 1960, becoming the first woman elected to lead a national government in human history. She served three times as PM (1960–1965, 1970–1977, 1994–2000). During her first term, she continued her husband's economic program: nationalization of oil companies and insurance, expanded state control of education, and Buddhist cultural policies that deepened tensions with Ceylon's Tamil minority. Ceylon became Sri Lanka in 1972 under her government. Her economic policies, a combination of state direction and social protection, were a version of the same approach that Nasser, Nyerere, and Indira Gandhi were each pursuing in their newly independent states: the belief that the post-colonial state, not the market, had to direct development. The remarkable thing about Bandaranaike's rise is not just that she was a woman, it is that she was a woman in a newly independent country barely a decade old, governing through a constitutional democratic system the British had left behind, shaping the economic life of a nation that had not existed as an independent entity within living memory.",
    prompt: "What does Sirimavo Bandaranaike's rise to Prime Minister reveal about the political possibilities created by independence? How does her economic program connect to the broader pattern the CED identifies in KC-6.3.I.C, that newly independent governments 'often took on a strong role in guiding economic life to promote development'?"
  },

  skillBuilder: {
    label: "Continuity and Change Over Time practice",
    title: "What Changed, What Continued: Decolonization and Economic Life",
    intro: "AP Learning Objective H asks you to 'explain the economic changes and continuities resulting from the process of decolonization.' The key terms are changes AND continuities, not just what was new, but what persisted. This Skill Builder asks you to build a two-column chart identifying at least three economic changes and at least two economic continuities across the decolonization period, using CED examples.",
    steps: [
      { label: "CHANGE: Sovereignty over economic decisions", text: "What changed: Newly independent governments could now decide how to organize their economies, they were no longer required to structure economic life to serve colonial interests. Examples: Nasser nationalized the Suez Canal (formerly Anglo-French controlled); Nyerere nationalized banks and industries in Tanzania; Indira Gandhi nationalized Indian banks." },
      { label: "CHANGE: State-directed development models", text: "What changed: Newly independent governments typically chose state direction over free-market economics, using nationalization, five-year plans, and import substitution to promote development. Examples: Nasser's Arab socialism in Egypt; Nyerere's ujamaa in Tanzania; Bandaranaike's nationalization program in Sri Lanka; Indira Gandhi's mixed economy policies in India." },
      { label: "CONTINUITY: Migration corridors linking colony to metropole", text: "What continued: The migration of former colonial subjects to imperial metropoles, South Asians to Britain, Algerians to France, Filipinos to the United States, maintained economic and cultural ties between former colony and former colonizer. Workers in the metropole sent remittances home; cultural connections persisted through diaspora communities." },
      { label: "CONTINUITY: Trade and economic dependency ties", text: "What continued: Newly independent states often remained economically tied to their former colonizers through trade patterns, currency zones (the franc zone in former French West Africa), and debt. Economic independence was harder to achieve than political independence, the structures of the colonial economy remained even after the political structure changed." }
    ],
    prompt: "Using the four entries above as a starting point, write a continuity and change argument in three or four sentences: describe one economic change that resulted from decolonization and explain how it represented a departure from the colonial economic relationship; describe one economic continuity and explain why it persisted despite formal political independence; and identify one factor that accounts for why change was easier in some areas (political sovereignty over economic decisions) than in others (trade patterns, migration dependencies)."
  }

};
