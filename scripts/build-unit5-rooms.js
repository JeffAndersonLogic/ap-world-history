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
    title: 'The *Natural Rights Test*', location: 'Paris salon and printing office', date: '1788 to 1789',
    lessonUrl: '../../unit-5/lesson-5-1-enlightenment.html',
    alignment: { theme: 'Cultural Developments and Interactions (CDI)', objective: 'Explain the intellectual and ideological context in which revolutions swept the Atlantic world from 1750 to 1900.', skill: 'Claims and Evidence in Sources (3.A), with Continuity and Change', keyConcepts: ['KC-5.3.I.A', 'KC-5.3.I'] },
    premise: [
      'A Paris publisher is preparing a short collection of arguments about reason, consent, religious toleration, and natural rights. Readers want a clear challenge to rulers who inherited their power, but the commercial world that funds the press is tied to empire, slavery, and unequal access to education.',
      'The salon includes people who use Enlightenment language differently: some seek constitutional reform, some demand abolition, and some want the language limited to property-holding men. A new antislavery society, the Society of the Friends of the Blacks, was founded in Paris in February 1788, and people argue over whether girls should be educated to reason like boys. Inside the movement itself, the words say everyone, but the practice leaves many people out.',
      'You must decide what the pamphlet will claim, whose testimony it will print, and how directly it will expose the gap between universal principles and selective practice.'
    ],
    centralQuestion: 'How should an Enlightenment publisher use reason and natural-rights language when the movement’s own authors and sponsors exclude women, enslaved people, and the poor?',
    roles: [
      R('philosophe', 'Philosophe (Enlightenment Writer)', 'You write arguments against kings who rule without limits and against privileges people are born with.', 'You control the language of the pamphlet and have access to educated readers, but not to state power.', 'Secure toleration, consent, and limits on government.', 'A blunt attack may bring censorship or make reformers look socially dangerous.', 'Ideas gain force when they move through books, letters, and debate.', 'Publish a rights claim tied to constitutional limits and public reason.', 'You may assume educated European men are the only readers who matter, and think that writing "all men" includes everyone.'),
      R('abolitionist', 'Free Person of Color and Abolitionist', 'You bring evidence of colonial slavery and demand that rights apply across the Atlantic.', 'You have testimony, networks, and moral authority, but colonial law can silence or punish you.', 'Force the pamphlet to connect universal rights to emancipation.', 'A cautious text may legitimize the system it claims to criticize.', 'Enlightenment principles become politically explosive when excluded people appropriate them.', 'Print testimony and a direct antislavery claim.', 'You may underestimate the publisher’s financial and legal risks.'),
      R('investor', 'Plantation Investor and Merchant', 'You finance paper, shipping, and colonial commerce.', 'Your money can keep the press operating, but your wealth depends on forced labor and trade with the colonies.', 'Protect property and commercial stability while appearing reform-minded.', 'Abolition language could threaten your assets and provoke state repression.', 'Economic interests shape which “universal” ideas circulate.', 'Support civil equality for property holders while postponing colonial reform.', 'You may call property neutral even when it rests on violence.'),
      R('educator', 'Women’s Rights Educator', 'You argue that reason and education must include women.', 'You can expose the logic of exclusion, but male editors may treat your work as a side issue.', 'Make women’s rational capacity part of the main rights argument.', 'A token paragraph may leave domestic and political subordination untouched.', 'Universal language creates internal tools for challenging gender hierarchy.', 'Publish an argument for equal education and civic voice.', 'You may assume formal education alone can overcome class and racial barriers.')
    ],
    evidence: [
      E('locke', 'Consent and Natural Rights', 'Locke’s political theory described people as naturally free and government as dependent on consent.', 'Shows the core language used to challenge inherited authority.'),
      E('montesquieu', 'Separated Powers', 'Montesquieu linked liberty to institutional checks that prevent concentrated power.', 'Connects ideas to constitutional design rather than abstract freedom alone.'),
      E('salon', 'Salons, Letters, and Print', 'Salons, letters between writers, academies, and printed books spread arguments among educated readers.', 'Explains how ideas moved beyond one court or university.'),
      E('encyclopedie', 'Knowledge as Critique', 'The Encyclopédie organized practical and intellectual knowledge while questioning inherited authority.', 'Shows how information could challenge hierarchy.'),
      E('education', 'Educating Women', 'Writers argued over whether girls should be educated to reason like boys. Rousseau’s Emile (1762) said a woman’s education should be planned in relation to man.', 'Shows the movement\'s own members pointing out who the words left out.'),
      E('slavery', 'Colonial Wealth', 'European commerce and plantation wealth depended on enslaved labor even as authors discussed liberty.', 'Prevents treating Enlightenment ideas as detached from empire.'),
      E('toleration', 'Religious Toleration', 'Arguments for toleration challenged governments that forced people to follow one church.', 'Shows a concrete target of anti-authoritarian thought.'),
      E('public', 'Expanding Public Debate', 'Pamphlets and newspapers widened debate but remained shaped by literacy, price, censorship, and gender.', 'Keeps the public sphere both innovative and unequal.')
    ],
    decisions: [
      D('claim', 'Define the rights claim', 'What should the pamphlet say rights belong to?', [
        O('property', 'Limit rights to property-holding citizens', 'Say only men who own property and have an education may take part in government.', 'The text may survive censorship and attract elite reformers.', 'The pamphlet calls rights natural but still leaves out most people.', 'Practical reach comes at the cost of universal consistency.'),
        O('universal', 'Declare rights universal', 'State that reason, liberty, and protection from arbitrary power belong to all people.', 'The argument gives excluded groups language to challenge hierarchy.', 'Sponsors may withdraw and authorities may suppress the text.', 'Moral clarity increases political risk.'),
        O('staged', 'Publish a staged program', 'Call for immediate constitutional limits and a timetable for broader inclusion.', 'Reformers gain a coalition and a path to implementation.', 'Delay can become a permanent excuse for exclusion.', 'Going step by step may make change possible, but it can also make waiting seem normal.')
      ]),
      D('testimony', 'Choose the evidence', 'Whose experience should be placed at the center of the pamphlet?', [
        O('theorists', 'Lead with famous writers', 'Use Locke, Montesquieu, and other well-known authors as the main authorities.', 'Readers recognize the language and the argument looks intellectually serious.', 'Using only famous writers can leave out the people the pamphlet says it speaks for.', 'Famous names make the pamphlet look serious, but fewer kinds of people are heard.'),
        O('excluded', 'Lead with excluded testimony', 'Place women’s, colonial, and enslaved people’s arguments beside the theories.', 'The contradiction becomes concrete and harder to evade.', 'The publisher faces greater censorship and hostile readers.', 'Evidence expands the public while increasing exposure.'),
        O('hybrid', 'Pair ideas with real stories', 'Print each big idea next to the story of someone it leaves out.', 'The pamphlet ties each big idea to a real person\'s story.', 'The structure may satisfy neither cautious elites nor radical activists.', 'Telling more stories makes the pamphlet longer and harder to sum up in one line.')
      ]),
      D('circulation', 'Manage circulation', 'How should the publisher distribute the text?', [
        O('salon', 'Target salons and subscribers', 'Use private networks and a polished edition for educated readers.', 'The text is less likely to be seized immediately.', 'The audience remains socially narrow.', 'Safety protects circulation while limiting reach.'),
        O('cheap', 'Print a cheap broad edition', 'Use inexpensive paper and short pamphlets for artisans, clubs, and readers beyond salons.', 'More people can debate and adapt the ideas.', 'Financial loss and censorship become more likely.', 'Reaching ordinary readers means risking the publisher\'s money.'),
        O('atlantic', 'Build an Atlantic network', 'Send copies to reformers in Britain, the Caribbean, and North America.', 'Arguments can cross borders and connect movements.', 'Officials in the colonies may call the network a plot against the government.', 'Copies sent abroad can unite reformers, and also get them watched.')
      ])
    ],
    reflectionPrompt: 'Explain how Enlightenment ideas challenged traditional authority and how their selective application limited that challenge. Use one example involving gender, slavery, or property.',
    sources: [
      { label: 'Stanford Encyclopedia of Philosophy, Enlightenment', url: 'https://plato.stanford.edu/entries/enlightenment/' },
      { label: 'Avalon Project (Yale Law School), Declaration of the Rights of Man, 1789', url: 'https://avalon.law.yale.edu/18th_century/rightsof.asp' },
      { label: 'Musée protestant, The Calas affair', url: 'https://museeprotestant.org/en/notice/the-calas-affair/' }
    ]
  },
  {
    id: '5.2', unit: '5', topicTitle: 'Nationalism and Revolutions', file: 'the-saint-domingue-constitution.html',
    title: 'The *Saint-Domingue Constitution*', location: 'Port-Républicain (Port-au-Prince), Saint-Domingue', date: 'Spring 1801',
    lessonUrl: '../../unit-5/lesson-5-2-nationalism-and-revolutions.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain causes and effects of the various revolutions in the period from 1750 to 1900.', skill: 'Causation, with Claims and Evidence in Sources (3.C)', keyConcepts: ['KC-5.3.III.B', 'KC-5.3.I.B'] },
    premise: [
      'Ten years after the uprising of 1791, the formerly enslaved people of Saint-Domingue have defeated Spanish and British armies, slavery has been abolished in the colony, and Toussaint Louverture governs it. France still claims Saint-Domingue as its colony. Toussaint’s government must keep the farms and plantations producing, defend the colony, and make freedom from slavery last.',
      'Every choice is limited by war, by the racial divisions the colony grew up with, by the danger of a new invasion, and by the memory of plantation violence. A constitution can protect freedom, but rules that force people to keep working on plantations may feel like slavery under a new name and may lead to revolt.',
      'In 1801 Toussaint called an assembly of ten men to write a constitution for the colony. You sit on a council like it. Your plan must say who has full rights, how work on the land is organized, and how far the colony should govern itself rather than obey France.'
    ],
    centralQuestion: 'How can a revolutionary government protect freedom from slavery and the right to govern itself, while feeding people, keeping order, and surviving pressure from France?',
    roles: [
      R('louverture', 'Governor’s Adviser', 'You help Toussaint’s government run the colony, defend it, and keep its plantations producing.', 'You command officials and soldiers, but your power depends on people who remember forced labor.', 'Keep slavery abolished and stop France or any rival group from bringing it back.', 'Strict work rules may turn the liberators into new overseers.', 'Building a new government means balancing safety, food and money, and whether people accept your rule.', 'A constitution that gives the colony its own government and sets rules for paid plantation work.', 'You may trust one strong leader to solve problems faster than people voting can.'),
      R('cultivator', 'Formerly Enslaved Farmworker', 'You farm and you fought for the freedom won in the revolt.', 'Your people’s work and fighting experience give you power, but officials can force you to work and stop you from moving.', 'Get land of your own, keep your family safe, and never again live under plantation discipline.', 'A constitution may give forced labor a new name without changing your daily life.', 'Freedom means changing how people live, not only what the law says.', 'Support small family farms, wages, and work people choose freely.', 'You may not see how close the colony is to running out of food and soldiers.'),
      R('freeperson', 'Free Merchant of Color', 'You trade through the colony’s ports and defend the equal rights free people of color won from France in 1792.', 'You have trading partners and education, but racial divisions and foreign trade rules limit your power.', 'Build a colony where every free person has the same rights under the law and can trade freely.', 'A new order based on wealth may replace racial slavery with a different kind of ranking.', 'A shared identity can unite groups while leaving rich and poor divided.', 'Protect equal rights and clear, fair laws for trade.', 'You may think free trade will share power fairly when it may not.'),
      R('french', 'French Envoy', 'You speak for the French government, which ended slavery in 1794 but still wants to control the colony and its wealth. You are not on the council, but it must answer you.', 'France can send orders, ships, and soldiers, but any army it sends would face hard fighting and disease.', 'Bring the colony back under French control without admitting that the revolution had the right to take power.', 'A Saint-Domingue that governs itself could inspire revolts in other colonies.', 'An empire can use the language of the revolution while still denying people the right to rule themselves.', 'Offer the colony some self-rule, under French soldiers and French trade rules.', 'You treat freedom as a gift France gave, not a victory the people of Saint-Domingue won.')
    ],
    evidence: [
      E('slavecolony', 'Plantation Wealth', 'Before 1791, Saint-Domingue’s sugar and coffee made great fortunes from the work of enslaved people, kept going by violence.', 'Explains why European empires fought to get control of the colony.'),
      E('revolt', 'The Uprising of 1791', 'The uprising that began in August 1791 destroyed the old plantation order and made enslaved people a force in politics.', 'Shows a revolution made by ordinary people, not only by leaders writing laws.'),
      E('abolition', 'France Ends Slavery', 'France abolished slavery in all its colonies in 1794, during a war and after two and a half years of revolt in Saint-Domingue.', 'Shows how ideas, war, and the uprising worked together.'),
      E('louverture', 'Toussaint’s Plans', 'Toussaint wants a constitution that keeps slavery abolished, keeps plantations working, and gives the governor great power, and he means to put it in force before France approves it.', 'Shows the pull between freedom, producing food and money, and one leader’s power.'),
      E('napoleon', 'News From France, 1801', 'Napoleon Bonaparte has ruled France since 1799, and France and Britain are moving toward peace, which would free French ships and soldiers to sail to the Caribbean.', 'Makes pressure from France central to the council’s choices.'),
      E('yellowfever', 'Disease and War', 'A British army invaded the colony in 1793 and left in 1798, after yellow fever, the mountains, and Toussaint’s soldiers had worn it down.', 'Explains why a large army does not guarantee control of the colony.'),
      E('citizenship', 'Equal Rights Claimed', 'The revolution’s language of citizens and rights gave Black people and people of mixed descent words for demanding equal rights.', 'Connects Saint-Domingue to the other revolutions of the Atlantic world.'),
      E('declaration', 'The Declaration of 1789', 'France’s Declaration of the Rights of Man and of the Citizen says that “men are born and remain free and equal in rights.”', 'Shows the words the revolution in Saint-Domingue claimed, and France’s own promise.')
    ],
    decisions: [
      D('labor', 'Organize work on the land', 'How should the constitution organize farm and plantation work?', [
        O('smallholdings', 'Put family farms first', 'Break up plantations where possible and give families plots of land to farm for themselves.', 'Freedom becomes real, and families gain security.', 'The colony may sell less sugar and coffee and have less money during a war.', 'More freedom now may mean less money to pay soldiers and officials.'),
        O('contracts', 'Use paid work under rules', 'Keep large plantations running with wages and contracts, and limit workers’ hours and how freely they can move.', 'Crops to sell and supplies for defense keep coming.', 'Officials may use “contracts” to force people to work, which is forced labor under another name.', 'Production and self-rule are kept, but only through rules people will argue over.'),
        O('estate', 'Keep the plantations under government control', 'Keep plantations whole and require people to work on them for the colony’s survival.', 'The government gets steady crops to sell and more control.', 'It repeats plantation discipline and may cause a new revolt.', 'Safety and money come at the cost of people’s trust in the revolution.')
      ]),
      D('sovereignty', 'Decide the relationship with France', 'What relationship with France best protects the revolution?', [
        O('autonomy', 'Govern the colony ourselves', 'Keep ties to France, but make the colony’s own laws and its own decisions about defense and trade.', 'The government can defend freedom and show it has the right to rule.', 'France may call it rebellion and invade.', 'More self-rule means more risk of war with France now.'),
        O('protectorate', 'Accept French protection, with limits', 'Let France oversee some matters, such as foreign affairs, in return for promises that slavery will not return and for military help.', 'The deal may keep rivals away and bring back trade.', 'France could reread its promises later and take control back little by little.', 'Safety now may cost the colony its freedom to rule itself later.'),
        O('federation', 'Seek allies abroad', 'Invite rebels and revolutionaries in other colonies and countries of the Atlantic into a pact to defend and trade with each other.', 'Allies could make it harder for France to take the colony back.', 'Allies may not have ships, money, or the same goals.', 'Standing together is powerful but hard to organize across an ocean.')
      ]),
      D('citizenship', 'Decide who has full rights', 'Who should have full political rights?', [
        O('allfree', 'Every free person who lives here', 'Base citizenship on being free and living in the colony.', 'The colony rejects laws that rank people by race.', 'Differences in land, schooling, and wealth remain.', 'Equal rights on paper cannot erase unequal starting points.'),
        O('service', 'People who serve the colony', 'Give political rights to people who serve as soldiers or in public work while the colony rebuilds.', 'Defense and public work get support.', 'It leaves out people who cannot serve and gives the governor more power.', 'Tying rights to service shrinks who counts as a full member.'),
        O('property', 'People who own property', 'Let only property owners vote and hold office, and promise to widen it later.', 'Rich merchants and foreign lenders may trust the government.', 'The formerly enslaved majority may feel the rich took over the revolution.', 'Calm government now keeps the old ranking of rich over poor.')
      ])
    ],
    reflectionPrompt: 'Step out of the council. Explain one cause of the Haitian Revolution (a grievance, the words people claimed, or a chance to act) and one effect it had, in Saint-Domingue or beyond it. Then explain how your council’s choice about work, France, or citizenship could have changed what happened next.',
    sources: [
      { label: 'Encyclopaedia Britannica, Haitian Revolution', url: 'https://www.britannica.com/event/Haitian-Revolution' },
      { label: 'Library of Congress, Ayiti Reimagined: Haiti research guide', url: 'https://guides.loc.gov/haiti-reimagined' },
      { label: 'Haitian Constitution of 1801, English translation (Marxists Internet Archive)', url: 'https://www.marxists.org/history/haiti/1801/constitution.htm' }
    ]
  },
  {
    id: '5.3', unit: '5', topicTitle: 'The Industrial Revolution Begins', file: 'the-mill-partners.html',
    title: 'The *Mill Partners*', location: 'Nottingham, England', date: '1771',
    lessonUrl: '../../unit-5/lesson-5-3-industrial-revolution-begins.html',
    alignment: { theme: 'Humans and the Environments (ENV)', objective: 'Explain how environmental factors contributed to industrialization from 1750 to 1900.', skill: 'Causation, with Developments and Processes (1.B)', keyConcepts: ['KC-5.1.I.A', 'KC-5.1.I.C'] },
    premise: [
      'Richard Arkwright has a new machine that spins strong cotton thread, and a patent on it since 1769. In Nottingham his first machines are turned by horses. Horses cost money to feed and tire out, and a business that wants to spin far more thread needs a stronger, steadier power.',
      'His partners are stocking makers who grew rich in the hosiery trade, and they want thread for their stocking frames. They have put money in, and they will have to spend thousands of pounds more before the business earns anything back. The raw cotton comes by ship from abroad, much of it grown by enslaved people on plantations in the Caribbean.',
      'You sit at the partners’ table. You must decide where to build a new mill, how to organize the work inside it, and how to protect the invention the whole business depends on. Every choice depends on what the land and the water can give you, and on what people can build on top of it.'
    ],
    centralQuestion: 'Where should the partners build a new spinning mill, and how should they organize and protect it, when water, workers, buyers, money, and the law all pull in different directions?',
    roles: [
      R('inventor', 'Inventor and Mill Manager', 'You built the spinning machine and you run the mill. Your name is on the patent.', 'You know the machines better than anyone, but the money is mostly your partners’, and a court could take your patent away.', 'Build a mill big enough to prove the machine, and keep control of how it is run.', 'Copiers may build your machine and undersell you before your patent runs out.', 'A machine is only as good as the power that turns it and the people who tend it.', 'Build beside fast water, run the mill on fixed hours, and give each worker one step.', 'You may care more about the machines than about the people who must work them.'),
      R('hosier', 'Stocking-Maker Partner', 'You grew rich making stockings, and you have put your savings into the spinning business.', 'You can pay for buildings and machines, but you cannot run them, and your money is at risk until the mill makes a profit.', 'Get strong, cheap cotton thread for your stocking frames, and get your money back.', 'The partners may spend everything before the mill works, or build it somewhere you cannot reach.', 'A business must sell what it makes, so it should stay close to its buyers.', 'Build where the work can be watched and the thread can reach your frames quickly.', 'You may judge every choice by your own trade and miss what the machines need.'),
      R('banker', 'Nottingham Banker', 'You lend money to merchants and makers in Nottingham, and you introduced the partners to each other.', 'You can lend or refuse, but you do not own the business or the patent.', 'Lend to a business that will last and repay you.', 'A new kind of mill, far from any town, may fail and take your loan with it.', 'Money goes where the law protects what it builds and where the risk can be judged.', 'Lend only if the patent is defended and the partners put in their own money first.', 'You may trust the law to protect the partners more than it really will.'),
      R('spinner', 'Village Spinner', 'You have spun thread at home all your life, from cotton and wool a merchant brings to your door, and he pays you for each piece.', 'You know how to spin, but you own only your wheel, and you cannot set the price of thread.', 'Earn enough for your family, at home, at a pace you choose.', 'A mill that spins cheaper thread may leave the merchant no reason to come to your door.', 'Work is not only wages: it is where you work, who sets the hours, and how much of the job is yours.', 'Keep some spinning in homes, or bring whole families into the mill together.', 'You may not see how much cheaper the mill’s thread will be, or how fast it will come.')
    ],
    evidence: [
      E('horses', 'Horse Power', 'Arkwright’s first spinning machines, in Nottingham, were turned by horses.', 'Shows why the partners need a stronger, steadier source of power.'),
      E('water', 'Water at Cromford', 'At Cromford, in Derbyshire’s Derwent valley, a brook and a tunnel draining the nearby lead mines give a steady flow of water, and the water from underground is said never to freeze.', 'Shows how the environment could power a mill all year.'),
      E('village', 'A Small Valley Village', 'Cromford is a small village in hilly country, away from the big towns. Men there work the lead mines, and their wives and children could take mill work, but there are not enough people for a big mill.', 'Shows that a good place for power may be a hard place to find workers.'),
      E('patent', 'The Patent of 1769', 'The law of 1624 banned most monopolies but kept patents for the true and first inventor. Arkwright’s patent gives him the sole right to his spinning machine for up to fourteen years, if a court will defend it.', 'Shows how the law protected private property, and its limits.'),
      E('cotton', 'Cotton From Abroad', 'Cotton does not grow in Britain. It comes by ship, much of it from plantations in the Caribbean worked by enslaved people.', 'Shows that the mill depends on resources, and on forced labor, far from Britain.'),
      E('capital', 'Money at Risk', 'A mill and its machines cost thousands of pounds before they earn anything, at a time when a carpenter earns no more than about £36 a year.', 'Shows why saved-up capital mattered.'),
      E('canal', 'The Bridgewater Canal', 'Since the 1760s a canal has carried coal from the Duke of Bridgewater’s mines to Manchester, and the price of coal there has fallen by about half.', 'Shows how waterways made heavy goods cheap, and why some towns were growing fast.'),
      E('silkmill', 'The Derby Silk Mill', 'In Derby, a silk mill has run water-powered machines in one building since the 1720s, with workers tending them.', 'Shows that gathering machines and workers in one place had been tried before.')
    ],
    decisions: [
      D('site', 'Choose where to build', 'Where should the partners build the new mill?', [
        O('cromford', 'Build beside the water at Cromford', 'Lease land in the Derwent valley and turn the machines with a water wheel fed by the brook and the mine drain.', 'Steady water power all year, and land and labor that cost less than in a town.', 'The village is too small, so the partners must bring in workers and may have to build houses for them.', 'Power from nature is cheap, but the people must be found or brought.'),
        O('nottingham', 'Stay in Nottingham with horses', 'Keep the mill in town, close to the stocking makers, and add more horses.', 'Workers, buyers, and the partners are all close at hand.', 'Horses are costly and weak, so the mill cannot grow much.', 'Staying near buyers keeps the business small.'),
        O('manchester', 'Move near Manchester', 'Build near the cotton trade of Lancashire, where coal is cheaper since the canal and spinners are many.', 'Raw cotton, buyers, and many workers who already know cotton.', 'It is far from the partners, and rivals there could copy the machines more easily.', 'A bigger market brings bigger risks to the patent.')
      ]),
      D('work', 'Organize the work', 'How should the work be organized?', [
        O('steps', 'One step for each worker', 'Bring everyone into one building at fixed hours, and give each worker one step: feeding the machine, mending threads, carrying the cans.', 'Each job can be learned in days, so the mill can hire workers with no training and make far more thread.', 'Workers lose the whole craft and must work to the mill’s clock.', 'More thread, faster, but each worker knows only one step.'),
        O('families', 'Hire whole families', 'Bring families into the mill together and let parents oversee their own children at the machines.', 'Families stay together, and the mill gets a steady supply of workers.', 'Children work long hours, and the mill still sets the pace.', 'A familiar way of working inside a new kind of workplace.'),
        O('homes', 'Keep spinning in homes', 'Spin only the hardest thread in the mill, and put out the rest to spinners in their homes as before.', 'Village spinners keep their work, and the partners need a smaller building.', 'The merchant cannot watch the work or set the hours, and home spinning is slower.', 'Less change for spinners, and less thread for the partners.')
      ]),
      D('protect', 'Protect and pay for it', 'How should the partners protect the invention and pay for the mill?', [
        O('patent', 'Defend the patent in court', 'Use the patent to stop anyone copying the machine, and sue anyone who does.', 'The law protects what the partners built, and investors feel safe.', 'Court cases cost money, and a court may decide the patent was badly written or the ideas were not Arkwright’s own.', 'Legal protection is strong only if the courts uphold it.'),
        O('secret', 'Keep the mill a secret', 'Keep visitors out, and let workers see only their own step.', 'Copiers cannot learn the whole process easily.', 'Secrets leak when workers leave, and the patent is not used.', 'Splitting the work helps keep the secret, but trust is low.'),
        O('license', 'Sell the right to copy', 'Let other mill owners use the machine for a fee.', 'Money comes in quickly to pay for the new mill.', 'Rivals grow with the partners’ invention.', 'Fast money now may mean more competition later.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Explain how one thing nature gave Britain (water, coal and iron, or the shortage of wood) and one thing people built (a law, capital, towns, better farming, or cotton from abroad) helped cause industrial production to grow. Then explain whether your choice about where to build or how to organize the work does or does not show the factory system gathering production in one place and specializing labor.',
    sources: [
      { label: 'UNESCO World Heritage Centre, Derwent Valley Mills', url: 'https://whc.unesco.org/en/list/1030/' },
      { label: 'legislation.gov.uk, Statute of Monopolies, section 6 (1624)', url: 'https://www.legislation.gov.uk/aep/Ja1/21/3/section/VI' },
      { label: 'Science and Industry Museum, Manchester, cotton and slavery', url: 'https://www.scienceandindustrymuseum.org.uk/objects-and-stories/manchester-cotton-and-slavery' }
    ]
  },
  {
    id: '5.4', unit: '5', topicTitle: 'Industrialization Spreads', file: 'the-great-exhibition.html',
    title: 'The *Great Exhibition*', location: 'The Crystal Palace, London', date: '1851',
    lessonUrl: '../../unit-5/lesson-5-4-industrialization-spreads.html',
    alignment: { theme: 'Technology and Innovation (TEC)', objective: 'Explain how different modes and locations of production have developed and changed over time.', skill: 'Continuity and Change, with Making Connections (5.A)', keyConcepts: ['KC-5.1.II.B', 'KC-5.1.I.D'] },
    premise: [
      'It is 1851. In Hyde Park, London, a giant hall of iron and glass, the Crystal Palace, holds the Great Exhibition: goods and machines sent from Britain and from many other countries, all under one roof. British spinning machines and power looms stand in one part of the hall. Hand-made cloth from India is shown in another.',
      'Eighty years ago, Arkwright put cotton spinning under one roof at Cromford. Since then the new methods have left Britain. They reached the United States and Belgium with skilled people who carried them in their heads, and they are reaching the German states with British machines and engines. Britain has allowed textile machines to be sold abroad since 1843. Yet most of the world’s goods are still made by hand, and in 1750 most of them were made in Asia.',
      'You are part of a group of visitors from different making regions, walking the hall together. Each of you must decide what to take home: what to buy, whom to hire, and what to keep doing as before. Then, together, you must write one report: what has changed, and what has stayed the same, in who makes the world’s goods and how.'
    ],
    centralQuestion: 'Walking the Great Exhibition in 1851, what should visitors from different making regions take home, and what has changed and what has stayed the same in how and where the world’s goods are made?',
    roles: [
      R('bombay', 'Bombay Cloth Merchant', 'You buy and sell cotton cloth woven by hand in western India, and you have sailed to London to see the exhibition.', 'You know the cloth trade of the Indian Ocean, but the East India Company, not you, sets the taxes on what enters India.', 'Keep your weavers working and your trade profitable.', 'Cheaper machine-made cloth from Lancashire may keep taking your buyers, even at home.', 'People still want fine cloth woven by hand, but they buy cheap cloth by price.', 'Buy machine-spun thread for your weavers, and keep selling the finest cloth that machines cannot copy.', 'You may hope that the finest hand-made cloth can carry a whole trade.'),
      R('lowell', 'Lowell Mill Agent', 'You manage a cotton mill at Lowell, Massachusetts, built with Boston merchants’ money and first worked mostly by young women from New England farms.', 'Your mill is already running, but British mills are bigger and their cloth is often cheaper.', 'Find machines and ideas that will make your mill faster and its cloth cheaper.', 'British mills may undersell you in your own country.', 'A new industrial region can learn from the first one and then go its own way.', 'Study the newest British machines and buy the best ones now that they can be exported.', 'You may forget that your mill was started by people who copied British machines.'),
      R('belgian', 'Belgian Engineer', 'You build engines and machines at Seraing, near Liège, in the works John Cockerill founded on the coalfield.', 'You can build machines yourself, but you still hire British-trained workers for the hardest jobs.', 'Sell your own machines to the German states and beyond.', 'British machine makers may take your buyers now that they can export freely.', 'The methods spread fastest where coal, iron, and skilled people meet.', 'Hire skilled workers and copy the best designs, and sell machines to the next places that want them.', 'You may think every region has the coal and iron that Liège has.'),
      R('rhineland', 'Rhineland Mill Owner', 'You own a cotton-spinning mill in the German states, on a river near the Ruhr coalfields, and you have come to London to see the newest British machines.', 'You have money and coal close by, but your machines are older than Britain’s, and you still hire British-trained mechanics.', 'Buy the best British machines, now that they can be exported, and spin cloth cheaply at home.', 'British mills may undersell you in your own market before your new machines are running.', 'The methods spread fastest where coal, rivers, money, and skilled people meet.', 'Buy British machines and hire mechanics who can set them up and mend them.', 'You may think machines alone are enough, without the skilled people to run them.'),
    ],
    evidence: [
      E('hall', 'One Roof', 'The Great Exhibition shows British spinning machines and power looms in one part of the hall and hand-made goods from India and many other countries in others.', 'Shows two modes of production, machines and hands, side by side.'),
      E('shares', 'Who Makes the Goods', 'In the estimates of the economic historian Paul Bairoch, made long after this exhibition, China and India made over half of the world’s manufactured goods around 1750, and Britain under 2 percent. By 1860, he estimated, Britain made about a fifth.', 'Shows the change in where the world’s goods were being made.'),
      E('cloth', 'Cloth Turns Around', 'In 1815 India sold about £1.3 million worth of cotton cloth abroad and bought about £26,000 worth from England. By 1832 it sold under £100,000 worth and bought over £400,000 worth. India now sells raw cotton to British mills.', 'Shows one way the old makers’ share fell.'),
      E('weavers', 'Weavers Still Weaving', 'In India, Dacca’s weavers have sent fine muslins to this very hall, and across India many weavers still work handlooms, more and more of them with cheaper machine-spun thread.', 'Shows that the old makers kept making.'),
      E('ships', 'Teak Warships', 'At the Bombay Dockyard, the Wadia shipbuilders have built teak warships for Britain’s Royal Navy, among them HMS Trincomalee, launched in 1817.', 'Shows Asian makers producing some of the best goods of their kind.'),
      E('laws', 'The Secret Let Out', 'Britain banned skilled textile workers from leaving to work abroad until 1824, and banned the export of textile machines until 1843. Samuel Slater left anyway, in 1789, and built spinning machines in Rhode Island from memory.', 'Shows how the methods spread: first with people, then with machines.'),
      E('lowell', 'Money From Merchants', 'At Lowell, Massachusetts, wealthy Boston merchants have paid for big cotton mills since the 1820s, beside a river that turns their wheels.', 'Shows money as a carrier of the new methods.'),
      E('coal', 'Coal and Iron', 'The new industries outside Britain are growing where coal and iron are found, as at Liège in Belgium and in the Ruhr valley of the German states.', 'Shows the pattern in where the methods took root.')
    ],
    decisions: [
      D('change', 'Choose where your report begins', 'Which part of the hall should your report point at first, to explain what has changed and what has stayed the same?', [
        O('machines', 'The British spinning machines and power looms', 'Point your report at the machines that make cloth faster than any hands.', 'It names the new mode of production, the steam-powered factory.', 'It may make the hand-made goods in the hall look as if they no longer matter.', 'The machines are the change, but they are not the whole story.'),
        O('india', 'India’s hand-made cloth', 'Point your report at the cloth from India, still woven by hand, though many weavers now use machine-spun thread.', 'It shows what continued: skilled hand production, still at work.', 'It may hide how fast the share made by hand is shrinking.', 'The cloth is the continuity, and it is still being made.'),
        O('visitors', 'The machines visitors have come to see', 'Point your report at the British machines that visitors from many countries have come to London to study.', 'It shows the methods spreading, carried by people.', 'It may make the spread sound easy, when it needed coal, money, and skill.', 'The spread is a change, but it reached only some places.')
      ]),
      D('carry', 'Choose what to take home', 'For a region that wants the new methods, what should it take home first?', [
        O('buy', 'Buy British machines', 'Order spinning machines and engines from British makers, now that they can be exported.', 'Machines arrive quickly, built to the newest designs.', 'Nobody at home may know how to set them up or mend them.', 'Machines carry the method, but only if people can run them.'),
        O('hire', 'Hire skilled people', 'Hire British-trained engineers and mechanics to come and build and run the mills.', 'The knowledge comes with the people, as it did with Slater and Cockerill.', 'Skilled workers are expensive, and they may leave.', 'People carry what a machine cannot.'),
        O('copy', 'Copy the designs and build your own', 'Study the machines in the hall and build copies in your own workshops.', 'Your own makers learn the method, and the money stays at home.', 'Copies take years and may work worse at first.', 'Building your own is slower, but it lasts.')
      ]),
      D('continue', 'Advise the hand makers', 'What should the hand makers of India and other regions do, now that machine-made goods are everywhere?', [
        O('fine', 'Keep making the finest goods', 'Sell the finest hand-made cloth and goods to buyers who want what machines cannot copy.', 'Skilled makers keep their craft and their best buyers.', 'The finest goods are a small trade; most buyers want cheap cloth.', 'A craft can continue while its share shrinks.'),
        O('thread', 'Use machine-spun thread', 'Buy cheaper machine-spun thread and keep weaving by hand.', 'Weavers work faster and their cloth costs less.', 'Hand spinners lose their work, and the thread comes from abroad.', 'Old and new modes can work together.'),
        O('raw', 'Grow and sell raw cotton', 'Stop weaving and grow cotton to sell to the mills.', 'The mills always need cotton, so it sells.', 'The region becomes a supplier of raw materials, not of finished goods.', 'Selling raw cotton keeps a region in trade, but at the start of the chain.')
      ])
    ],
    reflectionPrompt: 'Step out of the hall. Explain one change in how or where the world’s goods were made between 1750 and 1900, and one thing that continued. Then explain whether your choice of what to take home does or does not fit the pattern you found in how the factory methods spread.',
    sources: [
      { label: 'Victoria and Albert Museum, The Opening of the Great Exhibition (Selous)', url: 'https://collections.vam.ac.uk/item/O8820/the-opening-of-the-great-oil-painting-selous-henry-courtney/' },
      { label: 'Reports by the Juries, Great Exhibition, 1852 (Internet Archive)', url: 'https://archive.org/details/reportsbyjurieso00grea' },
      { label: 'National Park Service, Blackstone River Valley, Slater Mill', url: 'https://www.nps.gov/blrv/learn/historyculture/slatermill.htm' },
      { label: 'Royal Museums Greenwich, HMS Trincomalee', url: 'https://www.rmg.co.uk/collections/objects/rmgc-object-150859' }
    ]
  },
  {
    id: '5.5', unit: '5', topicTitle: 'Technology of the Industrial Age', file: 'the-five-technologies.html',
    title: 'The *Five Technologies*', location: 'A science magazine office, New York', date: 'December 1900',
    lessonUrl: '../../unit-5/lesson-5-5-technology-of-industrialization.html',
    alignment: { theme: 'Technology and Innovation (TEC)', objective: 'Explain how technology shaped economic production over time.', skill: 'Causation, with Developments and Processes (1.B)', keyConcepts: ['KC-5.1.I.B', 'KC-5.1.I.E', 'KC-5.1.IV'] },
    premise: [
      'It is December 1900, and the century is ending. The editors of a New York science magazine want a special article for the new year: “Five Technologies that Changed the World.” They have chosen the five: the steam engine, the railroad, the steamship, the telegraph, and the internal combustion engine.',
      'You are part of the writing team, and each of you has studied one of the five. The editors want the five ranked, from the one that changed the world most to the one that changed it least, with a few paragraphs explaining why.',
      'Every technology on the list needed some of the others. So you must agree on what “changed the world” means, defend your own technology with evidence, and decide what to do with the newest machine on the list, which has barely begun its work.'
    ],
    centralQuestion: 'Which technology did the most to change how much the world could make, and how far its goods and people could go, by 1900, and how should a team rank the other four?',
    roles: [
      R('steam', 'Steam Engine Writer', 'You have studied the steam engine, from Newcomen’s mine pump of 1712 to Watt’s engines that turned wheels.', 'You can show that the railroad and the steamship are both steam engines on the move, but your machine is old news to readers in 1900.', 'Put the steam engine first, as the root of the others.', 'Readers may think a machine from the 1700s is not exciting enough to lead.', 'The deepest cause matters most: the machine that unlocked coal’s energy.', 'Rank the steam engine first.', 'You may forget that an engine alone made nothing reach farther until rails and hulls carried it.'),
      R('rail', 'Railroad Writer', 'You have studied the railroad, from the Liverpool and Manchester line of 1830 to the line across the United States and the Trans-Siberian.', 'You have the most dramatic evidence of reach, but rails cost enormous sums and took decades to lay.', 'Put the railroad first, for reaching the middle of continents.', 'The team may call the railroad just one use of the steam engine.', 'A technology matters by what it reaches: rails went where no river or canal went.', 'Rank the railroad first.', 'You may forget that rails reached only as far as someone paid to build them.'),
      R('ship', 'Steamship Writer', 'You have studied the steamship, from paddle steamers to the steel liners that now cross the Atlantic in less than a week.', 'You can show that steamships joined the continents, but sailing ships still carry some heavy cargo.', 'Put the steamship near the top, for joining the oceans.', 'The team may treat oceans as less important than land.', 'The world economy is joined by sea; most long-distance trade travels on water.', 'Rank the steamship first or second.', 'You may overlook that ships needed coaling stations and ports, and could not go inland without rails or rivers.'),
      R('wire', 'Telegraph Writer', 'You have studied the telegraph, from Morse’s line of 1844 to the cables under the Atlantic and to India.', 'You can show that news now outruns any ship, but the telegraph moves no goods and no people.', 'Put the telegraph first, for joining markets with news.', 'The team may say a message is not production.', 'Information decides what is bought, where, and at what price.', 'Rank the telegraph first.', 'You may forget that a price on a wire still needs a train and a ship to carry the wheat.'),
      R('engine', 'Internal Combustion Engine Writer', 'You have studied the newest machine on the list: the engine that burns its fuel inside itself, from Otto’s engine of 1876 to Benz’s car of 1886.', 'You can argue about the future, but cars are still rare: historians later estimated about 8,000 in the whole United States in 1900.', 'Keep the internal combustion engine from being dismissed as a toy.', 'The team may rank it last and write nothing about it.', 'A technology can matter most for what it starts, not for what it has done.', 'Rank it last for what it had done by 1900, but write a paragraph on what oil and this engine could do next.', 'You may claim effects that have not happened yet.')
    ],
    evidence: [
      E('watt', 'A Pump, Then Wheels', 'Newcomen’s engine of 1712 pumped water from a coal mine. Watt’s engines used less than a third of the coal, and from the 1780s they turned wheels, so mills could run on coal instead of rivers.', 'Shows how the steam engine became the power of factories.'),
      E('coal', 'More Coal', 'Britain mined about 65 million tons of coal in 1854; historians later counted about 225 million tons for 1900. They also estimated that by about 1900 coal gave about half of all the energy used in the world.', 'Shows how much energy the machines unlocked.'),
      E('steel', 'Steel for Rails and Ships', 'Since Bessemer’s process of 1856, steel has become cheap. The United States made about 69,000 tons of steel in 1870; historians later counted about 10 million tons for 1900.', 'Shows a new method that built the rails and the ships.'),
      E('methods', 'New Methods', 'Chemists have made dyes from coal tar since 1856, and German companies now invent new ones in laboratories. New York has sold electric power since 1882. Machine tools cut parts so exactly that they fit any copy of a machine.', 'Shows the second industrial revolution building on coal and steam.'),
      E('rail', 'Rails Across Continents', 'Russia had 27 kilometers of railway in 1840; historians later counted more than 53,000 for 1900. The line across the United States was finished in 1869, and the Trans-Siberian is being built toward the Pacific.', 'Shows railroads reaching the interiors of continents.'),
      E('ships', 'Days, Not Weeks', 'Under sail, emigrants from Norway took about 53 days on average to reach America. The fastest steamships now cross the Atlantic in under six days, and the Suez Canal, opened in 1869, mostly serves steamships, because sailing ships struggle against the Red Sea winds.', 'Shows steamships joining the oceans.'),
      E('wire', 'News by Wire', 'Morse opened his telegraph line from Washington to Baltimore in 1844 with the message “What hath God wrought?” Cables under the Atlantic have carried messages since 1866, and in 1870 another, through the Red Sea, reached Bombay. A message now crosses the ocean in minutes.', 'Shows the telegraph joining markets with news.'),
      E('trade', 'Prices Come Together', 'Historians later measured that wheat cost 57.6 percent more in Liverpool than in Chicago in 1870, and only 15.6 percent more by 1913, as rail, steamships, and news joined the two markets.', 'Shows how the reach led to more trade.'),
      E('people', 'People on the Move', 'Historians later counted about 55 million Europeans who moved to the Americas and Australia between 1850 and 1914, and more than 29 million Indians and 19 million Chinese who moved to Southeast Asia and the lands around the Indian Ocean between 1846 and 1940, many by steamship and rail.', 'Shows how the reach led to more migration.'),
      E('cars', 'A Machine Just Starting', 'Historians later estimated that in 1900 there were only about 8,000 cars in the whole United States. Most oil is still made into kerosene for lamps.', 'Shows that the internal combustion engine’s big effects have not come yet.')
    ],
    decisions: [
      D('measure', 'Choose the measure', 'Before you rank anything, what should “changed the world” mean for this article?', [
        O('energy', 'The power it added', 'Rank by how much new energy each technology put to work.', 'It goes to the root of the change: machines unlocking coal.', 'It may rank the telegraph low, though news changed trade.', 'Power is the first link in the chain, but not the whole chain.'),
        O('reach', 'How far it carried goods, people, and news', 'Rank by how far each technology extended trade and travel.', 'It shows what changed for farmers, merchants, and migrants.', 'It may forget that the reach ran on steam and coal.', 'Reach is the visible effect; power is hidden behind it.'),
        O('production', 'How much more the world could make', 'Rank by how much each technology raised what the world produced and sold.', 'It answers the question economists ask.', 'It is the hardest to measure for any one machine.', 'Production is the goal, but every machine shared in it.')
      ]),
      D('first', 'Choose number one', 'Which technology should lead the article?', [
        O('steam', 'The steam engine', 'Lead with the machine that turned coal into motion.', 'It is the cause behind the railroad and the steamship.', 'Readers may find an eighteenth-century engine less striking than a train.', 'The deepest cause is not always the most visible one.'),
        O('rail', 'The railroad', 'Lead with the technology that reached the middle of continents.', 'Its effects on farms, mines, and towns are easy to see.', 'It depended on the steam engine, coal, and steel.', 'A visible effect can hide the causes underneath it.'),
        O('ship', 'The steamship', 'Lead with the technology that crossed oceans in days, not weeks.', 'It joined the continents and carried wheat and migrants across the sea.', 'It could not go far inland without rails or rivers.', 'Oceans joined the world, but the interiors needed more than ships.'),
        O('wire', 'The telegraph', 'Lead with the technology that made news faster than any ship.', 'It shows that information shaped markets.', 'It carried no goods and no people.', 'Communication joins markets, but goods still need to move.')
      ]),
      D('newest', 'Place the newest machine', 'What should the article do with the internal combustion engine?', [
        O('last', 'Rank it last and say little', 'Judge it only by what it had done by 1900.', 'The ranking stays honest about the evidence.', 'Readers may miss what oil and this engine could do next.', 'Evidence of effects, not hopes, decides a ranking.'),
        O('future', 'Rank it last, with a paragraph on the future', 'Rank it by what it had done, but explain what it might start.', 'The article is honest and still looks ahead.', 'A prediction can turn out wrong.', 'A cause can come long before its effects.'),
        O('high', 'Rank it high for what it will do', 'Rank it by what you expect it to change.', 'The article looks bold and modern.', 'It ranks a machine on effects nobody has seen yet.', 'Guessing the future is not the same as explaining the past.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Give your ranking of the five technologies, from most to least important by 1900. Defend your number one with one piece of evidence, explain how it made one other technology on the list possible, and say what it changed in how much the world could make or how far goods and people could go.',
    sources: [
      { label: 'Science Museum Group, Rotative Steam Engine by Boulton and Watt, 1788', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co50948' },
      { label: 'National Park Service, Golden Spike National Historical Park', url: 'https://www.nps.gov/gosp/index.htm' },
      { label: 'Library of Congress, Invention of the Telegraph', url: 'https://www.loc.gov/collections/samuel-morse-papers/articles-and-essays/invention-of-the-telegraph/' },
      { label: 'Norway Heritage, By Steamship Across the Ocean', url: 'https://www.norwayheritage.com/by_steamship.asp' }
    ]
  },
  {
    id: '5.6', unit: '5', topicTitle: 'Industrialization: Government’s Role from 1750 to 1900', file: 'the-factory-sale.html',
    title: 'The *Factory Sale*', location: 'A government council room, Tokyo', date: '1880',
    lessonUrl: '../../unit-5/lesson-5-6-industrialization-government-and-society.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain the causes and effects of economic strategies of different states and empires.', skill: 'Causation, with Making Connections (5.A)', keyConcepts: ['KC-5.1.V.C', 'KC-5.2.II.A'] },
    premise: [
      'It is 1880 in Tokyo. Twenty-seven years ago, Commodore Perry\'s American warships forced Japan to open its ports, and treaties since then have let foreigners be tried in their own courts and kept Japan from setting its own taxes on foreign goods. Twelve years ago, the Meiji government took power promising a rich country and a strong army.',
      'Since then the government has built Japan\'s first railway, from Tokyo to Yokohama, the Tomioka Silk Mill, shipyards, mines, telegraph lines, weapons works, and factories for goods such as glass, cement, and cloth. Farmers have paid for much of it through the land tax. But running so many businesses is very expensive, and it is straining the government\'s money.',
      'You sit on a council that must advise the government: keep running the state\'s businesses, or sell them, and if so, which ones, to whom, and on what terms. Whatever you choose has to keep Japan growing stronger while the foreign powers are watching.'
    ],
    centralQuestion: 'Should Japan\'s government keep running the industries it built, or sell them to private companies, and how can it keep Japan growing strong either way?',
    roles: [
      R('finance', 'Finance Official', 'You keep the government\'s accounts, and you can see the cost of every factory, mine, and shipyard.', 'Your numbers carry weight with the leaders, but you build nothing yourself.', 'Stop the losses, so the government can pay for the army, schools, and railways.', 'If the treasury keeps paying for businesses that lose money, there will be nothing left for defense.', 'A state should start what no one else can, then let others carry it.', 'Sell most of the businesses, soon.', 'You may sell useful works too cheaply, or to whoever is closest to the leaders.'),
      R('engineer', 'Industry Ministry Engineer', 'You helped build the railway and the model mills, and you trained the first Japanese workers to run foreign machines.', 'You know how the works run, but you do not decide who owns them.', 'Keep the new skills spreading across Japan.', 'Private owners may cut training and quality to make a quick profit.', 'Japan needs its own engineers and skilled workers more than it needs any one factory.', 'Sell, but only to buyers who keep training workers and keep standards high.', 'You may value the model works so much that you ignore what they cost.'),
      R('merchant', 'Merchant House Partner', 'Your family\'s business house has traded and lent money for generations, and it has helped the new government before.', 'You have money and business skill, and the government trusts you.', 'Buy good works at a fair price and make them pay.', 'You will be blamed if a famous works fails in private hands.', 'A business that must earn its own money is run more carefully than one the treasury pays for.', 'Buy the works with the best prospects, at a low price, with time to pay.', 'You may want only the profitable works and leave the state the rest.'),
      R('officer', 'Army Officer', 'You command troops in the new army of drafted men, and you remember why Japan began all this: the foreign warships.', 'The leaders listen when you speak of defense.', 'Keep the guns, ships, and powder that a strong army needs in Japanese hands.', 'A private owner might sell to the highest bidder, or close a works the army needs.', 'Industry is for a strong army; profit comes second.', 'Sell the ordinary factories, but keep the weapons works and shipyards under the government.', 'You may treat every factory as a weapon and forget the cost.'),
      R('farmer', 'Village Headman', 'You speak for the farmers of a district who pay the land tax in money every year.', 'Your district pays much of the bill, but you have no seat in the government.', 'Keep the land tax from rising to pay for losses.', 'Farmers will be squeezed to keep factories running that they never see.', 'Those who pay should see the benefit.', 'Sell the businesses that lose money, so the land tax does not have to rise.', 'You may not see how railways and mills could help your district later.')
    ],
    evidence: [
      E('threat', 'Ships and Treaties', 'In 1853 Commodore Perry\'s warships came into Edo Bay. Treaties in 1854 and 1858 opened Japan\'s ports, let foreigners be tried in their own courts, and took away Japan\'s control of its own trade. Under a tariff convention of 1866, Japan can charge only about 5 percent on foreign goods.', 'Shows why the government wanted industry: the foreign powers, and treaties that leave Japan unable to tax foreign goods much.'),
      E('oath', 'The Charter Oath', 'In 1868 the new government promised: "Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule." The government\'s slogan is "Rich country, strong army."', 'Shows what the government said foreign knowledge was for, and, in its slogan, what industry was for.'),
      E('reform', 'Reform First', 'In 1871 the old lords\' domains were abolished. The samurai lost their privileges, and men of every class were drafted into a national army. A national school system began in 1872, and a land tax paid in money gave the government money to spend.', 'Shows the reforms that made state industry possible.'),
      E('railway', 'The First Railway', 'Japan\'s first railway, from Tokyo to Yokohama, opened in 1872. The government built it with money raised in Britain and British engineers.', 'Shows the state building what no private company had built.'),
      E('silk', 'The Tomioka Silk Mill', 'The government opened the Tomioka Silk Mill in 1872, with French machines and a French engineer, Paul Brunat, to teach Japanese workers, mostly young women, to reel silk by machine, so the method could spread to other mills.', 'Shows a model works built to spread a skill, not only to make a profit.'),
      E('cost', 'What It Costs', 'Besides the railway and the silk mill, the government runs shipyards, mines, weapons works, telegraph lines, and dozens of factories for goods such as sugar, glass, textiles, cement, and chemicals. Running them all is very expensive, and it strains the government\'s money.', 'Shows the cost behind the council\'s decision.'),
      E('tax', 'Who Pays', 'Much of the government\'s money comes from the land tax that farmers pay in money every year.', 'Shows who pays if the businesses keep losing money.'),
      E('egypt', 'A Comparison Historians Make', 'Historians often compare Japan with Egypt. In the 1820s and 1830s, Egypt\'s governor, Muhammad Ali, built about 30 state cotton mills with drafted workers to supply his army. After European powers forced him to cut his army to 18,000 in 1841 and give up his monopolies, and with almost no coal, most of the mills had failed by the mid-1840s.', 'Shows what a state industry can come to, and invites the question of whether Japan is different.')
    ],
    decisions: [
      D('keep', 'Keep or sell', 'What should the government do with the businesses it built?', [
        O('keep', 'Keep them all', 'The government keeps running every works and pays the losses from taxes.', 'Training and standards stay in the government\'s hands, and nothing the army needs is lost.', 'The losses go on, and the land tax may have to rise.', 'Control is kept, and paid for by the people who pay the tax.'),
        O('most', 'Sell most, keep the military works', 'Sell the ordinary factories and mines, but keep the weapons works and shipyards under the government.', 'The treasury saves money while the army keeps what it needs.', 'Buyers may want only the best works, and the government keeps some of the costliest.', 'Selling some saves money; keeping some keeps the army supplied.'),
        O('all', 'Sell them all', 'Sell every works, even the weapons works, to private buyers.', 'The losses stop at once, and private owners must make the works pay.', 'The army must buy from private owners, who may put profit first.', 'The treasury is relieved, but the state gives up control of its weapons.')
      ]),
      D('buyers', 'Choose the buyers and the terms', 'To whom, and on what terms, should the works be sold?', [
        O('auction', 'Sell to the highest bidder', 'Open the sale to anyone, at the best price offered.', 'The treasury gets the most money, and the sale looks fair.', 'Few Japanese buyers have that much money, and a famous works might be sold off for scrap.', 'A fair price may come at the cost of who ends up owning the works.'),
        O('trusted', 'Sell cheaply to experienced business houses', 'Sell at low prices, with years to pay, to merchant houses that already know how to run large businesses.', 'Experienced owners are likely to keep the works running and growing.', 'People may say the government is handing public works to its friends.', 'Keeping the works alive may mean a low price and charges of favoritism.'),
        O('conditions', 'Sell with conditions', 'Sell only to buyers who promise to keep the works running, keep training workers, and keep standards high.', 'The skills keep spreading, and the works stay in use.', 'Fewer buyers will agree, and the sale may take years.', 'Conditions protect the purpose of the works but slow the sale.')
      ]),
      D('next', 'Choose how to keep industry growing', 'After the sale, how should the government help Japanese industry grow?', [
        O('subsidy', 'Help private companies with aid', 'Pay or lend money to private companies that build ships, railways, and mills Japan needs.', 'Private owners build more, with the state guiding where.', 'Taxpayers still pay, and the companies that get aid may grow very powerful.', 'The state guides industry without running it, but it still pays.'),
        O('schools', 'Spend on schools and skills', 'Put the money saved into schools and technical training.', 'Japan gains engineers and skilled workers for every future factory.', 'The results take years, and the foreign powers will not wait.', 'Skills last longest, but take longest to pay off.'),
        O('loans', 'Borrow abroad to build faster', 'Borrow from foreign banks to build more railways and works quickly.', 'Industry grows faster than the tax alone could pay for.', 'Debts to foreign lenders can give foreign powers a hold on a country.', 'Speed now may mean dependence later.')
      ])
    ],
    reflectionPrompt: 'Step out of the room. Explain the causes and effects of the Meiji government\'s economic strategy: why the state built industry itself, why in 1880 it decided to sell most of it, and what that strategy led to by 1895. Then name one link Japan\'s strategy shares with Muhammad Ali\'s in Egypt (the pattern) and one difference in what happened next.',
    sources: [
      { label: 'Columbia University, Asia for Educators, The Meiji Restoration and Modernization', url: 'https://afe.easia.columbia.edu/special/japan_1750_meiji.htm' },
      { label: 'Columbia University, Asia for Educators, Commodore Perry and Japan (1853-1854)', url: 'https://afe.easia.columbia.edu/special/japan_1750_perry.htm' },
      { label: 'Library of Congress, Egypt: A Country Study, Muhammad Ali, 1805-48', url: 'https://countrystudies.us/egypt/21.htm' },
      { label: 'Japan Customs, History of Japan Customs', url: 'https://www.customs.go.jp/english/zeikan/history_e.htm' }
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
      { label: 'Encyclopaedia Britannica, Ottoman Empire: finance and reform', url: 'https://www.britannica.com/place/Ottoman-Empire/The-Tanzimat-reforms' },
      { label: 'Encyclopaedia Iranica, Ottoman Public Debt Administration', url: 'https://www.iranicaonline.org/articles/ottoman-empire' },
      { label: 'Cambridge University Press, Ottoman economic history overview', url: 'https://www.cambridge.org/core/books/cambridge-history-of-turkey/' }
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
      { label: 'National Park Service, Pullman National Historical Park', url: 'https://www.nps.gov/pull/learn/historyculture/the-pullman-strike.htm' },
      { label: 'Library of Congress, Eugene V. Debs', url: 'https://www.loc.gov/item/today-in-history/may-09/' },
      { label: 'Encyclopaedia Britannica, Pullman Strike', url: 'https://www.britannica.com/event/Pullman-Strike' }
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
      { label: 'Wellcome Collection, Chadwick and the sanitary movement', url: 'https://wellcomecollection.org/articles/WX6l2RAAACQAFc2g' },
      { label: 'UK Parliament, Public health and the Industrial Revolution', url: 'https://www.parliament.uk/about/living-heritage/transformingsociety/towncountry/towns/overview/publichealth/' },
      { label: 'British Library, Victorian cities and public health', url: 'https://www.bl.uk/learning/timeline/item126874.html' }
    ]
  }
];

fs.mkdirSync(OUT, { recursive: true });
for (const scenario of scenarios) {
  const destination = path.join(OUT, scenario.file);
  fs.writeFileSync(destination, renderRoomPage(scenario), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, destination)}`);
}
