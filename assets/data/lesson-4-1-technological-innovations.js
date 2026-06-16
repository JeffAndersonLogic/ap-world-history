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
    topic: "Topic 4.1",
    title: "Technological Innovations",
    subtitle: "How maritime technologies — compass, astrolabe, lateen sail, caravel, and printed maps — made sustained oceanic exploration possible after c. 1400",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can identify and explain the maritime technologies that enabled European oceanic exploration after c. 1450.",
      kc: 'KC-4.1.II.A',
      theme: "Interaction"
    },
    {
      target: "I can explain how cartographic innovations and the printing press contributed to the spread of geographic knowledge that made further exploration possible.",
      kc: 'KC-4.1.II',
      theme: "Interaction"
    },
    {
      target: "I can analyze how maritime technologies were connected to state-sponsored exploration, especially by Portugal and Spain.",
      kc: 'KC-4.1.II',
      theme: "Interaction"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name at least three specific maritime technologies and explain what navigation problem each one solved for sailors attempting extended oceanic voyages.",
      kc: 'KC-4.1.II.A',
      theme: "Interaction"
    },
    {
      criteria: "I can explain how the printing press changed the distribution of geographic knowledge, and give one specific example of a printed map or geographic text that spread exploration knowledge.",
      kc: 'KC-4.1.II',
      theme: "Interaction"
    },
    {
      criteria: "I can connect specific maritime technologies to the Portuguese model of systematic exploration and explain why state sponsorship was necessary for these voyages.",
      kc: 'KC-4.1.II',
      theme: "Interaction"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.1.I.A',
      theme: 'Interaction',
      text: 'Improved maritime technologies, including the magnetic compass, astrolabe, lateen sail, and the caravel, allowed Europeans to explore the Atlantic and then expand their reach around the world.',
      illustrativeExamples: ['Magnetic compass', 'Astrolabe', 'Lateen sail', 'Caravel', 'Portolan charts']
    },
    {
      code: 'KC-4.1.I.B',
      theme: 'Interaction',
      text: 'Mapmaking and the printing press contributed to European exploration and knowledge of the wider world by enabling geographic discoveries to be recorded, reproduced, and widely distributed.',
      illustrativeExamples: ['Portolan charts', 'Waldseemüller map (1507)', 'Printing press', 'Geographic treatises and sailing guides']
    }
  ],

  lecture: {
    title: "The Tools of the Age of Exploration",
    intro: "Use these cards to explain how maritime technologies, cartographic innovations, and the printing press transformed European sailors from coastal navigators into oceanic explorers — and how state sponsorship connected these technologies to sustained, systematic voyaging.",
    videos: [],
    segments: [
      {
        title: "Finding Your Way: Compass, Astrolabe, and Latitude Navigation",
        bullets: [
          "The **magnetic compass** — originating in China, reaching Europe via Arab trade networks by c. 1100 — gave sailors a reliable indicator of direction regardless of weather. In the open Atlantic, where clouds could obscure stars for days, knowing north from south was essential for maintaining course. The compass did not tell sailors where they were; it told them which way they were going — a crucial but partial solution to the navigation problem.",
          "The **astrolabe** allowed sailors to measure the angle of the sun or a star above the horizon, determining **latitude** — how far north or south of the equator a ship had traveled. Arab astronomers had refined the astrolabe over centuries; European sailors adapted it for use at sea. With latitude measurements, a navigator could follow a known parallel eastward or westward, knowing they were on a consistent course.",
          "**Dead reckoning** — calculating position by tracking known speed, direction, and elapsed time — provided a working method for estimating position between direct stellar or solar observations. Combined with compass direction and astrolabe readings, dead reckoning gave navigators enough information to make extended oceanic voyages survivable.",
          "The **cross-staff** and **quadrant** offered simpler, cheaper alternatives to the full astrolabe for measuring solar altitude, making latitude determination accessible to skilled navigators who were not specialist astronomers. By c. 1450, a trained Portuguese pilot had multiple overlapping tools for navigation — redundancy that reduced the risk of extended voyaging."
        ],
        image: {
          title: "Persian Astrolabe, 18th Century",
          caption: "A Persian astrolabe, the intricate astronomical instrument used to determine latitude at sea. European sailors adapted Arab astrolabe designs for maritime navigation — one example of how European maritime technology synthesized Arab, Chinese, and Mediterranean knowledge.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg"
        }
      },
      {
        title: "The Ship That Could Go Anywhere: The Caravel",
        bullets: [
          "Traditional European **square-rigged ships** — built for Mediterranean and Baltic coastal trade — sailed efficiently with the wind behind them but struggled to sail against the wind or at sharp angles to it. Returning northward up the African coast meant sailing against the prevailing southward winds, which made square-rigged ships nearly useless for sustained Atlantic exploration.",
          "The **lateen sail** — a triangular sail used throughout the Arab and Indian Ocean world — could be angled to catch wind from the side, allowing ships to **tack** (zig-zag) upwind. Portuguese shipbuilders had encountered the lateen sail through Mediterranean contact with Arab traders and recognized its potential for Atlantic work.",
          "The **caravel** (developed c. 1440s) combined square sails for downwind speed with lateen sails for upwind maneuverability, in a small, relatively shallow-draft hull that could navigate coastal rivers and harbors as well as open ocean swells. It was not the fastest or largest ship of the era — but it was the most versatile for exploration, able to probe unknown coastlines and then return home against adverse winds.",
          "The caravel made the Portuguese model of systematic coastal exploration viable. Every voyage south along the African coast had to include a return north — and without the lateen sail's ability to work against the prevailing southward winds, Portuguese navigators would have had no reliable way home. The caravel solved the return-voyage problem that had made extended exploration too dangerous to attempt."
        ],
        image: {
          title: "World Map, c. 1700",
          caption: "By 1700, European maritime exploration had produced detailed world maps — the direct result of the navigational technologies and systematic state-sponsored voyaging developed in the 15th century.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png"
        }
      },
      {
        title: "Maps, Printing, and the Knowledge Revolution",
        bullets: [
          "**Portolan charts** — detailed navigational maps of coastlines developed in the Mediterranean by the 13th century — showed harbors, headlands, and compass bearings between ports with unprecedented accuracy. As Portuguese explorers mapped the African coast section by section, each voyage's discoveries were added to updated portolan charts brought back to Lisbon, creating a cumulative record that served as the basis for the next expedition.",
          "**Johannes Gutenberg's printing press** (c. 1440s) transformed the circulation of geographic knowledge. Maps, sailing guides, and geographic descriptions that had previously been rare handwritten manuscripts could now be printed in hundreds of copies and distributed widely. Geographic knowledge shifted from the exclusive possession of royal courts to a commodity available to merchants, competing states, and scholars across Europe.",
          "The **Waldseemüller map** (1507) was printed in an initial run of approximately 1,000 copies — the first printed world map to use the name 'America.' Within decades, multiple competing printed maps circulated throughout Europe, each incorporating the latest discoveries. No previous generation had had access to such rapid, widespread distribution of geographic discoveries.",
          "The cumulative effect was a **geographic knowledge infrastructure**: by c. 1500, a navigator preparing for a long voyage could consult printed sailing guides, study portolan charts of known coasts, and compare multiple world maps. This infrastructure made sustained, state-sponsored exploration rational — each voyage could build systematically on what previous voyages had documented."
        ],
        image: {
          title: "Waldseemüller World Map, 1507",
          caption: "The Waldseemüller map of 1507 — the first printed world map to show the Americas as separate continents and use the name 'America.' Produced in ~1,000 copies, it demonstrates how the printing press transformed geographic knowledge from rare manuscript to widely distributed information.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Waldseemüller Map, 1507: What Europe Knew",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    caption: "The 1507 Waldseemüller map — the first printed world map to show the Americas as separate continents and use the name 'America.' This map was only possible because of the cartographic knowledge accumulated through decades of Portuguese and Spanish voyages, combined with the printing press that made its wide distribution possible.",
    intro: "Examine this map and consider what it reveals: European cartographers in 1507 knew the shape of Africa, had a rough outline of the Americas, and knew that a vast ocean lay between America and Asia. All of this knowledge was less than 20 years old — accumulated through exploration voyages that were themselves only possible because of the maritime technologies you're studying.",
    prompt: "What does the Waldseemüller map reveal about the geographic knowledge European navigators had accumulated by 1507? What does it still get wrong, and what does that suggest about the limits of early modern cartography?"
  },

  first10: {
    title: 'First & 10: The Navigational Revolution',
    embedUrl: 'first-and-10-topic-4-1-technological-innovations-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.1 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Technology and the Conditions for Exploration",
    intro: "Use the evidence below to connect specific technological innovations to the broader historical argument about how European oceanic exploration became possible after c. 1450. For each piece of evidence, consider: what specific change did this technology make possible, and what would have been impossible without it?",
    prompt: "Choose one piece of evidence and explain how it supports a specific argument about the role of technology in enabling European exploration. Use causation: identify the technology, explain the mechanism, and connect it to a specific exploratory outcome.",
    items: [
      { title: "The caravel's lateen sails — solving the return voyage problem", detail: "Evidence that the key technological innovation was not just going south, but being able to come back. The lateen sail's ability to work against prevailing winds made the Portuguese model of systematic coastal exploration viable. Without it, every southward voyage would have been a one-way trip." },
      { title: "Waldseemüller map (1507) — 1,000 printed copies", detail: "Evidence that the printing press transformed geographic knowledge from rare manuscript to widely circulated commodity. The Waldseemüller map was printed in 1,000 copies — more than any previous geographic work. This scale of distribution created the knowledge infrastructure that made subsequent voyages more informed and state investment in exploration more rational." },
      { title: "Arab astrolabe tradition reaching European sailors", detail: "Evidence that European maritime technology was not purely European — it synthesized Arab, Chinese, and Mediterranean traditions. The astrolabe reached Europe through Arab trade networks; the lateen sail came from the Indian Ocean world. Evaluating this evidence requires acknowledging that 'European exploration' built on centuries of prior non-European navigational knowledge." }
    ]
  },

  primarySource: {
    title: "Primary Source: João de Barros on Portuguese Navigation",
    intro: "João de Barros (1496–1570) was a Portuguese historian often called the 'Portuguese Livy.' His Décadas da Ásia described Portuguese expansion in Asia and Africa in detail. This adapted passage reflects his account of how Portuguese navigators developed the methods needed for systematic Atlantic exploration.",
    text: "The pilots who sailed for the king learned to determine their latitude by the height of the sun at noon, measuring with the quadrant and the cross-staff the degrees of arc above the horizon. They carried charts on which the coasts they had discovered were drawn with great care, and these charts were brought back to Lisbon and improved with each new voyage. The king's cosmographers would study the measurements made at sea and produce new maps that were more exact than those before them. In this way, each voyage beyond the previous farthest point was not a venture into total ignorance but a careful extension of what was already known. The caravel that sailed south had been built for exactly this purpose — to go where other ships could not, to return home against winds that would have driven a square-rigged vessel back upon the coast, and to carry not just men and cargo but the instruments and records that transformed the ocean from mystery into something that could be measured, documented, and crossed again.",
    questions: [
      "What does Barros's account reveal about how Portuguese exploration was organized as a systematic, cumulative process? How does the relationship between navigators at sea and cosmographers in Lisbon illustrate the role of state-sponsored knowledge-building?",
      "What specific technologies or methods does Barros mention? How do these connect to the broader AP concept of how maritime technologies enabled long-distance exploration?",
      "Barros was a Portuguese court historian celebrating Portuguese achievements. How might his perspective shape this account? What elements might he emphasize or omit, and how would a competing Spanish navigator or an Arab merchant displaced by the Portuguese spice routes have described the same developments?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Navigator at Prince Henry's Court, Sagres, c. 1460",
    desc: "Prince Henry the Navigator has assembled the best pilots, cartographers, and astronomers in Portugal at his court in Sagres. You are a young navigator who has just returned from a voyage probing 200 miles of unknown West African coastline. Tonight you will brief the prince on what you found — and propose what the next expedition must do.",
    intro: "You stand before a table covered with charts — some printed in Lisbon, most handwritten and annotated with the observations of the past decade's voyages. To your left, a Portuguese chart-maker has been working for three days on a new portolan chart incorporating your measurements. To your right, an Arab pilot who has sailed the Indian Ocean for thirty years is describing monsoon wind patterns to a Portuguese translator. Prince Henry sits at the head of the table, listening carefully to everything.",
    detail: "You carry a cross-staff and a leather-bound journal of latitude measurements taken each day at noon. You have sailed south for weeks along a coast where no European ship had been before, measuring the angle of the noon sun each day to calculate how far south you had traveled. You have returned with a precise record of 200 miles of African coastline — depths, currents, prevailing winds, water color changes that signal shallow water, the location of a major river mouth that might lead inland. It is not much on its own. But you know the prince is already planning the next voyage, which will start where yours ended. You understand, in a way you couldn't have before this journey, that you are not just a sailor — you are a link in a chain. Each voyage extends the edge of the known world by a measured distance. Eventually, someone will find the end of Africa. Then what?",
    prompt: "What do you say to Prince Henry tonight? Brief him on what you found — and, more importantly, on what the next voyage needs to do that yours couldn't. What technology proved most valuable? What do you still lack? And what do you think lies at the southern end of Africa?"
  },

  beInTheRoom: {
    url: '../beintheroom/unit-4/technological-innovations.html',
    desc: "Step into Prince Henry's court at Sagres and experience how Portuguese navigators combined instruments, ship design, and state sponsorship to systematically extend the known world southward along the African coast."
  }

};
