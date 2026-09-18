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
    unit: "Unit 4: Transoceanic Interconnections",
    topic: "Topic 4.7",
    title: "Changing Social Hierarchies",
    subtitle: "How European colonialism reorganized social order — creating the casta system in Spanish America, racializing slavery in the Atlantic world, and producing new hierarchies wherever it reached",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how states accommodated the ethnic and religious diversity of their subjects in some cases, and suppressed or restricted certain groups in others.",
      kc: 'KC-4.3.I.B',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can analyze how the casta system organized colonial society in Spanish America, including its major categories (peninsulares, creoles, mestizos, mulattos, indigenous, enslaved Africans) and their legal implications.",
      kc: 'KC-4.2.III.A',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how the power of existing political and economic elites changed as they confronted increasingly powerful monarchs and imperial states.",
      kc: 'KC-4.2.III.B',
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can give examples of states accommodating diversity (e.g., the Ottoman millet system, acceptance of Jews expelled from Spain and Portugal) and of states suppressing it (e.g., restrictive policies against Han Chinese in Qing China).",
      kc: 'KC-4.3.I.B',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can name and describe the major casta categories in Spanish colonial America, explain how casta status was determined, and give one specific example of how casta affected a person's legal rights or opportunities.",
      kc: 'KC-4.2.III.A',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can use specific examples such as Ottoman timar holders, Russian boyars, or European nobility to explain how existing elites gained, lost, or renegotiated power as states centralized.",
      kc: 'KC-4.2.III.B',
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.3.I.B',
      theme: 'Social Interactions and Organization',
      text: 'Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.',
      illustrativeExamples: ['Expulsion of Jews from Spain and Portugal; acceptance of Jews in the Ottoman Empire', 'Restrictive policies against Han Chinese in Qing China', 'Varying status of different classes of women within the Ottoman Empire']
    },
    {
      code: 'KC-4.2.III.A',
      theme: 'Social Interactions and Organization',
      text: 'Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.III.B',
      theme: 'Social Interactions and Organization',
      text: 'The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.',
      illustrativeExamples: ['Ottoman timars', 'Russian boyars', 'European nobility']
    }
  ],

  lecture: {
    title: "New Hierarchies: Race, Caste, and Colonial Social Order",
    intro: "Topic 4.7 tracks three related changes in hierarchy: states accommodated or suppressed diverse groups, new political and economic elites formed, and the power of existing elites rose or fell as rulers centralized. Casta is one important case, not the whole topic.",
    videos: [],
    segments: [
      {
        title: "Accommodation and Suppression of Diversity",
        bullets: [
          "Early modern states governed populations divided by religion, ethnicity, legal status, and region. Some rulers **accommodated diversity** when local communities or elites could provide taxes, military service, commercial expertise, or political stability.",
          "The **Ottoman Empire** accepted many Jews expelled from Spain and Portugal and governed recognized religious communities through differentiated institutions. Mughal rulers at times incorporated Hindu elites into imperial service.",
          "Other states **restricted or suppressed groups**. Qing rulers maintained privileges for Manchus and imposed limits in some political and military roles on Han Chinese; Iberian states expelled or pressured Jewish and Muslim communities.",
          "The AP move is functional: explain why a state accommodated one group or restricted another and how the policy affected social roles and access to power."
        ],
        image: {
          title: "Suleiman the Magnificent",
          caption: "Multiethnic empires often used differentiated legal and communal arrangements to govern diverse subjects.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg"
        }
      },
      {
        title: "The Casta System in Spanish Colonial America",
        bullets: [
          "The casta system was the racial classification system of Spanish colonial America. Its major categories were: **peninsulares** (born in Spain, the highest-status group, eligible for the most senior colonial offices); **criollos/creoles** (Spanish descent, born in the Americas, legally Spanish but excluded from the highest offices); **mestizos** (Spanish and indigenous ancestry); **mulattos** (Spanish and African ancestry); **indigenous peoples** (*indios*, owed tribute, exempt from Inquisition jurisdiction); and **enslaved Africans** (no legal personhood).",
          "Casta status had real **legal consequences**: peninsulares and creoles could own land and hold most public offices; mestizos occupied an ambiguous middle position that varied by wealth and community recognition; indigenous peoples owed tribute and mita labor; enslaved Africans could be bought, sold, and punished as property. These were not merely social distinctions, they were codified in law and enforced by colonial courts.",
          "**Casta paintings**, a distinctive genre of 18th-century colonial art, depicted the offspring of different racial combinations, labeling each category (e.g., 'Español con India: Mestizo'; 'Mestizo con Española: Castizo'). The genre reflects colonial anxiety: the casta was supposed to be a stable classification system, but the real population was mixing in ways that created endless new combinations the law struggled to categorize.",
          "**Social mobility** within the casta was limited but real. Wealthy mestizos could sometimes 'pass' as creoles through social recognition and economic resources. The Church offered another pathway, education through missions provided some social mobility. The concept of **gracia al sacar** allowed people of mixed ancestry to purchase legal whiteness from the crown, a mechanism that reveals both the rigor and the commercialism of the casta system."
        ],
        image: {
          title: "Columbus Taking Possession — Colonial Origins",
          caption: "The social hierarchies of colonial America were rooted in the moment of conquest. The legal framework that classified people by ancestry was built to manage the consequences of a society created by conquest, disease, and forced labor.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg"
        }
      },
      {
        title: "Existing Elites: Winners, Losers, and Bargains with Centralizing States",
        bullets: [
          "Centralizing rulers did not only create new elites; they also changed the power of **existing elites**. Some groups preserved influence by entering state service, while others lost independent military, tax, or political authority.",
          "In the Ottoman Empire, changes in the **timar** system altered the position of provincial military elites. In Russia, rulers such as Peter the Great pushed **boyars** into state service and tied status more closely to imperial rank.",
          "Across Europe, monarchs challenged parts of the traditional nobility while still depending on aristocrats at court, in armies, and in provincial administration. Centralization often meant renegotiating elite power rather than simply eliminating elites.",
          "This is the third Topic 4.7 move: **new elites formed while existing elites gained, lost, or adapted their influence**."
        ],
        image: {
          title: "European court nobility",
          caption: "Centralizing rulers could constrain noble independence while making court access and state service new sources of elite power.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Louis_XIV_of_France.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Louis_XIV_of_France.jpg"
        }
      }
    ]
  },

  map: {
    title: "Colonial Social Hierarchies Across the Atlantic World, c. 1700",
    url: "../assets/images/instructional-maps/topic-4-7.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-7.svg",
    caption: "Coerced labor and the hierarchies built on it, placed geographically: the mita in the Andes, plantation slavery in Brazil and the Caribbean, and the West African societies drained to supply them.",
    intro: "Study the casta painting carefully. Notice the range of named racial categories, how many are there? What does the existence of so many categories tell us about the social reality of colonial Spanish America? What does the need to visually document and label these categories suggest about colonial anxieties?",
    prompt: "Using the casta painting as evidence, explain what the casta system reveals about Spanish colonial society. Why did colonizers feel the need to create such an elaborate classification system? What does the existence of categories like 'mestizo' and 'mulatto', which had no pre-colonial equivalent, reveal about the demographic consequences of colonialism?"
  },

  deepReading: {
    title: "Writing Ancestry Into Law",
    desc: "A textbook-depth companion on the millet system as an administrative bargain, Qing separation as a minority protecting itself, the casta categories with the gracias al sacar that proves what kind of category they were, why a descent hierarchy has to regulate women, and the one continuity and one change the criteria ask for. Optional, and useful when a checkpoint asks about social structure.",
    url: "deep-reading-topic-4-7-changing-social-hierarchies.html"
  },

  first10: {
    title: 'First & 10: New Hierarchies',
    embedUrl: 'first-and-10-topic-4-7-changing-social-hierarchies-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.7 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading the Casta",
    intro: "Use the evidence below to analyze how colonial social hierarchies were built, maintained, and contested. Strong AP comparison and CCOT arguments require specific evidence from multiple colonial contexts.",
    prompt: "Choose one piece of evidence and explain what it reveals about colonial social hierarchies. Then identify one similarity to AND one difference from social hierarchies in a different colonial context.",
    items: [
      { title: "Casta painting inscription — New Spain, c. 1770", detail: "'De español e india: mestizo. De mestizo y española: castizo. De castizo y español: español.' These inscriptions from 18th-century casta paintings show the logic of the casta system: racial categories were defined by the combination of parental categories. Use this evidence to argue about what the casta system reveals about Spanish colonial anxieties, and about the limits of the system's ability to manage racial mixing in practice." },
      { title: "Virginia Slave Code of 1705 (adapted)", detail: "Virginia's Slave Code of 1705 declared that 'all servants imported and brought into this country by sea or land, who were not Christians in their native country, shall be accounted and be slaves.' The code made enslaved status hereditary through the mother, 'the condition of the child follows the condition of the mother.' Use this evidence to compare the British colonial approach to racial classification with the Spanish casta system. What is similar? What is different?" },
      { title: "Manumission records — Portuguese Brazil, c. 1700", detail: "Portuguese Brazilian colonial records document significantly higher rates of formal manumission (freeing of enslaved people) than British or French colonial societies, perhaps 5–10% of the enslaved population was freed per generation, creating a substantial free Black and mixed-race population. Use this evidence to analyze how Portuguese Brazil's racial hierarchy differed from Spanish America's casta or British colonial slavery." }
    ]
  },

  primarySource: {
    title: "Primary Source: Casta and Legal Status in New Spain, c. 1730",
    intro: "This adapted passage is drawn from a colonial legal manual used by audiencia judges in New Spain in the early 18th century. It explains the legal distinctions between major casta categories and their implications for tribute, military service, and office-holding. Read it as a document of the legal machinery of colonial racial classification.",
    text: "The law distinguishes among persons in this kingdom according to their ancestry and condition. Persons of pure Spanish blood, born in these kingdoms, are called criollos: they may hold office, own land, bear arms, and are exempt from tribute. Mestizos, born of Spanish father and Indian mother, are exempt from tribute if they are raised in the Spanish manner and acknowledged by their father; otherwise they are treated as Indians. Indians owe tribute and personal service according to their community's assessment; they may not bear arms or hold royal office, but may petition the audiencia for protection against abusive encomenderos. Mulattos, born of Spanish or Indian father and African mother, are subject to tribute and are barred from public office. Negros, whether enslaved or free, are subject to their master's authority if enslaved, and to special restrictions if free, including prohibitions on bearing arms, living in Indian communities, and holding positions of authority over any person of Spanish blood. These distinctions are not arbitrary but reflect the natural order of a Christian society in which each person occupies the station appropriate to their ancestry and condition.",
    questions: [
      "What does this document reveal about the practical legal consequences of casta classification? What specific rights and obligations were attached to each category?",
      "The document claims that the casta distinctions 'are not arbitrary but reflect the natural order.' What is the ideological function of this claim? What does calling racial hierarchy 'natural' accomplish?",
      "What does the distinction between mestizos 'raised in the Spanish manner and acknowledged by their father' versus those who are not reveal about how the casta system actually functioned in practice, and about the role of economic and cultural factors in racial classification?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Creole Merchant in Mexico City, c. 1700",
    desc: "You are a creole, a person of Spanish descent, born in New Spain. Your family has lived in Mexico City for three generations. Your grandfather came from Sevilla; your grandmother was born in Puebla. You are prosperous: you own a warehouse near the Plaza Mayor, import cloth from Veracruz, and employ a mix of workers, some mestizo, some indigenous, two enslaved Africans.",
    intro: "You are prosperous, but you are not equal. The new viceroy, just arrived from Spain, brought his own circle of peninsulares who now hold the senior positions in the audiencia and the cathedral chapter. Positions your family expected your eldest son to hold. You are Spanish, you speak no other language, practice no other religion, live no other life, but in the eyes of the crown, you are a colonial, not a Spaniard. The peninsula is your origin, not your home.",
    detail: "Your business partner is a mestizo named Rodrigo, whose father was a Spanish merchant and whose mother was a Nahua woman from Tlatelolco. Rodrigo is educated, fluent in Nahuatl and Spanish, and knows the indigenous trade networks that your warehouses depend on. He is paid well. He is never invited to the social events where you do your real business. Below Rodrigo in your operation is an indigenous foreman named Tlapalteotl, baptized as Martín, who manages the indigenous porters and negotiates with indigenous suppliers. You would be lost without him. He calls you 'don' and you call him 'Martín.' You have never asked what he is called at home.",
    prompt: "Write a letter to your cousin in Sevilla explaining your situation in Mexico City, the business, the social world, the frustrations of being creole in a system designed for peninsulares. Then write a second paragraph that you would never send: what you actually think about the system you live inside. Who benefits? Who is harmed? What would you change, if you could change anything, and what would you not change?"
  },

  beInTheRoom: {
    url: '',
    desc: "Navigate the casta as a mestizo merchant seeking legal recognition in New Spain, argue your community's tribute exemption before an audiencia judge, or manage the complex racial politics of a Portuguese Brazilian plantation as a free Black overseer."
  }

};
