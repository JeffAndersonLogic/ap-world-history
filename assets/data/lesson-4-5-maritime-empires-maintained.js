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
    segments: [
      {
        title: "How a Company Could Fight a War",
        bullets: [
          "A **joint-stock company** raised money from many investors at once, so no single merchant had to risk his fortune on one voyage. Investors who wanted their money back could sell their shares to someone else in Amsterdam, so the company could keep its money working for years instead of paying it back after each voyage.",
          "The charter turned the company into a tool of its government. The VOC could build forts, keep soldiers, make treaties, and wage war. Because only one Dutch company could trade with Asia, the profits stayed in Dutch hands, which is what a **mercantilist** government wanted.",
          "Rivals used the same tools against each other. The Dutch and English companies fought over the spice islands, and in 1623 VOC officials on Ambon executed ten English company men. England and the Dutch Republic then fought three wars at sea between 1652 and 1674, largely over trade and shipping."
        ],
        image: {
          title: "A sea battle between England and the Dutch Republic",
          caption: "The Dutch flagship Gouden Leeuw at the Battle of Texel in 1673, during the third Anglo-Dutch War. This version, in Het Scheepvaartmuseum, Amsterdam, is a copy of Willem van de Velde the Younger's 1687 painting, probably made in his studio; his signed original is in the National Maritime Museum, Greenwich.",
          url: "../assets/images/topics/4-5/battle-texel-van-de-velde-1687.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:De_Gouden_Leeuw_tijdens_de_Slag_bij_Kijkduin_(Battle_of_Texel)_1673_Willem_van_de_Velde.jpg"
        }
      },
      {
        title: "Why the Silver Went to China",
        bullets: [
          "Ming China's **Single Whip** reform asked families to pay their taxes in silver. China mined little silver of its own, so every household had to get silver from somewhere, and silver bought more in China than in Europe.",
          "That gap pulled silver toward China from both sides of the world. At Manila, Chinese merchants from Fujian traded silk and porcelain for American silver. A Spanish official there, Antonio de Morga, wrote in 1609 that the Chinese took \"silver and reals [Spanish coins], for they do not like gold, nor any other goods in exchange.\"",
          "The Spanish king worried that silver was flowing to China instead of Spain, and in 1593 he limited the galleons to two a year. Merchants carried more than the rules allowed, because the profits were so large."
        ],
        image: {
          title: "A Chinese man and woman at Manila, about 1590",
          caption: "A Chinese man and woman, labeled \"Sangley,\" the Spanish word for the Chinese of Manila, from the Boxer Codex, a manuscript made in Manila about 1590. Lilly Library, Indiana University.",
          url: "../assets/images/topics/4-5/sangley-boxer-codex-c1590.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Sangley_in_Boxer_Codex.jpg"
        }
      },
      {
        title: "Who Did the Extra Work, and What the Trade Took",
        bullets: [
          "**Peasant and artisan labor** grew in many regions. In the Netherlands and England, merchants paid rural families to spin and weave at home. In India, company agents paid weavers in advance for cloth. In China, families raised silkworms and wove silk. The work was old; there was more of it, for buyers far away.",
          "Much of that work was done by women and girls, at home, between farm chores and child care.",
          "About two of every three captives carried in the Atlantic slave trade were male, and in parts of West Central Africa women came to outnumber men. Historians argue that women then did more of the farming and that more women and girls were enslaved within Africa. In the Americas, meanwhile, Africans, Indigenous Americans, and Europeans together made new mixed cultures, which historians call **cultural synthesis**."
        ],
        image: {
          title: "A weaver's workshop in the Netherlands, 1659",
          caption: "Two weavers at a large loom, with a spinning wheel and a cradle in the same room, painted by Cornelis Decker in 1659. Rijksmuseum.",
          url: "../assets/images/topics/4-5/weavers-decker-1659.jpg",
          sourceUrl: "https://www.rijksmuseum.nl/en/collection/SK-A-2562"
        }
      },
      {
        title: "Comparing What Religions Did",
        bullets: [
          "Ask the same question of each case: when a religion reached new people, did it **spread**, did it cause a **conflict**, or did it **blend** with what they already believed?",
          "Spread: **missionaries** carried Christianity to the Americas, the Philippines and Kongo, and Jesuits reached the Ming court. Conflict: **religious conflict** in Peru, where priests campaigned against Andean religion from about 1610. Blend: **syncretic** beliefs and practices at Tepeyac, in Kongo crucifixes, and in Vodou in Saint-Domingue in the 1700s.",
          "Often all three happened in one place. In Potosí, the silver mountain itself was painted as the Virgin Mary, joining Christian painting to Andean beliefs about sacred mountains, while priests elsewhere in Peru tried to stamp those beliefs out."
        ],
        image: {
          title: "The Virgin of the Mountain, Potosí, 1700s",
          caption: "The Virgin Mary painted as the Cerro Rico, the silver mountain of Potosí, by an unknown painter in the 1700s. Casa Nacional de Moneda, Potosí; photograph by Dan Lundberg, 2017, CC BY-SA 2.0.",
          url: "../assets/images/topics/4-5/virgen-del-cerro-potosi.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:20170808_Bolivia_1411_Potos%C3%AD_sRGB_(26204035019).jpg"
        }
      }
    ]
  },

  map: {
    title: "Silver, Companies and Rivals, c. 1550 to 1750",
    url: "../assets/images/instructional-maps/topic-4-5.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-5.svg",
    caption: "What the rulers' tools moved: silver from Spanish America to Seville and across the Pacific to Manila and China, silver carried around Africa to Asia, and the Atlantic trade in enslaved Africans. Three of the black dots, Diu, Tondibi and Ambon, mark places where economic disputes turned violent; the fourth, Manila, marks where silver met Chinese silk.",
    intro: "Use the map to follow the silver. Spanish America's silver went two ways, east across the Atlantic and west across the Pacific, and much of both streams ended up in Asia. Then look at the black dots at Diu, Tondibi and Ambon: each is a place where rivals fought over a trade. (The dot at Manila marks a trading city, not a fight.)",
    prompt: "Trace the TWO routes that carried silver from Spanish America toward China (arrows 1 and 4, and arrows 2 and 3). Using the map and its key, explain why so much silver ended up in China. Then choose ONE of the three places where rivals fought (Diu, Tondibi or Ambon) and explain which trade they were fighting over."
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
    intro: "Use the cards to build one continuity-and-change claim from two real sources: a Dutch share receipt, a silver coin from Potosí, a Chinese print of women reeling silk, a painted Indian cotton, a Mexican painting of the Virgin of Guadalupe, and figures from the Atlantic shipping records.",
    prompt: "Choose one card that shows something new and one that shows something that kept going, and explain what each shows, what it suggests, and what it cannot tell you."
  },

  primarySource: {
    title: "Primary Source: Antonio de Morga on the Chinese Trade at Manila, 1609",
    intro: "Antonio de Morga was a Spanish lawyer and official who served in the government of the Philippines in the 1590s and early 1600s. In 1609, in Mexico, he published a history of the islands, Events in the Philippine Islands, for Spanish readers. In these passages he describes the Spanish king's worry about the silver trade, and the Chinese merchants who sailed to Manila each spring. Chinese junks had already traded at Luzon and other Southeast Asian ports for centuries before the Spanish came. The translation is Henry E. J. Stanley's (Hakluyt Society, London, 1868); words in brackets are explanations.",
    text: "As this trade had so much increased, it had inflicted great loss and injury on the merchandise of Spain which was embarked [shipped] for Peru and New Spain [Mexico], and upon the royal duties [the king's taxes on trade] which used to be levied [collected] upon them ... and they used to send much silver to the Philippines for their purchases, which in that manner every year flowed out of the realms of His Majesty into the possession of the pagans [the Chinese, who were not Christians]. ... Usually there come from great China to Manila a large number of somas and junks, which are large ships, laden with merchandise; and each year thirty usually come, and sometimes forty ships ... The goods which they usually bring, and sell to the Spaniards, are raw silk ... much smooth velvet ... damasks, satins, taffetans [kinds of silk cloth] ... and white cotton tablecloths ... Usually the price of the raw silk, and silk stuffs ... is settled at leisure, and by persons who understand the business, both on the part of the Spaniards and of the Sangleys [the Chinese merchants], and what is given them for it, is silver and reals [Spanish silver coins], for they do not like gold, nor any other goods in exchange, nor do they carry any to China.",
    questions: [
      "What did the Chinese merchants bring to Manila, and what did they take back to China? Use Morga's words as evidence.",
      "Morga reports that silver \"every year flowed out of the realms of His Majesty into the possession of the pagans.\" Using what you know about mercantilism, explain why a Spanish king would see that as a problem.",
      "Continuity and change: what about this trade was new in the 1500s, and what kept going the way Chinese merchants had already traded in Southeast Asia? Use one detail from the source for what was new, and the introduction for what kept going."
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Raise Silkworms near Suzhou, c. 1600",
    desc: "You are a young woman in a farming family in the Jiangnan region of Ming China, the rich river country near the city of Suzhou. Your family grows rice, but much of the money that pays its taxes comes from silk.",
    intro: "It is late spring, the busiest weeks of the year. The silkworms in the flat baskets in your house eat mulberry leaves day and night, and someone must pick and chop fresh leaves for them over and over. Your mother and grandmother know how warm the room must be and how to tell when the worms are ready to spin their cocoons.",
    detail: "When the cocoons are finished, the family boils them and reels the fine thread, and you help at the loom. A merchant from the market town buys your silk and pays in silver, cut into small pieces and weighed on a scale, because the government now wants the family's taxes paid in silver. You have heard that some silk is carried south to the ports of Fujian and onto ships bound for Luzon, an island across the sea, where foreigners pay for it with silver coins from a land on the other side of the ocean.",
    prompt: "Write a short letter to a cousin in another province. Explain how your family earns the silver it needs, and why the government's demand for silver has changed your family's work. Then say what has stayed the same about that work for generations, and what is different now."
  },

  beInTheRoom: {
    url: '',
    desc: "Sit on Manila's council in 1594 and decide how to keep the silver-for-silk trade paying for the colony, when the king of Spain wants to limit it, Chinese merchants run it, and rivals want to take it."
  }

};
