'use strict';

/**
 * Unit 5 by region: Europe (the Continent and Russia).
 * One continuous story of continental Europe from 1750 to 1900, told in five sections: the
 * Enlightenment's new answer to "by what right?" (KC-5.3.I.A, KC-5.3.I), the French Revolution,
 * its declaration and its nation in arms (KC-5.3, KC-5.3.I.B, KC-5.3.IV.B, KC-5.3.II.ii), the
 * liberals of 1830 and 1848, the end of serfdom and the unification of Italy and Germany
 * (KC-5.3.IV.A.i, KC-5.3.I.C, KC-5.3.II.i, KC-5.3.II.iii), industry crossing the Channel to
 * Belgium, the German states and Russia, with the second industrial revolution and the tariff
 * story (KC-5.1.I.D, KC-5.1.I.E, KC-5.1.I.B, KC-5.1.IV, KC-5.1.III.A), and Marx's party and
 * Bismarck's answer to it (KC-5.3.IV.A.ii, KC-5.1.V.A, KC-5.1.V.D). Facts come from the Topic
 * 5.1, 5.2, 5.4, 5.5, 5.7 and 5.8 chapters and their claim ledgers, keeping their narrowings
 * (the Enlightenment not against religion; the ideas came before the revolutions but did not
 * cause them alone; Bismarck's words as the record reports them; no communist revolution won
 * before 1900). Britain has its own chapter. The Balkans are told with the Ottoman Empire in the
 * Middle East chapter, because that is the empire they left.
 */

module.exports = {
  topicKey: 'r5-europe',
  slug: 'region-5-europe',
  unit: '5',
  region: 'Europe',
  titleHtml: '<em>Europe</em>, the Continent and Russia',
  deck: `From 1750 to 1900, the European continent was remade twice: first by writers who asked what gives a ruler the right to rule, and by the revolution in France that followed, and then by factories, railways and the workers' parties they produced. Follow both, from Paris to the Ruhr to the coal country of southern Russia.`,
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
    'KC-5.1.I.B',
    'KC-5.1.I.D',
    'KC-5.1.I.E',
    'KC-5.1.III.A',
    'KC-5.1.IV',
    'KC-5.1.V.A',
    'KC-5.1.V.D'
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
      thesis: `In 1750 most of Europe's rulers said their power came from God. A group of writers asked every old authority what gave it the right to rule, and answered with reason, natural rights and the consent of the people.`,
      parts: [
        {
          heading: 'The old answer',
          blocks: [
            { p: `In 1750 a European state belonged, in its rulers' telling, to the king, because God had put him there: <span class="kt">divine right</span>. In most countries one church was the law. Nobles were born into privileges, such as freedom from some taxes, and across much of central and eastern Europe peasants were <span class="kt">serfs</span>, bound to work their lord's land.` }
          ]
        },
        {
          heading: 'Reason, first for nature, then for people',
          blocks: [
            { p: `In <span class="num">1687</span> the English scientist Isaac Newton showed that a few laws of motion and gravity, worked out with mathematics, explained both the planets and a falling apple. Many readers took the lesson that the world runs by laws a human mind can discover. Then they turned the same method on people. In <span class="num">1689</span> the English philosopher John Locke argued that people are born with <span class="kt">natural rights</span> to their "lives, liberties and estates," and that government is a <span class="kt">social contract</span>: no one may be "subjected to the political power of another, without his own consent."` },
            { p: `French writers carried the questions further. Montesquieu argued in <span class="num">1748</span> that liberty is safest when the powers to make laws, carry them out and judge are held by different people, the <span class="kt">separation of powers</span>. Jean-Jacques Rousseau began The Social Contract (<span class="num">1762</span>): "Man is born free; and everywhere he is in chains." Voltaire campaigned for Jean Calas, a Protestant executed in <span class="num">1762</span> for killing his son to stop him from becoming a Catholic, a crime he most likely did not commit, and argued for <span class="kt">religious toleration</span>. In the College Board's words, these thinkers "reexamined the role that religion played in public life and emphasized the importance of reason."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment was against religion. Most of its writers believed in God. What they questioned was religion used as a power of government.`
            } }
          ]
        },
        {
          heading: 'The ideas travel',
          blocks: [
            { p: `From <span class="num">1751</span> to <span class="num">1772</span>, Denis Diderot and his partners published the Encyclopédie in Paris, which tried to explain everything by reason. The French government banned it in <span class="num">1759</span>, and it was printed anyway. The ideas also traveled in newspapers, in letters, and in the Paris conversation gatherings called <span class="kt">salons</span>, often run by women. In <span class="num">1784</span> the German philosopher Immanuel Kant summed up the attitude: "Dare to know." The College Board's words are that Enlightenment thought "often preceded revolutions and rebellions against existing governments" (<a href="#chapter-t5-1">Topic 5.1</a>).` }
          ]
        }
      ],
      terms: [
        ['Divine right', `The claim that a king's power comes from God, so no one may question or remove him.`],
        ['Natural rights', `Rights people are born with, such as life, liberty and property, which no government gives or may take.`],
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
      thesis: `A nearly bankrupt king called an assembly to raise taxes, and its commoners took power in the name of the nation. France wrote down rights, ended its monarchy, and then fell to a general who carried its laws across Europe.`,
      parts: [
        {
          heading: 'The bill comes due',
          blocks: [
            { p: `France had spent heavily helping the Americans win their revolution (<a href="#chapter-r5-americas">the Americas</a>), on top of older war debts, and by <span class="num">1788</span> King Louis XVI's government was nearly bankrupt. To raise taxes, he called the <span class="kt">Estates-General</span>, an assembly of the clergy, the nobles and everyone else, which had not met since <span class="num">1614</span>. The clergy and nobles paid little in taxes; the <span class="kt">Third Estate</span>, most of the people, paid most of them, and after a bad harvest in <span class="num">1788</span> the price of bread soared. In June <span class="num">1789</span> the Third Estate declared itself the National Assembly, and on 14 July a Paris crowd stormed the Bastille, a royal fortress, to seize its gunpowder.` }
          ]
        },
        {
          heading: 'The words',
          blocks: [
            { p: `In August <span class="num">1789</span> the Assembly ended the nobles' special privileges and adopted the Declaration of the Rights of Man and of the Citizen. Its first article: "Men are born and remain free and equal in rights." Its third: "The principle of all sovereignty resides essentially in the nation." The College Board names this declaration among the "revolutionary documents" through which Enlightenment ideas "influenced resistance to existing political authority" (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `The words were wider than the men who wrote them meant. In <span class="num">1791</span> Olympe de Gouges rewrote the declaration as the Declaration of the Rights of Woman and of the Female Citizen: "Woman is born free and remains equal to man in rights." The revolutionary government executed her in <span class="num">1793</span>. The College Board names her declaration among the demands that "challenged political and gender hierarchies."` }
          ]
        },
        {
          heading: 'A republic, a nation in arms, an emperor',
          blocks: [
            { p: `France abolished its monarchy in <span class="num">1792</span> and executed the king in January <span class="num">1793</span>. At war with much of Europe, the government ordered in <span class="num">1793</span> that "all Frenchmen are in permanent requisition for the service of the armies": young men would fight, married men make weapons, women make tents and work in hospitals. Here a government used loyalty to the <span class="kt">nation</span>, what the College Board calls a "new sense of commonality" that was "sometimes harnessed by governments to foster a sense of unity." Afraid of enemies at home, it also began the Terror (<span class="num">1793</span> to <span class="num">1794</span>), killing thousands. France abolished slavery in its colonies in <span class="num">1794</span>.` },
            { p: `In <span class="num">1799</span> the general Napoleon Bonaparte took power, and in <span class="num">1804</span> he crowned himself emperor. He brought back slavery in the colonies in <span class="num">1802</span>. His armies carried the revolution's laws, such as the end of noble privilege, across Europe, and also made many Europeans hate French rule. In <span class="num">1808</span> he invaded Spain, which set off the independence of Spanish America (<a href="#chapter-r5-americas">the Americas</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment caused the revolution. The ideas gave revolutionaries their words, but debt, taxes, privilege and the price of bread caused it too. Name more than one cause.`
            } }
          ]
        }
      ],
      terms: [
        ['Estates-General', `France's old assembly of clergy, nobles and commoners, called in 1788 for the first time since 1614.`],
        ['Third Estate', `Everyone in France who was not clergy or noble: most of the people.`],
        ['Sovereignty', `The highest power in a state.`],
        ['The Terror', `The years 1793 to 1794, when France's revolutionary government executed thousands it called enemies.`]
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
      thesis: `After Napoleon fell, kings came back, but the revolution's ideas did not go away. Liberals rose in 1830 and 1848, rulers freed the serfs, and nationalists joined Italy and Germany into new states.`,
      parts: [
        {
          heading: '1830 and 1848',
          blocks: [
            { p: `The revolutions left new answers to how a country should be run. <span class="kt">Liberalism</span> held that a written constitution and an elected parliament should limit the government and protect each person's rights, such as a free press; many liberals still wanted only men with property to vote. <span class="kt">Democracy</span> pushed for the vote to reach all men. In the College Board's words, "Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism."` },
            { p: `These ideas set off revolutions across Europe in <span class="num">1830</span> and <span class="num">1848</span>, when crowds demanded constitutions, parliaments and wider voting. In <span class="num">1848</span> France gave the vote to all adult men, and France ended slavery in its colonies for good. Most of the uprisings of 1848 were crushed within two years, but the demands did not go away.` }
          ]
        },
        {
          heading: 'The end of serfdom',
          blocks: [
            { p: `In <span class="num">1848</span> the Austrian Empire freed its peasants from the forced labor they owed their lords. In <span class="num">1861</span> Tsar Alexander II of Russia freed more than 20 million serfs. He had reportedly told Russian nobles in <span class="num">1856</span> that it was better to end serfdom "from above" than to wait for it to end "from below," and Russia's defeat in the Crimean War pushed him too. The freed serfs had to pay for their land over many years. The College Board counts "the end of serfdom" among the expansions of rights of this period (<a href="#chapter-t5-1">Topic 5.1</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that every expansion of rights came from reformers below. Some came from revolutions; some came from rulers like Alexander II, who feared what would happen if they did not act.`
            } }
          ]
        },
        {
          heading: 'Nationalism joins states',
          blocks: [
            { p: `<span class="kt">Nationalism</span> put loyalty to the nation, a people who shared a language, customs and a homeland, above loyalty to a king or an empire. Italy was split into several states, some ruled by Austria. Count Cavour, chief minister of Piedmont-Sardinia, and the soldier Giuseppe Garibaldi, whose volunteers took Sicily and Naples in <span class="num">1860</span>, joined most of Italy into one kingdom in <span class="num">1861</span>; Rome was added in <span class="num">1870</span>.` },
            { p: `Germany was split into more than thirty states. In <span class="num">1848</span> German liberals met at Frankfurt to unite them under an elected parliament, and failed. In <span class="num">1862</span> Otto von Bismarck, Prussia's chief minister, told its lawmakers that the great questions were decided not "by speeches and majority resolutions" but "by iron and blood." After wars against Denmark, Austria and France, the German Empire was proclaimed on 18 January <span class="num">1871</span>, in the Hall of Mirrors at Versailles. These are the College Board's nationalists who "sought unification of fragmented regions" (<a href="#chapter-t5-2">Topic 5.2</a>).` }
          ]
        }
      ],
      terms: [
        ['Liberalism', `In the 1800s, the belief that a constitution and an elected parliament should limit government and protect individual rights.`],
        ['Democracy', `Rule by the people; in the 1800s, the push to give all men the vote.`],
        ['Nationalism', `Loyalty to a nation, a people who share a language, customs and homeland, above a king or an empire.`],
        ['Unification', `Joining several states into one.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'industry',
      num: '04',
      accent: 'oxide',
      name: 'Industry Crosses the Channel',
      navLabel: 'Industry spreads',
      dates: '1817 to 1904 &nbsp;·&nbsp; Coal, railways, chemicals, and tariffs',
      thesis: `Factory methods left Britain in the heads of skilled people, then in machines and money. On the Continent they took root where coal lay, and after 1850 German firms led in new industries such as chemicals.`,
      parts: [
        {
          heading: 'Coal and railways',
          blocks: [
            { p: `Britain banned the export of textile machines and the emigration of skilled textile workers, but the methods left anyway. In <span class="num">1817</span> John Cockerill, son of an English machine maker, began building machines at Seraing, near Liège in Belgium, on one of the richest coalfields on the Continent. Factories grew where coal lay, as in Britain: around Liège, in the Ruhr valley of the German states, and in northern France. The first steam railway in the German states, from Nuremberg to Fürth, opened in <span class="num">1835</span> with an English locomotive, and Germany's railways grew from 469 kilometers in <span class="num">1840</span> to more than 51,000 in <span class="num">1900</span> (<a href="#chapter-t5-4">Topic 5.4</a>).` }
          ]
        },
        {
          heading: 'Russia comes later',
          blocks: [
            { p: `Russia had 27 kilometers of railway in <span class="num">1840</span> and more than 53,000 in <span class="num">1900</span>. In the early 1870s a Welsh engineer, John Hughes, built ironworks in the coal country of the southern Russian Empire, in what is today eastern Ukraine; the town that grew up around them was named Yuzovka after him (today Donetsk). Russia began the Trans-Siberian Railway in <span class="num">1891</span>, and by <span class="num">1904</span> trains could cross to the Pacific. The College Board names Russia among the places where the new methods "spread," with "other parts of Europe," the United States and Japan (<a href="#chapter-t5-5">Topic 5.5</a>).` }
          ]
        },
        {
          heading: 'The second industrial revolution',
          blocks: [
            { p: `After 1850 came new methods "in the production of steel, chemicals, electricity, and precision machinery," in the College Board's words. German chemical companies such as BASF, founded in <span class="num">1865</span>, built laboratories whose job was to invent new dyes, and in <span class="num">1897</span> BASF began selling indigo blue made in a factory instead of from a plant. In <span class="num">1876</span> Nikolaus Otto built a four-stroke gas engine in Germany, and in <span class="num">1886</span> Carl Benz patented a car driven by a small engine burning a fuel made from oil, an <span class="kt">internal combustion engine</span>. Its big changes came after 1900.` }
          ]
        },
        {
          heading: 'Free trade, for a while',
          blocks: [
            { p: `In <span class="num">1860</span> Britain and France signed the Cobden-Chevalier Treaty, cutting tariffs on each other's goods, and in the 1860s similar treaties lowered tariffs across much of Western Europe. Then some countries turned back. From <span class="num">1879</span> Germany put tariffs back on imported grain and iron, to protect its farmers and factories after cheap American grain drove prices down (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        }
      ],
      terms: [
        ['Coalfield', `A region with large beds of coal under the ground.`],
        ['Second industrial revolution', `The new methods in steel, chemicals, electricity and precision machinery after about 1850.`],
        ['Internal combustion engine', `An engine that burns its fuel inside the cylinder, like a car engine.`],
        ['Tariff', `A tax on goods brought in from another country.`]
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
      thesis: `Marx predicted that workers would overthrow the owners. In Germany his ideas shaped a workers' party that won more votes than any other, and the government answered with both bans and benefits. No such revolution won before 1900.`,
      parts: [
        {
          heading: 'The Manifesto',
          blocks: [
            { p: `In <span class="num">1848</span> two Germans, Karl Marx and Friedrich Engels, published the Communist Manifesto. "The history of all hitherto existing society is the history of class struggles," it begins. Industry, they argued, was splitting society into owners, the bourgeoisie, and wage workers, the proletarians, and the workers would one day overthrow the owners, end private property in the means of production, and build a society without classes: <span class="kt">communism</span>. The College Board names "those espoused by Karl Marx, and the ideas of socialism and communism" among the ideologies of this age (<a href="#chapter-t5-8">Topic 5.8</a>).` }
          ]
        },
        {
          heading: 'Germany\'s workers\' party',
          blocks: [
            { p: `German workers founded parties in <span class="num">1863</span> and <span class="num">1869</span>, and they united in <span class="num">1875</span>. Bismarck, now the German Empire's chancellor, banned socialist meetings and newspapers in <span class="num">1878</span>. In February <span class="num">1890</span>, still banned, the party won more votes than any other, about 20 percent; the ban lapsed that year, and the party renamed itself the <span class="kt">Social Democratic Party</span>. In <span class="num">1891</span> it adopted a program based on Marx's ideas, while it went on winning seats in elections. In the College Board's words, "Workers' movements and political parties emerged in different areas, promoting alternative visions of society."` },
            { p: `In <span class="num">1871</span> workers and radicals in Paris set up their own government, the Paris Commune, which Marx praised. It was crushed within about ten weeks. In <span class="num">1889</span> socialist parties from many countries met in Paris and called on workers everywhere to march on May 1, <span class="num">1890</span>, for an eight-hour day.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Marx's revolution came in the 1800s. No communist party ruled a country until the twentieth century (Unit 7).`
            } }
          ]
        },
        {
          heading: 'Bismarck reforms to beat his critics',
          blocks: [
            { p: `Bismarck also tried another weapon. The Reichstag, Germany's parliament, passed health insurance in <span class="num">1883</span>, accident insurance in <span class="num">1884</span>, and insurance for old age and disability in <span class="num">1889</span> In <span class="num">1884</span> Bismarck told the Reichstag that the socialists' leaders needed "dissatisfied classes": "dissatisfied workers are just what they need." Reform could answer workers and weaken their party at the same time.` }
          ]
        },
        {
          heading: 'What stayed by 1900',
          blocks: [
            { p: `By <span class="num">1900</span>, kings and emperors still ruled most of Europe, many of them sharing power with elected parliaments. Many countries let some or all men vote, but women could vote in national elections almost nowhere. The question the Enlightenment taught, by what right?, was still being asked.` }
          ]
        }
      ],
      terms: [
        ['Communism', `Marx's classless society, with no private ownership of the means of production, to be won by workers' revolution.`],
        ['Proletarians', `Marx's word for wage workers.`],
        ['Social Democratic Party', `Germany's workers' party, named in 1890, which adopted a Marxist program in 1891.`],
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
      prompt: `Between 1750 and 1900, writers, revolutionaries, nationalists and workers all challenged the kings who ruled the European continent. By 1900, how much had changed about who held power and why? Make a claim, then support it with at least one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Kings stayed, but had to answer',
        body: `France's revolution of 1789 put sovereignty in the nation and ended its monarchy in 1792; Napoleon then crowned himself. Liberals rose in 1830 and 1848, Italy (1861) and Germany (1871) were unified, and by 1900 most kings shared power with parliaments.`
      },
      {
        category: 'Religious',
        title: 'Religion questioned as a power of government',
        body: `Enlightenment writers, most of them believers, argued that no government should force a faith on anyone; Voltaire's campaign for Calas made the case. They reexamined religion's role in public life rather than rejecting it.`
      },
      {
        category: 'Social',
        title: 'Serfs freed, workers organized',
        body: `Noble privilege ended in France in 1789. Austria freed its peasants in 1848 and Russia its serfs in 1861. Germany's workers built the Social Democratic Party, and Bismarck answered with insurance (1883 to 1889). De Gouges demanded rights for women in 1791; few won them by 1900.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Reason, then coal and chemistry',
        body: `Locke, Montesquieu, Rousseau, Voltaire and the Encyclopédie asked what makes power rightful; Marx and Engels later asked who should own the factories. Coal, railways, BASF's dyes and Otto's and Benz's engines carried industry across the Continent.`
      },
      {
        category: 'Economic',
        title: 'Industry followed the coal',
        body: `Factories grew on the coalfields of Belgium, the Ruhr and northern France, and after 1870 in southern Russia. Railways reached tens of thousands of kilometers by 1900. Tariffs fell in the 1860s, and Germany raised them again from 1879.`
      }
    ]
  }
};
