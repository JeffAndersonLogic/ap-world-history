(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.6.I.A',
      theme: 'Social Structures / Ideology',
      text: "Industrialization created new social classes whose conflicts shaped 19th-century political life. The bourgeoisie — industrial capitalists and commercial middle class — accumulated wealth and political power. The proletariat — industrial working class — labored for wages in factories under difficult conditions. The tension between these classes generated competing ideologies. Liberalism argued for individual rights, free markets, and limited government. Conservatism defended tradition, hierarchy, and social stability. Utopian socialists proposed cooperative communities. Karl Marx argued in the Communist Manifesto (1848) and Das Kapital (1867) that class conflict was the engine of history and that the proletariat would eventually overthrow capitalism.",
      illustrativeExamples: ['Bourgeoisie and proletariat as new industrial classes', 'Communist Manifesto (Marx and Engels, 1848)', 'Das Kapital (Marx, 1867)', 'Utopian socialists — Robert Owen (New Lanark)', 'Classical liberalism — Adam Smith, John Stuart Mill', 'British Chartist movement (1838–1857)', "First International (1864)"]
    },
    {
      code: 'KC-5.6.I.B',
      theme: 'Governance / Social Change',
      text: "Industrialization generated political pressure for reform. In Britain, the Reform Acts of 1832, 1867, and 1884 progressively extended voting rights. Factory Acts regulated child labor and working hours. In Germany, Bismarck introduced Europe's first social insurance system — health insurance (1883) and old-age pensions (1889) — to undercut socialist political appeal. Women entered industrial labor in large numbers but were generally excluded from skilled trades and paid less than male workers. The suffrage movement emerged from the same Enlightenment natural-rights tradition that had driven the American and French revolutions.",
      illustrativeExamples: ['British Reform Acts (1832, 1867, 1884)', 'British Factory Acts (1833, 1844, 1847)', "Bismarck's social insurance laws (1871, 1883, 1889)", 'Chartism (1838–1857)', 'Seneca Falls Convention (1848)', "Mary Wollstonecraft's Vindication of the Rights of Woman (1792)", 'British suffragette movement (1890s–1918)']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Class Question',
    embedUrl: 'first-and-10-topic-5-6-industrialization-government-and-society-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Industrial cities as centers of class conflict', detail: 'The most intense class conflict of the 19th century occurred in industrial cities where bourgeoisie and proletariat lived in close proximity under conditions of dramatic inequality. Manchester — the archetype — had factory owners living in suburbs with parks and clean air while workers crowded into back-to-back housing without sanitation. Frederick Engels documented Manchester\'s geography in The Condition of the Working Class in England (1845): the wealthy used certain streets that concealed working-class districts from view; the poor were literally invisible to the rich in the same city. This geographic segregation of classes reinforced class consciousness on both sides: workers understood themselves as a class with shared interests; factory owners understood themselves as the productive elite whose enterprise created the wealth that trickled down. The same city, two entirely different realities.' },
      { label: 'The geography of political reform', detail: 'Parliamentary reform in Britain responded to geographic concentration of industrial voters. The Reform Act of 1832 abolished "rotten boroughs" — constituencies with almost no voters that returned MPs to Parliament — and created new parliamentary seats for industrial cities like Manchester, Birmingham, Sheffield, and Leeds, which had no representation despite populations of hundreds of thousands. The political geography of pre-reform Britain was designed for a rural, agricultural society; industrialization created urban populations without political representation. Reform Acts of 1832, 1867, and 1884 progressively reorganized British political geography to reflect industrial reality. Germany\'s Bismarckian social insurance similarly responded to the geographic concentration of industrial workers in Ruhr valley cities — the strongest Social Democratic Party constituencies.' },
      { label: 'Women\'s suffrage movement: geography of early victories', detail: 'Women\'s suffrage was achieved first in the most recently settled, least tradition-bound societies. New Zealand granted women full voting rights in 1893 — the first country in the world. Australia followed in 1902. Wyoming Territory (US) granted women\'s suffrage in 1869; several western US states followed before the 19th Amendment (1920) extended it nationally. The geographic pattern is significant: suffrage came first in settler-colonial societies where democratic ideology was strongest and traditional hierarchies weakest, and last in old European states where tradition and established church authority reinforced male privilege. Britain — the center of industrial capitalism and the birthplace of Mary Wollstonecraft\'s feminist theory — did not grant full equal women\'s suffrage until 1928.' },
      { label: 'The spread of socialist movements', detail: 'By 1900, socialist and social democratic parties organized around Marxist or quasi-Marxist platforms had become major political forces across industrial Europe. The German Social Democratic Party — the largest socialist party in the world — won 20% of the popular vote in 1890 despite Bismarck\'s Anti-Socialist Laws (1878–1890) banning socialist organization. French socialists, British Fabian socialists, and Russian Marxists were building movements in their respective contexts. The First International (International Workingmen\'s Association, 1864, Marx\'s organization) and Second International (1889) created transnational socialist networks. The spread of socialist movements geographically mirrors the spread of industrialization: where factories went, class conflict followed; where class conflict emerged, socialist organization developed.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: "Testify before a Parliamentary committee investigating factory conditions, debate Karl Marx about whether reform or revolution is the path to workers' justice, or advise Bismarck on which social insurance program to introduce first — and which working-class grievances are most dangerous to ignore."
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Liberalism vs. Socialism: Comparing Ideological Responses to Industrialization',
    intro: 'Comparison for Topic 5.6 requires identifying both what ideologies share and where they fundamentally differ — and then synthesizing what the comparison reveals about the nature of the debate. The most common AP error is describing each ideology separately without identifying the specific point of comparison. A strong comparison argument uses the structure: "Both X and Y agreed that [shared premise], but X differed from Y in [specific difference], which reveals [broader pattern about the political consequences of industrialization]."',
    steps: [
      { label: 'Identify a meaningful similarity across ideologies', text: 'Similarity: Both liberalism and socialism — the two most influential 19th-century ideologies — agreed that industrialization had created serious social problems and that the old aristocratic, pre-industrial social order was neither justified nor sustainable. Both drew on Enlightenment premises about reason, progress, and human capacity for self-improvement. Both were, in their own way, optimistic about the future: liberals believed free markets would eventually raise all boats; socialists believed the proletariat would eventually overthrow capitalism and build a better society. Both rejected the conservative argument that traditional hierarchies should be preserved because they were traditional. This shared Enlightenment progressivism is the most important similarity for the AP exam — liberalism and socialism are both children of the Enlightenment, arguing about which Enlightenment promises (individual liberty? equality? progress?) should be prioritized.' },
      { label: 'Identify a meaningful difference (cause and solution)', text: 'Difference: Liberalism and Marxist socialism disagreed fundamentally on the cause of industrial poverty and its solution. Liberal diagnosis: poverty is the result of individual failure, market inefficiency, or insufficient economic development — solution is education, free markets, and limited government reform. Marxist diagnosis: poverty is the structural result of capitalist class relations — workers are necessarily exploited because profit requires paying workers less than they produce (surplus value) — solution is not reform but abolition of private property and proletarian revolution. This is not a disagreement about tactics; it is a disagreement about the nature of reality. Liberals believed the industrial system could be reformed from within; Marxists believed the system was the problem and must be replaced entirely. The Reform Acts and Factory Acts represent the liberal approach; the Communist Manifesto represents the Marxist alternative.' },
      { label: 'Write the synthesis statement', text: 'A strong comparison ends with synthesis: what does comparing liberalism and socialism reveal about the political consequences of industrialization? Suggested synthesis: The competing ideologies of 19th-century industrialization reveal that industrial capitalism created real social problems that all observers could see, but that the diagnosis of those problems — and therefore the proposed solution — depended fundamentally on theoretical premises about the nature of markets, the role of government, and the structure of class relations. The persistence of both liberal and socialist traditions into the 20th century suggests that neither ideology fully solved the political challenges of industrial capitalism — and that the tension between individual liberty and social equality that drove 19th-century ideological conflict remained unresolved.' }
    ],
    prompt: 'In 3–4 sentences, write a comparison argument about two ideological responses to industrialization. Choose two from: liberalism, conservatism, utopian socialism, Marxism. Identify one meaningful similarity and one meaningful difference in how they diagnosed the problems of industrial society and proposed solutions. End with a synthesis statement: what does comparing these two ideologies reveal about the political consequences of industrialization?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: New Social Classes and Competing Ideologies',
      subtitle: 'Checks Learning Target 1 — new classes, ideological conflict, and Marxist analysis.',
      cardDesc: 'Bourgeoisie, proletariat, liberalism, conservatism, utopian socialism, and Marxism.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how industrialization created the bourgeoisie and proletariat as new social classes — what specifically defined each class, and why did their relationship tend toward conflict? Then compare liberalism and Marxism on the question: what is the cause of industrial poverty, and what is the solution? Be specific about the Marxist argument — explain the theory of surplus value and the claim that reform cannot solve the problem because the problem is structural. End with a synthesis: why did industrialization generate such intense ideological conflict, when earlier economic systems had not?',
      responseType: 'Checkpoint 1',
      terms: ['bourgeoisie', 'proletariat', 'surplus value', 'means of production', 'class conflict', 'Communist Manifesto', 'Das Kapital', 'liberalism', 'utopian socialism', 'Chartism'],
      focus: ['Define bourgeoisie and proletariat and explain why their relationship tended toward conflict.', 'Compare liberalism and Marxism on cause of poverty and proposed solution — be specific about Marxist theory.', 'Synthesize: why did industrialization produce such intense ideological conflict?']
    },
    {
      title: 'Checkpoint 2: Government Response and Women',
      subtitle: "Checks Learning Target 2 — government reform, Bismarck's social insurance, and the suffrage movement.",
      cardDesc: "British Reform Acts, Factory Acts, Bismarck's social insurance, and women's experience of industrialization.",
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: "Compare the British and German approaches to responding to industrial social problems. Britain enacted Reform Acts extending voting rights and Factory Acts regulating labor; Germany under Bismarck enacted social insurance programs providing health care and pensions. What was each government primarily trying to accomplish — and what theory of political change does each approach reflect? Then address the women's question: why did industrialization generate a women's suffrage movement, when industrialization had also drawn women into factory labor? What was the contradiction that made suffrage activism logical in an industrial context?",
      responseType: 'Checkpoint 2',
      terms: ['Reform Acts', 'Factory Acts', 'Bismarck social insurance', 'health insurance', 'old-age pension', "women's suffrage", 'Seneca Falls', 'Wollstonecraft', 'natural rights', 'domestic femininity'],
      focus: ['Compare British parliamentary reform and German social insurance — different approaches to the same industrial social problems.', 'Explain the motivation behind each approach: moral concern, fear of revolution, or political calculation?', "Explain why industrialization generated a women's suffrage movement — what contradiction made it logical?"]
    }
  ];
})();
