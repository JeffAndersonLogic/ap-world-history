'use strict';

/**
 * Topic 7.6, Causes of World War II: the deep reading.
 *
 * Why this exists. The success criteria ask a student to use the Versailles
 * reparations and territorial losses to explain how an unsustainable peace made
 * radical movements possible, and then to connect the Depression to the
 * discrediting of democratic government and to the aggressive militarism of
 * Germany, Italy and Japan.
 *
 * The organizing argument: Versailles alone did not cause this war, and the
 * proof is the 1920s, when the settlement was at its harshest and Weimar
 * survived. What made the settlement lethal was the Depression arriving on top
 * of it, because the grievance supplied the story and the slump supplied the
 * audience. A grievance without a crisis stays a complaint.
 *
 * Three things carried deliberately:
 *
 *   1. The 1920s are the control case, exactly as the earlier crises are in
 *      Topic 7.2, and the chapter uses them the same way on purpose so the
 *      method compounds across the unit.
 *   2. Hitler came to power through a legal appointment after electoral
 *      success and elite miscalculation, not a coup, and the mechanism of that
 *      is the most transferable civics lesson in the course.
 *   3. Appeasement is given its contemporary reasons before it is judged,
 *      because a student who cannot state the case for it cannot really argue
 *      against it.
 */

module.exports = {
  topicKey: 't7-6',
  slug: 'topic-7-6-causes-wwii',
  sourceFile: 'deep-reading-topic-7-6-causes-wwii.html',
  lessonFile: 'lesson-7-6-causes-wwii.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.6: A Grievance Waiting for a Crisis',
  eyebrow: 'Topic 7.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'A Grievance Waiting for a <em>Crisis</em>',
  deck: `The Treaty of Versailles was signed in <span class="num">1919</span> and the war it is blamed for began twenty years later. In between, the German republic survived the treaty's harshest years and the extremists lost elections badly. This chapter is about what changed: a grievance supplies a story, and a depression supplies the audience, and neither one does the job alone.`,
  meta: ['Four sections', 'The treaty, the control case, the seizure, the road', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.6 &nbsp;·&nbsp; A Grievance Waiting for a Crisis &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the settlement and what was genuinely unsustainable about it. Section 02 is the decade that shows the treaty alone was not enough, which is the argument most answers are missing. Section 03 is how a party with a minority of votes ended up governing, and section 04 is the road to September <span class="num">1939</span> including the case for appeasement.`,
    steps: [
      `<b>01 The settlement:</b> reparations, territory, war guilt, and what each did.`,
      `<b>02 The decade that did not produce a war:</b> Weimar&rsquo;s recovery, and what it proves.`,
      `<b>03 <span class="num">1929</span> to <span class="num">1933</span>:</b> the slump, the votes, and a legal appointment.`,
      `<b>04 The road to <span class="num">1939</span>:</b> rearmament, appeasement on its own terms, and Asia.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'settlement',
      num: '01',
      accent: 'gold',
      name: 'What Versailles Actually Did',
      navLabel: 'The settlement',
      dates: '1919 &nbsp;·&nbsp; Terms, and their effects',
      thesis: `Get the terms right before assessing them, because most answers assess a treaty they have not described. The settlement combined material loss with a public assignment of blame, and the second did more political work than the first.`,
      parts: [
        {
          heading: 'The terms',
          blocks: [
            { p: `<b>Territory.</b> Germany lost Alsace-Lorraine to France, substantial eastern territory to the reconstituted Poland including a corridor to the sea that separated East Prussia from the rest of Germany, and all of its overseas colonies, which became the mandates of Topic 7.5.` },
            { p: `<b>Military limits.</b> The army was capped at <span class="num">100</span>,<span class="num">000</span> men, conscription was forbidden, tanks, military aircraft and submarines were prohibited, and the Rhineland was demilitarized.` },
            { p: `<b>Reparations.</b> Germany was required to pay for civilian damage, with the total fixed in <span class="num">1921</span> at a sum widely regarded as beyond plausible capacity, and later rescheduled twice, by the Dawes Plan in <span class="num">1924</span> and the Young Plan in <span class="num">1929</span>.` },
            { p: `<b>Article 231.</b> The clause assigning responsibility for the war to Germany and its allies, included as the legal foundation for the reparations claim. It became known in Germany as the war guilt clause and was resented far out of proportion to its legal function, which tells you something important about what humiliation does that a bill does not.` }
          ]
        },
        {
          heading: 'The design flaw, stated precisely',
          blocks: [
            { p: `The usual verdict is that the treaty was too harsh. A more useful one is that it was <b>harsh enough to enrage and not harsh enough to disable</b>, which is the worst available combination. Germany kept its industrial heartland substantially intact, kept a unified state, kept the largest population in western and central Europe, and kept the potential to rebuild, while being given a permanent grievance and a public record of blame.` },
            { p: `Compare the alternatives. A settlement that had partitioned or permanently occupied Germany would have removed the capacity to try again, at enormous cost and against the principle of self-determination the conference had just announced. A genuinely conciliatory settlement, of the kind that had readmitted France to the European system after <span class="num">1815</span>, might have given the new republic something to defend. The powers did neither, partly because French security demands and Anglo-American reluctance to underwrite them pulled in opposite directions.` },
            { p: `And the settlement lost its guarantors almost immediately. The United States Senate refused consent to the Treaty, so the United States neither joined the League nor ratified the security guarantee to France that had been part of the bargain, which left France holding an enforcement burden it could not carry alone.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that reparations wrecked the German economy and thereby caused Hitler, because the chronology refuses it. The hyperinflation of <span class="num">1923</span> was severe and its causes are substantially domestic, in how Germany had financed the war by borrowing and in the response to the Ruhr occupation, rather than being a simple product of the reparations bill. More decisively, Germany's actual reparations transfers were repeatedly rescheduled and reduced and were largely funded by American lending, and the German economy grew in the later <span class="num">1920</span>s. The political damage from reparations was real and it ran through resentment and the sense of an imposed peace, which is a different mechanism from economic destruction and a more defensible one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A settlement that is punitive without being disabling. <em>The mechanism is that a peace can either remove a defeated state's capacity to fight again or give it a reason not to want to, and one that does neither leaves the capacity in place and adds the motive, so the settlement's own terms become the organizing grievance of whoever wants to overturn it.</em>`,
        limit: `It describes a risk rather than a certainty. The same settlement was in force through a decade in which Germany did not overturn it, so the treaty is a necessary part of the explanation and section 02 shows it is not a sufficient one.`,
        comparison: `Against the <em>Congress of Vienna</em> in Topic 5.2: after <span class="num">1815</span> the powers readmitted a defeated France to the system as a participant with an interest in the order's survival. After <span class="num">1919</span> Germany was excluded from the League until <span class="num">1926</span> and treated as a defendant, and the contrast between the two settlements is one of the strongest comparisons available in this unit.`
      },
      terms: [
        ['Article 231', 'The clause assigning responsibility for the war to Germany and its allies, the legal basis for reparations and a lasting political wound.'],
        ['Reparations', 'Payments for civilian damage fixed in 1921, rescheduled by the Dawes Plan in 1924 and the Young Plan in 1929, and largely funded by American loans.'],
        ['Polish Corridor', 'The strip of territory giving Poland access to the sea and separating East Prussia from the rest of Germany, a standing revisionist grievance.'],
        ['Demilitarized Rhineland', 'The zone in which Germany was forbidden to station forces, a French security guarantee whose remilitarization in 1936 went unopposed.'],
        ['Diktat', 'The German term for the treaty as an imposed peace, capturing the resentment at exclusion from the negotiation rather than at any single term.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'control',
      num: '02',
      accent: 'rust',
      name: 'The Decade That Did Not Produce a War',
      navLabel: 'The 1920s',
      dates: '1924 to 1929 &nbsp;·&nbsp; The control case',
      thesis: `Use the same method as Topic 7.2, because it works twice. If Versailles caused the Second World War, the war should have come when the treaty was newest and most painful. Instead those years produced a recovery, and the extremists were nowhere.`,
      parts: [
        {
          heading: 'What the later 1920s looked like',
          blocks: [
            { p: `After the crisis year of <span class="num">1923</span>, which brought hyperinflation and a failed putsch in Munich, Germany stabilized. A new currency held. The Dawes Plan in <span class="num">1924</span> restructured reparations and opened the way to substantial American lending, and industrial output recovered. Under Gustav Stresemann as foreign minister, Germany negotiated rather than defied: the Locarno treaties of <span class="num">1925</span> settled the western borders by agreement, and Germany joined the League of Nations in <span class="num">1926</span>.` },
            { p: `Now the electoral evidence, which is the part to memorize. In the Reichstag election of May <span class="num">1928</span>, the Nazi Party won a very small share of the vote and a handful of seats. It was a fringe party in a recovering republic, and it had been trying since <span class="num">1920</span>. The grievance about Versailles was fully available to it, well developed, and central to its message, and it was not selling.` }
          ]
        },
        {
          heading: 'What the control case proves, and what it does not',
          blocks: [
            { p: `It proves that the treaty was not sufficient. A cause that was present and at its strongest during a period when the effect did not occur cannot be the whole explanation, which is exactly the reasoning Topic 7.2 uses on the Moroccan and Balkan crises. Whatever changed between <span class="num">1928</span> and <span class="num">1932</span> is doing the decisive work, and section 03 names it.` },
            { p: `It does not prove the treaty was irrelevant, and this is where a careless answer overcorrects. The grievance was the content of the extremist message: the story about a stab in the back, a shameful peace and a republic born of betrayal was built directly out of <span class="num">1918</span> and <span class="num">1919</span>. When the audience arrived, the script was already written and had been rehearsed for a decade.` },
            { p: `So state it as two ingredients. The settlement supplied the grievance and the story. The Depression supplied the audience and the urgency. Neither works alone, which is a genuinely strong causal claim and much better than ranking one above the other.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the vote share tracks unemployment, not the treaty',
              html: `The Nazi share of the Reichstag vote is a well-documented series, and so is German unemployment, and setting them beside each other is the single most useful exercise in this topic. The party is marginal in <span class="num">1928</span>, becomes the second largest party in <span class="num">1930</span> after the slump begins, and the largest in July <span class="num">1932</span> as unemployment peaks. The treaty is constant across that whole span; unemployment is not. Two variables, one moving with the outcome and one not, is about as clean an argument as this kind of history offers. It also carries its own warning: the vote fell back somewhat in the November <span class="num">1932</span> election, so the correlation does not simply run upward and the events of section 03 are not the product of an unstoppable electoral wave.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Separating the grievance from the opportunity. <em>The mechanism is that a radical movement needs both a story that explains its audience's suffering and an audience currently suffering, so a grievance can sit dormant for years while a movement fails, and a crisis can then hand the same unchanged message a constituency it never had.</em>`,
        limit: `It does not by itself explain why this particular movement captured the audience rather than the communists, who also grew, so section 03 has to add elite decisions and the behavior of the other parties.`,
        comparison: `Against <em>Topic 7.2's</em> earlier crises: the same analytical move applied to a different question. There, four settled crises show the standing tensions were insufficient; here, one recovering decade shows the treaty was insufficient. Learning to look for the period when the cause was present and the effect absent is the transferable skill in both.`
      },
      terms: [
        ['Stresemann era', 'The period of German stabilization and negotiation after 1923, including Locarno in 1925 and League membership in 1926.'],
        ['Locarno treaties', 'The 1925 agreements settling Germany\'s western borders by negotiation rather than imposition, the high point of interwar conciliation.'],
        ['1928 election', 'The Reichstag election in which the Nazi Party won a very small vote share, the control case against treating Versailles as sufficient.'],
        ['Necessary and sufficient', 'The distinction that makes this section work: Versailles was part of the explanation without being enough on its own.'],
        ['Stab-in-the-back myth', 'The false claim that an undefeated army was betrayed at home, the story the grievance supplied and the slump gave an audience.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'seizure',
      num: '03',
      accent: 'iron',
      name: 'How a Minority Party Came to Govern',
      navLabel: 'The seizure',
      dates: '1929 to 1934 &nbsp;·&nbsp; Slump, votes, appointment',
      thesis: `The most important thing to get right in this topic is that there was no coup in <span class="num">1933</span>. Hitler was appointed chancellor through a constitutional procedure by people who believed they could control him, and the dictatorship was built afterward, largely through legal instruments.`,
      parts: [
        {
          heading: 'The slump arrives',
          blocks: [
            { p: `German recovery had been built on American lending, as Topic 7.4 sets out, and when that lending stopped after <span class="num">1929</span> the structure came down fast. Unemployment rose to millions, and the governing coalition broke apart over how to respond. From <span class="num">1930</span> chancellors governed increasingly by emergency presidential decree under Article 48 of the constitution rather than by parliamentary majority, which normalized rule without the Reichstag well before Hitler held any office.` },
            { p: `That point deserves emphasis because students usually miss it. The mechanism by which German democracy could be set aside was in regular use by conservative governments for three years before <span class="num">1933</span>, as a response to a parliament that could not agree. An emergency instrument used routinely stops being an emergency instrument.` }
          ]
        },
        {
          heading: 'The appointment',
          blocks: [
            { p: `The Nazi Party became the largest in the Reichstag in July <span class="num">1932</span> without a majority, and lost ground in the November election that year. Its finances were strained and its momentum had checked.` },
            { p: `In January <span class="num">1933</span> President Hindenburg appointed Hitler chancellor. The decision was engineered by conservative politicians, principally around Franz von Papen, who wanted the Nazi votes for a governing coalition and calculated that with only a few Nazis in the cabinet they could use him and contain him. Papen is reported to have believed they had him boxed in. That calculation is the single most instructive error in the topic.` },
            { p: `What followed was fast and largely lawful in form. The Reichstag fire in February was used to justify an emergency decree suspending civil liberties. Elections in March, held under intimidation, still did not give the Nazis a majority on their own. The <span class="kt">Enabling Act</span> of March <span class="num">1933</span>, passed by the Reichstag with the required majority after the Communist deputies had been excluded or arrested and with Center Party support, gave the cabinet power to make laws without parliament. Other parties and trade unions were dissolved or banned over the following months, and on Hindenburg's death in <span class="num">1934</span> Hitler combined the offices of chancellor and president and required the armed forces to swear personal loyalty.` },
            { p: `The mechanism to name is <span class="kt">elite miscalculation</span>: an anti-democratic movement with a large minority of votes was given office by establishment figures who preferred it to the left and believed they were the senior partners. Write that and you have explained something that recurs, rather than describing something that happened once.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the German people elected Hitler dictator. The Nazi Party never won a majority in a free election; its best free-election result left it well short, and the March <span class="num">1933</span> election held under intimidation still did not deliver an outright majority. And do not swing to the opposite error of treating the German public as merely victims of a trick, because millions did vote for the party knowing what it said about Jews, about democracy and about the treaty. The accurate account has three parts: a large minority voted for it, conservative elites handed it power expecting to control it, and the dictatorship was then constructed using the emergency and enabling instruments the constitution already contained.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Elite miscalculation. <em>The mechanism is that established politicians facing a parliament they cannot control and a left they fear may invite an anti-democratic movement into office to borrow its votes, on the assumption that governing responsibility will moderate it and that they hold the senior positions, which hands over the instruments of the state to people who intend to keep them.</em>`,
        limit: `It is one of three parts. Add the electoral base built during the slump and the pre-existing normalization of decree rule, or you have a conspiracy of a few men rather than a political collapse.`,
        comparison: `Against the <em>Provisional Government</em> in Topic 7.1: both are cases of a fragile new republic destroyed under economic emergency by a movement that promised decisiveness. The difference is the route: October <span class="num">1917</span> was a seizure against the government, and January <span class="num">1933</span> was an appointment by it.`
      },
      terms: [
        ['Article 48', 'The Weimar constitution\'s emergency decree power, used routinely by chancellors from 1930, which normalized governing without parliament.'],
        ['Enabling Act', 'The March 1933 law letting the cabinet legislate without the Reichstag, passed after Communist deputies were excluded or arrested.'],
        ['Elite miscalculation', 'The conservative calculation that appointing Hitler would borrow his votes while containing him, the decisive error of January 1933.'],
        ['Gleichschaltung', 'The bringing into line of parties, unions, state governments and associations under Nazi control through 1933 and 1934.'],
        ['Totalitarian state', 'A regime seeking control of political, economic and private life through ideology, party and terror, distinguishing these states from older autocracies.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'road',
      num: '04',
      accent: 'oxide',
      name: 'The Road to September 1939',
      navLabel: 'The road',
      dates: '1931 to 1939 &nbsp;·&nbsp; Steps, and a policy on trial',
      thesis: `The war did not begin with a surprise. It began at the end of a sequence of moves each of which went unopposed, and understanding why they went unopposed requires taking the case for appeasement seriously before rejecting it.`,
      parts: [
        {
          heading: 'The sequence',
          blocks: [
            { p: `<b><span class="num">1931</span>.</b> Japan takes Manchuria; the League reports and does nothing, as Topic 7.5 describes. <b><span class="num">1933</span>.</b> Germany leaves the League. <b><span class="num">1935</span>.</b> Germany announces conscription and an air force, openly breaking the treaty's military terms; Italy invades Ethiopia and sanctions fail. <b><span class="num">1936</span>.</b> German troops reenter the demilitarized Rhineland, a direct treaty violation, and France and Britain do not act; the Spanish Civil War begins, with German and Italian forces intervening and serving as a proving ground. <b><span class="num">1937</span>.</b> Japan invades China proper, beginning a full war in Asia.` },
            { p: `<b><span class="num">1938</span>.</b> Germany annexes Austria in the Anschluss; at Munich in September, Britain and France agree to the transfer of the Sudetenland from Czechoslovakia to Germany, without Czechoslovak participation in the decision, in exchange for assurances of no further claims. <b>March <span class="num">1939</span>.</b> Germany occupies the rest of Czechoslovakia, which breaks the Munich assurance and ends the policy. <b>August <span class="num">1939</span>.</b> The Nazi-Soviet Pact, publicly a non-aggression treaty and secretly a division of eastern Europe, removes the risk of a two-front war. <b>1 September <span class="num">1939</span>.</b> Germany invades Poland; Britain and France, having guaranteed Poland in March, declare war on 3 September.` }
          ]
        },
        {
          heading: 'Appeasement, on its own terms',
          blocks: [
            { p: `Appeasement is easy to condemn and the condemnation is worth little unless you can state the case. Here it is, as it looked in <span class="num">1938</span>.` },
            { p: `<b>The memory of the last war.</b> Everyone deciding had lived through <span class="num">1914</span> to <span class="num">1918</span>. The prospect of repeating it, with aircraft now able to bomb cities, was regarded with horror by populations and governments alike, and avoiding it was a legitimate aim rather than cowardice.` },
            { p: `<b>Some German claims looked defensible.</b> If self-determination was the principle of <span class="num">1919</span>, then German-speaking populations in Austria and the Sudetenland asking to join Germany were awkward to refuse on principle. That is the treaty's selectivity returning as a weapon.` },
            { p: `<b>Military and imperial weakness.</b> Britain and France had disarmed substantially, were financially strained by the Depression, and Britain had imperial commitments across the world with Japan hostile in Asia. British rearmament was accelerating, and time was thought to favor the defender.` },
            { p: `<b>The Soviet problem.</b> An eastern front required the Soviet Union, and Britain, France and Poland all had strong reasons to distrust Stalin, while Stalin had strong reasons to distrust them after Munich, to which he was not invited. That mutual distrust is what the pact of August <span class="num">1939</span> exploited.` },
            { p: `Now the case against, which is stronger. Each unopposed move improved Germany's position and lowered the expected cost of the next one; the Rhineland in <span class="num">1936</span> was the cheapest moment to act; Czechoslovakia had substantial defenses and an army, and Munich handed those to Germany rather than buying time neutrally; and the assurances were worth nothing because the aims were not limited, which March <span class="num">1939</span> demonstrated. The judgment to write is that appeasement was a defensible reading of a limited-aims opponent applied to an opponent whose aims were not limited, and that the evidence for the second was available and was discounted.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: judge a policy on what was knowable then',
              html: `The temptation with appeasement is to grade it against what we now know, which guarantees a verdict and teaches nothing. The historian's discipline is to ask what the decision-makers had in front of them: intelligence estimates that overstated German air strength, Treasury advice on what rearmament would cost, dominion governments signalling they would not support a war over Czechoslovakia, and public opinion shaped by the last war. Then ask what they had that pointed the other way, because that is the real test, and there was plenty: a published program of expansion, the Rhineland precedent, and the plain fact that each assurance had been followed by a further demand. A policy that ignores its own accumulating counterevidence is criticizable on the terms of its own moment, and that is a far more defensible criticism than hindsight.`
            } }
          ]
        },
        {
          heading: 'And the war in Asia, which began earlier',
          blocks: [
            { p: `One correction to the standard chronology belongs here. For much of the world the Second World War did not begin in September <span class="num">1939</span>. Japan's full-scale invasion of China began in <span class="num">1937</span>, and its occupation of Manchuria in <span class="num">1931</span>, and the war in Asia was already enormous and enormously destructive before Germany invaded Poland.` },
            { p: `Japan's causes run parallel to the European ones and are not identical. A resource-poor industrial state hit hard by the collapse in world trade pursued self-sufficiency through an empire in Asia; civilian governments lost control of an army that acted on its own initiative in Manchuria and was not restrained; and an ideology of Japanese leadership in Asia supplied the justification. Write the war as having two origins that later merged, and your account of <span class="num">1941</span> becomes much easier to make sense of.` }
          ]
        }
      ],
      useThis: {
        tool: `The declining cost of the next aggression. <em>The mechanism is that each unopposed violation both improves the aggressor's material position and lowers its estimate of what a response will cost, so the price of stopping the sequence rises at every step while the willingness to pay it falls, which is why the cheapest moment to act is always the earliest and the least likely moment to act is also the earliest.</em>`,
        limit: `It reads best backward. In <span class="num">1936</span> the Rhineland looked to many like Germany reoccupying its own territory, so the argument that early action is cheap has to contend with the fact that early action is also hardest to justify to a public.`,
        comparison: `Against the <em>July crisis</em> in Topic 7.2: <span class="num">1914</span> is a war nobody quite intended, produced by commitments and timetables in five weeks. <span class="num">1939</span> is a war one state intended and prepared for over six years in public. Putting the two side by side is the sharpest way to show that "causes of war" is not one question with one shape.`
      },
      terms: [
        ['Appeasement', 'The policy of conceding limited demands to avoid war, defensible against an opponent with limited aims and applied to one without them.'],
        ['Rhineland remilitarization', 'The 1936 reentry of German troops into the demilitarized zone, unopposed, and the cheapest moment at which the sequence could have been stopped.'],
        ['Munich Agreement', 'The September 1938 transfer of the Sudetenland to Germany, agreed by Britain and France without Czechoslovak participation.'],
        ['Nazi-Soviet Pact', 'The August 1939 non-aggression treaty with secret protocols dividing eastern Europe, which removed the two-front risk.'],
        ['Second Sino-Japanese War', 'Japan\'s full invasion of China from 1937, the reason much of the world dates the war earlier than September 1939.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The second is the argument that will separate your answer from the standard one.`,
    pairs: [
      {
        category: 'Design',
        title: 'The treaty was harsh enough to enrage and not harsh enough to disable',
        body: `Germany lost Alsace-Lorraine, eastern territory to Poland including the corridor separating East Prussia, and all its colonies; its army was capped at 100,000 with no conscription, tanks, military aircraft or submarines, and the Rhineland was demilitarized; reparations were fixed in 1921 and rescheduled in 1924 and 1929; and Article 231 assigned responsibility publicly. What it did not do was remove the capacity to try again: Germany kept its industry, its unity and the largest population in central and western Europe. Then the settlement lost its guarantors, because the United States Senate refused consent, so America neither joined the League nor ratified the security guarantee to France. Compare Vienna in 1815, which readmitted defeated France as a participant with a stake in the order.`
      },
      {
        category: 'Method',
        title: 'The treaty was at its harshest in the decade that produced no war',
        body: `If Versailles was sufficient, the war should have come when the treaty was newest. Instead Germany stabilized after 1923: a new currency held, the Dawes Plan opened American lending, output recovered, Locarno settled the western borders by negotiation in 1925, and Germany joined the League in 1926. In the May 1928 Reichstag election the Nazi Party won a very small share of the vote. The Versailles grievance was fully available, central to its message, and rehearsed since 1920, and it was not selling. So the treaty supplied the grievance and the story, and the Depression supplied the audience and the urgency. Neither works alone, and that two-ingredient claim is stronger than ranking either first.`
      },
      {
        category: 'Mechanism',
        title: 'There was no coup, and that is the part worth learning',
        body: `From 1930 chancellors governed by emergency decree under Article 48 rather than by majority, so rule without parliament was normalized three years before Hitler held office. The Nazis became the largest party in July 1932 without a majority and lost ground that November. In January 1933 Hindenburg appointed Hitler chancellor in an arrangement engineered by conservatives around von Papen, who wanted his votes and believed a handful of Nazi ministers meant they could contain him. Then the Reichstag fire decree suspended civil liberties, and the Enabling Act of March 1933 passed with Communist deputies excluded or arrested. A large minority voted for it, elites handed it office expecting control, and the dictatorship was built with instruments the constitution already contained.`
      },
      {
        category: 'Judgment',
        title: 'Appeasement misread the opponent, and it had reasons',
        body: `State the case before rejecting it. Everyone deciding had lived through 1914 to 1918 and now expected cities to be bombed; German-speaking populations in Austria and the Sudetenland were awkward to refuse if self-determination was the 1919 principle; Britain and France had disarmed, were financially strained, and Britain faced a hostile Japan across an empire; and an eastern front needed a Stalin whom nobody trusted and who was not invited to Munich. Against that: each unopposed move, the Rhineland in 1936, Austria and Munich in 1938, improved Germany's position and cheapened the next, Czechoslovakia's defenses were handed over rather than bought time with, and March 1939 proved the aims were never limited. The evidence was available and was discounted.`
      }
    ]
  }
};
