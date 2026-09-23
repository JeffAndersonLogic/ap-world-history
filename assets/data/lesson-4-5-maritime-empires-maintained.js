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
    topic: "Topic 4.5",
    title: "Maritime Empires Maintained and Developed",
    subtitle: "How European maritime empires used forced labor, colonial administration, and silver extraction to sustain themselves — and how American silver transformed global trade networks",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how rulers used mercantilism, chartered monopoly companies, and economic rivalry to maintain and develop maritime empires.",
      kc: 'KC-4.1.IV.C; KC-4.3.III.ii',
      theme: "Governance"
    },
    {
      target: "I can explain continuity and change in exchange networks, including global silver flows, chartered companies, Atlantic trade, and the continued importance of regional Afro-Eurasian markets.",
      kc: 'KC-4.1.IV; KC-4.1.IV.D.i',
      theme: "Economic Systems"
    },
    {
      target: "I can explain political, economic, and social effects of expanding exchange, including intensified peasant/artisan labor and changes to gender and family patterns in Africa associated with the trade of enslaved persons.",
      kc: 'KC-4.2.II.A; KC-4.2.III.C; KC-4.1.IV.D.ii',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can compare how expanding global interactions affected belief systems, including the spread of existing religions, religious conflict, and the development of syncretic practices.",
      kc: 'KC-4.1.VI',
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how mercantilist rules and joint-stock companies such as the VOC or British EIC helped states mobilize capital, protect monopolies, and compete for overseas trade and territory.",
      kc: 'KC-4.1.IV.C; KC-4.3.III.ii',
      theme: "Governance"
    },
    {
      criteria: "I can trace silver and Atlantic exchange across hemispheres while also explaining one important continuity in established Afro-Eurasian regional markets or commercial practices.",
      kc: 'KC-4.1.IV; KC-4.1.IV.D.i',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain how growing demand intensified peasant or artisan labor in Europe, India, or China and how the Atlantic slave trade reshaped demographic, gender, family, and cultural patterns in parts of Africa and the Americas.",
      kc: 'KC-4.2.II.A; KC-4.2.III.C; KC-4.1.IV.D.ii',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can use at least two specific examples to compare different religious effects of global interaction, including missionary expansion, conflict, or syncretic traditions such as Vodun or Santería.",
      kc: 'KC-4.1.VI',
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.1.IV.C',
      theme: 'Governance',
      text: 'Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.ii',
      theme: 'Governance',
      text: 'Economic disputes led to rivalries and conflict between states.',
      illustrativeExamples: ['Muslim–European rivalry in the Indian Ocean', 'Moroccan conflict with the Songhai Empire']
    },
    {
      code: 'KC-4.1.IV.D.i',
      theme: 'Economic Systems',
      text: 'The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV',
      theme: 'Economic Systems',
      text: 'The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices, and new transoceanic and regional shipping services developed by European merchants.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.A',
      theme: 'Economic Systems',
      text: 'Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased.',
      illustrativeExamples: ['Western Europe, wool and linen', 'India, cotton', 'China, silk']
    },
    {
      code: 'KC-4.2.III.C',
      theme: 'Social Interactions and Organization',
      text: 'Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV.D.ii',
      theme: 'Social Interactions and Organization',
      text: 'The Atlantic trading system involved the movement of labor, including enslaved persons, and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.VI',
      theme: 'Cultural Developments and Interactions',
      text: 'In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Maintaining Maritime Empires: Money, Markets, Society, and Belief",
    intro: "Topic 4.5 asks four connected questions. How did rulers organize economic competition? What changed and continued in exchange networks? What social effects followed expanding production and Atlantic exchange? And how did intensified contact affect belief systems? Keep those four moves distinct, then connect them.",
    videos: [],
    segments: [
      {
        title: "Economic Strategy: Mercantilism and Chartered Companies",
        bullets: [
          "**Mercantilism** treated overseas trade as a tool of state power. Rulers used tariffs, navigation laws, colonial monopolies, and exclusive trading rights to keep wealth and strategic commodities inside their own imperial systems.",
          "Chartered joint-stock companies such as the **Dutch VOC** and **British EIC** pooled private capital while receiving state-backed monopoly rights. They could trade, negotiate, build forts, and sometimes wage war, making commercial organizations instruments of imperial competition.",
          "Because states pursued the same profitable routes and markets, **economic disputes produced interstate rivalry**. Commercial strategy and geopolitical conflict were connected rather than separate stories."
        ],
        image: {
          title: "Dutch East India Company emblem",
          caption: "The VOC combined private investment with state-backed monopoly and coercive power.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/VOC.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:VOC.svg"
        }
      },
      {
        title: "Exchange Networks: New Global Circulation, Old Regional Strength",
        bullets: [
          "American **silver** moved through Atlantic routes to Europe and across the Pacific through Manila, where it purchased Asian goods and responded to strong Chinese demand. Chartered monopoly companies helped move goods through these expanding transoceanic circuits.",
          "The **Atlantic trading system** moved goods, wealth, and labor, including enslaved people, among Africa, Europe, and the Americas. These routes created new connections between previously separate hemispheric systems.",
          "At the same time, established **Afro-Eurasian regional markets continued to flourish**. Asian, African, and Middle Eastern merchants retained commercial knowledge, credit practices, and local networks that European companies entered rather than simply replacing."
        ],
        image: {
          title: "World trade routes, c. 1700",
          caption: "New transoceanic routes became layered onto older regional commercial systems.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:1700_CE_world_map.PNG"
        }
      },
      {
        title: "Social Effects: Labor Intensification and Family Change",
        bullets: [
          "Expanding demand for consumer goods intensified **peasant and artisan labor**: wool and linen production in western Europe, cotton textiles in India, and silk production in China all expanded while older labor forms continued.",
          "The Atlantic trade in enslaved people produced major demographic effects in parts of Africa. Because the trade often removed large numbers of young adults, it could alter local sex ratios, household labor, marriage patterns, and family responsibilities.",
          "Across the Atlantic world, forced migration also contributed to **cultural synthesis** and cultural mixing among African, American, and European peoples. Economic exchange therefore changed social life far beyond prices and profits."
        ],
        image: {
          title: "Indian cotton textile production",
          caption: "An Indian weaver at his loom, in a gouache drawing now in the Wellcome Collection. Global demand often intensified existing artisan production instead of replacing it.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian%20weaver%20at%20his%20loom.%20Gouache%20drawing.%20Wellcome%20V0045300.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_weaver_at_his_loom._Gouache_drawing._Wellcome_V0045300.jpg"
        }
      },
      {
        title: "Belief Systems: Expansion, Conflict, and Syncretism",
        bullets: [
          "Increased interaction expanded the geographic reach of existing religions through migration, missionary activity, conquest, and trade. Catholic missions in the Americas and Asia are one example of older religions entering new settings.",
          "Religious interaction could produce **conflict** when imperial authorities tried to suppress local practices or when rival confessional identities became tied to political power.",
          "It also produced **syncretic belief systems and practices**. Traditions such as **Vodun** in Haiti and **Santería** in Cuba combined West and Central African religious practices with elements of Christianity under colonial conditions. Compare the effects: global contact could spread, contest, or blend religious traditions."
        ],
        image: {
          title: "Colonial religious interaction",
          caption: "Global connections could expand established religions while also producing conflict and syncretic practice.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Our_Lady_of_Guadalupe.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Our_Lady_of_Guadalupe.jpg"
        }
      }
    ]
  },

  map: {
    title: "Silver Routes and Colonial Administration, c. 1580",
    url: "../assets/images/instructional-maps/topic-4-5.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-5.svg",
    caption: "By c. 1580, American silver connected the Americas, Europe, and Asia in a single global trade network. Silver from Potosí flowed east to Seville and west to Manila, where it was exchanged for Chinese goods and pulled toward Asia by Chinese demand.",
    intro: "Trace the two silver routes from Potosí: east across the Atlantic through Seville, and west through Acapulco and Manila to China. Notice how these routes connected colonial labor systems (mita at Potosí) to global trade networks (Manila Galleon, Atlantic system) and to Asian economies (Chinese demand for silver).",
    prompt: "Using the map, explain how the silver economy connected three continents. What role did Chinese demand for silver play in driving the entire system? What does this reveal about Asia's role in the global economy during this period?"
  },

  deepReading: {
    title: "What Held It Together",
    desc: "A textbook-depth companion on the economics: mercantilism derived from its premise, the silver chain from Potosi to Canton and why a Ming tax reform set the price, the real shape of the Atlantic system, creolization as creation under constraint, and the trade deficit that defined Europe in Asia. Optional, and the strongest single corrective to a Unit 4 essay.",
    url: "deep-reading-topic-4-5-maritime-empires-maintained.html"
  },

  first10: {
    title: 'First & 10: The Labor of Empire',
    embedUrl: 'first-and-10-topic-4-5-maritime-empires-maintained-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.5 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Labor, Silver, and Imperial Maintenance",
    intro: "Use the evidence below to analyze how labor systems and silver extraction sustained European maritime empires. Strong AP causation and CCOT arguments require specific evidence and a clear explanation of how one event or condition caused or continued another.",
    prompt: "Choose one piece of evidence and explain what it reveals about how European maritime empires maintained themselves. Then identify a continuity: what aspects of this system persisted from earlier periods, and what changed?",
    items: [
      { title: "Mita labor decree — Potosí, 1575", detail: "Viceroy Toledo's formalization of the mita system conscripted one-seventh of all adult indigenous males in a designated zone for annual labor at Potosí. The mita was justified as an adaptation of the Inca mit'a, a continuity argument that masked the much more brutal conditions of colonial silver mining. Evaluate what this source reveals about how the Spanish used the language of pre-colonial institutions to justify new forms of coercion." },
      { title: "Manila Galleon trade records — late 16th century", detail: "Cargo manifests from Manila Galleon voyages show enormous quantities of Chinese silk, porcelain, and spices exchanged for Mexican silver. The regularity and scale of the trade, one or two galleons per year, each carrying 300–500 tons of silver, demonstrates how American silver had become the engine of trans-Pacific commerce. Use this evidence to argue for the significance of silver in connecting global economies." },
      { title: "Las Casas, New Laws petitions, 1542", detail: "Bartolomé de las Casas's campaigns resulted in the New Laws of 1542, which formally abolished the hereditary encomienda. In practice, colonists in Peru revolted against enforcement; in New Spain, the laws were softened before implementation. Use this evidence to argue about the limits of imperial reform and the tensions between colonial administrators and colonists over labor policy." }
    ]
  },

  primarySource: {
    title: "Primary Source: Viceroy Toledo on the Mita at Potosí, c. 1575",
    intro: "Francisco de Toledo served as Viceroy of Peru from 1569 to 1581 and is credited with formalizing the mita system at Potosí. His administrative reports to the Spanish crown justified the mita as both legally legitimate (adapting an existing Inca institution) and economically necessary (the silver mines required a guaranteed labor supply). This adapted passage is drawn from his correspondence with Philip II of Spain.",
    text: "The Indians of this land are unaccustomed to the discipline of continuous labor, and without the mita there would be no workers at the mines, and without workers there would be no silver, and without silver there would be no fleet, and without the fleet Your Majesty could not defend his kingdoms. I have therefore organized the mita in the manner of the ancient Inca obligation, requiring each community to send one in seven of its adult men to Potosí for a period of one year, after which they may return and another draft will be sent. The men are paid for their labor, a wage fixed by royal decree, and are fed during their service. The mita is not slavery, which I would not permit; it is an obligation of tribute that every vassal owes to his sovereign, adapted to the conditions of this land. The alternative, to rely on voluntary labor, has been tried and has failed. Without compulsion, the silver of Cerro Rico will remain in the ground, and the empire will be impoverished.",
    questions: [
      "How does Viceroy Toledo justify the mita? What arguments does he use to distinguish it from slavery, and what economic logic does he invoke?",
      "What does Toledo's reference to the 'ancient Inca obligation' reveal about how Spanish colonial administrators used pre-colonial institutions to legitimize new systems of coercion?",
      "Based on what you know about conditions at Potosí, what does Toledo leave out of this account? What would a mita worker's account of the same system look like?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Mita Worker at Potosí, c. 1580",
    desc: "You are a Quechua man from a village in the Bolivian highlands. Your community has received its annual mita assignment: you and eleven other men must spend the next year working in the silver mines of Cerro Rico, the Rich Mountain, at Potosí. The journey takes twelve days on foot.",
    intro: "You have heard what happens at Potosí. Your uncle came back two years ago with shaking hands and a cough that has never left him. The man from the neighboring village did not come back at all. You have a wife and two children at home. You have been assigned to work in the deepest shaft, processing ore with mercury to extract the silver. The foreman is a mestizo named Diego who keeps careful count of each worker's daily output.",
    detail: "Each day you descend before dawn, carrying a tallow candle and a pick. The shafts are narrow. The air near the ore veins is hot; in the lower passages it is cold and thin. You can smell the mercury used to process the silver, a heavy, metallic smell that coats the back of your throat. Your daily quota is two cestos (baskets) of ore. If you fall short, Diego docks your wages. You need those wages: the tribute your village owes the Spanish crown each year must be paid in silver, and the only way to earn silver is to mine it. You understand that you are, in some sense, mining the money to pay for your own conscription.",
    prompt: "Write a letter home to your wife in the village. Describe what Potosí is like, the size of the city, the mountain, the work underground. Tell her what you want her to explain to your children about why you are there. Tell her what you hope for when your year is finished. Your letter should be honest about the conditions but also show the full humanity and dignity of the person writing it, not just suffering, but thought, love, and resistance."
  },

  beInTheRoom: {
    url: '',
    desc: "Debate the mita system with Viceroy Toledo at the court of Philip II, manage silver production as a Potosí mine foreman navigating between colonial quotas and worker survival, or trace a single shipment of silver from Potosí to Manila as a Dutch merchant."
  }

};
