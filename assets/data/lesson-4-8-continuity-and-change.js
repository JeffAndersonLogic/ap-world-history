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
    topic: "Topic 4.8",
    title: "Continuity and Change in the Period from c. 1450 to c. 1750",
    subtitle: "How economic developments from 1450 to 1750 changed social structures — and what persisted despite those changes",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how economic developments from c. 1450 to c. 1750 — including global silver flows, mercantilism, plantation expansion, and intensified production — changed demand for labor and redistributed wealth and power.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Economic Systems"
    },
    {
      target: "I can explain how those economic developments affected social structures, including coerced labor and slavery, racial and casta hierarchies, new and changing elites, and gender and family patterns.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can make a continuity-and-change argument about social structures from c. 1450 to c. 1750 using evidence from multiple Unit 4 topics and explaining why some structures changed while others persisted.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Argumentation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can connect one specific economic development — such as plantation growth, silver extraction, mercantilism, or intensified textile production — to a specific change in labor demand, wealth, or political-economic power.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Economic Systems"
    },
    {
      criteria: "I can use at least two specific social consequences, such as expanded chattel slavery, encomienda/hacienda or mita labor, casta categories, changes to African gender/family patterns, or changing elite power, and explain the economic mechanism behind each.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can identify one meaningful continuity and one meaningful change in social structure, support both with evidence from different Unit 4 topics, and explain why the balance of continuity and change occurred.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Argumentation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective N',
      theme: 'Learning Objective',
      text: 'Explain how economic developments from 1450 to 1750 affected social structures over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV',
      theme: 'Economic Systems',
      text: 'New global circulation of goods was facilitated by chartered monopoly companies and global silver flows, while regional Afro-Eurasian markets continued to flourish.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II',
      theme: 'Economic Systems',
      text: 'Growing global demand intensified labor, expanded plantations, and contributed to the development and intensification of the Atlantic slave trade.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.A',
      theme: 'Economic Systems',
      text: 'Peasant and artisan labor continued and intensified in many regions as demand for food and consumer goods increased.',
      illustrativeExamples: ['Western Europe wool and linen', 'India cotton', 'China silk']
    },
    {
      code: 'KC-4.2.II.C',
      theme: 'Social Interactions and Organization',
      text: 'The growth of plantation economies increased demand for enslaved labor in the Americas and produced major demographic, social, and cultural changes.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.D',
      theme: 'Economic Systems',
      text: 'Colonial economies in the Americas used existing labor systems and introduced new systems including chattel slavery, indentured servitude, encomienda, and hacienda.',
      illustrativeExamples: ['Incan mit’a']
    },
    {
      code: 'KC-4.2.III.A',
      theme: 'Social Interactions and Organization',
      text: 'Imperial conquest and widening economic opportunities contributed to new political and economic elites, including the casta system in the Americas.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.III.B',
      theme: 'Social Interactions and Organization',
      text: 'The power of existing political and economic elites fluctuated as increasingly powerful rulers challenged their influence.',
      illustrativeExamples: ['Ottoman timars', 'Russian boyars', 'European nobility']
    },
    {
      code: 'KC-4.2.III.C',
      theme: 'Social Interactions and Organization',
      text: 'Gender and family structures changed in some regions, including demographic changes in Africa associated with the trade of enslaved persons.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Economic Change, Social Consequence: Unit 4 in One Causal Story",
    intro: "Topic 4.8 is not a general review of everything that changed after 1450. Its governing question is narrower and more useful: how did economic developments from c. 1450 to c. 1750 affect social structures over time? Follow the mechanism from expanding trade and production to labor demand, hierarchy, family patterns, and elite power.",
    videos: [],
    segments: [
      {
        title: "Economic Developments Create New Pressures",
        bullets: [
          "The expansion of **global silver flows**, chartered monopoly companies, and **mercantilist** competition connected the Americas more tightly to Afro-Eurasian markets. At the same time, regional markets and Asian manufacturing remained powerful.",
          "Growing demand for sugar, silver, cotton textiles, silk, wool, and other commodities intensified production. That meant rulers and merchants needed more labor, more reliable extraction, and stronger systems for moving wealth toward states and commercial elites.",
          "The key mechanism for Topic 4.8 is: **economic expansion changes who needs labor, who controls wealth, and who can claim political or social privilege**."
        ],
        image: {
          title: "Potosí and the global silver economy",
          caption: "Silver extraction connected labor coercion in the Andes to global exchange and state revenue.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cerro_Rico_de_Potos%C3%AD.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerro_Rico_de_Potos%C3%AD.jpg"
        }
      },
      {
        title: "Labor and Hierarchy Change",
        bullets: [
          "Plantation growth dramatically increased demand for **enslaved African labor** in the Americas. Chattel slavery became larger, more racialized, and more tightly connected to Atlantic commodity production even while older forms of enslavement continued in Africa and the Indian Ocean world.",
          "Colonial economies also adapted or created labor systems such as the **mit’a**, encomienda, hacienda, and indentured servitude. Economic extraction therefore reshaped legal status and everyday social relations, not just trade balances.",
          "In Spanish America, conquest, migration, and labor systems contributed to **new casta categories and colonial elites**. In Africa, the export of enslaved people altered demographic balances and could reshape gender and family responsibilities in affected regions."
        ],
        image: {
          title: "Casta painting from colonial Spanish America",
          caption: "Colonial economic and political systems helped produce new legal and social categories tied to ancestry and status.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Casta_painting_all.jpg"
        }
      },
      {
        title: "What Continued — and Why",
        bullets: [
          "Not every social structure disappeared. **Peasant and artisan labor continued and intensified** in Europe, India, and China because global demand often expanded existing production rather than replacing it.",
          "Existing elites also adapted. Indigenous nobles, European aristocrats, merchant groups, and local intermediaries could preserve influence by serving new states or commercial systems, while other elites lost power as monarchies and empires centralized.",
          "A strong CCOT argument therefore avoids 'everything changed.' Economic developments created major changes in slavery, colonial hierarchy, and some family structures, while older labor forms and elite institutions persisted because states and markets still depended on them."
        ],
        image: {
          title: "Global trade routes, c. 1700",
          caption: "Economic integration created new pressures without erasing older regional production and social structures.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:1700_CE_world_map.PNG"
        }
      }
    ]
  },

  map: {
    title: "The World at c. 1700: Change and Continuity",
    url: "../assets/images/instructional-maps/topic-4-8.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-8.svg",
    caption: "The world at c. 1700 showed both the transformations and the continuities of c. 1450–1750. New Atlantic and Pacific trade routes connected all inhabited continents; but the Indian Ocean trade, Chinese manufacturing centers, and Islamic commercial networks all continued to operate.",
    intro: "Look at this map with two questions in mind: (1) What is new by c. 1700 that did not exist in c. 1450? (2) What was already present in c. 1450 and continued through 1700? Trace the silver routes from the Americas; then identify the Indian Ocean trade nodes that had existed for centuries before European ships arrived.",
    prompt: "Using the map, identify one specific change and one specific continuity in global trade networks from c. 1450 to c. 1700. For each, explain the mechanism: what drove the change, and what sustained the continuity? Your argument should be specific, name the trade network, the commodity, or the institution you are describing."
  },

  deepReading: {
    title: "What Changed and What Did Not",
    desc: "A textbook-depth companion on what makes a trade network global rather than merely long, the catastrophe and the crops in one argument, three continuities with the structural reason each held, a method for continuity-and-change prompts, and where the line into Unit 5 actually falls. Optional, and the chapter to read before writing about this period.",
    url: "deep-reading-topic-4-8-continuity-and-change.html"
  },

  first10: {
    title: 'First & 10: The Connected World',
    embedUrl: 'first-and-10-topic-4-8-continuity-and-change-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.8 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Change and Continuity in the Connected World",
    intro: "Use the evidence below to construct CCOT arguments about global trade from c. 1450 to c. 1750. Strong CCOT arguments require specific evidence on BOTH sides, change AND continuity, and an explanation of why each occurred.",
    prompt: "Choose one piece of evidence and explain what it reveals about either a change or a continuity in global trade from c. 1450 to c. 1750. Then identify a counterpoint: what evidence would complicate or qualify your argument?",
    items: [
      { title: "Manila Galleon cargo manifest — c. 1600", detail: "Manila Galleon records document the exchange of Mexican silver for Chinese silk, porcelain, and spices. The regularity and scale of this trade, one or two galleons per year, each carrying hundreds of tons of silver, demonstrates the genuinely new connection between the Americas and Asia. Use this evidence to argue for the significance of the silver economy as a change in global trade. Then identify the continuity: what pre-existing trade networks made the Manila trade possible?" },
      { title: "Indian Ocean trade records — VOC vs. Arab merchants, c. 1640", detail: "Dutch VOC records from the 1640s document ongoing competition between VOC trading posts and Arab, Indian, and Malay merchants in the same ports. Despite VOC dominance at certain chokepoints, Muslim merchants continued to operate throughout the Indian Ocean. Use this evidence to argue for the continuity of Islamic commercial networks, and explain what structural factors (local knowledge, credit networks, established relationships) allowed non-European merchants to persist." },
      { title: "Columbian Exchange crop diffusion — potato in Europe, c. 1600–1700", detail: "European agricultural records show slow initial adoption of the potato (first brought to Spain c. 1570) followed by rapid spread across northern Europe in the 17th century, especially in Ireland, Germany, and the Low Countries. The potato's ability to grow in poor soils and yield more calories per acre than grain eventually enabled population growth. Use this evidence to argue for the Columbian Exchange as a long-term demographic change, and explain why the effects were slow to materialize." }
    ]
  },

  primarySource: {
    title: "Primary Source: A Spanish Account of Manila Trade, c. 1590",
    intro: "This adapted passage is from a report to the Spanish crown by a colonial official in Manila, describing the nature and volume of trade in the city. It gives a firsthand account of how the Manila Galleon trade worked in practice, and reveals the central role of Chinese merchants in making the trade possible.",
    text: "The city of Manila is the great meeting place of the trade of the East and of New Spain. Each year the Chinese merchants, whom we call the Sangleys, come in their junks from the ports of Fujian and Guangdong, bringing silks of every kind, fine porcelains, iron goods, and spices from the islands to the south. They come in such numbers and with such quantities of goods that the warehouses of Manila cannot contain them all. For all of this they require silver, nothing else will satisfy them. They will not take cloth, nor wine, nor manufactured goods of any kind that we might offer in exchange. Only silver, which they carry back to China in their junks. Without the silver of New Spain, there would be no trade at Manilafor there is nothing else that the Chinese will take. And without the Chinese goods, the people of New Spain and of Spain itself would lack the silk and porcelain that they demand. The whole commerce of the Pacific rests upon this exchange, and it rests upon silver as its foundation.",
    questions: [
      "What does this account reveal about the role of Chinese merchants (Sangleys) in the Manila Galleon trade? Who is described as the active agents of commerce, the Spanish or the Chinese?",
      "What does the statement that Chinese merchants 'will not take cloth, nor wine, nor manufactured goods of any kind' reveal about the relative economic strength of China vs. Spain in this period? What does this tell us about Asia's role in the global economy?",
      "How does this source support a CCOT argument? What specific change does it document, and what continuity does it imply (in terms of who controlled Asian trade and what gave merchants power in the Indian Ocean system)?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Chinese Merchant in Manila, c. 1600",
    desc: "You are a merchant from Quanzhou, Fujian province. You have made this voyage to Manila eleven times. Your junk carries 400 bolts of silk, 200 pieces of blue-and-white porcelain, and a crate of iron tools. You will return with silver, as much silver as your hold can carry.",
    intro: "Manila is extraordinary. The Spanish have built a walled city, the Intramuros, where they live behind stone walls and cannons. Outside those walls, in the Parian, the Chinese quarter, perhaps 20,000 of your countrymen live permanently, serving the Spanish as merchants, craftsmen, and laborers. The Spanish need you; they cannot function without Chinese merchants, craftsmen, and food suppliers. They also fear you: the Spanish have massacred the Chinese population of Manila twice in the last generation when they thought the numbers were growing too large.",
    detail: "The silver arrives on the galleon from Acapulco every June. When the galleon docks, the Spanish merchants come to the Parian with their silver, and the trading begins. You know exactly what the Spanish want and exactly what price they will pay. What you did not know, until this voyage, is where the silver comes from, a mountain called Cerro Rico in a place called Potosí, where indigenous workers are conscripted to mine it and die in it. The silver has traveled twelve thousand miles before it reaches your hands. You will carry it back to Fujian, where it will pay the land taxes of a thousand families who have never heard of Potosí.",
    prompt: "Write a letter home to your wife in Quanzhou. Describe Manila, the Intramuros, the Parian, the Spanish, the silver. Tell her what you have learned about where the silver comes from and how it is produced. Tell her what it feels like to hold in your hands something that was dug from a mountain in another world by people you will never meet. What does this tell you about the world you live in, a world that is, you are beginning to understand, much larger and more connected than you knew?"
  },

  beInTheRoom: {
    url: '',
    desc: "Trade silk for silver as a Chinese Sangleys merchant in Manila, debate the global price revolution with a Spanish royal treasurer in Seville, or analyze the long-term effects of the Columbian Exchange as an AP World History student with a time machine."
  }

};
