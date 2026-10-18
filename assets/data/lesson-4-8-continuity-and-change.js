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
    topic: "Topic 4.8",
    title: "Continuity and Change from 1450 to 1750",
    subtitle: "Economic change reached into everyday social life: who worked, who ruled, and how families and communities were organized. Argue how much changed, with evidence.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how economic developments between 1450 and 1750, such as the new demand for sugar, silver, and cloth, increased the demand for workers, and how that demand was met.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Economic Systems"
    },
    {
      target: "I can explain how those economic developments changed social structures: who was forced to work, who rose to the top, and how families lived, in places such as Barbados, Spanish America, and West Central Africa.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can write a thesis and a short argument about how much social structures changed between 1450 and 1750, and what stayed the same, connecting evidence from different Unit 4 topics.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Argumentation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can follow one economic development (plantation sugar, Potosí silver, or the demand for cloth) to the workers it needed.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain one change that development made to a social structure, such as slavery for life in Barbados, the casta ranking, or villages in West Central Africa with more women than men.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can write a thesis that names one change and one continuity, support it with evidence from at least three Unit 4 topics, and explain how two pieces of my evidence relate.",
      kc: 'Unit 4: Learning Objective N',
      theme: "Argumentation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective N',
      theme: 'Learning Objective',
      text: 'Explain how economic developments from 1450 to 1750 affected social structures over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1',
      theme: 'Transoceanic Interconnections',
      text: 'The interconnection of the Eastern and Western Hemispheres, made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.II',
      theme: 'Transoceanic Interconnections',
      text: 'Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.II.A',
      theme: 'Transoceanic Interconnections',
      text: 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns, all of which made transoceanic travel and trade possible.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2',
      theme: 'Transoceanic Interconnections',
      text: 'Although the world’s productive systems continued to be heavily centered on agriculture, major changes occurred in agricultural labor, the systems and locations of manufacturing, gender and social structures, and environmental processes.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.II',
      theme: 'Transoceanic Interconnections',
      text: 'The demand for labor intensified as a result of the growing global demand for raw materials and finished products. Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed and intensified.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3',
      theme: 'Transoceanic Interconnections',
      text: 'Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.ii',
      theme: 'Transoceanic Interconnections',
      text: 'Economic disputes led to rivalries and conflict between states.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Follow the Trade to the People: How It Worked",
    intro: "The First & 10 tells the story. These cards take it apart in three steps: how the new trade needed more workers, what that did to society where the work was forced, and what stayed the same, with the moves you need to turn the evidence into an argument.",
    videos: [],
    segments: [
      {
        title: "From Ships to Demand to Workers",
        bullets: [
          "Ships built from borrowed knowledge, the compass from China and the astrolabe and tables of the sky from Greek, Islamic, and Jewish astronomers, could cross an ocean and come back. That joined the two halves of the world and transformed trade.",
          "Three economic developments came down that road: new demand for sugar, tobacco, cotton cloth, and silk; **silver** from Potosí and Mexico, a large share of it pulled to China; and rulers' tools such as mercantilist laws and the VOC. Rivals fought over the money, from Diu in 1509 to the Anglo-Dutch Wars of 1652 to 1674.",
          "All that demand needed workers. Historians estimate that fewer than 300,000 Africans were forced onto ships for the Americas in the 1500s, and more than 2.5 million from 1701 to 1750. Spain drafted Andean men to Potosí through the old Inca **mit’a**. And **peasant and artisan labor**, old work done at home and in workshops, grew in Europe, India, and China."
        ],
        image: {
          title: "A silver coin from Potosí, 1651",
          caption: "An eight-reales silver coin, the \"piece of eight,\" struck at the mint of Potosí in 1651. Silver like this paid for Asian goods and Chinese taxes. Münzkabinett, Staatliche Museen zu Berlin.",
          url: "../assets/images/topics/4-5/potosi-8-reales-1651.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:8_reales_de_1651_(Potos%C3%AD)_-_reverso.jpg"
        }
      },
      {
        title: "Where the Work Was Forced, Society Was Remade",
        bullets: [
          "On Barbados, planters had only just begun to make sugar when Richard Ligon arrived in 1647. He wrote that the island was \"divided into three sorts of men, viz. Masters, Servants, and slaves.\" Indentured servants worked for a set number of years; the enslaved and their children were held \"for ever.\" By 1679 a count found about 37,700 enslaved people and about 20,000 white settlers. A small group of rich **planters**, a new elite, ruled an enslaved majority, and **chattel slavery** was tied to race.",
          "In Spanish America, colonial society ranked people by ancestry, the **casta** system, and silver, land, and trade made many creole families rich, a new economic elite.",
          "In Africa, about two of every three people carried away in the Atlantic trade were male. Parts of West Central Africa were left with more women than men, and historians argue that women did more of the farming. The trade made some states, like Asante, stronger, while Afonso I of Kongo protested in 1526 that it was carrying off \"the children of our nobles and vassals.\""
        ],
        image: {
          title: "A sugar plantation in Dutch Brazil (detail)",
          caption: "Detail from Brazilian Landscape, an oil painting by the Dutch artist Frans Post, 1660s, painted in the Netherlands for European buyers years after he left Brazil: Black workers at a sugar works below the owner's house. National Gallery of Ireland.",
          url: "../assets/images/topics/4-3/frans-post-sugar-works-detail-1660s.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Frans_Post_-_Engenho_de_A%C3%A7%C3%BAcar_(Dublin).jpg"
        }
      },
      {
        title: "What Stayed, and How to Argue It",
        bullets: [
          "Most people still farmed. The College Board's own sentence about the period begins with that: production \"continued to be heavily centered on agriculture.\" Spinners, weavers, and silk families did work their grandparents knew, at home and as a family, only more of it, for buyers far away. Rulers who inherited their thrones and nobles with privileges stayed on top, and Asian merchants kept the Indian Ocean trading.",
          "To argue, connect the evidence. One piece can **lead to** another (sugar demand, then plantations, then a huge slave trade). Two can show **the same pattern** in two places (spinners in Holland and weavers in India, both doing old work in larger amounts). And two can make **a contrast** (an Andean man drafted far from home to the mine, and a weaver in India still working at home).",
          "A strong thesis names a change, a continuity, and the reason: where did the new trade change social structures most, where did it change them least, and why?"
        ],
        image: {
          title: "A weaver's workshop in the Netherlands, 1659",
          caption: "Two weavers at a large loom, in a room that also holds a spinning wheel and a cradle, painted by Cornelis Decker in 1659: work done at home. Rijksmuseum.",
          url: "../assets/images/topics/4-5/weavers-decker-1659.jpg",
          sourceUrl: "https://www.rijksmuseum.nl/en/collection/SK-A-2562"
        }
      }
    ]
  },

  map: {
    title: "Where the Trade Reached People, 1450 to 1750",
    url: "../assets/images/instructional-maps/topic-4-8.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-8.svg",
    caption: "Ten places where the new global trade changed people's lives, sorted into three kinds: forced labor and new rankings that built new societies, a trade that changed families and states, and old work that grew.",
    intro: "Use the map to follow the trade to the people. Every place on it sits at one end of the same trade. The colors sort the places into three kinds; the key says which is which.",
    prompt: "Find ONE place where forced labor or a new ranking built a new kind of society and ONE place where old work grew. For each, name the place and the people whose lives changed, and say what changed for them. Then say which of the two places changed more."
  },

  deepReading: {
    title: "Follow the Trade to the People",
    desc: "A textbook-depth companion on how borrowed knowledge built the ocean road, how sugar, silver, and cloth increased the demand for workers, how Barbados became a society of masters, servants, and slaves, how the slave trade changed families and states in Africa, what stayed the same, and how to connect evidence into a thesis. Optional, and the chapter to read before the Era 3 exam.",
    url: "deep-reading-topic-4-8-continuity-and-change.html"
  },

  first10: {
    title: 'First & 10: Follow the Trade to the People',
    embedUrl: 'first-and-10-topic-4-8-continuity-and-change-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.8 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Follow the Trade to the People",
    intro: "Use the cards to build one claim about how the new global trade changed, or did not change, people's lives between 1450 and 1750: the silver mountain at Potosí, a Caribbean sugar works, canoes on the Gold Coast, a casta painting from Mexico, a Chinese print of women reeling silk, and a cotton cloth painted in India.",
    prompt: "Choose one card that shows a change in a social structure and one card that shows something that stayed the same. Make one claim that uses both."
  },

  primarySource: {
    title: "Primary Source: Richard Ligon on Barbados, 1657",
    intro: "Richard Ligon was an Englishman who sailed to Barbados, a small English island in the Caribbean, in 1647, when its planters had only just begun to make sugar. He lived on a sugar plantation that his traveling companion, Thomas Modyford, had bought a half share of, helped run it, and stayed about three years. Back in England, he wrote a description of the island, published in London in 1657. These are two passages from it, with the spelling and some punctuation modernized. Words in brackets explain old words.",
    text: "Some of them who began upon small fortunes are now risen to very great and vast estates. The Island is divided into three sorts of men, viz. [namely] Masters, Servants, and slaves. The slaves and their posterity [children and descendants], being subject to their Masters for ever, are kept and preserved with greater care than the servants, who are theirs but for five years, according to the law of the Island. So that for the time, the servants have the worse lives, for they are put to very hard labour, ill lodging, and their diet very slight. ... Now for our fortunes, they are not only preserved, but made by the powerful operation of this plant [sugarcane]. Colonel James Drax, whose beginning upon that Island was founded upon a stock not exceeding 300 l. [pounds] sterling, has raised his fortune to such a height, as I have heard him say, that he would not look towards England, with a purpose to remain there, the rest of his life, till he were able to purchase an estate of ten thousand pound land yearly [land that would bring him 10,000 pounds a year] ... and all by this plant of Sugar.",
    questions: [
      "How does Ligon say Barbados was divided? Explain the difference he describes between the servants and the slaves, and which difference lasted \"for ever.\"",
      "Ligon says the slaves were \"kept and preserved with greater care than the servants.\" Ligon lived on and helped run a sugar plantation. How might his position shape that claim, and what other evidence would you want before you believed it?",
      "Choose ONE other piece of Unit 4 evidence: the casta ranking in Spanish America, the mit’a at Potosí, or Indian weavers making more cloth for buyers overseas. Explain how it relates to Ligon's evidence: does one lead to the other, do they show the same pattern, or do they make a contrast?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: A Village in West Central Africa, About 1700",
    desc: "You are a woman in a farming village inland from the Atlantic coast of West Central Africa, about 1700. You farm with a hoe, as the women of your village have done for as long as anyone remembers. This season, you are planting more fields than your mother ever did.",
    intro: "Two years ago, raiders carried off three young men from the village. Other men have gone to fight in the wars between the kingdoms of the region, and the captives taken in those wars are marched to the coast and traded to European ships. Fewer men in the village means more work for the women who stay.",
    detail: "In your field grows cassava, a root that came across the ocean from Brazil on Portuguese ships. It survives drought and locusts, so your family eats it when the other crops fail. At the market, traders offer cotton cloth that Portuguese merchants brought to the coast, cloth they say was woven in India, and that they trade there for captives. Your daughter is old enough now to work beside you in the field.",
    prompt: "Your daughter asks what has changed since you were her age, and what has stayed the same. Write what you tell her: one thing about your work, one thing about your village or your family, and one thing you hope she will never see."
  },

  beInTheRoom: {
    url: '',
    desc: ''
  }

};
