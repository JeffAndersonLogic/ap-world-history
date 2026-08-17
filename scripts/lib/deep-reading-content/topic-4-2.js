'use strict';

/**
 * Topic 4.2, Exploration: the deep reading.
 *
 * Why this exists. The success criteria ask for two specific motivations tied
 * to specific state actions, the key routes with their dates, and the Treaty of
 * Tordesillas with the northern powers' response to it. "God, gold and glory"
 * satisfies none of that: it is a mnemonic, and a student who writes it has
 * named three categories and explained nothing.
 *
 * So this chapter insists on mechanisms. Why a state rather than a merchant
 * paid; what the price of pepper actually was at each end of the chain; what a
 * royal contract promised an explorer and what that tells you about the risk;
 * and what a line drawn on a map in 1494 did to the countries on the wrong side
 * of it.
 *
 * Three things carried deliberately:
 *
 *   1. Da Gama's first voyage was a commercial humiliation and an enormous
 *      financial success at the same time, and holding both is the single most
 *      useful thing in the topic: Europe had almost nothing Asia wanted, and
 *      the margin on the return cargo was so large it did not matter yet.
 *   2. Magellan's expedition proved the Earth was far bigger than anyone had
 *      calculated, which is the opposite of the "proved it was round" story,
 *      and one ship of five came home.
 *   3. The northern powers went north because they were shut out, and their
 *      first real profits came from cod and from robbing Spanish shipping
 *      rather than from any passage to Asia.
 */

module.exports = {
  topicKey: 't4-2',
  slug: 'topic-4-2-exploration',
  lessonFile: 'lesson-4-2-exploration.html',

  titleHtml: 'Who Paid, and What <em>For</em>',
  deck: `Voyages of this kind lost most of their ships and most of their crews, so somebody had to want the result badly enough to keep funding them. This chapter is about who that was and why: the price of pepper at both ends of the chain, the contracts that promised explorers a percentage, the line the pope's mediation drew through the world in <span class="num">1494</span>, and what the countries on the wrong side of it did next.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the motive, and it is the section most answers in this topic are missing. Sections 02 and 03 are the voyages with the dates the criteria ask for, and section 04 is the treaty and the response to it. Read 01 even if you read nothing else.`,
    steps: [
      `<b>01 Why a state paid:</b> the pepper margin, the crusading inheritance, and the contract Columbus signed.`,
      `<b>02 The Portuguese program:</b> seventy years of small steps to Calicut.`,
      `<b>03 The Spanish gamble:</b> a miscalculation, a hemisphere nobody expected, and a circumnavigation.`,
      `<b>04 The line and the latecomers:</b> Tordesillas, the northern passages, and what the shut-out powers did instead.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'motive',
      num: '01',
      accent: 'gold',
      name: 'Why a State Paid',
      navLabel: 'Why a state paid',
      dates: 'c. 1415 to 1500 &nbsp;·&nbsp; Margin, faith, and a contract',
      thesis: `Three motives, and each one becomes an argument rather than a slogan the moment you attach the mechanism to it. Spices were not merely valuable, they carried a specific markup collected by specific intermediaries; religion was not a general piety, it was an institution with a war behind it; and glory had a contract with a percentage in it.`,
      parts: [
        {
          heading: 'The margin',
          blocks: [
            { p: `Pepper grew on the Malabar coast of India and cost little there. By the time it reached a European table it had crossed the Indian Ocean, been sold at a Red Sea or Gulf port, carried overland through Mamluk Egypt or Ottoman territory, taxed at each transfer, sold again to Venetian merchants who held privileged access to those markets, and shipped to European ports. Every one of those steps was a margin taken by somebody who was not European, and the retail price at the end was a large multiple of the price at the source.` },
            { p: `That is the economic motive stated properly, and notice what it implies. The prize was not "spices are valuable," it was <em>cutting out the chain</em>. A European power that reached the source by sea would buy at Calicut prices and sell at Lisbon prices, capturing every margin between. It would also, as a bonus its rulers cared about, stop enriching the Muslim states and the Venetian republic that currently collected them.` },
            { p: `The Topic 2.1 chapter makes the necessary correction here: the Ottomans did not close the overland routes and no blockade forced Europe to sea. The trade continued. What drove the search was the cost and the number of hands it passed through, which is a motive of a completely different kind and a much better one to write.` }
          ]
        },
        {
          heading: 'The crusading inheritance',
          blocks: [
            { p: `Portugal's oceanic program did not begin with a caravel. It began in <span class="num">1415</span> with the capture of Ceuta, a Muslim port in North Africa, which is a crusading operation in the tradition of the Iberian reconquest. Spain's program begins in a year that makes the same point without comment: <span class="num">1492</span> is both the fall of Granada, the last Muslim kingdom in Iberia, and Columbus's first voyage, funded by the monarchs who had just completed that conquest.` },
            { p: `Two specific religious motives, beyond a general desire to spread Christianity. First, outflanking the Islamic world: if a Christian power could reach the sources of the spice trade and the West African gold by sea, it would divert wealth away from the states it had spent centuries fighting. Second, the legend of <span class="kt">Prester John</span>, a powerful Christian monarch believed to rule somewhere beyond the Islamic lands, whose alliance would let Christendom attack from both sides. The legend was persistent enough that Portuguese expeditions were sent overland to look for him, and it is a real motive in the documents rather than a colorful detail.` }
          ]
        },
        {
          heading: 'The contract, which is the best evidence of all',
          blocks: [
            { p: `Why did a crown fund this rather than a merchant house? Because the risk profile is wrong for private capital. A trading voyage to a known port is a calculable risk that a partnership can price, as the Topic 2.1 chapter describes. A voyage to find out whether a route exists may return nothing at all, may take decades of repeated attempts, and produces its main payoff as a strategic asset, a route nobody else knows, which is exactly the kind of thing a state values and a merchant cannot sell.` },
            { p: `So states paid, and they paid in the currency they had: monopoly rights, titles, and a share of whatever came back. The agreement Columbus obtained from the Spanish monarchs before sailing, the <span class="kt">capitulaciones</span>, promised him the title of Admiral of the Ocean Sea, the governorship of lands he discovered, and a tenth of the wealth obtained from them, with the offices to be hereditary.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: read the contract as a risk assessment',
              html: `Columbus's terms look extravagant, and they are evidence of exactly how unlikely the crown thought success was. You do not promise a tenth of a hemisphere and a hereditary admiralty for a venture you expect to pay off; you promise it when the expected value is near zero and the cost of the promise is therefore near zero too. The same logic explains the later fight: once the voyages did produce wealth, the Spanish crown spent decades in litigation with Columbus's heirs trying to claw those terms back. The generosity of a contract before the event, and the reluctance after it, tell you more about how the risk was perceived than any chronicler's account of royal enthusiasm.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `State sponsorship of uninsurable risk. <em>The mechanism is that a voyage of discovery may return nothing, may need decades of repeated attempts, and pays off mainly as a strategic asset a private partnership cannot sell, so crowns funded it and paid in monopolies, titles and a share of future returns, which cost nothing up front and everything if it worked.</em>`,
        limit: `It also means the crown owned the results, which is why these empires begin as royal monopolies and why, in section 04 and in Topic 4.4, the countries that arrived late used a different instrument entirely.`,
        comparison: `Against the <em>ortoq</em> partnerships in Topic 2.1, where Mongol nobles invested in merchants trading known routes for a share of profit: both are elites financing commerce, but one is buying into a working system and the other is buying a lottery ticket on a route that may not exist.`
      },
      terms: [
        ['Capitulaciones', 'The 1492 agreement granting Columbus titles, governorship and a tenth of the wealth from lands he found, a measure of how unlikely success was thought to be.'],
        ['Prester John', 'The legendary Christian monarch beyond the Islamic world whose alliance European rulers hoped to find, a documented motive for exploration.'],
        ['Reconquista', 'The long campaign by which Christian kingdoms took Iberia from Muslim rule, completed in 1492, whose institutions and ideology carried into overseas expansion.'],
        ['Intermediary margin', 'The cut taken at each transfer along a trade chain, and the specific thing a sea route to the source was meant to eliminate.'],
        ['Monopoly grant', 'An exclusive right to trade a route or region, the main currency a crown had to pay explorers and companies with.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'portuguese',
      num: '02',
      accent: 'rust',
      name: 'The Portuguese Program',
      navLabel: 'The Portuguese',
      dates: '1415 to 1500 &nbsp;·&nbsp; Ceuta to Calicut',
      thesis: `Not a voyage but a program: seventy years of incremental, state-funded expeditions, each pushing a little further and bringing back route knowledge that was treated as a state secret. It is the least dramatic and most instructive story in the unit.`,
      parts: [
        {
          heading: 'Down the coast, decade by decade',
          blocks: [
            { p: `After Ceuta in <span class="num">1415</span>, Portuguese expeditions worked south along the African coast under royal patronage, most associated with Prince Henry, whose household organized and financed voyages for decades. Progress was slow and psychological as much as technical: Cape Bojador, on the Saharan coast, was passed in <span class="num">1434</span> after years in which crews believed the sea beyond it unsailable.` },
            { p: `The pattern repeats: sail further, plant a marker, trade where possible, come home using the volta do mar described in the Topic 4.1 chapter, and record everything. By the <span class="num">1440</span>s Portuguese ships were trading on the Senegal coast, buying gold that had previously crossed the Sahara by camel, which is the redirection the Topic 2.4 chapter flags at its end, and buying enslaved people, which is where the Atlantic slave trade begins. In <span class="num">1488</span> Bartolomeu Dias was blown around the southern tip of Africa and realized the coast now ran northeast: the ocean was connected.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Henry "the Navigator" did not navigate, and the school of navigation at Sagres, with its academy of cartographers and instrument makers, is largely a later invention. What the evidence supports is a prince who systematically financed voyages, collected the knowledge they brought back, and pursued the enterprise for a mixture of crusading, commercial and dynastic reasons. That is less romantic and more useful, because "a state that funded repeated expeditions and treated the results as strategic information" is a mechanism, and a school on a cliff is a picture.`
            } }
          ]
        },
        {
          heading: 'Calicut, 1498, and what happened there',
          blocks: [
            { p: `Vasco da Gama left Lisbon in <span class="num">1497</span>, rounded the Cape, worked up the East African coast through the Swahili ports described in the Topic 1.5 chapter, and at Malindi engaged a pilot who knew the Indian Ocean crossing. He reached <span class="kt">Calicut</span> in May <span class="num">1498</span>. The Topic 2.3 chapter describes Calicut: a wealthy, cosmopolitan port under a Hindu ruler, with resident Arab, Gujarati and Chinese merchant communities and a reputation for protecting foreign traders.` },
            { p: `The meeting went badly, and the reason is the most useful fact in this chapter. The trade goods da Gama had brought, coarse cloth, hats, basins, strings of beads, the goods that bought gold and captives on the West African coast, were of no interest whatever in a market that dealt in pepper, fine cotton, gems and porcelain. The gifts were reportedly laughed at, and the Portuguese were unable to trade on the terms they expected.` },
            { p: `And yet the voyage was a triumph. Da Gama came home in <span class="num">1499</span> having lost two of four ships and, to scurvy, a large share of his men, with a cargo of spices whose sale is generally reckoned to have covered the cost of the expedition many times over. Both halves are true simultaneously, and holding them together is the point: <em>Europe had almost nothing Asia wanted, and the margin on what Asia had was so large that it did not yet matter.</em> That single sentence explains the next two centuries, including why the Topic 4.5 chapter is largely about silver, which was the one thing Europeans could offer that Asian markets did want.` },
            { p: `Portugal drew the obvious conclusion. If you cannot compete on goods, compete on force: the fleets that followed were armed, and the Topic 4.4 chapter is what they did with that. Cabral, sailing for India in <span class="num">1500</span>, swung west into the Atlantic, made landfall on the coast of Brazil and claimed it, which is how the Portuguese acquired a hemisphere they had not been looking for.` }
          ]
        }
      ],
      useThis: {
        tool: `Incremental state-funded reconnaissance. <em>The mechanism is that each expedition pushed a fixed distance further, brought its route knowledge home to be recorded, and was funded again on the strength of it, so risk was taken in small repeated doses over seventy years rather than gambled on one voyage, and the accumulated charts and wind knowledge became a state asset guarded as strategic information.</em>`,
        limit: `The program was built on gold and captives from the West African coast long before it reached Asia, which means the Atlantic slave trade begins during the exploration phase and not as a later consequence of it.`,
        comparison: `Against <em>Columbus</em> in section 03: seventy years of incremental coastal work versus one speculative leap across open ocean on a bad calculation. Both were state-funded, and the contrast in method is the reason Portugal reached the actual spice source and Spain found something else entirely.`
      },
      terms: [
        ['Cape Bojador', 'The Saharan coastal cape passed in 1434, a psychological as much as a navigational barrier to voyages further south.'],
        ['Bartolomeu Dias', 'Rounded the southern tip of Africa in 1488, establishing that the Atlantic and Indian Oceans connect.'],
        ['Vasco da Gama', 'Reached Calicut in 1498 by sea from Portugal, opening the route whose cargo repaid the voyage many times over.'],
        ['Calicut', 'The wealthy Malabar port whose market had no use for the goods da Gama carried, which set the terms of European trade in Asia.'],
        ['Feitoria', 'The fortified trading post, the Portuguese instrument for holding a foothold at a port without governing its hinterland.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'spanish',
      num: '03',
      accent: 'iron',
      name: 'The Spanish Gamble, and the Size of the World',
      navLabel: 'The Spanish gamble',
      dates: '1492 to 1522 &nbsp;·&nbsp; Columbus to Elcano',
      thesis: `Spain funded a voyage based on a calculation that was wrong in a way that would have killed everyone aboard, and got a hemisphere instead. Thirty years later another Spanish expedition measured the mistake by sailing around the planet.`,
      parts: [
        {
          heading: 'The miscalculation',
          blocks: [
            { p: `Educated Europeans in <span class="num">1492</span> knew the Earth was a sphere; that had been standard since antiquity, and the Topic 4.1 chapter notes that Ptolemy's coordinate geography was back in circulation. What was disputed was its size, and Columbus took a chain of the smallest available estimates: an undersized circumference, an overestimate of how far east Asia extended, and a generous reading of the distance to Japan. The result was a westward passage to Asia of a few thousand miles, which a caravel could just about provision for.` },
            { p: `The Portuguese crown's advisers, who had spent seventy years measuring coastlines, rejected his figures, which is why he went to Spain. They were right and he was wrong: the true distance from the Canaries to Asia is vastly greater than his estimate, and had the Americas not been in the way, his crews would have died of thirst somewhere in the Pacific.` },
            { p: `He sailed in August <span class="num">1492</span>, dropped south to the Canaries to pick up the trade winds as the Topic 4.1 chapter describes, made landfall in the Caribbean in October, and returned on a northern track to catch the westerlies. He made three further voyages, established the first Spanish settlements in the Caribbean, and died in <span class="num">1506</span> still maintaining he had reached the outskirts of Asia. The naming of the continents after Amerigo Vespucci, whose published accounts argued that this was a new landmass, is the historical judgment on that point.` }
          ]
        },
        {
          heading: 'The line, and the circumnavigation',
          blocks: [
            { p: `Two Christian monarchies now had competing claims, and the arbitration mechanism available was the papacy. Papal bulls in <span class="num">1493</span> and then the <span class="kt">Treaty of Tordesillas</span> in <span class="num">1494</span> settled it by drawing a north-south line in the Atlantic, west of the Cape Verde islands, and awarding everything discovered west of it to Spain and east to Portugal. That is how Portugal came to hold Brazil, which falls east of the line, and Spain the rest of the Americas.` },
            { p: `Then Ferdinand Magellan, a Portuguese captain sailing for Spain, proposed reaching the Spice Islands by going west and around the bottom of the new continents. He left in <span class="num">1519</span> with five ships and around two hundred and seventy men, found the strait that carries his name at the tip of South America, and entered the Pacific.` },
            { p: `And the Pacific was the discovery. The crossing took months and the ocean was vastly larger than anyone had believed; men died of scurvy and starvation on a passage nobody had provisioned for because nobody knew the scale. Magellan was killed in <span class="num">1521</span> in the Philippines, in a fight with the forces of a local ruler who refused to submit. Juan Sebastian Elcano brought one ship, the Victoria, home in <span class="num">1522</span> with eighteen of the original crew.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the expedition came home a day short',
              html: `Antonio Pigafetta, who kept a journal through the voyage and survived it, recorded that when the Victoria reached the Cape Verde islands the crew's carefully maintained calendar was one day behind the local date. They had kept their reckoning faithfully; sailing westward around the globe had cost them a day. It is the first recorded encounter with the effect that would eventually require an international date line, and it is a lovely piece of evidence, because a discrepancy between two calendars is a measurement of the shape of the world made by men who had no idea they were making it.`
            } },
            { p: `The lesson to take from Magellan is not that the Earth is round, which nobody educated doubted, but that it is much bigger than Europe had calculated, and that the Pacific is most of it. That is the correction Columbus's error needed, and it cost four ships and most of the men who sailed.` }
          ]
        }
      ],
      useThis: {
        tool: `Papal arbitration as a division of the world. <em>The mechanism is that two Catholic monarchies with competing claims accepted a mediator both recognized, and the resulting line at Tordesillas in 1494 assigned everything west to Spain and east to Portugal, which settled a war between them and had no standing whatever with the peoples whose lands were being divided or with the states that were not Catholic.</em>`,
        limit: `It bound only those who accepted the authority behind it. England, France and the Dutch ignored it entirely once they had the ships, which is section 04.`,
        comparison: `Against <em>da Gama</em>: Portugal's incremental program found the actual route to the actual source, and Spain's speculative leap found a hemisphere it had not sought. The difference in method predicts the difference in empire, a chain of fortified ports in one case and territorial conquest in the other, which is Topic 4.4.`
      },
      terms: [
        ['Treaty of Tordesillas', 'The 1494 agreement dividing newly encountered lands between Spain and Portugal along a line west of Cape Verde, which gave Portugal Brazil.'],
        ['Circumnavigation', 'The 1519 to 1522 voyage completed by Elcano after Magellan&rsquo;s death, which established the true size of the globe and of the Pacific.'],
        ['Strait of Magellan', 'The passage at the southern tip of South America linking the Atlantic to the Pacific.'],
        ['Scurvy', 'The vitamin C deficiency that killed more sailors on these voyages than storms or fighting, and the practical limit on how long a ship could stay at sea.'],
        ['Amerigo Vespucci', 'The navigator whose published argument that these lands were a new continent gave the Americas their name.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'latecomers',
      num: '04',
      accent: 'oxide',
      name: 'The Latecomers Go North',
      navLabel: 'The latecomers',
      dates: '1497 to 1650 &nbsp;·&nbsp; Passages, fish and plunder',
      thesis: `England, France and the Dutch were shut out of the southern routes by a treaty they had no reason to respect and a Portuguese navy they could not yet fight, so they looked for a way around the top of the world. They never found one, and what they found instead paid better.`,
      parts: [
        {
          heading: 'The search for a passage',
          blocks: [
            { p: `The logic is straightforward. If Spain holds the west and Portugal the route around Africa, a latecomer needs a third way to Asia, and the map suggested two: a <span class="kt">Northwest Passage</span> over the top of North America, or a <span class="kt">Northeast Passage</span> over the top of Russia. Both would also, in theory, be shorter.` },
            { p: `England sent John Cabot west in <span class="num">1497</span>, reaching Newfoundland. France sent Verrazzano along the North American coast in the <span class="num">1520</span>s and Cartier up the St Lawrence in the <span class="num">1530</span>s, looking for the opening. English expeditions under Frobisher, Davis and later Hudson probed the Arctic, and Hudson's crew mutinied and set him adrift in <span class="num">1611</span>. Dutch expeditions under Barents tried the northeast route and wintered in the Arctic in the <span class="num">1590</span>s. Every one of these failed at its stated objective, and the reason is worth stating carefully because the shorthand version is wrong. Both passages are real geography and both have since been sailed. What defeated these expeditions was Arctic ice, which in the climate of those centuries and with wooden sailing ships made the routes unusable as dependable commercial highways.` }
          ]
        },
        {
          heading: 'What they found instead',
          blocks: [
            { p: `Three things, and they redirected the northern powers entirely. <b>Fish.</b> The Grand Banks off Newfoundland held cod in quantities that European fishermen exploited within a few years of Cabot's voyage, and dried salt cod was a staple protein for a continent with religious fasting rules. Unglamorous and immediately profitable, and it put English, French, Basque and Portuguese fishermen across the North Atlantic decades before any colony.` },
            { p: `<b>Furs.</b> French and later English traders on the St Lawrence and in the Hudson Bay watershed built an economy on beaver pelts obtained from Indigenous nations, which is a relationship of trade and alliance rather than of conquest, and which shaped North American colonization into something quite different from the Spanish pattern.` },
            { p: `<b>Plunder.</b> The simplest response to being excluded from a rich trade is to rob it. English and French captains attacked Spanish shipping and ports, and the practice was licensed by their own governments through letters of marque, which converted piracy into a state instrument: Francis Drake circumnavigated the globe between <span class="num">1577</span> and <span class="num">1580</span> and returned so laden with plunder from Spanish shipping that his backers, the queen among them, saw an enormous return, and she knighted him on the deck of his ship. The Topic 4.6 chapter treats privateering as the tool of state competition it was.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat Tordesillas as though it governed the world. It was an agreement between two Catholic monarchies, mediated by an authority that only Catholic monarchies recognized, and it had no force at all for Protestant England and the Dutch Republic after the Reformation, still less for the Ottomans, the Mughals, the Ming or any of the peoples whose territory it purported to allocate. A French king is said to have asked to see the clause in Adam's will that divided the world between Spain and Portugal. Write it as a settlement between two claimants that shaped where they expanded, and note who ignored it, and you have the treaty and its limits in two sentences.`
            } },
            { p: `By the end of the period the northern powers had abandoned the search for a passage and adopted a different model entirely, the chartered joint-stock company, which is where the Topic 4.4 chapter picks up. The English East India Company was founded in <span class="num">1600</span> and the Dutch VOC in <span class="num">1602</span>, and both went to Asia by the Cape route, the one Portugal had opened, and took the trade by force and by capital rather than by finding a way around.` }
          ]
        }
      ],
      useThis: {
        tool: `Exclusion redirecting a state's strategy. <em>The mechanism is that a power shut out of existing routes by treaty and by force must either find a new route, take the existing one, or exploit what lies along the way, and when the northern passages proved unnavigable the latecomers converted to fisheries, furs, licensed plunder and eventually to chartered companies that could contest the southern routes directly.</em>`,
        limit: `The passages existed and were unusable, which is not the same claim, so decades of expeditions and many lives were spent establishing that ice closed a route the map correctly said was there.`,
        comparison: `Against <em>Portugal and Spain</em>: the first movers were funded by crowns and held their claims by royal monopoly, while the latecomers ended up funding expansion through joint-stock companies with delegated sovereign powers, which is the institutional difference the Topic 4.4 chapter is built on.`
      },
      terms: [
        ['Northwest Passage', 'The hoped-for sea route over northern North America to Asia, sought for centuries and not navigable by the ships of this period.'],
        ['Grand Banks', 'The Newfoundland fishing grounds whose cod became the first sustained North Atlantic profit for the northern powers.'],
        ['Letter of marque', 'A government license authorizing a private ship to attack enemy shipping, which made piracy an instrument of state competition.'],
        ['Privateering', 'Licensed raiding of a rival&rsquo;s commerce, used extensively by England and France against Spanish shipping.'],
        ['Chartered company', 'A company granted monopoly trading rights and, often, powers of war and government, the latecomers&rsquo; instrument for contesting the Asian trade.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the specific evidence with dates, and the reason. None of them uses the word glory, and all of them could have.`,
    pairs: [
      {
        category: 'Motivation',
        title: 'The motive was the intermediaries, not a blockade',
        body: `Pepper cost little on the Malabar coast and a great deal in Europe, and the difference was collected at every transfer: across the Indian Ocean, at a Red Sea or Gulf port, overland through Mamluk or Ottoman territory, and again by Venetian merchants with privileged access. A sea route to the source would capture all of it. The Ottomans did not close the overland routes and no blockade forced Europe onto the ocean, which means the correct explanation is cost and the number of hands rather than an obstruction, and it is also the stronger one, because it explains why the search continued for seventy years rather than starting suddenly in 1453.`
      },
      {
        category: 'Method',
        title: 'Portugal accumulated; Spain gambled',
        body: `Portugal ran a seventy-year program of state-funded expeditions down the African coast, passing Bojador in 1434, rounding the Cape with Dias in 1488, reaching Calicut with da Gama in 1498, and treating the accumulated charts and wind knowledge as guarded state property. Spain funded a single speculative crossing in 1492 based on a circumference estimate the Portuguese advisers had rejected as too small. The difference in method predicts the difference in empire: incremental reconnaissance found the actual spice source and produced a chain of fortified ports, while a leap into the unknown found a hemisphere and produced territorial conquest.`
      },
      {
        category: 'Terms of trade',
        title: 'Europe had nothing Asia wanted, and it did not matter yet',
        body: `Da Gama reached Calicut in 1498 carrying coarse cloth, hats and beads, the goods that bought gold and captives on the West African coast, and a wealthy Indian Ocean market that dealt in pepper, fine cotton and porcelain had no use for them. He also came home having lost two of four ships and much of his crew with a cargo that repaid the voyage many times over. Both facts are true at once, and together they explain the next two centuries: the margin was large enough to sustain the trade despite Europe having nothing to sell, which is why Topic 4.5 is mostly about silver and why Portugal's next fleets came armed.`
      },
      {
        category: 'Law and power',
        title: 'A line only binds those who accept the authority that drew it',
        body: `Tordesillas in 1494 divided newly encountered lands between Spain and Portugal along a line west of Cape Verde, mediated by a papacy both crowns recognized, and it gave Portugal Brazil. It meant nothing to Protestant England or the Dutch Republic after the Reformation, nothing to France, and nothing at all to the peoples whose territory it allocated. The excluded powers spent decades looking for northern passages that ice would not let them use, then took what was profitable anyway: Newfoundland cod, the fur trade, licensed plunder of Spanish shipping, and finally chartered companies that went to Asia by Portugal's own route. Whenever a treaty appears in this course, ask who signed it and who had no reason to care.`
      }
    ]
  }
};
