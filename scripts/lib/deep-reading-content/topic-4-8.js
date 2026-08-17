'use strict';

/**
 * Topic 4.8, Continuity and Change: the deep reading.
 *
 * Why this exists. This is the unit's synthesis topic, and the success criteria
 * ask for three things: the first genuinely global trade network with the price
 * revolution as its effect, the demographic catastrophe and its link to the
 * Atlantic slave trade with two Columbian Exchange crops, and, weighted equally,
 * at least two specific continuities with the structural reasons they held.
 *
 * The third is where this unit is usually written badly, and it is why this
 * chapter is shaped the way it is. A student who has just read seven chapters
 * about European ships arrives at 1750 believing Europe ran the world, and then
 * has nothing left to say about what changes in Unit 5. Section 03 exists to
 * take that back, with numbers.
 *
 * Three things carried deliberately:
 *
 *   1. "Global" is given a testable definition, a closed circuit rather than a
 *      long route, so the Manila galleon becomes the evidence for a claim rather
 *      than a fact to recite.
 *   2. The continuities are structural rather than a list. Each one gets the
 *      reason it held, because "Asian trade continued" scores nothing and "Asian
 *      trade continued because European ships had nothing Asian buyers wanted"
 *      is an argument.
 *   3. Section 05 dates the transition explicitly, to Plassey and to
 *      industrialization, so a student can say what changes in Unit 5 rather
 *      than reusing the same sentence for three hundred years.
 */

module.exports = {
  topicKey: 't4-8',
  slug: 'topic-4-8-continuity-and-change',
  lessonFile: 'lesson-4-8-continuity-and-change.html',

  titleHtml: 'What Changed and What Did <em>Not</em>',
  deck: `By 1750 silver from a Bolivian mountain was paying taxes in China, a potato from the Andes was feeding Ireland, and roughly six million Africans had been carried across an ocean against their will. And the largest economies on earth were still the ones that had been largest in 1450, still trading along the same routes, still selling Europe goods Europe could not make. Both of those are true, and knowing why is what this unit was for.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 and 02 are the two great changes and section 03 is the continuities, which the success criteria weight equally and most answers do not. Section 04 is how to decide which is which when a prompt asks, and section 05 is where the line into Unit 5 actually falls.`,
    steps: [
      `<b>01 The first global circuit:</b> what makes a network global, and the price revolution it produced.`,
      `<b>02 The catastrophe and the crops:</b> the demographic change, the labor chain, and two plants that fed the world.`,
      `<b>03 What did not change:</b> three continuities with the structural reason each one held.`,
      `<b>04 Deciding which is which:</b> a method for continuity-and-change prompts.`,
      `<b>05 Where Unit 5 begins:</b> the two developments that flip the picture, and their dates.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'global',
      num: '01',
      accent: 'gold',
      name: 'The Circuit Closes',
      navLabel: 'Going global',
      dates: 'c. 1571 to 1750 &nbsp;·&nbsp; The first world economy',
      thesis: `Long-distance trade is old and the Silk Roads were vast. What happens in this period is different in kind rather than in degree: for the first time all the world&rsquo;s inhabited continents are connected in a single circuit through which goods, money and consequences travel in both directions.`,
      parts: [
        {
          heading: 'A definition you can test',
          blocks: [
            { p: `Use this test, because it makes "global" an argument instead of an adjective. A network is global when a change in one region produces a measurable effect in a region on the other side of the world through a chain of exchanges, and when the circuit closes rather than ending in a terminal market.` },
            { p: `The Silk Roads of Unit 2 fail that test, and the Topic 2.1 chapter explains why: goods moved through many hands across intermediaries, Rome and Han China barely knew each other, and the Americas were not in the system at all. The exchange was enormous and it was Afro-Eurasian.` },
            { p: `From <span class="num">1571</span>, with the Manila galleon running, the circuit closes. Silver mined at Potosi with mita labor crosses the Pacific to Manila, buys Chinese silk and porcelain from Fujianese merchants, and those goods return to Acapulco and travel on to Europe, while another and larger silver stream crosses the Atlantic to Seville and reaches Asia around Africa in Dutch and English holds. American mines, European shipping, Asian manufacture and African labor are now parts of one system in which each depends on the others.` },
            { p: `Test it with a case. Ming China consolidates its taxes into a silver payment; the price of silver in China rises above the European level; that price gap makes it worth working a mountain in the Andes at appalling human cost; the mita is imposed on Andean villages to supply the labor; the silver reaching Europe drives a century of inflation. A fiscal reform in Beijing changes wages in Seville and the death rate in Potosi. That is what global means.` }
          ]
        },
        {
          heading: 'The price revolution as evidence',
          blocks: [
            { p: `The Topic 4.5 chapter gives the mechanism; here it functions as proof of integration. Prices in Europe rose roughly threefold to fivefold across the sixteenth century, and they rose in countries with no American colonies as well as in Spain, which is the detail that matters. An inflation confined to the empire that owned the mines would show a Spanish story. An inflation across Europe shows that the silver moved through a connected market faster than any government could contain it.` },
            { p: `The distributional effects, real wages falling behind prices, debtors gaining, landlords able to raise rents gaining, are the human content of that integration, and they are worth naming because they show a world market reaching people who had never seen a ship.` }
          ]
        }
      ],
      useThis: {
        tool: `The closed circuit test. <em>The mechanism is that a trade network becomes global rather than merely long when goods and money return to their origin through an unbroken chain, because a closed circuit transmits changes in both directions, so a tax reform in one region alters prices and labor conditions in two others and the whole system can be said to have a single economy rather than adjoining ones.</em>`,
        limit: `Global does not mean equal or integrated in the modern sense. Volumes were small relative to domestic economies, most people lived and ate locally, and the effects were fastest in money and slowest in everything else.`,
        comparison: `Against the <em>Silk Roads</em> in Topic 2.1: those moved goods across Afro-Eurasia through many intermediaries with no closed circuit and no American participation, so Rome received silk without any Han fiscal decision touching Roman prices. Adding one ocean crossing in 1571 is what converts a long route into a world economy.`
      },
      terms: [
        ['Global circuit', 'A trade network in which exchange returns to its origin, so a change in one region has measurable effects in another.'],
        ['Manila galleon', 'The Acapulco to Manila route from 1571, the link that closed the circuit across the Pacific.'],
        ['Price revolution', 'The sixteenth-century European inflation, which occurred in states with no colonies and therefore evidences an integrated market.'],
        ['Real wages', 'What a wage buys, which fell across much of Europe as prices outran pay during the silver inflation.'],
        ['World economy', 'A set of regions whose production and prices depend on each other, as distinct from regions that merely trade.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'catastrophe',
      num: '02',
      accent: 'rust',
      name: 'The Catastrophe and the Crops',
      navLabel: 'People and plants',
      dates: 'c. 1492 to 1800 &nbsp;·&nbsp; Demography in both directions',
      thesis: `The demographic story of this period runs in two opposite directions at once, and putting them in the same paragraph is what makes it an argument: one hemisphere lost most of its population to disease while the other grew on crops that came from it.`,
      parts: [
        {
          heading: 'The collapse, and the chain it set off',
          blocks: [
            { p: `The Topic 4.3 chapter has the mechanism in full; what belongs here is the summary and the chain. Pre-contact population estimates for the Americas commonly run from about forty to sixty million and higher, and the decline over the following century and a half is commonly estimated at something between half and ninety percent, worst in the Caribbean and in the densest mainland regions. The cause was virgin soil epidemics of Afro-Eurasian crowd diseases, compounded by warfare, forced labor and the disruption of farming, and it fell where it did because of domesticated herd animals and long isolation rather than anything about the people.` },
            { p: `The chain to the Atlantic slave trade is what the success criteria ask you to connect, and it has middle links. Colonizers wanted silver and sugar, both extraordinarily labor-intensive. The first labor systems, encomienda and an adapted mita, drew on Indigenous communities, and those communities collapsed. European indentured servants were expensive, served fixed terms, had legal standing and died in tropical conditions. Enslaved Africans were reachable through a Portuguese supply network already running, were already working the plantation model on Madeira and Sao Tome, held a status that was permanent and heritable, had no state able to intervene for them, and survived malaria and yellow fever better than the alternatives. Roughly twelve million were embarked across the whole trade and about ten and a half million survived the crossing, with the peak in the eighteenth century.` },
            { p: `Write the links. A student who writes that the population collapsed and therefore Africans were enslaved has skipped every decision that was made, and it is the decisions that make it history rather than weather.` }
          ]
        },
        {
          heading: 'Two crops, and what they did',
          blocks: [
            { p: `<b>The potato</b> is the clearest case. It yields more calories per acre than the grains it competed with in Europe, grows in cool, wet, poor soils and at altitude, and stores underground, which also means it survives the passage of an army that would have burned a grain field. It was slow to be accepted and then spread widely across northern Europe, and it underwrote population growth in Ireland, Prussia, Poland and Russia. Its risk arrived with the dependency: a population living on one crop, and largely on a narrow genetic range of it, has no margin, which is what the Irish famine of the <span class="num">1840</span>s demonstrated.` },
            { p: `<b>Maize</b> is the second, and its reach is wider. It grows fast, tolerates a range of conditions and yields heavily, and it spread into southern Europe, across Africa, and into China, where together with the sweet potato it allowed cultivation of dry hill land unsuited to rice or wheat and helped support the enormous Qing population growth of the eighteenth century. In Africa maize and cassava, the latter valuable because it grows in poor soil, resists drought and stores in the ground, became staples over large regions. The dark irony belongs in the sentence: crops from the Americas raised the carrying capacity of African populations during the centuries in which the Atlantic trade was removing millions of people.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write the exchange as a mutual swap of foods. The traffic in plants ran both ways and the consequences did not. One hemisphere received crops that raised its population, and the other received pathogens that destroyed its population, along with livestock that damaged its agriculture and a plantation system that consumed imported labor. The accurate framing is a transfer with catastrophically asymmetric effects, and the phrase to avoid is any version of "both sides benefited from the exchange."`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Calorie yield as a demographic driver. <em>The mechanism is that a crop producing more calories per acre on land the existing staples cannot use does not merely feed the same people better, it brings marginal land into cultivation, which raises the population a region can support and, when that population comes to depend on a single crop, removes the margin that mixed farming provided.</em>`,
        limit: `Adoption was slow and uneven, driven by famine, state promotion and price rather than by obvious advantage, and the timing of population growth has other causes too, so treat crops as a major contributor rather than a sole one.`,
        comparison: `Against <em>Champa rice</em> in Topic 1.1: a fast-ripening, drought-tolerant variety spread into Song China and enabled double-cropping and a population surge, which is exactly the mechanism maize and the sweet potato repeat there five centuries later. The same causal shape appearing twice in one course is worth citing, because it shows the argument is structural rather than a story about one plant.`
      },
      terms: [
        ['Virgin soil epidemic', 'An outbreak in a population with no prior exposure, infecting all ages at once and disabling the society as well as the individuals.'],
        ['Labor chain', 'The sequence from encomienda and mita through indenture to hereditary Atlantic slavery, each link a decision with alternatives.'],
        ['Potato', 'The Andean tuber that raised calorie yields on poor northern soils and underwrote European population growth, at the cost of dependency.'],
        ['Maize', 'The American grain that spread into Africa, southern Europe and China, opening hill land unsuited to rice or wheat.'],
        ['Cassava', 'The American root staple that tolerates poor soil and drought and stores in the ground, adopted widely across Africa.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'continuities',
      num: '03',
      accent: 'iron',
      name: 'What Did Not Change',
      navLabel: 'Continuities',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; The structural reasons',
      thesis: `This is the half of the unit most answers omit, and the success criteria weight it equally. Three things carried on straight through the age of European expansion, and each one continued for a structural reason you can state.`,
      parts: [
        {
          heading: 'Indian Ocean trade kept running, in Asian hands',
          blocks: [
            { p: `Gujarati, Tamil, Malay, Arab, Armenian and Chinese merchant networks continued to carry the majority of Indian Ocean commerce throughout this period. The Portuguese cartaz of Topic 4.4 taxed a share of it from a string of forts and never controlled it, and Asian shipping continued to move rice, cotton, timber, spices, horses and pilgrims along routes that predated any European arrival.` },
            { p: `The structural reason is that the Europeans could not replace the function. Those networks rested on credit relationships, kinship, brokerage and local knowledge built over centuries, in ports whose rulers were not European subjects, carrying an intra-Asian trade that was far larger than the European long-distance trade laid over it. A fort at a strait can tax passing cargo; it cannot manufacture the commercial relationships that produce the cargo.` }
          ]
        },
        {
          heading: 'Asia still made the goods',
          blocks: [
            { p: `China and India remained the world's largest economies and its dominant manufacturers throughout the period. Indian cotton textiles were finer, better dyed and cheaper than European weaving could match, so much so that England legislated against them in the Calico Acts rather than compete. Chinese porcelain and silk had no European equal, and European potters could not reproduce true porcelain until Meissen in the early eighteenth century.` },
            { p: `The structural reason is skill and scale. Indian weaving and dyeing and Chinese ceramics rested on centuries of accumulated technique, dense specialist workforces, established supply chains and enormous domestic markets that supported production at a scale European workshops had no equivalent of. Shipping does not substitute for that. What Europeans had to sell was silver, which is the balance-of-payments point from Topic 4.5 and the single most useful continuity in the unit.` }
          ]
        },
        {
          heading: 'The land empires and the Islamic networks held',
          blocks: [
            { p: `The Ottoman, Safavid, Mughal and Qing states of Unit 3 governed most of Asia's population and wealth throughout this period, and none of them was conquered by a European power within it. Mughal territory and revenue peaked in the late seventeenth century; the Qing expanded enormously into Central Asia in the eighteenth. Where Europeans held territory in Asia it was islands and coastal enclaves.` },
            { p: `The structural reason is the one Topic 4.4 establishes: European advantage was naval, and it evaporated inland against states with field armies, tax systems and populations many times larger. The advantage was real, and it was shaped like a coastline.` },
            { p: `Alongside them, the Islamic commercial and religious networks of Unit 2 continued: the Hajj, the trans-Saharan routes, the scholarly and legal connections across the Dar al-Islam, and the spread of Islam in Southeast Asia and West Africa, which continued through this period and was not interrupted by European maritime activity because it did not depend on the sea lanes Europeans controlled.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: estimates of what the world produced',
              html: `Claims that China and India held the largest share of world output come from historical national accounting, most influentially Angus Maddison&rsquo;s estimates, which reconstruct population and output per person for regions back through this period. On those figures China and India together account for roughly half of world output as late as <span class="num">1700</span>. Economic historians dispute the method vigorously, because reconstructing output per person before national statistics existed requires heavy assumptions, and rival estimates differ. What no one disputes is the direction: Asia was the center of world manufacturing throughout this period, corroborated independently by trade records showing Europe paying in bullion, and by the technological gap that made Europeans copy Asian goods rather than the reverse. Cite the direction confidently and the percentage carefully.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The limits of a naval advantage. <em>The mechanism is that superiority in ships and guns lets a power control movement between places without controlling production inside them, so it can tax routes, seize harbors and shift prices while remaining a customer of the economies it sails to, which is why the same century holds both European maritime dominance and continued Asian economic dominance without contradiction.</em>`,
        limit: `Continuity is not stasis. Asian economies were reshaped by the silver they absorbed, by new crops and by European demand, so the routes and producers persisted while the volumes and money supply did not.`,
        comparison: `Against <em>Unit 3&rsquo;s land empires</em>: those expanded by absorbing contiguous territory and taxing its population, so their power grew with the ground they held. Maritime power grew with the routes it held, which is why one kind of empire is measured in provinces and the other in ports, and why the two coexisted for two and a half centuries without either destroying the other.`
      },
      terms: [
        ['Merchant diaspora', 'The Gujarati, Tamil, Armenian, Arab and Chinese networks that continued to carry most Indian Ocean trade.'],
        ['Intra-Asian trade', 'Commerce between Asian ports, far larger in volume than the European long-distance trade laid over it.'],
        ['Calico Acts', 'English restrictions on Indian cotton imports, protectionism by the less advanced manufacturer.'],
        ['Dar al-Islam', 'The connected Islamic world of pilgrimage, scholarship and commerce, whose networks continued through this period.'],
        ['Historical national accounting', 'The reconstruction of past output and population, the basis for share-of-world-economy claims and heavily assumption-dependent.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'method',
      num: '04',
      accent: 'oxide',
      name: 'Deciding Which Is Which',
      navLabel: 'The method',
      dates: 'A method &nbsp;·&nbsp; For any continuity and change prompt',
      thesis: `Continuity-and-change prompts are lost by treating them as two lists. The way to win one is to notice that most things in history change in some respects and persist in others at the same time, and to say which respect you mean.`,
      parts: [
        {
          heading: 'Four questions to ask of anything',
          blocks: [
            { p: `<b>Ask about the thing or the arrangement.</b> Slavery is a continuity as an institution and a change in its form: hereditary, racialized, agricultural and on an Atlantic scale is not what the Indian Ocean or Mediterranean systems of Unit 2 were. Say which level you mean and the answer stops contradicting itself.` },
            { p: `<b>Ask who it changed for.</b> The period is a catastrophic change for Indigenous Americans, a catastrophic change for enslaved Africans, a substantial change for Western Europe, and something much closer to continuity for a Chinese farmer or an Ottoman townsman, whose new crops and silver-denominated taxes were real but whose world was not remade. A claim about change should name a population.` },
            { p: `<b>Ask over what span.</b> Across 1450 to 1750 the world economy is transformed. Across 1450 to 1550 very little outside the Americas has changed yet. A prompt's dates are part of its question.` },
            { p: `<b>Ask what would have to be true for the opposite claim.</b> If you want to argue European dominance by 1750, ask what Europe was selling Asia. The answer, silver, is fatal to the claim, and finding that out before a grader does is the entire value of the exercise.` }
          ]
        },
        {
          heading: 'A worked line',
          blocks: [
            { p: `Take "to what extent did the period 1450 to 1750 transform the world economy." A strong answer says: it transformed the <b>connections</b> and left the <b>centers</b> in place. The connections are new, a closed global circuit for the first time, an Atlantic economy that did not exist, a Pacific route from 1571, and an integrated silver market that moved prices in countries with no colonies. The centers are old: China and India remained the largest economies and dominant manufacturers, Asian merchants still carried most Indian Ocean trade, and Europe paid its way with a metal rather than with anything it made.` },
            { p: `That single sentence, connections transformed and centers unchanged, is a thesis, and everything in this unit is evidence for one half or the other of it.` }
          ]
        }
      ],
      useThis: {
        tool: `Separating the level of the claim. <em>The mechanism is that any historical subject exists at several levels at once, the institution and its form, the route and its operators, the connections and the centers, so a question that looks contradictory resolves as soon as you specify the level, and the specification itself is the analytical move a grader is looking for.</em>`,
        limit: `It is a method for structuring an answer, not a substitute for knowing things. Every level you name still has to be supported with a specific case.`,
        comparison: `Against the <em>Topic 3.4</em> chapter&rsquo;s comparison method: there the task was to hold five empires against one question, here it is to hold one period against two questions. Both work by fixing what varies and stating it in the thesis rather than discovering it in the last paragraph.`
      },
      terms: [
        ['Level of claim', 'Whether you are describing an institution, its form, its operators or its scale, which decides whether something counts as continuity.'],
        ['Scope', 'The population a claim applies to, which a good thesis names rather than implying everyone.'],
        ['Periodization', 'The dates a claim covers, which change the answer and are part of the question.'],
        ['Counterfactual test', 'Asking what would have to be true for the opposite claim, the fastest way to find the weakness in your own.'],
        ['Thesis', 'The sentence that states what changed and what did not, at what level, for whom, which the rest of the essay supports.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'handover',
      num: '05',
      accent: 'gold',
      name: 'Where Unit 5 Begins',
      navLabel: 'The handover',
      dates: 'c. 1750 to 1850 &nbsp;·&nbsp; The two developments that flip it',
      thesis: `If Europeans were maritime specialists and commercial dependents in 1750, then something specific happens next, and knowing what it is protects every essay you will write about the nineteenth century.`,
      parts: [
        {
          heading: 'Two developments, with dates',
          blocks: [
            { p: `<b>Territorial revenue in Asia.</b> The East India Company defeated the Nawab of Bengal at Plassey in <span class="num">1757</span> and acquired the <em>diwani</em>, the right to collect Bengal's land revenue, in <span class="num">1765</span>. That single change converts a trading company into a government with a tax base, which means it no longer needs to ship silver from Europe to buy Indian goods: it can buy them with revenue extracted in India. The balance-of-payments problem that had defined Europe's position in Asia for two and a half centuries stops being a problem, not because Europe started making better goods but because a company started collecting taxes.` },
            { p: `<b>Industrial production.</b> Mechanized spinning and weaving from the later eighteenth century, and steam power after it, let British producers make cotton cloth more cheaply than Indian handloom weavers, reversing a relationship that had held throughout this unit. Within a few decades Britain was exporting cotton textiles to India, and Indian weaving communities were devastated. That reversal, and not any event in Unit 4, is what "European economic dominance" actually names.` },
            { p: `Both of these are Unit 5. Writing them into Unit 4, or writing Unit 4 as though they had already happened, is the single most common structural error in this part of the course, and avoiding it is worth more than any additional fact.` }
          ]
        },
        {
          heading: 'What Unit 4 handed over',
          blocks: [
            { p: `The period did leave Europe with things that mattered enormously for what came next, and naming them is the accurate version of "the rise of the West" rather than the inflated one. Access to American land and resources, silver above all. An Atlantic economy of plantations and coerced labor generating capital. Financial institutions built to handle long-distance risk, joint-stock companies, insurance markets, public debt and central banking. Naval and gunnery capability. And a habit of competitive state investment in maritime enterprise that had no equivalent among the land empires.` },
            { p: `None of those add up to dominance in 1750, and all of them are inputs to what happens after. The honest sentence, and the one to end an essay with, is that in 1750 Europeans held the routes and the Americas and were customers everywhere else, and that the reversal comes from Bengal revenue and the factory rather than from the caravel.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The error to avoid is a single phrase reused across three centuries. If "European dominance" describes 1500, 1650, 1750 and 1850 equally, then nothing in your account has changed and no continuity-and-change prompt can be answered from it. Date the claim: maritime and American dominance from the sixteenth century, commercial dependence in Asia until the mid-eighteenth, territorial revenue in Bengal from <span class="num">1765</span>, and productive superiority only with industrialization. Four dated claims beat one undated one every time.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Revenue replacing bullion. <em>The mechanism is that a trading company which acquires the right to collect land tax in a producing region no longer has to ship money in to buy goods, because it can purchase them with revenue taken locally, which converts a chronic trade deficit into a self-financing extraction and removes the constraint that had limited European trade in Asia for two centuries.</em>`,
        limit: `It applies to Bengal first and spreads unevenly, and it does not by itself explain the productive reversal, which requires industrialization as a separate development.`,
        comparison: `Against the <em>Estado da India</em> in Topic 4.4: Portugal taxed movement through a chokepoint and remained dependent on buying what it shipped, while the Company after 1765 taxed production itself. The difference between taxing a route and taxing a field is the difference between Unit 4 and Unit 5.`
      },
      terms: [
        ['Plassey', 'The 1757 battle beginning East India Company territorial power in Bengal.'],
        ['Diwani', 'The right to collect Bengal\'s land revenue, granted in 1765, which turned a trading company into a government.'],
        ['Industrialization', 'Mechanized production from the later eighteenth century, which reversed the textile relationship that had held throughout this unit.'],
        ['Deindustrialization', 'The destruction of Indian handloom weaving as cheap British cloth entered the market, the reversal seen from the other side.'],
        ['Dated claim', 'A statement of dominance tied to a sphere and a period, which is what makes change visible across units.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first is the unit thesis, and the third is the half most answers leave out.`,
    pairs: [
      {
        category: 'Thesis',
        title: 'The connections were transformed and the centers were not',
        body: `Before 1492 no network joined all inhabited continents; from 1571 the Manila galleon closed the circuit, so Potosi silver mined with mita labor bought Chinese silk at Manila while a larger stream crossed the Atlantic and reached Asia around Africa. A Ming tax reform requiring payment in silver therefore set the price that made an Andean mountain worth working and drove a century of inflation in European countries that owned no colonies. That is a genuinely new world economy. Meanwhile China and India remained the largest economies and dominant manufacturers, Asian merchant networks still carried most Indian Ocean trade, and Europe paid its way in metal rather than in anything it made. Connections transformed, centers unchanged, and the unit is evidence for one half or the other.`
      },
      {
        category: 'Chains',
        title: 'Depopulation did not cause the slave trade; six decisions did',
        body: `Pre-contact American population estimates run from about forty to sixty million and higher, and the decline over the next century and a half is commonly put between half and ninety percent, caused by virgin soil epidemics compounded by warfare, forced labor and disrupted farming. Then colonizers wanting silver and sugar drew first on encomienda and an adapted mita; those populations collapsed; European indenture was costly, time-limited, legally protected and deadly in the tropics; and enslaved Africans were reachable through an existing Portuguese network, already working the plantation model on Madeira and Sao Tome, held in a permanent heritable status with no state to intervene, and more resistant to malaria and yellow fever. About twelve million were embarked and ten and a half million survived. Every link is a decision with an alternative.`
      },
      {
        category: 'Continuity',
        title: 'Asian networks continued because Europeans could not replace their function',
        body: `Gujarati, Tamil, Arab, Armenian and Chinese merchants carried most Indian Ocean trade throughout the period, and Portugal&rsquo;s cartaz taxed a share of it from about fifty forts without controlling it. The reason is structural: those networks rested on credit, kinship, brokerage and local knowledge built over centuries, in ports whose rulers were not European subjects, serving an intra-Asian trade larger than the European traffic laid over it. A fort at a strait can tax cargo and cannot manufacture the relationships that produce it. The same logic explains manufacturing: Indian dyed cottons and Chinese porcelain rested on accumulated technique, specialist workforces and vast domestic markets, which is why England banned calicoes rather than compete and why Europe could not make porcelain until Meissen.`
      },
      {
        category: 'Periodization',
        title: 'The reversal comes from Bengal revenue and the factory, not the caravel',
        body: `Throughout 1450 to 1750 Europeans dominated ocean routes and the Americas while paying for Asian goods in silver because they made nothing Asia wanted. Two later developments flip that. The East India Company won at Plassey in 1757 and took the diwani of Bengal in 1765, which let it buy Indian goods with Indian tax revenue instead of imported bullion. Then mechanized spinning and weaving from the later eighteenth century let British producers undersell Indian handloom weavers, and within decades Britain was exporting cotton cloth to India. Date the claim in four parts rather than reusing one phrase for three centuries, and the change between Unit 4 and Unit 5 becomes something you can actually argue.`
      }
    ]
  }
};
