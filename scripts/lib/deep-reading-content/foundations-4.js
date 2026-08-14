'use strict';

/**
 * Foundations 4, Trade Networks & Innovation: the deep reading.
 *
 * Why this exists. Success criterion 1 is unusually literal. It asks a student
 * to name at least three port cities or oasis towns, explain their geographic
 * function, and describe the monsoon system by month and direction. The First &
 * 10 runs about 550 words across three networks and names ports without ever
 * having room to say what a port did, and it gives the monsoon one sentence. So
 * sections 01 to 03 hit that criterion literally: every network gets a part that
 * is nothing but named places and what each one was for.
 *
 * The framing carried throughout is relay rather than through-travel, because it
 * is the idea that makes the rest of the unit work. Goods changed hands many
 * times, which is why ideas and diseases moved with them and why a chokepoint was
 * worth a fortune to whoever held it.
 *
 * Sections 04 to 07 are the non-goods, one each for disease, technology, crops
 * and religion, on their own three-part skeleton: what moved, how it traveled,
 * what changed. Question 3 asks a student to evaluate whether the non-goods
 * mattered most, so section 08 exists to supply the other half of that argument
 * and the human cost the first seven sections would otherwise leave out: tolls,
 * the people who were themselves traded, and the merchants who bore the risk.
 *
 * Three claims the lesson data states flatly are hedged here, because each one is
 * contested and this course teaches evidence discipline:
 *
 *   1. The Battle of Talas as the origin of Islamic papermaking. The mills are
 *      well attested; the captured-papermakers story is late and thin. The
 *      BeSurreal scenario is built on the story, so the note is written to keep
 *      the scenario usable while telling the student what kind of evidence it is.
 *   2. The Plague of Justinian's mortality. The 25 to 50 million figure comes
 *      from maximalist readings that a recent literature disputes.
 *   3. The camel saddle at c.300 CE as the thing that opened the Sahara. The
 *      desert was crossed before it; what changed was the economics.
 *
 * Body copy is authored as HTML. `<span class="kt">` is how a key term is found
 * on the page, so it belongs in the content, not in the template.
 */

module.exports = {
  topicKey: 'f4',
  slug: 'foundations-4-trade-networks',
  sourceFile: 'deep-reading-foundations-4-trade-networks.html',
  lessonFile: 'foundations-4-trade-networks.html',

  docTitle: 'BeHistorical | Deep Reading | Foundations 4: Nobody Traveled the Whole Road',
  eyebrow: 'Foundations 4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Nobody Traveled the <em>Whole</em> Road',
  deck: `Three networks, and then the four things that traveled on them without anyone intending it. The first half is geography and machinery: which towns, which winds, which months, and who collected the toll. The second half is what the machinery carried besides cargo, which is where the questions in this lesson actually live.`,
  meta: ['Three networks', 'Four kinds of cargo nobody ordered', 'Read alongside the First & 10'],
  footerNote: 'Foundations 4 &nbsp;·&nbsp; Nobody Traveled the Whole Road &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 to 03 are the three networks, each on the same four parts, so reading one part across two networks gives you a comparison already built. Sections 04 to 07 are the non-goods, each on a shorter skeleton: what moved, how it traveled, what changed. Section 08 is the cost side, and you need it for the third question.`,
    steps: [
      `<b>The geography:</b> what the land or the water actually required of anyone crossing it.`,
      `<b>How it worked:</b> the mechanism, which is relay on the Silk Roads, the monsoon reversal in the Indian Ocean, and camel physiology across the Sahara. Question 1 lives here.`,
      `<b>The places, and what each was for:</b> named oasis towns and ports with their geographic function. This part is written to answer success criterion 1 literally, so read it with a pen.`,
      `<b>Who got rich:</b> chokepoints, tolls and junction cities.`,
      `<b>Sections 04 to 07</b> are disease, technology, crops and religion. Question 2 lives there.`,
      `<b>Section 08</b> is who paid, including the people who were themselves cargo. Question 3 cannot be argued honestly without it.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'silk-roads',
      num: '01',
      accent: 'gold',
      name: 'The Silk Roads',
      navLabel: 'Silk Roads',
      dates: 'c. 130 BCE onward &nbsp;·&nbsp; Chang&rsquo;an to the Mediterranean, overland',
      thesis: `The Silk Roads were not a road and nobody traveled their length. They were a relay of short hauls between oasis towns, and almost everything interesting about them follows from that one structural fact.`,
      parts: [
        {
          heading: 'The geography',
          blocks: [
            { p: `Between China and Persia lies the worst terrain in Eurasia for moving goods. The Taklamakan Desert is effectively uncrossable, so routes split and ran along its northern and southern rims, from one oasis to the next, each fed by meltwater from the mountains. North and south of those rims stand the Tian Shan, the Pamirs and the Kunlun. Further west the land opens into the steppe and the river valleys of Transoxiana, then crosses the Iranian plateau to Mesopotamia and the Mediterranean.` },
            { p: `The geographic logic is simple and it explains the map. Water determines where a caravan can stop, mountains determine which passes it can use, and the distance between reliable water determines how far a stage can be. The towns are where they are because the water is where it is, and the route is a line drawn between them by necessity.` }
          ]
        },
        {
          heading: 'How it worked: relay, not through-travel',
          blocks: [
            { p: `A bolt of silk that began in a Chinese workshop and ended in a Roman one changed hands many times on the way. A merchant knew one segment: its passes, its bandits, its officials, its languages and its customers. He bought at one end, sold at the other, took his margin, and went home. The next man did the same for the next stage. That is <span class="kt">relay trade</span>, and the alternative, one merchant traveling four thousand kilometres and back, was slower, more dangerous and less profitable for everyone.` },
            { p: `Three consequences follow, and they are the whole point of this section. First, prices multiplied with each transfer, which is why only goods with a high value-to-weight ratio were worth moving: silk, gems, spices, glass, medicines. Nobody hauled grain to Rome overland. Second, the relay meant constant contact between different peoples at every junction, not a sealed pipeline from one civilization to another. Ideas, techniques and infections transferred at the same handshakes the goods did, which is the mechanism behind sections 04 to 07. Third, no single power ever controlled the route end to end for long, so the trade's volume rose and fell with how many separate states along it were currently stable.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"The Silk Road" is a nineteenth-century coinage, from the German geographer Ferdinand von Richthofen in <span class="num">1877</span>, and no merchant in this period would have recognized the term. Two errors follow from taking it literally. It was not one road but a shifting braid of routes, and silk was not most of what moved on it: horses, glass, metals, medicines, furs, paper and enslaved people all traveled the same stages. Write "the Silk Roads," plural, and name a good other than silk, and you have already avoided the two most common mistakes in this topic.`
            } }
          ]
        },
        {
          heading: 'The places, and what each was for',
          blocks: [
            { p: `<b>Chang'an</b> was the eastern terminus and the Tang capital, holding perhaps a million people in the eighth century. Its function was assembly and control: goods gathered from across China, and the state taxed and regulated the foreign merchant quarters in its Western Market, where Sogdian, Persian, Arab and other communities lived permanently, with a mosque and Zoroastrian fire temples inside the city.` },
            { p: `<b>Dunhuang</b> sat at the western edge of Chinese control, where the route entered the desert and split. Its function was a threshold: garrison, customs point, and the place where a traveler prepared for the crossing or recovered from it. That is why its Mogao caves are full of merchant-funded Buddhist art, and why a sealed library cave there preserved tens of thousands of manuscripts in many languages.` },
            { p: `<b>Turfan</b> and <b>Khotan</b> were oasis towns on the northern and southern rims, watered by mountain runoff. Their function was supply and transfer: food, water, fodder, animals and a market. Khotan additionally produced jade, which had traveled toward China long before silk traveled west.` },
            { p: `<b>Kashgar</b> is the convergence point, where the northern and southern rim routes met before crossing the Pamirs. Its function was junction, which meant a market for everything moving in both directions and a position anyone controlling the region wanted.` },
            { p: `<b>Samarkand</b> and <b>Bukhara</b>, in the well-watered Zarafshan valley, were the great Sogdian cities. Their function was the middle: capital, credit, warehousing and the merchant families whose relatives sat at both ends of the next stage. <b>Merv</b>, an enormous oasis city in what is now Turkmenistan, was the gateway between Central Asia and the Iranian plateau, and <b>Nishapur</b> the next major stage west.` }
          ]
        },
        {
          heading: 'Who ran it, and who got rich',
          blocks: [
            { p: `From roughly the third to the ninth centuries CE the middle segments belonged to the <span class="kt">Sogdians</span>, an Iranian-speaking people from Samarkand and Bukhara. Their advantages were institutional rather than geographic. They ran family networks with relatives permanently settled in trading colonies from China to the Byzantine frontier, so an agreement could be enforced by kin at both ends. They spoke the languages of everyone they dealt with, and Sogdian became a commercial lingua franca of Central Asia. They invested in <span class="kt">caravanserais</span>, the fortified roadside inns that offered water, fodder, storage and safety, which meant a competitor without that infrastructure paid more and moved slower.` },
            { p: `The people who profited most were rarely the ones who produced anything. Wealth accumulated at <span class="kt">junction cities</span> and at chokepoints, where geography forced traffic through a place someone controlled and where a toll could be collected. States understood this perfectly: the Han pushed garrisons far west into the Gansu corridor to hold the eastern approaches, and the trade's fortunes rose whenever a large power secured a long stretch of it and fell when that power collapsed.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Some of the best evidence for Silk Road trade is accidental. The Sogdian Ancient Letters, found in a watchtower near Dunhuang and dating to the early fourth century CE, are undelivered business and family correspondence: a merchant reporting disaster in China, a woman abandoned by her husband and complaining about it. Nobody wrote them for posterity. Compare that to the Mogao caves, which were commissioned to be seen and to earn merit. Both are evidence, and knowing which kind you are holding is half of using it well.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Relay trade. <em>The mechanism is that each merchant worked one segment he knew and sold on to the next, which multiplied the price at every transfer, restricted the traffic to high-value goods, and put people of different languages and religions in direct contact at every junction, so ideas and infections moved at the same handshakes the cargo did.</em>`,
        limit: `No power held the whole route, so volume tracked the stability of every state along it. For the human cost, enslaved people were among the goods relayed, and section 08 has the evidence.`,
        comparison: `Against the <em>Indian Ocean</em> on what the route allowed: overland relay could only justify high-value cargo, while a ship could carry timber, grain and pottery in bulk. That single contrast explains most of the difference between the two networks.`
      },
      terms: [
        ['Relay trade', 'A system in which goods change hands repeatedly along a route, each merchant working one familiar segment.'],
        ['Sogdians', 'Iranian-speaking merchants of Samarkand and Bukhara who dominated the central Silk Road segments from about the 3rd to the 9th centuries CE.'],
        ['Caravanserai', 'A fortified roadside inn offering water, fodder, storage and protection, built as a commercial investment.'],
        ['Oasis town', 'A settlement watered by mountain runoff, positioned where a caravan must stop, and therefore a market and a customs point.'],
        ['Junction city', 'A city whose wealth came from its position where routes met rather than from what it produced.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'indian-ocean',
      num: '02',
      accent: 'rust',
      name: 'The Indian Ocean',
      navLabel: 'Indian Ocean',
      dates: 'Organized by the 1st century CE, at scale by c. 1000 &nbsp;·&nbsp; East Africa to the South China Sea',
      thesis: `The Indian Ocean is the one network in this reading whose defining feature is a clock. The monsoon reverses on a schedule, which turned an ocean into a set of scheduled routes and forced merchants to live for months in other people's cities.`,
      parts: [
        {
          heading: 'The geography, which is really a calendar',
          blocks: [
            { p: `The Asian landmass heats faster than the ocean in summer and cools faster in winter, and the resulting pressure difference reverses the prevailing wind twice a year. From roughly <b>June to September</b> the <span class="kt">southwest monsoon</span> blows from the southwest, carrying ships from East Africa and Arabia northeast toward India, and onward toward Southeast Asia. From roughly <b>November to March</b> the <span class="kt">northeast monsoon</span> blows from the northeast, carrying them back the other way, southwest toward Arabia and Africa.` },
            { p: `The practical consequence is that this is a round-trip ticket with a fixed departure date and a fixed return, and the return is months later. A merchant sailing from Aden to the Malabar coast on the summer wind could not simply turn around: he waited for the wind to reverse. So he stayed, for months, every year. That is why the Indian Ocean produced permanent foreign merchant quarters in nearly every major port, and why intermarriage, conversion and hybrid languages followed the trade so reliably. The wind built the diaspora communities.` },
            { p: `The other consequence is that everyone knew the schedule. Sailing seasons could be planned a year ahead, cargoes assembled to meet a departure, credit extended against a return that would arrive within a predictable window. Compare the Silk Roads, where arrival depended on the politics of six separate states. The monsoon made the Indian Ocean the most reliable long-distance commercial system in the world before c.1200.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The <em>Periplus of the Erythraean Sea</em> is a working handbook written in Greek by a merchant of Roman Egypt in roughly the first century CE, listing ports down the African coast and around Arabia to India with what to buy, what to sell, which harbours are dangerous and which local rulers to expect. It is not literature and was not written to impress anyone, which is exactly what makes it good evidence: it shows that the network was already routine, organized and commercially detailed more than a thousand years before the period this course begins with.`
            } }
          ]
        },
        {
          heading: 'How it worked: bulk, not just luxury',
          blocks: [
            { p: `A ship changes the economics completely. A camel carries a couple of hundred kilograms; a dhow or a junk carries tons. That means the Indian Ocean could profitably move goods no overland route could touch: timber, grain, pottery, iron, cotton cloth in quantity, and salt, alongside the pepper, spices, ivory, gold and porcelain that make the textbooks.` },
            { p: `The shipping itself was regionally distinct. Ships in the western ocean were commonly built with hulls sewn together using coir rope rather than nailed, which produced a flexible vessel well suited to the reefs and the shallow harbours of the coast. Chinese junks, with their bulkheads and stern-post rudders, came out of a different tradition entirely. The navigation ran on the wind schedule, coastal landmarks, star altitudes and pilots who knew a particular stretch, and Chinese ships were using the magnetic compass at sea by the Song period.` },
            { p: `And it ran on credit and contract. Merchants pooled capital in partnerships, funded a traveling agent against a share of the profit, and moved value through instruments rather than by shipping coin. Islamic commercial law supplied a shared framework for much of the western ocean, which is one reason conversion carried a commercial advantage for a port ruler, as Foundations 2 argues at greater length.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a wreck is a sealed sample',
              html: `The Belitung wreck, an Arabian-style sewn-hull ship found off Indonesia and dated to around the <span class="num">830s CE</span>, went down carrying tens of thousands of Chinese ceramics packed for sale, along with gold and silver objects. What makes a wreck such good evidence is that it is a single moment rather than an accumulation: everything in the hold was in transit on one day, so it shows what an actual cargo looked like rather than what survived in somebody's collection. This one shows mass-produced Chinese export ware moving west in bulk in the ninth century, on a ship built in the western Indian Ocean tradition, which is a great deal of information about the network in one object. Note the trade-off as well: excavating a wreck commercially, as this one was, recovers objects and destroys the archaeological context, and archaeologists argued bitterly about it for that reason.`
            } }
          ]
        },
        {
          heading: 'The places, and what each was for',
          blocks: [
            { p: `<b>Kilwa</b>, on an island off the Swahili coast, was the southern gateway. Its function was to control access to the gold and ivory coming out of the interior through Sofala, and to sit at the practical southern limit of a single monsoon run from Arabia. Chinese celadon and Persian glass in its archaeological record are the proof that this was a node of a world-scale system, not a periphery.` },
            { p: `<b>Aden</b> commanded the mouth of the Red Sea, and <b>Hormuz</b> the mouth of the Persian Gulf. Their function was the same in two places: a chokepoint where a gulf narrows to a strait, so everything entering or leaving passed within reach of whoever held the port and paid for the privilege.` },
            { p: `<b>Calicut</b> and <b>Quilon</b> on the Malabar coast were the pepper ports and the natural midpoint of the ocean, where the western and eastern halves of the network met. Their function was exchange and reprovisioning at the place the winds made convenient, under rulers who protected foreign merchants because their revenue depended on them.` },
            { p: `<b>Malacca</b>, and before it the Srivijayan ports on the Strait, controlled the only practical sea passage between the Indian Ocean and the South China Sea. Its function was toll collection at a chokepoint roughly nine hundred kilometres long and in places very narrow, plus the wait: ships coming from the west on one monsoon met ships coming from the east on the other, and the goods changed hands rather than the ships making the whole run.` },
            { p: `<b>Quanzhou</b> was the great southern Chinese port and the eastern terminus. Its function was to connect the ocean network to the Chinese interior through inland waterways, under a maritime customs administration whose revenue mattered to the Song treasury, with permanent Arab, Persian and Indian merchant communities living in the city.` }
          ]
        },
        {
          heading: 'Who got rich',
          blocks: [
            { p: `Chokepoints and entrepôts, again, and the clearest case is <span class="kt">Srivijaya</span>, the maritime power based on Sumatra that from about the seventh century dominated the Strait of Malacca. It produced very little of what passed through. It taxed passage, provided harbours and provisioning, and used the proceeds to fund a court and a major centre of Buddhist learning. When the Chola dynasty of southern India launched naval raids across the Bay of Bengal in <span class="num">1025 CE</span>, the target was precisely that control of the passage, which tells you what it was worth.` },
            { p: `Rulers of port cities generally got rich by protecting merchants rather than by robbing them, and that is a genuinely important pattern. A ruler who seized cargo got one payday; a ruler who guaranteed contracts, punished theft and kept his customs rates predictable got a share of every cargo for a generation. The Song state's maritime customs offices, the Swahili sultans, the rulers of Calicut and Malacca were all in the same business: selling reliability.` }
          ]
        }
      ],
      useThis: {
        tool: `The monsoon reversal. <em>The mechanism is that the wind blows from the southwest between June and September and from the northeast between November and March, so a voyage out and back took the better part of a year and merchants had to overwinter in foreign ports, which is why the network produced permanent diaspora communities, conversions and creole languages rather than just cargo movements.</em>`,
        limit: `The same reliability made the network's chokepoints enormously valuable and worth fighting over, as the Chola raids on Srivijaya in 1025 CE show. And it moved enslaved people in large numbers over centuries; see section 08.`,
        comparison: `Against the <em>Silk Roads</em> on cargo: ships carried bulk goods that no caravan could justify, which is why the ocean network was economically larger even though the overland routes are more famous. Against the <em>trans-Saharan</em> on the same point: a camel is a ship with a very small hold.`
      },
      terms: [
        ['Monsoon', 'The seasonally reversing wind system: southwest June to September, northeast November to March.'],
        ['Entrepôt', 'A port where goods from many origins are collected, stored and redistributed rather than produced.'],
        ['Chokepoint', 'A narrow passage that traffic cannot avoid, and therefore a place where a ruler can collect tolls.'],
        ['Srivijaya', 'The maritime power on Sumatra that taxed passage through the Strait of Malacca and funded a centre of Buddhist learning with the proceeds.'],
        ['Swahili coast', 'The East African port cities, Kilwa among them, that linked the continental interior to the Indian Ocean network.'],
        ['Dhow', 'A sailing vessel of the western Indian Ocean, commonly built with sewn rather than nailed hulls.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'trans-saharan',
      num: '03',
      accent: 'iron',
      name: 'The Trans-Saharan Routes',
      navLabel: 'Trans-Saharan',
      dates: 'At scale from c. the 8th century CE &nbsp;·&nbsp; the Sahel to the Mediterranean',
      thesis: `The trans-Saharan trade is the best case in this reading for a technology changing what geography means. The Sahara did not shrink. What changed was the cost of crossing it, and a barrier became a corridor because the arithmetic changed.`,
      parts: [
        {
          heading: 'The geography',
          blocks: [
            { p: `The Sahara is roughly nine million square kilometres of desert lying between the West African savanna and the Mediterranean coast. Crossing it meant a route strung between oases and wells, and a caravan's range was set by the distance an animal could go between water. To the south lies the <span class="kt">Sahel</span>, the semi-arid belt where the desert meets the savanna, and it is there that the trading cities sit: at the point where a camel caravan can go no further south comfortably and river or human transport takes over.` },
            { p: `The trade existed because of an almost perfect complementarity. West Africa had gold, from the Bambuk and Bure fields, and lacked salt, which people in a hot climate need and which is not available locally. The Sahara had salt, mined in slabs at Taghaza and elsewhere. North Africa and the Mediterranean wanted gold, badly enough that West African gold underwrote coinage far beyond the region. Two regions, each with a surplus of exactly what the other lacked, and a desert in between.` }
          ]
        },
        {
          heading: 'How it worked: camel economics',
          blocks: [
            { p: `The dromedary is the mechanism. It carries a load in the range of a couple of hundred kilograms, covers reasonable distances daily, tolerates extreme heat, and can go for several days between waterings, drinking enormous quantities when it does. Combine that with a saddle design allowing heavy loads to be carried securely, and a crossing that had been marginal becomes an ordinary commercial operation, run in caravans of hundreds or thousands of animals, guided by <span class="kt">Berber</span> specialists who knew the wells.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Sahara was impassable before the camel. It was crossed earlier, by horse and ox-drawn vehicles and by the Garamantes of the Libyan Fezzan, whose desert oasis state ran on irrigation and on trade. What changed with the camel and its saddle, adopted in North Africa in roughly the early centuries CE, was not possibility but economics: bulk loads over long dry stages at a cost that made regular commerce worth doing. The precise dating of the saddle's arrival is debated, so "from about the early centuries CE" is safer than a single year. The transformation into a high-volume network came later still, once the Arab conquest of North Africa had connected the northern ends of the routes to the Islamic commercial world.`
            } },
            { p: `Islam supplied the second half of the mechanism, and it is the half students usually miss. Shared commercial law meant a contract made in Sijilmasa was enforceable by a judge in Timbuktu. Arabic literacy meant accounts and letters of credit. Credit instruments meant a merchant could settle a debt across the desert without shipping gold through bandit country. Networks of hospitality and dispute resolution reached the length of the route. That is infrastructure, and it is why Foundations 2 and Foundations 4 are the same argument seen from two directions.` }
          ]
        },
        {
          heading: 'The places, and what each was for',
          blocks: [
            { p: `<b>Sijilmasa</b>, at the northern edge of the desert in what is now Morocco, was the northern gateway. Its function was assembly and departure: caravans formed there, goods from the Mediterranean were loaded, and gold arriving from the south entered the Mediterranean economy, some of it minted into coin.` },
            { p: `<b>Taghaza</b>, deep in the desert, was a salt-mining settlement rather than a market. Its function was production of the one commodity that made the southbound leg profitable, cut into slabs and carried by camel, in a place so inhospitable that buildings were reportedly made of salt because there was nothing else.` },
            { p: `<b>Awdaghust</b> and later <b>Walata</b> were southern desert-edge towns. Their function was the transfer point where the desert crossing ended, animals were exchanged, and Saharan merchants met Sahelian ones.` },
            { p: `<b>Timbuktu</b> and <b>Gao</b> sat on or near the Niger Bend. Their function was the junction of two different transport systems: camel caravans from the north met river transport on the Niger, which reached deep into West Africa. That is why Timbuktu became a scholarly centre as well as a commercial one. A place where merchants must stop, wait and transfer is a place where books, students and teachers accumulate.` },
            { p: `<b>Koumbi Saleh</b>, the probable capital of Ghana, was the political control point at the southern end during that empire's height, and the archaeology there matches the description of a divided capital that Foundations 2 uses for its syncretism case.` }
          ]
        },
        {
          heading: 'Who got rich',
          blocks: [
            { p: `The West African states did, by taxing the ends of the routes rather than by mining. The <span class="kt">Ghana Empire</span>, at its height from roughly the eighth to the eleventh centuries CE, levied duties on salt entering and gold leaving, and Arabic writers describe a king with enormous quantities of gold. Critically, the rulers did not control the goldfields themselves, and by some accounts deliberately kept the mines' location obscure. Controlling the exchange was more profitable and more durable than controlling the production.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `You will meet the story of the silent trade: gold traders and salt traders who never met, leaving goods on a riverbank and withdrawing until the other side left an acceptable amount beside it. Herodotus tells a version of it about Carthaginians on the African coast more than a thousand years before this trade existed, and Arabic writers repeat it about West Africa afterwards. That pattern, the same striking anecdote reappearing across centuries and applied to whatever lies beyond the reporter's knowledge, is a warning label. Some silent exchange may well have occurred. What the story mainly documents is that outsiders did not know how the gold was obtained, which is consistent with everything else we know: keeping the source obscure was in the interest of everyone between it and the Mediterranean.`
            } },
            { p: `Mali followed the same model at greater scale from the thirteenth century, and Mansa Musa's pilgrimage in <span class="num">1324 CE</span> is the moment the rest of the world noticed: he traveled with a caravan carrying so much gold that his spending in Cairo was remembered as having disturbed its value for years. That is the trans-Saharan trade converted into diplomatic visibility, and the Catalan Atlas of <span class="num">1375</span> put him on a map of the world holding a gold nugget as a result.` }
          ]
        }
      ],
      useThis: {
        tool: `The camel plus Islamic commercial infrastructure. <em>The mechanism has two halves: camel physiology and saddle design made bulk loads across long dry stages economical, and shared contract law, Arabic literacy and credit instruments made an agreement enforceable and a debt settleable across five thousand kilometres, so the desert became a corridor rather than a barrier.</em>`,
        limit: `Enslaved people were a major northbound commodity for centuries, alongside gold; see section 08. And the wealth of Ghana and Mali rested on taxing an exchange they did not produce, which made them vulnerable to any shift in the routes.`,
        comparison: `Against the <em>Indian Ocean</em> on what makes a hub: both networks made their richest cities out of position rather than production, but one held a strait and the other held the point where camel transport met a river.`
      },
      terms: [
        ['Sahel', 'The semi-arid belt between the Sahara and the savanna, where the trading cities of West Africa sat.'],
        ['Ghana Empire', 'The West African state, at its height c. the 8th to 11th centuries CE, that taxed salt entering and gold leaving.'],
        ['Sijilmasa', 'The northern gateway city where trans-Saharan caravans formed and West African gold entered the Mediterranean economy.'],
        ['Taghaza', 'A Saharan salt-mining settlement supplying the commodity that made the southbound leg profitable.'],
        ['Timbuktu', 'A Niger Bend city where camel caravans met river transport, and which became a centre of scholarship as a result.'],
        ['Berber', 'North African and Saharan peoples whose knowledge of wells and routes made them the specialists of the desert crossing.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'disease',
      num: '04',
      accent: 'oxide',
      name: 'What Moved: Disease',
      navLabel: 'Disease',
      dates: 'The Plague of Justinian from 541 CE &nbsp;·&nbsp; Egypt, Constantinople, the Mediterranean',
      thesis: `Disease is the cargo nobody loaded and nobody could refuse, and it is the clearest proof that a trade network is a biological system as well as a commercial one. The infrastructure that fed a city is the infrastructure that infected it.`,
      parts: [
        {
          heading: 'What moved, and how',
          blocks: [
            { p: `The pathogen was <em>Yersinia pestis</em>, the bacterium of bubonic plague. Its ordinary hosts are rodents, and it passes to humans through fleas. That is a transmission chain that cannot cross a desert on its own and does not walk anywhere. It travels in cargo: in grain, in cloth, in the holds of ships, inside the rats that live off stored food.` },
            { p: `The Plague of Justinian reached Constantinople in <span class="num">541 to 542 CE</span> and it arrived by the most ordinary route imaginable. Egypt supplied the capital's grain. Grain ships carried rats, rats carried fleas, fleas carried the bacterium, and the vessels docked at the largest city in the eastern Mediterranean. From there it spread along the shipping lanes and the roads through the empire and beyond. Genetic work on plague victims' remains has since confirmed the pathogen and pointed to origins further east, which means the chain plausibly ran back along the trade routes into Asia.` }
          ]
        },
        {
          heading: 'What changed',
          blocks: [
            { p: `Contemporaries described catastrophe: mass graves, a paralysed city, an emperor who fell ill and survived. The plague returned in waves for roughly two centuries. It arrived during Justinian's campaign to reconquer the western Mediterranean, and it is conventionally cited as one reason that project ran out of money and men.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `Be careful with the numbers here. Figures like "25 to 50 million dead" descend from ancient authors, especially Procopius, who wrote of ten thousand deaths a day in Constantinople, a figure produced by a writer with rhetorical purposes and no way of counting. A substantial recent literature has argued that the maximalist picture is not supported by the other evidence: papyri, coinage, building activity, pollen records and burial patterns show less disruption than a demographic collapse of that scale would produce. Other historians defend the older view. The safe sentence for an essay is that the Plague of Justinian was a major mortality event whose scale is genuinely disputed by historians, and then to make your argument about the <em>mechanism</em> of transmission, which nobody disputes.`
            } },
            { p: `The mechanism is the transferable point, and it is why this section exists. Any network that reliably moves grain and cloth between dense settlements will eventually move a pathogen, and the larger and more reliable the network, the faster it does so. Hold that idea in place and the Black Death travelling Mongol-era routes in the fourteenth century and the catastrophe in the Americas after 1492 stop being separate stories and become the same mechanism running again at greater scale.` },
            { p: `It is worth being precise about what makes a network dangerous, because the answer is not simply distance. Three conditions have to line up. There must be dense settlements at both ends, because a pathogen needs new hosts faster than it kills the ones it has. There must be regular bulk movement of the kind of cargo that shelters a vector, which means food and cloth rather than gems. And the journey must be short enough that the chain of infection survives it, which is why sea routes carrying grain were more dangerous than caravan routes carrying silk. Every one of those conditions was met in the Mediterranean of the sixth century, and each one intensified in the centuries that followed.` },
            { p: `The other half of the exchange is slower and easier to miss. Populations repeatedly exposed to a pathogen acquire some resistance to it, so a long-connected world is one where childhood illness replaces catastrophe. That is a genuine benefit of connection, purchased at a terrible price over centuries, and it is why the absence of an Afro-Eurasian disease pool in the Americas mattered so much after 1492. Foundations 5 takes up that point directly.` }
          ]
        }
      ],
      useThis: {
        tool: `Grain shipping as a disease vector. <em>The mechanism is that rats live in stored grain and fleas live on rats, so a scheduled bulk food supply between dense cities is also a scheduled pathogen delivery, which is how plague reached Constantinople in 541 CE on the Egyptian grain fleet.</em>`,
        limit: `The mortality figures are disputed, so argue the mechanism and hedge the numbers. Overstating a death toll is exactly the sort of claim a reader can check.`,
        comparison: `Against <em>crops</em> in section 06: two biological transfers along the same routes, one raising the population ceiling and one cutting the population, which together make trade networks a demographic force rather than only an economic one.`
      },
      terms: [
        ['Plague of Justinian', 'The pandemic that reached Constantinople in 541 CE and recurred for roughly two centuries.'],
        ['Vector', 'The organism that carries a pathogen between hosts; here the flea, and behind it the rat and the grain ship.'],
        ['Zoonotic disease', 'A disease whose reservoir is an animal population and which crosses into humans.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'paper',
      num: '05',
      accent: 'gold',
      name: 'What Moved: Technology',
      navLabel: 'Technology',
      dates: 'Paper reaches Samarkand and Baghdad in the 8th century CE &nbsp;·&nbsp; China to the Islamic world to Europe',
      thesis: `Paper is the best technology-transfer case in this unit because it did not merely add a product. It lowered the cost of storing and moving information, and that reorganized scholarship, administration and commerce everywhere it arrived.`,
      parts: [
        {
          heading: 'What moved, and how',
          blocks: [
            { p: `Paper was made in China from the early centuries CE, from mulberry bark, hemp and rags beaten into a pulp, lifted on a screen and dried. In the eighth century CE, paper mills appear in the Islamic world: Samarkand becomes known for its paper, and a mill is recorded at Baghdad late in the century, after which the Abbasid administration and its scholars switch to paper on a large scale.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `The familiar story is that Chinese papermakers taken prisoner at the <span class="kt">Battle of Talas</span> in <span class="num">751 CE</span>, where an Abbasid army defeated a Tang one in Central Asia, were put to work making paper in Samarkand. Treat it carefully. The battle happened, the mills appear in the right places at roughly the right time, and paper is unquestionably a Chinese technology that reached the Islamic world in this period. But the captured-craftsmen account comes from al-Tha&rsquo;alibi, writing about two and a half centuries later, and paper was already known in Central Asia before the battle, so many historians treat the story as a neat explanation attached after the fact to a transfer that was probably more gradual. In an essay: assert the transfer, which is solid, and hedge the battle as the traditional account rather than a documented cause. The BeSurreal scenario for this lesson puts you inside that story, and knowing what kind of story it is makes it more useful, not less.`
            } }
          ]
        },
        {
          heading: 'What changed',
          blocks: [
            { p: `Papyrus grew only in Egypt and parchment required animal skins, which made a large book an expensive object. Paper can be made from rags and plant fibre almost anywhere there is water, and it is cheap. The consequence is a collapse in the cost of the written word, and everything downstream of that: an administration that can keep more records, a legal system that can circulate its texts, a commercial world that can move contracts and letters of credit, and libraries and bookshops on a scale the ancient Mediterranean had not seen. The translation movement in ninth-century Baghdad, which turned Greek, Persian and Indian scholarship into Arabic, was carried out in a city that had just acquired cheap writing material, and the two facts are usually connected for good reason.` },
            { p: `Paper then continued west, reaching Islamic Spain and Sicily and from there Latin Europe by roughly the twelfth century, where it eventually made movable-type printing economically worthwhile. A technology that had crossed Eurasia by relay took several centuries to travel and reorganized intellectual life at each stop.` },
            { p: `Paper is the clearest case but not the only one, and having a second example ready is worth a great deal in an essay. The decimal place-value numerals developed in India reached the Islamic world by the ninth century, where al-Khwarizmi wrote the treatise on calculating with them whose Latin translation eventually gave Europe both the numerals and the word algorithm. The magnetic compass, described in China for navigation by the Song period, appears in Mediterranean and Indian Ocean use afterwards. Cotton cultivation and the techniques for spinning and weaving it moved west out of South Asia. Sugar cultivation and refining traveled the same way. In every case the transfer took generations, arrived through intermediaries, and required an institution at the destination that could use it.` },
            { p: `The general point, which is what a question is really after: a technology transfer matters in proportion to how many other activities it makes cheaper. Paper is not a luxury good that a few rich people acquired. It is an input into administration, law, scholarship and trade all at once, which is why it belongs in a lesson about networks rather than in a list of inventions.` }
          ]
        }
      ],
      useThis: {
        tool: `Cheap writing material as an input to everything else. <em>The mechanism is that paper can be made from rags and plant fibre anywhere there is water, unlike papyrus which grew in Egypt and parchment which required herds, so the cost of recording and moving information fell sharply and administration, law, commerce and scholarship all expanded on the same technology.</em>`,
        limit: `The Talas story is late and single-sourced. Assert the transfer, date the mills, and label the battle as the traditional account rather than a proven cause.`,
        comparison: `Against <em>religion</em> in section 07: both moved with people rather than as objects, and both required an institution at the far end, a mill or a monastery, before they took root.`
      },
      terms: [
        ['Battle of Talas', 'The 751 CE clash in Central Asia between Abbasid and Tang forces, traditionally credited with transferring papermaking westward.'],
        ['Technology transfer', 'The movement of productive knowledge between societies through trade, conflict, migration or deliberate adoption.'],
        ['Translation movement', 'The ninth-century Baghdad effort to render Greek, Persian and Indian scholarship into Arabic, carried out as paper became available.']
      ]
    },

    // ── 06 ────────────────────────────────────────────────────────────────────
    {
      id: 'crops',
      num: '06',
      accent: 'rust',
      name: 'What Moved: Crops',
      navLabel: 'Crops',
      dates: 'Champa rice in Song China from c. 1012 CE &nbsp;·&nbsp; Vietnam to the Yangtze, and the Islamic world',
      thesis: `A crop transfer is the slowest-looking cargo in this chapter and the one with the largest long-run consequences, because a plant that ripens faster raises the number of people a given piece of land can feed.`,
      parts: [
        {
          heading: 'What moved, and how',
          blocks: [
            { p: `<span class="kt">Champa rice</span> came from the kingdom of Champa in what is now central Vietnam, reaching China through tribute and trade contact. Its useful property was speed: it matured far faster than the varieties then grown in the Yangtze region and tolerated drier conditions, which meant a field could produce two harvests in a year instead of one, a practice called <span class="kt">double-cropping</span>, and that land previously too dry or too high could be brought into cultivation.` },
            { p: `The transfer was not accidental and that is the interesting part. Song officials identified the variety, obtained seed, and distributed it deliberately in the early eleventh century, with the state promoting the new rice in the lower Yangtze. This is a government running an agricultural extension programme a thousand years ago, and it shows that "trade networks moved crops" sometimes means a state noticed something useful in a neighbour's fields and went to get it.` },
            { p: `The same process ran across the Islamic world in the preceding centuries, as sugarcane, citrus, cotton, rice, bananas and other crops spread westward from South and Southeast Asia into Persia, Egypt, North Africa and Iberia, carried by the movement of people and goods through a connected zone and supported by irrigation techniques that traveled with them. Historians debate how fast and how transformative that diffusion was, so describe it as a well-attested spread of crops and techniques rather than as a single agricultural revolution.` },
            { p: `Two details make that spread concrete rather than a list. Several of these crops are summer crops in a Mediterranean climate whose rain falls in winter, so growing them required irrigation and therefore a body of technique and law about water rights, which traveled with the seeds. And sugarcane is not food until it is processed, so its spread carried a small industry with it: presses, boiling houses and, in several places, the brutal labour regimes that plantation sugar would later make notorious on a far larger scale in the Atlantic. A crop transfer is never only botanical.` },
            { p: `Bananas are the case that reaches furthest, because they moved the other way. A Southeast Asian domesticate, the banana appears in Africa well before this period, almost certainly carried across the Indian Ocean, and it grew where African grains did not, in wet forested country. Historians have argued that it helped support agricultural settlement in parts of Central and West Africa, though the dating and the scale are actively debated. It is a good reminder that the Indian Ocean was moving crops in both directions long before anyone wrote about it.` }
          ]
        },
        {
          heading: 'What changed',
          blocks: [
            { p: `Song China's population grew very substantially across this period, plausibly passing one hundred million, and that growth is the base on which the rest of the Song story stands: cities of a size unmatched anywhere, a commercialized countryside producing for market, and a state funded partly by taxing that commerce. More food per hectare means more people, more people not required for farming, more artisans and merchants and officials, and more demand for everything moving through the Indian Ocean.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not let Champa rice do all the work. Song population growth and the commercial expansion around it had multiple causes running together: the settlement of the wetter and more productive south, improved water control and field systems, iron tools, printing, coinage and paper money, and maritime customs revenue. Champa rice is a real and specific cause and it is the one you can name precisely, so name it, and then say "alongside" rather than "because of," which is also a small demonstration of the complexity skill the Skill Builder is asking for.`
            } },
            { p: `Notice the shape this gives to a causal argument. A crop moves along a network for commercial reasons, a state promotes it for fiscal reasons, and the result two centuries later is a population and an urban economy that in turn generate more trade. Networks feed the things that feed the networks.` }
          ]
        }
      ],
      useThis: {
        tool: `Champa rice and double-cropping. <em>The mechanism is a variety that ripened in a fraction of the time and tolerated drier ground, so one field yielded two harvests a year and marginal land came into use, which raised the food ceiling and with it the number of people who could live off farming and the number who did not have to.</em>`,
        limit: `It is one cause among several for Song growth, and saying so is stronger than claiming it alone. For the wider Islamic crop diffusion, the pace and scale are debated.`,
        comparison: `Against <em>disease</em> in section 04: the same networks carried a biological transfer that raised the population ceiling and one that cut the population, which is the sharpest evidence that these systems were not simply engines of prosperity.`
      },
      terms: [
        ['Champa rice', 'A fast-ripening, drought-tolerant rice variety from Vietnam, promoted by Song officials in the early 11th century CE.'],
        ['Double-cropping', 'Harvesting two crops from the same field in one year, made possible by a faster-maturing variety.'],
        ['Crop diffusion', 'The spread of cultivated plants and the techniques for growing them between regions along trade and migration routes.']
      ]
    },

    // ── 07 ────────────────────────────────────────────────────────────────────
    {
      id: 'religion-people',
      num: '07',
      accent: 'iron',
      name: 'What Moved: Religion and People',
      navLabel: 'Religion and people',
      dates: 'Buddhism into China from the 1st century CE; Islam into Southeast Asia from the 13th &nbsp;·&nbsp; both by merchant',
      thesis: `Religions moved along trade routes because merchants moved along trade routes, and a merchant is a person with beliefs, money to donate and a reason to want institutions at the far end of a dangerous journey.`,
      parts: [
        {
          heading: 'What moved, and how',
          blocks: [
            { p: `Buddhism reached China along the Silk Roads in the first centuries CE, carried by monks who traveled with caravans and by merchants who funded monasteries at the places they stopped. The evidence is physical and it is everywhere on the route: the Mogao caves at Dunhuang, hundreds of decorated cave temples, were funded in large part by merchants, and Silk Road oasis towns became monastery towns and translation centres. Foundations 2 explains why the mechanism worked, which is that giving to the monastic community generated merit and that a monastery could be founded anywhere.` },
            { p: `Islam reached Southeast Asia by the same route in reverse and several centuries later, and by the same means. Muslim merchants had been trading in the region for a long time before any local ruler converted; when rulers did convert, from the thirteenth century onward at ports such as Samudra-Pasai on Sumatra, they acquired access to a commercial community, a shared body of contract law, Arabic literacy and a place in the hajj network. No conquest was involved anywhere in that process.` },
            { p: `People moved too, and not only as traders. Pilgrims, envoys, scholars, translators, sailors and craftsmen were all in motion, and the permanent foreign quarters at Chang'an, Quanzhou, Calicut and Kilwa are the residue. Merchant diasporas, the Sogdians on the Silk Roads, Jewish traders documented in the Cairo Geniza, Armenians and later many others, worked precisely because a community with common law and kin at both ends of a route can enforce an agreement across a distance no state governed.` }
          ]
        },
        {
          heading: 'What changed',
          blocks: [
            { p: `Whole regions changed religion without changing rulers, or changed rulers because of religion. Southeast Asia's political map by c.1500 is largely the product of merchant-borne conversion. Chinese Buddhism became a mass institution with enormous landholdings, which is why the Tang state eventually moved against it in <span class="num">845 CE</span>. And the movement was never one-directional: Buddhism traveled east while Islam traveled south and east on the same water, and the Church of the East traveled into Central Asia and China along the same overland stages.` },
            { p: `Language changed with them, and it is the most underused evidence in this topic. Sogdian became a commercial lingua franca across Central Asia because the people running the middle of the route spoke it. Arabic became the language of contracts and scholarship across the western half of the system. Swahili is a Bantu language of the East African coast carrying a substantial layer of Arabic vocabulary, which is what centuries of monsoon-season residence by foreign merchants looks like when it is written into a grammar. Malay played a similar role in the straits. If you want one piece of evidence that a trade network reshaped a society rather than merely visiting it, a language is hard to beat, because nobody adopts vocabulary for a single transaction.` },
            { p: `The broader change is harder to see and more important. A network that moves people creates places where people of different traditions live alongside one another permanently, so translation, intermarriage, hybrid languages and religious syncretism follow the trade with great regularity. That is the connection between this lesson and Foundations 2, and a student who states it explicitly is making a synthesis move rather than a list.` }
          ]
        }
      ],
      useThis: {
        tool: `Merchant patronage of religious institutions. <em>The mechanism is that traders on a dangerous route had both a motive to seek divine protection and the capital to fund it, so monasteries, mosques and their supporting institutions appeared at exactly the points where merchants stopped, which is why religious diffusion follows commercial geography so closely.</em>`,
        limit: `Conversion was often first a ruler's decision made for commercial advantage, so a converted port is not evidence of a converted hinterland. Say which one you mean.`,
        comparison: `Against <em>technology</em> in section 05: both needed an institution at the destination, a mill or a monastery, to take root, which is why neither one arrived as a single event.`
      },
      terms: [
        ['Merchant diaspora', 'A dispersed community of traders bound by kinship, law and language, able to enforce agreements across distances no state governed.'],
        ['Merit-making', 'Donation to a religious institution that generates spiritual credit for the giver, and the economic engine behind Buddhist monastic wealth.'],
        ['Samudra-Pasai', 'The earliest well-documented Muslim state in Southeast Asia, on Sumatra, established through commerce rather than conquest.'],
        ['Mogao Caves', 'The merchant-funded Buddhist cave temples at Dunhuang, decorated over roughly a thousand years.']
      ]
    },

    // ── 08 ────────────────────────────────────────────────────────────────────
    {
      id: 'who-paid',
      num: '08',
      accent: 'oxide',
      name: 'Who Paid',
      navLabel: 'Who paid',
      dates: 'Across all three networks &nbsp;·&nbsp; the cost side of the ledger',
      thesis: `Every section above is written from the point of view of what moved and who profited. This one is the other column of the ledger, and you need it, because an argument that trade networks transformed the world is only honest if it says who bore the cost of the transformation.`,
      parts: [
        {
          heading: 'People as cargo',
          blocks: [
            { p: `Enslaved people were traded on all three networks throughout this period. They moved north across the Sahara from West Africa in numbers that, over the centuries this course covers and beyond, were very large, though estimates for the pre-1200 period are uncertain and rest on fragmentary evidence. They moved through the Indian Ocean from East Africa and from the Horn into Arabia, Persia and India. They moved along the Silk Roads and out of the steppe, and Central Asian slave soldiers became a standing institution in several Islamic states. Enslaved people were among the goods that Sogdian and other merchants relayed.` },
            { p: `This is not a footnote to the trade. It is one of the commodities the trade existed to move, and it is why the sentence "trade networks connected the world" needs a second clause. When a question asks about the effects of a network on a society, the removal of people from that society is one of the effects, and naming it is a mark of a serious answer rather than a moral aside.` }
          ]
        },
        {
          heading: 'Tolls, risk and who took it',
          blocks: [
            { p: `Every chokepoint in this chapter was a place where someone took a cut without adding anything to the goods. Srivijaya taxed the Strait, Ghana taxed salt and gold at the desert's edge, the Song taxed cargo at Quanzhou, and each transfer in a relay added a margin. The cost fell on the final buyer, which is why a Roman paid a fortune for silk that had left China cheap.` },
            { p: `Risk fell hardest on the people physically moving the goods. Caravans were robbed, ships were wrecked or seized, and a merchant who lost a cargo lost everything unless he had partners. That is precisely why the commercial institutions in this chapter exist: partnership contracts spread a loss across investors, credit instruments meant a robbery did not cost you the gold as well as the goods, and caravanserais and protected harbours were sold as services. Institutions are what a network builds to survive its own dangers, and they are as much a part of the answer as the wind and the camel.` },
            { p: `And the networks were fragile in a way the maps hide. A route lasted only as long as the states along it kept order, so trade contracted when powers collapsed and expanded when a large state secured a long stretch. Nothing in this chapter was permanent infrastructure. It was a set of arrangements that had to be renewed, and it failed regularly.` }
          ]
        }
      ],
      useThis: {
        tool: `Commercial institutions as risk management. <em>The mechanism is that partnership contracts, credit instruments, caravanserais and protected harbours all exist because long-distance trade was dangerous and expensive, so the network's institutions are best read as responses to specific risks rather than as evidence of prosperity by themselves.</em>`,
        limit: `Enslaved people were a traded commodity on all three networks. Any claim that trade networks were engines of prosperity has to be written so that this sentence fits inside it.`,
        comparison: `Against sections 01 to 03 as a whole: those explain who got rich from position, and this one explains at whose expense, which is the pairing an argumentation question is looking for.`
      },
      terms: [
        ['Slave trade', 'The traffic in enslaved people, conducted across all three networks, and one of the commodities the trade existed to move.'],
        ['Commercial partnership', 'An agreement funding a traveling merchant with an investor&rsquo;s capital and dividing profit and loss, which spread the risk of a lost cargo.'],
        ['Toll', 'A payment extracted for passage at a chokepoint, adding to the price without adding to the goods.']
      ]
    }
  ],

  closing: {
    navLabel: 'Building your answer',
    heading: 'Building an Answer That Scores',
    intro: `Your three questions ask for a mechanism, a change with a continuity beside it, and an argument with two defensible sides. The single most common way to lose credit on all three is naming a feature instead of explaining how it worked: "monsoon winds" is a feature, and "the wind reverses in June and again in November, so a voyage took a year and merchants overwintered in foreign ports" is a mechanism.`,
    pairs: [
      {
        category: 'Question 1: Causation',
        title: 'A feature is not a mechanism',
        body: `Pick your network, then push one step past the feature. <em>Indian Ocean:</em> the monsoon does not merely "help ships sail." It blows southwest from June to September and northeast from November to March, which fixes a departure and a return months apart, forces merchants to live in foreign ports for a season, and thereby produces the diaspora communities, conversions and hybrid cultures that make this network historically distinctive. <em>Trans-Saharan:</em> the camel plus its saddle did not make the desert crossable, it made the crossing cheap enough to repeat, and Islamic contract law made a deal at one end enforceable at the other. <em>Silk Roads:</em> relay structure raised prices at every transfer, which restricted cargo to high-value goods and put strangers in contact at every junction.`
      },
      {
        category: 'Question 2: Continuity and change',
        title: 'Name the change, then hold something still',
        body: `Each of the three changes offered is in this chapter with its mechanism. <em>Paper after Talas:</em> the change is a collapse in the cost of writing, which expanded administration, law and scholarship together, and the continuity is that paper still moved by relay and took centuries to reach Europe, exactly like every other cargo. <em>Champa rice:</em> the change is two harvests a year and a higher population ceiling, and the continuity is that the Yangtze region was already China's agricultural heartland, so the new rice intensified an advantage rather than creating one. <em>The camel saddle:</em> the change is regular bulk crossing of the Sahara, and the continuity is that the desert had been crossed before and the same gold and salt complementarity was already driving the exchange.`
      },
      {
        category: 'Question 3: Argumentation',
        title: 'Were the non-goods the most important cargo?',
        body: `Argue it properly by giving the other side real weight. <b>For the non-goods:</b> paper reorganized scholarship and administration across the Islamic world and eventually Europe; Champa rice raised the number of people China could feed; plague reached Constantinople on the grain fleet; Buddhism and Islam each crossed a continent by merchant rather than by army. <b>Against:</b> nobody assembled a caravan in order to move an idea. Goods were the reason the routes existed, the reason anyone paid for a caravanserai or a harbour, and the reason states garrisoned deserts. Gold funded West African empires, tolls funded Srivijaya, customs revenue funded the Song. Remove the goods and the non-goods have nothing to travel on. The strongest answers usually make the dependence explicit: the non-goods had the larger long-run consequences precisely because the goods were profitable enough to keep the system running.`
      },
      {
        category: 'Category: what made a place rich',
        title: 'Position against production',
        body: `If you need one analytical category that works across all three networks, use this one. Kilwa did not mine gold, Malacca grew no spices, Timbuktu had no goldfields, Samarkand produced little of what passed through it. Each was rich because traffic had to pass through, or stop, or change hands there. Then ask the follow-up question, which is what happens to such a place when the route moves, and you have a causal argument ready for the Portuguese rounding Africa in Unit 4.`
      }
    ]
  }
};
