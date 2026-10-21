'use strict';

/**
 * Topic 5.2, Nationalism and Revolutions: the deep reading.
 *
 * Why this exists. The CED gives 5.2 one learning objective, causes and
 * effects of the revolutions of 1750 to 1900, and a reasoning process of
 * Causation. The First & 10 tells the story in one pass. What it has no room
 * for is the mechanism at each step: why each ingredient mattered, how each
 * revolution's effects became the next one's causes, what the new ideas about
 * government actually meant, and how the nation could both join states
 * together and break them apart.
 *
 * Rebuilt from the 5.2 story (docs/TOPIC-5-2-STORY-DRAFT.md) on 2026-10-21.
 * The old chapter, "Who Counted as the People," was a strong essay written
 * well above a ninth-grade reading level. It ranked Haiti "the most radical"
 * revolution as a fact, organized nationalism around multiethnic empires
 * collapsing (which happened after 1900, outside this topic), and carried
 * figures this build could not verify as stated.
 *
 * Three things carried deliberately:
 *
 *   1. The recipe, grievance, words and a chance, on every revolution, so
 *      ideas are one cause and never the cause.
 *   2. The chain: each section names the link to the next revolution.
 *   3. Nationalism both ways, joining Italy and Germany and breaking the
 *      Balkans away, with governments using it as well as fighting it.
 */

module.exports = {
  topicKey: 't5-2',
  slug: 'topic-5-2-nationalism-and-revolutions',
  sourceFile: 'deep-reading-topic-5-2-nationalism-and-revolutions.html',
  lessonFile: 'lesson-5-2-nationalism-and-revolutions.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.2: How Revolutions Made Nations',
  eyebrow: 'Topic 5.2 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'How Revolutions Made <em>Nations</em>',
  deck: `By 1789 the new ideas about rights were everywhere educated people read, but ideas alone never overthrew a king. This chapter follows four revolutions, in America, France, Haiti and Spanish America, asks what caused each one and what it created, and then follows the loyalty they left behind, to the nation, through the rest of the 1800s.`,
  meta: ['Five sections', 'America, France, Haiti, Spanish America, and the nation', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.2 &nbsp;·&nbsp; How Revolutions Made Nations &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain the causes and effects of the revolutions between 1750 and 1900. Sections 01 to 04 take the four revolutions of the Atlantic world one at a time, each with its grievance, its words, its chance and what it created. Section 05 follows two lasting effects, new ideas about government and the nation, to 1878. Each section ends with a tool, a limit and a comparison you can use in an answer.`,
    steps: [
      `<b>01 The recipe, and America:</b> why ideas were not enough, and the first of the four revolutions to win.`,
      `<b>02 France:</b> how America's war became France's chance, and what France made of it.`,
      `<b>03 Haiti:</b> the words of 1789, claimed by the people they were not written for.`,
      `<b>04 Spanish America:</b> an empire with no king, and Haiti's help.`,
      `<b>05 New ideas, and the nation:</b> liberalism, democracy, and the loyalty that joined Italy and Germany and pulled the Balkans away from the Ottoman Empire.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'america',
      num: '01',
      accent: 'gold',
      name: 'The Recipe, and America',
      navLabel: 'America',
      dates: '1763 to 1787 &nbsp;·&nbsp; Grievance, words, chance',
      thesis: `Many people read Enlightenment writers and went on obeying their kings. A revolution came when three things met: a grievance many people felt, the words to name it, and a chance to act. America had all three first.`,
      parts: [
        {
          heading: 'Why ideas were not enough',
          blocks: [
            { p: `Topic 5.1 showed that the new ideas about natural rights and the consent of the people had spread across Europe and the Americas by 1789. But reading a book is not the same as risking your life. Across this topic, three ingredients turn up again and again. The first is a <span class="kt">grievance</span>: a wrong that many people feel, such as an unfair tax, a privilege for a few, slavery, or a law that shuts people out of power. The second is the words: a document that names the grievance in the language of rights, something people can read aloud and rally around. The third is a chance: a moment when the old ruler is broke, far away, at war, or gone.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment caused the revolutions. The College Board says Enlightenment ideas "influenced resistance" and that "discontent with monarchist and imperial rule" pushed people toward new kinds of government. The ideas were one cause. Name the others.`
            } }
          ]
        },
        {
          heading: 'The grievance and the words',
          blocks: [
            { p: `Britain won the Seven Years' War in <span class="num">1763</span>, but it came out of the war deep in debt. Parliament decided its thirteen American colonies should help pay for the soldiers who guarded them, and it taxed them with laws such as the Sugar Act of <span class="num">1764</span> and the Stamp Act of <span class="num">1765</span>, which taxed newspapers, legal papers and playing cards. The colonists had no members in Parliament, so they answered with a slogan: "no taxation without representation." Protest reached ordinary homes: English potters even sold colonists teapots painted "No Stamp Act."` },
            { p: `On <span class="num">4 July 1776</span> the Continental Congress adopted the Declaration of Independence. It argued that "all men are created equal," that governments get "their just powers from the consent of the governed," and that when a government destroys people's rights, "it is the Right of the People to alter or to abolish it." That is the social contract from Topic 5.1, turned into a reason to break away.` }
          ]
        },
        {
          heading: 'The chance, and what it created',
          blocks: [
            { p: `Britain was an ocean away, and its victory in <span class="num">1763</span> had pushed France out of North America, so the colonists no longer needed British soldiers to protect them. Once the fighting began in <span class="num">1775</span>, France, Britain's old rival, joined the war on the American side in <span class="num">1778</span> with money, soldiers and a navy, which helped the colonists win. By <span class="num">1783</span> Britain had recognized the independence of the United States. In <span class="num">1787</span> the new country wrote a constitution for a <span class="kt">republic</span>: a country with no king, whose leaders are elected.` },
            { p: `The College Board calls the American Revolution and its republic "a model and inspiration for a number of the revolutions that followed." It was also limited. The republic kept slavery, and most states let only men who owned property vote.` }
          ]
        }
      ],
      useThis: {
        tool: `Name all three ingredients, with a detail for each. <em>Ask what the colonists were angry about, which document named it, and why they could act when they did.</em>`,
        limit: `The revolution's "all men are created equal" did not end slavery, and the new states limited voting to some men.`,
        comparison: `Against France (section 02): the American revolutionaries broke away from a ruler across an ocean; the French remade their own kingdom.`
      },
      terms: [
        ['Grievance', 'A wrong that many people feel, such as an unfair tax or a law that shuts them out.'],
        ['Stamp Act', 'A 1765 British tax on printed papers in the American colonies, repealed in 1766.'],
        ['Consent of the governed', 'The idea that a government\'s rightful power comes from the people who live under it.'],
        ['Republic', 'A country with no king, whose leaders are elected.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'france',
      num: '02',
      accent: 'iron',
      name: 'France: The Bill Comes Due',
      navLabel: 'France',
      dates: '1788 to 1804 &nbsp;·&nbsp; A kingdom remade',
      thesis: `France's help was crucial to the American victory, and paying for it, on top of older war debts, pushed the French king to the edge of bankruptcy. One revolution's effect became the next one's chance.`,
      parts: [
        {
          heading: 'The chance came from America',
          blocks: [
            { p: `France had spent heavily on the American war, on top of the debts of earlier wars, and by <span class="num">1788</span> King Louis XVI's government was nearly bankrupt. To raise new taxes, the king called the <span class="kt">Estates-General</span>, an assembly of the three "estates" of France: the clergy, the nobles, and everyone else. It had not met since <span class="num">1614</span>.` }
          ]
        },
        {
          heading: 'The grievance',
          blocks: [
            { p: `The first two estates had privileges. The clergy and the nobles paid little in taxes, and the Third Estate, most of the people of France, from rich lawyers to poor peasants, paid most of them. After a bad harvest in <span class="num">1788</span>, the price of bread, the main food of the poor, soared. When the Estates-General met in May <span class="num">1789</span>, the Third Estate refused to be outvoted by the other two, and in June it declared itself the National Assembly. On <span class="num">14 July</span> a Paris crowd stormed the Bastille, a royal fortress and prison, to seize its gunpowder.` }
          ]
        },
        {
          heading: 'The words',
          blocks: [
            { p: `In August <span class="num">1789</span> the Assembly ended the nobles' special privileges and adopted the Declaration of the Rights of Man and of the Citizen. Its first article reads, "Men are born and remain free and equal in rights." Its third reads, "The principle of all sovereignty resides essentially in the nation." <span class="kt">Sovereignty</span> is the highest power in a state, and the declaration said it belonged to the nation, not to the king.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: compare the documents',
              html: `Put two revolutionary documents side by side and read them closely. Say each one's argument in your own words, then find one way the arguments are alike and one way they differ, and explain the difference by the grievance each document answered. That is the move the College Board's skill 3.C asks for.`
            } }
          ]
        },
        {
          heading: 'What it created',
          blocks: [
            { p: `France abolished its monarchy in <span class="num">1792</span> and became a republic, and in January <span class="num">1793</span> it executed the king. At war with much of Europe and afraid of enemies at home, the government began the Terror (<span class="num">1793</span> to <span class="num">1794</span>), during which it killed thousands of people it called enemies of the revolution. In <span class="num">1799</span> a general, Napoleon Bonaparte, took power, and in <span class="num">1804</span> he crowned himself emperor. His armies carried the revolution's laws, such as the end of noble privilege, across Europe, and they also made many Europeans hate French rule.` }
          ]
        }
      ],
      useThis: {
        tool: `Show the link. <em>Trace how the American war reached Paris: what did it cost France, and what did that force the king to do?</em>`,
        limit: `The revolution that began against a king ended with an emperor, and the Terror killed thousands in the name of the people.`,
        comparison: `Against Haiti (section 03): the same declaration that France wrote for itself was claimed by people France held in slavery.`
      },
      terms: [
        ['Estates-General', 'France\'s old assembly of clergy, nobles and commoners, called in 1788 to meet in May 1789, for the first time since 1614.'],
        ['Third Estate', 'Everyone in France who was not clergy or noble: most of the people.'],
        ['Sovereignty', 'The highest power in a state.'],
        ['The Terror', 'The years 1793 to 1794, when France\'s revolutionary government executed thousands of people it called enemies.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'haiti',
      num: '03',
      accent: 'oxide',
      name: 'Haiti: The Words Claimed',
      navLabel: 'Haiti',
      dates: '1791 to 1825 &nbsp;·&nbsp; Saint-Domingue becomes Haiti',
      thesis: `France's declaration said men are born free and equal. In Saint-Domingue, the people France held in slavery claimed those words for themselves, rose up first, and won a country of their own.`,
      parts: [
        {
          heading: 'The grievance',
          blocks: [
            { p: `Saint-Domingue, on the western part of the Caribbean island of Hispaniola, was France's most valuable colony. Its sugar and coffee were grown by enslaved Africans and their children, worked and punished brutally on plantations. Around <span class="num">1789</span> the colony held more than 400,000 enslaved people and fewer than 80,000 free people, white colonists and <span class="kt">free people of color</span> (free people of African or mixed descent) together: more than five enslaved people for every free person.` }
          ]
        },
        {
          heading: 'The words, and the chance',
          blocks: [
            { p: `When the 1789 declaration reached the colony, free people of color asked the Assembly in Paris for the equal rights it promised. The Assembly left the question to the colonists, and the white planters refused. In <span class="num">1790</span> a free man of color, Vincent Ogé, led a small revolt for those rights, and early in <span class="num">1791</span> he was executed. Paris granted free people of color equal rights only in April <span class="num">1792</span>, after the revolution in the colony had begun.` },
            { p: `With France in revolution and the colony's white planters divided, enslaved people in the northern plain rose up in August <span class="num">1791</span>. They burned plantations across the northern plain. Toussaint Louverture, who had been born enslaved and had won his freedom before the revolution, became the revolution's most famous leader. In <span class="num">1793</span>, fighting on Spain's side against France, he announced: "I want Liberty and Equality to reign in Saint Domingue."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that France gave Haiti its freedom. Enslaved people rose up in 1791. French officials in the colony began freeing enslaved people in 1793 to keep their side's soldiers, and in February 1794 the government in Paris abolished slavery in all French colonies, after two and a half years of fighting. Toussaint changed sides to France a few months later. Haitians then won their independence by defeating Napoleon's army.`
            } }
          ]
        },
        {
          heading: 'What it created',
          blocks: [
            { p: `In <span class="num">1802</span> Napoleon brought slavery back in other French colonies, such as Guadeloupe, and sent an army to retake Saint-Domingue. Toussaint was arrested and died in a French prison in the mountains in <span class="num">1803</span>. His officer Jean-Jacques Dessalines fought on, and yellow fever and the war destroyed the French army. On <span class="num">1 January 1804</span> Dessalines declared independence and gave the country its old Taíno name, Haiti.` },
            { p: `Haiti was the second independent country in the Americas, after the United States, and the first founded by people who had freed themselves from slavery. Its effects reached other countries. In April <span class="num">1803</span>, with his army in Saint-Domingue dying of yellow fever and a new war with Britain coming, Napoleon sold Louisiana to the United States. Countries that allowed slavery feared Haiti's example: the United States did not recognize Haiti until <span class="num">1862</span>, and in <span class="num">1825</span> France demanded 150 million francs, later cut to 90 million, as the price of recognizing Haiti's independence. And in <span class="num">1816</span> Haiti helped the next revolution (section 04).` }
          ]
        }
      ],
      useThis: {
        tool: `Say who acted. <em>Ask who rose up in 1791, who led them, and whose army they defeated, before you mention any law passed in Paris.</em>`,
        limit: `Haiti paid for its independence: in money to France, and in years of isolation by countries that allowed slavery.`,
        comparison: `Against the United States (section 01): both broke from a European empire, but only Haiti's revolution ended slavery.`
      },
      terms: [
        ['Saint-Domingue', 'France\'s Caribbean sugar and coffee colony, which became Haiti in 1804.'],
        ['Free people of color', 'Free people of African or mixed descent in the colonies, who had property but not equal rights.'],
        ['Toussaint Louverture', 'A formerly enslaved man who became the most famous leader of the Haitian Revolution.'],
        ['Jean-Jacques Dessalines', 'Toussaint\'s officer, who declared Haiti\'s independence on 1 January 1804.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'spanish',
      num: '04',
      accent: 'rust',
      name: 'Spanish America: An Empire With No King',
      navLabel: 'Spanish America',
      dates: '1808 to 1826 &nbsp;·&nbsp; Bolívar and the new states',
      thesis: `Creoles in Spain's American empire had grievances for decades. Their chance came when Napoleon, the French Revolution's general, took Spain's king, and the last revolution's creation, Haiti, helped them win.`,
      parts: [
        {
          heading: 'The grievance',
          blocks: [
            { p: `In Spain's American empire, <span class="kt">creoles</span>, people of Spanish descent born in the Americas, owned land, mines and businesses, but the highest offices in the church, the army and the government went to <span class="kt">peninsulares</span>, men born in Spain. Spain also controlled what the colonies could grow, make and trade. Simón Bolívar, a creole from a rich Caracas family, wrote that Spain "has kept us in a sort of permanent infancy with regard to public affairs": treated like children, never allowed to govern.` }
          ]
        },
        {
          heading: 'The chance',
          blocks: [
            { p: `In <span class="num">1808</span> Napoleon invaded Spain and forced its king from the throne, putting his own brother in his place. Spanish America suddenly had no rightful king to obey. In <span class="num">1810</span> creole leaders set up governments of their own, in Caracas and in Buenos Aires, at first in the name of the captive king, and many soon moved to full independence. In Mexico a priest, Miguel Hidalgo, called on Native and mestizo villagers to rise up.` }
          ]
        },
        {
          heading: 'The words, and help from Haiti',
          blocks: [
            { p: `The wars went badly at first. In <span class="num">1815</span>, beaten and in exile on the British island of Jamaica, Bolívar wrote a long letter to a British reader, now called the Letter from Jamaica. "The hatred that the Peninsula has inspired in us," he wrote, "is greater than the ocean between us," and the tie to Spain "has been severed." He also doubted that governments "wholly representative," chosen entirely by the people's votes, suited Spanish America yet.` },
            { p: `Then Haiti helped. In <span class="num">1816</span> Haiti's president, Alexandre Pétion, gave Bolívar guns, supplies and men for a new expedition, and asked him in return to end slavery in the lands he freed.` }
          ]
        },
        {
          heading: 'What it created',
          blocks: [
            { p: `By <span class="num">1826</span> Spain had lost every colony in the Americas except Cuba and Puerto Rico. Mexico, Gran Colombia, Peru, Chile, the provinces of the Río de la Plata and others became independent countries, and Brazil broke away from Portugal in <span class="num">1822</span> with an emperor of its own. Creole elites took the top places. Most of the new countries kept a sharp social hierarchy, and slavery lasted in several of them for decades: Colombia ended it in <span class="num">1851</span>, Venezuela and Peru in <span class="num">1854</span>.` }
          ]
        }
      ],
      useThis: {
        tool: `Use the chain. <em>Connect two revolutions: what did events in Spain in 1808 do to Spanish America, and what did Haiti give Bolívar in 1816?</em>`,
        limit: `Independence changed who ruled more than how society was ordered: creoles replaced peninsulares at the top.`,
        comparison: `Against the Declaration of Independence: read the two side by side and ask what each says about who should govern, and why the answers might differ.`
      },
      terms: [
        ['Creoles', 'People of Spanish descent born in the Americas.'],
        ['Peninsulares', 'Men born in Spain, who held the highest offices in Spain\'s American empire.'],
        ['Letter from Jamaica', 'Bolívar\'s 1815 letter arguing that Spanish America would never return to Spain.'],
        ['Mestizo', 'A person of mixed Native and European descent.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'nation',
      num: '05',
      accent: 'gold',
      name: 'New Ideas, and the Nation',
      navLabel: 'The nation',
      dates: '1789 to 1878 &nbsp;·&nbsp; Liberalism, democracy, nationalism',
      thesis: `Some of the revolutions' longest-lasting effects were ideas: new answers to how a country should be run, and a new loyalty, to the nation, that joined some states together and pulled peoples away from empires.`,
      parts: [
        {
          heading: 'New ways to govern',
          blocks: [
            { p: `Behind all four revolutions was anger at kings and empires, and the revolutions left behind new answers to an old question: how should a country be run? One was the republic, with a written <span class="kt">constitution</span>, a set of basic laws that even the government must follow. Another was <span class="kt">liberalism</span>: the belief that a constitution and an elected parliament should limit the government and protect each person's rights, such as free speech, a free press and property. Many liberals in the 1800s still wanted only men with property to vote. A third was <span class="kt">democracy</span>, rule by the people, which pushed for the vote to reach all men.` },
            { p: `These ideas did not stay on paper. They helped set off new revolutions across Europe in <span class="num">1830</span> and <span class="num">1848</span>, when crowds demanded constitutions, parliaments and wider voting. Most of the uprisings of 1848 were crushed within two years, but the demands did not go away.` }
          ]
        },
        {
          heading: 'From "the people" to the nation',
          blocks: [
            { p: `The revolutions said that a state belongs to its people. That raised a new question: which people? More and more, people answered with the nation: everyone who shared a language, a religion, customs and a homeland. <span class="kt">Nationalism</span> put loyalty to the nation above loyalty to a king or an empire.` },
            { p: `Governments learned to use that loyalty. In <span class="num">1793</span>, at war with much of Europe, revolutionary France ordered that "all Frenchmen are in permanent requisition for the service of the armies": young men would fight, married men would make weapons, women would make tents and work in hospitals, and old people would go to public squares to preach "the unity of the Republic." But nationalism could also be turned against a government, by people who felt they were a nation without a country of their own.` }
          ]
        },
        {
          heading: 'Nationalism joins states',
          blocks: [
            { p: `Italy was split into several states, some ruled by Austria. Italian nationalists, among them Count Cavour, the chief minister of the kingdom of Piedmont-Sardinia, and the soldier Giuseppe Garibaldi, whose volunteers took Sicily and Naples in <span class="num">1860</span>, joined most of Italy into one kingdom in <span class="num">1861</span>, and added Rome in <span class="num">1870</span>. Joining states into one is called <span class="kt">unification</span>.` },
            { p: `Germany was split into more than thirty states. In <span class="num">1848</span> German liberals met in Frankfurt to unite Germany with an elected parliament and a constitution, and failed. Then Otto von Bismarck, the chief minister of Prussia, told Prussia's lawmakers in <span class="num">1862</span> that the great questions of the time are not decided "by speeches and majority resolutions," which had been "the big mistake of 1848 and 1849," but "by iron and blood." After three wars, against Denmark, Austria and France, the German Empire was proclaimed on <span class="num">18 January 1871</span> in the Hall of Mirrors at Versailles, the palace Louis XIV built.` }
          ]
        },
        {
          heading: 'Nationalism breaks an empire',
          blocks: [
            { p: `The Ottoman Empire ruled many peoples in the Balkans, in southeastern Europe, Muslim and Christian. Serbs rebelled and won the right to rule themselves. Greeks rose up in <span class="num">1821</span>, and in <span class="num">1830</span> Britain, France and Russia declared Greece an independent state; it became a kingdom under a Bavarian prince in <span class="num">1832</span>. Other Balkan peoples followed, and in <span class="num">1878</span> Serbia, Montenegro and Romania were recognized as independent.` },
            { p: `The Ottoman government answered with a loyalty of its own, <span class="kt">Ottomanism</span>. In <span class="num">1856</span> it promised equal treatment to all its subjects, Muslim or not, and in <span class="num">1869</span> a law made every subject an Ottoman citizen. The idea was one loyalty for everyone, to the empire, instead of to a nation. It did not stop the Balkan nations from leaving. The idea reached beyond Europe, too: in the Spanish-ruled Philippines, Filipino writers in the Propaganda Movement of the 1880s and 1890s, José Rizal among them, demanded equal rights with Spaniards, and Spain executed Rizal in <span class="num">1896</span>, during a revolution against its rule.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that nationalism only built countries. The same loyalty joined Italy and Germany together and pulled Greece and Serbia away from the Ottoman Empire. A cause can push in opposite directions.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Follow an effect forward. <em>Start from the idea that a state belongs to its nation, then find one state it joined together and one people it pulled away from an empire, each with a date.</em>`,
        limit: `A nation is imagined: people come to believe they belong to it. Many Italians in 1861 did not speak the same Italian, and Ottomanism's promise of equality was often not kept in practice.`,
        comparison: `Against revolutionary France in 1793: France called on loyalty to the nation; the Ottoman government tried to build loyalty to the empire instead, to hold back nationalism.`
      },
      terms: [
        ['Liberalism', 'In the 1800s, the belief that a constitution and an elected parliament should limit the government and protect individual rights.'],
        ['Democracy', 'Rule by the people; in the 1800s, the push to give all men the vote.'],
        ['Nationalism', 'Loyalty to a nation, people who share a language, religion, customs and homeland, above a king or an empire.'],
        ['Ottomanism', 'The Ottoman government\'s attempt to give all its peoples one loyalty, to the empire.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks for causes and effects, so the first two cards are causes and the last two are effects.`,
    pairs: [
      {
        category: 'Causation',
        title: 'A grievance, the words and a chance',
        body: `Evidence to sort: the Stamp Act (1765); the end of the French threat in North America (1763); the Declaration of Independence (1776); noble privilege and bread prices in France (1788 to 1789); a bankrupt French government (1788); the Declaration of the Rights of Man (1789); slavery in Saint-Domingue; the rising of 1791; Toussaint's proclamation (1793); creoles kept out of high office; Napoleon's invasion of Spain (1808); Bolívar's Letter from Jamaica (1815). For the revolution you choose, decide which is its grievance, which gave it words, and which was its chance.`
      },
      {
        category: 'Causation',
        title: 'Each revolution helped another start or win',
        body: `Evidence to sort: France's spending on the American war; free people of color in Saint-Domingue and France's 1789 declaration; Napoleon's invasion of Spain (1808); Haiti's guns, supplies and men for Bolívar (1816). For each, name the two revolutions it links and decide whether it helped the second one start or helped it win. The College Board calls the American Revolution "a model and inspiration" for the revolutions that followed.`
      },
      {
        category: 'Effects',
        title: 'New states and new ideas about government',
        body: `The United States (1783, a republic under the 1787 constitution), Haiti (1804) and the independent countries of Spanish America (by 1826) were new states. Republics, written constitutions, liberalism and democracy were new ideas, which helped set off new revolutions in Europe in 1830 and 1848. Many things stayed: slavery in the United States and much of Latin America, and creole elites at the top.`
      },
      {
        category: 'Effects',
        title: 'The nation, an effect that became a cause',
        body: `Evidence to sort: the levée en masse (1793); the Frankfurt Parliament (1848 to 1849); Bismarck's "iron and blood" (1862); the Kingdom of Italy (1861) and Rome (1870); the German Empire (1871); the London protocol on Greece (1830); the Treaty of Berlin (1878); the Ottoman edict of 1856 and the citizenship law of 1869. Decide which show nationalism joining states, which show it pulling peoples from an empire, and which show a government using or answering it.`
      }
    ]
  }
};
