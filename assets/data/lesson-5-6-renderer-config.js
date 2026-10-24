(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 5: Learning Objective G",
      "theme": "Learning Objective",
      "text": "Explain the causes and effects of economic strategies of different states and empires.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.V.C",
      "theme": "Governance",
      "text": "As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization.",
      "illustrativeExamples": [
        "Muhammad Ali’s development of a cotton textile industry in Egypt"
      ]
    },
    {
      "code": "KC-5.2.II.A",
      "theme": "Governance",
      "text": "The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: "First & 10: Industry on Purpose",
    embedUrl: 'first-and-10-topic-5-6-industrialization-government-and-society-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.6 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: "Egypt and Istanbul", detail: "Muhammad Ali governed Egypt from 1805 to 1848 for the Ottoman sultan, whose capital was Istanbul. His government built cotton mills and an army." },
      { label: "Arrow 1: Egypt into Syria, 1831", detail: "Muhammad Ali's army invaded Syria in 1831. In 1840 British warships and Ottoman troops drove it out, and in 1841 Egypt's army was cut to 18,000 men in peacetime." },
      { label: "Japan", detail: "Commodore Perry's warships came to Edo Bay, near Tokyo, in 1853. From 1868 the Meiji government reformed Japan and built railways and mills." },
      { label: "Arrow 2: Japan to Taiwan, 1895", detail: "Japan defeated China in a war over Korea in 1894 and 1895. China gave up its claim over Korea and gave Taiwan to Japan, which kept it as a colony." },
      { label: "Reading the map", detail: "Each arrow joins two places; it is not an exact route. The map shows only the places this topic names, and the shaded regions are approximate." }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-5-6.svg',
    first10:         '../assets/images/topics/5-6/kunisada-first-train-leaving-yokohama-1872.jpg',
    contentDelivery: '../assets/images/topics/5-6/cairo-citadel-photochrom-c1900.jpg',
    beSurreal:       '../assets/images/commons/tomioka-silk-mill-673d6a.jpg',
    skill:           '../assets/images/commons/iwakura-mission-1f7f61.jpg',
    checkpoint1:     '../assets/images/commons/modernegypt-muhammad-ali-by-auguste-couder-bap-17996-d37493.jpg',
    evidence:        '../assets/images/topics/5-6/perry-arrives-uraga-broadsheet-1853.jpg',
    source:          '',
    beInTheRoom:     '../assets/images/topics/5-6/ikkei-takanawa-railway-1872.jpg',
    checkpoint2:     '../assets/images/topics/5-6/kokunimasa-pyongyang-victory-1894.jpg'
  };

  lesson.classPresentation = {
    title: "Class Slides: Industry on Purpose",
    desc: "Follow two chains side by side: why Muhammad Ali's Egypt and Meiji Japan built industry themselves, what each government built, and why Japan's industry lasted while most of Egypt's factories closed.",
    url: 'presentation-topic-5-6-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-factory-sale.html',
    desc: "Tokyo, 1880. On a government council, decide whether Japan should keep running the factories, mines, and shipyards the state built, or sell them to private companies, with Egypt's mills as a comparison."
  };

  lesson.skillBuilder = {
    label: "Making connections practice",
    title: "Find the Pattern, Then the Difference",
    intro: "Topic 5.6 asks you to make a connection between two cases: find a pattern. A pattern is the same links showing up in different cases. To find one, line the two cases up link by link, name what they share, and then name the difference the pattern does not explain. Watch the move on an example from everyday life, then use it on the history.",
    steps: [
      { label: "Line up the links", text: "Put the two cases side by side, step by step. Example: \"Two small-town basketball teams both lost to a stronger rival. Both hired a coach from the city. Both copied the rival's plays.\"" },
      { label: "Name what they share", text: "Pick the links that are really in both cases, not facts that are true of only one. Example: \"Both were threatened by a stronger rival, and both copied the rival's methods with help from an outside expert.\"" },
      { label: "Write the pattern in one sentence", text: "Use the word both. Example: \"Both teams answered a stronger rival by copying its methods with an outside coach.\"" },
      { label: "Name the difference", text: "Say what happened next, and why it differed. Example: \"But one team kept winning after the coach left, while the other fell apart, because only the first trained its own players to coach.\" Use this frame: \"Both [case A] and [case B] [the shared links]. That is the pattern. But [case A] [one result], while [case B] [another], because [a reason].\"" }
    ],
    prompt: "Now do it with Egypt under Muhammad Ali and Japan in the Meiji era. First, line up the two cases with four links each: the threat each government feared, the decision it made, its strategy, and the result. Second, write the pattern in one sentence using the word both, with two links that are really in both cases. Third, name one difference in the results and give one reason for it, with a detail from the lesson.",
    criteria: [
      "I lined up both cases with four links: threat, decision, strategy, and result.",
      "My pattern sentence uses the word both and names two links that are true of both Egypt and Japan.",
      "I named one difference in the results.",
      "I gave one reason for the difference, with a detail from the lesson."
    ]
  };

  lesson.checkpoints = [
    {
      title: "Checkpoint 1: Egypt Builds Industry",
      subtitle: "Checks Learning Target 1 and Success Criterion 1.",
      cardDesc: "Why Muhammad Ali's government built factories, what it built and how it paid for it, and why most of the factories closed.",
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: "Answer in three steps. (1) Explain ONE reason Muhammad Ali's government decided to build factories itself. (2) Describe what it built, and how it paid for it, with one detail from the lesson. (3) Explain why most of the factories closed: give ONE cause from outside Egypt and ONE cause from inside Egypt.",
      responseType: "Checkpoint 1",
      terms: ["Muhammad Ali", "governor", "Ottoman", "sultan", "Napoleon", "1798", "family", "army", "cotton", "long-staple", "monopoly", "crops", "peasants", "factories", "mills", "30", "30,000", "drafted", "1822", "130,000", "machines", "experts", "Europe", "Syria", "1831", "1838", "treaty", "1840", "1841", "18,000", "coal", "animals", "managers", "resisted", "closed", "failed"],
      focus: ["Explain one reason the government built factories.", "Describe what it built and how it paid for it.", "Give one cause of the result from outside Egypt and one from inside."]
    },
    {
      title: "Checkpoint 2: Japan's Chain, and the Pattern",
      subtitle: "Checks Learning Target 2 and Success Criterion 2, and Unit 5 Learning Objective G: the causes and effects of economic strategies of different states.",
      cardDesc: "How pressure from the United States and Europe led to Meiji reforms, state industry and regional power, and what pattern Japan shares with Egypt.",
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: "Explain Japan's economic strategy as a chain of causes and effects, then compare it with Egypt's. (1) Say what pressure the United States and Europe put on Japan. (2) Name ONE Meiji reform and explain how it supported industry. (3) Give ONE example of industry the government built, and say what happened to its businesses after 1880. (4) Give ONE piece of evidence that Japan became a regional power. (5) Name ONE link Japan's chain shares with Egypt's (the pattern) and ONE difference in what happened next.",
      responseType: "Checkpoint 2",
      skill: "Causation",
      terms: ["Perry", "1853", "warships", "unequal treaty", "treaties", "courts", "trade", "Meiji", "1868", "Charter Oath", "samurai", "domains", "1871", "land tax", "schools", "army", "drafted", "Iwakura", "railway", "1872", "Tomioka", "silk", "shipyards", "1880", "sold", "private", "Mitsui", "Mitsubishi", "zaibatsu", "1894", "1895", "China", "Korea", "Taiwan", "regional power", "both", "pattern", "Egypt", "coal", "independent"],
      focus: ["Name the outside pressure.", "Explain how one reform supported industry.", "Give one example of state industry and what happened after 1880.", "Give evidence of regional power.", "Name the pattern Japan shares with Egypt and one difference."]
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: "Evidence Lab: One Link in a Chain",
    task: "Choose at least two evidence cards. For each, say what kind of source it is and who made it (if the caption says), name one precise detail rather than summarizing it, explain what that detail shows about one link in Egypt's chain or Japan's (the threat, the decision, the strategy, or the result), and name one thing the source cannot tell you. The caption identifies the source; it does not supply your conclusion.",
    prompt: "Make a claim about why one of these governments built industry, or what came of it. Support it with evidence from at least two cards."
  };

  lesson.images = [
    {
      title: "Muhammad Ali, Painted for a French Museum",
      alt: "A painted portrait of Muhammad Ali, an older man with a long white beard, wearing a white turban and a dark fur-trimmed robe, seated with a sword",
      url: "../assets/images/commons/modernegypt-muhammad-ali-by-auguste-couder-bap-17996-d37493.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg",
      caption: "A portrait of Muhammad Ali, governor of Egypt from 1805 to 1848, painted by the French artist Auguste Couder about 1840 to 1841 for King Louis-Philippe's history museum at Versailles.",
      prompt: "NOTICE how Muhammad Ali is dressed, how he sits, and what he holds. INFER what the painter wanted viewers to think about him. A French painter made this for a French museum: what can it not tell you about how Egyptians, or his drafted workers, saw him?"
    },
    {
      title: "A Japanese Broadsheet of Perry's Ship",
      alt: "A black-and-white Japanese woodblock broadsheet: rows of feudal lords' crests and spears across the top, an American sailor on the left, and a large steamship with paddle wheel, masts, smoke and a striped flag across the bottom",
      url: "../assets/images/topics/5-6/perry-arrives-uraga-broadsheet-1853.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2002700114/",
      caption: "A Japanese woodblock broadsheet titled \"United States of North America: Perry arrives in Uraga, Sōshū Province.\" It shows Perry's steamship, an American sailor, a map of the coast, and the crests of the Japanese lords ordered to guard it. The Library of Congress dates it only to between 1850 and 1900; a note on it gives 8 July 1853, the day Perry arrived. Library of Congress.",
      prompt: "NOTICE what the ship is made to look like, and what fills the top half of the sheet. INFER what news this sheet gave Japanese readers about the threat, and about how Japan answered it. A sheet sold to the public: what can it not tell you about what Japan's rulers decided to do?"
    },
    {
      title: "The Iwakura Mission, 1872",
      alt: "An old black-and-white photograph of five Japanese men posed in a studio: the man seated in the center wears a Japanese robe and topknot, and the four around him wear Western suits",
      url: "../assets/images/commons/iwakura-mission-1f7f61.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Iwakura_mission.jpg",
      caption: "Five leaders of the Meiji government photographed in 1872, early in a tour of the United States and Europe that lasted from 1871 to 1873. From left: Kido Takayoshi, Yamaguchi Masuka, Iwakura Tomomi (seated, in Japanese dress), Itō Hirobumi, and Ōkubo Toshimichi. Sources disagree on which city it was taken in.",
      prompt: "NOTICE what each man is wearing. INFER what decision about Japan's future the photograph shows. A posed photograph is a choice: what can it not tell you about what the leaders learned on their tour?"
    },
    {
      title: "The Railway at Takanawa, 1872",
      alt: "A Japanese color woodblock print in three sheets: a gold and black steam locomotive and red passenger cars beside a bay with sailing ships, Western men and women in top hats and crinolines standing by the train, and Japanese crowds watching from a bridge",
      url: "../assets/images/topics/5-6/ikkei-takanawa-railway-triptych-1872.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2008660440/",
      caption: "A Japanese color woodblock print in three sheets by Ikkei, 1872, called Steam Engine of the Iron Railroad at Takanawa. Japan's government opened its first railway, from Tokyo to Yokohama, in 1872. The sheets are shown as the Library of Congress photographed them, slightly overlapping. Library of Congress.",
      prompt: "NOTICE who stands beside the train, and who watches from the bridge. INFER what the artist thought the railway meant for Japan. A print made to sell: what can it not tell you about who paid for the railway?"
    },
    {
      title: "Rats in a Bag, 1895",
      alt: "A Japanese color woodblock cartoon: a white cat whose body is a Japanese warship flying the Rising Sun flag chases two black rats, shaped like Chinese warships, into a large white bag; a block of Japanese text fills the top",
      url: "../assets/images/topics/5-6/kiyochika-rats-in-a-bag-1895.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2009615024/",
      caption: "A Japanese woodblock cartoon by Kobayashi Kiyochika, 1895, from a series called Long Live Japan: One Hundred Victories, One Hundred Laughs, made during Japan's war with China. A Japanese warship, drawn as a cat, chases two Chinese warships, drawn as rats, into a bag. Library of Congress.",
      prompt: "NOTICE which side is the cat and which side is the rats. INFER how the artist wanted Japanese buyers to feel about their navy, forty years after Perry's ships. A cartoon made in wartime: what can it not tell you about the real battles?"
    },
    {
      title: "The Sultan's Decree of 1841",
      alt: "A text card with two lines from the 1841 decree. First: I grant unto thee the Government of Egypt, together with the additional privilege of hereditary succession. Second: In time of peace, 18,000 men will suffice for the internal service of the province of Egypt; it shall not be allowed to increase their numbers.",
      label: "Ottoman decree granting Muhammad Ali Egypt · 1841 · English text",
      sourceText: ["\"I grant unto thee the Government of Egypt ... together with the additional privilege of hereditary succession.\"", "\"In time of peace, 18,000 men will suffice for the internal service of the province of Egypt; it shall not be allowed to increase their numbers.\""],
      caption: "Two lines from the English text of the decree in which the Ottoman sultan, in 1841, made the governorship of Egypt hereditary in Muhammad Ali's family and limited its army. Egypt's army had been about 130,000 strong in the early 1830s.",
      prompt: "Read both lines. INFER what Muhammad Ali gained and what he lost in 1841. Then explain what cutting the army might mean for factories that made uniforms and guns. A decree says what was ordered: what can it not tell you about what actually happened to the factories?"
    }
  ];

})();
