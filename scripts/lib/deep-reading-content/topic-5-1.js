'use strict';

/**
 * Topic 5.1, The Enlightenment: the deep reading.
 *
 * Why this exists. The CED gives 5.1 two learning objectives: the
 * intellectual and ideological context of the Atlantic revolutions (LO A),
 * and how the Enlightenment affected societies over time (LO B). The First &
 * 10 tells the story in one pass. What it has no room for is the mechanism
 * at each step: why a new way of finding out what is true led to new
 * political ideas, what each idea actually let people do, how the ideas
 * traveled and why "the people" became the nation, and how reform movements
 * pressed the words further, and how slowly, between 1787 and 1900.
 *
 * Rebuilt from the 5.1 story (docs/TOPIC-5-1-STORY-DRAFT.md) on 2026-10-20.
 * The old chapter, "Where Authority Comes From," was a strong essay written
 * well above a ninth-grade reading level, taught Adam Smith (5.7's) as one of
 * the core arguments, and stopped in 1804, so it never reached LO B's reform
 * movements, the end of serfdom, wider voting or Seneca Falls.
 *
 * Three things carried deliberately:
 *
 *   1. "Came before," not "caused." The CED says Enlightenment thought "often
 *      preceded" revolutions, and 5.2 owns their causes.
 *   2. Religion in both directions: questioned as a power of government, and
 *      a driver of reform.
 *   3. Continuity as hard as change. Section 05 ends on what had still not
 *      changed by 1900.
 */

module.exports = {
  topicKey: 't5-1',
  slug: 'topic-5-1-enlightenment',
  sourceFile: 'deep-reading-topic-5-1-enlightenment.html',
  lessonFile: 'lesson-5-1-enlightenment.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.1: By What Right?',
  eyebrow: 'Topic 5.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'By What <em>Right</em>?',
  deck: `In 1750 most rulers said their power came from God. A group of writers began asking every old authority the same question, by what right?, and answered it with reason, natural rights and the consent of the people. This chapter follows that question from the new science of the late 1600s to the reformers of the 1800s, and asks how much it had changed by 1900.`,
  meta: ['Five sections', 'The method, the ideas, the spread, the reformers, women\'s demands', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.1 &nbsp;·&nbsp; By What Right? &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks two things of this topic. First, explain the ideas that formed the context of the revolutions that swept the Atlantic world. Second, explain how the Enlightenment affected societies over time. Sections 01 to 03 answer the first; sections 04 and 05 answer the second. Each section ends with a tool, a limit and a comparison you can use in an answer.`,
    steps: [
      `<b>01 A new way of knowing:</b> the old answer, and the method that questioned it.`,
      `<b>02 The new answers:</b> natural rights, the social contract, limits on power, and toleration.`,
      `<b>03 The ideas travel:</b> how they spread, why they came before the revolutions, and how the people became a nation.`,
      `<b>04 Pressing the words further:</b> abolition, the end of serfdom and the vote, 1787 to 1888.`,
      `<b>05 Women's demands, and what stayed:</b> de Gouges, Wollstonecraft, Seneca Falls, and the world of 1900.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'method',
      num: '01',
      accent: 'gold',
      name: 'A New Way of Knowing',
      navLabel: 'The method',
      dates: '1680s to 1780s &nbsp;·&nbsp; Reason and evidence',
      thesis: `The Enlightenment's political ideas began with a method. Thinkers learned to test claims about nature with reason and evidence, and then asked whether the same method could test the claims that kings, churches and nobles made about their own power.`,
      parts: [
        {
          heading: 'The old answer',
          blocks: [
            { p: `In 1750 most of Europe's rulers gave the same answer to the question "who does a state belong to?" It belonged to the king, because God had put him there. This is <span class="kt">divine right</span>, the claim Louis XIV made at Versailles (Topic 3.2). In most countries one church was the law: Catholic in France and Spain, Anglican in England. Nobles were born into privileges, such as freedom from some taxes, and across much of central and eastern Europe peasants were <span class="kt">serfs</span>, bound to work their lord's land. Authority came from God, from tradition and from birth.` }
          ]
        },
        {
          heading: 'Reason and evidence, first for nature',
          blocks: [
            { p: `In <span class="num">1687</span> the English scientist Isaac Newton published a book showing that a few laws of motion and gravity, worked out with mathematics and tested against what astronomers observed, explained both the paths of the planets and the fall of an apple. The lesson many readers took from it was that the world runs by laws a human mind can discover, without being told by an old book or a priest.` },
            { p: `In <span class="num">1689</span> the English philosopher John Locke argued that every idea in our minds comes from experience. At birth, he wrote, the mind is like "white paper." Learning from evidence and experience instead of accepting what authorities say is called <span class="kt">empiricism</span>. Scientific lectures and experiments became popular entertainment for people who could pay, like the family in Joseph Wright's painting of an air-pump experiment, made famous by a print of <span class="num">1769</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment was against religion. Most of its writers believed in God, and some were <b>deists</b>, who believed God made the world and then let it run by natural laws. What they questioned was religion used as a power of government (section 02).`
            } }
          ]
        },
        {
          heading: 'Then for people',
          blocks: [
            { p: `The step that made the method political was simple to state. If reason and evidence can explain the planets, can they explain people: how we should live together, what a government is for, and what makes a ruler's power rightful? Enlightenment writers turned the method on government, religion, law and society, and that is where the new political ideas came from.` }
          ]
        }
      ],
      useThis: {
        tool: `Name the method before the ideas. <em>The Enlightenment applied reason and evidence first to nature, then to human relationships, and that is why its political ideas challenged authority instead of simply disagreeing with it.</em>`,
        limit: `The method was shared by a small, mostly wealthy and literate group in 1750. Most people still learned what was true from their church and their community.`,
        comparison: `Against <em>divine right</em> in Topic 3.2: Louis XIV's claim rested on God's choice and could not be tested. An empiricist asks for evidence.`
      },
      terms: [
        ['Divine right', 'The claim that a king\'s power comes from God, so no one may question or remove him.'],
        ['Serf', 'A peasant bound to a lord\'s land, who owed the lord labor and could not leave freely.'],
        ['Empiricism', 'Learning from evidence and experience instead of accepting what authorities say.'],
        ['Deism', 'The belief that God created the world and then let it run by natural laws.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'answers',
      num: '02',
      accent: 'iron',
      name: 'The New Answers',
      navLabel: 'The new answers',
      dates: '1689 to 1763 &nbsp;·&nbsp; Locke, Montesquieu, Rousseau, Voltaire',
      thesis: `Enlightenment writers started with the individual person, not the king, and came up with new answers to the question of what makes power rightful. The change was not that kings disappeared; it was that a ruler now had to answer the question.`,
      parts: [
        {
          heading: 'Natural rights and the social contract',
          blocks: [
            { p: `In his <em>Second Treatise of Government</em> (<span class="num">1689</span>), Locke argued that people are born free and equal, with <span class="kt">natural rights</span> to their "lives, liberties and estates" (an estate is what you own). No government gives these rights, and no government may take them. People form a government to protect them.` },
            { p: `That makes government an agreement, a <span class="kt">social contract</span>. "No one," Locke wrote, can be "subjected to the political power of another, without his own consent." And if a government tries to destroy the people's rights or reduce them to slavery, it puts itself "into a state of war with the people," who no longer owe it obedience. Locke wrote most of the book around <span class="num">1680</span>, when some members of Parliament were trying to keep the Catholic James from becoming king, and he published it in <span class="num">1689</span>, just after Parliament had replaced James II. Either way, his argument defended the right to resist a king.` },
            { p: `In <span class="num">1762</span> Jean-Jacques Rousseau, a writer from Geneva who lived in France, began <em>The Social Contract</em> with a famous line: "Man is born free; and everywhere he is in chains." Rousseau argued that rightful power comes from the "general will" of the people as a whole, a more collective idea than Locke's.` }
          ]
        },
        {
          heading: 'Limits on power',
          blocks: [
            { p: `In <em>The Spirit of the Laws</em> (<span class="num">1748</span>), the French writer Montesquieu argued that liberty is safest when the power to make laws, the power to carry them out and the power to judge are held by different people, so that one power can check another. This is the <span class="kt">separation of powers</span>.` }
          ]
        },
        {
          heading: 'Religion and the state',
          blocks: [
            { p: `In <span class="num">1762</span> a court in Toulouse condemned Jean Calas, a Protestant cloth merchant, for killing his son to stop him from becoming a Catholic. His son had most likely taken his own life. Calas was tortured and executed. Voltaire, one of the most famous writers in Europe, took up the case, published a <em>Treatise on Tolerance</em> in <span class="num">1763</span>, and campaigned until Calas was declared innocent in <span class="num">1765</span>. The argument was <span class="kt">religious toleration</span>: no government should force a faith on anyone or punish people for what they believe.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: read the words',
              html: `Every quotation in this section is from the writers' own books, which are still in print and free online. When you describe a claim, go back to the words: Locke's "without his own consent" is a claim about where a government's right to rule comes from, and it argues against divine right.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Say what made a ruler legitimate, before and after. <em>The old answer was God and birth; the new answer was reason and the consent of the people.</em>`,
        limit: `The writers disagreed. Locke protected individual rights; Rousseau stressed the people as a whole; few of them wanted to abolish kings, and most did not mean their words for everyone (section 04).`,
        comparison: `Against the <em>Mandate of Heaven</em>: Chinese rulers could also lose the right to rule by governing badly, but the mandate still came from Heaven. Locke's consent comes from the people.`
      },
      terms: [
        ['Natural rights', 'Rights people are born with, such as life, liberty and property, which no government gives or may take away.'],
        ['Social contract', 'The idea that government is an agreement: people accept a government so that it will protect their rights.'],
        ['Separation of powers', 'Dividing the powers to make laws, carry them out and judge among different people, so no one holds them all.'],
        ['Religious toleration', 'The idea that no government should force a faith on anyone or punish people for their beliefs.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'spread',
      num: '03',
      accent: 'rust',
      name: 'The Ideas Travel, Before the Revolutions',
      navLabel: 'The ideas travel',
      dates: '1751 to 1810 &nbsp;·&nbsp; Print, salons, letters',
      thesis: `The ideas spread through print and conversation across Europe and the Atlantic, questioned tradition in every part of life, and came before the revolutions that began in 1775, 1789, 1791 and 1810. They gave revolutionaries their words, and they turned "the people" into the nation.`,
      parts: [
        {
          heading: 'Print, salons and letters',
          blocks: [
            { p: `From <span class="num">1751</span> to <span class="num">1772</span>, Denis Diderot and his partners published the <em>Encyclopédie</em> in Paris: seventeen volumes of articles and eleven of pictures that tried to explain everything by reason, from how to make glass or mount a fan to what a government owes its people. The French government banned it in <span class="num">1759</span>, and the Pope condemned it, but the last ten volumes of articles came out together in <span class="num">1765</span>, and printers in other countries copied it: a second edition was printed in Lucca, Italy, from <span class="num">1758</span>.` },
            { p: `The ideas also traveled in newspapers and pamphlets, in London's coffeehouses, in letters between writers across Europe and the Americas, and in the conversation gatherings of Paris called <span class="kt">salons</span>, which were often run by women. In <span class="num">1784</span> the German philosopher Immanuel Kant summed up the attitude in a motto: "Dare to know," which he explained as having the courage to use your own understanding.` }
          ]
        },
        {
          heading: 'Before the revolutions',
          blocks: [
            { p: `The College Board's words are that Enlightenment thought "often preceded" revolutions. The American Revolution began in <span class="num">1775</span>, the French Revolution in <span class="num">1789</span>, the Haitian Revolution in <span class="num">1791</span>, and the wars of independence in Spanish America in <span class="num">1810</span>. In Bogotá, Antonio Nariño secretly printed a Spanish translation of France's new declaration of rights (in <span class="num">1793</span> or <span class="num">1794</span>) and was arrested for it in <span class="num">1794</span>; he later became one of the leaders of New Granada's independence.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment caused the revolutions. The ideas came first and gave revolutionaries words to explain what they wanted, but taxes, debt, war, slavery and colonial grievances caused them too. Topic 5.2 is about those causes.`
            } }
          ]
        },
        {
          heading: 'The people become a nation',
          blocks: [
            { p: `If a state belongs to its people, a new question follows: which people? More and more, the answer was <em>the nation</em>, a people who saw themselves as one, often because they shared a language, a faith, customs or a homeland. In <span class="num">1789</span> the French revolutionaries wrote that "the principle of all sovereignty resides essentially in the nation." Over the next century, <span class="kt">nationalism</span>, loyalty to your nation above a king or an empire, became one of the strongest forces shaping states and empires: it helped build new countries and pulled at empires of many peoples. Topic 5.2 tells that story.` }
          ]
        }
      ],
      useThis: {
        tool: `Context, not cause. <em>Enlightenment ideas spread and came before the revolutions, so they are the intellectual and ideological context the revolutions happened in.</em>`,
        limit: `Most people in 1789 could not read the Encyclopédie. They met the ideas, if at all, through talk, sermons, pamphlets and rumor.`,
        comparison: `Against the <em>printing press</em> of the 1400s: the technology was old by 1750. What was new was how much was printed, and the network of readers, salons and letters around it.`
      },
      terms: [
        ['Encyclopédie', 'The French encyclopedia of 1751 to 1772, edited by Diderot, which explained everything by reason and was banned and printed anyway.'],
        ['Salon', 'A conversation gathering in a private home, often run by a woman, where writers and readers discussed ideas.'],
        ['Sovereignty', 'The highest power in a state.'],
        ['Nationalism', 'Loyalty to your nation, a people who see themselves as one, above a king or an empire.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'reform',
      num: '04',
      accent: 'oxide',
      name: 'Pressing the Words Further',
      navLabel: 'Pressing further',
      dates: '1787 to 1888 &nbsp;·&nbsp; Abolition, serfs, voters',
      thesis: `The words sounded like everyone, but the men who wrote them often did not mean everyone. Over the next century, reform movements driven by Enlightenment ideas and by religious faith pressed the same words until rights reached the enslaved, the serfs and many more voters, slowly and unevenly.`,
      parts: [
        {
          heading: 'The words were bigger than their writers',
          blocks: [
            { p: `Locke owned shares in the Royal African Company, an English company that traded enslaved Africans, in the 1670s. Rousseau wrote in <em>Emile</em> (<span class="num">1762</span>) that "a woman's education must therefore be planned in relation to man." Most of the men who wrote and read the new ideas did not mean them for women, enslaved Africans or peasants, though a few did: the French philosopher Condorcet argued for women's rights in <span class="num">1790</span>. Yet the words were written down, and anyone could ask the philosophers' own question: by what right am I left out?` }
          ]
        },
        {
          heading: 'Abolition: ideas and faith together',
          blocks: [
            { p: `In <span class="num">1787</span> twelve men in London, nine of them Quakers, a Christian group whose members had come to see slavery as a sin, founded the Society for Effecting the Abolition of the Slave Trade. Its seal showed a kneeling African man in chains and the words "Am I not a man and a brother?", and the potter Josiah Wedgwood turned it into a medallion that supporters wore. Olaudah Equiano, who had been enslaved, published his life story in <span class="num">1789</span> and traveled across Britain speaking against the trade.` },
            { p: `<span class="kt">Abolition</span> came country by country. Britain banned the slave trade in <span class="num">1807</span>. In <span class="num">1834</span> it began ending slavery in most of its empire, though freed people had to keep working for their former owners as unpaid "apprentices" until <span class="num">1838</span>. France abolished slavery in its colonies in <span class="num">1794</span>, brought it back in <span class="num">1802</span>, and ended it again in <span class="num">1848</span>. Brazil was the last country in the Americas, in <span class="num">1888</span>. The enslaved people of Saint-Domingue ended slavery there by revolution, which is Topic 5.2.` }
          ]
        },
        {
          heading: 'Serfs and voters',
          blocks: [
            { p: `<span class="kt">Serfdom</span> ended too. In <span class="num">1848</span> the Austrian Empire freed its peasants from the forced labor they owed their lords. In <span class="num">1861</span> Tsar Alexander II of Russia freed more than 20 million serfs. He had reportedly told Russian nobles in <span class="num">1856</span> that it was better to end serfdom "from above" than to wait for it to end "from below," and Russia's defeat in the Crimean War pushed him too. The freed serfs had to pay for their land over many years.` },
            { p: `<span class="kt">Suffrage</span>, the right to vote, widened in steps. In <span class="num">1848</span> France gave the vote to all adult men. Britain widened voting among men in <span class="num">1832</span>, <span class="num">1867</span> and <span class="num">1884</span>, and even then many men could not vote.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that every expansion of rights came from reformers below. Some came from campaigns and revolutions; some came from rulers like Alexander II, who feared what would happen if they did not act. When you explain a change, say who made it happen and why.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name both engines. <em>The reform movements were driven by Enlightenment ideas about natural rights and by religious faith, and they took decades.</em>`,
        limit: `Ending slavery or serfdom in law did not end hard labor or poverty. Freed people and freed serfs often stayed poor, and other kinds of forced labor went on in many places.`,
        comparison: `Against <em>Topic 4.4</em>: the plantation economy had made the Atlantic slave trade huge. By 1888 every country in the Americas had abolished slavery in law.`
      },
      terms: [
        ['Abolition', 'Ending slavery, or ending the slave trade, by law.'],
        ['Quakers', 'A Christian group whose members, by the late 1700s, led some of the first campaigns against slavery.'],
        ['Serfdom', 'A system in which peasants were bound to the land and owed labor to a lord.'],
        ['Suffrage', 'The right to vote.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'women',
      num: '05',
      accent: 'gold',
      name: 'Women\'s Demands, and What Stayed',
      navLabel: 'Women\'s demands',
      dates: '1791 to 1900 &nbsp;·&nbsp; De Gouges, Wollstonecraft, Seneca Falls',
      thesis: `Women pressed the same words too, because the men who wrote about the rights of man often meant only men. Their demands challenged both political and gender hierarchies. By 1900 much had changed, and much had not.`,
      parts: [
        {
          heading: 'Three demands',
          blocks: [
            { p: `In September <span class="num">1791</span> the French writer Olympe de Gouges rewrote France's declaration of rights as the <em>Declaration of the Rights of Woman and of the Female Citizen</em>. Where the declaration of <span class="num">1789</span> said "men are born and remain free and equal in rights," her first article said: "Woman is born free and remains equal to man in rights." The revolutionary government executed her in November <span class="num">1793</span>.` },
            { p: `In <span class="num">1792</span> the English writer Mary Wollstonecraft published <em>A Vindication of the Rights of Woman</em>. She quoted Rousseau, who had warned that if women were educated like men, "the less power will they have over us," and answered: "I do not wish them to have power over men; but over themselves." Her claim was that women can reason, so they must be educated to think and decide for themselves.` },
            { p: `In <span class="num">1840</span> the American abolitionist Lucretia Mott, a Quaker minister, went to an antislavery convention in London as a delegate and was refused a seat because she was a woman. Elizabeth Cady Stanton, there with her husband, a delegate, sat with Mott and the other women, apart from the men. In July <span class="num">1848</span> the two of them, with three other women, organized a women's rights convention in Seneca Falls, New York. Its <em>Declaration of Sentiments</em>, drafted by Stanton with members of the M'Clintock family, copied the Declaration of Independence and added two words: "all men and women are created equal." It complained that a woman had never been "permitted ... to exercise her inalienable right to the elective franchise," the vote. The resolution demanding the vote was the only one not passed unanimously; one hundred women and men signed the declaration.` },
            { p: `This was <span class="kt">feminism</span> emerging: the claim that women and men should have equal rights. It challenged political hierarchy, who votes and who rules, and gender hierarchy, who is in charge at home and under the law. Under the law of the time, the Seneca Falls declaration complained, a married woman was "civilly dead."` }
          ]
        },
        {
          heading: 'What stayed by 1900',
          blocks: [
            { p: `By <span class="num">1900</span>, kings and emperors still ruled most of Europe and much of the world, many of them sharing power with elected parliaments. Slavery had been abolished across the Americas, but other kinds of forced labor went on in many places. Many countries let some or all men vote. Women could vote in national elections almost nowhere: New Zealand, in <span class="num">1893</span>, was the first self-governing country where all adult women could vote in national elections.` },
            { p: `So the Enlightenment changed the answer to "who does a state belong to?": to its people, by reason and consent, not to a king by God's will. The question it taught people to ask kept working long after the philosophers were gone. That is the change. How slowly the rights reached, and how many people were still waiting in 1900, is the continuity.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that rights reached everyone in 1789. The declaration of 1789 left women out of citizenship, France brought back slavery in 1802, and women voted almost nowhere in 1900. But do not swing to "nothing changed": the claim that rights belong to people by birth was new, and people used it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Compare a claim to the words it borrows. <em>De Gouges and the Seneca Falls declaration kept the old words and changed who they covered: that is a change and a continuity in one sentence.</em>`,
        limit: `The women at Seneca Falls were mostly white and middle class, and their declaration spoke for some women more than others. Name whose voice a source carries.`,
        comparison: `Against <em>the 1789 declaration</em>: same words, a wider claim. Describe what each one argues for and against.`
      },
      terms: [
        ['Feminism', 'The claim that women and men should have equal rights.'],
        ['Declaration of Sentiments', 'The 1848 Seneca Falls declaration that copied the Declaration of Independence and added "and women."'],
        ['Elective franchise', 'The right to vote in elections.'],
        ['Hierarchy', 'A ranking of people, with some above others in power or status.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The first two answer Learning Objective A, the ideas as the context of the revolutions; the last two answer Learning Objective B, what the Enlightenment did to societies over time.`,
    pairs: [
      {
        category: 'Continuity and Change',
        title: 'The question changed before the kings did',
        body: `Before the Enlightenment, rulers said their power came from God, tradition and birth. Locke argued in 1689 that people are born with natural rights and that no one may be put under a government's power without consent; Montesquieu (1748) argued for the separation of powers, and Voltaire (1763) for religious toleration. What changed was what made a ruler legitimate. What continued was that kings still ruled almost everywhere.`
      },
      {
        category: 'Context',
        title: 'The ideas came before the revolutions',
        body: `The ideas spread through the Encyclopédie (1751 to 1772, banned in France and reprinted in Italy), salons, coffeehouses and letters, and came before the revolutions of 1775, 1789, 1791 and 1810. Nariño's printed translation of the French declaration in Bogotá shows them crossing the Atlantic. If a state belongs to its people, the people could be the nation, and nationalism became a major force of the 1800s.`
      },
      {
        category: 'Continuity and Change',
        title: 'Reformers pressed the words further, slowly',
        body: `Driven by natural rights and by faith, reformers founded the London antislavery society of 1787 (nine of its twelve founders were Quakers). Britain began ending slavery in most of its empire in 1834 and Brazil, last in the Americas, in 1888. Serfdom ended in Austria in 1848 and Russia in 1861; France gave all adult men the vote in 1848. Each change took decades.`
      },
      {
        category: 'Claims and Evidence',
        title: 'Women kept the words and changed who they covered',
        body: `De Gouges (1791) wrote that "woman is born free and remains equal to man in rights"; Wollstonecraft (1792) wanted women to have power "over themselves"; the Seneca Falls declaration (1848) said "all men and women are created equal" and demanded the vote. Their claims challenged political and gender hierarchies, but by 1900 women could vote in national elections almost nowhere.`
      }
    ]
  }
};
