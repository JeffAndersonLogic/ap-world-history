(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-5.4.III.A",
      "theme": "Social Interactions and Organization",
      "text": "Migrants tended to be male, leaving women to take on new roles in the home society that had been formerly occupied by men.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.4.III.B",
      "theme": "Social Interactions and Organization",
      "text": "Migrants often created ethnic enclaves in different parts of the world that helped transplant their culture into new environments.",
      "illustrativeExamples": [
        "Chinese in Southeast Asia, the Caribbean, South America, and North America",
        "Indians in East and Southern Africa, the Caribbean, and Southeast Asia",
        "Irish in North America",
        "Italians in North and South America"
      ]
    },
    {
      "code": "KC-5.4.III.C",
      "theme": "Social Interactions and Organization",
      "text": "Receiving societies did not always embrace immigrants, as seen in the various degrees of ethnic and racial prejudice and the ways states attempted to regulate the increased flow of people across their borders.",
      "illustrativeExamples": [
        "Chinese Exclusion Act",
        "White Australia policy"
      ]
    }
  ];
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Build a claim about the effects of migration on receiving and sending societies. Use at least two cards, and make sure your claim accounts for a place migrants left as well as one they arrived in."
  };
  lesson.images = [
    {
      "title": "Chinatown, San Francisco, 1880",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Holiday_in_Chinatown,_San_Francisco_%28P._Frenzeny,_Harper's,_1880-03-20%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:A_Holiday_in_Chinatown,_San_Francisco_%28P._Frenzeny,_Harper's,_1880-03-20%29.jpg",
      "caption": "An illustration published in Harper's Weekly, March 1880, two years before Chinese immigration was restricted by federal law. The accompanying article argued the community would not assimilate.",
      "prompt": "NOTICE what the street shows about how the community organized itself, and who this was drawn for. INFER what institutions a migrant population builds when the surrounding society excludes it. What does an illustration made for a national magazine reveal about its own audience, not just its subject?"
    },
    {
      "title": "Diasporas and receiving societies",
      "url": "../assets/images/instructional-maps/topic-6-7.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-7.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of major diaspora communities and their origins.",
      "prompt": "NOTICE the pairing of origin and destination. INFER what a sending region loses and gains at the same time. What does the map show nothing at all about?"
    },
    {
      "title": "The Chinese Exclusion Act",
      "label": "Legal record · United States, 1882",
      "sourceText": [
        "Federal law suspended the immigration of Chinese laborers.",
        "Migration became explicitly regulated by national origin."
      ],
      "caption": "The first American law to bar a group by nationality, passed while the community in the photograph was already established.",
      "prompt": "What does a law like this tell you about the receiving society rather than about the migrants? Read it beside the photograph: which comes first, the community or the exclusion?"
    },
    {
      "title": "The White Australia policy",
      "label": "Legal record · Immigration Restriction Act, 1901",
      "sourceText": [
        "A dictation test provided the mechanism for racial exclusion.",
        "The policy followed decades of anti-Chinese restriction."
      ],
      "caption": "Exclusion written so that the racial purpose is not stated in the text: the test could be given in any European language.",
      "prompt": "Why would a government write a law this way? What does the gap between the mechanism and the purpose tell you about how such policies were justified?"
    },
    {
      "title": "Remittances and absent workers",
      "label": "Household and economic reconstruction · sending regions",
      "sourceText": [
        "Migrants sent earnings home across long distances.",
        "Male-selective migration could alter household labor",
        "and gender roles in the villages they left."
      ],
      "caption": "The only card here about the places migrants came from, and labeled a reconstruction rather than a record.",
      "prompt": "Build the sending-society half of your claim from this card. What kind of source would give you direct evidence for it, and why is that evidence scarce?"
    }
  ];
})();
