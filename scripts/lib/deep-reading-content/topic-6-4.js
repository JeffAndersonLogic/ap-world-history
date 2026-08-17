'use strict';

/**
 * Topic 6.4, Global Economic Development: the deep reading.
 *
 * Why this exists. The learning objective is environmental factors in the global
 * economy, and the success criteria name Egyptian cotton, Amazon and Congo
 * rubber and West African palm oil. Taught as a survey this becomes a list of
 * commodities, which teaches nothing, because the interesting fact is not that
 * a place grew cotton but that growing cotton for export changed what the place
 * was: its labor system, its tax base, its debts and eventually its sovereignty.
 *
 * So the chapter runs one variable through five sections: WHO OWNED THE LAND AND
 * THE CROP. That single question sorts the cases better than geography does.
 * Where households owned the trees, as in the palm-oil delta, the gains stayed
 * local until Europeans took the land itself. Where the resource was wild and
 * unownable, as with Amazon and Congo rubber, the only way to raise output was
 * coercion. Where a state owned the deposit, as with Peruvian guano, the export
 * financed borrowing rather than development and ended in default and war.
 *
 * Three things carried deliberately:
 *
 *   1. Egypt is the cleanest causal chain in Unit 6: one crop, a boom, a debt,
 *      a foreign debt commission, and an occupation. A student who can write
 *      that chain can write causation for the whole unit.
 *   2. Wild rubber could not be intensified by investment, only by more labor
 *      days, which is why the Congo and the Putumayo converged on the same
 *      methods with nothing else in common. The mechanism is in the botany.
 *   3. Growth is not development. Export economies grew, sometimes fast, while
 *      acquiring a structure that made the next shock worse. That distinction is
 *      the chapter's spine and the thing worth memorizing.
 */

module.exports = {
  topicKey: 't6-4',
  slug: 'topic-6-4-global-economic-development',
  lessonFile: 'lesson-6-4-global-economic-development.html',

  titleHtml: 'One Crop, and What It <em>Costs</em>',
  deck: `Industrial factories in Europe and North America needed things that do not grow there: cotton, rubber, palm oil, nitrates, sugar, tin, jute. Between about <span class="num">1820</span> and <span class="num">1900</span> whole regions were rebuilt to supply them, and the rebuilding reached much further than the fields. It changed who owned land, who worked and under what compulsion, what a government could tax, what it could borrow, and in two of the cases here, who governed. This chapter follows one question through five sections: who owned the land and the crop.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the model and the other four are cases that test it. Read the model first even if you are revising a single case, because the exam question will ask you to explain an effect rather than to describe a commodity, and the model is where the explanations are.`,
    steps: [
      `<b>01 The model:</b> what an export economy is, and why growth and development are different measurements.`,
      `<b>02 Egypt:</b> cotton to boom to debt to occupation, the clearest causal chain in the unit.`,
      `<b>03 Rubber:</b> why a wild crop produces a coercive labor system, and why the boom ended in a greenhouse.`,
      `<b>04 Palm oil:</b> the case where African households owned the trees, and what changed when that ended.`,
      `<b>05 Guano, beef, diamonds:</b> four ownership structures, four different countries afterward.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'model',
      num: '01',
      accent: 'gold',
      name: 'Growth Is Not Development, and the Difference Is Structural',
      navLabel: 'The model',
      dates: 'c. 1820 to 1900 &nbsp;·&nbsp; What specialization does to a place',
      thesis: `An <span class="kt">export economy</span> is not simply an economy that exports. It is one reorganized around a single commodity for a distant market, and the reorganization has four consequences that arrive whether or not the commodity is profitable: price exposure, a missing supply chain, infrastructure built in the wrong shape, and a state whose revenue rises and falls with a price it does not set.`,
      parts: [
        {
          heading: 'Four consequences, each with its mechanism',
          blocks: [
            { p: `<b>1. Price volatility, transmitted straight into wages and taxes.</b> Commodity prices swing far more violently than manufactured-goods prices, because supply cannot respond quickly, a tree planted this year bears in seven, and demand is set by industrial cycles on the other side of the world. A country that grows five crops absorbs a bad year in one of them. A country that grows one has no absorption at all, so a price fall becomes a fiscal crisis and then a political one.` },
            { p: `<b>2. Missing linkages.</b> Economists distinguish backward linkages, the industries that grow up to supply an activity, from forward linkages, the industries that process its output. Raw cotton shipped to Lancashire generates the spinning, weaving, dyeing, machine-building and chemical industries there, and generates a gin, a bale press and a railway siding at home. The value added in the manufacturing stages is exactly where wages, skills and further industries come from, and the structure of an export economy places all of it somewhere else. This is why a place can export more every year for fifty years and end the period with the same range of jobs it started with.` },
            { p: `<b>3. Infrastructure with a shape.</b> Railways in export economies typically ran from a producing region to a port and did not connect producing regions to each other. That geometry is not a failure of planning; it is the plan, since the purpose was to move a commodity out. But it means the railway does not create an internal market, and an internal market is what turns transport into development. Look at a rail map of Argentina, of British West Africa or of India in <span class="num">1900</span> and the shape tells you what the network was for.` },
            { p: `<b>4. Terms of trade, and the ratchet on the state.</b> Export earnings became the basis for government borrowing on the London and Paris markets, because a lender lends against a revenue stream. When the price is high the state borrows against it; when the price falls the debt does not fall with it. Section 02 is what that does.` }
          ]
        },
        {
          heading: 'The environmental half, which the objective is actually asking about',
          blocks: [
            { p: `The learning objective names environmental factors, and it is worth being exact about what that means here, because it is not scenery. Three environmental facts do the causal work in this chapter.` },
            { p: `<b>Where a crop will grow.</b> Long-staple cotton wants heat and a controlled water supply, which is why Egypt and not Anatolia. Hevea rubber is native to the Amazon basin and grew nowhere else in commercial quantity until <span class="num">1876</span>. Oil palms are native to West Africa. The map of nineteenth-century export economies is in large part a map of biological accident, and that accident determined which societies were pulled into the industrial world as suppliers.` },
            { p: `<b>Whether it can be cultivated or must be gathered.</b> This is the sharpest environmental variable in the chapter, and section 03 is built on it. A crop that can be planted in rows can be intensified by investment: irrigate it, fertilize it, put a rail line through it, raise the yield per worker. A resource that grows wild and scattered can be intensified only by putting more people into the forest for more days, which means the labor system, not the technology, becomes the only lever there is.` },
            { p: `<b>What the extraction does to the ground.</b> Soil exhaustion under monoculture, salinization under perennial irrigation, deforestation, the collapse of a fishery or a bird colony that had been harvested faster than it reproduced. These arrive late, after the boom has already reorganized the society, which is why they so often coincide with the price fall rather than offsetting it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that export economies made these regions poor, full stop, or that they produced no growth. Both are too crude and a good answer avoids them from opposite directions. Egyptian cotton, Argentine beef and South African gold generated enormous revenues, real cities, railways, ports and, in some places, genuine rises in income. The defensible claim is about <b>structure rather than quantity</b>: these economies grew while acquiring a shape, one crop, no processing industries, transport pointed at a port, and government finance resting on a price set abroad, that made them acutely vulnerable to a shock they could not control and left the value-adding stages permanently elsewhere. Write "growth without development" and then explain what the structure lacked, and you have an argument rather than a verdict.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Specialization without linkages. <em>The mechanism is that shipping a raw commodity out places every value-adding stage, processing, machine-building, chemicals, finance, in the importing country, so an export region can raise its output for decades and still have the same narrow range of jobs and skills at the end, because the industries that would have grown around the crop grew around the mill instead.</em>`,
        limit: `It is not a universal law. Regions that captured processing, or that had a state able to tax the export and invest the proceeds elsewhere, did better, which is a large part of what separates Argentina from Peru and Japan from almost everyone.`,
        comparison: `Against the <em>Atlantic sugar economy</em> of Topic 4.5: the same structure two centuries earlier, one crop, coerced labor, refining and profit located in the metropole, and the continuity is the point. What is new after 1850 is scale, the speed of the transport, and the fact that the market is industrial demand rather than luxury consumption.`
      },
      terms: [
        ['Export economy', 'An economy reorganized around one commodity for a distant market, with the effects following from the structure rather than the price.'],
        ['Linkages', 'The supplying and processing industries an activity generates, which in an export economy grow in the importing country instead.'],
        ['Terms of trade', 'The ratio of export prices to import prices, which decides how much a fixed quantity of a crop can buy.'],
        ['Monoculture', 'Dependence on a single crop, which removes any capacity to absorb a bad year and exhausts the soil that grows it.'],
        ['Growth without development', 'Rising output alongside an unchanged range of jobs, skills and industries, the characteristic outcome of this structure.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'egypt',
      num: '02',
      accent: 'iron',
      name: 'From a Cotton Boom to a British Occupation in Twenty Years',
      navLabel: 'Egypt',
      dates: '1820 to 1882 &nbsp;·&nbsp; Muhammad Ali, the Civil War boom, the Caisse, Tel el-Kebir',
      thesis: `Egypt is the chapter's clearest causal chain because every link is dated and none of it requires an argument about intentions. A state built an export crop, a foreign war quadrupled its price, the state borrowed against the boom, the price fell, the debt did not, foreign creditors took control of the budget, an army officers' movement objected, and Britain invaded to protect the debt.`,
      parts: [
        {
          heading: 'Building the crop, then the boom that looked like a windfall',
          blocks: [
            { p: `Muhammad Ali, governor of Egypt from <span class="num">1805</span>, ran one of the most ambitious state-building programs of the century: a conscript army, factories, schools, and above all the introduction from the <span class="num">1820</span>s of long-staple <b>Jumel cotton</b>, which was of high enough quality to command a premium in Europe. Cultivation required perennial irrigation, which required barrages and canals, which were dug by conscripted <b>corvée</b> labor on a large scale. The state monopolized the crop, buying from cultivators at a fixed price and selling on the world market, which financed the whole program.` },
            { p: `Then the accident. The <b>American Civil War</b> from <span class="num">1861</span> cut off the South's cotton exports and Lancashire's mills faced a famine of raw material. Egyptian cotton prices rose several times over in a few years. Land was converted to cotton wholesale, fortunes were made, and the Khedive <b>Ismail</b>, who took power in <span class="num">1863</span>, treated the revenue as permanent.` },
            { p: `He spent it, and borrowed against it, on a scale that is difficult to overstate: railways, telegraphs, sugar mills, harbors, schools, the rebuilding of Cairo on a Parisian plan, and Egypt's share of the <b>Suez Canal</b>, opened in <span class="num">1869</span> and dug in large part by conscripted Egyptian labor at a cost in lives that was never counted. The borrowing was on European markets at high rates through intermediaries who took heavy commissions, so the sums Egypt received were considerably smaller than the sums it owed. The public debt rose from a modest figure at Ismail's accession to roughly a hundred million pounds by the mid <span class="num">1870</span>s.` }
          ]
        },
        {
          heading: 'The fall, the commission, and the invasion',
          blocks: [
            { p: `The American war ended in <span class="num">1865</span> and southern cotton returned to the market. Prices collapsed. The revenue against which everything had been borrowed shrank, the debt service did not, and Egypt was insolvent. In <span class="num">1875</span> Ismail sold Egypt's Suez Canal shares to the British government, which acquired for a modest sum the largest single holding in the canal carrying its own route to India. In <span class="num">1876</span> Egypt defaulted.` },
            { p: `What followed is the mechanism worth memorizing. The creditors' governments established the <b>Caisse de la Dette Publique</b>, a debt commission with authority over Egyptian revenues, and then a system of <b>dual control</b> under which a British and a French controller supervised the budget directly. Egyptian taxes were raised, spending on everything except debt service was cut, and Ismail, who resisted, was deposed in <span class="num">1879</span> at European insistence. Sovereignty had not been formally taken; it had been rendered inoperative, which is Topic 6.5's subject arriving by way of a ledger.` },
            { p: `The reaction is the part most surveys omit and it is the most important. A movement gathered around Colonel <b>Ahmad Urabi</b>, drawing on Egyptian army officers blocked from promotion by a Turkish-Circassian elite, on landholders squeezed by taxation, and on wide popular anger at foreign control of the budget, under the slogan Egypt for the Egyptians. It won a constitutional government in <span class="num">1882</span>. Britain, with the canal and the debt both at stake, bombarded Alexandria, landed an army and destroyed Urabi's forces at <b>Tel el-Kebir</b> in September <span class="num">1882</span>. The occupation that was announced as temporary lasted, in one form or another, for seventy years.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: bondholders keep excellent records',
              html: `This chain is unusually well documented, and for a specific reason: it runs through financial institutions that had to publish. We have the loan prospectuses issued in London and Paris, the price of Egyptian bonds quoted daily, the Caisse's own accounts, consular correspondence, and parliamentary papers debating the intervention. Debt is a written instrument, so its history survives in a way that, say, the history of a peasant household's water rights does not. The caution that comes with the source is the usual one about abundance: because the creditors' paperwork is the fullest record, it is easy to write this story as one about finance in which Egyptians appear only when they revolt. The Arabic press of the period, the Urabist petitions and the records of the rural courts are what correct that, and they show a politics of taxation and land that had been running for a decade before a European reader noticed it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Debt as the route to occupation. <em>The mechanism is that a state borrowing against a commodity price it does not control finds, when the price falls, that the debt is unchanged and the revenue is not, so creditors&rsquo; governments take control of the budget to secure repayment, and any domestic movement objecting to that control becomes a threat to the debt, which supplies the pretext and the motive for military intervention.</em>`,
        limit: `Britain also had a strategic motive that would have existed without a single bond, since Suez was the route to India, and historians continue to argue about the relative weight of the debt and the canal in the 1882 decision.`,
        comparison: `Against <em>the Ottoman Empire</em>, which defaulted in 1875 and accepted the Ottoman Public Debt Administration in 1881: the same instrument, foreign control of revenues to service foreign debt, without an occupation, because the Ottoman state was too large and too strategically balanced for any one power to take. Setting the two together shows that debt control was the general mechanism and invasion was what happened when a single power could act alone.`
      },
      terms: [
        ['Jumel cotton', 'The long-staple variety introduced under Muhammad Ali from the 1820s, which required perennial irrigation and corvee labor.'],
        ['Cotton famine', 'The 1861 to 1865 interruption of American supply that multiplied Egyptian prices and made the boom look permanent.'],
        ['Caisse de la Dette', 'The 1876 foreign debt commission with authority over Egyptian revenues, followed by Anglo-French dual control.'],
        ['Urabi movement', 'The officers\' and popular movement of 1879 to 1882 against foreign budgetary control, defeated at Tel el-Kebir.'],
        ['Occupation of 1882', 'The British invasion that followed, announced as temporary and sustained in some form for about seventy years.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'rubber',
      num: '03',
      accent: 'rust',
      name: 'A Crop You Cannot Plant Produces a Labor System You Cannot Reform',
      navLabel: 'Rubber',
      dates: '1879 to 1913 &nbsp;·&nbsp; The Amazon, the Congo, and seventy thousand seeds',
      thesis: `Wild rubber is the chapter's purest environmental argument. Because <em>Hevea</em> grew scattered through the forest rather than in stands, output could not be raised by investing in the crop, only by compelling more people to walk further and tap longer, which is why two regimes with nothing else in common, a Belgian king's private state and a British-registered company in Peru, arrived at the same methods.`,
      parts: [
        {
          heading: 'Why the botany produced the violence',
          blocks: [
            { p: `The industrial demand was new and enormous. Vulcanization had made rubber usable across a range of temperatures; then electrical insulation, then the bicycle boom of the <span class="num">1890</span>s, then the pneumatic automobile tire, each multiplied the market. Between about <span class="num">1880</span> and <span class="num">1910</span> rubber was among the most valuable commodities in the world.` },
            { p: `Almost all of it came from wild trees and vines, and in the Amazon the reason was ecological rather than commercial. <em>Hevea brasiliensis</em> in its native range is attacked by a leaf blight that spreads readily when the trees are planted close together, so plantations in the Amazon failed, and the trees had to be tapped where they stood, widely dispersed, reached by long circuits on foot. In the Congo the rubber came from forest vines with the same practical consequence.` },
            { p: `Now the mechanism. If you cannot raise yield per worker by planting, irrigating or mechanizing, then the only variable left is worker-days, and the only ways to get more worker-days out of a population that does not want to supply them are debt and force. Both regions used both.` },
            { p: `In the Amazon the instrument was <b>aviamento</b>, a chain of debt: a trader advanced tools, food and goods to a tapper at prices he set, against rubber valued at prices he also set, so the tapper began in debt and stayed there, legally bound to deliver to his creditor. In the Congo the instrument was the quota and the hostage, described in Topic 6.2. And in the <b>Putumayo</b>, on the Peru-Colombia frontier, the Peruvian Amazon Company, registered in London with British directors, ran a regime of enslavement, flogging, starvation and murder against the Huitoto, Bora and neighboring peoples that killed on a scale contemporaries estimated in the tens of thousands. It was investigated in <span class="num">1910</span> and <span class="num">1911</span> by the same Roger Casement who had reported on the Congo six years earlier, which is why the two atrocities are documented in a comparable idiom.` }
          ]
        },
        {
          heading: 'How the boom ended, in a greenhouse',
          blocks: [
            { p: `Manaus, a thousand miles up the Amazon, acquired electric light, a tramway and an opera house faced in imported European materials, all of it financed by rubber. Then the boom ended within about three years, and it ended for a reason no policy could have addressed.` },
            { p: `In <span class="num">1876</span> the Englishman Henry Wickham collected around seventy thousand <em>Hevea</em> seeds in Brazil and delivered them to Kew Gardens in London. A small proportion germinated, and the seedlings went to Ceylon, Singapore and Malaya, where the leaf blight that made Amazonian plantations impossible did not exist. There the trees could be planted in rows, tapped on a short circuit by a resident workforce, and harvested at a fraction of the labor cost per pound.` },
            { p: `Plantation rubber came into full production in the early <span class="num">1910</span>s, prices collapsed, and the Amazon boom was finished by about <span class="num">1913</span>. Manaus's opera house stood in a city that had lost its reason to exist at that size. The plantations that replaced it needed labor of their own, which was recruited by indenture from South India and China, which is Topic 6.6.` },
            { p: `The generalizable lesson is worth stating in one line, because it applies to Peruvian guano, Chilean nitrate and every other extractive boom in this unit: <b>a boom resting on a monopoly of nature ends when the monopoly is broken</b>, and it can be broken by a seed, a synthesis or a new deposit, on a timescale far shorter than the one on which a society reorganized around it can reorganize back.` }
          ]
        }
      ],
      useThis: {
        tool: `Coercion as the only available intensification. <em>The mechanism is that a resource growing wild and scattered cannot be made more productive per worker by planting, irrigating or mechanizing, so the sole way to raise output is more worker-days, which makes debt bondage and force the technology of the industry rather than an abuse within it, and explains why the Congo and the Putumayo converged on the same methods with no connection between them.</em>`,
        limit: `Not every wild-harvest economy became a coercive one. Where gatherers had alternatives, land, other crops, somewhere to go, they could bargain, so the mechanism operates through the absence of exit rather than through the botany alone.`,
        comparison: `Against <em>plantation rubber in Malaya</em> after 1910: identical species, identical demand, an entirely different labor regime of indentured and contracted workers on wages, because the trees were in rows and yield could be raised by investment. One controlled comparison, one variable changed, which is as close to an experiment as this unit offers.`
      },
      terms: [
        ['Hevea brasiliensis', 'The Amazonian rubber tree, unplantable in its native range because of a leaf blight that spreads in dense stands.'],
        ['Aviamento', 'The Amazonian advance-and-debt system that bound tappers to a trader who set both the price of goods and of rubber.'],
        ['Putumayo', 'The Peruvian Amazon Company\'s regime against the Huitoto and Bora, investigated by Casement in 1910 and 1911.'],
        ['Wickham\'s seeds', 'The 1876 collection taken to Kew, from which Southeast Asian plantations grew and the Amazon boom died.'],
        ['Plantation rubber', 'Row-planted Hevea in Ceylon, Singapore and Malaya, which cut labor cost per pound and collapsed wild rubber prices by 1913.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'palmoil',
      num: '04',
      accent: 'oxide',
      name: 'The Case Where the Producers Owned the Trees',
      navLabel: 'Palm oil',
      dates: '1807 to 1900 &nbsp;·&nbsp; The Niger Delta, legitimate commerce, and Jaja of Opobo',
      thesis: `West African palm oil is the control case for the whole chapter, because for most of the nineteenth century the palms, the land and the trade were in African hands, and the outcome was correspondingly different: African merchant wealth, African-run states, and terms set by African middlemen. What changed after <span class="num">1880</span> was not the crop or the demand but who owned the ground, and everything else changed with it.`,
      parts: [
        {
          heading: 'Legitimate commerce, and who captured it',
          blocks: [
            { p: `Britain abolished its slave trade in <span class="num">1807</span> and campaigned to suppress others', and the commerce advanced as the moral replacement was palm oil. Industrial Europe needed it badly: as a lubricant for machinery, as the raw material for soap in cities with new sanitary anxieties, and for candles. Oil palms are native to the West African forest belt, and the oil was produced by households, mostly by women's labor in the processing, on land held under existing tenures.` },
            { p: `That ownership structure produced a distinctive outcome. Coastal city-states in the Niger Delta, Bonny, Calabar, Brass and later Opobo, made themselves the indispensable intermediaries between inland producers and European ships waiting offshore, and grew wealthy on the margin. <b>Jaja of Opobo</b> is the emblematic figure: born in the interior and sold as a boy into slavery in the delta, he rose through the canoe-house system to head a trading house, founded his own city at Opobo in <span class="num">1869</span>, controlled the oil coming down river, and traded directly with Liverpool merchants on his own terms, at one point shipping to Britain on his own account to cut out the resident firms.` },
            { p: `So for roughly seventy years an industrial commodity of the first importance was supplied to Europe on terms substantially set in Africa, and the wealth it generated built African cities, African fleets and African political power. Any account of the nineteenth-century global economy that treats Africans only as laborers or victims has to explain Jaja, and cannot.` }
          ]
        },
        {
          heading: 'What happened when ownership changed',
          blocks: [
            { p: `From the <span class="num">1870</span>s two pressures converged. Palm-oil prices fell as competing vegetable oils entered the market, squeezing the middlemen's margin. And the technologies of Topic 6.2, the shallow-draft steamer above all, meant European firms could now go upriver themselves and buy from producers directly, which made the middleman's entire function look to them like an unnecessary cost.` },
            { p: `The resolution was political. Jaja was invited to a meeting aboard a British warship in <span class="num">1887</span> under a guarantee of safe conduct, arrested, tried and deported, first to the Gold Coast and then to the West Indies; he died in <span class="num">1891</span> on his way home. The Royal Niger Company, chartered in <span class="num">1886</span>, used its charter to exclude African traders from the river, and the delta states were reduced by force over the following decade. Under colonial administration the palm-oil economy continued and its terms were rewritten: prices set by buying monopolies and later by marketing boards, taxes payable in cash, and eventually plantations, though in West Africa smallholder production remained more important than anywhere else in the tropical world.` },
            { p: `The comparison that makes this section worth its space is with the Congo, described in Topic 6.2, at the same date and on the same continent. Both were forest-product export economies serving the same industrial demand. In one the producers owned the trees and the land and captured a share large enough to build cities. In the other a foreign state claimed the land, declared the forest's produce its own, and set quotas enforced by hostage-taking. The commodity did not determine the outcome. Ownership did, which is the thesis of this chapter stated as a controlled comparison.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not describe the shift from the Atlantic slave trade to palm oil as a straightforward humanitarian improvement, and do not describe it as no change at all. Both readings lose the mechanism. The trade in people ended in the Atlantic and the commerce that replaced it was genuinely different in kind, and it also expanded slavery <b>within</b> West Africa, because producing and headloading oil to the coast was labor-intensive and the enslaved people who would previously have been exported were increasingly put to work locally instead. Meanwhile the same delta states and the same merchant houses ran both trades in succession, which is why the transition looks so seamless in the shipping records. The accurate sentence names both: the destination of coerced labor changed, the demand for it did not, and a moral victory in the Atlantic was paid for partly in the interior.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Who owns the land decides who keeps the gains. <em>The mechanism is that when producers own the trees and control the route to the buyer, the export price is negotiated and the margin stays in the region, building local capital and local political power, so an outsider who wants that margin has to change the ownership rather than the crop, which is precisely what the deportation of Jaja and the Royal Niger Company&rsquo;s charter accomplished.</em>`,
        limit: `African control was never total and the delta states were themselves extractive toward the interior producers, running slave labor and monopoly pricing of their own, so this is a case about where the margin went rather than a case about a just economy.`,
        comparison: `Against the <em>Congo Free State</em> in Topic 6.2: same continent, same decades, same category of forest product, opposite ownership structures, opposite outcomes. Nothing else in Unit 6 isolates the variable this cleanly, which is why this pairing is the one to reach for when a question asks you to explain variation.`
      },
      terms: [
        ['Legitimate commerce', 'The trade in goods rather than people promoted after abolition, of which palm oil was the principal West African example.'],
        ['Palm oil', 'The industrial lubricant and soap material produced by West African households on land held under existing tenures.'],
        ['Canoe house', 'The Niger Delta trading corporation through which men like Jaja rose, and which organized the coastal oil trade.'],
        ['Jaja of Opobo', 'The delta ruler who traded directly with Liverpool, and was seized under safe conduct in 1887 and deported.'],
        ['Royal Niger Company', 'The 1886 chartered firm that used its charter to exclude African traders from the river and end middleman control.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'four',
      num: '05',
      accent: 'gold',
      name: 'Four Structures, Four Countries Afterward',
      navLabel: 'Four structures',
      dates: '1840 to 1900 &nbsp;·&nbsp; Guano, nitrate, beef, and diamonds',
      thesis: `Take four export booms of similar scale and ask, of each, who owned the resource and what the owner did with the money. The answers, a state that borrowed, a landed elite that invested at home, a mining cartel that built a labor regime, produce four different countries by <span class="num">1900</span>, which is the strongest available evidence that the commodity is not the cause.`,
      parts: [
        {
          heading: 'Peru and Argentina',
          blocks: [
            { p: `<b>Peru: a state monopoly that borrowed.</b> Guano, the accumulated droppings of seabirds on the rainless Chincha Islands, was the most effective fertilizer available to European and North American farmers, and from the <span class="num">1840</span>s to the <span class="num">1870</span>s it made the Peruvian state rich. The deposits were state property, so revenue went straight to the government, which sold through consignment contracts to foreign merchant houses and borrowed heavily in London against future sales. The digging was done substantially by Chinese indentured laborers, tens of thousands of whom were shipped to Peru from <span class="num">1849</span>, under conditions that produced formal protests from China. The deposits ran down, the revenue fell, Peru defaulted in <span class="num">1876</span>, and in <span class="num">1879</span> a war with Chile over the neighboring nitrate fields cost it the nitrate provinces as well. A state that owned the resource outright ended the boom with less than it started.` },
            { p: `<b>Argentina: a landed elite that invested where it lived.</b> The pampas produced wool, then wheat, then, after the first successful shipments of refrigerated meat in the late <span class="num">1870</span>s, beef for Europe. Land was owned in very large holdings by a domestic elite, financed by British capital and served by British-built railways running to Buenos Aires. Because the owners lived in the country and spent there, the boom built a genuine metropolis, a wide internal market, mass European immigration and one of the highest per-capita incomes in the world by <span class="num">1900</span>. It was still a dependent structure, tied to one market and one set of commodities and financed from London, and the twentieth century collected on that. But the contrast with Peru is not about the quality of the commodity.` }
          ]
        },
        {
          heading: 'South Africa, and what a mineral rush builds',
          blocks: [
            { p: `Diamonds were found at Kimberley in the late <span class="num">1860</span>s and gold on the Witwatersrand in <span class="num">1886</span>, and both had a technical feature that decided the social outcome: the deposits went deep, and deep mining requires enormous capital, heavy machinery and a large, steady, cheap workforce. Individual diggers were bought out and consolidated, the diamond industry into De Beers by <span class="num">1888</span> and the gold industry into a small group of houses that formed a Chamber of Mines.` },
            { p: `The labor system those firms built is the piece of this section that reaches furthest forward. Workers were recruited on contract from across southern Africa, housed in <b>closed compounds</b> they could not freely leave, paid at rates fixed by employer agreement rather than competition, and controlled outside the compound by <b>pass laws</b> requiring documents to move or seek work. Taxes payable only in cash pushed men off the land and into the recruiters' hands, which is the settler-colonial mechanism of Topic 6.2 in its economic form. The migrant labor system, the compound, the pass and the racially split wage structure were built by mining companies in these decades and became, in the twentieth century, the architecture of apartheid.` },
            { p: `Set the four side by side and the pattern is unmistakable. Peru's state owned the resource and converted it into debt. Argentina's resident elite owned the land and converted it into a city. Leopold owned the Congo and converted it into a body count. Southern Africa's mining houses owned the shafts and converted them into a labor regime that outlived the boom by a century. Same era, same industrial demand, four ownership structures, four countries.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: trade statistics are good and unemployment statistics do not exist',
              html: `The quantitative record for this chapter is lopsided in a way worth understanding before you use a number. Customs houses counted exports and imports meticulously, because both were taxed, so tonnages, values and destinations are excellent and comparable across countries. Company reports, bond prospectuses and shipping registers add to that. What almost nobody counted is what happened inside these societies: incomes, land tenure changes, wages outside the formal sector, health, and the work done by women in processing crops for export, which is unpaid and invisible in every ledger here. So the sources are strong on flows and weak on effects, which biases the whole field toward the story the exporters were telling. The corrective evidence is qualitative, court records over land, missionary and consular reporting, colonial inquiry commissions, oral testimony, and a good answer uses the trade figures for scale and something else for consequence.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Ownership determines what a boom is converted into. <em>The mechanism is that the revenue from an export boom flows first to whoever owns the resource, and what they do with it is set by where they live and what they can buy, so a state owning a deposit borrows against it, a resident landed elite spends it into a domestic economy, and a mining cartel invests it in machinery and in a labor system designed to keep wages fixed.</em>`,
        limit: `Ownership is the strongest variable in this chapter and it is not the only one. Peru also fought a losing war, Argentina had temperate land suited to European settlement and mass immigration, and South African deep-level mining required capital that no local structure could have supplied.`,
        comparison: `Against <em>Japan</em> in Topics 6.2 and 6.5: Japan had almost no exportable natural resource and industrialized anyway, financing it substantially through silk exports and a land tax, which is a useful check on the whole framework. Resource wealth is neither necessary nor sufficient, and what the cases here vary is who captured it and what they could do with it.`
      },
      terms: [
        ['Guano', 'The seabird fertilizer of the Chincha Islands, state-owned and used as collateral for Peruvian borrowing until the deposits ran down.'],
        ['Consignment contract', 'The arrangement selling a state-owned commodity through foreign merchant houses, which took the marketing margin.'],
        ['Refrigerated shipping', 'The late 1870s technology that turned Argentine cattle into a European export and built a domestic metropolis.'],
        ['Closed compound', 'The enclosed mine housing that let employers fix wages and control movement, the origin of the migrant labor system.'],
        ['Pass laws', 'Documents required to move or seek work, which with cash taxes pushed men off the land into recruited mine labor.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first is the causal chain to learn by structure, and the third is the controlled comparison to reach for whenever a question asks you to explain variation.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Cotton to boom to debt to occupation, and every link is dated',
        body: `Muhammad Ali introduced long-staple Jumel cotton from the 1820s and financed the state on a monopoly of it, dug the irrigation with corvee labor, and built an export crop. The American Civil War cut off southern supply from 1861 and multiplied Egyptian prices, and Khedive Ismail borrowed against the boom on European markets for railways, harbors, the rebuilding of Cairo and the Suez Canal, taking the debt to roughly a hundred million pounds. American cotton returned after 1865, prices collapsed, revenue fell and the debt did not; Ismail sold the canal shares to Britain in 1875 and defaulted in 1876. The Caisse de la Dette and Anglo-French dual control took over the budget, Ismail was deposed in 1879, and when the Urabi movement won a constitutional government in 1882 Britain invaded and won at Tel el-Kebir. Sovereignty was lost through a ledger before it was lost to an army.`
      },
      {
        category: 'Mechanism',
        title: 'Wild rubber could only be intensified by force',
        body: `Vulcanization, electrical insulation, the 1890s bicycle boom and the pneumatic tire made rubber one of the most valuable commodities on earth, and nearly all of it came from wild trees, because Hevea in its native Amazon range is attacked by a leaf blight that spreads in dense stands. A crop that cannot be planted, irrigated or mechanized can only yield more if more people spend more days walking to it, so the labor system became the technology: aviamento debt bondage in the Amazon, quotas and hostages in the Congo, and outright enslavement in the Putumayo, which Casement investigated in 1910 and 1911 having reported on the Congo in 1904. Then Wickham&rsquo;s seventy thousand seeds reached Kew in 1876, plantations rose in Ceylon, Singapore and Malaya where the blight did not exist, and the boom that had built an opera house in Manaus was over by about 1913.`
      },
      {
        category: 'Comparison',
        title: 'Palm oil and Congo rubber isolate the variable',
        body: `Both were forest-product export economies on the same continent in the same decades serving the same industrial demand. In the Niger Delta the palms and the land were held under African tenure and the trade was controlled by African merchant houses, so a man like Jaja of Opobo could found a city in 1869 and ship to Liverpool on his own account, and the margin built African cities and African political power. In the Congo, Leopold&rsquo;s state claimed the land, declared the forest&rsquo;s produce its own, and set quotas enforced by the Force Publique. The commodity did not decide the outcome; ownership did. And the resolution in the delta was political rather than economic: Jaja was seized under safe conduct in 1887 and deported, and the Royal Niger Company&rsquo;s 1886 charter excluded African traders from the river.`
      },
      {
        category: 'Structure',
        title: 'Four owners, four countries by 1900',
        body: `Peru&rsquo;s state owned the guano deposits, sold through foreign consignment houses, borrowed in London against future sales, dug with tens of thousands of Chinese indentured laborers, defaulted in 1876 and lost the nitrate provinces to Chile in the war that began in 1879. Argentina&rsquo;s resident landed elite owned the pampas, and refrigerated shipping from the late 1870s turned beef into a European export that built a metropolis, a domestic market and mass immigration. Southern Africa&rsquo;s deep diamond and gold deposits required capital that consolidated into De Beers by 1888 and the Chamber of Mines, which built closed compounds, employer-fixed wages, pass laws and cash taxes to force men off the land, the architecture apartheid later inherited. Same industrial demand, four ownership structures, four outcomes, which is why an answer about commodities explains nothing and an answer about ownership explains everything.`
      }
    ]
  }
};
