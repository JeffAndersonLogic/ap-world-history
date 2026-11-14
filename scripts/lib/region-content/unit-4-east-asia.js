'use strict';

/**
 * Unit 4 by region: East Asia.
 * One continuous story of China and Japan from 1450 to 1750, told in four sections: Ming China
 * meets the first Europeans on its own terms (Macau), silver is pulled into China by the Single
 * Whip and paid for with silk and porcelain (with the American crops that rode the same roads),
 * Tokugawa Japan bans Christianity and confines the Dutch to Dejima, and the Manchu conquest makes
 * a new Qing elite over a Han majority while the farms, the silk and the population keep growing.
 * The Key Concepts that drive it are KC-4.3.II.A.i (restrictive policies), KC-4.1.IV (silver),
 * KC-4.2.II.A (peasant and artisan labor), KC-4.1.V.B and V.D (American crops), KC-4.2.III.A and
 * KC-4.3.I.B (the Qing), with shorter threads for KC-4.1.II (the compass), KC-4.1.III.A and B
 * (Portugal reaching Macau, the Pacific voyages to Manila), KC-4.1.VI (Christianity), KC-4.2.II
 * (peasant farming spreading uphill), KC-4.2.III.B (Han officials sharing power) and KC-4.3.III.iii
 * (Shimabara and resistance to the queue order). Facts come from the Topic 4.1, 4.3, 4.4, 4.5
 * and 4.7 chapters and their claim ledgers, plus a few reviewer-checked additions,
 * and keep their narrowings ("most taxes" in silver; the silver drop not named as the cause of the
 * Ming fall; no blanket ban on Manchu and Han marriage; Japan never "closed"). Left out on
 * purpose: Korea and the Ryukyu kingdom (the CED names neither), Tokugawa domestic politics, Qing
 * frontier wars, and KC-4.3.II.A.iii, which the CED words as Indian Ocean trade and the South and
 * Southeast Asia chapter carries.
 */

module.exports = {
  topicKey: 'r4-east-asia',
  slug: 'region-4-east-asia',
  unit: '4',
  region: 'East Asia',
  titleHtml: 'East <em>Asia</em>',
  deck: `From 1450 to 1750, China and Japan dealt with Europeans on their own terms. Follow silver as Chinese demand, made sharper by a tax law, pulls it across oceans, Japan's rulers as they choose which Europeans may stay, and the Manchus as they conquer China.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
  ced: [
    'KC-4.1.II',
    'KC-4.1.III.A',
    'KC-4.1.III.B',
    'KC-4.1.IV',
    'KC-4.1.V.B',
    'KC-4.1.V.D',
    'KC-4.1.VI',
    'KC-4.2.II',
    'KC-4.2.II.A',
    'KC-4.2.III.A',
    'KC-4.2.III.B',
    'KC-4.3.I.B',
    'KC-4.3.II.A.i',
    'KC-4.3.III.iii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'ming',
      num: '01',
      accent: 'gold',
      name: 'An Empire on Its Own Terms',
      navLabel: 'Ming China',
      dates: 'c. 1450 to 1600 &nbsp;·&nbsp; The Ming, the compass, and Macau',
      thesis: `When Portuguese ships reached China's coast in the 1500s, they met a state far larger and stronger than their own. Ming China did not have to bend: it let the newcomers trade at one small port, under Chinese officials, because the trade was useful to China.`,
      parts: [
        {
          heading: 'The Ming and the sea',
          blocks: [
            { p: `The <span class="kt">Ming dynasty</span> had ruled China since <span class="num">1368</span>. In the early 1400s the Ming admiral <b>Zheng He</b> led large fleets as far as East Africa, and then the court stopped sending them after <span class="num">1433</span>. China did not stop trading, but the Ming restricted its subjects' private overseas trade, because it wanted to decide who came and went on its coasts. Chinese merchants kept sailing across Southeast Asia, often against the law, and the court allowed official foreign trade mainly through the <span class="kt">tribute system</span>: foreign rulers sent envoys to acknowledge the emperor, received gifts, and were allowed to trade.` }
          ]
        },
        {
          heading: 'Chinese tools on European ships',
          blocks: [
            { p: `The ships that came looking for China carried Chinese ideas. The <span class="kt">magnetic compass</span> was first used at sea in China, by about <span class="num">1100</span>, and gunpowder was Chinese too. Europeans combined them with Greek and Islamic instruments and Mediterranean sails, so that their ships could cross oceans, find their way back, and arrive armed (<a href="#chapter-t4-1">Topic 4.1</a>). The College Board's words are that knowledge "from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation."` }
          ]
        },
        {
          heading: 'Portugal at Macau',
          blocks: [
            { p: `Portugal reached India by sea in <span class="num">1498</span> (<a href="#chapter-t4-2">Topic 4.2</a>) and built a <span class="kt">trading-post empire</span>, a chain of fortified ports rather than conquered land. After taking Malacca, on the strait into the South China Sea, in <span class="num">1511</span>, its ships sailed on to China.` },
            { p: `From <span class="num">1557</span>, Chinese provincial officials let Portuguese merchants settle permanently at <b>Macau</b>, a small peninsula on the south coast. It was not a conquest. Chinese officials kept authority over the port, and the Portuguese paid them a yearly ground rent. Macau existed because China allowed it.` },
            { p: `Why allow it? Ming law barred Chinese merchants from trading directly with Japan, and even when the Ming eased its limits in <span class="num">1567</span> and licensed Chinese merchants to trade overseas, the ban on Japan stayed. So the Portuguese stepped into the gap. They carried Chinese silk to Japan and Japanese silver back to China, and Macau let Chinese officials keep that trade in one place they could watch (<a href="#chapter-t4-4">Topic 4.4</a>). The post made Portugal's merchants money, on China's conditions.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "colonized" China. Ashore, Portugal faced a state with armies and revenues many times its own. Macau was a permission, not a conquest.`
            } }
          ]
        }
      ],
      terms: [
        ['Ming dynasty', `The Chinese dynasty that ruled from 1368 until rebels took Beijing in 1644.`],
        ['Tribute system', `The Chinese framework in which foreign rulers sent envoys to acknowledge the emperor and received gifts and the right to trade in return.`],
        ['Macau', `The small port on China's south coast where Portuguese merchants settled from 1557, under Chinese officials and a yearly rent.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'silver',
      num: '02',
      accent: 'rust',
      name: 'Silver Comes to China',
      navLabel: 'Silver and silk',
      dates: '1545 to 1640s &nbsp;·&nbsp; The Single Whip, Manila, silk, and sweet potatoes',
      thesis: `Silver from Spain's American colonies and from Japan poured into China, where it was worth more than in Europe and where a tax law made it more necessary still. China paid for it with silk and porcelain made by ordinary families, and the same ships helped carry American crops to China.`,
      parts: [
        {
          heading: 'Why China wanted silver',
          blocks: [
            { p: `Through the 1500s the Ming government folded many taxes and labor duties into a single payment in silver, a reform historians call the <span class="kt">Single Whip</span>. The minister <b>Zhang Juzheng</b> pushed it across the empire around <span class="num">1580</span>. Some grain was still owed in rice, but most taxes were now paid in silver. Tens of millions of households needed silver, and China mined little of its own.` },
            { p: `Silver was already worth more in China than in Europe, because the Ming had given up paper money and the growing economy ran on silver; the tax reform added to that demand. In the 1590s an ounce of gold bought about five and a half to seven ounces of silver at Canton (Guangzhou), China's southern port, but twelve and a half to fourteen in Spain. In other words, the same silver bought about twice as much gold in China. A merchant who carried silver to China made money on the silver itself.` }
          ]
        },
        {
          heading: 'Three roads to China',
          blocks: [
            { p: `The first road ran from Japan: much of the silver came from there, carried by Portuguese ships through Macau and by Chinese and Japanese traders; in the decades around <span class="num">1600</span>, Japan may have sent China as much silver as the Americas did. Over the whole period, though, more came from the Americas, from <b>Potosí</b> in the Andes, mined from <span class="num">1545</span>, and Zacatecas in Mexico, from <span class="num">1546</span> (see <a href="#chapter-r4-americas">the Americas</a>). A second road crossed the Atlantic and went on to Asia around Africa in European ships.` },
            { p: `The third road crossed the Pacific. A Spanish expedition found a way back across the Pacific in <span class="num">1565</span>, and in <span class="num">1571</span> the Spanish founded <b>Manila</b> in the Philippines. The College Board says that voyages "across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade." From then on the <span class="kt">Manila galleon</span>, usually one or two ships a year, carried silver from Acapulco in Mexico to Manila.` },
            { p: `At Manila, Chinese merchants from Fujian and nearby provinces sailed in with silk and porcelain. Antonio de Morga, a Spanish official who had served in Manila, wrote in a book published in <span class="num">1609</span> that "what is given them for it, is silver and reals, for they do not like gold, nor any other goods in exchange" (reals were Spanish silver coins) (<a href="#chapter-t4-5">Topic 4.5</a>). In the CED's words, the silver was used "to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."` }
          ]
        },
        {
          heading: 'The families who made the silk',
          blocks: [
            { p: `In <b>Jiangnan</b>, the rich region around the lower Yangzi River, peasant households grew rice and raised silkworms, and women and girls did much of the reeling and weaving. Families sold their silk to merchants for silver and used it to pay their taxes.` },
            { p: `The College Board says <span class="kt">peasant and artisan labor</span> "continued and intensified in many regions as the demand for food and consumer goods increased"; the CED names silk in China. The work was old; there was more of it, for buyers farther away.` }
          ]
        },
        {
          heading: 'A plant on the same roads',
          blocks: [
            { p: `American crops reached China in the 1500s too. The <span class="kt">sweet potato</span> came by more than one route: one probably ran overland into Yunnan, in the southwest, in the 1560s and 1570s; on another, the plant crossed the Pacific to the Spanish Philippines, and Chinese merchants carried it on to Fujian. Officials there promoted it in <span class="num">1594</span>, a famine year. Maize came too. Both grew on dry hills and uplands where rice paddies could not be built, so over the next two centuries peasant farming itself spread onto new ground. The CED's sentence is that "American foods became staple crops in various parts of Europe, Asia, and Africa" (<a href="#chapter-t4-3">Topic 4.3</a>).` }
          ]
        }
      ],
      terms: [
        ['Single Whip', `The Ming reform that combined many taxes and labor duties into one payment in silver, pushed across China around 1580.`],
        ['Manila galleon', `The Spanish ships, usually one or two a year from 1571, that carried American silver from Acapulco to Manila.`],
        ['Peasant and artisan labor', `Farm and handcraft work done in households and workshops, which grew as demand for goods rose.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'japan',
      num: '03',
      accent: 'iron',
      name: 'Japan Chooses Its Visitors',
      navLabel: 'Tokugawa Japan',
      dates: '1540s to 1641 &nbsp;·&nbsp; Missionaries, the shoguns, and Dejima',
      thesis: `Japan first welcomed European traders and missionaries. Once its new rulers came to see Christianity as a threat, they cut European trade down to one Dutch post on an island in Nagasaki harbor. They controlled foreign trade; they did not end it.`,
      parts: [
        {
          heading: 'Traders, missionaries, and new rulers',
          blocks: [
            { p: `Portuguese ships first reached Japan in the 1540s, and missionaries of the <span class="kt">Jesuits</span>, a Catholic religious order, followed. By <span class="num">1600</span> they had made many Christian converts in Japan.` },
            { p: `At the same time Japan was coming out of a century of war between rival lords. The <span class="kt">Tokugawa shogunate</span> finished unifying the country and ruled from <span class="num">1603</span>; its head, the <b>shogun</b>, was the top military commander, ruling in the emperor's name. The shoguns came to see Christianity as a loyalty outside their control. The shogunate banned Christianity in <span class="num">1614</span>. The English had left by <span class="num">1623</span>, and the Spanish were expelled in <span class="num">1624</span>.` }
          ]
        },
        {
          heading: 'The orders to Nagasaki',
          blocks: [
            { p: `Between <span class="num">1633</span> and <span class="num">1639</span>, the shogun's senior councilors sent five sets of orders to their two magistrates at Nagasaki, the main port where Portuguese and Chinese ships traded. The <span class="num">1635</span> set has seventeen articles. The first reads: "Japanese ships are strictly forbidden to leave for foreign countries." The third: "If any Japanese returns from overseas after residing there, he must be put to death." Others order every incoming ship searched for Christians.` },
            { p: `In <span class="num">1637</span> and <span class="num">1638</span> peasants at <b>Shimabara</b>, near Nagasaki, squeezed by heavy taxes and famine and many of them Christian, rose against their lords, who were enforcing the shogunate's taxes and its ban on Christianity. It was local resistance to a centralizing state, what the College Board calls resistance from groups "on a local level" (<a href="#chapter-t4-6">Topic 4.6</a>), and the shogunate crushed it. In <span class="num">1639</span> the councilors banned Portuguese ships outright, because, the order says, the Portuguese "have secretly transported those who are going to propagate that religion."` },
            { p: `The Dutch stayed, because they came to trade and not to preach. After <span class="num">1639</span> they were the only Europeans allowed to trade in Japan, and from <span class="num">1641</span> they were moved from the port of Hirado to <b>Dejima</b>, a small artificial island in Nagasaki harbor, under Japanese watch. Chinese merchants kept trading at Nagasaki. In the CED's words, "Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Japan "closed itself off." The word for "closed country" was first used in <span class="num">1801</span>, long after these orders. Chinese and Dutch ships kept coming to Nagasaki. Japan chose who could come.`
            } }
          ]
        },
        {
          heading: 'One faith, two receptions',
          blocks: [
            { p: `China received the Jesuits differently. The Italian Jesuit <b>Matteo Ricci</b> lived in Beijing from <span class="num">1601</span>, and the Jesuits won a place at court by teaching astronomy and mathematics and living as Confucian scholars. The College Board says contact "expanded the reach" of existing religions and "contributed to religious conflicts" (<a href="#chapter-t4-5">Topic 4.5</a>). East Asia shows both, and shows that its rulers decided how far a new faith could go.` }
          ]
        }
      ],
      terms: [
        ['Tokugawa shogunate', `The military government that ruled Japan from 1603 and limited Christianity and European trade.`],
        ['Shimabara Rebellion', `A rising of peasants near Nagasaki in 1637 and 1638, driven by heavy taxes and famine, in which many rebels were Christian.`],
        ['Dejima', `The small artificial island in Nagasaki harbor where the Dutch were confined from 1641.`],
        ['Restrictive trade policy', `A government's limits on who may trade, where, and in what.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'qing',
      num: '04',
      accent: 'oxide',
      name: 'The Manchus Take China',
      navLabel: 'The Qing',
      dates: '1636 to 1750 &nbsp;·&nbsp; Conquest, a new elite, and more people',
      thesis: `In 1644 the Ming fell, and the Manchus, a small people from north of the Great Wall, took China. They kept the Chinese way of governing, built a new elite on top of it, and limited the Han Chinese majority. Underneath, the farms and workshops kept going, and the population grew.`,
      parts: [
        {
          heading: 'The fall of the Ming',
          blocks: [
            { p: `The late Ming faced rebellions, and in <span class="num">1644</span> rebels led by <b>Li Zicheng</b> captured Beijing and the last Ming emperor killed himself. The <b>Manchus</b>, whose ruler Hong Taiji had already named their dynasty the <span class="kt">Qing</span> in <span class="num">1636</span>, took the city and began to rule China.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that a silver shortage caused the fall of the Ming. Silver imports dropped in the 1630s and 1640s, and historians argue over how much that hurt.`
            } }
          ]
        },
        {
          heading: 'What the Qing kept, and who lost ground',
          blocks: [
            { p: `The Manchus were a small minority ruling the <b>Han Chinese</b>, China's huge ethnic majority, and they did not try to make China Manchu. They kept the Ming civil service examinations, Confucian bureaucracy and law codes, and Han scholars still filled most government jobs. The <b>Kangxi</b> emperor (ruled <span class="num">1661</span> to <span class="num">1722</span>) presented himself as a model Confucian ruler. He also tolerated Christianity in <span class="num">1692</span>, though his son, the Yongzheng emperor, banned it in <span class="num">1724</span>.` },
            { p: `Han scholar-officials now shared that power. Under <span class="kt">dual appointment</span>, many top posts in the capital went to two officials, one Manchu and one Han, so that the Manchu could watch the Han, and Qing emperors kept the biggest decisions in their own hands. Yet Kangxi also courted scholars still loyal to the Ming with a special examination in <span class="num">1679</span>. This is one case of what the College Board describes: the power of existing elites "fluctuated" as they faced "increasingly powerful monarchs and leaders" (<a href="#chapter-t4-7">Topic 4.7</a>).` }
          ]
        },
        {
          heading: 'A new elite, and limits on the majority',
          blocks: [
            { p: `The new elite at the top was the army that had won the conquest: the <span class="kt">banners</span>. They existed well before <span class="num">1644</span>. They were hereditary military units of Manchus, Mongols, and Han Chinese families who had joined the Manchus before the conquest. By <span class="num">1648</span>, Han bannermen outnumbered Manchus inside them. Once China was theirs, bannermen were paid by the state, lived in walled quarters inside major cities, and had legal privileges that ordinary Han Chinese did not. The CED names this case: new elites formed "in China with the transition to the Qing Dynasty."` },
            { p: `The Qing also limited the Han majority. In July <span class="num">1645</span> every Han man was ordered to shave the front of his head and wear his hair in the Manchu braid, the <span class="kt">queue</span>, on pain of death. Many Han resisted, in some towns with weapons, because in Confucian teaching the body, hair included, was a gift from one's parents; Qing armies crushed these local risings. A line of ditches and willow fences, the Willow Palisade, was built to keep Han farmers out of the Manchu homeland in the northeast, though many crossed anyway. In the CED's words, some states "suppressed diversity or limited certain groups’ roles in society, politics, or the economy."` }
          ]
        },
        {
          heading: 'More people on more land',
          blocks: [
            { p: `Under the Qing, American crops spread across the hills. China's population roughly doubled across the 1700s, much of that growth after <span class="num">1750</span>. Internal peace was one cause; farming land that rice could not use was another. The College Board's sentence is that "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."` },
            { p: `Much stayed the same. A Jiangnan silk family still worked at home and paid most of its taxes in silver. The Qing changed who sat at the top, not the farms and workshops underneath.` }
          ]
        }
      ],
      terms: [
        ['Qing dynasty', `The Manchu dynasty, named in 1636, that ruled China from 1644 to 1912.`],
        ['Banners', `The hereditary military units of Manchus, Mongols and early Han allies that conquered China, then paid and privileged by the Qing state.`],
        ['Queue', `The Manchu hairstyle, shaved forehead and long braid, that Han men had to wear from 1645.`],
        ['Dual appointment', `The Qing practice of giving many top posts to one Manchu and one Han official together.`]
      ]
    }
  ],

  closing: {
    heading: 'East Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    pairs: [
      {
        category: 'Political',
        title: 'Strong states set the terms',
        body: `Ming China let the Portuguese settle at Macau from 1557, under Chinese officials. Tokugawa Japan crushed the Shimabara rising and from 1641 kept the Dutch on Dejima. In 1644 the Manchu Qing took Beijing but kept China's way of governing.`
      },
      {
        category: 'Religious',
        title: 'Christianity arrived, and met limits',
        body: `Jesuits made many converts in Japan, where the shoguns banned Christianity in 1614. In China they won a place at court through astronomy; the Qing emperor Kangxi tolerated Christianity in 1692, and his son banned it in 1724. Confucian teaching stayed at the center of Chinese government.`
      },
      {
        category: 'Social',
        title: 'A new elite on top, old work underneath',
        body: `The banners, the Manchu army that conquered China, became a privileged elite. Han men had to wear the queue from 1645, and Han officials shared top posts with Manchus. Peasant families worked more for faraway buyers.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Chinese tools on other people\'s ships',
        body: `The compass and gunpowder, both Chinese, were among the tools Europeans built into ocean-going ships. Confucian learning continued, and Jesuits brought European astronomy to the court. The unit asks for no new East Asian inventions, so this card is short.`
      },
      {
        category: 'Economic',
        title: 'China\'s demand pulled much of the world\'s silver',
        body: `Silver was worth more in China than in Europe, and the Single Whip made most Chinese taxes payable in silver, so silver from Japan and the Americas flowed to China, much of it through Macau and Manila, paid for with silk and porcelain. American crops such as the sweet potato let farmers use dry hillsides.`
      }
    ]
  }
};
