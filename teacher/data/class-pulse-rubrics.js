/* Class Pulse rubrics: what puts a checkpoint answer at each level, criterion by
 * criterion. The teacher labeling a calibration set and the model reading student
 * work are given the same text, so a disagreement between them is about the answer
 * and not about two private standards.
 *
 * Two layers:
 *   LEVELS and RULES apply to every criterion in the course.
 *   TOPICS[topic][checkpoint] gives, for each checkpoint criterion in order, what each
 *   level looks like in an actual answer. `criterion` repeats the criterion's exact
 *   wording from assets/data/skills-map.js; the engine refuses a rubric whose wording
 *   no longer matches, so an edited checkpoint cannot silently keep an old rubric.
 *
 * The standard is Jeff's, set on 2026-10-29 from his first calibration labels:
 *   - naming the right thing without explaining it is Not yet;
 *   - Demonstrating needs the course's key term, not only a description of it;
 *   - each technology, example or person has to come with what it did;
 *   - an answer that sits between two levels takes the lower one.
 *
 * Topic 2.3 is a DRAFT. Unit 2 of the College Board CED is not yet transcribed into
 * scripts/lib/ced-source/, so its descriptors rest on the checkpoint criteria, the
 * learning targets and docs/UNIT-2-CED-AUDIT.md, which are copies. Check them against
 * the CED before treating them as final. Topics without an entry here are read from
 * LEVELS, RULES and their criteria alone.
 *
 * Topics 3.1 to 3.4 (added 2026-10-29) are drafted from scripts/lib/ced-source/unit-3.js,
 * the CED itself: what Demonstrating requires is the Key Concept content each criterion
 * asks for, and the CED's illustrative examples appear only as examples, never as the
 * only accepted answer. One conflict between a checkpoint and the CED is recorded where
 * it applies (3.1 Checkpoint 2, criterion 2).
 *
 * Where a criterion asks only to name or identify (a system and its empire, a ruler and
 * his building, a rivalry and its states), the accurate pairing is what it asks for. Where
 * it asks for a change, a reform or a detail, the name has to come with what it did.
 *
 * VERSION changes when LEVELS or RULES change, because every earlier label then needs a
 * re-check. When one topic's descriptors change, raise that topic's `revision` instead
 * (a topic without one is revision 1): the engine adds it to that topic's rubric version,
 * so only that topic's labels and readings go back for a re-check. Adding a topic's first
 * descriptors changes neither. `changes` lists, in plain words, what each revision changed
 * and why, for the calibration page to show. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHClassPulseRubrics = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const VERSION = '2026-10-29-draft-1';

  const LEVELS = {
    D: 'Demonstrating: the answer does everything this criterion asks, accurately and specifically, using the course\'s key term for the idea. Where the criterion asks to explain or connect, it says how or why, not just that.',
    P: 'Partly there: the answer goes beyond naming but falls short: it explains part of what the criterion asks, explains it accurately without the key term, or makes the connection only in general terms.',
    N: 'Not yet: the part is missing, only names the right thing without explaining it, lists without saying what each did, repeats the prompt, is off topic, or its main claim is historically wrong.',
    U: 'Can\'t tell: the level cannot be judged fairly because the student says it is unfinished, the answer contradicts itself on this point, or it cannot be read. Never for an answer that is simply weak or wrong; that is Not yet.'
  };

  const RULES = [
    'Judge each criterion on its own. One answer can be Demonstrating on one criterion and Not yet on another; do not let the whole answer\'s impression decide every criterion.',
    'Naming the right thing without explaining it is Not yet, not Partly there.',
    'Demonstrating needs the course\'s key term (for example monsoon, compass, astrolabe). An accurate description without the term earns at most Partly there. Spelling of the term never matters.',
    'Each technology, example or person the criterion asks for has to come with what it did. A bare list is Not yet.',
    'Spelling, grammar and sentence style never lower a level.',
    'Accept any historically accurate example, not only the ones the lesson used.',
    'A wrong claim lowers only the criterion it belongs to.',
    'Length is not evidence: a long answer that never does what the criterion asks is Not yet; a short one that does it fully is Demonstrating.',
    'When an answer sits between two levels, choose the lower one and say why in the reason.'
  ];

  // Clarifications for Topics 3.1 to 3.4, from the first cross-check round (2026-10-30).
  // Most disagreements between the three readers came from these five questions, not
  // from the history: what counts as the key term, when the tie rule applies, unfinished
  // answers, self-corrections, and everyday place names.
  const UNIT3_RULES = [
    'The key term a criterion needs is the term for the thing that criterion asks about: the weapon, the system, the religious group, the building, the method. Terms in a descriptor\'s examples are illustrations, not requirements, and a key term missing from one criterion never lowers another.',
    'Take the lower level only when the descriptors of both levels fit the answer equally well. An answer that matches one level\'s descriptor gets that level, even when it is brief.',
    'When a student says the answer is unfinished, judge each criterion the written part already completes. Use Can\'t tell only for criteria the unfinished part would have covered, or that stop mid-sentence.',
    'When a student corrects a mistake in the same answer, judge the corrected statement.',
    'An accurate everyday or modern name for a place counts (Turkey for Anatolia, Japan for Tokugawa Japan, Iran for Safavid Persia), as long as the criterion\'s pairing is right. Naming the states in a rivalry still needs the states themselves.'
  ];
  const UNIT3_CHANGE = 'After the first cross-check round: five clarifications every Unit 3 topic now follows (what counts as the key term, when a tie goes to the lower level, unfinished answers, self-corrections, everyday place names), because most disagreements between the three readers came from those questions rather than from the history.';

  const TOPICS = {
    '2.3': {
      status: 'draft',
      cp1: [
        {
          criterion: 'Explain the environmental factor.',
          D: 'Names the monsoon winds and explains their seasonal pattern and how merchants used it: the winds reverse direction with the seasons, so voyages could be timed out and back.',
          P: 'Explains only part of it (the seasonal pattern, or timing trips, but not both), or explains it accurately without naming the monsoons (for example, "seasonal winds let sailors plan both trips").',
          N: 'Names the monsoons or "winds" without explaining them, gives no environmental factor, or gets it wrong (for example, that the monsoons never change direction).'
        },
        {
          criterion: 'Use two technologies.',
          D: 'Names two accurate maritime technologies by their key terms and says what each did: the compass showed direction; the astrolabe measured latitude; larger ships carried more cargo; or another accurate maritime technology with its use.',
          P: 'Names two but says what only one did, names one technology and says what it did, or describes a device accurately without its name (for example, "a magnetic needle showed direction").',
          N: 'Lists technologies without saying what they did, names one without its use, names something that is not a maritime technology (for example gunpowder or paper money), or describes what it did wrongly.'
        },
        {
          criterion: 'Connect both to increased volume or geographic range of exchange.',
          D: 'Connects both the monsoon knowledge and the technologies, each explicitly, to trade itself growing: more goods exchanged, or exchange reaching farther.',
          P: 'Connects only one of the two to trade growing, or connects them only to voyages becoming safer, longer or more dependable without saying that trade grew.',
          N: 'Makes no connection to trade growing, only says they "helped trade", or makes a connection that is historically wrong.'
        }
      ],
      cp2: [
        {
          criterion: 'Use one state-growth example.',
          D: 'Names a trading city or state and explains how trade made it richer or more powerful (for example, Kilwa grew wealthy from taxes on port trade; Malacca controlled the strait and collected revenue; Gujarat\'s ports prospered from the textile trade). Swahili city-states, Gujarat, Malacca or another accurate Indian Ocean example.',
          P: 'Names an accurate trading city or state and says it grew or got rich, without how trade did it.',
          N: 'Names a place only, gives no state example, or gives a wrong one.'
        },
        {
          criterion: 'Use one diaspora or Zheng He example.',
          D: 'Names a specific merchant community, where it settled and what followed (for example, Arab and Persian merchants on the East African coast mixing traditions with local people; Chinese merchants in Southeast Asian ports; Malay communities around the Indian Ocean), or identifies Zheng He as the Ming admiral whose voyages reached Indian Ocean ports and says what they did.',
          P: 'Names the community or Zheng He with one accurate detail but leaves out who, where or what followed (for example, "Zheng He sailed the Indian Ocean").',
          N: 'Names only ("Zheng He."), gives neither, or gets it wrong (for example, Zheng He as a ruler of Malacca or an Ottoman or Mongol figure).'
        },
        {
          criterion: 'Explain how trade growth produced the effect.',
          D: 'For both effects the prompt asks for, explains how growing trade produced each one.',
          P: 'Explains how trade produced one effect but not the other, or both only in general terms.',
          N: 'Does not explain how trade produced either effect, or explains it wrongly (for example, that trade made every culture the same).'
        }
      ]
    },

    // CED p. 69. KC-4.3.II: gunpowder, cannons and armed trade built large empires;
    // KC-4.3.II.B: the land empires; KC-4.3.III.i: political and religious disputes led
    // to rivalries between states.
    '3.1': {
      status: 'draft',
      revision: 2,
      rules: UNIT3_RULES,
      changes: [{ date: '2026-10-30', text: UNIT3_CHANGE }, { date: '2026-10-30', text: 'Checkpoint 1: any accurate, specific change in fighting counts for criterion 1 (guns panicking war elephants, quickly trained musketeers replacing archers), and criterion 3 can show why the advantage decided the outcome through what happened. An answer that lists an empire, a weapon and a region it took is Partly there on criterion 2.' }],
      cp1: [
        {
          criterion: 'Name at least one specific gunpowder weapon and explain how it changed warfare.',
          D: 'Names a gunpowder weapon by its key term (cannon, musket or another firearm) and explains how it changed fighting: for example, cannons could break stone walls that once held out for months, muskets let quickly trained infantry kill armored or mounted fighters from a distance, or ordinary recruits could be trained quickly instead of skilled archers, or gunfire panicked war elephants. Any accurate, specific change counts.',
          P: 'Names a gunpowder weapon but says it changed warfare only in general terms ("made armies stronger", "more deadly"), or explains the change accurately without naming the weapon (for example, "metal tubes that fired iron balls broke down walls").',
          N: 'Names "gunpowder" or a weapon without explaining any change, names something that is not a gunpowder weapon (swords, crossbows, war elephants), or explains the change wrongly.'
        },
        {
          criterion: 'Connect the military technology to territorial expansion by at least one empire.',
          D: 'Names an empire and a specific place or region it took, and says how gunpowder weapons helped take it: for example, Ottoman cannons breaching the walls of Constantinople in 1453; Babur\'s cannons and muskets at Panipat in 1526 opening northern India to the Mughals; Ottoman guns at Chaldiran in 1514 and the eastern Anatolia that followed; Qing guns against the Zunghar Mongols in Central Asia.',
          P: 'Names an empire and says it used gunpowder to expand without a specific place or event, or names a specific conquest without saying how gunpowder helped. This includes an answer that only lists an empire, a gunpowder weapon and a region it took ("Mughals, cannons, conquered India").',
          N: 'Names no empire, names an empire with no link to gunpowder or expansion, or pairs them wrongly (for example, the Mughals taking Constantinople).'
        },
        {
          criterion: 'Explain what advantage gunpowder weapons gave empires over their opponents.',
          D: 'Explains a specific advantage over a kind of opponent and why it decided the outcome: for example, walled cities and castles could no longer hold out against cannons; trained musket infantry and artillery beat cavalry armies or war elephants (at Panipat the panicked elephants broke the Lodi army); only large, rich states could afford cannons and gunners, so smaller rivals fell behind. Why it decided the outcome can be shown by what happened ("walls that had held for centuries fell in days").',
          P: 'States an advantage without saying against whom or why it mattered (for example, "they could shoot from far away"), or names the opponent without the advantage.',
          N: 'Gives no advantage beyond "they had guns" or "it helped them", or states one wrongly (for example, that opponents had no guns at all when they did, or that gunpowder made an empire unbeatable everywhere).'
        }
      ],
      // The prompt calls the Safavid and Mughal conflict and Songhai's conflict with Morocco
      // the rivalries "the College Board names", but the CED lists them as illustrative
      // examples, which it says are not required. The required content, KC-4.3.III.i, is
      // that political and religious disputes led to rivalries between states. So, by Jeff's
      // decision of 2026-10-29, criterion 2 accepts any accurate rivalry between states from
      // 1450 to 1750, the CED's examples included, and the prompt's wording is unchanged.
      cp2: [
        {
          criterion: 'Name at least two land-based empires and describe specific regions they conquered.',
          D: 'Names two land-based empires and, for each, an accurate specific region it conquered or expanded into: for example, Ottomans into Anatolia, the Balkans, Constantinople, Egypt or North Africa; Mughals across northern India and most of the subcontinent; Safavids over Persia (Iran); Qing (Manchu) over China, Mongolia, Tibet or Xinjiang; Songhai along the Niger (Gao, Timbuktu); Russia across Siberia.',
          P: 'Names two empires but gives a region for only one, or one empire with its region.',
          N: 'Names empires without any region, gives regions that are wrong (for example, the Mughals conquering Egypt), or names a sea-based empire as a land-based one.'
        },
        {
          criterion: 'Name one CED state rivalry and identify the states involved.',
          D: 'Names an accurate rivalry between states from 1450 to 1750 and identifies both states. The CED\'s examples (the Safavid and Mughal conflict, Songhai\'s conflict with Morocco) and the Ottoman and Safavid rivalry are the usual choices, and any other accurate rivalry counts the same (for example, the Ottomans and the Habsburgs). This criterion asks for identification, so the accurate pairing is enough.',
          P: 'Names a rivalry with only one of its states correctly identified, or describes an accurate rivalry without naming the states (for example, "the Persian empire and the Indian empire").',
          N: 'Names no rivalry, gets the states wrong (for example, Songhai against the Ottomans), names two states that were not rivals (for example, the Ottomans and the Mughals), or names a rivalry from outside 1450 to 1750.'
        },
        {
          criterion: 'Explain how a political or religious dispute helped produce or intensify the conflict.',
          D: 'Names a specific political or religious dispute and explains how it produced or intensified the conflict: for example, the Safavids and Mughals both claimed Kandahar, a border city on the trade route between Persia and India, and it changed hands several times; Morocco\'s sultan claimed authority over Songhai and its gold and salt trade, and invaded when Songhai refused (Tondibi, 1591); Sunni Ottomans and Shi\'a Safavids each saw the other as a religious and political threat.',
          P: 'Names a specific dispute (Kandahar, Sunni against Shi\'a, Songhai\'s gold and salt) and says it caused fighting without explaining how.',
          N: 'Gives only a general reason with no specific dispute ("they had different religions so they fought", "because of disputes"), explains why one side won instead of why they fought, or states the dispute wrongly (for example, that Songhai was Christian).'
        }
      ]
    },

    // CED p. 70. KC-4.3.I.C: bureaucratic elites and military professionals; KC-4.3.I.A:
    // religious ideas, art and monumental architecture; KC-4.3.I.D: tribute, tax farming
    // and new tax-collection systems. Reasoning process: Comparison.
    '3.2': {
      status: 'draft',
      revision: 2,
      rules: UNIT3_RULES,
      changes: [{ date: '2026-10-30', text: UNIT3_CHANGE }, { date: '2026-10-30', text: 'Checkpoint 1: Japan counts for Tokugawa Japan, and on criterion 2 the systems\' own names are the key terms; jagir and stipend are examples, not requirements.' }],
      cp1: [
        {
          criterion: 'Name both systems and the empire each belonged to.',
          D: 'Names the mansabdar system with the Mughal Empire, and either the devshirme with the Ottoman Empire or salaried samurai with Tokugawa Japan ("Japan" counts). This criterion asks for identification, so the accurate pairings are enough.',
          P: 'Names both systems with the empire for only one, or describes both systems accurately without their names.',
          N: 'Names only one system, puts a system in the wrong empire, or names neither.'
        },
        {
          criterion: 'Give one similarity and one difference in how each made officials or soldiers depend on the ruler.',
          D: 'Gives one accurate similarity and one accurate difference, each about dependence on the ruler, using the systems\' terms (the systems\' own names are enough; jagir and stipend are examples, not requirements): for example, both held rank or pay that came from the ruler and could be taken away rather than inherited land; devshirme boys were taken from Christian families, converted and owned nothing but the sultan\'s favor, while mansabdars were often already powerful nobles, including Hindu Rajputs, given ranks and land revenue (jagirs) that were moved and not passed down; samurai were a hereditary class living on stipends.',
          P: 'Gives a similarity or a difference about dependence but not both, gives both where one is not about dependence (for example, only that they were in different places), or gives both accurately without the systems\' terms.',
          N: 'Gives neither, gives only "both were loyal" or "both were strong", or gets the systems wrong (for example, that devshirme recruits volunteered, or that mansabdars were enslaved).'
        },
        {
          criterion: 'Explain why they differed by describing each ruler\'s situation.',
          D: 'Describes each ruler\'s situation and connects it to the difference: for example, Ottoman sultans wanted servants with no ties to the old Turkish noble families; Akbar ruled a mostly Hindu population and needed powerful Rajput and other noble families on his side; the Tokugawa shoguns came out of a long civil war and wanted samurai on salaries, off the land and unable to raise private armies.',
          P: 'Describes one ruler\'s situation, or describes both without connecting them to the difference.',
          N: 'Describes no situation, gives only a general reason ("different rulers", "different religions", "different places"), or describes a situation wrongly.'
        }
      ],
      cp2: [
        {
          criterion: 'Name one religious idea, work of art, or building and the ruler who used it.',
          D: 'Names a specific religious idea, work of art or building with the ruler who used it: for example, divine right or Versailles with Louis XIV; the Taj Mahal with Shah Jahan; the Suleymaniye Mosque with Suleiman; imperial portraits with a Qing emperor; the sun temple of Cuzco with the Sapa Inca; Askia Muhammad\'s promotion of Islam in Songhai. This criterion asks for identification, so the accurate pairing is enough.',
          P: 'Names a specific item without its ruler (for example, "the palace of Versailles"), names an empire or kind of ruler instead of the ruler ("Mughal emperors built mosques", "Chinese emperors"), or names a ruler with only a general kind of building.',
          N: 'Names nothing specific ("kings used religion"), or pairs an item with the wrong ruler or empire (for example, the Taj Mahal with the Ottomans).'
        },
        {
          criterion: 'Name one tribute or tax system and the empire that used it.',
          D: 'Names a specific tribute or tax system by its term with the empire that used it: for example, Ottoman tax farming; Mughal zamindar tax collection; Mexica tribute lists; Ming taxes collected in silver; the Inca mit\'a labor tax. This criterion asks for identification, so the accurate pairing is enough.',
          P: 'Names a system without its empire, or describes a system and its empire accurately without the system\'s term (for example, "the Ottomans sold the right to collect taxes").',
          N: 'Names no specific system ("the king made everyone pay", "the Ottomans had taxes"), or gets it wrong (for example, zamindars as army generals, or the devshirme as a tax).'
        },
        {
          criterion: 'For each, describe the context, the ruler\'s situation, and explain how the method strengthened his power.',
          D: 'For both methods, describes the ruler\'s situation and explains how the method strengthened him: for example, after the Fronde revolts Louis XIV kept nobles at Versailles where he could watch them; an Ottoman empire at war needed cash quickly, and tax farmers paid up front; a Mughal emperor over a huge empire relied on zamindars for steady land revenue to pay the army; the Mexica took tribute from conquered city-states that resented them, which both enriched Tenochtitlan and showed who ruled.',
          P: 'Does this fully for one method but not the other, or explains how both methods helped without any context, or gives context without how the method helped.',
          N: 'Gives neither context nor how, gives only a general effect ("this made people respect the king"), or explains it wrongly.'
        }
      ]
    },

    // CED p. 71. KC-4.1.VI.i: the Protestant Reformation broke with existing Christian
    // traditions, and both reformations contributed to the growth of Christianity;
    // KC-4.1.VI.ii: Ottoman and Safavid rivalry intensified the Sunni and Shi'a split;
    // KC-4.1.VI.iii: Sikhism developed in a context of Hindu and Muslim interaction.
    // Reasoning process: Continuity and Change.
    '3.3': {
      status: 'draft',
      revision: 2,
      rules: UNIT3_RULES,
      changes: [{ date: '2026-10-30', text: UNIT3_CHANGE }, { date: '2026-10-30', text: 'Checkpoint 2: "made the split worse" is enough to show the split already existed.' }],
      cp1: [
        {
          criterion: 'Name a specific Protestant Reformation change.',
          D: 'Names a specific Protestant change by its key term and says what it changed: for example, Luther\'s 95 Theses (1517) attacked the sale of indulgences and the pope\'s authority; salvation by faith alone; the Bible translated into everyday languages; new Protestant churches (Lutheran, Calvinist, the Church of England) breaking from the Catholic Church.',
          P: 'Names Luther or the Protestants with only a general change ("Luther changed the Church", "he started the Reformation"), or describes a specific change accurately without its key terms (for example, "a monk objected to people paying to have sins forgiven").',
          N: 'Gives only a name ("Martin Luther"), no change, or a wrong one (for example, that Protestants stopped believing in Jesus).'
        },
        {
          criterion: 'Name a specific Catholic reform or response.',
          D: 'Names a specific Catholic reform or response and says what it did: for example, the Council of Trent ended abuses such as selling indulgences while reaffirming Catholic teaching; the Jesuits (Society of Jesus) opened schools and sent missionaries; the Inquisition and the Index of forbidden books pursued and banned Protestant ideas.',
          P: 'Names a reform with only a vague description ("the Council of Trent fixed the Church"), uses only the general label "Counter-Reformation" or "Catholic Reformation" with what it did, or describes a reform accurately without its name (for example, "a big meeting of bishops").',
          N: 'Gives only a bare name ("Council of Trent."), only "the Catholics fought back", or a wrong response (for example, the Crusades).'
        },
        {
          criterion: 'Explain both change within Christianity and continuity in Christianity\'s wider growth or influence.',
          D: 'Explains a change (Western Christianity split into Catholic and Protestant churches, breaking the Church\'s unity) and the continuity (Christianity kept growing or spreading: Protestant churches spread across northern Europe, and Catholic missionaries such as the Jesuits carried Christianity to Asia and the Americas).',
          P: 'Explains the change or the continuity but not both, or states both without explaining either ("things changed but Christianity stayed").',
          N: 'Explains neither, only repeats the prompt\'s words, or says the reformations shrank or ended Christianity.'
        }
      ],
      cp2: [
        {
          criterion: 'Make clear that Ottoman-Safavid rivalry intensified an existing Sunni-Shia division rather than creating it.',
          D: 'Identifies the Ottomans as Sunni and the Safavids as Shi\'a, and makes clear the rivalry deepened or worsened a split that already existed (for example, "an old split over who should lead after Muhammad", "made the existing split worse"; "made the split worse" is enough, because worse means it already existed).',
          P: 'Makes clear the split already existed and grew worse but does not say which empire was which, or says which was which but only that they fought over it.',
          N: 'Says the rivalry created or started the split, reverses the sides (Ottomans as Shi\'a), only repeats the prompt\'s words, or never mentions the split.'
        },
        {
          criterion: 'Use Chaldiran or another specific rivalry detail as evidence.',
          D: 'Uses the Battle of Chaldiran (1514) or another specific detail with what it shows: for example, Ottoman cannons and janissaries defeated Safavid cavalry at Chaldiran and the Ottomans took eastern Anatolia; Selim I persecuted Shi\'a in Anatolia as Safavid supporters; Shah Ismail made Shi\'a Islam the Safavid state religion; the two empires fought for Baghdad and Iraq.',
          P: 'Names Chaldiran with only a vague detail ("a big battle"), or describes a specific detail accurately without its name.',
          N: 'Gives only the bare name, no detail, or a wrong one (for example, that the Safavids won at Chaldiran, or that it was fought against the Mughals).'
        },
        {
          criterion: 'Explain the Hindu-Muslim interaction context of Sikhism while recognizing Sikhism as a distinct religious tradition.',
          D: 'Explains that Guru Nanak founded Sikhism in the Punjab, a region where Hindus and Muslims lived side by side under Muslim rule, that it shares ideas with both, and that it is its own religion (with its own gurus and scripture), not a branch or a blend of the two.',
          P: 'Explains the interaction context but treats Sikhism as a mix of the two, or calls it a separate religion with only a vague context, or gives an accurate account without the names Sikhism or Guru Nanak.',
          N: 'Names Sikhism only, calls it a branch of Islam or Hinduism, places it wrongly, or does not address it.'
        }
      ]
    },

    // CED p. 72: Learning Objective D, compare the methods by which various empires
    // increased their influence, reviewing all of Unit 3. Reasoning process: Comparison.
    // Checkpoint 1 asks for two land-based empires; Checkpoint 2 for "various empires",
    // as the CED does, so a sea-based empire is evidence there.
    '3.4': {
      status: 'draft',
      revision: 2,
      rules: UNIT3_RULES,
      changes: [{ date: '2026-10-30', text: UNIT3_CHANGE }, { date: '2026-10-30', text: 'Checkpoint 1: the shared method can be named in plain words, and naming the kind of influence without how ("so they get more land") is Partly there on criterion 3.' }],
      cp1: [
        {
          criterion: 'Keep one shared comparison category.',
          D: 'Compares both empires on the same method (for example, gunpowder conquest, recruiting officials or soldiers, collecting revenue, or religious or architectural legitimation), names the method (plain words are enough, such as "took people into government who would owe everything to the ruler"), and states the similarity or difference.',
          P: 'Uses the same method for both but never states the similarity or difference, describing each separately, or the method drifts partway through.',
          N: 'Uses a different method for each empire, writes about one empire only, or names no method.'
        },
        {
          criterion: 'Use specific evidence from both empires.',
          D: 'Gives specific, accurate evidence for each empire, by its key term, with what it did: for example, Ottoman cannons at Constantinople in 1453 and Babur\'s guns at Panipat in 1526; Ottoman tax farming and Mughal zamindars; the devshirme and the mansabdar system.',
          P: 'Gives specific evidence for one empire and only general evidence for the other, or specific evidence for both without the key terms or without what it did.',
          N: 'Gives only general statements for both, evidence from one empire only, or evidence that is wrong (for example, the Mughals taking Constantinople).'
        },
        {
          criterion: 'Explain how the method increased territorial, political, economic, or cultural influence.',
          D: 'Explains how the method increased a named kind of influence for both empires: for example, cannons won Constantinople and with it control of trade between Europe and Asia; tax farming and zamindars paid for armies that held and extended territory.',
          P: 'Explains it for one empire only, or says the method increased influence without how, including naming the kind of influence without how ("so they get more land").',
          N: 'Does not explain how influence increased ("both got more powerful"), or explains it wrongly.'
        }
      ],
      cp2: [
        {
          criterion: 'Answer the exact increased-influence question.',
          D: 'Makes a defensible comparison claim about the methods empires used to increase their influence, with both a similarity and a difference or a meaningful qualification, as the prompt asks.',
          P: 'Makes a claim about methods with only a similarity or only a difference, or a claim whose difference is not about method (for example, only that the empires were in different places).',
          N: 'Makes no claim, repeats the prompt, answers a different question (which empire was biggest, why empires fell), or makes a claim that is historically wrong.'
        },
        {
          criterion: 'Use relevant evidence from at least two different empires.',
          D: 'Gives at least two specific, accurate pieces of evidence from at least two different empires, each with what it did.',
          P: 'Gives evidence from two empires with one piece vague or bare (named without what it did), or two specific pieces from a single empire.',
          N: 'Gives only general statements, bare names for both, evidence from one empire only, or evidence that is wrong.'
        },
        {
          criterion: 'Explain how the evidence supports the comparison, not just what each empire did.',
          D: 'Explains how the evidence shows the similarity and the difference or qualification: what the evidence reveals about the methods, not only that each empire did it.',
          P: 'Explains how the evidence supports part of the claim (the similarity or the difference only), or links evidence to the claim only in general terms ("this proves my claim").',
          N: 'Only describes what each empire did, with no link to a comparison.'
        }
      ]
    }
  };

  return { VERSION, LEVELS, RULES, TOPICS };
});
