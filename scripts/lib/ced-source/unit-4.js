'use strict';

/**
 * The College Board's own words for Unit 4, copied from the CED itself.
 *
 * Source: AP World History: Modern Course and Exam Description, effective
 * Fall 2026, Course Framework V.1, pages 73 to 91:
 * https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf
 * Transcribed 2026-10-11 from the PDF, not from any file in this repository.
 * The PDF's text layer drops the spaces between some words ("Explainhowcross-
 * cultural"); those spaces were restored by reading the page, and nothing else
 * was changed. Em dashes are kept as the CED prints them.
 *
 * THIS FILE IS WHERE A UNIT 4 STORY STARTS. Not the lesson data, not the
 * story map, not ced-unit4-contract.js, not UNIT-4-DEEP-AUDIT.md and not
 * memory: every one of those is a copy. When a copy disagrees with this file,
 * the copy is wrong. scripts/test/ced-source.test.js fails the push when the
 * lesson data, the contract, the story map or a story draft drifts from it.
 *
 * Edit this file only to match a new CED, and say which edition in the
 * header. Never edit it to match the course.
 *
 * Unit 4 differs from Unit 3 in one way that matters to the shape of this
 * file: several topics carry more than one learning objective (4.2 has two,
 * 4.4 three, 4.5 four), each under its own thematic focus. So every topic here
 * lists `learningObjectives`, and every Key Concept names the objective it
 * sits under (`lo`), exactly as the CED pairs them on the page.
 *
 * Illustrative examples are optional. The CED says they "are provided as
 * additional resources, should teachers choose to use them ... and do not in
 * any way constitute additional, preferred, or required information.
 * Historical development statements comprise the knowledge required to
 * demonstrate mastery of the learning objective." (The CED's guide to reading
 * a topic page, an annotated copy of p. 85; scripts/lib/ced-source/unit-3.js
 * cites the same passage.)
 *
 * Two things printed in the CED are recorded here rather than silently
 * corrected, because this file copies the CED and does not edit it:
 *   - p. 75 prints the unit's exam weighting as "12–10%"; the unit cover on
 *     p. 73 prints "12–15%". The cover figure is the one used elsewhere.
 *   - The ECN thematic focus is printed "Economics Systems" on pp. 79, 84 and
 *     86, where the course's theme list calls it Economic Systems.
 */

module.exports = {
  edition: 'AP World History: Modern CED, effective Fall 2026',
  url: 'https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf',
  unit: '4',
  title: 'Transoceanic Interconnections',
  period: 'c. 1450 to c. 1750',
  examWeighting: '12–15%',
  classPeriods: '~22–25',
  topics: {
    '4.1': {
      title: 'Technological Innovations from 1450 to 1750',
      page: 78,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '4.A', name: 'Contextualization', text: 'Identify and describe a historical context for a specific historical development or process.' },
      thematicFocus: 'Technology and Innovation (TEC)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective A', theme: 'Technology and Innovation (TEC)', text: 'Explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750.' }
      ],
      keyConcepts: [
        { lo: 'A', code: 'KC-4.1.II', text: 'Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.' },
        { lo: 'A', code: 'KC-4.1.II.A', text: 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible.' }
      ],
      illustrativeExamples: {
        'Innovations in ship design': ['Caravel', 'Carrack', 'Fluyt'],
        'European technological developments influenced by cross-cultural interactions with the Classical, Islamic, and Asian worlds': ['Lateen sail', 'Compass', 'Astronomical charts']
      }
    },
    '4.2': {
      title: 'Exploration: Causes and Events from 1450 to 1750',
      page: 79,
      pages: [79, 80],
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '5.B', name: 'Making Connections', text: 'Explain how a historical development or process relates to another historical development or process.' },
      thematicFocus: 'Governance (GOV); Economics Systems (ECN)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective B', theme: 'Governance (GOV)', text: 'Describe the role of states in the expansion of maritime exploration from 1450 to 1750.' },
        { code: 'Unit 4: Learning Objective C', theme: 'Economics Systems (ECN)', text: 'Explain the economic causes and effects of maritime exploration by the various European states.' }
      ],
      keyConcepts: [
        { lo: 'B', code: 'KC-4.1.III', text: 'New state-supported transoceanic maritime exploration occurred in this period.' },
        { lo: 'C', code: 'KC-4.1.III.A', text: 'Portuguese development of maritime technology and navigational skills led to increased travel to and trade with Africa and Asia and resulted in the construction of a global trading-post empire.' },
        { lo: 'C', code: 'KC-4.1.III.B', text: 'Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade.' },
        { lo: 'C', code: 'KC-4.1.III.C', text: 'Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia.' }
      ],
      illustrativeExamples: {},
      // Page 77, Activity 1. Optional, like everything on that page.
      sampleActivity: 'Making Connections: Ask students to brainstorm a list of everything they remember about technological developments in Asia from previous units and what they recently learned about European exploration. Assign students a partner. With their partner, have them create a concept web that maps the causal connections between the two developments.'
    },
    '4.3': {
      title: 'Columbian Exchange',
      page: 81,
      pages: [81, 82],
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '3.B', name: 'Claims and Evidence in Sources', text: 'Identify the evidence used in a source to support an argument.' },
      thematicFocus: 'Humans and the Environments (ENV)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective D', theme: 'Humans and the Environments (ENV)', text: 'Explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres.' }
      ],
      keyConcepts: [
        { lo: 'D', code: 'KC-4.1.V', text: 'The new connections between the Eastern and Western Hemispheres resulted in the exchange of new plants, animals, and diseases, known as the Columbian Exchange.' },
        { lo: 'D', code: 'KC-4.1.V.A', text: 'European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria. Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas.' },
        { lo: 'D', code: 'KC-4.1.V.B', text: 'American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East.' },
        { lo: 'D', code: 'KC-4.1.V.C', text: 'Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons.' },
        { lo: 'D', code: 'KC-4.1.V.D', text: 'Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops.' }
      ],
      illustrativeExamples: {
        'Domesticated animals': ['Horses', 'Pigs', 'Cattle'],
        'Foods brought by African enslaved persons': ['Okra', 'Rice']
      }
    },
    '4.4': {
      title: 'Maritime Empires Established',
      page: 83,
      pages: [83, 84],
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '2.A', name: 'Sourcing and Situation', text: 'Identify a source’s point of view, purpose, historical situation, and/or audience.' },
      thematicFocus: 'Governance (GOV); Economics Systems (ECN); Social Interactions and Organization (SIO)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective E', theme: 'Governance (GOV)', text: 'Explain the process of state building and expansion among various empires and states in the period from 1450 to 1750.' },
        { code: 'Unit 4: Learning Objective F', theme: 'Economics Systems (ECN)', text: 'Explain the continuities and changes in economic systems and labor systems from 1450 to 1750.' },
        { code: 'Unit 4: Learning Objective G', theme: 'Social Interactions and Organization (SIO)', text: 'Explain changes and continuities in systems of slavery in the period from 1450 to 1750.' }
      ],
      keyConcepts: [
        { lo: 'E', code: 'KC-4.3.II.A.i', text: 'Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks. Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies.' },
        { lo: 'E', code: 'KC-4.3.II.C', text: 'Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British.' },
        { lo: 'E', code: 'KC-4.3.II.A.ii', text: 'The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo, whose participation in trading networks led to an increase in their influence.' },
        { lo: 'F', code: 'KC-4.3.II.A.iii', text: 'Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants.' },
        { lo: 'F', code: 'KC-4.2.II.D', text: 'Newly developed colonial economies in the Americas largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems.' },
        { lo: 'G', code: 'KC-4.2.II.B', text: 'Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions.' },
        { lo: 'G', code: 'KC-4.2.II.C', text: 'The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes.' }
      ],
      illustrativeExamples: {
        'Asian states that adopted restrictive or isolationist trade policies': ['Ming China', 'Tokugawa Japan'],
        'Indian Ocean Asian merchants': ['Swahili Arabs', 'Omanis', 'Gujaratis', 'Javanese']
      }
    },
    '4.5': {
      title: 'Maritime Empires Maintained and Developed',
      page: 85,
      pages: [85, 86, 87],
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '3.A', name: 'Claims and Evidence in Sources', text: 'Identify and describe a claim and/or argument in a text-based or non-text-based source.' },
      thematicFocus: 'Governance (GOV); Economics Systems (ECN); Social Interactions and Organization (SIO); Cultural Developments and Interactions (CDI)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective H', theme: 'Governance (GOV)', text: 'Explain how rulers employed economic strategies to consolidate and maintain power throughout the period from 1450 to 1750.' },
        { code: 'Unit 4: Learning Objective I', theme: 'Economics Systems (ECN)', text: 'Explain the continuities and changes in networks of exchange from 1450 to 1750.' },
        { code: 'Unit 4: Learning Objective J', theme: 'Social Interactions and Organization (SIO)', text: 'Explain how political, economic, and cultural factors affected society from 1450 to 1750.' },
        { code: 'Unit 4: Learning Objective K', theme: 'Cultural Developments and Interactions (CDI)', text: 'Explain the similarities and differences in how various belief systems affected societies from 1450 to 1750.' }
      ],
      keyConcepts: [
        { lo: 'H', code: 'KC-4.1.IV.C', text: 'Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade.' },
        { lo: 'H', code: 'KC-4.3.III.ii', text: 'Economic disputes led to rivalries and conflict between states.' },
        { lo: 'I', code: 'KC-4.1.IV.D.i', text: 'The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons.' },
        { lo: 'I', code: 'KC-4.1.IV', text: 'The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants.' },
        { lo: 'I', code: 'KC-4.2.II.A', text: 'Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased.' },
        { lo: 'J', code: 'KC-4.2.III.C', text: 'Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons.' },
        { lo: 'J', code: 'KC-4.1.IV.D.ii', text: 'The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis.' },
        { lo: 'K', code: 'KC-4.1.VI', text: 'In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.' }
      ],
      illustrativeExamples: {
        'Competition over trade routes': ['Muslim–European rivalry in the Indian Ocean', 'Moroccan conflict with the Songhai Empire'],
        'Increased peasant and artisan labor': ['Western Europe—wool and linen', 'India—cotton', 'China—silk']
      }
    },
    '4.6': {
      title: 'Internal and External Challenges to State Power from 1450 to 1750',
      page: 88,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '4.B', name: 'Contextualization', text: 'Explain how a specific historical development or process is situated within a broader historical context.' },
      thematicFocus: 'Governance (GOV)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective L', theme: 'Governance (GOV)', text: 'Explain the effects of the development of state power from 1450 to 1750.' }
      ],
      keyConcepts: [
        { lo: 'L', code: 'KC-4.3.III.iii', text: 'State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level.' },
        { lo: 'L', code: 'KC-5.3.III.C', text: 'Enslaved persons challenged existing authorities in the Americas through organized resistance.' }
      ],
      illustrativeExamples: {
        'Local resistance': ['Pueblo Revolts', 'Fronde', 'Cossack revolts', 'Maratha conflict with Mughals', 'Ana Nzinga’s resistance (as ruler of Ndongo and Matamba)', 'Metacom’s War (King Philip’s War)'],
        'Resistance of enslaved persons': ['The establishment of Maroon societies in the Caribbean and Brazil', 'Resistance of enslaved persons in North America']
      },
      // Page 77, Activity 2. Optional.
      sampleActivity: 'Close Reading: Ask students to read an excerpt from the “Declaration of Pedro Naranjo” (1681) about the Pueblo Revolt. As they read, have them use different colors to highlight the social, economic, and political reasons for rebellion. Next, have students reread their highlighted text and respond to the following prompt with a historically defensible claim: Explain the most significant causes of the Pueblo Revolt.'
    },
    '4.7': {
      title: 'Changing Social Hierarchies from 1450 to 1750',
      page: 89,
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '3.D', name: 'Claims and Evidence in Sources', text: 'Explain how claims or evidence support, modify, or refute a source’s argument.' },
      thematicFocus: 'Social Interactions and Organization (SIO)',
      learningObjectives: [
        { code: 'Unit 4: Learning Objective M', theme: 'Social Interactions and Organization (SIO)', text: 'Explain how social categories, roles, and practices have been maintained or have changed over time.' }
      ],
      keyConcepts: [
        { lo: 'M', code: 'KC-4.3.I.B', text: 'Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.' },
        { lo: 'M', code: 'KC-4.2.III.A', text: 'Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.' },
        { lo: 'M', code: 'KC-4.2.III.B', text: 'The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.' }
      ],
      illustrativeExamples: {
        'Differential treatment of groups in society, politics, and the economy': ['Expulsion of Jews from Spain and Portugal; the acceptance of Jews in the Ottoman Empire', 'Restrictive policies against Han Chinese in Qing China', 'Varying status of different classes of women within the Ottoman Empire'],
        'Existing elites': ['Ottoman timars', 'Russian boyars', 'European nobility']
      },
      // Page 77, Activity 3. Optional.
      sampleActivity: 'Debate: Assign the introduction of “Toleration in the World History of Religions” by Alan Kramer (available on World History Connected). Ask students to use their textbook to compile evidence from the period 1250–1750 that supports and refutes Kramer’s claim about toleration. Have students engage in a debate about the scope of religious tolerance in the period. As students debate, remind them to always support their position with historical evidence.'
    },
    '4.8': {
      title: 'Continuity and Change from 1450 to 1750',
      page: 90,
      pages: [90, 91],
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '6.C', name: 'Argumentation', text: 'Use historical reasoning to explain relationships among pieces of historical evidence.' },
      thematicFocus: null,
      learningObjectives: [
        { code: 'Unit 4: Learning Objective N', theme: null, text: 'Explain how economic developments from 1450 to 1750 affected social structures over time.' }
      ],
      // The 4.8 pages list these as "Review: Unit 4 Key Concepts". KC-4.1 is
      // printed here with a comma after "Hemispheres" that the 3.4 page omits.
      keyConcepts: [
        { lo: 'N', code: 'KC-4.1', text: 'The interconnection of the Eastern and Western Hemispheres, made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.' },
        { lo: 'N', code: 'KC-4.1.II', text: 'Knowledge, scientific learning, and technology from the Classical, Islamic, and Asian worlds spread, facilitating European technological developments and innovation.' },
        { lo: 'N', code: 'KC-4.1.II.A', text: 'The developments included the production of new tools, innovations in ship designs, and an improved understanding of regional wind and currents patterns—all of which made transoceanic travel and trade possible.' },
        { lo: 'N', code: 'KC-4.2', text: 'Although the world’s productive systems continued to be heavily centered on agriculture, major changes occurred in agricultural labor, the systems and locations of manufacturing, gender and social structures, and environmental processes.' },
        { lo: 'N', code: 'KC-4.2.II', text: 'The demand for labor intensified as a result of the growing global demand for raw materials and finished products. Traditional peasant agriculture increased and changed in nature, plantations expanded, and the Atlantic slave trade developed and intensified.' },
        { lo: 'N', code: 'KC-4.3', text: 'Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.' },
        { lo: 'N', code: 'KC-4.3.III.ii', text: 'Economic disputes led to rivalries and conflict between states.' }
      ],
      illustrativeExamples: {},
      // Page 77, Activity 4. Optional.
      sampleActivity: 'Self/Peer Revision: Have students pair up and ask them to discuss the following prompt and decide which historical reasoning process is best for organizing a response: Develop an argument that explains how economic developments led to changes in social structures in the period 1450–1750. Ask the students to decide which historical reasoning process is best for organizing a response. Then, ask each student to write a thesis that uses this reasoning process. Have students exchange papers with their partner and discuss the strengths and areas for improvement in each thesis. Have students continue this process of peer revision for each paragraph of the essay.'
    }
  }
};
