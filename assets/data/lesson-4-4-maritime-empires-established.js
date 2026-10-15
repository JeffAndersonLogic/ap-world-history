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
    subtitle: "Europeans built empires from the sea, but much of the world kept its own rules: some things changed fast, and some barely moved.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why rival European states built maritime empires and trading posts, and how Kongo and Asante grew stronger through the new trade.",
      kc: 'KC-4.3.II.C; KC-4.3.II.A.i; KC-4.3.II.A.ii',
      theme: "Governance"
    },
    {
      target: "I can explain how Ming China and Tokugawa Japan limited European trade, and what changed and what continued in Indian Ocean trade after the Europeans arrived.",
      kc: 'KC-4.3.II.A.i; KC-4.3.II.A.iii',
      theme: "Economic Systems"
    },
    {
      target: "I can explain what continued and what changed in labor systems in the colonial Americas, from the Inca mit’a to encomienda, hacienda, indentured servitude, and chattel slavery.",
      kc: 'KC-4.2.II.D',
      theme: "Economic Systems"
    },
    {
      target: "I can explain how older forms of slavery continued in Africa while the plantation economy made slavery in the Americas far larger and different.",
      kc: 'KC-4.2.II.B; KC-4.2.II.C',
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name a political, religious, or economic rivalry behind the empires, and use a trading post or Kongo or Asante to explain one change in who held power.",
      kc: 'KC-4.3.II.C; KC-4.3.II.A.i; KC-4.3.II.A.ii',
      theme: "Governance"
    },
    {
      criteria: "I can explain one continuity in who set the terms of trade: how China or Japan kept control of trade with Europeans, or how a merchant group such as Gujaratis, Swahili Arabs, Omanis, or Javanese kept Indian Ocean trade going even after the Portuguese began forcing ships to buy the cartaz.",
      kc: 'KC-4.3.II.A.i; KC-4.3.II.A.iii',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain one labor system that continued in a new form and one that was new, and how each supplied workers for farms or mines.",
      kc: 'KC-4.2.II.D',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain one older form of slavery in Africa that continued and one way plantations changed slavery in the Americas, and why it changed.",
      kc: 'KC-4.2.II.B; KC-4.2.II.C',
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective E',
      theme: 'Learning Objective',
      text: 'Explain the process of state building and expansion among various empires and states in the period from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 4: Learning Objective F',
      theme: 'Learning Objective',
      text: 'Explain the continuities and changes in economic systems and labor systems from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 4: Learning Objective G',
      theme: 'Learning Objective',
      text: 'Explain changes and continuities in systems of slavery in the period from 1450 to 1750.',
      illustrativeExamples: []
    },
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
    title: "Empires from the Sea: How It Worked",
    intro: "The First & 10 tells the story. These cards take four parts of it apart: why Europeans held coasts instead of countries in Africa and Asia, how China and Japan kept control, how Kongo and Asante grew strong, and how to tell old labor and slavery from new.",
    videos: [],
    segments: [
      {
        title: "Why Coasts, Not Continents",
        bullets: [
          "Portuguese ships carried cannon that could beat fleets and batter harbor walls. On land, though, the Portuguese faced kingdoms and empires with far more people and soldiers than Portugal had. A fort on a coast needed only a few hundred men to hold, so a **trading post** was the kind of empire a small kingdom could keep.",
          "A post made money in two ways: by buying goods like West African gold or Indian pepper where they were produced, and by taxing other people's ships that passed through. That is why the posts sat at places ships could not avoid, such as Malacca on its strait and Hormuz at the mouth of the Persian Gulf.",
          "Because the posts were small, rivals could take them. The Dutch captured Elmina from Portugal in 1637 and Malacca in 1641. The rivalries that started the empires kept reshaping them."
        ],
        image: {
          title: "The fort of Elmina, about 1668",
          caption: "Elmina in Dutch hands, from Olfert Dapper's description of Africa (Amsterdam, about 1668). Portugal built it in 1482; the Dutch took it in 1637.",
          url: "../assets/images/topics/4-4/elmina-dapper-c1668.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:AMH-6856-KB_View_of_the_fort_of_El_Mina.jpg"
        }
      },
      {
        title: "How China and Japan Kept Control",
        bullets: [
          "Ming China treated European traders the way it treated other foreigners: on China's terms. From 1557 the Portuguese could settle at **Macau**, but Chinese officials kept authority over the port, and the Portuguese paid them a yearly ground rent.",
          "In Japan, Portuguese and Spanish missionaries had made many Christian converts. The Tokugawa shoguns banned Christianity in 1614, and in 1637 and 1638 a rebellion in Shimabara, near Nagasaki, drew in many Christian peasants. The shogunate saw Christianity as a threat to its control, and in 1639 it banned Portuguese ships.",
          "The Dutch were allowed to stay because they came to trade, not to spread Christianity, and accepted Japan's rules: from 1641 they lived and traded only on **Dejima**, a small island in Nagasaki harbor. Japan limited European trade without ending it."
        ],
        image: {
          title: "Nagasaki harbor and Dejima, about 1740",
          caption: "A German engraving by Johann Wolfgang Heydt, published in Germany in 1744 for European readers. Its legend marks the Dutch island (Dejima), a Dutch company ship, Japanese ships and Chinese junks.",
          url: "../assets/images/topics/4-4/nagasaki-dejima-1735-44.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:AMH-7112-KB_View_of_Nagasaki.jpg"
        }
      },
      {
        title: "Kongo and Asante: Strength from the Trade",
        bullets: [
          "In Kongo, Afonso I used the Portuguese connection to make the king stronger. Portuguese allies fought beside his armies, and the captives taken in his wars were sold to Portuguese traders. Christianity, taught by priests he asked for, became the royal religion, and he sent young Kongo nobles to study in Portugal.",
          "Afonso also tried to keep the trade in the king's hands. When Portuguese traders began dealing directly with his nobles, and thieves seized free Kongo people and sold them to Portuguese traders, he complained to the king of Portugal.",
          "On the Gold Coast, **Asante** rose around 1700 by joining several Akan states under one ruler, controlling gold, and buying guns from Dutch and English traders on the coast, paying in part with captives. Its victory over Denkyira at Feyiase in 1701 made it the main power of the region."
        ],
        image: {
          title: "A brass crucifix from Kongo",
          caption: "Made by Kongo artists in brass in the 1600s or 1700s. The Metropolitan Museum of Art.",
          url: "../assets/images/topics/4-4/kongo-crucifix-met.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Crucifix_MET_hz1999_295_5.jpg"
        }
      },
      {
        title: "Telling Old from New in Labor and Slavery",
        bullets: [
          "Compare labor systems by asking the same four questions of each: who did the work, for how long, whether they were free to leave, and who took what they produced. The **mit’a** was an old Inca work duty, now run by Spain. **Encomienda**, **hacienda** labor and **indentured servitude** each answer differently: a colonist's grant of Indigenous labor, wage and debt work on an estate, and a few years' contract. **Chattel slavery** answers: enslaved Africans, for life, never free to leave, and their owners took everything.",
          "Indigenous people did not simply accept the new systems. In central Mexico in the 1550s, the people of Tepetlaoztoc had painters record what their encomenderos demanded of them and how they were treated, and sent it to the Spanish crown as a complaint.",
          "The older forms of slavery in Africa and plantation slavery differed in more than size. In many African societies, the children of enslaved people could become part of the family over time. In the plantation colonies, laws made slavery last for life and pass to children, and in the English colonies, laws tied it to race."
        ],
        image: {
          title: "A town's complaint against its encomenderos",
          caption: "Codex Kingsborough, painted by Nahua artists about the 1550s for a complaint to the Spanish crown. British Museum.",
          url: "../assets/images/topics/4-4/codex-kingsborough-1550s.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kingsborough.jpg"
        }
      }
    ]
  },

  map: {
    title: "Empires from the Sea, and a World with Its Own Rules",
    url: "../assets/images/instructional-maps/topic-4-4.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-4.svg",
    caption: "European forts on the coasts of Africa and Asia, colonies and plantations in the Americas, and places that kept their own rules: Japan, Macau under Ming officials, Kongo, and the Swahili coast.",
    intro: "Use the map to see the pattern of the topic. In Africa and Asia, most European places were forts on a coast. In the Americas, Europeans held colonies and plantations. And several places on the map set their own terms for Europeans, or pushed them back.",
    prompt: "Find ONE European fort or trading post on the map and ONE place that kept its own rules. Using the map and its key, explain why Europeans held coasts in Africa and Asia but colonies in the Americas, and name one way the place you chose kept its own rules."
  },

  deepReading: {
    title: "Who Set the Terms",
    desc: "A textbook-depth companion on how a trading post worked, how China and Japan kept control of trade, how Kongo and Asante grew strong, the labor systems of the colonial Americas, and how plantation slavery differed from older slavery. Optional, and useful when a checkpoint asks for a continuity and a change.",
    url: "deep-reading-topic-4-4-maritime-empires-established.html"
  },

  first10: {
    title: 'First & 10: Empires from the Sea',
    embedUrl: 'first-and-10-topic-4-4-maritime-empires-established-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.4 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: What Changed, and What Kept Going",
    intro: "Use the cards to build one continuity-and-change claim from two real objects: a Japanese screen, a German engraving of Nagasaki, a Kongo crucifix, a Nahua complaint, and a French engraving of a sugar works.",
    prompt: "Choose one card that shows a change and one that shows a continuity, and explain what each shows, what it suggests, and what it cannot tell you."
  },

  primarySource: {
    title: "Primary Source: Afonso I of Kongo to João III of Portugal, 1526",
    intro: "Afonso I (Nzinga Mbemba) was king of Kongo from the early 1500s until the 1540s. Kongo was the strongest state in west-central Africa, and its kings had traded with Portugal since the 1480s. Afonso was a Christian, could read and write Portuguese, and wrote many letters to the kings of Portugal. He wrote this one on 6 July 1526 to King João III. Kongo already had enslaved people of its own, and Afonso sold war captives taken outside Kongo to Portuguese traders. This passage is translated by Luís Madureira in John K. Thornton's book on Afonso (2023). Words in brackets are explanations added for this lesson.",
    text: "Sire, Your Highness knows that our kingdom is losing its way, and we must provide the solution that this situation calls for. The cause of our troubles is the excessive permissiveness [too much freedom] with which your trading agents and officials allow the men who come to this kingdom to establish shops and sell merchandise. These men engage in practices that we strictly forbid, and they scatter throughout our kingdom and dominions in such large numbers that many of our vassals, who had pledged obedience to us, have now renounced their obedience [stopped obeying us] because they have a greater abundance of goods available to them than we do. ... However, we do not consider this harm as terrible as what we suffer each day when these traders carry away our native-born countrymen and the children of our nobles and vassals as well as relatives of ours. This continues because thieves and unscrupulous [dishonest] men, driven by their greed for goods from your kingdom, snatch them and sell them to these traders. ... In order to avoid it, we need only priests and a few people to teach in our kingdoms' schools. ... Please instruct your trading agents to send neither traders nor trading goods here because we do not wish to carry out trade and export slaves.",
    questions: [
      "Audience and purpose: Afonso wrote to the king of Portugal. What does he want the king to do, and why was the king of Portugal the right person to ask?",
      "Point of view: Afonso complains first that his vassals \"have now renounced their obedience\" because traders sell to them directly. What does this complaint show about what Afonso, as a king, cared about most?",
      "Situation: Afonso himself sold war captives taken outside Kongo to the Portuguese. Knowing that, how should a historian read his words \"we do not wish to carry out trade and export slaves\"? What is the letter strong evidence of, and what is it weak evidence of?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Own a Ship at Surat, c. 1600",
    desc: "You are a Gujarati merchant at Surat, a busy port of the Mughal Empire on India's west coast. Your family has shipped cotton cloth across the Indian Ocean for generations, long before any Portuguese ship arrived. Now your ship cannot leave without a Portuguese pass.",
    intro: "Your ship is loaded for the Red Sea: bales of Gujarati cotton cloth, and passengers making the pilgrimage to Mecca. Before you can sail, you must buy a cartaz, a pass from the Portuguese, who hold forts along this coast and send warships to stop ships that sail without one.",
    detail: "The pass names your ship and its captain, and its rules say you may not carry the goods the Portuguese keep for themselves, such as pepper, and that you must stop at a Portuguese port and pay their customs duties. You can pay, or risk losing the ship. Your buyers in the Red Sea ports are the same people your father and grandfather traded with, and your cloth sells there as well as ever.",
    prompt: "Write two short messages. First, to the Portuguese official who sells the cartaz: what will you agree to, and what will you ask for? Second, to your trading partner across the sea: explain what has changed about trading on this ocean, and what has not changed at all."
  },

  beInTheRoom: {
    url: '',
    desc: "Sit on Portugal's council at Goa in 1515 and decide what kind of empire to build in an Indian Ocean whose rulers, merchants and trade networks were there long before you."
  }

};
