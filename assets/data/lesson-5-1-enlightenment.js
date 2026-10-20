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
    topic: "Topic 5.1",
    title: "The Enlightenment",
    subtitle: "Enlightenment thinkers asked every old authority a new question, by what right?, and answered it with reason, natural rights, and the consent of the people. Over the next century, the people the words left out pressed them until rights reached further.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain the new ideas Enlightenment thinkers used to question where rulers got their power: reason and evidence, natural rights, the social contract, limits on power, and religious toleration.",
      kc: 'KC-5.3.I.A',
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain how Enlightenment ideas spread and came before the revolutions in the Atlantic world, and how the idea that a state belongs to its people became loyalty to the nation.",
      kc: 'KC-5.3.I',
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain how Enlightenment ideas and religious faith pushed reform movements that ended slavery and serfdom, widened the vote, and demanded women's rights between 1750 and 1900, and what had still not changed by 1900.",
      kc: 'KC-5.3.I.C',
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain one new Enlightenment idea (natural rights, the social contract, the separation of powers, or religious toleration), name a writer who argued it (Locke, Rousseau, Montesquieu, or Voltaire), and explain how it challenged the old answer that rulers' power came from God, tradition, and birth.",
      kc: 'KC-5.3.I.A',
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain one way Enlightenment ideas spread (books such as the Encyclopédie, salons, coffeehouses, or letters), explain what it means that the ideas came before the revolutions that began in 1775, 1789, 1791, and 1810, and explain how \"the people\" came to mean the nation.",
      kc: 'KC-5.3.I',
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can choose one reform movement (abolition, the end of serfdom, the right to vote, or women's rights), explain how Enlightenment ideas or religious faith pushed it forward with one piece of evidence (such as the 1787 antislavery society, Russia in 1861, Olympe de Gouges, Mary Wollstonecraft, or Seneca Falls), and name what it had changed by 1900 and one thing that had not.",
      kc: 'KC-5.3.I.C',
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective A',
      theme: 'Learning Objective',
      text: 'Explain the intellectual and ideological context in which revolutions swept the Atlantic world from 1750 to 1900.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 5: Learning Objective B',
      theme: 'Learning Objective',
      text: 'Explain how the Enlightenment affected societies over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I.A',
      theme: 'Cultural Developments and Interactions',
      text: 'Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I',
      theme: 'Cultural Developments and Interactions',
      text: 'The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.II.i',
      theme: 'Cultural Developments and Interactions',
      text: 'Nationalism also became a major force shaping the historical development of states and empires.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I.C',
      theme: 'Social Interactions and Organization',
      text: 'Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.IV.B',
      theme: 'Social Interactions and Organization',
      text: 'Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies.',
      illustrativeExamples: ['Mary Wollstonecraft’s A Vindication of the Rights of Woman', 'Olympe de Gouges’s Declaration of the Rights of Woman and of the Female Citizen', 'Seneca Falls Conference (1848), organized by Elizabeth Cady Stanton and Lucretia Mott']
    }
  ],

  lecture: {
    title: "By What Right?",
    intro: "Use these cards to see how a new way of finding out what is true led writers to question every old authority, the new answers they gave, how the ideas spread before the revolutions, and how reformers pressed the same words further between 1750 and 1900.",
    videos: [],
    segments: [
      {
        title: "The Old Answer and a New Way of Knowing",
        bullets: [
          "In 1750 most rulers said their power came from **God**: kings ruled by **divine right** (Topic 3.2). In most countries one church was the law, nobles were born into their privileges, and many peasants were **serfs** bound to their lord's land. Authority came from God, tradition, and birth.",
          "A new way of finding out what is true spread among educated Europeans. In 1687 Isaac Newton showed that a few laws, worked out with mathematics and tested against what astronomers could see, explained the movement of the planets and why things fall. In 1689 John Locke argued that everything we know comes from experience; at birth the mind is like \"white paper.\" Learning from evidence and experience instead of from authority is **empiricism**.",
          "Thinkers then asked whether reason and evidence could explain people, and how people should live together and be governed. That question is the start of the Enlightenment's political ideas."
        ],
        image: {
          title: "An experiment at home",
          caption: "Valentine Green's mezzotint of 1769, after Joseph Wright of Derby: a traveling lecturer shows a family that living things need air. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-1/air-pump-experiment-green-1769.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/359795"
        }
      },
      {
        title: "The New Answers: Rights, Consent, Limits, and Toleration",
        bullets: [
          "**Natural rights**: Locke (1689) argued that people are born with rights to their \"lives, liberties and estates\" that no government gives and no government may take. Government exists to protect them.",
          "**The social contract**: government is an agreement. \"No one,\" Locke wrote, can be put under another's power \"without his own consent,\" and a government that attacks the people's rights may be resisted. Jean-Jacques Rousseau (1762) began his book on the social contract: \"Man is born free; and everywhere he is in chains.\"",
          "**Limits on power**: Montesquieu (1748) argued that liberty is safest when the powers to make laws, carry them out, and judge are held by different people, the **separation of powers**.",
          "**Religious toleration**: after Jean Calas, a Protestant merchant in Toulouse, was wrongly convicted and executed in 1762, Voltaire campaigned to clear his name and wrote a *Treatise on Tolerance* (1763): no government should force a faith on anyone. Most of these writers still believed in God; some were **deists**. What they questioned was religion used as a power of government.",
          "What changed was what made a ruler **legitimate**, meaning rightful: not God and birth, but reason and the consent of the people. Kings still ruled almost everywhere."
        ],
        image: {
          title: "A book that tried to explain everything",
          caption: "A plate from the Encyclopédie's picture volumes (Paris, 1762 to 1772): two women in a fan-maker's workshop, and the steps of mounting a fan. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-1/encyclopedie-plate-fan-maker.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/707455"
        }
      },
      {
        title: "The Ideas Spread, Before the Revolutions",
        bullets: [
          "The ideas traveled in books, newspapers, and pamphlets; in London's coffeehouses; in letters across Europe and the Atlantic; and in the conversation gatherings of Paris called **salons**, which were often run by women. From 1751 to 1772 Denis Diderot and his partners published the **Encyclopédie**, 17 volumes of articles and 11 of pictures that explained everything from crafts to government by reason. The French government banned it in 1759, and more volumes kept coming out anyway; a second edition was printed in Lucca, Italy, from 1758.",
          "In 1784 the German philosopher Immanuel Kant summed it up: \"Dare to know,\" the courage to use your own understanding.",
          "The College Board says Enlightenment thought \"often preceded\" revolutions. The American Revolution began in 1775, the French in 1789, the Haitian in 1791, and Spanish America's wars of independence in 1810. In Bogotá, Antonio Nariño secretly printed a Spanish translation of France's declaration of rights in 1793 or 1794 and was arrested in 1794. The ideas came first and gave revolutionaries their words; Topic 5.2 explains the other causes.",
          "If a state belongs to its people, which people? More and more, the answer was **the nation**. In 1789 the French revolutionaries wrote that \"the principle of all sovereignty resides essentially in the nation.\" Over the next century **nationalism** became one of the strongest forces shaping states and empires (Topic 5.2)."
        ],
        image: {
          title: "Printed outside France",
          caption: "The title page of the Encyclopédie's second edition, printed in Lucca, Italy, in 1758. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-1/encyclopedie-title-lucca-1758.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/716639"
        }
      },
      {
        title: "Over Time: Pressing the Words Further, 1787 to 1900",
        bullets: [
          "The words sounded like everyone, but the men who wrote them often did not mean everyone. Locke owned shares in the Royal African Company, which traded enslaved Africans; Rousseau wrote that \"a woman's education must therefore be planned in relation to man.\" Yet anyone who read the words could ask: by what right am I left out?",
          "**Abolition**, driven by Enlightenment ideas and religious faith: in 1787 twelve men in London, nine of them Quakers, founded a society to end the British slave trade, under the motto \"Am I not a man and a brother?\" Olaudah Equiano, once enslaved, published his life story in 1789. Britain banned the slave trade in 1807 and in 1834 began ending slavery in most of its empire, though freed people had to keep working for their former owners as unpaid \"apprentices\" until 1838; France ended slavery in its colonies in 1848; Brazil, the last country in the Americas, in 1888.",
          "**The end of serfdom and a wider vote**: the Austrian Empire freed its peasants from forced labor for their lords in 1848; in 1861 Russia's tsar freed more than 20 million serfs, partly, he reportedly told nobles in 1856, because it was better to end serfdom \"from above\" than to wait for it to end \"from below.\" France gave the vote to all adult men in 1848, and Britain widened voting in 1832, 1867, and 1884.",
          "**Women's demands** and an emerging **feminism**: Olympe de Gouges, 1791: \"Woman is born free and remains equal to man in rights\" (she was executed in 1793). Mary Wollstonecraft, 1792: women should be educated to have power \"over themselves.\" At Seneca Falls in 1848, Elizabeth Cady Stanton and Lucretia Mott, a Quaker minister, organized a convention whose declaration said \"all men and women are created equal\" and demanded the vote.",
          "What stayed: by 1900 kings and emperors still ruled most of Europe, other kinds of forced labor went on, and women could vote in national elections almost nowhere (New Zealand, in 1893, was the first self-governing country to allow it). The ideas changed fast; the world changed slowly."
        ],
        image: {
          title: "Liberty and learning, as one painter imagined them",
          caption: "Samuel Jennings's study for Liberty Displaying the Arts and Sciences, about 1791 to 1792: Liberty, among books and instruments, holds out a book to kneeling Black men and women, a broken chain at her feet. Metropolitan Museum of Art.",
          url: "../assets/images/topics/5-1/liberty-arts-sciences-jennings-c1792.jpg",
          sourceUrl: "https://www.metmuseum.org/art/collection/search/708024"
        }
      }
    ]
  },

  map: {
    title: "Where the Ideas Traveled, and Where Rights Reached, 1750 to 1900",
    url: "../assets/images/instructional-maps/topic-5-1.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-1.svg",
    caption: "A BeHistorical map of where Enlightenment ideas came from, how they crossed the Atlantic, and where and when some of the rights they promised were demanded or won between 1750 and 1900.",
    intro: "Find France and Britain, where many of the ideas were published. Follow the two arrows across the Atlantic. Then read the dates in the key, from earliest to latest.",
    prompt: "Using the map, explain one way the dates show that the Enlightenment's effects took a long time to reach different places. Use two places and their dates in your answer."
  },

  deepReading: {
    title: "Where Authority Comes From",
    desc: "A longer, optional chapter on the same story: the old answer and the new way of knowing, the new political ideas and the writers who argued them, how the ideas spread and came before the revolutions, and how reformers and the people left out pressed the words further, from the 1787 antislavery society to Seneca Falls, by 1900.",
    url: "deep-reading-topic-5-1-enlightenment.html"
  },

  first10: {
    title: 'First & 10: By What Right?',
    embedUrl: 'first-and-10-topic-5-1-enlightenment-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.1 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: By What Right?",
    intro: "Use the cards to identify the claims Enlightenment sources make, and what they show about how the ideas changed societies over time.",
    prompt: "Choose two cards. For each, identify and describe its claim in your own words, and name one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: The Declaration of Sentiments, Seneca Falls, 1848",
    intro: "In July 1848, about 300 people met in Seneca Falls, New York, for a women's rights convention organized by Elizabeth Cady Stanton and Lucretia Mott, a Quaker minister. Stanton, with members of the M'Clintock family, drafted a Declaration of Sentiments that copied the form of the Declaration of Independence of 1776, and 100 women and men signed it. These are three short passages. (\"Self-evident\" means so clearly true it needs no proof; \"inalienable\" means it cannot be taken away; \"the elective franchise\" means the right to vote.)",
    attribution: "Declaration of Sentiments, Women's Rights Convention, Seneca Falls, New York, July 1848 (text from the National Park Service)",
    text: "<strong>Passage 1.</strong> We hold these truths to be self-evident; that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty, and the pursuit of happiness.<br><br><strong>Passage 2.</strong> He has never permitted her to exercise her inalienable right to the elective franchise.<br><br><strong>Passage 3.</strong> He has compelled her to submit to laws, in the formation of which she had no voice.",
    questions: [
      "Identify the claim in the first passage and describe it in your own words. Which two words did the writers add to the Declaration of Independence's \"all men are created equal\"?",
      "Who is \"he\" in the second and third passages, and what are the writers arguing against?",
      "The declaration borrowed the words of 1776 to make a new demand. Use it to explain one way the Enlightenment's ideas affected society over time, and one thing it shows had not yet changed by 1848."
    ]
  },

  beSurreal: {
    title: "BeSurreal: Seneca Falls, New York, July 20, 1848",
    desc: "You are a woman at the women's rights convention in Seneca Falls. The Declaration of Sentiments is ready to sign. It demands the vote, and many people, even some who agree with the rest of it, say that demand goes too far.",
    intro: "It is the second day of the convention in the Wesleyan Chapel. Yesterday you heard Elizabeth Cady Stanton read the declaration aloud: \"We hold these truths to be self-evident; that all men and women are created equal.\" You know those words. They are the words of 1776, with two added. Most of the resolutions passed without trouble. The one demanding the right to vote did not pass unanimously. Lucretia Mott and others worried it went too far and would weaken support for everything else. Frederick Douglass stood up and spoke for it, and it passed. Now the declaration is on the table, and people are lining up to sign.",
    detail: "You are thinking about several things at once. The words are the country's own: if all people are created equal, why can only men vote, and why can a husband take even the wages his wife earns? Your faith, like Mott's, teaches that every soul is equal before God. But your name on this paper will be printed in the newspapers, and people you know may laugh at you or worse. Your husband, your church and your neighbors may all have opinions. And you know that Olympe de Gouges, who demanded equal rights for women in France in 1791, did not win them.",
    prompt: "Write your thoughts as you decide whether to sign. Do you sign? What words in the declaration persuade you, or worry you? What do you expect to change because of it, and how soon? Be honest about what you hope and what you fear, the way a real person in 1848 would be."
  },

  beInTheRoom: {
    url: '',
    desc: "Paris, 1788 to 1789. A publisher must decide what a pamphlet on natural rights will claim, whose voices it will print, and who will get to read it."
  }

};
