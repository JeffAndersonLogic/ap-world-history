'use strict';

/**
 * Topic 5.5, Technology of Industrialization: the deep reading.
 *
 * Why this exists. The success criteria ask for railroads creating national
 * markets, the Bessemer process of 1856, the telegraph, and specifically for at
 * least two examples of INTERDEPENDENCE, one technology enabling another. Then
 * the second criterion is environmental and it is unusually detailed: coal
 * pollution, deforestation, rubber in the Congo and Amazon with coercive labor,
 * and Peruvian guano, with an explicit instruction to connect European
 * industrial technology to environmental and labor transformation in colonized
 * regions.
 *
 * The interdependence requirement is the spine of section 01 and 02, because it
 * is what turns a list of inventions into a system. And the guano and rubber
 * material is the part no survey has room for and the part that makes the second
 * criterion answerable: an industrial economy has an ecological footprint
 * located somewhere other than where the factories are.
 *
 * Three things carried deliberately:
 *
 *   1. Every technology here is written as solving a bottleneck created by the
 *      previous one, so the chain is causal rather than chronological.
 *   2. The Congo rubber terror is stated plainly, with the mechanism, because a
 *      chapter that mentions coercive labor without saying what it was is worse
 *      than one that omits it.
 *   3. Guano is the best teaching case in the chapter and gets the space:
 *      seabird excrement, indentured Chinese labor, a fertilizer boom, a debt
 *      crisis, a war, and a synthetic replacement. It is the whole century in
 *      one commodity.
 */

module.exports = {
  topicKey: 't5-5',
  slug: 'topic-5-5-technology-of-industrialization',
  sourceFile: 'deep-reading-topic-5-5-technology-of-industrialization.html',
  lessonFile: 'lesson-5-5-technology-of-industrialization.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.5: The Machines That Needed Each Other',
  eyebrow: 'Topic 5.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Machines That Needed Each <em>Other</em>',
  deck: `No nineteenth-century technology worked alone. The steam engine needed coal, and coal needed a railway to move it, and the railway needed steel, and cheap steel needed a process nobody had until 1856, and the whole system needed a telegraph to run on time. This chapter is that chain, and then the part that is usually left off it: an industrial economy has an ecological footprint, and most of it was somewhere else.`,
  meta: ['Four sections', 'The chain, steel and wire, the smoke, the extraction', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.5 &nbsp;·&nbsp; The Machines That Needed Each Other &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 and 02 are the interdependence the success criteria ask you to demonstrate, written as a chain of bottlenecks rather than a list of inventions. Sections 03 and 04 are the environmental half, first where the factories were and then where the raw materials came from, which is the connection the criteria explicitly want made.`,
    steps: [
      `<b>01 The railway:</b> what falling freight costs do to a country, and what the railway needed in return.`,
      `<b>02 Steel and wire:</b> Bessemer in 1856, the telegraph, and information moving faster than goods.`,
      `<b>03 The smoke:</b> coal, cities, rivers and forests where the industry was.`,
      `<b>04 The footprint elsewhere:</b> guano, rubber, and the labor that produced them.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'railway',
      num: '01',
      accent: 'gold',
      name: 'What Happens When Freight Gets Cheap',
      navLabel: 'The railway',
      dates: '1825 to 1900 &nbsp;·&nbsp; Rails and national markets',
      thesis: `The railway&rsquo;s importance is not speed. It is the collapse in the cost of moving heavy things overland, which had been the binding constraint on economic life for the whole of this course, and everything else follows from removing it.`,
      parts: [
        {
          heading: 'The constraint it removed',
          blocks: [
            { p: `Before railways, moving bulk goods overland was so expensive that grain or coal became worthless within a modest distance of where it was produced. That is why every earlier chapter in this course puts trade on water: the Topic 2.3 chapter's point that a ship carries rice when a camel cannot is the same point. Canals helped enormously and could only go where the terrain allowed and froze in winter.` },
            { p: `The Stockton and Darlington opened in <span class="num">1825</span> and the Liverpool and Manchester in <span class="num">1830</span>, and the second is the one that mattered, because it connected a manufacturing city to a port and proved the commercial case. Britain then built a network within a generation, and every industrializing state followed, often with the state financing it, as the Topic 5.4 chapter describes.` },
            { p: `Four consequences, and each is a mechanism worth writing. <b>A national market</b>: when it costs little to move goods from an interior town to a port, a producer sells to the whole country rather than to the county, which rewards large-scale production and destroys local producers who had been protected by distance. <b>Interior settlement</b>: land far from navigable water becomes worth farming, which is what fills the American Midwest, the Argentine pampas and the Ukrainian grain belt, and what floods European markets with cheap grain in the <span class="num">1870</span>s. <b>Standard time</b>: railways cannot run safely on local solar time, so Britain adopted railway time and the world eventually adopted time zones, which means the clock everyone lives by is a railway artifact. <b>Cities that need not be ports</b>: a factory can sit at a rail junction, and Chicago is the pure case.` }
          ]
        },
        {
          heading: 'What the railway needed back',
          blocks: [
            { p: `The interdependence runs in both directions, and this is the half that makes the argument. A railway required <b>coal</b>, in enormous quantities, so it expanded the coal industry that had produced the engine that made it possible. It required <b>iron and then steel</b> for rails, locomotives, bridges and wheels, on a scale that transformed metallurgy and created the demand Bessemer answered. It required <b>civil engineering</b>: cuttings, embankments, tunnels and bridges, which built a profession. And it required <b>capital on a new scale</b>, since a railway is expensive before it earns anything, which is exactly why the joint-stock company and the stock exchange of Topic 5.7 matter when they do.` },
            { p: `And it broke its own rails, constantly. Wrought iron rails under heavy locomotives wore out in a few years, and the resulting demand for something better is a direct commercial pressure on the steel problem, which is where section 02 begins.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: prices converged',
              html: `The claim that railways created national markets is testable, and economic historians test it with price series. If a market is integrated, the price of a bulk commodity in two distant places should converge, because a large gap invites someone to buy in the cheap place and sell in the dear one until the gap is only the cost of carriage. Grain and coal price series across the nineteenth century show exactly that: wide regional divergence before the railway and close tracking after it, and the same convergence appears between continents once steamships and the Suez Canal cut ocean freight. It is a good example of a claim about structure being demonstrated by ordinary commercial records rather than by anyone&rsquo;s testimony.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Falling freight cost as a market-maker. <em>The mechanism is that when the cost of moving a ton overland collapses, distance stops protecting local producers, so a manufacturer can sell into a whole country and is rewarded for producing at scale, while farmers on interior land that was previously too far from water find their crops worth growing, which integrates a national market and destroys the local one.</em>`,
        limit: `Integration was not uniformly good for everyone in it. Local producers protected by distance were wiped out, and cheap New World grain from the 1870s pushed European agriculture into a long depression.`,
        comparison: `Against the <em>Grand Canal</em> in Topic 1.1: a state-built artery that moved southern rice to a northern capital and integrated an economy centuries earlier, with the same effect and one difference. A canal follows water and a railway goes where you put it, which is why the railway also becomes an instrument of strategic and colonial control in Unit 6.`
      },
      terms: [
        ['Liverpool and Manchester', 'The 1830 line connecting a manufacturing city to a port, which proved the commercial case for railways.'],
        ['National market', 'A single integrated market created when freight becomes cheap enough that distance no longer protects local producers.'],
        ['Standard time', 'Uniform railway time and eventually time zones, adopted because trains cannot run safely on local solar time.'],
        ['Price convergence', 'The narrowing of commodity price gaps between regions, the measurable evidence of market integration.'],
        ['Civil engineering', 'The profession built by railway cuttings, tunnels and bridges, and one of the century\'s new skilled occupations.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'steel',
      num: '02',
      accent: 'iron',
      name: 'Cheap Steel and Instant News',
      navLabel: 'Steel and wire',
      dates: '1844 to 1880s &nbsp;·&nbsp; Bessemer and the telegraph',
      thesis: `Two changes in the middle of the century removed the remaining ceilings. One made the strongest available structural material cheap enough to use by the mile, and the other made a message independent of anything carrying it, over any distance, in any weather, at a price ordinary commerce could pay.`,
      parts: [
        {
          heading: 'The Bessemer process',
          blocks: [
            { p: `Understand the problem first. <b>Wrought iron</b> is soft and bends; <b>cast iron</b> is hard and brittle and shatters under shock; <b>steel</b>, iron with a controlled small proportion of carbon, is both strong and tough, and before <span class="num">1856</span> it was made in small batches by slow processes and cost so much that it was used for tools, springs and blades rather than for structures.` },
            { p: `Henry Bessemer's converter, announced in <span class="num">1856</span>, blew air through molten pig iron. The oxygen burned out the excess carbon and other impurities, and the burning generated the heat, so the process needed little additional fuel and took minutes rather than days. Cost per ton fell dramatically, and steel output rose by orders of magnitude across the following decades. Later improvements matter and can be named briefly: the open-hearth process allowed better control and the use of scrap, and the Gilchrist Thomas basic lining of <span class="num">1879</span> allowed the use of the phosphoric ores that most of continental Europe actually had, which is a large part of why German steel output overtook Britain's.` },
            { p: `Then the consequences, which are the interdependence the criteria want. <b>Rails</b> that lasted many times longer than iron ones, which is what let railways carry heavier loads at higher speeds. <b>Bridges</b> and, with elevators, the steel-framed buildings that make a tall city possible. <b>Ships</b> of steel rather than iron, larger and lighter. <b>Machinery</b> and machine tools able to take higher stresses. And <b>armaments</b>, which is the Unit 6 connection: cheap steel is also artillery, and the industrial gap of Topic 5.4 becomes a military gap.` }
          ]
        },
        {
          heading: 'The telegraph',
          blocks: [
            { p: `Get the claim right, because the obvious version of it is false. The telegraph was not the first way of sending a message faster than a horse. Beacon chains are ancient, and from <span class="num">1794</span> Claude Chappe's optical telegraph relayed coded signals between hilltop towers across France, carrying a message from Paris to Lille in minutes. What the optical system could not do was work at night, work in fog, cross an ocean, or carry the traffic of ordinary business, because every message passed through a chain of operators who could read it and it belonged to the state.` },
            { p: `So the break of <span class="num">1844</span> is about scale and reliability, not about speed alone. Before it, a message that had to cross an ocean or arrive in bad weather still traveled at the speed of the fastest ship, which meant London to Calcutta took months. Samuel Morse's line between Washington and Baltimore in <span class="num">1844</span> changed that, and the network spread along the railways, which is not a coincidence: railways needed telegraphs to signal whether a single-track section was clear, and telegraphs needed the railway's cleared, patrolled right of way to run wire along.` },
            { p: `Submarine cable came next, across the Channel in <span class="num">1851</span>, a durable transatlantic cable in <span class="num">1866</span> after earlier failures, and lines to India, Australia and around the world within the following decade. By the <span class="num">1870</span>s a merchant in London could know a price in Bombay the same day.` },
            { p: `What that changed, stated as mechanisms. <b>Commerce</b>: goods could be bought and sold against known prices in distant markets rather than against a guess two months old, which reduced risk, and it also let commodity prices converge worldwide and made futures markets possible. <b>Empire</b>: an order from London could reach a colonial governor in hours, which centralized decisions that distance had previously delegated, and the Topic 4.4 chapter's account of overlapping jurisdictions as a solution to slow communication becomes obsolete. <b>News</b>: wire services and mass newspapers, which is part of how the national publics of Topic 5.2 were made. <b>War</b>: mobilization by timetable, which the railways enabled and the telegraph coordinated.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not present these as separate inventions in a list, which is the form the criteria explicitly ask you to avoid. Write the chain: coal mines flooded, so an engine was built to pump them; the engine needed coal, so more mines opened; moving coal needed railways; railways wore out iron rails, which made cheap steel commercially urgent; Bessemer steel in <span class="num">1856</span> made rails, bridges and ships possible at scale; railways needed telegraphs to signal, and telegraphs used railway rights of way. Each link is a bottleneck created by the previous solution. Two links written that way demonstrate the interdependence better than eight inventions listed.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Separating information from transport. <em>The mechanism is that earlier signaling systems beat a rider only over short fixed routes in clear weather, so every ocean-going commerce and every distant administration still ran on stale information and had to delegate authority to compensate, and an electrical signal on a wire that can be laid under the sea removes that constraint everywhere at once, allowing prices, orders and news to arrive in advance of any ship and centralizing decisions that distance had previously devolved.</em>`,
        limit: `Access was unequal by design. Cables were laid, owned and routed by a few firms and states, mostly British, so knowing first was a commercial and imperial asset rather than a public good.`,
        comparison: `Against the <em>Mongol yam</em> in Topic 2.2: a relay of horses and stations was the fastest information system of its era and still moved at the speed of a rider, so the yam and the Roman post differ from each other in degree and from the telegraph in kind. Chappe's optical towers sit between the two and show where the line falls: faster than a rider, and still stopped by nightfall, fog and the sea.`
      },
      terms: [
        ['Bessemer process', 'The 1856 converter blowing air through molten pig iron, which made steel cheap enough to use structurally.'],
        ['Open hearth', 'The later steelmaking process allowing better control and the use of scrap, alongside Bessemer converters.'],
        ['Gilchrist Thomas process', 'The 1879 basic lining that allowed phosphoric ores to be used, opening continental European steelmaking.'],
        ['Telegraph', 'Electrical signaling from 1844, which moved information faster than any ship, in any weather, over any distance a wire could reach.'],
        ['Submarine cable', 'Undersea telegraph line, transatlantic from 1866, which put distant markets and colonies within hours of London.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'smoke',
      num: '03',
      accent: 'rust',
      name: 'The Environment Where the Factories Were',
      navLabel: 'The smoke',
      dates: 'c. 1800 to 1900 &nbsp;·&nbsp; Coal, rivers, forests',
      thesis: `An economy that burns fossil carbon at scale rewrites its own landscape, and Britain did it first and most completely. This is the visible half of industrialization&rsquo;s environmental cost, and it fell on the people who lived in the industrial cities.`,
      parts: [
        {
          heading: 'Coal smoke',
          blocks: [
            { p: `Industrial cities burned coal for power, for heating and for domestic cooking simultaneously, in valleys that often trapped the smoke. The result was continuous and severe air pollution: soot that blackened buildings, sulfurous smogs that reduced visibility to a few yards, and respiratory disease as an ordinary condition of urban life. Contemporaries did not need instruments to detect it, and their descriptions of Manchester, Sheffield and the Black Country are consistent and vivid.` },
            { p: `It was understood as a cost and treated as an acceptable one. Britain legislated on smoke abatement from the mid-century and enforcement was weak, because smoke was read as the visible sign of employment, and a factory owner prosecuted for smoke could point at the wages he paid. That trade-off, jobs against air, is a nineteenth-century argument that has not gone away.` },
            { p: `And the natural world recorded it. The peppered moth's dark form spread through industrial regions because soot-darkened trees made the pale form conspicuous to birds, which is one of the most cited cases of observed natural selection and is, for this chapter, evidence that the change in the atmosphere was large enough to reshape a species within decades.` }
          ]
        },
        {
          heading: 'Water, forests and the carbon nobody was counting',
          blocks: [
            { p: `<b>Rivers</b> became industrial sewers, receiving dye works, tanneries, bleach and gasworks waste along with untreated human sewage from cities with no system to handle it. The Thames in the mid-century was effectively anaerobic through London, and the Topic 5.9 chapter takes up what that did to public health and Topic 5.8 what was eventually built about it.` },
            { p: `<b>Forests</b> fell, and here the geography matters. Britain had largely deforested earlier and shifted to coal, which is one reason it could industrialize on the scale it did. Where industrialization came later or where wood remained the fuel, the clearance was contemporaneous: eastern North America, central Europe, and, for railway sleepers, mine props and steamship fuel, enormous quantities of timber worldwide. A railway consumes forest in the form of sleepers as continuously as it consumes coal.` },
            { p: `And the change no one was measuring: the systematic burning of fossil carbon began here. Svante Arrhenius calculated in <span class="num">1896</span> that changing atmospheric carbon dioxide would change global surface temperature, and he expected any effect to be slow and thought it might be beneficial. It is worth knowing that the physical relationship was identified by a nineteenth-century scientist working on the ice ages, because it dates the knowledge, and the modern consequences of this period's energy choice belong to Unit 9 rather than here.` }
          ]
        }
      ],
      useThis: {
        tool: `Externalized cost. <em>The mechanism is that a factory owner pays for coal, labor and machinery and does not pay for the smoke, the river or the disease, so those costs are real and are borne by whoever breathes and drinks nearby, which makes pollution profitable to produce and expensive for anyone else to stop.</em>`,
        limit: `It was not accepted silently. Sanitary reformers, local campaigns and eventually legislation attacked it, as Topic 5.8 sets out, and the obstacle was less ignorance than the political weight of the interests being regulated.`,
        comparison: `Against <em>Song China</em> in Topic 1.1: large-scale coal and iron production caused documented deforestation and pollution around Kaifeng centuries earlier, so industrial environmental damage is not unique to Europe. The difference is scale and duration, and specifically that the nineteenth-century version ran on a self-reinforcing system of coal, steel and rail rather than on a single industry.`
      },
      terms: [
        ['Smog', 'The dense mixture of coal smoke and fog in industrial cities, a routine condition rather than an occasional event.'],
        ['Smoke abatement', 'Legislation against industrial smoke, weakly enforced because smoke was read as evidence of employment.'],
        ['Peppered moth', 'The species whose dark form spread through sooted industrial regions, observed evidence of an atmospheric change.'],
        ['Externality', 'A cost of production borne by people other than the producer, which is why pollution was profitable to create.'],
        ['Fossil carbon', 'Coal and later oil burned at scale from this period, the beginning of the change Arrhenius calculated in 1896.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'elsewhere',
      num: '04',
      accent: 'oxide',
      name: 'The Footprint Was Somewhere Else',
      navLabel: 'Extraction',
      dates: 'c. 1840 to 1910 &nbsp;·&nbsp; Guano, rubber, and who dug them',
      thesis: `An industrial economy consumes raw materials it does not produce, so its environmental and human cost is exported to wherever those materials are. Two commodities carry this argument better than any others, because both were worthless before industry needed them and catastrophic afterward.`,
      parts: [
        {
          heading: 'Guano: fertilizer, indenture, debt and war',
          blocks: [
            { p: `<span class="kt">Guano</span> is accumulated seabird excrement, and on the rainless islands off Peru's Pacific coast it had built up in deposits tens of meters deep over millennia. It is extraordinarily rich in nitrogen and phosphorus, which is to say it is concentrated fertilizer, and industrializing Europe needed exactly that: cities full of factory workers had to be fed from soils that were being cropped harder than ever, and European agriculture was running short of nitrogen.` },
            { p: `From the <span class="num">1840</span>s Peru exported guano on an enormous scale, mostly to Britain and the United States, and the state took the revenue through contracts with foreign merchant houses. Digging it was appalling work, in choking ammoniac dust, in heat, on cliffs, and it was done substantially by <b>indentured Chinese laborers</b>, perhaps ninety thousand or more brought to Peru under contracts obtained by deception or coercion, alongside convicts and enslaved and formerly enslaved people. Mortality and suicide were high enough to generate diplomatic complaint and eventually an end to the traffic.` },
            { p: `Then the whole arc, which is why this is the best case in the chapter. The revenue was borrowed against, so Peru built railways and public works on guano-backed debt; the accessible deposits were depleted within a few decades; the attention moved to nitrates in the Atacama, which Peru and Bolivia and Chile disputed and which produced the War of the Pacific from <span class="num">1879</span>, in which Chile took the nitrate territory; Peru defaulted; and then, in <span class="num">1909</span> to <span class="num">1913</span>, the Haber-Bosch process for fixing atmospheric nitrogen made industrial fertilizer without any deposit at all, and the commodity that had built and broken an economy stopped mattering.` },
            { p: `Write that sequence and you have demonstrated, in one commodity, resource booms, coerced migrant labor, debt dependency, a war over raw materials, and technological obsolescence. It is the whole century.` }
          ]
        },
        {
          heading: 'Rubber: the Congo and the Amazon',
          blocks: [
            { p: `Rubber was a curiosity until Goodyear's vulcanization in the <span class="num">1840</span>s made it stable across temperatures, and then industry could not get enough of it: it insulated telegraph and electrical cable, sealed steam machinery, and made the drive belts that transmitted power from engine to machine in every factory. Bicycle and then automobile tires multiplied demand again from the <span class="num">1890</span>s. Rubber came from wild trees in tropical forests, which meant tapping had to be done by people spread across enormous areas, and that is the problem the systems below were built to solve.` },
            { p: `In the <b>Congo Free State</b>, held from <span class="num">1885</span> as the personal possession of Leopold II of Belgium, the answer was terror. Villages were assigned rubber quotas; a state force, the Force Publique, and concession-company militias enforced them by taking women and children hostage against delivery, by flogging, and by mutilation, with severed hands collected as proof that ammunition had been used on people. Villages that could not meet a quota, as wild vines were exhausted and tappers had to go further, were burned. Estimates of the population decline over the period run into the millions, from killing, starvation, flight and disease in a population under sustained duress, and while the numbers are contested the mechanism is not.` },
            { p: `In the <b>Amazon</b>, during the boom centered on Manaus and Iquitos, the pattern was debt bondage: a tapper was advanced supplies at prices he could not repay from what he produced, and was held by the debt. On the Putumayo, the Peruvian Amazon Company's operations against Indigenous peoples involved documented killing, torture and enslavement on a scale that produced a British parliamentary investigation.` },
            { p: `The boom ended for a technological reason worth knowing. Seeds taken from Brazil to Kew and then to Southeast Asia established plantation rubber in Malaya and the Dutch East Indies, which was far cheaper to produce than wild tapping, and the Amazon economy collapsed. Plantation rubber had its own coercive labor systems, so this is a relocation rather than a resolution.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the reformers used the company&rsquo;s own numbers',
              html: `The Congo case was exposed largely by people using the state&rsquo;s own paperwork against it. E. D. Morel, working as a shipping clerk in Liverpool, noticed that ships arriving from the Congo carried rubber and ivory of enormous value while ships going out carried mainly guns, ammunition and chains rather than trade goods, and concluded that nothing was being purchased, since no commerce was taking place. Missionary testimony and photographs followed, and Roger Casement&rsquo;s official British consular report of 1904 investigated on the ground; Casement later reported on the Putumayo in the same way. It is a good model of historical argument: a discrepancy in ordinary commercial records, which the company had no motive to falsify because it did not expect anyone to read them that way, supported by direct testimony gathered afterward.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Displaced ecological cost. <em>The mechanism is that an industrial economy consumes inputs its own territory does not supply, so the mining, clearance, depletion and coerced labor that produce them occur wherever the deposit or the forest is, which means the environmental and human cost of a factory in Manchester is measurable in Peru and the Congo rather than in Lancashire.</em>`,
        limit: `The extracting regions were not merely passive. Peruvian governments took the guano revenue and borrowed against it as a matter of policy, and Amazonian and Congolese intermediaries participated in the systems, so name the decisions as well as the structure.`,
        comparison: `Against <em>sugar</em> in Topic 4.5: a European demand for a tropical product, met by a coercive labor system, generating enormous profits in the metropole and destruction at the source. The nineteenth-century version is faster and more technologically driven, and the structure is the same one, which is why this belongs in a continuity argument as much as in a change one.`
      },
      terms: [
        ['Guano', 'Accumulated seabird excrement from Peru\'s coastal islands, the concentrated fertilizer that fed industrial Europe.'],
        ['Indentured labor', 'Bound contract labor, in Peru substantially Chinese, recruited by deception and worked at high mortality.'],
        ['War of the Pacific', 'The 1879 conflict over Atacama nitrate territory, a war fought over an industrial raw material.'],
        ['Congo Free State', 'Leopold II\'s personal possession from 1885, where rubber quotas were enforced by hostage-taking, flogging and mutilation.'],
        ['Vulcanization', 'Goodyear\'s process making rubber stable across temperatures, which turned a curiosity into an industrial necessity.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first demonstrates the interdependence the success criteria ask for; the last two are the environmental half.`,
    pairs: [
      {
        category: 'Interdependence',
        title: 'Each technology solved a bottleneck the last one created',
        body: `Deep coal seams flooded, so Newcomen&rsquo;s engine was built to pump them; the engine ran on coal, so more mines opened; moving coal cheaply overland required railways, which the Liverpool and Manchester proved commercially in 1830; heavy locomotives destroyed wrought-iron rails within a few years, which made cheap steel commercially urgent; Bessemer&rsquo;s converter in 1856 burned the carbon out of molten pig iron in minutes using the heat of the burning itself, and the resulting steel made rails, bridges, ships and machinery possible at scale; and railways needed telegraphs to signal whether a single-track section was clear, while telegraph lines used the railway&rsquo;s cleared right of way. That is a chain of causes, not a list of inventions.`
      },
      {
        category: 'Change',
        title: '1844 is when information stopped depending on the weather and the sea',
        body: `Optical signaling was older than this, since Chappe&rsquo;s tower relays crossed France from 1794 in minutes, but they failed at night, in fog and at the coast, so any message crossing water still moved at the speed of a ship and every distant administration delegated authority to compensate for stale information. That is why the Mongol yam and the Roman post differ from each other in degree and from an electrical cable in kind. Morse&rsquo;s Washington to Baltimore line in 1844, the Channel cable in 1851 and the durable transatlantic cable of 1866 broke it. By the 1870s a London merchant knew a Bombay price the same day, which let commodity prices converge worldwide, made futures markets workable, and let an order from London reach a colonial governor in hours, centralizing decisions that distance had previously devolved.`
      },
      {
        category: 'Environment',
        title: 'Smoke was profitable because nobody paid for it',
        body: `Industrial cities burned coal for power, heat and cooking at once, producing soot, sulfurous smogs and routine respiratory disease, while dye works, tanneries and gasworks turned rivers into industrial sewers. Britain legislated on smoke abatement from mid-century and enforced it weakly, because a factory owner prosecuted for smoke could point at the wages he paid, and the trade-off of jobs against air was resolved in favor of jobs. The producer paid for coal, labor and machinery and not for the atmosphere, so the cost was real and fell on whoever breathed it, which is what an externality is. The peppered moth&rsquo;s dark form spreading through sooted regions is the change registering in a species within decades.`
      },
      {
        category: 'Connection',
        title: 'Guano carries the whole century in one commodity',
        body: `Industrial cities had to be fed from soils cropped harder than ever, and Europe was short of nitrogen, so from the 1840s Peru exported seabird excrement from rainless Pacific islands on an enormous scale. It was dug in choking ammoniac dust substantially by indentured Chinese laborers, perhaps ninety thousand or more, recruited by deception and worked at a mortality that produced diplomatic complaint. Peru borrowed against the revenue and built railways on guano-backed debt; the deposits ran out; attention shifted to Atacama nitrates, which produced the War of the Pacific in 1879 and Chilean control of the territory; Peru defaulted; and Haber-Bosch nitrogen fixation, demonstrated in 1909 and in industrial production from 1913, made the commodity irrelevant. Resource boom, coerced migrant labor, debt dependency, a war over raw materials, and obsolescence.`
      }
    ]
  }
};
