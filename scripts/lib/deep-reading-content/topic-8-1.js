'use strict';

/**
 * Topic 8.1, Setting the Stage for the Cold War and Decolonization: the deep reading.
 *
 * Why this exists. The success criteria ask a student to use the mandate system
 * and suppressed interwar nationalism to explain post-1945 anti-imperialism, to
 * use British war debt and the independence dates of India and Ghana to explain
 * imperial weakness, and to explain how two superpowers emerged. The First & 10
 * names all of that in three sections. What it cannot do in that space is show
 * the mechanisms: what a mandate actually was as an instrument, how a war turns
 * a creditor empire into a debtor, and why an army standing in a place decides
 * who governs it.
 *
 * This is also the chapter that states the volume's argument, because Unit 8 is
 * taught as two processes and is better understood as one system. That argument
 * belongs at the front, in full, so that the other eight chapters can refer back
 * to it rather than restating it.
 *
 * Three things carried deliberately:
 *
 *   1. The mandate system as a working instrument rather than a label. It
 *      transferred territory between empires and re-described the transfer as a
 *      trust, which conceded, in a signed document, the standard by which the
 *      arrangement would later be judged. That concession is what interwar
 *      nationalists argued from.
 *   2. The sterling balances. By 1945 Britain owed India money. One sentence,
 *      and it does more work than any general statement about exhaustion,
 *      because it shows the economic logic of the imperial relationship running
 *      backwards.
 *   3. The origins debate, named. Orthodox, revisionist and post-revisionist are
 *      real positions with real evidence, and a student who can name them writes
 *      a better essay than one who has been told which answer is correct.
 */

module.exports = {
  topicKey: 't8-1',
  slug: 'topic-8-1-cold-war-stage',
  sourceFile: 'deep-reading-topic-8-1-cold-war-stage.html',
  lessonFile: 'lesson-8-1-cold-war-stage.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.1: The World the War Left',
  eyebrow: 'Topic 8.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The World the War <em>Left</em>',
  deck: `Two things happened at once after <span class="num">1945</span>, and this unit teaches them in separate topics: European empires ran out of the money and the political will to hold their colonies, and two states that had grown stronger during the war began a rivalry neither could settle by fighting the other. This chapter argues they are one story, and sets out the machinery of each before showing where they join.`,
  meta: ['Four sections', 'The volume&rsquo;s argument, stated once', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.1 &nbsp;·&nbsp; The World the War Left &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 and 02 are the decolonization half of the story and sections 03 and 04 are the Cold War half, but 04 is the one to read carefully, because it is where the two halves become a single argument that the rest of this volume runs on.`,
    steps: [
      `<b>01 The mandate system:</b> what was actually promised in <span class="num">1919</span>, to whom, and what interwar movements did with the gap.`,
      `<b>02 The balance sheet:</b> how a war turns the world&rsquo;s largest empire into a debtor of its own colony.`,
      `<b>03 Two states that grew:</b> why the postwar line in Europe sits where the armies stopped.`,
      `<b>04 One story:</b> why a rivalry that could not be settled in Europe had to be conducted somewhere else, and where historians disagree about how it started.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'mandates',
      num: '01',
      accent: 'gold',
      name: 'The Promise, Read Closely',
      navLabel: 'The mandate system',
      dates: '1918 to 1939 &nbsp;·&nbsp; The Fourteen Points to the interwar movements',
      thesis: `Self-determination after the First World War was a principle applied in Europe and a procedure applied to everyone else. The procedure was the mandate system, and it is the specific reason anti-imperialist leaders after <span class="num">1945</span> could argue in the language of a broken standard rather than of a new demand.`,
      parts: [
        {
          heading: 'What was proposed, and to whom',
          blocks: [
            { p: `Woodrow Wilson set out his Fourteen Points in January <span class="num">1918</span>. Point Five dealt with colonies, and its wording repays slow reading: it called for an impartial adjustment of colonial claims in which the interests of the population concerned would carry equal weight with the claims of the government whose title was being decided. That is a promise of consideration in a dispute between empires. It is not a promise of sovereignty, and it does not say the population decides.` },
            { p: `The Paris settlement of <span class="num">1919</span> then did two different things in two different places. In Europe, the collapse of the Habsburg, Romanov, Ottoman and German states was resolved by drawing new sovereign countries onto the map, among them Poland, Czechoslovakia and the kingdom that became Yugoslavia. Outside Europe, Germany's colonies and the Arab provinces of the Ottoman Empire were transferred to the victorious powers under a new name.` },
            { p: `That name was the <span class="kt">mandate</span>. Article 22 of the League of Nations Covenant declared the well-being and development of these peoples a sacred trust of civilization, sorted the territories into three classes by how soon they were judged fit for self-government, and assigned each to an administering power that reported annually to a Permanent Mandates Commission in Geneva. Class A, the former Ottoman provinces including Iraq, Syria, Lebanon, Palestine and Transjordan, was described as provisionally close to independence. Class C, including South West Africa and the Pacific islands, was administered as part of the mandatory power's own territory.` },
            { p: `Read as an instrument rather than a label, the mandate does three things at once. It transfers territory between empires. It re-describes the transfer as a trust held for the inhabitants. And it creates a supervising body with a file, a schedule of reports and a petitions procedure, but with no timetable for independence and no power to compel anything. The administering power was, in every case, a state that had wanted the territory.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the system audited itself, on paper',
              html: `The Permanent Mandates Commission required an annual written report from each administering power and could receive written petitions from inhabitants, which the administering power then had to answer on the record. Those files survive, and they are useful in two contradictory ways. They are the imperial administration's own account of itself, which is exactly as self-serving as you would expect. They are also proof that a formal channel existed through which colonial subjects filed complaints that had to be responded to in writing in Geneva, which is why nationalist organizations invested effort in using it. The limit is the one worth stating in an essay: the Commission could publish criticism and embarrass a government, and it could not set a date, cancel a mandate or send anybody anywhere.`
            } }
          ]
        },
        {
          heading: 'What the interwar movements learned',
          blocks: [
            { p: `In <span class="num">1919</span> a young Vietnamese man living in Paris under the name Nguyen Ai Quoc submitted a petition to the peace conference on behalf of the Vietnamese people. Its demands were mostly for legal equality, civil liberties and representation within the French system rather than for independence. He received no hearing. He helped found the French Communist Party the following year, studied in Moscow, and returned to Asia as an organizer. He is better known by the name he took later, Ho Chi Minh, and he appears again in three chapters of this volume.` },
            { p: `That sequence is worth stating as a mechanism and not as an irony. Exclusion from the liberal settlement was one major route by which anti-colonial organizers moved toward the Communist International, which was the one body in the <span class="num">1920</span>s offering them a platform, training and money. It was not the only route, and plenty of nationalists never took it. But it is a large part of why so many independence movements after <span class="num">1945</span> arrived already carrying a Marxist vocabulary, and therefore why they were legible to Washington as Cold War problems.` },
            { p: `Elsewhere the interwar decades were spent building organizations. The <span class="kt">Indian National Congress</span>, founded in <span class="num">1885</span> as a debating body of professionals, was rebuilt in the <span class="num">1920</span>s under Mohandas Gandhi into a mass party with paid membership, provincial committees organized on linguistic lines and a repertoire of campaigns it could switch on: non-cooperation from <span class="num">1920</span>, the Salt March in <span class="num">1930</span>, Quit India in <span class="num">1942</span>. <span class="kt">Pan-Africanism</span> built a parallel network through a series of congresses, the fifth of which met in Manchester in <span class="num">1945</span> and included Kwame Nkrumah and Jomo Kenyatta, both of whom led their countries to independence within twenty years.` },
            { p: `So by <span class="num">1939</span> the movements existed, were organized, had leadership and had a documented standard to argue from. What they did not have was a weakened adversary. That is what the second war supplied, and it is the subject of section 02.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Wilson promised the colonies independence and then broke his promise. Point Five promised a hearing in a dispute over title, the mandate system delivered supervision without a deadline, and Wilson himself did not propose applying self-determination to the British or French empires. The accurate claim is both narrower and more useful: the settlement wrote a standard into a treaty that the imperial powers had signed, and interwar nationalists then held them to their own document. That is why so much anti-colonial argument after <span class="num">1945</span> takes the form of quoting the colonizer back to himself, and it is a far better sentence than a broken promise.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The mandate as legitimation. <em>The mechanism is that it took territory transferred between empires and re-described it as a trust held for the inhabitants under League supervision, which preserved control while conceding in a signed treaty that eventual self-government was the standard the arrangement would be judged by. That concession is the document interwar nationalists argued from.</em>`,
        limit: `The Commission could publish criticism, receive petitions and embarrass a government. It could set no date and compel nothing, and Class C mandates were governed as annexations in all but the word.`,
        comparison: `Against <em>Unit 7</em> on the same peace conference: Unit 7 asks what the settlement of <span class="num">1919</span> did to Germany and to Europe, and this chapter asks what it did to Cairo, Hanoi and Accra. Same room, same month, two sets of consequences, and a question about the long causes of post-1945 conflict usually wants both.`
      },
      terms: [
        ['Mandate system', 'The League arrangement under which former German and Ottoman territories were administered by victorious powers as trusts, with annual reports to Geneva and no timetable for independence.'],
        ['Self-determination', 'The principle that a people should choose its own government, applied at Paris to the European territories of the defeated empires and not to the colonies of the victorious ones.'],
        ['Permanent Mandates Commission', 'The League body that read the annual reports and received petitions, able to criticize in public and unable to compel anything.'],
        ['Pan-Africanism', 'The movement linking African and African-descended intellectuals and organizers across continents, whose fifth congress at Manchester in 1945 included several future heads of state.'],
        ['Indian National Congress', 'The party founded in 1885 and rebuilt in the 1920s into a mass organization with provincial structure, paid membership and repeatable campaigns.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'balance',
      num: '02',
      accent: 'rust',
      name: 'The Balance Sheet of Victory',
      navLabel: 'What the war cost the empires',
      dates: '1939 to 1949 &nbsp;·&nbsp; Lend-Lease to the Dutch withdrawal from Indonesia',
      thesis: `Britain did not lose an argument about colonialism in <span class="num">1945</span>. It lost the ability to pay for the answer, and the sharpest single piece of evidence is that by the end of the war Britain owed India money rather than the other way round.`,
      parts: [
        {
          heading: 'The money',
          blocks: [
            { p: `Britain financed the war by selling foreign assets, borrowing, and receiving American supplies under <span class="kt">Lend-Lease</span> from <span class="num">1941</span>. Lend-Lease was not a gift with no consequences, and it ended abruptly in August <span class="num">1945</span>, weeks after the fighting stopped. Britain then negotiated a large American loan, roughly 3.75 billion dollars, agreed in late <span class="num">1945</span> and ratified the following year, on terms that included making the pound convertible. When convertibility was tried in <span class="num">1947</span>, reserves drained so fast it was suspended within weeks.` },
            { p: `The more revealing number is the <span class="kt">sterling balances</span>. India, Egypt and other territories had supplied enormous quantities of goods, food and services to the war effort, and Britain had paid for them by crediting sterling to accounts held in London and blocking withdrawal. By the end of the war the sum owed to India alone ran to well over a billion pounds, a sum comparable to a substantial share of Britain's annual national income at the time. The relationship an empire is supposed to have with a colony had reversed on the ledger.` },
            { p: `The mechanism to carry out of this is not that empire had become unpopular, though it had, in places, on both ends. It is that an empire is a running cost paid annually in soldiers, administrators, garrisons and subsidies, and that in <span class="num">1947</span> a British government rationing bread at home had to justify each of those costs against a domestic reconstruction program it had been elected to deliver. Independence for India was announced in February <span class="num">1947</span> and executed in August, on a timetable so compressed that section 01 of the Topic 8.6 chapter is about what the compression did.` },
            { p: `France and the Netherlands faced the same arithmetic and answered it differently at first. France had been occupied, had to rebuild, and fought two long colonial wars anyway, in Indochina from <span class="num">1946</span> and in Algeria from <span class="num">1954</span>, in substantial part on American money. The Netherlands tried to reconquer Indonesia and gave up in <span class="num">1949</span> under heavy American pressure, which included the possibility that Marshall aid to a European ally would be tied to its conduct on the other side of the world. That last case is the clearest early evidence for the argument in section 04: after <span class="num">1945</span>, a European colonial war was fought subject to American opinion of it.` }
          ]
        },
        {
          heading: 'The manpower and the prestige',
          blocks: [
            { p: `The war was fought in large part by colonial soldiers. India raised the largest volunteer army in the world during the conflict, over two million men, and African troops fought in North Africa, Italy and Burma. French colonial troops were a substantial part of the forces that liberated France. A war fought by colonial soldiers, described by the Allies as a war for self-government against tyranny, is expensive to explain away afterward, and the men came home having been trained, armed and told what they were fighting for.` },
            { p: `The Atlantic Charter of August <span class="num">1941</span> made that explicit in print. Its third point stated respect for the right of all peoples to choose the form of government under which they will live. Churchill maintained the clause referred to nations under Nazi occupation, not to the British Empire, and said as much in public. Roosevelt's view differed. The disagreement mattered less than the fact that the sentence was in circulation, in every colony, in the Allies' own words.` },
            { p: `Then there is what Japanese conquest did to imperial prestige in Asia. Singapore surrendered in February <span class="num">1942</span>, and the Japanese occupation of Southeast Asia removed European administrations wholesale, in some places armed and trained local nationalists, and demonstrated to millions of people that the imperial power could be beaten. When the Europeans came back in <span class="num">1945</span>, they were in several places not restoring order but reconquering territory from governments that had already declared independence: Indonesia on 17 August <span class="num">1945</span> and Vietnam on 2 September <span class="num">1945</span>.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the argument is in the budget papers, with a caution',
              html: `The financial account of decolonization rests on unusually good sources: Treasury and Colonial Office files, the sterling balance ledgers, Cabinet minutes and the published terms of the American loan. Officials wrote down what they thought a policy would cost and whether it could be afforded, and historians can read them arguing it out. The caution is important enough that a good essay names it. A budget paper tells you what officials argued was affordable, not what was inevitable, and the same government that conceded India fought expensive campaigns in Malaya from <span class="num">1948</span> and Kenya from <span class="num">1952</span>. Cost decided the outcome where other conditions already pointed that way; treat it as one factor of several, in the manner the Topic 5.3 chapter uses for industrialization.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Fiscal exhaustion as a cause of decolonization. <em>The mechanism is that an empire is an annual running cost in garrisons, administrators and subsidies, and by 1945 Britain was borrowing from the United States to rebuild at home while carrying blocked sterling debts to India and Egypt, so every colonial commitment had to be defended against reconstruction spending in front of a domestic electorate.</em>`,
        limit: `It does not explain the cases where the same governments paid anyway: Britain in Malaya and Kenya, France in Indochina and Algeria. Cost settled the question only where a nationalist leadership already existed that could make holding expensive and could safely be handed power.`,
        comparison: `Against <em>Topic 8.5</em> on the two roads out of empire: this section supplies the metropolitan half of the explanation and Topic 8.5 supplies the colonial half. A causation question about decolonization that uses only one of the two is answerable, and an answer that holds both and says which mattered more in a named case is stronger.`
      },
      terms: [
        ['Lend-Lease', 'The American supply program from 1941 that kept Britain and the Soviet Union in the war, ended abruptly in August 1945.'],
        ['Sterling balances', 'War-time debts credited in London to colonies that had supplied goods and services, which by 1945 made Britain a net debtor to India.'],
        ['Atlantic Charter', 'The 1941 Anglo-American statement of war aims whose third point affirmed the right of peoples to choose their government, disputed at once as to whether it covered the colonies.'],
        ['Imperial prestige', 'The assumption of unchallengeable European power, which the fall of Singapore in 1942 and the Japanese occupation of Southeast Asia damaged in ways no reconquest restored.'],
        ['Reoccupation', 'The attempt after 1945 to retake colonies from wartime occupation or from local governments that had already declared independence, as in Indonesia and Vietnam.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'superpowers',
      num: '03',
      accent: 'iron',
      name: 'Two States That Grew While the Others Shrank',
      navLabel: 'The superpowers',
      dates: '1944 to 1949 &nbsp;·&nbsp; Bretton Woods to the first Soviet test',
      thesis: `The postwar map of Europe was set less by what anyone had agreed than by where the armies were standing when the shooting stopped, and the one great power whose territory had not been fought over came out of the war with the industry, the currency and, for four years, the bomb.`,
      parts: [
        {
          heading: 'The American position',
          blocks: [
            { p: `No fighting took place on the American mainland, and American industrial output roughly doubled over the course of the war. By <span class="num">1945</span> the United States accounted for something close to half of world manufacturing output, a share that says as much about the destruction of everyone else's factories as about American growth, and which fell steadily as Europe and Japan rebuilt. It held roughly two thirds of the world's monetary gold and, until August <span class="num">1949</span>, a monopoly on nuclear weapons.` },
            { p: `At Bretton Woods in <span class="num">1944</span> the Allies built the postwar financial order around that position: fixed exchange rates anchored to a dollar convertible into gold, an International Monetary Fund to lend to countries in balance-of-payments trouble, and a World Bank to fund reconstruction. The mechanism worth naming is that this made economic influence possible without occupation. A state that needs dollars to buy machinery and grain will accept conditions attached to the loan, and the conditions the United States attached generally concerned open trade and convertible currencies, which were also the terms on which American exporters did best.` }
          ]
        },
        {
          heading: 'The Soviet position',
          blocks: [
            { p: `The Soviet Union paid for its victory on a scale that is difficult to hold in the mind. Current estimates of total Soviet war dead, military and civilian together, run to roughly 26 to 27 million. The western third of the country had been fought over twice, and thousands of towns, factories and collective farms were destroyed. Against that, wartime relocation of industry east of the Urals left a large heavy-industrial base intact, and the Red Army finished the war in occupation of a belt of territory running from central Germany to the Balkans.` },
            { p: `That occupation is the mechanism of Soviet postwar influence, and it is more specific than a shaded area on a map. An occupying army decides which political parties may organize and which are banned, which newspapers get paper, who runs the interior ministry and therefore the police, and who supervises an election count. In one country after another between <span class="num">1945</span> and <span class="num">1948</span>, coalition governments including communists gave way to governments controlled by them, by exactly those means. The last was Czechoslovakia, in February <span class="num">1948</span>, and its fall did more to persuade Western European electorates of the Soviet threat than any speech had.` },
            { p: `The Soviet case for that belt, which a historian is obliged to state as an argument rather than dismiss as a cover story, was security. Russia had been invaded from the west twice in thirty years, at a cost the number above only begins to convey, and Soviet leaders described friendly governments in Poland, Hungary and Romania as the minimum condition for not being invaded a third time. Whether that is an explanation of Soviet behavior or a justification for it is precisely what the origins debate in section 04 is about, and it is not a question with a settled answer.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Soviet death toll was revised three times, in public',
              html: `Stalin told the world in <span class="num">1946</span> that the Soviet Union had lost about seven million people. Khrushchev raised the figure to twenty million in <span class="num">1961</span>. Post-Soviet demographic work, using census reconstruction and archives opened after <span class="num">1991</span>, put it at roughly 26 to 27 million, and the figure is still argued over at the margins. Each of those numbers was produced by a state with a reason to produce it: the first minimized weakness at the start of a confrontation, the second served a leader denouncing his predecessor, the third came out of a system no longer required to protect either. This is the single best illustration in Unit 8 of why a number needs an attribution and a date attached to it, and why you should write "estimates run to" rather than a bare figure.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Occupation as the mechanism of postwar influence. <em>The mechanism is that an army in place decides which parties may organize, who holds the interior ministry and the police, and who supervises an election, so the boundary of Soviet control in Europe tracks the line the Red Army reached rather than any agreed principle. The same holds in reverse for American influence in Western Europe, Japan and southern Korea.</em>`,
        limit: `It explains Europe and almost nothing else. Across Asia, Africa and Latin America neither superpower had an army in place, which is exactly why influence there had to be bought, armed, trained and argued for, and why the competition became a competition.`,
        comparison: `Against <em>Topic 8.3</em> on proxy war: the contrast between how the two superpowers behaved inside their own blocs, with tanks in Hungary in <span class="num">1956</span> and Czechoslovakia in <span class="num">1968</span> on one side and covert operations in Iran and Guatemala on the other, is a comparison a checkpoint can be built on, and it starts from the difference in what each already occupied.`
      },
      terms: [
        ['Bretton Woods', 'The 1944 agreement building the postwar financial order on a gold-convertible dollar, the IMF and the World Bank.'],
        ['Occupation zone', 'Territory administered by a victorious army after 1945, and the practical instrument by which the postwar political map of Europe was decided.'],
        ['Superpower', 'A state whose military, economic and technological reach operates on a global scale, a description that fitted only two states after 1945.'],
        ['Atomic monopoly', 'American sole possession of nuclear weapons from 1945 until the first Soviet test in August 1949.'],
        ['Security dilemma', 'The situation in which measures one state takes for its own defense are read by another as preparation for attack, producing escalation neither side intended.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'onestory',
      num: '04',
      accent: 'oxide',
      name: 'Why These Are One Story',
      navLabel: 'The volume&rsquo;s argument',
      dates: '1945 to 1991 &nbsp;·&nbsp; The argument the rest of this volume runs on',
      thesis: `A rivalry that cannot be settled where it starts gets conducted somewhere else. By <span class="num">1949</span> the line in Europe was fixed, garrisoned and, once both sides held nuclear weapons, extremely expensive to test, and at the same moment decolonization was producing new states at a rate of several a year, each of which needed money, weapons, training and recognition from somebody.`,
      parts: [
        {
          heading: 'The displacement',
          blocks: [
            { p: `Hold the two halves of this chapter together. Europe after <span class="num">1949</span> was divided by a line both sides had committed to defend and neither could move cheaply. Meanwhile the United Nations grew from <span class="num">51</span> members in <span class="num">1945</span> to more than <span class="num">140</span> by the mid-<span class="num">1970</span>s, almost entirely through decolonization, with seventeen African states becoming independent in <span class="num">1960</span> alone. Those were the places where the outcome was still open, and open outcomes are what a rivalry needs.` },
            { p: `For a newly independent government, two competing suppliers of aid, arms and diplomatic protection is genuine leverage, and leaders used it: this is the practical basis of non-alignment in the Topic 8.2 chapter. It is also a trap, and the trap is the volume's central mechanism. Once a government has accepted a patron, its domestic opponents can find the other one. A conflict that would have been settled locally, at the level of resources a poor country can raise, becomes a war that both sides can afford to keep fighting for years. Angola, Ethiopia and Somalia, Vietnam, Nicaragua and Afghanistan are all versions of that sentence, and the Topic 8.3 chapter takes them one at a time.` },
            { p: `The influence ran in the other direction too, which is the half that gets left out. Decolonization changed the Cold War. After <span class="num">1960</span> the United Nations General Assembly had a majority of states that had recently been colonies and had no interest in either bloc's agenda, which is why the Non-Aligned Movement had a forum to matter in. And American racial segregation became a foreign policy liability once Soviet broadcasts could report it to audiences in newly independent Africa and Asia, a connection documented in detail by the legal historian Mary Dudziak. The Topic 8.7 chapter returns to it.` }
          ]
        },
        {
          heading: 'Where historians disagree about the origins',
          blocks: [
            { p: `This is one of the genuinely contested questions in the course, and naming the positions is worth more in an essay than picking one and asserting it.` },
            { p: `The <b>orthodox</b> account, dominant in the West in the <span class="num">1950</span>s, locates the cause in Soviet expansionism driven by Marxist-Leninist ideology and by Stalin's conduct in Eastern Europe. The <b>revisionist</b> account, argued from the <span class="num">1960</span>s by William Appleman Williams and others, locates it in an American insistence on an open world economy that required access to markets everywhere and treated any closed sphere as a threat. The <b>post-revisionist</b> account, associated above all with John Lewis Gaddis, treats it as a security dilemma in a power vacuum, in which each side's defensive measures were read by the other as offensive, so that neither had to intend a forty-year confrontation to produce one. After the partial opening of Soviet and Eastern European archives from <span class="num">1991</span>, several historians, Gaddis among them, gave renewed weight to ideology and to Stalin's own decision-making, and that reading is itself contested.` },
            { p: `What to do with this. Name the interpretation you are using, use evidence that would actually distinguish it from the others, and say what would change your mind. Writing that historians disagree and stopping there earns nothing.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the Cold War was inevitable, and be careful about saying it began at a particular meeting. Candidate starting points include <span class="num">1917</span>, when a state was founded on the claim that capitalism would be overthrown everywhere; <span class="num">1945</span>, at Yalta and Potsdam; <span class="num">1946</span>, with Kennan's Long Telegram and Churchill's Iron Curtain speech; and <span class="num">1947</span>, with the Truman Doctrine and the Marshall Plan. A good answer picks one and explains what made it a threshold rather than another step, which is a claim about mechanism. Inevitability is the opposite: it explains a specific confrontation with a condition that had been present for decades.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Displacement of a blocked rivalry. <em>The mechanism is that a fortified line in Europe and, after 1949, nuclear weapons on both sides made a direct settlement between the superpowers unattractive, so competition moved to where sovereignty was still being decided. Decolonization was producing exactly such places at a rate of several a year, each needing arms, money and recognition, and there were two suppliers.</em>`,
        limit: `It is a framework, not a full explanation of any single case. Every conflict in this volume also had local causes older than 1945, and describing a Vietnamese or Angolan war purely as a superpower episode erases the people whose war it actually was.`,
        comparison: `Against <em>Topic 8.9</em>, the capstone: this section is the contextualization paragraph that unit's essay asks for. If you can explain why a rivalry that began in postwar Europe produced effects in Luanda, Havana and Seoul, you have written the hardest part of the prompt before reaching the thesis.`
      },
      terms: [
        ['Bipolarity', 'An international system organized around two dominant powers, in which most states are pushed toward alignment with one or the other.'],
        ['Proxy conflict', 'A war in which rival great powers arm, fund and advise opposing local sides rather than fighting each other directly.'],
        ['Non-alignment', 'The position, formalized from Bandung in 1955 and Belgrade in 1961, of refusing membership in either Cold War bloc while dealing with both.'],
        ['Client state', 'A state dependent on a great power for arms, money or protection, and expected to align with it in return.'],
        ['Post-revisionism', 'The interpretation of Cold War origins that emphasizes a security dilemma in a power vacuum rather than the deliberate aggression of either side.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the evidence, and the reason the mechanism worked as it did. The first two are the causation answers this topic is built around, and the fourth is the contextualization sentence you can reuse in every essay in this unit.`,
    pairs: [
      {
        category: 'Causation',
        title: 'The mandate system made post-1945 anti-imperialism an argument about a broken standard',
        body: `Point Five of the Fourteen Points promised colonial claims an impartial hearing in which the population's interests would count equally, not sovereignty. Article 22 of the League Covenant then declared the well-being of these peoples a sacred trust and created a Permanent Mandates Commission that read annual reports and received petitions, with no timetable and no power to compel. That combination handed anti-colonial organizations a signed document to argue from and a formal channel to argue through, which is why interwar movements invested in petitions and why post-1945 nationalists so often quoted the colonizer's own commitments back to him. The claim to avoid is that a promise of independence was made and broken; what was made was a standard, and the standard is what made the argument possible.`
      },
      {
        category: 'Economy',
        title: 'By 1945 Britain owed India money, and that reversal is the whole fiscal argument in one fact',
        body: `Britain paid for Indian and Egyptian war supplies by crediting sterling to blocked accounts in London, and the balance owed to India alone ran to well over a billion pounds. Lend-Lease ended abruptly in August 1945, an American loan of roughly 3.75 billion dollars followed on terms that forced a failed attempt at convertibility in 1947, and a government rationing bread at home had to defend every garrison against reconstruction spending. Independence was announced in February 1947 and executed that August. But notice the limit, because it is what makes the argument defensible: the same government fought in Malaya from 1948 and Kenya from 1952. Cost decided the outcome where a nationalist leadership already existed that could raise the price of staying and be handed power safely.`
      },
      {
        category: 'Power',
        title: 'The line in Europe sits where the armies stopped, which is why influence elsewhere had to be bought',
        body: `An occupying army decides which parties organize, who runs the police ministry and who supervises the count, which is how coalition governments across Eastern Europe became communist governments between 1945 and 1948, ending with Czechoslovakia in February 1948. American influence in Western Europe, Japan and southern Korea rested on the same fact plus a financial order built at Bretton Woods on a gold-convertible dollar. Then notice what follows: in Asia, Africa and Latin America neither superpower had an army standing in place, so influence had to be purchased with aid, armed with weapons, trained into local militaries and argued for in public. That difference is the reason the rest of this unit is about proxy wars rather than occupations.`
      },
      {
        category: 'Contextualization',
        title: 'A rivalry that cannot be settled where it starts is conducted where the outcome is still open',
        body: `By 1949 the European line was fixed and both superpowers held nuclear weapons, which made testing that line extremely expensive. At the same moment decolonization was producing new sovereign states at a rate of several a year, with UN membership rising from 51 in 1945 to more than 140 by the mid-1970s and seventeen African states becoming independent in 1960 alone. Each needed arms, money, technical training and recognition, and there were two suppliers, which gave new governments real leverage and gave their domestic opponents a second patron. That is how a local political conflict became a war both sides could afford to sustain for a decade. Use this as contextualization in any Unit 8 essay, and remember its limit: every one of these conflicts also had local causes older than 1945.`
      }
    ]
  }
};
