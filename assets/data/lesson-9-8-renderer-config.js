// Topic 9.8, runtime-authoritative CED alignment, effective Fall 2026.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Governance (GOV)",
      "theme": "Governance",
      "text": "Governments obtain, retain, and exercise power in different ways, while internal and external factors shape state formation, expansion, and decline.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 9: Learning Objective H",
      "theme": "Learning Objective",
      "text": "Explain how and why globalization changed international interactions among states.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.II.A",
      "theme": "Governance",
      "text": "New international organizations, including the United Nations, formed with the stated goal of maintaining world peace and facilitating international cooperation.",
      "illustrativeExamples": []
    }
  ];
  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-9-8-institutions-globalized-world-capture.html' };
  lesson.beInTheRoom = {
  url: '../beintheroom/unit-9/peacekeeping-mandate.html',
  desc: 'Reports of attacks on civilians are increasing in a conflict zone where a lightly armed UN mission was sent to monitor a ceasefire. The Security Council must decide whether to expand the mandate and commit resources.'
};
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.",
    "prompt": "Build a claim about what international institutions could and could not do after 1945. Use at least two cards, name the mechanism that gave an institution power in one case, and the one that failed in another."
  };
  lesson.images = [
    {
      "title": "The United Nations General Assembly hall",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/UN_General_Assembly_hall.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:UN_General_Assembly_hall.jpg",
      "caption": "Photograph of the Assembly chamber, where every member state holds one vote regardless of size.",
      "prompt": "NOTICE how the room is arranged and what that arrangement asserts about the members. INFER what kind of authority a body organized this way can claim. What does the room not show about which decisions are binding?"
    },
    {
      "title": "International organizations and their reach",
      "url": "../assets/images/instructional-maps/topic-9-8.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-9-8.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of membership and major operations.",
      "prompt": "NOTICE where operations are marked and where they are not. INFER what determines whether an institution acts in a given place. What would you need beyond a map to explain a case where it did not act?"
    },
    {
      "title": "The Security Council veto",
      "label": "Institutional design record · United Nations, 1945 onward",
      "sourceText": [
        "The United States, the Soviet Union and then Russia, China,",
        "Britain and France hold permanent seats.",
        "A negative vote by any one of them blocks substantive action."
      ],
      "caption": "The rule, written into the founding charter, that decides when the organization can act at all.",
      "prompt": "This design was a condition of the great powers joining at all. Use it to explain one case where the U.N. acted and one where it did not, then say whether the rule is a flaw or the price of the institution existing."
    },
    {
      "title": "The first United Nations Emergency Force",
      "label": "Peacekeeping record · Suez Crisis, 1956",
      "sourceText": [
        "The U.N. deployed its first large armed peacekeeping force",
        "to supervise the end of fighting after the Suez Crisis.",
        "Peacekeepers operated with the consent of the host state."
      ],
      "caption": "The invention of peacekeeping, in a crisis where two permanent members were themselves the aggressors.",
      "prompt": "What made action possible here despite the veto? What does the consent requirement mean for cases where a government is the source of the violence?"
    },
    {
      "title": "Rwanda exposes institutional limits",
      "label": "U.N. self-review and conflict record · Rwanda, 1994; review published 1999",
      "sourceText": [
        "A peacekeeping mission was present as the genocide unfolded,",
        "with a mandate and resources that were sharply limited.",
        "A later U.N. inquiry criticized the organization's response."
      ],
      "caption": "The organization's own inquiry into its worst failure, which makes this a rare piece of evidence: an institution assessing itself.",
      "prompt": "Which of the design features in the other cards best explains this outcome? Note that this is a self-review: how does the author of a document change what you can conclude from it?"
    }
  ];
})();
