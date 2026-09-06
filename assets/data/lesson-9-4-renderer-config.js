// Topic 9.4, runtime-authoritative CED alignment, effective Fall 2026.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Economic Systems (ECN)",
      "theme": "Economic Systems",
      "text": "As societies develop, they affect and are affected by the ways that they produce, exchange, and consume goods and services.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 9: Learning Objective D",
      "theme": "Learning Objective",
      "text": "Explain the continuities and changes in the global economy from 1900 to present.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.I.D",
      "theme": "Economic Systems",
      "text": "In a trend accelerated by the end of the Cold War, many governments encouraged free-market economic policies and promoted economic liberalization in the late 20th century.",
      "illustrativeExamples": [
        "The United States under Ronald Reagan",
        "Britain under Margaret Thatcher",
        "China under Deng Xiaoping",
        "Chile under Augusto Pinochet"
      ]
    },
    {
      "code": "KC-6.3.I.E",
      "theme": "Economic Systems",
      "text": "In the late 20th century, revolutions in information and communications technology led to the growth of knowledge economies in some regions, while industrial production and manufacturing were increasingly situated in Asia and Latin America.",
      "illustrativeExamples": [
        "Finland",
        "Japan",
        "U.S.",
        "Vietnam",
        "Bangladesh",
        "Mexico",
        "Honduras"
      ]
    },
    {
      "code": "KC-6.3.II.B",
      "theme": "Economic Systems",
      "text": "Changing economic institutions, multinational corporations, and regional trade agreements reflected the spread of principles and practices associated with free-market economics throughout the world.",
      "illustrativeExamples": [
        "World Trade Organization (WTO)",
        "North American Free Trade Agreement (NAFTA)",
        "Association of Southeast Asian Nations (ASEAN)",
        "Nestlé",
        "Nissan",
        "Mahindra and Mahindra"
      ]
    }
  ];
  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-9-4-economics-global-age-capture.html' };
  lesson.beInTheRoom = {
  url: '../beintheroom/unit-9/structural-adjustment-cabinet.html',
  desc: 'A debt and currency crisis has emptied foreign-exchange reserves. International lenders offer emergency credit if the government devalues, cuts subsidies, and restructures state enterprises.'
};
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.",
    "prompt": "Make a claim about what changed in the global economy after 1945 and what continued. Use at least two cards, name the mechanism that carried the change, and identify who is not visible in the evidence you chose."
  };
  lesson.images = [
    {
      "title": "Container ship under way",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Container_ship_Hanjin_Taipei.jpg",
      "caption": "Photograph of a loaded container ship. Standardized boxes are the physical form the late twentieth-century trading system took.",
      "prompt": "NOTICE how the cargo is packed and what that implies about handling it. INFER what changes for a port, and for the people who used to unload ships. What does a photograph of a ship not tell you about who owns the cargo or where the profit lands?"
    },
    {
      "title": "Global production and trade in the late twentieth century",
      "url": "../assets/images/instructional-maps/topic-9-4.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-9-4.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of major manufacturing regions and trade routes.",
      "prompt": "NOTICE which regions the map marks as producing and which as consuming. INFER what that division implies about wages and bargaining power. What would you need beyond a map to show the arrangement was chosen rather than natural?"
    },
    {
      "title": "Shenzhen becomes a Special Economic Zone",
      "label": "State-policy record · China, 1980",
      "sourceText": [
        "China designated Shenzhen and other coastal areas as zones",
        "open to foreign investment and market experimentation.",
        "The Communist Party retained political control throughout."
      ],
      "caption": "A decision by a communist state to admit foreign capital in defined places, and to keep everything else.",
      "prompt": "Is this evidence of a market economy replacing a planned one, or of a state using markets for its own ends? Defend the reading, and name what evidence would settle it."
    },
    {
      "title": "NAFTA links three national markets",
      "label": "Trade-agreement record · North American Free Trade Agreement, 1994",
      "sourceText": [
        "Canada, Mexico and the United States reduced many barriers",
        "to trade and investment across their borders.",
        "Production chains increasingly crossed those borders."
      ],
      "caption": "A treaty that made a single production region out of three countries with very different wage levels.",
      "prompt": "What does a trade agreement change that a shipping technology cannot, and what can it not change on its own? Pair this with one other card and say which does more explanatory work."
    },
    {
      "title": "The World Trade Organization begins",
      "label": "Institutional record · WTO, 1995",
      "sourceText": [
        "The WTO replaced the GATT framework with a permanent body",
        "for trade rules and binding dispute settlement.",
        "Member governments accepted common procedures."
      ],
      "caption": "The point at which trade rules acquired a standing institution and an enforcement mechanism.",
      "prompt": "Why might a permanent court for trade disputes matter more to a small economy than to a large one? What evidence would you need before claiming the WTO favored either?"
    }
  ];
})();
