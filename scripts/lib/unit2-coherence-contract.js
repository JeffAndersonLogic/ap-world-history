'use strict';

/**
 * Unit 2 cross-surface coherence contract.
 *
 * This is deliberately NOT a replacement for human instructional review.
 * It is a regression tripwire that verifies the same CED spine survives from
 * canonical lesson data into the renderer-owned modules, First & 10, deep
 * reading, checkpoints, and BeInTheRoom wiring.
 *
 * Each entry in a required array is an OR-cluster: at least one phrase in the
 * cluster must appear on that surface. Separate clusters are separate required
 * ideas. This tests traceability and assessment alignment, not prose quality.
 */

module.exports = {
  topics: {
    '2.1': {
      slug: 'silk-roads',
      rendererRequired: [
        ['luxury goods', 'demand'], ['caravanserai'], ['credit'], ['paper money'],
        ['Kashgar'], ['Samarkand'], ['Pax Mongolica'], ['porcelain'], ['iron', 'steel']
      ],
      first10Required: [
        ['luxury goods', 'demand'], ['caravanserai'], ['bills of exchange'], ['banking houses'],
        ['paper money'], ['Kashgar'], ['Samarkand'], ['Pax Mongolica'], ['porcelain'], ['iron', 'steel']
      ],
      deepReadingRequired: [
        ['luxury demand', 'demand'], ['caravanserai'], ['credit'], ['paper money'],
        ['Kashgar'], ['Samarkand'], ['Pax Mongolica'], ['productive capacity', 'production'],
        ['porcelain'], ['iron', 'steel']
      ],
      assessmentRequired: [
        ['luxury goods', 'demand'], ['caravanserai', 'credit', 'paper money'],
        ['Kashgar', 'Samarkand'], ['porcelain', 'iron', 'steel']
      ]
    },
    '2.2': {
      slug: 'mongol-empire',
      rendererRequired: [
        ['khanates'], ['Pax Mongolica'], ['trade', 'communication'],
        ['Greco-Islamic medical knowledge'], ['numbering systems'], ['Uyghur script']
      ],
      first10Required: [
        ['khanates'], ['Pax Mongolica'], ['Greco-Islamic medical knowledge'], ['numbering systems'], ['Uyghur script']
      ],
      deepReadingRequired: [
        ['Greco-Islamic medical knowledge'], ['numbering systems'], ['Uyghur script']
      ],
      assessmentRequired: [
        ['state building', 'build'], ['fragment', 'khanates'], ['trade', 'communication'],
        ['Greco-Islamic medical knowledge', 'numbering systems', 'Uyghur script']
      ]
    },
    '2.3': {
      slug: 'indian-ocean',
      rendererRequired: [
        ['monsoon'], ['compass'], ['astrolabe'], ['larger ship'], ['Swahili Coast'], ['Gujarat'], ['Malacca'], ['diasporic'], ['Zheng He']
      ],
      first10Required: [
        ['monsoon'], ['compass'], ['astrolabe'], ['larger ship'], ['Swahili Coast'], ['Gujarat'], ['Malacca'], ['diasporic'], ['Zheng He']
      ],
      deepReadingRequired: [
        ['monsoon'], ['astrolabe'], ['Zheng He'], ['diasporic', 'diaspora']
      ],
      assessmentRequired: [
        ['monsoon'], ['compass', 'astrolabe', 'larger ship'], ['Swahili Coast', 'Gujarat', 'Malacca'], ['diasporic', 'Zheng He']
      ]
    },
    '2.4': {
      slug: 'trans-saharan',
      rendererRequired: [
        ['camel saddle'], ['caravan'], ['trade volume', 'volume'], ['geographic range', 'range'], ['Mali']
      ],
      first10Required: [
        ['camel saddle'], ['caravan'], ['gold'], ['salt'], ['trade volume', 'volume'], ['geographic range', 'range'], ['Mali']
      ],
      deepReadingRequired: [
        ['camel'], ['caravan'], ['Mali'], ['gold'], ['salt']
      ],
      assessmentRequired: [
        ['camel saddle', 'caravan'], ['trade volume', 'geographic range'], ['Mali']
      ]
    },
    '2.5': {
      slug: 'cultural-consequences',
      rendererRequired: [
        ['Buddhism'], ['Hinduism'], ['Islam'], ['paper'], ['gunpowder'], ['urbanization', 'cities'],
        ['Ibn Battuta'], ['Marco Polo'], ['Margery Kempe']
      ],
      first10Required: [
        ['Buddhism'], ['Hinduism'], ['Islam'], ['paper'], ['gunpowder'], ['urbanization', 'cities'],
        ['Ibn Battuta'], ['Marco Polo'], ['Margery Kempe']
      ],
      deepReadingRequired: [
        ['Buddhism'], ['gunpowder'], ['Cities Rise, Cities Decline'], ['urbanization'],
        ['Ibn Battuta'], ['Marco Polo'], ['Margery Kempe']
      ],
      assessmentRequired: [
        ['Buddhism', 'Hinduism', 'Islam', 'paper', 'gunpowder'], ['urbanization', 'city decline'],
        ['Ibn Battuta', 'Marco Polo', 'Margery Kempe']
      ]
    },
    '2.6': {
      slug: 'environmental-consequences',
      rendererRequired: [
        ['bananas'], ['rice'], ['citrus'], ['bubonic plague', 'plague']
      ],
      first10Required: [
        ['bananas'], ['rice'], ['citrus'], ['bubonic plague', 'plague']
      ],
      deepReadingRequired: [
        ['Three Required Crop Diffusion Cases'], ['bananas'], ['rice'], ['citrus'], ['bubonic plague', 'Yersinia pestis']
      ],
      assessmentRequired: [
        ['bananas', 'rice', 'citrus'], ['bubonic plague', 'Black Death']
      ]
    },
    '2.7': {
      slug: 'comparison',
      rendererRequired: [
        ['Silk Roads'], ['Indian Ocean'], ['Trans-Saharan', 'trans-Saharan'],
        ['commercial practices', 'finance'], ['demand'], ['productive capacity', 'production']
      ],
      first10Required: [
        ['Silk Roads'], ['Indian Ocean'], ['Trans-Saharan', 'trans-Saharan'],
        ['commercial practices'], ['demand'], ['productive capacity']
      ],
      deepReadingRequired: [
        ['partnership contract', 'credit'], ['Demand and productive capacity', 'Demand and Productive Capacity'], ['productive capacity'], ['comparison']
      ],
      assessmentRequired: [
        ['similarity'], ['difference'], ['commercial practices', 'finance'], ['demand', 'productive capacity', 'production']
      ],
      beInTheRoom: 'beintheroom/unit-2/trade-network-comparison.html'
    }
  }
};
