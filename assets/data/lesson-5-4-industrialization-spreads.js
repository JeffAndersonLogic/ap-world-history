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
    course: "AP WORLD HISTORY",
    unit: "Unit 5: Revolutions",
    topic: "Topic 5.4",
    title: "Industrialization Spreads",
    subtitle: "How industrialization spread to Europe, North America, and Japan, and why colonial relationships ensured it did NOT spread to most of Asia, Africa, and Latin America",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how and why industrialization spread from Britain to Western Europe, the United States, and Japan, and identify the specific factors that shaped the pace and form of industrialization in each region.",
      kc: "KC-5.1.I.D",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain why industrialization did NOT spread to most of Asia, Africa, and Latin America during the 19th century, and evaluate the role of colonialism, specifically deliberate policy choices, not natural disadvantages, in blocking industrialization in colonized regions.",
      kc: "KC-5.1.II.B",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe how industrialization spread to Belgium, France, Germany, the United States, and Japan by the late 19th century. I can identify one specific factor that shaped industrialization in each of three regions (Germany: state-led railroad investment and protective tariffs; US: abundant natural resources, immigrant labor, and continental market; Japan: deliberate Meiji government policy, Iwakura Mission, state-built factories, zaibatsu). I can compare state-led industrialization (Germany, Japan) with more market-driven industrialization (Britain, US).",
      kc: "KC-5.1.I.D",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can explain why most of the world did not industrialize in the 19th century by identifying specific colonial mechanisms: British colonial policy destroying India's textile industry through import tariffs; the 1838 Treaty of Balta Liman blocking Egypt's industrialization; Latin America structured as a raw material exporter. I can explain the structural argument: countries with political sovereignty could use protective tariffs and state investment; colonial territories could not. I can give at least one specific example of deindustrialization caused by colonial policy.",
      kc: "KC-5.1.II.B",
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.1.II.B',
      theme: 'Technology and Innovation',
      text: 'The rapid development of steam-powered industrial production in European countries and the United States contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.',
      illustrativeExamples: ['Shipbuilding in India and Southeast Asia', 'Iron works in India', 'Textile production in India and Egypt']
    },
    {
      code: 'KC-5.1.I.D',
      theme: 'Technology and Innovation',
      text: 'As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "From Britain to the World: The Uneven Spread of Industrialization",
    intro: "Industrialization spread from Britain to some parts of the world, and deliberately did not spread to others. Understanding this uneven geography is the most important intellectual task in Topic 5.4. The countries that industrialized successfully in the 19th century shared one critical feature: political sovereignty, which allowed them to use protective tariffs and state investment to build domestic industry. The countries that did not industrialize were largely colonial territories whose economies were structured by European powers to serve European industrial interests.",
    videos: [],
    segments: [
      {
        title: "From Britain to the West: Europe and North America",
        bullets: [
          "**Belgium** was the first country to industrialize after Britain (1820s). It had the right combination: coal and iron deposits in the Liège and Charleroi basins, navigable rivers, proximity to British technology (Belgian industrialists brought British engineers and machinery), and a government that supported industrial development. By the 1840s, Belgium had built one of the densest railroad networks in the world, partly because its small geography meant railroads could connect everything cheaply.",
          "**France** industrialized more slowly and unevenly than Britain or Belgium, partly due to the disruption of the Napoleonic Wars, partly because France's geography (dispersed population, less concentrated coal deposits) didn't favor the kind of rapid urban industrialization seen in Manchester. French industrialization concentrated in textiles (Normandy), iron and steel (northern France), and luxury goods (Paris). The French state played a larger role than in Britain, investing directly in railroads and heavy industry.",
          "**Germany** is the most important case for the AP exam because it illustrates state-led industrialization most clearly. In the 1840s–1860s, the Prussian state (and then the unified German Empire after 1871) directly invested in building a railroad network, which simultaneously created demand for steel and coal and connected the interior to markets. Germany also built large-scale industrial banks that lent directly to heavy industry. By 1870, German industrial output was approaching Britain's; by 1900, it exceeded it. Crucially, Germany used **high protective tariffs** to shield domestic industry from British competition while it developed, the same tool that colonized territories were forbidden to use.",
          "**United States**: Abundant natural resources (coal in Pennsylvania, iron in the Great Lakes region, vast agricultural land), a large and rapidly growing immigrant labor force, an enormous continental market protected by high tariffs, and private enterprise together drove American industrialization. Lowell, Massachusetts (1820s) was the first planned industrial city. The **transcontinental railroad** (1869) integrated the continental market and drove enormous demand for steel and coal. By 1900, the United States was the world's largest industrial economy, larger than Britain and Germany combined.",
          "**The critical pattern**: Germany, the United States, and Japan all used **protective tariffs** during their industrialization to shield domestic industries from foreign (primarily British) competition. Britain argued for free trade, which made sense for Britain as the most advanced industrial power, since free trade allowed British goods to undercut domestic producers everywhere. The countries that industrialized successfully rejected this advice and protected their home markets. This is the most important lesson in comparative industrialization for the AP exam."
        ],
        image: {
          title: "Ferdinand Magellan, Global Connections",
          caption: "The global trade routes established in the Age of Exploration created the commercial and commodity networks that fed industrialization's demand for raw materials and markets. Cotton from India and the American South, iron ore from Sweden, and markets across Asia and Africa were all part of the industrial economy.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg"
        }
      },
      {
        title: "Japan's Deliberate Industrialization: The Meiji Model",
        bullets: [
          "**Context**: In 1853, US Commodore Matthew Perry's 'Black Ships' arrived in Edo Bay and demanded Japan open its ports to American trade. Japan had been largely closed to foreign contact since the early 17th century. The Perry mission, backed by warships that Japan could not match, forced two 'unequal treaties' opening Japan to American trade on American terms. Japanese elites could see what had happened to China after similar forced openings (Opium War, 1839–1842; Treaty of Nanking, 1842): semicolonial status, extraterritoriality, loss of tariff autonomy.",
          "**The Meiji Restoration** (1868): A coalition of reform-minded samurai overthrew the Tokugawa Shogunate and 'restored' the emperor to nominal power, but the real change was a new government committed to rapid modernization. The Meiji slogan was '**rich country, strong army**' (*fukoku kyōhei*): Japan had to industrialize and build modern military power, or it would face the same fate as China. This was industrialization as a survival strategy.",
          "**The Iwakura Mission** (1871–1873): The Meiji government sent a delegation of approximately 50 officials, including future prime ministers and senior bureaucrats, on an 18-month tour of the United States and Europe to study Western institutions. They visited factories, schools, military academies, hospitals, legislatures, and government ministries. Their conclusion: Japan should borrow selectively from the best of each Western model. They took German military organization, British naval architecture, American education system, and French legal codes.",
          "**State-led industrialization**: The Meiji government directly built and operated early factories, textile mills, glass factories, cement plants, shipyards, to demonstrate that modern industrial production was possible in Japan. It then sold these factories to private investors at favorable prices, creating the **zaibatsu** (large family-owned industrial conglomerates: Mitsui, Mitsubishi, Sumitomo, Yasuda). The Bank of Japan (1882) provided industrial capital. The state built a railroad network and telegraph system. This was deliberate, top-down, government-directed industrialization, the opposite of Britain's private-enterprise model.",
          "**Results**: Japan was the only non-Western country to industrialize successfully in the 19th century. By 1895, Japan defeated China in the First Sino-Japanese War, the first time an Asian power had defeated a major power in modern warfare. By 1905, Japan defeated **Russia** in the Russo-Japanese War, the first time a non-Western country had defeated a European great power. Both victories depended on industrial military capacity. Japan succeeded because it had political sovereignty and used that sovereignty to deliberately adopt Western technology while maintaining Japanese political control."
        ],
        image: {
          title: "Pillar of Vasco da Gama, European Power and Asian Sovereignty",
          caption: "Japan's Meiji leaders understood the lesson of the Age of Exploration: European military and economic power flowed from industrial capacity. The countries of Asia, Africa, and Latin America that had been unable to resist European expansion lacked that capacity. Japan's response was to acquire it deliberately.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg"
        }
      },
      {
        title: "Why Colonialism Blocked Industrialization: India, Egypt, and Latin America",
        bullets: [
          "**The crucial question**: Why didn't industrialization spread to India, China, Egypt, or Latin America in the 19th century? The standard (incorrect) answer is that these regions lacked the necessary conditions, coal, capital, skilled workers. The correct answer is that many of these regions had the conditions but were prevented from industrializing by colonial relationships that served European industrial interests.",
          "**India's deindustrialization**: India had the most sophisticated textile industry in the world in the early 18th century. Dacca muslin was the finest cotton cloth in the world; Bengal silk and Indian calicoes were coveted across Asia and Europe. British colonial policy systematically destroyed this industry: import duties on Indian textiles in Britain (as high as 70–80%) blocked Indian exports; meanwhile, British machine-made cloth entered India with low or no tariffs. By the 1820s, textile imports from Lancashire were undercutting Indian handloom weavers in their own markets. By mid-century, India had been transformed from a **manufacturer and exporter** of textiles to an **importer** of British cloth and an **exporter** of raw cotton for British mills. This was not a natural market outcome, it was the result of deliberate colonial tariff policy.",
          "**Egypt and Muhammad Ali**: Muhammad Ali (ruled Egypt 1805–1848) is one of the most ambitious industrializers of the early 19th century. In the 1820s and 1830s, he built state-owned textile mills, iron foundries, shipyards, and munitions factories, directly modeled on European industrial methods, staffed by European engineers, and protected by Egyptian tariffs. His military used these to fight the Ottoman Empire and expand into Syria. Britain, alarmed by Egyptian power, forced Muhammad Ali to sign the **Treaty of Balta Liman** (1838), which required Egypt to abolish its protective tariffs and open its markets to British goods. Egyptian tariffs gone, British machine-made cloth flooded Egyptian markets; Muhammad Ali's factories could not compete and collapsed. Egypt was restructured as a **cotton exporter**, its fertile Nile Valley land converted to growing raw cotton for British mills.",
          "**Latin America and the dependency structure**: Even after independence from Spain and Portugal (1810–1825), Latin American economies remained structured as raw material exporters. Silver, copper, guano (fertilizer), rubber, coffee, and sugar flowed to Europe and the United States; manufactured goods and investment capital flowed back. European and American investors owned the railroads, mines, and port facilities, infrastructure that efficiently moved raw materials out but did not build domestic industrial capacity. This 'dependency' structure was enforced not by formal colonialism but by economic relationships and periodic military intervention.",
          "**The structural argument**: The difference between industrializing countries (Germany, US, Japan) and non-industrializing countries (India, Egypt, Latin America) was not natural endowment, it was political sovereignty. Sovereign countries could impose **protective tariffs** to block foreign competition and use **state investment** to build domestic industry. Colonized territories could not impose tariffs (or were forced to abolish them by unequal treaties). This structural difference, not any natural or cultural deficit, explains why industrialization spread where it did and didn't spread where it didn't."
        ],
        image: {
          title: "World 1700 CE, The Pre-Industrial Global Economy",
          caption: "In c. 1700, Asia, especially China and India, dominated global manufacturing. India produced the finest textiles in the world; China produced the most silk, porcelain, and cotton cloth. Within 150 years, British colonial policy had deindustrialized India and opened China by force. The industrial revolution did not simply grow out of existing strengths, it also systematically eliminated competitors.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png"
        }
      }
    ]
  },

  map: {
    title: "The Uneven Geography of Industrialization, c. 1850–1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg",
    caption: "By c. 1850–1900, industrial production was concentrated in a narrow band: Britain, Belgium, northern France, the Ruhr valley in Germany, and the northeastern United States. Japan would join this group by 1900. The rest of the world, including India, China, Egypt, and Latin America, remained structured as raw material suppliers.",
    intro: "Examine the geographic pattern of industrialization by 1900. Notice the clustering of industrial regions: the British Midlands and North, the Ruhr valley in Germany, the northeastern US, and Japan. Then notice what is absent: no industrial zones in India, sub-Saharan Africa, Southeast Asia, or most of Latin America despite many of these regions having raw materials, labor, and (in India's case) sophisticated pre-existing textile production.",
    prompt: "Using the map, explain the geographic pattern of industrialization. What do the regions that industrialized have in common? What do the regions that did not industrialize have in common? How does the concept of 'political sovereignty' help explain this geographic pattern?"
  },

  first10: {
    title: 'First & 10: Beyond Britain',
    embedUrl: 'first-and-10-topic-5-4-industrialization-spreads-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.4 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Comparing Paths to Industrialization",
    intro: "Use the evidence below to analyze how different regions industrialized, or were prevented from industrializing. Strong AP comparison arguments require specific evidence about both similarities and differences, and a synthesis statement about what the comparison reveals.",
    prompt: "Choose one piece of evidence. Explain what it reveals about either how industrialization spread OR why it was blocked. Then connect your evidence to the broader structural argument: how did political sovereignty (or its absence) shape industrialization outcomes?",
    items: [
      { title: "Meiji Charter Oath (1868)", detail: "The Meiji government's foundational document declared five principles, including: 'Knowledge shall be sought throughout the world so as to strengthen the foundation of imperial rule' and 'Evil customs of the past shall be broken off and everything based upon the just laws of Nature.' Analyze: how does the Meiji Charter Oath reveal the Meiji government's approach to industrialization? Why does the document frame Western learning as compatible with imperial rule? How does this contrast with the approach of colonial territories that were forced to adopt Western economic rules rather than choosing to borrow Western technology?" },
      { title: "British Parliamentary Debate on Indian Tariffs (c. 1813)", detail: "During the 1813 renewal of the East India Company's charter, British manufacturers lobbied Parliament to open India to British goods. A Manchester merchant testified: 'The population of India is vast; the consumers of cotton goods in India, if our manufactured goods could be admitted at reasonable rates, would be many millions. The cotton goods of India are now excluded from our markets by prohibitory duties; we propose only that the reverse should take place, that our goods should have free admission into India.' The Charter Act of 1813 opened India to British manufactures. Analyze: how does this testimony reveal the relationship between British industrial interests and colonial trade policy? What does 'free admission' mean in a context where India's exports to Britain faced high tariffs?" },
      { title: "German Tariff Law (1879)", detail: "Chancellor Otto von Bismarck introduced the Tariff of 1879 (the 'Iron and Rye' tariff), imposing significant duties on imported iron and grain. He argued: 'Germany must learn to work for itself. German industry must grow behind protective walls until it is strong enough to compete with Britain. Free trade is the policy of the strong; protection is the policy of the developing nation.' Analyze: how does Bismarck's argument for protective tariffs reveal the structural conditions necessary for industrialization? Why could Germany impose protective tariffs that Egypt was forced to abolish?" }
    ]
  },

  primarySource: {
    title: "Primary Source: The Decline of Indian Textile Manufacturing, c. 1840",
    intro: "By the 1830s–1840s, British machine-made textiles were penetrating Indian markets in large quantities, undercutting handloom weavers who had produced the world's finest cloth for centuries. This adapted account draws on reports from British East India Company officials and Indian testimony collected by Parliamentary investigators. The deindustrialization of India is one of the most significant economic transformations of the 19th century, and one of the most directly caused by deliberate colonial policy rather than natural market forces.",
    text: [
      "The bones of the cotton-weavers are bleaching the plains of India. Thousands of weavers, who formerly found employment in weaving cotton goods for export to Europe, are now deprived of employment, because European looms can produce goods more cheaply.",
      "In 1813, India was a net exporter of cotton cloth. By 1830, India had become a net importer. British-made cloth, produced by power looms in Lancashire and Yorkshire, entered Indian markets with import duties of 2.5 percent, while Indian cloth exported to Britain faced duties of 20 to 80 percent. This was not free trade; it was free trade in one direction only.",
      "The weaver of Dacca had no machine to give him the speed of the Lancashire loom. He had only his hands, which for ten generations had produced the finest cloth in the world. The finest Dacca muslin, so fine it was called 'woven air', could not compete on price with machine-made imitations. A cloth that required thirty days of skilled labor could be produced by a machine in three hours.",
      "The question is not whether machine production is more efficient. It is. The question is: who bears the cost of this efficiency? The handloom weaver of Dacca bears it. His children, who cannot be fed on the wages of weaving, bear it. And the tariff structure that produced this outcome was designed, implemented, and maintained not by market forces but by the Parliament of Great Britain, in the interests of the manufacturers of Lancashire."
    ],
    questions: [
      "What specific mechanism does this source identify as the cause of Indian textile deindustrialization? Is it primarily technological (machine production is more efficient) or political (tariff structure)? How does the source use the phrase 'free trade in one direction only'?",
      "The source says the 'tariff structure was designed, implemented, and maintained... by the Parliament of Great Britain, in the interests of the manufacturers of Lancashire.' How does this claim differ from the standard argument that deindustrialization was a natural market outcome? What evidence would you need to evaluate which interpretation is correct?",
      "Compare India's situation to Japan's in the same period. India had sophisticated pre-existing textile manufacturing, a large labor force, and raw cotton. Japan had fewer pre-existing industrial advantages. Yet Japan industrialized and India deindustrialized. What does this comparison reveal about the role of political sovereignty in economic development?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Japanese Official on the Iwakura Mission, 1873",
    desc: "You are a young Japanese official, a former samurai, now a Meiji government bureaucrat, visiting a Krupp steel factory in Essen, Germany, as part of the Iwakura Mission in January 1873. You have spent the past 14 months traveling through the United States and Europe studying Western institutions.",
    intro: "The Krupp factory is incomprehensible in scale. The blast furnaces rise six stories. Men look like insects next to them. Drop hammers the size of houses stamp steel for cannon barrels. You can feel the vibration through the ground half a mile away. The foreman tells you: Krupp cannons destroyed the French fortress at Sedan in 1870. The French fortress had held for centuries. Krupp destroyed it in three days.",
    detail: "You know what Krupp cannons mean for Japan. You know that Perry's Black Ships had Dahlgren guns, cast iron naval cannon, that Japan could not match. You know that China's Qing dynasty had faced cannon like this in 1842 and signed away Hong Kong and five treaty ports. You know that unless Japan builds cannon like Krupp's, Japan will face the same choices China faced: submission or destruction. You are writing a report to the Meiji government recommending what Japan must do. You are also writing a private journal entry for yourself, not the official report, but the honest record of what you actually feel standing in this building.",
    prompt: "Write the private journal entry, not the official report. Describe the Krupp factory honestly: what it looks like, what it sounds like, what it smells like. Then describe what you understand it means for Japan. What must Japan do, and what will Japan lose, in order to build something like this? Are you confident Japan can do it? Are you afraid of what Japan will become if it succeeds? Write with the full weight of what you are seeing."
  },

  beInTheRoom: {
    url: '',
    desc: "Advise the Meiji government on whether to build state-owned factories or create private zaibatsu, debate with a Lancashire manufacturer whether British tariff policy toward India is free trade or imperialism, or testify before the Meiji reform commission on which Western institutions Japan should borrow, and which it should refuse."
  }

};
