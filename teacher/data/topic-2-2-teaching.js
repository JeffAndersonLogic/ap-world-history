/*
 * Teacher-only orchestration for Topic 2.2.
 *
 * Projection rule: image-led, sparse, and discussion-oriented.
 * Teacher view stays dense. Student detail stays in the lesson/modules.
 * Visual provenance is stored with each image so the presentation can later
 * surface credits without rediscovering sources.
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
      phase: 'open', kind: 'image', eyebrow: 'The Scale Problem',
      title: 'Horse speed wins battles. What governs distance?',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Expansion_of_the_Mongol_Empire.svg',
        alt: 'Map showing the expansion of the Mongol Empire from 1206 to 1294',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Expansion_of_the_Mongol_Empire.svg',
        credit: 'Wikimedia Commons · historical map of Mongol expansion'
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
      phase: 'map', kind: 'image', eyebrow: 'Geographic Grounding',
      title: 'One empire. Four khanates.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
        alt: 'Map of the Mongol successor khanates around 1300',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
        credit: 'Wikimedia Commons · CC BY 3.0'
      },
      footer: 'Yuan · Ilkhanate · Chagatai · Golden Horde',
      notes: {
        minutes: 6,
        land: ['Point out China, Persia, Central Asia, and Russia/Eastern Europe.', 'The khanates made regional rule more practical but also reveal the limits of unified control.', 'Tie the map directly back to the Silk Road corridors students studied in 2.1.'],
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
      phase: 'conquest', kind: 'hero', eyebrow: 'Conquest 1',
      title: 'Temüjin breaks the clan system.', subtitle: 'Loyalty shifts from lineage to command.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait_(crop).jpg',
        alt: 'Cropped Yuan dynasty portrait of Genghis Khan',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait_(crop).jpg',
        credit: 'Yuan dynasty imperial portrait album · National Palace Museum · public domain'
      },
      notes: {
        minutes: 3,
        land: ['Genghis Khan unified competing steppe groups by 1206.', 'His military organization rewarded ability and loyalty rather than simply preserving old clan hierarchies.', 'The portrait is later political memory; use it as a face for the unification story, not literal eyewitness evidence.'],
        ask: 'Why would merit-based promotion make a conquering army more effective?',
        listenFor: 'Loyalty to the leader, competence, reduced clan rivalry, stronger coordination.'
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
      title: 'How does Temüjin become Genghis Khan?',
      video: { youtubeId: 'szxPar0BcMo', start: 159, end: 225, label: 'Crash Course World History #17: Genghis Khan' },
      footer: 'Watch for organization, loyalty, and leadership.',
      notes: {
        minutes: 2,
        land: ['Use the clip as visual reinforcement, then return to organization + mobility + adaptation.'],
        ask: 'What did Genghis change about how steppe power was organized?',
        listenFor: 'He unified groups and redirected loyalty toward a larger political/military structure.'
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
      phase: 'govern', kind: 'image', eyebrow: 'Governance 2',
      title: 'Divide the empire to govern it.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
        alt: 'Map of the Mongol successor khanates around 1300',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
        credit: 'Wikimedia Commons · CC BY 3.0'
      },
      footer: 'Regional khanates solve distance — and weaken unity.',
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
      phase: 'govern', kind: 'image', eyebrow: 'Governance 4',
      title: 'Information moves at horse speed.',
      visual: {
        url: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/39624/147932/source',
        alt: 'Late thirteenth-century Yuan dynasty safe-conduct pass, or paiza',
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/39624',
        credit: 'Safe Conduct Pass (Paiza), late 13th century · The Met · Open Access/Public Domain'
      },
      footer: 'Imperial authority made movement legible — and enforceable.',
      notes: {
        minutes: 3,
        land: ['This is a surviving Yuan-era paiza, a material object tied to imperial permission and protected travel.', 'It is not a picture of a Yam station. Pair the object with your explanation of relay stations and fresh horses.', 'The larger point: a state cannot govern territory it cannot communicate across.'],
        ask: 'Why is communication infrastructure a form of political power?',
        listenFor: 'Orders, information, taxation, military response, coordination, travel permissions.'
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
      title: 'What happens after Genghis Khan?',
      video: { youtubeId: 'szxPar0BcMo', start: 330, end: 414, label: 'Crash Course World History #17: The Mongols After Genghis Khan' },
      footer: 'Watch for expansion, succession, and regional rule.',
      notes: {
        minutes: 2,
        land: ['Reinforce that Mongol history after Genghis is not one uninterrupted centralized state.'],
        ask: 'What changes when rule passes to multiple branches of the imperial family?',
        listenFor: 'Regionalization, local adaptations, succession rivalry, fragmentation.'
      }
    },
    {
      phase: 'pax', kind: 'process', eyebrow: 'Pax Mongolica',
      title: 'Control → Protection → Movement',
      steps: [
        { label: 'CONTROL', text: 'Large stretches under Mongol political power' },
        { label: 'PROTECTION', text: 'Merchants + envoys move with lower political barriers' },
        { label: 'MOVEMENT', text: 'Goods, people, ideas, technology, disease' }
      ],
      footer: 'The routes were older. The political conditions changed.',
      notes: {
        minutes: 5,
        land: ['This is one intentionally text-led screen because the causal structure matters.', 'The Silk Roads existed before the Mongols. The change is in political control, protection, speed, and scale of some long-distance movement.'],
        ask: 'What is the continuity? What is the change?',
        listenFor: 'Continuity: older routes and luxury trade. Change: Mongol political integration/protection increases connectivity.'
      }
    },
    {
      phase: 'pax', kind: 'hero', eyebrow: 'What the Network Carries',
      title: 'Merchants are only part of the story.', subtitle: 'People. Knowledge. Technology. Disease.',
      visual: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Textile_Fragment_MET_ISL60.jpg',
        alt: 'Mongol-period cloth-of-gold textile fragment from the eastern Islamic lands',
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/453371',
        credit: 'Textile Fragment, 13th–14th century · The Met · Open Access/Public Domain'
      },
      notes: {
        minutes: 4,
        land: ['This Mongol-period cloth-of-gold textile is a tangible object from the integrated elite world of the thirteenth and fourteenth centuries.', 'Use it to move beyond abstract “trade”: people, techniques, styles, knowledge, and disease travel through the same networks.'],
        ask: 'Why is “trade network” too narrow a phrase for what moved across Eurasia?',
        listenFor: 'People, ideas/knowledge, technology, disease as well as goods.'
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
      video: { youtubeId: 'szxPar0BcMo', start: 510, end: 570, label: 'Crash Course World History #17: Costs of Mongol Conquest' },
      footer: 'Add evidence to the destructive side of the paradox.',
      notes: {
        minutes: 2,
        land: ['Use it as evidence collection, not as a moral verdict.'],
        ask: 'Which destructive effect belongs in an AP explanation of Mongol rule?',
        listenFor: 'Violence, destruction of cities, demographic loss, political disruption.'
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