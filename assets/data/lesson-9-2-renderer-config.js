// lesson-9-2-renderer-config.js
// Topic 9.2, Technological Advances and Limitations After 1900: Disease
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// Topic 9.2 HAS illustrative examples, exactly eight in three named groups.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Humans and the Environment (ENV)',
      theme: 'Humans and the Environment',
      text: 'The environment shapes human societies, and as populations grow and change, these populations in turn shape their environments.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 9: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Explain how environmental factors affected human populations over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.III',
      theme: 'Humans and the Environment',
      text: 'Diseases, as well as medical and scientific developments, had significant effects on populations around the world.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.1.III.A',
      theme: 'Humans and the Environment',
      text: 'Diseases associated with poverty persisted while other diseases emerged as new epidemics and threats to human populations, in some cases leading to social disruption. These outbreaks spurred technological and medical advances. Some diseases occurred at higher incidence merely because of increased longevity.',
      illustrativeExamples: [
        '<strong>Diseases associated with poverty:</strong>',
        'Malaria',
        'Tuberculosis',
        'Cholera',
        '<strong>Emergent epidemic diseases:</strong>',
        '1918 influenza pandemic',
        'Ebola',
        'HIV/AIDS',
        '<strong>Diseases associated with increased longevity:</strong>',
        'Heart disease',
        'Alzheimer’s disease'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Disease, Environment, and Population',
    embedUrl: 'first-and-10-topic-9-2-disease-capture.html?v=20260628',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 9.2 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Diseases of poverty', detail: 'Malaria, tuberculosis, and cholera persisted wherever inadequate sanitation, contaminated water, crowding, and limited healthcare sustained the environmental conditions for transmission.' },
      { label: 'Emergent epidemics', detail: 'The 1918 influenza pandemic spread along wartime troop movements; Ebola amplified in dense urban areas; HIV/AIDS followed trade, trucking, and migration routes, each epidemic shaped by the environmental and population networks of its era.' },
      { label: 'Diseases of longevity', detail: 'Heart disease and Alzheimer’s disease rose in industrialized nations as life expectancy increased, diseases that earlier generations rarely survived long enough to develop.' },
      { label: 'Geographic takeaway', detail: 'The geography of disease after 1900 maps directly onto environmental and economic inequality: diseases of poverty concentrated in under-resourced regions while diseases of longevity concentrated in wealthy ones.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anopheles_albimanus_mosquito.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anopheles_albimanus_mosquito.jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Life_expectancy_by_world_region%2C_from_1770_to_2018.svg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-9/influenza-1918.html',
    desc: 'A mid-sized U.S. city, autumn 1918. Influenza cases are appearing. Army camps are crowded. A war-bond parade is scheduled. You are an advisor to the city’s Health Commissioner. Do you issue closure orders now, or wait?'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Name Nobody Questioned',
    desc: 'A pandemic that killed tens of millions was named after the one country honest enough to report it.',
    intro: 'In the spring of 1918, a new strain of influenza began spreading across the world. It would eventually kill more people than World War I itself.',
    detail: 'But the countries fighting the war, Britain, France, Germany, the United States, censored reports of the illness to maintain wartime morale. Spain, which was neutral and had a free press, reported its cases openly. So the world called it the “Spanish Flu.”',
    text: 'In the spring of 1918, a new strain of influenza began spreading across the world. It would eventually kill more people than World War I itself. But the countries fighting the war, Britain, France, Germany, the United States, censored reports of the illness to maintain wartime morale. Soldiers were dying in camps and on troop ships, but governments suppressed the news. Spain, which was neutral in the war and had no military censorship, reported its cases openly. Spanish newspapers covered the outbreak extensively, including King Alfonso XIII’s own illness. So the world called it the “Spanish Flu”, not because it started in Spain, but because Spain was the only major European country honest enough to talk about it. The name stuck. A century later, we still call it the Spanish Flu, even though its most likely origins were in the United States or Europe. The name itself is a wartime artifact, a reminder that what we call a disease often says more about politics than about biology.',
    prompt: 'The 1918 pandemic was named after the country most honest about reporting it, while the countries that censored their outbreaks escaped the stigma. What does this reveal about how information, power, and naming shape the way societies respond to disease?'
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Trace How Environmental Factors Shaped Disease Outcomes',
    intro: 'The ENV thematic focus states that "the environment shapes human societies." This skill practice asks you to trace the causal chain from a specific environmental factor to a disease outcome, explaining how the environment shaped a population’s vulnerability.',
    steps: [
      { label: 'Environmental Factor', text: 'Choose one environmental factor: sanitation, urban density, climate/vector ecology, military crowding, travel networks, or urbanization/diet change.' },
      { label: 'Disease', text: 'Choose one disease from this topic: malaria, tuberculosis, cholera, 1918 influenza, Ebola, HIV/AIDS, heart disease, or Alzheimer’s disease.' },
      { label: 'Causal Mechanism', text: 'Explain HOW the environmental factor shaped the disease’s effect on a human population. Be specific: what was the mechanism? Who was affected? What was the outcome?' }
    ],
    prompt: 'Write a causation paragraph explaining how one environmental factor shaped the effect of one disease on a human population after 1900. Your paragraph should name the factor, identify the disease, and explain the causal mechanism, not just state that the factor and disease are connected.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Diseases of Poverty and Emergent Epidemics',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'How environmental factors sustained diseases of poverty and shaped emergent epidemics after 1900.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how environmental factors affected human populations through disease after 1900. In your response, explain how at least ONE disease associated with poverty persisted and how at least ONE emergent epidemic became a new threat. For each, identify the environmental or population factor that shaped the disease’s spread or impact. Use specific historical evidence.',
      responseType: 'Checkpoint 1',
      terms: ['malaria', 'tuberculosis', 'cholera', '1918 influenza', 'Ebola', 'HIV/AIDS', 'sanitation', 'density', 'crowding', 'poverty', 'travel', 'social disruption', 'medical advances', 'environmental'],
      focus: ['Name at least one disease of poverty and explain the environmental condition that sustained it.', 'Name at least one emergent epidemic and explain how population density or travel networks shaped its spread.', 'Use specific evidence, dates, places, measurable effects, for each disease.']
    },
    {
      title: 'Checkpoint 2: Environment, Disease, and Population, A Causation Argument',
      subtitle: 'Checks all three Learning Targets and all three Success Criteria.',
      cardDesc: 'Argue how environmental factors affected human populations through disease from 1900 to the present.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target, lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria, lesson.successCriteria[2].criteria],
      prompt: 'Write a causation argument explaining how environmental factors affected human populations through disease from 1900 to the present. Your argument must draw from at least TWO of the three disease categories (diseases of poverty, emergent epidemics, diseases of longevity). For each, explain the specific environmental or population factor that shaped the disease’s effect and use specific historical evidence.',
      responseType: 'Checkpoint 2',
      terms: ['causation', 'environmental', 'population', 'malaria', 'tuberculosis', 'cholera', '1918 influenza', 'Ebola', 'HIV/AIDS', 'heart disease', 'Alzheimer', 'longevity', 'sanitation', 'density', 'poverty', 'urbanization', 'social disruption'],
      focus: ['Open with a clear claim about how environmental factors affected human populations through disease.', 'Draw from at least two of the three disease categories.', 'For each disease, explain the specific environmental or population factor that shaped its impact.', 'Explain the causal mechanism, how and why the environmental factor shaped the disease outcome, not just that it did.']
    }
  ];

  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+9+-+Globalization&entry.187055090=9.2+-+Technology+and+Disease&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+9+-+Globalization&entry.187055090=9.2+-+Technology+and+Disease&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
