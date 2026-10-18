/*
 * Topic 4.8 canonical Teaching OS source.
 * CED: Fall 2026 pp. 90 to 91 (scripts/lib/ced-source/unit-4.js). Reasoning
 * process: Continuity and Change. Suggested skill: 6.C Argumentation. One
 * learning objective, N: explain how economic developments from 1450 to 1750
 * affected social structures over time. Key Concepts, printed by the CED as
 * "Review: Unit 4 Key Concepts": KC-4.1, KC-4.1.II, KC-4.1.II.A, KC-4.2,
 * KC-4.2.II, KC-4.3 and KC-4.3.III.ii.
 * Story: docs/TOPIC-4-8-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Follow the
 * Trade to the People" is written from the same story, and this deck retells it.
 * Spine: Economic change reached into everyday social life: who worked, who
 * ruled, and how families and communities were organized. Argue how much
 * changed, with evidence.
 * Wall version: Follow the trade to the people.
 * Retelling slide: the cause chain (phase 'retell').
 *
 * Class dates: Green Tuesday 2026-11-17, Silver Wednesday 2026-11-18.
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.8',
    minutes: 90,
    title: 'Continuity and Change from 1450 to 1750',
    subtitle: 'Economic change reached into everyday social life: who worked, who ruled, and how families and communities were organized. Argue how much changed, with evidence.',
    essentialQuestion: 'From 1450 to 1750, how did economic developments change who worked, who ruled, and how families lived, and how much stayed the same?',
    apFocus: 'Continuity and Change, with Argumentation 6.C',
    endTarget: 'Students can follow one economic development of the period (plantation sugar, American silver, the demand for cloth) to the workers it needed and to a change in a social structure (masters and slaves in Barbados, the casta ranking, families and states in Africa); name what stayed the same (most people farmed, the same kind of work done in larger amounts, hereditary rulers and nobles on top); explain how two pieces of evidence relate (one led to the other, the same pattern in two places, or a contrast); and write a thesis that answers the learning objective with both a change and a continuity.'
  },

  priorities: {
    must: [
      'Answer the learning objective, not a trade question: every case ends at a social structure, who worked, who ruled and rose, and how families lived (LO N).',
      'Follow one chain all the way: ships, then demand, then the workers it needed, then what that did to society (KC-4.1, KC-4.2.II).',
      'Teach the continuity as hard as the change: most people still farmed (KC-4.2), peasant and artisan work grew without being replaced, and rulers and nobles stayed on top.',
      'Model 6.C: three ways evidence relates (led to, the same pattern, a contrast), then have students write a thesis with a change and a continuity.'
    ],
    should: [
      'Use Ligon\'s Barbados as the one new source: one crop remaking a whole society, in a witness\'s words.',
      'Correct three myths: "everything changed after 1492," "Europeans took over the world\'s trade," and "the slave trade changed only the Americas."',
      'Do the CED\'s sample-activity move on the sharpen slide: decide which reasoning process organizes the answer before writing the thesis.'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Follow the Trade to the People."',
      'Use the Primary Source (Ligon, 1657) as an extension for early finishers.'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the chain, the continuities, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.7, 4.5 and 4.4. Bridge to the argument.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over a sugar works.', students: 'Predict who did the work.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Follow the Trade to the People" in class.', students: 'Keep two lists: changes and continuities.', slide: 4 },
    { id: 'knowledge', label: 'Borrowed Knowledge', range: '17-19', minutes: 2, teacher: 'Where the sea tools came from.', students: 'Name one tool and where it came from.', slide: 5 },
    { id: 'road', label: 'The Ocean Road', range: '19-20', minutes: 1, teacher: 'Tools, ships and winds add up to a road both ways.', students: 'Say why coming back mattered.', slide: 6 },
    { id: 'money', label: 'Sugar, Silver, Cloth', range: '20-22', minutes: 2, teacher: 'The three economic developments.', students: 'Name one example of each.', slide: 7 },
    { id: 'rivals', label: 'Rivals Fight Over It', range: '22-24', minutes: 2, teacher: 'Economic disputes turn violent.', students: 'Say what each fight was over.', slide: 8 },
    { id: 'workers', label: 'More Demand, More Work', range: '24-26', minutes: 2, teacher: 'Three ways the demand for labor was met.', students: 'Say which way was old and which was new.', slide: 9 },
    { id: 'map', label: 'Where It Reached People', range: '26-27', minutes: 1, teacher: 'The places on one map, colored by what changed.', students: 'Find one place of each color.', slide: 10 },
    { id: 'barbados', label: 'A Society Built on Sugar', range: '27-29', minutes: 2, teacher: 'Ligon\'s Barbados as a case file.', students: 'Follow sugar to the people.', slide: 11 },
    { id: 'ligon', label: 'Three Sorts of Men', range: '29-31', minutes: 2, teacher: 'Read Ligon\'s own words.', students: 'Say how the three groups differed.', slide: 12 },
    { id: 'casta', label: 'Ranked by Ancestry', range: '31-32', minutes: 1, teacher: 'The casta painting, read as an ideal.', students: 'Connect it to Barbados.', slide: 13 },
    { id: 'africa', label: 'Families and States in Africa', range: '32-34', minutes: 2, teacher: 'What the trade did to villages and kingdoms.', students: 'Follow the numbers to the family.', slide: 14 },
    { id: 'samework', label: 'The Same Work, More of It', range: '34-36', minutes: 2, teacher: 'Three pictures of old work for new buyers.', students: 'Name what stayed the same.', slide: 15 },
    { id: 'ladder', label: 'What Stayed', range: '36-38', minutes: 2, teacher: 'The ladder and the old networks.', students: 'Sort continuity and change.', slide: 16 },
    { id: 'relate', label: 'How Evidence Relates', range: '38-40', minutes: 2, teacher: 'Model 6.C: led to, same pattern, a contrast.', students: 'Name the relationship.', slide: 17 },
    { id: 'chain', label: 'One Chain, Three Continents', range: '40-42', minutes: 2, teacher: 'A chain of evidence with the linking words.', students: 'Read the arrows aloud.', slide: 18 },
    { id: 'myths', label: 'Myth and Evidence', range: '42-44', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 19 },
    { id: 'retell', label: 'Follow the Trade', range: '44-48', minutes: 4, teacher: 'Students redraw the chain from memory, with what stayed underneath.', students: 'Retell the whole topic.', slide: 20 },
    { id: 'sharpen', label: 'Build a Thesis', range: '48-50', minutes: 2, teacher: 'Which reasoning process? Then upgrade a weak thesis.', students: 'Fill the frame aloud.', slide: 21 },
    { id: 'skill', label: 'Skill Builder', range: '50-58', minutes: 8, teacher: 'Module 05: Argumentation 6.C.', students: 'Connect three pieces of evidence.', slide: 22 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: one chain from trade to people.', students: 'Work without the coach.', slide: 23 },
    { id: 'evidence', label: 'Evidence Lab', range: '58-65', minutes: 7, teacher: 'Module 07: one change, one continuity, two objects.', students: 'Observe, then infer, then name a limit.', slide: 24 },
    { id: 'cp2', label: 'Checkpoint 2', range: '65-77', minutes: 12, teacher: 'Module 10: the argument. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 25 },
    { id: 'close', label: 'Landing Sentence', range: '77-79', minutes: 2, teacher: 'Land the answer and hand off to Unit 5.', students: 'Say the topic in one sentence.', slide: 26 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.8', url: '../unit-4/lesson-4-8-continuity-and-change.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-8-continuity-and-change-capture.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-8-continuity-and-change.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-8-slide',
    title: 'Topic 4.8 Presentation',
    file: 'present-topic-4-8.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Follow the trade to the people.',
      subtitle: 'Continuity and Change, with Argumentation 6.C. Every case asks: which economic development, which workers, what did it do to society, and what stayed the same?',
      notes: {
        minutes: 2,
        land: [
          'CED pp. 90 to 91. One learning objective, N: explain how economic developments from 1450 to 1750 affected social structures over time. The reasoning process is Continuity and Change (p. 75); the suggested skill is 6.C, use historical reasoning to explain relationships among pieces of historical evidence. No thematic focus and no illustrative examples are printed for 4.8.',
          'The Key Concepts are the CED\'s "Review: Unit 4 Key Concepts": KC-4.1 (the hemispheres joined, trade transformed, a significant social impact); KC-4.1.II and II.A (borrowed knowledge, new tools, ships and wind knowledge made ocean trade possible); KC-4.2 (production still centered on agriculture, but major changes in labor, manufacturing, gender and social structures); KC-4.2.II (the demand for labor intensified: peasant agriculture grew and changed, plantations expanded, the Atlantic slave trade developed and intensified); KC-4.3 (empires shaped and were shaped by the peoples they ruled); KC-4.3.III.ii (economic disputes led to rivalries and conflict).',
          'The CED\'s sample activity (p. 77) is self and peer revision of a thesis on "how economic developments led to changes in social structures in the period 1450–1750," after deciding which reasoning process best organizes the answer. Slide 21 does the decision and the thesis frame; Checkpoint 2 asks for the thesis and a short argument.',
          'Owns: the argument. Every case is evidence already taught in 4.1 to 4.7, used in a sentence or two. The one new source is Richard Ligon\'s account of Barbados (London, 1657), slides 11 and 12 and the Primary Source.',
          'Bridge only: everything else. Do not reteach the mit\'a (4.4), the VOC (4.5) or casta (4.7); name them as evidence. Not taught: Unit 5. The landing hands off in one line.',
          'Three myths, on slide 19: "everything changed after 1492"; "Europeans took over the world\'s trade"; "the slave trade changed only the Americas."',
          'Every picture in this deck is a real object of the period, already verified for an earlier Unit 4 topic: the sugar works engraved for Du Tertre (1667), the Potosí woodcut (1553), the battle of Texel (1673, painted 1687), the casta painting (about 1715 to 1720), the canoes at Elmina and Manfroe (printed 1732), the Gengzhitu loom and silk-reeling prints (1696), an Indian palampore (early 1700s) and Maes\'s spinner (about 1655). The map is the course\'s own. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Economic change reached into everyday social life: who worked, who ruled, and how families lived. It changed the most where it needed workers by force, and much of the old world kept working the old way, only harder.',
        avoid: 'Avoid turning 4.8 into a review lecture of Unit 4. Every case is one sentence of evidence for the argument. And avoid "everything changed": the continuity is half the answer.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.7', text: 'Name one new elite, or one old elite that was squeezed.' },
          { label: 'Topic 4.5', text: 'Where did a large share of Potosí\'s silver end up, and why?' },
          { label: 'Topic 4.4', text: 'Name one labor system used in the colonial Americas.' }
        ],
        turn: '4.7 asked: **trade, work and the ladder all moved. Which change mattered most, and what stayed the same?** Today you answer it, with an argument.'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: the Qing banners, peninsulares and creoles; sipahis, boyars, French nobles. China, because the Ming collected most taxes in silver and China mined little of its own. The mit\'a, encomienda, hacienda labor, indentured servitude, chattel slavery.',
          'The bridge is 4.7\'s hand-off in the unit story map, word for word.',
          'Prompt 2 returns on slide 7 (silver). Prompt 3 returns on slide 9 (the workers). Prompt 1 returns on slide 16 (the ladder).'
        ],
        ask: 'Which of these three answers is about money, and which are about people?',
        listenFor: 'The silver is money; the elites and the labor systems are people. Today joins them.',
        ap: 'Retrieval plus bridge: 4.7 asked which change mattered most; 4.8 makes the argument.'
      }
    },
    {
      phase: 'question', kind: 'frame-letterbox', eyebrow: 'The Question',
      title: 'How did the new global economy change people\'s lives?',
      subtitle: 'Who worked, who ruled, how families lived, and what stayed the same?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real engraving: a sugar works in the French Antilles, engraved by Sébastien Leclerc for Jean-Baptiste Du Tertre, a French missionary, in his history of the French Caribbean islands (Paris, 1667). Its numbered key names the mill, the furnaces and kettles, the other buildings of the works, and the huts of the enslaved workers (verified for Topic 4.4).',
          'The question is the learning objective in a ninth grader\'s words: "economic developments" is the new global economy; "social structures" is who worked, who ruled, and how families lived; "over time" is how much changed and what stayed the same.'
        ],
        ask: 'Predict: who did the work in this picture, and who got rich from it?',
        listenFor: 'Enslaved Africans did the work; the planters, the merchants and the kings who taxed the sugar got rich.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read with two lists in mind.',
      subtitle: 'For every case: what changed for the people, and what stayed the same?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-8-continuity-and-change-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "Follow the Trade to the People" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who keep both lists, and who follow a case past the trade to the people.',
          'Question 02 is the topic\'s 6.C practice: it asks how one piece of evidence relates to Ligon\'s. Question 03 asks for a thesis. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which change surprised you most, and which continuity?',
        listenFor: 'A small island where enslaved people outnumbered settlers almost two to one; villages in Africa with more women than men; most people still farming in 1750.'
      }
    },
    {
      phase: 'knowledge', kind: 'diffusion-path', eyebrow: 'The Road · Topic 4.1',
      kc: 'KC-4.1.II', title: 'Europe\'s sea tools were borrowed.',
      footer: 'Knowledge from older worlds made the new ships possible.',
      template: {
        stops: [
          { place: 'China', date: 'By about 1100', text: 'Sailors steer by a magnetized needle: the compass' },
          { place: 'The Islamic world', date: 'From a Greek idea', text: 'Astronomers make the astrolabe precise' },
          { place: 'Toledo', date: 'Muslim and Jewish astronomers', text: 'Tables of the sky' },
          { place: 'The Mediterranean', date: 'Since Roman times', text: 'The triangular lateen sail' },
          { place: 'Portugal', date: '1400s', text: 'Pilots put them together at sea' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Retrieval from 4.1, not a reteach. Sailors in China steered by a magnetized needle by about 1100, and Europeans were writing about the compass by about 1190; historians debate whether it traveled west or was found again in Europe, so say "used in China first", not "invented in China and carried west". The astrolabe began as a Greek idea that astronomers in the Islamic world made precise, and it reached Europe through Muslim Spain. Muslim and Jewish astronomers in Toledo built tables of the sky; Abraham Zacuto\'s almanac, printed in Portugal in 1496, descends from them. The lateen sail was used on the Mediterranean since Roman times and was common across the seas of the Islamic world.',
          'KC-4.1.II: knowledge from the Classical, Islamic and Asian worlds spread, facilitating European technological developments. This is where the economic chain starts.'
        ],
        ask: 'Name one tool and the world it came from.',
        listenFor: 'The compass, used at sea in China first; the astrolabe from Greek and Islamic astronomers; the lateen sail from the Mediterranean and the Islamic world.',
        ap: 'KC-4.1.II. Continuity and Change: the tools were old; putting them together on Atlantic ships was new.'
      }
    },
    {
      phase: 'road', kind: 'equation', eyebrow: 'The Road · Topic 4.1',
      kc: 'KC-4.1.II.A', title: 'Ships could go, and come back.',
      footer: 'Coming back is what turned voyages into trade.',
      template: {
        terms: [
          { word: 'Tools', note: 'compass, astrolabe, tables' },
          { word: 'Ships', note: 'caravel, carrack, later the fluyt' },
          { word: 'Winds', note: 'swing out to the westerlies' }
        ],
        result: { word: 'Ocean road', note: 'regular voyages both ways' },
        groups: [{ from: 0, to: 2, label: 'Make it possible' }]
      },
      notes: {
        minutes: 1,
        land: [
          'KC-4.1.II.A: new tools, new ship designs and better knowledge of wind and current patterns "made transoceanic travel and trade possible."',
          'The caravel was small and light, the explorer; the carrack was large, with room for months of food, water, cargo and guns. The Dutch fluyt, designed around 1600, carried a large cargo with a small, cheap crew and made shipping goods much cheaper; it served mostly Europe\'s own bulk trades (verified for 4.1), though the VOC also sailed fluyts in Asian waters (Tasman\'s Zeehaen of 1642 was one); the ocean workhorses of the 1400s and 1500s were the caravel and the carrack.',
          'The volta do mar: to get home from West Africa, ships swung out west and north into the open ocean until they reached the westerlies.'
        ],
        ask: 'Why does coming back matter more than getting there?',
        listenFor: 'A ship that comes back can bring goods and money home and go again; that makes regular trade.',
        ap: 'KC-4.1.II.A.'
      }
    },
    {
      phase: 'money', kind: 'branch-tree', eyebrow: 'The Money · Topics 4.3 to 4.5',
      kc: 'KC-4.1', title: 'Three economic developments came down the road.',
      footer: 'These are the economic developments. Now follow them to the people.',
      template: {
        claimLabel: '1450 to 1750',
        claim: 'Joined hemispheres **transformed trade**.',
        branches: [
          { label: 'New demand', note: 'Goods grown or made far away', items: ['Sugar, tobacco', 'Indian cotton', 'Chinese silk'] },
          { label: 'Silver', note: 'American mines, Chinese taxes', items: ['Potosí, 1545', 'Manila, 1571'] },
          { label: 'Rulers\' tools', note: 'Pull the wealth toward the state', items: ['Mercantilism', 'The VOC, 1602'] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-4.1: the interconnection of the hemispheres, made possible by transoceanic voyaging, "transformed trade and had a significant social impact on the world." This slide is the trade half; the rest of the deck is the social half.',
          'New demand: sugar and tobacco from American plantations (4.3); Indian cotton cloth bought by Asian, African and European buyers, and Chinese silk (4.5).',
          'Silver: Potosí from 1545 and Zacatecas from 1546; from 1571 Spanish galleons carried silver from Acapulco to Manila. A large share ended up in China, where the Ming collected most taxes in silver under the Single Whip (4.5).',
          'Rulers\' tools: mercantilist laws and agencies (Spain\'s Casa de Contratación, founded 1503, a crown office that ran the Indies trade; England\'s Navigation Act of 1651) and chartered companies, the English East India Company (1600) and the VOC (1602) (4.5).'
        ],
        ask: 'Name one example of each.',
        listenFor: 'Sugar; Potosí; the VOC.',
        ap: 'KC-4.1. The economic developments the learning objective names.'
      }
    },
    {
      phase: 'rivals', kind: 'story-scene', eyebrow: 'The Money · Topic 4.5',
      kc: 'KC-4.3.III.ii', title: 'The money was worth fighting over.',
      template: {
        steps: [
          { label: '1509', text: 'Off Diu, a Portuguese fleet defeats an Egyptian and Gujarati fleet.' },
          { label: '1591', text: 'Morocco defeats Songhai at Tondibi, partly for the gold and salt trade.' },
          { label: '1623', text: 'On Ambon, VOC officials execute English traders.' },
          { label: '1652 to 1674', key: true, text: 'England and the Dutch fight three wars at sea, largely over trade.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-4.3.III.ii: economic disputes led to rivalries and conflict between states. Retrieval from 4.5.',
          'Diu, 1509: a fleet of Mamluk Egypt and the sultan of Gujarat fought the Portuguese off Diu and lost. Tondibi, 1591: Ahmad al-Mansur\'s army crossed the Sahara and defeated Songhai; gold and the salt trade were a large part of the reason (3.1 told the battle, 4.5 the motive). Ambon, 1623: VOC officials executed ten English company men, nine Japanese soldiers in VOC service and a Portuguese man, accusing them of a plot; it was an execution, not a battle. The Anglo-Dutch Wars: 1652 to 1654, 1665 to 1667 and 1672 to 1674, largely over trade and shipping.',
          'The picture: the Gouden Leeuw, the flagship of Cornelis Tromp, commander of the Dutch third squadron (Royal Museums Greenwich), at the Battle of Texel in 1673, in the third Anglo-Dutch War. This version, in Het Scheepvaartmuseum, Amsterdam, is a copy of Willem van de Velde the Younger\'s painting of 1687, probably made in his studio (verified for 4.5).'
        ],
        ask: 'What was each fight over?',
        listenFor: 'Control of the spice trade and the Indian Ocean; West Africa\'s gold and salt; the spice islands; trade and shipping.',
        ap: 'KC-4.3.III.ii. Part of the economic picture: the wealth was worth a war.'
      }
    },
    {
      phase: 'workers', kind: 'ledger', eyebrow: 'The Workers · Topics 4.4 and 4.5',
      kc: 'KC-4.2.II', title: 'More demand meant more work.',
      template: {
        rows: [
          { name: 'Plantations', mark: 'P', tool: 'Enslaved Africans:', result: 'under 300,000 in the 1500s; over 2.5 million in 1701 to 1750.' },
          { name: 'Mines', mark: 'M', tool: 'An old Inca duty, the mit’a:', result: 'Andean men drafted to Potosí.' },
          { name: 'Homes and workshops', mark: 'H', tool: 'Peasants and artisans:', result: 'old work, more of it, for buyers far away.' }
        ],
        payoffLabel: 'The College Board',
        payoff: 'The demand for labor intensified'
      },
      notes: {
        minutes: 2,
        land: [
          'KC-4.2.II: "The demand for labor intensified as a result of the growing global demand for raw materials and finished products. Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed and intensified."',
          'Plantations: historians estimate that fewer than 300,000 Africans (277,505) were forced onto ships for the Americas in the whole 1500s, and more than 2.5 million (2,560,634) in 1701 to 1750 (Slave Voyages estimates, verified for 4.4). Say "estimate."',
          'Mines: in the 1570s Viceroy Francisco de Toledo turned the Inca mit\'a into a draft that sent thousands of Andean men each year to Potosí (4.4).',
          'Homes and workshops: merchants paid families in western Europe to spin and weave wool and linen at home; Indian weavers made more cotton cloth for the European companies; Chinese peasant families raised silkworms and wove silk, and needed silver for most of their taxes (4.5).'
        ],
        ask: 'Which of the three ways was new, which was old put to new work, and which was old work done in larger amounts?',
        listenFor: 'New: the scale of the Atlantic slave trade. Old put to new work: the mit\'a. Old work, more of it: the peasants and artisans.',
        ap: 'KC-4.2.II. Continuity and Change in one slide.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'Where It Reached People',
      kc: 'Unit 4: Learning Objective N', title: 'Where the trade changed people\'s lives.',
      footer: 'The key sorts every place by what changed for the people there.',
      visual: { url: '../assets/images/instructional-maps/topic-4-8.svg', alt: 'World map with labeled dots at Western Europe, Mexico City, Barbados, Brazil, Potosí, Asante, West Central Africa, India, Jiangnan in China, and Manila, each with a short note, shaded in three colors explained in the key' },
      notes: {
        minutes: 1,
        land: [
          'The course\'s own instructional map, built for this story. Dots mark regions, not borders. Plum: forced labor and new rankings build new societies (Barbados, Brazil\'s sugar coast, Potosí, Mexico City\'s casta ranking). Gold: the trade changes families and states (Asante, inland from the Gold Coast, and West Central Africa). Green: old work grows (western Europe\'s spinners, India\'s weavers, Jiangnan\'s silk families, Manila\'s Chinese merchants).',
          'Point out that every color sits at one end of the same trade.'
        ],
        ask: 'Find one place of each color.',
        listenFor: 'Any three, for example Barbados, West Central Africa and Jiangnan.'
      }
    },
    {
      phase: 'barbados', kind: 'case-file', eyebrow: 'What Changed · Barbados, 1647 to 1679',
      kc: 'KC-4.2', title: 'One crop remade a whole island.',
      template: {
        tag: 'Case',
        place: 'Barbados',
        date: '1647 to 1679',
        rows: [
          { label: 'Sugar', text: 'Sugar-making was **still new** in 1647, with plants from Brazil.' },
          { label: 'Workers', text: 'Indentured servants from Britain and Ireland, and **enslaved Africans**.' },
          { label: 'Wealth', text: 'One planter grew rich from 300 pounds, "all by this plant of **Sugar**."' },
          { label: '1679', text: 'About **37,700** enslaved people counted; about **20,000** white settlers, historians estimate.' }
        ],
        proves: 'A new society: a few rich planters on top, an enslaved majority below.'
      },
      notes: {
        minutes: 2,
        land: [
          'Richard Ligon, an English royalist, sailed in June 1647 and landed on Barbados in September 1647. He found that "the great work of Sugar-making, was but newly practised," though "many Sugar-works" were already "set up, and at work"; with plants from "Fernamlock," Pernambuco in Brazil. He lived on, and helped run, a sugar plantation that his traveling companion Thomas Modyford had bought a half share of (Ligon\'s own account: "Colonel Modiford was to pay for the Moity of this plantation"), and stayed about three years; he wrote his book in a London debtors\' prison (his dedication is dated 12 July 1653) and published it in 1657.',
          'Servants: most were poor people from England, Scotland and Ireland bound to work for a set number of years, many to pay for their voyage. Historians (Russell Menard) show that servants and enslaved Africans arrived together through the 1640s and 1650s; the island did not switch overnight.',
          'Wealth: Ligon wrote that James Drax began with "a stock not exceeding 300 l. sterling" and raised a fortune, "all by this plant of Sugar." Drax is the planter Ligon saw living "like a Prince."',
          'The 1679 census, sent to London in 1680: about 37,700 enslaved Africans (Economic History Society). The white population, about 20,000, is historians\' estimate (Richard Dunn, Sugar and Slaves, 1972), not a figure the EHS gives from the count, so say "historians estimate." The Council of Trade doubted parts of the count, so say "about."',
          'No picture of a Barbados sugar works from the 1600s is in the course, so this case has none. The sugar works on slide 3 is in the French Caribbean, 1667; do not call it Barbados.'
        ],
        ask: 'Follow sugar to the people: what did it do to who worked and who ruled?',
        listenFor: 'Sugar needed huge numbers of workers, planters bought enslaved Africans, the enslaved became the majority, and the planters became a rich new elite.',
        ap: 'KC-4.2: "major changes occurred in ... gender and social structures." KC-4.2.II: "plantations expanded."'
      }
    },
    {
      phase: 'ligon', kind: 'source-quote', eyebrow: 'A Witness · Barbados, 1647 to 1650',
      kc: 'KC-4.2', title: 'An Englishman describes the island.',
      footer: 'Ligon lived on and helped run a sugar plantation. Keep that in mind.',
      template: {
        quote: 'The Island is divided into three sorts of men, viz. [namely] Masters, Servants, and slaves. The slaves and their posterity [children and descendants], being subject to their Masters for ever ... the servants, who are theirs but for five years.',
        attribution: { author: 'Richard Ligon, who lived on Barbados from 1647 to 1650', work: 'A True and Exact History of the Island of Barbados, spelling modernized', year: 'printed in London, 1657' },
        notice: 'How did the three groups differ? Which difference lasted forever?'
      },
      notes: {
        minutes: 2,
        land: [
          'Richard Ligon, A True & Exact History of the Island of Barbados (London, 1657). The 1657 spelling: "The Iland is divided into three sorts of men, viz. Masters, Servants, and slaves. The slaves and their posterity, being subject to their Masters for ever, are kept and preserv\'d with greater care then the servants, who are theirs but for five yeers, according to the law of the Iland." The slide joins the sentence with the cut shown and modernizes the spelling. "Viz." means "namely"; "posterity" means children and grandchildren.',
          'The cut part, "are kept and preserved with greater care than the servants," is a planter\'s claim. Ligon\'s point of view: an insider who lived on and helped run a plantation, writing for English readers he hoped would invest in sugar. The Primary Source module gives students the whole sentence and asks how his position shapes it.',
          '"Five years" is Ligon\'s statement of the island\'s law in his day; terms varied.',
          'This is a sourcing moment and an argument moment: the slaves\' condition is inherited ("their posterity ... for ever"), the servants\' is not. That is the line on which a society by race was built.'
        ],
        ask: 'How did the three groups differ? Which difference lasted forever?',
        listenFor: 'Masters owned the land and the people; servants worked for a set number of years and then were free; the enslaved and their children were held forever.',
        ap: 'KC-4.2. A primary source as evidence of a social structure.'
      }
    },
    {
      phase: 'casta', kind: 'frame-letterbox', eyebrow: 'What Changed · Spanish America · Topic 4.7',
      kc: 'KC-4.3', title: 'Ranked by ancestry in Spanish America.',
      subtitle: 'A casta painting from Mexico, about 1715 to 1720: a colonial society that ranked people by their ancestry, with Spaniards at the top.',
      notes: {
        minutes: 1,
        land: [
          'The picture: Juan Rodríguez Juárez, "De Mestizo, y de India Produce Coyote," about 1715 to 1720 (Hispanic Society of America, LA2122), verified for 4.7. The inscription reads: from a mestizo and an Indian woman comes a coyote.',
          'Read it as 4.7 taught it: an elite\'s ideal of an orderly society, not a census. But ancestry still opened and closed doors, and silver, land and trade made many creole families rich (KC-4.2.III.A, 4.7).',
          'KC-4.3: empires "shaping and being shaped by the diverse populations they incorporated." The mixed society of Spaniards, Indigenous peoples and Africans that grew up under Spanish rule produced new categories; the empire shaped its peoples, and they shaped it.',
          'Ask what the painting shares with Ligon\'s Barbados. That is close to First & 10 question 02, which students have already answered, so take answers aloud rather than writing a finished one on the board.'
        ],
        ask: 'What does this painting share with Ligon\'s Barbados?',
        listenFor: 'Both sort people by ancestry and race, with Europeans at the top.',
        ap: 'KC-4.3.'
      }
    },
    {
      phase: 'africa', kind: 'story-scene', eyebrow: 'What Changed · Africa · Topics 4.4 and 4.5',
      kc: 'KC-4.2', title: 'The trade reached African families and kingdoms.',
      template: {
        steps: [
          { label: 'Captives', text: 'About two of every three people carried away were male.' },
          { label: 'Villages', text: 'Parts of West Central Africa had more women than men.' },
          { label: 'Families', text: 'Historians argue women farmed more, and more women were enslaved in Africa.' },
          { label: 'States', key: true, text: 'Asante grew stronger. Kongo\'s king protested in 1526.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Retrieval from 4.5: about two of every three captives in the Atlantic trade were male (Slave Voyages; Eltis and Engerman). In parts of Africa, especially West Central Africa, that left communities with more women than men. Historians argue that women did more of the farming and that more women and girls were enslaved inside Africa; some argue polygyny became more common, and others find that evidence thin (Manning 1990; Fenske 2015). Say "historians argue."',
          'States, from 4.4: Asante rose around 1700 by controlling gold and buying guns from Dutch and English traders, and beat Denkyira at Feyiase in 1701. In 1526 Afonso I of Kongo complained that Portuguese traders were carrying off "the children of our nobles and vassals as well as relatives of ours" (Luís Madureira\'s translation, in John Thornton\'s 2023 book on Afonso, the text Topic 4.4\'s Primary Source uses); Afonso himself sold war captives and Kongo had enslaved people of its own.',
          'The picture: fishing canoes at Elmina, and canoes carrying enslaved people out to European ships at Manfroe on the Gold Coast, from an engraving printed in London in 1732 (Churchill\'s Collection of Voyages, vol. 5; verified for 4.4).'
        ],
        ask: 'Follow the numbers to the family: how did who was taken change who stayed?',
        listenFor: 'More men were taken, so villages had more women, and women did more of the work.',
        ap: 'KC-4.2: "gender and social structures." KC-4.2.II: "the Atlantic slave trade developed and intensified."'
      }
    },
    {
      phase: 'samework', kind: 'frame-triptych', eyebrow: 'What Stayed · Topic 4.5',
      kc: 'KC-4.2', title: 'The same work, more of it.',
      template: {
        panels: [
          { title: 'China, printed 1696' },
          { title: 'India, early 1700s' },
          { title: 'Holland, about 1655' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-4.2 begins with a continuity: "the world\'s productive systems continued to be heavily centered on agriculture." Most people in 1750, as in 1450, grew food. For cloth and silk the CED\'s words are Topic 4.5\'s KC-4.2.II.A: peasant and artisan labor "continued and intensified in many regions as the demand for food and consumer goods increased": old work, more of it. (KC-4.2.II\'s "traditional peasant agriculture increased and changed in nature" is about farming; the silk families\' mulberry trees and silkworms are its closest case here.)',
          'China: weaving on a draw loom, from the Pictures of Tilling and Weaving (Yuzhi Gengzhi tu), designed by the court painter Jiao Bingzhen and printed in 1696 with poems by the Kangxi emperor (Metropolitan Museum of Art). Peasant families raised silkworms and wove silk; some of it went to Manila for American silver.',
          'India: a painted cotton bed cover (palampore), early 1700s, made in or near Madras (Chennai) for buyers overseas (Met 15.101).',
          'Holland: Nicolaes Maes, The Spinner, about 1655 (Rijksmuseum SK-A-246). Merchants paid families in the countryside to spin and weave at home.',
          'All three were verified for 4.5. Much of the spinning was done by women and girls, and in China much of the weaving too; in India and the Dutch workshops the loom was mostly men\'s work (Parthasarathi 2001). All of it was done at home, as a family: a continuity in gender and family life inside a change in how much was made and who bought it.'
        ],
        ask: 'What would a weaver\'s grandparents have recognized in this work? What would have surprised them?',
        listenFor: 'Recognized: the same tools, at home, as a family. Surprised: buyers on the other side of the world, and silver from the Americas.',
        ap: 'KC-4.2. Continuity with a change inside it.'
      }
    },
    {
      phase: 'ladder', kind: 'continuity-change', eyebrow: 'What Stayed · Topics 4.4 and 4.7',
      kc: 'KC-4.3', title: 'Europe joined the old world. It did not replace it.',
      footer: 'Much of the world kept its own rulers and its own ways of trading.',
      template: {
        date: '1450 to 1750',
        before: { tag: '1450', items: ['Asian merchants run the Indian Ocean trade', 'Slavery inside Africa, in older forms'] },
        after: { tag: 'Changed by 1750', items: ['European ships and companies join the ocean trade', 'The Atlantic slave trade grows huge'] },
        continued: { tag: 'Continued', items: ['Asian merchants keep trading', 'Older slavery goes on inside Africa', 'Hereditary rulers on top; nobles keep privileges'] }
      },
      notes: {
        minutes: 2,
        land: [
          'From 4.4: Gujarati, Swahili Arab, Omani and Javanese merchants kept the Indian Ocean trading; much of it stayed intra-Asian trade, and European merchants often made money by joining it. Older forms of slavery went on in Africa through the whole period.',
          'From 4.7: almost everywhere a ruler who inherited the throne still sat on top, and old nobles kept most of their privileges even when stronger kings squeezed them.',
          'KC-4.3: empires grew in scope and influence, "shaping and being shaped by the diverse populations they incorporated." Asian merchants, African states and the old nobilities shaped the empires as much as the empires shaped them.'
        ],
        ask: 'Sort it: which of these is the biggest continuity?',
        listenFor: 'Any, defended: rulers and nobles on top; Asian merchants still trading; older slavery in Africa.',
        ap: 'KC-4.3. Continuity and Change.'
      }
    },
    {
      phase: 'relate', kind: 'story-steps', eyebrow: 'Argumentation 6.C · Model',
      title: 'Three ways evidence relates.',
      template: {
        steps: [
          { label: 'Led to', text: 'Sugar demand led to plantations, which led to a huge slave trade.' },
          { label: 'Same pattern', text: 'Spinners in Holland and weavers in India both did old work in larger amounts.' },
          { label: 'A contrast', key: true, text: 'Andean men were drafted far from home; a weaver in India kept working at home.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The suggested skill, 6.C: use historical reasoning to explain relationships among pieces of historical evidence. A list of evidence is not an argument; the relationships are.',
          'Led to: a chain of causes, often across places (causation inside a continuity-and-change answer). Same pattern: two places showing one development (it corroborates). A contrast: a change beside a continuity, which is what lets an answer say how much changed. The slide\'s contrast (the mit\'a against an Indian weaver) is the Skill Builder\'s model; the weaver is not in the Skill Builder\'s practice set, so no practice pair has a printed answer.',
          'Push students to say the relationship word aloud: "This led to that because ..."; "This shows the same pattern as that, because both ..."; "This changed, but that stayed, because ..."'
        ],
        ask: 'Which relationship is most useful for saying how much changed?',
        listenFor: 'A contrast: a change set beside a continuity.',
        ap: 'Argumentation 6.C, modeled.'
      }
    },
    {
      phase: 'chain', kind: 'cause-chain', eyebrow: 'Argumentation 6.C · One Chain',
      kc: 'KC-4.2.II', title: 'One chain links three continents.',
      footer: 'The words on the arrows are the argument.',
      template: {
        steps: [
          { label: 'Europe', text: 'Buyers want sugar' },
          { label: 'The Caribbean', text: 'Planters build sugar plantations' },
          { label: 'The Atlantic', text: 'Millions of Africans are forced onto ships', key: true },
          { label: 'West Central Africa', text: 'Villages are left with more women than men' }
        ],
        links: ['so', 'whose owners bought', 'which left']
      },
      notes: {
        minutes: 2,
        land: [
          'This is the "led to" relationship drawn out: four pieces of evidence from four places, each linked to the next by a reason. The linking words on the arrows are what turn a list into an argument.',
          'Every link is from earlier topics: European demand for sugar (4.3), Caribbean plantations (4.3, 4.4), the slave trade\'s scale (4.4), the sex ratio of the trade and its effect in West Central Africa (4.5).',
          'Ask students to say the whole chain aloud with the arrow words, then to add one more link of their own (the planters became a rich elite; the enslaved became most of the island\'s people).'
        ],
        ask: 'Read the chain aloud with the arrow words. Then add one more link.',
        listenFor: 'Europe wanted sugar, so planters built plantations, whose owners bought millions of enslaved Africans, which left villages in West Central Africa with more women than men; and the planters became a rich elite.',
        ap: 'KC-4.2.II. Argumentation 6.C: one relationship, explained.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Everything changed after 1492.', evidence: 'In 1750, as in 1450, most people farmed, and rulers and nobles stayed on top.', source: 'KC-4.2; Topic 4.7' },
          { myth: 'Europeans took over the world\'s trade.', evidence: 'Gujarati, Chinese and Armenian merchants kept trading; Europeans often joined Asian trade.', source: 'Topics 4.4 and 4.5' },
          { myth: 'The slave trade changed only the Americas.', evidence: 'It changed families in parts of Africa and made some African states stronger.', source: 'Topics 4.4 and 4.5' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Row 1: the continuity is half the answer. Do not swing to "nothing changed": the plantation Americas and Atlantic Africa changed enormously.',
          'Row 2: European ships became one more carrier inside Asian markets; Dutch ships earned money from trade between Asian ports (4.5). Do not swing to "Europeans did not matter": the Portuguese taxed shipping with the cartaz and the VOC took ports.',
          'Row 3: the trade reached families and states at both ends. Do not swing to "African rulers were only victims" or "only sellers": Asante gained, Kongo\'s king protested and also sold war captives.'
        ],
        ask: 'Which myth is the hardest to correct without making a new mistake?',
        listenFor: 'Any, with the opposite mistake named: "everything changed" versus "nothing changed"; "Europeans ran it" versus "Europeans did not matter"; "victims" versus "sellers."'
      }
    },
    {
      retelling: true, phase: 'retell', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      title: 'Follow the trade to the people.',
      footer: 'What stayed: most people farmed, the same work grew, and kings and nobles stayed on top.',
      template: {
        steps: [
          { label: 'Ships', text: 'Borrowed tools, new ships, known winds' },
          { label: 'Demand', text: 'Sugar, silver, cloth' },
          { label: 'Workers', text: 'Enslaved Africans, drafted Andeans, peasants and artisans' },
          { label: 'Society', text: 'Masters and slaves; casta; African families and states', key: true }
        ],
        links: ['carried', 'needed', 'which remade']
      },
      notes: {
        minutes: 4,
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw it from memory, with one case under each box and the continuity line underneath.',
          'The chain is the cause (KC-4.1, II, II.A, KC-4.2.II); the last box is the change (KC-4.2, KC-4.3); the footer is the continuity (KC-4.2\'s "continued to be heavily centered on agriculture"). The slide carries no single Key Concept band because it spans all of them.',
          'Push for named cases: Barbados, the casta ranking, West Central Africa\'s villages, Asante; Potosí\'s mit\'a; the Chinese silk family, the Indian weaver, the Dutch spinner.'
        ],
        ask: 'Redraw it without looking, with one case under each box, and the line for what stayed.',
        listenFor: 'Ships carried new trade in sugar, silver and cloth, which needed workers (enslaved Africans, drafted Andeans, peasants and artisans), which remade society (Barbados, casta, African families), while most people still farmed and kings and nobles stayed on top.'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Build a Thesis · Continuity and Change',
      kc: 'Unit 4: Learning Objective N',
      footer: 'Name a change, a continuity, and the reason.',
      template: {
        weak: 'The economy changed society a lot between 1450 and 1750.',
        strong: 'Between 1450 and 1750, ______ **changed** social structures most in ______, **because** ______, **while** ______ **stayed the same**.'
      },
      notes: {
        minutes: 2,
        land: [
          'The CED\'s sample activity (p. 77) starts here: which reasoning process best organizes an answer to "how economic developments led to changes in social structures, 1450 to 1750"? The CED\'s own reasoning process for 4.8 is Continuity and Change, with causes inside it: the "because" is causation, and "changed ... while ... stayed the same" is continuity and change.',
          'The weak thesis names no development, no place, no continuity and no reason. It fits any three centuries in history, which is why it earns no credit.',
          'This is a frame, not a model answer. Have pairs fill it in aloud with a case they choose, then trade with a partner and say what would make the partner\'s stronger (the CED\'s peer revision). The First & 10 gives the criteria for a strong thesis and prints no finished one. The reading\'s opening and takeaway pose the question rather than answer it; the relationship models (slides 17 and 18, the Skill Builder) are taught content a student may use as evidence, not a finished thesis.'
        ],
        ask: 'Why is "changed society a lot" not a thesis?',
        listenFor: 'It does not say which economic development, which social structure, where, what stayed the same, or why.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Connect the evidence.',
      subtitle: 'Argumentation 6.C: led to, the same pattern, or a contrast. Say how two pieces relate, and why.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-8-continuity-and-change.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 6.C Argumentation: explain relationships among pieces of historical evidence.',
          'It models the three relationships (the sugar chain, spinners in Holland and weavers in India, the mit\'a against an Indian weaver), ends with a sentence frame rather than a finished sentence, then gives students a new set: Potosí and the mit\'a, China\'s silver taxes, the casta ranking, and West Central Africa\'s villages. Students explain how two of them relate, and name the relationship.',
          'Strong answers: Potosí\'s silver, dug by drafted Andean men, flowed to China because of its silver taxes ("led to"); the casta ranking and the slave trade\'s effect on African villages both show the trade reshaping who held what place ("same pattern", if the student says exactly what they share); the mit\'a took men far from home while West Central African women did more of the farming at home ("a contrast" or "same pattern", defended either way).'
        ],
        ask: 'After students have written: which relationship was hardest to explain, and why?',
        listenFor: 'Debrief only after the module: "same pattern," because you have to say what the two cases share.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'One chain, from trade to people.',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-8-continuity-and-change.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 4.8. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'It asks for one economic development followed to the workers it needed and to one change in a social structure (KC-4.2.II, KC-4.2). Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name one economic development, the workers it needed, and what it changed.',
        listenFor: 'Sugar, enslaved Africans, a society of masters and slaves; silver, the mit\'a, Andean communities losing their men to the mine.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'One change, one continuity, two objects.',
      subtitle: 'Choose a card that shows a change in society and a card that shows something that stayed. Then connect them.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-8-continuity-and-change.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Six real objects, all verified for earlier Unit 4 topics: the Potosí woodcut (1553); the sugar works engraved for Du Tertre (1667); the canoes at Elmina and Manfroe (printed 1732); the casta painting (about 1715 to 1720); the Gengzhitu silk-reeling scene (1696); and the Indian palampore (early 1700s).',
          'Observation before inference: what the object shows, then what it suggests about a social structure, then what it cannot tell you. European engravings of Africa and the Caribbean were made for European readers; the casta painting is an elite\'s ideal. Both are good limits to name.',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated.'
        ],
        ask: 'What does the object show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Your argument: how economic developments changed social structures, and what stayed the same.',
      subtitle: 'A thesis, then evidence from three Unit 4 topics, connected. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-8-continuity-and-change.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for a thesis that names a change and a continuity, evidence from at least three Unit 4 topics, and at least one sentence that explains how two pieces of evidence relate. That is the learning objective, run through continuity and change, with the 6.C move inside it.',
          'Socrates is told the skill is Continuity and Change, so it will push for what stayed the same as well as what changed.',
          'The Era 3 Study Guide Work Day follows on the next class day, and the Era 3 Exam after it. This argument is good exam practice: the long essay asks for the same moves.'
        ],
        ask: 'Does your answer have a thesis, three topics\' evidence, and one sentence that connects two pieces?',
        listenFor: 'Sugar on Barbados (today, 4.8), the casta ranking (4.7), the Chinese silk family (4.5), with "led to," "the same pattern" or "a contrast."'
      }
    },
    {
      phase: 'close', kind: 'frame-letterbox', eyebrow: 'The Hand-off',
      title: 'Next: who do those states belong to?',
      subtitle: 'By 1750 the oceans were joined and states were stronger than ever. That question is Unit 5.',
      notes: {
        minutes: 2,
        land: [
          'The picture: Potosí, the silver mountain, in a woodcut from Pedro Cieza de León\'s Crónica del Perú (Seville, 1553), with tiny figures climbing to the mine entrances (verified for 4.4). One mountain, a world economy, and the people sent to dig it.',
          'The slide projects only the hand-off, on purpose: the answer to the learning objective is each student\'s own thesis (Checkpoint 2), so no finished thesis is projected. Ask for answers aloud; the listen-for line below is one defensible thesis for the teacher only.',
          'Hand off to Unit 5 in the words of the unit story map, and no further: Unit 5 is not taught here.'
        ],
        ask: 'Before the hand-off: say your thesis for Topic 4.8 in one sentence.',
        listenFor: 'Economic change reached into everyday social life: who worked, who ruled, and how families lived. It changed the most where it needed workers by force, while most people still farmed and kings and nobles stayed on top.'
      }
    }
  ]
};
