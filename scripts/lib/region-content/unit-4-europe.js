'use strict';

/**
 * Unit 4 by region: Europe.
 *
 * Europe's story from c. 1450 to c. 1750 told as one narrative: a region at the far end of
 * an Asian-centered trade world borrows tools and wind knowledge (KC-4.1.II, KC-4.1.II.A),
 * sends state-sponsored voyages out (KC-4.1.III and .A to .C), builds trading posts and
 * maritime empires out of rivalry (KC-4.3.II.A.i, KC-4.3.II.C), runs them with mercantilist
 * laws and joint-stock companies and fights over trade (KC-4.1.IV.C, KC-4.3.III.ii), pays for
 * Asian goods in American silver (KC-4.1.IV, KC-4.1.IV.D.i), and changes at home: American
 * crops (KC-4.1.V.B, KC-4.1.V.D), farming still at the center (KC-4.2), intensified cottage
 * labor (KC-4.2.II.A), the Fronde and Razin's Cossack revolt (KC-4.3.III.iii), monarchs
 * against nobles and boyars (KC-4.2.III.B), the expulsion of Jews from Spain and Portugal
 * (KC-4.3.I.B), and religion spreading and clashing with expansion (KC-4.1.VI). Deliberately
 * left out: the Reformation itself (Unit 3; one connective sentence only), the Scientific
 * Revolution and Enlightenment (later units), and Europe's wars of religion, none of which the
 * Unit 4 CED requires. Facts are drawn from the Topic 4.1 to 4.7 deep readings and their claim
 * ledgers.
 *
 * Plain-language and accuracy pass (2026-11-21), on the East Asia method: sentences cut to one
 * idea each, the College Board's own words moved out of the story into one "What the College
 * Board says" box per section (quoted word for word from scripts/lib/ced-source/unit-4.js, the
 * illustrative examples labelled as examples), the chapter cut by about a tenth, cross-region
 * links pointed at the section that tells the event, and six closing cards in the shared order.
 * Fixes from the five-persona stress test (2026-11-17): "Europeans dominated the ocean routes"
 * narrowed to carrying the Atlantic trade and holding some Asian ports and sea lanes by force,
 * while Asian merchants kept much of Asia's trade; Portugal's motive told as Topic 4.2 tells it
 * (the middlemen, West African gold, and the crusading inheritance of Ceuta); silver's pull to
 * China told in the shared order (already worth more, because the Ming gave up paper money; the
 * Single Whip made most taxes payable in silver; China mined little); "the first of the
 * Anglo-Dutch Wars" kept. Cut for length: Ptolemy's Geography (and its date, c. 1400), the
 * Senegal-coast purchases of the 1450s, Nunn and Qian's potato estimate (1700 to 1900), Matteo
 * Ricci in Beijing (1601), the fluyt, and Bayezid II by name (the Middle East tells his side).
 * Topic 4.8 added to `topics` because the box quotes KC-4.2, which the CED prints on that page.
 *
 * Second polish (2026-11-21), to the addendum of the Unit 5 persona panel: every College Board
 * box now opens with an "In short" sentence, quotes whole Key Concept sentences, and gives each
 * group of illustrative examples its own "An optional College Board example" paragraph; a
 * five-sentence `inShort` opens the chapter; definitions set between commas moved into
 * parentheses or their own sentences, and idioms replaced; paragraphs held near 70 words;
 * cross-region references written as phrases that read well aloud; Thomas Mun's rule moved into
 * a "How we know" box (dated from the Topic 4.5 ledger: written in the 1620s or 1630s, printed
 * 1664); mercantilism restated as the Topic 4.5 ledger narrows it (more gold and silver coming
 * in than going out, not gold "piled up"); the six closing cards rewritten as a claim plus dated
 * evidence. No story fact or date was cut in this polish; the trims came from the thesis lines, the
 * deck, glossary entries, box wording and the closing cards. See
 * docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-europe',
  slug: 'region-4-europe',
  unit: '4',
  region: 'Europe',
  titleHtml: '<em>Europe</em>',
  deck: `In <span class="num">1450</span> Europe sat at the far edge of a trading world centered on Asia. By <span class="num">1750</span> its ships carried the Atlantic trade, and its states ruled large parts of the Americas. In Asia, though, Europeans stayed buyers, paying mostly in silver.`,
  inShort: [
    `In <span class="num">1450</span> Europe bought Asian spices through a long chain of middlemen.`,
    `With borrowed tools and new knowledge of the winds, Portugal and Spain sent voyages across the oceans.`,
    `Rival European states built forts, colonies and armed trading companies, and fought over trade.`,
    `Europeans carried the Atlantic trade, but in Asia they paid for goods mostly with American silver.`,
    `At home, American crops fed more people, and stronger kings faced resistance from nobles and peasants.`
  ],
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'],
  ced: [
    'KC-4.2',
    'KC-4.1.II',
    'KC-4.1.II.A',
    'KC-4.1.III',
    'KC-4.1.III.A',
    'KC-4.1.III.B',
    'KC-4.1.III.C',
    'KC-4.1.IV',
    'KC-4.1.IV.C',
    'KC-4.1.IV.D.i',
    'KC-4.1.V.B',
    'KC-4.1.V.D',
    'KC-4.1.VI',
    'KC-4.2.II.A',
    'KC-4.2.III.B',
    'KC-4.3.I.B',
    'KC-4.3.II.A.i',
    'KC-4.3.II.C',
    'KC-4.3.III.ii',
    'KC-4.3.III.iii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'edge',
      num: '01',
      accent: 'gold',
      name: 'At the Edge of Someone Else\'s World',
      navLabel: 'Borrowed tools',
      dates: 'c. 1400 to 1500 &nbsp;·&nbsp; Middlemen, crusade, and borrowed knowledge',
      thesis: `Europe's rulers wanted to reach Asia's goods by sea. Many of their tools came from the Classical, Islamic and Asian worlds.`,
      parts: [
        { heading: 'Why Europeans looked to the sea', blocks: [
          { p: `In the 1400s the richest trade in the world crossed the Indian Ocean and the Middle East. Pepper cost little on India's Malabar coast. On its way to Europe it passed through Red Sea or Persian Gulf ports. Then it crossed to the Mediterranean through Egypt or Syria. The Mamluk sultans ruled both. Last, <b>Venetian</b> merchants sold it in Europe.` },
          { p: `Each trader in that chain was a <span class="kt">middleman</span>. A middleman buys goods and sells them again at a higher price. A kingdom that reached India by sea could skip the middlemen and keep their profits. Portugal also wanted West African gold, which crossed the Sahara by camel.` },
          { p: `Religion gave Portugal a second reason. Its ocean venture began in <span class="num">1415</span>, when it captured <b>Ceuta</b> (a Muslim port in North Africa). Portugal's rulers saw that attack partly as a crusade (a war fought in the name of Christianity). It grew out of the <span class="kt">Reconquista</span>. In those long wars, Christian kingdoms took Spain and Portugal from Muslim rulers.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that the Ottomans closed the trade routes after taking Constantinople in <span class="num">1453</span>. The main spice route ran through Mamluk Egypt, which the Ottomans took only in <span class="num">1517</span>. And Portugal's voyages had begun decades earlier.` } }
        ] },
        { heading: 'Tools from elsewhere', blocks: [
          { p: `Many of the tools European sailors used came from somewhere else. The magnetic compass was first used at sea in China, by about <span class="num">1100</span>. How it reached Europe is still debated. The <span class="kt">lateen sail</span> is a triangular sail that helps a ship work against the wind. It was common across the Mediterranean and the seas of the Islamic world.` },
          { p: `The astrolabe measures how high the sun stands. It was a Greek idea that astronomers in the Islamic world made precise. Pilots also used tables of where the sun stood each day. The tables of <b>Abraham Zacuto</b> gave them. They were printed in Portugal in <span class="num">1496</span>. Zacuto built on older tables from the Spanish city of Toledo. Around <span class="num">1080</span>, Muslim astronomers there made tables that predicted where the sun, moon and planets would be. From <span class="num">1263</span> to <span class="num">1272</span>, Jewish astronomers updated them for King Alfonso X of Castile. That Castilian original is lost. A Latin version was made in Paris in the 1320s. Zacuto built on the Paris tables and on astronomy written in Hebrew.` },
          { p: `Shipbuilders added new designs. The small, shallow <span class="kt">caravel</span> explored unknown coasts. The big <span class="kt">carrack</span> carried cargo and cannon.` }
        ] },
        { heading: 'The wind was the breakthrough', blocks: [
          { p: `The last piece was knowledge of the ocean itself. Off West Africa the wind blows from the northeast, and a current flows south along the coast. Together they carried ships south easily but blocked them on the way home.` },
          { p: `Over decades, Portuguese sailors found the answer. It is called the <span class="kt">volta do mar</span>, which means "turn of the sea." A ship heading home sailed far out into the open Atlantic. There it caught westerly winds that carried it back to Portugal. Columbus later used the same winds to cross the Atlantic and return.` },
          { note: { kind: 'cb', label: CB, paras: [
            `In short: Europe's voyages depended on tools, ships and wind knowledge, much of it learned from other worlds.`,
            `<a href="#chapter-t4-1">Topic 4.1</a>: "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation."`,
            `<a href="#chapter-t4-1">Topic 4.1</a>: "The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible."`,
            `An optional College Board example: new ship designs such as the caravel and the carrack.`,
            `An optional College Board example: the lateen sail, the compass and astronomical charts.`
          ] } }
        ] }
      ],
      terms: [
        ['Lateen sail', 'A triangular sail that lets a ship sail much closer to the wind than a square sail does.'],
        ['Caravel', 'A small, shallow Portuguese ship built to explore unknown coasts.'],
        ['Volta do mar', 'The route home through the open Atlantic, on westerly winds.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'crowns',
      num: '02',
      accent: 'rust',
      name: 'Crowns Go to Sea',
      navLabel: 'Crowns at sea',
      dates: '1415 to 1610 &nbsp;·&nbsp; Portugal, Spain, and the northern latecomers',
      thesis: `Ocean exploration was a project of rulers and states. Portugal took small steps, Spain risked one bold crossing, and England, France and the Dutch tried the Arctic.`,
      parts: [
        { heading: 'Portugal, step by step', blocks: [
          { p: `A voyage to find a new route might find nothing. So rulers paid for exploring, or licensed captains in return for a share of the profit (<a href="#chapter-t4-2">Topic 4.2</a>). Portugal's <b>Prince Henry</b> paid for voyages down the African coast for decades.` },
          { p: `In the 1440s Portuguese crews raided the Saharan coast for captives and sold them in Portugal. It was the beginning of the Atlantic slave trade. From the late 1440s they also bought gold and captives at Arguin (an island off that coast).` },
          { p: `In <span class="num">1488</span> <b>Bartolomeu Dias</b> sailed around the southern tip of Africa. In <span class="num">1498</span> <b>Vasco da Gama</b> reached Calicut (a rich port in India). Calicut's merchants did not want the cloth and beads he carried. Yet the pepper he brought home was worth far more than the voyage cost. Europe had little that Asia wanted, but the profit on Asian goods kept the trade going.` },
          { p: `Portugal could not compete on goods, so it competed with guns. It built a <span class="kt">trading-post empire</span>: forts in ports, with almost no land behind them. It built Elmina on the Gold Coast of Africa in <span class="num">1482</span>. It took Goa in <span class="num">1510</span>, Malacca in <span class="num">1511</span> and Hormuz in <span class="num">1515</span>. Portugal profited by buying goods where they were made.` },
          { p: `Portugal also sold the <span class="kt">cartaz</span> (a pass that merchant ships had to buy). The cartaz changed who taxed the ocean. It did not change who traded on it. Gujarati merchants from western India often bought a pass and sailed on. Ming China and Tokugawa Japan were strong enough to set their own terms for European traders.` },
          { p: `<a href="#r4-south-southeast-asia-iberians">The South and Southeast Asia chapter</a> tells how Asian merchants dealt with the pass. <a href="#r4-east-asia-ming">The East Asia chapter</a> tells how China set its terms.` }
        ] },
        { heading: 'Spain\'s year, 1492', blocks: [
          { p: `Spain's <span class="kt">monarchs</span> (its king and queen) were <b>Ferdinand and Isabella</b>. In January <span class="num">1492</span> they took Granada (the last Muslim kingdom in Spain). In March they ordered every Jew who would not become Christian to leave. Tens of thousands left, and many others converted and stayed. In <span class="num">1497</span> Portugal, under pressure from Spain, had most of its Jews baptized by force (<a href="#chapter-t4-7">Topic 4.7</a>).` },
          { p: `Many exiles found refuge in the Ottoman Empire. <a href="#r4-middle-east-peoples">The Middle East chapter</a> tells where they settled.` },
          { p: `That spring the same monarchs agreed to pay for a voyage by <b>Christopher Columbus</b>. He believed Asia lay a few thousand miles west. He reached the Caribbean in October. In <span class="num">1494</span> the <span class="kt">Treaty of Tordesillas</span> drew a line through the Atlantic. New lands west of it went to Spain, and lands east of it went to Portugal.` },
          { p: `From <span class="num">1519</span> to <span class="num">1522</span> a Spanish expedition crossed the Pacific and sailed around the world. Ferdinand Magellan began it, and Juan Sebastián Elcano finished it.` }
        ] },
        { heading: 'The latecomers go north', blocks: [
          { p: `Spain's voyages made other Europeans far more interested in ocean travel and trade. England, France and the Dutch sent voyages of their own. They ignored the treaty. At first they did not fight Portugal for the route around Africa. Instead they looked for northern routes to Asia. Most looked for a <span class="kt">Northwest Passage</span> over North America. <b>John Cabot</b> sailed for England in <span class="num">1497</span> and reached North America. <b>Jacques Cartier</b> explored the St. Lawrence River for France in the 1530s. In <span class="num">1609</span> a Dutch company sent <b>Henry Hudson</b> to find a route north of Russia. Ice stopped him, and he turned west against his orders. He went up the river now named for him.` },
          { p: `Land and Arctic ice blocked every northern passage. But the voyages found cod off Newfoundland, and beaver furs traded by Indigenous nations. From the 1590s English and Dutch fleets also took Portugal's own route around Africa. Soon they fought Portugal for it.` },
          { note: { kind: 'cb', label: CB, paras: [
            `In short: Rulers paid for ocean voyages, which built trading posts and sent explorers looking for new routes to Asia.`,
            `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period."`,
            `<a href="#chapter-t4-2">Topic 4.2</a>: "Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire."`,
            `<a href="#chapter-t4-2">Topic 4.2</a>: "Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade."`,
            `<a href="#chapter-t4-2">Topic 4.2</a>: "Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia."`,
            `<a href="#chapter-t4-4">Topic 4.4</a>: "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks."`,
            `<a href="#chapter-t4-7">Topic 4.7</a>: "In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy."`,
            `An optional College Board example: the expulsion of Jews from Spain and Portugal, and their welcome in the Ottoman Empire.`
          ] } }
        ] }
      ],
      terms: [
        ['Trading-post empire', 'A chain of forts in ports, built to control trade, not to rule land.'],
        ['Cartaz', 'A pass Portugal made Indian Ocean merchant ships buy.'],
        ['Treaty of Tordesillas', 'The 1494 line that split new lands between Spain and Portugal.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'rivals',
      num: '03',
      accent: 'iron',
      name: 'Companies, Silver and Rivals',
      navLabel: 'Trade wars',
      dates: 'c. 1550 to 1750 &nbsp;·&nbsp; Mercantilism, joint-stock companies, and wars over trade',
      thesis: `By <span class="num">1600</span> many European states competed at sea. They built companies that could fight, and they paid for Asia's goods with American silver.`,
      parts: [
        { heading: 'Rivals in politics, faith and money', blocks: [
          { p: `In the early 1500s the Reformation split western Christianity into Catholic and Protestant churches. (Unit 3 tells that story.) So Protestant England and the Dutch fought Catholic Spain over faith as well as wealth. In <span class="num">1568</span> the Dutch provinces revolted against Spain. By the late 1580s they had formed the <b>Dutch Republic</b>, which fought on for its independence. The Dutch also took Portugal's forts at Elmina in <span class="num">1637</span> and Malacca in <span class="num">1641</span>. England and France founded colonies in North America and the Caribbean.` },
          { p: `Missionaries sailed on the same ships (<a href="#chapter-t4-5">Topic 4.5</a>). Catholic missionaries spread Christianity through the Americas and the Philippines. Kongo's kings took up the faith themselves. Many converts blended it with older beliefs into <span class="kt">syncretic</span> practices (practices that mix different faiths). Contact brought religious conflict too. Japan's shoguns banned Christianity in <span class="num">1614</span>. <a href="#r4-americas-resistance">The Americas chapter</a> tells how converts there blended the faiths.` }
        ] },
        { heading: 'Mercantilism and the company that could fight', blocks: [
          { p: `European rulers shared a set of ideas now called <span class="kt">mercantilism</span>. A kingdom grows strong, they believed, when more gold and silver flow in than flow out. One kingdom's gain in trade is another's loss. So a kingdom should sell more than it buys. It should tax foreign goods and keep its colonies' trade for itself.` },
          { note: { kind: 'howknow', label: 'How we know', html: `We have the mercantilists' own words. Thomas Mun was a London merchant. In the 1620s or 1630s he wrote that England "must ever observe this rule; to sell more to strangers yearly than wee consume of theirs in value." By "strangers" he meant foreigners. His son printed the book in <span class="num">1664</span>.` } },
          { p: `Laws put the ideas to work. England's Navigation Act of <span class="num">1651</span> let goods from Asia, Africa and the Americas into England only in English ships. It was aimed at Dutch shippers.` },
          { p: `Rulers also gave out <span class="kt">charters</span> (official grants of special rights) to <span class="kt">joint-stock companies</span>. These companies sold <span class="kt">shares</span> (small parts of the company) to many investors. The investors split the profits and losses of risky voyages. Elizabeth I chartered the English East India Company in <span class="num">1600</span>. In <span class="num">1602</span> the Dutch chartered the Dutch East India Company (the <span class="kt">VOC</span>). Each charter gave its company a <span class="kt">monopoly</span> (the sole right) on its country's trade with Asia. The VOC's charter also let it build forts, keep soldiers and make war.` },
          { p: `A contest over trade could become a war. The Dutch and English companies fought over the spice islands of Southeast Asia. In <span class="num">1623</span>, on the island of Ambon, VOC officials executed ten English company men and ten others. The charge was a plot to seize the Dutch fort. The confessions were taken under torture.` },
          { p: `In Europe, the Navigation Act was one cause of the first of the <span class="kt">Anglo-Dutch Wars</span>. England and the Dutch fought three of these wars at sea between <span class="num">1652</span> and <span class="num">1674</span>. The first two were fought largely over trade and shipping. In the third, England fought as France's ally in Louis XIV's attack on the Dutch.` }
        ] },
        { heading: 'Carriers in the Atlantic, customers in Asia', blocks: [
          { p: `In the Atlantic, European ships carried the trade. On most of Africa's coasts, though, African rulers and merchants decided who and what was sold. In Angola, Portugal's own wars took captives too. Plantation sugar and tobacco, grown with forced labor, went mostly to Europe. Guns and cloth went to Africa, and enslaved Africans to the Americas. Silver crossed to Seville. <a href="#r4-sub-saharan-africa-slave-trade">The Sub-Saharan Africa chapter</a> tells the African side of this trade.` },
          { p: `In Asia, Europeans were buyers of pepper, cotton cloth, silk and porcelain. They paid largely in silver from Potosí in the Andes and Zacatecas in Mexico. Asian buyers wanted few European goods.` },
          { p: `Much of that silver ended up in China. Silver was already worth more in China than in Europe. That was because the Ming had given up paper money, and China's growing economy ran on silver. Then a reform called the Single Whip made most Chinese taxes payable in silver, which added to the demand. And China mined little silver of its own. <a href="#r4-east-asia-silver">The East Asia chapter</a> tells this side.` },
          { p: `European ships also carried goods between Asian ports. The VOC earned much of its money from that trade. But the regional markets of Africa and Asia kept thriving. Their merchants still used their old partnerships, credit and family firms, and they still carried much of the trade. Europeans held some Asian ports and sea lanes by force. They did not take over Asia's trade.` },
          { note: { kind: 'misconception', label: 'Common mistake to avoid', html: `Do not write that Europe controlled the world economy by <span class="num">1750</span>. Indian cotton cloth sold so well in England that a law of <span class="num">1700</span> restricted it, to protect England's own weavers. Great Britain passed another in <span class="num">1721</span>.` } },
          { note: { kind: 'cb', label: CB, paras: [
            `In short: Rival states competed with trade laws, companies and wars, and paid for Asian goods with American silver.`,
            `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices."`
          ] } }
        ] }
      ],
      terms: [
        ['Mercantilism', 'The belief that a state grows strong when more gold and silver flow in than flow out.'],
        ['Joint-stock company', 'A company that sells shares to many investors, who split its profits and losses.'],
        ['Anglo-Dutch Wars', 'Wars at sea between England and the Dutch. Of the first three, from 1652 to 1674, the first two were fought largely over trade.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'home',
      num: '04',
      accent: 'oxide',
      name: 'Fields, Looms and Kings',
      navLabel: 'Europe at home',
      dates: 'c. 1550 to 1750 &nbsp;·&nbsp; New food, more work, and the power of monarchs',
      thesis: `At home, new crops fed more people and families worked harder. Monarchs took power from nobles and peasants, who resisted.`,
      parts: [
        { heading: 'New food, more work', blocks: [
          { p: `Ships coming back across the Atlantic carried plants Europe had never seen (<a href="#chapter-t4-3">Topic 4.3</a>). Maize became a staple in parts of southern Europe. In the north the most important was the <span class="kt">potato</span>. On cool, damp ground it gives more food per acre than wheat or rye. It spread across northern Europe, most widely in the 1700s, and helped Europe's population grow. American crops became staples in Africa and Asia too, such as cassava in Kongo and Angola and the sweet potato in southern China.` },
          { p: `The exchange ran the other way too. European ships carried cattle, pigs, sheep and horses to the Americas. The herds multiplied fast and changed the land. They trampled Indigenous fields, which had no fences because there had been no herds to keep out.` },
          { p: `Even so, most Europeans still lived by farming, as most people everywhere did. What changed was how much people worked, and for whom. Under the <span class="kt">putting-out system</span>, merchants brought raw wool or flax to families in the countryside. The families spun and wove it into cloth at home. They were paid by the piece.` },
          { p: `Women and girls did much of the spinning. The work was old. What was new was how much of it there was, and how far away its buyers were.` }
        ] },
        { heading: 'Kings against nobles and peasants', blocks: [
          { p: `As rulers gathered power, people resisted (<a href="#chapter-t4-6">Topic 4.6</a>). In France in <span class="num">1648</span>, <b>Louis XIV</b> was still a boy. The crown kept raising taxes for a war. The judges of the Parlement of Paris (France's highest court) refused them. When a judge was arrested, Paris put up barricades. Later, great nobles rose too. These revolts are called the <span class="kt">Fronde</span>. They collapsed by <span class="num">1653</span>. The rebels wanted different things and quarreled with each other. Some even took help from Spain, which was at war with France.` },
          { p: `The Fronde shaped how Louis XIV ruled for the rest of his life. As an adult he ruled the provinces through royal officials. In <span class="num">1682</span> he moved his court to Versailles. There great nobles competed for offices and yearly payments, where the king could watch them. They kept their titles, land and freedom from the main tax. They lost the power to defy the king.` },
          { p: `Russia's path was harsher. The Law Code of <span class="num">1649</span> finished binding peasants to their lords' land as <span class="kt">serfs</span> (peasants not free to leave). Many fled south to the <b>Cossacks</b> (free frontier fighters on the Don River). In <span class="num">1670</span> the Cossack <b>Stepan Razin</b> led a revolt up the Volga River. Peasants joined by the tens of thousands. The tsar's army crushed it, and Razin was executed in <span class="num">1671</span>.` },
          { p: `The tsars also weakened the <span class="kt">boyars</span> (Russia's great noble families). In <span class="num">1711</span> <b>Peter the Great</b> replaced their council with a Senate he appointed. His Table of Ranks of <span class="num">1722</span> made a man's place depend on the rank he earned in state service, not on his birth.` },
          { p: `In England the old elites won. In <span class="num">1688</span> leading Englishmen, most of them nobles, invited the Dutch prince William of Orange to bring an army. King James II fled. <span class="kt">Parliament</span> (the assembly of nobles and landowners) gave the crown to William and Mary. It limited their power in the Bill of Rights of <span class="num">1689</span>. So the power of old elites rose and fell. In France and Russia, nobles kept their land but lost much of their say over the ruler's policies. In England they gained more say.` },
          { note: { kind: 'cb', label: CB, paras: [
            `In short: American crops fed Europe, people worked harder, and stronger kings met resistance and changed the power of nobles.`,
            `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa."`,
            `<a href="#chapter-t4-3">Topic 4.3</a>: "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."`,
            `<a href="#chapter-t4-8">Topic 4.8</a>: "Although the world’s productive systems continued to be heavily centered on agriculture, major changes occurred in agricultural labor, the systems and locations of manufacturing, gender and social structures, and environmental processes."`,
            `<a href="#chapter-t4-5">Topic 4.5</a>: "Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased."`,
            `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level."`,
            `<a href="#chapter-t4-7">Topic 4.7</a>: "The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders."`,
            `An optional College Board example: wool and linen in western Europe.`,
            `An optional College Board example: the Fronde and the Cossack revolts.`,
            `An optional College Board example: the Russian boyars and the European nobility.`
          ] } }
        ] }
      ],
      terms: [
        ['Putting-out system', 'Merchants paying country families to spin and weave at home.'],
        ['Fronde', 'Revolts against the French crown, 1648 to 1653.'],
        ['Serf', 'A peasant bound by law to a lord\'s land and not free to leave.']
      ]
    }
  ],

  closing: {
    heading: 'Europe at a Glance',
    navLabel: 'At a glance',
    intro: `The six sides of Europe's story from <span class="num">1450</span> to <span class="num">1750</span>, gathered for review.`,
    argue: {
      move: 'Causation',
      prompt: `Why did Europe's rulers, and not only its merchants, pay for ocean voyages and charter armed trading companies? Give two causes. Support each one with evidence from this chapter.`
    },
    pairs: [
      { category: 'Political', title: 'Rival crowns built sea empires abroad and fought over power with nobles at home.', body: `Portugal took Malacca in <span class="num">1511</span>, and the Dutch took it from Portugal in <span class="num">1641</span>. Louis XIV moved his court to Versailles in <span class="num">1682</span>, and Peter the Great's Table of Ranks of <span class="num">1722</span> tied rank to state service. In England, the Bill of Rights of <span class="num">1689</span> limited the crown instead.` },
      { category: 'Religious', title: 'Faith pushed Europeans outward and decided who could stay at home.', body: `Portugal's expansion began in <span class="num">1415</span> with an attack on Ceuta, fought partly as a crusade. In <span class="num">1492</span> Spain ordered Jews who would not become Christian to leave, and in <span class="num">1497</span> Portugal forced most of its Jews into baptism. Japan's shoguns banned Christianity in <span class="num">1614</span>.` },
      { category: 'Social', title: 'New crops fed more people, families worked harder, and Russian peasants lost their freedom.', body: `The potato spread across northern Europe, most widely in the 1700s, and helped the population grow. Under the putting-out system, women and girls did much of the spinning. Russia's Law Code of <span class="num">1649</span> bound peasants to their lords' land as serfs.` },
      { category: 'Intellectual', title: 'Navigators built on learning from other worlds, and rulers shared one theory of trade.', body: `Zacuto's tables of the sun were printed in <span class="num">1496</span>. They built on tables of the sun, moon and planets made in Toledo by Muslim astronomers around <span class="num">1080</span>. Jewish astronomers updated those tables from <span class="num">1263</span> to <span class="num">1272</span>. A Latin version was made in Paris in the 1320s, and Zacuto drew on it. In the 1620s or 1630s Thomas Mun wrote the mercantilist rule: sell more to foreigners than you buy from them.` },
      { category: 'Technological', title: 'Borrowed tools, new ships and a discovery about the winds made ocean voyages possible.', body: `The compass was first used at sea in China by about <span class="num">1100</span>. The caravel explored coasts, and the carrack carried cargo and cannon. The volta do mar brought ships home from West Africa, and Dias sailed around Africa's tip in <span class="num">1488</span>.` },
      { category: 'Economic', title: 'Europeans carried the Atlantic trade but stayed buyers in Asia.', body: `The English East India Company (<span class="num">1600</span>) and the VOC (<span class="num">1602</span>) sold shares to pay for risky voyages. In Asia, Europeans paid mostly in American silver, and much of it ended up in China. To protect local weavers, England restricted Indian cotton cloth in <span class="num">1700</span>, and Great Britain did so again in <span class="num">1721</span>.` }
    ]
  }
};
