(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.4.I.A',
      theme: 'Economic Systems',
      text: 'Industrialization spread from Britain to Western Europe (Belgium, France, Germany) and North America (United States) during the early-to-mid 19th century, then to Japan after the Meiji Restoration (1868). In each region, industrialization was shaped by local conditions and government policy. Germany and Japan used deliberate state-led industrialization strategies; the United States relied on private enterprise, abundant resources, and protectionist tariffs. By 1900, the United States had surpassed Britain in industrial output.',
      illustrativeExamples: ['Belgian industrialization (Liège and Charleroi coal basin, 1820s)', 'German railroad network (Prussian state investment, 1840s–60s)', 'US Lowell textile mills and transcontinental railroad (1869)', 'Meiji Restoration (1868)', 'Iwakura Mission (1871–1873)', 'Zaibatsu (Mitsui, Mitsubishi, Sumitomo)', 'Japan defeating Russia (1905)']
    },
    {
      code: 'KC-5.4.I.B',
      theme: 'Economic Systems / Colonialism',
      text: "Industrialization did NOT spread to most of Asia, Africa, and Latin America during the 19th century. Colonial relationships structured these regions as producers of raw materials and consumers of manufactured goods, preventing domestic industrial development. India's sophisticated textile industry was systematically deindustrialized by British colonial trade policy. Egypt's early industrialization was blocked by the 1838 Treaty of Balta Liman. Countries with political sovereignty could use protective tariffs and state investment to industrialize; colonized territories could not.",
      illustrativeExamples: ["India's textile deindustrialization", 'British destruction of Indian textile industry through tariff policy', "Muhammad Ali's industrialization in Egypt blocked by Britain's 1838 Treaty of Balta Liman", 'Latin America as raw material supplier (silver, copper, guano, rubber, coffee)', 'China forced open by Treaty of Nanking (1842)', 'Comparative advantage as imperial economic control']
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Beyond Britain',
    embedUrl: 'first-and-10-topic-5-4-industrialization-spreads-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Industrial regions by 1900', detail: 'By 1900, industrial production was concentrated in a narrow geographic band: Britain\'s Midlands and North (textiles, steel, coal); Belgium\'s Liège and Charleroi basins; Germany\'s Ruhr valley (steel, chemicals, coal — the most productive industrial region in the world by 1900); northeastern United States (Pennsylvania steel and coal, New England textiles); and Japan\'s emerging industrial centers (Osaka, Tokyo, Nagasaki). Outside this band, industrial production was minimal. The map reveals the strikingly narrow geographic distribution of 19th-century industrialization — and makes the geographic question unavoidable: why there, and not everywhere?' },
      { label: 'Japan as the lone non-Western industrializer', detail: 'Japan\'s position on the map is crucial: it is the ONLY non-Western country in the industrial band. This is not because Japan had unique geographic advantages that India, China, or Egypt lacked. Japan had fewer coal deposits than India, less sophisticated pre-existing textile manufacturing than China, and smaller capital reserves than the Ottoman Empire. What Japan had was political sovereignty — the ability to impose protective tariffs, direct state investment, and borrow Western technology on its own terms. The Meiji Restoration (1868) was not primarily a cultural or intellectual revolution; it was a political response to the threat of colonization, and it used state power to industrialize faster than any previous society.' },
      { label: 'Raw material zones and their colonial relationships', detail: 'The areas outside the industrial band — India, sub-Saharan Africa, Southeast Asia, most of Latin America — are not randomly distributed. They correspond almost perfectly with the zones of European colonial control or economic domination. India (British colony): raw cotton exporter, machine cloth importer. Egypt (informally dominated): cotton exporter after Muhammad Ali\'s factories were destroyed. West Africa: palm oil, groundnuts, and eventually rubber exporters. Latin America (formally independent but economically dependent): silver, copper, guano, rubber, coffee exporters. The geographic pattern of industrialization and non-industrialization mirrors the geographic pattern of colonial and semi-colonial relationships.' },
      { label: 'The sovereignty pattern: the key to the map', detail: 'The most important pattern on this map is the correlation between political sovereignty and industrialization. Germany (unified under Bismarck, 1871) used sovereign power to impose protective tariffs and direct railroad investment. The United States used the tariff of 1816 and subsequent protectionist legislation to shield domestic industry from British competition. Japan used the Meiji state\'s sovereign power to build factories, send missions abroad, and restructure its economy. India, Egypt, and colonized Latin American territories could not do any of these things — their tariff policy, their trade relationships, and their economic structure were determined by European powers in the interests of European industry. Sovereignty explains industrialization; its absence explains deindustrialization.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg'
  };

  lesson.beInTheRoom = {
    url: '',
    desc: "Advise the Meiji government on whether to build state-owned factories or create private zaibatsu, debate with a Lancashire manufacturer whether British tariff policy toward India is free trade or imperialism, or testify before the Meiji reform commission on which Western institutions Japan should borrow — and which it should refuse."
  };

  lesson.skillBuilder = {
    label: 'Comparison practice',
    title: 'Comparing Paths to Industrialization: Who Industrialized, Who Didn\'t, and Why',
    intro: 'Comparison for Topic 5.4 requires identifying both similarities and differences among the paths to industrialization — and synthesizing what the comparison reveals. The most common AP error is describing each country separately without identifying the specific point of comparison. A strong comparison argument uses the structure: "Both X and Y shared [similarity], but X differed from Y in [specific difference], which reveals [broader pattern]."',
    steps: [
      { label: 'Identify a meaningful similarity across cases', text: 'Similarity: All successful industrializers — Britain, Germany, the United States, Japan — had access to capital, a labor force, and some form of key resources (coal, iron, or the ability to import them). But more importantly, all successful industrializers had political sovereignty that allowed them to use protective tariffs and state investment to build domestic industry. This is the most important similarity: not the specific resources, but the political capacity to direct economic development. Countries that lacked sovereignty — India, Egypt, colonized Latin America — also had capital (India was one of the wealthiest regions in the world), labor, and resources. The absence that mattered was political, not natural.' },
      { label: 'Identify a meaningful difference (state-led vs. market-led)', text: 'Difference: Japan and Germany industrialized primarily through state direction — the Meiji government built factories and sold them to zaibatsu; Prussia built railroads and protected heavy industry with tariffs. Britain and the United States industrialized primarily through private enterprise, with the state playing a supporting role (patent law, property rights, tariffs in the US case). The difference produced different industrial structures: Germany and Japan built large industrial conglomerates (Krupp, Mitsui, Mitsubishi) tightly connected to state power; Britain and the US built more fragmented, competitive industrial sectors. Both succeeded — but by different mechanisms. The comparison reveals that there is no single path to industrialization; what matters is having some mechanism to mobilize capital and protect infant industries from established competitors.' },
      { label: 'Write the synthesis statement', text: 'A strong comparison ends with synthesis: what does the pattern reveal? The pattern of 19th-century industrialization reveals that economic development is not a natural or automatic process — it is a political one. Countries industrialized when and because their governments had the will and the capacity to direct economic change: through tariffs, investment, legal infrastructure, and deliberate technology adoption. Countries did not industrialize when foreign powers prevented those policy tools from being used — either through direct colonial control or through imposed trade treaties. The Meiji slogan "rich country, strong army" was not naive: industrial power and military power were inseparable in the 19th century, and the countries that recognized this early industrialized first.' }
    ],
    prompt: 'In 3–4 sentences, write a comparison argument about the spread of industrialization. Choose two regions from this set: Germany, Japan, India, Latin America. Identify one meaningful similarity and one meaningful difference in their industrialization experiences. Then write a synthesis statement: what does comparing these two cases reveal about the relationship between political sovereignty and economic development?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: The Spread of Industrialization — Europe, America, and Japan',
      subtitle: 'Checks Learning Target 1 — how and why industrialization spread to specific regions.',
      cardDesc: 'Belgium, Germany, the United States, and Japan as case studies in different paths to industrialization.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Choose two regions that successfully industrialized (from: Belgium, Germany, United States, Japan). For each, identify one specific factor that shaped its industrialization — and explain the mechanism: how exactly did that factor produce or accelerate industrial development? Then compare the two: in what way did Germany or Japan\'s state-led model differ from the British or American market-led model — and what did each approach sacrifice to achieve its results?',
      responseType: 'Checkpoint 1',
      terms: ['Meiji Restoration', 'Iwakura Mission', 'zaibatsu', 'state-led industrialization', 'protective tariffs', 'transcontinental railroad', 'Lowell mills', 'Ruhr valley', 'fukoku kyōhei'],
      focus: ['Choose two successful industrializers and identify one specific factor for each — be concrete about the mechanism.', 'Compare state-led vs. market-led industrialization — what did each sacrifice?', 'Explain why Japan is significant as the only non-Western successful industrializer.']
    },
    {
      title: 'Checkpoint 2: Colonialism and the Failure to Industrialize',
      subtitle: 'Checks Learning Target 2 — why colonialism blocked industrialization in most of Asia, Africa, and Latin America.',
      cardDesc: 'India\'s deindustrialization, Egypt\'s blocked industrialization, Latin American dependency, and the sovereignty argument.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Explain why India did not industrialize in the 19th century despite having sophisticated pre-existing textile manufacturing, a large labor force, and raw materials. Be specific about the colonial mechanism — what exactly did British colonial policy do, and how did it prevent Indian industrialization? Then explain the "sovereignty argument": why could Germany impose protective tariffs that India was forbidden to use? End with a synthesis: overall, was the failure of most of Asia, Africa, and Latin America to industrialize primarily a result of natural disadvantages or deliberate colonial policy?',
      responseType: 'Checkpoint 2',
      terms: ['deindustrialization', 'India textile industry', 'protective tariffs', 'Treaty of Balta Liman', 'Muhammad Ali', 'comparative advantage', 'raw material supplier', 'political sovereignty', 'dependency', 'unequal treaties'],
      focus: ['Explain the specific colonial mechanism that blocked Indian industrialization — not vague, but the actual policy tool.', 'Explain the sovereignty argument — why Germany could do what India could not.', 'Make a supported synthesis claim: natural disadvantages or colonial policy?']
    }
  ];
})();
