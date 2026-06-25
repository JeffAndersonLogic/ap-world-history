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
    topic: "Topic 4.6",
    title: "Internal and External Challenges to State Power",
    subtitle: "How colonized peoples, enslaved Africans, and rival European powers challenged maritime empires from within and without",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how indigenous peoples challenged European colonial rule — including the causes, methods, and outcomes of the Pueblo Revolt of 1680.",
      kc: 'KC-4.3.III.iii',
      theme: "Governance"
    },
    {
      target: "I can analyze how enslaved Africans resisted colonial rule through maroon communities, cultural preservation, and organized revolts.",
      kc: 'KC-5.3.III.C',
      theme: "Governance"
    },
    {
      target: "I can evaluate how competition between European powers — including commercial rivalry and military conflict — created external challenges to maritime empires.",
      kc: 'KC-4.3.III.ii',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain the specific grievances that caused the Pueblo Revolt (religious suppression, labor demands, drought), describe how Popé organized the revolt, and explain the short-term outcome — including how the revolt forced changes in Spanish colonial policy.",
      kc: 'KC-4.3.III.iii',
      theme: "Governance"
    },
    {
      criteria: "I can describe maroon communities as a form of African resistance, give one specific example (Palmares in Brazil), and explain how maroon communities represented both successful resistance and its limits.",
      kc: 'KC-5.3.III.C',
      theme: "Governance"
    },
    {
      criteria: "I can explain how Dutch commercial competition displaced the Portuguese Estado da India and describe how piracy and privateering served as tools of European state competition, connecting both to the fragility of maritime empires.",
      kc: 'KC-4.3.III.ii',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.3.III.iii',
      theme: 'Governance',
      text: 'State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level.',
      illustrativeExamples: ['Pueblo Revolts', 'Fronde', 'Cossack revolts', 'Maratha conflict with Mughals', 'Ana Nzinga’s resistance (as ruler of Ndongo and Matamba)', 'Metacom’s War (King Philip’s War)']
    },
    {
      code: 'KC-5.3.III.C',
      theme: 'Governance',
      text: 'Enslaved persons challenged existing authorities in the Americas through organized resistance.',
      illustrativeExamples: ['Establishment of Maroon societies in the Caribbean and Brazil', 'Resistance of enslaved persons in North America']
    }
  ],

  lecture: {
    title: "Resistance and Rivalry: Challenges to Maritime Empires",
    intro: "European maritime empires faced challenges from three directions: indigenous peoples who refused to accept colonial domination; enslaved Africans who resisted the system of chattel slavery by every means available; and rival European powers who competed for the same trade routes, territories, and resources. Together, these challenges reveal that empires which appeared all-powerful on paper were far more fragile in practice.",
    videos: [],
    segments: [
      {
        title: "Indigenous Resistance: The Pueblo Revolt of 1680",
        bullets: [
          "The **Pueblo peoples** of the Rio Grande valley in modern New Mexico had lived under Spanish colonial rule since 1598. For nearly a century, they endured **encomienda labor demands**, **Catholic missionary pressure** to abandon traditional religious practices (Spanish officials burned kivas and confiscated sacred objects), periodic drought, and increasing tribute demands. These conditions created deep structural grievances that had been building for decades.",
          "**Popé**, a Tewa religious leader from Ohkay Owingeh, organized the revolt across dozens of Pueblo communities — an extraordinary feat of cross-community coordination among peoples with different languages and political traditions. When Spanish officials discovered the plot and arrested several leaders, Popé launched the revolt early, on **August 10, 1680**, to prevent further arrests.",
          "Over several days, Pueblo warriors killed approximately **400 Spanish colonists and 21 of the 33 Franciscan missionaries** in the region. The remaining Spanish settlers fled south to El Paso — abandoning New Mexico entirely. For **twelve years**, the Pueblo peoples governed their own territory, restoring traditional religious practices, dissolving Spanish-imposed marriages, and rebuilding kivas.",
          "The Spanish reconquered New Mexico in 1692, but the terms of rule changed significantly: the **encomienda system was not reimposed**; Spanish authorities largely stopped suppressing Pueblo religious practices; and the colonial government became more cautious about pushing Pueblo communities to the breaking point. The Pueblo Revolt demonstrated that indigenous resistance could force real concessions from colonial powers."
        ],
        image: {
          title: "Pueblo Revolt Mural — Loren Mozley, 1936",
          caption: "A 1936 mural depicting the Pueblo Revolt of 1680 installed in Albuquerque, New Mexico. The revolt expelled Spanish colonizers from the Rio Grande valley for twelve years and forced significant changes in Spanish colonial policy after reconquest.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg"
        }
      },
      {
        title: "African Resistance: Maroon Communities and Cultural Survival",
        bullets: [
          "Enslaved Africans resisted their condition in multiple ways: slowing work, breaking tools, preserving African religious and cultural practices in modified forms, poisoning enslavers, and running away. The most sustained and remarkable form of resistance was the formation of **maroon communities** — settlements of escaped enslaved people in remote terrain, where they built autonomous societies outside colonial control.",
          "**Palmares**, in the interior of Portuguese Brazil, was the most famous and long-lasting maroon community in the Americas — existing for nearly a century (c. 1605–1694). At its height, Palmares had a population of up to **30,000 people** organized across multiple settlements, governed by a king (Ganga Zumba and later **Zumbi**), and capable of defeating multiple Portuguese military expeditions. Palmares was finally destroyed by a large-scale Portuguese military campaign in 1694; Zumbi was captured and executed in 1695.",
          "Maroon communities existed throughout the colonial world: the **Saramaka** in Dutch Suriname eventually won a formal treaty recognizing their freedom (1762); the **Maroons of Jamaica** fought two extended wars against British authorities and won a 1739 treaty that recognized their autonomous territory; **palenques** existed throughout Spanish America. Each represented a different negotiation between colonial power and African resistance.",
          "Beyond maroon communities, enslaved Africans preserved African cultures in colonial settings — adapting religions, languages, and musical traditions to new environments. **Candomblé** in Brazil, **Vodou** in Haiti, and **Santería** in Cuba all developed as syncretic blends of African religious practices with Catholic forms — representing cultural resistance that outlasted the formal institution of slavery."
        ],
        image: {
          title: "Colonial America — Resistance and Control",
          caption: "The casta painting tradition documented the racial hierarchy of colonial America. Maroon communities represented a fundamental challenge to that hierarchy — creating spaces where people who were legally property could live as free people.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg"
        }
      },
      {
        title: "European Rivalry: External Challenges to Maritime Empires",
        bullets: [
          "European maritime empires also faced challenges from each other. The **Dutch VOC** systematically displaced the **Portuguese Estado da India** from the Indian Ocean in the early 17th century — not through a single decisive battle but through superior capital, more efficient organization, and lower prices. Dutch merchants undercut Portuguese toll rates; Dutch warships were better maintained; the VOC's joint-stock structure allowed it to sustain losses that would have bankrupted the Portuguese crown. By c. 1650, the Dutch controlled most of the spice trade.",
          "In the **Atlantic world**, **piracy and privateering** were permanent features of European colonial competition. Privateers were privately owned ships authorized by a government to attack enemy shipping — a tool that allowed states to attack rivals' trade without the expense of a formal navy. **Sir Francis Drake** (authorized by Queen Elizabeth I) raided Spanish Caribbean ports in the 1570s–1580s, sacking Cartagena, Santo Domingo, and Cádiz. French pirates operated from bases in the Caribbean throughout the 17th century.",
          "By the 18th century, European colonial rivalry had escalated into what historians call the **first world war**: the **Seven Years War (1756–1763)** was fought simultaneously in North America (French and Indian War), the Caribbean, West Africa, India, and Europe. Britain's victory transformed the global colonial map — France lost most of its North American and Indian holdings; Britain emerged as the dominant colonial power.",
          "The distinction between internal and external challenges matters for analysis: internal challenges (Pueblo Revolt, maroon communities) tested the **legitimacy and reach** of colonial authority, forcing administrative reforms; external challenges (Dutch vs. Portuguese, Seven Years War) tested the **military and commercial capacity** of competing empires, redrawing colonial maps. Both types revealed that European maritime empires were more fragile than their formal claims suggested."
        ],
        image: {
          title: "World Map, c. 1700",
          caption: "By c. 1700, the global map of European empires reflected decades of commercial rivalry, military conflict, and colonial competition. The Dutch had displaced the Portuguese across much of the Indian Ocean; the British and French were competing for dominance in North America and the Caribbean.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png"
        }
      }
    ]
  },

  map: {
    title: "Resistance and Rivalry in the Colonial World, c. 1680",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    caption: "The global colonial map by c. 1680–1700 showed both the reach of European maritime empires and the zones where they faced resistance. The Pueblo Revolt expelled Spanish settlers from New Mexico; Palmares controlled a large interior zone in Brazil; the Dutch had displaced the Portuguese across the Indian Ocean.",
    intro: "Locate the key sites of resistance and rivalry: New Mexico (Pueblo Revolt, 1680), the Brazilian interior (Palmares, c. 1605–1694), the Indian Ocean (Dutch displacement of Portuguese, c. 1600–1650), and the Atlantic Caribbean (piracy and privateering throughout). Notice the geographic logic: resistance was most successful in frontier regions distant from colonial centers of power.",
    prompt: "Using the map, explain why resistance was most effective in frontier or interior regions. What geographic factors made Palmares and the Pueblo communities harder for colonial powers to control than coastal or urban settlements?"
  },

  first10: {
    title: 'First & 10: The Resistance Within',
    embedUrl: 'first-and-10-topic-4-6-internal-external-challenges-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 4.6 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Reading Resistance",
    intro: "Use the evidence below to analyze internal and external challenges to European maritime empires. Strong AP arguments about resistance require moving beyond 'they resisted oppression' to specific causes, specific methods, and specific outcomes.",
    prompt: "Choose one piece of evidence and explain what it reveals about challenges to European maritime empires. Then identify what this evidence tells us about the LIMITS of European colonial power.",
    items: [
      { title: "Pueblo Revolt account — Spanish colonial report, 1680", detail: "Spanish officials' reports of the Pueblo Revolt describe their shock at the scale and coordination of the uprising — they had not anticipated that Pueblo communities, who had appeared compliant, had maintained covert religious practices and built a cross-community network capable of coordinated military action. Use this evidence to argue about the structural conditions that made the Pueblo Revolt possible — what does Spanish officials' surprise reveal about the nature of colonial knowledge and control?" },
      { title: "Palmares military expedition records — Portuguese Brazil, 1690s", detail: "Portuguese colonial records from the final campaigns against Palmares document the difficulty of military operations in the Brazilian interior — multiple failed expeditions over decades, the need for a large professional force finally supplied by Domingos Jorge Velho in 1694. Use this evidence to argue about what Palmares demonstrates regarding the capacity of enslaved Africans to build autonomous institutions and defend them against colonial power." },
      { title: "VOC vs. Estado da India — Dutch commercial records, c. 1620", detail: "Dutch East India Company records from c. 1620 document the VOC's systematic strategy for displacing the Portuguese: offering lower toll rates, establishing rival trading posts, and using superior capital to sustain losses until Portuguese merchants withdrew. Use this evidence to argue about what the Dutch success against the Portuguese reveals about the structural weaknesses of the Estado da India model." }
    ]
  },

  primarySource: {
    title: "Primary Source: Governor Otermín on the Pueblo Revolt, August 1680",
    intro: "Governor Antonio de Otermín was the Spanish colonial governor of New Mexico when the Pueblo Revolt began on August 10, 1680. This adapted passage is from his letter to the Viceroy of New Spain, written shortly after he fled south with the surviving Spanish settlers. It is a colonial official's account of a devastating defeat — read it for what it reveals about both Spanish perceptions and the actual causes of the revolt.",
    text: "On the morning of the tenth of August, I received word that the Indians of the entire kingdom had risen in revolt. They came armed with harquebuses, swords, and other weapons looted from our dead. They killed every Spaniard they could find — men, women, and children — and all the religious who were in their districts. They destroyed the churches and burned the images of the saints. They told me, through a captive they released for the purpose, that they no longer wished to obey the King of Spain nor to pay tribute, and that their God, called Popé, had commanded them to kill every Spaniard in the kingdom. I do not know how a people who appeared so docile and submissive could have prepared this conspiracy in such perfect secrecy and with such perfect coordination across so many nations who speak different languages. I believe it was the work of the devil, who is the father of all lies and disorder. But I also cannot deny that the excesses of certain encomenderos, and the severity of the religious in demanding labor and suppressing their ceremonies, gave these people grievances which our enemies exploited.",
    questions: [
      "What does Otermín's account reveal about the structural conditions that caused the Pueblo Revolt? What specific grievances does he acknowledge, even within a document primarily focused on the Spanish defeat?",
      "Otermín attributes the revolt partly to 'the work of the devil' and partly to colonial abuses. What does this dual explanation reveal about how Spanish colonial officials understood resistance — and what it might have prevented them from understanding?",
      "Otermín expresses surprise that 'a people who appeared so docile and submissive' could have organized a coordinated revolt. What does this surprise tell us about the limits of colonial knowledge and observation — and about the nature of apparent compliance under colonial rule?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are Popé, Planning the Revolt, Summer 1680",
    desc: "You are Popé, a Tewa religious leader from Ohkay Owingeh. The Spanish authorities arrested you in 1675 for practicing traditional religion — they flogged you and executed three other religious leaders. You have spent five years building a network of resistance across forty-six Pueblo communities that speak six different languages and have different political traditions.",
    intro: "The revolt is planned for August 13. But word has reached you that Spanish officials have arrested two men from Tesuque who knew of the plan. If the Spanish interrogate them, the entire conspiracy will be exposed. You must decide: wait and risk losing everything, or launch the revolt three days early, on August 10, before the Spanish can act.",
    detail: "You sit in the kiva at Taos, where you have been coordinating with runners from the other pueblos. The kiva is the most sacred space your people have — the Spanish burned the kivas at Ohkay Owingeh in 1675 and made you watch. You think of the ceremonial objects that were confiscated, the religious leaders who were executed, the children who were forced to attend mass, the men and women who died in the mines. You have told the Pueblo people that Popé speaks for the three spirit helpers — Caudi, Tilini, and Tleume — and that they have commanded this revolt. Whether this is true in the way the Spanish understand truth, you are not sure. But you are certain that your people cannot survive another generation of this.",
    prompt: "Write two short texts: first, a message to the runners you are sending to each pueblo tonight, announcing that the revolt launches on August 10 — three days early. The message must be clear, motivating, and brief (runners carry knotted cords, one knot per remaining day). Second, write what you are thinking but cannot say to anyone — what you hope for, what you fear, what you are uncertain about. What do you believe will happen if the revolt succeeds? What do you believe will happen if it fails?"
  },

  beInTheRoom: {
    url: '',
    desc: "Plan the Pueblo Revolt with Popé, negotiate a treaty with Portuguese authorities as Zumbi of Palmares, or compete for Indian Ocean trade routes as a Dutch VOC captain outmaneuvering a Portuguese carrack."
  }

};
