'use strict';

/**
 * Unit 5 by region: the Middle East (the Ottoman Empire and Egypt).
 * One continuous story of the Ottoman Empire and Egypt from 1750 to 1900, told in four sections:
 * lost wars and the first army reforms, with the Janissaries' resistance (KC-5.1.V.B), Muhammad
 * Ali's state-built industry in Egypt and why it failed (KC-5.1.V.C, KC-5.1.II.B), the Tanzimat
 * and Ottomanism, and the resistance to both (KC-5.1.V.B, KC-5.3.II.ii, KC-5.3.II.i), and the
 * Balkan nations leaving the empire while the region's makers lost ground and the Suez Canal
 * opened (KC-5.3.II.iii, KC-5.3.II.i, KC-5.1.II.B, KC-5.1.IV). Facts come from the Topic 5.2,
 * 5.3, 5.4, 5.5, 5.6 and 5.8 chapters and their claim ledgers, keeping their narrowings ("many"
 * machines turned by animals, not all; Selim's army dated to the decade; historians weigh Egypt's
 * failure differently). Left out on purpose: Persia and Arabia, which the Unit 5 CED does not
 * name, and the debts and occupation of Egypt after 1875, which are Unit 6.
 */

module.exports = {
  topicKey: 'r5-middle-east',
  slug: 'region-5-middle-east',
  unit: '5',
  region: 'The Middle East',
  titleHtml: 'The <em>Middle East</em>',
  deck: `From 1750 to 1900, the Ottoman Empire and its province of Egypt faced stronger European states, more and more of them industrial. Follow the sultans who rebuilt their armies and laws, the governor of Egypt who built factories to make his own army, the soldiers and scholars who resisted, and the Balkan peoples who left the empire to become nations.`,
  topics: ['5.2', '5.3', '5.4', '5.5', '5.6', '5.8'],
  ced: [
    'KC-5.1.V.B',
    'KC-5.1.V.C',
    'KC-5.1.II.B',
    'KC-5.1.IV',
    'KC-5.3.II.i',
    'KC-5.3.II.ii',
    'KC-5.3.II.iii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'new-order',
      num: '01',
      accent: 'gold',
      name: 'A New Army, and Its Enemies',
      navLabel: 'Army reform',
      dates: '1787 to 1826 &nbsp;·&nbsp; Selim III, Napoleon in Egypt, and the Janissaries',
      thesis: `Defeats by European armies told the Ottoman sultans that their old army could no longer win. Their first reforms were military, and the old army fought back.`,
      parts: [
        {
          heading: 'An empire of many peoples',
          blocks: [
            { p: `In 1750 the <span class="kt">Ottoman Empire</span>, ruled by a sultan in Istanbul, held lands in southeastern Europe (the Balkans), Anatolia and the Arab lands, including Egypt. It ruled many peoples, Muslim, Christian and Jewish, speaking many languages. Over the next century and a half it faced European states that were growing stronger, and from the 1800s more and more of them were industrial.` }
          ]
        },
        {
          heading: 'Selim\'s New Order',
          blocks: [
            { p: `After a lost war with Russia (<span class="num">1787</span> to <span class="num">1792</span>), Sultan Selim III built a new infantry in the 1790s, the "New Order," with European-style uniforms, imported guns and French instructors. The <span class="kt">Janissaries</span>, the empire's old army corps, saw it as a threat, and important conservative religious scholars sided with them. A revolt overthrew Selim in <span class="num">1807</span>.` },
            { p: `In <span class="num">1798</span> a French army under Napoleon invaded Egypt and easily defeated its rulers, the Mamluks, a class of soldier-lords. The French left in <span class="num">1801</span>, but they had shown what a modern European army could do. In June <span class="num">1826</span> Sultan Mahmud II destroyed the Janissaries and built a new army along European lines (<a href="#chapter-t5-8">Topic 5.8</a>).` },
            { p: `This is the pattern the College Board describes: "some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries," and "Reform efforts were often resisted by some members of government or established elite groups."` }
          ]
        }
      ],
      terms: [
        ['Ottoman Empire', `The Muslim empire ruled from Istanbul that held the Balkans, Anatolia and the Arab lands.`],
        ['Janissaries', `The Ottoman Empire's old army corps, destroyed in 1826.`],
        ['Mamluks', `The class of soldier-lords who ruled Egypt until Napoleon's invasion and Muhammad Ali.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'egypt',
      num: '02',
      accent: 'rust',
      name: 'Egypt Builds Its Own Industry',
      navLabel: 'Muhammad Ali',
      dates: '1805 to the 1840s &nbsp;·&nbsp; Cotton, factories, and an army',
      thesis: `Muhammad Ali, Egypt's Ottoman governor, used the state's control of farming to pay for factories that supplied his army. The army won wars until European powers stopped it, and then most of the factories failed.`,
      parts: [
        {
          heading: 'A governor who wanted power of his own',
          blocks: [
            { p: `Among the Ottoman troops sent to retake Egypt from the French was Muhammad Ali, an officer from an Albanian family. In <span class="num">1805</span> the Ottomans named him governor of Egypt, and by <span class="num">1811</span>, after his men killed the Mamluk leaders in the Cairo Citadel, he ruled alone. He wanted Egypt strong enough that he and his family could hold it, even against the sultan, and strength meant an army.` }
          ]
        },
        {
          heading: 'Crops paid for factories',
          blocks: [
            { p: `His government took control of Egypt's farming: it told peasants what to plant, bought their crops cheap and sold them abroad dear. Those crop monopolies, first on grain and other crops and from <span class="num">1820</span> above all on a new crop, long-staple cotton, earned a great deal. With that money, from the late 1810s, the government built cotton mills and works for weapons, sugar and other goods, with European machines and experts. By the early 1830s about 30 cotton mills employed about 30,000 workers, many making cloth and uniforms for the army, and Muhammad Ali kept cheap British cloth out of Egypt to protect them.` },
            { p: `The workers were drafted, as Egyptian peasants had long been made to dig canals. From <span class="num">1822</span> peasants were drafted into the army too, which is called <span class="kt">conscription</span>, and it reached about 130,000 soldiers by the early 1830s. In the 1820s Muhammad Ali also sent Egyptian students to Europe to learn its sciences. This is <span class="kt">state-sponsored industry</span>, one of the College Board's "state-sponsored visions of industrialization": a government that planned, paid for and owned the factories itself (<a href="#chapter-t5-6">Topic 5.6</a>).` }
          ]
        },
        {
          heading: 'It worked, then it stopped',
          blocks: [
            { p: `In <span class="num">1831</span> his army, led by his son Ibrahim, invaded Syria and beat the sultan's armies more than once. But Britain, Austria, Russia and Prussia did not want a strong Egypt breaking the Ottoman Empire apart. In <span class="num">1840</span> British warships and Ottoman troops drove Ibrahim out of Syria. In <span class="num">1841</span> the sultan made Egypt's governorship hereditary in Muhammad Ali's family, but Egypt had to give up its conquests except Sudan, cut its army to 18,000 men in peacetime, and accept a trade treaty of <span class="num">1838</span> that ended the monopolies and opened Egypt to cheap foreign goods.` },
            { p: `The factories had problems of their own. Egypt had almost no coal, so many machines were turned by animals. The drafted workers resisted the work, and the managers had little experience. By the mid-1840s most of the new factories had failed. Egypt went on growing cotton, almost all of it sold abroad, much of it to the mills of Britain.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: historians disagree',
              html: `The historian Joel Beinin lists four causes of the failure: "inexperienced management, lack of adequate natural resources (especially fuel), peasant resistance to factory discipline and competition from Europe." Others stress Britain's hostility to a strong Egypt. Name more than one cause.`
            } }
          ]
        }
      ],
      terms: [
        ['State-sponsored industry', `Industry that a government plans, pays for and protects.`],
        ['Monopoly', `Control of a trade by one buyer or seller, here the government.`],
        ['Conscription', `Forcing people to serve in the army.`],
        ['Long-staple cotton', `Cotton with long fibers, which makes strong, fine thread.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'tanzimat',
      num: '03',
      accent: 'iron',
      name: 'Reorganization, and One Loyalty',
      navLabel: 'The Tanzimat',
      dates: '1839 to 1878 &nbsp;·&nbsp; Gülhane, equality, a constitution, and a sultan',
      thesis: `The Ottoman government reorganized its laws and taxes, ran a few state factories, and tried to give all its peoples one loyalty, to the empire. Each step met resistance from inside.`,
      parts: [
        {
          heading: 'The Tanzimat',
          blocks: [
            { p: `On 3 November <span class="num">1839</span>, at Gülhane in Istanbul, the government announced the <span class="kt">Tanzimat</span>, "reorganization." Its decree promised "perfect security for life, honor, and property," "a regular system of assessing taxes" and regular military service, and said that "the Muslim and non-Muslim subjects of our lofty Sultanate shall, without exception, enjoy our imperial concessions." The state also ran industry of its own. Mahmud II's government had opened a state fez factory in Istanbul in the 1830s; around <span class="num">1850</span> it was fitted with steam engines and machines from Britain and Belgium. The state added an ironworks in <span class="num">1843</span> and telegraph lines from <span class="num">1855</span>.` }
          ]
        },
        {
          heading: 'Ottomanism',
          blocks: [
            { p: `A decree of <span class="num">1856</span> promised equal treatment to Christians and Jews, and a law of <span class="num">1869</span> made every subject an Ottoman citizen. The idea, called <span class="kt">Ottomanism</span>, was one loyalty for everyone, to the empire, instead of to a nation. It was a government trying to build a "new sense of commonality," in the College Board's words, around the empire itself, to "foster a sense of unity" among peoples who did not share one language or religion. The College Board lists Ottomanism among its optional examples of the period's calls for national unity (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `Not everyone wanted it. Many Muslims, who had long held a higher place than Christians and Jews, resented losing it, and some Christian church leaders were unhappy too.` }
          ]
        },
        {
          heading: 'A constitution, suspended',
          blocks: [
            { p: `In December <span class="num">1876</span> the empire got a constitution, and in March <span class="num">1877</span> its first parliament met. In February <span class="num">1878</span> Sultan Abdulhamid II, who had come to the throne in <span class="num">1876</span>, suspended the constitution and dissolved the parliament. Reform from above could be taken back from above.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottoman Empire refused to change. Its rulers rebuilt the army, the laws, the taxes and citizenship, and built factories and telegraphs. What it could not do was make reform stick against everyone who resisted it, inside and outside the government.`
            } }
          ]
        }
      ],
      terms: [
        ['Tanzimat', `Ottoman reforms from 1839 to 1876; the word means "reorganization."`],
        ['Ottomanism', `The Ottoman government's attempt to give all its peoples one loyalty, to the empire.`],
        ['Constitution', `A set of basic laws that even the government must follow.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'nations',
      num: '04',
      accent: 'oxide',
      name: 'Nations Leave, Makers Lose Ground',
      navLabel: 'Balkans and trade',
      dates: '1821 to 1878 &nbsp;·&nbsp; Greece, Serbia, cloth, and the Suez Canal',
      thesis: `Nationalism pulled the Christian peoples of the Balkans out of the empire. At the same time, cheap machine-made cloth from Europe undercut the region's own makers, who kept working while their share of the world's goods shrank.`,
      parts: [
        {
          heading: 'The Balkan nations',
          blocks: [
            { p: `<span class="kt">Nationalism</span>, loyalty to a nation of people who shared a language, religion and homeland, pulled at an empire of many peoples. Serbs rebelled and won the right to rule themselves. Greeks rose up in <span class="num">1821</span>, and in <span class="num">1830</span> Britain, France and Russia declared Greece an independent state; it became a kingdom under a Bavarian prince in <span class="num">1832</span>. In <span class="num">1878</span> Serbia, Montenegro and Romania were recognized as independent. These are the College Board's nationalists who "challenged boundaries" (<a href="#chapter-t5-2">Topic 5.2</a>). Greece had left before Ottomanism began; it did not stop Serbia, Montenegro and Romania in 1878.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that nationalism only built countries. The same loyalty that joined Italy and Germany together pulled Greece and Serbia away from the Ottoman Empire (see <a href="#chapter-r5-europe">Europe</a>).`
            } }
          ]
        },
        {
          heading: 'Cloth, and a shrinking share',
          blocks: [
            { p: `The region had long made and traded goods. In the mid-1780s about a quarter of the raw cotton Britain imported came from the Ottoman Empire, through the port of Smyrna (<a href="#chapter-t5-3">Topic 5.3</a>). But machine-made cloth was cheaper than hand-made: in <span class="num">1838</span> English cotton cloth sold in Egypt for less than cloth from Egypt's own new mills. The College Board's sentence is that while "Middle Eastern and Asian countries continued to produce manufactured goods, these regions' share in global manufacturing declined."` },
            { p: `They did keep producing. In the Syrian cities of Aleppo and Damascus, the number of handlooms held steady from <span class="num">1860</span> to <span class="num">1914</span> (<a href="#chapter-t5-4">Topic 5.4</a>).` }
          ]
        },
        {
          heading: 'A canal for steamships',
          blocks: [
            { p: `In <span class="num">1869</span> the Suez Canal opened in Egypt, joining the Mediterranean to the Red Sea and cutting the voyage from Europe to Asia. It was of little use to sailing ships, because the Red Sea's winds were hard to sail against, so it mostly served steamships (<a href="#chapter-t5-5">Topic 5.5</a>). In <span class="num">1870</span> an undersea telegraph cable through the Red Sea reached Bombay. The region now sat on the fastest route between Europe and Asia. What European powers did with that route is Unit 6.` }
          ]
        }
      ],
      terms: [
        ['Nationalism', `Loyalty to a nation, people who share a language, religion, customs and homeland, above a king or an empire.`],
        ['Share', `A part of a whole; here, the part of all the world's manufactured goods made in one region.`],
        ['Suez Canal', `The canal across Egypt, opened in 1869, that joined the Mediterranean to the Red Sea.`]
      ]
    }
  ],

  closing: {
    heading: 'The Middle East at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `Between 1787 and 1878, Ottoman sultans and Egypt's governor rebuilt their armies, laws and economies. By 1878, how much had their reforms changed how the empire was ruled and who ruled it? Make a claim, then support it with one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Reform from above, taken back from above',
        body: `Selim III's New Order (1790s) fell to a revolt in 1807; Mahmud II destroyed the Janissaries in 1826. The Tanzimat began in 1839, a constitution came in 1876, and Abdulhamid II suspended it in 1878. Greece (1830), Serbia, Montenegro and Romania (1878) left the empire.`
      },
      {
        category: 'Religious',
        title: 'Equal subjects, resented',
        body: `The decrees of 1839 and 1856 promised equal treatment to Muslims, Christians and Jews. Conservative religious scholars had sided with the Janissaries against Selim, and many Muslims resented losing their higher place in 1856.`
      },
      {
        category: 'Social',
        title: 'Drafted peasants, one citizenship',
        body: `Muhammad Ali drafted peasants into his factories and, from 1822, his army of about 130,000. Greece left the empire in 1830, and Serbia, Montenegro and Romania in 1878, despite the 1869 law that made every Ottoman subject a citizen.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Borrowed machines and teachers',
        body: `French instructors trained Selim's New Order; Egypt imported European machines and experts and sent students to Europe in the 1820s. The Ottoman state put steam engines in its fez factory and built telegraph lines from 1855. The Suez Canal opened in 1869.`
      },
      {
        category: 'Economic',
        title: 'Cotton out, cloth in',
        body: `Egypt's state mills, about 30 by the early 1830s, mostly failed by the mid-1840s, and Egypt sold its cotton abroad. Cheap English cloth undercut local makers, though the handlooms of Aleppo and Damascus held steady to 1914.`
      }
    ]
  }
};
