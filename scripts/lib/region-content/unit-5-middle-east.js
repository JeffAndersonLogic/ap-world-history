'use strict';

/**
 * Unit 5 by region: the Middle East (the Ottoman Empire and Egypt).
 * One continuous story of the Ottoman Empire and Egypt from 1750 to 1900, told in five sections:
 * lost wars and the first army reforms, with the Janissaries' resistance (KC-5.1.V.B), Muhammad
 * Ali's state-built industry in Egypt and why it failed (KC-5.1.V.C), the Tanzimat and Ottomanism,
 * and the resistance to both (KC-5.1.V.B, KC-5.3.II.ii), the Balkan nations leaving the empire
 * (KC-5.3.II.iii, KC-5.3.II.i), and the region's makers losing ground while the Suez Canal and the
 * Red Sea cable put it on the fastest route to Asia (KC-5.1.II.B, KC-5.1.IV). Facts come from the
 * Topic 5.1, 5.2, 5.3, 5.4, 5.5, 5.6 and 5.8 chapters and their claim ledgers, keeping their
 * narrowings ("many" machines turned by animals, not all; Selim's army dated to the decade; the
 * crop monopolies, grain first and cotton from 1820, paid for the factories; the fez factory opened
 * by Mahmud II's government in the 1830s and fitted with steam about 1850; the first parliament in
 * March 1877; historians weigh Egypt's failure differently). Left out on purpose: Persia and
 * Arabia, which the Unit 5 CED does not name, and the debts and occupation of Egypt after 1875,
 * which are Unit 6.
 *
 * Plain-language and accuracy pass (2026-11-21): sentences cut to one idea each, definitions moved
 * out from between commas into parentheses or their own sentences, idioms removed, and every course
 * word defined on first use (sultan, province, infantry, governor, hereditary, decree, citizen,
 * parliament, suspended, dissolved, handloom). The College Board's own words left the story for one
 * "What the College Board says" box per section, each opening "In short:", then every Key Concept
 * sentence whole and word for word from scripts/lib/ced-source/unit-5.js, then each optional
 * College Board example labelled as one. Section 01 now says plainly that Selim's reforms answered
 * Russia and Napoleon, and that the industrial-state pressure came later. The fez factory has its
 * own place in time order before the 1839 decree, and the decree's quotation has a plain version.
 * The old fourth section became two (the Balkan nations; cloth and the canal), and the Balkan story
 * is one dated sequence. Added with a source: the Serbian rising of 1804 and Serbia's self-rule
 * under the sultan from 1830 (Leovac, Belleten, Turkish Historical Society); the parliament not
 * meeting again until 1908 (Britannica, "Abdulhamid II"). Added: "The story in short" (inShort) and
 * six closing cards in the fixed order; topic 5.1 joins `topics` because the CED prints
 * KC-5.3.II.i on the 5.1 page. No date was dropped.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r5-middle-east',
  slug: 'region-5-middle-east',
  unit: '5',
  region: 'The Middle East',
  titleHtml: 'The <em>Middle East</em>',
  deck: `From 1750 to 1900, the Ottoman Empire and Egypt faced stronger European states, and more and more of them were industrial. Follow the sultans who rebuilt their armies and laws. Follow Egypt's governor, who built factories for his army. Then meet the people who resisted, and the Balkan peoples who left to form nations.`,
  inShort: [
    `Lost wars pushed the Ottoman sultans to build European-style armies, and the old army fought back.`,
    `In Egypt, Muhammad Ali used money from crops to build state factories that supplied his army.`,
    `European powers stopped his army in <span class="num">1840</span>, and most of his factories failed by the mid-1840s.`,
    `The Ottoman government reformed laws and taxes and offered equal citizenship, but the sultan suspended the constitution in <span class="num">1878</span>.`,
    `Balkan nations broke away, and the region kept making goods while its share of the world's goods shrank.`
  ],
  topics: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.8'],
  ced: [
    'KC-5.1.V.B',
    'KC-5.1.V.C',
    'KC-5.1.II.B',
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
      thesis: `Lost wars told the Ottoman sultans that their old army could no longer win. Their first reforms were military, and the old army fought back.`,
      parts: [
        {
          heading: 'An empire of many peoples',
          blocks: [
            { p: `In 1750 the <span class="kt">Ottoman Empire</span> was ruled from Istanbul. Its ruler was the <span class="kt">sultan</span> (the Ottoman emperor). The empire held southeastern Europe (the Balkans) and Anatolia (most of today's Turkey). It also held the Arab lands, including Egypt.` },
            { p: `Egypt was a <span class="kt">province</span> of the empire. A province is a region ruled for the sultan by a governor. The empire's people were Muslims, Christians and Jews, and they spoke many languages. Over the next 150 years, the European states around them grew stronger. From the 1800s, more and more of those states were industrial.` }
          ]
        },
        {
          heading: 'Selim\'s New Order',
          blocks: [
            { p: `The Ottomans lost a war with Russia that lasted from <span class="num">1787</span> to <span class="num">1792</span>. Sultan Selim III decided he needed a new army. In the 1790s he built a new <span class="kt">infantry</span> (soldiers who fight on foot). He called it the "New Order." Its soldiers had European-style uniforms, imported guns and French instructors.` },
            { p: `The <span class="kt">Janissaries</span> saw the New Order as a threat. They were the empire's old army corps. Important conservative religious scholars took their side. In <span class="num">1807</span> a revolt overthrew Selim.` }
          ]
        },
        {
          heading: 'Napoleon in Egypt, and the end of the Janissaries',
          blocks: [
            { p: `In <span class="num">1798</span> a French army under Napoleon invaded Egypt. It easily defeated Egypt's rulers, the <span class="kt">Mamluks</span>. The Mamluks were a class of soldier-lords. The French left in <span class="num">1801</span>. But they had shown what a modern European army could do.` },
            { p: `In June <span class="num">1826</span> Sultan Mahmud II destroyed the Janissaries. Then he built a new army along European lines (<a href="#chapter-t5-8">Topic 5.8</a>).` },
            { p: `So the first reforms answered a lost war against Russia. Napoleon's easy victory in Egypt then showed what a modern European army could do, and that added to the pressure. Later in the century, the pressure came more and more from industrial states. Selim's fall also shows something that came back again and again. Powerful old groups fought reform.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: as industrial states grew stronger, the Ottoman Empire and other governments tried to modernize, and powerful groups often fought the changes.`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Sultan', `The ruler of the Ottoman Empire.`],
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
      thesis: `Muhammad Ali, Egypt's Ottoman governor, used the state's control of farming to pay for factories that supplied his army. The army won wars until European powers stopped it. Then most of the factories failed.`,
      parts: [
        {
          heading: 'A governor who wanted power of his own',
          blocks: [
            { p: `The Ottomans sent troops to take Egypt back from the French. Among them was Muhammad Ali, an officer from an Albanian family. In <span class="num">1805</span> the Ottomans made him <span class="kt">governor</span> of Egypt (the official who ruled the province for the sultan). His men killed the Mamluk leaders in the Cairo Citadel, and by <span class="num">1811</span> he ruled alone.` },
            { p: `Muhammad Ali wanted Egypt strong enough for his family to hold it, even against the sultan. Strength meant an army. An army needed guns, uniforms and ships.` }
          ]
        },
        {
          heading: 'Crops paid for factories',
          blocks: [
            { p: `His government took control of Egypt's farming. It told peasants what to plant. It bought their crops at low prices and sold them abroad at higher prices. When there is only one allowed buyer or seller, that is a <span class="kt">monopoly</span>. The first monopolies were on grain and other crops. From <span class="num">1820</span> the most important crop was a new one, <span class="kt">long-staple cotton</span>. Its long fibers make strong, fine thread.` },
            { p: `The money from these crop monopolies paid for factories. From the late 1810s, the government built cotton mills and works for weapons, sugar and other goods. It bought European machines and hired European experts. By the early 1830s about 30 cotton mills employed about 30,000 workers. Many of them made cloth and uniforms for the army. Muhammad Ali used his control of trade to limit cheap British cloth in Egypt, to protect the mills.` },
            { p: `The workers did not choose these jobs. They were drafted, just as Egyptian peasants had long been forced to dig canals. From <span class="num">1822</span> peasants were drafted into the army too. Forcing people to serve in the army is called <span class="kt">conscription</span>. By the early 1830s the army had about 130,000 soldiers. In the 1820s Muhammad Ali also sent Egyptian students to Europe to learn its sciences.` },
            { p: `This is <span class="kt">state-sponsored industry</span>: industry that a government plans, pays for and protects. In Egypt the government also owned the factories (<a href="#chapter-t5-6">Topic 5.6</a>).` }
          ]
        },
        {
          heading: 'It worked, then it stopped',
          blocks: [
            { p: `For a while it worked. In <span class="num">1831</span> his army invaded Syria, led by his son Ibrahim. It beat the sultan's armies more than once. But Britain, Austria, Russia and Prussia did not want a strong Egypt to break the Ottoman Empire apart. In <span class="num">1840</span> British warships and Ottoman troops drove Ibrahim out of Syria.` },
            { p: `In <span class="num">1841</span> the sultan made the governorship <span class="kt">hereditary</span> in Muhammad Ali's family. That means it would pass down to his heirs. But Egypt had to give up its conquests, except Sudan. In peacetime its army could have only 18,000 men. Egypt also had to accept a trade treaty that Britain had signed with the sultan in <span class="num">1838</span>. The treaty ended the monopolies and opened Egypt to cheap foreign goods.` },
            { p: `The factories had problems of their own. Egypt had almost no coal, so many machines were turned by animals. The drafted workers resisted the work, and the managers had little experience. By the mid-1840s most of the new factories had failed. Egypt went on growing cotton. Almost all of it was sold abroad, and much of it went to Britain's mills.` },
            { p: `Japan's government also built industry in this century, and much of it lasted. <a href="#r5-east-asia-japan-builds">The East Asia chapter</a> tells that story.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: historians disagree',
              html: `The historian Joel Beinin lists four causes of the failure: "inexperienced management, lack of adequate natural resources (especially fuel), peasant resistance to factory discipline and competition from Europe." Other historians stress Britain's hostility to a strong Egypt. In an essay, name more than one cause.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: a few governments built industry themselves, and Egypt under Muhammad Ali is one case.`,
                `<a href="#chapter-t5-6">Topic 5.6</a>: "As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization."`,
                `An optional College Board example: "Muhammad Ali’s development of a cotton textile industry in Egypt".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['State-sponsored industry', `Industry that a government plans, pays for and protects.`],
        ['Monopoly', `Control of a trade by one buyer or seller. Here the seller was the government.`],
        ['Conscription', `Forcing people to serve in the army.`],
        ['Hereditary', `Passed down from parent to child.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'tanzimat',
      num: '03',
      accent: 'iron',
      name: 'Reorganization, and One Loyalty',
      navLabel: 'The Tanzimat',
      dates: '1830s to 1878 &nbsp;·&nbsp; A fez factory, Gülhane, equality, and a constitution',
      thesis: `The Ottoman government ran state factories, reorganized its laws and taxes, and tried to give all its peoples one loyalty, to the empire. Each step met resistance from inside.`,
      parts: [
        {
          heading: 'A state factory',
          blocks: [
            { p: `The Ottoman government also ran industry of its own. In the 1830s Mahmud II's government opened a state factory in Istanbul. It made the <span class="kt">fez</span>, a brimless red cap. Ottoman soldiers and officials wore it.` }
          ]
        },
        {
          heading: 'The Tanzimat',
          blocks: [
            { p: `On 3 November <span class="num">1839</span>, at Gülhane in Istanbul, the government announced the <span class="kt">Tanzimat</span>. The word means "reorganization." It began with a <span class="kt">decree</span> (an official order from the ruler). The decree promised "perfect security for life, honor, and property." It also promised regular taxes and regular military service.` },
            { p: `The decree said that "the Muslim and non-Muslim subjects of our lofty Sultanate shall, without exception, enjoy our imperial concessions." In plain words, every subject of the sultan, Muslim or not, would get these protections.` },
            { p: `The state kept building. It added an ironworks in <span class="num">1843</span>. Around <span class="num">1850</span> the fez factory got steam engines and machines from Britain and Belgium. Telegraph lines followed from <span class="num">1855</span>.` }
          ]
        },
        {
          heading: 'Ottomanism',
          blocks: [
            { p: `A decree of <span class="num">1856</span> promised equal treatment to Christians and Jews. A law of <span class="num">1869</span> made every subject an Ottoman <span class="kt">citizen</span> (a member of the state with rights in it). This idea is called <span class="kt">Ottomanism</span>. It meant one loyalty for everyone, to the empire, instead of to a nation.` },
            { p: `The government was trying to build a shared sense of belonging. It built it around the empire itself, for peoples who did not share one language or religion (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `Not everyone wanted it. For a long time, Muslims had held a higher place than Christians and Jews. Many Muslims resented losing it. Some Christian church leaders were unhappy too.` }
          ]
        },
        {
          heading: 'A constitution, suspended',
          blocks: [
            { p: `In December <span class="num">1876</span> the empire got a <span class="kt">constitution</span>. A constitution is a set of basic laws that even the government must follow. In March <span class="num">1877</span> the first Ottoman <span class="kt">parliament</span> met. A parliament is an assembly of representatives that helps make laws.` },
            { p: `Sultan Abdulhamid II had come to the throne in <span class="num">1876</span>. In February <span class="num">1878</span> he <span class="kt">suspended</span> the constitution, which means he stopped using it. He also dissolved the parliament (sent its members home). He never formally abolished the constitution. But the parliament did not meet again until <span class="num">1908</span>. A ruler had given the reform, and a ruler could take it away.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottoman Empire refused to change. Its rulers rebuilt the army, the laws, the taxes and citizenship. They built factories and telegraph lines. What they could not do was make every reform last against the people who resisted it.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: governments sometimes used people's shared sense of belonging to build unity, and the Ottoman government tried to build it around the empire.`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity."`,
                `An optional College Board example: "Ottomanism". The College Board lists it among calls for national unification or liberation.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Tanzimat', `Ottoman reforms from 1839 to 1876. The word means "reorganization."`],
        ['Decree', `An official order from a ruler.`],
        ['Ottomanism', `The Ottoman government's attempt to give all its peoples one loyalty, to the empire.`],
        ['Constitution', `A set of basic laws that even the government must follow.`],
        ['Parliament', `An assembly of representatives that helps make laws.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'nations',
      num: '04',
      accent: 'oxide',
      name: 'The Balkan Nations Leave',
      navLabel: 'Balkan nations',
      dates: '1804 to 1878 &nbsp;·&nbsp; Serbia, Greece, Montenegro and Romania',
      thesis: `Nationalism pulled the Christian peoples of the Balkans away from the empire, one after another. Ottomanism did not stop them.`,
      parts: [
        {
          heading: 'A new loyalty',
          blocks: [
            { p: `<span class="kt">Nationalism</span> is a sense that people who share a language, religion, social customs and territory form one nation. It is also loyalty to that nation. In an empire of many peoples, that loyalty pulled people away.` }
          ]
        },
        {
          heading: 'One after another',
          blocks: [
            { p: `The Serbs rose up first, in <span class="num">1804</span>. After years of fighting, they won the right to rule themselves. From <span class="num">1830</span> Serbia governed itself under its own prince, though it still stayed inside the empire.` },
            { p: `The Greeks rose up in <span class="num">1821</span>. In <span class="num">1830</span> Britain, France and Russia declared Greece an independent state. In <span class="num">1832</span> Greece became a kingdom under a Bavarian prince.` },
            { p: `In <span class="num">1878</span> Serbia, Montenegro and Romania were recognized as fully independent (<a href="#chapter-t5-2">Topic 5.2</a>).` },
            { p: `Did Ottomanism hold the empire together? Greece had already left in 1830, before the decree of 1856 and the law of 1869. Then, in 1878, Ottomanism did not stop Serbia, Montenegro and Romania from leaving.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that nationalism only joined people into bigger states. In Italy and Germany it joined states together. In the Ottoman Empire it pulled peoples away. <a href="#r5-europe-nations">The Europe chapter</a> tells how Italy and Germany were joined.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: nationalism became a strong force, and some nationalists broke away from the states that ruled them.`,
                `<a href="#chapter-t5-1">Topic 5.1</a>: "Nationalism also became a major force shaping the historical development of states and empires."`,
                `<a href="#chapter-t5-2">Topic 5.2</a>: "Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions."`,
                `An optional College Board example: "Balkan nationalisms".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Nationalism', `A sense that people who share a language, religion, social customs and territory form one nation, and loyalty to that nation.`],
        ['Independent', `Ruling itself, with no other state above it.`]
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'trade',
      num: '05',
      accent: 'gold',
      name: 'Makers Lose Ground, and a Canal Opens',
      navLabel: 'Cloth and Suez',
      dates: '1780s to 1914 &nbsp;·&nbsp; Raw cotton, cheap cloth, handlooms, and the Suez Canal',
      thesis: `Cheap machine-made cloth from Europe undercut the region's own makers. They kept working, but their share of the world's goods shrank. Then a canal and a cable put the region on the fastest route to Asia.`,
      parts: [
        {
          heading: 'Cotton out, cloth in',
          blocks: [
            { p: `The region had long made and traded goods. It also sold raw cotton to Britain's new mills. In the mid-1780s about a quarter of the raw cotton Britain imported came from the Ottoman Empire. It was shipped from the port of Smyrna (<a href="#chapter-t5-3">Topic 5.3</a>).` },
            { p: `But machines made cloth more cheaply than hands could. In <span class="num">1838</span> English cotton cloth could be bought in Egypt for less than it cost Egypt's own mills to make the same cloth. The world was also making far more goods, and factories in Europe made most of the new ones.` }
          ]
        },
        {
          heading: 'Still making, a smaller share',
          blocks: [
            { p: `The region's makers did not stop. In the Syrian cities of Aleppo and Damascus, the number of <span class="kt">handlooms</span> held steady from <span class="num">1860</span> to <span class="num">1914</span>. A handloom is a loom worked by hand and foot, with no engine (<a href="#chapter-t5-4">Topic 5.4</a>).` },
            { p: `What changed was the region's <span class="kt">share</span>. That is the part of all the world's manufactured goods made in one region. The region still made goods, but it made a smaller part of the world's total.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Middle East stopped making goods. Its makers kept working. Its share of the world's manufacturing is what fell.`
            } }
          ]
        },
        {
          heading: 'A canal for steamships',
          blocks: [
            { p: `In <span class="num">1869</span> the <span class="kt">Suez Canal</span> opened in Egypt. It joined the Mediterranean Sea to the Red Sea and cut the voyage from Europe to Asia. Sailing ships could not use it well, because the Red Sea's winds were hard to sail against. So it mostly served steamships (<a href="#chapter-t5-5">Topic 5.5</a>).` },
            { p: `In <span class="num">1870</span> a telegraph cable laid under the Red Sea reached Bombay, in India. A telegraph sends messages as pulses of electricity along a wire. Now a message could travel between London and Bombay in minutes.` },
            { p: `The region now sat on the fastest route between Europe and Asia. What European powers did with that route is Unit 6.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: the Middle East kept making goods, but it made a smaller share of the world's total.`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined."`,
                `An optional College Board example: "Textile production in India and Egypt".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Handloom', `A loom worked by hand and foot, with no engine.`],
        ['Share', `A part of a whole. Here, the part of all the world's manufactured goods made in one region.`],
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
      prompt: `Between 1787 and 1878, Ottoman sultans and Egypt's governor rebuilt their armies, laws and economies. By 1878, how much had these reforms changed how the empire was ruled, and who ruled it? Make a claim. Then support it with one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Ottoman rulers rebuilt their state, but they could not hold all their peoples.',
        body: `Mahmud II destroyed the Janissaries in 1826, and the Tanzimat began in 1839. A constitution came in 1876, and Abdulhamid II suspended it in 1878. Greece became independent in 1830, and Serbia, Montenegro and Romania in 1878.`
      },
      {
        category: 'Religious',
        title: 'Reform tried to make Muslims, Christians and Jews equal, and many Muslims resisted.',
        body: `Conservative religious scholars sided with the Janissaries against Selim III, who was overthrown in 1807. The decree of 1856 promised equal treatment to Christians and Jews. Many Muslims resented losing their higher place.`
      },
      {
        category: 'Social',
        title: 'Reform rested on the forced labor of Egypt\'s peasants.',
        body: `By the early 1830s about 30,000 drafted workers worked in Egypt's cotton mills. From 1822 peasants were also drafted into an army of about 130,000. The drafted workers resisted factory work, one cause of the mills' failure by the mid-1840s.`
      },
      {
        category: 'Intellectual',
        title: 'Rulers borrowed European learning and tried out a new idea of loyalty.',
        body: `French instructors trained Selim III's New Order in the 1790s. In the 1820s Muhammad Ali sent Egyptian students to Europe to learn its sciences. Ottomanism (the decree of 1856 and the citizenship law of 1869) asked for loyalty to the empire, not to a nation.`
      },
      {
        category: 'Technological',
        title: 'The region imported machines, and new transport put it on a world route.',
        body: `Egypt's mills used European machines, but with almost no coal many were turned by animals. Around 1850 the Ottoman fez factory got steam engines, and telegraph lines came from 1855. The Suez Canal (1869) served steamships, and a Red Sea cable reached Bombay in 1870.`
      },
      {
        category: 'Economic',
        title: 'The region kept making goods, but its share of world manufacturing fell.',
        body: `Egypt's crop monopolies paid for about 30 state cotton mills, and most had failed by the mid-1840s. In 1838 English cloth cost less in Egypt than Egypt's own mills paid to make it. Yet the handlooms of Aleppo and Damascus held steady from 1860 to 1914.`
      }
    ]
  }
};
