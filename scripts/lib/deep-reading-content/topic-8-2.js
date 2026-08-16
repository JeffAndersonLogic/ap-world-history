'use strict';

/**
 * Topic 8.2, The Cold War: the deep reading.
 *
 * Why this exists. The success criteria ask for the Truman Doctrine and the
 * Marshall Plan as evidence of competing ideologies, for NATO, the Warsaw Pact,
 * the arms race and proxy wars as effects of the struggle, and for Sukarno and
 * Nkrumah at Bandung as an alternative to the binary. Named that way, all six
 * are labels. The chapter's job is to convert each into a working part: what a
 * dollar of Marshall aid actually did in a French port, what an alliance treaty
 * does that a promise does not, why a weapon nobody uses changes where wars are
 * fought, and what non-alignment bought a government that practiced it.
 *
 * The organizing argument, inherited from the Topic 8.1 chapter: a rivalry that
 * could not be settled in Europe was displaced onto the decolonizing world. This
 * chapter is where the displacement acquires its institutions.
 *
 * Three things carried deliberately:
 *
 *   1. The Marshall Plan as a political instrument, not charity and not simply
 *      reconstruction. Dollars that had to be spent on American goods, with
 *      counterpart funds in local currency and a condition of joint European
 *      planning, aimed at restoring living standards fast enough to weaken the
 *      communist parties of France and Italy. That is a mechanism.
 *   2. Alliance as automatic commitment. Article 5 is a tripwire that converts a
 *      local incident into a general war before anyone can decide otherwise,
 *      which is exactly how deterrence is supposed to work and exactly why it is
 *      dangerous.
 *   3. Non-alignment stated honestly. It was real leverage and it was extremely
 *      hard to sustain, and the evidence for both is in the same countries:
 *      Indian arms purchases, the Egyptian switch, the coup against Nkrumah.
 */

module.exports = {
  topicKey: 't8-2',
  slug: 'topic-8-2-the-cold-war',
  sourceFile: 'deep-reading-topic-8-2-the-cold-war.html',
  lessonFile: 'lesson-8-2-the-cold-war.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.2: The Rules of a War Nobody Fought',
  eyebrow: 'Topic 8.2 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Rules of a War Nobody <em>Fought</em>',
  deck: `The United States and the Soviet Union never fought each other. They spent forty years building the institutions of a war they intended not to have: a doctrine, a recovery program, two alliances with automatic triggers, and arsenals whose whole purpose was never to be used. This chapter takes those four and shows what each was actually for, and then takes seriously the governments that tried to refuse the choice.`,
  meta: ['Four sections', 'Doctrine, alliance, deterrence, refusal', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.2 &nbsp;·&nbsp; The Rules of a War Nobody Fought &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 to 03 build in order: a doctrine produces a program, the program produces alliances, and the alliances plus nuclear weapons produce the strange stability that pushed the fighting elsewhere. Section 04 is the one most students underuse, and it is where the highest-value evidence in this topic sits.`,
    steps: [
      `<b>01 Containment:</b> how a diplomat&rsquo;s telegram became a budget line, and what Marshall aid was actually buying.`,
      `<b>02 The blocs:</b> what an alliance treaty does that a promise does not, and why 1955 has two entries.`,
      `<b>03 The bomb:</b> why a weapon nobody used decided where the wars happened.`,
      `<b>04 Non-alignment:</b> Bandung and Belgrade, what the third position bought, and why it was so hard to hold.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'containment',
      num: '01',
      accent: 'gold',
      name: 'Containment: From a Telegram to a Budget Line',
      navLabel: 'Containment',
      dates: '1946 to 1952 &nbsp;·&nbsp; The Long Telegram to the end of Marshall aid',
      thesis: `<span class="kt">Containment</span> was an argument about Soviet behavior before it was a policy, and it became a policy at the point where somebody costed it. The Truman Doctrine supplied the justification and the Marshall Plan supplied the money, and the money is where the mechanism is.`,
      parts: [
        {
          heading: 'The argument',
          blocks: [
            { p: `In February <span class="num">1946</span> George Kennan, a diplomat at the American embassy in Moscow, sent Washington a very long cable analyzing Soviet conduct. His claim was that Soviet hostility came from internal sources, a system that needed an external enemy to justify itself, rather than from any specific dispute that could be negotiated away, and that it was therefore not appeasable but also not reckless: it would advance where it met no resistance and stop where it did. The policy conclusion, published under a pseudonym in <em>Foreign Affairs</em> in July <span class="num">1947</span>, was patient, firm, long-term containment of Soviet expansive tendencies.` },
            { p: `Note what that argument makes possible and what it forecloses. It rules out negotiating a general settlement, because the hostility is not about a settlement. It also rules out attacking, because a system with internal problems will eventually mellow or break. What it licenses is an indefinite, expensive, global holding action, which is what the next forty years consisted of. Kennan himself later objected that his argument had been read as a call for military containment everywhere, when he had meant political and economic support at a few decisive points, and that dispute over what containment ought to have meant runs through the whole period.` },
            { p: `In March <span class="num">1947</span> Truman asked Congress for 400 million dollars for Greece and Turkey, where Britain had just announced it could no longer afford commitments, and framed the request in general terms: it would be the policy of the United States to support free peoples resisting subjugation by armed minorities or outside pressure. That framing, the <span class="kt">Truman Doctrine</span>, is what turned a regional aid bill into a standing global commitment, and it is why later administrations could describe interventions in places nobody in <span class="num">1947</span> was thinking about as continuations of an established policy.` }
          ]
        },
        {
          heading: 'What the Marshall Plan actually did',
          blocks: [
            { p: `Secretary of State George Marshall proposed the European Recovery Program at Harvard in June <span class="num">1947</span>. Congress passed it in April <span class="num">1948</span>, and it delivered roughly 13 billion dollars to Western Europe over about four years. Describing it as generosity or as reconstruction aid both miss how it worked.` },
            { p: `The mechanism has three parts. First, the dollars were largely spent on American goods, food, fuel, machinery and raw materials, which solved the specific problem Europe had: it needed to buy from the United States and had no dollars to buy with. Second, when a European government sold those goods domestically, the local currency it received went into a counterpart fund used for approved domestic investment, so one dollar of aid did work twice. Third, participation required recipient governments to plan jointly and to open their trade with each other, which pushed Western Europe toward the economic integration that later produced the European institutions.` },
            { p: `And the political purpose was explicit at the time rather than a later interpretation. Communist parties in France and Italy were large, disciplined and electorally serious, with real prestige from wartime resistance. The judgment in Washington was that hunger and stalled recovery were their best recruiters, and that restoring living standards quickly would cost less than any other way of keeping those countries in the Western camp. Marshall aid was containment carried out with freight and credit rather than with troops.` },
            { p: `The Soviet response completes the picture. Marshall's offer was formally open to the Soviet Union and to Eastern Europe. A Soviet delegation attended the Paris talks in <span class="num">1947</span>, objected to the requirement that recipients disclose economic data and coordinate plans, and walked out, and Czechoslovakia and Poland, which had shown interest, were required to withdraw. Moscow then built its own arrangements, the Cominform in <span class="num">1947</span> to coordinate communist parties and Comecon in <span class="num">1949</span> for economic relations within the bloc. Whether the American offer to the East was sincere or was framed in terms Moscow was certain to reject is one of the sharper disputes in the origins debate the Topic 8.1 chapter sets out.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the plan kept receipts',
              html: `The European Recovery Program was administered by a dedicated agency that published country allocations, commodity breakdowns and counterpart fund accounts, and it was audited by a Congress that had to reappropriate the money every year. That is unusually good evidence for what a policy did, as against what it said. It also carries the usual caution about official accounting: the records show what was shipped and to whom, not how much of Western Europe's recovery the shipments caused. Some economic historians argue the aid was modest relative to European output and that the decisive contributions were the institutional reforms and the currency stabilization it was tied to, rather than the tonnage. Both readings use the same files.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Aid as a political instrument. <em>The mechanism is that Marshall dollars were spent on American exports Europe could not otherwise buy, the local-currency proceeds were recycled into approved domestic investment, and participation required joint planning and open intra-European trade, all aimed at restoring living standards fast enough to undercut the electoral appeal of large communist parties in France and Italy.</em>`,
        limit: `It bought influence only where there were governments willing to accept the conditions, and its scale relative to European output is contested, with some economic historians crediting the attached institutional reforms more than the money.`,
        comparison: `Against the <em>Soviet answer</em> in the same years: Comecon organized trade inside the bloc on terms Moscow set, and the Soviet zone of Germany was subject to reparations extraction rather than reconstruction aid. One bloc was capitalized, the other was billed, and the gap in living standards that opened between them became the most powerful single argument against the Soviet model by <span class="num">1989</span>.`
      },
      terms: [
        ['Containment', 'The policy of resisting Soviet expansion at the points where it pressed, on the argument that Soviet hostility came from the nature of the system rather than from negotiable disputes.'],
        ['Truman Doctrine', 'The March 1947 request for aid to Greece and Turkey, framed as a general commitment to support peoples resisting armed subjugation.'],
        ['Marshall Plan', 'The European Recovery Program, about 13 billion dollars from 1948, spent largely on American goods and tied to joint European planning.'],
        ['Counterpart funds', 'Local currency raised when a government sold Marshall goods domestically, reinvested under agreement, so one dollar of aid did work twice.'],
        ['Comecon', 'The Soviet bloc economic organization founded in 1949, coordinating trade within the bloc on terms set in Moscow.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'blocs',
      num: '02',
      accent: 'rust',
      name: 'What an Alliance Does That a Promise Does Not',
      navLabel: 'The two blocs',
      dates: '1948 to 1955 &nbsp;·&nbsp; The Berlin blockade to the Warsaw Pact',
      thesis: `The point of a mutual defense treaty is that it removes the decision. Article 5 of the North Atlantic Treaty is designed so that an attack on one member starts a general war automatically, before any government has time to calculate whether this particular border town is worth it, and that automatic quality is the entire deterrent.`,
      parts: [
        {
          heading: 'Berlin, and why the alliance came next',
          blocks: [
            { p: `Berlin lay deep inside the Soviet occupation zone and was itself divided into four sectors. In June <span class="num">1948</span>, after the Western powers introduced a new currency in their zones of Germany, the Soviet Union closed the land routes into the western sectors. The Western response was to supply a city of over two million people by air for eleven months, flying in food and coal around the clock until the blockade was lifted in May <span class="num">1949</span>.` },
            { p: `The airlift is worth understanding as a deliberate choice about escalation. An armed convoy sent up the autobahn would have forced the Soviet Union either to shoot or to back down, with no third option. An aircraft crossing an air corridor put the same choice on the other side, in a form where doing nothing was easy and shooting would have been an unmistakable act of war. Both governments spent the crisis looking for ways not to be the one who fired, which is a pattern that recurs through the whole period and reaches its clearest form in <span class="num">1962</span>.` },
            { p: `The North Atlantic Treaty was signed in April <span class="num">1949</span> by twelve states. Its <span class="kt">Article 5</span> commits each member to treat an armed attack on any one of them in Europe or North America as an attack on all. The practical instrument that followed mattered as much as the words: an integrated command structure and, above all, American troops permanently stationed in Europe. Those troops were not numerous enough to stop a full Soviet offensive on their own, and were not meant to be. They were there so that any attack would kill Americans immediately, which made the American commitment credible in a way no signature could.` }
          ]
        },
        {
          heading: 'Why 1955 has two entries',
          blocks: [
            { p: `The Warsaw Pact was signed in May <span class="num">1955</span>, and the sequence matters more than the date. West Germany joined NATO the same month, ten years after the end of a war in which German armies had reached the outskirts of Moscow. The Warsaw Treaty Organization was the formal answer, binding eight Eastern European states to mutual defense under a command structure headed by a Soviet officer.` },
            { p: `The two alliances were not mirror images, and saying how they differed is worth a mark in a comparison question. NATO members were sovereign states that could and did argue with the alliance and with Washington: France withdrew from the integrated military command in <span class="num">1966</span> while remaining in the treaty. Soviet forces were already stationed across Eastern Europe before the Pact existed, so the treaty formalized a control that occupation had already established, and its most consequential uses were inward. Warsaw Pact forces invaded Czechoslovakia in <span class="num">1968</span> to end the reform program known as the Prague Spring, and Soviet troops had already crushed the Hungarian uprising in <span class="num">1956</span>. In <span class="num">1968</span> Brezhnev articulated the doctrine that carries his name: that socialist states had a collective right, in practice a Soviet right, to intervene where socialism was judged to be under threat.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that NATO and the Warsaw Pact were simply the same kind of thing on opposite sides. They were both mutual defense treaties with integrated commands, and that similarity is real and worth stating. But NATO was never used against a member, while the Warsaw Pact's largest operation was the <span class="num">1968</span> invasion of one of its own members, and no NATO state was governed by a party the alliance leader had installed. The precise version of the comparison is the one that scores: both alliances converted the superpower's protection into an automatic commitment, and only one of them also functioned as an instrument for policing the bloc's internal politics.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Automatic commitment as deterrence. <em>The mechanism is that a treaty defining an attack on one member as an attack on all, backed by an integrated command and by the aggressor's own troops standing where the attack would fall, removes the calculation the attacker is counting on. The value of Article 5 is precisely that no government gets to decide, in the moment, whether this particular border is worth a war.</em>`,
        limit: `The same automatic quality is what makes a local incident dangerous, and it never covered everything: NATO's guarantee applied to Europe and North America, which is one reason the actual fighting happened in Korea, Indochina, the Middle East, Africa and Latin America.`,
        comparison: `Against <em>Topic 8.3</em> on proxy wars: an alliance is how a superpower commits to a place it will defend, and a proxy war is what happens in the places it has not committed to. Reading the two together tells you why the map of the fighting looks the way it does.`
      },
      terms: [
        ['Article 5', 'The North Atlantic Treaty clause treating an armed attack on one member as an attack on all, the mechanism that makes the commitment automatic.'],
        ['Berlin blockade', 'The Soviet closure of land routes into West Berlin from June 1948 to May 1949, answered by an eleven-month airlift rather than an armed convoy.'],
        ['Warsaw Pact', 'The 1955 Eastern bloc mutual defense treaty, signed the month West Germany joined NATO, and used most consequentially against a member in 1968.'],
        ['Brezhnev Doctrine', 'The claim, stated after the 1968 invasion of Czechoslovakia, of a collective right to intervene where socialism was judged threatened.'],
        ['Prague Spring', 'The 1968 Czechoslovak reform program, ended by a Warsaw Pact invasion, and the clearest test of how far reform inside the bloc could go.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'bomb',
      num: '03',
      accent: 'iron',
      name: 'A Weapon Whose Purpose Was Not to Be Used',
      navLabel: 'The bomb',
      dates: '1949 to 1972 &nbsp;·&nbsp; The first Soviet test to SALT I',
      thesis: `Nuclear weapons did not make the Cold War safe. They made a direct war between the superpowers so expensive that both sides looked for other places to compete, which is why the period is peaceful in Europe and extraordinarily violent almost everywhere else.`,
      parts: [
        {
          heading: 'The arithmetic of deterrence',
          blocks: [
            { p: `The United States tested and used atomic weapons in <span class="num">1945</span>. The Soviet Union tested one in August <span class="num">1949</span>, earlier than most American estimates had expected, helped by espionage inside the wartime American program. Both then built thermonuclear weapons, the United States testing one in <span class="num">1952</span> and the Soviet Union in <span class="num">1953</span>, with yields hundreds of times greater than the bombs of <span class="num">1945</span>. Britain, France and China followed as nuclear powers, in <span class="num">1952</span>, <span class="num">1960</span> and <span class="num">1964</span>.` },
            { p: `The change that made deterrence stable was not the size of the warheads but the survivability of the delivery systems. When Sputnik went into orbit in October <span class="num">1957</span>, it demonstrated a rocket capable of reaching another continent, and intercontinental missiles, and later missiles in submarines, meant that neither side could destroy the other's arsenal in a first strike. Once each side is certain to survive an attack with enough weapons to answer it, launching first buys nothing. That is the condition called <span class="kt">mutually assured destruction</span>, and the word to keep is <b>second strike</b>: deterrence rests on what you can still do after being hit.` },
            { p: `Two consequences follow directly. Conventional war between the superpowers becomes far too risky, because any conventional war between nuclear states might not stay conventional. And competition therefore moves to places where the fighting can be kept limited: to clients, to coups, to aid, to arms sales, and to prestige contests like the space program. The Cold War's violence was displaced rather than prevented, which is the volume's argument arriving with a specific cause.` }
          ]
        },
        {
          heading: 'October 1962, and what both sides learned',
          blocks: [
            { p: `In <span class="num">1962</span> the Soviet Union began installing nuclear missiles in Cuba, an ally since the revolution of <span class="num">1959</span> and a state with a genuine fear of American invasion after the failed Bay of Pigs landing in <span class="num">1961</span>. American reconnaissance found them in October. Kennedy imposed a naval quarantine rather than ordering the air strike several advisers wanted, which again chose the option that left the other side a way not to fire. After thirteen days the missiles were withdrawn in exchange for a public American undertaking not to invade Cuba and a private agreement to remove American missiles from Turkey.` },
            { p: `The mechanism to take from the crisis is that both governments discovered how little control they had over events once forces were deployed and communication was slow. The response was a set of arrangements to make the system less accident-prone: a direct communications link between Washington and Moscow in <span class="num">1963</span>, the Limited Test Ban Treaty the same year, the Non-Proliferation Treaty in <span class="num">1968</span>, and the SALT I agreements and the Anti-Ballistic Missile Treaty in <span class="num">1972</span>. Arms control is not the opposite of the arms race. It is the arms race being managed by two governments who have concluded that some outcomes are worse for both of them than the competition is.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that nuclear weapons kept the peace, full stop. The claim that they deterred a great-power war in Europe is defensible and widely held, and it should be stated with its evidence rather than as a slogan. But the same decades saw the Korean War, two Indochina wars, the wars in Angola and Mozambique, the Ogaden war, the Iran-Iraq war and the Soviet war in Afghanistan, with combined deaths in the millions. The precise sentence is that nuclear weapons appear to have deterred direct war between the superpowers and simultaneously channelled their competition into the postcolonial world, where the fighting could be kept limited from Moscow and Washington but not from where it was happening.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Deterrence by second strike. <em>The mechanism is that once each side can survive a first strike with enough weapons to retaliate, attacking first buys no advantage, so a direct war becomes irrational for both. Missiles and submarines from the late 1950s made survivability real, and the effect was to freeze the European line and push the competition into places where a war could be kept limited.</em>`,
        limit: `It stabilized the center by making the periphery the theater, and it depended on assumptions about rational calculation that October 1962 came uncomfortably close to testing.`,
        comparison: `Against <em>Topic 8.8</em> on the end: the same arsenals that stabilized the confrontation also carried a cost the two economies could bear very differently, and the Soviet share of national output going to defense is one of the strongest explanations for why the competition ended when it did.`
      },
      terms: [
        ['Mutually assured destruction', 'The condition in which each side can survive a first strike and retaliate, making a first strike pointless and a direct war irrational.'],
        ['Second strike', 'The retaliatory capacity that survives an attack, which is what actually deters, rather than the size of the arsenal.'],
        ['Cuban Missile Crisis', 'The thirteen days of October 1962, resolved by withdrawal of Soviet missiles for an American pledge not to invade Cuba and a private removal of missiles from Turkey.'],
        ['Arms control', 'Negotiated limits such as the 1963 Test Ban, the 1968 Non-Proliferation Treaty and SALT I in 1972, which manage a rivalry rather than ending it.'],
        ['Nuclear proliferation', 'The spread of nuclear weapons beyond the first possessor, reaching the Soviet Union in 1949, Britain in 1952, France in 1960 and China in 1964.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'nonaligned',
      num: '04',
      accent: 'oxide',
      name: 'The Third Position, and What It Cost to Hold',
      navLabel: 'Non-alignment',
      dates: '1955 to 1979 &nbsp;·&nbsp; Bandung to the Havana summit',
      thesis: `Non-alignment was not neutrality and it was not passivity. It was a strategy for extracting the maximum from two rivals by refusing to be permanently owned by either, and the reason it is hard to evaluate is that it worked as leverage far more often than it worked as independence.`,
      parts: [
        {
          heading: 'Bandung, and what was actually agreed',
          blocks: [
            { p: `In April <span class="num">1955</span> representatives of <span class="num">29</span> Asian and African states met at Bandung in Indonesia, convened by President Sukarno, with neither superpower present. Attendance itself was the argument: most of these states had been colonies within living memory and several were less than a decade old. Nehru of India, Nasser of Egypt, Zhou Enlai of China and Nkrumah's Gold Coast delegation were among the participants, and the closing communiqué set out principles of sovereign equality, non-interference, peaceful settlement of disputes and opposition to colonialism in all its forms.` },
            { p: `The argument the leaders made is more specific than a preference for peace, and it is the part worth writing down. Nehru's version was that a bloc system reproduces the imperial pattern: a small number of powerful states decide, and everyone else supplies bases, soldiers and votes. Nkrumah's version was that political independence without economic independence is incomplete, and that a newly independent state which simply switched patrons had not finished decolonizing. Sukarno framed the conference as the first intercontinental meeting of colored peoples in history, which is a claim about who was in the room rather than about policy.` },
            { p: `Bandung was a conference, not an organization. The <span class="kt">Non-Aligned Movement</span> was founded formally at Belgrade in <span class="num">1961</span>, on the initiative of Tito of Yugoslavia, Nehru, Nasser, Sukarno and Nkrumah, and it grew as decolonization added members. Its practical instrument was the United Nations General Assembly, where after <span class="num">1960</span> the newly independent states held a majority of votes, and where the movement pressed a shared agenda on decolonization, on apartheid in South Africa, and later on the terms of trade between commodity exporters and industrial economies.` }
          ]
        },
        {
          heading: 'Leverage, and its price',
          blocks: [
            { p: `The mechanism of non-alignment is an auction. A government that has not committed can seek a dam from one side and wheat from the other, and can raise the price of its alignment by making the alternative visible. Nasser is the clearest case: when American and British financing for the Aswan High Dam was withdrawn in <span class="num">1956</span>, he nationalized the Suez Canal Company to fund it, and Soviet financing followed. Egypt received Soviet arms and Soviet engineers while remaining formally non-aligned.` },
            { p: `Now the honest limit, which the strongest answers include. Egypt expelled Soviet military advisers in <span class="num">1972</span> and had realigned toward the United States by the later <span class="num">1970</span>s, ending with the Camp David agreement in <span class="num">1978</span> and the Egypt-Israel treaty in <span class="num">1979</span>. India, the movement's most consistent voice, bought most of its weapons from the Soviet Union and signed a treaty of friendship with Moscow in <span class="num">1971</span>. Cuba was a founding-generation member of the movement and hosted its <span class="num">1979</span> summit while being economically dependent on Soviet subsidies and sending troops to fight in Angola and Ethiopia. Nkrumah was overthrown by a military coup in <span class="num">1966</span> while abroad, and Sukarno was displaced after the violence of <span class="num">1965</span> and <span class="num">1966</span> in Indonesia, in which hundreds of thousands of people were killed.` },
            { p: `So historians divide over what the movement was. One reading takes it as a genuine third force that shaped the international agenda, above all on decolonization and apartheid, and gave small states a collective voice they had never had. Another reads it as a bargaining posture whose members aligned in practice while claiming not to, and points to the fact that the movement could rarely agree on anything that divided its members. Both readings are supported by the record, and the useful move in an essay is to distinguish the arenas: the movement was substantially effective at the United Nations on colonial questions and substantially ineffective at keeping the Cold War out of its members' internal politics.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: conference records and arms transfer data disagree usefully',
              html: `Two very different bodies of evidence bear on non-alignment, and holding both is what makes an argument about it defensible. The conferences produced published communiqués, speeches and resolutions, which record what leaders committed to in public and are the right source for what the movement claimed to be. Arms transfer registers, aid disbursement records and trade statistics record what governments actually bought, from whom, and on what credit. A student who reads only the communiqués concludes that non-alignment was real; one who reads only the arms data concludes it was a fiction. The interesting history is in the gap, and the honest formulation is that non-alignment described a diplomatic strategy accurately and a set of material relationships only partially.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Non-alignment as leverage. <em>The mechanism is an auction: a government that has not committed can extract aid, arms, dam financing and diplomatic protection from both blocs by keeping the alternative credible, which is why Nasser could answer the withdrawal of Aswan funding in 1956 by nationalizing the canal and taking Soviet money instead.</em>`,
        limit: `Leverage is not independence. India bought Soviet weapons and signed a friendship treaty in 1971, Egypt expelled Soviet advisers in 1972 and realigned toward Washington, Cuba hosted the 1979 summit on a Soviet subsidy, and both Nkrumah and Sukarno lost power to domestic forces during the period.`,
        comparison: `Against <em>Topic 8.5</em> on independence itself: Bandung's argument was that formal sovereignty is not the finish line, since a state that has swapped an imperial ruler for a superpower patron has changed the form of its dependence rather than ended it. That claim is the bridge from decolonization to Topic 9.4 on the postwar economic order.`
      },
      terms: [
        ['Bandung Conference', 'The April 1955 meeting of 29 Asian and African states in Indonesia, with no superpower present, which set out principles of sovereignty and anti-colonialism.'],
        ['Non-Aligned Movement', 'The organization founded at Belgrade in 1961, whose main instrument was the UN General Assembly majority that decolonization created.'],
        ['Sukarno', 'The first president of Indonesia, who convened Bandung and was displaced from power after the mass violence of 1965 and 1966.'],
        ['Kwame Nkrumah', 'The leader of Ghana to independence in 1957, who argued that political independence without economic independence was incomplete, and was overthrown in 1966.'],
        ['Neocolonialism', 'The argument that formal independence can coexist with continued economic control by outside powers, the core of the Bandung generation’s critique.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card carries a claim, its evidence and the mechanism that connects them. The fourth is the one that separates a good Unit 8 answer from an average one, because most students name Bandung and stop.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Marshall aid was containment carried out with freight, not charity',
        body: `Roughly 13 billion dollars went to Western Europe from 1948, and it worked in three specific ways. The dollars were spent largely on American goods, which solved Europe's actual problem of needing to buy from a country whose currency it did not have. The local currency raised when governments sold those goods went into counterpart funds for approved domestic investment, so each dollar worked twice. And participation required joint planning and opening trade between recipients. The political aim was stated at the time: large communist parties in France and Italy drew strength from stalled recovery, and restoring living standards was judged cheaper than any other way of holding those countries. The Soviet Union was formally invited, objected to the disclosure and coordination requirements, walked out of the Paris talks, and built Cominform and Comecon instead.`
      },
      {
        category: 'Comparison',
        title: 'Both alliances made protection automatic; only one was used against a member',
        body: `Article 5 of the 1949 North Atlantic Treaty defines an attack on one as an attack on all, backed by an integrated command and by American troops stationed in Europe whose presence guaranteed that any attack would kill Americans at once. The Warsaw Pact of 1955, signed the month West Germany joined NATO, bound eight states under a Soviet-headed command. Both converted a superpower's protection into a commitment no government could reconsider in the moment, which is what deterrence requires. The difference to state precisely: France left NATO's integrated command in 1966 and stayed in the treaty, while the Warsaw Pact's largest operation was the 1968 invasion of Czechoslovakia, justified afterward by the Brezhnev Doctrine.`
      },
      {
        category: 'Causation',
        title: 'Nuclear weapons did not prevent the violence, they relocated it',
        body: `Once intercontinental missiles and submarines from the late 1950s meant neither side could destroy the other's arsenal in a first strike, striking first bought nothing, and a direct war became irrational for both. That is mutually assured destruction, and the operative term is second strike. The consequence is the shape of the period: no war in Europe, and the Korean War, two Indochina wars, Angola, the Ogaden and Afghanistan outside it. October 1962 then showed both governments how fast control could slip, which produced the hotline in 1963, the Test Ban that year, the Non-Proliferation Treaty in 1968 and SALT I in 1972. Arms control is the rivalry being managed, not abandoned.`
      },
      {
        category: 'Complexity',
        title: 'Non-alignment was effective as leverage and porous as a practice, and the good answer says both',
        body: `Twenty-nine states met at Bandung in 1955 with neither superpower in the room, and the movement founded at Belgrade in 1961 used the UN General Assembly majority that decolonization created to press hard on colonialism and apartheid. The leverage was real: Nasser answered the withdrawal of Aswan financing in 1956 by nationalizing the Suez Canal Company and taking Soviet money. But India bought Soviet arms and signed a friendship treaty in 1971, Egypt expelled Soviet advisers in 1972 and realigned toward Washington by the end of the decade, and Cuba hosted the 1979 summit while dependent on Soviet subsidies and fighting in Angola. Distinguish the arenas: substantially effective at the United Nations on colonial questions, substantially unable to keep the Cold War out of members' internal politics.`
      }
    ]
  }
};
