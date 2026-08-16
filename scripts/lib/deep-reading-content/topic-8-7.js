'use strict';

/**
 * Topic 8.7, Global Resistance to Established Power Structures After 1900: the
 * deep reading.
 *
 * Why this exists. The success criteria ask for two of Gandhi, King and Mandela
 * with the campaigns named and with nonviolence explained as a deliberate
 * strategy rather than passivity; for two of the four CED cases of militarized
 * state response, explaining how each intensified conflict rather than resolving
 * it; and for Shining Path and Al-Qaeda distinguished analytically from both of
 * the other categories. The First & 10 names all of it. What a survey cannot do
 * is explain why a nonviolent campaign works in one place and stalls in another,
 * which is a question about the opponent rather than about the movement, and why
 * the CED's verb is "intensified" rather than "repressed".
 *
 * The organizing argument: each of the three categories is a wager about an
 * audience. Who has to see this, and what will they do when they do. Setting
 * them side by side is an analytical move and not a moral one, and the chapter
 * says so in the text, because a student who reads it as a ranking has missed
 * the distinction the criteria are asking for.
 *
 * Four things carried deliberately:
 *
 *   1. Albany against Birmingham, one movement and one method twelve months
 *      apart with opposite results. It is the closest thing this topic has to a
 *      controlled experiment, and it proves the mechanism is about the
 *      opponent's chosen response rather than about moral persuasion.
 *   2. South Africa's franchise as the reason the Gandhian bet did not pay
 *      there. The audience that could remove the government excluded the people
 *      making the demand, which is a structural fact and not a claim about
 *      anyone's character.
 *   3. The Cold War thread promised in the Topic 8.1 chapter, returned to here:
 *      American segregation became a foreign policy liability once it could be
 *      reported to newly independent states, and the government said so in a
 *      filed brief.
 *   4. Contested death tolls given as what they are, which in this topic is
 *      almost always a truth commission's estimate rather than a count.
 */

module.exports = {
  topicKey: 't8-7',
  slug: 'topic-8-7-global-resistance',
  sourceFile: 'deep-reading-topic-8-7-global-resistance.html',
  lessonFile: 'lesson-8-7-global-resistance.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.7: Three Bets About Who Is Watching',
  eyebrow: 'Topic 8.7 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Three Bets About Who Is <em>Watching</em>',
  deck: `Nonviolent campaigns, states that answered opposition with terror, and movements that attacked civilians are usually taught as a moral ranking. Read as methods, each is a wager about an audience: who has to see this, and what they will do once they have. This chapter takes the three apart and finds the differences where the exam wants them, in who acts, who is harmed, and what the harm is meant to produce.`,
  meta: ['Four sections', 'Three categories, one analytical question', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.7 &nbsp;·&nbsp; Three Bets About Who Is Watching &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 and 02 are the nonviolence criterion, and 02 is the one worth reading slowly, because a method is best understood at the point where it stops working. Sections 03 and 04 are the other two categories, and section 04 closes with the three-way distinction the criteria ask you to make.`,
    steps: [
      `<b>01 Nonviolence as a technique:</b> Gandhi and King, the dilemma the method creates, and the campaign that showed it can be escaped.`,
      `<b>02 Mandela:</b> the same method against a state whose voters excluded the people making the demand, and what ended apartheid instead.`,
      `<b>03 States that answered with force:</b> why the CED's verb is intensified, in Chile, Spain and Uganda, plus the structural case.`,
      `<b>04 Civilians as targets:</b> Shining Path and Al-Qaeda, and then the distinction between all three categories, stated once and precisely.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'nonviolence',
      num: '01',
      accent: 'gold',
      name: 'Nonviolence Is a Technique, Not a Temperament',
      navLabel: 'Nonviolence as method',
      dates: '1906 to 1965 &nbsp;·&nbsp; The Transvaal registration campaign to the Voting Rights Act',
      thesis: `<span class="kt">Satyagraha</span> and nonviolent direct action are coercive strategies. They work by manufacturing a dilemma: the authority must either concede or repress in front of an audience whose reaction it cannot afford. What that means is that the method's success depends on the opponent's available responses as much as on the movement's discipline, and there is a case in this section where the opponent found a third response.`,
      parts: [
        {
          heading: 'Gandhi: choosing the law you break',
          blocks: [
            { p: `Gandhi worked out the method in South Africa, not India. From <span class="num">1906</span> he organized Indian residents of the Transvaal against a registration law, and by the time he left for India in <span class="num">1914</span> he had a name for what he was doing and a body of practice behind it. Satyagraha translates roughly as holding to truth, and Gandhi insisted it was the opposite of submission: it was noncooperation, organized, disciplined, and carried out in the open by people prepared to be arrested for it.` },
            { p: `The Salt March shows the strategy at the level a student can reuse. In <span class="num">1930</span> the colonial government held a monopoly on the manufacture and sale of salt and taxed it. Gandhi chose that law rather than a land law or a franchise law, and the choice was deliberate on three counts. Salt is used by everyone, so the tax reached the poorest household in India and the demand was legible without explanation. Breaking the law required no weapon and no organization beyond walking to the coast and picking up salt, so it could be done by hundreds of thousands of people at once. And a government defending a tax on salt is in a poor argumentative position in front of any audience at all.` },
            { p: `He walked about 240 miles from Sabarmati to the coast at Dandi over roughly three weeks and made salt on 6 April <span class="num">1930</span>. Then the dilemma closed. Enforce the law and the state is arresting people for boiling seawater, tens of thousands of them, filling its own jails and its opponents' newspapers. Decline to enforce it and the law is dead and so is the principle that colonial law is obeyed. The British administration chose enforcement, arrested Gandhi in May, and at the Dharasana salt works watched police beat column after column of marchers who did not raise their hands.` },
            { p: `That is the mechanism, and notice what it is not. It is not that suffering changes an opponent's mind. It is that visible suffering, deliberately accepted, transfers the argument to a third party, and the campaign wins if that third party can impose a cost. Within a year Gandhi was negotiating with the viceroy in the Gandhi-Irwin Pact of March <span class="num">1931</span> and sailing to London for a constitutional conference. The tax was not repealed then, and that is worth saying plainly, because the win was positional rather than legislative.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the method depends on witnesses, and so does the evidence for it',
              html: `What happened at Dharasana in May <span class="num">1930</span> is known largely from a dispatch by Webb Miller, an American correspondent for the United Press, which was reprinted in hundreds of newspapers and read into the record of debates far from India. That is an unusually direct case of the source and the strategy being the same thing: the campaign was designed to be reported, and the report is the evidence historians use. Two cautions follow. Visibility is selected, so the incidents we know in detail are the ones a correspondent reached, and colonial repression in places no reporter went is underdocumented in exactly the proportion that made it safe. And a source produced by a sympathetic witness at a staged event should be checked against administrative records, police reports and hostile accounts, which for this campaign largely survive.`
            } }
          ]
        },
        {
          heading: 'King: the same technique, and the campaign that showed it can be escaped',
          blocks: [
            { p: `Martin Luther King Jr. did not borrow Gandhi's vocabulary as decoration. The Montgomery bus boycott of <span class="num">1955</span> and <span class="num">1956</span> was a year-long withdrawal of fare revenue by people who had to organize their own transport to work, which is noncooperation in the Gandhian sense and cost the participants a great deal. King traveled to India in <span class="num">1959</span> and studied the method where it had been used. What he brought back was a theory of political pressure, set out in the Letter from Birmingham Jail in April <span class="num">1963</span>: nonviolent direct action exists to create a crisis and a tension that force a community which has refused to negotiate into negotiating. He said, in effect, that the method manufactures the emergency it then resolves.` },
            { p: `Now the case that proves the mechanism, because it is the closest thing this topic has to a controlled test. In Albany, Georgia, in <span class="num">1961</span> and <span class="num">1962</span>, the same organizations ran the same kind of campaign and got very little. The reason was the chief of police, Laurie Pritchett, who had read about Gandhi's methods and instructed his officers accordingly. He arrested demonstrators politely, in large numbers, and dispersed them to jails across surrounding counties so that no single facility overflowed. He arranged for King's bail so that a jailed leader did not become a photograph. There was no fire hose and no dog, so there was no image, so there was no national audience, so no federal cost was imposed on anybody.` },
            { p: `Birmingham in <span class="num">1963</span> was chosen with Albany in mind. Eugene Connor, the city's commissioner of public safety, could be relied on to do what Pritchett had refused to do, and on 3 May his officers turned fire hoses and police dogs on demonstrators, many of them schoolchildren. The photographs ran nationally and internationally within a day. A local agreement followed on 10 May, President Kennedy addressed the nation on civil rights on 11 June, and the Civil Rights Act passed in July <span class="num">1964</span>. Same method, same movement, twelve months apart, and the variable was the opponent's choice of response.` },
            { p: `There is a Cold War audience here too, promised in the Topic 8.1 chapter and paid off now. The legal historian Mary Dudziak documented how far American segregation had become a foreign policy problem once Soviet broadcasts could report it to audiences in newly independent African and Asian states whose alignment both superpowers were courting. The federal government's own brief to the Supreme Court in <span class="num">1952</span> in the school segregation case included a statement from the Secretary of State on the damage segregation was doing to American foreign relations. That is the displacement argument of this volume running backwards: a global rivalry reaching into the domestic politics of one of its two participants.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that nonviolence works by appealing to the conscience of the oppressor. Albany is the refutation, and it is cleaner than any argument: the movement was disciplined, the cause was identical, and the campaign stalled because a police chief declined to supply the images. The accurate claim is narrower and far more useful. Nonviolent campaigning works when three conditions hold together: the opponent has to answer to an audience it cannot ignore, the movement holds its discipline under provocation, and the repression is visible to that audience. Where any one is missing the method loses its grip, which is not a criticism of the people who used it but the reason section 02 exists.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Nonviolent direct action as a manufactured dilemma. <em>The mechanism is that a campaign selects a law or a practice whose enforcement is visible, whose violation is easy at mass scale and whose defense is embarrassing, then breaks it in public and refuses to fight back, so the authority must either concede or be seen repressing peaceful people by an audience able to impose a cost on it.</em>`,
        limit: `It needs an opponent that answers to somebody. Laurie Pritchett escaped the dilemma in Albany by arresting people without brutality and dispersing them across county jails, and the campaign stalled with its discipline intact.`,
        comparison: `Against <em>Topic 8.5</em> on the machinery of nationalist movements: that chapter argues organization converts grievance into leverage, and this one specifies what the leverage is made of. Nkrumah's Positive Action in <span class="num">1950</span> is the same instrument in a third setting, which is why he named Gandhi as the model.`
      },
      terms: [
        ['Satyagraha', 'Gandhi’s term for disciplined mass noncooperation, worked out in South Africa from 1906 and defined against passivity rather than against violence alone.'],
        ['Nonviolent direct action', 'The deliberate creation of a public crisis through law-breaking that invites arrest, intended to force negotiation rather than to persuade.'],
        ['Salt March', 'The 1930 walk of about 240 miles to Dandi to break the salt monopoly, chosen because the tax reached everyone and the law was hard to defend in public.'],
        ['The Albany case', 'The 1961 to 1962 campaign that stalled because the police chief made mass arrests without visible violence, showing the method depends on the opponent’s response.'],
        ['Third-party audience', 'The public, government or foreign opinion whose reaction to visible repression is what actually imposes the cost, and without which the dilemma does not bite.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'mandela',
      num: '02',
      accent: 'rust',
      name: 'Mandela, and Where the Technique Runs Out',
      navLabel: 'Mandela and the limits',
      dates: '1952 to 1994 &nbsp;·&nbsp; The Defiance Campaign to the first democratic election',
      thesis: `The African National Congress ran a Gandhian campaign against <span class="kt">apartheid</span> for most of a decade and was banned for it. The turn to sabotage in <span class="num">1961</span> is the best evidence available of what the method in section 01 requires, because the condition that was missing in South Africa is structural and can be named exactly: the electorate that could remove the government excluded the people making the demand.`,
      parts: [
        {
          heading: 'The Defiance Campaign, Sharpeville, and the turn',
          blocks: [
            { p: `The Defiance Campaign of <span class="num">1952</span> was explicitly modeled on Gandhi's methods, which is unsurprising given where Gandhi had developed them. Volunteers deliberately broke the pass laws and the segregation regulations and presented themselves for arrest, several thousand of them, and the campaign built the ANC's membership sharply. The government answered with new legislation raising the penalties for civil disobedience, and the campaign was called off.` },
            { p: `On 21 March <span class="num">1960</span>, at Sharpeville, a crowd gathered at a police station in a protest against the pass laws called by the Pan Africanist Congress, a group that had recently broken away from the ANC. Police opened fire and killed <span class="num">69</span> people, many shot from behind as they ran. Within weeks the government declared a state of emergency, detained thousands, and banned both the ANC and the PAC outright, which removed the legal existence of the organizations that had been running the nonviolent campaign.` },
            { p: `In <span class="num">1961</span> Mandela and others founded <span class="kt">Umkhonto we Sizwe</span>, the Spear of the Nation, and began sabotage of power installations, government offices and infrastructure, with a stated policy of avoiding loss of life. He was arrested in <span class="num">1962</span>, tried again with others after a police raid on a farm at Rivonia, and sentenced to life imprisonment in June <span class="num">1964</span>. He served <span class="num">27</span> years.` },
            { p: `State the reason the earlier method did not deliver, because it is a mechanism and not an opinion. Apply the three conditions from section 01. Discipline was present. Visibility was present, and Sharpeville was photographed and condemned worldwide. What was absent was an audience with the power to impose a cost through the ordinary political channel: the government answered to an electorate defined by race, from which the overwhelming majority of the population was excluded by law. International opinion was appalled and, in <span class="num">1960</span>, had almost no instrument. A method that works by transferring the argument to a third party needs a third party holding something the government wants.` }
          ]
        },
        {
          heading: 'What ended apartheid, and where historians disagree',
          blocks: [
            { p: `Apartheid ended between <span class="num">1990</span> and <span class="num">1994</span>: the ANC was unbanned on 2 February <span class="num">1990</span>, Mandela was released on 11 February, negotiations ran for four years against continuing violence, and the first election with a universal franchise was held on 27 April <span class="num">1994</span>. Explaining why then, rather than in <span class="num">1976</span> or <span class="num">2004</span>, is a live historical argument with three main strands, and an essay that names them beats one that picks a favorite.` },
            { p: `<b>Internal resistance.</b> The Soweto uprising of June <span class="num">1976</span>, which began over the compulsory use of Afrikaans in schools and was met with lethal force, produced a generation of activists and a stream of recruits leaving the country for the ANC. Steve Biko's death in police custody in <span class="num">1977</span> did further damage abroad. In the <span class="num">1980</span>s the United Democratic Front from <span class="num">1983</span> and the trade union federation COSATU from <span class="num">1985</span> made large areas of the country expensive to administer, and the government ruled by successive states of emergency.` },
            { p: `<b>External and economic pressure.</b> Sports and cultural boycotts ran from the <span class="num">1960</span>s, and arms and oil embargoes followed. The decisive financial moment came in <span class="num">1985</span>, when a major American bank declined to roll over South African short-term loans and others followed, forcing the government into a debt standstill and closing the stock exchange. The United States Congress passed the Comprehensive Anti-Apartheid Act in <span class="num">1986</span> over a presidential veto. Business leaders inside South Africa began meeting the ANC in exile.` },
            { p: `<b>The Cold War ending.</b> The National Party had justified emergency rule for decades by describing the ANC, which was allied with the South African Communist Party and armed partly from the Soviet bloc, as a Soviet instrument. As Soviet power receded that argument lost its force, and the ANC lost a patron at the same time, so both sides had new reasons to deal. The regional settlement of December <span class="num">1988</span>, which arranged the withdrawal of Cuban forces from Angola and opened the way to Namibian independence in <span class="num">1990</span>, removed the war on the border that had underwritten the security argument. The Topic 8.8 chapter is what was happening at the other end of that thread.` },
            { p: `The dispute is about weight, and it is not merely academic: how much credit goes to sanctions and how much to South Africans is argued about by participants as well as historians, and the answer implies something about whether outside pressure works elsewhere. The defensible position is a sequencing claim of the kind the Topic 8.5 chapter makes about decolonization. Internal resistance made the country ungovernable at an acceptable cost, financial pressure removed the ability to borrow through it, and the end of the Cold War removed the justification and changed both sides' calculations. Name which you rank first and say why.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a truth commission is a powerful source with a mandate-shaped hole in it',
              html: `South Africa's Truth and Reconciliation Commission took testimony from the mid-<span class="num">1990</span>s and could grant amnesty for politically motivated acts fully disclosed, which produced admissions that no prosecution would ever have obtained. That is its value and also its shape. Amnesty rewards disclosure of what is already likely to be provable, testimony is given by people with reasons, and the mandate covered gross violations of human rights rather than the daily operation of the pass laws and forced removals, which harmed far more people and produced far less testimony. Read the same way as the Rettig and Valech commissions in Chile and the truth commission in Peru: excellent on named cases, deliberately bounded, and a source whose numbers are recognized cases rather than a count of everything that happened.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A franchise that excludes the claimants. <em>The mechanism is that nonviolent campaigning imposes a cost through an audience able to act on the government, and where the voting population is defined so as to exclude the people making the demand, the ordinary domestic channel is closed by law, so the pressure has to be routed outside the country or applied through the economy instead.</em>`,
        limit: `It explains why the Gandhian campaign did not deliver in 1952 and not why the settlement came in 1990. That needed internal ungovernability, a credit market that closed, and a Cold War justification that expired, and historians disagree about the ranking.`,
        comparison: `Against <em>India in section 01</em>: same method, same inheritance, and the difference is who the colonial or national government had to answer to. Britain governed India from a metropole with an electorate, a parliament and a press that could be reached; the National Party answered to an electorate that the policy in dispute was designed to protect.`
      },
      terms: [
        ['Apartheid', 'The South African system of racial classification and separation legislated from 1948, including the pass laws that the Defiance Campaign targeted.'],
        ['Defiance Campaign', 'The 1952 ANC campaign of deliberate law-breaking and arrest, modeled on Gandhi and answered with heavier penalties.'],
        ['Sharpeville', 'The killing of 69 protesters by police on 21 March 1960, after which both the ANC and the PAC were banned.'],
        ['Umkhonto we Sizwe', 'The armed wing founded in 1961 for sabotage of installations with a stated policy of avoiding loss of life, and the reason the nonviolence category fits Mandela imperfectly.'],
        ['Disinvestment and sanctions', 'The withdrawal of lending and trade from the mid-1980s, including the 1985 debt standstill and the 1986 American act passed over a veto.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'militarized',
      num: '03',
      accent: 'iron',
      name: 'States That Answered With Force',
      navLabel: 'Militarized states',
      dates: '1939 to 1990 &nbsp;·&nbsp; Franco&rsquo;s victory to Pinochet leaving the presidency',
      thesis: `The word the criteria use is intensified, and it is doing analytical work. In each of these cases force ended a political contest and did not end the dispute the contest was about, and the specific way it made things worse is different every time, which is what you have to name.`,
      parts: [
        {
          heading: 'Chile and Spain: two ways force outlasts itself',
          blocks: [
            { p: `<b>Chile.</b> On 11 September <span class="num">1973</span> the armed forces overthrew the elected government of Salvador Allende, who died in the presidential palace during the assault. The junta under Augusto Pinochet dissolved Congress, banned parties and unions, and set up a secret police that detained, tortured, exiled and killed political opponents. Chilean state commissions have since recognized roughly 3,200 people killed or disappeared and tens of thousands detained and tortured, and those are recognized cases rather than a complete count.` },
            { p: `Two mechanisms of intensification, and they are separable. First, the repression was exported: from <span class="num">1975</span> the security services of Chile, Argentina, Uruguay, Paraguay, Bolivia and Brazil coordinated the tracking and killing of exiles across borders and beyond the region, under the name Operation Condor, which turned six national conflicts into one transnational apparatus. Second, the regime wrote the terms of its own succession, in a constitution adopted in <span class="num">1980</span> under emergency conditions. Pinochet lost the plebiscite he had scheduled in <span class="num">1988</span>, left the presidency in <span class="num">1990</span> and remained commander of the army for eight more years, and Chilean politics organized itself around the coup and its inheritance for a generation afterward.` },
            { p: `<b>Spain.</b> Franco's forces won the civil war in <span class="num">1939</span> with German and Italian help and governed until his death in <span class="num">1975</span>. The postwar years brought executions, mass imprisonment and forced labor for the defeated, and the public use of Catalan and Basque was suppressed. Here the intensification is precise and traceable: the attempt to eliminate a regional identity by law helped convert a cultural and political claim into an armed one. <span class="kt">ETA</span> was founded in <span class="num">1959</span> by Basque nationalists who judged the older parties defeated, and in <span class="num">1973</span> it assassinated Franco's prime minister with a bomb in Madrid. Its campaign continued for decades after the dictatorship ended, through Spain's transition to democracy, and it did not announce a definitive end to armed activity until <span class="num">2011</span>.` },
            { p: `Hold the two side by side and the general point stands without being stretched. Repression removes the people who could have negotiated a settlement and leaves the grievance in place along with a record of what was done, so the conflict resumes later, in a different form, with the memory attached. It does not follow that repression never works for the state that uses it, and section 04 of the Topic 8.8 chapter contains a case where it did.` }
          ]
        },
        {
          heading: 'Uganda, and a structure rather than a man',
          blocks: [
            { p: `<b>Uganda.</b> Idi Amin took power in a coup in January <span class="num">1971</span> and ruled until <span class="num">1979</span>. In <span class="num">1972</span> he ordered the expulsion of Uganda's Asian population, roughly 70,000 to 80,000 people, most of them born in the country or long resident, and gave them about ninety days to leave. Their businesses were handed to political allies and much of the commercial economy stopped working, which is a mechanism worth naming: the expulsion was popular, and it removed the tax base and the distribution network that the state ran on. Estimates of the number of people killed by the regime run from about 100,000 to 500,000, and they are estimates in the strong sense, since no registration survived to be counted.` },
            { p: `The end shows the dynamic completely. In <span class="num">1978</span> Amin's forces invaded a strip of northern Tanzania. Tanzania counter-attacked, Ugandan exiles fought alongside, and Kampala fell in <span class="num">1979</span>. A regime whose principal instrument was force had, by then, no other instrument available, so an external adventure was a plausible way to hold the army together, and it brought a foreign army into the capital. Uganda's wars continued into the following decade.` },
            { p: `<b>And the structural case.</b> The CED's fourth example is not a man or a country. In his farewell address in January <span class="num">1961</span> President Eisenhower, a career soldier before he was a politician, warned that a permanent armaments industry combined with a large military establishment created the possibility of unwarranted influence over policy. The claim is about institutional incentives rather than conspiracy: an industry whose customers are governments has a permanent interest in the perception of threat, and it employs people in the districts of legislators who vote on procurement.` },
            { p: `Sitting next to that, and distinct from it, is the arms trade. Both superpowers supplied weapons to clients through the whole period, which is the transaction the Topic 8.3 chapter takes apart, and the weapons outlast the conflicts they are sent for. Afghanistan, Angola and Central America were all left with arms in circulation after their superpower patrons stopped paying, which is one reason those wars did not stop when the Cold War did. Keep the two claims separate in an essay, because the first is a contested argument about how policy gets made and the second is a documented fact about supply.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the files of a secret police, found by accident',
              html: `Repression is designed to be undocumented, so the sources are usually reconstructed later. Three routes matter here. Truth commissions gathered testimony under a mandate, as in Chile and later Peru and South Africa. Church bodies documented cases in real time, and in Chile the Vicariate of Solidarity, established by the archbishop of Santiago in <span class="num">1976</span>, collected records of the disappeared while the government denied they existed. And in <span class="num">1992</span> a Paraguayan investigator located a police archive outside Asuncion, since known as the Archives of Terror, which contained the coordination records of Operation Condor across several countries. Notice what that means for how you write. Before <span class="num">1992</span>, Condor was an allegation supported by exile testimony; afterward it is documented from the perpetrators' own paperwork. An absence of documents is not evidence that nothing happened, and it is not evidence that something did.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Repression as intensification. <em>The mechanism is that force removes the opponents who could have negotiated a settlement while leaving the underlying dispute in place and adding a grievance about the repression itself, so the conflict returns later in a harder form. Spain is the traceable case: banning a language and a party helped convert a regional political claim into an armed campaign that outlived the dictatorship by decades.</em>`,
        limit: `It is not a law that repression always fails on its own terms. The Chinese leadership used force in 1989 and remained in power, and the Topic 8.8 chapter treats that as the control case rather than an exception to be explained away.`,
        comparison: `Against <em>Topic 8.3</em> on Latin America: that chapter shows the United States working through militaries and existing institutions rather than by invasion, and this section shows what those militaries then did with the state. Chile appears in both because it is the same sequence viewed from two ends, the intervention and the government it produced.`
      },
      terms: [
        ['Junta', 'A government of military officers taking power by coup, as in Chile from 1973, which suspends the institutions through which the dispute had been argued.'],
        ['Operation Condor', 'The coordination from 1975 of six South American security services to track and kill exiles across borders, documented from a police archive found in Paraguay in 1992.'],
        ['ETA', 'The Basque separatist organization founded in 1959 under Franco’s suppression of regional identity, whose armed campaign outlasted the dictatorship by decades.'],
        ['Expulsion as policy', 'Amin’s 1972 removal of Uganda’s Asian population, popular at the time and destructive of the commercial economy and revenue base the state depended on.'],
        ['Military-industrial complex', 'Eisenhower’s 1961 term for the standing combination of armaments industry and military establishment, a claim about institutional incentives rather than about conspiracy.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'civilians',
      num: '04',
      accent: 'oxide',
      name: 'Civilians as Targets, and the Distinction That Matters',
      navLabel: 'Civilians as targets',
      dates: '1980 to 2001 &nbsp;·&nbsp; Chuschi to September 11',
      thesis: `Both movements in this section attacked people who were not combatants, on purpose, for reasons they stated in their own documents. The analytical task the criteria set is to say what those attacks were supposed to accomplish, because that is where the category differs from state repression and from the campaigns in section 01.`,
      parts: [
        {
          heading: 'Shining Path: a war on the people it claimed to represent',
          blocks: [
            { p: `<span class="kt">Shining Path</span> began as a faction of Peruvian communism led by Abimael Guzman, a philosophy lecturer at the university in Ayacucho, in one of the poorest regions of the country. It launched its armed campaign on 17 May <span class="num">1980</span> by burning ballot boxes in the village of Chuschi on the eve of Peru's first presidential election in seventeen years, and the choice of target announced the argument: the movement's enemy was not one government but electoral politics itself.` },
            { p: `Its strategy was a rural people's war, and its method against the rural population was terror. It killed local officials, cooperative organizers, aid workers and elected village authorities, on the reasoning that a community with functioning institutions has an alternative to the revolution and must be deprived of one. At Lucanamarca in <span class="num">1983</span> its fighters killed 69 villagers, an action Guzman later defended in an interview as necessary. In <span class="num">1992</span> it assassinated Maria Elena Moyano, a grassroots organizer in a Lima shantytown who had opposed it publicly, and set off a car bomb on a street in a middle-class district of the capital. Guzman was captured later that year and the movement collapsed quickly afterward, which tells you how centralized it had been.` },
            { p: `Peru's Truth and Reconciliation Commission reported in <span class="num">2003</span> that it estimated around 69,000 deaths across the conflict, attributing a majority to Shining Path and a large share to state forces and paramilitaries, and it found that roughly three quarters of the victims spoke Quechua or another indigenous language as their first language. Hold those two findings together, because together they are the whole point: a war fought in the name of the rural poor killed the rural poor, from both directions, in a country whose Spanish-speaking capital largely did not notice until the bombs reached it.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: 69,000 is an estimate produced by matching lists, not a count of bodies',
              html: `Peru's commission did not tally reported deaths and publish the total. Reported deaths were known to be a fraction of the real number, because the killing happened in remote districts whose residents had reason to distrust anyone taking names. Statisticians working with the commission combined several independent lists of victims, measured how much they overlapped, and estimated from the overlap how many deaths appeared on no list at all. That technique produces a figure with a range around it rather than a single number, and the published estimate carried one. Two consequences for your writing. Say estimated and give the source, and understand that this method is why the commission's figure was so much higher than the previously accepted total and why that jump was itself politically contested.`
            } }
          ]
        },
        {
          heading: 'Al-Qaeda, and then the three-way distinction',
          blocks: [
            { p: `<span class="kt">Al-Qaeda</span> was formed around <span class="num">1988</span> among the Arab volunteers who had come to Pakistan and Afghanistan during the war against the Soviet occupation, with Osama bin Laden as its principal organizer and financier. Its stated political aims, published in the <span class="num">1990</span>s, were the withdrawal of American military forces from the Arabian peninsula and the Middle East and the removal of Arab governments it regarded as illegitimate. Its method was attacks on civilian targets: the bombings of the American embassies in Nairobi and Dar es Salaam in August <span class="num">1998</span>, which killed more than two hundred people, the great majority of them Kenyan and Tanzanian passers-by and employees; the attack on a warship, the USS Cole, in <span class="num">2000</span>, which is the exception in the pattern and worth naming as one; and the attacks of 11 September <span class="num">2001</span>, which killed nearly 3,000 people.` },
            { p: `The strategy was provocation. The organization's own writings argued that spectacular attacks would draw a large military response into the region, and that the response would do the recruiting the movement could not do for itself. That is a claim about a mechanism, and it can be assessed as one rather than merely condemned. The invasions and long deployments that followed are the evidence on both sides of that assessment, and historians and political scientists disagree about how far the strategy achieved what it was designed to achieve. Note also that the organization did not win the aims it stated, which is a fact a student can use.` },
            { p: `<b>Now the distinction, which is what the criteria actually ask for.</b> All three categories in this topic are theories about how an audience produces political change, and they differ in three places you can name in one sentence each. <b>Who acts:</b> a movement without state power in the first and third categories, a government with an army and a police force in the second. <b>Who is harmed:</b> in the first, the participants themselves, deliberately and visibly; in the second, the identified opponents of the state; in the third, people chosen precisely because they are not participants. <b>What the harm is meant to produce:</b> in the first, a cost imposed by a watching third party; in the second, the removal of opponents and the deterrence of everyone else; in the third, a reaction from the opponent that recruits for the attacker.` },
            { p: `One more thing, said once and plainly. Studying these as three methods is an analytical move, not a moral ranking, and the analysis does not flatten the difference. Deliberately harming people who are not participants is distinguished from the other two in law as well as in this chapter, since the laws of war rest on the separation of combatants from noncombatants, and that separation is the thing the third category is built to ignore. You can explain a method precisely without endorsing it, and precision is what earns the marks here.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two errors, opposite in direction. The first is using the word terrorism as though it were an explanation. It is a category with a contested definition, and naming it tells a reader nothing about what the attackers wanted, who they attacked or what they expected the attack to cause, which is the entire content of KC-6.2.V.D. The second is collapsing the second and third categories together because both kill civilians. They differ in who acts and by what claimed authority, and that difference changes the evidence, since a state's violence leaves archives, budgets and chains of command while a clandestine movement's leaves communiques and captured documents. Write about method, target and intended effect, and the categories separate on their own.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Violence against noncombatants as a provocation strategy. <em>The mechanism is that an organization too small to defeat a state attacks people the state is obliged to protect, in order to force a response large enough and blunt enough to create the constituency the organization lacks. It is a bet on the opponent's overreaction rather than on the attacker's own strength, which is why the attacked population is a means rather than an objective.</em>`,
        limit: `The strategy is not self-executing and Shining Path is the counter-case: attacking the rural population it claimed to represent produced village self-defense forces and cost it exactly the base its own theory required. Assess it as a strategy with a record, not as a strategy that works.`,
        comparison: `Against <em>section 01</em>: nonviolent campaigning and civilian-targeting insurgency are both bets on how a third party reacts to violence, and they differ on who absorbs it. One accepts violence in public on itself to create a cost for the opponent; the other inflicts it on people who are not participants to provoke a response that recruits. Naming that as the difference is the comparison the criteria ask for.`
      },
      terms: [
        ['Shining Path', 'The Peruvian Maoist movement that began its campaign in 1980 and used violence against rural communities to remove the alternatives to itself.'],
        ['Al-Qaeda', 'The transnational network formed around 1988 whose stated aims were the withdrawal of American forces from the region and the removal of Arab governments it rejected.'],
        ['Provocation strategy', 'Attacking noncombatants in order to draw a disproportionate response expected to generate support for the attacker.'],
        ['Noncombatant', 'A person not taking part in hostilities, whose protection is the basis of the laws of war and the line the third category is built to cross.'],
        ['Truth commission', 'An official body that gathers testimony and estimates the scale of political violence, producing recognized cases and statistical estimates rather than a count.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `The first two cards are the nonviolence criterion, built as a comparison rather than as two biographies. The fourth is the distinction the third criterion asks for, and it is the sentence to have ready.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Albany and Birmingham are the same method twelve months apart, and the variable is the opponent',
        body: `Nonviolent direct action manufactures a dilemma: break a law whose enforcement is visible and whose defense is embarrassing, refuse to fight back, and the authority must either concede or repress peaceful people in front of an audience that can impose a cost. Gandhi chose the salt monopoly in 1930 because the tax reached every household, the law could be broken by anyone with a walk to the sea, and no government defends a salt tax comfortably. King's Albany campaign in 1961 and 1962 stalled with its discipline intact because Chief Laurie Pritchett arrested people without brutality and spread them across county jails, so there was no image and no national audience. Birmingham in 1963 produced fire hoses and dogs on 3 May, national coverage the next day, a presidential address in June and an act of Congress the following year. Same movement, same method, opposite results, and the difference is the response the opponent chose.`
      },
      {
        category: 'Comparison',
        title: 'The condition South Africa lacked was an audience that could vote',
        body: `The ANC's Defiance Campaign of 1952 was Gandhian by design, and it was answered with heavier penalties. After police killed 69 people at Sharpeville on 21 March 1960 the government banned both the ANC and the PAC, and Mandela helped found Umkhonto we Sizwe in 1961 for sabotage that was meant to avoid loss of life. Apply the mechanism rather than blaming the movement: discipline was there and visibility was there, and what was missing was a third party able to impose a cost, because the electorate the government answered to excluded by law the people making the demand. When pressure finally arrived it came through the channels that were open. Internal ungovernability from Soweto in 1976 through the UDF and COSATU in the 1980s, a credit market that closed in 1985, an American act passed over a veto in 1986, and a Cold War justification that expired. Historians disagree about the ranking, so name yours.`
      },
      {
        category: 'Causation',
        title: 'Intensified is a mechanism claim, and Spain is where you can trace it',
        body: `Franco won in 1939 and governed to 1975, executing and imprisoning the defeated and suppressing the public use of Basque and Catalan. ETA was founded in 1959 by Basque nationalists who considered the older parties beaten, assassinated Franco's prime minister in 1973, and did not announce a definitive end to armed activity until 2011, decades into a democracy. That is the mechanism: repression removed the people who could have negotiated and left the grievance in place with a new one attached. Chile shows a second version, where the repression was exported through Operation Condor from 1975 and the regime wrote its own succession into the constitution of 1980, so Chilean politics stayed organized around the coup for a generation. Uganda shows a third, where a state whose one instrument was force invaded Tanzania in 1978 and was removed by the counter-attack. Different mechanisms, one verb.`
      },
      {
        category: 'Distinction',
        title: 'Three categories, three answers to who is harmed and what the harm is for',
        body: `Ask three questions of any case and the CED categories separate. Who acts: a movement without state power in KC-6.2.V.A and V.D, a government with an army and a police force in V.C. Who is harmed: in nonviolent campaigning the participants themselves, deliberately and in public; in state repression the identified opponents of the state; in civilian-targeting insurgency people chosen precisely because they are not participants. What the harm is meant to produce: a cost imposed by a watching third party, the removal of opponents and the deterrence of the rest, or a reaction that recruits for the attacker. Shining Path's own record is the test of the third: Peru's truth commission estimated around 69,000 deaths and found roughly three quarters of the victims were indigenous-language speakers, so a war fought in the name of the rural poor killed the rural poor. Explaining a method is not endorsing it, and the exam is asking for the explanation.`
      }
    ]
  }
};
