/* Topic 2.2 visual standard: high-resolution maps, local reconstruction anchors, clear provenance, and no text over evidence. */
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

  const RECONSTRUCTIONS = {
    mountedArchers: {
      url: '../assets/images/reconstructions/topic-2-2-mounted-archers.webp',
      alt: 'Historical reconstruction of coordinated Mongol mounted archers on the steppe',
      credit: 'Historical reconstruction · AI generated'
    },
    yamRelay: {
      url: '../assets/images/reconstructions/topic-2-2-yam-relay.webp',
      alt: 'Historical reconstruction of a mounted Mongol courier approaching a Yam relay station',
      credit: 'Historical reconstruction · AI generated'
    },
    protectedCaravan: {
      url: '../assets/images/reconstructions/topic-2-2-protected-caravan.webp',
      alt: 'Historical reconstruction of a protected caravan moving through Mongol-controlled territory',
      credit: 'Historical reconstruction · AI generated'
    }
  };

  // Scale: render the vector expansion map unobstructed.
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

  // Conquest: replace repeated ruler portraiture with a mechanism visual.
  if (T.slides[4]) {
    T.slides[4].kind = 'reconstruction';
    T.slides[4].eyebrow = 'Conquest 1 · Organization';
    T.slides[4].title = 'Temüjin turns steppe warriors into a system.';
    T.slides[4].subtitle = 'Loyalty shifts from lineage to command.';
    T.slides[4].visual = RECONSTRUCTIONS.mountedArchers;
    delete T.slides[4].embed;
    T.slides[4].notes = {
      minutes: 3,
      land: [
        'This reconstruction is interpretive, not primary-source evidence. Use it to visualize coordinated mounted warfare while you teach the organizational change.',
        'Genghis Khan unified competing steppe groups by 1206 and reorganized military loyalty around command rather than simply preserving old clan hierarchies.',
        'The military advantage came from organization as much as horsemanship: units could coordinate, communicate, and act under a larger command structure.'
      ],
      ask: 'Why would reorganizing loyalty make a conquering army more effective?',
      listenFor: 'Reduced clan rivalry, stronger coordination, competence, loyalty to the larger command system.'
    };
  }

  // Governance: use the clean khanate map for the administrative argument.
  if (T.slides[9]) {
    T.slides[9].kind = 'map';
    T.slides[9].visual = MAPS.khanates;
    T.slides[9].mapLabel = 'SUCCESSOR KHANATES · c. 1300';
    T.slides[9].title = 'Regional rule solves distance — and creates rivalry.';
    T.slides[9].footer = 'Decentralization makes rule more practical while weakening unified control.';
  }

  // Governance infrastructure: visualize the Yam mechanism while keeping the paiza as authentic supporting evidence in the teacher explanation.
  if (T.slides[11]) {
    T.slides[11].kind = 'reconstruction';
    T.slides[11].eyebrow = 'Governance 4 · Yam Relay';
    T.slides[11].title = 'Information moves at horse speed.';
    T.slides[11].subtitle = 'Relay stations turn distance into a governable problem.';
    T.slides[11].visual = RECONSTRUCTIONS.yamRelay;
    delete T.slides[11].embed;
    T.slides[11].footer = '';
    T.slides[11].notes = {
      minutes: 3,
      land: [
        'This reconstruction visualizes the Yam relay system: messengers could change horses and move dispatches through a chain of stations rather than exhausting one rider and one horse across the empire.',
        'Pair the reconstruction verbally with the surviving Yuan paiza as authentic material evidence of imperial permission, protected movement, and enforceable authority.',
        'The larger political point is simple: an empire cannot reliably govern territory it cannot communicate across.'
      ],
      ask: 'Why is communication infrastructure a form of political power?',
      listenFor: 'Orders, intelligence, taxation, military response, coordination, and travel permissions.'
    };
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

  // Pax Mongolica in human terms: show protected movement without implying universal safety.
  if (T.slides[15]) {
    T.slides[15].kind = 'reconstruction';
    T.slides[15].eyebrow = 'Pax Mongolica · Movement';
    T.slides[15].title = 'Protection changes movement.';
    T.slides[15].subtitle = 'Merchants and envoys move through a more politically connected Eurasia.';
    T.slides[15].visual = RECONSTRUCTIONS.protectedCaravan;
    delete T.slides[15].embed;
    T.slides[15].notes = {
      minutes: 4,
      land: [
        'This reconstruction is a mechanism visual, not evidence that every caravan was safe everywhere.',
        'Mongol rule could reduce some political barriers, protect favored merchants and envoys, and connect long stretches of overland movement through shared imperial systems.',
        'The same network carried more than merchandise: travelers, diplomatic information, techniques, religious ideas, and disease could move through connected routes.'
      ],
      ask: 'Why does political protection matter even when the physical route itself already existed?',
      listenFor: 'Lower risk, fewer political barriers, greater predictability, protected movement, and more long-distance connection.'
    };
  }

  window.BEHISTORICAL_TOPIC_2_2_MAPS = MAPS;
  window.BEHISTORICAL_TOPIC_2_2_RECONSTRUCTIONS = RECONSTRUCTIONS;
})();
