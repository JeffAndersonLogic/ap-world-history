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
    title: "Technology of the Industrial Age",
    subtitle: "How the railroad, telegraph, Bessemer process, and other technologies transformed economic life — and how industrial demand reshaped environments and extracted resources from colonized regions",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how steam engines and internal combustion engines allowed societies to use coal and oil on a much larger scale, greatly increasing the energy available for industrial production and transportation.",
      kc: "KC-5.1.I.B",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how second-industrial technologies in steel, chemicals, electricity, and precision machinery increased productive capacity and changed what industries could make at scale.",
      kc: "KC-5.1.I.E",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how railroads, steamships, and the telegraph reduced the economic effects of distance, opened interior regions, and increased trade and migration.",
      kc: "KC-5.1.IV",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can connect steam power to coal and internal combustion to oil, and explain how concentrated fossil-fuel energy made factories and transportation less dependent on human, animal, wind, water, or wood energy.",
      kc: "KC-5.1.I.B",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can use at least two examples from steel, chemicals, electricity, or precision machinery and explain the production problem each innovation solved or the new scale of production it enabled.",
      kc: "KC-5.1.I.E",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can explain the distinct economic role of railroads, steamships, and telegraph networks and connect at least two of them to increased trade, migration, resource development, or market integration.",
      kc: "KC-5.1.IV",
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
    title: "More Energy, More Production, Less Distance",
    intro: "Topic 5.5 asks a technology-to-production question. The important story is not that the 19th century invented many impressive machines; it is how new energy sources and industrial technologies increased productive capacity, while railroads, steamships, and telegraphs made larger markets and greater movement economically possible.",
    videos: [],
    segments: [
      {
        title: "The Fossil-Fuel Revolution: Coal, Steam, Oil, and Internal Combustion",
        bullets: [
          "The steam engine made it possible to convert the chemical energy stored in **coal** into reliable mechanical power. Factories no longer had to sit beside fast-flowing rivers, mines could pump water from deeper shafts, and locomotives and steamships could move heavy loads with far more energy than human or animal power.",
          "By the late 19th century, the **internal combustion engine** made **oil** increasingly useful as a concentrated fuel for mobile machinery and transportation. Coal remained dominant, but oil opened a second major fossil-fuel path.",
          "The key mechanism is **more concentrated energy -> more mechanical power -> greater productive and transport capacity**. That energy revolution is the formal KC-5.1.I.B job."
        ],
        image: {
          title: "Steam power and fossil-fuel energy",
          caption: "Steam engines converted coal into continuous mechanical power for factories, mines, railroads, and ships.",
          url: "../assets/images/instructional-maps/topic-5-5.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-5.svg"
        }
      },
      {
        title: "The Second Industrial Revolution: Steel, Chemicals, Electricity, Precision",
        bullets: [
          "The **Bessemer process** and related methods made steel cheaper and more abundant, allowing rail networks, bridges, larger machines, ships, and urban structures to expand at new scale.",
          "The chemical industry produced dyes, fertilizers, explosives, medicines, and industrial inputs. **Electricity** enabled lighting and electric motors, while **precision machinery** improved the standardization and speed of complex manufacturing.",
          "These technologies mattered because they changed production itself: **cheaper materials + new forms of power + standardized machinery -> greater output, new products, and more complex industrial systems**."
        ],
        image: {
          title: "Bessemer converter",
          caption: "Cheap mass steel became a foundational material of the second industrial revolution.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bessemer_converter.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Bessemer_converter.jpg"
        }
      },
      {
        title: "Railroads and Steamships: Moving Goods and People",
        bullets: [
          "**Railroads** dramatically lowered overland transport costs and connected mines, farms, factories, cities, and ports. Interior regions could now participate more directly in national and global markets.",
          "**Steamships** made maritime transportation faster, more regular, and less dependent on wind patterns. Combined with canals and port infrastructure, they increased the volume and predictability of long-distance trade and passenger movement.",
          "Transport technology changed economic geography: places that had been too distant or expensive to reach could now be developed for agriculture, mining, settlement, or trade, helping increase both **commerce and migration**."
        ],
        image: {
          title: "Industrial transport networks",
          caption: "Railroads and steamships reduced the cost and uncertainty of moving people and goods across long distances.",
          url: "../assets/images/instructional-maps/topic-5-5.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-5.svg"
        }
      },
      {
        title: "The Telegraph: Information Moves Faster Than People",
        bullets: [
          "The **telegraph** separated communication speed from transportation speed. Prices, orders, political instructions, and news could travel across long distances far faster than physical goods or people.",
          "Telegraph lines and undersea cables allowed firms to coordinate production and trade across regions, governments to communicate across empires, and markets to react more quickly to changing supply and demand.",
          "Together, railroad, steamship, and telegraph networks compressed economic distance: **faster movement + faster information -> larger integrated markets -> increased trade, development, and migration**."
        ],
        image: {
          title: "Transatlantic telegraph connection",
          caption: "By the late 19th century, information could move across oceans in minutes rather than weeks.",
          url: "../assets/images/instructional-maps/topic-5-5.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-5.svg"
        }
      }
    ]
  },

  map: {
    title: "The Industrial World's Resource Network, c. 1850–1900",
    url: "../assets/images/instructional-maps/topic-5-5.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-5.svg",
    caption: "By c. 1850–1900, global trade networks were reorganized around industrial demand. Steam-powered ocean liners and submarine telegraph cables connected industrial centers in Britain, Europe, and North America to resource-extraction zones in Asia, Africa, and Latin America. Raw materials flowed toward industrial centers; manufactured goods and capital flowed outward.",
    intro: "Examine the global geography of industrial-era resource extraction. Identify the locations of major industrial resource flows: cotton from India, the American South, and Egypt; rubber from the Congo and Amazon; guano from Peru; coal from British, German, and American mines; copper from Chile and American Southwest. Notice how these flows connect colonized or semi-colonized peripheries to industrial cores.",
    prompt: "Using the map and your knowledge, explain the relationship between industrial technology in Europe and North America and resource extraction in Asia, Africa, and Latin America. What specific technologies drove demand for specific resources? What labor systems were used to extract these resources? What does this pattern reveal about who benefited from industrialization and who bore its costs?"
  },

  deepReading: {
    title: "The Machines That Needed Each Other",
    desc: "A textbook-depth companion writing the technologies as a chain of bottlenecks rather than a list, from flooded mines to Bessemer steel to the telegraph, and then the environmental half: the smoke where the factories were, and the guano, rubber and coerced labor that produced the raw materials somewhere else. Optional, and useful when a checkpoint asks how one technology enabled another.",
    url: "deep-reading-topic-5-5-technology-of-industrialization.html"
  },

  first10: {
    title: 'First & 10: The Iron Road',
    embedUrl: 'first-and-10-topic-5-5-technology-of-industrialization-capture.html?v=response-id-fix-v1',
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
