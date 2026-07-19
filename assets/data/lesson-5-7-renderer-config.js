(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'KC-5.1.III.A',
      theme: 'Economic Systems',
      text: 'Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith’s theories of laissez-faire capitalism and free markets.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.III.B',
      theme: 'Economic Systems',
      text: 'The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance.',
      illustrativeExamples: ['Hong Kong and Shanghai Banking Corporation (HSBC)', 'Unilever, based in England and the Netherlands and operating in British West Africa and the Belgian Congo', 'Stock markets', 'Limited-liability corporations']
    },
    {
      code: 'KC-5.1',
      theme: 'Economic Systems',
      text: 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Free Market',
    embedUrl: 'first-and-10-topic-5-7-economic-developments-and-innovations-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.7 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'London as the center of global finance', detail: 'By 1870, London was the uncontested center of the global financial system. The Bank of England set interest rates that influenced borrowing costs worldwide; the London Stock Exchange listed securities from across the British Empire and beyond; Lloyd\'s of London insured shipping globally; and British investment banks, Baring Brothers, Rothschild & Sons, and others, financed governments and railroads on six continents. The City of London\'s dominance rested on several foundations: sterling\'s gold-backed stability made it the global reserve currency; Britain\'s extensive colonial network provided both investment opportunities and guaranteed markets; and a century of industrial leadership had accumulated the capital that needed to be invested. By 1900, Britain had invested approximately £4 billion overseas, more than France and Germany combined, generating investment income that helped finance Britain\'s trade deficit in manufactured goods.' },
      { label: 'The web of British overseas investment', detail: 'British capital flowed across the globe through three main channels. The first was formal empire: railroads in India (the largest railroad network in Asia, financed by British capital and guaranteed by the Indian government), mining and agriculture in South Africa, Australia, and Canada. The second was informal empire in Latin America: British banks financed Argentine railroads, Chilean mining, and Brazilian government bonds; British companies built port infrastructure and telegraph lines across the continent. The third was penetration of formally sovereign but financially dependent states: the Ottoman Empire, Persia, and China all received British (and other European) investment under conditions that limited their economic sovereignty. The pattern reveals that British capital went where returns were highest and risk was manageable, which generally meant where British political and military power could protect investors if governments defaulted.' },
      { label: 'The gold standard zone and its boundaries', detail: 'By 1900, most major economies had adopted the gold standard, creating a zone of fixed exchange rates that dramatically simplified international trade and investment. Within this zone, Britain, Germany, France, United States, most of Europe, Japan, and British dominions, international transactions were predictable: exchange rates were fixed, there was no currency risk, and contracts could be written with confidence about future payment values. Outside this zone, China (on a silver standard), many smaller economies, international transactions were more complex and expensive. The gold standard\'s geographic spread thus determined which economies were integrated into the global industrial financial system and which were at its margins. Joining the gold standard required holding gold reserves, which meant smaller economies had to run trade surpluses or borrow from gold-standard banks, either way, they became more dependent on the financial centers.' },
      { label: 'Economic imperialism without formal colonialism', detail: 'The most analytically important geographic pattern for Topic 5.7 is the region between formal British colonies (colored in pink on maps of the era) and fully independent economies: the zone of economic imperialism. Latin America, formally independent since the 1820s, was economically dependent on British capital and trade: British banks held government bonds, British companies owned railroads and mines, and the region\'s export economy was structured around supplying industrial Britain with raw materials. The Ottoman Empire, formally sovereign throughout the 19th century, ceded control of its tax revenues to European creditors through the Ottoman Public Debt Administration. China, never formally colonized, had its treaty ports opened by gunboat diplomacy and its tariff rates set by unequal treaties. This intermediate zone, formally sovereign but economically penetrated, reveals that formal colonialism was one mechanism of industrial-era power, not the only one.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-debt-conversion-table.html',
    desc: "Negotiate the Ottoman Public Debt settlement in 1881 and decide how foreign creditors can gain confidence without taking control of domestic sovereignty."
  };

  lesson.skillBuilder = {
    label: 'Argumentation practice',
    title: 'Was Free Trade a Universal Good or a Tool of British Power? Constructing a Supported Argument',
    intro: 'Argumentation for Topic 5.7 requires taking a position and defending it with specific evidence. The free trade debate is ideal for AP argumentation practice because both sides have legitimate evidence: free trade did increase total global trade and lower consumer prices; it also did concentrate benefits in the most advanced industrial economy. A strong argument does not pretend the other side has no evidence, it acknowledges the strongest counter-evidence and explains why, on balance, the argument still holds.',
    steps: [
      { label: 'Establish your claim (thesis)', text: 'Before writing, choose your position: (A) Free trade ideology primarily served British industrial interests and extended economic inequality, despite its universalist rhetoric; OR (B) Free trade ideology genuinely increased global prosperity and integration, even if the benefits were distributed unequally. Both positions can be defended, the key is defending yours with specific evidence. Your thesis should be specific about the mechanism: not just "free trade was good/bad" but "free trade worked by [specific mechanism] and this produced [specific outcome] because [specific reason]." Example thesis for position A: "Britain\'s free trade ideology primarily served British industrial interests by forcing open foreign markets to British manufactured goods while preventing developing economies from using protective tariffs to build their own industries, as demonstrated by British opposition to Egyptian and Indian industrial development." Example thesis for position B: "Although free trade benefited Britain disproportionately as the most advanced industrial economy, the resulting global trade expansion also created economic growth in raw material-exporting regions, as demonstrated by the Argentine and Australian economic booms of the 1870s–1900s."' },
      { label: 'Select and use specific evidence', text: 'For position A (free trade as British power): the Corn Laws repeal benefited British manufacturers who needed cheap food for low-wage workers; British opposition to Muhammad Ali\'s Egyptian industrialization and to Indian protective tariffs; the Ottoman Public Debt Administration as the consequence of accepting British financial terms. For position B (free trade as global growth): the dramatic expansion of global trade volume 1850–1900; falling consumer prices for manufactured goods in trade-integrated economies; Argentine and Australian agricultural export booms funded infrastructure and population growth. For either position: acknowledge the strongest counter-evidence. If arguing A, acknowledge that trade volume did increase and some non-British economies did grow. If arguing B, acknowledge that India\'s textile industry was deindustrialized and that Egypt\'s industrialization was blocked.' },
      { label: 'Write the synthesis (what does the debate reveal?)', text: 'The most sophisticated AP arguments end with synthesis: what does the free trade debate reveal about the relationship between economic ideology and power? Synthesis statement: The 19th-century free trade debate reveals that economic ideologies are never politically neutral, they reflect and serve the interests of those who formulate them, even when they contain genuine economic insight. Britain\'s comparative advantage argument was economically valid; it was also politically convenient for the economy that stood to benefit most from open markets. The fact that the countries that successfully industrialized (Germany, United States, Japan) rejected British free trade advice and used protective tariffs reveals that free trade, as practiced in the 19th century, was not a universally applicable development strategy, it was a strategy appropriate for the most advanced industrial economy, promoted by that economy to the advantage of its manufacturers.' }
    ],
    prompt: 'In 3–4 sentences, construct an argument about whether 19th-century free trade ideology primarily served British industrial interests or was a genuine universal good. Take a clear position, support it with at least two specific pieces of evidence (one should be a named event, treaty, or policy), and acknowledge the strongest counter-evidence to your position. End with a synthesis statement about what the free trade debate reveals about the relationship between economic ideology and power.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Financial Institutions and Industrial Capitalism',
      subtitle: 'Checks Learning Target 1 — corporations, investment banking, stock markets, and how they enabled industrial investment.',
      cardDesc: 'Joint-stock companies, limited liability, stock exchanges, and investment banking.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Explain how limited liability corporations changed the economics of industrial investment. What specific mechanism did limited liability create, what could investors now safely do that they could not do before? Then explain the role of investment banking in industrial capitalism: what did investment banks do, and why was their function necessary rather than just convenient? End with a synthesis: what does the development of these financial institutions reveal about the relationship between legal and financial innovation and industrial economic growth?',
      responseType: 'Checkpoint 1',
      terms: ['joint-stock company', 'limited liability', 'Companies Act 1862', 'stock exchange', 'London Stock Exchange', 'New York Stock Exchange', 'investment bank', 'House of Morgan', 'Deutsche Bank', 'dividend'],
      focus: ['Explain the specific mechanism of limited liability, what changed, and why it mattered for investment behavior.', 'Explain investment banking\'s role, what did they do that markets alone could not?', 'Synthesize: what does financial innovation reveal about the conditions necessary for industrial capitalism?']
    },
    {
      title: 'Checkpoint 2: Free Trade and Economic Imperialism',
      subtitle: 'Checks Learning Target 2 — Corn Laws, gold standard, and how economic relationships extended industrial power.',
      cardDesc: 'Free trade ideology, the 1846 Corn Laws repeal, gold standard, and economic imperialism in Latin America and the Ottoman Empire.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Explain the political context of British free trade advocacy: why did Britain promote free trade so aggressively in the 19th century, and why did Germany and the United States reject British free trade advice while industrializing? Then explain economic imperialism: choose one case (Latin America, Ottoman Empire, or China) and explain specifically how economic relationships, debt, investment, or trade, achieved colonial-like control without formal annexation. What specific mechanism created the dependency? End with a synthesis: is economic imperialism fundamentally different from political imperialism, or does it achieve the same results through different means?',
      responseType: 'Checkpoint 2',
      terms: ['comparative advantage', 'Corn Laws', 'Anti-Corn Law League', 'gold standard', 'economic imperialism', 'Ottoman Public Debt Administration', 'Latin American debt dependency', 'treaty ports', 'extraterritoriality', 'informal empire'],
      focus: ['Explain why Britain advocated free trade and why other industrializing countries rejected it.', 'Explain the specific mechanism of economic imperialism in one case, how debt or investment created dependency.', 'Synthesize: is economic imperialism fundamentally different from formal colonialism?']
    }
  ];
})();
