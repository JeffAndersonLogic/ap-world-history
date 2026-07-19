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
    subtitle: "Why European states sponsored maritime exploration after c. 1450, and what the key voyages of the Portuguese and Spanish found and created",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can describe the role of states in sponsoring new transoceanic maritime exploration, and explain the religious, economic, and political motivations behind it.",
      kc: 'KC-4.1.III',
      theme: "Governance"
    },
    {
      target: "I can describe the key European voyages: Portuguese exploration of the African coast and route to India, Columbus's Caribbean voyage, and Magellan's circumnavigation.",
      kc: 'KC-4.1.III.A; KC-4.1.III.B',
      theme: "Economic Systems"
    },
    {
      target: "I can explain how English, French, and Dutch states sponsored northern Atlantic crossings in search of alternative routes to Asia, and how the Treaty of Tordesillas (1494) shaped that competition.",
      kc: 'KC-4.1.III.C',
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain at least two specific motivations for European exploration, including economic incentives (spice trade profits) and religious motivations (conversion, crusading), and connect each to specific state actions.",
      kc: 'KC-4.1.III',
      theme: "Governance"
    },
    {
      criteria: "I can trace the key routes: Portuguese south along Africa and around the Cape to India (Dias 1488, da Gama 1498), Columbus to the Caribbean (1492), Magellan's circumnavigation (1519–1522).",
      kc: 'KC-4.1.III.A; KC-4.1.III.B',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain how the Treaty of Tordesillas (1494) divided the non-European world between Spain and Portugal, and how English, French, and Dutch states responded by seeking alternative northern routes to Asia.",
      kc: 'KC-4.1.III.C',
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
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
    title: "Why They Sailed: European Exploration, 1415–1522",
    intro: "Use these cards to explain why European states sponsored maritime exploration after c. 1450, what motivated rulers and merchants to fund dangerous and expensive voyages, and what the key expeditions of the Portuguese and Spanish found, created, and destroyed.",
    videos: [],
    segments: [
      {
        title: "Why Europe? Motives, the Reconquista, and the Disrupted Trade Routes",
        bullets: [
          "By c. 1450, the **Ottoman conquest of Constantinople** (1453) had disrupted overland trade routes through which Asian spices, silk, and luxury goods reached Europe through Arab and Byzantine middlemen. Spices, pepper, cloves, nutmeg, cinnamon, were enormously valuable in Europe for food preservation, medicine, and luxury consumption. But every spice bought in Europe had passed through layers of middlemen, each taking a share. Finding a direct sea route to Asian spice markets would allow European merchants to bypass the entire system.",
          "**Portugal and Spain** had both just completed the **Reconquista**, the centuries-long campaign to expel Muslims from the Iberian Peninsula (completed 1492 in Spain). That campaign had produced military institutions, a warrior nobility, and a crusading religious ideology that could be redirected toward Atlantic expansion. Exploring and 'discovering' new lands offered the Spanish and Portuguese crowns a way to convert souls, claim territory, and project power without the constraints of established European politics.",
          "**Prince Henry the Navigator** (1394–1460) organized Portuguese exploration of the African coast from his court at Sagres, not sailing himself but systematically sponsoring voyages year by year, gathering geographic and commercial intelligence. His motives combined the commercial (find gold and spice routes), the religious (find the legendary Christian kingdom of Prester John as an ally against Islam), and the political (establish Portuguese maritime dominance). The Portuguese model was state-sponsored, systematic, and cumulative.",
          "The shorthand **'God, Glory, and Gold'** captures the three overlapping European motivations: religious conversion and crusading ideology, national prestige and competition between states, and commercial profit from trade and extraction. In practice, these motivations reinforced each other: conquering territory could bring both souls to convert and wealth to extract."
        ],
        image: {
          title: "Vasco da Gama",
          caption: "Portrait of Vasco da Gama, the Portuguese explorer who reached India by sea in 1498, establishing the first direct maritime trade route between Europe and Asia.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg"
        }
      },
      {
        title: "The Portuguese Model — Down Africa and Around to India",
        bullets: [
          "The Portuguese systematically explored the African coast southward from 1415, establishing a series of trading posts (**feitorias**) along the West African coast. Each voyage extended the known coastline by a few hundred miles, with the geographic knowledge recorded in portolan charts and brought back to Lisbon. By 1471, the Portuguese had reached the equator; by 1482, they had established a major fort at Elmina (modern Ghana), trading for gold and enslaved Africans.",
          "**Bartolomeu Dias** rounded the **Cape of Good Hope** in 1488, the southern tip of Africa, proving that a sea route to the Indian Ocean was possible from the Atlantic. Dias's crew forced him to turn back before he could continue to India, but the critical geographic fact was established: Africa had a southern end, and the ocean beyond it connected to Asia.",
          "**Vasco da Gama** completed the voyage in 1498, reaching **Calicut** (Kozhikode) on the southwestern coast of India. He returned with enough spices to cover his entire voyage cost sixty times over, a commercial return that electrified European investors and confirmed the viability of the eastern sea route. Portugal subsequently established a network of fortified trading posts across the Indian Ocean, using naval power to control key straits and ports.",
          "The Portuguese model was extractive and militaristic: they did not primarily colonize territory but seized control of existing trade routes by force, threatening established Arab, Indian, and Swahili traders. This created enormous wealth for Portugal but also provoked resistance across the Indian Ocean world."
        ],
        image: {
          title: "Pillar of Vasco da Gama",
          caption: "The Padrão commemorating Vasco da Gama's arrival in India in 1498, one of several stone pillars erected by Portuguese explorers to claim territorial presence along new routes.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg"
        }
      },
      {
        title: "Columbus, the Caribbean, and Magellan's Circumnavigation",
        bullets: [
          "**Christopher Columbus** (sailing for Spain, 1492) proposed reaching Asia by sailing *west* across the Atlantic, a gamble based on a significant underestimate of the earth's circumference. On October 12, 1492, he landed in the **Bahamas**, where he encountered the **Taíno people**. Columbus never accepted that he had found unknown continents; he died in 1506 still believing he had reached islands off the Asian coast. The **Treaty of Tordesillas** (1494) divided the non-European world between Spain and Portugal: everything west of a line in the Atlantic went to Spain, everything east went to Portugal.",
          "Spanish **conquistadors** followed Columbus with remarkable speed: within 30 years, Hernán Cortés had destroyed the **Aztec Empire** (1521) and Francisco Pizarro the **Inca Empire** (1532). The Spanish conquest was enabled by military technology, alliances with indigenous peoples who were enemies of these empires, and, crucially, by disease. Smallpox arrived in Mesoamerica with Cortés's army in 1519 and killed an estimated 30–50% of the Aztec population before the military conquest was complete.",
          "**Ferdinand Magellan** (sailing for Spain, 1519–1522) led the first circumnavigation of the globe, proving that the Pacific Ocean was vastly larger than Columbus had imagined and that the Americas were entirely separate from Asia. Magellan was killed in the Philippines in 1521; only one ship and 18 of 270 crew members completed the voyage. The circumnavigation established the global scale of the world and created the conditions for sustained Spanish competition with Portugal for Pacific trade routes.",
          "From the **Taíno perspective**, Columbus's arrival was the beginning of catastrophe. Within 50 years of first contact, the Taíno population of Hispaniola had been reduced from an estimated 250,000 to near extinction, killed by disease, violence, and forced labor. The **encomienda system** enslaved indigenous peoples for Spanish labor needs. The Treaty of Tordesillas, drawn without any consultation of non-European peoples, reflected a European assumption that the world existed to be divided by European powers."
        ],
        image: {
          title: "Waldseemüller Map, 1507",
          caption: "The Waldseemüller map of 1507 shows the Americas as separate continents for the first time, the direct result of Spanish and Portuguese voyages from 1492 onward. Notice the vast unknown Pacific Ocean to the west of America.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg"
        }
      }
    ]
  },

  map: {
    title: "European Exploration Routes, 1415–1522",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    caption: "The 1507 Waldseemüller map captures European geographic knowledge just 15 years after Columbus. Notice the Americas appear on the left, Africa at bottom right, and Asia to the far right, and notice how much of the world is still unknown or imprecisely mapped.",
    intro: "Use the map to trace the major exploration routes: Portuguese southward along the African coast, around the Cape of Good Hope, and east to India; Spanish westward across the Atlantic to the Caribbean; and the Magellan-Elcano circumnavigation route. Consider what each route was designed to reach and what it actually found.",
    prompt: "Using the map, identify the geographic barriers that European explorers had to overcome. Which route, Portuguese or Spanish, represented a greater geographic challenge? What does the shape of the Americas on this early map suggest about how quickly European knowledge of new discoveries circulated?"
  },

  first10: {
    title: 'First & 10: Why They Sailed',
    embedUrl: 'first-and-10-topic-4-2-exploration-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.2 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Motives, Encounters, and Multiple Perspectives",
    intro: "Use the evidence below to analyze the motives behind European exploration and the experiences of different peoples during the era of contact. Strong historical thinking requires evaluating evidence from multiple perspectives, not just the perspective of the explorers.",
    prompt: "Choose one piece of evidence and explain what it reveals about the causes, nature, or consequences of European exploration. Consider: whose perspective does this evidence represent, and what perspective does it leave out?",
    items: [
      { title: "Columbus's journal entry — 'These people are very unskilled in arms'", detail: "Evidence of Columbus's immediate calculation that the Taíno could be conquered and enslaved, written on the first day of contact. Evaluate this source for what it reveals about the motivations behind exploration and for the perspective it systematically excludes." },
      { title: "Treaty of Tordesillas (1494) — dividing the world between Spain and Portugal", detail: "Evidence of European assumptions about the right to divide and control non-European territories without the consent of those territories' inhabitants. The treaty was drawn with papal authority and treated the entire non-European world as available for European claim." },
      { title: "Da Gama's cargo return — voyage costs covered 60 times over", detail: "Evidence of the commercial logic driving state sponsorship of exploration. The profit from da Gama's first voyage to India demonstrates how economic incentives made the risk of expensive and dangerous voyages rational for state sponsors, and explains why Portugal and Spain invested so heavily in exploration." }
    ]
  },

  primarySource: {
    title: "Primary Source: Columbus's Journal, October 11–12, 1492",
    intro: "Columbus kept a detailed journal of his first voyage, which survives only in an abstract made by the priest Bartolomé de las Casas. This adapted passage describes Columbus's first observations on landing in the Bahamas on October 12, 1492, and his immediate assessment of the Taíno people he encountered.",
    text: "Thursday, 11 October. As the night drew on, he ordered the fleet to slow and not sail beyond the distance a man could see. About two hours after midnight they saw a light, and at two hours past midnight they saw land clearly. Friday, 12 October. At dawn they saw people, naked, on the shore. The Admiral went ashore in the armed boat, and with him the royal standard. He called to the two captains to be witnesses that he was taking possession of this island for the King and Queen of Castile. They saw many trees, very green, and many streams, and fruits of various kinds. The people all went naked as their mothers bore them. They are very well built, with very handsome bodies and very good faces, and their hair coarse, almost like the tail of a horse. They are friendly and well-dispositioned people who bear no arms except for small spears. I showed one of them a sword and through ignorance he grabbed it by the blade and cut himself. They should be good and intelligent servants, for I see that they say very quickly everything that is said to them. I believe that they could easily be made Christians, for it seemed to me that they had no religion of their own.",
    questions: [
      "What does Columbus's account reveal about his motivations and assumptions? Identify at least two specific things Columbus says and explain what each reveals about his goals for the voyage and for the peoples he encountered.",
      "Columbus describes the Taíno as potential 'servants' and notes they have 'no religion of their own.' How do these observations connect to the 'God, Glory, and Gold' framework for understanding European exploration motives?",
      "This account was written by Columbus for the Spanish monarchs who sponsored his voyage. How might that audience shape what Columbus chose to emphasize or omit? What might the Taíno have recorded about the same encounter if they had a written record?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Sailor on Columbus's Fleet, October 11, 1492",
    desc: "It is the night of October 11, 1492. You are a sailor aboard the Pinta, one of three ships in Columbus's fleet. You have been at sea for 33 days since leaving the Canary Islands. Tonight, the crew saw a light on the horizon. Columbus believes it is land. You believe it, too.",
    intro: "You are standing on the deck of the Pinta in the middle of the night, watching a faint light on the horizon that might be a fire, or might be wishful thinking. The captain has ordered the fleet to slow and hold position until dawn. Around you, men who have been growing mutinous for weeks are suddenly very quiet. You can feel the tension differently now, not the dangerous restlessness of the past week, but something almost like prayer.",
    detail: "You signed on for this voyage in Palos three months ago for reasons you can barely remember clearly: the promise of reward, the pressure of debt, the sense that nothing was keeping you home. You have been at sea before, always within sight of the European coast. This has been nothing like that. For 33 days, no land. The compass has behaved strangely. The winds carried you west so steadily that men began to whisper that they might never carry you back east. You have eaten dried meat and biscuit until you cannot taste anything. You have dreamed about water that doesn't move. Columbus has been wrong about the distance before, he told the crew the crossing would be short, and it has been anything but. But the light on the horizon is real. Tomorrow morning, whatever that light is, your life will have changed permanently in ways you cannot yet imagine.",
    prompt: "Write your journal entry for tonight, October 11, 1492, and for the morning after. What are you feeling now, watching that light? And what do you see and feel on the morning of October 12, when you first step onto this island and first see the people who live there?"
  },

  beInTheRoom: {
    url: '',
    desc: "Step into the Spanish court to argue for Columbus's Atlantic voyage, navigate the Portuguese route around Africa with Vasco da Gama, or encounter the Treaty of Tordesillas from the perspective of an indigenous leader hearing of European claims to your land."
  }

};
