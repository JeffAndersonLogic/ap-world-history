#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { renderRoomPage } = require('./lib/room-v2-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'beintheroom', 'unit-5');
const R = (id, name, position, power, goals, fears, lens, preference, blindSpot) => ({ id, name, position, power, goals, fears, lens, preference, blindSpot });
const E = (id, label, text, why) => ({ id, label, text, why });
const O = (id, title, action, benefits, worries, tradeoff) => ({ id, title, action, benefits, worries, tradeoff });
const D = (id, title, prompt, options) => ({ id, title, prompt, options });

const scenarios = [
  {
    id: '5.1', unit: '5', topicTitle: 'The Enlightenment', file: 'the-natural-rights-test.html',
    title: 'The *Natural Rights Test*', location: 'Paris salon and printing office', date: '1788–1789',
    lessonUrl: '../../unit-5/lesson-5-1-enlightenment.html',
    alignment: { theme: 'Culture and Developments (CDI)', objective: 'Explain how Enlightenment ideas challenged traditional authority and shaped political debate.', skill: 'Causation and argumentation', keyConcepts: ['KC-5.1.I', 'KC-5.1.I.A–C', 'Natural rights and the public sphere'] },
    premise: [
      'A Paris publisher is preparing a short collection of arguments about reason, consent, religious toleration, and natural rights. Readers want a clear challenge to hereditary authority, but the commercial world that funds the press is tied to empire, slavery, and unequal access to education.',
      'The salon includes people who use Enlightenment language differently: some seek constitutional reform, some demand abolition, and some want the language limited to property-holding men. Mary Wollstonecraft’s arguments about women’s education make the contradiction visible inside the movement itself.',
      'You must decide what the pamphlet will claim, whose testimony it will print, and how directly it will expose the gap between universal principles and selective practice.'
    ],
    centralQuestion: 'How should an Enlightenment publisher use reason and natural-rights language when the movement’s own authors and sponsors exclude women, enslaved people, and the poor?',
    roles: [
      R('philosophe', 'Constitutional Philosophe', 'You draft arguments against arbitrary monarchy and inherited privilege.', 'You control the language of the pamphlet and have access to educated readers, but not to state power.', 'Secure toleration, consent, and limits on government.', 'A blunt attack may bring censorship or make reformers look socially dangerous.', 'Ideas gain force when they move through print, correspondence, and debate.', 'Publish a rights claim tied to constitutional limits and public reason.', 'You may treat educated European men as the natural public and mistake abstraction for inclusion.'),
      R('abolitionist', 'Free Person of Color and Abolitionist', 'You bring evidence of colonial slavery and demand that rights apply across the Atlantic.', 'You have testimony, networks, and moral authority, but colonial law can silence or punish you.', 'Force the pamphlet to connect universal rights to emancipation.', 'A cautious text may legitimize the system it claims to criticize.', 'Enlightenment principles become politically explosive when excluded people appropriate them.', 'Print testimony and a direct antislavery claim.', 'You may underestimate the publisher’s financial and legal risks.'),
      R('investor', 'Plantation Investor and Merchant', 'You finance paper, shipping, and colonial commerce.', 'Your money can keep the press operating, but your wealth depends on coercive labor and imperial trade.', 'Protect property and commercial stability while appearing reform-minded.', 'Abolition language could threaten your assets and provoke state repression.', 'Economic interests shape which “universal” ideas circulate.', 'Support civil equality for property holders while postponing colonial reform.', 'You may call property neutral even when it rests on violence.'),
      R('educator', 'Women’s Rights Educator', 'You argue that reason and education must include women.', 'You can expose the logic of exclusion, but male editors may treat your work as a side issue.', 'Make women’s rational capacity part of the main rights argument.', 'A token paragraph may leave domestic and political subordination untouched.', 'Universal language creates internal tools for challenging gender hierarchy.', 'Publish an argument for equal education and civic voice.', 'You may assume formal education alone can overcome class and racial barriers.')
    ],
    evidence: [
      E('locke', 'Consent and Natural Rights', 'Locke’s political theory described people as naturally free and government as dependent on consent.', 'Shows the core language used to challenge inherited authority.'),
      E('montesquieu', 'Separated Powers', 'Montesquieu linked liberty to institutional checks that prevent concentrated power.', 'Connects ideas to constitutional design rather than abstract freedom alone.'),
      E('salon', 'The Republic of Letters', 'Salons, correspondence, academies, and print networks spread arguments among educated readers.', 'Explains how ideas moved beyond one court or university.'),
      E('encyclopedie', 'Knowledge as Critique', 'The Encyclopédie organized practical and intellectual knowledge while questioning inherited authority.', 'Shows how information could challenge hierarchy.'),
      E('wollstonecraft', 'Rights of Woman', 'Wollstonecraft applied reason and education arguments to women’s subordination.', 'Reveals an internal critique of selective universalism.'),
      E('slavery', 'Colonial Wealth', 'European commerce and plantation wealth depended on enslaved labor even as authors discussed liberty.', 'Prevents treating Enlightenment ideas as detached from empire.'),
      E('toleration', 'Religious Toleration', 'Arguments for toleration challenged confessional coercion and state-enforced orthodoxy.', 'Shows a concrete target of anti-authoritarian thought.'),
      E('public', 'Expanding Public Debate', 'Pamphlets and newspapers widened debate but remained shaped by literacy, price, censorship, and gender.', 'Keeps the public sphere both innovative and unequal.')
    ],
    decisions: [
      D('claim', 'Define the rights claim', 'What should the pamphlet say rights belong to?', [
        O('property', 'Limit rights to property-holding citizens', 'Tie political participation to education, property, and civic independence.', 'The text may survive censorship and attract elite reformers.', 'The claim preserves exclusions the pamphlet says are natural.', 'Practical reach comes at the cost of universal consistency.'),
        O('universal', 'Declare rights universal', 'State that reason, liberty, and protection from arbitrary power belong to all people.', 'The argument gives excluded groups language to challenge hierarchy.', 'Sponsors may withdraw and authorities may suppress the text.', 'Moral clarity increases political risk.'),
        O('staged', 'Publish a staged program', 'Call for immediate constitutional limits and a timetable for broader inclusion.', 'Reformers gain a coalition and a path to implementation.', 'Delay can become a permanent excuse for exclusion.', 'Sequencing may make change possible while normalizing postponement.')
      ]),
      D('testimony', 'Choose the evidence', 'Whose experience should be placed at the center of the pamphlet?', [
        O('theorists', 'Lead with canonical theorists', 'Use Locke, Montesquieu, and other authors as the main authorities.', 'Readers recognize the language and the argument looks intellectually serious.', 'The text can reproduce elite voices while claiming universality.', 'Familiar authority increases legitimacy but narrows perspective.'),
        O('excluded', 'Lead with excluded testimony', 'Place women’s, colonial, and enslaved people’s arguments beside the theories.', 'The contradiction becomes concrete and harder to evade.', 'The publisher faces greater censorship and hostile readers.', 'Evidence expands the public while increasing exposure.'),
        O('hybrid', 'Pair theory with lived evidence', 'Make each principle answerable to a testimony from an excluded group.', 'The pamphlet links abstraction to causation and accountability.', 'The structure may satisfy neither cautious elites nor radical activists.', 'Breadth requires more complexity and less rhetorical simplicity.')
      ]),
      D('circulation', 'Manage circulation', 'How should the publisher distribute the text?', [
        O('salon', 'Target salons and subscribers', 'Use private networks and a polished edition for educated readers.', 'The text is less likely to be seized immediately.', 'The audience remains socially narrow.', 'Safety protects circulation while limiting reach.'),
        O('cheap', 'Print a cheap broad edition', 'Use inexpensive paper and short pamphlets for artisans, clubs, and readers beyond salons.', 'More people can debate and adapt the ideas.', 'Financial loss and censorship become more likely.', 'Democratic reach depends on commercial risk.'),
        O('atlantic', 'Build an Atlantic network', 'Send copies to reformers in Britain, the Caribbean, and North America.', 'Arguments can cross borders and connect movements.', 'Imperial authorities may treat the network as sedition.', 'Transnational influence increases both solidarity and surveillance.')
      ])
    ],
    reflectionPrompt: 'Explain how Enlightenment ideas challenged traditional authority and how their selective application limited that challenge. Use one example involving gender, slavery, or property.',
    sources: [
      { label: 'Stanford Encyclopedia of Philosophy — Enlightenment', url: 'https://plato.stanford.edu/entries/enlightenment/' },
      { label: 'Library of Congress — Mary Wollstonecraft', url: 'https://www.loc.gov/exhibits/womens-suffrage/mary-wollstonecraft.html' },
      { label: 'National Archives — The Enlightenment and the Atlantic world', url: 'https://www.archives.gov/research/african-americans/slavery-records' }
    ]
  },
  {
    id: '5.2', unit: '5', topicTitle: 'Nationalism and Revolutions', file: 'the-saint-domingue-constitution.html',
    title: 'The *Saint-Domingue Constitution*', location: 'Le Cap, Saint-Domingue', date: '1801',
    lessonUrl: '../../unit-5/lesson-5-2-nationalism-and-revolutions.html',
    alignment: { theme: 'Governance (GOV) and Social Interactions (SIO)', objective: 'Explain how Enlightenment ideas and nationalism contributed to political revolutions and the creation of new states.', skill: 'Comparison and causation', keyConcepts: ['KC-5.2.I–II', 'KC-5.2.II.A–C', 'Atlantic Revolutions and nationalism'] },
    premise: [
      'The formerly enslaved population of Saint-Domingue has defeated armies, ended slavery locally, and forced France to confront the meaning of citizenship. Toussaint Louverture’s administration must keep plantations producing, defend the colony, and turn emancipation into a durable political order.',
      'The choices are constrained by war, racial hierarchy, foreign invasion, and the memory of plantation violence. A constitution can protect emancipation, but forced labor policies may reproduce coercion and invite resistance.',
      'You sit on a constitutional council in 1801. Your settlement must explain who belongs to the nation, how labor is organized, and whether autonomy or renewed French control offers the safer future.'
    ],
    centralQuestion: 'How can a revolutionary government defend emancipation and national sovereignty while producing food, maintaining order, and surviving imperial pressure?',
    roles: [
      R('louverture', 'Constitutional Governor', 'You coordinate administration, defense, and plantation production after emancipation.', 'You command troops and officials, but your authority depends on a population that remembers forced labor.', 'Preserve emancipation and prevent France or rival elites from restoring slavery.', 'A coercive labor regime may turn liberators into new overseers.', 'Revolutionary state-building requires balancing security, production, and legitimacy.', 'A constitution with local autonomy and regulated labor contracts.', 'You may trust executive power to solve crises faster than popular participation can.'),
      R('cultivator', 'Formerly Enslaved Cultivator', 'You farm land and defend the freedom won through revolt.', 'You hold collective power through labor and armed experience, but officials can compel work and movement.', 'Secure land access, family safety, and freedom from plantation discipline.', 'A constitution may rename coercion without changing daily life.', 'Emancipation is a social transformation, not only a legal declaration.', 'Support smallholding, wages, and voluntary contracts.', 'You may underestimate the immediate military and food crisis facing the new government.'),
      R('freeperson', 'Free Person of Color Merchant', 'You connect ports, credit, and Atlantic commerce while seeking equal citizenship.', 'You have commercial networks and education, but racial divisions and foreign trade controls limit power.', 'Build a nation of equal civil status that can trade independently.', 'A class-based labor order may replace racial slavery with another hierarchy.', 'National identity can unite groups while leaving class conflict unresolved.', 'Protect civil equality and predictable commercial law.', 'You may assume market freedom will distribute political power fairly.'),
      R('french', 'French Commissioner', 'You represent a republic that claims emancipation but wants imperial control and revenue.', 'France can send soldiers, ships, and legal orders, but the expedition faces resistance and disease.', 'Restore French sovereignty without openly conceding the revolution’s legitimacy.', 'A successful autonomous Haiti could inspire revolt elsewhere.', 'Imperial nationalism can borrow revolutionary language while restricting self-rule.', 'Offer conditional autonomy under French military and commercial oversight.', 'You treat emancipation as a policy granted by France rather than a victory won locally.')
    ],
    evidence: [
      E('slavecolony', 'Plantation Wealth', 'Saint-Domingue’s export economy generated enormous wealth through enslaved labor and violent discipline.', 'Explains why imperial powers fought to recover control.'),
      E('revolt', '1791 Revolution', 'The uprising beginning in 1791 destroyed the old plantation order and made enslaved people political actors.', 'Shows revolution as collective action, not only elite constitutional debate.'),
      E('abolition', 'French Emancipation', 'France abolished slavery in its colonies in 1794 amid revolutionary war and pressure from the revolt.', 'Demonstrates the interaction of ideas, war, and insurgency.'),
      E('louverture', 'Constitution of 1801', 'Louverture’s constitution declared autonomy and lifelong governance while preserving regulated plantation labor.', 'Shows the tension between emancipation, production, and executive authority.'),
      E('napoleon', 'Napoleonic Expedition', 'Napoleon sent a large expedition in 1802 to reassert French authority and reverse the revolution’s direction.', 'Makes foreign pressure central to the constitutional dilemma.'),
      E('yellowfever', 'Disease and War', 'Disease, terrain, and resistance weakened French forces in the Caribbean.', 'Explains why military capacity did not translate into stable control.'),
      E('citizenship', 'Universal Citizenship Claim', 'Revolutionary language of citizenship and rights became a resource for Black and mixed-race political claims.', 'Connects Saint-Domingue to the wider Atlantic Revolutions.'),
      E('independence', 'Haitian Independence', 'The 1804 declaration created the first independent state born from a successful large-scale slave revolt.', 'Shows the revolution’s global significance and limits of imperial restoration.')
    ],
    decisions: [
      D('labor', 'Organize labor', 'What labor system should the constitution authorize?', [
        O('smallholdings', 'Prioritize smallholding', 'Break up plantations where possible and guarantee family plots with local production.', 'Freedom becomes tangible and local communities gain security.', 'Exports and state revenue may fall during wartime.', 'Social emancipation may reduce immediate fiscal capacity.'),
        O('contracts', 'Use paid regulated contracts', 'Keep large estates operating through wages, contracts, and limits on movement and hours.', 'Export crops and defense supplies remain available.', 'Officials may enforce “contracts” as disguised forced labor.', 'Production and autonomy are balanced through contested regulation.'),
        O('estate', 'Preserve plantations under state oversight', 'Keep estates intact and require labor service for national survival.', 'The government gains predictable exports and centralized control.', 'The policy repeats plantation discipline and risks renewed revolt.', 'Security and revenue come at the cost of revolutionary legitimacy.')
      ]),
      D('sovereignty', 'Set the relationship with France', 'What political relationship best protects the revolution?', [
        O('autonomy', 'Declare autonomous self-government', 'Recognize French cultural ties while reserving law, defense, and trade decisions locally.', 'The government can defend emancipation and build legitimacy.', 'France may treat autonomy as rebellion and invade.', 'Sovereignty increases the risk of immediate imperial war.'),
        O('protectorate', 'Accept a guarded French protectorate', 'Trade limited oversight for guarantees against slavery and military support.', 'The settlement may deter rivals and reopen commerce.', 'France can reinterpret guarantees and dismantle local authority.', 'Short-term security may undermine long-term independence.'),
        O('federation', 'Seek a revolutionary federation', 'Invite Caribbean and Atlantic republicans into a mutual defense and trade pact.', 'A coalition could make restoration more difficult.', 'Partners may lack ships, resources, or shared interests.', 'Solidarity is powerful but logistically fragile.')
      ]),
      D('citizenship', 'Define national membership', 'Who should receive full political rights?', [
        O('allfree', 'All free residents', 'Make freedom and residence the primary basis of citizenship.', 'The nation rejects racial legal hierarchy.', 'Land, education, and class inequalities remain unresolved.', 'Formal equality cannot erase unequal starting conditions.'),
        O('service', 'Citizenship through service', 'Tie political rights to military or civic contribution during reconstruction.', 'Defense and public work receive support.', 'The rule excludes people unable to serve and empowers the executive.', 'Security-based citizenship narrows revolutionary inclusion.'),
        O('property', 'Property-based citizenship', 'Limit voting and office to property holders while promising gradual expansion.', 'Commercial elites and foreign creditors may trust the government.', 'The formerly enslaved majority may see independence as elite capture.', 'Administrative stability reproduces social hierarchy.')
      ])
    ],
    reflectionPrompt: 'Compare the Haitian Revolution with one other Atlantic Revolution. Explain one shared cause and one major difference in how each addressed slavery, citizenship, or national sovereignty.',
    sources: [
      { label: 'Encyclopaedia Britannica — Haitian Revolution', url: 'https://www.britannica.com/event/Haitian-Revolution' },
      { label: 'Library of Congress — Haiti and the Haitian Revolution', url: 'https://guides.loc.gov/haitian-revolution' },
      { label: 'Yale Avalon Project — Haitian Constitution of 1801', url: 'https://avalon.law.yale.edu/19th_century/ha01.asp' }
    ]
  },
  {
    id: '5.3', unit: '5', topicTitle: 'The Industrial Revolution Begins', file: 'the-factory-commission.html',
    title: 'The *Factory Commission*', location: 'Parliamentary hearing, Manchester', date: '1833',
    lessonUrl: '../../unit-5/lesson-5-3-industrial-revolution-begins.html',
    alignment: { theme: 'Economic Systems (ECN) and Social Interactions (SIO)', objective: 'Explain the causes and effects of the Industrial Revolution in Britain.', skill: 'Causation and argumentation', keyConcepts: ['KC-5.3.I–II', 'KC-5.3.II.A–C', 'Coal, steam, factories, and urban labor'] },
    premise: [
      'Parliament is deciding whether to regulate textile factories after testimony describes children working long hours around dangerous machinery. Mill owners argue that cheap production supports Britain’s global trade and that families depend on wages.',
      'The hearing sits at the intersection of coal, steam power, factory discipline, urban migration, household poverty, and emerging reform politics. A law can reduce immediate harm but may push production elsewhere or cut the income of families with few alternatives.',
      'You must recommend the scope of inspection, age limits, and hours without pretending industrialization has one cause or one social effect.'
    ],
    centralQuestion: 'How should Britain regulate factory labor when industrial production creates wealth and employment but also concentrates risk, long hours, and child exploitation?',
    roles: [
      R('owner', 'Cotton Mill Owner', 'You run a steam-powered mill competing in national and export markets.', 'You control machinery, hiring, and schedules, but Parliament can regulate the factory and customers can shift orders.', 'Keep production efficient and avoid collapse or relocation.', 'Strict rules may raise costs while competitors ignore them.', 'Industrialization rewards capital investment and turns time discipline into profit.', 'Support basic inspection and gradual limits tied to productivity.', 'You may describe family dependence on wages without sharing the risks your system imposes.'),
      R('worker', 'Young Mill Worker', 'You work around machinery and contribute wages to a household.', 'Your testimony can influence reform, but dismissal or retaliation remains possible.', 'Reduce hours and injury while preserving a viable income.', 'A law may remove your job without providing food, schooling, or land.', 'Working-class experience reveals the human mechanism behind industrial growth.', 'Demand enforceable hours, safety, and schooling without wage loss.', 'You may not know which enforcement design can work across thousands of mills.'),
      R('inspector', 'Factory Commission Inspector', 'You collect testimony and translate parliamentary rules into inspections.', 'You can document violations, but the state has few inspectors for a rapidly expanding industry.', 'Create a rule that can actually be enforced.', 'A weak law will legitimate abuse; an impossible law will be ignored.', 'Reform depends on institutions, records, and enforcement—not sympathy alone.', 'Require age records, machine safeguards, and independent inspections.', 'You may underestimate how employers and families can evade paperwork.'),
      R('merchant', 'Manchester Export Merchant', 'You finance cotton purchases and sell cloth in global markets.', 'You can redirect orders and credit, but you depend on low prices and reliable supply.', 'Protect Britain’s competitive position while avoiding scandals that threaten trade.', 'Costs rise or foreign manufacturers gain an advantage.', 'Industrial capitalism links local labor conditions to global markets and empire.', 'Support common standards among major mills and predictable transition costs.', 'You may treat global demand as an unavoidable force rather than a political choice.')
    ],
    evidence: [
      E('coal', 'Coal and Steam', 'Coal deposits, steam engines, and transport networks made concentrated factory production possible.', 'Explains why Britain could power large-scale industry.'),
      E('capital', 'Commercial Capital', 'Atlantic trade, finance, and markets supplied investment for machinery and mills.', 'Connects industrialization to earlier commercial expansion.'),
      E('factory', 'Factory Discipline', 'Factories synchronized labor to machines, clocks, supervisors, and production schedules.', 'Shows the mechanism transforming work and time.'),
      E('child', 'Child Labor Testimony', 'Parliamentary testimony described very young workers laboring long hours in dangerous mills.', 'Provides direct evidence of social cost.'),
      E('urban', 'Urban Migration', 'People moved toward industrial towns for wage work, producing rapid population growth.', 'Links factories to urbanization and housing pressure.'),
      E('wages', 'Household Wages', 'Families often combined women’s and children’s wages to survive in industrial towns.', 'Explains why reform could threaten as well as protect households.'),
      E('patent', 'Patent Incentives', 'Patent protection and investment rewards encouraged inventors and owners to improve machinery.', 'Shows political institutions shaping technology.'),
      E('reform', 'Factory Act Debate', 'Reformers increasingly argued that the state could regulate working time and childhood without ending industry.', 'Places regulation inside the period’s political choices.')
    ],
    decisions: [
      D('hours', 'Set the workday', 'What limits should Parliament impose?', [
        O('minimal', 'Keep regulation minimal', 'Require only a low age threshold and voluntary employer standards.', 'Mills retain flexibility and families keep access to wage work.', 'The most vulnerable workers remain exposed.', 'Competitive production is protected by leaving harm largely private.'),
        O('tenhour', 'Adopt a ten-hour limit', 'Cap hours for young workers and create a transition period for mills.', 'Children gain time for rest and schooling while factories remain open.', 'Enforcement and household income become difficult problems.', 'Reform reduces exploitation without replacing the wage system.'),
        O('eight', 'Set an eight-hour youth limit', 'Limit children’s hours sharply and require a school component.', 'The state draws a clear boundary around childhood labor.', 'Families and owners may evade the law or lose income.', 'Long-term human development is prioritized over immediate output.')
      ]),
      D('inspection', 'Design enforcement', 'Who should make the law credible?', [
        O('owners', 'Leave enforcement to owners', 'Require mills to certify compliance and punish only repeated public violations.', 'Costs stay low and employers retain autonomy.', 'The people profiting from labor judge their own conduct.', 'Efficiency and privacy undermine accountability.'),
        O('inspectors', 'Create independent inspectors', 'Fund inspectors with power to enter mills, check ages, and record injuries.', 'Evidence can make standards real across competing factories.', 'The state must pay and employers may resist intrusion.', 'Effective oversight requires new government capacity.'),
        O('local', 'Use local committees', 'Give towns committees of workers, owners, doctors, and magistrates authority to inspect.', 'Local knowledge may reveal conditions quickly.', 'Class conflict and uneven towns produce inconsistent rules.', 'Participation expands legitimacy but sacrifices uniformity.')
      ]),
      D('income', 'Protect household income', 'How should reform address wages and family survival?', [
        O('wage', 'Require wage guarantees', 'Tie reduced hours to minimum family wages or employer compensation.', 'Families are less likely to lose food when hours fall.', 'Employers may raise prices or replace workers with machines.', 'Protection shifts costs toward owners and consumers.'),
        O('school', 'Fund working-class schooling', 'Use public funds and employer contributions for schools and relief.', 'Children gain alternatives to mill work over time.', 'Taxpayers and owners dispute the cost.', 'Long-term mobility requires collective investment.'),
        O('none', 'Separate labor law from poverty relief', 'Regulate the workplace but leave household income to wages and charity.', 'The law remains simpler and cheaper.', 'Families bear the adjustment and may evade protections.', 'Administrative clarity leaves structural poverty unresolved.')
      ])
    ],
    reflectionPrompt: 'Explain two interacting causes of Britain’s Industrial Revolution and one effect on workers or urban society. Use the factory dilemma to show why industrialization created both wealth and inequality.',
    sources: [
      { label: 'UK Parliament — Factory Act 1833', url: 'https://www.parliament.uk/about/living-heritage/transformingsociety/livinglearning/19thcentury/overview/factoryact/' },
      { label: 'British Library — The Industrial Revolution', url: 'https://www.bl.uk/learning/timeline/item126878.html' },
      { label: 'UK Parliament — Child labour and the factory system', url: 'https://www.parliament.uk/about/living-heritage/transformingsociety/livinglearning/19thcentury/overview/childlabour/' }
    ]
  },
  {
    id: '5.4', unit: '5', topicTitle: 'Industrialization Spreads', file: 'the-meiji-investment-ledger.html',
    title: 'The *Meiji Investment Ledger*', location: 'Tokyo, Imperial Japan', date: '1872',
    lessonUrl: '../../unit-5/lesson-5-4-industrialization-spreads.html',
    alignment: { theme: 'Economic Systems (ECN) and Governance (GOV)', objective: 'Explain how and why industrialization spread to Europe, North America, and Japan and remained limited elsewhere.', skill: 'Comparison and causation', keyConcepts: ['KC-5.4.I–II', 'KC-5.4.II.A–C', 'State-led industrialization and uneven development'] },
    premise: [
      'Meiji leaders have overthrown the Tokugawa shogunate and fear unequal treaties, military vulnerability, and foreign economic domination. They must decide how quickly to build railways, factories, schools, and a modern army while taxing a mostly rural population.',
      'Japan can borrow foreign technology without simply becoming a colony, but the state’s choices will redistribute land, labor, and status. Former samurai, merchants, farmers, and factory workers do not experience “modernization” in the same way.',
      'You sit on an investment council in 1872. Your ledger must show how a state can select, finance, and adapt industrial technologies rather than merely import machines.'
    ],
    centralQuestion: 'How should Meiji Japan sequence state investment, foreign knowledge, taxation, and labor reform to industrialize while preserving sovereignty?',
    roles: [
      R('official', 'Meiji Finance Official', 'You allocate scarce taxes and foreign loans among railways, factories, schools, and defense.', 'You control budgets and appointments, but rural taxpayers and rival ministries can resist.', 'Build state capacity fast enough to avoid subordination.', 'Debt, inflation, or rural revolt may destroy legitimacy.', 'Industrialization spreads through institutions, finance, and policy choices as well as machines.', 'Prioritize transport, education, and strategic industry in a staged plan.', 'You may treat social disruption as a temporary cost that the state can simply command away.'),
      R('samurai', 'Former Samurai Officer', 'You seek a place in the new army and bureaucracy after hereditary status declines.', 'You have literacy, networks, and military experience, but stipends and privileges are being removed.', 'Preserve honor and national strength.', 'Rapid commercialization may erase your class without creating meaningful public voice.', 'Political revolution changes who can claim status and service.', 'Tie national service to education and professional advancement.', 'You may mistake former privilege for merit and overlook peasants’ burden.'),
      R('merchant', 'Osaka Merchant Investor', 'You finance mills, shipping, and imported machinery as old restrictions loosen.', 'You possess capital and commercial knowledge, but the state can favor selected firms.', 'Gain predictable law and profitable infrastructure.', 'State monopolies or foreign firms may crowd out independent enterprise.', 'Industrial capitalism depends on private capital working with state power.', 'Use public infrastructure with competitive private investment.', 'You may treat wage labor and land taxes as neutral market adjustments.'),
      R('farmer', 'Rural Taxpayer and Village Head', 'You represent villages paying the new land tax and supplying labor to cities.', 'You can organize petitions and local resistance, but the central state has police and conscription.', 'Keep land, food security, and community autonomy.', 'Tax burdens and military service may force debt and migration.', 'Industrialization can be financed by rural extraction before its benefits return.', 'Slow the program and protect village credit and grain reserves.', 'You may understate the external military threat that drives state urgency.')
    ],
    evidence: [
      E('charter', 'Charter Oath', 'The Meiji government promised to seek knowledge throughout the world while strengthening imperial rule.', 'Shows selective borrowing tied to sovereignty.'),
      E('treaties', 'Unequal Treaties', 'Foreign powers held treaty privileges and constrained Japan’s tariff and diplomatic autonomy.', 'Explains why modernization became a security project.'),
      E('iwakura', 'Foreign Mission', 'Japanese officials studied institutions, education, military systems, and industry abroad.', 'Shows knowledge transfer through deliberate state observation.'),
      E('rail', 'Railway Construction', 'The first railway linked Tokyo and Yokohama in 1872 with foreign engineering and Japanese state sponsorship.', 'Demonstrates infrastructure as a strategic investment.'),
      E('tax', 'Land Tax Reform', 'A monetized land tax supplied state revenue but placed new burdens on rural producers.', 'Connects industrialization to agrarian extraction.'),
      E('factories', 'Model Factories', 'The state established model enterprises and later sold or transferred many to private firms.', 'Shows state-led industrial takeoff and privatization.'),
      E('education', 'Compulsory Schooling', 'Mass schooling created literate workers, officials, and soldiers while reshaping local life.', 'Explains why human capital mattered alongside machines.'),
      E('zaibatsu', 'Concentrated Capital', 'Selected merchant families and firms became major industrial partners of the state.', 'Shows uneven distribution of industrial gains.')
    ],
    decisions: [
      D('sequence', 'Choose the first investment', 'Which investment should anchor the program?', [
        O('rail', 'Railways and ports first', 'Connect mines, farms, factories, and military sites before expanding consumer industry.', 'Transport lowers costs and lets later investments scale.', 'Rural communities lose land and the network may serve extraction.', 'Infrastructure creates capacity while redistributing power.'),
        O('education', 'Schools and technical training first', 'Build a broad education system before committing to heavy industry.', 'Japan develops adaptable workers and officials.', 'Foreign threats and military vulnerability remain immediate.', 'Human capital promises autonomy but takes time.'),
        O('military', 'Army and strategic industry first', 'Prioritize weapons, arsenals, and shipyards to deter foreign coercion.', 'The state can protect sovereignty and bargain from strength.', 'Civilian needs and rural welfare may be sacrificed.', 'Security accelerates industrialization through command and demand.')
      ]),
      D('finance', 'Fund modernization', 'How should the state pay for the program?', [
        O('tax', 'Raise the land tax', 'Use predictable rural taxation to finance public investment.', 'The state gains domestic revenue and avoids foreign dependence.', 'Farmers face debt, protest, and unequal burdens.', 'Sovereignty is funded through agrarian extraction.'),
        O('loan', 'Borrow abroad selectively', 'Take foreign loans for railways and equipment while protecting policy autonomy.', 'Investment arrives faster and expertise becomes available.', 'Debt and foreign leverage may reproduce dependency.', 'Speed increases financial vulnerability.'),
        O('firms', 'Partner with merchant firms', 'Give private investors concessions in exchange for capital and infrastructure.', 'Commercial knowledge and risk are shared.', 'Concentrated firms gain political power and public resources.', 'Growth depends on a state-business alliance.')
      ]),
      D('labor', 'Manage social change', 'What should happen to displaced workers and former status groups?', [
        O('service', 'Channel them into national service', 'Use schools, army, and bureaucracy to absorb former samurai and rural youth.', 'The state gains skilled personnel and social discipline.', 'Military-bureaucratic identity can suppress dissent.', 'Integration strengthens the state while narrowing pluralism.'),
        O('rights', 'Protect labor and land rights', 'Recognize unions, village petitions, and safeguards as industry expands.', 'Workers and taxpayers gain a lawful channel for conflict.', 'Investors may slow expansion and officials fear disorder.', 'Legitimacy may cost speed and centralized control.'),
        O('market', 'Let markets reallocate labor', 'Allow migration, wage competition, and firm decisions to determine adjustment.', 'Industry can expand rapidly and reward productive enterprise.', 'The poorest bear displacement and regional inequality.', 'Efficiency increases while social protection remains thin.')
      ])
    ],
    reflectionPrompt: 'Compare Japan’s state-led industrialization with Britain’s earlier path. Explain one similarity, one difference, and how sovereignty or colonial status shaped each path.',
    sources: [
      { label: 'Encyclopaedia Britannica — Meiji Restoration', url: 'https://www.britannica.com/event/Meiji-Restoration' },
      { label: 'National Diet Library — Meiji Constitution and modernization resources', url: 'https://www.ndl.go.jp/constitution/e/index.html' },
      { label: 'Library of Congress — Japan: Meiji period', url: 'https://www.loc.gov/item/2021668703/' }
    ]
  },
  {
    id: '5.5', unit: '5', topicTitle: 'Technology of Industrialization', file: 'the-iron-road-contract.html',
    title: 'The *Iron Road Contract*', location: 'East India Company railway boardroom', date: '1853',
    lessonUrl: '../../unit-5/lesson-5-5-technology-of-industrialization.html',
    alignment: { theme: 'Technology and Innovation (TEC) and Economic Systems (ECN)', objective: 'Explain how industrial technologies transformed economic life and affected environments and societies.', skill: 'Causation and contextualization', keyConcepts: ['KC-5.5.I–II', 'KC-5.5.II.A–D', 'Railroads, telegraphs, steel, and resource extraction'] },
    premise: [
      'A railway from Bombay is being planned as steam technology, iron rails, and telegraphy reshape movement. Company officials promise trade, troop mobility, and famine relief; Indian merchants and village leaders ask who will own the land, pay for construction, and control the routes.',
      'The railway is not only a machine. Its gauge, financing, labor system, and destination will determine whether it integrates Indian markets or mainly moves cotton, troops, and minerals toward ports.',
      'You must approve a contract that connects technology to power, environmental change, and colonial economic priorities.'
    ],
    centralQuestion: 'How should a colonial railway be designed and financed when the same technology can integrate markets and provide public benefits while deepening extraction and military control?',
    roles: [
      R('engineer', 'Railway Engineer', 'You choose gauge, route, bridges, stations, and maintenance standards.', 'You control technical plans but depend on colonial budgets, imported steel, and local labor.', 'Build a safe network that can operate across varied terrain.', 'A cheap route may fail, while a strategic route may serve empire more than passengers.', 'Technology works through design choices and institutions, not invention alone.', 'Standardize maintenance and connect major markets with reliable spurs.', 'You may treat land and labor as technical inputs rather than communities with rights.'),
      R('company', 'Company Finance Official', 'You defend guaranteed returns to British investors and the colonial treasury.', 'You control contracts and accounting, but political criticism can threaten the guarantee.', 'Keep capital flowing and make the railway pay.', 'Public costs rise while local benefits remain hard to measure.', 'Infrastructure can become a financial mechanism for imperial power.', 'Use port-to-interior routes with guaranteed returns and freight priority.', 'You may define “efficiency” by investor revenue rather than social welfare.'),
      R('merchant', 'Indian Cotton Merchant', 'You want cheaper, faster movement between inland producers, mills, and ports.', 'You know regional markets and can shift trade, but company rules and tariffs constrain you.', 'Expand Indian commercial autonomy and reduce transport bottlenecks.', 'The railway may export raw cotton while imported cloth destroys local industry.', 'Market integration can be unequal when colonial trade policy sets the terms.', 'Demand freight access, fair rates, and routes serving Indian markets.', 'You may assume market access alone can overcome imperial tariff power.'),
      R('village', 'Village Head and Landholder', 'You negotiate land, labor, water, and compensation along the proposed line.', 'Local cooperation can delay construction, but colonial officials can use law and police.', 'Protect fields, wells, homes, and community authority.', 'Acquisition and labor recruitment may dispossess families.', 'Industrial technology remakes landscapes and social power.', 'Require consent, compensation, and local stations before construction.', 'You may not be able to stop a project backed by the colonial state and army.')
    ],
    evidence: [
      E('rail', 'Bombay–Thane Railway', 'The first passenger railway in India opened in 1853 under colonial sponsorship.', 'Places the decision in the technology’s early colonial setting.'),
      E('guarantee', 'Guaranteed Returns', 'British railway companies often received state-backed guarantees that shifted risk to colonial revenue.', 'Shows finance shaping infrastructure.'),
      E('cotton', 'Raw Cotton Export', 'Railways connected cotton-growing regions to ports and British mills during industrial expansion.', 'Links transport to global commodity chains.'),
      E('troops', 'Military Mobility', 'Railways and telegraphs allowed colonial armies to move troops and information more rapidly.', 'Shows a political and coercive function beyond trade.'),
      E('gauge', 'Gauge Choice', 'Different gauges reflected cost, terrain, speed, and military priorities and created compatibility problems.', 'Demonstrates that technical standards are political choices.'),
      E('labor', 'Construction Labor', 'Railways required large labor forces and exposed workers to dangerous conditions, disease, and unequal wages.', 'Connects technology to social relations.'),
      E('famine', 'Famine Debate', 'Railways could move grain and relief but did not automatically end scarcity when markets and policy failed.', 'Prevents technological determinism.'),
      E('telegraph', 'Telegraph Network', 'Telegraph lines made imperial administration and commercial information faster across distance.', 'Shows a second technology reinforcing the railway.')
    ],
    decisions: [
      D('route', 'Choose the route', 'What should the first line prioritize?', [
        O('port', 'Port-to-cotton corridor', 'Connect inland cotton to Bombay with the shortest freight route.', 'Investors and exporters receive rapid returns.', 'Indian manufacturing and local markets remain secondary.', 'Commercial speed reinforces colonial extraction.'),
        O('market', 'Interregional market network', 'Connect producing regions, cities, and food markets before extending to ports.', 'Indian merchants and consumers gain wider access.', 'Costs rise and investor returns arrive more slowly.', 'Public integration competes with colonial export priorities.'),
        O('relief', 'Relief and strategic corridor', 'Build routes that can move grain and troops to vulnerable regions.', 'The state gains crisis capacity and administrative reach.', 'Military control may dominate the public-relief justification.', 'Security and welfare share infrastructure but not necessarily power.')
      ]),
      D('contract', 'Write the contract', 'How should the railway’s financial risk be allocated?', [
        O('guarantee', 'Keep the investor guarantee', 'Promise returns from colonial revenue to attract British capital.', 'Construction starts quickly and firms can borrow.', 'Indian taxpayers carry losses and firms have weak cost discipline.', 'Speed and capital come at the price of fiscal sovereignty.'),
        O('public', 'Use public ownership', 'Finance construction through colonial revenue and retain control of fares and freight.', 'The state can set broader social priorities.', 'Debt and administrative capacity constrain the network.', 'Public control may serve empire as effectively as private firms.'),
        O('share', 'Create a shared board', 'Give Indian merchants and local authorities formal seats and revenue shares.', 'Local knowledge and accountability improve the project.', 'The company and colonial state may block meaningful power sharing.', 'Inclusion increases legitimacy but slows decisions.')
      ]),
      D('land', 'Protect affected communities', 'What safeguards should the board require?', [
        O('compensation', 'Compensate land and labor', 'Pay transparent rates, protect water access, and publish work conditions.', 'Communities gain material protection and information.', 'Costs increase and officials may evade enforcement.', 'Rights make infrastructure more expensive but more legitimate.'),
        O('consult', 'Require local consent', 'Let village councils approve routes and stations before acquisition.', 'Local authority and environmental knowledge shape design.', 'Projects can stall and colonial officials may override councils.', 'Participation limits speed while reducing dispossession.'),
        O('minimal', 'Use existing colonial law', 'Apply the acquisition and labor rules already on the books.', 'The project remains administratively simple.', 'Existing rules may protect investors more than communities.', 'Predictability preserves an unequal legal baseline.')
      ])
    ],
    reflectionPrompt: 'Explain how one industrial technology caused both economic integration and unequal power. Use the railway’s route, finance, or labor system as your mechanism.',
    sources: [
      { label: 'Encyclopaedia Britannica — Indian railway history', url: 'https://www.britannica.com/technology/railroad/India' },
      { label: 'British Library — Railways and colonial India', url: 'https://www.bl.uk/learning/timeline/item126876.html' },
      { label: 'Library of Congress — India and the British Empire', url: 'https://www.loc.gov/item/2021668726/' }
    ]
  },
  {
    id: '5.6', unit: '5', topicTitle: 'Industrialization: Government and Society', file: 'the-factory-question.html',
    title: 'The *Factory Question*', location: 'Reichstag committee, Berlin', date: '1883–1889',
    lessonUrl: '../../unit-5/lesson-5-6-industrialization-government-and-society.html',
    alignment: { theme: 'Governance (GOV) and Social Interactions (SIO)', objective: 'Explain how industrialization created new social classes, ideologies, and political responses.', skill: 'Comparison and argumentation', keyConcepts: ['KC-5.6.I–II', 'KC-5.6.II.A–D', 'Liberalism, socialism, conservatism, and reform'] },
    premise: [
      'German industrial cities are filling with factory workers, entrepreneurs, clerks, and political organizers. The government must decide whether to regulate factories, insure workers, restrict socialist parties, or expand political participation.',
      'Liberals fear state overreach, conservatives fear revolution, socialists demand collective power, and women reformers point out that industrial law treats households and workers unevenly. Bismarck’s social insurance proposals promise protection while also binding workers to the state.',
      'You sit on a Reichstag committee where each ideology must defend a policy rather than merely recite a label.'
    ],
    centralQuestion: 'How should a government respond to industrial class conflict when reform may reduce suffering but also strengthen state control and leave political inequality intact?',
    roles: [
      R('liberal', 'Liberal Parliamentarian', 'You defend civil liberties, contracts, and representative government.', 'You can shape legislation but depend on property-holding voters and industrial donors.', 'Limit arbitrary government while preventing social breakdown.', 'State welfare may become paternalism or suppress voluntary association.', 'Liberalism protects individual choice but can understate unequal bargaining power.', 'Regulate clear harms and expand education and representation.', 'You may treat a formal contract as free even when workers have few alternatives.'),
      R('minister', 'Conservative Interior Minister', 'You want order, national loyalty, and a stronger state.', 'You control police and administration, but socialist parties are gaining workers’ support.', 'Prevent revolution and keep industry productive.', 'Concessions may encourage demands; repression may radicalize workers.', 'Conservatism can use reform to preserve hierarchy and state authority.', 'Combine insurance with surveillance and limits on socialist organizing.', 'You may call obedience social peace and dismiss workers’ political agency.'),
      R('organizer', 'Socialist Trade Organizer', 'You organize workers around wages, hours, and collective ownership.', 'Workers can strike and vote, but employers and police can retaliate.', 'Build durable class power and end dependence on owners’ goodwill.', 'Insurance without representation may divide workers and stabilize exploitation.', 'Class position shapes political conflict as much as legal status.', 'Protect unions, universal insurance, and worker representation.', 'You may underestimate the immediate security workers gain from partial reform.'),
      R('reformer', 'Women’s Social Reformer', 'You address factory safety, household poverty, education, and women’s exclusion.', 'You have networks and expertise but limited formal voting rights.', 'Make social policy account for gendered labor and family survival.', 'Male parties may use “family protection” to restrict women’s autonomy.', 'Industrialization changes households differently by class and gender.', 'Pair labor safeguards with education, civic rights, and public health.', 'You may assume reform institutions will include women without political pressure.')
    ],
    evidence: [
      E('classes', 'Bourgeoisie and Proletariat', 'Industrial capitalism produced owners, managers, professionals, and wage workers with conflicting interests.', 'Defines the new class structure.'),
      E('marx', 'Class Struggle', 'Marx and Engels argued that industrial society simplified antagonism between bourgeoisie and proletariat.', 'Provides a socialist explanation of conflict.'),
      E('liberty', 'Liberal Individualism', 'Liberal thinkers emphasized individual rights, contracts, property, and limits on state power.', 'Provides a competing ideological framework.'),
      E('conserve', 'Conservative Order', 'Conservatives sought stability and could support paternal reform to protect hierarchy.', 'Shows why reform was not only socialist.'),
      E('insurance', 'Bismarckian Insurance', 'Germany created sickness, accident, and old-age insurance in the 1880s.', 'Demonstrates state reform as a response to class politics.'),
      E('women', 'Gendered Reform', 'Factory laws and reform debates often treated women as dependents while women organized for education and rights.', 'Connects class policy to gender.'),
      E('unions', 'Collective Organization', 'Workers built unions, parties, and strikes despite legal restrictions and employer resistance.', 'Shows political agency outside elections.'),
      E('suffrage', 'Unequal Representation', 'Industrial workers and women could be affected by law without equal political power.', 'Explains why policy and citizenship remained contested.')
    ],
    decisions: [
      D('reform', 'Choose the reform package', 'What should the committee enact first?', [
        O('insurance', 'State social insurance', 'Create compulsory sickness, accident, and old-age funds administered through the state.', 'Workers gain material protection and the state reduces revolutionary pressure.', 'Workers may become dependent on official systems and employers retain control.', 'Security expands while political power remains centralized.'),
        O('labor', 'Workplace regulation', 'Set hours, safety rules, and inspection before building broad insurance.', 'Immediate workplace harms are addressed and enforcement is visible.', 'Benefits are uneven and employers resist costs.', 'Protection targets production conditions but not income insecurity.'),
        O('rights', 'Political and associational rights', 'Protect unions, parties, speech, and broader suffrage as the primary reform.', 'Workers can organize to shape future policy.', 'Conflict may intensify and material relief arrives slowly.', 'Democratic power is prioritized over administrative paternalism.')
      ]),
      D('socialists', 'Treat the socialist movement', 'How should the state respond to socialist organizing?', [
        O('ban', 'Restrict socialist parties', 'Use police and law to suppress parties deemed revolutionary.', 'The government may prevent violent plots and reassure elites.', 'Workers lose legal channels and repression may radicalize them.', 'Order is purchased by weakening representation.'),
        O('legal', 'Legalize and regulate parties', 'Allow organizing, strikes, and elections under clear public-order rules.', 'Conflict can move into institutions and workers gain accountability.', 'Employers and officials fear instability and disruption.', 'Participation accepts class conflict rather than denying it.'),
        O('coopt', 'Invite controlled representation', 'Offer seats on advisory boards while keeping executive limits on parties.', 'The state hears grievances without surrendering authority.', 'Workers may see cooptation as a substitute for rights.', 'Consultation can stabilize hierarchy without transforming it.')
      ]),
      D('gender', 'Define household protection', 'How should the law address women’s work and family life?', [
        O('protect', 'Protect women as dependents', 'Limit women’s hours and reserve certain occupations for men and mothers.', 'Reformers can reduce some dangers and employers face clearer rules.', 'Protective law may restrict wages, careers, and civic autonomy.', 'Safety is gained through paternal assumptions.'),
        O('equal', 'Apply standards equally', 'Set hours, safety, and wages by occupation rather than sex, with childcare and education support.', 'Women retain economic and civic options while workplaces improve.', 'Employers may discriminate or shift work elsewhere.', 'Formal equality requires costly public supports.'),
        O('household', 'Fund family services', 'Pair workplace standards with public health, schools, and household relief.', 'Families gain capacity without relying only on employer discipline.', 'Tax burdens rise and women’s political voice may remain limited.', 'Social reproduction becomes a public responsibility without full equality.')
      ])
    ],
    reflectionPrompt: 'Compare liberal, conservative, and socialist responses to industrialization. Explain how one reform both reduced a problem and preserved or expanded state power.',
    sources: [
      { label: 'German History in Documents — Bismarck’s social insurance', url: 'https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1803' },
      { label: 'Marxists Internet Archive — Communist Manifesto', url: 'https://www.marxists.org/archive/marx/works/1848/communist-manifesto/' },
      { label: 'Encyclopaedia Britannica — Socialism', url: 'https://www.britannica.com/topic/socialism' }
    ]
  },
  {
    id: '5.7', unit: '5', topicTitle: 'Economic Developments and Innovations', file: 'the-debt-conversion-table.html',
    title: 'The *Debt Conversion Table*', location: 'Ottoman finance council, Constantinople', date: '1881',
    lessonUrl: '../../unit-5/lesson-5-7-economic-developments-and-innovations.html',
    alignment: { theme: 'Economic Systems (ECN) and Governance (GOV)', objective: 'Explain how industrial capitalism produced new financial institutions and extended economic power globally.', skill: 'Causation and argumentation', keyConcepts: ['KC-5.7.I–II', 'KC-5.7.II.A–D', 'Debt, finance, free trade, and economic imperialism'] },
    premise: [
      'The Ottoman treasury has borrowed repeatedly for military reform, infrastructure, and administration. After default, European bondholders demand a formal authority to collect selected revenues directly. The proposed Ottoman Public Debt Administration could restore credit while limiting fiscal sovereignty.',
      'The council must distinguish a loan, a concession, and a loss of control. Tobacco, salt, stamps, customs, and fishing taxes are not abstract numbers: they affect farmers, merchants, and the state’s ability to fund reform.',
      'You must negotiate terms that show how industrial-era economic power could operate without formal annexation.'
    ],
    centralQuestion: 'How should an indebted sovereign respond when foreign creditors offer financial stability in exchange for direct control over tax revenues?',
    roles: [
      R('minister', 'Ottoman Finance Minister', 'You negotiate debt relief while preserving the state’s ability to govern and reform.', 'You control the budget and diplomatic terms, but creditors can refuse new loans and great powers can threaten intervention.', 'Restore credit and protect sovereignty.', 'Default, inflation, or foreign control may weaken the empire further.', 'Economic imperialism works through contracts, revenue, and dependency as well as armies.', 'Accept limited oversight with a sunset clause and Ottoman representation.', 'You may promise reforms that the treasury cannot finance.'),
      R('bondholder', 'European Bondholder Representative', 'You protect investors who bought Ottoman debt after repeated defaults.', 'You control access to capital and can coordinate creditor pressure.', 'Recover payments and prevent other states from copying a default.', 'A generous settlement may reward mismanagement and reduce future discipline.', 'Financial institutions turn private investment into political leverage.', 'Demand direct revenue collection and transparent accounting.', 'You may treat creditor rights as neutral while shifting burdens onto Ottoman subjects.'),
      R('tobacco', 'Tobacco Farmer and Provincial Taxpayer', 'You produce goods whose taxes may be assigned to the debt authority.', 'Local networks can evade or resist collection, but officials and firms can impose enforcement.', 'Keep a viable livelihood and predictable local government.', 'Foreign agents may extract revenue without returning services.', 'Debt restructuring changes everyday relationships between state, market, and producer.', 'Require local councils and published tax rules.', 'You may underestimate the fiscal crisis that made external supervision possible.'),
      R('reformer', 'Ottoman Constitutional Reformer', 'You want accountable budgets, infrastructure, and representative institutions.', 'You have newspapers and political networks, but emergency finance can bypass the legislature.', 'Use the crisis to build transparent state capacity.', 'Foreign control may combine with autocracy to close political space.', 'Finance can either modernize sovereignty or hollow it out.', 'Tie any debt authority to public audits and parliamentary review.', 'You may assume transparency alone can overcome unequal international bargaining power.')
    ],
    evidence: [
      E('borrowing', 'Borrowed Modernization', 'The Ottoman government borrowed for war, reform, infrastructure, and administration in European financial markets.', 'Explains how development and dependency became linked.'),
      E('default', '1875 Default', 'The Ottoman state suspended payments after fiscal strain and falling revenue.', 'Creates the immediate bargaining crisis.'),
      E('debtadmin', 'Public Debt Administration', 'The 1881 settlement assigned selected revenues to an institution dominated by creditor representatives.', 'Shows economic sovereignty being transferred through finance.'),
      E('monopoly', 'Tobacco and Salt Revenue', 'Monopolies and indirect taxes generated predictable revenue but burdened producers and consumers.', 'Connects global finance to local life.'),
      E('capitulations', 'Foreign Privileges', 'European merchants already held legal and commercial privileges inside the empire.', 'Shows debt control layered onto earlier unequal arrangements.'),
      E('railway', 'Infrastructure Concessions', 'Railways and other concessions could bring capital while granting foreign firms long-term control.', 'Demonstrates mixed benefits and risks of investment.'),
      E('sovereignty', 'Fiscal Sovereignty', 'A state that cannot collect or allocate taxes independently has reduced capacity even if its borders remain intact.', 'Defines economic imperialism analytically.'),
      E('reform', 'Constitutional Debate', 'Ottoman reformers linked accountable taxation and representation to stronger sovereignty.', 'Connects financial policy to political change.')
    ],
    decisions: [
      D('revenues', 'Assign revenue streams', 'Which revenues should secure the settlement?', [
        O('luxury', 'Assign selected monopolies', 'Give creditors tobacco and salt receipts while protecting customs and land taxes.', 'Payments become predictable and the state retains core revenue.', 'Farmers and consumers face concentrated foreign extraction.', 'Fiscal relief narrows the tax base’s social burden.'),
        O('customs', 'Assign customs duties', 'Use trade revenue rather than domestic monopolies to service the debt.', 'Local producers face less direct supervision.', 'Foreign control of customs deepens commercial dependence and limits tariff policy.', 'Domestic autonomy is preserved by surrendering trade autonomy.'),
        O('general', 'Create a broad shared fund', 'Pool several taxes under an Ottoman-led board with creditor audits.', 'Risk is spread and Ottoman administration remains visible.', 'Creditors may reject the plan as insufficiently secure.', 'Sovereignty depends on persuading investors to accept uncertainty.')
      ]),
      D('governance', 'Design oversight', 'Who should control collection and reporting?', [
        O('creditors', 'Creditor-controlled authority', 'Give bondholder representatives final authority over assigned revenues.', 'Investors gain confidence and new credit may return.', 'A foreign institution governs Ottoman taxes without popular accountability.', 'Financial credibility comes at the highest sovereignty cost.'),
        O('mixed', 'Mixed Ottoman-creditor board', 'Require equal Ottoman and foreign representation, public accounts, and a fixed review date.', 'The state gains a voice while creditors receive transparency.', 'Deadlock and enforcement disputes may undermine the settlement.', 'Shared control is legitimate only if power is genuinely balanced.'),
        O('parliament', 'Parliamentary audit', 'Keep collection Ottoman and allow foreign auditors to inspect accounts through the legislature.', 'Domestic institutions develop fiscal capacity.', 'Creditors may see the arrangement as too weak to prevent another default.', 'Political legitimacy is prioritized over immediate market confidence.')
      ]),
      D('reform', 'Use the crisis', 'What should the government do with the breathing room?', [
        O('military', 'Prioritize military recovery', 'Use restored credit to rebuild the army and defend imperial territory.', 'The state can resist coercive diplomacy and rebellion.', 'Military spending may recreate the debt cycle.', 'Security addresses the cause of borrowing while risking repetition.'),
        O('infrastructure', 'Invest in productive infrastructure', 'Fund schools, railways, ports, and tax administration that can broaden future revenue.', 'Long-term capacity and commerce may improve.', 'Projects can become new foreign concessions and debts.', 'Development promises autonomy but may deepen dependence first.'),
        O('constitutional', 'Pair finance with representation', 'Publish budgets, empower a representative chamber, and make taxation reviewable.', 'Citizens gain trust and reform becomes accountable.', 'Slow decisions may disappoint creditors and officials.', 'Legitimacy is treated as an economic resource.')
      ])
    ],
    reflectionPrompt: 'Explain how industrial-era finance extended power without formal colonial rule. Compare the Ottoman debt authority with one case of direct colonial control.',
    sources: [
      { label: 'Encyclopaedia Britannica — Ottoman Empire: finance and reform', url: 'https://www.britannica.com/place/Ottoman-Empire/The-Tanzimat-reforms' },
      { label: 'Encyclopaedia Iranica — Ottoman Public Debt Administration', url: 'https://www.iranicaonline.org/articles/ottoman-empire' },
      { label: 'Cambridge University Press — Ottoman economic history overview', url: 'https://www.cambridge.org/core/books/cambridge-history-of-turkey/' }
    ]
  },
  {
    id: '5.8', unit: '5', topicTitle: 'Reactions to the Industrial Economy', file: 'the-pullman-strike-hearing.html',
    title: 'The *Pullman Strike Hearing*', location: 'Federal mediation room, Chicago', date: 'July 1894',
    lessonUrl: '../../unit-5/lesson-5-8-reactions-to-industrial-economy.html',
    alignment: { theme: 'Social Interactions and Organization (SIO) and Governance (GOV)', objective: 'Explain how workers, abolitionists, and reformers responded to industrial capitalism.', skill: 'Argumentation and causation', keyConcepts: ['KC-5.8.I–II', 'KC-5.8.II.A–C', 'Unions, strikes, abolition, and reform'] },
    premise: [
      'Workers at the Pullman Company live in a company town where wages have fallen during the depression but rents have not. The American Railway Union has called a boycott of trains carrying Pullman cars. Federal officials warn that the strike threatens interstate mail and commerce.',
      'The hearing must decide whether the conflict is a private wage dispute, a constitutional test of collective action, or evidence that industrial capitalism gives employers and the state unequal power. Eugene Debs and the federal government offer competing accounts of order.',
      'You must recommend a settlement while considering what it teaches about labor organization, reform, and state power.'
    ],
    centralQuestion: 'How should a government respond to a nationwide industrial strike when workers claim collective rights and employers claim property and interstate commerce rights?',
    roles: [
      R('worker', 'Pullman Worker', 'You live in the company town and face reduced wages, rents, and limited bargaining power.', 'Workers can withhold labor and join a national boycott, but courts and employers can blacklist or arrest them.', 'Restore a livable wage and independent representation.', 'A failed strike may destroy families and the union.', 'Industrial capitalism links workplace power to housing, transport, and law.', 'Demand bargaining and rent relief through a collective action.', 'You may underestimate how quickly public sympathy can turn when trains stop.'),
      R('debss', 'Railway Union Organizer', 'You coordinate workers across rail lines and defend industrial unionism.', 'A national union can amplify a local dispute, but the government can issue injunctions and use troops.', 'Prove that collective action can challenge corporate power.', 'A narrow settlement may divide workers and leave the structure unchanged.', 'Labor movements grow by connecting local grievances to class-wide power.', 'Call a disciplined boycott and seek arbitration backed by public pressure.', 'You may mistake escalation for solidarity and invite legal repression.'),
      R('company', 'Pullman Company Director', 'You own the town, set wages, and defend the company’s investment.', 'You control employment and housing, but production and reputation depend on a functioning rail system.', 'Preserve managerial authority and financial stability.', 'Recognition of the union may spread to every company operation.', 'Paternal company systems combine welfare, surveillance, and labor control.', 'Offer individual relief while refusing collective recognition.', 'You may call company housing benevolence while ignoring the power it creates.'),
      R('federal', 'Federal Mediator and Attorney', 'You must keep mail and interstate rail service operating under federal law.', 'You can seek injunctions and deploy marshals or troops, but legitimacy depends on public trust.', 'End violence and preserve constitutional order.', 'Using force for commerce may make the state appear to serve corporations.', 'Government responses reveal which rights industrial society protects most strongly.', 'Require a cooling-off period and independent investigation before force.', 'You may treat uninterrupted commerce as neutral while workers experience it as coercion.')
    ],
    evidence: [
      E('wages', 'Wage Cuts', 'Pullman reduced wages during the depression while rents in the company town remained comparatively high.', 'Creates the immediate grievance.'),
      E('companytown', 'Company Town', 'The company controlled housing, employment, and local services, limiting workers’ independence.', 'Shows why the dispute exceeded a simple wage contract.'),
      E('aru', 'Industrial Unionism', 'The American Railway Union organized across crafts and connected Pullman workers to a national network.', 'Explains the strike’s scale.'),
      E('boycott', 'Railway Boycott', 'Workers refused to handle Pullman cars, disrupting rail operations across much of the United States.', 'Shows collective leverage and public costs.'),
      E('injunction', 'Federal Injunction', 'The federal government used an injunction against the boycott and argued that mail and interstate commerce were threatened.', 'Places courts at the center of labor conflict.'),
      E('troops', 'Federal Troops', 'Federal troops entered Chicago amid unrest, violence, and contested claims about public order.', 'Shows the coercive capacity of the state.'),
      E('debs', 'Debs’s Conversion', 'Eugene Debs later described the government response as evidence that class power shaped law.', 'Connects experience to socialist politics.'),
      E('reform', 'Labor Reform', 'The strike helped stimulate debate over arbitration, union recognition, and the limits of corporate paternalism.', 'Shows how conflict can produce institutional change even after defeat.')
    ],
    decisions: [
      D('action', 'Choose the workers’ action', 'How should the union proceed?', [
        O('boycott', 'Continue the boycott', 'Maintain a disciplined national action until Pullman bargains collectively.', 'Workers keep leverage and make the company-town problem visible.', 'Courts, troops, and public disruption may destroy the union.', 'Pressure can win recognition only by risking repression.'),
        O('arbitrate', 'Accept arbitration', 'Suspend the boycott in exchange for a formal investigation and binding mediation.', 'Workers avoid immediate force and gain a legal record.', 'The company may delay or use arbitration to divide workers.', 'Institutional access trades urgency for procedural legitimacy.'),
        O('local', 'Limit the dispute to Pullman', 'End the national boycott and negotiate wages, rents, and recognition locally.', 'Rail service resumes and local families may receive relief.', 'The company and government can isolate workers and preserve the broader system.', 'Short-term relief narrows collective power.')
      ]),
      D('state', 'Set the federal response', 'What should the government authorize?', [
        O('force', 'Enforce the injunction', 'Use marshals and troops to restore rail service and arrest defiant leaders.', 'Commerce resumes and the injunction gains force.', 'Violence and distrust deepen; the state appears corporate-aligned.', 'Order is restored by expanding coercive precedent.'),
        O('cooling', 'Require a cooling-off period', 'Pause the injunction, protect essential mail, and convene mediation.', 'The state protects public services without immediately criminalizing organizing.', 'The strike may continue and employers may refuse the process.', 'Neutral procedure requires tolerating disruption.'),
        O('rights', 'Protect collective bargaining', 'Recognize workers’ right to organize while limiting violence and secondary coercion.', 'Labor gains a lawful channel and future conflict may be less explosive.', 'Courts and employers may resist a broad new interpretation.', 'Industrial citizenship expands by redefining property and contract rights.')
      ]),
      D('settlement', 'Write the settlement', 'What should change after the hearing?', [
        O('wages', 'Set wages and rents', 'Require transparent wage and rent rules with independent review.', 'Workers gain material protection in company towns.', 'Managers lose flexibility and enforcement may be weak.', 'Economic regulation addresses symptoms without ending paternal ownership.'),
        O('union', 'Recognize the union', 'Require collective bargaining and prohibit retaliation for membership.', 'Workers gain durable collective power.', 'Employers may relocate or automate and political opposition grows.', 'Recognition changes the balance of industrial authority.'),
        O('public', 'Build public services', 'Separate housing, utilities, and transport from company control through municipal oversight.', 'Workers become less dependent on one employer.', 'Public costs rise and local governments may lack capacity.', 'Social reform reduces the power of the company town.')
      ])
    ],
    reflectionPrompt: 'Explain how the Pullman Strike shows workers responding to industrial capitalism through collective organization. Evaluate whether the government response expanded or limited worker power.',
    sources: [
      { label: 'National Park Service — Pullman National Historical Park', url: 'https://www.nps.gov/pull/learn/historyculture/the-pullman-strike.htm' },
      { label: 'Library of Congress — Eugene V. Debs', url: 'https://www.loc.gov/item/today-in-history/may-09/' },
      { label: 'Encyclopaedia Britannica — Pullman Strike', url: 'https://www.britannica.com/event/Pullman-Strike' }
    ]
  },
  {
    id: '5.9', unit: '5', topicTitle: 'Society and the Industrial Age', file: 'the-sanitary-board.html',
    title: 'The *Sanitary Board*', location: 'Manchester civic chamber', date: '1842',
    lessonUrl: '../../unit-5/lesson-5-9-society-and-the-industrial-age.html',
    alignment: { theme: 'Social Interactions and Organization (SIO) and Humans and the Environment (ENV)', objective: 'Explain how industrialization changed social hierarchies, household roles, standards of living, and urban environments.', skill: 'Causation and continuity/change', keyConcepts: ['KC-5.9.I–II', 'KC-5.9.II.A–D', 'Class, gender, household, and urbanization'] },
    premise: [
      'Manchester’s population has expanded rapidly around mills, canals, and coal-fired industry. Edwin Chadwick’s sanitary report describes contaminated water, overcrowded housing, and disease among laboring people. Factory owners fear taxes and regulation; workers fear that “improvement” will mean rent increases or displacement.',
      'The city must decide whether public health is a private household responsibility, a municipal duty, or a condition of industrial productivity. The same industrial city contains middle-class reformers, working-class neighborhoods, and households whose gender and income shape exposure differently.',
      'You sit on a sanitary board asked to turn evidence about urban disease into a practical program.'
    ],
    centralQuestion: 'How should an industrial city respond to disease and overcrowding when public health requires collective infrastructure but the costs and benefits are distributed unequally?',
    roles: [
      R('inspector', 'Public Health Inspector', 'You map disease, water, drains, housing, and mortality across the city.', 'You possess evidence and administrative expertise, but the board controls money and enforcement.', 'Build infrastructure that reduces preventable disease.', 'A report without implementation will leave conditions unchanged.', 'Urbanization creates environmental risks that require collective systems.', 'Tax for sewers, clean water, inspections, and transparent reporting.', 'You may assume technical evidence will overcome class conflict.'),
      R('worker', 'Working-Class Tenant', 'You live near a mill and pay rent from irregular wages while sharing water and privies.', 'Residents can petition and organize, but landlords and employers control housing access.', 'Protect family health without losing affordable housing or wages.', 'Improvement taxes and demolition may displace the neighborhood.', 'Standards of living are shaped by wages, housing, gender, and public infrastructure together.', 'Demand safe services, rent safeguards, and worker representation.', 'You may see all municipal authority as a threat after repeated neglect.'),
      R('owner', 'Factory Owner and Ratepayer', 'You employ workers and pay local taxes while competing in textile markets.', 'You can lobby and threaten relocation, but disease also disrupts labor and reputation.', 'Keep taxes predictable and mills operating.', 'Municipal spending will become open-ended regulation of private property.', 'Industrial productivity and urban welfare can conflict but are materially connected.', 'Support targeted sanitation around industrial districts with shared cost.', 'You may ignore how low wages and crowded housing are part of the production system.'),
      R('alderman', 'Municipal Alderman', 'You balance public pressure, ratepayers, landlords, and the city’s borrowing capacity.', 'You can pass bylaws and raise rates, but elections and class interests constrain action.', 'Make a program that voters can see and the treasury can sustain.', 'A costly plan may fail politically while a cheap plan fails medically.', 'Urban reform is a negotiation over who counts as a civic responsibility.', 'Use phased infrastructure with public oversight and neighborhood input.', 'You may compromise so extensively that the most dangerous conditions remain.')
    ],
    evidence: [
      E('growth', 'Rapid Urban Growth', 'Industrial towns grew quickly as people moved toward wage work, often faster than housing and services.', 'Explains why older municipal systems failed.'),
      E('water', 'Contaminated Water', 'Shared wells, privies, sewage, and industrial waste allowed disease to spread through urban environments.', 'Shows an environmental mechanism rather than blaming individual behavior.'),
      E('chadwick', 'Sanitary Report', 'Chadwick linked disease and mortality to drainage, cleanliness, and living conditions among laboring populations.', 'Provides contemporary reform evidence.'),
      E('class', 'Class Geography', 'Middle-class districts often had better space, ventilation, and services than working-class neighborhoods.', 'Shows unequal standards of living inside one city.'),
      E('women', 'Gendered Household Labor', 'Women and children carried much of the work of water, illness care, and household survival.', 'Connects urban conditions to gender roles.'),
      E('wages', 'Wage Constraint', 'Low and irregular wages limited tenants’ ability to move, buy fuel, or pay for private sanitation.', 'Explains why individual responsibility was insufficient.'),
      E('tax', 'Municipal Rates', 'Sewers and clean water required taxes, loans, and administrative capacity.', 'Makes public health a fiscal and political decision.'),
      E('housing', 'Overcrowding', 'Rapid population growth produced dense housing and shared facilities that intensified disease risk.', 'Links urbanization to social and environmental change.')
    ],
    decisions: [
      D('infrastructure', 'Build the system', 'Which intervention should lead?', [
        O('sewer', 'Build sewers and clean water', 'Borrow for a citywide network with public inspection and maintenance.', 'Disease risk falls and services become less dependent on private landlords.', 'Debt and construction disrupt neighborhoods and rates rise.', 'Long-term public health requires collective capital.'),
        O('housing', 'Improve housing first', 'Set occupancy, ventilation, and landlord standards before major infrastructure.', 'Tenants gain immediate protections and buildings become safer.', 'Disease continues through contaminated water and drainage.', 'Regulation reaches homes but cannot replace city systems.'),
        O('targeted', 'Target the worst districts', 'Concentrate funds on the highest mortality neighborhoods and industrial zones.', 'Limited money produces visible gains quickly.', 'Other districts remain vulnerable and political favoritism is likely.', 'Efficiency may undermine equal civic provision.')
      ]),
      D('cost', 'Assign the cost', 'Who should finance public health?', [
        O('rates', 'Use municipal rates', 'Tax property and businesses through local rates and public borrowing.', 'The city gains durable infrastructure and accountability.', 'Owners may pass costs into rents or leave the city.', 'Public goods require property holders to accept collective obligation.'),
        O('owner', 'Charge industry and landlords', 'Place larger fees on mills, landlords, and properties creating concentrated risks.', 'Those with greater capacity and exposure pay more.', 'Owners challenge the rule and may reduce employment or housing supply.', 'Environmental responsibility is assigned by contribution and power.'),
        O('relief', 'Seek central relief', 'Ask Parliament for grants and national standards.', 'Poor cities gain resources and rules become more consistent.', 'Local control weakens and national funds may be delayed.', 'Scale solves fiscal inequality but creates political dependence.')
      ]),
      D('displacement', 'Protect residents', 'How should the board handle demolition and relocation?', [
        O('compensation', 'Require compensation and replacement housing', 'Pair clearance with rent limits, relocation support, and new affordable units.', 'Health improvements do not automatically become displacement.', 'Costs rise and construction takes longer.', 'Public health is tied to housing rights and social stability.'),
        O('inspect', 'Inspect without clearance', 'Keep existing buildings but require ventilation, occupancy, and sanitation fixes.', 'Residents stay and the city avoids mass displacement.', 'Some structures cannot be made safe without rebuilding.', 'Incremental reform protects continuity but may leave deep defects.'),
        O('clear', 'Clear the worst courts quickly', 'Demolish the most dangerous housing and let the market rebuild.', 'Hazards are removed and new investment may arrive.', 'Tenants may lose homes and rents may become unaffordable.', 'Urban improvement can raise aggregate health while worsening inequality.')
      ])
    ],
    reflectionPrompt: 'Explain how industrialization changed social hierarchies, household roles, and standards of living. Use urban public health to show why causes and effects operated at more than one scale.',
    sources: [
      { label: 'Wellcome Collection — Chadwick and the sanitary movement', url: 'https://wellcomecollection.org/articles/WX6l2RAAACQAFc2g' },
      { label: 'UK Parliament — Public health and the Industrial Revolution', url: 'https://www.parliament.uk/about/living-heritage/transformingsociety/towncountry/towns/overview/publichealth/' },
      { label: 'British Library — Victorian cities and public health', url: 'https://www.bl.uk/learning/timeline/item126874.html' }
    ]
  }
];

fs.mkdirSync(OUT, { recursive: true });
for (const scenario of scenarios) {
  const destination = path.join(OUT, scenario.file);
  fs.writeFileSync(destination, renderRoomPage(scenario), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, destination)}`);
}
