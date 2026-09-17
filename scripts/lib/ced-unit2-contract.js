'use strict';

// Locked instructional contract for AP World History Unit 2.
// Source: CED - MASTER v.1.1 - Working Copy.pdf, Unit 2: Networks of Exchange.
// Purpose: make CED alignment a build requirement, not a manual review step.
// A topic should not be considered complete if required learning objectives,
// historical developments, or illustrative examples disappear from the lesson.

module.exports = {
  minimumScore: 100,
  topics: {
    '2.1': {
      file: 'lesson-2-1-silk-roads.js',
      learningObjectives: [
        'Explain the causes and effects of the growth of networks of exchange after 1200.'
      ],
      keyConcepts: ['KC-3.1.I.A.i', 'KC-3.1.I.C.i', 'KC-3.3.I.B'],
      illustrativeExamples: ['Kashgar', 'Samarkand', 'Bills of exchange', 'Banking houses', 'paper money'],
      instructionalEvidence: [
        ['luxury goods', 'demand'],
        ['caravanserai'],
        ['credit', 'bills of exchange'],
        ['banking houses', 'banking'],
        ['paper money'],
        ['Kashgar'],
        ['Samarkand'],
        ['textiles', 'porcelain'],
        ['iron', 'steel']
      ]
    },
    '2.2': {
      file: 'lesson-2-2-mongol-empire.js',
      learningObjectives: [
        'Explain the process of state building and decline in Eurasia over time.',
        'Explain how the expansion of empires influenced trade and communication over time.',
        'Explain the significance of the Mongol Empire in larger patterns of continuity and change.'
      ],
      keyConcepts: ['KC-3.2.I.B.iii', 'KC-3.1.I.E.i', 'KC-3.2.II.A.ii'],
      illustrativeExamples: ['Greco-Islamic medical knowledge', 'numbering systems', 'Uyghur script'],
      instructionalEvidence: [
        ['Mongol khanates', 'khanates'],
        ['trade', 'communication'],
        ['technological', 'cultural transfers'],
        ['Greco-Islamic medical knowledge', 'medical knowledge'],
        ['numbering systems'],
        ['Uyghur script']
      ]
    },
    '2.3': {
      file: 'lesson-2-3-indian-ocean.js',
      learningObjectives: [
        'Explain the causes of the growth of networks of exchange after 1200.',
        'Explain the effects of the growth of networks of exchange after 1200.',
        'Explain the role of environmental factors in the development of networks of exchange in the period from c. 1200 to c. 1450.'
      ],
      keyConcepts: ['KC-3.1.I.A.ii', 'KC-3.1.I.C.ii', 'KC-3.1.I.A.iii', 'KC-3.1.III.B', 'KC-3.2.II.A.iii', 'KC-3.1.II.A.i'],
      illustrativeExamples: ['Swahili Coast', 'Gujarat', 'Malacca', 'Arab and Persian', 'Chinese merchant', 'Malay communities'],
      instructionalEvidence: [
        ['compass'],
        ['astrolabe'],
        ['larger ship', 'larger ships', 'ship designs'],
        ['Swahili Coast', 'Swahili'],
        ['Gujarat'],
        ['Malacca'],
        ['diasporic', 'diaspora'],
        ['Zheng He'],
        ['monsoon winds', 'monsoon']
      ]
    },
    '2.4': {
      file: 'lesson-2-4-trans-saharan.js',
      learningObjectives: [
        'Explain the causes and effects of the growth of trans-Saharan trade.',
        'Explain how the expansion of empires influenced trade and communication over time.'
      ],
      keyConcepts: ['KC-3.1.II.A.ii', 'KC-3.1.I.A.iv', 'KC-3.1.I.E.ii'],
      illustrativeExamples: ['Camel saddle', 'Caravans'],
      instructionalEvidence: [
        ['camel saddle', 'saddle'],
        ['caravans', 'caravan'],
        ['increased volume', 'expanded'],
        ['Mali'],
        ['trade', 'communication']
      ]
    },
    '2.5': {
      file: 'lesson-2-5-cultural-consequences.js',
      learningObjectives: [
        'Explain the intellectual and cultural effects of the various networks of exchange in Afro-Eurasia from c. 1200 to c. 1450.'
      ],
      keyConcepts: ['KC-3.1.III.D', 'KC-3.3.II', 'KC-3.1.III.C'],
      illustrativeExamples: ['Buddhism in East Asia', 'Hinduism and Buddhism into Southeast Asia', 'Islam in sub-Saharan Africa and Asia', 'Gunpowder', 'Paper', 'Ibn Battuta', 'Margery Kempe', 'Marco Polo'],
      instructionalEvidence: [
        ['Buddhism'],
        ['Hinduism'],
        ['Islam'],
        ['gunpowder'],
        ['paper'],
        ['urbanization', 'cities'],
        ['Ibn Battuta'],
        ['Margery Kempe'],
        ['Marco Polo']
      ]
    },
    '2.6': {
      file: 'lesson-2-6-environmental-consequences.js',
      learningObjectives: [
        'Explain the environmental effects of the various networks of exchange in Afro-Eurasia from c. 1200 to c. 1450.'
      ],
      keyConcepts: ['KC-3.1.IV'],
      illustrativeExamples: ['Bananas in Africa', 'New rice varieties in East Asia', 'citrus in the Mediterranean'],
      instructionalEvidence: [
        ['bubonic plague', 'plague'],
        ['bananas'],
        ['rice varieties', 'rice'],
        ['citrus']
      ]
    },
    '2.7': {
      file: 'lesson-2-7-comparison.js',
      learningObjectives: [
        'Explain the similarities and differences among the various networks of exchange in the period from c. 1200 to c. 1450.'
      ],
      keyConcepts: ['KC-3.1', 'KC-3.1.I.A.i', 'KC-3.1.I.C.i', 'KC-3.3', 'KC-3.3.I.B'],
      illustrativeExamples: [],
      instructionalEvidence: [
        ['Silk Roads'],
        ['Indian Ocean'],
        ['trans-Saharan', 'Trans-Saharan'],
        ['similarities', 'similarity'],
        ['differences', 'difference'],
        ['commercial practices', 'credit', 'caravanserai'],
        ['productive capacity', 'production'],
        ['luxury goods', 'demand']
      ]
    }
  }
};
