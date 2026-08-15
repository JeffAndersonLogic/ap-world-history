'use strict';

/**
 * Topic 2.7, Comparison of Economic Exchange: the deep reading.
 *
 * Why this exists, and why it is shaped like the Topic 1.7 chapter. The success
 * criteria are a skill: two specific similarities shared by all three networks
 * with concrete examples, two meaningful differences between any two of them
 * using evidence about geography, technology or goods, and then an argument
 * with a claim, evidence and reasoning that connects to a broader pattern of
 * Afro-Eurasian exchange. That is comparison, not content, and the failure mode
 * is always the same: a student who knows three networks separately produces
 * three paragraphs side by side and calls it a comparison.
 *
 * As with 1.7, this chapter introduces almost no new evidence. Everything in it
 * appears in the chapters for 2.1 to 2.6. What it adds is the frame that makes
 * the three comparable, and one organizing mechanism that explains more of the
 * differences than anything else: cost per ton-mile decides what a route can
 * carry, and what a route carries decides nearly everything else about it.
 *
 * The failure modes in section 05 are drawn from what actually shows up in
 * student writing on this unit: treating the Silk Roads as a single highway,
 * calling the Indian Ocean a spice route and missing that its main cargo was
 * bulk cloth, asserting that all three spread religion and disease without a
 * mechanism, comparing one network at its peak with another at its trough, and
 * writing as though the three ran in parallel when they were one connected
 * system with shared merchants and shared endpoints.
 */

module.exports = {
  topicKey: 't2-7',
  slug: 'topic-2-7-comparison',
  sourceFile: 'deep-reading-topic-2-7-comparison.html',
  lessonFile: 'lesson-2-7-comparison.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 2.7: One System, Three Surfaces',
  eyebrow: 'Topic 2.7 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'One System, Three <em>Surfaces</em>',
  deck: `Sand, water and grass are three different problems, and the traders solving them were often the same people selling into the same markets. This chapter puts the three networks under one set of questions, names the single mechanism that explains most of their differences, and then shows exactly what a comparison paragraph has to contain.`,
  meta: ['Five sections', 'No new content, one new skill', 'Read alongside the First & 10'],
  footerNote: 'Topic 2.7 &nbsp;·&nbsp; One System, Three Surfaces &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `This chapter introduces almost nothing new. Everything in it comes from the chapters for Topics 2.1 to 2.6, reorganized so that the three networks can be held against each other. Section 03 is the one that does the most work, because it gives you a single mechanism that generates most of the differences you will be asked about.`,
    steps: [
      `<b>01 The three profiles:</b> the same eight questions asked of each network.`,
      `<b>02 What they shared:</b> four similarities, each with a reason attached.`,
      `<b>03 What differed:</b> the cost mechanism that produces almost every other difference.`,
      `<b>04 Consequences compared:</b> states, cities, belief, disease and labor.`,
      `<b>05 Writing it:</b> five failures specific to this unit, and a worked paragraph.`,
      `<b>Then the closing section</b>, which is four finished comparisons to use as models.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'profiles',
      num: '01',
      accent: 'gold',
      name: 'The Three Profiles',
      navLabel: 'The three profiles',
      dates: 'c. 1200 to c. 1450 &nbsp;·&nbsp; Sand, water, grass',
      thesis: `Comparison begins with asking the same questions of each case. Here are eight, answered three times, and the pattern in the answers is the material for everything that follows.`,
      parts: [
        {
          heading: 'The Silk Roads',
          blocks: [
            { p: `<b>Environment:</b> deserts, steppe and mountain passes across Central Asia. <b>Unit of transport:</b> the Bactrian camel, about two hundred kilograms. <b>Constraint:</b> security, since the danger lies along every mile between towns. <b>Cargo:</b> high value per kilogram, silk, musk, gems, medicines, plus horses and enslaved people. <b>Who ran it:</b> relay merchants working single segments, with Sogdian, Uyghur, Persian, Armenian and Italian networks at different points. <b>Institutions:</b> caravanserais funded by charitable endowment, partnership contracts, bills of exchange, ortoq associations financed by Mongol nobles. <b>State role:</b> decisive; the network peaked when one authority governed its length and contracted when that dissolved after 1335. <b>Endpoint:</b> ports, because overland cargo terminated at the Black Sea and the Levant and continued by sea.` }
          ]
        },
        {
          heading: 'The Indian Ocean',
          blocks: [
            { p: `<b>Environment:</b> a seasonal wind system of extraordinary reliability. <b>Unit of transport:</b> the dhow and the junk, cargo measured in hundreds of tons. <b>Constraint:</b> timing, since the wind decides when a voyage can begin and how long you must stay. <b>Cargo:</b> bulk as well as luxury, Indian cotton cloth above all, plus rice, timber, mangrove poles, porcelain, spices, horses and enslaved people. <b>Who ran it:</b> resident merchant diasporas, Arab, Persian, Gujarati, Tamil, Chinese and Swahili, settled in each other's ports. <b>Institutions:</b> the harbor master for each community, warehouses, brokers, partnership contracts, the Karimi wholesale financiers. <b>State role:</b> minimal and local; no power controlled the ocean before the Portuguese, and ports competed for traffic by being hospitable. <b>Endpoint:</b> everywhere, from Guangzhou to Sofala.` }
          ]
        },
        {
          heading: 'The trans-Saharan routes',
          blocks: [
            { p: `<b>Environment:</b> the largest hot desert on earth, with no water for weeks at a stretch. <b>Unit of transport:</b> the dromedary, about one hundred and fifty to two hundred kilograms. <b>Constraint:</b> water, which fixes the routes to wells and the departures to seasons. <b>Cargo:</b> gold north, salt south, plus cloth, copper, books, and enslaved people north. <b>Who ran it:</b> North African and Berber merchants on the desert leg, Wangara and Dyula Muslim merchant networks in the savanna. <b>Institutions:</b> the guide, the caravan, Islamic commercial law and Arabic literacy, market towns at the desert's edge. <b>State role:</b> significant at the southern end, where Mali and later Songhai taxed and policed the traffic. <b>Endpoint:</b> Mediterranean ports at one end and the Niger river system at the other, where the desert traffic met river transport.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write about the three networks as though they were separate worlds. They shared endpoints, merchants and markets. West African gold crossed the Sahara, entered Mediterranean coinage, and paid for goods that had come by sea from Asia. Silk Road cargo terminated at Black Sea and Levantine ports and continued by ship. Egypt's Karimi merchants handled spices that arrived by sea and sold them into Mediterranean networks that reached the desert routes. It was one connected system with three surfaces, and an answer that treats the surfaces as three unrelated economies has missed what the unit is called: networks of exchange, plural, and interlocking.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A fixed set of questions asked of every case. <em>The mechanism is that comparison requires a shared category, so asking each network the same eight questions, environment, transport unit, constraint, cargo, actors, institutions, state role and endpoints, produces answers that can be set against each other rather than three descriptions that merely sit side by side.</em>`,
        limit: `Profiles are the setup and not the answer. A table of features earns nothing on its own until you explain why the entries differ, which is section 03.`,
        comparison: `Use the profiles to pick your category before you start writing. If a prompt names technology, compare camel and saddle against lateen sail and compass; if it names state power, compare the Pax Mongolica against a Calicut harbor master.`
      },
      terms: [
        ['Network', 'A system of routes, actors and institutions moving goods between regions, of which this unit examines three interlocking examples.'],
        ['Constraint', 'The binding limit each environment imposes, security overland, timing at sea, water in the desert, which shapes every institution built around it.'],
        ['Actors', 'The merchants, carriers, guides, financiers and officials who make a network work, and whose identity differs sharply between the three.'],
        ['Endpoint', 'Where a route terminates and its cargo transfers to another system, which is why the three networks were connected rather than parallel.'],
        ['Interlocking', 'The condition of the three networks: shared merchants, shared markets and shared endpoints rather than separate economies.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'shared',
      num: '02',
      accent: 'rust',
      name: 'What All Three Shared',
      navLabel: 'What they shared',
      dates: 'c. 1200 to c. 1450 &nbsp;·&nbsp; Four similarities with reasons',
      thesis: `A similarity is only worth writing down if you can say why it existed in all three cases. These four can be explained, which is what makes them usable.`,
      parts: [
        {
          heading: 'The four, each with its reason',
          blocks: [
            { p: `<b>1. Relay rather than through-travel.</b> On all three networks, most merchants worked one segment they knew and sold on to the next. The reason is the same everywhere: local knowledge of routes, officials, languages and customers is what makes a merchant profitable, and it does not transfer. Ibn Battuta and Marco Polo are famous precisely because through-travelers were rare enough to be worth writing books about.` },
            { p: `<b>2. Credit and partnership contracts.</b> All three ran on instruments that let capital and travel be supplied by different people: the qirad and commenda partnership, written orders to pay, and pooled ventures. The reason is that long-distance trade ties up capital for months or years and can lose everything at once, so financing and risk-bearing have to be separated from carrying, or only the very rich could trade at all.` },
            { p: `<b>3. Diasporas and shared religion as enforcement.</b> All three depended on communities of merchants scattered along the route, bound by kinship or faith: Wangara traders in the savanna, Gujarati and Hadrami merchants around the Indian Ocean, Armenian and Italian networks on the overland routes. The reason is that no shared court existed at both ends of any of these journeys, so trust had to be manufactured out of reputation, family and religious community, which are the only sanctions that reach across a border.` },
            { p: `<b>4. Everything else traveled too.</b> All three carried religions, techniques, crops, languages and diseases along with the cargo, and all three carried enslaved people. The reason is structural rather than incidental: a network is a set of repeated human contacts, and contact is not selective. Anything transmissible by proximity moves at the speed of the goods.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the same contract appears in three languages',
              html: `The partnership in which one party supplies capital and another the travel, splitting profits by prior agreement, appears in Islamic law as the qirad or mudaraba, in Jewish legal responsa from the Cairo Geniza, and in Italian notarial records as the commenda, across the same centuries and the same trading world. Independent legal traditions describing the same arrangement, in documents written for entirely practical purposes, is far stronger evidence than any single source could be, and it shows that the problem, how to fund a risky venture without lending at interest, was general and the solution was shared.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Similarity with a shared cause. <em>The mechanism is that all three networks faced the same three problems, local knowledge does not transfer, capital must be separated from carriage, and contracts cannot be enforced across borders, so all three produced the same three answers: relay trading, partnership finance, and merchant diasporas bound by kin and faith.</em>`,
        limit: `A similarity list is not an argument. The reason clause is what earns the point, and a similarity you cannot explain probably means you have chosen the wrong category.`,
        comparison: `Against the <em>Americas</em> in Topic 1.4: dense exchange existed there too, and it produced neither partnership contracts nor merchant diasporas of this kind, largely because no comparable long-distance commercial economy developed. The contrast shows these similarities were solutions to a specific problem rather than universal features of trade.`
      },
      terms: [
        ['Relay trade', 'The pattern in which each merchant works one familiar segment and sells on, found on all three networks for the same reason.'],
        ['Partnership contract', 'The arrangement separating capital from carriage, known as qirad, mudaraba or commenda in different legal traditions.'],
        ['Diaspora enforcement', 'The use of kinship and shared religion to make agreements binding where no shared court existed.'],
        ['Unintended cargo', 'Religions, techniques, crops, languages and diseases carried by contact rather than freight, on every network.'],
        ['Cairo Geniza', 'The Cairo synagogue storeroom whose discarded documents record Jewish merchants using the same commercial instruments as their Muslim and Italian counterparts.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'differed',
      num: '03',
      accent: 'iron',
      name: 'What Differed, and the One Mechanism Behind It',
      navLabel: 'What differed',
      dates: 'c. 1200 to c. 1450 &nbsp;·&nbsp; Cost, timing, security, capital',
      thesis: `Almost every difference between the three networks descends from one number: what it cost to move a kilogram a mile. Learn to reason from that and you can derive the cargo lists, the institutions and the politics rather than memorizing them.`,
      parts: [
        {
          heading: 'The mechanism',
          blocks: [
            { p: `A journey's costs, wages, fodder or provisions, tolls or port dues, lodging, protection, are largely fixed regardless of what is being carried. Divide those fixed costs by the amount of cargo and you get the cost per kilogram, and that number determines what is worth moving.` },
            { p: `A camel carries about two hundred kilograms. A seagoing vessel of the period carried cargo in the hundreds of tons, which is the equivalent of a caravan of a thousand camels moving under one crew, with the wind supplying the power. The cost of moving a kilogram by sea is therefore lower by something like an order of magnitude, and everything below follows.` },
            { p: `<b>Cargo.</b> Overland routes carry only goods whose value per kilogram is very high: silk, musk, gems, medicines, gold. Sea routes carry those and also rice, timber, mangrove poles, ordinary cotton cloth and tens of thousands of porcelain pieces at a time. That is why the Indian Ocean looks like an economy and the Silk Roads look like a luxury trade, and it is not a fact about the tastes of the societies involved.` },
            { p: `<b>Volume and price.</b> Cheap transport means large volumes, which means goods reaching ordinary buyers rather than only courts. Indian cotton clothed people across the ocean rim; Chinese silk did not clothe Europe.` },
            { p: `<b>Who could participate.</b> A ship is an enormous capital investment, so maritime trade concentrated in the hands of those who could finance vessels or buy space in them, which is why partnership contracts and wholesale financiers such as the Karimi mattered so much. A camel is comparatively cheap, so overland trade had a longer tail of small operators traveling with a few animals inside a larger caravan.` }
          ]
        },
        {
          heading: 'The three constraints, and what each built',
          blocks: [
            { p: `<b>Security, on land.</b> A caravan is exposed for every mile between towns, so overland trade needs the ground policed, which is why its volume tracked political integration and why the Pax Mongolica was its best century. That single fact explains why an empire matters to one network and not to another.` },
            { p: `<b>Timing, at sea.</b> The monsoon is free power and a rigid schedule. It forces months of waiting in foreign ports, which produced resident merchant communities, intermarriage and the conversion pattern described in the Topic 2.3 chapter. Nothing comparable happened along the desert routes, where a caravan arrived, traded and turned around.` },
            { p: `<b>Water, in the desert.</b> No water for weeks fixes the routes to wells, the departures to seasons and the cargo to what a camel can carry, and it gives absolute leverage to the people who know where the wells are. It also creates the strangest economic feature in the unit, a settlement like Taghaza existing solely to extract a mineral, with all its food imported.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not compare one network at its peak with another at its trough, and do not compare across different centuries without saying so. The overland routes in <span class="num">1300</span> and the overland routes in <span class="num">1420</span> are not the same object: one is running under a single political authority and the other is crossing a mosaic of rival powers after a pandemic. If your comparison requires a date, give it, and if a difference you are describing is really a change over time, say that instead. Periodization errors are the quietest way to lose a comparison point, because the sentence still reads well.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Cost per ton-mile as the master variable. <em>The mechanism is that a journey's costs are broadly fixed and are divided by the cargo carried, so the transport unit, two hundred kilograms on a camel against hundreds of tons in a ship, sets the cost of moving a kilogram, and that price determines the cargo, the volume, the capital required and therefore who trades at all.</em>`,
        limit: `It does not explain everything. Cultural preference, state policy and the accident of where cloves grow are real causes too, and a monocausal answer is a weaker answer than one that leads with the cost and acknowledges the rest.`,
        comparison: `Against <em>Topic 2.4</em>: the Sahara is the exception that proves the rule, because gold and salt are so extremely valuable relative to their weight in their destination markets that they justify the most expensive transport in the unit.`
      },
      terms: [
        ['Cost per ton-mile', 'The price of moving a given weight a given distance, the number that determines what a route can profitably carry.'],
        ['Fixed cost', 'An expense incurred by making the journey at all, regardless of cargo, which is why the size of the transport unit matters so much.'],
        ['Capital intensity', 'The amount of investment a form of trade requires, high for ships and low for a few camels, which shapes who can participate.'],
        ['Seasonality', 'The wind-imposed schedule of Indian Ocean sailing, which forced residence in foreign ports and produced the merchant diasporas.'],
        ['Periodization', 'Attention to when a comparison holds, since the overland routes of 1300 and of 1420 are not the same object.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'consequences',
      num: '04',
      accent: 'oxide',
      name: 'Consequences Compared',
      navLabel: 'Consequences',
      dates: 'c. 1200 to c. 1450 &nbsp;·&nbsp; States, cities, belief, disease',
      thesis: `The three networks produced recognizably different kinds of state, city and culture, and in each case the difference traces back to what the network required.`,
      parts: [
        {
          heading: 'States',
          blocks: [
            { p: `Overland trade rewarded states that could police long distances: the Mongol khanates, and before them the empires that held the oasis corridors. Maritime trade rewarded states that could run a harbor and attract foreigners, which is a much smaller and cheaper kind of state, and it produced Melaka, Kilwa, Calicut and Hormuz, cities with almost no hinterland whose entire strategy was hospitality and predictable duties. Desert trade rewarded states at the crossing points: Mali and Songhai taxed where the routes met the river, without owning either the mines or the salt.` },
            { p: `The generalization is worth having: the geography of a trade determines what kind of political unit can capture its revenue. Where value is created by moving goods safely across distance, large states profit; where it is created by transfer between transport systems, small states at the transfer point profit.` }
          ]
        },
        {
          heading: 'Cities, belief and labor',
          blocks: [
            { p: `<b>Cities.</b> All three produced urban growth at their nodes, and the nodes are of different types. Oasis cities on the overland route lived on provisioning. Port cities lived on transshipment and warehousing. Desert-edge cities lived on the transfer between camel and river. In every case, the city grew where something had to stop, which is the same rule stated three ways.` },
            { p: `<b>Belief.</b> Islam spread along all three, and the pattern is identical wherever the mechanism was commerce rather than conquest: ports and courts converted early, interiors late or never. Great Zimbabwe traded gold into a Muslim network without converting, and the interiors behind the Swahili coast and behind the Sahelian courts stayed largely outside Islam. That consistency across three networks is itself the evidence that the mechanism is commercial rather than doctrinal.` },
            { p: `<b>Disease.</b> The pandemic of the fourteenth century used all of these routes, moving fastest by sea because ships carry rodents and cargo together, as the Topic 2.6 chapter sets out. The consequence differed by region rather than by network: a labor shortage raised wages where peasants could move and destroyed the irrigation system where farming required collective maintenance.` },
            { p: `<b>Labor.</b> All three networks moved enslaved people as a normal component of their traffic, and one of them, the medieval Mediterranean sugar complex described in the Topic 2.5 chapter, developed the plantation model that the Atlantic system would later industrialize. When a prompt asks what the exchange networks meant for ordinary people, that is the honest answer, and it is a good deal more specific than a sentence about cultural diffusion.` }
          ]
        }
      ],
      useThis: {
        tool: `Geography of value capture. <em>The mechanism is that a state can only tax what must pass through territory it controls, so long secure corridors reward large empires, transfer points between transport systems reward small states sitting exactly there, and a network's map therefore predicts the kind of political unit that grows rich from it.</em>`,
        limit: `Consequences are shared as well as separate: the same pandemic reached all three networks, and its outcomes differed by region rather than by route, so do not attribute to a network what belongs to a society.`,
        comparison: `Against <em>Topic 1.7</em>: that chapter compared six regions under one question at a time, extraction, legitimacy and social order. This one compares three networks under the same discipline, and the two chapters together are the comparison toolkit for the first half of the course.`
      },
      terms: [
        ['Transshipment point', 'A place where cargo must change transport mode, which forces a stop and lets a small state capture value from traffic it does not produce.'],
        ['Entrepot', 'A port living on goods landed, stored and re-exported rather than produced or consumed locally.'],
        ['Hinterland', 'The productive interior behind a port, whose absence is what made cities like Melaka wholly dependent on transit trade.'],
        ['Conversion pattern', 'The recurring shape of religious change along commercial routes: ports and courts first, interiors late or never.'],
        ['Plantation model', 'The combination of monoculture, processing plant, merchant capital and coerced labor developed around Mediterranean sugar and later carried to the Atlantic.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'writing',
      num: '05',
      accent: 'gold',
      name: 'Writing It Without Collapsing',
      navLabel: 'Writing the comparison',
      dates: 'The paragraph &nbsp;·&nbsp; Five failures and a worked example',
      thesis: `Five failures account for nearly every weak comparison in this unit, and all five are visible in the first two sentences of a draft.`,
      parts: [
        {
          heading: 'The five failures',
          blocks: [
            { p: `<b>1. The parallel description.</b> A paragraph on the Silk Roads, then a paragraph on the Indian Ocean, with no shared category and no sentence connecting them. Fix: name one question and ask it of both in the same sentence.` },
            { p: `<b>2. The single highway.</b> Writing "the Silk Road" as one road with one route and one owner. Fix: a shifting braid of routes worked in segments by merchants who each knew one stretch, whose volume rose and fell with the stability of the states along it.` },
            { p: `<b>3. The spice-route error.</b> Describing Indian Ocean trade as a luxury spice trade. Fix: its largest manufactured cargo was Indian cotton cloth, and it also carried rice, timber and mangrove poles, because sea transport is cheap enough for bulk. This single correction improves more essays in this unit than any other.` },
            { p: `<b>4. The mechanism-free consequence.</b> "All three networks spread religion and disease." True and worth nothing without the how. Fix: religion moved with resident merchants and the teachers who followed them, which is why ports converted and interiors did not; disease moved in ships' cargo with rodents and fleas, which is why it appeared in ports first.` },
            { p: `<b>5. The periodization slip.</b> Comparing the overland routes under Mongol integration with the Indian Ocean after the plague, without dates. Fix: give the years, and if the difference you are describing is really change over time, say so and make that your point instead.` }
          ]
        },
        {
          heading: 'The paragraph, assembled',
          blocks: [
            { p: `Four sentences. Name the category and state the claim. Give evidence from case one, specific and dated. Give evidence from case two at the same level of detail. Explain the difference by naming a prior condition that differed and how it produced the outcome.` },
            { p: `Worked example, entirely from earlier chapters. <em>Category and claim:</em> the two networks depended on political protection to completely different degrees. <em>Evidence one:</em> overland trade reached its greatest volume under Mongol rule, when one authority reduced tolls, offered a single law and made a journey's risk calculable, and it contracted after the Ilkhanate dissolved in 1335 and the Yuan fell in 1368. <em>Evidence two:</em> Indian Ocean trade had no dominant power before the Portuguese arrived at the end of the fifteenth century, and Calicut, Hormuz, Kilwa and Melaka were separately governed and competed for shipping by offering predictable duties, warehousing and harbor masters for each merchant community. <em>Reasoning:</em> the difference follows from where the danger lies, since a caravan is exposed to bandits and tolls at every mile between towns and therefore needs the ground policed, while a ship is exposed only in port and therefore needs a welcoming harbor and nothing at all in between.` },
            { p: `That is one category, two mechanisms, one causal explanation, and it took no memorization that is not in the Topic 2.1 and 2.3 chapters. The skill is not writing; it is knowing what each network actually required.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: check that your two pieces of evidence are the same size',
              html: `The most common structural weakness in a comparison is mismatched grain: a mechanism on one side and a generality on the other, as in "the Indian Ocean used the monsoon and lateen sails while the Silk Roads were dangerous." Read your draft and ask whether both halves would survive the question "how do you know?" If one half would and the other would not, raise the weaker half rather than trimming the stronger, because the fix is almost always a specific fact you already have.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The four-sentence comparison paragraph. <em>Category and claim, evidence from each case at matching grain, then a causal explanation naming the prior condition that differed. Check for the five failures in your first two sentences before you check anything else, because all five are visible there.</em>`,
        limit: `Structure cannot rescue thin content. If you cannot state what a network required in order to function, no paragraph shape will produce a strong comparison, and the fix is to reread a chapter rather than to rewrite a sentence.`,
        comparison: `Use the closing cards below as models, and note that each one names its category first, gives dated evidence from both sides, and ends on a because.`
      },
      terms: [
        ['Parallel description', 'Two accounts placed side by side with no shared question, the most common failed comparison.'],
        ['Grain', 'The level of detail in evidence; a mechanism on one side and a generality on the other is a structural weakness a reader will notice.'],
        ['Causal explanation', 'The statement of what prior condition produced a difference and how, which is the component the success criteria require.'],
        ['Change over time', 'A difference between two moments rather than two places, frequently mistaken for a comparison in this unit.'],
        ['Broader pattern', 'The connection to Afro-Eurasian exchange as a whole, which the third success criterion asks the argument to reach.']
      ]
    }
  ],

  closing: {
    heading: 'Four Finished Comparisons',
    navLabel: 'Four models',
    intro: `Models rather than summaries. Each names one category, gives dated evidence from both sides at the same grain, and ends with the reason. Cover one and rebuild it from memory with a different pair of networks; that exercise is worth more than rereading the chapter.`,
    pairs: [
      {
        category: 'Technology and cargo',
        title: 'The transport unit decides the cargo list',
        body: `A Bactrian camel carries about two hundred kilograms and a seagoing vessel of the period carried hundreds of tons, while the costs of each journey, wages, provisions, tolls and protection, are largely fixed. So the Silk Roads carried silk, musk, gems and medicines and never grain, while the Indian Ocean carried Indian cotton cloth as its largest manufactured export along with rice, timber, mangrove poles and porcelain by the tens of thousands of pieces. The difference exists because dividing fixed journey costs by cargo weight gives a cost per kilogram an order of magnitude lower at sea, and that price, rather than any difference in taste or sophistication, determines what is worth moving.`
      },
      {
        category: 'States and trade',
        title: 'One network needed an empire and one needed a harbor',
        body: `Overland volume peaked under Mongol rule, when one authority cut the number of tolls and made a journey's risk calculable, and it contracted after the Ilkhanate dissolved in 1335 and the Yuan fell in 1368. The Indian Ocean had no dominant power before 1498, and Calicut, Hormuz, Kilwa and Melaka competed for traffic with predictable duties, warehousing and a harbor master for each merchant community. The difference exists because of where each network is vulnerable: a caravan is exposed for every mile between towns and needs the ground policed, while a ship is exposed only in port and needs nothing at all in between.`
      },
      {
        category: 'Belief',
        title: 'The same conversion pattern on three networks is evidence about the mechanism',
        body: `Islam reached the Swahili coast, Gujarat's ports, the Maldives and Melaka by sea; the Sahelian courts and the Wangara merchant diaspora across the desert; and Turkic and Mongol peoples along the overland routes. In every case ports and courts converted first and interiors late or never: Great Zimbabwe sold gold into a Muslim network for centuries without converting, and three centuries of Muslim rule left northern India with a Hindu majority. The difference between who converted and who did not exists because conversion delivered a commercial law recognized across the network, Arabic literacy and standard contracts, which are valuable to anyone trading with strangers and worthless to a farmer dealing with neighbors. Three networks, one pattern, one mechanism.`
      },
      {
        category: 'Connectivity and its costs',
        title: 'The pandemic is the strongest evidence that these were one system',
        body: `Plague reached Kaffa on the Black Sea in 1346, entered Mediterranean shipping, and was in Constantinople, Sicily and Alexandria in 1347 and across Europe, Egypt and Syria by 1349, appearing in ports first and radiating inland from each. It moved along exactly the routes that carried Persian cobalt to Chinese kilns, Indian cotton to Cairo and West African gold to Italian mints. The broader pattern this points to, which is what the third success criterion asks for, is that Afro-Eurasian exchange by 1350 was integrated enough that a shock entering it anywhere reached almost everywhere, and any answer describing the benefits of connectivity without that consequence has described half the system.`
      }
    ]
  }
};
