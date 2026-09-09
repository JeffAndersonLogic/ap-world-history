/*
 * BeHistorical AP Practice Lab, Units 1 and 2
 *
 * This file is loaded after each lesson's renderer config and before the shared
 * renderer. It is the single source of truth for the revised AP Skill Builder,
 * Evidence Lab, and Primary Source modules in Topics 1.1 through 2.7.
 *
 * The sequence follows the AP World History: Modern CED effective fall 2026:
 * each Skill Builder uses the topic's suggested skill and reasoning process;
 * Evidence Labs require selection, corroboration, and explanation; and Primary
 * Source tasks use the discrete identify/describe/explain moves of an AP SAQ.
 */
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson || !lesson.meta) return;

  const skill = (label, title, intro, steps, prompt, criteria) => ({
    label,
    title,
    intro,
    steps,
    prompt,
    criteria
  });

  const evidence = (title, task, prompt, skillLabel, terms, criteria) => ({
    title,
    task,
    prompt,
    skill: skillLabel,
    terms,
    criteria
  });

  const source = (title, intro, text, attribution, sourceNote, questions, responsePrompt, skillLabel, terms, sourceLinks = []) => ({
    title,
    intro,
    text,
    attribution,
    sourceNote,
    questions,
    responsePrompt,
    skill: skillLabel,
    terms,
    sourceLinks
  });

  const PRACTICE = {
    '1.1': {
      skillBuilder: skill(
        'Contextualization (Skill 4.A) and Continuity and Change',
        'Context Before Claim: Situating Song China',
        'Contextualization earns its place only when the broader development helps explain the topic. A list of Tang achievements or Silk Road goods is background, not context, until you connect it to a specific Song development.',
        [
          { label: 'Broaden', text: 'Describe a development before or beyond the Song, such as earlier Confucian statecraft, the Sui-Tang examination tradition, or expanding Afro-Eurasian commerce.' },
          { label: 'Narrow', text: 'Connect that development to a specific Song institution or economic change: scholar-officials, Champa rice, the Grand Canal, paper money, or export production.' },
          { label: 'Bridge', text: 'State how the broader development created a condition, precedent, or pressure that shaped Song China. Do not make the main argument yet.' }
        ],
        'In 3 to 4 sentences, describe one broader historical development before or beyond the Song Dynasty that helps explain either how the Song maintained political order or why its economy became increasingly commercialized. Then explicitly connect that context to one specific Song development.',
        ['Describes a historically accurate broader development.', 'Makes an explicit connection to Song China.', 'Uses at least one specific piece of evidence.', 'Provides context rather than a disguised thesis.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Institutions, Ideas, and Commercialization',
        'Use two of the three artifacts. Treat each as evidence with strengths and limits, not as an illustration that speaks for itself.',
        'Evaluate the claim that Song strength rested more on institutions and economic infrastructure than on military dominance. Use specific visual details from two artifacts, explain how each detail supports or qualifies the claim, and identify one limitation of using these artifacts to judge the Song state as a whole.',
        'Claims and Evidence (Skills 3.B and 3.D)',
        ['civil service examinations', 'Confucianism', 'scholar-officials', 'paper money', 'commercialization', 'Song Dynasty'],
        ['Uses two artifacts.', 'Describes a specific detail from each.', 'Explains how each detail bears on the claim.', 'States one meaningful evidentiary limitation.']
      ),
      primarySource: source(
        'Primary Source: Fan Zhongyan Proposes Reform, 1043',
        'Fan Zhongyan was a Song scholar-official writing directly to Emperor Renzong during a period of fiscal and military pressure. In his Ten-Point Memorial, he argued that the dynasty needed more rigorous selection and supervision of officials.',
        'Fan argues that local officials should recommend men of talent and virtue and that examinations should test genuine learning. He criticizes officeholding gained through purchase or hereditary privilege because such officials may be unable to judge worthy candidates or govern the people well.',
        'Classroom-adapted excerpt from Fan Zhongyan, Memorial to the Throne on Ten Matters of Reform, 1043.',
        'The wording has been condensed and modernized from the memorial. The argument, author, audience, and date are historical; this is not presented as a word-for-word translation.',
        [
          '(a) Identify one criticism Fan Zhongyan makes of the way officials obtained office.',
          '(b) Explain how Fan Zhongyan\'s position as a scholar-official and his imperial audience likely shaped the reform he proposed.',
          '(c) Explain how one development in Song governance not stated in the excerpt supports or qualifies Fan Zhongyan\'s view of the examination system.'
        ],
        'Respond to all three parts. (a) Identify one criticism Fan Zhongyan makes of officeholding. (b) Explain how his point of view or intended audience shaped his proposal. (c) Explain how one specific development in Song governance outside the excerpt supports or qualifies his view.',
        'Sourcing and Situation (Skill 2.B) and Evidence (Skill 6.B)',
        ['Fan Zhongyan', 'scholar-officials', 'civil service examinations', 'imperial bureaucracy', 'Confucianism', 'Song Dynasty']
      )
    },

    '1.2': {
      skillBuilder: skill(
        'Developments and Processes (Skill 1.A) and Causation',
        'Name the Development, Then Describe the Process',
        'Skill 1.A asks for precise identification and description before explanation. The challenge is to distinguish political fragmentation from cultural collapse: new states emerged, while religious and intellectual networks continued to connect much of Dar al-Islam.',
        [
          { label: 'Identify', text: 'Name one concrete development: Seljuk rule, the Mamluk Sultanate, the Delhi Sultanates, Sufi missionary activity, or state-supported scholarship.' },
          { label: 'Describe', text: 'Give the development a historically specific subject, place, and action. A name alone is not a description.' },
          { label: 'Place in process', text: 'State whether the development reflects political reorganization, the expansion of Islam, or intellectual transfer.' }
        ],
        'Identify and describe one political development that followed Abbasid fragmentation and one religious or intellectual development that connected societies across Dar al-Islam from c. 1200 to c. 1450. Conclude by stating which larger process each example represents.',
        ['Accurately identifies two developments.', 'Describes what happened and where.', 'Distinguishes political reorganization from religious or intellectual connection.', 'Uses precise historical nouns instead of broad labels.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Fragmented Rule, Connected Culture',
        'Select two artifacts created in different places or by different kinds of makers. Corroborate a pattern across them while accounting for what each artifact can and cannot show.',
        'Evaluate the claim that political fragmentation did not end cultural and intellectual connection across Dar al-Islam. Use specific details from two artifacts to support, modify, or challenge the claim. Explain why the origin or purpose of one artifact affects how a historian should use it.',
        'Claims and Evidence (Skills 3.B and 3.D) and Sourcing (Skill 2.B)',
        ['Dar al-Islam', 'political fragmentation', 'Islamic networks', 'scholarship', 'trade', 'cultural transfer'],
        ['Uses two different artifacts.', 'Connects evidence to the claim rather than summarizing.', 'Explains corroboration or tension.', 'Sources at least one artifact.']
      ),
      primarySource: source(
        'Primary Source: Ibn Battuta Enters the Delhi Sultanate, c. 1334',
        'Ibn Battuta was a Moroccan Muslim legal scholar who traveled across Dar al-Islam. After reaching Delhi, Sultan Muhammad bin Tughluq appointed him a judge. His account reflects both the reach of Islamic scholarly networks and the opportunities rulers offered educated travelers.',
        'Ibn Battuta reports that the sultan received foreign scholars generously and appointed learned visitors to offices. He describes Delhi as a vast city filled with markets and institutions, while also portraying the sultan as capable of both extraordinary generosity and severe punishment.',
        'Classroom-adapted excerpt from Ibn Battuta, Rihla (Travels), account of the Delhi Sultanate, c. 1334.',
        'The account was dictated after Ibn Battuta returned to Morocco. Its broad observations are historical, but the wording here is condensed rather than quoted.',
        [
          '(a) Describe one development in Dar al-Islam illustrated by Ibn Battuta\'s appointment in Delhi.',
          '(b) Explain how Ibn Battuta\'s background as a traveling Muslim scholar may have shaped what he emphasized about the sultan and the city.',
          '(c) Explain one way the Delhi Sultanate demonstrates both change and continuity in the Islamic world after Abbasid fragmentation.'
        ],
        'Respond to all three parts. (a) Describe one development illustrated by Ibn Battuta\'s experience in Delhi. (b) Explain how his point of view shaped the account. (c) Explain one way the Delhi Sultanate represented both change and continuity after Abbasid fragmentation.',
        'Developments and Processes (Skill 1.A) and Sourcing (Skill 2.B)',
        ['Ibn Battuta', 'Delhi Sultanate', 'Muhammad bin Tughluq', 'scholarly networks', 'Islam', 'Abbasid fragmentation']
      )
    },

    '1.3': {
      skillBuilder: skill(
        'Claims and Evidence in Sources (Skill 3.A) and Comparison',
        'Find the Argument Inside a Historical Claim',
        'A claim tells what a writer thinks is true. An argument connects that claim to a reason. Read this interpretation: "Rulers in South and Southeast Asia strengthened their states not by copying one religious model, but by adapting Hindu, Buddhist, and Islamic traditions to local political needs."',
        [
          { label: 'Claim', text: 'Restate the interpretation without repeating its wording.' },
          { label: 'Reasoning', text: 'Identify the comparison inside the claim: shared use of religion, different local adaptations.' },
          { label: 'Scope', text: 'Name the states or regions the claim would need to cover in order to be convincing.' }
        ],
        'Identify the interpretation\'s main claim and describe its line of reasoning. Then name one type of evidence from Vijayanagara, the Delhi Sultanate, the Khmer Empire, Majapahit, or Sukhothai that a historian could use to test the claim.',
        ['States the claim accurately.', 'Describes how the comparison supports the argument.', 'Names relevant evidence without yet pretending it proves the claim.', 'Keeps South Asia and Southeast Asia geographically distinct.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Sacred Landscapes and State Power',
        'Choose artifacts from two different states. Compare them within one category: political legitimacy, religious patronage, trade, or cultural adaptation.',
        'Evaluate the claim that rulers in South and Southeast Asia strengthened authority by adapting belief systems to local political settings. Use specific details from two artifacts associated with different states. Explain one similarity, one difference, and how the evidence supports or modifies the claim.',
        'Comparison and Claims and Evidence (Skills 3.A and 3.D)',
        ['Vijayanagara', 'Delhi Sultanate', 'Khmer Empire', 'Majapahit', 'Buddhism', 'Hinduism', 'Islam'],
        ['Uses two states.', 'Compares within the same category.', 'Describes specific visual or geographic details.', 'Explains how the comparison bears on the claim.']
      ),
      primarySource: source(
        'Primary Source: Ibn Battuta at the Court of Delhi, 1330s',
        'Ibn Battuta entered the service of Sultan Muhammad bin Tughluq as a judge. His account describes a Muslim-ruled state governing a predominantly non-Muslim society in South Asia.',
        'Ibn Battuta describes elaborate court ceremonies, gifts to Muslim scholars, and the sultan\'s use of judges and officials. He also notes that the ruler governed subjects with different religious traditions and relied on both imported Islamic institutions and established Indian systems of revenue and local authority.',
        'Classroom-adapted excerpt from Ibn Battuta, Rihla (Travels), account of the Delhi Sultanate, fourteenth century.',
        'The passage condenses several observations from the Rihla. It preserves the historical setting and argument but is not a continuous quotation.',
        [
          '(a) Identify the main historical development illustrated by the sultan\'s support for Muslim scholars and judges.',
          '(b) Describe one claim about state power that a historian could make from the excerpt.',
          '(c) Explain how one specific example from South or Southeast Asia outside the excerpt would support, modify, or refute that claim.'
        ],
        'Respond to all three parts. (a) Identify the development illustrated by the sultan\'s policies. (b) Describe one claim about state power supported by the source. (c) Explain how one outside example from South or Southeast Asia supports, modifies, or refutes that claim.',
        'Claims and Evidence in Sources (Skills 3.A and 3.D)',
        ['Ibn Battuta', 'Delhi Sultanate', 'Muhammad bin Tughluq', 'Islamic institutions', 'religious diversity', 'state power']
      )
    },

    '1.4': {
      skillBuilder: skill(
        'Claims and Evidence in Sources (Skill 3.B) and Continuity and Change',
        'From Detail to Evidence: American State Building',
        'A detail becomes evidence only when it is used to support a claim. The Codex Mendoza and the quipu can both document state power, but they reveal different parts of how power worked.',
        [
          { label: 'Locate', text: 'Identify a precise detail: a named tribute good, a conquered city, a knot pattern, or the organization of recordkeeping.' },
          { label: 'Match', text: 'Name the claim the detail could support about taxation, labor, communication, or imperial reach.' },
          { label: 'Explain', text: 'Complete the reasoning: this detail supports the claim because it shows how the state gathered information or resources.' }
        ],
        'Use one specific detail from the Codex Mendoza or a quipu. Identify the detail, state a defensible claim about Mexica or Inca state building that it supports, and explain why the detail counts as evidence for that claim.',
        ['Names a visible or documented detail.', 'States a claim with a clear subject.', 'Explains the evidence-to-claim connection.', 'Does not treat all American states as one system.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Reading an Empire Through Its Records',
        'Use both artifacts. One records tribute through pictorial writing; the other stored information with knotted cords. Ask what each system made governable.',
        'Develop an argument about how American states converted information, tribute, and labor into political control. Use a specific detail from both the Codex Mendoza and the quipu. Then explain one important limitation of using these surviving state records to understand the experiences of subject peoples.',
        'Claims and Evidence (Skills 3.B and 6.B)',
        ['Codex Mendoza', 'quipu', 'tribute', 'labor', 'recordkeeping', 'Mexica', 'Inca'],
        ['Uses both artifacts.', 'Explains a mechanism of state control.', 'Connects each detail to the argument.', 'Recognizes the perspective missing from state records.']
      ),
      primarySource: source(
        'Primary Source: Bernal Diaz Describes Tenochtitlan, 1519',
        'Bernal Diaz del Castillo was a Spanish soldier who entered Tenochtitlan with Hernan Cortes in 1519. He wrote his account decades later. Although the encounter occurred after 1450, his description provides retrospective evidence for the organization and reach of the Mexica state built during the Unit 1 period.',
        'Diaz describes causeways leading into the island capital, crowded markets with appointed officials, canals filled with canoes, temples and public buildings, and goods arriving from many regions. He recalls that the city\'s scale and order astonished the Spaniards.',
        'Classroom-adapted excerpt from Bernal Diaz del Castillo, The True History of the Conquest of New Spain, written c. 1568, describing events of 1519.',
        'The passage is condensed from a later eyewitness account. Its date and the author\'s role in the conquest are essential limitations.',
        [
          '(a) Identify one detail in the account that supports the claim that Tenochtitlan was a large, well-organized metropolis.',
          '(b) Explain how Diaz\'s point of view as a Spanish conquistador writing decades later may have shaped his description.',
          '(c) Explain how one specific development in Mexica state building before 1450 helps account for the city Diaz observed.'
        ],
        'Respond to all three parts. (a) Identify one detail that supports a claim about Tenochtitlan\'s organization. (b) Explain how the author\'s point of view or historical situation shaped the account. (c) Explain how one development before 1450 helps account for what Diaz observed.',
        'Claims and Evidence in Sources (Skill 3.B) and Sourcing (Skill 2.B)',
        ['Bernal Diaz del Castillo', 'Tenochtitlan', 'Mexica', 'markets', 'tribute', 'causeways', 'conquistador']
      )
    },

    '1.5': {
      skillBuilder: skill(
        'Developments and Processes (Skill 1.B) and Continuity and Change',
        'Explain the Mechanism of African State Building',
        'Naming gold, trade, or religion is only the beginning. Historical explanation shows how a condition became usable power through choices made by rulers and communities.',
        [
          { label: 'Make the claim', text: 'Name one state and argue how one economic, geographic, or religious factor changed its capacity or legitimacy.' },
          { label: 'Prove the mechanism', text: 'Use a precise example to show what rulers or institutions did with that factor. Do not leave trade or belief acting by itself.' },
          { label: 'Explain the result', text: 'Trace the effect on revenue, labor, territorial reach, political loyalty, or the durability of rule.' }
        ],
        'Explain how one economic, geographic, or religious factor contributed to the development or transformation of Great Zimbabwe, Ethiopia, or one Hausa kingdom from c. 1200 to c. 1450. Make a defensible claim, support it with two precise historical details, and connect them in a causal chain: condition, action by rulers or institutions, and political result.',
        ['Makes a defensible claim about one named state.', 'Uses two accurate and relevant historical details.', 'Explains how people or institutions converted a condition into power.', 'Identifies a specific political result rather than claiming only that the state became powerful.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Stone, Faith, and Authority',
        'Compare one artifact from Great Zimbabwe with one from Lalibela. Architecture is evidence of organized labor and political choices, but it does not explain itself.',
        'Evaluate the claim that African rulers built authority through both control of economic networks and sponsorship of sacred traditions. Begin with a defensible judgment. For Great Zimbabwe and Lalibela, identify one visible architectural detail, distinguish what you observe from what you infer, and explain how that detail supports or complicates the claim. Conclude by identifying one limit of the comparison and one additional source that could address it.',
        'Comparison and Claims and Evidence (Skills 3.B and 3.D)',
        ['Great Zimbabwe', 'Lalibela', 'trade', 'Christianity', 'monumental architecture', 'organized labor'],
        ['Makes a defensible judgment about the claim.', 'Uses a specific observation and a supported inference from both places.', 'Explains economic and religious authority without conflating them.', 'Identifies a genuine limitation and a source capable of addressing it.']
      ),
      primarySource: source(
        'Primary Source: Ibn Battuta on Security and Islam in Mali, 1352 to 1353',
        'Ibn Battuta was a Moroccan Muslim legal scholar traveling through Mali. His account praises public order and Islamic observance while revealing the assumptions of an elite visitor from North Africa.',
        '[The people of Mali] possess some admirable qualities. They are seldom unjust, and have a greater abhorrence of injustice than any other people. Their sultan shows no mercy to anyone who is guilty of the least act of it. There is complete security in their country. Neither traveller nor inhabitant in it has anything to fear from robbers or men of violence. They do not confiscate the property of any [foreign merchant] who dies in their country, even if it be uncounted wealth. On the contrary, they give it into the charge of some trustworthy person ... until the rightful heir takes possession of it. They are careful to observe the hours of prayer, and assiduous in attending them in congregations.',
        'Ibn Battuta, Travels in Asia and Africa, 1325 to 1354, translated and selected by H. A. R. Gibb (London: George Routledge & Sons, 1929), Mali section, pp. 329 to 330.',
        'This is a continuous passage with one marked omission. Brackets replace two antiquated racial labels in Gibb\'s 1929 English with precise referents; the sequence and argument are otherwise preserved. Ibn Battuta\'s legal training, Muslim identity, and dependence on elite hospitality shaped what he praised.',
        [
          '(a) Describe one way the ruler of Mali maintained political authority, using a specific detail from the passage.',
          '(b) Explain how Ibn Battuta\'s point of view as a Muslim legal scholar from North Africa helps account for one judgment or emphasis in the passage.',
          '(c) Explain how one specific development not stated in the passage contributed to Mali\'s power in the period from c. 1200 to c. 1450.'
        ],
        'Respond to all three parts in complete sentences. Anchor (a) in the passage. In (b), connect a specific feature of Ibn Battuta\'s position to what he chose to praise or criticize. In (c), name accurate outside evidence and explain its connection to Mali\'s power.',
        'Developments and Processes (Skill 1.B) and Sourcing (Skill 2.B)',
        ['Ibn Battuta', 'Mali', 'Islam', 'security', 'trans-Saharan trade', 'gold', 'state power'],
        [{ label: 'Read the extended Gibb selection at Fordham University', url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp' }]
      )
    },

    '1.6': {
      skillBuilder: skill(
        'Developments and Processes (Skill 1.A) and Causation',
        'Distinguish the Systems That Organized Medieval Europe',
        'Feudalism, manorialism, and Church authority operated at different levels of medieval life. Strong historical writing defines them precisely and then explains the relationship between them instead of blending them into one vague system.',
        [
          { label: 'Distinguish', text: 'Define the role of two systems accurately: political relationships among elites, agrarian labor and production, or transregional religious authority.' },
          { label: 'Connect', text: 'Explain how one system supplied resources, legitimacy, obligations, or limits that affected the other.' },
          { label: 'Test the relationship', text: 'Use a development such as growing towns, royal centralization, or the expansion of universities to show where the relationship held or began to change.' }
        ],
        'Explain how two of the following interacted to structure European society from c. 1200 to c. 1450: feudal relationships, manorialism, or the Roman Catholic Church. Define each development accurately, use one specific historical example for each, and explain how their interaction reinforced either political decentralization or agrarian hierarchy. Finish by identifying one development that limited or altered that pattern.',
        ['Distinguishes the two selected developments accurately.', 'Uses a relevant example for each development.', 'Explains the mechanism linking them to decentralization or hierarchy.', 'Uses a historically relevant qualification rather than an unrelated exception.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Sacred Authority and Agrarian Labor',
        'Use both images as partial evidence for one social system. Ask who commissioned each image, whose work is visible, and whose perspective is missing.',
        'Evaluate the claim that decentralized political power and Church authority reinforced Europe\'s agrarian hierarchy. Make a defensible judgment, then use one specific visual detail from the cathedral and one from the agricultural scene. For each detail, explain the reasoning that connects the image to the claim. Determine whether the images corroborate or complicate one another, and identify whose perspective is missing and what type of source could recover it.',
        'Claims and Evidence (Skills 3.B and 3.D)',
        ['Roman Catholic Church', 'cathedral', 'manorialism', 'serfdom', 'agrarian labor', 'political decentralization'],
        ['Makes a defensible judgment about the claim.', 'Uses a precise detail from each image and explains its relevance.', 'Explains corroboration or complication rather than merely noting a difference.', 'Identifies a missing perspective and an appropriate source for recovering it.']
      ),
      primarySource: source(
        'Primary Source: Robert Grosseteste\'s Rules for Estate Management, c. 1240',
        'Robert Grosseteste, bishop of Lincoln, composed practical rules for the widowed countess of Lincoln. The document shows a landed elite trying to inventory, supervise, and extract value from a decentralized agrarian economy.',
        'Here begin the rules that the good bishop of Lincoln, St Robert Grosseteste, made for the Countess of Lincoln to guard and govern her lands and hostel: whoever will keep these rules well will be able to live on his means, and keep himself and those belonging to him. The first rule teaches how a lord or lady shall know in each manor all their lands by their parcels, all their rents, customs, usages, services, franchises, fees, and tenements. Touching your foreign lands, to begin with, buy the king\'s writ, to inquire by the oath of twelve free men in each manor all the lands by their parcels, all the rents, customs, usages, services, franchises, fees, and tenements.',
        'Robert Grosseteste, The Rules of Saint Robert, c. 1240, translated by Elizabeth Lamond in Walter of Henley\'s Husbandry (London: Longmans, Green, 1890), pp. 124 to 125.',
        'This is a continuous excerpt from the opening and first rule in Lamond\'s public-domain translation; punctuation is lightly standardized. It is prescriptive evidence about how an elite household wanted manors governed, not proof that every estate operated exactly this way.',
        [
          '(a) Describe one feature of manorial organization shown in the passage, using a specific detail from the rules.',
          '(b) Explain how Grosseteste\'s purpose in advising an elite landholder helps account for one emphasis or omission in the passage.',
          '(c) Explain how one specific development in Europe from c. 1200 to c. 1450 supports or qualifies the social order reflected in the passage.'
        ],
        'Respond to all three parts in complete sentences. Use the passage directly in (a). In (b), connect the advice-giving purpose to a particular emphasis or silence. In (c), name outside evidence and explain why it supports or qualifies the social pattern.',
        'Developments and Processes (Skill 1.A) and Sourcing (Skill 2.B)',
        ['Robert Grosseteste', 'countess of Lincoln', 'manorialism', 'rents', 'services', 'landed elite', 'agrarian economy'],
        [{ label: 'View Lamond\'s 1890 edition at Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Walter_of_Henley%27s_Husbandry_-_together_with_an_anonymous_Husbandry,_Seneschaucie,_and_Robert_Grosseteste%27s_Rules_(IA_cu31924074099791).pdf' }]
      )
    },

    '1.7': {
      skillBuilder: skill(
        'Argumentation (Skill 6.A) and Comparison',
        'Build a Defensible Comparison Claim',
        'A defensible comparison claim does more than announce similarity or difference. It makes a historically meaningful judgment and establishes the reason the comparison matters.',
        [
          { label: 'Set one category', text: 'Compare both societies through the same lens: administration, resource extraction, religious legitimacy, labor, or centralization.' },
          { label: 'Make the judgment', text: 'State a specific similarity or difference that is historically defensible, not merely obvious.' },
          { label: 'Establish the reasoning', text: 'Name the underlying condition that helps explain the pattern and preview how the argument could be proved.' }
        ],
        'Develop a one- or two-sentence thesis comparing the processes of state formation in two Unit 1 societies from c. 1200 to c. 1450. Make a defensible judgment within one shared category and establish a line of reasoning by identifying the historical condition that best explains the similarity or difference. The claim should be specific enough that two body paragraphs could prove it.',
        ['Names two historically appropriate societies and one shared category.', 'Makes a specific and defensible comparative judgment.', 'Identifies a plausible historical reason for the pattern.', 'Establishes a line of reasoning rather than previewing a list of unrelated facts.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Test a Comparison Before You Write It',
        'Use both artifacts to test a comparison claim about state formation. Evidence should make the claim narrower and more defensible, not merely decorate it.',
        'Compare Song examination culture with the Catalan Atlas representation of Mansa Musa. Develop a defensible claim about how states constructed or communicated legitimate authority. Use one specific detail from each artifact and explain how both details support the same comparison. Then qualify the argument by explaining how differences in the artifacts\' purposes or forms limit what can be concluded.',
        'Argumentation and Comparison (Skills 6.A, 6.B, and 6.D)',
        ['Song Dynasty', 'civil service examinations', 'Mali', 'Mansa Musa', 'political legitimacy', 'state formation'],
        ['Makes a defensible comparative claim in one shared category.', 'Uses a specific detail from both artifacts.', 'Explains how each detail supports the comparison.', 'Qualifies the argument using the artifacts\' purposes, forms, or evidentiary limits.']
      ),
      primarySource: source(
        'Paired Primary Sources: Royal Authority in Mali and England',
        'These sources show sharply different political relationships. Ibn Battuta observed the public performance of Mansa Sulayman\'s authority in Mali; Magna Carta recorded concessions that English barons compelled King John to accept in 1215.',
        '<strong>Source A, Ibn Battuta on Mali, 1352 to 1353:</strong> On certain days the sultan holds audiences in the palace yard, where there is a platform under a tree, with three steps; this they call the "pempi." It is carpeted with silk and has cushions placed on it. Over it is raised the umbrella, which is a sort of pavilion made of silk, surmounted by a bird in gold, about the size of a falcon. The sultan comes out of a door in a corner of the palace, carrying a bow in his hand and a quiver on his back. On his head he has a golden skull-cap ... [and] behind him come three hundred armed slaves.<br><br><strong>Source B, Magna Carta, 1215:</strong> No scutage nor aid ... shall be imposed on our kingdom, unless by common counsel of our kingdom, except for ransoming our person, for making our eldest son a knight, and for once marrying our eldest daughter; and for these there shall not be levied more than a reasonable aid. ... No freeman shall be taken or imprisoned or disseised or outlawed, or exiled, or in any way destroyed ... except by the lawful judgment of his peers or by the law of the land.',
        'Source A: Ibn Battuta, Travels in Asia and Africa, translated by H. A. R. Gibb (1929), pp. 326 to 327. Source B: Magna Carta, clauses 12 and 39, translated by William Sharp McKechnie in Magna Carta: A Commentary on the Great Charter of King John (2nd ed., 1914).',
        'Each source is a continuous selection with omissions marked by ellipses. Brackets in Source A supply the grammatical connection across one omission. The sources differ in genre: an elite outsider\'s travel narrative and a negotiated legal charter. Magna Carta protected the interests of free men and powerful elites, not universal political rights.',
        [
          '(a) Describe one difference in how royal authority is represented in Source A and Source B, using a specific detail from each source.',
          '(b) Explain how the political situation in either Mali or England helps account for the representation of royal authority in the corresponding source.',
          '(c) Explain how one specific piece of evidence not stated in the sources supports or qualifies a broader comparison of state formation in Africa and Europe.'
        ],
        'Respond to all three parts in complete sentences. Cite both passages in (a). In (b), connect a specific political condition to the way authority appears in one source. In (c), name outside evidence and explain how it strengthens or qualifies the regional comparison.',
        'Comparison and Argumentation (Skills 3.C and 6.A)',
        ['Ibn Battuta', 'Mansa Sulayman', 'Mali', 'Magna Carta', 'King John', 'barons', 'state formation'],
        [
          { label: 'Read Ibn Battuta\'s Mali account at Fordham University', url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp' },
          { label: 'Read McKechnie\'s Magna Carta translation at Wikisource', url: 'https://en.wikisource.org/wiki/Magna_Charta' }
        ]
      )
    },

    '2.1': {
      skillBuilder: skill(
        'Contextualization (Skill 4.A) and Causation',
        'Build the Setting for Silk Road Expansion',
        'Contextualization places a development inside a broader process that began earlier or operated beyond the immediate topic. It should explain why the growth of the Silk Roads after 1200 became historically possible, not simply repeat that trade grew.',
        [
          { label: 'Broaden the lens', text: 'Begin before 1200 or outside the route itself with an established pattern such as earlier Eurasian exchange, expanding Chinese production, or elite demand for luxury goods.' },
          { label: 'Describe the setting', text: 'Use a specific development to show what changed in production, political order, commercial practice, or demand.' },
          { label: 'Build the bridge', text: 'Explain how that broader development created conditions for greater volume or range after 1200.' }
        ],
        'In 4 to 5 sentences, describe a broader historical context for the expansion of Silk Road exchange after 1200. Situate that expansion within one process that began earlier or extended beyond the routes themselves, support the context with a specific historical development, and explain why that development created favorable conditions for increased trade. Do not use the growth of the Silk Roads as its own context.',
        ['Establishes a genuinely broader setting in place or time.', 'Uses a specific and historically accurate development.', 'Explains the relevance of that development to Silk Road expansion.', 'Avoids merely restating the prompt or listing causes without a bridge.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Opportunity and Vulnerability on the Silk Roads',
        'The evidence set contains infrastructure, technology transfer, and epidemic disease. Use at least two entries to test a claim about the consequences of deeper connection.',
        'Evaluate the extent to which the growth of the Silk Roads after 1200 created both greater opportunity and greater vulnerability. Make a defensible judgment and use at least two evidence entries representing different consequences. For each entry, explain the mechanism linking expanded exchange to the consequence. Then use the scale, timing, or geographic reach of one example to qualify your judgment.',
        'Claims and Evidence and Causation (Skills 3.D and 6.B)',
        ['caravanserais', 'technology transfer', 'paper', 'gunpowder', 'Black Death', 'Silk Roads'],
        ['Makes a defensible judgment about extent.', 'Uses precise evidence for opportunity and vulnerability.', 'Explains how expanded exchange produced each consequence.', 'Qualifies the judgment using scale, timing, or geographic reach.']
      ),
      primarySource: source(
        'Primary Source: Marco Polo Describes the Great Khan\'s Relay System',
        'Marco Polo, a Venetian merchant, traveled through Mongol-ruled Eurasia in the late thirteenth century. His account introduced many European readers to the wealth and administration of Kublai Khan\'s domains.',
        'Now you must know that from this city of Cambaluc proceed many roads and highways leading to a variety of provinces, one to one province, another to another; and each road receives the name of the province to which it leads. And the messengers of the Emperor in travelling from Cambaluc, be the road whichsoever they will, find at every twenty-five miles of the journey a station which they call Yamb, or, as we should say, the "Horse-Post-House." And at each of those stations used by the messengers, there is a large and handsome building for them to put up at ... At some of these stations, moreover, there shall be posted some four hundred horses standing ready for the use of the messengers; at others there shall be two hundred, according to the requirements.',
        'Marco Polo, The Book of Ser Marco Polo, Book II, Part I, Chapter XXVI, translated and edited by Colonel Sir Henry Yule, 3rd ed., revised by Henri Cordier (London: John Murray, 1903).',
        'This is a continuous excerpt from the opening of Chapter XXVI with one marked omission. Yule\'s spellings, including Cambaluc and Yamb, are retained. Polo\'s wonder-filled travel narrative may exaggerate scale, but its administrative detail can be corroborated with Mongol records and other travelers.',
        [
          '(a) Describe one feature of Mongol imperial administration shown in the passage, using a specific detail from the source.',
          '(b) Explain how the feature described in the passage could support both political administration and long-distance exchange across Eurasia.',
          '(c) Explain how Marco Polo\'s point of view or the scope of his account limits its usefulness for understanding the experiences of ordinary Silk Road merchants.'
        ],
        'Respond to all three parts in complete sentences. Use a precise passage detail in (a). In (b), trace two effects of the same institution rather than asserting that roads automatically increased trade. In (c), connect a specific feature of the author or account to a particular limitation.',
        'Contextualization (Skill 4.A), Causation, and Sourcing (Skill 2.C)',
        ['Marco Polo', 'relay stations', 'Yam', 'Great Khan', 'state protection', 'Silk Roads', 'merchants'],
        [{ label: 'Read Chapter XXVI through Columbia Asia for Educators', url: 'https://afe.easia.columbia.edu/mongols/figures/ser_xxvi.pdf' }]
      )
    },

    '2.2': {
      skillBuilder: skill(
        'Making Connections (Skill 5.A) and Continuity and Change',
        'Connect Conquest, Administration, and Exchange',
        'The Mongol conquests produced destruction and connectivity through the same expansion of imperial power. Historical reasoning must explain that relationship without turning the empire into a one-sided story.',
        [
          { label: 'Make the connection', text: 'State how a political development such as conquest, khanate rule, religious accommodation, or the Yam affected movement across Eurasia.' },
          { label: 'Prove both effects', text: 'Use one specific example of disruption and one of intensified exchange or cultural contact.' },
          { label: 'Explain the pattern', text: 'Show how imperial power could generate both effects and identify where the pattern varied by region or time.' }
        ],
        'Develop an argument explaining how Mongol imperial expansion both disrupted established societies and intensified exchange across Eurasia in the thirteenth and fourteenth centuries. Use one specific example of each effect, explain how Mongol political power produced both outcomes, and qualify the argument by identifying one regional or chronological limit.',
        ['Makes a defensible claim that holds disruption and connectivity together.', 'Uses one accurate example for each effect.', 'Explains the causal role of Mongol political power.', 'Qualifies the pattern with a meaningful regional or chronological limit.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Connector, Conqueror, or Both?',
        'Use evidence of administration, destruction, and travel to weigh competing interpretations of the Mongol Empire.',
        'Evaluate the claim that the Mongol Empire was more historically significant as a connector of Afro-Eurasia than as a force of destruction. Define the basis of your judgment—such as geographic breadth, magnitude, or durability—before weighing at least two evidence entries. Use one entry as counterevidence, explain why it matters, and reach a qualified conclusion rather than simply listing benefits and costs.',
        'Argumentation and Making Connections (Skills 5.B, 6.B, and 6.D)',
        ['Yam system', 'sack of Baghdad', 'Pax Mongolica', 'Marco Polo', 'trade', 'Mongol conquest'],
        ['Uses an explicit and defensible standard for historical significance.', 'Weighs specific evidence supporting and challenging the claim.', 'Explains the relationship between conquest and connectivity.', 'Reaches a qualified conclusion that follows from the evidence.']
      ),
      primarySource: source(
        'Primary Source: William of Rubruck at Mongke Khan\'s Court, 1253 to 1255',
        'William of Rubruck was a Flemish Franciscan sent by King Louis IX of France. He hoped to promote Christianity and gather information. At Mongke Khan\'s court, he encountered people and religious traditions from across Eurasia.',
        'The next day the Chan sent his secretaries to me, who said: "Our lord sends us to you to say that you are here Christians, Saracens and Tuins. And each of you says that his doctrine is the best, and his writings, that is, books, the truest. So he wishes that you shall all meet together, and make a comparison, each one writing down his precepts, so that he himself may be able to know the truth." Then I said: "Blessed be God, who put this in the Chan\'s heart. But our Scriptures tell us, the servant of God should not dispute, but should show mildness to all; so I am ready, without disputation or contention, to give reason for the faith and hope of the Christians, to the best of my ability." They wrote down my words, and carried them back to him.',
        'William of Rubruck, The Journey of William of Rubruck to the Eastern Parts of the World, 1253 to 1255, translated and edited by William Woodville Rockhill (London: Hakluyt Society, 1900), Chapter XXXIII.',
        'This is one continuous exchange in Rockhill\'s public-domain translation; punctuation is lightly standardized. "Saracens" refers to Muslims and "Tuins" to Buddhists in the translator\'s terminology. Rubruck wrote for Louis IX and presents the meeting through a Franciscan missionary perspective.',
        [
          '(a) Describe one connection between Mongol imperial rule and cross-cultural interaction shown in the passage.',
          '(b) Explain how Rubruck\'s purpose as a Christian missionary writing for a European king helps account for one emphasis in his account.',
          '(c) Explain how one specific development not stated in the passage supports or qualifies the claim that Mongol rule increased Afro-Eurasian connectivity.'
        ],
        'Respond to all three parts in complete sentences. Ground (a) and (b) in particular features of the passage. In (c), name accurate outside evidence and explain why it strengthens or limits a broader claim about Mongol connectivity.',
        'Making Connections (Skill 5.A) and Sourcing (Skill 2.B)',
        ['William of Rubruck', 'Mongke Khan', 'religious debate', 'Buddhism', 'Islam', 'Christianity', 'cultural exchange'],
        [{ label: 'Read Rockhill\'s full account through Northern Virginia Community College', url: 'https://novaonline.nvcc.edu/eli/evans/his111/Documents/Mongols/rubruck.html' }]
      )
    },

    '2.3': {
      skillBuilder: skill(
        'Making Connections (Skill 5.A) and Causation',
        'Connect Environment, Technology, and Port-City Growth',
        'Indian Ocean commerce expanded through an interacting system. Monsoon knowledge created an opportunity, but technologies, merchant communities, and port states determined how people used it.',
        [
          { label: 'Establish the opportunity', text: 'Describe how predictable monsoon winds structured the timing and direction of voyages.' },
          { label: 'Explain the response', text: 'Use a specific technology or institution to show how merchants exploited that environmental pattern.' },
          { label: 'Trace the consequence', text: 'Explain how the interaction increased trade and changed one named port city or state.' }
        ],
        'Explain how knowledge of the monsoon winds interacted with one technological or commercial development to expand Indian Ocean trade after 1200. Use one specific example for each factor, trace how their interaction reduced a cost or risk of exchange, and explain one resulting change in Kilwa, Calicut, Malacca, or another historically appropriate port.',
        ['Uses accurate evidence about the environment and a human response.', 'Explains interaction rather than presenting two parallel causes.', 'Identifies the cost, risk, or barrier the interaction reduced.', 'Connects the mechanism to a specific change in a named port.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: A Maritime System',
        'Use evidence from at least two levels of the system: environment, port-state economy, and cultural diffusion.',
        'Evaluate the extent to which learned use of the environment, rather than political power alone, explains the expansion of Indian Ocean trade after 1200. Make a defensible judgment and use at least two evidence entries from different levels of the system. Explain the causal role of each entry, then use a contrasting example or limitation to qualify your conclusion.',
        'Making Connections and Causation (Skills 5.A and 6.B)',
        ['monsoon winds', 'Kilwa', 'gold trade', 'diasporic communities', 'Islam', 'Indian Ocean'],
        ['Makes a defensible judgment about the relative importance of factors.', 'Uses evidence from at least two levels of the maritime system.', 'Explains how each example affected the growth of exchange.', 'Qualifies the conclusion with a relevant contrast or limitation.']
      ),
      primarySource: source(
        'Primary Source: Ibn Battuta Describes Kilwa, 1331',
        'Ibn Battuta, a Moroccan Muslim scholar, visited Kilwa on the Swahili Coast while traveling through the Indian Ocean. He evaluated the city and its ruler using the expectations of an elite Muslim traveler.',
        'We stayed one night in this island [Mombasa], and then pursued our journey to Kulwa [Kilwa], which is a large town on the coast. The majority of its inhabitants are Zanj, jet-black in colour, and with tattoo marks on their faces. I was told by a merchant that the town of Sufala [Sofala] lies a fortnight\'s journey south from Kulwa and that gold dust is brought to Sufala from Yufi in the country of the Limis, which is a month\'s journey distant from it. Kulwa is a very fine and substantially built town, and all its buildings are of wood. ... The sultan at the time of my visit was Abu\'l-Muzaffar Hasan, who was noted for his gifts and generosity. He used to devote the fifth part of the booty made on his expeditions to pious and charitable purposes, as is prescribed in the Koran.',
        'Ibn Battuta, Travels in Asia and Africa, 1325 to 1354, translated and selected by H. A. R. Gibb (London: George Routledge & Sons, 1929), East African coast section, pp. 112 to 113.',
        'This is a continuous selection with one marked omission. Gibb\'s historical term "Zanj" is retained and modern place names are supplied in brackets. Ibn Battuta learned about the inland gold route from a merchant and observed coastal elites directly, so the two kinds of evidence should not be treated as equally firsthand.',
        [
          '(a) Describe one way Kilwa was connected to a wider commercial or cultural network, using a specific detail from the passage.',
          '(b) Explain how Indian Ocean commerce contributed to the growth or political authority of Swahili Coast states such as Kilwa.',
          '(c) Explain how Ibn Battuta\'s point of view as an elite Muslim traveler affects the usefulness of the passage for evaluating Kilwa\'s society.'
        ],
        'Respond to all three parts in complete sentences. Cite a precise passage detail in (a). In (b), trace commerce through revenue, elite authority, or urban growth. In (c), explain both what Ibn Battuta was positioned to notice and what his perspective makes harder to know.',
        'Making Connections (Skill 5.A) and Sourcing (Skill 2.C)',
        ['Ibn Battuta', 'Kilwa', 'Swahili Coast', 'Sofala', 'gold', 'Islam', 'Indian Ocean trade'],
        [{ label: 'Read the extended Gibb selection at Fordham University', url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp' }]
      )
    },

    '2.4': {
      skillBuilder: skill(
        'Developments and Processes (Skill 1.B) and Causation',
        'Explain How the Sahara Became a Trade Zone',
        'Neither the camel nor demand for gold explains trans-Saharan exchange alone. A strong causal explanation shows why an environmental solution and an economic incentive became mutually reinforcing.',
        [
          { label: 'Explain the enabler', text: 'Show how camel physiology, saddle design, caravan organization, or oasis knowledge reduced the cost or risk of desert crossing.' },
          { label: 'Explain the incentive', text: 'Show how complementary regional demand for gold, salt, or other goods made the difficult journey worthwhile.' },
          { label: 'Connect cause to consequence', text: 'Trace how increased exchange produced revenue, political reach, or cultural change in West Africa.' }
        ],
        'Explain why both transportation technology and complementary economic demand were necessary for the expansion of trans-Saharan trade after 1200. Use at least two specific pieces of historical evidence, explain what barrier each factor overcame, and trace their interaction to one political or cultural transformation in West Africa.',
        ['Explains why neither technology nor demand was sufficient by itself.', 'Uses at least two accurate and specific examples.', 'Identifies the barrier or incentive associated with each factor.', 'Traces the interaction to a specific political or cultural transformation.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: From Camel Saddle to Imperial Power',
        'The evidence set traces a chain from transportation to wealth to religious and intellectual influence. Test whether the pieces form a convincing causal sequence.',
        'Construct and test a causal explanation using all three evidence entries. Place camel technology, Mansa Musa\'s hajj, and Timbuktu\'s scholarship into defensible roles—as an enabling condition, evidence of accumulated wealth and political reach, or a cultural consequence. Explain every link without treating all three items as causes. Identify the weakest link and name the additional evidence needed to strengthen it.',
        'Causation and Claims and Evidence (Skills 1.B and 6.B)',
        ['camel saddle', 'caravans', 'Mansa Musa', 'hajj', 'Timbuktu', 'trans-Saharan trade'],
        ['Assigns each entry a defensible causal role.', 'Explains every link in the sequence.', 'Distinguishes causes from evidence of effects.', 'Identifies the weakest inference and evidence that could test it.']
      ),
      primarySource: source(
        'Primary Source: Ibn Battuta Crosses the Sahara, 1352',
        'Ibn Battuta joined merchants traveling south from Sijilmasa. His description of Taghaza connects desert ecology, coerced labor, camel transport, salt, and West African gold in one commercial system.',
        'After twenty-five days from Sijilmasa we reached Taghaza, an unattractive village, with the curious feature that its houses and mosques are built of blocks of salt, roofed with camel skins. There are no trees there, nothing but sand. In the sand is a salt mine; they dig for the salt, and find it in thick slabs, lying one on top of the other, as though they had been tool-squared and laid under the surface of the earth. A camel will carry two of these slabs. No one lives at Taghaza except the slaves of the Massufa tribe, who dig for the salt; they subsist on dates imported from Dar\'a and Sijilmasa, camels\' flesh, and millet imported from the Negrolands. The people come up from their country and take away the salt from there. At Iwalatan a load of salt brings eight to ten mithqals; in the town of Malli it sells for twenty to thirty, and sometimes as much as forty.',
        'Ibn Battuta, Travels in Asia and Africa, 1325 to 1354, translated and selected by H. A. R. Gibb (London: George Routledge & Sons, 1929), trans-Saharan section, pp. 317 to 318.',
        'This is a continuous excerpt; punctuation is lightly standardized and one antiquated racial label is replaced by "the people." Gibb\'s place-name spellings are retained. Ibn Battuta traveled with the caravan and visited Taghaza, but some economic details may still reflect what merchants told him.',
        [
          '(a) Describe one pattern of economic specialization or exchange shown in the passage, using a specific detail from the source.',
          '(b) Explain how one environmental or technological factor helped produce the commercial pattern described in the passage.',
          '(c) Explain how one specific development not stated in the passage supports or qualifies the claim that trans-Saharan exchange strengthened West African states.'
        ],
        'Respond to all three parts in complete sentences. Use a detail about production, transport, imports, or prices in (a). In (b), explain the mechanism connecting environment or technology to that pattern. In (c), name outside evidence and explain how it strengthens or limits a claim about state power.',
        'Developments and Processes (Skill 1.B), Causation, and Sourcing (Skill 2.B)',
        ['Ibn Battuta', 'Taghaza', 'salt', 'gold', 'camels', 'Massufa', 'trans-Saharan trade'],
        [{ label: 'Read the extended Gibb selection at Fordham University', url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp' }]
      )
    },

    '2.5': {
      skillBuilder: skill(
        'Sourcing and Situation (Skill 2.A) and Causation',
        'Read a Traveler Before You Trust the Traveler',
        'Sourcing becomes historical analysis only when a feature of the author, audience, purpose, or situation is connected to a particular claim, emphasis, or silence in the source. "The author may be biased" explains nothing.',
        [
          { label: 'Identify precisely', text: 'Choose one relevant feature of the biographer\'s religious position, purpose, audience, or Mongol-era historical situation.' },
          { label: 'Locate the effect', text: 'Cite a word, detail, or omission that reflects the selected sourcing feature.' },
          { label: 'Explain relevance', text: 'Show how the sourcing feature affects the source\'s value for evaluating a claim about cultural diffusion.' }
        ],
        'Using the Rabban Bar Sauma passage in Module 08, explain how one relevant feature of the Syriac biographer\'s point of view, purpose, audience, or historical situation affects the source\'s usefulness for evaluating the claim that expanding networks increased cross-cultural religious contact. Identify the feature precisely, cite a revealing detail from the passage, and explain the connection between that feature and what the source can—or cannot—demonstrate.',
        ['Identifies one specific and historically relevant sourcing feature.', 'Uses a precise source detail rather than a generic accusation of bias.', 'Explains how the feature shaped an emphasis, claim, or omission.', 'Connects the sourcing analysis to the stated historical claim.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Trace Diffusion, Then Test the Story',
        'Choose two examples of diffusion from different regions or different categories. A strong explanation names an origin, a route or carrier, a receiving society, and a transformation.',
        'Evaluate the claim that trade networks spread cultural and technological traditions without producing cultural uniformity. Compare two evidence entries from different regions or categories. For each, trace an origin, carrier or route, receiving society, and local transformation. Explain how the contrast between the examples supports a qualified judgment, then identify one additional source that could test the transformation you described.',
        'Causation and Claims and Evidence (Skills 3.D and 6.B)',
        ['cultural diffusion', 'Islam', 'Buddhism', 'paper', 'printing', 'sugar', 'trade networks'],
        ['Makes a defensible and qualified judgment about the claim.', 'Traces origin, movement, reception, and transformation for two examples.', 'Uses the comparison to explain why diffusion did not produce uniformity.', 'Identifies an additional source capable of testing the argument.']
      ),
      primarySource: source(
        'Primary Source: Rabban Bar Sauma Explains Eastern Christianity, 1288',
        'Rabban Bar Sauma was a Church of the East monk born near Khanbaliq in Yuan China. The Ilkhan Arghun later sent him west as a diplomatic envoy. A Syriac Christian biographer recorded his meeting with Roman cardinals.',
        'The Cardinals said unto him, "Where is the Throne of the Catholicus?" He said to them, "In Baghdad." They answered, "What position hast thou there?" And he replied, "I am a deacon in the Cell of the Catholicus, and the director of the disciples, and the Visitor-General." The Cardinals said, "It is a marvellous thing that thou who art a Christian, and a deacon of the Throne of the Patriarch of the East, hast come upon an embassy from the king of the Mongols." And Rabban Sawma said unto them, "Know ye, O our Fathers, that many of our Fathers have gone into the countries of the Mongols, and Turks, and Chinese and have taught them the Gospel, and at the present time there are many Mongols who are Christians."',
        'Anonymous Syriac biographer, The Monks of Kublai Khan, translated from Syriac by Sir E. A. Wallis Budge (London: Religious Tract Society, 1928), pp. 173 to 174.',
        'This is one continuous exchange in Budge\'s public-domain translation; punctuation is lightly standardized. The text is a religious biography, not Bar Sauma\'s own surviving diary, and its Christian author emphasizes the reach and prestige of the Church of the East.',
        [
          '(a) Describe one development in cross-cultural or religious exchange illustrated by the passage.',
          '(b) Explain how the historical situation of Mongol rule contributed to the development described in the passage.',
          '(c) Explain how the Christian biographer\'s point of view or purpose affects the usefulness of the passage for evaluating the spread of Christianity across Eurasia.'
        ],
        'Respond to all three parts in complete sentences. Use a specific passage detail in (a). In (b), trace a mechanism connecting Mongol imperial conditions to Bar Sauma\'s journey or audience. In (c), explain both the insight the biographer\'s position provides and the conclusion it makes less secure.',
        'Sourcing and Situation (Skills 2.A and 2.C)',
        ['Rabban Bar Sauma', 'Church of the East', 'Yuan China', 'Ilkhanate', 'Baghdad', 'Mongols', 'cultural diffusion'],
        [{ label: 'Read Budge\'s 1928 translation at Fordham University', url: 'https://sourcebooks.web.fordham.edu/eastasia/13bar-sauma-nestorianpilgrim.asp' }]
      )
    },

    '2.6': {
      skillBuilder: skill(
        'Making Connections (Skill 5.A) and Causation',
        'Connect Trade Expansion to Environmental Change',
        'The same networks moved pathogens and crops, but movement alone did not determine their consequences. Historical explanation must connect the transfer to biological properties, receiving environments, labor systems, and patterns of settlement.',
        [
          { label: 'Trace the movement', text: 'Identify the network and the specific pathogen or crop that moved through it.' },
          { label: 'Explain the mechanism', text: 'Show how mobility, ecology, immunity, cultivation, or labor needs turned transfer into consequence.' },
          { label: 'Compare outcomes', text: 'State a meaningful difference in demographic, economic, social, or ecological effects and explain why it existed.' }
        ],
        'Compare the diffusion of one pathogen with the diffusion of one crop through expanding exchange networks from c. 1200 to c. 1450. For each example, identify the route or carrier and explain the mechanism that produced a specific consequence. Then explain one important difference between their effects by connecting it to biology, environment, labor, or patterns of human settlement.',
        ['Uses one accurate pathogen example and one accurate crop example.', 'Traces a route or carrier for each transfer.', 'Explains how each transfer produced a specific consequence.', 'Explains the difference in effects instead of merely stating it.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: One Shock, Uneven Consequences',
        'Use evidence from at least two regions or two different source types. Demographic estimates, chronicles, and environmental data answer different questions.',
        'Evaluate the extent to which the environmental consequences of connectivity from c. 1200 to c. 1450 were both widespread and uneven. Make a defensible judgment using at least two evidence entries from different regions or source types. Explain how exchange produced each consequence, compare their scale or intensity, and use the limits of one source to qualify the reach of your conclusion.',
        'Making Connections and Claims and Evidence (Skills 5.A and 3.D)',
        ['Black Death', 'Caffa', 'Ibn Khaldun', 'population loss', 'deforestation', 'trade networks'],
        ['Makes a defensible judgment about extent.', 'Uses specific evidence from different regions or source types.', 'Explains the mechanism and compares scale or intensity.', 'Uses source type or geographic scope to qualify the conclusion.']
      ),
      primarySource: source(
        'Primary Source: Giovanni Boccaccio Describes the Black Death, 1348',
        'Giovanni Boccaccio was a Florentine writer who lived through the plague. In the introduction to the Decameron, he described symptoms, mortality, burial, and the breakdown of social obligations in Florence.',
        'In 1348, Boccaccio writes, a deadly pestilence reached Florence. The disease had appeared years earlier in eastern lands, destroyed countless lives, and moved steadily westward from place to place. City officers tried to clean Florence, prevent sick outsiders from entering, and circulate advice about protecting health. Devout residents organized repeated processions and prayers. None of these measures stopped the disease. In the spring, swellings appeared in the groin or beneath the arms, followed by dark marks across the body. Physicians and medicines seemed powerless, and many victims died within three days. Contact with sick people, their clothing, or objects they had handled appeared to transmit the illness to the healthy.',
        'Giovanni Boccaccio, The Decameron, Introduction to the First Day, written c. 1353, translated by John Payne (London: Villon Society, 1886).',
        'This classroom rendering follows one continuous passage in Payne\'s public-domain translation, paragraphs 8 to 13, without combining material from elsewhere. It modernizes syntax rather than presenting itself as Payne\'s exact wording. Boccaccio observed Florence, not all of Afro-Eurasia, and his religious and astrological explanations reflect fourteenth-century assumptions.',
        [
          '(a) Describe one social or demographic consequence of the plague shown in the passage, using a specific detail from Boccaccio\'s account.',
          '(b) Explain how one feature of Afro-Eurasian exchange networks contributed to the spread or severity of the crisis Boccaccio described.',
          '(c) Explain how the geographic scope or literary purpose of Boccaccio\'s account limits its usefulness for evaluating the environmental consequences of connectivity across Afro-Eurasia.'
        ],
        'Respond to all three parts in complete sentences. Ground (a) in the passage. In (b), trace a mechanism rather than asserting that trade spread disease. In (c), connect a specific feature of the source to the particular broader conclusion it cannot establish by itself.',
        'Making Connections (Skill 5.A) and Sourcing (Skill 2.C)',
        ['Giovanni Boccaccio', 'Black Death', 'Florence', 'public health', 'trade networks', 'demographic decline', 'contagion'],
        [{ label: 'Read Payne\'s complete public-domain translation at Project Gutenberg', url: 'https://www.gutenberg.org/files/23700/23700-h/23700-h.htm' }]
      )
    },

    '2.7': {
      skillBuilder: skill(
        'Argumentation (Skill 6.B) and Comparison',
        'Make Evidence Do Comparative Work',
        'Comparative evidence becomes persuasive only when examples from different networks address the same category and the reasoning explains what the relationship reveals. A list of goods or technologies is not yet an argument.',
        [
          { label: 'Make the claim', text: 'State a defensible similarity or difference between two networks within one shared category.' },
          { label: 'Build the evidence pair', text: 'Select one precise example from each network and explain how each supports the comparison.' },
          { label: 'Qualify the argument', text: 'Use a third example to reveal a limit, exception, or condition without abandoning the original claim.' }
        ],
        'Develop a comparative argument evaluating how geography shaped the organization of Afro-Eurasian trade networks from c. 1200 to c. 1450. Compare two networks within one category, support the claim with one precise example from each, and explain how both examples establish the comparison. Then use a third historically specific example to qualify the argument by identifying a limit or condition on geography\'s influence.',
        ['Makes a defensible comparison within one shared category.', 'Uses precise evidence from at least two networks.', 'Explains how every example supports the line of reasoning.', 'Uses the third example to qualify rather than merely repeat the claim.']
      ),
      evidenceLab: evidence(
        'Evidence Lab: Build and Stress-Test a Network Comparison',
        'Select evidence from at least three networks or travelers. Use the set to support a comparison and then search for the piece that makes the argument more complex.',
        'Develop a comparative argument about how geography, technology, or state power shaped the Silk Roads, Indian Ocean, and trans-Saharan networks. Establish one meaningful similarity and one meaningful difference within the same category. Use one precise evidence entry from each network, explain how every example supports the comparison, and use at least one example to qualify the argument by revealing an exception or limit.',
        'Argumentation and Comparison (Skills 6.B and 6.D)',
        ['Silk Roads', 'Indian Ocean', 'trans-Saharan trade', 'geography', 'technology', 'state power'],
        ['Makes a defensible argument containing both similarity and difference.', 'Uses precise evidence from all three networks.', 'Explains how every example supports the comparison.', 'Uses one example to establish a genuine qualification or limit.']
      ),
      primarySource: source(
        'Paired Primary Sources: Merchant Institutions Across Two Networks',
        'Francesco Pegolotti compiled a practical handbook for merchants using the overland route to China. Ibn Battuta described the host-broker system he encountered at the Indian Ocean port of Mogadishu. The genres reveal what each network required from merchants.',
        '<strong>Source A, Pegolotti\'s merchant handbook, c. 1340:</strong> A merchant traveling from Tana to Cathay should hire a capable dragoman and at least two servants who know the Cuman language. He should carry provisions for particular stages, although meat is available along the road. Merchants reported that the route was generally safe by day or night, but political succession could interrupt that security. If a traveler died without a brother or trusted companion present, local officials could claim his property. Pegolotti therefore calculated the personnel, supplies, risks, travel costs, and value of merchandise needed for the journey.<br><br><strong>Source B, Ibn Battuta at Mogadishu, 1331:</strong> When a ship entered the port, small boats approached carrying young men with covered dishes of food. Each man selected a visiting merchant and announced, "This is my guest." The merchant then lodged only with that host. The host sold the visitor\'s goods and made purchases for him. A transaction made without the host, or at a price judged too low, was treated as invalid. Ibn Battuta concluded that this custom greatly benefited foreign merchants.',
        'Source A: Francesco Balducci Pegolotti, Pratica della Mercatura, Chapter II, c. 1340, translated by Henry Yule and revised by Henri Cordier in Cathay and the Way Thither, vol. 3 (1916), pp. 151 to 153. Source B: Ibn Battuta, Travels in Asia and Africa, translated by H. A. R. Gibb (1929), p. 111.',
        'Each classroom rendering follows one continuous passage in the named public-domain translation and does not combine observations from elsewhere. Syntax and place names are modernized. Source A is prescriptive commercial advice assembled from merchant knowledge; Source B is an elite traveler\'s description of one port.',
        [
          '(a) Describe one similarity in the commercial institutions supporting long-distance exchange in the two passages, using a specific detail from each source.',
          '(b) Explain one difference in what the authors emphasize by connecting each author\'s purpose or point of view to the corresponding passage.',
          '(c) Explain how one specific piece of evidence not stated in either passage supports or qualifies a broader comparison of the Silk Roads and Indian Ocean networks.'
        ],
        'Respond to all three parts in complete sentences. Cite both passages in (a). In (b), explain the relationship between each author\'s position and the information included. In (c), name accurate outside evidence and explain exactly how it strengthens or qualifies the network comparison.',
        'Comparison, Sourcing, and Evidence (Skills 3.C, 2.B, and 6.B)',
        ['Francesco Pegolotti', 'Ibn Battuta', 'dragoman', 'merchant broker', 'Silk Roads', 'Indian Ocean', 'commercial institutions'],
        [
          { label: 'Read Pegolotti\'s merchant handbook at Silk Road Seattle', url: 'https://depts.washington.edu/silkroad/texts/pegol.html' },
          { label: 'Read Ibn Battuta\'s travel account at Fordham University', url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp' }
        ]
      )
    }
  };

  const topic = String(lesson.meta.topic || '').replace(/^Topic\s+/i, '').trim();
  const revised = PRACTICE[topic];
  if (!revised) return;

  lesson.skillBuilder = revised.skillBuilder;
  lesson.evidenceLab = {
    ...(lesson.evidenceLab || {}),
    ...revised.evidenceLab
  };
  lesson.primarySource = revised.primarySource;
})();
