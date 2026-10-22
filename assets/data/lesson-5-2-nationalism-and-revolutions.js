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
    subtitle: "1750 to 1900. A grievance, the words to name it, and a chance to act turned the new ideas into revolutions in America, France, Haiti, and Spanish America, and each revolution helped another one start or win. They left behind new countries, new ideas about government, and a new loyalty, to the nation, that joined some states together and pulled peoples away from empires.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },
  learningTargets: [
    {
      target: "I can explain how a grievance, the words of a revolutionary document, and a chance to act came together to cause revolutions against kings and empires between 1750 and 1900.",
      kc: 'KC-5.3.I.B',
      theme: "Governance"
    },
    {
      target: "I can explain what the American, French, Haitian, and Spanish American revolutions created, including independent states in the Americas and new ideas about government such as liberalism and democracy, and how each revolution helped another one start or win.",
      kc: 'KC-5.3.III.B',
      theme: "Governance"
    },
    {
      target: "I can explain how a new loyalty to the nation, built on a shared language, religion, customs, and homeland, was used by governments and by nationalists to join some states together and to pull peoples away from empires.",
      kc: 'KC-5.3.II.iii',
      theme: "Governance"
    }
  ],
  successCriteria: [
    {
      criteria: "I can choose one revolution (American, French, Haitian, or Spanish American) and name its grievance (such as British taxes, noble privilege and bread prices, slavery, or creoles shut out of high office), its words (America: the Declaration of Independence; France: the Declaration of the Rights of Man and of the Citizen; Haiti: that French declaration as free people of color claimed it, or Toussaint Louverture's proclamation of 1793; Spanish America: Bolívar's Letter from Jamaica, written five years into the fighting), and its chance (such as Britain's distance, a bankrupt king, a France in revolution, or Napoleon's invasion of Spain).",
      kc: 'KC-5.3.I.B',
      theme: "Governance"
    },
    {
      criteria: "I can name what one revolution created (such as the United States, a republic under its 1787 Constitution, Haiti in 1804, or the independent countries of Spanish America by 1826), explain one link in the chain (such as France's debt from the American war, or Haiti's help to Bolívar in 1816), and explain liberalism or democracy as a new idea about government.",
      kc: 'KC-5.3.III.B',
      theme: "Governance"
    },
    {
      criteria: "I can explain what a nation is (people who share a language, a religion, customs, and a homeland), give one example of a government using national loyalty (revolutionary France in 1793) or building a shared loyalty to hold back nationalism (Ottomanism), and give one example of nationalism joining states (Italy in 1861 or Germany in 1871) and one of it pulling a people away from an empire (Greece in 1830, or Serbia, Montenegro, or Romania in 1878).",
      kc: 'KC-5.3.II.iii',
      theme: "Governance"
    }
  ],
  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective C',
      theme: 'Learning Objective',
      text: 'Explain causes and effects of the various revolutions in the period from 1750 to 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.II.ii',
      theme: 'Governance',
      text: 'People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3',
      theme: 'Governance',
      text: 'The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.IV.A.i',
      theme: 'Governance',
      text: 'Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.III.B',
      theme: 'Governance',
      text: 'Colonial subjects in the Americas led a series of rebellions inspired by democratic ideals. The American Revolution, and its successful establishment of a republic, the United States of America, was a model and inspiration for a number of the revolutions that followed. The American Revolution, the Haitian Revolution, and the Latin American independence movements facilitated the emergence of independent states in the Americas.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I.B',
      theme: 'Governance',
      text: 'The ideas of Enlightenment philosophers, as reflected in revolutionary documents, including the American Declaration of Independence during the American Revolution, the French Declaration of the Rights of Man and of the Citizen during the French Revolution, and Bolívar’s Letter from Jamaica on the eve of the Latin American revolutions, influenced resistance to existing political authority, often in pursuit of independence and democratic ideals.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.II.iii',
      theme: 'Governance',
      text: 'Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions.',
      illustrativeExamples: ['Propaganda Movement in the Philippines', 'Māori nationalism and the New Zealand wars in New Zealand', 'Puerto Rico, writings of Lola Rodríguez de Tió', 'German and Italian unifications', 'Balkan nationalisms', 'Ottomanism']
    }
  ],

  lecture: {
    title: "How Revolutions Made Nations",
    intro: "Use these cards to see what caused each revolution, how each one helped another start or win, what the revolutions created, and how the nation became the new loyalty that joined some states together and pulled peoples away from empires.",
    videos: [],
    segments: [
      {
        title: "The Recipe, and America's Revolution",
        bullets: [
          "Ideas alone did not make revolutions. A revolution needed a **grievance**, a wrong many people felt; **the words** to name it, in a document people could rally around; and **a chance**, a moment when the old ruler was broke, far away, or gone.",
          "**America's grievance:** the Seven Years' War (1756 to 1763) left Britain deep in debt, and Parliament taxed its American colonies with laws such as the **Stamp Act** of 1765. The colonies had no members in Parliament: \"no taxation without representation.\" Colonists bought goods that carried the protest, such as a teapot painted \"No Stamp Act.\"",
          "**The words:** the **Declaration of Independence** (4 July 1776) said governments get \"their just powers from the consent of the governed,\" and that the people may \"alter or to abolish\" a government that destroys their rights. **The chance:** Britain was an ocean away, and its 1763 victory had pushed France out of North America, so colonists no longer needed British soldiers to protect them. Once the fighting began in 1775, France joined the war in 1778 and helped the colonists win.",
          "**What it created:** the United States, independent by 1783, and in 1787 a constitution for a **republic**, a country with no king whose leaders are elected. The College Board calls it \"a model and inspiration for a number of the revolutions that followed.\" It kept slavery, and most states let only men who owned property vote."
        ],
        image: {
          title: "Protest you could pour",
          caption: "A teapot painted \"No Stamp Act,\" made in England between 1766 and 1775 for sale in the American colonies. Parliament repealed the Stamp Act in 1766. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-2/no-stamp-act-teapot-1766-75.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/8332"
        }
      },
      {
        title: "France: One Revolution's Bill Starts the Next",
        bullets: [
          "**The chance came from America.** Helping the Americans win cost France a fortune, and by 1788 Louis XVI's government was nearly bankrupt. To raise taxes he called the **Estates-General**, which had not met since 1614.",
          "**The grievance:** the clergy and nobles paid little in taxes, the Third Estate (everyone else) paid most, and bread prices soared after the bad harvest of 1788. In June 1789 the Third Estate declared itself the National Assembly; on 14 July a Paris crowd stormed the Bastille, a royal fortress and prison.",
          "**The words:** in August 1789 the Assembly ended the nobles' privileges and adopted the **Declaration of the Rights of Man and of the Citizen**: \"Men are born and remain free and equal in rights,\" and \"the principle of all sovereignty resides essentially in the nation.\"",
          "**What it created:** France was remaking a kingdom, not breaking away from one. It became a republic in 1792 and executed the king in 1793; during the Terror (1793 to 1794) the government killed thousands of people it called enemies. In 1799 Napoleon Bonaparte took power, and in 1804 he crowned himself emperor. His armies spread the revolution's laws across Europe and stirred resentment of French rule."
        ],
        image: {
          title: "The Bastille, 14 July 1789",
          caption: "Charles Thévenin's etching of the storming of the Bastille, made in 1790, the year after the event. Cleveland Museum of Art.",
          url: "../assets/images/topics/5-2/storming-of-the-bastille-thevenin-1790.jpg",
          sourceUrl: "https://www.clevelandart.org/art/2015.21"
        }
      },
      {
        title: "Haiti and Spanish America: The Words Claimed",
        bullets: [
          "**Haiti's grievance:** Saint-Domingue was France's most valuable colony, its sugar and coffee grown by more than 400,000 enslaved people, more than five for every free person. **The words:** free people of color claimed the rights of the 1789 declaration and were refused until 1792. **The chance:** with France in revolution, the enslaved rose up in August 1791. **Toussaint Louverture**, born enslaved and freed before the revolution, became its most famous leader.",
          "French officials began freeing the enslaved in 1793, and in February 1794 France abolished slavery in all its colonies, after two and a half years of fighting. In 1802 Napoleon restored slavery in Guadeloupe and sent an army to retake Saint-Domingue; Toussaint died in a French prison in 1803. **Jean-Jacques Dessalines** fought on, and on 1 January 1804 declared the independence of **Haiti**, the second independent country in the Americas and the first founded by people who had freed themselves from slavery.",
          "**Spanish America's grievance:** **creoles**, people of Spanish descent born in the Americas, were kept out of the highest offices, which went to **peninsulares**, men born in Spain. **The chance:** in 1808 Napoleon invaded Spain and forced its king from the throne, and in 1810 creole leaders set up governments of their own. **The words:** Simón Bolívar's **Letter from Jamaica** (1815): \"The hatred that the Peninsula has inspired in us is greater than the ocean between us.\"",
          "**One revolution helps another win:** in 1816 Haiti's president, Alexandre Pétion, gave Bolívar guns, supplies, and men, and asked him to end slavery in the lands he freed. **What it created:** by 1826 Spain held only Cuba and Puerto Rico in the Americas. Creole elites took the top places, and slavery lasted in several new countries for decades."
        ],
        image: {
          title: "Toussaint Louverture, as Paris saw him",
          caption: "A hand-colored print made in France in 1802, the year Napoleon's army landed in Saint-Domingue. A French printmaker's idea of the general, not a portrait from life. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-2/toussaint-louverture-on-horseback-1802.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/852913"
        }
      },
      {
        title: "New Ideas, and the Nation Redraws the Map",
        bullets: [
          "**New ideas about government:** anger at kings and empires produced the **republic** with a written constitution; **liberalism**, the belief that a constitution and an elected parliament should limit the government and protect rights such as free speech, a free press, and property (many liberals still wanted only men with property to vote); and **democracy**, rule by the people, with the vote for all men. These ideas helped set off new revolutions in Europe in 1830 and 1848.",
          "**The nation:** if a state belongs to its people, which people? More and more, the answer was everyone who shared a language, a religion, customs, and a homeland. Governments used that loyalty: in 1793 revolutionary France called the whole nation to war.",
          "**Joining states:** Italian nationalists, among them Cavour and Garibaldi, united most of Italy in 1861 and added Rome in 1870. In Germany, liberals at Frankfurt failed in 1848; then Prussia's Otto von Bismarck said great questions are decided \"by iron and blood,\" and after three wars the **German Empire** was proclaimed on 18 January 1871 in the Hall of Mirrors at Versailles.",
          "**Breaking an empire:** Serbs and Greeks rebelled against the Ottoman Empire; Greece was declared an independent state, to be ruled by a king, in 1830, and Serbia, Montenegro, and Romania were recognized as independent in 1878. The Ottoman government answered with **Ottomanism**, promising equal treatment to all subjects (1856) and making every subject an Ottoman citizen (1869), one loyalty for everyone, but it did not stop the Balkan nations from leaving."
        ],
        image: {
          title: "The Hall of Mirrors at Versailles",
          caption: "Sébastien Leclerc's etching of 1684 shows the hall as Louis XIV's court knew it. In 1871 the German Empire was proclaimed in this room. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-2/hall-of-mirrors-leclerc-1684.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/387871"
        }
      }
    ]
  },

  map: {
    title: "Revolutions and New Nations, 1775 to 1878",
    url: "../assets/images/instructional-maps/topic-5-2.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-2.svg",
    caption: "A BeHistorical map of the four revolutions of 1775 to 1826 in the Atlantic world, and of the new nation-states nationalism made in Europe between 1830 and 1878.",
    intro: "Start at the United States and follow the three numbered arrows: from the United States to France, from France to Haiti, and from Haiti to Spanish America. Then look at Europe, where Italy and Germany were joined together and new Balkan states broke away from the Ottoman Empire.",
    prompt: "Using the map, explain how one revolution helped another start or win. Name the two places, their dates, and what passed from one to the other: a debt, words, or help."
  },

  deepReading: {
    title: "How Revolutions Made Nations",
    desc: "A longer, optional chapter on the same story: the recipe of grievance, words, and chance; the American, French, Haitian, and Spanish American revolutions and how each helped another start or win; the new ideas about government they created; and how the nation joined Italy and Germany together and broke the Balkans away from the Ottoman Empire.",
    url: "deep-reading-topic-5-2-nationalism-and-revolutions.html"
  },

  first10: {
    title: 'First & 10: How Revolutions Made Nations',
    embedUrl: 'first-and-10-topic-5-2-nationalism-and-revolutions-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.2 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Causes and Effects of the Revolutions",
    intro: "Use the cards to find causes and effects of the revolutions, and what each source can and cannot show.",
    prompt: "Choose two cards. For each, say what kind of source it is, what it shows about a cause or an effect of the revolutions, and one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Simón Bolívar, the Letter from Jamaica, 1815",
    intro: "In 1815 the fight for independence in Spanish America was going badly. Simón Bolívar, a creole from Caracas who had led the patriots of Venezuela, was beaten and in exile on the British island of Jamaica. In September he wrote a long letter in answer to a British resident of the island, arguing that Spanish America would win its independence and asking what kind of government it should have. These are three short passages. (\"The Peninsula\" means Spain; \"Costa Firme\" means the northern coast of South America, where Venezuela is; \"wholly representative\" means a government chosen entirely by the people's votes.)",
    attribution: "Simón Bolívar, \"Reply of a South American to a Gentleman of This Island [Jamaica],\" Kingston, 6 September 1815, translated by Lewis Bertrand, Selected Writings of Bolívar (1951)",
    text: "<strong>Passage 1.</strong> The hatred that the Peninsula has inspired in us is greater than the ocean between us.<br><br><strong>Passage 2.</strong> We have been harassed by a conduct which has not only deprived us of our rights but has kept us in a sort of permanent infancy with regard to public affairs.<br><br><strong>Passage 3.</strong> Events in Costa Firme have proved that institutions which are wholly representative are not suited to our character, customs, and present knowledge.",
    questions: [
      "Identify Bolívar's argument in Passages 1 and 2 in your own words. What grievance against Spain does Passage 2 name?",
      "In Passage 3, what kind of government does Bolívar doubt Spanish America is ready for? What does that tell you about the kind of government he wanted instead?",
      "The Declaration of Independence says governments get \"their just powers from the consent of the governed.\" Compare that argument with Passages 1 and 3: explain one way the two documents agree and one way they differ, and what caused the difference."
    ]
  },

  beSurreal: {
    title: "BeSurreal: Les Cayes, Haiti, March 1816",
    desc: "You are a Haitian veteran of the revolution, born enslaved, now a free man in the southern port of Les Cayes. Ships in the harbor are loading guns and gunpowder for Simón Bolívar, a creole general from Caracas who lost his war against Spain and came to Haiti for help. You have been asked to sail with him.",
    intro: "Twelve years ago you were at the end of the war that made Haiti free. You remember Napoleon's soldiers, the fever that killed so many of them, and the day in January 1804 when Dessalines declared independence. Now Haiti's president, Alexandre Pétion, has given this stranger guns, supplies, and men. People on the docks say Pétion asked for one thing in return: that Bolívar end slavery in every land he frees. Bolívar is a rich man who owned enslaved people on his family's estates. He talks about liberty. So did the French.",
    detail: "You have three things to weigh. First, the people of Spanish America have a real grievance: the men born in Spain rule them, and Spain decides what they may grow and trade. Second, the words are familiar: liberty, rights, the people. You have heard those words before, from men who did not mean them for you. Third, there may be a chance: Napoleon pushed Spain's king off his throne in 1808, and although the king has it back now, his armies have to fight an ocean away from home. If Bolívar wins and keeps his promise, enslaved people from Venezuela to Peru could be free. If he wins and forgets it, you will have helped build another country where slavery lasts.",
    prompt: "Write a letter to your sister in Port-au-Prince explaining whether you will sail with Bolívar. Explain what grievance the people of Spanish America have, why Haiti is helping, and what you will demand from Bolívar in return. Use the words grievance, chance, and slavery. Be honest about the risk that he will not keep his promise."
  },

  beInTheRoom: {
    url: '',
    desc: "Port-Républicain (Port-au-Prince), Saint-Domingue, spring 1801. A council must write a constitution that defends freedom from slavery, keeps the colony fed and defended, and decides how far to stand against France."
  }

};
