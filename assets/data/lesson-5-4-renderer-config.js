(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 5: Learning Objective E",
      "theme": "Learning Objective",
      "text": "Explain how different modes and locations of production have developed and changed over time.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.II.B",
      "theme": "Technology and Innovation",
      "text": "The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.",
      "illustrativeExamples": [
        "Shipbuilding in India and Southeast Asia",
        "Iron works in India",
        "Textile production in India and Egypt"
      ]
    },
    {
      "code": "KC-5.1.I.D",
      "theme": "Technology and Innovation",
      "text": "As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: "First & 10: Who Made the World's Goods?",
    embedUrl: 'first-and-10-topic-5-4-industrialization-spreads-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.4 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: "Britain", detail: "Where the factory began, in the 1770s. The arrows start here." },
      { label: "Arrows 1 to 4: where the methods went", detail: "Arrow 1: the United States, 1790s. Arrow 2: Belgium and the German states, 1810s to 1830s. Arrow 3: Russia, 1870s. Arrow 4: Japan, 1880s. Each arrow shows when factory methods arrived, not one exact route." },
      { label: "Shaded regions in Asia and the Middle East", detail: "India, China, and Egypt. People there kept making cloth, ships, and other goods, mostly by hand, while their share of the world's manufacturing fell." },
      { label: "Reading the map", detail: "The shaded areas mark regions, not exact borders. The map shows only the places this topic names." }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-5-4.svg',
    first10:         '../assets/images/commons/the-opening-of-the-great-exhibition-by-queen-victoria-on-1-may-1851-5fa547.jpg',
    contentDelivery: '',
    beSurreal:       '',
    skill:           '',
    checkpoint1:     '',
    evidence:        '',
    source:          '',
    beInTheRoom:     '',
    checkpoint2:     ''
  };

  lesson.classPresentation = {
    title: "Class Slides: Who Made the World's Goods?",
    desc: "Follow the story: where most goods were made in 1750, how factory methods left Britain with skilled people, machines, and money, where they took root, how the world's shares of manufacturing moved, and what the old makers kept making.",
    url: 'presentation-topic-5-4-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-great-exhibition.html',
    desc: "London, 1851, the Great Exhibition. Walk the hall as a visitor from one of the world's making regions, decide what to take home, and explain what has changed and what has stayed the same in who makes the world's goods."
  };

  lesson.skillBuilder = {
    label: "Making connections practice",
    title: "Find the Pattern",
    intro: "Topic 5.4 asks you to find patterns. A pattern is something that happens again and again across different cases. To find one, list the cases, say what happened in each, and then name what they all share in one sentence. Watch the move on an example from everyday life, then use it on the history.",
    steps: [
      { label: "List the cases", text: "Pick at least three cases of the same kind of thing. Example: \"June, July, and August at the town pool.\"" },
      { label: "Say what happened in each", text: "Give one fact for each case. Example: \"In June, July, and August, the pool was busiest on the hottest afternoons.\"" },
      { label: "Name what they share", text: "Ask: what is true in every case? Example: \"the busiest days were always the hottest.\"" },
      { label: "Say the pattern", text: "Put it together with \"so the pattern is\": \"In June, July, and August, the town pool was busiest on the hottest afternoons, so the pattern is that heat brings swimmers.\" Use this frame: \"In [case one], [case two], and [case three], [what happened in each], so the pattern is [what they all share].\"" }
    ],
    prompt: "Now do it yourself, twice. First, choose THREE places the factory methods reached (from the United States, Belgium, the German states, Russia, and Japan). For each, say what carried the methods there, and then state the pattern with the frame. Second, find the pattern in the shares: using two of Bairoch's estimates, say what happened to the share of world manufacturing in the regions with steam-powered factories, and in India and China, and state that pattern in one sentence.",
    criteria: [
      "I listed three places the factory methods reached, with a detail from the lesson for each.",
      "I said what carried the methods to each place: people, machines, or money.",
      "I stated a pattern with \"so the pattern is,\" naming what all three share.",
      "I stated the pattern in the shares, using two of Bairoch's estimates."
    ]
  };

  lesson.checkpoints = [
    {
      title: "Checkpoint 1: Where the Factory Went, and What Carried It",
      subtitle: "Checks Learning Target 1 and Success Criterion 1.",
      cardDesc: "The four places the new methods spread to, what carried them there, and the pattern.",
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: "Answer in three steps. (1) Name the four places the College Board says the new factory methods spread to from northwestern Europe. (2) Choose TWO of them. For each, give one case from the lesson and explain what carried the methods there: skilled people, machines, or money. (3) State one pattern in how the methods spread, using \"so the pattern is.\"",
      responseType: "Checkpoint 1",
      terms: ["Europe", "Belgium", "German states", "Germany", "France", "United States", "Russia", "Japan", "Slater", "Pawtucket", "Strutt", "Cockerill", "Seraing", "Liège", "Nuremberg", "railway", "locomotive", "Lowell", "Boston", "Hughes", "Yuzovka", "Osaka", "spinning", "machines", "skilled workers", "money", "coal", "pattern"],
      focus: ["Name all four places the methods spread to.", "Give a case for two of them, with what carried the methods.", "State the pattern in one sentence."]
    },
    {
      title: "Checkpoint 2: What Changed, and What Continued, in Who Made the World's Goods",
      subtitle: "Checks Learning Target 2 and Success Criterion 2, and Unit 5 Learning Objective E: how modes and locations of production changed over time.",
      cardDesc: "How the shares of world manufacturing changed from 1750 to 1900, one cause of the change, and what India, China, or Egypt kept making.",
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: "Explain what changed and what continued in who made the world's goods between 1750 and 1900. (1) Describe how most goods were made in 1750, and where. (2) Using two of Bairoch's estimates, explain how the share of world manufacturing changed for the regions with steam-powered factories and for India or China. (3) Explain what a share is, and why a share can fall while a region keeps making goods. (4) Explain one cause of the change, using India's cloth trade. (5) Give one piece of evidence that India, China, or Egypt kept making goods.",
      responseType: "Checkpoint 2",
      skill: "Continuity and Change",
      terms: ["1750", "1900", "hand", "by hand", "handloom", "weavers", "Asia", "China", "India", "Egypt", "Europe", "United States", "share", "Bairoch", "estimate", "a third", "a quarter", "four-fifths", "steam", "factory", "machine-made", "cheaper", "Lancashire", "East India Company", "taxes", "raw cotton", "Bombay", "ships", "Trincomalee", "continued", "changed"],
      focus: ["Describe how and where goods were made in 1750.", "Explain the change in shares with two numbers.", "Explain what a share is.", "Explain one cause of the change.", "Give evidence of what continued."]
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: "Evidence Lab: A Change, or a Continuity",
    task: "Choose at least two evidence cards. For each, say what kind of source it is and who made it, name one precise detail rather than summarizing it, explain what that detail shows about a change or a continuity in how or where goods were made, and name one thing the source cannot tell you. The caption identifies the source; it does not supply your conclusion.",
    prompt: "Make a claim about one change or one continuity in how or where the world's goods were made between 1750 and 1900. Support it with evidence from at least two cards."
  };

  lesson.images = [];

})();
