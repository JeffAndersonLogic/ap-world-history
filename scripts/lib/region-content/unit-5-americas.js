'use strict';

/**
 * Unit 5 by region: the Americas.
 * One continuous story of the Americas from 1750 to 1900, told in five sections: the American
 * Revolution as grievance, words and chance (the second sentence of KC-5.3.I.A, KC-5.3.I, KC-5.3.III.B, KC-5.3), Haiti
 * (KC-5.3.III.B), Spanish America, Mexico, Brazil and Bolívar's letter (KC-5.3.III.B, KC-5.3.I.B,
 * KC-5.3.IV.A.i), the words pressed further by abolition and Seneca Falls (KC-5.3.I.C,
 * KC-5.3.IV.B), and industry in the United States with its mills, oil, railroads, steel,
 * migrants, tenements and unions (KC-5.1.I.D, KC-5.1.I.C, KC-5.1.I.E, KC-5.1.IV, KC-5.1.V.A). Facts come from the Topic 5.1, 5.2, 5.3, 5.4, 5.5, 5.7 and
 * 5.8 chapters and their claim ledgers, and from the reviewed rebuild of 5.9 (Riis, Manhattan's
 * population), keeping their narrowings (France did not give Haiti its freedom; the 1791 rising
 * not caused by the 1789 declaration; France freed people in 1793 to win them as soldiers;
 * Toussaint's change of sides with no cause given; "helped start or win", not "caused";
 * Slater's mill begun in 1793; ideas one cause among several). Left out on purpose: Canada, the
 * Mexican-American War and the US Civil War beyond the end of slavery, none of which a Unit 5 Key
 * Concept needs, and Latin America's export economies, which are Unit 6.
 *
 * Plain-language and accuracy pass (2026-11-21): sentences cut to one idea each, definitions moved
 * out of commas into parentheses or their own sentences, and the College Board's words moved out of
 * the story into one "What the College Board says" box per section (a plain "In short" line, each
 * Key Concept sentence whole and word for word from scripts/lib/ced-source/unit-5.js, and the
 * Seneca Falls example labelled as optional). Added: "The story in short" (inShort), two "How we
 * know" boxes (Toussaint's change of sides; Riis's camera), Mexico's real route to independence
 * (Hidalgo defeated and executed in 1811; independence in 1821 under Iturbide and creole
 * conservatives) and Brazil's (the Portuguese court in Rio from 1808), and six closing cards in
 * the house order. The Enlightenment mistake box now bans a single-cause answer, not the causal
 * claim. See docs/UNIT-5-BY-REGION-CLAIM-LEDGER.md.
 *
 * Review loop pass 3 (2026-11-23, findings V1 to V5, X4, X6b): Leclerc's expedition told in order
 * (sailed December 1801, landed February 1802; the slavery law of 20 May 1802; Guadeloupe in July
 * 1802; Toussaint arrested in June 1802); Dessalines made peace with the French in spring 1802 and
 * turned on them in October 1802 (Britannica, "Haitian Revolution"); Seneca Falls as part of a
 * growing feminism, after de Gouges (1791) and Wollstonecraft (1792); railroads in the interior
 * before 1869 (Chicago's first line, 1848); the KC-5.1.I.E quotation narrowed to steel and
 * electricity, which this chapter teaches, and KC-5.3.I.A quoted for its second sentence only (the
 * Europe chapter teaches the whole); the 1914 migration count and the 1913 wheat gap marked as
 * running past the unit.
 *
 * Review pass 4 (2026-11-23, findings AD2, AD4, AG1c, AG3, AG4, and the self-audit): KC-5.1.I.B
 * (the Britain and Europe chapters teach the internal combustion engine), KC-5.1.II.B (Britain and
 * South and Southeast Asia teach both halves) and KC-5.1.VI.C (Britain teaches every named
 * problem) are no longer claimed or quoted here; the oil, coal and tenement facts stay in the
 * story. KC-5.1.IV is quoted whole and taught whole: the telegraph line to California (October
 * 1861) and Powell's 1869 expedition, whose boats went west on the new Union Pacific to Green
 * River (USGS, "150th Anniversary of the 1869 Powell Expedition"). The 1763 treaty took Canada and
 * the land east of the Mississippi from France (France had given Louisiana to Spain in 1762, got it
 * back by the treaty of 1800, and sold it in 1803), and colonists "felt less need" for British
 * troops (Pontiac's War began in 1763). Louisiana was sold "partly" for the Saint-Domingue and war
 * reasons. Self-audit: KC-5.3.I.C's "expanded suffrage" is taught by the Fifteenth Amendment
 * (1870), with the Southern laws of the 1890s that limited it, and the whole quotation is kept,
 * with one linked sentence on the end of serfdom in Europe (the Europe chapter's section 03);
 * KC-5.1.I.D is cut to the United States, a list item (the Europe and East
 * Asia chapters teach the others).
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r5-americas',
  slug: 'region-5-americas',
  unit: '5',
  region: 'The Americas',
  titleHtml: 'The <em>Americas</em>',
  deck: `In 1750 European empires ruled most of the Americas. By 1900 most of it was made up of independent countries. Follow the people who broke away, the people who pushed the new words about rights further, and the factories that followed.`,
  inShort: [
    `Thirteen British colonies broke away over taxes, used Enlightenment words, and became the United States.`,
    `Enslaved people in Saint-Domingue rose up in 1791 and founded Haiti, a free country, in 1804.`,
    `After Napoleon invaded Spain in 1808, most of Spanish America broke away by 1826.`,
    `Enslaved people, abolitionists and women then demanded that the new words about rights cover them too.`,
    `Factories, railroads and millions of migrants made the United States the world's largest maker of goods by 1900.`
  ],
  topics: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.8', '5.9'],
  ced: [
    'KC-5.3',
    'KC-5.3.I',
    'KC-5.3.I.B',
    'KC-5.3.I.C',
    'KC-5.3.III.B',
    'KC-5.3.IV.A.i',
    'KC-5.3.IV.B',
    'KC-5.1.I.C',
    'KC-5.1.I.D',
    'KC-5.1.I.E',
    'KC-5.1.IV',
    'KC-5.1.V.A'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'united-states',
      num: '01',
      accent: 'gold',
      name: 'Grievance, Words, and a Chance',
      navLabel: 'The United States',
      dates: '1763 to 1787 &nbsp;·&nbsp; Thirteen colonies become a republic',
      thesis: `A revolution came when three things met: a grievance many people felt, words to name it, and a chance to act. The thirteen British colonies had all three first.`,
      parts: [
        {
          heading: 'The words already existed',
          blocks: [
            { p: `By the 1770s, educated colonists knew the ideas of European writers. One was the English philosopher John Locke. In <span class="num">1689</span> he argued that people are born with <span class="kt">natural rights</span> to their "lives, liberties and estates." Locke also said government is a <span class="kt">social contract</span> (an agreement that rests on the people's consent). <a href="#r5-europe-enlightenment">The Europe chapter</a> tells more about Locke and the other writers.` }
          ]
        },
        {
          heading: 'The grievance',
          blocks: [
            { p: `A <span class="kt">grievance</span> is a wrong that many people feel. Britain won the Seven Years' War in <span class="num">1763</span>, but the war left it deep in debt. <span class="kt">Parliament</span> (Britain's lawmaking assembly) decided the American colonies should help pay.` },
            { p: `Parliament taxed them with laws such as the Stamp Act of <span class="num">1765</span>. That law taxed newspapers, legal papers and playing cards. The colonists had no members in Parliament. So they answered with a slogan: "no taxation without representation."` }
          ]
        },
        {
          heading: 'The words and the chance',
          blocks: [
            { p: `On 4 July <span class="num">1776</span> the Continental Congress (the meeting of the colonies' leaders) adopted the Declaration of Independence. It said that "all men are created equal." It said governments get "their just powers from the consent of the governed." And when a government destroys people's rights, "it is the Right of the People to alter or to abolish it."` },
            { p: `The chance came next. Britain was an ocean away. Its win in 1763 had taken Canada and the land east of the Mississippi River from France. With France gone as a nearby threat, many colonists felt less need for British soldiers to guard them. In <span class="num">1778</span> France joined the war on the American side. France was Britain's old rival. <a href="#r5-europe-france">The Europe chapter</a> tells how that war's cost helped bring revolution to France.` },
            { p: `By <span class="num">1783</span> Britain had recognized the United States. That means it accepted the country as independent. In <span class="num">1787</span> the new country wrote a <span class="kt">constitution</span> (a set of basic laws) for a <span class="kt">republic</span>. A republic is a country with no king, whose leaders are elected (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `Other revolutions later looked to the American one as a model. But it was also limited. The republic kept slavery. Most states let only men who owned property vote.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give the Enlightenment as the only cause of the revolution. The ideas gave the colonists their words. But taxes, debt and a distant king mattered too. Name the grievance and the chance as well.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: new ideas about rights spread first, and revolutions often followed.`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Philosophers developed new political ideas about the individual, natural rights, and the social contract."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "The American Revolution, and its successful establishment of a republic, the United States of America, was a model and inspiration for a number of the revolutions that followed."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Natural rights', `Rights people are born with, such as life and liberty, that no ruler may take away.`],
        ['Social contract', `The idea that government is an agreement resting on the consent of the people.`],
        ['Republic', `A country with no king, whose leaders are elected.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'haiti',
      num: '02',
      accent: 'rust',
      name: 'Haiti Claims the Words',
      navLabel: 'Haiti',
      dates: '1791 to 1825 &nbsp;·&nbsp; Saint-Domingue becomes Haiti',
      thesis: `In Saint-Domingue, enslaved people rose up in 1791. Within two years their leaders were claiming liberty and equality for themselves. They went on to win a country of their own.`,
      parts: [
        {
          heading: 'France\'s richest colony',
          blocks: [
            { p: `Saint-Domingue was the western part of the Caribbean island of Hispaniola. It was France's most valuable colony.` },
            { p: `Enslaved Africans and their children grew its sugar and coffee on plantations. They were worked and punished brutally. Around <span class="num">1789</span> the colony held more than 400,000 enslaved people. It held fewer than 80,000 free people. They were white colonists and <span class="kt">free people of color</span> (free people of African or mixed descent).` },
            { p: `When France's Declaration of the Rights of Man reached the colony, free people of color asked for the equal rights it promised. The white planters refused.` }
          ]
        },
        {
          heading: 'The rising',
          blocks: [
            { p: `In August <span class="num">1791</span>, France was in revolution and the planters were divided. Enslaved people in the northern plain rose up and burned plantations. Toussaint Louverture became the rising's most famous leader. He had been born enslaved and had won his freedom before the revolution.` },
            { p: `In <span class="num">1793</span> French officials in the colony began freeing enslaved people. They wanted to win them as soldiers against Spain and Britain.` },
            { p: `That same year, Toussaint was fighting on Spain's side against France. He announced: "I want Liberty and Equality to reign in Saint Domingue." In February <span class="num">1794</span>, Paris abolished slavery in all French colonies. In May <span class="num">1794</span>, a few months later, Toussaint changed sides to France.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a question still open',
              html: `We know when Toussaint changed sides. We do not know for sure why. Toussaint's own later account and the historians who have studied him give different reasons. Say what he did, and do not claim to know his motive.`
            } }
          ]
        },
        {
          heading: 'Independence',
          blocks: [
            { p: `In December <span class="num">1801</span> Napoleon sent an army to retake Saint-Domingue. It landed in February <span class="num">1802</span>. That spring Toussaint and his officer Jean-Jacques Dessalines made peace with the French. In May a French law kept slavery in several other French colonies.` },
            { p: `In June the French arrested Toussaint, and he died in a French prison in <span class="num">1803</span>. In July <span class="num">1802</span> slavery was brought back in Guadeloupe. In October Dessalines turned against the French and led the fight. Yellow fever and the war destroyed the French army.` },
            { p: `On 1 January <span class="num">1804</span> Dessalines declared independence. He gave the country its old Taíno name, Haiti. Haiti was the second independent country in the Americas, after the United States. It was the first country founded by people who had freed themselves from slavery.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that France gave Haiti its freedom. Enslaved people rose up first, in 1791. French officials began freeing them in 1793 to win them as soldiers against Spain and Britain. Paris abolished slavery in February 1794, after two and a half years of fighting. Haitians then won independence by defeating Napoleon's army.`
            } }
          ]
        },
        {
          heading: 'What Haiti changed',
          blocks: [
            { p: `Haiti's revolution reached far beyond the island. In <span class="num">1800</span> Spain had agreed to give Louisiana, west of the Mississippi, back to France. In <span class="num">1803</span> Napoleon's army in Saint-Domingue was dying of yellow fever, and a new war with Britain was coming. Partly for these reasons, he sold Louisiana to the United States.` },
            { p: `Countries that allowed slavery feared Haiti's example. The United States did not recognize Haiti until <span class="num">1862</span>. In <span class="num">1825</span> France demanded 150 million francs as the price of recognizing it. The sum was later cut to 90 million (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Haiti's revolution helped make new independent countries in the Americas.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "The American Revolution, the Haitian Revolution, and the Latin American independence movements facilitated the emergence of independent states in the Americas."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Saint-Domingue', `France's Caribbean sugar and coffee colony, which became Haiti in 1804.`],
        ['Free people of color', `Free people of African or mixed descent in the colonies. They could own property but did not have equal rights.`],
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'spanish-america',
      num: '03',
      accent: 'iron',
      name: 'An Empire With No King',
      navLabel: 'Spanish America',
      dates: '1808 to 1826 &nbsp;·&nbsp; Creoles, Bolívar, and new states',
      thesis: `Creoles in Spain's American empire had grievances for decades. Their chance came when Napoleon took Spain's king, and Haiti armed one of Bolívar's expeditions.`,
      parts: [
        {
          heading: 'The grievance and the chance',
          blocks: [
            { p: `<span class="kt">Creoles</span> were people of Spanish descent born in the Americas. They owned land, mines and businesses. But the highest offices went to <span class="kt">peninsulares</span> (men born in Spain). Spain also controlled what the colonies could make and trade. Simón Bolívar was a creole from Caracas. He wrote that Spain "has kept us in a sort of permanent infancy with regard to public affairs." He meant that Spain treated creoles like children.` },
            { p: `In <span class="num">1808</span> Napoleon invaded Spain and forced its king from the throne. Now Spanish America had no rightful king to obey. In <span class="num">1810</span> creole leaders set up their own governments in Caracas and Buenos Aires. At first they ruled in the captive king's name. Many soon moved to full independence.` }
          ]
        },
        {
          heading: 'Mexico\'s two risings',
          blocks: [
            { p: `In Mexico, a priest named Miguel Hidalgo called on Native and <span class="kt">mestizo</span> villagers to rise in <span class="num">1810</span>. (A mestizo is a person of mixed Native and European descent.) But royalist troops (soldiers loyal to Spain's king) defeated his army. Hidalgo was captured and executed in <span class="num">1811</span>.` },
            { p: `Mexico won independence only in <span class="num">1821</span>, and conservative creoles led it. Spain had a new liberal government from 1820, and these creoles did not want to live under it. Liberals wanted a written constitution, an elected assembly and protected rights. Agustín de Iturbide was a creole officer who had fought the rebels for years. In 1821 he joined the rebel leader Vicente Guerrero. In <span class="num">1822</span> Iturbide made himself emperor of Mexico.` }
          ]
        },
        {
          heading: 'Bolívar\'s letter, and Haiti\'s help',
          blocks: [
            { p: `In <span class="num">1815</span> Bolívar was beaten and in exile in Jamaica. There he wrote the <span class="kt">Letter from Jamaica</span>. "The hatred that the Peninsula has inspired in us is greater than the ocean between us," he wrote. The tie to Spain, he said, "has been severed."` },
            { p: `Bolívar also doubted that governments "wholly representative" suited Spanish America yet. He meant full <span class="kt">democracy</span> (rule by the people, through their votes). Anger at rule from far away pushed people to try new kinds of government. Most of the new states became republics, and Mexico and Brazil had emperors for a time.` },
            { p: `In <span class="num">1816</span> Haiti's president Alexandre Pétion gave Bolívar guns, supplies and men for a new expedition. In return he asked Bolívar to end slavery in the lands he freed.` }
          ]
        },
        {
          heading: 'New states',
          blocks: [
            { p: `By <span class="num">1826</span> Spain had lost every American colony except Cuba and Puerto Rico. Mexico, Gran Colombia, Peru, Chile and others became independent. Creole elites took the top places. Most of the new countries kept a sharp social hierarchy (a ranking of people from top to bottom).` },
            { p: `Brazil took a different road. In <span class="num">1808</span> Portugal's royal family reached Rio de Janeiro in Brazil. They were fleeing Napoleon's invasion of Portugal. In <span class="num">1822</span> the king's son Pedro declared Brazil independent. He became its emperor.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: the new ideas fed rebellions, and anger at kings led to new kinds of government.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "Colonial subjects in the Americas led a series of rebellions inspired by democratic ideals."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "The ideas of Enlightenment philosophers, as reflected in revolutionary documents ... influenced resistance to existing political authority, often in pursuit of independence and democratic ideals." The documents the College Board lists are the American Declaration of Independence, France's Declaration of the Rights of Man and of the Citizen, and Bolívar's Letter from Jamaica.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Creoles', `People of Spanish descent born in the Americas.`],
        ['Peninsulares', `Men born in Spain, who held the highest offices in Spain's American empire.`],
        ['Royalist', `Loyal to the king. In Spanish America, a royalist fought to keep Spain's rule.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'pressing',
      num: '04',
      accent: 'oxide',
      name: 'Pressing the Words Further',
      navLabel: 'Rights pressed',
      dates: '1823 to 1888 &nbsp;·&nbsp; Abolition and Seneca Falls',
      thesis: `Most of the new states kept slavery and shut women out. Over the next century, the enslaved, abolitionists and women insisted that the words about equal rights covered them too.`,
      parts: [
        {
          heading: 'Slavery ends, country by country',
          blocks: [
            { p: `<span class="kt">Abolition</span> means ending slavery by law. It came slowly. Haiti's revolution had ended slavery there. Some new states ended it early: Chile in <span class="num">1823</span> and Mexico in <span class="num">1829</span>. Many kept it for decades.` },
            { p: `Britain began ending slavery in its Caribbean colonies in <span class="num">1834</span>. France ended it in its colonies for good in <span class="num">1848</span>. Colombia ended it in <span class="num">1851</span>, and Venezuela and Peru in <span class="num">1854</span>. The United States ended it in <span class="num">1865</span>, after a civil war. In <span class="num">1870</span> a change to its Constitution barred states from denying a man the vote because of his race. In the 1890s, though, Southern states began passing laws to stop most Black men from voting. Brazil was the last country in the Americas, in <span class="num">1888</span>. In parts of Europe, other reforms ended serfdom, as <a href="#r5-europe-nations">the Europe chapter</a> tells.` },
            { p: `Many abolitionists drew on religious faith as well as Enlightenment ideas. The Quakers are one example. They were a Christian group whose members had come to see slavery as a sin (<a href="#chapter-t5-1">Topic 5.1</a>).` }
          ]
        },
        {
          heading: 'Seneca Falls',
          blocks: [
            { p: `Lucretia Mott was an American abolitionist and a Quaker minister. In <span class="num">1840</span> she went to an antislavery meeting in London. She was refused a seat because she was a woman.` },
            { p: `In July <span class="num">1848</span>, Mott and Elizabeth Cady Stanton, with three other women, organized a women's rights meeting. It met at Seneca Falls, New York. Its Declaration of Sentiments copied the Declaration of Independence and added two words: "all men and women are created equal."` },
            { p: `The declaration complained that a woman had never been "permitted ... to exercise her inalienable right to the elective franchise." The elective franchise is the right to vote. Another word for that right is <span class="kt">suffrage</span>. The resolution demanding the vote was the only one that not everyone voted for.` },
            { p: `Seneca Falls was part of a growing <span class="kt">feminism</span>: the claim that women and men should have equal rights. It challenged who could vote and rule, and who was in charge at home. Women in Europe had made similar claims earlier. <a href="#r5-europe-france">The Europe chapter</a> tells of Olympe de Gouges in <span class="num">1791</span>, and <a href="#r5-britain-calls">the Britain chapter</a> tells of Mary Wollstonecraft in <span class="num">1792</span>. In the United States, change was slow. In <span class="num">1900</span> most American women still could not vote.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: ideas and faith moved reformers to widen rights, and women began to demand the vote.`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom."`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Demands for women's suffrage and an emergent feminism challenged political and gender hierarchies."`,
                `An optional College Board example: "Seneca Falls Conference (1848) organized by Elizabeth Cady Stanton and Lucretia Mott"`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Abolition', `Ending slavery, or ending the slave trade, by law.`],
        ['Suffrage', `The right to vote.`],
        ['Feminism', `The claim that women and men should have equal rights.`]
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'industry',
      num: '05',
      accent: 'gold',
      name: 'The Largest Maker in the World',
      navLabel: 'US industry',
      dates: '1789 to 1900 &nbsp;·&nbsp; Mills, railroads, steel, migrants, and unions',
      thesis: `Factory spinning reached the United States partly in a skilled worker's memory. By 1900 the country made more manufactured goods than any other, and its cities were packed with migrants.`,
      parts: [
        {
          heading: 'Mills by the river',
          blocks: [
            { p: `Samuel Slater learned Arkwright's spinning machines as an apprentice in an English mill. In <span class="num">1789</span> he sailed for the United States without telling anyone what he knew. At Pawtucket, Rhode Island, he built water-powered spinning machines from memory. The mill that still stands there was begun in <span class="num">1793</span>. <a href="#r5-britain-factory">The Britain chapter</a> tells how Arkwright's mills began.` },
            { p: `From the 1820s, Boston merchants paid for big cotton mills at Lowell, Massachusetts. They stood beside a river that could turn their water wheels. This was the <span class="kt">factory system</span>: many workers and machines in one building, around one source of power. Each worker did one part of the job. Most of the workers were young women from New England farms (<a href="#chapter-t5-4">Topic 5.4</a>).` },
            { p: `The South grew the cotton. After the 1790s, more and more of the raw cotton spun in Britain's mills came from plantations in the United States. Enslaved people did the work there (<a href="#chapter-t5-3">Topic 5.3</a>).` }
          ]
        },
        {
          heading: 'Oil, rails, steel and power',
          blocks: [
            { p: `In <span class="num">1859</span> Edwin Drake struck oil at Titusville, Pennsylvania. For the rest of the 1800s, most oil became <span class="kt">kerosene</span> (a fuel for lamps).` },
            { p: `Railroads had been reaching into the <span class="kt">interior</span> (the middle of the continent) since the 1840s. Chicago got its first line in <span class="num">1848</span>. In <span class="num">1861</span> a telegraph line first joined the East Coast to California. Messages now crossed the continent in minutes. In <span class="num">1869</span> the first railroad across the United States was finished at Promontory Summit, Utah. Now trains could cross the whole continent, to farms and mines that no boat could reach.` },
            { p: `That same year, the explorer John Wesley Powell sent his boats west by train. From Green River, Wyoming, his team went down the rivers and explored the Grand Canyon.` },
            { p: `Coal and oil are called <span class="kt">fossil fuels</span>. Early American trains burned wood in their steam engines. By <span class="num">1880</span> coal made up more than 90 percent of the fuel American railroads burned. In <span class="num">1885</span> coal passed wood as the country's largest source of energy.` },
            { p: `After 1850 came new methods. Historians call this the second industrial revolution. <span class="kt">Steel</span> (iron with a small, measured amount of carbon) became cheap. Coal heated the furnaces that made it. The United States made about 69,000 tons of steel in <span class="num">1870</span> and about 10 million tons in <span class="num">1900</span>. In <span class="num">1882</span> Thomas Edison's Pearl Street Station in New York began selling electric power (<a href="#chapter-t5-5">Topic 5.5</a>).` },
            { p: `By <span class="num">1900</span> the United States made more of the world's manufactured goods than any other country.` }
          ]
        },
        {
          heading: 'Migrants and wheat',
          blocks: [
            { p: `Steamships made the Atlantic crossing faster and cheaper. About 55 million Europeans moved to the Americas and Australia between <span class="num">1850</span> and <span class="num">1914</span>. That count runs past 1900, when this unit ends. Trains and ships carried goods the other way.` },
            { p: `In <span class="num">1870</span> wheat cost 57.6 percent more in Liverpool, England, than in Chicago. By <span class="num">1913</span>, after this unit ends, it cost only 15.6 percent more. Wheat from the middle of North America fed workers in Britain.` }
          ]
        },
        {
          heading: 'Tenements and unions',
          blocks: [
            { p: `Manhattan grew from about 515,000 people in <span class="num">1850</span> to about 1.4 million in <span class="num">1890</span>. That year the reporter Jacob Riis published How the Other Half Lives. He wrote of New York that "three-fourths of its people live in the tenements."` },
            { p: `By law a <span class="kt">tenement</span> was any rented building where three or more families lived and cooked. The worst were dark and badly crowded. In one Bayard Street room "not thirteen feet either way," Riis found twelve men and women sleeping.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a reformer\'s camera',
              html: `Riis wanted to shock readers into supporting reform. He chose his scenes for that purpose. So his photographs and counts are strong evidence of crowding. His opinions of the people in them are evidence of his own point of view.`
            } },
            { p: `Workers organized. The American Federation of Labor was founded in <span class="num">1886</span>, with Samuel Gompers as president. It joined <span class="kt">labor unions</span> of skilled workers. They wanted higher wages, shorter hours and better conditions (<a href="#chapter-t5-8">Topic 5.8</a>).` },
            { p: `An older workers' group wanted a different kind of society. The Knights of Labor was founded in <span class="num">1869</span>. It hoped that businesses owned by their own workers would one day replace wage work.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: industry spread to the United States, with factories, railroads, steel and unions.`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "As new methods of industrial production became more common in parts of northwestern Europe, they spread to ... the United States ..."`,
                `<a href="#chapter-t5-3">Topic 5.3</a>: "The development of the factory system concentrated production in a single location and led to an increasing degree of specialization of labor."`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: The College Board says the "second industrial revolution" "led to new methods in the production of steel ... electricity ... during the second half of the 19th century."`,
                `<a href="#chapter-t5-5">Topic 5.5</a>: "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration."`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Factory system', `Making goods by bringing many workers and machines together in one building, around one source of power.`],
        ['Tenement', `By law, a rented building shared by three or more families who each cooked there. The worst were crowded and dark.`],
        ['Labor union', `A group of workers who bargain with their employer together.`]
      ]
    }
  ],

  closing: {
    heading: 'The Americas at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `Between 1776 and 1826, the United States, Haiti, Brazil and most of Spanish America broke away from European rule. Pick two of these revolutions. Did Enlightenment ideas or the grievances and chances of the moment do more to cause them? Then explain how one revolution helped another start or win.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Most of the Americas broke away from European rule.',
        body: `Britain recognized the United States in 1783, and Haiti declared independence in 1804. Mexico became independent in 1821, and by 1826 Spain had lost every American colony except Cuba and Puerto Rico.`
      },
      {
        category: 'Religious',
        title: 'Faith fed the fight against slavery, and a priest led Mexico\'s first rising.',
        body: `Quakers had come to see slavery as a sin, and many abolitionists drew on faith as well as Enlightenment ideas. In 1810 a priest, Miguel Hidalgo, led Mexico's first rising.`
      },
      {
        category: 'Social',
        title: 'Rights reached more people slowly, and city life grew harder.',
        body: `Slavery ended in Haiti through its revolution. Then it ended country by country, from Chile in 1823 to Brazil in 1888. In 1848 the Seneca Falls meeting demanded the vote for women. In 1890 Riis wrote that three in four New Yorkers lived in tenements.`
      },
      {
        category: 'Intellectual',
        title: 'Revolutionaries used the language of natural rights.',
        body: `Locke wrote of natural rights in 1689, and the Declaration of Independence (1776) said "all men are created equal." The Declaration of Sentiments (1848) added "and women."`
      },
      {
        category: 'Technological',
        title: 'Machines and railroads came to the United States and grew.',
        body: `Slater built Arkwright's spinning machines from memory, and his mill was begun in 1793. The railroad crossed the country in 1869, and steel output rose from about 69,000 tons in 1870 to about 10 million in 1900.`
      },
      {
        category: 'Economic',
        title: 'The United States became the world\'s largest maker of goods.',
        body: `After the 1790s, more and more of Britain's cotton came from US plantations worked by enslaved people. The wheat price gap between Chicago and Liverpool fell from 57.6 percent in 1870 to 15.6 percent in 1913, after this unit ends. By 1900 the United States made more manufactured goods than any other country.`
      }
    ]
  }
};
