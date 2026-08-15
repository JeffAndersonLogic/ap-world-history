'use strict';

/**
 * Topic 3.3, Empires and Belief Systems: the deep reading.
 *
 * Why this exists. The success criteria name three things: a major change
 * introduced by the Protestant Reformation plus the fact that both reformations
 * expanded Christianity; the Battle of Chaldiran in 1514 as religious and
 * political at once; and Sikhism emerging from interactions between Hindu and
 * Islamic traditions. Each is a case where the classroom summary is a sentence
 * and the mechanism is a page.
 *
 * The organizing argument, which holds the three together: in this period
 * religion is the main instrument of legitimacy available to a ruler, and that
 * makes every doctrinal question a political question and every political
 * quarrel available for religious framing. The Reformation redistributed church
 * property and princely independence; the Sunni-Shia border was drawn by armies
 * and still runs where they left it; Akbar's abolition of the jizya and
 * Aurangzeb's reimposition are two revenue and loyalty calculations wearing
 * theological clothes.
 *
 * Three things carried deliberately:
 *
 *   1. Both reformations grew Christianity, which students find counterintuitive
 *      and the criteria explicitly ask for. Catholic missionary orders founded
 *      in response to the Protestant challenge carried the church to Asia and
 *      the Americas.
 *   2. Sikh tradition does not describe itself as a blend of Hinduism and Islam,
 *      and a chapter that calls it one is repeating an outsider's framing. The
 *      accurate version keeps the historical context of interaction and lets the
 *      tradition state its own claim.
 *   3. Toleration in this unit is policy rather than virtue. Saying so is not
 *      cynicism; it is what lets a student explain why the same empire could
 *      abolish a tax in 1564 and reimpose it in 1679 without anyone's beliefs
 *      changing.
 */

module.exports = {
  topicKey: 't3-3',
  slug: 'topic-3-3-belief-systems',
  sourceFile: 'deep-reading-topic-3-3-belief-systems.html',
  lessonFile: 'lesson-3-3-belief-systems.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 3.3: Faith, and the Uses of It',
  eyebrow: 'Topic 3.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Faith, and the Uses of <em>It</em>',
  deck: `Between <span class="num">1450</span> and <span class="num">1750</span> religion was the only language of legitimacy every subject understood, which made it the most powerful instrument a ruler had and the most dangerous. This chapter covers the Reformation as a political event, the sectarian border two empires drew and left behind, the arithmetic of ruling people who believe otherwise, and the tradition that began in the space where two of these worlds met.`,
  meta: ['Six sections', 'Belief as instrument and as conviction', 'Read alongside the First & 10'],
  footerNote: 'Topic 3.3 &nbsp;·&nbsp; Faith, and the Uses of It &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the frame that makes the rest coherent, and sections 02 to 06 are the four cases the success criteria name plus the one they imply. If you are short of time, read 01 and then whichever case your prompt names; each of 02 to 06 stands on its own.`,
    steps: [
      `<b>01 Religion as an instrument:</b> the four jobs it did for a ruler, and its one great risk.`,
      `<b>02 The Reformation:</b> what actually changed, and why princes were interested.`,
      `<b>03 The Catholic response:</b> Trent, the Jesuits, and how both reformations grew the church.`,
      `<b>04 Sunni and Shia:</b> Chaldiran, a manufactured identity, and a border still on the map.`,
      `<b>05 Ruling people who believe otherwise:</b> jizya, millets, Akbar, Aurangzeb, the Qing.`,
      `<b>06 Sikhism:</b> a new tradition, and how to write about it accurately.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'instrument',
      num: '01',
      accent: 'gold',
      name: 'The Four Jobs Religion Did for a Ruler',
      navLabel: 'Religion as instrument',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; The frame',
      thesis: `Religion was not one thing to an early modern state. It was a claim to rule, a way of organizing subjects, a source of trained personnel, and a reason to fight, and rulers used all four, often at the same time.`,
      parts: [
        {
          heading: 'The four jobs',
          blocks: [
            { p: `<b>Legitimacy.</b> Nobody in this period believed a ruler should govern because a majority chose him. The available claims were dynastic and divine: God, or Heaven, or the imams, or the community of believers had placed this family in authority. An Ottoman sultan was protector of Mecca and Medina; a Safavid shah claimed descent from the imams; a Qing emperor held the Mandate of Heaven; a French king ruled by divine right. Strip out the religious claim and there is nothing left to say about why anyone should obey.` },
            { p: `<b>Administration.</b> Religious institutions came with personnel, records, courts and buildings, and no state in this period could have replaced them. Judges applying religious law settled disputes; clergy recorded births, marriages and deaths; endowments funded schools, hospitals and kitchens, as the Topic 3.2 chapter describes; and in most of these empires the men who could read and write in the required language had been trained by a religious institution.` },
            { p: `<b>Managing difference.</b> Every empire here ruled people of several faiths and had to decide the terms. Those terms, who pays what, who may build what, whose courts govern whose marriages, who may hold office, are the practical content of religious policy, and they were adjusted for political reasons throughout.` },
            { p: `<b>Mobilization.</b> Religion turns a border dispute into a duty. It recruits, it justifies taxes, and it makes an enemy into an infidel or a heretic, which is a category you can fight without negotiating. That is the fourth job, and it is also the risk: a ruler who has made his legitimacy religious cannot easily compromise on religion, and a doctrinal quarrel becomes a permanent war.` }
          ]
        },
        {
          heading: 'The analytical rule for this whole topic',
          blocks: [
            { p: `When you meet a religious policy in Unit 3, ask what it did rather than what it professed. Not "was Akbar tolerant?" but "what did abolishing the jizya buy him, and from whom?" Not "were the Ottomans tolerant of Christians?" but "what did governing them through their own religious leaders save the state, and what did the jizya bring in?" Not "was Luther sincere?", which he plainly was, but "why did a doctrinal argument about indulgences turn into a redistribution of church lands to German princes?"` },
            { p: `This is not a claim that belief was insincere. These were believing societies and most of these rulers were believers; Aurangzeb's piety was genuine and so was Akbar's curiosity. The point is that sincere belief and political calculation are not alternatives, and the questions above are the ones that produce explanations rather than verdicts. A student who scores well in this topic is one who can say what a policy accomplished, for whom, and at what cost.` }
          ]
        }
      ],
      useThis: {
        tool: `Religion as the only universal language of legitimacy. <em>The mechanism is that in a world with no theory of popular consent, the sole available answer to "why should I obey you?" is a religious one, which makes control of religious claims the foundation of political authority and makes every doctrinal dispute a dispute about who may rule.</em>`,
        limit: `The same dependence is the trap. A ruler whose legitimacy is religious cannot compromise doctrine without undermining himself, which is why the Ottoman-Safavid and European wars of religion were so hard to end.`,
        comparison: `Against <em>Topic 1.7</em>: the same four jobs appear in the earlier unit, with Neo-Confucianism, the caliphate, temple endowment and Theravada merit-making. Unit 3 differs in that religious difference became a reason for war between states of the same religion, which is new and is what section 04 is about.`
      },
      terms: [
        ['Legitimacy', 'The accepted reason a ruler may command obedience, which in this period was always framed religiously.'],
        ['Confessionalization', 'The process by which states and churches aligned so that religious identity and political loyalty became the same thing.'],
        ['Religious law', 'The bodies of law, sharia and canon law among them, that governed marriage, inheritance and disputes and supplied states with courts they did not have to build.'],
        ['Toleration', 'A policy of permitting other faiths on defined terms, adopted for political reasons and revocable for political reasons.'],
        ['Mobilization', 'The use of religious framing to raise soldiers, justify taxes and turn a rival state into an enemy that need not be negotiated with.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'reformation',
      num: '02',
      accent: 'rust',
      name: 'The Reformation, as a Political Event',
      navLabel: 'The Reformation',
      dates: '1517 to 1648 &nbsp;·&nbsp; Wittenberg to Westphalia',
      thesis: `A theological objection became the largest political rearrangement in European history because it offered princes something they wanted and because a new technology made suppression impossible.`,
      parts: [
        {
          heading: 'The argument, and why it did not stay an argument',
          blocks: [
            { p: `In <span class="num">1517</span> Martin Luther, a professor of theology, published objections to the sale of <span class="kt">indulgences</span>, remissions of penalty for sin sold to fund church projects including the rebuilding of St Peter's in Rome. The objection widened into a set of claims with enormous consequences: that salvation comes through faith rather than through works or purchase, that scripture rather than church tradition is the authority, and that the priesthood has no unique mediating power between a believer and God.` },
            { p: `Take that last claim seriously for a moment. If a priest is not a necessary intermediary, then the entire hierarchy above him, bishops, cardinals, pope, is a human institution rather than a divine one, and its lands, courts, taxes and jurisdiction are open to question. What began as a dispute about a fundraising practice became a challenge to the largest landholder and the only pan-European legal authority in Europe.` },
            { p: `Printing is why it survived. Previous reformers had been condemned and their movements contained; Luther's tracts, in German and in short, cheap, vernacular editions with woodcut illustrations, circulated in tens of thousands of copies within months. The Topic 2.5 chapter traces papermaking's arrival in Europe; this is what the cheap surface plus the press was for. A movement that can reproduce its arguments faster than an institution can suppress them is a genuinely new problem.` }
          ]
        },
        {
          heading: 'Why princes signed up',
          blocks: [
            { p: `The political appeal was concrete. A ruler who adopted the reform stopped sending revenue to Rome, acquired the church's lands and monasteries within his territory, gained control over ecclesiastical appointments, and could resist the Holy Roman Emperor's authority on principle. In England the sequence is almost undisguised: Henry VIII's break with Rome began in a dispute over an annulment, and it delivered him supremacy over the church in his kingdom and the dissolution of the monasteries and their wealth.` },
            { p: `The reform also had radical implications its leaders did not want. When peasants in the German lands rose in <span class="num">1524</span> and <span class="num">1525</span> citing Christian freedom against their lords, Luther condemned them fiercely and backed the princes. That episode is worth knowing because it shows the limit: the Reformation redistributed authority among elites and did not intend to redistribute it downward.` },
            { p: `The settlement came in stages. The Peace of Augsburg in <span class="num">1555</span> ended a phase of war in the empire with the principle that each prince determined the religion of his territory, which is a remarkable formula: it treated religion as an attribute of a state rather than of a person, and it left subjects to conform or emigrate. The Thirty Years' War from <span class="num">1618</span> to <span class="num">1648</span> then devastated central Europe, with some regions losing a substantial fraction of their population, before the Peace of Westphalia extended the same principle and confirmed that no universal religious authority would govern Europe again.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Reformation introduced religious freedom. It introduced a plurality of state churches. Augsburg let a <em>prince</em> choose, not a person; dissenters conformed, left, or were punished, and Calvinists were not even included in the 1555 settlement. Persecution continued on all sides, and in several places intensified, because a state church with a rival across the border is more anxious about internal dissent, not less. What the period does establish, slowly and unintentionally, is that religious uniformity across Europe is unachievable, and toleration in the later sense is built on that exhaustion rather than on a principle anyone won.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Doctrine with a fiscal consequence. <em>The mechanism is that denying the priesthood's unique mediating role made the entire church hierarchy a human institution, which put its lands, revenues, courts and appointments in play, so a prince who adopted the reform gained property, jurisdiction and independence from both pope and emperor in a single decision.</em>`,
        limit: `It rearranged authority among rulers and refused to extend the logic downward, as Luther's response to the peasant risings of 1524 and 1525 makes plain.`,
        comparison: `Against the <em>Safavid conversion of Iran</em> in section 04: both are cases of a religious change adopted by rulers for reasons that were simultaneously devotional and political, and both hardened into state identities that made war with the neighbors permanent.`
      },
      terms: [
        ['Indulgence', 'A remission of penalty for sin, sold to fund church projects, whose sale prompted Luther&rsquo;s objections in 1517.'],
        ['Sola fide and sola scriptura', 'The claims that salvation comes through faith alone and that scripture alone is authoritative, which together undercut the church hierarchy&rsquo;s standing.'],
        ['Printing press', 'The technology that reproduced reform arguments faster than the church could suppress them, in cheap vernacular editions.'],
        ['Peace of Augsburg', 'The 1555 settlement letting each prince in the empire determine his territory&rsquo;s religion, treating faith as an attribute of a state.'],
        ['Peace of Westphalia', 'The 1648 settlement ending the Thirty Years&rsquo; War, extending the Augsburg principle and confirming that no universal religious authority would govern Europe.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'catholic',
      num: '03',
      accent: 'iron',
      name: 'The Catholic Response, and the Global Church',
      navLabel: 'The Catholic response',
      dates: '1540 to 1750 &nbsp;·&nbsp; Trent, the Jesuits, the missions',
      thesis: `The half of the criteria students miss: both reformations expanded Christianity. The Catholic response produced a disciplined missionary order that carried the church to Asia and the Americas within a single lifetime.`,
      parts: [
        {
          heading: 'Trent and the Jesuits',
          blocks: [
            { p: `The <span class="kt">Council of Trent</span>, meeting between <span class="num">1545</span> and <span class="num">1563</span>, did two things. It reaffirmed the doctrines the reformers had denied, on the sacraments, on tradition alongside scripture, on the priesthood, so that the boundary between Catholic and Protestant became explicit rather than contested. And it reformed the abuses the reformers had attacked, requiring bishops to reside in their dioceses, standardizing the liturgy, and, most consequentially, ordering the establishment of seminaries so that priests would be trained rather than merely ordained.` },
            { p: `The <span class="kt">Society of Jesus</span>, founded by Ignatius of Loyola and approved in <span class="num">1540</span>, is the institutional star of this section. It was organized on quasi-military lines with a vow of obedience to the pope, it selected and trained its members over many years, and it specialized in two activities with enormous reach: education, through a network of schools and colleges that shaped Catholic elites for centuries, and missions.` }
          ]
        },
        {
          heading: 'The missions, and the accommodation problem',
          blocks: [
            { p: `Within a decade of the order's approval, Jesuits were in India, in Japan, and shortly after in China and Brazil, and they traveled along the routes European maritime expansion had opened, which is the direct link between this topic and Unit 4. Their most interesting strategic choice was <span class="kt">accommodation</span>: rather than demanding that converts abandon their culture, some missionaries adopted local dress, language and manners and argued that certain local practices were civil rather than religious and could therefore continue.` },
            { p: `In China, Matteo Ricci learned Chinese, studied the Confucian classics, presented himself in the manner of a scholar, offered European mathematics, astronomy and cartography to the court, and argued that Chinese veneration of ancestors was a civil rite of respect rather than idolatry, and so was compatible with Christian faith. In India, another Jesuit adopted the manner of a Hindu ascetic on the same reasoning.` },
            { p: `Rome eventually decided against them. In the dispute known as the Chinese Rites Controversy, the papacy ruled that the ancestral rites were incompatible with Christianity, and the Kangxi emperor, who had been broadly favorable to the missionaries, responded by restricting their activity: a foreign religious authority had claimed the right to define what Chinese subjects could do in their own ritual life. The mission's opportunity in China narrowed sharply from that point.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: both reformations grew the church, and the numbers went in different directions',
              html: `Protestantism spread across northern Europe and, with English and Dutch settlement, into North America, largely by the movement of European populations. Catholicism spread through missions into Latin America, where conversion was rapid, enormous in scale and thoroughly syncretic, and into the Philippines, and it established durable if much smaller communities in India, Japan before the seventeenth-century suppression, and China. So the criteria's claim is exactly right and the two mechanisms are different: one religion travels with settlers, the other with specialists sent for the purpose. Naming the mechanism, rather than saying both simply grew, is what makes the point count.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The trained missionary order. <em>The mechanism is that a centralized order with long selection and training, a vow of obedience and a global assignment system could place specialists in Beijing, Goa, Kyoto and Brazil and redirect them at will, which no national church or diocesan clergy could do, and it carried Catholicism along the maritime routes European expansion had just opened.</em>`,
        limit: `Accommodation collided with central authority. When Rome ruled against the Chinese rites, a mission built on the claim that Christianity need not displace Chinese culture lost the argument and much of its access.`,
        comparison: `Against <em>Sufi teachers</em> in Topic 2.5: two traditions expanding by tolerating local practice, one through an order answerable to a distant central authority that could overrule it, and one through decentralized teachers with no such authority above them. That difference explains why one accommodation was reversed and the other never could be.`
      },
      terms: [
        ['Council of Trent', 'The 1545 to 1563 council that fixed Catholic doctrine against Protestant claims and required seminaries to train priests.'],
        ['Society of Jesus', 'The Jesuit order, approved in 1540, organized for obedience, education and global missions.'],
        ['Accommodation', 'The missionary strategy of adopting local language, dress and manners and permitting practices judged civil rather than religious.'],
        ['Chinese Rites Controversy', 'The dispute over whether ancestral veneration was compatible with Christianity, decided against accommodation and costing the mission its standing in China.'],
        ['Syncretism', 'The blending of Christian and indigenous practice, the normal form conversion took in Latin America and the Philippines.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'sunni-shia',
      num: '04',
      accent: 'oxide',
      name: 'Sunni and Shia: Two Empires and a Border',
      navLabel: 'Sunni and Shia',
      dates: '1501 to 1639 &nbsp;·&nbsp; Ismail to Zuhab',
      thesis: `A dynasty imposed a minority form of Islam on a country in order to have an identity of its own, and the war that followed drew a line on the map that is still there.`,
      parts: [
        {
          heading: 'What the split is, briefly and accurately',
          blocks: [
            { p: `The division goes back to the succession after the Prophet's death. <span class="kt">Sunni</span> Muslims hold that leadership of the community passed to the caliphs chosen by the community; <span class="kt">Shia</span> Muslims hold that authority belonged to the Prophet's family, through Ali and his descendants, the imams. Over centuries the two developed distinct legal traditions, devotional practices and clerical structures. By <span class="num">1500</span> the great majority of Muslims were Sunni, including most Iranians.` }
          ]
        },
        {
          heading: 'The imposition',
          blocks: [
            { p: `When Ismail took Tabriz in <span class="num">1501</span> he declared Twelver Shiism the religion of his state, in a country that was overwhelmingly Sunni. The Topic 3.1 chapter covers the military story; what matters here is the method and the motive. There were not enough Shia scholars in Iran to staff a state religious establishment, so the Safavids imported them from Arab Shia centers, funded them with endowments and land, and gave them positions in the courts and the schools. Public ritual was reordered, dissent was punished, and within a few generations Iran was a Shia country, which it has remained.` },
            { p: `The motive was identity. A new dynasty in a region full of Sunni Turkic rivals, with the Ottomans to the west claiming leadership of Sunni Islam, needed a claim that was not simply a weaker version of theirs. Shiism gave the Safavids a distinct legitimacy, a devoted following in the Qizilbash, and a permanent reason why obedience to Istanbul was out of the question. It is the clearest case in the course of a state building a religious identity because it needed one.` }
          ]
        },
        {
          heading: 'Chaldiran, and the border it started',
          blocks: [
            { p: `In <span class="num">1514</span> at Chaldiran the Ottomans destroyed the Safavid army with artillery and janissary firearms. Read the battle as the success criteria ask, as religious and political at once. Religiously, Selim had obtained rulings condemning the Safavids as heretics, which made the campaign lawful against fellow Muslims; the Ottomans had also acted against Qizilbash sympathizers within Anatolia, who were a genuine internal security problem because their loyalty ran to a rival shah. Politically, the war was about eastern Anatolia, the trade routes, and which of two expanding empires would dominate the region between them.` },
            { p: `The consequence is what makes it worth teaching. Two centuries of intermittent war followed, with Baghdad changing hands repeatedly, and successive treaties, in <span class="num">1555</span> and definitively in <span class="num">1639</span>, fixed a frontier that runs close to the modern border between Turkey and Iraq on one side and Iran on the other. A sectarian frontier established by early modern artillery is still a line on the map, and the Sunni and Shia populations on either side of it are still there. When a prompt asks for the long-term significance of a Unit 3 conflict, that is as concrete as significance gets.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Be careful with the Ottoman claim to the caliphate. Selim's conquest of the Mamluks in <span class="num">1517</span> gave the sultans custody of Mecca and Medina and the prestige of protecting the pilgrimage, which is real and important. The tidy story that the last Abbasid caliph in Cairo formally transferred the office to Selim is a later tradition, given weight in the eighteenth century when the Ottomans found a universal claim diplomatically useful. Write "protector of the holy cities and the leading Sunni power, and later claimant to the caliphate," and you have the part that is documented and the part that is a claim, correctly separated.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A state-imposed confession. <em>The mechanism is that a new dynasty facing rivals who shared its subjects' religion adopted a minority confession, imported scholars to staff an establishment it did not have, funded them with endowments, and reordered public ritual, which within generations produced a population whose religious identity made submission to the rival empire unthinkable.</em>`,
        limit: `It also produced a permanent war. Religious framing made the Ottoman frontier non-negotiable, and both empires spent resources for two centuries on a border that neither could move decisively.`,
        comparison: `Against the <em>Peace of Augsburg</em>: Europe eventually converted its religious wars into a rule that each ruler chooses for his territory, while the Ottomans and Safavids fought to a fixed line without ever conceding the principle. Two settlements of the same problem, one doctrinal and one merely geographic.`
      },
      terms: [
        ['Sunni', 'The majority tradition, holding that leadership passed to caliphs chosen by the community.'],
        ['Shia', 'The tradition holding that authority belonged to the Prophet&rsquo;s family through Ali and the imams; Twelver Shiism became the Safavid state religion.'],
        ['Chaldiran', 'The 1514 Ottoman victory that checked Safavid expansion and began two centuries of sectarian frontier war.'],
        ['Ulama', 'The scholars of religious law, imported into Iran by the Safavids to staff an establishment the country did not yet have.'],
        ['Sectarian frontier', 'The Ottoman-Safavid border fixed by treaties in 1555 and 1639, which still approximates a modern international boundary.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'ruling-others',
      num: '05',
      accent: 'gold',
      name: 'Ruling People Who Believe Otherwise',
      navLabel: 'Ruling others',
      dates: 'c. 1450 to 1750 &nbsp;·&nbsp; Jizya, millets, Akbar, Aurangzeb, the Qing',
      thesis: `Every empire here ruled subjects of other faiths and had to price the arrangement. Read the policies as prices and the pattern becomes legible, including the reversals.`,
      parts: [
        {
          heading: 'The Ottoman arrangement',
          blocks: [
            { p: `Non-Muslim subjects, principally Orthodox and Armenian Christians and Jews, were dhimmi as described in the Topic 1.2 chapter: permitted worship, property and their own community courts for family law, in exchange for the <span class="kt">jizya</span> and a set of restrictions. Communities were governed through their own religious leaders, who were made responsible for order and for delivering the tax, an arrangement later formalized as the millet system.` },
            { p: `Two pieces of evidence make the policy concrete. When Spain expelled its Jewish population in <span class="num">1492</span>, the Ottoman sultan welcomed the refugees, who settled in Salonica, Istanbul and elsewhere and became substantial communities; a state that gains skilled subjects and taxpayers at a rival's expense is making a calculation as well as a gesture. And the jizya was a significant revenue stream, which is exactly why an empire with millions of Christian subjects had a fiscal interest in their remaining Christian.` }
          ]
        },
        {
          heading: 'Akbar and Aurangzeb, the same empire twice',
          blocks: [
            { p: `<b>Akbar</b> abolished the pilgrimage tax and then, in <span class="num">1564</span>, the jizya itself. He recruited Rajput rulers into the highest ranks of the nobility and married into their families. He founded a hall of debate where Muslim scholars argued with Hindus, Jains, Zoroastrians and visiting Jesuits, sponsored translations of Sanskrit epics into Persian, and articulated a court principle usually rendered as universal civility, <span class="kt">sulh-i kul</span>, under which the state would not favor one community against another.` },
            { p: `<b>Aurangzeb</b>, a century later, reimposed the jizya in <span class="num">1679</span>, applied a stricter reading of Islamic law at court, and in a number of documented cases ordered the destruction of temples, particularly in territories associated with resistance. He also, and this complicates the tidy version, issued grants supporting some Hindu temples and employed Hindu officers in large numbers, including in senior military commands.` },
            { p: `The productive way to hold these together is as two answers to one calculation. Both rulers needed revenue, loyalty from a warrior elite, and legitimacy with the Muslim scholarly establishment. Akbar, consolidating a young empire that needed Rajput arms and Hindu administrators, bought loyalty by removing a tax that marked the majority as subordinate. Aurangzeb, fighting expensive wars in the Deccan and facing questions about his own seizure of the throne, needed money and needed the endorsement of the ulama, and reimposing the jizya delivered both. Neither policy requires anyone to have changed their mind about God.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two cautions, in opposite directions. Do not turn Akbar into a modern liberal: sulh-i kul was a court policy of managed diversity in an autocratic empire, and the <em>Din-i Ilahi</em> was not a new religion for the population but a small circle of personal discipleship among a few dozen courtiers, which is how most historians now describe it. And do not turn Aurangzeb into a cartoon: his reign involved documented temple destruction and a reimposed discriminatory tax, and also more Hindu mansabdars than any predecessor. State the specific policies with their dates and let them carry the argument, rather than reaching for a label for either man.`
            } }
          ]
        },
        {
          heading: 'The Qing, and one ruler in several idioms',
          blocks: [
            { p: `The Qing solution is the most sophisticated in the unit and it is the one students almost never cite. A Manchu dynasty ruled Chinese, Mongols, Tibetans, Muslims of the northwest and others, and rather than imposing one framework it presented the emperor differently to each constituency. To Chinese subjects he was the holder of the Mandate of Heaven, performing the Confucian state rituals and patronizing classical scholarship. To Mongols and Tibetans he was a patron and protector of Tibetan Buddhism, endowing monasteries and represented in Buddhist terms. To the Manchu banners he remained the head of their own people.` },
            { p: `That is not confusion or insincerity; it is a deliberate strategy of plural legitimacy, and it is why the Qing could hold together an empire more religiously diverse than any other in this unit. The cost was that it required constant management, and the whole arrangement depended on the court's ability to keep speaking several languages of authority at once.` },
            { p: `Russia went the other way. Orthodoxy was the state church and the state steadily absorbed it, culminating in Peter I's replacement of the patriarchate with a governing council under the crown, so that the church became a department of government. Where the Qing multiplied their religious identities, the Russian state simplified its own and put it under direct control.` }
          ]
        }
      ],
      useThis: {
        tool: `Pricing religious difference. <em>The mechanism is that a discriminatory tax raises revenue and marks a hierarchy, while removing it purchases the loyalty of the majority and of the elites who lead them, so a ruler's decision follows from which he needs more at that moment: Akbar needed Rajput arms and Hindu administrators in 1564, and Aurangzeb needed money and clerical endorsement in 1679.</em>`,
        limit: `Prices can be revised, and being on the wrong side of a revision is a real experience for real people. Reading policy as calculation explains the changes; it does not make the discrimination less discriminatory.`,
        comparison: `Against the <em>Qing</em>: where the Mughals adjusted the terms of a single hierarchy, the Qing presented the emperor in several religious idioms at once, which is a completely different solution to diversity and probably the more durable one.`
      },
      terms: [
        ['Jizya', 'The tax on non-Muslim subjects, a revenue stream and a marker of status, abolished by Akbar in 1564 and reimposed by Aurangzeb in 1679.'],
        ['Sulh-i kul', 'Akbar&rsquo;s court principle of universal civility, under which the state would not favor one religious community against another.'],
        ['Din-i Ilahi', 'The small circle of personal discipleship around Akbar, frequently and misleadingly described as a new religion for the empire.'],
        ['Plural legitimacy', 'The Qing practice of presenting the emperor in different religious idioms to different constituencies at the same time.'],
        ['Holy Synod', 'The council through which Peter I replaced the Russian patriarchate, subordinating the church to the state.']
      ]
    },

    // ── 06 ────────────────────────────────────────────────────────────────────
    {
      id: 'sikhism',
      num: '06',
      accent: 'rust',
      name: 'Sikhism',
      navLabel: 'Sikhism',
      dates: '1469 to 1708 &nbsp;·&nbsp; Nanak to the Guru Granth Sahib',
      thesis: `A tradition founded in a region where Hindu devotion and Islamic mysticism had been in conversation for centuries, which is the historical context, and which understands itself as a distinct revelation rather than as a blend of the two.`,
      parts: [
        {
          heading: 'What Nanak taught',
          blocks: [
            { p: `<span class="kt">Guru Nanak</span>, born in <span class="num">1469</span> in the Punjab, taught that there is one God, formless and beyond image; that God is approached through remembrance of the divine name, honest work and service to others rather than through ritual, pilgrimage or asceticism; and that the social distinctions people treat as sacred, caste above all, have no standing before God.` },
            { p: `Three institutions made that teaching a community rather than a philosophy, and they are the concrete evidence to cite. The <span class="kt">langar</span>, a free communal kitchen attached to every place of worship, where all present eat the same food seated in the same row: in a society where who may eat with whom is the operative machinery of caste, that is not charity, it is a direct assault on the system, performed daily. The <span class="kt">sangat</span>, the congregation, which met to sing and share and was open to anyone. And the line of gurus, ten in succession, which gave the community continuity, direction and eventually a political existence.` }
          ]
        },
        {
          heading: 'From community to a people with a stake in Mughal politics',
          blocks: [
            { p: `The community grew, built centers, and acquired institutions. The fourth guru founded the settlement that became Amritsar; the fifth, Guru Arjan, built its central shrine and compiled the scripture, the <span class="kt">Adi Granth</span>, in <span class="num">1604</span>, a compilation that includes the hymns of the gurus and also verses by Hindu and Muslim devotional poets, which tells you how the tradition understood the wider devotional world it stood within.` },
            { p: `It also collided with empire. Guru Arjan was executed under Jahangir in <span class="num">1606</span>, in circumstances involving both political suspicion and religious hostility. In <span class="num">1675</span> Guru Tegh Bahadur was executed under Aurangzeb, in an episode Sikh tradition connects to his defense of Kashmiri Hindus facing forced conversion. In <span class="num">1699</span> the tenth guru, Gobind Singh, founded the <span class="kt">Khalsa</span>, an initiated community with a distinctive discipline and appearance, organized to defend itself. And in <span class="num">1708</span> the line of living gurus was ended, with authority passing to the scripture itself, thereafter the Guru Granth Sahib.` },
            { p: `That sequence is a Unit 3 story in miniature. A devotional movement becomes a community, the community acquires property and leadership, an empire treats organized leadership as a political question, repression produces militarization, and by the eighteenth century the Sikhs are a military and then a political power in the Punjab.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The course description says Sikhism developed "in a context of interactions between Hinduism and Islam," and that phrasing is careful for a reason. Do not write that Sikhism is a blend or a fusion of the two. Sikh tradition understands Nanak's teaching as a distinct revelation, not as a synthesis of other people's religions, and the blend framing is an outsider's description that Sikhs have long objected to. The accurate version keeps the history and respects the claim: Nanak taught in a Punjab where Bhakti devotion and Sufi mysticism had been in conversation for centuries, his teaching shares emphases with both, including one formless God and the rejection of ritual formalism, and it makes claims neither tradition makes and founded institutions neither had. Say that, and you have the context, the accuracy and the respect all at once.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The langar as doctrine made physical. <em>The mechanism is that eating together in a single row is precisely what caste rules forbid, so a free communal kitchen at every place of worship enacts the rejection of caste daily and publicly, converting a teaching into a practice that every participant performs rather than merely believes.</em>`,
        limit: `The community's growth made it a political object. Guru Arjan's execution in 1606 and Guru Tegh Bahadur's in 1675 mark the point at which an empire stopped seeing a devotional movement and started seeing an organized body with leadership.`,
        comparison: `Against the <em>Bhakti</em> movement in Topic 1.3: both rejected caste and priestly mediation and taught in the vernacular, and Bhakti communities largely settled into being jatis within the existing order while the Sikh community developed its own scripture, initiation and institutions. Continuity of leadership is most of the difference.`
      },
      terms: [
        ['Guru Nanak', 'The founder, born 1469 in the Punjab, who taught one formless God approached through remembrance, honest work and service.'],
        ['Langar', 'The free communal kitchen where all eat together in one row, enacting the rejection of caste in daily practice.'],
        ['Adi Granth', 'The scripture compiled by Guru Arjan in 1604, including hymns of the gurus alongside verses by Hindu and Muslim devotional poets.'],
        ['Khalsa', 'The initiated community founded by Guru Gobind Singh in 1699, with a distinctive discipline and organized for self-defense.'],
        ['Guru Granth Sahib', 'The scripture that became the community&rsquo;s guru in 1708, ending the line of living gurus.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the evidence with dates, and the reason. Notice that none of them rates a ruler as tolerant or intolerant, and that all of them could have.`,
    pairs: [
      {
        category: 'Religion and rule',
        title: 'Akbar and Aurangzeb made opposite decisions with the same calculation',
        body: `Akbar abolished the jizya in 1564, recruited Rajput rulers into the highest mansabs, married into their houses and articulated sulh-i kul as court policy. Aurangzeb reimposed the jizya in 1679, applied a stricter reading of law at court, and destroyed temples in territories associated with resistance, while still employing Hindu officers in unprecedented numbers. The difference exists because each needed something different at the time: a young empire consolidating over a Hindu majority needed the warrior elite of that majority inside the system, while a ruler fighting expensive Deccan wars and facing questions about his own accession needed revenue and the endorsement of the ulama.`
      },
      {
        category: 'Sectarian conflict',
        title: 'Europe converted its religious wars into a rule; the Ottomans and Safavids converted theirs into a border',
        body: `The Peace of Augsburg in 1555 and the Peace of Westphalia in 1648 ended phases of European religious war with the principle that each ruler determines his territory's religion, which is a doctrinal settlement of a doctrinal quarrel. Chaldiran in 1514 opened two centuries of Ottoman-Safavid war that ended in treaties in 1555 and 1639 fixing a frontier close to today's borders, without either side conceding anything about who was a heretic. The difference exists because Europe's rulers were many and exhausted, so a general rule was cheaper than continued war, while two empires each claiming to lead Islam could stop fighting over a line and could not stop denying each other's legitimacy.`
      },
      {
        category: 'Managing diversity',
        title: 'The Qing solved the problem the Mughals kept adjusting',
        body: `Mughal policy toward the Hindu majority moved between abolition and reimposition of the jizya as rulers' needs changed, adjusting the terms of a single hierarchy. The Qing presented the emperor simultaneously as holder of the Mandate of Heaven to Chinese subjects, patron of Tibetan Buddhism to Mongols and Tibetans, and head of the banners to the Manchus. The difference exists because the Qing were a small conquest elite over several large and distinct populations with no shared framework available, so plural legitimacy was the only workable arrangement, and it proved more durable than any single hierarchy with adjustable terms.`
      },
      {
        category: 'Change and continuity',
        title: 'Both reformations expanded Christianity, by different mechanisms',
        body: `Protestantism spread across northern Europe as princes adopted it for property, jurisdiction and independence, and later crossed the Atlantic with English and Dutch settlement. Catholicism, reorganized by Trent and equipped with the Jesuit order, followed the maritime routes into Latin America, the Philippines, India, Japan and China, converting on an enormous scale in the Americas and in syncretic forms. The difference exists because one grew where populations moved and the other grew where trained specialists were sent, which is why Protestant expansion followed settlement patterns and Catholic expansion followed shipping lanes.`
      }
    ]
  }
};
