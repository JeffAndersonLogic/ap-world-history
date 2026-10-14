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
    topic: "Topic 4.3",
    title: "Columbian Exchange",
    subtitle: "What the ships carried across the Atlantic after 1492, on purpose, by accident, and by force, and how it remade populations on both sides of the ocean",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain what caused the Columbian Exchange: ships crossing the Atlantic and coming back, carrying plants, animals, and germs, some on purpose and some by accident.",
      kc: 'KC-4.1.V',
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain how diseases from the Eastern Hemisphere, such as smallpox, measles, and malaria, and disease vectors, such as rats and mosquitoes, crossed to the Americas, and why these diseases had catastrophic effects on many Indigenous populations.",
      kc: 'KC-4.1.V.A',
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain the effects of the exchange on both hemispheres. In the Americas: animals and crops Europeans brought, foods enslaved Africans brought, and cash crops grown on plantations with coerced labor. In Afro-Eurasia: American staple crops that improved nutrition.",
      kc: 'KC-4.1.V.B; KC-4.1.V.C; KC-4.1.V.D',
      theme: "Humans and the Environment"
    }
  ],

  successCriteria: [
    {
      criteria: "I can state the cause of the Columbian Exchange and give one thing that crossed on purpose and one that crossed by accident.",
      kc: 'KC-4.1.V',
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can name a disease and a disease vector, and give two reasons these diseases were so deadly in the Americas, including one about the conditions people lived in, such as war, forced labor, or hunger.",
      kc: 'KC-4.1.V.A',
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain one effect in the Americas and one in Afro-Eurasia, each with a specific animal, crop, or food and the people it affected.",
      kc: 'KC-4.1.V.B; KC-4.1.V.C; KC-4.1.V.D',
      theme: "Humans and the Environment"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective D',
      theme: 'Learning Objective',
      text: 'Explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.V',
      theme: 'Humans and the Environment',
      text: 'The new connections between the Eastern and Western Hemispheres resulted in the exchange of new plants, animals, and diseases, known as the Columbian Exchange.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.V.A',
      theme: 'Humans and the Environment',
      text: 'European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria. Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.V.B',
      theme: 'Humans and the Environment',
      text: 'American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.V.C',
      theme: 'Humans and the Environment',
      text: 'Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons.',
      illustrativeExamples: ['Horses', 'Pigs', 'Cattle', 'Okra', 'Rice']
    },
    {
      code: 'KC-4.1.V.D',
      theme: 'Humans and the Environment',
      text: 'Populations in Afro-Eurasia benefited nutritionally from the increased diversity of American food crops.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "What the Ships Carried: The Columbian Exchange, 1492 to 1750",
    intro: "Use these cards after the First & 10. Each one answers the topic's question for one part of the story: what crossed the Atlantic, how it crossed, and what it did to the people at the other end.",
    videos: [],
    segments: [
      {
        title: "Why It Happened: Ships That Came Back",
        bullets: [
          "Since the end of the last Ice Age, about eleven thousand years ago, ocean had kept the Americas apart from Africa, Asia, and Europe. Each side grew its own crops, kept its own animals, and lived with its own diseases. The Americas had **maize, potatoes, cassava, tomatoes, cacao, and tobacco**, but no horses, cattle, or pigs. Afro-Eurasia had **wheat, rice, sugarcane, horses, cattle, pigs, and sheep**, and diseases such as **smallpox and measles**.",
          "The cause of the **Columbian Exchange** is a new connection: after 1492, ships crossed the Atlantic and came back, again and again, as Europeans built colonies. Everything that rode those ships crossed too. The historian Alfred Crosby named the exchange in 1972.",
          "Things crossed in three ways. **On purpose:** Columbus's second voyage, in 1493, carried horses, cattle, pigs, wheat seed, and sugarcane. **By accident:** germs, rats in the cargo, and, most likely, the eggs of the mosquito that spreads yellow fever, hidden in water barrels. Animals that carry disease from person to person are **disease vectors**. **By force:** enslaved Africans brought foods from home.",
          "Keep the College Board's word in mind: the disease vectors and diseases moved **unintentionally**. The ships carried more than anyone meant them to."
        ],
        image: {
          title: "What Crossed, and Which Way",
          caption: "A modern BeHistorical map, not a source from the time. Arrows show the direction plants, animals, germs, and people moved, not single voyages.",
          url: "../assets/images/instructional-maps/topic-4-3.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-4-3.svg"
        }
      },
      {
        title: "Going West by Accident: Disease and Its Causes",
        bullets: [
          "**Smallpox** reached the Caribbean in 1518 and Mexico in 1520. Measles followed, and malaria, carried by mosquitoes, came with Europeans and enslaved Africans. These diseases had circulated in Afro-Eurasia for a long time; in the Americas they were new.",
          "In June 1520 the people of **Tenochtitlan** drove the Spaniards out of their city. That autumn smallpox swept through it. The Nahua account later written down for the friar Bernardino de Sahagún says the sickness lasted sixty days, that many \"just starved to death,\" and that \"the Mexica warriors were greatly weakened by it\" when the Spaniards returned to besiege the city in 1521.",
          "Why so deadly? **First**, nobody in the Americas had had these diseases before, so no adult had survived them and become immune, and almost everyone fell sick at the same time, leaving nobody to farm, cook, or care for the sick. **Second**, the diseases came with war, forced labor, hunger, and people driven from their homes. The historian David S. Jones argues that conditions like these, created by colonization, shaped how many people died. It is a myth that Indigenous Americans were simply born weak.",
          "Historians argue about the numbers. One careful estimate is that central Mexico fell from about 15 million people in 1519 to about 1.5 million a century later, and many regions lost most of their people. The College Board's words are \"catastrophic effects in many areas.\""
        ],
        image: {
          title: "A Nahua Healer and Smallpox Patients",
          caption: "From Book 12 of the Florentine Codex, painted by Nahua artists and completed about 1577, decades after the 1520 epidemic.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Healer%20%28ticitl%29%20tending%20to%20people%20suffering%20from%20smallpox%20in%201520%20in%20Book%2012%20of%20the%20Florentine%20Codex%2C%201577.jpg?width=1200",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Healer_(ticitl)_tending_to_people_suffering_from_smallpox_in_1520_in_Book_12_of_the_Florentine_Codex%2C_1577.jpg"
        }
      },
      {
        title: "Going West on Purpose and by Force: Animals, Sugar, Rice, and Okra",
        bullets: [
          "**Pigs and cattle** multiplied fast. José de Acosta reported in 1590 that wild cattle on Santo Domingo roamed \"by thousands,\" and that one fleet in 1587 carried almost a hundred thousand cattle hides to Spain from the Caribbean and Mexico. One historian argues that in one valley of central Mexico, sheep grazed the hillsides bare.",
          "**Horses** had died out in the Americas thousands of years earlier. Brought back by the Spanish, they spread north, and by the early 1700s Great Plains peoples such as the **Comanche** had built new ways of life on horseback. An effect of the exchange could be an opportunity as well as a disaster.",
          "**Enslaved Africans**, carried across the Atlantic by force, brought foods such as **rice and okra**, and many knew how to grow rice. Okra was growing in Brazil by the 1650s.",
          "**Sugarcane** came from Afro-Eurasia but grew best in the Caribbean and Brazil. Europeans grew it as a **cash crop** on **plantations** worked by **coerced labor**, overwhelmingly enslaved Africans, and shipped most of it to Europe and the Middle East. Before 1492, Europeans had already grown sugar with enslaved workers, including Canary Islanders and Africans, on Atlantic islands such as Madeira, so disease alone did not cause African slavery in the Americas. How that forced labor worked is Topic 4.4."
        ],
        image: {
          title: "A Sugar Mill in Dutch Brazil",
          caption: "Oil painting by the Dutch artist Frans Post, 1660s, painted in the Netherlands for European buyers after his years in Brazil. National Gallery of Ireland.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Frans%20Post%20-%20Engenho%20de%20A%C3%A7%C3%BAcar%20%28Dublin%29.jpg?width=1200",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Frans_Post_-_Engenho_de_A%C3%A7%C3%BAcar_(Dublin).jpg"
        }
      },
      {
        title: "Going East: New Staple Crops and Better Nutrition",
        bullets: [
          "American crops became **staple crops**, the main everyday foods, in parts of Europe, Asia, and Africa because they grew where the old crops struggled: **maize** on dry land, **potatoes** in cold, wet ground, **cassava** in poor soil and drought, **sweet potatoes** on hillsides too steep for rice.",
          "In southern China, officials promoted the sweet potato in 1594, a famine year. By the 1740s, an album made for a Qing official in Taiwan called it \"truly a help in years of bad harvest.\" Near the mouth of the Congo River, Portuguese traders brought cassava from Brazil, and farmers took it up because it survived drought and locusts. In Ireland, the potato had become a main food by the 1700s.",
          "**Nutrition** means how well food feeds the body. More food, more kinds of food, and a fallback when the old harvest failed meant better nutrition, and over two centuries these crops helped populations grow in China and Europe, and they fed many people in Africa even as the slave trade carried millions away.",
          "Put both directions together: one connection, two very different results. In the Americas, catastrophic disease and land remade by new animals and plantations. In Afro-Eurasia, new staple crops and better nutrition."
        ],
        image: {
          title: "\"Turkie Corne\" in an English Herbal, 1597",
          caption: "A page of John Gerard's herbal, printed in London in 1597, picturing maize under the name \"Turkie Corne.\"",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Frumentum%20turcicum%20Gerard%201597%2075.png?width=1200",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Frumentum_turcicum_Gerard_1597_75.png"
        }
      }
    ]
  },

  map: {
    title: "What the Ships Carried, and Which Way",
    url: "../assets/images/instructional-maps/topic-4-3.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-3.svg",
    caption: "A modern BeHistorical map, not a source from the time. Arrows show the direction plants, animals, germs, and people moved, not single voyages.",
    intro: "Use the map to see the Columbian Exchange as movement in two directions across the Atlantic. Arrows 1 and 2 go west to the Americas; arrows 3 and 4 go east to Europe and Africa. The black dots mark five places where you can see the exchange at work.",
    prompt: "Using the map, trace one arrow going west and one going east. For each, say what moved, how it crossed (on purpose, by accident, or by force), and what it did to the people at the other end. Which part of the exchange does the map not draw as an arrow, and where on the map does it tell you about it?"
  },

  deepReading: {
    title: "The Exchange Nobody Negotiated",
    desc: "An optional, deeper companion: where these diseases came from and why they were so deadly here, how historians argue about the numbers, what crossed in each direction, and what Indigenous peoples did with what arrived.",
    url: "deep-reading-topic-4-3-columbian-exchange.html"
  },

  first10: {
    title: 'First & 10: What the Ships Carried',
    embedUrl: 'first-and-10-topic-4-3-columbian-exchange-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 4.3 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: What Crossed, and What It Did",
    intro: "Use the evidence cards to see the exchange in both directions, through sources made at the time.",
    prompt: "Choose two cards and explain how each shows a cause or an effect of the Columbian Exchange."
  },

  primarySource: {
    title: "Primary Source: A Nahua Account of Smallpox in Tenochtitlan, 1520",
    intro: "This account comes from Book 12 of the Florentine Codex, put together from the 1550s to the 1570s by the Spanish friar Bernardino de Sahagún with Nahua elders, who described the events in their own language, Nahuatl. Sahagún wrote his own Spanish version beside it. The document is James Lockhart's English translation of the Nahuatl, with one sentence from the Spanish version at the end. The Mexica were the people of Tenochtitlan. Tepeilhuitl was a month in the Nahua calendar; Sahagún says it fell at the end of September. In the first line, \"before the Spaniards appeared to us\" means before the Spaniards came back to attack the city.",
    skill: "3.B Claims and Evidence in Sources: identify the evidence a source uses to support its claim",
    attribution: "Florentine Codex, Book 12, chapter 29, put together by Bernardino de Sahagún with Nahua elders, 1550s to 1570s; English translation by James Lockhart",
    text: "<p>Before the Spaniards appeared to us, first an epidemic broke out, a sickness of pustules. It began in Tepeilhuitl. Large bumps spread on people; some were entirely covered. They spread everywhere, on the face, the head, the chest, etc. [The disease] brought great desolation; a great many died of it. They could no longer walk about, but lay in their dwellings and sleeping places, no longer able to move or stir. They were unable to change position, to stretch out on their sides or face down, or raise their heads. And when they made a motion, they called out loudly. The pustules that covered people caused great desolation; very many people died of them, and many just starved to death; starvation reigned, and no one took care of others any longer. ... This disease of pustules lasted a full sixty days; after sixty days it abated and ended. ... The Mexica warriors were greatly weakened by it.</p><p>From Sahagún's Spanish version: \"Many died of hunger, because there was no one who could prepare food.\"</p>",
    sourceLinks: [{ label: 'Early Nahuatl Library: Florentine Codex, Book 12, chapter 29', url: 'https://enl.wired-humanities.org/FCBk12Ch29' }],
    questions: [
      "What claim does this account make about the sickness? Identify TWO pieces of evidence the account gives to support that claim.",
      "The account says many \"just starved to death\" and that \"no one took care of others any longer.\" Explain how this evidence shows that people died of more than the disease itself.",
      "This account was told by Nahua elders decades after 1520 and written down under a Spanish friar's direction. How might that shape what it includes and what it leaves out?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Healer in Tenochtitlan, Autumn 1520",
    desc: "It is the autumn of 1520. A few months ago, the people of Tenochtitlan drove the Spanish army out of the city. Now a sickness no one has ever seen is spreading from house to house. You are a ticitl, a healer, and nothing you know is stopping it.",
    intro: "You learned your craft for years from older healers: which plants ease a fever, how to set a bone, how to treat a wound, which prayers go with each treatment. You have cared for the sick through fevers, injuries, and hungry seasons, and the people of your neighborhood come to you first.",
    detail: "This is different. Sores spread over people's faces, heads, and chests until some are covered entirely. The sick cannot walk, cannot turn over, cannot lift their heads, and they cry out if anyone moves them. Whole households are sick at the same time, so there is no one to grind maize, cook, or carry water, and some people who might have lived are dying of hunger. Healers who go from house to house are falling sick too. Nothing in your training fits this. The Spaniards are gone from the city for now, but everyone knows they may come back.",
    prompt: "Write a message to a healer in another part of the city. Describe what you have seen and what you have tried, and what you think is happening. What do you not understand about this sickness? And what should the other healer do for the families who have no one left to cook for them?"
  },

  beInTheRoom: {
    url: '',
    desc: "Sit on a town council in the Valley of Mexico in 1531, eleven years after smallpox, and decide what to plant, what to do about the settlers' animals, and how to care for the sick."
  }

};
