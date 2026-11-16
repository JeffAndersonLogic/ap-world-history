'use strict';

/**
 * Unit 5 by region: the Americas.
 * One continuous story of the Americas from 1750 to 1900, told in five sections: the American
 * Revolution as grievance, words and chance (KC-5.3.III.B, KC-5.3.I.B, KC-5.3.I, KC-5.3.I.A,
 * KC-5.3), Haiti (KC-5.3.III.B, KC-5.3.I.C), Spanish America and Bolívar's letter (KC-5.3.III.B,
 * KC-5.3.I.B, KC-5.3.IV.A.i), the words pressed further by abolition and Seneca Falls (KC-5.3.I.C,
 * KC-5.3.IV.B), and industry in the United States with its railroads, steel, migrants, tenements
 * and unions (KC-5.1.I.D, KC-5.1.I.B, KC-5.1.I.E, KC-5.1.I.C, KC-5.1.IV, KC-5.1.II.B, KC-5.1.V.A,
 * KC-5.1.VI.C). Facts come from the Topic 5.1, 5.2, 5.3, 5.4, 5.5, 5.7 and 5.8 chapters and their
 * claim ledgers, and from the reviewed rebuild of 5.9 (Riis, Manhattan's population), keeping
 * their narrowings (France did not give Haiti its freedom; "helped start or win", not "caused";
 * Slater's mill begun in 1793; ideas one cause among several). Left out on purpose: Canada, the
 * Mexican-American War and the US Civil War beyond the end of slavery, none of which a Unit 5 Key
 * Concept needs, and Latin America's export economies, which are Unit 6.
 */

module.exports = {
  topicKey: 'r5-americas',
  slug: 'region-5-americas',
  unit: '5',
  region: 'The Americas',
  titleHtml: 'The <em>Americas</em>',
  deck: `From 1750 to 1900, the Americas went from a set of European colonies to a hemisphere of independent states, and the United States became the world's largest industrial power. Follow the colonists, the enslaved and the creoles who broke away, the people who pressed the new words further, and the mills, railroads and migrants that followed.`,
  topics: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.7', '5.8', '5.9'],
  ced: [
    'KC-5.3',
    'KC-5.3.I',
    'KC-5.3.I.A',
    'KC-5.3.I.B',
    'KC-5.3.I.C',
    'KC-5.3.III.B',
    'KC-5.3.IV.A.i',
    'KC-5.3.IV.B',
    'KC-5.1.I.B',
    'KC-5.1.I.C',
    'KC-5.1.I.D',
    'KC-5.1.I.E',
    'KC-5.1.II.B',
    'KC-5.1.IV',
    'KC-5.1.V.A',
    'KC-5.1.VI.C'
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
      thesis: `Many colonists had read Enlightenment writers and went on obeying their king. A revolution came when three things met: a grievance many people felt, the words to name it, and a chance to act. The thirteen British colonies had all three first.`,
      parts: [
        {
          heading: 'The words already existed',
          blocks: [
            { p: `By the 1770s, educated colonists knew the ideas of European writers such as the English philosopher John Locke, who argued in <span class="num">1689</span> that people are born with <span class="kt">natural rights</span> to their "lives, liberties and estates," and that government is a <span class="kt">social contract</span> resting on their consent (see <a href="#chapter-r5-europe">Europe</a>). The College Board says this thought "often preceded revolutions and rebellions against existing governments" (<a href="#chapter-t5-1">Topic 5.1</a>).` }
          ]
        },
        {
          heading: 'The grievance',
          blocks: [
            { p: `Britain won the Seven Years' War in <span class="num">1763</span> but came out of it deep in debt, and Parliament decided its American colonies should help pay. It taxed them with laws such as the Stamp Act of <span class="num">1765</span>, on newspapers, legal papers and playing cards. The colonists had no members in Parliament, and answered: "no taxation without representation."` }
          ]
        },
        {
          heading: 'The words and the chance',
          blocks: [
            { p: `On 4 July <span class="num">1776</span> the Continental Congress adopted the Declaration of Independence: "all men are created equal," governments get "their just powers from the consent of the governed," and when a government destroys people's rights, "it is the Right of the People to alter or to abolish it." The chance: Britain was an ocean away, its victory in 1763 had pushed France out of North America, and in <span class="num">1778</span> France joined the war on the American side. By <span class="num">1783</span> Britain had recognized the United States, and in <span class="num">1787</span> the new country wrote a constitution for a <span class="kt">republic</span>, a country with no king, whose leaders are elected (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `The College Board calls the American Revolution "a model and inspiration for a number of the revolutions that followed." It was also limited. The republic kept slavery, and most states let only men who owned property vote.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Enlightenment caused the revolution. The ideas gave the colonists words, but taxes, debt and a distant king caused it too. Name the grievance and the chance as well.`
            } }
          ]
        }
      ],
      terms: [
        ['Grievance', `A wrong that many people feel, such as an unfair tax.`],
        ['Stamp Act', `A 1765 British tax on printed papers in the American colonies, repealed in 1766.`],
        ['Consent of the governed', `The idea that a government's rightful power comes from the people who live under it.`],
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
      thesis: `France's declaration of 1789 said men are born free and equal. In Saint-Domingue, the people France held in slavery claimed those words for themselves, rose up, and won a country of their own.`,
      parts: [
        {
          heading: 'France\'s richest colony',
          blocks: [
            { p: `Saint-Domingue, on the western part of the island of Hispaniola, was France's most valuable colony. Its sugar and coffee were grown by enslaved Africans and their children, worked and punished brutally on plantations. Around <span class="num">1789</span> it held more than 400,000 enslaved people and fewer than 80,000 free people, white colonists and free people of color together.` },
            { p: `When France's Declaration of the Rights of Man reached the colony, <span class="kt">free people of color</span>, free people of African or mixed descent, asked for the equal rights it promised, and the white planters refused. In August <span class="num">1791</span>, with France in revolution and the planters divided, enslaved people in the northern plain rose up and burned plantations. Toussaint Louverture, born enslaved and freed before the revolution, became its most famous leader. "I want Liberty and Equality to reign in Saint Domingue," he announced in <span class="num">1793</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that France gave Haiti its freedom. Enslaved people rose up in 1791. French officials began freeing them in 1793 to keep their side's soldiers, and Paris abolished slavery in all French colonies in February 1794, after two and a half years of fighting. Haitians then won independence by defeating Napoleon's army.`
            } }
          ]
        },
        {
          heading: 'Independence',
          blocks: [
            { p: `In <span class="num">1802</span> Napoleon brought slavery back in other French colonies and sent an army to retake Saint-Domingue. Toussaint was arrested and died in a French prison in <span class="num">1803</span>. His officer Jean-Jacques Dessalines fought on. Yellow fever and the war destroyed the French army. On 1 January <span class="num">1804</span> Dessalines declared independence and gave the country its old Taíno name, Haiti. It was the second independent country in the Americas, after the United States, and the first founded by people who had freed themselves from slavery.` },
            { p: `Its effects reached far. In <span class="num">1803</span>, with his army in Saint-Domingue dying of yellow fever and a new war with Britain coming, Napoleon sold Louisiana to the United States. Countries that allowed slavery feared Haiti's example: the United States did not recognize it until <span class="num">1862</span>, and in <span class="num">1825</span> France demanded 150 million francs, later cut to 90 million, as the price of recognizing it (<a href="#chapter-t5-2">Topic 5.2</a>).` }
          ]
        }
      ],
      terms: [
        ['Saint-Domingue', `France's Caribbean sugar and coffee colony, which became Haiti in 1804.`],
        ['Free people of color', `Free people of African or mixed descent in the colonies, who had property but not equal rights.`],
        ['Toussaint Louverture', `A formerly enslaved man who became the most famous leader of the Haitian Revolution.`]
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
            { p: `In Spain's American empire, <span class="kt">creoles</span>, people of Spanish descent born in the Americas, owned land, mines and businesses, but the highest offices went to <span class="kt">peninsulares</span>, men born in Spain, and Spain controlled what the colonies could make and trade. Simón Bolívar, a creole from Caracas, wrote that Spain "has kept us in a sort of permanent infancy with regard to public affairs."` },
            { p: `In <span class="num">1808</span> Napoleon invaded Spain and forced its king from the throne. Spanish America suddenly had no rightful king to obey. In <span class="num">1810</span> creole leaders set up their own governments in Caracas and Buenos Aires, at first in the captive king's name, and many soon moved to full independence. In Mexico a priest, Miguel Hidalgo, called on Native and mestizo villagers to rise.` }
          ]
        },
        {
          heading: 'Bolívar\'s letter, and Haiti\'s help',
          blocks: [
            { p: `In <span class="num">1815</span>, beaten and in exile in Jamaica, Bolívar wrote the <span class="kt">Letter from Jamaica</span>: "The hatred that the Peninsula has inspired in us is greater than the ocean between us." The tie to Spain, he said, "has been severed." He also doubted that governments "wholly representative" suited Spanish America yet. The College Board names his letter, with the American Declaration and the French one, among the documents through which Enlightenment ideas "influenced resistance to existing political authority."` },
            { p: `In <span class="num">1816</span> Haiti's president, Alexandre Pétion, gave Bolívar guns, supplies and men for a new expedition, and asked him to end slavery in the lands he freed. By <span class="num">1826</span> Spain had lost every American colony except Cuba and Puerto Rico. Mexico, Gran Colombia, Peru, Chile and others became independent, and Brazil broke from Portugal in <span class="num">1822</span> with an emperor of its own. In the College Board's words, these revolutions "facilitated the emergence of independent states in the Americas."` },
            { p: `Creole elites took the top places, and most of the new countries kept a sharp social hierarchy.` }
          ]
        }
      ],
      terms: [
        ['Creoles', `People of Spanish descent born in the Americas.`],
        ['Peninsulares', `Men born in Spain, who held the highest offices in Spain's American empire.`],
        ['Letter from Jamaica', `Bolívar's 1815 letter arguing that Spanish America would never return to Spain.`],
        ['Mestizo', `A person of mixed Native and European descent.`]
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
      thesis: `The new states were founded on words about equal rights, and most of them kept slavery and shut women out. Over the next century the enslaved, abolitionists and women held the words to their own terms.`,
      parts: [
        {
          heading: 'Slavery ends, country by country',
          blocks: [
            { p: `Abolition came slowly. Haiti's revolution had ended slavery there, and some of the new states ended it early: Chile in <span class="num">1823</span> and Mexico in <span class="num">1829</span>. Many kept it for decades. Britain began ending slavery in its Caribbean colonies in <span class="num">1834</span>, and France ended it in its colonies for good in <span class="num">1848</span>. Colombia ended it in <span class="num">1851</span>, Venezuela and Peru in <span class="num">1854</span>. The United States ended it in <span class="num">1865</span>, after a civil war. Brazil was the last country in the Americas, in <span class="num">1888</span>. The College Board counts "the abolition of slavery" among the expansions of rights that reform movements, influenced by "Enlightenment ideas and religious ideals," helped bring about (<a href="#chapter-t5-1">Topic 5.1</a>).` }
          ]
        },
        {
          heading: 'Seneca Falls',
          blocks: [
            { p: `In <span class="num">1840</span> the American abolitionist Lucretia Mott, a Quaker minister, went to an antislavery convention in London and was refused a seat because she was a woman. In July <span class="num">1848</span> she and Elizabeth Cady Stanton, with three other women, organized a women's rights convention at Seneca Falls, New York. Its Declaration of Sentiments copied the Declaration of Independence and added two words: "all men and women are created equal." It complained that a woman had never been "permitted ... to exercise her inalienable right to the elective franchise," the vote.` },
            { p: `This was <span class="kt">feminism</span> emerging, the claim that women and men should have equal rights. The College Board names Seneca Falls among the demands that "challenged political and gender hierarchies." The resolution demanding the vote was the only one not passed unanimously, and in <span class="num">1900</span> most American women still could not vote.` }
          ]
        }
      ],
      terms: [
        ['Abolition', `Ending slavery, or ending the slave trade, by law.`],
        ['Declaration of Sentiments', `The 1848 Seneca Falls declaration that copied the Declaration of Independence and added "and women."`],
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
      thesis: `Factory spinning reached the United States partly in a skilled worker's memory. By 1900 the country made more of the world's manufactured goods than any other, drew millions of migrants, and packed them into cities.`,
      parts: [
        {
          heading: 'Mills by the river',
          blocks: [
            { p: `Samuel Slater learned Arkwright's spinning machines as an apprentice in an English mill, and in <span class="num">1789</span> sailed for the United States without telling anyone what he knew. At Pawtucket, Rhode Island, he built water-powered spinning machines from memory; the mill that still stands there was begun in <span class="num">1793</span>. From the 1820s, Boston merchants paid for big cotton mills at Lowell, Massachusetts, beside a river that could turn their wheels. Most of the workers were young women from New England farms (<a href="#chapter-t5-4">Topic 5.4</a>).` },
            { p: `The South grew the cotton. After the 1790s more and more of the raw cotton spun in Britain's mills came from plantations in the United States, worked by enslaved people (<a href="#chapter-t5-3">Topic 5.3</a>).` }
          ]
        },
        {
          heading: 'Oil, rails, steel and power',
          blocks: [
            { p: `In <span class="num">1859</span> Edwin Drake struck oil at Titusville, Pennsylvania; for the rest of the 1800s most of it became kerosene for lamps. In <span class="num">1869</span> the first railroad across the United States was finished at Promontory Summit, Utah, so trains could reach farms and mines in the interior that no river reached. The United States made about 69,000 tons of steel in <span class="num">1870</span> and about 10 million in <span class="num">1900</span>, and in <span class="num">1882</span> Thomas Edison's Pearl Street Station in New York began selling electric power (<a href="#chapter-t5-5">Topic 5.5</a>). The United States raised its tariffs on factory goods in <span class="num">1861</span> and kept them high for the rest of the century (<a href="#chapter-t5-7">Topic 5.7</a>). By <span class="num">1900</span> it made more of the world's manufactured goods than any other country.` }
          ]
        },
        {
          heading: 'Migrants and wheat',
          blocks: [
            { p: `Steamships made the Atlantic crossing faster and cheaper. About 55 million Europeans moved to the Americas and Australia between <span class="num">1850</span> and <span class="num">1914</span>. Trains and ships carried goods the other way: in <span class="num">1870</span> wheat cost 57.6 percent more in Liverpool than in Chicago, and by <span class="num">1913</span> only 15.6 percent more. Wheat from the middle of North America fed workers in Britain.` }
          ]
        },
        {
          heading: 'Tenements and unions',
          blocks: [
            { p: `Manhattan grew from about 515,000 people in <span class="num">1850</span> to about 1.4 million in <span class="num">1890</span>. That year the reporter Jacob Riis published How the Other Half Lives, writing of New York that "three-fourths of its people live in the tenements." By law a tenement was any rented building where three or more families lived and cooked; the worst were dark and badly crowded. In one Bayard Street room "not thirteen feet either way," he found twelve men and women sleeping. Riis wanted to shock readers into reform, and chose his scenes for that purpose.` },
            { p: `Workers organized. The American Federation of Labor, founded in <span class="num">1886</span> with Samuel Gompers as president, joined unions of skilled workers who wanted higher wages, shorter hours and better conditions (<a href="#chapter-t5-8">Topic 5.8</a>).` }
          ]
        }
      ],
      terms: [
        ['Interior', `The middle of a continent, far from the sea.`],
        ['Migration', `People moving to live in a new place.`],
        ['Tenement', `A rented building shared by three or more families, often crowded and poor.`],
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
      prompt: `Between 1776 and 1826, the United States, Haiti, Brazil and most of Spanish America broke away from European rule. Using two of the revolutions in this chapter, argue whether Enlightenment ideas or the circumstances of the moment (grievances and chances) did more to cause them, and explain how one revolution helped another start or win.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'From colonies to independent states',
        body: `The United States (recognized 1783, a republic under the 1787 constitution), Haiti (1804) and the states of Spanish America (by 1826) broke away; Brazil (1822) kept an emperor. Creole elites took the top places in most of Latin America.`
      },
      {
        category: 'Religious',
        title: 'Faith in the fight over slavery',
        body: `Quaker abolitionists such as Lucretia Mott pressed against slavery, and a priest, Miguel Hidalgo, led Mexico's first rising. The College Board ties the reform movements to both "Enlightenment ideas and religious ideals."`
      },
      {
        category: 'Social',
        title: 'The words pressed further, slowly',
        body: `Enslaved people won Haiti by revolution; slavery ended elsewhere country by country, from Chile in 1823 to Brazil in 1888. Seneca Falls (1848) demanded the vote for women. By Riis's count in 1890, three in four New Yorkers lived in tenements.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Borrowed words, borrowed machines',
        body: `The Declaration of Independence, Bolívar's Letter from Jamaica and the Declaration of Sentiments all used the language of natural rights. Slater carried Arkwright's machines in his memory; railroads, steel and electric power followed.`
      },
      {
        category: 'Economic',
        title: 'Cotton, then the world\'s largest maker',
        body: `Enslaved people in the United States grew much of the cotton Britain's mills spun. From Lowell in the 1820s to steel and electricity, the United States became the world's largest manufacturer by 1900 and drew millions of European migrants.`
      }
    ]
  }
};
