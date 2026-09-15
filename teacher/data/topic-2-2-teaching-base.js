/*
 * Teacher-only orchestration for Topic 2.2.
 *
 * Canonical production source: slide definitions, maps, reconstructions,
 * documentary clips, notes, and projection metadata live here.
 * The shared renderer only renders these definitions; no visual override layer
 * is required.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '2.2',
    date: 'Friday, September 18, 2026',
    cohort: 'Green',
    minutes: 90,
    title: 'The Mongol Empire: Conquest, Connection, and the Pax Mongolica',
    subtitle: 'How do conquerors turn speed into a system?',
    essentialQuestion: 'How did the Mongols conquer and govern such a vast empire, and how did Mongol rule reshape Afro-Eurasian exchange?',
    apFocus: 'CCOT + Governance + Economic Systems',
    endTarget: 'Students can explain how Mongol conquest and administration changed Eurasian political control and exchange while recognizing important continuities and the destructive/connective paradox of Mongol rule.'
  },

  priorities: {
    must: [
      'Students explain HOW Mongol military methods produced conquest, not merely name cavalry or Genghis Khan.',
      'Students distinguish conquest from governance: taking territory and holding territory are different historical problems.',
      'Students understand khanates, religious tolerance, and the Yam as administrative solutions to governing distance and diversity.',
      'Students explain the Pax Mongolica as a change in the conditions of exchange, not as the beginning of Silk Road trade.',
      'Students leave with the paradox: Mongol rule was simultaneously destructive and connective.'
    ],
    should: [
      'Use large historical images as evidence and atmosphere rather than filling the screen with notes.',
      'Make Mongol borrowing visible: siege specialists, administrators, scribes, and local expertise mattered.',
      'Use the map to make scale and fragmentation concrete before explaining the khanates.',
      'Use CCOT language explicitly: trade routes continued; political conditions and scale of movement changed.'
    ],
    could: [
      'Use the William of Rubruck primary source if the class needs evidence of religious diversity and administrative reach.',
      'Use the Evidence Lab as reinforcement or homework rather than forcing it into this block.',
      'Use the full Heimler 2.2 review as retrieval/review, not as primary content delivery.'
    ]
  },

  flow: [
    { id: 'open', label: 'Hook + Scale', range: '0–6', minutes: 6, teacher: 'Make the size problem visible before giving the solutions.', students: 'Identify what makes conquest and governance difficult at continental scale.', slide: 0 },
    { id: 'map', label: 'Map the Empire', range: '6–12', minutes: 6, teacher: 'Locate the four khanates and the trade corridors they overlapped.', students: 'See distance, diversity, and fragmentation as governance problems.', slide: 2 },
    { id: 'first10', label: 'First & 10', range: '12–22', minutes: 10, teacher: 'Listen for the distinction between conquest, administration, and exchange.', students: 'Read and respond.', slide: 3 },
    { id: 'conquest', label: 'Teach Conquest', range: '22–34', minutes: 12, teacher: 'Teach unification, mobility, deception, intelligence, and siege adaptation as a system.', students: 'Track what problem each military method solved.', slide: 4 },
    { id: 'clip1', label: 'Clip: Genghis', range: '34–36', minutes: 2, teacher: 'Use the clip as a visual reset, not as a substitute for explanation.', students: 'Watch for why Temüjin built a different kind of steppe army.', slide: 7 },
    { id: 'govern', label: 'Teach Governance', range: '36–49', minutes: 13, teacher: 'Shift from taking territory to ruling distance and diversity.', students: 'Connect khanates, tolerance, local officials, and the Yam to administrative problems.', slide: 8 },
    { id: 'check1', label: 'Checkpoint 1', range: '49–55', minutes: 6, teacher: 'Look for one military method + one administrative method + explanation.', students: 'Explain conquest and administration with specific evidence.', slide: 12 },
    { id: 'clip2', label: 'Clip: After Genghis', range: '55–57', minutes: 2, teacher: 'Use succession and regional rule to reinforce fragmentation.', students: 'Watch for what happens when one empire becomes multiple Mongol states.', slide: 13 },
    { id: 'pax', label: 'Pax Mongolica', range: '57–68', minutes: 11, teacher: 'Explain lower political barriers, merchant protection, relay systems, and movement.', students: 'Distinguish continuity of routes from change in conditions of exchange.', slide: 14 },
    { id: 'clip3', label: 'Clip: The Cost', range: '68–70', minutes: 2, teacher: 'Reinforce the destructive side of the Mongol paradox.', students: 'Watch for the costs of conquest.', slide: 17 },
    { id: 'room', label: 'BeInTheRoom', range: '70–81', minutes: 11, teacher: 'Launch roles quickly; keep the focus on evidence-based choices under Mongol rule.', students: 'Choose a role, policy, and evidence; defend a position.', slide: 18 },
    { id: 'skill', label: 'AP Skill Builder', range: '81–86', minutes: 5, teacher: 'Force a baseline-before-change move.', students: 'Write a short CCOT claim about trade or political control.', slide: 19 },
    { id: 'check2', label: 'Final Checkpoint', range: '86–89', minutes: 3, teacher: 'Use as an exit response if time is tight.', students: 'Explain two effects of the Pax Mongolica.', slide: 20 },
    { id: 'close', label: 'Close + Bridge', range: '89–90', minutes: 1, teacher: 'Land the paradox and bridge to the Indian Ocean.', students: 'Leave with the Unit 2 network idea.', slide: 21 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 2.2', url: '../unit-2/lesson-2-2-mongol-empire.html' },
    { label: 'First & 10', url: '../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=response-id-fix-v1' },
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
      title: 'The Mongol Empire', subtitle: 'How do conquerors turn speed into a system?',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
        alt: 'Yuan dynasty portrait of Genghis Khan',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg',
        credit: 'Yuan dynasty imperial portrait album · National Palace Museum · public domain'
      },
      notes: {
        minutes: 2,
        land: ['Topic 2.1 showed why Silk Road exchange could grow. Topic 2.2 asks what happens when Mongol rulers control enormous portions of those overland routes.', 'This is a later Yuan imperial portrait of Genghis Khan. Treat it as political memory, not a photographic likeness.'],
        ask: 'Which is harder: taking a city or governing thousands of miles after you take it?',
        listenFor: 'Conquest and administration require different tools.'
      }
    },
    {
      phase: 'open', kind: 'map', eyebrow: 'The Scale Problem',
      title: 'Horse speed wins battles. What governs distance?',
      mapLabel: 'MONGOL EXPANSION · 1206–1294',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Expansion_of_the_Mongol_Empire.svg',
        alt: 'Vector map showing the expansion of the Mongol Empire from 1206 to 1294',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Expansion_of_the_Mongol_Empire.svg',
        credit: 'Expansion of the Mongol Empire · Wikimedia Commons · CC BY-SA 4.0'
      },
      footer: 'Conquest is only the first problem.',
      notes: {
        minutes: 4,
        land: ['Let the map do the work. The visual point is speed and scale.', 'A fast army can seize territory faster than a government can organize it.'],
        ask: 'What breaks first when an empire becomes this large?',
        listenFor: 'Communication, succession, supply, taxation, local resistance, language, religion, distance.'
      }
    },
    {
      phase: 'map', kind: 'mapCompare', eyebrow: 'Geographic Grounding',
      title: 'One empire becomes four Mongol states.',
      maps: [
        {
          label: 'HIGH-RESOLUTION HISTORICAL ATLAS · c. 1290',
          visual: {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Asia_under_the_Mongols_1290_AD.jpg',
            alt: 'High-resolution historical atlas map of Asia under Mongol rule around 1290',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Asia_under_the_Mongols_1290_AD.jpg',
            credit: 'Asia under the Mongols, 1290 A.D. · Herrmann & Westermann, 1935 · public domain · 6810×6009'
          }
        },
        {
          label: 'SUCCESSOR KHANATES · c. 1300',
          visual: {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
            alt: 'Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty around 1300',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
            credit: 'Mongol imperial subdivisions c. 1300 · Wikimedia Commons · CC BY 3.0'
          }
        }
      ],
      footer: 'Golden Horde · Chagatai · Ilkhanate · Yuan',
      notes: {
        minutes: 6,
        land: ['Use the left map for scale, routes, and geographic texture; use the right map for clean successor-state boundaries.', 'Locate the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty. Then point out the Silk Road corridors that pass through multiple Mongol-controlled regions.', 'The point is not memorizing every border. The point is seeing why regional rule became attractive and why political unity became harder to maintain.'],
        ask: 'Why might one political center struggle to govern this entire map?',
        listenFor: 'Distance, environmental variety, diverse populations, communication, succession, regional interests.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'First & 10 · 10 Minutes',
      title: 'Read for three systems.', subtitle: 'Conquest. Governance. Exchange.',
      action: { label: 'Open First & 10', url: '../unit-2/first-and-10-topic-2-2-mongol-empire-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 10,
        land: ['The detailed narrative belongs in First & 10. The projector only gives the reading lens.', 'Circulate and check whether students can separate military from administrative methods.'],
        ask: 'Which example belongs under conquest? Which belongs under governance?',
        listenFor: 'Cavalry/siege warfare under conquest; khanates/tolerance/Yam under governance.'
      }
    },
    {
      phase: 'conquest', kind: 'reconstruction', eyebrow: 'Conquest 1 · Organization',
      title: 'Temüjin turns steppe warriors into a system.', subtitle: 'Loyalty shifts from lineage to command.',
      visual: {
        url: '../assets/images/reconstructions/topic-2-2-mounted-archers.webp?v=production-v5',
        alt: 'Historical reconstruction of coordinated Mongol mounted archers on the steppe',
        credit: 'Historical reconstruction · AI generated'
      },
      notes: {
        minutes: 3,
        land: ['This reconstruction is interpretive, not primary-source evidence. Use it to visualize coordinated mounted warfare while you teach the organizational change.', 'Genghis Khan unified competing steppe groups by 1206 and reorganized military loyalty around command rather than simply preserving old clan hierarchies.', 'The military advantage came from organization as much as horsemanship: units could coordinate, communicate, and act under a larger command structure.'],
        ask: 'Why would reorganizing loyalty make a conquering army more effective?',
        listenFor: 'Reduced clan rivalry, stronger coordination, competence, loyalty to the larger command system.'
      }
    },
    {
      phase: 'conquest', kind: 'hero', eyebrow: 'Conquest 2',
      title: 'Mobility is a weapon.', subtitle: 'Mounted archery + speed + feigned retreat.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anonymous_-_Mongol_with_Horse_and_Camel_-_47.18.139_-_Metropolitan_Museum_of_Art.jpg',
        alt: 'Yuan-era painting of a Mongol with horse and camel',
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/51738',
        credit: 'The Metropolitan Museum of Art · Yuan dynasty · Open Access/Public Domain'
      },
      notes: {
        minutes: 3,
        land: ['Use the image to keep horses and mobility physically present in the story.', 'Mongol cavalry could move quickly, coordinate across wide spaces, attack from distance, and use feigned retreat to break formations.'],
        ask: 'Why is a feigned retreat more than “running away and coming back”?',
        listenFor: 'It manipulates the enemy into abandoning formation or defensive position.'
      }
    },
    {
      phase: 'conquest', kind: 'hero', eyebrow: 'Conquest 3',
      title: 'The Mongols borrowed what worked.', subtitle: 'Siege engineers turn mobility into city conquest.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bagdad1258.jpg',
        alt: 'Medieval manuscript depiction of the Mongol siege of Baghdad in 1258',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bagdad1258.jpg',
        credit: 'Medieval Persian manuscript tradition · public domain'
      },
      notes: {
        minutes: 4,
        land: ['Steppe cavalry alone could not reliably take fortified cities.', 'The Mongols incorporated siege specialists and techniques from conquered or recruited peoples.', 'This image depicts Baghdad 1258; use it as visual evidence of siege warfare and the destructive capacity of adaptation.'],
        ask: 'What does borrowing siege technology tell us about Mongol military culture?',
        listenFor: 'Pragmatism, adaptation, willingness to use conquered specialists.'
      }
    },
    {
      phase: 'clip1', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'How does Temüjin become Chinggis Khan?',
      video: { youtubeId: 'nMJkWvEnuDU', start: 0, end: 95, label: 'National Geographic · The Rise of Genghis Khan (2026)' },
      footer: 'Watch for rivalry, survival, unification, and the making of political authority.',
      notes: {
        minutes: 2,
        land: ['Use this as a cinematic reset after the conquest system. National Geographic frames Temüjin’s rise through rivalry, defeat, recovery, and consolidation rather than as a list of military tricks.'],
        ask: 'What is changing about Temüjin’s power as he moves from survivor to ruler?',
        listenFor: 'Alliance-building, consolidation, loyalty, control of rival groups, and political authority.'
      }
    },
    {
      phase: 'govern', kind: 'hero', eyebrow: 'Governance 1',
      title: 'Conquest ≠ governance.', subtitle: 'Winning territory creates new problems.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumKhubilaiPortrait.jpg',
        alt: 'Yuan dynasty portrait of Kublai Khan',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumKhubilaiPortrait.jpg',
        credit: 'Yuan dynasty imperial portrait album · National Palace Museum · public domain'
      },
      notes: {
        minutes: 2,
        land: ['Mark the pivot explicitly: a conqueror now has to become a ruler.', 'Kublai Khan is a useful visual anchor for the transition from expansion to governing a settled imperial society.'],
        ask: 'What does an emperor need that an army commander does not?',
        listenFor: 'Administrators, records, taxation, communication, legitimacy, local cooperation.'
      }
    },
    {
      phase: 'govern', kind: 'map', eyebrow: 'Governance 2',
      title: 'Regional rule solves distance — and creates rivalry.',
      mapLabel: 'SUCCESSOR KHANATES · c. 1300',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
        alt: 'Map of the Golden Horde, Chagatai Khanate, Ilkhanate, and Yuan dynasty around 1300',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
        credit: 'Mongol imperial subdivisions c. 1300 · Wikimedia Commons · CC BY 3.0'
      },
      footer: 'Decentralization makes rule more practical while weakening unified control.',
      notes: {
        minutes: 3,
        land: ['Reusing the map is intentional: now students read it as a governance solution rather than as geography.', 'Regional rule shortened chains of command but strengthened regional interests and succession rivalries.'],
        ask: 'How can decentralization help an empire and also threaten it?',
        listenFor: 'Local flexibility, but stronger regional power and rivalry.'
      }
    },
    {
      phase: 'govern', kind: 'hero', eyebrow: 'Governance 3',
      title: 'Tolerance can be political technology.', subtitle: 'Rule diverse peoples without demanding one faith.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/HetoumIAtMongolCourt1254.JPG',
        alt: 'Medieval manuscript depiction of Armenian king Hetoum I at the Mongol court',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:HetoumIAtMongolCourt1254.JPG',
        credit: 'Manuscript image dated 1307 depicting Hetoum I at the Mongol court · public domain'
      },
      notes: {
        minutes: 3,
        land: ['This later manuscript scene depicts the Christian Armenian king Hetoum I at the Mongol court — a concrete visual of diplomatic and religious plurality.', 'Do not romanticize Mongol tolerance as modern pluralism. It was also a practical governing strategy for diversity.'],
        ask: 'Why might a conqueror choose tolerance instead of forced conversion?',
        listenFor: 'Reduced resistance, local cooperation, access to skilled administrators, easier rule over diversity.'
      }
    },
    {
      phase: 'govern', kind: 'reconstruction', eyebrow: 'Governance 4 · Yam Relay',
      title: 'Information moves at horse speed.', subtitle: 'Relay stations turn distance into a governable problem.',
      visual: {
        url: '../assets/images/reconstructions/topic-2-2-yam-relay.webp?v=production-v5',
        alt: 'Historical reconstruction of a mounted Mongol courier approaching a Yam relay station',
        credit: 'Historical reconstruction · AI generated'
      },
      footer: '',
      notes: {
        minutes: 3,
        land: ['This reconstruction visualizes the Yam relay system: messengers could change horses and move dispatches through a chain of stations rather than exhausting one rider and one horse across the empire.', 'Pair the reconstruction verbally with the surviving Yuan paiza as authentic material evidence of imperial permission, protected movement, and enforceable authority.', 'The larger political point is simple: an empire cannot reliably govern territory it cannot communicate across.'],
        ask: 'Why is communication infrastructure a form of political power?',
        listenFor: 'Orders, intelligence, taxation, military response, coordination, and travel permissions.'
      }
    },
    {
      phase: 'check1', kind: 'action', eyebrow: 'Checkpoint 1 · 6 Minutes',
      title: 'How did the Mongols conquer — and govern?',
      subtitle: 'One military method. One administrative method. Explain how each worked.',
      action: { label: 'Open Checkpoint 1', url: '../unit-2/lesson-2-2-mongol-empire.html#modules' },
      notes: {
        minutes: 6,
        land: ['This is the first proof point. A list is not enough.'],
        ask: 'Where is the sentence that explains HOW?',
        listenFor: 'Specific evidence + mechanism + effect.'
      }
    },
    {
      phase: 'clip2', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'What happens when the founder dies?',
      video: { youtubeId: 'PdFwMDuAnS4', start: 12807, end: 12892, label: 'Fall of Civilizations · The Mongols: Terror of the Steppe (2025) · Succession' },
      footer: 'Watch for succession, regional interests, and the problem of holding one empire together.',
      notes: {
        minutes: 2,
        land: ['This clip begins at the documentary’s Succession chapter. Use it to make fragmentation a governance problem, not just a map fact.'],
        ask: 'Why does succession become more dangerous as the empire grows?',
        listenFor: 'Competing branches of the family, regional power bases, distance, and different political interests.'
      }
    },
    {
      phase: 'pax', kind: 'mapCompare', eyebrow: 'Pax Mongolica · CCOT',
      title: 'The routes were older. The political conditions changed.',
      maps: [
        {
          label: 'OLDER SILK ROAD CORRIDORS · BASELINE',
          visual: {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_Road_in_the_I_century_AD_-_en.svg',
            alt: 'Vector map of Silk Road and other caravan routes across Eurasia in the first century CE',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_Road_in_the_I_century_AD_-_en.svg',
            credit: 'Silk Road and caravan routes · Wikimedia Commons · CC BY-SA 4.0 · vector baseline map'
          }
        },
        {
          label: 'MONGOL POLITICAL CONTROL · 1206–1294',
          visual: {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Expansion_of_the_Mongol_Empire.svg',
            alt: 'Vector map showing the expansion of the Mongol Empire from 1206 to 1294',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Expansion_of_the_Mongol_Empire.svg',
            credit: 'Expansion of the Mongol Empire · Wikimedia Commons · CC BY-SA 4.0'
          }
        }
      ],
      footer: 'Continuity: overland routes · Change: control, protection, relay systems, and movement',
      notes: {
        minutes: 5,
        land: ['Read the two maps left to right. The left map is deliberately an earlier baseline: the major overland corridors existed long before Mongol rule.', 'The right map shows the change in thirteenth-century political conditions as Mongol power came to control enormous stretches of Eurasia.', 'Do not say the Mongols created the Silk Roads. The AP move is continuity of routes plus change in political integration, protection, communication, and the scale of movement.'],
        ask: 'What existed before the Mongols — and what changed under Mongol rule?',
        listenFor: 'Continuity: long-distance routes and luxury exchange. Change: broader political control, lower political barriers in some regions, protected travel, relay communication, and increased connectivity.'
      }
    },
    {
      phase: 'pax', kind: 'reconstruction', eyebrow: 'Pax Mongolica · Movement',
      title: 'Protection changes movement.', subtitle: 'Merchants and envoys move through a more politically connected Eurasia.',
      visual: {
        url: '../assets/images/reconstructions/topic-2-2-protected-caravan.webp?v=production-v5',
        alt: 'Historical reconstruction of a protected caravan moving through Mongol-controlled territory',
        credit: 'Historical reconstruction · AI generated'
      },
      notes: {
        minutes: 4,
        land: ['This reconstruction is a mechanism visual, not evidence that every caravan was safe everywhere.', 'Mongol rule could reduce some political barriers, protect favored merchants and envoys, and connect long stretches of overland movement through shared imperial systems.', 'The same network carried more than merchandise: travelers, diplomatic information, techniques, religious ideas, and disease could move through connected routes.'],
        ask: 'Why does political protection matter even when the physical route itself already existed?',
        listenFor: 'Lower risk, fewer political barriers, greater predictability, protected movement, and more long-distance connection.'
      }
    },
    {
      phase: 'pax', kind: 'hero', eyebrow: 'The Paradox',
      title: 'The same empire can destroy cities and connect continents.', subtitle: 'Both things are true.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/DiezAlbumsFallOfBaghdad.jpg',
        alt: 'Fourteenth-century manuscript depiction associated with the fall of Baghdad',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:DiezAlbumsFallOfBaghdad.jpg',
        credit: 'Rashid al-Din manuscript tradition · 14th century · public domain'
      },
      notes: {
        minutes: 2,
        land: ['The sack of Baghdad in 1258 and destruction in Central Asian cities illustrate the violence of conquest.', 'Pax Mongolica, merchant protection, and transregional movement illustrate connective effects.', 'Do not force a good/bad verdict. The historical argument is that imperial violence and connectivity coexisted.'],
        ask: 'Why is “Were the Mongols good or bad?” the wrong historical question?',
        listenFor: 'Effects differed by place/group and destructive/connective processes happened together.'
      }
    },
    {
      phase: 'clip3', kind: 'video', eyebrow: 'Watch · ~1 Minute',
      title: 'What did conquest cost?',
      video: { youtubeId: 'PdFwMDuAnS4', start: 10962, end: 11047, label: 'Fall of Civilizations · The Mongols: Terror of the Steppe (2025) · Persia' },
      footer: 'Use the evidence to complicate the idea of “Pax Mongolica.”',
      notes: {
        minutes: 2,
        land: ['This clip begins at the documentary’s Persia chapter. Treat the destruction as historical evidence for the same empire that also intensified long-distance connection.'],
        ask: 'How can the same imperial system produce both greater connectivity and catastrophic local destruction?',
        listenFor: 'Effects vary by place and group; conquest and exchange can operate at the same time.'
      }
    },
    {
      phase: 'room', kind: 'action', eyebrow: 'BeInTheRoom · 11 Minutes',
      title: 'After the conquest: what do you do now?',
      subtitle: 'Choose a role. Choose a policy. Defend it with evidence.',
      action: { label: 'Open BeInTheRoom', url: '../beintheroom/unit-2/mongol-court.html' },
      notes: {
        minutes: 11,
        land: ['Keep the launch fast. Students should use at least two pieces of evidence and articulate a tradeoff.'],
        ask: 'What does your role gain from cooperation — and what might it lose?',
        listenFor: 'Role-specific reasoning tied to tolerance, administration, trade access, local institutions, or political risk.'
      }
    },
    {
      phase: 'skill', kind: 'process', eyebrow: 'AP Skill Builder · CCOT',
      title: 'Baseline → Continuity → Change → Why',
      steps: [
        { label: 'BASELINE', text: 'Silk Road exchange existed before Mongol rule' },
        { label: 'CONTINUITY', text: 'Older routes + luxury exchange persisted' },
        { label: 'CHANGE', text: 'Political control + protection increased connectivity' }
      ],
      footer: 'No baseline = no CCOT.',
      notes: {
        minutes: 5,
        land: ['This second intentionally text-led screen makes the AP reasoning move visible.', 'Students should track one category only: trade, political control, diffusion, or disease.'],
        ask: 'What existed BEFORE the Mongols that prevents us from saying they “created” Silk Road trade?',
        listenFor: 'The routes and long-distance exchange already existed.'
      }
    },
    {
      phase: 'check2', kind: 'action', eyebrow: 'Final Checkpoint · 3 Minutes',
      title: 'What changed because of the Pax Mongolica?',
      subtitle: 'Two effects. Explain whether each was connective, destructive, or both.',
      action: { label: 'Open Final Checkpoint', url: '../unit-2/lesson-2-2-mongol-empire.html#modules' },
      notes: {
        minutes: 3,
        land: ['Treat this as an exit response if time is tight.'],
        ask: 'Can the same effect be both connective and destructive?',
        listenFor: 'Plague transmission is the clearest example.'
      }
    },
    {
      phase: 'close', kind: 'hero', eyebrow: 'Unit 2 Bridge',
      title: 'Networks do not need one empire.',
      subtitle: 'Next: the Indian Ocean runs on monsoons, merchants, and port cities.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_Marco_Polo.jpg',
        alt: 'Marco Polo caravan depicted in the Catalan Atlas of 1375',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caravane_Marco_Polo.jpg',
        credit: 'Catalan Atlas, 1375 · public domain'
      },
      notes: {
        minutes: 1,
        land: ['The 1375 Catalan Atlas image keeps the class inside the world of long-distance networks as you transition out of the Mongol story.', 'Next, compare this politically integrated overland network with an Indian Ocean system driven by monsoons, merchants, ports, and diasporas.']
      }
    }
  ]
};
