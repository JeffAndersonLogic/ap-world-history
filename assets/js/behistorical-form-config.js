/*
 * ─── BEHISTORICAL FORM CONFIG ────────────────────────────────────────────────
 * File: assets/js/behistorical-form-config.js
 *
 * Centralised Google Form prefill configuration.
 * Load BEFORE any renderer or lesson script that needs form URLs:
 *   <script src="../assets/js/behistorical-form-config.js?v=unified-v2"></script>
 *
 * Entry IDs (from the Google Form — do not modify):
 *   entry.125385659  = Unit             (pre-filled per lesson)
 *   entry.187055090  = Topic            (pre-filled per lesson)
 *   entry.1549761827 = Prompt ID        (pre-filled per capture point)
 *   entry.2107637366 = Response Type    (pre-filled per capture point)
 *   entry.1963461515 = Skill Focus      (checkbox — repeat per skill)
 *   entry.1794755975 = Class Period     (student selects)
 * ─────────────────────────────────────────────────────────────────────────────
 */

window.BH_FORM = {

  baseURL: 'https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform',

  fields: {
    unit:         'entry.125385659',
    topic:        'entry.187055090',
    promptId:     'entry.1549761827',
    responseType: 'entry.2107637366',
    skillFocus:   'entry.1963461515',
    classPeriod:  'entry.1794755975',
  },

  units: {
    foundations: 'Foundations - How World History Works',
    1: 'Unit 1 - The Global Tapestry',
    2: 'Unit 2 - Networks of Exchange',
    3: 'Unit 3 - Land-Based Empires',
    4: 'Unit 4 - Transoceanic Interconnections',
    5: 'Unit 5 - Revolutions',
    6: 'Unit 6 - Consequences of Industrialization',
    7: 'Unit 7 - Global Conflict',
    8: 'Unit 8 - Cold War and Decolonization',
    9: 'Unit 9 - Globalization',
  },

  topics: {
    'f1': 'Foundations 1 - Geography',
    'f2': 'Foundations 2 - Belief Systems',
    'f3': 'Foundations 3 - States & Power',
    'f4': 'Foundations 4 - Trade Networks',
    'f5': 'Foundations 5 - World at 1200',
    '1.1': '1.1 - Song China',
    '1.2': '1.2 - Dar al-Islam',
    '1.3': '1.3 - South and Southeast Asia',
    '1.4': '1.4 - The Americas',
    '1.5': '1.5 - State Building in Africa',
    '1.6': '1.6 - Europe',
    '1.7': '1.7 - Comparison',
    '2.1': '2.1 - The Silk Roads',
    '2.2': '2.2 - The Mongol Empire',
    '2.3': '2.3 - Exchange in the Indian Ocean',
    '2.4': '2.4 - Trans-Saharan Trade Routes',
    '2.5': '2.5 - Cultural Consequences of Connectivity',
    '2.6': '2.6 - Environmental Consequences of Connectivity',
    '2.7': '2.7 - Comparison of Economic Exchange',
    '3.1': '3.1 - Empires Expand',
    '3.2': '3.2 - Empires Administration',
    '3.3': '3.3 - Empires and Belief Systems',
    '3.4': '3.4 - Comparison in Land-Based Empires',
    '4.1': '4.1 - Technological Innovations',
    '4.2': '4.2 - Exploration: Causes and Events',
    '4.3': '4.3 - Columbian Exchange',
    '4.4': '4.4 - Maritime Empires Established',
    '4.5': '4.5 - Maritime Empires Maintained',
    '4.6': '4.6 - Internal and External Challenges',
    '4.7': '4.7 - Changing Social Hierarchies',
    '4.8': '4.8 - Continuity and Change',
    '5.1': '5.1 - The Enlightenment',
    '5.2': '5.2 - Nationalism and Revolutions',
    '5.3': '5.3 - Industrial Revolution Begins',
    '5.4': '5.4 - Industrialization Spreads',
    '5.5': '5.5 - Technology of Industrialization',
    '5.6': '5.6 - Industrialization: Government and Society',
    '5.7': '5.7 - Economic Developments and Innovations',
    '5.8': '5.8 - Reactions to the Industrial Economy',
    '5.9': '5.9 - Society and the Industrial Age',
    '5.10': '5.10 - Continuity and Change in the Industrial Age',
    '6.1': '6.1 - Rationales for Imperialism',
    '6.2': '6.2 - State Expansion',
    '6.3': '6.3 - Indigenous Responses to State Expansion',
    '6.4': '6.4 - Global Economic Development',
    '6.5': '6.5 - Economic Imperialism',
    '6.6': '6.6 - Causes of Migration',
    '6.7': '6.7 - Effects of Migration',
    '6.8': '6.8 - Causation in the Imperial Age',
    '7.1': '7.1 - Shifting Power',
    '7.2': '7.2 - Causes of World War I',
    '7.3': '7.3 - Conducting World War I',
    '7.4': '7.4 - Economy in the Interwar Period',
    '7.5': '7.5 - Unresolved Tensions After World War I',
    '7.6': '7.6 - Causes of World War II',
    '7.7': '7.7 - Conducting World War II',
    '7.8': '7.8 - Mass Atrocities',
    '7.9': '7.9 - Causation in Global Conflict',
    '8.1': '8.1 - Setting the Stage for the Cold War',
    '8.2': '8.2 - The Cold War',
    '8.3': '8.3 - Effects of the Cold War',
    '8.4': '8.4 - Spread of Communism',
    '8.5': '8.5 - Decolonization',
    '8.6': '8.6 - Newly Independent States',
    '8.7': '8.7 - Global Resistance to Established Power',
    '8.8': '8.8 - End of the Cold War',
    '8.9': '8.9 - Causation in the Cold War and Decolonization',
    '9.1': '9.1 - Advances in Technology and Exchange',
    '9.2': '9.2 - Technology and Disease',
    '9.3': '9.3 - Debates About the Environment',
    '9.4': '9.4 - Economics in the Global Age',
    '9.5': '9.5 - Calls for Reform and Responses',
    '9.6': '9.6 - Globalized Culture',
    '9.7': '9.7 - Resistance to Globalization',
    '9.8': '9.8 - Institutions in a Globalized World',
    '9.9': '9.9 - Continuity and Change in a Globalized World',
  },

  responseTypes: {
    first10:       'First and 10',
    skillBuilder:  'AP Skill Builder',
    checkpoint1:   'Checkpoint 1',
    evidenceLab:   'Evidence Lab',
    primarySource: 'Primary Source',
    beInTheRoom:   'BeInTheRoom',
    checkpoint2:   'Checkpoint 2',
  },

  slugs: {
    first10:       'first10',
    skillBuilder:  'ap-skill-builder',
    checkpoint1:   'checkpoint-1',
    evidenceLab:   'evidence-lab',
    primarySource: 'primary-source',
    beInTheRoom:   'beintheroom',
    checkpoint2:   'checkpoint-2',
  },

  skills: {
    '1.1': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '1.2': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '1.3': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '1.4': { first10: ["Comparison","Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '1.5': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '1.6': { first10: ["Causation","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '1.7': { first10: ["Comparison","Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Comparison"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation","Claims & Thesis"] },
    '2.1': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '2.2': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '2.3': { first10: ["Causation","Contextualization","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '2.4': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '2.5': { first10: ["Causation","Contextualization","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '2.6': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '2.7': { first10: ["Comparison","Causation","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Comparison"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation","Claims & Thesis"] },
    '3.1': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '3.2': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '3.3': { first10: ["Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '3.4': { first10: ["Comparison","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Comparison"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation","Claims & Thesis"] },
    '4.1': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.2': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.3': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.4': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.5': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.6': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.7': { first10: ["Comparison","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '4.8': { first10: ["Continuity and Change Over Time (CCOT)","Causation","Argumentation"], skillBuilder: ["Continuity and Change Over Time (CCOT)","Argumentation"], checkpoint1: ["Evidence Usage","Continuity and Change Over Time (CCOT)"], evidenceLab: ["Evidence Usage","Continuity and Change Over Time (CCOT)"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Continuity and Change Over Time (CCOT)","Argumentation","Claims & Thesis"] },
    '5.1': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.2': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.3': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.4': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.5': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.6': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.7': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.8': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.9': { first10: ["Evidence Usage","Causation","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '5.10': { first10: ["Continuity and Change Over Time (CCOT)","Causation","Argumentation"], skillBuilder: ["Continuity and Change Over Time (CCOT)","Argumentation"], checkpoint1: ["Evidence Usage","Continuity and Change Over Time (CCOT)"], evidenceLab: ["Evidence Usage","Continuity and Change Over Time (CCOT)"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Continuity and Change Over Time (CCOT)","Argumentation","Claims & Thesis"] },
    '6.1': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '6.2': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation"] },
    '6.3': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '6.4': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '6.5': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '6.6': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Comparison"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '6.7': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Comparison"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '6.8': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Claims & Thesis"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.1': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.2': { first10: ["Causation","Contextualization","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.3': { first10: ["Continuity and Change Over Time (CCOT)","Sourcing","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.4': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.5': { first10: ["Continuity and Change Over Time (CCOT)","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.6': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.7': { first10: ["Causation","Comparison","Continuity and Change Over Time (CCOT)"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.8': { first10: ["Causation","Comparison","Continuity and Change Over Time (CCOT)"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '7.9': { first10: ["Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.1': { first10: ["Causation","Contextualization"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.2': { first10: ["Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.3': { first10: ["Comparison","Causation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.4': { first10: ["Causation","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.5': { first10: ["Comparison","Causation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.6': { first10: ["Causation","Continuity and Change Over Time (CCOT)"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.7': { first10: ["Causation","Comparison"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.8': { first10: ["Causation","Continuity and Change Over Time (CCOT)"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '8.9': { first10: ["Causation","Comparison","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '9.1': { first10: ["Causation","Continuity and Change Over Time (CCOT)"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '9.2': { first10: ["Causation","Contextualization"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '9.3': { first10: ["Causation","Contextualization"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    '9.4': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Continuity and Change Over Time (CCOT)","Claims & Thesis"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Continuity and Change Over Time (CCOT)"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Continuity and Change Over Time (CCOT)","Argumentation"] },
    '9.5': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Continuity and Change Over Time (CCOT)","Argumentation"], checkpoint1: ["Evidence Usage","Contextualization"], evidenceLab: ["Evidence Usage","Argumentation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Continuity and Change Over Time (CCOT)","Argumentation"] },
    '9.6': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Contextualization"], evidenceLab: ["Evidence Usage","Contextualization"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '9.7': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Sourcing","Argumentation"], checkpoint1: ["Evidence Usage","Sourcing"], evidenceLab: ["Evidence Usage","Sourcing"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '9.8': { first10: ["Evidence Usage","Causation","Argumentation"], skillBuilder: ["Causation","Claims & Thesis"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation"] },
    '9.9': { first10: ["Evidence Usage","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Continuity and Change Over Time (CCOT)","Claims & Thesis"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Argumentation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Continuity and Change Over Time (CCOT)","Argumentation","Claims & Thesis"] },
    'f1': { first10: ["Causation","Contextualization","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    'f2': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Comparison"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation","Claims & Thesis"] },
    'f3': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Comparison"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation","Claims & Thesis"] },
    'f4': { first10: ["Causation","Continuity and Change Over Time (CCOT)","Argumentation"], skillBuilder: ["Causation","Argumentation"], checkpoint1: ["Evidence Usage","Causation"], evidenceLab: ["Evidence Usage","Causation"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Causation","Argumentation","Claims & Thesis"] },
    'f5': { first10: ["Contextualization","Comparison","Argumentation"], skillBuilder: ["Comparison","Argumentation"], checkpoint1: ["Evidence Usage","Comparison"], evidenceLab: ["Evidence Usage","Comparison"], primarySource: ["Sourcing","Evidence Usage"], beInTheRoom: ["Contextualization","Argumentation"], checkpoint2: ["Comparison","Argumentation","Claims & Thesis"] }
  },
};

/**
 * buildFormURL(topicKey, responseTypeKey)
 *
 * Returns a fully-prefilled Google Form URL.
 *
 *   topicKey       — key into BH_FORM.topics, e.g. '1.1', 'f3'
 *   responseTypeKey — key into BH_FORM.responseTypes, e.g. 'first10', 'checkpoint1'
 *
 * Derived automatically:
 *   Unit       — from the numeric prefix of topicKey
 *   Prompt ID  — {topicKey}-{slug}
 *   Skill Focus — from BH_FORM.skills[topicKey][responseTypeKey] (if defined)
 */
function buildFormURL(topicKey, responseTypeKey) {
  var topic = BH_FORM.topics[topicKey] || topicKey;
  var responseType = BH_FORM.responseTypes[responseTypeKey] || responseTypeKey;
  var slug = BH_FORM.slugs[responseTypeKey] || responseTypeKey;
  var foundationNum = topicKey.match(/^f(\d+)$/);
  var promptKey = foundationNum ? ('foundations-' + foundationNum[1]) : topicKey;
  var promptId = promptKey + '-' + slug;

  var unitNum = topicKey.match(/^(\d+)\./);
  var unit = unitNum ? (BH_FORM.units[unitNum[1]] || '') : (foundationNum ? (BH_FORM.units.foundations || '') : '');

  var skills = (BH_FORM.skills && BH_FORM.skills[topicKey] && BH_FORM.skills[topicKey][responseTypeKey]) || [];

  var params = new URLSearchParams();
  params.set('usp', 'pp_url');
  if (unit) params.set(BH_FORM.fields.unit, unit);
  params.set(BH_FORM.fields.topic, topic);
  params.set(BH_FORM.fields.promptId, promptId);
  params.set(BH_FORM.fields.responseType, responseType);
  skills.forEach(function (s) { params.append(BH_FORM.fields.skillFocus, s); });

  return BH_FORM.baseURL + '?' + params.toString();
}
