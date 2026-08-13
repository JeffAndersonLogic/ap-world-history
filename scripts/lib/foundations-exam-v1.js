/**
 * foundations-exam-v1.js
 *
 * The 40-question Foundations unit exam, as data.
 *
 * WHY THIS IS A MODULE AND NOT A DOCUMENT
 *
 * The same 40 items have to reach four places: a Canvas QTI package, a CSV a
 * converter or a spreadsheet can read, a printable student exam, and a teacher
 * key with rationales. Authoring those four by hand means four copies of every
 * stem and nothing able to tell you when the answer key and the Canvas import
 * disagree, which is the failure this repo already learned the hard way with the
 * First & 10 capture block. `scripts/build-foundations-exam.js` renders all four
 * from here, and `--check` fails on drift.
 *
 * THE BLUEPRINT
 *
 * Part I   Q1-16   traditional single-item MC, recall and one-step reasoning
 * Part II  Q17-32  stimulus-based MC in six sets, three text or data, three
 *                  visual, half drawn from sources students met in the lessons
 *                  and half new to them so the exam tests transfer
 * Part III Q33-40  historical-thinking-skill identification: the student picks
 *                  which of four sentences is a valid causation, CCOT,
 *                  comparison, contextualization, sourcing, or argumentation
 *                  statement about a named subject
 *
 * Coverage runs 8 items each on Foundations 1, 2, 3 and 5 and 9 on Foundations 4.
 * Foundations 0 is assessed through Part III rather than as recall, because the
 * six skills are what Day 0 actually teaches.
 *
 * A NOTE ON SOURCES
 *
 * No stimulus attributes an invented quotation to a real document. Sources are
 * either an artifact or map the lessons already use, an accurate source note
 * about a real object, a data table built from figures the lesson data states, or
 * a secondary passage written for this exam and labelled as such. If you want a
 * literal translated excerpt in a set, swap it into STIMULI and keep the items.
 */

'use strict';

const META = {
  code: 'FOUNDATIONS EXAM',
  title: 'Foundations Unit Exam',
  course: 'AP World History: Modern, BeHistorical',
  version: 'v1',
  questionCount: 40,
  pointsPerQuestion: 1,
  suggestedMinutes: 55,
  studentInstructions: [
    'This exam has 40 multiple-choice questions worth one point each.',
    'Part I asks what you know. Part II asks you to read a source and reason from it. Part III asks you to recognize good historical thinking, so read all four sentences before you choose.',
    'Every question has exactly one best answer. There is no penalty for a wrong answer, so answer every question.',
    'Suggested pacing: about 55 minutes. Part III takes longer per question than Part I, so do not spend your time unevenly.'
  ],
  parts: [
    {
      id: 'I',
      title: 'Part I: Foundations Knowledge',
      range: [1, 16],
      blurb: 'Questions 1 to 16. Choose the best answer. No sources are attached to these questions.'
    },
    {
      id: 'II',
      title: 'Part II: Source Analysis',
      range: [17, 32],
      blurb: 'Questions 17 to 32. Each group of questions refers to the source above it. Answer using the source and what you know from the Foundations unit.'
    },
    {
      id: 'III',
      title: 'Part III: Historical Thinking Skills',
      range: [33, 40],
      blurb: 'Questions 33 to 40. Each question names a historical thinking skill and a subject, then gives four sentences. Choose the sentence that actually performs that skill. All four sentences may be about the right subject, and more than one may be factually true, but only one performs the skill the question asks for.'
    }
  ]
};

/**
 * Stimuli. `familiar: true` means students met this source in a Foundations
 * lesson. `kind` drives how the renderers label it.
 */
const STIMULI = {
  nile: {
    id: 'nile',
    label: 'Source for questions 17 to 19',
    kind: 'image',
    familiar: true,
    title: 'The Nile River and its delta, photographed from orbit',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_River_and_delta_from_orbit.jpg',
    imageCredit: 'NASA, via Wikimedia Commons. Used in Foundations 1, Evidence Lab.',
    body: [
      'The photograph shows the Nile from space. A narrow ribbon of dark green vegetation follows the river for hundreds of kilometres, widening into a fan-shaped delta at the Mediterranean. On either side of that ribbon, in every direction, the land is the pale brown of the Sahara. The green is a few kilometres wide in places. The desert runs to the horizon.'
    ]
  },

  buddhismMap: {
    id: 'buddhismMap',
    label: 'Source for questions 20 to 22',
    kind: 'map',
    familiar: true,
    title: 'Map: the origin and spread of Buddhism across Asia',
    imageUrl: 'https://jeffandersonlogic.github.io/ap-world-history/assets/images/maps/foundations-2/buddhism-spread-asia.webp',
    imageCredit: 'World History Encyclopedia (worldhistory.org). Used in Foundations 2, Map and Geography Check.',
    body: [
      'A shaded block on the Gangetic plain marks the origin zone, 5th to 4th century BCE, with Bodh Gaya and Sarnath inside it. Coloured arrows leave that zone in three sets. Red arrows, from the 3rd century BCE, run south to Sri Lanka and then across the Bay of Bengal to the Pyu city-states, Bagan, and the Thai and Khmer mainland. Purple arrows, from the 1st century BCE or CE, run northwest through Gandhara and Bactria and then east along the Silk Road oases of Kashgar, Khotan, Kucha and Dunhuang into Han China, and later to Korea and Japan; a second purple track goes by sea to Champa, Funan and Srivijaya. Blue arrows, from the 7th century CE, leave the monastic universities of Nalanda, Vikramasila and Odantapura for Tibet, and much later for Mongolia. A pale band across Central Asia is labelled as the overland Silk Road and identified as a major conduit of transmission.',
      'The map carries its own note: dates mark the earliest known establishment or a strong presence, not continuous dominance; the arrows are broad pathways built from pilgrimage, trade, monastic networks, translation and royal patronage rather than single journeys; and the three traditions are drawn separately for clarity even though they developed gradually and overlapped in the same regions for centuries.'
    ]
  },

  cyrus: {
    id: 'cyrus',
    label: 'Source for questions 23 to 25',
    kind: 'sourcenote',
    familiar: false,
    title: 'Source note: the Cyrus Cylinder, Babylon, shortly after 539 BCE',
    imageUrl: '',
    imageCredit: '',
    body: [
      'The Cyrus Cylinder is a barrel-shaped clay object about 22 centimetres long, inscribed in Akkadian cuneiform and buried in the foundations of a building in Babylon shortly after Cyrus the Great took the city in 539 BCE. It is written in the first person, in the voice of the Persian king.',
      'In it, Cyrus presents himself as chosen by Marduk, the chief god of Babylon, and describes the defeated Babylonian king as a ruler who had neglected the gods and burdened his own people. Cyrus claims to have entered the city peacefully, restored damaged sanctuaries, returned images of gods that earlier rulers had carried off to their home cities, and allowed displaced people to go back to their own settlements.',
      'The cylinder was a foundation deposit. It was written by Babylonian scribes, in the Babylonian language, using the conventions Babylonian kings had used for centuries to announce a legitimate reign, and it was sealed into a wall rather than published.'
    ]
  },

  kilwa: {
    id: 'kilwa',
    label: 'Source for questions 26 and 27',
    kind: 'artifact',
    familiar: true,
    title: 'Artifact: Song dynasty celadon excavated at Kilwa, East African coast',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG',
    imageCredit: 'Honolulu Museum of Art, via Wikimedia Commons. Used in Foundations 4, Evidence Lab.',
    body: [
      'Chinese celadon pottery of the Song dynasty, 960 to 1279 CE, has been excavated at Kilwa on the coast of what is now Tanzania, roughly 7,000 kilometres from the kilns that produced it. Porcelain and stoneware sherds are among the most useful markers archaeologists have for this network: the glaze and body identify a kiln and a period, the material survives burial, and sherds turn up at nearly every Indian Ocean port that took part in the trade. Persian glass and Indian textiles appear in the same excavation layers at Kilwa. Gold and ivory from the African interior left through the same harbour.'
    ]
  },

  paper: {
    id: 'paper',
    label: 'Source for questions 28 to 30',
    kind: 'passage',
    familiar: false,
    attribution: 'Passage written for this exam.',
    title: 'Secondary source: how paper travelled',
    imageUrl: '',
    imageCredit: '',
    body: [
      'In 751 CE a Tang Chinese army and an Abbasid army met at Talas, in Central Asia, and the Tang force was defeated. Among the prisoners were craftsmen who made paper, a material so ordinary in Chang\'an that it was used for tax records, poetry drafts and wiping tables. Paper mills appear at Samarkand soon afterward, and paper is documented at Baghdad by 794 CE. Within a generation the Abbasid translation movement was copying Greek, Persian and Indian works at a scale that papyrus and parchment had never permitted: a parchment codex required the skins of a herd, while paper could be made from rags and plant fibre almost anywhere there was water. Paper reached Christian Europe through Islamic Spain around 1150 CE, three centuries before Gutenberg\'s press.',
      'Nothing about this transfer required a merchant to travel from China to Iraq. The overland routes worked as a relay: goods and people moved from one oasis city to the next, changing hands at each stage, with a Chinese trader selling to a Sogdian, a Sogdian to a Persian, a Persian to an Arab, and each intermediary taking a margin and assuming the risk of the next leg. What moved along the relay was whatever the people on it happened to be carrying, including skills, texts, seeds and disease.'
    ]
  },

  regions1200: {
    id: 'regions1200',
    label: 'Source for questions 31 and 32',
    kind: 'table',
    familiar: false,
    attribution: 'Table compiled for this exam from the Foundations unit.',
    title: 'Data: six regions at c.1200 CE',
    imageUrl: '',
    imageCredit: '',
    table: {
      head: ['Region', 'Scale the unit records', 'An institution operating by c.1200', 'Principal exchange network'],
      rows: [
        ['Song China', 'Lin\'an (Hangzhou) approaching 1.5 million; population over 100 million', 'Civil service examination; government-issued paper money', 'Indian Ocean, through Quanzhou'],
        ['Dar al-Islam', 'Not given', 'Madrasas funded by permanent waqf endowments', 'Silk Roads, Indian Ocean and trans-Saharan'],
        ['East Africa', 'Not given', 'Swahili coast port city-states such as Kilwa', 'Indian Ocean'],
        ['West Africa', 'Not given', 'Mali consolidating control of trans-Saharan gold routes', 'Trans-Saharan'],
        ['The Americas', 'Cahokia 10,000 to 20,000, the largest city north of Mexico', 'Post-Toltec Mesoamerican city-state competition', 'Regional networks reaching the Gulf Coast'],
        ['Europe', 'Not given', 'First universities: Bologna 1088, Paris c.1150, Oxford c.1167', 'Mediterranean']
      ]
    },
    body: []
  }
};

/**
 * The 40 items. `answer` is a zero-based index into `choices`.
 */
const ITEMS = [

  // ── Part I: Foundations Knowledge ─────────────────────────────────────────

  {
    n: 1, part: 'I', day: 'F1', skill: 'Recall', type: 'traditional', stimulus: null,
    stem: 'The Neolithic Agricultural Revolution is best defined as',
    choices: [
      'the migration of hunter-forager bands out of Africa and across Eurasia.',
      'the shift from hunting and gathering to settled agriculture.',
      'the invention of writing in order to record surplus grain.',
      'the domestication of the camel, which opened desert trade routes.'
    ],
    answer: 1,
    rationale: 'The definition the unit uses: the shift, beginning about 10,000 years ago, from hunting and gathering to settled agriculture. It happened independently in several regions.',
    trap: 'Writing is a consequence of the surplus farming produced, not the revolution itself. The camel saddle belongs to Foundations 4 and is roughly 9,700 years later.'
  },
  {
    n: 2, part: 'I', day: 'F1', skill: 'Recall', type: 'traditional', stimulus: null,
    stem: 'Which combination of geographic conditions best explains why agriculture began in the Fertile Crescent rather than in the surrounding regions?',
    choices: [
      'Accessible gold deposits, nearby salt mines, and established caravan routes.',
      'High altitude, terraced slopes, and herds of domesticable llamas.',
      'Deep natural harbours, predictable coastal winds, and dense hardwood forests suitable for building ships and ploughs.',
      'Fresh water for irrigation, fertile soil, and the wild ancestors of domesticable plants and animals.'
    ],
    answer: 3,
    rationale: 'The Fertile Crescent held the wild ancestors of wheat, barley, sheep and goats, and its rivers supplied water and renewed the soil. Geography, not accident, put the raw material of farming there.',
    trap: 'The gold, salt and caravan answer describes trans-Saharan trade thousands of years later. The llama answer describes the Andes.'
  },
  {
    n: 3, part: 'I', day: 'F1', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'An agricultural surplus most directly enabled which of the following?',
    choices: [
      'Job specialization, because not everyone had to farm.',
      'A more varied and nutritious diet than foraging had provided.',
      'The end of patriarchy and hereditary social class.',
      'Nomadic pastoralism on the Eurasian steppe.'
    ],
    answer: 0,
    rationale: 'Surplus is the hinge of the whole unit: if not everyone must farm, some people can do something else, and specialization, government, writing, class and organized religion follow.',
    trap: 'The diet answer is the reverse of what the unit says. Farming produced a more reliable food supply, not a more varied or healthier one. Surplus concentrated power rather than ending hierarchy, and pastoralism was the alternative path taken where farming was not possible.'
  },
  {
    n: 4, part: 'I', day: 'F1', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'Pastoralism developed as a way of life primarily in environments that',
    choices: [
      'were cut off from contact with settled agricultural societies.',
      'received too much rainfall for grain to ripen.',
      'were too dry and open to support reliable farming.',
      'had no domesticable animal species at all.'
    ],
    answer: 2,
    rationale: 'The Eurasian steppe runs roughly 8,000 kilometres from Hungary to Manchuria and is too dry for dependable agriculture, so its people herded animals across seasonal ranges instead.',
    trap: 'The isolation answer inverts the point. Mobility meant constant contact, which is exactly why pastoralists carried goods, tools and ideas between settled societies.'
  },
  {
    n: 5, part: 'I', day: 'F2', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'Confucianism became the content of China\'s civil service examination primarily because it',
    choices: [
      'promised salvation after death to anyone who studied its scriptures, regardless of birth or wealth.',
      'rejected the emperor\'s authority in favour of local self-rule.',
      'prized education and merit and defined duties within a hierarchy of relationships.',
      'taught wu wei, effortless action, as the correct principle of government.'
    ],
    answer: 2,
    rationale: 'A philosophy that valued study and defined the ruler-and-subject bond as reciprocal duty could be turned into a recruitment system. Passing required mastery of the Confucian classics, so every official shared one ethical vocabulary and one definition of loyalty.',
    trap: 'Wu wei is Daoist, and universal salvation is Buddhist. Both are in the unit, which is what makes them tempting.'
  },
  {
    n: 6, part: 'I', day: 'F2', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'Buddhism spread far beyond South Asia while Hinduism remained more rooted there largely because Buddhism',
    choices: [
      'was carried outward by the armies of rulers who conquered neighbouring kingdoms and imposed it.',
      'offered a path to enlightenment open to anyone regardless of caste.',
      'rejected monasteries, which made it cheaper to spread.',
      'was adopted as the official religion of the Roman Empire.'
    ],
    answer: 1,
    rationale: 'The Four Noble Truths and the path to nirvana were open to all castes. That universality travelled in a way a belief system woven into the varna order did not.',
    trap: 'Monasteries were central to the spread, not rejected by it: merchants funded them and monks staffed them. Rome adopted Christianity.'
  },
  {
    n: 7, part: 'I', day: 'F2', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'After Rome destroyed the Second Temple in 70 CE, Jewish worship shifted toward the synagogue, the study of Torah, and the authority of rabbis. This shift mattered historically because it',
    choices: [
      'ended Jewish participation in the long-distance trade of the Mediterranean and the Indian Ocean.',
      'merged Judaism with early Christianity.',
      'converted much of the Roman elite to Judaism.',
      'made Jewish religious life portable across the diaspora.'
    ],
    answer: 3,
    rationale: 'A community now needed a text, a teacher and a quorum rather than a temple in one city, which is why the tradition survived a dispersal that ended other ancient religions.',
    trap: 'The trade answer is backwards. Shared law and language let Radhanite merchants trade between the Islamic and Christian worlds, a religious network doing economic work.'
  },
  {
    n: 8, part: 'I', day: 'F2', skill: 'Recall', type: 'traditional', stimulus: null,
    stem: 'Chan Buddhism absorbing Daoist aesthetics in China, Islam in Mali retaining Mande griot traditions, and Ethiopian Christianity maintaining its own biblical canon are all examples of',
    choices: [
      'syncretism.',
      'state adoption of a religion.',
      'missionary conquest.',
      'monotheism.'
    ],
    answer: 0,
    rationale: 'Syncretism is the blending of a travelling belief system with local practice, producing a genuine hybrid. There is no single pure version of any of these traditions, only historically located ones.',
    trap: 'State adoption is a mechanism of spread, which is a different question from what happened to the belief system once it arrived.'
  },
  {
    n: 9, part: 'I', day: 'F3', skill: 'Recall', type: 'traditional', stimulus: null,
    stem: 'The Mandate of Heaven functioned as a tool of rule in Han China because it',
    choices: [
      'made dynastic authority hereditary and unconditional, so that once a house held the throne it could not lawfully be removed.',
      'granted the emperor divine status equal to that of the gods.',
      'tied legitimacy to just rule and treated disaster or rebellion as evidence that Heaven had withdrawn it.',
      'gave officials lifetime tenure regardless of their performance.'
    ],
    answer: 2,
    rationale: 'Heaven granted authority to just rulers and withdrew it from bad ones, so dynastic rule was cosmically conditional. That legitimized a good dynasty and, as the Yellow Turbans showed in 184 CE, supplied the language of rebellion against a failing one.',
    trap: 'Unconditional authority is precisely what the Mandate is not, and the emperor is Heaven\'s appointee rather than a god.'
  },
  {
    n: 10, part: 'I', day: 'F3', skill: 'Comparison', type: 'traditional', stimulus: null,
    stem: 'Rome\'s gradual extension of citizenship differed from Persian and Han practice because it',
    choices: [
      'gave conquered peoples a legal stake in the state that ruled them.',
      'abolished slavery throughout the provinces.',
      'required conquered peoples to abandon their local religions and adopt the imperial cult of the emperor.',
      'selected provincial officials by written examination.'
    ],
    answer: 0,
    rationale: 'Neither Persia nor Han China used citizenship as an integrating tool. Rome did, and shared law plus expanding citizenship gave distant provinces a reason to stay in.',
    trap: 'Rome rested heavily on coercion and slavery: Spartacus led more than 70,000 enslaved people in revolt between 73 and 71 BCE. Written examination is the Han answer.'
  },
  {
    n: 11, part: 'I', day: 'F3', skill: 'Recall', type: 'traditional', stimulus: null,
    stem: 'Athenian democracy in the fifth century BCE is best described as',
    choices: [
      'representative government in which all adult residents of the city elected officials to speak for them in the assembly.',
      'direct rule by free adult male citizens, excluding women, enslaved people and resident foreigners.',
      'an oligarchy in which a small militarized elite governed.',
      'rule by a King of Kings who delegated authority to regional governors.'
    ],
    answer: 1,
    rationale: 'Citizens debated and voted in person on the Pnyx. Power was genuinely shared, but among perhaps one in five of the people who lived in Athens.',
    trap: 'The oligarchy answer describes Sparta, and the King of Kings answer describes Achaemenid Persia. Both are in the same lesson.'
  },
  {
    n: 12, part: 'I', day: 'F4', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'The Indian Ocean trade network depended most directly on',
    choices: [
      'a network of caravanserais offering shelter and water.',
      'Roman roads linking Mediterranean ports to the interior.',
      'the North Arabian camel saddle.',
      'monsoon winds that reverse direction with the seasons.'
    ],
    answer: 3,
    rationale: 'The southwest monsoon, June to September, drove ships east and north, and the northeast monsoon, November to March, carried them back. That reversal was a built-in round-trip schedule, which is why this became the world\'s first sustained maritime trade network.',
    trap: 'Camel saddles and caravanserais are real, and both belong to the overland networks in the same lesson.'
  },
  {
    n: 13, part: 'I', day: 'F4', skill: 'Causation', type: 'traditional', stimulus: null,
    stem: 'The adoption of the North Arabian camel saddle, around 300 CE, mattered because it',
    choices: [
      'turned the Sahara from a barrier into a trade corridor.',
      'carried papermaking technology into the Islamic world.',
      'made two rice harvests a year possible in the Yangtze Delta.',
      'allowed ships to sail against the monsoon for the first time.'
    ],
    answer: 0,
    rationale: 'The saddle let camels carry 200 to 300 kilograms, cover 30 to 40 kilometres a day, and go five to seven days without water, which converted 9.2 million square kilometres of desert into a caravan network linking West African gold to Saharan salt and Mediterranean markets.',
    trap: 'Papermaking travelled through the Battle of Talas in 751 CE, and double-cropping came from Champa rice. Both are in the same lesson, and both are technology-transfer stories, which is what makes them plausible here.'
  },
  {
    n: 14, part: 'I', day: 'F5', skill: 'Comparison', type: 'traditional', stimulus: null,
    stem: 'Which statement best describes Europe\'s position in the world at c.1200?',
    choices: [
      'Cut off from Mediterranean commerce and from contact with the Islamic world.',
      'The wealthiest and most commercially sophisticated region on earth.',
      'Peripheral by most economic and intellectual measures compared with Dar al-Islam and East Asia.',
      'Politically unified under a single Christian empire governing from the Atlantic coast to the Black Sea and the Baltic.'
    ],
    answer: 2,
    rationale: 'The first universities were founded and the Crusades were stimulating Mediterranean commerce, but by almost any measure Europe in 1200 was peripheral relative to the Islamic world and East Asia. Its transformation is the story of Units 3 through 9, and it has not happened yet.',
    trap: 'The isolation answer overcorrects. Europe was peripheral, not disconnected, and Crusade-era Mediterranean trade is the proof.'
  },
  {
    n: 15, part: 'I', day: 'F5', skill: 'Comparison', type: 'traditional', stimulus: null,
    stem: 'The Americas at c.1200 differed from Afro-Eurasia most significantly in that they',
    choices: [
      'had developed no systems of writing or record-keeping of any kind.',
      'developed complex societies without horses, large draft animals, or exposure to the Eurasian disease pool.',
      'were ruled by a single empire whose authority stretched from Cahokia on the Mississippi to the Andean highlands.',
      'contained no cities and no long-distance exchange.'
    ],
    answer: 1,
    rationale: 'Complex societies developed in complete geographic isolation from Afro-Eurasia. The absence of horses and large draft animals shaped what states could build, and the absence of the Eurasian disease reservoir is what made 1492 catastrophic.',
    trap: 'Cahokia held 10,000 to 20,000 people and traded to the Gulf Coast, so the no-cities answer fails on the unit\'s own evidence. The Inca did not begin consolidating until about 1438.'
  },
  {
    n: 16, part: 'I', day: 'F5', skill: 'CCOT', type: 'traditional', stimulus: null,
    stem: 'Which statement best describes Dar al-Islam at c.1200?',
    choices: [
      'In steep intellectual decline, since the collapse of the madrasa system and its waqf endowments had ended organized scholarship across the Islamic world.',
      'Confined to the Arabian peninsula and excluded from Indian Ocean trade.',
      'Politically unified under an Abbasid caliph who held both religious and military power.',
      'Politically fragmented, with the Abbasid caliph holding symbolic authority while Seljuk Turks governed, yet intellectually at a peak.'
    ],
    answer: 3,
    rationale: 'The caliph had not held real military power for two centuries, yet Ibn Rushd was finishing his commentaries on Aristotle in Cordoba and Maimonides was writing in Cairo. Madrasas funded by permanent waqf endowments sustained scholarship independent of political upheaval, which is why fragmentation and brilliance coexisted.',
    trap: 'The waqf endowment is exactly what kept scholarship going through political disorder, so the decline answer inverts the mechanism.'
  },

  // ── Part II: Source Analysis ──────────────────────────────────────────────

  {
    n: 17, part: 'II', day: 'F1', skill: 'Contextualization', type: 'sbmc', stimulus: 'nile',
    stem: 'The image most directly supports which claim about early agriculture?',
    choices: [
      'Farming spread outward from a single point of origin in the Nile valley to the other river valleys of Afro-Eurasia.',
      'Geographic conditions concentrated agriculture into a narrow zone within an otherwise hostile environment.',
      'Desert environments were as productive for farming as river floodplains.',
      'Egyptian farmers depended on rainfall rather than on river water.'
    ],
    answer: 1,
    rationale: 'What the photograph shows is a few kilometres of green inside a continent of desert. That is the argument: geography decided where farming was possible and where it was not.',
    trap: 'The single-origin answer contradicts the unit, which stresses that domestication happened independently in several regions with no contact between them.'
  },
  {
    n: 18, part: 'II', day: 'F1', skill: 'Causation', type: 'sbmc', stimulus: 'nile',
    stem: 'Which mechanism best explains why the green zone visible in the image could support cities while the surrounding land could not?',
    choices: [
      'The river\'s annual flood supplied irrigation water and deposited fertile soil across the floodplain each year.',
      'The deserts on either side sheltered the floodplain from invasion, which allowed its population to grow undisturbed for centuries.',
      'The delta gave Egyptian farmers direct access to Mediterranean grain markets.',
      'The river allowed farmers to move their fields whenever soil fertility declined.'
    ],
    answer: 0,
    rationale: 'Water for irrigation plus alluvial soil renewed by flooding is the specific mechanism. Surplus grain, and then cities, followed from it.',
    trap: 'The desert did insulate Egypt, and that is in the unit, but insulation does not grow food. The question asks what made the land productive.'
  },
  {
    n: 19, part: 'II', day: 'F1', skill: 'Argumentation', type: 'sbmc', stimulus: 'nile',
    stem: 'A historian uses this image to argue that geography is a cause but not a destiny. Which addition to the argument best supports that distinction?',
    choices: [
      'Noting that the Sahara later became a corridor for camel caravans.',
      'Noting that the Nile flood was more predictable than the flooding of the Tigris and Euphrates.',
      'Noting that the other great river valleys, including the Indus and the Huang He, produced early civilizations of their own on the same pattern.',
      'Noting that the same floodplain supported a state only once people organized irrigation works, labour and the storage of grain.'
    ],
    answer: 3,
    rationale: 'Geography decided where the Neolithic Revolution could happen. Human choices decided what was built on top of it, and organizing irrigation, labour and storage is where those choices become visible.',
    trap: 'The other-river-valleys answer strengthens the geographic claim rather than qualifying it, which is the opposite of what the question asks.'
  },
  {
    n: 20, part: 'II', day: 'F2', skill: 'Causation', type: 'sbmc', stimulus: 'buddhismMap',
    stem: 'The routes shown on the map indicate that Buddhism spread principally through',
    choices: [
      'maritime routes alone, since the overland passes were impassable.',
      'the conquests of Buddhist rulers over neighbouring states.',
      'merchants, monks, pilgrims, translators and rulers who funded monasteries.',
      'the forced resettlement of Buddhist populations into new territories by imperial governments.'
    ],
    answer: 2,
    rationale: 'The map identifies pilgrimage, trade, monastic networks, translation and royal patronage as the pathways. Buddhism spread not by conquest but along the infrastructure trade had already built.',
    trap: 'The maritime-only answer is contradicted by the purple arrows running through Kashgar, Khotan, Kucha and Dunhuang, and by the labelled Silk Road band itself.'
  },
  {
    n: 21, part: 'II', day: 'F2', skill: 'Sourcing', type: 'sbmc', stimulus: 'buddhismMap',
    stem: 'The map notes that its dates mark the earliest known establishment or a strong presence rather than continuous dominance. A student who ignores that note is most likely to conclude, incorrectly, that',
    choices: [
      'Buddhism became the majority religion of each region in the century its arrow is dated.',
      'the three traditions differed from one another in doctrine and practice.',
      'the Silk Road carried religious as well as commercial traffic.',
      'Buddhism was established in Sri Lanka roughly 1,500 years before it was established in Mongolia.'
    ],
    answer: 0,
    rationale: 'An establishment date says a tradition arrived, not that it prevailed or that it stayed. That is the difference between what a map can show and what a student wants it to say.',
    trap: 'The other three statements are all things the map does support, which is why the question is about reading limits rather than reading content.'
  },
  {
    n: 22, part: 'II', day: 'F2', skill: 'Argumentation', type: 'sbmc', stimulus: 'buddhismMap',
    stem: 'The blue Vajrayana arrows begin at Nalanda, Vikramasila and Odantapura, which were monastic universities, rather than at a founder\'s birthplace. This detail best supports which claim about belief systems?',
    choices: [
      'Belief systems change only when a new founder appears.',
      'Belief systems operated as institutions capable of generating and exporting new traditions.',
      'Belief systems spread fastest where political authority was weakest.',
      'Belief systems required the sponsorship of a state before they could cross a political border at all.'
    ],
    answer: 1,
    rationale: 'This is the central move of Foundations 2: treat belief systems as institutions that ran schools, trained personnel and funded transmission, not only as private faith. A tradition originating in a set of universities is that claim in visible form.',
    trap: 'State sponsorship mattered a great deal, and Ashoka and Constantine are both in the unit, but this particular detail is evidence for institutions rather than for states.'
  },
  {
    n: 23, part: 'II', day: 'F3', skill: 'Causation', type: 'sbmc', stimulus: 'cyrus',
    stem: 'The claims Cyrus makes in the cylinder were most useful to him as a solution to which governance problem?',
    choices: [
      'Recruiting officials capable of administering a distant province without day-to-day supervision from the capital.',
      'Defending a frontier against mobile pastoralist raiders.',
      'Extracting tribute from provinces at a distance from the capital.',
      'Making Persian rule appear legitimate to a conquered population with its own gods and traditions.'
    ],
    answer: 3,
    rationale: 'Presenting himself as chosen by Babylon\'s own chief god, and as the restorer of Babylonian sanctuaries, addresses legitimacy specifically. It tells Babylonians that Persian rule continues their order rather than replacing it.',
    trap: 'Extraction, administration and defence are all genuine state problems from this lesson, but nothing in a religious foundation deposit collects a tax or garrisons a border.'
  },
  {
    n: 24, part: 'II', day: 'F3', skill: 'Sourcing', type: 'sbmc', stimulus: 'cyrus',
    stem: 'Which is the strongest sourcing statement about this object?',
    choices: [
      'The cylinder proves Cyrus was more tolerant than other ancient conquerors.',
      'The cylinder is unreliable because all royal inscriptions are propaganda.',
      'Written by the new king\'s own scribes in Babylonian convention and buried in a wall, it is better evidence for how Persian rule wished to be seen than for how it was experienced.',
      'The cylinder is a primary source written at the time by people present in Babylon, so its account of Cyrus entering the city peacefully can be accepted as an accurate record of events.'
    ],
    answer: 2,
    rationale: 'Sourcing asks who made it, when, why and for whom, and then states what that makes the object good evidence for. Here the answer is royal self-presentation, and the conventional Babylonian form and the burial context are what establish it.',
    trap: 'Calling it unreliable is dismissal, not sourcing. It rules the source out instead of specifying what it can be used to show, and a historian who does that has thrown away the evidence.'
  },
  {
    n: 25, part: 'II', day: 'F3', skill: 'Comparison', type: 'sbmc', stimulus: 'cyrus',
    stem: 'The approach to conquered peoples described in the cylinder was carried into Persian administration chiefly through',
    choices: [
      'satrapies, whose governors collected tribute while local laws, languages and religions continued.',
      'an examination system that recruited officials from conquered populations by merit.',
      'the extension of Persian citizenship to the peoples of each new province.',
      'the resettlement of conquered populations into planned administrative cities built near the imperial capital.'
    ],
    answer: 0,
    rationale: 'Tolerance was a governing strategy rather than a kindness, and the satrapy is the institution that made it operational: delegate, take tribute, leave local custom in place, and lower the incentive to rebel.',
    trap: 'Examinations are the Han answer and citizenship is the Roman one. Both appear in this lesson, and both are the wrong empire.'
  },
  {
    n: 26, part: 'II', day: 'F4', skill: 'Argumentation', type: 'sbmc', stimulus: 'kilwa',
    stem: 'Which conclusion does this evidence most strongly support?',
    choices: [
      'Kilwa\'s wealth came primarily from manufacturing goods for export.',
      'Chinese merchant fleets established permanent trading colonies along the East African coast during the Song period.',
      'Kilwa was an active participant in an exchange system that linked East Africa to China.',
      'East African rulers preferred Chinese goods to goods produced anywhere else.'
    ],
    answer: 2,
    rationale: 'Datable sherds 7,000 kilometres from their kilns, alongside Persian glass and Indian textiles, place Kilwa inside a functioning four-continent network. The unit\'s point about entrepots is that their wealth came from position rather than production.',
    trap: 'The manufacturing answer reverses the entrepot principle, and permanent Chinese colonies are more than the sherds can establish.'
  },
  {
    n: 27, part: 'II', day: 'F4', skill: 'Sourcing', type: 'sbmc', stimulus: 'kilwa',
    stem: 'Which is the most significant limitation of porcelain sherds as evidence about this trade network?',
    choices: [
      'Porcelain can be dated only to within several centuries, so the chronology remains unclear.',
      'They show that goods arrived but not who carried them, through how many hands, or what travelled alongside them.',
      'Porcelain rarely survives burial, so surviving sherds are unrepresentative.',
      'Porcelain was too valuable to be traded commercially, so its presence must be explained by diplomatic gift exchange between rulers.'
    ],
    answer: 1,
    rationale: 'Material evidence is excellent for the fact of connection and silent about mechanism. Relay trade means the object arrived without any single carrier making the whole journey, and the ideas, crops and diseases moving alongside it leave no sherd.',
    trap: 'The dating answer and the survival answer both contradict the source note, which says the glaze and body identify a kiln and a period and that the material survives burial.'
  },
  {
    n: 28, part: 'II', day: 'F4', skill: 'CCOT', type: 'sbmc', stimulus: 'paper',
    stem: 'The passage best supports which generalization about technology transfer?',
    choices: [
      'Technology moved most readily between societies that shared a religion, since religious networks supplied the trust and the shared language technical exchange required.',
      'Technology moved westward from China but almost never in the other direction.',
      'Technology moved only where states deliberately sponsored its transfer.',
      'Technology moved through conflict as well as through commerce, and often by way of ordinary practitioners rather than officials or scholars.'
    ],
    answer: 3,
    rationale: 'A captured craftsman is the mechanism in this case, and the relay described in the second paragraph is the mechanism in most others. Neither requires a state programme.',
    trap: 'The one-direction answer fails against the same lesson: horses, glassware, cotton textiles, spices and silver moved east toward China along the same routes.'
  },
  {
    n: 29, part: 'II', day: 'F4', skill: 'Causation', type: 'sbmc', stimulus: 'paper',
    stem: 'According to the passage, what is the mechanism linking the capture of papermakers at Talas to the scale of the Abbasid translation movement?',
    choices: [
      'Paper could be produced from rags and plant fibre, which made copying texts far cheaper than parchment allowed.',
      'The prisoners were scholars who brought Greek and Indian works with them.',
      'Abbasid rulers taxed paper and used the revenue to fund translation.',
      'Paper was more durable than parchment, so a far greater number of Greek and Indian texts survived long enough to be translated.'
    ],
    answer: 0,
    rationale: 'The passage states the comparison directly: a parchment codex required the skins of a herd, while paper could be made almost anywhere there was water. Cost per copy is the causal link, and causation on this exam means naming a mechanism.',
    trap: 'The durability answer sounds reasonable and is not in the passage. Parchment is in fact the more durable material; the advantage of paper was cheapness.'
  },
  {
    n: 30, part: 'II', day: 'F4', skill: 'Contextualization', type: 'sbmc', stimulus: 'paper',
    stem: 'The passage\'s description of the relay best explains why',
    choices: [
      'Silk Road goods were more expensive at each successive stage of the route.',
      'the same routes that carried cargo also carried skills, religions, crops and disease.',
      'no state along the overland routes was able to tax the trade passing through it effectively.',
      'Chinese merchants controlled the profits of the entire overland network.'
    ],
    answer: 1,
    rationale: 'The last sentence is the unit\'s non-goods principle: what moved along the relay was whatever the people on it happened to be carrying. The passage is set up so that the papermaker and the principle explain each other.',
    trap: 'Prices did rise at each stage, since every intermediary took a margin, so that answer is true. It is simply not what the relay description is being used to explain here, and this is the kind of question where a true statement is the wrong answer.'
  },
  {
    n: 31, part: 'II', day: 'F5', skill: 'Comparison', type: 'sbmc', stimulus: 'regions1200',
    stem: 'The table best supports which claim about the world at c.1200?',
    choices: [
      'The largest cities and the densest commercial institutions lay in Asia and Africa rather than in Europe.',
      'Regions that founded universities developed faster than regions that relied on other kinds of religious school.',
      'The Americas were the only region without complex political organization.',
      'All six regions were joined into a single exchange network.'
    ],
    answer: 0,
    rationale: 'Lin\'an approaching 1.5 million against Cahokia at 10,000 to 20,000, and paper money and waqf-funded madrasas against three new universities, is the comparative picture the unit wants students carrying into Unit 1.',
    trap: 'The single-network answer overreaches in a specific way: the Americas column shows regional networks reaching the Gulf Coast, not participation in the Afro-Eurasian system.'
  },
  {
    n: 32, part: 'II', day: 'F5', skill: 'Argumentation', type: 'sbmc', stimulus: 'regions1200',
    stem: 'Which conclusion goes beyond what this table can show?',
    choices: [
      'Kilwa and Mali owed their positions to different exchange networks.',
      'The unit records population figures for some regions and not for others.',
      'Song China had commercial institutions that none of the other regions in the table are recorded as having.',
      'Europe\'s new universities already gave it an intellectual advantage over Dar al-Islam by c.1200.'
    ],
    answer: 3,
    rationale: 'The table lists institutions; it does not measure intellectual output. On the unit\'s own account the comparison runs the other way at this date, with Ibn Rushd in Cordoba and Maimonides in Cairo, but the point of the question is that the table alone cannot settle it either way.',
    trap: 'The observation about missing population figures is a remark on the table\'s gaps rather than a conclusion drawn past its evidence, so it is supported rather than unsupported.'
  },

  // ── Part III: Historical Thinking Skills ──────────────────────────────────

  {
    n: 33, part: 'III', day: 'F1', skill: 'Causation', type: 'hts', stimulus: null,
    stem: 'CAUSATION. Which of the following is the strongest causation statement about the rise of the first river-valley civilizations?',
    choices: [
      'The first civilizations arose in Mesopotamia along the Tigris and Euphrates, in Egypt along the Nile, in the Indus valley, and along the Huang He in northern China, all within a span of roughly two thousand years.',
      'The first river-valley civilizations were among the most important developments in world history.',
      'Annual floods deposited fertile soil that produced grain surpluses, which freed part of the population from farming and made specialized labour, government and the first cities possible.',
      'Because geography determines the course of human history, civilization had to begin in river valleys.'
    ],
    answer: 2,
    rationale: 'Causation requires a mechanism, not a list and not a verdict. The correct answer traces flood to soil to surplus to specialization to cities, so each step explains the next.',
    trap: 'The determinism option is the one to watch. It uses causal language and reaches the right destination, but it asserts that geography decides history, which the unit explicitly rejects: geography is cause, not destiny.'
  },
  {
    n: 34, part: 'III', day: 'F4', skill: 'Causation', type: 'hts', stimulus: null,
    stem: 'CAUSATION. Which of the following is a valid causation statement about the Plague of Justinian, rather than a statement of correlation or of consequence alone?',
    choices: [
      'The Plague of Justinian and the peak of Indian Ocean grain shipping into Egypt both occurred during the sixth century CE, within a few decades of one another.',
      'Grain ships carried rats, whose fleas carried the plague bacillus, so the network that fed Constantinople also delivered the epidemic that emptied it.',
      'The Eastern Roman Empire lost an estimated 25 to 50 million people to the plague.',
      'Long-distance trade networks always endanger the societies that build them.'
    ],
    answer: 1,
    rationale: 'The correct answer names a vector chain and connects the infrastructure to the outcome. That is a cause with a mechanism.',
    trap: 'The shared-century option is the classic correlation trap. The casualty figure is real and specific but reports an effect without naming a cause. The "always endanger" option generalizes from one case into a rule.'
  },
  {
    n: 35, part: 'III', day: 'F5', skill: 'CCOT', type: 'hts', stimulus: null,
    stem: 'CONTINUITY AND CHANGE OVER TIME. Which of the following is the strongest CCOT statement about Afro-Eurasian trade across the year 1200?',
    choices: [
      'Trade after 1200 was more advanced than trade before 1200.',
      'Everything about Afro-Eurasian trade changed once the Mongols unified the steppe and opened a single secure corridor running from the Pacific to the Black Sea, so that the commerce of the previous era no longer resembled what came after it in any important respect.',
      'Afro-Eurasian trade did not really change, because merchants had always moved goods between distant regions.',
      'The Silk Roads, the Indian Ocean system and the trans-Saharan routes were already centuries old by 1200, so what changed afterward was the political security, volume and speed of exchange rather than the existence of the networks themselves.'
    ],
    answer: 3,
    rationale: 'CCOT needs a baseline and a comparison point, and it has to name both what held and what shifted. Foundations exists to build that baseline: the Mongols pacified a network already 1,400 years old rather than creating one.',
    trap: 'Two of the wrong answers are the mirrored absolutes the unit warns about, everything changed and nothing changed. The "more advanced" option substitutes a judgment about progress for a description of change, which the unit flags directly.'
  },
  {
    n: 36, part: 'III', day: 'F3', skill: 'Comparison', type: 'hts', stimulus: null,
    stem: 'COMPARISON. Which of the following is the strongest comparison statement about how Achaemenid Persia and Han China administered their territories?',
    choices: [
      'Persia governed through satrapies whose governors collected tribute for the King of Kings, while Han China governed through a bureaucracy of officials increasingly selected for their education rather than for their noble birth, and both empires maintained road systems that carried armies and official messages across great distances.',
      'Persia and Han China were both large ancient empires ruled by a single monarch.',
      'Both had to administer populations far from the capital, but Persia delegated to satraps who left local law and religion intact while the Han centralized through officials trained in one curriculum, so Persia purchased stability with local autonomy and the Han purchased it with uniformity.',
      'Persia was more tolerant than Han China, which made it the more successful empire.'
    ],
    answer: 2,
    rationale: 'AP comparison needs a shared analytical category, a specific difference, evidence on both sides, and a sentence saying why the difference matters. The correct answer supplies all four.',
    trap: 'The option naming satrapies alongside the Han bureaucracy is the most tempting, because everything in it is accurate. It sets two facts side by side with no category and no analysis, which is the single most common way a comparison answer loses credit.'
  },
  {
    n: 37, part: 'III', day: 'F5', skill: 'Contextualization', type: 'hts', stimulus: null,
    stem: 'CONTEXTUALIZATION. Which of the following performs contextualization for an argument about Song China\'s prosperity, rather than merely introducing the topic?',
    choices: [
      'Song China existed during a long period of Confucian tradition in East Asia, a tradition that had shaped Chinese government, family life, education and law since the Han dynasty and that went on shaping them under the Song and for centuries afterward.',
      'When Jurchen Jin forces drove the Song court south in 1127, they placed the government in the Yangtze Delta, the world\'s most productive wet-rice zone, where double-cropped Champa rice fed a population approaching 100 million and customs revenue at Quanzhou funded the state.',
      'Song China was one of many important civilizations that students of world history study, alongside the Islamic caliphates, the kingdoms of West Africa, the states of South and Southeast Asia, and the societies of the Americas.',
      'This response will explain the reasons for Song China\'s prosperity at c.1200.'
    ],
    answer: 1,
    rationale: 'Contextualization explains a connection. The correct answer names an event, states its geographic consequence, identifies the agricultural mechanism, and links the surplus to the commercial outcome the argument is about.',
    trap: 'The sentence about a long period of Confucian tradition is the near miss. It names a genuine background condition and stops there, without explaining how that condition shaped the thing being argued.'
  },
  {
    n: 38, part: 'III', day: 'F4', skill: 'Sourcing', type: 'hts', stimulus: null,
    stem: 'SOURCING. A historian examines the Catalan Atlas, drawn in Mallorca in 1375, which shows Mali\'s Mansa Musa enthroned holding a gold nugget as a camel-mounted Saharan trader approaches. Which of the following is the strongest sourcing statement?',
    choices: [
      'Because a European mapmaker drew it in Mallorca decades after Mansa Musa\'s reign, the atlas is stronger evidence for how Mali\'s wealth was understood in Mediterranean Europe than for practice at the Malian court.',
      'The atlas cannot be trusted, because Europeans knew little about West Africa.',
      'The atlas is a primary source from the period, so its depiction of the Malian court can be taken as accurate.',
      'The atlas proves that the ruler of Mali personally controlled most of the gold circulating in the medieval world, since a European mapmaker with access to merchant reports chose to depict him enthroned and holding a nugget of it.'
    ],
    answer: 0,
    rationale: 'Sourcing states who made it, when and for whom, and then converts that into a claim about what the source is good evidence for. Point of view here turns a limitation into a usable finding about European perceptions.',
    trap: 'The "cannot be trusted" option is the trap that costs students most often, because refusing a source feels like caution. Dismissal is not sourcing, and the atlas remains excellent evidence for something, just not for what it depicts.'
  },
  {
    n: 39, part: 'III', day: 'F4', skill: 'Argumentation', type: 'hts', stimulus: null,
    stem: 'ARGUMENTATION. Which of the following is a defensible thesis about Afro-Eurasian trade before c.1200, rather than a summary or a description?',
    choices: [
      'The Silk Roads were one of the most important developments in all of world history.',
      'Trade networks before c.1200 moved goods, people, ideas, crops and diseases across Afro-Eurasia, connecting societies from the Mediterranean and West Africa to South Asia, Southeast Asia and China, in some cases over distances of many thousands of kilometres.',
      'Three major networks connected Afro-Eurasia before c.1200: the Silk Roads, the Indian Ocean system and the trans-Saharan routes.',
      'Between roughly 300 and 1200 CE the most consequential cargo on Afro-Eurasian routes was institutional rather than material, since shared commercial law and portable credit expanded exchange more than any single commodity did.'
    ],
    answer: 3,
    rationale: 'A thesis takes a position someone could argue against, and this one can be contested by pointing to the commodities themselves. It also tells the reader what the essay will have to prove.',
    trap: 'The sentence listing what trade moved is the hardest to reject, because it is accurate, specific and sounds like a claim. Nobody in the course would dispute it, and a sentence nobody can disagree with is not a thesis.'
  },
  {
    n: 40, part: 'III', day: 'F3', skill: 'Causation', type: 'hts', stimulus: null,
    stem: 'CAUSATION. Which of the following best explains why the Han suppression of the Yellow Turban Rebellion contributed to the dynasty\'s collapse by 220 CE?',
    choices: [
      'The rebellion of 184 CE killed the Han emperor and left no successor.',
      'The Han had lost the Mandate of Heaven, which caused the dynasty to fall.',
      'To defeat a rising of some 400,000 peasants the Han empowered regional warlords, whose private armies then became the instruments that broke the empire apart.',
      'The rebellion of 184 CE was caused by over-taxation, corruption at the imperial court, and the decay of the flood-control works on which peasant agriculture depended.'
    ],
    answer: 2,
    rationale: 'The question asks how the suppression contributed to the collapse, so the answer has to trace the cure becoming the disease: the warlords who saved the dynasty then dismantled it.',
    trap: 'The over-taxation option is accurate and comes straight from the lesson, but it explains the causes of the rebellion, not the effects of putting it down. Answering the adjacent question is a common way to lose a point. The Mandate of Heaven option names a real legitimating idea and offers it as though it were a mechanism.'
  }
];

module.exports = { META, STIMULI, ITEMS };
