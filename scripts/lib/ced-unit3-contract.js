'use strict';

// Locked instructional contract for AP World History Unit 3.
// Source: AP World History: Modern CED, Effective Fall 2026.
// Purpose: make Unit 3 CED alignment a build requirement after the 2026 audit repair.
// This does not replace human instructional review.

module.exports = {
  minimumScore: 100,
  topics: {
    '3.1': {
      file: 'lesson-3-1-empires-expand.js',
      renderer: 'lesson-3-1-renderer-config.js',
      learningObjectives: [
        'Explain how and why various land-based empires developed and expanded from 1450 to 1750.'
      ],
      keyConcepts: ['KC-4.3.II', 'KC-4.3.II.B', 'KC-4.3.III.i'],
      targetCodes: ['KC-4.3.II', 'KC-4.3.II.B', 'KC-4.3.III.i'],
      illustrativeExamples: ['Safavid–Mughal conflict', 'Songhai Empire’s conflict with Morocco'],
      instructionalEvidence: [
        ['gunpowder', 'cannon'],
        ['Ottoman'],
        ['Mughal'],
        ['Safavid'],
        ['Qing', 'Manchu'],
        ['Kandahar', 'Safavid–Mughal'],
        ['Tondibi', 'Songhai', 'Morocco']
      ]
    },
    '3.2': {
      file: 'lesson-3-2-empires-administration.js',
      renderer: 'lesson-3-2-renderer-config.js',
      learningObjectives: [
        'Explain how rulers used a variety of methods to legitimize and consolidate their power in land-based empires from 1450 to 1750.'
      ],
      keyConcepts: ['KC-4.3.I.C', 'KC-4.3.I.A', 'KC-4.3.I.D'],
      targetCodes: ['KC-4.3.I.C', 'KC-4.3.I.A', 'KC-4.3.I.D'],
      illustrativeExamples: [
        'Ottoman devshirme',
        'Salaried samurai',
        'European notions of divine right',
        'Songhai promotion of Islam',
        'Qing imperial portraits',
        'Incan sun temple of Cuzco',
        'Mughal mausolea and mosques',
        'European palaces, such as Versailles',
        'Mughal zamindar tax collection',
        'Ottoman tax farming',
        'Mexica tribute lists',
        'Ming practice of collecting taxes in hard currency'
      ],
      instructionalEvidence: [
        ['devshirme'],
        ['mansabdar'],
        ['divine right', 'Versailles', 'mausolea', 'imperial portraits'],
        ['tax farming'],
        ['zamindar'],
        ['revenue']
      ]
    },
    '3.3': {
      file: 'lesson-3-3-belief-systems.js',
      renderer: 'lesson-3-3-renderer-config.js',
      learningObjectives: [
        'Explain continuity and change within the various belief systems during the period from 1450 to 1750.'
      ],
      keyConcepts: ['KC-4.1.VI.i', 'KC-4.1.VI.ii', 'KC-4.1.VI.iii'],
      targetCodes: ['KC-4.1.VI.i', 'KC-4.1.VI.ii', 'KC-4.1.VI.iii'],
      illustrativeExamples: [],
      instructionalEvidence: [
        ['Protestant Reformation'],
        ['Catholic Reformation', 'Council of Trent'],
        ['Ottoman', 'Safavid'],
        ['Sunni', 'Shia'],
        ['Sikhism'],
        ['Guru Nanak'],
        ['Hindu', 'Islam']
      ]
    },
    '3.4': {
      file: 'lesson-3-4-comparison.js',
      renderer: 'lesson-3-4-renderer-config.js',
      learningObjectives: [
        'Compare the methods by which various empires increased their influence from 1450 to 1750.'
      ],
      keyConcepts: ['KC-4.1', 'KC-4.1.VI', 'KC-4.3', 'KC-4.3.II', 'KC-4.3.II.B', 'KC-4.3.III.i'],
      targetCodes: ['Unit 3: Learning Objective D', 'KC-4.3'],
      illustrativeExamples: [],
      instructionalEvidence: [
        ['increased their influence', 'increased influence'],
        ['gunpowder', 'military expansion'],
        ['administration', 'administrative'],
        ['revenue'],
        ['legitimation', 'legitimacy'],
        ['similarity'],
        ['difference']
      ]
    }
  }
};
