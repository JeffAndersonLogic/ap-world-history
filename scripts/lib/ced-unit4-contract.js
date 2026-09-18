'use strict';

// Locked instructional contract for AP World History Unit 4.
// Source: AP World History: Modern CED, Effective Fall 2026.
// Purpose: keep the repaired Unit 4 topic jobs from drifting across later edits.
// Human instructional review remains a separate certification gate.

module.exports = {
  topics: {
    '4.1': {
      file: 'lesson-4-1-technological-innovations.js',
      renderer: 'lesson-4-1-renderer-config.js',
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
      keyConcepts: ['Unit 4: Learning Objective N', 'KC-4.1.IV', 'KC-4.2.II', 'KC-4.2.II.A', 'KC-4.2.II.C', 'KC-4.2.II.D', 'KC-4.2.III.A', 'KC-4.2.III.B', 'KC-4.2.III.C'],
      targetCodes: ['Unit 4: Learning Objective N'],
      evidence: [
        ['economic developments'], ['social structures'], ['plantation'], ['slavery'],
        ['casta'], ['peasant', 'artisan'], ['elite'], ['gender', 'family'], ['continuity'], ['change']
      ]
    }
  }
};
