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
    unit: "Unit 4: Transoceanic Interconnections",
    topic: "Topic 4.7",
    title: "Changing Social Hierarchies",
    subtitle: "Empires decided who could belong and who could rise: new elites appeared, old ones were squeezed, and some groups were welcomed while others were pushed out.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why some states welcomed or made use of different religious and ethnic groups, while others pushed groups out or limited them, using the Ottoman or Mughal Empire and one other case.",
      kc: 'KC-4.3.I.B',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how conquest and new trade created new elites, such as the Manchu banners of Qing China and the Spanish-born and creole elites of the casta system in Spanish America.",
      kc: 'KC-4.2.III.A',
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how the power of old elites, such as Ottoman timar holders, Russian boyars, or European nobles, rose or fell as rulers grew stronger and centralized power, and what stayed the same.",
      kc: 'KC-4.2.III.B',
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain, for one state that made room for or made use of a group (the Ottoman Empire or Akbar's Mughal Empire) and one state that pushed out or limited a group (Spain or Qing China), what the state did and what it gained, and, for one of them, what changed for the group and what stayed the same.",
      kc: 'KC-4.3.I.B',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain how one of the new elites (the Qing banners, or the peninsulares and creoles at the top of the casta system) was made by conquest or new trade.",
      kc: 'KC-4.2.III.A',
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain how the power of one old elite (Ottoman sipahis who held timars, Russian boyars, or French nobles) changed as rulers grew stronger, naming one thing it lost and one thing it kept, and one thing about the top of society that stayed the same.",
      kc: 'KC-4.2.III.B',
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective M',
      theme: 'Learning Objective',
      text: 'Explain how social categories, roles, and practices have been maintained or have changed over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.I.B',
      theme: 'Social Interactions and Organization',
      text: 'Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.',
      illustrativeExamples: ['Expulsion of Jews from Spain and Portugal; the acceptance of Jews in the Ottoman Empire', 'Restrictive policies against Han Chinese in Qing China', 'Varying status of different classes of women within the Ottoman Empire']
    },
    {
      code: 'KC-4.2.III.A',
      theme: 'Social Interactions and Organization',
      text: 'Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.2.III.B',
      theme: 'Social Interactions and Organization',
      text: 'The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.',
      illustrativeExamples: ['Ottoman timars', 'Russian boyars', 'European nobility']
    }
  ],

  lecture: {
    title: "Who Belongs, Who Rises: How It Worked",
    intro: "The First & 10 tells the story. These cards take four parts of it apart: why a state would make room for a group it did not have to, how a small group of conquerors held China, how the casta ranking sorted people in Spanish America, and how stronger rulers squeezed the nobles who used to share their power.",
    videos: [],
    segments: [
      {
        title: "Why Make Room for a Group",
        bullets: [
          "Making room for a group was not about kindness. It paid. When Spain suppressed difference by expelling its Jews in 1492, the Ottoman sultan Bayezid II let the refugees settle in his cities, and the empire gained merchants, doctors, craftsmen, and taxpayers. Exiles from Spain set up Istanbul's first printing press.",
          "The Ottomans let Christians and Jews practice their religion and run their own marriages, inheritances, schools, and family courts through their own leaders. In return, those leaders answered for their community's taxes and good behavior, and the community paid a special tax, the **jizya**. The state got order and money without having to run everything itself. But it was **accommodation without equality**: the top jobs went to Muslims.",
          "In India, the emperor Akbar ended the jizya in 1564 and made Hindu **Rajput** princes some of his highest commanders. He got their armies and their loyalty. His great-grandson Aurangzeb brought the jizya back in 1679. A ruler could make room for a group, and the next ruler could take it away."
        ],
        image: {
          title: "An Armenian wedding in the Ottoman Empire",
          caption: "Jean Baptiste Vanmour, a Flemish-born painter who lived in Istanbul, painted an Armenian Christian wedding procession on its way to church, about 1720 to 1737. Rijksmuseum.",
          url: "../assets/images/topics/4-7/armenian-wedding-vanmour-c1720.jpg",
          sourceUrl: "https://id.rijksmuseum.nl/200108069"
        }
      },
      {
        title: "How a Few Conquerors Held China",
        bullets: [
          "When the Manchus conquered China in 1644, they were a small minority ruling a huge Han Chinese majority. They could not run China by themselves, so they kept the Chinese system: the civil service exams, the Confucian officials, and the law codes. Han scholars still filled most government jobs. That is the **continuity**.",
          "They also built a new elite at the top, the **banners**: hereditary military units of Manchus, Mongols, and Han families who had joined the Manchus early. Bannermen lived in walled quarters in the cities, were paid by the state, and had legal privileges.",
          "And they restricted the majority. In 1645 every Han man had to wear the Manchu braid, the **queue**, or be killed. Many top posts went to two officials, one Manchu and one Han, so the Manchu could watch the Han. A line of willow fences was built to keep Han farmers out of the Manchu homeland in the northeast, though many crossed anyway."
        ],
        image: {
          title: "Banner horsemen celebrate the conquest",
          caption: "Part of a painted handscroll by Nardunbu, a Manchu artist, painted in 1662, eighteen years after the young Qing emperor entered Beijing, showing one of the celebrations held for that entry: a rider stands on a galloping horse playing a flute, while men carry the banners. The yellow label names the commander of the Plain Yellow Banner. Metropolitan Museum of Art.",
          url: "../assets/images/topics/4-7/banner-horsemanship-1662.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/65013"
        }
      },
      {
        title: "How the Casta Ranking Sorted People",
        bullets: [
          "In Spanish America, colonial society ranked people by their ancestry, the **casta** system, and among people counted as Spanish it favored those born in Spain. At the top were **peninsulares**, people born in Spain: the viceroys who ruled for the king were almost always Spanish-born. Next were **creoles**, people of Spanish ancestry born in the Americas, many of them rich from silver mines, huge estates, and trade.",
          "Below them came people of mixed ancestry, such as mestizos and mulattos; Indigenous people, who had their own town governments and paid tribute to the crown; and people of African ancestry, some free and many enslaved.",
          "In the 1700s, artists painted sets of **casta paintings** that showed every mix of parents as a labeled family, as if society were a neat chart. Most of their many labels never appeared in official records, and how a person was recorded could change with wealth, job, and reputation. But ancestry still opened or closed doors, and the top belonged to people whose families came from Spain."
        ],
        image: {
          title: "A casta painting, about 1715",
          caption: "Juan Rodríguez Juárez painted one of the earliest known casta series in Mexico, about 1715 to 1720. The label at the top, in Spanish, says that a mestizo father and an Indian mother produce a \"coyote\" child. Hispanic Society of America.",
          url: "../assets/images/topics/4-7/casta-rodriguez-juarez-c1715.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Juan_Rodr%C3%ADguez_Ju%C3%A1rez_-_De_Mestizo,_y_de_India_Produce_Coyote_(Castas)_-_LA2122_-_Hispanic_Society_of_America.jpg"
        }
      },
      {
        title: "How Stronger Rulers Squeezed Old Elites",
        bullets: [
          "An Ottoman **sipahi** was a cavalryman who held a **timar**, the right to collect the taxes of a piece of land in return for riding to war. When wars came to need soldiers with guns paid in cash, the sultan needed money more than horsemen, so the state sold the right to collect taxes instead, and from 1695 it sold it for life. The sipahis faded: some families held on to their timars, which were not abolished until 1831, but they no longer led the army, and tax farmers and powerful local families rose.",
          "In Russia, Peter the Great replaced the old council of **boyars** with a Senate he appointed and made noblemen serve the state for life. His **Table of Ranks** of 1722 made a man's place depend on the rank he earned. The nobles lost their independence but kept their estates and their serfs.",
          "In France, Louis XIV centralized power and kept the great nobles at his palace at Versailles, competing for his favor, and kept them loyal with offices, pensions and army commands. The French **nobility** kept their titles and privileges and lost the power to defy the king. But in England in 1688, Parliament, a body of landowning nobles and gentry, limited the monarchs instead. The power of old elites could fall, or rise."
        ],
        image: {
          title: "Peter the Great",
          caption: "Peter the Great in armor, probably by a Russian painter, first half of the 1700s. Rijksmuseum.",
          url: "../assets/images/topics/4-7/peter-the-great-russia-c1700.jpg",
          sourceUrl: "https://id.rijksmuseum.nl/200107960"
        }
      }
    ]
  },

  map: {
    title: "Who Belonged, Who Rose, Who Was Squeezed, 1492 to 1722",
    url: "../assets/images/instructional-maps/topic-4-7.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-7.svg",
    caption: "Nine places where the social ladder changed, sorted into three kinds: who could belong, new elites made by conquest and trade, and old elites squeezed by stronger rulers, or winning.",
    intro: "Use the map to see how far these changes reached. Between 1492 and 1722, states in Europe, Southwest Asia, South Asia, East Asia, and the Americas changed who could belong and who could rise. The colors sort the cases into three kinds; the key says which is which.",
    prompt: "Find ONE place where a state decided who could belong and ONE place where a new elite rose or an old elite was squeezed. For each, name the state or the group and say what changed."
  },

  deepReading: {
    title: "Who Belongs, Who Rises",
    desc: "A textbook-depth companion on why the Ottomans took in Jewish refugees and how they governed Christians and Jews, how Akbar and Aurangzeb treated Hindu groups, how Ottoman women's lives differed by class, how the Manchus built a new elite and held the Han in place, how the casta ranking sorted Spanish America, and how sipahis, boyars, and French and English nobles lost or gained power. Optional, and useful when a checkpoint asks what stayed the same.",
    url: "deep-reading-topic-4-7-changing-social-hierarchies.html"
  },

  first10: {
    title: 'First & 10: Who Belongs, Who Rises',
    embedUrl: 'first-and-10-topic-4-7-changing-social-hierarchies-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.7 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Who Belongs, Who Rises",
    intro: "Use the cards to build one claim about who could belong, who could rise, or who was squeezed between 1450 and 1750: a Mughal painting of a Rajput ruler submitting to Akbar, two paintings of life in Istanbul by Jean Baptiste Vanmour, a Manchu painter's handscroll of the banners, a casta painting from Mexico, and a painting of Versailles in 1722.",
    prompt: "Choose two cards and make one claim about who could belong, who could rise, or who was squeezed in an empire between 1450 and 1750."
  },

  primarySource: {
    title: "Primary Source: Lady Mary Wortley Montagu on Ottoman Women, 1717",
    intro: "Lady Mary Wortley Montagu was an English noblewoman whose husband was Britain's ambassador to the Ottoman Empire. In 1717, living in Adrianople (today Edirne, in Turkey), she wrote letters home describing the Ottoman women she met, most of them wealthy. This is part of her letter to her sister of April 1, 1717. She later revised her letters into a book, which was circulating in manuscript by 1724; it was first published in 1763, after her death, so read it as a letter she polished for readers; this text is from the 1906 Everyman edition. Words in brackets are explanations, and \"...\" marks words left out.",
    text: "'Tis very easy to see they have more liberty than we have. No woman, of what rank soever, being permitted to go into the streets without two muslins [veils]; one that covers her face all but her eyes, and another that hides the whole dress of her head ... there is no distinguishing the great lady from her slave. ... This perpetual masquerade [constant disguise] gives them entire liberty of following their inclinations without danger of discovery. ... Neither have they much to apprehend [fear] from the resentment of their husbands; those ladies that are rich having all their money in their own hands, which they take with them upon a divorce, with an addition which he is obliged to give them. Upon the whole, I look upon the Turkish women as the only free people in the empire: the very Divan [the sultan's council] pays a respect to them ... They are queens of their slaves, whom the husband has no permission so much as to look upon ...",
    questions: [
      "What is Montagu's argument about Ottoman women? Quote the words where she states it most directly, then say it in your own words.",
      "Choose ONE piece of evidence from this lesson about Ottoman women (Hürrem or Kösem, women in the town courts, the rules on inheritance and testimony, or enslaved women). Explain whether it supports, modifies, or refutes Montagu's argument, and why.",
      "Montagu visited mostly wealthy women. Find one phrase in the excerpt that shows she is describing rich women, and explain how that limits her claim that Turkish women were \"the only free people in the empire.\""
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Left Spain in 1492",
    desc: "You are fifteen, from a Jewish family of cloth merchants in Spain. Since spring, the king and queen's order has been read aloud in the towns: every Jew must become Christian or leave the kingdom by the end of July. The order lets you take your goods, but not gold, silver, or coins.",
    intro: "Your cousin Isaac has decided to be baptized and stay. He keeps his house and his shop. Your family sold what it could, for whatever buyers would pay, and left. After a long and dangerous journey by sea, and months of waiting in ports along the way, it is now 1493, and you have reached Salonica, a port city of the Ottoman Empire, where the sultan lets refugees like you settle.",
    detail: "In Salonica, Jewish families from Spain are setting up their own congregations, speaking Spanish among themselves, and going back to trade. You can pray openly. Your community's leaders run your marriages and settle your disputes, and they answer to the sultan's officials for your community's taxes, including the jizya, a special tax that Christians and Jews pay. You are safe here. But the highest offices in the sultan's army and government go almost always to Muslims.",
    prompt: "Write a letter to your cousin Isaac, who was baptized and stayed in Spain. Tell him about the journey and your new life in Salonica: what you are allowed to do, what you pay, and what you still cannot do. Then write two sentences you would not dare send: which of you made the better choice, and why?"
  },

  beInTheRoom: {
    url: '',
    desc: "Join a court hearing in Mexico City around 1715 and decide how much a widow's ancestry, wealth, family, and reputation should count when the colony sorts people into ranks."
  }

};
