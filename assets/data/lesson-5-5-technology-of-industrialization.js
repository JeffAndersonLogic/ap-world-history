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
    topic: "Topic 5.5",
    title: "Technology of Industrialization",
    subtitle: "How the railroad, telegraph, Bessemer process, and other technologies transformed economic life — and how industrial demand reshaped environments and extracted resources from colonized regions",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how railroads, the telegraph, the Bessemer process, and electricity transformed industrial economies in the 19th century, and analyze the specific mechanisms by which these technologies accelerated industrial production and market integration.",
      kc: "KC-5.1.I.E; KC-5.1.IV",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain the environmental and social consequences of industrial technology, including coal pollution and resource extraction, particularly the extraction of rubber, guano, and timber from colonized regions, and analyze how industrial demand reshaped global environments and labor systems.",
      kc: "KC-5.1.I.B",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how railroads created national markets by lowering transportation costs and connecting interior regions to ports. I can describe the Bessemer process (1856) as a technology that made mass production of steel possible, and explain how cheap steel enabled railroads, bridges, and industrial machinery at scale. I can explain how the telegraph (1844–1860s) enabled real-time commercial coordination across continents. I can give at least two specific examples of how 19th-century technologies were interdependent, one technology enabling another (e.g., steam engines enabling railroads, Bessemer steel enabling railroad track production at scale, railroads enabling the coal industry by transporting coal cheaply).",
      kc: "KC-5.1.I.E; KC-5.1.IV",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can describe the environmental consequences of industrialization, including coal pollution in British industrial cities and large-scale deforestation. I can explain how industrial demand for rubber (for machine belts, tires, insulation) drove resource extraction in the Congo (Belgian) and Amazon (Brazilian/Peruvian), using coercive labor systems. I can explain how guano (seabird excrement used as fertilizer) became an industrial-scale resource extracted from Peru's Pacific coast, sustaining European agriculture that fed industrial workers. I can make the connection between industrial technology in Europe and environmental and labor transformation in colonized or semi-colonized regions.",
      kc: "KC-5.1.I.B",
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.1.I.B',
      theme: 'Technology and Innovation',
      text: 'The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.I.E',
      theme: 'Technology and Innovation',
      text: 'The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.IV',
      theme: 'Technology and Innovation',
      text: 'Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Iron Roads and Global Resources: The Technologies of Industrialization",
    intro: "The Industrial Revolution was not driven by one technology but by a cascade of interdependent innovations. Understanding how these technologies worked together, and how they transformed both producing and resource-supplying regions of the world, is the analytical core of Topic 5.5. The railroad was the era's signature technology, but it depended on steam power, coal, iron and then steel, the Bessemer process, and the railroad workers (many of them migrants or the colonized) who built it. And the industrial system as a whole depended on raw materials, rubber, guano, timber, cotton, extracted from regions that experienced industrialization's consequences without its benefits.",
    videos: [],
    segments: [
      {
        title: "The Railroad: Market Integration and Industrial Acceleration",
        bullets: [
          "**The railroad is the central technology of the Industrial Revolution**, not because it was the first steam-powered innovation (Watt's steam engine preceded it by 50 years) but because it integrated markets at continental scale. Before railroads, moving goods overland was expensive, slow, and limited by road quality and animal power. A horse-drawn wagon moved perhaps two tons at 4 mph; a railroad locomotive moved several hundred tons at 30–40 mph. This was not a marginal improvement, it was a transformation in the economics of distance.",
          "**Stephenson's Rocket** (1829): The first successful steam locomotive, which reached 36 mph in the Rainhill Trials, faster than any land vehicle in human history to that point. The Liverpool and Manchester Railway (1830) was the first intercity passenger railroad. By the 1840s, railroad mania had gripped Britain: Parliament authorized 8,000 miles of railroad in 1844–1846 alone. By 1850, Britain had 6,000 miles of track; by 1870, the British railroad network was essentially complete.",
          "**Railroads created national markets.** Before railroads, prices varied dramatically by region, coal was cheap near coal mines and expensive 50 miles away; grain was cheap in agricultural regions and expensive in cities. Railroads eliminated these price gaps by making long-distance transport economical. A factory in Manchester could now sell its cloth in Birmingham, London, and Glasgow at competitive prices. A farm in the American Midwest could now send wheat to New York in days. National markets replaced regional ones, and national markets meant industrial-scale production became profitable.",
          "**The transcontinental railroad** (United States, 1869): The Union Pacific (building west from Omaha) and Central Pacific (building east from Sacramento) met at Promontory Summit, Utah, in May 1869. The Central Pacific was built largely by approximately 10,000 Chinese immigrant laborers, who were paid less than white workers, given the most dangerous work (blasting through the Sierra Nevada with nitroglycerin), and excluded from the commemorative photograph at the golden spike ceremony. The transcontinental railroad integrated the American continental market and enabled the agricultural settlement of the Great Plains, which itself displaced Native American nations and their bison-based economies.",
          "**The Trans-Siberian Railroad** (Russia, 1891–1916): Stretching 5,772 miles from Moscow to Vladivostok, this was the longest railroad in the world when completed. Built by Russian state investment, using Chinese and Korean labor in addition to Russian, the Trans-Siberian Railroad allowed Russia to project military power to the Pacific (including to fight Japan in 1904–1905), opened Siberian land to agricultural settlement, and integrated the Russian empire's vast interior into the market economy. Like the American transcontinental, it was simultaneously a feat of engineering, a national integration project, and a colonial project that displaced indigenous Siberian peoples.",
          "**Railroads drove industrial demand.** The railroad industry itself was the largest consumer of iron and steel in the 19th century. In the 1840s–1860s, building 10,000 miles of railroad required millions of tons of iron rails, which required more iron foundries, more coal mines, more blast furnaces. The railroad was the flywheel of the industrial economy: it required iron, coal, and engineering on a scale that pushed every related industry to expand. Then cheap transportation made it economical to ship those industrial products to distant markets, which justified further investment in production capacity."
        ],
        image: {
          title: "Waldseemuller Map — The Globe Before Industrial Time",
          caption: "The early 16th-century Waldseemuller map represents the pre-industrial world of slow communication and local markets. Railroads and the telegraph compressed this world into something unrecognizable: news that once took weeks to cross the Atlantic arrived in minutes after 1866.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg"
        }
      },
      {
        title: "Beyond Railroads: Telegraph, Steel, and Electricity",
        bullets: [
          "**The telegraph** was the first technology to separate communication from transportation. Before the telegraph, information traveled at the speed of the fastest horse or ship. A telegraph message traveled at the speed of electricity, effectively instantaneous over continental distances. Samuel Morse demonstrated the electromagnetic telegraph in 1844; within a decade, telegraph lines stretched across the United States, Europe, and India. The transatlantic telegraph cable (1866) connected Europe and North America in real time for the first time in history. The commercial applications were immediate: commodity prices, shipping schedules, currency exchange rates, and news could now be coordinated in real time across continents. The New York Stock Exchange and the Chicago Board of Trade both depended on the telegraph to function at scale.",
          "**The Bessemer process** (1856) was the single most important metallurgical innovation of the 19th century. Before Bessemer, making steel, the stronger, more flexible alloy of iron, was slow and expensive. The Bessemer converter blasted cold air through molten iron, burning out impurities in 15–20 minutes and producing steel that previously would have taken hours or days to produce. This reduced the cost of steel by 80% between 1860 and 1880. Cheap steel meant: railroad rails that lasted longer than iron; bridges strong enough to span wide rivers (Brooklyn Bridge, 1883); steel-frame skyscrapers (Chicago, 1880s); high-pressure steam boilers for more powerful engines; armor plate for naval warships. The Bessemer process transformed steel from a specialty material into the structural material of the industrial age.",
          "**Electricity** arrived as an industrial force in the 1870s–1880s. Thomas Edison's electric light bulb (1879) and his Pearl Street Station (1882), the first commercial electric power station, in New York City, began replacing gas lighting. But electric light was less important than **electric motors**: factories no longer needed a central steam engine powering all machinery through elaborate belt-and-shaft systems. Electric motors allowed machines to be placed wherever needed and powered independently. The AC/DC conflict between Nikola Tesla (alternating current, backing Westinghouse) and Thomas Edison (direct current) was resolved in favor of AC by the early 1890s because AC power could be transmitted over longer distances without loss. By 1900, electric streetcars were transforming city transportation; electric power was transforming factory production; the telephone (1876) was transforming business communication.",
          "**Technological interdependence** is the key analytical concept for Topic 5.5. These technologies did not develop independently, they required each other. Steam engines enabled railroads; railroads required iron and then steel; cheap steel (Bessemer) enabled railroad expansion at continental scale; railroads moved coal cheaply, making coal power economical; coal powered the factories producing steel and the locomotives running on steel rails. Electricity depended on copper wire (extracted from mines, many in colonized regions), steam turbines to generate it, and steel infrastructure to transmit it. The industrial system was a web of interdependent technologies, each enabling others, and all of them depending on raw materials extracted from mines and fields across the globe."
        ],
        image: {
          title: "Astrolabe — Precision and Navigation",
          caption: "The astrolabe represents an older tradition of precision instrument-making that laid groundwork for the engineering culture of the Industrial Revolution. The same drive for mechanical precision that produced navigational tools in the Islamic world and early modern Europe produced steam gauges, Bessemer converters, and electrical generators in the 19th century.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg"
        }
      },
      {
        title: "Environmental and Social Costs: Rubber, Guano, Coal, and the Global Reach of Industry",
        bullets: [
          "**Coal pollution** was the most immediate environmental consequence of industrialization. Industrial cities in Britain, Manchester, Birmingham, Sheffield, Leeds, burned enormous quantities of coal for factory steam engines, home heating, and gas lighting. The resulting air pollution was unprecedented in human history. Thick coal smoke ('London Particular,' 'pea soup fog') reduced visibility, coated buildings in black soot, and contributed to chronic respiratory disease. Life expectancy in Manchester in the 1840s was 28–29 years, lower than in many pre-industrial societies. The pollution was understood at the time; it was largely accepted as the cost of industrial production.",
          "**The rubber boom** is one of the starkest cases of industrial demand driving colonial violence. Natural rubber, from the sap of Hevea brasiliensis trees, was essential for industrial machinery: machine belts, gaskets, waterproofing, and (after Charles Goodyear's vulcanization process, 1844) pneumatic tires. Demand for rubber drove two simultaneous booms. In the **Amazon basin**, rubber tappers (often debt-bonded Brazilian and indigenous workers) collected rubber in dangerous jungle conditions; Manaus, Brazil, became briefly one of the wealthiest cities in the world. In the **Congo Free State** (King Leopold II of Belgium's personal colony, not a Belgian government colony), a forced labor system required every man in rubber-producing territories to deliver a quota of raw rubber, enforced by the Force Publique militia, which mutilated or killed those who failed to meet their quotas. The Congo rubber regime killed an estimated 1–10 million people. When synthetic rubber was developed in the early 20th century, the Congo rubber system collapsed, but not before producing one of the most documented cases of colonial violence in history.",
          "**Guano** (seabird and bat excrement, rich in nitrogen and phosphorus) was the primary fertilizer of the 19th century before synthetic fertilizers. The Chincha Islands off Peru's Pacific coast were covered with deposits up to 150 feet deep, the accumulated excrement of millennia of seabird nesting. Beginning in the 1840s, Peru began exporting guano to Britain and the United States in enormous quantities. The work of extracting guano was done largely by **Chinese contract laborers** (enganchados) and Peruvian workers under conditions resembling slavery: workers were often illiterate, could not speak Spanish, were locked into debt, and faced brutal treatment for failure to meet quotas. The guano trade made Peru briefly wealthy (the Guano Era), funded a Peruvian government debt binge, and collapsed in the 1870s when the deposits ran low, leaving Peru with a debt crisis and a War of the Pacific (1879–1884) over nitrate deposits in neighboring Bolivia and Chile.",
          "**Deforestation and land transformation** followed industrial demand globally. Railroads required enormous quantities of timber for railroad ties (sleepers), a single mile of track required approximately 2,500–3,000 wooden ties, replaced every 5–10 years. American and European forests were stripped for railroad construction. In colonial regions, deforestation served agricultural conversion: forests cleared for cotton in India, sugar in the Caribbean and Brazil, coffee in Latin America and Southeast Asia, rubber plantations in Southeast Asia (replacing natural rubber extraction). The scale of environmental transformation in colonized regions was often far greater than in industrializing countries.",
          "**The key analytical argument for Topic 5.5**: Industrial technologies transformed both producing regions (by reorganizing factory labor, creating pollution, building cities) and resource-supplying regions (by driving extraction of rubber, guano, cotton, coal, and copper through labor systems ranging from wage labor to debt peonage to forced labor). Understanding industrialization requires understanding both halves of this system: the industrial core and the resource periphery are one system, not two separate stories."
        ],
        image: {
          title: "Voc — Dutch East India Company",
          caption: "The VOC represents the first large-scale corporate extraction system connecting European markets to global resources. The industrial-era rubber and guano booms operated on a similar logic at far greater scale: European and American industrial demand organized global labor to extract resources that European and American factories and farms required.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Industrial World's Resource Network, c. 1850–1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    caption: "By c. 1850–1900, global trade networks were reorganized around industrial demand. Steam-powered ocean liners and submarine telegraph cables connected industrial centers in Britain, Europe, and North America to resource-extraction zones in Asia, Africa, and Latin America. Raw materials flowed toward industrial centers; manufactured goods and capital flowed outward.",
    intro: "Examine the global geography of industrial-era resource extraction. Identify the locations of major industrial resource flows: cotton from India, the American South, and Egypt; rubber from the Congo and Amazon; guano from Peru; coal from British, German, and American mines; copper from Chile and American Southwest. Notice how these flows connect colonized or semi-colonized peripheries to industrial cores.",
    prompt: "Using the map and your knowledge, explain the relationship between industrial technology in Europe and North America and resource extraction in Asia, Africa, and Latin America. What specific technologies drove demand for specific resources? What labor systems were used to extract these resources? What does this pattern reveal about who benefited from industrialization and who bore its costs?"
  },

  first10: {
    title: 'First & 10: The Iron Road',
    embedUrl: 'first-and-10-topic-5-5-technology-of-industrialization-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.5 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Industrial Technology and Its Consequences",
    intro: "Use the evidence below to analyze the technologies of industrialization and their global consequences. Strong AP causation arguments explain the mechanism, not just 'the railroad caused X' but specifically how and why the railroad caused X.",
    prompt: "Choose one piece of evidence. Explain what it reveals about how industrial technology transformed either industrial economies or resource-supplying regions. Then connect your evidence to the broader argument: how did industrial demand create a global system connecting technological innovation in some regions to environmental and labor transformation in others?",
    items: [
      { title: "Andrew Carnegie on the Bessemer Process (c. 1870s)", detail: "American steel magnate Andrew Carnegie described visiting a Bessemer converter for the first time: 'The sight was one never to be forgotten. The steel shot forth in a shower of sparks and fell in a stream of liquid fire. We had found the answer to our question, not wrought iron, not cast iron, but steel. Steel was to be the material of the age.' Carnegie immediately invested in Bessemer steel production and by 1900 controlled one-quarter of American steel output. Analyze: what specific properties of Bessemer steel made it transformative for industrial production? Why did Carnegie understand immediately that 'steel was to be the material of the age'? How did the Bessemer process lower the cost barrier that had previously limited steel to specialized uses?" },
      { title: "Report of the Peruvian Guano Commission (c. 1854)", detail: "A Peruvian government commission reported on labor conditions in the Chincha Islands guano works: 'The Chinese workers are transported from Canton under contracts they cannot read, to work they did not understand would require them to remain on the islands without possibility of departure. They work in conditions of extreme heat, surrounded by dust that destroys the lungs, and are disciplined by supervisors who treat disobedience as grounds for physical punishment. Many have attempted to escape by swimming; many have not returned. The islands produce enormous wealth; the workers who extract it receive almost none of it.' Analyze: how does this report illustrate the relationship between industrial demand (for fertilizer to feed European agricultural workers) and labor exploitation in resource-supplying regions? What does the phrase 'the islands produce enormous wealth; the workers who extract it receive almost none' reveal about the distribution of industrial-era profits?" },
      { title: "Samuel Morse on the Telegraph (1844)", detail: "On May 24, 1844, Samuel Morse sent the first long-distance telegraph message from Washington to Baltimore: 'What hath God wrought.' Morse later wrote: 'It is not visionary to say that this invention will annihilate space and time. The merchant in New York will know the price of cotton in New Orleans before the ship carrying it has left port. Governments will know of battles fought before the wounded have reached hospital.' Analyze: how does Morse's description of the telegraph's potential reveal its specific economic applications? What does 'annihilate space and time' mean in the context of 19th-century commercial coordination? How did real-time price information change the economics of industrial commodity markets?" }
    ]
  },

  primarySource: {
    title: "Primary Source: The Human Cost of Railroad Construction — Chinese Labor on the Transcontinental Railroad, 1865–1869",
    intro: "The Central Pacific Railroad was built eastward from Sacramento through the Sierra Nevada by approximately 10,000 Chinese immigrant laborers, the largest single workforce on the project. They were paid $26–35 per month compared to $35 for white workers doing the same work, were given the most dangerous assignments (blasting tunnels through granite using nitroglycerin), and were excluded from the commemorative 'golden spike' photograph when the two railroads met in 1869. This adapted account draws on testimony from surviving workers, railroad company records, and contemporary newspaper accounts.",
    text: [
      "The Chinamen, as they were called by the press, came to the Sierra Nevada in the winter of 1865–1866 to do what others had refused: blast a path through solid granite at elevation. The Central Pacific's chief engineer, Charles Crocker, had resisted hiring Chinese workers, 'they didn't built the Great Wall of China,' he was told; 'who built it?' the reply came. Crocker hired Chinese workers in large numbers and was satisfied: they were reliable, cost less, and complained less than white workers.",
      "The work of blasting the Summit Tunnel required drilling holes in solid granite, packing them with black powder or nitroglycerin, lighting the fuse, and retreating before the explosion. Workers who retreated too slowly, or whose fuses burned faster than expected, were killed or maimed. In the winter of 1866–1867, Chinese workers lived in tunnels dug through 40 feet of snowpack while continuing to excavate the railroad tunnel below. Dozens died in avalanches; their bodies were found in spring thaw, still holding their tools.",
      "In the summer of 1867, Chinese workers struck for equal pay and shorter working hours, eight hours per day instead of ten to twelve. The Central Pacific broke the strike by cutting off their food supply. The workers, isolated in the Sierra Nevada, could not survive without the company's supply line. After a week, they returned to work without concessions. Their wages were eventually raised slightly, but never to equal white workers.",
      "When the golden spike was driven at Promontory Summit on May 10, 1869, the official photograph showed the two locomotive crews and company executives meeting between the engines. No Chinese workers appear. They had built half of the railroad. The official history of the transcontinental railroad did not prominently acknowledge their role for more than a century."
    ],
    questions: [
      "What specific labor conditions does this source describe for Chinese workers on the transcontinental railroad? How does the source use the comparison between Chinese and white workers' wages to make its argument?",
      "The source describes the 1867 strike and the company's response, cutting off the food supply. What does this reveal about the power relationship between the Central Pacific and its Chinese workforce? How does this compare to other coercive labor systems you have studied?",
      "The source notes that Chinese workers 'built half of the railroad' but do not appear in the commemorative photograph. What does this detail reveal about how 19th-century industrialization recognized (or failed to recognize) the contributions of non-white labor? How does this connect to the broader pattern of industrial benefits and burdens being distributed unequally?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Chinese Railroad Worker in the Sierra Nevada, 1867",
    desc: "You are a Chinese immigrant laborer working for the Central Pacific Railroad in the Sierra Nevada mountains in the summer of 1867. You came to California during the Gold Rush era, stayed when the gold ran out, and took railroad work when it was offered, because the alternative was starvation wages in San Francisco's Chinatown.",
    intro: "Your team is drilling a tunnel through solid granite at 7,000 feet elevation. The work is: drill a hole with a hand drill and hammer, pack it with black powder, light the fuse, run. The nitroglycerin is worse, it has no predictable burn time. Three men in your work crew were killed last month. You are earning $26 a month. White workers doing the same work earn $35.",
    detail: "Yesterday, the workers in your camp decided to strike. The demand is simple: equal pay, $35 a month, same as white workers, and eight-hour days instead of twelve. The company's response was to cut off your food supply. The camp is at 7,000 feet in the Sierra Nevada; you cannot leave without walking through mountain wilderness for days. You have been without food from the company for three days. Some men want to continue; some want to give up. You are writing a letter to your brother in Guangzhou Province, a letter that may take months to reach him, if it arrives at all. You want to tell him the truth about what this country is, and what this work is.",
    prompt: "Write the letter to your brother. Describe the work: what it looks, sounds, and smells like; what happens to the men who make mistakes. Describe the strike and the company's response, and what you understand it reveals about your situation. Be honest about whether you regret coming, whether you think the railroad will be worth it, and whether you would advise your brother to come to America. This is a private letter, write with the full weight of your experience, not with the optimism you might show to the railroad bosses."
  },

  beInTheRoom: {
    url: '',
    desc: "Testify before a Parliamentary committee investigating child labor in coal mines, negotiate as a rubber baron with a Force Publique officer in the Congo, or advise the Central Pacific Railroad on whether to break the Chinese workers' strike, or meet their demands."
  }

};
