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
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-sub-saharan-africa',
  slug: 'region-4-sub-saharan-africa',
  unit: '4',
  region: 'Sub-Saharan Africa',
  titleHtml: 'Sub-Saharan <em>Africa</em>',
  deck: `From 1450 to 1750, most of Africa south of the Sahara stayed under African rulers. What changed was the sea. European ships tied Africa's Atlantic coast to a new ocean trade. It made some African states stronger, and it carried millions of Africans into slavery in the Americas. On the east coast, Portugal forced its way into the old Indian Ocean trade of the Swahili towns.`,
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
    'KC-4.1.IV',
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
      thesis: `Portugal's rulers paid for voyages down the African coast. Their ships met African states strong enough to set terms. So Portugal built forts on the shore and traded with kings.`,
      parts: [
        {
          heading: 'Why Portugal sailed south',
          blocks: [
            { p: `For centuries, West African gold had crossed the Sahara by camel. Portugal's rulers wanted to reach that gold by sea. Later they also wanted Asia's spices. Spices passed through a long chain of middlemen, and each one took a cut. Sailing straight to Asia would cut them out.` },
            { p: `Faith pushed Portugal too. In <span class="num">1415</span> it captured <b>Ceuta</b>, a Muslim port in North Africa. That carried on the long wars of Iberia's Christian kingdoms against Muslim powers (see <a href="#r4-europe-edge">Europe</a>).` },
            { p: `So Prince Henry and other royals paid for voyages down the coast, or gave merchants the right to make them. This was <span class="kt">state-supported exploration</span>: voyages that a ruler paid for or allowed (<a href="#chapter-t4-2">Topic 4.2</a>). Light ships called caravels, and growing knowledge of Atlantic winds, carried each voyage farther.` },
            { p: `The trade in people began early. In the 1440s, Portuguese crews raided the Saharan coast for captives. That was the beginning of the Atlantic slave trade. From the late 1440s they also bought captives at Arguin, an island off that coast, along with gold brought across the desert by caravan. In the 1450s they bought captives on the Senegal coast too.` },
            { p: `In <span class="num">1482</span> Portugal built a fortress on the Gold Coast to buy gold: São Jorge da Mina, or <b>Elmina</b>. In <span class="num">1498</span> Vasco da Gama sailed around Africa and up its east coast. At <b>Malindi</b>, a Swahili town, he hired a pilot who knew the way to India.` }
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
            { p: `<b>Kongo</b> was then the strongest state in west-central Africa. Its king was baptized in <span class="num">1491</span>. His son <b>Afonso I</b> ruled from about <span class="num">1509</span> to the early 1540s. Afonso made Christianity the religion of the court. He asked Portugal for priests and teachers, and he sent young nobles to study there. His own son Henrique became a bishop in <span class="num">1518</span>. Later, Kongo artists cast brass crucifixes in their own style, with Kongo meanings.` },
            { p: `Trade made the king stronger. Imported goods came through him, and he gave them to loyal nobles. In return, the nobles owed him their loyalty.` },
            { p: `The trade also took people. Kongo had slavery of its own. Afonso sold foreign war captives, and he ran a slave market in his capital. But custom protected free-born Kongo people from sale abroad. In <span class="num">1526</span> Afonso complained to Portugal's king. Thieves, he wrote, were seizing free people and selling them to Portuguese traders. In Luís Madureira's translation, they took "our native-born countrymen and the children of our nobles and vassals as well as relatives of ours."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Africans were only victims of the trade, or only its partners. Afonso sold foreign captives into it. He also protested when free-born Kongo people were sold.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period." Portugal's skills "resulted in the construction of a global trading-post empire."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['State-supported exploration', 'Voyages a ruler paid for or allowed.'],
        ['Trading post', 'A small fort where a foreign state\'s merchants buy and sell, such as Elmina.']
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
      thesis: `Slavery in Africa was old, and its older forms went on. What was new was the Atlantic trade. It grew with the plantations, and it changed the societies it took people from.`,
      parts: [
        {
          heading: 'Older forms that continued',
          blocks: [
            { p: `Many African societies had slavery long before 1450. Enslaved people were often war captives. Many were taken into households, a form historians call <span class="kt">household slavery</span>. There they worked, served, or married. Over time, they or their children could become part of the family.` },
            { p: `That does not make it gentle. Enslaved people could still be sold. Slavery also differed from one society to the next. In some places, slave status passed from parent to child for generations. Songhai's rulers put captives to work on large farms.` },
            { p: `Older trades in people went on too. Captives were carried north across the Sahara, and east across the Red Sea and the Indian Ocean (see <a href="#r4-middle-east-peoples">the Middle East</a>). These trades were centuries old, and they continued beside the Atlantic one.` }
          ]
        },
        {
          heading: 'How the Atlantic trade grew',
          blocks: [
            { p: `Sugar plantations worked by enslaved people reached Atlantic islands before the Americas. On Portugal's island of Madeira, enslaved workers, including Canary Islanders and Africans, grew sugar before <span class="num">1492</span>. São Tomé, an island settled in the 1480s and 1490s, came next. Then plantations crossed to Brazil in the 1500s. From the 1640s they spread to English and French islands in the Caribbean.` },
            { p: `Sugar, and later tobacco, needed huge numbers of workers. Historians estimate that about 278,000 Africans were forced onto ships for the Americas in the whole 1500s. From <span class="num">1701</span> to <span class="num">1750</span> alone, the number was more than 2.5 million (<a href="#chapter-t4-4">Topic 4.4</a>).` },
            { p: `This was the <span class="kt">Atlantic trading system</span>, which moved goods, wealth and people. Into Africa went guns, iron, alcohol, cowrie shells used as money, and cloth. Much of the cloth was Indian cotton (see <a href="#r4-south-southeast-asia-companies">South and Southeast Asia</a>). Out of Africa went gold, ivory and, more and more, captives.` },
            { p: `Most captives were taken inside Africa, in wars, raids and kidnappings. African rulers and merchants sold them at the coast. In Angola, Portugal's own wars took captives too. Portugal founded <b>Luanda</b>, its port there, in <span class="num">1576</span>. It became one of the busiest slave ports of the Atlantic. Many captives died on the crossing, the <span class="kt">Middle Passage</span> (see <a href="#r4-americas-plantations">the Americas</a>).` }
          ]
        },
        {
          heading: 'What the trade did to the people who stayed',
          blocks: [
            { p: `About two of every three captives carried across the Atlantic were male. European buyers paid more for young men. African sellers often kept women and children, whom African buyers valued. So parts of Africa, especially West Central Africa, were left with more women than men.` },
            { p: `Historians argue that this changed family life there. In their view, women did more of the farming, and more women and girls were enslaved inside Africa. Some argue that more men took several wives, called <span class="kt">polygyny</span>. Others find that evidence thin. Some regions lost people, while states that sold captives grew richer (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The Trans-Atlantic Slave Trade Database counts the men, women and children on many voyages. The family changes are built from those counts, observers' reports and later counts of Angola's people, so they are stated as arguments.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "The growth of the plantation economy increased the demand for enslaved labor in the Americas". <a href="#chapter-t4-8">Topic 4.8</a>: "the Atlantic slave trade developed and intensified."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons." Also: "Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Household slavery', 'Slavery in which enslaved people lived in a household and could, over generations, join the family. They could still be sold.'],
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
      thesis: `African states did not stand still while the trade grew. Songhai fell to Morocco but fought on, Njinga fought Portugal for some thirty years, and Asante rose on gold and guns. On the east coast, Oman drove the Portuguese from most of the Swahili towns.`,
      parts: [
        {
          heading: 'Songhai against Morocco',
          blocks: [
            { p: `The <b>Songhai Empire</b> ruled along the middle Niger River, from cities such as Gao and Timbuktu. It controlled the routes that carried gold north, and the Sahara's salt mines. Morocco's sultan, <b>Ahmad al-Mansur</b>, wanted that wealth. The two states had quarreled over the salt mine at Taghaza in the 1580s. In <span class="num">1591</span> he sent about 4,000 men with firearms across the desert (<a href="#r4-middle-east-pushback">the Middle East</a> tells Morocco's side).` },
            { p: `Songhai's ruler, <b>Askia Ishaq II</b>, met them at <b>Tondibi</b>. His army was larger, but it had no firearms, and Morocco's guns broke it. Ishaq emptied his capital, Gao. Then he offered to pay tribute in gold and enslaved people if the Moroccans would go home. Al-Mansur refused and sent a tougher commander.` },
            { p: `Ishaq soon lost his throne and was killed in exile. But Songhai fighters who would not give in moved down the Niger to Dendi. From there, Askia Nuh fought the Moroccans through much of the 1590s with a guerrilla war of raids and ambushes. Morocco held Timbuktu and Gao, but Songhai broke into smaller states. The gold kept flowing to other buyers, including European traders on the coast.` }
          ]
        },
        {
          heading: 'European rivals, and Njinga',
          blocks: [
            { p: `European rivals fought over Africa's coast. Their governments gave <span class="kt">chartered companies</span>, such as the Dutch West India Company, the sole right to their nation's trade with Africa. The companies fought over forts. Religion and war in Europe added to the rivalry. The Protestant Dutch were fighting Catholic Spain, whose king also ruled Portugal from <span class="num">1580</span> to <span class="num">1640</span>. The Dutch took Elmina in <span class="num">1637</span> and Luanda in <span class="num">1641</span>. In <span class="num">1652</span> the Dutch East India Company set up a station at the Cape of Good Hope. It grew into a settler colony on Khoekhoe land.` },
            { p: `Inland from Luanda, Portugal's wars against the kingdom of <b>Ndongo</b> took captives for the slave trade. In <span class="num">1622</span> the king of Ndongo sent his sister <b>Njinga</b> to Luanda to make peace. There she was baptized Ana de Sousa. That is why one of the College Board's examples calls her Ana Nzinga.` },
            { p: `Njinga ruled Ndongo from <span class="num">1624</span>. When Portuguese armies drove her out, she conquered the kingdom of <b>Matamba</b> in the 1630s and ruled from there. She sided with the Dutch when they took Luanda. When Portugal took it back in <span class="num">1648</span>, she fought on. She made peace in the 1650s and died in <span class="num">1663</span>, still ruling Matamba.` },
            { p: `Hers was local resistance to an expanding state (<a href="#chapter-t4-6">Topic 4.6</a>). But she was no enemy of the slave trade. Her wars took captives, and Matamba sold them.` }
          ]
        },
        {
          heading: 'Kongo weakens, Asante rises',
          blocks: [
            { p: `In Kongo, the trade that had made the king stronger turned against the kingdom. Kongo fought civil wars in the 1600s. The historian Linda Heywood argues that the wars broke down the protection of free-born Kongo people. Far more were sold abroad.` },
            { p: `Inland from the Gold Coast, the trade built a state instead. Around <span class="num">1700</span>, several Akan states joined under one ruler, the Asantehene, as the forest kingdom of <b>Asante</b>. Asante controlled gold. It bought guns from Dutch and English traders, paying partly with war captives. In <span class="num">1701</span> it defeated Denkyira, the leading power, at <b>Feyiase</b>. Through the 1700s, Asante became the region's main power.` }
          ]
        },
        {
          heading: 'The Swahili towns and Oman',
          blocks: [
            { p: `On the east coast, the Swahili towns were Muslim trading ports. From <span class="num">1593</span> the Portuguese held Mombasa with a stone fortress, Fort Jesus. They taxed the coast's trade but did not end it. Swahili Arab merchants kept trading across the Indian Ocean.` },
            { p: `Some Swahili towns, Pate among them, asked Oman for help against the Portuguese. Oman was an Arabian power that had driven the Portuguese from its own port, Muscat, in <span class="num">1650</span>. In <span class="num">1696</span> Omani forces, with Swahili allies, surrounded Fort Jesus and began a siege. They took it in <span class="num">1698</span>. That broke Portuguese power on the coast north of Mozambique (<a href="#r4-middle-east-pushback">the Middle East</a> tells Oman's side).` },
            { p: `Some Swahili towns soon resented Oman too. In <span class="num">1728</span> some helped the Portuguese back into Mombasa, but only until <span class="num">1729</span>.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states." Morocco's conflict with the Songhai Empire is one of the College Board's examples.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires".`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level." Ana Nzinga's resistance is one of the College Board's examples.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo".`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: despite "some disruption and restructuring", Indian Ocean trade networks "continued to flourish". Swahili Arabs and Omanis are two of the College Board's examples.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Tondibi, 1591', 'The battle in which a Moroccan army with firearms defeated Songhai.'],
        ['Njinga (Ana Nzinga)', 'The ruler of Ndongo and Matamba from 1624 to 1663, who fought and bargained with Portugal.'],
        ['Chartered company', 'A trading company given the sole right to its nation\'s trade in a region, such as the Dutch West India Company.']
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
            { p: `Portuguese traders brought <span class="kt">cassava</span>, an American root crop, from Brazil to the mouth of the Congo River. <b>Maize</b>, another American crop, came too. By the 1600s both grew on the West and West Central African coasts, especially in Kongo and Angola. Over the next two centuries they spread inland.` },
            { p: `Cassava grows in poor soil and survives drought and locusts. It can stay in the ground until people need it. Where farmers grew these crops, people ate better. But the crops also fed the trade: maize and cassava fed the captives on slave ships (<a href="#chapter-t4-3">Topic 4.3</a>).` }
          ]
        },
        {
          heading: 'What Africans carried west',
          blocks: [
            { p: `Enslaved Africans brought foods of their own. <span class="kt">Okra</span> was growing in Brazil by the 1650s. Enslaved Africans grew African rice in the Americas, often in garden plots they worked to feed themselves. Many knew rice farming from West Africa. Historians argue over how much that knowledge shaped rice growing in South Carolina.` },
            { p: `Ships also carried disease, without meaning to. The mosquito that spreads yellow fever came from West Africa. Malaria most likely crossed in the blood of infected people. Both diseases killed many in the tropical Americas.` }
          ]
        },
        {
          heading: 'A mixed Atlantic world',
          blocks: [
            { p: `In the Americas, Africans, Indigenous Americans and Europeans lived side by side, usually by force, and their cultures mixed. New <span class="kt">creole languages</span>, such as Haitian Creole and Papiamentu, took most of their words from a European language. Much of their grammar and sound shows the influence of African languages, though exactly how they formed is still debated.` },
            { p: `Faith mixed too. In the French colony of Saint-Domingue, enslaved Africans in the 1700s built <b>Vodou</b> from West and Central African religions and Catholic saints. Kongo's Christianity crossed the ocean with its people. Several of the rebels at Stono, in South Carolina, in <span class="num">1739</span>, came from Kongo (see <a href="#r4-americas-resistance">the Americas</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that enslaved Africans "lost their culture." They kept and remade their ways under conditions designed to stop them. The mixing happened under force, not as a meeting of equals.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa." Afro-Eurasians "benefitted nutritionally". Some foods "were brought by African enslaved persons"; okra and rice are two of the College Board's examples. Colonization also spread "disease vectors, including mosquitoes and rats".`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: the Atlantic system mixed "African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis." In some cases, contact "expanded the reach" of existing religions and contributed to "syncretic belief systems and practices."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Cassava', 'An American root crop that grows in poor soil and survives drought.'],
        ['Creole language', 'A new language formed where peoples mixed, such as Haitian Creole.'],
        ['Vodou', 'A religion enslaved Africans built in Saint-Domingue from African religions and Catholic saints.']
      ]
    }
  ],

  closing: {
    heading: 'Sub-Saharan Africa at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, sorted into its six sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `The Atlantic trade helped Asante grow strong. In Kongo, the trade that had first made the king stronger turned against the kingdom. Explain why the same trade had such different effects on the two kingdoms. Use evidence about each from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'African states set terms and fought for them',
        body: `Kongo and Asante grew stronger through trade. Morocco broke Songhai, which fought on from Dendi; Njinga resisted Portugal; and Oman, called in by some Swahili towns, took Mombasa. Europeans held forts, Angola and the Cape, but most land stayed under African rulers.`
      },
      {
        category: 'Religious',
        title: 'Kongo became Christian, and the Atlantic made new faiths',
        body: `Kongo's kings made Christianity the court religion, and Kongo artists made their own crucifixes. The Swahili towns stayed Muslim. Across the Atlantic, enslaved Africans built Vodou.`
      },
      {
        category: 'Social',
        title: 'Old slavery went on, and the Atlantic trade remade families',
        body: `Household slavery continued, and it was not gentle: enslaved people could be sold. About two of every three Atlantic captives were male, so in parts of West Central Africa women came to outnumber men. Historians argue this changed family life.`
      },
      {
        category: 'Intellectual',
        title: 'Knowledge crossed with people',
        body: `Afonso I sent young nobles to study in Portugal, and his son Henrique became a bishop in 1518. Enslaved West Africans carried rice-farming knowledge west, though historians argue over its effect.`
      },
      {
        category: 'Technological',
        title: 'Guns won battles, and forts held the shore',
        body: `Caravels carried Portuguese crews down the coast, and forts such as Elmina held the shore, but European power reached little farther. Morocco's firearms won at Tondibi, and Asante bought guns as it rose.`
      },
      {
        category: 'Economic',
        title: 'Gold and captives went out, and cloth and guns came in',
        body: `Gold, ivory and, more and more, captives left Africa; Indian cloth, cowries and guns arrived. The Atlantic slave trade grew from about 278,000 people in the 1500s to more than 2.5 million from 1701 to 1750. Maize and cassava became staples.`
      }
    ]
  }
};
