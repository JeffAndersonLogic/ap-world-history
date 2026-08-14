'use strict';

/**
 * Foundations 3, States, Power & Social Organization: the deep reading.
 *
 * Why this exists. The Foundations 3 First & 10 carries 716 words of body text
 * across four classical states, roughly 179 each. Its success criteria ask a
 * student to name a tool of rule and explain the governance problem it solved,
 * to explain an example of resistance or exclusion and connect it to a limit of
 * state power, and to compare two states inside one category using a specific
 * mechanism, "not just it helped the ruler but how and why." The survey names
 * the tools. It has no room to supply the mechanisms, and a student cannot
 * infer a mechanism from a name.
 *
 * Two coverage gaps in the lesson are closed here on purpose:
 *
 *   1. Learning target 2 asks for hierarchy and exclusion in at least two of
 *      these societies, but the modules only supply it for Greece (BeSurreal)
 *      and Rome (Spartacus). Persia and Han China now carry their own, so a
 *      student may pick any pair.
 *   2. The Evidence Lab pairs the Apadana with the Code of Hammurabi, which is
 *      Babylon in c.1754 BCE and not one of the four. Rome's section ties the
 *      Twelve Tables back to it explicitly, so the jump is the intended
 *      argument about published law rather than a fifth classical state.
 *
 * Body copy is authored as HTML. `<span class="kt">` is how a key term is found
 * on the page, so it belongs in the content, not in the template.
 *
 * Estimates are hedged where the scholarship hedges, and where a famous detail
 * survives only through an interested ancient source, the page says so. That is
 * the "How we know" note, and it is teaching, not throat-clearing: Herodotus on
 * the Royal Road and Thucydides on the funeral oration are exactly the kind of
 * evidence this course wants students reading critically.
 */

module.exports = {
  topicKey: 'f3',
  slug: 'foundations-3-states-power',
  sourceFile: 'deep-reading-foundations-3-states-power.html',
  lessonFile: 'foundations-3-states-power.html',

  docTitle: 'BeHistorical | Deep Reading | Foundations 3: The Machinery of Power',
  eyebrow: 'Foundations 3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Machinery of <em>Power</em>',
  deck: `Persia, Han China, Greece and Rome each faced the same four problems: how to take resources, how to defend ground, how to govern people they would never see, and how to make all of it feel legitimate rather than forced. This reading gives you the working parts of each answer, so that when a question asks <em>how</em> a tool of rule actually worked, you have something specific to say.`,
  meta: ['Four empires', 'One page each', 'Read alongside the First & 10'],
  footerNote: 'Foundations 3 &nbsp;·&nbsp; The Machinery of Power &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Each of the four pages is built on the same skeleton, in the same order. That is deliberate. If you read the "How it ruled" part of Persia and then the "How it ruled" part of Han China, you are already holding a comparison, which is the single move this course rewards most.`,
    steps: [
      `<b>How it took</b> resources: taxes, labor and soldiers.`,
      `<b>How it held</b> ground: armies, roads, frontiers.`,
      `<b>How it ruled</b> at distance: the administrative machinery.`,
      `<b>How it justified</b> itself: the legitimacy story.`,
      `<b>Who was on top, and who was not:</b> the social hierarchy.`,
      `<b>Where it cracked:</b> resistance, exclusion and the limits of power.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'persia',
      num: '01',
      accent: 'gold',
      name: 'Achaemenid Persia',
      navLabel: 'Persia',
      dates: 'c. 550 to 330 BCE &nbsp;·&nbsp; Cyrus the Great to Darius III',
      thesis: `Persia ruled the largest empire the world had yet seen by refusing to make it uniform. Its central insight was that a conquered people who keep their gods, their language and their local rulers have far less reason to revolt.`,
      parts: [
        {
          heading: 'The situation',
          blocks: [
            { p: `In <span class="num">550 BCE</span> Cyrus II, a vassal king from Persis in what is now southern Iran, overthrew his Median overlord and began roughly twenty years of conquest. He took the wealthy kingdom of Lydia in Anatolia, then Babylon in <span class="num">539 BCE</span>. His son Cambyses added Egypt in <span class="num">525 BCE</span>. Within two generations the Achaemenid dynasty ruled from the Indus River to the Aegean Sea and from the Caucasus to the Nile, three continents and tens of millions of people who shared no language, no religion and no history of being ruled together.` },
            { p: `That was the problem. Earlier empires such as the Assyrians had ruled by terror, mass deportation and the visible destruction of local temples. It worked, and it produced revolt after revolt. Persia chose a different strategy, and the whole machinery of the empire follows from that one choice.` }
          ]
        },
        {
          heading: 'How it took: tribute, in kind and in silver',
          blocks: [
            { p: `Darius I, who seized the throne in <span class="num">522 BCE</span> and reorganized nearly everything, fixed a <span class="kt">tribute</span> quota for each province, assessed in silver by weight or in goods a region actually produced. Egypt paid in grain, Babylonia in silver, India in gold dust, Cilicia in white horses. Persians themselves, as the ruling people, paid no regular tribute, which is worth noticing: the burden of the empire fell on the conquered, and every subject knew it.` },
            { p: `Darius also introduced a standardized gold coin, the <span class="kt">daric</span>, alongside a silver siglos. A single trusted currency across three continents made tribute easier to assess and long-distance trade easier to conduct, and it put the king's image into the hand of every merchant in the empire. Coinage was propaganda that people carried in their pockets.` },
            { p: `Labor was extracted too. The Persepolis Fortification Tablets, thousands of administrative clay records excavated from the palace complex, show a rationed workforce drawn from across the empire, including women, receiving allotments of grain, wine and beer, with extra rations recorded for women who had given birth. These are not the words of a court poet. They are the receipts, and they show a state with the bureaucratic reach to feed and count its workers.` }
          ]
        },
        {
          heading: 'How it held: the Royal Road and a mobile king',
          blocks: [
            { p: `The <span class="kt">Royal Road</span> ran roughly <span class="num">2,500</span> kilometers from Susa in the Persian heartland to Sardis near the Aegean coast, with over a hundred fortified relay stations spaced about a day's travel apart, each stocked with fresh horses and provisions. A royal courier handed his message to a rested rider at each station, so that dispatches moved at the speed of the system rather than the endurance of one man or one animal.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `Our most quoted description of the Royal Road comes from the Greek writer Herodotus, who claims a courier could cover it in seven days when an ordinary traveler needed about ninety. Herodotus was writing for a Greek audience about the empire that had invaded Greece, and he had reasons to make Persian power sound superhuman. The road certainly existed and archaeologists have traced parts of it. Treat the seven days as a Greek estimate of Persian speed, not a measured fact, and you are reading like a historian.`
            } },
            { p: `The king himself moved. The Achaemenid court traveled between Persepolis, Susa, Ecbatana and Babylon with the seasons, which meant that royal authority was periodically visible in person across a wide arc of the empire rather than shut inside one capital. The army combined a permanent royal guard, the unit the Greeks called the Immortals and claimed was kept at exactly ten thousand men, with levies raised from the satrapies, so the empire's diversity became its manpower.` }
          ]
        },
        {
          heading: 'How it ruled: satrapies, and the men who watched the satraps',
          blocks: [
            { p: `Darius divided the empire into roughly twenty provinces called <span class="kt">satrapies</span>, each under a <span class="kt">satrap</span>, a title meaning something close to "protector of the realm." The satrap collected the tribute, administered justice, maintained roads and raised troops. Below him, local law, local language, local priesthoods and often the local ruling family carried on much as before. Persia did not impose Persian religion, did not require Persian language for daily business, and did not resettle populations wholesale.` },
            { p: `The obvious danger in delegating that much power is that a satrap with an army and a treasury a thousand miles from the capital becomes a king in all but name. Persia built in checks. The satrap's chief secretary and the garrison commander in his province were royal appointments who reported separately to the center, so three men in each province watched each other. Traveling royal inspectors, known in Greek sources as the King's Eyes, arrived with an armed escort and the authority to audit. It was a system designed on the assumption that its own officials would cheat.` }
          ]
        },
        {
          heading: 'How it justified: the King of Kings and the favor of Ahura Mazda',
          blocks: [
            { p: `The Achaemenid ruler styled himself <span class="kt">King of Kings</span>, a title that concedes the existence of other kings and claims authority over them rather than erasing them. That is the tolerance strategy compressed into a phrase. Royal inscriptions credit the god <span class="kt">Ahura Mazda</span>, the great god of Zoroastrian belief, with granting the king his rule, so that obedience became cosmic order and rebellion became a kind of lie. Darius's inscription at Behistun, carved high on a cliff face in three languages, tells at length how he defeated rebels who "lied," and it was copied and circulated across the empire.` },
            { p: `The most sophisticated piece of Persian legitimacy work was local. When Cyrus took Babylon he presented himself not as a foreign conqueror but as the restorer of the Babylonian god Marduk's proper worship, a claim recorded on the clay <span class="kt">Cyrus Cylinder</span>. In the Hebrew Bible, the same king is remembered for permitting exiled Judeans to return to Jerusalem and rebuild their temple. One ruler, two very different peoples, and both were handed a version of the story in which the Persian king was the legitimate restorer of their own tradition.` },
            { p: `The Apadana at Persepolis made the argument in stone. Along its staircases, carved delegations from across the empire, Medes, Lydians, Bactrians, Nubians and more, process toward the king bringing gifts, each in their own dress and bearing their own regional goods. The message is not that the empire is uniform. It is that all this difference is oriented toward one throne.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Persian tolerance was not a modern belief in religious freedom, and calling it that in an essay will cost you. It was a calculated instrument of control. The same kings who restored temples also crushed revolts with great violence, deported rebel leaders, and destroyed sanctuaries when a city rose against them. The argument to make is that tolerance was cheaper and more durable than terror, not that Persia was kind.`
            } }
          ]
        },
        {
          heading: 'Who was on top, and who was not',
          blocks: [
            { p: `At the summit sat the king and the small circle of great Persian noble families whose members commanded armies and held the most important satrapies. Below them stood the Median and Persian aristocracy generally, then the enormous mass of subject peoples, free but tributary, governed in their own communities under their own customs. Slavery existed but the Persian economy did not rest on it in the way the Greek and Roman economies would. Persia's characteristic form of subordination was not enslavement but permanent outsider status: a Babylonian or an Egyptian could be wealthy, literate and locally powerful, and would still never become Persian.` },
            { p: `That is the sharpest thing to notice, and it is the comparison the modules keep reaching for. Persia tolerated its subjects. Rome, eventually, enrolled them. Persia had no path by which a conquered Lydian became a member of the ruling people. The empire asked for tribute and obedience, and in exchange left you alone. It never offered you membership.` }
          ]
        },
        {
          heading: 'Where it cracked',
          blocks: [
            { p: `The Ionian Revolt of <span class="num">499 to 493 BCE</span>, in which Greek cities under Persian rule in western Anatolia rose with help from Athens, drew Persia into the Greek wars and showed that delegated rule through local strongmen bred resentment when those strongmen were unpopular. Egypt was the empire's most persistent problem, revolting repeatedly and breaking away entirely for roughly sixty years in the fourth century BCE before being reconquered.` },
            { p: `The deeper structural weakness was the one built into the design. A satrap who was strong enough to be useful was strong enough to be dangerous, and the fourth century saw repeated satrapal revolts, sometimes several at once. When Alexander of Macedon invaded in <span class="num">334 BCE</span>, he did not have to dismantle an empire province by province. He had to defeat the royal army, and much of the administrative machinery, including many satraps, simply transferred to the new King of Kings. Persepolis burned in <span class="num">330 BCE</span>. The satrapy system itself outlived the dynasty, because Alexander and his successors kept it.` }
          ]
        }
      ],
      useThis: {
        tool: `Satrapies. <em>The mechanism is not "provinces." It is that Persia purchased consent by leaving local religion, law and elites in place, so that revolt cost a subject people more than compliance did, while three separately reporting officials in each province kept the satrap from becoming a rival king.</em>`,
        limit: `Persians paid no regular tribute while conquered peoples did, and no conquered person could become Persian. Tolerance without membership. Pair with the repeated Egyptian revolts and the fourth-century satrapal rebellions.`,
        comparison: `Against <em>Rome</em> on integration: both ruled diverse conquered populations, but Persia bought quiet with autonomy while Rome bought loyalty with citizenship. Against <em>Han China</em> on administration: delegation versus centralization, the same problem answered in opposite directions.`
      },
      terms: [
        ['Satrapy', 'One of about twenty Persian provinces, governed by a satrap who collected tribute, judged disputes and raised troops.'],
        ['Tribute', 'A fixed payment owed by a subject province to the imperial center, assessed in silver or in regional goods.'],
        ['Daric', 'The standardized Persian gold coin introduced under Darius I, carrying the king&rsquo;s image across three continents.'],
        ['King of Kings', 'The Achaemenid royal title, claiming authority over other kings rather than abolishing them.'],
        ['Cyrus Cylinder', 'A clay document recording Cyrus&rsquo;s presentation of himself as restorer of Babylon&rsquo;s traditional worship after his conquest.'],
        ['Ahura Mazda', 'The supreme god of Zoroastrianism, named in royal inscriptions as the source of the king&rsquo;s authority.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'han',
      num: '02',
      accent: 'rust',
      name: 'Han China',
      navLabel: 'Han China',
      dates: '206 BCE to 220 CE &nbsp;·&nbsp; Liu Bang to the Three Kingdoms',
      thesis: `Where Persia delegated, Han China centralized. It governed roughly sixty million people through appointed, rotated, salaried officials who owed everything to the capital, and it justified the whole arrangement with an idea that could also be used to destroy it.`,
      parts: [
        {
          heading: 'The situation',
          blocks: [
            { p: `The Qin state unified China in <span class="num">221 BCE</span> under a ruler who took the title First Emperor. In fourteen years the Qin standardized the script, weights, measures and even axle widths, abolished the old hereditary nobility, divided the realm into administrative commanderies, and built roads and early walls with forced labor on a staggering scale. It also governed by <span class="kt">Legalism</span>, a philosophy holding that people obey only strict law and harsh punishment. The Qin collapsed within four years of the First Emperor's death, consumed by the revolts its own severity had produced.` },
            { p: `The Han dynasty, founded in <span class="num">206 BCE</span> by Liu Bang, a man of peasant origin, drew the obvious lesson. It kept the Qin machinery, the commanderies, the standardization, the appointed officials, and abandoned the Qin's naked coercion in favor of Confucian moral language. Later commentators described the result as Confucian on the outside and Legalist within. That combination, a bureaucratic state wearing an ethical justification, is what four hundred years of Han rule ran on.` }
          ]
        },
        {
          heading: 'How it took: land tax, head tax, and a month of your labor',
          blocks: [
            { p: `Han extraction had three parts and you should know all three, because the interaction between them is what eventually broke the dynasty. There was a land tax, famously light, set for long stretches at one thirtieth of the harvest. There was a poll tax owed in coin by nearly every adult regardless of wealth. And there was <span class="kt">corvée</span>, an obligation on adult men to give the state roughly a month of labor each year on canals, roads, walls and granaries, plus a term of military service.` },
            { p: `A low land tax sounds generous, and for a large landowner it was. For a smallholding peasant family the poll tax was the crushing part, because it had to be paid in coin, which meant selling grain at harvest when prices were lowest, and it did not fall with a bad year. Under the Emperor Wu the state also seized monopolies on <span class="kt">salt and iron</span>, two goods everyone had to buy, which funded enormous military campaigns without a visible tax increase. A monopoly on necessities is a tax that does not look like one, and Han officials debated exactly that point in a court discussion later written up as the <em>Discourses on Salt and Iron</em>.` }
          ]
        },
        {
          heading: 'How it held: the Xiongnu problem',
          blocks: [
            { p: `The permanent strategic problem of the Han was the <span class="kt">Xiongnu</span>, a powerful steppe confederation to the north whose mounted archers could raid and withdraw faster than infantry could respond. The early Han, too weak to win, bought peace through the <em>heqin</em> policy: marriage alliances and large annual shipments of silk, grain and wine to the Xiongnu ruler. It was tribute flowing outward from the empire, and Han officials found it humiliating.` },
            { p: `Emperor Wu, who reigned from <span class="num">141 to 87 BCE</span>, reversed the policy and went on the offensive, pushing Han garrisons deep into the Gansu corridor and extending walls and watchtowers westward. To find allies against the Xiongnu he sent the envoy Zhang Qian west in <span class="num">138 BCE</span>. Zhang Qian failed at his diplomatic mission, spent years as a prisoner, and came back with detailed intelligence about the states of Central Asia. That intelligence opened the trade corridor we now call the Silk Roads. One of the most consequential commercial developments in world history began as a military reconnaissance operation that did not achieve its objective.` }
          ]
        },
        {
          heading: 'How it ruled: a bureaucracy that could count you',
          blocks: [
            { p: `The Han governed through roughly a hundred <span class="kt">commanderies</span> subdivided into some fifteen hundred counties, staffed by officials the central government appointed, paid in graded salaries measured in grain, transferred between posts, and inspected by a separate censorate whose job was to report misconduct directly to the throne. Crucially, these posts were not hereditary. An official's son inherited status and opportunity but not the office, so the state did not gradually turn back into a collection of family fiefdoms, which is exactly what had happened before Qin.` },
            { p: `Recruitment worked mainly by recommendation. Local officials were required to nominate candidates under categories such as "filial and incorrupt," and in <span class="num">124 BCE</span> Emperor Wu founded an Imperial Academy where students studied the Confucian classics as the curriculum for state service. Merit was defined as mastery of a moral and literary tradition, which meant the state selected officials who had already internalized the ideology they would enforce.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The Han did not have the civil service examination system. That fully developed meritocratic exam apparatus belongs to the Sui and Tang dynasties, many centuries later, and it appears in AP World in the Song China material. What the Han had was recommendation by officials, an Imperial Academy, and some examination of candidates. Write "recommendation and the Imperial Academy," not "the civil service exam," and you will be both accurate and noticeably more precise than most answers.`
            } },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The Han census of <span class="num">2 CE</span> recorded <span class="num">57.6</span> million people in about <span class="num">12.2</span> million households. It is the oldest surviving national census in the world, and it survives because a bureaucracy existed to compile it and a historical tradition existed to preserve it. The number itself is evidence for the argument: a state that can count sixty million people household by household can also tax and conscript them.`
            } }
          ]
        },
        {
          heading: 'How it justified: the Mandate of Heaven',
          blocks: [
            { p: `The <span class="kt">Mandate of Heaven</span>, or <em>tianming</em>, long predates the Han. It held that Heaven confers the right to rule on a virtuous ruler, the Son of Heaven, and withdraws it from a ruler who becomes corrupt or negligent. Under the Han the scholar Dong Zhongshu developed this into a full correspondence between the emperor's conduct and the natural world, so that eclipses, earthquakes, droughts and floods could be read as Heaven's formal warnings, and court officials could cite a comet as grounds for criticizing imperial policy.` },
            { p: `Understand what a strange and powerful instrument this is. It gives a ruling dynasty divine sanction, which is what every state wants. But it does so on a condition, and it names the evidence by which the condition can be judged to have failed. The same doctrine that made the Han emperor the Son of Heaven also supplied any rebel with a complete and respectable argument: the disasters prove Heaven has withdrawn its mandate, and we are its instrument. Persia's kings claimed Ahura Mazda's favor without ever specifying a test that could be failed. The Han claimed Heaven's mandate and published the test.` }
          ]
        },
        {
          heading: 'Who was on top, and who was not',
          blocks: [
            { p: `Confucian theory ranked society in four occupational orders: <span class="kt">scholar-officials</span> at the top as the morally cultivated who governed, then farmers as the producers of real wealth, then artisans, and merchants at the bottom as people who profited from what others made. Han law enforced this ranking against merchants, at various times barring them from wearing silk, riding horses, holding office or registering land, even as some of them became extremely rich. It is a clear case of a hierarchy encoded in law rather than left to custom, and it is worth setting beside the Code of Hammurabi from the Evidence Lab for exactly that reason.` },
            { p: `Beneath and across all of this sat the family, ordered by age and by gender. The obligations of <span class="kt">filial piety</span> ran upward from children to parents and were understood as the model for the subject's obedience to the emperor, which made the household a training ground for the state. Women's subordination was set out explicitly in <em>Lessons for Women</em>, written around <span class="num">100 CE</span> by Ban Zhao, prescribing humility and deference to husband and in-laws. The revealing detail is who wrote it: Ban Zhao was one of the most learned people of her age, an imperial tutor who completed the great history of the Han dynasty after her brother's death. The most accomplished woman in the empire authored the manual of female deference, which tells you how completely the hierarchy had been made to seem natural.` }
          ]
        },
        {
          heading: 'Where it cracked',
          blocks: [
            { p: `The structural failure was land. The Han tax system fell hardest on smallholders, and a family hit by one bad harvest borrowed, then sold its land to a great estate and stayed on as tenants. Powerful families accumulated enormous holdings and had the local influence to avoid assessment. Every peasant who became a tenant left the tax rolls while the state's costs kept rising, so the burden concentrated on the shrinking number still registered, which pushed more of them off the rolls. Wang Mang seized the throne from <span class="num">9 to 23 CE</span> and attempted radical land redistribution precisely to reverse this. He failed, and a catastrophic shift in the course of the Yellow River produced famine and the Red Eyebrows rebellion, which destroyed him and restored the Han.` },
            { p: `The same disease returned. By the later second century CE the court was consumed by factional struggle among eunuchs, consort families and officials, flood control was neglected, and epidemics and famine spread. In <span class="num">184 CE</span> the Way of Great Peace movement, led by Zhang Jue, launched the <span class="kt">Yellow Turban Rebellion</span>, drawing several hundred thousand followers who wore yellow headscarves to mark a new cosmic era. Their claim was the Mandate itself: Heaven had abandoned the Han.` },
            { p: `The dynasty's response destroyed it. Lacking a central army equal to a rebellion on that scale, the court authorized regional commanders to raise their own forces. Those armies suppressed the Yellow Turbans and then would not disband, because they were loyal to the generals who paid them rather than to the throne. By <span class="num">220 CE</span> the last Han emperor abdicated and China divided into the Three Kingdoms. The empire was not conquered from outside. It was pulled apart by the men it had armed to save it.` }
          ]
        }
      ],
      useThis: {
        tool: `The appointed, rotated, salaried bureaucracy. <em>The mechanism is that officials held office at the center's pleasure rather than by inheritance, were paid from the center, moved between posts, and were watched by a separate censorate, so that administrative power could not congeal into local dynasties the way it did under a satrapy or a feudal grant.</em>`,
        limit: `Merchants legally barred from silk, horses and office despite their wealth, showing hierarchy written into law. For resistance, the Yellow Turbans in 184 CE turning the Mandate of Heaven against the dynasty that ruled by it. For structural limit, land concentration hollowing out the tax base.`,
        comparison: `Against <em>Persia</em> on administration: appointed and rotated officials versus delegated satraps, two answers to ruling at distance. Against <em>Rome</em> on legitimacy: a conditional mandate that licensed rebellion versus an imperial cult that did not.`
      },
      terms: [
        ['Mandate of Heaven', 'The doctrine that Heaven grants rule to the virtuous and withdraws it from the unworthy, with disaster and revolt as evidence.'],
        ['Commandery', 'A major Han administrative province, subdivided into counties, run by appointed officials.'],
        ['Corvée', 'Compulsory unpaid labor owed to the state, roughly a month a year for adult men under the Han.'],
        ['Legalism', 'The Qin governing philosophy holding that order requires strict law and severe punishment rather than moral example.'],
        ['Filial piety', 'The duty of respect and obedience owed to parents and elders, treated as the model for obedience to the emperor.'],
        ['Xiongnu', 'The steppe confederation on the Han northern frontier, first paid off through marriage and tribute, later fought.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'greece',
      num: '03',
      accent: 'iron',
      name: 'The Greek Poleis',
      navLabel: 'Greece',
      dates: 'c. 800 to 338 BCE &nbsp;·&nbsp; Athens, Sparta and roughly a thousand city-states',
      thesis: `Greece is the outlier in this set, and that is exactly why it is here. It never solved the problem of ruling at distance, because it never attempted it at scale. What it produced instead was the most radical answer anyone had yet given to the question of who should hold power.`,
      parts: [
        {
          heading: 'The situation',
          blocks: [
            { p: `Mainland Greece is mountainous, cut into small plains separated by ridges and opening onto a sea studded with islands. Communities grew up in those pockets, and by the archaic period there were perhaps a thousand independent <span class="kt">poleis</span>, each typically an urban center with its own fortified high point, the acropolis, its own public square, the agora, and its own surrounding farmland. Most were tiny. A polis of a few thousand people was normal.` },
            { p: `The comparison to make immediately is one of scale. Han China governed something like sixty million people. Athens at its height governed a territory of perhaps a quarter of a million. Persia had to invent an apparatus for moving a message two thousand kilometers; a citizen of a Greek polis could walk to the center of government in a morning. The problems of extraction, defense, administration and legitimacy all existed in Greece, but administration at distance barely did, and that absence is what made a completely different political experiment possible.` }
          ]
        },
        {
          heading: `How it took: a city's revenues, not an empire's`,
          blocks: [
            { p: `Athens had no regular direct tax on citizens, which was a point of pride: taxing free men directly smelled of tyranny. It funded itself instead from harbor duties and market fees, from the state-owned silver mines at Laurion, from tribute once it had an empire, and from the <span class="kt">liturgy</span> system, under which the richest citizens were assigned specific public expenses. One wealthy man would be named to fund a warship and its crew for a year; another to finance a chorus at a festival. Refusing was possible, but only by naming someone richer and offering to swap estates with him.` },
            { p: `The liturgy is a genuinely different solution to extraction and worth pausing on. It converts a tax obligation into a competition for public honor, so that the wealthy pay in public, by name, and get status in return. It works in a face-to-face community where everyone knows who paid for the ship. It does not scale to an empire of sixty million, which is precisely the point.` }
          ]
        },
        {
          heading: 'How it held: citizen-soldiers, and one society built around fear',
          blocks: [
            { p: `The characteristic Greek soldier was the <span class="kt">hoplite</span>, a heavily armored infantryman who bought his own equipment and fought shoulder to shoulder in the massed formation called the phalanx, where each man's shield protected the man to his left. A phalanx depends absolutely on nobody breaking, which makes it a formation only a community of men with a shared stake will hold. Political membership and military service were connected: the men who fought for the polis expected a voice in it, and in Athens the poorer citizens who rowed the fleet gained influence for the same reason.` },
            { p: `Sparta pushed this logic to an extreme, for a specific reason. Having conquered neighboring Messenia, Sparta held its population as <span class="kt">helots</span>, agricultural laborers bound to the land who vastly outnumbered their masters. The full Spartan citizens, the Spartiates, were freed from farming by helot labor and devoted their entire lives to military training, living in barracks from childhood. Every distinctive Spartan institution follows from the need to sit permanently on a subject population many times its own size, including the practice by which young Spartans were sent out to watch and kill helots thought dangerous. Sparta was not a warrior culture that happened to have subject laborers. It was a warrior culture because it had them.` }
          ]
        },
        {
          heading: 'How it ruled: government by lottery',
          blocks: [
            { p: `Athenian <span class="kt">democracy</span> was built in stages. Solon in <span class="num">594 BCE</span> cancelled debts and outlawed enslaving Athenians for debt, and organized political rights by wealth rather than birth. Cleisthenes in <span class="num">508 BCE</span> made the decisive move, reorganizing citizens into ten new tribes deliberately drawn to mix people from the coast, the city and the inland, breaking the regional power of aristocratic families. Through the fifth century, pay for public service was introduced, which meant a poor citizen could afford to serve.` },
            { p: `The working machinery had three parts. The <span class="kt">Assembly</span>, open to all adult male citizens, met roughly forty times a year on the Pnyx hill, debated in the open and decided by show of hands, with a quorum of six thousand for certain votes. The Council of Five Hundred prepared the Assembly's agenda and handled daily business, and its members were chosen <em>by lot</em> for one-year terms. The courts were juries of hundreds of citizens, also chosen by lot, also paid.` },
            { p: `The lottery is the part to understand, because it is the most alien and the most revealing. To Greek thinkers, election was an <em>aristocratic</em> device, since elections reliably favor the famous, the eloquent and the rich. Selection by lot was the democratic device, because it gives every citizen the same chance to govern and makes officeholding an ordinary duty rather than a prize. Athens elected only the offices where technical competence was unavoidable, most notably the generals. Everything else went to the lot. And the Assembly could remove a man it feared by <span class="kt">ostracism</span>: a vote to exile a citizen for ten years, without charge or trial, needing six thousand votes to take effect.` }
          ]
        },
        {
          heading: 'How it justified: the citizens are the state',
          blocks: [
            { p: `Persia's king ruled by the favor of a god, and the Han emperor by the mandate of Heaven. Athens made a claim of a different kind: authority came from the citizen body itself, deliberating in public. In the funeral oration Thucydides gives to Pericles, Athens is praised as a city where power rests with the many rather than the few, where poverty is no bar to public service, and where a citizen who takes no part in public affairs is regarded not as harmless but as useless.` },
            { note: {
              kind: 'howknow',
              label: 'How we know, and how much to trust it',
              html: `That speech is our most quoted statement of the democratic ideal, and Thucydides tells his readers plainly that he reconstructed speeches according to what the occasion demanded. It is a brilliant argument for Athenian democracy composed by a historian who was himself no great friend of it, delivered at a funeral for war dead, in wartime. Read it as an ideal Athens told itself about itself, and then read the exclusion figures below, and you have a genuine historical argument rather than a slogan.`
            } }
          ]
        },
        {
          heading: 'Who was on top, and who was not',
          blocks: [
            { p: `Now the arithmetic. Attica in the later fifth century BCE held perhaps a quarter of a million people. Adult male citizens numbered somewhere in the range of thirty to fifty thousand. Resident foreigners, the <span class="kt">metics</span>, who could trade, pay taxes and serve in the military but never vote or own land, numbered in the tens of thousands. Enslaved people numbered perhaps eighty to a hundred thousand or more. Estimates vary and the ancient figures are unreliable, but every reconstruction agrees on the shape: the people who held political power were a minority of roughly ten to twenty percent of those who lived under it.` },
            { p: `Women were excluded entirely from political life regardless of birth, lived under the legal guardianship of a male relative, could not make significant contracts, and in citizen families were expected to remain largely within the household. In <span class="num">451 BCE</span>, at the height of the democracy, Pericles carried a law restricting citizenship to those with an Athenian mother <em>and</em> an Athenian father, deliberately narrowing the citizen body at the very moment its power was greatest. Democracy and exclusion grew together, and that is the point to make rather than to apologize for.` },
            { p: `The connection runs deeper than coexistence. Enslaved laborers working in appalling conditions in the Laurion silver mines produced much of the bullion that paid for the Athenian fleet. The fleet secured the maritime empire. The empire's tribute helped pay the public stipends that allowed a poor Athenian citizen to leave his work and sit on a jury or in the Council. The material foundation of the world's first democracy included slavery and imperial extraction. A strong essay says exactly that, in one sentence, with the chain intact.` }
          ]
        },
        {
          heading: 'Where it cracked',
          blocks: [
            { p: `Athens did briefly try to rule at distance. The <span class="kt">Delian League</span>, formed in <span class="num">478 BCE</span> as a voluntary alliance against Persia, gradually became an Athenian empire: the treasury was moved to Athens, contributions became compulsory tribute, and cities that tried to leave were besieged and forced back. When the island of Melos attempted to stay neutral in <span class="num">416 BCE</span>, Athens killed its adult men and enslaved the women and children. Thucydides stages the negotiation beforehand as a debate in which the Athenians dispense with justice entirely and argue that the strong do what they can and the weak suffer what they must. The democracy at home was the empire abroad, run by the same Assembly.` },
            { p: `Resentment of Athenian power helped produce the Peloponnesian War of <span class="num">431 to 404 BCE</span>, which Athens lost. The poleis then exhausted each other in decades of shifting wars until Philip II of Macedon defeated a Greek coalition at Chaeronea in <span class="num">338 BCE</span>, ending the independence of the city-states. The polis was never destroyed as a form of local community, and Greek ideas about citizenship, law and civic debate passed to Rome and, much later, to the modern world. What it never did was solve scale.` }
          ]
        }
      ],
      useThis: {
        tool: `Selection by lot, backed by pay for public service. <em>The mechanism is that filling the Council and the juries randomly from the citizen body, and paying the holders, removed both birth and wealth as qualifications for governing, so ordinary citizens actually rotated through office instead of merely voting for their betters.</em>`,
        limit: `Roughly ten to twenty percent of Attica's residents held political rights; Pericles' citizenship law of 451 BCE narrowed the body further at democracy's peak; and Laurion mine slavery underwrote the fleet that funded the pay that made participation possible. For limits of scale, the Delian League turning into an empire and Melos in 416 BCE.`,
        comparison: `Against <em>Rome</em> on citizenship: Athens narrowed membership as it gained power, Rome widened it. That single contrast, with the 451 BCE law on one side and the Social War or Caracalla on the other, is the strongest comparison available in this unit.`
      },
      terms: [
        ['Polis', 'An independent Greek city-state, its urban center together with its surrounding farmland.'],
        ['Sortition (the lot)', 'Filling public office by random selection from the citizen body, understood by Greeks as the distinctly democratic method.'],
        ['Metic', 'A free resident foreigner in Athens: taxed, often prosperous, permanently barred from citizenship and landownership.'],
        ['Helot', 'A member of the conquered Messenian population held in collective servitude by Sparta and vastly outnumbering Spartan citizens.'],
        ['Liturgy', 'A public expense, such as funding a warship, assigned to a named wealthy citizen in exchange for public honor.'],
        ['Ostracism', 'An Athenian vote exiling a citizen for ten years without charge or trial, requiring six thousand votes.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'rome',
      num: '04',
      accent: 'oxide',
      name: 'Rome',
      navLabel: 'Rome',
      dates: '509 BCE to 476 CE &nbsp;·&nbsp; Republic into Empire',
      thesis: `Rome's distinctive achievement was not conquest, which several states in this reading managed. It was the ability to turn the conquered into Romans, which none of the others attempted.`,
      parts: [
        {
          heading: 'The situation',
          blocks: [
            { p: `Rome expelled its last king by tradition in <span class="num">509 BCE</span> and built a <span class="kt">Republic</span> designed above all to prevent any one man from ruling again. Two <span class="kt">consuls</span> held supreme authority, each able to veto the other, and each served a single year. The <span class="kt">Senate</span>, a body of several hundred former magistrates who sat for life, controlled finance and foreign policy by weight of custom and prestige rather than by formal command. Popular assemblies elected magistrates and passed laws. In a genuine emergency a dictator could be appointed with sweeping power, for a maximum of six months.` },
            { p: `Rome also had a long internal struggle, the Conflict of the Orders, in which the common citizens, the plebeians, extracted concessions from the aristocratic patricians by the simple device of collectively withdrawing from the city and refusing to fight. They won <span class="kt">tribunes of the plebs</span>, officials whose persons were sacrosanct and who could veto acts of magistrates and the Senate. Around <span class="num">450 BCE</span> they won something arguably more important: the <span class="kt">Twelve Tables</span>, the first written publication of Roman law, set up in the forum where anyone could consult them.` },
            { note: {
              kind: 'howknow',
              label: 'Connect this to the Evidence Lab',
              html: `The Twelve Tables are Rome doing what Hammurabi did roughly thirteen centuries earlier: taking law out of the private knowledge of a priestly or aristocratic class and putting it on public display. In both cases the act of publication is the political move, because a law you can read is a law that can be cited against a powerful man. And in both cases the published law still encoded inequality, since the Twelve Tables originally forbade marriage between patricians and plebeians. Written law limits arbitrary power and entrenches hierarchy at the same time, which is the argument to make about both documents.`
            } }
          ]
        },
        {
          heading: 'How it took: tax farming, and the reform of it',
          blocks: [
            { p: `Republican Rome largely stopped taxing Roman citizens in Italy directly after its eastern conquests brought in enormous wealth, and it funded itself from the provinces instead. Provincial taxes were collected by <span class="kt">publicani</span>, private contractors who bid for the right to collect in a province, paid Rome an agreed sum up front, and then kept whatever more they could extract. The incentive that creates is obvious, and provincial extortion under the late Republic became notorious enough that Rome tried, generally without success, to prosecute its own governors for it.` },
            { p: `Augustus replaced much of this with regular censuses of population and property and direct taxation assessed on that basis, administered by salaried imperial officials. The shift is a good, concrete example of the difference between the Republic's improvised empire and the Empire's professional one: the same territory, taxed by an accountable state apparatus rather than by subcontractors with a profit motive. Grain from Egypt and North Africa fed the capital, and a share of it was distributed free or cheaply to the city's residents through the grain dole.` }
          ]
        },
        {
          heading: 'How it held: legions, roads, and citizenship as a wage',
          blocks: [
            { p: `The imperial army settled at roughly twenty-five to thirty <span class="kt">legions</span> of professional, long-service soldiers, stationed on the frontiers, supported by roughly an equal number of auxiliary troops recruited from non-citizen provincial populations. The auxiliaries are the piece that matters most for this lesson. On completing about twenty-five years of service, an auxiliary soldier and his children received Roman <span class="kt">citizenship</span>, recorded on a bronze diploma he could carry.` },
            { p: `Consider what that arrangement does. It solves recruitment, because the empire draws manpower from conquered peoples. It solves loyalty, because a soldier's reward for a career of service is membership in the state he serves. And it steadily converts the conquered into citizens, generation by generation, at the empire's own expense but on the empire's own terms. Persia never offered a Lydian anything comparable. Athens, at the height of its power, passed a law making its citizenship harder to obtain.` },
            { p: `Underneath all of it ran the roads. Rome built a paved network eventually amounting to tens of thousands of kilometers, engineered for the movement of soldiers, and behind them of officials, tax revenue, letters and trade.` }
          ]
        },
        {
          heading: 'How it ruled: law as the common language of empire',
          blocks: [
            { p: `Rome's provinces were governed by relatively few officials, and much daily administration was left to existing local city governments, which is one reason a comparison to Persia's satrapies is fair as far as it goes. What was distinctly Roman was <span class="kt">law</span>. Roman jurists developed a body of civil law for citizens and a broader framework, the <em>ius gentium</em>, for dealing with everyone else, along with working principles that still echo in legal systems today: that a person is held innocent until proven otherwise, that the burden of proof lies with the accuser, that a case once judged should not be tried again.` },
            { p: `The practical effect is that a merchant in Gaul and a merchant in Syria could make an enforceable contract under a shared framework, and that a citizen in a distant province could appeal over the head of a local official. Roman law was portable, and it made the empire feel like one place. That is a different answer to the administration problem from Han China's, which relied on a dense corps of officials, and different again from Persia's, which relied on leaving local law alone.` }
          ]
        },
        {
          heading: 'How it justified: forms preserved, substance transferred',
          blocks: [
            { p: `The Republic broke down over roughly a century. Reformers, notably the brothers Tiberius and Gaius Gracchus in <span class="num">133</span> and <span class="num">121 BCE</span>, tried to redistribute public land to landless citizens and were killed for it. Military reform opened the legions to the landless poor, whose only prospect of land in retirement came from their commander, so armies became loyal to generals rather than to Rome. Sulla marched on the city, Caesar crossed the Rubicon in <span class="num">49 BCE</span> and was assassinated in <span class="num">44 BCE</span>, and his heir Octavian won the last civil war at Actium in <span class="num">31 BCE</span>.` },
            { p: `What Octavian did next is the single best example of continuity and change in the whole unit. In <span class="num">27 BCE</span> he formally handed his powers back to the Senate and people, and was voted the honorific <span class="kt">Augustus</span> in return. He never took the title of king. He called himself <em>princeps</em>, first citizen. The Senate continued to meet, elections continued to be held, the old magistracies continued to exist and to be filled. And he held, simultaneously and permanently, command of the provinces where the armies were stationed and the powers of a tribune, which let him veto anything. The institutions of the Republic continued; the reality of who decided did not. In his own account of his achievements, Augustus wrote that he surpassed everyone in influence, but had no more formal power than his colleagues. Read carefully, that sentence is the design of the whole system.` },
            { p: `Beyond that, legitimacy came from the <span class="kt">imperial cult</span>, in which provincial temples honored the emperor and dead emperors were formally deified, giving provincials a shared object of loyalty that cost them nothing to adopt. And it came from spectacle. The poet Juvenal complained that the Roman people, who once conferred command and office, now anxiously wanted only two things, bread and circuses. He meant it as contempt. It is also an accurate description of a deliberate policy: the grain dole and the games in the Colosseum, opened in <span class="num">80 CE</span> for tens of thousands of spectators, were public goods delivered by the emperor in person to the population of the capital.` }
          ]
        },
        {
          heading: 'Who was on top, and who was not',
          blocks: [
            { p: `Roman society was ranked with unusual explicitness. At the top sat the senatorial order, then the equestrians, wealthy men in commerce and administration, then ordinary citizens, then freedmen, then the enslaved. Rank determined not only status but legal treatment: by the imperial period, punishments differed formally by class, with the privileged spared penalties applied to the poor for the same offense.` },
            { p: `Slavery was central and vast. Conquest fed it, and enslaved people worked in mines, on great agricultural estates, in workshops and throughout urban households; historians estimate they made up a substantial share, plausibly in the range of a fifth to a third, of the population of Roman Italy at its peak. But Rome differed from Athens in one consequential way. Manumission was common, and a freed slave of a Roman citizen became a citizen, with some restrictions, while his freeborn children carried full citizenship. The most rigidly ranked society in this reading was also the one with a working route from the bottom of the hierarchy into membership. Both things are true, and holding them together is what a strong argument looks like.` },
            { p: `Women were excluded from office and from voting throughout. Roman women of property nonetheless had greater legal capacity than their Athenian counterparts, particularly by the imperial period, when many could own, inherit and manage property in their own right.` }
          ]
        },
        {
          heading: 'Where it cracked',
          blocks: [
            { p: `The system rested on coercion, and the coercion was answered. <span class="kt">Spartacus</span>, an enslaved gladiator, led a revolt from <span class="num">73 to 71 BCE</span> that grew to tens of thousands and defeated Roman armies before it was crushed; the survivors were crucified along the road to Rome, a punishment chosen to be seen. Boudica led a rising in Britain around <span class="num">60 CE</span> that destroyed several Roman towns. Judaea revolted in <span class="num">66 CE</span>, ending with the destruction of the Temple in Jerusalem in <span class="num">70 CE</span>, and again under Bar Kokhba in the following century.` },
            { p: `Rome's answer to the citizenship problem, though, kept widening. When Rome's Italian allies revolted in the Social War of <span class="num">91 to 88 BCE</span> demanding citizenship, Rome fought them and then granted the demand, extending citizenship across Italy. In <span class="num">212 CE</span> the emperor Caracalla extended citizenship to nearly every free inhabitant of the empire. Ancient writers suggested a fiscal motive, since citizens paid certain taxes, and the cynical reading may well be right. It remains the largest single extension of political membership in the ancient world, and the exact opposite of what Athens did in <span class="num">451 BCE</span>.` },
            { p: `The third century brought sustained crisis: rapid turnover of emperors made and unmade by their armies, frontier pressure, plague and currency debasement. The empire was reorganized and survived in the east for another millennium, while authority in the west dissolved into the successor kingdoms during the fifth century CE. The tool that had held it together, membership offered to the conquered, was also, in the end, the thing that made "Roman" a category that could outlive Roman government.` }
          ]
        }
      ],
      useThis: {
        tool: `The extension of citizenship. <em>The mechanism is that conquered people were given a route into legal membership, through auxiliary service, through Latin status and municipal charters, and finally wholesale in 212 CE, so that provincial elites and veterans acquired a personal stake in the empire's survival instead of a grievance against it.</em>`,
        limit: `Spartacus and the crucifixions along the road, plus punishments that differed formally by social rank. For the limit of the whole design, armies loyal to their generals rather than to the state, which destroyed the Republic and later made and unmade emperors.`,
        comparison: `Against <em>Persia</em> on integrating conquered peoples: tolerance without membership versus membership itself. Against <em>Greece</em> on citizenship: Rome widened, Athens narrowed. Against <em>Han China</em> on legitimacy: an imperial cult that could not be failed versus a mandate that could.`
      },
      terms: [
        ['Roman Republic', 'The pre-imperial system of annual consuls, a lifetime Senate and popular assemblies, designed to prevent one-man rule.'],
        ['Tribune of the plebs', 'A sacrosanct official who could veto the acts of magistrates and the Senate on behalf of the common citizens.'],
        ['Twelve Tables', 'Rome&rsquo;s first published law code, around 450 BCE, displayed publicly in the forum.'],
        ['Publicani', 'Private tax-farming contractors who bought the right to collect provincial taxes and kept the surplus.'],
        ['Princeps', '&ldquo;First citizen,&rdquo; the title Augustus used in place of king while holding permanent military and tribunician power.'],
        ['Imperial cult', 'Provincial worship of the emperor and formal deification of dead emperors, providing a shared focus of loyalty.']
      ]
    }
  ],

  closing: {
    navLabel: 'Building a comparison',
    heading: 'Building a Comparison That Scores',
    intro: `A weak comparison lists facts about two states. A strong one picks a single category, puts both states inside it, and explains the mechanism on each side. Below are four pairings the evidence in this reading actually supports. Each names the category, so you can lift the structure and supply the evidence yourself.`,
    pairs: [
      {
        category: 'Category: administering distance',
        title: 'Persia and Han China',
        body: `Both governed territory too large to supervise directly, and answered in opposite directions. Persia delegated to satraps and checked them with separately reporting secretaries, garrison commanders and royal inspectors. Han China appointed, salaried and rotated its officials so authority never settled into local families, and backed them with a censorate. Delegation buys consent and risks rivals; centralization buys control and risks paralysis when the center fails, which is exactly what 184 CE exposed.`
      },
      {
        category: 'Category: who may belong',
        title: 'Athens and Rome',
        body: `The single sharpest contrast available. In 451 BCE, at the peak of its power, Athens restricted citizenship to those with two Athenian parents. Rome moved the other way for seven centuries, granting citizenship to Italy after the Social War, to auxiliaries on discharge, and to nearly every free inhabitant of the empire in 212 CE. One democracy guarded membership; one empire distributed it. Ask which state's subjects had a reason to want it to survive.`
      },
      {
        category: 'Category: legitimating authority',
        title: 'Han China and Rome',
        body: `Both wrapped rule in cosmic sanction, but with different risks. The Mandate of Heaven made authority conditional and named the evidence of failure, so floods and famine became arguments, and the Yellow Turbans could rebel in the dynasty's own vocabulary. The Roman imperial cult asked for participation rather than judgment and specified no test the emperor could fail. Han legitimacy was stronger while it held and supplied the tools for its own overthrow.`
      },
      {
        category: 'Category: what the hierarchy rested on',
        title: 'Athens and Sparta',
        body: `Two poleis, two forms of unfreedom underwriting citizen politics. Athenian citizens were freed for public life partly by enslaved labor, including the Laurion mines that funded the fleet. Spartan citizens were freed for military life by helot agriculture, and built their entire society around holding down a population that outnumbered them. Compare what each system feared: Athens feared a citizen becoming too powerful and invented ostracism; Sparta feared its own workforce.`
      }
    ]
  }
};
