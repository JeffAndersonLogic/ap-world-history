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
    topic: "Topic 5.10",
    title: "Continuity and Change in the Industrial Age",
    subtitle: "Industrialization changed how the world made and moved goods, people, and news, but it reached some places and people far more than others, and much of the old world, from farming to kings, kept going beside it. Argue how much changed, for whom, with evidence.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain what industrialization changed between 1750 and 1900 in how goods were made and how goods, people, and news moved, with evidence from across Unit 5, and say for whom the gains came.",
      kc: "Unit 5: Learning Objective K"
    },
    {
      target: "I can explain how Enlightenment ideas came before the revolutions that built new nation-states, and how nationalism shaped states and empires, and why that change did not come from industry.",
      kc: "Unit 5: Learning Objective K"
    },
    {
      target: "I can write a thesis on the extent to which industrialization brought change from 1750 to 1900 and support it by explaining how pieces of evidence relate: one led to another, they show the same pattern, or they are a contrast.",
      kc: "Unit 5: Learning Objective K"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name one change in how goods were made and one change in how goods, people, or news moved, with a number or date for each, and say who gained most.",
      kc: "Unit 5: Learning Objective K"
    },
    {
      criteria: "I can name one Enlightenment idea, one revolution or new nation-state it came before, and one example of nationalism, and explain why this change was not caused by industry.",
      kc: "Unit 5: Learning Objective K"
    },
    {
      criteria: "I can state a thesis that takes a side on how much changed and names a change and a continuity, use evidence from at least three Unit 5 topics, and explain how two pieces of evidence relate, and say for whom or where the change was greatest.",
      kc: "Unit 5: Learning Objective K"
    }
  ],

  collegeBoardKeyConcepts: [
    { code: 'Unit 5: Learning Objective K', theme: 'Learning Objective', text: 'Explain the extent to which industrialization brought change from 1750 to 1900.', illustrativeExamples: [] },
    { code: 'KC-5.1', theme: 'Review: Unit 5 Key Concepts', text: 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.', illustrativeExamples: [] },
    { code: 'KC-5.1.IV', theme: 'Review: Unit 5 Key Concepts', text: 'Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.', illustrativeExamples: [] },
    { code: 'KC-5.3', theme: 'Review: Unit 5 Key Concepts', text: 'The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.', illustrativeExamples: [] },
    { code: 'KC-5.3.I.A', theme: 'Review: Unit 5 Key Concepts', text: 'Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.', illustrativeExamples: [] },
    { code: 'KC-5.3.I', theme: 'Review: Unit 5 Key Concepts', text: 'The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.', illustrativeExamples: [] },
    { code: 'KC-5.3.II.i', theme: 'Review: Unit 5 Key Concepts', text: 'Nationalism also became a major force shaping the historical development of states and empires', illustrativeExamples: [] }
  ],

  lecture: {
    title: "How Much Changed?",
    intro: "On notebook paper, make two columns: what changed, and what kept going. Next to each change, write where or for whom it was biggest.",
    videos: [],
    segments: [
      {
        title: "Making: Factories and Coal",
        bullets: [
          "**The starting line, 1750:** almost everything was made by hand. The historian Paul Bairoch estimated that China made about a third of the world's manufactured goods and India about a quarter, while Britain made under 2 percent. Almost all energy came from muscles, wood, wind and water.",
          "**Coal and steam:** from the 1780s Watt and Boulton's steam engines turned wheels, so a mill could run wherever coal could be brought. By about 1900 coal supplied about half of all the energy used in the world.",
          "**Cheaper goods:** by 1815 the coarsest cotton yarn cost about a third of what it had in the early 1780s, after rising prices are taken into account; soap came in wrapped, branded bars like Sunlight, sold from 1884. By 1900 Europe and the United States made more than four-fifths of the world's manufactured goods.",
          "**For some:** one careful estimate finds British working families' standard of living rose by less than 15 percent from the 1780s to the 1850s; most historians agree it grew much faster from about 1860 to 1900."
        ],
        image: {
          title: "Power-loom Weaving, 1835",
          caption: "An engraving after a drawing by Thomas Allom, published in 1835 in Edward Baines's History of the Cotton Manufacture in Great Britain: women tend rows of power looms in a cotton mill, driven by belts from the ceiling.",
          url: "../assets/images/commons/powerloom-weaving-in-1835-f81451.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Powerloom_weaving_in_1835.jpg"
        }
      },
      {
        title: "Moving: Rails, Steam, and Wire",
        bullets: [
          "**Rails:** Russia had 27 kilometers of railway in 1840 and more than 53,000 in 1900. India's first passenger train ran in 1853. The first railroad across the United States was finished in 1869.",
          "**Steam:** on the busiest emigrant route, Liverpool to New York, a voyage took more than 40 days on average in 1853, most of them under sail, and about 16 by 1869, as steamships took over.",
          "**Wire:** by the 1840s a telegraph message could travel along a wire in minutes (Morse's line, 1844). From 1866 cables under the Atlantic carried messages without a lasting break, and in 1870 a cable reached Bombay.",
          "**Trade and migration:** in 1870 wheat cost 57.6 percent more in Liverpool than in Chicago; by 1913, just after this unit's period, only 15.6 percent more. About 55 million Europeans moved to the Americas and Australia between 1850 and 1914, and from 1846 to 1940 more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around the Indian Ocean."
        ],
        image: {
          title: "The Great Eastern Carries the Atlantic Cable, 1866",
          caption: "An engraving from the Illustrated London News of 14 July 1866: the steamship Great Eastern leaving Sheerness, England, with the Atlantic telegraph cable on board. Library of Congress.",
          url: "../assets/images/topics/5-5/great-eastern-atlantic-cable-1866.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2022637951/"
        }
      },
      {
        title: "How Far It Reached",
        bullets: [
          "**A witness:** in 1898 the naturalist Alfred Russel Wallace wrote that his century \"may be best compared with the whole preceding historical period.\" Then: \"this is only one side of the shield.\"",
          "**The old makers kept making:** China's share of the world's manufactured goods fell from about a third in 1750 to about 6 percent in 1900, but in 1908, in one province of northern India, about a million people still lived from handloom weaving.",
          "**Most people still farmed:** India's census of 1901 found about two-thirds of the people living by farming; in the United States in 1900, about two in five workers still farmed.",
          "**The gains went to some:** Egypt's army factories had mostly closed by the mid-1840s, while Japan's railways and mills lasted. Landed families kept power (Lord Salisbury, a marquess, was Britain's prime minister in 1900), and in the 1840s a baby born in Manchester could expect to live only about 25 to 28 years."
        ],
        image: {
          title: "A Weaver at His Loom, about 1840",
          caption: "A painting attributed to a painter from Tanjore (Thanjavur), in south India, about 1840, made for European buyers, so it probably shows a typical weaver, not one real person's workshop. Wellcome Collection.",
          url: "../assets/images/topics/5-4/weaver-at-his-loom-tanjore-c1840.jpg",
          sourceUrl: "https://wellcomecollection.org/works/pjnujb7j"
        }
      },
      {
        title: "The Other Revolution: Ideas and Nations",
        bullets: [
          "**The ideas:** Enlightenment thinkers used reason and evidence to question old authorities, including religion used as a power of government. In 1689 John Locke argued that people are born with natural rights to \"lives, liberties and estates,\" and that government is a social contract resting on consent.",
          "**The ideas came first:** the American Revolution began in 1775, the French in 1789, the Haitian in 1791, and the wars for independence in Spanish America in 1810, while factories were still almost all in Britain.",
          "**New nation-states and nationalism:** the revolutions built the United States, Haiti and the new countries of Spanish America. Nationalism joined most of Italy into one kingdom in 1861 and the German states into an empire in 1871, and pulled Greeks and other Balkan peoples away from the Ottoman Empire.",
          "**Where they met, and what kept going:** Meiji Japan built industry to make the nation strong, and Britain's Chartists demanded the vote. In 1900 kings and emperors still ruled most of Europe, and women could vote in national elections almost nowhere."
        ],
        image: {
          title: "The Storming of the Bastille, 1789",
          caption: "An etching by the French artist Charles Thévenin, made in 1790, a year after the crowd of Paris took the Bastille, a royal fortress and prison, on 14 July 1789. Cleveland Museum of Art.",
          url: "../assets/images/topics/5-2/storming-of-the-bastille-thevenin-1790.jpg",
          sourceUrl: "https://www.clevelandart.org/art/2015.21"
        }
      },
      {
        title: "Make the Argument",
        bullets: [
          "**Led to:** coal and steam engines led to railroads and steamships, which led to cheap North American wheat feeding workers in Britain.",
          "**The same pattern:** railways reached the interior of Russia and the interior of India.",
          "**A contrast:** Lancashire's power looms made cloth more cheaply than India's hand weavers could, yet a million people in one Indian province still lived from the handloom in 1908.",
          "**A thesis about extent** takes a side, names a change and a continuity, and says for whom or where the change was greatest, and why."
        ],
        image: {
          title: "Across the Continent, 1868",
          caption: "A print published by Currier and Ives of New York in 1868, drawn by Fanny Palmer from a design by James M. Ives: a railroad and a telegraph line reach a new town in the interior, while two Native American riders watch. It was made to sell. Library of Congress.",
          url: "../assets/images/topics/5-5/currier-ives-across-the-continent-1868.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/90708413/"
        }
      }
    ]
  },

  map: {
    title: "Deep Change, Uneven Reach, 1750 to 1900",
    url: "../assets/images/instructional-maps/topic-5-10.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-10.svg",
    caption: "A BeHistorical map of the places this lesson measures change in: Britain, the United States, Russia, India and China, and the wheat that crossed the Atlantic from Chicago to Liverpool.",
    intro: "Find Britain and the United States first, then Russia, India and China. Read the key for each one.",
    prompt: "Using the map and its key, choose one place where industrialization brought a big change and one place where much kept going. Give one number or date from the key for each. Then say what the two places show about how far the change reached."
  },

  deepReading: {
    title: "How Much Changed?",
    desc: "A longer, optional chapter on the same argument: the starting line of 1750, what industry changed in making and moving, how far the change reached and what kept going, the other revolution in ideas and nations, and how to connect evidence into an argument about extent.",
    url: "deep-reading-topic-5-10-continuity-and-change-in-the-industrial-age.html"
  },

  first10: {
    title: "First & 10: How Much Changed?",
    embedUrl: 'first-and-10-topic-5-10-continuity-and-change-in-the-industrial-age-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.10 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Measure the Change",
    intro: "Use the cards to find evidence of a change and evidence of something that kept going. Ask who made each source, and why.",
    prompt: "Choose two cards: one that shows a change and one that shows a limit or a continuity. For each, say what kind of source it is and what it shows.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Alfred Russel Wallace, The Wonderful Century, 1898",
    intro: "Alfred Russel Wallace was a British naturalist who worked out the theory of evolution by natural selection on his own, separately from Charles Darwin; their papers were read together in 1858. In 1898, near the end of the century, he wrote a book weighing it: Part I on its \"Successes,\" and Part II, more than half the book, on its \"Failures.\" He favored taking land out of private hands, and his \"Failures\" also include some claims scientists rejected, such as attacks on vaccination. The first passage is from his preface; the second opens a chapter he called \"The Demon of Greed.\"",
    attribution: "Alfred Russel Wallace, The Wonderful Century: Its Successes and Its Failures (New York: Dodd, Mead and Company, 1898), Preface and chapter XX, p. 343, from the Cornell University Library copy at the Internet Archive",
    text: "A comparative estimate of the number and importance of these achievements leads to the conclusion that not only is our century superior to any that have gone before it, but that it may be best compared with the whole preceding historical period. ... But this is only one side of the shield. Along with these marvellous Successes — perhaps in consequence of them — there have been equally striking Failures, some intellectual, but for the most part moral and social.<br><br>One of the most prominent features of our century has been the enormous and continuous growth of wealth, without any corresponding increase in the well-being of the whole people ...",
    questions: [
      "In the first passage, what does Wallace claim about how much his century changed? Quote the phrase that shows how big he thinks the change was, then explain in your own words what it means.",
      "In the second passage, what does Wallace claim about who gained from the new wealth? Using the lesson, explain one piece of evidence that supports him and one that does not.",
      "Wallace wrote in 1898, as a famous scientist who wanted to change how land was owned. How might his point of view shape what he chose to call successes and failures? Then explain how one claim of his relates to one piece of evidence from another Unit 5 topic."
    ]
  },

  beSurreal: {
    title: "BeSurreal: Grandmother's Century, 1900",
    desc: "It is 1900. Your grandmother is seventy-five. She was born in 1825 in a farming village in Lancashire, in northwest England, and she has lived her whole life within a day's walk of it.",
    intro: "When she was a girl, her mother wove cloth at home on a handloom, from thread spun in the mills, and news from London came by coach. She remembers the first trains on the railway between Liverpool and Manchester, the cotton mills where her sisters went to work, and the day the village got a telegraph office. Now her shawl is factory cloth, bought cheap, and her soap comes in a wrapped bar with a name on it.",
    detail: "But some things have not moved. Her brother still farms the same fields, for the same landowning family. A queen rules from London, as kings did when she was born. Her cousin who went to the mill town buried two babies there. And when you tell her about a woman in New Zealand who has voted, she laughs and says she never expects to.",
    prompt: "Write a conversation between you and your grandmother. Ask her what changed most in her life and what stayed the same. Then add one place outside Britain from the lesson where the change was bigger or smaller than in her village, and say why. Use the words extent, change, and continuity."
  },

  beInTheRoom: {
    url: '',
    desc: ''
  }

};
