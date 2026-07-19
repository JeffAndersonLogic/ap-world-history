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
    unit: "Unit 7: Global Conflict",
    topic: "Topic 7.3",
    title: "Conducting World War I",
    subtitle: "The first total war: how governments mobilized whole societies — home countries and colonies — and how new military technology drove casualties to unprecedented levels",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why World War I is considered the first total war.",
      kc: "KC-6.2.IV.A.i",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how governments used propaganda, art, media, and intensified nationalism to mobilize populations in home countries and colonies.",
      kc: "KC-6.2.IV.A.i",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how new military technology led to increased levels of wartime casualties.",
      kc: "KC-6.1.III.C.i",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can define total war, civilians, industries, and government institutions all mobilized for the war effort, and use specific evidence to explain why World War I was the first war to fit that definition.",
      kc: "KC-6.2.IV.A.i",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can use specific evidence such as recruitment posters, government-commissioned art, newsreels, and colonial troops and labor to explain how governments mobilized populations in both home countries and colonies.",
      kc: "KC-6.2.IV.A.i",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can connect specific technologies, machine guns, trench warfare, tanks, aircraft, and chemical weapons, to the unprecedented casualty levels of World War I and the ethical questions they raised.",
      kc: "KC-6.1.III.C.i",
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Technology and Innovation (TEC)",
      theme: "Technology and Innovation",
      text: "Human adaptation and innovation have resulted in increased efficiency, comfort, and security, and technological advances have shaped human development and interactions with both intended and unintended consequences.",
      illustrativeExamples: []
    },
    {
      code: "Unit 7: Learning Objective C",
      theme: "Learning Objective",
      text: "Explain how governments used a variety of methods to conduct war.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.A.i",
      theme: "Governance",
      text: "World War I was the first total war. Governments used a variety of strategies, including political propaganda, art, media, and intensified forms of nationalism, to mobilize populations (both in the home countries and the colonies) for the purpose of waging war.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.1.III.C.i",
      theme: "Technology and Innovation",
      text: "New military technology led to increased levels of wartime casualties.",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Conducting World War I: The First Total War",
    intro: "Use these cards to track how governments waged the first total war, mobilizing civilians, industries, art, media, and colonial empires, and how new military technology drove casualties to levels no one had imagined.",
    videos: [
      {
        title: "Heimler's History — AP World Topic 7.3",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.3+Conducting+World+War+I",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheshire_Regiment_trench_Somme_1916.jpg",
        prompt: "Watch for the meaning of total war, the strategies governments used to mobilize home and colonial populations, and how new technology raised casualty levels."
      }
    ],
    segments: [
      {
        title: "The First Total War",
        bullets: [
          "Pick up where Topic 7.2 ended: the alliance chain reaction has detonated, the armies have marched, and the war has not ended by Christmas. The question now is **how entire societies, not just armies, wage war**.",
          "World War I was the **first total war**: **civilians, industries, and government institutions** were all mobilized for the war effort.",
          "Factories converted to munitions; food and fuel were rationed; women entered war industries; governments took control of railroads, prices, and news, the line between battlefront and home front dissolved."
        ],
        image: {
          title: "British trench on the Somme, 1916",
          caption: "Men of the Cheshire Regiment in a trench on the Somme, the industrial battlefield that whole societies were mobilized to supply.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheshire_Regiment_trench_Somme_1916.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Cheshire_Regiment_trench_Somme_1916.jpg"
        }
      },
      {
        title: "Propaganda as a Weapon",
        bullets: [
          "Governments turned persuasion into a weapon: **political propaganda**, posters, pamphlets, and films, shaped public opinion on an industrial scale.",
          "Propaganda **demonized the enemy**, turning rival nations into monsters and atrocity stories into recruiting tools.",
          "Enlistment became **patriotic duty**: Lord Kitchener's **'Your Country Needs You'** in Britain and **'Uncle Sam Wants You'** in the United States made the state's demand personal, one pointing finger at a time."
        ],
        image: {
          title: "Lord Kitchener recruitment poster",
          caption: "'Britons: Lord Kitchener Wants You' (1914), the pointing finger that made enlistment a personal, patriotic demand.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kitchener-Britons.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kitchener-Britons.jpg"
        }
      },
      {
        title: "Media & Art Mobilized",
        bullets: [
          "Persuasion did not stop at posters: governments **commissioned artists** to paint the war, sending official war artists to the front to frame the struggle for audiences at home.",
          "**Newsreels and radio broadcasts** carried curated images and stories of the war into theaters and homes, sustaining morale through years of casualty lists.",
          "Censorship worked alongside celebration: the same ministries that commissioned art and film also controlled what newspapers could print, the war was presented as a **collective struggle** that no citizen stood outside of."
        ],
        image: {
          title: "Gassed, by John Singer Sargent",
          caption: "Sargent's 'Gassed' (1919), commissioned by the British government as official war art, and a record of what the war actually did.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Singer_Sargent_-_Gassed.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Singer_Sargent_-_Gassed.jpg"
        }
      },
      {
        title: "Intensified Nationalism",
        bullets: [
          "The nationalism that helped cause the war (Topic 7.2) was now **intensified** and weaponized to sustain it: the war was framed as a fight for **national honor and survival**, not policy.",
          "**National myths and narratives of destiny**, Germany's **Weltpolitik** and its claim to a 'place in the sun,' France's sacred soil, Britain's defense of civilization, told each population that defeat meant national extinction.",
          "Intensified nationalism made compromise politically impossible: after so much sacrifice in a war for survival, no government could settle for less than victory."
        ],
        image: {
          title: "Uncle Sam — 'I Want You'",
          caption: "James Montgomery Flagg's Uncle Sam (1917), the nation personified, recruiting its citizens for a war of national destiny.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Unclesamwantyou.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Unclesamwantyou.jpg"
        }
      },
      {
        title: "Mobilizing the Colonies",
        bullets: [
          "The Key Concept is explicit: governments mobilized populations **'both in the home countries and the colonies.'** A European war became a world war partly because Europe ruled the world.",
          "**Colonial troops** fought on every front: over a million Indian soldiers served the British Empire; France deployed hundreds of thousands of West African, North African, and Indochinese troops.",
          "Colonies supplied **labor and resources** as well as soldiers, porters, laborers, raw materials, food, and taxes, and the fighting itself spread to Africa, the Middle East, and the Pacific.",
          "Remember this card in Unit 8: colonial subjects who bled for empires would invoice that sacrifice in the **independence movements** to come."
        ],
        image: {
          title: "Indian bicycle troops on the Somme, 1916",
          caption: "Indian cyclist troops at the Battle of the Somme, colonial soldiers mobilized into a European war on a global scale.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_bicycle_troops_Somme_1916.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_bicycle_troops_Somme_1916.jpg"
        }
      },
      {
        title: "New Military Technology",
        bullets: [
          "**Machine guns** made massed infantry attacks suicidal and drove both sides into **trench warfare**, a static, fortified stalemate stretching from the Channel to Switzerland.",
          "**Tanks** were invented to break the entrenched deadlock; **aircraft** evolved from reconnaissance to fighters and bombers in four years.",
          "**Chemical weapons**, chlorine and **mustard gas**, inflicted agonizing immediate casualties and left survivors with burned lungs, blindness, and lifelong damage.",
          "Each innovation answered a battlefield problem and created a new horror, technology's **intended and unintended consequences** (the TEC theme) written in casualty lists."
        ],
        image: {
          title: "British Mark I tank, Somme, 1916",
          caption: "A British Mark I tank in September 1916, industrial innovation built to break the trench deadlock that machine guns had created.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Mark_I_male_tank_Somme_25_September_1916.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:British_Mark_I_male_tank_Somme_25_September_1916.jpg"
        }
      },
      {
        title: "The Human Cost",
        bullets: [
          "Put the two Key Concepts together: **total-war mobilization** fed entire societies into a battlefield ruled by **industrial technology**, and the result was casualties on an unprecedented scale.",
          "Roughly **20 million died** and 21 million more were wounded; single battles, the Somme, Verdun, consumed hundreds of thousands of men for a few miles of mud.",
          "The scale forced **ethical questions** that outlived the war: What may a state demand of its citizens? What limits, if any, apply to weapons? Who answers for the dead?",
          "Hold this synthesis, mobilization plus technology equals unprecedented cost, it anchors the **Topic 7.9** causation capstone, just like the closing frames of 7.1 and 7.2."
        ],
        image: {
          title: "Gassed, by John Singer Sargent",
          caption: "The cost rendered as official art: blinded soldiers led in file past a field of casualties, total war's answer to the question 'what did it cost?'",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Singer_Sargent_-_Gassed.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Singer_Sargent_-_Gassed.jpg"
        }
      }
    ]
  },

  map: {
    title: "Map: A European War Fought by the World",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Europe_alliances_1914-en.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Map_Europe_alliances_1914-en.svg",
    caption: "The alliance blocs of 1914, where they collided, the fronts froze into trench lines; behind each bloc stood a global empire mobilized for total war.",
    intro: "Use the map to connect geography to total war: the Western and Eastern fronts formed where the alliance blocs met, and behind every European belligerent stood colonies whose troops, labor, and resources were pulled into the war.",
    prompt: "Where the rival blocs collided, fronts formed and froze into trench stalemate. Using the map, explain why the war's geography pushed governments toward total mobilization at home, and toward drawing troops and resources from their colonies overseas.",
    notes: [
      "The **Western Front** froze into a trench line across Belgium and France; the **Eastern Front** stretched across far greater distances between Germany, Austria-Hungary, and Russia.",
      "**Machine guns and artillery** made the fronts nearly immovable, stalemate is what made the war long, and a long war is what made it total.",
      "Every major belligerent except Austria-Hungary commanded **overseas colonies**, the war's manpower and resources were global even when its trenches were European.",
      "Fighting spread beyond Europe to **Africa, the Middle East, and the Pacific**, carried by the same empires that drew their colonies into the mobilization."
    ]
  },

  first10: {
    title: "First & 10: The Total War",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.3 lesson path."
  },

  images: [
    {
      title: "Lord Kitchener recruitment poster",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kitchener-Britons.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kitchener-Britons.jpg",
      caption: "'Britons: Lord Kitchener Wants You' (1914), state persuasion at industrial scale.",
      prompt: "Read this poster as evidence: what mobilization strategy from KC-6.2.IV.A.i does it document, and how does it work on its audience?"
    },
    {
      title: "British trench on the Somme, 1916",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheshire_Regiment_trench_Somme_1916.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cheshire_Regiment_trench_Somme_1916.jpg",
      caption: "Trench warfare on the Somme, the stalemate that machine guns built.",
      prompt: "What does this photograph reveal about how new military technology changed the experience and the casualty levels of warfare?"
    },
    {
      title: "Indian bicycle troops on the Somme, 1916",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_bicycle_troops_Somme_1916.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_bicycle_troops_Somme_1916.jpg",
      caption: "Colonial troops on the Western Front, the empire mobilized.",
      prompt: "How does this image support the claim that governments mobilized populations 'both in the home countries and the colonies'?"
    },
    {
      title: "Gassed, by John Singer Sargent",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Singer_Sargent_-_Gassed.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Singer_Sargent_-_Gassed.jpg",
      caption: "Sargent's 'Gassed' (1919), government-commissioned art recording the human cost of chemical weapons.",
      prompt: "This painting is both government-commissioned art AND a record of technological horror. How can one source serve as evidence for both Key Concepts in this topic?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Reading Total War Through Evidence",
    task: "Choose one image and explain which part of this topic it best documents, total-war mobilization (propaganda, art, media, nationalism, colonies) or new military technology and its casualties, and what it reveals about how governments conducted World War I.",
    prompt: "This image shows... It is evidence of [mobilization strategy / colonial mobilization / new military technology] because... It helps explain how governments conducted total war because..."
  },

  primarySource: {
    title: "Primary Source: Wilfred Owen, 'Dulce et Decorum Est' (1917–1918)",
    intro: "Wilfred Owen wrote from inside the war this topic describes, a British officer on the Western Front, killed one week before the Armistice. His most famous poem describes a gas attack and then turns directly on the patriotic propaganda of the home front. The Latin title quotes a line schoolchildren learned: 'It is sweet and fitting to die for one's country.'",
    text: "Gas! GAS! Quick, boys!, An ecstasy of fumbling, fitting the clumsy helmets just in time; but someone still was yelling out and stumbling, and flound'ring like a man in fire or lime... If you could hear, at every jolt, the blood come gargling from the froth-corrupted lungs, my friend, you would not tell with such high zest to children ardent for some desperate glory, the old Lie: Dulce et decorum est pro patria mori.",
    questions: [
      "What specific new military technology does Owen describe, and what does his account reveal about its human cost?",
      "Owen calls the patriotic motto 'the old Lie.' How does this poem answer the propaganda posters and intensified nationalism you studied in this topic?",
      "Consider the author's situation, a serving officer writing for a home-front audience. How does that sourcing strengthen or limit this poem as evidence about how governments conducted the war?"
    ]
  }
};
