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
    topic: "Topic 7.5",
    title: "Unresolved Tensions After World War I",
    subtitle: "Empires did not end in 1918 — they reorganized: how Western and Japanese imperial states maintained and expanded territorial control between the wars while anti-imperial resistance built the pressure that would reshape the map",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here — submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how Western and Japanese imperial states maintained or expanded control over territories between the two world wars.",
      kc: "KC-6.2.I.B",
      theme: "Governance"
    },
    {
      target: "I can explain how the League of Nations mandate system transferred former German and Ottoman territories to imperial powers.",
      kc: "KC-6.2.I.B",
      theme: "Governance"
    },
    {
      target: "I can explain how anti-imperial resistance, including the Indian National Congress and West African movements, challenged imperial control between the wars.",
      kc: "KC-6.2.I.B",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use specific evidence — League of Nations mandates over former German colonies, the post-Ottoman mandates in the Middle East, and Japan's creation of Manchukuo — to show that imperial states predominantly maintained and in some cases expanded territorial control after World War I.",
      kc: "KC-6.2.I.B",
      theme: "Governance"
    },
    {
      criteria: "I can explain the mandate system's rhetoric of 'preparing territories for self-governance' against the reality of continued colonial control, and explain how borders drawn without regard to ethnic and sectarian boundaries sowed future conflict.",
      kc: "KC-6.2.I.B",
      theme: "Governance"
    },
    {
      criteria: "I can use the Indian National Congress and West African strikes and congresses as evidence of anti-imperial resistance, and explain why that resistance is the 'change' set against the 'continuity' of maintained imperial control.",
      kc: "KC-6.2.I.B",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus — Governance (GOV)",
      theme: "Governance",
      text: "A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.",
      illustrativeExamples: []
    },
    {
      code: "Unit 7: Learning Objective E",
      theme: "Learning Objective",
      text: "Explain the continuities and changes in territorial holdings from 1900 to the present.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.I.B",
      theme: "Governance",
      text: "Between the two world wars, Western and Japanese imperial states predominantly maintained control over colonial holdings; in some cases, they gained additional territories through conquest or treaty settlement and in other cases faced anti-imperial resistance.",
      illustrativeExamples: [
        "Territorial gains:",
        "Transfer of former German colonies to Great Britain and France under the system of League of Nations mandates",
        "Manchukuo / Greater East Asia Co-Prosperity Sphere",
        "Anti-imperial resistance:",
        "Indian National Congress",
        "West African resistance (strikes/congresses) to French rule"
      ]
    }
  ],

  lecture: {
    title: "Unresolved Tensions After World War I: A Map Redrawn, an Empire Reorganized",
    intro: "Use these cards to follow the Learning Objective question directly: between the wars, what CHANGED in territorial holdings — and what stayed the same? Empires did not end in 1918. They reorganized — and the tensions they left unresolved became the fuse for the next war.",
    videos: [
      {
        title: "Heimler's History — AP World Topic 7.5",
        url: "https://www.youtube.com/results?search_query=Heimler+AP+World+7.5+Unresolved+Tensions+After+World+War+I",
        previewImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Big_four.jpg",
        prompt: "Watch for how the League of Nations mandate system transferred former German and Ottoman territories to Britain and France, how Japan expanded through Manchukuo and the Greater East Asia Co-Prosperity Sphere, and how the Indian National Congress and West African resistance challenged imperial rule."
      }
    ],
    segments: [
      {
        title: "A Peace That Settled Nothing",
        bullets: [
          "The empires you watched collapse in Topic 7.1 — Ottoman, German, Austro-Hungarian, Russian — left **territory on the table**, and the total war of Topics 7.2–7.3 ended with a **redrawn map**.",
          "Frame the Learning Objective directly: between the wars, what **changed** in territorial holdings — and what stayed the **same**?",
          "Core claim: **empires did not end in 1918 — they reorganized.** Victorious imperial states absorbed the losers' colonies, and imperial control was **predominantly maintained** even as the map was redrawn.",
          "Hold that tension for the whole topic: **continuity** (control maintained) running alongside **change** (mandates redraw borders; resistance builds)."
        ],
        image: {
          title: "The Council of Four at the Paris Peace Conference, 1919",
          caption: "The victors redraw the map — Lloyd George, Orlando, Clemenceau, and Wilson at the Paris Peace Conference that distributed the defeated empires' territories.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Big_four.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Big_four.jpg"
        }
      },
      {
        title: "The Mandate System",
        bullets: [
          "Former German colonies were transferred to **Great Britain and France** under the system of **League of Nations mandates** — a victory dividend dressed as international trusteeship.",
          "**German East Africa** (Tanzania) went to **Britain**; **German South West Africa** (Namibia) passed to **South African control**.",
          "The rhetoric promised **\"preparing territories for self-governance.\"** The reality was **continued colonial exploitation** — the same control under a new, legitimizing name.",
          "This is the Key Concept in action: imperial states **gained additional territories through treaty settlement** while predominantly **maintaining** the holdings they already had."
        ],
        image: {
          title: "Imperial holdings of the interwar world, c. 1936",
          caption: "After 1919 the defeated empires' colonies did not become independent — they were redistributed among the victors as League of Nations mandates.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG"
        }
      },
      {
        title: "Redrawing the Middle East",
        bullets: [
          "The **Ottoman collapse** (a Topic 7.1 callback) created the vacuum — and the victors moved in to fill it.",
          "The **Sykes-Picot Agreement (1916)** and the subsequent **mandates** gave **France** control of **Syria and Lebanon** and **Britain** control of **Iraq**.",
          "Borders were drawn **without regard to ethnic and sectarian boundaries** — lines on a map serving imperial convenience rather than the peoples beneath them.",
          "Those borders **sowed future conflict**: an unresolved tension that outlived the interwar period itself."
        ],
        image: {
          title: "Sykes-Picot Agreement map, signed 8 May 1916",
          caption: "The secret Anglo-French map that carved up the Ottoman Middle East into spheres of control — borders drawn without regard to the peoples who lived inside them.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/MPK1-426_Sykes_Picot_Agreement_Map_signed_8_May_1916.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:MPK1-426_Sykes_Picot_Agreement_Map_signed_8_May_1916.jpg"
        }
      },
      {
        title: "Japan's Expansion",
        bullets: [
          "Japan was an imperial state that did not just maintain its holdings — it **expanded by conquest**. In 1932 it established **Manchukuo**, a **puppet state** carved out of Manchuria.",
          "The **Greater East Asia Co-Prosperity Sphere** was framed as **Asian unity against Western imperialism** — but in practice it served **Japanese interests**, a new empire wearing an anti-imperial mask.",
          "Expansion drove **rising tensions with China and the Western powers**, tensions the interwar order could not contain.",
          "Keep the thread: Japan's conquest is exactly the Key Concept's 'additional territories through conquest' — and it **foreshadows Topic 7.6.**"
        ],
        image: {
          title: "Flag of Manchukuo",
          caption: "The flag of Manchukuo — the puppet state Japan carved from Manchuria in 1932, expanding empire by conquest under the banner of a 'Co-Prosperity Sphere.'",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Manchukuo.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Flag_of_Manchukuo.svg"
        }
      },
      {
        title: "The Indian National Congress",
        bullets: [
          "Against the continuity of maintained empire ran the **change**: anti-imperial resistance. The **Indian National Congress**, founded in **1885**, was its leading edge.",
          "Its methods ranged from **petitions** to **mass protests** — a movement learning to mobilize an entire subcontinent against British rule.",
          "Post-WWI discontent boiled over after the **Jallianwala Bagh massacre (1919)**, when British troops fired on an unarmed crowd at Amritsar.",
          "The massacre **galvanized the broader independence movement**, turning moderate grievance into mass demand for self-rule."
        ],
        image: {
          title: "Mohandas K. Gandhi, 1931",
          caption: "Gandhi, whose mass campaigns turned the Indian National Congress into a movement capable of challenging British imperial control across a subcontinent.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahatma-Gandhi,_studio,_1931.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Mahatma-Gandhi,_studio,_1931.jpg"
        }
      },
      {
        title: "West African Resistance",
        bullets: [
          "In French West Africa, resistance took the form of **strikes, protests, and congresses** challenging **French colonial rule**.",
          "These were not scattered riots but **organized political action** — workers and educated elites building institutions to press their case.",
          "Behind them grew a **nationalist sentiment** and a **demand for self-determination** among colonized peoples — the same demand sounding from India to Africa.",
          "This is the Key Concept's second face: even where imperial control held, it **faced anti-imperial resistance** that would not go away."
        ],
        image: {
          title: "Blaise Diagne",
          caption: "Blaise Diagne of Senegal — emblem of the educated West African elite whose strikes, congresses, and political organizing challenged French colonial rule between the wars.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blaise_Diagne.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Blaise_Diagne.jpg"
        }
      },
      {
        title: "Continuity and Change",
        bullets: [
          "Now answer the Learning Objective as a synthesis: imperial control was **predominantly maintained** — that is the **continuity**.",
          "But the map **changed**: mandates redistributed former German and Ottoman territories, and Japan expanded by conquest.",
          "And the **pressure changed**: the Indian National Congress and West African resistance built a momentum that maintained control could no longer ignore.",
          "These **unresolved tensions are the fuse for Topic 7.6** — and the maintained-versus-challenged thread seeds the **7.9 causation capstone.**"
        ],
        image: {
          title: "Imperial holdings of the interwar world, c. 1936",
          caption: "One map, two truths: imperial control predominantly maintained (continuity) even as mandates redrew borders and resistance movements built pressure (change).",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG"
        }
      }
    ]
  },

  map: {
    title: "Map: Empires and Mandates, c. 1936",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
    caption: "The interwar world — defeated empires' colonies redistributed to the victors as mandates, Japanese expansion in East Asia, and colonized peoples organizing for self-determination.",
    intro: "Use the map to test the Learning Objective: where did territorial holdings change between the wars, and where did imperial control simply continue under a new name? Trace the former German and Ottoman territories to their new mandate holders, and watch Japan expand in the northeast.",
    prompt: "Locate the British and French empires, the former German colonies now held as mandates, the post-Ottoman Middle East, and Japanese-controlled Manchukuo. Which changes on this map represent new territorial GAINS, and which represent old control simply MAINTAINED? Where on the map would you mark the anti-imperial resistance that challenged these holdings?",
    notes: [
      "**Former German colonies** were transferred to **Britain and France** under League of Nations mandates — German East Africa to Britain, German South West Africa to South African control.",
      "The **post-Ottoman Middle East** was divided by the **Sykes-Picot Agreement** and mandates: France over Syria and Lebanon, Britain over Iraq.",
      "**Japan expanded by conquest**, establishing **Manchukuo** in Manchuria (1932) and proclaiming a **Greater East Asia Co-Prosperity Sphere**.",
      "Across the map, **imperial control was predominantly maintained** — but the **Indian National Congress** and **West African resistance** marked the change building beneath the surface."
    ]
  },

  first10: {
    title: "First & 10: The Empire That Would Not End",
    note: "Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.5 lesson path."
  },

  images: [
    {
      title: "The Council of Four at the Paris Peace Conference, 1919",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Big_four.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Big_four.jpg",
      caption: "Lloyd George, Orlando, Clemenceau, and Wilson — the victors who redistributed the defeated empires' territories.",
      prompt: "These four men redrew the world's map. What does it reveal that the future of colonized peoples in Africa, the Middle East, and Asia was decided in this room — and not by those peoples themselves?"
    },
    {
      title: "Imperial holdings of the interwar world, c. 1936",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:World_1936_empires_colonies_territory.PNG",
      caption: "The interwar world — empires maintained, mandates redistributed, and Japanese expansion in East Asia.",
      prompt: "Compare this map to the empires that collapsed in Topic 7.1. What CHANGED in territorial holdings by 1936 — and what was simply MAINTAINED under a new name?"
    },
    {
      title: "Sykes-Picot Agreement map, signed 8 May 1916",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/MPK1-426_Sykes_Picot_Agreement_Map_signed_8_May_1916.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:MPK1-426_Sykes_Picot_Agreement_Map_signed_8_May_1916.jpg",
      caption: "The secret Anglo-French agreement carving the Ottoman Middle East into British and French spheres of control.",
      prompt: "Borders here were drawn without regard to ethnic and sectarian boundaries. How does this map help explain why mandate-era decisions 'sowed future conflict'?"
    },
    {
      title: "Mohandas K. Gandhi, 1931",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahatma-Gandhi,_studio,_1931.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mahatma-Gandhi,_studio,_1931.jpg",
      caption: "Gandhi — the Indian National Congress turned mass anti-imperial resistance into a force the British Empire could not ignore.",
      prompt: "If imperial control was 'predominantly maintained' between the wars, what does the rise of the Indian National Congress reveal about the change building beneath that continuity?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Maintained, Gained, or Challenged",
    task: "Choose one image and explain what it reveals about territorial holdings between the wars — whether imperial control was MAINTAINED, GAINED through conquest or treaty, or CHALLENGED by anti-imperial resistance.",
    prompt: "This image shows... It is evidence that imperial control was [maintained / gained / challenged] because... It helps explain the continuities and changes in territorial holdings after World War I because..."
  },

  primarySource: {
    title: "Primary Source: The Covenant of the League of Nations, Article 22 (1919)",
    intro: "Article 22 of the League Covenant created the mandate system — the legal machinery that transferred former German and Ottoman territories to Britain and France. Read it for the gap between what it promises and what it delivers: the language of trusteeship and 'tutelage' wrapped around the reality of continued colonial control.",
    text: "To those colonies and territories which as a consequence of the late war have ceased to be under the sovereignty of the States which formerly governed them and which are inhabited by peoples not yet able to stand by themselves under the strenuous conditions of the modern world, there should be applied the principle that the well-being and development of such peoples form a sacred trust of civilisation... The best method of giving practical effect to this principle is that the tutelage of such peoples should be entrusted to advanced nations who by reason of their resources, their experience or their geographical position can best undertake this responsibility, and who are willing to accept it, and that this tutelage should be exercised by them as Mandatories on behalf of the League.",
    questions: [
      "According to Article 22, why are the former German and Ottoman territories not granted independence — and who decides which nations are 'advanced' enough to govern them?",
      "The text calls colonial control a 'sacred trust of civilisation.' How does this rhetoric of 'tutelage' and 'preparing territories for self-governance' compare with the reality of continued imperial exploitation?",
      "The Key Concept says imperial states 'predominantly maintained control over colonial holdings... in some cases [gaining] additional territories through... treaty settlement.' How is Article 22 itself the legal instrument of that maintained and gained control?"
    ]
  }
};
