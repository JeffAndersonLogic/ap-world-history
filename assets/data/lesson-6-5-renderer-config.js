(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.2.I.E",
      "theme": "Economic Systems",
      "text": "Industrialized states and businesses within those states practiced economic imperialism primarily in Asia and Latin America.",
      "illustrativeExamples": [
        "Britain and France expanding their influence in China through the Opium Wars",
        "The construction of the Port of Buenos Aires with the support of British firms"
      ]
    },
    {
      "code": "KC-5.1.II.C",
      "theme": "Economic Systems",
      "text": "Trade in some commodities was organized in a way that gave merchants and companies based in Europe and the U.S. a distinct economic advantage.",
      "illustrativeExamples": [
        "Opium produced in the Middle East or South Asia and exported to China",
        "Cotton grown in South Asia and Egypt and exported to Great Britain and other European countries",
        "Palm oil produced in sub-Saharan Africa and exported to European countries",
        "Copper extracted in Chile"
      ]
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Explain economic imperialism without conquest. Use at least two cards to show how a state could lose control of its own economy, and say what distinguishes this from colonial rule."
  };
  lesson.images = [
    {
      "title": "The port of Buenos Aires",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Buenos_Aires_Port.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Buenos_Aires_Port.jpg",
      "caption": "Photograph of the port built out with British capital, in a country that was never a colony.",
      "prompt": "NOTICE the scale of the infrastructure and what it is built to move. INFER whose interests the layout serves. What does a port photograph not show about who owns it or who holds the debt?"
    },
    {
      "title": "Economic imperialism and financial control",
      "url": "../assets/images/instructional-maps/topic-6-5.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-5.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of investment, debt and treaty-port arrangements.",
      "prompt": "NOTICE which states appear here that do not appear on a map of colonies. INFER what kind of control does not require a flag. What would you need beyond a map to show that control was real?"
    },
    {
      "title": "The Treaty of Nanjing",
      "label": "Treaty record · China and Britain, 1842",
      "sourceText": [
        "China opened treaty ports and paid an indemnity.",
        "Hong Kong was ceded to Britain.",
        "China remained a sovereign state throughout."
      ],
      "caption": "Terms imposed after defeat on a state that was never colonized, which is what makes it the clearest case of this topic.",
      "prompt": "What is taken here and what is left? Use the card to define economic imperialism against colonial rule."
    },
    {
      "title": "The Ottoman Public Debt Administration",
      "label": "Financial institution · established 1881",
      "sourceText": [
        "Foreign creditors gained control over selected Ottoman revenues.",
        "Debt repayment became an international governance mechanism."
      ],
      "caption": "A creditors' body collecting an empire's own taxes, inside that empire, with its consent on paper.",
      "prompt": "How much sovereignty is left when foreign creditors collect the taxes? Compare this mechanism with the treaty in the Nanjing card."
    },
    {
      "title": "Egypt, debt and occupation",
      "label": "Financial and political sequence · 1870s to 1882",
      "sourceText": [
        "Debt gave European creditors growing leverage over Egyptian finances.",
        "Britain occupied Egypt militarily in 1882."
      ],
      "caption": "The case where financial control ended in troops, which is the boundary this topic sits on.",
      "prompt": "Does this card belong in economic imperialism or in conquest? Argue the placement, and say what the sequence implies about the relationship between the two."
    },
    {
      "title": "British capital in Argentine railways",
      "label": "Investment record · late nineteenth century",
      "sourceText": [
        "Foreign capital financed major railway expansion.",
        "Routes linked export-producing regions to Atlantic ports."
      ],
      "caption": "Infrastructure built by outside investors, laid out to serve export rather than internal connection.",
      "prompt": "Read the route pattern as evidence of intent. What would an internally focused railway network look like instead, and how would you check?"
    }
  ];
})();
