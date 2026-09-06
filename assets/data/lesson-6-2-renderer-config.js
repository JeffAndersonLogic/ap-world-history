(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.2.I.A",
      "theme": "Governance",
      "text": "Some states with existing colonies strengthened their control over those colonies and in some cases assumed direct control over colonies previously held by non-state entities.",
      "illustrativeExamples": [
        "Shift from the private ownership of the Congo by King Leopold II to the Belgium government",
        "Shift from the Dutch East India Company to Dutch government control in Indonesia and Southeast Asia"
      ]
    },
    {
      "code": "KC-5.2.I.B",
      "theme": "Governance",
      "text": "European states as well as the United States and Japan acquired territories throughout Asia and the Pacific, while Spanish and Portuguese influence declined.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.2.I.C",
      "theme": "Governance",
      "text": "Many European states used both warfare and diplomacy to expand their empires in Africa.",
      "illustrativeExamples": [
        "Britain in West Africa",
        "Belgium in the Congo",
        "French in West Africa"
      ]
    },
    {
      "code": "KC-5.2.I.D",
      "theme": "Governance",
      "text": "Europeans established settler colonies in some parts of their empires.",
      "illustrativeExamples": [
        "New Zealand"
      ]
    },
    {
      "code": "KC-5.2.II.B",
      "theme": "Governance",
      "text": "The United States, Russia, and Japan expanded their land holdings by conquering and settling neighboring territories.",
      "illustrativeExamples": []
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Make a claim about how states expanded their power after 1750. Use at least two cards from different mechanisms, and explain what each mechanism required that the others did not."
  };
  lesson.images = [
    {
      "title": "The Berlin Conference, 1884 to 1885",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg",
      "caption": "Contemporary depiction of the conference at which European powers agreed rules for claiming African territory.",
      "prompt": "NOTICE that this is a negotiation between claimants. INFER what kind of expansion begins in a conference room rather than on a battlefield. What does the image not show about how the claims were enforced?"
    },
    {
      "title": "State expansion after 1750",
      "url": "../assets/images/instructional-maps/topic-6-2.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-2.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of the expansions this topic studies.",
      "prompt": "NOTICE which expansions are contiguous with the expanding state and which are overseas. INFER what difference that makes to how a territory is governed. What does the map not show about local collaboration or resistance?"
    },
    {
      "title": "The British Raj replaces company rule",
      "label": "Administrative record · India, 1858",
      "sourceText": [
        "After the 1857 rebellion, rule transferred from the",
        "East India Company to the Crown.",
        "A company empire became a directly governed one."
      ],
      "caption": "A change of ruler without a change of ruled: the same territory, administered by a state instead of a corporation.",
      "prompt": "What does this transfer suggest about the limits of governing through a company? Which other card shows a power making the opposite choice?"
    },
    {
      "title": "The Congo Free State",
      "label": "Sovereignty record · 1885 to 1908",
      "sourceText": [
        "Leopold II held the Congo as a personal domain,",
        "not as a Belgian colony.",
        "Belgium annexed it as a formal colony in 1908."
      ],
      "caption": "Territory held by a monarch in a private capacity, and then taken over by his own country after reports of atrocity.",
      "prompt": "What does private ownership of a territory change about accountability? Note the 1908 date: what does the annexation itself tell you?"
    },
    {
      "title": "Japan takes Taiwan",
      "label": "Treaty record · Treaty of Shimonoseki, 1895",
      "sourceText": [
        "Qing China ceded Taiwan after defeat in war.",
        "Japan joined the ranks of overseas imperial powers."
      ],
      "caption": "An Asian state acquiring an overseas colony from another Asian state, by treaty after a war.",
      "prompt": "How does this card complicate a claim that imperialism was European? What would you need to show that Japanese rule worked like, or unlike, European rule?"
    },
    {
      "title": "The United States annexes Hawai‘i",
      "label": "Legal and political record · 1893 and 1898",
      "sourceText": [
        "The Hawaiian monarchy was overthrown in 1893",
        "by settlers and business interests with U.S. support.",
        "The United States formally annexed the islands in 1898."
      ],
      "caption": "Five years between the overthrow and the annexation, which is itself part of the evidence.",
      "prompt": "What does the gap between 1893 and 1898 suggest about how this expansion was justified at home? Compare the mechanism here with the treaty in the Taiwan card."
    }
  ];
})();
