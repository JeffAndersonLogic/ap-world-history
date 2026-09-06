(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.1.II.A",
      "theme": "Humans and the Environment",
      "text": "The need for raw materials for factories and increased food supplies for the growing population in urban centers led to the growth of export economies around the world that specialized in commercial extraction of natural resources and the production of food and industrial crops. The profits from these raw materials were used to purchase finished goods.",
      "illustrativeExamples": [
        "Cotton production in Egypt",
        "Rubber extraction in the Amazon and the Congo basin",
        "The palm oil trade in West Africa",
        "The guano industries in Peru and Chile",
        "Meat from Argentina and Uruguay",
        "Diamonds from Africa"
      ]
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Build a claim about how industrial demand reshaped economies outside the industrial core. Use at least two commodities, name the mechanism in each, and identify who captured the value."
  };
  lesson.images = [
    {
      "title": "Rubber tapping",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rubber_tapping.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rubber_tapping.jpg",
      "caption": "Photograph of latex being tapped from a rubber tree. The technique is simple; the demand behind it was industrial.",
      "prompt": "NOTICE what the work itself involves. INFER what determines how much a tapper can produce in a day, and what a quota would therefore require. What does the photograph not show about who set the quota?"
    },
    {
      "title": "Commodity production and export routes",
      "url": "../assets/images/instructional-maps/topic-6-4.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-4.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of major export commodities and the routes carrying them.",
      "prompt": "NOTICE which direction the routes run and what they connect. INFER what an economy organized around one export is exposed to. What does a route map not show about prices?"
    },
    {
      "title": "The Egyptian cotton boom",
      "label": "Commodity record · Egypt, 1860s",
      "sourceText": [
        "Disruption from the U.S. Civil War raised demand for Egyptian cotton.",
        "Expansion tied growers and the state more tightly to foreign markets and credit."
      ],
      "caption": "A boom caused by a war on another continent, and the debt that followed it.",
      "prompt": "What happens to this economy when the American supply returns? Use the card to explain a vulnerability rather than a benefit."
    },
    {
      "title": "Congo rubber quotas",
      "label": "Labor and commodity record · 1890s to 1900s",
      "sourceText": [
        "Rubber demand produced coercive collection quotas.",
        "Concession companies used violence to enforce output."
      ],
      "caption": "The point at which a commodity boom becomes a labor system enforced by force.",
      "prompt": "Set this beside the tapping photograph. What does the record tell you that the image cannot, and what does the image tell you that the record cannot?"
    },
    {
      "title": "Peruvian guano exports",
      "label": "Commodity record · mid-nineteenth century",
      "sourceText": [
        "Guano fertilizer became a major export.",
        "State revenue became unusually dependent on one resource."
      ],
      "caption": "A case outside Africa and Asia, and a state budget resting on a single deposit.",
      "prompt": "What does this add to a claim built only from colonial cases? Peru was independent: does that change the pattern or confirm it?"
    },
    {
      "title": "West African palm oil",
      "label": "Commodity record · nineteenth century",
      "sourceText": [
        "Palm oil exports expanded with European industrial demand.",
        "African producers and merchants often remained important",
        "in production and trade."
      ],
      "caption": "The card that complicates the others: expanding export demand did not always displace local ownership.",
      "prompt": "Why does this case not fit a simple extraction story? What would you need to know before deciding whether it is the exception or the rule?"
    }
  ];
})();
