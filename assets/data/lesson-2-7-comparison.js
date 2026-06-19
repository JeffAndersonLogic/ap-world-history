(() => {
  // brand lock IIFE — copy this block exactly:
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
    topic: 'Topic 2.7',
    title: 'Comparison of Economic Exchange: Silk Roads, Indian Ocean, and Trans-Saharan Networks',
    subtitle: 'Analyzing continuities and differences across Afro-Eurasian trade networks c. 1200–1450',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: "Organize your thinking here — submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: 'I can identify similarities across all three Afro-Eurasian trade networks — Silk Roads, Indian Ocean, and trans-Saharan — including long-distance exchange, the movement of goods and ideas, and cultural diffusion.',
      kc: 'KC-3.1',
      theme: 'Economics'
    },
    {
      target: 'I can identify key differences between the three trade networks in geography, transportation technology, dominant goods, and cultural effects.',
      kc: 'KC-3.1.I.C.i',
      theme: 'Economics'
    },
    {
      target: 'I can explain how comparing the three networks reveals broader patterns of Afro-Eurasian connectivity and supports AP-style comparison arguments with evidence.',
      kc: 'KC-3.3',
      theme: 'Economics'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can state at least two specific similarities shared by all three trade networks and support each with a concrete historical example.',
      kc: 'KC-3.1',
      theme: 'Economics'
    },
    {
      criteria: 'I can explain at least two meaningful differences between any two of the three networks, using specific evidence about geography, technology, or goods exchanged.',
      kc: 'KC-3.1.I.C.i',
      theme: 'Economics'
    },
    {
      criteria: 'I can use a comparison of trade networks to build a historical argument that includes a claim, evidence, and reasoning connecting to a broader pattern of Afro-Eurasian exchange.',
      kc: 'KC-3.3',
      theme: 'Economics'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-3.1',
      theme: 'Networks of Exchange',
      text: 'A deepening and widening of networks of human interaction within and across regions contributed to cultural, technological, and biological diffusion within and between various societies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.A.i',
      theme: 'Networks of Exchange',
      text: 'Improved commercial practices led to an increased volume of trade and expanded the geographical range of existing trade routes—including the Silk Roads—promoting the growth of powerful new trading cities.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.1.I.C.i',
      theme: 'Networks of Exchange',
      text: 'The growth of interregional trade in luxury goods was encouraged by innovations in previously existing transportation and commercial technologies, including the caravanserai, forms of credit, and the development of money economies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.3',
      theme: 'Networks of Exchange',
      text: 'Changes in trade networks resulted from and stimulated increasing productive capacity, with important implications for social and gender structures and environmental processes.',
      illustrativeExamples: []
    },
    {
      code: 'KC-3.3.I.B',
      theme: 'Networks of Exchange',
      text: 'Demand for luxury goods increased in Afro-Eurasia. Chinese, Persian, and Indian artisans and merchants expanded their production of textiles and porcelains for export; manufacture of iron and steel expanded in China.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: 'Lecture: Comparing Silk Roads, Indian Ocean, and Trans-Saharan Trade Networks',
    intro: 'Topic 2.7 is the comparison topic for Unit 2 — and it is one of the most AP-tested skills in the course. You must be able to state specific similarities AND specific differences across the three networks with evidence. Use these segments to build both sides of that comparison.',
    videos: [
      {
        title: 'Comparing Afro-Eurasian Trade Networks (AP World History)',
        url: 'https://youtu.be/YT_27_1',
        youtubeId: 'YT_27_1',
        prompt: 'As you watch, build a mental two-column chart: what is the same across all three networks? What is different? Note specific goods, technologies, and cultural effects for each network.'
      },
      {
        title: 'AP World History: How to Write Comparison Arguments',
        url: 'https://youtu.be/YT_27_2',
        youtubeId: 'YT_27_2',
        prompt: 'Focus on how to structure a comparison argument: claim → similarity/difference → evidence → reasoning. How does the AP exam expect you to connect evidence to a broader historical pattern?'
      }
    ],
    segments: [
      {
        title: 'What All Three Networks Shared',
        bullets: [
          'All three networks moved **luxury goods** across vast distances — silk and porcelain on the Silk Roads, spices and textiles across the Indian Ocean, gold and salt across the Sahara — and in all three cases, wealthy intermediary states grew rich by taxing and protecting that traffic.',
          'Merchants in all three systems built **diaspora communities** in foreign cities: Muslim traders established permanent settlements from East Africa to Southeast Asia; Jewish merchants maintained networks across the Mediterranean and Indian Ocean; Chinese traders created quarters in Southeast Asian port cities.',
          '**Religion and ideas spread through commerce** in all three systems — Islam was the most striking case, spreading along all three networks simultaneously carried by merchants, scholars, and Sufi missionaries, making it the most widely distributed religion in the Afro-Eurasian world by c. 1450.'
        ],
        image: {
          title: 'World Map — Blue Sea Edition',
          caption: 'By c. 1300, the Silk Roads, Indian Ocean network, and trans-Saharan routes together formed a single interconnected Afro-Eurasian exchange system spanning from West Africa to East Asia.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_Map_Blank_-_with_blue_sea.svg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_Map_Blank_-_with_blue_sea.svg'
        }
      },
      {
        title: 'How the Networks Differed',
        bullets: [
          'The **Silk Roads** relied on overland camel caravans, relay stations, and caravanserais across desert and steppe; the **Indian Ocean** network was driven by seasonal **monsoon winds** that made maritime trade predictable and efficient using dhows and junks; the **trans-Saharan** routes required specialized **Bactrian and dromedary camel** technology to cross the world\'s largest desert, with oasis towns as rest and resupply points.',
          'The dominant **trade goods** differed: the Silk Roads carried silk, porcelain, and paper westward; the Indian Ocean moved spices, cotton textiles, and precious stones; the trans-Saharan routes specialized in gold and salt — with salt moving south from Saharan deposits and gold moving north from West African kingdoms such as Mali.',
          'The **dominant religion** carried by each network reflected its geography: **Islam** spread most powerfully via the Indian Ocean and trans-Saharan routes through merchant networks; **Buddhism** traveled primarily the overland Silk Roads into East and Southeast Asia; **Christianity** expanded through European overland and Mediterranean maritime networks — reflecting how geography shaped which cultural traditions each system carried.'
        ],
        image: {
          title: 'Silk Road Routes Across Afro-Eurasia',
          caption: 'The overland Silk Roads connected China to the Mediterranean through Central Asia — a fundamentally different geography, technology, and set of trade goods from the Indian Ocean maritime network or the trans-Saharan camel routes.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg'
        }
      },
      {
        title: 'Why Comparison Matters for AP Writing',
        bullets: [
          'AP comparison questions ask you to **explain a similarity AND a difference** and connect both to a broader historical argument — not just list facts. A strong comparison states a claim ("although all three networks shared X, they differed significantly in Y because Z"), uses specific evidence, and explains the historical significance.',
          'The most powerful comparisons in Unit 2 connect to **causation**: why did the Indian Ocean network carry different religions than the Silk Roads? Because monsoon winds created different merchant communities with different cultural backgrounds. Why did the trans-Saharan routes produce different state structures? Because controlling desert access created different political incentives than controlling maritime ports.',
          'Knowing the differences across networks also prepares you for **continuity and change over time (CCOT)** arguments: after 1450, the Indian Ocean network would be transformed by Portuguese intrusion, the trans-Saharan routes would face competition from Atlantic alternatives, and the Silk Roads would decline — but the patterns of diaspora, exchange, and cultural diffusion established in this era would continue in new forms.'
        ],
        image: {
          title: 'Indian Ocean CIA World Factbook Map',
          caption: 'The Indian Ocean network — driven by predictable monsoon winds — was the most geographically expansive of the three systems, connecting East Africa, Arabia, South Asia, and Southeast Asia into a single commercial zone.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Ocean-CIA_WFB_Map.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png'
        }
      }
    ]
  },

  map: {
    title: 'Map: All Three Afro-Eurasian Trade Networks, c. 1200–1450',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_Map_Blank_-_with_blue_sea.svg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_Map_Blank_-_with_blue_sea.svg',
    caption: 'The world map shows the geographic scope of all three Afro-Eurasian trade networks — overland Silk Roads, Indian Ocean maritime routes, and trans-Saharan caravan routes — that together linked the known world from West Africa to China.',
    intro: 'This topic asks you to compare three separate trade systems — but looking at a world map reveals that they were not truly separate. The Indian Ocean network connected to the Silk Roads through Persian Gulf and Red Sea ports. The trans-Saharan routes connected to the Mediterranean world and, through it, to both the Silk Roads and the Indian Ocean network. Together, they formed a single integrated Afro-Eurasian exchange system.',
    prompt: 'Using the world map, identify where you think the three networks overlapped or connected. What cities or regions served as nodes connecting more than one network? How does this geographic overlap challenge the idea that these were three separate systems rather than one integrated one?',
    notes: [
      'The **Silk Roads** extended from Chang\'an (Xi\'an) in China westward through Central Asia to Persia, Anatolia, and the Mediterranean — primarily an overland system operating across steppe and desert terrain.',
      'The **Indian Ocean network** connected the East African Swahili Coast, the Arabian Peninsula, South Asia, and Southeast Asia via seasonal monsoon winds — a maritime system spanning the entire rim of the Indian Ocean.',
      'The **trans-Saharan routes** connected sub-Saharan West African kingdoms (Mali, Songhai) to North Africa and the Mediterranean via a network of oasis towns across the Sahara Desert.',
      'Key **connector cities** where networks overlapped included Cairo (Indian Ocean and trans-Saharan), Hormuz (Silk Roads and Indian Ocean), and Guangzhou/Quanzhou (Silk Roads and Indian Ocean maritime).'
    ]
  },

  first10: {
    title: 'First & 10: Comparing the Networks',
    embedUrl: 'first-and-10-topic-2-7-comparison-capture.html'
  },

  evidenceLab: {
    title: 'Evidence Lab: Comparing the Three Trade Networks',
    intro: 'Comparison requires evidence from multiple networks. Each item below represents a different trade network and a different dimension of exchange — goods, technology, religion, or state structure. Use them to build the similarity and difference arguments you will need for AP comparison writing.',
    prompt: 'Choose two items from different trade networks. Explain one similarity and one difference they reveal. Then state a broader historical argument that your comparison supports.',
    items: [
      {
        title: 'Mali Empire and the Trans-Saharan Gold Trade',
        detail: 'The Mali Empire (c. 1235–1600) controlled the gold-producing regions of West Africa and taxed all gold and salt moving across the Sahara. Mansa Musa\'s 1324 pilgrimage demonstrated Mali\'s extraordinary wealth to the Islamic world. The trans-Saharan routes that enriched Mali depended on specialized camel technology, oasis town infrastructure, and Berber merchants who knew the desert routes — a fundamentally different system from either the Silk Roads or the Indian Ocean network.'
      },
      {
        title: 'Swahili Coast City-States and the Indian Ocean Network',
        detail: 'The Swahili Coast city-states — Kilwa, Mombasa, Zanzibar, Sofala — were East African trading cities that became wealthy by connecting the interior of Africa to the Indian Ocean trade network. They exported gold, ivory, and enslaved people in exchange for Indian cotton textiles, Persian ceramics, and Chinese porcelain. Their culture was a blend of Bantu African, Arab, and Persian influences — a direct product of Indian Ocean commercial integration. Like trans-Saharan traders, Swahili merchants used Islam as a commercial language and networking tool.'
      },
      {
        title: 'Central Asian Oasis Cities on the Silk Roads',
        detail: 'Cities like Samarkand, Kashgar, and Dunhuang sat at the nodes of the overland Silk Roads, growing wealthy by taxing and supplying caravans. Their populations reflected the cosmopolitan character of the routes: merchants, scholars, and pilgrims from China, Persia, India, and the Mediterranean all passed through. The destruction of many oasis cities during the Mongol conquests of the 13th century, followed by the relative stability of the Pax Mongolica, demonstrates how political conditions shaped trade volumes on overland routes in ways that monsoon-driven maritime trade was less vulnerable to.'
      },
      {
        title: 'Abu-Abdullah Ibn Battuta — Traveler Across All Three Networks',
        detail: 'Ibn Battuta (1304–c.1368) traveled approximately 75,000 miles over three decades, crossing the trans-Saharan routes, the Indian Ocean network, and parts of the overland Silk Roads. His account, the Rihla, reveals both the unity and the diversity of the Afro-Eurasian world: everywhere he found Muslim merchants and scholars, but the goods traded, the ships and animals used, and the political structures he encountered differed dramatically between West Africa, the Indian Ocean rim, and Central Asia. The Rihla is itself evidence that a single individual could navigate all three networks using Islam and Arabic as common cultural tools.'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: A Scholar Compares the Three Trade Networks (Paraphrased Scholarly Summary)',
    intro: 'The following is a paraphrased synthesis based on the work of historians Janet Abu-Lughod, K.N. Chaudhuri, and Nehemia Levtzion, who studied Afro-Eurasian trade networks in the c. 1200–1450 period. It represents the scholarly consensus about the similarities and differences across the three major systems.',
    text: 'Historians who study the period from c. 1200 to c. 1450 have identified three major Afro-Eurasian trade networks that together formed what Janet Abu-Lughod called "a world system before European hegemony." The Silk Roads, the Indian Ocean network, and the trans-Saharan routes shared several core features: all moved luxury goods across vast distances; all generated wealthy intermediary states that taxed the traffic; all served as corridors for the spread of Islam and other religious traditions; and all depended on specialized merchant diaspora communities who maintained commercial relationships across cultural and political boundaries. Yet the networks differed significantly. The Indian Ocean system was distinguished by its use of monsoon winds, which made maritime trade more reliable and less expensive than overland alternatives. The trans-Saharan routes depended on camel technology and oasis infrastructure that had no maritime equivalent. The Silk Roads combined overland caravans with river and sea connections through the Persian Gulf and Red Sea. The goods each system specialized in also differed: silk and porcelain characterized the eastern Silk Roads; spices, cotton, and precious stones dominated the Indian Ocean; gold and salt defined the trans-Saharan exchange. These differences were not incidental — they reflected the fundamental geographic and ecological realities of each system\'s environment.',
    questions: [
      'According to the scholarly summary, what are the four core features shared by all three trade networks? For each feature, provide one specific historical example that illustrates it.',
      'The summary argues that the differences between the networks "were not incidental — they reflected the fundamental geographic and ecological realities of each system\'s environment." Choose one difference and explain the geographic or ecological factor that produced it.',
      'How does this secondary source differ from a primary source like Ibn Battuta\'s Rihla as evidence for understanding the three trade networks? What can a scholarly synthesis tell us that an eyewitness account cannot, and vice versa?'
    ]
  }

};
