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
    topic: "Topic 5.5",
    title: "Technology of the Industrial Age",
    subtitle: "Machines unlocked the energy stored in coal and then oil. That energy, with new ways of making steel, chemicals, electricity, and precise machines, let the world make far more than ever before. Railroads, steamships, and the telegraph carried goods, people, and news into the interiors of continents, and trade and migration grew.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how machines such as the steam engine and the internal combustion engine let people use the energy stored in coal and oil, and how new methods of making steel, chemicals, electricity, and precision machinery after 1850 changed what factories could make.",
      kc: "KC-5.1.I.B; KC-5.1.I.E",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how railroads, steamships, and the telegraph reached the interiors of continents, and how they led to more trade and more migration.",
      kc: "KC-5.1.IV",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain step by step how one machine (Newcomen's or Watt's steam engine, or the internal combustion engine) let people use energy stored in a fossil fuel, give one piece of evidence that the energy available grew (such as Britain's coal output, or coal's share of the world's energy by 1900), and explain what one new method of the second industrial revolution (steel, chemicals, electricity, or precision machinery) let people make.",
      kc: "KC-5.1.I.B; KC-5.1.I.E",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can explain what railroads, steamships, or the telegraph could do that older ways could not; give one example of an interior region that railroads or steamboats reached (such as the railroad across the United States in 1869, or the Trans-Siberian Railway); explain how that led to more trade or more migration, using one number from the lesson, and name the other effect; and connect railroads or steamships back to the coal, steam, or steel that drove or built them.",
      kc: "KC-5.1.IV",
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective F',
      theme: 'Learning Objective',
      text: 'Explain how technology shaped economic production over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.I.B',
      theme: 'Technology and Innovation',
      text: 'The development of machines, including steam engines and the internal combustion engine, made it possible to take advantage of both existing and vast newly discovered resources of energy stored in fossil fuels, specifically coal and oil. The fossil fuels revolution greatly increased the energy available to human societies.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.I.E',
      theme: 'Technology and Innovation',
      text: 'The “second industrial revolution” led to new methods in the production of steel, chemicals, electricity, and precision machinery during the second half of the 19th century.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.IV',
      theme: 'Technology and Innovation',
      text: 'Railroads, steamships, and the telegraph made exploration, development, and communication possible in interior regions globally, which led to increased trade and migration.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "More Power, Longer Reach",
    intro: "Use these cards to follow the chain: how machines unlocked the energy stored in coal and oil, what new methods that energy made possible, and how railroads, steamships, and the telegraph reached the interiors of continents.",
    videos: [],
    segments: [
      {
        title: "More Power: Machines Unlock Fossil Fuels",
        bullets: [
          "**Before:** in 1750 almost all the energy used in the world came from muscles, wood, wind, and water. (Britain was the exception: by 1700 coal, burned for heat, gave England about half of its energy.) Each had a limit: a water wheel works only where a stream flows strongly, and a forest takes decades to grow back. Until about 1900, wood and other things that grow were the world's largest source of energy.",
          "**Fossil fuels:** coal and oil are the remains of plants and tiny sea creatures, buried for millions of years, with energy stored inside them.",
          "**A pump:** in 1712 Thomas Newcomen set up a steam engine near Dudley Castle, in the English Midlands, to pump water out of a coal mine. It burned a great deal of coal.",
          "**Watt:** in 1765 James Watt, an instrument maker at the University of Glasgow, found that cooling the steam in a separate chamber kept the cylinder hot; he patented it in 1769. His engines used less than a third of the coal of a Newcomen engine. In the 1780s Watt and Matthew Boulton built engines that turned wheels, so mills could run on coal instead of rivers.",
          "**How much more:** Britain mined about 65 million tons of coal in 1854 and about 225 million tons in 1900. By about 1900, coal supplied about half of all the energy used in the world, nearly as much as wood and other things that grow.",
          "**Oil and a new engine:** in 1859 Edwin Drake struck oil at Titusville, Pennsylvania; for the rest of the century most oil became kerosene, a lamp fuel. The internal combustion engine burns its fuel inside the engine: Nikolaus Otto built a four-stroke engine in 1876, and Carl Benz patented a car in 1886. But the United States had only about 8,000 cars in 1900. The big changes came later."
        ],
        image: {
          title: "A Newcomen Engine, 1740s",
          caption: "An engraving from the 1740s of a Newcomen steam engine: a fire under the boiler at the bottom, a cylinder above it, a rocking beam, and pump rods going down into the mine at the left. Wellcome Collection.",
          url: "../assets/images/topics/5-5/newcomen-engine-engraving-1740s.jpg",
          sourceUrl: "https://wellcomecollection.org/works/gwv62367"
        }
      },
      {
        title: "New Methods: The Second Industrial Revolution",
        bullets: [
          "**After 1850:** with so much energy to use, people found new ways to make things. Historians call this the second industrial revolution. It brought new methods in four areas.",
          "**Steel:** before the 1850s, steel was slow and costly to make. In 1856 Henry Bessemer showed that blowing air through melted iron burned out the impurities and made steel quickly and in large amounts. The United States made about 69,000 tons of steel in 1870 and about 10 million tons in 1900. Steel became rails, bridges, ships, and machines.",
          "**Chemicals:** in 1856 William Perkin, an eighteen-year-old chemistry student in London, made a purple dye, mauve, from chemicals that came from coal tar. German companies such as BASF, founded in 1865, built laboratories to invent new dyes, and in 1897 BASF began selling indigo made in a factory. By 1914 Germany made most of the world's dyes.",
          "**Electricity:** in 1882 Thomas Edison's Pearl Street Station in New York began selling electric power, lighting about 400 lamps. Electric motors let each machine run on its own motor. But in 1899, electric motors gave less than 5 percent of the power in American factories.",
          "**Precision machinery:** machine tools had begun to cut metal parts so exactly that one part fit any copy of the same machine: interchangeable parts. After 1850 the method spread widely. Standard screw threads, set early by Joseph Whitworth in Britain in 1841 and then by William Sellers in the United States in 1864, helped them spread."
        ],
        image: {
          title: "A Bessemer Converter",
          caption: "An engraved diagram of a Bessemer converter: A, the outside, an egg-shaped iron vessel that tipped on a pivot to pour; B, the vessel cut open to show its thick lining and the holes in the bottom where air was blown in. A diagram, not a picture of a real works.",
          url: "../assets/images/commons/bessemer-converter-440883.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Bessemer_converter.jpg"
        }
      },
      {
        title: "Longer Reach: Railroads, Steamships, and the Telegraph",
        bullets: [
          "**Railroads:** the Liverpool and Manchester Railway, opened in England in 1830, was the world's first railway between two cities, with trains pulled by steam locomotives. Russia had 27 kilometers of railway in 1840 and more than 53,000 in 1900. India's first passenger train ran from Bombay to Thane in 1853. The first railroad across the United States was finished at Promontory Summit, Utah, in 1869. Russia began the Trans-Siberian Railway in 1891, and by 1904 trains could cross to the Pacific.",
          "**Steamships:** under sail, emigrants from Norway took about 53 days on average for the whole trip to America; by steamship, the Atlantic crossing from England took about 12 days in the 1860s, and the fastest ships of the 1870s crossed in about 7 or 8 days. The Suez Canal, opened in 1869, was of little use to sailing ships, because of the Red Sea's winds, so it mostly served steamships. In 1854 the steamer Pleiad went far up the Niger and Benue rivers in West Africa, and none of its crew died, because they took quinine against malaria.",
          "**The telegraph:** in 1844 Samuel Morse sent \"What hath God wrought?\" by wire from Washington to Baltimore. From 1866, cables under the Atlantic carried messages without a lasting break, and in 1870 another undersea cable, through the Red Sea, reached Bombay. News that once moved as fast as a ship now moved in minutes.",
          "**More trade:** in 1870 wheat cost 57.6 percent more in Liverpool, England, than in Chicago; by 1913 the gap was 15.6 percent. Wheat from the middle of North America, carried by train and steamship, fed workers in Britain.",
          "**More migration:** about 55 million Europeans moved to the Americas and Australia between 1850 and 1914. Between 1846 and 1940, more than 29 million Indians and more than 19 million Chinese moved to Southeast Asia and the lands around the Indian Ocean. Steamships and railways made these journeys faster and cheaper. Why people moved is Unit 6."
        ],
        image: {
          title: "Promontory Summit, Utah, 10 May 1869",
          caption: "A photograph taken from the top of a locomotive at Promontory Summit, Utah, on 10 May 1869, the day the two halves of the first railroad across the United States met. Soldiers stand in a line along the track, with onlookers, tents, and telegraph poles behind them. The Library of Congress dates it from an old caption card.",
          url: "../assets/images/topics/5-5/promontory-summit-1869.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2004679791/"
        }
      }
    ]
  },

  map: {
    title: "Power and Reach, 1830 to 1904",
    url: "../assets/images/instructional-maps/topic-5-5.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-5.svg",
    caption: "A BeHistorical map of two places this lesson names for coal and oil, and of four lines that reached across continents and oceans: a railroad, a railway, a telegraph cable, and a steamship voyage.",
    intro: "Find Britain and Pennsylvania first: where coal, and later oil, came from. Then follow the four numbered arrows. Each one joins the two ends of a railroad, a cable, or a voyage.",
    prompt: "Using the map, choose ONE of the four numbered arrows. Explain what it carried (goods, people, or news) and how it helped reach a place that was hard to reach before."
  },

  deepReading: {
    title: "More Power, Longer Reach",
    desc: "A longer, optional chapter on the same story: how the steam engine went from a mine pump to the power of factories, how much more energy coal and then oil gave, what the second industrial revolution made, and how railroads, steamships, and the telegraph reached the interiors of continents and set off more trade and migration.",
    url: "deep-reading-topic-5-5-technology-of-industrialization.html"
  },

  first10: {
    title: "First & 10: More Power, Longer Reach",
    embedUrl: 'first-and-10-topic-5-5-technology-of-industrialization-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.5 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: One Link in the Chain",
    intro: "Use the cards to find evidence for one link in the chain: machines and fossil fuels, new methods, or the reach of railroads, steamships, and the telegraph. Ask what each source can and cannot show.",
    prompt: "Choose two cards. For each, say what kind of source it is, which link in the chain it shows, and one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Jevons on Coal, 1865",
    intro: "William Stanley Jevons was a British economist. In 1865 he published a book called The Coal Question. He worried that as Britain's mines went deeper, its coal would cost more, and that its wealth would not last once the cheap coal was gone. To make that case, he first had to show his readers how much depended on coal. This passage is the opening of his introduction.",
    attribution: "W. Stanley Jevons, The Coal Question (first published 1865), from the opening of the introduction, quoted from the second edition (London: Macmillan, 1866), as reprinted by the Library of Economics and Liberty",
    text: "Day by day it becomes more evident that the Coal we happily possess in excellent quality and abundance is the mainspring of modern material civilization. As the source of fire, it is the source at once of mechanical motion and of chemical change. Accordingly it is the chief agent in almost every improvement or discovery in the arts which the present age brings forth. It is to us indispensable for domestic purposes, and it has of late years been found to yield a series of organic substances, which puzzle us by their complexity, please us by their beautiful colours, and serve us by their various utility.<br><br>And as the source especially of steam and iron, coal is all powerful. This age has been called the Iron Age, and it is true that iron is the material of most great novelties. By its strength, endurance, and wide range of qualities, this metal is fitted to be the fulcrum and lever of great works, while steam is the motive power. But coal alone can command in sufficient abundance either the iron or the steam; and coal, therefore, commands this age—the Age of Coal.<br><br>Coal in truth stands not beside but entirely above all other commodities. It is the material energy of the country—the universal aid—the factor in everything we do. With coal almost any feat is possible or easy; without it we are thrown back into the laborious poverty of early times.<br><br><em>Words to know: evident means clear; mainspring means the main source of power; material civilization means the things people make and use; mechanical motion means movement that drives machines; chemical change means making new substances; the arts here means useful skills and industries; indispensable means necessary; domestic purposes means uses at home, such as heating and cooking; organic substances here means chemicals made from coal, such as dyes; novelties means new inventions; fulcrum and lever means the parts that let a small force move a heavy load; motive power means the power that moves things; commodities means goods that are bought and sold; laborious means full of hard work.</em>",
    questions: [
      "In the first paragraph, Jevons says coal is \"the source at once of mechanical motion and of chemical change.\" Using the lesson, give one example of each: a machine that coal moved, and a new product made from coal.",
      "In the second paragraph, Jevons says \"coal alone can command in sufficient abundance either the iron or the steam.\" Explain what he means, and use the lesson to say what steam and iron (and later steel) made possible.",
      "Jevons wrote this to warn readers that Britain's cheap coal would not last: as mines went deeper, coal would cost more. How might that purpose shape the way he describes coal? Then use the last paragraph to explain what he thinks life was like before coal."
    ]
  },

  beSurreal: {
    title: "BeSurreal: A Grain Merchant's Office, Liverpool, 1880",
    desc: "You are fifteen and work as a clerk in a grain merchant's office in Liverpool, the English port where ships from America unload their wheat. Your job is to copy out the messages and keep the books.",
    intro: "Every morning a boy runs in from the telegraph office with a slip of paper: yesterday's closing price of wheat in Chicago, sent under the ocean by cable overnight. Your employer reads it, does a quick sum, and decides whether to buy. The wheat itself was grown on farms in the middle of North America, far from any ocean.",
    detail: "Your grandfather remembers when most of the bread in England was made from English wheat, and when news from America came by sailing ship, weeks old. Now your employer knows the Chicago price within a day. The office is busy, and wheat is cheaper than your grandfather remembers.",
    prompt: "Write a letter to your grandfather explaining how a sack of wheat gets from a farm in the middle of North America to a bakery in Liverpool, and how your employer knows what to pay for it. Name each technology that helps, and say what it made possible. Use the words railroad, steamship, and telegraph."
  },

  beInTheRoom: {
    url: '',
    desc: "New York, December 1900. As a writer for a science magazine, argue for the technology you think changed the world most, and help your team rank five of them from most important to least."
  }

};
