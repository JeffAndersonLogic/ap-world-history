'use strict';

/**
 * Topic 6.2, State Expansion: the deep reading.
 *
 * Why this exists. The learning objective is "compare processes by which state
 * power shifted", and the success criteria name Leopold's Congo, British and
 * French West Africa and Japanese expansion into East Asia. A survey narrates
 * those three in sequence, which produces a list; comparison needs a variable,
 * and the variable this chapter uses throughout is COST. What conquest cost,
 * what administration cost, and who was made to pay for both.
 *
 * Five sections, and the order is causal rather than chronological:
 *
 *   1. Berlin did not divide Africa. It set a rule, effective occupation, which
 *      converted claims into a race. Students consistently believe the map was
 *      drawn at that table, and the correction is the section's whole point.
 *   2. The cost of conquest collapsed between about 1850 and 1890 for reasons
 *      that are medical, mechanical and fiscal. This is the section that makes
 *      the timing of the scramble explicable at all.
 *   3. The Congo Free State as the limit case: extraction with no administration
 *      to fund, so nothing restrains the extraction. Death-toll estimates are
 *      given as a range with the reason the range is wide, because a confident
 *      number here is not better teaching, it is a claim the sources cannot bear.
 *   4. Direct, indirect and settler rule, chosen by what a territory could be
 *      made to pay for, which is why indirect rule spread and why settler
 *      colonies produced the longest conflicts.
 *   5. Japan, Russia and the United States, because the objective says "various
 *      parts of the world" and a chapter that stops at Europe has quietly
 *      answered a different question.
 */

module.exports = {
  topicKey: 't6-2',
  slug: 'topic-6-2-state-expansion',
  lessonFile: 'lesson-6-2-state-expansion.html',

  titleHtml: 'What Conquest Started to <em>Cost</em>',
  deck: `In <span class="num">1870</span> Europeans held a scattering of coastal forts, river mouths and a few large possessions in Africa. By <span class="num">1914</span> the entire continent except Ethiopia and Liberia was claimed. Nothing about European desire for Africa changed in those forty years; people had wanted it for centuries. What changed is that the price of taking it and holding it fell through the floor, and this chapter follows that price through five stages, from the rule set in Berlin to the empires assembled in Tokyo, St Petersburg and Washington.`,

  howTo: {
    heading: 'How to Use This',
    intro: `The comparison the learning objective asks for needs a variable, and the variable here is cost: what it took to conquer a place, what it took to govern it afterward, and who was made to pay. Read the five sections as one argument about that, and the differences between Leopold's Congo, Lugard's Nigeria and Meiji Japan stop being three stories and become three answers to the same question.`,
    steps: [
      `<b>01 Berlin:</b> what the conference actually decided, and why "effective occupation" started a race.`,
      `<b>02 The collapse in cost:</b> quinine, steamboats, breech-loading rifles and locally raised revenue.`,
      `<b>03 The Congo Free State:</b> what happens when there is extraction and no administration to pay for.`,
      `<b>04 Three ways to hold it:</b> direct rule, indirect rule and settler colonies, and why the choice was fiscal.`,
      `<b>05 Japan, Russia, the United States:</b> the same package assembled outside western Europe.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'berlin',
      num: '01',
      accent: 'gold',
      name: 'Berlin Did Not Divide Africa, It Started a Race',
      navLabel: 'Berlin',
      dates: 'November 1884 to February 1885 &nbsp;·&nbsp; Fourteen states, no Africans',
      thesis: `The <span class="kt">Berlin Conference</span> drew no colonial borders and allocated no territory to anyone, and the one claim it came closest to settling, Leopold's, it recognized rather than granted. What it did was set a procedural rule, that a new coastal claim had to be backed by <b>effective occupation</b> and notified to the other signatories, and a rule of that shape turns a slow scramble into a fast one, because it converts wanting a place into having to go there first.`,
      parts: [
        {
          heading: 'What was decided in the room',
          blocks: [
            { p: `Bismarck convened it in Berlin between November <span class="num">1884</span> and February <span class="num">1885</span>. Fourteen states attended, including the Ottoman Empire and the United States. No African state was represented and none was invited, which is the first fact to write and the least interesting one, because a student can state it without understanding anything about what followed.` },
            { p: `The General Act did four things. It declared free trade and free navigation in the Congo basin and on the Niger, so that no single power could close those river systems to the others. It recognized Leopold II's International Association of the Congo as the authority over a vast territory in the center of the continent. It included a declaration against the slave trade. And it laid down that a power claiming new territory on the African coast had to notify the other signatories and demonstrate effective occupation, meaning an actual administrative and military presence rather than a line on a chart.` },
            { p: `The occupation rule was written to prevent disputes, and disputes are what it prevented. What it also did, immediately, was make speed the decisive variable. Under the older practice a state could register a claim and act on it later; under the new one, a claim without troops and a flag on the ground was worth nothing against a rival who arrived with both. Every power therefore had to move first and worry about the value of the ground afterward. The years immediately following the conference are the fastest annexation in the history of the continent, and that is a rule doing what rules do rather than a plan being executed.` }
          ]
        },
        {
          heading: 'Paper, ground, and the treaties nobody could read',
          blocks: [
            { p: `What "effective occupation" meant in practice was a great deal thinner than the phrase suggests. The standard instrument was a treaty of protection, a printed form in a European language, signed or marked by a ruler whose own understanding of what he was agreeing to came through an interpreter with an interest in the outcome. Leopold's agent Henry Morton Stanley accumulated several hundred such documents along the Congo, and the pattern was repeated across West Africa by British, French and German agents racing each other to the same chiefs.` },
            { p: `The result is that the map of Africa in <span class="num">1890</span> records claims rather than control. Large areas marked in a European color had not been visited by the power that claimed them, and the actual conquest, the campaigns, the garrisons and the tax collection, took another two or three decades and is what Topic 6.3 is largely about. The borders themselves were drawn later, in European capitals, by negotiation between the claimants, which is why so many of them are straight lines that cut through language groups, kingdoms and trade routes, and why so many remain contentious.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Africa was divided at the Berlin Conference, or that the delegates drew the borders. It is the single most common error on this topic and it is wrong in three separate ways. The conference allocated no territory, and recognizing Leopold's association is not the same as awarding him a colony, since his claim had been assembled from treaties on the ground and recognized bilaterally by other powers before and around the conference; the borders were fixed afterward in a long series of bilateral treaties between European powers; and possession on paper was not possession on the ground, which took decades of campaigning against people who did not accept it. The accurate sentence is that Berlin set the <b>rules of the competition</b>, above all effective occupation and notification, and that those rules accelerated a partition that was already beginning. That version explains the speed. "They divided it at a table" explains nothing, and it also quietly erases the African resistance that the next topic is about.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A procedural rule that rewards speed. <em>The mechanism is that requiring effective occupation to validate a claim makes arriving first the only thing that secures a territory, so every power must move before it has assessed whether the ground is worth having, and a rule intended to reduce conflict between claimants produces the fastest land grab on the continent.</em>`,
        limit: `Berlin regulated the coasts and the two river basins and was not a general partition treaty; a great deal of the interior was claimed and fought over under bilateral agreements that had nothing to do with it.`,
        comparison: `Against the <em>Treaty of Tordesillas</em> of 1494 in Topic 4.2: both are agreements among outsiders about land they did not hold, and the difference is instructive. Tordesillas drew one line and assigned hemispheres; Berlin refused to assign anything and instead set a test, which is why the sixteenth-century agreement produced two empires and the nineteenth-century one produced a race among seven.`
      },
      terms: [
        ['Berlin Conference', 'The 1884 to 1885 meeting of fourteen states that set the rules of partition without dividing Africa or inviting any African state.'],
        ['Effective occupation', 'The requirement that a new coastal claim be backed by real administrative and military presence, which made speed decisive.'],
        ['Treaty of protection', 'The printed form signed by African rulers through interpreters, the paper on which most early claims rested.'],
        ['Scramble for Africa', 'The rapid partition after 1880 that left only Ethiopia and Liberia unclaimed by 1914.'],
        ['Claim versus control', 'The gap between a colored map and an administered territory, which took decades and campaigns to close.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'cost',
      num: '02',
      accent: 'iron',
      name: 'Why It Suddenly Became Affordable',
      navLabel: 'The cost collapse',
      dates: 'c. 1850 to 1898 &nbsp;·&nbsp; Quinine, steam, breech-loaders, and other people\'s taxes',
      thesis: `The scramble is a puzzle only if you assume Europeans acquired an appetite for Africa in <span class="num">1880</span>. They had one for centuries and were kept on the coast by disease, by rivers they could not ascend and by armies they could not beat cheaply. Four changes removed those obstacles in one generation, and the last of them, making the colony pay for its own conquest, is the one students leave out.`,
      parts: [
        {
          heading: 'Three technical changes and one financial one',
          blocks: [
            { p: `<b>Quinine.</b> European mortality in West Africa in the early nineteenth century was catastrophic, high enough that the region's reputation as a graveyard was a statement about actuarial fact rather than a figure of speech. Cinchona bark had long been known as a treatment; what changed was the isolation of quinine in <span class="num">1820</span> and then its use as a daily <em>preventive</em> dose, demonstrated on the Niger expedition of <span class="num">1854</span>, which returned without losing a European to fever. Cheap Dutch and British cinchona plantations in Java and India then made the dose affordable at scale. A river you can now survive is a river you can now use.` },
            { p: `<b>The shallow-draft steamboat.</b> Africa's rivers are obstructed by cataracts and, under sail, unusable upstream against the current. Iron steamers small enough to be carried in pieces past a cataract and reassembled turned the Niger, the Congo and the Zambezi into roads inward. Combined with the Suez Canal from <span class="num">1869</span> and the submarine telegraph, they cut both the time and the uncertainty of an expedition, and a government that can send an order and get an answer within days will authorize things it would not authorize with a six-month lag.` },
            { p: `<b>The firearms gap.</b> For most of the nineteenth century the muskets traded into Africa were roughly comparable to the muskets Europeans carried. Between the <span class="num">1860</span>s and the <span class="num">1880</span>s European armies moved to breech-loading rifles, then to magazine rifles and smokeless powder, then to the Maxim gun of <span class="num">1884</span>, the first fully automatic weapon, while the export of modern arms to Africa was restricted by agreement. The gap that opened was not a gap in courage or in tactics; it was a gap in rate of fire and effective range, and it appears in the casualty figures with brutal clarity. At <b>Omdurman</b> in <span class="num">1898</span>, an Anglo-Egyptian force under Kitchener destroyed a far larger Sudanese army, with Mahdist dead in the thousands against a few dozen on the other side.` },
            { p: `<b>And the financial change, which is the one to write about.</b> Conquest and administration were increasingly paid for out of the colony rather than by the taxpayer at home, through hut and poll taxes, customs duties, and forced or corvée labor. Just as importantly, the soldiers were mostly local: the West African Frontier Force, the King's African Rifles, the French tirailleurs sénégalais and the Indian Army did the great bulk of the fighting and dying in these campaigns. A war fought by locally recruited troops and paid for by locally raised taxes does not need a parliamentary majority in the way an expensive European war does, and that is what took the ceiling off.` }
          ]
        },
        {
          heading: 'What the cost collapse does not explain',
          blocks: [
            { p: `Two limits keep this argument honest, and both are useful in an essay because they show you know where a causal claim stops.` },
            { p: `First, technology explains capability rather than intention. The Maxim gun does not decide to annex anything; it changes the price of a decision made for the reasons in Topics 6.1, 6.4 and 6.5. Second, the gap was neither total nor permanent. At <b>Adwa</b> in <span class="num">1896</span>, Ethiopia under Menelik II destroyed an invading Italian army, having spent the previous decade importing modern rifles and artillery from several European suppliers who were happy to sell to a rival's rival. Ethiopia's survival is the exception that specifies the rule: what mattered was not being African or European but whether a state could buy, distribute and use the current generation of weapons, which required central authority, revenue and diplomatic room. Topic 6.3 is full of states that had one or two of those and not all three.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the casualty ratios are the evidence',
              html: `Battle casualty figures from these campaigns come mostly from the victors' own dispatches and regimental records, which are precise about European losses and were compiled by people with a professional interest in being exact about them. African losses in the same documents are estimates made by men looking across a field, and they are frequently rounded, sometimes inflated to magnify a victory, and never based on a count of the dead. So the ratios should be used for what they reliably show, an order-of-magnitude asymmetry, rather than quoted to the last digit. The asymmetry itself is not in doubt: it is confirmed by ammunition-expenditure returns, by medical records, and by the fact that these campaigns were budgeted as police actions rather than as wars.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Financing conquest from the conquered. <em>The mechanism is that hut taxes, customs duties and locally recruited regiments meant a colonial campaign did not have to be argued through a hostile parliament as an expense on the home taxpayer, so the political cost of expansion fell alongside the military one, and decisions that would have been refused as European wars were approved as administrative measures.</em>`,
        limit: `Falling cost is a permissive condition rather than a cause: it explains why what had been unaffordable became possible in this generation, not why any particular territory was chosen.`,
        comparison: `Against <em>gunpowder empires</em> in Topic 3.1: there the new weapon was ruinously expensive and its effect was to concentrate power in whichever state could pay, so conquest followed the money. Here the new weapons were comparatively cheap and the effect was the opposite, an expansion driven by how little it now cost, which is why a comparison across the two is really about whether military technology is raising or lowering the price of a state's ambitions.`
      },
      terms: [
        ['Quinine prophylaxis', 'The daily preventive dose, proven on the 1854 Niger expedition, that opened African river systems to Europeans.'],
        ['Shallow-draft steamboat', 'The dismountable iron steamer that turned cataract-blocked rivers into routes into the interior.'],
        ['Maxim gun', 'The 1884 automatic weapon that widened an already large gap in rate of fire, visible in the casualty ratios.'],
        ['Colonial troops', 'The locally recruited regiments who did most of the fighting, which lowered the political cost of expansion at home.'],
        ['Adwa', 'Menelik II\'s 1896 defeat of an Italian army, which shows the technological gap was purchasable and not racial.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'congo',
      num: '03',
      accent: 'rust',
      name: 'A Country Owned by One Man',
      navLabel: 'The Congo',
      dates: '1885 to 1908 &nbsp;·&nbsp; Leopold II, rubber quotas, and the Casement report',
      thesis: `The <span class="kt">Congo Free State</span> was not a Belgian colony. It was the personal possession of Leopold II, recognized at Berlin, governed by no legislature and answerable to no electorate, and it is the limit case for one specific mechanism: an extraction regime with no population to govern and no administration to fund has nothing whatever restraining how hard it extracts.`,
      parts: [
        {
          heading: 'How the system worked',
          blocks: [
            { p: `Leopold acquired it by presenting himself as a philanthropist, financing Stanley's expeditions, hosting a geographical conference, and assembling an association whose stated purposes were scientific and antislavery. The Berlin signatories recognized his authority in <span class="num">1885</span>. He never set foot in the territory.` },
            { p: `The first decade was ivory. The transformation came with the bicycle boom of the <span class="num">1890</span>s and then the pneumatic tire, which turned wild rubber into one of the most valuable commodities on earth. Congo rubber came from vines in the forest, not from plantations, which is the fact that shapes everything: it could not be intensified by investment, only by making more people spend more days tapping it.` },
            { p: `So the state issued <b>quotas</b>. A village was assessed a quantity of rubber to deliver on a schedule. Enforcement fell to the <b>Force Publique</b>, an army of African soldiers under mostly Belgian officers, whose standard method was to take the women of a village hostage until the men returned with the quota. Officers and concession companies were paid on a commission tied to what they collected, which made brutality profitable rather than merely permitted. And because ammunition was expensive and officers suspected soldiers of hunting with it, soldiers were required to account for cartridges by producing a severed hand for each round fired. The hands became a currency of their own, taken from the living when a shot had missed.` },
            { p: `The population loss was enormous and its size is genuinely uncertain. The Free State conducted no census, the pre-colonial population is estimated rather than known, and deaths came from killing, from famine as farming collapsed under forced labor, from a falling birth rate and from smallpox and sleeping sickness spreading through a dislocated population. Estimates of the decline over these decades run into the millions, and the most-cited figure of around ten million rests on a demographic reconstruction that other historians have contested in both directions. The honest formulation, and the one to write, is that the death toll was catastrophic and in the millions, that its exact magnitude cannot be established from the surviving evidence, and that the state destroyed most of its own records in <span class="num">1908</span>.` }
          ]
        },
        {
          heading: 'Why this one was stopped, and what stopping it meant',
          blocks: [
            { p: `The campaign against it is described in Topic 6.1: missionary photography and testimony, E. D. Morel's Congo Reform Association from <span class="num">1904</span>, and the British consul Roger Casement's official report of the same year, based on his own journey up the river and interviews with survivors. Leopold responded with a commission of inquiry of his own, which to his cost confirmed the substance. In <span class="num">1908</span> the Belgian parliament annexed the territory from its king, and Leopold burned the archives, remarking that what he had done there was nobody's business.` },
            { p: `Two things follow, and both matter for an essay. The first is why the Congo produced a reform movement when comparable violence elsewhere did not: because Leopold's regime was formally not a normal colony, criticizing it did not require criticizing colonialism, and the reformers said so explicitly. The second is what the reform achieved. Belgian rule ended the quota system and the worst of the mutilation, and it maintained forced labor, compulsory cultivation and a rigid color bar for another half century. The outcome was a change of management.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat the Congo as simply the worst example on a single scale, with every other colony a milder version of the same thing. It differed in <b>kind</b>, and naming the difference is what turns an atrocity story into an argument. A normal colonial administration wanted taxpayers, and a taxpayer has to be alive, farming and countable next year, which supplies a floor, a low and frequently violated one, under how hard the population can be worked. Leopold wanted rubber from wild vines and had no legislature, no press and no electorate to answer to, so nothing in the structure required the population to survive. That is the mechanism to write: it is not that Leopold was crueler than other men, it is that he built a system in which cruelty had no cost and paid a commission on it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Extraction without an administration to fund. <em>The mechanism is that a state financed by taxes needs its subjects productive and alive next year, which puts a floor under exploitation, while a regime taking a wild forest product on quota, paying its officers by commission and answering to no legislature has no such interest, so the violence is limited only by what the enforcers can physically do.</em>`,
        limit: `It was exceptional in its legal form and its intensity, and using it as the typical colony makes every other case look mild by comparison, which is not an argument anyone should want to make.`,
        comparison: `Against <em>Amazon rubber</em> in Topic 6.4: the same commodity, extracted from wild trees, produced comparable atrocity in the Putumayo under a British-registered company on the other side of the world, investigated by the same Roger Casement. Two regimes with almost nothing else in common converged on the same methods, which is strong evidence that the mechanism is in the commodity and the labor system rather than in the nationality of the men running it.`
      },
      terms: [
        ['Congo Free State', 'Leopold II\'s personal possession from 1885 to 1908, recognized at Berlin and answerable to no legislature.'],
        ['Rubber quota', 'The village delivery assessment that could only be met by more labor, since wild vines could not be intensified by investment.'],
        ['Force Publique', 'The African army under Belgian officers that enforced quotas by hostage-taking and mutilation.'],
        ['Casement report', 'The 1904 British consular investigation whose findings, with missionary evidence, forced the 1908 annexation.'],
        ['Concession company', 'A firm granted exclusive rights over a district and paid by yield, which made violence profitable rather than merely tolerated.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'forms',
      num: '04',
      accent: 'oxide',
      name: 'Three Ways to Hold a Place, Chosen by Price',
      navLabel: 'Forms of rule',
      dates: 'c. 1880 to 1914 &nbsp;·&nbsp; Lugard, the French administration, and the settlers',
      thesis: `Direct rule, indirect rule and settler colonization are usually taught as national styles, British and French and so on. They are better understood as answers to one question: how few Europeans can govern this place, and what will it cost. The answer depended on what the territory produced, whether Europeans could live there, and whether an existing state was available to rule through.`,
      parts: [
        {
          heading: 'Indirect rule, and what it actually created',
          blocks: [
            { p: `<span class="kt">Indirect rule</span> is associated with Frederick Lugard in Northern Nigeria from <span class="num">1900</span>, and later with his book <em>The Dual Mandate</em>. Having conquered the Sokoto Caliphate, Lugard had a few hundred Europeans available to administer several million people, so he kept the emirs in place, left them their courts and their tax collection, took a share of the revenue and made them answerable to a British resident. It was cheap, and it worked, and it spread across British Africa because of the first of those.` },
            { p: `The mechanism to write about is what it did to the authorities it preserved. An emir under indirect rule now drew his position from British backing rather than from the consent and the customary checks that had constrained him before, which made him simultaneously more secure and less legitimate. Where no suitable authority existed, in the decentralized societies of southeastern Nigeria for instance, the British appointed <b>warrant chiefs</b>, men with no traditional standing at all, and then treated their rulings as custom. The colonial state's practice of writing down "customary law" froze fluid practice into fixed code, usually recording the version most favorable to senior men and to the administration. So indirect rule did not preserve traditional authority. It manufactured a version of it that was answerable upward, and the Women's War of <span class="num">1929</span>, when tens of thousands of Igbo women mobilized against warrant chiefs and taxation, is what that produced.` }
          ]
        },
        {
          heading: 'Direct rule and settler colonies',
          blocks: [
            { p: `<b>Direct rule</b>, associated above all with the French, replaced existing authorities with an administrative hierarchy staffed from the metropole, with appointed African intermediaries, the chefs de canton, at the bottom who were officials rather than rulers. It was more expensive, more intrusive, and it fit a doctrine of assimilation described in Topic 6.1. In practice both empires used both methods depending on circumstance, which is why "the British used indirect rule and the French used direct rule" is a serviceable exam sentence and a poor description: the French ruled through emirs and sultans where it was cheaper to, and the British administered directly where there was nobody convenient to rule through.` },
            { p: `<b>Settler colonies</b> are the third kind and behave differently from both, because the decisive variable is not administration but land. Where climate and disease allowed Europeans to settle in numbers, in Algeria from <span class="num">1830</span>, in South Africa, in Southern Rhodesia and the Kenyan highlands, the colonial state's central function became the transfer of land from African owners to European settlers, and the creation of a labor force out of the people thereby dispossessed. Hut and poll taxes payable only in cash, reserves of insufficient land, and pass laws restricting movement were the instruments. This is why settler colonies produced both the sharpest conflicts and the longest ones: a mining company can be nationalized and an administrator can be sent home, but a settler population has nowhere else to be, which is why decolonization in these territories in Unit 8 took wars where elsewhere it took negotiations.` },
            { p: `Read across the three, the pattern is consistent. Where a territory produced a valuable export and Europeans could not comfortably live, rule was thin and indirect and the object was revenue. Where Europeans could live, rule was thick and the object was land. And where an existing state was available to co-opt, it was co-opted, because a functioning tax system is expensive to build and cheap to capture.` }
          ]
        }
      ],
      useThis: {
        tool: `Governing through captured authority. <em>The mechanism is that conquering a state with a working tax system and court structure and then leaving its rulers in place, answerable to a resident, lets a few hundred officials govern millions at very little cost, and it changes the rulers themselves, because an authority backed by foreign force no longer depends on the local consent that used to limit what it could do.</em>`,
        limit: `The categories leak badly. Both empires used both methods, the labels were applied after the fact by administrators writing up their own practice, and a district could be governed one way and its neighbor another.`,
        comparison: `Against the <em>Ottoman millet system</em> and Mughal practice in Topic 3.3: those empires also governed diverse populations through existing local authorities, and the crucial difference is where legitimacy came from. An Ottoman governor ruled subjects of the same state; a colonial resident ruled through a man whose authority now flowed from an outside power, which is the difference between delegation and dependency and is why the colonial version was so much more unstable.`
      },
      terms: [
        ['Indirect rule', 'Governing through existing authorities under a resident, adopted for its cheapness and spread across British Africa.'],
        ['Warrant chief', 'An appointed authority invented where none existed, whose rulings were then recorded as custom.'],
        ['Customary law', 'Fluid local practice written into fixed colonial code, usually in the version favoring senior men and the administration.'],
        ['Direct rule', 'Administration by a metropolitan hierarchy with African officials rather than rulers beneath it, costlier and more intrusive.'],
        ['Settler colony', 'A territory where the state\'s central work was transferring land to Europeans and turning the dispossessed into wage labor.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'others',
      num: '05',
      accent: 'gold',
      name: 'The Empires Assembled Outside Western Europe',
      navLabel: 'Japan, Russia, the US',
      dates: '1865 to 1910 &nbsp;·&nbsp; Central Asia, the Ryukyus to Korea, and the continent',
      thesis: `The learning objective says various parts of the world, and it means it. Japan, Russia and the United States expanded in the same decades using the same package, industrial weapons, railways, telegraph and a centralizing state, which is the strongest available evidence that imperialism in this period was a property of industrial state power rather than of European culture.`,
      parts: [
        {
          heading: 'Japan, and expansion as a defense against being expanded into',
          blocks: [
            { p: `Japan's case is the sharpest in the unit because the causation is legible. Forced open by American warships in <span class="num">1853</span> and bound by unequal treaties it had not chosen, the Meiji state after <span class="num">1868</span> concluded that the alternative to being a target was becoming a competitor, and built the apparatus deliberately: conscription, a national tax on land, railways, telegraphs, state-financed heavy industry and a navy.` },
            { p: `The expansion followed the capability. The Ryukyu kingdom was annexed in <span class="num">1879</span>. War with China in <span class="num">1894</span> and <span class="num">1895</span> took Taiwan. War with Russia in <span class="num">1904</span> and <span class="num">1905</span> took southern Sakhalin and a free hand in Korea, which became a protectorate in <span class="num">1905</span> and was annexed outright in <span class="num">1910</span>. The victory over Russia was the first defeat of a European great power by an Asian state in the modern period, and its effect on nationalists from Turkey to India and Vietnam belongs in Topic 6.3 and Unit 7.` },
            { p: `Japanese colonial rule was its own thing rather than a copy: heavier investment in railways, ports, schools and industry in Taiwan and Korea than most European colonies received, combined with a policy of cultural assimilation that reached, in Korea, into language and eventually names, and was resisted from the beginning. Higher investment and deeper cultural intrusion are not opposites here; both follow from ruling nearby territories intended to become permanent parts of the empire rather than distant sources of a commodity.` }
          ]
        },
        {
          heading: 'Russia and the United States: empires by land',
          blocks: [
            { p: `Russia moved south and east across Central Asia in the same decades, taking Tashkent in <span class="num">1865</span>, Samarkand in <span class="num">1868</span>, and reducing the khanates of Khiva and Kokand by the mid <span class="num">1870</span>s, then pressing to the Afghan frontier in the <span class="num">1880</span>s. The instruments were identical to those in section 02, rifles, artillery, telegraph and eventually rail, and the object was similar: cotton, above all, grown in Central Asia to feed Russian mills, which is Topic 6.4's argument arriving by land.` },
            { p: `The United States completed a continental conquest in the same period, and it is worth stating plainly rather than filing under a different heading. Railways crossed the plains, the buffalo economy was destroyed, the treaty system was abandoned, and the Dawes Act of <span class="num">1887</span> broke up communally held Native land into individual allotments and transferred the surplus to settlers, which is precisely the settler-colonial mechanism of section 04 operating under domestic law. In <span class="num">1898</span> it took the Philippines, Puerto Rico and Guam from Spain and annexed Hawaii, and the Philippine-American war that followed was fought against a national movement that had expected independence.` },
            { p: `The comparative point is the one to carry into an essay. These three states had different ideologies, different religions and different relationships to Europe, and they expanded in the same window using the same tools. What they shared was industrial production, a centralized fiscal-military state and a railway network, which is why the best answer to "why did state power shift as it did between <span class="num">1750</span> and <span class="num">1900</span>" is about the diffusion of that package rather than about the ambitions of any one civilization.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: contiguous empires are easy to lose track of',
              html: `Overseas empires announce themselves in the sources: they have colonial offices, separate budgets, distinct legal systems and their own archives, so they are easy to count. Contiguous land empires bury the same activity inside domestic administration. Russian Turkestan appears in the records of the ministry of the interior, and the conquest of the American West appears in land offices, railway charters, congressional appropriations and Indian agency reports. That difference in filing is one of the reasons the standard narrative of "imperialism" has often meant the overseas kind, and it is a filing artifact rather than a difference in what happened. When you compare, compare the mechanisms, land alienation, treaty abrogation, the movement of settlers behind a railway, and the two look far more alike than the categories suggest.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Expanding in order not to be expanded into. <em>The mechanism is that in a system where industrial states take weak ones, a state that acquires industry, conscription and rail changes category rather than merely defending itself, so Japan's response to being forced open in 1853 was to build the same capability and then use it, taking the Ryukyus, Taiwan and Korea within a generation.</em>`,
        limit: `The parallel can be pushed too far. Japan's expansion was into contiguous and nearby territories intended as permanent parts of the empire, which produced patterns of investment and assimilation policy that do not match the European overseas model.`,
        comparison: `Against <em>Britain in India</em> in Topics 6.3 and 6.5: Britain acquired an empire it governed at a distance through a chartered company and then a viceroy, while Japan annexed neighbors it intended to absorb. Setting the two beside each other is the fastest way to show that distance and permanence, rather than nationality, decided how a colony was administered.`
      },
      terms: [
        ['Meiji expansion', 'Japan\'s acquisition of the Ryukyus, Taiwan, southern Sakhalin and Korea between 1879 and 1910, built on a deliberate industrial-military program.'],
        ['Unequal treaties', 'The imposed agreements that made Japan a target first, and which its expansion was intended to escape.'],
        ['Russian Turkestan', 'The Central Asian territories taken from 1865, developed largely as a cotton supply for Russian mills.'],
        ['Dawes Act', 'The 1887 US law breaking communal Native landholding into allotments and releasing the surplus to settlers.'],
        ['Fiscal-military state', 'The package of central taxation, conscription, rail and telegraph that made expansion possible wherever it was assembled.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The first is the correction most answers on this topic need, and the last is the comparison the learning objective is actually asking for.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Berlin set a rule, and the rule caused the race',
        body: `The 1884 to 1885 conference allocated no territory except recognition of Leopold&rsquo;s association, drew no colonial borders and invited no African state. What it set was a procedural test: a new coastal claim required notification and effective occupation, real presence rather than a line on a chart. That converted wanting a place into having to reach it first, so every power had to move before assessing whether the ground was worth having, which is why the years after 1885 are the fastest annexation in the continent&rsquo;s history. The borders came later, in bilateral treaties between claimants, and the actual conquest took decades more against people who did not accept it.`
      },
      {
        category: 'Mechanism',
        title: 'The scramble is a story about price, not about appetite',
        body: `Europeans had wanted African trade for centuries and were held on the coast by fever, by cataracts and by armies that were expensive to beat. Quinine as a daily preventive, proven on the 1854 Niger expedition and made cheap by Java and Indian cinchona, opened the rivers; dismountable steamers made them roads inward; breech-loaders, magazine rifles and the 1884 Maxim opened a gap in rate of fire visible at Omdurman in 1898. The decisive change was fiscal: hut and poll taxes, customs duties and locally recruited regiments meant the colony paid for its own conquest, so expansion never had to be argued through a hostile parliament as an expense on the home taxpayer.`
      },
      {
        category: 'Comparison',
        title: 'The Congo and Northern Nigeria differ in what the ruler needed from people',
        body: `Leopold&rsquo;s Free State was his personal property, recognized at Berlin, with no legislature, press or electorate above it, taking wild rubber that could not be intensified by investment, so quotas were enforced by the Force Publique through hostage-taking and mutilation, with officers paid on commission. Nothing in the structure required the population to survive, and the demographic catastrophe that followed is measured in millions with a range no source can narrow. Lugard in Northern Nigeria from 1900 kept the emirs, their courts and their revenue collection and took a share, because a few hundred officials could not govern millions any other way. The difference is not the character of the men: a tax regime needs subjects alive and countable next year, and a wild-commodity quota regime does not.`
      },
      {
        category: 'Continuity',
        title: 'The same package produced empires in Tokyo, St Petersburg and Washington',
        body: `Japan was forced open in 1853, built conscription, land tax, railways, telegraph and a navy after 1868, and then took the Ryukyus in 1879, Taiwan in 1895, southern Sakhalin in 1905 and Korea in 1910. Russia took Tashkent in 1865 and Samarkand in 1868 and turned Central Asia into a cotton supply for its own mills. The United States finished a continental conquest with railways, treaty abrogation and the 1887 Dawes Act, which broke communal Native land into allotments and released the surplus to settlers, then took the Philippines, Puerto Rico, Guam and Hawaii in 1898. Three states with different ideologies expanded in the same window with the same tools, which is why the causal claim to write is about industrial fiscal-military capability rather than about any one civilization&rsquo;s ambitions.`
      }
    ]
  }
};
