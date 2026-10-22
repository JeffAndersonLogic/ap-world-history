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
    subtitle: "How tools borrowed from older worlds, new ships, and knowledge of the Atlantic's winds let European ships cross oceans and come home, from 1450 to 1750",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can identify maritime technologies Europeans used after c. 1450 and explain how they changed where Europeans could travel and trade.",
      kc: 'KC-4.1.II.A',
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how knowledge and tools from the Classical, Islamic, and Asian worlds spread to Europe and helped Europeans build new technology.",
      kc: 'KC-4.1.II',
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how new tools, new ship designs, and a better understanding of winds and currents made it possible to sail and trade across oceans.",
      kc: 'KC-4.1.II.A',
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name at least three specific maritime technologies, explain what problem each one solved at sea, and name one new sea route they made possible.",
      kc: 'KC-4.1.II.A',
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can give a specific example of knowledge or technology from the Classical, Islamic, or Asian world (for example, the compass, the lateen sail, or star tables from Islamic astronomers) that European navigators adopted.",
      kc: 'KC-4.1.II',
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can name specific ship designs (caravel, carrack, fluyt) and borrowed technologies (lateen sail, compass, astronomical charts) and explain what each contributed to ocean travel.",
      kc: 'KC-4.1.II.A',
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective A',
      theme: 'Learning Objective',
      text: 'Explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.II',
      theme: 'Technology and Innovation',
      text: 'Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.',
      illustrativeExamples: ['Lateen sail', 'Compass', 'Astronomical charts']
    },
    {
      code: 'KC-4.1.II.A',
      theme: 'Technology and Innovation',
      text: 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns, all of which made transoceanic travel and trade possible.',
      illustrativeExamples: ['Caravel', 'Carrack', 'Fluyt']
    }
  ],

  lecture: {
    title: "The Tools of the Age of Exploration",
    intro: "Use these cards to see how tools borrowed from older worlds, new ships, and knowledge of winds and currents let ships cross oceans and come back.",
    videos: [
      {
        title: "TECHNOLOGY in Sea-Based Empires [AP World History Review—Unit 4 Topic 1]",
        url: "https://youtu.be/TPaLulRrKuM",
        youtubeId: "TPaLulRrKuM",
        prompt: "Use this clip to review the tools that made ocean voyages possible. As you watch, write down where each tool came from and what it let sailors do that they could not do before."
      }
    ],
    segments: [
      {
        title: "Finding Your Way: Compass, Astrolabe, and Latitude Navigation",
        bullets: [
          "The **magnetic compass** was used at sea in China by about 1100 and was known in Europe by about 1190; historians still debate how it traveled west. It showed which way the ship was heading, even under clouds. In the open Atlantic, clouds could hide the stars for days, so knowing north from south kept a ship on course. But the compass did not tell sailors where they were, only which way they were going. It solved half the problem.",
          "The **astrolabe** allowed sailors to measure the angle of the sun or a star above the horizon, determining **latitude**, how far north or south of the equator a ship had traveled. The astrolabe began as a Greek idea and was refined over centuries by astronomers in the Islamic world. In the 1480s Portuguese pilots adapted a simple, heavy version, the mariner's astrolabe, for use at sea. Once a pilot knew the latitude of a place, he could sail north or south until he reached it, then turn and sail straight east or west along that line.",
          "**Dead reckoning** means guessing your position from your speed, your direction and how long you have sailed. Pilots used it between sun and star readings. Together, the compass, the astrolabe and dead reckoning told a pilot enough to survive weeks out of sight of land.",
          "A noon sun reading only gives latitude if the pilot knows where the sun should be that day, so pilots carried **astronomical charts**: tables of the sun's position for each day of the year. Those tables came from a long tradition of Islamic and Jewish astronomy; in 1496 Abraham Zacuto's almanac was printed in Portugal and carried on Portuguese voyages. The **quadrant**, and later the **cross-staff**, gave pilots other ways to measure the height of the sun or a star."
        ],
        image: {
          title: "Persian Astrolabe, 18th Century",
          caption: "An 18th-century Persian astrolabe, an astronomer's instrument from the Islamic tradition that the mariner's astrolabe grew out of. Instruments like this were not used at sea: Portuguese pilots carried a simpler, heavier version that could hang steady on a rolling deck.",
          url: "../assets/images/commons/astrolabe-persian-18c-8ebe5d.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Astrolabe-Persian-18C.jpg"
        }
      },
      {
        title: "The Explorer's Ship: The Caravel",
        bullets: [
          "Many European cargo ships, such as the **cog** of northern Europe, were **square-rigged**: they sailed well with the wind behind them but struggled to sail against it. Off West Africa the wind blew south nearly all year, so sailing back north along the coast meant fighting it the whole way.",
          "The **lateen sail**, a triangular sail used on the Mediterranean since Roman times and common across the seas of the Islamic world, could be angled to catch wind from the side, allowing ships to **tack** (zig-zag) upwind. Portuguese shipbuilders took this old Mediterranean sail and put it to work in the Atlantic.",
          "The exploration **caravel** of the 1440s carried lateen sails on two or three masts, in a small, relatively shallow-draft hull that could navigate coastal rivers and harbors as well as open ocean swells. Later caravels added square sails for speed with the wind behind them. The caravel was not the fastest or largest ship of the era, but it suited exploration: it could probe unknown coastlines and handle shifting winds near the shore.",
          "Its lateen sails let a caravel work against the wind near unknown coasts, but beating home along the whole coast was slow and dangerous. The real answer to the trip home was the caravel combined with the **volta do mar**, the long loop out to sea on the next card."
        ],
        image: {
          title: "Portuguese Caravel, Livro das Armadas, c. 1566",
          caption: "A Portuguese caravel painted in the Livro das Armadas, a 16th-century record of the fleets sent to India. It is a later picture of the ship type, not a drawing made in the 1440s. It shows a later, larger caravel with a square sail on the foremast and lateen sails behind it; the early exploring caravels carried lateen sails only.",
          url: "../assets/images/commons/caravela-de-armada-of-joao-serrao-f5f35c.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Caravela_de_armada_of_Joao_Serrao.jpg"
        }
      },
      {
        title: "Cross-Cultural Knowledge and the Ocean Environment",
        bullets: [
          "Europe's sea tools came from many places and built up over centuries. The magnetic compass was first described in China; the astrolabe came from Greek ideas developed by astronomers in the Islamic world; the lateen sail had long been used on the Mediterranean and across the seas of the Islamic world.",
          "Sailors also needed practical environmental knowledge. Portuguese mariners learned the **volta do mar**: to get home from West Africa, they sailed away from the coast, out west and north into the open Atlantic, until they reached the westerlies that blow toward Europe. Along the coast, both the trade winds and the Canary Current pushed south, so the shortest route home on the map was the hardest one to sail.",
          "Ship design matched different jobs. The small **caravel** turned quickly and could handle shifting winds, and its hull could survive the open ocean; larger **carracks** carried more cargo and provisions on long voyages; and around 1600 the Dutch **fluyt** carried big cargoes with small, cheap crews.",
          "The causal chain is the Topic 4.1 job: **borrowed knowledge + improved tools + ship design + wind and current knowledge -> ships that could go out and come home -> new patterns of trade and travel**."
        ],
        image: {
          title: "The Atlantic Wind Wheel, and the Way Home",
          caption: "A BeHistorical instructional map. Going out, the trade winds and the Canary Current carried ships south along West Africa; coming home, they sailed away from land, west and north past the Azores, then rode the westerlies to Portugal. The routes are schematic.",
          url: "../assets/images/instructional-maps/topic-4-1-winds.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-4-1-winds.svg"
        }
      }
    ]
  },

  map: {
    title: "Where Europe's Sea Tools Came From",
    url: "../assets/images/instructional-maps/topic-4-1.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-1.svg",
    caption: "A BeHistorical instructional map of where the tools of ocean travel came from: the compass from China, the astrolabe and astronomical charts from Greek and Islamic astronomy, and the lateen sail from the Mediterranean. Europe's own contribution was combining them with new ships and learning the Atlantic's winds.",
    intro: "Follow the arrows on this map. Each one shows knowledge moving toward Europe from an older world. Notice how far some of it traveled, and which arrow's route historians still argue about.",
    prompt: "Using the map, name TWO tools or kinds of knowledge that reached Europe from older worlds, and the world each one came from. Then explain why knowledge of the Atlantic's winds is not shown arriving from anywhere."
  },

  deepReading: {
    title: "Sailing Away to Get Home",
    desc: "A textbook-depth companion on the actual problem an ocean sets, why the caravel, carrack and fluyt were each built for a different part of it, how latitude was solved and longitude was not, and the borrowed knowledge and the volta do mar that made a return voyage possible. Optional, and useful when a checkpoint asks how a technology actually worked.",
    url: "deep-reading-topic-4-1-technological-innovations.html"
  },

  first10: {
    title: 'First & 10: Getting Home',
    embedUrl: 'first-and-10-topic-4-1-technological-innovations-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 4.1 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Technology and the Conditions for Exploration",
    intro: "Use the evidence below to connect specific technological innovations to the broader historical argument about how European oceanic exploration became possible after c. 1450. For each piece of evidence, consider: what specific change did this technology make possible, and what would have been impossible without it?",
    prompt: "Choose one piece of evidence and explain how it supports a specific argument about the role of technology in enabling European exploration. Use causation: identify the technology, explain the mechanism, and connect it to a specific exploratory outcome.",
  },

  primarySource: {
    title: "Primary Source: A Crew Member's Journal of Vasco da Gama's Voyage (1497)",
    intro: "The only surviving eyewitness journal of Vasco da Gama's first voyage was kept by a member of the crew whose name is not certain. In this passage the fleet leaves the Cape Verde Islands and crosses the South Atlantic far from any coast, a long loop far out into the open ocean, the same idea as the volta do mar: sail away from land to find a better wind. Read it for what the sailors did to keep track of where they were, and for how long they went without seeing land.",
    attribution: "Anonymous journal (Roteiro) of Vasco da Gama's first voyage, August to November 1497; from E. G. Ravenstein's English translation, A Journal of the First Voyage of Vasco da Gama, 1497-1499 (London: Hakluyt Society, 1898)",
    text: "On Thursday, August 3, we left in an easterly direction. On August 18, when about 200 leagues from Samtiaguo, going south, the captain-major's main yard broke, and we lay to under foresail and mainsail for two days and a night. On the 22nd of the same month, when going S. by W., we saw many birds resembling herons. On the approach of night they flew vigorously to the S.S.E., as if making for the land. On the same day, being then quite 800 leagues out at sea, we saw a whale. On Friday, October 27, the eve of St. Simon and Jude, we saw many whales, as also quoquas and seals. On Wednesday, November 1, the day of All Saints, we perceived many indications of the neighbourhood of land, including gulf-weed, which grows along the coast. On Saturday, the 4th of the same month, a couple of hours before break of day, we had soundings in 110 fathoms, and at nine o'clock we sighted the land.",
    sourceNote: "This is a verbatim excerpt from Ravenstein's 1898 English translation, which is in the public domain. Page numbers, footnote markers and Ravenstein's bracketed explanations have been removed; nothing else has been changed. Samtiaguo is the island of Santiago in the Cape Verde Islands; a league is roughly three and a half miles; quoquas is the journal's word for an animal Ravenstein could not identify; soundings in 110 fathoms means the crew lowered a weighted line and touched bottom about 630 feet down (Ravenstein gives a Portuguese fathom as about 5.76 feet). Ravenstein also notes that the August dates here cannot all be right: the fleet could not have covered some 300 leagues between August 18 and 22, and he suggests the 22nd may really be October 22.",
    sourceLinks: [
      { label: "Project Gutenberg: A Journal of the First Voyage of Vasco da Gama (Ravenstein, 1898)", url: "https://www.gutenberg.org/files/46440/46440-h/46440-h.htm" }
    ],
    questions: [
      "The writer leaves the Cape Verde Islands on August 3 and sights land on November 4. About how long was the fleet out of sight of land, and what does that tell you about the problem these sailors had to solve?",
      "Find TWO details that show the crew keeping track of where they were or watching for land: a compass direction, a sounding, or a sign from nature such as birds or seaweed. What tool or skill does each detail suggest they were using?",
      "The writer was a crew member, not a pilot or a royal mapmaker. What might he leave out about how the ship was navigated, and what other kind of source would help you find out which instruments the pilots used?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Pilot on a Caravel Off West Africa, c. 1485",
    desc: "Your caravel has spent months probing the coast of West Africa, and now it is time to go home to Portugal. For weeks the wind has blown from the northeast. The captain wants to creep back along the coast. You think the only way home is to sail away from it.",
    intro: "It is noon. You stand on the small stern deck with a heavy astrolabe hanging from your thumb, waiting for a ray of sun to pass through both sight holes. Your handwritten sun tables lie open on a chest beside you. The captain keeps looking east, toward the coast, the only landmark anyone on board trusts.",
    detail: "You have measured the sun at every clear noon, and with your tables those readings tell you how far south you are. Older pilots have told you what earlier voyages learned: far out to the west and north, beyond the empty ocean, the wind turns and blows toward Portugal. The crew does not like the idea. Sailing out of sight of land means trusting the compass, your latitude readings, and a wind no one on board can see yet.",
    prompt: "What do you say to the captain? Convince him to sail away from the coast in order to get home. Use at least TWO tools or kinds of knowledge (the compass, the astrolabe and sun tables, the caravel's lateen sails, or the wind wheel), and explain where ONE of them came from before it reached Portugal."
  },

  beInTheRoom: {
    url: '',
    desc: "Advise the pilots of the Dias expedition, 1487: combine instruments, ship design, Atlantic wind knowledge, and what African coastal peoples knew about harbors, water and food to find a route around southern Africa and get home."
  }

};
