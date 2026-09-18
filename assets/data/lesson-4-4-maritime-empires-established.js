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
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how European maritime empires expanded through trading posts and territorial conquest, and how participation in expanding maritime trade increased the influence of African states such as Kongo and Asante.",
      kc: 'KC-4.3.II.A.i; KC-4.3.II.A.ii; KC-4.3.II.C',
      theme: "Governance"
    },
    {
      target: "I can explain how Indian Ocean trade changed after European arrival while intra-Asian trade and Asian, African, and Middle Eastern merchants continued to flourish.",
      kc: 'KC-4.3.II.A.iii',
      theme: "Economic Systems"
    },
    {
      target: "I can explain continuity and change in colonial labor systems, including the adaptation of the Incan mit’a and the growth of encomienda, hacienda, indentured servitude, and chattel slavery.",
      kc: 'KC-4.2.II.D',
      theme: "Economic Systems"
    },
    {
      target: "I can explain continuity and change in slavery, distinguishing older African and Indian Ocean forms of enslavement from the expanding plantation demand for enslaved labor in the Americas.",
      kc: 'KC-4.2.II.B; KC-4.2.II.C',
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence from at least one European maritime empire and one African state to explain how expanding trade networks changed state power.",
      kc: 'KC-4.3.II.A.i; KC-4.3.II.A.ii; KC-4.3.II.C',
      theme: "Governance"
    },
    {
      criteria: "I can identify one European disruption to Indian Ocean trade and one important continuity involving intra-Asian commerce or merchants such as Gujaratis, Omanis, Swahili Arabs, or Javanese.",
      kc: 'KC-4.3.II.A.iii',
      theme: "Economic Systems"
    },
    {
      criteria: "I can compare one existing labor system with one new or expanded colonial labor system and explain how both served agricultural or extractive economies.",
      kc: 'KC-4.2.II.D',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain how older forms of enslavement continued while plantation economies in the Americas increased the scale and demographic significance of Atlantic chattel slavery.",
      kc: 'KC-4.2.II.B; KC-4.2.II.C',
      theme: "Social Interactions and Organization"
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
    title: "Maritime Empires Established: New Power, Old Networks, Changing Labor",
    intro: "Topic 4.4 is bigger than comparing European empire models. Track four developments together: new maritime empires and expanding states, continuity inside Indian Ocean trade, continuity/change in labor systems, and continuity/change in slavery.",
    videos: [],
    segments: [
      {
        title: "New Maritime Empires and Growing States",
        bullets: [
          "European states established maritime empires through different combinations of fortified trading posts, naval coercion, and territorial conquest. Portugal built the **Estado da Índia** around strategic ports such as Goa and Malacca; Spain conquered and governed large American territories; Dutch, French, and British power also expanded overseas.",
          "The same expanding trade networks could strengthen non-European states. In West and Central Africa, participation in Atlantic commerce helped states such as **Asante** and the **Kingdom of Kongo** increase their regional influence, even as the long-term political consequences of Atlantic trade were uneven and often destabilizing.",
          "The state-building story is therefore not 'Europe expands, everyone else declines.' Maritime connectivity redistributed opportunities for revenue, weapons, alliances, and political power in different ways."
        ],
        image: {
          title: "Estado da Índia and global maritime routes",
          caption: "European maritime empire depended on strategic ports and routes rather than one universal model of conquest.",
          url: "../assets/images/instructional-maps/topic-4-4.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-4-4.svg"
        }
      },
      {
        title: "Indian Ocean Trade: Disruption Without Replacement",
        bullets: [
          "Portuguese and later Dutch merchants disrupted parts of the Indian Ocean system by seizing ports, demanding passes, and trying to monopolize valuable routes and commodities.",
          "But established **intra-Asian trade continued to flourish**. Gujarati, Omani, Swahili, Javanese, Indian, Chinese, and other merchants kept moving goods through networks built long before European arrival.",
          "This is a continuity-and-change story: Europeans inserted armed commercial power into the network, but they did not replace the dense regional trade system or the merchants who understood local markets."
        ],
        image: {
          title: "Indian Ocean commercial world",
          caption: "Asian, African, and Middle Eastern merchants remained central to Indian Ocean trade despite European intrusion.",
          url: "../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg",
          sourceUrl: "../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg"
        }
      },
      {
        title: "Labor Systems: Old Institutions Adapted, New Ones Expanded",
        bullets: [
          "Colonial American economies depended heavily on agriculture and extraction. Conquerors frequently **adapted existing labor systems** rather than inventing everything from scratch: the Spanish colonial **mita** drew on the Incan mit’a tradition but redirected labor toward colonial mining and state revenue.",
          "New or expanded systems included **encomienda**, hacienda labor, indentured servitude, and chattel slavery. These systems differed in legal status and duration, but each organized labor for colonial production and extraction.",
          "The AP comparison is continuity/change: older obligations survived in altered form while colonial states created new legal systems that intensified control over workers and land."
        ],
        image: {
          title: "Cerro Rico at Potosí",
          caption: "Colonial silver mining adapted an Andean labor draft to a new imperial extractive economy.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cerro_de_Potos%C3%AD._Grabado_en_madera%2C_del_libro_Cr%C3%B3nica_del_Per%C3%BA%2C_1552%2C_de_Pedro_Cieza_de_Le%C3%B3n.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerro_de_Potos%C3%AD._Grabado_en_madera,_del_libro_Cr%C3%B3nica_del_Per%C3%BA,_1552,_de_Pedro_Cieza_de_Le%C3%B3n.jpg"
        }
      },
      {
        title: "Slavery: Continuity in Africa, Expansion in the Atlantic",
        bullets: [
          "Enslavement in Africa did not begin with European Atlantic expansion. Older forms continued, including incorporation of enslaved people into households and export through Mediterranean and Indian Ocean routes.",
          "What changed dramatically was the **scale and destination** of enslaved labor as plantation economies expanded in the Americas. Demand for sugar and other export crops increased forced migration across the Atlantic and helped racialize hereditary chattel slavery.",
          "Do not treat all slavery as one unchanged institution. Topic 4.4 asks you to hold both truths at once: older forms of enslavement continued, while Atlantic plantation demand produced a major expansion and transformation."
        ],
        image: {
          title: "Atlantic plantation economy",
          caption: "Plantation growth increased demand for enslaved labor and transformed the scale and social consequences of slavery in the Americas.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Post_-_Planta%C3%A7%C3%A3o_de_a%C3%A7%C3%BAcar%2C_1661.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Frans_Post_-_Planta%C3%A7%C3%A3o_de_a%C3%A7%C3%BAcar,_1661.jpg"
        }
      }
    ]
  },

  map: {
    title: "Maritime Empire Routes and Trading Posts, c. 1550",
    url: "../assets/images/instructional-maps/topic-4-4.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-4.svg",
    caption: "European maritime empires by c. 1550 extended across three oceans, the Portuguese Estado da India controlled the Indian Ocean's key chokepoints; Spanish colonial empire covered most of the Americas; the Dutch and British were beginning to challenge both.",
    intro: "Use the map to trace the geographic logic of the Estado da India: Goa on India's west coast, Malacca at the strait between the Indian Ocean and South China Sea, Hormuz at the entrance to the Persian Gulf. Notice how controlling these three points gave Portugal leverage over the entire Indian Ocean trade system without needing to control the interior of any continent.",
    prompt: "Looking at the map, explain why the Portuguese focused on fortified coastal ports rather than inland conquest. What does the geography of the Indian Ocean, with its key straits and chokepoints, reveal about why the trading post model was viable for a small state like Portugal?"
  },

  deepReading: {
    title: "Three Ways to Hold an Ocean",
    desc: "A textbook-depth companion on the trading post empire and the cartaz, who actually did the fighting at Tenochtitlan and Cajamarca, how Spain governed across a year of distance, and what a charter granting war-making powers turned a company into. Optional, and useful when a checkpoint asks you to compare models of empire.",
    url: "deep-reading-topic-4-4-maritime-empires-established.html"
  },

  first10: {
    title: 'First & 10: Building Empires at Sea',
    embedUrl: 'first-and-10-topic-4-4-maritime-empires-established-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.4 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Three Models of Empire, Three Sets of Evidence",
    intro: "Use the evidence below to analyze the three distinct models of European maritime empire and compare their methods, goals, and consequences. Strong AP comparison requires specific evidence from multiple cases and an explanation of what the comparison reveals.",
    prompt: "Choose one piece of evidence and explain what it reveals about a specific model of European maritime empire. Then identify what this model had in common with, and what made it different from, at least one other model.",
    items: [
      { title: "The cartaz system — Portuguese trading licenses in the Indian Ocean", detail: "Evidence of the Estado da India model: Portuguese authorities required all ships trading in the Indian Ocean to purchase a cartaz (trading license) and submit to Portuguese inspection. Ships without a cartaz could be seized and their crews killed. This system of commercial coercion allowed Portugal to extract profit from trade without governing the territories where that trade originated." },
      { title: "Las Casas's Account — the encomienda and indigenous death", detail: "Evidence of the Spanish colonial model from an internal Spanish critic: Bartolomé de las Casas documented in detail the mass deaths caused by the encomienda system and argued that Spanish conduct in the Americas violated natural law and Christian ethics. Evaluate this source for what it reveals about the encomienda system and for the limits of its perspective (Las Casas advocated African slavery as an alternative to indigenous slavery)." },
      { title: "VOC charter (1602) — a company given state powers", detail: "Evidence of the joint-stock company model: the VOC was granted the right to sign treaties, wage war, administer justice, and coin money, powers normally reserved for sovereign states. This blurred the line between commerce and governance in ways that the Portuguese and Spanish models had not. The VOC's chartered powers reveal how the Dutch model of empire was built on private capital and commercial logic rather than royal authority and religious mission." }
    ]
  },

  primarySource: {
    title: "Primary Source: Bartolomé de las Casas, A Short Account of the Destruction of the Indies, 1542",
    intro: "Bartolomé de las Casas (1484–1566) was a Spanish Dominican friar and one of the first Europeans to criticize the treatment of indigenous peoples by Spanish colonists. He participated in early Spanish colonial ventures before becoming an advocate for indigenous rights. His Short Account was addressed to Prince Philip of Spain and was intended to shock the royal court into reforming the colonial system. This adapted passage describes the encomienda system in the Caribbean.",
    text: "From the very first day they set foot on the Indies, the Spaniards treated the people there as if they were of no account, occupying their lands and treating them as serfs. The governors and settlers who came to the Indies demanded from the Indian leaders gold and labor, more than the land could produce, more than any human body could endure. When the Indian people did not deliver what was demanded, the Spaniards took their revenge with their hands and with the sword and with fire. They set hunting dogs on them. They burned entire villages. They killed or enslaved all those who remained. Those who fled into the mountains died of starvation and exhaustion. Those who remained were worked to death in the mines and on the farms, with insufficient food, in conditions that no free person would accept voluntarily. The Indian nations of the Islands, who had numbered in the millions, were within fifty years reduced to almost nothing, not because they were weak or incapable, but because they were destroyed.",
    questions: [
      "What does Las Casas's account reveal about how the encomienda system worked in practice? What specific methods of coercion and violence does he describe, and how do these connect to the broader goal of extracting labor and tribute?",
      "Las Casas was a Spanish Dominican friar who had himself participated in early colonial ventures before becoming a critic. How might his position, insider turned critic, shape both what he observed accurately and what he might have misrepresented or left out?",
      "Las Casas argued against indigenous enslavement but at one point proposed importing African enslaved workers as an alternative. How does this complicate his status as an advocate for the oppressed, and what does it reveal about the limits of his critique of the colonial system?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Nahua Noble in New Spain, c. 1535",
    desc: "You are a member of a noble Nahua family from a city that allied with Hernán Cortés during the conquest of the Aztec Empire. Your family's alliance helped defeat your old enemy Tenochtitlan, and in return, the Spanish have given your family a position in the new colonial administration. You are now an intermediary between the Spanish colonial governor and your community. This is not what you expected.",
    intro: "You sit in the office of the colonial alcalde mayor, serving as the official interpreter between Spanish authorities and the local indigenous community. You speak Nahuatl, Spanish, and three other indigenous languages. You have been baptized as 'Don Luis' though your original name is Tlacaelel. Your family's cooperation with Cortés earned them recognition as nobles under Spanish law, a status that protects you from the encomienda labor system that has been destroying the communities around you.",
    detail: "This morning, the alcalde mayor told you to inform your community that they must provide forty additional workers for the silver mines to the north, workers who will not return. You have watched the population of your hometown shrink from perhaps 12,000 people to under 3,000 in a decade, mostly from disease but also from mine labor and overwork. The Spanish priests have built a church on the site of the old temple and are requiring attendance at mass. Your old religious practices survive only in secret, in the back rooms of houses, in stories told to children at night. You have protected your family and preserved some of your community's privileges. But you are not certain what you have protected them into.",
    prompt: "Write a letter, in Spanish, since it might be read, to the alcalde mayor explaining why your community cannot provide forty more workers for the mines. Then write a second message, in Nahuatl, never to be shown to the Spanish, to your cousin who is organizing secret resistance in the highlands. What do you say in each? What can you say in one that you cannot say in the other?"
  },

  beInTheRoom: {
    url: '',
    desc: "Navigate the Estado da India from a Portuguese factor's perspective at Goa, argue the ethics of the encomienda system with Bartolomé de las Casas, or manage the VOC's Spice Islands trade network from Batavia."
  }

};
