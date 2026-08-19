'use strict';
/**
 * Foundations Exam 1 question bank.
 *
 * Authored against the Foundations lesson data files (learning targets and success
 * criteria) and the five Foundations deep-reading chapter modules. Every `source`
 * field names the chapter section a question is answerable from, so a challenged
 * question can be checked against the text students actually read.
 *
 * Design constraints, all enforced by validate.js in this folder:
 *  - exactly 40 questions, 1 point each
 *  - four options, one unambiguously correct
 *  - option lengths within 25% of each other, so length is not a tell
 *  - correct answers spread roughly evenly across A/B/C/D
 *  - no negatively worded stems, no "all/none of the above"
 */

const A = 0, B = 1, C = 2, D = 3;

module.exports = [

// ── PART A · Recall and applied recall (1-20) ────────────────────────────────

{ n: 1, part: 'A', ch: 'F1', target: 'F1.1', source: 'F1 §02 The Climate Turn',
  stem: 'The Foundations reading argues that the key precondition for settled farming was a change in the climate. What did that change make possible?',
  options: [
    'Planting became a reasonable bet, because the weather stayed predictable',
    'People finally understood that seeds put in the ground grow into crops',
    'Wild plants and animals grew too scarce for foraging bands to live on',
    'Metal tools appeared that could clear forests and break up heavy soil' ],
  answer: A,
  why: 'The chapter frames planting as a bet that next year will resemble this one. The lurching climate of the last glacial made that bet bad; the steadiness of the Holocene made it reasonable.' },

{ n: 2, part: 'A', ch: 'F1', target: 'F1.1', source: 'F1 §03 What Domestication Actually Is',
  stem: 'Wheat became a domesticated crop mainly because harvesting with a sickle and replanting part of the harvest',
  options: [
    'forced early farmers to water and to weed their fields far more often',
    'favored the rare plants whose seeds stayed attached to the ripe stalk',
    'let farmers plant the very same field for several seasons in a row',
    'killed off the wild grasses that competed with wheat for good soil' ],
  answer: B,
  why: 'Cutting a stand and replanting part of it selects, unintentionally, for the non-shattering mutant. Over centuries the crop loses the ability to sow itself. That is domestication.' },

{ n: 3, part: 'A', ch: 'F1', target: 'F1.2', source: 'F1 §06 Surplus, and What It Really Does',
  stem: 'According to the reading, the property of grain that mattered most for the rise of cities is that grain',
  options: [
    'grows more quickly than any other food available to early farmers',
    'contains more vitamins and protein than wild plants and wild game',
    'can be stored for years, counted by an official, and taken by force',
    'can be grown in almost every climate and soil type found on earth' ],
  answer: C,
  why: 'Storability is the hinge. Grain is durable, dense, divisible and countable, so it can feed non-farmers, be banked, be recorded, and be seized. Specialization, writing, taxation and hierarchy all sit on that.' },

{ n: 4, part: 'A', ch: 'F1', target: 'F1.1', source: 'F1 §07 The Price of the Bargain',
  stem: 'Skeletons from early farming populations in many regions show, compared with the foragers who came before them,',
  options: [
    'taller stature, stronger bones, and far fewer signs of infectious illness',
    'longer lives, better teeth, and much less evidence of hard physical labor',
    'almost no measurable difference in health, in height, or in physical wear',
    'shorter stature, more tooth decay, and more signs of childhood sickness' ],
  answer: D,
  why: 'Average stature declines, dental decay rises sharply on a starchy cereal diet, and enamel defects marking arrested growth become more common. The chapter calls this the price of the bargain.' },

{ n: 5, part: 'A', ch: 'F2', target: 'F2.2', source: 'F2 chapter deck and Section 01',
  stem: 'Foundations 2 argues that the historically important question to ask about a belief system is',
  options: [
    'how many followers it gathered in the first century after it began',
    'what institutions it ran and what work those institutions actually did',
    'whether its central teachings can be shown to be true or to be false',
    'which of its rival traditions it managed to replace or to drive out' ],
  answer: B,
  why: 'The chapter asks four questions of every tradition: what it claims, what it ran, how it traveled, and who it put where. AP questions are almost always asking the second and third.' },

{ n: 6, part: 'A', ch: 'F2', target: 'F2.3', source: 'F2 §04 Buddhism',
  stem: 'Buddhism spread widely across Asia in large part because donations to monasteries',
  options: [
    'earned merit for the giver, so lay wealth kept funding new monasteries',
    'were required by law in every kingdom that had adopted the Buddhist faith',
    'were collected by rulers who then built temples to display their own power',
    'replaced the taxes that merchants would otherwise have owed to their king' ],
  answer: A,
  why: 'Merit-making donation meant lay wealth flowed continuously into an institution that could be planted anywhere, which turned every oasis town and port into a possible node without any conquest.' },

{ n: 7, part: 'A', ch: 'F2', target: 'F2.3', source: 'F2 §03 Hinduism, compared with §04',
  stem: 'The clearest reason Hinduism shaped enormous populations while converting almost nobody is that membership in it',
  options: [
    'required years of study in a monastery before a person could be admitted',
    'was granted only by rulers who had themselves been initiated by a priest',
    'came through birth and locality rather than through a personal decision',
    'depended on moving to a holy city and then living there for many years' ],
  answer: C,
  why: 'Born into versus joined is the single cleanest explanation of why one tradition stayed rooted in South Asia and the other crossed a continent.' },

{ n: 8, part: 'A', ch: 'F2', target: 'F2.2', source: 'F2 §07 Islam',
  stem: 'The waqf endowment allowed madrasas and hospitals across the Islamic world to',
  options: [
    'charge students and patients a fee that religious law had fixed in advance',
    'admit any student at all, without an entrance requirement of any kind',
    'train the officials whom a ruler then appointed to govern his provinces',
    'keep operating through conquests, since their income was not the treasury' ],
  answer: D,
  why: 'A waqf is legally inalienable and funds an institution in perpetuity out of dedicated property revenue, so schools and hospitals survived the dynasties that ruled over them.' },

{ n: 9, part: 'A', ch: 'F3', target: 'F3.1', source: 'F3 §01 Achaemenid Persia',
  stem: 'Persia held together the largest empire of its day mainly by',
  options: [
    'replacing local languages and religions with Persian ones everywhere',
    'leaving local religion, law, and elites in place under a royal governor',
    'moving conquered populations to distant provinces across the empire',
    'granting full Persian membership to the elites of conquered peoples' ],
  answer: B,
  why: 'Satrapies bought consent. A conquered people that keeps its gods, its language and its local rulers has far less reason to revolt, which made tolerance cheaper and more durable than terror.' },

{ n: 10, part: 'A', ch: 'F3', target: 'F3.1', source: 'F3 §02 Han China',
  stem: 'Han officials were appointed by the center, paid a salary, moved between posts, and watched by a separate censorate. This design was meant to stop',
  options: [
    'officials from studying the Confucian classics before they took office',
    'administrative power from hardening into local hereditary family lines',
    'the emperor from having to approve every decision made in every county',
    'merchants from buying farmland in the commanderies near the capital' ],
  answer: B,
  why: 'Because posts were not hereditary, an official\'s son inherited status and opportunity but not the office, so the state did not slowly turn back into a collection of family fiefdoms.' },

{ n: 11, part: 'A', ch: 'F3', target: 'F3.1', source: 'F3 §02 Han China, How it justified',
  stem: 'The Mandate of Heaven was an unusual way to justify rule because it',
  options: [
    'claimed the emperor was a god himself, who could not be judged by anyone',
    'had to be renewed by a vote of the leading officials in every generation',
    'named a test the dynasty could visibly fail, which rebels could then cite',
    'applied only to the founder of a dynasty and to none of his successors' ],
  answer: C,
  why: 'The same doctrine that made the emperor the Son of Heaven handed any rebel a respectable argument. The Yellow Turbans in 184 CE claimed exactly that: Heaven had abandoned the Han.' },

{ n: 12, part: 'A', ch: 'F3', target: 'F3.1', source: 'F3 §03 The Greek Poleis',
  stem: 'Athens filled its Council and its juries by lot rather than by election because Greek thinkers held that elections',
  options: [
    'reliably favored the famous, the wealthy, and the practiced speakers',
    'took far too long to organize in a city of that size and that wealth',
    'had been the method used by the kings whom Athens had already expelled',
    'could not be held safely during the long years Athens spent at war' ],
  answer: A,
  why: 'Election was understood as the aristocratic device and the lot as the democratic one, because the lot gives every citizen the same chance to govern and makes office a duty rather than a prize.' },

{ n: 13, part: 'A', ch: 'F3', target: 'F3.3', source: 'F3 §04 Rome',
  stem: 'Rome\'s distinctive answer to the problem of holding a diverse empire together was to',
  options: [
    'leave every conquered people entirely alone as long as tribute arrived',
    'settle Roman farmers on every piece of land the legions had conquered',
    'require each province to worship exactly the gods the city of Rome did',
    'offer the conquered a route into legal membership in the Roman state' ],
  answer: D,
  why: 'Auxiliary service, Latin status, municipal charters, and finally the grant of 212 CE gave provincials a personal stake in the empire\'s survival instead of a grievance against it.' },

{ n: 14, part: 'A', ch: 'F4', target: 'F4.1', source: 'F4 §01 The Silk Roads',
  stem: 'To say that the Silk Roads worked as a relay means that',
  options: [
    'caravans traveled the whole route together from China as far as Rome',
    'each merchant worked one stage he knew and sold on to the next man',
    'goods moved only while a single empire controlled the entire route',
    'merchants were paid by the state rather than by their own customers' ],
  answer: B,
  why: 'One merchant traveling four thousand kilometers and back was slower, more dangerous and less profitable for everyone than a chain of specialists each working a segment he knew.' },

{ n: 15, part: 'A', ch: 'F4', target: 'F4.1', source: 'F4 §01 The Silk Roads',
  stem: 'Because prices multiplied at every transfer along the Silk Roads, the goods carried overland were mostly',
  options: [
    'heavy staples such as grain, timber, and building stone from the east',
    'live animals able to walk the route without needing to be carried',
    'goods that nobody living along the route could produce for themselves',
    'light items worth a great deal for their weight, such as silk and gems' ],
  answer: D,
  why: 'A high value-to-weight ratio is what survives a chain of markups: silk, gems, spices, glass, medicines. Nobody hauled grain to Rome overland.' },

{ n: 16, part: 'A', ch: 'F4', target: 'F4.1', source: 'F4 §02 The Indian Ocean',
  stem: 'The monsoon shaped Indian Ocean trade above all because it',
  options: [
    'blew hard enough to push a ship from Africa to China without a stop',
    'made the ocean far too dangerous to cross for most months of the year',
    'reversed on a schedule, so a merchant waited months to sail back home',
    'let ships sail in any direction they chose at any time of the year' ],
  answer: C,
  why: 'A voyage out and back took the better part of a year, so merchants overwintered in foreign ports. The wind built the permanent diaspora communities, the conversions and the creole languages.' },

{ n: 17, part: 'A', ch: 'F4', target: 'F4.2', source: 'F4 §03 The Trans-Saharan Routes',
  stem: 'The camel and its saddle changed trans-Saharan trade chiefly by',
  options: [
    'lowering the cost of a crossing enough to make regular trade worth doing',
    'making the very first crossing of the Sahara possible for human beings',
    'allowing a caravan to cross without stopping at any well or oasis at all',
    'removing the need for merchants to hire guides who knew the desert wells' ],
  answer: A,
  why: 'The Sahara did not shrink. The chapter is explicit that the desert had been crossed before; what changed was the arithmetic, so a marginal journey became an ordinary commercial operation.' },

{ n: 18, part: 'A', ch: 'F5', target: 'F5.1', source: 'F5 §01 Song China',
  stem: 'The reading insists that Song China at c.1200 has to be described as both',
  options: [
    'the largest empire on earth and the most religiously tolerant of states',
    'the poorest of the major regions and the most inventive technologically',
    'commercially the most advanced economy and militarily very vulnerable',
    'united under a single ruler and completely closed to all foreign trade' ],
  answer: C,
  why: 'The most commercially advanced state in the world was paying tribute to its northern neighbors to avoid war. A student who remembers only the prosperity cannot explain what happens next.' },

{ n: 19, part: 'A', ch: 'F5', target: 'F5.1', source: 'F5 §02 Dar al-Islam',
  stem: 'Dar al-Islam at c.1200 is the chapter\'s best evidence that a world can be',
  options: [
    'politically divided and still connected by law, language, and learning',
    'ruled by one caliph whose orders reached from Iberia to Central Asia',
    'completely cut off from trade and still produce great works of science',
    'united by a single language and still unable to move goods or ideas' ],
  answer: A,
  why: 'There is no single ruler and has not been for centuries, and it is nevertheless one connected world. Political unity and cultural coherence are different things.' },

{ n: 20, part: 'A', ch: 'F5', target: 'F5.1', source: 'F5 §05 The Americas',
  stem: 'The most consequential result of the Americas\' separation from Afro-Eurasia was that',
  options: [
    'they never developed cities, monumental building, or long-distance trade',
    'they had no farming at all and lived entirely by hunting and gathering',
    'their societies stayed essentially unchanged for the centuries before 1492',
    'their populations had no exposure to the epidemic diseases of Afro-Eurasia' ],
  answer: D,
  why: 'Afro-Eurasian epidemic diseases emerged largely from long contact with domesticated herd animals the Americas did not have, so there was no exposure and no acquired resistance.' }
,

// ── PART B · Stimulus-based multiple choice (21-35) ──────────────────────────

{ n: 21, part: 'B', ch: 'F1', target: 'F1.2', source: 'F1 §01 The World Before Farming', stim: 'S1',
  stem: 'The passage argues that foraging societies could not support specialists mainly because',
  options: [
    'food could not be stored, so nobody could be fed who was not gathering it',
    'foragers refused to let anyone in the band hold a position of authority',
    'foraging bands moved so often that nobody could learn a specialized craft',
    'the wild plants that foragers ate held too few calories to feed a worker' ],
  answer: A,
  why: 'The passage states it directly: a society that cannot store cannot accumulate, and a society that cannot accumulate cannot support anyone who is not getting food.' },

{ n: 22, part: 'B', ch: 'F1', target: 'F1.2', source: 'F1 §01 with §06', stim: 'S1',
  stem: 'Which later development most directly removed the limit this passage describes?',
  options: [
    'Stone tools sharp enough to cut and to grind wild cereals efficiently',
    'The spread of foraging bands into every continent except Antarctica',
    'Grain that could be stored for years and counted by an administrator',
    'Studies of forager societies documented in the last two centuries' ],
  answer: C,
  why: 'The limit named in the passage is storage. Grain lifts exactly that limit, which is why the same harvest that freed a potter to make pots also made it possible to tax her.' },

{ n: 23, part: 'B', ch: 'F1', target: 'F1.3', source: 'F1 §05 What a River Actually Gives You', stim: 'S2',
  stem: 'The passage suggests that farming in Mesopotamia demanded more collective organization than farming in Egypt because',
  options: [
    'Mesopotamia held far more farmland needing water than Egypt ever did',
    'Egyptian farmers owned metal tools that Mesopotamian farmers lacked',
    'the Tigris and Euphrates carried no silt to renew the soil of the plain',
    'the flood there was violent and its size changed unpredictably each year' ],
  answer: D,
  why: 'A violent flood arriving at the wrong point in the grain cycle, at a scale nobody could predict, required canals, levees and basins that had to be built and maintained collectively.' },

{ n: 24, part: 'B', ch: 'F1', target: 'F1.3', source: 'F1 §05 What a River Actually Gives You', stim: 'S2',
  stem: 'According to the passage, both river systems gave the farmers who used them',
  options: [
    'a flood that arrived at exactly the same time in every single year',
    'fresh soil each year, delivered by the flood at no cost to the farmer',
    'rain plentiful enough to grow a crop without any irrigation at all',
    'a route shielded from invasion by deserts lying on either side of it' ],
  answer: B,
  why: 'The passage calls them "the same gifts on far harsher terms." Both floods laid down silt; only the Nile\'s arrived on a schedule a farmer could plan around.' },

{ n: 25, part: 'B', ch: 'F2', target: 'F2.3', source: 'F2 §08 What Happens on Arrival', stim: 'S3',
  stem: 'The two settlements al-Bakri describes are best used as evidence of',
  options: [
    'syncretism, a tradition adapting where it met an existing obligation',
    'persecution, a state suppressing a religion it treats as a threat',
    'conquest, an army imposing its religion on a defeated population',
    'pilgrimage, the long journeys believers make to reach a sacred place' ],
  answer: A,
  why: 'The chapter calls this "syncretism visible as town planning." Islam is adopted where it is useful, in administration and commerce, and refused where it would have ended the ritual basis of the king\'s authority.' },

{ n: 26, part: 'B', ch: 'F2', target: 'F2.2', source: 'F2 §08 What Happens on Arrival', stim: 'S3',
  stem: 'According to the passage, the king kept Muslim officials in his administration because his state needed people who could',
  options: [
    'command the cavalry that guarded the caravan routes across the desert',
    'collect the salt tax charged at the northern edge of the desert',
    'read, write, and handle contracts with North African merchants',
    'lead prayers in the dozen mosques of the neighboring Muslim town' ],
  answer: C,
  why: 'The passage names the reason directly. Islam supplied literacy, law and access to a commercial world, so a ruler could adopt the administrative parts long before, and sometimes without ever, adopting the faith.' },

{ n: 27, part: 'B', ch: 'F3', target: 'F3.1', source: 'F3 §01 Achaemenid Persia', stim: 'S4',
  stem: 'The arrangement described in the last sentence of the passage was designed to prevent',
  options: [
    'local priesthoods from continuing to practice their own religion',
    'a satrap from turning his own province into a kingdom of his own',
    'the king from having to travel between his four royal capital cities',
    'conquered peoples from paying tribute in goods instead of in silver' ],
  answer: B,
  why: 'A satrap with an army and a treasury a thousand miles from the capital becomes a king in all but name. Three separately reporting officials per province were the check on that.' },

{ n: 28, part: 'B', ch: 'F3', target: 'F3.3', source: 'F3 §01 Achaemenid Persia', stim: 'S4',
  stem: 'Taken as a whole, the passage shows that Persian rule combined',
  options: [
    'strict cultural uniformity with almost no supervision of the governors',
    'direct rule from the capital with no local officials of any kind at all',
    'rule by conquered elites with no Persian officials in the provinces',
    'wide local autonomy with careful supervision of the governor himself' ],
  answer: D,
  why: 'The first half of the passage is autonomy for the conquered; the last sentence is surveillance of the man administering them. Persia was loose with its subjects and tight with its officials.' },

{ n: 29, part: 'B', ch: 'F3', target: 'F3.1', source: 'F3 §02 Han China', stim: 'S5',
  stem: 'The passage shows that the Mandate of Heaven could be used to',
  options: [
    'prove that the emperor was a god and so was beyond every criticism',
    'settle arguments among officials about how the land tax was collected',
    'justify a dynasty\'s rule and justify rebellion against that same dynasty',
    'choose the next emperor from among the sons of the ruling household' ],
  answer: C,
  why: 'It gives a dynasty divine sanction on a condition, and it names the evidence by which the condition can be judged to have failed. The Yellow Turbans used the doctrine against the dynasty that ruled by it.' },

{ n: 30, part: 'B', ch: 'F3', target: 'F3.3', source: 'F3 §02 with §01', stim: 'S5',
  stem: 'Compared with a Persian king claiming the favor of Ahura Mazda, the Mandate of Heaven',
  options: [
    'named the evidence by which a ruler could be judged to have failed',
    'offered no religious justification for the ruler\'s authority at all',
    'had to be confirmed by a council of priests once in each generation',
    'was claimed by the ruler\'s officials rather than by the ruler himself' ],
  answer: A,
  why: 'The passage makes the contrast itself: Persia claimed divine favor without specifying a test that could be failed, and the Han claimed Heaven\'s mandate and published the test.' },

{ n: 31, part: 'B', ch: 'F4', target: 'F4.3', source: 'F4 §01 The Silk Roads', stim: 'S6',
  stem: 'According to the passage, one important result of relay trade was that',
  options: [
    'a single merchant could carry silk from Chang\'an the whole way to Rome',
    'different peoples met one another face to face at every junction town',
    'goods moved faster than they would have under a single trading empire',
    'the states along the route lost interest in taxing the caravans passing' ],
  answer: B,
  why: 'The passage calls the relay "constant contact between different peoples at every junction, not a sealed pipeline from one civilization to another."' },

{ n: 32, part: 'B', ch: 'F4', target: 'F4.3', source: 'F4 §01 with §04 and §07', stim: 'S6',
  stem: 'The passage helps explain why ideas and diseases traveled the Silk Roads, because it shows that',
  options: [
    'merchants carried religious texts as their single most valuable cargo',
    'caravans avoided any city where sickness had recently been reported',
    'the route was controlled from end to end by one very powerful empire',
    'goods changed hands between different people many times on the route' ],
  answer: D,
  why: 'Ideas, techniques and infections transferred at the same handshakes the cargo did. Every transfer point is a point of human contact, which is the mechanism behind diffusion and disease alike.' },

{ n: 33, part: 'B', ch: 'F4', target: 'F4.1', source: 'F4 §02 The Indian Ocean', stim: 'S7',
  stem: 'The pattern described in the passage explains why Indian Ocean ports developed',
  options: [
    'permanent communities of foreign merchants living inside the city',
    'fleets that were large enough to sail against the wind all year long',
    'walls built to keep foreign merchants out of the city\'s marketplace',
    'laws forbidding a merchant to stay longer than a single trading season' ],
  answer: A,
  why: 'A merchant who could not turn around had to overwinter, every year. Months of residence, repeated annually, produce foreign quarters, intermarriage, conversion and hybrid languages.' },

{ n: 34, part: 'B', ch: 'F4', target: 'F4.3', source: 'F4 §02 with §01', stim: 'S7',
  stem: 'The regularity described in the passage gave Indian Ocean trade an advantage over the Silk Roads, because merchants could',
  options: [
    'reach India in less than a single month during any season of the year',
    'avoid paying any toll at all to the rulers of the ports they sailed to',
    'plan a cargo and extend credit against a return they could predict',
    'sail without needing pilots who knew a particular stretch of the coast' ],
  answer: C,
  why: 'Everyone knew the schedule, so a sailing season could be planned a year ahead. On the Silk Roads, arrival depended on the politics of six separate states.' },

{ n: 35, part: 'B', ch: 'F5', target: 'F5.1', source: 'F5 §05 The Americas', stim: 'S8',
  stem: 'The passage best supports which statement about the Americas at c.1200?',
  options: [
    'They had no long-distance trade of any kind before Europeans arrived',
    'They were connected to Afro-Eurasia by regular trade across the Atlantic',
    'They lacked farming and lived by hunting animals across long distances',
    'They were well connected internally but separate from Afro-Eurasia' ],
  answer: D,
  why: 'Shell, copper and mica crossing most of a continent is internal connection; the absent herd animals and the absent disease pool are the separation. Isolation is not backwardness.' },

// ── PART C · Historical thinking skills applied to content (36-40) ───────────

{ n: 36, part: 'C', ch: 'F5', target: 'F5.2', skill: 'Contextualization', source: 'F5 §07 with F1 §05',
  stem: 'Which sentence does the work of contextualization, rather than simply describing?',
  options: [
    'Egypt was a civilization that grew up along the Nile in northeast Africa',
    'The Nile flooded on schedule, so Egyptian farmers could plan a full year',
    'Egypt built enormous stone pyramids that still stand in the desert today',
    'Egypt was ruled by pharaohs whom their people treated as living gods' ],
  answer: B,
  why: 'Contextualization names a condition and connects it to an outcome. The other three name a place, a monument and a ruler, which is description. Only B says what the condition made possible.' },

{ n: 37, part: 'C', ch: 'F1', target: 'F5.2', skill: 'Causation', source: 'F5 §07 with F1 §06',
  stem: 'A student writes, "Surplus grain caused social classes to appear." Which sentence best turns that claim into an explanation of the mechanism?',
  options: [
    'Once a surplus existed, societies naturally began to divide into classes',
    'Social classes appeared in every early farming society that had a surplus',
    'Stored grain could be seized, so whoever controlled the store held power',
    'Grain surpluses were extremely large, which is why the change came so fast' ],
  answer: C,
  why: 'Causation traces a mechanism. The other three restate the claim, assert that it is general, or point at scale. Only C says by what physical route surplus turned into rank.' },

{ n: 38, part: 'C', ch: 'F3', target: 'F5.2', skill: 'Continuity and change', source: 'F5 §07 with F3 §04',
  stem: 'Augustus kept the Senate, the elections, and the old offices, while holding permanent command of the armies and the veto power of a tribune. This is best described as',
  options: [
    'change in institutions alongside continuity in who actually decided',
    'complete continuity, since none of Rome\'s institutions were abolished',
    'complete change, since Rome had never been governed in this way before',
    'continuity in institutions alongside change in who actually decided' ],
  answer: D,
  why: 'The forms of the Republic continued; the reality of who decided did not. Augustus wrote that he surpassed everyone in influence but held no more formal power than his colleagues.' },

{ n: 39, part: 'C', ch: 'F3', target: 'F3.3', skill: 'Comparison', source: 'F3 §03 and §04',
  stem: 'Which comparison of Athens and Rome is supported by the Foundations reading?',
  options: [
    'Athens narrowed its citizenship as its power grew, while Rome widened its own',
    'Both cities extended citizenship to the peoples they had conquered in war',
    'Both cities held citizenship to men whose parents were both born natives',
    'Athens widened its citizenship as its power grew, while Rome narrowed its own' ],
  answer: A,
  why: 'Pericles\' law of 451 BCE narrowed the citizen body at the height of Athenian power, while Rome moved the other way, through auxiliary service and Latin status to the grant of 212 CE.' },

{ n: 40, part: 'C', ch: 'F1', target: 'F5.2', skill: 'Argumentation', source: 'F5 §07 with F1 §06',
  stem: 'A student argues, "Agricultural surplus caused social hierarchy everywhere it appeared." Which evidence from the reading most complicates that claim?',
  options: [
    'Mesopotamian cities built temples and palaces on top of stored grain wealth',
    'The Indus cities had surplus and planning but no clear kings or royal tombs',
    'Egyptian pharaohs were buried in pyramids that were filled with treasure',
    'Chinese farmers along the Huang He grew millet in soft, wind-blown soil' ],
  answer: B,
  why: 'Mohenjo-daro and Harappa show scale, planning, standardized weights and long-distance trade with no palaces clearly identifiable as palaces. Write "made hierarchy possible," not "caused hierarchy."' }

];
