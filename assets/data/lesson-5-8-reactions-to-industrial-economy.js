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
    topic: "Topic 5.8",
    title: "Reactions to the Industrial Economy from 1750 to 1900",
    subtitle: "Industrial capitalism, and the power of industrial states, caused people to call for change: workers organized unions and parties, Marx and other socialists imagined a different society, and governments, organizations, and individuals pushed political, social, educational, and urban reforms; outside Europe, the Ottoman and Qing governments tried to modernize their armies and economies, and met resistance from their own elites.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why workers in industrial states organized unions, movements, and political parties, and what they wanted.",
      kc: "KC-5.1.V.A",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how discontent with who held power encouraged new ideas, including socialism and the communism of Karl Marx.",
      kc: "KC-5.3.IV.A.ii",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how governments, organizations, and individuals pushed political, social, educational, and urban reforms in response to the changes industrial capitalism brought.",
      kc: "KC-5.1.V.D",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain why the Ottoman and Qing governments tried to reform and modernize their economies and armies, and who resisted the reforms.",
      kc: "KC-5.1.V.B",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain one cause that led workers to organize and one thing they wanted (better conditions, shorter hours, higher wages, or the vote), with a detail such as the Combination Acts, the Chartists, or Germany's Social Democratic Party, and one effect of their organizing.",
      kc: "KC-5.1.V.A",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain what socialism meant, what Marx predicted and what he meant by communism, and one thing his ideas did, or did not do, by 1900.",
      kc: "KC-5.3.IV.A.ii",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can give one example of a reform, say what kind it was (political, social, educational, or urban) and who pushed it (a government, an organization, or individuals), and explain why a government such as Bismarck's might reform.",
      kc: "KC-5.1.V.D",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain what pushed the Ottoman or Qing government to modernize, give one reform with a detail, and name one person or group who resisted it.",
      kc: "KC-5.1.V.B",
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective I',
      theme: 'Learning Objective',
      text: 'Explain the causes and effects of calls for changes in industrial societies from 1750 to 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.V.D',
      theme: 'Social Interactions and Organization',
      text: 'In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.V.A',
      theme: 'Social Interactions and Organization',
      text: 'In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.IV.A.ii',
      theme: 'Social Interactions and Organization',
      text: 'Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.V.B',
      theme: 'Social Interactions and Organization',
      text: 'In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Calls for Change",
    intro: "On notebook paper, draw four rows: workers, thinkers, reformers and governments, and the Ottoman and Qing courts. For each row, find the pressure that pushed people (the cause), what they wanted, and what happened (the effect).",
    videos: [],
    segments: [
      {
        title: "Workers Organize",
        bullets: [
          "**At first, a crime:** in Britain, the Combination Acts of 1799 and 1800 made it illegal for workers to join together to demand higher wages or shorter hours. Parliament repealed them in 1824, and a law of 1825 then limited what unions could do.",
          "**The risks:** in 1834 six farm laborers from Tolpuddle, in Dorset, were sentenced to seven years as convicts in Australia for swearing a secret oath when they formed a union. After huge protests, they were pardoned in 1836.",
          "**Unions grow:** a labor union is a group of workers who bargain with their employer together and can strike, stopping work together. Unions formed the Trades Union Congress in 1868, and a law of 1871 gave them legal standing. They fought for better conditions, shorter hours, and higher wages; a law of 1847 limited women and young people in textile mills to ten hours a day from 1848.",
          "**A workers' movement:** from 1838 the Chartists demanded a vote for every man over 21 and five other changes to Parliament, set out in a People's Charter. Parliament rejected their petitions of 1839, 1842, and 1848.",
          "**Parties in different countries:** in Germany, two workers' parties united in 1875; banned from 1878 to 1890, the party won more votes than any other in February 1890, and that autumn renamed itself the Social Democratic Party. In Britain, unions and socialists founded a committee in 1900 that became the Labour Party in 1906. In the United States, the American Federation of Labor (1886) organized skilled workers for better wages and hours."
        ],
        image: {
          title: "The Chartists' National Convention, 1839",
          caption: "An etching of the Chartists' National Convention \"as it met on Monday the 4th of February, 1839, at the British Coffee House\" in London, where delegates gathered to organize the national petition for the People's Charter. Someone has written \"Chartist meeting\" on the sheet. Library of Congress.",
          url: "../assets/images/topics/5-8/chartist-national-convention-1839.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2004669356/"
        }
      },
      {
        title: "Thinkers Imagine a Different Society",
        bullets: [
          "**Socialism:** in the late 1820s and 1830s, followers of Robert Owen, a businessman who had managed the New Lanark cotton mills in Scotland with shorter hours and a school for workers' children, began to call their ideas socialism: land, factories, and the other things a society uses to make wealth should be owned and run in common, for everyone, not by private owners for their own profit.",
          "**The Communist Manifesto:** in February 1848, Karl Marx and Friedrich Engels published The Communist Manifesto in London. It opens its first section: \"The history of all hitherto existing society is the history of class struggles.\"",
          "**Marx's prediction:** industry was splitting society into two classes, the owners of factories and the workers. One day, he argued, the workers would overthrow the owners, end private ownership of factories and land, and build a society with no classes: communism. Marx later wrote Capital (1867) in London.",
          "**The cause:** the College Board says \"discontent with established power structures\" encouraged these ideas: anger at who held power, not only at low wages.",
          "**By 1900:** no revolution like the one Marx predicted had won lasting power in an industrial country. But in 1891 Germany's Social Democrats adopted a program based on his ideas, and in 1889 socialist parties from many countries called on workers to march on May 1, 1890, for an eight-hour day. No communist party ruled a country until the twentieth century."
        ],
        image: {
          title: "Socialism and communism",
          caption: "BeHistorical topic artwork for this card. The ideas themselves are on the page in Marx and Engels's own words: open the Primary Source.",
          url: "",
          sourceUrl: ""
        }
      },
      {
        title: "Reformers and Governments",
        bullets: [
          "**Three kinds of reformers:** the College Board names \"governments, organizations, and individuals.\" A reform changes a law or a system to fix a problem without overthrowing it.",
          "**Political:** after a workers' organization, the Reform League, held huge meetings for the vote, Britain's Reform Acts of 1867 and 1884 gave the vote to many working men. No woman could vote in a British national election until 1918.",
          "**Social:** the Factory Act of 1833 banned children under nine from most textile mills (not silk mills) and sent inspectors to check; a law of 1842, brought in by Lord Ashley, a member of Parliament, stopped women, girls, and boys under ten from working inside mines.",
          "**Educational:** the Education Act of 1870, written by a government minister, William Forster, after a campaign by the National Education League, set up public elementary schools where church schools were not enough; from 1880 children had to attend.",
          "**Urban:** in the hot summer of 1858 the River Thames, which carried London's sewage, smelled so foul it was called the \"Great Stink.\" London's city government then had its engineer, Joseph Bazalgette, build a huge system of new sewers to carry the waste away (Topic 5.9 has the city's problems).",
          "**A government reforms to defeat its critics:** Germany's chancellor, Otto von Bismarck, banned the socialists in 1878, then gave workers health insurance (1883), insurance for injuries at work (1884), and pensions for old age and disability (1889), hoping in part to win workers away from the socialists."
        ],
        image: {
          title: "\"Capital and Labour,\" Punch, 1843",
          caption: "A cartoon by R. J. Hamerton, signed \"Shallabala,\" in the London magazine Punch, 1843 (volume 5, page 49): a wealthy family lounges in comfort above, while men, women, and children toil in a mine below. It appeared the year after the Mines Act of 1842.",
          url: "../assets/images/commons/punch-1843-reichtum-und-armut-7927a6.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch_1843_-_Reichtum_und_Armut.png"
        }
      },
      {
        title: "Old Empires Modernize, and Meet Resistance",
        bullets: [
          "**A different pressure:** the Ottoman Empire and Qing China had few factories of their own. Their pressure came from the industrial powers' armies, warships, and trade. Like Egypt and Japan in Topic 5.6, both governments tried to modernize, and both met resistance from inside.",
          "**The Ottoman Empire:** in the 1790s Sultan Selim III built a European-style army, the \"New Order\"; the Janissaries, the old army corps, and conservative religious scholars opposed it, and a revolt overthrew him in 1807. In June 1826 Sultan Mahmud II destroyed the Janissaries.",
          "**The Tanzimat:** from 1839 the government promised all subjects safety of life, honor, and property, fair taxes, and regular military service; a decree of 1856 promised equal treatment to Christians and Jews. Mahmud II's government had opened a state fez factory in Istanbul in the 1830s; in the Tanzimat years it got steam engines and machines from Britain and Belgium, and from 1855 the state built telegraph lines. Many Muslims resented the 1856 promise of equality. A constitution and parliament came in 1876; in 1878 Sultan Abdulhamid II shut the parliament down.",
          "**Qing China:** after defeats in the Opium Wars (Unit 6) and the Taiping Rebellion, officials such as Zeng Guofan and Li Hongzhang led Self-Strengthening from the 1860s: the Jiangnan Arsenal in Shanghai (1865), a navy yard at Fuzhou (1866) and a steamship company (1872); Prince Gong's foreign office opened a school for foreign languages in Beijing (1862).",
          "**Resistance in China:** in 1867 Woren, a senior official and the emperor's tutor, opposed teaching Western mathematics at the language school. Japan defeated China's new navy in 1894 and 1895. In 1898 the Guangxu Emperor's hundred days of reforms were stopped by the Empress Dowager Cixi and officials who opposed them; six reformers were executed."
        ],
        image: {
          title: "Inside the Imperial Fez Factory, Istanbul, 1880s",
          caption: "A photograph by Abdullah Frères, made between 1880 and 1893 for an album of Sultan Abdulhamid II: belt-driven machines making fezzes, the brimless red hats worn across the empire, in the state's own factory, which also made army uniforms. It shows the empire as its government wanted it seen. Library of Congress.",
          url: "../assets/images/topics/5-8/ottoman-imperial-fez-factory-interior-1880s.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2003675899/"
        }
      }
    ]
  },

  map: {
    title: "Calls for Change, 1824 to 1898",
    url: "../assets/images/instructional-maps/topic-5-8.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-8.svg",
    caption: "A BeHistorical map of the places in this lesson: Britain and Germany, where workers organized and governments reformed, and the Ottoman Empire and Qing China, whose governments tried to modernize under pressure from industrial powers.",
    intro: "Find Britain and Germany first, then the Ottoman Empire and Qing China. Read the key for each shaded area, then follow the two numbered arrows, which show pressure on China from outside.",
    prompt: "Using the map and its key, choose one place in Western Europe (Britain or Germany) and one in Asia (the Ottoman Empire or Qing China). For each, say who called for change there and what they did or wanted, with one date from the key. Then use arrow 1 or 2 to say what pressured China."
  },

  deepReading: {
    title: "Calls for Change",
    desc: "A longer, optional chapter on the same story: how British and German workers organized unions and parties, what Marx and other socialists imagined, how governments, organizations, and individuals pushed reforms, and how the Ottoman and Qing governments tried to modernize, and who resisted them.",
    url: "deep-reading-topic-5-8-reactions-to-industrial-economy.html"
  },

  first10: {
    title: "First & 10: Calls for Change",
    embedUrl: 'first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.8 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Who Called for Change, and Why?",
    intro: "Use the cards to find evidence for one row of the topic: workers, thinkers, reformers and governments, or the Ottoman and Qing courts. Ask who made each source, and why.",
    prompt: "Choose two cards. For each, say what kind of source it is, which row it is evidence for, and how its maker's point of view or purpose shapes what it shows.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Marx and Engels, The Communist Manifesto, 1848",
    intro: "Karl Marx and Friedrich Engels were German writers living in exile. A small group of workers and radicals, the Communist League, asked them to write down its ideas, and the Manifesto was printed in German in London in February 1848. These are four short passages from the English translation of 1888, which Engels checked. Two words to know: the bourgeoisie are the owners of factories and businesses, and the proletarians are wage workers.",
    attribution: "Karl Marx and Friedrich Engels, Manifesto of the Communist Party (London, 1848), English translation by Samuel Moore with Friedrich Engels (1888), sections I, II, and IV, shortened, from the public-domain text at the Marxists Internet Archive",
    text: "The history of all hitherto existing society is the history of class struggles. Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another ...<br><br>Society as a whole is more and more splitting up into two great hostile camps, into two great classes directly facing each other ...<br><br>In this sense, the theory of the Communists may be summed up in the single sentence: Abolition of private property. ...<br><br>The Communists disdain to conceal their views and aims. They openly declare that their ends can be attained only by the forcible overthrow of all existing social conditions. Let the ruling classes tremble at a Communistic revolution. The proletarians have nothing to lose but their chains. They have a world to win. Working Men of All Countries, Unite!",
    questions: [
      "Point of view and purpose: who wrote the Manifesto, and for which group? Quote one line that shows what the authors wanted their readers to do.",
      "Historical situation: Engels had lived in Manchester and published a book about its workers' streets in 1845. Using the lesson, explain how what he saw there might help explain the claim that society was splitting into \"two great hostile camps.\"",
      "Audience: the last line speaks to \"Working Men of All Countries.\" Why might the authors speak to workers everywhere and not in one country? Using the lesson, name one thing that had happened by 1900 that they would have welcomed, and one prediction that had not come true."
    ]
  },

  beSurreal: {
    title: "BeSurreal: A Manchester Cotton Mill, April 1848",
    desc: "You are fifteen, and you work as a piecer in a Manchester cotton mill: you walk along the spinning machines and join the threads when they break. It is April 1848.",
    intro: "The mill sets the hours, and when the machines run, you run. The older workers talk about three things: the union, the Charter, and a new law. Parliament passed it last year, and from the first of May it limits women and young people like you to ten hours of work a day.",
    detail: "This week the newspapers are full of London. On 10 April the Chartists held a great meeting on Kennington Common to send their petition to Parliament, asking for the vote for every man. Your uncle says Parliament will throw it out, as it threw out the last two. Your mother says the ten-hour law shows that asking can work. A workmate says that petitions and laws will never be enough, and that the people who work the mills should own them.",
    prompt: "Write a letter to your cousin, who works on a farm. Tell her what the workers in your mill want, and why. Then say which call for change you think will make the biggest difference to your life: the union, the Charter, the new law, or your workmate's idea. Use the words union, Charter, and reform."
  },

  beInTheRoom: {
    url: '',
    desc: "Beijing, 1867. At the Qing court, decide whether the language school should teach Western astronomy and mathematics, as one of five people: a prince who runs foreign affairs, a senior scholar who opposes the plan, a provincial governor who runs an arsenal, a young scholar studying for the examinations, and an interpreter trained at the school."
  }

};
