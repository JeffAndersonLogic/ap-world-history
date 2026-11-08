(() => {
  const brandCss = '../assets/css/behistorical-brand-lock.css';
  if (!document.querySelector(`link[href="${brandCss}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = brandCss;
    document.head.appendChild(link);
  }
  const topLogo = document.querySelector('.brand-mini');
  if (topLogo) {
    topLogo.href = '../index.html';
    topLogo.setAttribute('aria-label', 'Return to BeHistorical landing page');
  }
  const heroLogoFrame = document.querySelector('.hero .logo-frame');
  if (heroLogoFrame && !heroLogoFrame.closest('a')) {
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.className = 'logo-home-link';
    homeLink.setAttribute('aria-label', 'Return to BeHistorical landing page');
    homeLink.style.display = 'inline-block';
    heroLogoFrame.parentNode.insertBefore(homeLink, heroLogoFrame);
    homeLink.appendChild(heroLogoFrame);
  }
})();

window.BEHISTORICAL_LESSON = {

  meta: {
    course: "AP WORLD HISTORY",
    unit: "Unit 5: Revolutions",
    topic: "Topic 5.9",
    title: "Society and the Industrial Age",
    subtitle: "Industry did not end the old ladder of rank; it rebuilt it: a new middle class rose by money and education beside landed families who kept much of their power, a new working class lived on wages, work left the home and split women's lives by class, and cities grew faster than they could house, clean, or protect the people who poured in.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how industrialization changed who was near the top of society, with a new middle class and a new industrial working class, and what kept going for the old landed families.",
      kc: "KC-5.1.VI.A",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain why industrialization changed the lives of women and children in working-class families and middle-class families in different ways.",
      kc: "KC-5.1.VI.B",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how rapid urbanization led to challenges in industrial cities, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure, and what they did to standards of living.",
      kc: "KC-5.1.VI.C",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name the two new classes and where each one's place came from, and give one change (such as the vote for most middle-class men in 1832) and one continuity (such as landed families keeping their land and power), with a detail for each.",
      kc: "KC-5.1.VI.A",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain why women and often children in working-class families earned wages (to add to the family's income) and why middle-class women were increasingly kept to the home (their families did not need their wages), with a detail for each, and name one thing that kept going for women in both classes.",
      kc: "KC-5.1.VI.B",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can name at least three of the six challenges, explain why rapid growth caused them, give one effect on standards of living with a detail (such as cholera or life expectancy), and place one specific scene, such as Riis's crowded room, inside this broader story.",
      kc: "KC-5.1.VI.C",
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective J',
      theme: 'Learning Objective',
      text: 'Explain how industrialization caused change in existing social hierarchies and standards of living.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.A',
      theme: 'Social Interactions and Organization',
      text: 'New social classes, including the middle class and the industrial working class, developed.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.B',
      theme: 'Social Interactions and Organization',
      text: 'While women and often children in working class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.C',
      theme: 'Social Interactions and Organization',
      text: 'The rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "A New Ladder",
    intro: "On notebook paper, draw four rows: who was on top, who did the work, women and children, and where people lived. For each row, find what changed and what kept going.",
    videos: [],
    segments: [
      {
        title: "New Classes, Old Families",
        bullets: [
          "**Before:** in 1750 most people in Britain, as almost everywhere, lived in the countryside. At the top of the ladder were landowning families, the aristocracy and gentry, whose rank came from land they inherited. Most families worked together, on the farm or at home.",
          "**The middle class:** factory owners, merchants and bankers, and the people who ran things for them, from engineers, doctors and lawyers to managers and clerks. Their place came from money they made and the education they paid for, not from land or titles. In Britain the Reform Act of 1832 gave the vote to most middle-class men in the towns.",
          "**The industrial working class:** people who owned no land and no tools, and lived on the wages they earned in mills, mines, docks and workshops, at the hours the employer set.",
          "**What kept going:** landed families kept their land, their titles and much of their power. In 1900 Britain's prime minister, Lord Salisbury, was a marquess. Rich middle-class families often bought country houses and married into the gentry. The ladder had new rungs; it was still a ladder."
        ],
        image: {
          title: "Manchester from Kersal Moor, 1852",
          caption: "A watercolour by William Wyld, signed and dated 1852, now in the Royal Collection: two women and their goats on a hillside in front, and beyond the river, Manchester's church spires and factory chimneys under smoke. A romantic view, painted from far enough away that no one can see how the town's workers lived.",
          url: "../assets/images/commons/wyld-william-manchester-from-kersal-moor-with-rustic-figures-and-goats-98dd3c.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Wyld%2C_William_-_Manchester_from_Kersal_Moor%2C_with_rustic_figures_and_goats_-_Google_Art_Project.jpg"
        }
      },
      {
        title: "Work and Home, Split by Class",
        bullets: [
          "**Women and children had always worked.** What changed was where they worked, and how the answer split by class.",
          "**Working-class families:** one wage was rarely enough, so women and often children took wage-earning jobs to add to the family's income: in textile mills (in Britain in the 1830s, women and girls were a majority of factory workers), in domestic service, the largest job for women, or sewing at home, paid by the piece. Women were usually paid less than men, mostly because they were given different, lower-paid jobs. In Japan in 1900, about 62 percent of the workers in private factories were women, most in textile mills.",
          "**Middle-class families:** one earner was enough, so the wife was increasingly expected to stay out of paid work and to run the home and raise the children. Historians call the idea separate spheres. Isabella Beeton's Book of Household Management (1861) compared the mistress of a house to \"the commander of an army\"; the \"domestics\" she commanded were servants, most of them working-class women.",
          "**What kept going:** in both classes women were paid less and had fewer rights than men. In England and Wales, until laws of 1870 and 1882, a married woman's property legally belonged to her husband, and until 1870 so did the money she earned."
        ],
        image: {
          title: "The Four Seasons of Life: Middle Age, about 1868",
          caption: "A lithograph sold by Currier & Ives of New York, about 1868: a father comes home from work and lifts the baby from its mother's arms while the children greet him. A picture of the middle-class ideal, printed to sell, not a photograph of a real family. Library of Congress.",
          url: "../assets/images/topics/5-9/currier-ives-four-seasons-middle-age-1868.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/92500887/"
        }
      },
      {
        title: "Cities That Could Not Keep Up",
        bullets: [
          "**How fast:** Manchester had about 23,000 people in a count of 1773, about 70,000 at the first national census in 1801, and more than 300,000 by 1851. That year's census found, for the first time, more than half the people of England and Wales living in towns.",
          "**Six challenges:** pollution (coal smoke over the towns, waste in the rivers); poverty (wages that barely paid the rent); housing shortages (families in one room or a cellar); insufficient infrastructure (no sewers, clean water or rubbish collection); public health crises (cholera reached Britain in 1831 and killed about 53,000 people in England and Wales in 1848 and 1849); and increased crime (more people were charged with crimes until the early 1840s, though the numbers also rose because towns set up police).",
          "**Standards of living:** in the 1840s a baby born in Manchester could expect to live only about 25 to 28 years, against about 40 to 42 for England and Wales as a whole. The averages are pulled down by the many babies and young children who died.",
          "**Why:** the College Board's word is \"rapid.\" People arrived faster than anyone could build homes, sewers and water pipes."
        ],
        image: {
          title: "\"A Court for King Cholera,\" Punch, 1852",
          caption: "A cartoon by John Leech in the London magazine Punch, 25 September 1852: a crowded court of lodging houses, with washing at the windows and children playing on a heap of rubbish. It blames crowding and filth for cholera; the disease's real route, dirty water, was shown by John Snow two years later.",
          url: "../assets/images/commons/punch-a-court-for-king-cholera-24597e.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch-A_Court_for_King_Cholera.png"
        }
      },
      {
        title: "Not Only Britain: New York, and 1900",
        bullets: [
          "**Global capitalism:** the College Board ties these challenges to \"global capitalism,\" because the same thing happened wherever industry and trade drew people in. Manhattan grew from about 515,000 people in 1850 to about 1.4 million in 1890, many of them immigrants.",
          "**Riis, 1890:** the reporter Jacob Riis wrote that \"three-fourths of its people live in the tenements,\" crowded apartment buildings for poor renters, and photographed a room \"not thirteen feet either way\" where twelve men and women slept, most of them lodgers paying \"five cents a spot.\"",
          "**By 1900:** cities began to catch up with sewers, clean water and police (Topic 5.8 has those reforms). Death rates fell, and wages rose faster after about 1860. But many city workers were still poor."
        ],
        image: {
          title: "Lodgers in a Bayard Street Tenement, about 1890",
          caption: "A flash photograph by Jacob Riis, taken after midnight on a police visit, of lodgers in one small room of a New York tenement on Bayard Street, where men and women slept on bunks and the floor for \"five cents a spot.\" Library of Congress.",
          url: "../assets/images/topics/5-9/riis-bayard-street-lodgers-five-cents-a-spot-1890.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2002710259/"
        }
      }
    ]
  },

  map: {
    title: "Industrial Cities, 1773 to 1890",
    url: "../assets/images/instructional-maps/topic-5-9.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-9.svg",
    caption: "A BeHistorical map of the places in this lesson: Manchester and London in Britain, New York in the United States, and Japan, where industry grew fast and drew workers in.",
    intro: "Find Manchester and London first, then New York and Japan. Read the key for each one.",
    prompt: "Using the map and its key, choose one city in Britain and one place outside Britain. For each, give one number or date from the key that shows how fast industry changed it or what it did to people's lives. Then say what the two places had in common."
  },

  deepReading: {
    title: "A New Ladder",
    desc: "A longer, optional chapter on the same story: the old ladder of land and birth, the new middle and working classes beside landed families who kept their power, why women's lives split by class, and what rapid urbanization did to health and life in Manchester and New York.",
    url: "deep-reading-topic-5-9-society-and-the-industrial-age.html"
  },

  first10: {
    title: "First & 10: A New Ladder",
    embedUrl: 'first-and-10-topic-5-9-society-and-the-industrial-age-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.9 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: A New Ladder, Seen Up Close",
    intro: "Use the cards to find evidence for one row of the topic: who was on top, who did the work, women and children, or where people lived. Ask who made each source, and why.",
    prompt: "Choose two cards. For each, say what kind of source it is, which row it is evidence for, and what it shows changed or kept going.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Isabella Beeton, The Book of Household Management, 1861",
    intro: "Isabella Beeton was a young London writer married to a publisher, Samuel Beeton. Her book was printed in monthly parts from 1859 to 1861 and then as one large volume in 1861. It was written for the wives of middle-class households, and it became a best-seller. This is the opening of its first chapter, \"The Mistress.\" One word to know: \"domestics\" are servants.",
    attribution: "Isabella Beeton, The Book of Household Management (London: S. O. Beeton, 1861), chapter I, paragraphs 1 and 2, from the public-domain text at Project Gutenberg",
    text: "As with the commander of an army, or the leader of any enterprise, so is it with the mistress of a house. Her spirit will be seen through the whole establishment; and just in proportion as she performs her duties intelligently and thoroughly, so will her domestics follow in her path. Of all those acquirements, which more particularly belong to the feminine character, there are none which take a higher rank, in our estimation, than such as enter into a knowledge of household duties; for on these are perpetually dependent the happiness, comfort, and well-being of a family. ...<br><br>Pursuing this picture, we may add, that to be a good housewife does not necessarily imply an abandonment of proper pleasures or amusing recreation ...",
    questions: [
      "What does Beeton say a middle-class wife's job is? Quote one phrase that shows how important she thinks that job is.",
      "Who were the \"domestics\" the mistress gave orders to, and what does that tell you about how the two classes were connected inside one house?",
      "Contextualize the source: using the lesson, explain the bigger story this book belongs to. Why, by 1861, were more middle-class wives expected to run the home rather than earn wages?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Two Houses in Manchester, 1851",
    desc: "You are fourteen, and you work as a maid in a merchant's house on the edge of Manchester. It is 1851. You go home on Sunday afternoons to your family's one room, half under the street, near the mills.",
    intro: "At the merchant's house you light the fires before anyone wakes, carry hot water up the stairs, and scrub the front steps. The mistress plans the meals with the cook, checks your work, and spends the afternoon with her children. She has a copy of a book on how to run a household. Your wages go home to your mother.",
    detail: "At home, your mother and your older sister work at the cotton mill, and your little brother runs errands for a few pennies. Six of you share the room. The water comes from a pump down the street, and the smoke from the chimneys never quite clears. This summer two children in the next court died of fever. The papers say the town has more than 300,000 people now, and more arrive every week.",
    prompt: "Write a letter to a cousin who still lives in the countryside. Describe your two houses: the merchant's and your family's. Explain why the women in each house spend their days so differently. Then tell your cousin whether to come to Manchester for work, and why. Use the words middle class, wages, and urbanization."
  },

  beInTheRoom: {
    url: '',
    desc: "London, 1884. On a royal commission into the housing of the working classes, decide what your report will say caused the crisis, as one of five people: the commission's chair, a stonemason who became a trade-union leader and MP, a landowning lord, a housing manager who gives evidence, and a dock laborer's wife who gives evidence."
  }

};
