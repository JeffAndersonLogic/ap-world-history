(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  lesson.meta.feedbackToolUrl = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
  lesson.beInTheRoom = {
    url: '../beintheroom/unit-6/the-mission-memorandum.html',
    desc: 'An imperial lobby asks your committee to endorse a proposed protectorate. Evaluate how “civilization,” conversion, nationalism, and racial hierarchy are being used to turn expansion into a moral claim.'
  };
  lesson.evidenceLab = {
    "title": "Evidence Lab: Build and Test a Claim",
    "task": "Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.",
    "prompt": "Build a claim about why Europeans and others justified imperial expansion after 1750. Use at least two cards, distinguish a stated justification from an underlying cause, and explain how you can tell them apart."
  };
  lesson.images = [
    {
      "title": "The Rhodes Colossus",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Punch_Rhodes_Colossus.png",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png",
      "caption": "Cartoon published in the British magazine Punch, 1892, showing Cecil Rhodes astride Africa. Commentary made for a British readership.",
      "prompt": "NOTICE what the cartoonist exaggerates and what sits outside the frame. INFER what British readers were expected to find plausible. Is a cartoon evidence of what people believed, or of what a magazine thought would sell?"
    },
    {
      "title": "The Berlin Conference, 1884 to 1885",
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kongokonferenz.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kongokonferenz.jpg",
      "caption": "Contemporary depiction of the conference at which European powers set rules for claims in Africa. No African state was represented.",
      "prompt": "NOTICE who is in the room. INFER, from who is absent, what the conference assumed about the territory being divided. What does a picture of a meeting not tell you about what happened on the ground afterward?"
    },
    {
      "title": "Imperial claims after 1870",
      "url": "../assets/images/instructional-maps/topic-6-1.svg",
      "sourceUrl": "../assets/images/instructional-maps/topic-6-1.svg",
      "caption": "BeHistorical reference map. Secondary geographic reconstruction of imperial holdings and claims.",
      "prompt": "NOTICE how much of the map is claimed and by how few states. INFER what that leaves for a latecomer. How does scarcity of unclaimed land help explain the timing of the scramble?"
    },
    {
      "title": "Rhodes on race and empire",
      "label": "Primary-source excerpt · Cecil Rhodes, 1877",
      "sourceText": [
        "“We are the finest race in the world.”",
        "Expansion is framed as a racial and national mission."
      ],
      "caption": "Written by one of the men who did the expanding, in a private confession of faith rather than a public speech.",
      "prompt": "What kind of justification is this: economic, strategic, or ideological? What would you need to show that the belief caused the expansion rather than decorating it?"
    },
    {
      "title": "Kipling and imperial duty",
      "label": "Primary-source excerpt · “The White Man’s Burden,” 1899",
      "sourceText": [
        "“Take up the White Man’s burden…”",
        "Rule is presented as sacrifice and obligation rather than gain."
      ],
      "caption": "A poem addressed to the United States on its acquisition of the Philippines, urging it to take up empire.",
      "prompt": "How does presenting rule as a burden change what the argument has to answer for? Set it beside the Rhodes card: are these the same justification or two different ones?"
    },
    {
      "title": "The Berlin Act and effective occupation",
      "label": "Diplomatic record · General Act of the Berlin Conference, 1885",
      "sourceText": [
        "European powers set rules for claims and for navigation.",
        "“Effective occupation” rewarded actual control on the ground.",
        "A claim on paper was not enough to hold territory."
      ],
      "caption": "The rule that turned mapmaking into occupation: to keep a claim, a power had to administer it.",
      "prompt": "What behaviour does a rule like this encourage? Use it to explain the pace of conquest after 1885, and say what other evidence you would need."
    }
  ];
})();
