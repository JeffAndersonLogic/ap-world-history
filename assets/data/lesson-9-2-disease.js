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
    topic: "Topic 9.2",
    title: "Technological Advances and Limitations After 1900: Disease",
    subtitle: "How environmental factors — sanitation, density, climate, and urbanization — shaped disease patterns and affected human populations from 1900 to the present",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how diseases associated with poverty, malaria, tuberculosis, and cholera, persisted among vulnerable populations, and how environmental conditions shaped their spread.",
      kc: "KC-6.1.III.A",
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain how emergent epidemic diseases, including the 1918 influenza pandemic, Ebola, and HIV/AIDS, became new threats to human populations, sometimes caused social disruption, and spurred medical and technological advances.",
      kc: "KC-6.1.III.A",
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain how increased longevity raised the incidence of diseases such as heart disease and Alzheimer's disease.",
      kc: "KC-6.1.III.A",
      theme: "Humans and the Environment"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific examples, malaria, tuberculosis, and cholera, to explain how poverty, inadequate sanitation, and environmental conditions sustained diseases among vulnerable populations after 1900.",
      kc: "KC-6.1.III.A",
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain how emergent epidemics, the 1918 influenza pandemic, Ebola, and HIV/AIDS, spread along dense population and travel networks, caused social disruption, and spurred technological and medical advances.",
      kc: "KC-6.1.III.A",
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain the connection between increased life expectancy and the rising incidence of heart disease and Alzheimer's disease, and connect this pattern to broader demographic and environmental changes.",
      kc: "KC-6.1.III.A",
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
      code: "Unit 9: Learning Objective B",
      theme: "Learning Objective",
      text: "Explain how environmental factors affected human populations over time.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.III",
      theme: "Humans and the Environment",
      text: "Diseases, as well as medical and scientific developments, had significant effects on populations around the world.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.III.A",
      theme: "Humans and the Environment",
      text: "Diseases associated with poverty persisted while other diseases emerged as new epidemics and threats to human populations, in some cases leading to social disruption. These outbreaks spurred technological and medical advances. Some diseases occurred at higher incidence merely because of increased longevity.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Disease, Environment, and Population: How Disease Shaped the Modern World",
    intro: "Use these cards to trace how environmental factors, sanitation, density, climate, urbanization, and travel networks, shaped disease patterns and affected human populations from 1900 to the present.",
    videos: [
      {
        title: "Heimler's History — Topic 9.2: Technological Advances and Limitations — Disease",
        url: "https://youtu.be/pGbqiCi_GaQ",
        youtubeId: "pGbqiCi_GaQ",
        prompt: "Use this clip to review how diseases affected human populations after 1900, listen for the three categories of disease and how environmental factors shaped each."
      }
    ],
    segments: [
      {
        title: "Diseases of Poverty: Malaria, Tuberculosis, and Cholera",
        bullets: [
          "**Diseases associated with poverty** did not disappear in the modern era, they persisted among populations living in conditions that sustained them: inadequate sanitation, contaminated water, crowded housing, and limited healthcare access.",
          "**Malaria** remained one of the world's deadliest diseases throughout the 20th century, sustained by tropical climates, standing water that bred mosquito vectors, and the inability of impoverished communities to afford prevention measures like insecticide-treated nets or drainage systems.",
          "**Tuberculosis (TB)** thrived in crowded, poorly ventilated urban environments, the same conditions that industrialization and rapid urbanization created. Drug-resistant strains of TB emerged as an ongoing challenge, making treatment longer, more expensive, and less certain.",
          "**Cholera** outbreaks continued wherever contaminated water supplies and inadequate sewage systems persisted. Major outbreaks in the 20th and 21st centuries, including devastating waves in South Asia, sub-Saharan Africa, and Haiti, demonstrated that the environmental conditions sustaining cholera were as much about poverty and infrastructure as about the bacterium itself.",
          "The persistence of these diseases illustrates the ENV thematic focus: environmental conditions, sanitation, housing, water access, vector ecology, shaped which populations remained vulnerable."
        ],
        image: {
          title: "Mosquito — malaria vector",
          caption: "Malaria persisted wherever tropical climates, standing water, and poverty intersected, environmental conditions that sustained the mosquito vectors carrying the disease.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Anopheles_albimanus_mosquito.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Anopheles_albimanus_mosquito.jpg"
        }
      },
      {
        title: "Emergent Epidemics: 1918 Influenza, Ebola, and HIV/AIDS",
        bullets: [
          "New diseases emerged as **epidemics and threats to human populations** throughout the 20th century, spreading along the dense population networks and travel routes that globalization created.",
          "The **1918 influenza pandemic** killed tens of millions worldwide in roughly 18 months. Wartime conditions, crowded military camps, troop transport by rail and ship, censorship that suppressed public health warnings, created the environmental conditions for catastrophic spread. Cities that implemented early closure orders experienced significantly lower per-capita mortality than those that delayed.",
          "**Ebola** emerged in Central Africa in the 1970s and produced devastating outbreaks, particularly the 2014–2016 West African epidemic. Dense urban areas with limited healthcare infrastructure amplified transmission. The outbreak spurred international investment in vaccine development and emergency response systems.",
          "**HIV/AIDS** became one of the defining health crises of the late 20th century. First identified in the early 1980s, HIV spread globally through sexual contact, blood transfusion, and needle-sharing. Sub-Saharan Africa was hit hardest, with the disease causing massive social disruption, orphaning millions of children, reducing life expectancy by decades in some countries, and overwhelming healthcare systems.",
          "These outbreaks **spurred technological and medical advances**: the 1918 pandemic drove modern epidemiology and public health infrastructure; Ebola accelerated vaccine research; HIV/AIDS spurred antiretroviral drug development and global health funding."
        ],
        image: {
          title: "Emergency hospital during the 1918 influenza pandemic",
          caption: "Camp Funston, Kansas, 1918, crowded military camps became transmission accelerators during the influenza pandemic, illustrating how environmental density shaped disease outcomes.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Emergency_hospital_during_Influenza_epidemic,_Camp_Funston,_Kansas_-_NCP_1603.jpg"
        }
      },
      {
        title: "Diseases of Longevity: Heart Disease and Alzheimer's Disease",
        bullets: [
          "As medical and public-health advances extended life expectancy across the 20th century (Topic 9.1: vaccines, antibiotics), the global disease burden shifted. **Some diseases occurred at higher incidence merely because of increased longevity**, people lived long enough to develop conditions that earlier generations rarely survived to experience.",
          "**Heart disease** became the leading cause of death in industrialized nations by the mid-20th century. Urbanization, sedentary lifestyles, processed food diets, and smoking, all features of modern industrial environments, contributed to rising rates. Heart disease was not new, but its prevalence as a mass killer was a direct consequence of longer lives and changed environments.",
          "**Alzheimer's disease** and other forms of dementia emerged as major public health challenges as populations aged. A disease that was rarely diagnosed before the 20th century became one of the most common causes of death in wealthy nations, not because it was new, but because people now lived long enough to develop it.",
          "The diseases-of-longevity pattern reveals a paradox at the heart of the ENV theme: the same medical advances that extended human life also shifted the disease burden toward conditions that medicine could manage but not cure."
        ],
        image: {
          title: "Aging population and healthcare",
          caption: "As life expectancy rose, diseases associated with aging, heart disease and Alzheimer's, became leading causes of death in industrialized nations.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Life_expectancy_by_world_region%2C_from_1770_to_2018.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Life_expectancy_by_world_region,_from_1770_to_2018.svg"
        }
      }
    ]
  },

  map: {
    title: "Disease, Environment, and Population After 1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Emergency_hospital_during_Influenza_epidemic,_Camp_Funston,_Kansas_-_NCP_1603.jpg",
    caption: "Environmental factors, sanitation, density, climate, urbanization, and travel networks, shaped which populations were most vulnerable to disease after 1900.",
    intro: "Use the map to identify how environmental conditions shaped disease patterns across different regions. Consider how poverty, climate, urbanization, and travel networks created different disease burdens in different parts of the world.",
    prompt: "Identify two regions on the map and explain how a specific environmental factor shaped the disease burden in each region differently after 1900.",
    notes: [
      "Diseases of poverty, malaria, TB, cholera, concentrated in tropical and under-resourced regions where sanitation, healthcare, and infrastructure remained limited.",
      "Emergent epidemics spread along travel and trade networks: the 1918 influenza followed troop movements; HIV/AIDS spread along trucking and trade routes; Ebola amplified in dense urban areas.",
      "Diseases of longevity, heart disease, Alzheimer's, concentrated in industrialized nations where life expectancy rose earliest.",
      "The geography of disease after 1900 is a map of environmental and economic inequality."
    ]
  },

  first10: {
    title: "First & 10: Disease, Environment, and Population",
    embedUrl: "first-and-10-topic-9-2-disease-capture.html?v=20260628"
  },

  images: [
    {
      title: "Emergency Hospital, Camp Funston, Kansas, 1918",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Emergency_hospital_during_Influenza_epidemic,_Camp_Funston,_Kansas_-_NCP_1603.jpg",
      caption: "Crowded military camps during World War I became transmission accelerators for the 1918 influenza pandemic, density and movement shaped the epidemic's catastrophic spread.",
      prompt: "What environmental and population factors visible in this image help explain why the 1918 influenza spread so rapidly among military populations?"
    },
    {
      title: "Malaria Prevention — Insecticide-Treated Net",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Anopheles_albimanus_mosquito.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Anopheles_albimanus_mosquito.jpg",
      caption: "Malaria persisted wherever tropical climates, standing water, and poverty intersected, environmental conditions that sustained the mosquito vectors carrying the disease.",
      prompt: "Why has malaria persisted as a major killer in some regions while being eliminated in others? What environmental and economic factors explain the difference?"
    },
    {
      title: "Global Life Expectancy Trends",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Life_expectancy_by_world_region%2C_from_1770_to_2018.svg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Life_expectancy_by_world_region,_from_1770_to_2018.svg",
      caption: "Rising life expectancy shifted the disease burden toward non-communicable conditions, heart disease and Alzheimer's, that earlier generations rarely survived to experience.",
      prompt: "How does rising life expectancy create new public health challenges? What is the connection between longer lives and the diseases of longevity?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Environment, Disease, and Population",
    task: "Choose one image and explain what it reveals about how an environmental factor, sanitation, density, climate, urbanization, or travel networks, shaped a disease's effect on a human population after 1900.",
    prompt: "This image shows... It is evidence of [choose: diseases of poverty persisting / emergent epidemics spreading / diseases of longevity rising] because... The environmental factor that shaped this outcome was..."
  },

  primarySource: {
    title: "Primary Source: A Military Doctor's Account of the 1918 Influenza at Camp Devens (September 1918)",
    intro: "In September 1918, a physician stationed at Camp Devens, a military training camp near Boston, Massachusetts, wrote to a colleague describing the influenza outbreak overwhelming the camp. The letter captures the speed and scale of the epidemic in a densely crowded military environment, and the limits of medical knowledge at the time.",
    text: "These men start with what appears to be an ordinary attack of LaGrippe or Influenza, and when brought to the Hosp. they very rapidly develop the most vicious type of Pneumonia that has ever been seen. Two hours after admission they have the Mahogany spots over the cheek bones, and a few hours later you can begin to see the Cyanosis extending from their ears and spreading all over the face... It is only a matter of a few hours then until death comes... We have been gruesome enough, so gruesome that we gruesome ourselves now... It beats any sight they ever had in France after a battle.",
    questions: [
      "What does this letter reveal about the environmental conditions at Camp Devens that made it vulnerable to the 1918 influenza? How did military density and crowding shape the outbreak's severity?",
      "The doctor compares the camp to a battlefield. What does this comparison suggest about the scale of the epidemic, and about the limits of medical technology in 1918?",
      "How does this source illustrate the CED statement that emergent epidemic diseases became 'new threats to human populations, in some cases leading to social disruption'? What kind of social disruption does this letter describe?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Name Nobody Questioned",
    desc: "A pandemic that killed tens of millions was named after the one country honest enough to report it.",
    intro: "In the spring of 1918, a new strain of influenza began spreading across the world. It would eventually kill more people than World War I itself.",
    detail: "But the countries fighting the war, Britain, France, Germany, the United States, censored reports of the illness to maintain wartime morale. Spain, which was neutral and had a free press, reported its cases openly. So the world called it the 'Spanish Flu.'",
    text: "In the spring of 1918, a new strain of influenza began spreading across the world. It would eventually kill more people than World War I itself. But the countries fighting the war, Britain, France, Germany, the United States, censored reports of the illness to maintain wartime morale. Soldiers were dying in camps and on troop ships, but governments suppressed the news. Spain, which was neutral in the war and had no military censorship, reported its cases openly. Spanish newspapers covered the outbreak extensively, including King Alfonso XIII's own illness. So the world called it the 'Spanish Flu', not because it started in Spain, but because Spain was the only major European country honest enough to talk about it. The name stuck. A century later, we still call it the Spanish Flu, even though its most likely origins were in the United States or Europe. The name itself is a wartime artifact, a reminder that what we call a disease often says more about politics than about biology.",
    prompt: "The 1918 pandemic was named after the country most honest about reporting it, while the countries that censored their outbreaks escaped the stigma. What does this reveal about how information, power, and naming shape the way societies respond to disease?"
  },

  skillBuilder: {
    label: "Causation practice",
    title: "Trace How Environmental Factors Shaped Disease Outcomes",
    intro: "The ENV thematic focus states that 'the environment shapes human societies.' This skill practice asks you to trace the causal chain from a specific environmental factor to a disease outcome, explaining how the environment shaped a population's vulnerability.",
    steps: [
      { label: "Environmental Factor", text: "Choose one environmental factor: sanitation, urban density, climate/vector ecology, military crowding, travel networks, or urbanization/diet change." },
      { label: "Disease", text: "Choose one disease from this topic: malaria, tuberculosis, cholera, 1918 influenza, Ebola, HIV/AIDS, heart disease, or Alzheimer's disease." },
      { label: "Causal Mechanism", text: "Explain HOW the environmental factor shaped the disease's effect on a human population. Be specific: what was the mechanism? Who was affected? What was the outcome?" }
    ],
    prompt: "Write a causation paragraph explaining how one environmental factor shaped the effect of one disease on a human population after 1900. Your paragraph should name the factor, identify the disease, and explain the causal mechanism, not just state that the factor and disease are connected."
  }
};
