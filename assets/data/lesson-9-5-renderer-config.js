// Topic 9.5, runtime-authoritative CED alignment, effective Fall 2026.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Social Interactions and Organization (SIO)",
      "theme": "Social Interactions and Organization",
      "text": "The process by which societies group their members and the norms governing interactions among groups and individuals influence political, economic, and cultural institutions.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 9: Learning Objective E",
      "theme": "Learning Objective",
      "text": "Explain how social categories, roles, and practices have been maintained and challenged over time.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.III.i",
      "theme": "Social Interactions and Organization",
      "text": "Rights-based discourses challenged old assumptions about race, class, gender, and religion.",
      "illustrativeExamples": [
        "The U.N. Universal Declaration of Human Rights, especially as it sought to protect the rights of children, women, and refugees",
        "Global feminism movements",
        "Negritude movement",
        "Liberation theology in Latin America"
      ]
    },
    {
      "code": "KC-6.3.III.ii",
      "theme": "Social Interactions and Organization",
      "text": "In much of the world, access to education as well as participation in new political and professional roles became more inclusive in terms of race, class, gender, and religion.",
      "illustrativeExamples": [
        "The right to vote and/or to hold public office granted to women in the United States (1920), Brazil (1932), Turkey (1934), Japan (1945), India (1947), and Morocco (1963)",
        "The rising rate of female literacy and the increasing numbers of women in higher education, in most parts of the world",
        "The U.S. Civil Rights Act of 1965",
        "The end of apartheid",
        "Caste reservation in India"
      ]
    },
    {
      "code": "KC-6.3.II.C",
      "theme": "Social Interactions and Organization",
      "text": "Movements throughout the world protested the inequality of the environmental and economic consequences of global integration.",
      "illustrativeExamples": [
        "Greenpeace",
        "Professor Wangari Maathai’s Green Belt Movement in Kenya",
        "World Fair Trade Organization"
      ]
    }
  ];
  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-9-5-calls-for-reform-responses-capture.html' };
  lesson.beInTheRoom = {
  url: '../beintheroom/unit-9/green-belt-petition.html',
  desc: 'A government-backed complex would replace public green space. A coalition inspired by the Green Belt Movement must choose how to connect environmental protection, women’s participation, and democratic accountability.'
};
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.",
    "prompt": "Build a claim about how rights expanded after 1900, and qualify it. Use at least two cards, distinguish a formal legal change from a lived outcome, and say which of your cards is evidence for which."
  };
  lesson.images = [
    {
      "title": "Wangari Maathai",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Wangari_Maathai.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Wangari_Maathai.jpg",
      "caption": "Photograph of the founder of Kenya's Green Belt Movement, which organized women to plant trees and to defend community access to land.",
      "prompt": "NOTICE that this is a portrait of an organizer rather than of an official. INFER where the pressure for reform in this case originated. What can a portrait not show about whether the movement changed anything?"
    },
    {
      "title": "Reform movements and rights claims after 1900",
      "url": "../assets/images/instructional-maps/topic-9-5.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-9-5.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction locating the movements this topic studies.",
      "prompt": "NOTICE how widely spread the marked movements are. INFER what that distribution suggests about whether rights claims were exported or arrived independently. What does a map of locations not show about what each movement actually won?"
    },
    {
      "title": "Universal Declaration of Human Rights",
      "label": "International rights document · United Nations, 1948",
      "sourceText": [
        "The declaration states that all human beings are born free",
        "and equal in dignity and rights.",
        "It is a declaration, not a treaty, and it binds no one."
      ],
      "caption": "The text most later rights claims were argued from, adopted three years after the United Nations was founded.",
      "prompt": "What can a document with no enforcement mechanism still do? Use one other card to test whether the declaration made any difference to it."
    },
    {
      "title": "Women gain the vote, by country and year",
      "label": "Comparative legal timeline · twentieth century",
      "sourceText": [
        "United States 1920, Brazil 1932, Turkey 1934,",
        "Japan 1945, India 1947, Morocco 1963.",
        "Each date is a change in law, not in practice."
      ],
      "caption": "Six national dates, so the sequence can be read rather than assumed. The spread of the dates is itself the evidence.",
      "prompt": "What pattern do these dates make, and what does the pattern suggest about the causes? Name a country whose date would complicate the pattern you see."
    },
    {
      "title": "Apartheid ends in South Africa",
      "label": "Political and legal record · South Africa, 1990 to 1994",
      "sourceText": [
        "Apartheid laws were dismantled and banned organizations",
        "including the ANC were legalized.",
        "South Africa held its first election with universal franchise in 1994."
      ],
      "caption": "The dismantling of a legal racial order, dated, after decades of internal resistance and external pressure.",
      "prompt": "This card shows a formal legal change. What evidence would you need to know whether lived conditions changed with it, and why is that a different question?"
    }
  ];
})();
