(() => {
  const brandCss = '../assets/css/behistorical-brand-lock.css';
  if (!document.querySelector(`link[href="${brandCss}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = brandCss;
    document.head.appendChild(link);
  }
  const topLogo = document.querySelector('.brand-mini');
  if (topLogo) {
    topLogo.href = '../index.html';
    topLogo.setAttribute('aria-label', 'Return to BeHistorical landing page');
  }
  const heroLogoFrame = document.querySelector('.hero .logo-frame');
  if (heroLogoFrame && !heroLogoFrame.closest('a')) {
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.className = 'logo-home-link';
    homeLink.setAttribute('aria-label', 'Return to BeHistorical landing page');
    homeLink.style.display = 'inline-block';
    heroLogoFrame.parentNode.insertBefore(homeLink, heroLogoFrame);
    homeLink.appendChild(heroLogoFrame);
  }
})();

window.BEHISTORICAL_LESSON = {
  meta: {
    course: 'AP WORLD HISTORY',
    unit: 'Unit 2: Networks of Exchange',
    topic: 'Topic 2.2',
    title: 'The Mongol Empire',
    subtitle: 'State building, fragmentation, exchange, and cultural transfer across Eurasia c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can explain how the Mongols built a vast Eurasian empire and why that empire fragmented into regional khanates over time.',
      kc: 'KC-3.2.I.B.iii',
      theme: 'Governance'
    },
    {
      target: 'I can explain how Mongol expansion facilitated Afro-Eurasian trade and communication without treating the Silk Roads as a new Mongol invention.',
      kc: 'KC-3.1.I.E.i',
      theme: 'Economic Systems'
    },
    {
      target: 'I can explain how Mongol-era interregional contact encouraged technological and cultural transfers across Eurasia.',
      kc: 'KC-3.2.II.A.ii',
      theme: 'Cultural Developments and Interactions'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can connect Mongol military organization and adaptation to conquest, then connect succession, distance, and regional interests to fragmentation into the Yuan, Ilkhanate, Chagatai Khanate, and Golden Horde.',
      kc: 'KC-3.2.I.B.iii',
      theme: 'Governance'
    },
    {
      criteria: 'I can explain how merchant protection, reduced political barriers, and the Yam relay system improved trade and communication across Mongol-controlled Eurasia.',
      kc: 'KC-3.1.I.E.i',
      theme: 'Economic Systems'
    },
    {
      criteria: 'I can use Greco-Islamic medical knowledge, numbering systems, and the adoption of the Uyghur script as evidence of cultural and technological transfer.',
      kc: 'KC-3.2.II.A.ii',
      theme: 'Cultural Developments and Interactions'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.2.I.B.iii',
      theme: 'Governance',
      text: 'Empires collapsed in different regions of the world and in some areas were replaced by new imperial states, including the Mongol khanates.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.E.i',
      theme: 'Economic Systems',
      text: 'The expansion of empires, including the Mongols, facilitated Afro-Eurasian trade and communication as new people were drawn into their conquerors’ economies and trade networks.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.2.II.A.ii',
      theme: 'Cultural Developments and Interactions',
      text: 'Interregional contacts and conflicts between states and empires, including the Mongols, encouraged significant technological and cultural transfers.',
      illustrativeExamples: ['Transfer of Greco-Islamic medical knowledge to western Europe', 'Transfer of numbering systems to Europe', 'Adoption of Uyghur script']
    }
  ],

  lecture: {
    title: 'The Mongols: Build, Fragment, Connect, Transfer',
    intro: 'Topic 2.2 is not just a conquest story. Students need to explain how Mongol states were built and fragmented, how imperial expansion changed the conditions of trade and communication, and how intensified contact moved knowledge and cultural practices across Eurasia.',
    videos: [
      {
        title: 'The MONGOL Empire, Explained [AP World History Review—Unit 2 Topic 2]',
        url: 'https://youtu.be/KHJLZBXUyzo',
        youtubeId: 'KHJLZBXUyzo',
        prompt: 'Track four moves: state building, fragmentation, exchange, and cultural or technological transfer.'
      },
      {
        title: 'The Rise and Fall of the Mongol Empire — Anne F. Broadbridge',
        url: 'https://youtu.be/wUVvTqvjUaM',
        youtubeId: 'wUVvTqvjUaM',
        prompt: 'Use this five-minute overview to reinforce how the Mongols rose from the steppe, built a vast empire, and eventually fragmented into regional khanates.'
      }
    ],
    segments: [
      {
        title: 'Big Rock 1: Build the Empire',
        bullets: [
          '**Chinggis Khan** unified competing steppe groups and reorganized military loyalty around a larger command system, helping create a highly coordinated conquering force.',
          'Mongol armies combined **mounted mobility, archery, intelligence, feigned retreat, and siege technologies borrowed from conquered peoples**, allowing them to defeat both nomadic and settled opponents.',
          'The result was a vast land empire stretching across much of Eurasia, but conquest created a second problem: how to govern enormous distances and diverse populations.'
        ],
        image: {
          title: 'Chinggis Khan',
          caption: 'A later Yuan dynasty portrait of the founder of the Mongol Empire.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg'
        }
      },
      {
        title: 'Big Rock 2: Govern, Then Fragment',
        bullets: [
          'Mongol rulers used **regional administration, religious tolerance, local officials, and the Yam relay system** to govern distance and diversity.',
          'After Chinggis Khan, succession disputes, regional interests, distance, and adaptation to local societies weakened political unity.',
          'The empire fragmented into major **Mongol khanates**, including the Yuan dynasty, Ilkhanate, Chagatai Khanate, and Golden Horde. Mongol rule continued, but as multiple regional states rather than one unified empire.'
        ],
        image: {
          title: 'Mongol successor khanates',
          caption: 'Fragmentation demonstrates both continuity of Mongol rule and decline of unified imperial control.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png'
        }
      },
      {
        title: 'Big Rock 3: Empire Facilitated Exchange',
        bullets: [
          'Mongol expansion drew more people into connected imperial economies and lowered some political barriers across long stretches of Eurasia.',
          'Merchant protection and the **Yam postal relay system** improved communication and made long-distance movement more predictable across Mongol-controlled territory.',
          'The **Pax Mongolica** did not create the Silk Roads. It changed the conditions on existing routes, helping trade, diplomacy, travel, and communication intensify.'
        ],
        image: {
          title: 'Silk Road routes across Eurasia',
          caption: 'Mongol rule altered the political conditions along established overland exchange networks.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      },
      {
        title: 'Big Rock 4: Contact Transferred Knowledge',
        bullets: [
          'Mongol-era interregional contact helped **Greco-Islamic medical knowledge** circulate toward western Europe through wider Eurasian connections.',
          '**Numbering systems** and mathematical knowledge moved across cultural boundaries into Europe through intensified interregional exchange.',
          'The Mongols **adopted the Uyghur script** for administrative purposes, showing that conquerors also borrowed useful cultural practices from peoples they encountered.'
        ],
        image: {
          title: 'Transfer across a connected Eurasia',
          caption: 'The Mongol Empire mattered not only for movement of goods but for the transfer and adaptation of knowledge.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      }
    ]
  },

  map: {
    title: 'Map of the Mongol Empire and Successor Khanates',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MongolEmpireDivisions1300.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:MongolEmpireDivisions1300.png',
    caption: 'By c. 1300, Mongol political control had fragmented into regional khanates even as long-distance connections across Eurasia remained powerful.',
    intro: 'Use the map twice: first to explain why governing continental scale was difficult, and then to explain why the same geographic reach could facilitate trade, communication, and knowledge transfer.',
    prompt: 'How can the same geographic scale help explain both Mongol political fragmentation and increased interregional exchange?',
    notes: [
      'The empire\'s scale made unified rule difficult, contributing to regional khanates and political fragmentation.',
      'Those khanates still overlapped with major overland exchange corridors, allowing merchants, officials, diplomats, and specialists to move across Eurasia.',
      'The **Yuan**, **Ilkhanate**, **Chagatai Khanate**, and **Golden Horde** adapted to different regional conditions while preserving forms of Mongol political identity.',
      'The map should support both required stories: **state building and decline** and **expanded trade and communication**.'
    ]
  },

  deepReading: {
    title: 'The Empire of the Relay',
    desc: 'A textbook-depth companion on Mongol conquest, regional khanates, the Yam, merchant protection, and the specialists, scripts, medical knowledge, and mathematical ideas that moved through a more connected Eurasia. Optional.',
    url: 'deep-reading-topic-2-2-mongol-empire.html'
  },

  first10: {
    title: 'First & 10: Conquest, Connection, Exchange',
    embedUrl: 'first-and-10-topic-2-2-mongol-empire-capture.html?v=narrative-v1'
  },

  evidenceLab: {
    title: 'Evidence Lab: Proving Mongol Significance',
    intro: 'Use evidence for all three CED dimensions of Topic 2.2: state change, exchange, and cultural or technological transfer.',
    prompt: 'Choose one piece of evidence and explain whether it best demonstrates Mongol state building or decline, increased trade and communication, or technological and cultural transfer.',
    items: [
      { title: 'The Four Mongol Khanates', detail: 'Evidence that a unified empire fragmented into regional Mongol states as succession, distance, and regional interests weakened centralized control.' },
      { title: 'The Yam Relay System', detail: 'Evidence that imperial administration also facilitated communication, travel, and commerce across enormous distances.' },
      { title: 'Greco-Islamic Medical Knowledge and Numbering Systems', detail: 'Evidence that intensified interregional contact encouraged knowledge to move across cultural and geographic boundaries.' },
      { title: 'Adoption of the Uyghur Script', detail: 'Evidence that the Mongols borrowed and adapted useful cultural practices from peoples within the connected Eurasian world.' }
    ]
  },

  primarySource: {
    title: 'Primary Source: William of Rubruck on Mongol Administration and Connectivity',
    intro: 'William of Rubruck traveled to the court of Möngke Khan in the 1250s. His observations are useful evidence for the diversity, communication systems, and mobility that existed within Mongol-ruled Eurasia.',
    text: '"The Khan\'s court was a place of many nations and many tongues. I saw there men of Russia, of Armenia, of Georgia, of Hungary, and of the Latin church, as well as followers of Muhammad and of the Buddha. The Khan himself questioned me about the faith of the Franks, and I answered him as best I could. He told me that he respected all who prayed to God sincerely, whatever their manner. His scribes kept records in several languages, and his messengers could travel the length of his empire with fresh horses waiting at every station. No merchant traveled without the Khan\'s seal of permission, but those who carried it moved freely and in safety."',
    attribution: 'William of Rubruck, Itinerarium, an account of his journey to the court of Khan Möngke written for King Louis IX of France, 1253–1255',
    questions: [
      'What does this account reveal about Mongol strategies for governing a diverse empire?',
      'How does the relay system described here help explain increased communication and movement?',
      'What details suggest that Mongol rule could also create conditions for cultural and technological transfer?'
    ]
  }
};
