(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      "code": "Unit 5: Learning Objective I",
      "theme": "Learning Objective",
      "text": "Explain the causes and effects of calls for changes in industrial societies from 1750 to 1900.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.V.D",
      "theme": "Social Interactions and Organization",
      "text": "In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.V.A",
      "theme": "Social Interactions and Organization",
      "text": "In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.3.IV.A.ii",
      "theme": "Social Interactions and Organization",
      "text": "Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-5.1.V.B",
      "theme": "Social Interactions and Organization",
      "text": "In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups.",
      "illustrativeExamples": []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: "First & 10: Calls for Change",
    embedUrl: 'first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.8 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: "Britain", detail: "The Combination Acts of 1799 and 1800 banned unions until Parliament repealed them in 1824. From 1838 the Chartists demanded the vote for every man. Unions formed the Trades Union Congress in 1868, and in 1900 unions and socialists founded the committee that became the Labour Party in 1906." },
      { label: "Germany", detail: "Workers' parties united in 1875. The government banned socialist meetings and newspapers from 1878 to 1890, and gave workers health, accident, and old-age insurance in laws of 1883, 1884, and 1889. In 1890 the Social Democratic Party won more votes than any other party." },
      { label: "The Ottoman Empire", detail: "From 1839 the government's Tanzimat reforms promised all subjects security, fair taxes, and regular military service, and built factories and telegraph lines. A constitution and parliament came in 1876; in 1878 Sultan Abdulhamid II shut the parliament down." },
      { label: "Qing China", detail: "From the 1860s, Self-Strengthening officials built arsenals, a navy yard, a language school, and a steamship company. In 1898 the Guangxu Emperor's hundred days of reforms were stopped by the Empress Dowager Cixi and officials who opposed them." },
      { label: "Arrow 1", detail: "Britain's war with China, 1839 to 1842, the first Opium War (Unit 6): one of the defeats that pushed the Qing government to modernize." },
      { label: "Arrow 2", detail: "In 1894 and 1895 Japan, which had industrialized (Topic 5.6), defeated China's new navy." },
      { label: "Reading the map", detail: "Each arrow joins two places; it is not an exact route. The map shows only the places this topic names, and the shaded regions are approximate." }
    ]
  };

  lesson.stableImages = {
    map:             '../assets/images/instructional-maps/topic-5-8.svg',
    first10:         '../assets/images/commons/william-edward-kilburn-view-of-the-great-chartist-meeting-on-kenningto-cf2162.jpg',
    contentDelivery: '../assets/images/topics/5-8/chartist-national-convention-1839.jpg',
    beSurreal:       '',
    skill:           '',
    checkpoint1:     '../assets/images/commons/punch-1843-reichtum-und-armut-7927a6.png',
    evidence:        '../assets/images/topics/5-8/ottoman-military-engineering-students-1880s.jpg',
    source:          '',
    beInTheRoom:     '../assets/images/topics/5-8/grant-and-li-hongzhang-tianjin-1879.jpg',
    checkpoint2:     '../assets/images/topics/5-8/ottoman-imperial-fez-factory-interior-1880s.jpg'
  };

  lesson.classPresentation = {
    title: "Class Slides: Calls for Change",
    desc: "Build four rows, workers, thinkers, reformers and governments, and the Ottoman and Qing courts: what pushed each to call for change, what they wanted, and what happened.",
    url: 'presentation-topic-5-8-student.html'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-tongwen-guan-debate.html',
    desc: "Beijing, 1867. At the Qing court, decide whether the language school should teach Western astronomy and mathematics, as one of five people: a prince who runs foreign affairs, a senior scholar who opposes the plan, a provincial governor who runs an arsenal, a young scholar studying for the examinations, and an interpreter trained at the school."
  };

  lesson.skillBuilder = {
    label: "Sourcing practice",
    title: "Who Made It, Why, and for Whom?",
    intro: "Topic 5.8 asks you to source a source: explain its point of view (who made it), its purpose (why), its audience (for whom), or its historical situation (when and where), and how that shapes what it says. Two sources can describe the same thing very differently and both be telling part of the truth. Watch the move on an example from everyday life, then use it on two descriptions of Manchester.",
    steps: [
      { label: "Name the source and its maker", text: "Say who made it: that is its point of view. Example: two descriptions of the same new school cafeteria. One is in a brochure from the company that built it. The other is a student's post on the school news site." },
      { label: "Ask why, and for whom", text: "Say what the maker wanted (purpose) and who was meant to read it (audience). Example: \"The company wants other schools to buy cafeterias like this one, so it writes for school boards. The student wants classmates to know what lunch is really like.\"" },
      { label: "Ask when and where", text: "Say what was happening when it was made (historical situation). Example: \"The brochure was printed the week the cafeteria opened, before anyone had eaten there. The student wrote after a month of lunches.\"" },
      { label: "Say how it shapes what the source says", text: "Use this frame: \"[Source] says [what], because its maker [point of view, purpose, audience, or situation]: [how that explains it].\" Example: \"The brochure praises the bright new tables and says nothing about the lines, because the company wrote it to sell cafeterias to school boards before anyone had stood in a line.\"" }
    ],
    prompt: "Now do it with two real descriptions of Manchester. Source A: Friedrich Engels, a young German sent to Manchester to work in a cotton business his father partly owned, published a book in Germany, in German, in 1845. In the English translation of 1887 he writes that Manchester is built so that \"a person may live in it for years, and go in and out daily without coming into contact with a working people's quarter or even with workers,\" and that its river, the Irk, is \"coal-black, foul-smelling ... full of debris and refuse.\" Source B: a business directory of Manchester and Salford, a book listing the towns' firms and their addresses, printed in Manchester by Whellan and Company (the copy we can read is dated 1853), opens: \"the innumerable large mills and factories whose tall chimneys shoot up in every direction, betoken the activity, enterprise, and wealth of its inhabitants.\" First, say who made each source and what each says about Manchester. Second, explain the purpose and the audience of each. Third, explain how ONE of these, point of view, purpose, audience, or situation, helps explain why the two describe the same city so differently. Fourth, say which description you think is more accurate about the lives of Manchester's workers, and what other evidence would help you check.",
    criteria: [
      "I said who made each source and what each says about Manchester.",
      "I explained the purpose and the audience of each source.",
      "I explained how one of point of view, purpose, audience, or situation shapes what a source says.",
      "I said which description I think is more accurate, and what other evidence would help me check."
    ]
  };

  lesson.checkpoints = [
    {
      title: "Checkpoint 1: Workers and New Ideas",
      subtitle: "Checks Learning Targets 1 and 2 and Success Criteria 1 and 2.",
      cardDesc: "Why workers organized, what they wanted and won, and what Marx and other socialists imagined.",
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: "Answer in four steps. (1) Explain ONE cause that led workers in Britain or Germany to organize, with a detail from the lesson. (2) Explain ONE thing workers organized to get (better conditions, shorter hours, higher wages, or the vote), and ONE effect of their organizing: something they won, or something they failed to win. (3) Explain what socialism meant, and what Karl Marx predicted would happen and called communism. (4) Explain ONE thing Marx's ideas did, or did not do, by 1900.",
      responseType: "Checkpoint 1",
      terms: ["union", "labor union", "trade union", "strike", "Combination Acts", "1799", "1800", "1824", "1825", "Tolpuddle", "1834", "Trades Union Congress", "1868", "1871", "ten hours", "1847", "Chartists", "People's Charter", "vote", "petition", "1838", "1848", "Kennington Common", "Social Democratic Party", "1875", "1878", "1890", "Labour Party", "1900", "1906", "American Federation of Labor", "wages", "hours", "conditions", "socialism", "Owen", "Marx", "Engels", "Communist Manifesto", "class struggles", "communism", "private property", "Capital", "1867", "revolution", "1891", "May 1", "eight-hour"],
      focus: ["Explain one cause that led workers to organize, with a detail.", "Explain one thing workers wanted, and one effect of their organizing.", "Explain socialism, and what Marx predicted and called communism.", "Explain one thing Marx's ideas did, or did not do, by 1900."]
    },
    {
      title: "Checkpoint 2: Reforms, Old Empires, and Calls for Change",
      subtitle: "Checks Learning Targets 3 and 4 and Success Criteria 3 and 4, and Unit 5 Learning Objective I: the causes and effects of calls for changes in industrial societies from 1750 to 1900.",
      cardDesc: "Who pushed reforms and why, why the Ottoman and Qing governments tried to modernize and who resisted, and the causes and effects of calls for change.",
      learningTargets: [lesson.learningTargets[2].target, lesson.learningTargets[3].target],
      successCriteria: [lesson.successCriteria[2].criteria, lesson.successCriteria[3].criteria],
      prompt: "Explain the causes and effects of calls for change between 1750 and 1900. (1) Give ONE reform from the lesson, say what kind it was (political, social, educational, or urban), and say who pushed it: a government, an organization, or individuals. (2) Explain why Germany's government under Bismarck gave workers insurance. (3) Explain what pushed the Ottoman OR the Qing government to modernize, and give ONE reform with a detail. (4) Name ONE person or group who resisted those reforms, and say why. (5) Write one sentence that links a cause to a call for change and to its effect, for any row of the topic.",
      responseType: "Checkpoint 2",
      skill: "Causation",
      terms: ["reform", "political", "social", "educational", "urban", "Reform Act", "1867", "1884", "Factory Act", "1833", "Mines Act", "1842", "Education Act", "1870", "1880", "Great Stink", "1858", "sewers", "government", "organization", "Bismarck", "insurance", "1883", "1884", "1889", "socialists", "Ottoman", "Selim III", "New Order", "Janissaries", "1807", "Mahmud II", "1826", "Tanzimat", "1839", "1856", "equality", "factory", "telegraph", "constitution", "1876", "Abdulhamid II", "1878", "Qing", "Opium War", "Self-Strengthening", "Li Hongzhang", "Zeng Guofan", "arsenal", "Jiangnan", "1865", "Fuzhou", "navy", "Woren", "1867", "Japan", "1895", "Guangxu", "1898", "Cixi", "caused", "led to", "because", "resisted"],
      focus: ["Give one reform, its kind, and who pushed it.", "Explain why Bismarck gave workers insurance.", "Explain what pushed the Ottoman or Qing government to modernize, with one reform.", "Name one person or group who resisted, and why.", "Link a cause, a call for change, and an effect in one sentence."]
    }
  ];

  // ── Module 07, Evidence Lab ───────────────────────────────────────────────
  lesson.evidenceLab = {
    title: "Evidence Lab: Who Called for Change, and Why?",
    task: "Choose at least two evidence cards. For each, say what kind of source it is and who made it (if the caption says), name one precise detail rather than summarizing it, explain what that detail shows about one row of the topic (workers, thinkers, reformers and governments, or the Ottoman and Qing courts), and say how its maker's point of view or purpose shapes what it shows. The caption identifies the source; it does not supply your conclusion.",
    prompt: "Make a claim about what caused people to call for change between 1750 and 1900, or what their calls changed. Support it with evidence from at least two cards."
  };

  lesson.images = [
    {
      title: "The Chartist Meeting on Kennington Common, 1848",
      alt: "An early photograph, pale and slightly blurred, of a huge crowd of men in top hats and caps filling an open field, with a small flag on a pole near the middle, a tall factory chimney and long low buildings behind, and a large pale building on the right.",
      url: "../assets/images/commons/william-edward-kilburn-view-of-the-great-chartist-meeting-on-kenningto-cf2162.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg",
      caption: "A daguerreotype (an early kind of photograph) by William Edward Kilburn of the Chartists' great meeting on Kennington Common, London, on 10 April 1848, held to send their third petition for the vote to Parliament. It is one of a pair that Prince Albert, Queen Victoria's husband, bought in 1848. Royal Collection.",
      prompt: "NOTICE how many people are there and how they are dressed. INFER what kind of movement this was and who was in it. The pictures were bought by the Queen's husband: why might a royal family want a picture of this crowd?"
    },
    {
      title: "The Chartists' National Convention, 1839",
      alt: "An etching of a long, high-ceilinged room with chandeliers and tall windows, where dozens of men in dark coats sit and stand around a long table covered with papers, while one man at the far end raises his arm to speak.",
      url: "../assets/images/topics/5-8/chartist-national-convention-1839.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2004669356/",
      caption: "An etching titled The National Convention, \"as it met on Monday the 4th of February, 1839, at the British Coffee House\" in London: the Chartists' first convention, which gathered to present the People's Charter. Someone has written \"Chartist meeting\" on the sheet. Library of Congress.",
      prompt: "NOTICE where the delegates are meeting and how the artist shows them. INFER what impression of the convention this picture gives. The caption does not say who made it or for whom: what can you not know, and what can it not tell you about the workers the delegates spoke for?"
    },
    {
      title: "\"Capital and Labour,\" Punch, 1843",
      alt: "A two-part cartoon. In the upper part, a fat man in a fine chair sips wine while servants wait on him and a little dog lies on a cushion. In the lower part, under the ground, thin men, women, and small children drag carts and crouch in a dark mine, some on crutches.",
      url: "../assets/images/commons/punch-1843-reichtum-und-armut-7927a6.png",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch_1843_-_Reichtum_und_Armut.png",
      caption: "A cartoon by R. J. Hamerton, signed \"Shallabala,\" printed in the London magazine Punch in 1843 (volume 5, page 49), the year after the Mines Act of 1842 barred women, girls, and boys under ten from working inside mines.",
      prompt: "NOTICE what is happening in the upper half and the lower half, and how they are joined. INFER the argument the cartoonist is making about where wealth comes from. A comic magazine read by the comfortable middle class: what does that tell you about who was being asked to care?"
    },
    {
      title: "Inside the Imperial Fez Factory, Istanbul, 1880s",
      alt: "An old black-and-white photograph of a long factory hall. Leather belts run at angles from wheels on the ceiling down to rows of machines, and finished brimless hats sit on the workbenches in the front.",
      url: "../assets/images/topics/5-8/ottoman-imperial-fez-factory-interior-1880s.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2003675899/",
      caption: "A photograph by Abdullah Frères, made between 1880 and 1893 for one of Sultan Abdulhamid II's albums, of the inside of the Imperial Fez Factory in Istanbul, the state's factory for fezzes (brimless red hats) and army uniforms. The factory was first set up in 1835 with machines from Britain and Belgium. Library of Congress.",
      prompt: "NOTICE how the machines are powered and what they are making. INFER what this shows about the Ottoman government's plans for its economy and its army. The sultan's own album: what might it leave out?"
    },
    {
      title: "Students of the Imperial School of Military Engineering, 1880s",
      alt: "An old black-and-white photograph of about forty young men in dark military coats and fezzes, standing in rows on a bare parade ground in front of a long two-story building with many windows.",
      url: "../assets/images/topics/5-8/ottoman-military-engineering-students-1880s.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2002712221/",
      caption: "A photograph by Abdullah Frères, made between 1880 and 1893 for one of Sultan Abdulhamid II's albums, of the students of the Imperial School of Military Engineering at Tophane, Istanbul. Library of Congress.",
      prompt: "NOTICE what the students are wearing and how they are posed. INFER what kind of army the Ottoman government was trying to build, and why. Photographs chosen by the sultan: what do they show about how he wanted the world to see his empire?"
    },
    {
      title: "Ulysses S. Grant and Li Hongzhang, 1879",
      alt: "An old photograph of two men seated on either side of a small table with a vase of flowers: on the left, a bearded American in a dark suit; on the right, a Chinese official in a round hat and long robes.",
      url: "../assets/images/topics/5-8/grant-and-li-hongzhang-tianjin-1879.jpg",
      sourceUrl: "https://www.loc.gov/pictures/item/2016647812/",
      caption: "A photograph by Liang Shitai (who signed his work See Tay) of Ulysses S. Grant, a former president of the United States on a tour around the world, and Li Hongzhang, the Qing official who led many of China's self-strengthening projects, made during Grant's visit to China in 1879. The print is titled as taken at Tianjin. Library of Congress.",
      prompt: "NOTICE how the two men are dressed and seated. INFER what Li Hongzhang might gain from being photographed as an equal beside a famous American. A posed portrait: what can it not tell you about China's arsenals and navy?"
    }
  ];

})();
