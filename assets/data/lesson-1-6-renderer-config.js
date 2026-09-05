(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Hereford-Karte.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Chartres-Cathedral-0006.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Les%20Tres%20Riches%20Heures%20du%20duc%20de%20Berry%20janvier.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/TabulaRogeriana.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Bayeux_Tapestry.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Plan_mediaeval_manor.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Cathedral_Notre-Dame_of_Rodez_09.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ceiling%2C_Notre_Dame%2C_Paris%2C_ZM.JPG',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Laon_cathedral_notre_dame_002.JPG'
  };
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.1.III.D.v",
      "theme": "Culture",
      "text": "Christianity, Judaism, Islam, and the core beliefs and practices of these religions continued to shape societies in Europe.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I.B.ii",
      "theme": "Governance",
      "text": "Europe was politically fragmented and characterized by decentralized monarchies, feudalism, and the manorial system.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.3.III.C",
      "theme": "Social",
      "text": "Europe was largely an agricultural society dependent on free and coerced labor, including serfdom.",
      "illustrativeExamples": []
    }
  ];

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'AP Skill Builder: Compare Europe with Song China',
    intro: 'Comparison works best when you compare the SAME category in two societies. Do not write one fact about Europe and an unrelated fact about Song China. Choose one row below, gather evidence from both sides, then explain what the similarity or difference reveals.',
    steps: [
      { label: '1. Choose one category', text: '<div style="overflow-x:auto;margin-top:.6rem"><table style="width:100%;border-collapse:collapse;font-size:.9rem"><thead><tr><th style="padding:.5rem;border:1px solid #999;text-align:left">Category</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Song China</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Medieval Europe</th></tr></thead><tbody><tr><td style="padding:.5rem;border:1px solid #999"><strong>Political organization</strong></td><td style="padding:.5rem;border:1px solid #999">Centralized imperial government</td><td style="padding:.5rem;border:1px solid #999">Decentralized monarchies and local nobles</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Administration</strong></td><td style="padding:.5rem;border:1px solid #999">Imperial bureaucracy and civil service exams</td><td style="padding:.5rem;border:1px solid #999">Feudal ties among kings, nobles, and vassals</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Legitimacy / belief</strong></td><td style="padding:.5rem;border:1px solid #999">Confucianism and scholar-official ideals</td><td style="padding:.5rem;border:1px solid #999">Christianity and Church authority</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Labor / economy</strong></td><td style="padding:.5rem;border:1px solid #999">Free peasant and artisan labor; commercialization</td><td style="padding:.5rem;border:1px solid #999">Manorialism and serfdom; growing towns and trade</td></tr></tbody></table></div>' },
      { label: '2. Gather evidence from BOTH societies', text: 'Use one specific fact for Song China and one for Europe from the same category. Balanced evidence keeps the comparison from becoming two separate mini-paragraphs.' },
      { label: '3. Decide the relationship', text: 'State a meaningful similarity OR difference. Avoid vague claims such as “they were different.” Name exactly what differed or stayed similar.' },
      { label: '4. Explain why it matters', text: 'Ask what historical conditions produced the pattern. For example, why did Song China support a centralized bureaucracy while Europe relied more heavily on local nobles and personal obligations?' },
      { label: 'Response frame', text: 'Both ___ and ___ ___. <strong>However</strong>, ___ while ___ <strong>because</strong> ___.' }
    ],
    prompt: 'Choose ONE category from the chart. In 3–4 sentences, compare Europe and Song China using specific evidence from both societies. Explain one meaningful similarity OR difference and why that pattern existed.'
  };

  lesson.evidenceLab = {
    title: 'Evidence Lab: Reconstructing Medieval European Society',
    task: 'Choose TWO cards from different categories: political relationships, Church authority, or labor/economic life. For each, record one detail you can actually see before making an inference. Some evidence predates c. 1200; when it does, use it as a continuity baseline rather than pretending it documents the entire period.',
    prompt: 'Using two evidence cards, make one claim about how medieval Europe remained politically fragmented while still developing shared religious and social institutions. Cite one observed detail from each card and explain what each detail allows you to infer.'
  };

  lesson.images = [
    {
      title: 'Bayeux Tapestry',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bayeux_Tapestry.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bayeux_Tapestry.jpg',
      caption: 'Political continuity evidence. The Bayeux Tapestry was made in the 11th century, before Topic 1.6, and depicts elite warfare, mounted nobles, and contests over rulership.',
      prompt: 'NOTICE one detail about warriors, leaders, or military service. What can you INFER about elite political relationships that continued into the period after c. 1200? What can this earlier source not prove about later medieval Europe by itself?'
    },
    {
      title: 'Plan of a Medieval Manor',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plan_mediaeval_manor.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Plan_mediaeval_manor.jpg',
      caption: 'Economic-organization evidence. A schematic plan of a medieval manor showing fields, village spaces, and land organized around a lordly estate.',
      prompt: 'NOTICE how land and settlement are arranged. What can you INFER about the relationship among agriculture, local lordship, and political decentralization? What does a schematic plan simplify?'
    },
    {
      title: 'March, Très Riches Heures',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg',
      caption: 'Labor evidence. A 15th-century calendar image commissioned for an elite manuscript depicts peasants performing seasonal agricultural work below a noble residence.',
      prompt: 'NOTICE the relationship between workers, land, and elite architecture. What can you INFER about the economic foundation of medieval society? How might the elite patron who commissioned the manuscript shape what is shown?'
    },
    {
      title: 'Chartres Cathedral',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chartres-Cathedral-0006.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chartres-Cathedral-0006.jpg',
      caption: 'Religious and urban evidence. Chartres Cathedral was largely rebuilt in the late 12th and early 13th centuries and became a major center of worship and pilgrimage.',
      prompt: 'NOTICE one feature of scale or design. What can you INFER about the resources and authority of the Church and urban communities? How could Christian institutions create shared culture across politically fragmented kingdoms?'
    }
  ];
})();
