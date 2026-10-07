(() => {
  // brand lock IIFE, copy this block exactly:
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
    subtitle: 'Compare the methods by which land-based empires increased their influence from 1450 to 1750',
    feedbackToolUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasSubmissionNote: 'Organize your thinking here, submit your final work in Canvas.'
  },

  learningTargets: [
    {
      target: 'I can compare the methods by which various empires increased their influence from 1450 to 1750.',
      kc: 'Unit 3: Learning Objective D',
      theme: 'Governance'
    },
    {
      target: 'I can compare specific methods of increasing influence, including military expansion, administration, revenue, and religious or cultural legitimation, across at least two empires.',
      kc: 'KC-4.3',
      theme: 'Governance'
    },
    {
      target: 'I can construct a supported comparison argument using specific Unit 3 evidence and explain how that evidence supports my claim.',
      kc: 'Unit 3: Learning Objective D',
      theme: 'Argumentation'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can identify one meaningful similarity or difference in the methods two empires used to increase their influence and explain why the pattern existed.',
      kc: 'Unit 3: Learning Objective D',
      theme: 'Governance'
    },
    {
      criteria: 'I can use specific evidence about expansion, administration, revenue, or religious and cultural legitimation from at least two empires and connect each example to increased imperial influence.',
      kc: 'KC-4.3',
      theme: 'Governance'
    },
    {
      criteria: 'I can write a comparison argument with a defensible claim, evidence from at least two empires, and explanation of how the evidence supports the comparison.',
      kc: 'Unit 3: Learning Objective D',
      theme: 'Argumentation'
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 3: Learning Objective D',
      theme: 'Learning Objective',
      text: 'Compare the methods by which various empires increased their influence from 1450 to 1750.',
      illustrativeExamples: []
    },
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
    title: 'Lecture: Same Jobs, Different Tools',
    intro: 'Topic 3.4 is the Unit 3 comparison capstone. Keep one job constant, compare the methods two empires used, and connect both pieces of evidence to the College Board question: how did the method increase imperial influence?',
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
          '**AP Comparison** requires three things: (1) identifying a meaningful similarity or difference, (2) supporting it with specific evidence from at least two empires, and (3) explaining what the comparison reveals, why the similarity or difference existed and what it tells us about imperial rule. Merely listing facts does not earn full comparison credit.',
          'The best comparison claims are **precise and arguable**: "Both the Ottoman and Mughal empires recruited administrators from outside the traditional elite, the Ottomans through the devshirme system and the Mughals through the mansabdar system, because both rulers faced the same problem: how do you build a loyal bureaucracy when the existing nobility has its own power base?" That is a comparison argument, not just a list.',
          'The comparison skill is **not about memorizing which empires are similar**, it is about understanding the forces that shaped imperial policy. When you see gunpowder empires doing similar things, ask why similar pressures produced similar solutions. When you see empires doing different things, ask what different conditions produced different responses.'
        ],
        image: {
          title: 'World Map 1700 CE',
          caption: 'By c. 1700, the major land-based empires of Eurasia, Ottoman, Safavid, Mughal, Qing, and Russian, had carved the known world into overlapping spheres of imperial authority, each built through a combination of gunpowder military power and administrative innovation.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:1700_CE_world_map.PNG'
        }
      },
      {
        title: 'Similarities Across Empires',
        bullets: [
          'All five major land-based empires shared **gunpowder military technology** as the engine of expansion. The Ottoman conquest of Constantinople (1453) with cannon, the Mughal victory at Panipat (1526) with artillery, the Safavid use of firearms against Uzbeks, all reflect a common military revolution. This shared technology explains why historians sometimes group them as "gunpowder empires."',
          'All five empires grappled with **the loyalty problem**: how do you build an administration loyal to the ruler rather than to regional elites or hereditary nobles? The Ottoman devshirme recruited boys from Christian families and trained them as Muslim soldier-administrators. The Mughal mansabdar ranked officers by grade regardless of ethnic background. The Qing Banner system organized forces around Manchu ethnic identity and personal loyalty. The Russian Table of Ranks tied service nobility to state promotion rather than birth.',
          '**Religion legitimized all five empires**, though in different ways. The Ottoman Sultan claimed the Caliphate, leader of all Sunni Muslims. The Safavid Shah claimed descent from a Shia imam. Akbar\'s Mughal court embodied a universal religious authority. The Qing emperor performed Confucian rituals and patronized Tibetan Buddhism. Russia\'s tsar ruled as protector of Orthodox Christianity. The specific religion differed; the function of religion as legitimation was universal.'
        ],
        image: {
          title: 'Ottoman expansion, 1359-1839',
          caption: 'Ottoman growth over five centuries. Compare its pace and direction with the Mughal and Safavid cases.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rise_and_Fall_of_the_Ottoman_Empire_1300-1923.gif'
        }
      },
      {
        title: 'Meaningful Differences — What Set Each Empire Apart',
        bullets: [
          '**Religious policy** was the sharpest line of difference. The Safavids forcibly converted their predominantly Sunni population to Shia Islam, creating permanent conflict with the Sunni Ottomans. The Mughals governed a Hindu-majority subcontinent: Akbar\'s tolerance (including the Din-i-Ilahi) reflected the reality that you cannot oppress 80% of your population. Aurangzeb\'s later reversal, imposing jizya on Hindus, produced exactly the revolts Akbar\'s tolerance avoided. The Ottoman millet system offered a middle path: recognized religious communities governed themselves internally while remaining loyal to the empire.',
          '**The composition of conquered populations** shaped administrative strategy more than ideology. The Qing Manchu rulers governed a Han Chinese majority that outnumbered them perhaps 50 to 1. The solution: maintain Manchu ethnic identity through the Banner system while adopting Confucian bureaucratic traditions the Han recognized as legitimate. Russian expansion across Siberia encountered sparsely populated indigenous peoples, producing a colonial extraction model (furs, tribute) very different from the systems the Mughals or Ottomans developed for governing dense urban populations.',
          '**Why differences matter for AP writing**: Identifying a difference is not enough. You must explain what it reveals. The difference between Ottoman and Mughal religious policy reveals that coercion is only viable when the minority is small. The difference between Qing and Mughal administrative strategy reveals that the ethnic ratio between rulers and ruled shaped governance structures. These explanations transform a list of differences into a historical argument.'
        ],
        image: {
          title: 'The Mughal Empire, c. 1700',
          caption: 'A land-based empire built on tax revenue from agriculture, the shared foundation of every empire in this unit.',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Empire_%281700%29.png',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mughal_Empire_%281700%29.png'
        }
      }
    ]
  },

  map: {
    title: 'Map: Major Land-Based Empires, c. 1700',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/1700_CE_world_map.PNG',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1700_CE_world_map.PNG',
    caption: 'A world map showing the major land-based empires of Eurasia and their approximate territorial extents c. 1700, Ottoman, Safavid, Mughal, Qing, and Russian, each built through a combination of gunpowder military power, administrative innovation, and religious legitimation.',
    intro: 'This topic asks you to compare five empires that existed simultaneously across Eurasia. A world map of c. 1700 reveals something striking: these empires together covered most of the landmass of Afro-Eurasia. Each was geographically vast, multi-ethnic, and religiously diverse. Looking at them side by side asks the question that drives Topic 3.4: given such different geographic, religious, and ethnic starting points, why did these empires develop so many similar strategies, and what explains their important differences?',
    prompt: 'Using the world map, identify the approximate location of each of the five major empires. What geographic features, mountains, deserts, rivers, coastlines, shaped the limits of each empire\'s expansion? How might those geographic realities have influenced their administrative challenges?',
    notes: [
      'The **Ottoman Empire** stretched from southeastern Europe through Anatolia, the Levant, North Africa, and Arabia, a Mediterranean and Middle Eastern empire controlling key trade routes between Europe and Asia.',
      'The **Safavid Empire** occupied the Persian plateau (modern Iran and Iraq), positioning it as a buffer state between the Sunni Ottoman Empire to the west and the Mughal Empire to the east, making the Sunni-Shia divide a geopolitical fault line.',
      'The **Mughal Empire** controlled most of the Indian subcontinent, governing the densest and most religiously diverse population of any of the five empires, a predominantly Hindu population under a Muslim ruling dynasty.',
      'The **Qing Dynasty** governed China proper plus Mongolia, Tibet, and Xinjiang by c. 1700, the largest territorial empire of the period, with the Manchu ruling minority administering a Han Chinese majority through a hybrid system.',
      'The **Russian Empire** expanded rapidly eastward across Siberia and southward into Central Asia, a colonial expansion model fundamentally different from the urban administrative systems of the other four empires.'
    ],
    key: [
      { label: 'Ottoman Empire', detail: 'Southeastern Europe, Anatolia, Levant, North Africa, Arabia. Sunni Islam, devshirme, millet system.' },
      { label: 'Safavid Empire', detail: 'Persian plateau (Iran/Iraq). Shia Islam imposed, Persian bureaucracy, permanent Sunni-Shia conflict with Ottomans.' },
      { label: 'Mughal Empire', detail: 'Indian subcontinent. Muslim ruling dynasty over Hindu majority, mansabdar system, Akbar\'s tolerance policy.' },
      { label: 'Qing Dynasty', detail: 'China, Mongolia, Tibet, Xinjiang. Manchu ruling minority, Banner system, Confucian civil service exam retained.' },
      { label: 'Russian Empire', detail: 'Russia, Siberia, Central Asia. Orthodox Christianity, serfdom, colonial extraction model in Siberia.' }
    ]
  },

  deepReading: {
    title: 'One Problem, Five Answers',
    desc: 'A textbook-depth companion that puts the five empires under one question set, reduces their differences to three variables you can check on any pair, and shows how to write the eighteenth century without reading it backward. No new content, one new skill. Optional.',
    url: 'deep-reading-topic-3-4-comparison.html'
  },

  first10: {
    title: 'First & 10: Same Jobs, Different Tools',
    embedUrl: 'first-and-10-topic-3-4-comparison-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, then return to the 3.4 lesson path.'
  },

  beSurreal: {
    title: 'BeSurreal: You Are the Comparison Referee',
    desc: 'Two students make comparisons using true historical facts. Your job is to decide which comparison actually keeps the category constant and answers how imperial influence increased.',
    intro: 'Comparison is not two accurate facts placed next to each other. Student A compares Ottoman devshirme with Mughal mansabdars because both extend a ruler\'s authority through imperial servants. Student B compares Ottoman cannon with a Mughal mausoleum because both are important. Both students know real history, but only one has built a valid fixed-category comparison.',
    detail: 'Your referee card has four questions: Are both examples doing the same job? Is the evidence specific? Does the explanation say why the methods were similar or different? Does it connect both methods to increased influence? A comparison fails if any one of those pieces is missing.',
    prompt: 'Rule on the two comparisons. Explain why Student A or Student B has the stronger comparison, then repair the weaker one by replacing one piece of evidence so both examples answer the same imperial job. Finish by explaining how the repaired comparison answers increased influence.'
  },

  evidenceLab: {
    title: 'Evidence Lab: Comparing Administrative Systems Across Empires',
    intro: 'AP comparison requires evidence from at least two cases. Each item below represents a different empire and a different dimension of imperial administration, military recruitment, religious legitimation, or administrative organization. Use them to build both similarity and difference arguments.',
    prompt: 'Choose two items from different empires. Explain one similarity and one difference they reveal about how land-based empires administered their territories. Then state a broader historical argument that your comparison supports.',
    items: [
      {
        title: 'The Devshirme System vs. the Mansabdar System',
        detail: 'The Ottoman devshirme recruited boys from Christian subject families every few years, converted them to Islam, educated them in Ottoman palace schools, and assigned them as military officers (Janissaries) or palace administrators. These men had no family connections to Ottoman nobility, making them personally loyal to the Sultan. The Mughal mansabdar system ranked military-administrative officers by grade (mansab), assigning them salary and military responsibilities regardless of ethnic or religious background, Hindu Rajput commanders served alongside Afghan and Persian officers. Both systems solved the same problem: building a loyal bureaucracy without empowering hereditary regional elites who might challenge imperial authority. The key difference is that devshirme relied on conversion and removal from family ties, while the mansabdar used rank and salary as the mechanism of loyalty.'
      },
      {
        title: 'Akbar\'s Din-i-Ilahi vs. the Ottoman Caliphate Claim',
        detail: 'The Mughal Emperor Akbar (r. 1556–1605) governed a subcontinent where roughly 80% of the population was Hindu. His religious policy reflected this reality: he abolished the jizya tax on non-Muslims, married Hindu Rajput princesses, held interfaith debates at his Ibadat Khana (House of Worship), and developed the Din-i-Ilahi, a syncretic court philosophy drawing from Islam, Hinduism, Zoroastrianism, and Christianity. The Ottoman Sultan Suleiman I, by contrast, claimed the title of Caliph, successor to the Prophet Muhammad and leader of all Sunni Muslims worldwide. This claim directed political legitimacy toward Muslims both inside and outside Ottoman territory. The contrast reveals how the religious composition of subject populations shaped legitimation strategy: Akbar needed to appeal across religious lines; the Ottoman Sultan drew authority from championing a single faith.'
      },
      {
        title: 'The Qing Banner System vs. the Ottoman Janissaries',
        detail: 'The Qing Dynasty was founded by Manchu people from northeast China who conquered the Han Chinese Ming Dynasty in 1644. The Manchu rulers organized their military around the Eight Banners, hereditary military units organized by ethnicity (Manchu, Mongol, and Han Chinese bannermen). Bannermen were a privileged military class with exclusive access to certain administrative positions, maintaining Manchu ethnic identity as a governing tool. The Ottoman Janissaries, by contrast, were deliberately deracinated, stripped of ethnic and family identity through the devshirme process, to create soldiers loyal only to the Sultan. Both systems solved the minority-ruler problem, but differently: the Qing used ethnic exclusivity to preserve Manchu power, while the Ottomans used cultural erasure to create a personal loyalty corps. The difference reflects the Qing\'s larger governing challenge, maintaining Manchu identity while administering a Han majority fifty times larger.'
      },
      {
        title: 'Russian Serfdom vs. Mughal Revenue Administration',
        detail: 'The Russian Empire expanded rapidly across Siberia in the 16th and 17th centuries, extracting furs (yasak tribute) from indigenous populations through a colonial garrison system. Within Russia proper, the Romanov tsars tightened control over the peasant population through serfdom: by the mid-17th century, serfs were legally bound to the land and to their noble lords, providing labor revenue that sustained the noble class and, through them, the tsar\'s authority. The Mughal revenue system, by contrast, assessed agricultural taxes through mansabdar officers who received temporary assignments to revenue districts, preventing the development of a hereditary landed nobility that could challenge imperial authority. The contrast reveals how labor control differed between empires with settled aristocracies (Russia) and those that deliberately avoided hereditary noble classes (Mughal).'
      }
    ]
  },

  primarySource: {
    title: 'Primary Source: Two Visitors Compare Ottoman and Mughal Rule',
    intro: 'These two European visitors wrote about powerful land-based empires in the 1500s. Busbecq, a Habsburg ambassador, focused on how the Ottoman sultan selected officials. Monserrate, a Jesuit missionary at Akbar\'s court, recorded Akbar explaining why he wanted scholars of different religions to debate before him. Read the sources for the different methods rulers used to strengthen authority.',
    attribution: 'Ogier Ghiselin de Busbecq, Turkish Letters, written in the 1550s, English translation by C. T. Forster and F. H. B. Daniell in The Life and Letters of Ogier Ghiselin de Busbecq (London, 1881), vol. 1; Antonio Monserrate, Commentary, written after his mission to Akbar\'s court, translated from Latin by J. S. Hoyland and annotated by S. N. Banerjee (Oxford University Press, 1922), pp. 182–183.',
    text: '<strong>Busbecq on Ottoman appointments:</strong> In making his appointments the Sultan pays no regard to any pretensions on the score of wealth or rank, nor does he take into consideration recommendations or popularity; he considers each case on its own merits, and examines carefully into the character, ability, and disposition of the man whose promotion is in question. It is by merit that men rise in the service, a system which ensures that posts should only be assigned to the competent.<br><br><strong>Monserrate records Akbar explaining his religious discussions:</strong> I perceive that there are varying customs and beliefs of varying religious paths. For the teachings of the Hindus, the Musalmans, the Jazdini, the Jews and the Christians are all different. But the followers of each religion regard the institutions of their own religion as better than those of any other. Not only so, but they strive to convert the rest to their own way of belief. If these refuse to be converted, they not only despise them, but also regard them for this very reason as their enemies. And this causes me to feel many serious doubts and scruples. Wherefore I desire that on appointed days the books of all the religious laws be brought forward, and that the doctors meet together and hold discussions, so that I may hear them, and that each one may determine which is the truest and mightiest religion.',
    sourceNote: 'The Busbecq passage is a continuous excerpt from the 1881 public-domain English translation. The Monserrate passage is a continuous excerpt from the 1922 public-domain Hoyland translation; its historical wording, including "Musalmans" and "Jazdini," is retained. Both writers were European visitors with their own purposes and assumptions. Busbecq sometimes praised Ottoman practices to criticize European aristocratic privilege, while Monserrate hoped Akbar might be persuaded toward Christianity. Their observations are valuable evidence of court practice and political presentation, not neutral descriptions of entire empires.',
    sourceLinks: [
      { label: 'Fordham Sourcebook: Busbecq, The Turkish Letters', url: 'https://sourcebooks.web.fordham.edu/mod/1555busbecq.asp' },
      { label: 'Internet Archive: Monserrate, Commentary (1922 translation)', url: 'https://archive.org/details/commentaryoffath00monsuoft' }
    ],
    questions: [
      'What method of strengthening imperial authority does each source emphasize? Use one specific detail from Busbecq and one from Monserrate.',
      'Compare the two methods. In what way are both rulers trying to reduce challenges to their authority, and in what way are their strategies different?',
      'How do the writers\' positions as foreign visitors affect how you should use their accounts as evidence? Identify one useful insight and one limitation from either source.'
    ]
  }

};
