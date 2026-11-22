'use strict';

/**
 * Unit 4 by region: Sub-Saharan Africa.
 *
 * One continuous story of Africa south of the Sahara from c. 1450 to c. 1750:
 * Portuguese state-backed voyages down the coast and the trading posts they built
 * (Elmina), Kongo under Afonso I, slavery in its older African forms beside the
 * growing Atlantic trade, what that trade did to the people who stayed (the
 * demographic and gender changes of KC-4.2.III.C), the rivalries and resistance of
 * c. 1590 to 1750 (Morocco and Songhai, Njinga, Asante, Oman on the Swahili coast),
 * and the crops and cultures that crossed the Atlantic both ways. The Key Concepts
 * that drive it are KC-4.3.II.A.i and ii, KC-4.2.II.B and C, KC-4.2.III.C,
 * KC-4.1.IV.D.i and ii, KC-4.1.V.B to D, KC-4.3.III.ii and iii and KC-4.3.II.A.iii.
 * Two halves are held together on purpose: African states had real power in the
 * trade, and some rulers sold captives into it; the trade's toll was severe.
 * Deliberately left out: the Middle Passage beyond a sentence and life on arrival
 * (the Americas chapter tells it); KC-4.1.II on European ship and navigation
 * technology (the Europe chapter's); and states the CED does not name for this unit
 * (Ethiopia, Benin, Oyo, Dahomey, the Zambezi prazos), which would pad the chapter
 * with history the CED does not require.
 *
 * Plain-language and accuracy pass (2026-11-21), the East Asia method: one idea per
 * sentence (story prose: average 20.7 words to 11.4, sentences over 25 words 27 to 0),
 * and the College Board's own words moved out of the story into one "What the College
 * Board says" box per section, quoted word for word from
 * scripts/lib/ced-source/unit-4.js, with illustrative examples labelled as the College
 * Board's examples (Morocco and Songhai, Ana Nzinga, Swahili Arabs and Omanis, okra and
 * rice). In the same edit, the five-persona findings of 2026-11-17
 * (docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md): Songhai now makes its own choices at and
 * after Tondibi (Askia Ishaq II's retreat and offer of tribute, al-Mansur's refusal, the
 * Songhai who fought on from Dendi under Askia Nuh), checked against Gomez, African
 * Dominion (2018), and Levtzion in the Cambridge History of Africa, vol. 4; the Swahili
 * towns that asked Oman for help are named (Muscat 1650, Fort Jesus 1698 after a siege
 * begun 1696, as the Topic 4.4 ledger and the Middle East chapter have them); household
 * slavery is narrowed in plain words (not gentle, varied, hereditary in some places,
 * Songhai's rulers worked captives on large farms, enslaved people could be sold);
 * Madeira and then Sao Tome are told as earlier sugar islands, as Topic 4.3 tells them,
 * not as the place the plantation was invented; Portugal's motive is the shared account
 * (gold, cutting out the spice middlemen, the crusading inheritance of Ceuta, 1415).
 * Topic 4.8 added to `topics` for KC-4.2.II. The chapter is about the same length as
 * before (about 3,150 words rendered): the new Songhai and Oman material and the boxes
 * offset the cuts. Secondary details cut: Bartolomeu Dias (1488), the Caribbean
 * out-producing Brazil "by about 1700", the Maldive origin of cowries, England's Royal
 * African Company (1672), the Arabic words in Swahili, and the Portuguese sackings of
 * Mombasa (1505 and 1528).
 *
 * Second pass (2026-11-21), the addendum rules of the Unit 5 baseline panel: every
 * "What the College Board says" box now opens with a plain "In short:" sentence, then
 * quotes each Key Concept sentence whole (KC-4.1.III.A, KC-4.3.II.C, KC-4.3.II.A.ii and
 * iii, KC-4.1.V.A to D and KC-4.1.VI were fragments before; KC-4.2.II is now its whole
 * second sentence; KC-4.1.IV and KC-4.1.IV.D.ii are cut visibly with " ... ", the second
 * where the CED prints a dash), and gives each optional example its own paragraph
 * headed "An optional College Board example:". Added `inShort` (five sentences). Every
 * definition set between commas is now in parentheses or its own sentence (middlemen,
 * Ceuta, Arguin, sultan, tribute, guerrilla war, siege, cassava, maize, polygyny, the
 * Middle Passage, syncretic), idioms are gone ("took a cut", "set terms", "rose on gold
 * and guns", "turned against"), topic links left the story for the boxes, and each
 * cross-region reference is a phrase ("The Middle East chapter tells Morocco's side").
 * Closing cards are now claim plus dated evidence, each fact on its own category's card
 * (Henrique's bishopric moved to Religious, Tondibi to Technological only). Story prose:
 * average 11.4 words to 9.8, none over 23, FK grade 6.7 to 6.1, 1,839 to 1,858 words.
 * Visible chapter (box quotations folded) 3,167 to about 2,990; with the folded
 * quotations, about 3,530. Cut as secondary: the Portuguese name São Jorge da Mina, gold
 * bought at Arguin, the Senegal coast purchases of the 1450s, the Dutch Cape station
 * (1652), and the Swahili towns' help to Portugal at Mombasa (1728 to 1729).
 *
 * Review pass 1 (2026-11-22, ledger D4 to D9, G7): da Gama rounded the Cape late in 1497 and
 * reached Malindi in April 1498; the Moroccan army left late in 1590, fought in March 1591, and
 * "many" of its men carried firearms; Hispaniola's sugar mills (from the late 1510s) come before
 * Brazil, and free settlers worked Madeira's cane beside the enslaved; KC-4.1.IV.D.ii is quoted
 * whole with the CED's own dash; KC-4.1.IV dropped (the chapter never teaches the silver flow;
 * five other chapters claim it); KC-4.2 is now quoted in section 2's box, with one added sentence
 * on Indian weavers making cloth for sale in Africa (manufacturing), beside the labor, family and
 * environmental changes the chapter already teaches.
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-sub-saharan-africa',
  slug: 'region-4-sub-saharan-africa',
  unit: '4',
  region: 'Sub-Saharan Africa',
  titleHtml: 'Sub-Saharan <em>Africa</em>',
  deck: `From 1450 to 1750, most of Africa south of the Sahara stayed under African rulers. The big change came by sea. European ships tied Africa's Atlantic coast to a new ocean trade. It made some African states stronger, and it carried millions of Africans into slavery in the Americas. On the east coast, Portugal forced its way into the old Indian Ocean trade of the Swahili towns.`,
  inShort: [
    `Portugal's rulers paid for voyages down Africa's coast and built forts to trade for gold and captives.`,
    `Kongo and other strong African states traded with Portugal, and Portugal could not rule them.`,
    `Plantations in the Americas made the Atlantic slave trade grow, and it changed African families.`,
    `States fought over trade: Morocco beat Songhai, Njinga resisted Portugal, Asante rose, and Oman drove Portugal from Mombasa.`,
    `American crops fed Africans, and Africans carried foods and faiths that mixed with others in the Americas.`
  ],
  topics: ['4.2', '4.3', '4.4', '4.5', '4.6', '4.8'],
  ced: [
    'KC-4.1.III',
    'KC-4.1.III.A',
    'KC-4.3.II.A.i',
    'KC-4.3.II.A.ii',
    'KC-4.2.II.B',
    'KC-4.2.II',
    'KC-4.2.II.C',
    'KC-4.1.IV.D.i',
    'KC-4.2.III.C',
    'KC-4.2',
    'KC-4.3.III.ii',
    'KC-4.3.III.iii',
    'KC-4.3.II.C',
    'KC-4.3.II.A.iii',
    'KC-4.1.V.A',
    'KC-4.1.V.B',
    'KC-4.1.V.C',
    'KC-4.1.V.D',
    'KC-4.1.IV.D.ii',
    'KC-4.1.VI'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'coast',
      num: '01',
      accent: 'gold',
      name: 'Gold, Forts and a Christian King',
      navLabel: 'Forts and Kongo',
      dates: 'c. 1440 to 1550 &nbsp;·&nbsp; Portuguese voyages, Elmina, Kongo',
      thesis: `Portugal's rulers paid for voyages down the African coast. The African states there were strong, so Portugal built forts on the shore and traded with kings.`,
      parts: [
        {
          heading: 'Why Portugal sailed south',
          blocks: [
            { p: `For centuries, West African gold had crossed the Sahara by camel. Portugal's rulers wanted to reach that gold by sea. Later they also wanted Asia's spices. Spices passed through a long chain of middlemen (traders who buy goods and sell them on). Each one raised the price. Ships that sailed straight to Asia could skip the middlemen.` },
            { p: `Religion was another reason. In <span class="num">1415</span> Portugal captured <b>Ceuta</b> (a Muslim port in North Africa). That attack carried on the long wars of Iberia's Christian kingdoms against Muslim powers. <a href="#r4-europe-edge">The Europe chapter</a> tells that story.` },
            { p: `So Prince Henry and other royals paid for voyages down the coast. Sometimes they gave merchants the right to make them instead. This was <span class="kt">state-supported exploration</span>: voyages that a ruler paid for or allowed. Light ships called caravels carried each voyage farther. So did sailors' growing knowledge of Atlantic winds.` },
            { p: `The trade in people began early. In the 1440s, Portuguese crews raided the Saharan coast for captives. That was the beginning of the Atlantic slave trade. From the late 1440s they also bought captives at Arguin (an island off that coast).` },
            { p: `In <span class="num">1482</span> Portugal built a fortress on the Gold Coast to buy gold. It is known as <b>Elmina</b>. Late in <span class="num">1497</span> Vasco da Gama sailed around the southern tip of Africa. In April <span class="num">1498</span> he reached the Swahili town of <b>Malindi</b> on the east coast. There he hired a pilot who knew the way to India.` }
          ]
        },
        {
          heading: 'Why forts and not colonies',
          blocks: [
            { p: `Elmina was a <span class="kt">trading post</span>: a fort where a foreign state's merchants bought and sold. It made money for Portugal's king and merchants. But it held almost no land. The gold came from inland African states, and they had far more soldiers than any fort. So the Portuguese traded with African rulers instead of ruling them. Portugal used the same model in Asia.` }
          ]
        },
        {
          heading: 'Kongo and its Christian king',
          blocks: [
            { p: `<b>Kongo</b> was then the strongest state in west-central Africa. Its king was baptized in <span class="num">1491</span>. His son <b>Afonso I</b> ruled from about <span class="num">1509</span> to the early 1540s. Afonso made Christianity the religion of the court.` },
            { p: `Afonso asked Portugal for priests and teachers, and he sent young nobles to study there. His own son Henrique became a bishop in <span class="num">1518</span>. Later, Kongo artists cast brass crucifixes in their own style, with Kongo meanings.` },
            { p: `Trade made the king stronger. Imported goods came through him, and he gave them to nobles in return for their loyalty.` },
            { p: `The trade also took people. Kongo had slavery of its own. Afonso sold foreign war captives, and he ran a slave market in his capital. But custom protected free-born Kongo people from sale abroad.` },
            { p: `In <span class="num">1526</span> Afonso complained to Portugal's king. He wrote that thieves were seizing free people and selling them to Portuguese traders. In Luís Madureira's translation, they took "our native-born countrymen and the children of our nobles and vassals as well as relatives of ours."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Africans were only victims of the trade, or only its partners. Afonso sold foreign captives into it. He also protested when free-born Kongo people were sold.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Portugal's rulers backed ocean voyages, and the trading posts Portugal built in Africa and Asia made money.`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period."`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['State-supported exploration', 'Voyages a ruler paid for or allowed.'],
        ['Trading post', 'A small fort where a foreign state\'s merchants buy and sell. Elmina was one.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'slave-trade',
      num: '02',
      accent: 'rust',
      name: 'The Trade in People',
      navLabel: 'The slave trade',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Old slavery, the Atlantic trade, families',
      thesis: `Slavery in Africa was old, and its older forms went on. What was new was the Atlantic trade. It grew with the plantations and changed the societies it took people from.`,
      parts: [
        {
          heading: 'Older forms that continued',
          blocks: [
            { p: `Many African societies had slavery long before 1450. Enslaved people were often war captives. Many were taken into households, where they worked, served or married. Over time, they or their children could become part of the family. Historians call this <span class="kt">household slavery</span>.` },
            { p: `That does not make it gentle. Enslaved people could still be sold. Slavery also differed from one society to the next. In some places, slave status passed from parent to child for generations. Songhai's rulers put captives to work on large farms.` },
            { p: `Older trades in people went on too. Captives were carried north across the Sahara. Others were carried east across the Red Sea and the Indian Ocean. These trades were centuries old. <a href="#r4-middle-east-peoples">The Middle East chapter</a> tells more about them.` }
          ]
        },
        {
          heading: 'How the Atlantic trade grew',
          blocks: [
            { p: `Sugar plantations worked by enslaved people reached Atlantic islands before the Americas. Before <span class="num">1492</span>, enslaved workers grew sugar on Portugal's island of Madeira. Some were Canary Islanders and some were Africans. Free settlers worked the cane beside them. São Tomé came next. Portugal settled that island in the 1480s and 1490s. Then plantations crossed to the Americas. From the late 1510s, enslaved Africans worked Spanish sugar mills on the Caribbean island of Hispaniola. Brazil's plantations grew far larger later in the 1500s. From the 1640s they spread to English and French islands in the Caribbean.` },
            { p: `Sugar and later tobacco needed huge numbers of workers. Historians estimate that about <span class="num">278,000</span> Africans were forced onto ships for the Americas in the whole 1500s. From <span class="num">1701</span> to <span class="num">1750</span> alone, the number was more than <span class="num">2.5 million</span>.` },
            { p: `This was the <span class="kt">Atlantic trading system</span>. It moved goods, wealth and people. Into Africa went guns, iron, alcohol, cloth and cowrie shells, which were used as money. Much of the cloth was Indian cotton. Weavers in India made more and more cloth for sale in Africa. Out of Africa went gold and ivory, and more and more captives.` },
            { p: `Most captives were taken inside Africa by war, raids and kidnapping. African rulers and merchants sold them at the coast. In Angola, Portugal's own wars took captives too. Portugal founded its port of <b>Luanda</b> there in <span class="num">1576</span>. It became one of the busiest slave ports of the Atlantic.` },
            { p: `Many captives died on the crossing of the Atlantic. That crossing is called the <span class="kt">Middle Passage</span>. <a href="#r4-americas-plantations">The Americas chapter</a> tells about the plantations that bought them.` }
          ]
        },
        {
          heading: 'What the trade did to the people who stayed',
          blocks: [
            { p: `About two of every three captives carried across the Atlantic were male. European buyers paid more for young men. African sellers often kept women and children, whom African buyers valued. So parts of Africa were left with more women than men, especially West Central Africa.` },
            { p: `Historians argue that this changed family life there. In their view, women did more of the farming, and more women and girls were enslaved inside Africa. Some argue that more men took several wives. This is called <span class="kt">polygyny</span>. Others find that evidence thin. Some regions lost people. States that sold captives grew richer.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The Trans-Atlantic Slave Trade Database counts the men, women and children on many voyages. The family changes are built from those counts, observers' reports and later counts of Angola's people. So they are stated as arguments.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Older kinds of slavery in Africa went on, but plantations made the Atlantic slave trade much larger, and it changed work and families in Africa.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes."`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "Although the world’s productive systems continued to be heavily centered on agriculture, major changes occurred in agricultural labor, the systems and locations of manufacturing, gender and social structures, and environmental processes."`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed and intensified."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Household slavery', 'Slavery inside a household. Enslaved people or their children could join the family, but could still be sold.'],
        ['Atlantic trading system', 'The movement of goods, wealth and enslaved people among Europe, Africa and the Americas.'],
        ['Middle Passage', 'The forced crossing of the Atlantic by enslaved Africans.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'kingdoms',
      num: '03',
      accent: 'iron',
      name: 'Kingdoms Rise, Fall and Resist',
      navLabel: 'Rivals and resisters',
      dates: 'c. 1590 to 1750 &nbsp;·&nbsp; Songhai, Njinga, Asante, Oman',
      thesis: `Songhai fell to Morocco but fought on. Njinga fought Portugal for some thirty years, and Asante grew strong through gold and guns. On the east coast, Oman drove the Portuguese from most of the Swahili towns.`,
      parts: [
        {
          heading: 'Songhai against Morocco',
          blocks: [
            { p: `The <b>Songhai Empire</b> ruled along the middle Niger River, from cities such as Gao and Timbuktu. It controlled the routes that carried gold north. It also controlled the Sahara's salt mines. <b>Ahmad al-Mansur</b> was the sultan (Muslim ruler) of Morocco, and he wanted that wealth. The two states had quarreled over the salt mine at Taghaza in the 1580s.` },
            { p: `Late in <span class="num">1590</span> al-Mansur sent an army of about 4,000 men across the desert. Many of them carried firearms. Songhai's ruler was <b>Askia Ishaq II</b>. In March <span class="num">1591</span> he met them at <b>Tondibi</b>. His army was larger, but it had no firearms, and Morocco's guns broke it. <a href="#r4-middle-east-pushback">The Middle East chapter</a> tells Morocco's side.` },
            { p: `Ishaq emptied the capital city of Gao. Then he offered tribute (regular payments to a stronger ruler) in gold and enslaved people if the Moroccans went home. Al-Mansur refused and sent a tougher commander.` },
            { p: `Ishaq soon lost his throne and was killed in exile. But some Songhai fighters would not give in. They moved down the Niger to Dendi. From there, Askia Nuh fought the Moroccans through much of the 1590s. He fought a guerrilla war (a war of small raids and ambushes).` },
            { p: `Morocco held Timbuktu and Gao, but Songhai broke into smaller states. The gold kept flowing to other buyers, including European traders on the coast.` }
          ]
        },
        {
          heading: 'European rivals, and Njinga',
          blocks: [
            { p: `European rivals fought over Africa's coast. Their governments gave <span class="kt">chartered companies</span> the sole right to their nation's trade with Africa. The Dutch West India Company was one. The companies fought each other over forts.` },
            { p: `Religion and war in Europe added to the rivalry. The Protestant Dutch were fighting Catholic Spain. From <span class="num">1580</span> to <span class="num">1640</span>, Spain's king also ruled Portugal. The Dutch took Elmina in <span class="num">1637</span> and Luanda in <span class="num">1641</span>.` },
            { p: `Inland from Luanda, Portugal's wars against the kingdom of <b>Ndongo</b> took captives for the slave trade. In <span class="num">1622</span> the king of Ndongo sent his sister <b>Njinga</b> to Luanda to make peace. There she was baptized Ana de Sousa. That is why she is also called Ana Nzinga.` },
            { p: `Njinga ruled Ndongo from <span class="num">1624</span>. When Portuguese armies drove her out, she conquered the kingdom of <b>Matamba</b> in the 1630s and ruled from there. She sided with the Dutch when they took Luanda. When Portugal took it back in <span class="num">1648</span>, she fought on. She made peace in the 1650s and died in <span class="num">1663</span>, still ruling Matamba.` },
            { p: `Njinga's fight was local resistance against a growing state. But she was no enemy of the slave trade. Her wars took captives, and Matamba sold them.` }
          ]
        },
        {
          heading: 'Kongo weakens, Asante rises',
          blocks: [
            { p: `In Kongo, the trade that had made the king stronger began to hurt the kingdom. Kongo fought civil wars in the 1600s. The historian Linda Heywood argues that the wars broke down the protection of free-born Kongo people. Far more were sold abroad.` },
            { p: `Inland from the Gold Coast, the trade built a state instead. Around <span class="num">1700</span>, several Akan states joined under one ruler to form the forest kingdom of <b>Asante</b>. Its ruler was called the Asantehene. Asante controlled gold. It bought guns from Dutch and English traders and paid partly with war captives.` },
            { p: `In <span class="num">1701</span> Asante defeated Denkyira at <b>Feyiase</b>. Denkyira had been the leading power in the region. Through the 1700s, Asante became the region's main power.` }
          ]
        },
        {
          heading: 'The Swahili towns and Oman',
          blocks: [
            { p: `On the east coast, the Swahili towns were Muslim trading ports. From <span class="num">1593</span> the Portuguese held Mombasa with a stone fortress called Fort Jesus. They taxed the coast's trade but did not end it. Swahili Arab merchants kept trading across the Indian Ocean.` },
            { p: `Some Swahili towns asked Oman for help against the Portuguese. Pate was one of them. Oman was an Arabian power. It had driven the Portuguese out of its own port of Muscat in <span class="num">1650</span>.` },
            { p: `In <span class="num">1696</span> Omani forces and Swahili allies began a siege of Fort Jesus (they surrounded it and cut it off). They took the fort in <span class="num">1698</span>. That broke Portuguese power on the coast north of Mozambique.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Fights over trade led to wars, trade made some African states stronger, and the Indian Ocean trade kept going.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states."`,
                `An optional College Board example: Morocco's conflict with the Songhai Empire.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British."`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level."`,
                `An optional College Board example: Ana Nzinga's resistance as ruler of Ndongo and Matamba.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo, whose participation in trading networks led to an increase in their influence."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants."`,
                `An optional College Board example: Swahili Arab and Omani merchants in the Indian Ocean.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Tondibi, 1591', 'The battle in which a Moroccan army with firearms defeated Songhai.'],
        ['Njinga (Ana Nzinga)', 'Ruler of Ndongo and Matamba, 1624 to 1663, who fought and bargained with Portugal.'],
        ['Chartered company', 'A trading company given the sole right to its nation\'s trade in a region. The Dutch West India Company was one.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'crops-cultures',
      num: '04',
      accent: 'oxide',
      name: 'Crops and Cultures Across the Ocean',
      navLabel: 'Crops and cultures',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Cassava, okra, rice, creoles, Vodou',
      thesis: `Ships carried plants both ways. American crops fed many Africans. Africans carried foods, faiths and knowledge to the Americas.`,
      parts: [
        {
          heading: 'American crops in Africa',
          blocks: [
            { p: `Portuguese traders brought <span class="kt">cassava</span> (an American root crop) from Brazil to the mouth of the Congo River. <b>Maize</b> (corn) also came from the Americas. By the 1600s both grew on the West and West Central African coasts, especially in Kongo and Angola. Over the next two centuries they spread inland.` },
            { p: `Cassava grows in poor soil and survives drought and locusts. It can stay in the ground until people need it. Where farmers grew these crops, people ate better. But the crops also helped the slave trade. Maize and cassava fed the captives on slave ships.` }
          ]
        },
        {
          heading: 'What Africans carried west',
          blocks: [
            { p: `Enslaved Africans brought foods of their own. <span class="kt">Okra</span> was growing in Brazil by the 1650s. Enslaved Africans grew African rice in the Americas, often in garden plots they worked to feed themselves. Many knew rice farming from West Africa. Historians argue over how much that knowledge shaped rice growing in South Carolina.` },
            { p: `Ships also carried diseases by accident. The mosquito that spreads yellow fever came from West Africa. Malaria most likely crossed in the blood of infected people. Both diseases killed many in the tropical Americas.` }
          ]
        },
        {
          heading: 'A mixed Atlantic world',
          blocks: [
            { p: `In the Americas, Africans, Indigenous Americans and Europeans lived side by side, usually because some were forced to. Their cultures mixed. New <span class="kt">creole languages</span> grew up, such as Haitian Creole and Papiamentu. Most of their words came from a European language. Much of their grammar and sound shows the influence of African languages. Exactly how they formed is still debated.` },
            { p: `Faith mixed too. In the 1700s, enslaved Africans in the French colony of Saint-Domingue (today's Haiti) built <b>Vodou</b>. It joined West and Central African religions with Catholic saints. A faith that blends parts of different religions is called <span class="kt">syncretic</span>.` },
            { p: `Kongo's Christianity crossed the ocean with its people. In <span class="num">1739</span> enslaved people rose up at Stono, in South Carolina. Several of the rebels came from Kongo. <a href="#r4-americas-resistance">The Americas chapter</a> tells that revolt.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that enslaved Africans "lost their culture." They kept and remade their ways under conditions designed to stop them. The mixing happened under force, not as a meeting of equals.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: American crops fed people in Africa, enslaved Africans brought foods and faiths to the Americas, and the cultures mixed.`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons."`,
                `An optional College Board example: okra and rice, two foods brought by enslaved Africans.`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Cassava', 'An American root crop that grows in poor soil.'],
        ['Creole language', 'A new language formed where peoples mixed. Haitian Creole is one.'],
        ['Vodou', 'A syncretic religion built by enslaved Africans in Saint-Domingue.']
      ]
    }
  ],

  closing: {
    heading: 'Sub-Saharan Africa at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, sorted into its six sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `The Atlantic trade made Asante strong. In Kongo, the same trade first made the king stronger, then hurt the kingdom. Explain why the trade had such different effects. Use evidence about each kingdom from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'African rulers kept most of Africa and fought hard to hold it',
        body: `Njinga ruled Ndongo and Matamba from 1624 to 1663 and fought Portugal for years. In 1701 Asante defeated Denkyira at Feyiase and became the region's main power.`
      },
      {
        category: 'Religious',
        title: 'Christianity, Islam and new blended faiths all shaped the region',
        body: `Kongo's king was baptized in 1491, and Afonso I's son Henrique became a bishop in 1518. In the 1700s, enslaved Africans in Saint-Domingue built Vodou from African religions and Catholic saints.`
      },
      {
        category: 'Social',
        title: 'The Atlantic trade changed who was enslaved and who was left behind',
        body: `Household slavery went on beside the Atlantic trade. About two of every three Atlantic captives were male, so in parts of West Central Africa women came to outnumber men.`
      },
      {
        category: 'Intellectual',
        title: 'Knowledge moved with people in both directions',
        body: `Under Afonso I (about 1509 to the early 1540s), young Kongo nobles studied in Portugal. Enslaved West Africans brought rice-farming knowledge to the Americas, though historians argue over its effect.`
      },
      {
        category: 'Technological',
        title: 'Guns won battles, and forts let Europeans hold parts of the coast',
        body: `In 1591 a Moroccan army of about 4,000, many of them armed with guns, beat Songhai's larger army at Tondibi. Asante bought European guns as it rose around 1700. Forts such as Elmina (1482) held the shore, but European power reached little farther.`
      },
      {
        category: 'Economic',
        title: 'Africa traded gold and more and more captives for imported goods',
        body: `Gold, ivory and captives went out, and guns, Indian cloth and cowrie shells came in. The number of Africans shipped to the Americas grew from about 278,000 in the whole 1500s to more than 2.5 million from 1701 to 1750.`
      }
    ]
  }
};
