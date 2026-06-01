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
    unit: "Unit 2: Networks of Exchange",
    topic: "Topic 2.4",
    title: "Trans-Saharan Trade Routes: Gold, Salt, and the Spread of Islam",
    subtitle: "West African states, camel caravans, and cultural exchange across the Sahara c. 1200–1450",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how technology — especially the camel and caravan organization — made trans-Saharan trade possible across one of the world's most hostile environments.",
      kc: "KC-2.3.IV.A",
      theme: "Technology"
    },
    {
      target: "I can describe the goods exchanged across the Sahara — especially gold from West Africa and salt from Saharan mines — and explain why this exchange was mutually necessary.",
      kc: "KC-2.3.IV.B",
      theme: "Economics"
    },
    {
      target: "I can explain the effects of trans-Saharan trade: the growth of the Mali Empire, the wealth and fame of Mansa Musa, and the spread of Islam across West Africa.",
      kc: "KC-2.3.IV.C",
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence — the camel's physiological advantages, the redesigned saddle, caravan organization, and oases — to explain what made crossing the Sahara commercially viable.",
      kc: "KC-2.3.IV.A",
      theme: "Technology"
    },
    {
      criteria: "I can explain the gold-salt exchange: where each commodity came from, why each side needed what the other had, and how this complementary demand drove the trans-Saharan trade system.",
      kc: "KC-2.3.IV.B",
      theme: "Economics"
    },
    {
      criteria: "I can connect trans-Saharan trade to the rise of Mali, Mansa Musa's 1324 hajj and its global significance, the growth of Timbuktu as a center of Islamic learning, and the spread of Islam through merchant and scholarly networks across West Africa.",
      kc: "KC-2.3.IV.C",
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "KC-2.3.IV.A",
      theme: "Technology",
      text: "Trans-Saharan trade was made possible by the domestication and use of the camel as a pack animal suited to desert conditions, the development of an improved saddle, and the organization of large merchant caravans with guides, water supplies, and oasis rest stops.",
      illustrativeExamples: ["Camel as pack animal", "Improved camel saddle", "Caravan organization", "Oases as waypoints"]
    },
    {
      code: "KC-2.3.IV.B",
      theme: "Economic Systems",
      text: "West African gold — especially from the Wangara goldfields — and Saharan salt from mines like Taghaza were the two complementary commodities that drove trans-Saharan exchange. Gold moved north toward the Mediterranean and the Islamic world; salt moved south to West African agricultural societies that lacked it.",
      illustrativeExamples: ["Wangara goldfields", "Taghaza salt mines", "Mali Empire's control of trade routes", "North African and Mediterranean demand for gold"]
    },
    {
      code: "KC-2.3.IV.C",
      theme: "Cultural Developments and Interactions",
      text: "Trans-Saharan trade enriched West African states, most notably the Mali Empire. Mansa Musa's hajj of 1324 demonstrated Mali's extraordinary wealth to the Islamic world and Europe. Trade also facilitated the spread of Islam across West Africa through merchants and scholars, making Timbuktu a major center of Islamic learning.",
      illustrativeExamples: ["Mali Empire", "Mansa Musa's hajj (1324)", "Timbuktu as center of Islamic scholarship", "Spread of Islam through merchants and Sufi networks"]
    }
  ],

  lecture: {
    title: "Trans-Saharan Trade: Camels, Gold, Salt, and Islam",
    intro: "Use these cards to explain what made the Sahara crossable, what drove the gold-salt exchange, and how trans-Saharan trade transformed West African states and spread Islam across the region from c. 1200 to c. 1450.",
    videos: [
      {
        title: "Heimler's History — Topic 2.4 Part 1",
        url: "https://youtu.be/YT_24_1",
        youtubeId: "YT_24_1",
        prompt: "Use this clip to review camel technology, caravan organization, and the infrastructure that made Saharan crossing possible."
      },
      {
        title: "Heimler's History — Topic 2.4 Part 2",
        url: "https://youtu.be/YT_24_2",
        youtubeId: "YT_24_2",
        prompt: "Use this clip to review the gold-salt trade, the Mali Empire, Mansa Musa's hajj, and the spread of Islam across West Africa."
      }
    ],
    segments: [
      {
        title: "What made the Sahara crossable",
        bullets: [
          "The **camel** — specifically the dromedary — transformed trans-Saharan commerce: it could carry loads of up to 500 pounds, travel for days without water by storing fat in its hump, and endure sand, heat, and rough terrain that killed horses and donkeys.",
          "An improved **North African camel saddle**, developed around the 3rd century BCE and refined over centuries, allowed riders to sit behind the hump and control the animal effectively, making camels practical not just as pack animals but as mounts for desert guides and warriors.",
          "**Caravans** — organized convoys of hundreds or thousands of camels led by experienced guides — pooled resources and reduced individual risk; **oases** spaced across the desert provided the water, food, and shelter that made journeys of up to 1,700 miles commercially viable."
        ],
        image: {
          title: "Sahara caravan, c. 1300 CE",
          caption: "Camel caravans organized into large convoys crossed the Sahara carrying gold north and salt south, sustained by oases and experienced desert guides.",
          url: "../assets/images/module-cards/sahara-caravan-1300ce.jpg",
          sourceUrl: "../assets/images/module-cards/sahara-caravan-1300ce.jpg"
        }
      },
      {
        title: "Gold, salt, and the Mali Empire",
        bullets: [
          "The trans-Saharan trade was driven by **complementary need**: West African agricultural societies desperately needed **salt** (essential for preserving food and human health) but had none, while North African and Mediterranean societies craved **gold** but lacked it — the Sahara sat directly between both supplies.",
          "The **Wangara goldfields** of the western Sudan produced enormous quantities of gold, while the **Taghaza salt mines** in the central Sahara produced slabs of salt so valuable they were literally used as currency; Mali's rulers grew extraordinarily wealthy by taxing both commodities as they crossed their territory.",
          "**Mansa Musa**, ruler of Mali from approximately 1312 to 1337, embodied the empire's wealth: his 1324 hajj to Mecca — a 4,000-mile journey with a retinue reportedly including 60,000 people and 80 camels carrying gold — distributed so much gold across Egypt and Arabia that it caused **inflation** in Cairo for more than a decade."
        ],
        image: {
          title: "Silk Road routes across Afro-Eurasia",
          caption: "Trans-Saharan routes connected West Africa to North Africa and the Mediterranean, integrating West African gold into the wider Afro-Eurasian exchange system.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Silk_route.jpg"
        }
      },
      {
        title: "The spread of Islam and cultural exchange",
        bullets: [
          "**Islam** traveled south across the Sahara along the same routes as gold and salt: North African Muslim merchants brought their faith to West African trading cities, and rulers like Mansa Musa embraced Islam — gaining access to Islamic legal systems, literacy, and the commercial networks of the wider Muslim world.",
          "**Timbuktu**, a city on the Niger River at the southern edge of the Sahara, grew into one of the most important centers of Islamic learning in the world by the 14th and 15th centuries, home to the Sankore mosque-university and a manuscript tradition that preserved tens of thousands of texts on theology, law, mathematics, and history.",
          "Trans-Saharan exchange diffused not only religion but also **writing, architecture, and scholarly culture** into West Africa — the Arabic script spread with Islam, mosques rose in major cities, and Muslim scholars served as administrators and advisors to West African rulers, transforming the cultural landscape of the region."
        ],
        image: {
          title: "Blank world map",
          caption: "Trans-Saharan trade routes integrated West Africa into a broader Afro-Eurasian network of exchange, spreading Islam and Islamic culture across the region.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_Map_Blank_-_with_blue_sea.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_Map_Blank_-_with_blue_sea.svg"
        }
      }
    ]
  },

  map: {
    title: "Trans-Saharan Routes and West African States",
    url: "../assets/images/module-cards/sahara-caravan-1300ce.jpg",
    sourceUrl: "../assets/images/module-cards/sahara-caravan-1300ce.jpg",
    caption: "Trans-Saharan trade routes connected the West African Sudan to North Africa and the Mediterranean, carrying gold northward and salt southward across the world's largest desert.",
    intro: "Use the map context to trace the major trans-Saharan routes, identify the key commodities moving in each direction, and locate the major cities that grew wealthy from controlling this exchange.",
    prompt: "How did the geography of the Sahara — its size, its oases, and its position between gold-producing West Africa and salt-rich interior desert — shape who became wealthy and which cities became powerful?",
    notes: [
      "The Sahara is not a uniform barrier but a varied landscape of sand seas, rocky plateaus, and scattered oases — the routes followed paths between water sources, making oasis cities strategic chokepoints.",
      "West African gold was the most important commodity in the medieval Mediterranean world, flowing into Islamic mints across North Africa and eventually into European economies as well.",
      "Cities like Timbuktu, Djenné, and Kumbi Saleh grew wealthy precisely because they sat at the interface between the Saharan trade system and the agricultural and gold-producing lands to the south."
    ]
  },

  first10: {
    title: "First & 10: The Desert That Linked Two Worlds",
    paragraphs: [
      "For centuries, the Sahara Desert — the world's largest hot desert, stretching nearly 3.5 million square miles — looked like an impenetrable barrier. Then came the camel. With its extraordinary capacity to carry heavy loads across waterless terrain, the camel transformed the Sahara from a wall into a road.",
      "On one side of that road sat West Africa, home to the world's most productive goldfields. On the other side sat North Africa and the Mediterranean world, with salt mines in the Saharan interior and an insatiable demand for gold. The Sahara, which had separated these worlds, now connected them — and the people who controlled the crossing grew fabulously wealthy.",
      "The most famous of them was Mansa Musa of Mali, whose 1324 pilgrimage to Mecca was so lavish — thousands of attendants, camels loaded with gold dust — that it flooded Mediterranean markets and caused inflation for years. His journey announced West Africa to the Islamic world, and the Islamic world to West Africa. Trade routes had become cultural corridors."
    ],
    questions: [
      "Explain how the camel made trans-Saharan trade possible. Use at least two specific pieces of evidence about the camel's characteristics or the organization of caravans.",
      "Gold and salt drove the trans-Saharan trade. Explain why each side of the exchange needed what the other had, using specific evidence about the Wangara goldfields, the Taghaza salt mines, and Mali's role in the system.",
      "Evaluate this claim: 'Mansa Musa's hajj was more important than any military conquest in connecting West Africa to the wider world.' Use evidence from c. 1200–1450 to support or challenge the claim."
    ],
    magicSchoolBridge: {
      magicSchoolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q"
    }
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Trans-Saharan Trade Through Evidence",
    intro: "Use the evidence below to connect trans-Saharan exchange to broader historical arguments about technology, complementary trade, and the spread of Islam.",
    prompt: "Choose one piece of evidence and explain how it supports a claim about what made the Sahara crossable, what drove the gold-salt exchange, or how trade transformed West African societies.",
    items: [
      { title: "The camel saddle", detail: "Evidence of how a specific technological improvement transformed an animal into a commercially viable pack animal — the improved saddle made the camel controllable enough to organize into large caravans capable of crossing the Sahara." },
      { title: "Mansa Musa's hajj, 1324", detail: "Evidence of Mali's extraordinary wealth from trans-Saharan trade and of how a single event could spread information about West Africa across the Islamic world and Europe — Mansa Musa's gold distribution caused inflation in Cairo and placed Mali on European maps." },
      { title: "Timbuktu as a center of Islamic learning", detail: "Evidence that trade routes carried cultural transformation as well as commodities — the same paths that moved gold north and salt south also brought Islam, Arabic literacy, and scholarly culture into West Africa, making Timbuktu a global intellectual center by the 15th century." }
    ]
  },

  primarySource: {
    title: "Primary Source: Ibn Battuta on Mali and the Trans-Saharan World",
    intro: "Ibn Battuta visited the Mali Empire in 1352–1353, crossing the Sahara from North Africa. His account in the Rihla provides one of the most detailed eyewitness descriptions of Mali's wealth, governance, and society. This adapted passage reflects his observations of the Mali court and its connection to the wider Islamic world.",
    text: "I arrived at the town of Mali, the capital of the king of the blacks, and met the sultan Sulayman. He is a miserly king, and great gifts are not to be expected from him. I witnessed on his part a deed of generosity toward the pilgrims and those who came to him. He gave food, bread, and milk and gold to the pilgrims. His court is held in a great open place. He has with him his governors and the commanders of his soldiers, and a crowd of people. His interpreter stands before him, and the jurists, doctors of law, and preachers sit to his right. He receives men seated, and all about him bow down. He is surrounded by more than three hundred armed slaves.",
    questions: [
      "What evidence does Ibn Battuta provide that Mali's rulers had adopted Islamic customs and connected to wider Islamic networks?",
      "How does this description of the Mali court reflect the wealth generated by trans-Saharan trade in gold and salt?",
      "Ibn Battuta was a Muslim scholar traveling with high expectations of generosity from Islamic rulers. How might his perspective shape what he notices and how he judges what he sees?"
    ]
  }

};
