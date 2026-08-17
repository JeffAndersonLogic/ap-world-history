'use strict';

/**
 * Topic 1.2, Dar al-Islam: the deep reading.
 *
 * Why this exists. The Topic 1.2 success criteria ask a student to describe how
 * Islamic states changed after Abbasid fragmentation, to explain how Islam
 * spread through four different channels, and to connect a list of intellectual
 * achievements to exchange. The First & 10 can name the Seljuks, the Mamluks
 * and the Delhi Sultanate; it cannot explain what a sultan was doing that a
 * caliph was not, which is the entire content of "how Islamic states changed."
 *
 * Three things this chapter is built to fix, all of them things students lose
 * points on every year:
 *
 *   1. The caliph and the sultan are not synonyms, and the split between
 *      religious authority and military power from 945 onward is the single
 *      most useful idea in the topic.
 *   2. "Islam spread by conquest" is the answer that ends thinking. Conquest
 *      moved the border; merchants, Sufis and scholars moved the religion, and
 *      the two happened on completely different timetables.
 *   3. The scholarship did not stop in 1258. Al-Tusi's observatory at Maragha
 *      was founded the year after Baghdad fell, and by the people who sacked
 *      it, which is a fact that dismantles the whole "golden age ended" story
 *      in one sentence.
 *
 * Where a famous number comes from an interested source, the page says so. Ibn
 * Battuta's mileage and the House of Wisdom's institutional grandeur are both
 * cases where the textbook version outruns the evidence, and noticing that is
 * the skill this course is teaching.
 */

module.exports = {
  topicKey: 't1-2',
  slug: 'topic-1-2-dar-al-islam',
  lessonFile: 'lesson-1-2-dar-al-islam.html',

  titleHtml: 'The House <em>Divided</em>',
  deck: `By <span class="num">1200</span> there was no single Islamic empire and there had not been one for centuries, and yet the Islamic world was the most connected, most literate and most scientifically productive zone on earth. This chapter explains how a religion held together a civilization after the state that carried it had come apart, which is the question the topic is really asking.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Read the sections in order. The first two explain what happened to the state, the third explains what happened to the religion when the state stopped carrying it, and the fourth explains why the scholarship kept accelerating through all of it. The fifth is the section the checkpoints most reward and students most often skip.`,
    steps: [
      `<b>01 The unraveling:</b> how the caliphate lost its power without losing its legitimacy.`,
      `<b>02 The successors:</b> Seljuks, Mamluks and the Delhi Sultanate, and what each did that the others did not.`,
      `<b>03 How Islam actually spread:</b> four channels, four different speeds, one of which is not conquest.`,
      `<b>04 The knowledge machine:</b> paper, translation, observation, and why 1258 did not end it.`,
      `<b>05 Who was on top, and who was not:</b> the dhimmi, the enslaved, and women.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'unraveling',
      num: '01',
      accent: 'gold',
      name: 'The Unraveling of the Caliphate',
      navLabel: 'The unraveling',
      dates: 'c. 900 to 1258 &nbsp;·&nbsp; Abbasid decline to the sack of Baghdad',
      thesis: `The Abbasid caliph did not fall in 1258. He had already been powerless for three hundred years, kept on his throne by the soldiers who had taken his power because the legitimacy attached to him was worth more to them intact than removed.`,
      parts: [
        {
          heading: 'The situation',
          blocks: [
            { p: `The Abbasid Caliphate, founded in <span class="num">750</span> with its capital at Baghdad, had at its height ruled from North Africa to Central Asia. By the tenth century it had lost most of that in the ordinary way empires do: distant provinces developed their own dynasties, tax revenue stopped reaching the center, and the caliph's authority narrowed to the region around his capital. A rival caliphate, the Fatimids, ruled Egypt from <span class="num">969</span>, and another, the Umayyads of Cordoba, ruled in Spain. There were, at points in the tenth century, three men claiming to be caliph at once.` },
            { p: `The decisive moment came in <span class="num">945</span>, when the Buyids, a dynasty from northern Iran, took Baghdad and simply kept the caliph in place. They ran the government, commanded the army and collected the revenue. He kept the title, the ceremony, the Friday sermon in his name, and no independent army with which to enforce any of it. That is the condition to hold onto, and it is not the same as powerlessness: the caliph retained enormous religious and symbolic authority, and later caliphs, al-Nasir above all in the decades around <span class="num">1200</span>, recovered real political room to maneuver in Iraq. What he could not do after 945 was rule the wider Islamic world by his own force.` }
          ]
        },
        {
          heading: 'The split that defines the period: caliph and sultan',
          blocks: [
            { p: `In <span class="num">1055</span> the Seljuk Turks under Tughril Beg took Baghdad from the Buyids, and the caliph granted Tughril the title <span class="kt">sultan</span>. That word is the key to the whole topic. A <span class="kt">caliph</span> is a successor to the Prophet as leader of the Muslim community, a religious and legitimating office. A sultan holds power: he commands armies, appoints governors and collects taxes. From the eleventh century onward, the two were normally different men, and everyone involved understood the arrangement perfectly.` },
            { p: `The mechanism is worth stating plainly because it is the answer to "how did Islamic states change." A Turkic military commander who had converted to Islam needed something he could not win in battle, which was the right to be obeyed by scholars, judges and townspeople who did not share his origins. The caliph could supply exactly that, and nothing else. So the soldier protected the caliph, the caliph invested the soldier, and each got the half of authority he lacked. It is the same trade a European king made with a pope, arrived at independently and about a century earlier.` },
            { p: `Under the Seljuks this became a system. The vizier Nizam al-Mulk, one of the great administrators of the period, wrote a book of statecraft for his sultan and founded a network of state-funded <span class="kt">madrasas</span>, colleges that trained judges and officials in Sunni law. That is not piety for its own sake; it is a government manufacturing its own religious personnel, so that the scholars who would rule on the legitimacy of the state's actions had been educated at the state's expense.` }
          ]
        },
        {
          heading: '1258, and what actually ended',
          blocks: [
            { p: `In <span class="num">1258</span> the Mongol commander Hulegu, a grandson of Chinggis Khan, took Baghdad, destroyed much of the city and executed the last Abbasid caliph. The Abbasid line in Iraq ended, the irrigation systems of Mesopotamia suffered damage they took generations to recover from, and the political center of gravity in the Islamic world moved permanently to Cairo and to the east.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The sack of Baghdad did not end Islamic science, learning or power, and writing that it did is the most common error in this topic. Two facts settle it. The observatory at Maragha, the most advanced astronomical institution of its century, was founded in <span class="num">1259</span>, the year after the sack, under the patronage of the very Mongol ruler who had ordered it. And in <span class="num">1260</span>, two years after Baghdad fell, the Mongol advance was stopped at Ayn Jalut by the Mamluks of Egypt. What 1258 ended was the Abbasid Caliphate in Iraq. What continued, and in places accelerated, was everything else.`
            } },
            { p: `Three years later the Mamluk sultan Baybars found a surviving member of the Abbasid family, brought him to Cairo, and installed him as caliph there. This shadow caliphate had no army and no territory, and it lasted until <span class="num">1517</span>. That a warlord in Egypt thought it worth the trouble to acquire a caliph tells you precisely what the office had become: not power, but the license to exercise it.` }
          ]
        }
      ],
      useThis: {
        tool: `The caliph and sultan arrangement. <em>The mechanism is a trade of the two halves of authority: a Turkic commander supplied the army and the revenue, the caliph supplied the recognition that made obedience a religious duty rather than a surrender, and each held office because the other needed what he had.</em>`,
        limit: `It also meant no Islamic state after 945 could claim to speak for the whole community. Rival sultanates fought each other continuously, and the Crusader states and later the Mongols both entered a region that had no single authority able to organize a response.`,
        comparison: `Against <em>Europe</em>: the caliph-sultan split is structurally the same problem as pope and emperor, two claims to authority that need each other and resent each other. The difference is which side won. In the Islamic world the sultan absorbed the caliph's functions; in Europe the papacy stayed institutionally independent and outlasted the emperors who fought it.`
      },
      terms: [
        ['Caliph', 'The successor to the Prophet as head of the Muslim community, an office of religious legitimacy which after 945 usually carried no political power.'],
        ['Sultan', 'The holder of actual military and political power, formally invested by the caliph, an arrangement that defines Islamic governance from the eleventh century onward.'],
        ['Abbasid Caliphate', 'The dynasty ruling from Baghdad from 750, dominant then fragmenting, and ended in Iraq by the Mongol sack of 1258.'],
        ['Madrasa', 'A college of Islamic law and learning, systematically state-funded under the Seljuks, which trained the judges and officials a sultan needed.'],
        ['Ulama', 'The scholars of religious law, whose recognition made a ruler legitimate and whose training the state therefore had a strong interest in paying for.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'successors',
      num: '02',
      accent: 'rust',
      name: 'The Turkic Successor States',
      navLabel: 'The successors',
      dates: '1055 to 1517 &nbsp;·&nbsp; Seljuks, Mamluks, Delhi',
      thesis: `Three states, all founded by Turkic soldiers from the Central Asian steppe, all ruling populations who were not Turkic, and each one solving the problem of loyal manpower in a way the others did not.`,
      parts: [
        {
          heading: 'The Seljuks: nomads who inherited a bureaucracy',
          blocks: [
            { p: `The Seljuks were a Turkic clan who converted to Sunni Islam, moved into Persia, and by <span class="num">1055</span> controlled Baghdad. Their significance for this course is not their conquests but their timing. In <span class="num">1071</span> at Manzikert in eastern Anatolia they defeated a Byzantine army and captured the emperor, which opened Anatolia to Turkic settlement. That is the beginning of the long process that turns Anatolia into Turkey, and it is also the immediate reason the Byzantine emperor asked western Europe for military help, which produced the First Crusade in <span class="num">1095</span>.` },
            { p: `Administratively the Seljuks did what most steppe conquerors of settled societies did, which is keep the existing machinery and hire the people who knew how to run it. Persian became the language of administration and high culture, Persian bureaucrats staffed the offices, and the sultans patronized Persian poetry and Islamic scholarship. A student who can say that the Seljuks ruled through Persian administrators and Arabic religious law while remaining a Turkic military elite has described the standard structure of nearly every Islamic state in this unit.` }
          ]
        },
        {
          heading: 'The Mamluks: an army of purchased children',
          blocks: [
            { p: `The <span class="kt">Mamluks</span> are the strangest and most instructive institution in the topic. A mamluk was a boy, usually Turkic from the Kipchak steppe or later Circassian from the Caucasus, purchased as a slave, brought to Egypt, converted to Islam, and raised in a barracks under intensive military and religious training. On completing it he was freed and enrolled in the army of the master who had bought him.` },
            { p: `The mechanism is the point. A soldier bought as a child in a distant land has no clan in Egypt, no local marriage alliances, no village that expects favors, and no path to power except through the household that raised him. By construction he has no inherited local power base, which is exactly what a ruler surrounded by ambitious relatives wants. But be precise about where the loyalty actually went, because it explains what happened next: it was owed to the master who bought and trained him and to the men bought alongside him, not to an abstract state. That is a household bond, and households compete. So the system produced an intensely factional politics, and in <span class="num">1250</span> the mamluk regiments in Egypt cut out the middleman and took the sultanate for themselves, ruling Egypt and Syria until <span class="num">1517</span>.` },
            { p: `In <span class="num">1260</span> at Ayn Jalut in Palestine, a Mamluk army under Qutuz and Baybars defeated a Mongol force and stopped the Mongol advance into Egypt and North Africa. It is one of the genuinely decisive battles of the century, and it was won by an army of former slaves against the army that had just destroyed Baghdad.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the system was not hereditary, and that is the interesting part',
              html: `Mamluk sons were free-born Muslims and were therefore not eligible to be mamluks, so the ruling group had to be replenished by purchase in every generation rather than inherited. The Mamluk sultanate accordingly saw an enormous amount of factional violence, with sultans deposed and installed by rival regiments constantly, and it also stayed militarily formidable for two and a half centuries. Both things are consequences of the same design. If a checkpoint asks you about the limits of a system of rule, an elite that must be re-imported every generation is a very strong example.`
            } }
          ]
        },
        {
          heading: 'The Delhi Sultanate: a Muslim state ruling a Hindu majority',
          blocks: [
            { p: `In <span class="num">1206</span> a former mamluk of the Ghurid dynasty, Qutb al-Din Aibak, established himself as sultan at Delhi, and the <span class="kt">Delhi Sultanate</span> ruled much of northern India until <span class="num">1526</span>. Its central problem was different from the other two: a small Turkic and Persian Muslim military elite governing a large, ancient, overwhelmingly Hindu society with its own priestly class, its own law and its own literate tradition.` },
            { p: `Its main administrative tool was the <span class="kt">iqta</span>, an assignment of the revenue of a district to a military officer in exchange for maintaining troops. This is not a fief in the European sense, and the difference matters: an iqta was in principle revocable and transferable, so the sultan could move a commander away from a district before he put roots down in it. In practice, sultans who were weak found the assignments becoming hereditary, and the sultanate's history is largely the story of that struggle.` },
            { p: `Religiously the sultanate levied the <span class="kt">jizya</span>, the tax on non-Muslims, which paid for the state and simultaneously defined its subjects into two classes. Some sultans destroyed temples, particularly in newly conquered territory, and some patronized Hindu officials and married into local dynasties. Both are documented, both are on the exam, and a good answer holds them together rather than choosing one. The sultanate also, in the reign of Iltutmish's daughter <span class="kt">Razia Sultana</span> from <span class="num">1236</span> to <span class="num">1240</span>, briefly had a woman ruler, who was deposed in part because she was one.` },
            { p: `Its most consequential act may have been accidental. When the Mongols swept through Central Asia and Persia in the thirteenth century, scholars, poets, administrators and artisans fled ahead of them, and a great many landed at Delhi, which had the money to employ them and the armies to keep the Mongols out. The sultanate repelled repeated Mongol incursions, most effectively under Ala al-Din Khalji around <span class="num">1300</span>, whose price controls and market regulations in Delhi were designed precisely to keep a large standing army affordable.` }
          ]
        }
      ],
      useThis: {
        tool: `Military slavery, in the Mamluk form. <em>The mechanism is that a soldier purchased as a child abroad has no local kin, no clients and no inheritance, so his only route to status runs through the household that raised him. That severing of local ties is what converts a soldier into an instrument of the state rather than of a family.</em>`,
        limit: `The Delhi Sultanate's jizya and its episodes of temple destruction are the sharpest evidence of a ruling minority defining the majority as a separate, taxed category; Razia Sultana's deposition after four years is the sharpest evidence about gender.`,
        comparison: `Against <em>Song China</em> on staffing a state: both wanted officials with no independent power base, and both engineered one. China selected examined men and rotated them so they could not entrench; the Mamluks imported children who had no base to entrench in. Recruit the loyal, or manufacture them.`
      },
      terms: [
        ['Mamluk', 'A soldier purchased young, converted, trained and freed, with no inherited local power base and a loyalty owed to his master and fellow recruits; from 1250 the ruling class of Egypt and Syria.'],
        ['Delhi Sultanate', 'The Turkic and Persian Muslim state ruling much of northern India from 1206 to 1526 over a largely Hindu population.'],
        ['Iqta', 'A revocable assignment of a district&rsquo;s revenue to an officer in exchange for maintaining troops, designed to pay soldiers without granting them permanent land.'],
        ['Jizya', 'The tax levied on non-Muslim subjects, which funded the state and simultaneously marked a legal boundary between two classes of subject.'],
        ['Battle of Ayn Jalut', 'The 1260 defeat of a Mongol army by the Mamluks in Palestine, which halted the Mongol advance into Egypt and North Africa.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'spread',
      num: '03',
      accent: 'iron',
      name: 'How Islam Actually Spread',
      navLabel: 'How Islam spread',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; Merchants, Sufis, scholars, soldiers',
      thesis: `Conquest moved borders in the seventh and eighth centuries, and it moved them far faster than it moved anyone&rsquo;s religion. In region after region, large-scale conversion came generations or centuries later, slowly, through people whose job was not conquest at all, and the places Islam reached after 1200 were mostly places no Muslim army ever went.`,
      parts: [
        {
          heading: 'The mechanism that is not conquest',
          blocks: [
            { p: `Start with the fact that settles the question. In this period Islam became the religion of the courts, merchants and port populations of the Swahili coast of East Africa, of the trading cities of the West African Sahel, and of the ports of the Indonesian archipelago and the Malay peninsula, spreading inland and downward from there at very different rates. No Muslim army conquered any of those places. Whatever explains conversion there cannot be conquest, and whatever explains it there is likely to explain a good deal of it elsewhere too.` },
            { p: `The first channel is commerce. Muslim merchants ran some of the most extensive commercial networks across the Indian Ocean and the Sahara, alongside Gujarati, Tamil, Chinese and other traders, and a local ruler or merchant who converted joined a network that ran from Morocco to China: shared law for contracts, shared language for correspondence, credit that would be honored in a port two thousand miles away, and marriage alliances into merchant families. Conversion was not a bribe. It was membership in the largest commercial system on earth, and it is why conversion so often happened first among the coastal and urban trading class and reached the interior much later or not at all.` },
            { p: `The second channel is <span class="kt">Sufism</span>, the mystical tradition within Islam, and it is the one students underuse. A Sufi teacher offered direct personal experience of God through devotional practice, music, poetry and discipline under a master, organized into orders such as the Qadiriyya and, in India, the Chishtiyya. Sufi missionaries were flexible about local practice in a way jurists often were not: they tolerated existing devotional forms, absorbed the veneration of local holy figures into the veneration of Sufi saints, and taught in local languages. That flexibility is exactly why Sufism converted people that formal legal Islam did not reach, and it is also why some scholars considered it dangerous.` },
            { p: `The third channel is scholarship and law. Once a place had a mosque and a judge, it had a working legal system for commerce, marriage and inheritance, and the practical advantages of using it drew in people who had not started out as believers. The fourth is conquest and rule, which mattered most in northern India and Anatolia, and which reliably produced a Muslim state long before it produced a Muslim majority. India is the proof: after three centuries of Muslim rule, most Indians were still Hindu.` }
          ]
        },
        {
          heading: 'What conversion looked like on the ground',
          blocks: [
            { p: `The word to use is <span class="kt">syncretism</span>: the blending of a new religion with existing practice. In West Africa, rulers of Mali adopted Islam, made the hajj and built mosques while their subjects continued older practices and while court life kept forms that visiting jurists found scandalous. In the Indonesian archipelago, Islam absorbed Hindu, Buddhist and local spiritual traditions that had been there for centuries. In India, the Bhakti devotional movement among Hindus and Sufi devotion among Muslims came to resemble each other closely enough that shared shrines and shared saints were common.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a hostile witness is still a witness',
              html: `Ibn Battuta, the Moroccan jurist who traveled the Islamic world from <span class="num">1325</span> onward, is our single richest eyewitness for this period, and he is most useful exactly where he is most annoyed. In Mali he complains that women appear in public unveiled and converse freely with men who are not their relatives, and that the ruler's subjects prostrate themselves and pour dust on their heads before him. He disapproves; he is a Maliki judge from Morocco describing something that offends him. That is why the passage is good evidence: a witness recording practices he wishes were otherwise is not inventing them to please anyone.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Merchant and Sufi networks. <em>The mechanism is that conversion carried practical membership, a shared commercial law, a shared language of correspondence and credit honored across the ocean, while Sufi teachers made the religion locally usable by tolerating existing devotional practice instead of demanding it be abandoned first.</em>`,
        limit: `Rule and conversion are different things and moved at different speeds. Three centuries of the Delhi Sultanate left India with a Hindu majority, which is the clearest proof that a Muslim state did not manufacture Muslim subjects.`,
        comparison: `Against <em>Christianity in Europe</em>: both spread through institutions rather than armies in this period, but the Church converted through a territorial hierarchy of bishops and parishes attached to rulers, while Islam spread through merchant diasporas and Sufi teachers who needed no state at all. That is why Islam reached ports with no Muslim army within a thousand miles.`
      },
      terms: [
        ['Sufism', 'The mystical tradition within Islam, organized into orders under a master, whose adaptability to local practice made it the most effective missionary channel of the period.'],
        ['Syncretism', 'The blending of a new religion with existing beliefs and practices, the normal shape of conversion in West Africa, Southeast Asia and India.'],
        ['Dar al-Islam', 'The lands where Islam was practiced and Islamic law was in force, a cultural and legal zone rather than a single state after 945.'],
        ['Ibn Battuta', 'The Moroccan jurist whose travels from 1325 across Africa, Asia and Europe produced the richest single eyewitness account of the fourteenth-century Islamic world.'],
        ['Hajj', 'The pilgrimage to Mecca required once of every able Muslim, which annually mixed people from every corner of Dar al-Islam and moved ideas as well as pilgrims.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'knowledge',
      num: '04',
      accent: 'oxide',
      name: 'The Knowledge Machine',
      navLabel: 'The knowledge machine',
      dates: 'c. 800 to 1400 &nbsp;·&nbsp; Translation to the Muqaddimah',
      thesis: `Islamic scholarship was not a collection of brilliant individuals. It was a system with an infrastructure: cheap paper, a common language, institutional funding, and a hajj that shuffled scholars across three continents every year.`,
      parts: [
        {
          heading: 'The infrastructure first, the geniuses second',
          blocks: [
            { p: `Four conditions did most of the work. Paper, whose manufacture reached the Islamic world from China in the eighth century, replaced papyrus and parchment and made books an order of magnitude cheaper, which is why Baghdad and Cairo had bookshops and private libraries at a scale Europe would not see until printing. Arabic served as a common scholarly language from Spain to Central Asia, so a treatise written in Cordoba could be read in Bukhara without translation. Madrasas and rulers funded scholars, and hospitals, observatories and libraries were endowed as charitable foundations, giving research an income independent of any one patron's mood. And the hajj brought scholars from every region into the same cities every year.` },
            { p: `Against that background the achievements stop looking miraculous and start looking like what a well-funded network produces. The earlier translation movement had rendered Greek, Persian and Indian scientific works into Arabic, preserving and extending texts that were largely lost in western Europe. Al-Khwarizmi's ninth-century work on equations gave us the word algebra, and the Latinization of his name gave us the word algorithm. Indian numerals, including zero as a positional placeholder, moved westward through Arabic mathematics and reached Europe as the digits everyone now uses.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Be careful with the House of Wisdom. Textbooks often describe it as a great research university with a faculty and a mission, which reads like a modern institution and is more than the sources support. Historians of the period treat it as a library and translation project attached to the Abbasid court, real and important but institutionally modest. The safe and accurate version is to write about the translation movement of the ninth and tenth centuries, which is unquestionably documented, rather than staking your answer on a building.`
            } }
          ]
        },
        {
          heading: 'What was actually produced, and where it went',
          blocks: [
            { p: `In medicine, Ibn Sina, who died in <span class="num">1037</span>, compiled the <em>Canon of Medicine</em>, a systematic synthesis of Greek and Islamic medical knowledge that was translated into Latin and remained a standard text in European universities into the seventeenth century. In philosophy, Ibn Rushd of Cordoba, who died in <span class="num">1198</span>, wrote commentaries on Aristotle so thorough that Latin scholars called him simply "the Commentator," and the whole of European scholastic philosophy, Thomas Aquinas included, was built partly in response to him.` },
            { p: `In astronomy, Nasir al-Din al-Tusi built the observatory at Maragha in Persia from <span class="num">1259</span> under Mongol patronage, with a staff of astronomers, a library and instruments of unmatched precision. Its scholars produced planetary models that solved technical problems in the Greek system, and mathematical devices developed there appear in Copernicus's work three centuries later, closely enough that historians of science argue seriously about how the transmission happened.` },
            { p: `And in what we would now call social science, Ibn Khaldun completed the <em>Muqaddimah</em> in <span class="num">1377</span>. He argued that the rise and fall of dynasties follows a pattern driven by <span class="kt">asabiyya</span>, group solidarity: a cohesive group from a hard environment conquers a soft settled one, its descendants grow comfortable and lose the solidarity that won them power, and a new cohesive group replaces them. It is the first serious attempt to explain history by social structure rather than by the virtues of rulers, and it is written by a man who lived through the aftermath of the Black Death and had watched dynasties fall.` },
            { p: `The direction of transmission is the part to keep. Arabic works flowed into Latin Europe through translation centers in Spain and Sicily during the twelfth century, and European universities from Bologna to Oxford built their medical and philosophical curricula on them. When Unit 1 asks you why the Islamic world matters, the honest answer is that for several centuries it was the place where the knowledge of Greece, Persia, India and China was collected in one language, corrected, extended, and then passed on.` }
          ]
        }
      ],
      useThis: {
        tool: `The scholarly infrastructure. <em>The mechanism is cheap paper, one shared scholarly language across three continents, endowed institutions that paid scholars independently of a single patron, and an annual pilgrimage that mixed scholars from everywhere. Individual genius is common everywhere; the infrastructure is what makes it accumulate.</em>`,
        limit: `Access to it ran through the madrasa and the mosque, which meant overwhelmingly through men. Women appear as patrons, as transmitters of hadith and as founders of institutions, and almost never as salaried scholars.`,
        comparison: `Against <em>Song China</em> on knowledge: both had paper, printing and state-funded education, but Song learning was funneled into an examination that qualified men for office, while Islamic learning was organized around law and endowed institutions with no single state to serve. One system produced administrators; the other produced a body of transmissible science that outlived every state that hosted it.`
      },
      terms: [
        ['Translation movement', 'The ninth and tenth century project of rendering Greek, Persian and Indian scientific works into Arabic, which preserved and extended texts largely lost in Latin Europe.'],
        ['Ibn Sina', 'The scholar, died 1037, whose Canon of Medicine remained a standard European university text into the seventeenth century.'],
        ['Ibn Rushd', 'The Cordoban philosopher, died 1198, whose Aristotle commentaries shaped Latin scholastic philosophy, including the work of Thomas Aquinas.'],
        ['Maragha observatory', 'The astronomical institution founded in Persia in 1259 under Mongol patronage, whose planetary models reappear in Copernicus three centuries later.'],
        ['Asabiyya', 'Ibn Khaldun&rsquo;s term for the group solidarity that lets a cohesive people take power, and whose loss explains why their descendants lose it.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'hierarchy',
      num: '05',
      accent: 'gold',
      name: 'Who Was on Top, and Who Was Not',
      navLabel: 'Hierarchy and exclusion',
      dates: 'c. 1200 to 1450 &nbsp;·&nbsp; The legal order of Dar al-Islam',
      thesis: `Islamic states offered religious minorities a legal status that was, by the standards of the period, notably secure, and that status was explicitly unequal. Both halves of that sentence are required, and dropping either one produces a bad answer.`,
      parts: [
        {
          heading: 'The dhimmi arrangement',
          blocks: [
            { p: `Jews, Christians and, in practice, Hindus, Zoroastrians and others under Muslim rule held the status of <span class="kt">dhimmi</span>, protected people. They could practice their religion, run their own community courts for matters of family law, own property and trade. In exchange they paid the jizya, were barred from certain offices and from military service, and were subject to restrictions on public religious display and sometimes on dress, on building new houses of worship, and on riding horses.` },
            { p: `Compare that with what a Jewish community in western Europe faced in the same centuries, expulsion from England in <span class="num">1290</span> and from France in <span class="num">1306</span>, and it is obvious why substantial Jewish communities flourished in Cairo, Baghdad and Muslim Spain. Compare it with a modern standard of equal citizenship and it is obviously a system of legal inferiority financed by a tax on being the wrong religion. The historically useful judgment is comparative: this was one of the more secure arrangements available to a religious minority in the world of <span class="num">1300</span>, and it was still a hierarchy written into law.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Cairo Geniza',
              html: `A storeroom in a Cairo synagogue preserved roughly three hundred thousand document fragments, discarded over centuries and never destroyed because they might carry the name of God. Business letters, marriage contracts, court records, school exercises, shopping lists. It is the richest surviving record of ordinary life anywhere in the medieval world, and it exists because of a religious scruple about wastepaper. What it shows is a Jewish merchant community trading from Spain to India, going to Muslim courts when it suited them and their own when it did not, and living a life that neither the persecution story nor the tolerance story quite fits.`
            } }
          ]
        },
        {
          heading: 'Slavery, and the shape it took',
          blocks: [
            { p: `Slavery was legal and widespread. Enslaved people came from beyond the borders of Dar al-Islam, since enslaving a fellow Muslim was prohibited, which channeled the trade toward the Turkic steppe, the Caucasus, sub-Saharan Africa and eastern Europe. Their uses were varied: household service, agricultural labor in some regions, concubinage, and the military slavery described in section 02.` },
            { p: `Two features are distinctive and both appear on exams. Manumission, the freeing of an enslaved person, was religiously encouraged and common, and the child of an enslaved concubine by her owner was born free and legitimate, which meant that sons of enslaved women became sultans. So the institution was not a permanent caste in the way plantation slavery in the Atlantic world would later become. That is a real structural difference, and it should not be mistaken for mildness: the trade that supplied it moved enormous numbers of people across the Sahara and the Indian Ocean for centuries.` }
          ]
        },
        {
          heading: 'Women, in law and in practice',
          blocks: [
            { p: `Islamic law gave women rights that were genuinely unusual in the world of <span class="num">1200</span>: to own property in their own name, to keep that property in marriage, to inherit a fixed share, to consent to their marriage, to hold and manage their dowry. It also fixed a woman's inheritance share at half a man's, gave a husband rights of divorce a wife did not equally hold, and treated her testimony in some legal contexts as worth less than his.` },
            { p: `Practice varied widely, and the variation is where the good evidence is. Elite urban women faced increasing seclusion and veiling; rural and nomadic women worked publicly and did not. Women endowed mosques, madrasas and hospitals as charitable foundations, and were significant transmitters of hadith. Razia Sultana ruled Delhi. In Egypt, Shajar al-Durr governed in <span class="num">1250</span> at the founding moment of the Mamluk state and was quickly maneuvered out. And Ibn Battuta's shock at the unveiled women of Mali is worth remembering as evidence about him as much as about them: the practice he expected was that of urban Morocco, not of Dar al-Islam as a whole.` }
          ]
        }
      ],
      useThis: {
        tool: `The dhimmi status as an instrument of rule. <em>The mechanism is that a minority which can practice, trade and adjudicate its own family law has far less reason to revolt than one facing conversion or expulsion, while the jizya turns its continued existence into state revenue. Toleration and taxation were the same policy.</em>`,
        limit: `It was legal inequality by design: a tax on belief, exclusion from office and arms, and restrictions on worship and display. Add the fixed half-share of inheritance and the deposition of Razia Sultana for the gender half of the argument.`,
        comparison: `Against <em>Europe</em> on religious minorities: England expelled its Jewish population in 1290 and France in 1306, while Cairo and Baghdad taxed theirs and kept them. Against <em>the Delhi Sultanate</em> specifically: the same jizya that looks tolerant next to expulsion looks like a permanent penalty when levied on the majority of a country's population.`
      },
      terms: [
        ['Dhimmi', 'A protected non-Muslim subject, permitted worship, property and community courts in exchange for the jizya and a set of legal restrictions.'],
        ['Manumission', 'The freeing of an enslaved person, religiously encouraged and common enough that Islamic slavery did not harden into a permanent hereditary caste.'],
        ['Waqf', 'A charitable endowment funding a mosque, madrasa, hospital or fountain in perpetuity, which is how scholarship and medicine were paid for without depending on a single ruler.'],
        ['Shajar al-Durr', 'The woman who ruled Egypt briefly in 1250 at the founding of the Mamluk state, and was removed within months.'],
        ['Sharia', 'Islamic law, derived from the Quran and the practice of the Prophet, which supplied a common legal framework for commerce and family life across Dar al-Islam.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a complete comparison: the claim, the specific evidence, and the reason the difference existed. The third part is where the points are. Take the structure and fill it with whichever two regions your prompt names.`,
    pairs: [
      {
        category: 'State building',
        title: 'Dar al-Islam and Song China solved the loyalty problem in opposite directions',
        body: `Both needed servants of the state with no independent power base. Song China ran an anonymous written examination, sealed names, recopied papers, and rotated the winners between posts so none of them could entrench. The Islamic states bought children on the steppe, converted and trained them, and freed them into an army where they had no kin, no clients and nothing to inherit. The difference exists because the Song inherited a literate bureaucratic tradition and a tax system that could pay salaries in cash, while a Turkic sultan ruling a population that was not his own had no such tradition to inherit and needed loyal manpower faster than an education system could produce it.`
      },
      {
        category: 'Belief and rule',
        title: 'The caliph and the pope are the same problem with different outcomes',
        body: `Both were religious authorities whose recognition made a ruler legitimate, and both ended up entangled with soldiers who had the power they lacked. After 945 the caliph kept the ceremony and lost the substance, and by 1261 a Mamluk sultan could install a caliph in Cairo as a piece of state furniture. The papacy stayed institutionally separate, with its own courts, revenue and the power to excommunicate a king, and outlasted the emperors who fought it. The difference exists because the Church had built an independent hierarchy across centuries when western Europe had no state strong enough to absorb it, while the caliphate had always been the state and could therefore be captured whole.`
      },
      {
        category: 'Networks',
        title: 'Islam spread furthest where no Muslim army ever went',
        body: `The Swahili coast, the Sahel and the ports of Southeast Asia became Muslim through merchants and Sufi teachers, not conquest, because conversion carried membership in a commercial system with shared law, shared language and credit honored across an ocean. Northern India, which had three centuries of Muslim rule, remained majority Hindu. Put those two facts in the same sentence and you have the whole argument: conquest changes who collects the taxes, while trade and teaching change what people believe, and there is no reason the two should move together.`
      },
      {
        category: 'Continuity and change',
        title: '1258 changed the political map and not the intellectual one',
        body: `The Mongols destroyed Baghdad and killed the last Abbasid caliph of Iraq, and within two years the Mamluks had stopped them at Ayn Jalut and within one year al-Tusi had founded the Maragha observatory under Mongol patronage. The reason the scholarship survived a catastrophe that ended a dynasty is that it never depended on the dynasty: it ran on cheap paper, a shared language, and endowments that paid for a hospital or a library in perpetuity regardless of who was ruling. That is a durable answer to any continuity-and-change prompt, because it names the thing that changed, the thing that did not, and the structural reason for the difference.`
      }
    ]
  }
};
