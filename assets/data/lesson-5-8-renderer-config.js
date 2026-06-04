(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.8.I.A',
      theme: 'Social Movements / Labor',
      text: "Workers organized collectively to improve wages and conditions, building trade unions, organizing strikes, and eventually forming labor political parties. In Britain, the Combination Acts were repealed in 1824; trade unions grew through the century, contributing to the formation of the Labour Party (1900). In the United States, the Great Railroad Strike (1877), Haymarket affair (1886), and Pullman Strike (1894) were broken by military force, but also demonstrated workers' collective power. The American Federation of Labor (1886) organized skilled workers around specific economic demands.",
      illustrativeExamples: ['Combination Acts repeal (Britain 1824)', 'Great Railroad Strike, United States (1877)', 'Haymarket affair, Chicago (1886)', 'Pullman Strike (1894) and Eugene Debs', 'American Federation of Labor (1886)', 'British Labour Party (1900)', "International Workers' Day / May Day (1886–)"]
    },
    {
      code: 'KC-5.8.I.B',
      theme: 'Reform Movements / Social Change',
      text: "Industrialization generated a broad reform impulse. Abolitionism challenged slavery's structural role in the industrial cotton economy: British abolition (1833) and American abolition (Thirteenth Amendment, 1865) ended legal slavery in the Western world's major industrial economies. Public education reform produced mandatory schooling laws (Britain's Forster Act 1870). Public health reform — driven by Edwin Chadwick's 1842 report and germ theory — produced public sewer systems that dramatically reduced mortality in industrial cities. The temperance movement (Women's Christian Temperance Union, 1874) became one of the largest mass movements of the industrial era.",
      illustrativeExamples: ['British abolition of slavery (1833, effective 1838)', 'Baptist War / Sam Sharpe Rebellion (1831–32)', 'Frederick Douglass and American abolitionism', 'American Civil War and Thirteenth Amendment (1865)', 'Cotton Famine (1861–1865)', "Forster Act (Britain 1870)", "Edwin Chadwick's sanitary report (1842)", "Bazalgette's London sewer system", 'Women\'s Christian Temperance Union (WCTU, 1874)']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Rising',
    embedUrl: 'first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'The geography of labor organizing', detail: 'Labor organizing in the 19th century was concentrated in specific industrial regions: Lancashire and Yorkshire textile districts, the South Wales coal fields, and the Tyne and Clyde shipbuilding centers in Britain; the Pittsburgh steel district, New England textile mills, and Chicago railroad yards in the United States. These concentrations were not accidental — industrial geography created the conditions for collective action. Workers in the same industry, living in the same company town or urban neighborhood, sharing the same grievances and the same employers, could organize more easily than dispersed agricultural workers. The factory system thus simultaneously created the working class whose exploitation drove profit and the concentration of workers that made collective action possible. Karl Marx understood this: the factory was not just a site of production, it was a school of solidarity.' },
      { label: 'The geography of abolition', detail: 'Abolitionist movements were strongest in the industrial regions of Britain and the American Northeast — paradoxically, the regions most economically connected to slavery through the cotton trade. Lancashire textile workers whose mills depended on slave-grown American cotton were among the most vocal British abolitionists; New England merchants who traded with Southern planters produced abolitionist newspapers and financed anti-slavery campaigns. This geographic pattern reveals an important tension: industrial capitalism both depended on slave-produced raw materials and generated the ideological and organizational resources for abolition. The humanitarian and evangelical Protestant religious culture of industrial Britain and the American Northeast produced both the most committed abolitionists and the most sophisticated industrial economy. The connection between industrial capitalism and abolitionism was not simple cause-and-effect — it was a tension within the same economic and cultural world.' },
      { label: 'The Cotton Famine zone and global cotton restructuring', detail: 'The Union naval blockade of Confederate ports during the American Civil War (1861–1865) cut Lancashire\'s cotton supply, producing the Cotton Famine. British mills turned to alternative sources: Egyptian cotton (Nile valley fields converted to cotton production on a large scale), Indian cotton (Bombay presidency cotton exports expanded dramatically), and eventually Brazilian and West African sources. These substitutions had lasting consequences: Egypt\'s agricultural economy was restructured around cotton export, making it dependent on the global cotton market for decades; Indian cotton fields expanded at the expense of food crops. The geographic map of global cotton production in 1870 looked radically different from 1860 — the Civil War had permanently diversified cotton sourcing away from the American South, reducing the Confederate states\' leverage over British policy.' },
      { label: 'Reform movements: geography of early public health victories', detail: 'Public health reform spread unevenly through industrial cities. London\'s Great Stink (1858) and subsequent Bazalgette sewer system represented the most dramatic case: a single catastrophic event producing political will for large-scale infrastructure investment. Other British industrial cities — Manchester, Birmingham, Liverpool — followed with their own sewer systems and clean water supplies through the 1860s–1880s. American cities lagged: New York began building a comprehensive sewer system in the 1860s; Chicago\'s sewer system, dramatically reversing the Chicago River\'s flow direction (1900), became an engineering marvel. The geographic spread of public sewer systems closely tracks the spread of germ theory acceptance and political capacity to finance infrastructure — larger, wealthier cities with stronger municipal governments built sewers first; smaller, poorer cities with weaker governments waited, and their populations continued to die from waterborne diseases in the interim.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: "Testify before Parliament on behalf of the Lancashire workers who supported the Union cause during the Cotton Famine at personal cost; defend or prosecute the Haymarket defendants in 1886; or advise the American Federation of Labor on whether 'pure and simple unionism' or political socialism is the right path for the American working class."
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing Reactions to Industrial Capitalism: Labor Organizing vs. Reform Movements',
    intro: 'Comparison for Topic 5.8 requires identifying both what labor organizing and reform movements share and where they fundamentally differed — and synthesizing what the comparison reveals about responses to industrial capitalism. The most common AP error is treating "reactions to industrialization" as a single category rather than identifying the specific differences in strategy, target, and ideology between labor organizing and broader reform movements.',
    steps: [
      { label: 'Identify a meaningful similarity', text: 'Similarity: Both trade union organizing and broader reform movements (abolitionism, public education, public health, temperance) responded to specific social dislocations that industrial capitalism created or intensified. Both used collective organization — meetings, petitions, political pressure, sometimes direct action — to change conditions that individuals could not change alone. Both drew on Enlightenment language about rights, dignity, and human welfare to make their claims. And both faced resistance from interests that benefited from the status quo: factory owners opposed unions; slaveholders opposed abolition; urban property owners sometimes opposed the costs of public health infrastructure; alcohol producers opposed temperance. The shared challenge was mobilizing collective political power against organized resistance from economically powerful interests.' },
      { label: 'Identify a meaningful difference (scope and strategy)', text: 'Difference: Labor organizing and reform movements differed fundamentally in what they targeted and what they demanded. Labor organizing targeted the specific employment relationship: wages, hours, working conditions, and the right to collective bargaining. It challenged industrial capitalism directly, at the point of production, by organizing those with the most immediate stake in changing conditions — workers themselves. Reform movements, by contrast, targeted the social environment around industrial capitalism (education, sanitation, alcohol), often with middle-class leaders advocating on behalf of working-class populations rather than those populations organizing themselves. Temperance, for example, was largely a middle-class Protestant reform aimed at working-class behavior, not at the wages that made alcohol a tempting escape from industrial misery. The critical difference: labor organizing was adversarial to industrial capitalism at its core; most reform movements sought to manage and humanize capitalism\'s social consequences without challenging its fundamental structure.' },
      { label: 'Write the synthesis statement', text: 'Synthesis: Comparing labor organizing and reform movements reveals that 19th-century industrial capitalism generated two distinct types of response: challenges to the structure of industrial production (labor organizing, and, at its limit, socialist politics) and efforts to manage or mitigate the social consequences of that structure (education reform, public health, temperance). Both were genuine reactions to real industrial-era suffering. But they had different political implications: labor organizing, if successful at scale, would have restructured the relationship between capital and labor; most reform movements stabilized industrial capitalism by addressing its most destabilizing social effects without questioning the underlying economic system. The history of 20th-century labor and social policy is largely a story of which type of reaction proved more durable — and in most Western democracies, the answer was: welfare-state reform rather than socialist structural transformation.' }
    ],
    prompt: 'In 3–4 sentences, compare trade union organizing and one other reform movement from the industrial era (options: abolitionism, public education reform, public health reform, temperance). Identify one meaningful similarity and one meaningful difference in how each movement responded to industrial capitalism. End with a synthesis: what does comparing these two responses reveal about the relationship between industrial capitalism and the reform movements that responded to it?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Labor Movement — Organizing, Strikes, and Suppression',
      subtitle: 'Checks Learning Target 1 — trade unions, major strikes, and labor movement development.',
      cardDesc: 'Legal framework, Great Railroad Strike 1877, Haymarket 1886, Pullman Strike 1894, AFL.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain why trade unions were illegal under early industrial-era law — what specific legal doctrine made collective bargaining a criminal act, and what assumptions about the employment relationship did this doctrine reflect? Then choose two of the three major labor events (Great Railroad Strike 1877, Haymarket affair 1886, Pullman Strike 1894) and explain: what did each event demonstrate about both workers\' collective power and the government\'s response? End with a synthesis: what does the pattern of labor organizing and government suppression in the 19th century reveal about whose interests the industrial-era state primarily served?',
      responseType: 'Checkpoint 1',
      terms: ['Combination Acts', 'criminal conspiracy doctrine', 'trade union', 'collective bargaining', 'Great Railroad Strike', 'Haymarket affair', 'Pullman Strike', 'Eugene Debs', 'American Federation of Labor', 'May Day'],
      focus: ['Explain the legal framework — what made unions illegal, and what assumptions did this reflect?', 'Explain two major strikes and what they demonstrated about power and government response.', 'Synthesize: whose interests did the industrial-era state serve?']
    },
    {
      title: 'Checkpoint 2: Abolition and Reform Movements',
      subtitle: 'Checks Learning Target 2 — abolitionism, education, public health, and temperance.',
      cardDesc: 'British abolition 1833, Frederick Douglass, Cotton Famine, Forster Act, Chadwick, Bazalgette, WCTU.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Explain the structural connection between industrial capitalism and American slavery — how were they economically linked through the cotton economy, and what did this connection mean for the abolitionist movement\'s political challenge? Then describe how two non-labor reform movements (choose two: public education reform, public health reform, temperance) addressed specific social dislocations created by industrialization. For each, explain: what specific industrial-era problem did this reform address, and what argument did reformers make for it? End with a synthesis: did these reform movements challenge industrial capitalism or stabilize it?',
      responseType: 'Checkpoint 2',
      terms: ['abolitionism', 'Baptist War', 'Frederick Douglass', 'Thirteenth Amendment', 'Cotton Famine', 'Forster Act', 'Edwin Chadwick', 'germ theory', 'Bazalgette sewer', 'WCTU'],
      focus: ['Explain the structural connection between industrial capitalism and slavery through the cotton economy.', 'Describe two non-labor reform movements and their specific arguments and targets.', 'Synthesize: did reform movements challenge or stabilize industrial capitalism?']
    }
  ];
})();
