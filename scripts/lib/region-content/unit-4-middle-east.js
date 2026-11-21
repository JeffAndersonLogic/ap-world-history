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
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r4-middle-east',
  slug: 'region-4-middle-east',
  unit: '4',
  region: 'The Middle East and Dar al-Islam',
  titleHtml: 'The Middle East and <em>Dar al-Islam</em>',
  deck: `From 1450 to 1750, the Islamic lands were part of the new ocean story. Their science and sailing knowledge rode on European ships. Their states fought Portugal for the spice trade and kept much of it. And the Ottoman Empire grew strong by ruling many peoples.`,
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
      thesis: `European ships crossed the oceans with knowledge built up over centuries, much of it in the Islamic world. Europe's part was to put the pieces together, build new ships and learn the Atlantic's winds.`,
      parts: [
        {
          heading: 'A world of scholars and sailors',
          blocks: [
            { p: `In 1450 the lands of Islam stretched from Morocco to Persia. Muslim scholars called this world <span class="kt">Dar al-Islam</span>, Arabic for "the house of Islam." It was not one state. It was many lands joined by Islamic law, the Arabic language and trade.` },
            { p: `Take the <span class="kt">astrolabe</span>, a tool that measures how high the sun or a star stands. The idea was Greek, but astronomers in the Islamic world made it precise. It reached Europe through Muslim Spain. In the Spanish city of Toledo, in the 1100s and 1200s, Christian and Jewish translators turned Arabic science books into Latin.` },
            { p: `By the 1480s, Portuguese pilots used a heavy sea astrolabe to measure the sun's height at noon. To turn that reading into a <span class="kt">latitude</span>, the ship's distance north or south of the equator, a pilot needed <span class="kt">astronomical charts</span>. These were tables of where the sun stands each day. Muslim and Jewish astronomers in Toledo built such tables around <span class="num">1080</span>. The tables of Abraham Zacuto, printed in Portugal in <span class="num">1496</span>, grew from theirs.` }
          ]
        },
        {
          heading: 'Sails, winds and pilots',
          blocks: [
            { p: `The triangular <span class="kt">lateen sail</span> lets a ship sail against the wind. Its oldest evidence is from the Roman Mediterranean, though its first use is debated. It was common across Islamic seas, and it rigged the first Portuguese caravels, small exploring ships.` },
            { p: `Indian Ocean sailors, Arabs among them, planned voyages around the <span class="kt">monsoon</span>, winds that reverse twice a year on schedule. They measured the stars with the <span class="kt">kamal</span>, a wooden card on a knotted string. At Malindi, on the Swahili coast of East Africa, Vasco da Gama took on a pilot who knew the way to India. In May <span class="num">1498</span> he reached Calicut (<a href="#chapter-t4-2">Topic 4.2</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Arabs invented the lateen sail: its oldest evidence is centuries older than Islam. And Indian Ocean pilots mostly used the kamal and wooden quadrants at sea. The astrolabe was mainly an astronomer's tool on land.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-1">Topic 4.1</a>: "Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation." The lateen sail and astronomical charts are two of the College Board's examples.`,
                `<a href="#chapter-t4-1">Topic 4.1</a>: the developments included "new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Dar al-Islam', 'Arabic for "the house of Islam": the lands under Islamic law and Muslim rulers.'],
        ['Astronomical charts', 'Tables of where the sun stands each day, used to turn a sun reading into a latitude.'],
        ['Lateen sail', 'A triangular sail that lets a ship sail against the wind. It was common in Islamic seas.']
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
      thesis: `Portugal tried to take the spice trade by force. The Muslim states that lived off that trade fought back. They lost battles, but the old route through the Red Sea survived.`,
      parts: [
        {
          heading: 'The old road, and what Portugal wanted',
          blocks: [
            { p: `Before 1500, pepper from India crossed the ocean to the Red Sea or the Persian Gulf. Then it went overland to the Mediterranean. At every step it was taxed and sold again, and much of that money went to Muslim states and merchants. The richest stop was Egypt, ruled by the <span class="kt">Mamluks</span>, sultans drawn from an elite of slave soldiers.` },
            { p: `Portugal wanted to cut out those middlemen and buy pepper at the source. It also wanted West Africa's gold. And it had a religious motive. Its push overseas began in <span class="num">1415</span>, when it captured Ceuta, a Muslim port in North Africa. That carried on Christian Iberia's long wars against Muslim powers (<a href="#chapter-t4-2">Topic 4.2</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottomans "closed" the spice routes after taking Constantinople in <span class="num">1453</span>. The main route ran through Mamluk Egypt, which became Ottoman only in <span class="num">1517</span>. Spice prices did not jump after 1453. Portugal went to sea for profit, gold and faith, not to escape a blockade.`
            } }
          ]
        },
        {
          heading: 'Passes, forts and Diu',
          blocks: [
            { p: `From <span class="num">1500</span>, Portuguese ships attacked Muslim ships. From <span class="num">1502</span>, they sold passes, the <span class="kt">cartaz</span>, to many Asian ships, and seized ships that had none. In <span class="num">1515</span> they took <b>Hormuz</b>, at the mouth of the Persian Gulf (<a href="#chapter-t4-4">Topic 4.4</a>).` },
            { p: `Mamluk Egypt fought back. With Ottoman timber and guns, it sent a fleet to join ships from Gujarat and Calicut, in India. In <span class="num">1509</span>, off the port of Diu in western India, the Portuguese defeated them. At its heart, the fight was about which route, and whose ships, would carry the spices (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { p: `In <span class="num">1517</span> the Ottoman Empire conquered Egypt and took over the war at sea. Ottoman fleets fought the Portuguese through the 1500s. In <span class="num">1538</span> they besieged the Portuguese at Diu, but the siege was lifted.` }
          ]
        },
        {
          heading: 'The route that would not close',
          blocks: [
            { p: `Portuguese patrols cut the flow of pepper up the Red Sea for about two decades. Then the route recovered. By the middle of the 1500s, spices again reached the Mediterranean that way in large amounts. Gujarati ships kept sailing to the Red Sea with cargo and pilgrims.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Economic disputes led to rivalries and conflict between states." The rivalry between Muslim and European powers in the Indian Ocean is one of the College Board's examples.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: despite "some disruption and restructuring," existing Indian Ocean trade networks "continued to flourish and included intra-Asian trade and Asian merchants." Gujaratis are one of the College Board's examples of those merchants.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Mamluks', 'The soldier-sultans who ruled Egypt until the Ottomans conquered it in 1517.'],
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
      thesis: `The Ottoman Empire ruled Muslims, Christians and Jews. It held them together by making room for their differences and putting them to use. It did not make them equal.`,
      parts: [
        {
          heading: 'A refuge for Spain\'s Jews',
          blocks: [
            { p: `In <span class="num">1492</span> Spain ordered every Jew who would not become Christian to leave. In <span class="num">1497</span> Portugal had most of its Jews baptized by force (<a href="#r4-europe-crowns">the Europe chapter</a> tells that side). The Ottoman sultan <b>Bayezid II</b> let the refugees settle. Thousands came to Istanbul, to Salonica (today Thessaloniki, in Greece) and to other cities. Exiles from Spain set up Istanbul's first printing press, for books in Hebrew.` },
            { p: `Why welcome them? They were merchants, doctors, craftsmen and taxpayers, and the empire gained from them. Spain made the opposite choice (<a href="#chapter-t4-7">Topic 4.7</a>).` }
          ]
        },
        {
          heading: 'Room, not equality',
          blocks: [
            { p: `The empire already ruled millions of Christians and Jews. Under an old rule of Islamic law, they were <span class="kt">protected subjects</span>. They could practice their religion, and their own leaders ran their marriages, inheritances and schools. Many also used the Islamic court when it suited them. The details differed by city and century.` },
            { p: `This was <span class="kt">accommodation</span>: making room for a group's differences. It was not equality. Christians and Jews paid a special tax, the <span class="kt">jizya</span>. In an Islamic court they generally could not testify against a Muslim. The top posts in the army and government went to Muslims.` },
            { p: `The empire shaped these peoples, and they shaped it. The exiles brought printing, and Christian and Jewish merchants carried much of its trade.` }
          ]
        },
        {
          heading: 'Women and the enslaved, by class',
          blocks: [
            { p: `How an Ottoman woman lived depended on her class. At the top, <b>Hürrem</b> began as an enslaved woman in the palace. She became Sultan Suleiman's wife and paid for a mosque complex in Istanbul, with a school, a soup kitchen and a hospital. In the next century, <b>Kösem</b> governed as regent, ruling for her young son and later her grandson.` },
            { p: `In the towns, ordinary women owned property and went to court over inheritances, debts and divorces. Still, a daughter inherited only half what a son did. At the bottom, enslaved women served wealthy households as servants and concubines (enslaved partners). They had almost no say over their own lives.` },
            { p: `Enslaved people came from north of the Black Sea, from the Caucasus, from wars and from Africa. African captives were carried north across the Sahara to the Mediterranean. Others went east across the Red Sea and the Indian Ocean to Arabia, Persia and India. These trades were centuries old before 1500 and went on through this period (<a href="#r4-sub-saharan-africa-slave-trade">the Sub-Saharan Africa chapter</a> tells it from Africa).` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `In a letter dated <span class="num">1717</span>, Lady Mary Wortley Montagu, wife of Britain's ambassador, wrote: "I look upon the Turkish women as the only free people in the empire." Read her with care. She met mostly wealthy women, and she later polished her letters for readers.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-7">Topic 4.7</a>: states "such as the Mughal and Ottoman empires" adopted practices "to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions" of different groups. Others "suppressed diversity." Two of the College Board's examples are in this section: the expulsion of Jews from Spain and Portugal and their acceptance in the Ottoman Empire, and the varying "status of different classes of women within the Ottoman Empire".`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Protected subjects', 'Christians and Jews under Islamic rule, free to practice their religion but paying the jizya and living with limits.'],
        ['Jizya', 'A special tax paid by non-Muslims in Muslim states.'],
        ['Accommodation', 'A state making room for a group\'s differences, usually because the state gains from it.']
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
      thesis: `By the late 1500s, war ran on guns and money. Morocco sent gunmen across the Sahara, and the Ottoman sultan traded cavalry for cash. Persia and Oman pushed out the Portuguese.`,
      parts: [
        {
          heading: 'Morocco crosses the Sahara',
          blocks: [
            { p: `Morocco, in the far west, was never ruled by the Ottomans. Its sultan from <span class="num">1578</span>, <b>Ahmad al-Mansur</b>, looked south. The <b>Songhai Empire</b> controlled West Africa's gold trade and the Sahara's salt mines. In the 1580s the two states quarreled over the salt mine at Taghaza.` },
            { p: `Al-Mansur sent about four thousand men with firearms across the desert. In <span class="num">1591</span> they defeated the Songhai army at <b>Tondibi</b>. Gold and salt were a large part of the reason. It was another economic dispute that turned to war (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { p: `The prize proved hard to hold. Al-Mansur seems to have believed that Songhai held the gold mines themselves, but it did not. His pashas (governors) ruled Timbuktu, yet Morocco never controlled the gold supply. Much of the gold went to other buyers, including Europeans on the coast. (<a href="#r4-sub-saharan-africa-kingdoms">The Sub-Saharan Africa chapter</a> tells what followed in Songhai.)` }
          ]
        },
        {
          heading: 'From cavalry to tax farms',
          blocks: [
            { p: `Guns also squeezed an old Ottoman elite. The army's core had been the <span class="kt">sipahi</span>, a cavalryman. He held a <span class="kt">timar</span>: the right to collect the taxes of a piece of land, in return for riding to war.` },
            { p: `From the late 1500s, foot soldiers with guns won more and more wars, and they had to be paid in cash. So the state turned more and more timar land into <span class="kt">tax farms</span>. A tax farm was the right to collect a district's taxes, sold to the highest bidder. From <span class="num">1695</span> they were sold for life.` },
            { p: `The sipahis faded, though the timar system was not abolished until <span class="num">1831</span>. Tax farmers and powerful provincial families rose in their place (<a href="#chapter-t4-7">Topic 4.7</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottoman Empire simply declined. Historians now say the state changed shape and kept going.`
            } }
          ]
        },
        {
          heading: 'Persia and Oman push back',
          blocks: [
            { p: `In <span class="num">1605</span> Shah Abbas I of Safavid Persia moved Armenians by force to <span class="kt">New Julfa</span>, outside his capital, Isfahan. Its merchants traded from India to the Mediterranean. They worked through family firms, an old way of doing business.` },
            { p: `In <span class="num">1622</span> Shah Abbas, helped by English East India Company ships, took Hormuz from the Portuguese. <b>Oman</b>, an Arabian power at the mouth of the Gulf, drove the Portuguese from <b>Muscat</b> in <span class="num">1650</span>. Some Swahili towns on the East African coast asked Oman for help against the Portuguese. Omani forces besieged Fort Jesus, Portugal's fortress at <b>Mombasa</b>, from <span class="num">1696</span>. They took it in <span class="num">1698</span>. The Omanis were merchants as well as fighters.` }
          ]
        },
        {
          heading: 'New goods in old markets',
          blocks: [
            { p: `The Columbian Exchange reached these lands too. Cash crops from American plantations, grown with forced labor, were sold mostly in Europe and the Middle East (<a href="#chapter-t4-3">Topic 4.3</a>). Most sugar, though, went to Europe. Tobacco arrived in Ottoman cities around 1600, and Ottoman farmers soon grew their own. <span class="kt">Maize</span> (corn), an American food crop, took root in Ottoman lands such as the Balkans and Egypt.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `<a href="#chapter-t4-5">Topic 4.5</a>: Morocco's conflict with the Songhai Empire is one of the College Board's examples of competition over trade routes.`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: the power of existing elites "fluctuated" as they faced "increasingly powerful monarchs and leaders." "Ottoman timars" is one of the College Board's examples.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants." New Julfa's family firms are the first kind. Omanis are one of the College Board's examples of Indian Ocean merchants (<a href="#chapter-t4-4">Topic 4.4</a>).`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Timar', 'The right to collect a piece of land\'s taxes, given to an Ottoman cavalryman (a sipahi) for military service.'],
        ['Tax farm', 'The right to collect a district\'s taxes, sold for cash. Ottoman tax farms were sold for life from 1695.']
      ]
    }
  ],

  closing: {
    heading: 'The Middle East at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its six sides for review.`,
    argue: {
      move: 'Continuity and Change',
      prompt: `After 1500, the Portuguese attacked the old spice route with warships and passes. By 1600, how much had that route changed? Make a claim. Then support it with one change and one continuity from this chapter.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Old states fought back and lasted',
        body: `The Mamluks lost at Diu in 1509, and the Ottomans took Egypt in 1517 and fought on at sea. Morocco beat Songhai at Tondibi in 1591. Persia took Hormuz in 1622, and Oman took Muscat in 1650 and Mombasa in 1698.`
      },
      {
        category: 'Religious',
        title: 'The Ottomans made room for other faiths, with limits',
        body: `Christians and Jews were protected subjects who paid the jizya, and Bayezid II took in Jews expelled from Spain and Portugal. Portugal's war at sea was partly a crusade, rooted in the capture of Ceuta in 1415.`
      },
      {
        category: 'Social',
        title: 'Class decided how a person lived',
        body: `Hürrem and Kösem held power in the palace, townswomen went to court over property, and enslaved women served wealthy households. African captives crossed the Sahara and the Red Sea in trades older than 1500.`
      },
      {
        category: 'Intellectual',
        title: 'Learning reached Europe through the Islamic world',
        body: `The astrolabe, a Greek idea made precise in the Islamic world, reached Europe through Muslim Spain, where Toledo's translators turned Arabic books into Latin. Zacuto's tables of 1496 grew from Toledo's tables of about 1080.`
      },
      {
        category: 'Technological',
        title: 'Sails, star tools and guns changed travel and war',
        body: `The lateen sail rigged the first caravels, and Indian Ocean pilots used the monsoon and the kamal. Firearms won Tondibi and made the sultan need paid foot soldiers more than timar cavalry.`
      },
      {
        category: 'Economic',
        title: 'The old trade routes survived',
        body: `Portuguese passes disrupted the spice trade, but the Red Sea route recovered by the mid-1500s. Gujarati, Armenian and Omani merchants kept regional trade going, and tobacco and maize took root in Ottoman lands.`
      }
    ]
  }
};
