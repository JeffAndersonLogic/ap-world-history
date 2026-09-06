// Topic 9.9, runtime-authoritative CED alignment, effective Fall 2026.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Thematic Focus, Unit 9 Synthesis (SYN)",
      "theme": "Unit 9 Synthesis",
      "text": "Use Unit 9 evidence to evaluate change, continuity, significance, and complexity.",
      "illustrativeExamples": []
    },
    {
      "code": "Unit 9: Learning Objective I",
      "theme": "Learning Objective",
      "text": "Explain the extent to which science and technology brought change in the period from 1900 to the present.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1",
      "theme": "Unit 9 Synthesis",
      "text": "Rapid advances in science and technology altered the understanding of the universe and the natural world and led to advances in communication, transportation, industry, agriculture, and medicine.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.I.A",
      "theme": "Unit 9 Synthesis",
      "text": "New modes of communication—including radio communication, cellular communication, and the internet—as well as transportation, including air travel and shipping containers, reduced the problem of geographic distance.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.I.D",
      "theme": "Unit 9 Synthesis",
      "text": "Energy technologies, including the use of petroleum and nuclear power, raised productivity and increased the production of material goods.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.III.B",
      "theme": "Unit 9 Synthesis",
      "text": "More effective forms of birth control gave women greater control over fertility, transformed reproductive practices, and contributed to declining rates of fertility in much of the world.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.I.B",
      "theme": "Unit 9 Synthesis",
      "text": "The Green Revolution and commercial agriculture increased productivity and sustained the earth’s growing population as it spread chemically and genetically modified forms of agriculture.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.1.I.C",
      "theme": "Unit 9 Synthesis",
      "text": "Medical innovations, including vaccines and antibiotics, increased the ability of humans to survive and live longer lives.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.I",
      "theme": "Unit 9 Synthesis",
      "text": "States responded in a variety of ways to the economic challenges of the 20th century.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.III.i",
      "theme": "Unit 9 Synthesis",
      "text": "Rights-based discourses challenged old assumptions about race, class, gender, and religion.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.III.ii",
      "theme": "Unit 9 Synthesis",
      "text": "In much of the world, access to education as well as participation in new political and professional roles became more inclusive in terms of race, class, gender, and religion.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.IV.i",
      "theme": "Unit 9 Synthesis",
      "text": "Political and social changes of the 20th century led to changes in the arts and in the second half of the century, popular and consumer culture became more global.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.IV.ii",
      "theme": "Unit 9 Synthesis",
      "text": "Arts, entertainment, and popular culture increasingly reflected the influence of a globalized society.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-6.3.IV.iii",
      "theme": "Unit 9 Synthesis",
      "text": "Consumer culture became globalized and transcended national borders.",
      "illustrativeExamples": []
    }
  ];
  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-9-9-continuity-change-globalized-world-capture.html' };
  lesson.beInTheRoom = {
  url: '',
  desc: 'The Unit 9 synthesis capstone uses the full evidence set instead of a separate simulation.'
};
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.",
    "prompt": "Argue about the extent of change in the twentieth and twenty-first centuries. Use at least one card for change and one for continuity, set out the criteria you are judging extent by, and qualify the claim."
  };
  lesson.images = [
    {
      "title": "Apollo 11 launch, 16 July 1969",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Apollo_11_Launch2.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Apollo_11_Launch2.jpg",
      "caption": "Photograph of the launch. A single state's programme, photographed as a national achievement and watched worldwide.",
      "prompt": "NOTICE the scale of the vehicle and the fact that it was photographed at all. INFER what it took, institutionally, to put this on a launch pad. Is this better evidence of technological change, of state capacity, or of Cold War competition?"
    },
    {
      "title": "Life expectancy by world region, 1770 to 2018",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Life_expectancy_by_world_region%2C_from_1770_to_2018.svg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Life_expectancy_by_world_region%2C_from_1770_to_2018.svg",
      "caption": "Charted series compiled from national statistics. A long measured record rather than a snapshot.",
      "prompt": "NOTICE where the lines start, where they converge and where they do not. INFER which is the bigger story: the rise, or the persistent gaps. Which reading better supports a claim about the extent of change?"
    },
    {
      "title": "Global greenhouse gas emissions by sector",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Gas_by_Sector.png",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Greenhouse_Gas_by_Sector.png",
      "caption": "Charted breakdown of emissions by economic sector. Secondary compilation from reported national data.",
      "prompt": "NOTICE which sectors carry the largest shares. INFER what that implies about which parts of modern life are hardest to change. What does a global total conceal about who emitted it?"
    },
    {
      "title": "The Aral Sea, 1989 and 2014",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/AralSea1989_2014.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:AralSea1989_2014.jpg",
      "caption": "Two satellite images of the same place, twenty-five years apart.",
      "prompt": "NOTICE what is different between the two frames. INFER what sustained human decision-making it took to produce that difference. Is this evidence of change, of continuity in how states treat resources, or of both?"
    },
    {
      "title": "The globalized world, c. 2000",
      "url": "../assets/images/instructional-maps/topic-9-9.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-9-9.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of the networks this unit has studied.",
      "prompt": "NOTICE which connections the map shows and which regions sit off the main lines. INFER what \"global\" means for a place that is not on them. Use this to qualify any claim you build from the other cards."
    }
  ];
})();
