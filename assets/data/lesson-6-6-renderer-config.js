(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.4.I",
      "theme": "Humans and the Environment / Economic Systems",
      "text": "Migration in many cases was influenced by changes in demographics in both industrialized and unindustrialized societies that presented challenges to existing patterns of living.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.4.I.B",
      "theme": "Humans and the Environment / Economic Systems",
      "text": "Because of the nature of new modes of transportation, both internal and external migrants increasingly relocated to cities. This pattern contributed to the significant global urbanization of the 19th century. The new methods of transportation also allowed for many migrants to return, periodically or permanently, to their home societies.",
      "illustrativeExamples": [
        "Japanese agricultural workers in the Pacific",
        "Lebanese merchants in the Americas",
        "Italian industrial workers in Argentina"
      ]
    },
    {
      "code": "KC-5.4.II.A",
      "theme": "Humans and the Environment / Economic Systems",
      "text": "Many individuals chose freely to relocate, often in search of work.",
      "illustrativeExamples": [
        "Irish to the United States",
        "British engineers and geologists to South Asia and Africa"
      ]
    },
    {
      "code": "KC-5.4.II.B",
      "theme": "Humans and the Environment / Economic Systems",
      "text": "The new global capitalist economy continued to rely on coerced and semicoerced labor migration, including enslavement Chinese and Indian indentured servitude, and convict labor.",
      "illustrativeExamples": []
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Make a claim about what caused mass migration after 1750. Use at least two cards, separate a push from a pull, and explain what made the movement physically possible."
  };
  lesson.images = [
    {
      "title": "An indenture ship",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Indentured_Indian_workers.jpeg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Indentured_Indian_workers.jpeg",
      "caption": "Historical artwork depicting indentured Indian workers aboard a sailing vessel. The contract and the passage were parts of the same system.",
      "prompt": "NOTICE what the artwork emphasizes about the voyage. INFER what a recruiter would have to promise to persuade workers to make it. What must be verified from contracts or passenger records rather than inferred from a modern reconstruction?"
    },
    {
      "title": "Global migration flows after 1750",
      "url": "../assets/images/instructional-maps/topic-6-6.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-6.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of the major migration streams of the period.",
      "prompt": "NOTICE which flows are voluntary, which are contracted, and which are coerced. INFER what the map is flattening by drawing them all as arrows. Which distinction matters most for causation?"
    },
    {
      "title": "The Great Famine and Irish migration",
      "label": "Demographic record · Ireland, 1845 to 1852",
      "sourceText": [
        "Crop failure combined with poverty and insecure land tenure.",
        "Mass death and mass emigration followed."
      ],
      "caption": "A push factor with a cause behind it: the blight was natural, the vulnerability was not.",
      "prompt": "Which part of this is the cause of the migration: the crop failure, or the land system? Defend the answer and say what evidence would settle it."
    },
    {
      "title": "The Indian indenture contract",
      "label": "Labor-system record · after 1834",
      "sourceText": [
        "Workers signed fixed-term contracts for overseas plantation labor.",
        "Recruitment expanded after the abolition of slavery",
        "in the British empire."
      ],
      "caption": "A labor system that appeared where another had just been abolished, which is the fact to reason from.",
      "prompt": "What does the timing suggest about what indenture was for? Is a signed contract sufficient evidence that the movement was voluntary?"
    },
    {
      "title": "Chinese migration to the Pacific world",
      "label": "Migration record · 1850s to 1870s",
      "sourceText": [
        "Gold rushes, railroads and port labor created demand abroad.",
        "Steamship routes connected southern China to Pacific destinations."
      ],
      "caption": "A pull factor and a route, in one card. Demand alone does not move anyone.",
      "prompt": "Separate the pull from the means in this card. Which of the two would you rank as the more important cause, and what would change your mind?"
    },
    {
      "title": "Steamship passage",
      "label": "Transport reconstruction · nineteenth century",
      "sourceText": [
        "Regular steamship service reduced travel time and uncertainty.",
        "Cheaper, more predictable passage made repeat and",
        "return migration possible for the first time."
      ],
      "caption": "Labeled a reconstruction: the pattern historians draw from shipping schedules and passenger records rather than a single document.",
      "prompt": "Return migration is the detail to notice here. How does the possibility of going home change what migration means, and which other card does it most complicate?"
    }
  ];
})();
