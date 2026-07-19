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
    topic: "Topic 7.8",
    title: "Mass Atrocities After 1900",
    subtitle: "How the rise of extremist groups in power led to genocide, ethnic violence, and the attempted destruction of specific populations — and how the world responded with new legal frameworks, from the Genocide Convention to the International Criminal Court",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the rise of extremist groups in power led to the attempted destruction of specific populations, notably the Holocaust.",
      kc: "KC-6.2.III.C",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain the causes of mass atrocities after 1900, including the Armenian Genocide, the Holodomor, the Cambodian Genocide, and the Rwandan Genocide.",
      kc: "KC-6.2.III.C",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain the consequences of mass atrocities, including cultural trauma, international legal frameworks, and political change.",
      kc: "KC-6.2.III.C",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use the Nazi regime's ideology of racial supremacy and antisemitism as evidence that the rise of extremist groups in power led to the Holocaust, the systematic murder of approximately six million Jews during World War II.",
      kc: "KC-6.2.III.C",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can identify specific causes in at least two cases, the Young Turk government's campaign against Armenians, Soviet forced collectivization in Ukraine, the Khmer Rouge's ideology in Cambodia, or colonial-era ethnic divisions exploited in Rwanda, and explain how each cause led to mass atrocity.",
      kc: "KC-6.2.III.C",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can name specific consequences, the Genocide Convention, the International Criminal Court, post-genocide reconciliation in Rwanda, and lasting cultural trauma, and explain how mass atrocities after 1900 produced both immediate human suffering and long-term institutional and cultural change.",
      kc: "KC-6.2.III.C",
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Social Interactions and Organization (SIO)",
      theme: "Social Interactions and Organization",
      text: "",
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Mass Atrocities After 1900: Causes and Consequences",
    intro: "Use these cards to trace the causes and consequences of mass atrocities after 1900. The Key Concept names the pattern: extremist groups in power led to the attempted destruction of specific populations. The illustrative examples span the century, from the Armenian Genocide during World War I through the Rwandan Genocide in the 1990s. Study the causes, study the consequences, and look for the structure that repeats.",
    videos: [
      {
        title: "Heimler's History — AP World Topic 7.8",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.8+Mass+Atrocities",
        prompt: "Watch for how extremist groups in power led to the attempted destruction of specific populations, the causes specific to each case, and the consequences, including international legal frameworks like the Genocide Convention and the ICC."
      }
    ],
    segments: [
      {
        title: "Why We Study This",
        bullets: [
          "In Topic 7.7 you saw **total state power over populations**, governments mobilizing everything for war, with totalitarian states using ideology to repress basic freedoms and dominate daily life. Now follow that power to its **most extreme result.**",
          "The Key Concept states the claim: the **rise of extremist groups in power** led to the **attempted destruction of specific populations.** This topic asks why it happened and what followed.",
          "The purpose is clear: historians study **mass atrocities** to understand their **causes and consequences** and to recognize the **patterns that precede them.** That analytical frame, not graphic detail, is what the CED tests.",
          "Ground it in the thematic focus: **Social Interactions and Organization (SIO)**, how societies **group their members**, how those norms govern interactions, and what happens when a regime **defines a group as an enemy.**"
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "Causes: Extremism in Power",
        bullets: [
          "The Key Concept's named example: the **Nazi regime's** ideology of **racial supremacy** and **antisemitism** drove the systematic dehumanization of Jews and other minority groups through **propaganda, exclusion, and persecution.**",
          "The result was the **Holocaust**, the systematic murder of approximately **six million Jews** during World War II, along with millions of Roma, disabled persons, political prisoners, and others deemed enemies of the state.",
          "This is the KC's core claim in action: when an **extremist group** holds **unchecked state power**, it can redefine who belongs to the nation, and attempt to destroy those it excludes.",
          "The structure is what matters for the exam: **ideology in power → dehumanization of a defined group → attempted destruction.** Every illustrative example follows a version of this arc."
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "The Armenian Genocide",
        bullets: [
          "**Armenians in the Ottoman Empire during and after World War I.** The **Young Turk government** launched a campaign of **mass deportation and extermination**, driven by fear of disloyalty during wartime and the desire to maintain territorial control.",
          "An estimated **1.5 million Armenians** were killed through execution, forced marches into the desert, starvation, and systematic violence. The Armenian population of Anatolia was nearly destroyed.",
          "Callback to **Topic 7.1**: you studied the Ottoman Empire's decline and the pressures of nationalism and imperial collapse. The Armenian Genocide occurred inside that collapse, wartime crisis and nationalist ideology converging on a vulnerable minority.",
          "The same structure applies: **extremist ideology** (ethnic nationalism), **unchecked state authority** (wartime emergency), **dehumanization** (accusations of disloyalty), and **crisis conditions** (the war itself)."
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "The Holodomor (1932–1933)",
        bullets: [
          "**Ukraine in the Soviet Union in the 1920s and 1930s.** A **man-made famine** produced by **forced collectivization** and **grain requisitioning** under Stalin's regime aimed at suppressing **Ukrainian nationalism** and consolidating state control.",
          "Callback to the **Five-Year Plans** from **Topic 7.4**: you studied Soviet industrialization and collectivized agriculture. The Holodomor was collectivization turned into a weapon, the state seizing grain from a population it sought to break.",
          "**Millions perished.** The famine was not a natural disaster; it was the result of deliberate state policy targeting a specific national population.",
          "The structure holds: **ideological control** (Stalinist communism), **unchecked state power** (the command economy and political repression), **a defined target** (Ukrainian national identity), and **crisis conditions** manufactured by the state itself."
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "Cambodia (1975–1979)",
        bullets: [
          "The **Khmer Rouge** under **Pol Pot** seized power and attempted to force an **agrarian communist transformation**, emptying cities, abolishing money, and dismantling modern institutions in pursuit of a radical ideological vision.",
          "**Intellectuals, professionals, and ethnic minorities** were systematically targeted. An estimated **1.7 million deaths** resulted from execution, forced labor, and starvation, roughly a quarter of the country's population.",
          "The same structure: **extremist ideology** (radical agrarian communism), **total state control** (the Khmer Rouge dismantled every institution), **dehumanization** (anyone connected to education, urban life, or minority identity became an enemy), and **crisis conditions** produced by the regime itself.",
          "Cambodia shows that the pattern is not limited to one region or one ideology, **any extremist group with unchecked power** can produce mass atrocity."
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "Rwanda (1994)",
        bullets: [
          "The **Tutsi population** was targeted by the **Hutu majority government** in a genocide that killed an estimated **800,000 Tutsis and moderate Hutus** in roughly **100 days.**",
          "The roots ran deep: **colonial policies** had entrenched ethnic divisions by favoring the **Tutsi minority** under Belgian rule, creating long-standing resentment that post-independence governments exploited rather than healed.",
          "**Radio propaganda** dehumanized Tutsis and called for their destruction. The **international community's failure to intervene** allowed the killing to continue at extraordinary speed.",
          "The same structure, one more time: **extremist ideology** (Hutu Power), **state authority weaponized** (the government organized the killing), **dehumanization** (propaganda and colonial-era categories), and **crisis conditions** (the civil war and assassination of the president)."
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "Consequences",
        bullets: [
          "**Cultural trauma** carried by survivors and descendants, communities shattered, histories interrupted, intergenerational pain that persists long after the killing stops.",
          "**International legal frameworks** built in response: the **Genocide Convention (1948)** defined genocide in international law for the first time; the **International Criminal Court (ICC)** was established to prosecute individuals for genocide, crimes against humanity, and war crimes.",
          "**Political change and reconciliation efforts**: post-genocide **Rwanda** undertook community-based justice (gacaca courts) and national reconciliation; the Nuremberg and Tokyo tribunals established the precedent that individuals, not just states, bear responsibility for atrocities.",
          "**Global awareness and human rights advocacy**: each atrocity strengthened the argument that the international community has a responsibility to prevent genocide, even as the repeated failure to act revealed how far practice lagged behind principle."
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      },
      {
        title: "Recognizing the Pattern",
        bullets: [
          "Across all five cases the **same structure recurs**: an **extremist ideology in power**, the **dehumanization of a defined group**, **crisis conditions** that create opportunity, and **unchecked state authority** that removes restraints.",
          "This is the analytical frame the CED tests: not graphic detail, but **causation**, what conditions produce mass atrocity, and what consequences follow when a society fails to prevent it.",
          "The **Causes and Consequences Matrix** module asks you to map this pattern yourself, regime, conditions, target, and consequences, across the five cases. Building the matrix is the exam-level skill: using specific evidence to support a causal argument.",
          "Carry the thread forward: **Topic 7.9** asks you to explain causes and consequences across the entire unit. The mass-atrocity pattern, extremism plus unchecked power, is one of the strongest causal threads you can pull through the **7.9 capstone.**"
        ],
        image: { title: '', caption: '', url: '', sourceUrl: '' }
      }
    ]
  },

  map: {
    title: "Map: Mass Atrocities After 1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
    caption: "Five cases, four continents, the geography of mass atrocities after 1900 spans the Ottoman Empire, Nazi-occupied Europe, Soviet Ukraine, Cambodia, and Rwanda.",
    intro: "Use the map to locate the five cases named in the CED's illustrative examples. Geography matters: each atrocity occurred in a specific political and territorial context, imperial collapse, wartime occupation, Cold War instability, post-colonial division. Connecting place to cause strengthens your causal argument.",
    prompt: "Locate the Ottoman Empire (Armenia), Nazi Germany and occupied Europe, Soviet Ukraine, Cambodia, and Rwanda on the map. For each location, identify one geographic or political factor that contributed to the conditions enabling mass atrocity. How does the geographic spread of these cases support the argument that mass atrocities are not limited to one region or one ideology?",
    notes: [
      "**The Ottoman Empire / Armenia**, the Armenian Genocide took place during the collapse of the Ottoman Empire and World War I, in Anatolia and the Syrian desert.",
      "**Nazi Germany / Eastern Europe**, the Holocaust was centered in occupied Poland and Eastern Europe, where the Nazi regime built the infrastructure of systematic killing.",
      "**Soviet Ukraine**, the Holodomor struck Ukraine's agricultural heartland, where forced collectivization and grain seizure produced a man-made famine.",
      "**Cambodia**, the Khmer Rouge emptied cities and forced the population into agrarian labor camps across the country.",
      "**Rwanda**, a small, densely populated country in Central Africa where colonial-era ethnic divisions were weaponized into genocide."
    ]
  },

  first10: {
    title: "First & 10: Mass Atrocities After 1900",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.8 lesson path."
  },

  images: [],

  evidenceLab: {
    title: "Evidence Lab: Causes and Consequences Across Cases",
    task: "Choose one mass atrocity from the illustrative examples and identify the specific evidence, the regime in power, the ideology, the targeted population, and the consequences, that supports the Key Concept's claim that extremist groups in power led to the attempted destruction of specific populations. Use evidence from the lecture cards.",
    prompt: "The [case] illustrates the Key Concept because... The extremist group in power was... The targeted population was... The specific cause was... The consequence was... This is evidence that..."
  },

  primarySource: {
    title: "Primary Source: Convention on the Prevention and Punishment of the Crime of Genocide (1948), Article II",
    intro: "After the Holocaust, the international community sought to define genocide in law so that it could be recognized, prevented, and punished. In 1948, the United Nations adopted the Genocide Convention, the first human rights treaty approved by the General Assembly. Article II defines genocide not by scale but by intent: the deliberate attempt to destroy a group in whole or in part. Read the definition as a consequence of the atrocities you have studied, and as an attempt to prevent future ones.",
    text: "In the present Convention, genocide means any of the following acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such: (a) Killing members of the group; (b) Causing serious bodily or mental harm to members of the group; (c) Deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in part; (d) Imposing measures intended to prevent births within the group; (e) Forcibly transferring children of the group to another group.",
    questions: [
      "The Convention defines genocide by intent, 'committed with intent to destroy, in whole or in part.' Why does the definition focus on intent rather than on the number of victims? How does this legal definition help distinguish genocide from other forms of mass violence?",
      "Apply Article II to one of the illustrative examples (the Holocaust, the Armenian Genocide, the Holodomor, Cambodia, or Rwanda). Which specific clause, (a) through (e), most directly describes what happened in your chosen case? Use evidence from the lecture cards.",
      "The Genocide Convention was adopted in 1948, after the Holocaust. But the Armenian Genocide occurred decades earlier, and the Rwandan Genocide occurred decades later. What does the gap between the Convention's adoption and the continued occurrence of genocide suggest about the relationship between international law and the prevention of mass atrocities?"
    ]
  }
};
