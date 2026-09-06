// Topic 9.7, runtime-authoritative CED alignment, effective Fall 2026.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Cultural Developments and Interactions (CDI)",
      "theme": "Cultural Developments and Interactions",
      "text": "Ideas, beliefs, and religions shape how groups view themselves, and interactions among societies have political, social, and cultural implications.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 9: Learning Objective G",
      "theme": "Learning Objective",
      "text": "Explain the various responses to increasing globalization from 1900 to present.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.IV.iv",
      "theme": "Cultural Developments and Interactions",
      "text": "Responses to rising cultural and economic globalization took a variety of forms.",
      "illustrativeExamples": [
        "Anti-IMF and anti-World Bank activism",
        "Advent of locally developed social media (Weibo in China)"
      ]
    }
  ];
  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-9-7-resistance-globalization-capture.html' };
  lesson.beInTheRoom = {
  url: '../beintheroom/unit-9/seattle-wto-coalition.html',
  desc: 'The WTO ministerial is opening. A coalition of labor, environmental, and global-justice groups must agree on a message and tactics without pretending its members have identical goals.'
};
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.",
    "prompt": "Explain why people opposed globalization, and show that the opposition was not one thing. Use at least two cards from different kinds of grievance, and identify what each set of protesters actually wanted."
  };
  lesson.images = [
    {
      "title": "Marchers at the WTO ministerial, Seattle, 1999",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/WTO_Protests-Seattle-Marchers-29Nov1999.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:WTO_Protests-Seattle-Marchers-29Nov1999.jpg",
      "caption": "Photograph of the Seattle protests, November 1999. Labor unions, environmental groups and human-rights organizations marched together.",
      "prompt": "NOTICE what the banners and the marchers indicate about who turned out. INFER what such different groups thought they shared. What does a photograph of a march not tell you about whether it achieved anything?"
    },
    {
      "title": "Where opposition to globalization arose",
      "url": "../assets/images/instructional-maps/topic-9-7.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-9-7.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of major protests and movements against globalized economic policy.",
      "prompt": "NOTICE whether the marked protests cluster in wealthy or poorer economies, or both. INFER what that says about who felt the costs. What does the map not distinguish between: a protest about wages and a protest about water?"
    },
    {
      "title": "Anti-IMF structural-adjustment protests",
      "label": "Movement record · debt-crisis states, 1980s to 2000s",
      "sourceText": [
        "Protests in several countries opposed austerity, subsidy cuts,",
        "privatization and currency reforms tied to IMF adjustment programs.",
        "The programs were conditions attached to loans."
      ],
      "caption": "Opposition in borrowing countries to conditions set by lenders, which is a grievance about sovereignty as much as about prices.",
      "prompt": "How does this grievance differ from the one on display in Seattle? Which of the two is better evidence that globalization distributed its costs unevenly?"
    },
    {
      "title": "The Cochabamba Water War",
      "label": "Local protest and policy record · Bolivia, 2000",
      "sourceText": [
        "Mass protests opposed a privatized water concession",
        "after prices and access became political issues.",
        "The government cancelled the concession."
      ],
      "caption": "A single city, a single utility, and a protest that reversed the policy. The smallest scale in this pool and the only clear win.",
      "prompt": "Why might opposition succeed here and not at the WTO? What does the difference in scale explain, and what does it not?"
    },
    {
      "title": "Weibo as a locally developed platform",
      "label": "Technology and cultural-policy record · China, launched 2009",
      "sourceText": [
        "Sina Weibo became a major Chinese social-media platform",
        "inside a nationally regulated internet.",
        "Users joined global-style digital culture on national terms."
      ],
      "caption": "Not a protest: an alternative. A state and a market building their own version rather than refusing the technology.",
      "prompt": "Is building your own platform a form of resistance to globalization, or a form of participating in it? Use this card to complicate a claim built from the protest cards."
    }
  ];
})();
