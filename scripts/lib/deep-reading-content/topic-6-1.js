'use strict';

/**
 * Topic 6.1, Rationales for Imperialism: the deep reading.
 *
 * Why this exists. The success criteria want Social Darwinism described and its
 * use explained, nationalism and the civilizing mission distinguished as
 * separate but reinforcing, and missionary conversion analyzed as justification
 * rather than as conquest. Every one of those verbs is "explain how it worked",
 * and a survey of four ideologies can only name them.
 *
 * The chapter is built around one structural point, made four times: each of
 * these arguments works by converting something into something else. Social
 * Darwinism converts an outcome into a cause. Nationalism converts territory
 * into standing. The civilizing mission converts conquest into obligation.
 * Missionary conversion converts a foreign presence into a duty. Once a student
 * can name the conversion, they can explain the ideology instead of defining it.
 *
 * Three things carried deliberately:
 *
 *   1. Herbert Spencer opposed the imperialism his own phrase was used to
 *      justify. That is not a curiosity, it is the cleanest possible evidence
 *      that a doctrine's political work is done by whoever picks it up.
 *   2. The French offer of citizenship in Algeria was real and its price was
 *      effectively apostasy, so almost nobody took it. A standard the ruler
 *      alone judges, and that nobody can pass, is the mechanism of the civilizing
 *      mission written in law.
 *   3. Missionaries produced the most damaging evidence against the Congo Free
 *      State. A chapter that treats them only as instruments of empire cannot
 *      explain Alice Seeley Harris's photographs, and a student who holds both
 *      facts has an argument rather than a label.
 */

module.exports = {
  topicKey: 't6-1',
  slug: 'topic-6-1-rationales-for-imperialism',
  sourceFile: 'deep-reading-topic-6-1-rationales-for-imperialism.html',
  lessonFile: 'lesson-6-1-rationales-for-imperialism.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 6.1: The Arguments Made Out Loud',
  eyebrow: 'Topic 6.1 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Arguments Made Out <em>Loud</em>',
  deck: `Conquest is old. What is new after about <span class="num">1870</span> is the volume of public argument justifying it: newspaper columns, parliamentary speeches, school prize-books, missionary magazines and scientific papers, all explaining to ordinary people at home why taking somebody else's country was right. This chapter takes the four arguments the course names and asks of each one the only question that produces an explanation rather than a definition: what does this argument convert into what?`,
  meta: ['Four sections', 'Science, nation, mission, faith', 'Read alongside the First & 10'],
  footerNote: 'Topic 6.1 &nbsp;·&nbsp; The Arguments Made Out Loud &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Each section takes one rationale and does three things with it: states what the argument actually claimed, names the mechanism by which the claim did political work, and gives you the limit that keeps you from overstating it. The four are separate arguments that reinforced each other, which is exactly what the second success criterion asks you to show.`,
    steps: [
      `<b>01 Social Darwinism:</b> what Spencer wrote, what Darwin did not write, and why an argument that cannot be disproved is so useful.`,
      `<b>02 Nationalism:</b> why a colony with no profit in it was still worth taking, and what a map on a classroom wall was doing.`,
      `<b>03 The civilizing mission:</b> the standard nobody could pass, written into French and British law.`,
      `<b>04 Religious conversion:</b> missionaries as agents of empire and as its most damaging witnesses, both at once.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'socialdarwinism',
      num: '01',
      accent: 'gold',
      name: 'An Argument Built So That It Cannot Lose',
      navLabel: 'Social Darwinism',
      dates: 'c. 1860 to 1900 &nbsp;·&nbsp; Spencer, Galton, and the misuse of a biologist',
      thesis: `<span class="kt">Social Darwinism</span> took an observed outcome, which people held power over which others in <span class="num">1880</span>, and re-described it as a cause: they hold power because they are fitter. That single move is the whole mechanism, and it is what makes the doctrine so useful, because an argument in which the result is its own proof cannot be argued against.`,
      parts: [
        {
          heading: 'What was actually claimed, and by whom',
          blocks: [
            { p: `The phrase <b>survival of the fittest</b> is not Charles Darwin's. It was written by the English philosopher <b>Herbert Spencer</b> in <em>Principles of Biology</em> in <span class="num">1864</span>, five years after <em>On the Origin of Species</em>, as Spencer's own gloss on what he thought natural selection meant. Darwin liked it well enough to adopt it in a later edition, and that borrowing is how a phrase from a social philosopher came to look like a finding from a biologist.` },
            { p: `The claim itself has three parts, and separating them is what lets you explain rather than label. First, that human societies are organisms competing with each other in the same way species do. Second, that the competition is being won by some societies and lost by others, and that the winning and losing are visible on a map. Third, that interfering with the result, by protecting the losers, is not kindness but a violation of a natural law.` },
            { p: `Alongside it ran a body of work claiming to measure the differences: skull-volume studies such as Samuel Morton's <em>Crania Americana</em> of <span class="num">1839</span>, and later the statistical program Francis Galton named <b>eugenics</b> in <span class="num">1883</span>. This mattered enormously to how the argument landed, because it moved a claim about human worth out of the category of opinion and into the category of measurement. A reader in <span class="num">1890</span> encountering a table of numbers had no way to know that the categories had been chosen first and the measurements fitted to them afterward, which is what later re-examination of Morton's own data has repeatedly found.` },
            { p: `So the honest description is not that Victorians misunderstood Darwin, although many did. It is that a set of claims about human hierarchy that long predated <span class="num">1859</span> acquired, in this period, the vocabulary and the apparent authority of natural science, and that the vocabulary is what made them sayable in a parliamentary speech.` }
          ]
        },
        {
          heading: 'Why the man who coined the phrase objected to the use',
          blocks: [
            { p: `Spencer himself opposed empire. He was a radical individualist who thought the state should do almost nothing, and he regarded colonial wars as exactly the kind of state aggression he had spent his life arguing against. He denounced imperial adventures in print and, near the end of his life, the war in South Africa.` },
            { p: `That fact is worth more than any amount of denunciation, because it demonstrates the mechanism precisely. An ideology does its political work through whoever takes it up, and the argument that competition between peoples is natural and its outcome just was picked up by exactly the people the outcome favored. What made it powerful was not that it was Spencer's, or that it was scientific, but that it was <b>unfalsifiable</b>: if a conquered people resisted successfully they were proving their fitness, and if they did not they were proving their unfitness, and either way the theory was confirmed.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Darwin was a Social Darwinist, or that Social Darwinism was a scientific theory that turned out to be wrong. Neither is accurate, and the second is worse than the first. Natural selection is a claim about differential reproduction within a population over generations; Social Darwinism is a claim about the moral standing of nations, which no observation about finches can support and no experiment could ever test. Calling it "bad science" implies it was doing science and failing. The exact formulation to write is that it borrowed scientific vocabulary to convert an existing political outcome into a natural law, and that its unfalsifiability was the source of its usefulness rather than a flaw in it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Converting an outcome into a cause. <em>The mechanism is that Social Darwinism observes who currently holds power and re-describes that fact as evidence of fitness, so the result becomes its own justification: any outcome confirms the theory, no evidence can count against it, and the people it favors are told that their advantage is a law of nature rather than a thing they did.</em>`,
        limit: `It was a justification available after the fact rather than a plan of action. No cabinet decided to annex a territory because of Spencer; they decided for the strategic and financial reasons in Topics 6.2 and 6.5, and reached for this language when explaining themselves.`,
        comparison: `Against the <em>Enlightenment universalism</em> of Topic 5.1: both claim to derive politics from nature, and they reach opposite conclusions, because one starts from a claim about all human beings possessing reason and the other from a claim about populations differing in worth. Holding the two together is the fastest way to show that "natural" in a political argument is a claim being made rather than a fact being reported.`
      },
      terms: [
        ['Social Darwinism', 'The claim that societies compete as organisms do, so existing power reflects fitness and helping the weak violates nature.'],
        ['Survival of the fittest', 'Herbert Spencer\'s phrase of 1864, later adopted by Darwin, which lent a social argument the authority of biology.'],
        ['Scientific racism', 'The use of measurement and classification to present claims about human hierarchy as findings rather than opinions.'],
        ['Eugenics', 'The program Francis Galton named in 1883 for improving a population by controlling who reproduced.'],
        ['Unfalsifiable', 'A claim no possible evidence can contradict, which is why success and failure alike were read as confirming it.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'nationalism',
      num: '02',
      accent: 'iron',
      name: 'A Colony Nobody Wanted, Taken So Nobody Else Could',
      navLabel: 'Nationalism',
      dates: '1871 to 1900 &nbsp;·&nbsp; Prestige, rivalry, and the map on the wall',
      thesis: `Nationalism converted territory into <b>standing</b>. Once colonies were counted as a measure of a nation's rank, their value stopped depending on whether they paid, because a worthless territory in your column was still a territory missing from a rival's, and that is why states annexed deserts.`,
      parts: [
        {
          heading: 'Empire as a positional good',
          blocks: [
            { p: `An economist would call a colony in this period a <b>positional good</b>: something whose value comes partly from how much of it you have relative to someone else. A grain field is worth what it grows whoever else owns one. Standing is worth only what your neighbors do not have.` },
            { p: `That distinction explains what the profit motive cannot. A great many colonial territories never returned their administrative costs, and contemporaries knew it and said so in print. They were taken anyway, and the reasons given in cabinet were frequently about denial rather than gain: to keep a rival off a coastline, to hold a route, to prevent an encirclement. Once one power began claiming, the cost of not claiming rose for everyone else, which is why the pace of annexation in the <span class="num">1880</span>s looks less like a plan than like a run on a bank.` },
            { p: `The timing follows the state system. Italy unified in <span class="num">1861</span> and Germany in <span class="num">1871</span>, and both entered the competition as latecomers with a great deal to prove and nothing yet in the column. Bismarck had been openly dismissive of colonies and then in <span class="num">1884</span> and <span class="num">1885</span> claimed Togo, Kamerun, South West Africa and East Africa in the space of about a year. Nothing about the economic case for those territories changed in that year. The domestic political case did.` }
          ]
        },
        {
          heading: 'The argument at home, and the argument at Fashoda',
          blocks: [
            { p: `Nationalism is the one rationale in this topic that had to be sold to a mass electorate, because by the <span class="num">1880</span>s in Britain and France a widening franchise and a cheap press meant colonial policy was public argument. In <span class="num">1885</span> Jules Ferry defended expansion to the French Chamber on three grounds at once, economic outlets for French industry, a duty toward what he called inferior races, and the standing of France among nations, and the third was the one that carried a room still smarting from defeat by Prussia in <span class="num">1871</span>.` },
            { p: `The apparatus of persuasion was ordinary and everywhere: school atlases with the empire in one color, illustrated weeklies, adventure fiction for boys, international exhibitions with reconstructed villages, and the missionary lantern-slide lecture in a parish hall. The point of a map on a schoolroom wall is not information. It is that a child learns the shape of the nation's greatness before learning any argument about it, and an adult who has known that map since childhood does not experience empire as a policy.` },
            { p: `<b>Fashoda</b>, in <span class="num">1898</span>, is the clearest single demonstration. A small French force under Marchand reached a ruined fort on the Upper Nile after a march of two years; a much larger British force under Kitchener arrived shortly afterward; the two commanders were courteous and the governments came close to war over a location neither could profitably use. France withdrew. The crisis is unintelligible in terms of the value of the ground and perfectly intelligible in terms of standing, which is the point.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: this argument was made in public, on purpose',
              html: `Unlike most of what states do, imperial justification survives in enormous quantity, because its purpose was publicity. We have the Hansard record of every parliamentary speech, the Chamber debates in France, mass-circulation newspapers, exhibition catalogues, school textbooks and the annual reports of missionary societies written to raise money. The abundance carries one caution that changes how you should use it. A published justification is evidence of what its author expected to be <em>persuasive</em>, not necessarily of what motivated the decision, and the two can differ. The reliable inference is about the audience: an argument printed for a mass readership tells you what that readership was prepared to accept, which is precisely what the ideology of empire consisted of.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Territory as a positional good. <em>The mechanism is that once colonies are counted as a measure of national rank, a territory's value no longer depends on its returns, because a claim you do not make is a claim a rival makes, so the cost of standing still rises with every annexation somebody else completes and states acquire land they know will not pay.</em>`,
        limit: `Prestige explains the pace and some of the targets, not the whole phenomenon. India, Egypt and the Malayan tin and rubber territories were held for reasons that were financial and strategic and would have applied without a single speech about national greatness.`,
        comparison: `Against the <em>maritime empires</em> of Topic 4.2: Portugal took harbors because pepper cargoes paid for them, and the calculation was a commercial one made by men who could show a ledger. By the 1880s the calculation includes an item no ledger holds, which is why a comparison across the two periods should be about what counted as a reason rather than about how much territory changed hands.`
      },
      terms: [
        ['Positional good', 'Something whose value depends on having more of it than a rival, which is why unprofitable colonies were still worth taking.'],
        ['Prestige imperialism', 'Annexation undertaken for national standing rather than return, common among latecomer states after 1871.'],
        ['Pre-emptive claim', 'Territory taken chiefly to deny it to a competitor, which drove the pace of the 1880s.'],
        ['Fashoda', 'The 1898 Nile confrontation between French and British forces that nearly caused a war over unprofitable ground.'],
        ['Popular imperialism', 'Empire sold to a mass electorate through press, schoolbooks, exhibitions and fiction rather than argued in cabinet alone.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'civilizing',
      num: '03',
      accent: 'rust',
      name: 'The Standard Nobody Was Allowed to Pass',
      navLabel: 'Civilizing mission',
      dates: '1835 to 1900 &nbsp;·&nbsp; Macaulay, the mission civilisatrice, Kipling',
      thesis: `The <span class="kt">civilizing mission</span> converted conquest into obligation. Once rule is described as a duty owed to the ruled, leaving becomes a dereliction rather than a restoration, and because the ruler alone judges when the duty is discharged, the standard can be genuinely offered and never actually met.`,
      parts: [
        {
          heading: 'How the argument was constructed',
          blocks: [
            { p: `The claim is not that other peoples were permanently incapable. That version existed, and it belongs in section 01. The civilizing mission claims something more slippery: that other peoples are <em>not yet</em> ready, that readiness is achievable, and that the imperial power is the instrument by which they will achieve it. The word doing the work is "yet".` },
            { p: `In its British form the classic text is Thomas Macaulay's <b>Minute on Indian Education</b> of <span class="num">1835</span>, which proposed to educate a class of intermediaries who would be, in his phrase, Indian in blood and color but English in taste, opinions, morals and intellect. In its French form it is the <b>mission civilisatrice</b>, an explicit doctrine of the Third Republic under which colonial subjects were in principle to be assimilated into French civilization. Rudyard Kipling's <em>The White Man's Burden</em>, published in <span class="num">1899</span> and addressed to the United States as it took the Philippines, is the poem version, and its subject is thankless labor undertaken for ungrateful beneficiaries.` },
            { p: `Read for structure rather than sentiment, all three do the same thing. They install the imperial power as both the teacher and the examiner, and they specify no date, no test and no procedure by which a subject population could be found to have passed.` }
          ]
        },
        {
          heading: 'The law is where you can see it working',
          blocks: [
            { p: `France wrote the offer down, which is why French colonial law is the best evidence available for this mechanism. Under the <b>sénatus-consulte</b> of <span class="num">1865</span>, Muslim Algerians were French <em>subjects</em> and could apply to become French <em>citizens</em>. The condition was that an applicant renounce the jurisdiction of Muslim personal-status law in matters such as marriage and inheritance, which was widely understood by Algerian Muslims as a renunciation of Islam itself. The offer stood for decades. The number who took it ran to a few thousand out of a population of millions.` },
            { p: `Alongside it ran the <b>code de l'indigénat</b>, formalized in Algeria in <span class="num">1881</span> and extended elsewhere, a separate body of punishable offenses that applied to subjects and not to citizens, under which an administrator could impose fines and imprisonment without a court. So the same state that promised assimilation maintained in law a category of person to whom ordinary legal protection did not extend. The two are not a contradiction the historian has to resolve. They are the mechanism: a door that is open in principle, priced so that almost nobody can walk through it, beside a legal regime that governs everyone who does not.` },
            { p: `British practice reached a similar place by a different route. India after <span class="num">1858</span> was governed on the premise of eventual fitness for self-government, and Indians who did exactly what Macaulay proposed, taking English degrees, entering the professions, qualifying for the Indian Civil Service, found the senior grades effectively closed, the examination held in London until well into the twentieth century, and the promise deferred. The Indian National Congress, founded in <span class="num">1885</span>, was assembled largely out of that educated class, which is the outcome this section should leave you with: an argument that creates a group qualified by its own stated standard, and then refuses the standard, produces exactly the leadership that will eventually use it against the argument. Topic 6.3 is what they did with it.` }
          ]
        }
      ],
      useThis: {
        tool: `A standard set and judged by the same party. <em>The mechanism is that describing rule as a temporary duty owed to the ruled makes withdrawal a moral failure rather than a restoration of sovereignty, and because the imperial power is both the teacher and the examiner, with no date, test or procedure specified, the promise can be sincerely offered and indefinitely postponed at once.</em>`,
        limit: `It was not only rhetoric, and treating it as pure cover misses what it actually built: schools, printing presses, legal codes and railways were real, and some colonial officials believed the doctrine and were frustrated by their own governments. Its outputs were genuine; its terminus was not.`,
        comparison: `Against <em>Social Darwinism</em> in section 01: the two look similar and point opposite ways, because one says the hierarchy is permanent and biological and the other says it is temporary and educational. That is exactly why they reinforced each other in practice. The first supplied the ranking and the second supplied the job, so a speaker could move between them depending on whether he was justifying the conquest or the administration.`
      },
      terms: [
        ['Civilizing mission', 'The claim that imperial rule is a temporary duty to prepare a people for self-government, with readiness judged by the ruler.'],
        ['Macaulay\'s Minute', 'The 1835 education policy proposing a class of Indians trained to be English in taste, opinions, morals and intellect.'],
        ['Assimilation', 'The French doctrine that colonial subjects could become French, offered in law and priced beyond reach in practice.'],
        ['Code de l\'indigenat', 'The separate punitive law for colonial subjects, formalized in Algeria in 1881, allowing punishment without a court.'],
        ['Subject and citizen', 'The legal distinction that let an empire promise inclusion while governing most people outside ordinary law.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'conversion',
      num: '04',
      accent: 'oxide',
      name: 'The Missionaries Were Both Things at Once',
      navLabel: 'Conversion',
      dates: '1792 to 1908 &nbsp;·&nbsp; Livingstone, the societies, and the Congo evidence',
      thesis: `Religious conversion converted a foreign presence into a duty, and it is the rationale that most resists a single verdict, because the same movement that supplied empire with personnel, maps and a moral vocabulary also produced the evidence that destroyed the Congo Free State.`,
      parts: [
        {
          heading: 'What the missionary movement was',
          blocks: [
            { p: `It was a mass voluntary movement before it was anything else. The Baptist Missionary Society was founded in <span class="num">1792</span>, the London Missionary Society in <span class="num">1795</span>, the Church Missionary Society in <span class="num">1799</span>, the American Board in <span class="num">1810</span>, financed by small subscriptions from ordinary congregations and sustained by a stream of published letters, magazines and lecture tours. That funding model matters: a society that lives on donations must produce a continuous supply of vivid reporting from the field, which is why the missionary movement generated the largest body of first-hand European description of Africa and the Pacific in the nineteenth century.` },
            { p: `David Livingstone gave the argument its most quoted form in a lecture at Cambridge in <span class="num">1857</span>, proposing Christianity, commerce and civilization as a single package that would end the East African slave trade by replacing it with legitimate trade. Notice the structure. The stated goal is abolition, which is a genuine humanitarian aim held by people who had campaigned for it at home, and the means require European commercial and eventually political presence, so the humanitarian argument delivers the imperial conclusion without anyone having to argue for the conclusion directly.` },
            { p: `The practical services to empire were substantial and mostly not conspiratorial. Missionaries mapped, learned and codified languages, reduced them to writing, trained clerks and teachers, and were often the only Europeans with local knowledge when an administration arrived. When a mission was attacked, a government had a public reason to intervene. And conversion was extremely uneven: large in parts of sub-Saharan Africa, the Pacific and Korea, minimal across South Asia and the Muslim world, where an established scholarly religion met the missionary on its own ground and where colonial governments often restrained missionary activity precisely because they feared the political consequences.` }
          ]
        },
        {
          heading: 'The Congo, where the movement turned on the empire',
          blocks: [
            { p: `The strongest case against reading missionaries as simply instruments is the campaign that brought down Leopold II's Congo Free State, the subject of Topic 6.2. The rubber regime's violence was documented above all by missionaries who were living in it. <b>Alice Seeley Harris</b>, a Baptist missionary, photographed survivors of mutilation in <span class="num">1904</span>, including the widely reproduced image of a father looking at the severed hand and foot of his daughter; she and her husband John Harris toured those photographs as lantern-slide lectures to enormous audiences. <b>William Sheppard</b>, an African American Presbyterian missionary, gathered evidence in the Kasai that was central to the case, and was sued for libel by a rubber company in <span class="num">1909</span> and acquitted.` },
            { p: `Their material fed E. D. Morel's Congo Reform Association, founded in <span class="num">1904</span>, and ran alongside the British consul Roger Casement's official report of the same year. Belgium annexed the Free State from its king in <span class="num">1908</span>. The reform movement did not oppose empire; most of its leading figures wanted a better one, and the outcome was a change of imperial management rather than of sovereignty. But the evidence came from inside the missionary movement, and a student who claims missionaries were the moral wing of conquest has to explain those photographs.` },
            { p: `The long-run effect is the same ambivalence in another form. Mission schools and mission presses produced literacy, printing in local languages and a generation of educated Africans and Asians, and a great many of the leaders of the anticolonial movements in Topics 6.3 and 8.4 were mission-educated. An institution built to make people more like their rulers gave them the tools with which to argue.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `The two available errors sit on opposite sides and are equally costly. The first is to write that these four ideologies <b>caused</b> imperialism. They did not: the decisions in Topics 6.2, 6.4 and 6.5 were driven by raw materials, markets, strategy and the collapsing price of conquest, and the ideologies explain how those decisions were made acceptable and what shape they took. The second is to write them off as mere cover, cynically deployed by people who believed none of it. That fails on the evidence too, because sincere believers staffed the missions and the schools, and because the beliefs are visible in policies nobody needed cover for, in what was taught, whose law was recognized, which land was declared empty. The defensible position is the useful one: ideology was not the engine, and it was not decoration, it was the thing that made the engine's output governable and the thing that decided who was allowed to become what.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A humanitarian premise with an imperial conclusion. <em>The mechanism is that framing a foreign presence as a rescue, from the slave trade, from famine, from a practice named as barbarous, makes intervention follow from a moral commitment the audience already holds, so no separate argument for conquest has to be made and opposing the conquest reads as indifference to the harm.</em>`,
        limit: `The same movement produced the Congo evidence, the mission presses and much of the anticolonial leadership, so it cannot be reduced to an arm of the state, and its converts were agents who took what they wanted from it rather than recipients of it.`,
        comparison: `Against the <em>Jesuit missions</em> of Topics 4.6 and 3.3: those operated within states, Ming and Qing China and Mughal India, that were more powerful than the missionaries' home countries, so accommodation was the strategy and expulsion was always available to the host. The nineteenth-century mission arrived with a gunboat behind it, and the comparison shows that what changed was not the theology but the balance of force.`
      },
      terms: [
        ['Missionary society', 'A subscription-funded voluntary body such as the CMS or LMS, whose need for vivid field reporting shaped what Europe read.'],
        ['Christianity, commerce, civilization', 'Livingstone\'s 1857 formula, which reached an imperial conclusion from an abolitionist premise.'],
        ['Congo Reform Association', 'Morel\'s 1904 campaign, fed by missionary photography and testimony, which forced Belgium\'s 1908 annexation.'],
        ['Alice Seeley Harris', 'The Baptist missionary whose 1904 photographs of Congo mutilation were toured as lantern lectures across Britain.'],
        ['Mission education', 'The schools and presses that spread literacy and printing and trained much of the later anticolonial leadership.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The second card is the one the success criteria ask for by name, so learn its structure rather than its examples.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Social Darwinism worked because nothing could disprove it',
        body: `Herbert Spencer wrote "survival of the fittest" in 1864, five years after Origin of Species, and Darwin borrowed it back, which is how a social philosopher's phrase acquired a biologist's authority. The argument had three parts: societies compete as organisms do, the results are visible on a map, and protecting the losers violates a natural law. Skull measurement and, after 1883, Galton's eugenics supplied the appearance of measurement. Its power was structural rather than evidential, because successful resistance proved fitness and unsuccessful resistance proved unfitness, so every outcome confirmed it. The sharpest evidence that a doctrine's work is done by whoever picks it up is that Spencer himself denounced colonial war.`
      },
      {
        category: 'Comparison',
        title: 'Nationalism and the civilizing mission are different arguments that need each other',
        body: `Nationalism converts territory into standing, which is why Bismarck, after years of dismissing colonies, claimed Togo, Kamerun, South West Africa and East Africa within about a year in 1884 and 1885, and why France and Britain came near war at Fashoda in 1898 over ground neither could use. The civilizing mission converts conquest into obligation, installing the ruler as both teacher and examiner with no date or test specified, which is why the French offer of citizenship under the 1865 senatus-consulte, priced at renouncing Muslim personal-status law, was taken by a few thousand people in fifty years while the code de l&rsquo;indigenat governed everyone else. They reinforce each other because the first supplies the reason to acquire and the second supplies the reason to stay, and a speaker could move between them depending on which he was defending.`
      },
      {
        category: 'Evidence',
        title: 'Missionaries supplied the movement and its most damaging witnesses',
        body: `Livingstone&rsquo;s 1857 formula of Christianity, commerce and civilization reached an imperial conclusion from an abolitionist premise, and mission societies supplied maps, languages, schools and a public reason to intervene. The same movement produced the evidence that destroyed the Congo Free State: Alice Seeley Harris photographed mutilation survivors in 1904 and toured the images as lantern lectures, William Sheppard gathered Kasai evidence and was sued for libel in 1909 and acquitted, and their material fed Morel&rsquo;s Congo Reform Association alongside Casement&rsquo;s consular report, with Belgium annexing the colony from its king in 1908. Use this when a question asks whether ideology was cover: it was not one thing, and the ambivalence is the answer.`
      },
      {
        category: 'Causation',
        title: 'Ideology explains the permission and the shape, not the decision',
        body: `Empires expanded after 1870 for the reasons in Topics 6.2, 6.4 and 6.5: raw materials for industrial production, markets, strategic routes, and a collapse in the cost of conquest. What the four rationales did was make those decisions acceptable to electorates and legible to administrators, and then determine the form the resulting rule took, what was taught, whose law was recognized, which land was recorded as empty. The proof that they were not mere cover is that they show up in policies requiring no justification at home, and the proof that they were not the cause is that the same arguments circulated for decades before the annexations began. Write it as permission and shape, not as motive.`
      }
    ]
  }
};
