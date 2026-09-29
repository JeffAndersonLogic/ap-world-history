/*
 * Teacher-only orchestration for Topic 2.2.
 * CED spine: build/fragment the Mongol states -> facilitate exchange -> transfer knowledge.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    omits: {
      preflight: 'Built and taught before Teacher Preflight was required. Add one on the next revision of this deck.',
      beready: 'Built and taught before the BeReady standard was added on 2026-09-22. Add one on the next revision of this deck.'
    },
    topic: '2.2',
    date: 'Friday, September 18, 2026',
    cohort: 'Green',
    minutes: 90,
    title: 'The Mongol Empire',
    subtitle: 'Build. Fragment. Connect. Transfer.',
    essentialQuestion: 'How did Mongol expansion change states, exchange, and the movement of knowledge across Eurasia?',
    apFocus: 'CCOT + Governance + Economic Systems + Cultural Transfer',
    endTarget: 'Students can explain Mongol state building and fragmentation, how imperial expansion facilitated trade and communication, and how interregional contact transferred knowledge and cultural practices.'
  },

  priorities: {
    must: [
      'Teach all three CED dimensions: Mongol state change, facilitated exchange, and technological/cultural transfer.',
      'Students explain HOW military organization and adaptation produced conquest rather than naming tactics.',
      'Students explain WHY unified Mongol political control fragmented into regional khanates.',
      'Students understand that the Silk Roads predated Mongol rule; Mongol expansion changed political conditions on existing networks.',
      'Explicitly teach the CED transfer examples: Greco-Islamic medical knowledge to western Europe, numbering systems to Europe, and adoption of Uyghur script.'
    ],
    should: [
      'Use the map twice: first for the problem of governing scale, then for the opportunity of connecting Eurasia.',
      'Keep conquest visually memorable but do not let violence displace the required exchange and transfer content.',
      'Use CCOT language explicitly: routes continued; political integration, protection, communication, and scale of movement changed.',
      'Treat plague as a bridge to 2.6, not a core 2.2 teaching strand.'
    ],
    could: [
      'Use BeInTheRoom if time allows after the CED core is secure.',
      'Use the full Heimler 2.2 review only as retrieval or reinforcement.',
      'Use William of Rubruck as source evidence for diversity, communication, and movement.'
    ]
  },

  flow: [
    { id: 'open', label: 'Hook + Big Argument', range: '0–6', minutes: 6, teacher: 'Frame the lesson as four moves: build, fragment, connect, transfer.', students: 'Write the four-part story.', slide: 0 },
    { id: 'map', label: 'Scale + Khanates', range: '6–13', minutes: 7, teacher: 'Use the map to show both imperial reach and the problem of governing distance.', students: 'Locate the successor khanates and identify why unity became difficult.', slide: 2 },
    { id: 'first10', label: 'First & 10', range: '13–23', minutes: 10, teacher: 'Frame the First & 10 as the complete story students need before the lesson details.', students: 'Read for the story: conquest -> connection -> exchange, while tracking fragmentation and transfer.', slide: 3 },
    { id: 'conquest', label: 'Build the Empire', range: '23–35', minutes: 12, teacher: 'Teach organization, mobility, and adaptation as a conquest system.', students: 'Track what problem each military method solved.', slide: 4 },
    { id: 'govern', label: 'Govern + Fragment', range: '35–49', minutes: 14, teacher: 'Pivot from conquest to rule, then explain why regional khanates emerge.', students: 'Connect administration and succession to fragmentation.', slide: 7 },
    { id: 'check1', label: 'Checkpoint 1', range: '49–55', minutes: 6, teacher: 'Require one conquest mechanism and one fragmentation mechanism.', students: 'Explain build + decline with evidence.', slide: 11 },
    { id: 'exchange', label: 'Facilitate Exchange', range: '55–66', minutes: 11, teacher: 'Teach continuity of routes and change in political conditions.', students: 'Explain how protection and communication affected movement.', slide: 12 },
    { id: 'transfer', label: 'Transfer Knowledge', range: '66–76', minutes: 10, teacher: 'Teach all three required CED transfer examples explicitly.', students: 'Sort each example as borrowed, transmitted, or adapted knowledge.', slide: 14 },
    { id: 'skill', label: 'AP Skill Builder', range: '76–83', minutes: 7, teacher: 'Build a CCOT + connection argument from the full lesson.', students: 'Write baseline, change, and significance.', slide: 16 },
    { id: 'check2', label: 'Final Checkpoint', range: '83–88', minutes: 5, teacher: 'Require all three CED dimensions in a concise response.', students: 'Explain state change, exchange, and transfer.', slide: 17 },
    { id: 'close', label: 'Close + Bridge', range: '88–90', minutes: 2, teacher: 'Bridge from overland political integration to Indian Ocean environmental systems.', students: 'Carry the network idea into 2.3.', slide: 18 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.2', url: '../unit-2/lesson-2-2-mongol-empire.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=narrative-v1' },
    { label: 'BeInTheRoom', url: '../beintheroom/unit-2/mongol-court.html' },
    { label: 'Full Heimler Review', url: 'https://youtu.be/KHJLZBXUyzo' }
  ],

  projection: {
    storageKey: 'behistorical-topic-2-2-slide',
    title: 'Topic 2.2 Presentation',
    file: 'present-topic-2-2.html'
  },

  slides: [
    {
      phase: 'open', kind: 'hero', eyebrow: 'AP World History · Topic 2.2',
      title: 'The Mongol Empire', subtitle: 'Build. Fragment. Connect. Transfer.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
        alt: 'Yuan dynasty portrait of Chinggis Khan',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg',
        credit: 'Yuan dynasty imperial portrait album · National Palace Museum · public domain'
      },
      notes: {
        minutes: 3,
        land: ['Give students the entire story before details: the Mongols built a vast empire, political unity fragmented, Mongol expansion facilitated exchange, and intensified contact transferred knowledge.', 'Topic 2.2 is not only a conquest story.'],
        ask: 'What changes when one political system stretches across much of Eurasia?',
        listenFor: 'Government, communication, trade, travel, and movement of ideas.'
      }
    },
    {
      phase: 'open', kind: 'process', eyebrow: 'The Whole Lesson',
      title: 'Four moves. One connected story.',
      steps: [
        { label: 'BUILD', text: 'Organization + adaptation create conquest' },
        { label: 'FRAGMENT', text: 'Distance + succession strengthen regional khanates' },
        { label: 'CONNECT', text: 'Imperial systems facilitate trade + communication' },
        { label: 'TRANSFER', text: 'Knowledge crosses cultural boundaries' }
      ],
      footer: 'Do not leave class with only cavalry and Chinggis Khan.',
      notes: {
        minutes: 3,
        land: ['This is the CED spine. Return to it after every section.'],
        ask: 'Which of these four moves is easiest to forget?',
        listenFor: 'Transfer is usually the missing piece.'
      }
    },
    {
      phase: 'map', kind: 'map', eyebrow: 'Scale + Fragmentation',
      title: 'One empire becomes four Mongol states.',
      mapLabel: 'SUCCESSOR KHANATES · c. 1300',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
        alt: 'Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty around 1300',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
        credit: 'Mongol imperial subdivisions c. 1300 · Wikimedia Commons · CC BY 3.0'
      },
      footer: 'Golden Horde · Chagatai · Ilkhanate · Yuan',
      notes: {
        minutes: 7,
        land: ['Locate the four major successor khanates.', 'Use the map to make the tension visible: continental reach creates both extraordinary connectivity and enormous governance problems.', 'Regional khanates are evidence of continuity of Mongol rule but decline of unified imperial control.'],
        ask: 'Why might regional rule become more practical as the empire expands?',
        listenFor: 'Distance, succession, local interests, different populations, communication limits.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'First & 10 · 10 Minutes',
      title: 'Get the whole story first.', subtitle: 'Conquest -> connection -> exchange.',
      action: { label: 'Open First & 10', url: '../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=narrative-v1' },
      notes: {
        minutes: 10,
        land: ['Students should leave First & 10 understanding the whole lesson story before lecture details: conquest creates empire, empire changes connectivity, connectivity increases exchange and transfer, and political unity eventually fragments.'],
        ask: 'Where does your evidence fit: state change, exchange, or transfer?',
        listenFor: 'Students can categorize evidence and explain why it matters.'
      }
    },
    {
      phase: 'conquest', kind: 'hero', eyebrow: 'Build 1 · Organization',
      title: 'Chinggis Khan turns steppe warriors into a system.', subtitle: 'Coordination matters as much as horsemanship.',
      visual: {
        url: '../assets/images/reconstructions/topic-2-2-mounted-archers.webp?v=production-v5',
        alt: 'Historical reconstruction of coordinated Mongol mounted archers on the steppe',
        credit: 'Historical Reconstruction - AI Generated'
      },
      notes: {
        minutes: 4,
        land: ['Chinggis Khan unified competing steppe groups and reorganized military loyalty around a larger command structure.', 'Organization reduced clan rivalry and allowed coordinated campaigns across large distances.'],
        ask: 'Why is organization a military technology?',
        listenFor: 'It improves coordination, obedience, communication, and scale.'
      }
    },
    {
      phase: 'conquest', kind: 'hero', eyebrow: 'Build 2 · Mobility',
      title: 'Mobility is a weapon.', subtitle: 'Mounted archery + speed + feigned retreat.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anonymous_-_Mongol_with_Horse_and_Camel_-_47.18.139_-_Metropolitan_Museum_of_Art.jpg',
        alt: 'Yuan-era painting of a Mongol with horse and camel',
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/51738',
        credit: 'The Metropolitan Museum of Art · Yuan dynasty · Open Access/Public Domain'
      },
      notes: {
        minutes: 4,
        land: ['Mounted archers could move quickly, attack at range, coordinate over open terrain, and manipulate enemy formations with feigned retreat.'],
        ask: 'How does speed become a strategic advantage rather than just a physical one?',
        listenFor: 'Surprise, intelligence, choice of battlefield, supply, and control of tempo.'
      }
    },
    {
      phase: 'conquest', kind: 'hero', eyebrow: 'Build 3 · Adaptation',
      title: 'The Mongols borrowed what worked.', subtitle: 'Siege specialists turn mobility into city conquest.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bagdad1258.jpg',
        alt: 'Medieval manuscript depiction of the Mongol siege of Baghdad in 1258',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bagdad1258.jpg',
        credit: 'Medieval Persian manuscript tradition · public domain'
      },
      notes: {
        minutes: 4,
        land: ['Steppe cavalry could not solve every military problem.', 'Mongol rulers recruited or compelled specialists from conquered peoples and adopted siege techniques that allowed them to take fortified cities.', 'Borrowing expertise is a recurring Mongol pattern that will matter again when we discuss cultural transfer.'],
        ask: 'What does military borrowing reveal about Mongol state building?',
        listenFor: 'Pragmatism and willingness to adopt useful expertise.'
      }
    },
    {
      phase: 'govern', kind: 'prompt', eyebrow: 'Governance Pivot',
      title: 'Conquest creates a new problem.', subtitle: 'How do you rule thousands of miles of diversity?',
      notes: {
        minutes: 2,
        land: ['Mark the pivot. Taking territory and governing it are different historical processes.'],
        ask: 'What does an empire need that an army does not?',
        listenFor: 'Records, administrators, taxation, communication, legitimacy, local cooperation.'
      }
    },
    {
      phase: 'govern', kind: 'map', eyebrow: 'Fragmentation',
      title: 'Regional rule solves distance — and creates rivalry.',
      mapLabel: 'SUCCESSOR KHANATES · c. 1300',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
        alt: 'Map of the Mongol successor khanates',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
        credit: 'Mongol imperial subdivisions c. 1300 · Wikimedia Commons · CC BY 3.0'
      },
      footer: 'Regional flexibility ↑ · Unified political control ↓',
      notes: {
        minutes: 4,
        land: ['Regional khanates shortened chains of command and adapted to local conditions.', 'But succession disputes and regional interests weakened a single unified Mongol political center.'],
        ask: 'How can decentralization be both a solution and a cause of decline?',
        listenFor: 'It improves local rule while strengthening regional independence.'
      }
    },
    {
      phase: 'govern', kind: 'hero', eyebrow: 'Governance',
      title: 'Tolerance can be political technology.', subtitle: 'Diversity is easier to rule when cooperation is useful.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/HetoumIAtMongolCourt1254.JPG',
        alt: 'Medieval manuscript depiction of Armenian king Hetoum I at the Mongol court',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:HetoumIAtMongolCourt1254.JPG',
        credit: 'Manuscript image dated 1307 · public domain'
      },
      notes: {
        minutes: 3,
        land: ['Religious tolerance helped Mongol rulers gain cooperation from diverse populations and skilled administrators.', 'Do not romanticize this as modern pluralism; it was also a practical governing strategy.'],
        ask: 'Why might a conqueror protect multiple religious communities?',
        listenFor: 'Cooperation, expertise, lower resistance, easier administration.'
      }
    },
    {
      phase: 'govern', kind: 'hero', eyebrow: 'Governance + Communication',
      title: 'Information moves at horse speed.', subtitle: 'The Yam turns distance into a governable problem.',
      visual: {
        url: '../assets/images/reconstructions/topic-2-2-yam-relay.webp?v=production-v5',
        alt: 'Historical reconstruction of a mounted Mongol courier approaching a Yam relay station',
        credit: 'Historical Reconstruction - AI Generated'
      },
      notes: {
        minutes: 3,
        land: ['The Yam relay system let messengers change horses at stations and move orders and information across enormous distances.', 'The same infrastructure that strengthened government also supported protected movement and communication.'],
        ask: 'Why is communication infrastructure a form of state power?',
        listenFor: 'Orders, intelligence, taxation, military response, coordination.'
      }
    },
    {
      phase: 'check1', kind: 'action', eyebrow: 'Checkpoint 1 · Build + Fragment',
      title: 'How did the Mongols build power — and why did unity weaken?',
      subtitle: 'One conquest mechanism. One fragmentation mechanism.',
      action: { label: 'Open Checkpoint', url: '../unit-2/lesson-2-2-mongol-empire.html#modules' },
      notes: {
        minutes: 6,
        land: ['Require mechanism, not vocabulary.'],
        ask: 'Where is your because sentence?',
        listenFor: 'Evidence + mechanism + political result.'
      }
    },
    {
      phase: 'exchange', kind: 'mapCompare', eyebrow: 'Exchange · CCOT',
      title: 'The routes were older. The political conditions changed.',
      maps: [
        {
          label: 'OLDER SILK ROAD CORRIDORS · BASELINE',
          visual: {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_the_I_century_AD_-_en.svg',
            alt: 'Map of older Silk Road routes across Eurasia',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_in_the_I_century_AD_-_en.svg',
            credit: 'Wikimedia Commons · CC BY-SA 4.0'
          }
        },
        {
          label: 'MONGOL POLITICAL CONTROL · 1206–1294',
          visual: {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Expansion_of_the_Mongol_Empire.svg',
            alt: 'Map showing expansion of Mongol political control',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Expansion_of_the_Mongol_Empire.svg',
            credit: 'Wikimedia Commons · CC BY-SA 4.0'
          }
        }
      ],
      footer: 'Continuity: routes existed · Change: political integration + communication + protection',
      notes: {
        minutes: 5,
        land: ['The Silk Roads existed long before Mongol expansion.', 'Mongol political control changed conditions across large stretches of Eurasia by reducing some political barriers and strengthening communication and protected movement.'],
        ask: 'What continued, and what changed?',
        listenFor: 'Routes and exchange continued; political control, protection, communication, and scale changed.'
      }
    },
    {
      phase: 'exchange', kind: 'hero', eyebrow: 'Exchange Mechanism',
      title: 'Protection changes movement.', subtitle: 'Merchants, envoys, and information move more predictably.',
      visual: {
        url: '../assets/images/reconstructions/topic-2-2-protected-caravan.webp?v=production-v5',
        alt: 'Historical reconstruction of a protected caravan moving through Mongol-controlled territory',
        credit: 'Historical Reconstruction - AI Generated'
      },
      notes: {
        minutes: 6,
        land: ['Mongol expansion drew more people into connected imperial economies and could lower political barriers for favored merchants and envoys.', 'The Yam and merchant protection matter because they made communication and movement more predictable across long distances.', 'This is KC-3.1.I.E.i: empire expansion facilitated Afro-Eurasian trade and communication.'],
        ask: 'Why does political protection matter when the road already exists?',
        listenFor: 'Lower risk, predictability, fewer barriers, more movement.'
      }
    },
    {
      phase: 'transfer', kind: 'grid', eyebrow: 'CED Must-Know · Cultural + Technological Transfer',
      title: 'Connection moves knowledge.',
      cards: [
        { title: 'MEDICINE', text: 'Greco-Islamic medical knowledge -> western Europe' },
        { title: 'MATHEMATICS', text: 'Numbering systems -> Europe' },
        { title: 'WRITING', text: 'Mongols adopt the Uyghur script' },
        { title: 'MECHANISM', text: 'Conquest + travel + specialists create contact' }
      ],
      footer: 'These three examples are explicitly named by the CED.',
      notes: {
        minutes: 7,
        land: ['Teach all three examples explicitly.', 'The significance is not that the Mongols invented these things. Interregional contact helped knowledge cross political and cultural boundaries.', 'The Uyghur script example also shows transfer moving into the Mongol state itself: conquerors borrowed from conquered or neighboring peoples.'],
        ask: 'What is the common mechanism behind all three examples?',
        listenFor: 'Contact, movement of specialists and texts, borrowing, adaptation, wider communication.'
      }
    },
    {
      phase: 'transfer', kind: 'process', eyebrow: 'Transfer Mechanism',
      title: 'Contact -> Borrowing -> Adaptation -> Wider Reach',
      steps: [
        { label: 'CONTACT', text: 'Empires bring societies into repeated interaction' },
        { label: 'BORROW', text: 'Useful knowledge crosses cultural boundaries' },
        { label: 'ADAPT', text: 'Receiving societies apply it to local needs' },
        { label: 'SPREAD', text: 'Connected routes carry it farther' }
      ],
      notes: {
        minutes: 3,
        land: ['This is the reasoning students need, not just the three examples.'],
        ask: 'Why is the Uyghur script a particularly useful example?',
        listenFor: 'It shows Mongols themselves borrowing and adapting another culture\'s system.'
      }
    },
    {
      phase: 'skill', kind: 'process', eyebrow: 'AP Skill Builder · CCOT + Connection',
      title: 'Baseline -> Change -> Evidence -> Significance',
      steps: [
        { label: 'BASELINE', text: 'Silk Road exchange existed before Mongol rule' },
        { label: 'CHANGE', text: 'Mongol expansion alters political conditions' },
        { label: 'EVIDENCE', text: 'Yam + protection + transfer examples' },
        { label: 'WHY IT MATTERS', text: 'Exchange and knowledge move more widely' }
      ],
      notes: {
        minutes: 7,
        land: ['Have students connect the state story to the network story instead of treating them as separate chapters.'],
        ask: 'How does political change create an economic or cultural effect?',
        listenFor: 'Imperial systems change movement, which changes contact and transfer.'
      }
    },
    {
      phase: 'check2', kind: 'action', eyebrow: 'Final Checkpoint',
      title: 'Explain Mongol significance in three moves.',
      subtitle: 'State change · exchange · transfer',
      action: { label: 'Open Final Checkpoint', url: '../unit-2/lesson-2-2-mongol-empire.html#modules' },
      notes: {
        minutes: 5,
        land: ['A strong response contains one accurate piece of evidence for all three CED dimensions.'],
        ask: 'Did you explain transfer, or only conquest and trade?',
        listenFor: 'Khanates + Yam/protection + one named transfer example.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Topic 2.2 · Landing Sentence',
      title: 'Empire changed the conditions of connection.',
      subtitle: 'The Mongols built and fragmented states while facilitating exchange and accelerating cross-cultural transfer.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_Marco_Polo.jpg',
        alt: 'Marco Polo caravan depicted in the Catalan Atlas of 1375',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravane_Marco_Polo.jpg',
        credit: 'Catalan Atlas, 1375 · public domain'
      },
      notes: {
        minutes: 2,
        land: ['Bridge to 2.3: the Indian Ocean produces enormous connectivity without one empire controlling the whole network.', 'Tomorrow the environment itself — especially monsoon winds — becomes part of the explanation.']
      }
    }
  ]
};
