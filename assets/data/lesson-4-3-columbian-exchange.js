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
    subtitle: "How contact between Eastern and Western Hemispheres after 1492 transferred plants, animals, diseases, and people, and produced the largest demographic catastrophe in human history",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the Columbian Exchange transferred new crops and animals between hemispheres and assess how these transfers changed diets, economies, and population patterns.",
      kc: 'KC-4.1.V.B; KC-4.1.V.C',
      theme: "Humans and the Environment"
    },
    {
      target: "I can describe the catastrophic impact of Old World diseases on indigenous American populations and explain why those populations were so vulnerable to European pathogens.",
      kc: 'KC-4.1.V.A',
      theme: "Humans and the Environment"
    },
    {
      target: "I can analyze the economic, social, and environmental consequences of the Columbian Exchange, including the origins of the Atlantic slave trade and global silver flows, and connect them to the demographic collapse of indigenous American peoples.",
      kc: 'KC-4.1.V',
      theme: "Humans and the Environment"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name at least two crops transferred from the New World to the Old World and two transferred from the Old World to the New, and explain the long-term consequences of each transfer.",
      kc: 'KC-4.1.V.B; KC-4.1.V.C',
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain the concept of a 'virgin soil epidemic' and explain why indigenous American populations lacked immunity to Old World diseases, and connect this to population collapse estimates.",
      kc: 'KC-4.1.V.A',
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can connect the demographic collapse of indigenous American populations to the origins of the Atlantic slave trade, and explain how American silver affected global trade patterns.",
      kc: 'KC-4.1.V',
      theme: "Humans and the Environment"
    }
  ],

  collegeBoardKeyConcepts: [
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
    title: "The Great Exchange: Crops, Disease, and Global Transformation",
    intro: "Use these cards to explain how the biological contact between the Eastern and Western Hemispheres after 1492 produced three interconnected transformations: a global exchange of crops and animals that changed diets and populations worldwide, a catastrophic epidemic that killed the majority of the indigenous American population, and economic and social consequences that created the conditions for the Atlantic slave trade and global capitalism.",
    videos: [],
    segments: [
      {
        title: "Crops and Animals: A World Transformed",
        bullets: [
          "**New World crops moving east** transformed Afro-Eurasian agriculture and demographics. The **potato**, calorie-dense, easily grown in cool northern climates, became a dietary staple in Ireland, Germany, and Russia, supporting population growth in regions where wheat had struggled. **Maize** (corn) became a staple across sub-Saharan Africa and parts of China, providing calories in environments where other grains were unreliable. **Tomatoes** transformed Italian and Mediterranean cuisine. **Cacao** became chocolate. **Tobacco** became a global commodity.",
          "**Old World introductions moving west** transformed the Americas with equal force. The **horse**, absent from the Americas since the Ice Age, arrived with the Spanish and within a century had been adopted by indigenous Plains peoples, transforming cultures like the Comanche, Lakota, and Cheyenne into highly mobile equestrian societies based on buffalo hunting. **Cattle, pigs, and sheep** provided new protein sources but also consumed native vegetation, beginning the transformation of American grasslands.",
          "**Sugarcane**, originally from New Guinea, cultivated across the Islamic world, introduced to the Americas by Columbus, proved enormously profitable in Caribbean and Brazilian plantations. Sugar's profitability drove demand for intensive labor that indigenous populations could not supply (due to demographic collapse) and created the primary economic engine of the Atlantic slave trade.",
          "The crop exchange was not symmetric in its effects: New World crops generally increased populations in regions where they spread, while Old World introductions (especially animals and pathogens) decimated populations in the Americas. The net demographic effect of the Columbian Exchange was to dramatically increase Afro-Eurasian populations over the long term while devastating the Americas in the short and medium term."
        ],
        image: {
          title: "Waldseemüller Map, the world before and after contact",
          caption: "The 1507 Waldseemüller map represents the moment just before the full consequences of transoceanic contact became apparent. Within decades of this map, the biological exchanges it set in motion would transform every ecosystem on earth.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg"
        }
      },
      {
        title: "The Catastrophe: Disease and Demographic Collapse",
        bullets: [
          "The most devastating consequence of hemispheric contact was disease. Afro-Eurasian populations had lived with **smallpox, measles, influenza, typhus, and bubonic plague** for millennia, and while these diseases were deadly, most populations had acquired some degree of immunity through generations of exposure. Indigenous American populations had no such exposure, no immunity, no evolved defenses, no prior encounter with any of these pathogens.",
          "A **'virgin soil epidemic'** occurs when a disease enters a population with no prior exposure: the disease spreads explosively and kills at far higher rates than in populations with any immunity. Smallpox in an unexposed population could kill 30–50% of everyone it infected. When multiple diseases arrived simultaneously, as happened in the Americas after 1492, the cumulative death toll was catastrophic.",
          "**Tenochtitlan, 1520**: a smallpox epidemic brought by soldiers in Hernán Cortés's army swept through the Aztec capital before the Spanish military conquest was complete. The disease killed Emperor Cuitláhuac (who died of smallpox eighty days after taking power) and devastated the city's population and its ability to organize resistance. The siege of Tenochtitlan in 1521 was in significant part completed against a population already weakened by epidemic disease.",
          "The scale of the catastrophe defies easy comprehension: historians estimate that **50–90% of indigenous American populations died within the century following European contact**, from a pre-contact population that may have been 50–70 million people. This demographic collapse was not primarily caused by European military violence; it was caused by pathogens that traveled invisibly ahead of any army, killing populations that had no defense against them."
        ],
        image: {
          title: "Florentine Codex, Smallpox in Tenochtitlan",
          caption: "An illustration from the Florentine Codex (compiled c. 1550–1580), depicting the smallpox epidemic in Tenochtitlan. This indigenous Nahuatl source, compiled by Aztec informants under the direction of Friar Sahagún, provides one of the most direct accounts of the epidemic's devastation.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "Consequences: Silver, Slavery, and a Transformed World",
        bullets: [
          "The demographic collapse created an immediate **labor crisis** for European colonists: they needed workers to operate mines and plantations but the indigenous populations they had planned to exploit had been decimated. The **encomienda system**, which had granted Spanish colonists rights to indigenous labor, became unworkable as populations collapsed.",
          "The solution was the **Atlantic slave trade**. Beginning with the Portuguese in the 1440s, European slavers transported approximately **12 million enslaved Africans** to the Americas between c. 1500 and c. 1850, one of the largest forced migrations in human history. The primary driver was labor demand in sugar, tobacco, cotton, and silver-mining operations that required intensive work that colonists themselves were unwilling to perform and that epidemic disease had made indigenous populations unable to provide.",
          "**American silver**, particularly from the enormous silver deposits at **Potosí** in modern Bolivia (discovered 1545), transformed global trade. Spanish silver flowed eastward through trade networks to China, which needed silver to pay taxes under the Ming fiscal system, creating a global trade circuit connecting the Americas, Europe, Africa, and Asia. The influx of American silver caused significant inflation across the Spanish Empire and disrupted the monetary systems of much of the Old World.",
          "**Environmental transformation** accompanied human demographic change: introduced livestock overgrazed native vegetation; introduced Old World weeds and plants replaced native species; the depopulation of previously farmed land allowed forest regrowth across vast areas of the Americas. European observers in the 17th and 18th centuries who described 'virgin wilderness' were often looking at land that had been actively farmed and managed for centuries before epidemic disease had removed its human inhabitants."
        ],
        image: {
          title: "Casta Painting, Colonial Social Hierarchy",
          caption: "A casta painting from colonial Mexico, depicting the elaborate racial hierarchy that developed from the mixture of European, indigenous, and African peoples in colonial Spanish America, itself a direct consequence of the demographic and social transformations set in motion by the Columbian Exchange.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Columbian Exchange: Flows Between Hemispheres",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    caption: "A world map showing the major regions involved in the Columbian Exchange. Use this to trace the flows of crops (New World to Old), animals (Old World to New), diseases (Old World to New), and people (Africa to Americas via forced migration).",
    intro: "Use the world map to visualize the geographic scope of the Columbian Exchange. Consider how the Atlantic Ocean, once a barrier that had separated the hemispheres for 10,000 years, became a highway for the transfer of plants, animals, diseases, and people after 1492. Notice that the flows were not symmetric: crops generally moved in both directions, but disease moved overwhelmingly from east to west, and enslaved people moved overwhelmingly from Africa to the Americas.",
    prompt: "Using the map, trace the three most consequential transfers of the Columbian Exchange: New World crops moving east, Old World diseases moving west, and enslaved Africans moving west. For each, identify the source region, the destination region, and the major consequence."
  },

  first10: {
    title: 'First & 10: The Great Exchange',
    embedUrl: 'first-and-10-topic-4-3-columbian-exchange-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.3 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Disease, Demographics, and the Logic of the Exchange",
    intro: "Use the evidence below to analyze specific consequences of the Columbian Exchange. Strong historical analysis connects individual pieces of evidence to broader patterns, disease to demographic collapse, demographic collapse to labor shortage, labor shortage to the slave trade.",
    prompt: "Choose one piece of evidence and explain how it illustrates a specific consequence of the Columbian Exchange. Connect your evidence to a broader historical argument about how the exchange transformed global demographics, economics, or social structures.",
    items: [
      { title: "Florentine Codex, indigenous account of smallpox in Tenochtitlan", detail: "Evidence of the disease catastrophe from an indigenous Nahuatl perspective, compiled by Aztec informants under Friar Sahagún. This source describes the physical symptoms and the social chaos of epidemic, bodies too numerous to bury, healers unable to treat what they had never seen before. Evaluate both what this source reveals and what it represents as an act of indigenous historical documentation." },
      { title: "Potosí silver production records, 8 million enslaved and coerced workers", detail: "Evidence that the extraction of American silver required an enormous forced labor system, at Potosí, the mita system coerced indigenous workers into mining under conditions that killed tens of thousands. Connect this to the broader pattern: American resource extraction required labor; demographic collapse eliminated the original labor pool; that gap was filled by coerced labor." },
      { title: "The Irish potato famine (1845–1852), 1 million dead, 2 million emigrated", detail: "Evidence of the long-term consequences of the Columbian Exchange: the potato, a New World crop, had become so essential to Irish agricultural survival by the 19th century that a single pathogen (potato blight) caused the deaths of 1 million people and the emigration of 2 million more. This demonstrates how thoroughly the crop transfers of the Exchange had restructured the economies and food security of receiving regions." }
    ]
  },

  primarySource: {
    title: "Primary Source: Florentine Codex, The Smallpox Epidemic in Tenochtitlan, c. 1520",
    intro: "The Florentine Codex was compiled by Friar Bernardino de Sahagún between c. 1550 and 1580, working with Aztec informants who described events from their own perspective in Nahuatl. Book 12 describes the Spanish conquest of Tenochtitlan, including the smallpox epidemic of 1520. This adapted passage reflects the Nahuatl account of the epidemic.",
    text: "Before the Spanish appeared to us, first there came to be prevalent a great sickness, a plague. It was in Tepeilhuitl that it originated, that it spread over the people, and it greatly afflicted them. It covered many people; it spread over them everywhere. It caused great havoc among them; many people died of it. They could not walk; they only lay in their resting places and beds. They could not move; they could not stir; they could not change position, nor lie on one side, nor face down, nor on their backs. And if they stirred, much did they cry out. Great was its destruction. Covered, mantled with pustules, very many people died of them. And very many starved; there was death from hunger, for none could take care of the sick; nothing could be done for them. And on some the pustules were widely separated; they suffered not greatly, neither did many of them die. Yet many people's faces were spoiled; some lost an eye, others were blinded.",
    questions: [
      "What does this source reveal about the physical and social impact of the smallpox epidemic on the population of Tenochtitlan? What specific details indicate the scale of the catastrophe?",
      "This account was compiled by indigenous informants speaking in Nahuatl, translated and recorded by a Spanish friar. How might this complex of perspectives, indigenous memory, Nahuatl language, Spanish transcription, later compilation, shape what the source preserves and what it might omit?",
      "How does this source support the argument that disease, not primarily military force, was the primary cause of indigenous demographic collapse? What would be needed to make this a complete historical argument rather than a single piece of evidence?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are an Aztec Healer in Tenochtitlan, 1520",
    desc: "It is the summer of 1520. The Spanish army that invaded Tenochtitlan has been driven out, but something they left behind is killing more people than any army. A disease no one has ever seen before is spreading through the city's population. You are a trained healer, and nothing in your knowledge or your medicine has any effect on it.",
    intro: "You trained for years in the calmecac to learn the healing arts, the properties of hundreds of plants, the signs and symptoms of every illness you have ever encountered, the prayers and rituals that accompany treatment, the careful observation of the body that distinguishes one sickness from another. You have treated wounds, fever, dysentery, broken bones. You have studied the codices that describe how the gods send illness and how healers respond.",
    detail: "This is none of those things. The disease arrived in the city weeks ago, some say it came from a man in the Spanish army, others say from the goods left behind when the Spanish fled. It spreads not through wounds or contaminated water but through the air itself, through proximity, through touch. You cannot protect yourself by keeping away from the sick; the sick are everywhere. The pustules are unlike anything in any codex you have studied. People who were healthy yesterday are prostrate today, covered in sores, unable to move or eat or drink. Entire families are dying together. The healers who work hardest among the sick are dying fastest. You have tried every treatment you know. Nothing works. You have prayed to every healing deity. You cannot stop this. And somewhere in the city, the Spanish are regrouping.",
    prompt: "Write a message to a healer in another district of Tenochtitlan, what you have observed, what you have tried, and what you believe about what is happening. What do you not understand about this disease? And what do you want the other healer to know in case you do not survive to tell them in person?"
  },

  beInTheRoom: {
    url: '',
    desc: "Step into Tenochtitlan during the smallpox epidemic of 1520, navigate the economic logic of the Atlantic slave trade, or examine the transformation of European diets as New World crops spread across the globe."
  }

};
