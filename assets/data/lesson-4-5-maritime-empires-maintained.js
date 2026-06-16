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
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how European maritime empires used labor systems — encomienda, mita, and chattel slavery — to extract resources from their colonies.",
      kc: 'KC-4.1.IV.D.i',
      theme: "Economic Systems"
    },
    {
      target: "I can analyze how colonial administration — viceroyalties, audiencias, and the Catholic Church — maintained imperial control in the Americas.",
      kc: 'KC-4.1.IV.C',
      theme: "Governance"
    },
    {
      target: "I can evaluate how the extraction of American silver from Potosí transformed global trade networks through the Manila Galleon trade and the global price revolution.",
      kc: 'KC-4.1.IV',
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe at least two labor systems used in Spanish colonial America (encomienda, mita) and explain how each served colonial economic goals, including the role of disease in driving the shift from encomienda to mita and chattel slavery.",
      kc: 'KC-4.1.IV.D.i',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain the role of the viceregal system, audiencias, and the Catholic Church in administering Spanish colonial territories, and describe how these institutions maintained order across vast distances.",
      kc: 'KC-4.1.IV.C',
      theme: "Governance"
    },
    {
      criteria: "I can trace how silver from Potosí flowed through the Manila Galleon trade and Seville's Casa de Contratación to connect the Americas, Europe, and Asia, and explain the global price revolution as an effect of silver influx.",
      kc: 'KC-4.1.IV',
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.5.I.A',
      theme: 'Economic Systems',
      text: 'European colonial empires relied on forced and coerced labor systems — including encomienda, mita, and chattel slavery — to extract resources and generate wealth from their colonies.',
      illustrativeExamples: ['Encomienda', 'Mita', 'Potosí silver mines', 'Chattel slavery in Brazil and the Caribbean', 'Bartolomé de las Casas and the New Laws of 1542']
    },
    {
      code: 'KC-4.5.I.B',
      theme: 'Governance',
      text: 'Colonial administration was organized through viceroyalties, audiencias, and the Catholic Church — each of which served administrative, judicial, and cultural conversion roles across vast colonial territories.',
      illustrativeExamples: ['Viceroyalty of New Spain', 'Viceroyalty of Peru', 'Audiencias', 'Jesuit and Franciscan missions', 'Casa de Contratación']
    },
    {
      code: 'KC-4.5.I.C',
      theme: 'Economic Systems',
      text: 'American silver — especially from Potosí — connected the Americas, Europe, and Asia into a single global trade network through the Manila Galleon trade and the Seville trading monopoly, causing a global price revolution.',
      illustrativeExamples: ['Potosí', 'Manila Galleon trade (1565–1815)', 'Casa de Contratación (Seville)', 'Global price revolution', 'Chinese demand for silver']
    }
  ],

  lecture: {
    title: "Labor, Administration, and Silver: Maintaining Maritime Empires",
    intro: "European maritime empires after c. 1500 were sustained by three interlocking systems: forced labor that extracted resources from colonies, bureaucratic administration that maintained imperial order, and global trade networks that channeled wealth back to Europe. Understanding how these systems worked together — and how each depended on the others — is essential for Topic 4.5.",
    videos: [],
    segments: [
      {
        title: "Forced Labor Systems: Encomienda, Mita, and Chattel Slavery",
        bullets: [
          "The **encomienda system** organized the basic relationship between Spanish colonists and indigenous peoples: the crown granted a colonist (*encomendero*) the right to extract labor and tribute from a designated indigenous community, supposedly in exchange for Christian instruction and military protection. In practice, it concentrated enormous power in individual colonists and created conditions of extreme exploitation that Bartolomé de las Casas documented in his *Short Account* (1542).",
          "As disease killed 50–90% of the indigenous population in the century after contact, the encomienda became inadequate — there were not enough workers. The **mita system** filled the gap at Potosí: adapted from the Inca *mit'a*, it required indigenous communities to supply rotating labor drafts to the silver mines. Workers traveled weeks to reach Potosí, descended into lethal conditions underground, and were exposed to mercury poisoning used in silver processing. Death rates were catastrophic.",
          "**Chattel slavery** developed as the plantation economy demanded a labor force in coastal zones where the mita did not reach. The Portuguese introduced enslaved Africans to Brazil's sugar plantations in the 1530s; the Spanish, Dutch, British, and French followed in the Caribbean and Atlantic coast. Chattel slavery was hereditary, racially defined, and gave enslaved people no legal recourse — qualitatively more absolute than the mita or encomienda.",
          "The three systems coexisted and complemented each other geographically: the mita dominated the highland mining zones of the Andes; the encomienda persisted in agricultural regions; chattel slavery dominated coastal plantations. Each was matched to the economic function of the region it served."
        ],
        image: {
          title: "Florentine Codex — Disease and Labor",
          caption: "The demographic collapse caused by disease — documented in sources like the Florentine Codex — was the fundamental cause of the shift from encomienda to mita and chattel slavery. When the indigenous labor supply collapsed, colonial labor systems evolved to find replacements.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "Colonial Administration: Governing at a Distance",
        bullets: [
          "The Spanish colonial empire governed enormous territories across two continents from a capital thousands of miles away. The **viceregal system** placed royal governors — viceroys — at the head of each major territorial unit: the **Viceroyalty of New Spain** (capital: Mexico City, established 1535) and the **Viceroyalty of Peru** (capital: Lima, established 1542). Viceroys were appointed by the crown, served limited terms, and were subject to review (*residencia*) at the end of their tenure.",
          "**Audiencias** — royal courts with combined judicial, legislative, and administrative functions — provided day-to-day governance across the colonies. There were eventually twelve audiencias across Spanish America, each serving as the primary mechanism of colonial law and order. Indigenous peoples could bring complaints to the audiencias, though access was limited and outcomes often unfavorable.",
          "The **Catholic Church** was the most pervasive institution of colonial rule. **Franciscan, Dominican, and Jesuit missionaries** established missions across the Americas, converting indigenous peoples, running schools and hospitals, and serving as the only European presence in many frontier regions. The Church justified colonial rule theologically — conquest and colonization were framed as a Christian duty to bring salvation to indigenous peoples. Missionaries like Las Casas challenged the brutality of this project from within, but the Church as an institution remained deeply embedded in colonial power.",
          "The **Casa de Contratación** in Seville controlled all trade between Spain and its colonies, functioning as the commercial backbone of the empire. It registered ships, trained pilots, administered the trading monopoly, and regulated the flow of silver from the Americas to Spain. This commercial monopoly channeled wealth through Seville and gave the Spanish crown direct revenue from colonial trade."
        ],
        image: {
          title: "Casta Painting — Colonial Social Order",
          caption: "Casta paintings documented the elaborate racial classification system of Spanish colonial America. The hierarchy — peninsulares, creoles, mestizos, mulattos, indigenous, enslaved Africans — was maintained and enforced by the administrative institutions of the viceregal system.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg"
        }
      },
      {
        title: "Silver and the Global Economy: Potosí to Manila to Seville",
        bullets: [
          "**Potosí** (modern Bolivia) was the engine of the Spanish colonial economy and the most important single source of silver in the world from c. 1550 to c. 1700. By 1600 it was the largest city in the Western Hemisphere — roughly 160,000 people — sustained entirely by silver extraction. The **mita system** conscripted indigenous workers from a radius of hundreds of miles. Mercury, imported from Huancavelica, was used to amalgamate silver from ore — a process that caused severe neurological damage in workers exposed to mercury fumes.",
          "The **Manila Galleon trade** (1565–1815) was the first regularly scheduled transoceanic trade route. Silver mined at Potosí was transported to Mexico City and then to Acapulco, where it was loaded onto galleons for the trans-Pacific crossing to Manila. In Manila, silver was exchanged for Chinese silk, porcelain, lacquerware, and spices — then carried back to Acapulco and overland to Veracruz for the Atlantic crossing to Seville. This circuit was driven by **Chinese demand for silver** to pay taxes under the Single Whip Tax Reform (1581), which required payment in silver rather than grain or labor.",
          "The **global price revolution** was the economic consequence of this silver flood. The enormous increase in the silver supply caused inflation across Europe and Asia — prices roughly tripled in Western Europe between 1500 and 1650. This disrupted established economic relationships, accelerated the decline of feudal arrangements, and benefited merchants and debtors while harming creditors and those on fixed incomes. Spain itself was paradoxically weakened: the silver influx allowed Spanish monarchs to fund wars without fiscal discipline, and inflation eroded the competitiveness of Spanish industry.",
          "The Manila Galleon trade illustrates a key theme for AP World History: **existing trade networks adapted to incorporate new commodities and routes rather than being replaced by them**. Chinese merchants, Portuguese intermediaries, and indigenous traders all participated in the silver economy. The Indian Ocean trade continued; Arab and Chinese merchants continued to dominate their sectors; the new global network built on and through the old."
        ],
        image: {
          title: "VOC — Global Trade Networks",
          caption: "By the early 17th century, the global trade networks created by American silver connected European colonial powers, Asian manufacturers, and African labor into a single economic system — one in which the Dutch VOC, British EIC, and Portuguese Estado da India all competed for position.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      }
    ]
  },

  map: {
    title: "Silver Routes and Colonial Administration, c. 1580",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    caption: "By c. 1580, American silver connected the Americas, Europe, and Asia in a single global trade network. Silver from Potosí flowed east to Seville and west to Manila, where it was exchanged for Chinese goods and pulled toward Asia by Chinese demand.",
    intro: "Trace the two silver routes from Potosí: east across the Atlantic through Seville, and west through Acapulco and Manila to China. Notice how these routes connected colonial labor systems (mita at Potosí) to global trade networks (Manila Galleon, Atlantic system) and to Asian economies (Chinese demand for silver).",
    prompt: "Using the map, explain how the silver economy connected three continents. What role did Chinese demand for silver play in driving the entire system? What does this reveal about Asia's role in the global economy during this period?"
  },

  first10: {
    title: 'First & 10: The Labor of Empire',
    embedUrl: 'first-and-10-topic-4-5-maritime-empires-maintained-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.5 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Labor, Silver, and Imperial Maintenance",
    intro: "Use the evidence below to analyze how labor systems and silver extraction sustained European maritime empires. Strong AP causation and CCOT arguments require specific evidence and a clear explanation of how one event or condition caused or continued another.",
    prompt: "Choose one piece of evidence and explain what it reveals about how European maritime empires maintained themselves. Then identify a continuity: what aspects of this system persisted from earlier periods, and what changed?",
    items: [
      { title: "Mita labor decree — Potosí, 1575", detail: "Viceroy Toledo's formalization of the mita system conscripted one-seventh of all adult indigenous males in a designated zone for annual labor at Potosí. The mita was justified as an adaptation of the Inca mit'a — a continuity argument that masked the much more brutal conditions of colonial silver mining. Evaluate what this source reveals about how the Spanish used the language of pre-colonial institutions to justify new forms of coercion." },
      { title: "Manila Galleon trade records — late 16th century", detail: "Cargo manifests from Manila Galleon voyages show enormous quantities of Chinese silk, porcelain, and spices exchanged for Mexican silver. The regularity and scale of the trade — one or two galleons per year, each carrying 300–500 tons of silver — demonstrates how American silver had become the engine of trans-Pacific commerce. Use this evidence to argue for the significance of silver in connecting global economies." },
      { title: "Las Casas, New Laws petitions, 1542", detail: "Bartolomé de las Casas's campaigns resulted in the New Laws of 1542, which formally abolished the hereditary encomienda. In practice, colonists in Peru revolted against enforcement; in New Spain, the laws were softened before implementation. Use this evidence to argue about the limits of imperial reform and the tensions between colonial administrators and colonists over labor policy." }
    ]
  },

  primarySource: {
    title: "Primary Source: Viceroy Toledo on the Mita at Potosí, c. 1575",
    intro: "Francisco de Toledo served as Viceroy of Peru from 1569 to 1581 and is credited with formalizing the mita system at Potosí. His administrative reports to the Spanish crown justified the mita as both legally legitimate (adapting an existing Inca institution) and economically necessary (the silver mines required a guaranteed labor supply). This adapted passage is drawn from his correspondence with Philip II of Spain.",
    text: "The Indians of this land are unaccustomed to the discipline of continuous labor, and without the mita there would be no workers at the mines, and without workers there would be no silver, and without silver there would be no fleet, and without the fleet Your Majesty could not defend his kingdoms. I have therefore organized the mita in the manner of the ancient Inca obligation, requiring each community to send one in seven of its adult men to Potosí for a period of one year, after which they may return and another draft will be sent. The men are paid for their labor — a wage fixed by royal decree — and are fed during their service. The mita is not slavery, which I would not permit; it is an obligation of tribute that every vassal owes to his sovereign, adapted to the conditions of this land. The alternative — to rely on voluntary labor — has been tried and has failed. Without compulsion, the silver of Cerro Rico will remain in the ground, and the empire will be impoverished.",
    questions: [
      "How does Viceroy Toledo justify the mita? What arguments does he use to distinguish it from slavery, and what economic logic does he invoke?",
      "What does Toledo's reference to the 'ancient Inca obligation' reveal about how Spanish colonial administrators used pre-colonial institutions to legitimize new systems of coercion?",
      "Based on what you know about conditions at Potosí, what does Toledo leave out of this account? What would a mita worker's account of the same system look like?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Mita Worker at Potosí, c. 1580",
    desc: "You are a Quechua man from a village in the Bolivian highlands. Your community has received its annual mita assignment: you and eleven other men must spend the next year working in the silver mines of Cerro Rico — the Rich Mountain — at Potosí. The journey takes twelve days on foot.",
    intro: "You have heard what happens at Potosí. Your uncle came back two years ago with shaking hands and a cough that has never left him. The man from the neighboring village did not come back at all. You have a wife and two children at home. You have been assigned to work in the deepest shaft, processing ore with mercury to extract the silver. The foreman is a mestizo named Diego who keeps careful count of each worker's daily output.",
    detail: "Each day you descend before dawn, carrying a tallow candle and a pick. The shafts are narrow. The air near the ore veins is hot; in the lower passages it is cold and thin. You can smell the mercury used to process the silver — a heavy, metallic smell that coats the back of your throat. Your daily quota is two cestos (baskets) of ore. If you fall short, Diego docks your wages. You need those wages: the tribute your village owes the Spanish crown each year must be paid in silver, and the only way to earn silver is to mine it. You understand that you are, in some sense, mining the money to pay for your own conscription.",
    prompt: "Write a letter home to your wife in the village. Describe what Potosí is like — the size of the city, the mountain, the work underground. Tell her what you want her to explain to your children about why you are there. Tell her what you hope for when your year is finished. Your letter should be honest about the conditions but also show the full humanity and dignity of the person writing it — not just suffering, but thought, love, and resistance."
  },

  beInTheRoom: {
    url: '../beintheroom/unit-4/maritime-empires-maintained.html',
    desc: "Debate the mita system with Viceroy Toledo at the court of Philip II, manage silver production as a Potosí mine foreman navigating between colonial quotas and worker survival, or trace a single shipment of silver from Potosí to Manila as a Dutch merchant."
  }

};
