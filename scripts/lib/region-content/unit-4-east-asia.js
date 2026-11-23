'use strict';

/**
 * Unit 4 by region: East Asia.
 * One continuous story of China and Japan from 1450 to 1750, told in four sections: Ming China
 * meets the first Europeans and sets the rules (Macau), silver is pulled into China by the Single
 * Whip and paid for with silk and porcelain (with the American crops that rode the same roads),
 * Tokugawa Japan bans Christianity and confines the Dutch to Dejima, and the Manchu conquest makes
 * a new Qing elite over a Han majority while the farms, the silk and the population keep growing.
 * The Key Concepts that drive it are KC-4.3.II.A.i (trading posts and restrictive policies),
 * KC-4.1.IV (silver), KC-4.2.II.A (peasant and artisan labor), KC-4.1.V.D (American crops),
 * KC-4.2.III.A and KC-4.3.I.B (the Qing), with shorter threads for KC-4.1.II (the compass),
 * KC-4.1.III.A (Portugal reaching Macau), KC-4.1.VI (Christianity's spread and the conflict it
 * brought; the syncretism half is cut with an ellipsis and taught in other chapters), KC-4.2.II (peasant farming spreading uphill, Topic 4.8), KC-4.2.III.B (Han
 * officials sharing power) and KC-4.3.III.iii (Shimabara and resistance to the queue order). Facts
 * come from the Topic 4.1, 4.3, 4.4, 4.5 and 4.7 chapters and their claim ledgers, plus a few
 * reviewer-checked additions, and keep their narrowings ("most taxes" in silver; the silver drop
 * not named as the only cause of the Ming fall; no blanket ban on Manchu and Han marriage; Japan never
 * "closed"). Left out on purpose: Korea and the Ryukyu kingdom (the CED names neither), Tokugawa
 * domestic politics, Qing frontier wars, and KC-4.3.II.A.iii, which the CED words as Indian Ocean
 * trade and the South and Southeast Asia chapter carries.
 *
 * Plain-language pass (2026-11-16): sentences cut to one idea each, and the College Board's own
 * words moved out of the story into one "What the College Board says" box per section, quoted
 * word for word from scripts/lib/ced-source/unit-4.js with the topic linked. No fact, date or
 * hedge was added or dropped; see docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 *
 * Second polish (2026-11-21, the addendum to the Unit 4 and 5 rewrite brief): every College Board
 * box now opens with an "In short" sentence, quotes whole Key Concept sentences (one cut, shown
 * with an ellipsis, where KC-4.2.II goes on to plantations and the slave trade, which this chapter
 * does not teach), and labels each example group "An optional College Board example". Added
 * `inShort`, a "How we know" box (von Glahn's silver prices, moved out of the story), the missing
 * KC-4.1.III.A and KC-4.2.II quotations, and Topic 4.8 to `topics` (KC-4.2.II lives there).
 * Definitions set between commas went into parentheses or their own sentences; idioms went; topic
 * links left the story for the boxes; the two cross-region pointers became spoken phrases that
 * link a section (South and Southeast Asia "iberians", the Americas "silver"). The silver account
 * now runs in the shared order (already worth more, then the Single Whip, then little mining).
 * Closing cards rewritten as claim plus dated evidence. Cut: the Willow Palisade (a second example
 * of limits on the Han, undated), and the Macau and Dejima glossary entries (both defined in the
 * story). No date was dropped; every hedge stays.
 *
 * Review pass 2 (2026-11-22, ledger Q2, Q5, Q6, Q15): KC-4.1.III.B left `ced` and its box (this
 * chapter never stated the effect; the Europe and Americas chapters teach it). The Ming mistake box
 * now says "the only cause" and carries Topic 4.5's hedge on the silver evidence. Shimabara now
 * names the actors: the heavy taxes were the local lords' (Matsukura Katsuie at Shimabara); the ban
 * on Christianity was the shogunate's, and the shogunate crushed the rising. KC-4.1.VI stays quoted
 * only to its conflict half, with the cut shown.
 *
 * Review pass 3 (2026-11-23, ledger R3, X6a): Ming China let the Portuguese "settle" (not "trade")
 * at one port, since Macau's merchants also went to the Canton fairs; Zheng He is marked as before
 * 1450; and the population growth after 1750 is marked as after this unit ends.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-east-asia',
  slug: 'region-4-east-asia',
  unit: '4',
  region: 'East Asia',
  titleHtml: 'East <em>Asia</em>',
  deck: `From 1450 to 1750, China and Japan set the rules for the Europeans who came to trade. Follow silver across the oceans to China, where a tax law made it even more wanted. Watch Japan's rulers decide which Europeans may stay. Then see the Manchus conquer China.`,
  inShort: [
    `Ming China let Portuguese traders settle at Macau in 1557, under Chinese officials.`,
    `Silver was worth more in China than in Europe, and most Chinese taxes came to be paid in silver.`,
    `So silver flowed in from Japan and the Americas, and China paid with silk and porcelain.`,
    `Japan's rulers banned Christianity and Portuguese ships, and kept Dutch traders on one small island.`,
    `From 1644 the Manchus conquered China over decades and ruled the Han, while American crops fed more people.`
  ],
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'],
  ced: [
    'KC-4.1.II',
    'KC-4.1.III.A',
    'KC-4.1.IV',
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
      name: 'China Sets the Rules',
      navLabel: 'Ming China',
      dates: 'c. 1450 to 1600 &nbsp;·&nbsp; The Ming, the compass, and Macau',
      thesis: `Portuguese ships reached China in the 1500s and met a state far stronger than their own. Ming China let them settle at one small port, under Chinese officials, because the trade was useful to China.`,
      parts: [
        {
          heading: 'The Ming and the sea',
          blocks: [
            { p: `The <span class="kt">Ming dynasty</span> had ruled China since <span class="num">1368</span>. Before 1450, in the early 1400s, the Ming admiral <b>Zheng He</b> led large fleets as far as East Africa. Then, after <span class="num">1433</span>, the court stopped sending them.` },
            { p: `China did not stop trading. But the Ming wanted to control who came and went on its coasts. So it restricted private overseas trade by its own people. Chinese merchants kept sailing across Southeast Asia anyway, often against the law.` },
            { p: `Official foreign trade went mainly through the <span class="kt">tribute system</span>. A foreign ruler sent envoys to bow to the emperor. In this way the ruler accepted, at least in ceremony, that the emperor ranked above him. In return, the envoys received gifts and were allowed to trade.` }
          ]
        },
        {
          heading: 'Chinese tools on European ships',
          blocks: [
            { p: `The ships that came looking for China carried Chinese ideas. The <span class="kt">magnetic compass</span> was first used at sea in China, by about <span class="num">1100</span>. Gunpowder came from China too. Europeans combined these with Greek and Islamic instruments and with Mediterranean sails. The result was ships that could cross oceans, find their way back, and arrive armed.` }
          ]
        },
        {
          heading: 'Portugal at Macau',
          blocks: [
            { p: `Portugal reached India by sea in <span class="num">1498</span>. It built a <span class="kt">trading-post empire</span> (a chain of fortified ports, not conquered land). In <span class="num">1511</span> Portugal took the port of Malacca. It sits on the strait that leads into the South China Sea. From there, Portuguese ships sailed on to China. <a href="#r4-south-southeast-asia-iberians">The South and Southeast Asia chapter</a> tells how Portugal built its chain of ports.` },
            { p: `From <span class="num">1557</span>, Chinese provincial officials let Portuguese merchants settle permanently at <b>Macau</b>. Macau is a small peninsula on China's south coast. Chinese officials kept authority over the port, and the Portuguese paid them a yearly ground rent. Macau existed because China allowed it.` },
            { p: `Why allow it? Ming law barred Chinese merchants from trading directly with Japan. In <span class="num">1567</span> the Ming eased its limits and licensed Chinese merchants to trade overseas. But the ban on Japan stayed. The Portuguese filled that gap. They carried Chinese silk to Japan and Japanese silver back to China. Macau kept the Portuguese in one place that Chinese officials could watch.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "colonized" China. On land, Portugal faced a state with armies and income many times larger than its own. Macau was a permission, not a conquest.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Asian tools helped Europeans cross oceans, and Portugal built trading posts that reached China.`,
                `<a href="#chapter-t4-1">Topic 4.1</a>: "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation."`,
                `An optional College Board example: the compass.`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Ming dynasty', `The Chinese dynasty that ruled from 1368 until rebels took Beijing in 1644.`],
        ['Tribute system', `Foreign rulers sent envoys to accept the emperor as above them, at least in ceremony. The envoys received gifts and the right to trade.`],
        ['Trading-post empire', `A chain of fortified ports with little land behind them. Portugal built one.`]
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
      thesis: `Silver from Japan and Spain's American colonies flowed into China, where it was worth more and a tax law raised demand. China paid with silk and porcelain made by ordinary families. American crops came on the same ships.`,
      parts: [
        {
          heading: 'Why China wanted silver',
          blocks: [
            { p: `Silver was already worth more in China than in Europe. That was because the Ming had given up paper money, and China's growing economy ran on silver.` },
            { p: `Then a tax reform added to the demand. Through the 1500s, the Ming government folded many taxes and labor duties into one payment in silver. Historians call this reform the <span class="kt">Single Whip</span>. Around <span class="num">1580</span> the minister <b>Zhang Juzheng</b> pushed it across the empire. Some grain was still owed in rice, but most taxes were now paid in silver.` },
            { p: `Tens of millions of households now needed silver. Yet China mined little silver of its own.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `How big was the price difference? The historian Chuan Han-sheng worked out numbers for the 1590s, and later historians have used them. At the southern Chinese port of Canton (Guangzhou), one ounce of gold traded for about six ounces of silver. In Spain, the same ounce of gold cost about thirteen ounces of silver. So silver bought about twice as much gold in China. A merchant who carried silver to China made money on the silver itself.`
            } }
          ]
        },
        {
          heading: 'Three roads to China',
          blocks: [
            { p: `Silver reached China by three roads. The first road started in Japan, and much of China's silver came from there. Portuguese ships carried Japanese silver through Macau, and Chinese and Japanese traders carried it too. In the decades around <span class="num">1600</span>, Japan may have sent China as much silver as the Americas did.` },
            { p: `Over the whole period, though, more silver came from the Americas. It was mined at <b>Potosí</b> in the Andes from <span class="num">1545</span>, and at Zacatecas in Mexico from <span class="num">1546</span>. On the second road, European ships carried it across the Atlantic and then around Africa to Asia. <a href="#r4-americas-silver">The Americas chapter</a> tells who was forced to mine it.` },
            { p: `The third road crossed the Pacific. In <span class="num">1565</span> a Spanish expedition found a sailing route back across the Pacific, from Asia to Mexico. In <span class="num">1571</span> the Spanish founded <b>Manila</b> in the Philippines. From then on, the <span class="kt">Manila galleon</span> carried silver from Acapulco in Mexico to Manila.` },
            { p: `At Manila, Chinese merchants from Fujian and nearby provinces sailed in with silk and porcelain. They wanted silver in return. Antonio de Morga was a Spanish official who had served in Manila. In a <span class="num">1609</span> book, he wrote that the Chinese took "silver and reals, for they do not like gold, nor any other goods in exchange." Reals were Spanish silver coins.` }
          ]
        },
        {
          heading: 'The families who made the silk',
          blocks: [
            { p: `In <b>Jiangnan</b> (the rich region around the lower Yangzi River), peasant households grew rice and raised silkworms. Women and girls did much of the work of reeling the silk thread and weaving it. Families sold their silk to merchants for silver. Then they used the silver to pay their taxes.` },
            { p: `This was <span class="kt">peasant and artisan labor</span>: farm and craft work done in homes and workshops. The work was old. What changed was the amount. There was more of it, made for buyers farther away.` }
          ]
        },
        {
          heading: 'A plant on the same roads',
          blocks: [
            { p: `American crops reached China in the 1500s too. The <span class="kt">sweet potato</span> came by more than one route. One route probably ran overland into the southwestern province of Yunnan in the 1560s and 1570s. On another, the plant crossed the Pacific to the Spanish Philippines. Chinese merchants carried it on to Fujian. Officials there promoted it in <span class="num">1594</span>, during a famine. Maize came too.` },
            { p: `Both crops grew on dry hills and uplands, where rice paddies could not be built. So over the next two centuries, peasant farming itself spread onto new ground.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Silver tied world trade to China, Chinese families made more silk, and American crops spread.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased."`,
                `An optional College Board example: silk in China.`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "Traditional peasant agriculture increased and changed in nature ..."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Single Whip', `The Ming reform that combined many taxes and labor duties into one payment in silver. It was pushed across China around 1580.`],
        ['Manila galleon', `A Spanish ship that carried American silver from Acapulco to Manila, usually once or twice a year from 1571.`],
        ['Peasant and artisan labor', `Farm and craft work done in homes and workshops. It grew as demand for goods rose.`]
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
      thesis: `Japan first welcomed European traders and missionaries. Then its new rulers came to see Christianity as a threat. They cut European trade down to one Dutch post in Nagasaki harbor. They controlled foreign trade, but they did not end it.`,
      parts: [
        {
          heading: 'Traders, missionaries, and new rulers',
          blocks: [
            { p: `Portuguese ships first reached Japan in the 1540s. Missionaries from the <span class="kt">Jesuits</span> (a Catholic religious order) followed. By <span class="num">1600</span> they had made many Christian converts in Japan.` },
            { p: `At the same time, Japan was coming out of a century of war between rival lords. The <span class="kt">Tokugawa shogunate</span> finished unifying the country and ruled from <span class="num">1603</span>. Its head was the <b>shogun</b>. He was the top military commander, and he ruled in the emperor's name. The shoguns came to see Christianity as a loyalty they could not control. In <span class="num">1614</span> the shogunate banned Christianity.` }
          ]
        },
        {
          heading: 'The orders to Nagasaki',
          blocks: [
            { p: `Nagasaki was the main port where Portuguese and Chinese ships traded. Between <span class="num">1633</span> and <span class="num">1639</span>, the shogun's senior councilors sent five sets of orders to their two governors there. The <span class="num">1635</span> orders begin: "Japanese ships are strictly forbidden to leave for foreign countries."` },
            { p: `The third article says: "If any Japanese returns from overseas after residing there, he must be put to death." Other orders say every incoming ship must be searched for Christians.` },
            { p: `In <span class="num">1637</span> and <span class="num">1638</span>, peasants rose up at <b>Shimabara</b>, near Nagasaki, and on the nearby Amakusa islands. Many of the rebels were Christian. The heavy taxes they rose against were their local lords' taxes, not the shogun's. At Shimabara the lord was <b>Matsukura Katsuie</b>. He kept charging heavy taxes through years of famine.` },
            { p: `The ban on Christianity was the shogunate's, and the local lords enforced it. So the rising was also local resistance to a central government that was taking more power for itself. The shogunate sent a huge army and crushed it. Later it executed Matsukura for ruling badly.` },
            { p: `In <span class="num">1639</span> the councilors banned Portuguese ships outright. The order gives the reason: the Portuguese "have secretly transported those who are going to propagate that religion." In other words, the shogunate accused them of sneaking in missionaries to spread Christianity.` },
            { p: `The Dutch stayed, because they came to trade, not to preach. After <span class="num">1639</span> they were the only Europeans allowed to trade in Japan. From <span class="num">1641</span> they were moved to <b>Dejima</b>, under Japanese watch. Dejima was a small artificial island in Nagasaki harbor. Chinese merchants kept trading at Nagasaki.` },
            { p: `Japan had chosen a <span class="kt">restrictive trade policy</span>: limits on who could trade, where, and in what.` },
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
            { p: `China received the Jesuits differently. The Italian Jesuit <b>Matteo Ricci</b> lived in Beijing from <span class="num">1601</span>. The Jesuits won a place at the emperor's court. They did it by teaching astronomy and mathematics and by living as Confucian scholars.` },
            { p: `So the same faith met two different receptions. New contacts carried Christianity to new places, and they also led to religious conflict. East Asia shows both: a welcome at court in Beijing, and a ban in Japan.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Some Asian states limited European trade, stronger states met local resistance, and Christianity spread and led to conflict.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies."`,
                `An optional College Board example: Ming China and Tokugawa Japan.`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts ..."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Tokugawa shogunate', `The military government that ruled Japan from 1603.`],
        ['Shimabara Rebellion', `A rising of peasants near Nagasaki in 1637 and 1638. Their local lords' heavy taxes and famine drove it, and many rebels were Christian.`],
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
      thesis: `In 1644 the Manchus took Beijing and began to conquer China. They were a small people from north of the Great Wall. They kept the Chinese way of governing, put a new elite on top, and limited the Han majority. Underneath, farms and workshops kept going, and the population grew.`,
      parts: [
        {
          heading: 'The fall of the Ming',
          blocks: [
            { p: `In its last years the Ming faced rebellions. In <span class="num">1644</span> rebels led by <b>Li Zicheng</b> captured Beijing, and the last Ming emperor killed himself. The <b>Manchus</b> then took the city and began to rule China. Their ruler Hong Taiji had already named their dynasty the <span class="kt">Qing</span> in <span class="num">1636</span>. Conquering the rest of China took decades. The last Ming loyalists, on the island of Taiwan, surrendered in <span class="num">1683</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not give a silver shortage as the only cause of the Ming's fall. Silver imports seem to have fallen in the early 1640s. Historians disagree whether they also fell in the 1630s, and how much any fall hurt. The Ming also faced rebellions.`
            } }
          ]
        },
        {
          heading: 'What the Qing kept, and who lost ground',
          blocks: [
            { p: `The Manchus were a small minority. They ruled the <b>Han Chinese</b> (China's huge ethnic majority), and they did not try to make China Manchu. They kept the Ming civil service examinations (tests for government jobs), the Confucian officials and the law codes. Han scholars still filled most government jobs.` },
            { p: `The <b>Kangxi</b> emperor (ruled <span class="num">1661</span> to <span class="num">1722</span>) presented himself as a model Confucian ruler. He also tolerated Christianity in <span class="num">1692</span>. His son Yongzheng banned it in <span class="num">1724</span>.` },
            { p: `Han scholar-officials now shared power with the Manchus. Under <span class="kt">dual appointment</span>, many top posts in the capital went to two officials, one Manchu and one Han. That way the Manchu could watch the Han.` },
            { p: `Qing emperors also kept the biggest decisions in their own hands. Yet Kangxi tried to win over scholars still loyal to the Ming, with a special examination in <span class="num">1679</span>. The old elite's power went up and down, and the emperor made the final decisions.` }
          ]
        },
        {
          heading: 'A new elite, and limits on the majority',
          blocks: [
            { p: `The new elite at the top was the army that had won the conquest: the <span class="kt">banners</span>. The banners were hereditary military units (membership passed down in families), and they existed well before <span class="num">1644</span>. Their members were Manchus, Mongols, and Han Chinese families who had joined the Manchus before the conquest. By <span class="num">1648</span>, Han bannermen outnumbered Manchus inside them.` },
            { p: `Once China was theirs, bannermen were paid by the state. They lived in walled quarters inside major cities. They had legal privileges that ordinary Han Chinese did not.` },
            { p: `The Qing also limited the Han majority. In July <span class="num">1645</span>, every Han man was ordered to wear the Manchu hairstyle. This was the <span class="kt">queue</span>: the front of the head shaved, the rest in a braid. The penalty for refusing was death.` },
            { p: `Many Han resisted. In Confucian teaching, a person's body and hair were a gift from their parents. In some towns the Han fought with weapons, and Qing armies crushed these local risings.` },
          ]
        },
        {
          heading: 'More people on more land',
          blocks: [
            { p: `Under the Qing, American crops spread across the hills. China's population roughly doubled across the 1700s. Much of that growth came after <span class="num">1750</span>, when this unit ends. Peace inside China was one cause. Farming land that rice could not use was another.` },
            { p: `Much stayed the same. A Jiangnan silk family still worked at home and paid most of its taxes in silver. The Qing changed who sat at the top, not the farms and workshops underneath.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: The Manchu conquest made a new elite, old elites rose and fell, the Han were limited, and American crops fed more people.`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty ..."`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders."`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy."`,
                `An optional College Board example: restrictive policies against Han Chinese in Qing China.`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Qing dynasty', `The Manchu dynasty, named in 1636, that ruled China from 1644 to 1912.`],
        ['Banners', `Hereditary military units of Manchus, Mongols and early Han allies. They conquered China and became a paid, privileged elite.`],
        ['Queue', `The Manchu hairstyle that Han men had to wear from 1645: the front of the head shaved, the rest in a long braid.`],
        ['Dual appointment', `The Qing practice of giving many top posts to one Manchu and one Han official.`]
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
        title: 'East Asian states set the terms for Europeans, and a conquest changed who ruled China.',
        body: `From 1557 Ming officials let the Portuguese settle at Macau, under Chinese authority. After 1639 the Dutch were the only Europeans allowed to trade in Japan, and from 1641 they were kept on Dejima. In 1644 the Manchus took Beijing and kept China's exams and law codes.`
      },
      {
        category: 'Religious',
        title: 'Christianity spread in East Asia, but rulers decided how far it could go.',
        body: `Jesuits made many converts in Japan by 1600, but the shogunate banned Christianity in 1614. In China, Kangxi tolerated Christianity in 1692, and his son banned it in 1724.`
      },
      {
        category: 'Social',
        title: 'The Manchu conquest put a new elite on top, while peasant families made more for distant buyers.',
        body: `The banners became a paid and privileged elite, and by 1648 Han bannermen outnumbered Manchus in them. From 1645 every Han man had to wear the queue or face death. In Jiangnan, women and girls reeled and wove silk that families sold for silver.`
      },
      {
        category: 'Intellectual',
        title: 'Confucian learning stayed at the center, and European astronomy won a hearing at court.',
        body: `The Qing kept the Ming civil service examinations, and Kangxi held a special examination in 1679 to win over scholars loyal to the Ming. Matteo Ricci lived in Beijing from 1601, and the Jesuits gained a place at court by teaching astronomy and mathematics.`
      },
      {
        category: 'Technological',
        title: 'Tools first used in China helped carry Europeans to East Asia\'s coasts.',
        body: `The magnetic compass was first used at sea in China by about 1100, and gunpowder also came from China. Europeans built them into armed ocean ships. From 1565 Spanish ships could sail back across the Pacific from Asia to Mexico.`
      },
      {
        category: 'Economic',
        title: 'China\'s demand for silver drew in silver from Japan and the Americas.',
        body: `Silver was already worth more in China than in Europe, and around 1580 the Single Whip made most taxes payable in silver. From 1571 the Manila galleon carried American silver to Manila, where Chinese merchants traded silk and porcelain for it.`
      }
    ]
  }
};
