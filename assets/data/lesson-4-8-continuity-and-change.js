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
    subtitle: "What changed — and what stayed the same — in global trade, demography, and social organization across three centuries of European maritime expansion",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here — submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain the major economic changes in global trade networks from c. 1450 to c. 1750, including how American silver created the first genuinely global trade circuit and caused the global price revolution.",
      kc: 'KC-4.1',
      theme: "Economic Systems"
    },
    {
      target: "I can analyze the major demographic and environmental changes caused by the Columbian Exchange, including the population collapse in the Americas and the spread of new crops globally.",
      kc: 'KC-4.2.II',
      theme: "Humans and the Environment"
    },
    {
      target: "I can evaluate what continued from c. 1450 — including the Indian Ocean trade, Asian manufacturing dominance, and Islamic commercial networks — and explain why these continuities persisted alongside dramatic change.",
      kc: 'KC-4.3',
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how the Manila Galleon trade and Atlantic silver routes created the first genuinely global trade network, and describe the global price revolution as an economic effect of the silver influx.",
      kc: 'KC-4.1',
      theme: "Economic Systems"
    },
    {
      criteria: "I can describe the demographic catastrophe in the Americas (50–90% population loss) and explain how it drove the Atlantic slave trade; I can also identify at least two crops from the Columbian Exchange and explain their global impact.",
      kc: 'KC-4.2.II',
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can identify at least two specific continuities (Indian Ocean trade, Chinese economic dominance, Islamic commercial networks) and explain the structural factors that sustained them despite European maritime expansion.",
      kc: 'KC-4.3',
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.1',
      theme: 'Transoceanic Interconnections',
      text: 'The interconnection of the Eastern and Western Hemispheres, made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.II',
      theme: 'Transoceanic Interconnections',
      text: 'Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.II.A',
      theme: 'Transoceanic Interconnections',
      text: 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2',
      theme: 'Transoceanic Interconnections',
      text: 'Although the world’s productive systems continued to be heavily centered on agriculture, major changes occurred in agricultural labor, the systems and locations of manufacturing, gender and social structures, and environmental processes.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II',
      theme: 'Transoceanic Interconnections',
      text: 'The demand for labor intensified as a result of the growing global demand for raw materials and finished products. Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3',
      theme: 'Transoceanic Interconnections',
      text: 'Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.ii',
      theme: 'Transoceanic Interconnections',
      text: 'Economic disputes led to rivalries and conflict between states.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "What Changed, What Continued: Global Patterns, c. 1450–c. 1750",
    intro: "Topic 4.8 is the synthesis topic for Unit 4 — it asks you to step back from specific events and empires and assess the big picture: across three centuries of European maritime expansion, what actually changed in global trade, demography, and social organization? And what persisted from earlier patterns? The AP CCOT skill requires evidence on both sides.",
    videos: [],
    segments: [
      {
        title: "What Changed: The First Genuinely Global Trade Network",
        bullets: [
          "The single most important economic change of c. 1450–1750 was the **connection of the Americas to the Eastern Hemisphere** — creating for the first time a trade network that genuinely linked all inhabited continents. The mechanism was American silver. Silver from **Potosí** (modern Bolivia) flowed east to **Seville** via the Atlantic and west to **Manila** via the trans-Pacific **Manila Galleon trade** (1565–1815), where Chinese merchants exchanged it for silk, porcelain, and spices.",
          "This global circuit worked because of **Chinese demand**: the **Single Whip Tax Reform** (1581) required Chinese subjects to pay taxes in silver rather than grain or labor, creating enormous demand that pulled silver across the Pacific. Chinese demand drove the entire global economy — which means that understanding global trade transformation requires understanding Chinese fiscal policy, not just European expansion.",
          "The **global price revolution** was the most disruptive economic consequence: the huge increase in silver supply caused prices to roughly triple in Western Europe between 1500 and 1650, disrupting existing economic relationships, accelerating the decline of feudal obligations, and benefiting merchants and debtors while harming those on fixed incomes. Spain — which received the most silver — was paradoxically weakened by it: the influx allowed monarchs to borrow against future silver revenues without fiscal discipline, leading to repeated state bankruptcies.",
          "This trade circuit was **genuinely new**: nothing like the Manila Galleon trade had existed before 1565. But it built on existing networks — Chinese manufacturing, Indian Ocean trade infrastructure, and pre-existing commercial relationships between Asian merchants. European ships were the connective tissue; Asian demand was the engine."
        ],
        image: {
          title: "World Map, c. 1700",
          caption: "By c. 1700, a single global trade network connected the Americas, Europe, and Asia. Silver flowed from Potosí west to Manila and east to Seville; Chinese silk and porcelain flowed east and west in return. This was the first genuinely global economic system.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png"
        }
      },
      {
        title: "What Changed: Demographic and Environmental Transformation",
        bullets: [
          "The **Columbian Exchange** caused the largest population collapse in recorded human history. Smallpox, measles, influenza, and other Old World diseases killed an estimated **50–90% of the indigenous population of the Americas** in the century after 1492 — from perhaps 50–100 million people to as few as 5–10 million. This was not a single event but a series of overlapping epidemics that swept through populations with no prior exposure and therefore no immunological resistance.",
          "The demographic collapse was the **enabling condition** for European conquest (not the primary cause — military technology and indigenous alliances also mattered, but disease made conquest feasible at the scale it occurred); the **direct cause of the Atlantic slave trade** (the labor vacuum created by population collapse drove demand for enslaved African labor); and an enormous **environmental transformation** (abandoned agricultural land reverted to secondary forest, which early European visitors mistook for pristine wilderness).",
          "The Columbian Exchange also moved crops in both directions. From the Americas to the Eastern Hemisphere: **maize (corn), potatoes, sweet potatoes, cassava, tomatoes, and chili peppers** — all of which eventually transformed agriculture globally. The potato became a staple in Ireland and northern Europe; maize spread across Africa and China; cassava became a staple across sub-Saharan Africa. These crops enabled population growth in several world regions by c. 1700–1750.",
          "From the Eastern Hemisphere to the Americas: **horses** (which transformed indigenous cultures of the Great Plains within a generation of the Pueblo Revolt); **cattle and pigs** (which damaged indigenous agricultural systems); **wheat and rice** (which European colonists cultivated on lands cleared of indigenous agriculture). The ecological transformation of the Americas was comprehensive and largely irreversible."
        ],
        image: {
          title: "Florentine Codex — Smallpox",
          caption: "The Florentine Codex (compiled by Franciscan friar Sahagún with Nahua informants) documented the smallpox epidemic that preceded and accompanied the Spanish conquest of the Aztec Empire. Disease was the decisive demographic factor in the period c. 1450–1750.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "What Continued: Asian and Islamic Commercial Networks",
        bullets: [
          "Despite the transformations of c. 1450–1750, the **Indian Ocean trade system continued** — and in many respects grew. Arab, Indian, Chinese, Malay, and Swahili merchants continued to trade throughout the Indian Ocean; the Portuguese Estado da India extracted tolls but never replaced existing networks; the Dutch VOC displaced the Portuguese but did not eliminate Asian merchant activity. By c. 1700, the Indian Ocean trade was larger in volume than in c. 1450 — European demand had added to it, not replaced it.",
          "**China remained the world's largest economy** throughout this period — producing the most silk, porcelain, and cotton textiles, attracting the most silver, and driving the most commercial activity. Chinese manufacturing dominance was a powerful continuity. In fact, Chinese demand for silver was the engine that drove the Manila Galleon trade — which means that China's economic size was itself a cause of the period's most significant changes. The AP key: Asia did not passively receive the effects of European expansion; Asian economic logic drove European decisions.",
          "**Islamic commercial networks** persisted across the Indian Ocean and overland routes. Ottoman, Safavid, and Mughal merchants operated extensive trade networks; Islamic commercial law (the *hawala* credit system, partnership contracts, insurance instruments) facilitated long-distance trade; and Muslim traders remained important intermediaries between Southeast Asian spice producers and Indian Ocean markets. The Portuguese and Dutch disrupted some nodes in these networks but could not replace them.",
          "**Social hierarchies adapted** without disappearing. Indigenous elites in Spanish America retained some status under colonial law; existing Javanese hierarchies were incorporated into the VOC commercial system; Ottoman and Mughal administrative hierarchies continued to function. The period produced enormous change at the top of social orders while many underlying structures of daily life, family organization, and local governance continued."
        ],
        image: {
          title: "VOC — Global Trade Networks",
          caption: "The VOC competed within the Indian Ocean trade system but did not replace it. By c. 1650, Dutch commercial networks coexisted with Arab, Chinese, Indian, and Malay merchant networks across the Indian Ocean — each occupying different niches in a larger system that had been operating for centuries.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      }
    ]
  },

  map: {
    title: "The World at c. 1700: Change and Continuity",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    caption: "The world at c. 1700 showed both the transformations and the continuities of c. 1450–1750. New Atlantic and Pacific trade routes connected all inhabited continents; but the Indian Ocean trade, Chinese manufacturing centers, and Islamic commercial networks all continued to operate.",
    intro: "Look at this map with two questions in mind: (1) What is new by c. 1700 that did not exist in c. 1450? (2) What was already present in c. 1450 and continued through 1700? Trace the silver routes from the Americas; then identify the Indian Ocean trade nodes that had existed for centuries before European ships arrived.",
    prompt: "Using the map, identify one specific change and one specific continuity in global trade networks from c. 1450 to c. 1700. For each, explain the mechanism: what drove the change, and what sustained the continuity? Your argument should be specific — name the trade network, the commodity, or the institution you are describing."
  },

  first10: {
    title: 'First & 10: The Connected World',
    embedUrl: 'first-and-10-topic-4-8-continuity-and-change-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.8 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Change and Continuity in the Connected World",
    intro: "Use the evidence below to construct CCOT arguments about global trade from c. 1450 to c. 1750. Strong CCOT arguments require specific evidence on BOTH sides — change AND continuity — and an explanation of why each occurred.",
    prompt: "Choose one piece of evidence and explain what it reveals about either a change or a continuity in global trade from c. 1450 to c. 1750. Then identify a counterpoint: what evidence would complicate or qualify your argument?",
    items: [
      { title: "Manila Galleon cargo manifest — c. 1600", detail: "Manila Galleon records document the exchange of Mexican silver for Chinese silk, porcelain, and spices. The regularity and scale of this trade — one or two galleons per year, each carrying hundreds of tons of silver — demonstrates the genuinely new connection between the Americas and Asia. Use this evidence to argue for the significance of the silver economy as a change in global trade. Then identify the continuity: what pre-existing trade networks made the Manila trade possible?" },
      { title: "Indian Ocean trade records — VOC vs. Arab merchants, c. 1640", detail: "Dutch VOC records from the 1640s document ongoing competition between VOC trading posts and Arab, Indian, and Malay merchants in the same ports. Despite VOC dominance at certain chokepoints, Muslim merchants continued to operate throughout the Indian Ocean. Use this evidence to argue for the continuity of Islamic commercial networks — and explain what structural factors (local knowledge, credit networks, established relationships) allowed non-European merchants to persist." },
      { title: "Columbian Exchange crop diffusion — potato in Europe, c. 1600–1700", detail: "European agricultural records show slow initial adoption of the potato (first brought to Spain c. 1570) followed by rapid spread across northern Europe in the 17th century, especially in Ireland, Germany, and the Low Countries. The potato's ability to grow in poor soils and yield more calories per acre than grain eventually enabled population growth. Use this evidence to argue for the Columbian Exchange as a long-term demographic change — and explain why the effects were slow to materialize." }
    ]
  },

  primarySource: {
    title: "Primary Source: A Spanish Account of Manila Trade, c. 1590",
    intro: "This adapted passage is from a report to the Spanish crown by a colonial official in Manila, describing the nature and volume of trade in the city. It gives a firsthand account of how the Manila Galleon trade worked in practice — and reveals the central role of Chinese merchants in making the trade possible.",
    text: "The city of Manila is the great meeting place of the trade of the East and of New Spain. Each year the Chinese merchants — whom we call the Sangleys — come in their junks from the ports of Fujian and Guangdong, bringing silks of every kind, fine porcelains, iron goods, and spices from the islands to the south. They come in such numbers and with such quantities of goods that the warehouses of Manila cannot contain them all. For all of this they require silver — nothing else will satisfy them. They will not take cloth, nor wine, nor manufactured goods of any kind that we might offer in exchange. Only silver, which they carry back to China in their junks. Without the silver of New Spain, there would be no trade at Manilafor there is nothing else that the Chinese will take. And without the Chinese goods, the people of New Spain and of Spain itself would lack the silk and porcelain that they demand. The whole commerce of the Pacific rests upon this exchange, and it rests upon silver as its foundation.",
    questions: [
      "What does this account reveal about the role of Chinese merchants (Sangleys) in the Manila Galleon trade? Who is described as the active agents of commerce — the Spanish or the Chinese?",
      "What does the statement that Chinese merchants 'will not take cloth, nor wine, nor manufactured goods of any kind' reveal about the relative economic strength of China vs. Spain in this period? What does this tell us about Asia's role in the global economy?",
      "How does this source support a CCOT argument? What specific change does it document, and what continuity does it imply (in terms of who controlled Asian trade and what gave merchants power in the Indian Ocean system)?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Chinese Merchant in Manila, c. 1600",
    desc: "You are a merchant from Quanzhou, Fujian province. You have made this voyage to Manila eleven times. Your junk carries 400 bolts of silk, 200 pieces of blue-and-white porcelain, and a crate of iron tools. You will return with silver — as much silver as your hold can carry.",
    intro: "Manila is extraordinary. The Spanish have built a walled city, the Intramuros, where they live behind stone walls and cannons. Outside those walls, in the Parian — the Chinese quarter — perhaps 20,000 of your countrymen live permanently, serving the Spanish as merchants, craftsmen, and laborers. The Spanish need you; they cannot function without Chinese merchants, craftsmen, and food suppliers. They also fear you: the Spanish have massacred the Chinese population of Manila twice in the last generation when they thought the numbers were growing too large.",
    detail: "The silver arrives on the galleon from Acapulco every June. When the galleon docks, the Spanish merchants come to the Parian with their silver, and the trading begins. You know exactly what the Spanish want and exactly what price they will pay. What you did not know, until this voyage, is where the silver comes from — a mountain called Cerro Rico in a place called Potosí, where indigenous workers are conscripted to mine it and die in it. The silver has traveled twelve thousand miles before it reaches your hands. You will carry it back to Fujian, where it will pay the land taxes of a thousand families who have never heard of Potosí.",
    prompt: "Write a letter home to your wife in Quanzhou. Describe Manila — the Intramuros, the Parian, the Spanish, the silver. Tell her what you have learned about where the silver comes from and how it is produced. Tell her what it feels like to hold in your hands something that was dug from a mountain in another world by people you will never meet. What does this tell you about the world you live in — a world that is, you are beginning to understand, much larger and more connected than you knew?"
  },

  beInTheRoom: {
    url: '',
    desc: "Trade silk for silver as a Chinese Sangleys merchant in Manila, debate the global price revolution with a Spanish royal treasurer in Seville, or analyze the long-term effects of the Columbian Exchange as an AP World History student with a time machine."
  }

};
