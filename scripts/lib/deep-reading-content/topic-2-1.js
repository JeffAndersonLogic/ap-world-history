'use strict';

/**
 * Topic 2.1, The Silk Roads: the deep reading.
 *
 * Why this exists, and how it differs from Foundations 4. The Foundations 4
 * chapter gives the map: which towns, which passes, relay rather than
 * through-travel, and why value-to-weight decides what moves. That chapter is
 * the geography of the network before 1200 and it is not repeated here.
 *
 * This chapter is the business. Topic 2.1's success criteria ask for specific
 * evidence about what made overland trade possible, naming relay stations,
 * caravanserais, pastoral nomads and state protection, and then for the effects
 * on the societies along the route. Those are institutions and economics, not
 * geography, and they are exactly what the survey has no room for:
 *
 *   1. A caravan was a firm. It had capital, staff, animals, a cost structure
 *      and a failure rate, and knowing the numbers is what turns "merchants
 *      traded along the Silk Roads" into an argument.
 *   2. The credit instruments are the missing half of every answer about trade
 *      in this unit. A partnership contract that lets an investor in Cairo fund
 *      a caravan in Samarkand is the reason the volume was possible at all.
 *   3. The ortoq, Mongol nobles investing capital in merchant associations, is
 *      the single most Unit-2-specific institution in the topic and appears in
 *      almost no student answer.
 *
 * Two corrections carried deliberately, because both are near-universal:
 * the Ottomans did not close the Silk Roads in 1453 and that is not why Europe
 * sailed, and the routes were at their safest and busiest under the Mongols
 * rather than in some earlier golden age.
 */

module.exports = {
  topicKey: 't2-1',
  slug: 'topic-2-1-silk-roads',
  sourceFile: 'deep-reading-topic-2-1-silk-roads.html',
  lessonFile: 'lesson-2-1-silk-roads.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 2.1: The Business of the Road',
  eyebrow: 'Topic 2.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Business of the <em>Road</em>',
  deck: `Somebody had to pay for all of it. This chapter treats the Silk Roads as what they actually were between <span class="num">1200</span> and <span class="num">1450</span>, a commercial system with capital, contracts, staff, insurance of a sort, and a cost per mile, because a student who can say what a caravan cost to run can explain why the traffic was what it was and why it stopped.`,
  meta: ['Five sections', 'The road as a business', 'Read alongside the First & 10'],
  footerNote: 'Topic 2.1 &nbsp;·&nbsp; The Business of the Road &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `If you have read the Foundations 4 chapter, you already have the map: the towns, the passes, and why a merchant worked one segment rather than the whole route. This chapter does not repeat that. It takes the same road between <span class="num">1200</span> and <span class="num">1450</span> and asks who paid, what it cost, who protected it, and why it faded.`,
    steps: [
      `<b>01 The road at its peak:</b> what Mongol rule actually changed about traveling it.`,
      `<b>02 The caravan as a firm:</b> capital, animals, staff, speed, tolls and the failure rate.`,
      `<b>03 Caravanserai and credit:</b> the buildings and the contracts, which are the same system.`,
      `<b>04 What moved, and what could not:</b> the value-density rule applied to real cargo.`,
      `<b>05 Why it faded:</b> plague, dynastic collapse, and the sea, in that order.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'peak',
      num: '01',
      accent: 'gold',
      name: 'The Road at Its Peak',
      navLabel: 'The road at its peak',
      dates: 'c. 1250 to 1350 &nbsp;·&nbsp; The century of the Pax Mongolica',
      thesis: `The overland routes were busier, safer and better documented in the century after the Mongol conquests than at any earlier point, which is inconvenient for anyone who wants the Mongols to be simply destroyers, and is the reason this topic sits where it does in the course.`,
      parts: [
        {
          heading: 'What actually changed',
          blocks: [
            { p: `For most of its history the overland trade crossed a dozen sovereignties, each with its own tolls, its own currency, its own courts and its own bandits, and the traffic rose and fell with how many of those states were currently stable. After the Mongol conquests of the thirteenth century, related Chinggisid regimes ruled from Korea to the Black Sea. Be careful how you state what that bought, because the empire split into competing khanates after <span class="num">1260</span> and they fought each other. What survived the split was not one government or one law but a shared political culture: comparable merchant privileges, recognized diplomatic practice, family ties across the khanates, and rulers who each had an interest in the traffic. The tolls were fewer, and a merchant robbed in one khanate had a better chance of redress from a neighboring authority than an unrelated patchwork of states would have offered.` },
            { p: `The Mongols did not merely tolerate this trade, they were invested in it, in the literal financial sense described in section 03. Steppe rulers had always needed what settled societies produced and had always taxed the exchange; what was new was the scale, and the fact that the men taxing the road at one end and the other were cousins. That is what the term <span class="kt">Pax Mongolica</span> means: not peace in any general sense, since the conquests themselves were catastrophic, but a period in which the commercial arteries of Eurasia ran through a family of related regimes with a shared interest in keeping them open.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `The famous line is that under Mongol rule a young woman carrying a golden platter could walk from one end of the empire to the other unmolested. It comes from Persian court historians writing for Mongol patrons, and it is a boast rather than a survey. What supports the underlying claim is duller and better: a sharp rise in the number of long-distance travelers who left accounts, European merchants' handbooks giving practical route advice as though the journey were routine, and archaeological finds of Chinese silk and porcelain in unexpected western contexts. Use the pattern of evidence, and quote the platter only as an example of how the regime described itself.`
            } }
          ]
        },
        {
          heading: 'The route in this period',
          blocks: [
            { p: `The eastern terminus was the Yuan capital at Khanbaliq, modern Beijing, with goods gathered from the Chinese interior. Westward the road ran through the Gansu corridor, skirted the Taklamakan desert north or south, and reached the oasis cities of Central Asia, Kashgar, Samarkand and Bukhara among them, where the routes braided and re-braided. From there one arm ran southwest through Persia to Tabriz, the Ilkhanate's great commercial capital, and on to the Mediterranean ports of the Levant and to Trebizond on the Black Sea. Another ran northwest across the steppe to the Golden Horde's territories and the Genoese and Venetian trading colonies on the Black Sea coast, of which Kaffa in the Crimea matters enormously in section 05.` },
            { p: `Notice what those endpoints have in common: the overland road terminated in ports. The overland and maritime systems in this unit are not rivals in the way students usually imagine; goods routinely traveled by land to a coast, by sea to another coast, and by land again. A comparison question that treats the Silk Roads and the Indian Ocean as separate worlds is missing the fact that the same Venetian firm often used both.` }
          ]
        }
      ],
      useThis: {
        tool: `Political integration as trade infrastructure. <em>The mechanism is that one legal and political authority across the route replaced a dozen, which cut the number of tolls, gave a robbed merchant somewhere to complain, and made the risk of a journey calculable rather than unknown, and a calculable risk is one an investor will finance.</em>`,
        limit: `It lasted about a century and it was built on conquests that had destroyed several of the cities the road ran through. The trade recovered faster than the populations did.`,
        comparison: `Against the <em>Indian Ocean</em>: the overland route depended on political integration to be safe, while the maritime system had no hegemon at all and functioned anyway, because the sea needs no protection from bandits between ports.`
      },
      terms: [
        ['Pax Mongolica', 'The century of relative security along the overland routes under related Chinggisid regimes, which reduced tolls and made a journey calculable without ever being one government.'],
        ['Khanbaliq', 'The Yuan capital, modern Beijing, and the eastern terminus of the overland trade in this period.'],
        ['Tabriz', 'The Ilkhanate&rsquo;s commercial capital in northwestern Persia, where the eastern routes met the roads to the Mediterranean and Black Sea.'],
        ['Kaffa', 'The Genoese trading colony in the Crimea, the western end of the northern route, and the point at which plague entered the Mediterranean in 1347.'],
        ['Oasis city', 'A settlement such as Kashgar or Samarkand whose water made it a compulsory stop, and whose rulers therefore lived on provisioning and taxing caravans.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'caravan',
      num: '02',
      accent: 'rust',
      name: 'The Caravan as a Firm',
      navLabel: 'The caravan',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Capital, animals, staff, tolls',
      thesis: `A caravan was not an adventure, it was a business with a payroll. Learn roughly what it cost to move a load of silk a thousand miles and every question about what the road carried answers itself.`,
      parts: [
        {
          heading: 'The animals, which are the whole cost structure',
          blocks: [
            { p: `The two-humped Bactrian camel of Central Asia carried on the order of two hundred kilograms, tolerated cold that would kill a horse, went several days between waterings and ate scrub that no other pack animal would touch. A caravan traveled roughly thirty to forty kilometers a day, so a journey from northern China to the eastern Mediterranean was a matter of months rather than weeks even when nothing went wrong.` },
            { p: `Now do the arithmetic that every merchant did. Each animal eats and drinks whether or not it is carrying anything valuable. Every day on the road is a day of wages for drivers, guards and a guide, plus fodder, plus lodging fees, plus the tolls at each frontier. Those costs attach to the journey rather than to the cargo, which means the cost of moving one camel-load is roughly the same whether the load is silk or salt. A merchant therefore fills the load with the most valuable thing per kilogram he can find, and the road carries silk, gems, spices, medicines, musk, fine glass and porcelain, and does not carry grain, timber or stone. That single relationship, which economists call value density, decides the entire character of overland trade, and section 04 works through what it admits and what it excludes.` }
          ]
        },
        {
          heading: 'The people on the payroll',
          blocks: [
            { p: `A large caravan was an organization. It had a leader with authority to settle disputes and negotiate with officials, hired drivers who knew the animals, armed guards, a guide who knew the wells and passes for a given stretch and was paid for exactly that knowledge, and often a broker traveling to arrange sales at the destination. It might include merchants who did not know each other at all, traveling together for safety and splitting shared costs, which is why the caravan is best understood as a temporary joint venture rather than a single firm.` },
            { p: `Add the state's people. Frontier officials assessed and taxed cargo, and in Mongol territory a traveler on official business carried a <span class="kt">paiza</span>, an inscribed metal tablet that entitled him to use the relay system and to demand supplies and mounts. The paiza is worth knowing because it is a physical object you can point at: authority to travel, issued in metal, honored across an empire.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that merchants traveled the whole route. The overwhelming majority worked one segment they knew, sold to the next man, and went home, which is why goods took years to cross Eurasia while no individual made a years-long journey. Marco Polo and Ibn Battuta are famous precisely because through-travelers were rare enough to write books about. If your answer needs a single traveler crossing the whole road, use one of them and say explicitly that he was exceptional.`
            } }
          ]
        },
        {
          heading: 'Risk, and who carried it',
          blocks: [
            { p: `Everything about the business is shaped by the fact that a caravan could simply be lost: to bandits, to weather, to disease among the animals, to a war that closed a pass, to a local ruler who decided the cargo was now his. There was no insurance industry in the modern sense, so risk was managed three other ways, and all three are worth naming in an essay.` },
            { p: `First, by diversification: a merchant put a fraction of his capital in each of several caravans rather than all of it in one, so a total loss was survivable. Second, by partnership contracts, described in the next section, which spread a venture's losses across several investors. Third, by kinship and community: trading diasporas, Sogdian earlier and then Uyghur, Armenian, Jewish, Persian and Genoese in this period, placed relatives and co-religionists at each node, and a partner who shares your community and expects to deal with your family for another generation is far cheaper to trust than a stranger you must monitor. That is not sentiment, it is a solution to the problem of enforcing a contract a thousand miles from any court that would hear you.` }
          ]
        }
      ],
      useThis: {
        tool: `The value-density constraint. <em>The mechanism is that a caravan's costs, fodder, wages, tolls and lodging, are the same per camel-load regardless of what the load is, so a merchant maximizes value per kilogram, and the road therefore carries silk, spices and gems while grain and timber never leave their own region.</em>`,
        limit: `A caravan could be lost entirely, and with no insurance industry the risk was carried by diversification, partnership and trading diasporas, which is why long-distance trade concentrated in tight kinship and religious networks rather than open markets.`,
        comparison: `Against the <em>Indian Ocean</em>: a ship's costs are also mostly fixed per voyage, but a single vessel carried a hundred or more camel-loads, so the cost per kilogram collapses and bulk cargo becomes possible. Same logic, opposite result, and it is the most useful comparison in Unit 2.`
      },
      terms: [
        ['Value density', 'Value per unit of weight; the ratio that decides whether a good is worth moving on an expensive route.'],
        ['Bactrian camel', 'The two-humped Central Asian camel, able to carry about two hundred kilograms across cold and arid terrain that would kill other pack animals.'],
        ['Paiza', 'An inscribed metal tablet issued by Mongol authority entitling the bearer to use the relay system and demand mounts and supplies.'],
        ['Trading diaspora', 'A merchant community with relatives or co-religionists settled at nodes along a route, which made contracts enforceable where no shared court existed.'],
        ['Caravan', 'A traveling company of merchants, animals, drivers, guards and a guide, best understood as a temporary joint venture sharing costs and risk.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'credit',
      num: '03',
      accent: 'iron',
      name: 'Caravanserai and Credit',
      navLabel: 'Caravanserai and credit',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; The buildings and the contracts',
      thesis: `The two things that made the volume possible were a building every day's march and a contract that let somebody who never left home pay for the journey. They are the same system: physical infrastructure and financial infrastructure, solving the same problem.`,
      parts: [
        {
          heading: 'What a caravanserai actually did',
          blocks: [
            { p: `A <span class="kt">caravanserai</span> was a fortified rectangular building with a single guarded gate, an open courtyard, stabling and storage below and lodging above, placed at roughly a day's travel from the next one along a major route. Many were endowed as charitable foundations, funded by a <span class="kt">waqf</span> whose rents paid to keep them running, and lodging was often free for a short stay, commonly said to be three days.` },
            { p: `Consider what a free, secure, predictable stopping place every thirty kilometers does to the economics of section 02. It removes the need to carry many days of fodder and water, which frees load capacity for cargo. It removes the largest single risk, being attacked while camped in the open. It concentrates buyers and sellers, so a merchant can sell short of his intended destination if the price is right, which is relay trade made physical. And because it was endowed rather than commercial, a ruler could build trade infrastructure as an act of piety, which is exactly how much of it was financed.` },
            { p: `The Mongol <span class="kt">yam</span>, the relay post system described more fully in the Topic 2.2 chapter, ran alongside this: stations with horses and supplies, at intervals of roughly a day's ride, reserved for official messengers and holders of a paiza. The yam was not for merchants, and conflating the two is a common slip. What it did for trade was indirect and large: it let the government hear about a closed pass, a bandit problem or a rebellion in days rather than months.` }
          ]
        },
        {
          heading: 'The contracts, which are the missing half of most answers',
          blocks: [
            { p: `The characteristic instrument of Islamic commerce, and the one to name, is the <span class="kt">qirad</span> or mudaraba partnership, which Italian merchants used in a nearly identical form called the commenda. One party supplies capital and does not travel; the other travels and does the trading. Profits are divided by a proportion agreed in advance, and if the venture fails the investor loses his capital while the traveling partner loses his labor. That structure is doing something specific and clever: it lets an investor accept risk without lending at interest, which Islamic law and canon law both prohibited, and it lets a merchant with skill and no capital go into business.` },
            { p: `Alongside it ran instruments for moving value without moving metal. A <span class="kt">sakk</span>, a written order to pay, and the closely related suftaja, a bill payable at a distant place, allowed a merchant to deposit coin in one city and draw it in another, which meant he did not have to carry a fortune in silver through bandit country. In Yuan China the state went further and issued <span class="kt">paper money</span>, a system Marco Polo describes with obvious astonishment, since no European government could yet make paper worth anything by decree.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the ortoq, and why it belongs in your answer',
              html: `Mongol nobles, including members of the imperial family, invested capital in merchant associations known as <span class="kt">ortoq</span>, which traded on their behalf and shared the profits. Mongol and Chinese administrative sources record the arrangement in detail, including the loans and privileges these merchants received. It matters for two reasons. It shows the ruling elite of the empire as direct financial stakeholders in the trade, which explains their investment in roads, relays and merchant protection far better than any general claim about tolerance. And it is a genuine institution with a name, which is exactly the kind of specific evidence that separates a strong answer about Silk Road commerce from a vague one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The qirad, or commenda, partnership. <em>The mechanism is that an investor supplies capital and a merchant supplies the travel and skill, with profits split by prior agreement and losses falling on capital and labor respectively, which mobilizes money from people who never leave home while avoiding the prohibition on lending at interest that both Islamic and canon law imposed.</em>`,
        limit: `Credit and lodging both depended on political stability. A caravanserai in a war zone is a fort someone else now owns, and a bill of exchange is worthless if the merchant who would honor it has fled.`,
        comparison: `Against <em>Europe</em> in Topic 1.6: the commenda, the bill of exchange and the endowed institution all appear in both worlds in the same centuries, and the Italian versions arrive after sustained contact with Islamic commerce through Mediterranean and Black Sea trade. That is a transmission argument you can actually support.`
      },
      terms: [
        ['Caravanserai', 'A fortified inn with stabling and storage, placed about a day&rsquo;s travel apart, often funded by a charitable endowment and free for a short stay.'],
        ['Waqf', 'An Islamic charitable endowment whose revenues fund an institution in perpetuity, and which paid for many caravanserais, madrasas and hospitals.'],
        ['Qirad', 'The partnership in which one party supplies capital and the other the travel and trading, with profits split by prior agreement; the Italian commenda is the same instrument.'],
        ['Sakk', 'A written order to pay, allowing value to move between cities without shipping coin; the ancestor of the word check.'],
        ['Ortoq', 'A merchant association financed by Mongol nobles who shared in its profits, making the ruling elite direct investors in the trade they protected.'],
        ['Yam', 'The Mongol relay post system of stations with horses and supplies, reserved for official messengers rather than merchants.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'cargo',
      num: '04',
      accent: 'oxide',
      name: 'What Moved, and What Could Not',
      navLabel: 'What moved',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Silk, paper, powder, porcelain, people',
      thesis: `The list of goods is not a list to memorize, it is a consequence of section 02. Everything on the road is either extremely valuable per kilogram, or alive, or moving free of charge inside somebody's head or lungs.`,
      parts: [
        {
          heading: 'The goods',
          blocks: [
            { p: `Silk gave the road its modern nickname and remained the emblematic cargo: light, durable, immensely valuable, and for centuries produced in quantity only in China. It also functioned as money. Bolts of silk were used to pay soldiers and officials and to settle large transactions, which makes it a commodity and a currency at once, and a very convenient one for a merchant who must carry his working capital on an animal.` },
            { p: `Beyond silk: spices and aromatics, musk from Tibet, medicines, gems and jade, fine glass moving east from Syria and Persia, furs from the northern forests, and Chinese porcelain, which is heavy and breakable and traveled overland only in modest quantity because the sea carried it far more cheaply. Horses moved the other way in enormous numbers and are the great exception to the value-density rule, because a horse carries itself: settled empires with no grasslands, Song and then Ming China and the sultanates of India above all, bought steppe and Arabian horses continuously and at ruinous prices, which made horses one of the largest trades by value in the period.` },
            { p: `And people. Enslaved men, women and children were moved along these routes in significant numbers, including the boys purchased on the Kipchak steppe who became the mamluk soldiers of Egypt described in the Topic 1.2 chapter. The Genoese colonies on the Black Sea were centers of that traffic. When a question asks about the goods of the Silk Roads, an answer that includes enslaved people is more accurate and more serious than one that stops at silk and spice.` }
          ]
        },
        {
          heading: 'The things that traveled without being cargo',
          blocks: [
            { p: `Three categories moved along the road without anyone paying freight on them, and in the long run they mattered more than the merchandise.` },
            { p: `<b>Techniques.</b> Papermaking moved west out of China across several centuries and reached Samarkand, then Baghdad, then Cairo, then Muslim Spain, and from there into Christian Europe, where the first mills appear in Italy in the late thirteenth century. Gunpowder, first compounded in China, appears in Europe in the fourteenth century after Mongol-era contact; the compass and the stern-post rudder move west; and printing, block printing certainly and possibly the idea of movable type, is at least present in the network before Europe develops its own. The Topic 2.5 chapter takes these apart properly.` },
            { p: `<b>Beliefs.</b> Buddhism had traveled these routes from India into Central Asia and China centuries before this period, carried by merchants and by the monasteries that grew up along the road to serve them. In this period the road carried Islam eastward into Central Asia and among Turkic and Mongol peoples, kept alive small but real communities of Christians of the Church of the East across Asia, and moved Persian and Chinese artistic and literary forms in both directions.` },
            { p: `<b>Disease.</b> The same handshakes moved infections, and one of them ended the period. That is section 05, and the Topic 2.6 chapter treats it in full.` }
          ]
        }
      ],
      useThis: {
        tool: `Silk as commodity and currency at once. <em>The mechanism is that a good which is light, durable, universally valued and divisible into standard bolts can serve as money on a route where no single coinage is accepted everywhere, so a merchant's working capital and his cargo become the same object and he avoids carrying silver through bandit country.</em>`,
        limit: `The same road carried enslaved people, in volume, including the boys who became Egypt's mamluk soldiers. A list of Silk Road goods that omits them is describing a cleaner system than the one that existed.`,
        comparison: `Against the <em>Indian Ocean</em>: overland cargo is luxury by necessity while maritime cargo includes rice, timber and cotton cloth by the shipload. Naming that difference and explaining it by cost per ton-mile is the single most reliable comparison in this unit.`
      },
      terms: [
        ['Silk', 'The emblematic cargo of the overland routes, valuable per unit of weight and used as a form of currency in bolts.'],
        ['Musk', 'A high-value aromatic from the Himalayas and Tibet, the kind of low-weight luxury the route existed to carry.'],
        ['Warhorse trade', 'The continuous purchase of steppe and Arabian horses by settled empires without grasslands, a leading trade by value and the exception to the value-density rule.'],
        ['Papermaking', 'The Chinese technique that moved west through Central Asia and the Islamic world over several centuries and reached European mills late in the thirteenth century.'],
        ['Church of the East', 'The Christian tradition whose communities were scattered along the Asian trade routes, evidence that religions moved east as well as west.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'decline',
      num: '05',
      accent: 'gold',
      name: 'Why It Faded',
      navLabel: 'Why it faded',
      dates: '1335 to 1450 &nbsp;·&nbsp; Fragmentation, plague, and the sea',
      thesis: `The overland trade did not close, and nobody closed it. It became relatively less attractive than the alternative, which is a completely different kind of explanation and a much better one.`,
      parts: [
        {
          heading: 'Three things happened at once',
          blocks: [
            { p: `<b>The political integration ended.</b> The Ilkhanate in Persia disintegrated after <span class="num">1335</span>, the Yuan dynasty in China fell to the Ming in <span class="num">1368</span>, and the Chagatai lands fractured. The single legal system that had made the journey calculable was replaced by a mosaic of rival powers, and later in the century Timur's campaigns tore through Central Asia and Persia repeatedly. Every toll, court and bandit problem the Pax Mongolica had reduced came back.` },
            { p: `<b>The plague.</b> The pandemic of the middle fourteenth century, treated in the Topic 2.6 chapter, killed a substantial fraction of the population of Eurasia and North Africa. Merchants, porters and townspeople along the route died in the same proportions as everyone else, and the towns that serviced the caravans lost the customers, the labor and the capital that had sustained them.` },
            { p: `<b>The sea got better.</b> Maritime routes were always cheaper per ton-mile and were becoming steadily more capable through this period, and the Ming after <span class="num">1368</span> reoriented Chinese trade decisively toward the coast. A merchant choosing between a four-month overland journey through three hostile jurisdictions and a monsoon-timed voyage that could carry a hundred times the cargo was not making a difficult decision.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The Ottomans did not close the Silk Roads in <span class="num">1453</span>, and this claim, which appears in a great many textbooks and in most student essays about the age of exploration, does not survive contact with the evidence. The Ottomans wanted the customs revenue and continued to trade with Venice and others; the spice trade through Ottoman and Mamluk territory carried on. What changed for Europeans was the price and the number of intermediaries taking a cut, which is a motive for seeking a route of one's own but is not a blockade. Write "the overland routes became more costly and less reliable while the sea became cheaper," and you will be both accurate and unusual.`
            } }
          ]
        },
        {
          heading: 'What the road left behind',
          blocks: [
            { p: `The effects the success criteria ask about are mostly not about goods. Cities along the route, Samarkand, Bukhara, Tabriz, Kashgar, grew wealthy, urban and cosmopolitan on provisioning and taxing a traffic they did not produce, and several of them became major centers of scholarship and architecture with the proceeds. Under Timur and his successors, Samarkand and Herat became centers of astronomy, manuscript painting and monumental building funded by exactly this kind of wealth.` },
            { p: `Second, the road left a permanently mixed cultural zone across Central Asia: Turkic, Persian, Chinese, Indian and Arab elements in language, religion, art and cuisine, produced by centuries of people stopping in the same towns. Third, it left the technologies of section 04 permanently redistributed, so that paper, gunpowder and the compass ceased to belong to anyone in particular.` },
            { p: `And it left one lesson that is worth more than the rest for this course: a network that moves goods moves everything else on the same path. The prosperity and the pandemic arrived by the same road, for the same reason, and any answer about connectivity that mentions only the benefits has understood half of it.` }
          ]
        }
      ],
      useThis: {
        tool: `Relative cost as the explanation for decline. <em>The mechanism is that overland trade did not stop but became more expensive and less predictable as political integration ended, while maritime transport was already cheaper per ton-mile and improving, so cargo shifted to the cheaper route. Nothing had to be closed for the traffic to move.</em>`,
        limit: `Say plainly what the pandemic did: the towns along the route lost customers, labor and capital at once, and a trade system is people before it is a road.`,
        comparison: `Against <em>Europe after 1350</em> in Topic 1.6: the same pandemic that emptied the caravan towns raised wages in western Europe and dissolved serfdom there. One shock, two regions, opposite consequences, decided by whether labor could bargain or simply disappeared.`
      },
      terms: [
        ['Ilkhanate', 'The Mongol state in Persia, whose disintegration after 1335 removed one of the pillars of overland political integration.'],
        ['Ming restrictions', 'The Ming dynasty&rsquo;s reorientation of Chinese trade and its later limits on private overseas commerce, which changed where Chinese goods entered world markets.'],
        ['Timur', 'The Central Asian conqueror whose late fourteenth-century campaigns devastated the very cities the overland routes depended on, while enriching his capital at Samarkand.'],
        ['Cost per ton-mile', 'The price of moving a given weight a given distance; the number that decides which route cargo takes and therefore which route thrives.'],
        ['Cosmopolitan', 'Composed of people from many origins, the characteristic condition of the oasis cities that lived on servicing a traffic they did not produce.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the specific evidence, and the reason the difference existed. The third part is where the points are, and in this unit it is almost always about cost, risk or who was protecting the route.`,
    pairs: [
      {
        category: 'Trade networks',
        title: 'The overland routes needed a policeman and the Indian Ocean did not',
        body: `Overland trade rose to its peak under the Pax Mongolica, when related Chinggisid regimes reduced tolls, honored each other's merchant privileges and made a journey's risk calculable, and it contracted when the Ilkhanate fell after 1335 and the Yuan fell in 1368. Indian Ocean trade in the same period had no dominant power at all: Calicut, Hormuz, Kilwa and Melaka were separately governed, and the system worked anyway. The difference exists because the two routes have different threats. A caravan is exposed to bandits and tolls at every mile of its journey, so it needs the ground policed; a ship is only exposed at its ports, so it needs a harbor that welcomes it and nothing in between.`
      },
      {
        category: 'Economics',
        title: 'Value density explains the cargo list better than culture does',
        body: `A caravan's costs, fodder, wages, tolls and lodging, are fixed per camel-load, so only goods with high value per kilogram justify the journey: silk, musk, gems, medicines. A ship's costs are also mostly fixed per voyage, but one vessel carried a hundred or more camel-loads, so rice, timber, mangrove poles and bulk cotton cloth were worth carrying by sea. That is why the Silk Roads look like a luxury trade and the Indian Ocean looks like an economy. The difference exists because of transport cost per ton-mile, and naming that ratio is worth more than any list of goods you could memorize.`
      },
      {
        category: 'Institutions',
        title: 'Credit made the volume possible, and it appears in almost nobody\'s answer',
        body: `The qirad, or commenda, let an investor who never traveled fund a merchant who had no capital, splitting profit by prior agreement and avoiding the prohibition on interest that both Islamic and canon law imposed. The sakk and suftaja moved value between cities without shipping coin. Mongol nobles invested directly through ortoq merchant associations. These instruments explain why the trade reached the volume it did and why the ruling elite protected it, and any answer that explains Silk Road commerce by describing goods alone has left out the machinery that moved them.`
      },
      {
        category: 'Causation',
        title: 'Nothing closed the Silk Roads, and the real explanation is better',
        body: `The Ottomans did not seal the routes in 1453; they wanted the customs revenue and kept trading. What actually happened was three things at once: the political integration that made the journey calculable dissolved between 1335 and 1368, the pandemic emptied the towns that serviced caravans, and maritime transport, always cheaper per ton-mile, kept improving. Cargo went where it was cheapest to go. Whenever a prompt asks why a route or an institution declined, look for a shift in relative cost before you look for someone who closed it, because the second explanation is dramatic and the first is usually the true one.`
      }
    ]
  }
};
