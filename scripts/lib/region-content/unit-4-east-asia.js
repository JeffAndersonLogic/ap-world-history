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
 * (peasant farming spreading uphill) and KC-4.2.III.B (Han officials sharing power). Facts come from the Topic 4.1, 4.3, 4.4, 4.5 and 4.7 chapters and their claim ledgers,
 * and keep their narrowings ("most taxes" in silver; the silver drop not named as the cause of the
 * Ming fall; no blanket ban on Manchu and Han marriage; Japan never "closed"). Left out on
 * purpose: Korea and the Ryukyu kingdom (the CED names neither), Tokugawa domestic politics, and
 * Qing frontier wars, none of which a Unit 4 Key Concept asks for.
 */

module.exports = {
  topicKey: 'r4-east-asia',
  slug: 'region-4-east-asia',
  unit: '4',
  region: 'East Asia',
  titleHtml: 'East <em>Asia</em>',
  deck: `From 1450 to 1750, China and Japan dealt with Europeans on their own terms. Follow American silver as a Chinese tax law pulls it across two oceans, Japan's rulers as they decide which Europeans may stay, and the Manchus as they conquer China and build a new elite on top.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.7'],
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
    'KC-4.3.II.A.i'
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
            { p: `The <span class="kt">Ming dynasty</span> had ruled China since <span class="num">1368</span>. In the early 1400s the Ming admiral <b>Zheng He</b> led large fleets as far as East Africa, and then the court stopped sending them after <span class="num">1433</span>. China did not stop trading, though. Chinese merchants kept sailing across Southeast Asia, and the court kept foreign trade inside channels it licensed, which historians call the <span class="kt">tribute system</span>. Foreign rulers who wanted to trade came to honor the emperor, and trade followed.` },
            { p: `For much of the dynasty the Ming also restricted its own subjects' private overseas trade. The government wanted to decide who came and went on its coasts, and that habit of setting the terms runs through this whole chapter.` }
          ]
        },
        {
          heading: 'Chinese tools on European ships',
          blocks: [
            { p: `The ships that came looking for China carried Chinese ideas on board. The <span class="kt">magnetic compass</span> came from China, where sailors were steering by a magnetized needle at sea by about <span class="num">1100</span>. Gunpowder, which armed the Portuguese ships, was Chinese too. Europeans combined them with Greek and Islamic instruments and star tables to build ships that could cross oceans and come back (<a href="#chapter-t4-1">Topic 4.1</a>). The College Board's words are that knowledge "from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation."` }
          ]
        },
        {
          heading: 'Portugal at Macau',
          blocks: [
            { p: `Portugal built a <span class="kt">trading-post empire</span>: a chain of fortified ports instead of conquered provinces. It took Goa in India in <span class="num">1510</span> and Malacca, on the strait between the Indian Ocean and the South China Sea, in <span class="num">1511</span> (<a href="#chapter-t4-2">Topic 4.2</a>). From Malacca, Portuguese ships sailed on to China's south coast.` },
            { p: `There they could not do what they did elsewhere. From <span class="num">1557</span>, Chinese provincial officials let Portuguese merchants settle permanently at <b>Macau</b>, a small peninsula on the south coast. It was not a conquest. Chinese officials kept authority over the port, and the Portuguese paid them a yearly ground rent. Historians date the formal arrangement anywhere from the 1550s to <span class="num">1573</span>, but Macau existed because China allowed it.` },
            { p: `Why allow it? In <span class="num">1567</span> the Ming eased their limits and licensed Chinese merchants to trade overseas, but Ming law still barred them from trading directly with Japan. So the Portuguese stepped into the gap. They carried Chinese silk to Japan and Japanese silver back to China, and Macau let Chinese officials keep that trade in one place they could watch (<a href="#chapter-t4-4">Topic 4.4</a>). The post made Portugal's merchants money, on China's conditions.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "colonized" China. Portuguese guns were strong at sea, but ashore Portugal faced a state with armies and revenues many times its own. Macau was a permission, not a conquest.`
            } }
          ]
        }
      ],
      terms: [
        ['Ming dynasty', `The Chinese dynasty that ruled from 1368 until rebels took Beijing in 1644.`],
        ['Tribute system', `The Ming practice of running foreign trade through licensed channels, with foreign rulers coming to honor the emperor.`],
        ['Magnetic compass', `A magnetized needle that shows direction, first used at sea in China.`],
        ['Trading-post empire', `An empire of fortified ports for trade rather than conquered land, like Portugal's.`],
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
      thesis: `Spain found the silver, but a Chinese tax law decided where much of it went. China paid for that silver with silk and porcelain made by ordinary families, and the same ships that carried the silver helped carry new American crops to China.`,
      parts: [
        {
          heading: 'A tax that pulled silver around the world',
          blocks: [
            { p: `Through the 1500s the Ming government folded many taxes and labor duties into a single payment in silver, a reform historians call the <span class="kt">Single Whip</span>. The minister <b>Zhang Juzheng</b> pushed it across the empire around <span class="num">1580</span>. Some grain was still owed in rice, but most taxes were now paid in silver. Tens of millions of households needed silver every year, and China mined little of its own.` },
            { p: `So silver was worth more in China than in Europe. In the 1590s an ounce of gold bought about five and a half to seven ounces of silver at Canton, but twelve and a half to fourteen in Spain. A merchant who carried silver to China made money on the silver itself, before he bought a single bolt of silk. That gap was the engine of the trade.` }
          ]
        },
        {
          heading: 'Two roads to China',
          blocks: [
            { p: `Some of the silver came from Japan, carried by the Portuguese through Macau. Far more came from the Americas, from <b>Potosí</b> in the Andes, mined from <span class="num">1545</span>, and Zacatecas in Mexico, from <span class="num">1546</span> (see <a href="#chapter-r4-americas">the Americas</a>). Some crossed the Atlantic and went on to Asia around Africa in European ships, because Europeans had few goods Asian buyers wanted.` },
            { p: `The other road crossed the Pacific. A Spanish expedition found a way back across the Pacific in <span class="num">1565</span>, and in <span class="num">1571</span> the Spanish founded <b>Manila</b> in the Philippines. The College Board says that voyages "across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade." From then on the <span class="kt">Manila galleon</span>, usually one or two ships a year, carried silver from Acapulco in Mexico to Manila.` },
            { p: `At Manila, Chinese merchants did the selling. Junks from Fujian and nearby provinces sailed in with raw silk, silk cloth and porcelain. Antonio de Morga, a Spanish official in Manila, wrote in <span class="num">1609</span> that "what is given them for it, is silver and reals, for they do not like gold, nor any other goods in exchange" (<a href="#chapter-t4-5">Topic 4.5</a>). In the CED's words, the silver was used "to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Europeans paid for Chinese goods with better European products. They had little that Chinese buyers wanted, so they paid in silver. China was not taken over by this trade; it was the market the trade was built to reach.`
            } }
          ]
        },
        {
          heading: 'The families who made the silk',
          blocks: [
            { p: `Ordinary families made the goods that drew the silver. In <b>Jiangnan</b>, the rich region around the lower Yangzi River, peasant households near cities such as Suzhou grew rice and raised silkworms. Women and girls did much of the work of raising the worms, reeling the thread and weaving. Families sold their silk to merchants for silver and used it to pay their taxes.` },
            { p: `The College Board says <span class="kt">peasant and artisan labor</span> "continued and intensified in many regions as the demand for food and consumer goods increased," and it names silk in China as an example. The work was old; there was more of it, for buyers farther away.` }
          ]
        },
        {
          heading: 'A plant on the same roads',
          blocks: [
            { p: `American crops reached China in the 1500s too. The sweet potato came by more than one route: one probably ran overland into Yunnan, in the southwest, in the 1560s and 1570s; on another, the plant crossed the Pacific to the Spanish Philippines, and Chinese merchants carried it on to Fujian. Officials there promoted it in <span class="num">1594</span>, a famine year. <span class="kt">Maize</span> arrived in the same century. Both grew on dry hills and uplands where rice paddies could not be built, so peasant farming itself spread onto new ground. The CED's sentence is that "American foods became staple crops in various parts of Europe, Asia, and Africa" (<a href="#chapter-t4-3">Topic 4.3</a>).` }
          ]
        }
      ],
      terms: [
        ['Single Whip', `The Ming reform that combined many taxes and labor duties into one payment in silver, pushed across China around 1580.`],
        ['Manila galleon', `The Spanish ships, usually one or two a year from 1571, that carried American silver from Acapulco to Manila.`],
        ['Fujian merchants', `Chinese traders who sailed to Manila with silk and porcelain and took silver home.`],
        ['Peasant and artisan labor', `Farm and handcraft work done in households and workshops, which grew as demand for goods rose.`],
        ['Sweet potato', `An American crop that reached China in the 1500s and grew on hillsides too steep or dry for rice.`]
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
            { p: `Portuguese ships first reached Japan in the 1540s, and Jesuit missionaries followed. The <span class="kt">Jesuits</span> were a Catholic religious order that sent missionaries across Asia. By <span class="num">1600</span> they had made many Christian converts in Japan.` },
            { p: `At the same time Japan was coming out of a century of war between rival lords. The <span class="kt">Tokugawa shogunate</span>, a military government led by a <b>shogun</b>, unified the country and ruled from <span class="num">1603</span>. The shoguns came to see Christianity as a loyalty outside their control. The shogunate banned Christianity in <span class="num">1614</span>. The English had left by <span class="num">1623</span>, and the Spanish were expelled in <span class="num">1624</span>.` }
          ]
        },
        {
          heading: 'The orders to Nagasaki',
          blocks: [
            { p: `Between <span class="num">1633</span> and <span class="num">1639</span>, the shogun's senior councilors sent five sets of orders to their two magistrates at Nagasaki, the main port where Portuguese and Chinese ships traded. The <span class="num">1635</span> set has seventeen articles. The first reads: "Japanese ships are strictly forbidden to leave for foreign countries." The third: "If any Japanese returns from overseas after residing there, he must be put to death." Others order a search of every incoming ship for Christians, rewards for informers, and rules for buying raw silk.` },
            { p: `In <span class="num">1637</span> and <span class="num">1638</span> a rebellion at <b>Shimabara</b>, near Nagasaki, drew in many Christian peasants. In <span class="num">1639</span> the councilors banned Portuguese ships outright, because, the order says, the Portuguese "have secretly transported those who are going to propagate that religion."` },
            { p: `The Dutch stayed, because they came to trade and not to preach. After <span class="num">1639</span> they were the only Europeans allowed to trade in Japan, and from <span class="num">1641</span> they were moved from the port of Hirado to <b>Dejima</b>, a small artificial island in Nagasaki harbor, where they lived and traded under Japanese watch. Chinese merchants kept trading at Nagasaki. This is the College Board's sentence in action: "Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Japan "closed itself off." The word for "closed country" was first used in <span class="num">1801</span>, long after these orders, and the orders themselves carry no such title. Chinese and Dutch ships kept coming to Nagasaki. Japan chose who could come, and on what terms.`
            } }
          ]
        },
        {
          heading: 'One faith, two receptions',
          blocks: [
            { p: `Christianity reached China too: the Italian Jesuit <b>Matteo Ricci</b> lived in Beijing, at the Ming capital, from <span class="num">1601</span>. The College Board says contact "expanded the reach" of existing religions and "contributed to religious conflicts" (<a href="#chapter-t4-5">Topic 4.5</a>). East Asia shows both: Christianity spread into Japan and reached Beijing, and Japan's rulers answered it with bans, expulsions and searches.` }
          ]
        }
      ],
      terms: [
        ['Jesuits', `A Catholic religious order whose missionaries reached Japan and China.`],
        ['Tokugawa shogunate', `The military government that ruled Japan from 1603 and limited Christianity and European trade.`],
        ['Shimabara Rebellion', `A rising near Nagasaki in 1637 and 1638 that drew in many Christian peasants.`],
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
              html: `Do not write that a silver shortage caused the fall of the Ming. Silver imports dropped in the 1630s and 1640s, and historians argue over how much that hurt. Call it one pressure among several.`
            } }
          ]
        },
        {
          heading: 'What the Qing kept, and who lost ground',
          blocks: [
            { p: `The Manchus were a small minority ruling a huge Han Chinese majority, and they did not try to make China Manchu. They kept the Ming way of governing: the civil service examinations, the Confucian bureaucracy and the law codes. Han Chinese scholars still passed the exams and filled most government jobs. The <b>Kangxi</b> emperor presented himself as a model Confucian ruler; in <span class="num">1696</span> his court printed a book of pictures of farming and silk weaving with his own poems, honoring the work of peasant families.` },
            { p: `The old Han scholar-officials kept their exams and most of their jobs, but they now shared power. Many top posts in the capital went to two officials, one Manchu and one Han, so that the Manchu could watch the Han. This is what the College Board means when it says the power of existing elites "fluctuated" as they faced "increasingly powerful monarchs and leaders" (<a href="#chapter-t4-7">Topic 4.7</a>).` }
          ]
        },
        {
          heading: 'A new elite, and limits on the majority',
          blocks: [
            { p: `The new elite at the top was the army that had won the conquest: the <span class="kt">banners</span>. They existed well before <span class="num">1644</span>: hereditary military units of Manchus, Mongols, and Han Chinese families who had joined the Manchus before the conquest; at first, Han bannermen outnumbered Manchus inside them. Once China was theirs, bannermen were paid by the state, lived in walled quarters inside major cities, and had legal privileges that ordinary Han Chinese did not. The CED names this case: new elites formed "in China with the transition to the Qing Dynasty."` },
            { p: `The Qing also limited the Han majority. In July <span class="num">1645</span> every Han man was ordered to shave the front of his head and wear his hair in the Manchu braid, the <span class="kt">queue</span>, on pain of death. Many Han resisted, because in Confucian teaching the body, hair included, was a gift from one's parents. A line of ditches and willow fences, the Willow Palisade, was built to keep Han farmers out of the Manchu homeland in the northeast, though many crossed anyway. In the CED's words, some states "suppressed diversity or limited certain groups’ roles in society, politics, or the economy."` }
          ]
        },
        {
          heading: 'More people on more land',
          blocks: [
            { p: `Under the Qing, the American crops of section 02 spread across the hills. A Qing official's illustrated album of Taiwan, made in the 1740s, says sweet potatoes were "truly a help in years of bad harvest" (in a translation made for this course). China's population roughly doubled across the 1700s, much of that growth after <span class="num">1750</span>. There were several causes, internal peace among them, but farming land that rice could not use was one. The College Board's sentence is that "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."` },
            { p: `Much stayed the same. A Jiangnan silk family still worked at home, with women doing much of the weaving, and still paid most of its taxes in silver. The Qing changed who sat at the top, not the farms and workshops that fed and clothed the empire.` }
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
    intro: `The same story, gathered by its sides for review: what changed and what kept going in China and Japan.`,
    pairs: [
      {
        category: 'Political',
        title: 'Strong states set the terms',
        body: `Ming China let the Portuguese settle at Macau from 1557, under Chinese officials. Tokugawa Japan banned Portuguese ships in 1639 and confined the Dutch to Dejima from 1641. In 1644 the Manchu Qing took Beijing, changing the dynasty but keeping China's way of governing.`
      },
      {
        category: 'Religious',
        title: 'Christianity arrived, and met limits',
        body: `Jesuits made many converts in Japan and reached the Ming court, where Matteo Ricci lived from 1601. Japan's shoguns banned Christianity in 1614 and expelled the Portuguese after the Shimabara Rebellion. Confucian teaching stayed at the center of Chinese government under both dynasties.`
      },
      {
        category: 'Social',
        title: 'A new elite on top, old work underneath',
        body: `The banners, the Manchu army that conquered China, became a privileged elite; Han men had to wear the queue from 1645; Han officials shared top posts with Manchus. Peasant families, with women doing much of the silk work, worked more for faraway buyers.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Chinese tools on other people\'s ships',
        body: `The compass and gunpowder, both Chinese, were among the tools Europeans built into ocean-going ships. The examinations and Confucian learning continued under the Qing. The unit asks for no new East Asian science or inventions in this period, so this card is short on purpose.`
      },
      {
        category: 'Economic',
        title: 'China\'s demand moved the world\'s silver',
        body: `The Single Whip made most Chinese taxes payable in silver, so silver from Japan and the Americas flowed to China, much of it through Manila from 1571, paid for with silk and porcelain. American crops such as the sweet potato let farmers use dry hillsides, and the population grew.`
      }
    ]
  }
};
