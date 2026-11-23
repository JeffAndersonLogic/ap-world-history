'use strict';

/**
 * Unit 5 by region: Europe (the Continent and Russia).
 * One continuous story of continental Europe from 1750 to 1900, told in five sections: the
 * Enlightenment's new answer to "by what right?" (KC-5.3.I.A, KC-5.3.I), the French Revolution,
 * its declaration and its nation in arms (KC-5.3, KC-5.3.I.B, KC-5.3.II.ii, KC-5.3.IV.B), the
 * liberals of 1830 and 1848, the end of serfdom and the unification of Italy and Germany
 * (KC-5.3.IV.A.i, KC-5.3.I.C, KC-5.3.II.i, KC-5.3.II.iii), industry spreading to Belgium, the
 * German states and Russia, with the second industrial revolution and the tariff story
 * (KC-5.1.I.D, KC-5.1.I.E, KC-5.1.IV, KC-5.1.III.A), and Marx's party and Bismarck's answer to it
 * (KC-5.3.IV.A.ii, KC-5.1.V.A). Facts come from the Topic 5.1, 5.2, 5.4,
 * 5.5, 5.7 and 5.8 chapters and their claim ledgers, keeping their narrowings (the Enlightenment
 * not against religion; the ideas came before the revolutions but were not their only cause;
 * Seraing "in what is today Belgium"; the Manifesto's first section, not its first line;
 * Germany's two 1879 tariffs for two reasons; Alexander II's words as reported; Bismarck's motive
 * "in part"; no Marxist revolution won before 1900). Britain has its own chapter. The Balkans are
 * told with the Ottoman Empire in the Middle East chapter, because that is the empire they left.
 *
 * Plain-language and accuracy pass (2026-11-21, after the Unit 5 baseline panel): sentences cut
 * to one idea each and definitions moved out from between commas; the College Board's words
 * moved out of the story into one "What the College Board says" box per section (an "In short"
 * line, each Key Concept sentence whole or cut with " ... ", each optional example labelled),
 * quoted from scripts/lib/ced-source/unit-5.js; a "The story in short" list; a "How we know" box
 * (Alexander II's reported words); six closing cards, one per side. Four claims added or sharpened
 * on the panel's findings: the Civil Code of 1804 (the Napoleonic Code) named as part of the law
 * Napoleon's armies carried; the Anti-Socialist Law of 1878 banned socialist groups, meetings and
 * newspapers but not socialist candidates for the Reichstag; the Bessemer process (1856, from Topic
 * 5.5) named as the new steel method; and the Russian state's part in industry under Sergei Witte,
 * finance minister 1892 to 1903 (foreign loans for railways and industry). The Enlightenment mistake
 * box now warns against a single cause, not against the causal claim. See the "Plain-language and
 * accuracy pass (2026-11-21)" section of docs/UNIT-5-BY-REGION-CLAIM-LEDGER.md.
 *
 * Review loop pass 2 (2026-11-22, findings N1 to N4, N6, Q12): the Anti-Socialist Law told in
 * order (renewal voted down 25 January 1890, election 20 February, law lapsed 30 September;
 * Wikipedia, "Anti-Socialist Laws"); labor unions taught (many of the banned groups were unions;
 * France made unions legal in 1884); Smith's followers on the Continent (Jean-Baptiste Say;
 * Michel Chevalier, a free trader, helped prepare the 1860 treaty; Wikipedia biographies); the
 * Trans-Siberian's settlers and grain (Wikipedia, "Trans-Siberian Railway", Effects); the Social
 * card no longer says ranks of birth "fell" in Russia, whose nobility stayed a legal estate.
 *
 * Review loop pass 3 (2026-11-23, findings X5b, X6b): the KC-5.3.IV.B quotation narrowed to "an
 * emergent feminism", which de Gouges teaches here (the Americas chapter teaches the demand for the
 * vote at Seneca Falls); facts after 1900 marked as later: Germany's dyes by 1914, the
 * Trans-Siberian's through route by 1904, and the settlers, whose peak came from 1906 to 1914
 * (Wikipedia, "Trans-Siberian Railway": "about four million peasants arrived in Siberia").
 *
 * Review loop pass 4 (2026-11-23, findings AE2, AE3, AE4, AG1e, and the self-audit): KC-5.3.IV.B
 * quoted whole again, with de Gouges's Article 6 as the demand (all citizens, women and men, take
 * part in making the law, in person or through representatives; Wikipedia, "Declaration of the
 * Rights of Woman and of the Female Citizen"); Venetia added to Italy in 1866; KC-5.1.I.B dropped
 * (the Britain and Americas chapters claim and teach steam, coal and the fossil fuels revolution);
 * KC-5.3.I.C kept, because this is the only chapter that teaches the end of serfdom, with the
 * liberals' demands tied to Enlightenment ideas and the Quakers of 1787 (from the Britain chapter)
 * for religious ideals; self-audit: empiricism ("by observing and testing"), industry reaching the
 * United States and Japan (links), electricity (Siemens and Halske's electric train at the Berlin
 * trade fair of 1879; Wikipedia, "Siemens locomotive of 1879"), engines as precision machinery,
 * socialism defined, and KC-5.1.V.D dropped (the Britain chapter claims and teaches all four kinds
 * of reform).
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r5-europe',
  slug: 'region-5-europe',
  unit: '5',
  region: 'Europe',
  titleHtml: '<em>Europe</em>, the Continent and Russia',
  deck: `From 1750 to 1900, the European continent was remade twice. First came new ideas about who has the right to rule, and a revolution in France. Then came factories, railways and workers' parties. Follow both, from Paris to the coal country of the southern Russian Empire.`,
  inShort: [
    `Around 1750, writers began to ask what gives a king the right to rule.`,
    `In 1789 France's revolution gave power to the nation, and Napoleon's armies carried its laws abroad.`,
    `In the 1800s liberals demanded constitutions, rulers freed the serfs, and Italy and Germany were unified.`,
    `Industry spread from Britain to Belgium, the German states and later Russia, following coal and railways.`,
    `Marx's ideas shaped Germany's workers' party, and Bismarck answered it with bans and with insurance.`
  ],
  topics: ['5.1', '5.2', '5.4', '5.5', '5.7', '5.8'],
  ced: [
    'KC-5.3.I',
    'KC-5.3.I.A',
    'KC-5.3.I.B',
    'KC-5.3.I.C',
    'KC-5.3',
    'KC-5.3.II.i',
    'KC-5.3.II.ii',
    'KC-5.3.II.iii',
    'KC-5.3.IV.A.i',
    'KC-5.3.IV.A.ii',
    'KC-5.3.IV.B',
    'KC-5.1.I.D',
    'KC-5.1.I.E',
    'KC-5.1.III.A',
    'KC-5.1.IV',
    'KC-5.1.V.A'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'enlightenment',
      num: '01',
      accent: 'gold',
      name: 'By What Right?',
      navLabel: 'The Enlightenment',
      dates: '1687 to 1784 &nbsp;·&nbsp; Reason, rights, and the people',
      thesis: `In 1750 most rulers said their power came from God. Writers began to ask what gave any ruler the right to rule.`,
      parts: [
        {
          heading: 'The old answer',
          blocks: [
            { p: `In 1750 most European kings said that God had given them their power: <span class="kt">divine right</span>. In most countries one church was the official church, and the law favored it over every other. Nobles were born with special rights (privileges), such as freedom from some taxes. In much of central and eastern Europe, peasants were <span class="kt">serfs</span>, bound to work their lord's land.` }
          ]
        },
        {
          heading: 'Reason, first for nature, then for people',
          blocks: [
            { p: `In <span class="num">1687</span> the English scientist Isaac Newton published laws of motion and gravity that explained both the planets and a falling apple. Many readers took a lesson: the world runs by laws that people can discover by observing and testing.` },
            { p: `Then writers turned the same method on people. In <span class="num">1689</span> the English philosopher John Locke argued that people are born with <span class="kt">natural rights</span>. These are rights to their "lives, liberties and estates" (property). Government, he said, rests on a <span class="kt">social contract</span>: people accept it so that it will protect their rights. No one may be "subjected to the political power of another, without his own consent."` },
            { p: `French writers pushed the questions further. In <span class="num">1748</span> Montesquieu argued for the <span class="kt">separation of powers</span>. One group makes the laws, another carries them out, and a third judges. Liberty, he said, is safest when power is divided.` },
            { p: `Voltaire fought for <span class="kt">religious toleration</span> (freedom to hold any faith without punishment). In <span class="num">1762</span> a French court executed a Protestant named Jean Calas for killing his son to stop him from becoming a Catholic. Calas most likely did not commit the crime, and Voltaire campaigned to clear his name.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment was against religion. Most of its writers believed in God. Many doubted miracles and church teachings, and a few rejected God. Above all they attacked the church's power over government and law.`
            } }
          ]
        },
        {
          heading: 'The ideas travel',
          blocks: [
            { p: `From <span class="num">1751</span> to <span class="num">1772</span>, Denis Diderot and his partners published the Encyclopédie in Paris. It tried to explain everything by reason. The ideas also traveled in letters and in <span class="kt">salons</span>. Salons were conversation gatherings in Paris homes, often run by women.` },
            { p: `In <span class="num">1784</span> the German philosopher Immanuel Kant summed it up: "Dare to know." Questions like these often came before revolts against kings (<a href="#chapter-t5-1">Topic 5.1</a>).` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Enlightenment thinkers used reason to question old authority, and their ideas often came before revolutions.`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Natural rights', `Rights people are born with, such as life, liberty and property. No government gives them or may take them.`],
        ['Social contract', `The idea that people accept a government so that it will protect their rights.`],
        ['Separation of powers', `Dividing the powers to make laws, carry them out and judge, so no one holds them all.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'france',
      num: '02',
      accent: 'rust',
      name: 'France Remakes Itself',
      navLabel: 'French Revolution',
      dates: '1788 to 1815 &nbsp;·&nbsp; Debt, a declaration, the Terror, and Napoleon',
      thesis: `A nearly bankrupt king called an assembly to raise taxes, and its commoners took power. France wrote down rights and ended its monarchy. Then a general took over and carried its laws abroad.`,
      parts: [
        {
          heading: 'Debt and bread',
          blocks: [
            { p: `France had spent heavily to help the Americans win their revolution. <a href="#r5-americas-united-states">The Americas chapter</a> tells that war. Older war debts added to the cost. By <span class="num">1788</span> King Louis XVI's government was nearly bankrupt.` },
            { p: `To raise taxes, the king called the <span class="kt">Estates-General</span>. This old assembly had three parts: the clergy, the nobles and everyone else. The clergy and nobles paid little in taxes. The <span class="kt">Third Estate</span> (most of the people) paid most of them. After a bad harvest in <span class="num">1788</span>, the price of bread soared.` },
            { p: `In June <span class="num">1789</span> the Third Estate declared itself the National Assembly. On 14 July a Paris crowd stormed the Bastille (a royal fortress) to seize its gunpowder.` }
          ]
        },
        {
          heading: 'The words',
          blocks: [
            { p: `In August <span class="num">1789</span> the Assembly ended the nobles' special privileges. It adopted the Declaration of the Rights of Man and of the Citizen. Article 1 says: "Men are born and remain free and equal in rights."` },
            { p: `Article 3 says: "The principle of all sovereignty resides essentially in the nation." <span class="kt">Sovereignty</span> (the highest power in a state) belonged to the nation, not the king.` },
            { p: `The words reached further than the men who wrote them meant. In <span class="num">1791</span> Olympe de Gouges rewrote the declaration for women. Her Declaration of the Rights of Woman and of the Female Citizen said: "Woman is born free and remains equal to man in rights." Her Article 6 said that all citizens, women and men, should take part in making the law, in person or through representatives. The revolutionary government executed her in <span class="num">1793</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give the Enlightenment as the only cause of the revolution. Its ideas gave the revolutionaries their words. Debt, taxes, privilege and the price of bread mattered too. Name more than one cause.`
            } }
          ]
        },
        {
          heading: 'A republic, a nation in arms, an emperor',
          blocks: [
            { p: `France ended its monarchy in <span class="num">1792</span> and became a <span class="kt">republic</span> (a state with no king). It executed the king in January <span class="num">1793</span>.` },
            { p: `At war with much of Europe, the government ordered in <span class="num">1793</span> that "all Frenchmen are in permanent requisition for the service of the armies." Young men would fight, married men would make weapons, and women would make tents and work in hospitals. The government was using the people's loyalty to the nation to fight a war.` },
            { p: `This loyalty is called <span class="kt">nationalism</span>. Nationalism is a sense that people who share a language, religion, social customs and territory form one nation, and loyalty to that nation.` },
            { p: `Afraid of enemies at home, the government also began the Terror (<span class="num">1793</span> to <span class="num">1794</span>), killing thousands. In <span class="num">1794</span> France abolished slavery in its colonies. Enslaved people in its colony of Saint-Domingue had already risen up in <span class="num">1791</span>, as <a href="#r5-americas-haiti">the Americas chapter</a> tells.` },
            { p: `In <span class="num">1799</span> the general Napoleon Bonaparte took power. In <span class="num">1802</span> he brought slavery back in some French colonies, such as Guadeloupe, and in <span class="num">1804</span> he crowned himself emperor.` },
            { p: `That year France also got a new <span class="kt">Civil Code</span> (the Napoleonic Code). It wrote some of the revolution's changes into law, such as the end of noble privilege. Napoleon's armies carried the revolution's laws, this code among them, across Europe. They also made many Europeans hate French rule.` },
            { p: `In <span class="num">1808</span> Napoleon invaded Spain. That gave Spanish America's colonists their chance to break away, which <a href="#r5-americas-spanish-america">the Americas chapter</a> tells.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: France's revolution put Enlightenment ideas into law and used the people's loyalty to the nation.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "The ideas of Enlightenment philosophers, as reflected in revolutionary documents ... including ... the French “Declaration of the Rights of Man and of the Citizen” during the French Revolution ... influenced resistance to existing political authority, often in pursuit of independence and democratic ideals."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies."`,
                `An optional College Board example: "Olympe de Gouges's Declaration of the Rights of Woman and of the Female Citizen".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Estates-General', `France's old assembly of clergy, nobles and commoners. The king called it in 1788 for the first time since 1614.`],
        ['Third Estate', `Everyone in France who was not clergy or noble: most of the people.`],
        ['Nationalism', `A sense that people who share a language, religion, social customs and territory form one nation, and loyalty to that nation.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'nations',
      num: '03',
      accent: 'iron',
      name: 'Liberals, Serfs, and Nations',
      navLabel: 'Nations',
      dates: '1830 to 1871 &nbsp;·&nbsp; 1848, the end of serfdom, Italy and Germany',
      thesis: `After Napoleon, kings came back, but the revolution's ideas stayed. Liberals rose up, rulers freed the serfs, and nationalists built Italy and Germany.`,
      parts: [
        {
          heading: '1830 and 1848',
          blocks: [
            { p: `The revolutions left new answers to an old question: how should a country be run? <span class="kt">Liberals</span> wanted a <span class="kt">constitution</span> (basic laws that even the government must follow). They wanted an elected <span class="kt">parliament</span> (a lawmaking assembly) to limit the government. These demands grew from Enlightenment ideas, such as natural rights and the separation of powers.` },
            { p: `They wanted rights such as a free press protected, but many wanted only men with property to vote. <span class="kt">Democracy</span> (rule by the people) pushed for the vote to reach all men.` },
            { p: `These ideas helped set off revolutions across Europe in <span class="num">1830</span> and <span class="num">1848</span>. In 1848 hard times after the bad harvests of 1845 to 1847 helped too. Crowds demanded constitutions and wider <span class="kt">suffrage</span> (the right to vote). That year France gave the vote to all adult men and ended slavery in its colonies for good. Most of the uprisings were crushed within two years, but the demands did not go away.` },
            { p: `Religious faith moved reformers too. In <span class="num">1787</span> twelve men founded Britain's first society against the slave trade. Nine were Quakers (members of a Christian group that had come to see slavery as a sin). <a href="#r5-britain-calls">The Britain chapter</a> tells that story.` }
          ]
        },
        {
          heading: 'The end of serfdom',
          blocks: [
            { p: `In <span class="num">1848</span> the Austrian Empire freed its peasants from the forced labor they owed their lords. In <span class="num">1861</span> Tsar Alexander II of Russia freed more than 20 million serfs. In <span class="num">1856</span> he had reportedly told Russian nobles that it was better to end serfdom "from above" than to wait for it to end "from below." He meant that the government should end it before the serfs ended it themselves.` },
            { p: `Russia's defeat in the Crimean War pushed him too. The freed serfs had to pay for their land over many years.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: "reportedly"',
              html: `Alexander's words come from reports of his speech to the nobles of Moscow in March 1856. Historians quote them as his reported words, so write that he reportedly said them.`
            } },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that every expansion of rights was won by ordinary people pushing up. Some came from rulers like Alexander II, who feared what would happen if they did not act.`
            } }
          ]
        },
        {
          heading: 'Nationalism joins states',
          blocks: [
            { p: `Nationalism could also join small states into one: <span class="kt">unification</span>. Italy was split into several states, some ruled by Austria. Count Cavour was chief minister of the Italian kingdom of Piedmont-Sardinia. The soldier Giuseppe Garibaldi led volunteers who took Sicily and Naples in <span class="num">1860</span>. Nationalists like these joined most of Italy into one kingdom in <span class="num">1861</span>. Venetia was added in <span class="num">1866</span>, and Rome in <span class="num">1870</span>.` },
            { p: `Germany was split into more than thirty states. In <span class="num">1848</span> German liberals met at Frankfurt to unite them under an elected parliament, and failed. In <span class="num">1862</span> Otto von Bismarck, chief minister of Prussia (the largest German state), told its lawmakers something different. Great questions were decided not "by speeches and majority resolutions" but "by iron and blood." He meant armies and war.` },
            { p: `After wars against Denmark, Austria and France, the German Empire was proclaimed on 18 January <span class="num">1871</span> at Versailles. Nationalism also pulled peoples out of empires. <a href="#r5-middle-east-nations">The Middle East chapter</a> tells how Balkan peoples left the Ottoman Empire.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Anger at kings produced new ideologies, ideas and faith moved reforms that widened rights, and nationalists joined divided lands.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Nationalism also became a major force shaping the historical development of states and empires."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions."`,
                `An optional College Board example: "German and Italian unifications".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Liberalism', `In the 1800s, the belief that a constitution and an elected parliament should limit government and protect each person's rights.`],
        ['Suffrage', `The right to vote.`],
        ['Unification', `Joining several states into one.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'industry',
      num: '04',
      accent: 'oxide',
      name: 'Industry Spreads Across the Continent',
      navLabel: 'Industry spreads',
      dates: '1817 to 1904 &nbsp;·&nbsp; Coal, railways, steel, chemicals, and tariffs',
      thesis: `Factory methods spread from Britain to the coalfields of the Continent, and later to Russia. After 1850 came cheap steel, new chemicals and new engines.`,
      parts: [
        {
          heading: 'Coal and railways',
          blocks: [
            { p: `Britain tried to keep its factory methods at home, but they left anyway. <a href="#r5-britain-factory">The Britain chapter</a> tells how they began.` },
            { p: `In <span class="num">1817</span> John Cockerill began building machines at Seraing, near Liège, in what is today Belgium. His father was an English machine maker. Liège sat on one of the Continent's richest <span class="kt">coalfields</span> (areas with large beds of coal underground). Factories grew where coal lay, as in Britain: around Liège, in the Ruhr valley of the German states, and in northern France.` },
            { p: `Germany had 469 kilometers of railway in <span class="num">1840</span> and more than 51,000 in <span class="num">1900</span> (<a href="#chapter-t5-5">Topic 5.5</a>).` }
          ]
        },
        {
          heading: 'Russia comes later',
          blocks: [
            { p: `Russia's big growth came mostly after 1870. In the early 1870s a Welsh engineer named John Hughes built ironworks in the coal country of the southern Russian Empire, in today's eastern Ukraine.` },
            { p: `Russia's government pushed industry on purpose. From <span class="num">1892</span> to <span class="num">1903</span>, Sergei Witte was Russia's minister of finance. His government borrowed large sums from foreign lenders. It spent the money on railways and new industry. Russia's industry grew fastest in the 1890s.` },
            { p: `Russia's railways grew from 27 kilometers in <span class="num">1840</span> to more than 53,000 in <span class="num">1900</span>. Russia began the Trans-Siberian Railway in <span class="num">1891</span>, and Witte pushed it forward. By <span class="num">1904</span>, after this unit ends, trains could cross to the Pacific, reaching lands far from any sea.` },
            { p: `The railway carried peasant settlers east to farm Siberia. Their numbers grew most after 1900, when this unit ends, and by 1914 millions had come. Trains also carried Siberian wheat west to sell.` },
            { p: `Factory methods also spread beyond Europe, to the United States and Japan. <a href="#r5-americas-industry">The Americas chapter</a> and <a href="#r5-east-asia-japan-builds">the East Asia chapter</a> tell those stories.` },
            { p: `Steamships and the telegraph moved people and news across the oceans too. <a href="#r5-britain-factory">The Britain chapter</a> tells that story.` }
          ]
        },
        {
          heading: 'The second industrial revolution',
          blocks: [
            { p: `After 1850 the <span class="kt">second industrial revolution</span> brought new methods in steel, chemicals, electricity and precision machinery. <span class="kt">Steel</span> (iron with a little carbon) is stronger and tougher than ordinary iron. Before the 1850s it was slow and costly to make in large amounts.` },
            { p: `In <span class="num">1856</span> the English inventor Henry Bessemer found a faster way, the <span class="kt">Bessemer process</span>. Air blown through melted iron burned out carbon and other impurities, and the burning kept the metal hot. Cheap steel became rails, bridges, ships and machines.` },
            { p: `German chemical firms led the world. BASF, founded in <span class="num">1865</span>, built laboratories whose job was to invent new dyes. By 1914, after this unit ends, Germany made most of the world's dyes.` },
            { p: `Electricity became a new source of power. In <span class="num">1879</span> the German firm Siemens and Halske ran an electric train at a Berlin trade fair.` },
            { p: `In <span class="num">1876</span> Nikolaus Otto built a four-stroke gas engine in Germany. In <span class="num">1886</span> Carl Benz patented a car with a small engine that burned a fuel made from oil. Both were <span class="kt">internal combustion engines</span>, which burn fuel inside the engine. They were precision machinery: their metal parts had to be made to exact sizes to fit and work. Their big changes came after 1900.` }
          ]
        },
        {
          heading: 'Free trade, for a while',
          blocks: [
            { p: `Under <span class="kt">mercantilism</span>, governments guarded trade with <span class="kt">tariffs</span> (taxes on imported goods). In the 1800s Western Europe moved toward <span class="kt">free trade</span>, with low tariffs or none. <a href="#r5-britain-free-trade">The Britain chapter</a> tells how Britain led, partly persuaded by Adam Smith's case for free trade.` },
            { p: `Smith's ideas won followers on the Continent too. In France the economist Jean-Baptiste Say spread Smith's ideas and argued for free trade.` },
            { p: `In <span class="num">1860</span> Britain and France cut tariffs on each other's goods in the Cobden-Chevalier Treaty. Michel Chevalier, the French economist who helped prepare it, was a free trader too. In the 1860s similar treaties lowered tariffs across much of Western Europe.` },
            { p: `Then some countries turned back. From <span class="num">1879</span> Germany put tariffs on imported grain, to protect its farmers from cheap American and Russian grain. It also taxed imported iron, to protect its factories after a long business slump that began in <span class="num">1873</span> (<a href="#chapter-t5-7">Topic 5.7</a>).` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Industry spread beyond northwestern Europe, new methods made steel, chemicals, electricity and machines, railways opened inland lands, and Smith's ideas helped make trade freer.`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan."`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: "The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century."`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration."`,
                `<a href="#chapter-t5-7">Topic 5.7</a>: "Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith's theories of laissez-faire capitalism and free markets."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Second industrial revolution', `New methods in steel, chemicals, electricity and precision machinery after about 1850.`],
        ['Internal combustion engine', `An engine that burns its fuel inside the cylinder, like a car engine.`],
        ['Free trade', `Trade between countries with low tariffs (import taxes) or none.`]
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'workers',
      num: '05',
      accent: 'gold',
      name: 'Marx\'s Party and Bismarck\'s Answer',
      navLabel: 'Workers and reform',
      dates: '1848 to 1900 &nbsp;·&nbsp; Socialists, the Commune, and insurance',
      thesis: `Marx predicted a workers' revolution. In Germany his ideas shaped a party that won the most votes in 1890. The government answered with bans and benefits.`,
      parts: [
        {
          heading: 'The Manifesto',
          blocks: [
            { p: `In <span class="num">1848</span> the German writers Karl Marx and Friedrich Engels published the Communist Manifesto. Its first section begins: "The history of all hitherto existing society is the history of class struggles."` },
            { p: `Industry, they argued, was splitting society into factory owners (the <span class="kt">bourgeoisie</span>) and wage workers (the <span class="kt">proletarians</span>). One day the workers would overthrow the owners. They would end private ownership of the <span class="kt">means of production</span> (the land, factories and machines that make wealth). They would build a society without classes: <span class="kt">communism</span>.` },
            { p: `Marx's ideas were one kind of <span class="kt">socialism</span>: the idea that land and factories should be owned in common, not by private owners.` }
          ]
        },
        {
          heading: 'Germany\'s workers\' party',
          blocks: [
            { p: `German workers founded parties in <span class="num">1863</span> and <span class="num">1869</span>, and the two united in <span class="num">1875</span>. Many workers also joined <span class="kt">labor unions</span>. These are groups of workers who bargain with employers together for higher wages, shorter hours and better conditions.` },
            { p: `In <span class="num">1878</span> Bismarck, now the German Empire's <span class="kt">chancellor</span> (chief minister), pushed through the Anti-Socialist Law. It banned socialist groups, meetings and newspapers. Many of the banned groups were unions. But socialists could still run for the <span class="kt">Reichstag</span> (Germany's parliament) as individual candidates.` },
            { p: `On 25 January <span class="num">1890</span> the Reichstag voted against renewing the law. On 20 February socialist candidates won more votes than any other party, about 20 percent. The law ended on 30 September. That October the party took a new name, the <span class="kt">Social Democratic Party</span>. In <span class="num">1891</span> it adopted a program based on Marx's ideas, while it kept winning seats in elections.` },
            { p: `Unions grew in other countries too. France made them legal in <span class="num">1884</span>. In <span class="num">1889</span> socialist parties from many countries called on workers everywhere to march on May 1, <span class="num">1890</span>, for an eight-hour day.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Marx's revolution came in the 1800s. In <span class="num">1871</span> workers took over Paris and ran it as the Paris Commune. Marx praised it as a workers' government. The French army crushed it within about ten weeks. No revolution like the one he predicted won lasting power in an industrial country before 1900.`
            } }
          ]
        },
        {
          heading: 'Bismarck reforms to weaken his critics',
          blocks: [
            { p: `The Reichstag also passed <span class="kt">social insurance</span> (government payments to workers who are sick, injured or old). Health insurance came in <span class="num">1883</span> and accident insurance in <span class="num">1884</span>. Insurance for old age and disability followed in <span class="num">1889</span>.` },
            { p: `In <span class="num">1884</span> Bismarck told the Reichstag that the socialists' leaders needed "dissatisfied classes": "dissatisfied workers are just what they need." Insurance was meant, in part, to make workers less dissatisfied, and so to weaken their party.` }
          ]
        },
        {
          heading: 'What stayed by 1900',
          blocks: [
            { p: `By <span class="num">1900</span> kings and emperors still ruled most of Europe, many of them sharing power with elected parliaments. Many countries let some or all men vote, but women could vote in national elections almost nowhere. The Enlightenment's question was still being asked: by what right does anyone rule?` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Anger at those in power produced Marx's ideas, and workers organized in unions and parties.`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism."`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers' movements and political parties emerged in different areas, promoting alternative visions of society."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Communism', `Marx's society without classes, with no private ownership of the means of production, to be won by workers' revolution.`],
        ['Social Democratic Party', `Germany's workers' party, named in 1890, with a program based on Marx's ideas from 1891.`],
        ['Social insurance', `Government-run payments to workers who are sick, injured or old.`]
      ]
    }
  ],

  closing: {
    heading: 'Europe at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `Between 1750 and 1900, writers, revolutionaries, nationalists and workers all challenged the kings of the European continent. By 1900, how much had changed about who held power, and why? Make a claim. Then support it with at least one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Revolutions and unification remade Europe\'s states, but kings kept much of their power.',
        body: `France ended its monarchy in 1792. Most of Italy was joined into one kingdom in 1861, and Germany was unified in 1871. Yet in 1900 kings and emperors still ruled most of Europe.`
      },
      {
        category: 'Religious',
        title: 'Enlightenment writers attacked the church\'s power over government, and some doubted its teachings.',
        body: `Voltaire defended Jean Calas, a Protestant executed in 1762, and argued for religious toleration. Most Enlightenment writers still believed in God.`
      },
      {
        category: 'Social',
        title: 'France ended noble privilege, Russia freed its serfs, and women claimed equal rights.',
        body: `France ended the nobles' special privileges in 1789, and Russia freed more than 20 million serfs in 1861. Olympe de Gouges claimed equal rights for women in 1791, but women could vote almost nowhere by 1900.`
      },
      {
        category: 'Intellectual',
        title: 'New ideas asked what gives a ruler the right to rule, and later who should own the factories.',
        body: `Locke argued in 1689 for natural rights and government by consent. Marx and Engels's Communist Manifesto (1848) called history a story of class struggles.`
      },
      {
        category: 'Technological',
        title: 'Railways and new methods carried industry across the Continent.',
        body: `Germany's railways grew from 469 kilometers in 1840 to more than 51,000 in 1900. Bessemer's process (1856) made steel cheap.`
      },
      {
        category: 'Economic',
        title: 'Industry grew on the coalfields, and countries argued over free trade.',
        body: `Factories grew on the coalfields around Liège, in the Ruhr and in northern France. Tariffs fell after the Cobden-Chevalier Treaty of 1860, and Germany raised them again from 1879.`
      }
    ]
  }
};
