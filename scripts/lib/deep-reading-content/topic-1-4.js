'use strict';

/**
 * Topic 1.4, State Building in the Americas: the deep reading.
 *
 * Why this exists. The success criteria for this topic ask for evidence about
 * Maya city-states, the Mexica, the Inca, Chaco, Mesa Verde or Cahokia, for an
 * explanation of continuity, innovation, diversity or expansion, and, unusually,
 * for the AP skill of identifying the evidence a source uses to support an
 * argument. The First & 10 has room to name all six and to explain none of them,
 * and it has no room at all for the evidence question, which in this topic is
 * not an add-on: almost everything written about these societies was written
 * after they had been conquered, by the people who conquered them.
 *
 * The chapter is built around the one comparison the topic exists to teach. The
 * Mexica and the Inca ran empires of comparable size at the same moment and
 * extracted completely different things: the Mexica took goods from subject
 * peoples who otherwise governed themselves, and the Inca took labor from
 * subjects it reorganized, resettled and fed. Tribute versus labor is the
 * distinction, and a student who has it can answer almost anything this topic
 * asks.
 *
 * Two corrections carried deliberately, because both cost points every year:
 *
 *   1. The Maya did not disappear. The Classic-period collapse was southern,
 *      partial and centuries before this unit begins, and Maya city-states were
 *      operating throughout the period the unit covers.
 *   2. No writing, no wheeled transport and no draft animals are facts about
 *      constraints, not about sophistication. The Inca administered ten million
 *      people without any of the three, which is more impressive than doing it
 *      with them, not less.
 *
 * Section 05 is the sourcing section, and it is placed last on purpose: it is
 * far more useful once a student has met the claims it teaches them to weigh.
 */

module.exports = {
  topicKey: 't1-4',
  slug: 'topic-1-4-americas',
  sourceFile: 'deep-reading-topic-1-4-americas.html',
  lessonFile: 'lesson-1-4-americas.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 1.4: Tribute and Labor',
  eyebrow: 'Topic 1.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Tribute and <em>Labor</em>',
  deck: `Two empires, built at the same time on opposite ends of a hemisphere, neither one knowing the other existed. One taxed goods and left its subjects to govern themselves; the other taxed work and rebuilt the lives of everyone it absorbed. This chapter gives you the working parts of both, plus the city-states and the great towns that the survey never has room for, and finishes with the question this topic depends on: how do we know any of it?`,
  meta: ['Five sections', 'Two empires, three regions', 'Read alongside the First & 10'],
  footerNote: 'Topic 1.4 &nbsp;·&nbsp; Tribute and Labor &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 02 and 03, the Mexica and the Inca, are the heart of this chapter and the pair almost every question in this topic is built on. Read them together and in order; the second is written to be compared with the first. Section 05 is the sourcing section and it is worth your time even if you skip everything else, because it is the only place in this unit that shows you how the evidence for a whole hemisphere was assembled.`,
    steps: [
      `<b>01 The Maya:</b> what a city-state system is, and why "they disappeared" is wrong.`,
      `<b>02 The Mexica:</b> the tribute empire, and what indirect rule costs.`,
      `<b>03 The Inca:</b> the labor empire, and how a state without writing counted ten million people.`,
      `<b>04 North America:</b> Cahokia, Chaco and Mesa Verde, and what happened when the rain stopped.`,
      `<b>05 The evidence:</b> who wrote it down, when, and with what interest in the answer.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'maya',
      num: '01',
      accent: 'gold',
      name: 'The Maya City-States',
      navLabel: 'The Maya',
      dates: 'c. 250 to 1450 &nbsp;·&nbsp; Classic period through Mayapan',
      thesis: `The Maya were never an empire and never needed to be. They were dozens of independent kingdoms sharing a writing system, a calendar, a religion and a set of quarrels, which is a political form Europe would have recognized immediately.`,
      parts: [
        {
          heading: 'What a Maya state was',
          blocks: [
            { p: `Across the Yucatan peninsula and the highlands of Guatemala, the Maya built a landscape of independent city-states, each ruled by a hereditary king who was also the chief religious officiant, each with its own dynasty, monuments and territory. Tikal, Calakmul, Palenque and Copan competed, allied, intermarried and fought, and no one of them ever absorbed the rest. If that sounds familiar, it is the same political shape as the Greek poleis or the Italian city-states, and comparing them is a legitimate and impressive move in an essay.` },
            { p: `Maya intellectual achievements are usually listed and rarely explained. They developed the most fully deciphered writing system of the pre-Columbian Americas, a logosyllabic script capable of recording any sentence in the spoken language rather than only numbers and names, and one of several Mesoamerican scripts of which it is by far the best understood. They used a positional number system with a symbol for zero, independently of India. Their astronomers tracked the movements of Venus and predicted eclipses, and their calendar system counted days continuously from a fixed starting point far in the past, which is how a modern scholar can date a Maya monument to a particular day.` },
            { p: `Why does a city-state need that much astronomy? Because kingship was legitimated by the ability to schedule: to say when to plant, when to hold a ceremony, when a cycle would close. A king whose specialists could predict the sky was a king who could be believed about everything else, which makes Maya astronomy a political instrument as much as a scientific one.` }
          ]
        },
        {
          heading: 'The collapse that was not the end',
          blocks: [
            { p: `Between roughly <span class="num">750</span> and <span class="num">900</span>, the great cities of the southern lowlands were abandoned: monument-carving stopped, dynasties ended, populations dispersed. The best current explanation is a compound one, with a series of severe multi-decade droughts documented in lake sediment and cave deposits interacting with soil exhaustion, deforestation and intensifying warfare between kingdoms already living close to the limit of what their land could support.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Maya "disappeared" or "vanished mysteriously." Three corrections, all easy. First, the collapse was regional: the southern lowland cities emptied while the northern Yucatan cities, Chichen Itza above all, grew. Second, it happened three to five centuries before the period this unit covers, so it is background, not news. Third, and most important, millions of Maya people were alive in <span class="num">1450</span>, speaking Mayan languages in functioning city-states, and roughly six million of their descendants speak those languages today. What collapsed was a particular political order in a particular region.`
            } },
            { p: `In the period this unit actually covers, the northern Maya were organized around Mayapan, which from about <span class="num">1220</span> headed a league of allied and subordinate towns, reportedly by requiring the lords of member towns to reside in the capital, which is a hostage system dressed as an honor. That arrangement broke apart in revolt around <span class="num">1441</span>, and the Maya returned to competing small states, which is how the Spanish found them, and is part of why conquering the Maya took the Spanish decades longer than conquering the empires with a single capital to seize.` }
          ]
        }
      ],
      useThis: {
        tool: `Calendrical and astronomical authority. <em>The mechanism is that a king who can predict eclipses and schedule the agricultural and ceremonial year holds a monopoly on the calendar itself, which makes his religious claims testable and repeatedly confirmed, and makes the state's demands look like cooperation with the cosmos rather than extraction.</em>`,
        limit: `A city-state system with no unifying authority produced constant inter-kingdom warfare, and in the southern lowlands that warfare ran alongside drought and soil exhaustion until the political order stopped functioning.`,
        comparison: `Against <em>Europe</em> on fragmentation: both regions had many small competing states sharing one religion, one high culture and one written language, and in both cases the fragmentation drove innovation and made large-scale coordination impossible. Against the <em>Mexica</em>: same region, opposite solution, since the Mexica made the many-states problem into a revenue system instead of trying to end it.`
      },
      terms: [
        ['City-state', 'An independent state consisting of a city and its immediate territory, the Maya political form and the point of comparison with Greece and Italy.'],
        ['Maya glyphs', 'The most fully deciphered script of the pre-Columbian Americas, a logosyllabic system able to record any spoken sentence rather than only numbers and names.'],
        ['Long Count', 'The Maya calendar counting days continuously from a fixed origin, which allows a monument to be dated to an exact day.'],
        ['Mayapan', 'The northern Yucatan capital that headed a league of Maya towns from about 1220 until it broke apart in revolt around 1441.'],
        ['Classic collapse', 'The abandonment of the southern lowland Maya cities between roughly 750 and 900, driven by drought, soil exhaustion and warfare together.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'mexica',
      num: '02',
      accent: 'rust',
      name: 'The Mexica: The Tribute Empire',
      navLabel: 'The Mexica',
      dates: '1325 to 1521 &nbsp;·&nbsp; Tenochtitlan to the Triple Alliance',
      thesis: `The Mexica built the largest city in the Americas on an island in a lake, and then built an empire that conquered without governing: it left its subjects' rulers in place, took their goods, and never tried to make them Mexica.`,
      parts: [
        {
          heading: 'A city on a lake',
          blocks: [
            { p: `The Mexica, one of the last Nahuatl-speaking groups to enter the Valley of Mexico, founded <span class="kt">Tenochtitlan</span> in <span class="num">1325</span> on a marshy island in Lake Texcoco, on land nobody else wanted. Within two centuries it held on the order of two hundred thousand people, larger than any European city of its day, connected to the shore by causeways with removable bridges and supplied with fresh water by an aqueduct from the springs at Chapultepec.` },
            { p: `The island fed itself with <span class="kt">chinampas</span>, plots built up from lake mud and vegetation inside frames of woven stakes, anchored by willow trees, and separated by canals. Because the roots reached water permanently and the mud was renewed from the lake bottom, chinampas produced multiple harvests a year with no fallow period and no irrigation season to manage. It is one of the most productive agricultural systems ever devised, and it was invented for a site that had no farmland at all.` }
          ]
        },
        {
          heading: 'How the empire actually worked',
          blocks: [
            { p: `In <span class="num">1428</span> Tenochtitlan joined Texcoco and Tlacopan in the <span class="kt">Triple Alliance</span>, and the alliance began conquering outward. Here is the mechanism, and it is the single most important thing in this section. When the alliance defeated a city, it normally did not depose the local ruler, install governors, garrison the territory or impose Mexica law and religion. It fixed a <span class="kt">tribute</span> quota, appointed a tribute collector, and left. Treat that as the pattern rather than an invariable rule: strategic frontiers and cities that rebelled more than once could get a garrison, an imposed governor or a ruler of the empire&rsquo;s choosing. The subject city kept its own dynasty, gods, language and internal government, and delivered cloth, cacao, feathers, gold, maize and warriors on schedule.` },
            { p: `The advantages are obvious: it is cheap, it needs almost no administrators, and it can expand fast. The costs are equally obvious once you look for them. A subject city that keeps its own ruler, army and identity is a city that has retained everything it needs to revolt, and revolts had to be suppressed continually. The empire had no shared citizenship, no common law, no road system built for administration, and nothing that made a conquered Totonac or Tlaxcalan feel any loyalty whatsoever. It is a protection racket with a state religion, and when a Spanish force arrived in <span class="num">1519</span> it found tens of thousands of allies among peoples whose only grievance was Tenochtitlan.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the tribute rolls survive',
              html: `The <em>Codex Mendoza</em>, produced in the <span class="num">1540</span>s by Nahua artists at Spanish request, contains page after page of tribute lists: which province owed how many loads of cotton cloth, how many bins of maize, how many war costumes, how many jade beads, on what schedule, drawn in the pre-conquest pictorial convention with Spanish annotations added. It is a colonial document about a vanished system, made by people who remembered it for administrators who wanted to tax the same places. Read it as an accounting record and it is extraordinary evidence; read it as a neutral description of Mexica life and you are reading a conquest document.`
            } }
          ]
        },
        {
          heading: 'Sacrifice, and how to write about it',
          blocks: [
            { p: `Mexica state religion held that the sun required human hearts to continue rising, and that the debt was owed by the people who had been given the world. Sacrifice took place on the great temple in the center of the capital, publicly, at enormous scale on major occasions. Captives taken in war were the principal victims, and the empire fought scheduled ritual battles, usually called flower wars, against neighboring states, most persistently Tlaxcala, in which capture rather than killing was the objective.` },
            { p: `The way to handle this in an essay is to explain its function rather than to condemn or excuse it. Public sacrifice of captives from other cities did three things at once: it made the state's cosmological claim visible, it displayed the empire&rsquo;s military power to the delegations from subject cities who attended, and it turned military success directly into religious legitimacy, because only a warrior state can supply the sun. Notice, too, that a state which needs captives has a standing reason not to finish off its enemies. Tlaxcala was never conquered, sat surrounded by Mexica territory, and became the decisive Spanish ally.` },
            { p: `Handle the next step carefully, because it is a place where a good story has hardened into a fact. Some accounts, including ones written after the conquest, explain Tlaxcala's survival by saying the Mexica deliberately left it independent as a supply of captives. Other historians argue close to the opposite: that Tlaxcala was a formidable rival the Triple Alliance repeatedly attacked and could not take, in defensible highland country, and that the flower wars were a long campaign of attrition whose ritual framing also made an unfinished conquest respectable. Both readings fit the evidence, and the honest sentence holds them together: the flower wars supplied captives and training, Tlaxcala was never subdued, and how much the first fact explains the second is genuinely disputed. Writing it that way costs nothing and is a better piece of historical reasoning than either version alone.` },
            { p: `Society was ranked and, unusually, partly mobile. <span class="kt">Pipiltin</span> nobles held office and land; <span class="kt">macehualtin</span> commoners lived in <span class="kt">calpulli</span>, neighborhood units that held land collectively, ran schools and organized labor; below them were landless workers and enslaved people, whose status was not hereditary and could be ended by purchase or release. The <span class="kt">pochteca</span>, long-distance merchant guilds, held a peculiar position: wealthy and privileged, granted their own courts, and expected to gather intelligence about the places they traded in, which made them merchants and reconnaissance at once.` }
          ]
        }
      ],
      useThis: {
        tool: `Tribute through indirect rule. <em>The mechanism is that leaving a defeated city its ruler, gods and government costs the conqueror almost nothing in administrators or garrisons, so the empire can expand as fast as its army can march, and the entire imperial income arrives as goods delivered on a schedule by people who govern themselves.</em>`,
        limit: `The same design left every subject city with the ruler, army and identity needed to revolt, and produced no loyalty at all. In 1519 the tens of thousands of indigenous allies who joined the Spanish were the bill for that arrangement.`,
        comparison: `Against the <em>Inca</em>: two empires of comparable scale in the same century, one extracting goods and leaving societies intact, the other extracting labor and rebuilding them. Against <em>Rome</em>: Rome eventually made conquered people citizens, and the Mexica never offered membership of any kind, which is exactly the difference that decided who had allies in a crisis.`
      },
      terms: [
        ['Tenochtitlan', 'The Mexica capital founded in 1325 on an island in Lake Texcoco, holding perhaps two hundred thousand people and fed by chinampa agriculture.'],
        ['Chinampa', 'A raised plot built from lake mud inside a staked frame and anchored by willows, permanently watered from below and productive year round.'],
        ['Triple Alliance', 'The 1428 alliance of Tenochtitlan, Texcoco and Tlacopan that conquered outward and collected tribute across central Mexico.'],
        ['Tribute', 'Goods owed on a fixed schedule by a conquered city that otherwise kept its own ruler, laws and religion; the entire revenue system of the Mexica empire.'],
        ['Calpulli', 'The Mexica neighborhood unit holding land in common, running a school and organizing labor and military service for its members.'],
        ['Pochteca', 'The privileged long-distance merchant guilds, with their own courts, who traded beyond the empire and reported what they saw.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'inca',
      num: '03',
      accent: 'iron',
      name: 'The Inca: The Labor Empire',
      navLabel: 'The Inca',
      dates: 'c. 1438 to 1533 &nbsp;·&nbsp; Pachacuti to the Spanish arrival',
      thesis: `The Inca ran perhaps ten million people across two and a half thousand miles of the world's most vertical terrain with no writing, no coinage, comparatively little reliance on markets and no wheeled transport, and did it by taxing work instead of goods.`,
      parts: [
        {
          heading: 'The problem: an empire standing on its edge',
          blocks: [
            { p: `<span class="kt">Tawantinsuyu</span>, the land of four parts, ran along the Andes from modern Colombia to central Chile. Its territory included coastal desert, high plateau, cloud forest and mountains over twenty thousand feet, which means that two villages a day's walk apart could be growing entirely different crops in entirely different climates. Andean societies had long solved this with what anthropologists call the vertical archipelago: a single kinship group, an <span class="kt">ayllu</span>, would hold plots at several altitudes, so one household could eat maize from a warm valley, potatoes from the high ground and fish or salt from the coast.` },
            { p: `The Inca state, expanding rapidly from about <span class="num">1438</span> under Pachacuti and his successors, took that existing logic and ran it at imperial scale. And it did so with no writing system, no draft animal capable of pulling a plow or a cart, no wheeled vehicles in practical use, and no currency. Everything below follows from having to administer an empire under those constraints.` }
          ]
        },
        {
          heading: 'Mit\'a: taxing work instead of goods',
          blocks: [
            { p: `With no coinage and few markets, the Inca could not levy a money tax, and the vast distances made carrying bulk goods to a capital expensive. So the state taxed the one thing every household had, which was labor. Under the <span class="kt">mit\'a</span>, each community owed a rotating obligation of work: so many adults for so many days, on roads, terraces, canals, mines, state fields, textile production, litter-bearing or military service.` },
            { p: `Two features separate this from chattel slavery, and neither of them makes it voluntary. The obligation fell on the community, which decided internally who went and covered the absent worker's fields, and the state fed, housed and supplied the workers while they served, out of storehouses it had filled with earlier mit'a labor. The Inca also cast the whole arrangement in the language of Andean reciprocity, in which a superior who receives labor owes hospitality, feasting and provision in return. A state that provides the beer at the work party is claiming to be a very large relative rather than a tax collector, and the claim was believed enough to work for a century.` },
            { p: `What the labor built is the argument for how well it worked. Terraces that turned mountainsides into farmland and are still in use. Irrigation canals. State storehouses, the <span class="kt">qollqa</span>, holding food, cloth and equipment against famine, war and bad harvests. And roughly twenty-five thousand miles of <span class="kt">road</span>, with rest houses spaced a day apart and relay runners, the chaski, who carried messages along it at a speed that has been estimated at over a hundred and fifty miles a day.` }
          ]
        },
        {
          heading: 'Administration without writing',
          blocks: [
            { p: `The <span class="kt">khipu</span> is the instrument that makes this section worth reading. It is an assembly of knotted cords: a main cord with pendant cords hanging from it, knots tied at positions that encode a decimal place value, with color, ply direction and attachment point carrying further information. Inca administrators used khipu to record populations, tribute owed and delivered, storehouse contents and census categories, and specialists called khipukamayuq read them aloud to officials.` },
            { p: `Scholars can read the numerical khipu with confidence, because the decimal structure is unambiguous and some surviving khipu can be matched against Spanish colonial records of the same accounts. Whether khipu also encoded narrative, names or language remains genuinely unresolved, and honest writing about it says so. What is not in doubt is the administrative capacity: a state was counting ten million people, in decimal hierarchies of households, and moving supplies to where they were needed, on knotted string.` },
            { p: `The state also moved people. Under <span class="kt">mitma</span>, whole communities were relocated, a newly conquered and restive population sent to a settled region and loyal settlers moved into their place. It broke local resistance by removing it from the ground it was attached to, spread the Quechua language as an administrative medium, and planted reliable populations on frontiers. Compare that with the Mexica policy of leaving conquered peoples exactly where they were, and the two empires' opposite bets become very clear.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The Inca were not "communist," and the comparison, which appears in older books, does more harm than good. The system was steeply hierarchical: the Sapa Inca was worshipped as the son of the sun; a nobility monopolized office; conquered elites were incorporated below the Inca core; and chosen women were removed from their communities for state service. What is true, and worth saying precisely, is that the state provisioned its workers from public storehouses and took labor rather than produce, so ordinary people usually kept what they grew on their own land. That is a redistributive tax system, not an absence of hierarchy.`
            } },
            { p: `One structural feature explains why the empire expanded so relentlessly. Under <span class="kt">split inheritance</span>, a dead emperor's estates, servants and revenues stayed with his lineage, which maintained his mummified body, consulted it and hosted it at festivals. A new emperor inherited the office and none of the wealth. To have a court, an army and an income of his own, he had to conquer new territory.` },
            { p: `That is an influential interpretation rather than a documented policy, and saying so is worth marks. Historians proposed it to explain why an empire assembled itself in roughly a century, and it accounts elegantly for the relentlessness of the expansion and for the succession wars, since heirs with rival estates behind them have something concrete to fight over. It is also a model built to fit an outcome, and the sources do not record anyone stating the rule as a reason for a campaign. Use it as historians use it: as the strongest available explanation of a pattern, named as an explanation. A student who writes <em>one influential interpretation holds that split inheritance made expansion structurally necessary</em> is doing something better than reciting a cause, which is showing how a causal claim gets built.` }
          ]
        }
      ],
      useThis: {
        tool: `The mit'a labor tax. <em>The mechanism is that a state with no coinage and no bulk transport taxes the one universally available resource, adult work, levies it on the community rather than the individual, feeds the workers from storehouses earlier labor filled, and frames the whole thing as reciprocity, so that the tax arrives as a work party with an obligation attached rather than as a collector at the door.</em>`,
        limit: `The mitma resettlements, the removal of chosen women from their communities, and a nobility that monopolized office are the exclusion evidence, and on one influential reading split inheritance left each new ruler the choice of conquering or being poor.`,
        comparison: `Against the <em>Mexica</em>: goods versus labor, intact subject societies versus reorganized ones, no loyalty versus deep integration. Against <em>Song China</em>: both administered enormous populations at distance, one with examined officials and paper records, the other with khipu and rotating labor, which shows that bureaucratic capacity is not the same thing as literacy.`
      },
      terms: [
        ['Tawantinsuyu', 'The Inca name for their empire, the land of four parts, running some 2,500 miles along the Andes.'],
        ['Mit\'a', 'The rotating labor obligation owed by each community to the state, provisioned from state storehouses and framed as reciprocity.'],
        ['Khipu', 'Knotted cords encoding numbers by position and knot type, used to record census, tribute and storehouse data across the empire.'],
        ['Mitma', 'The forced resettlement of communities to break resistance, spread Quechua and secure frontiers.'],
        ['Ayllu', 'The Andean kinship group holding land collectively, often at several altitudes at once, and the unit on which the mit\'a was levied.'],
        ['Split inheritance', 'The rule by which a dead ruler&rsquo;s wealth stayed with his lineage, so each new ruler had to conquer new territory to fund his own court.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'north-america',
      num: '04',
      accent: 'oxide',
      name: 'North America: Cahokia, Chaco, Mesa Verde',
      navLabel: 'North America',
      dates: 'c. 850 to 1350 &nbsp;·&nbsp; Great houses, great mounds, great drought',
      thesis: `North America north of Mexico produced cities, monumental architecture, engineered roads and regional networks, and then largely dispersed them, and the reason is one of the best-documented climate stories in world history.`,
      parts: [
        {
          heading: 'Cahokia',
          blocks: [
            { p: `On the floodplain of the Mississippi near modern St. Louis, <span class="kt">Cahokia</span> reached its peak between roughly <span class="num">1050</span> and <span class="num">1200</span>. It held something on the order of ten to twenty thousand people, larger than London at the same date, in a planned settlement organized around a central plaza and more than a hundred earthen mounds. The largest, Monks Mound, has a base bigger than that of the Great Pyramid at Giza and was built basket-load by basket-load out of an estimated fifteen million baskets of earth, without draft animals or wheels.` },
            { p: `Its economy rested on maize, which had spread north from Mesoamerica and become a reliable staple in the region only a few centuries earlier, and its influence, visible in shared pottery, iconography and burial practice, extended across a large part of the interior of the continent. This is a chiefdom of considerable reach, and the mobilization of labor required for Monks Mound alone is evidence of a political authority able to command work from thousands of people over years.` },
            { p: `Cahokia was largely emptied by about <span class="num">1350</span>. The explanations under discussion are the familiar compound: deforestation of the uplands for fuel and construction, which worsened flooding on the floodplain; a run of poor harvests as climate shifted; and political strain visible in the enormous defensive palisade the city built and rebuilt around its center. The people did not vanish. They dispersed into the smaller Mississippian towns and, in time, into the nations that Europeans would meet there centuries later.` }
          ]
        },
        {
          heading: 'Chaco and Mesa Verde',
          blocks: [
            { p: `In the arid Four Corners region of the American Southwest, Ancestral Puebloan communities built <span class="kt">Chaco Canyon</span> into a ceremonial and economic center between about <span class="num">850</span> and <span class="num">1150</span>. Its great houses were multi-story masonry buildings of hundreds of rooms, precisely oriented to solar and lunar cycles, and connected to outlying communities by wide engineered roadways running for tens of miles across the desert in improbably straight lines. Timber for the roof beams was carried in from mountains fifty miles and more away. Turquoise, copper bells and macaw feathers found at the site show exchange reaching deep into Mesoamerica.` },
            { p: `Chaco declined in the twelfth century, and the population shifted to defensible locations, most famously the cliff dwellings at <span class="kt">Mesa Verde</span>, built into canyon alcoves and occupied from about <span class="num">1190</span>. Within a century those too were abandoned, and the Ancestral Puebloans moved south and east to the Rio Grande valley, where their descendants live in the Pueblo communities today.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the trees kept the record',
              html: `Every year a tree adds a growth ring, wide in a wet year and narrow in a dry one, and the pattern of wide and narrow rings is the same across a region. Overlapping the patterns from living trees, dead trees and construction timbers produces a continuous year-by-year record of rainfall reaching back centuries, and it dates the beam it is taken from to the year the tree was felled. That method, developed in the American Southwest in the early twentieth century, is why we can say that a severe drought gripped the region from <span class="num">1276</span> to <span class="num">1299</span>, and can name the last years in which construction timbers were cut at Mesa Verde. It is also the technique used on Southeast Asian cypress to date the droughts that undermined Angkor, which is how one method in one discipline ended up rewriting two chapters of this unit.`
            } },
            { p: `Two cautions belong with the drought story. It was not only drought: population growth had pushed farming onto marginal land, and the fortified positions of the late period point to conflict as conditions tightened. And these were not collapses in the sense of disappearance. Migration is what agricultural societies in marginal environments do when the environment turns, and moving several hundred miles to better-watered land is a successful response to a crisis, not a failure to survive one.` }
          ]
        }
      ],
      useThis: {
        tool: `Labor mobilization without draft animals. <em>The mechanism is visible in the object: Monks Mound is roughly fifteen million basket-loads of earth carried by hand, and the Chacoan roads and great houses required timber hauled fifty miles. Neither is possible without an authority able to command sustained work from thousands of people, which is what those monuments are evidence of.</em>`,
        limit: `Both regions depended on agriculture at the edge of what the rainfall allowed, and tree-ring records show exactly when that rainfall failed. The response was dispersal and migration, not extinction.`,
        comparison: `Against the <em>Maya</em>: two societies undone in part by multi-decade drought on land already farmed to its limit, with the same lesson about what a marginal environment does to a dense population. Against <em>Angkor</em>: the same tree-ring method dated both crises, which is a genuinely satisfying thing to point out in an essay about evidence.`
      },
      terms: [
        ['Cahokia', 'The Mississippian city near modern St. Louis, peaking around 1050 to 1200 with ten to twenty thousand people and over a hundred earthen mounds.'],
        ['Chaco Canyon', 'The Ancestral Puebloan center of great houses and engineered roads in the Southwest, flourishing from about 850 to 1150.'],
        ['Mesa Verde', 'The cliff dwellings occupied from about 1190 and abandoned by the end of the thirteenth century during a severe regional drought.'],
        ['Dendrochronology', 'Dating and climate reconstruction from tree rings, which fixes the Southwest droughts to the year and dates the timbers in the buildings.'],
        ['Mississippian', 'The maize-based mound-building societies of the North American interior, of which Cahokia was the largest center.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'evidence',
      num: '05',
      accent: 'gold',
      name: 'The Evidence, and Who Wrote It',
      navLabel: 'The evidence',
      dates: 'c. 1520 to today &nbsp;·&nbsp; Conquest accounts, codices, archaeology',
      thesis: `Almost everything written about these societies was written after they had been conquered, mostly by the conquerors or by people living under them. That does not make the evidence useless. It makes reading it a skill, which is exactly what this topic is asking you to demonstrate.`,
      parts: [
        {
          heading: 'What was destroyed, and what survived',
          blocks: [
            { p: `The Maya wrote books, on folded bark paper, and Spanish churchmen burned them as idolatry; a bishop in Yucatan staged a mass burning in <span class="num">1562</span> and recorded his reasons. Four Maya codices survive. The Mexica had libraries too, and the great majority went the same way. The Inca had no script at all, and the khipu that carried their records were collected and destroyed as instruments of a suppressed religion, with roughly a thousand surviving from an empire that must have used hundreds of thousands.` },
            { p: `What replaced them are colonial documents. Sahagun's great compilation, made in Mexico across the middle of the sixteenth century, was assembled by a Franciscan friar working with Nahua elders and Nahua artists and scribes, in Nahuatl and Spanish, in parallel columns. It is our richest source on Mexica religion, medicine, rhetoric and daily life, and it was made by a missionary in order to identify surviving indigenous belief and eradicate it. Both facts are true at once, and a student who can say so is doing exactly the analysis the AP skill asks for.` },
            { p: `In Peru, the two most-quoted accounts come from men with complicated positions. Garcilaso de la Vega was the son of a Spanish conquistador and an Inca noblewoman, wrote in Spain decades after leaving Peru, and presented the Inca past as ordered, benevolent and civilized, partly in order to argue for the dignity of his mother's people. Guaman Poma de Ayala, an Andean noble, spent years producing an illustrated letter of nearly twelve hundred pages to the king of Spain, cataloguing colonial abuses and arguing that Andean rule had been just. Neither is disinterested. Both are indispensable, and both are far better evidence about the world they lived in than about the century before it.` }
          ]
        },
        {
          heading: 'How to use a source with an interest',
          blocks: [
            { p: `The move that earns points is not to declare a source biased and stop. Every source has a position; the question is what that position makes it good for. A conqueror's account is unreliable about the virtue of the people he defeated and often very reliable about the size of the city he had to fight through, because exaggerating an enemy's cowardice and exaggerating an enemy's numbers cannot both flatter him. A colonial tribute roll is a poor guide to what conquered people felt and an excellent guide to what they were required to hand over, because the whole purpose of writing it was to get the amounts right.` },
            { p: `Archaeology is the check, and in this topic it does an unusual amount of work. Excavation at the Templo Mayor in Mexico City has confirmed the scale of Mexica ritual practice that written sources describe. Survey and excavation along the Inca road system have confirmed the storehouses and the way stations. Airborne laser scanning has revealed the density of Maya settlement under the forest canopy, and tree rings have supplied a year-by-year rainfall record no document could. When physical evidence and a written account agree, the account gets considerably more credible; when they disagree, you have found something worth writing about.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the glyphs were read only recently',
              html: `For most of the twentieth century, scholars believed Maya writing was symbolic rather than a record of speech, and that the inscriptions concerned astronomy and ritual rather than history. That view was wrong. Decipherment, advanced substantially by a Russian linguist working from a copy of a colonial-era alphabet in the <span class="num">1950</span>s and by an American scholar who showed in <span class="num">1960</span> that the inscriptions record the births, accessions and deaths of named rulers, turned the monuments into dynastic history. Maya kings can now be named, dated and followed. It is worth remembering that this is recent: what "we know" about the Americas has changed more in the last seventy years than what we know about almost any other region in this course.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Reading an interested source for what it is good for. <em>The mechanism is to ask what the author needed the document to accomplish, then separate the claims that serve that purpose from the details that were incidental to it. A tribute roll made for taxation is reliable about quantities; a missionary's ethnography made to identify surviving belief is reliable about practices he found and unreliable about what they meant to the people doing them.</em>`,
        limit: `The destruction is itself evidence. Four Maya codices, about a thousand khipu, and almost no pre-conquest Mexica books survive, so every silence in this topic should be read as a possible consequence of that, not as an absence of activity.`,
        comparison: `Against <em>Song China</em> or <em>Dar al-Islam</em>, where states wrote continuously about themselves in languages still read: the Americas are the region where the sources were made by the winners, which is why archaeology carries so much of the argument here and so little of it there.`
      },
      terms: [
        ['Codex', 'A pre-Columbian or early colonial book of folded bark paper or hide, of which very few survive from before the conquest.'],
        ['Florentine Codex', 'The mid-sixteenth-century compilation on Mexica life made by a Franciscan friar with Nahua elders, scribes and artists, in Nahuatl and Spanish.'],
        ['Guaman Poma', 'The Andean noble whose illustrated letter to the Spanish king catalogued colonial abuse and argued for the justice of Inca rule.'],
        ['Provenance', 'Who made a source, when, for whom and why; the questions that decide what a document can and cannot be used to prove.'],
        ['Corroboration', 'Checking a written claim against independent physical evidence, which in this topic usually means archaeology, and which is why excavation carries so much of the argument.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a complete comparison: a claim, the specific evidence, and the reason the difference existed. The reason is where the points are. These four cover most of what this topic can ask.`,
    pairs: [
      {
        category: 'State building',
        title: 'The Mexica taxed goods; the Inca taxed work',
        body: `The Triple Alliance conquered a city, fixed a tribute quota, appointed a collector and left the local ruler in place, so its income arrived as cloth, cacao and maize delivered on schedule by societies that continued to govern themselves. The Inca levied the mit'a on communities, fed the workers from state storehouses, resettled whole populations under mitma and spread Quechua as an administrative language. The difference exists because of what each state could physically move and measure: central Mexico is compact, densely populated and easy to march across, so goods could be carried to a capital, while the Andes are 2,500 miles of vertical terrain with no wheeled transport, where hauling bulk tribute is absurd and marching workers to the job is not.`
      },
      {
        category: 'Consequences',
        title: 'Indirect rule is cheap until the day you need loyalty',
        body: `Leaving conquered cities their rulers, gods and armies let the Mexica empire expand rapidly with almost no administrative apparatus, and it meant that Tlaxcala, a rival the empire had fought for generations and never subdued, was available as an ally when a Spanish force arrived. The Inca had reorganized, resettled and provisioned their subjects for a century, and even so they were conquered while fighting a war of succession that split the ruling family. The comparison to make is not that one system was better; it is that the Mexica bought speed at the price of loyalty, and the price came due exactly when the state faced something it had never faced before.`
      },
      {
        category: 'Innovation',
        title: 'Constraint produced invention, not backwardness',
        body: `No wheeled transport, no draft animal that could pull a plow, no iron, and in the Andes no writing. What those societies built anyway: chinampas that produced multiple harvests a year on a lake bed, terracing and freeze-drying that made high-altitude agriculture reliable, 25,000 miles of road with relay runners, a decimal accounting system on knotted cord that tracked ten million people, and a positional zero developed independently in Yucatan. The difference from Afro-Eurasia is not sophistication, it is the toolkit: the Americas had no large domesticable draft animals, and every institution above is an answer to that fact rather than evidence of a lesser civilization.`
      },
      {
        category: 'Using evidence',
        title: 'Say what a source was for before you say what it proves',
        body: `The Codex Mendoza's tribute lists were compiled so colonial administrators could tax the same provinces, which makes them strong evidence about quantities and schedules. The Florentine Codex was compiled by a friar to identify indigenous religious practice for eradication, which makes it strong on what was practiced and weak on what it meant to those practicing it. Garcilaso wrote in Spain, decades later, to argue for the dignity of his mother's people. In each case, naming the purpose and then drawing a narrow conclusion from it is worth more than either accepting the source whole or dismissing it as biased, and it is the exact skill this topic's success criteria name.`
      }
    ]
  }
};
