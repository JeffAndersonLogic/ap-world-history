'use strict';

/**
 * Topic 2.2, The Mongol Empire: the deep reading.
 *
 * Why this exists. The success criteria name four things and ask for a
 * mechanism from each: cavalry tactics, siege warfare, the unification of the
 * steppe and the khanate system; then the Pax Mongolica with the yam, merchant
 * protection and the great travelers as evidence; then destructive and
 * connective effects held together in one answer. Three mechanisms and a
 * balanced judgment is more than a survey paragraph can carry, and the third is
 * the part students find hardest, because it requires holding two true things
 * about the same people at the same time.
 *
 * The organizing idea is that almost everything the Mongols did to conquer was
 * also what they did to govern. The decimal army that broke tribal loyalty
 * became the administrative grid; the relay system built to move orders became
 * the artery of the trade; the willingness to use foreign specialists that won
 * sieges also staffed the treasury. That is why this chapter runs conquest,
 * rule and exchange in sequence rather than treating them as separate topics.
 *
 * Three things carried deliberately because they cost points every year:
 *
 *   1. The empire's westward expansion began as retaliation for the murder of a
 *      trade caravan and its envoys. The single most connective empire in the
 *      period went to war over commerce, in 1218, and almost no answer says so.
 *   2. Terror was policy, not temperament: a city that surrendered was spared
 *      and a city that resisted was destroyed, publicly and on purpose, because
 *      the next city was watching. That is a mechanism, and "the Mongols were
 *      brutal" is not.
 *   3. The famous massacre totals come from chroniclers writing for later
 *      patrons and are demographically impossible as stated. Saying so is not
 *      minimizing; it is the difference between using evidence and repeating it.
 */

module.exports = {
  topicKey: 't2-2',
  slug: 'topic-2-2-mongol-empire',
  lessonFile: 'lesson-2-2-mongol-empire.html',

  titleHtml: 'The Empire of the <em>Relay</em>',
  deck: `Roughly a million people on the steppe conquered and then governed most of Eurasia, and the same three habits explain both halves: organize by function rather than by family, use the best specialist regardless of where he comes from, and move information faster than anyone else can. This chapter takes the conquest, the administration and the exchange in order, and finishes with the destruction, which belongs in the same answer and not in a different one.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Read the sections in order. The argument is cumulative: the way the army was organized in section 01 is the reason it won in 02, which is the reason it could be governed as it was in 03, which is what produced the exchange in 04. Section 05 is the cost, and it is written to be used in the same paragraph as 04 rather than instead of it.`,
    steps: [
      `<b>01 The steppe problem:</b> what Temujin actually changed, which was not tactics.`,
      `<b>02 How they won:</b> mobility, the bow, feigned retreat, and borrowed siege engineering.`,
      `<b>03 How they ruled:</b> khanates, the yam, census and tax, and hired foreigners.`,
      `<b>04 What moved:</b> travelers, sciences, technologies and one world history.`,
      `<b>05 The cost and the collapse:</b> massacre, irrigation, succession, plague.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'unification',
      num: '01',
      accent: 'gold',
      name: 'The Steppe Problem, and What Temujin Changed',
      navLabel: 'The steppe problem',
      dates: 'c. 1180 to 1206 &nbsp;·&nbsp; Temujin to Chinggis Khan',
      thesis: `Steppe peoples had been formidable cavalry for two thousand years and had never held Eurasia, because they fought each other. The Mongol innovation was not a weapon or a tactic. It was an organization that made a warrior's loyalty run to the khan instead of to his clan.`,
      parts: [
        {
          heading: 'Why the steppe had never done this before',
          blocks: [
            { p: `Pastoral nomadic society on the Mongolian steppe was organized by kinship: clans and tribes, with alliances built on marriage, feud and grazing rights, and confederations that formed for a campaign and dissolved after it. That structure produced superb light cavalry, since every man rode and hunted with a bow from childhood, and it reliably produced instability, because a confederation held together only as long as its leader was winning and its component clans agreed.` },
            { p: `Temujin, born into that world and left destitute as a boy when his father was killed, spent roughly twenty years defeating, absorbing and reorganizing the steppe tribes. In <span class="num">1206</span> an assembly of the united tribes proclaimed him <span class="kt">Chinggis Khan</span>. The reorganization is the point, and it is what the success criteria mean by the unification of the steppe.` }
          ]
        },
        {
          heading: 'The decimal army, which is really a political reform',
          blocks: [
            { p: `The army was rebuilt into a <span class="kt">decimal organization</span>: units of ten, a hundred, a thousand and ten thousand, the last called a tumen. Crucially, the men in a unit were deliberately drawn from different clans and tribes, and a warrior could not leave his unit for another. His commander was appointed, and appointed increasingly on merit rather than birth. Collective responsibility ran through the unit, so a man's ten stood or fell with him.` },
            { p: `Read that as politics rather than as military administration and it becomes the founding act of the empire. If your unit is your clan, your general is your uncle and your loyalty is to a lineage that existed before the khan and will exist after him. If your unit is a mixed hundred under an appointed captain, your standing depends entirely on the khan's system, and the old tribal identities have nothing to attach to. Chinggis dismantled the very structure that had made previous steppe confederations fall apart, and did it before he ever crossed a border.` },
            { p: `Merit was real and is worth a specific example, because a claim about meritocracy needs one. Subutai, one of the two or three most successful commanders of the century, who campaigned from China to Hungary, was the son of a blacksmith, from a forest people rather than the aristocracy. In a steppe confederation of the old kind he could not have commanded anything.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Secret History, and the missing law code',
              html: `Our fullest inside account of Chinggis's rise is <em>The Secret History of the Mongols</em>, composed in Mongolian not long after his death for the ruling family. It is candid about failures and humiliations in a way court panegyrics usually are not, which is part of why historians value it, and it is still a dynastic account written for the dynasty. The <span class="kt">yassa</span>, the law code attributed to Chinggis, is a harder case: no complete text survives, and everything we have is quotation and summary in later Persian and Arabic writers. Write about it carefully, as a body of decrees whose contents we know only at second hand, and you will be ahead of the textbooks that quote it as though someone had a copy.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The decimal organization. <em>The mechanism is that mixing clans inside every unit of ten, hundred and thousand, appointing commanders on merit, and forbidding transfer between units left tribal loyalty with nothing to attach to, so that a warrior's entire standing depended on the khan's system rather than on a lineage that predated it.</em>`,
        limit: `It solved cohesion and did not solve succession. Every generation, the same office was contested among the ruling family's branches, and section 05 is the bill for that.`,
        comparison: `Against <em>Song China</em> in Topic 1.1: both states rebuilt their militaries specifically to stop commanders from becoming independent powers, the Song by placing civil officials over the army and rotating troops, the Mongols by dissolving the clans inside the units. Same problem, and both worked.`
      },
      terms: [
        ['Chinggis Khan', 'The title taken by Temujin in 1206 when the united steppe tribes proclaimed him; the founder of the empire and of its organization.'],
        ['Decimal organization', 'The army structured in tens, hundreds, thousands and tumens of ten thousand, with clans deliberately mixed and commanders appointed.'],
        ['Tumen', 'A unit of ten thousand, the largest formation in the decimal system and the standard building block of a Mongol field army.'],
        ['Yassa', 'The body of law attributed to Chinggis Khan, known only through quotation and summary in later writers, with no complete text surviving.'],
        ['Kurultai', 'The assembly of Mongol nobles that proclaimed a khan, and whose need to gather from across Eurasia repeatedly interrupted campaigns.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'conquest',
      num: '02',
      accent: 'rust',
      name: 'How They Won',
      navLabel: 'How they won',
      dates: '1209 to 1279 &nbsp;·&nbsp; Khwarezm to the Southern Song',
      thesis: `Mobility won the field battles, borrowed engineers won the sieges, and a deliberate policy about surrender won many cities before a shot was fired. All three are mechanisms you can state in a sentence.`,
      parts: [
        {
          heading: 'Mobility, and what it actually bought',
          blocks: [
            { p: `A Mongol trooper rode with several remounts, switching horses through the day so that no animal was ridden to exhaustion, and could live for extended periods on what the herds provided rather than on a supply train. An army that carries its own food supply on the hoof and changes horses every few hours moves several times faster than one that must be fed from depots, and it can appear where no one has prepared for it.` },
            { p: `The weapon was the composite bow, built of wood, horn and sinew, short enough to shoot from the saddle and powerful out of proportion to its size, shot at the gallop by men who had used one since childhood. Combined with the mobility, it produced the characteristic tactic: engage at a distance, wear the enemy down with archery, avoid contact until the opponent is disordered, and only then close. The <span class="kt">feigned retreat</span> was the signature move, a withdrawal that looked like a rout and drew a pursuing enemy out of formation into an encirclement. It worked repeatedly against opponents who had heard about it, because a fleeing enemy is very hard to resist chasing.` },
            { p: `Discipline is what made these possible and is the part usually left out. Mongol armies maneuvered in coordinated formations over great distances using signals and pre-arranged plans, an ability trained by the <span class="kt">nerge</span>, the great collective hunt in which a huge circle of riders drove game inward over days without letting a gap open. That is a battlefield exercise conducted as a food-gathering ritual, and it is why a feigned retreat did not turn into an actual one.` }
          ]
        },
        {
          heading: 'Sieges, which nomads are supposed to be bad at',
          blocks: [
            { p: `The standard objection to steppe armies is that they cannot take walled cities, and the Mongols answered it by hiring the people who could. Chinese engineers came into Mongol service early and Muslim engineers later, and by the time of the long campaign against the Southern Song the Mongols were deploying counterweight trebuchets built by specialists from the Islamic world, which is what broke the five-year siege of the twin cities of Xiangyang in <span class="num">1273</span>.` },
            { p: `That is the empire's defining habit in miniature. It is the same instinct that put Persian administrators in the Chinese treasury and Chinese doctors in Persia. A society with a small population and enormous conquests either learns to use other people's specialists or stops expanding, and the Mongols were extraordinarily unsentimental about it.` }
          ]
        },
        {
          heading: 'Terror as policy',
          blocks: [
            { p: `The rule was stated openly: a city that submitted was spared and taxed, and a city that resisted and was then taken was destroyed, its population massacred or enslaved and its walls thrown down. Nishapur in <span class="num">1221</span> and Baghdad in <span class="num">1258</span> are the standard examples, and the destruction in both was real and enormous.` },
            { p: `The point to make in an essay is that this was a calculation rather than a temperament. Storming walls is expensive in men and time, and the Mongols were always short of men. A reputation for annihilating resisters and honoring surrenders makes surrender the rational choice for the next city, which means most cities can be taken at no cost at all. The atrocities were, in the coldest possible sense, advertising, and they were followed by the deliberate sparing of craftsmen, scribes and engineers, who were valuable, and often by their deportation to work elsewhere in the empire.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The westward campaign was not planned world conquest from the start. Chinggis sent a trade caravan and then envoys to the Khwarezmian empire in Central Asia; the governor of Otrar had the merchants killed as spies in <span class="num">1218</span> and the shah then executed the envoys sent to demand redress. The invasion that followed destroyed Khwarezm and opened the road to Persia and eastern Europe. Say this in an answer about connectivity and it does real work: the empire that would integrate Eurasian commerce went to war in the first place over the murder of a merchant caravan.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Surrender-or-be-destroyed as a siege strategy. <em>The mechanism is that annihilating a city that resists and sparing one that submits makes submission the rational choice for every city that hears about it, so a chronically undermanned army takes most of its objectives without fighting for them. The massacres were the advertisement that made the policy work.</em>`,
        limit: `It was still mass killing, and the destruction at Nishapur, Merv and Baghdad was real. The judgment to reach for is that terror was efficient, not that it was less terrible than it looks.`,
        comparison: `Against <em>Persia</em> under the Achaemenids in the Foundations 3 chapter: Persia bought quiet by leaving conquered peoples their gods and rulers, the Mongols bought it by making the alternative unthinkable. Both are strategies for governing more people than you have soldiers.`
      },
      terms: [
        ['Composite bow', 'A short bow of wood, horn and sinew, powerful enough to be decisive and short enough to shoot from horseback at the gallop.'],
        ['Feigned retreat', 'A withdrawal staged to look like a rout, drawing a pursuing enemy out of formation into a prepared encirclement.'],
        ['Nerge', 'The great collective hunt that trained coordinated maneuver over long distances, the exercise behind Mongol battlefield discipline.'],
        ['Counterweight trebuchet', 'The heavy siege engine, built by engineers from the Islamic world, that broke the long Song defense at Xiangyang in 1273.'],
        ['Otrar', 'The Khwarezmian city whose governor had a Mongol trade caravan killed in 1218, the immediate cause of the westward invasion.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'rule',
      num: '03',
      accent: 'iron',
      name: 'How They Ruled',
      navLabel: 'How they ruled',
      dates: '1227 to 1368 &nbsp;·&nbsp; Four khanates, one relay system',
      thesis: `The Mongols governed by hiring the conquered, protecting the merchants, counting the taxpayers and moving information faster than anyone else. Very little of it was Mongol in origin, and assembling it was the achievement.`,
      parts: [
        {
          heading: 'Four khanates, and why that matters',
          blocks: [
            { p: `The empire was divided among the descendants of Chinggis and by the later thirteenth century consisted of four effectively separate states: the <span class="kt">Yuan</span> dynasty in China and Mongolia, whose ruler held nominal seniority; the <span class="kt">Ilkhanate</span> in Persia and Iraq; the <span class="kt">Chagatai Khanate</span> in Central Asia; and the <span class="kt">Golden Horde</span> on the western steppe, dominating the Russian principalities. They shared a family, a claim to Chinggisid legitimacy and a commercial system, governed through increasingly separate administrations, and they also fought each other: the Golden Horde and the Ilkhanate went to war in the <span class="num">1260</span>s, with the Muslim khan of the Horde opposing the Ilkhan who had sacked Baghdad.` },
            { p: `The khanates are what makes "the Mongol Empire" a slippery phrase after about <span class="num">1260</span>, and the precision is worth having. Each khanate adopted the culture of the region it ruled: the Ilkhanate became Persian and Muslim, with Ghazan's conversion in <span class="num">1295</span> as the formal turn; the Golden Horde became Turkic and Muslim; the Yuan governed China with Chinese institutions while keeping Mongols and other non-Chinese in the top offices. Within three generations, the descendants of one family were ruling as four different kinds of monarch.` }
          ]
        },
        {
          heading: 'The machinery',
          blocks: [
            { p: `<b>The yam.</b> Relay stations at intervals of roughly a day's ride, each stocked with horses, riders and provisions, carried official messages, envoys and orders across the empire at a speed no contemporary state matched. Travel on it required a paiza, the inscribed tablet described in the Topic 2.1 chapter. The yam is the single most useful thing to name when a question asks how the Mongols administered such distances, because it is the answer: they did not administer the distance, they shortened the time.` },
            { p: `<b>Census and tax.</b> The Mongols conducted censuses in conquered territories and taxed by household, using registers and, in many places, the existing local bureaucracy. This is unglamorous and it is what turned conquest into revenue. It is also the point at which an argument inside the Mongol elite becomes famous: after the conquest of northern China some proposed converting farmland to pasture, and the administrator Yelu Chucai argued that taxing the peasants where they were would produce vastly more wealth than grazing the land. He was right, he won the argument, and the empire's finances thereafter rested on the productivity of conquered agrarian societies.` },
            { p: `<b>Hired foreigners.</b> Persians, Uyghurs, Khitans, Chinese, Armenians, Jews and Europeans staffed the administrations, chosen for skill and, usefully, for having no local power base of their own, which is the same logic behind the mamluk system in Topic 1.2 arrived at from a different direction. In Yuan China the ruling order placed Mongols first and other non-Chinese, the semu, second, above northern and then southern Chinese, and the examination system was suspended for decades before being restored in <span class="num">1315</span>.` },
            { p: `<b>Religious policy.</b> Mongol rulers extended tax exemptions and protection to the clergy of many religions, Buddhist, Daoist, Christian, Muslim and others, and held debates between religious specialists at court. Frame it as policy rather than as belief: a conqueror ruling a dozen religions who privileges none of them removes religion as a reason to revolt and acquires a set of grateful institutions with influence over their own communities.` },
            { p: `<b>Merchant protection.</b> Merchants were exempted from many burdens, given legal protection, and financed directly through the ortoq associations described in the Topic 2.1 chapter, in which Mongol nobles supplied capital and took a share of the profits. The elite were stakeholders in the trade, which is a far better explanation for their policies than any general disposition toward openness.` }
          ]
        }
      ],
      useThis: {
        tool: `The yam relay system. <em>The mechanism is that stations a day's ride apart, stocked with fresh horses and provisions and reserved for authorized riders, moved orders and intelligence across Eurasia in days rather than months, so a court could hear about a revolt, a closed pass or a harvest failure while it was still possible to act on it.</em>`,
        limit: `The yam was for the state, not for merchants, and it was a burden on the communities required to provision it. In Yuan China the ethnic ranking that put Mongols and semu above Chinese subjects is the exclusion evidence to pair with it.`,
        comparison: `Against <em>Persia's</em> Royal Road in the Foundations 3 chapter: the same institution, relay stations with fresh horses, invented independently and for the same reason, because every large empire discovers that the binding constraint on ruling at distance is the speed of information.`
      },
      terms: [
        ['Yuan', 'The Mongol dynasty ruling China from 1271 to 1368, whose khan held nominal seniority over the other khanates.'],
        ['Ilkhanate', 'The Mongol state in Persia and Iraq, which converted to Islam under Ghazan in 1295 and became a patron of Persian scholarship.'],
        ['Golden Horde', 'The Mongol khanate of the western steppe, dominating the Russian principalities and eventually Turkic and Muslim in culture.'],
        ['Chagatai Khanate', 'The Mongol khanate of Central Asia, astride the overland trade routes and the most politically unstable of the four.'],
        ['Semu', 'The Yuan category of non-Chinese, non-Mongol officials and specialists, ranked above Chinese subjects in the dynasty&rsquo;s social order.'],
        ['Yelu Chucai', 'The administrator who argued that taxing conquered farmers would yield far more than converting their land to pasture, and won.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'exchange',
      num: '04',
      accent: 'oxide',
      name: 'What Moved Under Them',
      navLabel: 'What moved',
      dates: 'c. 1250 to 1350 &nbsp;·&nbsp; Travelers, sciences, technologies',
      thesis: `The most important Mongol export was not a good. It was contact: specialists, books, techniques and diseases moving between civilizations that had known of each other only vaguely, in both directions.`,
      parts: [
        {
          heading: 'The travelers, and what they are evidence of',
          blocks: [
            { p: `<span class="kt">Marco Polo</span>, a Venetian merchant's son, spent years in the Yuan empire and dictated an account of it in a Genoese prison in the <span class="num">1290</span>s that became the most widely read description of Asia in Europe. Ibn Battuta, the Moroccan jurist described in the Topic 1.2 chapter, traveled the Islamic world and beyond from <span class="num">1325</span>. Both are indispensable and both need handling: Polo's book was co-written with a romance author, omits things a resident of China could hardly miss, and has been argued about for centuries, while Ibn Battuta dictated from memory decades later and some passages appear to borrow from earlier writers.` },
            { p: `The traveler most worth adding to your repertoire moved the other way. <span class="kt">Rabban Bar Sauma</span> was a Christian monk of the Church of the East, born near the Mongol capital in China, who traveled west on an Ilkhanid diplomatic mission in the <span class="num">1280</span>s, reached Constantinople, Rome, Paris and Bordeaux, met the kings of France and England and the pope, and celebrated the liturgy before them. A Chinese-born monk representing a Persian Mongol court to the courts of western Europe is the Pax Mongolica in one biography, and almost no student answer contains him.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: Rashid al-Din compiled one of the most ambitious histories of the medieval world, and it took an empire to make it possible',
              html: `Rashid al-Din, a physician and vizier at the Ilkhanid court, compiled around <span class="num">1307</span> a history that set out to cover not only the Mongols and the Islamic world but China, India, the Turks and the Franks of western Europe, using informants and texts from each. That is a genuinely new kind of book, and it exists because a single political system had put a Persian administrator within reach of Chinese, Indian and European informants at once. When a prompt asks for evidence of Mongol-era cultural exchange, a world history compiled from the sources of four civilizations is stronger than any list of trade goods.`
            } }
          ]
        },
        {
          heading: 'Specialists and sciences',
          blocks: [
            { p: `The Ilkhanate funded the observatory at Maragha from <span class="num">1259</span>, described in the Topic 1.2 chapter, and its library and staff included Chinese as well as Muslim astronomers; Persian astronomical knowledge in turn reached the Yuan court, which maintained an Islamic astronomical bureau alongside a Chinese one. Rashid al-Din sponsored a Persian work on Chinese medicine. Chinese agricultural and medical texts circulated in Persia and Persian techniques in China.` },
            { p: `Technologies moved with the specialists: gunpowder weapons and the formula for gunpowder westward, printing and papermaking further west than they had reached before, the Chinese blast furnace and Persian irrigation methods across the empire, and cobalt from Persia to the kilns of southern China, where it was used to paint the blue-and-white porcelain that was then exported back to Persian buyers. That porcelain trade is the best single illustration in the unit of what integration does: a Persian mineral, a Chinese technique, a Middle Eastern market, and shapes designed for it.` },
            { p: `And the diseases. The best current evidence places the origin of the fourteenth-century plague pandemic in Central Asia, and its movement across Eurasia follows the routes the empire had made fast and busy. The Topic 2.6 chapter is where that argument is made in full; what belongs here is the causal link, which is that the same integration that carried the porcelain carried the pathogen, and neither one traveled without the other.` }
          ]
        }
      ],
      useThis: {
        tool: `Movement of specialists rather than goods. <em>The mechanism is that a single political system let a ruler summon an astronomer, a physician, an engineer or an administrator from anywhere in Eurasia and pay him, so techniques traveled inside people's heads at the speed of a man on the yam rather than by slow imitation of imported objects.</em>`,
        limit: `The exchange ran through courts and elites. A Persian astronomer at the Yuan court is not evidence that ordinary life across Eurasia was becoming cosmopolitan, and the most widely shared consequence of the same connection was the pandemic.`,
        comparison: `Against the <em>Indian Ocean</em> in Topic 2.3: maritime exchange moved communities, resident merchant diasporas that settled and intermarried, while Mongol exchange moved individuals summoned by rulers. Traders who stay versus specialists who are sent, and the cultural results differ accordingly.`
      },
      terms: [
        ['Marco Polo', 'The Venetian whose account of the Yuan empire, dictated in the 1290s, became Europe&rsquo;s most widely read description of Asia.'],
        ['Rabban Bar Sauma', 'The Church of the East monk born near the Mongol capital in China who traveled west as an Ilkhanid envoy and met the kings of France and England.'],
        ['Rashid al-Din', 'The Ilkhanid vizier whose history of about 1307 covered the Mongols, the Islamic world, China, India and western Europe from their own sources.'],
        ['Blue-and-white porcelain', 'Chinese ceramics painted with Persian cobalt in shapes designed for Middle Eastern buyers, the clearest single object of Mongol-era integration.'],
        ['Pax Mongolica', 'The period of relative security along the Eurasian routes under Mongol rule, which moved goods, specialists, techniques and disease alike.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'cost',
      num: '05',
      accent: 'gold',
      name: 'The Cost, and the Collapse',
      navLabel: 'The cost and collapse',
      dates: '1219 to 1368 &nbsp;·&nbsp; Massacre, succession, plague',
      thesis: `The destruction was enormous and the connection was real, and a good answer holds both without splitting the difference. The empire then came apart for reasons written into its own design.`,
      parts: [
        {
          heading: 'What the conquests destroyed',
          blocks: [
            { p: `Cities were annihilated: Nishapur, Merv, Herat and Baghdad among them, with populations massacred or enslaved and defenses razed. In Iran and Iraq the damage went beyond the killing to the infrastructure that made the land habitable, because the region's agriculture depended on qanats, underground irrigation channels requiring constant skilled maintenance. Kill or scatter the people who maintain a qanat and the system silts up; the land it watered goes out of cultivation and takes generations and capital to recover. Some of it never did.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the massacre totals are not survey data',
              html: `Persian and Arabic chroniclers give figures such as a million or more killed at a single city, and those numbers cannot be right: they exceed any plausible population of the places in question, and several of them are round numbers of a kind chroniclers used to mean "beyond counting." That is not a reason to soften the account. Archaeology confirms destruction layers, and regional populations in parts of Iran and Iraq clearly fell sharply and stayed down for a long time. The disciplined way to write it is to say that the killing was on a scale the sources could not measure and that the recorded totals are rhetorical rather than statistical, which is both more honest and more impressive than repeating a figure a grader may know is impossible.`
            } },
            { p: `The Islamic world lost the Abbasid Caliphate in Iraq in <span class="num">1258</span>, and the political center of gravity moved to Cairo and to the east. The Russian principalities spent two centuries under the Golden Horde's tribute and its intervention in their politics, and one consequence was the rise of Moscow, which collected tribute for the khans and grew powerful doing it.` }
          ]
        },
        {
          heading: 'Why the empire came apart',
          blocks: [
            { p: `Three causes, and the first is structural. <b>Succession</b> was never solved. Mongol practice required a kurultai to choose a khan from among the eligible descendants, which meant every death was a crisis, campaigns were abandoned so that commanders could travel thousands of miles to attend, and by <span class="num">1260</span> the contest between rival claimants had become open war between branches of the family. An empire whose leadership transfer is a contested election among armed cousins will fragment; the only question is when.` },
            { p: `<b>Assimilation</b> was the second. Each khanate adopted the religion, language and administrative culture of the region it governed, which made it a competent local government and made the four of them foreign to one another. By the fourteenth century a Muslim khan on the Volga and a Buddhist-influenced emperor in Beijing shared an ancestor and very little else.` },
            { p: `<b>Then the fourteenth century arrived.</b> The Ilkhanate dissolved after <span class="num">1335</span> without a viable successor. The plague swept the whole zone. In China, the Yuan faced flooding of the Yellow River, hyperinflation of the paper currency, famine and rebellion, and the Ming took the capital in <span class="num">1368</span>. The Chagatai lands broke up and Timur, who ruled in the name of Chinggisid legitimacy without being of the line, rebuilt a conquering empire out of the wreckage and devastated much of the same ground again.` }
          ]
        },
        {
          heading: 'How to write the balanced judgment',
          blocks: [
            { p: `The instruction the success criteria give is to identify destructive and connective effects together. The way to do that without producing mush is to keep them causally linked rather than merely listed. The conquests that killed the population of Nishapur are the same conquests that put one legal system across the trade routes. The relay network built to hold a conquering empire together is the network that carried Rabban Bar Sauma west and the plague in every direction. The elite who took a share in ortoq merchant capital were the elite who had sacked the cities those merchants traded through.` },
            { p: `That is not a compromise between two views, it is a single claim: integration of that kind was achieved by conquest, and it carried whatever moved. If you can write one paragraph in which the destruction and the connection are the same fact seen from two sides, you have understood this topic better than an answer that spends half its length praising and half condemning.` }
          ]
        }
      ],
      useThis: {
        tool: `Contested succession as a structural weakness. <em>The mechanism is that a khan was chosen by an assembly from among eligible descendants, so every death halted campaigns while commanders traveled to the kurultai, and every succession put armed branches of one family in direct competition, which by 1260 had become open war between them.</em>`,
        limit: `The destruction of qanat irrigation in Iran and Iraq is the most durable damage to name, because it removed the maintenance the landscape required rather than only the people on it.`,
        comparison: `Against <em>Rome</em> or <em>Han China</em>: empires with a settled rule of succession survive bad emperors, and empires without one spend their strength on the transfer. The Mongol case is the clearest in the course because the rule itself, election by kurultai, guaranteed the crisis.`
      },
      terms: [
        ['Qanat', 'An underground irrigation channel requiring constant skilled maintenance, whose destruction in Iran and Iraq took farmland out of cultivation for generations.'],
        ['Kurultai', 'The assembly that elected a khan, which made every succession a crisis and repeatedly interrupted campaigns.'],
        ['Toluid civil war', 'The open conflict between branches of the ruling family from 1260, after which the khanates functioned as separate states.'],
        ['Red Turban rebellion', 'The mid-fourteenth-century risings in China, amid flood, famine and currency collapse, that ended Yuan rule in 1368.'],
        ['Timur', 'The Central Asian conqueror who rebuilt an empire from the Chagatai wreckage late in the fourteenth century, ruling through Chinggisid legitimacy he did not inherit.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a complete comparison or judgment: a claim, specific evidence, and the reason. The last card is the balanced-effects answer this topic asks for, written the way it should be written.`,
    pairs: [
      {
        category: 'State building',
        title: 'The Mongols and the Song solved the same problem in opposite directions',
        body: `Both feared commanders with private followings. The Song put examination-qualified civil officials over the army, split command from training and rotated troops between garrisons. The Mongols mixed clans inside every unit of ten, hundred and thousand, forbade transfer between units and appointed commanders on merit, so tribal loyalty had nothing left to attach to. The difference exists because of what each was starting from: the Song inherited a literate bureaucracy that could supervise generals, while Chinggis had no bureaucracy at all and had to build loyalty into the army's own structure. Same problem, two answers, and both held for over a century.`
      },
      {
        category: 'Networks',
        title: 'Mongol exchange moved specialists; Indian Ocean exchange moved communities',
        body: `Under the khanates, individuals were summoned and paid: Chinese astronomers in Persia, Persian astronomical staff at the Yuan court, engineers who built the trebuchets at Xiangyang, a monk born near Beijing representing an Ilkhan to the pope. Across the Indian Ocean, merchants settled, married locally and left resident relatives, producing permanent Arab, Gujarati, Persian and Chinese communities in port cities. The difference exists because of who was driving the movement: an empire with the authority to summon a man produces travel by command, while a monsoon that strands a merchant for months produces residence, intermarriage and eventually conversion.`
      },
      {
        category: 'Consequences',
        title: 'The integration and the pandemic are the same fact',
        body: `The relay stations, the reduced tolls and the single legal system that let porcelain, cobalt, astronomers and Rabban Bar Sauma cross Eurasia are the same conditions that let Yersinia pestis reach Kaffa in 1346 and Genoese ships carry it to Sicily in 1347. Connectivity is not selective about its cargo. The reason this matters beyond the fourteenth century is that it is the general form of the argument: any answer that celebrates a network's benefits without accounting for what else it transmitted has described half a system, and graders in this course are specifically looking for the other half.`
      },
      {
        category: 'Judgment',
        title: 'Destructive and connective, in one paragraph rather than two',
        body: `The Mongols destroyed Nishapur, Merv and Baghdad, killed on a scale their own chroniclers could not measure, and wrecked the qanat irrigation that made parts of Iran and Iraq farmable. The Mongols also reduced tolls, protected merchants, invested in them through ortoq partnerships, ran the yam, and produced a century in which a Persian vizier could write a history of China and Europe from their own sources. These are not two verdicts to be balanced; they are one process. The integration was achieved by conquest, it was maintained by the threat that had achieved it, and it carried everything, prosperity and plague alike, along exactly the same roads.`
      }
    ]
  }
};
