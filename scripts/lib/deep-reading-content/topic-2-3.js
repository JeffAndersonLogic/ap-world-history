'use strict';

/**
 * Topic 2.3, Exchange in the Indian Ocean: the deep reading.
 *
 * Why this exists, and how it differs from two chapters students may already
 * have read. Foundations 4 gives the map of the network. The Topic 1.3 chapter
 * uses the monsoon to explain how maritime states such as Srivijaya and Melaka
 * built power and why Islam reached ports no army ever visited. Neither one is
 * about the trade itself as a commercial system, and that is what Topic 2.3's
 * success criteria ask for: the technology that made the voyages possible, the
 * goods and the merchant communities, and the effects on port cities, diasporas
 * and religion.
 *
 * The organizing claim, and the thing worth carrying out of the whole unit: the
 * Indian Ocean was not a luxury trade. A ship carried the equivalent of a
 * hundred or more camel-loads, so the cost of moving a kilogram collapsed, and
 * the system therefore carried rice, timber, horses and above all Indian cotton
 * cloth by the shipload. Students consistently describe it as a spice route
 * because that is what the Silk Roads were, and getting this right is the
 * difference between describing two networks and comparing them.
 *
 * Two other things carried on purpose:
 *
 *   1. There was no hegemon. Nobody policed the Indian Ocean before 1498, and
 *      the trade worked anyway. That fact is the strongest possible test of
 *      whether a student understands why the overland routes needed the Pax
 *      Mongolica and this one did not.
 *   2. Zheng He's fleets were not voyages of exploration. They sailed known
 *      routes with local pilots to ports that had been trading with China for
 *      centuries, and the counterfactual about China nearly discovering the
 *      world is a modern story rather than a historical one.
 */

module.exports = {
  topicKey: 't2-3',
  slug: 'topic-2-3-indian-ocean',
  sourceFile: 'deep-reading-topic-2-3-indian-ocean.html',
  lessonFile: 'lesson-2-3-indian-ocean.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 2.3: The Ocean That Carried Everything',
  eyebrow: 'Topic 2.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Ocean That Carried <em>Everything</em>',
  deck: `The busiest trading system in the world before <span class="num">1500</span> had no navy, no ruler and no capital, and it moved cargo by the shipload rather than by the saddlebag. This chapter covers the ships, the economics, the port cities and the merchant communities, and finishes with the one fleet that was a state project and what happened to it.`,
  meta: ['Five sections', 'Ships, cargo, ports, people', 'Read alongside the First & 10'],
  footerNote: 'Topic 2.3 &nbsp;·&nbsp; The Ocean That Carried Everything &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `If you have read the Topic 1.3 chapter you already have the monsoon and what it did to the states of Southeast Asia. This chapter is about the trade itself: what the ships could do, what the cargo actually was, how a port made itself the one merchants chose, and who the merchants were. Section 02 is the one to read if you read only one.`,
    steps: [
      `<b>01 The ships:</b> sewn hulls, lateen sails, watertight bulkheads, and how you find latitude with a piece of string.`,
      `<b>02 The economics:</b> why this ocean carried rice and cloth while the Silk Roads carried silk.`,
      `<b>03 The port city:</b> harbor masters, customs, warehouses, and trade without a policeman.`,
      `<b>04 The merchant communities:</b> diasporas, contracts, and how Islam traveled with them.`,
      `<b>05 Zheng He:</b> what a state fleet was for, and why it stopped.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'ships',
      num: '01',
      accent: 'gold',
      name: 'The Ships and the Sky',
      navLabel: 'The ships',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Dhow, junk, compass, kamal',
      thesis: `Two shipbuilding traditions met in this ocean and neither was primitive. Both were solutions to the specific problem of sailing a seasonal wind system out of sight of land, and both were better at it than anything in the Atlantic at the time.`,
      parts: [
        {
          heading: 'The dhow',
          blocks: [
            { p: `The characteristic vessel of the western Indian Ocean was the <span class="kt">dhow</span>, a general term for a family of ships built along the Arabian, Persian and East African coasts. Two features define it. Its hull planks were traditionally <span class="kt">sewn</span> together with coconut fiber cord rather than nailed, which sounds fragile and is not: a sewn hull flexes under stress instead of splitting, can be repaired at any beach where coir and a needle are available, and needs no iron in regions where iron was expensive and timber for it had to be imported anyway.` },
            { p: `Its sail was the <span class="kt">lateen</span>, a triangular sail on a long yard set at an angle to the mast. A square sail pushes a ship along the wind; a lateen can be trimmed to sail at an angle across it, which means a dhow could make progress when the wind was not directly behind it and could work in and out of harbors that a square-rigged ship would have to wait outside. Combine that with the monsoon's reliability and you have a system in which a captain could plan a two-year round trip in advance and be right.` }
          ]
        },
        {
          heading: 'The junk',
          blocks: [
            { p: `From the east came the Chinese <span class="kt">junk</span>, a fundamentally different design and in several respects a more advanced one. Its hull was divided by <span class="kt">watertight bulkheads</span> into separate compartments, so a hole in one section flooded that section and not the ship, an idea European shipbuilding did not adopt for centuries. It carried a stern-post rudder for controlled steering, multiple masts with battened sails that could be reefed quickly, and on the largest vessels enough space that Ibn Battuta describes cabins with private facilities for merchants and their households.` },
            { p: `The two traditions met at the great ports of India and Southeast Asia. Ibn Battuta, at Calicut on the Malabar coast in the <span class="num">1340</span>s, describes Chinese junks lying in the harbor waiting out the season alongside vessels from Arabia and Persia. That image, ships from opposite ends of the ocean anchored in an Indian port under an Indian ruler, is the whole system in one sentence, and it is worth using.` }
          ]
        },
        {
          heading: 'Finding your way',
          blocks: [
            { p: `Navigation combined instruments with memory. The <span class="kt">magnetic compass</span>, developed in China and in use at sea by the twelfth century, spread across the ocean and gave a heading in cloud or at night. Latitude was found by measuring the height of a star above the horizon: the <span class="kt">kamal</span>, a small wooden card on a knotted string held at arm's length with the string in the teeth, did this with an accuracy sufficient to run down a latitude to a known port, and the mariner's astrolabe did it more precisely.` },
            { p: `The largest body of navigational knowledge, though, was written and memorized: <span class="kt">pilot books</span> recording courses, distances, star bearings, landmarks, currents, depths and the timing of the winds for particular routes. The Arab navigator Ahmad ibn Majid, writing in the fifteenth century, compiled navigational works of remarkable sophistication, and this literature is the reason a captain crossing open water for weeks knew where he would come out.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a wrecked dhow full of Chinese bowls',
              html: `A ninth-century wreck found off Belitung island in Indonesia was an Arabian-style sewn-hull vessel carrying tens of thousands of Chinese ceramic bowls, mass-produced and packed for shipping, along with gold and silver work. It predates this unit by centuries, and that is exactly why it is useful: it proves that long before <span class="num">1200</span> a ship built in the western Indian Ocean was sailing to China and coming back with cargo produced in bulk for an export market. When a question asks for evidence about Indian Ocean trade, a shipwreck's cargo manifest is stronger than any chronicle, because nobody packed it to impress a reader.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The lateen sail on a sewn hull. <em>The mechanism is that a triangular sail can be trimmed to work across the wind rather than only before it, and a stitched hull flexes rather than splits and can be repaired on any beach with coir and a needle, so a vessel could work in and out of harbors on a seasonal wind system far from any shipyard.</em>`,
        limit: `Everything still depended on the season. Miss the monsoon and you waited months, which is a constraint on the business as much as on the sailing, and it is why merchants lived in foreign ports rather than visiting them.`,
        comparison: `Against the <em>Silk Roads</em>: the dhow and the junk are capital-intensive and carry enormous cargo, while a camel is cheap and carries two hundred kilograms. That difference in the unit of transport is the origin of nearly every other difference between the two networks.`
      },
      terms: [
        ['Dhow', 'The family of western Indian Ocean sailing vessels, traditionally built with sewn planking and rigged with a lateen sail.'],
        ['Lateen sail', 'A triangular sail set on a long angled yard, allowing a ship to make progress across the wind rather than only before it.'],
        ['Junk', 'The Chinese ship, with watertight bulkhead compartments, a stern-post rudder and battened sails, among the most capable vessels of the period.'],
        ['Kamal', 'A card and knotted string used to measure a star&rsquo;s height above the horizon and so to find latitude at sea.'],
        ['Pilot book', 'A written compilation of courses, distances, star bearings, currents and seasonal timings for specific routes, the core of Indian Ocean navigation.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'economics',
      num: '02',
      accent: 'rust',
      name: 'What a Shipload Changes',
      navLabel: 'The economics',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Cotton, rice, horses, spice',
      thesis: `This is the most important section in the chapter. A single ship carried what a hundred camels could not, so the cost of moving a kilogram collapsed, and an ocean that could carry bulk goods produced a fundamentally different kind of economy from a road that could not.`,
      parts: [
        {
          heading: 'The arithmetic',
          blocks: [
            { p: `Recall the constraint from the Topic 2.1 chapter: a camel carries about two hundred kilograms, and the costs of a caravan, fodder, wages, tolls and lodging, are the same whether the load is silk or grain, so only high-value goods are worth carrying. A seagoing vessel in this period carried cargo measured in the hundreds of tons. The crew is larger but not a hundred times larger; the voyage is longer in days but covers vastly more distance; and the wind is free.` },
            { p: `Divide the cost of the voyage across the cargo and the price of moving a kilogram falls by an order of magnitude or more. That is the whole difference, and everything below is a consequence of it. Goods that cannot possibly justify a caravan, rice, timber, salt, ordinary cloth, building stone, become perfectly sensible cargo by sea.` }
          ]
        },
        {
          heading: 'What actually filled the holds',
          blocks: [
            { p: `<b>Cotton textiles, first and largest.</b> India was the manufacturing center of the world for cloth: Gujarat, the Coromandel coast and Bengal produced cotton textiles in enormous quantity and in grades from cheap workaday cloth to fine printed and dyed goods, and exported them across the entire ocean, to East Africa, Arabia, Persia and Southeast Asia. In many markets Indian cloth served as a form of currency, exchanged for spices in the islands and for gold and ivory on the African coast. If you remember one fact from this chapter, make it this one: the largest manufactured export in the Indian Ocean world was Indian cotton cloth, and any answer that describes the ocean as a spice route has missed the main cargo.` },
            { p: `<b>Spices</b>, certainly: pepper from the Malabar coast in bulk, cinnamon from Sri Lanka, and from a handful of small islands in eastern Indonesia the cloves, nutmeg and mace that grew nowhere else on earth and were therefore worth almost any price at the far end of the chain.` },
            { p: `<b>Bulk staples and raw materials:</b> rice moving from surplus regions to cities that could not feed themselves, timber from India to the treeless Persian Gulf, mangrove poles from East Africa to Arabia for roof beams, and Chinese porcelain, which is heavy and fragile and traveled by sea in tens of thousands of pieces at a time.` },
            { p: `<b>Horses,</b> which are the striking exception. Indian rulers, including Vijayanagara and the Delhi Sultanate, needed cavalry and India could not breed enough good warhorses, so Arabian and Persian horses were shipped east in large numbers at extraordinary prices, despite high losses on the voyage. A trade in live animals across an ocean, sustained for centuries because the alternative was military weakness, is a very good illustration of demand overcoming difficulty.` },
            { p: `<b>And people.</b> Enslaved people were moved across the Indian Ocean throughout this period, from East Africa and elsewhere, into Arabia, Persia and India. As with the overland routes, an account of the cargo that omits them is describing a tidier system than the one that existed.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a rubbish heap in Cairo full of Indian cloth',
              html: `Excavations at Fustat, the old settlement beside Cairo, recovered thousands of fragments of block-printed cotton textiles made in Gujarat, discarded over centuries. Ordinary cloth, thrown away, in quantity, a very long way from where it was woven. That is a different kind of evidence from a chronicle praising a sultan's silks: nobody records rubbish, so a mass of everyday Indian cotton in an Egyptian refuse deposit is direct proof that this was a high-volume trade in ordinary goods rather than a trickle of luxuries for princes.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Bulk carriage by sea. <em>The mechanism is that a ship's voyage costs are spread across hundreds of tons rather than two hundred kilograms, so the cost of moving a kilogram collapses and goods with low value per unit weight, rice, timber, ordinary cotton cloth, become worth shipping across an ocean when they could never cross a desert.</em>`,
        limit: `Volume did not mean everyone gained. The trade in enslaved people was part of the same system, and the cloth that served as currency in African and Southeast Asian markets was made by weavers in India who saw very little of the final price.`,
        comparison: `Against the <em>Silk Roads</em>: same underlying rule, opposite outcome. Both networks carry whatever their transport cost per ton-mile permits, which is why one looks like a luxury trade and the other looks like an economy, and why comparing their goods lists without naming the cost is a description rather than an explanation.`
      },
      terms: [
        ['Cotton textiles', 'India&rsquo;s dominant manufactured export, produced in Gujarat, Coromandel and Bengal and traded across the ocean, often functioning as currency.'],
        ['Bulk goods', 'Commodities of low value per unit weight, such as rice, timber and ordinary cloth, which only a cheap transport system can move profitably.'],
        ['Malabar coast', 'The southwestern coast of India, source of the pepper that made Calicut and its neighbors central to the spice trade.'],
        ['Maluku', 'The eastern Indonesian islands where cloves, nutmeg and mace grew and nowhere else, the origin point of the most valuable spices.'],
        ['Horse trade', 'The shipment of Arabian and Persian warhorses to Indian states that could not breed them, sustained at high cost and high losses.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'ports',
      num: '03',
      accent: 'iron',
      name: 'The Port City, and Trade Without a Policeman',
      navLabel: 'The port city',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Calicut, Hormuz, Aden, Kilwa, Melaka, Quanzhou',
      thesis: `No state controlled this ocean, and no state needed to. A port competed for traffic by being predictable, and predictability was manufactured with a set of institutions you can name.`,
      parts: [
        {
          heading: 'What a good port offered',
          blocks: [
            { p: `Put yourself in the position of a shipowner choosing where to unload. You want customs duties that are known in advance and not raised after you arrive. You want a warehouse where cargo can sit safely for months until the wind turns. You want brokers who can find buyers and interpreters who can talk to them. You want a court that will enforce a contract, and preferably one that applies a law you understand. You want your religious obligations to be practicable and your dead to be buried properly. And you want to know that nobody will confiscate your goods if you die in port.` },
            { p: `Successful ports supplied exactly that list. Many appointed a <span class="kt">shahbandar</span>, a harbor master, for each major merchant community, a man from that community who settled its disputes, collected its duties and represented it to the ruler. Melaka is the model case, with separate harbor masters for the main groups of foreign traders. Calicut, under its Hindu ruler the Zamorin, built a reputation for the safety of foreign merchants and their property, and the very fact that a Muslim traveler such as Ibn Battuta and later Chinese and Portuguese visitors all remark on its treatment of foreigners tells you it was a deliberate policy rather than an accident.` },
            { p: `The revenue model followed. A port ruler lived on customs and on the prosperity that traffic brought, so his interest was volume rather than extraction: squeeze the merchants and they sail to a rival harbor next season, since the ocean has many harbors and the wind does not care which one you use. That competitive discipline is what produced the institutions above, and it is a much better explanation for cosmopolitan tolerance in these cities than any general claim about the character of maritime peoples.` }
          ]
        },
        {
          heading: 'The system without a hegemon',
          blocks: [
            { p: `Here is the fact that surprises students and that examiners love. Before the Portuguese arrived at the very end of the fifteenth century, no power attempted to control the Indian Ocean as a whole. There were no state navies patrolling the sea lanes, no licensing of who could sail where, no blockades. Ports were governed; the water between them was not.` },
            { p: `The system worked anyway, and the reason is worth stating precisely: at sea a merchant's exposure is to weather and to the occasional pirate near a coast, not to the tolls, bandits and hostile jurisdictions that line every mile of an overland route. There is nothing between two ports to control. So maritime trade needed welcoming harbors rather than a protector, which is exactly why the Indian Ocean flourished under dozens of separate rulers while the Silk Roads had their best century under one empire.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Indian Ocean trade was dominated or controlled by any one group, Arab, Chinese or Indian. It was shared and competitive. Arab and Persian shipping dominated the western routes, Gujarati and Tamil merchants the Indian ones, Chinese and Southeast Asian shipping the eastern, and everyone met in Indian and Southeast Asian ports. The one attempt at domination in this period, the Ming treasure fleets in section 05, lasted less than thirty years and was abandoned. The accurate claim is that the ocean was a plural system, and the domination question does not arrive until the Portuguese try it with cannon.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The competitive port. <em>The mechanism is that a ruler whose income is customs revenue must attract shipping he cannot compel, so he supplies predictable duties, secure warehousing, brokers, interpreters, courts that enforce foreign contracts and a harbor master from each merchant community, because the alternative is that next season the ships anchor at a rival harbor instead.</em>`,
        limit: `A port living on transit has no depth. Its prosperity can be removed by a better-run rival, a shifted route or, eventually, an armed fleet that decides who may sail at all.`,
        comparison: `Against the <em>Silk Roads</em>: overland trade needed the ground policed because the danger lay between the towns, while maritime trade needed only good harbors because there is nothing to police between them. That is why one network's fortunes tracked one empire's and the other's did not.`
      },
      terms: [
        ['Shahbandar', 'A harbor master appointed for a particular merchant community, settling its disputes and representing it to the ruler.'],
        ['Calicut', 'The Malabar port under the Hindu Zamorin whose reputation for protecting foreign merchants and their property drew traffic from across the ocean.'],
        ['Quanzhou', 'The great southern Chinese port, with substantial resident foreign communities, where Indian Ocean and Chinese shipping met.'],
        ['Hormuz', 'The port controlling the entrance to the Persian Gulf, a major transshipment point between the ocean and the overland routes to Persia.'],
        ['Customs revenue', 'Duties on cargo passing through a port, the income that made a ruler dependent on merchants he could not compel to come.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'diasporas',
      num: '04',
      accent: 'oxide',
      name: 'The Merchant Communities',
      navLabel: 'The merchant communities',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Diasporas, contracts, conversion',
      thesis: `The ocean's most durable product was not a cargo but a population: communities of foreign merchants living permanently in other people's cities, which is how commercial law, religion and language crossed the water.`,
      parts: [
        {
          heading: 'Why merchants settled',
          blocks: [
            { p: `The mechanism comes from the wind and is worth restating in its commercial form. A merchant sailing east on one monsoon cannot sail home until the other, so he is in a foreign port for months. Months become a warehouse, a warehouse becomes an agent, an agent becomes a resident relative, a resident relative marries locally, and within a generation there is a permanent community with property, a place of worship and a stake in the city.` },
            { p: `Every major port therefore held resident foreign communities: Arab and Persian merchants in the ports of India and East Africa, Gujarati and Tamil merchants across Southeast Asia and around the Arabian Sea, Chinese merchants in the Southeast Asian ports, and communities of Jewish, Armenian and later European traders at various nodes. These are <span class="kt">trading diasporas</span>, and they solved a problem no contract could: a partner in a distant port whose family you know, whose community you can appeal to, and who expects to deal with your relatives for another generation, is trustworthy in a way a stranger with a signed agreement is not when the nearest shared court is a thousand miles away.` }
          ]
        },
        {
          heading: 'The instruments and the law',
          blocks: [
            { p: `The commercial instruments are the same family described in the Topic 2.1 chapter, adapted to sea risk: partnerships in which an investor funded a voyage and a traveling partner conducted it for an agreed share, contracts spreading a cargo across several ships so that one loss was not ruin, and written orders to pay that moved value without shipping coin. Egypt's Karimi merchants, wholesale financiers of the spice trade between the Indian Ocean and the Mediterranean, operated on a scale large enough to lend to the Mamluk state itself.` },
            { p: `Islamic commercial law was the nearest thing the ocean had to a common legal system, which is a large part of why conversion had practical value for a merchant family, and why the ports converted before the interiors did. A trader operating under a law recognized from Aden to Melaka had enforceable contracts, recognized marriage and inheritance, and access to a network of arbitrators. None of that requires anyone's faith to be insincere; it means a religion and a commercial infrastructure arrived together and reinforced each other.` }
          ]
        },
        {
          heading: 'What the exchange produced',
          blocks: [
            { p: `Three durable results, and each is usable as evidence. <b>New languages.</b> Kiswahili on the East African coast is a Bantu language carrying a heavy layer of Arabic vocabulary in exactly the domains the trade required, commerce, law, religion and seafaring; Malay became the trade language of Southeast Asia and later took Arabic script. A language is a record of who talked to whom about what.` },
            { p: `<b>New cities and new tastes.</b> Coral-stone houses and mosques on the Swahili coast, Chinese porcelain in African and Middle Eastern households, Indian cloth worn from Cairo to the Moluccas, and Persian and Arabic loanwords, foods and architectural forms across the whole rim.` },
            { p: `<b>Conversion.</b> Islam spread along this ocean to places no Muslim army ever reached, as the Topic 1.3 chapter argues in detail: the Swahili coast, the Maldives, the ports of Gujarat, the north Javanese coast, Melaka and onward into the archipelago. It moved with resident merchants and with Sufi teachers, and it typically converted the ports first and the interiors slowly or not at all, which is the pattern to name.` }
          ]
        }
      ],
      useThis: {
        tool: `The trading diaspora. <em>The mechanism is that the monsoon's reversal forced months of residence in foreign ports, which turned visits into settlements and settlements into communities with local marriages and property, giving merchants trustworthy partners at every node in a system where no shared court existed to enforce a contract.</em>`,
        limit: `These communities were minorities living at a ruler's pleasure, prosperous and legally vulnerable, and their standing could change with a change of ruler.`,
        comparison: `Against the <em>Mongol</em> exchange in Topic 2.2: specialists summoned by a ruler travel, do their work and are replaceable; merchant diasporas settle, marry and stay. That is why maritime exchange left permanent hybrid languages and cultures along an entire coastline, and Mongol exchange left a body of translated science.`
      },
      terms: [
        ['Trading diaspora', 'A merchant community settled permanently in foreign ports, whose kinship and shared religion made long-distance contracts enforceable in practice.'],
        ['Karimi merchants', 'The Egypt-based wholesalers of the spice trade between the Indian Ocean and the Mediterranean, wealthy enough to finance the Mamluk state.'],
        ['Kiswahili', 'The Bantu language of the East African coast carrying heavy Arabic vocabulary in commerce, law, religion and seafaring.'],
        ['Commenda', 'The partnership in which an investor funds a voyage and a traveling partner conducts it for an agreed share of the profit; the qirad of Islamic law.'],
        ['Cosmopolitan port', 'A harbor city whose population and institutions were shaped by resident communities of foreign merchants.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'zheng-he',
      num: '05',
      accent: 'gold',
      name: 'Zheng He, and What a State Fleet Was For',
      navLabel: 'Zheng He',
      dates: '1405 to 1433 &nbsp;·&nbsp; Seven voyages',
      thesis: `For thirty years the Ming state put the largest fleet in the world into an ocean that had never had one, then stopped. What the voyages were actually for, and why they ended, is a better question than the counterfactual everyone reaches for.`,
      parts: [
        {
          heading: 'What happened',
          blocks: [
            { p: `Between <span class="num">1405</span> and <span class="num">1433</span> the Ming court sent seven expeditions into the Indian Ocean under the admiral <span class="kt">Zheng He</span>, a Muslim court eunuch from Yunnan. The fleets were enormous by any standard of the age, hundreds of vessels and tens of thousands of men, and they reached Southeast Asia, India, the Persian Gulf, Arabia and the Swahili coast of East Africa.` },
            { p: `They were not voyages of discovery. They sailed established routes to ports that had traded with China for centuries, using pilots and charts that already existed. Their purposes were political: to display Ming power, to enroll foreign rulers in the <span class="kt">tribute system</span> by which they acknowledged the emperor's superiority and received lavish gifts in return, to install or support friendly rulers at strategic ports, and to suppress piracy along the routes. The fleets did fight when they judged it necessary, intervening in Sri Lanka and against a pirate stronghold at Palembang, so this was projection of power and not merely pageantry.` },
            { p: `The most famous single object of the voyages is a giraffe, brought from the Swahili coast by way of Bengal and presented at the Ming court, where it was received as an auspicious beast whose appearance testified to the virtue of the emperor's rule. That is the tribute system working exactly as designed: the point of the animal was what its arrival said about the throne.` }
          ]
        },
        {
          heading: 'Why they stopped',
          blocks: [
            { p: `The voyages ended, and the reasons are concrete rather than mysterious. They were extraordinarily expensive and generated prestige rather than revenue, at a time when the dynasty faced a far more urgent and dangerous problem on its northern land frontier with the Mongols. The capital had been moved north to Beijing, an immense construction project in its own right, which shifted the court's strategic attention inland. And the voyages were a project of the eunuch establishment at court, which Confucian officials opposed both on principle and as a matter of factional advantage; when those officials gained the upper hand, the fleets were discontinued and later shipbuilding of that class was restricted.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Resist the counterfactual that China nearly discovered the world and turned back. It imports the aims of later European voyages into a project that did not share them: Zheng He was not looking for a route to anywhere, because the route was known and Chinese goods were already reaching every market that mattered, and China wanted very little that the ocean did not already deliver. The interesting historical question is not why China stopped but why anyone would continue: a state fleet that costs a fortune, returns prestige rather than profit, and secures trade that private merchants were conducting perfectly well without it is a policy that has to be justified every year in a court budget. Answer that and you have said something; repeat the counterfactual and you have said nothing.`
            } },
            { p: `Chinese maritime trade did not end with the voyages. Private Chinese merchants and shipping continued throughout the period, and Chinese communities remained in Southeast Asian ports. What ended was the state's presence at sea, and the practical result was that when armed European ships entered this ocean at the end of the century, they met a rich, plural, well-organized commercial world with no navy in it.` }
          ]
        }
      ],
      useThis: {
        tool: `The tribute system as foreign policy. <em>The mechanism is that a foreign ruler's envoy performs recognition of the emperor's superiority and receives gifts worth more than the tribute he brought, which buys diplomatic acknowledgment and trading access with treasure rather than with soldiers, and turns a giraffe into evidence for the legitimacy of a reign.</em>`,
        limit: `It cost far more than it returned. A program justified by prestige is vulnerable the moment a court faction with different priorities gains the upper hand, which is precisely what happened after 1433.`,
        comparison: `Against the <em>Portuguese</em> arrival at the end of the century, which is Unit 4's business: two state projects entering the same ocean, one to be acknowledged and one to control the traffic by force. The contrast is the sharpest available way to see that state involvement in trade is not one thing.`
      },
      terms: [
        ['Zheng He', 'The Ming admiral, a Muslim court eunuch, who commanded seven Indian Ocean expeditions between 1405 and 1433.'],
        ['Treasure fleet', 'The Ming expeditionary fleets of hundreds of vessels and tens of thousands of men, the largest naval force of the era.'],
        ['Tribute system', 'The Chinese diplomatic framework in which foreign rulers acknowledged the emperor&rsquo;s superiority and received gifts and trading access in return.'],
        ['Ming', 'The dynasty that replaced the Yuan in 1368, moved its capital to Beijing, and after 1433 withdrew the state from long-distance seafaring.'],
        ['Court eunuch', 'A category of imperial servant whose faction sponsored the voyages, and whose defeat by Confucian officials helps explain their end.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the evidence, and the reason the difference existed. The first is the one to learn cold, because some version of it can answer almost any Unit 2 prompt.`,
    pairs: [
      {
        category: 'Trade networks',
        title: 'Bulk by sea, luxury by land, and the reason is arithmetic',
        body: `The Indian Ocean carried Indian cotton cloth by the shipload, rice to cities that could not feed themselves, timber to the treeless Gulf, mangrove poles to Arabia and porcelain in tens of thousands of pieces. The Silk Roads carried silk, musk, gems and medicines and never grain. The difference exists because a camel carries two hundred kilograms and a ship carries hundreds of tons while the costs of each journey are broadly fixed, so the price of moving a kilogram is an order of magnitude lower by sea. Name the ratio and you have explained both cargo lists at once, which is worth more than memorizing either.`
      },
      {
        category: 'Political control',
        title: 'One network needed an empire and the other needed nobody',
        body: `Overland trade peaked under the Pax Mongolica, when one authority reduced tolls and made the journey's risk calculable, and contracted when that authority dissolved after 1335. The Indian Ocean had no hegemon at all before 1498, and Calicut, Hormuz, Aden, Kilwa and Melaka were separately governed and competitively hospitable. The difference exists because of where the danger lies: a caravan is exposed for every mile between towns, so the ground must be policed, while a ship is exposed only in port, so a welcoming harbor is the only institution the system requires.`
      },
      {
        category: 'Cultural consequences',
        title: 'The monsoon converted the ports and left the interiors alone',
        body: `Because the winds reverse twice a year, a merchant who arrived on one monsoon waited months for the other, which turned voyages into residence, residence into intermarriage, and intermarriage into permanent communities with mosques, property and local kin. That is why Islam reached the Swahili coast, Gujarat's ports, the Maldives, north Java and Melaka centuries before any Muslim army did, and why conversion in those regions began at the water and moved inland slowly. The difference from a conquest-driven spread is visible in the map itself: coastlines converted, interiors did not.`
      },
      {
        category: 'States and trade',
        title: 'Zheng He and the Karimi merchants are two answers to who runs a trade',
        body: `The Ming state built the largest fleet in the world, sailed known routes to enroll rulers in a tribute system, brought back a giraffe as evidence of imperial virtue, and abandoned the program in 1433 when the cost, the northern frontier and court factions turned against it. Egypt's Karimi merchants ran the spice trade between the Indian Ocean and the Mediterranean as private wholesalers with capital large enough to lend to the Mamluk state. The difference exists because the two were pursuing different returns: prestige has to be renewed by policy every year, while profit renews itself, which is why the private networks outlasted the imperial fleet by centuries.`
      }
    ]
  }
};
