'use strict';

/**
 * Topic 8.3, Effects of the Cold War: the deep reading.
 *
 * Why this exists. The success criteria ask for NATO and the Warsaw Pact as
 * instruments of influence, for MAD as the thing that pushed competition into
 * proxy wars, and for a comparison of American and Soviet methods across Korea,
 * Angola and Nicaragua. The First & 10 names all three regions. What it has no
 * room for is the transaction itself: what a superpower actually supplied, what
 * the local ally supplied, and what the exchange did to a war that would
 * otherwise have been fought with local resources and ended when they ran out.
 *
 * The organizing argument: superpower supply is a mechanism with a measurable
 * effect, which is that it removes the resource ceiling on a local conflict. A
 * poor country's civil war ends when one side cannot pay for the next campaign.
 * An externally supplied civil war does not have that stopping point, which is
 * why the wars in this chapter are so long.
 *
 * Three things carried deliberately:
 *
 *   1. The local side is an actor with its own aims, not a puppet. Every case
 *      here began as a local political conflict, and treating these wars as
 *      superpower episodes erases the people whose war it was. That is stated in
 *      the chapter and it is also the historiographical correction of the last
 *      thirty years.
 *   2. The Ogaden switch of 1977 to 1978, where both superpowers changed clients
 *      in the same war. Nothing else in the unit shows so cleanly that alignment
 *      was instrumental in both directions.
 *   3. The asymmetry between how each superpower behaved inside its own sphere
 *      and outside it: Soviet armored intervention in Hungary and Czechoslovakia
 *      against covert American operations in Iran, Guatemala and Chile. That
 *      contrast is the strongest comparison available to the Topic 8.9 capstone.
 */

module.exports = {
  topicKey: 't8-3',
  slug: 'topic-8-3-effects-cold-war',
  sourceFile: 'deep-reading-topic-8-3-effects-cold-war.html',
  lessonFile: 'lesson-8-3-effects-cold-war.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.3: Wars by Other Hands',
  eyebrow: 'Topic 8.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Wars by Other <em>Hands</em>',
  deck: `The superpowers never fought each other, and their competition killed several million people. This chapter explains how that is possible by taking the proxy war apart as a transaction: what Washington and Moscow supplied, what the local ally supplied, and why a war paid for from outside does not stop when local resources run out.`,
  meta: ['Four sections', 'The transaction, then three regions', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.3 &nbsp;·&nbsp; Wars by Other Hands &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the mechanism and the other three are the cases it explains, chosen to cover the three regions the success criteria name. Read 01 first even if you only need one region, because the comparison a checkpoint asks for is a comparison of methods, and methods is what 01 sets up.`,
    steps: [
      `<b>01 The transaction:</b> what each side actually supplied, and what supply does to a local war.`,
      `<b>02 Korea:</b> the first test, and the precedent it set for how far the superpowers would go.`,
      `<b>03 Africa:</b> the Congo, Angola, and the war where both superpowers swapped clients.`,
      `<b>04 Latin America:</b> why intervention in the American hemisphere was usually covert and quick.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'transaction',
      num: '01',
      accent: 'gold',
      name: 'What a Proxy War Actually Is',
      navLabel: 'The transaction',
      dates: 'c. 1950 to 1990 &nbsp;·&nbsp; The pattern the cases share',
      thesis: `A <span class="kt">proxy war</span> is an exchange, and both parties get something. The superpower gets a contest it can influence without risking a direct clash. The local ally gets weapons, money and diplomatic cover it could not otherwise raise, which lets it pursue a political aim it already had.`,
      parts: [
        {
          heading: 'What each side supplies',
          blocks: [
            { p: `From the outside came four things, and it is worth separating them because they have different effects. <b>Weapons</b>, usually small arms, artillery, armored vehicles and eventually aircraft and anti-aircraft missiles. <b>Money</b>, which pays soldiers and buys the food an army in the field consumes. <b>Training and advisers</b>, which is the item that converts a militia into a force capable of holding ground. And <b>diplomatic cover</b>, above all a veto at the United Nations Security Council, which is why a client of either superpower could rarely be sanctioned or disarmed by the international system.` },
            { p: `From the inside came the things no outsider can supply: knowledge of the terrain, a population willing to feed and hide fighters, a political claim that recruits people, and the willingness to take casualties. That inventory is the reason the outside patron is not in control. The Vietnamese, Angolan, Ethiopian and Nicaraguan movements in this chapter had aims that predated their patrons and that they pursued when the patron would have preferred otherwise.` },
            { p: `Now the mechanism this chapter exists to state. A civil war fought with local resources has a natural ceiling: it ends, or freezes, when one side can no longer field, feed and arm a force. External supply removes the ceiling. Both sides can be resupplied indefinitely, so the conflict runs until a patron withdraws, which typically happens for reasons in Moscow or Washington rather than reasons in the country fighting. That is why so many of these wars ran for a decade or more, and why several ended within a few years of <span class="num">1989</span>.` }
          ]
        },
        {
          heading: 'Why the labels were often locally chosen',
          blocks: [
            { p: `A second-order effect matters as much as the first. Once both superpowers were buying allies, calling yourself communist or anti-communist became a way to get funded. A movement seeking land redistribution had reason to describe its program in Marxist terms when Moscow was the plausible supplier, and a rival faction had reason to present itself in Washington as the anti-communist option, whatever either believed. Some of the ideological alignment in this chapter is genuine, some of it is a funding application, and telling them apart in a specific case requires evidence about what the movement did before it had a patron.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that these wars were caused by the Cold War, and do not write that the superpowers were fighting each other through puppets. Every case in this chapter began in a local dispute over land, ethnicity, colonial succession or class that would have existed with no superpowers at all. What superpower involvement changed was scale, duration and lethality: it removed the resource ceiling, hardened factional lines into permanent armies, and made settlement depend on decisions taken in two foreign capitals. The precise claim is that the Cold War <b>internationalized and prolonged</b> local conflicts, which is a smaller statement than causing them and a much stronger one to defend, because you can show the local causes and the supply records side by side.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `External supply removes the resource ceiling. <em>The mechanism is that a locally financed war ends when one side can no longer feed, pay and arm a force, while a war supplied from outside can be resupplied indefinitely, so it continues until a patron decides to stop for reasons of its own. That is why these conflicts run a decade or more and why several ended within a few years of 1989.</em>`,
        limit: `Supply does not buy control. Local movements had aims that predated the patron and repeatedly acted against the patron's preferences, which is why both superpowers spent the period frustrated by allies they were paying for.`,
        comparison: `Against <em>Topic 8.2</em> on alliances: an alliance is a place a superpower has committed to defend directly, and a proxy war is what happens where it has not. The map of the fighting is the map of what was not covered by Article 5 or by the Warsaw Pact.`
      },
      terms: [
        ['Proxy war', 'A conflict in which rival powers arm, fund and advise opposing local sides rather than fighting each other directly.'],
        ['Client state', 'A state or movement dependent on a great power for arms, money or protection and expected to align with it in return.'],
        ['Military advisers', 'Foreign officers sent to train and direct a local force, the item of aid that converts a militia into an army able to hold ground.'],
        ['Diplomatic cover', 'Protection at the United Nations, above all a Security Council veto, which shielded a superpower client from collective action.'],
        ['Internationalization', 'The process by which superpower supply turned a local political conflict into a longer, better-armed and harder-to-settle war.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'korea',
      num: '02',
      accent: 'rust',
      name: 'Korea: The First Test, and the Precedent',
      navLabel: 'Korea',
      dates: '1950 to 1953 &nbsp;·&nbsp; Invasion to armistice',
      thesis: `Korea established the rules everyone followed afterward: the superpowers would supply, advise and even fight in a proxy conflict, and would stop well short of attacking each other's territory, because both preferred a stalemate to a general war.`,
      parts: [
        {
          heading: 'How the war began, and how the UN authorized it',
          blocks: [
            { p: `Korea had been a Japanese colony since <span class="num">1910</span>. In <span class="num">1945</span> it was divided at the 38th parallel for the purpose of accepting the Japanese surrender, Soviet forces to the north and American forces to the south, and the temporary line hardened into two states in <span class="num">1948</span>, each claiming the whole peninsula and each led by a government its occupier had installed. North Korean forces crossed the parallel in June <span class="num">1950</span>, with Stalin's agreement, which Soviet archives opened after <span class="num">1991</span> have documented.` },
            { p: `The United Nations authorized a military response, which was possible only because the Soviet delegation was boycotting the Security Council at the time in protest at the seating of the Republic of China rather than the new People's Republic. The boycott is a detail worth carrying, because it is the reason the Korean War is the one major Cold War conflict fought under a UN flag, and because Moscow never repeated the mistake.` },
            { p: `The war then ran through four phases in three years: a North Korean advance that nearly took the whole peninsula, an American amphibious landing at Incheon in September <span class="num">1950</span> that reversed it, a UN advance to the Chinese border that brought several hundred thousand Chinese troops into the war in October and November, and two years of near-static fighting around the original line while negotiators argued, largely over prisoner repatriation. The armistice signed in July <span class="num">1953</span> left the border almost where it had been in <span class="num">1950</span>. No peace treaty has ever been signed.` }
          ]
        },
        {
          heading: 'The limits both sides observed',
          blocks: [
            { p: `The instructive part is what did not happen. Soviet pilots flew combat missions over Korea, in Soviet aircraft, and both governments took care that this was not publicly acknowledged, because acknowledgment would have required a response. American commanders proposed striking Chinese bases across the Yalu and using nuclear weapons; the president refused and eventually dismissed the general who pressed hardest, which is the clearest single statement of the rule that a proxy war stays limited. Each side accepted a costly stalemate rather than an escalation that might not stop.` },
            { p: `The human cost is very large and is genuinely uncertain. Estimates of total deaths, military and civilian on all sides, commonly run in the range of two to four million, with civilians the majority, and the figures for North Korean and Chinese losses in particular rest on incomplete records. Cite the range and say it is a range; a confident single number for Korean War deaths is not something the evidence supports.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Soviet archives changed this story after 1991',
              html: `For forty years the question of who authorized the invasion was argued from inference. Documents released from Soviet and Chinese archives after <span class="num">1991</span>, including exchanges between Stalin, Mao and Kim Il Sung, showed that Kim pressed repeatedly for permission and that Stalin approved in <span class="num">1950</span> after previously refusing, apparently judging American intervention unlikely. That is a case where new evidence settled a real dispute, and it is worth knowing for two reasons: it shows how much Cold War history has changed since the archives opened, and it is a reminder that the archives are partial, since access has varied by country and by period and some collections have since closed again.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Limited war as a deliberate practice. <em>The mechanism is that both governments identified actions that would force the other to respond, striking territory across the border, acknowledging Soviet pilots in combat, using nuclear weapons, and refused them, accepting a stalemate on the original line instead. That restraint is what made proxy war usable as an instrument for forty years.</em>`,
        limit: `Restraint at the level of the superpowers was consistent with enormous destruction below it: estimates of Korean War deaths commonly run to two to four million, most of them civilians, in a country that had had no part in choosing the parallel.`,
        comparison: `Against <em>Vietnam</em>, which the Topic 8.5 chapter treats as a decolonization war first: Korea began as a partition imposed by the occupiers, while Vietnam began as a colonial war against France that was reclassified as a Cold War front after <span class="num">1950</span>. Same instruments, different origins, and the difference explains why Vietnamese nationalism carried a weight in that war that had no equivalent in Korea.`
      },
      terms: [
        ['38th parallel', 'The line drawn in 1945 to divide the Japanese surrender in Korea, which hardened into a border between two states by 1948.'],
        ['Armistice', 'The July 1953 ceasefire ending the fighting in Korea near the original line, never replaced by a peace treaty.'],
        ['Security Council veto', 'The permanent members’ power to block UN action, which the Soviet boycott of 1950 accidentally left unused, allowing the UN authorization for Korea.'],
        ['Escalation', 'The widening of a conflict beyond its existing limits, which both superpowers repeatedly refused in Korea despite military advice to the contrary.'],
        ['Limited war', 'A conflict fought with deliberate restrictions on targets, weapons and participants, in order to prevent a general war between great powers.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'africa',
      num: '03',
      accent: 'iron',
      name: 'Africa: Independence, and Two Buyers at the Door',
      navLabel: 'Africa',
      dates: '1960 to 2002 &nbsp;·&nbsp; Congolese independence to the end of the Angolan war',
      thesis: `The African cases show the volume's argument in its purest form, because independence created sovereignty faster than it created states, and a new government with a contested claim and no money was exactly the situation two rival suppliers were equipped to exploit.`,
      parts: [
        {
          heading: 'The Congo, 1960 to 1965',
          blocks: [
            { p: `Belgium granted the Congo independence in June <span class="num">1960</span>, after a colonial administration that had trained almost no Congolese for senior civil or military posts. Within weeks the army mutinied, the mineral-rich province of Katanga declared secession with Belgian support, and the new prime minister, Patrice Lumumba, requested United Nations help and then, when the UN force declined to end the secession by force, approached the Soviet Union. That request converted a decolonization crisis into a Cold War one within two months.` },
            { p: `Lumumba was dismissed by the president, arrested by forces under Colonel Joseph Mobutu, transferred to Katanga and killed in January <span class="num">1961</span>. Belgian officers were present at his killing, and declassified records show American intelligence had separately planned to remove him. Mobutu took full power in <span class="num">1965</span> and governed for thirty-two years with consistent Western support, on an understanding both sides recognized: a reliably anti-communist state in central Africa was worth backing regardless of how it was governed. The Congo case is the clearest early demonstration that superpower priorities and the quality of governance in a client were not connected.` }
          ]
        },
        {
          heading: 'Angola, and the war both sides paid for',
          blocks: [
            { p: `Portugal held its African colonies longer than anyone, and lost them suddenly when the Carnation Revolution of April <span class="num">1974</span> overthrew the government in Lisbon and the new authorities withdrew. Angola became independent in November <span class="num">1975</span> with three armed nationalist movements contesting the succession: the MPLA, the FNLA and UNITA, formations with distinct regional and ethnic bases whose rivalry predated any superpower interest.` },
            { p: `What followed was one of the longest wars of the period. The MPLA government received Soviet weapons and, decisively, Cuban combat troops, eventually tens of thousands of them. UNITA received American and South African support, and South African forces intervened directly, which added an entirely separate conflict, the struggle over apartheid and over Namibian independence, to the Cold War one. The fighting continued after Cuban and South African withdrawal at the end of the <span class="num">1980</span>s and after Soviet support ended, financed then by oil on the government side and by diamonds on UNITA's, and did not end until <span class="num">2002</span>.` },
            { p: `That last detail is the one worth carrying. When the patrons left, the war continued on commodity revenue, which shows both the strength and the limit of the resource-ceiling mechanism in section 01. External supply is one way to remove the ceiling; a diamond field is another.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Ogaden switch is the natural experiment',
              html: `Between <span class="num">1977</span> and <span class="num">1978</span> Somalia and Ethiopia fought over the Ogaden region. At the start, the Soviet Union was Somalia's patron and the United States had been Ethiopia's for decades. Ethiopia's revolutionary government had declared itself Marxist in <span class="num">1974</span>, and when Somalia invaded, Moscow chose Ethiopia, the larger prize, and airlifted in weapons and Cuban troops. Somalia expelled its Soviet advisers and turned to Washington, which accepted it. Both superpowers changed sides in the same war within months, and the local war aims did not change at all. Nothing else in this unit shows so cleanly that in many cases the ideological label followed the alignment rather than producing it, and it is the single best piece of evidence for a comparison question about superpower methods.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Sovereignty without state capacity. <em>The mechanism is that independence transferred legal authority to governments that had inherited no trained administration, no national army under reliable command, and an economy built around one or two exports, so a rival faction could be armed from outside more cheaply than the government could be defended from inside.</em>`,
        limit: `It is not a claim that Africans were passive. Lumumba, Mobutu, the MPLA and UNITA all made choices with their own aims in view, and the Angolan war continued for a decade after both superpowers had lost interest, financed by oil and diamonds.`,
        comparison: `Against <em>Latin America</em> in section 04: in Africa the superpowers were mostly arriving in places where they had no established presence, so they worked through movements and armies. In the American hemisphere the United States already had economic stakes, military relationships and proximity, and could work covertly through institutions that already existed.`
      },
      terms: [
        ['Katanga secession', 'The 1960 breakaway of the Congo’s mineral-rich province with Belgian backing, which precipitated the intervention crisis.'],
        ['Patrice Lumumba', 'The first prime minister of the independent Congo, dismissed, arrested and killed in January 1961.'],
        ['MPLA and UNITA', 'The rival Angolan movements whose contest for the post-Portuguese succession became a superpower proxy war from 1975.'],
        ['Cuban intervention', 'The deployment of Cuban combat troops in Angola and Ethiopia, the largest expeditionary contribution by any Soviet ally in the period.'],
        ['Ogaden War', 'The 1977 to 1978 conflict in which both superpowers exchanged clients within months, the clearest evidence that alignment was often instrumental.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'latinamerica',
      num: '04',
      accent: 'oxide',
      name: 'Latin America: Proximity Changes the Method',
      navLabel: 'Latin America',
      dates: '1954 to 1990 &nbsp;·&nbsp; Guatemala to the Nicaraguan election',
      thesis: `In the Western Hemisphere the United States was not competing for a new position, it was defending an old one, and that difference shows in the method: less open warfare, more covert operation through militaries, economic pressure and local institutions that already existed.`,
      parts: [
        {
          heading: 'Covert operations and their logic',
          blocks: [
            { p: `In <span class="num">1954</span> the elected government of Guatemala under Jacobo Árbenz was overthrown in an operation organized by American intelligence. Its land reform program had expropriated large uncultivated holdings, including those of the United Fruit Company, with compensation based on the company's own declared tax valuations. The government was described in Washington as a communist opening in the hemisphere; historians continue to argue over how much the decision was driven by the corporate interest and how much by the strategic judgment, and the honest answer is that the two were not separable at the time.` },
            { p: `The mechanism of a covert operation is worth stating because it explains why this method was chosen so often here. It is cheap compared with an invasion. It works through people who are already there, usually an officer corps with its own reasons to move against a civilian government. And it is deniable, which matters in a hemisphere where the United States had signed non-intervention commitments and where open invasion carried a diplomatic cost. What it produces is a government that owes its position to an outside power and knows it, which is influence of a durable kind.` },
            { p: `Chile in <span class="num">1973</span> is the case a checkpoint most often uses. Salvador Allende was elected president in <span class="num">1970</span> on a socialist program and nationalized the copper industry. The United States applied sustained economic pressure and funded opposition media and parties. The coup of 11 September <span class="num">1973</span> was carried out by the Chilean military, and General Augusto Pinochet governed until <span class="num">1990</span>. The Topic 8.7 chapter deals with what that government did; what matters here is the method, which is the same one visible in Guatemala nineteen years earlier.` }
          ]
        },
        {
          heading: 'Cuba and Nicaragua: what happens when it does not work',
          blocks: [
            { p: `Cuba is the exception that shaped everything else. The revolution of <span class="num">1959</span> produced a government that survived an American-sponsored invasion at the Bay of Pigs in <span class="num">1961</span>, aligned with the Soviet Union, hosted the missiles that produced the crisis of <span class="num">1962</span>, and then sent troops to Angola and Ethiopia. A single successful revolution ninety miles from Florida made every subsequent left-wing movement in the hemisphere look, from Washington, like the beginning of another one.` },
            { p: `In Nicaragua the Sandinista movement overthrew the Somoza dictatorship in July <span class="num">1979</span>, ending a family regime the United States had long supported. The Reagan administration funded and armed the Contras, an insurgency operating largely from Honduras, and mined Nicaraguan harbors. Congress restricted the funding, and officials in the administration continued it through the covert arms-for-funds arrangement exposed in <span class="num">1986</span> and <span class="num">1987</span> as the Iran-Contra affair. The war ended when the Sandinistas held an election in <span class="num">1990</span> and lost it.` },
            { p: `That ending is a useful complication for any argument about proxy war. The Nicaraguan conflict was settled by a vote, under regional diplomatic pressure organized by neighboring Latin American governments rather than by either superpower, in the same years the Soviet system was collapsing. Not every case in this chapter ends the way the mechanism predicts, and the exceptions are where the interesting analysis is.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not describe Latin American governments and movements in this period as instruments of either superpower. Árbenz's land reform, Allende's copper nationalization and the Sandinistas' literacy and land programs were domestic projects with domestic constituencies, in countries with long histories of contested land ownership that the Topic 8.4 chapter connects to redistribution movements worldwide. American intervention was decisive in outcomes and did not supply the aims. The equivalent error in the other direction is to treat these governments as Soviet creations, which the record does not support either: Soviet material support in the hemisphere was concentrated on Cuba and was modest almost everywhere else.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Covert operation as the method of an established power. <em>The mechanism is that where a great power already has economic stakes, military-to-military relationships and proximity, it can act through institutions that exist rather than build a client from nothing: fund the opposition, squeeze the economy, and let an officer corps with its own grievances take the government. It is cheap, deniable and produces a government that knows what it owes.</em>`,
        limit: `It failed in the two cases that mattered most. Cuba survived the Bay of Pigs and aligned with Moscow, and the Nicaraguan war ended in an election held under Latin American regional diplomacy rather than in a military outcome.`,
        comparison: `Against the <em>Soviet Union inside its own bloc</em>: Moscow's interventions in Hungary in <span class="num">1956</span> and Czechoslovakia in <span class="num">1968</span> were open, armored and justified by doctrine, while American intervention in its hemisphere was more often covert and deniable. Both were assertions of control over a sphere of influence, and the difference in method is one of the sharpest comparisons available for the Topic 8.9 essay.`
      },
      terms: [
        ['Covert operation', 'An intervention conducted through local actors and kept officially deniable, cheaper than invasion and useful where open action carried a diplomatic cost.'],
        ['Sphere of influence', 'A region a great power treats as within its security perimeter, where it expects to determine which governments are acceptable.'],
        ['Sandinistas and Contras', 'The Nicaraguan government that took power in 1979 and the American-funded insurgency that fought it through the 1980s.'],
        ['Iran-Contra affair', 'The covert arrangement exposed in 1986 and 1987 by which administration officials funded the Contras after Congress restricted the money.'],
        ['Bay of Pigs', 'The failed American-sponsored invasion of Cuba in 1961, which preceded the missile deployment of 1962.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `The success criteria for this topic ask for a comparison of methods across regions, so three of these four cards are comparisons. Take the structure rather than the wording.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Superpower supply removed the resource ceiling on local wars',
        body: `A civil war fought from local resources ends, or freezes, when one side can no longer feed, pay and arm a force. External patrons supplied weapons, cash, training and a Security Council veto, so both sides could be resupplied indefinitely and the war ran until a patron stopped for reasons of its own. That is why Angola's war began in 1975 and why several conflicts wound down within a few years of 1989. Note the limit that makes the claim honest: Angola continued to 2002 on oil and diamond revenue after both patrons left, so external supply is one way to remove the ceiling and a commodity is another. And note the direction of causation, since it is the mark of a careful answer: the Cold War internationalized and prolonged these conflicts rather than causing them.`
      },
      {
        category: 'Comparison',
        title: 'The Ogaden switch proves the alignment was instrumental in both directions',
        body: `In 1977 the Soviet Union was arming Somalia and the United States had backed Ethiopia for decades. Ethiopia's new government had declared itself Marxist in 1974; when Somalia invaded the Ogaden, Moscow chose Ethiopia, airlifted weapons and sent Cuban troops, and Somalia expelled its Soviet advisers and turned to Washington, which accepted the offer. Both superpowers swapped clients inside a single war in a matter of months, and neither local combatant changed its war aims. Use this whenever a question asks how the superpowers used proxy conflicts to maintain influence: it shows the influence was the object and the ideology was frequently the packaging, and it does so with a case where the variable changed and the outcome did not.`
      },
      {
        category: 'Comparison',
        title: 'Method followed position: covert in the American hemisphere, armored inside the Soviet bloc',
        body: `The United States in Latin America was defending an established position, with existing economic stakes, military relationships and proximity, so it worked covertly through institutions that already existed: the 1954 removal of Árbenz in Guatemala, sustained economic pressure and opposition funding in Chile before the military coup of September 1973, and the Contra war of the 1980s. The Soviet Union inside Eastern Europe acted openly with tanks, in Hungary in 1956 and Czechoslovakia in 1968, and afterward justified it by the Brezhnev Doctrine. Both are assertions of control over a sphere of influence, and the difference in method follows from what each power already had in place. Note the failures too: Cuba survived the Bay of Pigs, and Nicaragua's war ended in an election held under Latin American regional diplomacy.`
      },
      {
        category: 'Restraint',
        title: 'Korea set the rule that a proxy war stops short of the patrons',
        body: `Soviet pilots flew combat missions over Korea in Soviet aircraft, and both governments quietly declined to acknowledge it, because acknowledgment would have required an answer. American commanders proposed striking bases inside China and using nuclear weapons, and the president refused and dismissed the general who pressed hardest. Both sides accepted two years of static fighting and an armistice near the original line rather than an escalation that might not stop, and no peace treaty has ever been signed. That restraint is what made proxy war usable as an instrument for the next forty years, and its cost is the scale below the superpower level: estimates of Korean War deaths commonly run to two to four million, mostly civilians.`
      }
    ]
  }
};
