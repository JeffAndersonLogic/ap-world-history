#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { renderRoomPage } = require('./lib/room-v2-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'beintheroom', 'unit-4');

const R = (id, name, position, power, goals, fears, lens, preference, blindSpot) => ({ id, name, position, power, goals, fears, lens, preference, blindSpot });
const E = (id, label, text, why) => ({ id, label, text, why });
const O = (id, title, action, benefits, worries, tradeoff) => ({ id, title, action, benefits, worries, tradeoff });
const D = (id, title, prompt, options) => ({ id, title, prompt, options });

const scenarios = [
  {
    id: '4.1', unit: '4', topicTitle: 'Technological Innovations', file: 'the-cape-route-brief.html',
    title: 'The *Cape Route Brief*', location: 'Royal council, Lisbon', date: '1487',
    lessonUrl: '../../unit-4/lesson-4-1-technological-innovations.html',
    alignment: { theme: 'Technology and Innovation (TEC)', objective: 'Explain how cross-cultural interactions resulted in the diffusion of technology and facilitated changes in patterns of trade and travel from 1450 to 1750.', skill: 'Causation and contextualization', keyConcepts: ['KC-4.1.II', 'KC-4.1.II.A', 'Maritime technology and wind systems'] },
    premise: [
      'King João II is planning a new voyage down the west coast of Africa, past the farthest point any Portuguese ship has reached. He wants a sea route into the Indian Ocean. No Portuguese captain has yet sailed around the southern tip of Africa and come home to prove it.',
      'There is no single magic invention to rely on. The pilots will use tools and knowledge borrowed from many places: a compass, ways of measuring latitude from the sun and stars, triangular lateen sails from the Mediterranean, stronger hulls, sea charts, what African coastal peoples know, and years of Portuguese experience with Atlantic winds.',
      'You are advising on the voyage that Bartolomeu Dias will lead. Your plan has to show how borrowed tools, ship design and knowledge of the winds work together, and how the ships will get home.'
    ],
    centralQuestion: 'How should the expedition combine borrowed tools, ship design and knowledge of the winds to sail around southern Africa and get home again?',
    roles: [
      R('pilot', 'Royal Pilot', 'You turn compass headings, latitude readings, depth soundings and experience into a working course.', 'You steer the voyage at sea, but nobody can yet measure how far east or west a ship is, and readings fail in bad weather.', 'Bring the ships home with a route that can be sailed again.', 'A small error in your estimates, or an unknown current, could carry every ship too far to recover.', 'A tool only helps when an experienced pilot reads it alongside everything else.', 'Take several readings, keep careful logs, and change course carefully.', 'You may care too little about new ship designs and about the king’s wish for a big discovery.'),
      R('shipwright', 'Lisbon Shipwright', 'You advise on the hull, the sails, how much the ships can carry, repair supplies and handling.', 'You can change the ships before they leave, but every improvement costs space, money or speed.', 'Build ships that survive Atlantic storms and can still turn quickly near an unknown coast.', 'A big cargo ship may be too slow; a small caravel may not carry enough food and water for a long trip.', 'Sailing the ocean means balancing speed, strength and how much a ship can carry.', 'A mixed fleet, with ships that do different jobs, and spare sails and rope.', 'You may treat the crew and the pilot’s knowledge as less important than the ship itself.'),
      R('cosmographer', 'Royal Mathematician and Chart Keeper', 'You compare charts, tables of the sun’s position, travelers’ reports and astronomy.', 'You keep the official charts, but much of the African coast on them is still a guess.', 'Make sure what each voyage learns is written down and used by the next one.', 'A wrong guess copied onto official charts could mislead several voyages.', 'Knowledge from the Islamic world, the Mediterranean and earlier Atlantic voyages becomes powerful when it is written down and tested.', 'Keep standard logs and update the charts after every voyage.', 'Keeping charts locked away can slow down fixing mistakes and keep useful knowledge from working sailors.'),
      R('interpreter', 'African Interpreter', 'You come from the West African coast and speak languages the Portuguese do not. You may not have chosen this voyage.', 'The captains need you to talk to people on shore, but they decide where the ships go and whether you are set ashore.', 'Reach the coast safely and help the people the ships meet understand what these strangers want.', 'Landing in the wrong place, or bad behavior by the crew, could start violence that you get caught in.', 'The people who live on the coast already know its harbors, water, food and trade, and the voyage depends on them.', 'Land carefully, trade fairly, and ask local people before guessing.', 'You know the coast near home far better than coasts thousands of miles south, where the languages are different.')
    ],
    evidence: [
      E('compass', 'Magnetic Compass', 'A compass showed direction when clouds or open water hid every landmark.', 'First described in China; how it reached Europe is still debated.'),
      E('astrolabe', 'Mariner’s Astrolabe', 'By the 1480s, a heavy, simple sea astrolabe let pilots measure the sun’s height at noon and work out their latitude.', 'Adapted from the astrolabe that astronomers in the Islamic world developed.'),
      E('tables', 'Tables of the Sun', 'To turn a noon reading into latitude, a pilot needed a table giving the sun’s position for each day of the year.', 'Built on astronomy kept and corrected in the Islamic world and in Iberia.'),
      E('caravel', 'Caravel', 'A small, quick ship whose triangular lateen sails could sail at an angle against the wind and explore close to a coast.', 'Shows what ship design added, and what it could not carry.'),
      E('supplyship', 'Stores Ship', 'A larger supply ship could carry more food and water but was harder to handle near an unknown shore.', 'Creates a tradeoff between range and handling.'),
      E('volta', 'Volta do Mar', 'Portuguese sailors had learned that coming home from West Africa meant first sailing west and north, far out into the open Atlantic, to catch the westerlies that blew back toward Portugal.', 'Makes knowledge of the winds part of the technology.'),
      E('charts', 'Sea Charts and Logs', 'Compass bearings, harbors, depths and dangers were added after each voyage.', 'Shows how knowledge built up from one voyage to the next.'),
      E('african', 'African Coastal Knowledge', 'Interpreters, merchants and coastal communities knew harbors, fresh water, food and trade that the Portuguese needed.', 'Shows that the voyage depended on African knowledge, not only European tools.'),
      E('secrecy', 'Royal Control of Charts', 'The Portuguese crown tried to keep its best charts and route information from rival kingdoms, though sailors and charts still moved between countries.', 'Shows why knowledge spread and was guarded at the same time.'),
      E('longitude', 'No Way to Measure Longitude', 'Pilots could work out how far north or south they were, but not how far east or west.', 'Keeps the limits of the tools visible.')
    ],
    decisions: [
      D('fleet', 'Design the fleet', 'Which mix of ships best balances exploring, surviving and carrying supplies?', [
        O('mixed', 'Send two caravels and a stores ship', 'Use quick exploring ships backed by a larger supply ship.', 'The pilots can go farther, and one lost ship is not the end.', 'The slower supply ship may hold everyone back in storms or near the coast.', 'More range costs speed and makes the ships harder to keep together.'),
        O('caravels', 'Send only small caravels', 'Choose speed, shallow hulls and the ability to explore an unknown coast.', 'Crews can check bays and react quickly.', 'Food, water, repair supplies and trade goods run short.', 'Moving quickly raises the risk of running out of what the crew needs.'),
        O('carracks', 'Send large cargo ships', 'Build the voyage around big, strong ships ready for trade.', 'The crown can carry plenty of supplies and bring back valuable cargo.', 'Big ships are hard to handle near a coast nobody has mapped.', 'The ships are built for trade before anyone knows the route.')
      ]),
      D('route', 'Choose how to search south', 'How should the pilots respond when winds and currents along the coast block the way south?', [
        O('offshore', 'Swing far out into the South Atlantic', 'Use what Portuguese sailors know about the winds to leave the coast and look for westerly winds farther south.', 'The ships may get past the contrary coastal winds and round the cape.', 'Land disappears and errors in the pilot’s estimates add up.', 'The best wind route gives up knowing exactly where you are.'),
        O('coastal', 'Stay close to the African coast', 'Map every bay and only move forward while land and depth soundings are in reach.', 'The charts get more detailed and the ships can find water and food.', 'Contrary winds and rocky shores can stop or wreck the ships.', 'Better maps slow the search for the way around.'),
        O('staged', 'Set up a new supply stop first', 'Spend this voyage building safe stops for supplies and information, and try the final rounding later.', 'Later voyages start with better support.', 'The king waits longer for his breakthrough and pays for another voyage.', 'Less risk means slower discovery.')
      ]),
      D('return', 'Plan the way home', 'Once the ships round the cape, how should they get back to Lisbon?', [
        O('volta', 'Use the volta do mar again', 'Sail north, then swing far west into the open Atlantic to pick up the winds that blow toward Portugal.', 'The crew sails with the wind instead of fighting it for months.', 'The ships are out of sight of land for weeks and depend on the pilot’s latitude readings.', 'A faster trip home costs the comfort of seeing land.'),
        O('hug', 'Follow the coast back north', 'Sail north along Africa, stopping for water and at the Portuguese post at Mina.', 'Land, food and water are always close, and at first the southeast trade winds and the current help the ships north.', 'From West Africa north, the trade winds and the Canary Current blow against the ships, so the last part of the trip could take months.', 'Staying near land is safer, but the final leg home is slow and exhausting.'),
        O('wait', 'Wait for a change in the wind', 'Anchor at a safe harbor in southern Africa until the winds shift, then head north.', 'The crew can rest and trade for food.', 'Nobody knows when or whether the wind will change, and supplies keep shrinking.', 'Waiting avoids a hard choice but may waste the whole season.')
      ])
    ],
    reflectionPrompt: 'Explain why no single invention got Dias around Africa and home. Connect at least two borrowed tools, one ship design, and what sailors knew about the winds to a new sea route.',
    sources: [
      { label: 'Royal Museums Greenwich, What is a mariner’s astrolabe?', url: 'https://www.rmg.co.uk/stories/space-astronomy/what-mariners-astrolabe' },
      { label: 'Encyclopaedia Britannica, Bartolomeu Dias', url: 'https://www.britannica.com/biography/Bartolomeu-Dias' },
      { label: 'Encyclopaedia Britannica, European exploration: The Age of Discovery', url: 'https://www.britannica.com/topic/European-exploration/The-Age-of-Discovery' }
    ]
  },
  {
    id: '4.4', unit: '4', topicTitle: 'Maritime Empires Established', file: 'the-goa-fort-council.html',
    title: 'The *Goa Fort Council*', location: 'Goa, Estado da Índia', date: '1515',
    lessonUrl: '../../unit-4/lesson-4-4-maritime-empires-established.html',
    alignment: { theme: 'Governance (GOV) and Economic Systems (ECN)', objective: 'Explain the process of state building and expansion among various empires and states in the period from 1450 to 1750. Explain the continuities and changes in economic systems and labor systems from 1450 to 1750.', skill: 'Continuity and change', keyConcepts: ['KC-4.3.II.A.i', 'KC-4.3.II.A.iii', 'KC-4.3.II.C'] },
    premise: [
      'Portugal has seized Goa in 1510, Malacca in 1511, and Hormuz in 1515. Afonso de Albuquerque’s victories give the Crown fortified positions from the western Indian Ocean toward Southeast Asia, but Portugal lacks the people and money to conquer the vast regions behind those ports.',
      'The Indian Ocean was already a dense commercial world. Gujarati, Arab, Persian, African, Malay, Chinese, and many other merchants continue to move textiles, spices, horses, metals, and food through regional networks. Portuguese cannon can threaten ships and ports; it cannot replace those traders or their knowledge.',
      'With Albuquerque dead, Goa’s council must decide what kind of empire to establish: a chain of forts and sea passes, a wider territorial colony, or a negotiated place inside existing markets. Every option depends on local allies, and every option changes who is forced to do what and who keeps the profit.'
    ],
    centralQuestion: 'How should Portugal build a maritime empire that lasts in the Indian Ocean, when its warships can seize key ports but it still cannot do without the Asian merchants, rulers, and trade networks that were already there?',
    roles: [
      R('captain', 'Portuguese Fortress Captain', 'You command soldiers, cannon, and ships responsible for Goa and nearby sea lanes.', 'You can use force at key points, but new soldiers and pay arrive slowly from Lisbon.', 'Hold Goa, protect Portuguese shipping, and deter hostile fleets.', 'A scattered garrison may lose both the port and the fleet to a regional coalition.', 'A few forts at narrow sea passages let a small force control a lot.', 'Prioritize forts, patrols, and control of strategic harbors.', 'Controlling the sea does not make merchants trust you or bring food from inland.'),
      R('factor', 'Crown Factor (Royal Trade Manager)', 'You manage the king’s warehouses, customs, accounts, and the cargoes only the Crown may trade (its monopoly cargoes).', 'You can license trade and purchase goods, but private merchants and corruption evade Crown rules.', 'Make the Estado da Índia, Portugal\'s government in Asia, pay for itself.', 'Expensive garrisons and forced trading rules may drive merchants to rival ports.', 'Empire survives when customs and high-value trade pay for force.', 'Use cartaz passes and targeted monopolies rather than territorial conquest.', 'Money counted in the account books can hide the violence, and the trade that goes on without Portugal.'),
      R('gujarati', 'Gujarati Merchant-Broker', 'You connect textiles, credit, shipping, and commercial communities across western India.', 'Portuguese officials need your networks, but can seize ships or restrict routes.', 'Keep trade moving, protect partners, and prevent one armed state from dictating all terms.', 'Paying for passes and being forced into Portuguese ports may wipe out your profit, or cost you your ship.', 'Commercial networks outlast conquerors because trust and credit cross political borders.', 'Negotiate predictable duties and freedom for regional trade.', 'Your focus on merchant access may overlook laborers and communities harmed by war and extraction.'),
      R('goan', 'Goan Municipal and Landholding Representative', 'You speak for local households, cultivators, temples, churches, and officials adapting to new rule.', 'Your people know the land and grow the food, which gives you bargaining power, but the Portuguese control the soldiers and choose the officials.', 'Preserve property, worship, irrigation, and a meaningful role in government.', 'Aggressive conversion, confiscation, or military taxation may turn occupation into rebellion.', 'Ports cannot function without the society and countryside behind them.', 'Secure local law, negotiated taxation, and municipal participation.', 'Deals with local leaders may protect your own circle more than poorer residents.')
    ],
    evidence: [
      E('goa', 'Goa Captured, 1510', 'Albuquerque took Goa, an island port with a good harbor, and made it a Portuguese base on India’s west coast.', 'Shows a captured port becoming a Portuguese base.'),
      E('malacca', 'Malacca Captured, 1511', 'Holding Malacca put Portugal on the main route between the Indian Ocean and the South China Sea.', 'Explains the choke-point strategy.'),
      E('hormuz', 'Hormuz Fortified, 1515', 'Hormuz, at the mouth of the Persian Gulf, had owed Portugal tribute since 1507; in 1515 Albuquerque returned and built a Portuguese fortress there.', 'Shows empire built from a few key ports, some kept by deals with local rulers.'),
      E('limited', 'Limited Portuguese Manpower', 'Portugal could garrison key positions but could not occupy the Indian Ocean’s enormous inland regions.', 'Sets the central strategic constraint.'),
      E('networks', 'Existing Asian Trade Networks', 'Merchants trading between Asian ports, and the regional markets they served, are still trading as they did before the Portuguese came.', 'Prevents an inaccurate replacement narrative.'),
      E('cartaz', 'Cartaz Sea Pass', 'Portuguese authorities required many vessels to buy passes, follow approved routes, and face inspection.', 'Shows coercive regulation of maritime trade.'),
      E('cannon', 'Naval Cannon and Forts', 'Ship-mounted artillery and fortified ports let a small force threaten concentrated maritime targets.', 'Explains the military mechanism of expansion.'),
      E('brokers', 'Brokers, Pilots, and Credit', 'European officials depended on local navigators, interpreters, suppliers, financiers, and merchant communities.', 'Shows that even the strong side needed local help.'),
      E('rivals', 'Mamluk and Regional Rivals', 'Egypt’s Mamluk sultans, using Ottoman timber and guns, sent fleets against the Portuguese (Chaul 1508, Diu 1509, and a new fleet from Suez in 1515), and rulers on the Indian coast, such as Calicut’s, fought them too.', 'Shows that rulers near and far fought back.'),
      E('conversion', 'Mission and Conversion', 'The Crown joined trade and war to Christian mission, creating support and conflict in occupied communities.', 'Connects religious and political expansion.')
    ],
    decisions: [
      D('shape', 'Choose the imperial shape', 'Where should Portugal concentrate scarce troops and ships?', [
        O('network', 'Build a fortified port network', 'Hold Goa and selected choke points while projecting naval power between them.', 'A few forts let a small army control the key routes.', 'Unfortified coasts and regional trade remain outside direct control.', 'Portugal reaches far by sea but controls little land.'),
        O('territory', 'Conquer the land behind the coast', 'Expand inland from Goa to secure food, taxes, converts, and a larger territorial base.', 'The regime gains resources and a defensible colony.', 'Occupation consumes troops and provokes rulers and communities beyond the port.', 'Taking more land means Portugal can reach fewer places.'),
        O('treaties', 'Rely on treaties and tribute', 'Negotiate access with rulers and fortify only the most vulnerable commercial stations.', 'Trade expands at lower military cost.', 'Agreements depend on local politics and may collapse when allies change.', 'Deals are easier to make but harder to enforce than conquest.')
      ]),
      D('shipping', 'Regulate Indian Ocean shipping', 'How hard should the Estado da Índia push the cartaz system?', [
        O('strict', 'Require passes and approved ports', 'Seize unlicensed ships and compel high-value cargoes through Portuguese customs.', 'Crown officials and licensed merchants gain money and power over trade.', 'Merchants reroute, resist, or seek armed protection from rival states.', 'The Crown earns more by getting in the way of trade that already worked.'),
        O('targeted', 'Target only strategic cargoes and rivals', 'License ordinary regional trade while controlling war materials and selected spices.', 'Most markets continue while Portugal focuses enforcement.', 'Smuggling, and goods that are hard to classify, weaken the Crown\'s control of its cargoes.', 'Working with merchants means the Crown keeps less of the profit.'),
        O('open', 'Use low duties and open access', 'Make Goa attractive through predictable customs rather than forced routing.', 'Merchants voluntarily bring traffic, supplies, and information.', 'Lisbon may see the policy as surrendering monopoly gains.', 'Goa grows richer, but Portugal controls less of the sea.')
      ]),
      D('governance', 'Govern Goa', 'How should Portuguese officials rule the occupied city and countryside?', [
        O('accommodate', 'Preserve local law and municipal roles', 'Recognize property and community institutions while collecting negotiated taxes.', 'Residents and local elites have reasons to cooperate.', 'Officials and missionaries may oppose limits on royal and religious power.', 'Peace is bought by sharing power.'),
        O('assimilation', 'Impose Portuguese institutions quickly', 'Replace offices, expand conversion policy, and standardize law under the Crown.', 'The regime creates a visibly Portuguese capital.', 'Coercion risks flight, resistance, and loss of essential expertise.', 'Forcing one way of life on Goa weakens the people the port depends on.'),
        O('merchantcity', 'Empower resident merchant households', 'Give the casados (Portuguese men who married and settled in Goa) and approved local brokers broad trading and city privileges.', 'Families who stay put money into the city and help trade run.', 'A small group of rich families may slip out of Crown control and exploit other residents.', 'Families who stay for good come to want different things than Lisbon does.')
      ])
    ],
    reflectionPrompt: 'Explain ONE thing Portugal changed in the Indian Ocean (forts, cannon, or the cartaz) and ONE thing that kept going (Asian merchants, their trade networks, or local rulers). Then explain why what kept going limited how much Portugal could control.',
    sources: [
      { label: 'Metropolitan Museum of Art, Sultans of Deccan India, 1500–1700', url: 'https://resources.metmuseum.org/resources/metpublications/pdf/Sultans_of_Deccan_India_1500_1700.pdf' },
      { label: 'Encyclopaedia Britannica, Afonso de Albuquerque', url: 'https://www.britannica.com/biography/Afonso-de-Albuquerque' },
      { label: 'Encyclopaedia Britannica, India: The Portuguese', url: 'https://www.britannica.com/place/India/The-Portuguese' }
    ]
  },
  {
    id: '4.5', unit: '4', topicTitle: 'Maritime Empires Maintained and Developed', file: 'the-manila-silver-council.html',
    title: 'The *Manila Silver Council*', location: 'Manila, Spanish Philippines', date: '1594',
    lessonUrl: '../../unit-4/lesson-4-5-maritime-empires-maintained.html',
    alignment: { theme: 'Governance (GOV) and Economic Systems (ECN)', objective: 'Explain how rulers employed economic strategies to consolidate and maintain power throughout the period from 1450 to 1750. Explain the continuities and changes in networks of exchange from 1450 to 1750.', skill: 'Continuity and change', keyConcepts: ['KC-4.1.IV.C', 'KC-4.1.IV', 'KC-4.3.III.ii'] },
    premise: [
      'Manila has been a Spanish city since 1571. Every year galleons sail in from Acapulco, in Mexico, loaded with American silver, and every year Chinese junks from Fujian sail in with silk, porcelain and other goods to trade for it. Silver from the mines of Spanish America is flowing to China, because China now collects most of its taxes in silver.',
      'The king of Spain is worried. In 1593 he ordered that only two galleons a year may sail between Manila and Acapulco, and that the goods they carry from Manila must not be worth more than a fixed amount. His advisers want American silver to reach Spain, not China, and Spanish silk makers complain that cheap Chinese silk is taking their buyers. But Manila\'s Spanish settlers live on this trade, and the Chinese merchants and craftsmen of the Parián, the Chinese quarter outside the city walls, far outnumber them.',
      'Rivals want this trade too, even subjects of Spain\'s own king. In 1587 an English captain, Thomas Cavendish, captured the Manila galleon Santa Ana off the coast of Mexico. The Portuguese merchants of Macau, who since 1580 have shared Spain\'s king and who sell Chinese silk to the Spanish themselves, resent Manila\'s direct trade with China. The governor\'s council must decide how to obey the king, how to deal with the Chinese merchants, and how to protect the silver.'
    ],
    centralQuestion: 'How should Manila\'s council keep the silver-for-silk trade paying for the colony, when the king wants to limit it, Chinese merchants run it, and rivals want to take it?',
    roles: [
      R('treasury', 'Royal Treasury Official', 'You collect the king\'s customs duties at Manila and report to Spain.', 'You can inspect cargoes and enforce the 1593 rules, but the governor and the settlers depend on breaking them.', 'Keep the colony loyal to the king\'s rules and send more silver toward Spain.', 'If you enforce the limits strictly, the colony may go broke, and the king may blame you for that too.', 'In a mercantilist empire, a colony\'s trade should serve the mother country.', 'Enforce the two-ship limit and the value limit, and count every chest of silver.', 'The rules on paper may not match how the trade really works.'),
      R('settler', 'Spanish Settler and Galleon Shipper', 'You hold a share of the space on the galleon, and your family\'s income comes from shipping Chinese silk to Acapulco.', 'The city council listens to you, but Mexico City and Madrid make the rules.', 'Keep as much silk on the galleon as possible, and keep the price of Chinese goods low.', 'The value limit may ruin you, and pirates may take the ship.', 'Manila exists because of this trade; without it, nobody would stay.', 'Ask the king to raise the limit, and quietly ship more than the rules allow.', 'You depend on Chinese merchants you do not trust and often mistreat.'),
      R('sangley', 'Chinese Merchant from Fujian', 'You sail to Manila each year with silk and porcelain and trade them for silver. Your family has traded in these waters for generations.', 'The Spanish need your goods, but they tax you, confine you to the Parián, and can expel or punish you.', 'Sell your goods for silver at a fair price and return home safely.', 'New taxes, sudden rules, or violence could ruin your voyage, or worse.', 'Trade in these seas is older than the Spanish city and will go on with or without it.', 'Keep the trade open, with fair taxes and safety in the Parián.', 'You may care more about this season\'s profit than about the craftsmen and families who live in Manila all year.'),
      R('friar', 'Dominican Friar', 'You run a mission to the Chinese of the Parián, preaching and baptizing.', 'The governor respects the Church, but you have no soldiers or money of your own.', 'Convert the Chinese merchants and protect them from abuse by Spanish officials.', 'Harsh treatment may turn the Chinese against Christianity, and against the colony.', 'Trade brought these people here, and the Church can bring them to Christianity.', 'Protect the Parián and give baptized Chinese better treatment.', 'Linking fair treatment to conversion puts pressure on people who keep their own beliefs.')
    ],
    evidence: [
      E('silver', 'American Silver', 'The galleons from Acapulco carried silver from the mines of Spanish America, including Potosí and Zacatecas.', 'Shows where the money came from.'),
      E('china', 'Taxes in Silver in China', 'Ming China had begun collecting most of its taxes in silver, so Chinese buyers wanted silver more than any other good.', 'Explains why the silver went to China.'),
      E('junks', 'Chinese Junks from Fujian', 'Chinese merchants sailed to Manila each spring with silk, porcelain, and other goods to trade.', 'Shows an older regional trade that the Spanish joined rather than replaced.'),
      E('decree', 'The King\'s Limits of 1593', 'A royal order allowed only two galleons a year between Manila and Acapulco and set a limit on the value of goods they could carry.', 'A mercantilist rule meant to keep silver from draining to China.'),
      E('spain', 'Spanish Silk Makers', 'Silk makers in Spain complained that cheap Chinese silk was taking their buyers in the Americas.', 'Shows a home industry the king wanted to protect.'),
      E('parian', 'The Parián', 'Chinese merchants and craftsmen lived in the Parián, a quarter outside Manila\'s walls, and greatly outnumbered the Spanish.', 'Shows how much the colony depended on the Chinese.'),
      E('cavendish', 'The Santa Ana, 1587', 'The English captain Thomas Cavendish captured the Manila galleon Santa Ana off the coast of Mexico.', 'Shows rivals attacking the galleon trade. The Santa Ana was sailing from Manila to Mexico, full of silk and other Asian goods.'),
      E('macau', 'Portuguese Macau', 'The Portuguese merchants of Macau sold Chinese silk to Spanish buyers and opposed Manila trading directly with China.', 'Shows an economic rivalry even between subjects of the same king.'),
      E('mission', 'Missions to the Chinese', 'Dominican friars preached to the Chinese of the Parián and baptized some of them.', 'Shows a religion spreading along a trade route.')
    ],
    decisions: [
      D('limits', 'Answer the king\'s limits', 'How should the council respond to the 1593 limits on the galleon trade?', [
        O('obey', 'Enforce the limits strictly', 'Allow only two galleons and inspect every cargo against the value limit.', 'The council shows loyalty to the king, and more silver stays in Spanish hands.', 'Settlers lose income, and some may leave the colony.', 'Obeying the king may cost the colony the trade that keeps it alive.'),
        O('petition', 'Obey, and petition the king to raise the limit', 'Follow the rules this year while sending letters to Madrid about the colony\'s needs.', 'The council stays loyal and makes its case.', 'An answer from Spain takes years, and the settlers suffer meanwhile.', 'Patience keeps the law but leaves the colony short.'),
        O('quiet', 'Look the other way', 'Let shippers carry more than the limit as long as the duties are paid.', 'The colony stays rich and the trade keeps flowing.', 'Officials who are caught can be punished, and the king\'s rules lose force.', 'Profit now weakens the king\'s control later.')
      ]),
      D('sangleys', 'Deal with the Chinese merchants', 'How should the council treat the Chinese merchants and residents of the Parián?', [
        O('license', 'Tax and license them fairly', 'Collect a set fee and a fixed duty, and protect the Parián from abuse.', 'More junks come, and goods stay cheap.', 'Settlers fear that the Chinese grow too many and too strong.', 'A fair deal keeps the trade but makes the colony depend on the Chinese.'),
        O('restrict', 'Limit their numbers and movements', 'Cap how many may stay after the trading season and lock the Parián at night.', 'Spanish officials feel safer and more in control.', 'Merchants may stop coming, and craftsmen and food sellers may leave.', 'Control costs the colony the people it needs.'),
        O('convert', 'Favor the baptized', 'Give lower taxes and the right to stay to Chinese who become Christians.', 'Friars gain converts, and some merchants settle for good.', 'Merchants who keep their own beliefs feel pressured and treated unfairly.', 'Mixing trade and religion can win converts and resentment at the same time.')
      ]),
      D('defend', 'Protect the silver', 'How should Manila protect the galleons and the city from rivals?', [
        O('escort', 'Arm and escort the galleons', 'Put more soldiers and guns on each galleon and guard it near Mexico.', 'The galleons and their cargoes are safer from raiders like Cavendish.', 'Soldiers and guns take space and money from the cargo.', 'Safety at sea cuts into profit.'),
        O('fort', 'Build up Manila\'s walls and fort', 'Spend the colony\'s money on defending the city itself.', 'The colony is harder for any rival to take.', 'Less money is left for trade and for the settlers.', 'A strong city may still lose its ships at sea.'),
        O('ally', 'Trade with Macau instead of fighting it', 'Work out a share of the China trade with the Portuguese of Macau.', 'One rivalry is calmed, and both sides keep profiting.', 'Manila may lose its direct trade with China and pay more for silk.', 'Peace with a rival means sharing the profit.')
      ])
    ],
    reflectionPrompt: 'Explain how the king\'s limits on the Manila galleon were a mercantilist economic strategy. Then explain ONE thing that changed and ONE thing that continued in the trade between Manila and China, and why the silver kept flowing toward China.',
    sources: [
      { label: 'Library of Congress, Negotiating Empire: Founding Manila', url: 'https://blogs.loc.gov/international-collections/2021/10/negotiating-empire-part-i-from-magellan-to-the-founding-of-manila-16th-18th-centuries/' },
      { label: 'Metropolitan Museum of Art, Interwoven Globe', url: 'https://www.metmuseum.org/exhibitions/listings/2013/interwoven-globe' }
    ]
  },
  {
    id: '4.2', unit: '4', topicTitle: 'Exploration: Causes and Events', file: 'the-santa-fe-bargain.html',
    title: 'The *Santa Fe Bargain*', location: 'Royal camp at Santa Fe, outside Granada', date: 'April 1492',
    lessonUrl: '../../unit-4/lesson-4-2-exploration.html',
    alignment: { theme: 'Governance (GOV) and Economic Systems (ECN)', objective: 'Describe the role of states in the expansion of maritime exploration from 1450 to 1750. Explain the economic causes and effects of maritime exploration by the various European states.', skill: 'Causation and making connections', keyConcepts: ['KC-4.1.III', 'KC-4.1.III.B'] },
    premise: [
      'Granada, the last Muslim kingdom in Spain, surrendered to Queen Isabella and King Ferdinand in January 1492. Now Christopher Columbus is back at court with his plan: sail west across the Atlantic to reach Asia and its spices.',
      'Portugal has spent decades paying for voyages down the coast of Africa, and it already holds that route south. Portugal\'s king turned Columbus down because his experts said Asia was much farther west than Columbus claimed. Nobody in this room knows that two continents lie in the way.',
      'You are advising the monarchs before they sign. Use only what people knew in 1492. Your decision will shape who gets the wealth, who governs any lands that are found, and how Spain deals with Portugal.'
    ],
    centralQuestion: 'Should Isabella and Ferdinand pay for Columbus\'s voyage west, and what should they promise him in return?',
    roles: [
      R('columbus', 'Christopher Columbus', 'You proposed the voyage and want to be rewarded if it works.', 'You have the plan and years of sailing, but you need royal ships, money, and permission.', 'Get the voyage approved, with titles that pass to your sons and a share of the trade.', 'The monarchs may say no again, or hire you for a small wage.', 'A short route west could reach Asia\'s riches before Portugal does.', 'Big titles, the right to govern what you find, and a share of the profits.', 'Your distance to Asia is badly wrong, and you assume any land you find is yours to claim.'),
      R('treasurer', 'Royal Treasurer', 'You count the cost, the loans, and what the crown could earn.', 'You can find the money and shape the contract, but you cannot promise it will pay off.', 'Get a chance at a new trade route without giving away the crown\'s future power.', 'Even a cheap voyage can lead to expensive wars or promises the crown cannot keep.', 'A ruler should risk a little now for a big reward later, and keep control of it.', 'Pay for a small fleet, and make Columbus\'s rewards depend on success.', 'Talking only about money can make claiming other people\'s land sound like simple bookkeeping.'),
      R('confessor', 'Royal Confessor', 'You advise the queen on religion and right and wrong.', 'The monarchs listen to you, but sailors and investors run the voyage.', 'Spread Christianity without cruelty or scandal.', 'People may use religion as cover for greed or violence.', 'For these monarchs, spreading the faith and ruling new lands go together.', 'Allow missionaries, under clear rules from the crown and the Church.', 'You may assume that converting people gives Spain the right to rule them.'),
      R('diplomat', 'Royal Diplomat', 'You follow Portugal\'s claims, the Atlantic islands, and the pope\'s politics.', 'You can predict trouble with Portugal and negotiate, but you cannot stop Portugal wanting more.', 'Keep this voyage from starting a war with Portugal.', 'Unclear claims could turn one voyage into a long rivalry.', 'Exploration is a contest between states, not just a sailor\'s adventure.', 'Pay for the voyage, but get ready to negotiate a dividing line with Portugal.', 'A treaty between two European rulers cannot fairly divide lands that belong to other people.')
    ],
    evidence: [
      E('portugal', 'Portugal\'s African Route', 'Portugal had spent decades paying for voyages down the African coast, and in 1488 Dias sailed around its southern tip.', 'Shows why Spain needed a different route.'),
      E('granada', 'Granada Has Fallen', 'The last Muslim kingdom in Spain surrendered in January 1492. The war is over, but it was expensive.', 'Connects religion, the crown\'s attention, and its budget.'),
      E('canaries', 'The Canary Islands', 'Castile held several of the Canary Islands, off the coast of Africa, close to winds that blow west.', 'Shows how geography made the plan possible.'),
      E('distance', 'Two Estimates of the Distance', 'Columbus argues that Asia lies only a few thousand miles west. Portugal\'s royal experts said it lies much farther away, and turned him down.', 'Makes the size of the risk part of the decision.'),
      E('capitulations', 'The Proposed Contract', 'Columbus asks to be Admiral of the Ocean Sea, to govern any lands he finds, and to keep a tenth of the wealth from them.', 'Shows how a ruler paid with promises as well as money.'),
      E('crew', 'A Small Fleet', 'Three ships cost the crown less, but carry fewer supplies and fewer men.', 'Creates a choice between cost and safety.'),
      E('religion', 'Spreading Christianity', 'The monarchs and Columbus both spoke of converting the people they might meet.', 'Adds a motive beyond money.'),
      E('trade', 'Asia\'s Spices', 'Spices reached Europe through many middlemen, each adding to the price.', 'Explains why a direct route would pay.'),
      E('rivalclaims', 'Rival Claims', 'Castile and Portugal had already fought and signed a treaty over Atlantic islands and the African coast.', 'Makes diplomacy part of the decision.'),
      E('sovereignty', 'People Already There', 'Any land the voyage reaches will already have people living there, with their own rulers.', 'Challenges the idea that finding land means owning it.')
    ],
    decisions: [
      D('sponsor', 'Decide whether to pay', 'How much should the crown risk before anyone knows the route exists?', [
        O('limited', 'Pay for one small voyage', 'Provide three ships and supplies, with orders to come back and report.', 'The crown tests the idea without risking much.', 'A small fleet may fail because it is too small.', 'Spending less limits both the loss and what the fleet can do.'),
        O('major', 'Send a large royal fleet', 'Send many ships, soldiers, priests, and trade goods from the start.', 'A big fleet can survive, trade, and defend its claims.', 'It costs a lot, and soldiers make violence more likely.', 'More power and more danger arrive together.'),
        O('reject', 'Say no to the westward route', 'Spend Spain\'s money closer to home and watch what Portugal does.', 'The crown avoids a gamble based on a wrong distance.', 'Portugal or another kingdom may win the trade first.', 'Being careful with money risks being left out.')
      ]),
      D('contract', 'Set Columbus\'s reward', 'What should the crown promise him if the voyage succeeds?', [
        O('broad', 'Promise big titles his sons inherit', 'Give him the offices, the right to govern, and the share of profits he wants.', 'Columbus gets what he asked for and has every reason to try hard.', 'His family could become almost independent rulers of huge lands.', 'A big reward now means less royal control later.'),
        O('conditional', 'Make his rewards depend on results', 'Reward success, but review his offices after each voyage and check his accounts.', 'The crown keeps control and can fix problems.', 'Columbus may refuse, or lose interest.', 'Keeping control lowers the reward for taking the risk.'),
        O('salary', 'Hire him for a wage', 'Pay him a salary and bonus, and keep all lands and trade for the crown.', 'The crown keeps all the power.', 'After years of asking, Columbus may walk away.', 'Total control might mean no voyage at all.')
      ]),
      D('claims', 'Decide how to treat Portugal and new lands', 'What should the crown do about claims once the voyage finds land?', [
        O('tradefirst', 'Trade and talk first', 'Allow trade and missionaries, but no claiming land until the crown decides.', 'Contact starts with less force and more information.', 'A small crew may ignore orders, or Portugal may claim first.', 'Holding back protects Spain\'s reputation but slows it down.'),
        O('claim', 'Claim land right away', 'Let Columbus claim lands for the crown and build forts.', 'Spain moves before Portugal can.', 'Claiming land with a ceremony ignores whether the people living there agree, and can lead to violence.', 'Speed depends on ignoring the people already there.'),
        O('papal', 'Ask the pope and negotiate with Portugal', 'Wait to make big claims until the pope approves and Spain and Portugal agree on a dividing line.', 'Less chance of war with Portugal.', 'The people who live in those lands still have no say.', 'An agreement between European rulers is not the same as a fair one.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Explain the role the Spanish crown played in this voyage and ONE economic reason it paid. Then explain how Portugal\'s voyages connected to Spain\'s decision to send Columbus west.',
    sources: [
      { label: 'Library of Congress, Christopher Columbus: Man and Myth', url: 'https://www.loc.gov/exhibits/1492/columbus.html' },
      { label: 'Library of Congress, 1492: An Ongoing Voyage', url: 'https://www.loc.gov/exhibits/1492/' },
      { label: 'Encyclopaedia Britannica, Treaty of Tordesillas', url: 'https://www.britannica.com/event/Treaty-of-Tordesillas' }
    ]
  },
  {
    id: '4.3', unit: '4', topicTitle: 'Columbian Exchange', file: 'the-replanting-council.html',
    title: 'The *Replanting Council*', location: 'A town in the Valley of Mexico', date: '1531',
    lessonUrl: '../../unit-4/lesson-4-3-columbian-exchange.html',
    alignment: { theme: 'Humans and the Environment (ENV)', objective: 'Explain the causes of the Columbian Exchange and its effects on the Eastern and Western Hemispheres.', skill: 'Causation, and claims and evidence in sources', keyConcepts: ['KC-4.1.V', 'KC-4.1.V.A', 'KC-4.1.V.C'] },
    premise: [
      'Eleven years ago, in 1520, smallpox swept through the Valley of Mexico. So many people fell sick at once that, as survivors remember it, many starved because no one was left to care for others. Since then the Spaniards have taken the valley, and now a new sickness that the Spaniards call measles is spreading.',
      'Spanish settlers are bringing things this valley has never had: wheat, fruit trees, sugarcane, cattle, pigs, sheep, and horses. For centuries, maize, beans, and squash grown on chinampas, farm plots built up in the shallow lake, have fed the valley\'s towns and markets.',
      'This council is invented for the lesson, but each role is based on the kinds of people who really lived here, and they did not have equal power. Spanish officials and settlers have the laws and the weapons. Use only what people knew in 1531. Nobody here knows that germs exist.'
    ],
    centralQuestion: 'How should this town feed itself, handle the new animals, and care for the sick, now that the ships have brought plants, animals, and diseases nobody here has seen before?',
    roles: [
      R('nahua', 'Nahua Town Leader', 'You speak for the families who farm the chinampas and run the town\'s market.', 'Your people know the fields, the canals, and the work, but Spanish officials can overrule you.', 'Keep your people fed and keep the town\'s land in the town\'s hands.', 'Spanish animals, Spanish demands, and another epidemic could ruin what is left.', 'A new plant or animal is only good if it helps the town survive.', 'Protect the chinampas and maize fields, and take only the new things that help.', 'Saying no to everything new may leave your town with fewer choices.'),
      R('healer', 'Nahua Healer', 'You care for the sick using plants and practices your teachers passed down.', 'People trust you, but nothing you know works against these new sicknesses.', 'Keep the sick alive and keep families from falling apart.', 'Whole households fall sick together, and nobody is left to cook or fetch water.', 'People die of the sickness, and also of hunger and thirst when nobody can care for them.', 'Bring food and water to sick households, and keep track of what helps.', 'You do not know about germs, so some of your treatments cannot work.'),
      R('settler', 'Spanish Settler', 'Spanish authorities have given you the right to collect tribute and work from nearby towns, and you have brought cattle and wheat seed.', 'You have Spanish law on your side, but you need Nahua workers and Nahua food.', 'Grow wheat for bread, raise cattle, and maybe plant sugarcane to sell.', 'If your herds ruin the town\'s fields, or people run away, you lose everything.', 'Spanish plants and animals will make this land rich.', 'Let the herds graze widely and plant wheat on the empty fields.', 'You call fields empty when their owners died or fled, though surviving families still claim them.'),
      R('african', 'African Herder', 'You were brought across the Atlantic by force and now tend a Spanish settler\'s cattle and horses.', 'The settler depends on your skill, but you are not free to leave.', 'Protect yourself and your family and make your skill impossible to do without.', 'The settler can sell you, punish you, or work you harder.', 'The ships carried people, and what people knew, as well as plants and animals.', 'Keep the herds away from the fields, so there is less trouble with the town.', 'Doing your job well also makes the settler richer.')
    ],
    evidence: [
      E('smallpox', 'Smallpox, 1520', 'Smallpox swept through the valley in the autumn of 1520. Survivors remember that many starved because no one took care of others any longer.', 'Shows disease and hunger working together.'),
      E('measles', 'A New Sickness, 1531', 'A new epidemic, which the Spaniards call measles, is spreading through the towns.', 'Shows that the epidemics kept coming.'),
      E('rats', 'Rats From the Ships', 'Rats came ashore with Spanish cargo. Nobody knows yet that animals like rats can carry sickness.', 'Shows that some of what crossed came by accident.'),
      E('chinampas', 'Maize, Beans, and Chinampas', 'For centuries, maize, beans, and squash grown on chinampas fed the valley\'s towns and markets.', 'Shows what already worked.'),
      E('wheat', 'Wheat and Fruit Trees', 'Spanish settlers want wheat bread and orchards like the ones at home.', 'Shows crops carried on purpose.'),
      E('sugar', 'Sugarcane', 'Sugarcane grows well in the warm valleys to the south, and sugar sells for a high price in Europe. Growing it takes many workers.', 'Connects a crop to a cash crop.'),
      E('animals', 'Cattle, Pigs, and Sheep', 'Spanish animals multiply fast. They give meat, hides, and wool, but they wander into fields and eat the crops.', 'Shows an effect that helps some people and hurts others.'),
      E('horses', 'Horses', 'Horses carry riders and loads much faster than anything the valley has had.', 'Shows an animal that could change how people live.'),
      E('land', 'Empty Fields', 'So many people have died that some fields lie unplanted. Settlers say the land is unused; surviving families say it is still theirs.', 'Connects disease to who controls the land.'),
      E('power', 'Who Holds Power', 'Spanish officials and settlers have the laws, the weapons, and royal grants. Nahua towns still run their own markets and fields.', 'Keeps the exchange from looking fair or equal.')
    ],
    decisions: [
      D('food', 'Rebuild the food supply', 'There are not enough people, seed, or water for everything. What comes first?', [
        O('local', 'Replant maize and the chinampas first', 'Put the town\'s workers and seed into the crops that already feed the valley.', 'Families get food they know how to grow, and the town keeps its land.', 'The settler and Spanish officials still demand wheat and other goods.', 'Feeding the town first means less for the newcomers\' plans.'),
        O('mixed', 'Plant some of both', 'Grow maize and beans, and also some wheat and fruit trees.', 'More kinds of food, so one bad harvest is not a disaster.', 'New crops need land, fences, and skills nobody here has yet.', 'More variety, but more arguments over the land.'),
        O('sugar', 'Plant sugarcane to sell', 'Turn fields and workers toward sugarcane for the high price it brings in Europe.', 'The settler and the crown earn money.', 'Land and workers go to a crop nobody here can eat as a meal, and the work is forced.', 'Money for a few, hunger risk for many.')
      ]),
      D('animals', 'Handle the new animals', 'The settler\'s herds are growing fast. What should the council do?', [
        O('fence', 'Keep herds away from the fields', 'Set limits on herds, keep them off planted land, and make owners pay for crops their animals eat.', 'Farmers are protected and the animals still help.', 'The settler may ignore the rules, and Spanish officials may not enforce them.', 'Fair rules only work if someone powerful enforces them.'),
        O('open', 'Let the herds roam', 'Let cattle, pigs, and sheep graze wherever there is grass.', 'Meat, hides, and wool increase fast and cheaply.', 'The animals trample and eat the town\'s crops and strip the hillsides.', 'Cheap for the owners; the town pays the cost.'),
        O('share', 'Let the town keep some animals', 'Ask for some animals to be given to the town for its own meat, wool, and hauling.', 'The town gets some benefit from the new animals too.', 'The settler may refuse, and more animals still change the land.', 'Sharing the benefits does not undo the damage.')
      ]),
      D('sickness', 'Care for the sick', 'The new sickness is spreading. Using only what people knew in 1531, what should the town do?', [
        O('feed', 'Feed and nurse the sick at home', 'Organize healthy people to bring food and water to every sick household.', 'Fewer people die of hunger and thirst while they are sick.', 'The helpers may catch the sickness too.', 'Caring for others puts the carers at risk.'),
        O('separate', 'Keep the sick apart', 'Move the sick to separate houses, as some European cities did during plagues.', 'Fewer healthy people may catch it.', 'Families are split up, and the sick may be left alone without care.', 'Protecting the healthy can mean abandoning the sick.'),
        O('pray', 'Hold ceremonies and prayers', 'Gather people for prayer, at the church or in the old ways.', 'People feel less alone and less afraid.', 'Crowds gathered in one place can spread the sickness faster.', 'What comforts people can also endanger them.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Explain what caused these new plants, animals, and diseases to arrive in the valley, and ONE effect they had on the people of the Valley of Mexico. Then name ONE piece of evidence from the council that supports your explanation, and say why it supports it.',
    sources: [
      { label: 'Florentine Codex, Book 12, chapter 29, in James Lockhart\'s translation (Early Nahuatl Library)', url: 'https://enl.wired-humanities.org/FCBk12Ch29' },
      { label: 'National Library of Medicine, Native Voices: measles epidemic of 1531 to 1533', url: 'https://www.nlm.nih.gov/nativevoices/timeline/184.html' },
      { label: 'Encyclopaedia Britannica, Columbian Exchange', url: 'https://www.britannica.com/event/Columbian-exchange' }
    ]
  },
  {
    id: '4.6', unit: '4', topicTitle: 'Internal and External Challenges to State Power', file: 'the-knotted-cord.html',
    title: 'The *Knotted Cord*', location: 'Northern New Mexico Pueblo alliance', date: 'August 1680',
    lessonUrl: '../../unit-4/lesson-4-6-internal-external-challenges.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain the effects of the development of state power from 1450 to 1750.', skill: 'Causation', keyConcepts: ['KC-4.3.III.iii'] },
    premise: [
      'For decades, Spanish officials and Franciscan friars have taken Pueblo crops and work, banned Pueblo ceremonies, and punished Pueblo religious leaders. Drought, hunger, disease, and Apache raids have made everything worse, and the Spanish soldiers who demand so much have not kept the towns safe.',
      'Po’pay and other leaders are trying to bring together towns that are far apart, speak different languages, and do not always get along. Runners carry knotted cords from town to town: a town that agrees to join unties one knot, and the knots that are left count the days to the rising. If a runner is caught or someone talks, the Spanish could learn the plan too soon.',
      'You meet before the revolt begins. You know what life is like in 1680, but not what will happen next. Your plan must explain how many separate towns can stand up to an empire together, and how the Pueblos should govern themselves if the Spanish are driven out.'
    ],
    centralQuestion: 'How should the Pueblo towns rise together against Spanish rule, keep the plan secret while bringing in as many towns as they can, and decide what they want after the Spanish are gone?',
    roles: [
      R('organizer', 'Alliance Organizer', 'You plan the timing and send the messengers between many Pueblo towns.', 'You can spread one plan, but you cannot give orders to every town or make old quarrels go away.', 'Get every town to rise on the same day, so the Spanish cannot beat the towns one at a time.', 'One captured runner, or one town that attacks too soon, could give away the whole plan.', 'An empire can be beaten when towns with separate complaints act together.', 'Use the knotted-cord countdown, send more than one runner to each town, and keep the date fixed.', 'Agreeing on the attack can hide the fact that the towns want different things after it.'),
      R('religious', 'Pueblo Religious Leader', 'You protect the ceremonies and the religious leaders that the friars have attacked.', 'People follow you because of your religious role, but leading ceremonies in the open has brought arrests and whippings.', 'End the attacks on Pueblo religion and bring back the sacred places, masks, dances, and calendars.', 'Winning the fight but not bringing back the old ways would leave the Spanish way of life in charge.', 'The fight is about the right to your own religion, not only about crops and work.', 'Make freedom of Pueblo religion a goal the alliance will never give up.', 'Talk of bringing back the old ways can forget that each town has its own ways and its own ideas.'),
      R('captain', 'Village War Captain', 'You lead the fighters, weapons, and scouts of one town.', 'You know the land around your town, but you have few guns, and you must protect the people who are not fighting.', 'Beat the Spanish nearby without leaving your own town open to revenge attacks or raids.', 'If your fighters go to Santa Fe, your homes are left open; if they stay home, the Spanish may gather again.', 'A good plan only works if the fighting goes well.', 'Secure local targets, then combine forces against Santa Fe.', 'Thinking only about the fight can push aside food, talks with neighbors, and trust between towns.'),
      R('provider', 'Food Keeper and Go-Between', 'You look after food, water, shelter, family ties, and talks with neighbors you cannot fully trust.', 'The alliance needs your supplies, but drought and Spanish demands have left the storerooms low.', 'Keep people fed through the revolt and make agreements that last after the fighting.', 'A long siege or internal conflict could turn victory into famine.', 'Being free also means having enough to eat and getting along with your neighbors.', 'Keep the fighting short, protect the harvest, and plan meetings between the towns for afterward.', 'Being careful can waste the one short chance that surprise gives you.')
    ],
    evidence: [
      E('religion', 'Religious Repression', 'Friars and officials banned ceremonies, burned sacred objects, and punished religious leaders.', 'Shows a religious cause of the revolt.'),
      E('labor', 'Tribute and Forced Labor', 'Spanish settlers took part of every harvest and made Pueblo people work without pay.', 'Shows an economic cause of the revolt.'),
      E('drought', 'Drought, Famine, and Disease', 'Dry years, hunger, and sickness made Spanish demands even harder to bear.', 'Shows how one pressure made the others worse.'),
      E('raids', 'Raids and Weak Protection', 'Apache and Navajo raids grew, and Spanish soldiers did not stop them, though Spanish demands went on.', 'Shows that Spanish rule was not keeping the towns safe.'),
      E('arrests', 'Arrests of Religious Leaders, 1675', 'In 1675 the governor arrested forty-seven Pueblo religious leaders, hanged three, and had others whipped; Po’pay was one of them.', 'Shows the event that turned anger into a plan.'),
      E('cords', 'Knotted-Cord Countdown', 'Runners carried knotted cords from town to town. A town that agreed untied one knot as its sign, and the knots that were left counted the days to the rising.', 'Shows how the towns kept in step without writing.'),
      E('diversity', 'Many Languages and Communities', 'The Pueblos lived in many separate towns, spoke several languages, and had no single ruler.', 'Shows why getting every town to act together was hard.'),
      E('santafe', 'Spanish Concentration at Santa Fe', 'If the towns did not act together, Spanish officials and settlers could gather in the capital and fight back.', 'Shows why one town alone could not win.'),
      E('water', 'Water and Siege Geography', 'Whoever held the water and the roads could put pressure on the Spanish if they gathered in one place.', 'Shows how knowing the land helped the Pueblos.'),
      E('unknown', 'No Guaranteed Postwar Unity', 'Driving out the Spanish would not end quarrels between towns, raids, or shortages of food.', 'Shows that the hard choices would not end with the revolt.')
    ],
    decisions: [
      D('timing', 'Set the uprising in motion', 'When should the towns rise: on the planned day, as soon as there is danger, or later with more towns?', [
        O('fixed', 'Keep the common countdown', 'Rise on the agreed day in as many towns as possible.', 'Everyone striking on the same day catches the Spanish off guard and shows the towns are united.', 'If the Spanish find a cord, the towns may have to strike before they are ready.', 'One shared date makes the alliance strong, but one leak can ruin it.'),
        O('early', 'Strike immediately after warning', 'Strike as soon as arrests or rumors show the Spanish may know.', 'The towns keep some surprise and protect their leaders.', 'Faraway towns may not get the word in time.', 'Moving fast saves the plan, but not every town rises at once.'),
        O('delay', 'Wait to bring in more towns', 'Win over towns that are still unsure, and store food, before striking.', 'The revolt starts with more fighters and better supplies.', 'More time means more chances for leaks, arrests, and Spanish preparations.', 'Waiting for more towns can mean missing the right moment.')
      ]),
      D('campaign', 'Choose the order of the fighting', 'What should the fighters do first once the revolt begins?', [
        O('localfirst', 'Remove local authorities first', 'Take control of each town, mission, and road before marching on Santa Fe.', 'Each town is free of the Spanish nearby and stays in its own hands.', 'Spanish survivors have time to gather in the capital.', 'Making each town safe first slows down the attack on the capital.'),
        O('capital', 'March quickly on Santa Fe', 'Skip the smaller places and send everyone against the capital.', 'If the capital falls, Spanish rule could fall with it.', 'Homes and crops are left unguarded, and keeping in touch is harder.', 'Aiming at the capital leaves the towns themselves less safe.'),
        O('encircle', 'Surround the Spanish and demand they leave', 'Hold the roads and the water, trap the Spanish in place, and demand that they leave.', 'There may be less fighting, and food lasts longer.', 'Talking gives the Spanish time, and the towns must agree on what to demand.', 'Holding back means less destruction, but the revolt may lose its push.')
      ]),
      D('aftermath', 'Define independence', 'If the Spanish leave, what should hold the towns together?', [
        O('confederation', 'Create a council of all the towns', 'Each town sends people to a council that plans defense, trade, water, and talks with neighbors, while each town still runs itself.', 'The towns are stronger together without one ruler over them.', 'Old quarrels, and towns that do not take part, could stop the council from deciding anything.', 'Staying safe together means each town gives up some of its own say.'),
        O('local', 'Let each town rule itself again', 'End the wartime alliance once the Spanish are gone.', 'Each town keeps its own rule and its own traditions.', 'Towns on their own may be open to raids, or to the Spanish coming back.', 'The more each town rules itself, the weaker their shared defense.'),
        O('wartime', 'Keep one wartime leader', 'Keep one leader in charge of the fighting until the danger is clearly over.', 'The towns can answer quickly if the Spanish attack again.', 'A leader with too much power might start forcing people to obey, and the towns may stop trusting that leader.', 'The towns could end up under one strong ruler of their own, a lot like the Spanish rule they rose against.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Explain how the attacks on Pueblo religion, the demands for crops and work, and the drought and raids combined to cause the Pueblo Revolt, and how the knotted cords helped the towns act together. Then explain one way the revolt changed Spanish rule when the Spanish came back in the 1690s, and one way it did not.',
    sources: [
      { label: 'National Park Service, San José de los Jémez and the Pueblo Revolt', url: 'https://www.nps.gov/subjects/travelspanishmissions/san-jose-de-los-jemez-mission-and-giusewa-pueblo-site.htm' },
      { label: 'National Park Service, Spanish Encounters at Pecos', url: 'https://home.nps.gov/peco/learn/historyculture/spanish-encounters.htm' },
      { label: 'National Park Service, El Camino Real archival study', url: 'https://home.nps.gov/elca/learn/historyculture/upload/ELCA-Archival-Study-12-2020.pdf' }
    ]
  },
  {
    id: '4.7', unit: '4', topicTitle: 'Changing Social Hierarchies', file: 'the-identity-dossier.html',
    title: 'The *Identity Dossier*', location: 'A royal court hearing, Mexico City', date: 'c. 1715',
    lessonUrl: '../../unit-4/lesson-4-7-changing-social-hierarchies.html',
    alignment: { theme: 'Social Interactions and Organization (SIO)', objective: 'Explain how social categories, roles, and practices have been maintained or have changed over time.', skill: 'Continuity and Change', keyConcepts: ['KC-4.2.III.A', 'KC-4.3.I.B'] },
    premise: [
      'In Mexico City, the records of churches, courts, tax offices, guilds and the militia all describe people by where they were born, who their parents were, whether they are free, what work they do and how much they own. These labels can open or close doors to offices, honors and some trades. But the records do not always agree with each other.',
      'Painters have begun making casta paintings that show mixed families as a neat, labeled chart for wealthy viewers. Real life is messier. The same person might be described one way in a baptism record, another way in a marriage record, and a third way on a tax list, and money or friends in the right places can change how a claim is heard.',
      'This hearing is a composite: it did not happen exactly like this, but every part of it is based on how colonial courts worked. A wealthy widow of mixed ancestry asks the court to let her expand her cloth shop, to join a business association that has kept her out, and to have her children recorded under a higher category. Your ruling will show how ancestry, wealth, gender, religion and old privileges worked together.'
    ],
    centralQuestion: 'How should colonial officials decide a person\'s category, and what that person may do, when the official ranking is powerful but real status depends on ancestry, birthplace, wealth, gender, reputation and community all at once?',
    roles: [
      R('petitioner', 'Widow and Cloth Merchant of Mixed Ancestry', 'You ask the court to let you expand a profitable cloth shop and to protect your children\'s future.', 'You have property, customers, a good name in your parish and legal papers, but your ancestry and your sex limit what the law lets you do.', 'Get a license, a place in the association, and a strong family name your children can use.', 'Officials may use a label to deny you rights, or to let your competitors take your business.', 'Status is earned through work, family, reputation and law, not ancestry alone.', 'Ask the court to weigh your property, your faith and your service to the city more than your casta label.', 'Your own climb may depend on keeping your distance from poorer or darker-skinned neighbors.'),
      R('clerk', 'Court Clerk Who Checks Family Records', 'You compare the petition with church records, witness statements and earlier court decisions.', 'How you classify her shapes the whole case, but the records disagree and the rules are not consistent.', 'Produce a ruling that looks orderly, can be defended, and keeps the Crown\'s trust.', 'A flexible ruling invites charges of favoritism; a strict one may ignore the evidence in front of you.', 'Colonial government turns differences between people into official categories.', 'Use family records together with reputation and legal status.', 'Official categories can make a ranking that people built look natural.'),
      R('guild', 'Creole Officer of the Business Association', 'You defend a guild privilege held by established merchants and craftsmen of Spanish ancestry born in the Americas.', 'Your association can admit, train and exclude members, but the courts and the market can challenge it.', 'Protect the quality of the trade, your members\' families and their business advantage.', 'Successful outsiders may weaken your privilege and show that ancestry rules mainly protect your members from competition.', 'Established groups keep their power through institutions as well as wealth.', 'Admit her only as a narrow exception, with sponsors and fees.', 'You may call protecting yourself "tradition" and call people moving up "disorder."'),
      R('militia', 'Captain of the Free Black Militia', 'You speak for free people of African ancestry who serve the city as soldiers but face legal limits because of their ancestry.', 'Military service and your connections earn respect, but prejudice in law and in daily life remains.', 'Use service, freedom, property and reputation to challenge rules that shut whole groups out.', 'An exception for one wealthy widow may leave the wider unfairness untouched.', 'Colonial states both limit groups and depend on what those groups contribute.', 'Base rights on freedom and service, not on color labels.', 'Being useful as soldiers is a weak foundation for equal rights.')
    ],
    evidence: [
      E('peninsular', 'Birthplace and the Highest Offices', 'Men born in Spain held most of the highest royal offices, while rich creoles born in the Americas led local society and business.', 'Shows a ranking even among people of Spanish ancestry.'),
      E('casta', 'Casta Labels', 'Words for mixed ancestry were used widely, but they were not one fixed, complete legal code.', 'Shows the ranking was not a simple ladder.'),
      E('paintings', 'Casta Paintings', 'Paintings from about 1715 on arranged mixed families into labeled categories for wealthy viewers.', 'Shows how the elite wanted society to look, not a count of real people.'),
      E('fluid', 'Labels That Could Change', 'Looks, work, education, clothing, wealth, witnesses and connections could all affect how a person was recorded.', 'Explains how some people moved up, within limits.'),
      E('limpieza', 'Purity of Blood', 'In Spain, purity of blood meant having no Jewish or Muslim ancestors. In New Spain, officials also used it against people with African ancestry, to keep them out of certain guilds, schools, religious orders and honors.', 'Connects Spanish rules from before 1492 to colonial exclusion.'),
      E('indigenous', 'Indigenous Town Rights', 'Indigenous towns had recognized rights to their own lands and governments, while they paid tribute and lived under colonial officials.', 'Shows a group given room and held down at the same time.'),
      E('african', 'Free and Enslaved People of African Ancestry', 'New Spain included enslaved Africans and large numbers of free people of African ancestry who worked in many trades and used the courts.', 'Shows that ancestry did not mean one single status.'),
      E('women', 'Women, Property and Business', 'Widows and other women could own property, sign contracts and run businesses, but faced limits because they were women.', 'Adds gender to the ranking.'),
      E('guilds', 'Guild Privileges', 'Guilds and similar associations used membership rules to protect training, honor and their members\' business.', 'Shows how established guild members kept their status through institutions.'),
      E('service', 'Service and Reputation', 'Military, religious, charitable and public service could strengthen a petition, without ending prejudice.', 'Shows people bargaining inside the ranking.')
    ],
    decisions: [
      D('record', 'Classify the petitioner', 'Which evidence should count most in the official record?', [
        O('lineage', 'Go by family records', 'Use church records of ancestry and birthplace as the deciding category.', 'Clerks and established elites get a simple rule that is easy to repeat.', 'Records are incomplete, and ancestry decides a person\'s future no matter how they live.', 'An orderly record makes the ranking by birth harder to challenge.'),
        O('context', 'Weigh family, status and reputation together', 'Consider ancestry alongside freedom, property, work, witnesses and her standing in the parish.', 'The ruling better fits her real life and the evidence.', 'Judges\' choices will favor people with money and powerful friends.', 'Flexibility lets some people move up without treating people equally.'),
        O('legal', 'Record only freedom and residence', 'Leave casta labels out of this business ruling.', 'Free residents face fewer barriers because of ancestry.', 'Elite institutions may resist, and prejudice continues outside the court record.', 'Changing an official category is faster than changing society.')
      ]),
      D('license', 'Rule on the business association', 'Should she join the association and expand the shop?', [
        O('deny', 'Deny her under the guild privilege', 'Keep membership for people accepted under the existing ancestry rules.', 'The association keeps its control and its familiar standards.', 'The court protects her competitors, not skill.', 'The established guild members stay on top, and she cannot move up.'),
        O('exception', 'Make one exception, with sponsors', 'Admit her after fees, a test of her skill and support from current members.', 'One qualified business gets in without ending the association\'s rules.', 'The result depends on money and friends, not on a general right.', 'One person moves up; the ranking stays.'),
        O('open', 'Open membership by skill and money', 'Replace ancestry rules with a skill test, fees based on what people can pay, and proof of freedom.', 'More craftsmen and merchants can compete and contribute.', 'Current members lose their protected place and may organize against the change.', 'Opening the trade weakens an old privilege.')
      ]),
      D('children', 'Record the next generation', 'How should officials record the category of her children?', [
        O('inherit', 'Pass her category to her children', 'Use this hearing\'s category in her children\'s future school, marriage and office records.', 'Officials get consistent records across files.', 'A disputed label limits her children\'s chances.', 'Consistent records turn prejudice into something inherited.'),
        O('separate', 'Judge each child later, on their own', 'Let future courts consider each child\'s education, work, marriage and reputation.', 'Status can still follow how each child actually lives.', 'Uncertainty, and unequal access to witnesses and money, remain.', 'Moving up becomes possible, but uneven.'),
        O('civil', 'Use one common record for free people', 'List the parents\' names, but do not let casta labels decide ordinary rights in business and public life.', 'The children face fewer official barriers because of ancestry.', 'Royal officials and established elites may refuse to recognize the change.', 'Including people on paper can move faster than enforcement and attitudes.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Explain one way the ranking of people in Spanish America stayed the same and one way it could change for a person like the widow. Then explain the difference between what casta paintings showed and how people\'s categories worked in real life, and why that difference matters for using the paintings as evidence.',
    sources: [
      { label: 'Smarthistory, Teaching guide: Sixteen casta paintings', url: 'https://smarthistory.org/seeing-america-2/social-structures/teaching-guide-constructing-identity-in-the-spanish-colonies-in-america/' },
      { label: 'Smarthistory, The art of the viceroyalty of New Spain', url: 'https://smarthistory.org/reframing-art-history/art-viceroyalty-new-spain/' },
      { label: 'Smarthistory, Miguel Cabrera casta painting', url: 'https://smarthistory.org/cabrera-casta-painting/' }
    ]
  }
];

fs.mkdirSync(OUT, { recursive: true });
for (const scenario of scenarios) {
  const destination = path.join(OUT, scenario.file);
  fs.writeFileSync(destination, renderRoomPage(scenario), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, destination)}`);
}
