'use strict';

/**
 * Topic 4.7, Changing Social Hierarchies: the deep reading.
 *
 * Why this exists. The learning objective asks how social categories, roles
 * and practices were maintained or changed from 1450 to 1750, and the three
 * Key Concepts name the changes: states that made room for some groups and
 * pushed out or limited others (KC-4.3.I.B), new elites made by conquest and
 * trade (KC-4.2.III.A), and old elites whose power rose and fell against
 * stronger rulers (KC-4.2.III.B). The First & 10 tells that story case by
 * case. What it has no room for is the mechanism behind each case: why a
 * sultan took in refugees, how the Ottomans governed Christians and Jews and
 * what that did not include, why Akbar's policy could be undone, how a small
 * conquest elite held China, how casta was really assigned, and why the
 * Ottoman cavalry, the Russian boyars and the French nobles lost ground while
 * England's landowners gained it.
 *
 * Rebuilt from the 4.7 story (docs/TOPIC-4-7-STORY-DRAFT.md) on 2026-10-18.
 * The old chapter, "Writing Ancestry Into Law," had no material at all on
 * timars, boyars or European nobility (KC-4.2.III.B), gave the Mughals one
 * clause, and leaned on material from after 1750: the Pragmática of 1776,
 * Tupac Amaru II's rising of 1780, and the gracias al sacar fee schedule of
 * 1795. Its careful lines on the millet as a later formalization, on Qing
 * separation, and on how casta was assigned in practice are kept here,
 * simplified, in sections 01, 03 and 04.
 *
 * Three things carried deliberately:
 *
 *   1. Continuity first. Every section names what stayed the same, because
 *      the objective says "maintained or have changed" and students forget
 *      the first half.
 *   2. Both halves of KC-4.3.I.B. Section 01 sets a state that pushed a group
 *      out beside one that took it in, and section 02 shows one empire
 *      reversing its own policy.
 *   3. "Fluctuated." Section 05 ends in England, where the old elite won,
 *      so "old elites lost power" never stands as the whole answer.
 */

module.exports = {
  topicKey: 't4-7',
  slug: 'topic-4-7-changing-social-hierarchies',
  sourceFile: 'deep-reading-topic-4-7-changing-social-hierarchies.html',
  lessonFile: 'lesson-4-7-changing-social-hierarchies.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.7: Who Belongs, Who Rises',
  eyebrow: 'Topic 4.7 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Belongs, Who <em>Rises</em>',
  deck: `Every society in this course ranked people, and between 1450 and 1750 that did not change. What changed was who stood where. This chapter explains why some empires took in groups that others pushed out, why one emperor's welcome could be undone by the next, how a woman's class shaped her life in the Ottoman Empire, how conquest made new elites in China and Spanish America, and why the old nobles of the Ottoman Empire, Russia and France lost ground while England's gained it.`,
  meta: ['Five sections', 'Belonging, rulers and class, the Qing, casta, old elites', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.7 &nbsp;·&nbsp; Who Belongs, Who Rises &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks one thing of this topic: explain how social categories, roles, and practices were maintained or changed from 1450 to 1750. Sections 01 and 02 explain who could belong. Sections 03 and 04 explain the new elites that conquest and trade created. Section 05 explains what happened to the old elites. Every section ends with what stayed the same, because a strong answer names both.`,
    steps: [
      `<b>01 Pushed out and taken in:</b> Spain and Portugal, the Ottoman welcome, and how the Ottomans governed Christians and Jews.`,
      `<b>02 It depends:</b> Akbar and Aurangzeb, and Ottoman women of different classes.`,
      `<b>03 A new elite in China:</b> the Manchu conquest, the banners, and the limits on the Han majority.`,
      `<b>04 A new top in the Americas:</b> the casta ranking, the paintings, and how status really worked.`,
      `<b>05 Old elites squeezed:</b> sipahis and their timars, the boyars, the French nobles, and the English exception.`,
      `<b>Then the closing section</b>, which gathers the evidence for each Key Concept.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'belong',
      num: '01',
      accent: 'gold',
      name: 'Pushed Out and Taken In',
      navLabel: 'Pushed out, taken in',
      dates: '1492 to 1700s &nbsp;·&nbsp; Spain, Portugal and the Ottoman Empire',
      thesis: `In the 1490s two kinds of state faced the same people and made opposite choices. Spain and Portugal wanted one religion in each kingdom, and pushed their Jews out or forced them to convert. The Ottoman Empire wanted useful subjects, and took the refugees in. Neither choice was about kindness; each was about what the state wanted.`,
      parts: [
        {
          heading: 'Spain and Portugal push a group out',
          blocks: [
            { p: `In January <span class="num">1492</span> Ferdinand and Isabella took Granada, the last Muslim kingdom in Spain. On 31 March they ordered every Jew in their kingdoms who would not become Christian to leave by the end of July. Jews could take their goods, but not gold, silver or coins. Historians' estimates of how many left run from about forty thousand to two hundred thousand; more converted and stayed. Many of the exiles crossed into Portugal.` },
            { p: `Four years later, in December <span class="num">1496</span>, Portugal's king Manuel I ordered the Jews out of his kingdom too. In <span class="num">1497</span>, instead of letting most of them leave, he had them baptized by force. In both kingdoms, converts and their descendants were then watched for signs that they still practiced Judaism in secret, and Spanish "purity of blood" rules barred people with Jewish or Muslim ancestors from some offices, colleges and religious orders, even if they were Christians themselves.` },
            { p: `This is what the College Board means by a state that <span class="kt">suppressed</span> diversity. Spain and Portugal did not want different religions living side by side under the crown; they wanted one, and they were willing to lose thousands of skilled subjects to get it.` }
          ]
        },
        {
          heading: 'The Ottomans take them in, and how they ruled Christians and Jews',
          blocks: [
            { p: `The Ottoman sultan Bayezid II let the refugees settle in his empire. Thousands came, to Istanbul, to Salonica (today Thessaloniki, in Greece) and to other cities, where Jewish communities already lived. In Salonica the newcomers set up congregations named after the places in Spain and Portugal they had come from, and by the 1500s Jews were the largest group in the city, which they stayed for centuries. Exiles from Spain set up Istanbul's first printing press, which printed books in Hebrew.` },
            { p: `Why would a Muslim sultan welcome them? Because they were useful. The refugees were merchants, doctors, craftsmen and taxpayers, and an empire gains from people like that. A remark is often quoted in which Bayezid mocks Ferdinand for making his own kingdom poor and the sultan's rich. It is very likely a later story, but it captures the reasoning.` },
            { p: `The Ottoman Empire already ruled millions of Christians and Jews, and it governed them by an old rule of Islamic law: they were protected subjects. They could practice their religion. Their own religious leaders ran their marriages, inheritances, schools, charity and family courts, and answered to the state for their community's taxes and good behavior. That is <span class="kt">accommodation</span>: making room for a group's differences. For the state, it was also cheap. It did not have to build courts and schools for every faith; it let each community run its own and collected a tax.` },
            { p: `You may read that this was called the <span class="kt">millet</span> system. Use the word carefully. The tidy picture of a few neatly separated communities, each under one official chief, is mostly a nineteenth-century arrangement read backward into earlier centuries. Between 1450 and 1750 the arrangements were looser and were made community by community and city by city.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Ottomans gave everyone equal rights. Christians and Jews paid a special tax, the <b>jizya</b>; in an Islamic court their word counted for less against a Muslim's; they could not freely build new churches or synagogues; and the top jobs in the army and government went to Muslims. The devshirme of Topic 3.2 took Christian boys, converted them and trained them for the sultan's service, so a Christian family's son could rise to the top only by leaving his family's religion. The arrangement was room for difference, not equality.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `What did the state want? <em>For any case of welcoming or pushing out a group, name what the state gained. Spain and Portugal gained one religion in each kingdom. The Ottomans gained merchants, craftsmen and taxpayers, and a cheap way to govern many faiths.</em>`,
        limit: `Accommodation was not equality. Muslims stayed on top in the Ottoman Empire, and that did not change.`,
        comparison: `Against <em>Spain in 1492</em>: both states ruled people of more than one religion. What decided their choices, and what did each give up?`
      },
      terms: [
        ['Accommodation', 'A state making room for a group\'s religious or ethnic differences, usually because the state gains from it.'],
        ['Suppression', 'A state pushing out, forcibly converting, or holding down a group because of its religion or ethnicity.'],
        ['Protected subjects', 'Christians and Jews under Islamic rule: free to practice their religion, but paying the jizya and living with limits.'],
        ['Jizya', 'A special tax paid by non-Muslim subjects in Muslim states.'],
        ['Millet', 'A later name for Ottoman communities governed through their own religious leaders; the tidy empire-wide system is mostly a nineteenth-century arrangement.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'depends',
      num: '02',
      accent: 'iron',
      name: 'It Depends: Which Ruler, Which Class',
      navLabel: 'Ruler and class',
      dates: '1556 to 1700s &nbsp;·&nbsp; Mughal India and the Ottoman Empire',
      thesis: `Two things could change how an empire treated a group. One was the ruler: a policy one emperor made, the next could unmake. The other was class: inside a single empire, a group's members could live very different lives depending on how rich and powerful their families were.`,
      parts: [
        {
          heading: 'Akbar and Aurangzeb',
          blocks: [
            { p: `The Mughal emperors were Muslims ruling a land where most people were Hindu. <span class="kt">Akbar</span>, who ruled from <span class="num">1556</span> to <span class="num">1605</span>, made room for Hindus on purpose. In <span class="num">1564</span> he ended the jizya. He married daughters of the <span class="kt">Rajputs</span>, the Hindu warrior kings of northwestern India, beginning with a princess of Amber in <span class="num">1562</span>, and he made Rajput princes some of the highest-ranking commanders and officials in his empire. Man Singh of Amber reached the highest rank open to anyone outside the emperor's own family.` },
            { p: `Akbar was not only being generous. He needed Rajput armies and the loyalty of the Hindu majority, and he got both. This is the College Board's "utilize the ... military contributions" of a group as much as "accommodate."` },
            { p: `A century later his great-grandson <span class="kt">Aurangzeb</span> brought the jizya back, in <span class="num">1679</span>, and leaned on a stricter reading of Islamic law at court. Yet he still employed many Hindu officers and nobles. Same empire, same groups, a different policy. A ruler's welcome was a choice, and the next ruler could take it back.` }
          ]
        },
        {
          heading: 'Ottoman women, by class',
          blocks: [
            { p: `The College Board names "the varying status of different classes of women within the Ottoman Empire." The key word is varying.` },
            { p: `At the very top, women of the sultan's family held real power. Hürrem began as an enslaved woman in the palace and became the wife of Sultan Suleiman. She paid for a mosque complex in Istanbul, designed by the architect Sinan, with a school, a soup kitchen for the poor and, by <span class="num">1551</span>, a hospital. In the next century Kösem ruled as regent for her young sons and then her grandson, for years at a time between <span class="num">1623</span> and <span class="num">1651</span>, when she was killed in a struggle at the palace.` },
            { p: `In the towns, ordinary Muslim women owned property and went to the Islamic court to claim inheritances, debts and dowries, and to settle divorces. In one Anatolian city in the early 1600s, women took part in about four in ten of the property transactions recorded in its court. But the law still treated them unequally: a daughter inherited half what a son did, and a woman's word in court counted for less than a man's.` },
            { p: `And many women were enslaved, as servants and concubines in wealthy households, with almost no say over their own lives. In one painting in this lesson, a wealthy mother receives guests in her bedroom while an enslaved woman prepares drinks in the corner: three classes of women in one room.` }
          ]
        }
      ],
      useThis: {
        tool: `Which ruler, and which members of the group? <em>Before you say what an empire did to a group, check the date (which ruler?) and the class (which members?). The answer can change with either.</em>`,
        limit: `Even at the top, a woman's power ran through a man: Hürrem as a sultan's wife, Kösem as a sultan's mother. The law that gave daughters half a share did not change.`,
        comparison: `Against <em>section 01</em>: the Ottomans and Akbar both made room for people of another religion. What did each state gain, and how secure was the arrangement?`
      },
      terms: [
        ['Akbar', 'Mughal emperor, ruled 1556 to 1605; ended the jizya in 1564 and brought Hindu Rajput princes into his top ranks.'],
        ['Rajputs', 'Hindu warrior kings of northwestern India, many of whom became Mughal commanders and allies.'],
        ['Aurangzeb', 'Mughal emperor, ruled 1658 to 1707; brought back the jizya in 1679.'],
        ['Regent', 'Someone who rules for a ruler who is too young or unable to rule, as Kösem did for her sons and grandson.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'qing',
      num: '03',
      accent: 'rust',
      name: 'A New Elite in China',
      navLabel: 'The Qing',
      dates: '1644 to 1700s &nbsp;·&nbsp; The Qing dynasty',
      thesis: `The Manchus who conquered China in 1644 were a small minority ruling a huge Han Chinese majority. Their whole social policy follows from that: govern through the Chinese system, put a new elite on top, and keep the majority from either rebelling or swallowing the rulers.`,
      parts: [
        {
          heading: 'What the Qing kept',
          blocks: [
            { p: `The Manchus came from north of the Great Wall. In <span class="num">1644</span>, after rebels had captured Beijing and the last Ming emperor had killed himself, the Manchus took the city and founded the <span class="kt">Qing dynasty</span>.` },
            { p: `They did not try to make China Manchu. They kept the Ming way of governing: the civil service examinations, the Confucian bureaucracy, and the law codes. Han Chinese scholars still passed the exams and filled most government jobs, because no small conquest group could run China any other way. Emperors such as Kangxi presented themselves as model Confucian rulers. That is the continuity.` }
          ]
        },
        {
          heading: 'What the Qing changed',
          blocks: [
            { p: `At the top they built a new elite: the <span class="kt">banners</span>. These were hereditary military units of Manchus, of Mongols, and of Han Chinese families who had joined the Manchus before the conquest; in fact, Han bannermen outnumbered Manchus inside the banners at first. Bannermen were paid by the state, received grain and housing, lived in walled quarters inside Beijing and other major cities, and had legal privileges that ordinary Han Chinese did not. A new political and military elite had been made by conquest.` },
            { p: `They also <span class="kt">restricted</span> the Han majority. In July <span class="num">1645</span> every Han man was ordered to shave the front of his head and wear his hair in the Manchu braid, the <span class="kt">queue</span>, on pain of death. Many Han resisted, because in Confucian teaching the body, hair included, was a gift from one's parents. Many top posts in the capital went to two officials, one Manchu and one Han, so that the Manchu could watch the Han. And from about <span class="num">1648</span> a long line of ditches and willow fences, the Willow Palisade, kept Han farmers out of the Manchu homeland in the northeast.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Qing banned all marriage between Manchus and Han. The rules changed over time: an early decree allowed some such marriages, and later rules restricted them. Say instead what is clear: the Qing kept the banners separate and privileged, and made the Han wear the queue.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A minority on top. <em>The Qing used the Chinese system to govern, built a new elite of bannermen above it, and restricted the Han majority so the rulers would not be overthrown or absorbed.</em>`,
        limit: `Separation slowed the Manchus' absorption into Chinese life but did not stop it: over the next century many bannermen came to speak Chinese rather than Manchu.`,
        comparison: `Against <em>the Ottomans</em> in section 01: both empires ruled people unlike their rulers and did not try to make everyone the same. Who was the majority in each, and how did that shape the policy?`
      },
      terms: [
        ['Qing dynasty', 'The Manchu dynasty that ruled China from 1644 to 1912.'],
        ['Banners', 'Hereditary military units of Manchus, Mongols and early Han allies, paid and privileged by the Qing state.'],
        ['Queue', 'The Manchu hairstyle, shaved forehead and long braid, that Han men had to wear from 1645.'],
        ['Dual appointment', 'The Qing practice of giving many top posts to one Manchu and one Han official together.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'casta',
      num: '04',
      accent: 'oxide',
      name: 'A New Top in the Americas',
      navLabel: 'Casta',
      dates: '1500s to 1700s &nbsp;·&nbsp; Spanish America',
      thesis: `Conquest in the Americas threw together Spaniards, Indigenous peoples and Africans, and their children. Spanish colonial society ranked them by birthplace and ancestry, and put a new elite on top. Historians call the ranking the <span class="kt">casta</span> system.`,
      parts: [
        {
          heading: 'The ranking',
          blocks: [
            { p: `At the top were <span class="kt">peninsulares</span>, people born in Spain. The viceroys who ruled New Spain and Peru for the king were almost always Spanish-born, and Spanish-born men held many of the highest posts in the government and the Church. This was a new political elite, made by conquest.` },
            { p: `Next came <span class="kt">creoles</span>, people of Spanish ancestry born in the Americas. Silver mines, great estates and trade, the new global economy of Topics 4.4 and 4.5, made many creole families very rich: a new economic elite. They resented the newcomers from Spain who got the highest jobs, a resentment that would matter a great deal later.` },
            { p: `Below them came people of mixed ancestry, such as <span class="kt">mestizos</span> (Spanish and Indigenous) and mulattos (Spanish and African). Indigenous people lived under their own town governments and paid tribute to the crown. People of African ancestry were at the bottom: some were free, and many were enslaved. Even enslaved people had some standing in Spanish law: they could marry, go to court, and sometimes buy their freedom.` }
          ]
        },
        {
          heading: 'The paintings and the records',
          blocks: [
            { p: `In the 1700s, artists in Mexico painted sets of <span class="kt">casta paintings</span>. Each painting showed a father, a mother and their child, with a label naming each person's category, such as "From a Spaniard and an Indian woman comes a mestizo." Some of the earliest known sets were painted around <span class="num">1715</span> by Juan Rodríguez Juárez; most are from later in the century. Many were made for viewers in Spain.` },
            { p: `The paintings make colonial society look like a neat chart. Real life was messier. Most of the many labels in the paintings do not appear in official records; the census used only a few broad groups. Parish priests often wrote a category into a baptism record, but how a person was described could change from one record to the next, with their wealth, their job, their clothes, their family's reputation and the company they kept. A prosperous mestizo might be recorded as Spanish; a poor creole might not be treated as one.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Historians compare the paintings with parish registers, censuses, court cases and petitions. When the same person appears under different labels in different records, that tells us categories could be argued over and could change. When a guild, a school or a religious order turned someone away because of ancestry, that tells us the categories still had real consequences. Both are true at once.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A new top, ranked by birth. <em>Conquest made Spanish-born officials a political elite and new trade made creoles an economic one, and ancestry and birthplace decided who could reach the very top.</em>`,
        limit: `The ranking bent in daily life: wealth and reputation could move how a person was recorded, so the paintings show an ideal, not a census.`,
        comparison: `Against <em>the Qing banners</em> in section 03: both new elites were made by conquest. How was each kept apart from the people below it?`
      },
      terms: [
        ['Casta', 'The ranking of people in Spanish America by birthplace and ancestry.'],
        ['Peninsulares', 'People born in Spain, who held the highest offices in Spanish America.'],
        ['Creoles', 'People of Spanish ancestry born in the Americas; often rich, and kept from the very highest offices.'],
        ['Mestizos', 'People of mixed Spanish and Indigenous ancestry.'],
        ['Casta painting', 'A painting, mostly from the 1700s, showing a family and labeling each person\'s category; an ideal picture, not a record.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'old',
      num: '05',
      accent: 'gold',
      name: 'Old Elites Squeezed',
      navLabel: 'Old elites',
      dates: '1500s to 1722 &nbsp;·&nbsp; Ottomans, Russia, France, England',
      thesis: `As rulers grew stronger and centralized power, the old elites who had shared it were squeezed: the Ottoman cavalry, the Russian boyars, the French nobles. But they rarely disappeared, they often kept their privileges, and in England they won.`,
      parts: [
        {
          heading: 'The Ottoman cavalry and their timars',
          blocks: [
            { p: `For centuries the core of the Ottoman army was the sipahi, a cavalryman who held a <span class="kt">timar</span>: the right to collect the taxes from a piece of land, in return for riding to war when the sultan called and bringing armed men with him. A timar was not the holder's property, and it was not supposed to pass automatically to his son.` },
            { p: `From the late 1500s, wars were won more and more by infantry with guns, paid in cash, like the Janissaries of Topic 3.1. The sultan needed money more than he needed horsemen. So the state turned more and more timar land into <span class="kt">tax farms</span>: the right to collect a district's taxes, sold to whoever offered the treasury the most. From <span class="num">1695</span> the state began selling these rights for life. The sipahis faded. Tax farmers and powerful provincial families, who grew rich and influential collecting taxes, rose in their place. Historians no longer call this simply the empire's "decline": the state changed shape and kept going.` }
          ]
        },
        {
          heading: 'The Russian boyars',
          blocks: [
            { p: `The <span class="kt">boyars</span> were Russia's great noble families. They sat on the tsar's council, the Boyar Duma, and competed for posts by the rank of their families. Earlier tsars had already curbed them: Ivan IV seized boyar lands and killed many boyars in the years of terror called the oprichnina, from 1565 to 1572. In <span class="num">1682</span> the old system of seats by family rank was ended.` },
            { p: `Peter the Great went further. He replaced the boyar council with a Senate he appointed, in <span class="num">1711</span>. He ordered nobles and officials to shave their beards and dress like western Europeans, and taxed those who would not. He made every nobleman serve the state, in the army or the government, for life. And in <span class="num">1722</span> his <span class="kt">Table of Ranks</span> set out fourteen ranks of service in the army, the government and the court. A man's place depended on the rank he earned, and a commoner who rose high enough became a noble.` },
            { p: `The title "boyar" faded away. The nobles did not. They kept their estates and their power over their serfs, which the Law Code of 1649 (Topic 4.6) had tightened. They lost their independence and kept their privilege.` }
          ]
        },
        {
          heading: 'French nobles at court, and the English exception',
          blocks: [
            { p: `In France, Louis XIV had seen the Fronde as a boy (Topic 4.6). As king he centralized power. He relied on royal officials, the intendants, to run the provinces, and in <span class="num">1682</span> he moved his court and government to his palace at Versailles, where great nobles spent their days near him, competing for offices, pensions and his favor, instead of raising armies at home. The French <span class="kt">nobility</span> kept their titles, their land and their freedom from the main tax, the taille. What they lost was the power to defy the king.` },
            { p: `But the power of old elites could rise as well as fall. In England in <span class="num">1688</span>, a group of leading nobles and a bishop invited William of Orange to bring an army. King James II fled. Parliament, a body of landowning nobles and gentry, gave the crown to William and Mary and, in the Bill of Rights of <span class="num">1689</span>, set limits on the monarchs who came after them. There the old elite won.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that old elites disappeared. The College Board's word is <b>fluctuated</b>: their power went up and down. The Ottoman sipahis faded, but tax farmers and provincial families rose. Russian and French nobles lost independence and kept privilege. English nobles and gentry gained power over the crown. Name what each lost, and what each kept or gained.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `What did the ruler need? <em>An old elite lost ground when a stronger ruler no longer needed what it offered (cavalry, advice, private armies) and could get it another way (cash, officials, a court).</em>`,
        limit: `Squeezed is not erased. Most old elites kept land and privilege, and in England they gained power.`,
        comparison: `Against <em>Busbecq's claim</em> in the Skill Builder: he wrote that in Europe "birth is the standard for everything." Which evidence in this section supports that, and which modifies it?`
      },
      terms: [
        ['Sipahi', 'An Ottoman cavalryman who held a timar.'],
        ['Timar', 'The right to collect the taxes of a piece of land, granted to a sipahi in return for military service.'],
        ['Tax farm', 'The right to collect a district\'s taxes, sold for cash; Ottoman tax farms were sold for life from 1695.'],
        ['Boyars', 'Russia\'s great noble families, who sat on the tsar\'s council until Peter the Great replaced it.'],
        ['Table of Ranks', 'Peter the Great\'s list of fourteen ranks of service, 1722; rank earned, not birth, decided a man\'s place.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'What stayed, what changed',
    intro: `Each card gathers the evidence for one part of the topic. Sorting it into what stayed the same and what changed, and explaining why, is your job; the checkpoints ask you to.`,
    pairs: [
      {
        category: 'Who could belong',
        title: 'Pushed out, taken in',
        body: `Spain ordered Jews to convert or leave in 1492, and Portugal forced most to be baptized in 1497. Bayezid II let the refugees settle in Istanbul and Salonica. The Ottomans let Christians and Jews practice their religion and run their own family law through their own leaders, in return for the jizya and with limits on their rights.`
      },
      {
        category: 'Who could belong',
        title: 'A ruler\'s choice, a woman\'s class',
        body: `Akbar ended the jizya in 1564 and made Rajput princes top commanders; Aurangzeb brought the jizya back in 1679. Hürrem and Kösem held power at the top of the Ottoman palace; townswomen went to court over property and inheritance; enslaved women served in wealthy households.`
      },
      {
        category: 'New elites',
        title: 'The banners and the queue',
        body: `The Manchus took Beijing in 1644, kept the exams and the Confucian officials, and put the banners on top. Han men had to wear the queue from 1645, many top posts were shared between a Manchu and a Han official, and the Willow Palisade kept Han farmers out of the northeast.`
      },
      {
        category: 'New elites',
        title: 'The casta ranking',
        body: `In Spanish America, Spanish-born peninsulares held the highest offices and rich creoles formed an economic elite, above people of mixed ancestry, Indigenous people and people of African ancestry. Casta paintings showed the ranking as a neat chart; colonial records show categories that could be argued over and changed.`
      },
      {
        category: 'Old elites',
        title: 'Squeezed, and once winning',
        body: `Ottoman timars became tax farms, sold for life from 1695. Peter the Great replaced the boyar council with a Senate in 1711 and set the Table of Ranks in 1722. Louis XIV moved his court to Versailles in 1682. In England, nobles and Parliament limited the crown in 1688 and 1689.`
      }
    ]
  }
};
