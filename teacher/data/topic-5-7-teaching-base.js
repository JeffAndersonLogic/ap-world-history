/*
 * Topic 5.7 canonical Teaching OS source.
 * CED: Fall 2026 p. 106 (scripts/lib/ced-source/unit-5.js). Reasoning process:
 * Continuity and Change. Suggested skill: 5.B Making Connections (explain how a
 * historical development or process relates to another historical development
 * or process). Learning objective H: explain the development of economic
 * systems, ideologies, and institutions and how they contributed to change in
 * the period from 1750 to 1900. Key Concepts: KC-5.1.III.A (Western European
 * countries began abandoning mercantilism and adopting free trade policies,
 * partly in response to the growing acceptance of Adam Smith's theories of
 * laissez-faire capitalism and free markets), KC-5.1.III.B (the global nature
 * of trade and production contributed to the proliferation of large-scale
 * transnational businesses that relied on new practices in banking and
 * finance) and KC-5.1 (the development of industrial capitalism led to
 * increased standards of living for some, and to continued improvement in
 * manufacturing methods that increased the availability, affordability, and
 * variety of consumer goods). Illustrative examples (optional): HSBC;
 * Unilever; stock markets; limited-liability corporations. No sample activity.
 * Story: docs/TOPIC-5-7-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Freer Trade,
 * Bigger Business" is written from the same story, and this deck retells it.
 * Spine: between 1750 and 1900 the rules of the economy changed: Britain, and
 * for a time much of Western Europe, moved from mercantilism toward free
 * trade, partly persuaded by Adam Smith; new practices in banking and finance
 * let big businesses work across borders; and industrial capitalism made goods
 * cheaper and more varied, raising living standards for some. Shares, tariffs
 * and unequal gains carried on.
 * Wall version: Freer trade. Bigger business. Cheaper goods, for some.
 * Retelling slide: the three rows, before, after and carried on (phase 'retell').
 *
 * Class dates: not yet scheduled (the schedule ends with the Era 3 Exam,
 * 2026-11-23 and 2026-11-24).
 * Required modules: 02 First & 10, 05 Skill Builder, 06 Checkpoint 1,
 * 10 Checkpoint 2 (Jeff's rule of 2026-10-23: 02, 06 and 10 on every topic,
 * plus at least one chosen; 05 practises the CED's suggested skill, 5.B).
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '5.7',
    minutes: 90,
    title: 'Economic Developments and Innovations in the Industrial Age',
    subtitle: 'Between 1750 and 1900 the rules of the economy changed: Britain, and for a time much of Western Europe, moved from mercantilism toward free trade, partly persuaded by Adam Smith; new practices in banking and finance let big businesses work across borders; and industrial capitalism made goods cheaper and more varied, raising living standards for some. Shares, tariffs and unequal gains carried on.',
    essentialQuestion: 'How did trade, business and the goods people bought change between 1750 and 1900, and what stayed the same?',
    apFocus: 'Continuity and Change, with Making Connections 5.B (how one development relates to another)',
    endTarget: 'Students can explain how economic systems, ideas and institutions developed between 1750 and 1900 and contributed to change: Britain, and for a time much of Western Europe, moved from mercantilism toward free trade, partly because of Adam Smith\'s ideas and partly because of manufacturers\' interests and the Irish famine (the Corn Laws repealed in 1846), while Germany went back to tariffs from 1879 and the United States kept them high; limited liability, stock markets and banks let businesses such as HSBC and Lever Brothers grow large and cross borders; and better factory methods made goods more available, affordable and varied, raising living standards for some. They can say how one of these developments relates to another, and name what carried on.'
  },

  priorities: {
    must: [
      'Teach each Key Concept as a before, an after and what carried on: trade, business, goods (the retelling slide, 20).',
      'Teach KC-5.1.III.A with both qualifiers: Western European countries "began," and "partly in response" to Smith (slides 5 to 9).',
      'Teach KC-5.1.III.B as a chain: global trade led to big transnational businesses, which relied on new banking and finance; use HSBC and Lever, and date Unilever honestly (slides 12 to 15).',
      'Teach KC-5.1 with "for some": goods more available, affordable and varied, and living standards rising little to the 1850s and faster after about 1860, not for everyone (slides 17 and 18).',
      'Model 5.B: name two developments, choose the link (caused, made possible, answered), give a detail for each (slides 11 and 16).'
    ],
    should: [
      'Quote Smith in his own words, not a summary of "the invisible hand" (slide 6).',
      'Say that selling shares was old (the VOC, 1602); what changed was who could form a company and how little an owner could lose (slide 12).',
      'Correct three myths: "Smith said government should do nothing," "free trade won everywhere," "companies that sell shares were invented in the 1800s."'
    ],
    could: [
      'Point students who want more depth to the eBook chapter, "Freer Trade, Bigger Business."',
      'Use the Primary Source, Smith\'s Wealth of Nations, as an extension for early finishers.',
      'For a class that is ahead: the Chartists said the manufacturers\' "cheap bread" really meant cheap labor. Who was right, and how would you check? (slide 8).'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the objective, owns and bridge-only, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.5, 5.3 and 5.6. Bridge to the question.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over the Royal Exchange.', students: 'Predict what changed.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Freer Trade, Bigger Business" in class.', students: 'Build three rows as they read.', slide: 4 },
    { id: 'old-rules', label: 'The Old Rules', range: '17-19', minutes: 2, teacher: 'Mercantilism, from 4.5.', students: 'Name one way governments controlled trade.', slide: 5 },
    { id: 'smith', label: 'A New Argument', range: '19-21', minutes: 2, teacher: 'Adam Smith, 1776, in his own words.', students: 'Say Smith\'s rule in their own words.', slide: 6 },
    { id: 'corn-laws', label: 'Britain Changes the Rules', range: '21-23', minutes: 2, teacher: 'The Corn Laws, 1815 to 1860: a ban, then a tariff.', students: 'Name the turning point.', slide: 7 },
    { id: 'partly', label: 'Why "Partly"?', range: '23-25', minutes: 2, teacher: 'Rank three causes of repeal.', students: 'Rank and defend number one.', slide: 8 },
    { id: 'others', label: 'Others Follow, for a While', range: '25-27', minutes: 2, teacher: '1860, the 1860s, 1879.', students: 'Name what carried on.', slide: 9 },
    { id: 'cp1', label: 'Checkpoint 1', range: '27-35', minutes: 8, teacher: 'Module 06: the rules of trade, on their own.', students: 'Work without the coach.', slide: 10 },
    { id: 'model', label: 'How One Change Relates to Another', range: '35-37', minutes: 2, teacher: 'Model 5.B on an everyday case.', students: 'Say the link in one sentence.', slide: 11 },
    { id: 'shares', label: 'Old Idea, New Rules', range: '37-39', minutes: 2, teacher: 'Shares since 1602; limited liability, 1855 and 1856.', students: 'Say what changed and what did not.', slide: 12 },
    { id: 'stock', label: 'Stock Markets', range: '39-41', minutes: 2, teacher: 'The World\'s Exchanges, 1886.', students: 'Say why an investor wants a market.', slide: 13 },
    { id: 'hsbc', label: 'A Bank Across Borders', range: '41-43', minutes: 2, teacher: 'HSBC, 1865.', students: 'Connect trade to the bank.', slide: 14 },
    { id: 'lever', label: 'Soap Across the Ocean', range: '43-45', minutes: 2, teacher: 'Lever, 1884 to 1888; Unilever, 1929.', students: 'Read the trademark filing.', slide: 15 },
    { id: 'skill', label: 'Skill Builder', range: '45-53', minutes: 8, teacher: 'Module 05: Making Connections 5.B.', students: 'Relate two developments.', slide: 16 },
    { id: 'goods', label: 'More, Cheaper, More Kinds', range: '53-55', minutes: 2, teacher: 'Consumer goods.', students: 'Give one example of each word.', slide: 17 },
    { id: 'for-some', label: 'For Some', range: '55-57', minutes: 2, teacher: 'Who gained, and who did not.', students: 'Explain "for some."', slide: 18 },
    { id: 'myths', label: 'Myth and Evidence', range: '57-59', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 19 },
    { id: 'retell', label: 'Three Rows', range: '59-62', minutes: 3, teacher: 'Students redraw the table.', students: 'Retell the whole topic.', slide: 20 },
    { id: 'synthesis', label: 'Say It in One Sentence', range: '62-63', minutes: 1, teacher: 'The objective, answered.', students: 'Fill the sentence from memory.', slide: 21 },
    { id: 'evidence', label: 'Evidence Lab', range: 'Optional', minutes: 0, teacher: 'Optional, Module 07: two sources, one row.', students: 'Observe, then infer, then name a limit.', slide: 22 },
    { id: 'cp2', label: 'Checkpoint 2', range: '63-75', minutes: 12, teacher: 'Module 10: business, goods and the connections. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 23 },
    { id: 'close', label: 'Landing Sentence', range: '75-77', minutes: 2, teacher: 'Land the answer and hand off to 5.8.', students: 'Say the topic in one sentence.', slide: 24 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 5.7', url: '../unit-5/lesson-5-7-economic-developments-and-innovations.html' },
    { label: 'First & 10', url: '../unit-5/first-and-10-topic-5-7-economic-developments-and-innovations-capture.html' },
    { label: 'Deep Reading', url: '../unit-5/deep-reading-topic-5-7-economic-developments-and-innovations.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-5-7-slide',
    title: 'Topic 5.7 Presentation',
    file: 'present-topic-5-7.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Freer trade. Bigger business. Cheaper goods, for some.',
      subtitle: 'Continuity and Change, with Making Connections 5.B. How did trade, business and the goods people bought change between 1750 and 1900, and what stayed the same?',
      notes: {
        minutes: 2,
        land: [
          'CED p. 106. One learning objective, H (Economic Systems): explain the development of economic systems, ideologies, and institutions and how they contributed to change in the period from 1750 to 1900. The reasoning process is Continuity and Change (p. 95); the suggested skill is 5.B, explain how a historical development or process relates to another historical development or process.',
          'Key Concepts: KC-5.1.III.A (Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith\'s theories of laissez-faire capitalism and free markets); KC-5.1.III.B (the global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance); KC-5.1 (the development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods).',
          'The CED\'s illustrative examples, which it calls optional: HSBC; Unilever, "based in England and the Netherlands and operating in British West Africa and the Belgian Congo"; stock markets; limited-liability corporations. All four are used. Unilever was formed in 1929, out of Lever Brothers and the Dutch margarine makers; the deck says so (slide 15). There is no CED sample activity for 5.7.',
          'Owns: free trade replacing mercantilism (KC-5.1.III.A), transnational businesses and the banking and finance they relied on (KC-5.1.III.B), consumer goods and living standards for some (KC-5.1). Bridge only: mercantilism and the VOC (4.5); Smith\'s pin workshop (5.3); factory methods and cheap cloth (5.3) and railways and steamships (5.5); state-built industry (5.6, the hand-off in); workers, unions, reformers and Marx (5.8, the hand-off out); classes and city poverty (5.9); economic imperialism, debts, the opium trade and the treaty ports, and Unilever\'s Congo plantations (Unit 6, Topic 6.5). The gold standard is not taught: no Unit 5 Key Concept names it.',
          'The old 5.7 spent half the lesson on Latin American debt, the Ottoman Public Debt Administration and the treaty ports. That is 6.5. If a student raises it, say so and park it.',
          'Three myths, on slide 19: "Adam Smith said government should do nothing"; "free trade won everywhere"; "companies that sell shares were invented in the 1800s."'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'Trade rules moved toward free trade, businesses grew and crossed borders on new banking and finance, and goods got cheaper, raising living standards for some; shares, tariffs and unequal gains carried on.',
        avoid: 'Avoid three lists, one per Key Concept. The reasoning process is Continuity and Change: every fact on a slide is a before, an after or a "carried on," and the skill asks students to connect the rows. And avoid "industry made everyone richer": the CED says "for some."'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.5', text: 'What did mercantilism say made a kingdom strong?' },
          { label: 'Topic 5.3', text: 'What did Adam Smith\'s pin workshop show?' },
          { label: 'Topic 5.6', text: 'Who paid for the first factories in Egypt and Japan?' }
        ],
        turn: 'Factories made **more goods than ever**. Who would **own** them, who would **pay** for them, and **what rules** would they be sold under?'
      },
      notes: {
        minutes: 4,
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: selling more than it bought, bringing in gold and silver, keeping its colonies\' trade for itself (4.5); splitting the work into small jobs let ten men make far more pins (5.3); the state, with money from farmers (5.6).',
          'The bridge is 5.6\'s hand-off: "All this industry made goods, and goods had to be paid for, traded, and financed." Prompt 1 returns on slide 5 as the "before"; prompt 2 returns on slide 6, because the same book that had the pins attacked mercantilism.'
        ],
        ask: 'Where did you meet Adam Smith before?',
        listenFor: 'The pin workshop, Topic 5.3. Today the same book argues about trade between countries.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle', eyebrow: 'The Question',
      title: 'How did trade, business and the goods people bought change?',
      subtitle: 'And what stayed the same?',
      notes: {
        minutes: 1,
        land: [
          'The picture is a real photochrom (a photograph colored by a printing process) of the Royal Exchange in the City of London, London\'s business district, about 1890 to 1900, sold by the Detroit Publishing Company as print 1504 (Library of Congress, Photochrom Print Collection, no known restrictions).',
          'The Royal Exchange was a meeting place for merchants; London\'s Stock Exchange stood a few streets away. Banks, insurers, merchants and the Stock Exchange all worked within a few streets of each other in the City.',
          'A photochrom is colored by hand-made printing plates, so the colors are a printer\'s choice, not a color photograph.'
        ],
        ask: 'Predict: what work went on in these buildings, and what had it to do with factories?',
        listenFor: 'Banking, trading, buying and selling shares, insurance. Check the guesses on slides 12 to 14.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read, and build three rows.',
      subtitle: 'Trade, business and goods: for each, what it was like around 1750, what it was like by 1900, and one thing that carried on.',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-5/first-and-10-topic-5-7-economic-developments-and-innovations-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        land: [
          'Students read "Freer Trade, Bigger Business" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who write a before and an after, not a list: "Around 1750 Britain taxed foreign grain; in 1846 it ended the tax," not "Corn Laws, 1846."',
          'Question 01 asks for one change in Britain\'s trade rules and one country where tariffs stayed high or came back; question 02 connects a banking or finance practice to a business that crossed borders; question 03 asks how goods changed and why "for some." The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which row surprised you most?',
        listenFor: 'That a famine helped end the Corn Laws; that Germany went back to tariffs; that companies sold shares in 1602; that living standards rose so little before the 1850s.'
      }
    },
    {
      phase: 'old-rules', kind: 'story-steps', eyebrow: 'Trade · The Before',
      kc: 'KC-5.1.III.A', title: 'The old rules: trade was a contest.',
      footer: 'Mercantilism (Topic 4.5): sell more than you buy, and keep your colonies\' trade for yourself.',
      template: {
        steps: [
          { label: 'Tariffs', text: 'Governments **taxed goods** coming in from abroad.' },
          { label: 'Bans', text: 'Some foreign goods were **banned** outright.' },
          { label: 'Monopolies', text: 'A few companies had the **sole right** to trade in a region.' },
          { label: 'The aim', key: true, text: 'Sell more than you buy. **Another country\'s gain is your loss.**' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.III.A names what Europe began abandoning: mercantilism. This slide is the "before" of the trade row.',
          'From 4.5: most European rulers believed a kingdom grew strong by selling more to other countries than it bought from them, and by keeping its colonies\' trade for itself. Smith describes the tools in Book IV, chapter 2 of The Wealth of Nations: restraining imports "either by high duties, or by absolute prohibitions."',
          'The monopoly example: Britain\'s East India Company held the sole right to carry on British trade east of the Cape of Good Hope; Parliament ended its monopoly of trade with India in 1813 and with China in 1833.'
        ],
        ask: 'If trade is a contest, what should a government do about cheap foreign goods?',
        listenFor: 'Tax them or ban them, to protect its own makers and keep money at home.',
        ap: 'KC-5.1.III.A (mercantilism, the before).'
      }
    },
    {
      phase: 'smith', kind: 'story-scene', eyebrow: 'Trade · A New Argument',
      kc: 'KC-5.1.III.A', title: 'Adam Smith: buy it where it is cheaper.',
      footer: 'Later writers called ideas like his laissez-faire, French for roughly "let them do it." Smith did not use the phrase.',
      template: {
        steps: [
          { label: 'A family', text: '**The Wealth of Nations**, 1776: "The tailor does not attempt to make his own shoes, but **buys them of the shoemaker**."' },
          { label: 'A country', key: true, text: '"If a foreign country can supply us with a commodity cheaper than we ourselves can make it, **better buy it of them** ..."' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Smith\'s own words, Book IV, chapter 2: "It is the maxim of every prudent master of a family, never to attempt to make at home what it will cost him more to make than to buy. The tailor does not attempt to make his own shoes, but buys them of the shoemaker ... What is prudence in the conduct of every private family, can scarce be folly in that of a great kingdom. If a foreign country can supply us with a commodity cheaper than we ourselves can make it, better buy it of them with some part of the produce of our own industry, employed in a way in which we have some advantage." (Project Gutenberg text.)',
          'Book IV, chapter 8: "Consumption is the sole end and purpose of all production ... But in the mercantile system, the interest of the consumer is almost constantly sacrificed to that of the producer." Tariffs, he argued, make the buyer pay more so that a few producers profit.',
          'The words "laissez-faire" do not appear in The Wealth of Nations; the French phrase came from French writers on the economy and was later attached to ideas like Smith\'s. The CED says "Adam Smith\'s theories of laissez-faire capitalism and free markets"; the slide keeps the CED\'s word and says where it came from.',
          'The picture is a real engraving: Adam Smith, stipple engraving by MacKenzie after a portrait medallion by James Tassie, made for an 1805 edition of The Wealth of Nations (Library of Congress, no known restrictions). Smith had died in 1790, so it is a portrait made after his death, from a medallion modeled in his lifetime.'
        ],
        ask: 'Put Smith\'s rule in your own words. What would he say about the Corn Laws on the next slide?',
        listenFor: 'Buy from whoever makes it cheapest, even another country. He would say a tax on foreign grain makes everyone pay more for bread so that landowners profit.',
        ap: 'KC-5.1.III.A (Adam Smith\'s theories).'
      }
    },
    {
      phase: 'corn-laws', kind: 'timeline', eyebrow: 'Trade · The Change',
      kc: 'KC-5.1.III.A', title: 'Britain changes its rules.',
      footer: 'Seventy years passed between Smith\'s book and Britain\'s repeal of the Corn Laws.',
      template: {
        range: [1810, 1865],
        tick: 10,
        events: [
          { year: 1815, label: '1815', text: 'Corn Law: foreign wheat banned unless prices are high' },
          { year: 1838, label: '1838', text: 'Manchester campaign begins: the Anti-Corn Law League' },
          { year: 1845, label: '1845', text: 'Famine begins in Ireland' },
          { year: 1846, label: '1846', text: 'Parliament repeals the Corn Laws' },
          { year: 1860, label: '1860', text: 'Britain ends its tariffs on factory goods' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The Corn Laws ("corn" meant grain) kept grain prices, and landowners\' rents, high. The Importation Act of 1815 did not tax grain: it banned foreign wheat until the British price reached 80 shillings a quarter. The Importation of Corn Act of 1828 replaced the ban with a sliding tariff, highest when British prices were low, which Peel lowered in 1842 (Wikipedia, "Corn Laws": the laws at first worked by "forbidding importation below a set price"). Landowners filled Parliament.',
          'In September 1838 factory owners and merchants in Manchester formed an Anti-Corn Law Association, which led in 1839 to the national Anti-Corn Law League, led by Richard Cobden and John Bright (EBSCO; Encyclopedia.com). Its arguments: cheap bread for workers, and countries that sold grain to Britain would buy British cloth.',
          'In 1845 potato blight brought famine to Ireland. The historian Charles Read: the famine "contributed to Peel\'s decision that the Corn Laws should be repealed." Peel\'s bill cut the duty step by step until 1 February 1849, then left a duty of one shilling a quarter (the bill as printed in The Spectator, 14 March 1846). It passed the Commons in May 1846; most of Peel\'s own party voted against him, and the party split.',
          'By 1860: under the treaty with France, Britain swept away "the duties on all manufactured goods" (Encyclopaedia Britannica, 1911), keeping a few taxes, such as those on tea, sugar and wine, mainly to raise money (The Spectator, February 1860).'
        ],
        ask: 'Which date is the turning point, and why that one?',
        listenFor: '1846: the repeal. Some may argue 1860, when the change reached factory goods. Both are defensible with evidence.',
        ap: 'KC-5.1.III.A (adopting free trade policies).'
      }
    },
    {
      phase: 'partly', kind: 'cause-rank', eyebrow: 'Trade · Why "Partly"?',
      kc: 'KC-5.1.III.A', title: 'Why did Britain choose free trade?',
      template: {
        causes: [
          { label: 'Smith\'s ideas', note: 'Buy where it is cheapest; tariffs make buyers pay more' },
          { label: 'Manufacturers\' interests', note: 'Cheap food for workers; markets abroad for British cloth' },
          { label: 'Famine in Ireland', note: 'In 1845 the potato crop failed, and Peel turned against the Corn Laws' }
        ],
        prompt: 'Rank them 1 to 3. **Defend your number one** in one sentence.'
      },
      notes: {
        minutes: 2,
        land: [
          'The CED\'s word is "partly": Western European countries adopted free trade "partly in response to the growing acceptance of Adam Smith\'s theories." So Smith is one cause, not the cause.',
          'Interests: the League\'s money and leaders came from manufacturers and merchants. Many Chartists distrusted them: they argued that high prices meant high wages, so the manufacturers\' "cheap bread" really meant cheap labor, lower wages (Mark Hovell, The Chartist Movement, 1918: "if the manufacturers cried \'cheap bread\' they meant \'cheap labour\'"). That is a good challenge for a class that is ahead.',
          'Crisis: the historian Charles Read writes that "failed harvests leading to the Irish potato famine contributed to Peel\'s decision that the Corn Laws should be repealed" (History and Policy). In 1845 the blight destroyed much of the crop; the near-total failure came in 1846.',
          'There is no single right answer. Grade the reason, not the rank.'
        ],
        ask: 'Who put Smith first? Who put him last? Defend both.',
        listenFor: 'A ranking with a reason: "the famine forced the timing"; "Smith\'s ideas gave the League its argument"; "manufacturers paid for the campaign."',
        ap: 'KC-5.1.III.A ("partly in response"); Causation in service of Continuity and Change.'
      }
    },
    {
      phase: 'others', kind: 'timeline-lanes', eyebrow: 'Trade · The Limits',
      kc: 'KC-5.1.III.A', title: 'Others followed, for a while.',
      footer: 'Western Europe "began abandoning mercantilism," as the College Board says: not every country, and not for good.',
      template: {
        range: [1840, 1900],
        tick: 10,
        lanes: [
          { name: 'Britain', events: [{ year: 1846, label: '1846', text: 'Corn Laws repealed' }, { year: 1860, label: '1860', text: 'Treaty with France' }] },
          { name: 'German states', events: [{ year: 1865, label: '1860s', text: 'Low tariffs' }, { year: 1879, label: '1879', text: 'Tariffs come back' }] },
          { name: 'United States', events: [{ year: 1861, label: '1861', text: 'High tariffs, kept to 1900' }] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The change spread: the Cobden-Chevalier Treaty of 23 January 1860 cut tariffs between Britain and France, and was the first of a series of "most favoured nation" treaties Britain negotiated in the 1860s, which were widely copied across Europe (Encyclopedia.com; Wikipedia, citing Nye, Irwin, and O\'Rourke and Williamson).',
          'Germany was not one country until 1871: in the 1860s its states, joined in a customs union (the Zollverein) led by Prussia, kept tariffs low (grain duties were abolished in 1853). And partly reversed: from 1879 Germany put duties on grain, livestock and iron after cheap American grain drove prices down (Wikipedia, "German tariff of 1879"; Britannica as quoted). The United States\' Morrill Tariff of 1861 "began a long period of protectionism that lasted until 1913"; the McKinley Tariff of 1890 raised average duties to about 49 percent.',
          'Britain stayed with free trade through 1900. This slide is the "carried on" of the trade row: tariffs did not disappear.'
        ],
        ask: 'What is the continuity on this slide?',
        listenFor: 'Tariffs never disappeared: the United States kept them high, and Germany brought them back. That is a reversal in Germany and a continuity in America.',
        ap: 'KC-5.1.III.A ("began"); Continuity and Change.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1',
      title: 'How did the rules of trade change, and what did not?',
      subtitle: 'On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-7-economic-developments-and-innovations.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 06 is required. Checkpoint 1 assesses Target 1 (KC-5.1.III.A): the old rules, one of Smith\'s ideas, one cause of Britain\'s change with a detail, and one country where tariffs stayed high or came back.'
        ],
        ask: 'What is your "before," and where did tariffs stay or come back?',
        listenFor: 'Mercantilism\'s tariffs, bans or monopolies; America kept high tariffs, or Germany brought them back from 1879.'
      }
    },
    {
      phase: 'model', kind: 'sentence-frame', eyebrow: 'Making Connections 5.B · Model',
      title: 'How does one change relate to another?',
      footer: 'Three kinds of link: one change can cause another, make it possible, or answer it.',
      template: {
        frame: '{{Development A}} relates to {{development B}} because A {{caused / made possible / answered}} B: {{how the link works, with a detail for each}}.',
        exampleLabel: 'An everyday case',
        example: '**The new bus route to the mall** relates to **the mall\'s new food court** because it **made the food court possible**: **about twice as many weekend shoppers** gave the mall **enough customers to open it**.'
      },
      notes: {
        minutes: 2,
        land: [
          'Skill 5.B: "Explain how a historical development or process relates to another historical development or process." The everyday case is deliberately unlike the history, so students learn the move, not the answer.',
          'Name the three kinds of link out loud: caused (one led directly to the other), made possible (one removed an obstacle), answered (one was a response to the other). The Key Concepts use the same verbs: global trade "contributed to" transnational businesses, which "relied on" banking and finance.',
          'Model it, then ask students to say the frame back with the bus case before they try it on the history (the Skill Builder, slide 16).'
        ],
        ask: 'Which kind of link is the bus route: caused, made possible, or answered?',
        listenFor: 'Made possible: the route did not build the food court; it brought the customers that made it worth building.',
        ap: 'Making Connections 5.B.'
      }
    },
    {
      phase: 'shares', kind: 'continuity-change', eyebrow: 'Business · Old Idea, New Rules',
      kc: 'KC-5.1.III.B', title: 'Selling shares was old. Who could do it changed.',
      footer: 'With less to lose, many more people with modest savings could invest.',
      template: {
        date: '1855',
        before: { tag: 'Before', items: ['1720 to 1825: a company with shares needed permission', 'Most businesses: a family or a few partners', 'A partner could lose his house'] },
        after: { tag: 'After', items: ['1855: owners lose only what they put in', '1856: almost any seven people can register', 'France follows, 1863 and 1867'] },
        continued: { tag: 'Continued', items: ['Companies sold shares, as the VOC had in 1602', 'People bought and sold shares in markets'] }
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1.III.B: transnational businesses "relied on new practices in banking and finance." Limited-liability corporations are one of the CED\'s examples.',
          'Continuity: the VOC sold shares in 1602 and they were traded in Amsterdam (4.5). Change: from 1720 the Bubble Act forbade forming joint-stock companies without a royal charter or act of Parliament; it was repealed in 1825 (Wikipedia; the Insolvency Service\'s Technical Manual, chapter 75). The Limited Liability Act of 1855 "first expressly allowed limited liability for corporations that could be established by the general public"; the Joint Stock Companies Act of 1856 let "any group of seven people" register a limited company (banks and insurers were excluded, so "almost any"). France\'s laws of 1863 and 1867 removed the need for government permission (Freedeman).',
          'Do not say the Companies Act of 1862 created limited liability: it consolidated the law that 1855 and 1856 had made. The old 5.7 said 1862.',
          'Mechanism, in one line: limited liability lowered the risk of investing, so more people invested, so companies could raise more money. That is a "made possible" link (slide 11).'
        ],
        ask: 'What changed, and what did not?',
        listenFor: 'Who could form a company and how much an owner could lose changed; selling shares did not.',
        ap: 'KC-5.1.III.B (limited-liability corporations).'
      }
    },
    {
      phase: 'stock', kind: 'story-scene', eyebrow: 'Business · Stock Markets',
      kc: 'KC-5.1.III.B', title: 'A market for shares, in city after city.',
      footer: 'A stock market lets an investor get money back without waiting for the company to close.',
      template: {
        steps: [
          { label: 'The idea', text: 'At a **stock exchange**, people buy and sell shares in companies.' },
          { label: '1700s', text: 'London has had a **stock exchange** since the 1700s.' },
          { label: '1840s', text: 'In a **railway boom**, crowds of British investors buy railway shares.' },
          { label: '1886', key: true, text: 'A New York print shows exchanges and trading halls in **eight cities**.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Stock markets are one of the CED\'s examples for KC-5.1.III.B.',
          'London: organized share trading at Jonathan\'s coffee house from 1698, and a building of the brokers\' own from 1773 (Grub Street Project, from Wheatley and Cunningham). The railway boom ("Railway Mania") peaked in 1845 to 1846, drew in many middle-class investors, and collapsed; share prices fell until about 1850, and many lost their savings (Wikipedia; Focus Economics).',
          'The picture is a real print: "The World\'s Exchanges," published by Root and Tinker, New York, 1886 (Library of Congress, no known restrictions). The Library\'s record: "Images of stock exchanges in New York, Paris, London, Chicago, Hamburg, Frankfort, Berlin, and Brussels." The Chicago building is the Board of Trade, where grain was traded. The London panel is labeled "Bank of England · London · Stock Exchange," but it draws the Bank of England and, with the statue in front, the Royal Exchange (the building on slide 3), not the Stock Exchange itself.',
          'A printer made this to sell: it shows what New York buyers in 1886 thought worth hanging on a wall, not how much money moved through each exchange.'
        ],
        ask: 'Why would an investor be more willing to buy shares if there is a market to sell them in?',
        listenFor: 'They can get their money back by selling to someone else, so the risk feels smaller.',
        ap: 'KC-5.1.III.B (stock markets).'
      }
    },
    {
      phase: 'hsbc', kind: 'case-file', eyebrow: 'Business · A Bank Across Borders',
      kc: 'KC-5.1.III.B', title: 'A bank built for trade with China.',
      template: {
        tag: 'Bank',
        place: 'Hong Kong',
        date: '1865',
        rows: [
          { label: 'Who', text: '**Thomas Sutherland**, a Scot working for a shipping firm, with a committee of merchant firms' },
          { label: 'Why', text: 'To give local businesses **better banking** for their trade' },
          { label: 'Where', text: 'Hong Kong in March; **Shanghai** a month later; **London** that July; 16 countries and territories by 1900' },
          { label: 'Shadow', text: 'One founding firm, Dent and Company, had grown rich **trading opium** into China (Unit 6)' }
        ],
        proves: 'Global trade needed banking that crossed borders, and the bank became a transnational business itself.'
      },
      notes: {
        minutes: 2,
        land: [
          'HSBC is the CED\'s first example for KC-5.1.III.B.',
          'HSBC\'s own history timeline (hsbc.com): founded by "Thomas Sutherland, a young Scotsman" working in Hong Kong for a shipping firm, who "recognised that businesses needed better local banking facilities"; it opened "in Hong Kong on 3 March 1865, and in Shanghai a month later"; "In July 1865, the bank opened an office in London to facilitate foreign exchange services for clients in China and India"; "By the turn of the 20th century, we operated in 16 countries and territories." Sutherland worked for the P&O steamship company.',
          'The committee: Francis Chomley, a partner in Dent and Company, chaired its first meeting on 6 August 1864; Dent\'s was one of the two great opium-trading houses on the China coast (Wikipedia, "Dent & Co." and "Francis Chomley"; South China Morning Post, "Bank was built on shipping and opium trade"). The Opium Wars and the treaty ports are Unit 6; name them and move on.',
          'Read the Key Concept as a chain here: "the global nature of trade" (trade between China, India and Europe) "contributed to" a "transnational business" (HSBC), which itself offered banking services, loans and the changing of money, to other traders.'
        ],
        ask: 'Connect it: how did global trade relate to the founding of this bank?',
        listenFor: 'Merchants trading between China and the world needed a bank that could lend and change money in many ports, so global trade made the bank necessary.',
        ap: 'KC-5.1.III.B (HSBC); Making Connections 5.B.'
      }
    },
    {
      phase: 'lever', kind: 'frame-pair', eyebrow: 'Business · Soap Across the Ocean',
      kc: 'KC-5.1.III.B', title: 'A soap made in England, protected in America.',
      template: {
        panels: [
          { tag: '1886 · Warrington, England', text: 'Lever registers **Sunlight** in the United States.' },
          { tag: '1891 · Port Sunlight, England', text: 'A second filing protects an **advertising design**.' }
        ],
        rows: [
          { label: 'Then', text: '**Sunlight Soap** from 1884; a **limited company** from 1890; shares sold from 1894.' },
          { label: 'Later', text: 'In **1929** Lever Brothers and Dutch margarine makers form **Unilever**.' }
        ],
        proves: 'It crossed borders, and grew into the College Board\'s Unilever.'
      },
      notes: {
        minutes: 2,
        land: [
          'Unilever is the CED\'s second example for KC-5.1.III.B: "Unilever based in England and the Netherlands and operating in British West Africa and the Belgian Congo." Say plainly that Unilever was formed on 2 September 1929, when Lever Brothers joined Margarine Unie, itself formed in 1927 from the Dutch firms of Jurgens and Van den Bergh (Wikipedia; Grace\'s Guide). Lever\'s company began its plantations in the Belgian Congo in 1911, where its agents forcibly recruited Congolese workers (Wikipedia, "Huileries du Congo Belge"). That is Unit 6: name it as a bridge and move on.',
          'The 1880s: Unilever\'s history dates Sunlight to 1884, "a soap that contain[s] copra or [palm] kernel oil"; other sources say 1885. Port Sunlight was developed from 1888. The Jurgens family were butter traders in Oss by the early 1800s; two Jurgens brothers formed the firm Gebroeders Jurgens there in 1854, and the family made margarine from 1871 (Unilever Archives, "Formation of Unilever"; Wikipedia, "Antoon Jurgens"); the Van den Berghs were exporting butter to England by 1870 and made margarine from the 1870s.',
          'The pictures are real documents: two United States trademark registrations for Sunlight Soap, filed by Lever Bros. of Warrington, England (registered 31 August 1886), and Lever Brothers, Limited, of Port Sunlight, England (registered 5 May 1891), each with its label or advertisement pasted in (Library of Congress, no known restrictions). The 1891 filing (application filed 24 February 1891) protected a design, "several pictures of hands showing each sign of the deaf-and-dumb alphabet, and the word Sunlight," with the advertisement attached; the advertisement promises that "a girl of twelve or thirteen can do a large wash."',
          'Finance: Lever and Co. became a private limited company, Lever Brothers, Limited, in 1890, and a public company selling shares in 1894 (Grace\'s Guide; the National Library of Australia\'s guide to the Lever Brothers records). That is the "relied on new practices in banking and finance" link for Lever.',
          'Lever sold soap in wrapped packs bearing the Sunlight name, unusual at the time, where grocers had cut soap from long bars (MyLearning, with the Port Sunlight Museum). That is slide 17\'s "variety" and "availability."'
        ],
        ask: 'Why would an English soap maker bother to protect his brand name in the United States?',
        listenFor: 'He was selling, or planned to sell, there: the business crossed the ocean, and a brand name was worth protecting.',
        ap: 'KC-5.1.III.B (Unilever, and where it came from).'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Relate two developments.',
      subtitle: 'Making Connections 5.B: name two developments, choose the link, explain it with a detail for each side.',
      big: '8',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-7-economic-developments-and-innovations.html#modules' },
      notes: {
        minutes: 8,
        land: [
          'Module 05 is required: it practises the CED\'s suggested skill for 5.7, 5.B, on the topic\'s developments. The module models the frame on the bus route and the food court, then asks students to relate two of: the repeal of the Corn Laws and free trade; limited liability; stock markets; HSBC; Lever\'s soap across borders; cheaper and more varied goods.',
          'Circulate for students who explain how the link works, not only that one came first: "limited liability made it less risky to invest, so more people bought shares" is a link; "limited liability came in 1855 and then companies grew" is a sequence.'
        ],
        ask: 'Which kind of link did you choose, and why that one?',
        listenFor: 'Limited liability made big companies possible; global trade caused the need for HSBC; better factory methods caused cheaper cloth.'
      }
    },
    {
      phase: 'goods', kind: 'story-steps', eyebrow: 'Goods · More, Cheaper, More Kinds',
      kc: 'KC-5.1', title: 'Better methods, cheaper goods.',
      footer: 'Availability, affordability, variety: the College Board\'s three words.',
      template: {
        steps: [
          { label: 'Cheaper', text: 'Machines spin **cotton thread** once spun by hand; cloth keeps getting cheaper.' },
          { label: 'New kinds', text: 'Soap comes in **wrapped bars with a brand name**, like Sunlight.' },
          { label: 'From afar', text: 'Ships and railways bring **fruit, tea and wheat** to city markets.' },
          { label: 'The cause', key: true, text: '**Continued improvement in manufacturing methods.**' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1: "continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods."',
          'Cloth: around 1750 cotton thread was spun by hand. Harley found that "the real price of even the coarsest weft yarns fell to only a third of their early 1780s level by 1815." The economic historian Knick Harley on cloth: cloth prices "fell impressively in real terms before the end of the Napoleonic Wars because the price of yarn had fallen so much. Cloth prices continued to fall thereafter as technology improved in weaving and finishing" (Oxford working paper 81).',
          'Soap: Lever sold soap in wrapped packs bearing the brand name, unusual at the time (MyLearning, with the Port Sunlight Museum). Food from afar: 5.5 showed wheat prices in Liverpool and Chicago drawing together as rail, steamships and the telegraph joined the markets.',
          'Ask students to sort the three steps under the three words: cheaper cloth is affordability; branded soap is variety; food from afar is availability.'
        ],
        ask: 'Which step is affordability, which is availability, which is variety?',
        listenFor: 'Cloth: affordability. Fruit and wheat from afar: availability. Branded soap: variety (and availability).',
        ap: 'KC-5.1 (consumer goods).'
      }
    },
    {
      phase: 'for-some', kind: 'split-mirror', eyebrow: 'Goods · For Some',
      kc: 'KC-5.1', title: 'Living standards rose, for some.',
      footer: 'The College Board\'s words are exact: standards of living rose "for some."',
      template: {
        left: { name: 'Gained' },
        right: { name: 'Gained little' },
        rows: [
          { label: 'When', left: 'British working families, much faster from about 1860', right: 'British working families, 1780s to 1850s: under 15 percent, by one estimate' },
          { label: 'Where', left: 'Buyers in industrial cities', right: 'Many who grew the cotton, palm oil and tea (Unit 6)' },
          { label: 'Who', left: 'Families with wages to spend on new goods', right: 'Many of the city poor (Topic 5.9)' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'KC-5.1: industrial capitalism "led to increased standards of living for some."',
          'The measure: the economic historian Charles Feinstein estimated that the average working-class family\'s standard of living in Britain improved "by less than 15 percent between the 1780s and 1850s" (Journal of Economic History, 1998), "very modest until after 1861." Floud and Johnson\'s Cambridge Economic History of Modern Britain: most historians accept that real wages grew significantly from 1851 to 1913, while height and infant mortality give a less optimistic picture up to 1900. Not every historian agrees on the early years: Lindert and Williamson (Economic History Review, 1983) found much faster real-wage growth from 1820 to 1850, and Feinstein\'s paper was written to answer them, so the slide says "by one estimate."',
          'The right column points forward and does not teach: the city poor are 5.9; the growers of raw materials in colonies are Unit 6.'
        ],
        ask: 'Why does the College Board say "for some," not "for all"?',
        listenFor: 'Gains came late for workers and never reached many people; the measures disagree; who you were and where you lived mattered.',
        ap: 'KC-5.1 ("for some").'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence is more interesting than the myths.',
      template: {
        rows: [
          { myth: 'Adam Smith said government should do nothing.', evidence: 'He gave government three duties: defense, justice, and public works no private person would build.', source: 'Wealth of Nations, Book IV' },
          { myth: 'Free trade won everywhere.', evidence: 'Germany brought tariffs back from 1879, and the United States kept them high.', source: 'Tariff laws of 1861 and 1879' },
          { myth: 'Companies that sell shares were invented in the 1800s.', evidence: 'The VOC sold shares in 1602. What changed was who could form one, and how little an owner could lose.', source: 'Topic 4.5' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Myth 1: The Wealth of Nations, Book IV, chapter 9: "the sovereign has only three duties to attend to": protecting the society from invasion, "an exact administration of justice," and "erecting and maintaining certain public works, and certain public institutions, which it can never be for the interest of any individual, or small number of individuals to erect and maintain." The Evidence Lab has this as a text card.',
          'Myth 2 is slide 9. Myth 3 is slide 12.',
          'A fourth myth is in the reading: "industry made everyone richer." Slide 18 answers it.'
        ],
        ask: 'Which myth would most hurt an essay answer, and why?',
        listenFor: 'Myth 2: a continuity and change answer that says free trade won everywhere has no continuity in it.'
      }
    },
    {
      retelling: true,
      phase: 'retell', kind: 'split-matrix', eyebrow: 'The Whole Topic',
      title: 'Three rows, one story.',
      footer: 'Freer trade. Bigger business. Cheaper goods, for some. Redraw the table from memory, then connect two rows.',
      template: {
        columns: [{ name: 'Around 1750' }, { name: 'By 1900' }, { name: 'Carried on' }],
        rows: [
          { label: 'Trade', cells: ['Mercantilism: tariffs, bans, monopolies', 'Britain trades freely; much of Europe cut tariffs in the 1860s', 'Tariffs never vanished: high in America, back in Germany'] },
          { label: 'Business', cells: ['Families and partners; a few chartered companies', 'Limited liability, stock markets, banks; HSBC and Lever cross borders', 'Selling shares, as the VOC did in 1602'] },
          { label: 'Goods', cells: ['Thread spun by hand; cloth cost more', 'Cheaper cloth, branded soap, food from afar', 'Gains for some, not for all'] }
        ],
        result: { label: 'Connect', text: 'Pick two rows. Did one cause the other, make it possible, or answer it? Give a detail for each.' }
      },
      notes: {
        minutes: 3,
        land: [
          'The retelling slide: the whole topic as three rows. Ask students to close their notes and redraw it, three rows by three columns, then compare with the slide.',
          'Point to the Key Concepts: the Trade row is KC-5.1.III.A, the Business row KC-5.1.III.B, the Goods row KC-5.1. The middle column is the change the learning objective asks for; the right column is the continuity.',
          'The skill: the Connect line is 5.B, relating one row to another.'
        ],
        ask: 'Redraw it from memory. Then connect two rows in one sentence.',
        listenFor: 'Free trade and global trade led to businesses such as HSBC; limited liability and stock markets made big companies possible; better factories made goods cheaper, for some.'
      }
    },
    {
      phase: 'synthesis', kind: 'close-retell', eyebrow: 'AP Synthesis',
      kc: 'Unit 5: Learning Objective H', title: 'Say it in one sentence.',
      template: {
        frame: 'Partly thanks to Adam ___, Britain moved to free ___; limited ___ and banks let firms cross ___; goods grew ___, for some; and ___ stayed in America and came back in Germany.',
        words: ['tariffs', 'borders', 'Smith', 'cheaper', 'liability', 'trade'],
        prompt: 'Fill it in from memory, then add one example for each part.'
      },
      notes: {
        minutes: 1,
        land: [
          'Learning objective H: "Explain the development of economic systems, ideologies, and institutions and how they contributed to change in the period from 1750 to 1900." The sentence is the whole answer: an ideology (free trade), institutions (limited-liability companies, stock markets, banks), a system (industrial capitalism) and the change each contributed to. One example per part makes it an AP answer.',
          'A strong version: Adam Smith\'s argument against "the mercantile system" (1776), Manchester manufacturers\' campaign and the Irish famine led Britain to repeal the Corn Laws in 1846 and end its tariffs on factory goods by 1860, and much of Western Europe lowered tariffs in the 1860s, though Germany returned to tariffs in 1879 and the United States kept them; limited liability (1855 and 1856), stock markets and banks let businesses such as HSBC (1865) and Lever Brothers, which registered Sunlight Soap in the United States by 1886 and later became part of Unilever, work across borders; and better factory methods made cloth cheaper and soap a branded product, raising British working families\' living standards, slowly before the 1850s and faster after about 1860, though not for everyone.'
        ],
        ask: 'Which blank is hardest to fill with an example?',
        listenFor: 'Students who can give one example for each part and name what carried on have the objective.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab · Optional',
      title: 'Two sources, one row.',
      subtitle: 'Choose at least two cards. For each: what kind of source it is, which row it is evidence for (trade, business or goods), and one thing it cannot tell you.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-7-economic-developments-and-innovations.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Optional today: use it if the room has time, or as homework for students who want more. The cards are real objects (the 1891 Sunlight trademark advertisement, "The World\'s Exchanges" of 1886, the Royal Exchange photochrom, the Liverpool dock photograph of 1893, the 1805 engraving of Smith) and Smith\'s "three duties" as a text card.',
          'Listen for students who name what kind of source each card is (a company\'s own advertisement, a print made to sell, a tourist photograph, a portrait made after death) and which row it supports.'
        ],
        ask: 'What can your source not tell you?',
        listenFor: 'Who could afford the soap; how much money the exchanges moved; where the fruit came from; whether people agreed with Smith.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'How did business and goods change, and how do the changes connect?',
      subtitle: 'Explain how one banking or finance practice helped a business that crossed borders to grow, one way goods changed and why only for some, how one development relates to another, and one thing that continued. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-5/lesson-5-7-economic-developments-and-innovations.html#modules' },
      notes: {
        minutes: 12,
        land: [
          'Module 10 is required: draft, Socrates, revise. It assesses Target 2 (KC-5.1.III.B, with KC-5.1) and the learning objective, and declares Continuity and Change.',
          'A strong answer: before 1825 forming a company with shares in Britain usually took the government\'s permission, and partners could lose everything; the laws of 1855 and 1856 gave limited liability, so many more people could invest, and stock markets let them sell their shares; HSBC, opened in Hong Kong in 1865 to bank for merchants trading with China, opened in Shanghai and London the same year and worked in 16 countries and territories by 1900, so global trade made a bank that crossed borders; better factory methods made cotton cloth cheaper and turned soap into a wrapped, branded product like Lever\'s Sunlight, which he registered in the United States by 1886; British working families\' living standards rose very little before the 1850s and faster after about 1860, but many city poor and the growers of raw materials did not share the gains; selling shares itself continued from the VOC of 1602.'
        ],
        ask: 'Where in your answer is the change, and where is the continuity?',
        listenFor: 'Limited liability, banks and cheaper goods as the change; shares, tariffs or unequal gains as the continuity, with the link between two developments explained.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle', eyebrow: 'The Hand-off',
      title: 'Freer trade. Bigger business. Cheaper goods, for some.',
      subtitle: 'Fruit stands on the dock at Liverpool, 1893. Next, Topic 5.8: the people who pushed back against the new economy.',
      notes: {
        minutes: 2,
        land: [
          'Land the spine, then the hand-off to 5.8: not everyone gained from this new economy, and not everyone accepted it. Workers organized, reformers pushed for new laws, and some thinkers imagined a different system.',
          'The picture is a real photograph: the left half of a stereo card, "Fruit Stands on the Dock, Liverpool, England," by William H. Rau, sold by Griffith and Griffith of Philadelphia, about 1893 (Library of Congress, no known restrictions). A woman in a shawl sits at a fruit stand; well-dressed shoppers walk past, beside the dock warehouses.',
          'Ask students to read the picture as the whole topic: goods from far away (availability), people buying them (living standards), and a seller in a shawl (for some).'
        ],
        ask: 'Say the topic in one sentence, with one example from each row.',
        listenFor: 'The spine with real cases: the Corn Laws repealed in 1846; HSBC in 1865 or Lever\'s soap; cheaper cloth, for some.'
      }
    }
  ]
};
