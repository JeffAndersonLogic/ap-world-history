'use strict';

// Locked instructional contract for AP World History Unit 4.
// Source: AP World History: Modern CED, Effective Fall 2026, as transcribed in
// scripts/lib/ced-source/unit-4.js. That file is the source; this is a copy, and
// scripts/test/ced-source.test.js fails when the two disagree.
// Purpose: keep the repaired Unit 4 topic jobs from drifting across later edits.
// Human instructional review remains a separate certification gate.

module.exports = {
  topics: {
    '4.1': {
      file: 'lesson-4-1-technological-innovations.js',
      renderer: 'lesson-4-1-renderer-config.js',
      learningObjectives: [
        'Explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750.'
      ],
      illustrativeExamples: ['Caravel', 'Carrack', 'Fluyt', 'Lateen sail', 'Compass', 'Astronomical charts'],
      keyConcepts: ['KC-4.1.II', 'KC-4.1.II.A'],
      targetCodes: ['KC-4.1.II', 'KC-4.1.II.A'],
      evidence: [
        ['compass'], ['astrolabe'], ['caravel'], ['lateen sail'],
        ['China', 'Asian'], ['Islamic', 'Arab'], ['wind', 'current', 'volta do mar']
      ]
    },
    '4.2': {
      file: 'lesson-4-2-exploration.js',
      renderer: 'lesson-4-2-renderer-config.js',
      learningObjectives: [
        'Describe the role of states in the expansion of maritime exploration from 1450 to 1750.',
        'Explain the economic causes and effects of maritime exploration by the various European states.'
      ],
      illustrativeExamples: [],
      keyConcepts: ['KC-4.1.III', 'KC-4.1.III.A', 'KC-4.1.III.B', 'KC-4.1.III.C'],
      targetCodes: ['KC-4.1.III', 'KC-4.1.III.A', 'KC-4.1.III.B', 'KC-4.1.III.C'],
      evidence: [
        ['state sponsorship'], ['Vasco da Gama', 'Dias'], ['Columbus'], ['Magellan'],
        ['John Cabot', 'Cabot'], ['Cartier', 'Verrazzano'], ['Dutch'], ['economic', 'trade']
      ]
    },
    '4.3': {
      file: 'lesson-4-3-columbian-exchange.js',
      renderer: 'lesson-4-3-renderer-config.js',
      learningObjectives: [
        'Explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres.'
      ],
      illustrativeExamples: ['Horses', 'Pigs', 'Cattle', 'Okra', 'Rice'],
      keyConcepts: ['KC-4.1.V', 'KC-4.1.V.A', 'KC-4.1.V.B', 'KC-4.1.V.C', 'KC-4.1.V.D'],
      targetCodes: ['KC-4.1.V', 'KC-4.1.V.A', 'KC-4.1.V.B', 'KC-4.1.V.C', 'KC-4.1.V.D'],
      evidence: [
        ['smallpox'], ['mosquito', 'rat', 'disease vector'], ['horse', 'cattle', 'pig'],
        ['okra', 'rice'], ['potato', 'maize', 'cassava'], ['nutrition', 'population']
      ]
    },
    '4.4': {
      file: 'lesson-4-4-maritime-empires-established.js',
      renderer: 'lesson-4-4-renderer-config.js',
      learningObjectives: [
        'Explain the process of state building and expansion among various empires and states in the period from 1450 to 1750.',
        'Explain the continuities and changes in economic systems and labor systems from 1450 to 1750.',
        'Explain changes and continuities in systems of slavery in the period from 1450 to 1750.'
      ],
      illustrativeExamples: ['Ming China', 'Tokugawa Japan', 'Swahili Arabs', 'Omanis', 'Gujaratis', 'Javanese'],
      keyConcepts: ['KC-4.3.II.A.i', 'KC-4.3.II.C', 'KC-4.3.II.A.ii', 'KC-4.3.II.A.iii', 'KC-4.2.II.D', 'KC-4.2.II.B', 'KC-4.2.II.C'],
      targetCodes: ['KC-4.3.II.A.i', 'KC-4.3.II.A.ii', 'KC-4.3.II.A.iii', 'KC-4.2.II.D', 'KC-4.2.II.B', 'KC-4.2.II.C'],
      evidence: [
        ['Estado da Índia', 'trading post'], ['Kongo'], ['Asante'],
        ['intra-Asian', 'Gujaratis', 'Omanis', 'Javanese', 'Swahili'],
        ['mit’a', 'mita'], ['encomienda'], ['hacienda'], ['indentured servitude'],
        ['traditional forms', 'older forms'], ['plantation'], ['chattel slavery']
      ]
    },
    '4.5': {
      file: 'lesson-4-5-maritime-empires-maintained.js',
      renderer: 'lesson-4-5-renderer-config.js',
      learningObjectives: [
        'Explain how rulers employed economic strategies to consolidate and maintain power throughout the period from 1450 to 1750.',
        'Explain the continuities and changes in networks of exchange from 1450 to 1750.',
        'Explain how political, economic, and cultural factors affected society from 1450 to 1750.',
        'Explain the similarities and differences in how various belief systems affected societies from 1450 to 1750.'
      ],
      illustrativeExamples: ['Muslim–European rivalry in the Indian Ocean', 'Moroccan conflict with the Songhai Empire', 'Western Europe—wool and linen', 'India—cotton', 'China—silk'],
      keyConcepts: ['KC-4.1.IV.C', 'KC-4.3.III.ii', 'KC-4.1.IV.D.i', 'KC-4.1.IV', 'KC-4.2.II.A', 'KC-4.2.III.C', 'KC-4.1.IV.D.ii', 'KC-4.1.VI'],
      targetCodes: ['KC-4.1.IV.C', 'KC-4.3.III.ii', 'KC-4.1.IV', 'KC-4.1.IV.D.i', 'KC-4.2.II.A', 'KC-4.2.III.C', 'KC-4.1.IV.D.ii', 'KC-4.1.VI'],
      evidence: [
        ['mercantilism'], ['VOC', 'joint-stock', 'chartered'], ['silver'], ['regional markets'],
        ['peasant', 'artisan'], ['cotton', 'silk', 'wool', 'linen'],
        ['gender', 'family'], ['cultural synthesis'], ['syncretic', 'Vodun', 'Santería'], ['religious conflict', 'missionary']
      ]
    },
    '4.6': {
      file: 'lesson-4-6-internal-external-challenges.js',
      renderer: 'lesson-4-6-renderer-config.js',
      learningObjectives: [
        'Explain the effects of the development of state power from 1450 to 1750.'
      ],
      illustrativeExamples: ['Pueblo Revolts', 'Fronde', 'Cossack revolts', 'Maratha conflict with Mughals', 'Ana Nzinga’s resistance (as ruler of Ndongo and Matamba)', 'Metacom’s War (King Philip’s War)', 'The establishment of Maroon societies in the Caribbean and Brazil', 'Resistance of enslaved persons in North America'],
      keyConcepts: ['KC-4.3.III.iii', 'KC-5.3.III.C'],
      targetCodes: ['KC-4.3.III.iii', 'KC-5.3.III.C'],
      evidence: [
        ['Pueblo Revolt'], ['Popé'], ['religious suppression'], ['maroon'], ['Palmares'], ['Zumbi']
      ],
      forbiddenTargetCodes: ['KC-4.3.III.ii']
    },
    '4.7': {
      file: 'lesson-4-7-changing-social-hierarchies.js',
      renderer: 'lesson-4-7-renderer-config.js',
      learningObjectives: [
        'Explain how social categories, roles, and practices have been maintained or have changed over time.'
      ],
      illustrativeExamples: ['Expulsion of Jews from Spain and Portugal; the acceptance of Jews in the Ottoman Empire', 'Restrictive policies against Han Chinese in Qing China', 'Varying status of different classes of women within the Ottoman Empire', 'Ottoman timars', 'Russian boyars', 'European nobility'],
      keyConcepts: ['KC-4.3.I.B', 'KC-4.2.III.A', 'KC-4.2.III.B'],
      targetCodes: ['KC-4.3.I.B', 'KC-4.2.III.A', 'KC-4.2.III.B'],
      evidence: [
        ['accommodat'], ['suppress', 'restrict'], ['casta'], ['new elites'],
        ['timar'], ['boyar'], ['nobility'], ['centraliz']
      ]
    },
    '4.8': {
      file: 'lesson-4-8-continuity-and-change.js',
      renderer: 'lesson-4-8-renderer-config.js',
      learningObjectives: [
        'Explain how economic developments from 1450 to 1750 affected social structures over time.'
      ],
      illustrativeExamples: [],
      keyConcepts: ['KC-4.1', 'KC-4.1.II', 'KC-4.1.II.A', 'KC-4.2', 'KC-4.2.II', 'KC-4.3', 'KC-4.3.III.ii'],
      targetCodes: ['Unit 4: Learning Objective N'],
      evidence: [
        ['economic developments'], ['social structures'], ['plantation'], ['slavery'],
        ['casta'], ['peasant', 'artisan'], ['elite'], ['gender', 'family'], ['continuity'], ['change']
      ]
    }
  }
};
