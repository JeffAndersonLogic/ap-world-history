// lesson-9-3-renderer-config.js
// Topic 9.3, Technological Advances, Debates About the Environment After 1900
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// Topic 9.3 has NO illustrative examples, all illustrativeExamples arrays are empty.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Humans and the Environment (ENV)",
      "theme": "Humans and the Environment",
      "text": "The environment shapes human societies, and as populations grow and change, these populations in turn shape their environments.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 9: Learning Objective C",
      "theme": "Learning Objective",
      "text": "Explain the causes and effects of environmental changes in the period from 1900 to the present.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.II.A",
      "theme": "Humans and the Environment",
      "text": "As human activity contributed to deforestation, desertification, a decline in air quality, and increased consumption of the world’s supply of fresh water, humans competed over these and other resources more intensely than ever before.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.II.B",
      "theme": "Humans and the Environment",
      "text": "The release of greenhouse gases and pollutants into the atmosphere contributed to debates about the nature and causes of climate change.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Human Activity, Environmental Change, and the Climate Debate',
    embedUrl: 'first-and-10-topic-9-3-environment-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 9.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Environmental degradation', detail: 'Human activity contributed to deforestation, desertification, declining air quality, and increased freshwater consumption, each driven by specific causes (industrialization, agriculture, urbanization) and producing measurable effects.' },
      { label: 'Resource competition', detail: 'As degradation reduced the supply of arable land, clean water, and other resources, humans competed over them more intensely than ever before, producing social tensions and geopolitical conflict.' },
      { label: 'The climate debate', detail: 'The release of greenhouse gases from fossil fuel combustion contributed to a scientific consensus on climate change, and to contested international debates about who should bear the cost of action.' },
      { label: 'Geographic takeaway', detail: 'The geography of environmental change after 1900 reflects the uneven distribution of industrial activity, resource consumption, and vulnerability: the nations that caused the most degradation were not always the ones that bore its worst effects.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/AralSea1989_2014.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/AralSea1989_2014.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-9/climate-summit.html',
    desc: 'An international climate summit, late 20th century. You advise a rapidly industrializing developing nation. Wealthy nations want emissions cuts. Your nation needs growth and did not cause the problem. What commitment do you bring to the table?'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Lake That Disappeared',
    desc: 'An entire sea vanished within a single generation, and the people who drained it called it progress.',
    intro: 'In the 1960s, the Aral Sea was the fourth-largest lake in the world. By 2014, it had nearly disappeared.',
    detail: 'Soviet central planners diverted the two rivers that fed the Aral Sea to irrigate cotton fields in Uzbekistan and Kazakhstan. The cotton harvests were enormous. The lake died.',
    text: 'In the 1960s, the Aral Sea was the fourth-largest lake in the world, straddling the border between Kazakhstan and Uzbekistan. Fishing communities lined its shores. Its waters supported an ecosystem that had existed for millennia. Then Soviet central planners decided that the region’s future was cotton. They diverted the Amu Darya and Syr Darya, the two rivers that fed the Aral Sea, into a vast network of irrigation canals. The cotton harvests were enormous. And the lake began to shrink. By the 1990s, the Aral Sea had lost more than half its surface area. By 2014, the eastern basin had vanished entirely. The exposed lakebed became a salt flat, and windstorms carried toxic dust, laced with pesticides and fertilizer residue, across the surrounding region. Respiratory disease rates soared. The fishing industry collapsed. An entire way of life disappeared. The planners who diverted the rivers knew the lake would shrink. They calculated that the cotton revenue would be worth more than the water. They were not wrong about the cotton. They were wrong about everything else.',
    prompt: 'The Soviet planners who drained the Aral Sea knew the lake would shrink but calculated that cotton revenue justified the cost. What does this reveal about how societies weigh short-term economic gain against long-term environmental consequences, and who bears the cost when the calculation is wrong?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Trace the Causes and Effects of Environmental Change',
    intro: 'The ENV thematic focus states that “populations in turn shape their environments.” This skill practice asks you to trace the causal chain from a specific human activity to an environmental change, explaining both the cause and the effect.',
    steps: [
      { label: 'Human Activity', text: 'Choose one human activity: industrialization, urbanization, commercial agriculture, fossil fuel combustion, irrigation, or deforestation.' },
      { label: 'Environmental Change', text: 'Choose one form of environmental change from this topic: deforestation, desertification, declining air quality, freshwater depletion, or greenhouse gas accumulation.' },
      { label: 'Cause-and-Effect Chain', text: 'Explain HOW the human activity caused the environmental change, and what effect followed. Be specific: what was the mechanism? Where did it happen? What was the measurable consequence?' }
    ],
    prompt: 'Write a causation paragraph explaining how one human activity caused one form of environmental change after 1900. Your paragraph should name the activity, identify the environmental change, and explain the cause-and-effect chain, not just state that the activity and the change are connected.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Environmental Degradation and Resource Competition',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'How human activity degraded the environment and intensified resource competition after 1900.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how human activity caused environmental change after 1900. In your response, explain at least ONE form of environmental degradation (deforestation, desertification, declining air quality, or freshwater depletion) and explain how that degradation intensified competition over resources. For each, identify the specific human activity that caused the change and use specific historical evidence.',
      responseType: 'Checkpoint 1',
      terms: ['deforestation', 'desertification', 'air quality', 'fresh water', 'competition', 'resources', 'industrialization', 'urbanization', 'agriculture', 'irrigation', 'Amazon', 'Sahel', 'Aral Sea', 'smog', 'environmental'],
      focus: ['Name at least one form of environmental degradation and identify the human activity that caused it.', 'Explain how that degradation intensified competition over resources.', 'Use specific evidence, places, dates, measurable effects, for each claim.']
    },
    {
      title: 'Checkpoint 2: Causes and Effects of Environmental Change — A Causation Argument',
      subtitle: 'Checks all three Learning Targets and all three Success Criteria.',
      cardDesc: 'Argue the causes and effects of environmental changes from 1900 to the present.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Write a causation argument explaining the causes and effects of environmental changes from 1900 to the present. Your argument must address at least ONE form of environmental degradation (LT1) and the climate debate (LT3). For each, explain the specific human activity that caused the change and the effects that followed. Use specific historical evidence.',
      responseType: 'Checkpoint 2',
      terms: ['causation', 'environmental', 'deforestation', 'desertification', 'air quality', 'fresh water', 'greenhouse gases', 'pollutants', 'climate change', 'debate', 'Kyoto', 'Paris', 'competition', 'resources', 'industrialization', 'fossil fuel'],
      focus: ['Open with a clear claim about how human activity caused environmental change after 1900.', 'Address at least one form of environmental degradation with its cause and effect.', 'Address the climate debate, explain how greenhouse gas emissions contributed to debates about climate change.', 'Explain the causal mechanism, how and why the human activity produced the environmental change, not just that it did.']
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Build and Test a Claim',
    task: 'Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.',
    prompt: 'Explain the causes and effects of environmental change after 1900. Use at least one measured environmental change and one policy or debate card, and explain the causal chain rather than simply listing problems.'
  };

  lesson.images = [
    {
      title: 'Deforestation in Rondônia, Brazil',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fires_and_Deforestation_on_the_Amazon_Frontier%2C_Rondonia%2C_Brazil_-_August_12%2C_2007.jpg',
      caption: 'Satellite image of deforestation in the Brazilian state of Rondônia, large-scale clearing for cattle ranching and agriculture transformed the landscape.',
      prompt: 'What human activities caused this deforestation, and what environmental effects would follow from clearing this much forest?'
    },
    {
      title: 'The Aral Sea, 1989 vs. 2014',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/AralSea1989_2014.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:AralSea1989_2014.jpg',
      caption: 'The Aral Sea shrank dramatically after Soviet-era irrigation projects diverted its feeder rivers, an extreme example of freshwater consumption reshaping the environment.',
      prompt: 'What human activity caused the Aral Sea to shrink, and what were the environmental and social effects on the communities that depended on it?'
    },
    {
      title: 'Global Greenhouse Gas Emissions by Sector',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Greenhouse_Gas_by_Sector.png',
      caption: 'Greenhouse gas emissions from energy, industry, agriculture, and transportation contributed to debates about the causes of climate change.',
      prompt: 'How does this data help explain why the climate debate was so contentious, and why different nations had different views on who should bear the cost of reducing emissions?'
    },
    {
      title: 'The Keeling Curve',
      label: 'Atmospheric measurement series · Mauna Loa Observatory, 1958 onward',
      sourceText: [
        'Direct measurements recorded a long-term rise in atmospheric carbon dioxide concentration.',
        'The record also shows a repeating seasonal cycle superimposed on the upward trend.'
      ],
      caption: 'One instrument on one Hawaiian mountain, measuring the same thing continuously since 1958. The longest direct atmospheric record there is.',
      prompt: 'What does this measurement establish, and what does it not establish by itself about the causes or effects of climate change?'
    },
    {
      title: 'Kyoto Protocol',
      label: 'International-policy record · adopted 1997',
      sourceText: [
        'The treaty created binding greenhouse-gas targets for many industrialized countries under a differentiated responsibility framework.',
        'Participation and implementation varied, and major emitters did not all accept the same obligations.'
      ],
      caption: 'The first treaty to set binding emissions targets, and the differentiated framework that made it contentious.',
      prompt: 'How does this policy record prove that climate change became an international political debate? What does treaty adoption not prove about emissions outcomes?'
    },
    {
      title: 'Freshwater competition in the Colorado River basin',
      label: 'Water-allocation record · United States and Mexico, 20th-21st centuries',
      sourceText: [
        'Dams, irrigation, cities, and agriculture allocated nearly all of the river\'s flow before it reached the sea in many years.',
        'States, tribes, farmers, cities, and Mexico negotiated over limited water supplies.'
      ],
      caption: 'A single river basin allocated among states, tribes, farmers and cities until, in many years, none of it reaches the sea.',
      prompt: 'What connection between consumption and resource competition is visible here? What climate evidence would be needed to separate demand pressure from drought?'
    }
  ];

})();
