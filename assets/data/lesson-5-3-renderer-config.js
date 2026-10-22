(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 5: Learning Objective D",
      "theme": "Learning Objective",
      "text": "Explain how environmental factors contributed to industrialization from 1750 to 1900.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.I.A",
      "theme": "Humans and the Environment",
      "text": "A variety of factors contributed to the growth of industrial production and eventually resulted in the Industrial Revolution, including:<br>▪ Proximity to waterways; access to rivers and canals<br>▪ Geographical distribution of coal, iron, and timber<br>▪ Urbanization<br>▪ Improved agricultural productivity<br>▪ Legal protection of private property<br>▪ Access to foreign resources<br>▪ Accumulation of capital",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.I.C",
      "theme": "Humans and the Environment",
      "text": "The development of the factory system concentrated production in a single location and led to an increasing degree of specialization of labor.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: Coal, Water, and One Roof',
    embedUrl: 'first-and-10-topic-5-3-industrial-revolution-begins-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    title: "Britain and the Resources It Reached, c. 1700 to 1800",
    caption: "A BeHistorical map of Britain and three places it reached for resources it did not have enough of at home: cotton from the Caribbean and South America, and later from the US South, and iron and timber from Sweden and Russia.",
    intro: "Find Britain, then follow the three numbered arrows into it. Each arrow carries a resource Britain brought in from abroad. Britain's own coal, iron, rivers, and canals are inside the gold circle: they are too small to draw at this scale, and the First & 10 tells their story.",
    prompt: "Using the map, explain how one resource from abroad helped industry grow in Britain. Name where it came from, what it was, and why Britain needed it from abroad.",
    key: [
      { label: "Britain", detail: "The gold circle. Inside it, at a scale too small to draw here, are Britain's coal and iron, often close together and close to rivers and the sea, and the canals that linked them to towns such as Manchester." },
      { label: "Arrows 1 and 2: cotton", detail: "Cotton does not grow in Britain's climate. By the 1780s most of the cotton spun in Manchester was grown by enslaved people on plantations in the Caribbean and South America (arrow 1). After the 1790s, more and more came from plantations in the US South (arrow 2)." },
      { label: "Arrow 3: iron and timber", detail: "Britain had cut down most of its old forests by the 1600s, so wood was expensive, and much of the iron it used was bought from Sweden and Russia, where forests were still large." },
      { label: "Reading the map", detail: "The shaded areas mark regions, not exact borders. The map shows only the resources this topic names; Britain traded with many more places." }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-5-3.svg',
    first10:         '../assets/images/commons/philipp-jakob-loutherbourg-d-j-002-23c595.jpg',
    contentDelivery: '../assets/images/topics/5-3/carding-drawing-roving-allom-engraving.jpg',
    beSurreal:       '',
    skill:           '../assets/images/commons/wyld-william-manchester-from-kersal-moor-with-rustic-figures-and-goats-98dd3c.jpg',
    checkpoint1:     '../assets/images/topics/5-3/cotton-plant-pass-after-merian-1807.jpg',
    evidence:        '../assets/images/commons/powerloom-weaving-in-1835-f81451.jpg',
    source:          '',
    beInTheRoom:     '',
    checkpoint2:     '../assets/images/topics/5-3/mule-spinning-allom-1834.jpg'
  };

  lesson.classPresentation = {
    title: 'Class Slides: Coal, Water, and One Roof',
    desc: "Follow the story: what nature gave Britain (coal, iron, too little wood, and water), what people built on top of it (better farming, towns, laws, cotton from abroad, and capital), how the factors worked together in the Bridgewater Canal, and how the factory put the work in one place and gave each worker one job.",
    url: 'presentation-topic-5-3-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-mill-partners.html',
    desc: "Nottingham, early 1771. As one of Richard Arkwright's partners, decide where to build the new spinning mill, how to divide the work inside it, and how to pay for it and protect it."
  };

  lesson.skillBuilder = {
    label: "Developments and processes practice",
    title: "Explain a Process, Step by Step",
    intro: "Topic 5.3 asks you to explain how something caused something else. A cause is not explained until you say how it worked. To explain a process, name the starting point, then each step, joined by connecting words like \"which meant\" and \"so.\" Watch the move on one thing nature gave Britain, then try it on something people built.",
    steps: [
      { label: "Name the factor", text: "Start with one factor, stated as a fact. Example: \"Coal lay close to rivers and canals.\"" },
      { label: "Say what it made cheaper or possible", text: "Add \"which meant\" and the mechanism, how the factor worked. Example: \"which meant coal could be floated to towns cheaply.\" When the Bridgewater Canal reached Manchester in 1761, the price of coal there fell by about half." },
      { label: "Say what that led to", text: "Add \"so\" and the result. Example: \"so mills in Manchester paid less for fuel, and building a mill there was worth the risk.\"" },
      { label: "Put it together", text: "Coal lay close to rivers and canals, which meant it could be floated to towns cheaply, so mills in Manchester paid less for fuel, and building a mill there was worth the risk. Use this frame: \"[The factor], which meant [what it made cheaper or possible], so [what that led to].\"" }
    ],
    prompt: "Now do it yourself, twice. First, choose ONE thing people built: better farming, growing towns, laws that protected property, cotton from abroad, or saved-up capital. Explain it as a process with the frame: \"[The factor], which meant [what it made cheaper or possible], so [what that led to].\" Second, explain the factory system as a process in two or three sentences: what changed about where the work was done, what changed about how it was divided, and what that led to.",
    criteria: [
      "I named one factor people built, with a detail from the lesson.",
      "I used \"which meant\" to say what it made cheaper or possible.",
      "I used \"so\" to say what it led to.",
      "I explained the factory system as a process: where the work was done, how it was divided, and what that led to."
    ]
  };

  lesson.checkpoints = [
    {
      title: "Checkpoint 1: How Nature and People Caused Industry to Grow",
      subtitle: "Checks Learning Target 1 and Success Criterion 1.",
      cardDesc: "Two things nature gave Britain and two things people built, what each made cheaper or possible, and how two of them worked together.",
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: "Answer in three steps. (1) Choose TWO things nature gave Britain: its coal and iron, its shortage of wood, or its rivers, coast, and canals. For each one, explain what it made cheaper or possible, and what that led to. (2) Choose TWO things people built: better farming, growing towns, laws that protected property, cotton from abroad, or saved-up capital. For each one, explain how it helped make a mill worth building. (3) Explain one way two of your four factors worked together, as the Bridgewater Canal shows.",
      responseType: "Checkpoint 1",
      terms: ["coal", "iron", "timber", "wood", "charcoal", "coke", "Coalbrookdale", "Darby", "water", "rivers", "canal", "Bridgewater Canal", "Manchester", "price", "farming", "turnips", "clover", "enclosure", "population", "towns", "urbanization", "law", "patent", "Parliament", "property", "cotton", "enslaved", "plantations", "Caribbean", "capital", "investment", "profit", "Arkwright"],
      focus: ["Explain two things nature gave Britain, each with what it made cheaper or possible.", "Explain two things people built, each with how it made a mill worth building.", "Explain how two factors worked together."]
    },
    {
      title: "Checkpoint 2: What the Factory System Changed",
      subtitle: "Checks Learning Target 2, Success Criterion 2, and Unit 5 Learning Objective D.",
      cardDesc: "How the factory gathered production in one place, how it split the work into specialized jobs, and why that made more goods.",
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: "Explain how the factory system changed the way cloth was made. (1) Describe how thread and cloth were made under the putting-out system: where the work happened and who did each step. (2) Explain how a mill like Arkwright's at Cromford (1771) gathered production in one place: what moved, what powered the machines, and who set the hours. (3) Explain how the work inside a cotton mill was split into steps, with each worker tending one. (4) Use Adam Smith's pin workshop to explain why splitting the work made more goods. (5) Explain one way an environmental factor, such as the water that turned Cromford's wheel or the cotton grown abroad, made the factory possible.",
      responseType: "Checkpoint 2",
      skill: "Causation",
      terms: ["putting-out system", "merchant", "home", "factory system", "factory", "mill", "Cromford", "Arkwright", "1771", "water wheel", "one building", "hours", "overseer", "specialization", "specialization of labor", "step", "carding", "spinning", "machine", "Adam Smith", "pins", "forty-eight thousand", "more goods", "cause", "effect"],
      focus: ["Describe the putting-out system.", "Explain how the factory gathered production in one place.", "Explain how the work was split into specialized steps.", "Explain why splitting the work made more goods.", "Connect the factory to one environmental factor."]
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: 'Evidence Lab: Causes of Industry, and the Factory System',
    task: "Choose at least two evidence cards. For each, say what kind of source it is and who made it, name one precise detail rather than summarizing it, explain what that detail shows about a cause of industrialization or about the factory system, and name one thing the source cannot tell you. The caption identifies the source; it does not supply your conclusion.",
    prompt: "Make a claim about one cause of industrialization in Britain, or about one change the factory system made. Support it with evidence from at least two cards."
  };

  lesson.images = [
    {
      title: "Coalbrookdale by Night, 1801",
      alt: "A painting of an ironworks at night in a river valley: furnaces send up great clouds of orange fire and smoke behind dark buildings with tall chimneys, while in the foreground a horse pulls a cart along a road strewn with iron cylinders",
      url: "../assets/images/commons/philipp-jakob-loutherbourg-d-j-002-23c595.jpg",
      sourceUrl: "https://collection.sciencemuseumgroup.org.uk/objects/co65204/coalbrookdale-by-night-by-philippe-jacques-de-loutherbourg",
      caption: "An oil painting by Philip James de Loutherbourg, shown in London in 1801, of the Madeley Wood furnaces near Coalbrookdale, beside the River Severn, where iron was made with coke. Loutherbourg also painted scenery for the theater. Science Museum, London.",
      prompt: "NOTICE what is making the light, and what the carts in front are carrying. INFER what this place had close together that made iron here. What would a painter who also painted stage scenery gain by making the scene more dramatic than it was?"
    },
    {
      title: "A Cotton Plant, 1807",
      alt: "A hand-colored botanical print of a cotton plant with broad green leaves, two large yellow flowers, green seed pods, and one brown pod split open to show white cotton fiber; a spiny caterpillar climbs the stem",
      url: "../assets/images/topics/5-3/cotton-plant-pass-after-merian-1807.jpg",
      sourceUrl: "https://wellcomecollection.org/works/r986rsr9",
      caption: "A hand-colored engraving by J. Pass after a drawing by Maria Sibylla Merian, published in London in 1807. Merian drew the plants and insects of Suriname, a Dutch plantation colony in South America. Wellcome Collection.",
      prompt: "NOTICE which part of the plant becomes cotton thread. INFER why a British cotton mill depended on places far from Britain. What does a picture of a plant not tell you about the people who were forced to grow and pick it?"
    },
    {
      title: "Mule Spinning, 1834",
      alt: "An engraving of a long spinning room under an iron roof with skylights: two long spinning machines run down each side with hundreds of spindles; a man leans on one machine, a woman reaches across the threads of another, and a boy crawls underneath sweeping",
      url: "../assets/images/topics/5-3/mule-spinning-allom-1834.jpg",
      sourceUrl: "https://wellcomecollection.org/works/h7dsvghc",
      caption: "An engraving drawn by Thomas Allom and published in London in 1834 for a book about the cotton industry. It shows one room of a cotton mill where thread was spun, sixty years after Cromford. Wellcome Collection.",
      prompt: "NOTICE how many machines there are and what each person is doing. INFER how the work in this room is divided, and what turns the machines. The picture was made for a book that praised the cotton industry: what might it leave out?"
    },
    {
      title: "Power-Loom Weaving, 1835",
      alt: "An engraving of a weaving shed with two long rows of power looms driven by belts from shafts near the ceiling; young women tend the looms while a man in a cap stands in the aisle",
      url: "../assets/images/commons/powerloom-weaving-in-1835-f81451.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Powerloom_weaving_in_1835.jpg",
      caption: "An engraving drawn by Thomas Allom and engraved by J. Tingle, published in Edward Baines's History of the Cotton Manufacture in Great Britain (1835). By then weaving, too, had moved into mills.",
      prompt: "NOTICE where the looms get their power, and how many looms each worker tends. INFER how weaving in this shed differs from weaving at home under the putting-out system. What can an engraving made for a history of the cotton trade not tell you?"
    },
    {
      title: "Adam Smith's Pin Workshop, 1776",
      label: "Primary-source excerpt · Adam Smith, The Wealth of Nations, 1776, Book I, chapter 1",
      sourceText: ["“One man draws out the wire; another straights it; a third cuts it; a fourth points it; a fifth grinds it at the top for receiving the head … divided into about eighteen distinct operations”", "“Those ten persons, therefore, could make among them upwards of forty-eight thousand pins in a day.”"],
      caption: "Smith, a Scottish thinker, describes a small hand workshop he had seen, not a powered factory. Text from the Project Gutenberg edition.",
      prompt: "What does each man do? INFER why splitting the work let ten men make so many pins. Smith saw a workshop, not a mill: what does a factory add that his workshop does not have?"
    },
    {
      title: "The Patent Law of 1624",
      label: "Law · Statute of Monopolies, section 6, passed by Parliament in 1624",
      sourceText: ["“… Letters Patents and Grants of Privilege for the term of fourteen years or under, hereafter to be made of the sole working or making of any manner of new Manufactures within this Realm,”", "“to the true and first Inventor and Inventors of such Manufactures, which others at the time of making such Letters Patents and Grants shall not use …”"],
      caption: "Spelling modernized from the text on legislation.gov.uk. \"Letters patent\" were the king's written grant; \"the sole working or making\" means the only right to make and use it. Richard Arkwright patented his spinning machine under this law in 1769.",
      prompt: "What does this law give to \"the true and first Inventor,\" and for how long? INFER why a law like this would make someone more willing to spend money on a new machine. What can a law not tell you about whether it was enforced?"
    }
  ];

})();
