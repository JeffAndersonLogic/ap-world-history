#!/usr/bin/env node
'use strict';

/**
 * Deterministically builds BeHistorical Unit 9 Topics 9.4–9.9.
 * Standards source: AP World History: Modern CED, effective Fall 2026.
 */

const fs = require('fs');
const path = require('path');
const { captureWrapper } = require('./lib/first10-capture-wrapper');
const { inspect } = require('util');
const vm = require('vm');
const { renderFirst10Page } = require('./lib/first10-page');
const { loadCourse } = require('./lib/socrates-course');
const { alignTopicConcepts } = require('./lib/ced-2026-key-concepts');

// The reading's AI Coach prompt carries the same assignment context a checkpoint's
// does, read from the lesson data so the two cannot disagree about what Socrates
// is told. See docs/socrates/socrates-paste-contract.md.
const COURSE = new Map(loadCourse().topics.map(t => [t.id, t]));

function coachContextFor(topicId) {
  const t = COURSE.get(String(topicId).replace(/^Topic\s+/i, '').trim());
  if (!t) return undefined;
  return {
    topic: t.id,
    module: 'First & 10 Reflection',
    title: t.title,
    span: t.span,
    focus: t.period,
    targets: t.targets,
    criteria: t.criteria,
    kcs: t.kcs.map(k => ({ code: k.code, text: k.text })),
    terms: t.terms
  };
}
const F10_CONTENT = require('./lib/f10-content');

const ROOT = path.resolve(__dirname, '..');
const UNIT = path.join(ROOT, 'unit-9');
const DATA = path.join(ROOT, 'assets', 'data');
const ROOM = path.join(ROOT, 'beintheroom', 'unit-9');
const COACH_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
const SUBMIT_NOTE = 'Organize your thinking here, submit your final work in Canvas.';
// Each topic gets a purpose-built local map instead of a blank world outline,
// and slots without a topic-specific photograph fall back to the generated
// per-slot artwork rather than repeating one filler image.
const instructionalMap = (id) => `../assets/images/instructional-maps/topic-${id.replace('.', '-')}.svg`;
const moduleArt = (id, slot) => `../assets/images/module-art/unit-9/topic-${id.replace('.', '-')}/${slot}.svg`;
const TOPIC_ART = '';

/** Deep reading cards for the generated topics, keyed by topic id.
 *
 *  These lesson data files are generated, so the deepReading block has to be
 *  emitted here rather than pasted into assets/data/. A block hand-added to a
 *  generated file survives until the next rebuild and then vanishes, taking the
 *  card with it and leaving a chapter on disk that nothing links to, which is
 *  the failure validate.js checks for in both directions.
 *
 *  A topic with no entry here simply gets no card, so this list grows as
 *  chapters are written rather than needing a placeholder per topic. */
// Module 07 evidence pools for the generated topics, declared here for the same
// reason DEEP_READINGS is: these renderer configs are written by this script, so
// a hand edit to one survives exactly until the next rebuild. One authored pool
// per topic, and every card is either a picture or declared text evidence. See
// the authenticity gate in docs/module-07-scaffolding-standard.md.
const COMMONS = name => `https://commons.wikimedia.org/wiki/Special:FilePath/${name}`;
const COMMONS_PAGE = name => `https://commons.wikimedia.org/wiki/File:${name}`;
const picture = (name, title, caption, prompt) => ({ title, url: COMMONS(name), sourceUrl: COMMONS_PAGE(name), caption, prompt });
const localMap = (file, title, caption, prompt) => ({ title, url: `../assets/images/instructional-maps/${file}`, sourceUrl: `../assets/images/instructional-maps/${file}`, caption, prompt });

const MODULE07_TASK = 'Work this as an evidence pool, not a worksheet. Choose at least two cards that genuinely fit the claim you want to make, name a specific detail in each, explain the inference you draw from that detail, and say whether your cards corroborate or complicate one another. Reject a card that does not fit rather than forcing it in, and state one limitation of the evidence you kept. Captions identify the object and its provenance. The conclusion is yours.';

const MODULE07_EVIDENCE = {
  '9.4': {
    prompt: 'Make a claim about what changed in the global economy after 1945 and what continued. Use at least two cards, name the mechanism that carried the change, and identify who is not visible in the evidence you chose.',
    cards: [
      picture('Container_ship_Hanjin_Taipei.jpg', 'Container ship under way',
        'Photograph of a loaded container ship. Standardized boxes are the physical form the late twentieth-century trading system took.',
        'NOTICE how the cargo is packed and what that implies about handling it. INFER what changes for a port, and for the people who used to unload ships. What does a photograph of a ship not tell you about who owns the cargo or where the profit lands?'),
      localMap('topic-9-4.svg', 'Global production and trade in the late twentieth century',
        'BeHistorical reference map. Secondary geographic reconstruction of major manufacturing regions and trade routes.',
        'NOTICE which regions the map marks as producing and which as consuming. INFER what that division implies about wages and bargaining power. What would you need beyond a map to show the arrangement was chosen rather than natural?'),
      { title: 'Shenzhen becomes a Special Economic Zone',
        label: 'State-policy record · China, 1980',
        sourceText: [
          'China designated Shenzhen and other coastal areas as zones',
          'open to foreign investment and market experimentation.',
          'The Communist Party retained political control throughout.'
        ],
        caption: 'A decision by a communist state to admit foreign capital in defined places, and to keep everything else.',
        prompt: 'Is this evidence of a market economy replacing a planned one, or of a state using markets for its own ends? Defend the reading, and name what evidence would settle it.' },
      { title: 'NAFTA links three national markets',
        label: 'Trade-agreement record · North American Free Trade Agreement, 1994',
        sourceText: [
          'Canada, Mexico and the United States reduced many barriers',
          'to trade and investment across their borders.',
          'Production chains increasingly crossed those borders.'
        ],
        caption: 'A treaty that made a single production region out of three countries with very different wage levels.',
        prompt: 'What does a trade agreement change that a shipping technology cannot, and what can it not change on its own? Pair this with one other card and say which does more explanatory work.' },
      { title: 'The World Trade Organization begins',
        label: 'Institutional record · WTO, 1995',
        sourceText: [
          'The WTO replaced the GATT framework with a permanent body',
          'for trade rules and binding dispute settlement.',
          'Member governments accepted common procedures.'
        ],
        caption: 'The point at which trade rules acquired a standing institution and an enforcement mechanism.',
        prompt: 'Why might a permanent court for trade disputes matter more to a small economy than to a large one? What evidence would you need before claiming the WTO favored either?' }
    ]
  },
  '9.5': {
    prompt: 'Build a claim about how rights expanded after 1900, and qualify it. Use at least two cards, distinguish a formal legal change from a lived outcome, and say which of your cards is evidence for which.',
    cards: [
      picture('Wangari_Maathai.jpg', 'Wangari Maathai',
        'Photograph of the founder of Kenya\'s Green Belt Movement, which organized women to plant trees and to defend community access to land.',
        'NOTICE that this is a portrait of an organizer rather than of an official. INFER where the pressure for reform in this case originated. What can a portrait not show about whether the movement changed anything?'),
      localMap('topic-9-5.svg', 'Reform movements and rights claims after 1900',
        'BeHistorical reference map. Secondary geographic reconstruction locating the movements this topic studies.',
        'NOTICE how widely spread the marked movements are. INFER what that distribution suggests about whether rights claims were exported or arrived independently. What does a map of locations not show about what each movement actually won?'),
      { title: 'Universal Declaration of Human Rights',
        label: 'International rights document · United Nations, 1948',
        sourceText: [
          'The declaration states that all human beings are born free',
          'and equal in dignity and rights.',
          'It is a declaration, not a treaty, and it binds no one.'
        ],
        caption: 'The text most later rights claims were argued from, adopted three years after the United Nations was founded.',
        prompt: 'What can a document with no enforcement mechanism still do? Use one other card to test whether the declaration made any difference to it.' },
      { title: 'Women gain the vote, by country and year',
        label: 'Comparative legal timeline · twentieth century',
        sourceText: [
          'United States 1920, Brazil 1932, Turkey 1934,',
          'Japan 1945, India 1947, Morocco 1963.',
          'Each date is a change in law, not in practice.'
        ],
        caption: 'Six national dates, so the sequence can be read rather than assumed. The spread of the dates is itself the evidence.',
        prompt: 'What pattern do these dates make, and what does the pattern suggest about the causes? Name a country whose date would complicate the pattern you see.' },
      { title: 'Apartheid ends in South Africa',
        label: 'Political and legal record · South Africa, 1990 to 1994',
        sourceText: [
          'Apartheid laws were dismantled and banned organizations',
          'including the ANC were legalized.',
          'South Africa held its first election with universal franchise in 1994.'
        ],
        caption: 'The dismantling of a legal racial order, dated, after decades of internal resistance and external pressure.',
        prompt: 'This card shows a formal legal change. What evidence would you need to know whether lived conditions changed with it, and why is that a different question?' }
    ]
  },
  '9.6': {
    prompt: 'Make a claim about global culture after 1900. Use at least two cards to test whether the pattern is homogenization, hybridization, or local adaptation, and explain which your evidence actually supports.',
    cards: [
      picture('2006_Olympics_Opening_Ceremony.jpg', 'Olympic opening ceremony, Turin, 2006',
        'Photograph of an opening ceremony staged for a worldwide television audience. The spectacle is designed to be watched elsewhere.',
        'NOTICE what the ceremony is doing for the camera rather than for the stadium. INFER who the intended audience is. Does a globally broadcast national spectacle evidence homogenization or its opposite?'),
      localMap('topic-9-6.svg', 'Circuits of global culture',
        'BeHistorical reference map. Secondary geographic reconstruction of the routes along which media, music and film travelled.',
        'NOTICE which directions the marked circuits run. INFER whether cultural traffic in this period moved one way or several. What would you need beyond a map of routes to know what audiences did with what arrived?'),
      { title: 'Reggae travels beyond Jamaica',
        label: 'Music-distribution record · Jamaica and global markets, 1960s to 1980s',
        sourceText: [
          'Reggae developed from Jamaican traditions and spread through',
          'records, touring, radio and diaspora communities.',
          'Audiences outside Jamaica adapted it into local forms.'
        ],
        caption: 'A music from a small island becoming a global form, by a route that ran outward rather than inward.',
        prompt: 'Which direction does this card send cultural influence, and why does that matter for a claim about globalization? What does it complicate about a story of American or European dominance?' },
      { title: 'Bollywood reaches transnational audiences',
        label: 'Film-distribution record · Indian cinema, late twentieth century onward',
        sourceText: [
          'Hindi-language films circulated through cinemas, satellite',
          'television, video and streaming.',
          'Diaspora audiences were a substantial part of the market.'
        ],
        caption: 'A film industry with a global audience that is not primarily Western.',
        prompt: 'Set this beside the reggae card. What claim do the two together support that neither supports alone? What would weaken it?' },
      { title: 'Alibaba expands online commerce',
        label: 'Digital-commerce record · China, founded 1999',
        sourceText: [
          'Alibaba built online marketplaces linking sellers and buyers',
          'through digital payment and logistics systems.',
          'A platform developed in China became globally significant.'
        ],
        caption: 'A commercial platform, included here because commerce carries culture: what people buy, and from whom.',
        prompt: 'Is a shopping platform cultural evidence? Argue it either way, then say what a historian would need to settle it.' }
    ]
  },
  '9.7': {
    prompt: 'Explain why people opposed globalization, and show that the opposition was not one thing. Use at least two cards from different kinds of grievance, and identify what each set of protesters actually wanted.',
    cards: [
      picture('WTO_Protests-Seattle-Marchers-29Nov1999.jpg', 'Marchers at the WTO ministerial, Seattle, 1999',
        'Photograph of the Seattle protests, November 1999. Labor unions, environmental groups and human-rights organizations marched together.',
        'NOTICE what the banners and the marchers indicate about who turned out. INFER what such different groups thought they shared. What does a photograph of a march not tell you about whether it achieved anything?'),
      localMap('topic-9-7.svg', 'Where opposition to globalization arose',
        'BeHistorical reference map. Secondary geographic reconstruction of major protests and movements against globalized economic policy.',
        'NOTICE whether the marked protests cluster in wealthy or poorer economies, or both. INFER what that says about who felt the costs. What does the map not distinguish between: a protest about wages and a protest about water?'),
      { title: 'Anti-IMF structural-adjustment protests',
        label: 'Movement record · debt-crisis states, 1980s to 2000s',
        sourceText: [
          'Protests in several countries opposed austerity, subsidy cuts,',
          'privatization and currency reforms tied to IMF adjustment programs.',
          'The programs were conditions attached to loans.'
        ],
        caption: 'Opposition in borrowing countries to conditions set by lenders, which is a grievance about sovereignty as much as about prices.',
        prompt: 'How does this grievance differ from the one on display in Seattle? Which of the two is better evidence that globalization distributed its costs unevenly?' },
      { title: 'The Cochabamba Water War',
        label: 'Local protest and policy record · Bolivia, 2000',
        sourceText: [
          'Mass protests opposed a privatized water concession',
          'after prices and access became political issues.',
          'The government cancelled the concession.'
        ],
        caption: 'A single city, a single utility, and a protest that reversed the policy. The smallest scale in this pool and the only clear win.',
        prompt: 'Why might opposition succeed here and not at the WTO? What does the difference in scale explain, and what does it not?' },
      { title: 'Weibo as a locally developed platform',
        label: 'Technology and cultural-policy record · China, launched 2009',
        sourceText: [
          'Sina Weibo became a major Chinese social-media platform',
          'inside a nationally regulated internet.',
          'Users joined global-style digital culture on national terms.'
        ],
        caption: 'Not a protest: an alternative. A state and a market building their own version rather than refusing the technology.',
        prompt: 'Is building your own platform a form of resistance to globalization, or a form of participating in it? Use this card to complicate a claim built from the protest cards.' }
    ]
  },
  '9.8': {
    prompt: 'Build a claim about what international institutions could and could not do after 1945. Use at least two cards, name the mechanism that gave an institution power in one case, and the one that failed in another.',
    cards: [
      picture('UN_General_Assembly_hall.jpg', 'The United Nations General Assembly hall',
        'Photograph of the Assembly chamber, where every member state holds one vote regardless of size.',
        'NOTICE how the room is arranged and what that arrangement asserts about the members. INFER what kind of authority a body organized this way can claim. What does the room not show about which decisions are binding?'),
      localMap('topic-9-8.svg', 'International organizations and their reach',
        'BeHistorical reference map. Secondary geographic reconstruction of membership and major operations.',
        'NOTICE where operations are marked and where they are not. INFER what determines whether an institution acts in a given place. What would you need beyond a map to explain a case where it did not act?'),
      { title: 'The Security Council veto',
        label: 'Institutional design record · United Nations, 1945 onward',
        sourceText: [
          'The United States, the Soviet Union and then Russia, China,',
          'Britain and France hold permanent seats.',
          'A negative vote by any one of them blocks substantive action.'
        ],
        caption: 'The rule, written into the founding charter, that decides when the organization can act at all.',
        prompt: 'This design was a condition of the great powers joining at all. Use it to explain one case where the U.N. acted and one where it did not, then say whether the rule is a flaw or the price of the institution existing.' },
      { title: 'The first United Nations Emergency Force',
        label: 'Peacekeeping record · Suez Crisis, 1956',
        sourceText: [
          'The U.N. deployed its first large armed peacekeeping force',
          'to supervise the end of fighting after the Suez Crisis.',
          'Peacekeepers operated with the consent of the host state.'
        ],
        caption: 'The invention of peacekeeping, in a crisis where two permanent members were themselves the aggressors.',
        prompt: 'What made action possible here despite the veto? What does the consent requirement mean for cases where a government is the source of the violence?' },
      { title: 'Rwanda exposes institutional limits',
        label: 'U.N. self-review and conflict record · Rwanda, 1994; review published 1999',
        sourceText: [
          'A peacekeeping mission was present as the genocide unfolded,',
          'with a mandate and resources that were sharply limited.',
          'A later U.N. inquiry criticized the organization\'s response.'
        ],
        caption: 'The organization\'s own inquiry into its worst failure, which makes this a rare piece of evidence: an institution assessing itself.',
        prompt: 'Which of the design features in the other cards best explains this outcome? Note that this is a self-review: how does the author of a document change what you can conclude from it?' }
    ]
  },
  '9.9': {
    prompt: 'Argue about the extent of change in the twentieth and twenty-first centuries. Use at least one card for change and one for continuity, set out the criteria you are judging extent by, and qualify the claim.',
    cards: [
      picture('Apollo_11_Launch2.jpg', 'Apollo 11 launch, 16 July 1969',
        'Photograph of the launch. A single state\'s programme, photographed as a national achievement and watched worldwide.',
        'NOTICE the scale of the vehicle and the fact that it was photographed at all. INFER what it took, institutionally, to put this on a launch pad. Is this better evidence of technological change, of state capacity, or of Cold War competition?'),
      picture('Life_expectancy_by_world_region%2C_from_1770_to_2018.svg', 'Life expectancy by world region, 1770 to 2018',
        'Charted series compiled from national statistics. A long measured record rather than a snapshot.',
        'NOTICE where the lines start, where they converge and where they do not. INFER which is the bigger story: the rise, or the persistent gaps. Which reading better supports a claim about the extent of change?'),
      picture('Greenhouse_Gas_by_Sector.png', 'Global greenhouse gas emissions by sector',
        'Charted breakdown of emissions by economic sector. Secondary compilation from reported national data.',
        'NOTICE which sectors carry the largest shares. INFER what that implies about which parts of modern life are hardest to change. What does a global total conceal about who emitted it?'),
      picture('AralSea1989_2014.jpg', 'The Aral Sea, 1989 and 2014',
        'Two satellite images of the same place, twenty-five years apart.',
        'NOTICE what is different between the two frames. INFER what sustained human decision-making it took to produce that difference. Is this evidence of change, of continuity in how states treat resources, or of both?'),
      localMap('topic-9-9.svg', 'The globalized world, c. 2000',
        'BeHistorical reference map. Secondary geographic reconstruction of the networks this unit has studied.',
        'NOTICE which connections the map shows and which regions sit off the main lines. INFER what "global" means for a place that is not on them. Use this to qualify any claim you build from the other cards.')
    ]
  }
};

const DEEP_READINGS = {
  '9.4': {
    title: 'Who Captured the Savings',
    desc: 'A textbook-depth companion that takes the enormous savings from cheaper distance and asks who received them and who absorbed the costs, with the genuine disagreements about inequality presented as disagreements. Optional, and useful when a checkpoint asks you to evaluate the effects of globalization.',
    url: 'deep-reading-topic-9-4-economics-global-age.html'
  },
  '9.5': {
    title: 'A Standard You Can Be Held To',
    desc: 'A textbook-depth companion on what a declaration that bound nobody to anything turned out to be good for, and how movements used a standard their governments had already endorsed. Optional, and useful when a checkpoint asks how human rights claims produced political change.',
    url: 'deep-reading-topic-9-5-calls-for-reform-responses.html'
  },
  '9.6': {
    title: 'A Format Is Not a Meaning',
    desc: 'A textbook-depth companion that follows the near-zero cost of one more digital copy into culture, and separates what actually travels, the format, from what audiences do with it once it arrives. Presents homogenization and hybridity as the live argument they are rather than settling it. Optional, and useful when a checkpoint asks whether globalization flattened culture.',
    url: 'deep-reading-topic-9-6-globalized-culture.html'
  },
  '9.7': {
    title: 'Protest Follows the Decision',
    desc: 'A textbook-depth companion that explains why opposition to globalization gathered where it did by following the decisions rather than the slogans, starting from the fact that rules affecting people everywhere were being written by bodies those people could not vote out. Optional, and useful when a checkpoint asks who resisted globalization and why.',
    url: 'deep-reading-topic-9-7-resistance-globalization.html'
  },
  '9.8': {
    title: 'The Price of Keeping Everyone Inside',
    desc: 'A textbook-depth companion that reads the 1945 Charter as a list of corrections to three specific League failures, treats the veto as the price of keeping the great powers inside rather than as a flaw somebody missed, uses the United Nations own 1999 inquiries into Rwanda and Srebrenica as evidence, and gives you one axis that predicts which institutions work and which cannot. Optional, and useful when a checkpoint asks how globalization changed interactions among states.',
    url: 'deep-reading-topic-9-8-institutions-globalized-world.html'
  },
  '9.9': {
    title: 'Measured Against What',
    desc: 'The last chapter of the course. A textbook-depth companion that shows an extent claim needs a baseline, a criterion and a population before it means anything, traces four threads from c. 1200 to the present across all nine units, weighs the continuities that outlived the century, and builds the closing thesis one sentence at a time. Optional, and useful when a checkpoint asks how much science and technology actually changed.',
    url: 'deep-reading-topic-9-9-continuity-change-globalized-world.html'
  }
};

const topics = [
  {
    id: '9.4', slug: 'economics-global-age', title: 'Economics in the Global Age', theme: 'Economic Systems', code: 'ECN',
    focus: 'As societies develop, they affect and are affected by the ways that they produce, exchange, and consume goods and services.',
    loCode: 'Unit 9: Learning Objective D', lo: 'Explain the continuities and changes in the global economy from 1900 to present.',
    kcs: [
      ['KC-6.3.I.D', 'In a trend accelerated by the end of the Cold War, many governments encouraged free-market economic policies and promoted economic liberalization in the late 20th century.', ['The United States under Ronald Reagan', 'Britain under Margaret Thatcher', 'China under Deng Xiaoping', 'Chile under Augusto Pinochet']],
      ['KC-6.3.I.E', 'In the late 20th century, revolutions in information and communications technology led to the growth of knowledge economies in some regions, while industrial production and manufacturing were increasingly situated in Asia and Latin America.', ['Knowledge economies: Finland, Japan, United States', 'Manufacturing: Vietnam, Bangladesh, Mexico, Honduras']],
      ['KC-6.3.II.B', 'Changing economic institutions, multinational corporations, and regional trade agreements reflected the spread of principles and practices associated with free-market economics throughout the world.', ['WTO', 'NAFTA', 'ASEAN', 'Nestlé', 'Nissan', 'Mahindra and Mahindra']]
    ],
    cases: ['Deng-era economic reforms', 'Bangladesh garment manufacturing', 'NAFTA and regional trade', 'Multinational corporations'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Container_ship_Hanjin_Taipei.jpg',
    reading: [
      ['A New Rulebook', 'The end of the Cold War accelerated a turn toward economic liberalization. Governments reduced barriers, privatized state enterprises, welcomed investment, and argued that markets would allocate resources more efficiently. Reagan, Thatcher, Deng, and Pinochet pursued different versions under very different political systems.'],
      ['A New Geography of Work', 'Information technology helped knowledge economies grow in Finland, Japan, and the United States while firms placed manufacturing in lower-wage production zones in Vietnam, Bangladesh, Mexico, and Honduras. Globalization connected design, finance, assembly, shipping, and retail across borders.'],
      ['Change Inside Continuity', 'The world economy remained unequal and profit-driven, but the institutions and geography changed. The WTO, NAFTA, ASEAN, and multinational corporations widened free-market rules while states continued to shape who gained, who absorbed risk, and which industries moved.']
    ],
    lectures: [
      ['Economic Liberalization', ['Reagan and Thatcher reduced regulation, taxes, and state ownership while weakening some organized-labor protections.', 'Deng Xiaoping opened special economic zones and encouraged market activity while the Chinese Communist Party retained political control.', 'Pinochet’s Chile adopted market reforms under dictatorship, demonstrating that economic liberalization did not necessarily bring political liberalization.']],
      ['The Global Division of Labor', ['Digital communication let firms coordinate production across many countries.', 'Knowledge-intensive work concentrated in some high-income economies while labor-intensive manufacturing expanded in parts of Asia and Latin America.', 'Workers gained jobs and export opportunities, but wages, safety, and bargaining power remained uneven.']],
      ['Institutions and Trade Agreements', ['The WTO promoted common trade rules and dispute settlement on a global scale.', 'NAFTA linked Canada, Mexico, and the United States while ASEAN deepened regional economic cooperation in Southeast Asia.', 'Trade agreements increased exchange but also exposed communities to competition and factory relocation.']],
      ['Multinational Power and Continuity', ['Nestlé, Nissan, and Mahindra and Mahindra illustrate corporations operating production and markets across states.', 'States still regulated currencies, labor, trade, and investment, so globalization did not erase government power.', 'A strong continuity-and-change argument weighs new speed and scale against older patterns of unequal exchange and corporate profit.']]
    ],
    source: ['Structural Adjustment Agreement, classroom adaptation', 'A debtor government agrees to devalue its currency, reduce subsidies, sell selected state enterprises, and open markets in exchange for emergency credit. Supporters predict efficiency and export growth; critics warn that immediate costs will fall on workers and consumers.', ['What conditions shaped the government’s bargaining power?', 'Who would likely support and oppose these terms?', 'How can this source demonstrate both change and continuity in the global economy?']],
    surreal: ['The Shirt with Twelve Passports', 'Imagine tracing one shirt through cotton, design, finance, dyeing, assembly, shipping, advertising, and sale, each in a different country.', 'What does the shirt reveal about the changed geography of production and the continuity of unequal bargaining power?'],
    scenario: {
      file: 'structural-adjustment-cabinet.html', title: 'The Structural Adjustment Cabinet', date: 'Accra, 1983',
      dilemma: 'A debt and currency crisis has emptied foreign-exchange reserves. International lenders offer emergency credit if the government devalues, cuts subsidies, and restructures state enterprises.',
      roles: ['Finance minister seeking emergency credit', 'Trade-union representative', 'Market trader facing food-price increases', 'Export-industry adviser'],
      choices: ['Accept the full package to stabilize the currency quickly', 'Negotiate phased reforms with protections for food and health', 'Reject the package and impose import controls', 'Combine selective liberalization with domestic investment and public oversight'],
      evidence: ['Late-century debt crises increased lender influence over policy.', 'Currency devaluation could encourage exports while raising import prices.', 'Subsidy cuts often imposed immediate costs before promised growth arrived.', 'Economic liberalization took different forms under democratic and authoritarian governments.']
    }
  },
  {
    id: '9.5', slug: 'calls-for-reform-responses', title: 'Calls for Reform and Responses After 1900', theme: 'Social Interactions and Organization', code: 'SIO',
    focus: 'The process by which societies group their members and the norms governing interactions among groups and individuals influence political, economic, and cultural institutions.',
    loCode: 'Unit 9: Learning Objective E', lo: 'Explain how social categories, roles, and practices have been maintained and challenged over time.',
    kcs: [
      ['KC-6.3.III.i', 'Rights-based discourses challenged old assumptions about race, class, gender, and religion.', ['Universal Declaration of Human Rights', 'Global feminism', 'Negritude', 'Liberation theology']],
      ['KC-6.3.III.ii', 'In much of the world, access to education and participation in new political and professional roles became more inclusive in terms of race, class, gender, and religion.', ['Women’s political rights', 'Rising female literacy and higher education', 'U.S. Civil Rights Act of 1965', 'End of apartheid', 'Caste reservation in India']],
      ['KC-6.3.II.C', 'Movements throughout the world protested the inequality of the environmental and economic consequences of global integration.', ['Greenpeace', 'Wangari Maathai’s Green Belt Movement', 'World Fair Trade Organization']]
    ],
    cases: ['Universal Declaration of Human Rights', 'Global feminism and expanded education', 'End of apartheid and civil-rights law', 'Green Belt and fair-trade movements'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wangari_Maathai.jpg',
    reading: [
      ['Rights Become a Global Language', 'The Universal Declaration of Human Rights offered activists a language for challenging discrimination against women, racial and religious minorities, refugees, and children. Negritude, liberation theology, and global feminism translated universal claims into distinct political settings.'],
      ['Doors Open, Unevenly', 'Voting rights, civil-rights legislation, the end of apartheid, caste reservation, female literacy, and expanded higher education changed access to public life. Formal inclusion did not eliminate unequal wealth, violence, prejudice, or institutional barriers.'],
      ['Reform Meets Global Integration', 'Greenpeace, Wangari Maathai’s Green Belt Movement, and fair-trade campaigns argued that environmental and economic costs were distributed unfairly. Reform movements linked local harms to global systems and demanded different rules.']
    ],
    lectures: [
      ['Rights-Based Challenges', ['The UDHR named rights that activists could use against state discrimination and social exclusion.', 'Global feminism challenged legal and customary restrictions on women’s education, work, property, politics, and bodily autonomy.', 'Negritude and liberation theology joined cultural or religious identity to anticolonial and social-justice claims.']],
      ['Education and Political Participation', ['Women gained voting or office-holding rights across states at different moments in the 20th century.', 'Female literacy and university enrollment rose in most regions, opening professional roles while revealing persistent gaps.', 'Caste reservation in India used state policy to widen access for historically excluded groups.']],
      ['Race, Law, and Institutional Change', ['The U.S. Civil Rights Act of 1965 attacked legal discrimination, though racial inequality persisted.', 'The end of apartheid replaced formal racial rule in South Africa without immediately erasing economic disparities.', 'Reform often changed law faster than social practice, making continuity part of the historical explanation.']],
      ['Environmental and Economic Justice', ['Greenpeace used transnational campaigns to make environmental harm visible.', 'Wangari Maathai’s Green Belt Movement connected tree planting, women’s livelihoods, democracy, and resistance to elite land use.', 'Fair-trade movements sought to give producers a larger share of global commodity value.']]
    ],
    source: ['Universal Declaration of Human Rights, 1948, adapted excerpt', 'All people are born free and equal in dignity and rights. Everyone is entitled to these rights without distinction, and everyone has a right to education, work, participation in government, and security of person.', ['What older assumptions does this language challenge?', 'How might an activist use the declaration against a government?', 'What limits arise because a declaration does not automatically enforce itself?']],
    surreal: ['A Door Labeled Equal', 'A law unlocks a public door, but the road to it is blocked by tuition, custom, violence, and inherited wealth.', 'How does the image distinguish formal inclusion from lived equality?'],
    scenario: {
      file: 'green-belt-petition.html', title: 'The Green Belt Petition', date: 'Nairobi, 1989',
      dilemma: 'A government-backed complex would replace public green space. A coalition inspired by the Green Belt Movement must choose how to connect environmental protection, women’s participation, and democratic accountability.',
      roles: ['Green Belt Movement organizer', 'Market woman and neighborhood resident', 'Government planning official', 'University student journalist'],
      choices: ['Launch a public petition and tree-planting occupation', 'Negotiate a smaller project with protected public land', 'Build an international human-rights and environmental campaign', 'Document land allocation and pursue a legal challenge'],
      evidence: ['The Green Belt Movement connected environmental repair with women’s economic roles.', 'Public land decisions reflected unequal political access.', 'International attention could protect activists but invite accusations of foreign interference.', 'Legal reform and changes in social practice did not always occur at the same pace.']
    }
  },
  {
    id: '9.6', slug: 'globalized-culture', title: 'Globalized Culture After 1900', theme: 'Cultural Developments and Interactions', code: 'CDI',
    focus: 'Ideas, beliefs, and religions shape how groups view themselves, and interactions among societies have political, social, and cultural implications.',
    loCode: 'Unit 9: Learning Objective F', lo: 'Explain how and why globalization changed culture over time.',
    kcs: [
      ['KC-6.3.IV.i', 'Political and social changes of the 20th century led to changes in the arts, and in the second half of the century popular and consumer culture became more global.', ['Reggae', 'Bollywood', 'BBC', 'World Cup soccer', 'Olympics']],
      ['KC-6.3.IV.ii', 'Arts, entertainment, and popular culture increasingly reflected the influence of a globalized society.', ['Social media', 'Global music and film', 'International sports']],
      ['KC-6.3.IV.iii', 'Consumer culture became globalized and transcended national borders.', ['Alibaba', 'eBay', 'Toyota', 'Coca-Cola']]
    ],
    cases: ['Reggae as global music', 'Bollywood and transnational film audiences', 'World Cup and Olympic spectacle', 'Alibaba, Toyota, and Coca-Cola'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2006_Olympics_Opening_Ceremony.jpg',
    reading: [
      ['Signals Cross Borders', 'Radio, television, film, recordings, satellites, and the internet moved culture faster and farther. Reggae emerged from Jamaican history yet became a global language of identity and protest; Bollywood films joined Indian storytelling to worldwide audiences.'],
      ['Shared Spectacles, Different Meanings', 'The BBC, World Cup, Olympics, and social media created simultaneous global audiences. Participation did not make culture identical: viewers translated global forms through language, religion, class, race, and national memory.'],
      ['Culture for Sale', 'Toyota, Coca-Cola, Alibaba, and eBay show consumer practices crossing borders. Companies standardized brands while adapting products and advertising locally, producing both convergence and cultural hybridity.']
    ],
    lectures: [
      ['Media Technologies and Reach', ['Radio and television created mass audiences before digital networks accelerated exchange.', 'The BBC circulated news and entertainment across former imperial and global networks.', 'Social media let users distribute culture as well as consume it, though corporations and states still shaped access.']],
      ['Music and Film', ['Reggae carried Jamaican experiences of race, inequality, religion, and resistance into global popular culture.', 'Bollywood served domestic and diaspora audiences and influenced film style far beyond India.', 'Global circulation often produced hybrid genres rather than a one-way replacement of local forms.']],
      ['Sports and Global Belonging', ['World Cup soccer and the Olympics turned national competition into shared global spectacle.', 'International sports created common rituals while reinforcing national identity and political controversy.', 'Athletes, broadcasters, sponsors, and fans all helped turn sport into a cultural and consumer system.']],
      ['Global Consumer Culture', ['Brands such as Toyota and Coca-Cola crossed borders through production, marketing, and retail networks.', 'Alibaba and eBay extended consumer exchange through online platforms.', 'Global consumerism increased shared products and symbols while access remained shaped by income and infrastructure.']]
    ],
    source: ['Bob Marley interview and global music press, classroom synthesis', 'Artists can speak from a particular place while audiences elsewhere hear their own struggles in the music. Record companies, radio, migration, and touring carry that music, but listeners give it new meanings.', ['What makes the cultural form both local and global?', 'Which technologies and institutions enable circulation?', 'How does audience reinterpretation complicate the idea of cultural homogenization?']],
    surreal: ['The Stadium with a Billion Living Rooms', 'One match is watched at the same moment in hundreds of languages, surrounded by the same sponsors but interpreted through different national stories.', 'Does shared consumption create one culture, many connected cultures, or both?'],
    scenario: {
      file: 'global-broadcast-board.html', title: 'The Global Broadcast Board', date: 'Mumbai, 1995',
      dilemma: 'A new satellite network can reach viewers across South Asia and the diaspora. Decide how much programming should be locally produced, imported, translated, and sponsored by global brands.',
      roles: ['Regional film producer', 'Satellite-network executive', 'Language and education advocate', 'Global advertising director'],
      choices: ['Build a mostly local-language schedule with selected imports', 'Pursue a global entertainment mix to maximize audience', 'Create co-productions that blend regional and international forms', 'Reserve public-interest hours while commercializing prime time'],
      evidence: ['Satellite television expanded cross-border audiences in the late 20th century.', 'Bollywood already served domestic and diaspora markets.', 'Advertising financed programming while shaping consumer culture.', 'Audiences often adapted imported formats rather than accepting them unchanged.']
    }
  },
  {
    id: '9.7', slug: 'resistance-globalization', title: 'Resistance to Globalization After 1900', theme: 'Cultural Developments and Interactions', code: 'CDI',
    focus: 'Ideas, beliefs, and religions shape how groups view themselves, and interactions among societies have political, social, and cultural implications.',
    loCode: 'Unit 9: Learning Objective G', lo: 'Explain the various responses to increasing globalization from 1900 to present.',
    kcs: [['KC-6.3.IV.iv', 'Responses to rising cultural and economic globalization took a variety of forms.', ['Anti-IMF and anti-World Bank activism', 'Locally developed social media such as Weibo in China']]],
    cases: ['Anti-IMF activism', 'Anti-World Bank campaigns', 'Seattle WTO protests', 'Weibo and locally developed platforms'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/WTO_Protests-Seattle-Marchers-29Nov1999.jpg',
    reading: [
      ['Resistance Is Not Isolation', 'Critics of globalization often opposed particular rules, institutions, or distributions of power rather than all cross-border exchange. Anti-IMF and anti-World Bank activists challenged debt conditions, austerity, labor effects, and environmental costs.'],
      ['Many Coalitions, Many Goals', 'Labor unions, environmentalists, farmers, indigenous groups, nationalists, religious movements, and digital-rights advocates resisted globalization for different reasons. The same institution could be criticized as undemocratic, culturally destructive, or economically unequal.'],
      ['Local Tools in Global Networks', 'Weibo illustrates a locally developed platform responding to a global technology. Local platforms can preserve language and national control while also enabling surveillance, commercialization, and new cross-border conversations.']
    ],
    lectures: [
      ['Economic Critiques', ['Anti-IMF and anti-World Bank activists argued that loan conditions shifted costs toward poor households and weakened public services.', 'Labor activists challenged job relocation, low wages, and limited workplace protections in global supply chains.', 'Farmers and indigenous groups opposed trade or development rules that threatened land, food security, or local autonomy.']],
      ['The Seattle Coalition', ['The 1999 WTO protests brought labor, environmental, human-rights, and anti-corporate groups together.', 'Shared opposition did not erase disagreements over trade, development, and national protectionism.', 'Media coverage made the protest itself part of the global information system activists criticized.']],
      ['Cultural and Political Responses', ['States promoted local content, language, censorship, or national platforms in response to outside media power.', 'Religious and nationalist movements sometimes presented global consumer culture as a threat to community values.', 'Cultural resistance could produce creative hybridity as well as rejection.']],
      ['Sourcing Resistance', ['A protest flyer, government statement, corporate report, and worker testimony reflect different purposes and audiences.', 'Point of view matters because groups define globalization’s benefits and harms differently.', 'A strong explanation classifies responses, reform, rejection, localization, regulation, or alternative networks, then supports each with evidence.']]
    ],
    source: ['Seattle WTO protest materials, 1999, classroom adaptation', 'Our economies should serve people and the environment rather than require communities to serve trade rules. Labor rights, democratic accountability, and ecological protection must not be treated as obstacles to commerce.', ['Which coalition members could support this statement for different reasons?', 'How do purpose and audience shape the language?', 'What does the source oppose, and what alternative does it imply?']],
    surreal: ['The Megaphone Made by the Company It Criticizes', 'A movement organizes through devices, platforms, and global media owned by corporations while protesting corporate globalization.', 'Does dependence on global tools weaken the critique, demonstrate adaptation, or reveal how deeply globalization structures resistance?'],
    scenario: {
      file: 'seattle-wto-coalition.html', title: 'The Seattle Coalition', date: 'Seattle, 1999',
      dilemma: 'The WTO ministerial is opening. A coalition of labor, environmental, and global-justice groups must agree on a message and tactics without pretending its members have identical goals.',
      roles: ['Dockworkers’ union organizer', 'Environmental campaigner', 'Global South debt-justice advocate', 'Small-farmer network representative'],
      choices: ['Demand enforceable labor and environmental standards inside trade rules', 'Call for debt relief and a halt to structural-adjustment conditions', 'Use nonviolent disruption to stop the meeting', 'Create an alternative forum proposing democratic global rules'],
      evidence: ['Anti-globalization coalitions joined groups with distinct interests.', 'The WTO’s decisions affected trade rules beyond the host country.', 'Television and early internet networks globalized protest images.', 'Critics disagreed over reforming institutions versus rejecting their authority.']
    }
  },
  {
    id: '9.8', slug: 'institutions-globalized-world', title: 'Institutions Developing in a Globalized World', theme: 'Governance', code: 'GOV',
    focus: 'Governments obtain, retain, and exercise power in different ways, while internal and external factors shape state formation, expansion, and decline.',
    loCode: 'Unit 9: Learning Objective H', lo: 'Explain how and why globalization changed international interactions among states.',
    kcs: [['KC-6.3.II.A', 'New international organizations, including the United Nations, formed with the stated goal of maintaining world peace and facilitating international cooperation.', ['United Nations']]],
    cases: ['United Nations General Assembly', 'Security Council and veto power', 'Peacekeeping operations', 'Humanitarian and development agencies'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/UN_General_Assembly_hall.jpg',
    reading: [
      ['From Alliance to Institution', 'After two world wars, states created the United Nations to maintain peace and facilitate cooperation. Unlike a world government, it depended on member states for authority, money, personnel, and enforcement.'],
      ['Equality and Power in One Building', 'Every member received a General Assembly seat, but five permanent Security Council members held vetoes. The design joined universal membership to the power realities of 1945.'],
      ['Cooperation with Limits', 'Peacekeeping, health, refugees, food, development, and international law expanded routine cooperation. Sovereignty, vetoes, unequal resources, and competing state interests limited what institutions could accomplish.']
    ],
    lectures: [
      ['Why the United Nations Formed', ['The failure of the League of Nations and the destruction of World War II shaped the 1945 charter.', 'Founders sought collective security, peaceful dispute resolution, and practical cooperation.', 'Decolonization later transformed a small organization dominated by great powers into a nearly universal forum.']],
      ['Institutional Design', ['The General Assembly expressed sovereign equality through one-state, one-vote representation.', 'The Security Council gave five permanent members veto power to keep major powers inside the system.', 'The secretary-general, courts, agencies, and councils created specialized channels for international interaction.']],
      ['Peacekeeping and Cooperation', ['Peacekeeping forces monitored agreements and sometimes protected civilians, but mandates depended on state consent and Security Council authorization.', 'UN agencies coordinated work on health, refugees, food, children, and development.', 'International institutions normalized repeated negotiation even when they did not resolve conflict.']],
      ['Power, Sovereignty, and Limits', ['A veto could block action when permanent members’ interests conflicted.', 'The UN lacked an independent army and relied on members for funds and personnel.', 'Globalization increased the need for cooperation while leaving states unwilling to surrender complete sovereignty.']]
    ],
    source: ['United Nations Charter, 1945, adapted excerpt', 'The organization seeks to save future generations from war, reaffirm human rights, establish conditions for justice and treaty obligations, and promote social progress through cooperation among states.', ['Which recent historical experiences shaped these purposes?', 'How does the stated purpose compare with the institution’s enforcement capacity?', 'Why would sovereign states accept some constraints but reject others?']],
    surreal: ['The Fire Department with Five Master Keys', 'Every household funds the fire department, but five households can prevent the trucks from leaving the station.', 'What does the analogy reveal about the Security Council veto, and where does it oversimplify state sovereignty?'],
    scenario: {
      file: 'peacekeeping-mandate.html', title: 'The Peacekeeping Mandate', date: 'United Nations, 1993',
      dilemma: 'Reports of attacks on civilians are increasing in a conflict zone where a lightly armed UN mission was sent to monitor a ceasefire. The Security Council must decide whether to expand the mandate and commit resources.',
      roles: ['Permanent-member ambassador', 'Representative of a nonaligned elected member', 'UN peacekeeping commander', 'Humanitarian agency coordinator'],
      choices: ['Expand the mandate to protect civilians and add troops', 'Maintain neutral monitoring while intensifying diplomacy', 'Authorize protected humanitarian corridors with limited force', 'Withdraw unless the parties renew consent and guarantee safety'],
      evidence: ['UN peacekeeping depended on member-state troops and funding.', 'Security Council authorization could be blocked by great-power interests.', 'Neutrality and sovereignty could conflict with civilian protection.', 'Broad mandates without adequate resources could increase risk.']
    }
  },
  {
    id: '9.9', slug: 'continuity-change-globalized-world', title: 'Continuity and Change in a Globalized World', theme: 'Unit 9 Synthesis', code: 'SYN',
    focus: 'Use Unit 9 evidence to evaluate change, continuity, significance, and complexity.',
    loCode: 'Unit 9: Learning Objective I', lo: 'Explain the extent to which science and technology brought change in the period from 1900 to the present.',
    kcs: [
      ['KC-6.1', 'Rapid advances in science and technology altered understandings of the universe and natural world and advanced communication, transportation, industry, agriculture, and medicine.', []],
      ['KC-6.1.I.A', 'New communication and transportation modes reduced the problem of geographic distance.', ['Radio', 'Cellular communication', 'Internet', 'Air travel', 'Shipping containers']],
      ['KC-6.1.I.D', 'Petroleum and nuclear energy technologies raised productivity and increased material production.', []],
      ['KC-6.1.III.B', 'More effective birth control increased women’s control over fertility and contributed to declining fertility rates in much of the world.', []],
      ['KC-6.1.I.B', 'The Green Revolution and commercial agriculture increased productivity and helped sustain a growing population.', []],
      ['KC-6.1.I.C', 'Vaccines and antibiotics increased human survival and longevity.', []],
      ['KC-6.3.I', 'States responded in a variety of ways to the economic challenges of the 20th century.', []],
      ['KC-6.3.III.i–ii', 'Rights-based discourse challenged old assumptions, while education and political and professional participation became more inclusive.', []],
      ['KC-6.3.IV.i–iii', 'Arts, entertainment, popular culture, and consumer culture increasingly reflected a globalized society and crossed national borders.', []]
    ],
    cases: ['Internet and cellular communication', 'Container shipping and air travel', 'Green Revolution and medicine', 'Birth control and global consumer culture'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Apollo_11_Launch2.jpg',
    reading: [
      ['Distance Collapses, Unevenly', 'Radio, cellular networks, the internet, air travel, and container shipping reduced barriers of distance. People, goods, money, and information moved faster, but borders, surveillance, cost, infrastructure, and inequality continued to shape access.'],
      ['Life and Production Change', 'Petroleum and nuclear power raised productivity; the Green Revolution expanded food output; vaccines and antibiotics extended life; birth control altered fertility. Each innovation produced intended gains and uneven social or environmental consequences.'],
      ['Evaluate Extent, Not Existence', 'Technology clearly brought change, but an extent argument must define the standard. Was change broad, deep, rapid, durable, or foundational? Continuities in state power, inequality, labor, and cultural identity qualify any claim of total transformation.']
    ],
    lectures: [
      ['Communication and Transportation', ['Radio, cellular communication, and the internet transformed the speed and scale of information exchange.', 'Air travel and shipping containers reorganized migration, tourism, military power, and supply chains.', 'Geographic distance mattered less for some activities while borders and unequal infrastructure remained powerful.']],
      ['Energy, Agriculture, and Medicine', ['Petroleum and nuclear technologies raised productivity and material output while creating strategic and environmental risks.', 'The Green Revolution increased crop yields and sustained population growth while deepening dependence on irrigation, chemicals, and commercial seed.', 'Vaccines and antibiotics increased survival and longevity while access remained unequal and antimicrobial resistance emerged.']],
      ['Society, Rights, and Culture', ['Birth control expanded women’s control over fertility and contributed to lower fertility rates in many regions.', 'Rights discourse and expanded education widened roles without eliminating inherited inequality.', 'Global arts, media, and consumer culture crossed borders while local identities adapted and resisted.']],
      ['Building the Extent Argument', ['Define a criterion for significance before ranking technological effects.', 'Use evidence from at least three categories and explain mechanisms, not just inventions.', 'Qualify the thesis with a meaningful continuity such as state power, unequal access, or persistent cultural difference.']]
    ],
    source: ['Three claims about technology, classroom synthesis', 'Claim A: technology made the world fundamentally borderless. Claim B: technology accelerated older global connections but did not erase political and economic inequality. Claim C: the greatest change was demographic because medicine, agriculture, and fertility control altered survival and family life.', ['Which claim is most defensible under a breadth criterion?', 'Which evidence would qualify each claim?', 'How can two claims be synthesized into a complex thesis?']],
    surreal: ['The World Shrinks, the Border Grows Taller', 'A traveler crosses an ocean in hours and speaks instantly across continents, yet a passport, firewall, price, or checkpoint still stops movement.', 'How does the contradiction help evaluate both technological change and political continuity?'],
    scenario: null
  }
];

/**
 * `--check` compares instead of writing, and exits 1 on any difference.
 *
 * Every file this script produces is generated, so a hand-edit to one is the
 * worst kind of change: it looks like it worked, and the next rebuild silently
 * reverts it. Intercepting the single write helper covers the readings, the
 * lesson data, the shells and the rooms in one place, and lets
 * scripts/test/readings-reproducible.test.js gate this unit the same way it
 * gates the others.
 */
const CHECK_ONLY = process.argv.includes('--check');
const DRIFTED = [];

if (CHECK_ONLY) {
  process.on('exit', (code) => {
    if (code) return;
    if (DRIFTED.length) {
      console.error(`${DRIFTED.length} generated file(s) differ from what this script produces:`);
      for (const d of DRIFTED) console.error(`  ${d}`);
      console.error('\nEdit the source, then rerun this script without --check.');
      process.exitCode = 1;
      return;
    }
    console.log('all generated files match this script');
  });
}

function write(file, content) {
  const normalized = content.replace(/\r?\n/g, '\n');
  if (CHECK_ONLY) {
    const onDisk = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (onDisk !== normalized) DRIFTED.push(require('path').relative(process.cwd(), file));
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r?\n/g, '\n'), 'utf8');
}

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function jsObject(value) {
  return inspect(value, { depth: null, compact: false, breakLength: 112, maxArrayLength: null });
}

function jsonAssignmentValue(value) {
  return JSON.stringify(value, null, 2).replace(/\n/g, '\n  ');
}

function conceptArray(topic) {
  return alignTopicConcepts(topic.id, [
    { code: `Thematic Focus, ${topic.theme} (${topic.code})`, theme: topic.theme, text: topic.focus, illustrativeExamples: [] },
    { code: topic.loCode, theme: 'Learning Objective', text: topic.lo, illustrativeExamples: [] },
    ...topic.kcs.map(([code, text, examples]) => ({ code, theme: topic.theme, text, illustrativeExamples: examples }))
  ]);
}

function buildLesson(topic) {
  const evidenceImages = topic.lectures.slice(0, 3).map((segment, i) => ({
    title: segment[0], url: i === 0 ? topic.image : TOPIC_ART, sourceUrl: i === 0 ? topic.image : TOPIC_ART,
    caption: segment[1][0], prompt: `How does this evidence support or qualify a claim about ${topic.title.toLowerCase()}?`
  }));
  return {
    meta: {
      course: 'AP WORLD HISTORY', unit: 'Unit 9: Globalization', topic: `Topic ${topic.id}`, title: topic.title,
      subtitle: topic.lo, feedbackToolUrl: COACH_URL, canvasSubmissionNote: SUBMIT_NOTE
    },
    learningTargets: [
      { target: `I can ${topic.lo.charAt(0).toLowerCase()}${topic.lo.slice(1)}`, kc: topic.loCode, theme: topic.theme },
      { target: `I can use ${topic.cases[0]} and ${topic.cases[1]} as evidence and explain how each supports a historical claim.`, kc: topic.kcs[0][0], theme: topic.theme },
      { target: `I can qualify an argument about ${topic.title.toLowerCase()} with a meaningful continuity, variation, or limitation.`, kc: topic.kcs[topic.kcs.length - 1][0], theme: 'Historical Reasoning' }
    ],
    successCriteria: [
      { criteria: `I accurately explain ${topic.cases.slice(0, 3).join(', ')} in relation to the learning objective.`, kc: topic.loCode },
      { criteria: 'I explain how evidence proves my claim instead of listing examples.', kc: 'Evidence and Reasoning' },
      { criteria: 'I address a counterexample, limitation, or continuity that meaningfully qualifies the argument.', kc: 'Complexity' }
    ],
    collegeBoardKeyConcepts: conceptArray(topic),
    stableImages: {
      map: moduleArt(topic.id, 'map'), first10: moduleArt(topic.id, 'first10'),
      contentDelivery: moduleArt(topic.id, 'contentdelivery'), beSurreal: moduleArt(topic.id, 'besurreal'),
      skill: moduleArt(topic.id, 'skill'), checkpoint1: moduleArt(topic.id, 'checkpoint1'),
      evidence: moduleArt(topic.id, 'evidence'), source: moduleArt(topic.id, 'source'),
      beInTheRoom: moduleArt(topic.id, 'beintheroom'), checkpoint2: moduleArt(topic.id, 'checkpoint2')
    },
    map: {
      title: `Mapping ${topic.title}`, url: instructionalMap(topic.id), sourceUrl: instructionalMap(topic.id),
      caption: `Locate the regions tied to ${topic.cases.join(', ')}.`,
      intro: 'Global patterns are produced through specific places, routes, institutions, and unequal relationships. Use geography to test the scale of your claim.',
      prompt: `Which geographic pattern best helps explain ${topic.title.toLowerCase()}, and what evidence supports that conclusion?`,
      notes: topic.cases.map((x) => `${x} connects a local or regional development to a wider global process.`),
      key: topic.cases.map((x) => ({ label: x, detail: `Use ${x} to connect place, process, and consequence.` }))
    },
    ...(DEEP_READINGS[topic.id] ? { deepReading: DEEP_READINGS[topic.id] } : {}),
    first10: {
      title: `First & 10: ${topic.title}`, embedUrl: `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}-capture.html`,
      note: `Read the narrative, answer three AP-thinking questions, build your coach prompt, and return to Topic ${topic.id}.`
    },
    lecture: {
      title: `${topic.title}: Global Patterns and Historical Mechanisms`,
      intro: topic.lo,
      videos: [],
      segments: topic.lectures.map((segment, i) => ({
        title: segment[0], bullets: segment[1],
        image: { title: segment[0], caption: `Evidence anchor ${i + 1} for Topic ${topic.id}.`, url: i === 0 ? topic.image : TOPIC_ART, sourceUrl: i === 0 ? topic.image : TOPIC_ART }
      }))
    },
    beSurreal: {
      title: `BeSurreal: ${topic.surreal[0]}`, desc: topic.surreal[1], intro: topic.surreal[1],
      detail: topic.surreal[1], text: topic.surreal[1], prompt: topic.surreal[2]
    },
    skillBuilder: {
      title: `AP Skill Builder: ${topic.title}`, label: topic.id === '9.9' ? 'Argumentation and extent' : 'Evidence, causation, and qualification',
      intro: 'Build the argument deliberately: claim, evidence mechanism, then qualification.',
      steps: [
        { label: 'Claim', text: `Answer the objective directly: ${topic.lo}` },
        { label: 'Evidence mechanism', text: `Use ${topic.cases[0]} and ${topic.cases[1]}; explain how each proves the claim.` },
        { label: 'Qualification', text: `Use ${topic.cases[2]} or ${topic.cases[3]} to identify a limit, variation, continuity, or counterargument.` }
      ],
      prompt: `Write a defensible thesis answering: ${topic.lo} Include a line of reasoning and a meaningful qualification.`
    },
    checkpoints: [
      {
        title: 'Checkpoint 1: Explain the Pattern', subtitle: 'Checks core content and evidence use.',
        cardDesc: `Connect ${topic.cases[0]} and ${topic.cases[1]} to the learning objective.`,
        learningTargets: [`Explain the core process in Topic ${topic.id}.`], successCriteria: ['Use two accurate examples and explain the relationship.'],
        prompt: `Explain how ${topic.cases[0]} and ${topic.cases[1]} support an answer to this objective: ${topic.lo}`,
        responseType: 'Checkpoint 1', terms: topic.cases, focus: ['Answer the objective', 'Use specific evidence', 'Explain how the evidence proves the claim']
      },
      {
        title: 'Checkpoint 2: Defend and Qualify', subtitle: 'Checks the complete Topic argument.',
        cardDesc: 'Develop a defensible, qualified AP argument.',
        learningTargets: [topic.lo], successCriteria: ['State a claim, explain evidence, and qualify the conclusion.'],
        prompt: `Develop and qualify an argument in response to: ${topic.lo}`,
        responseType: 'Checkpoint 2', terms: topic.cases,
        focus: ['Defensible thesis', 'Two explained examples', 'Meaningful qualification or counterargument']
      }
    ],
    evidenceLab: {
      title: `Evidence Lab: ${topic.title}`, task: 'Select one evidence card and explain what it reveals, what it cannot prove alone, and how it supports a claim.',
      intro: 'Evidence becomes useful when its relevance and limitation are explained.',
      prompt: `Which evidence best supports a defensible answer to: ${topic.lo}`
    },
    images: evidenceImages,
    primarySource: {
      title: `Primary Source: ${topic.source[0]}`, intro: topic.source[1], text: topic.source[1],
      questions: topic.source[2], prompt: `Use the source and one outside example to answer the Topic ${topic.id} learning objective.`
    },
    beInTheRoom: topic.scenario ? { url: `../beintheroom/unit-9/${topic.scenario.file}`, desc: topic.scenario.dilemma }
      : { url: '', desc: 'The Unit 9 synthesis capstone uses the full evidence set instead of a separate simulation.' }
  };
}

function dataFile(topic) {
  return `(() => {\n  const brandCss = '../assets/css/behistorical-brand-lock.css';\n  if (!document.querySelector(\`link[href="\${brandCss}"]\`)) {\n    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = brandCss; document.head.appendChild(link);\n  }\n})();\n\nwindow.BEHISTORICAL_LESSON = ${jsObject(buildLesson(topic))};\n`;
}

// Module 07's authored pool, emitted into the generated renderer config. A topic
// with no entry emits nothing, the same self-hiding contract the video block and
// the deep-reading banner use.
function module07Block(topic) {
  const pool = MODULE07_EVIDENCE[topic.id];
  if (!pool) return '';
  const lab = { title: 'Evidence Lab: Build and Test a Claim', task: MODULE07_TASK, prompt: pool.prompt };
  return `\n  lesson.evidenceLab = ${jsonAssignmentValue(lab)};\n  lesson.images = ${jsonAssignmentValue(pool.cards)};`;
}

function rendererConfig(topic) {
  const scenario = topic.scenario
    ? { url: `../beintheroom/unit-9/${topic.scenario.file}`, desc: topic.scenario.dilemma }
    : { url: '', desc: 'The Unit 9 synthesis capstone uses the full evidence set instead of a separate simulation.' };
  return `// Topic ${topic.id}, runtime-authoritative CED alignment, effective Fall 2026.\n(() => {\n  const lesson = window.BEHISTORICAL_LESSON;\n  if (!lesson) return;\n  lesson.meta.canvasSubmissionNote = '${SUBMIT_NOTE}';\n  lesson.meta.feedbackToolUrl = '${COACH_URL}';\n  lesson.collegeBoardKeyConcepts = ${jsonAssignmentValue(conceptArray(topic))};\n  lesson.first10 = { ...lesson.first10, embedUrl: 'first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}-capture.html' };\n  lesson.beInTheRoom = ${jsObject(scenario)};${module07Block(topic)}\n})();\n`;
}

function lessonShell(topic) {
  const templatePath = path.join(UNIT, 'lesson-9-3-environment.html');
  let html = fs.readFileSync(templatePath, 'utf8');
  html = html.replace(/<title>BeHistorical \| AP World 9\.3<\/title>/, `<title>BeHistorical | AP World ${topic.id}</title>`);
  html = html.replace(/\.\.\/assets\/data\/lesson-9-3-environment\.js[^"']*/, `../assets/data/lesson-${topic.id.replace('.', '-')}-${topic.slug}.js`);
  html = html.replace(/\.\.\/assets\/data\/lesson-9-3-renderer-config\.js[^"']*/, `../assets/data/lesson-${topic.id.replace('.', '-')}-renderer-config.js`);
  return html;
}

function first10Page(topic) {
  const f = F10_CONTENT[topic.id] || topic.f10;
  if (f) {
    return renderFirst10Page({
      unit: 9,
      topicId: topic.id,
    coachContext: coachContextFor(topic.id),
      coachContext: coachContextFor(topic.id),
      title: topic.title,
      subtitle: f.deck,
      learningObjective: topic.lo,
      skillTags: f.skillTags,
      supportCards: f.support,
      vocabulary: f.vocab,
      sections: f.sections,
      skills: f.questions.map((q) => q.skill),
      questions: f.questions,
      takeaway: f.takeaway,
      lessonHref: `lesson-${topic.id.replace('.', '-')}-${topic.slug}.html`,
      coachUrl: COACH_URL,
      submitNote: SUBMIT_NOTE
    });
  }
  const skills = topic.id === '9.9'
    ? ['Developments and Processes', 'Continuity and Change', 'Argumentation']
    : ['Developments and Processes', 'Causation', 'Argumentation'];
  const questions = [
    'What historical process is introduced, and which specific example best illustrates it?',
    'Explain one cause, effect, continuity, or change using because, therefore, while, or although.',
    'What claim can you defend about the topic, and what evidence would qualify it?'
  ];
  return renderFirst10Page({
    unit: 9,
    topicId: topic.id,
    coachContext: coachContextFor(topic.id),
    title: topic.title,
    subtitle: 'Read for historical mechanism, specific evidence, continuity and change, and a defensible qualification.',
    learningObjective: topic.lo,
    vocabulary: topic.cases,
    sections: topic.reading.map((section, index) => ({
      label: `Part ${index + 1}`,
      heading: section[0],
      text: section[1],
      skill: skills[index]
    })),
    skills,
    questions,
    takeaway: topic.reading[2][1],
    lessonHref: `lesson-${topic.id.replace('.', '-')}-${topic.slug}.html`,
    coachUrl: COACH_URL,
    submitNote: SUBMIT_NOTE
  });
}


function capturePage(topic) {
  const src = `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}.html`;
  return captureWrapper(src, `First &amp; 10 Capture | Topic ${topic.id}`);
}

function scenarioPage(s) {
  const payload = JSON.stringify(s).replace(/</g, '\\u003c');
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BeInTheRoom | ${esc(s.title)}</title><link rel="stylesheet" href="../../assets/css/behistorical-brand-lock.css"><style>:root{--ink:#13233c;--gold:#d4a84f;--paper:#f3ecdc}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.55 Georgia,serif}header,main,footer{max-width:980px;margin:auto;padding:24px}header{background:var(--ink);color:#fff}h1,h2{font-family:Montserrat,sans-serif}.panel{background:#fff;padding:22px;margin:18px 0;border-top:5px solid var(--gold)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.choice{display:block;border:1px solid #8791a0;padding:14px;border-radius:6px;cursor:pointer}.choice:has(input:checked){outline:3px solid var(--gold)}textarea{width:100%;min-height:130px;padding:12px}button,a.button{display:inline-block;background:var(--ink);color:#fff;padding:10px 14px;border:0;border-radius:4px;text-decoration:none;margin:5px}.status{font-weight:bold;color:#76530f}</style></head><body><header><a href="../index.html" style="color:#f4cf7b">← BeInTheRoom hub</a><div>${esc(s.date)}</div><h1>${esc(s.title)}</h1><p>${esc(s.dilemma)}</p></header><main><section class="panel"><h2>1. Choose a role</h2><div class="grid" id="roles"></div></section><section class="panel"><h2>2. Review the evidence</h2><div id="evidence"></div></section><section class="panel"><h2>3. Make the decision</h2><div id="choices"></div></section><section class="panel"><h2>4. Defend it historically</h2><label for="argument">Write a claim, use two checked facts, and address one tradeoff.</label><textarea id="argument"></textarea><p><button onclick="saveWork()">Save locally</button><button onclick="buildCoachPrompt()">Build AI Coach prompt</button><a class="button" id="magicschool-open-link" data-default-href="${COACH_URL}" href="${COACH_URL}" target="_blank" rel="noopener">Open MagicSchool</a></p><div class="status" id="status"></div><textarea id="coach" readonly aria-label="AI Coach prompt"></textarea></section><section class="panel"><h2>AP Reflection</h2><p>How does this dilemma illuminate Topic ${esc(s.id)}? Explain how institutional power, historical context, and competing interests constrained the available responses.</p><textarea id="reflection"></textarea><p>${SUBMIT_NOTE}</p></section></main><footer>BeHistorical · BeInTheRoom</footer><script src="../../assets/js/behistorical-classroom.js"></script><script src="../../assets/js/behistorical-beintheroom-capture.js"></script><script>var SCENARIO=${payload};var KEY='behistorical-room-'+SCENARIO.id;var REFLECTION_PROMPT='How does this dilemma illuminate Topic '+SCENARIO.id+'? Explain how institutional power, historical context, and competing interests constrained the available responses.';function render(){roles.innerHTML=SCENARIO.roles.map(function(x,i){return'<label class="choice"><input type="radio" name="role" value="'+i+'"> '+x+'</label>';}).join('');evidence.innerHTML=SCENARIO.evidence.map(function(x,i){return'<label class="choice"><input type="checkbox" name="fact" value="'+i+'"> '+x+'</label>';}).join('');choices.innerHTML=SCENARIO.choices.map(function(x,i){return'<label class="choice"><input type="radio" name="decision" value="'+i+'"> '+x+'</label>';}).join('');var saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved){if(saved.role!=null)document.querySelector('[name=role][value="'+saved.role+'"]').checked=true;if(saved.decision!=null)document.querySelector('[name=decision][value="'+saved.decision+'"]').checked=true;(saved.facts||[]).forEach(function(v){document.querySelector('[name=fact][value="'+v+'"]').checked=true;});argument.value=saved.argument||'';reflection.value=saved.reflection||'';}}function state(){var r=document.querySelector('[name=role]:checked'),d=document.querySelector('[name=decision]:checked');return{role:r&&r.value,decision:d&&d.value,facts:Array.from(document.querySelectorAll('[name=fact]:checked')).map(function(x){return x.value;}),argument:argument.value,reflection:reflection.value};}function saveWork(){localStorage.setItem(KEY,JSON.stringify(state()));status.textContent='Saved on this device.';if(window.BHBeInTheRoomCapture)window.BHBeInTheRoomCapture.save(SCENARIO.id,REFLECTION_PROMPT,reflection.value);}function buildCoachPrompt(){var s=state(),role=s.role==null?'not chosen':SCENARIO.roles[s.role],decision=s.decision==null?'not chosen':SCENARIO.choices[s.decision],facts=s.facts.map(function(i){return SCENARIO.evidence[i];});coach.value='Socrates, I am in a BeInTheRoom simulation for Topic '+SCENARIO.id+' and you are in the room with me. I am playing '+role+'. My decision: '+decision+'. Evidence: '+facts.join(' | ')+'. My reasoning: '+s.argument+'. Coach me on one thing: is my decision defensible given my role, my evidence, and the tradeoff I accepted? Name the weakest part of it and tell me what to revise. After I revise once, tell me whether it holds. When it does, I will step out of character and answer the AP Reflection box on this page, which is what reaches Canvas through Gather All My Work on the lesson page. Give me one thing to work on at a time. Do not write my final answer for me.';}document.addEventListener('DOMContentLoaded',render);reflection.addEventListener('input',saveWork);(function(){var link=document.getElementById('magicschool-open-link');if(link&&window.BHClassroom){link.href=window.BHClassroom.resolveMagicSchoolUrl(link.getAttribute('data-default-href')||link.href);}})();</script></body></html>\n`;
}

function updateHub() {
  const file = path.join(UNIT, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  for (const topic of topics) {
    const marker = `<div class="unit-num">TOPIC ${topic.id}</div>`;
    const pos = html.indexOf(marker);
    if (pos < 0) throw new Error(`Unit hub marker not found: ${topic.id}`);
    const anchor = html.lastIndexOf('<a class="unit-card" href="', pos);
    const start = html.indexOf('href="', anchor) + 6;
    const end = html.indexOf('"', start);
    html = html.slice(0, start) + `lesson-${topic.id.replace('.', '-')}-${topic.slug}.html` + html.slice(end);
    // Hub card artwork is two <img> layers: the local map underneath, the
    // photograph on top with an onerror that removes itself. Rewrite the
    // photograph's src, and add the pair if this card has not been converted.
    const refreshedPos = html.indexOf(marker);
    const refreshedAnchor = html.lastIndexOf('<a class="unit-card" href="', refreshedPos);
    const cardOpenEnd = html.indexOf('>', refreshedAnchor) + 1;
    const photoAt = html.indexOf('class="card-photo" src="', refreshedAnchor);
    const artAt = html.indexOf('class="card-art"', refreshedAnchor);
    if (photoAt > 0 && photoAt < refreshedPos) {
      const srcStart = photoAt + 'class="card-photo" src="'.length;
      const srcEnd = html.indexOf('"', srcStart);
      html = html.slice(0, srcStart) + topic.image + html.slice(srcEnd);
    } else if (artAt < 0 || artAt > refreshedPos) {
      const attrs = 'alt="" aria-hidden="true" loading="lazy" decoding="async"';
      const art = `../assets/images/instructional-maps/topic-${topic.id.replace('.', '-')}.svg`;
      const layers = `<img class="card-art" src="${art}" ${attrs}>`
        + `<img class="card-photo" src="${topic.image}" ${attrs} onerror="this.remove()">`;
      html = html.slice(0, cardOpenEnd) + layers + html.slice(cardOpenEnd);
    }
  }
  write(file, html);
}

fs.mkdirSync(ROOM, { recursive: true });
for (const topic of topics) {
  const stem = `lesson-${topic.id.replace('.', '-')}-${topic.slug}`;
  write(path.join(DATA, `${stem}.js`), dataFile(topic));
  write(path.join(DATA, `lesson-${topic.id.replace('.', '-')}-renderer-config.js`), rendererConfig(topic));
  write(path.join(UNIT, `${stem}.html`), lessonShell(topic));
  write(path.join(UNIT, `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}.html`), first10Page(topic));
  write(path.join(UNIT, `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}-capture.html`), capturePage(topic));
  if (topic.scenario) write(path.join(ROOM, topic.scenario.file), scenarioPage({ id: topic.id, ...topic.scenario }));
}
updateHub();
console.log('Built Unit 9 Topics 9.4–9.9 and five BeInTheRoom scenarios.');
