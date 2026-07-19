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
    unit: "Unit 9: Globalization",
    topic: "Topic 9.3",
    title: "Technological Advances, Debates About the Environment After 1900",
    subtitle: "How human activity degraded the environment, intensified resource competition, and sparked debates about the nature and causes of climate change",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain the causes and effects of environmental degradation after 1900, deforestation, desertification, declining air quality, and rising freshwater consumption.",
      kc: "KC-6.1.II.A",
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain how environmental change intensified competition over scarce resources around the world.",
      kc: "KC-6.1.II.A",
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain how the release of greenhouse gases and pollutants drove debates about the nature and causes of climate change.",
      kc: "KC-6.1.II.B",
      theme: "Humans and the Environment"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific examples, deforestation, desertification, air pollution, and freshwater depletion, to explain how human activity degraded the environment after 1900, identifying both the causes and the effects of each form of degradation.",
      kc: "KC-6.1.II.A",
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain how environmental degradation and resource scarcity intensified competition over land, water, and other resources, and connect this competition to specific social or political tensions.",
      kc: "KC-6.1.II.A",
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain how the release of greenhouse gases and pollutants contributed to debates about the nature and causes of climate change, and identify why those debates were contested.",
      kc: "KC-6.1.II.B",
      theme: "Humans and the Environment"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Humans and the Environment (ENV)",
      theme: "Humans and the Environment",
      text: "The environment shapes human societies, and as populations grow and change, these populations in turn shape their environments.",
      illustrativeExamples: []
    },
    {
      code: "Unit 9: Learning Objective C",
      theme: "Learning Objective",
      text: "Explain the causes and effects of environmental changes in the period from 1900 to the present.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.II.A",
      theme: "Humans and the Environment",
      text: "As human activity contributed to deforestation, desertification, a decline in air quality, and increased consumption of the world’s supply of fresh water, humans competed over these and other resources more intensely than ever before.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.II.B",
      theme: "Humans and the Environment",
      text: "The release of greenhouse gases and pollutants into the atmosphere contributed to debates about the nature and causes of climate change.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Human Activity, Environmental Change, and the Climate Debate",
    intro: "Use these cards to trace how human activity, industrialization, urbanization, agriculture, and energy use, degraded the environment, intensified resource competition, and sparked debates about the causes and effects of climate change from 1900 to the present.",
    videos: [
      {
        title: "Heimler’s History, Topic 9.3: Debates About the Environment",
        url: "https://youtu.be/T0pDvAn2dKQ",
        youtubeId: "T0pDvAn2dKQ",
        prompt: "Use this clip to review how human activity shaped the environment after 1900, listen for examples of degradation, resource competition, and the climate debate."
      }
    ],
    segments: [
      {
        title: "Degrading the Environment: Deforestation, Desertification, Air Quality, and Freshwater",
        bullets: [
          "**Human activity contributed to deforestation** on a massive scale after 1900. In the Amazon basin, vast tracts of rainforest were cleared for cattle ranching, soybean farming, and logging. In Southeast Asia, tropical forests were destroyed for palm oil plantations. Deforestation reduced biodiversity, disrupted carbon cycles, and displaced indigenous communities whose livelihoods depended on the forest.",
          "**Desertification**, the expansion of desert conditions into previously arable land, accelerated across the Sahel region of Africa, Central Asia, and parts of China. Overgrazing, deforestation, and intensive agriculture stripped the soil of vegetation, leaving it vulnerable to wind erosion. The result was a shrinking supply of farmable land in regions already under population pressure.",
          "**A decline in air quality** accompanied industrialization and urbanization. Coal-burning factories and power plants produced smog that choked cities like London and Los Angeles in the mid-20th century. The Great Smog of London (1952) killed thousands and led to clean-air legislation. Industrial emissions, vehicle exhaust, and agricultural burning degraded air quality across rapidly growing cities worldwide.",
          "**Increased consumption of the world’s supply of fresh water** strained rivers, lakes, and aquifers. Agricultural irrigation, industrial use, and growing urban populations drew down water supplies faster than they could be replenished. The Aral Sea shrank dramatically after Soviet-era irrigation projects diverted its feeder rivers. Aquifer depletion threatened food production in regions dependent on groundwater.",
          "Each form of degradation was caused by specific human activities, industrialization, urbanization, commercial agriculture, and each produced measurable environmental effects: biodiversity loss, soil erosion, health impacts, and resource strain."
        ],
        image: {
          title: "Amazon deforestation",
          caption: "Large-scale clearing of the Amazon rainforest for agriculture and ranching illustrates how human activity contributed to deforestation after 1900.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rondonia_Deforestation.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Rondonia_Deforestation.jpg"
        }
      },
      {
        title: "Competition Over Scarce Resources",
        bullets: [
          "As environmental degradation reduced the supply of arable land, clean water, and clean air, **humans competed over these and other resources more intensely than ever before.** Resource competition was not new, but the scale and intensity of competition after 1900 reflected the combined pressure of population growth, industrialization, and environmental decline.",
          "**Water scarcity** became a source of tension between nations sharing river systems. Disputes over the Nile, the Jordan, the Tigris–Euphrates, and the Mekong involved competing agricultural, industrial, and urban demands. Dam-building by upstream nations reduced flow to downstream populations, creating diplomatic and sometimes military confrontation.",
          "**Land competition** intensified as desertification and deforestation shrank the supply of productive agricultural land. In the Sahel, competition between pastoralists and settled farmers over shrinking grazing and farming land contributed to social tensions and conflict. Deforestation in Southeast Asia displaced indigenous communities and created disputes over land rights.",
          "**Fisheries, minerals, and energy resources** also became objects of intensified competition. Overfishing depleted ocean stocks, leading to international disputes over fishing rights. Competition for oil, natural gas, and mineral resources shaped geopolitics throughout the 20th and 21st centuries.",
          "The CED’s phrase, “more intensely than ever before”, signals that this competition was not simply a continuation of earlier patterns but a qualitative escalation driven by environmental change and population growth."
        ],
        image: {
          title: "Aral Sea decline",
          caption: "The dramatic shrinkage of the Aral Sea, caused by Soviet-era irrigation diversions, illustrates how human freshwater consumption reshaped environments and intensified resource competition.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/AralSea1989_2014.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:AralSea1989_2014.jpg"
        }
      },
      {
        title: "The Climate Debate: Greenhouse Gases, Pollutants, and International Responses",
        bullets: [
          "Throughout the 20th century, the burning of coal, oil, and natural gas released **greenhouse gases and pollutants into the atmosphere** at an accelerating rate. Carbon dioxide, methane, and other heat-trapping gases accumulated, contributing to a measurable rise in global average temperatures.",
          "By the late 20th century, a **scientific consensus** emerged linking human activity, particularly the burning of fossil fuels, to climate change. The Intergovernmental Panel on Climate Change (IPCC), established in 1988, synthesized research from thousands of scientists and concluded that human-caused greenhouse gas emissions were the dominant cause of observed warming.",
          "This scientific consensus **contributed to debates about the nature and causes of climate change.** The debates were not only scientific but economic and political. Nations that depended on fossil fuel extraction resisted emissions limits. Developing nations argued that wealthy industrialized countries had caused most historical emissions and should bear the greatest responsibility for reducing them.",
          "**International responses** reflected these tensions. The Kyoto Protocol (1997) set binding emissions targets for industrialized nations but exempted developing countries, and the United States ultimately did not ratify it. The Paris Agreement (2015) adopted a different framework, voluntary national pledges from all participating nations, but critics questioned whether voluntary commitments would be sufficient to limit warming.",
          "The climate debate illustrates the ENV thematic focus from the reverse direction: populations shaped their environment through fossil fuel use, and the environmental consequences, rising temperatures, extreme weather, sea-level rise, in turn reshaped societies and their political choices."
        ],
        image: {
          title: "Industrial emissions and climate change",
          caption: "The release of greenhouse gases from industrial sources contributed to debates about the nature and causes of climate change in the late 20th and early 21st centuries.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Greenhouse_Gas_by_Sector.png"
        }
      }
    ]
  },

  map: {
    title: "Environmental Change and Resource Competition After 1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rondonia_Deforestation.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rondonia_Deforestation.jpg",
    caption: "Human activity, industrialization, agriculture, urbanization, degraded environments across the globe, from deforested rainforests to shrinking water supplies to polluted cities.",
    intro: "Use this image to consider how human activity shaped and degraded environments in different regions after 1900. Think about the causes (what human activities drove the change) and the effects (what environmental and social consequences followed).",
    prompt: "Identify one form of environmental degradation visible or implied in this image and explain both its cause (what human activity produced it) and its effect (what environmental or social consequence followed).",
    notes: [
      "Deforestation in the Amazon and Southeast Asia was driven by commercial agriculture, ranching, and logging, reducing biodiversity and disrupting carbon cycles.",
      "Desertification in the Sahel resulted from overgrazing, deforestation, and intensive farming, shrinking arable land and intensifying competition.",
      "Air pollution from industrial emissions, vehicle exhaust, and burning choked cities worldwide, the Great Smog of London (1952) killed thousands.",
      "Freshwater depletion from irrigation, industry, and urban growth strained rivers and aquifers, the Aral Sea shrank dramatically from Soviet-era diversions."
    ]
  },

  first10: {
    title: "First & 10: Human Activity, Environmental Change, and the Climate Debate",
    embedUrl: "first-and-10-topic-9-3-environment-capture.html?v=20260628"
  },

  images: [
    {
      title: "Deforestation in Rondônia, Brazil",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rondonia_Deforestation.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rondonia_Deforestation.jpg",
      caption: "Satellite image of deforestation in the Brazilian state of Rondônia, large-scale clearing for cattle ranching and agriculture transformed the landscape.",
      prompt: "What human activities caused this deforestation, and what environmental effects would follow from clearing this much forest?"
    },
    {
      title: "The Aral Sea, 1989 vs. 2014",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/AralSea1989_2014.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:AralSea1989_2014.jpg",
      caption: "The Aral Sea shrank dramatically after Soviet-era irrigation projects diverted its feeder rivers, an extreme example of freshwater consumption reshaping the environment.",
      prompt: "What human activity caused the Aral Sea to shrink, and what were the environmental and social effects on the communities that depended on it?"
    },
    {
      title: "Global Greenhouse Gas Emissions by Sector",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Greenhouse_Gas_by_Sector.png",
      caption: "Greenhouse gas emissions from energy, industry, agriculture, and transportation contributed to debates about the causes of climate change.",
      prompt: "How does this data help explain why the climate debate was so contentious, and why different nations had different views on who should bear the cost of reducing emissions?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Human Activity and Environmental Change",
    task: "Choose one image and explain what it reveals about how human activity caused environmental change after 1900. Identify the specific human activity, the form of environmental degradation, and at least one effect.",
    prompt: "This image shows... It is evidence of [choose: deforestation / desertification / air pollution / freshwater depletion / greenhouse gas emissions] because... The human activity that caused this was... and the effect was..."
  },

  primarySource: {
    title: "Primary Source: Rachel Carson, Silent Spring (1962)",
    intro: "In 1962, American biologist Rachel Carson published Silent Spring, a book that documented the environmental damage caused by the widespread use of synthetic pesticides, particularly DDT. The book argued that human activity was poisoning the natural world, and that the consequences would eventually reach human populations. Silent Spring is widely credited with launching the modern environmental movement and contributing to the creation of the U.S. Environmental Protection Agency (1970).",
    text: "There was once a town in the heart of America where all life seemed to live in harmony with its surroundings... Then a strange blight crept over the area and everything began to change... There was a strange stillness... The few birds seen anywhere were moribund; they trembled violently and could not fly. It was a spring without voices. On the mornings that had once throbbed with the dawn chorus of robins, catbirds, doves, jays, wrens, and scores of other bird voices there was now no sound; only silence lay over the fields and woods and marsh.",
    questions: [
      "Carson describes a landscape where human activity has silenced nature. What specific form of environmental degradation is she documenting, and what human activity caused it?",
      "How does this source illustrate the CED statement that human activity contributed to environmental change after 1900? What is the cause-and-effect chain Carson is tracing?",
      "Silent Spring helped launch the modern environmental movement. How does this connect to KC-6.1.II.B, that environmental changes contributed to debates about nature, causes, and effects?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Lake That Disappeared",
    desc: "An entire sea vanished within a single generation, and the people who drained it called it progress.",
    intro: "In the 1960s, the Aral Sea was the fourth-largest lake in the world. By 2014, it had nearly disappeared.",
    detail: "Soviet central planners diverted the two rivers that fed the Aral Sea to irrigate cotton fields in Uzbekistan and Kazakhstan. The cotton harvests were enormous. The lake died.",
    text: "In the 1960s, the Aral Sea was the fourth-largest lake in the world, straddling the border between Kazakhstan and Uzbekistan. Fishing communities lined its shores. Its waters supported an ecosystem that had existed for millennia. Then Soviet central planners decided that the region’s future was cotton. They diverted the Amu Darya and Syr Darya, the two rivers that fed the Aral Sea, into a vast network of irrigation canals. The cotton harvests were enormous. And the lake began to shrink. By the 1990s, the Aral Sea had lost more than half its surface area. By 2014, the eastern basin had vanished entirely. The exposed lakebed became a salt flat, and windstorms carried toxic dust, laced with pesticides and fertilizer residue, across the surrounding region. Respiratory disease rates soared. The fishing industry collapsed. An entire way of life disappeared. The planners who diverted the rivers knew the lake would shrink. They calculated that the cotton revenue would be worth more than the water. They were not wrong about the cotton. They were wrong about everything else.",
    prompt: "The Soviet planners who drained the Aral Sea knew the lake would shrink but calculated that cotton revenue justified the cost. What does this reveal about how societies weigh short-term economic gain against long-term environmental consequences, and who bears the cost when the calculation is wrong?"
  },

  skillBuilder: {
    label: "Causation practice",
    title: "Trace the Causes and Effects of Environmental Change",
    intro: "The ENV thematic focus states that “populations in turn shape their environments.” This skill practice asks you to trace the causal chain from a specific human activity to an environmental change, explaining both the cause and the effect.",
    steps: [
      { label: "Human Activity", text: "Choose one human activity: industrialization, urbanization, commercial agriculture, fossil fuel combustion, irrigation, or deforestation." },
      { label: "Environmental Change", text: "Choose one form of environmental change from this topic: deforestation, desertification, declining air quality, freshwater depletion, or greenhouse gas accumulation." },
      { label: "Cause-and-Effect Chain", text: "Explain HOW the human activity caused the environmental change, and what effect followed. Be specific: what was the mechanism? Where did it happen? What was the measurable consequence?" }
    ],
    prompt: "Write a causation paragraph explaining how one human activity caused one form of environmental change after 1900. Your paragraph should name the activity, identify the environmental change, and explain the cause-and-effect chain, not just state that the activity and the change are connected."
  }
};
