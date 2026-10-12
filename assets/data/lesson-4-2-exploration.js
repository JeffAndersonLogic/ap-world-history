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
    topic: "Topic 4.2",
    title: "Exploration: Causes and Events",
    subtitle: "Why European rulers paid for ocean voyages after c. 1450, and what Portugal, Spain, England, France, and the Dutch got for it",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can describe the role of states in maritime exploration: how rulers backed voyages, by paying for them or by granting explorers rights, and what they offered explorers in return.",
      kc: 'KC-4.1.III',
      theme: "Governance"
    },
    {
      target: "I can explain why Portugal and Spain backed voyages and what they got: Portugal's ships and navigation led it around Africa to a trading-post empire, and Spain's voyages across the Atlantic and Pacific made all of Europe more interested in ocean trade.",
      kc: 'KC-4.1.III.A; KC-4.1.III.B',
      theme: "Economic Systems"
    },
    {
      target: "I can explain why England, France, and the Dutch sponsored northern Atlantic crossings, and what those voyages produced instead of a route to Asia.",
      kc: 'KC-4.1.III.C',
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain one economic reason rulers backed voyages (such as cutting out the middlemen in the spice trade) and name one thing a ruler gave an explorer (such as ships, permission to claim land, titles, or a share of the profits).",
      kc: 'KC-4.1.III',
      theme: "Governance"
    },
    {
      criteria: "For a Portuguese or Spanish voyage, I can name who backed it, what they wanted, and one economic effect, such as Portugal's trading-post empire or Spain's voyages making Europe more interested in ocean trade.",
      kc: 'KC-4.1.III.A; KC-4.1.III.B',
      theme: "Economic Systems"
    },
    {
      criteria: "I can use one English, French, or Dutch voyage to explain the search for another route to Asia and one effect it had, such as cod fishing, the fur trade, or land claims.",
      kc: 'KC-4.1.III.C',
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Describe the role of states in the expansion of maritime exploration from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 4: Learning Objective C',
      theme: 'Learning Objective',
      text: 'Explain the economic causes and effects of maritime exploration by the various European states.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III',
      theme: 'Governance',
      text: 'New state-supported transoceanic maritime exploration occurred in this period.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III.A',
      theme: 'Economic Systems',
      text: 'Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III.B',
      theme: 'Economic Systems',
      text: 'Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.III.C',
      theme: 'Economic Systems',
      text: 'Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Who Paid, and What For: European Exploration, c. 1415 to 1610",
    intro: "Use these cards after the First & 10. Each one answers the topic's three questions for one part of the story: who paid, what they wanted, and what they got.",
    videos: [],
    segments: [
      {
        title: "The Cause: Spices, Middlemen, and Why Rulers Backed the Voyages",
        bullets: [
          "Pepper grew on the southwest coast of India and cost little there. On its way to Europe it passed through **middlemen**: Indian Ocean merchants, traders in Egypt or Syria, and Venetian merchants. Each took a profit, so pepper in Europe cost many times more. A sea route straight to India would let a ruler buy cheap and sell dear. That is the main **economic cause** of these voyages.",
          "The Ottoman capture of Constantinople in 1453 did **not** close the spice trade. Spices kept reaching Europe through Egypt and Venice, and Portugal's voyages down the African coast had started decades before 1453.",
          "A voyage into unknown water might take years and bring back nothing, and few merchants would risk that alone. So rulers backed the voyages: this is **state sponsorship**. Sometimes a ruler paid for the ships; sometimes a ruler gave a merchant or captain permission to explore and claim land in return for a share. Rulers also paid in promises that cost nothing up front: titles, a share of future profits, and the right to govern new lands.",
          "Rulers had other motives too, such as spreading Christianity and beating rival kingdoms. But the trade is what kept the money coming."
        ],
        image: {
          title: "Vasco da Gama",
          caption: "An engraving of Vasco da Gama, the Portuguese commander who reached India by sea in 1498, made long after his lifetime. It shows how he was remembered, not what he looked like.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg?width=1200",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg"
        }
      },
      {
        title: "Portugal: Step by Step to a Trading-Post Empire",
        bullets: [
          "In 1415 Portugal captured **Ceuta**, a Muslim port in North Africa. From the 1420s a royal prince, Henry, paid for voyage after voyage down the West African coast. He did not go on them, and the \"navigation school at Sagres\" is a later legend. Portuguese sailors built light caravels, mapped the coast as they went, and learned the Atlantic's winds, so each voyage's charts helped the next one go farther.",
          "Each voyage came back with something to sell: gold, ivory, pepper, and, from the 1440s, enslaved Africans. Each return made the next voyage easier to pay for. In 1482 Portugal built a fort at **Elmina** to control a royal trade in gold.",
          "**Bartolomeu Dias** sailed around the southern tip of Africa in 1488. **Vasco da Gama** reached **Calicut** in India in 1498. He lost two of his four ships and more than half his men, but the spices he brought home showed how much money the route could make. Lisbon became a major pepper market, and the crown ran the pepper trade itself.",
          "Portugal then seized fortified ports such as **Goa** (1510) and **Malacca** (1511). It held ports, not large lands, and tried to control the sea trade between them: a **global trading-post empire**. How those posts worked is Topic 4.4."
        ],
        image: {
          title: "The Vasco da Gama Pillar, Malindi",
          caption: "A modern photograph of the pillar at Malindi, Kenya. Da Gama's fleet set up a stone marker at Malindi in 1498 or 1499; the pillar has been moved, rebuilt and repaired since. Portuguese captains set up markers like it to claim the routes they sailed for their king.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg?width=1200",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg"
        }
      },
      {
        title: "Spain: A Gamble on Sailing West",
        bullets: [
          "**Christopher Columbus**, a sailor from Genoa, wanted to reach Asia by sailing west. Portugal turned him down because its experts judged he had badly underestimated the distance, and they were right. Portugal also already held the route around Africa, so Spain's way to Asia had to be west.",
          "In April 1492, just after conquering Granada, **Isabella and Ferdinand** signed a contract with Columbus: if he succeeded, he would be Admiral of the Ocean Sea, govern the lands he found, and keep a tenth of the wealth from them. He reached the Caribbean in October 1492 and brought back little gold, but news of the voyage spread across Europe, and the 1493 fleet was at least seventeen ships.",
          "In 1494 Spain and Portugal negotiated the **Treaty of Tordesillas**, a line through the Atlantic splitting newly found lands between them: west for Spain, east for Portugal. Nobody asked the people who lived there.",
          "In 1519 **Magellan**, a Portuguese captain sailing for Spain, set out west to reach the Spice Islands across the Pacific. He was killed in the Philippines in 1521, and **Elcano** brought one ship home in 1522, the first voyage around the world. The effect the College Board names: Spain's voyages **dramatically increased European interest** in ocean travel and trade."
        ],
        image: {
          title: "Columbus Taking Possession",
          caption: "A picture made in the 1800s, more than three centuries after 1492, imagining Columbus claiming land for the Spanish crown. It shows how Europeans later remembered the voyage, not what happened on the beach.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg?width=1200",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg"
        }
      },
      {
        title: "The Northern Crossings: England, France, and the Dutch",
        bullets: [
          "England, France, and the Dutch wanted Asia's trade too, but Portugal held the route around Africa and Spain held the route west. So they sponsored voyages across the North Atlantic, looking for another way to Asia over the top of the world.",
          "**England**'s king gave **John Cabot**, an Italian sailor, permission to sail west and claim land; Cabot and his backers paid, and in 1497 he reached the coast of North America. **France** sent Giovanni da **Verrazzano** along that coast in 1524 and **Jacques Cartier** up the St. Lawrence River in the 1530s. **Dutch** voyages under Willem Barentsz in the 1590s tried to sail around the north of Russia, and in 1609 Henry Hudson, sailing for a Dutch trading company, explored the Hudson River.",
          "None found a sea route to Asia; North America and Arctic ice blocked every way through. But the voyages paid in other ways: cod off Newfoundland, furs traded with Indigenous peoples along the St. Lawrence, and claims to North American coasts where these states later built colonies.",
          "The pattern across all three stories: a ruler backed a voyage, a voyage came back with gold, spices, or news, the next voyage became easier to fund, and rival rulers wanted voyages of their own."
        ],
        image: {
          title: "Three Ways to Asia, and Who Paid",
          caption: "A BeHistorical instructional map: Portugal's route around Africa, Spain's route west, and the English, French, and Dutch crossings in the north. Routes are schematic.",
          url: "../assets/images/instructional-maps/topic-4-2.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-4-2.svg"
        }
      }
    ]
  },

  map: {
    title: "Three Ways to Asia, and Who Paid",
    url: "../assets/images/instructional-maps/topic-4-2.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-2.svg",
    caption: "A BeHistorical instructional map of the three directions European states paid for: Portugal around Africa to India, Spain west across the Atlantic, and England, France, and the Dutch across the North Atlantic and toward the Arctic. Routes are schematic and coastlines simplified.",
    intro: "Use the map to see the whole topic at once. Find each numbered route (1 to 5) in the map key, and notice which states went which way. Open the map full size to read the key.",
    prompt: "Using the map, explain why England, France, and the Dutch sailed north instead of following Portugal's or Spain's route. Then name one place on the map where a voyage found something other than a route to Asia, and say what it found."
  },

  deepReading: {
    title: "Who Paid, and What For",
    desc: "A textbook-depth companion on why a state would fund a voyage that might return nothing: the pepper price at each end of the chain and the contract Columbus signed, followed by the Portuguese program from Ceuta to Calicut, the Spanish bet, and the latecomers who went north. Optional, and useful when a checkpoint asks about causes and effects.",
    url: "deep-reading-topic-4-2-exploration.html"
  },

  first10: {
    title: 'First & 10: Who Paid?',
    embedUrl: 'first-and-10-topic-4-2-exploration-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 4.2 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Who Paid, and What For",
    intro: "Use the evidence below to analyze who paid for exploration, what they wanted, and what the voyages produced. Say what kind of source each card is before you use it.",
    prompt: "Choose two cards and make one claim about the role of states or the economic causes or effects of exploration. Name one thing each source cannot tell you."
  },

  primarySource: {
    title: "Primary Source: Columbus's Journal, October 11 to 12, 1492",
    intro: "Columbus kept a journal of his first voyage. The original is lost; it survives in a summary made by the priest Bartolomé de las Casas, who copied some passages word for word and retold others, which is why the text switches between \"he\" and \"I.\" This is an adapted English translation of the entries for October 11 and 12, 1492, when the fleet reached an island in the Bahamas.",
    text: "Thursday, 11 October. That night the Admiral ordered a careful watch and promised a reward to whoever first saw land. About two hours after midnight land was sighted, and they took in the sails and waited for daylight. Friday, 12 October. At dawn they saw people, naked, on the shore. The Admiral went ashore in the armed boat, and with him the royal standard. He called to the two captains to be witnesses that he was taking possession of this island for the King and Queen of Castile. They saw many trees, very green, and many streams, and fruits of various kinds. The people all went about wearing no clothes at all. They are very well built, with very handsome bodies and very good faces, and their hair coarse, almost like the tail of a horse. They are friendly, good-natured people who bear no arms except for small spears. I showed one of them a sword and through ignorance he grabbed it by the blade and cut himself. They should be good and intelligent servants, for I see that they say very quickly everything that is said to them. I believe that they could easily be made Christians, for it seemed to me that they had no religion of their own.",
    questions: [
      "Columbus takes possession of the island \"for the King and Queen of Castile.\" What does that tell you about who paid for this voyage and what they expected from it?",
      "Find one thing Columbus notices that his royal sponsors would care about. Explain why he might include it in a record written for them.",
      "This account was written by a European for European rulers, and survives only in a priest's summary. What does it leave out about the Taíno people who were on that shore?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Sailor on Columbus's Fleet, October 11, 1492",
    desc: "It is the night of October 11, 1492. You are a sailor aboard the Pinta, one of three ships Queen Isabella and King Ferdinand are paying for. You left the Canary Islands about five weeks ago. Tonight someone saw a light.",
    intro: "You are standing on the deck of the Pinta in the middle of the night, watching for land. The Admiral has ordered everyone to keep watch and promised a reward to whoever sees land first. Around you, men who have been grumbling for weeks are suddenly very quiet.",
    detail: "You signed on at Palos this summer. The town was ordered by the crown to supply two of the three ships, so many of the crew are neighbors. You have been at sea before, but always near the coast. This time, for about five weeks, there has been no land at all, only the wind pushing you west. The Admiral promised the crew a short crossing, and it has been anything but. Everyone knows the monarchs did not pay for this trip to find empty sea: they want a route to the riches of Asia, and the Admiral was promised titles and a share of everything he finds. Tomorrow morning, whatever is out there, somebody will have to report it to Spain.",
    prompt: "Write your journal entry for tonight. Who paid for this voyage, and what do they expect you to bring back? What will you tell them if this island is not Asia?"
  },

  beInTheRoom: {
    url: '',
    desc: "Step into the Spanish court in 1492 and decide whether to pay for Columbus's voyage, and on what terms."
  }

};
