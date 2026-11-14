'use strict';

/**
 * Unit 4 by region: the Middle East and Dar al-Islam.
 * One story of the Islamic heartlands from Morocco to Persia, 1450 to 1750, in four sections:
 * the instruments, tables and sails that reached European ships through the Islamic world
 * (KC-4.1.II, KC-4.1.II.A); the spice war at sea, Mamluk and Ottoman fleets against the
 * Portuguese (attacks from 1502, the Mamluk fleet, Diu 1509), and the recovery of the Red Sea
 * route (KC-4.3.III.ii, KC-4.3.II.A.iii, KC-4.1.IV); the Ottoman Empire's many peoples, its welcome to Jews expelled
 * from Spain and Portugal, women by class, and the older export of enslaved Africans to the
 * Mediterranean and the Indian Ocean (KC-4.3.I.B, KC-4.3 via Topic 4.8, KC-4.2.II.B); and guns and cash after
 * about 1580: Morocco against Songhai, timars giving way to tax farms, New Julfa (after 1605),
 * Persia at Hormuz and Oman at Muscat and Mombasa, and the CED's Middle East market for cash
 * crops (KC-4.3.III.ii, KC-4.2.III.B, KC-4.3.II.A.iii, KC-4.1.IV, KC-4.1.V.B). This is the thinnest region in the Unit 4 CED and
 * the chapter says so rather than padding: the rise of the Ottomans and Safavids belongs to
 * Unit 3 and gets one connective sentence; coffee is left out because no source file supports
 * it for this region; the Middle East as a market for cash crops is stated in the CED's words,
 * with the 4.3 ledger's narrowing (sugar went mostly to Europe) kept; tobacco and maize are the
 * only American crops named. Ptolemy's astronomy follows the 4.1 reading correction (the
 * Byzantines always had it), and Busbecq is left out (his line is about palace servants, not
 * timar cavalry). The 4.1 ledger's corrections are kept: the lateen sail is Roman-era Mediterranean
 * and common in Islamic seas, not an Arab invention, and Indian Ocean pilots used the kamal and
 * wooden quadrants rather than the astrolabe at sea. Diu 1509 is Mamluk with Ottoman supplies,
 * not Ottoman (4.4 ledger). Morocco and Songhai is told from Morocco's side; the Sub-Saharan
 * Africa chapter tells it from Songhai's.
 */

module.exports = {
  topicKey: 'r4-middle-east',
  slug: 'region-4-middle-east',
  unit: '4',
  region: 'The Middle East and Dar al-Islam',
  titleHtml: 'The Middle East and <em>Dar al-Islam</em>',
  deck: `Between 1450 and 1750 the new ocean routes did not simply pass the Islamic lands by. Their instruments and tables sailed in European ships, their states fought the Portuguese for the spice trade and kept much of it, and the Ottoman Empire grew strong by ruling many peoples.`,
  topics: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.7'],
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
      thesis: `European ships crossed the oceans with knowledge gathered over centuries in the Islamic world and beyond it. Europe's contribution was to assemble those pieces, build new ships and learn the Atlantic's winds.`,
      parts: [
        {
          heading: 'A world of scholars and sailors',
          blocks: [
            { p: `In 1450 the heartlands of Islam stretched from Morocco through Egypt and Arabia to Persia. Muslim scholars of law called this world <span class="kt">Dar al-Islam</span>, Arabic for "the house of Islam": not one state, but lands joined by Islamic law, by Arabic as the language of scholarship, and by long trade routes. (Unit 3 told how the Ottoman and Safavid empires rose inside it.) The CED's sentence for this story is that "knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation" (<a href="#chapter-t4-1">Topic 4.1</a>).` },
            { p: `Take the <span class="kt">astrolabe</span>, which measures how high the sun or a star stands above the horizon. A Greek idea made precise by astronomers in the Islamic world, it reached Europe through Muslim Spain, and so did the mathematics behind it. In Toledo, in the 1100s and 1200s, Christian and Jewish translators turned Arabic books, many by Muslim scholars, into Latin. Among those books was Ptolemy's great book of Greek astronomy, which scholars in the Islamic world had preserved, studied, and corrected in Arabic.` },
            { p: `By the 1480s Portuguese pilots carried a heavy sea version of the astrolabe, the mariner's astrolabe. To turn the noon sun's height into a <span class="kt">latitude</span> (how far north or south of the equator a ship is), a pilot also needs a table of where the sun stands on each day of the year: the CED's <span class="kt">astronomical charts</span>. Muslim and Jewish astronomers in Toledo built such tables around <span class="num">1080</span>, and later tables grew from that line, down to those of Abraham Zacuto, composed in the 1470s and printed in Portugal in <span class="num">1496</span>.` }
          ]
        },
        {
          heading: 'Sails, winds and pilots',
          blocks: [
            { p: `The triangular <span class="kt">lateen sail</span> lets a ship work forward against the wind. Used on the Mediterranean since Roman times and common across the seas of the Islamic world, it rigged the first Portuguese caravels, small exploring ships.` },
            { p: `The Indian Ocean held another kind of knowledge: its winds. The <span class="kt">monsoon</span> reverses twice a year on schedule, and its sailors, Arabs among them, planned voyages around it months ahead. They measured the stars with simple tools such as the <span class="kt">kamal</span>, a small wooden card on a knotted string, and wrote their routes into pilot books. At Malindi, on the Swahili coast, Vasco da Gama took on a pilot who knew the crossing, and reached Calicut in India in May <span class="num">1498</span> (<a href="#chapter-t4-2">Topic 4.2</a>).` },
            { p: `Europeans built new ships and learned the Atlantic's harder winds for themselves. But much of what went into those voyages, the astrolabe and the tables behind it, the lateen sail and the pilot's knowledge, came from older worlds, much of it through the lands of Islam.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Arabs invented the lateen sail or that Europe got it from Arab sailors; historians trace it to the Roman-era Mediterranean. Indian Ocean pilots mostly used the kamal and wooden quadrants at sea; the astrolabe was mainly an astronomer's instrument on land.`
            } }
          ]
        }
      ],
      terms: [
        ['Dar al-Islam', 'Arabic for "the house of Islam": the lands under Islamic law and Muslim rulers.'],
        ['Astrolabe', 'A Greek instrument made precise by astronomers in the Islamic world, used to measure the height of the sun or a star.'],
        ['Astronomical charts', 'Tables of where the sun stands each day, needed to turn a height reading into a latitude.'],
        ['Lateen sail', 'A triangular sail, Mediterranean since Roman times and common across Islamic seas, that lets a ship work against the wind.']
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
      thesis: `When the Portuguese tried to seize the spice trade with guns, the Muslim states that lived off it fought back. They lost battles, but the old route through the Red Sea survived and recovered.`,
      parts: [
        {
          heading: 'The old road and the newcomers',
          blocks: [
            { p: `Before 1500, pepper from India crossed the ocean to the Red Sea or the Persian Gulf, then went overland to the Mediterranean and Venetian buyers. It was taxed and resold at every step, and a large share of that money went to the Muslim states and merchants along the way. Egypt, the richest stop, was ruled by the <span class="kt">Mamluks</span>, sultans drawn from an elite of slave soldiers.` },
            { p: `The Portuguese wanted to cut out that chain. From <span class="num">1500</span> they attacked Muslim ships, and from <span class="num">1502</span> they sold passes, the <span class="kt">cartaz</span>, to many Asian ships; later they took ports at the ocean's narrow places, among them <b>Hormuz</b>, at the mouth of the Persian Gulf, in <span class="num">1515</span> (<a href="#chapter-t4-4">Topic 4.4</a>). Papal bulls (orders from the pope) of the 1450s had framed their expansion as war on Muslim powers, so the rivalry was about religion as well as money.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottomans "closed" the spice routes when they took Constantinople in <span class="num">1453</span>. The main route ran through Mamluk Egypt, Ottoman only from <span class="num">1517</span>; spice prices did not jump after 1453; and Portugal's African voyages were already decades old. Europeans went to sea mainly to get around the middlemen (and, for Portugal, to reach West African gold), not to escape a blockade.`
            } }
          ]
        },
        {
          heading: 'Diu, and the Ottomans take up the fight',
          blocks: [
            { p: `Mamluk Egypt answered the first attacks. With timber and guns supplied by the Ottomans, it sent a fleet east to join the ships of the sultan of Gujarat and the ruler of Calicut. In <span class="num">1509</span>, off the port of Diu in western India, the Portuguese defeated them. At the heart of this rivalry between Muslim and European powers was an economic question: which route, and whose ships, would carry the spices (<a href="#chapter-t4-5">Topic 4.5</a>). In the CED's words, "Economic disputes led to rivalries and conflict between states."` },
            { p: `In <span class="num">1517</span> the Ottoman Empire conquered Egypt and inherited the Mamluks' war at sea. Its sultans now also protected Mecca and Medina. Ottoman fleets fought the Portuguese in the Red Sea, the Gulf and the Indian Ocean through the 1500s, and in <span class="num">1538</span> an Ottoman force besieged the Portuguese at Diu, though the siege was lifted.` }
          ]
        },
        {
          heading: 'The route that would not close',
          blocks: [
            { p: `Portuguese patrols cut the flow of pepper up the Red Sea for about two decades, but by the middle of the 1500s spices again reached the Mediterranean that way in large amounts. Gujarati ships kept carrying cargo and pilgrims to the Red Sea. That is the CED's continuity: "regional markets continued to flourish in Afro-Eurasia by using established commercial practices."` }
          ]
        }
      ],
      terms: [
        ['Mamluks', 'The soldier-sultans who ruled Egypt, and the spice route through it, until the Ottoman conquest of 1517.'],
        ['Cartaz', 'A pass the Portuguese sold to many Asian ships and enforced with warships.'],
        ['Diu, 1509', 'The sea battle off western India in which the Portuguese defeated a fleet of Mamluk Egypt, Gujarat and Calicut.']
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
      thesis: `The Ottoman Empire ruled Muslims, Christians and Jews of many languages. It held them by making room for difference and using it, not by making everyone equal.`,
      parts: [
        {
          heading: 'A refuge for Spain\'s Jews',
          blocks: [
            { p: `In <span class="num">1492</span> Spain ordered every Jew who would not become Christian to leave, and in <span class="num">1497</span> Portugal had most of its Jews baptized by force (<a href="#chapter-r4-europe">Europe</a> tells that side). The Ottoman sultan <b>Bayezid II</b> let the refugees settle. Thousands came, to Istanbul, Salonica (today Thessaloniki, in Greece) and other cities. By the 1500s Jews were the largest group in Salonica, and exiles from Spain set up Istanbul's first printing press, printing books in Hebrew.` },
            { p: `Why would a Muslim sultan welcome them? They were useful: merchants, doctors, craftsmen and taxpayers. The CED says states such as the Ottomans adopted practices "to utilize the economic, political, and military contributions of different ethnic or religious groups." Spain made the opposite choice: it "suppressed diversity," in the CED's words (<a href="#chapter-t4-7">Topic 4.7</a>).` }
          ]
        },
        {
          heading: 'Room, not equality',
          blocks: [
            { p: `The empire already ruled millions of Christians and Jews, and it governed them by an old rule of Islamic law: they were <span class="kt">protected subjects</span>. They could practice their religion, and their own leaders ran their marriages, inheritances, schools and family courts and answered to the state for their community's taxes. For the sultan this was cheap: each community ran itself and paid. (Some books call this the <span class="kt">millet</span> system. Many historians now think that name fits the more formal arrangement of the 1800s better than the looser practice of the 1500s.)` },
            { p: `This was <span class="kt">accommodation</span>, making room for a group's differences. It was not equality. Christians and Jews paid a special tax, the <span class="kt">jizya</span>. In an Islamic court they generally could not testify against a Muslim, they could not freely build new churches or synagogues, and the top posts in the army and government went to Muslims.` },
            { p: `The empire shaped its peoples through these rules, and they shaped it in turn: the exiles' printing press was one example, and Christian and Jewish merchants carried much of its trade. In the CED's words, empires were "shaping and being shaped by the diverse populations they incorporated."` }
          ]
        },
        {
          heading: 'Women and the enslaved, by class',
          blocks: [
            { p: `How an Ottoman woman lived depended on her class, the CED's "varying status of different classes of women." At the top, <b>Hürrem</b> began as an enslaved woman in the palace, became the wife of Sultan Suleiman, and paid for a mosque complex in Istanbul with a school, a soup kitchen and a hospital. In the next century <b>Kösem</b> ruled as regent, governing in the name of her young son Murad IV and later her grandson Mehmed IV. In the towns, ordinary women owned property and went to the Islamic court over inheritances, debts and divorces, though a daughter inherited half what a son did.` },
            { p: `At the bottom were enslaved women, servants and concubines (enslaved women kept as a master's partners) in wealthy households with almost no say over their own lives. Enslaved people reached these lands by several routes: from the lands north of the Black Sea, from the Caucasus, as war captives, and out of Africa. The CED says enslavement in Africa continued "in its traditional forms, including ... the export of enslaved persons to the Mediterranean and the Indian Ocean regions." Captives were carried north across the Sahara to North Africa and the Mediterranean world, and east across the Red Sea and the Indian Ocean to Arabia, Persia and India. Those trades were centuries old before 1500 and went on through this whole period (<a href="#chapter-r4-sub-saharan-africa">Sub-Saharan Africa</a>).` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `In a letter dated <span class="num">1717</span>, which she later polished for readers, Lady Mary Wortley Montagu, wife of Britain's ambassador, wrote, "I look upon the Turkish women as the only free people in the empire." Read her with care: she met mostly wealthy women, and the town courts and the enslaved women in their households tell a wider story.`
            } }
          ]
        }
      ],
      terms: [
        ['Protected subjects', 'Christians and Jews under Islamic rule: free to practice their religion, but paying the jizya and living with limits.'],
        ['Jizya', 'A special tax paid by non-Muslim subjects in Muslim states.'],
        ['Accommodation', 'A state making room for a group\'s religious or ethnic differences, usually because the state gains from it.']
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
      thesis: `By the late 1500s war ran on firearms and money. Morocco sent gunmen across the Sahara, the Ottoman sultan traded cavalry for cash, and Persia and Oman drove out the Portuguese, while American crops took root in Ottoman fields.`,
      parts: [
        {
          heading: 'Morocco crosses the Sahara',
          blocks: [
            { p: `Morocco, in the far west, was never ruled by the Ottomans. Its sultan from <span class="num">1578</span>, <b>Ahmad al-Mansur</b>, looked south. The <b>Songhai Empire</b> controlled the trade in West African gold and the salt mines of the Sahara, and the two states quarreled over the salt mine at Taghaza in the 1580s. Al-Mansur sent an army of about four thousand men with firearms across the desert, and in <span class="num">1591</span> it defeated the Songhai army at <b>Tondibi</b>. Gold and the salt trade were a large part of the reason: another economic dispute that turned to war (<a href="#chapter-t4-5">Topic 4.5</a>).` },
            { p: `For Morocco the prize proved hard to hold. Al-Mansur seems to have believed Songhai held the gold mines themselves, but it did not. His pashas governed Timbuktu, yet the gold supply never came under Moroccan control, and much of it went to other buyers, including European traders on the coast (<a href="#chapter-r4-sub-saharan-africa">Sub-Saharan Africa</a> gives Songhai's side).` }
          ]
        },
        {
          heading: 'From cavalry to tax farms',
          blocks: [
            { p: `The same change in war squeezed an old Ottoman elite. For centuries the core of the army had been the <span class="kt">sipahi</span>, a cavalryman who held a <span class="kt">timar</span>: the right to collect the taxes of a piece of land, in return for riding to war when the sultan called. But from the late 1500s, wars were won more and more by infantry with guns, paid in cash, and the sultan needed money more than horsemen.` },
            { p: `So the state turned more and more timar land into <span class="kt">tax farms</span>, rights to collect a district's taxes sold to the highest bidder, and from <span class="num">1695</span> it sold them for life. The sipahis faded (the timar system was abolished only in 1831), and tax farmers and provincial families rose in their place. That is the CED's point that the power of existing elites "fluctuated." Historians no longer call this simply decline: the state changed shape and kept going.` }
          ]
        },
        {
          heading: 'Persia and Oman push back',
          blocks: [
            { p: `Persia's Safavid shah Abbas I moved Armenians by force to <span class="kt">New Julfa</span>, a town outside his capital, Isfahan, in <span class="num">1605</span>. Its merchants traded through family firms and partnerships from India to the Mediterranean, the "established commercial practices" by which, in the CED's words, regional markets "continued to flourish."` },
            { p: `In <span class="num">1622</span> Shah Abbas, with help from ships of the English East India Company, took Hormuz from the Portuguese. Then <b>Oman</b>, an Arabian power at the mouth of the Gulf, went further. Its Ya'rubid rulers drove the Portuguese from <b>Muscat</b> in <span class="num">1650</span>. After a siege begun in <span class="num">1696</span>, they took the Portuguese fortress of Fort Jesus at <b>Mombasa</b>, on the Swahili coast, in <span class="num">1698</span>.` },
            { p: `The Omanis were also traders, one of the Asian merchant groups the CED names. Their story fits its sentence: despite "some disruption and restructuring," the Indian Ocean's "existing trade networks" continued to flourish.` }
          ]
        },
        {
          heading: 'New goods in old markets',
          blocks: [
            { p: `The Columbian Exchange reached these lands too. The CED says cash crops, grown on plantations with coerced labor, "were exported mostly to Europe and the Middle East" (<a href="#chapter-t4-3">Topic 4.3</a>); most American sugar went to Europe. Tobacco did reach these lands, though not mainly as a plantation import: it arrived in Ottoman cities around 1600, Ottoman farmers were soon growing their own, and smoking spread so fast that Sultan Murad IV tried to ban it in the 1630s. An American food crop, <span class="kt">maize</span>, also took root in Ottoman lands such as the Balkans and Egypt. The CED's wider point is that American foods became staple crops in parts of Europe, Asia and Africa.` }
          ]
        }
      ],
      terms: [
        ['Tondibi, 1591', 'The battle in which a Moroccan army with firearms defeated the Songhai Empire, after a dispute over gold and salt.'],
        ['Timar', 'The right to collect a piece of land\'s taxes, granted to an Ottoman cavalryman (sipahi) for military service.'],
        ['Tax farm', 'The right to collect a district\'s taxes, sold for cash; Ottoman tax farms were sold for life from 1695.'],
        ['New Julfa', 'The Armenian merchants\' town outside Isfahan, settled from 1605 by Armenians Shah Abbas I moved there by force.']
      ]
    }
  ],

  closing: {
    heading: 'The Middle East at a Glance',
    navLabel: 'At a glance',
    intro: `The six sides of the region's story, gathered for review, keeping to what the unit covers.`,
    pairs: [
      {
        category: 'Political',
        title: 'Old states fought back and lasted',
        body: `The Mamluks lost at Diu in 1509; the Ottomans took Egypt in 1517 and fought on at sea. Morocco beat Songhai at Tondibi in 1591, Persia took Hormuz in 1622, and Oman took Muscat in 1650 and Mombasa in 1698. Ottoman power shifted from timar cavalry to tax farmers and provincial families.`
      },
      {
        category: 'Religious',
        title: 'Room for other faiths, with limits',
        body: `The Ottomans governed Christians and Jews as protected subjects who ran their own family law and paid the jizya, and took in Jews expelled from Spain and Portugal; Muslims stayed on top. The Portuguese came partly as crusaders, so the war at sea was also religious.`
      },
      {
        category: 'Social',
        title: 'Class decided a life',
        body: `Hürrem and Kösem held power in the palace, townswomen went to court over property, and enslaved women served wealthy households. Enslaved people came from north of the Black Sea, from the Caucasus and from Africa, whose captives crossed the Sahara and the Red Sea in trades far older than 1500.`
      },
      {
        category: 'Intellectual',
        title: 'Learning that sailed west',
        body: `The astrolabe, a Greek idea made precise in the Islamic world, and the mathematics and tables behind it reached Europe through Muslim Spain and the translators of Toledo; Zacuto's almanac of 1496 came from that line.`
      },
      {
        category: 'Technological',
        title: 'Sails, star tools and guns',
        body: `The lateen sail, common across Islamic seas, rigged the first caravels; Indian Ocean pilots read the monsoon and used the kamal. Firearms carried Morocco's army to Tondibi and made the sultan need paid infantry more than timar cavalry.`
      },
      {
        category: 'Economic',
        title: 'The old routes survived',
        body: `Portuguese passes disrupted the spice trade, but the Red Sea route recovered by the mid-1500s, and Gujarati, Armenian and Omani merchants kept regional markets flourishing. The CED names the Middle East, with Europe, as a main market for plantation cash crops; tobacco and maize took root in Ottoman lands.`
      }
    ]
  }
};
