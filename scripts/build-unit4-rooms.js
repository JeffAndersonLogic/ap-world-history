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
      R('captain', 'Portuguese Fortress Captain', 'You command soldiers, cannon, and ships responsible for Goa and nearby sea lanes.', 'You can use force at key points, but reinforcements and pay arrive slowly from Lisbon.', 'Hold Goa, protect Portuguese shipping, and deter hostile fleets.', 'A scattered garrison may lose both the port and the fleet to a regional coalition.', 'A few fortified choke points can magnify limited manpower.', 'Prioritize forts, patrols, and control of strategic harbors.', 'Controlling the sea does not make merchants trust you or bring food from inland.'),
      R('factor', 'Crown Factor (Royal Trade Manager)', 'You manage the king’s warehouses, customs, accounts, and the cargoes only the Crown may trade (its monopoly cargoes).', 'You can license trade and purchase goods, but private merchants and corruption evade Crown rules.', 'Make the Estado da Índia, Portugal\'s government in Asia, pay for itself.', 'Expensive garrisons and forced trading rules may drive merchants to rival ports.', 'Empire survives when customs and high-value trade pay for force.', 'Use cartaz passes and targeted monopolies rather than territorial conquest.', 'Revenue figures can hide violence and the resilience of trade outside Portuguese control.'),
      R('gujarati', 'Gujarati Merchant-Broker', 'You connect textiles, credit, shipping, and commercial communities across western India.', 'Portuguese officials need your networks, but can seize ships or restrict routes.', 'Keep trade moving, protect partners, and prevent one armed state from dictating all terms.', 'The cartaz system and forced port calls may destroy margins or expose ships to confiscation.', 'Commercial networks outlast conquerors because trust and credit cross political borders.', 'Negotiate predictable duties and freedom for regional trade.', 'Your focus on merchant access may overlook laborers and communities harmed by war and extraction.'),
      R('goan', 'Goan Municipal and Landholding Representative', 'You speak for local households, cultivators, temples, churches, and officials adapting to new rule.', 'Local knowledge and food supply give leverage, but the occupying regime controls armed force and appointments.', 'Preserve property, worship, irrigation, and a meaningful role in government.', 'Aggressive conversion, confiscation, or military taxation may turn occupation into rebellion.', 'Ports cannot function without the society and countryside behind them.', 'Secure local law, negotiated taxation, and municipal participation.', 'Deals with local leaders may protect your own circle more than poorer residents.')
    ],
    evidence: [
      E('goa', 'Goa Captured, 1510', 'Albuquerque took Goa, an island port with a good harbor, and made it a Portuguese base on India’s west coast.', 'Shows a captured port becoming a Portuguese base.'),
      E('malacca', 'Malacca Captured, 1511', 'Control of Malacca offered leverage near the route between the Indian Ocean and South China Sea.', 'Explains the choke-point strategy.'),
      E('hormuz', 'Hormuz Fortified, 1515', 'Hormuz, at the mouth of the Persian Gulf, had owed Portugal tribute since 1507; in 1515 Albuquerque returned and built a Portuguese fortress there.', 'Shows empire built from a few key ports, some kept by deals with local rulers.'),
      E('limited', 'Limited Portuguese Manpower', 'Portugal could garrison key positions but could not occupy the Indian Ocean’s enormous inland regions.', 'Sets the central strategic constraint.'),
      E('networks', 'Existing Asian Trade Networks', 'Merchants trading between Asian ports, and the regional markets they served, are still trading as they did before the Portuguese came.', 'Prevents an inaccurate replacement narrative.'),
      E('cartaz', 'Cartaz Sea Pass', 'Portuguese authorities required many vessels to buy passes, follow approved routes, and face inspection.', 'Shows coercive regulation of maritime trade.'),
      E('cannon', 'Naval Cannon and Forts', 'Ship-mounted artillery and fortified ports let a small force threaten concentrated maritime targets.', 'Explains the military mechanism of expansion.'),
      E('brokers', 'Brokers, Pilots, and Credit', 'European officials depended on local navigators, interpreters, suppliers, financiers, and merchant communities.', 'Shows dependence inside dominance.'),
      E('rivals', 'Mamluk and Regional Rivals', 'Egypt’s Mamluk sultans, using Ottoman timber and guns, sent fleets against the Portuguese (Chaul 1508, Diu 1509, and a new fleet from Suez in 1515), and rulers on the Indian coast, such as Calicut’s, fought them too.', 'Shows that rulers near and far fought back.'),
      E('conversion', 'Mission and Conversion', 'The Crown joined trade and war to Christian mission, creating support and conflict in occupied communities.', 'Connects religious and political expansion.')
    ],
    decisions: [
      D('shape', 'Choose the imperial shape', 'Where should Portugal concentrate scarce troops and ships?', [
        O('network', 'Build a fortified port network', 'Hold Goa and selected choke points while projecting naval power between them.', 'The Crown magnifies limited manpower and controls strategic routes.', 'Unfortified coasts and regional trade remain outside direct control.', 'Wide reach at sea comes with little control of land.'),
        O('territory', 'Conquer the land behind the coast', 'Expand inland from Goa to secure food, taxes, converts, and a larger territorial base.', 'The regime gains resources and a defensible colony.', 'Occupation consumes troops and provokes rulers and communities beyond the port.', 'Deeper control sharply narrows geographic reach.'),
        O('treaties', 'Rely on treaties and tribute', 'Negotiate access with rulers and fortify only the most vulnerable commercial stations.', 'Trade expands at lower military cost.', 'Agreements depend on local politics and may collapse when allies change.', 'Flexible influence is less enforceable than conquest.')
      ]),
      D('shipping', 'Regulate Indian Ocean shipping', 'How hard should the Estado da Índia push the cartaz system?', [
        O('strict', 'Require passes and approved ports', 'Seize unlicensed ships and compel high-value cargoes through Portuguese customs.', 'Crown officials and licensed merchants gain revenue and leverage.', 'Merchants reroute, resist, or seek armed protection from rival states.', 'Monopoly income grows by disrupting existing commerce.'),
        O('targeted', 'Target only strategic cargoes and rivals', 'License ordinary regional trade while controlling war materials and selected spices.', 'Most markets continue while Portugal focuses enforcement.', 'Smuggling and ambiguous categories weaken the monopoly.', 'Commercial cooperation reduces direct Crown profit.'),
        O('open', 'Use low duties and open access', 'Make Goa attractive through predictable customs rather than forced routing.', 'Merchants voluntarily bring traffic, supplies, and information.', 'Lisbon may see the policy as surrendering monopoly gains.', 'A stronger port produces less control over the sea.')
      ]),
      D('governance', 'Govern Goa', 'How should Portuguese officials rule the occupied city and countryside?', [
        O('accommodate', 'Preserve local law and municipal roles', 'Recognize property and community institutions while collecting negotiated taxes.', 'Residents and local elites have reasons to cooperate.', 'Officials and missionaries may oppose limits on royal and religious power.', 'Peace is bought by sharing power.'),
        O('assimilation', 'Impose Portuguese institutions quickly', 'Replace offices, expand conversion policy, and standardize law under the Crown.', 'The regime creates a visibly Portuguese capital.', 'Coercion risks flight, resistance, and loss of essential expertise.', 'Forcing one way of life on Goa weakens the people the port depends on.'),
        O('merchantcity', 'Empower resident merchant households', 'Give the casados (Portuguese men who married and settled in Goa) and approved local brokers broad trading and city privileges.', 'Permanent families invest in the city and mediate trade.', 'A small group of rich families may slip out of Crown control and exploit other residents.', 'Families who stay for good come to want different things than Lisbon does.')
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
    id: '4.5', unit: '4', topicTitle: 'Maritime Empires Maintained and Developed', file: 'the-potosi-production-order.html',
    title: 'The *Potosí Production Order*', location: 'Potosí, Viceroyalty of Peru', date: '1573',
    lessonUrl: '../../unit-4/lesson-4-5-maritime-empires-maintained.html',
    alignment: { theme: 'Economic Systems (ECN) and Social Interactions (SIO)', objective: 'Explain how rulers employed economic strategies to consolidate and maintain power throughout the period from 1450 to 1750.', skill: 'Causation and comparison', keyConcepts: ['KC-4.1.IV', 'KC-4.1.IV.C–D', 'Silver, mercantilism, and coerced labor'] },
    premise: [
      'Potosí’s richest surface ores are declining. Viceroy Francisco de Toledo is reorganizing the Andes so the mines can produce far more silver for colonial merchants and the Spanish Crown. Mercury amalgamation can process lower-grade ore, but it requires mills, water, mercury from Huancavelica, and a dependable labor force.',
      'Toledo is adapting the Inca mit’a into a colonial draft that compels designated Indigenous communities to send workers to Potosí. The system is not simply the old institution continued: Spanish mine owners, royal taxes, cash markets, and long-distance silver flows redirect it toward imperial extraction.',
      'Your production order will connect an Andean mountain to Atlantic fleets, European finance, Manila, Asian goods, and Chinese demand for silver. It will also redistribute danger, migration, family disruption, and environmental contamination.'
    ],
    centralQuestion: 'How should the Viceroyalty reorganize labor, technology, taxation, and silver routes to maintain Potosí’s output, and who will bear the costs of making the mine a center of global trade?',
    roles: [
      R('official', 'Viceregal Revenue Official', 'You turn Toledo’s reforms into quotas, taxes, records, and enforcement.', 'You can assign districts and audit output, but distant officials and mine owners manipulate information.', 'Increase dependable silver revenue and strengthen royal administration.', 'Production may collapse if communities flee, mercury fails, or owners conceal output.', 'A maintained empire requires standardized institutions linking labor and tax to the Crown.', 'Combine the mita, mercury investment, and strict assay records.', 'Administrative success can hide the human violence behind compliant totals.'),
      R('owner', 'Potosí Mine and Mill Owner', 'You invest in shafts, mills, mercury, animals, and skilled labor.', 'You control production sites but depend on state labor allocations, credit, and ore quality.', 'Process lower-grade ore profitably and protect your claim.', 'Without cheap regular labor and mercury, debts may consume the enterprise.', 'Technology creates output only when capital and workers are organized at scale.', 'Secure a mixed workforce and guaranteed mercury supply.', 'You may label coercion and danger as unavoidable production costs.'),
      R('kuraka', 'Andean Kuraka', 'You are required to deliver workers while remaining responsible for your community’s taxes and survival.', 'Your local authority mediates the draft, but refusal invites punishment and compliance can destroy legitimacy.', 'Reduce absence, death, debt, and family disruption while preserving communal land.', 'Quotas may depopulate villages and turn you into an agent of colonial extraction.', 'Imperial labor systems reach mines through local communities and intermediaries.', 'Limit rotations, recognize substitutions, and require wages and return guarantees.', 'Negotiating a less damaging quota may still legitimize coerced labor.'),
      R('merchant', 'Silver and Pacific Trade Merchant', 'You finance shipments linking Potosí, Lima, Acapulco, Manila, and Asian markets.', 'Credit and information give influence, but storms, piracy, taxes, and trade restrictions threaten cargo.', 'Move reliable coin and bullion toward the markets where silver buys the most valuable goods.', 'Crown monopoly rules or transport losses could trap capital for years.', 'Global circulation, not extraction alone, gives silver its imperial power.', 'Protect the Manila route and allow licensed private trade.', 'Your global view can reduce miners and port workers to links in a profitable chain.')
    ],
    evidence: [
      E('cerro', 'Cerro Rico', 'The vast Potosí deposit made the city a major source of Spanish American silver after 1545.', 'Establishes the resource base of imperial finance.'),
      E('ore', 'Declining High-Grade Ore', 'By the 1570s, easy rich ore was less available and production required new processing methods.', 'Explains why institutional and technological change occurred.'),
      E('mercury', 'Mercury Amalgamation', 'Pulverized lower-grade ore could yield silver when processed with mercury, water, and mills.', 'Connects technology to expanded extraction.'),
      E('huancavelica', 'Huancavelica Mercury', 'The colonial state linked Potosí to mercury production at Huancavelica.', 'Shows a wider extractive system with environmental and labor costs.'),
      E('mita', 'Colonial Mita', 'Toledo’s 1570s reforms compelled Andean districts to supply rotating workers to mines and refineries.', 'Shows adaptation of an existing labor institution for colonial goals.'),
      E('wage', 'Wage and Skilled Labor', 'Potosí also depended on paid workers, specialists, carriers, refiners, women traders, and service labor.', 'Prevents the labor system from being reduced to one category.'),
      E('tax', 'Royal Share and Assay', 'Registration, minting, and taxes tied mine production directly to Crown revenue.', 'Explains how rulers maintained empire economically.'),
      E('manila', 'Manila–Acapulco Route', 'American silver crossed the Pacific from Acapulco to Manila in exchange for Asian goods.', 'Places Potosí in a trans-Pacific network.'),
      E('china', 'Chinese Demand for Silver', 'Chinese merchants valued silver highly, drawing American bullion into Asian trade.', 'Explains why silver circulated globally.'),
      E('communities', 'Community Disruption', 'Long journeys, dangerous work, debt, absence, and migration reshaped Andean households and villages.', 'Makes the social cost central to the policy choice.')
    ],
    decisions: [
      D('labor', 'Organize mine labor', 'What system should supply workers to mines and mills?', [
        O('mita', 'Impose a large rotating mita', 'Assign compulsory quotas to selected Andean provinces and enforce regular delivery.', 'The state and mine owners receive predictable low-cost labor.', 'Communities absorb coercion, dangerous migration, and demographic disruption.', 'Stable output rests on unequal forced mobility.'),
        O('mixed', 'Limit the mita and expand wages', 'Use a smaller draft for basic needs while paying competitive wages for most work.', 'Workers gain more choice and specialized labor expands.', 'Production costs rise and coercion remains for drafted households.', 'A less violent system yields less immediate surplus.'),
        O('wage', 'Rely on voluntary wage labor', 'End compulsory quotas and attract workers through pay, housing, markets, and safer rotations.', 'Labor freedom and retention improve.', 'Owners and officials fear insufficient workers and reduced tax revenue.', 'Consent requires the empire to surrender cheap labor.')
      ]),
      D('technology', 'Finance the processing system', 'How should mercury amalgamation and water-powered mills be expanded?', [
        O('crown', 'Create a Crown-controlled mercury system', 'Supply regulated mercury, inspect mills, and collect payment through official accounts.', 'The state coordinates scarce inputs and tax records.', 'Bureaucracy, corruption, and forced mercury labor expand.', 'Public coordination spreads both capacity and coercion.'),
        O('owners', 'Subsidize private mill owners', 'Offer credit and mercury allocations in exchange for output commitments.', 'Private capital builds capacity quickly.', 'A small group gains monopoly leverage and may hide production.', 'Rapid investment concentrates economic power.'),
        O('slow', 'Cap production until safeguards improve', 'Restrict mercury use and mine expansion while improving ventilation, water, and labor rules.', 'Workers and local environments face lower immediate harm.', 'Royal revenue and merchant supply fall.', 'Protection limits the extraction that maintains empire.')
      ]),
      D('circulation', 'Direct the silver', 'How should the Crown manage bullion after assay and tax?', [
        O('atlantic', 'Prioritize the Atlantic treasury route', 'Send registered silver through Lima and Panama toward Spain and European obligations.', 'The monarchy receives visible revenue for war, debt, and administration.', 'Smuggling grows and Asian demand is reached indirectly.', 'Central control sacrifices market flexibility.'),
        O('pacific', 'Expand licensed Manila trade', 'Allow more silver to cross from Acapulco to Manila for Asian goods.', 'Merchants tap strong demand and integrate Pacific markets.', 'The Crown fears bullion loss, contraband, and dependence on imported luxuries.', 'Global trade weakens mercantilist control.'),
        O('regional', 'Keep a larger share in American markets', 'Reserve silver for wages, supplies, local credit, and colonial investment.', 'Mining regions and American commerce gain liquidity.', 'Less bullion reaches Spain or Manila.', 'Local development competes with imperial extraction.')
      ])
    ],
    reflectionPrompt: 'Trace one unit of Potosí silver from labor recruitment through processing, taxation, and either the Atlantic or Pacific route. Explain how this chain maintained maritime empire while transforming Andean communities and global markets.',
    sources: [
      { label: 'Library of Congress, A short story about Potosí, Part 2', url: 'https://blogs.loc.gov/international-collections/2022/08/a-short-story-about-potosi-the-largest-south-american-silver-mine-in-the-librarys-collections-part-2-loclr-blogint/' },
      { label: 'Cambridge Core, Free and Unfree Labour in the Colonial Andes', url: 'https://www.cambridge.org/core/journals/international-review-of-social-history/article/free-and-unfree-labour-in-the-colonial-andes-in-the-sixteenth-and-seventeenth-centuries/B00B9D39F97F968E9F6655462D8FB723' },
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
    alignment: { theme: 'Governance (GOV)', objective: 'Explain the effects of the development of state power from 1450 to 1750.', skill: 'Causation and continuity/change', keyConcepts: ['KC-4.3.III.iii', 'Organized resistance', 'Pueblo Revolt of 1680'] },
    premise: [
      'For decades, Spanish colonial and Franciscan authorities have demanded tribute and labor while suppressing Pueblo ceremonies and religious leaders. Drought, famine, epidemic loss, and raids have intensified the crisis, and Spanish protection has often failed to match Spanish demands.',
      'Po’pay and allied organizers are coordinating communities separated by distance, language, and local rivalries. Runners carry knotted cords so villages can count down to a shared uprising, but arrests or betrayal could expose the plan before the Spanish are isolated.',
      'You meet before the revolt begins. You know the burdens and opportunities of 1680, not the later Spanish reconquest. Your plan must explain how local resistance can challenge an empire and what political order should follow if the colonists are driven out.'
    ],
    centralQuestion: 'How should Pueblo communities coordinate resistance to Spanish colonial power, balance secrecy with alliance, and define their goals beyond the immediate expulsion of colonists?',
    roles: [
      R('organizer', 'Alliance Organizer', 'You coordinate timing and messengers among many Pueblo communities.', 'You can carry a common plan, but you cannot command every village or erase long-standing differences.', 'Create simultaneous action strong enough to prevent Spanish forces from defeating communities one by one.', 'A captured runner or early attack could expose the entire alliance.', 'Empire can be challenged when dispersed local grievances become coordinated political action.', 'Use a shared countdown, redundant messengers, and a firm date.', 'Operational unity may conceal disagreements about the world after victory.'),
      R('religious', 'Pueblo Religious Leader', 'You defend ceremonial practice and community authority targeted by missionaries.', 'Your spiritual legitimacy mobilizes people, but open activity has brought arrest and punishment.', 'End religious repression and restore sacred places, objects, and calendars.', 'A military victory without cultural restoration would reproduce colonial priorities.', 'Resistance is about sovereignty over belief as well as taxes and labor.', 'Make religious freedom a nonnegotiable alliance goal.', 'Restoration language can overlook Pueblo communities whose practices and strategies differ.'),
      R('captain', 'Village War Captain', 'You organize fighters, weapons, scouts, and defense of a specific pueblo.', 'You know local terrain but have limited firearms and must protect noncombatants.', 'Defeat nearby colonial forces without leaving the village open to retaliation or raids.', 'Concentrating at Santa Fe may expose homes; staying local may let Spaniards regroup.', 'Tactical choices determine whether coordination becomes effective power.', 'Secure local targets, then combine forces against Santa Fe.', 'Military urgency may overshadow food, diplomacy, and coalition trust.'),
      R('provider', 'Community Provisioner and Diplomat', 'You manage food, water, shelter, kin networks, and contact with uncertain neighbors.', 'The alliance needs your supplies, but drought and previous demands have depleted reserves.', 'Sustain communities through revolt and build agreements that last after combat.', 'A long siege or internal conflict could turn victory into famine.', 'Political independence requires material survival and negotiated relationships.', 'Limit the campaign, protect harvests, and plan councils after expulsion.', 'Caution may underestimate the narrow opportunity created by surprise.')
    ],
    evidence: [
      E('religion', 'Religious Repression', 'Missionaries and officials attacked ceremonies, sacred objects, and religious leadership.', 'Explains cultural and political causes of resistance.'),
      E('labor', 'Tribute and Forced Labor', 'Colonial authorities demanded goods and labor from Pueblo communities.', 'Connects resistance to economic extraction.'),
      E('drought', 'Drought, Famine, and Disease', 'Environmental crisis and population loss made colonial burdens harder to bear.', 'Shows multiple causes interacting.'),
      E('raids', 'Raids and Weak Protection', 'Apache and Navajo raids increased insecurity while Spanish demands continued.', 'Undermines the colonial claim to provide order.'),
      E('arrests', 'Arrests of Religious Leaders, 1675', 'Spanish authorities arrested Pueblo spiritual leaders; punishment and release deepened shared resentment.', 'Provides a mobilizing event and network.'),
      E('cords', 'Knotted-Cord Countdown', 'Runners carried cords whose daily untying coordinated the revolt’s start across distant communities.', 'Shows the communication mechanism of alliance.'),
      E('diversity', 'Many Languages and Communities', 'Pueblo peoples were politically and linguistically diverse rather than one centralized nation.', 'Makes coordination an achievement, not an assumption.'),
      E('santafe', 'Spanish Concentration at Santa Fe', 'Colonial officials and settlers could regroup in the capital if local actions were not connected.', 'Explains the need for a wider strategy.'),
      E('water', 'Water and Siege Geography', 'Control of water and access routes could pressure a concentrated colonial force.', 'Links local environmental knowledge to resistance.'),
      E('unknown', 'No Guaranteed Postwar Unity', 'Removing Spanish rule would not automatically resolve inter-Pueblo rivalries, raids, or resource shortages.', 'Extends the dilemma beyond revolt.')
    ],
    decisions: [
      D('timing', 'Set the uprising in motion', 'How should the alliance balance surprise, preparation, and the danger of discovery?', [
        O('fixed', 'Keep the common countdown', 'Begin on the agreed day across as many communities as possible.', 'Simultaneity isolates colonial targets and demonstrates unity.', 'Any discovered cord may force a premature response.', 'Coordination gains power by creating a single point of failure.'),
        O('early', 'Strike immediately after warning', 'Move as soon as arrests or suspicious activity suggest the plan is exposed.', 'The alliance preserves some surprise and protects organizers.', 'Distant pueblos may not be ready or informed.', 'Speed saves the network by weakening simultaneity.'),
        O('delay', 'Delay for a broader coalition', 'Recruit more hesitant communities and store supplies before acting.', 'The revolt begins with more fighters and deeper preparation.', 'More time increases leaks, arrests, and colonial countermeasures.', 'A larger coalition may lose the moment of opportunity.')
      ]),
      D('campaign', 'Choose the military sequence', 'What should fighters prioritize once the revolt begins?', [
        O('localfirst', 'Remove local authorities first', 'Secure each pueblo, mission, road, and supply point before converging on Santa Fe.', 'Villages remove immediate coercive power and protect local control.', 'Spanish survivors gain time to concentrate in the capital.', 'Local security slows strategic concentration.'),
        O('capital', 'Mass quickly against Santa Fe', 'Bypass smaller targets and combine forces against the colonial center.', 'A decisive collapse at the capital could end organized Spanish rule.', 'Homes and crops remain exposed and coordination becomes difficult.', 'Strategic focus increases local vulnerability.'),
        O('encircle', 'Isolate and negotiate surrender', 'Control roads and water, contain Spanish forces, and demand withdrawal.', 'The alliance may reduce prolonged combat and preserve supplies.', 'Negotiation gives opponents time and requires unified terms.', 'Restraint lowers destruction but risks losing momentum.')
      ]),
      D('aftermath', 'Define independence', 'If Spanish forces leave, what should hold the alliance together?', [
        O('confederation', 'Create an inter-Pueblo council', 'Send delegates to coordinate defense, trade, water, and diplomacy while preserving local rule.', 'Communities gain collective capacity without one central ruler.', 'Old rivalries and uneven participation may paralyze decisions.', 'Shared security requires some surrender of local autonomy.'),
        O('local', 'Return authority fully to each pueblo', 'End the wartime structure once expulsion is complete.', 'Local sovereignty and distinct traditions remain protected.', 'Separate communities may be vulnerable to raids or renewed colonization.', 'Maximum autonomy reduces collective defense.'),
        O('wartime', 'Keep a centralized wartime command', 'Maintain unified military leadership until outside threats clearly recede.', 'The alliance can respond quickly to counterattack.', 'Emergency authority may become coercive and lose local legitimacy.', 'Protection risks reproducing the centralization being resisted.')
      ])
    ],
    reflectionPrompt: 'Explain how religious repression, labor demands, environmental crisis, and political coordination combined to cause the Pueblo Revolt. Then explain one way the revolt changed colonial power and one limitation on that change.',
    sources: [
      { label: 'National Park Service, San José de los Jémez and the Pueblo Revolt', url: 'https://www.nps.gov/subjects/travelspanishmissions/san-jose-de-los-jemez-mission-and-giusewa-pueblo-site.htm' },
      { label: 'National Park Service, Spanish Encounters at Pecos', url: 'https://home.nps.gov/peco/learn/historyculture/spanish-encounters.htm' },
      { label: 'National Park Service, El Camino Real archival study', url: 'https://home.nps.gov/elca/learn/historyculture/upload/ELCA-Archival-Study-12-2020.pdf' }
    ]
  },
  {
    id: '4.7', unit: '4', topicTitle: 'Changing Social Hierarchies', file: 'the-identity-dossier.html',
    title: 'The *Identity Dossier*', location: 'Audiencia hearing, Mexico City', date: 'c. 1715',
    lessonUrl: '../../unit-4/lesson-4-7-changing-social-hierarchies.html',
    alignment: { theme: 'Social Interactions and Organization (SIO)', objective: 'Explain how social categories, roles, and practices have been maintained or challenged over time.', skill: 'Continuity and change over time', keyConcepts: ['KC-4.2.III.A–B', 'KC-4.3.I.B', 'Casta, lineage, status, and social mobility'] },
    premise: [
      'Mexico City’s courts, parishes, guilds, militias, tribute offices, and notaries record people using birthplace, ancestry, legal status, community membership, occupation, reputation, gender, and wealth. These labels affect access to office and honor, but they do not form one perfectly consistent code.',
      'Casta paintings are beginning to present mixed families as an orderly hierarchy for elite viewers. Lived identity is less tidy. A person may be described differently across a baptismal record, marriage petition, tax roll, military roster, or commercial lawsuit, and money or connections can sometimes alter how a claim is received.',
      'This historically grounded composite hearing asks you to evaluate a prosperous mixed-ancestry widow’s petition to expand her shop, enter a restricted commercial association, and have her children recorded under a more privileged identity. Your ruling will expose how race, class, gender, religion, and corporate rights overlap.'
    ],
    centralQuestion: 'How should colonial officials judge identity and access to economic privilege when elite racial hierarchies are powerful but actual status depends on fluid combinations of ancestry, birthplace, wealth, gender, reputation, and community membership?',
    roles: [
      R('petitioner', 'Mixed-Ancestry Widow and Merchant', 'You petition to expand a profitable textile shop and protect your children’s status.', 'Property, customers, parish standing, and legal documents support you, but ancestry and gender restrict formal access.', 'Secure a license, guild connections, and a durable family reputation.', 'Officials may use a racial label to deny rights or expose your property to competitors.', 'Status is made through work, family, reputation, and law, not ancestry alone.', 'Have the court weigh property, Christian standing, and civic service over casta label.', 'Your own upward claim may depend on distancing yourself from poorer or darker communities.'),
      R('clerk', 'Audiencia Clerk and Lineage Examiner', 'You compare petitions, parish records, witness statements, and legal precedents.', 'Your classification shapes the case, but records conflict and policy is inconsistent.', 'Produce a ruling that looks orderly, defensible, and loyal to the Crown.', 'A flexible decision invites accusations of favoritism; a rigid one may ignore evidence and local reality.', 'Colonial government turns social difference into administrative categories.', 'Use documentary lineage plus reputation and legal status.', 'Bureaucratic categories can make constructed hierarchy appear natural.'),
      R('guild', 'Creole Guild Officer', 'You defend a corporate privilege claimed by established Spanish American masters and merchants.', 'The guild can admit, train, and exclude, but courts and markets can challenge its monopoly.', 'Protect quality, family status, and members’ economic advantage.', 'Successful outsiders may erode privilege and reveal that ancestry rules mainly protect competition.', 'Existing elites preserve power through institutions as well as wealth.', 'Admit only under a narrow exception with sponsorship and fees.', 'You may call self-interest tradition and treat social mobility as disorder.'),
      R('militia', 'Free Black Militia Captain and Community Advocate', 'You represent free people of African descent who serve the city but face racial restrictions.', 'Military service and networks bring recognition, yet legal and social prejudice remains.', 'Use service, freedom, property, and reputation to challenge blanket exclusion.', 'An exception for one wealthy petitioner may leave broader inequality untouched.', 'Colonial states both restrict groups and depend on their economic and military contributions.', 'Adopt clear status rights based on freedom and service rather than color labels.', 'Military usefulness is an incomplete foundation for equal civic rights.')
    ],
    evidence: [
      E('peninsular', 'Birthplace and Elite Office', 'Spanish-born peninsulares often held the highest imperial appointments, while American-born creoles formed powerful local elites.', 'Shows a hierarchy within legally Spanish populations.'),
      E('casta', 'Casta Labels', 'Terms for mixed ancestry circulated widely, but they were not one fixed, comprehensive legal code.', 'Corrects an overly rigid ladder model.'),
      E('paintings', 'Casta Paintings', 'Early eighteenth-century paintings arranged mixed families into visual categories for elite viewers.', 'Shows representation and anxiety rather than a neutral census.'),
      E('fluid', 'Context-Dependent Identity', 'Phenotype, occupation, education, clothing, wealth, witnesses, and connections could affect how a person was classified.', 'Explains constrained social mobility.'),
      E('limpieza', 'Limpieza de Sangre', 'Ideas about purity of Christian lineage influenced access to some guilds, schools, religious orders, and honors.', 'Connects Iberian precedent to colonial exclusion.'),
      E('indigenous', 'Indigenous Corporate Status', 'Indigenous towns and subjects could hold recognized communal rights while owing tribute and facing colonial oversight.', 'Shows accommodation and restriction operating together.'),
      E('african', 'Free and Enslaved Africans', 'New Spain included enslaved Africans and large free populations of African descent with varied occupations and legal claims.', 'Prevents race from being reduced to one status.'),
      E('women', 'Women, Property, and Business', 'Widows and other women could own property, make contracts, and run enterprises while facing gendered limits.', 'Adds gender to social hierarchy.'),
      E('guilds', 'Corporate Privilege', 'Guilds and other bodies used membership rules to protect training, honor, and economic advantage.', 'Shows how elites maintained status institutionally.'),
      E('service', 'Service and Reputation', 'Military, religious, charitable, and civic service could strengthen petitions for recognition without eliminating prejudice.', 'Shows negotiation inside hierarchy.')
    ],
    decisions: [
      D('record', 'Classify the petitioner', 'What evidence should carry the most weight in the official record?', [
        O('lineage', 'Prioritize documented lineage', 'Use parish ancestry and birthplace as the controlling classification.', 'Clerks and established elites gain a simple, reproducible rule.', 'Records are incomplete and ancestry becomes destiny regardless of lived status.', 'Administrative clarity hardens racial hierarchy.'),
        O('context', 'Use lineage, status, and reputation together', 'Weigh ancestry alongside freedom, property, occupation, witnesses, and parish standing.', 'The ruling better reflects social reality and individual evidence.', 'Discretion favors people with money and influential sponsors.', 'Flexibility creates mobility without equal treatment.'),
        O('legal', 'Record only legal freedom and residence', 'Remove informal casta labels from this commercial ruling.', 'Free residents face fewer ancestry-based barriers.', 'Elite institutions may resist and racial prejudice continues outside the file.', 'A narrower state category changes law faster than society.')
      ]),
      D('license', 'Rule on commercial access', 'Should the petitioner enter the restricted association and expand the shop?', [
        O('deny', 'Deny under existing privilege', 'Reserve membership for candidates accepted by established lineage rules.', 'Guild officers preserve monopoly and familiar standards.', 'The court protects competitors rather than demonstrated skill.', 'Elite continuity blocks economic mobility.'),
        O('exception', 'Grant a sponsored exception', 'Admit the petitioner after fees, examination, and support from current members.', 'One qualified business gains access without abolishing the institution.', 'The result depends on wealth and patronage rather than a general right.', 'Individual mobility leaves the hierarchy intact.'),
        O('open', 'Open membership by skill and solvency', 'Replace ancestry restrictions with examination, fees scaled to means, and legal freedom.', 'More artisans and merchants can compete and contribute.', 'Current members lose protected status and may organize resistance.', 'Economic access expands by weakening corporate privilege.')
      ]),
      D('children', 'Record the next generation', 'How should officials handle the requested status of the petitioner’s children?', [
        O('inherit', 'Make the mother’s assigned casta hereditary', 'Use the hearing’s lineage category in future education, marriage, and office records.', 'Officials gain continuity across files.', 'A contested label fixes descendants’ opportunities.', 'Record consistency turns prejudice into inherited structure.'),
        O('separate', 'Judge each future petition separately', 'Allow later courts to consider each child’s education, occupation, marriage, and reputation.', 'Status remains responsive to individual circumstances.', 'Uncertainty and unequal access to witnesses or money persist.', 'Mobility becomes possible but arbitrary.'),
        O('civil', 'Use a common free-citizen record', 'List parentage factually but bar casta labels from determining ordinary civic and commercial rights.', 'Children face fewer official ancestry barriers.', 'Corporate and imperial elites may refuse to recognize the reform.', 'Formal inclusion can outpace enforcement and social attitudes.')
      ])
    ],
    reflectionPrompt: 'Explain one continuity and two changes in social hierarchy caused by maritime expansion. Your response must distinguish elite representations such as casta paintings from the more fluid, but still unequal, ways identity operated in colonial life.',
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
