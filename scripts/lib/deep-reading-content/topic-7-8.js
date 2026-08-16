'use strict';

/**
 * Topic 7.8, Mass Atrocities After 1900: the deep reading.
 *
 * Why this exists. The success criteria ask for the Holocaust explained through
 * the rise of an extremist regime, for specific causes in at least two further
 * cases from the Armenian Genocide, the Holodomor, Cambodia and Rwanda, and for
 * consequences including the Genocide Convention, the International Criminal
 * Court, reconciliation in Rwanda and lasting cultural trauma.
 *
 * The organizing argument, and the volume's spine arriving at its darkest: the
 * atrocities of this century were not committed by mobs. They were committed by
 * states, using the same capacities the rest of Unit 7 describes, censuses,
 * railways, bureaucracies, ideology and mobilized populations, turned on a
 * population inside the state's own reach. That is why this topic belongs in
 * this unit and not in a separate box about human wickedness.
 *
 * Three things carried deliberately:
 *
 *   1. A shared mechanism, written once and then tested against the cases, so
 *      a student has an analytical tool rather than five sad stories.
 *   2. Contested classifications are named as contested, with the human facts
 *      stated as agreed, because that is both honest and what the exam rewards.
 *   3. The chapter is written to be read by teenagers, some of whom will have
 *      family history in it. It is direct about what happened and does not
 *      dwell gratuitously, and it gives the survivors and resisters their
 *      place rather than presenting only victims.
 */

module.exports = {
  topicKey: 't7-8',
  slug: 'topic-7-8-mass-atrocities',
  sourceFile: 'deep-reading-topic-7-8-mass-atrocities.html',
  lessonFile: 'lesson-7-8-mass-atrocities.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.8: What States Did With Their New Capacity',
  eyebrow: 'Topic 7.8 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'What States Did With Their New <em>Capacity</em>',
  deck: `The mass killings of the twentieth century were not carried out by mobs in the dark. They were carried out by governments, using censuses, identity papers, railways, radio and organized bureaucracies, against populations already inside their reach. This chapter is about the shared mechanism, the specific cases, and what the world built afterward to try to make it prosecutable.`,
  meta: ['Four sections', 'The mechanism, the cases, the Holocaust, the response', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.8 &nbsp;·&nbsp; What States Did With Their New Capacity &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `This chapter treats difficult material directly. Section 01 gives you the shared mechanism, which is the analytical tool the whole topic needs. Section 02 tests it against three cases, section 03 is the Holocaust in the detail the criteria specify, and section 04 is what was built afterward and how well it has worked.`,
    steps: [
      `<b>01 The shared mechanism:</b> the conditions that recur, and the state capacity behind them.`,
      `<b>02 Three cases:</b> Armenians, Ukraine, Cambodia and Rwanda, each with its specific cause.`,
      `<b>03 The Holocaust:</b> ideology, escalation, and why bureaucracy is part of the explanation.`,
      `<b>04 Afterward:</b> Nuremberg, the Genocide Convention, the ICC, and the record since.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'mechanism',
      num: '01',
      accent: 'gold',
      name: 'The Shared Mechanism',
      navLabel: 'The mechanism',
      dates: 'c. 1900 to now &nbsp;·&nbsp; What recurs',
      thesis: `These events happened in different decades, on three continents, under regimes with incompatible ideologies. They share a structure, and having that structure is what lets you write about a case you have not memorized.`,
      parts: [
        {
          heading: 'Five conditions that recur',
          blocks: [
            { p: `<b>1. A group is defined and made visible.</b> Before a population can be targeted it must be identifiable, and modern states are extremely good at this: censuses, identity documents recording ethnicity or religion, registration lists, property records. This is administrative work, and it usually happens years before any violence.` },
            { p: `<b>2. An ideology makes the group the explanation for a crisis.</b> Not simply prejudice, which is ancient, but a theory in which the group is the reason for defeat, hunger, humiliation or backwardness. That converts hostility into a program, because if the group is the cause then removing it is the solution.` },
            { p: `<b>3. Legal exclusion comes first.</b> Rights are removed by law in steps: from citizenship, employment, property, education, movement, marriage. Each step is a test of whether anyone objects, and each one that passes without cost makes the next cheaper.` },
            { p: `<b>4. A crisis provides cover and urgency.</b> War is the most common. It concentrates power, silences dissent, moves populations, distracts outside attention, and supplies the language of emergency and security in which extraordinary measures are justified.` },
            { p: `<b>5. The state's capacity does the work.</b> Trains, telegraphs, radio, card indexes, camps, conscripted personnel and a chain of command that divides a killing into many small administrative acts, most of which are performed by people who never see the outcome.` },
            { p: `That fifth condition is the one that makes this a Unit 7 topic. Every capacity in the list is a capacity the rest of this unit describes states developing for other purposes.` }
          ]
        },
        {
          heading: 'Why "they were monsters" is not an explanation',
          blocks: [
            { p: `The instinct is to explain atrocity by the wickedness of the people who committed it, and it is the least useful available answer for two reasons.` },
            { p: `It does not fit the evidence. The number of people required to carry out killing on this scale is large, and the documented participants overwhelmingly were not unusual before or afterward: clerks, police, railway staff, soldiers, neighbors. Explanations that survive contact with the sources emphasize ideology, obedience, careful division of tasks, group pressure, incentive, and a legal process that had already redefined the victims as outside the community.` },
            { p: `And it removes the lesson. If atrocity requires monsters, nothing is transferable and there is nothing to watch for. If it requires a definition, an ideology, a legal ratchet, a crisis and a bureaucracy, then those are five things that can be observed and, in principle, interrupted. That is the version worth teaching, and it is also the version the sources support.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that these events were unimaginable or that nobody knew. In most of these cases a great deal was known at the time, by governments, journalists and neighbors. Reports of the Armenian deportations reached the outside world during the First World War and were published; Allied governments had substantial information about the killing of Jews during the Second World War; the Rwandan genocide was reported as it happened and the United Nations force on the ground had warned of preparations beforehand. Writing that the world did not know is comforting and inaccurate. The harder and truer statement is that knowing did not produce action, and section 04 is about the institutions built to change that.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Bureaucratic capacity turned inward. <em>The mechanism is that a modern state builds registers, identity documents, railways and a chain of command in order to tax, conscript and govern, and those same instruments allow a population to be defined, located, concentrated and moved, with the work divided into small administrative steps that individually require no unusual person to perform.</em>`,
        limit: `Capacity explains scale and method rather than intention. Plenty of states had censuses and railways and did not do this, so the ideology and the political decision are doing the causal work and the capacity is what made the decision executable.`,
        comparison: `Against the <em>Spanish colonial registers</em> in Topic 4.7: there a parish record of ancestry attached legal consequence to descent for life. The instrument is recognizably the same, a state writing down who someone is so it can treat them accordingly, and what changes in the twentieth century is the speed, the reach and what the categories were used for.`
      },
      terms: [
        ['Genocide', 'Acts committed with intent to destroy, in whole or in part, a national, ethnic, racial or religious group as such, as defined in the 1948 Convention.'],
        ['Dehumanization', 'Representing a group as vermin, disease or infestation, which is a documented precursor because it removes the target from the moral community.'],
        ['Legal ratchet', 'The stepwise removal of rights by law, each step testing whether anyone objects and making the next step cheaper.'],
        ['Perpetrator studies', 'The research field examining who carried out atrocities and why, whose findings emphasize ordinary participants over unusual individuals.'],
        ['Bystander', 'The individual, institution or state that knows and does not act, a category the postwar legal framework was partly designed to address.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'cases',
      num: '02',
      accent: 'rust',
      name: 'Testing the Mechanism',
      navLabel: 'The cases',
      dates: '1915 to 1994 &nbsp;·&nbsp; Four cases, four specific causes',
      thesis: `The success criteria ask for specific causes in at least two cases. Here are four, each written so the cause is nameable, and each showing the section 01 mechanism with a different ideology plugged into the second condition.`,
      parts: [
        {
          heading: 'The Armenian Genocide, 1915',
          blocks: [
            { p: `<b>The specific cause.</b> The Ottoman empire had spent a century losing territory to nationalist movements, as Topic 7.1 describes, and the Young Turk leadership had narrowed from Ottoman pluralism toward Turkish nationalism. In <span class="num">1915</span>, at war with Russia and having suffered a catastrophic defeat in the Caucasus, that leadership treated the Christian Armenian population of eastern Anatolia as a potential fifth column aligned with the Russian enemy.` },
            { p: `<b>What happened.</b> Armenian community leaders and intellectuals were arrested in Constantinople in April <span class="num">1915</span>. Armenian men in the Ottoman army were disarmed and put into labor units. The remaining population was deported from Anatolia in forced marches toward the Syrian desert, with mass killings, starvation, exposure and assault along the routes. Estimates of Armenian deaths commonly range from around six hundred thousand to over a million, with the wide range reflecting genuine uncertainty about pre-war population and about deaths from starvation and disease during deportation. Assyrian and Greek Orthodox populations were also killed and deported in the same period.` },
            { p: `<b>The dispute.</b> Most historians of the period, and a large and growing number of governments, classify this as genocide. The Turkish state has consistently rejected that classification, characterizing the deaths as wartime casualties and intercommunal violence in a collapsing empire rather than an intentional program of destruction. Name the dispute, note where the weight of scholarly opinion sits, and note that the deaths themselves are not what is contested.` },
            { p: `<b>Why it matters for what follows.</b> The Polish-Jewish lawyer Raphael Lemkin, who coined the word <span class="kt">genocide</span> in <span class="num">1944</span> and drove the campaign for the Convention, cited the Armenian case as formative in his thinking about why international law had no name for the crime.` }
          ]
        },
        {
          heading: 'Ukraine 1932 to 1933, and Cambodia 1975 to 1979',
          blocks: [
            { p: `<b>The Holodomor.</b> Topic 7.4 covers the policy; here is the cause stated for this topic. Forced collectivization met resistance, and the Soviet state responded by intensifying grain requisitioning from regions that had not met targets, restricting peasant movement so people could not leave starving districts, and refusing to acknowledge the famine or accept relief. Millions died, with the heaviest incidence in Ukraine and severe famine also in Kazakhstan and the North Caucasus. Ukraine and many governments and scholars classify it as genocide directed at Ukrainians as a nation; others argue for a catastrophe of class policy against peasants and resisters generally. The measures, the movement restrictions and the death toll are not in dispute, and the classification is. The fact that this event appears both as economic policy and as atrocity is itself the argument about what it was.` },
            { p: `<b>Cambodia.</b> The <span class="kt">Khmer Rouge</span> took power in <span class="num">1975</span> after a civil war intensified by the spillover of the Vietnam War, including heavy American bombing of Cambodian territory. The specific cause is ideological in an unusually pure form: a program to create an agrarian communist society immediately, by abolishing cities, money, markets, schools and religion, and by eliminating anyone associated with the old order. Cities were emptied within days. People were killed or worked and starved to death in rural labor camps, with targets including the educated, urban populations, officials of the previous government, ethnic and religious minorities including Cham Muslims and Vietnamese, and eventually large numbers of party members purged as traitors. Estimates of deaths commonly run to around one and a half to two million, roughly a fifth or more of the population, and rest substantially on demographic reconstruction and on mass grave surveys. Vietnamese invasion ended the regime in <span class="num">1979</span>.` }
          ]
        },
        {
          heading: 'Rwanda, 1994',
          blocks: [
            { p: `<b>The specific cause, and it begins in the colonial period.</b> Hutu and Tutsi were social categories in pre-colonial Rwanda, with some mobility between them. German and then Belgian colonial administration hardened them into fixed racial classifications, governed indirectly through Tutsi elites on a theory of Tutsi racial superiority, and, decisively, issued identity cards recording ethnicity. That is section 01's first condition installed by a colonial state and inherited by an independent one.` },
            { p: `<b>The immediate causes.</b> Post-independence politics reversed the hierarchy, producing cycles of violence and Tutsi refugee populations in neighboring countries. By the early <span class="num">1990</span>s Rwanda faced a civil war against a rebel force based in Uganda, economic crisis driven partly by collapsing coffee prices, and pressure for power-sharing. Extremist elements within the Hutu-dominated regime prepared for mass killing: militia were organized and armed, lists were drawn up, and radio, above all a private station broadcasting incitement, dehumanized Tutsi as inyenzi, cockroaches.` },
            { p: `<b>What happened.</b> After the president's plane was shot down on 6 April <span class="num">1994</span>, organized killing began within hours. Over roughly a hundred days, an estimated eight hundred thousand or more Tutsi and moderate Hutu were murdered, much of it by neighbors using machetes, coordinated by local officials and directed in part by radio. The United Nations force present was small, its commander's warnings had not produced reinforcement, and it was reduced rather than strengthened as the killing began. The genocide ended when the rebel Rwandan Patriotic Front took the country militarily.` },
            { p: `Rwanda is the case that most directly indicts the section 04 institutions, because the legal framework existed, the information was available, and the response did not come.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the perpetrators kept records, and the survivors testified',
              html: `Evidence for these events comes from three kinds of source and their convergence is what makes the record solid. <b>Perpetrator records:</b> deportation orders, transport schedules, requisition quotas, party correspondence and, in Cambodia, the photographs and forced confessions the regime itself produced at its interrogation center. <b>Survivor and witness testimony:</b> collected at the time by diplomats, missionaries and journalists, and afterward in enormous oral history projects and in court. <b>Physical and demographic evidence:</b> exhumations, forensic survey of grave sites, and population reconstruction from censuses before and after. Denial of these events generally works by attacking one category alone, usually testimony, as unreliable. The reason the historical record holds is that three independent kinds of evidence, produced by people with opposite interests, say the same thing.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Colonial categories inherited by an independent state. <em>The mechanism is that indirect rule requires a colonizer to designate which local group governs, and hardening a fluid social distinction into a fixed racial one recorded on identity documents leaves an independent successor state with a population already sorted, labeled and documented, so a later regime seeking a target does not have to build the category.</em>`,
        limit: `It explains the availability of the category, not the decision to use it. Rwanda's genocide required a specific political crisis, organized preparation and an incitement campaign in the early <span class="num">1990</span>s, and colonial classification alone did not make that inevitable.`,
        comparison: `Against the <em>casta</em> system in Topic 4.7: both are colonial states writing ancestry into an administrative record with legal consequences attached, and the Rwandan case shows what such a record can be used for once it outlives the state that made it and meets a regime with a different purpose.`
      },
      terms: [
        ['Armenian Genocide', 'The 1915 Ottoman deportations and killings of the Armenian population, classified as genocide by most historians and many states and denied by Turkey.'],
        ['Holodomor', 'The 1932 to 1933 famine in Ukraine caused by requisitioning and movement restrictions, classified as genocide by Ukraine and many others and disputed.'],
        ['Khmer Rouge', 'The Cambodian regime of 1975 to 1979 that emptied cities and killed on the order of one and a half to two million in pursuit of instant agrarian communism.'],
        ['Identity cards', 'The Belgian colonial documents recording Rwandan ethnicity, which fixed a fluid category and left it available to a later regime.'],
        ['Incitement', 'Public calls to violence, prosecuted as a crime after Rwanda because radio broadcasting was central to organizing the killing.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'holocaust',
      num: '03',
      accent: 'iron',
      name: 'The Holocaust',
      navLabel: 'The Holocaust',
      dates: '1933 to 1945 &nbsp;·&nbsp; Ideology, escalation, industry',
      thesis: `The success criteria ask you to explain the Holocaust as the consequence of an extremist regime taking power. That is right, and the part to get precise is the escalation: the regime that took office in <span class="num">1933</span> did not begin by killing, and the path from exclusion to murder ran through steps each of which made the next one thinkable.`,
      parts: [
        {
          heading: 'The ideology, stated exactly',
          blocks: [
            { p: `Nazi antisemitism drew on centuries of European Christian anti-Jewish hostility and differed from it in one decisive respect: it was racial rather than religious. On this theory Jewishness was inherited and biological, which meant conversion changed nothing, and Jews were held responsible for Germany's defeat in <span class="num">1918</span>, for the Versailles settlement, for the hyperinflation, for the Depression, and simultaneously for both communism and finance capitalism.` },
            { p: `Note the structure, because it is section 01's second condition in its clearest form. Every crisis in the German experience of the previous fifteen years was assigned to one cause, and the cause was a group defined by descent. That is what makes an ideology genocidal rather than merely bigoted: it identifies a population whose removal is presented as the solution to everything.` },
            { p: `The regime's targets extended beyond Jews and this belongs in a complete answer. Roma and Sinti were murdered in very large numbers. Disabled people were killed under the so-called euthanasia program from <span class="num">1939</span>, which developed the gassing techniques and trained personnel later used elsewhere, so it is a direct technical precursor rather than a separate episode. Soviet prisoners of war died in the millions in German captivity. Poles and other Slavic populations were killed and enslaved under occupation policy. Gay men, Jehovah's Witnesses and political prisoners were imprisoned and killed.` }
          ]
        },
        {
          heading: 'The escalation',
          blocks: [
            { p: `<b>Exclusion, <span class="num">1933</span> to <span class="num">1939</span>.</b> Boycotts of Jewish businesses; exclusion from the civil service, then from professions; the Nuremberg Laws of <span class="num">1935</span>, which stripped citizenship and criminalized marriage and relationships between Jews and other Germans; expropriation of property; and in November <span class="num">1938</span> the pogrom known as Kristallnacht, in which synagogues were burned and thousands were arrested, with the Jewish community then fined for the damage. Emigration was pressed and made expensive, and other countries' immigration limits closed off much of the escape.` },
            { p: `<b>Concentration and ghettoization, <span class="num">1939</span> to <span class="num">1941</span>.</b> The invasion of Poland brought millions more Jews under German control, and the population was concentrated into sealed ghettos where overcrowding, deliberate starvation rations and disease killed very large numbers before any camp existed.` },
            { p: `<b>Mass shooting, from <span class="num">1941</span>.</b> With the invasion of the Soviet Union, <span class="kt">Einsatzgruppen</span>, mobile killing units following the army, shot Jewish communities at the edges of their own towns, with the assistance of local auxiliaries in many places. Babi Yar outside Kyiv is the best-known single site. This phase killed on an enormous scale and is often underweighted by students who picture only camps.` },
            { p: `<b>Industrialized murder, <span class="num">1942</span> to <span class="num">1945</span>.</b> The Wannsee Conference in January <span class="num">1942</span> coordinated departments for what the regime called the Final Solution; it did not initiate the killing, which was already underway, and its significance is administrative. Extermination camps, Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek, killed arriving deportees by gas. Around six million Jews were murdered, roughly two-thirds of Europe's Jewish population.` },
            { p: `The role of bureaucracy is the thing to write about, because it is what makes this case distinctive rather than merely enormous. Railway timetables were drawn up and the transports were billed. Property was inventoried. Firms competed for contracts. Personnel were rotated. The killing was divided into steps performed by people who did their part of it in an office. That is state capacity, built for other purposes across the period this unit covers, turned onto a population inside the state's reach.` },
            { p: `Resistance existed and belongs in the account. The Warsaw Ghetto Uprising in <span class="num">1943</span>, revolts at Treblinka and Sobibor, Jewish partisan units, and the sustained work of rescuers across occupied Europe, including whole communities in Denmark and Bulgaria that acted to protect Jewish populations. Writing only victims is its own kind of inaccuracy.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the documentation is overwhelming and it is largely German',
              html: `The Holocaust is among the most thoroughly documented events in history, and the largest body of evidence was produced by the perpetrators: orders, transport records, camp registers, construction contracts for crematoria, procurement files, photographs, and the reports the killing units filed on their own activity with running totals. Add the physical sites and forensic evidence, the records of the liberating armies, the Nuremberg trial evidence, and tens of thousands of survivor testimonies. Denial does not rest on any competing evidence, because none exists; it works by attacking individual documents in isolation while ignoring that independent categories produced by people with opposing interests corroborate each other. Understanding why the record is so strong is part of understanding why denial is a political project rather than a historical argument.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Escalation through steps that each pass without cost. <em>The mechanism is that a regime removing a group's rights proceeds by increments, and each measure that meets no effective resistance from courts, churches, professions, neighbors or other states both establishes the group as legitimately treatable that way and tells the regime what it can get away with next, so the distance from boycott to murder is covered in stages none of which announces itself as the last.</em>`,
        limit: `Escalation describes the path and not the destination. Historians debate how far the outcome was intended from the start against how far it emerged through radicalization under wartime conditions, and the incremental model does not settle that argument.`,
        comparison: `Against the <em>casta</em> hierarchy in Topic 4.7: both write descent into law with consequences attached, and the Nuremberg Laws show what the same instrument does in a state with twentieth-century administrative reach, police power and an ideology that treats the category as a problem to be solved rather than a hierarchy to be maintained.`
      },
      terms: [
        ['Nuremberg Laws', 'The 1935 laws stripping German Jews of citizenship and criminalizing marriage and relationships with other Germans.'],
        ['Kristallnacht', 'The November 1938 pogrom of burned synagogues and mass arrests, after which the Jewish community was fined for the damage.'],
        ['Einsatzgruppen', 'Mobile killing units that shot Jewish communities in the occupied Soviet territories from 1941, a phase students often underweight.'],
        ['Wannsee Conference', 'The January 1942 meeting coordinating departments for the Final Solution, administratively significant and not the start of the killing.'],
        ['Warsaw Ghetto Uprising', 'The 1943 armed revolt in the Warsaw ghetto, part of the resistance that belongs in any complete account.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'afterward',
      num: '04',
      accent: 'oxide',
      name: 'What Was Built Afterward',
      navLabel: 'The response',
      dates: '1945 to now &nbsp;·&nbsp; Law, courts, memory',
      thesis: `The success criteria ask for consequences, and there are three kinds: a new body of international law, a set of institutions to apply it, and a cultural inheritance carried by the societies involved. The law is genuinely new in world history, and its record is mixed enough to be worth assessing honestly.`,
      parts: [
        {
          heading: 'The law',
          blocks: [
            { p: `<b>Nuremberg, <span class="num">1945</span> to <span class="num">1946</span>.</b> The International Military Tribunal tried surviving German leaders, with parallel trials in Tokyo for Japanese leaders. Its lasting contribution is two principles: that individuals, including heads of state and officials, can be held personally criminally responsible under international law, and that following orders is not by itself a defense. It also established the category of crimes against humanity. The standing criticism, made at the time and since, is that it was victors' justice, applying law partly formulated after the acts and not examining Allied conduct such as area bombing.` },
            { p: `<b>The Genocide Convention, <span class="num">1948</span>.</b> Adopted by the United Nations after Lemkin's campaign, it defines genocide as acts committed with intent to destroy, in whole or in part, a national, ethnic, racial or religious group as such, and obliges parties to prevent and punish it. Two features matter for using it accurately: the requirement of <b>intent to destroy the group as such</b> is what makes legal classification genuinely difficult and is why several cases in this chapter are disputed, and political groups were excluded from the definition during drafting, which is why the Cambodian killings, largely of the regime's own population on political and class grounds, fit awkwardly.` },
            { p: `<b>The Universal Declaration of Human Rights, <span class="num">1948</span>.</b> Adopted the day after the Convention, and a claim that rights attach to people as such rather than being granted by states, which is the Unit 5 argument of Topic 5.1 restated as an international instrument.` }
          ]
        },
        {
          heading: 'The institutions, and the record',
          blocks: [
            { p: `The Convention obliged prevention and created no court to enforce it, and for decades there was none. The Cold War of Unit 8 froze the Security Council, and prosecutions did not follow.` },
            { p: `That changed in the <span class="num">1990</span>s. The United Nations created ad hoc tribunals for the former Yugoslavia in <span class="num">1993</span> and for Rwanda in <span class="num">1994</span>. The Rwanda tribunal produced the first conviction for genocide by an international court, and also the first conviction of a media figure for incitement, which is a legal consequence directly shaped by the mechanism of section 02. The Yugoslav tribunal indicted a sitting head of state. The <span class="kt">International Criminal Court</span>, established by the Rome Statute of <span class="num">1998</span> and operating from <span class="num">2002</span>, is the permanent successor.` },
            { p: `Assess it honestly, because the criteria ask for consequences rather than for praise. The ICC has real limits: several of the most powerful states, including the United States, China and Russia, are not parties, it depends on state cooperation to make arrests and has no police force, proceedings are slow and expensive, and it has faced sustained criticism, particularly from African governments, that its early caseload focused disproportionately on Africa. Set against that, the principle that a head of state can be tried is now established in practice rather than only on paper, which was not true in <span class="num">1900</span>.` },
            { p: `<b>Rwanda's own response</b> is worth knowing as a distinct model. Facing more accused than any court system could try, Rwanda revived and adapted <span class="kt">gacaca</span>, community courts in which local panels heard cases publicly, with reduced sentences for confession and participation in reconstruction. They processed an enormous caseload and are assessed variously: as a pragmatic route to accountability and public truth-telling that no formal system could have delivered, and as proceedings lacking defense representation and vulnerable to false accusation. Both assessments are held by serious observers.` },
            { p: `<b>Cultural trauma</b> is the third consequence and it is not soft. It shapes the politics of the societies involved for generations: German memory culture and its legal prohibitions on Holocaust denial, the centrality of the genocide to Rwandan national policy, the Armenian diaspora's recognition campaigns and the diplomatic consequences of denial, and Cambodia's tribunal decades later. These are political facts with measurable effects, not merely feelings.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that "never again" worked, and do not write that it meant nothing. Both are lazy. Since <span class="num">1948</span> the world has seen Cambodia, Rwanda, Srebrenica in <span class="num">1995</span>, Darfur and others, so the Convention did not prevent genocide. It did create a name, a legal definition, a duty to act that states must now argue their way out of rather than ignore silently, and eventually courts that have convicted people including heads of state. The accurate assessment is that prevention has largely failed and accountability has partially succeeded, and that the gap between them is where the argument about international institutions actually sits. That sentence is worth more than either slogan.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Individual criminal responsibility under international law. <em>The mechanism is that a state cannot be imprisoned and its officials can, so making individuals personally liable for acts committed in an official capacity, and removing superior orders as a defense, attaches a potential cost to the people who actually sign and execute the orders rather than to an abstraction, which is the only enforcement point international law has ever found.</em>`,
        limit: `It works only where the accused can be arrested, which requires state cooperation the court cannot compel, so the principle is established and its application remains selective and slow.`,
        comparison: `Against the <em>League of Nations</em> in Topic 7.5: the same structural problem, an international body with a rule and no independent force, answered differently. The League tried to deter states and had nothing to deter them with; this framework targets individuals, who can be arrested when they travel or when their government changes, which is a narrower lever and a real one.`
      },
      terms: [
        ['Nuremberg Trials', 'The 1945 to 1946 tribunal establishing individual criminal responsibility and that superior orders are not by themselves a defense.'],
        ['Genocide Convention', 'The 1948 treaty defining genocide by intent to destroy a group as such, excluding political groups, and obliging prevention and punishment.'],
        ['International Criminal Court', 'The permanent court established by the 1998 Rome Statute, operating from 2002, without several major states as parties and with no police force.'],
        ['Gacaca', 'Rwanda\'s adapted community courts, which processed an enormous caseload and are assessed both as pragmatic accountability and as procedurally weak.'],
        ['Crimes against humanity', 'The Nuremberg category covering widespread or systematic attacks on civilian populations, distinct from genocide and easier to establish.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The first is the analytical tool, and the last is the assessment the success criteria ask for.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Five conditions recur, and the fifth is what makes this a Unit 7 topic',
        body: `A group is defined and made visible through censuses, identity documents and registers. An ideology makes that group the explanation for a crisis, which converts hostility into a program because removing the group becomes the solution. Rights are stripped by law in steps, each testing whether anyone objects. A crisis, usually war, supplies cover, urgency and the language of security. And the state's capacity does the work: trains, radio, card indexes, camps and a chain of command that divides killing into small administrative acts. Every one of those capacities is something the rest of this unit shows states building for other purposes. "They were monsters" fails because the documented participants were mostly ordinary, and because it leaves nothing to watch for.`
      },
      {
        category: 'Causes',
        title: 'Same mechanism, different ideology in the second slot',
        body: `In 1915 an Ottoman leadership that had narrowed toward Turkish nationalism, at war with Russia and reeling from defeat in the Caucasus, treated Armenians as a fifth column and deported them into the Syrian desert, with deaths commonly estimated from around six hundred thousand to over a million. In 1932 to 1933 Soviet requisitioning, movement restrictions and refusal of relief produced famine deaths in the millions, heaviest in Ukraine. The Khmer Rouge from 1975 pursued instant agrarian communism by emptying cities and killing perhaps one and a half to two million. In Rwanda in 1994, colonial identity cards had fixed a fluid category, and after 6 April organized militia, local officials and radio incitement killed an estimated eight hundred thousand or more in about a hundred days.`
      },
      {
        category: 'Escalation',
        title: 'The Holocaust ran from boycott to murder through steps that each passed',
        body: `Nazi antisemitism was racial rather than religious, so conversion changed nothing, and it assigned defeat in 1918, Versailles, hyperinflation, the Depression, communism and finance capitalism to one group defined by descent. Then the stages: boycotts and professional exclusion, the Nuremberg Laws of 1935 stripping citizenship, expropriation, Kristallnacht in 1938; ghettoization after the invasion of Poland; Einsatzgruppen shootings from 1941 in the occupied Soviet territories; and industrialized killing in extermination camps, with Wannsee in January 1942 coordinating departments rather than initiating anything. Around six million Jews were murdered, alongside Roma and Sinti, disabled people killed in a program that developed the techniques, Soviet prisoners, Poles and others. Railway billing and procurement files are the point: this was administered.`
      },
      {
        category: 'Assessment',
        title: 'Prevention largely failed and accountability partially succeeded',
        body: `Nuremberg established that individuals including officials bear personal criminal responsibility and that superior orders are not a defense. The 1948 Genocide Convention defined the crime by intent to destroy a group as such, excluded political groups during drafting, which is why Cambodia fits awkwardly, and obliged prevention while creating no court. Cambodia, Rwanda, Srebrenica in 1995 and Darfur followed, so prevention failed. But the 1990s tribunals for Yugoslavia and Rwanda produced the first international genocide conviction and the first conviction of a media figure for incitement, and indicted a sitting head of state, and the ICC has operated since 2002 without several major powers as parties and with no police force. Rwanda's gacaca courts are assessed both as pragmatic accountability and as procedurally weak.`
      }
    ]
  }
};
