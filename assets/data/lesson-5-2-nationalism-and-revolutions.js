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
    unit: "Unit 5: Revolutions",
    topic: "Topic 5.2",
    title: "Nationalism and Revolutions",
    subtitle: "How Enlightenment ideas fueled the Atlantic Revolutions — and why the Haitian Revolution was the most radical test of whether universal rights were actually universal",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how Enlightenment ideas drove the Atlantic Revolutions and shaped new political systems in the Americas and Europe.",
      kc: "KC-5.2.I.A",
      theme: "Governance / Social Structures"
    },
    {
      target: "I can explain the causes and significance of the Haitian Revolution as the most radical Atlantic Revolution — the only one that simultaneously challenged colonialism, slavery, and racial hierarchy.",
      kc: "KC-5.2.I.B",
      theme: "Social Structures / Governance"
    },
    {
      target: "I can explain how nationalism emerged from revolutionary movements and became a destabilizing force in multiethnic empires during the 19th century.",
      kc: "KC-5.2.I.C",
      theme: "Governance / Nationalist Movements"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe the American, French, Haitian, and Latin American revolutions; explain one way each drew on Enlightenment ideas; and explain one way each failed to live up to those ideas. I can explain the role of structural conditions (financial crisis, taxation, war debt) alongside Enlightenment ideas in causing each revolution.",
      kc: "KC-5.2.I.A",
      theme: "Governance"
    },
    {
      criteria: "I can explain why the Haitian Revolution was uniquely radical — because it was simultaneously a revolution against colonialism, slavery, and racial hierarchy. I can identify at least two specific causes of the Haitian Revolution and explain how Haiti's independence on January 1, 1804 challenged the assumptions of every other Atlantic revolutionary state.",
      kc: "KC-5.2.I.B",
      theme: "Social Structures"
    },
    {
      criteria: "I can define nationalism and explain how it emerged from Atlantic revolutionary movements. I can give at least one specific example of nationalism challenging a multiethnic empire (Greek independence, Italian unification, German unification, Ottoman decline) and explain the mechanism by which nationalist movements destabilized imperial authority.",
      kc: "KC-5.2.I.C",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.2.I.A',
      theme: 'Governance',
      text: 'Atlantic Revolutions — American (1776), French (1789), Haitian (1791–1804), and Latin American (1810–1825) — drew on Enlightenment ideas about natural rights, popular sovereignty, and the social contract to challenge monarchies and colonial rule. Each revolution was driven by a combination of Enlightenment ideology AND specific structural conditions: taxation policy, financial crisis, war debt, and class tensions.',
      illustrativeExamples: ['American Declaration of Independence (1776)', "French Declaration of the Rights of Man and Citizen (1789)", 'Toussaint Louverture', 'Simón Bolívar', "Hidalgo's Grito de Dolores (1810)", 'Seven Years War as structural cause']
    },
    {
      code: 'KC-5.2.I.B',
      theme: 'Social Structures / Governance',
      text: 'The Haitian Revolution (1791–1804) was the most radical Atlantic Revolution because it was simultaneously a revolution against colonialism, slavery, and racial hierarchy — the only Atlantic revolution led by enslaved and formerly enslaved people who claimed the universal rights that European revolutionaries refused to extend to them. Haiti became the first Black republic in the Western Hemisphere on January 1, 1804.',
      illustrativeExamples: ['Bois Caïman ceremony (August 1791)', 'Toussaint Louverture', "Napoleon's reimposition of slavery (1802)", "Haiti's independence (January 1, 1804)", 'French reparations demands (150 million francs)', 'First Black republic in the Western Hemisphere']
    },
    {
      code: 'KC-5.2.I.C',
      theme: 'Governance / Nationalist Movements',
      text: "Nationalism — the ideology that people sharing a common culture, language, history, or ethnicity should govern themselves — emerged from Atlantic revolutionary movements. By the 19th century, nationalism had become a powerful destabilizing force in multiethnic empires (Ottoman, Habsburg, Russian), fueling independence movements and challenging imperial authority across Europe and beyond.",
      illustrativeExamples: ['Greek War of Independence (1821–1829)', 'Serbian independence', 'Italian Risorgimento', 'German unification under Bismarck', "Ottoman Empire's decline and nationalist pressures", 'Latin American independence movements']
    }
  ],

  lecture: {
    title: "The Atlantic Revolutions and the Rise of Nationalism",
    intro: "Between 1776 and 1825, a wave of revolutions swept the Atlantic world — each drawing on the vocabulary of the Enlightenment, each claiming to establish a new political order based on natural rights and popular sovereignty, and each defining those rights very differently depending on who was doing the defining. Understanding the Atlantic Revolutions means understanding both their common Enlightenment foundations and their radically different outcomes.",
    videos: [],
    segments: [
      {
        title: "The American and French Revolutions: Enlightenment in Action",
        bullets: [
          "The **American Revolution** (1776–1783) drew directly on Locke's natural rights theory and Montesquieu's separation of powers. The **Declaration of Independence** (1776) invoked Locke almost word for word: 'all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.' But structural conditions mattered too: the Seven Years War (1756–1763) had left Britain with enormous debt, leading to new taxes on the colonies ('taxation without representation'). Both Enlightenment ideas AND fiscal crisis caused the Revolution — AP causation requires identifying both.",
          "The American Revolution's limits: it created a functioning republic based on Enlightenment principles, but it preserved slavery (approximately 20% of the colonial population was enslaved), restricted political participation to white male property owners, and dispossessed Indigenous peoples from their land. The Declaration's 'all men' explicitly did not include enslaved Africans or women in the political rights it claimed.",
          "The **French Revolution** (1789–1799) was more radical in its initial promises and more violent in its execution. The **Declaration of the Rights of Man and Citizen** (1789) declared universal natural rights and popular sovereignty, and abolished feudalism and aristocratic privileges. The radical phase — the **Terror** (1793–1794), led by Robespierre — executed tens of thousands, including Louis XVI, in the name of the general will. In 1794, France became the first European power to abolish slavery in its colonies — partly because Toussaint Louverture had allied with France. Napoleon reversed this in 1802.",
          "Structural causes of the French Revolution: France was nearly bankrupt after supporting the American Revolution. The tax system exempted the aristocracy and the Church — placing the burden entirely on commoners. Food shortages in 1788–1789 pushed ordinary people to desperation. The financial crisis created the conditions; Enlightenment ideas provided the vocabulary for what came next."
        ],
        image: {
          title: "Columbus Taking Possession — Atlantic World Context",
          caption: "The Atlantic Revolutions took place in a world shaped by European colonialism, the Atlantic slave trade, and global commercial networks. The same Atlantic world that produced enormous wealth for European colonial powers also produced the contradictions — between proclaimed universal rights and the reality of slavery and colonial rule — that the Haitian Revolution would expose most sharply.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg"
        }
      },
      {
        title: "The Haitian Revolution: The Most Radical Atlantic Revolution",
        bullets: [
          "The **Haitian Revolution** (1791–1804) was the most radical of the Atlantic Revolutions — the only one that was simultaneously a revolution against colonialism, against slavery, and against racial hierarchy. It was led by enslaved and formerly enslaved people who explicitly claimed the universal rights that French and American revolutionaries had declared for all humanity but refused to extend to them. Saint-Domingue (Haiti) was France's most profitable colony — producing 40% of Europe's sugar and 60% of its coffee, all on the labor of approximately 500,000 enslaved people.",
          "The revolution began in August 1791 partly at the **Bois Caïman** ceremony, where enslaved people made a covenant to fight for freedom. **Toussaint Louverture** — a formerly enslaved man of exceptional military and political genius — emerged as the dominant leader. He built a disciplined army that successively defeated the Spanish (who had invaded), the British (who invaded in 1793 hoping to take the colony), and eventually the French army sent by **Napoleon Bonaparte** in 1802 to reimpose slavery.",
          "The context of hypocrisy was explicit: when the French Revolution declared universal rights in 1789, free people of color in Saint-Domingue immediately demanded legal equality — and were denied. When France briefly abolished slavery in 1794, it was partly because Toussaint had allied with France against Spain. When Napoleon sent 50,000 soldiers to reimpose slavery in 1802, the Haitian revolutionary forces defeated them (partly through yellow fever, which killed tens of thousands of French troops). **Haiti declared independence on January 1, 1804** — the first Black republic in the Western Hemisphere and only the second independent state in the Americas.",
          "The aftermath: Haiti's independence terrified slaveholders across the Atlantic world. France demanded **150 million francs** (later reduced to 90 million) as the price of diplomatic recognition — an enormous debt that Haiti did not finish paying until 1947. This 'independence debt' structurally impoverished Haiti for a century and a half. The United States refused to recognize Haiti until 1862 — during the Civil War — because Southern slaveholders feared the implications. The Haitian Revolution is the clearest test of whether Enlightenment universalism was real: it was real enough to inspire a revolution, but the existing Atlantic world punished Haiti for taking it seriously."
        ],
        image: {
          title: "Florentine Codex — Demographic Catastrophe as Context",
          caption: "The demographic catastrophe of the Columbian Exchange — which reduced indigenous populations by 50–90% — created the labor vacuum that the Atlantic slave trade filled. The millions of enslaved Africans brought to Saint-Domingue as replacements were the same people who, in 1791, would claim the universal rights that European and American revolutionaries had proclaimed.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "Latin American Independence and the Rise of Nationalism",
        bullets: [
          "**Latin American independence movements** (1810–1825) completed the Atlantic Revolutionary wave. They were largely led by **creoles** — people of European descent born in the Americas — who resented Spanish-born **peninsulares** monopolizing senior colonial offices, resented Enlightenment-inspired trade restrictions, and were inspired by the American and French examples. **Simón Bolívar** (Venezuela, Colombia, Ecuador, Peru, Bolivia) and **José de San Martín** (Argentina, Chile) led military campaigns across South America, explicitly invoking Enlightenment ideas about natural rights and republican government.",
          "**Miguel Hidalgo** launched Mexico's independence movement in September 1810 with his '**Grito de Dolores**' — a call to revolt that drew on indigenous and mestizo populations and was more socially radical than most other Latin American independence movements. Mexico's independence in 1821 resulted in a conservative constitutional monarchy before a republic was established.",
          "The limits: Latin American independence produced conservative outcomes in most cases. Creole elites replaced peninsulares at the top of the social hierarchy, but the **casta system**, the Catholic Church's power, and the plantation economy all continued. Indigenous peoples and enslaved Africans gained formal legal equality in most new constitutions — but formal equality and social reality diverged sharply. Bolívar himself became increasingly authoritarian, lamenting that 'America is ungovernable.'",
          "**Nationalism** — the ideology that emerged from Atlantic Revolutionary movements — held that people sharing a common culture, language, history, or ethnicity should have their own self-governing state. Initially linked to liberal and democratic ideals ('the right of peoples to self-determination'), nationalism became the most powerful destabilizing force in 19th-century politics. The **Ottoman Empire** faced Greek independence (1821–1829), Serbian autonomy, and Bulgarian nationalism. The **Habsburg Empire** faced Hungarian, Czech, Italian, and German nationalist movements. The **Russian Empire** faced Polish nationalist uprisings. For the AP exam, nationalism matters primarily as a **cause** of the instability and eventual collapse of multiethnic empires in the 19th and early 20th centuries."
        ],
        image: {
          title: "Ferdinand Magellan — Atlantic World Connected",
          caption: "The Atlantic world that produced the Age of Revolutions had been built over three centuries of European exploration, colonialism, and forced migration. The same global connections that made European empires wealthy also created the contradictions — between proclaimed universal rights and the reality of slavery and colonial rule — that the Atlantic Revolutions would expose.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Atlantic Revolutionary World, c. 1776–1825",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg",
    caption: "Between 1776 and 1825, a wave of revolutions swept the Atlantic world — from the thirteen British colonies in North America to the Caribbean to the Spanish and Portuguese colonies of Latin America. Each revolution drew on Enlightenment ideas while producing very different outcomes.",
    intro: "Trace the Atlantic Revolutionary wave from north to south: American Revolution (1776), French Revolution (1789), Haitian Revolution (1791–1804), Latin American independence (1810–1825). Notice how these revolutions spread across the Atlantic world and how each was shaped by its local context — who held power, who was enslaved, who was colonized.",
    prompt: "Using the map, explain why the Haitian Revolution happened in Saint-Domingue rather than somewhere else. What specific features of Saint-Domingue's situation — its population, its wealth, its relationship to the French Revolution — made it uniquely explosive? What does this geographic and demographic specificity reveal about the causes of the Haitian Revolution?"
  },

  first10: {
    title: 'First & 10: The Revolutionary Atlantic',
    embedUrl: 'first-and-10-topic-5-2-nationalism-and-revolutions-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.2 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: The Atlantic Revolutions Compared",
    intro: "Use the evidence below to analyze how different Atlantic Revolutions applied Enlightenment ideas — and how each defined the limits of those applications differently. Strong AP comparison arguments require specific evidence and a clear explanation of both similarities and differences.",
    prompt: "Choose one piece of evidence. Explain what it reveals about either the similarities or the differences among the Atlantic Revolutions. Then explain what that comparison reveals about the relationship between Enlightenment ideals and political reality.",
    items: [
      { title: "American Declaration of Independence (1776)", detail: "Thomas Jefferson wrote: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.' Jefferson was the owner of over 600 enslaved people over his lifetime. Analyze: how does this tension between Jefferson's words and his practice define the limits of the American Revolution's Enlightenment principles?" },
      { title: "Toussaint Louverture's Address to His Soldiers, c. 1797", detail: "Toussaint Louverture addressed his army: 'I was born a slave, but nature gave me the soul of a free man. Friends and brothers, God who created the sun which gives us light, who rouses the waves and rules the storm, though hidden in the clouds, he watches us. He sees all that the white man does. The god of the white man inspires him with crime, but our god calls upon us to do good works. Our god, who is good to us, orders us to revenge our wrongs. He will direct our arms and aid us. Throw away the image of the god of the whites who has so often caused us to weep, and listen to the voice of liberty, that speaks in the heart of all of us.' How does Toussaint use and transform Enlightenment language? How does his invocation of God differ from the philosophes' invocation of reason?" },
      { title: "Simón Bolívar, Jamaica Letter (1815)", detail: "Bolívar wrote: 'It is a grandiose idea to think of consolidating the New World into a single nation, united by pacts into a single bond. As it has a single origin, a single language, the same customs, and one religion, it ought to have a single government to confederate the different states as they are formed... I do not desire to see America fashioned into the greatest nation in the world so much for its extent and wealth as for its freedom and glory. Although I seek perfection for the government of my country, I cannot persuade myself that the New World can, at the moment, be organized as a great republic.' Analyze: how does Bolívar's vision of Latin American unity differ from the American and French revolutionary visions? What does his skepticism about immediate democracy reveal about the limits of Enlightenment universalism in the Latin American context?" }
    ]
  },

  primarySource: {
    title: "Primary Source: Toussaint Louverture, Address to His Army, c. 1797–1798",
    intro: "Toussaint Louverture (c. 1743–1803) was born enslaved on the French colony of Saint-Domingue (present-day Haiti). He became the dominant military and political leader of the Haitian Revolution, defeating Spanish, British, and eventually French armies before being captured through treachery in 1802. He died in a French prison in 1803, months before Haiti's independence. This adapted passage is drawn from his speeches and correspondence to his army during the revolutionary period. Toussaint was extraordinarily literate for a formerly enslaved person — he had unusual access to books and learning as a coachman before the revolution — and his writing demonstrates a sophisticated engagement with Enlightenment ideas.",
    text: [
      "Brothers and friends: I am Toussaint Louverture. My name is perhaps known to you. I have undertaken vengeance. I want Liberty and Equality to reign in Saint-Domingue. I am working to make that happen. Unite yourselves to us, brothers, and fight with us for the same cause.",
      "I was born a slave, but nature gave me the soul of a free man. I have made use of the arms that Providence placed in my hands to avenge the outrages committed against my race. To all Frenchmen who have believed, even for a single moment, that slavery could be reconciled with the rights of man — I say this: the laws of France and the laws of nature are not the same.",
      "We have dared to be free, when tyranny has made us tremble. We have shed our blood. Let us shed it until our last drop. The French say that men are free and equal. We have taken them at their word. If freedom belongs to all men by the right of nature, then it belongs to us as much as it belongs to any man who has ever set foot on French soil.",
      "To those who send armies against us to reimpose chains — I say only this: we preferred death to slavery, and we have proven it. We will prove it again."
    ],
    questions: [
      "How does Toussaint invoke Enlightenment ideas about natural rights and liberty? What specific phrases show that he is using the same vocabulary as the French and American revolutionaries?",
      "Toussaint says 'the laws of France and the laws of nature are not the same.' What does he mean by this? How does this distinction reveal the central tension of the Haitian Revolution — between Enlightenment principles and French colonial practice?",
      "How does Toussaint's position as a formerly enslaved person change the meaning of these Enlightenment arguments? Is his invocation of natural rights the same as Jefferson's invocation of the same concept, or is it different? Explain your reasoning with specific evidence from both texts."
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Soldier in Toussaint's Army, c. 1798",
    desc: "You are a formerly enslaved man in Toussaint Louverture's army, Saint-Domingue, c. 1798. You carry in your pack — tucked inside a cloth wrapping so it won't be damaged in the rain — a copy of the French Declaration of the Rights of Man and Citizen from 1789. You took it from a French officer you captured last year.",
    intro: "You cannot read French fluently, but you can read some of it. The word 'liberté' you know. 'Droits' — rights. 'Homme' — man. You have been told by a literate soldier in your unit what the document says: that all men are created equal, that they possess natural rights, that the source of all sovereignty is the nation, that the law is the expression of the general will. You have fought three years. You have watched men die — your brother among them, at the crossing of the Artibonite River. You have also watched French ships arrive with soldiers sent specifically to reimpose slavery.",
    detail: "The irony is not abstract to you. The same country that wrote this document sent those soldiers. You do not know if Napoleon has read this document — surely he has. You do not know how to explain why a man can write that all men possess natural rights and then send an army to enslave them. You think about this at night. You carry this document because you believe the words are true, even if the people who wrote them do not. You believe the revolution you are fighting is more consistent with the document's logic than the people who wrote it. You have tried to explain this to younger soldiers who ask you why you fight.",
    prompt: "Write a letter to a fellow soldier in your unit — a man who joined the army last month and is struggling to understand why he is fighting. Explain to him what the French Declaration of Rights says, what it means to you, and why you are fighting even though the people who wrote it are now fighting against you. Explain the contradiction honestly — don't pretend it isn't there — but explain why the contradiction makes the revolution more necessary, not less. Your letter should be honest, specific, and grounded in the situation you are living through."
  },

  beInTheRoom: {
    url: '',
    desc: "Advise Toussaint Louverture on whether to negotiate with Napoleon or fight to the end, join Simón Bolívar's planning session before the battle that will determine the fate of South American independence, or debate a French revolutionary in 1794 about whether the abolition of slavery in the colonies is a genuine application of the Declaration of Rights or a tactical maneuver."
  }

};
