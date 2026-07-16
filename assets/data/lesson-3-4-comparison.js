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
    unit: 'Unit 3: Land-Based Empires',
    topic: 'Topic 3.4',
    title: 'Comparison in Land-Based Empires',
    subtitle: 'Using the AP Comparison skill to analyze similarities and differences across the Ottoman, Safavid, Mughal, Qing, and Russian empires, c. 1450–c. 1750',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here — submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can compare how at least two land-based empires expanded, identifying one key similarity and one key difference in their methods or contexts.',
      kc: 'KC-4.3.II',
      theme: 'Governance'
    },
    {
      target: 'I can compare how at least two land-based empires administered their territories, explaining what their different approaches reveal about the challenges of governing diverse populations.',
      kc: 'KC-4.3',
      theme: 'Governance'
    },
    {
      target: 'I can construct a supported historical argument that compares land-based empires, using specific evidence to explain both similarities and differences.',
      kc: 'KC-4.1.VI',
      theme: 'Argumentation'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can identify a specific similarity across two empires (e.g., both used conquered or foreign peoples as administrators) and explain why this similarity existed.',
      kc: 'KC-4.3.II',
      theme: 'Governance'
    },
    {
      criteria: 'I can identify a specific difference (e.g., Mughal accommodation vs. Ottoman enforcement of Sunni orthodoxy on conquered populations) and explain what accounts for it.',
      kc: 'KC-4.3',
      theme: 'Governance'
    },
    {
      criteria: 'I can write a comparison argument that includes: a claim, at least two pieces of evidence from different empires, and a statement that explains the significance of the comparison.',
      kc: 'KC-4.1.VI',
      theme: 'Argumentation'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-4.1',
      theme: 'Land-Based Empires',
      text: 'The interconnection of the Eastern and Western Hemispheres made possible by transoceanic voyaging transformed trade and had a significant social impact on the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.1.VI',
      theme: 'Land-Based Empires',
      text: 'In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3',
      theme: 'Land-Based Empires',
      text: 'Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II',
      theme: 'Land-Based Empires',
      text: 'Imperial expansion relied on the increased use of gunpowder, cannons, and armed trade to establish large empires in both hemispheres.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.II.B',
      theme: 'Land-Based Empires',
      text: 'Land empires included the Manchu in Central and East Asia; the Mughal in South and Central Asia; the Ottoman in Southern Europe, the Middle East, and North Africa; and the Safavids in the Middle East.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.i',
      theme: 'Land-Based Empires',
      text: 'Political and religious disputes led to rivalries and conflict between states.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: 'Lecture: Comparing Land-Based Empires, c. 1450–c. 1750',
    intro: 'Topic 3.4 is the comparison topic for Unit 3 — and comparison is one of the most AP-tested historical thinking skills. You must be able to identify meaningful similarities AND differences across empires with specific evidence, and connect those comparisons to a broader historical argument about the nature of imperial rule.',
    videos: [
      {
        title: 'AP World UNIT 3 REVIEW [Everything You NEED to Know!]',
        url: 'https://youtu.be/dOdU3J39mFk',
        youtubeId: 'dOdU3J39mFk',
        prompt: 'Use the review to build a precise comparison of expansion, administration, and legitimation across land-based empires.'
      }
    ],
    segments: [
      {
        title: 'The Comparison Skill: More Than "Same vs. Different"',
        bullets: [
          '**AP Comparison** requires three things: (1) identifying a meaningful similarity or difference, (2) supporting it with specific evidence from at least two empires, and (3) explaining what the comparison reveals — why the similarity or difference existed and what it tells us about imperial rule. Merely listing facts does not earn full comparison credit.',
          'The best comparison claims are **precise and arguable**: "Both the Ottoman and Mughal empires recruited administrators from outside the traditional elite — the Ottomans through the devshirme system and the Mughals through the mansabdar system — because both rulers faced the same problem: how do you build a loyal bureaucracy when the existing nobility has its own power base?" That is a comparison argument, not just a list.',
          'The comparison skill is **not about memorizing which empires are similar** — it is about understanding the forces that shaped imperial policy. When you see gunpowder empires doing similar things, ask why similar pressures produced similar solutions. When you see empires doing different things, ask what different conditions produced different responses.'
        ],
        image: {
          title: 'World Map 1700 CE',
          caption: 'By c. 1700, the major land-based empires of Eurasia — Ottoman, Safavid, Mughal, Qing, and Russian — had carved the known world into overlapping spheres of imperial authority, each built through a combination of gunpowder military power and administrative innovation.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_1700_CE.png'
        }
      },
      {
        title: 'Similarities Across Empires',
        bullets: [
          'All five major land-based empires shared **gunpowder military technology** as the engine of expansion. The Ottoman conquest of Constantinople (1453) with cannon, the Mughal victory at Panipat (1526) with artillery, the Safavid use of firearms against Uzbeks — all reflect a common military revolution. This shared technology explains why historians sometimes group them as "gunpowder empires."',
          'All five empires grappled with **the loyalty problem**: how do you build an administration loyal to the ruler rather than to regional elites or hereditary nobles? The Ottoman devshirme recruited boys from Christian families and trained them as Muslim soldier-administrators. The Mughal mansabdar ranked officers by grade regardless of ethnic background. The Qing Banner system organized forces around Manchu ethnic identity and personal loyalty. The Russian Table of Ranks tied service nobility to state promotion rather than birth.',
          '**Religion legitimized all five empires**, though in different ways. The Ottoman Sultan claimed the Caliphate — leader of all Sunni Muslims. The Safavid Shah claimed descent from a Shia imam. Akbar\'s Mughal court embodied a universal religious authority. The Qing emperor performed Confucian rituals and patronized Tibetan Buddhism. Russia\'s tsar ruled as protector of Orthodox Christianity. The specific religion differed; the function of religion as legitimation was universal.'
        ],
        image: {
          title: 'World Map 1700 CE',
          caption: 'The geographic spread of the five major land-based empires by c. 1700 reflects their shared achievement: using gunpowder military technology and innovative administrative systems to govern vast, diverse, and conquered populations.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_1700_CE.png'
        }
      },
      {
        title: 'Meaningful Differences — What Set Each Empire Apart',
        bullets: [
          '**Religious policy** was the sharpest line of difference. The Safavids forcibly converted their predominantly Sunni population to Shia Islam — creating permanent conflict with the Sunni Ottomans. The Mughals governed a Hindu-majority subcontinent: Akbar\'s tolerance (including the Din-i-Ilahi) reflected the reality that you cannot oppress 80% of your population. Aurangzeb\'s later reversal — imposing jizya on Hindus — produced exactly the revolts Akbar\'s tolerance avoided. The Ottoman millet system offered a middle path: recognized religious communities governed themselves internally while remaining loyal to the empire.',
          '**The composition of conquered populations** shaped administrative strategy more than ideology. The Qing Manchu rulers governed a Han Chinese majority that outnumbered them perhaps 50 to 1. The solution: maintain Manchu ethnic identity through the Banner system while adopting Confucian bureaucratic traditions the Han recognized as legitimate. Russian expansion across Siberia encountered sparsely populated indigenous peoples — producing a colonial extraction model (furs, tribute) very different from the systems the Mughals or Ottomans developed for governing dense urban populations.',
          '**Why differences matter for AP writing**: Identifying a difference is not enough. You must explain what it reveals. The difference between Ottoman and Mughal religious policy reveals that coercion is only viable when the minority is small. The difference between Qing and Mughal administrative strategy reveals that the ethnic ratio between rulers and ruled shaped governance structures. These explanations transform a list of differences into a historical argument.'
        ],
        image: {
          title: 'World Map 1700 CE',
          caption: 'The differences in religious policy, administrative innovation, and treatment of subject populations across the five major land-based empires reflect the different challenges each faced — and the different solutions each developed in response.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_1700_CE.png'
        }
      }
    ]
  },

  map: {
    title: 'Map: Major Land-Based Empires, c. 1700',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:World_1700_CE.png',
    caption: 'A world map showing the major land-based empires of Eurasia and their approximate territorial extents c. 1700 — Ottoman, Safavid, Mughal, Qing, and Russian — each built through a combination of gunpowder military power, administrative innovation, and religious legitimation.',
    intro: 'This topic asks you to compare five empires that existed simultaneously across Eurasia. A world map of c. 1700 reveals something striking: these empires together covered most of the landmass of Afro-Eurasia. Each was geographically vast, multi-ethnic, and religiously diverse. Looking at them side by side asks the question that drives Topic 3.4: given such different geographic, religious, and ethnic starting points, why did these empires develop so many similar strategies — and what explains their important differences?',
    prompt: 'Using the world map, identify the approximate location of each of the five major empires. What geographic features — mountains, deserts, rivers, coastlines — shaped the limits of each empire\'s expansion? How might those geographic realities have influenced their administrative challenges?',
    notes: [
      'The **Ottoman Empire** stretched from southeastern Europe through Anatolia, the Levant, North Africa, and Arabia — a Mediterranean and Middle Eastern empire controlling key trade routes between Europe and Asia.',
      'The **Safavid Empire** occupied the Persian plateau (modern Iran and Iraq), positioning it as a buffer state between the Sunni Ottoman Empire to the west and the Mughal Empire to the east — making the Sunni-Shia divide a geopolitical fault line.',
      'The **Mughal Empire** controlled most of the Indian subcontinent, governing the densest and most religiously diverse population of any of the five empires — a predominantly Hindu population under a Muslim ruling dynasty.',
      'The **Qing Dynasty** governed China proper plus Mongolia, Tibet, and Xinjiang by c. 1700 — the largest territorial empire of the period, with the Manchu ruling minority administering a Han Chinese majority through a hybrid system.',
      'The **Russian Empire** expanded rapidly eastward across Siberia and southward into Central Asia — a colonial expansion model fundamentally different from the urban administrative systems of the other four empires.'
    ],
    key: [
      { label: 'Ottoman Empire', detail: 'Southeastern Europe, Anatolia, Levant, North Africa, Arabia. Sunni Islam, devshirme, millet system.' },
      { label: 'Safavid Empire', detail: 'Persian plateau (Iran/Iraq). Shia Islam imposed, Persian bureaucracy, permanent Sunni-Shia conflict with Ottomans.' },
      { label: 'Mughal Empire', detail: 'Indian subcontinent. Muslim ruling dynasty over Hindu majority, mansabdar system, Akbar\'s tolerance policy.' },
      { label: 'Qing Dynasty', detail: 'China, Mongolia, Tibet, Xinjiang. Manchu ruling minority, Banner system, Confucian civil service exam retained.' },
      { label: 'Russian Empire', detail: 'Russia, Siberia, Central Asia. Orthodox Christianity, serfdom, colonial extraction model in Siberia.' }
    ]
  },

  first10: {
    title: 'First & 10: Comparing the Empires',
    embedUrl: 'first-and-10-topic-3-4-comparison-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 3.4 lesson path.'
  },

  beSurreal: {
    title: 'BeSurreal: You Are a Traveler Who Has Visited Three Empires, c. 1600',
    desc: 'A decade of travel from Istanbul to Isfahan to Agra. You\'ve attended Friday prayer at the Süleymaniye Mosque, visited Shah Abbas\'s court, and dined in Akbar\'s courtyard at Fatehpur Sikri.',
    intro: 'Imagine you\'ve spent a decade traveling from Istanbul to Isfahan to Agra. In each city you\'ve attended a Friday prayer at the Süleymaniye Mosque, visited Shah Abbas\'s court in Isfahan, and dined in Akbar\'s courtyard at Fatehpur Sikri. Each ruler asked you the same question: "Which emperor is the greatest?" You\'ve realized the comparison itself is the wrong frame — each empire worked differently because it faced different problems.',
    detail: 'In Istanbul, you witnessed the devshirme boys — Christian-born, now Muslim — drilling in the Janissary barracks, loyal to the Sultan alone. In Isfahan, Shah Abbas\'s courtiers whispered about the forced conversion of Sunni populations, the exquisite tilework of the mosques a veneer over deep sectarian anxiety. In Agra, Akbar\'s court was a riot of diversity: Hindu Rajput commanders, Sufi mystics, Jesuit missionaries, all eating together, debating theology. Three empires, three different solutions to the same question: how do you hold together a diverse, conquered population? The comparison reveals that there is no single right answer — only different answers suited to different conditions.',
    prompt: 'If you had to advise one of these three rulers on religious policy, what would you recommend — and what specific evidence from the other two empires would you use to support your advice?'
  },

  evidenceLab: {
    title: 'Evidence Lab: Comparing Administrative Systems Across Empires',
    intro: 'AP comparison requires evidence from at least two cases. Each item below represents a different empire and a different dimension of imperial administration — military recruitment, religious legitimation, or administrative organization. Use them to build both similarity and difference arguments.',
    prompt: 'Choose two items from different empires. Explain one similarity and one difference they reveal about how land-based empires administered their territories. Then state a broader historical argument that your comparison supports.',
    items: [
      {
        title: 'The Devshirme System vs. the Mansabdar System',
        detail: 'The Ottoman devshirme recruited boys from Christian subject families every few years, converted them to Islam, educated them in Ottoman palace schools, and assigned them as military officers (Janissaries) or palace administrators. These men had no family connections to Ottoman nobility, making them personally loyal to the Sultan. The Mughal mansabdar system ranked military-administrative officers by grade (mansab), assigning them salary and military responsibilities regardless of ethnic or religious background — Hindu Rajput commanders served alongside Afghan and Persian officers. Both systems solved the same problem: building a loyal bureaucracy without empowering hereditary regional elites who might challenge imperial authority. The key difference is that devshirme relied on conversion and removal from family ties, while the mansabdar used rank and salary as the mechanism of loyalty.'
      },
      {
        title: 'Akbar\'s Din-i-Ilahi vs. the Ottoman Caliphate Claim',
        detail: 'The Mughal Emperor Akbar (r. 1556–1605) governed a subcontinent where roughly 80% of the population was Hindu. His religious policy reflected this reality: he abolished the jizya tax on non-Muslims, married Hindu Rajput princesses, held interfaith debates at his Ibadat Khana (House of Worship), and developed the Din-i-Ilahi — a syncretic court philosophy drawing from Islam, Hinduism, Zoroastrianism, and Christianity. The Ottoman Sultan Suleiman I, by contrast, claimed the title of Caliph — successor to the Prophet Muhammad and leader of all Sunni Muslims worldwide. This claim directed political legitimacy toward Muslims both inside and outside Ottoman territory. The contrast reveals how the religious composition of subject populations shaped legitimation strategy: Akbar needed to appeal across religious lines; the Ottoman Sultan drew authority from championing a single faith.'
      },
      {
        title: 'The Qing Banner System vs. the Ottoman Janissaries',
        detail: 'The Qing Dynasty was founded by Manchu people from northeast China who conquered the Han Chinese Ming Dynasty in 1644. The Manchu rulers organized their military around the Eight Banners — hereditary military units organized by ethnicity (Manchu, Mongol, and Han Chinese bannermen). Bannermen were a privileged military class with exclusive access to certain administrative positions, maintaining Manchu ethnic identity as a governing tool. The Ottoman Janissaries, by contrast, were deliberately deracinated — stripped of ethnic and family identity through the devshirme process — to create soldiers loyal only to the Sultan. Both systems solved the minority-ruler problem, but differently: the Qing used ethnic exclusivity to preserve Manchu power, while the Ottomans used cultural erasure to create a personal loyalty corps. The difference reflects the Qing\'s larger governing challenge — maintaining Manchu identity while administering a Han majority fifty times larger.'
      },
      {
        title: 'Russian Serfdom vs. Mughal Revenue Administration',
        detail: 'The Russian Empire expanded rapidly across Siberia in the 16th and 17th centuries, extracting furs (yasak tribute) from indigenous populations through a colonial garrison system. Within Russia proper, the Romanov tsars tightened control over the peasant population through serfdom: by the mid-17th century, serfs were legally bound to the land and to their noble lords, providing labor revenue that sustained the noble class and, through them, the tsar\'s authority. The Mughal revenue system, by contrast, assessed agricultural taxes through mansabdar officers who received temporary assignments to revenue districts — preventing the development of a hereditary landed nobility that could challenge imperial authority. The contrast reveals how labor control differed between empires with settled aristocracies (Russia) and those that deliberately avoided hereditary noble classes (Mughal).'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: Travelers Describe the Courts of Three Empires',
    intro: 'The following are adapted excerpts from traveler accounts describing the courts of three major land-based empires in the late 16th and early 17th centuries. Taken together, they offer a comparative window into how imperial authority was displayed and how rulers used religion and court ceremony to project power.',
    text: 'Ogier Ghiselin de Busbecq, Habsburg ambassador to the Ottoman court of Suleiman I (c. 1555): "No distinction is attached to birth among the Turks... the Sultan\'s advisors and military commanders are chosen from the sons of herdsmen and shepherds, and not from those of high birth... The Sultan\'s court is a place of absolute order and obedience — the Janissaries stand as silent as statues, and none would dare speak without permission."\n\nFather Antonio Monserrate, Jesuit missionary at the Mughal court of Akbar (c. 1580): "The King is so devoted to every kind of inquiry that he will sometimes hold religious discussions late into the night, with Brahmins, Hindus, Zoroastrians, and ourselves all present. He does not declare which faith he prefers, but listens to all with equal patience, as if he were a judge weighing each argument. His court is a place of remarkable mixing — Hindu commanders sit alongside Afghan nobles and Persian scholars, and all dine at the same table."\n\nAdam Olearius, German traveler at the Safavid court of Shah Abbas I (c. 1637): "Shah Abbas held extraordinary power over his subjects, and his authority was not merely political but religious — he claimed descent from the Imam Ali himself. The Shia faith was enforced with rigor: public cursing of the first three caliphs was required in the markets, and those suspected of Sunni sympathies faced severe punishment. The Shah\'s army was formidable and his court magnificent, but one sensed beneath the splendor a deep anxiety about the Sunni powers — the Ottomans to the west, the Uzbeks to the northeast — that surrounded his empire."',
    questions: [
      'What similarity in the exercise of imperial authority can you identify across all three court descriptions? Use specific evidence from at least two of the accounts.',
      'Busbecq emphasizes that the Ottoman Sultan\'s advisors are chosen by merit rather than birth. How does Monserrate\'s account of Akbar\'s court reflect a similar or different approach to administration? Use evidence from both accounts.',
      'Olearius describes the Safavid court as enforcing Shia Islam while Monserrate describes Akbar as listening to all faiths "with equal patience." What explains this difference in religious policy? Connect your answer to the specific populations each ruler governed.'
    ]
  }

};
