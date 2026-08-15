'use strict';

/**
 * Topic 4.1, Technological Innovations 1450 to 1750: the deep reading.
 *
 * Why this exists. The success criteria ask for three named maritime
 * technologies with the navigation problem each one solved, a specific example
 * of knowledge borrowed from the Classical, Islamic or Asian worlds, and named
 * ship designs with what each contributed. "The caravel helped them explore" is
 * the answer the lesson has room for, and it answers none of that.
 *
 * The organizing argument, and the thing that makes this chapter worth reading
 * after Topic 2.3: the Indian Ocean already had excellent ships, excellent
 * navigation and a wind system that told you when to sail. The Atlantic had
 * none of that. What Europe assembled between about 1420 and 1500 was not a
 * better ship than a dhow or a junk; it was a package for a fundamentally
 * harder problem, weeks out of sight of land with no seasonal wind to ride
 * home on. Naming the problem before the technology is what turns a list into
 * an explanation.
 *
 * Three things carried deliberately:
 *
 *   1. The volta do mar is the single most under-taught fact in Unit 4. The
 *      Portuguese breakthrough was not a hull, it was the realization that you
 *      come home by sailing away from home into open ocean to find a different
 *      wind. Columbus's route is the same insight applied west.
 *   2. Almost none of the components were European inventions. Compass, lateen,
 *      sternpost rudder, astrolabe, the mathematics and the tables all arrive
 *      from elsewhere, which is exactly what the second success criterion asks
 *      a student to be able to say.
 *   3. Longitude was unsolved for this entire period. A student who knows that
 *      understands why latitude sailing, and therefore the shape of the routes,
 *      looked the way it did.
 */

module.exports = {
  topicKey: 't4-1',
  slug: 'topic-4-1-technological-innovations',
  sourceFile: 'deep-reading-topic-4-1-technological-innovations.html',
  lessonFile: 'lesson-4-1-technological-innovations.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.1: Sailing Away to Get Home',
  eyebrow: 'Topic 4.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Sailing Away to Get <em>Home</em>',
  deck: `The Indian Ocean had better ships than Europe and a wind that reversed on schedule. The Atlantic offered neither, and the technology in this chapter is the answer to that harder problem: how to leave the sight of land for weeks, find a place you have never been, and get back against the wind that brought you.`,
  meta: ['Four sections', 'The problem before the technology', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.1 &nbsp;·&nbsp; Sailing Away to Get Home &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 states the problem, and the other three are its answers: the hull, the instruments, and the wind. If you have read the Topic 2.3 chapter on the Indian Ocean, this one is deliberately the contrast case, so keep that comparison in mind as you go.`,
    steps: [
      `<b>01 The problem:</b> what an ocean without a monsoon actually demands.`,
      `<b>02 The ships:</b> caravel, carrack and fluyt, and what each was for.`,
      `<b>03 Finding your way:</b> compass, astrolabe, latitude sailing, and the longitude nobody could solve.`,
      `<b>04 Borrowed knowledge and the wind:</b> where the pieces came from, and the insight that assembled them.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'problem',
      num: '01',
      accent: 'gold',
      name: 'The Problem an Ocean Sets',
      navLabel: 'The problem',
      dates: 'c. 1420 to 1500 &nbsp;·&nbsp; Why the Atlantic is harder',
      thesis: `Every technology in this chapter is a solution, so start with what needed solving. The Atlantic is not a bigger Indian Ocean; it is a different kind of problem, and the difference explains why the answers look the way they do.`,
      parts: [
        {
          heading: 'What the Indian Ocean gave sailors, and the Atlantic did not',
          blocks: [
            { p: `The Topic 2.3 chapter sets out the Indian Ocean system. The monsoon reverses twice a year with great reliability, so a captain knew months in advance when he could sail east and when he could come home. Voyages ran between known ports along coasts, with landmarks, pilots and centuries of accumulated route knowledge written into pilot books. Dhows and junks were superbly suited to it, and the junk in particular, with watertight bulkheads and a stern-post rudder, was arguably the most capable vessel afloat.` },
            { p: `Now take that captain to the Atlantic. There is no seasonal reversal to carry him home. Beyond the coastal shelf there are no landmarks at all, and past the Canaries there was, for European sailors, no accumulated route knowledge because nobody had come back to write any. The prevailing winds off West Africa blow steadily from the north, which is to say they push a ship south and hold it there. And the distances are such that a voyage means weeks out of sight of land with whatever food and water you loaded at the start.` },
            { p: `So four problems, and it is worth writing them as questions because each section below answers one: <b>What kind of ship</b> can work against the wind and still carry enough cargo and provisions to matter? <b>How do you know where you are</b> with no coast in view? <b>How do you get home</b> against a wind that blows the wrong way? And <b>how do you know any of this in advance</b>, when nobody has done it before?` }
          ]
        },
        {
          heading: 'Why this is not a story about European cleverness',
          blocks: [
            { p: `A caution worth taking early, because it shapes how the whole unit reads. The reason Europeans solved the Atlantic first is not that they were better sailors or better engineers; on the evidence of Topic 2.3 they were neither. It is that they were the ones with the problem.` },
            { p: `China had the ships, the navigation and the capital to sail anywhere, and the Topic 2.3 chapter explains why it stopped: the state that funded the voyages got nothing from them that it wanted, and had a land frontier that mattered more. Indian Ocean merchants had a rich, functioning trade system already reaching from Africa to China; sailing west into empty ocean solved no problem they had. Europe was the periphery of that system, buying Asian goods at the end of a chain of intermediaries who each took a margin, and its rulers had a specific and expensive grievance about it.` },
            { p: `The honest version of this topic, and the one that will serve you in every later unit, is that motivation and geography selected who attacked the Atlantic, and borrowed technology plus one genuine insight about the wind let them succeed. Keep that shape and the whole unit stops sounding like a story about who deserved to win.` }
          ]
        }
      ],
      useThis: {
        tool: `Problem-first analysis. <em>The mechanism is that a technology is only explicable against the constraint it answers, so naming the Atlantic's four demands, sailing against the wind, position without landmarks, a return route, and knowledge in advance, turns a list of caravels and astrolabes into an argument about why each one was adopted.</em>`,
        limit: `Nothing here made the Atlantic safe. Voyages lost ships and men routinely, and the technology raised the odds rather than removing the risk.`,
        comparison: `Against the <em>Indian Ocean</em> in Topic 2.3: a predictable wind system, coastal routes and centuries of pilot knowledge produced ships optimized for cargo on known runs, while an ocean with none of those produced ships optimized for working to windward and finding a position from the sky.`
      },
      terms: [
        ['Prevailing wind', 'The dominant wind direction in a region; off West Africa it blows from the north, which is what made the outbound voyage easy and the return hard.'],
        ['Out of sight of land', 'The condition that makes coastal navigation impossible and forces position-finding from the sun and stars.'],
        ['Windward', 'The direction the wind comes from; sailing toward it is the hardest thing a sailing ship does and the central design problem of this chapter.'],
        ['Periphery', 'Europe&rsquo;s position at the end of the Asian trade routes, buying through intermediaries, which is the motive behind the whole enterprise.'],
        ['Route knowledge', 'The accumulated record of courses, winds, hazards and landfalls that makes a voyage repeatable, and which did not exist for the open Atlantic.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'ships',
      num: '02',
      accent: 'rust',
      name: 'The Ships',
      navLabel: 'The ships',
      dates: 'c. 1440 to 1650 &nbsp;·&nbsp; Caravel, carrack, fluyt',
      thesis: `Three ships, three jobs. Confusing them is the most common error in this topic, and keeping them straight is the fastest way to sound like you know what you are talking about.`,
      parts: [
        {
          heading: 'The caravel: the explorer',
          blocks: [
            { p: `The <span class="kt">caravel</span> was a small Portuguese vessel, on the order of fifty to seventy tons, with a shallow draft and, in its original form, lateen sails, the triangular rig borrowed from the Indian Ocean and Mediterranean world and described in the Topic 2.3 chapter.` },
            { p: `Each of those features answers a specific question. The lateen rig lets a ship sail much closer to the wind than a square sail does, which is what makes it possible to work back up a coast against a prevailing northerly. The shallow draft lets it enter river mouths and coastal shallows, which is where the exploring actually happened. And the small size means a small crew, which means less food and water for a given range and less capital risked on a voyage that might not come back. A caravel is a reconnaissance vehicle: fast, handy, cheap enough to lose, and not much use for carrying cargo.` },
            { p: `Later Portuguese ships combined the rigs, square sails forward for driving power on a long downwind passage and a lateen aft for handling, which is the practical answer to a voyage that has both problems in it.` }
          ]
        },
        {
          heading: 'The carrack: the workhorse',
          blocks: [
            { p: `A <span class="kt">carrack</span>, the nau of Portuguese and Spanish usage, is a much larger vessel, high-sided, square-rigged on the main masts, with a deep hold. It carried the cargo, the provisions for a long crossing, and the guns.` },
            { p: `That last point is the one to keep. A high-sided ship carrying heavy cannon is a floating fortress in a sea whose merchant vessels, however well built, were not designed to fight artillery duels. When the Portuguese entered the Indian Ocean, their military advantage was not better seamanship, it was that they arrived in ships built to carry guns in a trading world that had never needed them. The Topic 4.4 chapter follows what they did with that.` },
            { p: `Columbus's fleet in <span class="num">1492</span> illustrates the division of labor neatly: the Santa Maria was a nao, a slower, roomier carrack-type ship, and the Nina and Pinta were caravels. One vessel to carry, two to look.` }
          ]
        },
        {
          heading: 'The fluyt: the profit machine',
          blocks: [
            { p: `The Dutch <span class="kt">fluyt</span>, developed in the <span class="num">1590</span>s, belongs in this chapter for a reason students rarely see: it is the ship that shows the technology becoming an economic instrument rather than an exploratory one.` },
            { p: `It was designed for one purpose, moving bulk cargo cheaply, and every feature follows. A long, box-like hull maximized capacity. Simple, standardized rigging let it be sailed by a much smaller crew than a comparable ship, which is the single largest cost in shipping. It carried little or no armament, on the calculation that speed and cheapness beat guns on routes patrolled by somebody else's navy. It was built in yards using standardized components and, by the standards of the day, mass-produced.` },
            { p: `The result was a freight rate the competition could not match, and it is a large part of why the Dutch dominated European carrying trade in the seventeenth century. When the Topic 4.4 and 4.5 chapters describe Dutch commercial power, the fluyt is the physical object underneath the argument: not a better warship, a cheaper truck.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the caravel crossed the Atlantic and opened the world, full stop. The caravel was an exploring vessel, superb for probing the African coast and working home against the wind, and too small to be the backbone of transoceanic commerce. The trade that followed ran in carracks, galleons and later fluyts. Naming the right ship for the right job, explorer, armed carrier, cheap freighter, is exactly the specificity the success criteria ask for, and it takes one extra clause.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The lateen rig on a small hull. <em>The mechanism is that a triangular sail can be trimmed to sail much closer to the wind than a square sail, and a shallow-draft ship of fifty to seventy tons needs a small crew and little provision, so a caravel could probe an unknown coast and then beat back up it against a prevailing northerly, which is the specific thing no cargo ship of the period could do.</em>`,
        limit: `It was tiny. The caravel's virtues are the reverse of cargo capacity, so the moment exploration became commerce the fleet changed to carracks and galleons.`,
        comparison: `Against the <em>junk</em> in Topic 2.3: the Chinese ship was larger, better compartmented and in most respects more advanced, and it was built for a monsoon system where working to windward was rarely the binding problem. Different sea, different optimum, and neither is the better ship in the abstract.`
      },
      terms: [
        ['Caravel', 'The small, shallow-draft, lateen-rigged Portuguese exploring vessel, able to work to windward along an unknown coast.'],
        ['Carrack', 'The large, high-sided, square-rigged carrier that hauled cargo, provisions and cannon across oceans.'],
        ['Fluyt', 'The Dutch bulk freighter of the 1590s, cheap to build, sailed by a small crew and usually unarmed, which cut freight rates sharply.'],
        ['Draft', 'How deep a hull sits in the water, and therefore what shallows and river mouths a ship can enter.'],
        ['Broadside', 'Guns mounted along a ship&rsquo;s side, which turned a high-sided sailing carrier into a warship in seas whose traders carried none.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'navigation',
      num: '03',
      accent: 'iron',
      name: 'Finding Your Way',
      navLabel: 'Finding your way',
      dates: 'c. 1450 to 1760 &nbsp;·&nbsp; Compass, astrolabe, latitude, longitude',
      thesis: `Half of navigation was solved and half was not, and knowing which half is which explains the shape of every route in this unit.`,
      parts: [
        {
          heading: 'Direction, and height above the horizon',
          blocks: [
            { p: `The <span class="kt">magnetic compass</span>, Chinese in origin and in Mediterranean use by the late twelfth century as the Topic 2.5 chapter describes, gives a heading in cloud, at night, and out of sight of everything. It is the precondition for the rest, because a position estimate is worthless if you cannot steer a known course.` },
            { p: `Latitude, how far north or south you are, is found by measuring the angle between the horizon and a fixed reference: the Pole Star in the northern hemisphere, or the sun at noon. The instruments are a family. The <span class="kt">mariner's astrolabe</span>, a simplified and heavier version of the Islamic astronomical instrument, is hung vertical and sighted along an alidade. The quadrant is a quarter-circle with a plumb line. The cross-staff and the later back-staff let a navigator take the sun's altitude with better accuracy from a moving deck.` },
            { p: `The measurement alone is not enough. To turn the sun's noon altitude into a latitude you need to know the sun's declination for that date, which changes through the year, and that means <span class="kt">tables</span>. Iberian navigators had them, most famously in the almanac produced by the astronomer Abraham Zacuto in the <span class="num">1490</span>s, and printing meant a table could be reproduced without a copyist introducing an error that would put a ship in the wrong ocean. That is the Topic 2.5 chain arriving exactly where it matters.` }
          ]
        },
        {
          heading: 'The half that was not solved',
          blocks: [
            { p: `<span class="kt">Longitude</span>, how far east or west you are, has no equivalent trick, because the Earth turns. To know your longitude you must know the time at a reference place and compare it with local noon, and no clock of the period could keep time on a rolling, damp, temperature-swinging ship. The problem was not solved until the marine chronometer of the <span class="num">1760</span>s, which is a century after this unit ends.` },
            { p: `So for the whole of Unit 4, a navigator knew his latitude well and his longitude badly, estimating east-west position by <span class="kt">dead reckoning</span>: course steered, speed estimated, time elapsed, corrected by guesswork about currents and leeway. Errors accumulated over weeks.` },
            { p: `That single limitation shapes the routes. The standard practice, called running down the latitude, was to sail north or south until you reached the latitude of your destination, then turn and sail along it until you hit land. It is slower than a direct course and vastly more reliable, and it is why so many voyages in this period look like right angles on a map. It also explains why islands were so valuable and so often missed, and why a ship could be certain of its distance from the equator and wildly wrong about its distance from home.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the charts show what sailors trusted',
              html: `<span class="kt">Portolan charts</span>, the Mediterranean sailing charts that predate this period, are covered in radiating rhumb lines, compass roses and coastal detail, and they carry almost nothing about the interior of any landmass and no latitude grid worth the name. That is a picture of what navigation actually was: bearings between known coastal points. Compare a chart from the sixteenth century, with a latitude scale, and you can see the change arrive. When a source tells you what a technology did, a working document that people staked their lives on tells you what they actually relied on.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Latitude sailing. <em>The mechanism is that latitude could be measured accurately from the sun or Pole Star with an astrolabe or quadrant plus printed declination tables, while longitude could not be measured at all, so navigators sailed to the known latitude of a destination and then ran east or west along it until they made landfall.</em>`,
        limit: `Dead reckoning for east-west position accumulated error over weeks, which is why voyages ran long, provisions ran out, and landfalls surprised the people making them.`,
        comparison: `Against the <em>Indian Ocean</em>: Arab navigators used the kamal for the same latitude measurement and had far richer pilot books, because their routes were known. The instruments are cousins; the difference is that one tradition was navigating a mapped system and the other was navigating a blank.`
      },
      terms: [
        ['Mariner\'s astrolabe', 'A simplified, heavy version of the Islamic instrument, hung vertically to measure the altitude of the sun or a star from a moving deck.'],
        ['Declination tables', 'Printed tables of the sun&rsquo;s position through the year, without which a noon sighting cannot be converted into a latitude.'],
        ['Dead reckoning', 'Estimating position from course, speed and elapsed time, the only method available for longitude in this period and cumulatively inaccurate.'],
        ['Running down the latitude', 'Sailing to a destination&rsquo;s latitude and then along it until landfall; slower than a direct course and far more reliable.'],
        ['Portolan chart', 'A coastal sailing chart covered in rhumb lines between compass roses, recording bearings between known points rather than a coordinate grid.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'borrowed',
      num: '04',
      accent: 'oxide',
      name: 'Borrowed Knowledge, and the Wind',
      navLabel: 'Borrowed knowledge',
      dates: 'c. 1400 to 1500 &nbsp;·&nbsp; What was assembled, and the one insight',
      thesis: `Almost nothing in the last two sections was invented in Europe. What was European was the assembly, and one genuine discovery about the Atlantic that no borrowed instrument could have supplied.`,
      parts: [
        {
          heading: 'The inventory of what was borrowed',
          blocks: [
            { p: `Take the package apart and its origins are the whole second success criterion. The <b>magnetic compass</b> is Chinese. The <b>lateen sail</b> comes from the Indian Ocean and Mediterranean world. The <b>stern-post rudder</b> appears in China well before Europe. The <b>astrolabe</b> is a Greek instrument developed to a high art by Islamic astronomers, and the trigonometry and astronomical tables behind its use are largely Islamic and Indian work transmitted through Arabic. <b>Paper and printing</b>, which made the tables and charts reproducible, arrive along the chain traced in the Topic 2.5 chapter. <b>Gunpowder</b>, which armed the carracks, is Chinese.` },
            { p: `Classical learning came back through the same routes. Ptolemy's <em>Geography</em>, with its system of latitude and longitude coordinates for mapping, reached Italy from the Byzantine world early in the fifteenth century and was printed later in the century. It is worth adding that it also transmitted an error: Ptolemy's estimate of the Earth's circumference was too small, and a chain of underestimates of that kind is part of why Columbus believed Asia lay a manageable distance west.` },
            { p: `State this plainly in an essay and it does real analytical work. European oceanic expansion was not a technological leap out of nowhere; it was the far end of the Afro-Eurasian exchange network described in Unit 2, cashing in. The one thing Europe supplied that its suppliers did not was a reason to point the assembled package at the open Atlantic.` }
          ]
        },
        {
          heading: 'The volta do mar, which is the actual breakthrough',
          blocks: [
            { p: `Here is the piece that is missing from most accounts and is the best single thing in this chapter. Portuguese ships going down the West African coast had the wind and current behind them, and that is precisely the problem: the same wind is in your face all the way home, and a lateen-rigged caravel beating up a thousand miles of coast against it is a voyage measured in months, if it succeeds.` },
            { p: `The solution, worked out over decades of voyages in the fifteenth century, is counterintuitive enough that it deserves the emphasis: <em>to get home, sail away from home.</em> Instead of hugging the coast northward, a returning ship stood out into the open Atlantic on a northwesterly course, sailed for days out of sight of land into what looked like nowhere, and picked up the belt of westerly winds in the higher latitudes that carried it back to Iberia. The Portuguese called the maneuver the <span class="kt">volta do mar</span>, the turn of the sea.` },
            { p: `Notice what that requires. Confidence that a wind you cannot see exists where you are going. Latitude measurement good enough to know when you have gone far enough north. A ship that can stay at sea for weeks. And the nerve to sail away from the only land you know. It is a piece of knowledge about the ocean itself rather than about ships, and it is why the Portuguese, who had spent decades learning the Atlantic wind system in small steps, were the ones who could use it.` },
            { p: `Columbus's <span class="num">1492</span> route is the same insight turned west. He sailed south to the Canaries first to pick up the northeast trade winds for the crossing, and returned on a more northerly track to catch the westerlies. He was not gambling on a favorable wind; he was using a system the Portuguese had already mapped. When you are asked why oceanic voyaging became possible when it did, the wind system is a better answer than any instrument, and it is the one almost nobody gives.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the pattern of the voyages is the evidence',
              html: `You do not have to take a chronicler's word for how the Atlantic wind system was learned. Plot the Portuguese voyages of the fifteenth century in order and the pattern is visible: each expedition pushes a little further south, and the returns swing progressively further out into open water. That is a picture of accumulating knowledge, gathered expedition by expedition and treated as state information. Portugal guarded charts and route knowledge as strategic assets, which is itself evidence of what they were worth: not curiosities, but the difference between a voyage that returns and one that does not.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The volta do mar. <em>The mechanism is that the northeast trades push a ship south and hold it there, so a returning vessel stands far out into the open Atlantic on a northwesterly course to reach the belt of westerlies at higher latitudes and rides those home. It converts an unsailable return into a routine one, and it is knowledge of the ocean rather than a device.</em>`,
        limit: `It took decades of incremental voyages to learn, and it worked only with latitude measurement good enough to know when to turn and ships able to stay at sea for weeks. No single innovation here is sufficient alone.`,
        comparison: `Against the <em>monsoon</em> in Topic 2.3: both are wind systems that made long voyages routine, and the difference is that the monsoon announces itself twice a year to anyone on the coast, while the Atlantic pattern had to be discovered by sailing into open ocean on the guess that something useful was out there.`
      },
      terms: [
        ['Volta do mar', 'The Portuguese return maneuver: standing far out into the Atlantic on a northwesterly course to reach the westerlies that carry a ship home.'],
        ['Trade winds', 'The steady easterly winds of the lower latitudes, which carry a ship west across the Atlantic.'],
        ['Westerlies', 'The prevailing winds of the higher latitudes, blowing west to east, which carry a ship back to Europe.'],
        ['Ptolemy\'s Geography', 'The classical work on mapping by coordinates, recovered in fifteenth-century Italy, which supplied both a method and an underestimate of the Earth&rsquo;s size.'],
        ['Assembly', 'The combination of borrowed components into a working system, which is what European navigators contributed rather than the components themselves.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full comparison: the claim, the specific evidence, and the reason. The first one answers the question this whole unit is built on, and it does it without saying anyone was cleverer than anyone else.`,
    pairs: [
      {
        category: 'Technology and geography',
        title: 'The Atlantic package answers a harder problem, not a better engineer',
        body: `Indian Ocean sailing had a monsoon that reversed on schedule, coastal routes with landmarks, and pilot books recording courses and hazards, so its ships were optimized for cargo on known runs. The Atlantic offered no seasonal reversal, no landmarks past the shelf, and no route knowledge, so European voyaging needed a rig that could work to windward, instruments to fix latitude from the sky, and the volta do mar to find a wind home. The difference exists because of the oceans, not the sailors: China had more capable ships and stopped sailing because the voyages returned prestige rather than anything the state wanted, while Europe sat at the far end of the Asian trade paying every intermediary's margin and had a reason to keep trying.`
      },
      {
        category: 'Diffusion',
        title: 'Nearly every component came from somewhere else',
        body: `The compass and the stern-post rudder are Chinese; the lateen sail is Indian Ocean and Mediterranean; the astrolabe is Greek in origin and Islamic in development, and the trigonometry and tables behind it came through Arabic; paper and printing arrived along the chain traced in Topic 2.5; gunpowder armed the ships. Ptolemy's coordinate mapping came back through Byzantium. What Europe contributed was the assembly and a motive. That is the second success criterion answered in one sentence, and it also sets up the honest version of this unit: oceanic expansion was the periphery of the Afro-Eurasian network cashing in the network's own accumulated knowledge.`
      },
      {
        category: 'Constraint',
        title: 'Unsolved longitude explains the shape of the routes',
        body: `Latitude could be measured accurately with an astrolabe or quadrant plus printed declination tables; longitude required knowing the time at a reference place, and no clock could keep time at sea until the chronometer of the 1760s, a century after this unit ends. So navigators ran down the latitude, sailing north or south to a destination's parallel and then along it until landfall, and estimated east-west position by dead reckoning that accumulated error over weeks. The difference between the two halves of the problem is why voyages look like right angles on a map, why provisions ran out on longer-than-expected crossings, and why a captain could be sure of his distance from the equator and badly wrong about his distance from home.`
      },
      {
        category: 'The best single fact',
        title: 'To get home from Africa, they sailed away from Europe',
        body: `The northeast trades carry a ship down the African coast and then blow in its face the whole way back, which is why coastal exploration south of the Sahara had gone nowhere for centuries. The Portuguese answer, learned expedition by expedition across the fifteenth century, was the volta do mar: stand far out into the open Atlantic on a northwesterly course, reach the westerlies of the higher latitudes, and ride them home. Columbus used the same system in reverse, dropping south to the Canaries for the trades and returning on a northern track. When a prompt asks why transoceanic voyaging became possible when it did, name the wind system before you name a single instrument.`
      }
    ]
  }
};
