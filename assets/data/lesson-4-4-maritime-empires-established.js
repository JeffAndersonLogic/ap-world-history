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
    topic: "Topic 4.4",
    title: "Maritime Empires Established",
    subtitle: "How Portugal, Spain, and then the Dutch, British, and French built maritime empires using three distinct models: trading post empire, territorial colonialism, and joint-stock company",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here — submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how Portugal established a trading post empire (Estado da India) and describe how control of fortified ports and sea lanes differed from territorial colonialism.",
      kc: 'KC-4.3.II.A.i',
      theme: "Governance"
    },
    {
      target: "I can describe how Spain established colonial empires in the Americas through conquest, and explain the administrative systems — encomienda, viceroyalties — used to control them.",
      kc: 'KC-4.2.II.D',
      theme: "Economic Systems"
    },
    {
      target: "I can analyze how the Dutch, British, and French used joint-stock companies to build maritime empires, and compare this model to the Portuguese and Spanish approaches.",
      kc: 'KC-4.3.II.C',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain the Estado da India model: fortified ports at key straits (Goa, Malacca, Hormuz), naval control of sea lanes, and why the Portuguese chose commercial dominance over territorial conquest in Asia.",
      kc: 'KC-4.3.II.A.i',
      theme: "Governance"
    },
    {
      criteria: "I can describe the Spanish conquest of the Aztec and Inca empires, explain how disease enabled conquest, and describe how the encomienda system and viceroyalties organized colonial rule.",
      kc: 'KC-4.2.II.D',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain the joint-stock company model (VOC, British EIC) and explain what made it a different approach to empire — spreading risk through private investment — compared to state-controlled Portuguese or Spanish empire.",
      kc: 'KC-4.3.II.C',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.3.II.A.i',
      theme: 'Governance',
      text: 'Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks. Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies.',
      illustrativeExamples: ['Ming China', 'Tokugawa Japan']
    },
    {
      code: 'KC-4.3.II.C',
      theme: 'Governance',
      text: 'Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II.A.ii',
      theme: 'Governance',
      text: 'The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo, whose participation in trading networks led to an increase in their influence.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II.A.iii',
      theme: 'Economic Systems',
      text: 'Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants.',
      illustrativeExamples: ['Swahili Arabs', 'Omanis', 'Gujaratis', 'Javanese']
    },
    {
      code: 'KC-4.2.II.D',
      theme: 'Economic Systems',
      text: 'Newly developed colonial economies in the Americas largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.B',
      theme: 'Social Interactions and Organization',
      text: 'Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.C',
      theme: 'Social Interactions and Organization',
      text: 'The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Building Empires at Sea: Three Models of Maritime Power",
    intro: "Use these cards to explain how European states built maritime empires after c. 1500 — three distinct models for controlling global trade and territory: the Portuguese trading post empire, the Spanish territorial colonial empire, and the Dutch/British/French joint-stock company model. Each model reflected the goals, resources, and geographic situation of the state that adopted it.",
    videos: [],
    segments: [
      {
        title: "The Portuguese Trading Post Empire: Estado da India",
        bullets: [
          "The **Estado da India** ('State of India') was Portugal's maritime empire in Asia and Africa — not a territorial empire but a **commercial empire based on fortified ports at strategic locations**. Rather than conquer and govern large populations, the Portuguese aimed to control the narrow passages through which trade flowed: the straits, harbor entrances, and chokepoints of the Indian Ocean world.",
          "**Afonso de Albuquerque**, the architect of the Estado da India, seized **Goa** on India's western coast (1510), **Malacca** at the strait between the Indian Ocean and the South China Sea (1511), and the **Strait of Hormuz** at the entrance to the Persian Gulf (1515). Whoever controlled these three points controlled the movement of spices, silk, and precious goods across the entire Indian Ocean system. Portuguese **carracks** — large, heavily armed ships — patrolled the sea lanes and could deny passage to ships that refused to pay tolls or carry a Portuguese-issued **cartaz** (trading license).",
          "The Portuguese model worked because **force multiplication**: a relatively small number of ships and soldiers could control enormous trade volumes if positioned at the right geographic chokepoints. Portugal's population of about 1 million could not have conquered and administered all of Asia — but it could station garrisons at a few dozen key ports and extract tolls from the trade that flowed through them.",
          "The Estado da India **did not displace existing Asian trade networks** — Arab, Indian, Chinese, Malay, and Swahili merchants continued to trade throughout the Indian Ocean. The Portuguese inserted themselves as armed toll-collectors at key points, skimming profit from existing trade rather than replacing it. This made the system commercially viable but also vulnerable: when the Dutch arrived in the early 1600s with more capital and better organizational models, the Portuguese could not match them."
        ],
        image: {
          title: "VOC — Dutch East India Company",
          caption: "The VOC monogram from a 17th-century trading company coin. The Dutch East India Company, founded in 1602, would eventually displace the Portuguese as the dominant commercial power in the Indian Ocean — using a fundamentally different organizational model based on joint-stock investment.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      },
      {
        title: "The Spanish Colonial Empire: Conquest and Administration",
        bullets: [
          "The Spanish model was fundamentally different from the Portuguese: rather than controlling trade routes, Spain **conquered and governed large territories and populations**, extracting wealth through forced labor and tribute. The conquest of the **Aztec Empire** (Hernán Cortés, 1519–1521) and the **Inca Empire** (Francisco Pizarro, 1532–1572) gave Spain control over the two largest and wealthiest civilizations in the Western Hemisphere.",
          "Conquest was made possible by a combination of factors: **military technology** (steel weapons, horses, firearms vs. obsidian weapons and no horses), **indigenous alliances** (Aztec enemies like the Tlaxcalans fought alongside Cortés), and above all **disease** — smallpox and other epidemics killed an estimated 50–90% of the indigenous population, decimating the ability to resist. Spanish military superiority alone could not have overthrown empires of tens of millions; disease did the decisive work.",
          "The **encomienda system** organized colonial labor: the Spanish crown granted individual colonists (*encomenderos*) the right to the labor and tribute of a designated indigenous population, in exchange for providing religious instruction and military service. In practice, the encomienda was a system of forced labor that caused enormous suffering. The Dominican friar **Bartolomé de las Casas** documented its abuses in his *Short Account of the Destruction of the Indies* (1542), sparking the first significant European debate about the ethics of colonialism.",
          "The **viceroyalties of New Spain** (Mexico, 1535) **and Peru** (1542) organized Spanish colonial administration into large territorial units governed by a viceroy appointed by the Spanish crown. Beneath the viceroys, a complex hierarchy of officials, judges, and local administrators (*alcaldes*) extended Spanish authority to the local level. The **Catholic Church** was a central institution of colonial rule — missionaries established a vast network of missions across the Americas, converting indigenous peoples and providing the ideological justification for the entire colonial enterprise."
        ],
        image: {
          title: "Casta Painting — Colonial Social Hierarchy",
          caption: "A casta painting from colonial Mexico, showing the elaborate racial classification system developed in Spanish colonial America. The hierarchy — from Spanish-born peninsulares at the top to African-descent enslaved people at the bottom — reflected the social consequences of conquest, demographic collapse, and forced labor.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg"
        }
      },
      {
        title: "The Northern Challenge: Joint-Stock Companies and a New Empire Model",
        bullets: [
          "By c. 1600, the **Dutch, British, and French** had entered the competition for Asian and Atlantic trade — and they introduced a fundamentally new organizational model: the **joint-stock company**. Instead of funding voyages directly from the royal treasury (as Portugal and Spain had done), joint-stock companies sold shares to private investors who shared in both the profits and the risks. This allowed far more capital to be mobilized than any single state could provide.",
          "The **Dutch East India Company** (**VOC**, *Vereenigde Oost-Indische Compagnie*, founded 1602) became the most powerful private company in history. Given a monopoly on Dutch trade east of the Cape of Good Hope, the VOC had its own army, navy, and legal authority to sign treaties, wage war, and govern territories. Its headquarters at **Batavia** (modern Jakarta) controlled the **Spice Islands** (Maluku) — the source of cloves, nutmeg, and mace. The VOC displaced the Portuguese in much of the Indian Ocean within a generation.",
          "The **British East India Company** (EIC, founded 1600) initially focused on trade in textiles, tea, and spices. Over the 17th and 18th centuries, it established trading posts at **Surat, Madras, Bombay, and Calcutta** — eventually becoming the governing authority over much of the Indian subcontinent by the mid-18th century. The EIC represented the gradual transformation of commercial company into colonial state.",
          "The joint-stock model had decisive advantages: **private capital** funded expansion without straining royal treasuries; **shared risk** encouraged investment in expensive and dangerous voyages; and **competitive pressure** among shareholders drove efficiency. It also had a distinctive character — trading companies were explicitly profit-motivated in a way that Spanish territorial empire was not, and their commercial logic shaped how they governed. The VOC's treatment of the Banda Islands (1621) — where it massacred the population and enslaved the survivors to control nutmeg production — illustrates how the profit motive could produce extreme violence."
        ],
        image: {
          title: "World Map, c. 1700",
          caption: "A world map from c. 1700 showing the global extent of European maritime empires at their height — Portuguese trading posts along African and Asian coasts, Spanish colonial territories in the Americas, and Dutch and British commercial networks across the Indian Ocean and Atlantic.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png"
        }
      }
    ]
  },

  map: {
    title: "Maritime Empire Routes and Trading Posts, c. 1550",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    caption: "European maritime empires by c. 1550 extended across three oceans — the Portuguese Estado da India controlled the Indian Ocean's key chokepoints; Spanish colonial empire covered most of the Americas; the Dutch and British were beginning to challenge both.",
    intro: "Use the map to trace the geographic logic of the Estado da India: Goa on India's west coast, Malacca at the strait between the Indian Ocean and South China Sea, Hormuz at the entrance to the Persian Gulf. Notice how controlling these three points gave Portugal leverage over the entire Indian Ocean trade system without needing to control the interior of any continent.",
    prompt: "Looking at the map, explain why the Portuguese focused on fortified coastal ports rather than inland conquest. What does the geography of the Indian Ocean — with its key straits and chokepoints — reveal about why the trading post model was viable for a small state like Portugal?"
  },

  first10: {
    title: 'First & 10: Building Empires at Sea',
    embedUrl: 'first-and-10-topic-4-4-maritime-empires-established-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.4 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Three Models of Empire, Three Sets of Evidence",
    intro: "Use the evidence below to analyze the three distinct models of European maritime empire and compare their methods, goals, and consequences. Strong AP comparison requires specific evidence from multiple cases and an explanation of what the comparison reveals.",
    prompt: "Choose one piece of evidence and explain what it reveals about a specific model of European maritime empire. Then identify what this model had in common with — and what made it different from — at least one other model.",
    items: [
      { title: "The cartaz system — Portuguese trading licenses in the Indian Ocean", detail: "Evidence of the Estado da India model: Portuguese authorities required all ships trading in the Indian Ocean to purchase a cartaz (trading license) and submit to Portuguese inspection. Ships without a cartaz could be seized and their crews killed. This system of commercial coercion allowed Portugal to extract profit from trade without governing the territories where that trade originated." },
      { title: "Las Casas's Account — the encomienda and indigenous death", detail: "Evidence of the Spanish colonial model from an internal Spanish critic: Bartolomé de las Casas documented in detail the mass deaths caused by the encomienda system and argued that Spanish conduct in the Americas violated natural law and Christian ethics. Evaluate this source for what it reveals about the encomienda system and for the limits of its perspective (Las Casas advocated African slavery as an alternative to indigenous slavery)." },
      { title: "VOC charter (1602) — a company given state powers", detail: "Evidence of the joint-stock company model: the VOC was granted the right to sign treaties, wage war, administer justice, and coin money — powers normally reserved for sovereign states. This blurred the line between commerce and governance in ways that the Portuguese and Spanish models had not. The VOC's chartered powers reveal how the Dutch model of empire was built on private capital and commercial logic rather than royal authority and religious mission." }
    ]
  },

  primarySource: {
    title: "Primary Source: Bartolomé de las Casas, A Short Account of the Destruction of the Indies, 1542",
    intro: "Bartolomé de las Casas (1484–1566) was a Spanish Dominican friar and one of the first Europeans to criticize the treatment of indigenous peoples by Spanish colonists. He participated in early Spanish colonial ventures before becoming an advocate for indigenous rights. His Short Account was addressed to Prince Philip of Spain and was intended to shock the royal court into reforming the colonial system. This adapted passage describes the encomienda system in the Caribbean.",
    text: "From the very first day they set foot on the Indies, the Spaniards treated the people there as if they were of no account, occupying their lands and treating them as serfs. The governors and settlers who came to the Indies demanded from the Indian leaders gold and labor — more than the land could produce, more than any human body could endure. When the Indian people did not deliver what was demanded, the Spaniards took their revenge with their hands and with the sword and with fire. They set hunting dogs on them. They burned entire villages. They killed or enslaved all those who remained. Those who fled into the mountains died of starvation and exhaustion. Those who remained were worked to death in the mines and on the farms, with insufficient food, in conditions that no free person would accept voluntarily. The Indian nations of the Islands, who had numbered in the millions, were within fifty years reduced to almost nothing — not because they were weak or incapable, but because they were destroyed.",
    questions: [
      "What does Las Casas's account reveal about how the encomienda system worked in practice? What specific methods of coercion and violence does he describe, and how do these connect to the broader goal of extracting labor and tribute?",
      "Las Casas was a Spanish Dominican friar who had himself participated in early colonial ventures before becoming a critic. How might his position — insider turned critic — shape both what he observed accurately and what he might have misrepresented or left out?",
      "Las Casas argued against indigenous enslavement but at one point proposed importing African enslaved workers as an alternative. How does this complicate his status as an advocate for the oppressed, and what does it reveal about the limits of his critique of the colonial system?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Nahua Noble in New Spain, c. 1535",
    desc: "You are a member of a noble Nahua family from a city that allied with Hernán Cortés during the conquest of the Aztec Empire. Your family's alliance helped defeat your old enemy Tenochtitlan — and in return, the Spanish have given your family a position in the new colonial administration. You are now an intermediary between the Spanish colonial governor and your community. This is not what you expected.",
    intro: "You sit in the office of the colonial alcalde mayor, serving as the official interpreter between Spanish authorities and the local indigenous community. You speak Nahuatl, Spanish, and three other indigenous languages. You have been baptized as 'Don Luis' though your original name is Tlacaelel. Your family's cooperation with Cortés earned them recognition as nobles under Spanish law — a status that protects you from the encomienda labor system that has been destroying the communities around you.",
    detail: "This morning, the alcalde mayor told you to inform your community that they must provide forty additional workers for the silver mines to the north — workers who will not return. You have watched the population of your hometown shrink from perhaps 12,000 people to under 3,000 in a decade, mostly from disease but also from mine labor and overwork. The Spanish priests have built a church on the site of the old temple and are requiring attendance at mass. Your old religious practices survive only in secret, in the back rooms of houses, in stories told to children at night. You have protected your family and preserved some of your community's privileges. But you are not certain what you have protected them into.",
    prompt: "Write a letter — in Spanish, since it might be read — to the alcalde mayor explaining why your community cannot provide forty more workers for the mines. Then write a second message — in Nahuatl, never to be shown to the Spanish — to your cousin who is organizing secret resistance in the highlands. What do you say in each? What can you say in one that you cannot say in the other?"
  },

  beInTheRoom: {
    url: '../beintheroom/unit-4/maritime-empires-established.html',
    desc: "Navigate the Estado da India from a Portuguese factor's perspective at Goa, argue the ethics of the encomienda system with Bartolomé de las Casas, or manage the VOC's Spice Islands trade network from Batavia."
  }

};
