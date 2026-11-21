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
 *
 * Plain-language pass (2026-11-16): sentences cut to one idea each, and the College Board's own
 * words moved out of the story into one "What the College Board says" box per section, quoted
 * word for word from scripts/lib/ced-source/unit-4.js with the topic linked. No fact, date or
 * hedge was added or dropped; see docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-east-asia',
  slug: 'region-4-east-asia',
  unit: '4',
  region: 'East Asia',
  titleHtml: 'East <em>Asia</em>',
  deck: `From 1450 to 1750, China and Japan dealt with Europeans on their own terms. Follow silver across the oceans to China, where a tax law made it even more wanted. Watch Japan's rulers decide which Europeans may stay. Then see the Manchus conquer China.`,
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
      thesis: `When Portuguese ships reached China's coast in the 1500s, they met a state far larger and stronger than their own. Ming China did not have to bend. It let the newcomers trade at one small port, under Chinese officials, because the trade was useful to China.`,
      parts: [
        {
          heading: 'The Ming and the sea',
          blocks: [
            { p: `The <span class="kt">Ming dynasty</span> had ruled China since <span class="num">1368</span>. In the early 1400s, the Ming admiral <b>Zheng He</b> led large fleets as far as East Africa. Then, after <span class="num">1433</span>, the court stopped sending them.` },
            { p: `China did not stop trading. But the Ming wanted to decide who came and went on its coasts, so it restricted private overseas trade by its own people. Chinese merchants kept sailing across Southeast Asia anyway, often against the law.` },
            { p: `The court allowed official foreign trade mainly through the <span class="kt">tribute system</span>. A foreign ruler sent envoys to bow to the emperor and accept, at least in ceremony, that he ranked above their own ruler. In return, the envoys received gifts and were allowed to trade.` }
          ]
        },
        {
          heading: 'Chinese tools on European ships',
          blocks: [
            { p: `The ships that came looking for China carried Chinese ideas. The <span class="kt">magnetic compass</span> was first used at sea in China, by about <span class="num">1100</span>. Gunpowder came from China too. Europeans combined these with Greek and Islamic instruments and with Mediterranean sails. The result was ships that could cross oceans, find their way back, and arrive armed (<a href="#chapter-t4-1">Topic 4.1</a>).` }
          ]
        },
        {
          heading: 'Portugal at Macau',
          blocks: [
            { p: `Portugal reached India by sea in <span class="num">1498</span> (<a href="#chapter-t4-2">Topic 4.2</a>). It built a <span class="kt">trading-post empire</span>: a chain of fortified ports, not conquered land. In <span class="num">1511</span> Portugal took Malacca, a port on the strait that leads into the South China Sea. From there, its ships sailed on to China.` },
            { p: `From <span class="num">1557</span>, Chinese provincial officials let Portuguese merchants settle permanently at <b>Macau</b>, a small peninsula on the south coast. Chinese officials kept authority over the port. The Portuguese paid them a yearly ground rent. Macau existed because China allowed it.` },
            { p: `Why allow it? Ming law barred Chinese merchants from trading directly with Japan. In <span class="num">1567</span> the Ming eased its limits and licensed Chinese merchants to trade overseas, but the ban on Japan stayed. That left a gap, and the Portuguese stepped into it. They carried Chinese silk to Japan and Japanese silver back to China. Macau kept that trade in one place that Chinese officials could watch (<a href="#chapter-t4-4">Topic 4.4</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "colonized" China. On land, Portugal faced a state with armies and income many times larger than its own. Macau was a permission, not a conquest.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              html: `<a href="#chapter-t4-1">Topic 4.1</a>: "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation." The compass and gunpowder are China's part of that sentence.`
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
      thesis: `Silver from Spain's American colonies and from Japan poured into China. Silver was worth more there than in Europe, and a tax law made China need it even more. China paid for it with silk and porcelain made by ordinary families. The same ships helped carry American crops to China.`,
      parts: [
        {
          heading: 'Why China wanted silver',
          blocks: [
            { p: `Through the 1500s, the Ming government folded many taxes and labor duties into one payment in silver. Historians call this reform the <span class="kt">Single Whip</span>. Around <span class="num">1580</span> the minister <b>Zhang Juzheng</b> pushed it across the empire. Some grain was still owed in rice, but most taxes were now paid in silver. Tens of millions of households needed silver, and China mined little of its own.` },
            { p: `Silver was already worth more in China than in Europe. That was because the Ming had given up paper money, and China's growing economy ran on silver. The tax reform added to that demand.` },
            { p: `How big was the difference? The historian Richard von Glahn has worked out the numbers for the 1590s. At Canton (Guangzhou), China's southern port, one ounce of gold traded for about six ounces of silver. In Spain, the same ounce of gold cost about thirteen ounces of silver. So silver bought about twice as much gold in China. A merchant who carried silver to China made money on the silver itself.` }
          ]
        },
        {
          heading: 'Three roads to China',
          blocks: [
            { p: `Silver reached China by three roads. The first ran from Japan, where much of it came from. Portuguese ships carried Japanese silver through Macau, and Chinese and Japanese traders carried it too. In the decades around <span class="num">1600</span>, Japan may have sent China as much silver as the Americas did.` },
            { p: `Over the whole period, though, more silver came from the Americas. It came from <b>Potosí</b> in the Andes, mined from <span class="num">1545</span>, and from Zacatecas in Mexico, mined from <span class="num">1546</span> (see <a href="#chapter-r4-americas">the Americas</a>). On the second road, European ships carried it across the Atlantic and then around Africa to Asia.` },
            { p: `The third road crossed the Pacific. In <span class="num">1565</span> a Spanish expedition found a sailing route back across the Pacific, from Asia to Mexico. In <span class="num">1571</span> the Spanish founded <b>Manila</b> in the Philippines. From then on, the <span class="kt">Manila galleon</span> carried silver from Acapulco in Mexico to Manila.` },
            { p: `At Manila, Chinese merchants from Fujian and nearby provinces sailed in with silk and porcelain. They wanted one thing in return. Antonio de Morga, a Spanish official who had served in Manila, described it in a book published in <span class="num">1609</span>: "what is given them for it, is silver and reals, for they do not like gold, nor any other goods in exchange." (Reals were Spanish silver coins.)` }
          ]
        },
        {
          heading: 'The families who made the silk',
          blocks: [
            { p: `In <b>Jiangnan</b>, the rich region around the lower Yangzi River, peasant households grew rice and raised silkworms. Women and girls did much of the work of reeling the silk thread and weaving it. Families sold their silk to merchants for silver. Then they used the silver to pay their taxes.` },
            { p: `This was <span class="kt">peasant and artisan labor</span>: farm and craft work done in homes and workshops. The work was old. What changed was the amount. There was more of it, made for buyers farther away.` }
          ]
        },
        {
          heading: 'A plant on the same roads',
          blocks: [
            { p: `American crops reached China in the 1500s too. The <span class="kt">sweet potato</span> came by more than one route. One route probably ran overland into Yunnan, in the southwest, in the 1560s and 1570s. On another, the plant crossed the Pacific to the Spanish Philippines, and Chinese merchants carried it on to Fujian. Officials there promoted it in <span class="num">1594</span>, a famine year. Maize came too.` },
            { p: `Both crops grew on dry hills and uplands, where rice paddies could not be built. So over the next two centuries, peasant farming itself spread onto new ground (<a href="#chapter-t4-3">Topic 4.3</a>).` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `On Manila (<a href="#chapter-t4-2">Topic 4.2</a>): voyages "across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade."`,
                `On silver (<a href="#chapter-t4-5">Topic 4.5</a>): silver from Spain's colonies was used "to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."`,
                `On the silk families (<a href="#chapter-t4-5">Topic 4.5</a>): "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased." Silk in China is one of the College Board's examples.`,
                `On new crops (<a href="#chapter-t4-3">Topic 4.3</a>): "American foods became staple crops in various parts of Europe, Asia, and Africa."`
              ]
            } }
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
      thesis: `Japan first welcomed European traders and missionaries. Then its new rulers came to see Christianity as a threat. They cut European trade down to one Dutch post, on an island in Nagasaki harbor. They controlled foreign trade; they did not end it.`,
      parts: [
        {
          heading: 'Traders, missionaries, and new rulers',
          blocks: [
            { p: `Portuguese ships first reached Japan in the 1540s. Missionaries of the <span class="kt">Jesuits</span>, a Catholic religious order, followed. By <span class="num">1600</span> they had made many Christian converts in Japan.` },
            { p: `At the same time, Japan was coming out of a century of war between rival lords. The <span class="kt">Tokugawa shogunate</span> finished unifying the country and ruled from <span class="num">1603</span>. Its head, the <b>shogun</b>, was the top military commander, ruling in the emperor's name. The shoguns came to see Christianity as a loyalty they could not control. In <span class="num">1614</span> the shogunate banned Christianity.` }
          ]
        },
        {
          heading: 'The orders to Nagasaki',
          blocks: [
            { p: `Nagasaki was the main port where Portuguese and Chinese ships traded. Between <span class="num">1633</span> and <span class="num">1639</span>, the shogun's senior councilors sent five sets of orders to their two magistrates there. The <span class="num">1635</span> orders begin: "Japanese ships are strictly forbidden to leave for foreign countries." The third article says: "If any Japanese returns from overseas after residing there, he must be put to death." Other orders say every incoming ship must be searched for Christians.` },
            { p: `In <span class="num">1637</span> and <span class="num">1638</span>, peasants at <b>Shimabara</b>, near Nagasaki, rose up against their lords. Many of the rebels were Christian. Through years of famine, those lords had piled heavy taxes of their own on them. The lords were also enforcing the shogunate's ban on Christianity. The rising was local resistance to a government that was pulling power into its own hands (<a href="#chapter-t4-6">Topic 4.6</a>). The shogunate crushed it, and later executed the Shimabara lord for his misrule.` },
            { p: `In <span class="num">1639</span> the councilors banned Portuguese ships outright. The order gives the reason: the Portuguese "have secretly transported those who are going to propagate that religion." In other words, the shogunate accused them of sneaking in missionaries to spread Christianity.` },
            { p: `The Dutch stayed, because they came to trade, not to preach. After <span class="num">1639</span> they were the only Europeans allowed to trade in Japan. From <span class="num">1641</span> they were moved to <b>Dejima</b>, a small artificial island in Nagasaki harbor, under Japanese watch. Chinese merchants kept trading at Nagasaki. Japan had chosen a <span class="kt">restrictive trade policy</span>: limits on who could trade, where, and in what (<a href="#chapter-t4-4">Topic 4.4</a>).` },
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
            { p: `China received the Jesuits differently. The Italian Jesuit <b>Matteo Ricci</b> lived in Beijing from <span class="num">1601</span>. The Jesuits won a place at the emperor's court by teaching astronomy and mathematics and by living as Confucian scholars.` },
            { p: `So the same faith met two different receptions. New contacts carried Christianity to new places, and they also set off religious conflict. East Asia shows both: a welcome at court in Beijing, and a ban in Japan (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `On Shimabara (<a href="#chapter-t4-6">Topic 4.6</a>): "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level."`,
                `On Japan's orders (<a href="#chapter-t4-4">Topic 4.4</a>): "Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies."`,
                `On Christianity (<a href="#chapter-t4-5">Topic 4.5</a>): contact between the hemispheres "expanded the reach" of existing religions and "contributed to religious conflicts."`
              ]
            } }
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
      thesis: `In 1644 the Ming fell, and the Manchus, a small people from north of the Great Wall, took China. They kept the Chinese way of governing and built a new elite on top of it. They also limited the Han Chinese majority. Underneath, the farms and workshops kept going, and the population grew.`,
      parts: [
        {
          heading: 'The fall of the Ming',
          blocks: [
            { p: `In its last years the Ming faced rebellions. In <span class="num">1644</span> rebels led by <b>Li Zicheng</b> captured Beijing, and the last Ming emperor killed himself. The <b>Manchus</b> then took the city and began to rule China. Their ruler Hong Taiji had already named their dynasty the <span class="kt">Qing</span> in <span class="num">1636</span>.` },
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
            { p: `The Manchus were a small minority. They ruled the <b>Han Chinese</b>, China's huge ethnic majority, and they did not try to make China Manchu. They kept the Ming civil service examinations, the Confucian bureaucracy and the law codes. Han scholars still filled most government jobs.` },
            { p: `The <b>Kangxi</b> emperor (ruled <span class="num">1661</span> to <span class="num">1722</span>) presented himself as a model Confucian ruler. He also tolerated Christianity in <span class="num">1692</span>. His son, the Yongzheng emperor, banned it in <span class="num">1724</span>.` },
            { p: `Han scholar-officials now shared power with the Manchus. Under <span class="kt">dual appointment</span>, many top posts in the capital went to two officials, one Manchu and one Han. That way the Manchu could watch the Han. Qing emperors also kept the biggest decisions in their own hands. Yet Kangxi courted scholars still loyal to the Ming, too, with a special examination in <span class="num">1679</span>. The old elite's power went up and down, and the emperor had the final say (<a href="#chapter-t4-7">Topic 4.7</a>).` }
          ]
        },
        {
          heading: 'A new elite, and limits on the majority',
          blocks: [
            { p: `The new elite at the top was the army that had won the conquest: the <span class="kt">banners</span>. The banners were hereditary military units, and they existed well before <span class="num">1644</span>. Their members were Manchus, Mongols, and Han Chinese families who had joined the Manchus before the conquest. By <span class="num">1648</span>, Han bannermen outnumbered Manchus inside them.` },
            { p: `Once China was theirs, bannermen were paid by the state. They lived in walled quarters inside major cities. They had legal privileges that ordinary Han Chinese did not.` },
            { p: `The Qing also limited the Han majority. In July <span class="num">1645</span>, every Han man was ordered to wear the Manchu hairstyle, the <span class="kt">queue</span>: the front of the head shaved, the rest in a braid. The penalty for refusing was death. Many Han resisted, because in Confucian teaching the body, hair included, was a gift from one's parents. In some towns they fought with weapons, and Qing armies crushed these local risings (<a href="#chapter-t4-6">Topic 4.6</a>).` },
            { p: `The Qing also built the Willow Palisade, a line of ditches and willow fences. It was meant to keep Han farmers out of the Manchu homeland in the northeast, though many crossed anyway.` }
          ]
        },
        {
          heading: 'More people on more land',
          blocks: [
            { p: `Under the Qing, American crops spread across the hills. China's population roughly doubled across the 1700s, with much of that growth after <span class="num">1750</span>. Peace inside China was one cause. Farming land that rice could not use was another (<a href="#chapter-t4-3">Topic 4.3</a>).` },
            { p: `Much stayed the same. A Jiangnan silk family still worked at home and paid most of its taxes in silver. The Qing changed who sat at the top, not the farms and workshops underneath.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `On the banners (<a href="#chapter-t4-7">Topic 4.7</a>): conquests helped form new elites, "including in China with the transition to the Qing Dynasty."`,
                `On Han officials (<a href="#chapter-t4-7">Topic 4.7</a>): the power of existing elites "fluctuated" (went up and down) as they faced "increasingly powerful monarchs and leaders."`,
                `On the queue (<a href="#chapter-t4-7">Topic 4.7</a>): some states "suppressed diversity or limited certain groups’ roles in society, politics, or the economy."`,
                `On the population (<a href="#chapter-t4-3">Topic 4.3</a>): "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."`
              ]
            } }
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
    argue: {
      move: 'Continuity and Change',
      prompt: `Between 1450 and 1750, Europeans came to East Asia's ports, Christianity arrived, and the Manchus conquered China. Through all of it, did control of China's and Japan's foreign trade stay in East Asian hands? Make a claim, then support it with one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Strong states set the terms',
        body: `Ming China let the Portuguese settle at Macau from 1557, under Chinese officials. Tokugawa Japan crushed the Shimabara rising and from 1641 kept the Dutch on Dejima. In 1644 the Manchu Qing took Beijing but kept China's way of governing.`
      },
      {
        category: 'Religious',
        title: 'Christianity arrived, and met limits',
        body: `Jesuits made many converts in Japan, where the shoguns banned Christianity in 1614. In China they won a place at court through astronomy. The Qing emperor Kangxi tolerated Christianity in 1692, and his son banned it in 1724. Confucian teaching stayed at the center of Chinese government.`
      },
      {
        category: 'Social',
        title: 'A new elite on top, old work underneath',
        body: `The banners, the Manchu army that conquered China, became a privileged elite. Han men had to wear the queue from 1645, and Han officials shared top posts with Manchus. Peasant families worked more for faraway buyers.`
      },
      {
        category: 'Intellectual',
        title: 'Confucian learning held, and European astronomy got a hearing',
        body: `Confucian teaching stayed at the center of Chinese government under the Ming and the Qing. Jesuits won a place at the Chinese court through their skill in astronomy. The Japanese bans on Christianity show rulers judging foreign ideas by the danger they saw in them.`
      },
      {
        category: 'Technological',
        title: 'Chinese tools on other people\'s ships',
        body: `The compass and gunpowder were both first used in China. Europeans built them into the ships and guns that reached East Asia's coasts. In this unit, East Asia's technology story is what it had already given the world.`
      },
      {
        category: 'Economic',
        title: 'China\'s demand pulled much of the world\'s silver',
        body: `Silver was worth more in China than in Europe, and the Single Whip made most Chinese taxes payable in silver. So silver from Japan and the Americas flowed to China, much of it through Macau and Manila. China paid for it with silk and porcelain. American crops such as the sweet potato let farmers use dry hillsides.`
      }
    ]
  }
};
