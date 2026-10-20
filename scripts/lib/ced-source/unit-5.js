'use strict';

/**
 * The College Board's own words for Unit 5, copied from the CED itself.
 *
 * Source: AP World History: Modern Course and Exam Description, effective
 * Fall 2026, Course Framework V.1, pages 93 to 110:
 * https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf
 * Transcribed 2026-10-20 from the PDF, not from any file in this repository.
 * The PDF's text layer drops the spaces between some words ("Explainhowindustrialization");
 * those spaces were restored by reading the page, and nothing else was
 * changed. Em dashes are kept as the CED prints them. The CED prints the
 * list inside KC-5.1.I.A with square bullets; they are written here as ▪,
 * the character the lesson data uses for them.
 *
 * THIS FILE IS WHERE A UNIT 5 STORY STARTS. Not the lesson data, not the
 * story map, not UNIT-5-DEEP-AUDIT.md and not memory: every one of those is a
 * copy. When a copy disagrees with this file, the copy is wrong.
 * scripts/test/ced-source.test.js fails the push when the lesson data, the
 * story map or a story draft drifts from it.
 *
 * Edit this file only to match a new CED, and say which edition in the
 * header. Never edit it to match the course.
 *
 * Like Unit 4, some topics carry more than one learning objective (5.1 has
 * two, A and B, each under its own thematic focus), so every topic lists
 * `learningObjectives`, and every Key Concept names the objective it sits
 * under (`lo`), exactly as the CED pairs them on the page.
 *
 * Illustrative examples are optional. The CED says they "are provided as
 * additional resources, should teachers choose to use them ... and do not in
 * any way constitute additional, preferred, or required information.
 * Historical development statements comprise the knowledge required to
 * demonstrate mastery of the learning objective." (The CED's guide to reading
 * a topic page; scripts/lib/ced-source/unit-3.js cites the same passage.)
 * The CED prints each topic's examples in a side column beside the Key
 * Concept they illustrate; `illustrativeExamples` keeps the CED's heading for
 * each group ("Demands:", "Call for national unification or liberation:").
 *
 * Things printed in the CED that are recorded here rather than silently
 * corrected, because this file copies the CED and does not edit it:
 *   - The ECN thematic focus is printed "Economics Systems" on p. 106, where
 *     the course's theme list calls it Economic Systems.
 *   - On p. 110, the 5.10 review copy of KC-5.3.II.i has no closing period;
 *     the 5.1 page (p. 98) prints it with one.
 *   - KC-5.3.II.i, "Nationalism also became a major force...", is printed on
 *     the 5.1 page under Learning Objective A, not on the 5.2 page, even
 *     though 5.2 is the nationalism topic. It belongs to 5.1 here because the
 *     CED puts it there.
 */

module.exports = {
  edition: 'AP World History: Modern CED, effective Fall 2026',
  url: 'https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf',
  unit: '5',
  title: 'Revolutions',
  period: 'c. 1750 to c. 1900',
  examWeighting: '12–15%',
  classPeriods: '~20–23',
  topics: {
    '5.1': {
      title: 'The Enlightenment',
      page: 98,
      pages: [98, 99],
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '3.A', name: 'Claims and Evidence in Sources', text: 'Identify and describe a claim and/or argument in a text-based or non-text-based source.' },
      thematicFocus: 'Cultural Developments and Interactions (CDI); Social Interactions and Organization (SIO)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective A', theme: 'Cultural Developments and Interactions (CDI)', text: 'Explain the intellectual and ideological context in which revolutions swept the Atlantic world from 1750 to 1900.' },
        { code: 'Unit 5: Learning Objective B', theme: 'Social Interactions and Organization (SIO)', text: 'Explain how the Enlightenment affected societies over time.' }
      ],
      keyConcepts: [
        { lo: 'A', code: 'KC-5.3.I.A', text: 'Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.' },
        { lo: 'A', code: 'KC-5.3.I', text: 'The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.' },
        { lo: 'A', code: 'KC-5.3.II.i', text: 'Nationalism also became a major force shaping the historical development of states and empires.' },
        { lo: 'B', code: 'KC-5.3.I.C', text: 'Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom.' },
        { lo: 'B', code: 'KC-5.3.IV.B', text: 'Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies.' }
      ],
      // p. 99, printed beside KC-5.3.I.C and KC-5.3.IV.B under the heading "Demands:".
      illustrativeExamples: {
        'Demands': ['Mary Wollstonecraft’s A Vindication of the Rights of Woman', 'Olympe de Gouges’s Declaration of the Rights of Woman and of the Female Citizen', 'Seneca Falls Conference (1848) organized by Elizabeth Cady Stanton and Lucretia Mott']
      }
    },
    '5.2': {
      title: 'Nationalism and Revolutions in the Period from 1750 to 1900',
      page: 100,
      pages: [100, 101],
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '3.C', name: 'Claims and Evidence in Sources', text: 'Compare the arguments or main ideas of two sources.' },
      thematicFocus: 'Governance (GOV)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective C', theme: 'Governance (GOV)', text: 'Explain causes and effects of the various revolutions in the period from 1750 to 1900.' }
      ],
      keyConcepts: [
        { lo: 'C', code: 'KC-5.3.II.ii', text: 'People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity.' },
        { lo: 'C', code: 'KC-5.3', text: 'The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.' },
        { lo: 'C', code: 'KC-5.3.IV.A.i', text: 'Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism.' },
        { lo: 'C', code: 'KC-5.3.III.B', text: 'Colonial subjects in the Americas led a series of rebellions inspired by democratic ideals. The American Revolution, and its successful establishment of a republic, the United States of America, was a model and inspiration for a number of the revolutions that followed. The American Revolution, the Haitian Revolution, and the Latin American independence movements facilitated the emergence of independent states in the Americas.' },
        { lo: 'C', code: 'KC-5.3.I.B', text: 'The ideas of Enlightenment philosophers, as reflected in revolutionary documents—including the American Declaration of Independence during the American Revolution, the French “Declaration of the Rights of Man and of the Citizen” during the French Revolution, and Bolívar’s “Letter from Jamaica” on the eve of the Latin American revolutions—influenced resistance to existing political authority, often in pursuit of independence and democratic ideals.' },
        { lo: 'C', code: 'KC-5.3.II.iii', text: 'Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions.' }
      ],
      // p. 101, beside KC-5.3.II.iii.
      illustrativeExamples: {
        'Call for national unification or liberation': ['Propaganda Movement in the Philippines', 'Maori nationalism and the New Zealand wars in New Zealand', 'Puerto Rico—writings of Lola Rodríguez de Tió', 'German and Italian unifications', 'Balkan nationalisms', 'Ottomanism']
      },
      // p. 97, Activity 1. Optional, like everything on that page.
      sampleActivity: 'Socratic Seminar: Assign students excerpts from the Declaration of Independence, the “Declaration of the Rights of Man and of the Citizen,” and the “Letter from Jamaica.” Place students in groups of about eight and have them discuss the following questions: How does historical context help us understand these documents? How are the authors’ arguments similar? Why? How are the authors’ arguments different? Why? To what extent do you think these documents affected the course of human history?'
    },
    '5.3': {
      title: 'Industrial Revolution Begins',
      page: 102,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '1.B', name: 'Developments and Processes', text: 'Explain a historical concept, development, or process.' },
      thematicFocus: 'Humans and the Environments (ENV)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective D', theme: 'Humans and the Environments (ENV)', text: 'Explain how environmental factors contributed to industrialization from 1750 to 1900.' }
      ],
      keyConcepts: [
        { lo: 'D', code: 'KC-5.1.I.A', text: 'A variety of factors contributed to the growth of industrial production and eventually resulted in the Industrial Revolution, including: ▪ Proximity to waterways; access to rivers and canals ▪ Geographical distribution of coal, iron, and timber ▪ Urbanization ▪ Improved agricultural productivity ▪ Legal protection of private property ▪ Access to foreign resources ▪ Accumulation of capital' },
        { lo: 'D', code: 'KC-5.1.I.C', text: 'The development of the factory system concentrated production in a single location and led to an increasing degree of specialization of labor.' }
      ],
      illustrativeExamples: {}
    },
    '5.4': {
      title: 'Industrialization Spreads in the Period from 1750 to 1900',
      page: 103,
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '5.A', name: 'Making Connections', text: 'Identify patterns among or connections between historical developments and processes.' },
      thematicFocus: 'Technology and Innovation (TEC)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective E', theme: 'Technology and Innovation (TEC)', text: 'Explain how different modes and locations of production have developed and changed over time.' }
      ],
      keyConcepts: [
        { lo: 'E', code: 'KC-5.1.II.B', text: 'The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.' },
        { lo: 'E', code: 'KC-5.1.I.D', text: 'As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan.' }
      ],
      // p. 103, beside KC-5.1.II.B. The page also lists an available resource:
      // the Professional Development module "Comparison in Period 5" (on the
      // industrialization of Russia and Japan).
      illustrativeExamples: {
        'Decline of Middle Eastern and Asian share in global manufacturing': ['Shipbuilding in India and Southeast Asia', 'Iron works in India', 'Textile production in India and Egypt']
      }
    },
    '5.5': {
      title: 'Technology of the Industrial Age',
      page: 104,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '1.B', name: 'Developments and Processes', text: 'Explain a historical concept, development, or process.' },
      thematicFocus: 'Technology and Innovation (TEC)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective F', theme: 'Technology and Innovation (TEC)', text: 'Explain how technology shaped economic production over time.' }
      ],
      keyConcepts: [
        { lo: 'F', code: 'KC-5.1.I.B', text: 'The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.' },
        { lo: 'F', code: 'KC-5.1.I.E', text: 'The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.' },
        { lo: 'F', code: 'KC-5.1.IV', text: 'Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.' }
      ],
      illustrativeExamples: {},
      // p. 97, Activity 2. Optional.
      sampleActivity: 'Debate: Place students into groups of five. Assign each student a technology from this topic and provide them a reading about it. Present students with this scenario: Imagine you are on the writing staff of Scientific American magazine. Your team is going to write an article entitled “Five Technologies that Changed the World.” The steam engine, railroad, internal combustion engine, steamship, and telegraph will be the featured technologies; your job is to decide how to rank them. After reading about your assigned technology, engage in a debate with your group about each technology’s relative importance. As a group, rank them from most important to least and write a few paragraphs justifying your decision.'
    },
    '5.6': {
      title: 'Industrialization: Government’s Role from 1750 to 1900',
      page: 105,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '5.A', name: 'Making Connections', text: 'Identify patterns among or connections between historical developments and processes.' },
      thematicFocus: 'Governance (GOV)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective G', theme: 'Governance (GOV)', text: 'Explain the causes and effects of economic strategies of different states and empires.' }
      ],
      keyConcepts: [
        { lo: 'G', code: 'KC-5.1.V.C', text: 'As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization.' },
        { lo: 'G', code: 'KC-5.2.II.A', text: 'The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era.' }
      ],
      // p. 105, beside KC-5.1.V.C.
      illustrativeExamples: {
        'State-sponsored visions of industrialization': ['Muhammad Ali’s development of a cotton textile industry in Egypt']
      }
    },
    '5.7': {
      title: 'Economic Developments and Innovations in the Industrial Age',
      page: 106,
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '5.B', name: 'Making Connections', text: 'Explain how a historical development or process relates to another historical development or process.' },
      thematicFocus: 'Economics Systems (ECN)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective H', theme: 'Economics Systems (ECN)', text: 'Explain the development of economic systems, ideologies, and institutions and how they contributed to change in the period from 1750 to 1900.' }
      ],
      keyConcepts: [
        { lo: 'H', code: 'KC-5.1.III.A', text: 'Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith’s theories of laissez-faire capitalism and free markets.' },
        { lo: 'H', code: 'KC-5.1.III.B', text: 'The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance.' },
        { lo: 'H', code: 'KC-5.1', text: 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.' }
      ],
      // p. 106, in the side column. The page also lists an available resource:
      // Classroom Resources, "Teaching Consumerism in World History".
      illustrativeExamples: {
        'Transnational businesses': ['Hong Kong and Shanghai Banking Corporation (HSBC)', 'Unilever based in England and the Netherlands and operating in British West Africa and the Belgian Congo'],
        'Financial instruments': ['Stock markets', 'Limited-liability corporations']
      }
    },
    '5.8': {
      title: 'Reactions to the Industrial Economy from 1750 to 1900',
      page: 107,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '2.B', name: 'Sourcing and Situation', text: 'Explain the point of view, purpose, historical situation, and/or audience of a source.' },
      thematicFocus: 'Social Interactions and Organization (SIO)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective I', theme: 'Social Interactions and Organization (SIO)', text: 'Explain the causes and effects of calls for changes in industrial societies from 1750 to 1900.' }
      ],
      keyConcepts: [
        { lo: 'I', code: 'KC-5.1.V.D', text: 'In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms.' },
        { lo: 'I', code: 'KC-5.1.V.A', text: 'In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society.' },
        { lo: 'I', code: 'KC-5.3.IV.A.ii', text: 'Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism.' },
        { lo: 'I', code: 'KC-5.1.V.B', text: 'In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups.' }
      ],
      illustrativeExamples: {},
      // p. 97, Activity 3. Optional.
      sampleActivity: 'Critique Reasoning: In groups of three, assign the descriptions of Manchester from Friedrich Engels’s The Condition of the Working-Class in England in 1844 and the preface to the Wheelan and Co. business directory, 1852. Ask students to discuss the differences in the descriptions; how the point of view, purpose, and intended audience of the authors might explain the differences; and which description they believe is the most accurate and why.'
    },
    '5.9': {
      title: 'Society and the Industrial Age',
      page: 108,
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '4.B', name: 'Contextualization', text: 'Explain how a specific historical development or process is situated within a broader historical context.' },
      thematicFocus: 'Social Interactions and Organization (SIO)',
      learningObjectives: [
        { code: 'Unit 5: Learning Objective J', theme: 'Social Interactions and Organization (SIO)', text: 'Explain how industrialization caused change in existing social hierarchies and standards of living.' }
      ],
      keyConcepts: [
        { lo: 'J', code: 'KC-5.1.VI.A', text: 'New social classes, including the middle class and the industrial working class, developed.' },
        { lo: 'J', code: 'KC-5.1.VI.B', text: 'While women and often children in working class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development.' },
        { lo: 'J', code: 'KC-5.1.VI.C', text: 'The rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth.' }
      ],
      illustrativeExamples: {}
    },
    '5.10': {
      title: 'Continuity and Change in the Industrial Age',
      page: 109,
      pages: [109, 110],
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '6.C', name: 'Argumentation', text: 'Use historical reasoning to explain relationships among pieces of historical evidence.' },
      thematicFocus: null,
      learningObjectives: [
        { code: 'Unit 5: Learning Objective K', theme: null, text: 'Explain the extent to which industrialization brought change from 1750 to 1900.' }
      ],
      // The 5.10 pages list these as "Review: Unit 5 Key Concepts". The page
      // also lists an available resource: Classroom Resources, "Review Essay:
      // Teaching the Great Divergence".
      keyConcepts: [
        { lo: 'K', code: 'KC-5.1', text: 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.' },
        { lo: 'K', code: 'KC-5.1.IV', text: 'Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.' },
        { lo: 'K', code: 'KC-5.3', text: 'The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.' },
        { lo: 'K', code: 'KC-5.3.I.A', text: 'Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.' },
        { lo: 'K', code: 'KC-5.3.I', text: 'The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.' },
        { lo: 'K', code: 'KC-5.3.II.i', text: 'Nationalism also became a major force shaping the historical development of states and empires' }
      ],
      illustrativeExamples: {}
    }
  }
};
