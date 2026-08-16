'use strict';

/**
 * Topic 9.8, Institutions Developing in a Globalized World: the deep reading.
 *
 * Why this exists. The success criteria name the General Assembly, the Security
 * Council veto and peacekeeping, and ask a student to explain how globalization
 * changed interactions among states. The First & 10 gets the story right. What
 * it cannot supply in three sections is the analytic tool that makes the record
 * intelligible, and without one a student writes either "the UN keeps the
 * peace" or "the UN failed", and both are unmarkable.
 *
 * The tool this chapter supplies: an international institution built by
 * sovereign states cannot compel them, so its power comes from lowering the
 * cost of cooperating rather than from commanding. It follows that an
 * institution performs well on coordination problems, where every state gains
 * from a shared rule and nobody's core interest is threatened, and poorly where
 * it must override an interest a powerful state holds. Grade any institution in
 * this topic on that axis and the pattern of successes and failures stops
 * looking random.
 *
 * The veto is treated as the price of participation rather than as a design
 * fault, because that is what the 1945 record supports and because it converts
 * a complaint into a mechanism. The chapter then refuses to let that become an
 * excuse: saying the veto was necessary to found the organization is a claim
 * about 1945 and not a defense of it now, and the reform debate is presented as
 * unresolved with the procedural reason it cannot move.
 *
 * Three things carried deliberately:
 *
 *   1. The UN's own self-critical reports of 1999 on Rwanda and Srebrenica are
 *      used as the sourcing case. An organization publishing evidence against
 *      itself is unusual, and it is why the failures are documented in more
 *      detail than the successes.
 *   2. The dull agencies get real space. Spectrum allocation and air traffic
 *      standards are where international cooperation actually works, and the
 *      reason is structural rather than a matter of goodwill.
 *   3. The realist and institutionalist positions are named, because the
 *      effectiveness of international institutions is a live scholarly dispute
 *      in which both sides accept the same facts about the veto.
 */

module.exports = {
  topicKey: 't9-8',
  slug: 'topic-9-8-institutions-globalized-world',
  sourceFile: 'deep-reading-topic-9-8-institutions-globalized-world.html',
  lessonFile: 'lesson-9-8-institutions-globalized-world.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 9.8: The Price of Keeping Everyone Inside',
  eyebrow: 'Topic 9.8 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Price of Keeping Everyone <em>Inside</em>',
  deck: `The League of Nations was designed to stop wars and the most powerful states either never joined it or walked out of it. The people who wrote the United Nations Charter in <span class="num">1945</span> had watched that happen, and they made a trade: the great powers would be given a permanent veto, and in exchange they would be inside the building. Almost everything the organization has and has not been able to do since follows from that bargain, and this chapter is about how to reason from it rather than complain about it.`,
  meta: ['Four sections', 'The bargain, the chamber, the field, the axis', 'Read alongside the First & 10'],
  footerNote: 'Topic 9.8 &nbsp;·&nbsp; The Price of Keeping Everyone Inside &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the design and the reason for it, section 02 is what the General Assembly turned into, section 03 is what the organization does in the field and what it has failed at, and section 04 is the analytic tool that makes the whole record predictable. If a checkpoint asks you to qualify an argument about international institutions, section 04 is where the qualification comes from.`,
    steps: [
      `<b>01 The bargain:</b> the League's specific failure mechanisms, and why the veto was the price of a universal organization.`,
      `<b>02 The chamber:</b> one state one vote, non-binding resolutions, and how decolonization changed what the Assembly was for.`,
      `<b>03 The field:</b> peacekeeping from 1956, the failures of the 1990s, and the agencies nobody argues about.`,
      `<b>04 The axis:</b> why institutions succeed at coordination and fail at compulsion, with the scholarly dispute named.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'bargain',
      num: '01',
      accent: 'gold',
      name: 'Designed Against the League',
      navLabel: 'The bargain',
      dates: '1920 to 1945 &nbsp;·&nbsp; From Geneva to San Francisco',
      thesis: `The United Nations Charter is best read as a list of corrections to specific things that had gone wrong between <span class="num">1920</span> and <span class="num">1939</span>. Read it that way and the veto stops looking like a flaw somebody failed to notice, and starts looking like what it was, the price of getting the great powers to sign.`,
      parts: [
        {
          heading: 'What went wrong, mechanism by mechanism',
          blocks: [
            { p: `The <span class="kt">League of Nations</span> came into being in January <span class="num">1920</span>, its Covenant written into the Treaty of Versailles. It had three structural weaknesses, and naming them individually is what turns a story into an explanation.` },
            { p: `<b>Absent great powers.</b> The United States Senate declined to ratify the treaty, so the state whose president had championed the League never joined it. Germany joined in <span class="num">1926</span> and left in <span class="num">1933</span>; Japan announced its withdrawal in <span class="num">1933</span> after the League's inquiry criticized its seizure of Manchuria; the Soviet Union joined only in <span class="num">1934</span> and was expelled in <span class="num">1939</span>. An organization for managing great-power conflict spent most of its life missing several great powers.` },
            { p: `<b>The unanimity rule.</b> Substantive decisions in the Council and the Assembly required unanimity of those voting, excluding the parties to a dispute. In practice this meant that almost any state could stop almost anything, so the institution's default setting was inaction.` },
            { p: `<b>No force and no independent means.</b> The League had no army and no revenue of its own. Its sanctions against Italy after the invasion of Ethiopia in October <span class="num">1935</span> excluded oil and left the Suez Canal open to Italian shipping, which is the clearest available demonstration that a measure agreed in principle and hollowed out in practice is worse than none, because it teaches an aggressor exactly how much the institution will actually do. Haile Selassie addressed the Assembly in June <span class="num">1936</span> and warned it that what had happened to Ethiopia would happen to others.` }
          ]
        },
        {
          heading: 'The corrections, and the trade at the center of them',
          blocks: [
            { p: `The design was worked out over four years of wartime meetings: the Atlantic Charter of August <span class="num">1941</span>, the Declaration by United Nations of 1 January <span class="num">1942</span> which supplied the name, the Dumbarton Oaks conversations in <span class="num">1944</span> which produced the draft, and the Yalta meeting of February <span class="num">1945</span> which settled the voting formula. Fifty states met at San Francisco from April <span class="num">1945</span> and signed the Charter on 26 June; Poland signed shortly afterwards, making fifty-one original members, and the Charter entered into force on 24 October <span class="num">1945</span>.` },
            { p: `Three corrections map directly onto the three failures. Against absence, near-universal membership and a standing seat for each great power. Against unanimity, a <span class="kt">Security Council</span> of limited size that can act by a majority, so that most states cannot block it. Against powerlessness, Chapter VII, which lets the Council adopt decisions binding on all members, impose sanctions and authorize the use of force.` },
            { p: `And the price. The five states given permanent seats, the United States, the Soviet Union, the United Kingdom, France and China, each received a <span class="kt">veto</span> over substantive decisions. This was not an oversight and it was not smuggled in. The American negotiators understood that the Senate would not ratify a charter that could commit American forces against American wishes, and the Soviet Union would not join a body a Western majority could turn against it. A universal organization without a veto was not on offer in <span class="num">1945</span>. The choice was between the organization that exists and no organization at all.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the veto is a design flaw that has crippled the United Nations, and do not write that it was obviously right either. Both are one-sided. The defensible sequence is: the veto was the condition on which the great powers joined, so it is the reason the organization is universal rather than a repeat of the League; it also guarantees that the Council cannot act against a permanent member or its close allies, which is the source of every paralysis from the Cold War onward; and those two sentences are the same fact, not a pair of competing opinions. Then add the part most answers miss. Saying the veto was necessary in <span class="num">1945</span> is a claim about <span class="num">1945</span>. It is not an argument that a Council reflecting the power distribution of that year should be permanent, which is precisely what the reform debate is about.`
            } },
            { p: `That debate has a procedural answer, and it is worth knowing because it explains eighty years of stalemate. The Council has been enlarged once: an amendment adopted in <span class="num">1963</span> and in force from <span class="num">1965</span> raised it from eleven members to fifteen by adding non-permanent seats. Under Article 108, any Charter amendment requires a two-thirds vote in the General Assembly and ratification by two-thirds of members <b>including all five permanent members</b>. So the permanent members hold a veto over the reform of their own veto. Proposals have been on the table for decades, from a group of states seeking permanent seats, from a rival group opposing new permanent seats, and from the African Union's <span class="num">2005</span> common position seeking two permanent African seats with the veto. None can pass without the consent of the states they would constrain.` }
          ]
        }
      ],
      useThis: {
        tool: `The veto as the price of participation. <em>The mechanism is that a state will only join an institution that can bind it if it retains a way to protect its vital interests, so an organization that wants the powerful inside must give them a protected position, and an organization that refuses to has the powerful outside instead. The League chose the second without meaning to and became an assembly of the willing; the United Nations chose the first deliberately and became universal and blockable. There is no third option, which is why every proposal to abolish the veto stalls on the fact that the abolition itself can be vetoed.</em>`,
        limit: `The bargain explains the Council's paralysis and not its every failure. Missions have also failed for want of troops, money, mandate clarity and local consent, none of which is a veto problem, and treating the veto as the explanation for everything is a way of avoiding the harder questions in section 03.`,
        comparison: `Against the <em>Concert of Europe</em> after <span class="num">1815</span> in Topic 6.1: that too was an arrangement among great powers to manage crises by consultation, and it also worked when their interests aligned and stopped working when they did not, most visibly by the <span class="num">1850</span>s. The United Nations is that principle written into a charter with a permanent secretariat and a universal membership attached, which is a real institutional advance and does not change the underlying condition that great powers cannot be coerced cheaply.`
      },
      terms: [
        ['League of Nations', 'The body founded in 1920 whose three structural weaknesses, absent great powers, a unanimity rule and no force of its own, the UN Charter was written to correct.'],
        ['Security Council', 'The organ with primary responsibility for peace and security, able under Chapter VII to adopt binding decisions, impose sanctions and authorize force.'],
        ['Veto', 'The power of each of the five permanent members to block a substantive Council decision, the condition on which they joined and the source of the Council\'s paralysis.'],
        ['Chapter VII', 'The part of the Charter allowing decisions binding on all members, which is the authority the League never had.'],
        ['Article 108', 'The amendment rule requiring two-thirds of the Assembly and ratification by two-thirds of members including all five permanent members, which makes veto reform self-blocking.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'chamber',
      num: '02',
      accent: 'rust',
      name: 'One Vote Each, and No Force at All',
      navLabel: 'The chamber',
      dates: '1945 to 2011 &nbsp;·&nbsp; Fifty-one members to one hundred and ninety-three',
      thesis: `The General Assembly can pass anything and compel nothing, which sounds like a description of futility. It is not. Understanding what a non-binding resolution actually does is the most transferable idea in this chapter, and Topic 9.5 has already supplied the mechanism.`,
      parts: [
        {
          heading: 'What a body with no power can do',
          blocks: [
            { p: `In the <span class="kt">General Assembly</span> every member state has one vote, from the smallest to the largest, and its resolutions on most matters are recommendations rather than law. The great powers accepted sovereign equality in that chamber precisely because it cost them nothing enforceable.` },
            { p: `What it produces instead is a standard and a record, and the Topic 9.5 chapter explains why that is not nothing: a publicly accepted norm converts criticism from a demand for change into a demand for consistency, and it gives citizens and outside monitors a fixed benchmark to document against. The Universal Declaration of Human Rights, adopted by this chamber in December <span class="num">1948</span>, bound nobody and has been quoted at governments ever since. Assembly resolutions did the same work on colonial rule and on apartheid: Resolution 1514 of December <span class="num">1960</span>, the Declaration on the Granting of Independence to Colonial Countries and Peoples, made self-determination a claim that could be pressed in a public forum, and the Assembly maintained pressure on South Africa for decades, establishing a special committee against apartheid in <span class="num">1962</span> and refusing to accept the South African delegation's credentials in <span class="num">1974</span>.` },
            { p: `The Assembly also found a workaround for a blocked Council. In November <span class="num">1950</span> it adopted the <span class="kt">Uniting for Peace</span> procedure, under which, if the Council is deadlocked by a veto, the Assembly may meet in emergency special session and make recommendations, including on the use of force. The Council's earlier authorization of the defense of South Korea in June <span class="num">1950</span> had been possible only because the Soviet delegate was boycotting the Council over Chinese representation and therefore was not present to veto it, which was a lesson nobody wanted to depend on twice.` }
          ]
        },
        {
          heading: 'Decolonization changed what the building was for',
          blocks: [
            { p: `The membership went from fifty-one in <span class="num">1945</span> to one hundred and ninety-three, with South Sudan joining as the most recent in July <span class="num">2011</span>. Almost all of that growth came from decolonization, and the single most concentrated year was <span class="num">1960</span>, when seventeen newly independent states joined, sixteen of them African. This is the largest change in the institution's history and it happened without amending a word of the Charter.` },
            { p: `The consequences ran in two directions at once. Newly independent states used the one-vote chamber to build majorities they could never have assembled by material power, forming the Group of 77 in <span class="num">1964</span> to coordinate economic positions and pressing through the <span class="num">1970</span>s for what was called a New International Economic Order. Meanwhile the Council's composition, and the veto in particular, kept reflecting <span class="num">1945</span>, with one adjustment: the Assembly voted in October <span class="num">1971</span> to seat the People's Republic of China in the seat China had held since the founding, which changed who exercised a permanent seat without changing the structure.` },
            { p: `That is the continuity and change answer this topic is built for, and it is unusually clean. <b>Change:</b> membership almost quadrupled, the majority of members became states that had been colonies in <span class="num">1945</span>, and the agenda shifted toward decolonization, development and economic justice. <b>Continuity:</b> binding authority stayed in a Council whose permanent membership and veto have not moved since the Charter was signed. An institution's rules and its realities drifted apart, and the drift is measurable.` }
          ]
        }
      ],
      useThis: {
        tool: `Legitimacy as a currency the weak can accumulate. <em>The mechanism is that a chamber with one vote per state distributes a resource, formal endorsement, in proportion to numbers rather than to power, so a coalition of small and poor states can produce an authoritative statement that a great power cannot prevent and would prefer not to be contradicting. That does not compel anyone. It raises the political cost of the conduct it names, which is exactly the lever Topic 9.5 describes, operating at the scale of the whole international system.</em>`,
        limit: `The currency only buys something where reputation matters. A state indifferent to its international standing can absorb any number of resolutions, which is why the Assembly's record on apartheid and colonial rule, where the targets needed trade, loans and recognition, looks so different from its record on conflicts involving states that need none of those things.`,
        comparison: `Against the <em>Mandate of Heaven</em> in Topic 1.1 and the human rights standard in Topic 9.5: all three are cases where a publicly stated criterion of legitimacy gives an otherwise powerless party something to hold a ruler to. The General Assembly's distinctive contribution is that it makes the statement continuously, on the record, and with a verifiable count of who agreed.`
      },
      terms: [
        ['General Assembly', 'The chamber in which every member state has one vote and whose resolutions on most matters are recommendations rather than binding law.'],
        ['Sovereign equality', 'The Charter principle that all member states are formally equal, expressed in the Assembly and deliberately absent from the Council.'],
        ['Uniting for Peace', 'The 1950 procedure allowing the Assembly to meet in emergency special session and recommend action when the Council is deadlocked by a veto.'],
        ['Resolution 1514', 'The Assembly\'s 1960 declaration on granting independence to colonial countries and peoples, which made self-determination a standard states could be held to.'],
        ['Group of 77', 'The coordinating bloc of developing states formed in 1964, the clearest use of numerical majority as a substitute for material power.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'field',
      num: '03',
      accent: 'iron',
      name: 'Blue Helmets and Radio Frequencies',
      navLabel: 'The field',
      dates: '1956 to 2011 &nbsp;·&nbsp; What the organization actually does',
      thesis: `The two halves of this section look unrelated and are the same argument. Peacekeeping is the organization attempting the hardest kind of task and sometimes failing catastrophically; the technical agencies are the organization performing the easiest kind of task so reliably that nobody notices. The difference between the two is the subject of section 04.`,
      parts: [
        {
          heading: 'Peacekeeping, and its three conditions',
          blocks: [
            { p: `<span class="kt">Peacekeeping</span> is not in the Charter. It was improvised. During the Suez crisis, with Britain and France both parties to the conflict and both holding vetoes, the Council could not act, so the General Assembly used the Uniting for Peace procedure and in November <span class="num">1956</span> created the first United Nations Emergency Force to supervise the withdrawal and patrol the armistice line. Lester Pearson of Canada, who had pressed the idea, received the Nobel Peace Prize in <span class="num">1957</span>. The origin is worth knowing because it shows the system routing around its own blockage.` },
            { p: `Classical peacekeeping ran on three principles: the consent of the host state, impartiality between the parties, and no use of force except in self-defense. Each is a limit disguised as a principle. Consent means a mission enters only where a government permits it and can be required to leave; impartiality means the force does not take a side even when one side is doing the killing; and self-defense only means lightly armed soldiers watching. Missions are also staffed by soldiers member states choose to lend, and for decades the largest troop contributors have been middle-income and lower-income states such as Bangladesh, India, Pakistan, Nepal, Ethiopia and Rwanda, while the assessed cost falls mainly on the largest economies. The states that authorize a mission and the states that serve in it are largely different states, which is a structural fact worth a sentence of its own.` },
            { p: `In the <span class="num">1990</span>s those limits produced two catastrophes. In Rwanda in <span class="num">1994</span>, a small mission with a monitoring mandate was present when mass killing began, and the Council voted in April to reduce rather than reinforce it; estimates of the dead over roughly a hundred days commonly run from about five hundred thousand to eight hundred thousand, with a later Rwandan government count above one million, and these are reconstructions from census comparison, survivor testimony and burial records rather than a register. At Srebrenica in July <span class="num">1995</span>, a town the Council had itself declared a safe area, a lightly armed contingent could not prevent the separation and killing of more than eight thousand Bosniak men and boys, an act subsequently found to be genocide by international courts.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the organization published the evidence against itself',
              html: `In <span class="num">1999</span> the United Nations released two extraordinary documents: a report by the Secretary-General on the fall of Srebrenica in November, and in December the report of an independent inquiry into the organization's actions in Rwanda, chaired by the former Swedish prime minister Ingvar Carlsson. Both were commissioned by the institution and both blamed it, naming failures of analysis, of the mandate, of member states unwilling to supply troops, and of the Secretariat's own judgment. Almost no state produces documents like this about its own conduct, and it is why the UN's worst failures are documented in far more detail than most of its successes, which creates a real distortion in how the organization is discussed: the record is more complete where it is worst. Use the reports for what they are, primary evidence produced by the actor, and note the incentive that makes them unusual, which is that an institution whose only asset is legitimacy can sometimes buy more of it by admitting a failure than by denying one.`
            } },
            { p: `The response was procedural and doctrinal. The Brahimi report of <span class="num">2000</span> argued for realistic mandates and for forces able to defend the civilians they were sent to protect. At the World Summit of <span class="num">2005</span> the assembled governments accepted a <span class="kt">responsibility to protect</span>, agreeing that each state has a duty to protect its own population from genocide, war crimes, ethnic cleansing and crimes against humanity, and that the international community, through the Council, may act if a state manifestly fails. In March <span class="num">2011</span> the Council authorized measures in Libya including the protection of civilians; the operation that followed contributed to the fall of the government, and several states that had abstained argued afterwards that the mandate had been exceeded. Support for using the doctrine cooled, which is the standard pattern and worth naming: a precedent that a state believes was abused makes the next authorization harder.` }
          ]
        },
        {
          heading: 'The agencies nobody argues about',
          blocks: [
            { p: `Now the other half. The World Health Organization, founded in <span class="num">1948</span>, coordinated the campaign that ended smallpox: the last natural case occurred in Somalia in <span class="num">1977</span>, eradication was certified in <span class="num">1979</span> and declared by the World Health Assembly in <span class="num">1980</span>. The global polio initiative launched in <span class="num">1988</span> eliminated two of the three wild poliovirus types, certified in <span class="num">2015</span> and <span class="num">2019</span>, with the remaining type still circulating in a small number of countries at that point.` },
            { p: `Less visible and just as instructive are the coordinating bodies. The International Telecommunication Union, which predates the UN, having been founded in <span class="num">1865</span>, and became a specialized agency in <span class="num">1947</span>, allocates radio spectrum and satellite orbital positions. The International Civil Aviation Organization, created under the Chicago Convention of <span class="num">1944</span>, sets the standards that let an aircraft certified in one country land in another. The Universal Postal Union of <span class="num">1874</span> makes a letter posted anywhere deliverable everywhere. The World Meteorological Organization moves weather data across borders continuously.` },
            { p: `None of these has enforcement powers worth mentioning, and all of them work, decade after decade, through wars and boycotts and every diplomatic crisis of the period. That is a fact requiring an explanation, and it is the explanation section 04 is for.` }
          ]
        }
      ],
      useThis: {
        tool: `Consent, impartiality and self-defense as the three limits of classical peacekeeping. <em>The mechanism is that a force which may only enter where the government agrees, may not favor either side, and may only shoot to defend itself is well matched to supervising a ceasefire both parties want kept, and structurally unable to stop a government or a militia that has decided to kill people. Rwanda and Srebrenica are not the doctrine failing; they are the doctrine being applied to a situation it was never designed for, which is why the reforms after 1999 were about mandates rather than about courage.</em>`,
        limit: `Mandates are not the only variable. Missions have also been under-resourced, badly commanded, slow to deploy and, in documented cases, responsible for serious abuses of the populations they were sent to protect, and an account that reduces every failure to the wording of a resolution is too neat.`,
        comparison: `Against the <em>League's sanctions on Italy</em> in <span class="num">1935</span>: those too were adopted in principle and hollowed out in application, and the result was the same lesson taught to observers, which is that the institution will do something and not enough. Comparing 1935 with 1994 is a strong continuity argument about what happens when a collective body acts at the level its most reluctant member will accept.`
      },
      terms: [
        ['Peacekeeping', 'Improvised from 1956 rather than provided for in the Charter, the classical form operating on consent, impartiality and force only in self-defense, later mandates authorizing more.'],
        ['Safe area', 'A zone declared protected by Council resolution, of which Srebrenica in 1995 is the case that showed a declaration without the means to defend it is worse than none.'],
        ['Brahimi report', 'The 2000 review arguing for realistic mandates and for forces capable of protecting the civilians they are deployed among.'],
        ['Responsibility to protect', 'The doctrine accepted at the 2005 World Summit that sovereignty carries a duty to protect a population, and that the Council may act where a state manifestly fails.'],
        ['Specialized agency', 'A technical body such as the ITU, ICAO or WHO that sets standards and coordinates practice, and whose reliability comes from the kind of problem it solves.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'axis',
      num: '04',
      accent: 'oxide',
      name: 'Coordination Is Easy, Compulsion Is Not',
      navLabel: 'The axis',
      dates: '1951 to 2015 &nbsp;·&nbsp; A tool for grading any institution',
      thesis: `Sort every institution in this topic by one question, whether it is asking states to coordinate or asking one to give something up, and its record becomes predictable. That single axis explains why the postal system works, why the climate agreements are shaped the way they are, and why the Council is blocked.`,
      parts: [
        {
          heading: 'The axis, and three tests of it',
          blocks: [
            { p: `A <span class="kt">coordination problem</span> is one where every party gains from a common rule and no party gains by defecting once the rule exists. Which side of the road to drive on, which frequency a distress call goes out on, which format an airport uses for a flight plan. There is no incentive to cheat, so an institution that merely publishes the standard is sufficient, and no enforcement is needed. That is why the ITU, ICAO and the postal union work through every diplomatic crisis of the century.` },
            { p: `A <span class="kt">collective action problem</span> is different: every party gains if all comply and each individual party gains more by defecting while others comply. Emissions, fisheries, arms control. Here publishing a standard is not enough, and the institution needs monitoring, and ideally a penalty. The Montreal Protocol of <span class="num">1987</span> on ozone-depleting substances, which the Topic 9.3 chapter treats in detail, is the case where this was achieved: a small number of producers, cheap substitutes available, clear measurement, and trade restrictions against non-parties, and it has been ratified by every United Nations member state.` },
            { p: `Climate is the same category and harder on every dimension, and the treaty design shows it. The Kyoto Protocol of <span class="num">1997</span>, in force from <span class="num">2005</span>, set binding targets for a subset of countries, and its central weakness was that the states with the fastest-growing emissions had no targets and the largest emitter at the time never ratified. The Paris Agreement of December <span class="num">2015</span> made the opposite trade: it is nearly universal, and its national commitments are self-determined and carry no penalty for missing them, relying instead on transparency, periodic review and pressure. Whether that trade was right is genuinely argued. What is not in doubt is that it is a design response to the collective action problem, choosing participation over enforcement, which is exactly the trade the <span class="num">1945</span> founders made with the veto.` },
            { p: `And a <span class="kt">compulsion problem</span> is when the institution must make a state do something against its judgment of its own vital interests. Nothing built by sovereign states does this reliably to a powerful state, and the record is unambiguous. The International Criminal Court, established by the Rome Statute of <span class="num">1998</span> and operating from <span class="num">2002</span>, has jurisdiction over the nationals and territory of states that joined, or over situations referred by the Security Council; the United States, China, Russia and India are not parties. The International Court of Justice hears cases between states that have consented to its jurisdiction. Both are real institutions doing real work within a boundary drawn by consent.` }
          ]
        },
        {
          heading: 'The one place sovereignty was actually pooled',
          blocks: [
            { p: `The European experiment is the exception that shows what the rest of the system did not do. Six states pooled authority over coal and steel in <span class="num">1951</span>, formed a common market by the Treaty of Rome in <span class="num">1957</span>, and through decisions of the European Court of Justice in the early <span class="num">1960</span>s accepted that European law takes precedence over conflicting national law within its fields and can be invoked by individuals in national courts. The Maastricht Treaty signed in February <span class="num">1992</span> and in force in November <span class="num">1993</span> created the European Union; the Schengen arrangements removed internal border checks among participating states from <span class="num">1995</span>; euro notes and coins circulated from <span class="num">2002</span>.` },
            { p: `That is a genuine transfer of sovereignty rather than a coordination agreement, and the conditions under which it happened are worth listing because they are so restrictive: a small initial group, comparable levels of wealth, a shared security threat, democratic governments, and a specific memory of what the alternative had cost. Other regional bodies have taken the coordination route instead. The Association of Southeast Asian Nations from <span class="num">1967</span> is built explicitly on non-interference; the African Union, which replaced the Organization of African Unity in <span class="num">2002</span>, went further than its predecessor in providing for intervention in extreme cases; Mercosur from <span class="num">1991</span> and the North American agreement in force from <span class="num">1994</span>, replaced by its successor in <span class="num">2020</span>, are trade arrangements rather than political unions. The variation is the evidence: states pool sovereignty rarely, and only in conditions that mostly do not obtain.` }
          ]
        },
        {
          heading: 'The dispute, and the actors that are not states',
          blocks: [
            { p: `Whether international institutions matter is a live argument in the study of international politics, and both sides accept the same facts. The <b>realist</b> position, argued most sharply by John Mearsheimer in <span class="num">1994</span>, is that institutions reflect the distribution of power rather than altering it, that states comply when compliance suits them, and that expecting more is a false promise. The <b>institutionalist</b> position, associated with Robert Keohane's work from <span class="num">1984</span>, accepts that states are self-interested and argues that institutions still change outcomes by reducing the cost of making agreements, supplying information about who is complying, and making relationships repeat, so that a state that cheats today pays for it in the next negotiation. Notice that Keohane's mechanism is precisely the coordination axis above, and that Mearsheimer's evidence is drawn from the compulsion end. They are largely right about different parts of the same system, and saying so is a better answer than picking a side.` },
            { p: `The last piece is the actors states did not create. The International Committee of the Red Cross dates from <span class="num">1863</span>, Amnesty International from <span class="num">1961</span>, and Doctors Without Borders from <span class="num">1971</span>, the latter founded partly on the argument that neutrality can amount to silence. These organizations have no territory, no vote and no army, and they matter through the mechanism Topic 9.5 identifies: documentation and publicity against a standard the target has accepted. Multinational corporations became global actors of a different kind, several with revenues larger than the output of many states, and the Topic 9.4 chapter explains how mobile capital shifts bargaining power away from governments. The map of world affairs, drawn in <span class="num">1900</span> almost entirely between governments, contains by <span class="num">2000</span> a great many actors that no government fully controls.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the United Nations failed to keep the peace, and do not write that it kept it either. Both claims measure the organization against a job it was never given: it has no army, no taxing power and no authority over a member's laws, and it is funded at a level, a regular budget in the low single-digit billions of dollars a year in the late <span class="num">2010</span>s plus a separate peacekeeping budget of a similar order, that is a small fraction of what a single large state spends on its own military. The markable claim is comparative and specific. Since <span class="num">1945</span> there has been no war directly between the major powers, which several causes compete to explain, nuclear deterrence prominent among them, and the organization's contribution is argued rather than established. What can be shown is narrower and still substantial: it made continuous negotiation the default, it supplied the forum in which decolonization was legitimated, it eradicated a disease, and it made a standard of conduct public enough to be quoted back at governments. Say what it did, name the mechanism, and leave the counterfactual open.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The coordination to compulsion axis. <em>The mechanism is that an institution built by sovereign states cannot command them, so its effectiveness depends entirely on how much it is asking: publishing a standard is enough where everyone gains from a shared rule, monitoring and penalties are needed where each party gains by defecting, and nothing built this way reliably compels a powerful state to act against what it judges to be its vital interest. Place any body in this topic on that axis and its record follows, which turns "are international institutions effective" from an opinion into a question with a specifiable answer.</em>`,
        limit: `The axis grades the difficulty of the task and does not predict every outcome. Institutions also succeed or fail on leadership, funding, timing and the skill of a secretariat, and the Montreal Protocol shows that a well-designed treaty can solve a collective action problem that the axis alone would rate as hard.`,
        comparison: `Against the <em>Bretton Woods institutions</em> in Topics 9.4 and 9.7: the IMF and World Bank sit at an unusual point on the axis, because a borrower in crisis has consented in the sense that it signed, and has consented under conditions that limit the choice, which is precisely why their conditionality generated the resistance Topic 9.7 traces while the postal union generated none.`
      },
      terms: [
        ['Coordination problem', 'A situation where all parties gain from a common rule and none gains by defecting, so publishing a standard is enough; the reason the technical agencies work.'],
        ['Collective action problem', 'A situation where all gain if all comply but each gains by defecting, which requires monitoring and ideally penalties, as with emissions and fisheries.'],
        ['Pooled sovereignty', 'Authority genuinely transferred to a supranational body, achieved in the European case from the 1950s and rare elsewhere.'],
        ['Realist and institutionalist', 'The two positions on whether institutions change outcomes, Mearsheimer in 1994 and Keohane from 1984, which accept the same facts and emphasize different parts of the system.'],
        ['Nongovernmental organization', 'A cross-border body such as the ICRC from 1863, Amnesty from 1961 or Doctors Without Borders from 1971, operating through documentation and publicity rather than authority.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a claim, its evidence and the mechanism connecting them. The last card is the qualification, and it is the one that separates an answer about institutions from a summary of what they are called.`,
    pairs: [
      {
        category: 'Causation',
        title: 'The Charter is a list of corrections, and the veto is the price on the invoice',
        body: `The League failed for three specifiable reasons: the United States never joined and Germany, Japan and the Soviet Union were absent for much of its life; substantive decisions needed unanimity, so anyone could block anything; and it had no force, which is why its sanctions on Italy in 1935 excluded oil and left Suez open. Each correction in the 1945 Charter maps onto one of those. Near-universal membership with permanent seats for the great powers, a Council that acts by majority rather than unanimity, and Chapter VII authority to bind members, impose sanctions and authorize force. The veto was what the great powers required in exchange, because the American Senate would not ratify a charter that could commit its forces and the Soviet Union would not join a body a Western majority could turn against it. A universal organization without a veto was not available in 1945.`
      },
      {
        category: 'Continuity and change',
        title: 'The membership was transformed and the binding authority was not',
        body: `Fifty-one members in 1945 became one hundred and ninety-three by 2011, almost all of the growth from decolonization, with seventeen states joining in 1960 alone. Those states used the one-vote chamber to build majorities their material power could never have produced, forming the Group of 77 in 1964, driving Resolution 1514 on colonial independence in 1960, and sustaining pressure on apartheid through a special committee from 1962 and the credentials refusal of 1974. None of that required amending the Charter. Meanwhile binding authority stayed with a Council whose permanent membership and veto have not changed since 1945, enlarged only once, from eleven seats to fifteen, effective in 1965, and reform is procedurally self-blocking because Article 108 requires the consent of all five permanent members to amend the Charter.`
      },
      {
        category: 'Mechanism',
        title: 'Peacekeeping fails where its three principles do not fit the situation',
        body: `The first force was improvised in November 1956 by the General Assembly, using the Uniting for Peace procedure precisely because Britain and France were parties to the Suez crisis and held vetoes. It ran on host state consent, impartiality between the parties, and force only in self-defense, which suits supervising a ceasefire both sides want kept and cannot stop a government or militia that has decided to kill. In Rwanda in 1994 the Council reduced rather than reinforced a monitoring mission while an estimated five hundred thousand to eight hundred thousand people were killed, a figure reconstructed from census comparison, testimony and burial records. At Srebrenica in July 1995 a lightly armed contingent in a declared safe area could not prevent the killing of more than eight thousand people. The UN published critical inquiries into both in 1999, which is why these failures are the best-documented episodes in its history.`
      },
      {
        category: 'Qualification',
        title: 'Grade an institution by whether it is asking for coordination or for compulsion',
        body: `Where every state gains from a shared rule and none gains by defecting, publishing the standard is enough, which is why the telecommunication union from 1865, the aviation body under the 1944 Chicago Convention and the postal union from 1874 have worked through every crisis of the century. Where all gain from compliance but each gains by defecting, monitoring and penalties are needed: the Montreal Protocol of 1987 achieved that with few producers, cheap substitutes and trade restrictions on non-parties, and has universal ratification, while the Kyoto Protocol of 1997 bound only some states and the Paris Agreement of 2015 chose near-universal participation with self-set, unenforced commitments. Where an institution must compel a powerful state against its own judgment, nothing built by sovereign states does it reliably, which is why the International Criminal Court from 2002 reaches only consenting states and Council referrals. Mearsheimer in 1994 and Keohane from 1984 are largely describing different ends of that same axis.`
      }
    ]
  }
};
