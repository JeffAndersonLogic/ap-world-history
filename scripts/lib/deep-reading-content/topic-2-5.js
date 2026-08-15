'use strict';

/**
 * Topic 2.5, Cultural Consequences of Connectivity: the deep reading.
 *
 * Why this exists. This topic's success criteria ask for two religions each
 * tied to a named route, two technologies with an origin and a destination, and
 * one crop, architectural style or tradition used as evidence of cultural
 * transformation. That is a demand for chains, not for lists, and a chain needs
 * dates and places: "paper spread west" is a sentence a student can write
 * without knowing anything, while "papermaking reached Samarkand, then Baghdad
 * by the end of the eighth century, Muslim Spain by the twelfth and Italian
 * mills by the late thirteenth" is evidence.
 *
 * So this chapter is built around chains that can be traced, and around the
 * distinction between three things students routinely blur:
 *
 *   - Diffusion: the thing itself moves and is adopted, as paper did.
 *   - Stimulus diffusion: the idea that something is possible moves, and the
 *     receiving society builds its own version.
 *   - Independent invention: it happened twice, and the diffusion story is
 *     wrong. European movable type is the case where this matters most.
 *
 * Two cautions carried deliberately, because both are places where the standard
 * classroom version outruns the evidence: the stirrup-to-feudalism thesis is
 * contested and should not be asserted, and the "Islamic agricultural
 * revolution" is a live scholarly argument rather than a settled fact. In both
 * cases the honest version is still usable evidence, which is the point.
 */

module.exports = {
  topicKey: 't2-5',
  slug: 'topic-2-5-cultural-consequences',
  sourceFile: 'deep-reading-topic-2-5-cultural-consequences.html',
  lessonFile: 'lesson-2-5-cultural-consequences.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 2.5: What Traveled Without Paying Freight',
  eyebrow: 'Topic 2.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'What Traveled Without Paying <em>Freight</em>',
  deck: `Merchants moved cargo, and everything else came along for free: religions, techniques, crops, styles, words and the occasional French silversmith. This chapter follows the chains, with the dates and places that turn "ideas spread along trade routes" into something a reader can check.`,
  meta: ['Five sections', 'Chains, not lists', 'Read alongside the First & 10'],
  footerNote: 'Topic 2.5 &nbsp;·&nbsp; What Traveled Without Paying Freight &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the toolkit: the channels a belief or a technique actually moves through, and the three different things "it spread" can mean. Sections 02 to 05 are the chains themselves. If you are preparing for a question about cultural diffusion, learn one chain from each of 02, 03 and 04 completely, with its dates, rather than knowing all of them vaguely.`,
    steps: [
      `<b>01 How a thing travels:</b> four channels, and the difference between diffusion and invention.`,
      `<b>02 Religions in motion:</b> Buddhism, Islam, Christianity and Hinduism, each on a named route.`,
      `<b>03 Techniques:</b> paper, gunpowder, the compass, printing, and one contested claim about the stirrup.`,
      `<b>04 Crops and the material world:</b> sugar, cotton, bananas, and blue-and-white porcelain.`,
      `<b>05 Words, books and people:</b> the languages the trade built and the individuals who carried it.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'how',
      num: '01',
      accent: 'gold',
      name: 'How a Thing Travels',
      navLabel: 'How a thing travels',
      dates: 'The toolkit &nbsp;·&nbsp; Channels, and three kinds of spread',
      thesis: `"It spread along trade routes" is the sentence that ends thinking. Ask instead who carried it, why they were traveling, why anyone at the far end wanted it, and what it turned into when it arrived.`,
      parts: [
        {
          heading: 'The four channels',
          blocks: [
            { p: `<b>Merchants,</b> who are the main channel and are not trying to convert anyone. A trading community that settles in a foreign port needs a place to worship, brings its own specialists, eats its own food, and demonstrates by simply existing that a different way of doing things is workable and profitable. Almost every case in sections 02 to 04 begins here.` },
            { p: `<b>Specialists in transmission:</b> missionaries, Sufi teachers, monks, and scholars traveling to study. These people are trying to move something, and they follow the merchants because the merchants have already established the routes, the lodging and the local contacts.` },
            { p: `<b>Rulers,</b> who adopt something deliberately and can impose or endow it: a khan funding an observatory, a mansa returning from Mecca with architects, a sultan establishing madrasas. State adoption is fast and shallow; it changes the court long before it changes the village.` },
            { p: `<b>Captives and the enslaved,</b> the channel textbooks routinely omit. Craftsmen taken in war carried their techniques to wherever they were resettled, and the Mongols in particular deported artisans systematically. Skills moved because the people holding them were moved against their will, and any account of diffusion that mentions only merchants and missionaries has left out one of the most effective mechanisms of the period.` }
          ]
        },
        {
          heading: 'Three things "it spread" can mean',
          blocks: [
            { p: `<b>Diffusion proper:</b> the thing itself and the knowledge of how to make it move, and the receiving society adopts it. Papermaking is the clean case, and you can trace the workshops moving west city by city.` },
            { p: `<b>Stimulus diffusion:</b> the knowledge that something is possible arrives without the method, and the receiving society invents its own way to do it. Much of the movement of gunpowder weaponry looks like this: knowing that a powder can throw a projectile is enough to set metalworkers to solving the rest locally.` },
            { p: `<b>Independent invention:</b> two societies solve the same problem separately, and a diffusion story is simply wrong. The positional zero in Maya mathematics owes nothing to India. European movable type in the fifteenth century is very probably a separate invention rather than a Korean import, whatever the tempting chronology suggests.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not assume that because A is older than B, A caused B. Two societies facing the same problem with similar materials often reach similar answers, and proximity in time is not evidence of transmission. What is evidence: a documented route of contact, an intermediate case in between, borrowed vocabulary, or a technique arriving with an identifiable person. When you can supply one of those, say so. When you cannot, write "appears in China by the eleventh century and in Europe by the fourteenth" and let the reader see exactly how much you are claiming.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Naming the carrier. <em>The mechanism is that nothing spreads on its own: a merchant with a reason to travel, a teacher following the merchant, a ruler with a reason to adopt, or a captive craftsman moved by force carries it, and identifying which one turns a claim about diffusion into an argument with a person in it.</em>`,
        limit: `Contact is not adoption. Societies rejected, ignored or heavily modified far more than they took, and the interesting question is usually why something was accepted here and not there.`,
        comparison: `Against <em>the Americas</em> in Topic 1.4: two continents with dense internal exchange and no contact with Afro-Eurasia, which is why the same centuries produced no shared technologies at all. That absence is the control case that shows what connectivity was actually doing.`
      },
      terms: [
        ['Diffusion', 'The movement of a practice or technique from one society to another, together with the knowledge required to use it.'],
        ['Stimulus diffusion', 'The spread of the knowledge that something is possible, with the receiving society inventing its own method.'],
        ['Independent invention', 'The separate development of the same thing in two societies, where no transmission occurred.'],
        ['Syncretism', 'The blending of an incoming tradition with an existing one, the normal outcome when a religion travels with merchants rather than armies.'],
        ['Transmission route', 'A documented path of contact, the evidence that turns a chronological coincidence into a diffusion claim.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'religions',
      num: '02',
      accent: 'rust',
      name: 'Religions in Motion',
      navLabel: 'Religions',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Four faiths, four routes',
      thesis: `Each of the four major religions in this period moved along a specific route by a specific mechanism, and naming the route and the mechanism is exactly what the success criteria ask for.`,
      parts: [
        {
          heading: 'Islam, by sea and by desert',
          blocks: [
            { p: `Islam is the clearest case because it moved along all three networks by the same mechanism: resident merchants, then teachers, then rulers. Across the <b>Indian Ocean</b> it reached the Swahili coast, the Maldives, Gujarat's ports, the north Javanese coast and Melaka, where the merchant communities described in the Topic 2.3 chapter settled and intermarried. Across the <b>Sahara</b> it reached the Sahelian courts and the Wangara trading diaspora, as the Topic 2.4 chapter sets out. Along the <b>overland routes</b> it moved into Central Asia and among Turkic and Mongol peoples, with the Ilkhanate's conversion under Ghazan in <span class="num">1295</span> as a spectacular instance of state adoption.` },
            { p: `The mechanism, stated once so you can reuse it: conversion carried a written commercial law recognized across the network, Arabic literacy, standard partnership contracts and membership in the largest trading system on earth, and Sufi teachers made the religion locally usable by tolerating existing devotional practice rather than demanding it be abandoned first. Ports and courts converted; interiors and villages converted slowly or not at all.` }
          ]
        },
        {
          heading: 'Buddhism, Christianity and Hinduism',
          blocks: [
            { p: `<b>Buddhism</b> had traveled the overland routes from India into Central Asia and China centuries before this period, carried by merchants and by monasteries that grew up along the roads to serve them, and by <span class="num">1200</span> it had largely vanished from India itself, as the Topic 1.3 chapter explains. In this period the important movement is maritime and northern: Theravada Buddhism carried from Sri Lanka to mainland Southeast Asia, where it became the state religion of Burma, Cambodia and the Thai kingdoms, and Chan Buddhism moving from China to Japan and Korea, where it became Zen and shaped the culture of the warrior elite.` },
            { p: `<b>Christianity</b> in Asia is the tradition students most often miss. Communities of the Church of the East, sometimes called Nestorian, were scattered along the trade routes from Mesopotamia to China, and Mongol religious policy gave them a period of unusual prominence: several Mongol royal women were Christians of this church, and Rabban Bar Sauma, described in the Topic 2.2 chapter, was one of its monks. Latin Christianity followed the same roads in the other direction, with Franciscan missions reaching the Yuan capital, where John of Montecorvino was appointed archbishop in <span class="num">1307</span>.` },
            { p: `<b>Hinduism</b> in this period is largely not a missionary religion but a cultural export carried by merchants and courts. Its temples, epics, court ritual and Sanskrit vocabulary had shaped Southeast Asian states for centuries, and their traces are unmistakable in the twelfth-century Angkor Wat and in the Hindu-Buddhist court religion of Majapahit, both treated in the Topic 1.3 chapter.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the practice arrived before the doctrine, and the buildings show it',
              html: `Look at what conversion actually looked like on the ground and the syncretism is visible in the architecture. Early mosques in Sahelian West Africa are built in mud brick with local structural techniques rather than in any imported style. Early mosques on the Swahili coast are built of coral stone by local masons. In Java, Islamic sites incorporate motifs and forms from the Hindu-Buddhist tradition they succeeded. A religion transmitted by merchants and teachers arrives as a set of practices to be housed by whoever is there, which is why its buildings look local, and that is a piece of evidence you can point at rather than assert.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Merchants first, teachers second, rulers third. <em>The mechanism is that traders establish routes, lodging and local relationships for commercial reasons, religious specialists travel on the infrastructure they built, and rulers adopt afterward for the legal, diplomatic and administrative advantages the religion brings, which is why conversion appears first in ports and courts and last in the countryside.</em>`,
        limit: `The same pattern explains the limit: three centuries of Muslim rule in northern India left a Hindu majority, and Great Zimbabwe traded gold into a Muslim network for centuries without converting. Contact is not conversion.`,
        comparison: `Against <em>conquest-driven spread</em>: religions that arrive with armies change the state quickly and the population slowly, while religions that arrive with merchants change a commercial class first and can take centuries to reach anyone else. Two different maps, and both are in this unit.`
      },
      terms: [
        ['Church of the East', 'The Christian tradition with communities along the Asian trade routes, prominent under Mongol religious policy and now largely forgotten in survey accounts.'],
        ['Theravada Buddhism', 'The branch carried from Sri Lanka to mainland Southeast Asia, where it became the legitimating religion of Burmese, Khmer and Thai kingdoms.'],
        ['Chan and Zen', 'The Chinese Buddhist tradition and its Japanese form, transmitted by monks along the East Asian maritime routes.'],
        ['Sufi orders', 'The mystical brotherhoods whose adaptability to local devotional practice made them the most effective missionary channel of the period.'],
        ['John of Montecorvino', 'The Franciscan appointed archbishop at the Yuan capital in 1307, evidence that Latin Christianity reached China along the same roads.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'techniques',
      num: '03',
      accent: 'iron',
      name: 'Techniques, With Dates',
      navLabel: 'Techniques',
      dates: 'c. 750 to 1450 &nbsp;·&nbsp; Paper, powder, compass, type',
      thesis: `Four technologies, and the reason to learn the dates is that a chain with dates is evidence while a chain without them is a claim. Paper is the model case; the others each carry a complication worth knowing.`,
      parts: [
        {
          heading: 'Paper, the chain you should memorize',
          blocks: [
            { p: `Paper was made in China from the early centuries CE. Its manufacture appears in <b>Samarkand</b> in the eighth century, then in <b>Baghdad</b>, where a paper mill is recorded by the <span class="num">790</span>s, then across the Islamic world to Egypt and North Africa, then to <b>Muslim Spain</b>, with production at Xativa by the twelfth century, and from there into Christian Europe, where Italian mills at Fabriano are working by the <span class="num">1270</span>s and German mills follow by the end of the fourteenth century.` },
            { p: `That is roughly six hundred years and half a dozen identifiable places, and it is worth having because of what paper does at each stop. Cheap writing material means more books, more copies, more schools, and administrations that keep records rather than memories. The scholarly infrastructure of the Islamic world described in the Topic 1.2 chapter runs on it, and so, a few centuries later, does European printing, which needed a cheap surface before a press was worth building.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Talas story is later than the event',
              html: `The familiar account has Chinese papermakers captured at the battle of Talas in <span class="num">751</span> teaching the craft to their captors in Samarkand. It appears in a source written centuries afterward, and some historians think paper manufacture was already present in Central Asia before the battle. The safe version keeps everything that matters: papermaking was established in Samarkand in the eighth century and moved west from there through the Islamic world. You lose a memorable anecdote and keep an unbreakable chain, which is the right trade in an essay.`
            } }
          ]
        },
        {
          heading: 'Gunpowder, the compass, printing, and the stirrup',
          blocks: [
            { p: `<b>Gunpowder</b> was compounded in China, where military manuals give formulas by the eleventh century and fire lances and bombs were in use in the wars of the twelfth and thirteenth. Knowledge of it appears in Europe in the thirteenth century, with the earliest illustrations of cannon in the <span class="num">1320</span>s, and by the fifteenth century huge siege guns are decisive in European and Ottoman warfare. Mongol-era contact is the most likely conduit. The important observation is what each society did with it: China developed it extensively for siege and naval war, and European and Ottoman states poured resources into cannon that could break the walls their own politics were organized around.` },
            { p: `<b>The compass</b> was described in China in the eleventh century and its use for navigation at sea by the early twelfth. It appears in European writing by the end of the twelfth century and across the Indian Ocean in the same period. It does not create long-distance sailing, which existed already, but it removes the dependence on clear skies, which lengthens the sailing season and makes schedules more reliable.` },
            { p: `<b>Printing</b> is the case that requires care. Woodblock printing was long established in China and Korea, and movable type was invented in China in the eleventh century and cast in metal in Korea, where a book printed with metal type survives from <span class="num">1377</span>. European movable type appears around <span class="num">1450</span>. There is no evidence of transmission, the technical solutions differ, and most historians treat the European development as independent. Say so: it is a better answer, and it is also the perfect illustration of why chronological proximity is not proof.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The <span class="kt">stirrup</span> did move from Central Asia and China into the Islamic world and Europe, and the famous claim that it caused European feudalism by making heavy shock cavalry possible has been contested for decades: the chronology does not line up neatly, and armored cavalry and land-based service arrangements each have causes of their own. Use the stirrup as a technology that diffused, which is well supported, and do not use it as a cause of a social system, which is an argument you would have to defend against your reader's likely objection.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The traceable chain. <em>The mechanism is that a technology which requires workshops and trained hands, like papermaking, leaves a trail of production sites you can date and place, so its diffusion can be demonstrated rather than assumed, while a technology that is mostly an idea, like gunpowder, leaves only the fact of arrival and has to be argued for more carefully.</em>`,
        limit: `Arrival is not adoption, and adoption is not the same use. Gunpowder in China and gunpowder in fifteenth-century Europe were developed for different tactical problems by states with different politics.`,
        comparison: `Against <em>printing</em> as a negative case: two societies producing movable type four centuries apart with no evidence of contact is exactly the pattern that looks like diffusion and is not, which is why the paper chain is worth more as evidence than the printing chronology.`
      },
      terms: [
        ['Papermaking', 'The Chinese technique that reached Samarkand and Baghdad in the eighth century and Italian mills by the late thirteenth, cheapening books everywhere it arrived.'],
        ['Gunpowder', 'Compounded in China and described in eleventh-century military manuals, present in European warfare from the fourteenth century.'],
        ['Magnetic compass', 'Described in China in the eleventh century and used for navigation by the twelfth, lengthening the practical sailing season across the Indian Ocean.'],
        ['Movable type', 'Invented in China in the eleventh century and cast in metal in Korea, and very probably invented separately in Europe around 1450.'],
        ['Stirrup', 'A Central Asian and Chinese riding technology that diffused west; its supposed role in causing European feudalism is contested.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'material',
      num: '04',
      accent: 'oxide',
      name: 'Crops and the Material World',
      navLabel: 'Crops and things',
      dates: 'c. 700 to 1450 &nbsp;·&nbsp; Sugar, cotton, bananas, cobalt',
      thesis: `Plants and objects are the most underrated evidence in this topic, because a crop growing where it did not evolve, or a mineral fired into a pot two thousand miles from its mine, is a fact about contact that nobody had to write down.`,
      parts: [
        {
          heading: 'Sugar, and the model that would be exported to the Atlantic',
          blocks: [
            { p: `Sugarcane originated in New Guinea, was domesticated and spread through Southeast Asia, and reached India, where the technique for crystallizing sugar from cane juice was developed. From India it moved to Persia and then across the Islamic world into the Mediterranean, and by the twelfth to fourteenth centuries there were sugar estates in Cyprus, Crete, Sicily and the Levant.` },
            { p: `Follow what happens when it arrives, because this is the most consequential chain in the unit. Sugar is not a normal crop. It requires heat and water, a great deal of labor at harvest, and immediate processing in a mill and boiling house, which means capital investment and a workforce that can be compelled to work at a specific moment. What emerged in the medieval Mediterranean was therefore a package: plantation-scale cultivation, a processing plant, investment from merchants, and, increasingly, enslaved labor. That package is the direct ancestor of the Atlantic plantation system of Unit 4. When a later prompt asks about the origins of Atlantic plantation slavery, the honest answer starts here, several centuries earlier, in Cyprus and Sicily.` }
          ]
        },
        {
          heading: 'Cotton, bananas, and the argument about the crops',
          blocks: [
            { p: `<b>Cotton</b> spread with Islamic expansion into the Mediterranean and, in the other direction, its Indian manufacture supplied the Indian Ocean's greatest export as described in the Topic 2.3 chapter. <b>Bananas</b> originated in Southeast Asia and reached Africa across the Indian Ocean, where they became a staple in the wetter regions and supported population growth in areas where grain does poorly. <b>Citrus, hard wheat, rice, sorghum</b> and other crops moved similarly.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: an argument worth knowing about the "agricultural revolution"',
              html: `A well-known thesis holds that the early Islamic world drove a genuine agricultural revolution, transferring a suite of tropical crops westward with new irrigation and rotation techniques and transforming Mediterranean farming. Other historians have pushed back hard, arguing that several of the crops were present earlier, that the archaeological and botanical evidence is thinner than the texts suggest, and that changes were slower and more local than the thesis implies. Both sides agree that crops moved. What is contested is the scale and speed. Write "crops including cotton, sugar, citrus and rice spread westward through the Islamic world, though historians disagree about how transformative this was," and you have said something both accurate and unusually well informed.`
            } },
            { p: `<b>Champa rice</b>, treated in the Topic 1.1 chapter, is the best-documented single case in the course: a fast-ripening strain from Vietnam promoted by the Song state in the early eleventh century, which allowed two harvests a year and helped roughly double China's population. One plant, one policy, a demographic transformation, and a chain you can state in a sentence.` }
          ]
        },
        {
          heading: 'The object that proves the whole system',
          blocks: [
            { p: `Blue-and-white porcelain is the single best artifact in this unit. Cobalt ore from Persia was shipped east to the kilns of southern China. Chinese potters used it to paint white porcelain, a technique and a material combined, and produced vessels in shapes and sizes designed for Middle Eastern buyers, large dishes for communal dining among them, decorated with patterns those buyers wanted. The finished goods were shipped west across the Indian Ocean and assembled into the great collections of Persian and Ottoman courts. Later, potters in Anatolia and eventually in the Netherlands imitated the look with local materials.` },
            { p: `Consider what has to be true for a single one of those dishes to exist: a mine in Persia, a shipping route, a Chinese industrial center able to work to a foreign specification, merchants who knew the tastes of a market five thousand miles from the kiln, and a return route to deliver it. That is not cultural contact, it is an integrated production chain across Eurasia in the fourteenth century, and it can be held in two hands.` }
          ]
        }
      ],
      useThis: {
        tool: `The plantation package around sugar. <em>The mechanism is that sugarcane must be milled and boiled within hours of cutting, which forces cultivation, processing and a compelled harvest workforce into one capitalized enterprise, and that combination, developed in the medieval Mediterranean, is the model later carried to the Atlantic.</em>`,
        limit: `Crop diffusion arguments are only as strong as their evidence. The scale of the medieval agricultural transfer in the Islamic world is genuinely contested, so state the movement and note the argument.`,
        comparison: `Against <em>blue-and-white porcelain</em>: a crop shows contact over centuries, while a single object with Persian cobalt, a Chinese kiln and a Middle Eastern buyer shows an integrated production chain in one lifetime. Both are evidence, and the second is far harder for a reader to wave away.`
      },
      terms: [
        ['Sugar plantation complex', 'The package of plantation cultivation, mill and boiling house, merchant capital and coerced labor developed in the medieval Mediterranean and later carried to the Atlantic.'],
        ['Bananas', 'A Southeast Asian crop that reached Africa across the Indian Ocean and became a staple in regions where grain does poorly.'],
        ['Cobalt', 'The Persian mineral shipped to Chinese kilns to paint blue-and-white porcelain, one half of an intercontinental production chain.'],
        ['Blue-and-white porcelain', 'Chinese ceramics made with Persian cobalt in shapes designed for Middle Eastern buyers, then imitated in Anatolia and Europe.'],
        ['Champa rice', 'The fast-ripening Vietnamese strain promoted by the Song state, which allowed two harvests a year and helped double China&rsquo;s population.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'words',
      num: '05',
      accent: 'gold',
      name: 'Words, Books, and People',
      navLabel: 'Words and people',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Languages, libraries, travelers',
      thesis: `The most durable evidence of connectivity is linguistic and biographical: languages that carry another language's vocabulary in exactly the domains the trade required, and individuals whose lives make no sense without the network.`,
      parts: [
        {
          heading: 'The languages the trade built',
          blocks: [
            { p: `<b>Kiswahili</b> is Bantu in grammar and core vocabulary with a heavy layer of Arabic borrowing concentrated in commerce, law, religion and seafaring, and it was written in Arabic script for centuries. <b>Malay</b> became the trade language of Southeast Asia and took Arabic script as Jawi. <b>Persian</b> served as the language of administration and high culture from Anatolia through Central Asia to Bengal, so a bureaucrat trained in Isfahan could work in Delhi. <b>Arabic</b> was the scholarly and legal language across the Islamic world, and <b>Turkic</b> languages spread with the movement of steppe peoples into Anatolia and Central and South Asia.` },
            { p: `The methodological point is worth stating because it is transferable: borrowed vocabulary clusters in the domains where contact happened. A language that borrows its words for anchor, contract, judge and interest from another language is telling you precisely what its speakers were doing with the people they borrowed from. That is evidence no chronicler chose to record.` }
          ]
        },
        {
          heading: 'Books, and the people who carried them',
          blocks: [
            { p: `Scholarship crossed in bulk. Greek, Persian and Indian works had been translated into Arabic in earlier centuries; from the twelfth century onward those Arabic texts, with the commentaries of Ibn Sina and Ibn Rushd, were translated into Latin in Spain and Sicily, which is how European universities acquired the medical and philosophical curriculum described in the Topic 1.6 chapter. In the Mongol period the flow ran in more directions at once: Rashid al-Din's world history assembled Chinese, Indian, Mongol and Frankish material at a Persian court, and Persian and Chinese astronomical and medical texts moved between Maragha and the Yuan capital.` },
            { p: `And then there are the individuals, who are the most usable evidence a student can carry because a life is a chain in itself. Ibn Battuta, a Moroccan jurist, spent decades traveling from West Africa to China and served as a judge in the Maldives and in Delhi, employed because his legal training was recognized everywhere he went. Marco Polo, a Venetian, spent years in the Yuan realm. Rabban Bar Sauma, born near Beijing, met the kings of France and England as an envoy of a Mongol ruler of Persia.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: there was a Parisian goldsmith at Karakorum',
              html: `William of Rubruck, a Franciscan sent to the Mongol court in the <span class="num">1250</span>s, describes meeting a goldsmith from Paris living at the Mongol capital, who had been taken captive in Hungary and was building an elaborate silver drinking fountain for the khan's palace. It is a small detail in a diplomatic report and it does more work than a page of generalization: a French craftsman, enslaved in eastern Europe, practicing his trade in Mongolia, described by a Flemish friar writing for a French king. When a prompt asks for evidence of cultural exchange, one verifiable person in an impossible place is worth more than any list.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Borrowed vocabulary as evidence. <em>The mechanism is that languages borrow words in the domains where contact actually occurred, so Kiswahili's Arabic vocabulary for commerce, law and seafaring records what its speakers were doing with Arabic speakers, independently of anything any chronicler chose to write down.</em>`,
        limit: `Elite evidence dominates. Translated philosophy, court histories and famous travelers tell you about courts and scholars; what an ordinary farmer two days inland knew about any of this is a much harder question and usually unanswerable.`,
        comparison: `Against <em>Topic 2.6</em>: the same networks that carried these words, books and people carried the pandemic, and both consequences trace to the same handshakes. Naming that pairing is the surest way to make an answer about connectivity look complete.`
      },
      terms: [
        ['Kiswahili', 'The Bantu language of the East African coast whose Arabic borrowings cluster in commerce, law, religion and seafaring.'],
        ['Jawi', 'Malay written in Arabic script, the written form of Southeast Asia&rsquo;s trade language after the ports converted.'],
        ['Persianate world', 'The zone from Anatolia to Bengal in which Persian served as the language of administration and high culture.'],
        ['Translation movement', 'The successive rendering of Greek, Persian and Indian works into Arabic and later of Arabic works into Latin, which built the European university curriculum.'],
        ['William of Rubruck', 'The Franciscan envoy whose account of the Mongol court records, among much else, a Parisian goldsmith working at Karakorum.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison or chain: the claim, the specific evidence with dates or places, and the reason. Diffusion questions are won with chains, so learn one of these completely rather than four of them approximately.`,
    pairs: [
      {
        category: 'Technology',
        title: 'Paper is a chain you can trace; movable type is a coincidence you should not',
        body: `Papermaking is documented in China, then in Samarkand and Baghdad in the eighth century, then across the Islamic world to Muslim Spain by the twelfth century, then in Italian mills by the 1270s: identifiable production sites, in order, along known routes. Movable type was invented in China in the eleventh century, cast in metal in Korea, where a book survives from 1377, and appears in Europe around 1450 with different technical solutions and no evidence of contact. The difference matters because the first is a demonstrated diffusion and the second is very probably independent invention, and a student who distinguishes them is showing exactly the reasoning this topic is testing.`
      },
      {
        category: 'Belief',
        title: 'Religion traveled with commerce and stopped where commerce stopped',
        body: `Islam reached the Swahili coast, the Maldives, Gujarat's ports, Melaka and the Sahelian courts through resident merchants and Sufi teachers, and in all of those places it converted ports and courts first and interiors late or never. Three centuries of Muslim rule in northern India left a Hindu majority; Great Zimbabwe sold gold into a Muslim network for centuries without converting. The difference exists because conversion delivered practical goods, a recognized commercial law, Arabic literacy, standard contracts and network membership, which are valuable to a trader or a ruler dealing with foreigners and worthless to a farmer dealing with neighbors.`
      },
      {
        category: 'Material culture',
        title: 'One dish contains the whole Eurasian system',
        body: `A fourteenth-century blue-and-white dish required cobalt mined in Persia, shipped east across the Indian Ocean, fired at a Chinese kiln by potters working to shapes and patterns designed for Middle Eastern buyers, and carried west again to a Persian or Ottoman court, where later potters in Anatolia and eventually the Netherlands would copy the look. That is an integrated production chain across Eurasia, not merely contact, and it is the strongest single object a student can cite in this unit because every step of it is a claim a reader can check.`
      },
      {
        category: 'Long-run consequences',
        title: 'The Atlantic plantation system was designed in the Mediterranean',
        body: `Sugarcane moved from New Guinea through Southeast Asia to India, where crystallization was developed, then to Persia and across the Islamic world to Cyprus, Crete and Sicily, where by the twelfth to fourteenth centuries it was grown on estates with mills, merchant capital and increasingly enslaved labor. That package exists because sugar must be milled and boiled within hours of cutting, which forces plantation scale and a compelled harvest workforce. When Unit 4 asks where Atlantic plantation slavery came from, the answer is not that it was invented in the Americas; it was transplanted, and this is the chain that carried it.`
      }
    ]
  }
};
