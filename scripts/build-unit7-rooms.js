#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { renderRoomPage } = require('./lib/room-v2-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'beintheroom', 'unit-7');
const R = (id, name, position, power, goals, fears, lens, preference, blindSpot) => ({ id, name, position, power, goals, fears, lens, preference, blindSpot });
const E = (id, label, text, why) => ({ id, label, text, why });
const O = (id, title, action, benefits, worries, tradeoff) => ({ id, title, action, benefits, worries, tradeoff });
const D = (id, title, prompt, options) => ({ id, title, prompt, options });

const scenarios = [
  {
    id: '7.1', unit: '7', topicTitle: 'Shifting Power After 1900', file: 'the-petrograd-order.html',
    title: 'The *Petrograd Order*', location: 'Petrograd Soviet meeting hall', date: 'March 1917',
    lessonUrl: '../../unit-7/lesson-7-1-shifting-power.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain how internal and external factors contributed to political change and the collapse of empires after 1900.', skill: 'Causation and comparison', keyConcepts: ['KC-6.2.I', 'KC-6.2.I.A–C', 'Imperial collapse and revolution'] },
    premise: [
      'The tsar has abdicated after military defeats, food shortages, strikes, and mutiny. A Provisional Government claims legal authority, while the Petrograd Soviet represents workers and soldiers and can influence the capital’s armed forces.',
      'Russia remains at war. Peasants demand land, urban workers demand food and control, and soldiers question whether officers can order them against civilians. The state is not replaced by one clear successor; power is divided between institutions with different sources of legitimacy.',
      'You must decide how the Soviet will handle military obedience, participation in government, and demands for peace and land without knowing whether cooperation will stabilize Russia or postpone another revolution.'
    ],
    centralQuestion: 'How should the Petrograd Soviet use its power after the tsar’s fall when continuing war, land inequality, food shortages, and divided authority threaten the new order?',
    roles: [
      R('soldier', 'Soldier Delegate', 'You represent troops exhausted by casualties and uncertain command.', 'Armed soldiers can determine order in the capital, but desertion or disunity could collapse the front.', 'Protect soldiers from arbitrary officers and secure a credible path to peace.', 'The government may send troops back into a war they no longer trust.', 'External war can destroy imperial legitimacy from within.', 'Condition military obedience on civilian oversight and defensive operations.', 'You may underestimate how army breakdown could expose civilians and territories.'),
      R('worker', 'Factory Worker Delegate', 'You represent strikers facing hunger, inflation, and employer control.', 'Factories and streets give workers leverage, but work stoppages deepen shortages.', 'Win food security, labor rights, and a meaningful voice in production.', 'Elite ministers may use the revolution to preserve property and hierarchy.', 'Economic crisis turns political legitimacy into a daily material question.', 'Demand elected factory committees and immediate relief.', 'You may treat continued production as surrender even when cities need supplies.'),
      R('minister', 'Provisional Government Minister', 'You claim authority through the Duma and promise a future constituent assembly.', 'You can issue laws and negotiate with allies, but officials and soldiers may obey the Soviet instead.', 'Preserve state continuity, elections, and Russia’s international commitments.', 'Immediate radical changes may trigger military collapse or civil war.', 'Political transitions need institutions and legal continuity.', 'Cooperate with the Soviet while postponing permanent land decisions to elections.', 'You may mistake procedural delay for stability while public confidence disappears.'),
      R('bolshevik', 'Bolshevik Organizer', 'You argue that workers and soldiers should take power rather than support liberal ministers.', 'Your party has disciplined organizers but is still a minority in many soviets.', 'Turn dual power into rule by soviets and withdraw from the war.', 'Compromise may demobilize revolutionary energy and restore elite control.', 'Class conflict makes coalition government temporary and unstable.', 'Oppose ministerial participation and campaign for peace, land, and soviet power.', 'You may assume a party program can govern a vast, divided empire without coercion.')
    ],
    evidence: [
      E('war', 'Military Defeat', 'Mass casualties, supply failures, and battlefield reverses discredited the tsarist state.', 'Shows the external pressure accelerating internal collapse.'),
      E('food', 'Food and Inflation', 'Transport disruption and inflation produced severe urban shortages and bread protests.', 'Connects economic crisis to political revolt.'),
      E('abdication', 'Tsar’s Abdication', 'Nicholas II abdicated after commanders and political elites withdrew support.', 'Shows collapse inside the ruling coalition.'),
      E('dual', 'Dual Power', 'The Provisional Government held formal authority while the Petrograd Soviet held popular and military influence.', 'Defines the central institutional dilemma.'),
      E('order1', 'Soviet Order No. 1', 'The Soviet asserted soldier committees and limited obedience to orders conflicting with Soviet directives.', 'Shows authority moving into representative military structures.'),
      E('land', 'Peasant Land Demands', 'Peasants expected redistribution of noble and church land and often acted before national legislation.', 'Adds the rural majority to the crisis.'),
      E('nationalities', 'Imperial Nationalities', 'Poles, Finns, Ukrainians, and others pressed claims as the Russian imperial center weakened.', 'Shows imperial collapse beyond Petrograd.'),
      E('assembly', 'Constituent Assembly Promise', 'The Provisional Government promised elections but delayed major structural decisions.', 'Explains both its legal claim and its vulnerability.')
    ],
    decisions: [
      D('army', 'Set military authority', 'How should soldiers respond to officers and government orders?', [
        O('conditional', 'Conditional obedience', 'Obey defensive orders that do not conflict with elected soldier committees and Soviet directives.', 'The front retains some coordination while arbitrary authority is checked.', 'Conflicting chains of command can paralyze the army.', 'Democratic control weakens military unity.'),
        O('traditional', 'Restore the officer chain', 'Return operational command to officers while keeping committees for grievances.', 'The government gains a clearer army during wartime.', 'Soldiers may see restoration as betrayal and mutiny again.', 'Military effectiveness is prioritized over revolutionary control.'),
        O('demobilize', 'Begin controlled demobilization', 'Withdraw unreliable units, defend essential fronts, and negotiate for peace.', 'Casualties and mutiny may fall.', 'Allies and enemies exploit the retreat and the state loses territory.', 'Peace reduces one crisis while creating strategic vulnerability.')
      ]),
      D('government', 'Choose the Soviet’s relationship to government', 'Should Soviet leaders enter the cabinet?', [
        O('coalition', 'Join a coalition cabinet', 'Take ministries and make food, labor, and elections joint responsibilities.', 'Popular representatives gain direct administrative power.', 'The Soviet shares blame for policies it cannot fully control.', 'Participation increases capacity while weakening independence.'),
        O('oversight', 'Support with strict oversight', 'Keep separate institutions and condition support on published commitments.', 'The Soviet preserves leverage and can expose broken promises.', 'Dual power and unclear responsibility continue.', 'Autonomy protects legitimacy but prolongs instability.'),
        O('replace', 'Demand an all-soviet government', 'Transfer executive authority to elected worker and soldier councils.', 'Formal and popular power may align.', 'Rural representation and opposition parties may reject the move.', 'Revolutionary clarity risks civil conflict and one-party dominance.')
      ]),
      D('program', 'Set the immediate program', 'What should happen before national elections?', [
        O('peace', 'Peace first', 'Open negotiations and redirect transport and industry toward civilian supply.', 'War pressure and shortages may ease.', 'Russia could accept severe terms and lose allied support.', 'Ending external war may deepen territorial collapse.'),
        O('land', 'Land and food first', 'Authorize local land committees and emergency grain distribution.', 'Peasant and urban demands receive tangible answers.', 'Uncoordinated seizures and requisitions may reduce production.', 'Immediate legitimacy competes with administrative control.'),
        O('elections', 'Elections first', 'Protect civil liberties and schedule the constituent assembly before structural decrees.', 'A nationally elected body gains authority to settle major questions.', 'Delay leaves war, land, and hunger unresolved.', 'Procedure builds legitimacy only if people can survive the wait.')
      ])
    ],
    reflectionPrompt: 'Explain how one external and two internal factors caused the Russian imperial collapse. Compare Russia’s collapse with the fall of the Ottoman or Qing Empire.',
    sources: [
      { label: 'Encyclopaedia Britannica — Russian Revolution', url: 'https://www.britannica.com/event/Russian-Revolution' },
      { label: 'Library of Congress — Russian Revolution collections', url: 'https://www.loc.gov/collections/russian-revolutionary-posters/' },
      { label: 'Marxists Internet Archive — Order No. 1 of the Petrograd Soviet', url: 'https://www.marxists.org/history/ussr/revolution/1917/march/01.htm' }
    ]
  },
  {
    id: '7.2', unit: '7', topicTitle: 'Causes of World War I', file: 'the-july-crisis-telegram.html',
    title: 'The *July Crisis Telegram*', location: 'European chancelleries', date: '23–30 July 1914',
    lessonUrl: '../../unit-7/lesson-7-2-causes-wwi.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain the causes and consequences of World War I.', skill: 'Causation and argumentation', keyConcepts: ['KC-6.2.IV.A', 'Militarism, alliances, imperialism, nationalism', 'July Crisis escalation'] },
    premise: [
      'Austria-Hungary has delivered an ultimatum to Serbia after Archduke Franz Ferdinand’s assassination. Russia considers support for Serbia; Germany supports Austria-Hungary; France is tied to Russia; Britain has commitments and interests but no automatic obligation to enter every continental war.',
      'Mobilization plans are rigid and public credibility matters. Each government fears that delay will strengthen its rival, yet each decision narrows the next government’s room to compromise. Imperial rivalry, Balkan nationalism, and military planning make one assassination dangerous rather than sufficient by itself.',
      'You are a multinational crisis group drafting the final telegrams before mobilization becomes war.'
    ],
    centralQuestion: 'How should European governments respond to the July Crisis when alliance credibility and mobilization plans make restraint look dangerous but escalation could produce general war?',
    roles: [
      R('vienna', 'Austro-Hungarian Foreign Minister', 'You seek a decisive response to Serbian nationalism and imperial weakness.', 'You can set demands and military action, but depend on German backing and a multiethnic empire’s army.', 'Punish the networks threatening the monarchy without inviting Russian war.', 'Another compromise will advertise imperial decline.', 'Regional nationalism becomes global when empires use force to preserve prestige.', 'Demand verifiable Serbian concessions with a short deadline.', 'You may treat Serbia as fully responsible for actions the government did not directly command.'),
      R('berlin', 'German Chancellor', 'You decide how firmly to support Austria-Hungary while facing Russia and France.', 'Germany can deter rivals and mobilize quickly, but its war plan risks invading neutral Belgium.', 'Preserve the alliance and avoid strategic encirclement.', 'A delayed decision may leave Germany fighting stronger enemies later.', 'Security dilemmas make defensive planning appear offensive to others.', 'Back Vienna but press for mediation after Serbia replies.', 'You may believe escalation can be controlled once mobilization begins.'),
      R('petersburg', 'Russian Foreign Minister', 'You weigh Serbian support, Slavic prestige, and fear of Austro-German expansion.', 'Russia can mobilize vast forces, but transport and command are slow and mobilization alarms Germany.', 'Prevent Austria-Hungary from dominating the Balkans.', 'Backing down damages influence; mobilizing may trigger Germany’s timetable.', 'Nationalism and alliance status convert a regional dispute into a great-power test.', 'Use partial mobilization and demand an international conference.', 'You may assume rivals will distinguish partial preparation from an attack.'),
      R('london', 'British Foreign Secretary', 'You can propose mediation and clarify Britain’s response to a continental war.', 'British finance and naval power matter, but cabinet and public opinion are divided.', 'Deter aggression without giving any ally a blank check.', 'Ambiguity may encourage Germany while commitment may accelerate war.', 'Diplomatic signals shape calculations under uncertainty.', 'State clearly that Belgian neutrality and a general war will bring British action.', 'You may overestimate the power of one warning to override existing war plans.')
    ],
    evidence: [
      E('assassination', 'Sarajevo Assassination', 'A Bosnian Serb nationalist killed Franz Ferdinand and his wife on 28 June 1914.', 'Identifies the spark without mistaking it for the full cause.'),
      E('ultimatum', 'Austrian Ultimatum', 'Austria-Hungary demanded sweeping Serbian compliance under a short deadline.', 'Shows a deliberate choice to risk escalation.'),
      E('blankcheck', 'German “Blank Check”', 'Germany assured Austria-Hungary of support before the ultimatum.', 'Encouraged a harder Austrian policy.'),
      E('alliances', 'Alliance Commitments', 'The Triple Alliance and Triple Entente created expectations of support without making every decision automatic.', 'Prevents alliances from being treated as mechanical causes.'),
      E('mobilization', 'Mobilization Timetables', 'Military plans rewarded early action and made partial mobilization difficult to separate from war preparation.', 'Explains the mechanism of escalation.'),
      E('balkans', 'Balkan Nationalism', 'Serbian ambitions and South Slav nationalism challenged Habsburg control in the Balkans.', 'Adds territorial and nationalist conflict.'),
      E('imperial', 'Imperial Competition', 'Earlier crises in Morocco and the Balkans had deepened mistrust among the powers.', 'Shows long-term context beyond July.'),
      E('belgium', 'Belgian Neutrality', 'Germany’s western war plan required movement through neutral Belgium, increasing the likelihood of British entry.', 'Connects military planning to expansion of the war.')
    ],
    decisions: [
      D('serbia', 'Answer the Serbian reply', 'How should Austria-Hungary respond to Serbia’s partial acceptance?', [
        O('accept', 'Accept with international verification', 'Treat the reply as a basis for inspectors and mediation.', 'The monarchy gains concessions without immediate war.', 'Nationalists and military leaders call the result humiliating.', 'Compromise protects peace at a prestige cost.'),
        O('limited', 'Occupy limited border objectives', 'Use a brief military action while leaving room for negotiation.', 'Vienna demonstrates resolve and limits initial scope.', 'Russia may mobilize and “limited” war may not stay limited.', 'Coercive bargaining sacrifices control once troops move.'),
        O('war', 'Declare war on Serbia', 'Reject the reply as inadequate and launch the prepared campaign.', 'Austria-Hungary attempts a decisive solution.', 'Alliance and mobilization dynamics risk continental war.', 'Prestige and security are pursued through maximal escalation.')
      ]),
      D('mobilize', 'Set mobilization policy', 'How should Russia and Germany treat military preparation?', [
        O('freeze', 'Mutual 48-hour freeze', 'Pause new mobilization while Britain hosts an emergency conference.', 'Diplomats gain time and armies avoid irreversible steps.', 'Each state fears the other will gain a hidden advantage.', 'Trust is required precisely when mistrust is highest.'),
        O('partial', 'Use partial mobilization', 'Prepare forces only against Austria-Hungary and keep Germany informed.', 'Russia signals support while trying to limit the threat.', 'Rail and command plans may not support a clean partial option.', 'A diplomatic signal can look like operational preparation.'),
        O('general', 'Order general mobilization', 'Prepare for the worst before rivals complete their plans.', 'Military readiness and alliance credibility increase.', 'Rivals interpret the move as war and activate their own plans.', 'Defensive preparation produces the feared offensive spiral.')
      ]),
      D('britain', 'Clarify Britain’s position', 'What message should London send?', [
        O('neutral', 'Remain publicly uncommitted', 'Preserve mediation and cabinet unity.', 'Britain can talk to all parties and avoid an automatic war.', 'Germany may assume Britain will stay out.', 'Diplomatic flexibility creates deterrence ambiguity.'),
        O('conditional', 'Issue a conditional warning', 'State that violation of Belgian neutrality or attack on France risks British entry.', 'The warning may deter the western war plan.', 'It ties policy to events Britain may not control.', 'Clarity improves deterrence while narrowing future choice.'),
        O('entente', 'Promise France and Russia support', 'Make the Entente militarily credible before war begins.', 'Germany may reconsider a two-front conflict.', 'The promise hardens blocs and reduces incentives to compromise.', 'Deterrence and escalation arise from the same commitment.')
      ])
    ],
    reflectionPrompt: 'Rank the four major causes of World War I—alliances, militarism, imperialism, and nationalism—and explain how the July Crisis connected your top two causes.',
    sources: [
      { label: 'International Encyclopedia of the First World War — July Crisis', url: 'https://encyclopedia.1914-1918-online.net/article/july_crisis_1914' },
      { label: 'Encyclopaedia Britannica — World War I', url: 'https://www.britannica.com/event/World-War-I' },
      { label: 'UK National Archives — The road to war', url: 'https://www.nationalarchives.gov.uk/education/resources/great-war-1914/' }
    ]
  },
  {
    id: '7.3', unit: '7', topicTitle: 'Conducting World War I', file: 'the-ministry-of-information.html',
    title: 'The *Ministry of Information*', location: 'London propaganda board', date: '1917',
    lessonUrl: '../../unit-7/lesson-7-3-conducting-wwi.html',
    alignment: { theme: 'Governance (GOV) and Culture and Developments (CDI)', objective: 'Explain how governments mobilized populations and resources to conduct World War I.', skill: 'Causation and sourcing', keyConcepts: ['KC-6.2.IV.B–C', 'Total war and mass mobilization', 'Propaganda and military technology'] },
    premise: [
      'After years of trench warfare, casualties and shortages are eroding morale. Britain needs soldiers, loans, food conservation, industrial labor, and support across its empire. Newspapers and film can mobilize the public, but censorship and atrocity claims can damage trust when they are false or incomplete.',
      'The board receives front-line photographs, casualty figures, recruitment targets, and requests from colonial offices. It must decide what citizens and colonial subjects see and how openly propaganda acknowledges sacrifice.',
      'Your campaign will reveal how total war draws civilians, media, industry, and empire into military conduct.'
    ],
    centralQuestion: 'How should a wartime information ministry mobilize a diverse population without destroying public trust through censorship, manipulation, or unequal appeals to sacrifice?',
    roles: [
      R('director', 'Information Ministry Director', 'You coordinate posters, press guidance, film, and official statements.', 'You control access and messaging but cannot erase lived experience or soldiers’ letters.', 'Sustain recruitment, production, and public confidence.', 'Visible contradiction between propaganda and reality may collapse trust.', 'Total war depends on information management as much as battlefield command.', 'Use truthful selective messaging tied to specific public actions.', 'You may define public confidence as agreement rather than informed consent.'),
      R('correspondent', 'Accredited War Correspondent', 'You report the front under censorship rules and know what soldiers experience.', 'You can shape narratives, but access and publication depend on military approval.', 'Tell enough truth to make sacrifice meaningful and policy accountable.', 'Unrestricted detail may aid the enemy or deepen despair.', 'Sources must be evaluated for purpose, audience, and constraint.', 'Publish verified conditions with delayed operational details.', 'You may underestimate the cumulative effect of bad news during crisis.'),
      R('union', 'Munitions Worker and Union Delegate', 'You represent workers facing long hours, danger, inflation, and restrictions on strikes.', 'Industrial labor can slow production, but wartime law limits bargaining.', 'Connect patriotic service to wages, safety, and recognition.', 'Posters may glorify sacrifice while employers and government shift costs onto labor.', 'Home-front mobilization is a negotiated social relationship.', 'Support production appeals only with visible worker protections.', 'You may treat every labor compromise as propaganda rather than a real concession.'),
      R('colonial', 'Colonial Troops Liaison', 'You represent soldiers and laborers recruited from India, Africa, and the Caribbean.', 'Imperial manpower is essential, but colonial subjects lack equal political rights.', 'Demand recognition, fair treatment, and credible postwar commitments.', 'The empire may use loyalty imagery without changing colonial rule.', 'Wartime mobilization intensifies nationalism and exposes imperial contradictions.', 'Include colonial service and concrete commitments in the campaign.', 'You may expect wartime promises to overcome entrenched imperial interests.')
    ],
    evidence: [
      E('trench', 'Trench Warfare', 'Machine guns, artillery, barbed wire, and trenches produced prolonged stalemate and mass casualties.', 'Explains why morale and replacement became strategic resources.'),
      E('posters', 'Recruitment Posters', 'Governments used personal appeals, gender expectations, and national symbols to encourage enlistment.', 'Shows media converting identity into action.'),
      E('censorship', 'Press Censorship', 'States restricted operational information and influenced reporting from the front.', 'Creates the trust-versus-security dilemma.'),
      E('film', 'Wartime Film', 'Official films brought selected battlefield images to mass audiences.', 'Shows new media expanding state reach.'),
      E('women', 'Women’s War Work', 'Women entered munitions, transport, agriculture, and nursing in large numbers.', 'Connects total war to changing gender roles.'),
      E('colonies', 'Colonial Mobilization', 'European empires recruited millions of colonial soldiers, laborers, and resources.', 'Makes the war global and reveals unequal citizenship.'),
      E('rationing', 'Rationing and Bonds', 'Governments regulated consumption and borrowed from citizens to sustain the war economy.', 'Shows civilian households becoming part of strategy.'),
      E('letters', 'Soldiers’ Letters', 'Private correspondence carried front-line experience around official narratives despite censorship.', 'Limits the ministry’s ability to control information completely.')
    ],
    decisions: [
      D('truth', 'Set the truth standard', 'What should the ministry release about casualties and conditions?', [
        O('full', 'Publish verified totals and conditions', 'Release accurate national figures and contextualized front reports.', 'Citizens can judge sacrifice with credible information.', 'Morale may fall and enemies gain insight.', 'Trust is prioritized over short-term message control.'),
        O('delay', 'Delay operational detail', 'Publish verified information after a fixed security delay.', 'The public receives truth without immediate military exposure.', 'Delay can become indefinite and casualties feel concealed.', 'Security and accountability depend on enforceable limits.'),
        O('optimistic', 'Release only morale-supporting news', 'Suppress setbacks and emphasize heroism, progress, and enemy weakness.', 'Recruitment and production may improve briefly.', 'Contradictory experience can destroy long-term trust.', 'Mobilization gains speed by borrowing credibility from the future.')
      ]),
      D('campaign', 'Choose the central appeal', 'What should the public campaign emphasize?', [
        O('duty', 'National duty and defense', 'Use shared symbols, family protection, and national survival.', 'A broad message can unify different classes.', 'Dissent and minorities may be labeled disloyal.', 'Unity is created by narrowing acceptable identity.'),
        O('contract', 'A social contract of sacrifice', 'Tie service to fair wages, veterans’ care, ration equity, and postwar reform.', 'Mobilization gains material legitimacy.', 'Promises create obligations governments may not fulfill.', 'Consent is strengthened by expanding the state’s future duties.'),
        O('empire', 'Imperial unity', 'Feature colonial troops and resources as partners in a common cause.', 'The campaign reflects the war’s global manpower.', 'Partnership imagery masks unequal rule and may intensify anticolonial demands.', 'Recognition mobilizes empire while undermining imperial hierarchy.')
      ]),
      D('dissent', 'Handle dissent and strikes', 'How should the ministry treat critics?', [
        O('suppress', 'Suppress disruptive speech', 'Ban material and actions judged harmful to recruitment or production.', 'Officials gain short-term control over the home front.', 'Legitimate grievance moves underground and coercion expands.', 'Total war erodes civil liberty in the name of survival.'),
        O('debate', 'Protect debate within security rules', 'Permit criticism that does not reveal operations or organize violence.', 'Citizens retain voice and false rumors can be challenged publicly.', 'Officials cannot fully control morale or industrial conflict.', 'Open debate treats trust as a strategic resource.'),
        O('bargain', 'Negotiate with organized groups', 'Create labor and colonial advisory councils tied to production commitments.', 'Grievances become actionable and mobilization more inclusive.', 'Councils may slow policy and expose unequal power.', 'Participation increases capacity by sharing authority.')
      ])
    ],
    reflectionPrompt: 'Explain how propaganda, censorship, colonial manpower, and industrial labor made World War I a total war. Source one campaign choice by purpose, audience, and limitation.',
    sources: [
      { label: 'Imperial War Museums — How propaganda was used in World War I', url: 'https://www.iwm.org.uk/history/how-was-propaganda-used-in-world-war-one' },
      { label: 'British Library — World War One propaganda', url: 'https://www.bl.uk/world-war-one/articles/propaganda-as-a-weapon' },
      { label: 'Library of Congress — World War I posters', url: 'https://www.loc.gov/pictures/collection/wwipos/' }
    ]
  },
  {
    id: '7.4', unit: '7', topicTitle: 'Economy in the Interwar Period', file: 'the-oil-expropriation-order.html',
    title: 'The *Oil Expropriation Order*', location: 'Presidential council, Mexico City', date: '18 March 1938',
    lessonUrl: '../../unit-7/lesson-7-4-interwar-economy.html',
    alignment: { theme: 'Economic Systems (ECN) and Governance (GOV)', objective: 'Explain how governments responded to economic crisis and took a greater role in economic life during the interwar period.', skill: 'Comparison and causation', keyConcepts: ['KC-6.2.III', 'State intervention in interwar economies', 'Mexican oil nationalization'] },
    premise: [
      'Foreign-owned oil companies have rejected a labor ruling requiring higher wages and improved conditions. President Lázaro Cárdenas is considering expropriation under Mexico’s constitutional claim to subsoil resources and the revolutionary promise of national sovereignty.',
      'Nationalization could fund development and strengthen labor, but Mexico must compensate owners, find technical expertise, sell oil abroad, and withstand diplomatic or commercial retaliation. The decision is neither a fascist command economy nor a Soviet collectivization program; it is a popular-nationalist state intervention rooted in the Mexican Revolution.',
      'You must recommend ownership, compensation, labor governance, and international strategy hours before the announcement.'
    ],
    centralQuestion: 'How should Mexico nationalize oil to strengthen sovereignty and labor rights without isolating the economy or replacing foreign corporate control with unaccountable state control?',
    roles: [
      R('advisor', 'Cárdenas Economic Adviser', 'You design the decree, compensation, and new national oil administration.', 'The president has constitutional authority and public support, but Mexico needs capital, expertise, and buyers.', 'Turn resource sovereignty into durable development.', 'Retaliation or mismanagement could make nationalization symbolic but economically damaging.', 'Interwar governments used state power in distinct ideological and national contexts.', 'Expropriate with compensation and a public corporation under audit.', 'You may assume administrative capacity will appear once ownership changes.'),
      R('union', 'Oil Workers’ Union Leader', 'You represent workers whose wage and contract dispute triggered the crisis.', 'Workers can strike and keep facilities operating, but technical and managerial gaps remain.', 'Secure wages, safety, and a role in the industry’s governance.', 'A national company may demand sacrifice while reproducing hierarchy.', 'Economic nationalism is credible only if workers share its benefits and power.', 'Support expropriation with union representation and binding labor standards.', 'You may underestimate the financial discipline needed to maintain production.'),
      R('oilman', 'Foreign Oil Company Executive', 'You defend investments, contracts, and technical operations built by foreign firms.', 'Companies control capital, expertise, and marketing networks, but Mexican law and public opinion have turned against them.', 'Protect property and avoid a precedent for uncompensated seizure.', 'A boycott or confrontation may destroy long-term access to Mexican resources.', 'Private investment can develop resources while creating external control.', 'Accept a negotiated joint venture with compensation and stable contracts.', 'You may call legal concessions permanent rights regardless of revolutionary constitutional change.'),
      R('diplomat', 'United States Diplomatic Envoy', 'You balance company claims, hemispheric stability, and the Good Neighbor policy.', 'Washington can exert financial pressure but wants cooperation as war approaches.', 'Prevent a rupture while protecting lawful compensation.', 'Heavy-handed intervention could revive anti-American nationalism and push Mexico toward rival buyers.', 'International economic power operates through markets, credit, and diplomacy.', 'Recognize expropriation if compensation negotiations remain credible.', 'You may define stability around U.S. strategic interests more than Mexican sovereignty.')
    ],
    evidence: [
      E('constitution', 'Constitution of 1917', 'Mexico’s constitution asserted national ownership of subsoil resources and expanded labor rights.', 'Provides the legal and revolutionary foundation.'),
      E('labor', 'Labor Dispute', 'Oil workers won a wage ruling that foreign firms resisted despite the Mexican Supreme Court decision.', 'Explains the immediate trigger.'),
      E('foreign', 'Foreign Ownership', 'British and American firms controlled much of oil production, capital, and export marketing.', 'Defines the sovereignty problem.'),
      E('decree', '18 March Decree', 'Cárdenas expropriated company assets and presented the action as defense of law and national dignity.', 'Shows state intervention through popular nationalism.'),
      E('compensation', 'Compensation Obligation', 'Mexico accepted a duty to compensate owners while disputing valuation and timing.', 'Prevents treating nationalization as costless seizure.'),
      E('boycott', 'Commercial Retaliation', 'Companies and foreign interests could restrict equipment, credit, and markets.', 'Makes international dependence part of the decision.'),
      E('pemex', 'National Oil Company', 'A state enterprise required Mexican technical training, administration, and long-term investment.', 'Shows ownership and capacity are different questions.'),
      E('support', 'Popular Support', 'Workers and citizens raised funds and goods to support compensation and nationalization.', 'Shows legitimacy as an economic and political resource.')
    ],
    decisions: [
      D('ownership', 'Choose the ownership model', 'What institution should replace the foreign companies?', [
        O('state', 'Create a state oil company', 'Place production, refining, and marketing under a national public enterprise.', 'Mexico gains strategic control and can direct revenue toward development.', 'Political appointments and weak capacity may reduce efficiency.', 'Sovereignty expands alongside bureaucratic risk.'),
        O('joint', 'Create majority-Mexican joint ventures', 'Keep technical partners under national majority ownership and law.', 'Expertise and market access remain available.', 'Foreign firms may retain leverage over technology and contracts.', 'Capacity is gained by accepting limited external dependence.'),
        O('cooperative', 'Use worker-state management', 'Give the union and government shared operating authority.', 'Labor legitimacy and practical knowledge shape the enterprise.', 'Conflicts over wages, investment, and political loyalty may paralyze decisions.', 'Democratic participation complicates centralized planning.')
      ]),
      D('payment', 'Set compensation', 'How should Mexico compensate former owners?', [
        O('bonds', 'Long-term government bonds', 'Pay verified asset value over time from oil revenue.', 'Mexico preserves immediate cash and acknowledges legal obligation.', 'Creditors may reject valuation and bonds may strain future budgets.', 'Sovereignty is financed through long-term debt.'),
        O('cash', 'Rapid negotiated payment', 'Use reserves and foreign borrowing for a quicker settlement.', 'Diplomatic pressure and boycotts may ease.', 'Mexico assumes costly debt and reduces development funds.', 'External access is purchased by limiting domestic investment.'),
        O('profits', 'Revenue-sharing settlement', 'Pay compensation as a fixed share of future exports.', 'Payment tracks actual performance and avoids immediate borrowing.', 'Former owners retain a claim on national resources for years.', 'Financial independence is delayed to gain flexibility.')
      ]),
      D('governance', 'Make nationalization accountable', 'How should the new enterprise be governed?', [
        O('presidential', 'Strong presidential control', 'Let the executive appoint managers and set national priorities.', 'Coordination is fast and policy aligns with the reform program.', 'Future presidents may use the company for patronage or secrecy.', 'Decisive state capacity weakens institutional checks.'),
        O('audit', 'Independent public board', 'Require professional managers, published accounts, labor seats, and legislative audits.', 'Public ownership gains transparency and technical standards.', 'Multiple veto points slow urgent decisions.', 'Accountability trades speed for durable legitimacy.'),
        O('regional', 'Share revenue with producing regions', 'Guarantee local infrastructure, environmental safeguards, and municipal funds.', 'Communities see material benefits and cooperate with production.', 'National planners lose revenue and regional inequality may persist.', 'Resource nationalism becomes credible through local distribution.')
      ])
    ],
    reflectionPrompt: 'Compare Mexico’s oil nationalization with one other interwar government response—the New Deal, fascist corporatism, or Soviet planning. Explain one shared increase in state power and one ideological difference.',
    sources: [
      { label: 'U.S. Office of the Historian — Mexican oil expropriation', url: 'https://history.state.gov/milestones/1937-1945/mexican-oil' },
      { label: 'Encyclopaedia Britannica — Lázaro Cárdenas', url: 'https://www.britannica.com/biography/Lazaro-Cardenas' },
      { label: 'PEMEX — Historical overview', url: 'https://www.pemex.com/en/about-pemex/history/Paginas/default.aspx' }
    ]
  },
  {
    id: '7.5', unit: '7', topicTitle: 'Unresolved Tensions After World War I', file: 'the-mandate-map.html',
    title: 'The *Mandate Map*', location: 'Paris Peace Conference', date: '1919',
    lessonUrl: '../../unit-7/lesson-7-5-unresolved-tensions.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain how territorial gains and continued imperial control after World War I produced unresolved tensions and resistance.', skill: 'Continuity and change over time', keyConcepts: ['KC-6.2.II.C', 'Mandate system and imperial continuity', 'Self-determination and resistance'] },
    premise: [
      'The victorious powers are assigning former German and Ottoman territories to League of Nations mandates. Officials call the system international supervision toward self-government; delegates from colonized societies see imperial control continuing under new language.',
      'Arab wartime expectations, Zionist commitments, Japanese territorial gains, and anti-colonial petitions do not fit one principle of self-determination. The people whose lands are being mapped hold little formal authority in the room.',
      'You must define the mandate categories, representation, borders, and review process while distinguishing legal change from imperial continuity.'
    ],
    centralQuestion: 'How should the peace conference apply self-determination when victorious empires intend to preserve strategic control over former German and Ottoman territories?',
    roles: [
      R('british', 'British Imperial Delegate', 'You defend strategic routes, wartime commitments, and Britain’s claim to administrative experience.', 'Britain has military leverage, but the League and anti-colonial opinion demand a reformist justification.', 'Secure routes and influence without appearing to annex territory.', 'Open self-rule may threaten imperial communications and rival commitments.', 'Mandates can reorganize empire without ending it.', 'Accept supervised administration with gradual institutions and strategic safeguards.', 'You may call imperial interests tutelage and treat local sovereignty as premature.'),
      R('arab', 'Arab Independence Delegate', 'You represent wartime allies who expected independent Arab government after Ottoman rule.', 'You have petitions, local networks, and wartime service, but little coercive power at Paris.', 'Win recognized sovereignty and prevent externally drawn rule.', 'European mandates may turn promises of liberation into partition.', 'National self-determination is unequal when victors decide who is “ready.”', 'Demand elected assemblies, fixed independence dates, and border consultation.', 'You may treat diverse local communities as one unified national constituency.'),
      R('japanese', 'Japanese Diplomatic Envoy', 'You seek recognition of wartime gains and equal status among great powers.', 'Japan is a victorious power with military control in parts of the Pacific and China, but Western powers can block proposals.', 'Secure strategic islands and racial equality recognition.', 'Selective self-determination may expose racial hierarchy inside the new order.', 'Imperialism after 1918 was maintained by Western and Japanese states alike.', 'Accept League mandates only under equal rules for all powers.', 'You may invoke equality among empires while denying it to subject peoples.'),
      R('petitioner', 'Colonial Petition Delegate', 'You present demands from people governed without representation.', 'Petitions and publicity can embarrass the conference, but the victors control recognition and enforcement.', 'Make consent, rights, and a route to independence binding.', 'The League may record your words while leaving power unchanged.', 'International institutions create new language and forums but not automatically decolonization.', 'Require elected councils and direct petition rights to the League.', 'You may overestimate how much moral argument can shift strategic bargaining.')
    ],
    evidence: [
      E('article22', 'League Covenant Article 22', 'The covenant described mandates as a “sacred trust” for peoples allegedly not yet able to govern themselves.', 'Shows paternal language and international supervision.'),
      E('classes', 'Mandate Categories', 'A, B, and C mandates implied different paths and levels of control.', 'Shows hierarchy built into the legal system.'),
      E('arab', 'Arab Wartime Expectations', 'Arab leaders expected independence after cooperation against Ottoman rule.', 'Creates a conflict between wartime promises and postwar settlement.'),
      E('balfour', 'Balfour Declaration', 'Britain supported a Jewish national home in Palestine while also making other commitments in the region.', 'Shows overlapping promises and future tension.'),
      E('japan', 'Japanese Expansion', 'Japan received former German islands north of the equator and expanded influence in China.', 'Prevents imperialism from being treated as exclusively Western.'),
      E('petitions', 'Anti-Colonial Petitions', 'Delegates from colonized peoples invoked self-determination and wartime service at Paris.', 'Shows political agency despite exclusion.'),
      E('borders', 'Externally Drawn Borders', 'Mandate boundaries often served strategic bargaining more than local political consultation.', 'Connects mapping to future conflict.'),
      E('continuity', 'Imperial Administration', 'Mandatory powers controlled defense, finance, and foreign affairs in many territories.', 'Shows continuity beneath changed legal language.')
    ],
    decisions: [
      D('status', 'Define mandate status', 'What legal status should former territories receive?', [
        O('trust', 'Temporary international trust', 'Recognize sovereignty in principle and give the League enforceable supervision.', 'The system creates a formal route away from annexation.', 'Great powers still administer territory and control the League.', 'Legal innovation can legitimize continued domination.'),
        O('independence', 'Conditional immediate independence', 'Recognize governments now with technical assistance and treaty safeguards.', 'Self-determination becomes concrete rather than deferred.', 'New states may face weak institutions and foreign pressure.', 'Sovereignty arrives before capacity is evenly distributed.'),
        O('administration', 'Long-term mandatory rule', 'Let experienced powers govern until security and administration meet League standards.', 'Officials promise order and investment.', 'The ruling power defines readiness and gains strategic control.', 'Stability becomes an open-ended argument for empire.')
      ]),
      D('voice', 'Create local representation', 'How should inhabitants influence governance?', [
        O('advisory', 'Appointed advisory councils', 'Let mandatory officials select local leaders to advise policy.', 'Administration gains knowledge without losing control.', 'Appointed elites may not represent the population.', 'Consultation substitutes for consent.'),
        O('elected', 'Elected territorial assemblies', 'Require broad elections with budget and legislative authority.', 'Local political capacity and accountability develop.', 'Mandatory powers may manipulate franchise rules or veto decisions.', 'Representation expands within an unequal sovereignty structure.'),
        O('plebiscite', 'Hold boundary plebiscites', 'Let residents vote on borders, political association, and mandate status.', 'Territorial choices gain direct legitimacy.', 'Mixed populations and displacement make one vote difficult and divisive.', 'Popular sovereignty can clarify preference while hardening identity conflict.')
      ]),
      D('exit', 'Set the path to independence', 'What review mechanism should the League adopt?', [
        O('date', 'Fixed independence dates', 'Set public deadlines with measurable administrative steps.', 'Mandatory powers cannot delay indefinitely.', 'Rigid dates may ignore changing conditions and provoke rushed institutions.', 'Time limits discipline empire while compressing state-building.'),
        O('benchmarks', 'Independent benchmarks', 'Use League commissions, petitions, rights reports, and fiscal standards.', 'Review becomes evidence-based and publicly contestable.', 'The League remains dominated by imperial powers.', 'Oversight gains detail without escaping unequal governance.'),
        O('power', 'Leave timing to mandatory powers', 'Let each administrator recommend independence when conditions permit.', 'Policy can adapt to local circumstances.', 'The power benefiting from control decides when control ends.', 'Flexibility becomes a mechanism of imperial continuity.')
      ])
    ],
    reflectionPrompt: 'Explain one change and two continuities in imperial control after World War I. Use the mandate system and one anti-colonial response as evidence.',
    sources: [
      { label: 'Avalon Project — Covenant of the League of Nations, Article 22', url: 'https://avalon.law.yale.edu/20th_century/leagcov.asp' },
      { label: 'U.S. Office of the Historian — Paris Peace Conference', url: 'https://history.state.gov/milestones/1914-1920/paris-peace' },
      { label: 'Encyclopaedia Britannica — Mandate', url: 'https://www.britannica.com/topic/mandate-League-of-Nations' }
    ]
  },
  {
    id: '7.6', unit: '7', topicTitle: 'Causes of World War II', file: 'the-munich-table.html',
    title: 'The *Munich Table*', location: 'Munich Conference', date: '29 September 1938',
    lessonUrl: '../../unit-7/lesson-7-6-causes-wwii.html',
    alignment: { theme: 'Governance (GOV)', objective: 'Explain the causes and consequences of World War II.', skill: 'Causation and argumentation', keyConcepts: ['KC-6.2.IV.D', 'Fascism, appeasement, and imperial expansion', 'Failed collective security'] },
    premise: [
      'Hitler demands the Sudetenland, a fortified border region of Czechoslovakia with a large German-speaking population. Britain and France fear another total war; Czechoslovakia is allied to France and has not been given an equal seat at the negotiating table.',
      'The crisis follows the Versailles settlement, the Great Depression, fascist expansion, Japanese aggression, and the League’s failure to stop earlier conquests. Concession may buy time or teach aggressors that threats work.',
      'You must decide whether to accept territorial transfer, create a supervised settlement, or risk war in 1938.'
    ],
    centralQuestion: 'Should Britain and France concede the Sudetenland to avoid immediate war when doing so sacrifices Czechoslovak sovereignty and may strengthen further fascist expansion?',
    roles: [
      R('britain', 'British Prime Minister', 'You seek a settlement after memories of World War I and doubts about military readiness.', 'Britain has diplomatic weight and growing air power but limited public appetite for war.', 'Avoid catastrophic conflict while protecting the European balance.', 'A failed threat could start war before rearmament is complete.', 'Appeasement can be a strategy of time, fear, and miscalculation rather than simple cowardice.', 'Accept transfer only with international guarantees and supervision.', 'You may value British time more than Czech security.'),
      R('france', 'French Cabinet Minister', 'You weigh the Czech alliance against domestic division and dependence on British cooperation.', 'France has a large army and treaty obligations, but defensive strategy and political instability constrain action.', 'Preserve alliances without fighting Germany alone.', 'Abandoning Czechoslovakia destroys French credibility; war risks another national catastrophe.', 'Alliance systems fail when commitments are not politically credible.', 'Demand a joint British-French guarantee before any concession.', 'You may hide indecision behind the need for allied unity.'),
      R('czech', 'Czechoslovak Delegate', 'You defend a democratic state, fortified border, industry, and multiethnic population.', 'Your army and defenses are significant, but the major powers are bargaining without you.', 'Preserve sovereignty and prevent strategic dismemberment.', 'Territorial loss exposes the state and abandons citizens to Nazi rule.', 'Self-determination claims can be weaponized by expansionist states.', 'Reject transfer without a monitored vote and enforceable defense guarantee.', 'You may assume allies will fight despite their visible reluctance.'),
      R('german', 'German Foreign Policy Envoy', 'You present the demand as self-determination for Sudeten Germans while supporting Hitler’s expansion.', 'Germany can threaten force and exploit Western fear, but a coalition war remains risky.', 'Secure territory, defenses, and industrial advantage without immediate general war.', 'A compromise that stops expansion weakens the regime’s momentum.', 'Fascist regimes combined nationalist grievance with strategic conquest.', 'Demand immediate transfer and no outside military guarantee.', 'You conceal aims extending beyond ethnic self-determination.')
    ],
    evidence: [
      E('versailles', 'Versailles Grievances', 'Nazi propaganda exploited anger over the postwar settlement and territorial losses.', 'Provides background without excusing expansion.'),
      E('depression', 'Great Depression', 'Economic collapse weakened democracies and strengthened extremist parties and state intervention.', 'Shows a structural cause of fascist power.'),
      E('rhineland', 'Remilitarized Rhineland', 'Germany remilitarized the Rhineland in 1936 without effective military opposition.', 'Shows earlier risks rewarded.'),
      E('anschluss', 'Anschluss', 'Germany annexed Austria in March 1938, expanding power before Munich.', 'Places the demand in a pattern of expansion.'),
      E('forts', 'Czech Fortifications', 'The Sudeten border contained major defenses and industrial assets vital to Czechoslovakia.', 'Shows why the transfer was strategically decisive.'),
      E('excluded', 'Czechoslovakia Excluded', 'Czech representatives did not negotiate as equal decision-makers at Munich.', 'Reveals the sovereignty problem.'),
      E('readiness', 'Western Rearmament', 'British and French leaders questioned military readiness, especially air defense.', 'Explains why buying time seemed valuable.'),
      E('occupation', 'March 1939 Occupation', 'Germany later occupied the Czech lands beyond the Sudetenland.', 'Tests the assumption that the demand was limited.')
    ],
    decisions: [
      D('territory', 'Decide the Sudetenland', 'What settlement should the conference impose or reject?', [
        O('transfer', 'Accept rapid transfer', 'Cede the designated districts to Germany in exchange for a pledge of no further claims.', 'Immediate war may be avoided and Western rearmament continues.', 'Czechoslovakia loses defenses and the pledge may be unreliable.', 'Peace is purchased with another state’s security.'),
        O('plebiscite', 'Require supervised plebiscites', 'Use international observers, minority protections, and staged votes.', 'Self-determination receives a legal process rather than armed coercion.', 'Germany may reject delay or manipulate local intimidation.', 'Procedure creates legitimacy but cannot neutralize force alone.'),
        O('reject', 'Reject territorial coercion', 'Demand negotiation within Czech sovereignty and prepare collective defense.', 'Aggression meets a credible boundary and alliances retain meaning.', 'War may begin immediately under unfavorable conditions.', 'Deterrence requires accepting the risk it seeks to prevent.')
      ]),
      D('guarantee', 'Back the agreement', 'What enforcement should accompany any settlement?', [
        O('paper', 'Rely on mutual declarations', 'Use signed promises and continued diplomacy without automatic military terms.', 'Governments retain flexibility and avoid a new alliance trap.', 'The aggressor faces little material consequence for violation.', 'Diplomatic freedom weakens deterrence.'),
        O('military', 'Guarantee remaining Czechoslovakia', 'Promise joint British-French military action against further invasion.', 'The settlement draws an enforceable line.', 'The public and armed forces may not support the commitment.', 'Credibility requires resources and political will.'),
        O('league', 'Create international monitoring', 'Deploy neutral observers and automatic sanctions through a multilateral commission.', 'Violations become visible and coordinated response is easier.', 'Earlier League sanctions had failed against determined powers.', 'Institutions work only when states will enforce them.')
      ]),
      D('next', 'Prepare for the next crisis', 'What broader policy should follow Munich?', [
        O('rearm', 'Rearm while continuing diplomacy', 'Accelerate aircraft, radar, alliances, and civil defense while talking to Germany.', 'Britain and France gain time and bargaining capacity.', 'Further concessions may still strengthen Germany faster.', 'Time is useful only if relative readiness improves.'),
        O('collective', 'Build a broad anti-aggression coalition', 'Coordinate Britain, France, the Soviet Union, and smaller states.', 'Germany faces the risk of a multi-front response.', 'Ideological mistrust and incompatible aims may fracture the coalition.', 'Collective security requires cooperation among rivals.'),
        O('isolate', 'Limit continental commitments', 'Protect national and imperial defenses without guaranteeing Eastern Europe.', 'Governments reduce immediate exposure to distant conflicts.', 'Expansion continues until the balance becomes more dangerous.', 'Isolation delays costs while weakening potential partners.')
      ])
    ],
    reflectionPrompt: 'Explain how the failed peace settlement, Great Depression, fascist regimes, and imperial expansion combined to cause World War II. Evaluate appeasement as both a cause and a constrained policy choice.',
    sources: [
      { label: 'UK National Archives — The Munich Agreement', url: 'https://www.nationalarchives.gov.uk/education/resources/chamberlain-and-hitler/' },
      { label: 'United States Holocaust Memorial Museum — Munich Agreement', url: 'https://encyclopedia.ushmm.org/content/en/article/munich-agreement' },
      { label: 'Encyclopaedia Britannica — Munich Agreement', url: 'https://www.britannica.com/event/Munich-Agreement' }
    ]
  },
  {
    id: '7.7', unit: '7', topicTitle: 'Conducting World War II', file: 'the-war-production-board.html',
    title: 'The *War Production Board*', location: 'Washington, D.C.', date: '1942',
    lessonUrl: '../../unit-7/lesson-7-7-conducting-wwii.html',
    alignment: { theme: 'Governance (GOV), Economic Systems (ECN), and Technology and Innovation (TEC)', objective: 'Explain how governments mobilized populations and resources and how technology shaped the conduct of World War II.', skill: 'Causation and comparison', keyConcepts: ['KC-6.2.IV.E–F', 'Total war and state mobilization', 'Industrial production and civilian sacrifice'] },
    premise: [
      'After Pearl Harbor, the United States must convert civilian industry to aircraft, ships, vehicles, weapons, and supplies. The federal government can allocate materials and contracts, but production depends on private factories, organized labor, women and minority workers, rationing, and public consent.',
      'Mobilization creates jobs and expands state power while also preserving discrimination, enabling internment, limiting strikes, and redirecting household consumption. Democratic institutions are conducting total war with methods that can resemble command economies in scale even when ownership remains private.',
      'You must set quotas, labor rules, civilian rationing, and accountability for a mobilization measured in both output and rights.'
    ],
    centralQuestion: 'How should a democratic government mobilize industry and civilians for total war while controlling inflation, protecting labor, and preventing emergency power from erasing civil rights?',
    roles: [
      R('planner', 'Federal Production Planner', 'You allocate steel, rubber, fuel, machine tools, and contracts across military priorities.', 'You can set quotas and prohibit civilian products, but agencies, services, and firms compete for resources.', 'Reach decisive output rapidly without losing coordination or public trust.', 'Bottlenecks, inflation, or corruption could waste the industrial advantage.', 'Total war expands government direction even in market economies.', 'Use centralized priorities, transparent metrics, and flexible regional conversion.', 'You may reduce people and communities to production inputs.'),
      R('owner', 'Automobile Factory Executive', 'You must retool assembly lines from cars to tanks, engines, and aircraft components.', 'You control facilities and managers, but contracts, materials, and labor policy are federal.', 'Meet quotas while preserving the firm’s workforce and postwar future.', 'Cost-plus contracts may invite waste; rigid quotas may ignore technical reality.', 'Private ownership and public planning can become deeply interdependent.', 'Accept conversion with negotiated schedules and audited costs.', 'You may treat public risk as a reason to protect private profit.'),
      R('labor', 'Industrial Union Representative', 'You bargain for workers facing long hours, hazards, inflation, and no-strike pressure.', 'Labor is indispensable and organized, but wartime patriotism and law constrain strikes.', 'Win safety, fair wages, grievance procedures, and equal access to skilled jobs.', 'Workers may be asked to sacrifice rights while corporations receive guaranteed contracts.', 'Mobilization is a social bargain, not only an output target.', 'Support a no-strike pledge only with binding arbitration and wage review.', 'You may underestimate the operational cost of work stoppages during crisis.'),
      R('civilrights', 'Civil Rights and Community Advocate', 'You represent Black workers, women workers, Japanese Americans, and communities affected by emergency policy.', 'Public campaigns can expose contradiction, but security claims and discrimination limit access.', 'Make the fight against fascism credible through equal treatment at home.', 'Mobilization may widen employment while entrenching segregation and internment.', 'Total war can accelerate social change and state coercion at the same time.', 'Tie contracts to nondiscrimination and independent civil-rights review.', 'You may not fully resolve conflicts among groups with different immediate harms.')
    ],
    evidence: [
      E('conversion', 'Industrial Conversion', 'Automobile and consumer factories shifted toward aircraft, vehicles, ships, weapons, and military supplies.', 'Shows industrial capacity becoming strategic power.'),
      E('wpb', 'War Production Board', 'Federal agencies allocated materials, set priorities, and coordinated private production.', 'Demonstrates expanded state economic direction.'),
      E('ration', 'Rationing', 'Households faced controls on gasoline, rubber, sugar, meat, and other goods.', 'Connects civilians directly to total war.'),
      E('women', 'Women in War Work', 'Millions of women entered industrial and military-support roles during mobilization.', 'Shows changing gender roles under wartime demand.'),
      E('doublev', 'Double V Campaign', 'Black Americans linked victory against fascism abroad to victory against racism at home.', 'Exposes the democratic contradiction.'),
      E('internment', 'Japanese American Internment', 'The government incarcerated people of Japanese ancestry without individualized evidence of disloyalty.', 'Shows emergency power violating civil rights.'),
      E('labor', 'No-Strike Pledge', 'Major unions limited strikes while using boards and bargaining to address wages and conditions.', 'Shows labor participation and constraint.'),
      E('technology', 'Strategic Technology', 'Radar, codebreaking, aircraft, naval production, and ultimately atomic weapons changed military conduct.', 'Connects industrial mobilization to battlefield capability.')
    ],
    decisions: [
      D('production', 'Set production control', 'How should the board allocate contracts and materials?', [
        O('central', 'Central quotas and allocation', 'Set national priorities, prohibit low-priority civilian output, and direct scarce materials.', 'Resources move rapidly toward strategic needs.', 'Local knowledge and innovation may be ignored.', 'Coordination increases output through concentrated authority.'),
        O('competitive', 'Competitive contracts', 'Let firms bid on goals while the board audits cost, quality, and deadlines.', 'Competition may improve innovation and price discipline.', 'Emergency speed and unequal firm capacity limit real competition.', 'Market mechanisms survive inside heavy public direction.'),
        O('regional', 'Regional conversion boards', 'Give federal targets to mixed local boards of firms, labor, and government.', 'Local bottlenecks and workforce needs receive attention.', 'Standards vary and services compete across regions.', 'Participation improves adaptation but complicates command.')
      ]),
      D('labor', 'Write the labor compact', 'What should workers receive for wartime restraint?', [
        O('pledge', 'No-strike pledge with arbitration', 'Exchange labor peace for binding grievance procedures, safety rules, and wage review.', 'Production becomes predictable and workers retain an institutional channel.', 'Boards may favor government targets over workers.', 'Collective power is redirected into administration.'),
        O('rights', 'Preserve normal strike rights', 'Allow unions to act under existing labor law except at directly critical facilities.', 'Civil and labor rights remain meaningful during war.', 'Disruptions can delay essential production.', 'Democracy accepts operational risk to preserve freedom.'),
        O('command', 'Impose compulsory labor rules', 'Authorize wage controls, plant assignments, and penalties for disruption.', 'The state gains maximum control over labor supply.', 'Coercion undermines consent and falls unequally on vulnerable workers.', 'Total war output is purchased with reduced industrial citizenship.')
      ]),
      D('rights', 'Set the civil-rights standard', 'How should emergency policy address discrimination and security?', [
        O('contracts', 'Condition contracts on equal opportunity', 'Require nondiscrimination, transparent hiring, and enforcement for federal contractors.', 'Mobilization opens skilled jobs and aligns policy with democratic aims.', 'Firms and local officials resist implementation.', 'State purchasing power becomes an engine of social change.'),
        O('security', 'Prioritize broad security measures', 'Allow exclusion and detention policies where military authorities claim necessity.', 'Officials gain speed and reassurance after attack.', 'Collective punishment violates rights and wastes loyal citizens’ capacity.', 'Security is defined by group identity rather than evidence.'),
        O('review', 'Require individualized review', 'Use due process, evidence, and independent oversight for restrictions on liberty.', 'Security action becomes more accurate and rights remain enforceable.', 'Review takes time and officials may fear hidden risks.', 'Democratic restraint treats law as part of national defense.')
      ])
    ],
    reflectionPrompt: 'Explain how World War II mobilization expanded state power, changed labor and gender roles, and created civil-rights contradictions. Compare one democratic mobilization method with one totalitarian method.',
    sources: [
      { label: 'National Archives — Powers of Persuasion: World War II posters', url: 'https://www.archives.gov/exhibits/powers-of-persuasion' },
      { label: 'Library of Congress — World War II home front', url: 'https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/great-depression-and-world-war-ii-1929-1945/world-war-ii/' },
      { label: 'National Park Service — World War II Home Front', url: 'https://www.nps.gov/subjects/worldwarii/homefront.htm' }
    ]
  }
];

fs.mkdirSync(OUT, { recursive: true });
for (const scenario of scenarios) {
  const destination = path.join(OUT, scenario.file);
  fs.writeFileSync(destination, renderRoomPage(scenario), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, destination)}`);
}
