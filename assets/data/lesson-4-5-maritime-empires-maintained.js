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
    subtitle: "Rulers built economic tools to keep their empires paying, and the money, goods, and people those tools moved reshaped work, families, and faith.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how European rulers used mercantilism and chartered joint-stock companies to make their empires pay and to compete with each other, and how economic disputes led to rivalries and wars.",
      kc: 'KC-4.1.IV.C; KC-4.3.III.ii',
      theme: "Governance"
    },
    {
      target: "I can explain what changed and what continued in networks of exchange from 1450 to 1750: silver pulled toward China, the Atlantic trading system, regional markets that kept flourishing, and peasant and artisan work that continued and grew.",
      kc: 'KC-4.1.IV; KC-4.1.IV.D.i; KC-4.2.II.A',
      theme: "Economic Systems"
    },
    {
      target: "I can explain how the trade in enslaved people changed families and communities in parts of Africa, and how Africans, Indigenous Americans, and Europeans all contributed to new mixed cultures in the Atlantic world.",
      kc: 'KC-4.2.III.C; KC-4.1.IV.D.ii',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can compare how religions affected societies as contact grew: how existing religions spread, how contact caused religious conflict, and how new blended, or syncretic, beliefs and practices developed.",
      kc: 'KC-4.1.VI',
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how one mercantilist law or one joint-stock company, such as the VOC or the English East India Company, helped a ruler make an empire pay or compete with a rival, and name one rivalry that grew out of an economic dispute.",
      kc: 'KC-4.1.IV.C; KC-4.3.III.ii',
      theme: "Governance"
    },
    {
      criteria: "I can explain one change in networks of exchange (silver pulled toward China, or the Atlantic trading system) and one continuity (regional markets with their old merchants and ways, or peasant and artisan work that continued and grew).",
      kc: 'KC-4.1.IV; KC-4.1.IV.D.i; KC-4.2.II.A',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain one way the trade in enslaved people changed families in parts of Africa, and one example of cultural mixing in the Atlantic world that Africans, Indigenous Americans, and Europeans all contributed to.",
      kc: 'KC-4.2.III.C; KC-4.1.IV.D.ii',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can use two examples to compare how religions spread, clashed, or blended, and say one way they were similar and one way they were different.",
      kc: 'KC-4.1.VI',
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective H',
      theme: 'Learning Objective',
      text: 'Explain how rulers employed economic strategies to consolidate and maintain power throughout the period from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 4: Learning Objective I',
      theme: 'Learning Objective',
      text: 'Explain the continuities and changes in networks of exchange from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 4: Learning Objective J',
      theme: 'Learning Objective',
      text: 'Explain how political, economic, and cultural factors affected society from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 4: Learning Objective K',
      theme: 'Learning Objective',
      text: 'Explain the similarities and differences in how various belief systems affected societies from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV.C',
      theme: 'Governance',
      text: 'Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.ii',
      theme: 'Governance',
      text: 'Economic disputes led to rivalries and conflict between states.',
      illustrativeExamples: ['Muslim–European rivalry in the Indian Ocean', 'Moroccan conflict with the Songhai Empire']
    },
    {
      code: 'KC-4.1.IV.D.i',
      theme: 'Economic Systems',
      text: 'The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV',
      theme: 'Economic Systems',
      text: 'The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II.A',
      theme: 'Economic Systems',
      text: 'Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased.',
      illustrativeExamples: ['Western Europe—wool and linen', 'India—cotton', 'China—silk']
    },
    {
      code: 'KC-4.2.III.C',
      theme: 'Social Interactions and Organization',
      text: 'Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.IV.D.ii',
      theme: 'Social Interactions and Organization',
      text: 'The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.VI',
      theme: 'Cultural Developments and Interactions',
      text: 'In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Making Empires Pay: How It Worked",
    intro: "The First & 10 tells the story. These cards take four parts of it apart: how a company could be sent to war, why silver went to China, who did the extra work and what the slave trade did to families in Africa, and how to compare what religions did when they traveled.",
    videos: [],
    segments: "__SEGMENTS__"
  },

  map: {
    title: "Silver, Companies and Rivals, c. 1550 to 1750",
    url: "../assets/images/instructional-maps/topic-4-5.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-5.svg",
    caption: "What the rulers' tools moved: silver from Spanish America to Seville and across the Pacific to Manila and China, silver carried around Africa to Asia, and the Atlantic trade in enslaved Africans. The black dots mark three places where economic disputes became battles.",
    intro: "Use the map to follow the silver. Spanish America's silver went two ways, east across the Atlantic and west across the Pacific, and much of both streams ended up in Asia. Then look at the black dots: each is a place where rivals fought over a trade.",
    prompt: "Trace the TWO routes that carried silver from Spanish America toward China (arrows 1 and 4, and arrows 2 and 3). Using the map and its key, explain why so much silver ended up in China. Then choose ONE black dot and explain which trade the rivals there were fighting over."
  },

  deepReading: {
    title: "What Made Empires Pay",
    desc: "A textbook-depth companion on how mercantilism and the chartered companies worked, why American silver flowed to China, how the Atlantic system and the old regional markets ran side by side, who did the extra work, what the slave trade did to families in Africa, and how religions spread, clashed and blended. Optional, and useful when a checkpoint asks for a change and a continuity.",
    url: "deep-reading-topic-4-5-maritime-empires-maintained.html"
  },

  first10: {
    title: 'First & 10: Making Empires Pay',
    embedUrl: 'first-and-10-topic-4-5-maritime-empires-maintained-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.5 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Tools, Flows, and What They Changed",
    intro: "__EVIDENCE_INTRO__",
    prompt: "Choose one card that shows something new and one that shows something that kept going, and explain what each shows, what it suggests, and what it cannot tell you."
  },

  primarySource: "__PRIMARY__",

  beSurreal: {
    title: "BeSurreal: You Raise Silkworms near Suzhou, c. 1600",
    desc: "You are a young woman in a farming family in the Jiangnan region of Ming China, the rich river country near the city of Suzhou. Your family grows rice, but much of the money that pays its taxes comes from silk.",
    intro: "It is late spring, the busiest weeks of the year. The silkworms in the flat baskets in your house eat mulberry leaves day and night, and someone must pick and chop fresh leaves for them over and over. Your mother and grandmother know how warm the room must be and how to tell when the worms are ready to spin their cocoons.",
    detail: "When the cocoons are finished, the family boils them and reels the fine thread, and you help at the loom. A merchant from the market town buys your silk and pays in silver, cut into small pieces and weighed on a scale, because the government now wants the family's taxes paid in silver. You have heard that some silk is carried south to the ports of Fujian and onto ships bound for Luzon, an island across the sea, where foreigners pay for it with silver coins from a land on the other side of the ocean.",
    prompt: "Write a short letter to a cousin in another province. Explain how your family earns the silver it needs, and why the government's demand for silver has changed your family's work. Then say what has stayed the same about that work for generations, and what is different now."
  },

  beInTheRoom: {
    url: '',
    desc: "__ROOM_DESC__"
  }

};
