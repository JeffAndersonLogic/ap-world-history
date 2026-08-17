'use strict';

/**
 * Topic 9.2, Technological Advances and Limitations, Disease: the deep reading.
 *
 * Why this exists. The key concept packs three distinct claims into one
 * sentence: diseases of poverty persisted, new epidemics emerged and sometimes
 * caused social disruption while spurring medical advance, and some diseases
 * rose in incidence merely because people lived longer. Those are three
 * different mechanisms, and a reading that lists diseases under three headings
 * teaches a student to name them. The success criteria ask for the mechanism in
 * every case.
 *
 * The volume's spine applies unusually cleanly here. Pathogens travel on the
 * networks Topic 9.1 made cheap, and the disease burden that remains after a
 * cure exists is a distribution question, not a scientific one. Malaria is
 * curable and kills hundreds of thousands of people a year; that gap is the
 * chapter's central fact.
 *
 * Three things carried deliberately:
 *
 *   1. The "diseases of longevity" claim is statistical, and the chapter
 *      teaches the statistic. Crude incidence rises with an older population
 *      even when age-specific risk is flat or falling, and a student who can
 *      say that has the whole key concept in one sentence.
 *   2. Every death toll in this chapter is given as a range with its method
 *      named, because the honest ones genuinely differ by a factor of several.
 *      The 1918 pandemic and the reported-versus-excess gap for COVID-19 are
 *      the two teaching cases.
 *   3. Epidemics build institutions. The chapter follows the outbreak-to-
 *      institution path deliberately, because it is the bridge to Topic 9.8 and
 *      because it is the part of the key concept students skip.
 */

module.exports = {
  topicKey: 't9-2',
  slug: 'topic-9-2-disease',
  lessonFile: 'lesson-9-2-disease.html',

  titleHtml: 'Who the Cure <em>Reaches</em>',
  deck: `Malaria can be prevented, diagnosed in minutes and treated, and it still kills hundreds of thousands of people a year, most of them African children under five. That gap between what medicine can do and what it does is this chapter&rsquo;s subject. Pathogens travel on the same cheap networks as everything else in this volume, and once a cure exists the remaining question is a distribution question: who the cure reaches, and who pays for it.`,

  howTo: {
    heading: 'How to Use This',
    intro: `The key concept for this topic makes three claims, and sections 01 to 03 are those three claims with their mechanisms attached. Section 04 is the one the exam rewards most and textbooks skip: what an epidemic does to the institutions of the society it hits, and how to handle the numbers honestly.`,
    steps: [
      `<b>01 Diseases of poverty:</b> malaria, tuberculosis and cholera, and why a curable disease keeps killing.`,
      `<b>02 Emergent epidemics:</b> 1918 influenza, HIV/AIDS and Ebola, and what makes a new pathogen a pandemic.`,
      `<b>03 Diseases of longevity:</b> the statistical mechanism behind heart disease and Alzheimer&rsquo;s, stated precisely.`,
      `<b>04 What outbreaks build:</b> social disruption, the institutions epidemics leave behind, and how to quote a death toll.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'poverty',
      num: '01',
      accent: 'gold',
      name: 'A Curable Disease That Keeps Killing',
      navLabel: 'Diseases of poverty',
      dates: 'c. 1900 to the 2020s &nbsp;·&nbsp; Malaria, tuberculosis, cholera',
      thesis: `The three great diseases of poverty are not mysteries. Their causes were identified in the nineteenth century, their treatments exist, and they persist because prevention and treatment cost money in places that do not have it. That makes their persistence a fact about distribution rather than about science, and it is the sharpest single illustration of this volume&rsquo;s argument.`,
      parts: [
        {
          heading: 'Malaria: the science was finished long before the disease was',
          blocks: [
            { p: `Ronald Ross demonstrated in <span class="num">1897</span> that mosquitoes transmit <span class="kt">malaria</span>, which made the disease attackable in three independent ways: kill the mosquito, keep it away from people, or treat the parasite in the patient. All three work. The World Health Organization launched a global eradication program in <span class="num">1955</span> built mainly on spraying the insecticide DDT indoors, and it succeeded in parts of Europe, North America and the Caribbean and was abandoned in <span class="num">1969</span> after failing in most of Africa, where mosquitoes were developing resistance, transmission was far more intense and the health systems needed to sustain the effort did not exist.` },
            { p: `The tools kept improving. Tu Youyou's work on artemisinin, developed from a Chinese research program begun in <span class="num">1967</span> and recognized with a Nobel Prize in <span class="num">2015</span>, produced the drug class that anchors modern treatment. Insecticide-treated bed nets and rapid diagnostic tests scaled up substantially in the <span class="num">2000</span>s, financed largely through new international bodies, and deaths fell considerably over that decade. The World Health Organization recommended the first malaria vaccine for children in <span class="num">2021</span>.` },
            { p: `And the World Health Organization's annual malaria report has continued to estimate on the order of two hundred million or more cases a year, with several hundred thousand deaths, the overwhelming majority in sub-Saharan Africa and most of them children under five. Those are modeled estimates built from health-facility reporting, household surveys and transmission models, not counts, and they should be quoted with that attached. The direction of the argument does not depend on the precision: a disease with three separate lines of effective attack remains among the largest causes of child death in one region and has been eliminated in others.` }
          ]
        },
        {
          heading: 'Tuberculosis and cholera: the environment is the treatment',
          blocks: [
            { p: `<span class="kt">Tuberculosis</span> spreads through the air between people in close quarters, so its epidemiology tracks housing density and ventilation directly. Robert Koch identified the bacterium in <span class="num">1882</span>; streptomycin, the first effective antibiotic against it, arrived in <span class="num">1944</span>. Cure requires taking several drugs for six months or longer, which is exactly the kind of treatment that fails when a person cannot reach a clinic repeatedly, and interrupted courses select for resistant strains. Drug-resistant tuberculosis is therefore not simply bad luck; it is partly a product of health systems that can start a course and not finish it.` },
            { p: `Cholera kills by dehydration, which means the decisive treatment is water with the right amount of salt and sugar in it. Oral rehydration therapy, refined in the <span class="num">1960</span>s and <span class="num">1970</span>s and used at scale during the Bangladesh refugee crisis of <span class="num">1971</span>, cut case fatality dramatically at a cost of pennies per patient, and it is often described as one of the most consequential medical advances of the century precisely because it is so cheap. Yet cholera persists, because the thing that prevents it is not a drug at all. It is sewage separated from drinking water, which is infrastructure, which is capital.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: an outbreak has a traceable source',
              html: `The Haiti cholera outbreak that began in <span class="num">2010</span>, months after the earthquake, shows how modern outbreak investigation works and why it is uncomfortable. Haiti had no recorded cholera for at least a century. Epidemiological tracing put the earliest cases along a river below a United Nations peacekeeping base, and genetic sequencing matched the strain to one circulating in South Asia rather than in the Caribbean, pointing to peacekeepers from Nepal. The United Nations resisted the finding for years and its Secretary-General apologized for the organization's role in <span class="num">2016</span>. Reported cases ran to several hundred thousand and reported deaths to roughly ten thousand, and both are understood to be undercounts. Two lessons: sequencing can now attribute an outbreak to a source with a confidence that was impossible before, and an institution created to help can carry a pathogen along the same route as the help.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The gap between an available cure and a delivered cure. <em>The mechanism is that prevention and treatment for these diseases require sustained spending, functioning clinics, reliable supply and clean infrastructure, all of which are exactly what a poor state lacks, so the disease burden settles on the populations least able to fund the response. That is why malaria was eliminated in Italy and the American South and not in the Sahel, with the same science available to all three.</em>`,
        limit: `Poverty is not the whole explanation. Climate and ecology set where the mosquito vector can live at all, war and displacement interrupt treatment independently of income, and the collapse of the eradication campaign also owed something to insecticide resistance, which is a biological problem money does not directly solve.`,
        comparison: `Against the <em>Black Death</em> in Topic 2.6: both are diseases moving along trade and transport networks, but the fourteenth century had no idea what was killing people and no available response beyond quarantine, while the twentieth had the pathogen, the vector, the drug and the vaccine. The variable that changed is knowledge; the variable that did not is who could afford to act on it.`
      },
      terms: [
        ['Malaria', 'A parasitic disease transmitted by mosquitoes, shown by Ross in 1897, preventable and treatable, and still estimated to cause several hundred thousand deaths a year concentrated in sub-Saharan Africa.'],
        ['Tuberculosis', 'A bacterial disease spread through the air in crowded, poorly ventilated spaces, curable with a months-long drug course whose interruption breeds resistance.'],
        ['Oral rehydration therapy', 'Treatment of cholera dehydration with water, salt and sugar, refined in the 1960s and 1970s, which cut case fatality at a cost of pennies.'],
        ['Vector', 'The organism that carries a pathogen between hosts, such as the mosquito for malaria, which makes the pathogen\'s range a fact about ecology.'],
        ['Drug resistance', 'The selection of strains that survive treatment, produced by incomplete or inconsistent drug courses as much as by biology.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'emergent',
      num: '02',
      accent: 'rust',
      name: 'Why a New Pathogen Becomes a Pandemic',
      navLabel: 'Emergent epidemics',
      dates: '1918 to 2020 &nbsp;·&nbsp; Influenza, HIV, Ebola, coronavirus',
      thesis: `New human diseases mostly come from animals, and whether one becomes a local outbreak or a pandemic depends less on the pathogen than on the network it lands in. The networks got faster and denser across this century, which is why an outbreak that would once have burned out in a valley now reaches six continents in weeks.`,
      parts: [
        {
          heading: 'The 1918 influenza pandemic',
          blocks: [
            { p: `The influenza pandemic of <span class="num">1918</span> and <span class="num">1919</span> arrived in waves, and the second, in the autumn of <span class="num">1918</span>, was by far the deadliest. Two features made it strange. It killed an unusual number of healthy adults between roughly twenty and forty rather than concentrating on the very young and the very old, and it spread with extraordinary speed along the troop movements of the First World War, which packed young men into camps, ships and trains and then moved them between continents.` },
            { p: `The name is a lesson in sourcing. Wartime censorship in the belligerent countries suppressed reporting of the epidemic; neutral Spain reported it freely, so the pandemic became known by the name of the one country whose press was allowed to describe it. Its geographic origin is still disputed among historians, with cases made for Kansas, for northern France and for East Asia, and no consensus. Do not assert an origin.` },
            { p: `Death toll estimates are among the widest in modern history. The figure a student usually meets is fifty million, but the published range runs from roughly seventeen million at the low end of one recent reconstruction to a hundred million at the high end of another, because all of them are calculated from excess mortality in countries with usable records and then extrapolated to countries without them. India, where colonial records were partial and mortality was very heavy, drives much of the spread between estimates. Quote a range, name the method, and the answer is stronger than a confident single number.` }
          ]
        },
        {
          heading: 'HIV/AIDS: a slow virus in a fast world',
          blocks: [
            { p: `The United States public health service reported an unexplained cluster of illnesses in <span class="num">1981</span>; the virus was identified in <span class="num">1983</span> and <span class="num">1984</span> and named <span class="kt">HIV</span> in <span class="num">1986</span>. What made it different from influenza is time. A person can carry HIV for years without symptoms while transmitting it, so by the time the disease is visible the infection is already widely distributed. A slow-acting pathogen in a world of cheap air travel and dense cities is a global problem before anyone can see it as one.` },
            { p: `The turning point in treatment came in <span class="num">1996</span>, when combinations of antiretroviral drugs turned HIV from a death sentence into a manageable chronic infection for those who could get them. The words "for those who could get them" are the history. The drugs were under patent and cost thousands of dollars a year per patient, in countries where annual health spending per person was a small fraction of that. What followed was an argument about patents and prices: generic manufacturers in India and Brazil produced far cheaper versions, South Africa's Treatment Action Campaign litigated and campaigned for access while its own government spent years disputing the mainstream science, and in <span class="num">2001</span> the World Trade Organization's Doha Declaration affirmed that its intellectual property rules should not prevent members from protecting public health.` },
            { p: `Then money arrived: the Global Fund in <span class="num">2002</span> and the United States PEPFAR program in <span class="num">2003</span> financed treatment at a scale no health ministry could have. Cumulative deaths from AIDS-related illness are estimated by UNAIDS in the tens of millions, and a comparable number of people are estimated to be living with HIV, most of them on treatment. This is the clearest case in the volume of a distribution problem being partly solved, and of how long it took.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that HIV/AIDS was solved by a scientific breakthrough. The breakthrough was in <span class="num">1996</span> and the deaths kept rising for years afterward, because the obstacle had stopped being scientific. It was the price of the drugs, the patent regime that set the price, the health systems needed to deliver a daily lifelong treatment, and the stigma that kept people from testing. The accurate claim names the second obstacle: an effective therapy existed from 1996, and closing the gap between the therapy and the patients took a decade of litigation, generic manufacturing, a trade-rules declaration in 2001 and two large financing bodies from 2002 and 2003.`
            } }
          ]
        },
        {
          heading: 'Ebola, and what makes an outbreak stoppable',
          blocks: [
            { p: `Ebola was first identified in <span class="num">1976</span> in outbreaks in what is now the Democratic Republic of the Congo and in Sudan. For nearly forty years it produced terrifying but contained outbreaks in rural areas, and the reason is a useful piece of epidemiology: a pathogen that makes people very sick very quickly limits its own spread, because the sick stop traveling. The West African epidemic of <span class="num">2013</span> to <span class="num">2016</span> broke that pattern because it reached cities and crossed borders in a region whose health systems had been damaged by war, with roughly twenty-eight thousand reported cases and eleven thousand reported deaths in Guinea, Liberia and Sierra Leone, both acknowledged as undercounts.` },
            { p: `The comparison with HIV is the teaching point. Ebola is far deadlier per case and far easier to contain, because its symptoms are immediate and unmistakable and transmission requires contact with bodily fluids. HIV is less lethal per exposure and vastly harder to contain, because it is invisible for years. Deadliness and containability are separate properties, and a student who conflates them will get the analysis of any epidemic wrong.` }
          ]
        }
      ],
      useThis: {
        tool: `Incubation period as the variable that decides scale. <em>The mechanism is that a pathogen with a long asymptomatic infectious period is distributed by ordinary travel before anyone knows it exists, while a pathogen that incapacitates quickly is carried only as far as a sick person can move. That is why HIV became global before it was named and why Ebola stayed rural for four decades, and it explains more about an epidemic&rsquo;s reach than the lethality does.</em>`,
        limit: `The pathogen's biology sets the possibilities and the society decides the outcome. War, urbanization, distrust of authorities, burial customs and the state of the health system all changed how far the same virus traveled, which is why the same Ebola virus behaved differently in 1976 and in 2014.`,
        comparison: `Against the <em>Columbian Exchange</em> in Topic 4.3: both are pathogens crossing into populations along new routes, but there the decisive variable was the absence of prior exposure across an entire hemisphere, producing mortality on a scale nothing in this chapter approaches. Here the populations are not immunologically naive to most of what circulates; what changed is the speed and density of the network.`
      },
      terms: [
        ['Zoonosis', 'A disease that crosses from animals into humans, the origin of most newly emergent human pathogens including influenza, HIV and Ebola.'],
        ['HIV', 'The virus identified in 1983 and 1984, transmissible for years before symptoms appear, which is why it was globally distributed before it was recognized.'],
        ['Antiretroviral therapy', 'The drug combinations available from 1996 that made HIV a manageable chronic infection, and whose price became the obstacle after 1996.'],
        ['Excess mortality', 'Deaths above the number expected from prior years, the method by which pandemic tolls are estimated when direct counts are unreliable.'],
        ['Public Health Emergency of International Concern', 'The formal WHO declaration created under the revised International Health Regulations of 2005, which triggers coordinated international response.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'longevity',
      num: '03',
      accent: 'iron',
      name: 'Diseases That Rose Because People Stopped Dying Young',
      navLabel: 'Diseases of longevity',
      dates: '1971 onward &nbsp;·&nbsp; The epidemiologic transition',
      thesis: `The key concept says some diseases occurred at higher incidence <em>merely</em> because of increased longevity, and that word is doing precise statistical work. A population where more people reach eighty will record more Alzheimer&rsquo;s cases even if an eighty-year-old&rsquo;s risk has not changed at all. Explaining that sentence correctly is worth more than listing the diseases.`,
      parts: [
        {
          heading: 'The epidemiologic transition',
          blocks: [
            { p: `The demographer Abdel Omran gave this pattern its name in <span class="num">1971</span>. The <span class="kt">epidemiologic transition</span> describes a shift in what people die of: from infectious and parasitic disease, famine and childbirth, which kill disproportionately young, toward chronic and degenerative conditions, which kill disproportionately old. Cardiovascular disease, stroke, cancer, diabetes and dementia are the conditions on the far side of it.` },
            { p: `Two mechanisms produce the shift and they should be kept apart. The first is <b>survivorship</b>. If infectious disease no longer kills you at three, you live to encounter the diseases of sixty and eighty, which were always there and were reached by fewer people. The second is <b>exposure change</b>. Tobacco, diets high in refined sugar and processed fat, sedentary work, air pollution and alcohol are risks that rose with urbanization, industrial food and rising income, and they raise age-specific risk rather than merely revealing it.` }
          ]
        },
        {
          heading: 'The statistic, stated so you can use it',
          blocks: [
            { p: `A <b>crude rate</b> counts cases per hundred thousand people in a population. An <b>age-standardized rate</b> recalculates that figure as if the population had a fixed reference age structure, so two countries or two decades can be compared without the age difference doing the work. The distinction is the whole of the "merely because of increased longevity" claim: crude rates of dementia and heart disease rose across the twentieth century in many countries while age-standardized rates of cardiovascular death actually fell substantially in high-income countries from the <span class="num">1970</span>s onward, as smoking declined and treatment improved.` },
            { p: `So the accurate sentence is not that people became more likely to get heart disease. It is that more people lived long enough to be at risk, so the number of cases rose, while an individual of a given age in a high-income country became less likely to die of it. Both halves are true at once, and holding both is the analysis the checkpoint wants.` },
            { p: `Alzheimer's disease makes the point most starkly. Alois Alzheimer described the condition in <span class="num">1906</span>, and it was regarded for decades as a rare disorder of the relatively young. It is now among the leading causes of death in a number of high-income countries, and the largest single reason is that the share of the population over eighty grew. Better recognition and diagnosis account for part of the recorded increase too, which is a further reason to be careful: a rise in diagnosed cases is not the same measurement as a rise in cases.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that these are "diseases of the rich world" and stop there. The transition is happening in middle-income countries too, and faster, which produces a <b>double burden</b>: a health system still fighting tuberculosis and childhood diarrhea while diabetes and stroke rise in the same population, with no additional money. Tobacco is the sharpest case, because as smoking fell in high-income countries the industry's growth moved to lower-income markets, so the exposure did not disappear, it relocated. A country carrying both burdens at once is the common situation as of the <span class="num">2020</span>s, not an exception.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Age structure as a confounder. <em>The mechanism is arithmetic: incidence counted per head of population rises when the population ages, because the condition is concentrated in age groups that now contain more people, and this happens with no change whatever in an individual&rsquo;s risk. Age-standardization is how epidemiologists separate the two, and naming that separation is how a student shows they understand the key concept rather than repeating it.</em>`,
        limit: `Survivorship is not the only cause. Tobacco, diet, sedentary work and air pollution genuinely raised age-specific risk for several of these conditions, so the honest formulation is that longevity explains a large part of the rise in recorded cases and does not explain all of it.`,
        comparison: `Against <em>famine mortality</em> in Topic 5.9 and Unit 6: a nineteenth-century industrial city and a twenty-first-century one both have high recorded death rates from their characteristic conditions, and the characteristic conditions changed completely. What a society dies of is one of the most sensitive available indicators of how it lives, which is why the epidemiologic transition is usable as evidence in almost any question about standard of living.`
      },
      terms: [
        ['Epidemiologic transition', 'Omran\'s 1971 description of the shift from infectious and parasitic causes of death toward chronic and degenerative ones as mortality falls.'],
        ['Crude rate', 'Cases per unit of population with no adjustment, which rises automatically when a population ages.'],
        ['Age-standardized rate', 'A rate recalculated against a fixed reference age structure, which is what allows honest comparison across time or between countries.'],
        ['Double burden', 'A health system carrying infectious diseases of poverty and chronic diseases of longevity simultaneously, common in middle-income countries.'],
        ['Non-communicable disease', 'A condition not passed between people, such as heart disease, stroke, diabetes, cancer and dementia, which became the leading cause of death worldwide.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'aftermath',
      num: '04',
      accent: 'oxide',
      name: 'What Outbreaks Break, and What They Build',
      navLabel: 'Disruption and institutions',
      dates: '1851 to 2020 &nbsp;·&nbsp; From sanitary conferences to the pandemic treaty debate',
      thesis: `The key concept says outbreaks caused social disruption and spurred technological and medical advances, and the second half is where the durable history is. Almost every institution of international public health exists because an epidemic embarrassed states into building it, and the pattern of build, forget, rebuild repeats across the whole period.`,
      parts: [
        {
          heading: 'Disruption is political as often as it is medical',
          blocks: [
            { p: `An epidemic does predictable things to a society, and they are worth knowing as a set because they recur. It suspends ordinary economic life, because the measures that reduce transmission are measures that stop people gathering. It concentrates its damage on the people who cannot stay home, which in most epidemics means the poor, and on those in crowded institutional settings. It produces blame, usually directed at outsiders or at a stigmatized group, which is visible in the naming of the <span class="num">1918</span> pandemic, in the treatment of gay men and Haitians in the early years of AIDS, and in harassment reported during later outbreaks.` },
            { p: `And it strains the relationship between citizens and the state, because public health measures are coercive by nature. Quarantine, contact tracing, compulsory vaccination and closure orders are all exercises of power over individuals justified by a collective benefit, and societies have disagreed about that trade for as long as the measures have existed. Presenting that disagreement as ignorance is a mistake; it is a real argument about the limits of state authority, and it has been made by serious people in every epidemic in this chapter.` }
          ]
        },
        {
          heading: 'The institutions epidemics built',
          blocks: [
            { p: `States began meeting about disease when cholera reached Europe: the first International Sanitary Conference was held in <span class="num">1851</span>, and its logic was frankly commercial, since quarantine of ships was expensive and every state wanted the others to bear the cost. That is the mechanism to keep. International health cooperation grows where an epidemic makes unilateral action useless, and it stalls where it does not.` },
            { p: `The World Health Organization was founded in <span class="num">1948</span> as a specialized agency of the new United Nations, which is the Topic 9.8 chapter's subject. It ran the smallpox eradication campaign that succeeded and the malaria campaign that did not, and the difference between them is instructive: smallpox had no animal reservoir, an obvious rash that made case-finding possible, and a heat-stable vaccine that gave lasting protection, while malaria had none of those. The severe acute respiratory syndrome outbreak of <span class="num">2002</span> and <span class="num">2003</span> exposed how little authority the organization had to compel reporting, and the International Health Regulations were revised in <span class="num">2005</span> to create the formal emergency declaration used in the Ebola and coronavirus emergencies that followed.` },
            { p: `Outbreaks also drive the science. The AIDS epidemic accelerated antiviral drug development and reshaped how clinical trials are run, partly because activist organizations demanded faster access to experimental drugs and won changes to the regulatory process. The Ebola epidemic of <span class="num">2013</span> to <span class="num">2016</span> pushed a vaccine that had sat undeveloped for years through trials, and it was approved in <span class="num">2019</span>. Messenger RNA vaccine platforms, under development for years without a commercial application, were authorized against COVID-19 in December <span class="num">2020</span>, less than a year after the virus was sequenced.` }
          ]
        },
        {
          heading: 'How to quote a death toll',
          blocks: [
            { p: `Unit 9 is full of numbers that look precise and are not, and pandemic tolls are the clearest case. There are three different quantities, and the difference between them is not a technicality.` },
            { p: `A <b>reported count</b> is deaths recorded and attributed by a health system, and it is limited by testing, by certification practice and sometimes by political pressure. A <b>modeled estimate</b> reconstructs the total from partial data. <span class="kt">Excess mortality</span> compares all deaths from all causes against the number that would have been expected, which captures both uncounted cases and deaths caused indirectly by an overwhelmed health system, and misses nothing because it does not require anyone to identify a cause.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the gap between the two COVID numbers',
              html: `In <span class="num">2022</span> the World Health Organization published an excess mortality estimate for the first two years of the COVID-19 pandemic of roughly fifteen million deaths, with a stated uncertainty range of about thirteen to seventeen million, against reported COVID-19 deaths for the same period of roughly five million. The gap is nearly threefold, and it is not a scandal: it is what happens when you change the question from "how many deaths were attributed to this cause" to "how many more people died than would have". Both numbers are real measurements of different things. A student who can explain that gap can handle every contested figure in this unit, and the same discipline applies to the 1918 range in section 02 and to the poverty numbers in the Topic 9.4 chapter.`
            } },
            { p: `So the rule for this whole volume: say what kind of number it is, give a range where the honest sources give a range, and attach a date. "Reported deaths were about five million; the World Health Organization's excess-mortality estimate for the same period was about fifteen million" is a stronger sentence than either number alone, and it is the kind of sentence that earns credit for sourcing.` }
          ]
        }
      ],
      useThis: {
        tool: `Epidemic as institution-builder. <em>The mechanism is that an infectious disease makes unilateral action useless, because a state that controls its own outbreak is still exposed to its neighbors, so it creates an incentive for cooperation that ordinary politics does not. That is why sanitary conferences began in 1851, why the International Health Regulations were revised in 2005 after SARS, and why the pattern is reactive: institutions get built after the outbreak that showed they were missing.</em>`,
        limit: `The incentive is strongest during the emergency and fades afterward, which is why funding, stockpiles and surveillance systems built after one outbreak are routinely depleted before the next. Cooperation also stops at the point where it would constrain a state's own decisions, which is the limit the Topic 9.8 chapter examines.`,
        comparison: `Against <em>quarantine</em> in Topic 2.6: the Italian city-states isolating ships during plague outbreaks in the fourteenth century were making the same calculation as the delegates of 1851, and doing it with no idea what caused the disease. The intervention is the same, the theory behind it is completely different, and the fact that it worked in both cases is a good reminder that a correct mechanism is not always required for an effective policy.`
      },
      terms: [
        ['Excess mortality', 'Total deaths above the expected baseline, which captures both uncounted cases and indirect deaths and does not depend on cause attribution.'],
        ['International Health Regulations', 'The binding rules on outbreak reporting among WHO member states, revised in 2005 after SARS to create the formal emergency declaration.'],
        ['Eradication', 'The permanent global elimination of a pathogen, achieved for smallpox by 1980 and attempted unsuccessfully for malaria between 1955 and 1969.'],
        ['Stigma', 'The social marking of a group as the source of a disease, which recurs in most epidemics and reliably drives infected people away from testing and care.'],
        ['Conditionality of cooperation', 'The pattern by which states cooperate on disease when unilateral action cannot protect them, and stop where cooperation would constrain their own choices.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the mechanism that connects them. The last card is a technique rather than a topic, and it will serve you in every remaining chapter of this unit.`,
    pairs: [
      {
        category: 'Distribution',
        title: 'Diseases of poverty persist because delivery costs money, not because the science is missing',
        body: `Mosquito transmission of malaria was demonstrated in 1897, artemisinin-based treatment was developed from a program begun in 1967, insecticide-treated nets and rapid tests scaled in the 2000s, and the first malaria vaccine was recommended for children in 2021. The World Health Organization has still estimated on the order of two hundred million cases a year, with several hundred thousand deaths concentrated among African children under five. Tuberculosis is curable with a six-month drug course, which fails precisely where a patient cannot reach a clinic repeatedly, and the interruptions breed resistance. Cholera is stopped by separating sewage from drinking water, which is capital rather than medicine. In all three the binding constraint after mid-century was money and infrastructure, not knowledge.`
      },
      {
        category: 'Mechanism',
        title: 'How long a pathogen hides decides how far it goes',
        body: `Ebola, identified in 1976, incapacitates within days, so for nearly forty years its outbreaks stayed rural and self-limiting, and it took cities, open borders and war-damaged health systems to produce the West African epidemic of 2013 to 2016 with roughly twenty-eight thousand reported cases. HIV can be transmitted for years before symptoms appear, so by the time it was reported in 1981 and identified in 1983 and 1984 it was already distributed across continents by ordinary travel. Ebola is far deadlier per case and far more containable; HIV is the reverse. Deadliness and containability are separate properties, and the incubation period, not the case fatality rate, is what predicts reach.`
      },
      {
        category: 'Statistics',
        title: 'More cases of Alzheimer\'s does not mean a higher risk of Alzheimer\'s',
        body: `Omran named the epidemiologic transition in 1971: as infectious and parasitic deaths fall, chronic and degenerative conditions take their place, because people survive to the ages at which those conditions occur. Crude rates of dementia and heart disease rose across the twentieth century in many countries, and age-standardized cardiovascular death rates fell substantially in high-income countries from the 1970s as smoking declined and treatment improved. Both statements are true, and holding them together is the key concept's word "merely" explained. The complication worth adding is the double burden: middle-income countries are running the transition faster and carrying tuberculosis and diabetes in the same population on the same budget.`
      },
      {
        category: 'Sourcing',
        title: 'Name the kind of number before you use it',
        body: `Estimates of 1918 influenza deaths run from roughly seventeen million to a hundred million, because every one of them extrapolates from excess mortality in countries with usable records to countries without them, and India drives much of the spread. For COVID-19, reported deaths in the first two years were around five million while the World Health Organization's excess-mortality estimate for the same period was around fifteen million with a stated range of about thirteen to seventeen million. Neither figure is wrong; they measure different quantities. A reported count depends on testing and certification, a modeled estimate reconstructs from partial data, and excess mortality asks only how many more people died than expected. Say which one you are using, give the range, attach the date, and the sourcing takes care of itself.`
      }
    ]
  }
};
