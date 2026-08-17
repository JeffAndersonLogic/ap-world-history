'use strict';

/**
 * Topic 6.5, Economic Imperialism: the deep reading.
 *
 * Why this exists. The success criteria name the Opium Wars, British investment
 * in Buenos Aires, and cotton exports from South Asia and Egypt, and ask for
 * variation. The concept that unites them, informal empire, is genuinely hard,
 * because its whole point is that the thing being explained is invisible on a
 * political map. A student cannot see it, so they need a TEST for it, and
 * section 01 is that test: who sets the tariff, who runs the customs house,
 * whose courts try foreigners, and where does the railway go.
 *
 * Four things carried deliberately:
 *
 *   1. The decisive clause of the Opium War settlement is not Hong Kong and not
 *      the five ports. It is the fixed tariff in the 1843 supplementary treaty,
 *      which removed protection and fiscal capacity in one line, and the
 *      most-favored-nation clause, which made every future concession universal.
 *      Students remember the ports; the tariff is what did the damage.
 *   2. Argentina is the case with no conquest, no treaty and no gunboat, which
 *      is exactly why it teaches the concept. A willing local elite is part of
 *      the mechanism rather than an absence of one.
 *   3. Deindustrialization in India is real and contested, and the honest
 *      version, a genuine collapse in export markets and machine-spun yarn
 *      displacing hand spinning, alongside handloom weaving that adapted and
 *      survived longer than the older literature allowed, is better history and
 *      a better answer than either extreme.
 *   4. Japan is the counterexample the criteria ask for. Same unequal treaties,
 *      no tariff autonomy until 1911, and it industrialized anyway, which proves
 *      the treaty regime was a severe constraint and not a determinant.
 */

module.exports = {
  topicKey: 't6-5',
  slug: 'topic-6-5-economic-imperialism',
  lessonFile: 'lesson-6-5-economic-imperialism.html',

  titleHtml: 'Control Without a <em>Flag</em>',
  deck: `China was never colonized. Argentina had been independent since the <span class="num">1810</span>s. Neither appears in a European color on a map of <span class="num">1900</span>, and in both, foreign capital built the railways and held the debt. In China foreigners also set the tariff and stood outside the local courts. In Argentina they did neither, and that difference is the most useful thing in this chapter. This chapter is about the kind of power that does not show up on the map, why it was often preferred to conquest, and how to prove it is there.`,

  howTo: {
    heading: 'How to Use This',
    intro: `The hard thing about this topic is that its subject is invisible on a map, so section 01 gives you four diagnostic questions and everything after it applies them. If you are revising one case, read section 01 first anyway, because an exam answer that describes the Opium Wars without naming the mechanism is a narrative rather than an explanation.`,
    steps: [
      `<b>01 The test:</b> four questions that detect informal empire, and why it was often preferred to conquest.`,
      `<b>02 China:</b> the treaty clause that mattered, and why it was not Hong Kong.`,
      `<b>03 Argentina:</b> economic dependence with no conquest, no treaty and a willing local elite.`,
      `<b>04 Cotton:</b> what a tariff asymmetry does to an industry, and what the evidence will and will not support.`,
      `<b>05 Japan:</b> the same unequal treaties, and an entirely different outcome.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'test',
      num: '01',
      accent: 'gold',
      name: 'Four Questions That Detect an Empire With No Colonies',
      navLabel: 'The test',
      dates: 'c. 1830 to 1914 &nbsp;·&nbsp; What informal empire is, and why it was cheaper',
      thesis: `<span class="kt">Economic imperialism</span> is control over a country's economic decisions without responsibility for governing it, and it was frequently the preferred option rather than the fallback, because it delivers the returns of empire while somebody else pays for the police, the courts and the famine relief.`,
      parts: [
        {
          heading: 'The four diagnostic questions',
          blocks: [
            { p: `Because nothing on a map shows it, you detect informal empire by asking what a sovereign state normally controls and checking whether this one does.` },
            { p: `<b>1. Who sets the tariff?</b> This is the single most revealing question in the topic. A tariff is two things at once: the tool with which a state protects an infant industry, and in the nineteenth century one of the largest sources of government revenue in countries with no income tax. A state that cannot change its own tariff has lost the ability to protect its producers and the ability to fund itself, in one clause.` },
            { p: `<b>2. Who collects the customs, and who has first claim on it?</b> If a foreign-run service collects the revenue and remits it to foreign bondholders before the government sees it, the state's budget is being administered from outside whatever the constitution says.` },
            { p: `<b>3. Whose courts try foreigners?</b> <span class="kt">Extraterritoriality</span> means a foreign national accused of a crime is tried by his own consul under his own law. It removes an entire class of person from the state's jurisdiction, and it is the clause that most consistently produced humiliation and nationalist reaction, because it is visible in daily life in a way a tariff schedule is not.` },
            { p: `<b>4. Where does the railway go, and who owns it?</b> Infrastructure has a geometry, and the geometry records the purpose. Lines radiating from producing regions to a single port, owned and operated by foreign companies on guaranteed returns, are an export apparatus. Lines connecting cities to each other are a national market.` }
          ]
        },
        {
          heading: 'Why an empire would choose this',
          blocks: [
            { p: `The historians John Gallagher and Ronald Robinson made the argument in <span class="num">1953</span> that Britain in the mid-nineteenth century, the supposed era of anti-imperial free trade, was expanding its power continuously, and simply used trade, investment and treaties where those sufficed and annexation where they did not. Their formulation is worth memorizing because it is the whole topic in a sentence: <b>informal control where possible, formal control where necessary</b>.` },
            { p: `The reasoning is fiscal, and it is the same reasoning as Topic 6.2's. A colony must be administered: officials, garrisons, courts, roads, and a response when the harvest fails. Those costs fall on the imperial treasury and have to be defended in a legislature. A treaty port costs a consul and a gunboat that is passing anyway. If the objective is a market, a commodity and a secure return on investment, informal control delivers all three and leaves the governing to somebody else.` },
            { p: `Two consequences follow that are worth having ready. First, the two forms are not stages, and it is a mistake to imagine informal empire as a preliminary to conquest; Britain ran an informal relationship with Argentina for a century without ever attempting to govern it. Second, informal empire requires a partner. Somebody local has to sign the treaty, service the loan and want the railway, which is why section 03 spends as much time on the Argentine elite as on British capital.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat "they were never colonized" as though it settled anything, and do not treat every trade relationship as imperialism either. Both errors come from having no test, which is what section 01 exists to supply. Foreign investment is not by itself domination: the United States and Russia were both enormous net importers of British capital in this period and nobody describes them as informally ruled. What distinguishes the cases here is the loss of specific sovereign powers, above all the power to set a tariff, the power to try foreigners in your own courts, and the power to spend your own customs revenue. Apply the four questions and the answer becomes evidential rather than rhetorical, which is exactly what a rubric rewards.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Informal control where possible, formal control where necessary. <em>The mechanism is that annexation carries the full cost of administration, garrisons, courts, famine relief, charged to the imperial treasury and argued through a legislature, while a treaty securing tariff terms, legal immunity and investment protection delivers the market and the commodity for the price of a consul, so a power annexes only when the informal arrangement stops working.</em>`,
        limit: `The framework can be stretched until it covers all trade, which drains it of meaning. Restrict it to cases where identifiable sovereign powers were surrendered, and say which ones.`,
        comparison: `Against the <em>chartered companies</em> of Topic 4.3: the Dutch and English East India Companies were private bodies exercising sovereign powers, an intermediate form between trade and rule. Informal empire is the same problem solved in the opposite direction, keeping the sovereignty local and removing the powers that matter, which is why the tariff clause deserves more of your attention than the flag.`
      },
      terms: [
        ['Informal empire', 'Control over a state\'s economic decisions without responsibility for governing it, detected by which sovereign powers are missing.'],
        ['Tariff autonomy', 'The power to set import duties, which supplies both industrial protection and, before income taxes, most state revenue.'],
        ['Extraterritoriality', 'The rule that foreigners are tried by their own consuls under their own law, removing them from local jurisdiction.'],
        ['Most-favored-nation clause', 'The provision granting each signatory any concession given to any other, which turns one concession into all of them.'],
        ['Free trade imperialism', 'Gallagher and Robinson\'s argument that trade and treaties were instruments of expansion, not an alternative to it.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'china',
      num: '02',
      accent: 'iron',
      name: 'The Clause That Mattered Was Not Hong Kong',
      navLabel: 'China',
      dates: '1839 to 1901 &nbsp;·&nbsp; Nanjing, the Bogue, Tianjin, and the Customs Service',
      thesis: `Everyone remembers the ceded island and the five ports. The provisions that actually converted a defeat into a permanent structural condition were the fixed <b>tariff</b> in the <span class="num">1843</span> supplementary treaty, which stripped protection and revenue in one line, and the <b>most-favored-nation</b> clause, which guaranteed that any concession granted to anyone was granted to everyone forever.`,
      parts: [
        {
          heading: 'The silver problem, and the war over it',
          blocks: [
            { p: `Britain wanted tea, in quantities that had become a national habit and a substantial source of British customs revenue. China wanted almost nothing Britain made, so tea was paid for in silver, and the outflow was politically intolerable in London. The solution the East India Company arrived at was triangular: grow opium under monopoly in Bengal, auction it at Calcutta to private traders, and let those traders smuggle it into China, where the sale earned the silver that bought the tea. The Company kept its own hands technically clean, since its ships did not carry the drug into Chinese waters.` },
            { p: `By the <span class="num">1830</span>s the volume had reversed the flow of silver, which was a monetary crisis for a state whose taxes were reckoned in silver and paid by peasants earning copper, alongside a widespread addiction problem. In <span class="num">1839</span> the Daoguang emperor sent <b>Lin Zexu</b> to Canton, where he confiscated and publicly destroyed a very large quantity of opium and wrote to Queen Victoria pointing out that the trade was illegal in Britain too. Britain declared war over the destruction of the property and the treatment of its subjects.` },
            { p: `The <b>Treaty of Nanjing</b> in <span class="num">1842</span> imposed a large indemnity, ceded Hong Kong, opened five ports to residence and trade, and abolished the Cohong merchant monopoly. The <b>supplementary treaty of the Bogue</b> the following year added the three clauses that did the lasting work: a tariff fixed at a low rate, which China could not raise without foreign consent; extraterritorial jurisdiction for British subjects; and most-favored-nation treatment. Opium itself was not legalized until the second war, which is a detail worth knowing, because it means the first war was fought to protect a trade that remained illegal in the country it was fought against.` }
          ]
        },
        {
          heading: 'The ratchet, and what a customs service is for',
          blocks: [
            { p: `Now the mechanism, which is what separates a good answer from a chronology. The fixed tariff meant Chinese producers had no protection against machine-made imports and the Chinese state could not raise trade revenue when it needed money, which it urgently did, having simultaneously to fight the Taiping rebellion described in Topic 5.7. The most-favored-nation clause meant every subsequent concession to any power, and there were many, automatically extended to all the others, so the system could only ever tighten. That is a <b>ratchet</b>: it has no reverse.` },
            { p: `The second war, from <span class="num">1856</span> to <span class="num">1860</span>, ran the same machinery further. The Treaties of Tianjin and the Convention of Peking opened many more ports and the interior to travel and missionary activity, legalized opium, permitted foreign legations in Beijing, added Kowloon, and imposed further indemnities; British and French forces burned the Summer Palace on the way. By <span class="num">1900</span> there were dozens of treaty ports, several with foreign-administered concession areas.` },
            { p: `The clearest single institution is the <b>Imperial Maritime Customs Service</b>, which from the <span class="num">1860</span>s collected China's foreign-trade duties under a foreign Inspector-General, Robert Hart, for nearly half a century. It is genuinely complicated and worth writing carefully: it was efficient and honest, it produced China's most reliable statistics, it funded lighthouses and a postal service, and Hart regarded himself as a servant of the Chinese government. It also meant the revenue was collected by foreigners and pledged first to foreign indemnities and loans, so the state's most reliable income stream was mortgaged before it arrived. After the Boxer Protocol of <span class="num">1901</span> imposed an indemnity payable over thirty-nine years, that mortgage was effectively permanent.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the treaties are public and the smuggling accounts are not',
              html: `The formal side of this story is exceptionally well evidenced. Treaty texts were published, ratified and printed in both languages, the Customs Service produced meticulous annual trade returns, and both the British parliamentary papers and the Qing archives preserve the negotiations, including Lin Zexu&rsquo;s memorials and his letter to Victoria. What is far weaker is the quantitative history of the opium trade itself, because it was illegal: the chest counts come from Company auction records at the Calcutta end and from estimates at the Chinese end, consumption figures are inferences, and the number of users in China was a contested political number at the time, inflated by campaigners and minimized by traders. Use the treaty provisions, which are exact, to carry your argument, and treat the drug statistics as orders of magnitude.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A fixed tariff removes protection and revenue together. <em>The mechanism is that a treaty capping import duties at a low rate simultaneously exposes domestic producers to machine-made imports and denies the state the trade revenue it would need to respond, and a most-favored-nation clause then extends every later concession to every power automatically, so the arrangement can tighten and cannot loosen.</em>`,
        limit: `China&rsquo;s nineteenth-century crisis was not caused by the treaties alone. The Taiping rebellion killed on a scale that dwarfs the wars, and internal fiscal and administrative problems predated 1839, so the treaty system is best written as a constraint that removed the state&rsquo;s tools for handling its own emergencies.`,
        comparison: `Against <em>Egypt</em> in Topic 6.4: two different routes, war in one case and debt in the other, to the same destination, foreign control of the customs revenue. That convergence is the strongest evidence that the target was fiscal sovereignty rather than territory.`
      },
      terms: [
        ['Treaty of Nanjing', 'The 1842 settlement imposing an indemnity, ceding Hong Kong, opening five ports and ending the Cohong monopoly.'],
        ['Treaty of the Bogue', 'The 1843 supplement adding the fixed tariff, extraterritoriality and most-favored-nation treatment, the clauses that lasted.'],
        ['Treaty port', 'A port opened to foreign residence and trade, dozens by 1900, several with foreign-administered concession areas.'],
        ['Imperial Maritime Customs', 'The foreign-run service collecting China\'s trade duties from the 1860s, efficient and pledged first to foreign creditors.'],
        ['Boxer indemnity', 'The 1901 payment over thirty-nine years that made the mortgage on Chinese customs revenue effectively permanent.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'argentina',
      num: '03',
      accent: 'rust',
      name: 'No Treaty, No Gunboat, and the Railways Still Go to the Port',
      navLabel: 'Argentina',
      dates: '1860 to 1914 &nbsp;·&nbsp; British capital, Buenos Aires, and the Baring crisis',
      thesis: `Argentina is the case that teaches the concept, because none of the coercive apparatus is present. There was no conquest, no unequal treaty, no extraterritoriality and no loss of tariff autonomy. There was capital, and the shape it built, and a domestic elite whose interests were served by building it that way.`,
      parts: [
        {
          heading: 'What British capital built, and what shape it built it in',
          blocks: [
            { p: `From the <span class="num">1860</span>s Argentina absorbed one of the largest concentrations of British overseas investment anywhere in the world. It went into railways above all, and into the port works at Buenos Aires, tramways, gasworks, waterworks, banks, insurance, meat-packing plants and the telegraph. Many of the railway companies operated under guaranteed minimum returns, meaning the Argentine state undertook to top up profits to an agreed rate if traffic fell short, a provision that transferred the commercial risk to the country and left the return with the investor.` },
            { p: `The geometry is the evidence. The network radiates from Buenos Aires into the pampas and back, engineered to bring wheat, wool and chilled beef to the docks. It was not laid out to connect the interior provinces to one another, and the consequence was an economy in which the port city grew into a metropolis while internal regional exchange stayed thin. Apply the fourth diagnostic question from section 01 to a rail map of Argentina in <span class="num">1910</span> and you have your answer without needing a treaty text.` },
            { p: `Britain took the other end of the exchange. Argentine beef, mutton and grain fed British cities at prices no domestic agriculture could match, which was one of the material foundations of British free trade politics, and British manufactures and coal came the other way. The relationship was so tight that Argentina's monetary conditions moved with London's, which is how the crisis arrived.` },
            { p: `In <span class="num">1890</span> Argentine provincial and national borrowing collapsed into default. <b>Baring Brothers</b>, the London house that had underwritten much of it, was left holding unsalable Argentine paper and came close to failing, which would have taken a substantial part of the City with it; the Bank of England organized a rescue. The episode is instructive in both directions. Argentina suffered a severe depression it had not caused alone, and London discovered that a private bank's exposure to a distant country's finances had become a matter of national concern.` }
          ]
        },
        {
          heading: 'The partner, and why it is part of the mechanism',
          blocks: [
            { p: `The temptation is to describe this as something done to Argentina, and the evidence does not support it. The landowning elite of the pampas, organized politically and dominant in the state after <span class="num">1880</span>, wanted precisely what was built. Railways to the port raised the value of their land enormously; open trade brought cheap British manufactures and expensive British capital; European immigration supplied labor. They were not being tricked, and there was a domestic argument about it, with protectionist voices in the interior provinces whose wine, sugar and textiles lost out to imports, and they were outvoted by the coastal interest.` },
            { p: `That is why informal empire belongs in this unit rather than in a chapter about trade. The mechanism runs through an alignment of interests: a foreign investor and a local elite both gain from an arrangement whose costs fall on people represented by neither. Once the railway is built, the land tenure fixed, the debt contracted and the export sector established, the structure persists regardless of what any later government prefers, because reversing it means defaulting on debts, alienating investors and reorganizing the whole basis of the country's earnings.` },
            { p: `Argentina by <span class="num">1913</span> had one of the highest per-capita incomes in the world, which is the fact that makes the case genuinely difficult and therefore worth using. The dependence produced real prosperity for several decades and it produced a structure with one market, a narrow range of exports, foreign-owned infrastructure and external debt, and the twentieth century, when the market shrank and the terms of trade turned, is when the bill arrived.` }
          ]
        }
      ],
      useThis: {
        tool: `Structure outlasts the decision that made it. <em>The mechanism is that once railways run to one port, land tenure is set around an export crop, and the state&rsquo;s debts are contracted abroad, the pattern persists whatever a later government wants, because changing it requires defaulting, alienating the investors the economy runs on, and rebuilding infrastructure that took fifty years and other people&rsquo;s money to lay.</em>`,
        limit: `Argentina kept its tariff autonomy, its courts and its foreign policy, and it grew rich, so calling it a colony is wrong; the accurate claim is dependence with sovereignty intact, which is a weaker and more defensible thing to argue.`,
        comparison: `Against <em>China</em> in section 02: China lost specific sovereign powers by treaty at gunpoint and Argentina lost none, and both ended the period with foreign-owned infrastructure, foreign-held debt and an economy organized around what outsiders wanted to buy. Two roads, one destination, which is the comparison a question about variation is looking for.`
      },
      terms: [
        ['Guaranteed return', 'The undertaking to top up a railway company\'s profits to an agreed rate, moving commercial risk onto the host state.'],
        ['Rail geometry', 'The radial network to a single port, an export apparatus rather than a national market, and the clearest visible evidence.'],
        ['Baring crisis', 'The 1890 Argentine default that nearly destroyed a major London bank and required a Bank of England rescue.'],
        ['Dependent development', 'Real prosperity built on one market and a narrow export range, which persists until the terms of trade turn.'],
        ['Local partner', 'The domestic elite whose interests aligned with foreign investors, without whom informal empire does not function.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'cotton',
      num: '04',
      accent: 'oxide',
      name: 'Cotton Going Out, Cloth Coming In',
      navLabel: 'Cotton',
      dates: '1813 to 1900 &nbsp;·&nbsp; The tariff asymmetry, the handloom, and the drain',
      thesis: `India had been the largest producer of cotton textiles in the world and ended the nineteenth century exporting raw cotton and importing cloth. That reversal is the single most cited example of economic imperialism, it is real, and it is more complicated than the standard version, which is why knowing where the evidence stops is worth as much as knowing the claim.`,
      parts: [
        {
          heading: 'The asymmetry, and what it did',
          blocks: [
            { p: `Indian cotton cloth was a global commodity long before Britain made any: fine muslins, printed calicoes and dyed cloth traded across the Indian Ocean and into Europe, where they had been popular enough for English weavers to obtain protective legislation against them in the early eighteenth century. That protection is where the story starts, because it establishes that the initial advantage was Indian.` },
            { p: `Three changes reversed it. Mechanized spinning and then weaving in Lancashire, described in Topic 5.3, drove the cost of yarn and plain cloth down by an order of magnitude. British duties on Indian textiles entering Britain were kept high while British goods entered India at low rates, which is the <b>tariff asymmetry</b> at the center of the case, and its significance is that India, being governed by the party it was trading with, had no ability to answer with protection of its own. And the ending of the East India Company's monopoly in <span class="num">1813</span> opened India as a market to every British manufacturer at once.` },
            { p: `The mechanism is the same as section 02's, stated for a colony rather than a treaty state: <b>an economy that cannot set its own tariff cannot protect an industry under attack</b>, and the question of whether it should have is not one it gets to decide. Add to this the fiscal transfer that Indian critics named the <b>drain</b>: the Home Charges, covering the costs of the India Office in London, pensions for British officials, and interest on debt incurred for railways and wars, all remitted annually from Indian revenues. Dadabhai Naoroji built the case in detail in the <span class="num">1870</span>s and after, and the argument was politically decisive for Indian nationalism regardless of how economists have since scored the magnitude.` }
          ]
        },
        {
          heading: 'What the evidence supports, and what it does not',
          blocks: [
            { p: `Here is where a careful answer separates itself. The strongest and least disputed part of the claim concerns <b>spinning</b>. Hand spinning, which was overwhelmingly women's work and an enormous source of supplementary household income across rural India, was destroyed by machine-spun yarn, and it was not replaced. The export trade in Indian cloth collapsed too, losing markets it had held for centuries.` },
            { p: `Handloom <b>weaving</b> is where the older account overstated. Indian weavers did not vanish. Many bought cheap machine yarn and continued to weave, moved into finer or specialized cloth that mills did not make, and the sector survived in large numbers into the twentieth century. Historians including Tirthankar Roy have argued that the aggregate scale of deindustrialization has been overstated and that its incidence varied greatly by region and product, while others maintain the traditional stronger version. Meanwhile an Indian-owned mechanized cotton industry grew in Bombay and Ahmedabad from the <span class="num">1850</span>s and exported yarn to China.` },
            { p: `So the defensible sentence, and the one to write, is this: India's cotton economy was restructured rather than simply destroyed, with hand spinning eliminated, export markets lost and the country converted into a supplier of raw cotton and a market for cloth, under a tariff regime it did not control and could not answer, while handloom weaving adapted and survived and a domestic mill industry eventually emerged. Egypt, in Topic 6.4, is the same restructuring done to a nominally independent state through debt rather than through direct rule, and by <span class="num">1900</span> both countries grew cotton for someone else's mills.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two opposite errors are available here and the second is now the more common in a well-taught class. The first is to write that Britain destroyed Indian industry outright and that India would otherwise have industrialized, which asserts a counterfactual nobody can test and understates the survival of weaving and the growth of Bombay mills. The second is to conclude, from the fact that the older account was overstated, that the tariff asymmetry did not matter, which does not follow at all: the asymmetry is documented, the loss of hand spinning is documented, and a colony&rsquo;s inability to set its own trade policy is the mechanism whether or not the aggregate number was as large as once claimed. State the mechanism, state the part of the outcome the evidence firmly supports, and name the dispute over magnitude. That is what a historian does with a contested quantity, and it reads as command of the material rather than as hedging.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Trade policy set by the competitor. <em>The mechanism is that a colony&rsquo;s tariff was written by the country whose manufacturers it competed with, so British cloth entered India at low duty while Indian cloth met high duties in Britain, and India had no instrument with which to answer, which converted a technological gap that might have been temporary into a permanent structural position as a supplier of raw material.</em>`,
        limit: `The magnitude of Indian deindustrialization is genuinely contested, handloom weaving adapted and persisted, and an Indian-owned mill industry grew from the 1850s, so the claim to make is about restructuring and lost policy autonomy rather than about total destruction.`,
        comparison: `Against <em>the United States</em> in the same century: a former colony that used very high protective tariffs to build its own manufacturing behind them, which is exactly the option India did not have. That pairing isolates the variable, because the technology, the capital markets and the British competition were the same in both cases and the tariff power was not.`
      },
      terms: [
        ['Tariff asymmetry', 'High duties on Indian goods entering Britain against low duties on British goods entering India, unanswerable by a colony.'],
        ['Deindustrialization', 'The contraction of a manufacturing sector under import competition, clearest in Indian hand spinning.'],
        ['Handloom weaving', 'The sector that adapted by buying machine yarn and moving into specialized cloth, surviving in large numbers.'],
        ['Home Charges', 'Payments remitted annually from Indian revenue for London administration, pensions and debt service.'],
        ['Drain theory', 'Naoroji\'s argument that those transfers constituted a systematic extraction, politically decisive for Indian nationalism.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'japan',
      num: '05',
      accent: 'gold',
      name: 'The State That Had the Same Treaties and a Different Century',
      navLabel: 'Japan',
      dates: '1858 to 1911 &nbsp;·&nbsp; Unequal treaties, a land tax, and tariff autonomy regained',
      thesis: `Japan signed unequal treaties on the Chinese model, lost tariff autonomy for more than fifty years, and industrialized anyway. That single case establishes what the whole chapter can and cannot claim: the treaty regime was a severe constraint on the instruments available, and it did not determine the outcome.`,
      parts: [
        {
          heading: 'The same conditions',
          blocks: [
            { p: `The treaties of <span class="num">1858</span>, beginning with the American one and rapidly extended to the other powers by most-favored-nation operation, gave Japan the standard package: open ports, extraterritorial jurisdiction for foreigners, and a conventional tariff fixed low, which was pushed lower still in <span class="num">1866</span>. Japan could not protect an industry with a tariff and could not raise trade revenue at will, exactly as China could not. Foreign consuls tried foreign defendants. The humiliation was felt intensely and treaty revision became the central objective of Japanese foreign policy for two generations.` },
            { p: `What Japan did instead is the substance of the comparison. Denied customs revenue, the Meiji government financed itself with a <b>land tax</b> reform in <span class="num">1873</span> that converted a variable rice levy into a fixed cash payment on assessed land value, giving the state a large, predictable income independent of trade. It used that revenue to build model factories, shipyards, arsenals, railways and a telegraph, and then sold most of the industrial enterprises to private firms in the <span class="num">1880</span>s, which put working plant into the hands of the houses that became the great industrial groups. It financed imports of machinery substantially through <b>silk</b>, a high-value export that used existing rural skills and required no tariff protection to sell. And it invested very heavily in schooling.` },
            { p: `The treaties were revised on Japan's terms in the end. Extraterritoriality ended in <span class="num">1899</span> and full tariff autonomy was recovered in <span class="num">1911</span>, and the fact that this took half a century of negotiation, legal reform and, bluntly, two victorious wars is itself evidence of how hard the arrangement was to escape.` }
          ]
        },
        {
          heading: 'What the comparison licenses you to say',
          blocks: [
            { p: `Be careful with this case, because it is available to be misused in a direction that is both historically wrong and morally ugly, namely the claim that China and India could have done what Japan did and therefore have only themselves to blame. Three differences make that claim untenable.` },
            { p: `<b>Scale and simultaneity.</b> Japan was a compact country with a population a fraction of China's and no comparable internal war; China was fighting the Taiping rebellion, among the deadliest conflicts in human history, through the same decades in which it was expected to reform. <b>Sovereignty.</b> Japan retained control of its own government, army and land system, while India had no government of its own to make such decisions and China's central authority was progressively hollowed out by indemnities and provincial fragmentation. <b>Fiscal room.</b> The Japanese state could impose a heavy new land tax on its own population; the Qing state's revenues were pledged to indemnities and its capacity to tax the provinces was collapsing.` },
            { p: `So the correct use of Japan is narrow and powerful. It shows that the treaty system operated by <b>removing instruments rather than by dictating outcomes</b>, and that a state which kept its sovereignty, found an alternative revenue base and directed investment could develop under it. That formulation makes the imperial constraint sharper rather than softer, because it identifies exactly what was taken and what a state had to have in order to work around it, and it explains why almost nobody could.` }
          ]
        }
      ],
      useThis: {
        tool: `Substituting a revenue base the treaties did not touch. <em>The mechanism is that the unequal treaties capped customs duties but said nothing about internal taxation, so Japan&rsquo;s 1873 land tax converted a variable harvest levy into a fixed cash payment and gave the state a large predictable income to build railways, arsenals and schools with, which is how a country with no tariff power financed industrialization anyway.</em>`,
        limit: `It is one case with unusual advantages, compactness, an intact government, no comparable internal war, and using it as a standard the others failed to meet inverts the causation, since what Japan chiefly had was the sovereignty the others had lost.`,
        comparison: `Against <em>the Ottoman Empire</em>, which attempted comparable reforms from the 1839 Tanzimat and fell into default in 1875 and foreign debt administration in 1881: reforming intentions were widespread and the fiscal room to act on them was not, which is why the interesting variable across all these states is revenue rather than willingness.`
      },
      terms: [
        ['Unequal treaties', 'The 1858 agreements imposing open ports, extraterritoriality and a low fixed tariff on Japan, on the Chinese model.'],
        ['Land tax reform', 'The 1873 conversion of a variable rice levy into a fixed cash tax, giving the state revenue the treaties could not cap.'],
        ['Model factories', 'State-built plants later sold to private firms, which put working industrial capacity into domestic hands.'],
        ['Silk exports', 'The high-value trade using existing rural skills that paid for imported machinery without needing tariff protection.'],
        ['Treaty revision', 'The half-century campaign that ended extraterritoriality in 1899 and recovered tariff autonomy in 1911.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first card gives you a test you can apply to any case, and the last is the qualification the third success criterion asks for.`,
    pairs: [
      {
        category: 'Method',
        title: 'Detect informal empire by asking which sovereign powers are missing',
        body: `Nothing on a map shows economic imperialism, so ask four questions. Who sets the tariff, which is both the protection of an infant industry and, before income taxes, a main source of state revenue. Who collects the customs and who has first claim on it. Whose courts try foreigners. And where do the railways go and who owns them. Gallagher and Robinson&rsquo;s formulation is the concept in one line: informal control where possible, formal control where necessary, because a colony must be administered at the imperial treasury&rsquo;s expense while a treaty port costs a consul. Note also that foreign investment alone is not domination, since the United States and Russia were both huge net importers of British capital, which is why the test is about specific powers surrendered rather than about money crossing a border.`
      },
      {
        category: 'Mechanism',
        title: 'The tariff clause did more than the ceded island',
        body: `Britain paid for Chinese tea in silver until the East India Company grew opium in Bengal, auctioned it at Calcutta and let private traders smuggle it, reversing the silver flow. Lin Zexu destroyed the confiscated opium at Canton in 1839; the Treaty of Nanjing in 1842 took an indemnity, Hong Kong, five ports and the Cohong monopoly. The clauses that lasted came in the 1843 supplementary treaty: a low fixed tariff China could not raise without consent, extraterritoriality, and most-favored-nation treatment, so every later concession to any power extended automatically to all. That is a ratchet with no reverse, and it left the Qing state without protection for its producers or trade revenue for itself at precisely the moment it was fighting the Taiping. The foreign-run Imperial Maritime Customs then collected the duties and remitted them to foreign creditors first.`
      },
      {
        category: 'Comparison',
        title: 'Two roads to one destination, and Argentina had no gunboat',
        body: `China lost specific sovereign powers by treaty at gunpoint. Argentina lost none: no conquest, no unequal treaty, no extraterritoriality, tariff autonomy intact, and by 1913 one of the highest per-capita incomes in the world. It still ended the period with foreign-owned railways running radially to a single port on guaranteed returns, an economy organized around wheat, wool and chilled beef for one market, and debt so entangled with London that its 1890 default nearly destroyed Baring Brothers and required a Bank of England rescue. The mechanism ran through a willing partner: the pampas landowning elite gained enormously from exactly this arrangement and outvoted the protectionist interior provinces. Structure outlasts the decision that made it, because reversing it means defaulting and rebuilding fifty years of other people&rsquo;s infrastructure.`
      },
      {
        category: 'Qualification',
        title: 'Japan had the same treaties and a different century',
        body: `Japan&rsquo;s 1858 treaties imposed open ports, extraterritoriality and a low fixed tariff, pushed lower in 1866, and it did not recover tariff autonomy until 1911 or end extraterritoriality until 1899. It industrialized anyway, by taxing what the treaties did not reach: the 1873 land tax converted a variable rice levy into fixed cash revenue, which financed railways, arsenals, schools and model factories later sold to private firms, while silk exports paid for imported machinery. The lesson is narrow and it sharpens rather than softens the argument. The treaty system worked by removing instruments, not by dictating outcomes, and working around it required an intact sovereign government, an untouched revenue base and no simultaneous civil war, which is precisely what China, fighting the Taiping, and India, having no government of its own, did not have.`
      }
    ]
  }
};
