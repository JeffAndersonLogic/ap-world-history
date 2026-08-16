'use strict';

/**
 * Topic 4.5, Maritime Empires Maintained: the deep reading.
 *
 * Why this exists. The success criteria ask for mercantilism and the chartered
 * company as instruments of state competition, for the silver flow that linked
 * three continents, for the Atlantic system, and for the cultural synthesis it
 * produced, with the explicit rider that regional Afro-Eurasian markets kept
 * flourishing throughout.
 *
 * That rider is the part a survey cannot carry and the part that decides whether
 * a student writes this unit correctly. Sections 01 to 04 are the European
 * system. Section 05 is the fact that the European system's entire position in
 * Asia rested on having found a mine, because there was nothing else Europe
 * made that Asia wanted. Without it, "European dominance" walks into Unit 5
 * unchallenged and about a century and a half too early.
 *
 * Three things carried deliberately:
 *
 *   1. Mercantilism gets a mechanism, bullion plus the balance of trade plus
 *      captive markets, so a student can explain why a Navigation Act follows
 *      from a premise rather than listing it as a policy.
 *   2. The silver section keeps China at the center. The Ming tax shift is what
 *      set the price, and a chapter that has Spain discovering silver without
 *      the demand that made it worth mining has the causation backward.
 *   3. The triangular trade diagram is corrected rather than repeated, and the
 *      cultural synthesis section treats creolization as creation under
 *      constraint rather than as a blend, which is the version the criteria's
 *      word "synthesis" actually asks for.
 */

module.exports = {
  topicKey: 't4-5',
  slug: 'topic-4-5-maritime-empires-maintained',
  sourceFile: 'deep-reading-topic-4-5-maritime-empires-maintained.html',
  lessonFile: 'lesson-4-5-maritime-empires-maintained.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.5: What Held It Together',
  eyebrow: 'Topic 4.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'What Held It <em>Together</em>',
  deck: `Taking a port is one problem and keeping an empire running for two centuries is another. This chapter is the economics: the theory that told governments what an empire was for, the mountain of silver that paid for everything, the Atlantic system that moved people as cargo, the cultures made in its holds and its cane fields, and the awkward fact underneath it all, which is that Europe had almost nothing Asia wanted to buy.`,
  meta: ['Five sections', 'Mercantilism, silver, the Atlantic, synthesis, limits', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.5 &nbsp;·&nbsp; What Held It Together &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the theory and sections 02 and 03 are the two systems it produced. Section 04 is the human consequence the criteria name as synthesis. Section 05 is the corrective the rest of this unit needs, and it is the one most likely to lift an essay.`,
    steps: [
      `<b>01 Mercantilism:</b> what governments believed wealth was, and what followed from believing it.`,
      `<b>02 The silver chain:</b> Potosi, Manila, Canton, and why China set the price.`,
      `<b>03 The Atlantic system:</b> the real shape of it, and why the triangle diagram misleads.`,
      `<b>04 What was made in it:</b> creolization, and why that word means creation rather than blending.`,
      `<b>05 What Europe could not buy:</b> Asian markets, and the balance of payments nobody mentions.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'mercantilism',
      num: '01',
      accent: 'gold',
      name: 'The Theory That Told Governments What Colonies Were For',
      navLabel: 'Mercantilism',
      dates: 'c. 1550 to 1750 &nbsp;·&nbsp; Bullion, balance, monopoly',
      thesis: `<span class="kt">Mercantilism</span> starts from a single premise, that the world holds a fixed quantity of wealth, and almost every colonial policy of two centuries follows from it. Get the premise right and the policies stop being a list to memorize.`,
      parts: [
        {
          heading: 'The premise and what follows from it',
          blocks: [
            { p: `The premise: a nation's wealth is the gold and silver it holds, and the world's stock of both is fixed. If wealth is a fixed quantity, then trade is not a transaction where both sides gain. It is a contest, and every coin arriving in France is a coin that left England.` },
            { p: `Three policies follow directly, and they are worth deriving rather than listing. First, <b>run a favorable balance of trade</b>: export more than you import, because the difference arrives as bullion. Second, <b>protect home manufacturing</b> with tariffs and prohibitions, because importing finished goods sends bullion out and employs someone else's workers. Third, and this is the colonial one, <b>make the colonies supply what you would otherwise buy from a rival, and buy from you what they would otherwise make</b>.` },
            { p: `That third point defines a colony's economic job precisely. A colony ships raw materials to the mother country, sugar, tobacco, timber, furs, silver, and buys finished goods from it. It is prohibited from manufacturing what the mother country makes and from trading with anyone else. The English Navigation Acts, from <span class="num">1651</span>, required colonial trade to move in English ships with largely English crews and routed an enumerated list of colonial commodities, sugar and tobacco among them, through English ports before they could go on anywhere else; the Spanish system funneled all legal American trade through Seville and later Cadiz under the Casa de Contratacion, in escorted convoys; France under Colbert built the same structure with state-sponsored manufacture on top.` },
            { p: `Chartered companies fit the theory exactly. A monopoly granted to one national company means the profits of a route are captured by one nation rather than competed away, which is precisely what a mercantilist government wants. The VOC and the English East India Company of the Topic 4.4 chapter are mercantilism given a legal body.` }
          ]
        },
        {
          heading: 'Where the theory failed on its own terms',
          blocks: [
            { p: `Spain is the case that broke it, and the sequence is worth having. Spain acquired more bullion than any state in history and spent the seventeenth century going bankrupt repeatedly. The reason is that money is not wealth. Silver arriving in Seville chased goods Spain did not produce, so prices rose, Spanish manufactures became expensive relative to foreign ones, and Spaniards bought Dutch and English goods with the silver. It passed through Spain into the hands of the countries that made things, funding meanwhile the Habsburg wars that consumed it as fast as it landed.` },
            { p: `Enforcement failed too. A monopoly that sets prices above the market creates a smuggling industry as a matter of arithmetic, and by the eighteenth century a very large share of trade in the Spanish Caribbean and the English colonies was illegal. Dutch and English smugglers supplied Spanish American ports the convoy system could not serve.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat mercantilism as an early or crude version of capitalism. They rest on opposite premises. Mercantilism assumes a fixed stock of wealth, so one nation gains only as another loses, and the state must therefore direct trade. The argument Adam Smith made in <span class="num">1776</span> is that wealth is production rather than bullion, that the stock is not fixed, and that both parties to a voluntary exchange gain. That is not a refinement, it is a reversal, and Smith wrote it as an attack on exactly the system this section describes.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The captive colonial market. <em>The mechanism is that if wealth is a fixed stock of bullion, then buying from a rival is a loss, so a state legislates its colonies into supplying the raw materials it would otherwise import and buying the finished goods it makes, which keeps the bullion inside one national circuit and gives colonial manufacturing no legal room to develop.</em>`,
        limit: `Prices set above the market guarantee smuggling, and by the eighteenth century a large share of colonial trade was illegal, so the system described in law was never the system in operation.`,
        comparison: `Against <em>Ming and Qing policy</em> in Topic 3.2: China restricted foreign trade to controlled ports and licensed intermediaries for reasons of order and security rather than bullion accumulation, and ran a huge trade surplus without a mercantilist theory. Same instrument, monopoly through a single licensed channel, entirely different reasoning.`
      },
      terms: [
        ['Mercantilism', 'The doctrine that national wealth is a fixed stock of bullion, so trade is a contest the state must direct.'],
        ['Balance of trade', 'The difference between exports and imports, which a mercantilist state kept favorable so bullion flowed inward.'],
        ['Navigation Acts', 'English laws from 1651 requiring colonial trade in English ships and routing enumerated commodities through English ports.'],
        ['Bullion', 'Gold and silver held as coin or metal, treated under mercantilism as wealth itself rather than as a claim on goods.'],
        ['Smuggling', 'The predictable response to monopoly pricing, and by the eighteenth century a large fraction of actual colonial trade.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'silver',
      num: '02',
      accent: 'iron',
      name: 'The Chain That Ran From a Mountain to Canton',
      navLabel: 'Silver',
      dates: 'c. 1545 to 1800 &nbsp;·&nbsp; Potosi, Manila, China',
      thesis: `The single most consequential fact about the early modern world economy is that China decided to collect its taxes in silver at almost exactly the moment Spain found the largest silver deposit on earth. Everything global about this century runs through that coincidence.`,
      parts: [
        {
          heading: 'Where it came from and who dug it',
          blocks: [
            { p: `The silver mountain at <span class="kt">Potosi</span>, in what is now Bolivia, was opened in <span class="num">1545</span>, and Zacatecas in New Spain followed shortly after. Potosi at its height was among the largest cities in the world, higher than most mountain peaks in Europe, and produced a large share of the world's silver for a century.` },
            { p: `Two things made the output possible and both belong in an answer. The <b>mercury amalgamation process</b>, adopted from the <span class="num">1550</span>s, let refiners extract silver from low-grade ore, and the mercury came from Huancavelica, itself worked under lethal conditions. And the labor came from the <span class="kt">mita</span>, the Andean rotational draft described in the Topic 4.3 chapter, which the Spanish crown kept from the Inca system and stripped of its reciprocity: villages across a huge district were required to send a proportion of their men to Potosi, where they worked at altitude, in mercury vapor and rockfall, and where mortality was frightful.` },
            { p: `Write the mine and the labor system together. Potosi is not a natural windfall; it is a natural deposit made productive by a coercive institution and a poisonous chemical process. Be exact about the labor, because the easy version is wrong. Mitayos were paid a wage. It did not cover what a man had to spend on the journey, on food and on coca at Potosi prices, so households subsidized the draft and many went into debt to meet it, and communities paid others to go in their place. Potosi also ran on a large body of workers outside the mita, some of them skilled and comparatively well paid. Cheap silver came from compulsion, from wages set below the real cost of the work, and from a mercury process that shortened lives, rather than from labor that was simply unpaid.` }
          ]
        },
        {
          heading: 'Why China set the price',
          blocks: [
            { p: `Silver was worth roughly twice as much in China as in Europe, and the reason is a policy decision. Ming China had tried paper currency and abandoned it after inflation, and across the sixteenth century consolidated its taxes into the <b>Single Whip</b> reform, which required tax to be paid in silver. A state of well over a hundred million people obliging its households to obtain silver, in a country with limited domestic production, creates the largest demand for a single commodity anywhere on earth.` },
            { p: `That price gap is the engine. Silver flowed toward the highest price, which meant it flowed to China, and merchants who could move it there made a margin on the metal itself before touching the goods. Europeans did not create this demand and could not have; what they had was a mine, and access to a market that wanted what came out of it.` },
            { p: `The route the criteria name is the <span class="kt">Manila galleon</span>, running from <span class="num">1571</span>. Silver from Acapulco crossed the Pacific to Manila, where Chinese merchants, mostly from Fujian, exchanged it for silk, porcelain and other manufactures, which then sailed back to Acapulco and overland and on to Spain. This is the link that closes the circuit: with it, silver from a Bolivian mountain reaches a Chinese treasury, and the Topic 4.8 chapter can say the world economy was global rather than merely large.` },
            { p: `A second and larger stream went east: silver landed in Seville, moved through European trade and the Baltic and Levant routes, and reached Asia through the Indian Ocean, much of it in the hands of the Dutch and English companies. Estimates suggest that something like a third or more of all American silver ended in China. It funded Ming and then Qing fiscal operations, monetized the Chinese economy, and, when the flow was disrupted in the seventeenth century, contributed to the fiscal crisis in which the Ming fell.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the ships were counted',
              html: `The silver figures are unusually good for a pre-modern economy, and the reason is mercantilism. Spain taxed American silver at the <em>quinto real</em>, the royal fifth, so every registered ingot passed a counting house, and the Casa de Contratacion in Seville registered ships and cargoes for two centuries. Manila kept its own customs records. Historians reconcile these against mint output in China and against shipwreck cargoes, and the estimates converge. What they systematically miss is contraband, which everyone agrees was substantial, so the registered totals are floors rather than measurements. That is the usual shape of good economic evidence: precise where a bureaucracy had a reason to count, and blind exactly where people had a reason to hide.`
            } }
          ]
        },
        {
          heading: 'The price revolution',
          blocks: [
            { p: `Prices in Europe rose roughly threefold to fivefold across the sixteenth century, a slow inflation by modern standards and a bewildering one to people who had no concept for it. The contemporary explanation, offered by the French jurist Jean Bodin in <span class="num">1568</span>, was that more money chasing the same goods raises prices, which is essentially the modern account of monetary inflation and, remarkably, was worked out while it was happening.` },
            { p: `Historians now add population growth, which pushed food prices hardest, and debasement of coinage by governments. But silver is the factor that explains why it happened across the whole of Europe at once, including in countries with no American possessions.` },
            { p: `The distributional effect is the part worth writing. Wages lagged behind prices for most of the century, so wage laborers were poorer in real terms. Landlords on fixed rents lost, landlords who could raise rents gained. Merchants and producers holding goods gained. Debtors gained, because they repaid in cheaper money. An inflation is never neutral, and this one moved wealth toward those who owned things and away from those who were paid.` }
          ]
        }
      ],
      useThis: {
        tool: `A tax obligation as demand. <em>The mechanism is that when a state of a hundred million people requires its taxes in a specific metal it does not produce much of, every household must obtain that metal, which raises its price above the world level and pulls it in from wherever it is mined, so a fiscal reform in China determines what is worth digging out of a mountain in Bolivia.</em>`,
        limit: `The flow was not steady and the dependence cut both ways: interruptions in the seventeenth century contributed to a Chinese fiscal crisis, and Spain, which held the mine, ended poorer than the countries that sold it goods.`,
        comparison: `Against <em>the Song paper money</em> of Topic 1.1: both are states solving a currency problem at scale, and the Ming turn to silver is partly a retreat from the paper experiment after inflation. One state printed a currency and lost control of it; the other outsourced its currency to a metal it had to import, and lost control of that instead.`
      },
      terms: [
        ['Potosi', 'The Andean silver mountain opened in 1545, worked by mita labor and mercury amalgamation, and for a century the largest source on earth.'],
        ['Mita', 'The Andean rotational labor draft, retained by Spain without its reciprocal obligations to supply the mines.'],
        ['Single Whip', 'The Ming consolidation of taxes into a single silver payment, the demand that set the world silver price.'],
        ['Manila galleon', 'The Acapulco to Manila route from 1571, exchanging American silver for Chinese manufactures across the Pacific.'],
        ['Price revolution', 'The sustained inflation across sixteenth-century Europe, driven by silver and population, which cut real wages and favored those holding goods and land.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'atlantic',
      num: '03',
      accent: 'rust',
      name: 'The Atlantic System',
      navLabel: 'The Atlantic',
      dates: 'c. 1550 to 1800 &nbsp;·&nbsp; Sugar, ships, people as cargo',
      thesis: `The Atlantic economy was built around a small number of crops that could not be grown in Europe and could be sold there at enormous margins, and around a labor supply that had to be bought because the previous one had died. The diagram of a neat triangle hides more than it shows.`,
      parts: [
        {
          heading: 'What actually moved',
          blocks: [
            { p: `The textbook triangle runs manufactured goods from Europe to Africa, enslaved people from Africa to the Americas, and sugar and tobacco from the Americas to Europe. Each leg is real, and the diagram is still wrong in three ways worth knowing.` },
            { p: `<b>Most ships did not sail a triangle.</b> Far more Atlantic voyages were direct round trips, Europe to the Caribbean and back, or the enormous Brazil trade with Africa that never touched Europe at all. <b>The largest destination was not North America.</b> Roughly forty percent of enslaved Africans landed in Brazil and most of the rest in the Caribbean; the mainland British colonies received a small share of the total, on the order of four percent, which sits awkwardly against how the trade is usually taught in the United States. <b>And a great deal of the trade was intra-American</b>: New England provisions and timber to the sugar islands, Caribbean molasses to New England distilleries, and the coastwise and inter-island traffic that kept the plantations fed.` },
            { p: `The reason sugar dominates is agronomic and industrial at once. Cane must be crushed and boiled within hours of cutting or the sugar is lost, so a plantation is a factory as well as a farm, running a mill and boiling house on a schedule that does not stop during harvest. That combination, described in the Topic 2.5 and 4.3 chapters, is what made the labor demand so intense and the work so lethal.` }
          ]
        },
        {
          heading: 'The people, and the numbers',
          blocks: [
            { p: `Roughly twelve million Africans were embarked across nearly four centuries and roughly ten and a half million survived the <span class="kt">Middle Passage</span>. The trade's peak was the eighteenth century, not the sixteenth, which matters for chronology: this system was expanding, not winding down, through the period this unit covers.` },
            { p: `The African side was not passive supply. African states and merchants controlled the coast and the interior routes, sold captives taken in war and through existing systems of servitude, set terms, levied duties and refused sales. Dahomey, Asante and the Kongo kingdom among others built power partly on the trade, and European traders operated mostly from coastal forts on terms Africans set, because they could not survive inland: as the Topic 4.3 chapter notes, malaria and yellow fever killed Europeans in West Africa at rates comparable to what smallpox did in the Americas.` },
            { p: `The consequences on the African side were severe and uneven. Regions supplying captives lost people in their most productive years, warfare intensified where it fed the trade, and firearms imports raised its lethality, while states positioned as intermediaries grew richer and stronger. Do not flatten this into either a story of European agents acting alone or one of African rulers acting freely; it was a market in human beings in which Africans held real bargaining power over price and terms and no power at all over whether such a market should exist.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the ledgers of the trade itself',
              html: `The figures come from the Trans-Atlantic Slave Trade Database, which assembles records of roughly thirty-six thousand voyages from shipping registers, port records, insurance documents, company accounts and newspapers across several countries. It exists because the trade was legal, taxed and insured, so its participants kept careful records of embarkations, landings and deaths for commercial reasons. There is something worth sitting with in that: what allows historians to count these people now is the paperwork of the enterprise that made them cargo. The database also shows its own gaps and gives ranges rather than false certainty, which is why the standard figures are stated as approximations.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The plantation as a factory. <em>The mechanism is that cane loses its sugar within hours of cutting, so the mill and boiling house must run continuously through harvest, which ties field labor to an industrial schedule, makes the operation viable only at scale with heavy capital, and produces a demand for coerced labor that no free market at colonial wages could have met.</em>`,
        limit: `Sugar is the extreme case. Tobacco, rice and later cotton had different labor rhythms and different demographic outcomes, so do not generalize the Caribbean death rate to every American slave society.`,
        comparison: `Against the <em>Indian Ocean</em> slave trade in Topic 2.4: enslavement in the Islamic world was large, long-running and often domestic, military or administrative, with paths to manumission and status, while the Atlantic system was overwhelmingly agricultural, racialized and heritable. Both are slavery; only one produced a permanent hereditary caste tied to ancestry.`
      },
      terms: [
        ['Middle Passage', 'The Atlantic crossing, on which roughly one and a half million of about twelve million embarked Africans died.'],
        ['Plantation complex', 'The linked system of monoculture, mill, capital and coerced labor developed in the Mediterranean and Atlantic islands before 1492.'],
        ['Triangular trade', 'The three-legged diagram of Atlantic commerce, useful as a summary and misleading about routes, volumes and destinations.'],
        ['Asiento', 'The contract granting a right to supply enslaved people to Spanish America, a prize fought over between European states.'],
        ['Coastal fort', 'The European trading station on the African shore, the limit of European reach in a region whose diseases killed them inland.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'synthesis',
      num: '04',
      accent: 'oxide',
      name: 'What Was Made Inside It',
      navLabel: 'Cultural synthesis',
      dates: 'c. 1550 to 1800 &nbsp;·&nbsp; Creolization',
      thesis: `The Atlantic system threw together people from West and Central Africa, Indigenous America and Europe under conditions nobody chose, and what came out was not a mixture of three things. It was new things, made deliberately, by people using what they were allowed to keep.`,
      parts: [
        {
          heading: 'Creolization is a verb',
          blocks: [
            { p: `<span class="kt">Creolization</span> names the process by which people from different origins, forced into contact, generate new languages, religions, musical forms and foodways that belong to none of the parent traditions. The word is worth using precisely, because "blending" suggests something passive and average, and what actually happens is invention under constraint.` },
            { p: `Language is the clearest case because linguists can watch it happen. A <b>pidgin</b> is a simplified contact language with no native speakers, developed by adults who need to communicate and share no tongue. When children grow up hearing a pidgin, they do something remarkable: they systematize it, supplying a full grammar it did not have, and it becomes a <b>creole</b>, a complete natural language. Haitian Creole, Papiamento, Jamaican Patois and the Gullah of the Carolina and Georgia coast are real languages with regular grammar, not broken versions of European ones. The vocabulary is largely European; a great deal of the sound system and structure is African.` },
            { p: `That pattern, European surface and African structure, recurs across the culture, and it is the sentence to write.` }
          ]
        },
        {
          heading: 'Religion, and why the saints',
          blocks: [
            { p: `Haitian <b>Vodou</b>, Cuban <b>Santeria</b> and Brazilian <b>Candomble</b> are the standard examples and they share a mechanism. Enslaved people, largely Yoruba, Fon and Kongolese in origin, were required to be baptized and to practice Catholicism, and were punished for African religious practice. The response was to identify African deities with Catholic saints who shared their attributes: to an overseer it looked like devotion to Saint Barbara, and to the practitioner it was Chango.` },
            { p: `Two things must be said about this. The disguise was real and was a strategy of survival. But calling these religions merely a mask on African belief underrates them: they are coherent systems in their own right, with their own theology, ritual calendars and priesthoods, in which Catholic elements were genuinely incorporated rather than only borrowed as cover. And Kongolese arrivals in particular were often already Catholic, since the kingdom of Kongo had adopted Christianity in the late fifteenth century, so some of what looks like syncretism in the Americas was an African Christianity arriving intact.` },
            { p: `The same process runs through music and food. Drum-based polyrhythm, call and response, and the banjo's African ancestry feed into everything from Brazilian samba to Cuban son to the blues. Rice cultivation in the Carolina Lowcountry drew directly on West African expertise, which is why planters paid a premium for captives from the rice-growing regions, and dishes across the Atlantic world combine African technique, American ingredients and European names.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that enslaved Africans "lost their culture" and later "mixed" with Europeans. Both halves are wrong. Enslavers deliberately separated people who shared a language, suppressed religious practice and renamed individuals, so the loss was inflicted rather than incidental. And what people built afterward was not a passive average of what remained: languages with new grammars, religions with new theologies, and musical forms that shaped the entire hemisphere. Cultural creation under conditions designed to prevent it is a form of resistance, and it belongs in the same answer as the revolts in Topic 4.6.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Creolization. <em>The mechanism is that people forced together with no shared language or permitted religion build new ones out of the fragments available, and because the dominant group controls the public vocabulary while the subordinated group is far larger and holds the domestic and ritual space, the result carries European surface forms over African structure, which is why a creole language has European words and African grammar.</em>`,
        limit: `The process was not symmetrical and was not chosen. It happened under prohibition, and treating it as cheerful multicultural blending erases the conditions that made it necessary.`,
        comparison: `Against <em>Islamic conversion</em> along the Indian Ocean in Topic 2.4: there too a religion arrived and merged with local practice, but conversion there was largely voluntary and driven by commercial advantage and Sufi accommodation, and the resulting syntheses were public. In the Atlantic the synthesis was made under prohibition and had to be hidden, which is why one produced open regional traditions and the other produced a religion that looked from outside like something else.`
      },
      terms: [
        ['Creolization', 'The creation of new languages, religions and cultural forms by people of different origins forced into sustained contact.'],
        ['Pidgin', 'A simplified contact language with no native speakers, which becomes a full creole when children acquire it as a first language.'],
        ['Syncretism', 'The incorporation of elements from one religious tradition into another, as when African deities were identified with Catholic saints.'],
        ['Candomble', 'The Brazilian religion of largely Yoruba origin, a coherent system rather than a disguise on Catholicism.'],
        ['Maroon', 'A person who escaped enslavement and lived in an independent community, the subject of Topic 4.6 and a further form of what people built.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'limits',
      num: '05',
      accent: 'gold',
      name: 'What Europe Could Not Buy Its Way Into',
      navLabel: 'The limits',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Asian markets',
      thesis: `For the whole of this unit, Europe ran a trade deficit with Asia and paid it in silver, because there was almost nothing European workshops made that Asian buyers wanted. Hold onto that and the phrase "European dominance" acquires a date, and the date is not in Unit 4.`,
      parts: [
        {
          heading: 'The balance of payments nobody puts on the map',
          blocks: [
            { p: `Ask what a Dutch or English ship carried <em>to</em> Asia and the answer is uncomfortable for the standard narrative: some woolens, which nobody in the tropics needed, some metals, and silver. Overwhelmingly silver. The companies of Topic 4.4 were, in commercial terms, currency exporters buying Asian manufactures.` },
            { p: `The reason is that Asia made better goods. Indian cotton textiles were finer, better dyed and cheaper than anything Europe could weave, so much so that English wool interests successfully lobbied for the Calico Acts to ban imports and protect domestic producers, which is what protectionism looks like when you are the less advanced manufacturer. Chinese porcelain and silk had no European equal; European potters spent a century trying to reverse-engineer porcelain and did not succeed until Meissen in the early eighteenth century.` },
            { p: `So the position was this: Europeans could out-shoot Asian fleets at sea, and could not out-produce Asian workshops on land. The Topic 4.1 chapter explains the first half. This section is the second, and both are needed to describe the period accurately.` }
          ]
        },
        {
          heading: 'The old system, still running',
          blocks: [
            { p: `The success criteria ask specifically that regional Afro-Eurasian markets kept flourishing, and the evidence is substantial. Gujarati, Tamil, Armenian, Arab, Malay and Chinese merchant networks continued to carry the majority of Indian Ocean trade, in shipping the Europeans never displaced. The Mughal economy was among the largest in the world and its textile exports grew across this period, with European companies as customers rather than as managers. The Qing presided over an enormous internal market and a huge trade surplus. Ottoman routes through the Red Sea and the Gulf revived after the Portuguese failed to close them, and the Hajj, the caravan trade and the Islamic commercial networks of Unit 2 continued more or less as before.` },
            { p: `Where Europeans held territory in Asia before <span class="num">1750</span>, it was mostly islands and enclaves: Java and the spice islands, Manila, Goa, a handful of coastal factories. The great land empires of Unit 3 were not conquered and in most cases were not seriously threatened in this period.` },
            { p: `The turn comes later, and knowing where the line is protects an essay. Plassey in <span class="num">1757</span> begins East India Company territorial rule in Bengal, and industrialization from the later eighteenth century is what finally lets European producers undersell Indian weavers. Both belong to Unit 5. In Unit 4 the correct description of Europeans in Asia is armed, well-organized, locally powerful and commercially dependent.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The most common failure in this unit is writing 1500 to 1750 as the age of European dominance and then reusing the phrase for Unit 5, so that nothing appears to change. In this period Europeans dominated <b>ocean routes and the Americas</b>, which is a real and enormous thing, while remaining minor customers of Asian economies they could not match in production. Name the two spheres separately and the change in Unit 5 becomes visible: it is the moment the second sphere flips, and it is driven by territorial revenue in Bengal and by industrial production, not by ships.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Silver as a substitute for competitiveness. <em>The mechanism is that a region which cannot make goods another region wants can still trade with it if it controls a money commodity that region needs, so American silver let Europe buy Asian textiles and porcelain for two centuries without ever developing a manufacture Asia would import, which means the flow of silver is a measure of European weakness in production rather than of strength.</em>`,
        limit: `It was still a position of considerable power at sea and total power in the Americas, so do not overcorrect into treating Europeans in Asia as insignificant. They shaped routes, prices and politics without dominating production.`,
        comparison: `Against <em>Rome and the Indian Ocean</em> in Topic 2.3: Roman writers complained about bullion draining east to pay for silk and spices in almost the same terms, and for the same reason. The structural relationship between a European economy and an Asian one had not changed in fifteen hundred years, which is the strongest continuity argument available in this unit.`
      },
      terms: [
        ['Trade deficit', 'Importing more value than you export, settled in this period by shipping silver east.'],
        ['Calico Acts', 'English laws restricting Indian cotton imports, protectionism by the less advanced manufacturer.'],
        ['Merchant diaspora', 'The Gujarati, Armenian, Arab, Tamil and Chinese networks that continued to carry most Indian Ocean trade.'],
        ['Enclave', 'A coastal holding without a hinterland, the usual form of European territory in Asia before 1750.'],
        ['Plassey', 'The 1757 battle that began East India Company territorial rule in Bengal, and the beginning of the change this section says had not yet happened.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation or comparison: the claim, the specific evidence, and the reason. The last one is the correction that separates a good Unit 4 essay from an average one.`,
    pairs: [
      {
        category: 'Causation',
        title: 'A Chinese tax reform decided what was worth mining in Bolivia',
        body: `Ming China abandoned paper currency after inflation and consolidated its taxes into a single silver payment, obliging well over a hundred million people to obtain a metal China produced little of. That set the price of silver in China at roughly twice the European level. Spain opened Potosi in 1545 and worked it with mita labor and mercury amalgamation, and the Manila galleon from 1571 carried Acapulco silver across the Pacific to Fujianese merchants in exchange for silk and porcelain. Something like a third or more of all American silver ended in China. The demand came first and the supply followed it, which is the direction of causation most answers get backward.`
      },
      {
        category: 'Comparison',
        title: 'Mercantilism and capitalism start from opposite premises',
        body: `Mercantilism assumes a fixed world stock of bullion, so a gain for France is a loss for England and the state must direct trade: hence favorable balances, protective tariffs, chartered monopolies, and Navigation Acts requiring colonial trade in English ships and routing enumerated commodities through English ports. Adam Smith argued in 1776 that wealth is production rather than bullion, that the stock is not fixed, and that both parties to a voluntary exchange gain. That is a reversal of the premise, not a refinement of the policy, and Spain is the case that exposed it: more bullion than any state in history, repeated bankruptcies, and the silver passing through to the countries that actually made things.`
      },
      {
        category: 'Agency',
        title: 'Creole languages have European words and African grammar',
        body: `Enslavers deliberately separated people who shared a language, suppressed religious practice and renamed individuals, so what people built afterward was built under prohibition. A pidgin with no native speakers became a full creole when children acquired it and supplied a grammar, and Haitian Creole, Papiamento and Gullah carry largely European vocabulary over sound systems and structures that are substantially African. The same asymmetry runs through Vodou, Santeria and Candomble, where African deities were identified with Catholic saints whose attributes matched. That is creation under constraint rather than blending, and it belongs in the same answer as the revolts of Topic 4.6.`
      },
      {
        category: 'Continuity',
        title: 'Europe paid for Asian goods in silver because it could not make anything Asia wanted',
        body: `Dutch and English ships sailed east carrying woolens nobody in the tropics needed, some metals, and overwhelmingly silver. Indian cotton was finer and cheaper than English weaving, so much so that England banned its import under the Calico Acts to protect domestic producers, and Europe could not reproduce Chinese porcelain until Meissen in the early eighteenth century. Meanwhile Gujarati, Arab, Armenian, Tamil and Chinese networks carried most Indian Ocean trade throughout. In 1500 to 1750 Europeans dominated ocean routes and the Americas while remaining minor customers of economies they could not match in production; Plassey in 1757 and industrialization are what change the second half, and both belong to Unit 5.`
      }
    ]
  }
};
