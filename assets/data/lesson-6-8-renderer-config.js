(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.1",
      "theme": "Unit 6 Synthesis",
      "text": "The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.2",
      "theme": "Unit 6 Synthesis",
      "text": "As states industrialized, they also expanded existing overseas empires and established new colonies and transoceanic relationships.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3",
      "theme": "Unit 6 Synthesis",
      "text": "The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.4",
      "theme": "Unit 6 Synthesis",
      "text": "As a result of the emergence of transoceanic empires and a global capitalist economy, migration patterns changed dramatically, and the numbers of migrants increased significantly.",
      "illustrativeExamples": []
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Rank the causes of imperial expansion after 1750 and defend the ranking. Use at least two cards, state your criterion for importance before you rank, and name the evidence that most weakens your answer."
  };
  lesson.images = [
    {
      "title": "The Rhodes Colossus",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png",
      "caption": "Punch cartoon, 1892. Ambition and competition between powers, drawn for a domestic audience.",
      "prompt": "NOTICE the pose and the scale. INFER which cause of expansion this image is arguing for. Is a cartoon evidence of a cause, or of how a cause was talked about?"
    },
    {
      "title": "Rubber tapping",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rubber_tapping.jpg",
      "caption": "Photograph of latex extraction, the point where industrial demand met colonial labor.",
      "prompt": "NOTICE the labor the process requires. INFER which cause of expansion this image supports. What does it evidence better than the cartoon does, and worse?"
    },
    {
      "title": "Yaa Asantewaa and the Golden Stool",
      "label": "Colonial record · War of the Golden Stool, 1900 to 1901",
      "sourceText": [
        "Yaa Asantewaa led Asante forces against British demands to surrender the Golden Stool.",
        "She was captured and exiled to the Seychelles in 1901, where she died in 1921."
      ],
      "caption": "This card is a response rather than a cause, and no verified photograph of her could be sourced from Commons.",
      "prompt": "NOTICE that this is a card about response rather than cause. INFER what a ranking of causes leaves out if it never accounts for resistance. Where does this belong in a causal argument?"
    },
    {
      "title": "Industrial demand for raw materials",
      "label": "Economic causal evidence · nineteenth century",
      "sourceText": [
        "Factories demanded cotton, rubber, metals, oils and other inputs.",
        "Overseas markets also attracted exporters and investors."
      ],
      "caption": "The economic case, stated as demand rather than as greed, so that it can be tested against the other cards.",
      "prompt": "Does demand explain where empires expanded, when they expanded, or both? Name a case from this unit that demand alone does not explain."
    },
    {
      "title": "Technology lowers the cost of conquest",
      "label": "Technological causal evidence · late nineteenth century",
      "sourceText": [
        "Steam transport, quinine, telegraphy and modern firearms",
        "widened military and logistical advantages.",
        "States could project force further and hold it longer."
      ],
      "caption": "The enabling condition rather than the motive: what made expansion cheap enough to attempt.",
      "prompt": "An enabling condition is not a motive. Explain the difference using this card and the demand card, then say which belongs higher in your ranking and why."
    }
  ];
})();
