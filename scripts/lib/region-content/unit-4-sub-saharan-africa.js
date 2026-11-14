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
 * Deliberately left out: the Middle Passage beyond a few sentences and life on
 * arrival (the Americas chapter tells it); KC-4.1.II on European ship and
 * navigation technology (the Europe chapter's); and states the CED does not name
 * for this unit (Ethiopia, Benin, Oyo, Dahomey, the Zambezi prazos), which would
 * pad the chapter with history the CED does not require.
 */

module.exports = {
  topicKey: 'r4-sub-saharan-africa',
  slug: 'region-4-sub-saharan-africa',
  unit: '4',
  region: 'Sub-Saharan Africa',
  titleHtml: 'Sub-Saharan <em>Africa</em>',
  deck: `Through most of the region, the land stayed under African rulers from 1450 to 1750. What changed was the sea: Portuguese, then Dutch and English, ships tied Africa's Atlantic coast into a new ocean trade and forced their way into the old Indian Ocean trade of the Swahili coast, which made some African states stronger and carried millions of Africans into slavery in the Americas. This chapter follows both, and the crops and cultures that crossed the ocean.`,
  topics: ['4.2', '4.3', '4.4', '4.5', '4.6'],
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
      thesis: `Portugal's rulers paid for voyages down the African coast to reach gold. Their ships met African states strong enough to set terms, so Portugal built forts on the shore and traded with kings.`,
      parts: [
        {
          heading: 'The voyages down the coast',
          blocks: [
            { p: `West African gold had long crossed the Sahara by camel to North Africa. Portugal wanted to reach the gold by sea. Its royal family, Prince Henry above all, paid for voyages down the coast or licensed merchants to make them: <span class="kt">state-supported exploration</span> (<a href="#chapter-t4-2">Topic 4.2</a>). In the 1440s Portuguese crews raided the coast south of the Sahara for captives, then turned to trade; by the 1450s they were buying gold, and enslaved people, on the Senegal coast.` },
            { p: `Each return made the next voyage easier to pay for. In <span class="num">1482</span> Portugal built the fortress of São Jorge da Mina, <b>Elmina</b>, on the Gold Coast to buy gold for a royal trade. In the same decade its ships reached the mouth of the Congo River. In <span class="num">1488</span> Bartolomeu Dias sailed around the southern tip of Africa, and in <span class="num">1498</span> Vasco da Gama worked up the east coast through the Swahili ports, hired a pilot at <b>Malindi</b> who knew the ocean crossing, and reached India.` }
          ]
        },
        {
          heading: 'Why forts and not colonies',
          blocks: [
            { p: `Elmina was a <span class="kt">trading post</span>: a fort where a foreign state's merchants bought and sold. It made money for the Portuguese king and his merchants, and it held almost no land, because the gold came from inland African states with far more soldiers than a fort could hold. So the Portuguese traded with African rulers rather than ruling them.` }
          ]
        },
        {
          heading: 'Kongo and its Christian king',
          blocks: [
            { p: `<b>Kongo</b> was the dominant power in west-central Africa when the Portuguese arrived. Its king was baptized in <span class="num">1491</span>, and his son <b>Afonso I</b>, king from about <span class="num">1509</span> until the early 1540s, made Christianity the religion of the court. He asked Portugal for priests and teachers, sent young nobles to study there, and fought his wars with Portuguese allies; his son Henrique became a bishop in <span class="num">1518</span>. Later Kongo artists cast brass crucifixes in their own style, with Kongo meanings.` },
            { p: `Trade made the king stronger because imported goods came through him, and he gave them to loyal nobles, who then owed him their loyalty. This is what the College Board means when it says maritime trade "fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo."` },
            { p: `The trade also took people. Kongo had slavery of its own, and Afonso sold foreign captives taken in his wars and ran a slave market in his capital. But custom protected free-born Kongo people from sale abroad. In <span class="num">1526</span> Afonso wrote to the king of Portugal that thieves were seizing free people and selling them to Portuguese traders, who carried away, in Luís Madureira's translation, "our native-born countrymen and the children of our nobles and vassals as well as relatives of ours."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Africans were only victims of the trade, or only its partners. Afonso used it to grow stronger and sold captives into it, and he also tried to stop it from taking his own people.`
            } }
          ]
        }
      ],
      terms: [
        ['State-supported exploration', 'Voyages a ruler paid for or licensed, as Portugal\'s kings did down the African coast.'],
        ['Trading post', 'A small fortified base where a foreign state\'s merchants buy and sell, such as Elmina.'],
        ['Elmina', 'The Portuguese fortress built on the Gold Coast in 1482 to buy gold.'],
        ['Afonso I', 'Christian king of Kongo from about 1509 to the early 1540s, who used the Portuguese trade to strengthen his rule.']
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
      thesis: `Slavery in Africa was old, and its older forms went on. What was new was the Atlantic trade, which grew with the plantations of the Americas and changed the African societies it took people from.`,
      parts: [
        {
          heading: 'Older forms that continued',
          blocks: [
            { p: `In many African societies, enslaved people, often war captives, were taken into households, a form historians call <span class="kt">household slavery</span>, where they worked, served or married, and over time they or their children could become part of the family. That was not freedom, since they could still be sold, but it was not slavery passed down forever. Captives were also carried north across the Sahara to North Africa and the Mediterranean, and east across the Red Sea and the Indian Ocean to Arabia, Persia and India. These trades were centuries old and went on beside the Atlantic one: enslavement in Africa "continued in its traditional forms."` }
          ]
        },
        {
          heading: 'How the Atlantic trade grew',
          blocks: [
            { p: `Portugal grew sugar with enslaved workers on Madeira before <span class="num">1492</span>, then on São Tomé, an island in the Gulf of Guinea settled in the 1480s and 1490s. Plantations crossed the ocean to Brazil in the 1500s and, on a far larger scale, the Caribbean in the 1600s, and sugar, and later tobacco, needed huge numbers of workers. The <span class="kt">Atlantic slave trade</span> grew with them. Historians estimate that about 278,000 Africans were forced onto ships bound for the Americas in the whole 1500s, and more than 2.5 million in the fifty years from <span class="num">1701</span> to <span class="num">1750</span> (<a href="#chapter-t4-4">Topic 4.4</a>).` },
            { p: `The <span class="kt">Atlantic trading system</span> moved goods, wealth and people. Into Africa went guns, iron, alcohol and cloth, much of it cotton woven in India, and cowrie shells from the Maldive Islands, used as money on the West African coast. Out went gold, ivory and, more and more, captives. The routes were more tangled than a triangle: ships from Brazil also sailed straight to Africa with brandy and tobacco and came back with captives. <b>Luanda</b>, the Portuguese port in Angola founded in <span class="num">1576</span>, became one of the busiest slave ports of the Atlantic.` },
            { p: `Most captives were taken inside Africa, in wars, raids and kidnappings, and sold at the coast by African rulers and merchants; in Angola, Portugal's own wars took captives too. Then came the weeks-long crossing called the <span class="kt">Middle Passage</span>, on which many died. What happened to the survivors is the story of the <a href="#chapter-r4-americas">Americas</a>.` }
          ]
        },
        {
          heading: 'What the trade did to the people who stayed',
          blocks: [
            { p: `About two of every three captives carried across the Atlantic were male. European buyers paid more for young men to work the plantations, and African sellers often kept women and children, whom African buyers valued. In parts of Africa, especially West Central Africa, that left communities with more women than men.` },
            { p: `Historians argue that this changed family life where the trade hit hardest: that women did more of the farming, and that more women and girls were enslaved inside Africa itself. Some historians argue that more men took several wives, a practice called <span class="kt">polygyny</span>; others find that evidence thin. Some regions lost population or grew more slowly, while states that sold captives grew richer. The College Board names these "demographic changes in Africa that resulted from the trade of enslaved persons" (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The sex ratio comes from shipping records gathered in the Trans-Atlantic Slave Trade Database, which count the men, women and children on many voyages. The family changes are harder to see: historians build them from those numbers, European observers' reports and Portuguese counts of Angola's people from the late 1700s. That is why they are stated as arguments.`
            } }
          ]
        }
      ],
      terms: [
        ['Household slavery', 'Slavery in which enslaved people were taken into a household and could, over generations, become part of the family.'],
        ['Atlantic trading system', 'The movement of goods, wealth and enslaved people among Europe, Africa and the Americas.'],
        ['Middle Passage', 'The crossing of the Atlantic that enslaved Africans were forced to make, packed into ships for weeks.'],
        ['Polygyny', 'A man having more than one wife at the same time.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'kingdoms',
      num: '03',
      accent: 'iron',
      name: 'Kingdoms Rise, Fall and Resist',
      navLabel: 'Rivals and resisters',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Songhai, Njinga, Asante, Oman',
      thesis: `African states did not stand still while the trade grew. Morocco broke Songhai, Njinga fought Portugal for some thirty years, Asante rose on gold and guns, and Oman drove the Portuguese from the Swahili coast.`,
      parts: [
        {
          heading: 'Morocco against Songhai',
          blocks: [
            { p: `The <b>Songhai Empire</b>, ruling a large empire along the middle Niger River from cities such as Gao and Timbuktu, controlled the trade routes that carried West African gold north, and the Sahara's salt mines. Morocco's sultan, <b>Ahmad al-Mansur</b>, wanted that wealth, and the two had quarreled over the salt mine at Taghaza in the 1580s. In <span class="num">1591</span> his army of about 4,000, armed with firearms, crossed the desert and defeated Songhai at <b>Tondibi</b>. Gold and salt were a large part of the reason: "Economic disputes led to rivalries and conflict between states."` },
            { p: `Morocco held Timbuktu and Gao, but Songhai broke into smaller states, and the gold kept flowing to other buyers, including European traders on the coast.` }
          ]
        },
        {
          heading: 'Njinga against Portugal',
          blocks: [
            { p: `European rivals fought over Africa's coasts. From the 1600s <span class="kt">chartered companies</span>, given a monopoly of trade by their governments, ran much of it: the Dutch West India Company and, from <span class="num">1672</span>, England's Royal African Company. The Dutch company took Elmina from Portugal in <span class="num">1637</span>, and the Dutch captured Luanda in <span class="num">1641</span>. Inland from Luanda, Portugal's colony had pushed into the kingdom of <b>Ndongo</b>, and its wars took captives for the slave trade.` },
            { p: `In <span class="num">1622</span> Ndongo's king sent his sister <b>Njinga</b> to Luanda to make peace. She agreed to be baptized there, taking the name Ana de Sousa, which is why the College Board calls her Ana Nzinga. In <span class="num">1624</span> she became Ndongo's ruler. Driven out by Portuguese armies, she conquered the neighboring kingdom of <b>Matamba</b> in the 1630s and ruled from there. When the Dutch took Luanda she joined them; when Portugal retook it in <span class="num">1648</span>, she fought on. She made peace in the 1650s and died in <span class="num">1663</span>, still ruling Matamba.` },
            { p: `Hers was local resistance to an expanding state (<a href="#chapter-t4-6">Topic 4.6</a>). But she was no enemy of the slave trade: her wars took captives, and Matamba sold them.` }
          ]
        },
        {
          heading: 'Kongo weakens, Asante rises',
          blocks: [
            { p: `Kongo's civil wars of the 1600s, the historian Linda Heywood argues, broke down the old protection of free-born Kongo people, and far more of them were sold abroad. Inland from the Gold Coast, the trade worked the other way. Around <span class="num">1700</span> several states of Akan-speaking peoples joined under one ruler, the Asantehene, in the forest kingdom of <b>Asante</b>; tradition credits Osei Tutu and the priest Okomfo Anokye with the union and with the Golden Stool that stood for it. Asante controlled gold and bought guns from Dutch and English traders on the coast, paying partly with war captives. In <span class="num">1701</span> it defeated Denkyira, the leading power, at <b>Feyiase</b>, and through the 1700s it became the region's main power.` }
          ]
        },
        {
          heading: 'The Swahili coast and Oman',
          blocks: [
            { p: `On the east coast, the Swahili ports were Muslim trading towns whose African language, Swahili, held many Arabic words. The Portuguese sacked Mombasa in <span class="num">1505</span> and <span class="num">1528</span>, and from <span class="num">1593</span> held it with a stone fortress, Fort Jesus. They taxed the trade but did not end it: Swahili Arab merchants (the College Board's name for the coast's Muslim traders) kept trading in an Indian Ocean network that "continued to flourish."` },
            { p: `Then an Arabian power pushed Portugal out. Oman's rulers drove the Portuguese from Muscat in <span class="num">1650</span>, and in <span class="num">1698</span>, after a siege begun in <span class="num">1696</span>, they took Fort Jesus, breaking Portuguese power on the coast north of Mozambique (apart from a brief return to Mombasa in <span class="num">1728</span> and <span class="num">1729</span>).` }
          ]
        }
      ],
      terms: [
        ['Tondibi, 1591', 'The battle in which a Moroccan army with firearms defeated the Songhai Empire, after a dispute over gold and salt.'],
        ['Njinga (Ana Nzinga)', 'The ruler of Ndongo and Matamba from 1624 to 1663, who fought and bargained with Portugal.'],
        ['Asante', 'A forest kingdom inland from the Gold Coast that rose around 1700 through gold and guns.'],
        ['Fort Jesus', 'The Portuguese fortress at Mombasa, built from 1593 and taken by Oman in 1698.']
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
      thesis: `The ships that carried captives west also carried plants both ways. American crops fed many Africans, and Africans carried foods, faiths and knowledge to the Americas.`,
      parts: [
        {
          heading: 'American crops in Africa',
          blocks: [
            { p: `Portuguese traders brought <span class="kt">cassava</span>, a root crop, from Brazil to the coast near the mouth of the Congo River, and <b>maize</b>, another American crop, arrived too. Both took hold along the West and West Central African coasts, especially in Kongo and Angola, by the 1600s, and spread inland over the next two centuries and more. Cassava grows in poor soil, survives drought and locusts, and can be left in the ground until needed, which made it a food to fall back on. Where farmers adopted them, people "benefitted nutritionally," in the College Board's words.` },
            { p: `They also fed the trade. Maize and cassava were used to feed the people on slave ships, so the same crops that helped African populations grow were feeding the vessels that carried Africans away (<a href="#chapter-t4-3">Topic 4.3</a>).` }
          ]
        },
        {
          heading: 'What Africans carried west',
          blocks: [
            { p: `Enslaved Africans carried foods of their own. <span class="kt">Okra</span> was growing in Brazil by the 1650s, and enslaved Africans grew African rice in the Americas, often in garden plots they worked to feed themselves. Many of them knew rice farming from West Africa; how much that knowledge shaped rice growing on coasts such as South Carolina's is still argued over by historians. Ships also carried, without meaning to, the yellow fever mosquito from West Africa, and probably malaria.` }
          ]
        },
        {
          heading: 'A mixed Atlantic world',
          blocks: [
            { p: `In the Americas, Africans, Indigenous Americans and Europeans lived side by side, usually by force, with "all parties contributing to this cultural synthesis." New <span class="kt">creole languages</span>, such as Haitian Creole and Papiamentu, took most of their words from a European language, and much of their grammar and sound shows the influence of African languages; linguists still debate exactly how they formed. In the French colony of Saint-Domingue, enslaved Africans in the 1700s built <b>Vodou</b> from West and Central African religions and Catholic saints. And Kongo's Christianity crossed with its people: several of the rebels at Stono, in South Carolina, in <span class="num">1739</span>, came from Kongo, where Catholicism was widespread.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that enslaved Africans "lost their culture." They kept and remade their ways under conditions designed to stop them. But do not swing the other way: the mixing happened under force, not as a meeting of equals.`
            } }
          ]
        }
      ],
      terms: [
        ['Cassava', 'An American root crop that grows in poor soil and survives drought, which became a staple in much of Africa.'],
        ['Okra', 'An African food plant carried to the Americas by enslaved Africans.'],
        ['Creole language', 'A new language formed where peoples mixed, such as Haitian Creole or Papiamentu.'],
        ['Vodou', 'A religion built by enslaved Africans in Saint-Domingue from African religions and Catholic saints.']
      ]
    }
  ],

  closing: {
    heading: 'Sub-Saharan Africa at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, sorted into its six sides for review.`,
    pairs: [
      {
        category: 'Political',
        title: 'African states set terms and fought for them',
        body: `Kongo under Afonso I and Asante around 1700 grew stronger by controlling trade with Europeans. Morocco broke Songhai at Tondibi in 1591. Njinga fought and bargained with Portugal from 1622 to 1663, and Oman drove the Portuguese from Mombasa in 1698. Europeans held forts, a colony in Angola and, from 1652, a Dutch settlement at the Cape; most land stayed under African rulers.`
      },
      {
        category: 'Religious',
        title: 'A Christian Kongo and an Atlantic of new faiths',
        body: `Kongo's kings made Christianity the court religion, Kongo artists made Kongo crucifixes, and Njinga was baptized in 1622. The Swahili ports stayed Muslim. Across the Atlantic, enslaved Africans built Vodou in Saint-Domingue, and Kongo Catholics were among the Stono rebels of 1739.`
      },
      {
        category: 'Social',
        title: 'Old slavery went on; the Atlantic trade remade families',
        body: `Household slavery and the Saharan and Indian Ocean trades continued. About two of every three Atlantic captives were male, and in parts of West Central Africa women came to outnumber men. Historians argue that women did more farming and more women were enslaved within Africa.`
      },
      {
        category: 'Intellectual',
        title: 'Knowledge crossed with people',
        body: `Afonso I wrote to the king of Portugal, sent young nobles to study there, and saw his son made a bishop in 1518. Enslaved West Africans carried rice-farming knowledge west, though historians argue over its effect. The unit says little else about ideas here.`
      },
      {
        category: 'Technological',
        title: 'Guns on land, forts on the shore',
        body: `Morocco's army carried firearms across the Sahara to Tondibi in 1591, and Asante bought guns from Dutch and English traders as it rose. Portuguese ships and forts such as Elmina (1482) brought European power to the coast, but not far beyond it.`
      },
      {
        category: 'Economic',
        title: 'Gold, captives, cloth and new crops',
        body: `Gold, ivory and, more and more, captives went out; Indian cloth, Maldive cowries, guns, iron and alcohol came in. The Atlantic slave trade grew from about 278,000 people in the 1500s to more than 2.5 million in the fifty years from 1701 to 1750. Maize and cassava became staples, and Swahili merchants kept trading.`
      }
    ]
  }
};
