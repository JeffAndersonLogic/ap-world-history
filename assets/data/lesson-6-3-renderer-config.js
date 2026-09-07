(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.3.III.D",
      "theme": "Governance",
      "text": "Increasing questions about political authority and growing nationalism contributed to anticolonial movements.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.2.II.C",
      "theme": "Governance",
      "text": "Anti-imperial resistance took various forms, including direct resistance within empires and the creation of new states on the peripheries.",
      "illustrativeExamples": [
        "Túpac Amaru II’s rebellion in Peru",
        "Samory Touré’s military battles in West Africa",
        "Yaa Asantewaa War in West Africa",
        "1857 rebellion in India",
        "Establishment of independent states in the Balkans",
        "Sokoto Caliphate in modern-day Nigeria",
        "Cherokee Nation",
        "Zulu Kingdom"
      ]
    },
    {
      "code": "KC-5.3.III.E",
      "theme": "Governance",
      "text": "Increasing discontent with imperial rule led to rebellions, some of which were influenced by religious ideas.",
      "illustrativeExamples": [
        "Ghost Dance in the U.S.",
        "Xhosa Cattle-Killing Movement in Southern Africa",
        "Mahdist wars in Sudan"
      ]
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Explain why some resistance to imperial expansion succeeded and most did not. Use at least two cards, name the conditions each case had, and avoid concluding that resistance was either futile or uniform."
  };
  lesson.images = [
    {
      "title": "Yaa Asantewaa and the Golden Stool",
      "label": "Colonial record · War of the Golden Stool, 1900 to 1901",
      "sourceText": [
        "Yaa Asantewaa, queen mother of Ejisu, led Asante forces against British demands to surrender the Golden Stool.",
        "The uprising was defeated; she was captured and exiled to the Seychelles in 1901, where she died in 1921."
      ],
      "caption": "No verified photograph of Yaa Asantewaa herself could be sourced from Commons; this record states the outcome rather than showing the person.",
      "prompt": "NOTICE the outcome: defeat and exile, not negotiation. INFER what that outcome suggests about how the British treated this uprising compared with other responses to expansion in this unit. What would a photograph add here that a record of dates cannot?"
    },
    {
      "title": "Resistance to state expansion",
      "url": "../assets/images/instructional-maps/topic-6-3.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-3.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction locating the major resistance movements of this period.",
      "prompt": "NOTICE where sustained resistance occurred. INFER what those places might have had in common. What does location alone fail to explain about success or defeat?"
    },
    {
      "title": "The Indian Rebellion of 1857",
      "label": "Rebellion record · South Asia, 1857 to 1858",
      "sourceText": [
        "A cartridge controversy helped trigger mutiny among sepoys.",
        "Grievances included annexation, pay, land and religion.",
        "The rebellion was defeated and rule passed to the Crown."
      ],
      "caption": "A rebellion inside the imperial army itself, defeated, and followed by a reorganization of the empire that faced it.",
      "prompt": "Was this a failure? Use the outcome to argue both ways, then say which reading the evidence better supports."
    },
    {
      "title": "Ethiopia at Adwa",
      "label": "Battle record · 1 March 1896",
      "sourceText": [
        "Ethiopian forces defeated an invading Italian army.",
        "Menelik II combined diplomacy, imported modern weapons",
        "and mass mobilization."
      ],
      "caption": "The one decisive defeat of a European invasion in this period, and the three things the victor had assembled first.",
      "prompt": "Which of the three factors named here do the other cards lack? Build a claim about the conditions for successful resistance and name what would disprove it."
    },
    {
      "title": "Samory Touré’s resistance",
      "label": "Military and political record · West Africa, 1880s to 1898",
      "sourceText": [
        "Samory built a mobile state and acquired modern firearms.",
        "He resisted French forces for well over a decade.",
        "French forces eventually defeated and captured him."
      ],
      "caption": "Sustained, organized, modern-armed resistance that still ended in defeat, which is what makes it useful beside Adwa.",
      "prompt": "Samory had weapons and organization and still lost. What does that do to a simple technology explanation? What was different at Adwa?"
    },
    {
      "title": "The Mahdist state in Sudan",
      "label": "Religious and political resistance · 1881 to 1898",
      "sourceText": [
        "A religiously framed revolt defeated Egyptian and British forces",
        "and governed a state for over a decade.",
        "Anglo-Egyptian armies reconquered Sudan in 1898."
      ],
      "caption": "Resistance that became a functioning state before it was destroyed, seventeen years later.",
      "prompt": "What does the length of this case add that a single battle cannot? Compare the basis of authority here with the Asante and Ethiopian cases."
    }
  ];
})();
