'use strict';

/**
 * Topic 4.4, Maritime Empires Established: the deep reading.
 *
 * Why this exists. The success criteria ask for three distinct models of empire,
 * the Portuguese trading post network, the Spanish territorial conquest, and the
 * chartered joint-stock company, and they ask for the comparison between them.
 * The First & 10 names all three. What it has no room for is the reason each one
 * took the shape it did, and that reason is the whole topic: none of these were
 * preferences. Each was the arrangement that matched what a state could actually
 * project across an ocean, against the particular thing it wanted and the
 * particular resistance it met.
 *
 * Three things carried deliberately:
 *
 *   1. The Portuguese did not conquer Asia because they could not. Section 01
 *      makes that a mechanism, ships and guns beat harbor defenses and lost to
 *      field armies, rather than a judgment about ambition. A student who has
 *      that can explain Goa and Malacca without implying Asia was weak.
 *   2. Conquest in the Americas was overwhelmingly done by Indigenous armies
 *      with Indigenous motives, on a population that section 4.3 explains was
 *      collapsing. The lone-conquistador story is not a simplification, it is
 *      an error about who did the fighting.
 *   3. The joint-stock company is the genuinely new institution of the unit, and
 *      the point about it is not that it raised money. It is that it held
 *      sovereign powers, which is why the comparison card in section 05 is the
 *      most useful sentence in this chapter.
 */

module.exports = {
  topicKey: 't4-4',
  slug: 'topic-4-4-maritime-empires-established',
  lessonFile: 'lesson-4-4-maritime-empires-established.html',

  titleHtml: 'Three Ways to Hold an <em>Ocean</em>',
  deck: `Portugal took ports and taxed everyone else&rsquo;s shipping. Spain took land and the people on it. The Dutch and English chartered private companies and gave them the powers of a state. Three empires built in the same century out of the same voyages, and the differences are not national character. They are answers to what each state wanted, what it could reach, and who was standing in the way.`,

  howTo: {
    heading: 'How to Use This',
    intro: `The success criteria ask you to explain three models and compare them. Sections 01, 02 and 04 are the three; section 03 is how the Spanish one was actually run once the fighting stopped, which is the part most answers skip; section 05 is the comparison, written out as sentences.`,
    steps: [
      `<b>01 The trading post empire:</b> the cartaz, the chokepoints, and why Portugal never marched inland.`,
      `<b>02 Conquest:</b> Tenochtitlan and Cajamarca, and who actually did the fighting.`,
      `<b>03 Governing what was taken:</b> encomienda, viceroys, audiencias, and the limits of an order from Madrid.`,
      `<b>04 The company as a state:</b> the VOC, the English East India Company, and the powers in a charter.`,
      `<b>05 The three models side by side:</b> what each was for, and what each could not do.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'tradingpost',
      num: '01',
      accent: 'gold',
      name: 'The Empire of Chokepoints',
      navLabel: 'Trading posts',
      dates: 'c. 1500 to 1600 &nbsp;·&nbsp; Estado da India',
      thesis: `Portugal had perhaps a million and a half people and no army capable of taking territory in Asia. What it had was ships that carried guns better than anyone else&rsquo;s, so it built an empire out of the only thing that advantage could hold: the narrow places every ship has to pass.`,
      parts: [
        {
          heading: 'What Portugal actually seized',
          blocks: [
            { p: `Look at the map of the Portuguese <span class="kt">Estado da India</span> and the pattern is immediate. <b>Goa</b>, taken in <span class="num">1510</span> and made the administrative capital of the whole eastern enterprise. <b>Malacca</b>, taken in <span class="num">1511</span>, which controls the strait every ship between the Indian Ocean and the South China Sea must thread. <b>Hormuz</b>, taken in <span class="num">1515</span>, at the mouth of the Persian Gulf. Later <b>Macau</b>, leased from <span class="num">1557</span>, at the edge of the Chinese market. Add fortified factories down the East African coast and along the Indian shore.` },
            { p: `Every one of them is a port, and most of them are at a strait. None of them is a province. The Portuguese held perhaps fifty fortified points and almost no hinterland, which is exactly what a network built to tax movement rather than to own land looks like.` },
            { p: `The instrument was the <span class="kt">cartaz</span>, a pass that a merchant ship bought from the Portuguese, which committed the ship to calling at a Portuguese port and paying duties there. A ship sailing without one was liable to seizure by Portuguese patrols. The Estado da India therefore did not need to trade very much itself to make money; it needed to make Asian and Arab merchants who had been sailing these routes for centuries pay for the privilege of continuing.` }
          ]
        },
        {
          heading: 'Why ports and not provinces',
          blocks: [
            { p: `This is the mechanism the chapter turns on. Portuguese naval artillery, as the Topic 4.1 chapter sets out, could out-shoot the fleets it met in the Indian Ocean and could batter a harbor, which is why Diu in <span class="num">1509</span> broke the coalition assembled against them. But a broadside cannot occupy a river valley. Ashore, and out of range of the guns, the Portuguese faced Mughal, Safavid, Ottoman and Chinese states with field armies, revenues and populations many times their own.` },
            { p: `So the Portuguese advantage was real and it was narrowly shaped: decisive at sea and at the water's edge, negligible fifty miles inland. Their empire took the shape of the advantage. That is the sentence to write, because it explains the map instead of describing it.` },
            { p: `It also explains what Portugal could not do. The cartaz system leaked continuously; the Indian Ocean is enormous, Portuguese patrol capacity was small, and merchants evaded, bribed and rerouted. Gujarati, Arab, Malay and Chinese shipping never stopped, and the Topic 4.8 chapter is largely about how much of the old system carried on underneath the new one. The Estado da India skimmed a trade it never controlled.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "took over Indian Ocean trade." It taxed a share of it from a string of forts, and it did so at the sufferance of much larger states that found the arrangement tolerable or not worth the cost of ending. When a major Asian power did decide to end it, it usually could: Ottoman fleets contested the Red Sea, Aceh and Calicut fought the Portuguese for decades, and Oman took Muscat in <span class="num">1650</span> and then Portuguese ports down the Swahili coast. An empire that can be pushed out of a region by a regional power was never in control of it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The cartaz. <em>The mechanism is that a naval force too small to occupy territory can still monetize a trade route by selling permission to use it, because a chokepoint concentrates all traffic into a stretch of water that a few armed ships can patrol, so the revenue comes from other people&rsquo;s cargo rather than from land or from goods the empire owns.</em>`,
        limit: `Enforcement was patchy across an ocean that size, evasion was constant, and the system collapsed wherever a regional power decided to remove it, as Oman did at Muscat in 1650.`,
        comparison: `Against the <em>Srivijaya</em> model in Topic 2.3: a state at the Malacca Strait taxing passing shipping is a much older idea than the Portuguese, who seized the same strait for the same reason. What was new was the artillery that let a distant, small power hold the chokepoint rather than a local one.`
      },
      terms: [
        ['Estado da India', 'The Portuguese network of fortified ports and factories from East Africa to Macau, governed from Goa.'],
        ['Trading post empire', 'An empire of coastal strongpoints that taxes and directs trade rather than governing territory or population.'],
        ['Cartaz', 'The pass Portugal sold to merchant ships, requiring them to call at a Portuguese port and pay duties there.'],
        ['Chokepoint', 'A narrow passage all shipping on a route must use, which lets a small naval force tax a large trade.'],
        ['Factory', 'A permanent overseas trading post staffed by company or crown agents; some were fortified or sat inside a fort and others were not.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'conquest',
      num: '02',
      accent: 'rust',
      name: 'Who Actually Did the Fighting',
      navLabel: 'Conquest',
      dates: 'c. 1519 to 1572 &nbsp;·&nbsp; Mexico and Peru',
      thesis: `Two of the largest states in the Americas fell to expeditions of a few hundred Spaniards, and the explanation is not that a few hundred Spaniards defeated them. It is that both empires had internal enemies willing to supply armies, and that the epidemic of Topic 4.3 arrived at the decisive moment.`,
      parts: [
        {
          heading: 'Tenochtitlan',
          blocks: [
            { p: `Hernan Cortes landed in <span class="num">1519</span> with roughly five hundred men. The Mexica capital of Tenochtitlan was among the largest cities in the world, and the Mexica state governed millions through a tribute system, described in the Topic 1.4 chapter, that extracted goods and captives from subject peoples who had been conquered within living memory.` },
            { p: `That tribute system is the opening. The Tlaxcalans, never conquered and permanently at war with the Mexica, fought the Spanish first and then allied with them, and other tributary cities joined as the campaign advanced. The army that besieged Tenochtitlan in <span class="num">1521</span> was overwhelmingly Indigenous, with tens of thousands of allied warriors, and it was fighting a war that predated the Spanish arrival and had its own aims.` },
            { p: `Smallpox reached the city in <span class="num">1520</span>, between the Spanish expulsion on the Noche Triste and the final siege. It killed a large part of the population and, critically, the ruler Cuitlahuac. A city under siege, cut off from its causeways and water supply, with an epidemic inside it, is not the same military problem as the same city a year earlier.` },
            { p: `Spanish advantages were real and worth naming precisely: steel weapons and armor, horses, war dogs, a handful of firearms and cannon, ships built to control the lake, and interpreters, above all Malintzin, whose translation made the alliances possible at all. But every one of those is a force multiplier applied to an army that was mostly not Spanish.` }
          ]
        },
        {
          heading: 'Cajamarca',
          blocks: [
            { p: `Francisco Pizarro reached Peru in <span class="num">1532</span> with under two hundred men, and the pattern repeats with different particulars. Smallpox had already traveled overland ahead of any European, killing the Inca ruler Huayna Capac and his heir, and the succession war between Atahualpa and Huascar had just ended. Pizarro met a state that had finished a civil war weeks earlier, with a victorious claimant whose defeated brother's supporters had every reason to look for another patron.` },
            { p: `At Cajamarca the Spanish seized Atahualpa in a single ambush. That the Inca system centralized so much authority in the ruler, as the Topic 1.4 chapter describes, made a decapitation strike unusually effective, though it did not end the war: Manco Inca's rising in <span class="num">1536</span> nearly destroyed the Spanish position, and a successor Inca state held out at Vilcabamba until <span class="num">1572</span>. Forty years is not a conquest in an afternoon.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the allies wrote it down too',
              html: `The lone-conquistador story survives partly because Spanish accounts were written to justify claims on the crown, and a man petitioning for reward has no reason to emphasize how much of the fighting his allies did. But other sources exist. The <em>Lienzo de Tlaxcala</em>, a sixteenth-century pictorial record made by Tlaxcalans, shows their own warriors at the center of the campaign, because they were petitioning the crown too, for the privileges owed to allies rather than to the conquered. The Florentine Codex, compiled by Bernardino de Sahagun with Nahua informants and written in Nahuatl, gives a Mexica account of the epidemic and the siege. Reading Spanish claims against Indigenous ones is what turns this from a legend into a documented campaign.`
            } }
          ]
        },
        {
          heading: 'Why the same expedition failed elsewhere',
          blocks: [
            { p: `The strongest evidence for this explanation is where conquest did not happen. Spanish expeditions into the North American interior found no centralized state to capture and no tributary population with a grievance to exploit, and achieved nothing lasting. In southern Chile the Mapuche fought Spain and then Chile to a standstill for three centuries. In the Amazon and across the Great Plains, European control remained nominal for generations.` },
            { p: `So the variable is not Spanish technology, which was the same in every case. It is whether there was a centralized state to decapitate and a supply of allies with reasons of their own. Where both existed, a few hundred men could bring down an empire; where neither did, the same men accomplished almost nothing.` }
          ]
        }
      ],
      useThis: {
        tool: `Conquest through existing fracture. <em>The mechanism is that a tribute empire generates subject peoples with recent grievances, so an outsider who arrives able to promise relief inherits an army he did not raise, and the technological advantage matters only as a multiplier on a force that is mostly local.</em>`,
        limit: `It only works where a centralized state exists to be captured and a fractured tributary population exists to recruit from, which is why the same expeditions failed in the North American interior and against the Mapuche.`,
        comparison: `Against the <em>Estado da India</em> in section 01: Portugal met large, cohesive states with field armies and settled for taxing their harbors, while Spain met a state whose subjects would fight for the invader and took the whole thing. Same century, same continent of origin, opposite outcome, and the difference is in what they met rather than in what they brought.`
      },
      terms: [
        ['Conquistador', 'A Spanish expedition leader operating under royal license, financed privately and paid in land, labor and a share of the loot.'],
        ['Tlaxcalans', 'The unconquered Mexica rivals who supplied the largest part of the army that took Tenochtitlan, and who claimed the privileges of allies afterward.'],
        ['Malintzin', 'The Nahua woman whose interpreting made Cortes able to negotiate the alliances the campaign depended on.'],
        ['Cajamarca', 'The 1532 ambush at which Pizarro seized Atahualpa, effective because Inca authority was concentrated in the ruler.'],
        ['Vilcabamba', 'The successor Inca state that resisted until 1572, evidence that conquest was a forty-year war rather than an event.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'governing',
      num: '03',
      accent: 'iron',
      name: 'Governing What Was Taken',
      navLabel: 'Colonial rule',
      dates: 'c. 1500 to 1700 &nbsp;·&nbsp; Encomienda, viceroys, audiencias',
      thesis: `Spain built the first large territorial empire ever governed across an ocean, and the whole design is shaped by one constraint: a message to Madrid and back took the better part of a year, so every institution has to answer the question of what a distant king does about a governor he cannot see.`,
      parts: [
        {
          heading: 'Encomienda: paying an army with other people',
          blocks: [
            { p: `The crown had not paid for the conquests. Expeditions were private ventures under royal license, and the men who survived expected reward. The <span class="kt">encomienda</span> was the currency: a grant to a Spaniard of the right to demand labor and tribute from a named Indigenous community, in exchange for a formal obligation to protect them and see them instructed in Christianity.` },
            { p: `The mechanism is worth stating exactly. It was not a grant of land, legally, and it did not make the people property. It was a grant of <em>the right to their work</em>, which let the crown pay its conquerors without money and without ceding sovereignty over territory. In practice, on a community collapsing from epidemic and with no realistic appeal, the distinction between a right to labor and outright ownership was thin.` },
            { p: `Legal challenge came early and from inside the system. Antonio de Montesinos preached against it in <span class="num">1511</span>; Bartolome de las Casas, himself once an encomendero, spent decades campaigning; the Laws of Burgos of <span class="num">1512</span> and the New Laws of <span class="num">1542</span> restricted the institution and tried to end its inheritance. The New Laws provoked armed revolt in Peru and were partly withdrawn, which tells you where power actually sat.` },
            { p: `Encomienda declined across the sixteenth century, less from the reformers than from the collapse in the population it drew on. What followed was not one successor but a portfolio, and keeping two of them apart is worth a mark. The <span class="kt">repartimiento</span> required Indigenous communities to supply rotating groups of workers for limited periods, in theory for wages. The Andean colonial <span class="kt">mita</span> is a related but separate institution, built by Viceroy Toledo in the 1570s out of a pre-conquest Andean labor obligation and aimed above all at Potosi. Debt peonage and wage labor on the great estates grew alongside both. These overlapped in time and place rather than replacing one another in tidy stages, and Indigenous slavery and encomienda tribute persisted in some regions while the others were running.` }
          ]
        },
        {
          heading: 'Viceroys, audiencias, and deliberate friction',
          blocks: [
            { p: `Above the encomenderos the crown built a hierarchy. Two <span class="kt">viceroyalties</span>, New Spain from <span class="num">1535</span> and Peru from <span class="num">1542</span>, each headed by a viceroy standing in the king's person. Beneath them, <b>audiencias</b>, high courts with administrative powers, which heard appeals and could report directly to Madrid over the viceroy's head. In Spain, the Council of the Indies drafted the legislation and the Casa de Contratacion in Seville licensed every ship and registered every cargo.` },
            { p: `The overlapping jurisdictions were not administrative clumsiness. A viceroy ten thousand miles away, with an army and a treasury under his hand, is the most dangerous person in the empire, so the crown gave him a court that could tell on him, appointed him for limited terms, and subjected him at the end to a <b>residencia</b>, a judicial review of his conduct in office. Colonial-born Spaniards were largely excluded from the highest posts, which kept the top of the hierarchy dependent on Madrid and, as the Topic 4.7 chapter shows, laid a grievance that mattered enormously later.` },
            { p: `The Church was the third pillar and in daily life often the closest one. Under the <em>patronato real</em> the crown appointed bishops and controlled Church revenues in the Americas, which made the ecclesiastical hierarchy an arm of royal government. Missionaries and parish clergy ran the schools, kept the registers of births, marriages and deaths that are now our best demographic sources, and reached villages no royal official ever visited.` },
            { p: `The famous summary of how all this worked in practice is the phrase <em>obedezco pero no cumplo</em>, I obey but I do not comply: a local official could formally acknowledge a royal order and decline to execute it pending further representation. It sounds like a loophole and it functioned as a governing mechanism, the empire's way of absorbing instructions written by people who had never seen the place they were about.` }
          ]
        }
      ],
      useThis: {
        tool: `Overlapping jurisdiction as a control on distance. <em>The mechanism is that a crown which cannot supervise a distant governor directly instead appoints a second authority in the same place with the right to report over his head, so the two watch each other and the king is informed by rivals rather than by the man he is checking on.</em>`,
        limit: `It bought loyalty at the cost of speed and clarity, produced constant jurisdictional conflict, and did nothing to stop the routine non-enforcement summed up as obedezco pero no cumplo.`,
        comparison: `Against <em>Ottoman devshirme</em> in Topic 3.2: both are answers to the problem of officials with local power bases, but the Ottomans solved it by recruiting servants with no local ties at all, while Spain solved it by setting locally posted officials against each other. The Ottoman version is cheaper to run and the Spanish version is what you use when your officials are half a year away.`
      },
      terms: [
        ['Encomienda', 'A grant of the right to Indigenous labor and tribute from a named community, used to pay conquerors without money or land.'],
        ['Repartimiento', 'The Spanish colonial requirement that Indigenous communities supply rotating groups of workers for limited periods, in theory for wages.'],
        ['Colonial mita', 'The Andean labor draft Spanish authorities built out of a pre-conquest Inca obligation, most famously to supply Potosi; related to the repartimiento and not the same institution.'],
        ['Viceroyalty', 'A vast administrative division, New Spain and Peru, headed by a viceroy standing in the king\'s person.'],
        ['Audiencia', 'A high court with administrative powers, able to report to Madrid over the viceroy and check him from inside his own territory.'],
        ['Casa de Contratacion', 'The Seville house of trade that licensed every ship and registered every cargo, the crown\'s point of control over Atlantic commerce.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'companies',
      num: '04',
      accent: 'oxide',
      name: 'The Company That Was Also a State',
      navLabel: 'Companies',
      dates: 'c. 1600 to 1700 &nbsp;·&nbsp; VOC and English East India Company',
      thesis: `The genuinely new institution of this unit is not a ship or a gun. It is a chartered company owned by shareholders, granted a monopoly by its government and, with it, the right to make war, sign treaties, coin money and govern territory. Empire became something a private corporation could do.`,
      parts: [
        {
          heading: 'The problem the company solves',
          blocks: [
            { p: `A voyage to Asia took two years, cost more than most merchants had, and might return nothing. The Topic 4.2 chapter shows why that made the first two seaborne empires royal projects: only a crown could absorb a total loss. The joint-stock company is the arrangement that removes the crown from the financing without removing the risk-bearing.` },
            { p: `Investors buy <b>shares</b>. Each puts in a fraction of the cost and takes a proportional fraction of the profit, and no single investor is ruined if a fleet sinks. Because a share can be sold to someone else, an investor's money is not locked up for the years the voyage takes, and Amsterdam's exchange gave them a place to sell it. Because the company is permanent rather than dissolved at the end of each voyage, it can hold forts, warehouses, ships and staff between expeditions and reinvest returns instead of distributing everything.` },
            { p: `That last point is what turns a financing method into an empire. A permanent capital base means a company can build a fort in Java and still be there in twenty years to use it.` }
          ]
        },
        {
          heading: 'What was in a charter',
          blocks: [
            { p: `The English <span class="kt">East India Company</span> was chartered in <span class="num">1600</span> and the Dutch <span class="kt">VOC</span> in <span class="num">1602</span>, the latter formed by merging competing Dutch ventures so that they would stop bidding each other up on the same spices. The VOC charter is the one to know, because it granted, in the territories east of the Cape of Good Hope: a monopoly on Dutch trade there, and the powers to build fortresses, maintain armies and fleets, wage war, conclude treaties with foreign rulers, appoint governors, administer justice and coin money.` },
            { p: `Read that list and the definition follows. These are sovereign powers, delegated to a body accountable to its shareholders. The VOC founded Batavia in <span class="num">1619</span> as its capital, took Malacca from the Portuguese in <span class="num">1641</span>, held the Banda Islands after killing or enslaving most of their population to monopolize nutmeg, and ran a fortified network from the Cape to Japan. The English company's rise to territorial rule in Bengal comes later, in Unit 5, but the instrument is the same one issued in 1600.` },
            { p: `The advantage over the Portuguese model was capital and persistence: the VOC could lose a fleet, absorb it and sail again next season, and it out-competed the Estado da India as much by outlasting it as by defeating it. The advantage over the Spanish model was that the state carried neither the cost nor, formally, the responsibility.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that joint-stock companies were significant because they "raised money." Partnerships and state loans had funded long-distance trade for centuries, and the Topic 2.1 chapter has the Italian and Islamic instruments that did it. Two things are new here, and both belong in the sentence: <b>permanent transferable shares</b>, which let a company hold capital and infrastructure across decades rather than dissolving after each voyage, and <b>delegated sovereignty</b>, which let a private board declare war. A company that can raise money is a business. A company that can sign a treaty is an empire.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Delegated sovereignty. <em>The mechanism is that a state facing a venture too expensive and too distant to run itself charters a private company and grants it war-making, treaty-making and governing powers, so empire is financed by shareholders seeking dividends while the state keeps the trade monopoly and carries neither the cost nor the formal blame.</em>`,
        limit: `A body answering to shareholders pursues profit over policy, which produced atrocities like the Banda massacre, chronic conflict with its own government, and eventually, for both companies, insolvency and a state takeover.`,
        comparison: `Against <em>Spanish royal licensing</em> in section 03: both delegate empire to private hands, but Spain licensed individual expeditions and then built a royal bureaucracy over the result, while the Dutch chartered a permanent corporation and left it governing. One ends with a viceroy answering to a king, the other with a governor-general answering to a board.`
      },
      terms: [
        ['Joint-stock company', 'A business owned by shareholders who divide risk and profit in proportion to their investment, with shares that can be sold.'],
        ['VOC', 'The Dutch East India Company, chartered in 1602 with the power to wage war, make treaties, govern and coin money east of the Cape.'],
        ['East India Company', 'The English company chartered in 1600, the instrument that later carried English rule into Bengal.'],
        ['Charter', 'The grant from a government defining a company\'s monopoly and its delegated sovereign powers.'],
        ['Batavia', 'The VOC capital founded in 1619 on Java, the administrative center of a company-run maritime empire.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'comparison',
      num: '05',
      accent: 'gold',
      name: 'Three Models Side by Side',
      navLabel: 'Comparison',
      dates: 'c. 1500 to 1700 &nbsp;·&nbsp; What each was for',
      thesis: `Put the three next to each other and the organizing question is not which was strongest. It is what each was built to extract, because that determines everything else: how much territory it needed, how many people it had to govern, and what it could not survive.`,
      parts: [
        {
          heading: 'What each one was extracting',
          blocks: [
            { p: `<b>Portugal wanted a margin on goods that already existed.</b> Pepper and spices were grown, harvested and traded by other people; Portugal wanted to buy at the source and to tax everyone else's carriage. That requires ports, guns and passes, and no territory at all. Small population, tiny administration, no settler colonies of consequence in Asia.` },
            { p: `<b>Spain wanted things in the ground, and the ground was in the Americas.</b> Silver and sugar are not traded into your hands; they are dug and grown, which requires land and, above all, a labor force. That is why Spain took territory and governed people, why the encomienda and the repartimiento exist, why a viceregal bureaucracy and a Church hierarchy exist, and why the demographic catastrophe of Topic 4.3 was an imperial crisis and not only a human one.` },
            { p: `<b>The Dutch and English wanted the Portuguese margin, at scale and without royal money.</b> The company model is what you build when the goal is commercial like Portugal's but the state is unwilling to fund it and the competition is now armed. It ends up territorial anyway, in Java in the seventeenth century and in Bengal in the eighteenth, because controlling supply turned out to require controlling the growers.` }
          ]
        },
        {
          heading: 'What each one could not survive',
          blocks: [
            { p: `A trading post empire is only as strong as its weakest fort and its patrol capacity. Portugal's fell to a rival with more capital and better ships, and to regional powers that simply took ports back, Oman at Muscat in <span class="num">1650</span> and the Dutch at Malacca in <span class="num">1641</span>.` },
            { p: `A territorial empire is only as strong as the labor system underneath it. Spain's was rebuilt twice, from encomienda to repartimiento to peonage and enslaved African labor, because the first population it drew on collapsed, and it faced the revolts of Topic 4.6 wherever the pressure and the religious suppression ran together.` },
            { p: `A company empire is only as strong as its dividend. The VOC and the English company both ran into the contradiction of an institution that must both govern and pay shareholders, and both ended in insolvency and nationalization, the VOC in <span class="num">1799</span>. Governing costs more than trading and returns less.` },
            { p: `Say what varies and why. All three were built out of the same voyages and the same guns; the differences follow from what was being taken and who was standing in the way.` }
          ]
        }
      ],
      useThis: {
        tool: `Extraction shapes administration. <em>The mechanism is that what an empire wants determines how much it must govern: a margin on somebody else&rsquo;s cargo needs only harbors and patrols, while a commodity that must be dug or grown needs land, a labor force and therefore courts, churches and a bureaucracy to hold them, which is why two empires from the same decade look nothing alike.</em>`,
        limit: `The categories blur over time. The companies became territorial in Java and Bengal, and Portugal governed real territory in Brazil, so treat these as models rather than as boxes each empire stayed inside.`,
        comparison: `Against the <em>land-based empires</em> of Unit 3: Ottoman, Safavid, Mughal, Qing and Russian states expanded across contiguous ground and had to govern everyone they absorbed, while maritime empires could take a harbor and ignore the interior. That is the single most useful contrast available for a comparison prompt in this unit.`
      },
      terms: [
        ['Model of empire', 'The shape an empire takes, determined by what it extracts and by the resistance it meets rather than by national character.'],
        ['Settler colony', 'A colony organized around transplanted population and landholding, distinct from a factory or fort.'],
        ['Monopoly', 'An exclusive right to trade a good or a route, the core asset a charter granted and the thing rivals attacked.'],
        ['Nationalization', 'A state takeover of a bankrupt company, the end of both the VOC and the English East India Company.'],
        ['Contiguous empire', 'A land empire expanding across adjoining territory, obliged to govern every population it absorbs.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison or explanation: the claim, the specific evidence, and the reason. The first two are the ones the success criteria ask for most directly.`,
    pairs: [
      {
        category: 'Comparison',
        title: 'Portugal took ports because it could not take provinces',
        body: `Portuguese naval artillery could defeat fleets and batter harbors, which is how Goa fell in 1510, Malacca in 1511 and Hormuz in 1515, but ashore the Portuguese faced Mughal, Safavid, Ottoman and Chinese states with populations and armies many times their own. So the Estado da India took the shape of the advantage: about fifty fortified points, no hinterland, and revenue from the cartaz, a pass sold to other people&rsquo;s ships. Spain, meeting a tribute empire whose subjects would fight for an invader, took the whole thing. The difference is in what each met, not in what each brought.`
      },
      {
        category: 'Causation',
        title: 'The conquests were won by Indigenous armies with Indigenous aims',
        body: `Cortes landed with about five hundred men and Pizarro with under two hundred, and neither number could have taken a state of millions. Tlaxcalan and other tributary forces made up the overwhelming majority of the army that besieged Tenochtitlan in 1521, fighting a war against the Mexica that predated the Spanish. In Peru, smallpox had already killed Huayna Capac and a succession war had just ended when Pizarro seized Atahualpa at Cajamarca in 1532. Steel, horses and interpreters were multipliers on a force that was mostly local, which is why the same expeditions accomplished nothing against the Mapuche or in the North American interior, where there was no centralized state to capture and no supply of allies.`
      },
      {
        category: 'Institutions',
        title: 'A charter that grants war-making turns a business into an empire',
        body: `The VOC charter of 1602 granted a monopoly east of the Cape and with it the powers to build fortresses, maintain armies, wage war, sign treaties with foreign rulers, appoint governors and coin money. Those are sovereign powers held by a body answering to shareholders, and they are what distinguishes the company model from the partnerships that had financed long-distance trade for centuries. Permanent transferable shares supplied the second half: a company that does not dissolve after each voyage can hold Batavia from 1619 and take Malacca in 1641. Raising money was not the innovation. Delegated sovereignty was.`
      },
      {
        category: 'Governance',
        title: 'Spain governed distance by making its officials watch each other',
        body: `A message from Madrid to Lima and back took most of a year, so the crown could not supervise the men it appointed. Its answer was overlapping jurisdiction: a viceroy standing in the king&rsquo;s person, an audiencia in the same territory that could report to Madrid over his head, limited terms, and a residencia reviewing his conduct when he left. The cost was constant jurisdictional conflict and the routine non-enforcement summed up as obedezco pero no cumplo. Compare it with Ottoman devshirme in Topic 3.2, which solved the same problem of untrustworthy officials by recruiting servants with no local ties at all, and the trade-off is visible: one design is cheaper, the other is what you use when your officials are six months away.`
      }
    ]
  }
};
