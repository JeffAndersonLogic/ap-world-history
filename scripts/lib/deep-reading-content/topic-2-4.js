'use strict';

/**
 * Topic 2.4, Trans-Saharan Trade Routes: the deep reading.
 *
 * Why this exists, and how it differs from the Topic 1.5 chapter. That chapter
 * is about state building in Africa: how Mali, the Hausa cities, Great Zimbabwe,
 * the Swahili coast and Ethiopia each built power, with the trade as one input
 * among several. This chapter is about the trade itself, which is what 2.4's
 * success criteria ask for: the camel's physiology and the redesigned saddle,
 * the caravan and the oases, the gold-salt exchange and why each side needed
 * what the other had, and then Mali, Mansa Musa's hajj, Timbuktu and the spread
 * of Islam through merchant and scholarly networks.
 *
 * The organizing idea is that this is the hardest of the three networks to
 * operate and the easiest to explain, because everything follows from one
 * constraint: there is no water for two months. The camel, the caravan's size,
 * the timing of departures, the location of every city, the cost structure and
 * the goods list are all answers to that single fact.
 *
 * Three things carried on purpose:
 *
 *   1. Salt is not a seasoning here. In a hot climate where people sweat
 *      constantly and the local geology supplies almost none, dietary salt is a
 *      physiological requirement, which is why a rock could be traded against
 *      gold without anyone being fooled.
 *   2. The "silent trade" story is a literary commonplace repeated by writers
 *      who had not seen it, and treating it as reportage is the standard error.
 *   3. The trade in enslaved people was a major component of this system, not a
 *      footnote to it, and the salt mines themselves ran on enslaved labor.
 */

module.exports = {
  topicKey: 't2-4',
  slug: 'topic-2-4-trans-saharan',
  sourceFile: 'deep-reading-topic-2-4-trans-saharan.html',
  lessonFile: 'lesson-2-4-trans-saharan.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 2.4: Two Months Without Water',
  eyebrow: 'Topic 2.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Two Months Without <em>Water</em>',
  deck: `Every feature of the trans-Saharan trade is an answer to one problem: the desert is wider than a person can cross unaided, and the profits on the far side were worth solving it for. This chapter works through the animal, the caravan, the two commodities, the cities that grew where the routes met, and the religion that arrived as part of the business.`,
  meta: ['Five sections', 'One constraint, five consequences', 'Read alongside the First & 10'],
  footerNote: 'Topic 2.4 &nbsp;·&nbsp; Two Months Without Water &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The Topic 1.5 chapter covers Mali, the Hausa city-states and the other African states as states. This one covers the trade that funded several of them, from the animal upward. Sections 01 and 02 are the machinery, 03 and 04 are the consequences, and 05 is the part of the system that is usually left out of the answer.`,
    steps: [
      `<b>01 The desert and the camel:</b> the physiology, the saddle, and how a caravan was organized.`,
      `<b>02 Gold and salt:</b> where each came from, and why each side genuinely needed the other's.`,
      `<b>03 The caravan cities:</b> Sijilmasa, Taghaza, Walata, Timbuktu, Gao, and who took a cut.`,
      `<b>04 Islam and the trade:</b> merchants, contracts, scholars, and Mansa Musa's hajj as foreign policy.`,
      `<b>05 What the system cost:</b> enslaved miners, enslaved exports, and where the gold went next.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'camel',
      num: '01',
      accent: 'gold',
      name: 'The Desert, and the Animal That Solved It',
      navLabel: 'The desert and the camel',
      dates: 'c. 300 to 1450 &nbsp;·&nbsp; The camel, the saddle, the caravan',
      thesis: `The Sahara is roughly the size of the United States and for most of its width supplies nothing a person can drink. What made it crossable was not courage but a specific animal with specific physiology, plus a piece of equipment that let you load it properly.`,
      parts: [
        {
          heading: 'What the camel actually does',
          blocks: [
            { p: `The one-humped dromedary of North Africa and Arabia is not a water tank; the hump stores fat, not liquid. What it has is a set of adaptations that together make a long waterless march survivable. It tolerates losing a quarter or more of its body weight in water, a level of dehydration that would kill most mammals, then rehydrates enormously and rapidly when it does reach a well. Its body temperature rises through the day rather than being held constant by sweating, so it loses far less water to cooling. Its kidneys concentrate urine, its nostrils recapture moisture from exhaled breath, and it eats thorn scrub and dry vegetation that would not sustain a horse or an ox.` },
            { p: `The practical result is an animal that can carry roughly one hundred and fifty to two hundred kilograms, cover something like forty kilometers a day, and go for days between waterings. That converts an impassable barrier into a crossing of weeks: the great routes from the Maghreb to the Sahel took on the order of two months, timed to leave in the cooler part of the year and organized around known wells.` },
            { p: `The second half of the technology is the <span class="kt">saddle</span>. Different regional designs solved different problems, but the essential development was a frame that sat stably on the animal and distributed a heavy load or a rider's weight without injuring it. That sounds trivial and it is not: it is the difference between an animal that can be used for occasional transport and one that can be loaded to capacity, repeatedly, as a commercial vehicle. When the success criteria ask for the technology that made the Sahara viable, the answer is the camel and the saddle together, and saying both is what marks a precise answer.` }
          ]
        },
        {
          heading: 'The caravan as an organization',
          blocks: [
            { p: `Crossings were made in large caravans, sometimes of hundreds and by some accounts thousands of camels, and the size was a safety requirement rather than a boast. A big caravan can absorb the loss of animals, defend itself against raiders, and justify the expense of the specialists it needs.` },
            { p: `The indispensable specialist was the guide, usually a Berber of the desert peoples whose knowledge of the wells, the terrain and the seasonal conditions of a particular stretch was the caravan's actual life insurance. Desert peoples also supplied protection, and were paid for it in a relationship that ran between escort and toll. Alongside them traveled the merchants, drivers, water carriers and, on many crossings, enslaved people who were themselves part of the cargo.` },
            { p: `Everything about the route was dictated by water. The stops were the wells and the oases, so the map of the trade is really a map of aquifers, and a settlement that sat on reliable water at a route junction could tax, provision and house a traffic it did not create. That is the same logic as the Silk Road oasis cities, and it is why the two networks produced such similar-looking towns in such different landscapes.` }
          ]
        }
      ],
      useThis: {
        tool: `The camel and the saddle together. <em>The mechanism is that the dromedary's tolerance of extreme dehydration, its temperature range and its diet let it cross waterless ground no other pack animal could, while a stable saddle frame let it be loaded to capacity without injury, which is what converts a surviving animal into a commercial vehicle.</em>`,
        limit: `The whole system remained hostage to water. Routes ran between wells, seasons dictated departures, and a dry well or a raided oasis could destroy a caravan outright.`,
        comparison: `Against the <em>Indian Ocean</em>: the monsoon is free energy that a ship harnesses, while the Sahara supplies nothing and every crossing is a race against a stored resource. That is why maritime trade could carry rice and this trade could carry only gold, salt, cloth and people.`
      },
      terms: [
        ['Dromedary', 'The one-humped camel of North Africa and Arabia, whose tolerance of dehydration and poor forage made the desert crossing possible.'],
        ['Saddle', 'The frame that let a camel be loaded to its full capacity without injury, the second half of the technology behind trans-Saharan trade.'],
        ['Caravan', 'A large organized company of camels, merchants, drivers and a paid guide, sized for defense and for absorbing losses.'],
        ['Oasis', 'A watered place in the desert, and therefore a compulsory stop where a settlement could provision and tax traffic it did not produce.'],
        ['Berber guide', 'The desert specialist whose knowledge of wells and terrain for a given stretch was the practical condition of a safe crossing.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'gold-salt',
      num: '02',
      accent: 'rust',
      name: 'Gold and Salt',
      navLabel: 'Gold and salt',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Bambuk, Bure and Taghaza',
      thesis: `Two commodities, moving in opposite directions, each abundant where the other was absent. This is the clearest case of complementary demand in the course, and it is only strange until you understand that in this climate salt is not a flavor.`,
      parts: [
        {
          heading: 'Why salt was worth gold',
          blocks: [
            { p: `Human beings lose salt continuously through sweat, and in a hot climate where people work outdoors that loss is substantial and must be replaced or you become seriously ill. West African savanna and forest regions have very little natural salt: the soils do not supply it, the local diet does not, and there is no coast within reach for most of the interior. The Sahara, by contrast, is the dried bed of ancient seas and contains rock salt in quantity, cut in slabs at desert mines.` },
            { p: `So the exchange is not a curiosity, it is two regions each holding a surplus of something the other physically needed. Gold from the Bambuk and Bure fields near the upper Senegal and Niger rivers, and later from the Akan forest region further south, went north to a Mediterranean and Middle Eastern world that used it for coinage and had almost no domestic source. Salt from mines such as <span class="kt">Taghaza</span> in the deep desert went south to populations who needed it to stay healthy. Each side valued what it lacked, which is the entire economics of the route.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a town built out of its own product',
              html: `Ibn Battuta crossed the Sahara in the <span class="num">1350</span>s and stopped at Taghaza, and his description is memorable because it is so specific: a bleak settlement in the middle of nothing, where the buildings and even the mosque were constructed of slabs of salt, inhabited by enslaved laborers who cut the salt and were fed on dates, camel meat and millet brought in from elsewhere. Nothing grew there. A whole town existed because of a mineral under it, and the food to keep it alive was imported hundreds of miles. That single paragraph tells you more about the trade's economics than a page of generalities about exchange.`
            } }
          ]
        },
        {
          heading: 'How the exchange actually worked',
          blocks: [
            { p: `The trade was a relay, like the Silk Roads. Arab and Berber merchants from North Africa brought goods south across the desert; <span class="kt">Wangara</span> merchants, the Muslim Mande-speaking traders often called Dyula further west and south, carried goods between the Sahelian market towns and the gold-producing regions. Very few individuals traveled the whole chain, and this is why the sources describe the gold fields so vaguely.` },
            { p: `The producers deliberately kept it that way. West African rulers and gold-producing communities did not permit outsiders to reach the mines and did not disclose their locations, which preserved their bargaining position: if you cannot go to the source, you must buy from the people who control access. Malian rulers additionally reserved gold nuggets for the state while allowing gold dust to circulate as currency, a policy that concentrated the largest pieces in royal hands and kept the medium of exchange in circulation.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two errors travel together here. First, gold and salt were not exchanged weight for weight; that phrase appears in textbooks and is a compression of the fact that salt was extremely valuable in the interior, not a recorded exchange rate. Second, the "silent trade," in which one party leaves goods and withdraws and the other leaves gold in response without either seeing the other, is described by a series of writers from antiquity onward, none of whom witnessed it, each repeating an earlier account. Historians treat it as a literary commonplace about the mysterious edge of the known world rather than as reportage. You can mention it as a story that circulated, which is interesting in itself, but do not present it as how the trade was conducted.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Complementary demand. <em>The mechanism is that each region held a surplus of a commodity the other could not produce and physically needed, salt for bodies in a hot climate with no local source, gold for coinage in economies with no domestic deposits, so the exchange required no persuasion and could sustain a two-month desert crossing on both legs of the journey.</em>`,
        limit: `The producers of gold kept their sources closed, which preserved their price and also means the sources describe the fields only at second hand, so our picture of production is weaker than our picture of the trade.`,
        comparison: `Against the <em>Indian Ocean</em> spice trade: cloves and nutmeg grew in a handful of islands and were valuable because they were rare, while salt was valuable because it was necessary. Scarcity and necessity are different engines, and the second one is far more stable.`
      },
      terms: [
        ['Taghaza', 'The Saharan salt mine whose slabs went south by camel, described by Ibn Battuta as a town built of salt and worked by enslaved laborers.'],
        ['Bambuk and Bure', 'The gold-producing regions of the upper Senegal and Niger, whose output funded the Sahelian empires and reached Mediterranean mints.'],
        ['Wangara', 'The Muslim Mande-speaking merchant networks, also known as Dyula, who moved goods between the Sahelian towns and the gold regions.'],
        ['Gold dust', 'The circulating currency of the Malian economy, distinguished from nuggets, which the state reserved for itself.'],
        ['Complementary demand', 'The condition in which two regions each need what the other has in surplus, the strongest possible basis for a durable trade.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'cities',
      num: '03',
      accent: 'iron',
      name: 'The Caravan Cities, and Who Took a Cut',
      navLabel: 'The caravan cities',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Sijilmasa to Gao',
      thesis: `The route made cities the way a river makes a delta. Each one sat where geography forced a stop, and each lived on services and taxes rather than on anything it produced.`,
      parts: [
        {
          heading: 'The chain of stops',
          blocks: [
            { p: `At the northern end sat the assembly points in Morocco and Ifriqiya, of which <span class="kt">Sijilmasa</span> in southern Morocco is the best known: the place where a caravan was organized, financed, provisioned and dispatched, and where the goods coming north were sold into Mediterranean markets. In the middle sat the salt mines and the water stops, Taghaza above all. At the southern edge of the desert lay the Sahelian entrepots where the desert traffic met the river system and the savanna trade: Walata, then Timbuktu, Gao on the Niger, and Djenne upstream in the inland delta.` },
            { p: `<span class="kt">Timbuktu</span> is worth understanding precisely, because students often treat it as a mythical place. It sat a short distance from the Niger, so goods could be transferred between camel and river boat, which is exactly the profile of a transshipment town. That position made it a market, the market made it wealthy, and the wealth funded mosques, scholars and libraries until the city became a center of Islamic learning as well as of commerce. Trade first, then books, and the books were themselves traded: manuscripts were among the most valuable goods brought south across the desert.` }
          ]
        },
        {
          heading: 'Who was paid, and for what',
          blocks: [
            { p: `Four groups took a share, and naming them is a good way to show you understand the system rather than the story. The desert peoples were paid for guiding and for protection, in an arrangement that shaded into tolls. The oasis and mine communities lived on provisioning and on the commodity beneath them. The Sahelian states, Mali most prominently in this period, taxed goods entering and leaving their territory and enforced enough order along the roads to keep the traffic coming. And the merchant networks themselves, North African at one end and Wangara at the other, took the commercial margin.` },
            { p: `That is why the Topic 1.5 chapter can say Mali's power rested on taxing the crossing rather than on owning the mines. A state astride the meeting point of the desert routes and the river system does not need to produce anything: it needs to make the road safe, the market predictable and the tax collectible. The empire's wealth was a position on a map, converted into revenue by administration.` }
          ]
        }
      ],
      useThis: {
        tool: `Transshipment as a business. <em>The mechanism is that a town where cargo must change carrier, camel to river boat at Timbuktu, desert caravan to Mediterranean shipping at Sijilmasa, captures value from traffic it neither produces nor consumes, because every load must stop, be handled, be stored and be sold, and each of those steps can be charged for.</em>`,
        limit: `A city built on a route is only as durable as the route. When the traffic moved, as it did once European ships began buying gold on the West African coast, the caravan cities kept their buildings and lost their business.`,
        comparison: `Against <em>Melaka</em> and <em>Kilwa</em> in Topics 1.3 and 1.5: identical institution in three environments, a settlement at a compulsory transfer point living on services and duties. The comparison is strong precisely because the landscapes could not be more different.`
      },
      terms: [
        ['Sijilmasa', 'The southern Moroccan city where caravans were assembled, financed and dispatched, and where southbound goods entered Mediterranean markets.'],
        ['Timbuktu', 'The Sahelian city near the Niger where desert caravans met river transport, which made it a market and then a center of Islamic scholarship.'],
        ['Djenne', 'The inland delta city upstream on the Niger, a major market and, with its great mud-brick mosque, an emblem of Sahelian urban architecture.'],
        ['Gao', 'The Niger city that served as a terminus of the eastern desert routes and later as the capital of the Songhai empire.'],
        ['Transshipment', 'The transfer of cargo from one mode of transport to another, which forces a stop and creates the opportunity to tax and service it.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'islam',
      num: '04',
      accent: 'oxide',
      name: 'What Islam Did for the Trade',
      navLabel: 'Islam and the trade',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Merchants, contracts, scholars, a hajj',
      thesis: `Islam moved south with the merchants, and it was adopted first by the people who needed what it carried: a written law for contracts, a script for records, and membership in a network that ran from Morocco to India.`,
      parts: [
        {
          heading: 'The commercial argument',
          blocks: [
            { p: `Consider what a Sahelian merchant or ruler gained by conversion, entirely apart from belief. A body of commercial law that a partner in Fez or Cairo recognized, so a contract could be enforced at both ends of a two-month journey. Literacy in Arabic, and therefore written records, correspondence and credit instruments. Access to the same partnership contracts described in the Topic 2.1 chapter. A shared calendar and diplomatic language. And an instant relationship with the merchant networks that controlled the northern half of the route.` },
            { p: `The <span class="kt">Wangara</span> or Dyula merchants are the mechanism made visible. They were a Muslim trading diaspora, settling in market towns across a huge region of West Africa, maintaining kinship and religious ties across the network, keeping their own quarters and mosques, and trading between communities that were not Muslim at all. A merchant network of that kind carries its religion the way it carries its account books, as part of the equipment of doing business.` },
            { p: `The pattern of conversion follows exactly. Rulers, courts and merchants in the towns adopted Islam; farming villages in the countryside largely did not, or adopted it alongside existing practice. The Topic 1.5 chapter has Ibn Battuta's account of a Malian court whose Islamic observance was real and whose customs shocked a Moroccan jurist. That is not hypocrisy, it is what religious adoption looks like when it travels with commerce rather than with an army.` }
          ]
        },
        {
          heading: 'The hajj as foreign policy, and books as cargo',
          blocks: [
            { p: `<span class="kt">Mansa Musa</span>'s pilgrimage to Mecca in <span class="num">1324</span> is treated in the Topic 1.5 chapter as an act of state legitimacy. Its trade significance belongs here. The distribution and spending of an enormous quantity of gold along the route, and the reports that its effect on the Cairo gold market lasted for years, advertised to the entire Islamic commercial world that a wealthy Muslim state existed on the far side of the Sahara. What came back with the returning pilgrimage mattered as much: scholars, jurists, architects and books, and a permanently raised profile that drew merchants and teachers south for generations.` },
            { p: `By the fifteenth century Timbuktu had become a scholarly city with madrasas, jurists and a substantial manuscript trade. Books were expensive, portable, high in value per kilogram and therefore excellent caravan cargo, and the manuscript collections built up in the Sahelian cities over the following centuries, many still being catalogued and conserved today, are the physical residue of that traffic. Scholarship arrived as an import and became a local industry.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a European map drawn by someone who had never been there',
              html: `A Catalan atlas produced for a European court in <span class="num">1375</span> shows a crowned African king seated on a throne in the western Sahara, holding a large gold nugget, with a caption naming him as the lord of the region's gold. Nobody at that court had been to Mali. The information reached Mediterranean Europe through North African merchants and travelers, half a century after Mansa Musa's pilgrimage. As evidence about Mali the map is thin; as evidence about the reach of information along trade routes it is superb, because it shows an accurate reputation arriving in a place with no direct contact at all.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Religion as commercial infrastructure. <em>The mechanism is that conversion delivered a written commercial law recognized at both ends of the route, Arabic literacy for records and correspondence, standard partnership contracts, and membership in the merchant networks that controlled the northern half of the trade, so a ruler or trader who converted gained an operating system rather than only a faith.</em>`,
        limit: `It reached the towns and the courts and stopped there. Rural West Africa largely kept its own practice or blended the two, which is why later reformers in the region would attack these states as insufficiently Muslim.`,
        comparison: `Against the <em>Indian Ocean</em>: the same mechanism produced the same pattern on the Swahili coast, ports Muslim and interiors not, which is strong evidence that this is a general rule about how religion travels with commerce rather than a fact about either region.`
      },
      terms: [
        ['Wangara', 'The Muslim Mande merchant diaspora, also called Dyula, whose settlements across West Africa carried both goods and Islam.'],
        ['Mansa Musa', 'The Malian ruler whose 1324 hajj advertised the empire&rsquo;s wealth across the Islamic world and brought scholars, architects and books south.'],
        ['Timbuktu manuscripts', 'The libraries of Arabic and Ajami works built up in Sahelian cities, evidence that books were among the most valuable caravan imports.'],
        ['Ajami', 'The practice of writing African languages in Arabic script, one direct consequence of Islamic literacy arriving with the trade.'],
        ['Sankore', 'The mosque and associated scholarly complex at Timbuktu, a center of the teaching that made the city famous beyond its markets.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'cost',
      num: '05',
      accent: 'gold',
      name: 'What the System Cost, and Where the Gold Went',
      navLabel: 'The cost, and after',
      dates: 'c. 1200 to 1500 &nbsp;·&nbsp; Enslavement, decline, redirection',
      thesis: `The trade that funded Timbuktu's libraries also moved human beings north across the desert in large numbers and ran its salt mines on enslaved labor. Both facts belong in the same answer, and the second half of the section explains why the whole system was redirected.`,
      parts: [
        {
          heading: 'People as cargo',
          blocks: [
            { p: `Enslaved people were among the principal exports moving north across the Sahara throughout this period, taken largely from the savanna and forest regions south of the Sahel and sold into North Africa, Egypt and the wider Islamic world, where they worked as domestic servants, soldiers, laborers and concubines. Estimates of the total over the many centuries of the trade vary widely and are contested, which is a reason to describe the traffic as sustained and large rather than to attach a false precision to it.` },
            { p: `The desert crossing itself was lethal for people traveling on foot in a caravan organized for the survival of the animals. And at Taghaza the miners cutting the salt were themselves enslaved, working a site that produced no food, so the commodity at the heart of the exchange was extracted by forced labor at both ends of its value chain.` },
            { p: `The point for an essay is not to append a line of condemnation but to include this in the account of what the system was. A description of trans-Saharan trade as gold, salt, books and scholarship is not wrong and it is incomplete, and the incompleteness is exactly what a strong answer notices.` }
          ]
        },
        {
          heading: 'Where the gold ended up, and what happened next',
          blocks: [
            { p: `West African gold was not a regional curiosity. It was a major source of the metal for the coinages of North Africa and the Mediterranean, and by the fourteenth century it was underwriting European currency as well: when Italian and Iberian mints struck gold coins, a substantial part of the metal had crossed the Sahara on a camel. That is a good fact to hold, because it makes the point that Europe in this period was a customer on the edge of somebody else's system rather than the center of anything.` },
            { p: `The system changed at the end of the period rather than collapsing. Mali declined through the fifteenth century and Songhai rose in its place, taking Timbuktu and Gao and running the same trade from a new capital. The larger change came from the coast: Portuguese ships reached the West African shore and began buying gold directly at coastal forts from the <span class="num">1480</span>s onward, which meant that a portion of the metal that had crossed the desert now went by sea instead, and the merchants who had taken a margin on the desert leg were cut out of it.` },
            { p: `That redirection belongs to Unit 4 and is worth flagging here for one reason. It is the same explanation this unit has offered twice already: cargo goes where the cost and the risk are lowest, and a route declines because a cheaper one appears, not because anyone closed it.` }
          ]
        }
      ],
      useThis: {
        tool: `Forced labor inside the exchange. <em>The mechanism is that a commodity mined in a place that grows no food requires labor that cannot leave, so the salt at the heart of the trade was cut by enslaved workers provisioned by caravan, while enslaved people were simultaneously among the principal goods carried north on the same routes.</em>`,
        limit: `Estimates of the volume of the trans-Saharan slave trade vary widely and are disputed, so describe it as sustained and large rather than attaching a number you cannot defend.`,
        comparison: `Against the <em>Indian Ocean</em> and the <em>Silk Roads</em>: all three networks moved enslaved people as a normal component of their traffic, which is a similarity worth stating plainly whenever a prompt asks what the three had in common.`
      },
      terms: [
        ['Trans-Saharan slave trade', 'The sustained movement of enslaved people north across the desert into North Africa, Egypt and the wider Islamic world.'],
        ['Songhai', 'The empire that displaced Mali in the later fifteenth century, taking Timbuktu and Gao and running the same trade from a new center.'],
        ['Elmina', 'The coastal fort from which Portuguese traders bought West African gold directly by sea, beginning the redirection of the trade away from the desert.'],
        ['Bullion', 'Precious metal valued by weight, the form in which West African gold entered North African, Middle Eastern and European coinage.'],
        ['Redirection', 'The shift of a trade to a cheaper route, the recurring explanation in this unit for why an old route declines.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the evidence, and the reason the difference existed. The trans-Saharan network is the one students describe most vaguely, so specificity here pays more than anywhere else in the unit.`,
    pairs: [
      {
        category: 'Trade networks',
        title: 'Necessity is a more durable engine than rarity',
        body: `Cloves and nutmeg grew on a handful of islands in eastern Indonesia and were valuable because almost nobody could get them; salt was valuable in West Africa because people working in a hot climate must replace what they sweat and the region's geology supplies almost none. Both trades were profitable, but they rest on different foundations, and the salt trade was the steadier of the two: a luxury market can collapse with fashion or with a new source, while a physiological requirement cannot. Whenever a prompt asks why a particular exchange lasted, ask whether the demand was for something people wanted or for something they needed.`
      },
      {
        category: 'Technology',
        title: 'Each network was unlocked by a technology matched to its environment',
        body: `The Sahara was crossed by the camel and a stable saddle, which turned an impassable barrier into a two-month journey between wells. The Indian Ocean was crossed with the lateen sail, the sewn hull, the compass and the pilot books that made a seasonal wind system predictable. The Silk Roads ran on the Bactrian camel and, at their peak, on political integration and relay infrastructure. The difference exists because each environment posed a different binding constraint, water, wind and security respectively, and the technology that mattered in each case was whatever addressed that constraint. Naming the constraint before naming the technology is what turns a list into an explanation.`
      },
      {
        category: 'Belief and commerce',
        title: 'Islam spread along both African trade routes and stopped at the same line',
        body: `In the Sahel, rulers, courts and the Wangara merchant diaspora adopted Islam while the farming countryside largely did not; on the Swahili coast, the port cities were Muslim while the interior, including gold-producing Great Zimbabwe, was not. The difference exists because conversion delivered specific commercial goods, a law recognized at both ends of a route, Arabic literacy for records, standard partnership contracts, and membership in a trading network, and those goods are valuable to a merchant or a ruler negotiating with foreigners and close to worthless to a farmer who deals only with neighbors. Religion followed the people who needed the infrastructure it carried.`
      },
      {
        category: 'Continuity and change',
        title: 'The trade did not die, it was undercut',
        body: `Mali gave way to Songhai and the caravans kept running, but from the 1480s Portuguese ships began buying West African gold directly at coastal forts, so metal that had crossed the desert began leaving by sea and the merchants who took a margin on the desert leg lost it. That is the third time this unit tells the same story: the Silk Roads declined when maritime transport became cheaper and safer, the Indian Ocean's plural order ended when armed fleets arrived, and the Sahara was undercut by a coast. Routes are not closed by enemies nearly as often as they are abandoned for cheaper ones, and an answer that reaches for cost before conspiracy is usually the correct one.`
      }
    ]
  }
};
