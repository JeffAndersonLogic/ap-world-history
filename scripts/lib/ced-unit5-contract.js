'use strict';

// Locked instructional contract for AP World History Unit 5.
// Source: AP World History: Modern CED, Effective Fall 2026.
// The structural gate protects topic roles; human instructional review remains separate.

module.exports = {
  topics: {
    '5.1': {
      file: 'lesson-5-1-enlightenment.js',
      renderer: 'lesson-5-1-renderer-config.js',
      keyConcepts: ['KC-5.3.I.A','KC-5.3.I','KC-5.3.II.i','KC-5.3.I.C','KC-5.3.IV.B'],
      targetCodes: ['KC-5.3.I.A','KC-5.3.I','KC-5.3.II.i','KC-5.3.I.C','KC-5.3.IV.B'],
      evidence: [
        ['reason','empiricism'],['natural rights'],['social contract'],['nationalism'],
        ['expanded suffrage','suffrage'],['abolition'],['serfdom'],
        ['Wollstonecraft'],['Olympe de Gouges','de Gouges'],['Seneca Falls']
      ]
    },
    '5.2': {
      file: 'lesson-5-2-nationalism-and-revolutions.js',
      renderer: 'lesson-5-2-renderer-config.js',
      keyConcepts: ['KC-5.3.II.ii','KC-5.3','KC-5.3.IV.A.i','KC-5.3.III.B','KC-5.3.I.B','KC-5.3.II.iii'],
      targetCodes: ['KC-5.3.I.B','KC-5.3.III.B','KC-5.3.II.iii'],
      evidence: [
        ['nationalism'],['American Revolution'],['French Revolution'],['Haitian Revolution'],
        ['Latin America','Latin American'],['Italian','German','national state']
      ]
    },
    '5.3': {
      file: 'lesson-5-3-industrial-revolution-begins.js',
      renderer: 'lesson-5-3-renderer-config.js',
      keyConcepts: ['KC-5.1.I.A','KC-5.1.I.C'],
      targetCodes: ['KC-5.1.I.A','KC-5.1.I.C'],
      evidence: [
        ['Britain'],['coal'],['textile'],['factory'],['steam'],['agricultur','population','capital']
      ]
    },
    '5.4': {
      file: 'lesson-5-4-industrialization-spreads.js',
      renderer: 'lesson-5-4-renderer-config.js',
      keyConcepts: ['KC-5.1.II.B','KC-5.1.I.D'],
      targetCodes: ['KC-5.1.I.D','KC-5.1.II.B'],
      evidence: [
        ['northwestern Europe','United States'],['Russia'],['Japan'],
        ['India','Egypt','Middle East','Asia'],['deindustrial','decline']
      ]
    },
    '5.5': {
      file: 'lesson-5-5-technology-of-industrialization.js',
      renderer: 'lesson-5-5-renderer-config.js',
      keyConcepts: ['KC-5.1.I.B','KC-5.1.I.E','KC-5.1.IV'],
      targetCodes: ['KC-5.1.I.B','KC-5.1.I.E','KC-5.1.IV'],
      evidence: [
        ['steam engine'],['coal'],['internal combustion'],['oil'],
        ['steel'],['chemicals'],['electricity'],['precision machinery'],
        ['railroad'],['steamship'],['telegraph'],['trade','migration']
      ]
    },
    '5.6': {
      file: 'lesson-5-6-industrialization-government-and-society.js',
      renderer: 'lesson-5-6-renderer-config.js',
      keyConcepts: ['KC-5.1.V.C','KC-5.2.II.A'],
      targetCodes: ['KC-5.1.V.C','KC-5.2.II.A'],
      evidence: [
        ['state-sponsored industrialization'],['Muhammad Ali'],['cotton textile'],
        ['Meiji'],['railroad','infrastructure'],['education'],['regional power']
      ],
      forbiddenKeyConcepts: ['KC-5.1.VI.A','KC-5.1.VI.B','KC-5.1.VI.C']
    },
    '5.7': {
      file: 'lesson-5-7-economic-developments-and-innovations.js',
      renderer: 'lesson-5-7-renderer-config.js',
      keyConcepts: ['KC-5.1.III.A','KC-5.1.III.B','KC-5.1'],
      targetCodes: ['KC-5.1.III.A','KC-5.1.III.B','KC-5.1'],
      evidence: [
        ['free trade'],['Adam Smith','laissez-faire'],['limited liability'],['stock market'],
        ['HSBC','transnational'],['consumer goods'],['standards of living'],
        ['availability','affordability','variety']
      ]
    },
    '5.8': {
      file: 'lesson-5-8-reactions-to-industrial-economy.js',
      renderer: 'lesson-5-8-renderer-config.js',
      keyConcepts: ['KC-5.1.V.D','KC-5.1.V.A','KC-5.3.IV.A.ii','KC-5.1.V.B'],
      targetCodes: ['KC-5.1.V.D','KC-5.1.V.A','KC-5.3.IV.A.ii','KC-5.1.V.B'],
      evidence: [
        ['labor union','trade union'],['strike'],['reform'],['public health','education'],
        ['Karl Marx','Marx'],['socialism'],['communism'],
        ['Ottoman'],['Qing'],['moderniz'],['elite resistance','established elite']
      ]
    },
    '5.9': {
      file: 'lesson-5-9-society-and-the-industrial-age.js',
      renderer: 'lesson-5-9-renderer-config.js',
      keyConcepts: ['KC-5.1.VI.A','KC-5.1.VI.B','KC-5.1.VI.C'],
      targetCodes: ['KC-5.1.VI.A','KC-5.1.VI.B','KC-5.1.VI.C'],
      evidence: [
        ['middle class','bourgeois'],['working class','proletar'],['women'],['children'],
        ['urbanization'],['pollution'],['housing'],['public health','sanitation']
      ]
    },
    '5.10': {
      file: 'lesson-5-10-continuity-and-change-in-the-industrial-age.js',
      renderer: 'lesson-5-10-renderer-config.js',
      keyConcepts: ['KC-5.1','KC-5.1.IV','KC-5.3','KC-5.3.I.A','KC-5.3.I','KC-5.3.II.i'],
      targetCodes: ['Unit 5 Learning Objective K'],
      evidence: [
        ['extent'],['industrialization'],['change'],['continuity'],
        ['consumer goods','economic'],['social'],['political','rights'],['nationalism']
      ]
    }
  }
};
