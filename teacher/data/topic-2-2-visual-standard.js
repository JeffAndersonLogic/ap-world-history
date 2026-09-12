/* Topic 2.2 visual standard: high-resolution maps, clear provenance, and no map text overlays. */
(function(){
  'use strict';
  const T = window.BEHISTORICAL_TEACHING;
  if (!T || !Array.isArray(T.slides)) return;

  const MAPS = {
    expansion: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Expansion_of_the_Mongol_Empire.svg',
      alt: 'Vector map showing the expansion of the Mongol Empire from 1206 to 1294',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Expansion_of_the_Mongol_Empire.svg',
      credit: 'Expansion of the Mongol Empire · Wikimedia Commons · CC BY-SA 4.0'
    },
    khanates: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
      alt: 'Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty around 1300',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
      credit: 'Mongol imperial subdivisions c. 1300 · Wikimedia Commons · CC BY 3.0'
    },
    atlas1290: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Asia_under_the_Mongols_1290_AD.jpg',
      alt: 'High-resolution historical atlas map of Asia under Mongol rule around 1290',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Asia_under_the_Mongols_1290_AD.jpg',
      credit: 'Asia under the Mongols, 1290 A.D. · Herrmann & Westermann, 1935 · public domain · 6810×6009'
    },
    silkRoadBaseline: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_the_I_century_AD_-_en.svg',
      alt: 'Vector map of Silk Road and other caravan routes across Eurasia in the first century CE',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_in_the_I_century_AD_-_en.svg',
      credit: 'Silk Road and caravan routes · Wikimedia Commons · CC BY-SA 4.0 · vector baseline map'
    }
  };

  // Scale: keep the strongest vector map, but render it as an unobstructed map rather than an image with text on top.
  if (T.slides[1]) {
    T.slides[1].kind = 'map';
    T.slides[1].visual = MAPS.expansion;
    T.slides[1].mapLabel = 'MONGOL EXPANSION · 1206–1294';
    T.slides[1].footer = 'Conquest is only the first problem.';
  }

  // Geographic grounding: combine maximum legibility with maximum resolution.
  if (T.slides[2]) {
    T.slides[2].kind = 'mapCompare';
    T.slides[2].title = 'One empire becomes four Mongol states.';
    T.slides[2].maps = [
      { label: 'HIGH-RESOLUTION HISTORICAL ATLAS · c. 1290', visual: MAPS.atlas1290 },
      { label: 'SUCCESSOR KHANATES · c. 1300', visual: MAPS.khanates }
    ];
    T.slides[2].footer = 'Golden Horde · Chagatai · Ilkhanate · Yuan';
    T.slides[2].notes = T.slides[2].notes || {};
    T.slides[2].notes.land = [
      'Use the left map for scale, routes, and geographic texture; use the right map for clean successor-state boundaries.',
      'Locate the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty. Then point out the Silk Road corridors that pass through multiple Mongol-controlled regions.',
      'The point is not memorizing every border. The point is seeing why regional rule became attractive and why political unity became harder to maintain.'
    ];
  }

  // Governance: use the clean khanate map again, now for the administrative argument.
  if (T.slides[9]) {
    T.slides[9].kind = 'map';
    T.slides[9].visual = MAPS.khanates;
    T.slides[9].mapLabel = 'SUCCESSOR KHANATES · c. 1300';
    T.slides[9].title = 'Regional rule solves distance — and creates rivalry.';
    T.slides[9].footer = 'Decentralization makes rule more practical while weakening unified control.';
  }

  // Pax Mongolica: make CCOT visible geographically rather than replacing geography with a text diagram.
  if (T.slides[14]) {
    T.slides[14].kind = 'mapCompare';
    T.slides[14].eyebrow = 'Pax Mongolica · CCOT';
    T.slides[14].title = 'The routes were older. The political conditions changed.';
    T.slides[14].maps = [
      { label: 'OLDER SILK ROAD CORRIDORS · BASELINE', visual: MAPS.silkRoadBaseline },
      { label: 'MONGOL POLITICAL CONTROL · 1206–1294', visual: MAPS.expansion }
    ];
    T.slides[14].footer = 'Continuity: overland routes · Change: control, protection, relay systems, and movement';
    T.slides[14].notes = {
      minutes: 5,
      land: [
        'Read the two maps left to right. The left map is deliberately an earlier baseline: the major overland corridors existed long before Mongol rule.',
        'The right map shows the change in thirteenth-century political conditions as Mongol power came to control enormous stretches of Eurasia.',
        'Do not say the Mongols created the Silk Roads. The AP move is continuity of routes plus change in political integration, protection, communication, and the scale of movement.'
      ],
      ask: 'What existed before the Mongols — and what changed under Mongol rule?',
      listenFor: 'Continuity: long-distance routes and luxury exchange. Change: broader political control, lower political barriers in some regions, protected travel, relay communication, and increased connectivity.'
    };
  }

  window.BEHISTORICAL_TOPIC_2_2_MAPS = MAPS;
})();
