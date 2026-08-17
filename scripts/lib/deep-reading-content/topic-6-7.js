'use strict';

/**
 * Topic 6.7, Effects of Migration: the deep reading.
 *
 * Why this exists. The key concepts name three effects: women taking on new
 * roles in home societies because so many migrants were male, migrants creating
 * ethnic enclaves and transplanting culture, and the exclusionary laws that
 * followed. Each of those is stated in the curriculum as an outcome, and an
 * outcome without a mechanism is something a student can only assert.
 *
 * Four sections, each with one mechanism:
 *
 *   1. A male-selective migration produces two altered societies at once, and
 *      the one at the origin is the one surveys drop. Remittance economies,
 *      women running farms and negotiating with landlords, and the qiaoxiang
 *      villages rebuilt with money earned overseas are the evidence.
 *   2. An enclave is an institution set rather than a neighborhood: credit,
 *      job placement, dispute resolution, burial, worship, and a newspaper.
 *      Written that way it stops being about culture and becomes about what a
 *      person excluded from banks and unions has to build for themselves.
 *   3. The dictation test is the most teachable single item in the topic. A
 *      facially neutral rule administered with discretion excludes by race
 *      without racial language, which is why Natal invented it and Australia
 *      copied it: the imperial government would not permit an open bar on
 *      fellow British subjects.
 *   4. Plural societies are the long-run effect, and this is the section where
 *      overclaiming is easiest, so the causal language is deliberately about
 *      structures created and categories institutionalized rather than about
 *      later conflicts being caused by nineteenth-century recruiters.
 */

module.exports = {
  topicKey: 't6-7',
  slug: 'topic-6-7-effects-of-migration',
  lessonFile: 'lesson-6-7-effects-of-migration.html',

  titleHtml: 'Two Societies, Both <em>Changed</em>',
  deck: `A migration changes two places. The one the migrant arrives in gets a new population, a new labor supply and, quite often, a new politics of exclusion. The one the migrant leaves gets money, absences, and women running farms and households that the law still says belong to men who are eight thousand miles away. This chapter takes both ends seriously, because the curriculum names the home society first and it is the half that surveys leave out.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Each section names one mechanism and then shows it operating in at least two places, because the success criteria ask for variation and a mechanism demonstrated once is an anecdote. Section 03 is the one to learn if you learn only one: the dictation test explains how exclusion worked in three countries and why it was written the way it was.`,
    steps: [
      `<b>01 The absence:</b> what a male-selective migration does to the village it leaves.`,
      `<b>02 The enclave:</b> credit, jobs, disputes and burial, and why exclusion builds one as surely as preference does.`,
      `<b>03 The law:</b> how states learned to exclude by race without writing race into the statute.`,
      `<b>04 The long run:</b> the plural societies labor recruitment created, and how to write about them without overclaiming.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'absence',
      num: '01',
      accent: 'gold',
      name: 'The Village Full of Women and Money',
      navLabel: 'The absence',
      dates: 'c. 1850 to 1914 &nbsp;·&nbsp; Guangdong, Punjab, Sicily, and the remittance economy',
      thesis: `Nineteenth-century labor migration was heavily male by design, since employers wanted workers rather than families and recruiters were paid for the workers. The consequence at the origin is a society with a missing age cohort, an income that arrives from abroad, and women exercising authority the law had never assigned them.`,
      parts: [
        {
          heading: 'What the absence did to the household',
          blocks: [
            { p: `The imbalance was extreme and it was produced by policy as much as by preference. Plantations and mines wanted men, so recruiters recruited men; indenture schemes eventually specified a minimum proportion of women per hundred men, which tells you what the proportion had been without the rule; and receiving states in some cases barred women outright, as the United States effectively did for Chinese women from <span class="num">1875</span>. Emigrant districts of Guangdong and Fujian, of the Punjab and of southern Italy therefore lost a large share of their men of working age for years at a time.` },
            { p: `The mechanism at home follows directly. A household whose adult men are absent still has to farm, pay rent, arrange marriages, deal with moneylenders, litigate over boundaries and represent itself to officials, and the person doing all of that was the wife, the mother or the mother-in-law. Formal legal authority did not move: property was still held in a man's name, and decisions could still in principle await his letter. Effective authority moved entirely, because the person on the ground makes the decision that cannot wait for a reply by sea.` },
            { p: `The financial change is the other half. <b>Remittances</b> arrived, sometimes in quantities that transformed a district's economy, carried through dense private networks: in the Chinese case the <em>qiaopi</em>, a combined letter and money transfer carried by couriers and remittance houses along chains that ran from a Southeast Asian port to a specific village. That money bought land, paid off debt, funded schools and ancestral halls, and in the Kaiping district of Guangdong built the fortified towers that still stand there, a whole architecture financed from overseas. A woman managing an incoming remittance was managing the household's principal income.` },
            { p: `And the costs were real and should not be sentimentalized. Women carried a double burden of field work and household work, marriages were contracted and then suspended for a decade or more, southern Italy had a recognized category of women whose husbands had gone and not returned, and the men who did come back sometimes found households they no longer ran. This is a change in who exercised authority under conditions nobody chose, not an improvement in status.` }
          ]
        },
        {
          heading: 'Return, and what came back with it',
          blocks: [
            { p: `Because steam made the journey reversible, the origin society was also changed by what returned. Italian returnees bought land, which pushed up land prices and altered the rural class structure; men returning to Chinese emigrant districts brought money, foreign goods and political ideas, and overseas Chinese communities financed reform and revolutionary movements at home, which is a direct line into Unit 7. Indian returnees from Natal and Mauritius brought accounts of legal discrimination that fed the anti-indenture campaign described in Topic 6.6.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the letters were the money',
              html: `The home-society half of this story survives because the remittance system was also a postal system. Chinese <em>qiaopi</em> were letter and payment together, kept by families as records of both, and hundreds of thousands survive in archives and private collections, which is unusual: they are ordinary people&rsquo;s correspondence preserved because it was financially important. They tell us who sent what, how often, what instructions came with it and what was asked for in return. Two cautions. They over-represent the successful migrant, because a man with nothing to send wrote less and his letters were less likely to be kept, and they were often written and read by literate intermediaries, so a family&rsquo;s private business passed through a third party and was phrased accordingly. Read alongside land deeds, lineage records and the buildings the money paid for, they are the best evidence in the topic for what migration did to the places migrants came from.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Effective authority moves to the person on the ground. <em>The mechanism is that formal rights remained with absent men while every decision that could not wait for a letter by sea, planting, renting, borrowing, litigating, arranging a marriage, fell to the women present, so a male-selective migration transferred practical household and village authority to women without changing a single law about who owned what.</em>`,
        limit: `It was a redistribution of burden as much as of power, it was reversible when men returned, and in some communities the absent husband&rsquo;s lineage exercised control in his place, so the shift varied greatly with kinship structure.`,
        comparison: `Against the <em>war economies</em> of Topic 7.3: mass conscription produced the same structure, absent men and women running farms, factories and households, and there the change was reversed with equal speed at the armistice. Two very different causes and one mechanism, which is a strong sign the mechanism is real.`
      },
      terms: [
        ['Sex ratio', 'The heavy male imbalance produced by employer demand, recruiter incentives and receiving-state law.'],
        ['Remittances', 'Earnings sent home, frequently a district\'s principal income, managed by the women who received them.'],
        ['Qiaopi', 'The combined letter and money transfer carried by courier networks from Southeast Asian ports to specific Chinese villages.'],
        ['Qiaoxiang', 'An emigrant home district whose land, schools and buildings were financed by money earned overseas.'],
        ['Circular migration', 'Repeated departure and return made ordinary by steam, which carried money, goods and politics back to the origin.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'enclave',
      num: '02',
      accent: 'iron',
      name: 'An Enclave Is a Set of Institutions, Not a Neighborhood',
      navLabel: 'The enclave',
      dates: 'c. 1850 to 1914 &nbsp;·&nbsp; Huiguan, credit societies, temples and newspapers',
      thesis: `Describing an ethnic enclave by its food and its festivals describes the surface. What made it work, and what made it necessary, was a set of institutions supplying the things the surrounding society would not: credit, job placement, dispute resolution, sickness and burial insurance, worship, a school and a newspaper.`,
      parts: [
        {
          heading: 'What the institutions were and what each replaced',
          blocks: [
            { p: `<b>Credit.</b> A migrant with no collateral and no standing could not borrow from a bank, so communities ran <b>rotating credit associations</b>: a fixed group contributes to a common fund at regular intervals and each member in turn takes the whole pot. It is enforced by reputation within a group that knows each other's families, which is why it works where no legal remedy exists, and it financed shops, fishing boats, laundries, market gardens and passages for relatives.` },
            { p: `<b>Placement and mutual aid.</b> Chinese <b>huiguan</b>, associations of people from the same native place, and comparable Indian caste and regional associations, arranged lodging on arrival, found work, mediated quarrels, ran funerals and shipped the bones of the dead home for reburial. In San Francisco the huiguan federated into a single body that spoke for the community, hired lawyers and litigated exclusion cases through the American courts, sometimes successfully.` },
            { p: `<b>Worship, language and the press.</b> Temples, mosques and churches, language schools for a second generation, and newspapers in the community's own language, which did political work as well as commercial: overseas Chinese newspapers carried the reform and revolutionary arguments of the <span class="num">1890</span>s and <span class="num">1900</span>s and raised money for them.` },
            { p: `The mechanism is that <b>exclusion builds an enclave as reliably as preference does</b>. A person barred from a union, refused a bank loan, denied naturalization, ineligible to own land under an alien land law and unlikely to receive justice in a court will construct parallel institutions because the alternative is to have none. That is why the enclave is thickest exactly where the law is harshest, which the next section is about, and it is why treating an enclave as evidence that a group did not wish to integrate reverses the causation.` }
          ]
        },
        {
          heading: 'Transplantation, and what it actually looks like',
          blocks: [
            { p: `Culture did not travel intact, and the interesting cases are the ones where you can see it adapting. Indentured Indians in Fiji came from many regions and dozens of language communities and, within a generation, were speaking a common vernacular built out of Bhojpuri and neighboring languages with Fijian and English absorbed into it. Caribbean Hindustani did the same thing on the other side of the world. Caste distinctions, impossible to maintain in the barracks and the fields of an estate, were substantially flattened for the first generation and then partially reconstructed afterward, which tells you both that the structure was resilient and that it was not immutable.` },
            { p: `Religious practice was rebuilt with what was to hand and became public in ways it had not been at home: Hindu festivals became street events in Trinidad and Guyana, and Hosay, the Shia commemoration of Muharram, became an occasion joined by Hindus and by people of African descent, which is the kind of hybridization that only happens when several transplanted communities live in the same street. Food, music and language moved in every direction, and the receiving societies changed as much as the arriving ones.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that migrants either assimilated or kept to themselves, and do not describe an enclave as a failure or a refusal to integrate. Nearly every community in this topic did several things simultaneously: bought land and citizenship where it was permitted, ran parallel institutions where it was not, sent children to local schools and to a language school, married within the community in the first generation and increasingly outside it later, and campaigned in the receiving country&rsquo;s courts and press using its own political vocabulary. The San Francisco associations that ran temples and burial societies also hired American lawyers and litigated to the Supreme Court. The accurate frame is that migrants built what they were allowed to build and supplied for themselves what they were denied, and the balance between those two was set by the receiving state&rsquo;s law rather than by the migrants&rsquo; preferences.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Parallel institutions fill legal exclusions. <em>The mechanism is that a migrant denied bank credit, union membership, naturalization, landownership and reliable justice still needs capital, work, arbitration and burial, so the community supplies each of those through rotating credit funds, native-place associations, elders and mutual-aid societies, which means the density of an enclave measures the harshness of the law rather than the migrants&rsquo; reluctance to mix.</em>`,
        limit: `Enclave institutions were also hierarchical and coercive in their own right, with associations controlling debt, labor contracts and dissent within the community, so they were not simply protective.`,
        comparison: `Against the <em>merchant diasporas</em> of Topic 2.3, Sogdian, Armenian, Gujarati, Hadrami: the same institutional package of trust, credit and dispute resolution among people far from any court that would enforce a contract for them. What is new in the nineteenth century is scale and the fact that these communities were labor rather than trading diasporas, which is why the institutions had to add job placement and burial to credit.`
      },
      terms: [
        ['Huiguan', 'A native-place association arranging lodging, work, arbitration, funerals and representation for migrants from one region.'],
        ['Rotating credit association', 'A pooled fund taken in turn, enforced by reputation, which supplied capital where no bank would lend.'],
        ['Mutual aid society', 'The sickness, funeral and repatriation insurance a community ran for itself in the absence of any other.'],
        ['Fiji Hindi', 'The common vernacular built on the estates out of Bhojpuri and neighboring languages, with English and Fijian absorbed.'],
        ['Hosay', 'The Caribbean Muharram commemoration joined across communities, an example of transplanted practice becoming shared.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'exclusion',
      num: '03',
      accent: 'rust',
      name: 'How to Bar a Race Without Writing the Word',
      navLabel: 'Exclusion',
      dates: '1882 to 1914 &nbsp;·&nbsp; Chinese Exclusion, the Natal test, White Australia, the Komagata Maru',
      thesis: `Receiving states discovered in these decades that the lever they controlled absolutely was the law of entry, and then discovered a second thing: that an openly racial bar was diplomatically expensive within an empire whose subjects were supposed to be equal. The <span class="kt">dictation test</span> was the solution, and it is the single most instructive item in the topic.`,
      parts: [
        {
          heading: 'Naming it outright, and the cost of doing so',
          blocks: [
            { p: `The United States, which was not in anyone's empire, said it plainly. Anti-Chinese agitation in California, fed by wage competition in mining and railway work and by an organized labor movement that made exclusion its cause, produced the <b>Page Act</b> of <span class="num">1875</span>, effectively barring Chinese women, and then the <b>Chinese Exclusion Act</b> of <span class="num">1882</span>, which suspended the immigration of Chinese laborers and barred Chinese residents from naturalization. It was the first United States law to exclude a group by national origin, it was renewed and tightened repeatedly, and it was not fully repealed until <span class="num">1943</span>.` },
            { p: `Violence ran alongside the legislation rather than instead of it. Chinese communities were driven out of towns across the American West through the <span class="num">1880</span>s, and at Rock Springs in Wyoming in <span class="num">1885</span> a mob of white miners killed dozens of Chinese workers and burned the quarter. The legal exclusion and the expulsions reinforced each other: a group the law declared ineligible for citizenship was a group with no political protection against a mob.` },
            { p: `Canada chose a price rather than a bar, imposing a <b>head tax</b> on Chinese entrants from <span class="num">1885</span> and raising it twice until it stood at a level equal to about two years of wages. Then, to exclude Indians without saying so, it introduced in <span class="num">1908</span> a <b>continuous journey</b> regulation requiring migrants to travel to Canada directly from their country of origin on a through ticket, at a moment when no shipping company offered such a service from India. In <span class="num">1914</span> the <em>Komagata Maru</em>, chartered specifically to satisfy that rule, arrived at Vancouver carrying several hundred Indian passengers, most of them Sikhs and many of them British Army veterans, and was held offshore for two months and turned away. It is the clearest demonstration available that the regulation was designed to do what it did.` }
          ]
        },
        {
          heading: 'The dictation test, and why the empire required it',
          blocks: [
            { p: `Inside the British Empire the problem was different. Indians were British subjects, and an openly racial exclusion of British subjects by another part of the empire was an embarrassment the imperial government resisted, partly for principle and mostly because it was governing three hundred million Indians and did not want the point made so bluntly.` },
            { p: `The colony of <b>Natal</b> found the way around it in <span class="num">1897</span>. Its immigration law barred anyone unable to write out an application in a European language, a requirement with no racial word in it that a Gujarati merchant or a Punjabi laborer would fail and a European would not. It was, in the phrase of the time, a device, and everybody involved knew it.` },
            { p: `The design spread because it worked. The new Commonwealth of Australia made it the core of the <b>Immigration Restriction Act</b> of <span class="num">1901</span>, the legislative foundation of what was called the White Australia policy, under which an officer could require any arrival to write a passage of dictated text. In Australian practice the language was not fixed to the arrival's own, so a person fluent in English could be tested in Gaelic or Italian, and the discretion is the whole point: a test that any official may set in any language is not a test at all, it is a permission slip.` },
            { p: `That is the mechanism to write down, because it recurs constantly afterward in the history of immigration and voting law. <b>A facially neutral rule plus unreviewable administrative discretion equals discrimination with no discriminatory text.</b> It is harder to challenge in court than an explicit bar, it lets a government deny in public what it is doing in fact, and it preserves a legal fiction, in this case the equality of British subjects, that the state has reasons of its own for keeping.` },
            { p: `The resistance is part of the topic. Indian merchants and laborers in Natal and the Transvaal organized against registration and entry laws from the <span class="num">1890</span>s, and the campaign in which Mohandas Gandhi developed satyagraha ran from <span class="num">1906</span> to <span class="num">1914</span> and was fought over precisely these statutes. The politics of migration and the politics of anticolonialism are the same politics here, which is one of the most useful connections in Unit 6.` }
          ]
        }
      ],
      useThis: {
        tool: `A neutral rule plus administrative discretion. <em>The mechanism is that writing an exclusion in terms nobody can call racial, a language test, a through-ticket requirement, a head tax, and then leaving an official free to decide when and how to apply it, produces exclusion by race while giving the state a truthful denial, and it is far harder to challenge in court than an explicit bar because the text itself discriminates against nobody.</em>`,
        limit: `These laws restricted rather than ended movement: exempt categories, merchants, students, returning residents, kept channels open, and communities used courts, false papers and family reunification to keep them open.`,
        comparison: `Against the <em>indenture recruitment</em> of Topic 6.6: the same states that had organized the importation of Asian labor a generation earlier now legislated to keep it out, and often the same industries lobbied on both sides at different dates. That reversal shows immigration law tracking labor demand rather than any settled principle about who belonged.`
      },
      terms: [
        ['Chinese Exclusion Act', 'The 1882 US law suspending Chinese labor immigration and barring naturalization, the first exclusion by national origin.'],
        ['Head tax', 'The escalating Canadian entry charge on Chinese migrants from 1885, exclusion by price rather than by prohibition.'],
        ['Continuous journey', 'The 1908 Canadian rule requiring a direct through passage, on a route that did not exist from India.'],
        ['Komagata Maru', 'The 1914 chartered ship that met the rule, was held offshore at Vancouver and turned away with its Indian passengers.'],
        ['Dictation test', 'The Natal device of 1897, adopted by Australia in 1901, excluding by a language requirement an official chose at will.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'plural',
      num: '04',
      accent: 'oxide',
      name: 'Societies Built Out of Labor Recruitment',
      navLabel: 'The long run',
      dates: '1834 to the present &nbsp;·&nbsp; Fiji, Trinidad, Guyana, Mauritius, Malaya, East Africa',
      thesis: `In a set of territories the migration of this period did not add a minority to an existing society, it composed the society. Where planters recruited a population comparable in size to the one already there, the result was a plural society whose politics were organized around origin from the beginning, because the colonial state had organized its administration that way first.`,
      parts: [
        {
          heading: 'Where recruitment became demography',
          blocks: [
            { p: `In <b>Fiji</b>, indentured Indians arrived from <span class="num">1879</span> onward to work sugar estates, under a colonial policy that also protected Fijian communal land from sale, so the two populations grew up beside each other with different relationships to land, and by the middle of the twentieth century they were of comparable size. In <b>Trinidad</b> and <b>British Guiana</b>, indentured Indians were brought in after emancipation to work estates that formerly enslaved people were leaving, which is a labor policy with a social consequence built into it: two large communities placed in direct competition, by design, on the same land. In <b>Mauritius</b>, where indenture began earliest and ran longest, people of Indian descent became the majority of the population.` },
            { p: `In <b>Malaya</b>, Chinese migration to the tin fields and Indian recruitment to the rubber plantations of Topic 6.4 produced a territory of three large communities, each concentrated by colonial policy in a different sector and a different place. In <b>Burma</b>, Indian migration supplied labor, clerks and the Chettiar moneylending firms that came to hold a great deal of Burmese agricultural land after the rice-market collapse of the interwar years. In <b>East Africa</b>, Indian workers recruited for the Uganda Railway from the <span class="num">1890</span>s, joined by merchants, formed a commercial community occupying a middle position between a British administration and an African population.` },
            { p: `The mechanism is that a colonial state does not simply admit migrants, it <b>allocates</b> them: this community to this crop, that one to that sector, this land alienable and that land not, these people counted in this census category with these rights. When independence arrived, in Unit 8, the categories the administration had used were already the categories in which politics was conducted, and electorates frequently formed along them because the economic positions attached to them were real.` }
          ]
        },
        {
          heading: 'Writing about the long run without overclaiming',
          blocks: [
            { p: `The temptation in this section is to draw a straight line from a nineteenth-century recruiter to a twentieth-century conflict, and it should be resisted, because it flattens a century of decisions made by people who had choices. The Fijian coups of the late twentieth century, the ethnic structure of Guyanese and Trinidadian party politics, the expulsion of Asians from Uganda in <span class="num">1972</span> and comparable expulsions from Burma each have their own immediate causes in the politics of their own decade.` },
            { p: `What the nineteenth century supplies is the structure those later politics operated in, and that is a strong enough claim to be worth making carefully. Migration under indenture created populations of comparable size with unequal and different relationships to land, capital and the state; colonial administration institutionalized origin as an administrative category and frequently as an electoral one; and independence handed over a state built on those categories. Say that, name a specific later instance as an illustration rather than as an inevitability, and the argument is both accurate and strong.` },
            { p: `The reverse observation deserves equal space, because it is just as much an effect of migration. These societies produced forms that exist nowhere else and could not have existed without the collision: calypso and the steelpan, chutney music built out of Bhojpuri song and Caribbean rhythm, Hosay observed across three communities, and vernaculars like Fiji Hindi that had no speakers before an estate assembled them. Trinidad alone is the answer to any suggestion that plural societies are simply an accumulation of grievances.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the census is evidence about the state as well as the population',
              html: `Almost everything quantitative in this section comes from colonial censuses, and they have to be read twice: once for what they counted and once for what the counting did. An administration that records people by race, caste, religion and origin is not passively describing a society, it is building categories that then acquire consequences, since jobs, land rights, electoral rolls and school places get attached to them, and people learn to claim the category that carries the benefit. Categories were also unstable, and boundaries were redrawn between censuses in ways that make apparent population shifts partly artifacts of definition. So use census figures for orders of magnitude and treat the category scheme itself as a primary source about colonial governance, which is often the more interesting evidence.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Administrative categories become political ones. <em>The mechanism is that a colonial state allocating communities to sectors, to land regimes and to census classifications makes origin the axis along which jobs, property rights and representation are distributed, so when independence transfers that state intact, the categories it was administering are already the categories in which electorates and parties form.</em>`,
        limit: `Later conflicts had their own immediate causes and were not determined in the nineteenth century; the honest claim is about the structure within which twentieth-century politics was conducted, not about inevitability.`,
        comparison: `Against the <em>casta system</em> of Topic 4.7: an earlier empire that likewise wrote population categories into law and then discovered they had become the lines of political conflict. Two centuries apart, one mechanism, which is why "the state created the categories it later claimed to be managing" is a sentence worth having ready.`
      },
      terms: [
        ['Plural society', 'A society composed of communities of comparable size with different relationships to land, capital and the state.'],
        ['Indo-Fijian', 'The population descended from indentured workers brought from 1879, grown to comparable size beside Fijian communities.'],
        ['Chettiar', 'The South Indian moneylending firms whose Burmese lending left them holding much agricultural land after the interwar collapse.'],
        ['Middleman minority', 'A community occupying a commercial position between a colonial administration and a majority population.'],
        ['Census category', 'The administrative classification of people by origin, which distributed rights and later structured electoral politics.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The third card is the one to learn if you learn only one, because it explains exclusion in three countries with a single mechanism.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'A male-selective migration changed the village more than the law did',
        body: `Employers wanted workers rather than families, recruiters were paid per worker, and receiving states sometimes barred women outright, as the United States effectively did for Chinese women from 1875, so emigrant districts of Guangdong, Fujian, the Punjab and southern Italy lost a large share of their working-age men. Formal property and authority stayed in absent men&rsquo;s names, and every decision that could not wait for a letter by sea, planting, renting, borrowing, litigating, arranging marriages, fell to the women present. Remittances, carried in the Chinese case as qiaopi letters combining message and money along courier chains to specific villages, became a district&rsquo;s principal income, bought land and paid for the schools, halls and towers still standing in Kaiping. Write it as a transfer of effective authority under conditions nobody chose, not as an improvement in status.`
      },
      {
        category: 'Structure',
        title: 'The enclave measures the law, not the migrants&rsquo; preferences',
        body: `A migrant refused a bank loan, barred from a union, ineligible for naturalization and unlikely to get justice in court still needs capital, work, arbitration and burial. So communities built rotating credit associations enforced by reputation, huiguan native-place associations that housed arrivals, found work, mediated disputes and shipped the dead home, mutual-aid insurance, temples, language schools and newspapers. The San Francisco associations that ran burial societies also hired American lawyers and litigated exclusion cases. That is why the enclave is densest exactly where the law is harshest, and why reading it as a refusal to integrate reverses the causation.`
      },
      {
        category: 'Causation',
        title: 'The dictation test excluded by race with no racial word in it',
        body: `The United States could say it outright: the Page Act of 1875 barred Chinese women and the Chinese Exclusion Act of 1882 suspended Chinese labor immigration and barred naturalization, the first US exclusion by national origin, and mob violence such as Rock Springs in 1885 ran alongside it. Inside the British Empire an open bar on Indians was diplomatically impossible, since they were British subjects, so Natal in 1897 required an application written in a European language, a rule with no racial word that a Gujarati merchant would fail and a European would not. Australia made it the core of the 1901 Immigration Restriction Act, testing arrivals in whatever language an officer chose. Canada priced entry with an escalating head tax from 1885 and then required a continuous journey from 1908 on a route no company sailed from India, which the Komagata Maru met in 1914 and was turned away anyway. Neutral rule plus unreviewable discretion equals discrimination with a truthful denial.`
      },
      {
        category: 'Qualification',
        title: 'Recruitment composed societies, and it did not determine their futures',
        body: `Indentured Indians arrived in Fiji from 1879 to work sugar under a policy that also protected Fijian communal land, so two populations of eventually comparable size grew up with different relationships to land; in Trinidad and British Guiana they were recruited precisely because emancipated people were leaving the estates, placing two large communities in designed competition; in Mauritius they became the majority; in Malaya Chinese tin labor and Indian plantation labor produced three communities allocated by sector and place. Colonial administration then wrote origin into census categories to which jobs, land rights and electoral rolls attached, and independence handed that state over intact. Claim the structure, illustrate it with a later instance, and stop short of inevitability, because a century of people with choices sits in between, and because the same collisions produced some of the most inventive culture in the modern world.`
      }
    ]
  }
};
