'use strict';

/**
 * Unit 3 cross-surface coherence contract.
 *
 * Regression tripwire for the repaired 2026 Unit 3 instructional spine.
 * Each inner array is an OR-cluster. Separate clusters are separate required ideas.
 * Human instructional review remains a separate gate.
 */

module.exports = {
  topics: {
    '3.1': {
      slug: 'empires-expand',
      rendererRequired: [
        ['gunpowder'], ['Ottoman'], ['Mughal'], ['Safavid'], ['Qing', 'Manchu'],
        ['Safavid–Mughal', 'Songhai', 'Morocco']
      ],
      first10Required: [
        ['gunpowder'], ['Ottoman'], ['Mughal'], ['Safavid'], ['Qing', 'Manchu'],
        ['Kandahar', 'Safavid–Mughal'], ['Tondibi', 'Songhai', 'Morocco']
      ],
      deepReadingRequired: [
        ['gunpowder'], ['Kandahar'], ['Tondibi'], ['rivalry', 'conflict']
      ],
      assessmentRequired: [
        ['gunpowder'], ['land-based empires', 'land empires'],
        ['Safavid–Mughal', 'Songhai', 'Morocco'], ['political', 'religious']
      ],
      beInTheRoom: 'beintheroom/unit-3/the-constantinople-breach.html'
    },
    '3.2': {
      slug: 'empires-administration',
      rendererRequired: [
        ['devshirme'], ['mansabdar'], ['religious ideas', 'art', 'monumental architecture'],
        ['divine right', 'Versailles', 'mausolea'], ['tax farming', 'zamindar'], ['revenue']
      ],
      first10Required: [
        ['devshirme'], ['mansabdar'], ['religious ideas', 'monumental architecture'],
        ['divine right', 'Versailles'], ['tax farming', 'zamindar'], ['revenue']
      ],
      deepReadingRequired: [
        ['devshirme'], ['mansabdar'], ['legitimacy'], ['architecture'], ['tax'], ['revenue']
      ],
      assessmentRequired: [
        ['bureaucratic', 'military recruitment'], ['religious ideas', 'art', 'monumental architecture'],
        ['tax farming', 'zamindar', 'tribute'], ['revenue', 'state power']
      ],
      beInTheRoom: 'beintheroom/unit-3/the-imperial-rank-roll.html'
    },
    '3.3': {
      slug: 'belief-systems',
      rendererRequired: [
        ['Protestant Reformation'], ['Catholic Reformation'], ['Ottoman'], ['Safavid'],
        ['Sunni'], ['Shia'], ['Sikhism'], ['Guru Nanak']
      ],
      first10Required: [
        ['Protestant Reformation'], ['Catholic Reformation'], ['Ottoman'], ['Safavid'],
        ['Sunni'], ['Shia'], ['Sikhism'], ['Guru Nanak'], ['Hindu', 'Islam']
      ],
      deepReadingRequired: [
        ['Reformation'], ['Catholic'], ['Ottoman'], ['Safavid'], ['Sunni'], ['Shia'],
        ['Sikh'], ['Nanak']
      ],
      assessmentRequired: [
        ['Protestant Reformation'], ['Catholic Reformation'], ['Sunni'], ['Shia'],
        ['Sikhism'], ['Hinduism', 'Hindu'], ['Islam']
      ],
      beInTheRoom: 'beintheroom/unit-3/after-chaldiran.html'
    },
    '3.4': {
      slug: 'comparison',
      rendererRequired: [
        ['increased their influence', 'increase their influence'], ['military'], ['administration'],
        ['revenue'], ['legitimation', 'legitimacy'], ['similarity'], ['difference']
      ],
      first10Required: [
        ['increased influence', 'increased their influence'], ['military'], ['administration'],
        ['revenue'], ['legitimation', 'legitimacy'], ['similarity'], ['difference']
      ],
      deepReadingRequired: [
        ['comparison'], ['gunpowder'], ['devshirme'], ['mansabdar'], ['religion', 'legitimacy'],
        ['similarity'], ['difference']
      ],
      assessmentRequired: [
        ['increased their influence', 'increase their influence'], ['military', 'administration', 'revenue', 'legitimation'],
        ['similarity'], ['difference', 'qualification']
      ],
      beInTheRoom: 'beintheroom/unit-3/imperial-influence-comparison.html'
    }
  }
};
