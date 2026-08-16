'use strict';

/**
 * Topic 1.5, State Building in Africa: the deep reading.
 *
 * Why this exists. The success criteria name three states and ask for a
 * mechanism from each: Great Zimbabwe's stone enclosures, gold and Indian Ocean
 * connections; Ethiopia's use of Christianity and Red Sea trade to hold
 * independence and legitimacy; and the Hausa city-states' use of trans-Saharan
 * trade and Islamic administration. Three mechanisms is more than a survey
 * paragraph can carry, and the third target, "Islam and Christianity as tools of
 * governance, not just belief," is an analytical claim that needs the working
 * parts of an administration to demonstrate.
 *
 * The organizing idea is that African states in this period were built on
 * long-distance exchange, and that the religion each adopted was the
 * administrative technology that came with the trade route. Islam arrived in the
 * Sahel and on the Swahili coast with merchants and brought literacy, contract
 * law and a diplomatic language; Christianity was already in Ethiopia and gave
 * a highland dynasty a claim of descent that made independence a religious fact.
 * Great Zimbabwe is the deliberate control case: deep in the Indian Ocean gold
 * trade and not converted at all.
 *
 * The Great Zimbabwe section carries the historiography rather than only the
 * history, and that is not decoration. It is the clearest case in the entire
 * course of archaeologists being pressured to produce a politically convenient
 * answer and refusing, and a student who knows it will never again read "we do
 * not know who built this" as a neutral statement.
 *
 * Where the evidence is oral, as with the Sundiata epic, or compiled centuries
 * later, as with the Kano Chronicle, the page says so and says what the source
 * is still good for.
 */

module.exports = {
  topicKey: 't1-5',
  slug: 'topic-1-5-africa',
  sourceFile: 'deep-reading-topic-1-5-africa.html',
  lessonFile: 'lesson-1-5-africa.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 1.5: Gold, Salt, Stone, and Faith',
  eyebrow: 'Topic 1.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Gold, Salt, Stone, and <em>Faith</em>',
  deck: `Every state in this chapter sits at the end of a trade route, and the route explains the state. A Sahelian empire taxes the gold going north and the salt coming south; a Swahili port taxes what crosses the ocean; a highland kingdom taxes what moves through the Red Sea. What each one then does with religion is the part the survey never has room for, and it is the part the checkpoints ask about.`,
  meta: ['Five sections', 'Sahel, savanna, coast, plateau, highland', 'Read alongside the First & 10'],
  footerNote: 'Topic 1.5 &nbsp;·&nbsp; Gold, Salt, Stone, and Faith &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Five states, five sections, one question asked of each: what did it tax, and what did religion do for it? Read them in order and you will notice the answers diverging, which is the diversity the topic wants you to be able to demonstrate rather than assert.`,
    steps: [
      `<b>01 Mali:</b> the trans-Saharan machine, and what a hajj was worth as foreign policy.`,
      `<b>02 The Hausa city-states:</b> power without a capital, and Islam as an administrative technology.`,
      `<b>03 Great Zimbabwe:</b> cattle, gold, stone, and the archaeology that was pressured to lie.`,
      `<b>04 The Swahili coast:</b> thirty city-states, one language, and an ocean.`,
      `<b>05 Ethiopia:</b> a Christian kingdom that made its independence a matter of descent.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'mali',
      num: '01',
      accent: 'gold',
      name: 'Mali and the Trans-Saharan Machine',
      navLabel: 'Mali',
      dates: 'c. 1235 to 1450 &nbsp;·&nbsp; Sundiata to the decline',
      thesis: `Mali did not sit on the gold mines and did not control them. It sat between the mines and the desert crossing, which is a better place to be, and it built an empire out of the difference.`,
      parts: [
        {
          heading: 'Why anyone crossed the Sahara at all',
          blocks: [
            { p: `Two goods made a two-month desert crossing worth the risk, and they moved in opposite directions. Gold came from the fields of the upper Niger and Senegal river systems, in a region where west African rulers kept the mines themselves outside imperial control, and the metal was in demand everywhere north of the desert, above all as coinage in North Africa, Egypt and eventually Europe. Salt came the other way, cut in slabs at desert mines such as Taghaza, and in the tropical savanna salt was not a seasoning but a physiological necessity that the local environment did not supply.` },
            { p: `The technology that made the trade routine was the camel, which can carry a substantial load for days without water, together with saddle designs that let a rider fight or a driver load heavily. Caravans of hundreds and sometimes thousands of camels moved in stages between oases, guided by specialists who knew the wells. The essential point for an essay is that the traders were not the state. Merchant networks, most famously the Wangara or Dyula traders of the Mande-speaking world, ran the commerce; the state's job was to make the roads safe, keep the peace between the towns and take a share.` }
          ]
        },
        {
          heading: 'What Mali actually did',
          blocks: [
            { p: `<span class="kt">Mali</span> emerged around <span class="num">1235</span> when Sundiata Keita defeated a rival ruler and united the Mande chiefdoms of the upper Niger. Its power rested on the fertile floodplain that fed a large population, on control of the trading towns where the desert routes met the river, and on taxation of the traffic between them. Its cities, Niani, Djenne and above all <span class="kt">Timbuktu</span>, became something more than markets: Timbuktu accumulated scholars, mosques and libraries, and the manuscript collections built there over the following centuries are still being catalogued.` },
            { p: `<span class="kt">Mansa Musa</span>, who ruled from about <span class="num">1312</span>, made the pilgrimage to Mecca in <span class="num">1324</span> with an enormous entourage and an enormous quantity of gold, distributing and spending it along the way. Arab chroniclers writing shortly afterward report that his spending in Cairo depressed the value of gold in the city for years. The hajj was a religious duty and it was also, unmistakably, foreign policy: it announced to the entire Islamic world that a Muslim ruler of extraordinary wealth existed south of the Sahara, and it produced diplomatic contacts, scholars, architects and merchants flowing back to Mali afterward. Fifty years later a Spanish map drawn for a European court depicted Musa on his throne holding a gold nugget, which tells you the message arrived.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: griots, and why oral history is evidence',
              html: `Most of what is told about Sundiata comes from the epic maintained by <span class="kt">griots</span>, hereditary specialists in oral history, genealogy and praise poetry, trained for years and holding an official position at court. Written versions were transcribed only in the twentieth century, so the epic is not a chronicle written at the time. It is also not a folk tale: griot transmission was a professional discipline with a duty of accuracy to lineage and precedence, which is exactly what a ruling family needed kept straight. Treat it as strong evidence for how Mali understood its own founding and for the political relationships it recognized, and lean on the Arabic accounts and the archaeology for dates.`
            } }
          ]
        },
        {
          heading: 'Islam at the top, older practice underneath',
          blocks: [
            { p: `Mali's rulers and its merchant class were Muslim, and the advantages were practical as well as spiritual. Islam supplied a written language of administration and diplomacy, a body of commercial law recognized from Morocco to India, and literate scribes and judges. It connected a Sahelian ruler to a network of states that took him seriously. What it did not do was convert the countryside, and Mali's kings did not force it to.` },
            { p: `Ibn Battuta, who traveled through Mali in <span class="num">1352</span> and <span class="num">1353</span>, gives us the best account of what that looked like from the perspective of a strict North African jurist. He praises the security of the roads, the regularity of prayer and the memorization of the Quran by children. He is scandalized that women appear in public unveiled and speak freely with men who are not relatives, and that subjects pour dust on their heads before the ruler. His discomfort is our evidence: a state practicing a form of Islam layered over long-standing local custom, which is exactly what syncretism looks like from the inside.` }
          ]
        }
      ],
      useThis: {
        tool: `Taxing the crossing rather than the mine. <em>The mechanism is that Mali controlled the towns where the river system met the desert routes, so gold going north and salt coming south both passed through territory it policed, and the state took its share of traffic it did not have to produce, protect at the source or transport.</em>`,
        limit: `Rulers were Muslim and most subjects were not, and Ibn Battuta's outrage at Malian court practice is the evidence. A state whose authority runs through trading towns also has little grip on the countryside between them.`,
        comparison: `Against <em>Melaka</em> in Topic 1.3: two states living on transit, one on a desert crossing and one on a strait, both adopting Islam partly because it was the operating system of the network they taxed. Against <em>Song China</em>: Mali taxed a route, the Song taxed production, which is why one empire's cities were markets and the other's were manufacturing centers.`
      },
      terms: [
        ['Mali', 'The Mande empire of the upper Niger from about 1235, built on floodplain agriculture and control of the trading towns where desert routes met the river.'],
        ['Mansa Musa', 'The ruler whose 1324 hajj advertised Mali&rsquo;s wealth across the Islamic world and brought scholars, architects and diplomatic contacts back with him.'],
        ['Griot', 'A hereditary professional keeper of oral history, genealogy and praise poetry, trained for years and holding an official position at court.'],
        ['Timbuktu', 'The Malian trading city that became a center of Islamic scholarship, whose manuscript collections are still being catalogued.'],
        ['Trans-Saharan trade', 'The camel-caravan exchange of savanna gold for desert salt and North African goods, which financed every Sahelian empire.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'hausa',
      num: '02',
      accent: 'rust',
      name: 'The Hausa City-States',
      navLabel: 'The Hausa states',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Kano, Katsina, Zaria and their rivals',
      thesis: `Seven walled cities that never unified, competed for the same trade, and were individually strong enough that no neighbor could swallow them. Political fragmentation is usually taught as a weakness; here it is the system.`,
      parts: [
        {
          heading: 'Power without a capital',
          blocks: [
            { p: `In the savanna east of Mali, in what is now northern Nigeria, a cluster of Hausa-speaking city-states, Kano, Katsina, Zaria, Gobir and their neighbors, developed from the eleventh century onward. Each was an independent walled city governing its surrounding farmland under its own ruler, and no one of them ever conquered the rest. They competed commercially and militarily, occasionally paid tribute to a stronger neighbor such as Songhai or Bornu, and repeatedly recovered.` },
            { p: `The walls are worth pausing on as evidence. Kano's fortifications enclosed a large area, ran for miles, and were built and rebuilt over centuries out of mud brick with ditches outside them. Building them required a ruler able to command mass labor, sustain it across generations, and provision the workers, which tells you a great deal about the strength of these states without any document being involved.` },
            { p: `Their economy was a hinge. Trans-Saharan routes reaching them from the north met west African forest routes reaching them from the south, so kola nuts, cloth, leather worked to a standard so admired that Europeans later called it by the name of the North African port it reached them through, dyed textiles from Kano's famous indigo pits, and enslaved people all changed hands there. Hausa cities produced as well as traded, which distinguishes them from a pure entrepot.` }
          ]
        },
        {
          heading: 'Islam as an administrative technology',
          blocks: [
            { p: `Islam reached the Hausa states through merchants, and its adoption by rulers and urban elites in the fourteenth and fifteenth centuries is the clearest illustration in this unit of the topic's third learning target. Look at what conversion actually delivered to a Hausa king. Literate scribes who could keep tax records and correspondence in Arabic. Judges applying a written body of law that merchants from Timbuktu to Cairo already recognized, which made contracts enforceable across the whole network. A calendar, a system of weights and a diplomatic language shared with every trading partner north of the desert. Access to scholars, and eventually to a school system.` },
            { p: `That is not a description of belief; it is a description of infrastructure. A ruler who converted acquired, in a single step, the administrative technology of the most commercially developed zone in the hemisphere. The same reasoning applies in Mali, on the Swahili coast and in the ports of Southeast Asia, and it is why "Islam spread along trade routes" is a much deeper statement than it first appears.` },
            { p: `As in Mali, conversion was concentrated at the top and in the towns, and older practice continued in the countryside and often at court alongside the new observance. Hausa society also included substantial groups whose rulers and populations remained largely unconverted for centuries, and a puritanical reform movement in the region much later would take exactly that mixture as its grievance.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a king list written down centuries later',
              html: `Much of the standard narrative of the Hausa states comes from the <em>Kano Chronicle</em>, a dynastic history listing rulers and their deeds. It survives in a version written down in the nineteenth century from earlier material and oral tradition, which puts several hundred years between the events it describes and the text we have. Historians use it carefully: the sequence of rulers and the broad development it describes are supported by archaeology and by external Arabic references, while its dates and its stories about individual kings are treated with caution. Saying that out loud in an essay is not hedging, it is showing the reader you know what kind of source you are standing on.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Islamic administration as imported infrastructure. <em>The mechanism is that conversion delivered a literate scribal class, a written commercial law already recognized by every trading partner across the desert, a shared calendar and weights, and a diplomatic language, so a Hausa ruler acquired the administrative technology of the Islamic world without having to invent any of it.</em>`,
        limit: `It also stopped at the city walls. Conversion was an elite and urban phenomenon, and the countryside kept older practice, which is why later reformers in the same region could denounce these states as insufficiently Muslim.`,
        comparison: `Against <em>Maya city-states</em> and <em>Europe</em>: three regions of competing states that never unified, and in all three the competition produced walls, trade rivalry and innovation rather than collapse. Against <em>Mali</em>: an empire and a network of independent cities living on the same trade, which is a genuine same-cause-different-structure comparison.`
      },
      terms: [
        ['Hausa city-states', 'The independent walled cities of the northern Nigerian savanna, commercially linked and politically separate, which never unified into one state.'],
        ['Kano', 'The largest Hausa city, known for its walls, indigo dye pits and leather working, and a major terminus of trans-Saharan trade.'],
        ['Sharia', 'Islamic law, whose adoption gave a ruler enforceable commercial contracts recognized by merchants across the entire trading network.'],
        ['Kola nut', 'A stimulant from the west African forest zone, traded north through the Hausa cities and permitted to Muslims when other stimulants were not.'],
        ['Kano Chronicle', 'The dynastic history of Kano, written down in the nineteenth century from older material, useful for sequence and unreliable on detail.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'great-zimbabwe',
      num: '03',
      accent: 'iron',
      name: 'Great Zimbabwe',
      navLabel: 'Great Zimbabwe',
      dates: 'c. 1100 to 1450 &nbsp;·&nbsp; The plateau between two rivers',
      thesis: `A city of stone walls built without mortar, financed by cattle and by gold sold to the Indian Ocean, and the one state in this chapter that took the trade and left the religion behind.`,
      parts: [
        {
          heading: 'What was built, and how',
          blocks: [
            { p: `On the plateau between the Zambezi and Limpopo rivers, ancestors of the Shona built <span class="kt">Great Zimbabwe</span>, a settlement whose stone walls still stand. The Great Enclosure's outer wall runs some eight hundred feet around and stands over thirty feet high in places, built of shaped granite blocks laid in courses without any mortar, decorated near the top with a chevron pattern. Inside and around it are the remains of an urban settlement that may have held ten to eighteen thousand people at its height.` },
            { p: `Dry-stone building of that quality is not a workaround for not having mortar. It requires the blocks to be shaped so precisely that friction and weight hold the wall together, and it requires masons trained across generations. The granite of the plateau splits naturally into slabs when heated and cooled, so the material was available; the skill was developed locally, and the walls were still standing five centuries later, which is the practical test.` }
          ]
        },
        {
          heading: 'What paid for it',
          blocks: [
            { p: `Two things. Cattle, which in this society were wealth, bridewealth, status and the visible measure of a ruler's following, a pattern confirmed by the huge quantities of cattle bone excavated near the elite areas. And gold, mined on the plateau and carried east to the coast, at the port of Sofala and onward to Kilwa, where it entered the Indian Ocean network.` },
            { p: `We know the connection was real because the imports are in the ground: Chinese celadon pottery, Persian and Syrian glass, glass beads made in India, and coins minted at Kilwa have all been excavated at the site. A settlement in the interior of southern Africa was holding Chinese ceramics in the fourteenth century, and it got there through the same monsoon system described in the Topic 1.3 chapter. That is the strongest single piece of evidence a student can cite for Africa's integration into the world economy of this period.` },
            { p: `And here is the analytical prize. Great Zimbabwe was deep in a trade network dominated by Muslim merchants and did not convert to Islam. Its rulers kept their own religious practice, with the stone towers, monoliths and the famous carved soapstone birds as its material traces. Set that against Mali, the Hausa cities, Kilwa and Melaka, all of which converted, and you have a genuine puzzle worth writing about: conversion followed trade where rulers needed the network's law and letters to govern, and could be declined where the state's authority rested on cattle, kinship and a religious tradition of its own.` }
          ]
        },
        {
          heading: 'The archaeology, which is part of the history',
          blocks: [
            { p: `Great Zimbabwe was largely abandoned around the middle of the fifteenth century. The likely reasons are unglamorous and familiar: a large concentrated population exhausting the soil, timber and grazing around it, and the gold trade shifting north toward the Zambezi, where the successor state of Mutapa rose. People moved to where the resources and the trade were.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the answer was politically inconvenient, and it held anyway',
              html: `When Europeans reached the ruins in the nineteenth century, they attributed them to Phoenicians, to the Queen of Sheba, to anyone but Africans, and an early treasure-hunting excavation destroyed much of the stratified deposit that would have settled it. Then in <span class="num">1905</span> a professional archaeologist examined the site and concluded it was medieval and African, and in <span class="num">1929</span> Gertrude Caton-Thompson excavated it systematically and confirmed that conclusion with datable imported objects in undisturbed layers. The government of white-ruled Rhodesia found the finding unacceptable and, into the <span class="num">1970</span>s, pressured archaeologists and museums to present the foreign-origin story as an equal possibility. The site's African origin is not seriously disputed by anyone who has examined the evidence, and the country that became independent in <span class="num">1980</span> took its name from it. Keep this case: it is the clearest demonstration in the course that "we do not know who built this" can be a political statement rather than a scientific one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Cattle and gold combined. <em>The mechanism is that cattle supplied the internal currency of status, bridewealth and clientage that bound followers to a ruler, while gold sold into the Indian Ocean supplied the external wealth that paid for the stone, and neither alone would have built the city.</em>`,
        limit: `A concentrated population on a plateau exhausted its soil, timber and grazing, and when the gold trade shifted north the site was abandoned, which is a limit of the environment rather than of the politics.`,
        comparison: `Against <em>Kilwa</em>, its trading partner: the coast converted to Islam and the interior did not, though both lived on the same gold. Against <em>Mali</em>: two African states enriched by exporting gold, one adopting the religion of its trading partners and one declining to, which is the comparison that shows conversion was a choice rather than an automatic consequence of commerce.`
      },
      terms: [
        ['Great Zimbabwe', 'The Shona stone-built city on the plateau between the Zambezi and Limpopo, at its height from about 1100 to 1450.'],
        ['Dry-stone construction', 'Building with shaped blocks held by weight and friction alone, requiring precision cutting and generations of trained masons.'],
        ['Sofala', 'The coastal port through which plateau gold entered the Indian Ocean trade, linking the interior to Kilwa and the wider network.'],
        ['Mutapa', 'The successor state to the north, which rose as the gold trade shifted toward the Zambezi in the fifteenth century.'],
        ['Stratigraphy', 'The layered sequence of an archaeological deposit, which dates what is found in it, and whose destruction by early treasure hunting at Great Zimbabwe cost decades of certainty.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'swahili',
      num: '04',
      accent: 'oxide',
      name: 'The Swahili Coast',
      navLabel: 'The Swahili coast',
      dates: 'c. 1000 to 1500 &nbsp;·&nbsp; Mogadishu to Kilwa',
      thesis: `Thirty or more independent city-states strung along two thousand miles of coast, sharing a language, a religion and a trade and never sharing a government. The Swahili coast is what the Indian Ocean built in Africa.`,
      parts: [
        {
          heading: 'The cities and the ocean',
          blocks: [
            { p: `From Mogadishu in the north through Mombasa, Zanzibar and Kilwa toward Sofala in the south, a chain of port cities grew wealthy on the trade between the African interior and the Indian Ocean world. Each was politically independent, ruled by its own sultan or council of leading families, and each competed with the others for the same commerce. <span class="kt">Kilwa</span> became the greatest of them in the thirteenth and fourteenth centuries, largely by taking control of access to the gold coming out of Sofala, and built a great mosque of coral stone and a cliffside palace complex whose ruins are still standing.` },
            { p: `Out of Africa went gold, ivory, mangrove poles for building in the treeless Arabian ports, and enslaved people. In came Indian cotton textiles, Chinese porcelain, Persian ceramics and glass beads. Ibn Battuta visited in <span class="num">1331</span> and described Kilwa as one of the most beautifully built cities he had seen, which from a man who had seen Cairo, Damascus and Delhi is a substantial compliment. In the early fifteenth century Chinese treasure fleets under Zheng He reached this coast, and East African animals, including a giraffe, were sent to the Ming court.` }
          ]
        },
        {
          heading: 'What the language proves',
          blocks: [
            { p: `<span class="kt">Kiswahili</span> is the single best piece of evidence in this topic, because a language is a record of who talked to whom. Its grammar and core vocabulary are Bantu, which is to say African; a substantial layer of its vocabulary, especially in commerce, law, religion and seafaring, is borrowed from Arabic and, in smaller measure, Persian and later Portuguese; and it was written for centuries in Arabic script. That is not a language imposed by settlers. It is an African language that absorbed the terminology of the business it was conducting.` },
            { p: `The same is true of the culture generally. Swahili society was Muslim, its elite claimed prestigious Arabian or Persian ancestry, its houses were built of coral stone in a style found nowhere inland, and it was African, urban, and continuous with the Bantu-speaking societies behind it. Colonial-era scholarship insisted these cities must have been colonies founded by Arabs or Persians, the same instinct that produced the Great Zimbabwe story; the archaeology shows continuous local development from earlier African fishing and farming settlements. When a question asks how trade changed a society, the Swahili coast is the cleanest available answer, because you can point at a language and show the change in it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Arab traders "founded" or "colonized" the Swahili city-states. Merchant families from Arabia and Persia did settle, marry into local elites and shape the culture, and the Swahili elite themselves told origin stories claiming Persian descent, because prestige within the Islamic world flowed from such a claim. The archaeological sequence at these sites, however, runs continuously from local Bantu-speaking settlements upward. The accurate and more interesting claim is that a local society became cosmopolitan by choice, adopting the religion, the script and the architecture of the network it was profiting from.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Cosmopolitan port city-states. <em>The mechanism is that an independent city with a good harbor, a Muslim ruler and a legal system foreign merchants recognized could capture the transit trade between an African interior it did not govern and an ocean network it did not control, which is why these cities were rich and small at the same time.</em>`,
        limit: `Independence meant no coast-wide defense. When the Portuguese arrived with cannon at the start of the sixteenth century, they took the cities one at a time, and there was no larger state to answer them.`,
        comparison: `Against <em>Melaka</em> and <em>Srivijaya</em>: the same institution on three coasts of the same ocean. Against <em>Great Zimbabwe</em>: partners in a single gold trade, one converting to Islam and one not, which is the sharpest evidence that trade transmits religion only where a state finds a use for it.`
      },
      terms: [
        ['Swahili coast', 'The chain of independent Muslim port city-states along east Africa, sharing a language and a trade but never a government.'],
        ['Kilwa', 'The greatest of the Swahili cities in the thirteenth and fourteenth centuries, enriched by controlling access to the Sofala gold trade.'],
        ['Kiswahili', 'The Bantu language with heavy Arabic borrowing in commerce, law and religion, long written in Arabic script; the record of the coast&rsquo;s exchange.'],
        ['Dhow', 'The lateen-rigged Indian Ocean sailing vessel whose voyages were timed to the monsoon reversal.'],
        ['Zheng He', 'The Ming admiral whose treasure fleets reached the Swahili coast in the early fifteenth century, carrying East African animals back to China.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'ethiopia',
      num: '05',
      accent: 'gold',
      name: 'Ethiopia',
      navLabel: 'Ethiopia',
      dates: '1270 to 1450 &nbsp;·&nbsp; The Solomonic dynasty',
      thesis: `A Christian kingdom in the highlands, surrounded by Muslim states, which held its independence for centuries by making that independence a matter of sacred descent rather than of policy.`,
      parts: [
        {
          heading: 'The claim, and why it was worth making',
          blocks: [
            { p: `Christianity had been the religion of the Ethiopian highlands since the fourth century, long before it reached most of Europe. In <span class="num">1270</span> a new dynasty took power and asserted something that no other Christian monarchy could: that it descended directly from King Solomon of Israel and the Queen of Sheba, through their son Menelik, who was said to have brought the Ark of the Covenant to Ethiopia. That claim was set out in the <span class="kt">Kebra Nagast</span>, the Glory of Kings, compiled in the fourteenth century.` },
            { p: `Consider what that story accomplishes politically, because this is the mechanism the learning target is asking for. It makes the ruling <em>dynasty&rsquo;s</em> legitimacy independent of any outside authority, and the emphasis is doing work, because the church was a separate matter: the Ethiopian Church remained institutionally tied to the Coptic patriarch of Alexandria, who appointed its chief bishop. Dynastic legitimacy and ecclesiastical organization ran on different tracks. No patriarch elsewhere had to crown the king, no recognition from Constantinople or Rome was required, and no argument a Muslim or Christian neighbor can make against a lineage that runs to the Old Testament. It makes Ethiopia not a distant province of Christendom but the true continuation of Israel, which converts geographic isolation into religious centrality. And it binds church and crown into one institution, because a dynasty that rules by sacred descent needs a church to authenticate the descent, and a church so authenticating gets land and protection in return.` }
          ]
        },
        {
          heading: 'How the kingdom was actually run',
          blocks: [
            { p: `Land was the instrument. The crown granted rights over the produce of land, known as <span class="kt">gult</span>, to nobles, officials and above all to churches and monasteries, in exchange for service, prayer and loyalty. The peasant cultivator kept his hereditary claim to work the land while owing dues to whoever held the grant. It is not identical to European feudalism and should not be called that outright, but the comparison is legitimate and productive: both systems pay for administration and defense by assigning the revenue of land rather than a salary, and both create powerful landed institutions that a weak ruler struggles to control.` },
            { p: `Monasteries did the work a bureaucracy would otherwise have done. They held land, taught, copied manuscripts in Ge'ez, provided the clergy and, importantly, extended the church into newly incorporated territory, so that conquest was followed by monastic settlement and conversion. The court itself had no fixed capital for centuries: the emperor moved with a vast mobile camp of officials, soldiers, clergy and dependents, which kept royal authority physically present across the highlands and, incidentally, prevented any one region from becoming indispensable.` },
            { p: `The kingdom fought and traded with the Muslim sultanates on its eastern approaches, particularly Ifat and later Adal, competing for control of the routes down to the Red Sea ports through which Ethiopian gold, ivory, coffee and enslaved people moved outward and through which foreign goods arrived. Emperors such as Amda Seyon in the fourteenth century expanded the kingdom substantially in those wars.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Ethiopia was not isolated, and calling it a hermit kingdom is one of the most persistent errors in this topic. Its church was formally subordinate to the Coptic patriarch in Alexandria, in Muslim-ruled Egypt, who appointed its head bishop, which is a permanent institutional tie to a foreign country. Ethiopian monks maintained a community in Jerusalem. Ethiopian embassies reached Europe, and European rulers, who had been circulating a legend about a great Christian king somewhere beyond the Islamic world, sought contact in return. It traded through the Red Sea into the Indian Ocean system. The accurate claim is that Ethiopia was mountainous, defensible and politically independent, which is a completely different thing from cut off.`
            } },
            { p: `One more piece of evidence, because it is unmatched. At Lalibela, under the dynasty that preceded the Solomonic line, eleven churches were carved downward out of solid volcanic rock, not built up from blocks: trenches cut around a mass of stone, the mass then hollowed into a church with windows, columns, roofs and drainage, all of one piece with the bedrock. They were made as a New Jerusalem for pilgrims at a time when reaching the real one meant crossing territory under Muslim control, they are still in use for worship today, and they are the single most striking physical demonstration of what a state can command when religion and royal authority are the same institution.` }
          ]
        }
      ],
      useThis: {
        tool: `Sacred descent as legitimacy. <em>The mechanism is that a claim of descent from Solomon through the Queen of Sheba made the dynasty's right to rule dependent on no outside authority at all, needing no foreign coronation and answering no neighbor's objection, while binding the church to the crown that authenticated it and the crown to the church through grants of land.</em>`,
        limit: `Granting the revenue of land to nobles and monasteries paid for the state and built up landed institutions that a weak emperor could not command, which is the standard cost of paying in land rather than cash.`,
        comparison: `Against <em>Europe</em>: both used land grants in exchange for service and both had a church with enormous landholdings, but the Ethiopian church was inside the dynasty's legitimacy story and the Latin Church was a rival power that crowned and excommunicated kings. Against <em>Dar al-Islam</em>: a caliph invested a sultan from outside, while an Ethiopian emperor needed no investiture because his ancestry was the investiture.`
      },
      terms: [
        ['Solomonic dynasty', 'The line taking power in 1270 and claiming descent from Solomon and the Queen of Sheba, which made its legitimacy independent of any outside authority.'],
        ['Kebra Nagast', 'The fourteenth-century text setting out that descent, the founding document of Ethiopian royal legitimacy.'],
        ['Gult', 'A grant of the right to collect the produce of land, given to nobles, officials and churches in exchange for service, prayer and loyalty.'],
        ['Ge\'ez', 'The liturgical and literary language of Ethiopian Christianity, in which monasteries copied manuscripts and kept records.'],
        ['Lalibela', 'The eleven churches carved downward out of solid rock in the early thirteenth century, built as a pilgrimage destination and still in use.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the evidence, and the reason the difference existed. Africa is the region where students most often write in generalities, so specificity here is worth more than anywhere else in the unit.`,
    pairs: [
      {
        category: 'Belief and rule',
        title: 'Islam was an administrative technology, and Ethiopia shows why that matters',
        body: `A Hausa or Malian ruler who converted acquired literate scribes, a written commercial law that merchants from Cairo to Delhi already recognized, a shared calendar and a diplomatic language, in one step and without inventing any of it. Ethiopia needed none of that from outside, because it already had a church, a script, a literary language and a monastic system, so its ruling dynasty used religion for the opposite purpose: to claim a descent that made it answerable to no one. The difference exists because conversion is worth most to a state that lacks an administrative apparatus and worth least to one that already has its own.`
      },
      {
        category: 'Networks',
        title: 'The same trade converted the coast and not the interior',
        body: `Kilwa handled the gold that came from the Zimbabwe plateau, and Kilwa was Muslim while Great Zimbabwe was not, though both grew wealthy from the same metal moving along the same route. The difference exists because the two states needed different things from the exchange. A port city living on foreign merchants needed a law those merchants trusted and a religion they shared; an interior kingdom whose authority rested on cattle, kinship and its own religious tradition needed only a buyer. Trade carries religion where the receiving state has a use for it, and stops at the point where it does not.`
      },
      {
        category: 'State building',
        title: 'Empire and city-state network were two answers to one trade',
        body: `Mali unified the upper Niger under a single mansa and taxed the towns where the desert routes met the river. The Hausa cities stayed separate, each walled, each governing its own farmland, competing for the same commerce for centuries without any of them absorbing the rest. The difference exists partly in geography, since Mali's floodplain supported a population base no Hausa city could match, and partly in position: Mali sat astride a single set of routes that could be controlled from one center, while the Hausa cities sat at a crossing of northern and forest routes where several places were equally well placed and no one of them could dominate the others.`
      },
      {
        category: 'Using evidence',
        title: 'How you know is part of what you know',
        body: `Great Zimbabwe's African origin was established by excavation in 1905 and confirmed systematically in 1929, and a government that disliked the answer pressed archaeologists to present a foreign-builder story as an equal possibility into the 1970s. The Swahili coast's local origins are visible in the archaeological sequence and audible in Kiswahili, an African language carrying the vocabulary of the trade it conducted. The Sundiata epic reaches us through griots, professional keepers of genealogy whose accuracy was their office. Each of those is a claim about evidence, and in this topic the evidence question is not an aside: it is the difference between a description of African states and an argument about them.`
      }
    ]
  }
};
