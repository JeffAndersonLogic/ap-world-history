'use strict';

/**
 * Unit 4 by region: the Middle East and Dar al-Islam.
 * One story of the Islamic heartlands from Morocco to Persia, 1450 to 1750, in four sections:
 * the instruments, tables and sails that reached European ships through the Islamic world
 * (KC-4.1.II, KC-4.1.II.A); the spice war at sea, Mamluk and Ottoman fleets against the
 * Portuguese (attacks from 1500, passes from 1502, Diu 1509, Ottoman Egypt from 1517) and the
 * recovery of the Red Sea route (KC-4.3.III.ii, KC-4.3.II.A.iii); the Ottoman Empire's many
 * peoples, its welcome to Jews expelled from Spain and Portugal, women by class, and the older
 * export of enslaved Africans to the Mediterranean and the Indian Ocean (KC-4.3.I.B, KC-4.3 via
 * Topic 4.8, KC-4.2.II.B); and guns and cash after about 1580: Morocco against Songhai, timars
 * giving way to tax farms, New Julfa (1605), Persia at Hormuz and Oman at Muscat and Mombasa,
 * and the Middle East as a market for cash crops (KC-4.3.III.ii, KC-4.2.III.B, KC-4.3.II.A.iii,
 * KC-4.1.IV, KC-4.1.V.B). This is the thinnest region in the Unit 4 CED and the chapter says so
 * rather than padding: the rise of the Ottomans and Safavids belongs to Unit 3 and is left
 * there; coffee is left out because no source file supports it for this region; the 4.3
 * ledger's narrowing (sugar went mostly to Europe) is kept; tobacco and maize are the only
 * American crops named. Busbecq is left out (his line is about palace servants, not timar
 * cavalry). The 4.1 ledger's corrections are kept: the lateen sail's oldest evidence is
 * Roman-era Mediterranean and its first use is debated, and Indian Ocean pilots used the kamal
 * and wooden quadrants rather than the astrolabe at sea. Diu 1509 is Mamluk with Ottoman
 * supplies, not Ottoman (4.4 ledger). Morocco and Songhai is told from Morocco's side, with a
 * modest pointer to the Sub-Saharan Africa chapter for what followed in Songhai.
 *
 * Plain-language and accuracy pass (2026-11-21), after the five-persona stress test of
 * 2026-11-17 (docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md), following the East Asia method:
 * sentences cut to one idea each and the chapter cut by about a fifth; the College Board's
 * words moved out of the story into one "What the College Board says" box per section, quoted
 * word for word from scripts/lib/ced-source/unit-4.js, with illustrative examples labelled as
 * the College Board's examples (astronomical charts and the lateen sail, the Muslim and
 * European rivalry, Gujaratis, the Jews' expulsion and acceptance, the women's varying status,
 * Morocco and Songhai, Ottoman timars, Omanis); KC-4.1.IV's regional-markets sentence quoted
 * whole; Portugal's motives told as Topic 4.2 tells them (the middlemen, West African gold,
 * and the crusading inheritance from Ceuta, 1415) in place of the papal bulls; the Swahili
 * towns' appeal to Oman added; Topic 4.8 added to `topics` for KC-4.3; six closing cards, one
 * per side. Secondary details cut in this pass: Ptolemy's astronomy, Zacuto's 1470s writing
 * date, Mecca and Medina, the Unit 3 connective sentence, Salonica's Jewish majority, the
 * millet aside, the names of Kösem's son and grandson, the limit on building churches and
 * synagogues, the Ya'rubid name and Murad IV's tobacco ban.
 *
 * Second plain-language pass (2026-11-21), to the rewrite brief's addendum: every "What the
 * College Board says" box now opens with an "In short:" sentence, quotes whole Key Concept
 * sentences (each Key Concept in one box only; KC-4.1.II.A's dash shown as " ... "), and gives
 * the illustrative examples in paragraphs starting "An optional College Board example:"; a
 * five-sentence `inShort` added; definitions moved out from between commas into parentheses or
 * their own sentences; sultan, regent, pilot, siege, middlemen, Iberia, refugees, testify,
 * cavalry, shah, Swahili towns, plantations and cash crops defined; idioms replaced; cross-region
 * references written as whole sentences (a new one to the South and Southeast Asia chapter's
 * Diu section and to the Sub-Saharan Africa chapter's Swahili towns); the six closing cards
 * rewritten as one claim plus dated evidence, each fact on the card of its own kind. No date
 * dropped. Hürrem is now dated to the 1500s (she married Suleiman, who reigned 1520 to 1566).
 *
 * Review pass 1 (2026-11-22, ledger D1 to D5, G15b, G15c): the lands of Islam in 1450 now reach
 * from West Africa to Southeast Asia, with this chapter following Morocco to Persia; the Toledan
 * Tables (about 1080) are Muslim work, updated in the 1270s by Jewish astronomers for Alfonso X,
 * and Zacuto's tables (1496) are based on that later version; the cash-crop sentence no longer
 * implies other crops went to the Middle East; the Moroccan army left late in 1590, fought in
 * March 1591, and "many" of its men, not all, carried firearms; the Morocco and Songhai example
 * now sits in section 2's box under its own Key Concept (KC-4.3.III.ii).
 *
 * Review pass 2 (2026-11-22, ledger I1 to I6, J4, Q3, Q8): guns are said to have mattered more
 * in battle, not to have won the Ottomans more wars (the Long War of 1593 to 1606 was a
 * stalemate; Pamuk on the cash cost of paid infantry); Morocco took plunder and caravans of gold
 * to Marrakesh in the 1590s but never won the gold trade; the lateen sail sails much closer to
 * the wind than a square sail (Topic 4.1's wording), not against it; KC-4.1.II.A is printed with
 * the CED's dash and KC-4.3.I.B with its curly apostrophe; the mistake box names the kamal only,
 * since quadrant use at sea is disputed (this supersedes the note above on wooden quadrants);
 * the Alfonsine work is dated about 1263 to 1272, not "the 1270s"; and KC-4.1.IV is now quoted
 * whole and taught whole: the English East India Company's 1600 charter and monopoly at Hormuz,
 * and Persia's silk sold to Europe for silver, much of it American, much of which went on to
 * India (Rudolph Matthee, The Politics of Trade in Safavid Iran: Silk for Silver, 1600 to 1730).
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-middle-east',
  slug: 'region-4-middle-east',
  unit: '4',
  region: 'The Middle East and Dar al-Islam',
  titleHtml: 'The Middle East and <em>Dar al-Islam</em>',
  deck: `From 1450 to 1750, the lands of Islam were part of the new ocean story. Their science and sailing knowledge helped European ships cross the oceans. Their states fought Portugal for the spice trade and kept much of it. And the Ottoman Empire grew strong by ruling many peoples.`,
  inShort: [
    `Knowledge from the Islamic world, such as star tables and sailing tools, helped European ships cross the oceans.`,
    `Portugal attacked the Muslim spice trade, but the old Red Sea route recovered by the middle of the 1500s.`,
    `The Ottoman Empire ruled Muslims, Christians and Jews by making room for them, not by making them equal.`,
    `In the late 1500s guns changed war: Morocco beat Songhai, and Ottoman cavalry gave way to tax farms.`,
    `Persia and Oman drove the Portuguese from key ports, and American crops reached the Middle East.`
  ],
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.7', '4.8'],
  ced: [
    'KC-4.1.II',
    'KC-4.1.II.A',
    'KC-4.1.IV',
    'KC-4.1.V.B',
    'KC-4.2.II.B',
    'KC-4.2.III.B',
    'KC-4.3',
    'KC-4.3.I.B',
    'KC-4.3.II.A.iii',
    'KC-4.3.III.ii'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'knowledge',
      num: '01',
      accent: 'gold',
      name: 'Knowledge That Sailed West',
      navLabel: 'Knowledge',
      dates: 'Before 1450 to c. 1500 &nbsp;·&nbsp; Instruments, tables, sails and pilots',
      thesis: `European ships crossed the oceans with knowledge built up over centuries. Much of it came from the Islamic world. Europe's part was to combine this knowledge, build new ships and learn the Atlantic's winds.`,
      parts: [
        {
          heading: 'A world of scholars and sailors',
          blocks: [
            { p: `In 1450 the lands of Islam reached from West Africa to Southeast Asia. They included the East African coast, Central Asia and much of India. This chapter follows the lands from Morocco to Persia. Muslim scholars called this world <span class="kt">Dar al-Islam</span> (Arabic for "the house of Islam"). It was not one state. It was many lands joined by Islamic law, the Arabic language and trade.` },
            { p: `One example of its learning is the <span class="kt">astrolabe</span>. This tool measures how high the sun or a star stands in the sky. The idea was Greek, but astronomers in the Islamic world made it precise. It reached Europe through Muslim Spain. In the 1100s and 1200s, Christian and Jewish translators in the Spanish city of Toledo turned Arabic science books into Latin.` },
            { p: `By the 1480s, Portuguese pilots (the sailors who guided ships) used a heavy sea astrolabe. With it they measured the sun's height at noon. A pilot then turned that reading into a <span class="kt">latitude</span> (how far north or south of the equator the ship was).` },
            { p: `For that, a pilot needed <span class="kt">astronomical charts</span>. These were tables of where the sun stands each day. Muslim astronomers in Toledo built such tables around <span class="num">1080</span>. From about <span class="num">1263</span> to <span class="num">1272</span>, Jewish astronomers updated them. They worked for Alfonso X, the king of Castile in Spain. Abraham Zacuto's tables were printed in Portugal in <span class="num">1496</span>. They were based on that later version.` }
          ]
        },
        {
          heading: 'Sails, winds and pilots',
          blocks: [
            { p: `The triangular <span class="kt">lateen sail</span> lets a ship sail much closer to the wind than a square sail does. This means it can head more nearly into the wind. Its oldest evidence is from the Roman Mediterranean, though its first use is debated. It was common across Islamic seas. The first Portuguese caravels (small exploring ships) used it.` },
            { p: `Arab and other Indian Ocean sailors planned their voyages around the <span class="kt">monsoon</span>. The monsoon is a wind that reverses twice a year on schedule. They measured the stars with the <span class="kt">kamal</span>. This was a wooden card on a knotted string.` },
            { p: `At the East African trading town of Malindi, Vasco da Gama hired a pilot who knew the way to India. In May <span class="num">1498</span> he reached the Indian port of Calicut (<a href="#chapter-t4-2">Topic 4.2</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Arabs invented the lateen sail. Its oldest evidence is centuries older than Islam. At sea, Indian Ocean pilots measured the stars with the kamal. The astrolabe was mainly a tool for astronomers on land.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Europe's ocean voyages used older knowledge, much of it from the Islamic world.`,
                `<a href="#chapter-t4-1">Topic 4.1</a>: "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation."`,
                `<a href="#chapter-t4-1">Topic 4.1</a>: "The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible."`,
                `An optional College Board example: the lateen sail and astronomical charts.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Dar al-Islam', 'Arabic for "the house of Islam": the lands under Islamic law and Muslim rulers.'],
        ['Astronomical charts', 'Tables of where the sun stands each day. Pilots used them to find a latitude.'],
        ['Lateen sail', 'A triangular sail that lets a ship sail much closer to the wind than a square sail does.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'spicewar',
      num: '02',
      accent: 'rust',
      name: 'The Spice War at Sea',
      navLabel: 'Spice war',
      dates: '1498 to c. 1600 &nbsp;·&nbsp; Mamluks, Ottomans and Portuguese in the Red Sea',
      thesis: `Portugal tried to take the spice trade by force. The Muslim states that earned money from that trade fought back. They lost battles, but the old route through the Red Sea survived.`,
      parts: [
        {
          heading: 'The old road, and what Portugal wanted',
          blocks: [
            { p: `Before 1500, pepper from India crossed the ocean to the Red Sea or the Persian Gulf. Then it went overland to the Mediterranean. At every step it was taxed and sold again. Much of that money went to Muslim states and merchants.` },
            { p: `The richest stop was Egypt. Egypt was ruled by the <span class="kt">Mamluks</span>. They were an elite of soldiers who began as slaves. Their leader ruled as <span class="kt">sultan</span> (a Muslim ruler).` },
            { p: `Portugal wanted to get rid of those middlemen. Middlemen are traders who buy goods and sell them again at a higher price. Portugal wanted to buy pepper in India itself. It also wanted West Africa's gold.` },
            { p: `Portugal also had a religious motive. Its push overseas began in <span class="num">1415</span>, when it captured the Muslim port of Ceuta in North Africa. That attack continued the long wars of Christian Iberia (Spain and Portugal) against Muslim powers (<a href="#chapter-t4-2">Topic 4.2</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottomans "closed" the spice routes after taking Constantinople (Istanbul) in <span class="num">1453</span>. The main route ran through Mamluk Egypt, and Egypt became Ottoman only in <span class="num">1517</span>. Spice prices did not rise sharply after 1453.`
            } }
          ]
        },
        {
          heading: 'Passes, forts and Diu',
          blocks: [
            { p: `From <span class="num">1500</span>, Portuguese ships attacked Muslim ships. From <span class="num">1502</span>, they sold passes to many Asian ships and seized ships that had none. A pass was called a <span class="kt">cartaz</span>. In <span class="num">1515</span> the Portuguese took the port of <b>Hormuz</b> at the mouth of the Persian Gulf (<a href="#chapter-t4-4">Topic 4.4</a>).` },
            { p: `Mamluk Egypt fought back. The Ottoman Empire helped with timber and guns. The Ottomans ruled a large Muslim empire from Istanbul. Egypt sent a fleet to join ships from Gujarat and Calicut in India. In <span class="num">1509</span> the Portuguese defeated them off the port of Diu in western India.` },
            { p: `The real question in this fight was which route, and whose ships, would carry the spices (<a href="#chapter-t4-5">Topic 4.5</a>). <a href="#r4-south-southeast-asia-ocean">The South and Southeast Asia chapter</a> tells what Gujarat did after the battle.` },
            { p: `In <span class="num">1517</span> the Ottoman Empire conquered Egypt and took over the war at sea. Ottoman fleets fought the Portuguese through the 1500s. In <span class="num">1538</span> they put the Portuguese fort at Diu under siege (surrounded it to force it to give up). The siege failed.` }
          ]
        },
        {
          heading: 'The route that would not close',
          blocks: [
            { p: `Portuguese patrols cut the flow of pepper up the Red Sea for about two decades. Then the route recovered. By the middle of the 1500s, spices again reached the Mediterranean that way in large amounts. Gujarati ships kept sailing to the Red Sea with cargo and pilgrims (people on a religious journey).` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Quarrels over trade led to wars, but the old Asian trade of the Indian Ocean went on.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states."`,
                `An optional College Board example: the rivalry between Muslim and European powers in the Indian Ocean.`,
                `An optional College Board example: the Moroccan conflict with the Songhai Empire. <a href="#r4-middle-east-pushback">Section 4</a> of this chapter tells it.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants."`,
                `An optional College Board example: Gujarati merchants.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Sultan', 'The title of a Muslim ruler.'],
        ['Mamluks', 'Soldiers who began as slaves. Their sultans ruled Egypt until 1517.'],
        ['Cartaz', 'A pass the Portuguese sold to Asian ships. A ship without one could be seized.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'peoples',
      num: '03',
      accent: 'iron',
      name: 'An Empire of Many Peoples',
      navLabel: 'Many peoples',
      dates: '1492 to 1700s &nbsp;·&nbsp; The Ottoman Empire: faiths, women and the enslaved',
      thesis: `The Ottoman Empire ruled Muslims, Christians and Jews. It held them together by making room for their differences and using their skills. It did not make them equal.`,
      parts: [
        {
          heading: 'A refuge for Spain\'s Jews',
          blocks: [
            { p: `In <span class="num">1492</span> Spain ordered every Jew who would not become Christian to leave. In <span class="num">1497</span> Portugal had most of its Jews baptized (made Christian) by force. <a href="#r4-europe-crowns">The Europe chapter</a> tells this part of the story.` },
            { p: `The Ottoman sultan <b>Bayezid II</b> let the refugees (people fleeing danger) settle in his empire. Thousands came to Istanbul, to Salonica (today Thessaloniki in Greece) and to other cities. Exiles from Spain set up Istanbul's first printing press. It printed books in Hebrew.` },
            { p: `Why did the sultan welcome them? They were merchants, doctors, craftsmen and taxpayers, and the empire gained from their work. Spain made the opposite choice (<a href="#chapter-t4-7">Topic 4.7</a>).` }
          ]
        },
        {
          heading: 'Room, not equality',
          blocks: [
            { p: `The empire already ruled millions of Christians and Jews. Under an old rule of Islamic law, they were <span class="kt">protected subjects</span>. They could practice their religion. Their own leaders ran their marriages, inheritances and schools. Many also used the Islamic court when it helped them. The details differed by city and century.` },
            { p: `This was <span class="kt">accommodation</span>: making room for a group's differences. It was not equality. Christians and Jews paid a special tax called the <span class="kt">jizya</span>. In an Islamic court they generally could not testify (speak as a witness) against a Muslim. The top posts in the army and government went to Muslims.` },
            { p: `The empire shaped these peoples, and they shaped it. The exiles brought printing. Christian and Jewish merchants carried much of the empire's trade.` }
          ]
        },
        {
          heading: 'Women and the enslaved, by class',
          blocks: [
            { p: `How an Ottoman woman lived depended on her class. At the top was <b>Hürrem</b>. In the 1500s she began as an enslaved woman in the palace. She became the wife of Sultan Suleiman. She paid for a mosque complex in Istanbul with a school, a soup kitchen and a hospital.` },
            { p: `In the next century, <b>Kösem</b> governed as <span class="kt">regent</span>. A regent rules for a monarch who is too young to rule. Kösem ruled for her young son and later for her grandson.` },
            { p: `In the towns, ordinary women owned property. They went to court over inheritances, debts and divorces. Still, a daughter inherited only half what a son did. At the bottom, enslaved women served wealthy households as servants and concubines (enslaved partners). They had almost no control over their own lives.` },
            { p: `Enslaved people came from north of the Black Sea, from the Caucasus mountains, from wars and from Africa. African captives were carried north across the Sahara to the Mediterranean. Others went east across the Red Sea and the Indian Ocean to Arabia, Persia and India.` },
            { p: `These trades were centuries old before 1500, and they went on through this period. <a href="#r4-sub-saharan-africa-slave-trade">The Sub-Saharan Africa chapter</a> tells them from Africa's side.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Lady Mary Wortley Montagu was the wife of Britain's ambassador (official representative) to the Ottoman Empire. In a letter dated <span class="num">1717</span>, she wrote: "I look upon the Turkish women as the only free people in the empire." Read her with care. She met mostly wealthy women. She also rewrote her letters later for other readers.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: The Ottomans made room for different peoples when that helped the state, and Africa's old slave trades went on.`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy."`,
                `An optional College Board example: the expulsion of Jews from Spain and Portugal and their acceptance in the Ottoman Empire.`,
                `An optional College Board example: the varying status of different classes of women within the Ottoman Empire.`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Protected subjects', 'Christians and Jews under Islamic rule. They could practice their religion but paid the jizya.'],
        ['Jizya', 'A special tax paid by non-Muslims in Muslim states.'],
        ['Accommodation', 'Making room for a group\'s differences, usually because the state gains from it.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'pushback',
      num: '04',
      accent: 'oxide',
      name: 'Guns, Cash and Pushing Back',
      navLabel: 'Pushing back',
      dates: '1578 to 1750 &nbsp;·&nbsp; Morocco, the Ottoman cavalry, Persia and Oman',
      thesis: `By the late 1500s, war depended on guns and money. Morocco sent soldiers with guns across the Sahara. The Ottoman state needed cash to pay its own soldiers with guns, so it relied less on its cavalry. Persia and Oman drove out the Portuguese.`,
      parts: [
        {
          heading: 'Morocco crosses the Sahara',
          blocks: [
            { p: `Morocco lies in the far west of North Africa. The Ottomans never ruled it. <b>Ahmad al-Mansur</b> became Morocco's sultan in <span class="num">1578</span>. He wanted the riches to the south. The <b>Songhai Empire</b> controlled West Africa's gold trade and the Sahara's salt mines. In the 1580s the two states quarreled over the salt mine at Taghaza.` },
            { p: `Late in <span class="num">1590</span>, al-Mansur sent an army of about four thousand men across the desert. Many of them carried firearms. In March <span class="num">1591</span> they defeated the Songhai army at <b>Tondibi</b>. Gold and salt were a large part of the reason. It was another quarrel over trade that turned into war (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { p: `Winning brought Morocco plunder. In the 1590s, caravans carried gold back to Marrakesh (al-Mansur's capital). But Morocco did not win the gold trade. Al-Mansur seems to have believed that Songhai owned the gold mines. It did not. His pashas (governors) ruled Timbuktu, but Morocco never controlled the gold supply. Much of the gold went to other buyers, including Europeans on the coast. <a href="#r4-sub-saharan-africa-kingdoms">The Sub-Saharan Africa chapter</a> tells what Songhai did next.` }
          ]
        },
        {
          heading: 'From cavalry to tax farms',
          blocks: [
            { p: `Guns also weakened an old Ottoman elite. The core of the army had been cavalry (soldiers on horseback). Each of these horsemen was called a <span class="kt">sipahi</span>. A sipahi held a <span class="kt">timar</span>. A timar was the right to collect the taxes of a piece of land. In return, the sipahi rode to war.` },
            { p: `From the late 1500s, foot soldiers with guns mattered more and more in battle. Unlike the sipahis, they had to be paid in cash. So the state turned more and more timar land into <span class="kt">tax farms</span>. A tax farm was the right to collect a district's taxes. The state sold it to the highest bidder. From <span class="num">1695</span>, tax farms were sold for life.` },
            { p: `The sipahis lost their importance, though the timar system was not ended by law until <span class="num">1831</span>. Tax farmers and powerful families in the provinces (the regions of the empire) rose in their place (<a href="#chapter-t4-7">Topic 4.7</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottoman Empire simply declined. Historians now say the state changed the way it worked and kept going.`
            } }
          ]
        },
        {
          heading: 'Persia and Oman drive out the Portuguese',
          blocks: [
            { p: `Persia's Safavid kings were called <span class="kt">shahs</span>. In <span class="num">1605</span> Shah Abbas I moved Armenians by force to <span class="kt">New Julfa</span>. This new town stood just outside Isfahan, his capital. Its merchants traded from India to the Mediterranean. They worked through family firms (businesses run by families). This was an old way of doing business.` },
            { p: `Persia sold much of its silk to Europe, and it was paid largely in silver. Much of that silver came from Spain's colonies in the Americas. A large part of it then went on east to India, to pay for Indian goods.` },
            { p: `In <span class="num">1622</span> Shah Abbas took Hormuz from the Portuguese. Ships of the English East India Company helped him. In <span class="num">1600</span> England's crown had given this company a charter (an official license). The charter gave it a <span class="kt">monopoly</span> (the sole right) on English trade with Asia.` },
            { p: `<b>Oman</b> was an Arabian state at the mouth of the Persian Gulf. In <span class="num">1650</span> it drove the Portuguese from its port of <b>Muscat</b>. Some Swahili towns (Muslim trading towns on the East African coast) asked Oman for help against the Portuguese. The Omanis were merchants as well as fighters.` },
            { p: `Fort Jesus was Portugal's fortress in the Swahili town of <b>Mombasa</b>. Omani forces put it under siege in <span class="num">1696</span>. They took it in <span class="num">1698</span>. <a href="#r4-sub-saharan-africa-kingdoms">The Sub-Saharan Africa chapter</a> tells the Swahili towns' side.` }
          ]
        },
        {
          heading: 'New goods in old markets',
          blocks: [
            { p: `The Columbian Exchange reached these lands too. It was the movement of plants, animals and diseases between the Americas and the rest of the world. In the Americas, plantations (large farms) grew cash crops with forced labor. Cash crops are crops grown to sell. Most American sugar and tobacco went to Europe. Some reached the Middle East too.` },
            { p: `Tobacco arrived in Ottoman cities around 1600, and Ottoman farmers soon grew their own. <span class="kt">Maize</span> (corn) also came from the Americas. Farmers began to grow it as a food crop in Ottoman lands such as the Balkans (southeastern Europe) and Egypt.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Old elites rose or fell under stronger rulers, chartered companies and American silver moved goods, regional trade kept going, and American crops spread.`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders."`,
                `An optional College Board example: Ottoman timars.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants."`,
                `An optional College Board example: Omani merchants (<a href="#chapter-t4-4">Topic 4.4</a>).`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Timar', 'The right to collect a piece of land\'s taxes, given to a cavalryman (sipahi) for military service.'],
        ['Tax farm', 'The right to collect a district\'s taxes, sold for cash. From 1695 they were sold for life.']
      ]
    }
  ],

  closing: {
    heading: 'The Middle East at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, sorted into six kinds of evidence for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `After 1500, the Portuguese attacked the old spice route with warships and passes. By 1600, how much had that route changed? Make a claim. Then support it with one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Muslim states stayed strong, won new lands and took ports back from Portugal.',
        body: `The Ottomans took Mamluk Egypt in 1517 and fought Portugal at sea. Morocco beat Songhai at Tondibi in 1591. Persia took Hormuz in 1622, and Oman took Muscat in 1650 and Mombasa in 1698.`
      },
      {
        category: 'Religious',
        title: 'The Ottomans made room for Christians and Jews but did not make them equal.',
        body: `After Spain expelled its Jews in 1492, Sultan Bayezid II let them settle in Ottoman cities. Christians and Jews ran their own marriages and schools, but they paid the jizya.`
      },
      {
        category: 'Social',
        title: 'Class decided how an Ottoman woman lived, and the enslaved had the least power.',
        body: `In the 1500s Hürrem rose from slavery to marry Sultan Suleiman, and in the 1600s Kösem ruled as regent. Townswomen owned property and went to court. Enslaved women served wealthy households.`
      },
      {
        category: 'Intellectual',
        title: 'Science from the Islamic world helped Europeans find their way at sea.',
        body: `In the 1100s and 1200s, translators in Toledo turned Arabic science books into Latin. Muslim astronomers in Toledo made sun tables around 1080, and Jewish astronomers updated them from about 1263 to 1272. Zacuto's tables (printed in Portugal in 1496) were based on that later version.`
      },
      {
        category: 'Technological',
        title: 'Sails, star tools and guns changed how people traveled and fought.',
        body: `The lateen sail was used on the first Portuguese caravels, and Portuguese pilots used a sea astrolabe by the 1480s. Moroccan firearms won at Tondibi in 1591. From the late 1500s, foot soldiers with guns mattered more and more in Ottoman armies, so cavalry mattered less.`
      },
      {
        category: 'Economic',
        title: 'The old trade routes survived Portugal\'s attack, and the region\'s merchants kept trading.',
        body: `Portugal sold passes from 1502, but by the middle of the 1500s spices again reached the Mediterranean by the Red Sea. In 1605 Shah Abbas moved Armenian merchants to New Julfa, and they traded from India to the Mediterranean.`
      }
    ]
  }
};
