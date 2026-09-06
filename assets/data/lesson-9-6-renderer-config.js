// Topic 9.6, runtime-authoritative CED alignment, effective Fall 2026.
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
      "code": "Unit 9: Learning Objective F",
      "theme": "Learning Objective",
      "text": "Explain how and why globalization changed culture over time.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.IV.i",
      "theme": "Cultural Developments and Interactions",
      "text": "Political and social changes of the 20th century led to changes in the arts and in the second half of the century, popular and consumer culture became more global.",
      "illustrativeExamples": [
        "Music: Reggae",
        "Movies: Bollywood",
        "Social media: Facebook, Twitter",
        "Television: BBC",
        "Sports: World Cup soccer, the Olympics"
      ]
    },
    {
      "code": "KC-6.3.IV.ii",
      "theme": "Cultural Developments and Interactions",
      "text": "Arts, entertainment, and popular culture increasingly reflected the influence of a globalized society.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.IV.iii",
      "theme": "Cultural Developments and Interactions",
      "text": "Consumer culture became globalized and transcended national borders.",
      "illustrativeExamples": [
        "Online commerce: Alibaba, eBay",
        "Global brands: Toyota, Coca-Cola"
      ]
    }
  ];
  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-9-6-globalized-culture-capture.html' };
  lesson.beInTheRoom = {
  url: '../beintheroom/unit-9/global-broadcast-board.html',
  desc: 'A new satellite network can reach viewers across South Asia and the diaspora. Decide how much programming should be locally produced, imported, translated, and sponsored by global brands.'
};
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.",
    "prompt": "Make a claim about global culture after 1900. Use at least two cards to test whether the pattern is homogenization, hybridization, or local adaptation, and explain which your evidence actually supports."
  };
  lesson.images = [
    {
      "title": "Olympic opening ceremony, Turin, 2006",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/2006_Olympics_Opening_Ceremony.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:2006_Olympics_Opening_Ceremony.jpg",
      "caption": "Photograph of an opening ceremony staged for a worldwide television audience. The spectacle is designed to be watched elsewhere.",
      "prompt": "NOTICE what the ceremony is doing for the camera rather than for the stadium. INFER who the intended audience is. Does a globally broadcast national spectacle evidence homogenization or its opposite?"
    },
    {
      "title": "Circuits of global culture",
      "url": "../assets/images/instructional-maps/topic-9-6.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-9-6.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of the routes along which media, music and film travelled.",
      "prompt": "NOTICE which directions the marked circuits run. INFER whether cultural traffic in this period moved one way or several. What would you need beyond a map of routes to know what audiences did with what arrived?"
    },
    {
      "title": "Reggae travels beyond Jamaica",
      "label": "Music-distribution record · Jamaica and global markets, 1960s to 1980s",
      "sourceText": [
        "Reggae developed from Jamaican traditions and spread through",
        "records, touring, radio and diaspora communities.",
        "Audiences outside Jamaica adapted it into local forms."
      ],
      "caption": "A music from a small island becoming a global form, by a route that ran outward rather than inward.",
      "prompt": "Which direction does this card send cultural influence, and why does that matter for a claim about globalization? What does it complicate about a story of American or European dominance?"
    },
    {
      "title": "Bollywood reaches transnational audiences",
      "label": "Film-distribution record · Indian cinema, late twentieth century onward",
      "sourceText": [
        "Hindi-language films circulated through cinemas, satellite",
        "television, video and streaming.",
        "Diaspora audiences were a substantial part of the market."
      ],
      "caption": "A film industry with a global audience that is not primarily Western.",
      "prompt": "Set this beside the reggae card. What claim do the two together support that neither supports alone? What would weaken it?"
    },
    {
      "title": "Alibaba expands online commerce",
      "label": "Digital-commerce record · China, founded 1999",
      "sourceText": [
        "Alibaba built online marketplaces linking sellers and buyers",
        "through digital payment and logistics systems.",
        "A platform developed in China became globally significant."
      ],
      "caption": "A commercial platform, included here because commerce carries culture: what people buy, and from whom.",
      "prompt": "Is a shopping platform cultural evidence? Argue it either way, then say what a historian would need to settle it."
    }
  ];
})();
