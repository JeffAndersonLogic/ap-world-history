'use strict';

/**
 * Topic 7.7, Conducting World War II: the deep reading.
 *
 * Why this exists. The success criteria name four specific mobilization cases,
 * Churchill's speeches, Roosevelt's Fireside Chats and Lend-Lease, Goebbels's
 * ministry and Stalin's Great Patriotic War narrative, and then ask for the
 * similarities and the key difference between how democracies and totalitarian
 * states mobilized. That comparison is the whole topic and it is the thing a
 * survey cannot do, because a survey has room for the events and not for the
 * axis they should be compared along.
 *
 * The organizing argument: this war was decided substantially by production,
 * and the interesting finding is that the regimes which claimed total control
 * over their societies were not the ones that mobilized most completely. The
 * democracies out-produced them, and Britain conscripted women while Germany
 * for years would not, which turns the standard picture upside down and gives
 * the required comparison a real answer rather than a list.
 *
 * Three things carried deliberately:
 *
 *   1. The production figures are the argument, and they are more decisive
 *      than any battle a student can name.
 *   2. The similarity/difference structure is set up explicitly, because the
 *      criteria ask for it in those words and students conflate the two.
 *   3. The war was global and the Pacific and Asian theaters are not an
 *      appendix, so China's role is written in as the long war it was.
 */

module.exports = {
  topicKey: 't7-7',
  slug: 'topic-7-7-conducting-wwii',
  sourceFile: 'deep-reading-topic-7-7-conducting-wwii.html',
  lessonFile: 'lesson-7-7-conducting-wwii.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.7: The War the Factories Decided',
  eyebrow: 'Topic 7.7 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The War the Factories <em>Decided</em>',
  deck: `The states that called themselves total, and claimed the right to organize every part of their societies, were out-mobilized by the ones that did not. Britain conscripted women for war work in <span class="num">1941</span>; Germany resisted doing so for years. This chapter is the comparison the success criteria ask for, and the answer it reaches is not the one the propaganda of either side would have predicted.`,
  meta: ['Four sections', 'Movement, production, persuasion, the target', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.7 &nbsp;·&nbsp; The War the Factories Decided &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is why this war moved when the last one did not. Section 02 is the production argument, which is the strongest single explanation of the outcome. Section 03 is the four mobilization cases the criteria name, set up as the comparison they ask for. Section 04 is what total war did to civilians once aircraft could reach them.`,
    steps: [
      `<b>01 Why it moved:</b> the combination that broke the deadlock of Topic 7.3.`,
      `<b>02 The production war:</b> the numbers, and why they decided it.`,
      `<b>03 Mobilizing four societies:</b> Churchill, Roosevelt, Goebbels, Stalin, and the comparison.`,
      `<b>04 Civilians as the target:</b> bombing, siege, occupation, and the atomic bombs.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'movement',
      num: '01',
      accent: 'gold',
      name: 'Why This War Moved',
      navLabel: 'Movement',
      dates: '1939 to 1942 &nbsp;·&nbsp; The deadlock broken',
      thesis: `Topic 7.3 leaves the Western Front frozen because firepower had outrun mobility. This war opens with rapid advances across the same ground, and the reason is not that anyone became braver. Three technologies matured and, crucially, were combined.`,
      parts: [
        {
          heading: 'The combination',
          blocks: [
            { p: `<b>Reliable tanks.</b> The <span class="num">1916</span> tank broke down constantly and moved at walking pace. By <span class="num">1939</span> tanks were fast enough and reliable enough to exploit a breakthrough rather than merely create one, which was precisely the missing piece.` },
            { p: `<b>Aircraft that could support ground forces.</b> Dive bombers and ground-attack aircraft supplied artillery support that moved as fast as the advance did, which solved the old problem of infantry outrunning its own guns.` },
            { p: `<b>Radio.</b> This is the underrated one. Radio in every tank and aircraft let a commander coordinate a fast-moving battle in real time, redirect units and concentrate force at a weak point. Without it the other two are pieces that cannot be conducted.` },
            { p: `Combine them and you get what was popularized as <span class="kt">blitzkrieg</span>: concentrate armor on a narrow front, break through, and drive deep into the rear to disrupt supply and command rather than stopping to destroy each defending unit. Poland fell in weeks in <span class="num">1939</span>, and France, whose army was not smaller and whose tanks were not worse, fell in about six weeks in <span class="num">1940</span> because the method was better and the French had distributed their armor in support of infantry rather than concentrating it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not present blitzkrieg as a formal doctrine Germany wrote down and then executed. The word was popularized by journalists, historians dispute how far German planners thought in those terms, and the German army of <span class="num">1940</span> still moved most of its supplies by horse and marched most of its infantry. What is solid is the mechanism: concentrated armor with air support and radio coordination could break through and exploit, and the states that had not organized to do that were beaten quickly. Write the mechanism and note the dispute over the label, and you are both accurate and more interesting than the textbook version.`
            } }
          ]
        },
        {
          heading: 'And why the movement stopped',
          blocks: [
            { p: `The method had a limit and it appeared in <span class="num">1941</span>. Rapid deep advance depends on supply keeping up, and supply moved at the speed of trucks, trains and, for much of the German army, horses. Against a small country that limit does not bind. Against the Soviet Union it did: the invasion of June <span class="num">1941</span> advanced enormous distances, and the further it advanced the longer its supply lines became and the worse the roads and the rail gauge mismatch made them, while Soviet resistance did not collapse on the timetable the plan required.` },
            { p: `The same limit applied in the Pacific in reverse. Japan's rapid conquests in <span class="num">1941</span> and <span class="num">1942</span> took an enormous area and then had to hold it with shipping that American submarines and aircraft steadily destroyed. An empire acquired to secure resources could not move the resources home.` },
            { p: `So the war has a shape: rapid movement while the attacker's supply reaches, then a grinding contest of production and endurance once it does not. And that second phase is the one section 02 is about, which is why it is the phase that decided the outcome.` }
          ]
        }
      ],
      useThis: {
        tool: `Combined arms with radio coordination. <em>The mechanism is that tanks supply the ability to cross ground, ground-attack aircraft supply artillery that moves at the same speed, and radio lets one commander redirect both during the battle, so a defender's line can be broken at a chosen point and the gap exploited into the rear before reserves arrive, which is exactly what Topic 7.3's attackers could not do.</em>`,
        limit: `It is decisive only while supply keeps pace. Against depth, distance and a defender who will not collapse, the advance outruns its logistics, which is what happened in the Soviet Union in <span class="num">1941</span> and in the Pacific after <span class="num">1942</span>.`,
        comparison: `Against the <em>trench deadlock</em> in Topic 7.3: the same states and the same ground, and movement restored by adding reliability, air support and communication to a set of pieces the previous war had invented and could not conduct. The end of one war is the technical starting point of the next.`
      },
      terms: [
        ['Blitzkrieg', 'The popular name for concentrated armored breakthrough with air support and radio coordination, a real mechanism whose status as formal doctrine is disputed.'],
        ['Combined arms', 'Coordinating tanks, aircraft, infantry and artillery to a single plan, the method that restored movement to the battlefield.'],
        ['Exploitation', 'Driving deep into the enemy rear after a breakthrough to disrupt supply and command, the step 1916 tanks could not perform.'],
        ['Operation Barbarossa', 'The June 1941 German invasion of the Soviet Union, which advanced enormous distances and outran its own supply.'],
        ['Logistics', 'The movement of supply, fuel and food to forces in the field, the constraint that ended rapid advance in both theaters.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'production',
      num: '02',
      accent: 'rust',
      name: 'The War the Factories Decided',
      navLabel: 'Production',
      dates: '1941 to 1945 &nbsp;·&nbsp; Output as strategy',
      thesis: `Once the war became a contest of endurance, the side that could build more of everything won, and the gap was not close. This is the single most useful explanatory frame in the topic, and it is more decisive than any battle a student can name.`,
      parts: [
        {
          heading: 'The arithmetic',
          blocks: [
            { p: `Set the coalitions beside each other. The Allies included the United States, with the largest industrial economy in the world and a homeland no enemy bomber could reach; the Soviet Union, whose Topic 7.4 industrialization had built exactly the heavy industry a war of materiel requires, and which moved a great deal of it east beyond German reach in <span class="num">1941</span>; and the British empire, with access to worldwide resources. The Axis had Germany, a first-rate industrial economy short of oil and several other raw materials; Italy, industrially weak; and Japan, industrially capable and dependent on imported oil and ore carried by a merchant fleet that was steadily sunk.` },
            { p: `The output gap that followed was very large. Across the war the Allies produced several times the Axis totals in aircraft, tanks and trucks, and the United States alone out-produced the entire Axis in major categories. Treat specific figures with care, because national statistics were compiled differently and wartime claims were political, but the direction and the rough magnitude are not disputed by anyone.` },
            { p: `Two Allied advantages compound it. <b>Trucks and logistics:</b> American Lend-Lease supplied the Soviet Union with enormous numbers of trucks, jeeps, locomotives, radios, boots and food, which did not win battles directly and did let the Red Army move and supply its own overwhelming production of tanks and artillery. <b>Oil:</b> the Allies had it and the Axis did not, which shaped German and Japanese strategy continuously, including the drive toward Caucasus oil and Japan's decision to seize the resource-rich territories of Southeast Asia.` }
          ]
        },
        {
          heading: 'Why production beats brilliance in this kind of war',
          blocks: [
            { p: `The mechanism is the one Topic 7.3 established, arriving at greater scale. If a coalition can replace its losses faster than the enemy can inflict them, then even a series of tactical defeats does not lose the war, and even a series of tactical victories does not win it. German forces frequently fought effectively and inflicted heavy losses, and the losses were replaced and theirs increasingly were not.` },
            { p: `That is also why strategic decisions about production matter as much as decisions about campaigns. Standardizing designs, building ships faster than submarines could sink them, and choosing to make many adequate tanks rather than fewer superb ones are strategic choices, and the side that made them consistently was the side with the capacity to benefit from them.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: both sides were counting, and one side\'s counts survived intact',
              html: `Production figures for this war are unusually good, because every belligerent ran statistical offices to allocate materials and manpower and because Allied intelligence spent the war estimating enemy output. After <span class="num">1945</span> the United States Strategic Bombing Survey interrogated German officials and seized German economic records to assess what bombing had actually done, and that work produced a detailed picture of German wartime production, including the finding that German output of many weapons kept rising into <span class="num">1944</span> despite sustained bombing. Read that carefully, because it cuts against the intuition that bombing simply destroyed the enemy economy, and it is a good example of a body commissioned to evaluate a policy producing evidence that complicated the case for it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Replacement rate as the decisive variable. <em>The mechanism is that in a war of materiel the meaningful question is not who wins an engagement but who can replace what the engagement cost, so a coalition with several times the industrial output can absorb defeats that would end a smaller economy's war, and the enemy's tactical successes stop translating into strategic gain.</em>`,
        limit: `Production is necessary and not sufficient. It had to be converted into trained forces, moved across oceans against submarines, and used competently, and the Soviet Union's capacity to keep fighting in <span class="num">1941</span> and <span class="num">1942</span> rested on decisions and endurance that no output table shows.`,
        comparison: `Against the <em>Estado da India</em> in Topic 4.4: Portugal held an ocean with a few dozen forts because nobody could contest them. Here the whole logic of power has changed, and what a state can hold depends on what it can manufacture, which is the clearest single marker of the difference industrialization made to war.`
      },
      terms: [
        ['Lend-Lease', 'The United States program supplying allies with equipment, trucks, food and materials, which gave Soviet production the mobility to use itself.'],
        ['War of materiel', 'A war decided by the capacity to produce and replace equipment rather than by decisive battle, the form this war took after 1941.'],
        ['Strategic resources', 'Oil, rubber, iron and other inputs without which industry cannot run, whose absence shaped German and Japanese strategy throughout.'],
        ['Convoy and submarine war', 'The Atlantic and Pacific contests over shipping, which decided whether production could reach the place it was needed.'],
        ['Strategic Bombing Survey', 'The postwar United States assessment of what bombing achieved, whose findings complicated the case for the campaign it evaluated.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'mobilizing',
      num: '03',
      accent: 'iron',
      name: 'Four Societies, One Comparison',
      navLabel: 'Mobilization',
      dates: '1939 to 1945 &nbsp;·&nbsp; Persuasion and control',
      thesis: `The success criteria ask for the similarities and the key difference between how Western democracies and totalitarian states mobilized. Here is each case, and then the comparison, and the finding is that the difference is not where the propaganda of either side said it was.`,
      parts: [
        {
          heading: 'The four cases the criteria name',
          blocks: [
            { p: `<b>Churchill.</b> Wartime speeches to Parliament and by radio that did something specific and unusual: they described the situation as genuinely dangerous, declined to promise a quick or cheap victory, and asked for endurance on those terms. Britain also ran extensive censorship, direction of labor, rationing and an official information ministry, so persuasion sat alongside compulsion rather than replacing it.` },
            { p: `<b>Roosevelt.</b> The <span class="kt">Fireside Chats</span>, radio addresses explaining policy directly to households in plain language, which built support for intervention in a country with a strong non-interventionist tradition. <span class="kt">Lend-Lease</span> in <span class="num">1941</span> is the policy achievement that persuasion made possible: material aid to states already at war, before American entry, sold to the public with the argument that you lend a neighbor a hose when their house is burning. After Pearl Harbor in December <span class="num">1941</span>, mobilization became comprehensive, including war production boards, rationing, price control and a vast expansion of the federal government.` },
            { p: `<b>Goebbels.</b> A Ministry of Public Enlightenment and Propaganda with control over press, radio, film and the arts, and the power to prohibit as well as to produce. The distinguishing feature is not that it made propaganda, which every belligerent did, but that it operated with no competing sources of information permitted, no opposition press, and the apparatus of a police state behind it. Its most famous moment, the call for total war after Stalingrad in <span class="num">1943</span>, is itself evidence that Germany had not been fully mobilized until then.` },
            { p: `<b>Stalin.</b> The framing of the conflict as the <span class="kt">Great Patriotic War</span>, which is worth examining as a deliberate choice. Soviet propaganda de-emphasized world revolution and appealed instead to Russian and Soviet patriotism, national heroes from the pre-revolutionary past, and the defense of the homeland, and the state relaxed its persecution of the Orthodox Church to enlist it. A regime built on internationalist ideology reached for nationalism because nationalism worked, alongside extremely harsh discipline, penal battalions and the deportation of whole nationalities suspected of disloyalty.` }
          ]
        },
        {
          heading: 'The similarities, which are extensive',
          blocks: [
            { p: `All four states did the same things, and the criteria want them named. Every one used <b>propaganda</b> through posters, film and radio; commissioned <b>art</b> and controlled cultural production; intensified <b>nationalism</b>; conscripted; directed <b>labor</b>; rationed food and goods; and mobilized <b>industry</b> under central direction. Every one restricted information, and every democracy censored heavily. The list of instruments does not distinguish them.` }
          ]
        },
        {
          heading: 'The difference, and the surprise inside it',
          blocks: [
            { p: `The key difference the criteria are pointing at is real: in the totalitarian states, ideology was used to repress basic freedoms and to dominate private life, and there was no legal opposition, no free press, no independent courts and no election that could remove the government. Britain held a general election in <span class="num">1945</span> and removed Churchill's party from office while the war against Japan was still being fought, which is a fact worth putting in an essay because it makes the difference concrete rather than abstract.` },
            { p: `Now the surprise, which is what turns this section from a list into an argument. <b>The states that claimed total control did not mobilize most completely.</b> Britain conscripted women into war work and the auxiliary services from <span class="num">1941</span>, the first major state to do so, and reached a very high proportion of its population in war-related work. Nazi Germany, whose ideology assigned women to home and family, resisted comparable measures for years and relied instead on millions of foreign forced laborers and prisoners of war brought to Germany, which is coercion substituting for mobilization. Only after Stalingrad did Germany move toward the fuller mobilization Goebbels called for, and by then the production gap was unbridgeable.` },
            { p: `That is the finding to write. A regime that dominates private life is not thereby better at getting a society to work, and may be worse, because ideology can forbid the very measures efficiency requires. Consent, where it can be obtained, mobilizes more thoroughly than compulsion, and the British and American cases are the evidence.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write the democracies as free societies that fought without coercion. Britain directed labor by law, imprisoned people without trial under emergency regulations, and censored the press. The United States incarcerated approximately <span class="num">120</span>,<span class="num">000</span> people of Japanese descent, most of them American citizens, in camps for the duration, and the Supreme Court upheld it at the time. Segregation ran through the American armed forces and war industry throughout, which is what makes the Double V campaign, for victory abroad and victory over discrimination at home, an important part of this topic. The honest comparison is about degree, legal limit and reversibility, and it is far stronger for including these facts than for leaving them out.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Consent as a mobilization technology. <em>The mechanism is that total mobilization needs people to work hard at things nobody is watching, which compulsion cannot supervise at scale, so a state that can persuade its population to accept conscription, direction of labor and rationing gets deeper mobilization than one relying on force, and a state whose ideology forbids using part of its workforce mobilizes less than it could.</em>`,
        limit: `Consent was manufactured under censorship and sustained by coercion in every case, and it was easier to obtain in states that had not been invaded, so do not turn this into a claim that democracies are simply better at war.`,
        comparison: `Against <em>Topic 7.3</em>: the First World War established that states must mobilize whole societies. This war tested how, and the answer is that the constraint is political rather than technical, because every one of these states knew how to run a war economy and they differed in what their politics would let them ask of whom.`
      },
      terms: [
        ['Fireside Chats', 'Roosevelt\'s radio addresses explaining policy directly to households, which built support for intervention including Lend-Lease.'],
        ['Ministry of Propaganda', 'Goebbels\'s department controlling press, radio, film and the arts, distinguished by permitting no competing source of information.'],
        ['Great Patriotic War', 'The Soviet framing of the conflict around homeland and national past rather than world revolution, including a relaxation toward the Orthodox Church.'],
        ['Conscription of women', 'Britain\'s 1941 extension of compulsory war service to women, the clearest evidence that democracies mobilized more fully than the totalitarian states.'],
        ['Double V', 'The campaign among Black Americans for victory abroad and against discrimination at home, which named the contradiction in American mobilization.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'civilians',
      num: '04',
      accent: 'oxide',
      name: 'When the Civilian Is the Target',
      navLabel: 'Civilians',
      dates: '1937 to 1945 &nbsp;·&nbsp; Bombing, siege, occupation',
      thesis: `Topic 7.3 explained why mobilizing civilians makes them targets. This war is that logic with aircraft that can reach them, and the result is a war in which civilian deaths exceeded military ones by a wide margin.`,
      parts: [
        {
          heading: 'Strategic bombing, and what it did and did not achieve',
          blocks: [
            { p: `The reasoning was stated openly before the war: if an enemy's capacity to fight rests on factories and workers, then bombing both should shorten the war and might avoid another trench deadlock. Practice diverged from theory almost at once, because bombing accurately was extremely difficult, and area bombing of cities became standard for night raids.` },
            { p: `The sequence includes Guernica in <span class="num">1937</span> during the Spanish Civil War, German raids on Warsaw, Rotterdam and the Blitz against British cities, and then a sustained Allied campaign against German cities, including the firestorms at Hamburg in <span class="num">1943</span> and Dresden in <span class="num">1945</span>, and against Japanese cities, where the firebombing of Tokyo in March <span class="num">1945</span> killed on a scale comparable to the atomic bombings.` },
            { p: `The assessment is genuinely contested and should be written as such. The postwar bombing survey found German armaments output rising into <span class="num">1944</span> despite the campaign, which undercuts the simplest claims made for it. The stronger cases made for bombing are that it forced Germany to divert enormous resources to air defense, destroyed the oil and transport that everything else depended on once those were targeted systematically from <span class="num">1944</span>, and gave the Allies air superiority. The case against is that area bombing killed very large numbers of civilians for effects that could have been achieved more precisely and later were. Present the dispute; do not resolve it by assertion.` }
          ]
        },
        {
          heading: 'Siege, occupation, and the war in Asia',
          blocks: [
            { p: `Bombing is the visible case and not the largest. The siege of Leningrad, lasting close to nine hundred days, killed civilians in enormous numbers, primarily by starvation, and was a deliberate strategy rather than a side effect. German occupation policy in eastern Europe involved planned starvation, forced labor and mass killing on a scale that Topic 7.8 treats directly.` },
            { p: `In Asia the war was longer and its civilian toll immense. China had been fighting since <span class="num">1937</span>, and Chinese civilian and military deaths across that longer war are usually estimated in the many millions, with wide ranges. Japanese occupation policies across China and Southeast Asia included massacres, forced labor, and the enslavement of women in military brothels, euphemistically called comfort women, which remains a live diplomatic issue. The Bengal famine of <span class="num">1943</span>, in British India, killed on the order of millions, and its causes are debated among crop failure, wartime requisitioning and shipping priorities, and the response of the colonial administration.` },
            { p: `A student writing about this war should be able to say that it was global, that Asia's war started earlier and lasted longer, and that most of the people who died in it were not soldiers.` }
          ]
        },
        {
          heading: 'The atomic bombs',
          blocks: [
            { p: `The United States dropped atomic bombs on Hiroshima on 6 August <span class="num">1945</span> and on Nagasaki on 9 August, killing tens of thousands immediately in each city and many more subsequently from injuries and radiation. Japan announced surrender on 15 August. The Soviet Union declared war on Japan and invaded Manchuria on 9 August, between the two bombings.` },
            { p: `The debate over the decision is a genuine historiographical dispute and belongs in a chapter like this one as a dispute. The traditional case holds that the bombs ended the war quickly and avoided an invasion of Japan whose projected casualties, on both sides, would have been enormous. A revisionist case holds that Japan was already close to surrender, that the Soviet declaration of war was at least as decisive, and that the bombs served a diplomatic purpose toward the Soviet Union. A middle position holds that the bombs and the Soviet entry together broke the deadlock in the Japanese leadership. Estimates of what an invasion would have cost were themselves contested at the time and are contested now.` },
            { p: `Two things are worth adding whatever position you take. This is the logic of total war reaching its endpoint: a weapon whose purpose is the destruction of a city is only usable if a city is a legitimate target, and four years of area bombing had already established that it was. And the weapon changes what the next fifty years look like, which is where Unit 8 begins.` }
          ]
        }
      ],
      useThis: {
        tool: `Air power collapsing the distance to the home front. <em>The mechanism is that once a bomber can reach an enemy's cities, the industrial capacity that total war made a legitimate target becomes a reachable one, so the front line stops being a line and the distinction between the army and the population it comes from stops doing protective work.</em>`,
        limit: `The results fell far short of the theory. Bombing did not break civilian morale in Britain, Germany or Japan, and German armaments output rose into <span class="num">1944</span>, so the claim that attacking civilians shortens wars was not borne out by the campaign that tested it.`,
        comparison: `Against the <em>naval blockade</em> in Topic 7.3: both attack a population's capacity to sustain a war, one through economics and slowly, the other through explosives and immediately. The continuity is the target, and the change is that the second requires no control of the sea and takes hours.`
      },
      terms: [
        ['Strategic bombing', 'Attacking an enemy\'s industry, transport and cities from the air to destroy the capacity behind its armies.'],
        ['Area bombing', 'Attacking a city as a whole rather than specific targets, adopted because accurate bombing was extremely difficult, especially at night.'],
        ['Siege of Leningrad', 'The close to nine-hundred-day encirclement in which starvation killed civilians in enormous numbers as a deliberate strategy.'],
        ['Comfort women', 'The women enslaved in Japanese military brothels across occupied Asia, a war crime that remains a live diplomatic issue.'],
        ['Hiroshima and Nagasaki', 'The atomic bombings of 6 and 9 August 1945, whose role in ending the war relative to the Soviet declaration is genuinely disputed.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The third is the comparison the success criteria ask for, and its finding is the one worth remembering.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Three technologies combined restored movement to the battlefield',
        body: `Topic 7.3 leaves the Western Front frozen because defensive firepower outran mobility. By 1939 tanks were reliable and fast enough to exploit a breakthrough rather than merely make one, ground-attack aircraft supplied artillery support that moved at the speed of the advance, and radio let one commander redirect both mid-battle. Concentrated armor could break through and drive into the rear, and France fell in about six weeks in 1940 with an army that was not smaller and tanks that were not worse, because it had distributed its armor among infantry instead of concentrating it. Treat blitzkrieg as a mechanism rather than a written doctrine, since historians dispute the label and most German infantry still marched and most supply still moved by horse.`
      },
      {
        category: 'Causation',
        title: 'The production gap decided the war more than any battle',
        body: `Once advances outran supply, in the Soviet Union from 1941 and the Pacific after 1942, the war became a contest of replacement. The Allies had the largest industrial economy in the world with a homeland out of bomber range, Soviet heavy industry built by the Five-Year Plans of Topic 7.4 and relocated east in 1941, and worldwide imperial resources. The Axis had a first-rate German economy short of oil, a weak Italian one, and a Japanese one dependent on shipping that was steadily sunk. Allied output ran to several times Axis totals in aircraft, tanks and trucks. Lend-Lease trucks, locomotives and radios gave Soviet tank production the mobility to use itself. German forces often fought effectively and their losses stopped being replaceable.`
      },
      {
        category: 'Comparison',
        title: 'The states claiming total control mobilized least completely',
        body: `All four used propaganda, commissioned art, intensified nationalism, conscripted, directed labor, rationed and centrally directed industry, so the instruments do not distinguish them. The real difference is that totalitarian states used ideology to repress basic freedoms and dominate private life, with no legal opposition, free press or removable government, and Britain held an election in 1945 that removed Churchill's party while the Japanese war continued. The surprise is that Britain conscripted women into war work from 1941 and reached very high mobilization, while Nazi ideology assigned women to the home and Germany relied on millions of foreign forced laborers instead, moving toward full mobilization only after Stalingrad. Ideology can forbid the measures efficiency requires.`
      },
      {
        category: 'Consequence',
        title: 'Most of the people who died in this war were not soldiers',
        body: `Once mobilizing civilians made them targets and aircraft could reach them, the front stopped being a line. The sequence runs Guernica in 1937, Warsaw and Rotterdam, the Blitz, the firestorms at Hamburg in 1943 and Dresden in 1945, and the firebombing of Tokyo in March 1945. Bombing's results fell short of its theory: morale did not break and German armaments output rose into 1944, though the campaign forced huge diversion to air defense and, once oil and transport were targeted systematically, did real damage. Add the siege of Leningrad, occupation policy in eastern Europe, China's war from 1937, and the Bengal famine of 1943. Hiroshima and Nagasaki are that logic at its endpoint, and their role relative to the Soviet declaration of war on 9 August is genuinely disputed.`
      }
    ]
  }
};
