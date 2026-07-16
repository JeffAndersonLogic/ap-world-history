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
      'King João II is preparing a new Portuguese expedition beyond the farthest mapped point on the west coast of Africa. The Crown wants a sea route into the Indian Ocean, but no Portuguese captain has yet rounded Africa’s southern end and returned with proof.',
      'The council does not possess one miraculous invention. Mariners combine a compass with latitude observations, Mediterranean and Atlantic sail plans, stronger hulls, portolan knowledge, African coastal intelligence, and growing experience with Atlantic wind and current systems.',
      'You must design Bartolomeu Dias’s expedition without relying on the later myth of a single navigation school at Sagres. Your recommendation must show how borrowed knowledge, ship design, state finance, and accumulated voyage data work together.'
    ],
    centralQuestion: 'How should the Portuguese Crown combine navigational instruments, ship design, wind knowledge, and state-sponsored information to find and return from a route around southern Africa?',
    roles: [
      R('pilot', 'Royal Pilot', 'You turn compass headings, latitude observations, soundings, and experience into a working route.', 'You direct navigation at sea, but longitude remains unsolved and observations fail in bad weather.', 'Bring the expedition home with reliable route knowledge.', 'Dead reckoning errors or an unfamiliar current could carry every ship beyond recovery.', 'Instruments are useful only when an experienced pilot interprets them together.', 'Redundant observations, careful logs, and conservative course changes.', 'You may undervalue experimental ship design and the political pressure for a dramatic discovery.'),
      R('shipwright', 'Lisbon Shipwright', 'You advise on hull, rig, cargo capacity, repair materials, and handling.', 'You can alter the vessels before departure, but every added capability costs space, money, or speed.', 'Build ships able to survive Atlantic seas and still maneuver near unknown coasts.', 'A large cargo ship may be too slow; a small caravel may lack provisions for a long southern sweep.', 'Ocean travel depends on balancing maneuverability, endurance, and load.', 'A mixed fleet with complementary vessels and spare rigging.', 'You may treat human endurance and navigational knowledge as secondary to hardware.'),
      R('cosmographer', 'Royal Cosmographer and Chart Keeper', 'You compare charts, latitude tables, travelers’ reports, and astronomical knowledge.', 'You control official copies and recommendations, but much of the coast remains conjecture.', 'Turn discoveries into cumulative state knowledge rather than isolated sailor memory.', 'Bad assumptions copied onto official charts could mislead multiple expeditions.', 'Diffused Chinese, Islamic, Mediterranean, and Atlantic knowledge becomes powerful when recorded and tested.', 'Standardized logs and a controlled archive that updates after every voyage.', 'Secrecy can slow correction and prevent useful knowledge from reaching working mariners.'),
      R('factor', 'Crown Trade and Finance Factor', 'You connect the voyage to gold trade, Elmina, supplies, and royal revenue.', 'You can fund ships and coastal contacts, but the treasury expects measurable returns.', 'Find a route that expands trade without consuming years of revenue.', 'A prestige expedition may wreck valuable ships and disrupt profitable West African commerce.', 'Technology spreads when states and merchants can finance repeated use.', 'Stage supplies and intelligence through existing Atlantic and African networks.', 'You may judge scientific and geographic knowledge only by immediate profit.')
    ],
    evidence: [
      E('compass', 'Magnetic Compass', 'A compass supplied direction when clouds or open water removed visible landmarks.', 'Shows Chinese-origin knowledge adapted through wider exchange.'),
      E('astrolabe', 'Mariner’s Astrolabe', 'By the late fifteenth century, a simplified sea astrolabe helped pilots estimate latitude from celestial altitude.', 'Connects Islamic astronomical knowledge to navigation.'),
      E('caravel', 'Caravel', 'A relatively small, maneuverable vessel could explore coasts and use lateen rigging to work across changing winds.', 'Shows what ship design contributed—and what it could not carry.'),
      E('supplyship', 'Stores Ship', 'A larger supply vessel could extend range but moved less easily near unknown shores.', 'Creates a design tradeoff between endurance and maneuver.'),
      E('volta', 'Volta do Mar', 'Portuguese experience showed that returning north could require sailing west into the Atlantic to catch favorable winds.', 'Makes wind systems a form of technology and learned geography.'),
      E('charts', 'Portolan and Coastal Logs', 'Bearings, harbors, soundings, and hazards accumulated from one voyage to the next.', 'Explains cumulative information infrastructure.'),
      E('elmina', 'Elmina, 1482', 'The Crown’s fortified trading post on the Gold Coast supplied profit, experience, and a southern base of knowledge.', 'Links technology to state-sponsored trade.'),
      E('african', 'African Coastal Knowledge', 'Interpreters, pilots, merchants, and communities along the coast possessed geographic and commercial information Europeans needed.', 'Prevents a one-sided invention narrative.'),
      E('secrecy', 'Royal Information Control', 'The Portuguese Crown treated route and chart knowledge as strategic assets in competition with other states.', 'Shows why diffusion and secrecy existed together.'),
      E('longitude', 'No Reliable Longitude', 'Pilots could estimate latitude more reliably than east-west position.', 'Keeps the technological limits visible.')
    ],
    decisions: [
      D('fleet', 'Design the expedition fleet', 'Which combination of vessels best balances exploration, survival, and supply?', [
        O('mixed', 'Send two caravels and a stores ship', 'Use maneuverable exploration vessels supported by a larger supply carrier.', 'Pilots gain range and redundancy.', 'The slower supply ship may become a liability in storms or close coasts.', 'Endurance improves at the cost of speed and coordination.'),
        O('caravels', 'Send only light caravels', 'Prioritize maneuver, shallow draft, and the ability to explore uncertain coastlines.', 'Ship crews can probe bays and react quickly.', 'Food, water, repair stores, and trade goods are limited.', 'Mobility increases the risk of running out of necessities.'),
        O('carracks', 'Send large cargo vessels', 'Build the mission around strong, capacious ships prepared for a direct trade route.', 'The Crown can carry provisions and valuable return cargo.', 'Large ships are harder to handle near an unmapped coast.', 'Commercial capacity arrives before the route is understood.')
      ]),
      D('route', 'Choose the southern search pattern', 'How should pilots respond when coastal winds and currents block progress?', [
        O('offshore', 'Sweep far into the South Atlantic', 'Use accumulated wind knowledge to sail away from the coast and search for westerlies farther south.', 'The fleet may bypass hostile coastal winds and round the cape.', 'Land disappears and dead-reckoning errors compound.', 'The best wind route sacrifices geographic certainty.'),
        O('coastal', 'Remain close to the African coast', 'Map every inlet and advance only while land and soundings remain available.', 'Charts become detailed and resupply contacts remain possible.', 'Contrary winds and dangerous lee shores can halt or wreck the fleet.', 'Better mapping slows the strategic search.'),
        O('staged', 'Establish a new forward base first', 'Spend the voyage extending secure supply and intelligence networks before attempting the final rounding.', 'Later expeditions inherit better support.', 'The Crown delays the hoped-for breakthrough and pays for another voyage.', 'Lower risk produces slower discovery.')
      ]),
      D('knowledge', 'Control the new knowledge', 'If the ships return with a workable route, how should the Crown use the information?', [
        O('archive', 'Keep a controlled royal archive', 'Standardize logs and charts but restrict copies to licensed pilots and Crown expeditions.', 'Portugal protects a competitive advantage.', 'Secrecy narrows review and may preserve errors.', 'Strategic control slows useful diffusion.'),
        O('pilots', 'Circulate among trained pilots', 'Share corrected charts and tables broadly inside the Portuguese maritime community.', 'More mariners can test and improve the route.', 'Commercial rivals may obtain the material through ports and crews.', 'Rapid learning weakens exclusivity.'),
        O('publish', 'Print and sell the findings', 'Use print to spread geographic knowledge and attract investors and specialists.', 'Knowledge, finance, and recruitment expand quickly.', 'Portugal gives competitors the route it financed.', 'Innovation accelerates by surrendering monopoly.')
      ])
    ],
    reflectionPrompt: 'Explain why no single invention caused Portuguese oceanic expansion. Build a causal chain connecting at least two borrowed technologies, one environmental knowledge system, and state sponsorship to the ability to travel and trade across oceans.',
    sources: [
      { label: 'Royal Museums Greenwich — What is a mariner’s astrolabe?', url: 'https://www.rmg.co.uk/stories/space-astronomy/what-mariners-astrolabe' },
      { label: 'Encyclopaedia Britannica — Bartolomeu Dias', url: 'https://www.britannica.com/biography/Bartolomeu-Dias' },
      { label: 'Encyclopaedia Britannica — European exploration: The Age of Discovery', url: 'https://www.britannica.com/topic/European-exploration/The-Age-of-Discovery' }
    ]
  },
  {
    id: '4.4', unit: '4', topicTitle: 'Maritime Empires Established', file: 'the-goa-fort-council.html',
    title: 'The *Goa Fort Council*', location: 'Goa, Estado da Índia', date: '1515',
    lessonUrl: '../../unit-4/lesson-4-4-maritime-empires-established.html',
    alignment: { theme: 'Governance (GOV) and Economic Systems (ECN)', objective: 'Explain the process of state building and expansion among various empires and states from 1450 to 1750.', skill: 'Comparison and causation', keyConcepts: ['KC-4.3.II.A.i–iii', 'KC-4.3.II.C', 'Trading-post and territorial empires'] },
    premise: [
      'Portugal has seized Goa in 1510, Malacca in 1511, and Hormuz in 1515. Afonso de Albuquerque’s victories give the Crown fortified positions from the western Indian Ocean toward Southeast Asia, but Portugal lacks the people and money to conquer the vast regions behind those ports.',
      'The Indian Ocean was already a dense commercial world. Gujarati, Arab, Persian, African, Malay, Chinese, and many other merchants continue to move textiles, spices, horses, metals, and food through regional networks. Portuguese cannon can threaten ships and ports; it cannot replace those traders or their knowledge.',
      'With Albuquerque dead, Goa’s council must decide what kind of empire to establish: a chain of forts and sea passes, a wider territorial colony, or a negotiated place inside existing markets. Every option depends on local allies while redistributing coercion and profit.'
    ],
    centralQuestion: 'How should Portugal establish a durable maritime empire in the Indian Ocean when naval firepower can seize strategic ports but existing Asian merchants, rulers, and trade networks remain indispensable?',
    roles: [
      R('captain', 'Portuguese Fortress Captain', 'You command soldiers, cannon, and ships responsible for Goa and nearby sea lanes.', 'You can use force at key points, but reinforcements and pay arrive slowly from Lisbon.', 'Hold Goa, protect Portuguese shipping, and deter hostile fleets.', 'A scattered garrison may lose both the port and the fleet to a regional coalition.', 'A few fortified choke points can magnify limited manpower.', 'Prioritize forts, patrols, and control of strategic harbors.', 'Military control of water does not create commercial legitimacy or inland supply.'),
      R('factor', 'Crown Factor', 'You manage royal warehouses, customs, monopoly cargoes, and accounts.', 'You can license trade and purchase goods, but private merchants and corruption evade Crown rules.', 'Make the Estado profitable enough to finance itself.', 'Expensive garrisons and coercive monopolies may drive merchants to rival ports.', 'Empire survives when customs and high-value trade pay for force.', 'Use cartaz passes and targeted monopolies rather than territorial conquest.', 'Revenue figures can hide violence and the resilience of trade outside Portuguese control.'),
      R('gujarati', 'Gujarati Merchant-Broker', 'You connect textiles, credit, shipping, and commercial communities across western India.', 'Portuguese officials need your networks, but can seize ships or restrict routes.', 'Keep trade moving, protect partners, and prevent one armed state from dictating all terms.', 'The cartaz system and forced port calls may destroy margins or expose ships to confiscation.', 'Commercial networks outlast conquerors because trust and credit cross political borders.', 'Negotiate predictable duties and freedom for regional trade.', 'Your focus on merchant access may overlook laborers and communities harmed by war and extraction.'),
      R('goan', 'Goan Municipal and Landholding Representative', 'You speak for local households, cultivators, temples, churches, and officials adapting to new rule.', 'Local knowledge and food supply give leverage, but the occupying regime controls armed force and appointments.', 'Preserve property, worship, irrigation, and a meaningful role in government.', 'Aggressive conversion, confiscation, or military taxation may turn occupation into rebellion.', 'Ports cannot function without the society and countryside behind them.', 'Secure local law, negotiated taxation, and municipal participation.', 'Elite accommodation may protect your circle more than lower-status residents.')
    ],
    evidence: [
      E('goa', 'Goa Captured, 1510', 'Albuquerque made Goa the principal Portuguese base on India’s west coast.', 'Shows a strategic port becoming an imperial headquarters.'),
      E('malacca', 'Malacca Captured, 1511', 'Control of Malacca offered leverage near the route between the Indian Ocean and South China Sea.', 'Explains the choke-point strategy.'),
      E('hormuz', 'Hormuz Submission, 1515', 'A Portuguese fortress and tribute arrangement extended influence at the Persian Gulf entrance.', 'Shows empire through selected nodes and negotiated submission.'),
      E('limited', 'Limited Portuguese Manpower', 'Portugal could garrison key positions but could not occupy the Indian Ocean’s enormous inland regions.', 'Sets the central strategic constraint.'),
      E('networks', 'Existing Asian Trade Networks', 'Intra-Asian merchants and regional markets continued to flourish after Europeans arrived.', 'Prevents an inaccurate replacement narrative.'),
      E('cartaz', 'Cartaz Sea Pass', 'Portuguese authorities required many vessels to buy passes, follow approved routes, and face inspection.', 'Shows coercive regulation of maritime trade.'),
      E('cannon', 'Naval Cannon and Forts', 'Ship-mounted artillery and fortified ports let a small force threaten concentrated maritime targets.', 'Explains the military mechanism of expansion.'),
      E('brokers', 'Brokers, Pilots, and Credit', 'European officials depended on local navigators, interpreters, suppliers, financiers, and merchant communities.', 'Shows dependence inside dominance.'),
      E('rivals', 'Ottoman and Regional Rivals', 'Portuguese positions faced resistance from regional rulers and wider Muslim commercial and imperial networks.', 'Adds interstate and local contestation.'),
      E('conversion', 'Mission and Conversion', 'The Crown joined trade and war to Christian mission, creating support and conflict in occupied communities.', 'Connects religious and political expansion.')
    ],
    decisions: [
      D('shape', 'Choose the imperial shape', 'Where should Portugal concentrate scarce troops and ships?', [
        O('network', 'Build a fortified port network', 'Hold Goa and selected choke points while projecting naval power between them.', 'The Crown magnifies limited manpower and controls strategic routes.', 'Unfortified coasts and regional trade remain outside direct control.', 'Wide maritime reach comes with shallow territorial authority.'),
        O('territory', 'Conquer the coastal hinterland', 'Expand inland from Goa to secure food, taxes, converts, and a larger territorial base.', 'The regime gains resources and a defensible colony.', 'Occupation consumes troops and provokes rulers and communities beyond the port.', 'Deeper control sharply narrows geographic reach.'),
        O('treaties', 'Rely on treaties and tribute', 'Negotiate access with rulers and fortify only the most vulnerable commercial stations.', 'Trade expands at lower military cost.', 'Agreements depend on local politics and may collapse when allies change.', 'Flexible influence is less enforceable than conquest.')
      ]),
      D('shipping', 'Regulate Indian Ocean shipping', 'How aggressively should the Estado impose the cartaz system?', [
        O('strict', 'Require passes and approved ports', 'Seize unlicensed ships and compel high-value cargoes through Portuguese customs.', 'Crown officials and licensed merchants gain revenue and leverage.', 'Merchants reroute, resist, or seek armed protection from rival states.', 'Monopoly income grows by disrupting existing commerce.'),
        O('targeted', 'Target only strategic cargoes and rivals', 'License ordinary regional trade while controlling war materials and selected spices.', 'Most markets continue while Portugal focuses enforcement.', 'Smuggling and ambiguous categories weaken the monopoly.', 'Commercial cooperation reduces direct Crown profit.'),
        O('open', 'Use low duties and open access', 'Make Goa attractive through predictable customs rather than forced routing.', 'Merchants voluntarily bring traffic, supplies, and information.', 'Lisbon may see the policy as surrendering monopoly gains.', 'A stronger port produces less control over the sea.')
      ]),
      D('governance', 'Govern Goa', 'How should Portuguese officials rule the occupied city and countryside?', [
        O('accommodate', 'Preserve local law and municipal roles', 'Recognize property and community institutions while collecting negotiated taxes.', 'Residents and local elites have reasons to cooperate.', 'Officials and missionaries may oppose limits on royal and religious power.', 'Stability is purchased by sharing authority.'),
        O('assimilation', 'Impose Portuguese institutions quickly', 'Replace offices, expand conversion policy, and standardize law under the Crown.', 'The regime creates a visibly Portuguese capital.', 'Coercion risks flight, resistance, and loss of essential expertise.', 'Uniformity weakens the society that sustains the port.'),
        O('merchantcity', 'Empower resident merchant households', 'Give Portuguese casados and approved local brokers broad commercial and civic privileges.', 'Permanent families invest in the city and mediate trade.', 'A new oligarchy may evade Crown control and exploit other residents.', 'Local durability creates an elite with interests distinct from Lisbon.')
      ])
    ],
    reflectionPrompt: 'Compare the Portuguese trading-post model with a territorial colonial model. Explain how forts, cannon, passes, and state rivalry established maritime power—and why continued Asian trade and local intermediaries limited European control.',
    sources: [
      { label: 'Metropolitan Museum of Art — Sultans of Deccan India, 1500–1700', url: 'https://resources.metmuseum.org/resources/metpublications/pdf/Sultans_of_Deccan_India_1500_1700.pdf' },
      { label: 'Encyclopaedia Britannica — Afonso de Albuquerque', url: 'https://www.britannica.com/biography/Afonso-de-Albuquerque' },
      { label: 'Encyclopaedia Britannica — India: The Portuguese', url: 'https://www.britannica.com/place/India/The-Portuguese' }
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
    centralQuestion: 'How should the Viceroyalty reorganize labor, technology, taxation, and silver routes to maintain Potosí’s output—and who will bear the costs of making the mine a center of global trade?',
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
      { label: 'Library of Congress — A short story about Potosí, Part 2', url: 'https://blogs.loc.gov/international-collections/2022/08/a-short-story-about-potosi-the-largest-south-american-silver-mine-in-the-librarys-collections-part-2-loclr-blogint/' },
      { label: 'Cambridge Core — Free and Unfree Labour in the Colonial Andes', url: 'https://www.cambridge.org/core/journals/international-review-of-social-history/article/free-and-unfree-labour-in-the-colonial-andes-in-the-sixteenth-and-seventeenth-centuries/B00B9D39F97F968E9F6655462D8FB723' },
      { label: 'Library of Congress — Negotiating Empire: Founding Manila', url: 'https://blogs.loc.gov/international-collections/2021/10/negotiating-empire-part-i-from-magellan-to-the-founding-of-manila-16th-18th-centuries/' },
      { label: 'Metropolitan Museum of Art — Interwoven Globe', url: 'https://www.metmuseum.org/exhibitions/listings/2013/interwoven-globe' }
    ]
  },
  {
    id: '4.2', unit: '4', topicTitle: 'Exploration: Causes and Events', file: 'the-santa-fe-bargain.html',
    title: 'The *Santa Fe Bargain*', location: 'Royal camp at Santa Fe, outside Granada', date: 'April 1492',
    lessonUrl: '../../unit-4/lesson-4-2-exploration.html',
    alignment: { theme: 'Governance (GOV) and Economic Systems (ECN)', objective: 'Explain the causes and effects of the state-sponsored expansion of maritime exploration.', skill: 'Causation and comparison', keyConcepts: ['KC-4.1.III', 'KC-4.1.III.A–C', 'State sponsorship and rivalry'] },
    premise: [
      'Granada has surrendered to Isabella of Castile and Ferdinand of Aragon. Christopher Columbus has returned to court with a proposal to sail west to Asia. Portugal is already pushing around Africa, and the Spanish monarchs must decide whether a small Atlantic gamble can open a competing route.',
      'Columbus underestimates the distance to Asia and asks for titles, authority, and a share of profits if he succeeds. His plan draws on Atlantic island experience and prevailing winds, but no one in the room knows that two continents stand between Europe and East Asia.',
      'You negotiate before departure. Judge only the evidence available in 1492, while recognizing that the contract will shape who receives wealth, authority, and religious power if the voyage reaches inhabited lands.'
    ],
    centralQuestion: 'Should the Spanish Crown sponsor Columbus’s westward voyage, and what limits should it place on the explorer’s profit, authority, religious mission, and future claims?',
    roles: [
      R('columbus', 'Christopher Columbus', 'You propose the westward voyage and demand reward if it succeeds.', 'You offer experience and persistence but need royal ships, legal authority, and money.', 'Secure the voyage, hereditary titles, and a share of future trade.', 'The Crown may reject you again or reduce you to a salaried pilot.', 'A short western route can outflank Portugal and reach Asian wealth.', 'Broad titles and control over lands and trade you discover.', 'Your distance calculation is badly wrong and your language of possession ignores the sovereignty of people you may encounter.'),
      R('treasurer', 'Royal Finance Secretary', 'You calculate cost, credit, expected revenue, and contractual exposure.', 'You can assemble financing and shape the Capitulations, but cannot guarantee a return.', 'Buy a strategic opportunity without granting away the Crown’s future authority.', 'A cheap voyage can still create expensive rescue, war, or legal obligations.', 'State sponsorship should exchange limited present risk for controlled future benefit.', 'Fund a small fleet with conditional rewards and strong royal oversight.', 'Financial terms can make conquest and extraction look like neutral accounting.'),
      R('confessor', 'Royal Confessor and Church Adviser', 'You evaluate conversion, papal legitimacy, and moral obligation.', 'Your counsel influences the monarchs, but sailors and financiers control operations.', 'Expand Christianity without creating scandal or uncontrolled violence.', 'Commercial motives may hide coercion behind religious language.', 'Spiritual aims and royal sovereignty are inseparable in Iberian expansion.', 'Authorize mission under explicit Crown and Church rules.', 'You may assume conversion justifies entering societies that did not invite Spanish rule.'),
      R('diplomat', 'Iberian Diplomatic Adviser', 'You track Portuguese claims, Atlantic islands, papal politics, and rival courts.', 'You can anticipate conflict and negotiate boundaries, but cannot erase competing ambitions.', 'Prevent the voyage from triggering an unwinnable war with Portugal.', 'Unclear claims may turn one expedition into a lasting imperial rivalry.', 'Exploration is a contest among states as much as a sailor’s achievement.', 'Sponsor cautiously and prepare a negotiated line of demarcation.', 'A treaty between European monarchs cannot legitimately divide lands owned by others.')
    ],
    evidence: [
      E('portugal', 'Portuguese African Route', 'Portugal had spent decades building coastal knowledge and trade while seeking a route around Africa.', 'Creates interstate pressure on Spain.'),
      E('granada', 'Granada Captured', 'The final Nasrid kingdom surrendered in January 1492, freeing attention while leaving the Crown with military expenses.', 'Connects religious politics and state capacity.'),
      E('canaries', 'Canary Island Experience', 'Castilian possession of the Canaries offered a staging point near favorable Atlantic winds.', 'Shows geography and prior colonization enabling the plan.'),
      E('distance', 'A Miscalculated Earth', 'Columbus argued Asia lay much closer to the west than it actually did.', 'Reveals that sponsorship rested partly on error.'),
      E('capitulations', 'Capitulations of Santa Fe', 'The proposed contract tied success to offices, status, jurisdiction, and a share of profits.', 'Shows how states delegated exploration through incentives.'),
      E('crew', 'Small Initial Fleet', 'Three vessels limited direct royal cost but also limited supplies, security, and communication.', 'Creates a risk-versus-cost calculation.'),
      E('religion', 'Religious Motivation', 'The monarchs and Columbus linked travel to conversion and the wider struggle against non-Christian powers.', 'Adds a motive beyond profit.'),
      E('trade', 'Asian Luxury Trade', 'Spices and other Asian goods reached Europe through expensive, established networks.', 'Explains the economic attraction of an alternative route.'),
      E('rivalclaims', 'Competing Atlantic Claims', 'Castile and Portugal had already disputed islands, coasts, and navigation rights.', 'Makes diplomacy a precondition of exploration.'),
      E('sovereignty', 'Unknown Peoples, Existing Polities', 'Any inhabited land encountered would already contain communities with their own authority and claims.', 'Challenges the assumption that discovery creates ownership.')
    ],
    decisions: [
      D('sponsor', 'Decide the sponsorship', 'What commitment should the Crown make before the route is proven?', [
        O('limited', 'Fund one limited voyage', 'Provide three ships and supplies with a clear return deadline and reporting duty.', 'The Crown tests the route at manageable cost.', 'The expedition may fail because it is too small or undersupplied.', 'Low investment limits both loss and capability.'),
        O('major', 'Launch a large royal expedition', 'Send more ships, soldiers, clergy, and trade goods from the start.', 'A larger force can survive, trade, and defend claims.', 'The cost is high and a military posture raises the chance of violence.', 'Capacity and coercive power arrive together.'),
        O('reject', 'Reject the western route', 'Concentrate Spanish resources on the Mediterranean, Canaries, and intelligence about Portugal.', 'The Crown avoids a poorly calculated gamble.', 'Portugal or another state may secure a decisive route first.', 'Fiscal caution risks strategic exclusion.')
      ]),
      D('contract', 'Set Columbus’s reward', 'What should the Crown promise if the voyage succeeds?', [
        O('broad', 'Grant broad hereditary titles', 'Accept extensive offices, jurisdiction, and profit shares to motivate the explorer.', 'Columbus receives the status he demands and bears personal risk.', 'The Crown may create an autonomous dynasty over vast territories.', 'Strong incentives weaken future royal control.'),
        O('conditional', 'Make offices conditional and reviewable', 'Reward discovery but require audits, fixed terms, and confirmation after each voyage.', 'The Crown preserves leverage and can correct abuse.', 'Columbus may refuse or lack incentive to recruit investors and crew.', 'Accountability reduces the private reward for risk.'),
        O('salary', 'Hire him as a royal pilot', 'Pay salary and bonus while reserving all jurisdiction and trade rights to the monarchs.', 'Future authority remains unmistakably royal.', 'The proposer gains little reason to accept danger after years of lobbying.', 'Central control may prevent the voyage from happening.')
      ]),
      D('claims', 'Define conduct beyond the ocean', 'What instructions should govern encounters and territorial claims?', [
        O('tradefirst', 'Require trade and diplomacy first', 'Permit exchange and mission but forbid territorial seizure without later royal review.', 'Encounter begins with lower coercion and better information.', 'A small crew may ignore orders or rivals may claim strategic sites.', 'Restraint protects legitimacy but slows empire.'),
        O('claim', 'Authorize immediate claims', 'Allow Columbus to claim lands for the Crown and establish forts where useful.', 'Spain can move quickly before Portugal or other rivals.', 'European ceremony replaces consent and invites violent resistance.', 'Strategic speed rests on denying existing sovereignty.'),
        O('papal', 'Seek papal and Portuguese settlement', 'Delay broad claims until the Crown obtains religious sanction and negotiates a boundary.', 'Spain reduces war risk and strengthens European legal recognition.', 'People outside Europe remain excluded from the decision.', 'Diplomatic legitimacy among rivals does not equal legitimate ownership.')
      ])
    ],
    reflectionPrompt: 'Explain how political rivalry, economic ambition, religion, technology, and contractual incentives combined to cause state-sponsored exploration. Identify one way Spanish motives resembled Portuguese motives and one important difference in route or imperial outcome.',
    sources: [
      { label: 'Library of Congress — Christopher Columbus: Man and Myth', url: 'https://www.loc.gov/exhibits/1492/columbus.html' },
      { label: 'Library of Congress — 1492: An Ongoing Voyage', url: 'https://www.loc.gov/exhibits/1492/' },
      { label: 'Encyclopaedia Britannica — Treaty of Tordesillas', url: 'https://www.britannica.com/event/Treaty-of-Tordesillas' }
    ]
  },
  {
    id: '4.3', unit: '4', topicTitle: 'Columbian Exchange', file: 'the-replanting-council.html',
    title: 'The *Replanting Council*', location: 'Valley of Mexico', date: '1522',
    lessonUrl: '../../unit-4/lesson-4-3-columbian-exchange.html',
    alignment: { theme: 'Humans and the Environment (ENV)', objective: 'Explain the causes and effects of the Columbian Exchange.', skill: 'Causation and continuity/change', keyConcepts: ['KC-4.1.V', 'KC-4.1.V.A–D', 'Biological exchange and demographic change'] },
    premise: [
      'War and smallpox have devastated the Valley of Mexico. Survivors now face an environmental transformation as Iberian settlers bring wheat, sugar, cattle, sheep, pigs, and horses into landscapes long organized around maize, beans, squash, chinampas, tribute, and local market exchange.',
      'This is a historically grounded composite council rather than a claim that these four people met as equals. It makes visible groups whose knowledge and labor shaped the exchange but whose power was profoundly unequal under Spanish colonial rule.',
      'The organisms moving across the Atlantic do not have one effect. Some increase food supply or transport; others spread disease, damage fields, seize land, or intensify coerced labor. Your choices must protect survival while explaining who controls the benefits and bears the costs.'
    ],
    centralQuestion: 'How should communities in the Valley of Mexico rebuild food, land use, and labor after epidemic collapse while responding to the unequal biological and economic forces of the Columbian Exchange?',
    roles: [
      R('nahua', 'Nahua Altepetl Representative', 'You speak for households rebuilding fields, canals, tribute obligations, and local authority.', 'Your community controls essential knowledge and labor but colonial officials and settlers command armed force.', 'Restore population, maize production, ritual life, and collective land.', 'Livestock, tribute, and epidemic recurrence may destroy what war left intact.', 'Exchange must be judged by community survival, not merely by new goods.', 'Protect chinampas and communal fields while adopting only useful transfers.', 'Your priority for local autonomy may not stop settlers from using royal grants.'),
      R('healer', 'Indigenous Healer and Herbal Specialist', 'You organize care using local medical knowledge while observing unfamiliar disease patterns.', 'People trust your practice, but neither you nor European physicians know germ theory or immunity.', 'Care for the sick, preserve knowledge, and prevent fear from fragmenting communities.', 'Colonial authorities may blame local religion or force patients into unsafe spaces.', 'The epidemic is both a biological disaster and a crisis of social support.', 'Disperse care, protect water and food, and record which practices help.', 'Without knowledge of invisible pathogens, some explanations and treatments will be ineffective.'),
      R('settler', 'Castilian Settler and Livestock Owner', 'You seek land for wheat, cattle, sheep, and market production.', 'Royal grants and animals give you leverage, but you depend on Indigenous labor and local food.', 'Create a profitable colonial estate and supply the growing Spanish town.', 'Uncontrolled herds, conflict, or labor flight could collapse production.', 'Old World plants and animals can turn conquest into a durable economy.', 'Fence grazing, expand wheat, and negotiate regular labor drafts.', 'You may describe land as unused when communities already hold and manage it.'),
      R('african', 'African Agricultural and Transport Specialist', 'You bring crop, livestock, and Atlantic-world knowledge while living under a system that threatens enslavement and coercion.', 'Your expertise is valuable, but racial status and legal freedom are insecure.', 'Protect family and freedom while making indispensable contributions visible.', 'Colonists may appropriate knowledge and impose forced plantation or transport labor.', 'The exchange moved people and expertise as well as plants, animals, and pathogens.', 'Diversify crops and markets while rejecting hereditary chattel slavery.', 'Individual bargaining cannot by itself overturn an expanding coerced-labor system.')
    ],
    evidence: [
      E('smallpox', 'Smallpox Epidemic', 'Smallpox reached central Mexico amid war; Indigenous populations lacked prior exposure and suffered catastrophic mortality.', 'Shows the most destructive unintended transfer.'),
      E('vectors', 'Unintended Disease Vectors', 'Ships and settlements moved pathogens and disease carriers without participants understanding the process.', 'Explains why biological exchange exceeded deliberate policy.'),
      E('maize', 'Maize, Beans, and Chinampas', 'Existing American crops and intensive wetland agriculture sustained dense populations and urban markets.', 'Establishes continuity and local expertise.'),
      E('wheat', 'Wheat and Sugar', 'European grains and sugar entered American production; sugar became tied to export plantations and coerced labor.', 'Connects crop transfer to economic systems.'),
      E('animals', 'Cattle, Sheep, Pigs, and Horses', 'Introduced animals supplied transport, meat, hides, and power but also trampled crops and altered land use.', 'Shows mixed environmental consequences.'),
      E('land', 'Depopulation and Land Claims', 'Population loss made it easier for colonists to claim fields and grazing space that still belonged to surviving communities.', 'Connects disease to conquest and inequality.'),
      E('labor', 'Labor Crisis and Coercion', 'Demographic collapse and colonial extraction increased demands for Indigenous labor and encouraged forced African migration.', 'Links environment to Atlantic labor systems.'),
      E('americanfoods', 'American Crops Move Outward', 'Maize, potatoes, cassava, tomatoes, and other foods later changed diets and population patterns across Afro-Eurasia.', 'Places the local crisis inside a global exchange.'),
      E('markets', 'Continuing Indigenous Markets', 'Local exchange networks and food knowledge persisted even as colonial authorities redirected tribute and production.', 'Prevents a total-replacement narrative.'),
      E('power', 'Unequal Authority', 'Spanish settlers and officials possessed legal and military advantages over Indigenous and African participants.', 'Keeps the exchange from appearing voluntary or balanced.')
    ],
    decisions: [
      D('food', 'Rebuild the food system', 'What should receive scarce labor, seed, and water first?', [
        O('local', 'Restore maize and chinampa production', 'Direct labor to proven staple systems and surviving community markets.', 'Households regain dependable food and local control.', 'Colonial authorities may still demand wheat, tribute, and export crops.', 'Immediate food security limits participation in new markets.'),
        O('mixed', 'Plant a mixed food portfolio', 'Combine American staples with selected wheat, orchard, and livestock production.', 'Diet and market options become more diverse.', 'New species require land, fencing, and unfamiliar management.', 'Resilience grows while control over land becomes contested.'),
        O('export', 'Prioritize sugar and colonial demand', 'Build mills and fields aimed at high-value Atlantic markets.', 'Settlers, merchants, and the Crown gain revenue.', 'Food land and labor shift toward coercive export production.', 'Global profit increases local vulnerability.')
      ]),
      D('landuse', 'Manage introduced animals', 'How should the council handle rapidly expanding herds?', [
        O('fence', 'Fence grazing and compensate damage', 'Recognize community fields, set herd limits, and require payment for crop loss.', 'Farmers gain protection while useful animals remain.', 'Enforcement challenges powerful livestock owners.', 'Regulation preserves coexistence but restricts settler profit.'),
        O('open', 'Allow open-range expansion', 'Let herds move widely to accelerate meat, hide, wool, and transport production.', 'Colonial supply grows quickly at low private cost.', 'Communal fields, forests, and canals absorb the damage.', 'Efficiency for owners externalizes environmental costs.'),
        O('community', 'Place herds under community management', 'Allocate selected animals to altepetl-managed pasture and transport teams.', 'Local communities gain access to new power and products.', 'Colonial claimants may refuse shared authority and animals can still alter landscapes.', 'Adoption becomes less unequal but not environmentally neutral.')
      ]),
      D('labor', 'Meet colonial labor demands', 'How should rebuilding work be organized after demographic collapse?', [
        O('wage', 'Use negotiated wage labor', 'Pay workers and permit movement among farms, markets, transport, and community duties.', 'Workers retain more choice and employers compete for labor.', 'Settlers face higher costs and officials may override contracts.', 'Freedom raises prices and slows extraction.'),
        O('tribute', 'Use rotating community tribute labor', 'Assign limited, recorded rotations through local authorities.', 'Officials obtain predictable work without permanent removal.', 'Coercion burdens survivors and local intermediaries may face impossible quotas.', 'Administrative order does not remove forced labor.'),
        O('slave', 'Expand hereditary chattel slavery', 'Import enslaved Africans for plantations, mines, and transport.', 'Colonial employers obtain a controlled labor force.', 'People are violently commodified and racial slavery becomes entrenched.', 'Private production grows through permanent human dispossession.')
      ])
    ],
    reflectionPrompt: 'Explain two different causal chains produced by the Columbian Exchange: one beginning with disease and one beginning with a crop or animal transfer. For each, identify a benefit or adaptation and a human or environmental cost.',
    sources: [
      { label: 'Smithsonian National Museum of Natural History — Seeds of Change', url: 'https://www.si.edu/exhibitions/seeds-change%3Aevent-exhib-2294' },
      { label: 'Smithsonian Learning Lab — The Columbian Exchange and Global Trade', url: 'https://learninglab.si.edu/collections/the-columbian-exchange-and-global-trade/2BGhYXYGc8PPoWKT' },
      { label: 'Encyclopaedia Britannica — Columbian Exchange', url: 'https://www.britannica.com/event/Columbian-exchange' }
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
      { label: 'National Park Service — San José de los Jémez and the Pueblo Revolt', url: 'https://www.nps.gov/subjects/travelspanishmissions/san-jose-de-los-jemez-mission-and-giusewa-pueblo-site.htm' },
      { label: 'National Park Service — Spanish Encounters at Pecos', url: 'https://home.nps.gov/peco/learn/historyculture/spanish-encounters.htm' },
      { label: 'National Park Service — El Camino Real archival study', url: 'https://home.nps.gov/elca/learn/historyculture/upload/ELCA-Archival-Study-12-2020.pdf' }
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
      R('petitioner', 'Mixed-Ancestry Widow and Merchant', 'You petition to expand a profitable textile shop and protect your children’s status.', 'Property, customers, parish standing, and legal documents support you, but ancestry and gender restrict formal access.', 'Secure a license, guild connections, and a durable family reputation.', 'Officials may use a racial label to deny rights or expose your property to competitors.', 'Status is made through work, family, reputation, and law—not ancestry alone.', 'Have the court weigh property, Christian standing, and civic service over casta label.', 'Your own upward claim may depend on distancing yourself from poorer or darker communities.'),
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
    reflectionPrompt: 'Explain one continuity and two changes in social hierarchy caused by maritime expansion. Your response must distinguish elite representations such as casta paintings from the more fluid—but still unequal—ways identity operated in colonial life.',
    sources: [
      { label: 'Smarthistory — Teaching guide: Sixteen casta paintings', url: 'https://smarthistory.org/seeing-america-2/social-structures/teaching-guide-constructing-identity-in-the-spanish-colonies-in-america/' },
      { label: 'Smarthistory — The art of the viceroyalty of New Spain', url: 'https://smarthistory.org/reframing-art-history/art-viceroyalty-new-spain/' },
      { label: 'Smarthistory — Miguel Cabrera casta painting', url: 'https://smarthistory.org/cabrera-casta-painting/' }
    ]
  }
];

fs.mkdirSync(OUT, { recursive: true });
for (const scenario of scenarios) {
  const destination = path.join(OUT, scenario.file);
  fs.writeFileSync(destination, renderRoomPage(scenario), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, destination)}`);
}
