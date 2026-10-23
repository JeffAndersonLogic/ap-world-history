(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 5: Learning Objective F",
      "theme": "Learning Objective",
      "text": "Explain how technology shaped economic production over time.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.I.B",
      "theme": "Technology and Innovation",
      "text": "The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.I.E",
      "theme": "Technology and Innovation",
      "text": "The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.IV",
      "theme": "Technology and Innovation",
      "text": "Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: "First & 10: More Power, Longer Reach",
    embedUrl: 'first-and-10-topic-5-5-technology-of-industrialization-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: "Britain and Pennsylvania", detail: "Two places this lesson names for fossil fuels. Britain mined about 225 million tons of coal in 1900. In Pennsylvania, Edwin Drake struck oil at Titusville in 1859." },
      { label: "Arrow 1: across the United States, 1869", detail: "The first railroad across the United States, finished in 1869." },
      { label: "Arrow 2: the Trans-Siberian, 1891 to 1904", detail: "Russia began it in 1891; by 1904 trains could cross to the Pacific Ocean." },
      { label: "Arrows 3 and 4: wires and ships", detail: "Arrow 3: telegraph cables across the Atlantic, which carried messages without a lasting break from 1866. Arrow 4: steamships from Britain to Bombay through the Suez Canal, opened in 1869. Bombay's first passenger train ran in 1853." },
      { label: "Reading the map", detail: "Each arrow joins the two ends of a line, cable, or voyage; it is not the exact path. The map shows only the places this topic names." }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-5-5.svg',
    first10:         '../assets/images/topics/5-5/currier-ives-lightning-express-1874.jpg',
    contentDelivery: '../assets/images/topics/5-5/newcomen-engine-engraving-1740s.jpg',
    beSurreal:       '../assets/images/topics/5-5/great-eastern-atlantic-cable-1866.jpg',
    skill:           '../assets/images/commons/bessemer-converter-440883.jpg',
    checkpoint1:     '../assets/images/topics/5-5/oil-rig-titusville-c1900.jpg',
    evidence:        '../assets/images/topics/5-5/currier-ives-across-the-continent-1868.jpg',
    source:          '',
    beInTheRoom:     '../assets/images/topics/5-5/currier-ives-night-railway-junction-1876.jpg',
    checkpoint2:     '../assets/images/topics/5-5/promontory-summit-1869.jpg'
  };

  lesson.classPresentation = {
    title: "Class Slides: More Power, Longer Reach",
    desc: "Follow the chain: where energy came from in 1750, how the steam engine and then oil unlocked fossil fuels, what the second industrial revolution made, and how railroads, steamships, and the telegraph reached the interiors of continents and led to more trade and migration.",
    url: 'presentation-topic-5-5-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-five-technologies.html',
    desc: "New York, December 1900. As a writer for a science magazine, argue for the technology you think changed the world most, and help your team rank five of them from most important to least."
  };

  lesson.skillBuilder = {
    label: "Developments and processes practice",
    title: "Explain a Process, Step by Step",
    intro: "Topic 5.5 asks you to explain a process: how something developed, one step after another. To explain how a technology changed production, say four things in order: what the problem was, what the new technology did, what that made possible, and what followed. Watch the move on an example from everyday life, then use it on the history.",
    steps: [
      { label: "The problem", text: "Say what was hard before. Example: \"Before, people used paper maps and asked strangers for directions.\"" },
      { label: "The new technology", text: "Name it and say what it did. Example: \"Then phone maps showed each person where they were, live.\"" },
      { label: "What it made possible", text: "Say what people could now do that they could not do before. Example: \"This made it possible to find any address without knowing the city.\"" },
      { label: "What followed", text: "Say the result. Example: \"As a result, a delivery driver can work in a city she has never seen.\" Use this frame: \"Before, [the problem]. Then [the new technology] [what it did], which made it possible to [what it made possible]. As a result, [what followed].\"" }
    ],
    prompt: "Now do it yourself, twice. First, choose ONE technology that gave more power or a new method: Watt's steam engine, the internal combustion engine, or electric power. Explain it with the frame, using one detail from the lesson. Second, choose ONE technology that gave longer reach: the railroad, the steamship, or the telegraph. Explain it with the frame, and make your \"what followed\" step about trade or migration. (If you chose the internal combustion engine or electric power for the first answer, your \"what followed\" step can say how much it had changed by 1900.)",
    criteria: [
      "I explained two technologies, one for power or a new method and one for reach.",
      "For each, I said what the problem was before it.",
      "For each, I said what the technology did and what it made possible, with \"which made it possible to.\"",
      "My second answer's \"what followed\" step names more trade or more migration, with a detail from the lesson."
    ]
  };

  lesson.checkpoints = [
    {
      title: "Checkpoint 1: More Power, New Methods",
      subtitle: "Checks Learning Target 1 and Success Criterion 1.",
      cardDesc: "How a machine let people use the energy in coal or oil, how much more energy there was, and what one new method of the second industrial revolution made.",
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: "Answer in three steps. (1) Choose ONE machine: Newcomen's steam engine, Watt's steam engine, or the internal combustion engine. Explain step by step how it let people use the energy stored in coal or oil. (2) Give ONE piece of evidence from the lesson that the energy people had grew greatly. (3) Choose ONE new method of the second industrial revolution (steel, chemicals, electricity, or precision machinery) and explain what it let people make or do.",
      responseType: "Checkpoint 1",
      terms: ["energy", "fossil fuel", "coal", "oil", "steam engine", "Newcomen", "Watt", "separate chamber", "pump", "mine", "wheels", "rivers", "internal combustion", "Otto", "Benz", "Drake", "kerosene", "65 million", "225 million", "half", "steel", "Bessemer", "chemicals", "dye", "Perkin", "BASF", "electricity", "Edison", "Pearl Street", "motor", "interchangeable parts", "machine tools", "made it possible"],
      focus: ["Explain one machine step by step.", "Give evidence that energy grew.", "Explain one new method and what it made."]
    },
    {
      title: "Checkpoint 2: Longer Reach, More Trade and Migration",
      subtitle: "Checks Learning Target 2 and Success Criterion 2, and Unit 5 Learning Objective F: how technology shaped economic production over time.",
      cardDesc: "What railroads, steamships, and the telegraph made possible in the interiors of continents, how that led to more trade or migration, and what drove railroads and steamships.",
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: "Explain how railroads, steamships, and the telegraph changed trade or migration, as a chain of causes. (1) Say how goods and news traveled before these technologies. (2) Choose ONE of the three, and explain what it could do that older ways could not. Then give one example of an interior region that railroads or steamboats reached. (3) Explain how that led to more trade OR more migration, using one number from the lesson. Then name the other effect in one sentence. (4) Connect the reach back to power: say what drove railroads and steamships, or what their rails and hulls were made of (coal, steam, or steel).",
      responseType: "Checkpoint 2",
      skill: "Causation",
      terms: ["railroad", "railway", "steamship", "telegraph", "interior", "continent", "Promontory", "1869", "Trans-Siberian", "Bombay", "Suez", "Atlantic cable", "1866", "Morse", "53 days", "12 days", "7 or 8 days", "minutes", "wheat", "Chicago", "Liverpool", "57.6", "15.6", "price", "trade", "migration", "55 million", "29 million", "19 million", "coal", "steam", "steel", "led to", "made it possible"],
      focus: ["Describe how goods and news moved before.", "Explain what one technology made possible, and give an interior region railroads or steamboats reached.", "Explain how it led to more trade or migration, with a number.", "Connect railroads or steamships back to coal, steam, or steel."]
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: "Evidence Lab: One Link in the Chain",
    task: "Choose at least two evidence cards. For each, say what kind of source it is and who made it (if the caption says), name one precise detail rather than summarizing it, explain what that detail shows about one link in the chain (machines and fossil fuels, new methods, or longer reach), and name one thing the source cannot tell you. The caption identifies the source; it does not supply your conclusion.",
    prompt: "Make a claim about how one technology changed what the world could make or how far its goods and people could go between 1750 and 1900. Support it with evidence from at least two cards."
  };

  lesson.images = [
    {
      title: "A Newcomen Engine, 1740s",
      alt: "An engraving of a Newcomen steam engine in a brick engine house: a fire under a round boiler at the bottom, a tall cylinder above it, a great wooden beam rocking on the wall, and chains and pump rods hanging down on the left into the mine",
      url: "../assets/images/topics/5-5/newcomen-engine-engraving-1740s.jpg",
      sourceUrl: "https://wellcomecollection.org/works/gwv62367",
      caption: "An engraving from the 1740s of a Newcomen steam engine, with the parts numbered for a reader. Wellcome Collection.",
      prompt: "NOTICE where the fire is, and what hangs from the left end of the beam. INFER what job this engine did, and what the fire was for. An engraving made to explain a machine: what can it not tell you about how many engines like this there were?"
    },
    {
      title: "A Bessemer Converter",
      alt: "An engraved diagram of two egg-shaped iron vessels: on the left the outside of a Bessemer converter, mounted on a pivot with a gear wheel; on the right the same vessel cut open to show a thick lining and holes in the bottom",
      url: "../assets/images/commons/bessemer-converter-440883.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bessemer_converter.jpg",
      caption: "An engraved diagram of a Bessemer converter, drawn twice: A, the outside, on a pivot so it could tip to pour; B, cut open to show its lining and the holes at the bottom. A diagram, not a picture of a real works.",
      prompt: "NOTICE the holes at the bottom of drawing B. INFER what came in through them, and what that did to the melted iron inside. A diagram shows how something works: what can it not tell you about how big a real converter was, or how much steel it made?"
    },
    {
      title: "An Oil Rig at Titusville, about 1900",
      alt: "An old black-and-white photograph of a tall wooden oil derrick on a hillside, with a group of workmen standing beside a steam boiler and a tall smokestack on the right",
      url: "../assets/images/topics/5-5/oil-rig-titusville-c1900.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2012647896/",
      caption: "A photograph of an oil rig at Titusville, Pennsylvania, where Edwin Drake struck oil in 1859, taken about 1900 by a photographer named Mather. The print is labeled \"hand-colored,\" but the copy shown here is black and white. Library of Congress.",
      prompt: "NOTICE the machine on the right, with its smokestack. INFER what powered the drilling. The picture does not show what the boiler burned: what would you need to know to say which fuel helped people get the oil? One rig is one place: what can it not tell you about how oil was used in 1900?"
    },
    {
      title: "The Great Eastern Carries the Atlantic Cable, 1866",
      alt: "An engraving of a huge iron steamship with six masts, smokestacks and American and British flags, beside a smaller ship with three masts at the left, while men in rowing boats wave in the foreground",
      url: "../assets/images/topics/5-5/great-eastern-atlantic-cable-1866.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2022637951/",
      caption: "An engraving from the Illustrated London News of 14 July 1866: the steamship Great Eastern leaving Sheerness, England, with the Atlantic telegraph cable on board. Later that month it landed the cable at Heart's Content, Newfoundland, and from then on cables carried messages across the Atlantic without a lasting break. Library of Congress.",
      prompt: "NOTICE the Great Eastern's smokestacks, its paddle box, and its six masts. INFER what drives it, and why the cable needed a ship this large. A newspaper picture made to celebrate: what can it not tell you about how the cable changed trade?"
    },
    {
      title: "Across the Continent, 1868",
      alt: "A black-and-white print looking down on a new log-cabin town beside a railroad; a train puffs west past the town and a line of telegraph poles, covered wagons move along a road, and two Native American riders watch from the right",
      url: "../assets/images/topics/5-5/currier-ives-across-the-continent-1868.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/90708413/",
      caption: "A print published by Currier and Ives of New York in 1868, drawn by Fanny Palmer from a design by James M. Ives, called Across the Continent: \"Westward the Course of Empire Takes Its Way.\" It was made to sell, a year before the first railroad across the United States was finished. Library of Congress.",
      prompt: "NOTICE what runs beside the railroad, and what the settlers are building. INFER what the printmaker thought the railroad and the telegraph would bring to the interior of the continent. Look at the two riders on the right: whose view of the railroad does this print leave out?"
    },
    {
      title: "Energy and Reach in Numbers",
      label: "Figures from economic historians · NBER; O'Rourke and Williamson; Hatton and Williamson",
      sourceText: ["Coal mined in Britain: about 65 million tons (1854); about 225 million tons (1900).", "Wheat in Liverpool cost more than in Chicago by 57.6 percent (1870) and by 15.6 percent (1913).", "About 55 million Europeans moved to the Americas and Australia, 1850 to 1914."],
      caption: "Coal mined in Britain: about 65 million tons in 1854 and about 225 million tons in 1900. Wheat in Liverpool cost 57.6 percent more than in Chicago in 1870, and 15.6 percent more in 1913. About 55 million Europeans moved to the Americas and Australia between 1850 and 1914. Figures gathered by economic historians from records of the time.",
      prompt: "Choose ONE of the three facts (coal, wheat prices, or migration). INFER which link in the chain it shows, and what caused the change. A number counts something: what can it not tell you about the people behind it?"
    }
  ];

})();
